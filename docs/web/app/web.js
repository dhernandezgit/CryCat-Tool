var mu = { exports: {} }, ao = {}, hu = { exports: {} }, G = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yr = Symbol.for("react.element"), Zd = Symbol.for("react.portal"), ep = Symbol.for("react.fragment"), tp = Symbol.for("react.strict_mode"), np = Symbol.for("react.profiler"), rp = Symbol.for("react.provider"), ap = Symbol.for("react.context"), op = Symbol.for("react.forward_ref"), ip = Symbol.for("react.suspense"), sp = Symbol.for("react.memo"), lp = Symbol.for("react.lazy"), Js = Symbol.iterator;
function up(e) {
  return e === null || typeof e != "object" ? null : (e = Js && e[Js] || e["@@iterator"], typeof e == "function" ? e : null);
}
var gu = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, vu = Object.assign, yu = {};
function rr(e, t, n) {
  this.props = e, this.context = t, this.refs = yu, this.updater = n || gu;
}
rr.prototype.isReactComponent = {};
rr.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
rr.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function xu() {
}
xu.prototype = rr.prototype;
function Zi(e, t, n) {
  this.props = e, this.context = t, this.refs = yu, this.updater = n || gu;
}
var es = Zi.prototype = new xu();
es.constructor = Zi;
vu(es, rr.prototype);
es.isPureReactComponent = !0;
var Zs = Array.isArray, wu = Object.prototype.hasOwnProperty, ts = { current: null }, ju = { key: !0, ref: !0, __self: !0, __source: !0 };
function ku(e, t, n) {
  var r, a = {}, o = null, s = null;
  if (t != null) for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (o = "" + t.key), t) wu.call(t, r) && !ju.hasOwnProperty(r) && (a[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) a.children = n;
  else if (1 < u) {
    for (var l = Array(u), p = 0; p < u; p++) l[p] = arguments[p + 2];
    a.children = l;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) a[r] === void 0 && (a[r] = u[r]);
  return { $$typeof: Yr, type: e, key: o, ref: s, props: a, _owner: ts.current };
}
function cp(e, t) {
  return { $$typeof: Yr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function ns(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Yr;
}
function dp(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var el = /\/+/g;
function Co(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? dp("" + e.key) : t.toString(36);
}
function ya(e, t, n, r, a) {
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
        case Yr:
        case Zd:
          s = !0;
      }
  }
  if (s) return s = e, a = a(s), e = r === "" ? "." + Co(s, 0) : r, Zs(a) ? (n = "", e != null && (n = e.replace(el, "$&/") + "/"), ya(a, t, n, "", function(p) {
    return p;
  })) : a != null && (ns(a) && (a = cp(a, n + (!a.key || s && s.key === a.key ? "" : ("" + a.key).replace(el, "$&/") + "/") + e)), t.push(a)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", Zs(e)) for (var u = 0; u < e.length; u++) {
    o = e[u];
    var l = r + Co(o, u);
    s += ya(o, t, n, l, a);
  }
  else if (l = up(e), typeof l == "function") for (e = l.call(e), u = 0; !(o = e.next()).done; ) o = o.value, l = r + Co(o, u++), s += ya(o, t, n, l, a);
  else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s;
}
function ta(e, t, n) {
  if (e == null) return e;
  var r = [], a = 0;
  return ya(e, r, "", "", function(o) {
    return t.call(n, o, a++);
  }), r;
}
function pp(e) {
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
var Re = { current: null }, xa = { transition: null }, fp = { ReactCurrentDispatcher: Re, ReactCurrentBatchConfig: xa, ReactCurrentOwner: ts };
function Su() {
  throw Error("act(...) is not supported in production builds of React.");
}
G.Children = { map: ta, forEach: function(e, t, n) {
  ta(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return ta(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return ta(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!ns(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
G.Component = rr;
G.Fragment = ep;
G.Profiler = np;
G.PureComponent = Zi;
G.StrictMode = tp;
G.Suspense = ip;
G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fp;
G.act = Su;
G.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = vu({}, e.props), a = e.key, o = e.ref, s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, s = ts.current), t.key !== void 0 && (a = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (l in t) wu.call(t, l) && !ju.hasOwnProperty(l) && (r[l] = t[l] === void 0 && u !== void 0 ? u[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    u = Array(l);
    for (var p = 0; p < l; p++) u[p] = arguments[p + 2];
    r.children = u;
  }
  return { $$typeof: Yr, type: e.type, key: a, ref: o, props: r, _owner: s };
};
G.createContext = function(e) {
  return e = { $$typeof: ap, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: rp, _context: e }, e.Consumer = e;
};
G.createElement = ku;
G.createFactory = function(e) {
  var t = ku.bind(null, e);
  return t.type = e, t;
};
G.createRef = function() {
  return { current: null };
};
G.forwardRef = function(e) {
  return { $$typeof: op, render: e };
};
G.isValidElement = ns;
G.lazy = function(e) {
  return { $$typeof: lp, _payload: { _status: -1, _result: e }, _init: pp };
};
G.memo = function(e, t) {
  return { $$typeof: sp, type: e, compare: t === void 0 ? null : t };
};
G.startTransition = function(e) {
  var t = xa.transition;
  xa.transition = {};
  try {
    e();
  } finally {
    xa.transition = t;
  }
};
G.unstable_act = Su;
G.useCallback = function(e, t) {
  return Re.current.useCallback(e, t);
};
G.useContext = function(e) {
  return Re.current.useContext(e);
};
G.useDebugValue = function() {
};
G.useDeferredValue = function(e) {
  return Re.current.useDeferredValue(e);
};
G.useEffect = function(e, t) {
  return Re.current.useEffect(e, t);
};
G.useId = function() {
  return Re.current.useId();
};
G.useImperativeHandle = function(e, t, n) {
  return Re.current.useImperativeHandle(e, t, n);
};
G.useInsertionEffect = function(e, t) {
  return Re.current.useInsertionEffect(e, t);
};
G.useLayoutEffect = function(e, t) {
  return Re.current.useLayoutEffect(e, t);
};
G.useMemo = function(e, t) {
  return Re.current.useMemo(e, t);
};
G.useReducer = function(e, t, n) {
  return Re.current.useReducer(e, t, n);
};
G.useRef = function(e) {
  return Re.current.useRef(e);
};
G.useState = function(e) {
  return Re.current.useState(e);
};
G.useSyncExternalStore = function(e, t, n) {
  return Re.current.useSyncExternalStore(e, t, n);
};
G.useTransition = function() {
  return Re.current.useTransition();
};
G.version = "18.3.1";
hu.exports = G;
var w = hu.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mp = w, hp = Symbol.for("react.element"), gp = Symbol.for("react.fragment"), vp = Object.prototype.hasOwnProperty, yp = mp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, xp = { key: !0, ref: !0, __self: !0, __source: !0 };
function Cu(e, t, n) {
  var r, a = {}, o = null, s = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) vp.call(t, r) && !xp.hasOwnProperty(r) && (a[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) a[r] === void 0 && (a[r] = t[r]);
  return { $$typeof: hp, type: e, key: o, ref: s, props: a, _owner: yp.current };
}
ao.Fragment = gp;
ao.jsx = Cu;
ao.jsxs = Cu;
mu.exports = ao;
var i = mu.exports, _u = { exports: {} }, We = {}, Nu = { exports: {} }, Eu = {};
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
  function t(b, B) {
    var F = b.length;
    b.push(B);
    e: for (; 0 < F; ) {
      var W = F - 1 >>> 1, K = b[W];
      if (0 < a(K, B)) b[W] = B, b[F] = K, F = W;
      else break e;
    }
  }
  function n(b) {
    return b.length === 0 ? null : b[0];
  }
  function r(b) {
    if (b.length === 0) return null;
    var B = b[0], F = b.pop();
    if (F !== B) {
      b[0] = F;
      e: for (var W = 0, K = b.length, gt = K >>> 1; W < gt; ) {
        var be = 2 * (W + 1) - 1, Ae = b[be], he = be + 1, Ke = b[he];
        if (0 > a(Ae, F)) he < K && 0 > a(Ke, Ae) ? (b[W] = Ke, b[he] = F, W = he) : (b[W] = Ae, b[be] = F, W = be);
        else if (he < K && 0 > a(Ke, F)) b[W] = Ke, b[he] = F, W = he;
        else break e;
      }
    }
    return B;
  }
  function a(b, B) {
    var F = b.sortIndex - B.sortIndex;
    return F !== 0 ? F : b.id - B.id;
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
  var l = [], p = [], v = 1, f = null, h = 3, x = !1, _ = !1, y = !1, $ = typeof setTimeout == "function" ? setTimeout : null, m = typeof clearTimeout == "function" ? clearTimeout : null, d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function c(b) {
    for (var B = n(p); B !== null; ) {
      if (B.callback === null) r(p);
      else if (B.startTime <= b) r(p), B.sortIndex = B.expirationTime, t(l, B);
      else break;
      B = n(p);
    }
  }
  function g(b) {
    if (y = !1, c(b), !_) if (n(l) !== null) _ = !0, ne(j);
    else {
      var B = n(p);
      B !== null && L(g, B.startTime - b);
    }
  }
  function j(b, B) {
    _ = !1, y && (y = !1, m(P), P = -1), x = !0;
    var F = h;
    try {
      for (c(B), f = n(l); f !== null && (!(f.expirationTime > B) || b && !q()); ) {
        var W = f.callback;
        if (typeof W == "function") {
          f.callback = null, h = f.priorityLevel;
          var K = W(f.expirationTime <= B);
          B = e.unstable_now(), typeof K == "function" ? f.callback = K : f === n(l) && r(l), c(B);
        } else r(l);
        f = n(l);
      }
      if (f !== null) var gt = !0;
      else {
        var be = n(p);
        be !== null && L(g, be.startTime - B), gt = !1;
      }
      return gt;
    } finally {
      f = null, h = F, x = !1;
    }
  }
  var S = !1, N = null, P = -1, C = 5, E = -1;
  function q() {
    return !(e.unstable_now() - E < C);
  }
  function se() {
    if (N !== null) {
      var b = e.unstable_now();
      E = b;
      var B = !0;
      try {
        B = N(!0, b);
      } finally {
        B ? Y() : (S = !1, N = null);
      }
    } else S = !1;
  }
  var Y;
  if (typeof d == "function") Y = function() {
    d(se);
  };
  else if (typeof MessageChannel < "u") {
    var Z = new MessageChannel(), je = Z.port2;
    Z.port1.onmessage = se, Y = function() {
      je.postMessage(null);
    };
  } else Y = function() {
    $(se, 0);
  };
  function ne(b) {
    N = b, S || (S = !0, Y());
  }
  function L(b, B) {
    P = $(function() {
      b(e.unstable_now());
    }, B);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(b) {
    b.callback = null;
  }, e.unstable_continueExecution = function() {
    _ || x || (_ = !0, ne(j));
  }, e.unstable_forceFrameRate = function(b) {
    0 > b || 125 < b ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : C = 0 < b ? Math.floor(1e3 / b) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return h;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(l);
  }, e.unstable_next = function(b) {
    switch (h) {
      case 1:
      case 2:
      case 3:
        var B = 3;
        break;
      default:
        B = h;
    }
    var F = h;
    h = B;
    try {
      return b();
    } finally {
      h = F;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(b, B) {
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
    var F = h;
    h = b;
    try {
      return B();
    } finally {
      h = F;
    }
  }, e.unstable_scheduleCallback = function(b, B, F) {
    var W = e.unstable_now();
    switch (typeof F == "object" && F !== null ? (F = F.delay, F = typeof F == "number" && 0 < F ? W + F : W) : F = W, b) {
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
    return K = F + K, b = { id: v++, callback: B, priorityLevel: b, startTime: F, expirationTime: K, sortIndex: -1 }, F > W ? (b.sortIndex = F, t(p, b), n(l) === null && b === n(p) && (y ? (m(P), P = -1) : y = !0, L(g, F - W))) : (b.sortIndex = K, t(l, b), _ || x || (_ = !0, ne(j))), b;
  }, e.unstable_shouldYield = q, e.unstable_wrapCallback = function(b) {
    var B = h;
    return function() {
      var F = h;
      h = B;
      try {
        return b.apply(this, arguments);
      } finally {
        h = F;
      }
    };
  };
})(Eu);
Nu.exports = Eu;
var wp = Nu.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jp = w, He = wp;
function z(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var zu = /* @__PURE__ */ new Set(), Pr = {};
function _n(e, t) {
  Kn(e, t), Kn(e + "Capture", t);
}
function Kn(e, t) {
  for (Pr[e] = t, e = 0; e < t.length; e++) zu.add(t[e]);
}
var Rt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ti = Object.prototype.hasOwnProperty, kp = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, tl = {}, nl = {};
function Sp(e) {
  return ti.call(nl, e) ? !0 : ti.call(tl, e) ? !1 : kp.test(e) ? nl[e] = !0 : (tl[e] = !0, !1);
}
function Cp(e, t, n, r) {
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
function _p(e, t, n, r) {
  if (t === null || typeof t > "u" || Cp(e, t, n, r)) return !0;
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
function Ie(e, t, n, r, a, o, s) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = a, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = s;
}
var _e = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  _e[e] = new Ie(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  _e[t] = new Ie(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  _e[e] = new Ie(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  _e[e] = new Ie(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  _e[e] = new Ie(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  _e[e] = new Ie(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  _e[e] = new Ie(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  _e[e] = new Ie(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  _e[e] = new Ie(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var rs = /[\-:]([a-z])/g;
function as(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    rs,
    as
  );
  _e[t] = new Ie(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(rs, as);
  _e[t] = new Ie(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(rs, as);
  _e[t] = new Ie(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  _e[e] = new Ie(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
_e.xlinkHref = new Ie("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  _e[e] = new Ie(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function os(e, t, n, r) {
  var a = _e.hasOwnProperty(t) ? _e[t] : null;
  (a !== null ? a.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (_p(t, n, a, r) && (n = null), r || a === null ? Sp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : a.mustUseProperty ? e[a.propertyName] = n === null ? a.type === 3 ? !1 : "" : n : (t = a.attributeName, r = a.attributeNamespace, n === null ? e.removeAttribute(t) : (a = a.type, n = a === 3 || a === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Dt = jp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, na = Symbol.for("react.element"), Tn = Symbol.for("react.portal"), Ln = Symbol.for("react.fragment"), is = Symbol.for("react.strict_mode"), ni = Symbol.for("react.profiler"), Pu = Symbol.for("react.provider"), bu = Symbol.for("react.context"), ss = Symbol.for("react.forward_ref"), ri = Symbol.for("react.suspense"), ai = Symbol.for("react.suspense_list"), ls = Symbol.for("react.memo"), Ut = Symbol.for("react.lazy"), Mu = Symbol.for("react.offscreen"), rl = Symbol.iterator;
function lr(e) {
  return e === null || typeof e != "object" ? null : (e = rl && e[rl] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ce = Object.assign, _o;
function gr(e) {
  if (_o === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    _o = t && t[1] || "";
  }
  return `
` + _o + e;
}
var No = !1;
function Eo(e, t) {
  if (!e || No) return "";
  No = !0;
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
    No = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? gr(e) : "";
}
function Np(e) {
  switch (e.tag) {
    case 5:
      return gr(e.type);
    case 16:
      return gr("Lazy");
    case 13:
      return gr("Suspense");
    case 19:
      return gr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Eo(e.type, !1), e;
    case 11:
      return e = Eo(e.type.render, !1), e;
    case 1:
      return e = Eo(e.type, !0), e;
    default:
      return "";
  }
}
function oi(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Ln:
      return "Fragment";
    case Tn:
      return "Portal";
    case ni:
      return "Profiler";
    case is:
      return "StrictMode";
    case ri:
      return "Suspense";
    case ai:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case bu:
      return (e.displayName || "Context") + ".Consumer";
    case Pu:
      return (e._context.displayName || "Context") + ".Provider";
    case ss:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case ls:
      return t = e.displayName || null, t !== null ? t : oi(e.type) || "Memo";
    case Ut:
      t = e._payload, e = e._init;
      try {
        return oi(e(t));
      } catch {
      }
  }
  return null;
}
function Ep(e) {
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
      return oi(t);
    case 8:
      return t === is ? "StrictMode" : "Mode";
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
function rn(e) {
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
function Tu(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function zp(e) {
  var t = Tu(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function ra(e) {
  e._valueTracker || (e._valueTracker = zp(e));
}
function Lu(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Tu(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Ta(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ii(e, t) {
  var n = t.checked;
  return ce({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function al(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = rn(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Ru(e, t) {
  t = t.checked, t != null && os(e, "checked", t, !1);
}
function si(e, t) {
  Ru(e, t);
  var n = rn(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? li(e, t.type, n) : t.hasOwnProperty("defaultValue") && li(e, t.type, rn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function ol(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function li(e, t, n) {
  (t !== "number" || Ta(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var vr = Array.isArray;
function Vn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
    for (n = 0; n < e.length; n++) a = t.hasOwnProperty("$" + e[n].value), e[n].selected !== a && (e[n].selected = a), a && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + rn(n), t = null, a = 0; a < e.length; a++) {
      if (e[a].value === n) {
        e[a].selected = !0, r && (e[a].defaultSelected = !0);
        return;
      }
      t !== null || e[a].disabled || (t = e[a]);
    }
    t !== null && (t.selected = !0);
  }
}
function ui(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(z(91));
  return ce({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function il(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(z(92));
      if (vr(n)) {
        if (1 < n.length) throw Error(z(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: rn(n) };
}
function Iu(e, t) {
  var n = rn(t.value), r = rn(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function sl(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Au(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ci(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Au(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var aa, $u = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, a) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, a);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (aa = aa || document.createElement("div"), aa.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = aa.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function br(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var wr = {
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
}, Pp = ["Webkit", "ms", "Moz", "O"];
Object.keys(wr).forEach(function(e) {
  Pp.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), wr[t] = wr[e];
  });
});
function Du(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || wr.hasOwnProperty(e) && wr[e] ? ("" + t).trim() : t + "px";
}
function Ou(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, a = Du(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, a) : e[n] = a;
  }
}
var bp = ce({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function di(e, t) {
  if (t) {
    if (bp[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(z(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(z(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(z(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(z(62));
  }
}
function pi(e, t) {
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
var fi = null;
function us(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var mi = null, Gn = null, Hn = null;
function ll(e) {
  if (e = Jr(e)) {
    if (typeof mi != "function") throw Error(z(280));
    var t = e.stateNode;
    t && (t = uo(t), mi(e.stateNode, e.type, t));
  }
}
function Fu(e) {
  Gn ? Hn ? Hn.push(e) : Hn = [e] : Gn = e;
}
function Bu() {
  if (Gn) {
    var e = Gn, t = Hn;
    if (Hn = Gn = null, ll(e), t) for (e = 0; e < t.length; e++) ll(t[e]);
  }
}
function qu(e, t) {
  return e(t);
}
function Uu() {
}
var zo = !1;
function Vu(e, t, n) {
  if (zo) return e(t, n);
  zo = !0;
  try {
    return qu(e, t, n);
  } finally {
    zo = !1, (Gn !== null || Hn !== null) && (Uu(), Bu());
  }
}
function Mr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = uo(n);
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
var hi = !1;
if (Rt) try {
  var ur = {};
  Object.defineProperty(ur, "passive", { get: function() {
    hi = !0;
  } }), window.addEventListener("test", ur, ur), window.removeEventListener("test", ur, ur);
} catch {
  hi = !1;
}
function Mp(e, t, n, r, a, o, s, u, l) {
  var p = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, p);
  } catch (v) {
    this.onError(v);
  }
}
var jr = !1, La = null, Ra = !1, gi = null, Tp = { onError: function(e) {
  jr = !0, La = e;
} };
function Lp(e, t, n, r, a, o, s, u, l) {
  jr = !1, La = null, Mp.apply(Tp, arguments);
}
function Rp(e, t, n, r, a, o, s, u, l) {
  if (Lp.apply(this, arguments), jr) {
    if (jr) {
      var p = La;
      jr = !1, La = null;
    } else throw Error(z(198));
    Ra || (Ra = !0, gi = p);
  }
}
function Nn(e) {
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
function Gu(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function ul(e) {
  if (Nn(e) !== e) throw Error(z(188));
}
function Ip(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Nn(e), t === null) throw Error(z(188));
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
        if (o === n) return ul(a), e;
        if (o === r) return ul(a), t;
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
function Hu(e) {
  return e = Ip(e), e !== null ? Wu(e) : null;
}
function Wu(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Wu(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Qu = He.unstable_scheduleCallback, cl = He.unstable_cancelCallback, Ap = He.unstable_shouldYield, $p = He.unstable_requestPaint, fe = He.unstable_now, Dp = He.unstable_getCurrentPriorityLevel, cs = He.unstable_ImmediatePriority, Yu = He.unstable_UserBlockingPriority, Ia = He.unstable_NormalPriority, Op = He.unstable_LowPriority, Ku = He.unstable_IdlePriority, oo = null, St = null;
function Fp(e) {
  if (St && typeof St.onCommitFiberRoot == "function") try {
    St.onCommitFiberRoot(oo, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var ft = Math.clz32 ? Math.clz32 : Up, Bp = Math.log, qp = Math.LN2;
function Up(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Bp(e) / qp | 0) | 0;
}
var oa = 64, ia = 4194304;
function yr(e) {
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
function Aa(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, a = e.suspendedLanes, o = e.pingedLanes, s = n & 268435455;
  if (s !== 0) {
    var u = s & ~a;
    u !== 0 ? r = yr(u) : (o &= s, o !== 0 && (r = yr(o)));
  } else s = n & ~a, s !== 0 ? r = yr(s) : o !== 0 && (r = yr(o));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & a) && (a = r & -r, o = t & -t, a >= o || a === 16 && (o & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - ft(t), a = 1 << n, r |= e[n], t &= ~a;
  return r;
}
function Vp(e, t) {
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
function Gp(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var s = 31 - ft(o), u = 1 << s, l = a[s];
    l === -1 ? (!(u & n) || u & r) && (a[s] = Vp(u, t)) : l <= t && (e.expiredLanes |= u), o &= ~u;
  }
}
function vi(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Xu() {
  var e = oa;
  return oa <<= 1, !(oa & 4194240) && (oa = 64), e;
}
function Po(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Kr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - ft(t), e[t] = n;
}
function Hp(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var a = 31 - ft(n), o = 1 << a;
    t[a] = 0, r[a] = -1, e[a] = -1, n &= ~o;
  }
}
function ds(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - ft(n), a = 1 << r;
    a & t | e[r] & t && (e[r] |= t), n &= ~a;
  }
}
var J = 0;
function Ju(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Zu, ps, ec, tc, nc, yi = !1, sa = [], Yt = null, Kt = null, Xt = null, Tr = /* @__PURE__ */ new Map(), Lr = /* @__PURE__ */ new Map(), Gt = [], Wp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function dl(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Yt = null;
      break;
    case "dragenter":
    case "dragleave":
      Kt = null;
      break;
    case "mouseover":
    case "mouseout":
      Xt = null;
      break;
    case "pointerover":
    case "pointerout":
      Tr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Lr.delete(t.pointerId);
  }
}
function cr(e, t, n, r, a, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [a] }, t !== null && (t = Jr(t), t !== null && ps(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
}
function Qp(e, t, n, r, a) {
  switch (t) {
    case "focusin":
      return Yt = cr(Yt, e, t, n, r, a), !0;
    case "dragenter":
      return Kt = cr(Kt, e, t, n, r, a), !0;
    case "mouseover":
      return Xt = cr(Xt, e, t, n, r, a), !0;
    case "pointerover":
      var o = a.pointerId;
      return Tr.set(o, cr(Tr.get(o) || null, e, t, n, r, a)), !0;
    case "gotpointercapture":
      return o = a.pointerId, Lr.set(o, cr(Lr.get(o) || null, e, t, n, r, a)), !0;
  }
  return !1;
}
function rc(e) {
  var t = mn(e.target);
  if (t !== null) {
    var n = Nn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Gu(n), t !== null) {
          e.blockedOn = t, nc(e.priority, function() {
            ec(n);
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
function wa(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = xi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      fi = r, n.target.dispatchEvent(r), fi = null;
    } else return t = Jr(n), t !== null && ps(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function pl(e, t, n) {
  wa(e) && n.delete(t);
}
function Yp() {
  yi = !1, Yt !== null && wa(Yt) && (Yt = null), Kt !== null && wa(Kt) && (Kt = null), Xt !== null && wa(Xt) && (Xt = null), Tr.forEach(pl), Lr.forEach(pl);
}
function dr(e, t) {
  e.blockedOn === t && (e.blockedOn = null, yi || (yi = !0, He.unstable_scheduleCallback(He.unstable_NormalPriority, Yp)));
}
function Rr(e) {
  function t(a) {
    return dr(a, e);
  }
  if (0 < sa.length) {
    dr(sa[0], e);
    for (var n = 1; n < sa.length; n++) {
      var r = sa[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Yt !== null && dr(Yt, e), Kt !== null && dr(Kt, e), Xt !== null && dr(Xt, e), Tr.forEach(t), Lr.forEach(t), n = 0; n < Gt.length; n++) r = Gt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Gt.length && (n = Gt[0], n.blockedOn === null); ) rc(n), n.blockedOn === null && Gt.shift();
}
var Wn = Dt.ReactCurrentBatchConfig, $a = !0;
function Kp(e, t, n, r) {
  var a = J, o = Wn.transition;
  Wn.transition = null;
  try {
    J = 1, fs(e, t, n, r);
  } finally {
    J = a, Wn.transition = o;
  }
}
function Xp(e, t, n, r) {
  var a = J, o = Wn.transition;
  Wn.transition = null;
  try {
    J = 4, fs(e, t, n, r);
  } finally {
    J = a, Wn.transition = o;
  }
}
function fs(e, t, n, r) {
  if ($a) {
    var a = xi(e, t, n, r);
    if (a === null) Oo(e, t, r, Da, n), dl(e, r);
    else if (Qp(a, e, t, n, r)) r.stopPropagation();
    else if (dl(e, r), t & 4 && -1 < Wp.indexOf(e)) {
      for (; a !== null; ) {
        var o = Jr(a);
        if (o !== null && Zu(o), o = xi(e, t, n, r), o === null && Oo(e, t, r, Da, n), o === a) break;
        a = o;
      }
      a !== null && r.stopPropagation();
    } else Oo(e, t, r, null, n);
  }
}
var Da = null;
function xi(e, t, n, r) {
  if (Da = null, e = us(r), e = mn(e), e !== null) if (t = Nn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Gu(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Da = e, null;
}
function ac(e) {
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
      switch (Dp()) {
        case cs:
          return 1;
        case Yu:
          return 4;
        case Ia:
        case Op:
          return 16;
        case Ku:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Wt = null, ms = null, ja = null;
function oc() {
  if (ja) return ja;
  var e, t = ms, n = t.length, r, a = "value" in Wt ? Wt.value : Wt.textContent, o = a.length;
  for (e = 0; e < n && t[e] === a[e]; e++) ;
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === a[o - r]; r++) ;
  return ja = a.slice(e, 1 < r ? 1 - r : void 0);
}
function ka(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function la() {
  return !0;
}
function fl() {
  return !1;
}
function Qe(e) {
  function t(n, r, a, o, s) {
    this._reactName = n, this._targetInst = a, this.type = r, this.nativeEvent = o, this.target = s, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(o) : o[u]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? la : fl, this.isPropagationStopped = fl, this;
  }
  return ce(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = la);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = la);
  }, persist: function() {
  }, isPersistent: la }), t;
}
var ar = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, hs = Qe(ar), Xr = ce({}, ar, { view: 0, detail: 0 }), Jp = Qe(Xr), bo, Mo, pr, io = ce({}, Xr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: gs, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== pr && (pr && e.type === "mousemove" ? (bo = e.screenX - pr.screenX, Mo = e.screenY - pr.screenY) : Mo = bo = 0, pr = e), bo);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Mo;
} }), ml = Qe(io), Zp = ce({}, io, { dataTransfer: 0 }), ef = Qe(Zp), tf = ce({}, Xr, { relatedTarget: 0 }), To = Qe(tf), nf = ce({}, ar, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), rf = Qe(nf), af = ce({}, ar, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), of = Qe(af), sf = ce({}, ar, { data: 0 }), hl = Qe(sf), lf = {
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
}, uf = {
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
}, cf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function df(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = cf[e]) ? !!t[e] : !1;
}
function gs() {
  return df;
}
var pf = ce({}, Xr, { key: function(e) {
  if (e.key) {
    var t = lf[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = ka(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? uf[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: gs, charCode: function(e) {
  return e.type === "keypress" ? ka(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? ka(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), ff = Qe(pf), mf = ce({}, io, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), gl = Qe(mf), hf = ce({}, Xr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: gs }), gf = Qe(hf), vf = ce({}, ar, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), yf = Qe(vf), xf = ce({}, io, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), wf = Qe(xf), jf = [9, 13, 27, 32], vs = Rt && "CompositionEvent" in window, kr = null;
Rt && "documentMode" in document && (kr = document.documentMode);
var kf = Rt && "TextEvent" in window && !kr, ic = Rt && (!vs || kr && 8 < kr && 11 >= kr), vl = " ", yl = !1;
function sc(e, t) {
  switch (e) {
    case "keyup":
      return jf.indexOf(t.keyCode) !== -1;
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
function lc(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Rn = !1;
function Sf(e, t) {
  switch (e) {
    case "compositionend":
      return lc(t);
    case "keypress":
      return t.which !== 32 ? null : (yl = !0, vl);
    case "textInput":
      return e = t.data, e === vl && yl ? null : e;
    default:
      return null;
  }
}
function Cf(e, t) {
  if (Rn) return e === "compositionend" || !vs && sc(e, t) ? (e = oc(), ja = ms = Wt = null, Rn = !1, e) : null;
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
      return ic && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var _f = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function xl(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!_f[e.type] : t === "textarea";
}
function uc(e, t, n, r) {
  Fu(r), t = Oa(t, "onChange"), 0 < t.length && (n = new hs("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Sr = null, Ir = null;
function Nf(e) {
  wc(e, 0);
}
function so(e) {
  var t = $n(e);
  if (Lu(t)) return e;
}
function Ef(e, t) {
  if (e === "change") return t;
}
var cc = !1;
if (Rt) {
  var Lo;
  if (Rt) {
    var Ro = "oninput" in document;
    if (!Ro) {
      var wl = document.createElement("div");
      wl.setAttribute("oninput", "return;"), Ro = typeof wl.oninput == "function";
    }
    Lo = Ro;
  } else Lo = !1;
  cc = Lo && (!document.documentMode || 9 < document.documentMode);
}
function jl() {
  Sr && (Sr.detachEvent("onpropertychange", dc), Ir = Sr = null);
}
function dc(e) {
  if (e.propertyName === "value" && so(Ir)) {
    var t = [];
    uc(t, Ir, e, us(e)), Vu(Nf, t);
  }
}
function zf(e, t, n) {
  e === "focusin" ? (jl(), Sr = t, Ir = n, Sr.attachEvent("onpropertychange", dc)) : e === "focusout" && jl();
}
function Pf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return so(Ir);
}
function bf(e, t) {
  if (e === "click") return so(t);
}
function Mf(e, t) {
  if (e === "input" || e === "change") return so(t);
}
function Tf(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var ht = typeof Object.is == "function" ? Object.is : Tf;
function Ar(e, t) {
  if (ht(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var a = n[r];
    if (!ti.call(t, a) || !ht(e[a], t[a])) return !1;
  }
  return !0;
}
function kl(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Sl(e, t) {
  var n = kl(e);
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
    n = kl(n);
  }
}
function pc(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? pc(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function fc() {
  for (var e = window, t = Ta(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ta(e.document);
  }
  return t;
}
function ys(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Lf(e) {
  var t = fc(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && pc(n.ownerDocument.documentElement, n)) {
    if (r !== null && ys(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var a = n.textContent.length, o = Math.min(r.start, a);
        r = r.end === void 0 ? o : Math.min(r.end, a), !e.extend && o > r && (a = r, r = o, o = a), a = Sl(n, o);
        var s = Sl(
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
var Rf = Rt && "documentMode" in document && 11 >= document.documentMode, In = null, wi = null, Cr = null, ji = !1;
function Cl(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ji || In == null || In !== Ta(r) || (r = In, "selectionStart" in r && ys(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Cr && Ar(Cr, r) || (Cr = r, r = Oa(wi, "onSelect"), 0 < r.length && (t = new hs("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = In)));
}
function ua(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var An = { animationend: ua("Animation", "AnimationEnd"), animationiteration: ua("Animation", "AnimationIteration"), animationstart: ua("Animation", "AnimationStart"), transitionend: ua("Transition", "TransitionEnd") }, Io = {}, mc = {};
Rt && (mc = document.createElement("div").style, "AnimationEvent" in window || (delete An.animationend.animation, delete An.animationiteration.animation, delete An.animationstart.animation), "TransitionEvent" in window || delete An.transitionend.transition);
function lo(e) {
  if (Io[e]) return Io[e];
  if (!An[e]) return e;
  var t = An[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in mc) return Io[e] = t[n];
  return e;
}
var hc = lo("animationend"), gc = lo("animationiteration"), vc = lo("animationstart"), yc = lo("transitionend"), xc = /* @__PURE__ */ new Map(), _l = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function on(e, t) {
  xc.set(e, t), _n(t, [e]);
}
for (var Ao = 0; Ao < _l.length; Ao++) {
  var $o = _l[Ao], If = $o.toLowerCase(), Af = $o[0].toUpperCase() + $o.slice(1);
  on(If, "on" + Af);
}
on(hc, "onAnimationEnd");
on(gc, "onAnimationIteration");
on(vc, "onAnimationStart");
on("dblclick", "onDoubleClick");
on("focusin", "onFocus");
on("focusout", "onBlur");
on(yc, "onTransitionEnd");
Kn("onMouseEnter", ["mouseout", "mouseover"]);
Kn("onMouseLeave", ["mouseout", "mouseover"]);
Kn("onPointerEnter", ["pointerout", "pointerover"]);
Kn("onPointerLeave", ["pointerout", "pointerover"]);
_n("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
_n("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
_n("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
_n("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
_n("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
_n("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var xr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), $f = new Set("cancel close invalid load scroll toggle".split(" ").concat(xr));
function Nl(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Rp(r, t, void 0, e), e.currentTarget = null;
}
function wc(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], a = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t) for (var s = r.length - 1; 0 <= s; s--) {
        var u = r[s], l = u.instance, p = u.currentTarget;
        if (u = u.listener, l !== o && a.isPropagationStopped()) break e;
        Nl(a, u, p), o = l;
      }
      else for (s = 0; s < r.length; s++) {
        if (u = r[s], l = u.instance, p = u.currentTarget, u = u.listener, l !== o && a.isPropagationStopped()) break e;
        Nl(a, u, p), o = l;
      }
    }
  }
  if (Ra) throw e = gi, Ra = !1, gi = null, e;
}
function re(e, t) {
  var n = t[Ni];
  n === void 0 && (n = t[Ni] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (jc(t, e, 2, !1), n.add(r));
}
function Do(e, t, n) {
  var r = 0;
  t && (r |= 4), jc(n, e, r, t);
}
var ca = "_reactListening" + Math.random().toString(36).slice(2);
function $r(e) {
  if (!e[ca]) {
    e[ca] = !0, zu.forEach(function(n) {
      n !== "selectionchange" && ($f.has(n) || Do(n, !1, e), Do(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ca] || (t[ca] = !0, Do("selectionchange", !1, t));
  }
}
function jc(e, t, n, r) {
  switch (ac(t)) {
    case 1:
      var a = Kp;
      break;
    case 4:
      a = Xp;
      break;
    default:
      a = fs;
  }
  n = a.bind(null, t, n, e), a = void 0, !hi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), r ? a !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: a }) : e.addEventListener(t, n, !0) : a !== void 0 ? e.addEventListener(t, n, { passive: a }) : e.addEventListener(t, n, !1);
}
function Oo(e, t, n, r, a) {
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
        if (s = mn(u), s === null) return;
        if (l = s.tag, l === 5 || l === 6) {
          r = o = s;
          continue e;
        }
        u = u.parentNode;
      }
    }
    r = r.return;
  }
  Vu(function() {
    var p = o, v = us(n), f = [];
    e: {
      var h = xc.get(e);
      if (h !== void 0) {
        var x = hs, _ = e;
        switch (e) {
          case "keypress":
            if (ka(n) === 0) break e;
          case "keydown":
          case "keyup":
            x = ff;
            break;
          case "focusin":
            _ = "focus", x = To;
            break;
          case "focusout":
            _ = "blur", x = To;
            break;
          case "beforeblur":
          case "afterblur":
            x = To;
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
            x = ml;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = ef;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = gf;
            break;
          case hc:
          case gc:
          case vc:
            x = rf;
            break;
          case yc:
            x = yf;
            break;
          case "scroll":
            x = Jp;
            break;
          case "wheel":
            x = wf;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = of;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = gl;
        }
        var y = (t & 4) !== 0, $ = !y && e === "scroll", m = y ? h !== null ? h + "Capture" : null : h;
        y = [];
        for (var d = p, c; d !== null; ) {
          c = d;
          var g = c.stateNode;
          if (c.tag === 5 && g !== null && (c = g, m !== null && (g = Mr(d, m), g != null && y.push(Dr(d, g, c)))), $) break;
          d = d.return;
        }
        0 < y.length && (h = new x(h, _, null, n, v), f.push({ event: h, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (h = e === "mouseover" || e === "pointerover", x = e === "mouseout" || e === "pointerout", h && n !== fi && (_ = n.relatedTarget || n.fromElement) && (mn(_) || _[It])) break e;
        if ((x || h) && (h = v.window === v ? v : (h = v.ownerDocument) ? h.defaultView || h.parentWindow : window, x ? (_ = n.relatedTarget || n.toElement, x = p, _ = _ ? mn(_) : null, _ !== null && ($ = Nn(_), _ !== $ || _.tag !== 5 && _.tag !== 6) && (_ = null)) : (x = null, _ = p), x !== _)) {
          if (y = ml, g = "onMouseLeave", m = "onMouseEnter", d = "mouse", (e === "pointerout" || e === "pointerover") && (y = gl, g = "onPointerLeave", m = "onPointerEnter", d = "pointer"), $ = x == null ? h : $n(x), c = _ == null ? h : $n(_), h = new y(g, d + "leave", x, n, v), h.target = $, h.relatedTarget = c, g = null, mn(v) === p && (y = new y(m, d + "enter", _, n, v), y.target = c, y.relatedTarget = $, g = y), $ = g, x && _) t: {
            for (y = x, m = _, d = 0, c = y; c; c = bn(c)) d++;
            for (c = 0, g = m; g; g = bn(g)) c++;
            for (; 0 < d - c; ) y = bn(y), d--;
            for (; 0 < c - d; ) m = bn(m), c--;
            for (; d--; ) {
              if (y === m || m !== null && y === m.alternate) break t;
              y = bn(y), m = bn(m);
            }
            y = null;
          }
          else y = null;
          x !== null && El(f, h, x, y, !1), _ !== null && $ !== null && El(f, $, _, y, !0);
        }
      }
      e: {
        if (h = p ? $n(p) : window, x = h.nodeName && h.nodeName.toLowerCase(), x === "select" || x === "input" && h.type === "file") var j = Ef;
        else if (xl(h)) if (cc) j = Mf;
        else {
          j = Pf;
          var S = zf;
        }
        else (x = h.nodeName) && x.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (j = bf);
        if (j && (j = j(e, p))) {
          uc(f, j, n, v);
          break e;
        }
        S && S(e, h, p), e === "focusout" && (S = h._wrapperState) && S.controlled && h.type === "number" && li(h, "number", h.value);
      }
      switch (S = p ? $n(p) : window, e) {
        case "focusin":
          (xl(S) || S.contentEditable === "true") && (In = S, wi = p, Cr = null);
          break;
        case "focusout":
          Cr = wi = In = null;
          break;
        case "mousedown":
          ji = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ji = !1, Cl(f, n, v);
          break;
        case "selectionchange":
          if (Rf) break;
        case "keydown":
        case "keyup":
          Cl(f, n, v);
      }
      var N;
      if (vs) e: {
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
      else Rn ? sc(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P && (ic && n.locale !== "ko" && (Rn || P !== "onCompositionStart" ? P === "onCompositionEnd" && Rn && (N = oc()) : (Wt = v, ms = "value" in Wt ? Wt.value : Wt.textContent, Rn = !0)), S = Oa(p, P), 0 < S.length && (P = new hl(P, e, null, n, v), f.push({ event: P, listeners: S }), N ? P.data = N : (N = lc(n), N !== null && (P.data = N)))), (N = kf ? Sf(e, n) : Cf(e, n)) && (p = Oa(p, "onBeforeInput"), 0 < p.length && (v = new hl("onBeforeInput", "beforeinput", null, n, v), f.push({ event: v, listeners: p }), v.data = N));
    }
    wc(f, t);
  });
}
function Dr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Oa(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var a = e, o = a.stateNode;
    a.tag === 5 && o !== null && (a = o, o = Mr(e, n), o != null && r.unshift(Dr(e, o, a)), o = Mr(e, t), o != null && r.push(Dr(e, o, a))), e = e.return;
  }
  return r;
}
function bn(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function El(e, t, n, r, a) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var u = n, l = u.alternate, p = u.stateNode;
    if (l !== null && l === r) break;
    u.tag === 5 && p !== null && (u = p, a ? (l = Mr(n, o), l != null && s.unshift(Dr(n, l, u))) : a || (l = Mr(n, o), l != null && s.push(Dr(n, l, u)))), n = n.return;
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var Df = /\r\n?/g, Of = /\u0000|\uFFFD/g;
function zl(e) {
  return (typeof e == "string" ? e : "" + e).replace(Df, `
`).replace(Of, "");
}
function da(e, t, n) {
  if (t = zl(t), zl(e) !== t && n) throw Error(z(425));
}
function Fa() {
}
var ki = null, Si = null;
function Ci(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var _i = typeof setTimeout == "function" ? setTimeout : void 0, Ff = typeof clearTimeout == "function" ? clearTimeout : void 0, Pl = typeof Promise == "function" ? Promise : void 0, Bf = typeof queueMicrotask == "function" ? queueMicrotask : typeof Pl < "u" ? function(e) {
  return Pl.resolve(null).then(e).catch(qf);
} : _i;
function qf(e) {
  setTimeout(function() {
    throw e;
  });
}
function Fo(e, t) {
  var n = t, r = 0;
  do {
    var a = n.nextSibling;
    if (e.removeChild(n), a && a.nodeType === 8) if (n = a.data, n === "/$") {
      if (r === 0) {
        e.removeChild(a), Rr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = a;
  } while (n);
  Rr(t);
}
function Jt(e) {
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
function bl(e) {
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
var or = Math.random().toString(36).slice(2), jt = "__reactFiber$" + or, Or = "__reactProps$" + or, It = "__reactContainer$" + or, Ni = "__reactEvents$" + or, Uf = "__reactListeners$" + or, Vf = "__reactHandles$" + or;
function mn(e) {
  var t = e[jt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[It] || n[jt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = bl(e); e !== null; ) {
        if (n = e[jt]) return n;
        e = bl(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Jr(e) {
  return e = e[jt] || e[It], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function $n(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(z(33));
}
function uo(e) {
  return e[Or] || null;
}
var Ei = [], Dn = -1;
function sn(e) {
  return { current: e };
}
function ae(e) {
  0 > Dn || (e.current = Ei[Dn], Ei[Dn] = null, Dn--);
}
function te(e, t) {
  Dn++, Ei[Dn] = e.current, e.current = t;
}
var an = {}, Pe = sn(an), Oe = sn(!1), wn = an;
function Xn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return an;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var a = {}, o;
  for (o in n) a[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = a), a;
}
function Fe(e) {
  return e = e.childContextTypes, e != null;
}
function Ba() {
  ae(Oe), ae(Pe);
}
function Ml(e, t, n) {
  if (Pe.current !== an) throw Error(z(168));
  te(Pe, t), te(Oe, n);
}
function kc(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var a in r) if (!(a in t)) throw Error(z(108, Ep(e) || "Unknown", a));
  return ce({}, n, r);
}
function qa(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || an, wn = Pe.current, te(Pe, e), te(Oe, Oe.current), !0;
}
function Tl(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(z(169));
  n ? (e = kc(e, t, wn), r.__reactInternalMemoizedMergedChildContext = e, ae(Oe), ae(Pe), te(Pe, e)) : ae(Oe), te(Oe, n);
}
var bt = null, co = !1, Bo = !1;
function Sc(e) {
  bt === null ? bt = [e] : bt.push(e);
}
function Gf(e) {
  co = !0, Sc(e);
}
function ln() {
  if (!Bo && bt !== null) {
    Bo = !0;
    var e = 0, t = J;
    try {
      var n = bt;
      for (J = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      bt = null, co = !1;
    } catch (a) {
      throw bt !== null && (bt = bt.slice(e + 1)), Qu(cs, ln), a;
    } finally {
      J = t, Bo = !1;
    }
  }
  return null;
}
var On = [], Fn = 0, Ua = null, Va = 0, Ze = [], et = 0, jn = null, Mt = 1, Tt = "";
function pn(e, t) {
  On[Fn++] = Va, On[Fn++] = Ua, Ua = e, Va = t;
}
function Cc(e, t, n) {
  Ze[et++] = Mt, Ze[et++] = Tt, Ze[et++] = jn, jn = e;
  var r = Mt;
  e = Tt;
  var a = 32 - ft(r) - 1;
  r &= ~(1 << a), n += 1;
  var o = 32 - ft(t) + a;
  if (30 < o) {
    var s = a - a % 5;
    o = (r & (1 << s) - 1).toString(32), r >>= s, a -= s, Mt = 1 << 32 - ft(t) + a | n << a | r, Tt = o + e;
  } else Mt = 1 << o | n << a | r, Tt = e;
}
function xs(e) {
  e.return !== null && (pn(e, 1), Cc(e, 1, 0));
}
function ws(e) {
  for (; e === Ua; ) Ua = On[--Fn], On[Fn] = null, Va = On[--Fn], On[Fn] = null;
  for (; e === jn; ) jn = Ze[--et], Ze[et] = null, Tt = Ze[--et], Ze[et] = null, Mt = Ze[--et], Ze[et] = null;
}
var Ge = null, Ve = null, ie = !1, pt = null;
function _c(e, t) {
  var n = tt(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Ll(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ge = e, Ve = Jt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ge = e, Ve = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = jn !== null ? { id: Mt, overflow: Tt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = tt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ge = e, Ve = null, !0) : !1;
    default:
      return !1;
  }
}
function zi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Pi(e) {
  if (ie) {
    var t = Ve;
    if (t) {
      var n = t;
      if (!Ll(e, t)) {
        if (zi(e)) throw Error(z(418));
        t = Jt(n.nextSibling);
        var r = Ge;
        t && Ll(e, t) ? _c(r, n) : (e.flags = e.flags & -4097 | 2, ie = !1, Ge = e);
      }
    } else {
      if (zi(e)) throw Error(z(418));
      e.flags = e.flags & -4097 | 2, ie = !1, Ge = e;
    }
  }
}
function Rl(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Ge = e;
}
function pa(e) {
  if (e !== Ge) return !1;
  if (!ie) return Rl(e), ie = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Ci(e.type, e.memoizedProps)), t && (t = Ve)) {
    if (zi(e)) throw Nc(), Error(z(418));
    for (; t; ) _c(e, t), t = Jt(t.nextSibling);
  }
  if (Rl(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(z(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ve = Jt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Ve = null;
    }
  } else Ve = Ge ? Jt(e.stateNode.nextSibling) : null;
  return !0;
}
function Nc() {
  for (var e = Ve; e; ) e = Jt(e.nextSibling);
}
function Jn() {
  Ve = Ge = null, ie = !1;
}
function js(e) {
  pt === null ? pt = [e] : pt.push(e);
}
var Hf = Dt.ReactCurrentBatchConfig;
function fr(e, t, n) {
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
function fa(e, t) {
  throw e = Object.prototype.toString.call(t), Error(z(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Il(e) {
  var t = e._init;
  return t(e._payload);
}
function Ec(e) {
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
    return m = nn(m, d), m.index = 0, m.sibling = null, m;
  }
  function o(m, d, c) {
    return m.index = c, e ? (c = m.alternate, c !== null ? (c = c.index, c < d ? (m.flags |= 2, d) : c) : (m.flags |= 2, d)) : (m.flags |= 1048576, d);
  }
  function s(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function u(m, d, c, g) {
    return d === null || d.tag !== 6 ? (d = Qo(c, m.mode, g), d.return = m, d) : (d = a(d, c), d.return = m, d);
  }
  function l(m, d, c, g) {
    var j = c.type;
    return j === Ln ? v(m, d, c.props.children, g, c.key) : d !== null && (d.elementType === j || typeof j == "object" && j !== null && j.$$typeof === Ut && Il(j) === d.type) ? (g = a(d, c.props), g.ref = fr(m, d, c), g.return = m, g) : (g = Pa(c.type, c.key, c.props, null, m.mode, g), g.ref = fr(m, d, c), g.return = m, g);
  }
  function p(m, d, c, g) {
    return d === null || d.tag !== 4 || d.stateNode.containerInfo !== c.containerInfo || d.stateNode.implementation !== c.implementation ? (d = Yo(c, m.mode, g), d.return = m, d) : (d = a(d, c.children || []), d.return = m, d);
  }
  function v(m, d, c, g, j) {
    return d === null || d.tag !== 7 ? (d = yn(c, m.mode, g, j), d.return = m, d) : (d = a(d, c), d.return = m, d);
  }
  function f(m, d, c) {
    if (typeof d == "string" && d !== "" || typeof d == "number") return d = Qo("" + d, m.mode, c), d.return = m, d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case na:
          return c = Pa(d.type, d.key, d.props, null, m.mode, c), c.ref = fr(m, null, d), c.return = m, c;
        case Tn:
          return d = Yo(d, m.mode, c), d.return = m, d;
        case Ut:
          var g = d._init;
          return f(m, g(d._payload), c);
      }
      if (vr(d) || lr(d)) return d = yn(d, m.mode, c, null), d.return = m, d;
      fa(m, d);
    }
    return null;
  }
  function h(m, d, c, g) {
    var j = d !== null ? d.key : null;
    if (typeof c == "string" && c !== "" || typeof c == "number") return j !== null ? null : u(m, d, "" + c, g);
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case na:
          return c.key === j ? l(m, d, c, g) : null;
        case Tn:
          return c.key === j ? p(m, d, c, g) : null;
        case Ut:
          return j = c._init, h(
            m,
            d,
            j(c._payload),
            g
          );
      }
      if (vr(c) || lr(c)) return j !== null ? null : v(m, d, c, g, null);
      fa(m, c);
    }
    return null;
  }
  function x(m, d, c, g, j) {
    if (typeof g == "string" && g !== "" || typeof g == "number") return m = m.get(c) || null, u(d, m, "" + g, j);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case na:
          return m = m.get(g.key === null ? c : g.key) || null, l(d, m, g, j);
        case Tn:
          return m = m.get(g.key === null ? c : g.key) || null, p(d, m, g, j);
        case Ut:
          var S = g._init;
          return x(m, d, c, S(g._payload), j);
      }
      if (vr(g) || lr(g)) return m = m.get(c) || null, v(d, m, g, j, null);
      fa(d, g);
    }
    return null;
  }
  function _(m, d, c, g) {
    for (var j = null, S = null, N = d, P = d = 0, C = null; N !== null && P < c.length; P++) {
      N.index > P ? (C = N, N = null) : C = N.sibling;
      var E = h(m, N, c[P], g);
      if (E === null) {
        N === null && (N = C);
        break;
      }
      e && N && E.alternate === null && t(m, N), d = o(E, d, P), S === null ? j = E : S.sibling = E, S = E, N = C;
    }
    if (P === c.length) return n(m, N), ie && pn(m, P), j;
    if (N === null) {
      for (; P < c.length; P++) N = f(m, c[P], g), N !== null && (d = o(N, d, P), S === null ? j = N : S.sibling = N, S = N);
      return ie && pn(m, P), j;
    }
    for (N = r(m, N); P < c.length; P++) C = x(N, m, P, c[P], g), C !== null && (e && C.alternate !== null && N.delete(C.key === null ? P : C.key), d = o(C, d, P), S === null ? j = C : S.sibling = C, S = C);
    return e && N.forEach(function(q) {
      return t(m, q);
    }), ie && pn(m, P), j;
  }
  function y(m, d, c, g) {
    var j = lr(c);
    if (typeof j != "function") throw Error(z(150));
    if (c = j.call(c), c == null) throw Error(z(151));
    for (var S = j = null, N = d, P = d = 0, C = null, E = c.next(); N !== null && !E.done; P++, E = c.next()) {
      N.index > P ? (C = N, N = null) : C = N.sibling;
      var q = h(m, N, E.value, g);
      if (q === null) {
        N === null && (N = C);
        break;
      }
      e && N && q.alternate === null && t(m, N), d = o(q, d, P), S === null ? j = q : S.sibling = q, S = q, N = C;
    }
    if (E.done) return n(
      m,
      N
    ), ie && pn(m, P), j;
    if (N === null) {
      for (; !E.done; P++, E = c.next()) E = f(m, E.value, g), E !== null && (d = o(E, d, P), S === null ? j = E : S.sibling = E, S = E);
      return ie && pn(m, P), j;
    }
    for (N = r(m, N); !E.done; P++, E = c.next()) E = x(N, m, P, E.value, g), E !== null && (e && E.alternate !== null && N.delete(E.key === null ? P : E.key), d = o(E, d, P), S === null ? j = E : S.sibling = E, S = E);
    return e && N.forEach(function(se) {
      return t(m, se);
    }), ie && pn(m, P), j;
  }
  function $(m, d, c, g) {
    if (typeof c == "object" && c !== null && c.type === Ln && c.key === null && (c = c.props.children), typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case na:
          e: {
            for (var j = c.key, S = d; S !== null; ) {
              if (S.key === j) {
                if (j = c.type, j === Ln) {
                  if (S.tag === 7) {
                    n(m, S.sibling), d = a(S, c.props.children), d.return = m, m = d;
                    break e;
                  }
                } else if (S.elementType === j || typeof j == "object" && j !== null && j.$$typeof === Ut && Il(j) === S.type) {
                  n(m, S.sibling), d = a(S, c.props), d.ref = fr(m, S, c), d.return = m, m = d;
                  break e;
                }
                n(m, S);
                break;
              } else t(m, S);
              S = S.sibling;
            }
            c.type === Ln ? (d = yn(c.props.children, m.mode, g, c.key), d.return = m, m = d) : (g = Pa(c.type, c.key, c.props, null, m.mode, g), g.ref = fr(m, d, c), g.return = m, m = g);
          }
          return s(m);
        case Tn:
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
            d = Yo(c, m.mode, g), d.return = m, m = d;
          }
          return s(m);
        case Ut:
          return S = c._init, $(m, d, S(c._payload), g);
      }
      if (vr(c)) return _(m, d, c, g);
      if (lr(c)) return y(m, d, c, g);
      fa(m, c);
    }
    return typeof c == "string" && c !== "" || typeof c == "number" ? (c = "" + c, d !== null && d.tag === 6 ? (n(m, d.sibling), d = a(d, c), d.return = m, m = d) : (n(m, d), d = Qo(c, m.mode, g), d.return = m, m = d), s(m)) : n(m, d);
  }
  return $;
}
var Zn = Ec(!0), zc = Ec(!1), Ga = sn(null), Ha = null, Bn = null, ks = null;
function Ss() {
  ks = Bn = Ha = null;
}
function Cs(e) {
  var t = Ga.current;
  ae(Ga), e._currentValue = t;
}
function bi(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Qn(e, t) {
  Ha = e, ks = Bn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (De = !0), e.firstContext = null);
}
function rt(e) {
  var t = e._currentValue;
  if (ks !== e) if (e = { context: e, memoizedValue: t, next: null }, Bn === null) {
    if (Ha === null) throw Error(z(308));
    Bn = e, Ha.dependencies = { lanes: 0, firstContext: e };
  } else Bn = Bn.next = e;
  return t;
}
var hn = null;
function _s(e) {
  hn === null ? hn = [e] : hn.push(e);
}
function Pc(e, t, n, r) {
  var a = t.interleaved;
  return a === null ? (n.next = n, _s(t)) : (n.next = a.next, a.next = n), t.interleaved = n, At(e, r);
}
function At(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Vt = !1;
function Ns(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function bc(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Lt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Zt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, Q & 2) {
    var a = r.pending;
    return a === null ? t.next = t : (t.next = a.next, a.next = t), r.pending = t, At(e, n);
  }
  return a = r.interleaved, a === null ? (t.next = t, _s(r)) : (t.next = a.next, a.next = t), r.interleaved = t, At(e, n);
}
function Sa(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ds(e, n);
  }
}
function Al(e, t) {
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
function Wa(e, t, n, r) {
  var a = e.updateQueue;
  Vt = !1;
  var o = a.firstBaseUpdate, s = a.lastBaseUpdate, u = a.shared.pending;
  if (u !== null) {
    a.shared.pending = null;
    var l = u, p = l.next;
    l.next = null, s === null ? o = p : s.next = p, s = l;
    var v = e.alternate;
    v !== null && (v = v.updateQueue, u = v.lastBaseUpdate, u !== s && (u === null ? v.firstBaseUpdate = p : u.next = p, v.lastBaseUpdate = l));
  }
  if (o !== null) {
    var f = a.baseState;
    s = 0, v = p = l = null, u = o;
    do {
      var h = u.lane, x = u.eventTime;
      if ((r & h) === h) {
        v !== null && (v = v.next = {
          eventTime: x,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var _ = e, y = u;
          switch (h = t, x = n, y.tag) {
            case 1:
              if (_ = y.payload, typeof _ == "function") {
                f = _.call(x, f, h);
                break e;
              }
              f = _;
              break e;
            case 3:
              _.flags = _.flags & -65537 | 128;
            case 0:
              if (_ = y.payload, h = typeof _ == "function" ? _.call(x, f, h) : _, h == null) break e;
              f = ce({}, f, h);
              break e;
            case 2:
              Vt = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, h = a.effects, h === null ? a.effects = [u] : h.push(u));
      } else x = { eventTime: x, lane: h, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, v === null ? (p = v = x, l = f) : v = v.next = x, s |= h;
      if (u = u.next, u === null) {
        if (u = a.shared.pending, u === null) break;
        h = u, u = h.next, h.next = null, a.lastBaseUpdate = h, a.shared.pending = null;
      }
    } while (!0);
    if (v === null && (l = f), a.baseState = l, a.firstBaseUpdate = p, a.lastBaseUpdate = v, t = a.shared.interleaved, t !== null) {
      a = t;
      do
        s |= a.lane, a = a.next;
      while (a !== t);
    } else o === null && (a.shared.lanes = 0);
    Sn |= s, e.lanes = s, e.memoizedState = f;
  }
}
function $l(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], a = r.callback;
    if (a !== null) {
      if (r.callback = null, r = n, typeof a != "function") throw Error(z(191, a));
      a.call(r);
    }
  }
}
var Zr = {}, Ct = sn(Zr), Fr = sn(Zr), Br = sn(Zr);
function gn(e) {
  if (e === Zr) throw Error(z(174));
  return e;
}
function Es(e, t) {
  switch (te(Br, t), te(Fr, e), te(Ct, Zr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ci(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ci(t, e);
  }
  ae(Ct), te(Ct, t);
}
function er() {
  ae(Ct), ae(Fr), ae(Br);
}
function Mc(e) {
  gn(Br.current);
  var t = gn(Ct.current), n = ci(t, e.type);
  t !== n && (te(Fr, e), te(Ct, n));
}
function zs(e) {
  Fr.current === e && (ae(Ct), ae(Fr));
}
var le = sn(0);
function Qa(e) {
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
var qo = [];
function Ps() {
  for (var e = 0; e < qo.length; e++) qo[e]._workInProgressVersionPrimary = null;
  qo.length = 0;
}
var Ca = Dt.ReactCurrentDispatcher, Uo = Dt.ReactCurrentBatchConfig, kn = 0, ue = null, ge = null, xe = null, Ya = !1, _r = !1, qr = 0, Wf = 0;
function Ne() {
  throw Error(z(321));
}
function bs(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!ht(e[n], t[n])) return !1;
  return !0;
}
function Ms(e, t, n, r, a, o) {
  if (kn = o, ue = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ca.current = e === null || e.memoizedState === null ? Xf : Jf, e = n(r, a), _r) {
    o = 0;
    do {
      if (_r = !1, qr = 0, 25 <= o) throw Error(z(301));
      o += 1, xe = ge = null, t.updateQueue = null, Ca.current = Zf, e = n(r, a);
    } while (_r);
  }
  if (Ca.current = Ka, t = ge !== null && ge.next !== null, kn = 0, xe = ge = ue = null, Ya = !1, t) throw Error(z(300));
  return e;
}
function Ts() {
  var e = qr !== 0;
  return qr = 0, e;
}
function wt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return xe === null ? ue.memoizedState = xe = e : xe = xe.next = e, xe;
}
function at() {
  if (ge === null) {
    var e = ue.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ge.next;
  var t = xe === null ? ue.memoizedState : xe.next;
  if (t !== null) xe = t, ge = e;
  else {
    if (e === null) throw Error(z(310));
    ge = e, e = { memoizedState: ge.memoizedState, baseState: ge.baseState, baseQueue: ge.baseQueue, queue: ge.queue, next: null }, xe === null ? ue.memoizedState = xe = e : xe = xe.next = e;
  }
  return xe;
}
function Ur(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Vo(e) {
  var t = at(), n = t.queue;
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
    var u = s = null, l = null, p = o;
    do {
      var v = p.lane;
      if ((kn & v) === v) l !== null && (l = l.next = { lane: 0, action: p.action, hasEagerState: p.hasEagerState, eagerState: p.eagerState, next: null }), r = p.hasEagerState ? p.eagerState : e(r, p.action);
      else {
        var f = {
          lane: v,
          action: p.action,
          hasEagerState: p.hasEagerState,
          eagerState: p.eagerState,
          next: null
        };
        l === null ? (u = l = f, s = r) : l = l.next = f, ue.lanes |= v, Sn |= v;
      }
      p = p.next;
    } while (p !== null && p !== o);
    l === null ? s = r : l.next = u, ht(r, t.memoizedState) || (De = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = l, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    a = e;
    do
      o = a.lane, ue.lanes |= o, Sn |= o, a = a.next;
    while (a !== e);
  } else a === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Go(e) {
  var t = at(), n = t.queue;
  if (n === null) throw Error(z(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, a = n.pending, o = t.memoizedState;
  if (a !== null) {
    n.pending = null;
    var s = a = a.next;
    do
      o = e(o, s.action), s = s.next;
    while (s !== a);
    ht(o, t.memoizedState) || (De = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function Tc() {
}
function Lc(e, t) {
  var n = ue, r = at(), a = t(), o = !ht(r.memoizedState, a);
  if (o && (r.memoizedState = a, De = !0), r = r.queue, Ls(Ac.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || xe !== null && xe.memoizedState.tag & 1) {
    if (n.flags |= 2048, Vr(9, Ic.bind(null, n, r, a, t), void 0, null), we === null) throw Error(z(349));
    kn & 30 || Rc(n, t, a);
  }
  return a;
}
function Rc(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ue.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ue.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Ic(e, t, n, r) {
  t.value = n, t.getSnapshot = r, $c(t) && Dc(e);
}
function Ac(e, t, n) {
  return n(function() {
    $c(t) && Dc(e);
  });
}
function $c(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ht(e, n);
  } catch {
    return !0;
  }
}
function Dc(e) {
  var t = At(e, 1);
  t !== null && mt(t, e, 1, -1);
}
function Dl(e) {
  var t = wt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ur, lastRenderedState: e }, t.queue = e, e = e.dispatch = Kf.bind(null, ue, e), [t.memoizedState, e];
}
function Vr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ue.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ue.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Oc() {
  return at().memoizedState;
}
function _a(e, t, n, r) {
  var a = wt();
  ue.flags |= e, a.memoizedState = Vr(1 | t, n, void 0, r === void 0 ? null : r);
}
function po(e, t, n, r) {
  var a = at();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (ge !== null) {
    var s = ge.memoizedState;
    if (o = s.destroy, r !== null && bs(r, s.deps)) {
      a.memoizedState = Vr(t, n, o, r);
      return;
    }
  }
  ue.flags |= e, a.memoizedState = Vr(1 | t, n, o, r);
}
function Ol(e, t) {
  return _a(8390656, 8, e, t);
}
function Ls(e, t) {
  return po(2048, 8, e, t);
}
function Fc(e, t) {
  return po(4, 2, e, t);
}
function Bc(e, t) {
  return po(4, 4, e, t);
}
function qc(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Uc(e, t, n) {
  return n = n != null ? n.concat([e]) : null, po(4, 4, qc.bind(null, t, e), n);
}
function Rs() {
}
function Vc(e, t) {
  var n = at();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && bs(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Gc(e, t) {
  var n = at();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && bs(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Hc(e, t, n) {
  return kn & 21 ? (ht(n, t) || (n = Xu(), ue.lanes |= n, Sn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, De = !0), e.memoizedState = n);
}
function Qf(e, t) {
  var n = J;
  J = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Uo.transition;
  Uo.transition = {};
  try {
    e(!1), t();
  } finally {
    J = n, Uo.transition = r;
  }
}
function Wc() {
  return at().memoizedState;
}
function Yf(e, t, n) {
  var r = tn(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Qc(e)) Yc(t, n);
  else if (n = Pc(e, t, n, r), n !== null) {
    var a = Le();
    mt(n, e, r, a), Kc(n, t, r);
  }
}
function Kf(e, t, n) {
  var r = tn(e), a = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Qc(e)) Yc(t, a);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
      var s = t.lastRenderedState, u = o(s, n);
      if (a.hasEagerState = !0, a.eagerState = u, ht(u, s)) {
        var l = t.interleaved;
        l === null ? (a.next = a, _s(t)) : (a.next = l.next, l.next = a), t.interleaved = a;
        return;
      }
    } catch {
    } finally {
    }
    n = Pc(e, t, a, r), n !== null && (a = Le(), mt(n, e, r, a), Kc(n, t, r));
  }
}
function Qc(e) {
  var t = e.alternate;
  return e === ue || t !== null && t === ue;
}
function Yc(e, t) {
  _r = Ya = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Kc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ds(e, n);
  }
}
var Ka = { readContext: rt, useCallback: Ne, useContext: Ne, useEffect: Ne, useImperativeHandle: Ne, useInsertionEffect: Ne, useLayoutEffect: Ne, useMemo: Ne, useReducer: Ne, useRef: Ne, useState: Ne, useDebugValue: Ne, useDeferredValue: Ne, useTransition: Ne, useMutableSource: Ne, useSyncExternalStore: Ne, useId: Ne, unstable_isNewReconciler: !1 }, Xf = { readContext: rt, useCallback: function(e, t) {
  return wt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: rt, useEffect: Ol, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, _a(
    4194308,
    4,
    qc.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return _a(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return _a(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = wt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = wt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Yf.bind(null, ue, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = wt();
  return e = { current: e }, t.memoizedState = e;
}, useState: Dl, useDebugValue: Rs, useDeferredValue: function(e) {
  return wt().memoizedState = e;
}, useTransition: function() {
  var e = Dl(!1), t = e[0];
  return e = Qf.bind(null, e[1]), wt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = ue, a = wt();
  if (ie) {
    if (n === void 0) throw Error(z(407));
    n = n();
  } else {
    if (n = t(), we === null) throw Error(z(349));
    kn & 30 || Rc(r, t, n);
  }
  a.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return a.queue = o, Ol(Ac.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, Vr(9, Ic.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = wt(), t = we.identifierPrefix;
  if (ie) {
    var n = Tt, r = Mt;
    n = (r & ~(1 << 32 - ft(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = qr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Wf++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Jf = {
  readContext: rt,
  useCallback: Vc,
  useContext: rt,
  useEffect: Ls,
  useImperativeHandle: Uc,
  useInsertionEffect: Fc,
  useLayoutEffect: Bc,
  useMemo: Gc,
  useReducer: Vo,
  useRef: Oc,
  useState: function() {
    return Vo(Ur);
  },
  useDebugValue: Rs,
  useDeferredValue: function(e) {
    var t = at();
    return Hc(t, ge.memoizedState, e);
  },
  useTransition: function() {
    var e = Vo(Ur)[0], t = at().memoizedState;
    return [e, t];
  },
  useMutableSource: Tc,
  useSyncExternalStore: Lc,
  useId: Wc,
  unstable_isNewReconciler: !1
}, Zf = { readContext: rt, useCallback: Vc, useContext: rt, useEffect: Ls, useImperativeHandle: Uc, useInsertionEffect: Fc, useLayoutEffect: Bc, useMemo: Gc, useReducer: Go, useRef: Oc, useState: function() {
  return Go(Ur);
}, useDebugValue: Rs, useDeferredValue: function(e) {
  var t = at();
  return ge === null ? t.memoizedState = e : Hc(t, ge.memoizedState, e);
}, useTransition: function() {
  var e = Go(Ur)[0], t = at().memoizedState;
  return [e, t];
}, useMutableSource: Tc, useSyncExternalStore: Lc, useId: Wc, unstable_isNewReconciler: !1 };
function ct(e, t) {
  if (e && e.defaultProps) {
    t = ce({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Mi(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : ce({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var fo = { isMounted: function(e) {
  return (e = e._reactInternals) ? Nn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = Le(), a = tn(e), o = Lt(r, a);
  o.payload = t, n != null && (o.callback = n), t = Zt(e, o, a), t !== null && (mt(t, e, a, r), Sa(t, e, a));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = Le(), a = tn(e), o = Lt(r, a);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = Zt(e, o, a), t !== null && (mt(t, e, a, r), Sa(t, e, a));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = Le(), r = tn(e), a = Lt(n, r);
  a.tag = 2, t != null && (a.callback = t), t = Zt(e, a, r), t !== null && (mt(t, e, r, n), Sa(t, e, r));
} };
function Fl(e, t, n, r, a, o, s) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, s) : t.prototype && t.prototype.isPureReactComponent ? !Ar(n, r) || !Ar(a, o) : !0;
}
function Xc(e, t, n) {
  var r = !1, a = an, o = t.contextType;
  return typeof o == "object" && o !== null ? o = rt(o) : (a = Fe(t) ? wn : Pe.current, r = t.contextTypes, o = (r = r != null) ? Xn(e, a) : an), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = fo, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function Bl(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && fo.enqueueReplaceState(t, t.state, null);
}
function Ti(e, t, n, r) {
  var a = e.stateNode;
  a.props = n, a.state = e.memoizedState, a.refs = {}, Ns(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? a.context = rt(o) : (o = Fe(t) ? wn : Pe.current, a.context = Xn(e, o)), a.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Mi(e, t, o, n), a.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (t = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), t !== a.state && fo.enqueueReplaceState(a, a.state, null), Wa(e, n, a, r), a.state = e.memoizedState), typeof a.componentDidMount == "function" && (e.flags |= 4194308);
}
function tr(e, t) {
  try {
    var n = "", r = t;
    do
      n += Np(r), r = r.return;
    while (r);
    var a = n;
  } catch (o) {
    a = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: a, digest: null };
}
function Ho(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Li(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var em = typeof WeakMap == "function" ? WeakMap : Map;
function Jc(e, t, n) {
  n = Lt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Ja || (Ja = !0, Ui = r), Li(e, t);
  }, n;
}
function Zc(e, t, n) {
  n = Lt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var a = t.value;
    n.payload = function() {
      return r(a);
    }, n.callback = function() {
      Li(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    Li(e, t), typeof r != "function" && (en === null ? en = /* @__PURE__ */ new Set([this]) : en.add(this));
    var s = t.stack;
    this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
  }), n;
}
function ql(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new em();
    var a = /* @__PURE__ */ new Set();
    r.set(t, a);
  } else a = r.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), r.set(t, a));
  a.has(n) || (a.add(n), e = mm.bind(null, e, t, n), t.then(e, e));
}
function Ul(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Vl(e, t, n, r, a) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = a, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Lt(-1, 1), t.tag = 2, Zt(n, t, 1))), n.lanes |= 1), e);
}
var tm = Dt.ReactCurrentOwner, De = !1;
function Te(e, t, n, r) {
  t.child = e === null ? zc(t, null, n, r) : Zn(t, e.child, n, r);
}
function Gl(e, t, n, r, a) {
  n = n.render;
  var o = t.ref;
  return Qn(t, a), r = Ms(e, t, n, r, o, a), n = Ts(), e !== null && !De ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, $t(e, t, a)) : (ie && n && xs(t), t.flags |= 1, Te(e, t, r, a), t.child);
}
function Hl(e, t, n, r, a) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !qs(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, ed(e, t, o, r, a)) : (e = Pa(n.type, null, r, t, t.mode, a), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & a)) {
    var s = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Ar, n(s, r) && e.ref === t.ref) return $t(e, t, a);
  }
  return t.flags |= 1, e = nn(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function ed(e, t, n, r, a) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Ar(o, r) && e.ref === t.ref) if (De = !1, t.pendingProps = r = o, (e.lanes & a) !== 0) e.flags & 131072 && (De = !0);
    else return t.lanes = e.lanes, $t(e, t, a);
  }
  return Ri(e, t, n, r, a);
}
function td(e, t, n) {
  var r = t.pendingProps, a = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, te(Un, Ue), Ue |= n;
  else {
    if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, te(Un, Ue), Ue |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, te(Un, Ue), Ue |= r;
  }
  else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, te(Un, Ue), Ue |= r;
  return Te(e, t, a, n), t.child;
}
function nd(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Ri(e, t, n, r, a) {
  var o = Fe(n) ? wn : Pe.current;
  return o = Xn(t, o), Qn(t, a), n = Ms(e, t, n, r, o, a), r = Ts(), e !== null && !De ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, $t(e, t, a)) : (ie && r && xs(t), t.flags |= 1, Te(e, t, n, a), t.child);
}
function Wl(e, t, n, r, a) {
  if (Fe(n)) {
    var o = !0;
    qa(t);
  } else o = !1;
  if (Qn(t, a), t.stateNode === null) Na(e, t), Xc(t, n, r), Ti(t, n, r, a), r = !0;
  else if (e === null) {
    var s = t.stateNode, u = t.memoizedProps;
    s.props = u;
    var l = s.context, p = n.contextType;
    typeof p == "object" && p !== null ? p = rt(p) : (p = Fe(n) ? wn : Pe.current, p = Xn(t, p));
    var v = n.getDerivedStateFromProps, f = typeof v == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    f || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (u !== r || l !== p) && Bl(t, s, r, p), Vt = !1;
    var h = t.memoizedState;
    s.state = h, Wa(t, r, s, a), l = t.memoizedState, u !== r || h !== l || Oe.current || Vt ? (typeof v == "function" && (Mi(t, n, v, r), l = t.memoizedState), (u = Vt || Fl(t, n, u, r, h, l, p)) ? (f || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), s.props = r, s.state = l, s.context = p, r = u) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    s = t.stateNode, bc(e, t), u = t.memoizedProps, p = t.type === t.elementType ? u : ct(t.type, u), s.props = p, f = t.pendingProps, h = s.context, l = n.contextType, typeof l == "object" && l !== null ? l = rt(l) : (l = Fe(n) ? wn : Pe.current, l = Xn(t, l));
    var x = n.getDerivedStateFromProps;
    (v = typeof x == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (u !== f || h !== l) && Bl(t, s, r, l), Vt = !1, h = t.memoizedState, s.state = h, Wa(t, r, s, a);
    var _ = t.memoizedState;
    u !== f || h !== _ || Oe.current || Vt ? (typeof x == "function" && (Mi(t, n, x, r), _ = t.memoizedState), (p = Vt || Fl(t, n, p, r, h, _, l) || !1) ? (v || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, _, l), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, _, l)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = _), s.props = r, s.state = _, s.context = l, r = p) : (typeof s.componentDidUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Ii(e, t, n, r, o, a);
}
function Ii(e, t, n, r, a, o) {
  nd(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return a && Tl(t, n, !1), $t(e, t, o);
  r = t.stateNode, tm.current = t;
  var u = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = Zn(t, e.child, null, o), t.child = Zn(t, null, u, o)) : Te(e, t, u, o), t.memoizedState = r.state, a && Tl(t, n, !0), t.child;
}
function rd(e) {
  var t = e.stateNode;
  t.pendingContext ? Ml(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ml(e, t.context, !1), Es(e, t.containerInfo);
}
function Ql(e, t, n, r, a) {
  return Jn(), js(a), t.flags |= 256, Te(e, t, n, r), t.child;
}
var Ai = { dehydrated: null, treeContext: null, retryLane: 0 };
function $i(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function ad(e, t, n) {
  var r = t.pendingProps, a = le.current, o = !1, s = (t.flags & 128) !== 0, u;
  if ((u = s) || (u = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0), u ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (a |= 1), te(le, a & 1), e === null)
    return Pi(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, s = { mode: "hidden", children: s }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = s) : o = go(s, r, 0, null), e = yn(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = $i(n), t.memoizedState = Ai, e) : Is(t, s));
  if (a = e.memoizedState, a !== null && (u = a.dehydrated, u !== null)) return nm(e, t, s, r, u, a, n);
  if (o) {
    o = r.fallback, s = t.mode, a = e.child, u = a.sibling;
    var l = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== a ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = nn(a, l), r.subtreeFlags = a.subtreeFlags & 14680064), u !== null ? o = nn(u, o) : (o = yn(o, s, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, s = e.child.memoizedState, s = s === null ? $i(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, o.memoizedState = s, o.childLanes = e.childLanes & ~n, t.memoizedState = Ai, r;
  }
  return o = e.child, e = o.sibling, r = nn(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Is(e, t) {
  return t = go({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function ma(e, t, n, r) {
  return r !== null && js(r), Zn(t, e.child, null, n), e = Is(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function nm(e, t, n, r, a, o, s) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Ho(Error(z(422))), ma(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, a = t.mode, r = go({ mode: "visible", children: r.children }, a, 0, null), o = yn(o, a, s, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && Zn(t, e.child, null, s), t.child.memoizedState = $i(s), t.memoizedState = Ai, o);
  if (!(t.mode & 1)) return ma(e, t, s, null);
  if (a.data === "$!") {
    if (r = a.nextSibling && a.nextSibling.dataset, r) var u = r.dgst;
    return r = u, o = Error(z(419)), r = Ho(o, r, void 0), ma(e, t, s, r);
  }
  if (u = (s & e.childLanes) !== 0, De || u) {
    if (r = we, r !== null) {
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
      a = a & (r.suspendedLanes | s) ? 0 : a, a !== 0 && a !== o.retryLane && (o.retryLane = a, At(e, a), mt(r, e, a, -1));
    }
    return Bs(), r = Ho(Error(z(421))), ma(e, t, s, r);
  }
  return a.data === "$?" ? (t.flags |= 128, t.child = e.child, t = hm.bind(null, e), a._reactRetry = t, null) : (e = o.treeContext, Ve = Jt(a.nextSibling), Ge = t, ie = !0, pt = null, e !== null && (Ze[et++] = Mt, Ze[et++] = Tt, Ze[et++] = jn, Mt = e.id, Tt = e.overflow, jn = t), t = Is(t, r.children), t.flags |= 4096, t);
}
function Yl(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), bi(e.return, t, n);
}
function Wo(e, t, n, r, a) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: a } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = a);
}
function od(e, t, n) {
  var r = t.pendingProps, a = r.revealOrder, o = r.tail;
  if (Te(e, t, r.children, n), r = le.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Yl(e, n, t);
      else if (e.tag === 19) Yl(e, n, t);
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
  if (te(le, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (a) {
    case "forwards":
      for (n = t.child, a = null; n !== null; ) e = n.alternate, e !== null && Qa(e) === null && (a = n), n = n.sibling;
      n = a, n === null ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), Wo(t, !1, a, n, o);
      break;
    case "backwards":
      for (n = null, a = t.child, t.child = null; a !== null; ) {
        if (e = a.alternate, e !== null && Qa(e) === null) {
          t.child = a;
          break;
        }
        e = a.sibling, a.sibling = n, n = a, a = e;
      }
      Wo(t, !0, n, null, o);
      break;
    case "together":
      Wo(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Na(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function $t(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Sn |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(z(153));
  if (t.child !== null) {
    for (e = t.child, n = nn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = nn(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function rm(e, t, n) {
  switch (t.tag) {
    case 3:
      rd(t), Jn();
      break;
    case 5:
      Mc(t);
      break;
    case 1:
      Fe(t.type) && qa(t);
      break;
    case 4:
      Es(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, a = t.memoizedProps.value;
      te(Ga, r._currentValue), r._currentValue = a;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (te(le, le.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? ad(e, t, n) : (te(le, le.current & 1), e = $t(e, t, n), e !== null ? e.sibling : null);
      te(le, le.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return od(e, t, n);
        t.flags |= 128;
      }
      if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), te(le, le.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, td(e, t, n);
  }
  return $t(e, t, n);
}
var id, Di, sd, ld;
id = function(e, t) {
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
Di = function() {
};
sd = function(e, t, n, r) {
  var a = e.memoizedProps;
  if (a !== r) {
    e = t.stateNode, gn(Ct.current);
    var o = null;
    switch (n) {
      case "input":
        a = ii(e, a), r = ii(e, r), o = [];
        break;
      case "select":
        a = ce({}, a, { value: void 0 }), r = ce({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        a = ui(e, a), r = ui(e, r), o = [];
        break;
      default:
        typeof a.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Fa);
    }
    di(n, r);
    var s;
    n = null;
    for (p in a) if (!r.hasOwnProperty(p) && a.hasOwnProperty(p) && a[p] != null) if (p === "style") {
      var u = a[p];
      for (s in u) u.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
    } else p !== "dangerouslySetInnerHTML" && p !== "children" && p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus" && (Pr.hasOwnProperty(p) ? o || (o = []) : (o = o || []).push(p, null));
    for (p in r) {
      var l = r[p];
      if (u = a != null ? a[p] : void 0, r.hasOwnProperty(p) && l !== u && (l != null || u != null)) if (p === "style") if (u) {
        for (s in u) !u.hasOwnProperty(s) || l && l.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
        for (s in l) l.hasOwnProperty(s) && u[s] !== l[s] && (n || (n = {}), n[s] = l[s]);
      } else n || (o || (o = []), o.push(
        p,
        n
      )), n = l;
      else p === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, u = u ? u.__html : void 0, l != null && u !== l && (o = o || []).push(p, l)) : p === "children" ? typeof l != "string" && typeof l != "number" || (o = o || []).push(p, "" + l) : p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && (Pr.hasOwnProperty(p) ? (l != null && p === "onScroll" && re("scroll", e), o || u === l || (o = [])) : (o = o || []).push(p, l));
    }
    n && (o = o || []).push("style", n);
    var p = o;
    (t.updateQueue = p) && (t.flags |= 4);
  }
};
ld = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function mr(e, t) {
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
function Ee(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var a = e.child; a !== null; ) n |= a.lanes | a.childLanes, r |= a.subtreeFlags & 14680064, r |= a.flags & 14680064, a.return = e, a = a.sibling;
  else for (a = e.child; a !== null; ) n |= a.lanes | a.childLanes, r |= a.subtreeFlags, r |= a.flags, a.return = e, a = a.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function am(e, t, n) {
  var r = t.pendingProps;
  switch (ws(t), t.tag) {
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
      return Ee(t), null;
    case 1:
      return Fe(t.type) && Ba(), Ee(t), null;
    case 3:
      return r = t.stateNode, er(), ae(Oe), ae(Pe), Ps(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (pa(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, pt !== null && (Hi(pt), pt = null))), Di(e, t), Ee(t), null;
    case 5:
      zs(t);
      var a = gn(Br.current);
      if (n = t.type, e !== null && t.stateNode != null) sd(e, t, n, r, a), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(z(166));
          return Ee(t), null;
        }
        if (e = gn(Ct.current), pa(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[jt] = t, r[Or] = o, e = (t.mode & 1) !== 0, n) {
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
              for (a = 0; a < xr.length; a++) re(xr[a], r);
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
              al(r, o), re("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, re("invalid", r);
              break;
            case "textarea":
              il(r, o), re("invalid", r);
          }
          di(n, o), a = null;
          for (var s in o) if (o.hasOwnProperty(s)) {
            var u = o[s];
            s === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && da(r.textContent, u, e), a = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && da(
              r.textContent,
              u,
              e
            ), a = ["children", "" + u]) : Pr.hasOwnProperty(s) && u != null && s === "onScroll" && re("scroll", r);
          }
          switch (n) {
            case "input":
              ra(r), ol(r, o, !0);
              break;
            case "textarea":
              ra(r), sl(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Fa);
          }
          r = a, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          s = a.nodeType === 9 ? a : a.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Au(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[jt] = t, e[Or] = r, id(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (s = pi(n, r), n) {
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
                for (a = 0; a < xr.length; a++) re(xr[a], e);
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
                al(e, r), a = ii(e, r), re("invalid", e);
                break;
              case "option":
                a = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, a = ce({}, r, { value: void 0 }), re("invalid", e);
                break;
              case "textarea":
                il(e, r), a = ui(e, r), re("invalid", e);
                break;
              default:
                a = r;
            }
            di(n, a), u = a;
            for (o in u) if (u.hasOwnProperty(o)) {
              var l = u[o];
              o === "style" ? Ou(e, l) : o === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && $u(e, l)) : o === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && br(e, l) : typeof l == "number" && br(e, "" + l) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Pr.hasOwnProperty(o) ? l != null && o === "onScroll" && re("scroll", e) : l != null && os(e, o, l, s));
            }
            switch (n) {
              case "input":
                ra(e), ol(e, r, !1);
                break;
              case "textarea":
                ra(e), sl(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + rn(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? Vn(e, !!r.multiple, o, !1) : r.defaultValue != null && Vn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof a.onClick == "function" && (e.onclick = Fa);
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
      return Ee(t), null;
    case 6:
      if (e && t.stateNode != null) ld(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(z(166));
        if (n = gn(Br.current), gn(Ct.current), pa(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[jt] = t, (o = r.nodeValue !== n) && (e = Ge, e !== null)) switch (e.tag) {
            case 3:
              da(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && da(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          o && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[jt] = t, t.stateNode = r;
      }
      return Ee(t), null;
    case 13:
      if (ae(le), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (ie && Ve !== null && t.mode & 1 && !(t.flags & 128)) Nc(), Jn(), t.flags |= 98560, o = !1;
        else if (o = pa(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(z(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(z(317));
            o[jt] = t;
          } else Jn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Ee(t), o = !1;
        } else pt !== null && (Hi(pt), pt = null), o = !0;
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || le.current & 1 ? ve === 0 && (ve = 3) : Bs())), t.updateQueue !== null && (t.flags |= 4), Ee(t), null);
    case 4:
      return er(), Di(e, t), e === null && $r(t.stateNode.containerInfo), Ee(t), null;
    case 10:
      return Cs(t.type._context), Ee(t), null;
    case 17:
      return Fe(t.type) && Ba(), Ee(t), null;
    case 19:
      if (ae(le), o = t.memoizedState, o === null) return Ee(t), null;
      if (r = (t.flags & 128) !== 0, s = o.rendering, s === null) if (r) mr(o, !1);
      else {
        if (ve !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (s = Qa(e), s !== null) {
            for (t.flags |= 128, mr(o, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, s = o.alternate, s === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = s.childLanes, o.lanes = s.lanes, o.child = s.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = s.memoizedProps, o.memoizedState = s.memoizedState, o.updateQueue = s.updateQueue, o.type = s.type, e = s.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return te(le, le.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        o.tail !== null && fe() > nr && (t.flags |= 128, r = !0, mr(o, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Qa(s), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), mr(o, !0), o.tail === null && o.tailMode === "hidden" && !s.alternate && !ie) return Ee(t), null;
        } else 2 * fe() - o.renderingStartTime > nr && n !== 1073741824 && (t.flags |= 128, r = !0, mr(o, !1), t.lanes = 4194304);
        o.isBackwards ? (s.sibling = t.child, t.child = s) : (n = o.last, n !== null ? n.sibling = s : t.child = s, o.last = s);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = fe(), t.sibling = null, n = le.current, te(le, r ? n & 1 | 2 : n & 1), t) : (Ee(t), null);
    case 22:
    case 23:
      return Fs(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ue & 1073741824 && (Ee(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ee(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(z(156, t.tag));
}
function om(e, t) {
  switch (ws(t), t.tag) {
    case 1:
      return Fe(t.type) && Ba(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return er(), ae(Oe), ae(Pe), Ps(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return zs(t), null;
    case 13:
      if (ae(le), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(z(340));
        Jn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return ae(le), null;
    case 4:
      return er(), null;
    case 10:
      return Cs(t.type._context), null;
    case 22:
    case 23:
      return Fs(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ha = !1, ze = !1, im = typeof WeakSet == "function" ? WeakSet : Set, I = null;
function qn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    de(e, t, r);
  }
  else n.current = null;
}
function Oi(e, t, n) {
  try {
    n();
  } catch (r) {
    de(e, t, r);
  }
}
var Kl = !1;
function sm(e, t) {
  if (ki = $a, e = fc(), ys(e)) {
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
        var s = 0, u = -1, l = -1, p = 0, v = 0, f = e, h = null;
        t: for (; ; ) {
          for (var x; f !== n || a !== 0 && f.nodeType !== 3 || (u = s + a), f !== o || r !== 0 && f.nodeType !== 3 || (l = s + r), f.nodeType === 3 && (s += f.nodeValue.length), (x = f.firstChild) !== null; )
            h = f, f = x;
          for (; ; ) {
            if (f === e) break t;
            if (h === n && ++p === a && (u = s), h === o && ++v === r && (l = s), (x = f.nextSibling) !== null) break;
            f = h, h = f.parentNode;
          }
          f = x;
        }
        n = u === -1 || l === -1 ? null : { start: u, end: l };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Si = { focusedElem: e, selectionRange: n }, $a = !1, I = t; I !== null; ) if (t = I, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, I = e;
  else for (; I !== null; ) {
    t = I;
    try {
      var _ = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (_ !== null) {
            var y = _.memoizedProps, $ = _.memoizedState, m = t.stateNode, d = m.getSnapshotBeforeUpdate(t.elementType === t.type ? y : ct(t.type, y), $);
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
    } catch (g) {
      de(t, t.return, g);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, I = e;
      break;
    }
    I = t.return;
  }
  return _ = Kl, Kl = !1, _;
}
function Nr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var a = r = r.next;
    do {
      if ((a.tag & e) === e) {
        var o = a.destroy;
        a.destroy = void 0, o !== void 0 && Oi(t, n, o);
      }
      a = a.next;
    } while (a !== r);
  }
}
function mo(e, t) {
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
function Fi(e) {
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
function ud(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, ud(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[jt], delete t[Or], delete t[Ni], delete t[Uf], delete t[Vf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function cd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Xl(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || cd(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Bi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Fa));
  else if (r !== 4 && (e = e.child, e !== null)) for (Bi(e, t, n), e = e.sibling; e !== null; ) Bi(e, t, n), e = e.sibling;
}
function qi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (qi(e, t, n), e = e.sibling; e !== null; ) qi(e, t, n), e = e.sibling;
}
var Se = null, dt = !1;
function qt(e, t, n) {
  for (n = n.child; n !== null; ) dd(e, t, n), n = n.sibling;
}
function dd(e, t, n) {
  if (St && typeof St.onCommitFiberUnmount == "function") try {
    St.onCommitFiberUnmount(oo, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      ze || qn(n, t);
    case 6:
      var r = Se, a = dt;
      Se = null, qt(e, t, n), Se = r, dt = a, Se !== null && (dt ? (e = Se, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Se.removeChild(n.stateNode));
      break;
    case 18:
      Se !== null && (dt ? (e = Se, n = n.stateNode, e.nodeType === 8 ? Fo(e.parentNode, n) : e.nodeType === 1 && Fo(e, n), Rr(e)) : Fo(Se, n.stateNode));
      break;
    case 4:
      r = Se, a = dt, Se = n.stateNode.containerInfo, dt = !0, qt(e, t, n), Se = r, dt = a;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ze && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        a = r = r.next;
        do {
          var o = a, s = o.destroy;
          o = o.tag, s !== void 0 && (o & 2 || o & 4) && Oi(n, t, s), a = a.next;
        } while (a !== r);
      }
      qt(e, t, n);
      break;
    case 1:
      if (!ze && (qn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (u) {
        de(n, t, u);
      }
      qt(e, t, n);
      break;
    case 21:
      qt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (ze = (r = ze) || n.memoizedState !== null, qt(e, t, n), ze = r) : qt(e, t, n);
      break;
    default:
      qt(e, t, n);
  }
}
function Jl(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new im()), t.forEach(function(r) {
      var a = gm.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(a, a));
    });
  }
}
function ut(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var a = n[r];
    try {
      var o = e, s = t, u = s;
      e: for (; u !== null; ) {
        switch (u.tag) {
          case 5:
            Se = u.stateNode, dt = !1;
            break e;
          case 3:
            Se = u.stateNode.containerInfo, dt = !0;
            break e;
          case 4:
            Se = u.stateNode.containerInfo, dt = !0;
            break e;
        }
        u = u.return;
      }
      if (Se === null) throw Error(z(160));
      dd(o, s, a), Se = null, dt = !1;
      var l = a.alternate;
      l !== null && (l.return = null), a.return = null;
    } catch (p) {
      de(a, t, p);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) pd(t, e), t = t.sibling;
}
function pd(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (ut(t, e), xt(e), r & 4) {
        try {
          Nr(3, e, e.return), mo(3, e);
        } catch (y) {
          de(e, e.return, y);
        }
        try {
          Nr(5, e, e.return);
        } catch (y) {
          de(e, e.return, y);
        }
      }
      break;
    case 1:
      ut(t, e), xt(e), r & 512 && n !== null && qn(n, n.return);
      break;
    case 5:
      if (ut(t, e), xt(e), r & 512 && n !== null && qn(n, n.return), e.flags & 32) {
        var a = e.stateNode;
        try {
          br(a, "");
        } catch (y) {
          de(e, e.return, y);
        }
      }
      if (r & 4 && (a = e.stateNode, a != null)) {
        var o = e.memoizedProps, s = n !== null ? n.memoizedProps : o, u = e.type, l = e.updateQueue;
        if (e.updateQueue = null, l !== null) try {
          u === "input" && o.type === "radio" && o.name != null && Ru(a, o), pi(u, s);
          var p = pi(u, o);
          for (s = 0; s < l.length; s += 2) {
            var v = l[s], f = l[s + 1];
            v === "style" ? Ou(a, f) : v === "dangerouslySetInnerHTML" ? $u(a, f) : v === "children" ? br(a, f) : os(a, v, f, p);
          }
          switch (u) {
            case "input":
              si(a, o);
              break;
            case "textarea":
              Iu(a, o);
              break;
            case "select":
              var h = a._wrapperState.wasMultiple;
              a._wrapperState.wasMultiple = !!o.multiple;
              var x = o.value;
              x != null ? Vn(a, !!o.multiple, x, !1) : h !== !!o.multiple && (o.defaultValue != null ? Vn(
                a,
                !!o.multiple,
                o.defaultValue,
                !0
              ) : Vn(a, !!o.multiple, o.multiple ? [] : "", !1));
          }
          a[Or] = o;
        } catch (y) {
          de(e, e.return, y);
        }
      }
      break;
    case 6:
      if (ut(t, e), xt(e), r & 4) {
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
      if (ut(t, e), xt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Rr(t.containerInfo);
      } catch (y) {
        de(e, e.return, y);
      }
      break;
    case 4:
      ut(t, e), xt(e);
      break;
    case 13:
      ut(t, e), xt(e), a = e.child, a.flags & 8192 && (o = a.memoizedState !== null, a.stateNode.isHidden = o, !o || a.alternate !== null && a.alternate.memoizedState !== null || (Ds = fe())), r & 4 && Jl(e);
      break;
    case 22:
      if (v = n !== null && n.memoizedState !== null, e.mode & 1 ? (ze = (p = ze) || v, ut(t, e), ze = p) : ut(t, e), xt(e), r & 8192) {
        if (p = e.memoizedState !== null, (e.stateNode.isHidden = p) && !v && e.mode & 1) for (I = e, v = e.child; v !== null; ) {
          for (f = I = v; I !== null; ) {
            switch (h = I, x = h.child, h.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Nr(4, h, h.return);
                break;
              case 1:
                qn(h, h.return);
                var _ = h.stateNode;
                if (typeof _.componentWillUnmount == "function") {
                  r = h, n = h.return;
                  try {
                    t = r, _.props = t.memoizedProps, _.state = t.memoizedState, _.componentWillUnmount();
                  } catch (y) {
                    de(r, n, y);
                  }
                }
                break;
              case 5:
                qn(h, h.return);
                break;
              case 22:
                if (h.memoizedState !== null) {
                  eu(f);
                  continue;
                }
            }
            x !== null ? (x.return = h, I = x) : eu(f);
          }
          v = v.sibling;
        }
        e: for (v = null, f = e; ; ) {
          if (f.tag === 5) {
            if (v === null) {
              v = f;
              try {
                a = f.stateNode, p ? (o = a.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = f.stateNode, l = f.memoizedProps.style, s = l != null && l.hasOwnProperty("display") ? l.display : null, u.style.display = Du("display", s));
              } catch (y) {
                de(e, e.return, y);
              }
            }
          } else if (f.tag === 6) {
            if (v === null) try {
              f.stateNode.nodeValue = p ? "" : f.memoizedProps;
            } catch (y) {
              de(e, e.return, y);
            }
          } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
            f.child.return = f, f = f.child;
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            v === f && (v = null), f = f.return;
          }
          v === f && (v = null), f.sibling.return = f.return, f = f.sibling;
        }
      }
      break;
    case 19:
      ut(t, e), xt(e), r & 4 && Jl(e);
      break;
    case 21:
      break;
    default:
      ut(
        t,
        e
      ), xt(e);
  }
}
function xt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (cd(n)) {
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
          r.flags & 32 && (br(a, ""), r.flags &= -33);
          var o = Xl(e);
          qi(e, o, a);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo, u = Xl(e);
          Bi(e, u, s);
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
function lm(e, t, n) {
  I = e, fd(e);
}
function fd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; I !== null; ) {
    var a = I, o = a.child;
    if (a.tag === 22 && r) {
      var s = a.memoizedState !== null || ha;
      if (!s) {
        var u = a.alternate, l = u !== null && u.memoizedState !== null || ze;
        u = ha;
        var p = ze;
        if (ha = s, (ze = l) && !p) for (I = a; I !== null; ) s = I, l = s.child, s.tag === 22 && s.memoizedState !== null ? tu(a) : l !== null ? (l.return = s, I = l) : tu(a);
        for (; o !== null; ) I = o, fd(o), o = o.sibling;
        I = a, ha = u, ze = p;
      }
      Zl(e);
    } else a.subtreeFlags & 8772 && o !== null ? (o.return = a, I = o) : Zl(e);
  }
}
function Zl(e) {
  for (; I !== null; ) {
    var t = I;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            ze || mo(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !ze) if (n === null) r.componentDidMount();
            else {
              var a = t.elementType === t.type ? n.memoizedProps : ct(t.type, n.memoizedProps);
              r.componentDidUpdate(a, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var o = t.updateQueue;
            o !== null && $l(t, o, r);
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
              $l(t, s, n);
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
              var p = t.alternate;
              if (p !== null) {
                var v = p.memoizedState;
                if (v !== null) {
                  var f = v.dehydrated;
                  f !== null && Rr(f);
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
        ze || t.flags & 512 && Fi(t);
      } catch (h) {
        de(t, t.return, h);
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
function eu(e) {
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
function tu(e) {
  for (; I !== null; ) {
    var t = I;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            mo(4, t);
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
            Fi(t);
          } catch (l) {
            de(t, o, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Fi(t);
          } catch (l) {
            de(t, s, l);
          }
      }
    } catch (l) {
      de(t, t.return, l);
    }
    if (t === e) {
      I = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      u.return = t.return, I = u;
      break;
    }
    I = t.return;
  }
}
var um = Math.ceil, Xa = Dt.ReactCurrentDispatcher, As = Dt.ReactCurrentOwner, nt = Dt.ReactCurrentBatchConfig, Q = 0, we = null, me = null, Ce = 0, Ue = 0, Un = sn(0), ve = 0, Gr = null, Sn = 0, ho = 0, $s = 0, Er = null, $e = null, Ds = 0, nr = 1 / 0, Pt = null, Ja = !1, Ui = null, en = null, ga = !1, Qt = null, Za = 0, zr = 0, Vi = null, Ea = -1, za = 0;
function Le() {
  return Q & 6 ? fe() : Ea !== -1 ? Ea : Ea = fe();
}
function tn(e) {
  return e.mode & 1 ? Q & 2 && Ce !== 0 ? Ce & -Ce : Hf.transition !== null ? (za === 0 && (za = Xu()), za) : (e = J, e !== 0 || (e = window.event, e = e === void 0 ? 16 : ac(e.type)), e) : 1;
}
function mt(e, t, n, r) {
  if (50 < zr) throw zr = 0, Vi = null, Error(z(185));
  Kr(e, n, r), (!(Q & 2) || e !== we) && (e === we && (!(Q & 2) && (ho |= n), ve === 4 && Ht(e, Ce)), Be(e, r), n === 1 && Q === 0 && !(t.mode & 1) && (nr = fe() + 500, co && ln()));
}
function Be(e, t) {
  var n = e.callbackNode;
  Gp(e, t);
  var r = Aa(e, e === we ? Ce : 0);
  if (r === 0) n !== null && cl(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && cl(n), t === 1) e.tag === 0 ? Gf(nu.bind(null, e)) : Sc(nu.bind(null, e)), Bf(function() {
      !(Q & 6) && ln();
    }), n = null;
    else {
      switch (Ju(r)) {
        case 1:
          n = cs;
          break;
        case 4:
          n = Yu;
          break;
        case 16:
          n = Ia;
          break;
        case 536870912:
          n = Ku;
          break;
        default:
          n = Ia;
      }
      n = jd(n, md.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function md(e, t) {
  if (Ea = -1, za = 0, Q & 6) throw Error(z(327));
  var n = e.callbackNode;
  if (Yn() && e.callbackNode !== n) return null;
  var r = Aa(e, e === we ? Ce : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = eo(e, r);
  else {
    t = r;
    var a = Q;
    Q |= 2;
    var o = gd();
    (we !== e || Ce !== t) && (Pt = null, nr = fe() + 500, vn(e, t));
    do
      try {
        pm();
        break;
      } catch (u) {
        hd(e, u);
      }
    while (!0);
    Ss(), Xa.current = o, Q = a, me !== null ? t = 0 : (we = null, Ce = 0, t = ve);
  }
  if (t !== 0) {
    if (t === 2 && (a = vi(e), a !== 0 && (r = a, t = Gi(e, a))), t === 1) throw n = Gr, vn(e, 0), Ht(e, r), Be(e, fe()), n;
    if (t === 6) Ht(e, r);
    else {
      if (a = e.current.alternate, !(r & 30) && !cm(a) && (t = eo(e, r), t === 2 && (o = vi(e), o !== 0 && (r = o, t = Gi(e, o))), t === 1)) throw n = Gr, vn(e, 0), Ht(e, r), Be(e, fe()), n;
      switch (e.finishedWork = a, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(z(345));
        case 2:
          fn(e, $e, Pt);
          break;
        case 3:
          if (Ht(e, r), (r & 130023424) === r && (t = Ds + 500 - fe(), 10 < t)) {
            if (Aa(e, 0) !== 0) break;
            if (a = e.suspendedLanes, (a & r) !== r) {
              Le(), e.pingedLanes |= e.suspendedLanes & a;
              break;
            }
            e.timeoutHandle = _i(fn.bind(null, e, $e, Pt), t);
            break;
          }
          fn(e, $e, Pt);
          break;
        case 4:
          if (Ht(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, a = -1; 0 < r; ) {
            var s = 31 - ft(r);
            o = 1 << s, s = t[s], s > a && (a = s), r &= ~o;
          }
          if (r = a, r = fe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * um(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = _i(fn.bind(null, e, $e, Pt), r);
            break;
          }
          fn(e, $e, Pt);
          break;
        case 5:
          fn(e, $e, Pt);
          break;
        default:
          throw Error(z(329));
      }
    }
  }
  return Be(e, fe()), e.callbackNode === n ? md.bind(null, e) : null;
}
function Gi(e, t) {
  var n = Er;
  return e.current.memoizedState.isDehydrated && (vn(e, t).flags |= 256), e = eo(e, t), e !== 2 && (t = $e, $e = n, t !== null && Hi(t)), e;
}
function Hi(e) {
  $e === null ? $e = e : $e.push.apply($e, e);
}
function cm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var a = n[r], o = a.getSnapshot;
        a = a.value;
        try {
          if (!ht(o(), a)) return !1;
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
function Ht(e, t) {
  for (t &= ~$s, t &= ~ho, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - ft(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function nu(e) {
  if (Q & 6) throw Error(z(327));
  Yn();
  var t = Aa(e, 0);
  if (!(t & 1)) return Be(e, fe()), null;
  var n = eo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = vi(e);
    r !== 0 && (t = r, n = Gi(e, r));
  }
  if (n === 1) throw n = Gr, vn(e, 0), Ht(e, t), Be(e, fe()), n;
  if (n === 6) throw Error(z(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, fn(e, $e, Pt), Be(e, fe()), null;
}
function Os(e, t) {
  var n = Q;
  Q |= 1;
  try {
    return e(t);
  } finally {
    Q = n, Q === 0 && (nr = fe() + 500, co && ln());
  }
}
function Cn(e) {
  Qt !== null && Qt.tag === 0 && !(Q & 6) && Yn();
  var t = Q;
  Q |= 1;
  var n = nt.transition, r = J;
  try {
    if (nt.transition = null, J = 1, e) return e();
  } finally {
    J = r, nt.transition = n, Q = t, !(Q & 6) && ln();
  }
}
function Fs() {
  Ue = Un.current, ae(Un);
}
function vn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Ff(n)), me !== null) for (n = me.return; n !== null; ) {
    var r = n;
    switch (ws(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Ba();
        break;
      case 3:
        er(), ae(Oe), ae(Pe), Ps();
        break;
      case 5:
        zs(r);
        break;
      case 4:
        er();
        break;
      case 13:
        ae(le);
        break;
      case 19:
        ae(le);
        break;
      case 10:
        Cs(r.type._context);
        break;
      case 22:
      case 23:
        Fs();
    }
    n = n.return;
  }
  if (we = e, me = e = nn(e.current, null), Ce = Ue = t, ve = 0, Gr = null, $s = ho = Sn = 0, $e = Er = null, hn !== null) {
    for (t = 0; t < hn.length; t++) if (n = hn[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var a = r.next, o = n.pending;
      if (o !== null) {
        var s = o.next;
        o.next = a, r.next = s;
      }
      n.pending = r;
    }
    hn = null;
  }
  return e;
}
function hd(e, t) {
  do {
    var n = me;
    try {
      if (Ss(), Ca.current = Ka, Ya) {
        for (var r = ue.memoizedState; r !== null; ) {
          var a = r.queue;
          a !== null && (a.pending = null), r = r.next;
        }
        Ya = !1;
      }
      if (kn = 0, xe = ge = ue = null, _r = !1, qr = 0, As.current = null, n === null || n.return === null) {
        ve = 1, Gr = t, me = null;
        break;
      }
      e: {
        var o = e, s = n.return, u = n, l = t;
        if (t = Ce, u.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var p = l, v = u, f = v.tag;
          if (!(v.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var h = v.alternate;
            h ? (v.updateQueue = h.updateQueue, v.memoizedState = h.memoizedState, v.lanes = h.lanes) : (v.updateQueue = null, v.memoizedState = null);
          }
          var x = Ul(s);
          if (x !== null) {
            x.flags &= -257, Vl(x, s, u, o, t), x.mode & 1 && ql(o, p, t), t = x, l = p;
            var _ = t.updateQueue;
            if (_ === null) {
              var y = /* @__PURE__ */ new Set();
              y.add(l), t.updateQueue = y;
            } else _.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              ql(o, p, t), Bs();
              break e;
            }
            l = Error(z(426));
          }
        } else if (ie && u.mode & 1) {
          var $ = Ul(s);
          if ($ !== null) {
            !($.flags & 65536) && ($.flags |= 256), Vl($, s, u, o, t), js(tr(l, u));
            break e;
          }
        }
        o = l = tr(l, u), ve !== 4 && (ve = 2), Er === null ? Er = [o] : Er.push(o), o = s;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var m = Jc(o, l, t);
              Al(o, m);
              break e;
            case 1:
              u = l;
              var d = o.type, c = o.stateNode;
              if (!(o.flags & 128) && (typeof d.getDerivedStateFromError == "function" || c !== null && typeof c.componentDidCatch == "function" && (en === null || !en.has(c)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var g = Zc(o, u, t);
                Al(o, g);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      yd(n);
    } catch (j) {
      t = j, me === n && n !== null && (me = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function gd() {
  var e = Xa.current;
  return Xa.current = Ka, e === null ? Ka : e;
}
function Bs() {
  (ve === 0 || ve === 3 || ve === 2) && (ve = 4), we === null || !(Sn & 268435455) && !(ho & 268435455) || Ht(we, Ce);
}
function eo(e, t) {
  var n = Q;
  Q |= 2;
  var r = gd();
  (we !== e || Ce !== t) && (Pt = null, vn(e, t));
  do
    try {
      dm();
      break;
    } catch (a) {
      hd(e, a);
    }
  while (!0);
  if (Ss(), Q = n, Xa.current = r, me !== null) throw Error(z(261));
  return we = null, Ce = 0, ve;
}
function dm() {
  for (; me !== null; ) vd(me);
}
function pm() {
  for (; me !== null && !Ap(); ) vd(me);
}
function vd(e) {
  var t = wd(e.alternate, e, Ue);
  e.memoizedProps = e.pendingProps, t === null ? yd(e) : me = t, As.current = null;
}
function yd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = om(n, t), n !== null) {
        n.flags &= 32767, me = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ve = 6, me = null;
        return;
      }
    } else if (n = am(n, t, Ue), n !== null) {
      me = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      me = t;
      return;
    }
    me = t = e;
  } while (t !== null);
  ve === 0 && (ve = 5);
}
function fn(e, t, n) {
  var r = J, a = nt.transition;
  try {
    nt.transition = null, J = 1, fm(e, t, n, r);
  } finally {
    nt.transition = a, J = r;
  }
  return null;
}
function fm(e, t, n, r) {
  do
    Yn();
  while (Qt !== null);
  if (Q & 6) throw Error(z(327));
  n = e.finishedWork;
  var a = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(z(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (Hp(e, o), e === we && (me = we = null, Ce = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ga || (ga = !0, jd(Ia, function() {
    return Yn(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = nt.transition, nt.transition = null;
    var s = J;
    J = 1;
    var u = Q;
    Q |= 4, As.current = null, sm(e, n), pd(n, e), Lf(Si), $a = !!ki, Si = ki = null, e.current = n, lm(n), $p(), Q = u, J = s, nt.transition = o;
  } else e.current = n;
  if (ga && (ga = !1, Qt = e, Za = a), o = e.pendingLanes, o === 0 && (en = null), Fp(n.stateNode), Be(e, fe()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) a = t[n], r(a.value, { componentStack: a.stack, digest: a.digest });
  if (Ja) throw Ja = !1, e = Ui, Ui = null, e;
  return Za & 1 && e.tag !== 0 && Yn(), o = e.pendingLanes, o & 1 ? e === Vi ? zr++ : (zr = 0, Vi = e) : zr = 0, ln(), null;
}
function Yn() {
  if (Qt !== null) {
    var e = Ju(Za), t = nt.transition, n = J;
    try {
      if (nt.transition = null, J = 16 > e ? 16 : e, Qt === null) var r = !1;
      else {
        if (e = Qt, Qt = null, Za = 0, Q & 6) throw Error(z(331));
        var a = Q;
        for (Q |= 4, I = e.current; I !== null; ) {
          var o = I, s = o.child;
          if (I.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var l = 0; l < u.length; l++) {
                var p = u[l];
                for (I = p; I !== null; ) {
                  var v = I;
                  switch (v.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Nr(8, v, o);
                  }
                  var f = v.child;
                  if (f !== null) f.return = v, I = f;
                  else for (; I !== null; ) {
                    v = I;
                    var h = v.sibling, x = v.return;
                    if (ud(v), v === p) {
                      I = null;
                      break;
                    }
                    if (h !== null) {
                      h.return = x, I = h;
                      break;
                    }
                    I = x;
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
              I = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) s.return = o, I = s;
          else e: for (; I !== null; ) {
            if (o = I, o.flags & 2048) switch (o.tag) {
              case 0:
              case 11:
              case 15:
                Nr(9, o, o.return);
            }
            var m = o.sibling;
            if (m !== null) {
              m.return = o.return, I = m;
              break e;
            }
            I = o.return;
          }
        }
        var d = e.current;
        for (I = d; I !== null; ) {
          s = I;
          var c = s.child;
          if (s.subtreeFlags & 2064 && c !== null) c.return = s, I = c;
          else e: for (s = d; I !== null; ) {
            if (u = I, u.flags & 2048) try {
              switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  mo(9, u);
              }
            } catch (j) {
              de(u, u.return, j);
            }
            if (u === s) {
              I = null;
              break e;
            }
            var g = u.sibling;
            if (g !== null) {
              g.return = u.return, I = g;
              break e;
            }
            I = u.return;
          }
        }
        if (Q = a, ln(), St && typeof St.onPostCommitFiberRoot == "function") try {
          St.onPostCommitFiberRoot(oo, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      J = n, nt.transition = t;
    }
  }
  return !1;
}
function ru(e, t, n) {
  t = tr(n, t), t = Jc(e, t, 1), e = Zt(e, t, 1), t = Le(), e !== null && (Kr(e, 1, t), Be(e, t));
}
function de(e, t, n) {
  if (e.tag === 3) ru(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      ru(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (en === null || !en.has(r))) {
        e = tr(n, e), e = Zc(t, e, 1), t = Zt(t, e, 1), e = Le(), t !== null && (Kr(t, 1, e), Be(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function mm(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = Le(), e.pingedLanes |= e.suspendedLanes & n, we === e && (Ce & n) === n && (ve === 4 || ve === 3 && (Ce & 130023424) === Ce && 500 > fe() - Ds ? vn(e, 0) : $s |= n), Be(e, t);
}
function xd(e, t) {
  t === 0 && (e.mode & 1 ? (t = ia, ia <<= 1, !(ia & 130023424) && (ia = 4194304)) : t = 1);
  var n = Le();
  e = At(e, t), e !== null && (Kr(e, t, n), Be(e, n));
}
function hm(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), xd(e, n);
}
function gm(e, t) {
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
  r !== null && r.delete(t), xd(e, n);
}
var wd;
wd = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Oe.current) De = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return De = !1, rm(e, t, n);
    De = !!(e.flags & 131072);
  }
  else De = !1, ie && t.flags & 1048576 && Cc(t, Va, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Na(e, t), e = t.pendingProps;
      var a = Xn(t, Pe.current);
      Qn(t, n), a = Ms(null, t, r, e, a, n);
      var o = Ts();
      return t.flags |= 1, typeof a == "object" && a !== null && typeof a.render == "function" && a.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Fe(r) ? (o = !0, qa(t)) : o = !1, t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, Ns(t), a.updater = fo, t.stateNode = a, a._reactInternals = t, Ti(t, r, e, n), t = Ii(null, t, r, !0, o, n)) : (t.tag = 0, ie && o && xs(t), Te(null, t, a, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Na(e, t), e = t.pendingProps, a = r._init, r = a(r._payload), t.type = r, a = t.tag = ym(r), e = ct(r, e), a) {
          case 0:
            t = Ri(null, t, r, e, n);
            break e;
          case 1:
            t = Wl(null, t, r, e, n);
            break e;
          case 11:
            t = Gl(null, t, r, e, n);
            break e;
          case 14:
            t = Hl(null, t, r, ct(r.type, e), n);
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
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : ct(r, a), Ri(e, t, r, a, n);
    case 1:
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : ct(r, a), Wl(e, t, r, a, n);
    case 3:
      e: {
        if (rd(t), e === null) throw Error(z(387));
        r = t.pendingProps, o = t.memoizedState, a = o.element, bc(e, t), Wa(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
          a = tr(Error(z(423)), t), t = Ql(e, t, r, n, a);
          break e;
        } else if (r !== a) {
          a = tr(Error(z(424)), t), t = Ql(e, t, r, n, a);
          break e;
        } else for (Ve = Jt(t.stateNode.containerInfo.firstChild), Ge = t, ie = !0, pt = null, n = zc(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Jn(), r === a) {
            t = $t(e, t, n);
            break e;
          }
          Te(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Mc(t), e === null && Pi(t), r = t.type, a = t.pendingProps, o = e !== null ? e.memoizedProps : null, s = a.children, Ci(r, a) ? s = null : o !== null && Ci(r, o) && (t.flags |= 32), nd(e, t), Te(e, t, s, n), t.child;
    case 6:
      return e === null && Pi(t), null;
    case 13:
      return ad(e, t, n);
    case 4:
      return Es(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Zn(t, null, r, n) : Te(e, t, r, n), t.child;
    case 11:
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : ct(r, a), Gl(e, t, r, a, n);
    case 7:
      return Te(e, t, t.pendingProps, n), t.child;
    case 8:
      return Te(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Te(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, a = t.pendingProps, o = t.memoizedProps, s = a.value, te(Ga, r._currentValue), r._currentValue = s, o !== null) if (ht(o.value, s)) {
          if (o.children === a.children && !Oe.current) {
            t = $t(e, t, n);
            break e;
          }
        } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
          var u = o.dependencies;
          if (u !== null) {
            s = o.child;
            for (var l = u.firstContext; l !== null; ) {
              if (l.context === r) {
                if (o.tag === 1) {
                  l = Lt(-1, n & -n), l.tag = 2;
                  var p = o.updateQueue;
                  if (p !== null) {
                    p = p.shared;
                    var v = p.pending;
                    v === null ? l.next = l : (l.next = v.next, v.next = l), p.pending = l;
                  }
                }
                o.lanes |= n, l = o.alternate, l !== null && (l.lanes |= n), bi(
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
            s.lanes |= n, u = s.alternate, u !== null && (u.lanes |= n), bi(s, n, t), s = o.sibling;
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
        Te(e, t, a.children, n), t = t.child;
      }
      return t;
    case 9:
      return a = t.type, r = t.pendingProps.children, Qn(t, n), a = rt(a), r = r(a), t.flags |= 1, Te(e, t, r, n), t.child;
    case 14:
      return r = t.type, a = ct(r, t.pendingProps), a = ct(r.type, a), Hl(e, t, r, a, n);
    case 15:
      return ed(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : ct(r, a), Na(e, t), t.tag = 1, Fe(r) ? (e = !0, qa(t)) : e = !1, Qn(t, n), Xc(t, r, a), Ti(t, r, a, n), Ii(null, t, r, !0, e, n);
    case 19:
      return od(e, t, n);
    case 22:
      return td(e, t, n);
  }
  throw Error(z(156, t.tag));
};
function jd(e, t) {
  return Qu(e, t);
}
function vm(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function tt(e, t, n, r) {
  return new vm(e, t, n, r);
}
function qs(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function ym(e) {
  if (typeof e == "function") return qs(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === ss) return 11;
    if (e === ls) return 14;
  }
  return 2;
}
function nn(e, t) {
  var n = e.alternate;
  return n === null ? (n = tt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Pa(e, t, n, r, a, o) {
  var s = 2;
  if (r = e, typeof e == "function") qs(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else e: switch (e) {
    case Ln:
      return yn(n.children, a, o, t);
    case is:
      s = 8, a |= 8;
      break;
    case ni:
      return e = tt(12, n, t, a | 2), e.elementType = ni, e.lanes = o, e;
    case ri:
      return e = tt(13, n, t, a), e.elementType = ri, e.lanes = o, e;
    case ai:
      return e = tt(19, n, t, a), e.elementType = ai, e.lanes = o, e;
    case Mu:
      return go(n, a, o, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Pu:
          s = 10;
          break e;
        case bu:
          s = 9;
          break e;
        case ss:
          s = 11;
          break e;
        case ls:
          s = 14;
          break e;
        case Ut:
          s = 16, r = null;
          break e;
      }
      throw Error(z(130, e == null ? e : typeof e, ""));
  }
  return t = tt(s, n, t, a), t.elementType = e, t.type = r, t.lanes = o, t;
}
function yn(e, t, n, r) {
  return e = tt(7, e, r, t), e.lanes = n, e;
}
function go(e, t, n, r) {
  return e = tt(22, e, r, t), e.elementType = Mu, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Qo(e, t, n) {
  return e = tt(6, e, null, t), e.lanes = n, e;
}
function Yo(e, t, n) {
  return t = tt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function xm(e, t, n, r, a) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Po(0), this.expirationTimes = Po(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Po(0), this.identifierPrefix = r, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null;
}
function Us(e, t, n, r, a, o, s, u, l) {
  return e = new xm(e, t, n, u, l), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = tt(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ns(o), e;
}
function wm(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Tn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function kd(e) {
  if (!e) return an;
  e = e._reactInternals;
  e: {
    if (Nn(e) !== e || e.tag !== 1) throw Error(z(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Fe(t.type)) {
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
    if (Fe(n)) return kc(e, n, t);
  }
  return t;
}
function Sd(e, t, n, r, a, o, s, u, l) {
  return e = Us(n, r, !0, e, a, o, s, u, l), e.context = kd(null), n = e.current, r = Le(), a = tn(n), o = Lt(r, a), o.callback = t ?? null, Zt(n, o, a), e.current.lanes = a, Kr(e, a, r), Be(e, r), e;
}
function vo(e, t, n, r) {
  var a = t.current, o = Le(), s = tn(a);
  return n = kd(n), t.context === null ? t.context = n : t.pendingContext = n, t = Lt(o, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Zt(a, t, s), e !== null && (mt(e, a, s, o), Sa(e, a, s)), s;
}
function to(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function au(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Vs(e, t) {
  au(e, t), (e = e.alternate) && au(e, t);
}
function jm() {
  return null;
}
var Cd = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Gs(e) {
  this._internalRoot = e;
}
yo.prototype.render = Gs.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(z(409));
  vo(e, t, null, null);
};
yo.prototype.unmount = Gs.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Cn(function() {
      vo(null, e, null, null);
    }), t[It] = null;
  }
};
function yo(e) {
  this._internalRoot = e;
}
yo.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = tc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Gt.length && t !== 0 && t < Gt[n].priority; n++) ;
    Gt.splice(n, 0, e), n === 0 && rc(e);
  }
};
function Hs(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function xo(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function ou() {
}
function km(e, t, n, r, a) {
  if (a) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var p = to(s);
        o.call(p);
      };
    }
    var s = Sd(t, r, e, 0, null, !1, !1, "", ou);
    return e._reactRootContainer = s, e[It] = s.current, $r(e.nodeType === 8 ? e.parentNode : e), Cn(), s;
  }
  for (; a = e.lastChild; ) e.removeChild(a);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var p = to(l);
      u.call(p);
    };
  }
  var l = Us(e, 0, !1, null, null, !1, !1, "", ou);
  return e._reactRootContainer = l, e[It] = l.current, $r(e.nodeType === 8 ? e.parentNode : e), Cn(function() {
    vo(t, l, n, r);
  }), l;
}
function wo(e, t, n, r, a) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof a == "function") {
      var u = a;
      a = function() {
        var l = to(s);
        u.call(l);
      };
    }
    vo(t, s, e, a);
  } else s = km(n, t, e, a, r);
  return to(s);
}
Zu = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = yr(t.pendingLanes);
        n !== 0 && (ds(t, n | 1), Be(t, fe()), !(Q & 6) && (nr = fe() + 500, ln()));
      }
      break;
    case 13:
      Cn(function() {
        var r = At(e, 1);
        if (r !== null) {
          var a = Le();
          mt(r, e, 1, a);
        }
      }), Vs(e, 1);
  }
};
ps = function(e) {
  if (e.tag === 13) {
    var t = At(e, 134217728);
    if (t !== null) {
      var n = Le();
      mt(t, e, 134217728, n);
    }
    Vs(e, 134217728);
  }
};
ec = function(e) {
  if (e.tag === 13) {
    var t = tn(e), n = At(e, t);
    if (n !== null) {
      var r = Le();
      mt(n, e, t, r);
    }
    Vs(e, t);
  }
};
tc = function() {
  return J;
};
nc = function(e, t) {
  var n = J;
  try {
    return J = e, t();
  } finally {
    J = n;
  }
};
mi = function(e, t, n) {
  switch (t) {
    case "input":
      if (si(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var a = uo(r);
            if (!a) throw Error(z(90));
            Lu(r), si(r, a);
          }
        }
      }
      break;
    case "textarea":
      Iu(e, n);
      break;
    case "select":
      t = n.value, t != null && Vn(e, !!n.multiple, t, !1);
  }
};
qu = Os;
Uu = Cn;
var Sm = { usingClientEntryPoint: !1, Events: [Jr, $n, uo, Fu, Bu, Os] }, hr = { findFiberByHostInstance: mn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Cm = { bundleType: hr.bundleType, version: hr.version, rendererPackageName: hr.rendererPackageName, rendererConfig: hr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Dt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Hu(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: hr.findFiberByHostInstance || jm, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var va = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!va.isDisabled && va.supportsFiber) try {
    oo = va.inject(Cm), St = va;
  } catch {
  }
}
We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sm;
We.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Hs(t)) throw Error(z(200));
  return wm(e, t, null, n);
};
We.createRoot = function(e, t) {
  if (!Hs(e)) throw Error(z(299));
  var n = !1, r = "", a = Cd;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (a = t.onRecoverableError)), t = Us(e, 1, !1, null, null, n, !1, r, a), e[It] = t.current, $r(e.nodeType === 8 ? e.parentNode : e), new Gs(t);
};
We.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(z(188)) : (e = Object.keys(e).join(","), Error(z(268, e)));
  return e = Hu(t), e = e === null ? null : e.stateNode, e;
};
We.flushSync = function(e) {
  return Cn(e);
};
We.hydrate = function(e, t, n) {
  if (!xo(t)) throw Error(z(200));
  return wo(null, e, t, !0, n);
};
We.hydrateRoot = function(e, t, n) {
  if (!Hs(e)) throw Error(z(405));
  var r = n != null && n.hydratedSources || null, a = !1, o = "", s = Cd;
  if (n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = Sd(t, null, e, 1, n ?? null, a, !1, o, s), e[It] = t.current, $r(e), r) for (e = 0; e < r.length; e++) n = r[e], a = n._getVersion, a = a(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(
    n,
    a
  );
  return new yo(t);
};
We.render = function(e, t, n) {
  if (!xo(t)) throw Error(z(200));
  return wo(null, e, t, !1, n);
};
We.unmountComponentAtNode = function(e) {
  if (!xo(e)) throw Error(z(40));
  return e._reactRootContainer ? (Cn(function() {
    wo(null, null, e, !1, function() {
      e._reactRootContainer = null, e[It] = null;
    });
  }), !0) : !1;
};
We.unstable_batchedUpdates = Os;
We.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!xo(n)) throw Error(z(200));
  if (e == null || e._reactInternals === void 0) throw Error(z(38));
  return wo(e, t, n, !1, r);
};
We.version = "18.3.1-next-f1338f8080-20240426";
function _d() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_d);
    } catch (e) {
      console.error(e);
    }
}
_d(), _u.exports = We;
var _m = _u.exports, Nd, iu = _m;
Nd = iu.createRoot, iu.hydrateRoot;
const su = {
  maker3: "Cricut Maker 3",
  maker: "Cricut Maker",
  maker5: "Cricut Maker 5",
  estandar: "Explore / Joy Xtra / Venture (estándar)",
  joy: "Cricut Joy 2"
}, Nm = {
  A4: [210, 297],
  A3: [297, 420],
  A5: [148, 210],
  Letter: [215.9, 279.4]
}, Em = [
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
], zm = [
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
function Hr(e) {
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
function Pm(e, t = 0) {
  const n = (Number.isFinite(e.scale_pct) ? e.scale_pct : 100) / 100, r = Number.isFinite(e.w_mm_base) ? e.w_mm_base : e.w_mm, a = Number.isFinite(e.h_mm_base) ? e.h_mm_base : e.h_mm, o = 2 * (Number.isFinite(t) ? t : 0), s = (Number.isFinite(r) ? r : 0) * n + o, u = (Number.isFinite(a) ? a : 0) * n + o;
  return { w: Number.isFinite(s) ? s : 0, h: Number.isFinite(u) ? u : 0 };
}
const xn = () => globalThis.__crycatBase || "";
async function U(e, t) {
  const n = await fetch(xn() + e, t);
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
  health: () => U("/api/health"),
  getSettings: () => U(
    "/api/settings"
  ),
  putSettings: (e) => U("/api/settings", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  }),
  upload: (e, t) => {
    const n = new FormData();
    return n.append("file", e, t), U("/api/assets", { method: "POST", body: n });
  },
  listAssets: () => U("/api/assets"),
  patchAsset: (e, t) => U(`/api/assets/${e}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(t)
  }),
  deleteAsset: (e) => U(`/api/assets/${e}`, { method: "DELETE" }),
  crearDemo: (e = 16) => U(
    `/api/demo?n=${e}`,
    { method: "POST" }
  ),
  clearAssets: () => U("/api/assets", { method: "DELETE" }),
  removeBackground: (e) => U(`/api/assets/${e}/remove-background`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({})
  }),
  restoreBackground: (e) => U(`/api/assets/${e}/restore-background`, { method: "POST" }),
  reemplazar: (e, t, n) => {
    const r = new FormData();
    return r.append("file", t, n), U(`/api/assets/${e}/reemplazar`, { method: "POST", body: r });
  },
  /** Contornos vectoriales de las piezas para la vista animada. */
  contornos: () => U(
    "/api/contornos"
  ),
  contornoPreview: (e, t) => U(`/api/assets/${e}/contorno-preview`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(t)
  }),
  blobs: (e) => U(`/api/assets/${e}/blobs`),
  limpiarContorno: (e, t) => U(`/api/assets/${e}/limpiar-contorno`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ quitar: t })
  }),
  /** Vista previa de la carta: con los contornos punteados (nunca va al PDF). */
  previewUrl: (e, t = !0, n = 0, r = "final") => `${xn()}/api/assets/${e}/preview.png?bordes=${t ? 1 : 0}&fase=${n}&cont=${r}`,
  previewUrlSinBordes: (e, t = 0) => `/api/assets/${e}/preview.png?r=${t}`,
  optimize: (e, t = !1) => U("/api/optimize", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ modo: e ?? null, force: t })
  }),
  job: (e) => U(`/api/job/${e}`),
  /** Restaura una colocación anterior (deshacer/rehacer con resultados). */
  restoreResult: (e) => U("/api/result/restore", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(e)
  }),
  result: () => U("/api/result"),
  version: () => U("/api/version"),
  checkVersion: () => U("/api/version/check", { method: "POST" }),
  updateVersion: () => U(
    "/api/version/update",
    { method: "POST" }
  ),
  openReleases: () => U("/api/version/open", { method: "POST" }),
  estimate: () => U("/api/estimate"),
  pageUrl: (e, t, n = !1, r = !1, a = 0, o = "final") => `${xn().replace(/\/$/, "")}/api/pages/${e}.png?v=${t}${n ? "&sim=1" : ""}${r ? "&bordes=1" : ""}${r ? `&fase=${a}&cont=${o}` : ""}`,
  move: (e, t, n) => U(
    "/api/placements/move",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ uid: e, x: t, y: n })
    }
  ),
  unpin: (e) => U("/api/placements/unpin", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ uid: e })
  }),
  export: (e, t) => U("/api/export", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e, folder: t })
  }),
  printUrl: () => "/api/print.pdf",
  fsList: (e) => U(
    `/api/fs/list?path=${encodeURIComponent(e)}`
  ),
  abrirCarpeta: (e) => U("/api/fs/open", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ path: e ?? null })
  }),
  fsOpen: (e) => U("/api/fs/open", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ path: e })
  }),
  factoryPresets: () => U(
    "/api/presets/factory"
  ),
  assetsFolder: () => U("/api/assets-folder"),
  setIcon: (e) => {
    const t = new FormData();
    return t.append("file", e, "icono.png"), U("/api/icon", { method: "POST", body: t });
  },
  iconUrl: () => `${xn()}/api/icon.png?v=${Date.now()}`,
  // ---------------------------------------------------- perfiles --
  presets: () => U("/api/presets"),
  savePreset: (e) => U("/api/presets", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: e })
  }),
  loadPreset: (e) => U(
    `/api/presets/${encodeURIComponent(e)}/load`,
    { method: "POST" }
  ),
  deletePreset: (e) => U(
    `/api/presets/${encodeURIComponent(e)}`,
    { method: "DELETE" }
  ),
  // ------------------------------------------------------- modos --
  modos: () => U("/api/modos"),
  saveModo: (e, t) => U(`/api/modos/${e}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre: t })
  }),
  renameModo: (e, t) => U(`/api/modos/${e}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre: t })
  }),
  loadModo: (e) => U(
    `/api/modos/${e}/load`,
    { method: "POST" }
  ),
  deleteModo: (e) => U(
    `/api/modos/${e}`,
    { method: "DELETE" }
  )
};
async function bm(e) {
  const t = await e.text(), n = new Blob([t], { type: "image/svg+xml" }), r = URL.createObjectURL(n);
  try {
    const a = new Image();
    await new Promise((v, f) => {
      a.onload = () => v(), a.onerror = () => f(new Error("SVG no válido")), a.src = r;
    });
    const o = a.naturalWidth || a.width || 1024, s = a.naturalHeight || a.height || 1024, u = Math.min(4, Math.max(0.5, 300 / 96)), l = document.createElement("canvas");
    return l.width = Math.round(o * u), l.height = Math.round(s * u), l.getContext("2d").drawImage(a, 0, 0, l.width, l.height), await new Promise(
      (v) => l.toBlob((f) => v(f), "image/png")
    );
  } finally {
    URL.revokeObjectURL(r);
  }
}
async function Ed(e) {
  return e.name.toLowerCase().endsWith(".svg") ? { blob: await bm(e), name: e.name.replace(/\.svg$/i, "") + ".png" } : { blob: e, name: e.name };
}
const Wi = [
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
function Qi(e) {
  return Wi.find((t) => t.key === e) ?? Wi[0];
}
function lu(e) {
  const t = Qi(e), n = document.documentElement;
  Object.entries(t.colors).forEach(([r, a]) => {
    n.style.setProperty(`--${r.replace(/[A-Z]/g, (o) => "-" + o.toLowerCase())}`, a);
  }), n.dataset.theme = t.key;
  try {
    localStorage.setItem("crycat-tema", t.key);
  } catch {
  }
}
function zd() {
  try {
    const e = localStorage.getItem("crycat-tema");
    if (e) return Qi(e);
  } catch {
  }
  return Qi("wiwi");
}
const Pd = {
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
}, bd = w.createContext("es");
function Mm({ idioma: e, children: t }) {
  return /* @__PURE__ */ i.jsx(bd.Provider, { value: e, children: t });
}
function Ws() {
  return w.useContext(bd);
}
function Ye() {
  const e = Ws();
  return (t, n) => {
    let r = e === "en" ? Pd[t] ?? t : t;
    if (n)
      for (const [a, o] of Object.entries(n))
        r = r.split(`{${a}}`).join(String(o));
    return r;
  };
}
function Tm(e, t, n) {
  return e === "en" ? Pd[t] ?? t : t;
}
function ee({ size: e = 18, children: t }) {
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
function Md({ size: e }) {
  return /* @__PURE__ */ i.jsxs(ee, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M4 9.5h3l4.5-3.5v12L7 14.5H4z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M16 9a4 4 0 0 1 0 6" }),
    /* @__PURE__ */ i.jsx("path", { d: "M18.7 6.5a7.5 7.5 0 0 1 0 11" })
  ] });
}
function Wr({ size: e }) {
  return /* @__PURE__ */ i.jsx(ee, { size: e, children: /* @__PURE__ */ i.jsx("path", { d: "M3 7.5a2 2 0 0 1 2-2h3.6l1.7 2H19a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }) });
}
function no({ size: e }) {
  return /* @__PURE__ */ i.jsxs(ee, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M20 12a8 8 0 1 1-2.3-5.6" }),
    /* @__PURE__ */ i.jsx("path", { d: "M20 4v4h-4" })
  ] });
}
function Lm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(ee, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M4 7a3 3 0 0 1 3-3h5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M20 17a3 3 0 0 1-3 3h-5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M15 2l3 2-3 2M9 18l-3 2 3 2" })
  ] });
}
function Rm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(ee, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M12 3l1.9 4.6L18 9l-4.1 1.4L12 15l-1.9-4.6L6 9l4.1-1.4z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M18 15l.9 2.1L21 18l-2.1.9L18 21l-.9-2.1L15 18l2.1-.9z" })
  ] });
}
function ro({ size: e }) {
  return /* @__PURE__ */ i.jsxs(ee, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M4 4h16v16H4z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M4 14l5-5 4 4 3-3 4 4" }),
    /* @__PURE__ */ i.jsx("circle", { cx: "9", cy: "8.5", r: "1.4" })
  ] });
}
function Im({ size: e }) {
  return /* @__PURE__ */ i.jsxs(ee, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M3 12a9 9 0 1 0 3-6.7" }),
    /* @__PURE__ */ i.jsx("path", { d: "M3 4v5h5" })
  ] });
}
function Am({ size: e }) {
  return /* @__PURE__ */ i.jsx(ee, { size: e, children: /* @__PURE__ */ i.jsx("path", { d: "M6 6l12 12M18 6L6 18" }) });
}
function jo({ size: e }) {
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
function uu({ size: e }) {
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
function $m({ size: e }) {
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
function Dm({ size: e }) {
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
function Om({ size: e }) {
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
function Fm({ size: e }) {
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
function Td({ size: e }) {
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
function Qr({ size: e }) {
  return /* @__PURE__ */ i.jsx(ee, { size: e, children: /* @__PURE__ */ i.jsx("path", { d: "M12 3l2.2 5.4L20 10.5l-5.8 2.1L12 18l-2.2-5.4L4 10.5l5.8-2.1z" }) });
}
function Ld({ size: e }) {
  return /* @__PURE__ */ i.jsxs(ee, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M9 7L4 12l5 5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M4 12h9a5 5 0 0 1 5 5v1" })
  ] });
}
function Bm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(ee, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M15 7l5 5-5 5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M20 12h-9a5 5 0 0 0-5 5v1" })
  ] });
}
function Rd({ size: e }) {
  return /* @__PURE__ */ i.jsxs(ee, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M4 4h16v16H4z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M4 9h16M9 4v16", strokeDasharray: "2 2" })
  ] });
}
function qm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(ee, { size: e, children: [
    /* @__PURE__ */ i.jsx("circle", { cx: "11", cy: "11", r: "6.5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M11 8.5v5M8.5 11h5M20 20l-4.4-4.4" })
  ] });
}
function Um({ size: e }) {
  return /* @__PURE__ */ i.jsxs(ee, { size: e, children: [
    /* @__PURE__ */ i.jsx("circle", { cx: "11", cy: "11", r: "6.5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M8.5 11h5M20 20l-4.4-4.4" })
  ] });
}
function ba({ size: e }) {
  return /* @__PURE__ */ i.jsx(ee, { size: e, children: /* @__PURE__ */ i.jsx("path", { d: "M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4" }) });
}
function cu({ size: e }) {
  return /* @__PURE__ */ i.jsxs(ee, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M5 3h11l3 3v15H5z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M8 3v6h7V3M8 15h8v6H8z" })
  ] });
}
function Vm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(ee, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M7 8V3h10v5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M5 8h14a2 2 0 0 1 2 2v6h-4" }),
    /* @__PURE__ */ i.jsx("path", { d: "M3 16v-6a2 2 0 0 1 2-2" }),
    /* @__PURE__ */ i.jsx("path", { d: "M7 14h10v7H7z" })
  ] });
}
function Gm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(ee, { size: e, children: [
    /* @__PURE__ */ i.jsx("circle", { cx: "12", cy: "12", r: "9" }),
    /* @__PURE__ */ i.jsx("path", { d: "M12 11v5M12 7.6v.1" })
  ] });
}
function Hm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(ee, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M12 3l9 16H3z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M12 9v5M12 17v.1" })
  ] });
}
function Id({ size: e }) {
  return /* @__PURE__ */ i.jsxs(ee, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M12 4l9 15H3z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M12 10v4.5M12 17.2v.1" })
  ] });
}
function Wm({ size: e }) {
  return /* @__PURE__ */ i.jsx(ee, { size: e, children: /* @__PURE__ */ i.jsx("path", { d: "M4.5 12.5l5 5 10-11" }) });
}
function Ad({ size: e }) {
  return /* @__PURE__ */ i.jsxs(ee, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M12 3v12" }),
    /* @__PURE__ */ i.jsx("path", { d: "M7 11l5 5 5-5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M4 20h16" })
  ] });
}
function Qm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(ee, { size: e, children: [
    /* @__PURE__ */ i.jsx("circle", { cx: "12", cy: "12", r: "8" }),
    /* @__PURE__ */ i.jsx("path", { d: "M12 8v4.5l3 2" })
  ] });
}
function Ym({ size: e }) {
  return /* @__PURE__ */ i.jsxs(ee, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M12 6.5C10.5 5 8.3 4.5 4 4.5v13c4.3 0 6.5.5 8 2 1.5-1.5 3.7-2 8-2v-13c-4.3 0-6.5.5-8 2z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M12 6.5v13" })
  ] });
}
function Km({ size: e }) {
  return /* @__PURE__ */ i.jsx(ee, { size: e, children: /* @__PURE__ */ i.jsx("path", { d: "M12 20s-7.5-4.6-7.5-9.4A4.1 4.1 0 0 1 12 8a4.1 4.1 0 0 1 7.5 2.6C19.5 15.4 12 20 12 20z" }) });
}
function Xm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(ee, { size: e, children: [
    /* @__PURE__ */ i.jsx("path", { d: "M4.5 8.5A4 4 0 0 1 8.5 4.5h7a4 4 0 0 1 4 4v3.2a4 4 0 0 1-1.2 2.9l-4.7 4.7a4 4 0 0 1-2.8 1.2H8.5a4 4 0 0 1-4-4z" }),
    /* @__PURE__ */ i.jsx("path", { d: "M14 19.5v-3.6a2 2 0 0 1 2-2h3.4" })
  ] });
}
function Jm({ size: e }) {
  return /* @__PURE__ */ i.jsxs(ee, { size: e, children: [
    /* @__PURE__ */ i.jsx("rect", { x: "4", y: "4.5", width: "16", height: "11", rx: "1.5" }),
    /* @__PURE__ */ i.jsx("path", { d: "M8 19l2.6-3.5M16 19l-2.6-3.5" })
  ] });
}
function Zm({ open: e, assets: t, onClose: n, onDone: r }) {
  const a = Ye(), o = w.useMemo(() => t.map((C) => C.id), [t]), [s, u] = w.useState(/* @__PURE__ */ new Set()), [l, p] = w.useState("escala"), [v, f] = w.useState(100), [h, x] = w.useState(50), [_, y] = w.useState("mayor"), [$, m] = w.useState("");
  w.useEffect(() => {
    e && (u(/* @__PURE__ */ new Set()), m(""));
  }, [e, o.join(",")]);
  const d = (C) => !s.has(C), c = (C) => u((E) => {
    const q = new Set(E);
    return q.has(C) ? q.delete(C) : q.add(C), q;
  }), g = () => u(
    s.size === o.length ? /* @__PURE__ */ new Set() : new Set(o)
  ), j = (C) => {
    const E = C.w_mm_base || 0, q = C.h_mm_base || 0;
    return _ === "mayor" ? Math.max(E, q) : _ === "menor" ? Math.min(E, q) : 2 * Math.sqrt(Math.max(0, E * q) / Math.PI);
  }, S = (C) => {
    if (l === "tamano") {
      const E = j(C);
      if (E > 0) return Math.min(10, Math.max(0.05, h / E));
    }
    return Math.min(10, Math.max(0.05, v / 100));
  }, N = (C) => {
    const E = S(C);
    return { w: (C.w_mm_base || 0) * E, h: (C.h_mm_base || 0) * E };
  }, P = async () => {
    let C = 0;
    for (const E of t) {
      if (!d(E.id)) continue;
      const q = S(E) * 100;
      await A.patchAsset(E.id, {
        scale_pct: Math.min(1e3, Math.max(5, Math.round(q * 10) / 10))
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
          const E = N(C), q = Math.min(98, E.w / 210 * 100);
          return /* @__PURE__ */ i.jsx(
            "div",
            {
              className: "a4-item",
              "data-testid": `import-preview-${C.id}`,
              style: {
                width: `${q}%`,
                maxWidth: `${q}%`,
                aspectRatio: `${E.w || 1} / ${E.h || 1}`,
                opacity: d(C.id) ? 1 : 0.3
              },
              title: `${C.name} · ${E.w.toFixed(1)}×${E.h.toFixed(1)} mm`,
              children: /* @__PURE__ */ i.jsx("img", { src: A.previewUrl(C.id), alt: "" })
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
              onClick: g,
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
          const E = N(C);
          return /* @__PURE__ */ i.jsxs(
            "button",
            {
              type: "button",
              "data-testid": `import-item-${C.id}`,
              className: d(C.id) ? "sel" : "",
              onClick: () => c(C.id),
              title: C.name,
              children: [
                /* @__PURE__ */ i.jsx("img", { src: A.previewUrl(C.id), alt: C.name }),
                /* @__PURE__ */ i.jsx("span", { className: "import-nombre", children: C.name }),
                /* @__PURE__ */ i.jsxs("span", { className: "import-datos", children: [
                  Math.round(C.dpi_origen || 0),
                  " ppp ·",
                  " ",
                  E.w.toFixed(1),
                  "×",
                  E.h.toFixed(1),
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
              onClick: () => p("escala"),
              children: a("Escala (%)")
            }
          ),
          /* @__PURE__ */ i.jsx(
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
                value: String(v),
                onChange: (C) => f(Number(C.target.value))
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
                  value: String(h),
                  onChange: (C) => x(Number(C.target.value))
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
                onChange: (C) => y(C.target.value),
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
          onClick: P,
          children: a("Aplicar cambios")
        }
      )
    ] })
  ] }) });
}
function eh({
  a: e,
  result: t,
  onChange: n,
  onEditarContorno: r,
  onAntesDeCambiar: a,
  bordeGlobal: o = !1,
  bordeGlobalMm: s = 0,
  faseBordes: u = 0,
  verBordes: l = !0,
  contornoModo: p = "final",
  destacado: v = !1
}) {
  const f = Ye(), [h, x] = w.useState(() => Hr(e));
  w.useEffect(() => x(Hr(e)), [e]);
  const _ = w.useRef(null), y = h.offset_mm > 0 ? h.offset_mm : o && Number(s) || 0, $ = Pm(h, y), [m, d] = w.useState(""), c = w.useRef(!1), [g, j] = w.useState(""), S = w.useRef(!1), [N, P] = w.useState({ tamano: !1, borde: !1, mini: !1 }), C = w.useRef(null);
  w.useEffect(() => {
    var L;
    v && (P({ tamano: !0, borde: !0, mini: !0 }), (L = C.current) == null || L.scrollIntoView({ block: "center", behavior: "smooth" }));
  }, [v]), w.useEffect(() => {
    c.current || d($.w > 0 ? $.w.toFixed(1) : ""), S.current || j($.h > 0 ? $.h.toFixed(1) : "");
  }, [$.w, $.h]);
  const E = Number.isFinite(h.w_mm_base) ? h.w_mm_base : 0, q = Number.isFinite(h.h_mm_base) ? h.h_mm_base : 0, se = (L) => {
    d(L);
    const b = Number(L.replace(",", "."));
    !Number.isFinite(b) || b <= 0 || E <= 0 || ne({ scale_pct: Math.max(5, (b - 2 * y) / E * 100) });
  }, Y = (L) => {
    j(L);
    const b = Number(L.replace(",", "."));
    !Number.isFinite(b) || b <= 0 || q <= 0 || ne({ scale_pct: Math.max(5, (b - 2 * y) / q * 100) });
  }, Z = (t == null ? void 0 : t.placements.filter((L) => L.asset_id === e.id && L.mini).length) ?? 0, je = (t == null ? void 0 : t.placements.filter((L) => L.asset_id === e.id && !L.mini).length) ?? 0, ne = async (L) => {
    a == null || a(), "copies" in L && (L.copies = Math.max(0, L.copies ?? 0)), x((b) => ({ ...b, ...L }));
    try {
      await A.patchAsset(e.id, L);
    } finally {
      await n();
    }
  };
  return /* @__PURE__ */ i.jsxs(
    "div",
    {
      ref: C,
      "data-asset": e.id,
      className: `asset-card${v ? " destacada" : ""}`,
      "data-testid": "asset-card",
      children: [
        /* @__PURE__ */ i.jsx("div", { className: "preview", children: /* @__PURE__ */ i.jsx(
          "img",
          {
            src: A.previewUrlSinBordes(e.id, e.rev ?? 0),
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
                title: f("Abrir en el explorador la carpeta de las imágenes de la sesión"),
                onClick: () => A.assetsFolder().then((L) => A.abrirCarpeta(L.path)).catch(() => A.abrirCarpeta().catch(() => {
                })),
                children: /* @__PURE__ */ i.jsx(Wr, { size: 16 })
              }
            ),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                className: "icon-btn",
                "data-testid": `reemplazar-${e.id}`,
                title: f("Reemplazar por otro archivo de la carpeta"),
                onClick: () => {
                  var L;
                  return (L = _.current) == null ? void 0 : L.click();
                },
                children: /* @__PURE__ */ i.jsx(Lm, { size: 16 })
              }
            ),
            /* @__PURE__ */ i.jsx(
              "input",
              {
                ref: _,
                type: "file",
                hidden: !0,
                accept: "image/*,.psd,.ai,.svg",
                onChange: async (L) => {
                  var B;
                  const b = (B = L.target.files) == null ? void 0 : B[0];
                  if (L.target.value = "", !!b)
                    try {
                      const { blob: F, name: W } = await Ed(b);
                      await A.reemplazar(e.id, F, W), await n();
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
                title: f("Limpiar contorno (quitar trozos sueltos) sin tocar el original"),
                onClick: () => r == null ? void 0 : r(e),
                children: /* @__PURE__ */ i.jsx(Rm, { size: 16 })
              }
            ),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                className: "icon-btn",
                title: h.bg_removed ? f("Restaurar fondo original") : f("Quitar fondo (inteligente)"),
                onClick: () => (h.bg_removed ? A.restoreBackground(e.id) : A.removeBackground(e.id)).then(n),
                children: h.bg_removed ? /* @__PURE__ */ i.jsx(Im, { size: 16 }) : /* @__PURE__ */ i.jsx(ro, { size: 16 })
              }
            ),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                className: "icon-btn danger",
                title: f("Eliminar imagen"),
                onClick: () => A.deleteAsset(e.id).then(n),
                children: /* @__PURE__ */ i.jsx(Am, { size: 16 })
              }
            )
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "card-actions", children: [
            /* @__PURE__ */ i.jsxs(
              "button",
              {
                className: `mini-toggle ${h.mini_enabled ? "on" : ""}`,
                "data-testid": `mini-${e.id}`,
                "data-tip": f("Incluir como mini (rellena huecos)"),
                onClick: () => ne({ mini_enabled: !h.mini_enabled }),
                children: [
                  /* @__PURE__ */ i.jsx(Qr, { size: 15 }),
                  " ",
                  f("Mini")
                ]
              }
            ),
            /* @__PURE__ */ i.jsxs(
              "button",
              {
                className: `mini-toggle ${h.offset_mm > 0 ? "on" : ""}`,
                "data-testid": `borde-${e.id}`,
                "data-tip": f("Borde adicional para este elemento (unir trozos, margen al cortar)"),
                onClick: () => P((L) => ({ ...L, borde: !L.borde })),
                children: [
                  /* @__PURE__ */ i.jsx(jo, { size: 15 }),
                  " ",
                  f("Borde")
                ]
              }
            ),
            /* @__PURE__ */ i.jsxs("div", { className: "copies-row", title: f("Copias"), children: [
              /* @__PURE__ */ i.jsx("button", { "data-testid": `resta-${e.id}`, onClick: () => ne({ copies: h.copies - 1 }), children: "−" }),
              /* @__PURE__ */ i.jsx("span", { className: "n", "data-testid": `copias-${e.id}`, children: h.copies }),
              /* @__PURE__ */ i.jsx("button", { "data-testid": `suma-${e.id}`, onClick: () => ne({ copies: h.copies + 1 }), children: "+" })
            ] })
          ] }),
          /* @__PURE__ */ i.jsxs("div", { className: "fold", children: [
            /* @__PURE__ */ i.jsxs(
              "button",
              {
                className: "fold-head",
                "data-testid": `fold-tamano-${e.id}`,
                onClick: () => P((L) => ({ ...L, tamano: !L.tamano })),
                children: [
                  /* @__PURE__ */ i.jsx("span", { className: `chev ${N.tamano ? "open" : ""}`, children: "›" }),
                  f("Tamaño"),
                  /* @__PURE__ */ i.jsxs("span", { className: "fold-val", "data-testid": `tamano-${e.id}`, children: [
                    $.w.toFixed(1),
                    "×",
                    $.h.toFixed(1),
                    " · ",
                    Math.round(h.scale_pct),
                    " %"
                  ] })
                ]
              }
            ),
            N.tamano && /* @__PURE__ */ i.jsxs("div", { className: "fold-body", children: [
              /* @__PURE__ */ i.jsxs("div", { className: "scale-row", children: [
                /* @__PURE__ */ i.jsx("span", { title: f("Escala del elemento (100% = tamaño natural)"), children: f("Escala") }),
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    type: "range",
                    min: 10,
                    max: 400,
                    step: 5,
                    value: h.scale_pct,
                    "data-testid": `escala-${e.id}`,
                    onChange: (L) => ne({ scale_pct: Number(L.target.value) })
                  }
                ),
                /* @__PURE__ */ i.jsxs("span", { className: "scale-val", children: [
                  Math.round(h.scale_pct),
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ i.jsxs("div", { className: "exact-row", children: [
                /* @__PURE__ */ i.jsx("span", { title: f("Tamaño exacto en milímetros (mantiene la proporción)"), children: f("Ancho") }),
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    type: "number",
                    min: 0.5,
                    max: 2e3,
                    step: 0.5,
                    value: m,
                    "data-testid": `ancho-mm-${e.id}`,
                    onFocus: () => {
                      c.current = !0, S.current = !1;
                    },
                    onBlur: () => {
                      c.current = !1, d($.w > 0 ? $.w.toFixed(1) : "");
                    },
                    onChange: (L) => se(L.target.value)
                  }
                ),
                /* @__PURE__ */ i.jsx("span", { children: "mm" }),
                /* @__PURE__ */ i.jsx("span", { className: "por", children: "×" }),
                /* @__PURE__ */ i.jsx("span", { title: f("Tamaño exacto en milímetros (mantiene la proporción)"), children: f("Alto") }),
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
                      S.current = !0, c.current = !1;
                    },
                    onBlur: () => {
                      S.current = !1, j($.h > 0 ? $.h.toFixed(1) : "");
                    },
                    onChange: (L) => Y(L.target.value)
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
                onClick: () => P((L) => ({ ...L, borde: !L.borde })),
                children: [
                  /* @__PURE__ */ i.jsx("span", { className: `chev ${N.borde ? "open" : ""}`, children: "›" }),
                  f("Borde adicional"),
                  /* @__PURE__ */ i.jsxs("span", { className: "fold-val", "data-testid": `offset-${e.id}`, children: [
                    h.offset_mm.toFixed(1),
                    " mm",
                    h.offset_mm <= 0 ? ` · ${f("global")}` : ""
                  ] })
                ]
              }
            ),
            N.borde && /* @__PURE__ */ i.jsxs("div", { className: "fold-body", children: [
              /* @__PURE__ */ i.jsxs("div", { className: "seg-row", children: [
                /* @__PURE__ */ i.jsx(
                  "button",
                  {
                    className: "quota-btn",
                    "data-testid": `offset-menos-${e.id}`,
                    onClick: () => ne({ offset_mm: Math.max(
                      0,
                      Math.round((h.offset_mm - 0.5) * 2) / 2
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
                    value: h.offset_mm,
                    onChange: (L) => ne({ offset_mm: Number(L.target.value) })
                  }
                ),
                /* @__PURE__ */ i.jsx(
                  "button",
                  {
                    className: "quota-btn",
                    "data-testid": `offset-mas-${e.id}`,
                    onClick: () => ne({ offset_mm: Math.min(
                      20,
                      Math.round((h.offset_mm + 0.5) * 2) / 2
                    ) }),
                    children: "+"
                  }
                )
              ] }),
              /* @__PURE__ */ i.jsxs("div", { className: "seg-row", children: [
                [
                  ["extender", f("Extender")],
                  ["blanco", f("Blanco")],
                  ["color", f("Color")],
                  ["unir_recto", f("Unir recto")],
                  ["unir_curvo", f("Unir curvo")]
                ].map(([L, b]) => /* @__PURE__ */ i.jsx(
                  "button",
                  {
                    className: `seg ${(h.offset_modo || "") === L ? "on" : ""}`,
                    "data-testid": `offset-modo-${L}-${e.id}`,
                    onClick: () => ne({ offset_modo: L }),
                    children: b
                  },
                  L
                )),
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    type: "color",
                    className: "color-pick",
                    "data-testid": `offset-color-${e.id}`,
                    value: h.offset_color || "#ffffff",
                    title: f("Color del borde"),
                    onChange: (L) => ne({
                      offset_color: L.target.value,
                      offset_modo: "color"
                    })
                  }
                )
              ] })
            ] })
          ] }),
          h.mini_enabled && /* @__PURE__ */ i.jsxs("div", { className: "fold", children: [
            /* @__PURE__ */ i.jsxs(
              "button",
              {
                className: "fold-head",
                "data-testid": `fold-mini-${e.id}`,
                onClick: () => P((L) => ({ ...L, mini: !L.mini })),
                children: [
                  /* @__PURE__ */ i.jsx("span", { className: `chev ${N.mini ? "open" : ""}`, children: "›" }),
                  f("Opciones de mini"),
                  /* @__PURE__ */ i.jsxs("span", { className: "fold-val", "data-testid": `minis-${e.id}`, children: [
                    "×",
                    h.mini_quota,
                    " · ",
                    Z
                  ] })
                ]
              }
            ),
            N.mini && /* @__PURE__ */ i.jsx("div", { className: "fold-body", children: /* @__PURE__ */ i.jsxs("div", { className: "seg-row", children: [
              /* @__PURE__ */ i.jsx("span", { title: f("Cuántos minis quieres de este elemento respecto a los demás (1 = reparto equitativo; 3 = el triple)"), children: f("Cuota") }),
              /* @__PURE__ */ i.jsx(
                "button",
                {
                  className: "quota-btn",
                  "data-testid": `cuota-menos-${e.id}`,
                  onClick: () => ne({ mini_quota: Math.max(
                    1,
                    Math.round((h.mini_quota - 0.5) * 2) / 2
                  ) }),
                  children: "−"
                }
              ),
              /* @__PURE__ */ i.jsxs("span", { className: "quota-val", "data-testid": `cuota-${e.id}`, children: [
                "×",
                h.mini_quota
              ] }),
              /* @__PURE__ */ i.jsx(
                "button",
                {
                  className: "quota-btn",
                  "data-testid": `cuota-mas-${e.id}`,
                  onClick: () => ne({ mini_quota: Math.min(
                    100,
                    Math.round((h.mini_quota + 0.5) * 2) / 2
                  ) }),
                  children: "+"
                }
              ),
              /* @__PURE__ */ i.jsx("span", { className: "mini-count", children: f(" {n} minis", { n: Z }) })
            ] }) })
          ] }),
          je > 0 && /* @__PURE__ */ i.jsx("div", { className: "size-mm", children: f("Colocadas: {n}", { n: je }) }),
          h.warnings.length > 0 && /* @__PURE__ */ i.jsxs("div", { className: "warn", children: [
            /* @__PURE__ */ i.jsx(Id, { size: 14 }),
            " ",
            h.warnings[0],
            " ",
            h.warnings.some((L) => /blob|trozos sueltos/i.test(L)) && /* @__PURE__ */ i.jsx(
              "button",
              {
                className: "warn-link",
                "data-testid": `limpiar-aviso-${e.id}`,
                onClick: () => r == null ? void 0 : r(e),
                children: f("LIMPIA EL CONTORNO")
              }
            )
          ] })
        ] })
      ]
    }
  );
}
function th({
  assets: e,
  result: t,
  settings: n,
  onChange: r,
  saveSettings: a,
  onEditarContorno: o,
  onAntesDeCambiar: s,
  faseBordes: u = 0,
  verBordes: l = !0,
  contornoModo: p = "final",
  destacado: v = ""
}) {
  const f = Ye(), h = w.useRef(null), [x, _] = w.useState(!1), [y, $] = w.useState(null), m = async (c) => {
    const g = [];
    for (const j of Array.from(c))
      try {
        const { blob: S, name: N } = await Ed(j);
        g.push(Hr(await A.upload(S, N)));
      } catch (S) {
        console.error(S);
      }
    await r(), g.length > 1 && $(g);
  }, d = n.usar_minis;
  return e.some((c) => c.demo), /* @__PURE__ */ i.jsxs("div", { className: "file-panel", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "file-head", children: [
      /* @__PURE__ */ i.jsx("h2", { children: f("Imágenes") }),
      /* @__PURE__ */ i.jsx("span", { className: "count-badge", "data-testid": "total-assets", children: e.length })
    ] }),
    /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: `dropzone${x ? " over" : ""}`,
        "data-testid": "dropzone",
        onClick: () => {
          var c;
          return (c = h.current) == null ? void 0 : c.click();
        },
        onDragOver: (c) => {
          c.preventDefault(), _(!0);
        },
        onDragLeave: () => _(!1),
        onDrop: (c) => {
          c.preventDefault(), _(!1), c.dataTransfer.files.length && m(c.dataTransfer.files);
        },
        children: [
          /* @__PURE__ */ i.jsx("span", { className: "plus", children: "+" }),
          /* @__PURE__ */ i.jsxs("span", { children: [
            f("Arrastra imágenes aquí"),
            /* @__PURE__ */ i.jsx("br", {}),
            /* @__PURE__ */ i.jsx("small", { children: "png · jpg · webp · bmp · tiff · gif · psd · ai · svg" })
          ] }),
          /* @__PURE__ */ i.jsx(
            "input",
            {
              ref: h,
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
      eh,
      {
        a: c,
        result: t,
        onChange: r,
        onEditarContorno: o,
        onAntesDeCambiar: s,
        faseBordes: u,
        verBordes: l,
        contornoModo: p,
        destacado: v === c.id,
        bordeGlobal: n.offset_activo === !0,
        bordeGlobalMm: Number(n.offset_mm) || 0
      },
      c.id
    )) }),
    !d && /* @__PURE__ */ i.jsx("div", { className: "hint", children: f("Sugerencia: activa «Usar minis» en Ajustes para rellenar huecos con copias pequeñas.") }),
    /* @__PURE__ */ i.jsx(
      "button",
      {
        className: "btn-clear-all danger",
        "data-testid": "borrar-todo",
        disabled: e.length === 0,
        onClick: () => A.clearAssets().then(r),
        children: f("Descartar imágenes")
      }
    ),
    /* @__PURE__ */ i.jsx(
      Zm,
      {
        open: !!y,
        assets: y ?? [],
        onClose: () => $(null),
        onDone: async () => {
          await r();
        }
      }
    )
  ] });
}
const kt = (e) => (globalThis.__crycatAssets || "") + e;
function $d({ open: e, onClose: t, onPick: n, initial: r }) {
  const a = Ye(), [o, s] = w.useState(null), [u, l] = w.useState("");
  w.useEffect(() => {
    e && p(r || "");
  }, [e]);
  const p = async (v = "") => {
    l("");
    try {
      s(await A.fsList(v));
    } catch (f) {
      l(f.message);
    }
  };
  return e ? /* @__PURE__ */ i.jsx("div", { className: "modal-back", onClick: t, children: /* @__PURE__ */ i.jsxs("div", { className: "modal", onClick: (v) => v.stopPropagation(), "data-testid": "folder-picker", children: [
    /* @__PURE__ */ i.jsx("strong", { children: a("Elegir carpeta de guardado") }),
    /* @__PURE__ */ i.jsx("div", { className: "hint", children: (o == null ? void 0 : o.path) ?? "…" }),
    u && /* @__PURE__ */ i.jsxs("div", { className: "warn", children: [
      " ",
      u
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "dir-list", children: [
      o && o.parent !== o.path && /* @__PURE__ */ i.jsx("button", { onClick: () => p(o.parent), children: ".." }),
      o == null ? void 0 : o.dirs.map((v) => /* @__PURE__ */ i.jsx(
        "button",
        {
          onClick: () => p(`${o.path}/${v}`.replace("//", "/")),
          children: v
        },
        v
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
function nh({
  open: e,
  files: t,
  folder: n,
  error: r,
  onOpenFolder: a,
  onClose: o
}) {
  const s = Ye(), [u, l] = w.useState("resumen");
  if (!e) return null;
  const p = t.length > 0 && t.every((f) => f.startsWith("data:")), v = [
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
      /* @__PURE__ */ i.jsx("ul", { className: "lista-archivos", children: t.map((f) => /* @__PURE__ */ i.jsx("li", { title: f, children: f.split(/[\\/]/).pop() }, f)) }),
      !p && /* @__PURE__ */ i.jsxs("p", { className: "hint", children: [
        s("Carpeta"),
        ": ",
        /* @__PURE__ */ i.jsx("code", { children: n })
      ] }),
      p && /* @__PURE__ */ i.jsx("p", { className: "hint", children: s("Descarga el resultado y ábrelo en Cricut Design Space.") })
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "modal-botones", children: [
      p ? t.map((f, h) => /* @__PURE__ */ i.jsxs(
        "a",
        {
          "data-testid": `btn-descargar-${h}`,
          href: f,
          download: `crycat_pagina-${String(h + 1).padStart(2, "0")}.png`,
          className: "btn-descarga",
          children: [
            /* @__PURE__ */ i.jsx(Wr, { size: 15 }),
            " ",
            s("Descargar página {n}", { n: h + 1 })
          ]
        },
        h
      )) : /* @__PURE__ */ i.jsxs(
        "button",
        {
          "data-testid": "btn-abrir-carpeta",
          onClick: () => a == null ? void 0 : a(n),
          children: [
            /* @__PURE__ */ i.jsx(Wr, { size: 15 }),
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
    /* @__PURE__ */ i.jsx("ol", { className: "lista-pasos", "data-testid": "pasos-cricut", children: v.map((f, h) => /* @__PURE__ */ i.jsx("li", { children: f }, h)) }),
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
function rh({ assets: e, result: t, settings: n, ui: r, setUi: a, saveSettings: o, onRefresh: s, onJob: u, onRecalc: l, editando: p, onFinEdicion: v, onDeshacer: f, onRehacer: h, puedeDeshacer: x, puedeRehacer: _ }) {
  const y = Ye(), $ = Ws(), [m, d] = w.useState(1), [c, g] = w.useState({ x: 0, y: 0 }), [j, S] = w.useState(null), [N, P] = w.useState(1), [C, E] = w.useState(null), [q, se] = w.useState(null), [Y, Z] = w.useState(!1), [je, ne] = w.useState(2), [L, b] = w.useState(0);
  w.useEffect(() => {
    if (!r.verBordes) return;
    const k = window.setInterval(
      () => b((R) => (R + 3) % 12),
      260
    );
    return () => window.clearInterval(k);
  }, [r.verBordes]);
  const [B, F] = w.useState([]), [W, K] = w.useState([]), [gt, be] = w.useState(""), [Ae, he] = w.useState("normal"), [Ke, D] = w.useState(""), [pe, ot] = w.useState(/* @__PURE__ */ new Set()), Xe = w.useRef(null), Je = w.useRef(null), un = $ === "en" ? zm : Em, ir = w.useMemo(
    () => un[Math.floor(Math.random() * un.length)],
    [un]
  ), T = r.saveName.trim() || ir;
  w.useEffect(() => {
    P(Date.now());
  }, [t, n.dpi_salida, n.lienzo, n.color_formato]);
  const O = (t == null ? void 0 : t.pages) ?? 0, ke = !!t && t.efficiency < 0.8;
  w.useEffect(() => {
    const k = Xe.current;
    if (!k) return;
    const R = (M) => {
      M.preventDefault(), M.stopPropagation();
      const V = k.getBoundingClientRect(), H = M.clientX - V.left, ye = M.clientY - V.top;
      d((Me) => {
        const X = M.deltaY < 0 ? 1.05 : 0.9523809523809523, oe = Math.min(12, Math.max(0.05, Me * X)), yt = oe / Me;
        return g((Bt) => ({ x: H - (H - Bt.x) * yt, y: ye - (ye - Bt.y) * yt })), oe;
      });
    };
    return k.addEventListener("wheel", R, { passive: !1 }), () => k.removeEventListener("wheel", R);
  }, []);
  const qe = (k) => {
    if (k.target.closest(".item-box")) return;
    Je.current = { x: k.clientX - c.x, y: k.clientY - c.y };
    const R = (V) => {
      Je.current && g({ x: V.clientX - Je.current.x, y: V.clientY - Je.current.y });
    }, M = () => {
      Je.current = null, window.removeEventListener("mousemove", R), window.removeEventListener("mouseup", M);
    };
    window.addEventListener("mousemove", R), window.addEventListener("mouseup", M);
  };
  w.useEffect(() => {
    const k = (R) => {
      R.target.tagName !== "INPUT" && (R.key === "+" || R.key === "=" ? d((M) => Math.min(12, M * 1.08)) : R.key === "-" || R.key === "_" ? d((M) => Math.max(0.05, M / 1.08)) : R.key === "0" ? sr() : R.key === "Escape" ? S(null) : R.key === "g" ? a((M) => ({ ...M, guidesVisible: !M.guidesVisible })) : R.key === "t" && a((M) => M.eyeFosforito ? { ...M, eyeFosforito: !1, eyeTransparent: !1 } : M.eyeTransparent ? { ...M, eyeTransparent: !1, eyeFosforito: !0 } : { ...M, eyeTransparent: !0, eyeFosforito: !1 }));
    };
    return window.addEventListener("keydown", k), () => window.removeEventListener("keydown", k);
  }, [a]);
  const cn = w.useRef(null), _t = w.useRef(null), qd = (k, R) => {
    k.preventDefault(), k.stopPropagation();
    const M = k.currentTarget.closest(".page-box");
    if (!M || !t) return;
    const V = t.page_mm[0] / M.clientWidth, H = {
      uid: R.uid,
      startX: k.clientX,
      startY: k.clientY,
      origX: R.x,
      origY: R.y,
      mmPerPx: V
    };
    cn.current = H, _t.current = { x: R.x, y: R.y }, E(H), se({ uid: R.uid, x: R.x, y: R.y });
    const ye = (X) => {
      const oe = cn.current;
      if (!oe) return;
      const yt = (X.clientX - oe.startX) * oe.mmPerPx / m, Bt = (X.clientY - oe.startY) * oe.mmPerPx / m;
      _t.current = { x: oe.origX + yt, y: oe.origY + Bt }, se({ uid: oe.uid, x: oe.origX + yt, y: oe.origY + Bt });
    }, Me = (X) => {
      window.removeEventListener("mousemove", ye), window.removeEventListener("mouseup", Me);
      const oe = cn.current;
      if (cn.current = null, !oe) return;
      const yt = (X.clientX - oe.startX) * oe.mmPerPx / m, Bt = (X.clientY - oe.startY) * oe.mmPerPx / m;
      E(null), se(null), !(Math.abs(yt) < 0.5 && Math.abs(Bt) < 0.5) && Ud(oe.uid, oe.origX + yt, oe.origY + Bt);
    };
    window.addEventListener("mousemove", ye), window.addEventListener("mouseup", Me);
  }, Ud = async (k, R, M) => {
    try {
      const V = await A.move(k, R, M);
      V.job ? u(V.job) : await s();
    } catch {
      await s();
    } finally {
      P(Date.now());
    }
  }, Vd = async (k) => {
    const R = await A.unpin(k);
    u(R);
  }, Gd = !1;
  w.useEffect(() => {
    {
      F([]);
      return;
    }
  }, [r.verBordes, t == null ? void 0 : t.placed, t == null ? void 0 : t.minis, N]), w.useEffect(() => {
    if (he("normal"), D(""), !p) {
      K([]), be(""), ot(/* @__PURE__ */ new Set());
      return;
    }
    A.blobs(p.id).then((k) => {
      K(k.blobs), ne(p.offset_mm > 0 ? p.offset_mm : k.union_mm ?? 2), be(k.preview_png), ot(new Set(k.blobs.filter((R) => !R.principal).map((R) => R.id)));
    }).catch(() => {
      K([]), be("");
    });
  }, [p]);
  const Qs = async () => {
    if (p)
      try {
        await A.limpiarContorno(p.id, Array.from(pe));
      } finally {
        await (v == null ? void 0 : v());
      }
  }, Hd = (k) => {
    ot((R) => {
      const M = new Set(R);
      return M.has(k) ? M.delete(k) : M.add(k), M;
    });
  }, [vt, Ot] = w.useState(null), Wd = async () => {
    try {
      const M = await A.export(
        r.saveName || "crycat",
        n.carpeta_export || void 0
      );
      Ot({ files: M.files, folder: M.folder });
    } catch (M) {
      Ot({ files: [], folder: "", error: M.message });
      return;
    }
    if (!!globalThis.__crycatBase) {
      try {
        const V = await (await fetch(
          globalThis.__crycatBase + "api/print.pdf"
        )).blob(), H = URL.createObjectURL(V), ye = document.createElement("a");
        ye.href = H, ye.download = `${r.saveName || "crycat"}-cricut.pdf`, ye.click(), setTimeout(() => URL.revokeObjectURL(H), 4e3);
      } catch (M) {
        Ot({
          files: [],
          folder: "",
          error: M.message
        });
      }
      return;
    }
    const R = document.createElement("iframe");
    R.setAttribute("aria-hidden", "true"), R.style.cssText = "position:fixed;right:0;bottom:0;width:0;height:0;border:0", R.src = "/api/print.pdf", R.onload = () => {
      var M, V;
      try {
        (M = R.contentWindow) == null || M.focus(), (V = R.contentWindow) == null || V.print();
      } finally {
        window.setTimeout(() => R.remove(), 6e4);
      }
    }, document.body.appendChild(R);
  }, Qd = async () => {
    try {
      const k = await A.export(T);
      Ot({ files: k.files, folder: k.folder });
    } catch (k) {
      Ot({ files: [], folder: "", error: k.message });
    }
  }, Yd = () => {
    Z(!0);
  }, Kd = async (k) => {
    try {
      const R = await A.export(T, k);
      Ot({ files: R.files, folder: R.folder });
    } catch (R) {
      Ot({ files: [], folder: "", error: R.message });
    }
  }, Ys = (t == null ? void 0 : t.poly_mm) ?? [], [it, st] = (t == null ? void 0 : t.bbox_offset_mm) ?? [0, 0], [En, zn] = (t == null ? void 0 : t.bbox_mm) ?? [0, 0], lt = n.lienzo === "pagina" ? (t == null ? void 0 : t.page_mm[0]) ?? 0 : En, dn = n.lienzo === "pagina" ? (t == null ? void 0 : t.page_mm[1]) ?? 0 : zn, sr = w.useCallback(() => {
    const k = Xe.current;
    if (!k) return;
    const R = k.querySelector(".page-box");
    if (!R) return;
    const M = k.querySelector(".canvas-inner"), V = k.clientWidth, H = k.clientHeight, ye = (M == null ? void 0 : M.offsetWidth) || R.offsetWidth || 1, Me = (M == null ? void 0 : M.offsetHeight) || R.offsetHeight || 1, X = Math.min(1, V / ye, H / Me);
    d(X), g({ x: (V - ye * X) / 2, y: (H - Me * X) / 2 });
  }, []);
  w.useEffect(() => {
    if (O <= 0) return;
    const k = window.setTimeout(sr, 60);
    return () => window.clearTimeout(k);
  }, [
    O,
    lt,
    dn,
    r.viewMode,
    r.hojaGirada,
    j,
    n.lienzo,
    n.pagina_w,
    n.pagina_h,
    sr
  ]);
  const Nt = n.lienzo === "pagina" ? 0 : it, Et = n.lienzo === "pagina" ? 0 : st, Ks = Ys.length ? "M" + Ys.map(([k, R]) => `${k - Nt},${R - Et}`).join(" L") + " Z" : "", Xs = w.useRef(0);
  w.useEffect(() => {
    if (!t) return;
    const k = t.pages || 0;
    k > 0 && k !== Xs.current && (Xs.current = k, a((R) => ({ ...R, viewMode: k <= 1 ? 1 : k === 2 ? 2 : 4 })), S(null));
  }, [t == null ? void 0 : t.pages, t == null ? void 0 : t.placed, t == null ? void 0 : t.minis]);
  const ea = r.contornoModo ?? "final", Pn = r.verBordes && ea !== "ninguno", ko = `${N}-${n.marcas_delimitar ? 1 : 0}-${n.lienzo}-${n.color_formato}-${n.dpi_salida}`;
  w.useEffect(() => {
    if (!Pn || !t) return;
    const k = [], R = Math.max(1, t.pages);
    for (let V = 0; V < R; V++)
      for (const H of [0, 3, 6, 9])
        k.push(A.pageUrl(
          V,
          ko,
          n.simular_impresion === !0,
          !0,
          H,
          ea
        ));
    const M = k.map((V) => {
      const H = new Image();
      return H.src = V, H;
    });
    return () => M.forEach((V) => {
      V.src = "";
    });
  }, [Pn, ko, t, ea, n.simular_impresion]);
  const Ft = r.hojaGirada === !0, So = Ft ? {
    position: "absolute",
    left: "50%",
    top: "50%",
    width: `${lt / (dn || 1) * 100}%`,
    height: `${dn / (lt || 1) * 100}%`,
    transform: "translate(-50%, -50%) rotate(270deg)"
  } : void 0, Xd = (k) => {
    const R = (t == null ? void 0 : t.placements.filter((M) => M.page === k)) ?? [];
    return /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: `page-box ${r.eyeFosforito ? "fondo-fosforito" : r.eyeTransparent ? "alpha-bg" : "white-bg"}${Ft ? " girada" : ""}`,
        style: Ft ? {
          width: "100%",
          aspectRatio: `${dn} / ${lt}`
        } : { width: "100%" },
        onClick: (M) => {
          O > 1 && j === null && !M.target.closest(".item-box") && S(k);
        },
        "data-testid": `page-${k}`,
        children: [
          /* @__PURE__ */ i.jsx(
            "img",
            {
              className: `sheet${Ft ? " girada" : ""}`,
              style: So,
              onLoad: k === 0 ? sr : void 0,
              src: A.pageUrl(k, ko, n.simular_impresion === !0, Pn, L, ea),
              alt: y("Página {i}", { i: k + 1 }),
              draggable: !1
            }
          ),
          r.guidesVisible && Ks && /* @__PURE__ */ i.jsxs(
            "svg",
            {
              className: `overlay-svg${Ft ? " girada" : ""}`,
              style: So,
              viewBox: `0 0 ${lt} ${dn}`,
              preserveAspectRatio: "none",
              children: [
                /* @__PURE__ */ i.jsxs(
                  "g",
                  {
                    stroke: "var(--guide)",
                    strokeWidth: Math.max(0.15, lt / 1400),
                    opacity: 0.28,
                    children: [
                      Array.from(
                        { length: Math.floor((it - Nt + En) / 10) + 1 },
                        (M, V) => {
                          const H = V * 10 - (Nt - it);
                          return H >= it - Nt - 0.01 && H <= it - Nt + En + 0.01 ? /* @__PURE__ */ i.jsx(
                            "line",
                            {
                              x1: H,
                              y1: st - Et,
                              x2: H,
                              y2: st - Et + zn
                            },
                            `v${V}`
                          ) : null;
                        }
                      ),
                      Array.from(
                        { length: Math.floor((st - Et + zn) / 10) + 1 },
                        (M, V) => {
                          const H = V * 10 - (Et - st);
                          return H >= st - Et - 0.01 && H <= st - Et + zn + 0.01 ? /* @__PURE__ */ i.jsx(
                            "line",
                            {
                              x1: it - Nt,
                              y1: H,
                              x2: it - Nt + En,
                              y2: H
                            },
                            `h${V}`
                          ) : null;
                        }
                      )
                    ]
                  }
                ),
                (t == null ? void 0 : t.marcas) && /* @__PURE__ */ i.jsx("g", { children: [
                  ["esquina_flecha", it, st, !1, !1],
                  ["esquina_sd", it + En, st, !0, !1],
                  ["esquina_ii", it, st + zn, !1, !0],
                  ["esquina_id", it + En, st + zn, !0, !0]
                ].map(([M, V, H, ye, Me]) => {
                  const X = t.marcas[M];
                  if (!X) return null;
                  const oe = V - Nt - (ye ? X[0] : 0), yt = H - Et - (Me ? X[1] : 0);
                  return /* @__PURE__ */ i.jsx(
                    "image",
                    {
                      href: kt(`/marcas/${M}.png`),
                      x: oe,
                      y: yt,
                      width: X[0],
                      height: X[1],
                      preserveAspectRatio: "none"
                    },
                    M
                  );
                }) }),
                /* @__PURE__ */ i.jsx(
                  "path",
                  {
                    d: Ks,
                    fill: "none",
                    stroke: "var(--guide)",
                    strokeWidth: Math.max(0.6, lt / 250),
                    strokeDasharray: `${lt / 55} ${lt / 85}`,
                    opacity: 0.85
                  }
                ),
                Gd
              ]
            }
          ),
          /* @__PURE__ */ i.jsx(
            "div",
            {
              className: `capa-piezas${Ft ? " girada" : ""}`,
              style: So,
              children: R.map((M) => {
                const V = e.find((X) => X.id === M.asset_id), H = (q == null ? void 0 : q.uid) === M.uid ? q : null, ye = ((H ? H.x : M.x) - Nt) / (lt || 1) * 100, Me = ((H ? H.y : M.y) - Et) / (dn || 1) * 100;
                return /* @__PURE__ */ i.jsx(
                  "div",
                  {
                    className: `item-box ${M.pinned ? "pinned" : ""} ${(C == null ? void 0 : C.uid) === M.uid ? "dragging" : ""}`,
                    style: {
                      left: `${ye}%`,
                      top: `${Me}%`,
                      width: `${M.w / (lt || 1) * 100}%`,
                      height: `${M.h / (dn || 1) * 100}%`
                    },
                    title: (V == null ? void 0 : V.name) ?? "",
                    onMouseDown: (X) => qd(X, M),
                    onContextMenu: (X) => {
                      X.preventDefault(), Vd(M.uid);
                    },
                    "data-testid": `item-${M.uid}`,
                    onClick: (X) => {
                      X.stopPropagation(), X.currentTarget.scrollIntoView({
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
            }
          )
        ]
      },
      k
    );
  }, Jd = j !== null ? [j] : Array.from({ length: O }, (k, R) => R);
  return /* @__PURE__ */ i.jsxs("div", { className: "viewer", "data-testid": "viewer", children: [
    O > 1 && /* @__PURE__ */ i.jsx("div", { className: "aviso-paginas-flotante", "data-testid": "aviso-paginas", children: y("No cabe en una página: {n} páginas", { n: O }) }),
    /* @__PURE__ */ i.jsxs("div", { className: "viewer-top", children: [
      /* @__PURE__ */ i.jsxs(
        "button",
        {
          "data-testid": "btn-bordes",
          className: `btn-contorno ${Pn ? "modo-final" : "modo-ninguno"}`,
          "data-tip": y(Pn ? "Quitar el contorno (solo vista previa)" : "Ver el contorno de corte: la línea más exterior, lo que se corta de verdad"),
          onClick: () => {
            const k = !Pn;
            a((R) => ({
              ...R,
              contornoModo: k ? "final" : "ninguno",
              verBordes: k
            })), o({
              contorno_modo: k ? "final" : "ninguno",
              ver_contornos: k
            });
          },
          children: [
            /* @__PURE__ */ i.jsx(jo, { size: 16 }),
            " ",
            y("Contorno")
          ]
        }
      ),
      /* @__PURE__ */ i.jsxs(
        "button",
        {
          "data-testid": "btn-guias",
          className: r.guidesVisible ? "primary" : "",
          "data-tip": y("Marcas de registro y guías del área recortable (tecla G): solo en la vista previa"),
          onClick: () => a((k) => ({ ...k, guidesVisible: !k.guidesVisible })),
          children: [
            /* @__PURE__ */ i.jsx(Rd, { size: 16 }),
            " ",
            y("Marcas")
          ]
        }
      ),
      /* @__PURE__ */ i.jsxs(
        "button",
        {
          "data-testid": "btn-ojo",
          "data-tip": y("Qué se ve detrás: blanco, transparente o verde fosforito (tecla T)"),
          onClick: () => a((k) => k.eyeFosforito ? { ...k, eyeFosforito: !1, eyeTransparent: !1 } : k.eyeTransparent ? { ...k, eyeTransparent: !1, eyeFosforito: !0 } : { ...k, eyeTransparent: !0, eyeFosforito: !1 }),
          children: [
            r.eyeFosforito ? /* @__PURE__ */ i.jsx($m, { size: 16 }) : r.eyeTransparent ? /* @__PURE__ */ i.jsx(uu, { size: 16 }) : /* @__PURE__ */ i.jsx(uu, { size: 16 }),
            r.eyeFosforito ? y("Fosforito") : r.eyeTransparent ? y("Transparente") : y("Blanco")
          ]
        }
      ),
      (O > 1 && j === null || j !== null) && /* @__PURE__ */ i.jsxs("div", { className: "group", children: [
        O > 1 && j === null && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
          /* @__PURE__ */ i.jsx("button", { "data-testid": "view-1", className: r.viewMode === 1 ? "primary" : "", onClick: () => a((k) => ({ ...k, viewMode: 1 })), children: "1" }),
          /* @__PURE__ */ i.jsx("button", { "data-testid": "view-2", className: r.viewMode === 2 ? "primary" : "", onClick: () => a((k) => ({ ...k, viewMode: 2 })), children: "2" }),
          /* @__PURE__ */ i.jsx("button", { "data-testid": "view-4", className: r.viewMode === 4 ? "primary" : "", onClick: () => a((k) => ({ ...k, viewMode: 4 })), children: "4" })
        ] }),
        j !== null && /* @__PURE__ */ i.jsx("button", { onClick: () => S(null), title: y("Volver a la cuadrícula (Esc)"), children: y(" Ver todo") })
      ] }),
      /* @__PURE__ */ i.jsxs(
        "button",
        {
          "data-testid": "btn-disposicion",
          className: Ft ? "primary" : "",
          "data-tip": y("Cambiar la disposición: menús anchos o hoja más grande"),
          onClick: () => {
            const k = !window.__crycatAncho;
            window.__crycatAncho = k, window.dispatchEvent(new CustomEvent(
              "crycat:disposicion",
              { detail: k }
            ));
          },
          children: [
            /* @__PURE__ */ i.jsx(Om, { size: 16 }),
            y(Ft ? "Vertical" : "Horizontal")
          ]
        }
      )
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "viewer-flotantes", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "vf-izq", children: [
        /* @__PURE__ */ i.jsx(
          "button",
          {
            "data-testid": "btn-deshacer",
            "data-tip": y("Deshacer (Ctrl+Z)"),
            onClick: () => f(),
            disabled: !x,
            children: /* @__PURE__ */ i.jsx(Ld, { size: 16 })
          }
        ),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            "data-testid": "btn-rehacer",
            "data-tip": y("Rehacer (Ctrl+Y / Ctrl+Shift+Z)"),
            onClick: () => h(),
            disabled: !_,
            children: /* @__PURE__ */ i.jsx(Bm, { size: 16 })
          }
        )
      ] }),
      /* @__PURE__ */ i.jsx("div", { className: "vf-centro", children: /* @__PURE__ */ i.jsxs(
        "button",
        {
          className: "btn-optimizar-flotante",
          "data-testid": "btn-recalcular",
          "data-tip": y("Optimizar: vuelve a colocar todo (ignora los fijados)"),
          onClick: () => l(ke ? "rapido" : "optimo"),
          children: [
            /* @__PURE__ */ i.jsx("span", { className: "estrella", children: "✦" }),
            y("Optimizar"),
            /* @__PURE__ */ i.jsx("span", { className: "estrella", children: "✦" })
          ]
        }
      ) }),
      /* @__PURE__ */ i.jsxs("div", { className: "vf-der", children: [
        /* @__PURE__ */ i.jsx(
          "button",
          {
            "data-tip": y("Acercar (+)"),
            onClick: () => d((k) => Math.min(12, k * 1.08)),
            children: /* @__PURE__ */ i.jsx(qm, { size: 15 })
          }
        ),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            "data-testid": "zoom-reset",
            "data-tip": y("Ajustar la hoja entera a la ventana (tecla 0)"),
            onClick: sr,
            children: /* @__PURE__ */ i.jsx(Fm, { size: 15 })
          }
        ),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            "data-tip": y("Alejar (−)"),
            onClick: () => d((k) => Math.max(0.05, k / 1.08)),
            children: /* @__PURE__ */ i.jsx(Um, { size: 15 })
          }
        ),
        /* @__PURE__ */ i.jsxs("span", { className: "zoom-nivel", "data-testid": "zoom-nivel", children: [
          Math.round(m * 100),
          "%"
        ] })
      ] })
    ] }),
    p ? /* @__PURE__ */ i.jsxs("div", { className: "editor-blobs", "data-testid": "editor-blobs", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "editor-lienzo", children: [
        /* @__PURE__ */ i.jsx(
          "img",
          {
            src: Ke || gt || A.previewUrlSinBordes(
              p.id,
              p.rev ?? 0
            ),
            alt: p.name,
            draggable: !1
          }
        ),
        /* @__PURE__ */ i.jsx("div", { className: "editor-overlay", children: p && W.filter((k) => !k.principal).map((k, R) => {
          const [M, V, H, ye] = k.bbox, Me = p.w_px || 1, X = p.h_px || 1;
          return /* @__PURE__ */ i.jsx(
            "button",
            {
              className: `blob${pe.has(k.id) ? " sel" : ""}`,
              "data-testid": `blob-${R}`,
              title: y("Trozo de {px} px — clic para {accion}", {
                px: k.area_px,
                accion: pe.has(k.id) ? y("conservar") : y("quitar")
              }),
              style: {
                left: `${M / Me * 100}%`,
                top: `${V / X * 100}%`,
                width: `${(H - M) / Me * 100}%`,
                height: `${(ye - V) / X * 100}%`
              },
              onClick: () => Hd(k.id)
            },
            k.id
          );
        }) })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "editor-pie", children: [
        /* @__PURE__ */ i.jsxs("div", { className: "row", style: { gap: 8, flexWrap: "wrap" }, children: [
          /* @__PURE__ */ i.jsxs("span", { className: "row", style: { gap: 6, alignItems: "center" }, children: [
            /* @__PURE__ */ i.jsx("span", { className: "hint", children: y("Borde para unir") }),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                className: "quota-btn",
                "data-testid": "union-menos",
                onClick: () => ne((k) => Math.max(0.5, Math.round((k - 0.5) * 2) / 2)),
                children: "−"
              }
            ),
            /* @__PURE__ */ i.jsxs("span", { className: "quota-val", "data-testid": "union-mm", children: [
              je,
              " mm"
            ] }),
            /* @__PURE__ */ i.jsx(
              "button",
              {
                className: "quota-btn",
                "data-testid": "union-mas",
                onClick: () => ne((k) => Math.min(20, Math.round((k + 0.5) * 2) / 2)),
                children: "+"
              }
            )
          ] }),
          /* @__PURE__ */ i.jsx(
            "button",
            {
              "data-testid": "btn-ver-quitados",
              title: y("Ver cómo queda SIN los trozos marcados (solo vista previa)"),
              className: Ae === "quitar" ? "primary" : "",
              onClick: async () => {
                if (p) {
                  if (Ae === "quitar") {
                    he("normal"), D("");
                    return;
                  }
                  try {
                    const k = await A.contornoPreview(
                      p.id,
                      { quitar: Array.from(pe) }
                    );
                    D(k.png), he("quitar");
                  } catch {
                  }
                }
              },
              children: y("Ver sin marcados")
            }
          ),
          /* @__PURE__ */ i.jsx(
            "button",
            {
              "data-testid": "btn-ver-unido",
              title: y("Ver cómo queda al UNIR todo con el borde actual (solo vista previa)"),
              className: Ae === "unir" ? "primary" : "",
              onClick: async () => {
                if (p) {
                  if (Ae === "unir") {
                    he("normal"), D("");
                    return;
                  }
                  try {
                    const k = await A.contornoPreview(
                      p.id,
                      { unir: je }
                    );
                    D(k.png), he("unir");
                  } catch {
                  }
                }
              },
              children: y("Ver unido")
            }
          ),
          /* @__PURE__ */ i.jsx(
            "button",
            {
              className: "primary",
              "data-testid": "btn-unir-contorno",
              title: y("Une todos los trozos en una sola forma con un borde de {mm} mm (curvo)", { mm: je }),
              onClick: async () => {
                p && (await A.patchAsset(p.id, {
                  offset_mm: je,
                  offset_modo: "unir_curvo"
                }), await (v == null ? void 0 : v()));
              },
              children: y("Unir todo en una pieza")
            }
          ),
          /* @__PURE__ */ i.jsx(
            "button",
            {
              "data-testid": "btn-quitar-marcados",
              onClick: Qs,
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
        ref: Xe,
        className: `canvas ${C ? "panning" : ""}`,
        "data-testid": "canvas",
        onMouseDown: qe,
        children: /* @__PURE__ */ i.jsxs(
          "div",
          {
            className: "canvas-inner",
            style: { transform: `translate(${c.x}px, ${c.y}px) scale(${m})` },
            children: [
              O === 0 && /* @__PURE__ */ i.jsx("div", { className: "hint", style: { margin: "30px auto" }, children: y("Añade imágenes y se colocarán aquí de forma óptima, respetando el área recortable de Cricut.") }),
              /* @__PURE__ */ i.jsx(
                "div",
                {
                  className: "pages-grid",
                  style: {
                    width: "100%",
                    display: "grid",
                    gridTemplateColumns: `repeat(${j !== null ? 1 : r.viewMode}, 1fr)`,
                    gap: 18
                  },
                  children: Jd.map(Xd)
                }
              )
            ]
          }
        )
      }
    ),
    p ? /* @__PURE__ */ i.jsx("div", { className: "viewer-bottom", children: /* @__PURE__ */ i.jsxs("div", { className: "btn-row", children: [
      /* @__PURE__ */ i.jsx(
        "button",
        {
          className: "primary",
          "data-testid": "btn-guardar-contorno",
          onClick: Qs,
          children: y("Guardar limpieza")
        }
      ),
      /* @__PURE__ */ i.jsx(
        "button",
        {
          "data-testid": "btn-descartar-contorno",
          onClick: () => v == null ? void 0 : v(),
          children: y("Descartar")
        }
      )
    ] }) }) : /* @__PURE__ */ i.jsxs("div", { className: "viewer-bottom", children: [
      /* @__PURE__ */ i.jsx(
        "input",
        {
          type: "text",
          "data-testid": "save-name",
          placeholder: ir,
          value: r.saveName,
          onChange: (k) => a((R) => ({ ...R, saveName: k.target.value }))
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
            onClick: () => A.abrirCarpeta(n.carpeta_export || void 0).catch(() => {
            }),
            children: /* @__PURE__ */ i.jsx(Wr, { size: 16 })
          }
        ),
        /* @__PURE__ */ i.jsx("button", { "data-testid": "btn-guardar", onClick: Qd, children: y("Guardar") }),
        /* @__PURE__ */ i.jsx("button", { "data-testid": "btn-guardar-como", onClick: Yd, children: y("Guardar como…") }),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            "data-testid": "btn-imprimir",
            onClick: Wd,
            disabled: O === 0,
            children: y("Imprimir")
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ i.jsx(
      $d,
      {
        open: Y,
        initial: n.carpeta_export,
        onClose: () => Z(!1),
        onPick: Kd
      }
    ),
    /* @__PURE__ */ i.jsx(
      nh,
      {
        open: !!vt,
        files: (vt == null ? void 0 : vt.files) ?? [],
        folder: (vt == null ? void 0 : vt.folder) ?? "",
        error: vt == null ? void 0 : vt.error,
        onOpenFolder: (k) => void A.fsOpen(k).catch(() => {
        }),
        onClose: () => Ot(null)
      }
    )
  ] });
}
function ah({ settings: e, saveSettings: t }) {
  const n = Ye(), r = e.usar_minis, a = e.modo === "experto", o = {
    90: "libre",
    libre: "no",
    no: "90"
  }, s = {
    90: "90°",
    libre: n("libre"),
    no: n("fijo")
  };
  return /* @__PURE__ */ i.jsx("div", { className: "acciones-panel", children: /* @__PURE__ */ i.jsxs("div", { className: "acciones-rapidas", children: [
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
          /* @__PURE__ */ i.jsx(Qr, { size: 16 }),
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
          /* @__PURE__ */ i.jsx(no, { size: 16 }),
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
          /* @__PURE__ */ i.jsx(Td, { size: 16 }),
          " ",
          s[e.rotacion] ?? "90°"
        ]
      }
    )
  ] }) });
}
const Ko = [
  {
    clave: "silueta",
    nombre: "Silueta",
    desc: "Forma real, cualquier ángulo",
    Icono: Xm,
    forma: "siluetas"
  },
  {
    clave: "rectangulos",
    nombre: "Rectángulos",
    desc: "Por cajas, giros de 90° · ¡rápido!",
    Icono: Jm,
    forma: "rectangulos"
  }
];
function oh({ settings: e, saveSettings: t }) {
  var v;
  const n = Ye(), [r, a] = w.useState(
    {}
  ), [o, s] = w.useState("");
  w.useEffect(() => {
    A.modos().then((f) => a(f.modos ?? {})).catch(() => {
    });
  }, []);
  const u = e.modo_forma ?? "siluetas", l = ((v = Ko.find((f) => f.forma === u)) == null ? void 0 : v.clave) ?? "silueta", p = async (f) => {
    var x;
    const h = r[f];
    h && (await t(h), s(n("Modo «{n}» aplicado", {
      n: n(((x = Ko.find((_) => _.clave === f)) == null ? void 0 : x.nombre) ?? f)
    })));
  };
  return /* @__PURE__ */ i.jsxs("div", { className: "modos", "data-testid": "modos", children: [
    /* @__PURE__ */ i.jsx(
      "div",
      {
        className: "modos-seg",
        role: "tablist",
        title: n("Modo de empaquetado: elige UNO"),
        children: Ko.map((f) => /* @__PURE__ */ i.jsxs(
          "button",
          {
            type: "button",
            role: "tab",
            "aria-selected": l === f.clave,
            "data-testid": `modo-${f.clave}`,
            className: `modo-btn${l === f.clave ? " on" : ""}`,
            title: n("Modo {n}: {d}", { n: n(f.nombre), d: n(f.desc) }),
            onClick: () => p(f.clave),
            children: [
              /* @__PURE__ */ i.jsx(f.Icono, { size: 24 }),
              /* @__PURE__ */ i.jsxs("span", { className: "modo-txt", children: [
                /* @__PURE__ */ i.jsx("b", { children: n(f.nombre) }),
                /* @__PURE__ */ i.jsx("i", { children: n(f.desc) })
              ] }),
              l === f.clave && /* @__PURE__ */ i.jsx("span", { className: "modo-check", children: "✓" })
            ]
          },
          f.clave
        ))
      }
    ),
    o && /* @__PURE__ */ i.jsx("div", { className: "hint", "data-testid": "modos-aviso", children: o })
  ] });
}
function ih({ i: e, valor: t, refBase: n, onValor: r, onQuitar: a, t: o, modo: s = "mm" }) {
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
        onChange: (p) => {
          const v = Number(p.target.value);
          Number.isFinite(v) && v > 0 && r(v);
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
function zt({ id: e, title: t, open: n, toggle: r, children: a, icon: o }) {
  return /* @__PURE__ */ i.jsxs("div", { className: `sect ${n ? "open" : ""}`, "data-testid": `sect-${e}`, children: [
    /* @__PURE__ */ i.jsxs("div", { className: "sect-head", onClick: () => r(e), children: [
      o && /* @__PURE__ */ i.jsx("span", { className: "sect-icono", children: o }),
      /* @__PURE__ */ i.jsx("span", { children: t }),
      /* @__PURE__ */ i.jsx("span", { className: "arrow", children: "▼" })
    ] }),
    n && /* @__PURE__ */ i.jsx("div", { className: "sect-body", children: a })
  ] });
}
function du(e, t) {
  return e.split(new RegExp(`(${t.join("|")})`)).map((n, r) => t.includes(n) ? /* @__PURE__ */ i.jsx("strong", { children: n }, r) : n);
}
const sh = {
  auto: 6,
  rapido: 3,
  greedy: 6,
  largest: 3,
  voronoi: 6,
  genetic: 25
}, lh = {
  auto: "Automático",
  rapido: "Silueta rápida",
  greedy: "Greedy / Bottom-Left",
  largest: "Largest First",
  voronoi: "Voronoi",
  genetic: "Genético"
};
function uh({
  settings: e,
  saveSettings: t,
  assets: n
}) {
  const r = Ye(), [a, o] = w.useState(!0), [s, u] = w.useState({
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
  }), [l, p] = w.useState(!1), v = w.useMemo(() => {
    const g = (n ?? []).filter((S) => S.mini_enabled);
    return (g.length ? g : n ?? []).slice().sort((S, N) => Math.min(N.w_mm, N.h_mm) - Math.min(S.w_mm, S.h_mm))[0] ?? null;
  }, [n]), f = v ? Math.min(v.w_mm, v.h_mm) : 0, h = e.modo === "experto", x = ({ children: g }) => h ? /* @__PURE__ */ i.jsx(i.Fragment, { children: g }) : null, _ = (g) => u((j) => ({ ...j, [g]: !j[g] })), y = (g) => t(g), $ = w.useRef(null), m = ({ titulo: g, children: j }) => /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx("div", { className: "ctl-grupo", children: r(g) }),
    j
  ] }), d = (g, j, S, N, P = 1, C = "", E, q) => /* @__PURE__ */ i.jsxs("div", { className: "ctl", children: [
    /* @__PURE__ */ i.jsx("label", { ...q ? { "data-tip": r(q) } : {}, children: r(g) }),
    /* @__PURE__ */ i.jsxs("div", { className: "row", children: [
      /* @__PURE__ */ i.jsx(
        "input",
        {
          type: "number",
          min: S,
          max: N,
          step: P,
          "data-testid": `set-${j}`,
          value: String(e[j]),
          onChange: (se) => {
            const Y = Number(se.target.value);
            Number.isNaN(Y) || y({ [j]: Y });
          }
        }
      ),
      C && /* @__PURE__ */ i.jsx("span", { className: "hint", children: C }),
      E
    ] })
  ] }), c = (g, j, S, N, P) => /* @__PURE__ */ i.jsxs("div", { className: "ctl", children: [
    /* @__PURE__ */ i.jsx("label", { ...P ? { "data-tip": r(P) } : {}, children: r(g) }),
    /* @__PURE__ */ i.jsx(
      "select",
      {
        "data-testid": `set-${j}`,
        value: String(e[j]),
        onChange: (C) => y({ [j]: C.target.value }),
        children: S.map(([C, E]) => /* @__PURE__ */ i.jsx("option", { value: C, children: r(E) }, C))
      }
    )
  ] });
  return /* @__PURE__ */ i.jsxs("div", { className: "file-panel settings-panel", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "file-head", children: [
      /* @__PURE__ */ i.jsx("h2", { children: r("Ajustes") }),
      /* @__PURE__ */ i.jsx("span", { className: "count-badge", children: e.tema })
    ] }),
    /* @__PURE__ */ i.jsx(oh, { settings: e, saveSettings: t }),
    /* @__PURE__ */ i.jsx(ah, { settings: e, saveSettings: t }),
    /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      !h && /* @__PURE__ */ i.jsx("div", { className: "hint", "data-testid": "modo-rapido-aviso", children: r("Modo básico: solo lo esencial. Cambia a Modo experto para verlo todo.") }),
      /* @__PURE__ */ i.jsxs(
        zt,
        {
          id: "general",
          title: r("General"),
          open: s.general,
          toggle: _,
          icon: /* @__PURE__ */ i.jsx(ba, { size: 15 }),
          children: [
            /* @__PURE__ */ i.jsxs(m, { titulo: "Colocación", children: [
              /* @__PURE__ */ i.jsxs("div", { className: "ctl-fila", children: [
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
              c("Rotación admitida", "rotacion", [
                ["no", "No girar"],
                ["90", "Giros de 0º / 90º / 180º / 270º"],
                ["libre", "Cualquier ángulo"]
              ])
            ] }),
            /* @__PURE__ */ i.jsxs(m, { titulo: "Hoja y máquina", children: [
              /* @__PURE__ */ i.jsx(x, { children: d("Resolución de salida", "dpi_salida", 72, 1200, 1, "ppp") }),
              /* @__PURE__ */ i.jsxs("div", { className: "ctl", children: [
                /* @__PURE__ */ i.jsx("label", { children: r("Tamaño de salida (vertical)") }),
                /* @__PURE__ */ i.jsxs(
                  "select",
                  {
                    "data-testid": "set-pagina",
                    value: e.pagina,
                    onChange: (g) => {
                      const j = g.target.value, S = Nm[j];
                      y(S ? { pagina: j, pagina_w: S[0], pagina_h: S[1] } : { pagina: j });
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
              /* @__PURE__ */ i.jsx(x, { children: e.pagina === "custom" && /* @__PURE__ */ i.jsxs("div", { className: "ctl", children: [
                /* @__PURE__ */ i.jsx("label", { children: r("Ancho × alto (mm)") }),
                /* @__PURE__ */ i.jsxs("div", { className: "row", children: [
                  /* @__PURE__ */ i.jsx(
                    "input",
                    {
                      type: "number",
                      "data-testid": "set-pagina-w",
                      value: String(e.pagina_w),
                      onChange: (g) => y({ pagina_w: Number(g.target.value) })
                    }
                  ),
                  /* @__PURE__ */ i.jsx(
                    "input",
                    {
                      type: "number",
                      "data-testid": "set-pagina-h",
                      value: String(e.pagina_h),
                      onChange: (g) => y({ pagina_h: Number(g.target.value) })
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
            ] }),
            /* @__PURE__ */ i.jsx(m, { titulo: "Referencia", children: /* @__PURE__ */ i.jsxs("div", { className: "ctl", children: [
              /* @__PURE__ */ i.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    type: "checkbox",
                    "data-testid": "set-marcas-delimitar",
                    checked: e.marcas_delimitar === !0,
                    onChange: (g) => y({ marcas_delimitar: g.target.checked })
                  }
                ),
                r("Marcas para delimitar")
              ] }),
              /* @__PURE__ */ i.jsx("div", { className: "hint", children: r("Añade dos cuadrados blancos de 2 mm (arriba-izquierda y abajo-derecha) en los límites del área. Sirven de referencia para que la colocación quede EXACTA siempre en Cricut Design Space. No cuentan para la optimización.") })
            ] }) })
          ]
        }
      ),
      /* @__PURE__ */ i.jsxs(
        zt,
        {
          id: "minis",
          title: r("Minis"),
          open: s.minis,
          toggle: _,
          icon: /* @__PURE__ */ i.jsx(Qr, { size: 15 }),
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
              !e.mini_usar_lista && d(
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
            /* @__PURE__ */ i.jsxs(m, { titulo: "Comportamiento", children: [
              /* @__PURE__ */ i.jsxs(x, { children: [
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
                ], void 0, "Qué hacer con el borde de cada mini al reducirlo")
              ] }),
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
                (e.mini_lista_modo ?? "mm") === "mm" && /* @__PURE__ */ i.jsxs("div", { className: "ctl", children: [
                  /* @__PURE__ */ i.jsx("label", { children: r("Medir el tamaño por") }),
                  /* @__PURE__ */ i.jsxs(
                    "select",
                    {
                      "data-testid": "mini-lista-medida",
                      value: e.mini_lista_medida ?? "circulo",
                      onChange: (g) => y({ mini_lista_medida: g.target.value }),
                      children: [
                        /* @__PURE__ */ i.jsx("option", { value: "circulo", children: r("Círculo equivalente (aprox.)") }),
                        /* @__PURE__ */ i.jsx("option", { value: "menor", children: r("Lado menor") }),
                        /* @__PURE__ */ i.jsx("option", { value: "mayor", children: r("Lado mayor") })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ i.jsxs("div", { className: "size-list", "data-testid": "mini-lista", children: [
                  (e.mini_tamanos_lista ?? []).map((g, j) => /* @__PURE__ */ i.jsx(
                    ih,
                    {
                      i: j,
                      valor: g,
                      refBase: f,
                      t: r,
                      modo: e.mini_lista_modo ?? "mm",
                      onValor: (S) => {
                        const N = [...e.mini_tamanos_lista ?? []];
                        N[j] = S, y({ mini_tamanos_lista: N });
                      },
                      onQuitar: () => y({
                        mini_tamanos_lista: (e.mini_tamanos_lista ?? []).filter(
                          (S, N) => N !== j
                        )
                      })
                    },
                    j
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
                /* @__PURE__ */ i.jsx("div", { className: "hint", children: v ? r(
                  "El tamaño en mm es para «{nombre}» (su lado menor mide {mm} mm); cada mini se escala igual respecto a su original.",
                  { nombre: v.name, mm: f.toFixed(1) }
                ) : r("El tamaño en mm se calcula por imagen; añade imágenes para verlo. Cada valor es el tamaño del mini respecto a su original.") })
              ] })
            ] })
          ]
        }
      ),
      h && /* @__PURE__ */ i.jsxs(
        zt,
        {
          id: "optimizacion",
          title: r("Optimización"),
          open: s.optimizacion,
          toggle: _,
          icon: /* @__PURE__ */ i.jsx(no, { size: 15 }),
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
            /* @__PURE__ */ i.jsxs(x, { children: [
              /* @__PURE__ */ i.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    type: "checkbox",
                    "data-testid": "set-opt_tiempo_auto",
                    checked: e.opt_tiempo_auto !== !1,
                    onChange: (g) => y({ opt_tiempo_auto: g.target.checked })
                  }
                ),
                r("Tiempo automático (el recomendado para cada método)")
              ] }),
              e.opt_tiempo_auto !== !1 ? /* @__PURE__ */ i.jsx("div", { className: "hint", "data-testid": "tiempo-recomendado", children: r(
                "Base de {s} s con «{m}» que CRECE con cada pieza (más piezas, más tiempo para buscar el mejor encaje; tope 3 min).",
                {
                  s: sh[e.opt_metodo] ?? 8,
                  m: r(lh[e.opt_metodo] ?? e.opt_metodo)
                }
              ) }) : d("Tiempo máximo", "opt_tiempo_max_s", 0.5, 120, 0.5, "s")
            ] }),
            /* @__PURE__ */ i.jsx("div", { className: "hint", children: r("La eficiencia del último cálculo se muestra en la barra de estado.") })
          ]
        }
      ),
      h && /* @__PURE__ */ i.jsxs(
        zt,
        {
          id: "imagen",
          title: r("Imagen"),
          open: s.imagen,
          toggle: _,
          icon: /* @__PURE__ */ i.jsx(ro, { size: 15 }),
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
              /* @__PURE__ */ i.jsxs(x, { children: [
                /* @__PURE__ */ i.jsxs("label", { className: "row", children: [
                  /* @__PURE__ */ i.jsx(
                    "input",
                    {
                      type: "checkbox",
                      "data-testid": "set-simular_impresion",
                      checked: e.simular_impresion === !0,
                      onChange: (g) => y({ simular_impresion: g.target.checked })
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
                        onChange: (g) => y({ sim_cmyk: g.target.checked })
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
                    onChange: (g) => y({ chequear_lineas: g.target.checked })
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
                      onClick: () => p(!0),
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
      /* @__PURE__ */ i.jsxs(
        zt,
        {
          id: "offset",
          title: r("Borde"),
          open: s.offset,
          toggle: _,
          icon: /* @__PURE__ */ i.jsx(jo, { size: 15 }),
          children: [
            /* @__PURE__ */ i.jsx("div", { className: "ctl", children: /* @__PURE__ */ i.jsxs("label", { className: "row", children: [
              /* @__PURE__ */ i.jsx(
                "input",
                {
                  type: "checkbox",
                  "data-testid": "set-offset-activo",
                  checked: e.offset_activo === !0,
                  onChange: (g) => y({ offset_activo: g.target.checked })
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
                ["unir_recto", "Unir trozos: envolvente (borde recto)"],
                ["unir_curvo", "Unir trozos: mínimo (borde redondeado)"]
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
                      onChange: (g) => y({ offset_color: g.target.value })
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
      h && /* @__PURE__ */ i.jsxs(
        zt,
        {
          id: "corte",
          title: r("Estimación de corte"),
          open: s.corte,
          toggle: _,
          icon: /* @__PURE__ */ i.jsx(Dm, { size: 15 }),
          children: [
            /* @__PURE__ */ i.jsx("div", { className: "hint", children: du(
              r(
                "Tiempo estimado de corte de la {maquina}, calculado a partir del perímetro de las siluetas y del recorrido entre formas.",
                { maquina: su[e.maquina] ?? "Cricut Maker 3" }
              ),
              [su[e.maquina] ?? "Cricut Maker 3"]
            ) }),
            d("Velocidad de corte", "corte_velocidad_mm_s", 1, 500, 1, "mm/s"),
            d("Velocidad de viaje (sin cortar)", "corte_viaje_mm_s", 1, 1e3, 5, "mm/s"),
            d("Tiempo extra por forma", "corte_extra_forma_s", 0, 30, 0.1, "s"),
            d("Factor de corrección", "corte_factor", 0.1, 20, 0.05, "×"),
            /* @__PURE__ */ i.jsx("div", { className: "hint", children: r("Ajusta el factor para corregir con tu máquina y material reales; se guarda para la próxima vez.") })
          ]
        }
      ),
      h && /* @__PURE__ */ i.jsxs(
        zt,
        {
          id: "historial",
          title: r("Historial (deshacer/rehacer)"),
          open: s.historial,
          toggle: _,
          icon: /* @__PURE__ */ i.jsx(Ld, { size: 15 }),
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
                  onChange: (g) => y({ historial: g.target.checked })
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
                    onChange: (g) => y({ hist_tamano: g.target.checked })
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
                    onChange: (g) => y({ hist_copias: g.target.checked })
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
                    onChange: (g) => y({ hist_borde: g.target.checked })
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
                    onChange: (g) => y({ hist_minis: g.target.checked })
                  }
                ),
                /* @__PURE__ */ i.jsx("span", { className: "switch-text", children: r("Minis") })
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ i.jsxs(
        zt,
        {
          id: "visualizacion",
          title: r("Visualización"),
          open: s.visualizacion,
          toggle: _,
          icon: /* @__PURE__ */ i.jsx(Rd, { size: 15 }),
          children: [
            /* @__PURE__ */ i.jsxs("div", { className: "ctl", children: [
              /* @__PURE__ */ i.jsx("label", { children: r("Tema") }),
              /* @__PURE__ */ i.jsx("div", { className: "theme-grid", "data-testid": "theme-grid", children: Wi.map((g) => /* @__PURE__ */ i.jsxs(
                "button",
                {
                  className: `theme-chip ${e.tema === g.key ? "active" : ""}`,
                  "data-testid": `tema-${g.key}`,
                  onClick: () => t({ tema: g.key }),
                  children: [
                    /* @__PURE__ */ i.jsx("span", { className: "dot", style: { background: g.colors.accent } }),
                    /* @__PURE__ */ i.jsx("span", { className: "dot", style: { background: g.colors.accent2 } }),
                    g.label
                  ]
                },
                g.key
              )) })
            ] }),
            /* @__PURE__ */ i.jsx("div", { className: "ctl", children: /* @__PURE__ */ i.jsxs("label", { className: "row", children: [
              /* @__PURE__ */ i.jsx(
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
            /* @__PURE__ */ i.jsxs("div", { className: "ctl", children: [
              /* @__PURE__ */ i.jsx("label", { children: r("Icono de la aplicación") }),
              /* @__PURE__ */ i.jsxs("div", { className: "row", children: [
                /* @__PURE__ */ i.jsx("img", { src: A.iconUrl(), alt: r("icono"), style: { width: 34, height: 34, borderRadius: 10 } }),
                /* @__PURE__ */ i.jsx("button", { "data-testid": "btn-cambiar-icono", onClick: () => {
                  var g;
                  return (g = $.current) == null ? void 0 : g.click();
                }, children: r("Cargar nuevo icono") }),
                /* @__PURE__ */ i.jsx(
                  "input",
                  {
                    ref: $,
                    type: "file",
                    hidden: !0,
                    accept: "image/*",
                    onChange: (g) => {
                      var S;
                      const j = (S = g.target.files) == null ? void 0 : S[0];
                      j && A.setIcon(j).then(() => {
                        window.location.reload();
                      }), g.target.value = "";
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
        zt,
        {
          id: "extras",
          title: r("Extras"),
          open: s.extras,
          toggle: _,
          icon: /* @__PURE__ */ i.jsx(Md, { size: 15 }),
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
                    onChange: (g) => y({ volumen: Number(g.target.value) })
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
                    onChange: (g) => y({ pikmin_activo: g.target.checked })
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
                    onChange: (g) => y({ pikmin_sonido: g.target.checked })
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
                    onChange: (g) => y({ pikmin_sonido_morir: g.target.checked })
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
                    onChange: (g) => t({ comprobar_versiones: g.target.checked })
                  }
                ),
                r("Comprobar si hay versiones nuevas al iniciar")
              ] }) })
            ] }),
            /* @__PURE__ */ i.jsx("div", { className: "hint", children: r("Las imágenes rotan entre las del proyecto y las de Pikmin Bloom.") })
          ]
        }
      ),
      /* @__PURE__ */ i.jsx("div", { className: "creditos", "data-testid": "creditos", children: du(
        r("CryCat · hecha por Daniel Hernández Ferrándiz y Wivi.eve, para los artistas."),
        ["CryCat", "Daniel Hernández Ferrándiz", "Wivi.eve"]
      ) })
    ] }),
    /* @__PURE__ */ i.jsx(
      $d,
      {
        open: l,
        initial: e.carpeta_export,
        onClose: () => p(!1),
        onPick: (g) => t({ carpeta_export: g })
      }
    )
  ] });
}
function ch({ ver: e, onCerrar: t }) {
  const n = Ye(), r = e == null ? void 0 : e.actualizacion, a = (r == null ? void 0 : r.estado) ?? "descargando", o = (r == null ? void 0 : r.progreso) != null ? Math.round(r.progreso) : null, s = w.useRef((e == null ? void 0 : e.actual) ?? ""), [u, l] = w.useState(!1), p = a === "error", v = a === "reiniciando";
  return w.useEffect(() => {
    if (!v) return;
    l(!0);
    let f = !0;
    const h = window.setInterval(async () => {
      try {
        const x = await A.version();
        if (!f) return;
        x.actual && s.current && x.actual !== s.current && window.location.reload();
      } catch {
      }
    }, 800);
    return () => {
      f = !1, window.clearInterval(h);
    };
  }, [v]), /* @__PURE__ */ i.jsx("div", { className: "modal-back", "data-testid": "dialogo-actualizacion", children: /* @__PURE__ */ i.jsxs("div", { className: "modal modal-act", children: [
    /* @__PURE__ */ i.jsx("div", { className: `dialogo-icono${p ? " error" : ""}`, children: p ? "!" : v ? /* @__PURE__ */ i.jsx(Wm, { size: 26 }) : /* @__PURE__ */ i.jsx(Ad, { size: 26 }) }),
    /* @__PURE__ */ i.jsx("h3", { children: n(p ? "No se pudo actualizar" : v ? "Reiniciando con la versión nueva…" : "Actualizando CryCat…") }),
    !p && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      /* @__PURE__ */ i.jsx("div", { className: "progreso-act", "data-testid": "progreso-actualizacion", children: /* @__PURE__ */ i.jsx(
        "div",
        {
          className: o == null ? "indeterminado" : "",
          style: { width: o == null ? "100%" : `${Math.max(4, o)}%` }
        }
      ) }),
      /* @__PURE__ */ i.jsxs("div", { className: "fase", "data-testid": "fase-actualizacion", children: [
        n((r == null ? void 0 : r.mensaje) || "Preparando la actualización…"),
        o != null && !v ? ` · ${o}%` : ""
      ] }),
      /* @__PURE__ */ i.jsx("div", { className: "nota", children: n("Tus ajustes, imágenes y colocación se guardan antes de actualizar: al volver, todo queda exactamente como estaba.") }),
      u && /* @__PURE__ */ i.jsx("div", { className: "fase suave", "data-testid": "recarga-aviso", children: n("La página se recargará sola cuando el motor nuevo esté listo…") })
    ] }),
    p && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
      /* @__PURE__ */ i.jsx("div", { className: "nota", children: (r == null ? void 0 : r.mensaje) || n("Error desconocido") }),
      /* @__PURE__ */ i.jsx("button", { "data-testid": "cerrar-actualizacion", onClick: t, children: n("Cerrar") })
    ] })
  ] }) });
}
function Xo(e) {
  if (!Number.isFinite(e) || e <= 0) return "—";
  if (e < 60) return `${Math.ceil(e)} s`;
  const t = Math.floor(e / 60), n = Math.round(e % 60);
  return t < 60 ? `${t} min ${n} s` : `${Math.floor(t / 60)} h ${t % 60} min`;
}
function dh({
  job: e,
  backendOk: t,
  result: n,
  estimate: r,
  optimizando: a = !1,
  volumen: o = 0.5,
  mute: s = !1,
  onVolumen: u,
  onMute: l,
  onIdioma: p,
  onEasterEgg: v,
  onAyuda: f,
  onReportar: h
}) {
  var Ae, he, Ke;
  const x = Ye(), _ = Ws(), [y, $] = w.useState([]), [m, d] = w.useState(0), [c, g] = w.useState(null), [j, S] = w.useState(!1), [N, P] = w.useState(""), [C, E] = w.useState(!1), q = w.useRef(!1), se = w.useRef([]);
  w.useEffect(() => {
    fetch("/api/funmsgs").then((D) => D.ok ? D.json() : { msgs: [] }).then((D) => $(D.msgs ?? [])).catch(() => {
    });
  }, []), w.useEffect(() => {
    let D = !0;
    return A.version().then((pe) => {
      D && (g(pe), !pe.comprobado && !q.current && (q.current = !0, A.checkVersion().then((ot) => D && g(ot)).catch(() => {
      })));
    }).catch(() => {
    }), () => {
      D = !1;
    };
  }, []);
  const Y = ((Ae = c == null ? void 0 : c.actualizacion) == null ? void 0 : Ae.estado) === "descargando" || ((he = c == null ? void 0 : c.actualizacion) == null ? void 0 : he.estado) === "instalando" || ((Ke = c == null ? void 0 : c.actualizacion) == null ? void 0 : Ke.estado) === "reiniciando";
  w.useEffect(() => {
    if (!Y) return;
    const D = setInterval(() => {
      A.version().then(g).catch(() => {
      });
    }, 700);
    return () => clearInterval(D);
  }, [Y]);
  const Z = a || !!(e && !e.done);
  w.useEffect(() => {
    if (!Z) return;
    const D = setInterval(() => d((pe) => pe + 1), 1200);
    return () => clearInterval(D);
  }, [Z]);
  const je = y.length ? y : [
    x("Optimizando…"),
    "Rascando Pikachus…",
    "Contando Mausholds…",
    "Tortilleando Exeggcutes…",
    "Ordenando los cubiertos de Sinistea…"
  ], ne = w.useMemo(() => {
    if (N) return N;
    if (Y) {
      const D = c == null ? void 0 : c.actualizacion;
      if ((D == null ? void 0 : D.estado) === "instalando") return x("Instalando y reiniciando…");
      const pe = (D == null ? void 0 : D.progreso) != null ? Math.round(D.progreso) : null;
      return pe != null ? x("Descargando… {p}%", { p: pe }) : (D == null ? void 0 : D.mensaje) || x("Descargando actualización…");
    }
    return Z ? je[m % je.length] : e && e.status === "error" ? e.message || "Error" : n && n.pages > 0 ? x("Listo") : x("Listo para empezar");
  }, [N, Y, Z, e, je, m, n, x, c]), L = Math.round(((e == null ? void 0 : e.progress) ?? 0) * 100), b = Z && !e, B = w.useMemo(() => {
    const D = e == null ? void 0 : e.eta_s;
    return !Z || D === void 0 || D === null || D <= 0.5 ? "" : (e == null || e.tope_s, x(" · ~{x} restante", { x: Xo(D) }));
  }, [e == null ? void 0 : e.eta_s, Z, x]), F = w.useMemo(() => !r || !r.segundos ? "" : Xo(r.segundos), [r]), W = async () => {
    S(!0), P("");
    try {
      const D = await A.checkVersion();
      g(D), D.error ? P(x("Sin conexión")) : D.hay_nueva || P(x("Estás en la última versión"));
    } catch {
      P(x("Sin conexión"));
    } finally {
      S(!1);
    }
  }, K = async () => {
    P("");
    try {
      const D = await A.updateVersion();
      D.ok ? E(!0) : D.modo === "dev" && D.url ? (P(x("Modo desarrollo: se actualiza con git")), await A.openReleases().catch(() => {
      })) : P(D.mensaje || x("No se pudo actualizar")), A.version().then(g).catch(() => {
      });
    } catch {
      P(x("No se pudo actualizar"));
    }
  }, be = !!(c != null && c.hay_nueva && !Z && !Y) ? x("Nueva versión {v} disponible", { v: (c == null ? void 0 : c.ultima) ?? "" }) : "";
  return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    C && /* @__PURE__ */ i.jsx(
      ch,
      {
        ver: c,
        onCerrar: () => E(!1)
      }
    ),
    /* @__PURE__ */ i.jsxs("div", { className: "statusbar", "data-testid": "statusbar", children: [
      /* @__PURE__ */ i.jsxs("div", { className: "brand", children: [
        /* @__PURE__ */ i.jsx(
          "img",
          {
            src: A.iconUrl(),
            alt: "CryCat",
            "data-testid": "brand-icon",
            title: x("CryCat"),
            style: { cursor: "pointer" },
            onClick: () => {
              const D = Date.now();
              se.current = [...se.current, D].filter((pe) => D - pe < 2500), se.current.length >= 5 && (se.current = [], P(x("¡Fiesta Pikmin!")), window.setTimeout(() => P(""), 4e3), v == null || v());
            }
          }
        ),
        /* @__PURE__ */ i.jsx("span", { className: "nombre", children: "CryCat" })
      ] }),
      /* @__PURE__ */ i.jsxs("div", { className: "center", "data-testid": "status-center", children: [
        n && n.pages > 0 && !Z && (() => {
          const D = Math.min(1, Math.max(0.05, n.densidad ?? 0.75)), pe = n.placed || 1, ot = Math.min(80, Math.max(
            30,
            48 + 22 * D - Math.min(18, pe * 0.08)
          )), Xe = n.efficiency * 100, Je = Xe >= ot ? "buena" : Xe >= ot * 0.72 ? "normal" : "baja";
          return /* @__PURE__ */ i.jsxs("div", { className: "stat-cards", "data-testid": "stat-cards", children: [
            /* @__PURE__ */ i.jsxs("div", { className: "stat-card", "data-tip": x("Imágenes colocadas en las hojas"), children: [
              /* @__PURE__ */ i.jsx("b", { children: n.placed }),
              /* @__PURE__ */ i.jsx("span", { children: x("imágenes") })
            ] }),
            /* @__PURE__ */ i.jsxs("div", { className: "stat-card", "data-tip": x("Páginas que ocupa el trabajo"), children: [
              /* @__PURE__ */ i.jsx("b", { children: n.pages }),
              /* @__PURE__ */ i.jsx("span", { children: n.pages > 1 ? x("páginas") : x("página") })
            ] }),
            /* @__PURE__ */ i.jsxs("div", { className: "stat-card", "data-tip": x("Copias pequeñas extra que rellenan huecos"), children: [
              /* @__PURE__ */ i.jsx("b", { children: n.minis }),
              /* @__PURE__ */ i.jsx("span", { children: x("minis") })
            ] }),
            /* @__PURE__ */ i.jsxs(
              "div",
              {
                className: `stat-card eficiencia ${Je}`,
                "data-testid": "eficiencia-card",
                "data-nivel": Je,
                "data-tip": x("Eficiencia real (siluetas / área útil). Con estas formas y {n} piezas, lo esperable es ~{e}%.", { n: pe, e: Math.round(ot) }),
                children: [
                  /* @__PURE__ */ i.jsxs("b", { children: [
                    Math.round(Xe),
                    "%"
                  ] }),
                  /* @__PURE__ */ i.jsx("span", { children: x("eficiencia") })
                ]
              }
            )
          ] });
        })(),
        !(n && n.pages > 0 && !Z) && /* @__PURE__ */ i.jsx("span", { className: "msg", children: ne }),
        Z && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
          /* @__PURE__ */ i.jsx(
            "div",
            {
              className: `progress${b ? " indeterminado" : ""}`,
              "data-testid": "progress",
              children: /* @__PURE__ */ i.jsx("div", { style: { width: `${Math.max(4, L)}%` } })
            }
          ),
          /* @__PURE__ */ i.jsxs(
            "span",
            {
              className: "eta",
              "data-testid": "eta",
              title: e != null && e.tope_s ? x("Tiempo máximo de este cálculo: {y}", { y: Xo(e.tope_s) }) : void 0,
              children: [
                L,
                "%",
                B
              ]
            }
          ),
          /* @__PURE__ */ i.jsx(
            "img",
            {
              className: "piensa",
              "data-testid": "piensa",
              src: kt("/piensa.gif"),
              alt: "",
              title: x("Pensando…"),
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
            "data-tip": x("Cómo usar CryCat (vuelve a mostrar la ayuda)"),
            onClick: () => f == null ? void 0 : f(),
            children: [
              /* @__PURE__ */ i.jsx(Ym, { size: 15 }),
              " ",
              x("Cómo usar")
            ]
          }
        ),
        /* @__PURE__ */ i.jsxs(
          "button",
          {
            className: "app-info reportar",
            "data-testid": "btn-reportar",
            "data-tip": x("Reportar un bug: abre un issue en GitHub ya rellenado"),
            onClick: () => h == null ? void 0 : h(),
            children: [
              /* @__PURE__ */ i.jsx(Id, { size: 15 }),
              " ",
              x("Reportar")
            ]
          }
        ),
        /* @__PURE__ */ i.jsxs(
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
              /* @__PURE__ */ i.jsx(Km, { size: 15 }),
              " ",
              x("Apoyar")
            ]
          }
        ),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            className: "app-info",
            "data-testid": "btn-repo",
            title: x("Abrir el repositorio del proyecto en una pestaña nueva"),
            onClick: () => window.open((c == null ? void 0 : c.repo) ?? "https://github.com/dhernandezgit/CryCat-Tool", "_blank", "noopener"),
            children: /* @__PURE__ */ i.jsx(Gm, { size: 15 })
          }
        ),
        /* @__PURE__ */ i.jsx(
          "button",
          {
            className: "idioma",
            "data-testid": "btn-idioma",
            title: x("Idioma"),
            onClick: () => p == null ? void 0 : p(_ === "es" ? "en" : "es"),
            children: _.toUpperCase()
          }
        ),
        /* @__PURE__ */ i.jsxs(
          "span",
          {
            className: "version-chip",
            "data-testid": "version-chip",
            title: x("Versión actual"),
            children: [
              (c == null ? void 0 : c.hay_nueva) && !Y && /* @__PURE__ */ i.jsx(
                "button",
                {
                  className: "alerta-version",
                  "data-testid": "aviso-version",
                  title: be || x("Hay una versión nueva"),
                  onClick: K,
                  children: /* @__PURE__ */ i.jsx(Hm, { size: 14 })
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
                  title: x("Comprobar versiones"),
                  onClick: W,
                  disabled: j,
                  children: j ? "…" : /* @__PURE__ */ i.jsx(Qm, { size: 14 })
                }
              ),
              (c == null ? void 0 : c.hay_nueva) && /* @__PURE__ */ i.jsx(
                "button",
                {
                  className: "btn-mini destacado",
                  "data-testid": "btn-actualizar",
                  title: x("Descargar e instalar la nueva versión"),
                  onClick: K,
                  children: /* @__PURE__ */ i.jsx(Ad, { size: 14 })
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
            title: x(t ? "Backend conectado" : "Backend desconectado")
          }
        ),
        /* @__PURE__ */ i.jsxs(
          "span",
          {
            className: "eta",
            "data-testid": "corte-estimado",
            title: x("Tiempo estimado de corte (Cricut Maker 5)"),
            children: [
              x("Corte"),
              " ",
              F || "—"
            ]
          }
        )
      ] })
    ] })
  ] });
}
const ph = [
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
], fh = "/pikmin_bloom/", pu = "/pikmin/alma.png", mh = "/sonidos/pikmin.mp3", hh = "/sonidos/pikmin_morir.mp3";
function gh(e) {
  const [t, n] = w.useState(ph), [r, a] = w.useState([]);
  return w.useEffect(() => {
    fetch(kt("/pikmin/indice.json")).then((o) => o.ok ? o.json() : null).then((o) => {
      Array.isArray(o) && o.length && n(o.map((s) => "/pikmin/" + s));
    }).catch(() => {
    }), fetch(kt("/pikmin_bloom/indice.json")).then((o) => o.ok ? o.json() : []).then((o) => {
      if (!Array.isArray(o)) return;
      const s = [...o];
      for (let u = s.length - 1; u > 0; u--) {
        const l = Math.floor(Math.random() * (u + 1));
        [s[u], s[l]] = [s[l], s[u]];
      }
      a(s.slice(0, 60).map((u) => kt(fh + u)));
    }).catch(() => {
    });
  }, []), w.useMemo(
    () => e && e.length ? [...e, ...r].map(kt) : [...t, ...r].map(kt),
    [e, t, r]
  );
}
function vh({
  activo: e = !0,
  frecuenciaMin: t = 5,
  sonido: n = !0,
  sonidoMorir: r = !0,
  volumen: a = 0.5,
  mute: o = !1,
  fiesta: s = !1,
  minDelay: u,
  maxDelay: l,
  fuentes: p
}) {
  const v = gh(p), [f, h] = w.useState([]), x = w.useRef(void 0), _ = w.useRef(
    typeof document < "u" && document.visibilityState === "hidden"
  ), y = w.useRef(s);
  y.current = s;
  const $ = Math.max(5e3, t * 6e4), m = (j) => {
    if (!(!n || o))
      try {
        const S = new Audio(kt(j ? hh : mh));
        S.volume = Math.min(1, Math.max(0, a)), S.play().catch(() => {
        });
      } catch {
      }
  }, d = () => {
    const j = r && Math.random() < 0.25, S = j ? kt(pu) : v[Math.floor(Math.random() * v.length)] ?? kt(pu);
    h((N) => [...N, {
      src: S,
      left: 3 + Math.random() * 92,
      key: Date.now() + N.length,
      morir: j,
      estado: "paseando"
    }]), m(j);
  }, c = () => {
    if (!e) return;
    const j = u ?? Math.round($ * 0.5), S = l ?? Math.round($ * 1.5), N = j + Math.random() * Math.max(1, S - j);
    x.current = window.setTimeout(d, N);
  };
  w.useEffect(() => {
    if (!e) {
      window.clearTimeout(x.current), h([]);
      return;
    }
    return c(), () => window.clearTimeout(x.current);
  }, [e, t, n, r, a, o, v]), w.useEffect(() => {
    const j = () => {
      _.current = document.visibilityState === "hidden", !_.current && y.current && window.setTimeout(() => {
        h((S) => S.length ? (m(!1), S.map((N) => ({ ...N, estado: "festejando" }))) : S), window.setTimeout(() => {
          h([]), c();
        }, 2200);
      }, 1e3);
    };
    return document.addEventListener("visibilitychange", j), () => document.removeEventListener("visibilitychange", j);
  }, []);
  const g = (j) => {
    if (y.current && _.current) {
      h((S) => S.map((N) => N.key === j ? { ...N, estado: "quieto" } : N));
      return;
    }
    h((S) => S.filter((N) => N.key !== j)), c();
  };
  return /* @__PURE__ */ i.jsx(i.Fragment, { children: f.map((j) => /* @__PURE__ */ i.jsx(
    "div",
    {
      className: `pikmin-pet ${j.estado}${j.morir ? " muriendo" : ""}`,
      "data-testid": "pikmin-pet",
      "data-estado": j.estado,
      "data-morir": j.morir ? "1" : "0",
      style: { left: `${j.left}%` },
      onAnimationEnd: () => g(j.key),
      children: /* @__PURE__ */ i.jsx(
        "img",
        {
          src: j.src,
          alt: "",
          "aria-hidden": "true",
          onError: () => g(j.key)
        }
      )
    },
    j.key
  )) });
}
const fu = "crycat_bienvenida_v2";
function yh() {
  const [e, t] = w.useState(!1);
  return w.useEffect(() => {
    try {
      localStorage.getItem(fu) !== "1" && t(!0);
    } catch {
      t(!0);
    }
  }, []), { visible: e, abrir: () => t(!0), cerrar: () => {
    try {
      localStorage.setItem(fu, "1");
    } catch {
    }
    t(!1);
  } };
}
function xh({ open: e, onClose: t, onAbrirCarpeta: n }) {
  const r = Ye(), [a, o] = w.useState("inicio");
  if (!e) return null;
  const s = [
    [
      /* @__PURE__ */ i.jsx(ro, { size: 18 }),
      r("1 · Suelta tus imágenes"),
      r("PNG, JPG, WEBP, PSD, AI, SVG… se recortan solas.")
    ],
    [
      /* @__PURE__ */ i.jsx(ba, { size: 18 }),
      r("2 · Ajusta el tamaño"),
      r("Escala o milímetros exactos, por lado mayor o menor.")
    ],
    [
      /* @__PURE__ */ i.jsx(Qr, { size: 18 }),
      r("3 · Minis (opcional)"),
      r("Actívalos en lo que quieras repetir rellenando huecos.")
    ],
    [
      /* @__PURE__ */ i.jsx(no, { size: 18 }),
      r("4 · Se coloca solo"),
      r("Automático; «Recalcular» afina la colocación cuando quieras.")
    ],
    [
      /* @__PURE__ */ i.jsx(cu, { size: 18 }),
      r("5 · Guarda"),
      r("PNG a 300 ppp listo para imprimir. Nunca sobrescribe nada.")
    ]
  ], u = [
    [
      /* @__PURE__ */ i.jsx(ro, { size: 18 }),
      r("Fondo y trozos sueltos"),
      r("Quita el fondo de un clic. Si quedan trozos sueltos, el aviso del elemento abre «limpiar contorno»: puedes quitarlos o UNIRLOS en una sola forma con «Unir todo en una pieza».")
    ],
    [
      /* @__PURE__ */ i.jsx(jo, { size: 18 }),
      r("Bordes (offset)"),
      r("Borde por elemento o global, en mm del resultado: extender el color, blanco, color a elegir, o unir trozos con borde recto o curvo. El original nunca se modifica.")
    ],
    [
      /* @__PURE__ */ i.jsx(Qr, { size: 18 }),
      r("Minis con cuota"),
      r("La cuota decide cuántos minis recibe cada elemento respecto a los demás (1 = reparto justo, 3 = el triple). El tamaño lo elige el optimizador dentro del mínimo y el tope.")
    ],
    [
      /* @__PURE__ */ i.jsx(no, { size: 18 }),
      r("Optimización a tu gusto"),
      r("Métodos (Greedy, Largest, Voronoi, Genético), calidad, tiempo (recomendado por método), espacio, márgenes, rotaciones y papel (A4, A3, A5, Letter o el que quieras).")
    ],
    [
      /* @__PURE__ */ i.jsx(Td, { size: 18 }),
      r("Modo rápido y experto"),
      r("Arriba a la derecha de las imágenes: Rápido deja solo lo esencial; Experto enseña todos los controles finos.")
    ],
    [
      /* @__PURE__ */ i.jsx(ba, { size: 18 }),
      r("Perfiles"),
      r("Arriba del panel: aplica un perfil de fábrica (chapa, pegatina, hoja, imán, vinilo) o guarda el tuyo con un nombre y recupéralo cuando quieras.")
    ],
    [
      /* @__PURE__ */ i.jsx(cu, { size: 18 }),
      r("Deshacer y rehacer"),
      r("Ctrl+Z y Ctrl+Y (configurable): puedes elegir qué se guarda en el historial (tamaño, copias, borde, minis).")
    ],
    [
      /* @__PURE__ */ i.jsx(Vm, { size: 18 }),
      r("Imprimir con marcas de Cricut"),
      r("Guarda primero y genera un PDF a 300 ppp con las marcas negras reales: imprime y corta sin pasar por Design Space.")
    ],
    [
      /* @__PURE__ */ i.jsx(Md, { size: 18 }),
      r("Vista previa"),
      r("Guías del área recortable, contornos reales (con y sin borde en dos colores), fondo transparente, zoom y mover o fijar piezas a mano.")
    ],
    [
      /* @__PURE__ */ i.jsx(ba, { size: 18 }),
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
  return /* @__PURE__ */ i.jsx("div", { className: "modal-back", "data-testid": "ayuda-dialog", children: /* @__PURE__ */ i.jsxs("div", { className: "modal ayuda-modal", children: [
    /* @__PURE__ */ i.jsx("h3", { children: p[a] }),
    a === "cricut" ? /* @__PURE__ */ i.jsx("ol", { className: "lista-pasos", "data-testid": "ayuda-pasos", children: l.map((v, f) => /* @__PURE__ */ i.jsx("li", { children: v }, f)) }) : /* @__PURE__ */ i.jsx("div", { className: "ayuda-cards", "data-testid": "ayuda-pasos", children: (a === "inicio" ? s : u).map(([v, f, h], x) => /* @__PURE__ */ i.jsxs("div", { className: "ayuda-card", children: [
      /* @__PURE__ */ i.jsx("span", { className: "ayuda-icono", children: v }),
      /* @__PURE__ */ i.jsxs("div", { children: [
        /* @__PURE__ */ i.jsx("div", { className: "ayuda-titulo", children: f }),
        /* @__PURE__ */ i.jsx("div", { className: "ayuda-texto", children: h })
      ] })
    ] }, x)) }),
    a === "inicio" && /* @__PURE__ */ i.jsx("div", { className: "hint", children: r("Los archivos originales nunca se modifican y la exportación nunca sobrescribe.") }),
    /* @__PURE__ */ i.jsxs("div", { className: "modal-botones", children: [
      a === "inicio" && /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
        n && /* @__PURE__ */ i.jsxs("button", { "data-testid": "ayuda-carpeta", onClick: n, children: [
          /* @__PURE__ */ i.jsx(Wr, { size: 15 }),
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
const wh = "https://github.com/dhernandezgit/CryCat-Tool", jh = [
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
function kh({
  open: e,
  onClose: t,
  settings: n,
  job: r,
  result: a
}) {
  const o = Ye(), [s, u] = w.useState(""), [l, p] = w.useState(""), [v, f] = w.useState(""), [h, x] = w.useState(!0), [_, y] = w.useState(!0), [$, m] = w.useState(!0), [d, c] = w.useState(!1);
  w.useEffect(() => {
    e && (A.version().then((C) => u(C.actual)).catch(() => {
    }), c(!1));
  }, [e]);
  const g = () => (globalThis.__crycatErrores ?? []).map(
    (E) => `- [${E.t}] ${E.msg} (${E.donde || "?"})`
  );
  if (!e) return null;
  const j = () => {
    var se, Y;
    const C = navigator.userAgent, E = !!globalThis.__crycatBase, q = [
      `- CryCat: v${s || "?"}`,
      `- Modo: ${E ? "web (navegador)" : "escritorio"}`,
      `- Sistema: ${navigator.platform || "-"}`,
      `- Navegador: ${C}`,
      `- Idioma: ${navigator.language || "-"}`,
      `- Pantalla: ${((se = window.screen) == null ? void 0 : se.width) ?? "?"}x${((Y = window.screen) == null ? void 0 : Y.height) ?? "?"} @${window.devicePixelRatio ?? 1}x (ventana ${window.innerWidth}x${window.innerHeight})`,
      `- Núcleos: ${navigator.hardwareConcurrency ?? "?"}`
    ];
    return a && q.push(`- Elementos: ${a.pages} página(s)`), r && q.push(`- Último trabajo: ${r.status}${r.message ? ` — ${r.message}` : ""}`), q.join(`
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
  ].map((E) => `- ${E}: ${String(n[E])}`).join(`
`) : "", N = () => {
    const C = [
      "### Qué pasó",
      l.trim() || "(cuéntalo aquí)",
      "",
      "### Pasos para reproducirlo",
      v.trim() || "1. …",
      ""
    ];
    h && C.push("### Entorno", j(), ""), _ && n && C.push("### Ajustes", S(), "");
    const E = g();
    return $ && E.length && C.push("### Errores recogidos", E.join(`
`), ""), C.push("<!-- Abierto desde el botón «Reportar» de CryCat -->"), C.join(`
`);
  }, P = () => {
    const C = `[Bug] ${l.trim().split(`
`)[0].slice(0, 70) || "algo no va bien"}`, E = `${wh}/issues/new?` + new URLSearchParams({
      title: C,
      body: N(),
      labels: "bug"
    }).toString();
    window.open(E, "_blank", "noopener"), t();
  };
  return /* @__PURE__ */ i.jsx("div", { className: "modal-back", "data-testid": "reportar-dialog", children: /* @__PURE__ */ i.jsxs("div", { className: "modal", children: [
    /* @__PURE__ */ i.jsx("h3", { children: o("Reportar un bug") }),
    /* @__PURE__ */ i.jsx("div", { className: "hint", children: o("Se abrirá la página de GitHub con el informe ya escrito: revisa, ajusta y pulsa «Submit new issue».") }),
    /* @__PURE__ */ i.jsx("div", { className: "hint", children: o("Sugerencias (pulsa para añadirla):") }),
    /* @__PURE__ */ i.jsx("div", { className: "reportar-chips", children: jh.map(([C, E]) => /* @__PURE__ */ i.jsx(
      "button",
      {
        type: "button",
        className: "chip",
        "data-testid": `reportar-sug-${C}`,
        onClick: () => p((q) => (q ? q + `
` : "") + E),
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
          onChange: (C) => p(C.target.value)
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
          value: v,
          placeholder: o("1. Abro… 2. Pulso… 3. Pasa…"),
          onChange: (C) => f(C.target.value)
        }
      )
    ] }),
    /* @__PURE__ */ i.jsxs("label", { className: "row", children: [
      /* @__PURE__ */ i.jsx(
        "input",
        {
          type: "checkbox",
          "data-testid": "reportar-entorno",
          checked: h,
          onChange: (C) => x(C.target.checked)
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
          onChange: (C) => y(C.target.checked)
        }
      ),
      o("Incluir mis ajustes actuales")
    ] }),
    g().length > 0 && /* @__PURE__ */ i.jsxs("label", { className: "row", children: [
      /* @__PURE__ */ i.jsx(
        "input",
        {
          type: "checkbox",
          "data-testid": "reportar-errores",
          checked: $,
          onChange: (C) => m(C.target.checked)
        }
      ),
      o(
        "Incluir los {n} errores recogidos de la consola",
        { n: g().length }
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

${v}

${N()}`
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
function Sh() {
  const [e, t] = w.useState([]), [n, r] = w.useState(null), [a, o] = w.useState(null), [s, u] = w.useState(null), [l, p] = w.useState(null), [v, f] = w.useState(null), [h, x] = w.useState(!0), [_, y] = w.useState(!1), [$, m] = w.useState(!1), [d, c] = w.useState({
    eyeTransparent: !1,
    eyeFosforito: !1,
    guidesVisible: !0,
    verBordes: !0,
    contornoModo: "final",
    viewMode: 1,
    saveName: ""
  }), [g, j] = w.useState(33.3), [S, N] = w.useState(33.3), P = yh(), C = w.useRef(null), E = w.useRef(null);
  w.useEffect(() => {
    (async () => {
      try {
        const T = await A.getSettings();
        p(T.settings), lu(T.settings.tema), c((O) => ({
          ...O,
          guidesVisible: T.settings.ver_guias,
          eyeTransparent: T.settings.fondo_transparente,
          // el contorno viene ACTIVADO por defecto (exterior)
          verBordes: T.settings.ver_contornos !== !1,
          contornoModo: T.settings.contorno_modo ?? "final"
        })), t((await A.listAssets()).map(Hr)), o(await A.result());
      } catch {
        x(!1);
      }
    })();
  }, []);
  const [q, se] = w.useState("");
  w.useEffect(() => {
    const T = (O) => se(String(O.detail || ""));
    return window.addEventListener("crycat:seleccion", T), () => window.removeEventListener("crycat:seleccion", T);
  }, []), w.useEffect(() => {
    const T = (O) => {
      const ke = O.detail;
      j(ke ? 19 : 33.3), N(ke ? 62 : 33.3), c((qe) => ({ ...qe, hojaGirada: ke }));
    };
    return window.addEventListener("crycat:disposicion", T), () => window.removeEventListener("crycat:disposicion", T);
  }, []), w.useEffect(() => {
    const T = setInterval(async () => {
      try {
        await A.health(), x(!0);
      } catch {
        x(!1);
      }
    }, 5e3);
    return () => clearInterval(T);
  }, []);
  const Y = w.useCallback(async () => {
    try {
      t((await A.listAssets()).map(Hr)), o(await A.result());
      try {
        u(await A.estimate());
      } catch {
      }
    } catch {
      x(!1);
    }
  }, []), Z = w.useCallback((T) => {
    E.current && window.clearInterval(E.current), E.current = window.setInterval(async () => {
      try {
        const O = await A.job(T);
        f(O), O.done && (window.clearInterval(E.current), E.current = null, await Y(), O.status === "done" && window.setTimeout(() => f(null), 2500));
      } catch {
        window.clearInterval(E.current), E.current = null;
      }
    }, 300);
  }, []), je = w.useCallback(async () => {
    m(!0), await new Promise((T) => setTimeout(T, 60));
    try {
      const T = await A.optimize();
      f(T), Z(T.id);
    } catch {
      x(!1);
    } finally {
      m(!1);
    }
  }, [Z]), ne = w.useCallback(
    async (T) => {
      m(!0), await new Promise((O) => setTimeout(O, 60));
      try {
        const O = await A.optimize(T, !0);
        f(O), Z(O.id);
      } catch {
        x(!1);
      } finally {
        m(!1);
      }
    },
    [Z]
  ), L = w.useCallback(() => {
    l && l.auto_recalcular === !1 || (C.current && window.clearTimeout(C.current), C.current = window.setTimeout(je, 400));
  }, [je, l]), b = w.useRef(null);
  w.useEffect(() => {
    b.current = L;
  }, [L]), w.useEffect(() => {
    const T = (O) => {
      const ke = O.detail;
      f((qe) => ({
        ...qe ?? {
          id: "web",
          status: "running",
          done: !1,
          message: "",
          progress: 0,
          pages: 0
        },
        progress: ke.progress,
        pages: ke.pages,
        eta_s: ke.eta_s,
        tope_s: ke.tope_s
      }));
    };
    return window.addEventListener("crycat:progreso", T), () => window.removeEventListener("crycat:progreso", T);
  }, []);
  const B = w.useRef(!1);
  w.useEffect(() => {
    if (!(!l || B.current)) {
      if (e.length > 0) {
        B.current = !0;
        return;
      }
      B.current = !0, A.crearDemo().then(async (T) => {
        T.ok && await Y();
      }).catch(() => {
      });
    }
  }, [l, e.length, Y]);
  const F = w.useCallback(
    async (T) => {
      p((O) => O && { ...O, ...T }), T.tema && lu(T.tema);
      try {
        const O = await A.putSettings(T);
        if (O.job)
          f(O.job), Z(O.job.id);
        else
          try {
            u(await A.estimate());
          } catch {
          }
      } catch {
        x(!1);
      }
    },
    [Z]
  ), W = w.useRef([]), K = w.useRef([]), [gt, be] = w.useState({ puedeDeshacer: !1, puedeRehacer: !1 }), Ae = (l == null ? void 0 : l.historial) !== !1, he = (l == null ? void 0 : l.historial_max) ?? 40, Ke = () => be({
    puedeDeshacer: W.current.length > 0,
    puedeRehacer: K.current.length > 0
  }), D = w.useCallback(() => {
    const T = [];
    return (l == null ? void 0 : l.hist_tamano) !== !1 && T.push("scale_pct"), (l == null ? void 0 : l.hist_copias) !== !1 && T.push("copies"), (l == null ? void 0 : l.hist_borde) !== !1 && T.push("offset_mm", "offset_modo", "offset_color"), (l == null ? void 0 : l.hist_minis) !== !1 && T.push("mini_enabled", "mini_quota"), T;
  }, [
    l == null ? void 0 : l.hist_tamano,
    l == null ? void 0 : l.hist_copias,
    l == null ? void 0 : l.hist_borde,
    l == null ? void 0 : l.hist_minis
  ]), pe = w.useCallback((T) => {
    const O = {};
    for (const ke of D()) O[ke] = T[ke];
    return O;
  }, [D]), ot = w.useCallback(() => {
    Ae && (W.current = [...W.current, { assets: e, result: a }].slice(-he), K.current = [], Ke());
  }, [e, a, Ae, he]), Xe = w.useCallback(async (T) => {
    t(T.assets), Ke();
    for (const O of T.assets)
      await A.patchAsset(O.id, pe(O)).catch(() => {
      });
    if (T.result) {
      await A.restoreResult(T.result).catch(() => {
      }), o(T.result);
      try {
        u(await A.estimate());
      } catch {
      }
    } else
      await Y();
  }, [pe, Y]), Je = w.useCallback(async () => {
    const T = W.current.pop();
    T && (K.current = [...K.current, { assets: e, result: a }], await Xe(T));
  }, [e, a, Xe]), un = w.useCallback(async () => {
    const T = K.current.pop();
    T && (W.current = [...W.current, { assets: e, result: a }], await Xe(T));
  }, [e, a, Xe]);
  w.useEffect(() => {
    const T = (O) => {
      if (!(O.ctrlKey || O.metaKey)) return;
      const qe = O.target;
      if (qe && (qe.tagName === "INPUT" || qe.tagName === "TEXTAREA" || qe.tagName === "SELECT" || qe.isContentEditable)) return;
      const _t = O.key.toLowerCase();
      _t === "z" && !O.shiftKey ? (O.preventDefault(), Je()) : (_t === "y" || _t === "z" && O.shiftKey) && (O.preventDefault(), un());
    };
    return window.addEventListener("keydown", T), () => window.removeEventListener("keydown", T);
  }, [Je, un]);
  const ir = w.useCallback(
    (T) => {
      const O = (qe) => {
        const cn = window.innerWidth, _t = qe.clientX / cn * 100;
        T === "left" ? j(Math.min(45, Math.max(12, _t))) : N(Math.min(60, Math.max(20, _t - g)));
      }, ke = () => {
        window.removeEventListener("mousemove", O), window.removeEventListener("mouseup", ke);
      };
      window.addEventListener("mousemove", O), window.addEventListener("mouseup", ke);
    },
    [g]
  );
  return w.useEffect(() => {
    document.documentElement.lang = (l == null ? void 0 : l.idioma) ?? "es";
  }, [l == null ? void 0 : l.idioma]), l ? /* @__PURE__ */ i.jsx(Mm, { idioma: l.idioma ?? "es", children: /* @__PURE__ */ i.jsxs("div", { className: "app", children: [
    /* @__PURE__ */ i.jsxs("div", { className: "main", children: [
      /* @__PURE__ */ i.jsx("div", { className: "panel left", style: { width: `${g}%` }, "data-testid": "file-panel", children: /* @__PURE__ */ i.jsx(
        th,
        {
          assets: e,
          result: a,
          settings: l,
          onChange: async () => {
            await Y(), L();
          },
          saveSettings: F,
          onEditarContorno: (T) => r(T),
          onAntesDeCambiar: ot,
          verBordes: d.verBordes,
          contornoModo: d.contornoModo ?? "final",
          destacado: q
        }
      ) }),
      /* @__PURE__ */ i.jsx("div", { className: "splitter", "data-testid": "splitter-left", onMouseDown: () => ir("left") }),
      /* @__PURE__ */ i.jsx("div", { className: "viewer-wrap", style: { width: `${S}%` }, children: /* @__PURE__ */ i.jsx(
        rh,
        {
          assets: e,
          result: a,
          settings: l,
          ui: d,
          setUi: c,
          saveSettings: F,
          optimize: je,
          onRefresh: Y,
          onJob: (T) => {
            f(T), Z(T.id);
          },
          onRecalc: ne,
          editando: n,
          onFinEdicion: async () => {
            r(null), await Y();
          },
          onDeshacer: Je,
          onRehacer: un,
          puedeDeshacer: gt.puedeDeshacer,
          puedeRehacer: gt.puedeRehacer
        }
      ) }),
      /* @__PURE__ */ i.jsx("div", { className: "splitter", "data-testid": "splitter-center", onMouseDown: () => ir("center") }),
      /* @__PURE__ */ i.jsx("div", { className: "panel right", style: { flex: 1 }, "data-testid": "settings-panel", children: /* @__PURE__ */ i.jsx(
        uh,
        {
          settings: l,
          assets: e,
          saveSettings: F
        }
      ) })
    ] }),
    /* @__PURE__ */ i.jsx(
      dh,
      {
        job: v,
        backendOk: h,
        result: a,
        estimate: s,
        optimizando: $,
        volumen: l.volumen ?? 0.5,
        mute: l.mute ?? !1,
        onVolumen: (T) => F({ volumen: T }),
        onMute: (T) => F({ mute: T }),
        onIdioma: (T) => F({ idioma: T }),
        onEasterEgg: () => F({
          pikmin_fiesta: !l.pikmin_fiesta
        }),
        onAyuda: P.abrir,
        onReportar: () => y(!0)
      }
    ),
    /* @__PURE__ */ i.jsx(
      vh,
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
      xh,
      {
        open: P.visible,
        onClose: P.cerrar,
        onAbrirCarpeta: () => void A.fsOpen(
          l.carpeta_export || ""
        ).catch(() => {
        })
      }
    ),
    /* @__PURE__ */ i.jsx(
      kh,
      {
        open: _,
        onClose: () => y(!1),
        settings: l,
        job: v,
        result: a
      }
    )
  ] }) }) : /* @__PURE__ */ i.jsx("div", { style: { padding: 30 }, children: Tm("es", "Cargando CryCat…") });
}
const Ch = "1790706218278", Dd = document.getElementById("root"), Jo = [
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
], Yi = 8, Ma = [];
globalThis.__crycatErrores = Ma;
const Od = (e, t) => {
  Ma.push({ t: (/* @__PURE__ */ new Date()).toISOString().slice(11, 19), msg: e, donde: t }), Ma.length > 12 && Ma.shift();
};
window.addEventListener("error", (e) => Od(String(e.message || e.error || "error"), e.filename || ""));
window.addEventListener("unhandledrejection", (e) => Od(
  String(e.reason && e.reason.message || e.reason || "promesa"),
  "promesa"
));
let Ki;
function Zo(e, t = !1) {
  window.clearTimeout(Ki);
  const n = zd().colors;
  if (Dd.innerHTML = `
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
                min-height:1.2em">${t ? "" : "Paso 1 de " + Yi}</div>
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
  let r = Math.floor(Math.random() * Jo.length);
  const a = () => {
    const s = document.getElementById("carga-fun");
    s && (s.textContent = Jo[r++ % Jo.length]);
  }, o = () => {
    a(), Ki = window.setTimeout(
      o,
      2200 + Math.random() * 1600
    );
  };
  o();
}
const ei = (e, t) => {
  const n = document.getElementById("carga-txt");
  if (n && (n.textContent = e), t) {
    const r = document.getElementById("carga-paso");
    r && (r.textContent = `Paso ${t} de ${Yi}`);
    const a = document.getElementById("carga-barra");
    a && (a.style.width = `${Math.round(t / Yi * 100)}%`);
  }
};
let Mn = null, Fd = !1, _h = 0;
const Xi = /* @__PURE__ */ new Map();
function Bd(e) {
  return new Promise((t) => {
    const n = ++_h;
    Xi.set(n, t), Mn.postMessage({ ...e, id: n });
  });
}
const Ji = (e) => {
  const t = new Uint8Array(e);
  let n = "";
  const r = 32768;
  for (let a = 0; a < t.length; a += r)
    n += String.fromCharCode.apply(null, t.subarray(a, a + r));
  return btoa(n);
}, Nh = (e) => {
  const t = atob(e || ""), n = new Uint8Array(t.length);
  for (let r = 0; r < t.length; r++) n[r] = t.charCodeAt(r);
  return n;
};
async function Eh(e) {
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
    Ji(await a.arrayBuffer()),
    `multipart/form-data; boundary=${t}`
  ];
}
async function zh(e, t, n) {
  const r = new URL(t, location.href), a = r.pathname.indexOf("/api/"), o = (a >= 0 ? r.pathname.slice(a) : r.pathname) + r.search, s = {};
  new Headers((n == null ? void 0 : n.headers) || {}).forEach((v, f) => {
    s[f] = v;
  });
  let u = "";
  const l = n == null ? void 0 : n.body;
  if (l instanceof FormData) {
    const [v, f] = await Eh(l);
    u = v, s["content-type"] = f;
  } else l instanceof Blob ? u = Ji(await l.arrayBuffer()) : typeof l == "string" && (u = Ji(new TextEncoder().encode(l).buffer));
  const p = await Bd({
    tipo: "api",
    method: e,
    path: o,
    headers: JSON.stringify(s),
    body: u
  });
  return p && p.error ? new Response("error: " + p.error, { status: 500 }) : new Response(Nh(p.body), {
    status: p.status || 200,
    headers: p.headers || { "content-type": "application/json" }
  });
}
function Ph() {
  const e = window.fetch.bind(window);
  window.fetch = async (t, n) => {
    const r = typeof t == "string" ? t : t && t.url ? t.url : String(t);
    if (r.includes("/api/") && Fd)
      try {
        return await zh(((n == null ? void 0 : n.method) || "GET").toUpperCase(), r, n);
      } catch (a) {
        return new Response(
          "error: " + a.message,
          { status: 500 }
        );
      }
    return e(t, n);
  };
}
async function bh() {
  try {
    if (Zo("Preparando el entorno…"), "serviceWorker" in navigator)
      try {
        const t = new URL("../", location.href).pathname;
        await Promise.race([
          navigator.serviceWorker.register("../sw.js", { scope: t }).then(() => navigator.serviceWorker.ready),
          new Promise((n) => setTimeout(n, 6e3))
        ]);
      } catch {
      }
    const e = new URL(
      `worker-crycat.js?v=${Ch}`,
      location.href
    ).href;
    Mn = new Worker(e, { type: "module" }), Mn.onmessage = (t) => {
      const n = t.data || {};
      if (n.tipo === "estado")
        ei(n.t, n.paso);
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
        const r = Xi.get(n.id);
        Xi.delete(n.id), r && r(n.salida ?? { error: n.error || "error" });
      } else n.tipo === "error" && Zo("No se pudo iniciar el motor: " + n.error, !0);
    }, await new Promise((t) => {
      const n = (r) => {
        r.data && r.data.tipo === "listo" && (Mn.removeEventListener("message", n), t());
      };
      Mn.addEventListener("message", n), Mn.postMessage({ tipo: "iniciar" });
    }), Fd = !0, navigator.serviceWorker.addEventListener("message", async (t) => {
      const n = t.data;
      if (!n || n.tipo !== "api") return;
      const r = t.ports && t.ports[0];
      if (r)
        try {
          const a = await Bd({
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
    }), globalThis.__crycatBase = new URL("./", location.href).pathname, globalThis.__crycatAssets = new URL("./app", location.href).pathname, Ph();
    try {
      const t = zd().key;
      t && t !== "wiwi" && await fetch(xn() + "/api/settings", {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ tema: t })
      });
    } catch {
    }
    ei("Optimizando la muestra inicial…", 7);
    try {
      const t = await fetch(xn() + "api/assets").then((n) => n.json());
      Array.isArray(t) && t.length === 0 && await fetch(xn() + "api/demo?n=16", { method: "POST" });
    } catch {
    }
    ei("Abriendo la aplicación…", 8), window.clearTimeout(Ki), Nd(Dd).render(/* @__PURE__ */ i.jsx(Sh, {}));
  } catch (e) {
    Zo("No se pudo iniciar la versión web: " + (e && e.message ? e.message : e), !0);
  }
}
bh();
