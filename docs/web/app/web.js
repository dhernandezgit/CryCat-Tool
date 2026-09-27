var Vs = { exports: {} }, $a = {}, Hs = { exports: {} }, U = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tr = Symbol.for("react.element"), jd = Symbol.for("react.portal"), Sd = Symbol.for("react.fragment"), Cd = Symbol.for("react.strict_mode"), _d = Symbol.for("react.profiler"), Nd = Symbol.for("react.provider"), Ed = Symbol.for("react.context"), Pd = Symbol.for("react.forward_ref"), zd = Symbol.for("react.suspense"), Md = Symbol.for("react.memo"), Td = Symbol.for("react.lazy"), Nl = Symbol.iterator;
function bd(e) {
  return e === null || typeof e != "object" ? null : (e = Nl && e[Nl] || e["@@iterator"], typeof e == "function" ? e : null);
}
var qs = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Gs = Object.assign, Ws = {};
function Fn(e, t, n) {
  this.props = e, this.context = t, this.refs = Ws, this.updater = n || qs;
}
Fn.prototype.isReactComponent = {};
Fn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Fn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Qs() {
}
Qs.prototype = Fn.prototype;
function Eo(e, t, n) {
  this.props = e, this.context = t, this.refs = Ws, this.updater = n || qs;
}
var Po = Eo.prototype = new Qs();
Po.constructor = Eo;
Gs(Po, Fn.prototype);
Po.isPureReactComponent = !0;
var El = Array.isArray, Ys = Object.prototype.hasOwnProperty, zo = { current: null }, Ks = { key: !0, ref: !0, __self: !0, __source: !0 };
function Xs(e, t, n) {
  var r, a = {}, i = null, l = null;
  if (t != null) for (r in t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (i = "" + t.key), t) Ys.call(t, r) && !Ks.hasOwnProperty(r) && (a[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) a.children = n;
  else if (1 < u) {
    for (var s = Array(u), f = 0; f < u; f++) s[f] = arguments[f + 2];
    a.children = s;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) a[r] === void 0 && (a[r] = u[r]);
  return { $$typeof: Tr, type: e, key: i, ref: l, props: a, _owner: zo.current };
}
function Ld(e, t) {
  return { $$typeof: Tr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Mo(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Tr;
}
function Rd(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Pl = /\/+/g;
function ti(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Rd("" + e.key) : t.toString(36);
}
function ea(e, t, n, r, a) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else switch (i) {
    case "string":
    case "number":
      l = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case Tr:
        case jd:
          l = !0;
      }
  }
  if (l) return l = e, a = a(l), e = r === "" ? "." + ti(l, 0) : r, El(a) ? (n = "", e != null && (n = e.replace(Pl, "$&/") + "/"), ea(a, t, n, "", function(f) {
    return f;
  })) : a != null && (Mo(a) && (a = Ld(a, n + (!a.key || l && l.key === a.key ? "" : ("" + a.key).replace(Pl, "$&/") + "/") + e)), t.push(a)), 1;
  if (l = 0, r = r === "" ? "." : r + ":", El(e)) for (var u = 0; u < e.length; u++) {
    i = e[u];
    var s = r + ti(i, u);
    l += ea(i, t, n, s, a);
  }
  else if (s = bd(e), typeof s == "function") for (e = s.call(e), u = 0; !(i = e.next()).done; ) i = i.value, s = r + ti(i, u++), l += ea(i, t, n, s, a);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return l;
}
function Dr(e, t, n) {
  if (e == null) return e;
  var r = [], a = 0;
  return ea(e, r, "", "", function(i) {
    return t.call(n, i, a++);
  }), r;
}
function Id(e) {
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
var Ne = { current: null }, ta = { transition: null }, Ad = { ReactCurrentDispatcher: Ne, ReactCurrentBatchConfig: ta, ReactCurrentOwner: zo };
function Js() {
  throw Error("act(...) is not supported in production builds of React.");
}
U.Children = { map: Dr, forEach: function(e, t, n) {
  Dr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Dr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Dr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Mo(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
U.Component = Fn;
U.Fragment = Sd;
U.Profiler = _d;
U.PureComponent = Eo;
U.StrictMode = Cd;
U.Suspense = zd;
U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ad;
U.act = Js;
U.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Gs({}, e.props), a = e.key, i = e.ref, l = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, l = zo.current), t.key !== void 0 && (a = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (s in t) Ys.call(t, s) && !Ks.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var f = 0; f < s; f++) u[f] = arguments[f + 2];
    r.children = u;
  }
  return { $$typeof: Tr, type: e.type, key: a, ref: i, props: r, _owner: l };
};
U.createContext = function(e) {
  return e = { $$typeof: Ed, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Nd, _context: e }, e.Consumer = e;
};
U.createElement = Xs;
U.createFactory = function(e) {
  var t = Xs.bind(null, e);
  return t.type = e, t;
};
U.createRef = function() {
  return { current: null };
};
U.forwardRef = function(e) {
  return { $$typeof: Pd, render: e };
};
U.isValidElement = Mo;
U.lazy = function(e) {
  return { $$typeof: Td, _payload: { _status: -1, _result: e }, _init: Id };
};
U.memo = function(e, t) {
  return { $$typeof: Md, type: e, compare: t === void 0 ? null : t };
};
U.startTransition = function(e) {
  var t = ta.transition;
  ta.transition = {};
  try {
    e();
  } finally {
    ta.transition = t;
  }
};
U.unstable_act = Js;
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
Hs.exports = U;
var w = Hs.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dd = w, $d = Symbol.for("react.element"), Od = Symbol.for("react.fragment"), Fd = Object.prototype.hasOwnProperty, Bd = Dd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Ud = { key: !0, ref: !0, __self: !0, __source: !0 };
function Zs(e, t, n) {
  var r, a = {}, i = null, l = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (l = t.ref);
  for (r in t) Fd.call(t, r) && !Ud.hasOwnProperty(r) && (a[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) a[r] === void 0 && (a[r] = t[r]);
  return { $$typeof: $d, type: e, key: i, ref: l, props: a, _owner: Bd.current };
}
$a.Fragment = Od;
$a.jsx = Zs;
$a.jsxs = Zs;
Vs.exports = $a;
var o = Vs.exports, eu = { exports: {} }, Fe = {}, tu = { exports: {} }, nu = {};
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
  function t(M, O) {
    var F = M.length;
    M.push(O);
    e: for (; 0 < F; ) {
      var q = F - 1 >>> 1, G = M[q];
      if (0 < a(G, O)) M[q] = O, M[F] = G, F = q;
      else break e;
    }
  }
  function n(M) {
    return M.length === 0 ? null : M[0];
  }
  function r(M) {
    if (M.length === 0) return null;
    var O = M[0], F = M.pop();
    if (F !== O) {
      M[0] = F;
      e: for (var q = 0, G = M.length, L = G >>> 1; q < L; ) {
        var Z = 2 * (q + 1) - 1, Ie = M[Z], Se = Z + 1, Ye = M[Se];
        if (0 > a(Ie, F)) Se < G && 0 > a(Ye, Ie) ? (M[q] = Ye, M[Se] = F, q = Se) : (M[q] = Ie, M[Z] = F, q = Z);
        else if (Se < G && 0 > a(Ye, F)) M[q] = Ye, M[Se] = F, q = Se;
        else break e;
      }
    }
    return O;
  }
  function a(M, O) {
    var F = M.sortIndex - O.sortIndex;
    return F !== 0 ? F : M.id - O.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function() {
      return i.now();
    };
  } else {
    var l = Date, u = l.now();
    e.unstable_now = function() {
      return l.now() - u;
    };
  }
  var s = [], f = [], g = 1, v = null, m = 3, x = !1, C = !1, y = !1, b = typeof setTimeout == "function" ? setTimeout : null, d = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(M) {
    for (var O = n(f); O !== null; ) {
      if (O.callback === null) r(f);
      else if (O.startTime <= M) r(f), O.sortIndex = O.expirationTime, t(s, O);
      else break;
      O = n(f);
    }
  }
  function k(M) {
    if (y = !1, p(M), !C) if (n(s) !== null) C = !0, pe(j);
    else {
      var O = n(f);
      O !== null && Re(k, O.startTime - M);
    }
  }
  function j(M, O) {
    C = !1, y && (y = !1, d(z), z = -1), x = !0;
    var F = m;
    try {
      for (p(O), v = n(s); v !== null && (!(v.expirationTime > O) || M && !$()); ) {
        var q = v.callback;
        if (typeof q == "function") {
          v.callback = null, m = v.priorityLevel;
          var G = q(v.expirationTime <= O);
          O = e.unstable_now(), typeof G == "function" ? v.callback = G : v === n(s) && r(s), p(O);
        } else r(s);
        v = n(s);
      }
      if (v !== null) var L = !0;
      else {
        var Z = n(f);
        Z !== null && Re(k, Z.startTime - O), L = !1;
      }
      return L;
    } finally {
      v = null, m = F, x = !1;
    }
  }
  var N = !1, _ = null, z = -1, h = 5, S = -1;
  function $() {
    return !(e.unstable_now() - S < h);
  }
  function oe() {
    if (_ !== null) {
      var M = e.unstable_now();
      S = M;
      var O = !0;
      try {
        O = _(!0, M);
      } finally {
        O ? ce() : (N = !1, _ = null);
      }
    } else N = !1;
  }
  var ce;
  if (typeof c == "function") ce = function() {
    c(oe);
  };
  else if (typeof MessageChannel < "u") {
    var Le = new MessageChannel(), dt = Le.port2;
    Le.port1.onmessage = oe, ce = function() {
      dt.postMessage(null);
    };
  } else ce = function() {
    b(oe, 0);
  };
  function pe(M) {
    _ = M, N || (N = !0, ce());
  }
  function Re(M, O) {
    z = b(function() {
      M(e.unstable_now());
    }, O);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(M) {
    M.callback = null;
  }, e.unstable_continueExecution = function() {
    C || x || (C = !0, pe(j));
  }, e.unstable_forceFrameRate = function(M) {
    0 > M || 125 < M ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : h = 0 < M ? Math.floor(1e3 / M) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return m;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(s);
  }, e.unstable_next = function(M) {
    switch (m) {
      case 1:
      case 2:
      case 3:
        var O = 3;
        break;
      default:
        O = m;
    }
    var F = m;
    m = O;
    try {
      return M();
    } finally {
      m = F;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(M, O) {
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
    var F = m;
    m = M;
    try {
      return O();
    } finally {
      m = F;
    }
  }, e.unstable_scheduleCallback = function(M, O, F) {
    var q = e.unstable_now();
    switch (typeof F == "object" && F !== null ? (F = F.delay, F = typeof F == "number" && 0 < F ? q + F : q) : F = q, M) {
      case 1:
        var G = -1;
        break;
      case 2:
        G = 250;
        break;
      case 5:
        G = 1073741823;
        break;
      case 4:
        G = 1e4;
        break;
      default:
        G = 5e3;
    }
    return G = F + G, M = { id: g++, callback: O, priorityLevel: M, startTime: F, expirationTime: G, sortIndex: -1 }, F > q ? (M.sortIndex = F, t(f, M), n(s) === null && M === n(f) && (y ? (d(z), z = -1) : y = !0, Re(k, F - q))) : (M.sortIndex = G, t(s, M), C || x || (C = !0, pe(j))), M;
  }, e.unstable_shouldYield = $, e.unstable_wrapCallback = function(M) {
    var O = m;
    return function() {
      var F = m;
      m = O;
      try {
        return M.apply(this, arguments);
      } finally {
        m = F;
      }
    };
  };
})(nu);
tu.exports = nu;
var Vd = tu.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hd = w, Oe = Vd;
function E(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var ru = /* @__PURE__ */ new Set(), fr = {};
function dn(e, t) {
  Ln(e, t), Ln(e + "Capture", t);
}
function Ln(e, t) {
  for (fr[e] = t, e = 0; e < t.length; e++) ru.add(t[e]);
}
var kt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), zi = Object.prototype.hasOwnProperty, qd = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, zl = {}, Ml = {};
function Gd(e) {
  return zi.call(Ml, e) ? !0 : zi.call(zl, e) ? !1 : qd.test(e) ? Ml[e] = !0 : (zl[e] = !0, !1);
}
function Wd(e, t, n, r) {
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
function Qd(e, t, n, r) {
  if (t === null || typeof t > "u" || Wd(e, t, n, r)) return !0;
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
function Ee(e, t, n, r, a, i, l) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = a, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = l;
}
var ve = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ve[e] = new Ee(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ve[t] = new Ee(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ve[e] = new Ee(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ve[e] = new Ee(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ve[e] = new Ee(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ve[e] = new Ee(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ve[e] = new Ee(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ve[e] = new Ee(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ve[e] = new Ee(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var To = /[\-:]([a-z])/g;
function bo(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    To,
    bo
  );
  ve[t] = new Ee(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(To, bo);
  ve[t] = new Ee(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(To, bo);
  ve[t] = new Ee(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ve[e] = new Ee(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ve.xlinkHref = new Ee("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ve[e] = new Ee(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Lo(e, t, n, r) {
  var a = ve.hasOwnProperty(t) ? ve[t] : null;
  (a !== null ? a.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Qd(t, n, a, r) && (n = null), r || a === null ? Gd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : a.mustUseProperty ? e[a.propertyName] = n === null ? a.type === 3 ? !1 : "" : n : (t = a.attributeName, r = a.attributeNamespace, n === null ? e.removeAttribute(t) : (a = a.type, n = a === 3 || a === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var _t = Hd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, $r = Symbol.for("react.element"), hn = Symbol.for("react.portal"), gn = Symbol.for("react.fragment"), Ro = Symbol.for("react.strict_mode"), Mi = Symbol.for("react.profiler"), au = Symbol.for("react.provider"), iu = Symbol.for("react.context"), Io = Symbol.for("react.forward_ref"), Ti = Symbol.for("react.suspense"), bi = Symbol.for("react.suspense_list"), Ao = Symbol.for("react.memo"), Tt = Symbol.for("react.lazy"), ou = Symbol.for("react.offscreen"), Tl = Symbol.iterator;
function Hn(e) {
  return e === null || typeof e != "object" ? null : (e = Tl && e[Tl] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ne = Object.assign, ni;
function Jn(e) {
  if (ni === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    ni = t && t[1] || "";
  }
  return `
` + ni + e;
}
var ri = !1;
function ai(e, t) {
  if (!e || ri) return "";
  ri = !0;
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
`), i = r.stack.split(`
`), l = a.length - 1, u = i.length - 1; 1 <= l && 0 <= u && a[l] !== i[u]; ) u--;
      for (; 1 <= l && 0 <= u; l--, u--) if (a[l] !== i[u]) {
        if (l !== 1 || u !== 1)
          do
            if (l--, u--, 0 > u || a[l] !== i[u]) {
              var s = `
` + a[l].replace(" at new ", " at ");
              return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
            }
          while (1 <= l && 0 <= u);
        break;
      }
    }
  } finally {
    ri = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Jn(e) : "";
}
function Yd(e) {
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
      return e = ai(e.type, !1), e;
    case 11:
      return e = ai(e.type.render, !1), e;
    case 1:
      return e = ai(e.type, !0), e;
    default:
      return "";
  }
}
function Li(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case gn:
      return "Fragment";
    case hn:
      return "Portal";
    case Mi:
      return "Profiler";
    case Ro:
      return "StrictMode";
    case Ti:
      return "Suspense";
    case bi:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case iu:
      return (e.displayName || "Context") + ".Consumer";
    case au:
      return (e._context.displayName || "Context") + ".Provider";
    case Io:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Ao:
      return t = e.displayName || null, t !== null ? t : Li(e.type) || "Memo";
    case Tt:
      t = e._payload, e = e._init;
      try {
        return Li(e(t));
      } catch {
      }
  }
  return null;
}
function Kd(e) {
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
      return Li(t);
    case 8:
      return t === Ro ? "StrictMode" : "Mode";
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
function qt(e) {
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
function lu(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Xd(e) {
  var t = lu(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var a = n.get, i = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return a.call(this);
    }, set: function(l) {
      r = "" + l, i.call(this, l);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(l) {
      r = "" + l;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function Or(e) {
  e._valueTracker || (e._valueTracker = Xd(e));
}
function su(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = lu(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function pa(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ri(e, t) {
  var n = t.checked;
  return ne({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function bl(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = qt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function uu(e, t) {
  t = t.checked, t != null && Lo(e, "checked", t, !1);
}
function Ii(e, t) {
  uu(e, t);
  var n = qt(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Ai(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ai(e, t.type, qt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Ll(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Ai(e, t, n) {
  (t !== "number" || pa(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Zn = Array.isArray;
function En(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
    for (n = 0; n < e.length; n++) a = t.hasOwnProperty("$" + e[n].value), e[n].selected !== a && (e[n].selected = a), a && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + qt(n), t = null, a = 0; a < e.length; a++) {
      if (e[a].value === n) {
        e[a].selected = !0, r && (e[a].defaultSelected = !0);
        return;
      }
      t !== null || e[a].disabled || (t = e[a]);
    }
    t !== null && (t.selected = !0);
  }
}
function Di(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(E(91));
  return ne({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Rl(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(E(92));
      if (Zn(n)) {
        if (1 < n.length) throw Error(E(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: qt(n) };
}
function cu(e, t) {
  var n = qt(t.value), r = qt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Il(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function du(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function $i(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? du(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Fr, fu = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, a) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, a);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Fr = Fr || document.createElement("div"), Fr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Fr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function pr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var nr = {
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
}, Jd = ["Webkit", "ms", "Moz", "O"];
Object.keys(nr).forEach(function(e) {
  Jd.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), nr[t] = nr[e];
  });
});
function pu(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || nr.hasOwnProperty(e) && nr[e] ? ("" + t).trim() : t + "px";
}
function mu(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, a = pu(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, a) : e[n] = a;
  }
}
var Zd = ne({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Oi(e, t) {
  if (t) {
    if (Zd[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(E(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(E(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(E(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(E(62));
  }
}
function Fi(e, t) {
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
var Bi = null;
function Do(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Ui = null, Pn = null, zn = null;
function Al(e) {
  if (e = Rr(e)) {
    if (typeof Ui != "function") throw Error(E(280));
    var t = e.stateNode;
    t && (t = Va(t), Ui(e.stateNode, e.type, t));
  }
}
function hu(e) {
  Pn ? zn ? zn.push(e) : zn = [e] : Pn = e;
}
function gu() {
  if (Pn) {
    var e = Pn, t = zn;
    if (zn = Pn = null, Al(e), t) for (e = 0; e < t.length; e++) Al(t[e]);
  }
}
function vu(e, t) {
  return e(t);
}
function yu() {
}
var ii = !1;
function xu(e, t, n) {
  if (ii) return e(t, n);
  ii = !0;
  try {
    return vu(e, t, n);
  } finally {
    ii = !1, (Pn !== null || zn !== null) && (yu(), gu());
  }
}
function mr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Va(n);
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
var Vi = !1;
if (kt) try {
  var qn = {};
  Object.defineProperty(qn, "passive", { get: function() {
    Vi = !0;
  } }), window.addEventListener("test", qn, qn), window.removeEventListener("test", qn, qn);
} catch {
  Vi = !1;
}
function ef(e, t, n, r, a, i, l, u, s) {
  var f = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, f);
  } catch (g) {
    this.onError(g);
  }
}
var rr = !1, ma = null, ha = !1, Hi = null, tf = { onError: function(e) {
  rr = !0, ma = e;
} };
function nf(e, t, n, r, a, i, l, u, s) {
  rr = !1, ma = null, ef.apply(tf, arguments);
}
function rf(e, t, n, r, a, i, l, u, s) {
  if (nf.apply(this, arguments), rr) {
    if (rr) {
      var f = ma;
      rr = !1, ma = null;
    } else throw Error(E(198));
    ha || (ha = !0, Hi = f);
  }
}
function fn(e) {
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
function wu(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Dl(e) {
  if (fn(e) !== e) throw Error(E(188));
}
function af(e) {
  var t = e.alternate;
  if (!t) {
    if (t = fn(e), t === null) throw Error(E(188));
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
        if (i === n) return Dl(a), e;
        if (i === r) return Dl(a), t;
        i = i.sibling;
      }
      throw Error(E(188));
    }
    if (n.return !== r.return) n = a, r = i;
    else {
      for (var l = !1, u = a.child; u; ) {
        if (u === n) {
          l = !0, n = a, r = i;
          break;
        }
        if (u === r) {
          l = !0, r = a, n = i;
          break;
        }
        u = u.sibling;
      }
      if (!l) {
        for (u = i.child; u; ) {
          if (u === n) {
            l = !0, n = i, r = a;
            break;
          }
          if (u === r) {
            l = !0, r = i, n = a;
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
function ku(e) {
  return e = af(e), e !== null ? ju(e) : null;
}
function ju(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = ju(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Su = Oe.unstable_scheduleCallback, $l = Oe.unstable_cancelCallback, of = Oe.unstable_shouldYield, lf = Oe.unstable_requestPaint, ie = Oe.unstable_now, sf = Oe.unstable_getCurrentPriorityLevel, $o = Oe.unstable_ImmediatePriority, Cu = Oe.unstable_UserBlockingPriority, ga = Oe.unstable_NormalPriority, uf = Oe.unstable_LowPriority, _u = Oe.unstable_IdlePriority, Oa = null, ut = null;
function cf(e) {
  if (ut && typeof ut.onCommitFiberRoot == "function") try {
    ut.onCommitFiberRoot(Oa, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var et = Math.clz32 ? Math.clz32 : pf, df = Math.log, ff = Math.LN2;
function pf(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (df(e) / ff | 0) | 0;
}
var Br = 64, Ur = 4194304;
function er(e) {
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
function va(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, a = e.suspendedLanes, i = e.pingedLanes, l = n & 268435455;
  if (l !== 0) {
    var u = l & ~a;
    u !== 0 ? r = er(u) : (i &= l, i !== 0 && (r = er(i)));
  } else l = n & ~a, l !== 0 ? r = er(l) : i !== 0 && (r = er(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & a) && (a = r & -r, i = t & -t, a >= i || a === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - et(t), a = 1 << n, r |= e[n], t &= ~a;
  return r;
}
function mf(e, t) {
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
function hf(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var l = 31 - et(i), u = 1 << l, s = a[l];
    s === -1 ? (!(u & n) || u & r) && (a[l] = mf(u, t)) : s <= t && (e.expiredLanes |= u), i &= ~u;
  }
}
function qi(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Nu() {
  var e = Br;
  return Br <<= 1, !(Br & 4194240) && (Br = 64), e;
}
function oi(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function br(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - et(t), e[t] = n;
}
function gf(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var a = 31 - et(n), i = 1 << a;
    t[a] = 0, r[a] = -1, e[a] = -1, n &= ~i;
  }
}
function Oo(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - et(n), a = 1 << r;
    a & t | e[r] & t && (e[r] |= t), n &= ~a;
  }
}
var W = 0;
function Eu(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Pu, Fo, zu, Mu, Tu, Gi = !1, Vr = [], Dt = null, $t = null, Ot = null, hr = /* @__PURE__ */ new Map(), gr = /* @__PURE__ */ new Map(), Lt = [], vf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Ol(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Dt = null;
      break;
    case "dragenter":
    case "dragleave":
      $t = null;
      break;
    case "mouseover":
    case "mouseout":
      Ot = null;
      break;
    case "pointerover":
    case "pointerout":
      hr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      gr.delete(t.pointerId);
  }
}
function Gn(e, t, n, r, a, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [a] }, t !== null && (t = Rr(t), t !== null && Fo(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
}
function yf(e, t, n, r, a) {
  switch (t) {
    case "focusin":
      return Dt = Gn(Dt, e, t, n, r, a), !0;
    case "dragenter":
      return $t = Gn($t, e, t, n, r, a), !0;
    case "mouseover":
      return Ot = Gn(Ot, e, t, n, r, a), !0;
    case "pointerover":
      var i = a.pointerId;
      return hr.set(i, Gn(hr.get(i) || null, e, t, n, r, a)), !0;
    case "gotpointercapture":
      return i = a.pointerId, gr.set(i, Gn(gr.get(i) || null, e, t, n, r, a)), !0;
  }
  return !1;
}
function bu(e) {
  var t = en(e.target);
  if (t !== null) {
    var n = fn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = wu(n), t !== null) {
          e.blockedOn = t, Tu(e.priority, function() {
            zu(n);
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
function na(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Wi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Bi = r, n.target.dispatchEvent(r), Bi = null;
    } else return t = Rr(n), t !== null && Fo(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Fl(e, t, n) {
  na(e) && n.delete(t);
}
function xf() {
  Gi = !1, Dt !== null && na(Dt) && (Dt = null), $t !== null && na($t) && ($t = null), Ot !== null && na(Ot) && (Ot = null), hr.forEach(Fl), gr.forEach(Fl);
}
function Wn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Gi || (Gi = !0, Oe.unstable_scheduleCallback(Oe.unstable_NormalPriority, xf)));
}
function vr(e) {
  function t(a) {
    return Wn(a, e);
  }
  if (0 < Vr.length) {
    Wn(Vr[0], e);
    for (var n = 1; n < Vr.length; n++) {
      var r = Vr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Dt !== null && Wn(Dt, e), $t !== null && Wn($t, e), Ot !== null && Wn(Ot, e), hr.forEach(t), gr.forEach(t), n = 0; n < Lt.length; n++) r = Lt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Lt.length && (n = Lt[0], n.blockedOn === null); ) bu(n), n.blockedOn === null && Lt.shift();
}
var Mn = _t.ReactCurrentBatchConfig, ya = !0;
function wf(e, t, n, r) {
  var a = W, i = Mn.transition;
  Mn.transition = null;
  try {
    W = 1, Bo(e, t, n, r);
  } finally {
    W = a, Mn.transition = i;
  }
}
function kf(e, t, n, r) {
  var a = W, i = Mn.transition;
  Mn.transition = null;
  try {
    W = 4, Bo(e, t, n, r);
  } finally {
    W = a, Mn.transition = i;
  }
}
function Bo(e, t, n, r) {
  if (ya) {
    var a = Wi(e, t, n, r);
    if (a === null) gi(e, t, r, xa, n), Ol(e, r);
    else if (yf(a, e, t, n, r)) r.stopPropagation();
    else if (Ol(e, r), t & 4 && -1 < vf.indexOf(e)) {
      for (; a !== null; ) {
        var i = Rr(a);
        if (i !== null && Pu(i), i = Wi(e, t, n, r), i === null && gi(e, t, r, xa, n), i === a) break;
        a = i;
      }
      a !== null && r.stopPropagation();
    } else gi(e, t, r, null, n);
  }
}
var xa = null;
function Wi(e, t, n, r) {
  if (xa = null, e = Do(r), e = en(e), e !== null) if (t = fn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = wu(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return xa = e, null;
}
function Lu(e) {
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
      switch (sf()) {
        case $o:
          return 1;
        case Cu:
          return 4;
        case ga:
        case uf:
          return 16;
        case _u:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var It = null, Uo = null, ra = null;
function Ru() {
  if (ra) return ra;
  var e, t = Uo, n = t.length, r, a = "value" in It ? It.value : It.textContent, i = a.length;
  for (e = 0; e < n && t[e] === a[e]; e++) ;
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === a[i - r]; r++) ;
  return ra = a.slice(e, 1 < r ? 1 - r : void 0);
}
function aa(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Hr() {
  return !0;
}
function Bl() {
  return !1;
}
function Be(e) {
  function t(n, r, a, i, l) {
    this._reactName = n, this._targetInst = a, this.type = r, this.nativeEvent = i, this.target = l, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(i) : i[u]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Hr : Bl, this.isPropagationStopped = Bl, this;
  }
  return ne(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Hr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Hr);
  }, persist: function() {
  }, isPersistent: Hr }), t;
}
var Bn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Vo = Be(Bn), Lr = ne({}, Bn, { view: 0, detail: 0 }), jf = Be(Lr), li, si, Qn, Fa = ne({}, Lr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ho, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Qn && (Qn && e.type === "mousemove" ? (li = e.screenX - Qn.screenX, si = e.screenY - Qn.screenY) : si = li = 0, Qn = e), li);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : si;
} }), Ul = Be(Fa), Sf = ne({}, Fa, { dataTransfer: 0 }), Cf = Be(Sf), _f = ne({}, Lr, { relatedTarget: 0 }), ui = Be(_f), Nf = ne({}, Bn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Ef = Be(Nf), Pf = ne({}, Bn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), zf = Be(Pf), Mf = ne({}, Bn, { data: 0 }), Vl = Be(Mf), Tf = {
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
}, bf = {
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
}, Lf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Rf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Lf[e]) ? !!t[e] : !1;
}
function Ho() {
  return Rf;
}
var If = ne({}, Lr, { key: function(e) {
  if (e.key) {
    var t = Tf[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = aa(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? bf[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ho, charCode: function(e) {
  return e.type === "keypress" ? aa(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? aa(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Af = Be(If), Df = ne({}, Fa, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Hl = Be(Df), $f = ne({}, Lr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ho }), Of = Be($f), Ff = ne({}, Bn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Bf = Be(Ff), Uf = ne({}, Fa, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Vf = Be(Uf), Hf = [9, 13, 27, 32], qo = kt && "CompositionEvent" in window, ar = null;
kt && "documentMode" in document && (ar = document.documentMode);
var qf = kt && "TextEvent" in window && !ar, Iu = kt && (!qo || ar && 8 < ar && 11 >= ar), ql = " ", Gl = !1;
function Au(e, t) {
  switch (e) {
    case "keyup":
      return Hf.indexOf(t.keyCode) !== -1;
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
function Du(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var vn = !1;
function Gf(e, t) {
  switch (e) {
    case "compositionend":
      return Du(t);
    case "keypress":
      return t.which !== 32 ? null : (Gl = !0, ql);
    case "textInput":
      return e = t.data, e === ql && Gl ? null : e;
    default:
      return null;
  }
}
function Wf(e, t) {
  if (vn) return e === "compositionend" || !qo && Au(e, t) ? (e = Ru(), ra = Uo = It = null, vn = !1, e) : null;
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
      return Iu && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Qf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Wl(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Qf[e.type] : t === "textarea";
}
function $u(e, t, n, r) {
  hu(r), t = wa(t, "onChange"), 0 < t.length && (n = new Vo("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var ir = null, yr = null;
function Yf(e) {
  Yu(e, 0);
}
function Ba(e) {
  var t = wn(e);
  if (su(t)) return e;
}
function Kf(e, t) {
  if (e === "change") return t;
}
var Ou = !1;
if (kt) {
  var ci;
  if (kt) {
    var di = "oninput" in document;
    if (!di) {
      var Ql = document.createElement("div");
      Ql.setAttribute("oninput", "return;"), di = typeof Ql.oninput == "function";
    }
    ci = di;
  } else ci = !1;
  Ou = ci && (!document.documentMode || 9 < document.documentMode);
}
function Yl() {
  ir && (ir.detachEvent("onpropertychange", Fu), yr = ir = null);
}
function Fu(e) {
  if (e.propertyName === "value" && Ba(yr)) {
    var t = [];
    $u(t, yr, e, Do(e)), xu(Yf, t);
  }
}
function Xf(e, t, n) {
  e === "focusin" ? (Yl(), ir = t, yr = n, ir.attachEvent("onpropertychange", Fu)) : e === "focusout" && Yl();
}
function Jf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ba(yr);
}
function Zf(e, t) {
  if (e === "click") return Ba(t);
}
function ep(e, t) {
  if (e === "input" || e === "change") return Ba(t);
}
function tp(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var nt = typeof Object.is == "function" ? Object.is : tp;
function xr(e, t) {
  if (nt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var a = n[r];
    if (!zi.call(t, a) || !nt(e[a], t[a])) return !1;
  }
  return !0;
}
function Kl(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Xl(e, t) {
  var n = Kl(e);
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
    n = Kl(n);
  }
}
function Bu(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Bu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Uu() {
  for (var e = window, t = pa(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = pa(e.document);
  }
  return t;
}
function Go(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function np(e) {
  var t = Uu(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Bu(n.ownerDocument.documentElement, n)) {
    if (r !== null && Go(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var a = n.textContent.length, i = Math.min(r.start, a);
        r = r.end === void 0 ? i : Math.min(r.end, a), !e.extend && i > r && (a = r, r = i, i = a), a = Xl(n, i);
        var l = Xl(
          n,
          r
        );
        a && l && (e.rangeCount !== 1 || e.anchorNode !== a.node || e.anchorOffset !== a.offset || e.focusNode !== l.node || e.focusOffset !== l.offset) && (t = t.createRange(), t.setStart(a.node, a.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(l.node, l.offset)) : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var rp = kt && "documentMode" in document && 11 >= document.documentMode, yn = null, Qi = null, or = null, Yi = !1;
function Jl(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Yi || yn == null || yn !== pa(r) || (r = yn, "selectionStart" in r && Go(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), or && xr(or, r) || (or = r, r = wa(Qi, "onSelect"), 0 < r.length && (t = new Vo("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = yn)));
}
function qr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var xn = { animationend: qr("Animation", "AnimationEnd"), animationiteration: qr("Animation", "AnimationIteration"), animationstart: qr("Animation", "AnimationStart"), transitionend: qr("Transition", "TransitionEnd") }, fi = {}, Vu = {};
kt && (Vu = document.createElement("div").style, "AnimationEvent" in window || (delete xn.animationend.animation, delete xn.animationiteration.animation, delete xn.animationstart.animation), "TransitionEvent" in window || delete xn.transitionend.transition);
function Ua(e) {
  if (fi[e]) return fi[e];
  if (!xn[e]) return e;
  var t = xn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Vu) return fi[e] = t[n];
  return e;
}
var Hu = Ua("animationend"), qu = Ua("animationiteration"), Gu = Ua("animationstart"), Wu = Ua("transitionend"), Qu = /* @__PURE__ */ new Map(), Zl = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Wt(e, t) {
  Qu.set(e, t), dn(t, [e]);
}
for (var pi = 0; pi < Zl.length; pi++) {
  var mi = Zl[pi], ap = mi.toLowerCase(), ip = mi[0].toUpperCase() + mi.slice(1);
  Wt(ap, "on" + ip);
}
Wt(Hu, "onAnimationEnd");
Wt(qu, "onAnimationIteration");
Wt(Gu, "onAnimationStart");
Wt("dblclick", "onDoubleClick");
Wt("focusin", "onFocus");
Wt("focusout", "onBlur");
Wt(Wu, "onTransitionEnd");
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
var tr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), op = new Set("cancel close invalid load scroll toggle".split(" ").concat(tr));
function es(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, rf(r, t, void 0, e), e.currentTarget = null;
}
function Yu(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], a = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var l = r.length - 1; 0 <= l; l--) {
        var u = r[l], s = u.instance, f = u.currentTarget;
        if (u = u.listener, s !== i && a.isPropagationStopped()) break e;
        es(a, u, f), i = s;
      }
      else for (l = 0; l < r.length; l++) {
        if (u = r[l], s = u.instance, f = u.currentTarget, u = u.listener, s !== i && a.isPropagationStopped()) break e;
        es(a, u, f), i = s;
      }
    }
  }
  if (ha) throw e = Hi, ha = !1, Hi = null, e;
}
function Y(e, t) {
  var n = t[eo];
  n === void 0 && (n = t[eo] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Ku(t, e, 2, !1), n.add(r));
}
function hi(e, t, n) {
  var r = 0;
  t && (r |= 4), Ku(n, e, r, t);
}
var Gr = "_reactListening" + Math.random().toString(36).slice(2);
function wr(e) {
  if (!e[Gr]) {
    e[Gr] = !0, ru.forEach(function(n) {
      n !== "selectionchange" && (op.has(n) || hi(n, !1, e), hi(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Gr] || (t[Gr] = !0, hi("selectionchange", !1, t));
  }
}
function Ku(e, t, n, r) {
  switch (Lu(t)) {
    case 1:
      var a = wf;
      break;
    case 4:
      a = kf;
      break;
    default:
      a = Bo;
  }
  n = a.bind(null, t, n, e), a = void 0, !Vi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), r ? a !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: a }) : e.addEventListener(t, n, !0) : a !== void 0 ? e.addEventListener(t, n, { passive: a }) : e.addEventListener(t, n, !1);
}
function gi(e, t, n, r, a) {
  var i = r;
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
          r = i = l;
          continue e;
        }
        u = u.parentNode;
      }
    }
    r = r.return;
  }
  xu(function() {
    var f = i, g = Do(n), v = [];
    e: {
      var m = Qu.get(e);
      if (m !== void 0) {
        var x = Vo, C = e;
        switch (e) {
          case "keypress":
            if (aa(n) === 0) break e;
          case "keydown":
          case "keyup":
            x = Af;
            break;
          case "focusin":
            C = "focus", x = ui;
            break;
          case "focusout":
            C = "blur", x = ui;
            break;
          case "beforeblur":
          case "afterblur":
            x = ui;
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
            x = Ul;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = Cf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = Of;
            break;
          case Hu:
          case qu:
          case Gu:
            x = Ef;
            break;
          case Wu:
            x = Bf;
            break;
          case "scroll":
            x = jf;
            break;
          case "wheel":
            x = Vf;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = zf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = Hl;
        }
        var y = (t & 4) !== 0, b = !y && e === "scroll", d = y ? m !== null ? m + "Capture" : null : m;
        y = [];
        for (var c = f, p; c !== null; ) {
          p = c;
          var k = p.stateNode;
          if (p.tag === 5 && k !== null && (p = k, d !== null && (k = mr(c, d), k != null && y.push(kr(c, k, p)))), b) break;
          c = c.return;
        }
        0 < y.length && (m = new x(m, C, null, n, g), v.push({ event: m, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (m = e === "mouseover" || e === "pointerover", x = e === "mouseout" || e === "pointerout", m && n !== Bi && (C = n.relatedTarget || n.fromElement) && (en(C) || C[jt])) break e;
        if ((x || m) && (m = g.window === g ? g : (m = g.ownerDocument) ? m.defaultView || m.parentWindow : window, x ? (C = n.relatedTarget || n.toElement, x = f, C = C ? en(C) : null, C !== null && (b = fn(C), C !== b || C.tag !== 5 && C.tag !== 6) && (C = null)) : (x = null, C = f), x !== C)) {
          if (y = Ul, k = "onMouseLeave", d = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (y = Hl, k = "onPointerLeave", d = "onPointerEnter", c = "pointer"), b = x == null ? m : wn(x), p = C == null ? m : wn(C), m = new y(k, c + "leave", x, n, g), m.target = b, m.relatedTarget = p, k = null, en(g) === f && (y = new y(d, c + "enter", C, n, g), y.target = p, y.relatedTarget = b, k = y), b = k, x && C) t: {
            for (y = x, d = C, c = 0, p = y; p; p = mn(p)) c++;
            for (p = 0, k = d; k; k = mn(k)) p++;
            for (; 0 < c - p; ) y = mn(y), c--;
            for (; 0 < p - c; ) d = mn(d), p--;
            for (; c--; ) {
              if (y === d || d !== null && y === d.alternate) break t;
              y = mn(y), d = mn(d);
            }
            y = null;
          }
          else y = null;
          x !== null && ts(v, m, x, y, !1), C !== null && b !== null && ts(v, b, C, y, !0);
        }
      }
      e: {
        if (m = f ? wn(f) : window, x = m.nodeName && m.nodeName.toLowerCase(), x === "select" || x === "input" && m.type === "file") var j = Kf;
        else if (Wl(m)) if (Ou) j = ep;
        else {
          j = Jf;
          var N = Xf;
        }
        else (x = m.nodeName) && x.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (j = Zf);
        if (j && (j = j(e, f))) {
          $u(v, j, n, g);
          break e;
        }
        N && N(e, m, f), e === "focusout" && (N = m._wrapperState) && N.controlled && m.type === "number" && Ai(m, "number", m.value);
      }
      switch (N = f ? wn(f) : window, e) {
        case "focusin":
          (Wl(N) || N.contentEditable === "true") && (yn = N, Qi = f, or = null);
          break;
        case "focusout":
          or = Qi = yn = null;
          break;
        case "mousedown":
          Yi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Yi = !1, Jl(v, n, g);
          break;
        case "selectionchange":
          if (rp) break;
        case "keydown":
        case "keyup":
          Jl(v, n, g);
      }
      var _;
      if (qo) e: {
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
      else vn ? Au(e, n) && (z = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (z = "onCompositionStart");
      z && (Iu && n.locale !== "ko" && (vn || z !== "onCompositionStart" ? z === "onCompositionEnd" && vn && (_ = Ru()) : (It = g, Uo = "value" in It ? It.value : It.textContent, vn = !0)), N = wa(f, z), 0 < N.length && (z = new Vl(z, e, null, n, g), v.push({ event: z, listeners: N }), _ ? z.data = _ : (_ = Du(n), _ !== null && (z.data = _)))), (_ = qf ? Gf(e, n) : Wf(e, n)) && (f = wa(f, "onBeforeInput"), 0 < f.length && (g = new Vl("onBeforeInput", "beforeinput", null, n, g), v.push({ event: g, listeners: f }), g.data = _));
    }
    Yu(v, t);
  });
}
function kr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function wa(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var a = e, i = a.stateNode;
    a.tag === 5 && i !== null && (a = i, i = mr(e, n), i != null && r.unshift(kr(e, i, a)), i = mr(e, t), i != null && r.push(kr(e, i, a))), e = e.return;
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
function ts(e, t, n, r, a) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var u = n, s = u.alternate, f = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 && f !== null && (u = f, a ? (s = mr(n, i), s != null && l.unshift(kr(n, s, u))) : a || (s = mr(n, i), s != null && l.push(kr(n, s, u)))), n = n.return;
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var lp = /\r\n?/g, sp = /\u0000|\uFFFD/g;
function ns(e) {
  return (typeof e == "string" ? e : "" + e).replace(lp, `
`).replace(sp, "");
}
function Wr(e, t, n) {
  if (t = ns(t), ns(e) !== t && n) throw Error(E(425));
}
function ka() {
}
var Ki = null, Xi = null;
function Ji(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Zi = typeof setTimeout == "function" ? setTimeout : void 0, up = typeof clearTimeout == "function" ? clearTimeout : void 0, rs = typeof Promise == "function" ? Promise : void 0, cp = typeof queueMicrotask == "function" ? queueMicrotask : typeof rs < "u" ? function(e) {
  return rs.resolve(null).then(e).catch(dp);
} : Zi;
function dp(e) {
  setTimeout(function() {
    throw e;
  });
}
function vi(e, t) {
  var n = t, r = 0;
  do {
    var a = n.nextSibling;
    if (e.removeChild(n), a && a.nodeType === 8) if (n = a.data, n === "/$") {
      if (r === 0) {
        e.removeChild(a), vr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = a;
  } while (n);
  vr(t);
}
function Ft(e) {
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
function as(e) {
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
var Un = Math.random().toString(36).slice(2), st = "__reactFiber$" + Un, jr = "__reactProps$" + Un, jt = "__reactContainer$" + Un, eo = "__reactEvents$" + Un, fp = "__reactListeners$" + Un, pp = "__reactHandles$" + Un;
function en(e) {
  var t = e[st];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[jt] || n[st]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = as(e); e !== null; ) {
        if (n = e[st]) return n;
        e = as(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Rr(e) {
  return e = e[st] || e[jt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function wn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(E(33));
}
function Va(e) {
  return e[jr] || null;
}
var to = [], kn = -1;
function Qt(e) {
  return { current: e };
}
function K(e) {
  0 > kn || (e.current = to[kn], to[kn] = null, kn--);
}
function Q(e, t) {
  kn++, to[kn] = e.current, e.current = t;
}
var Gt = {}, je = Qt(Gt), Me = Qt(!1), on = Gt;
function Rn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Gt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var a = {}, i;
  for (i in n) a[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = a), a;
}
function Te(e) {
  return e = e.childContextTypes, e != null;
}
function ja() {
  K(Me), K(je);
}
function is(e, t, n) {
  if (je.current !== Gt) throw Error(E(168));
  Q(je, t), Q(Me, n);
}
function Xu(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var a in r) if (!(a in t)) throw Error(E(108, Kd(e) || "Unknown", a));
  return ne({}, n, r);
}
function Sa(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Gt, on = je.current, Q(je, e), Q(Me, Me.current), !0;
}
function os(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(E(169));
  n ? (e = Xu(e, t, on), r.__reactInternalMemoizedMergedChildContext = e, K(Me), K(je), Q(je, e)) : K(Me), Q(Me, n);
}
var gt = null, Ha = !1, yi = !1;
function Ju(e) {
  gt === null ? gt = [e] : gt.push(e);
}
function mp(e) {
  Ha = !0, Ju(e);
}
function Yt() {
  if (!yi && gt !== null) {
    yi = !0;
    var e = 0, t = W;
    try {
      var n = gt;
      for (W = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      gt = null, Ha = !1;
    } catch (a) {
      throw gt !== null && (gt = gt.slice(e + 1)), Su($o, Yt), a;
    } finally {
      W = t, yi = !1;
    }
  }
  return null;
}
var jn = [], Sn = 0, Ca = null, _a = 0, Ve = [], He = 0, ln = null, yt = 1, xt = "";
function Jt(e, t) {
  jn[Sn++] = _a, jn[Sn++] = Ca, Ca = e, _a = t;
}
function Zu(e, t, n) {
  Ve[He++] = yt, Ve[He++] = xt, Ve[He++] = ln, ln = e;
  var r = yt;
  e = xt;
  var a = 32 - et(r) - 1;
  r &= ~(1 << a), n += 1;
  var i = 32 - et(t) + a;
  if (30 < i) {
    var l = a - a % 5;
    i = (r & (1 << l) - 1).toString(32), r >>= l, a -= l, yt = 1 << 32 - et(t) + a | n << a | r, xt = i + e;
  } else yt = 1 << i | n << a | r, xt = e;
}
function Wo(e) {
  e.return !== null && (Jt(e, 1), Zu(e, 1, 0));
}
function Qo(e) {
  for (; e === Ca; ) Ca = jn[--Sn], jn[Sn] = null, _a = jn[--Sn], jn[Sn] = null;
  for (; e === ln; ) ln = Ve[--He], Ve[He] = null, xt = Ve[--He], Ve[He] = null, yt = Ve[--He], Ve[He] = null;
}
var $e = null, De = null, X = !1, Ze = null;
function ec(e, t) {
  var n = qe(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function ls(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, $e = e, De = Ft(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, $e = e, De = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = ln !== null ? { id: yt, overflow: xt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = qe(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, $e = e, De = null, !0) : !1;
    default:
      return !1;
  }
}
function no(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ro(e) {
  if (X) {
    var t = De;
    if (t) {
      var n = t;
      if (!ls(e, t)) {
        if (no(e)) throw Error(E(418));
        t = Ft(n.nextSibling);
        var r = $e;
        t && ls(e, t) ? ec(r, n) : (e.flags = e.flags & -4097 | 2, X = !1, $e = e);
      }
    } else {
      if (no(e)) throw Error(E(418));
      e.flags = e.flags & -4097 | 2, X = !1, $e = e;
    }
  }
}
function ss(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  $e = e;
}
function Qr(e) {
  if (e !== $e) return !1;
  if (!X) return ss(e), X = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Ji(e.type, e.memoizedProps)), t && (t = De)) {
    if (no(e)) throw tc(), Error(E(418));
    for (; t; ) ec(e, t), t = Ft(t.nextSibling);
  }
  if (ss(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(E(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              De = Ft(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      De = null;
    }
  } else De = $e ? Ft(e.stateNode.nextSibling) : null;
  return !0;
}
function tc() {
  for (var e = De; e; ) e = Ft(e.nextSibling);
}
function In() {
  De = $e = null, X = !1;
}
function Yo(e) {
  Ze === null ? Ze = [e] : Ze.push(e);
}
var hp = _t.ReactCurrentBatchConfig;
function Yn(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(E(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(E(147, e));
      var a = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(l) {
        var u = a.refs;
        l === null ? delete u[i] : u[i] = l;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string") throw Error(E(284));
    if (!n._owner) throw Error(E(290, e));
  }
  return e;
}
function Yr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(E(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function us(e) {
  var t = e._init;
  return t(e._payload);
}
function nc(e) {
  function t(d, c) {
    if (e) {
      var p = d.deletions;
      p === null ? (d.deletions = [c], d.flags |= 16) : p.push(c);
    }
  }
  function n(d, c) {
    if (!e) return null;
    for (; c !== null; ) t(d, c), c = c.sibling;
    return null;
  }
  function r(d, c) {
    for (d = /* @__PURE__ */ new Map(); c !== null; ) c.key !== null ? d.set(c.key, c) : d.set(c.index, c), c = c.sibling;
    return d;
  }
  function a(d, c) {
    return d = Ht(d, c), d.index = 0, d.sibling = null, d;
  }
  function i(d, c, p) {
    return d.index = p, e ? (p = d.alternate, p !== null ? (p = p.index, p < c ? (d.flags |= 2, c) : p) : (d.flags |= 2, c)) : (d.flags |= 1048576, c);
  }
  function l(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function u(d, c, p, k) {
    return c === null || c.tag !== 6 ? (c = _i(p, d.mode, k), c.return = d, c) : (c = a(c, p), c.return = d, c);
  }
  function s(d, c, p, k) {
    var j = p.type;
    return j === gn ? g(d, c, p.props.children, k, p.key) : c !== null && (c.elementType === j || typeof j == "object" && j !== null && j.$$typeof === Tt && us(j) === c.type) ? (k = a(c, p.props), k.ref = Yn(d, c, p), k.return = d, k) : (k = da(p.type, p.key, p.props, null, d.mode, k), k.ref = Yn(d, c, p), k.return = d, k);
  }
  function f(d, c, p, k) {
    return c === null || c.tag !== 4 || c.stateNode.containerInfo !== p.containerInfo || c.stateNode.implementation !== p.implementation ? (c = Ni(p, d.mode, k), c.return = d, c) : (c = a(c, p.children || []), c.return = d, c);
  }
  function g(d, c, p, k, j) {
    return c === null || c.tag !== 7 ? (c = an(p, d.mode, k, j), c.return = d, c) : (c = a(c, p), c.return = d, c);
  }
  function v(d, c, p) {
    if (typeof c == "string" && c !== "" || typeof c == "number") return c = _i("" + c, d.mode, p), c.return = d, c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case $r:
          return p = da(c.type, c.key, c.props, null, d.mode, p), p.ref = Yn(d, null, c), p.return = d, p;
        case hn:
          return c = Ni(c, d.mode, p), c.return = d, c;
        case Tt:
          var k = c._init;
          return v(d, k(c._payload), p);
      }
      if (Zn(c) || Hn(c)) return c = an(c, d.mode, p, null), c.return = d, c;
      Yr(d, c);
    }
    return null;
  }
  function m(d, c, p, k) {
    var j = c !== null ? c.key : null;
    if (typeof p == "string" && p !== "" || typeof p == "number") return j !== null ? null : u(d, c, "" + p, k);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case $r:
          return p.key === j ? s(d, c, p, k) : null;
        case hn:
          return p.key === j ? f(d, c, p, k) : null;
        case Tt:
          return j = p._init, m(
            d,
            c,
            j(p._payload),
            k
          );
      }
      if (Zn(p) || Hn(p)) return j !== null ? null : g(d, c, p, k, null);
      Yr(d, p);
    }
    return null;
  }
  function x(d, c, p, k, j) {
    if (typeof k == "string" && k !== "" || typeof k == "number") return d = d.get(p) || null, u(c, d, "" + k, j);
    if (typeof k == "object" && k !== null) {
      switch (k.$$typeof) {
        case $r:
          return d = d.get(k.key === null ? p : k.key) || null, s(c, d, k, j);
        case hn:
          return d = d.get(k.key === null ? p : k.key) || null, f(c, d, k, j);
        case Tt:
          var N = k._init;
          return x(d, c, p, N(k._payload), j);
      }
      if (Zn(k) || Hn(k)) return d = d.get(p) || null, g(c, d, k, j, null);
      Yr(c, k);
    }
    return null;
  }
  function C(d, c, p, k) {
    for (var j = null, N = null, _ = c, z = c = 0, h = null; _ !== null && z < p.length; z++) {
      _.index > z ? (h = _, _ = null) : h = _.sibling;
      var S = m(d, _, p[z], k);
      if (S === null) {
        _ === null && (_ = h);
        break;
      }
      e && _ && S.alternate === null && t(d, _), c = i(S, c, z), N === null ? j = S : N.sibling = S, N = S, _ = h;
    }
    if (z === p.length) return n(d, _), X && Jt(d, z), j;
    if (_ === null) {
      for (; z < p.length; z++) _ = v(d, p[z], k), _ !== null && (c = i(_, c, z), N === null ? j = _ : N.sibling = _, N = _);
      return X && Jt(d, z), j;
    }
    for (_ = r(d, _); z < p.length; z++) h = x(_, d, z, p[z], k), h !== null && (e && h.alternate !== null && _.delete(h.key === null ? z : h.key), c = i(h, c, z), N === null ? j = h : N.sibling = h, N = h);
    return e && _.forEach(function($) {
      return t(d, $);
    }), X && Jt(d, z), j;
  }
  function y(d, c, p, k) {
    var j = Hn(p);
    if (typeof j != "function") throw Error(E(150));
    if (p = j.call(p), p == null) throw Error(E(151));
    for (var N = j = null, _ = c, z = c = 0, h = null, S = p.next(); _ !== null && !S.done; z++, S = p.next()) {
      _.index > z ? (h = _, _ = null) : h = _.sibling;
      var $ = m(d, _, S.value, k);
      if ($ === null) {
        _ === null && (_ = h);
        break;
      }
      e && _ && $.alternate === null && t(d, _), c = i($, c, z), N === null ? j = $ : N.sibling = $, N = $, _ = h;
    }
    if (S.done) return n(
      d,
      _
    ), X && Jt(d, z), j;
    if (_ === null) {
      for (; !S.done; z++, S = p.next()) S = v(d, S.value, k), S !== null && (c = i(S, c, z), N === null ? j = S : N.sibling = S, N = S);
      return X && Jt(d, z), j;
    }
    for (_ = r(d, _); !S.done; z++, S = p.next()) S = x(_, d, z, S.value, k), S !== null && (e && S.alternate !== null && _.delete(S.key === null ? z : S.key), c = i(S, c, z), N === null ? j = S : N.sibling = S, N = S);
    return e && _.forEach(function(oe) {
      return t(d, oe);
    }), X && Jt(d, z), j;
  }
  function b(d, c, p, k) {
    if (typeof p == "object" && p !== null && p.type === gn && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case $r:
          e: {
            for (var j = p.key, N = c; N !== null; ) {
              if (N.key === j) {
                if (j = p.type, j === gn) {
                  if (N.tag === 7) {
                    n(d, N.sibling), c = a(N, p.props.children), c.return = d, d = c;
                    break e;
                  }
                } else if (N.elementType === j || typeof j == "object" && j !== null && j.$$typeof === Tt && us(j) === N.type) {
                  n(d, N.sibling), c = a(N, p.props), c.ref = Yn(d, N, p), c.return = d, d = c;
                  break e;
                }
                n(d, N);
                break;
              } else t(d, N);
              N = N.sibling;
            }
            p.type === gn ? (c = an(p.props.children, d.mode, k, p.key), c.return = d, d = c) : (k = da(p.type, p.key, p.props, null, d.mode, k), k.ref = Yn(d, c, p), k.return = d, d = k);
          }
          return l(d);
        case hn:
          e: {
            for (N = p.key; c !== null; ) {
              if (c.key === N) if (c.tag === 4 && c.stateNode.containerInfo === p.containerInfo && c.stateNode.implementation === p.implementation) {
                n(d, c.sibling), c = a(c, p.children || []), c.return = d, d = c;
                break e;
              } else {
                n(d, c);
                break;
              }
              else t(d, c);
              c = c.sibling;
            }
            c = Ni(p, d.mode, k), c.return = d, d = c;
          }
          return l(d);
        case Tt:
          return N = p._init, b(d, c, N(p._payload), k);
      }
      if (Zn(p)) return C(d, c, p, k);
      if (Hn(p)) return y(d, c, p, k);
      Yr(d, p);
    }
    return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, c !== null && c.tag === 6 ? (n(d, c.sibling), c = a(c, p), c.return = d, d = c) : (n(d, c), c = _i(p, d.mode, k), c.return = d, d = c), l(d)) : n(d, c);
  }
  return b;
}
var An = nc(!0), rc = nc(!1), Na = Qt(null), Ea = null, Cn = null, Ko = null;
function Xo() {
  Ko = Cn = Ea = null;
}
function Jo(e) {
  var t = Na.current;
  K(Na), e._currentValue = t;
}
function ao(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Tn(e, t) {
  Ea = e, Ko = Cn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (ze = !0), e.firstContext = null);
}
function We(e) {
  var t = e._currentValue;
  if (Ko !== e) if (e = { context: e, memoizedValue: t, next: null }, Cn === null) {
    if (Ea === null) throw Error(E(308));
    Cn = e, Ea.dependencies = { lanes: 0, firstContext: e };
  } else Cn = Cn.next = e;
  return t;
}
var tn = null;
function Zo(e) {
  tn === null ? tn = [e] : tn.push(e);
}
function ac(e, t, n, r) {
  var a = t.interleaved;
  return a === null ? (n.next = n, Zo(t)) : (n.next = a.next, a.next = n), t.interleaved = n, St(e, r);
}
function St(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var bt = !1;
function el(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function ic(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function wt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Bt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, H & 2) {
    var a = r.pending;
    return a === null ? t.next = t : (t.next = a.next, a.next = t), r.pending = t, St(e, n);
  }
  return a = r.interleaved, a === null ? (t.next = t, Zo(r)) : (t.next = a.next, a.next = t), r.interleaved = t, St(e, n);
}
function ia(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Oo(e, n);
  }
}
function cs(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var a = null, i = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var l = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        i === null ? a = i = l : i = i.next = l, n = n.next;
      } while (n !== null);
      i === null ? a = i = t : i = i.next = t;
    } else a = i = t;
    n = { baseState: r.baseState, firstBaseUpdate: a, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function Pa(e, t, n, r) {
  var a = e.updateQueue;
  bt = !1;
  var i = a.firstBaseUpdate, l = a.lastBaseUpdate, u = a.shared.pending;
  if (u !== null) {
    a.shared.pending = null;
    var s = u, f = s.next;
    s.next = null, l === null ? i = f : l.next = f, l = s;
    var g = e.alternate;
    g !== null && (g = g.updateQueue, u = g.lastBaseUpdate, u !== l && (u === null ? g.firstBaseUpdate = f : u.next = f, g.lastBaseUpdate = s));
  }
  if (i !== null) {
    var v = a.baseState;
    l = 0, g = f = s = null, u = i;
    do {
      var m = u.lane, x = u.eventTime;
      if ((r & m) === m) {
        g !== null && (g = g.next = {
          eventTime: x,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var C = e, y = u;
          switch (m = t, x = n, y.tag) {
            case 1:
              if (C = y.payload, typeof C == "function") {
                v = C.call(x, v, m);
                break e;
              }
              v = C;
              break e;
            case 3:
              C.flags = C.flags & -65537 | 128;
            case 0:
              if (C = y.payload, m = typeof C == "function" ? C.call(x, v, m) : C, m == null) break e;
              v = ne({}, v, m);
              break e;
            case 2:
              bt = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, m = a.effects, m === null ? a.effects = [u] : m.push(u));
      } else x = { eventTime: x, lane: m, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, g === null ? (f = g = x, s = v) : g = g.next = x, l |= m;
      if (u = u.next, u === null) {
        if (u = a.shared.pending, u === null) break;
        m = u, u = m.next, m.next = null, a.lastBaseUpdate = m, a.shared.pending = null;
      }
    } while (!0);
    if (g === null && (s = v), a.baseState = s, a.firstBaseUpdate = f, a.lastBaseUpdate = g, t = a.shared.interleaved, t !== null) {
      a = t;
      do
        l |= a.lane, a = a.next;
      while (a !== t);
    } else i === null && (a.shared.lanes = 0);
    un |= l, e.lanes = l, e.memoizedState = v;
  }
}
function ds(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], a = r.callback;
    if (a !== null) {
      if (r.callback = null, r = n, typeof a != "function") throw Error(E(191, a));
      a.call(r);
    }
  }
}
var Ir = {}, ct = Qt(Ir), Sr = Qt(Ir), Cr = Qt(Ir);
function nn(e) {
  if (e === Ir) throw Error(E(174));
  return e;
}
function tl(e, t) {
  switch (Q(Cr, t), Q(Sr, e), Q(ct, Ir), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : $i(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = $i(t, e);
  }
  K(ct), Q(ct, t);
}
function Dn() {
  K(ct), K(Sr), K(Cr);
}
function oc(e) {
  nn(Cr.current);
  var t = nn(ct.current), n = $i(t, e.type);
  t !== n && (Q(Sr, e), Q(ct, n));
}
function nl(e) {
  Sr.current === e && (K(ct), K(Sr));
}
var ee = Qt(0);
function za(e) {
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
var xi = [];
function rl() {
  for (var e = 0; e < xi.length; e++) xi[e]._workInProgressVersionPrimary = null;
  xi.length = 0;
}
var oa = _t.ReactCurrentDispatcher, wi = _t.ReactCurrentBatchConfig, sn = 0, te = null, se = null, de = null, Ma = !1, lr = !1, _r = 0, gp = 0;
function xe() {
  throw Error(E(321));
}
function al(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!nt(e[n], t[n])) return !1;
  return !0;
}
function il(e, t, n, r, a, i) {
  if (sn = i, te = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, oa.current = e === null || e.memoizedState === null ? wp : kp, e = n(r, a), lr) {
    i = 0;
    do {
      if (lr = !1, _r = 0, 25 <= i) throw Error(E(301));
      i += 1, de = se = null, t.updateQueue = null, oa.current = jp, e = n(r, a);
    } while (lr);
  }
  if (oa.current = Ta, t = se !== null && se.next !== null, sn = 0, de = se = te = null, Ma = !1, t) throw Error(E(300));
  return e;
}
function ol() {
  var e = _r !== 0;
  return _r = 0, e;
}
function lt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return de === null ? te.memoizedState = de = e : de = de.next = e, de;
}
function Qe() {
  if (se === null) {
    var e = te.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = se.next;
  var t = de === null ? te.memoizedState : de.next;
  if (t !== null) de = t, se = e;
  else {
    if (e === null) throw Error(E(310));
    se = e, e = { memoizedState: se.memoizedState, baseState: se.baseState, baseQueue: se.baseQueue, queue: se.queue, next: null }, de === null ? te.memoizedState = de = e : de = de.next = e;
  }
  return de;
}
function Nr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ki(e) {
  var t = Qe(), n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = se, a = r.baseQueue, i = n.pending;
  if (i !== null) {
    if (a !== null) {
      var l = a.next;
      a.next = i.next, i.next = l;
    }
    r.baseQueue = a = i, n.pending = null;
  }
  if (a !== null) {
    i = a.next, r = r.baseState;
    var u = l = null, s = null, f = i;
    do {
      var g = f.lane;
      if ((sn & g) === g) s !== null && (s = s.next = { lane: 0, action: f.action, hasEagerState: f.hasEagerState, eagerState: f.eagerState, next: null }), r = f.hasEagerState ? f.eagerState : e(r, f.action);
      else {
        var v = {
          lane: g,
          action: f.action,
          hasEagerState: f.hasEagerState,
          eagerState: f.eagerState,
          next: null
        };
        s === null ? (u = s = v, l = r) : s = s.next = v, te.lanes |= g, un |= g;
      }
      f = f.next;
    } while (f !== null && f !== i);
    s === null ? l = r : s.next = u, nt(r, t.memoizedState) || (ze = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = s, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    a = e;
    do
      i = a.lane, te.lanes |= i, un |= i, a = a.next;
    while (a !== e);
  } else a === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ji(e) {
  var t = Qe(), n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, a = n.pending, i = t.memoizedState;
  if (a !== null) {
    n.pending = null;
    var l = a = a.next;
    do
      i = e(i, l.action), l = l.next;
    while (l !== a);
    nt(i, t.memoizedState) || (ze = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function lc() {
}
function sc(e, t) {
  var n = te, r = Qe(), a = t(), i = !nt(r.memoizedState, a);
  if (i && (r.memoizedState = a, ze = !0), r = r.queue, ll(dc.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || de !== null && de.memoizedState.tag & 1) {
    if (n.flags |= 2048, Er(9, cc.bind(null, n, r, a, t), void 0, null), fe === null) throw Error(E(349));
    sn & 30 || uc(n, t, a);
  }
  return a;
}
function uc(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = te.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, te.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function cc(e, t, n, r) {
  t.value = n, t.getSnapshot = r, fc(t) && pc(e);
}
function dc(e, t, n) {
  return n(function() {
    fc(t) && pc(e);
  });
}
function fc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !nt(e, n);
  } catch {
    return !0;
  }
}
function pc(e) {
  var t = St(e, 1);
  t !== null && tt(t, e, 1, -1);
}
function fs(e) {
  var t = lt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Nr, lastRenderedState: e }, t.queue = e, e = e.dispatch = xp.bind(null, te, e), [t.memoizedState, e];
}
function Er(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = te.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, te.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function mc() {
  return Qe().memoizedState;
}
function la(e, t, n, r) {
  var a = lt();
  te.flags |= e, a.memoizedState = Er(1 | t, n, void 0, r === void 0 ? null : r);
}
function qa(e, t, n, r) {
  var a = Qe();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (se !== null) {
    var l = se.memoizedState;
    if (i = l.destroy, r !== null && al(r, l.deps)) {
      a.memoizedState = Er(t, n, i, r);
      return;
    }
  }
  te.flags |= e, a.memoizedState = Er(1 | t, n, i, r);
}
function ps(e, t) {
  return la(8390656, 8, e, t);
}
function ll(e, t) {
  return qa(2048, 8, e, t);
}
function hc(e, t) {
  return qa(4, 2, e, t);
}
function gc(e, t) {
  return qa(4, 4, e, t);
}
function vc(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function yc(e, t, n) {
  return n = n != null ? n.concat([e]) : null, qa(4, 4, vc.bind(null, t, e), n);
}
function sl() {
}
function xc(e, t) {
  var n = Qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && al(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function wc(e, t) {
  var n = Qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && al(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function kc(e, t, n) {
  return sn & 21 ? (nt(n, t) || (n = Nu(), te.lanes |= n, un |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, ze = !0), e.memoizedState = n);
}
function vp(e, t) {
  var n = W;
  W = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = wi.transition;
  wi.transition = {};
  try {
    e(!1), t();
  } finally {
    W = n, wi.transition = r;
  }
}
function jc() {
  return Qe().memoizedState;
}
function yp(e, t, n) {
  var r = Vt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Sc(e)) Cc(t, n);
  else if (n = ac(e, t, n, r), n !== null) {
    var a = _e();
    tt(n, e, r, a), _c(n, t, r);
  }
}
function xp(e, t, n) {
  var r = Vt(e), a = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Sc(e)) Cc(t, a);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var l = t.lastRenderedState, u = i(l, n);
      if (a.hasEagerState = !0, a.eagerState = u, nt(u, l)) {
        var s = t.interleaved;
        s === null ? (a.next = a, Zo(t)) : (a.next = s.next, s.next = a), t.interleaved = a;
        return;
      }
    } catch {
    } finally {
    }
    n = ac(e, t, a, r), n !== null && (a = _e(), tt(n, e, r, a), _c(n, t, r));
  }
}
function Sc(e) {
  var t = e.alternate;
  return e === te || t !== null && t === te;
}
function Cc(e, t) {
  lr = Ma = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function _c(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Oo(e, n);
  }
}
var Ta = { readContext: We, useCallback: xe, useContext: xe, useEffect: xe, useImperativeHandle: xe, useInsertionEffect: xe, useLayoutEffect: xe, useMemo: xe, useReducer: xe, useRef: xe, useState: xe, useDebugValue: xe, useDeferredValue: xe, useTransition: xe, useMutableSource: xe, useSyncExternalStore: xe, useId: xe, unstable_isNewReconciler: !1 }, wp = { readContext: We, useCallback: function(e, t) {
  return lt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: We, useEffect: ps, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, la(
    4194308,
    4,
    vc.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return la(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return la(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = lt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = lt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = yp.bind(null, te, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = lt();
  return e = { current: e }, t.memoizedState = e;
}, useState: fs, useDebugValue: sl, useDeferredValue: function(e) {
  return lt().memoizedState = e;
}, useTransition: function() {
  var e = fs(!1), t = e[0];
  return e = vp.bind(null, e[1]), lt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = te, a = lt();
  if (X) {
    if (n === void 0) throw Error(E(407));
    n = n();
  } else {
    if (n = t(), fe === null) throw Error(E(349));
    sn & 30 || uc(r, t, n);
  }
  a.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return a.queue = i, ps(dc.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, Er(9, cc.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = lt(), t = fe.identifierPrefix;
  if (X) {
    var n = xt, r = yt;
    n = (r & ~(1 << 32 - et(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = _r++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = gp++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, kp = {
  readContext: We,
  useCallback: xc,
  useContext: We,
  useEffect: ll,
  useImperativeHandle: yc,
  useInsertionEffect: hc,
  useLayoutEffect: gc,
  useMemo: wc,
  useReducer: ki,
  useRef: mc,
  useState: function() {
    return ki(Nr);
  },
  useDebugValue: sl,
  useDeferredValue: function(e) {
    var t = Qe();
    return kc(t, se.memoizedState, e);
  },
  useTransition: function() {
    var e = ki(Nr)[0], t = Qe().memoizedState;
    return [e, t];
  },
  useMutableSource: lc,
  useSyncExternalStore: sc,
  useId: jc,
  unstable_isNewReconciler: !1
}, jp = { readContext: We, useCallback: xc, useContext: We, useEffect: ll, useImperativeHandle: yc, useInsertionEffect: hc, useLayoutEffect: gc, useMemo: wc, useReducer: ji, useRef: mc, useState: function() {
  return ji(Nr);
}, useDebugValue: sl, useDeferredValue: function(e) {
  var t = Qe();
  return se === null ? t.memoizedState = e : kc(t, se.memoizedState, e);
}, useTransition: function() {
  var e = ji(Nr)[0], t = Qe().memoizedState;
  return [e, t];
}, useMutableSource: lc, useSyncExternalStore: sc, useId: jc, unstable_isNewReconciler: !1 };
function Xe(e, t) {
  if (e && e.defaultProps) {
    t = ne({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function io(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : ne({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ga = { isMounted: function(e) {
  return (e = e._reactInternals) ? fn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = _e(), a = Vt(e), i = wt(r, a);
  i.payload = t, n != null && (i.callback = n), t = Bt(e, i, a), t !== null && (tt(t, e, a, r), ia(t, e, a));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = _e(), a = Vt(e), i = wt(r, a);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Bt(e, i, a), t !== null && (tt(t, e, a, r), ia(t, e, a));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = _e(), r = Vt(e), a = wt(n, r);
  a.tag = 2, t != null && (a.callback = t), t = Bt(e, a, r), t !== null && (tt(t, e, r, n), ia(t, e, r));
} };
function ms(e, t, n, r, a, i, l) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, l) : t.prototype && t.prototype.isPureReactComponent ? !xr(n, r) || !xr(a, i) : !0;
}
function Nc(e, t, n) {
  var r = !1, a = Gt, i = t.contextType;
  return typeof i == "object" && i !== null ? i = We(i) : (a = Te(t) ? on : je.current, r = t.contextTypes, i = (r = r != null) ? Rn(e, a) : Gt), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ga, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function hs(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ga.enqueueReplaceState(t, t.state, null);
}
function oo(e, t, n, r) {
  var a = e.stateNode;
  a.props = n, a.state = e.memoizedState, a.refs = {}, el(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? a.context = We(i) : (i = Te(t) ? on : je.current, a.context = Rn(e, i)), a.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (io(e, t, i, n), a.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (t = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), t !== a.state && Ga.enqueueReplaceState(a, a.state, null), Pa(e, n, a, r), a.state = e.memoizedState), typeof a.componentDidMount == "function" && (e.flags |= 4194308);
}
function $n(e, t) {
  try {
    var n = "", r = t;
    do
      n += Yd(r), r = r.return;
    while (r);
    var a = n;
  } catch (i) {
    a = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: a, digest: null };
}
function Si(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function lo(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Sp = typeof WeakMap == "function" ? WeakMap : Map;
function Ec(e, t, n) {
  n = wt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    La || (La = !0, yo = r), lo(e, t);
  }, n;
}
function Pc(e, t, n) {
  n = wt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var a = t.value;
    n.payload = function() {
      return r(a);
    }, n.callback = function() {
      lo(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    lo(e, t), typeof r != "function" && (Ut === null ? Ut = /* @__PURE__ */ new Set([this]) : Ut.add(this));
    var l = t.stack;
    this.componentDidCatch(t.value, { componentStack: l !== null ? l : "" });
  }), n;
}
function gs(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Sp();
    var a = /* @__PURE__ */ new Set();
    r.set(t, a);
  } else a = r.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), r.set(t, a));
  a.has(n) || (a.add(n), e = Dp.bind(null, e, t, n), t.then(e, e));
}
function vs(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ys(e, t, n, r, a) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = a, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = wt(-1, 1), t.tag = 2, Bt(n, t, 1))), n.lanes |= 1), e);
}
var Cp = _t.ReactCurrentOwner, ze = !1;
function Ce(e, t, n, r) {
  t.child = e === null ? rc(t, null, n, r) : An(t, e.child, n, r);
}
function xs(e, t, n, r, a) {
  n = n.render;
  var i = t.ref;
  return Tn(t, a), r = il(e, t, n, r, i, a), n = ol(), e !== null && !ze ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Ct(e, t, a)) : (X && n && Wo(t), t.flags |= 1, Ce(e, t, r, a), t.child);
}
function ws(e, t, n, r, a) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !gl(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, zc(e, t, i, r, a)) : (e = da(n.type, null, r, t, t.mode, a), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & a)) {
    var l = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : xr, n(l, r) && e.ref === t.ref) return Ct(e, t, a);
  }
  return t.flags |= 1, e = Ht(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function zc(e, t, n, r, a) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (xr(i, r) && e.ref === t.ref) if (ze = !1, t.pendingProps = r = i, (e.lanes & a) !== 0) e.flags & 131072 && (ze = !0);
    else return t.lanes = e.lanes, Ct(e, t, a);
  }
  return so(e, t, n, r, a);
}
function Mc(e, t, n) {
  var r = t.pendingProps, a = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Q(Nn, Ae), Ae |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Q(Nn, Ae), Ae |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, Q(Nn, Ae), Ae |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, Q(Nn, Ae), Ae |= r;
  return Ce(e, t, a, n), t.child;
}
function Tc(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function so(e, t, n, r, a) {
  var i = Te(n) ? on : je.current;
  return i = Rn(t, i), Tn(t, a), n = il(e, t, n, r, i, a), r = ol(), e !== null && !ze ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Ct(e, t, a)) : (X && r && Wo(t), t.flags |= 1, Ce(e, t, n, a), t.child);
}
function ks(e, t, n, r, a) {
  if (Te(n)) {
    var i = !0;
    Sa(t);
  } else i = !1;
  if (Tn(t, a), t.stateNode === null) sa(e, t), Nc(t, n, r), oo(t, n, r, a), r = !0;
  else if (e === null) {
    var l = t.stateNode, u = t.memoizedProps;
    l.props = u;
    var s = l.context, f = n.contextType;
    typeof f == "object" && f !== null ? f = We(f) : (f = Te(n) ? on : je.current, f = Rn(t, f));
    var g = n.getDerivedStateFromProps, v = typeof g == "function" || typeof l.getSnapshotBeforeUpdate == "function";
    v || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (u !== r || s !== f) && hs(t, l, r, f), bt = !1;
    var m = t.memoizedState;
    l.state = m, Pa(t, r, l, a), s = t.memoizedState, u !== r || m !== s || Me.current || bt ? (typeof g == "function" && (io(t, n, g, r), s = t.memoizedState), (u = bt || ms(t, n, u, r, m, s, f)) ? (v || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), l.props = r, l.state = s, l.context = f, r = u) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    l = t.stateNode, ic(e, t), u = t.memoizedProps, f = t.type === t.elementType ? u : Xe(t.type, u), l.props = f, v = t.pendingProps, m = l.context, s = n.contextType, typeof s == "object" && s !== null ? s = We(s) : (s = Te(n) ? on : je.current, s = Rn(t, s));
    var x = n.getDerivedStateFromProps;
    (g = typeof x == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (u !== v || m !== s) && hs(t, l, r, s), bt = !1, m = t.memoizedState, l.state = m, Pa(t, r, l, a);
    var C = t.memoizedState;
    u !== v || m !== C || Me.current || bt ? (typeof x == "function" && (io(t, n, x, r), C = t.memoizedState), (f = bt || ms(t, n, f, r, m, C, s) || !1) ? (g || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, C, s), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, C, s)), typeof l.componentDidUpdate == "function" && (t.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = C), l.props = r, l.state = C, l.context = s, r = f) : (typeof l.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return uo(e, t, n, r, i, a);
}
function uo(e, t, n, r, a, i) {
  Tc(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return a && os(t, n, !1), Ct(e, t, i);
  r = t.stateNode, Cp.current = t;
  var u = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && l ? (t.child = An(t, e.child, null, i), t.child = An(t, null, u, i)) : Ce(e, t, u, i), t.memoizedState = r.state, a && os(t, n, !0), t.child;
}
function bc(e) {
  var t = e.stateNode;
  t.pendingContext ? is(e, t.pendingContext, t.pendingContext !== t.context) : t.context && is(e, t.context, !1), tl(e, t.containerInfo);
}
function js(e, t, n, r, a) {
  return In(), Yo(a), t.flags |= 256, Ce(e, t, n, r), t.child;
}
var co = { dehydrated: null, treeContext: null, retryLane: 0 };
function fo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Lc(e, t, n) {
  var r = t.pendingProps, a = ee.current, i = !1, l = (t.flags & 128) !== 0, u;
  if ((u = l) || (u = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0), u ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (a |= 1), Q(ee, a & 1), e === null)
    return ro(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (l = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, l = { mode: "hidden", children: l }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = l) : i = Ya(l, r, 0, null), e = an(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = fo(n), t.memoizedState = co, e) : ul(t, l));
  if (a = e.memoizedState, a !== null && (u = a.dehydrated, u !== null)) return _p(e, t, l, r, u, a, n);
  if (i) {
    i = r.fallback, l = t.mode, a = e.child, u = a.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(l & 1) && t.child !== a ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = Ht(a, s), r.subtreeFlags = a.subtreeFlags & 14680064), u !== null ? i = Ht(u, i) : (i = an(i, l, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, l = e.child.memoizedState, l = l === null ? fo(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }, i.memoizedState = l, i.childLanes = e.childLanes & ~n, t.memoizedState = co, r;
  }
  return i = e.child, e = i.sibling, r = Ht(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function ul(e, t) {
  return t = Ya({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Kr(e, t, n, r) {
  return r !== null && Yo(r), An(t, e.child, null, n), e = ul(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function _p(e, t, n, r, a, i, l) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Si(Error(E(422))), Kr(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, a = t.mode, r = Ya({ mode: "visible", children: r.children }, a, 0, null), i = an(i, a, l, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && An(t, e.child, null, l), t.child.memoizedState = fo(l), t.memoizedState = co, i);
  if (!(t.mode & 1)) return Kr(e, t, l, null);
  if (a.data === "$!") {
    if (r = a.nextSibling && a.nextSibling.dataset, r) var u = r.dgst;
    return r = u, i = Error(E(419)), r = Si(i, r, void 0), Kr(e, t, l, r);
  }
  if (u = (l & e.childLanes) !== 0, ze || u) {
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
      a = a & (r.suspendedLanes | l) ? 0 : a, a !== 0 && a !== i.retryLane && (i.retryLane = a, St(e, a), tt(r, e, a, -1));
    }
    return hl(), r = Si(Error(E(421))), Kr(e, t, l, r);
  }
  return a.data === "$?" ? (t.flags |= 128, t.child = e.child, t = $p.bind(null, e), a._reactRetry = t, null) : (e = i.treeContext, De = Ft(a.nextSibling), $e = t, X = !0, Ze = null, e !== null && (Ve[He++] = yt, Ve[He++] = xt, Ve[He++] = ln, yt = e.id, xt = e.overflow, ln = t), t = ul(t, r.children), t.flags |= 4096, t);
}
function Ss(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ao(e.return, t, n);
}
function Ci(e, t, n, r, a) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: a } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = a);
}
function Rc(e, t, n) {
  var r = t.pendingProps, a = r.revealOrder, i = r.tail;
  if (Ce(e, t, r.children, n), r = ee.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Ss(e, n, t);
      else if (e.tag === 19) Ss(e, n, t);
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
  if (Q(ee, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (a) {
    case "forwards":
      for (n = t.child, a = null; n !== null; ) e = n.alternate, e !== null && za(e) === null && (a = n), n = n.sibling;
      n = a, n === null ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), Ci(t, !1, a, n, i);
      break;
    case "backwards":
      for (n = null, a = t.child, t.child = null; a !== null; ) {
        if (e = a.alternate, e !== null && za(e) === null) {
          t.child = a;
          break;
        }
        e = a.sibling, a.sibling = n, n = a, a = e;
      }
      Ci(t, !0, n, null, i);
      break;
    case "together":
      Ci(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function sa(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Ct(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), un |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(E(153));
  if (t.child !== null) {
    for (e = t.child, n = Ht(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Ht(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Np(e, t, n) {
  switch (t.tag) {
    case 3:
      bc(t), In();
      break;
    case 5:
      oc(t);
      break;
    case 1:
      Te(t.type) && Sa(t);
      break;
    case 4:
      tl(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, a = t.memoizedProps.value;
      Q(Na, r._currentValue), r._currentValue = a;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (Q(ee, ee.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Lc(e, t, n) : (Q(ee, ee.current & 1), e = Ct(e, t, n), e !== null ? e.sibling : null);
      Q(ee, ee.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Rc(e, t, n);
        t.flags |= 128;
      }
      if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), Q(ee, ee.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Mc(e, t, n);
  }
  return Ct(e, t, n);
}
var Ic, po, Ac, Dc;
Ic = function(e, t) {
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
po = function() {
};
Ac = function(e, t, n, r) {
  var a = e.memoizedProps;
  if (a !== r) {
    e = t.stateNode, nn(ct.current);
    var i = null;
    switch (n) {
      case "input":
        a = Ri(e, a), r = Ri(e, r), i = [];
        break;
      case "select":
        a = ne({}, a, { value: void 0 }), r = ne({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        a = Di(e, a), r = Di(e, r), i = [];
        break;
      default:
        typeof a.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ka);
    }
    Oi(n, r);
    var l;
    n = null;
    for (f in a) if (!r.hasOwnProperty(f) && a.hasOwnProperty(f) && a[f] != null) if (f === "style") {
      var u = a[f];
      for (l in u) u.hasOwnProperty(l) && (n || (n = {}), n[l] = "");
    } else f !== "dangerouslySetInnerHTML" && f !== "children" && f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && f !== "autoFocus" && (fr.hasOwnProperty(f) ? i || (i = []) : (i = i || []).push(f, null));
    for (f in r) {
      var s = r[f];
      if (u = a != null ? a[f] : void 0, r.hasOwnProperty(f) && s !== u && (s != null || u != null)) if (f === "style") if (u) {
        for (l in u) !u.hasOwnProperty(l) || s && s.hasOwnProperty(l) || (n || (n = {}), n[l] = "");
        for (l in s) s.hasOwnProperty(l) && u[l] !== s[l] && (n || (n = {}), n[l] = s[l]);
      } else n || (i || (i = []), i.push(
        f,
        n
      )), n = s;
      else f === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (i = i || []).push(f, s)) : f === "children" ? typeof s != "string" && typeof s != "number" || (i = i || []).push(f, "" + s) : f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && (fr.hasOwnProperty(f) ? (s != null && f === "onScroll" && Y("scroll", e), i || u === s || (i = [])) : (i = i || []).push(f, s));
    }
    n && (i = i || []).push("style", n);
    var f = i;
    (t.updateQueue = f) && (t.flags |= 4);
  }
};
Dc = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Kn(e, t) {
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
function we(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var a = e.child; a !== null; ) n |= a.lanes | a.childLanes, r |= a.subtreeFlags & 14680064, r |= a.flags & 14680064, a.return = e, a = a.sibling;
  else for (a = e.child; a !== null; ) n |= a.lanes | a.childLanes, r |= a.subtreeFlags, r |= a.flags, a.return = e, a = a.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Ep(e, t, n) {
  var r = t.pendingProps;
  switch (Qo(t), t.tag) {
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
      return we(t), null;
    case 1:
      return Te(t.type) && ja(), we(t), null;
    case 3:
      return r = t.stateNode, Dn(), K(Me), K(je), rl(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Qr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ze !== null && (ko(Ze), Ze = null))), po(e, t), we(t), null;
    case 5:
      nl(t);
      var a = nn(Cr.current);
      if (n = t.type, e !== null && t.stateNode != null) Ac(e, t, n, r, a), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(E(166));
          return we(t), null;
        }
        if (e = nn(ct.current), Qr(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[st] = t, r[jr] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              Y("cancel", r), Y("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Y("load", r);
              break;
            case "video":
            case "audio":
              for (a = 0; a < tr.length; a++) Y(tr[a], r);
              break;
            case "source":
              Y("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Y(
                "error",
                r
              ), Y("load", r);
              break;
            case "details":
              Y("toggle", r);
              break;
            case "input":
              bl(r, i), Y("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, Y("invalid", r);
              break;
            case "textarea":
              Rl(r, i), Y("invalid", r);
          }
          Oi(n, i), a = null;
          for (var l in i) if (i.hasOwnProperty(l)) {
            var u = i[l];
            l === "children" ? typeof u == "string" ? r.textContent !== u && (i.suppressHydrationWarning !== !0 && Wr(r.textContent, u, e), a = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (i.suppressHydrationWarning !== !0 && Wr(
              r.textContent,
              u,
              e
            ), a = ["children", "" + u]) : fr.hasOwnProperty(l) && u != null && l === "onScroll" && Y("scroll", r);
          }
          switch (n) {
            case "input":
              Or(r), Ll(r, i, !0);
              break;
            case "textarea":
              Or(r), Il(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = ka);
          }
          r = a, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          l = a.nodeType === 9 ? a : a.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = du(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, { is: r.is }) : (e = l.createElement(n), n === "select" && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[st] = t, e[jr] = r, Ic(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (l = Fi(n, r), n) {
              case "dialog":
                Y("cancel", e), Y("close", e), a = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                Y("load", e), a = r;
                break;
              case "video":
              case "audio":
                for (a = 0; a < tr.length; a++) Y(tr[a], e);
                a = r;
                break;
              case "source":
                Y("error", e), a = r;
                break;
              case "img":
              case "image":
              case "link":
                Y(
                  "error",
                  e
                ), Y("load", e), a = r;
                break;
              case "details":
                Y("toggle", e), a = r;
                break;
              case "input":
                bl(e, r), a = Ri(e, r), Y("invalid", e);
                break;
              case "option":
                a = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, a = ne({}, r, { value: void 0 }), Y("invalid", e);
                break;
              case "textarea":
                Rl(e, r), a = Di(e, r), Y("invalid", e);
                break;
              default:
                a = r;
            }
            Oi(n, a), u = a;
            for (i in u) if (u.hasOwnProperty(i)) {
              var s = u[i];
              i === "style" ? mu(e, s) : i === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && fu(e, s)) : i === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && pr(e, s) : typeof s == "number" && pr(e, "" + s) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (fr.hasOwnProperty(i) ? s != null && i === "onScroll" && Y("scroll", e) : s != null && Lo(e, i, s, l));
            }
            switch (n) {
              case "input":
                Or(e), Ll(e, r, !1);
                break;
              case "textarea":
                Or(e), Il(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + qt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? En(e, !!r.multiple, i, !1) : r.defaultValue != null && En(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof a.onClick == "function" && (e.onclick = ka);
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
      return we(t), null;
    case 6:
      if (e && t.stateNode != null) Dc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(E(166));
        if (n = nn(Cr.current), nn(ct.current), Qr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[st] = t, (i = r.nodeValue !== n) && (e = $e, e !== null)) switch (e.tag) {
            case 3:
              Wr(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Wr(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[st] = t, t.stateNode = r;
      }
      return we(t), null;
    case 13:
      if (K(ee), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (X && De !== null && t.mode & 1 && !(t.flags & 128)) tc(), In(), t.flags |= 98560, i = !1;
        else if (i = Qr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(E(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(E(317));
            i[st] = t;
          } else In(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          we(t), i = !1;
        } else Ze !== null && (ko(Ze), Ze = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ee.current & 1 ? ue === 0 && (ue = 3) : hl())), t.updateQueue !== null && (t.flags |= 4), we(t), null);
    case 4:
      return Dn(), po(e, t), e === null && wr(t.stateNode.containerInfo), we(t), null;
    case 10:
      return Jo(t.type._context), we(t), null;
    case 17:
      return Te(t.type) && ja(), we(t), null;
    case 19:
      if (K(ee), i = t.memoizedState, i === null) return we(t), null;
      if (r = (t.flags & 128) !== 0, l = i.rendering, l === null) if (r) Kn(i, !1);
      else {
        if (ue !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (l = za(e), l !== null) {
            for (t.flags |= 128, Kn(i, !1), r = l.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, l = i.alternate, l === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = l.childLanes, i.lanes = l.lanes, i.child = l.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = l.memoizedProps, i.memoizedState = l.memoizedState, i.updateQueue = l.updateQueue, i.type = l.type, e = l.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return Q(ee, ee.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && ie() > On && (t.flags |= 128, r = !0, Kn(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = za(l), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Kn(i, !0), i.tail === null && i.tailMode === "hidden" && !l.alternate && !X) return we(t), null;
        } else 2 * ie() - i.renderingStartTime > On && n !== 1073741824 && (t.flags |= 128, r = !0, Kn(i, !1), t.lanes = 4194304);
        i.isBackwards ? (l.sibling = t.child, t.child = l) : (n = i.last, n !== null ? n.sibling = l : t.child = l, i.last = l);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = ie(), t.sibling = null, n = ee.current, Q(ee, r ? n & 1 | 2 : n & 1), t) : (we(t), null);
    case 22:
    case 23:
      return ml(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ae & 1073741824 && (we(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : we(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(E(156, t.tag));
}
function Pp(e, t) {
  switch (Qo(t), t.tag) {
    case 1:
      return Te(t.type) && ja(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Dn(), K(Me), K(je), rl(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return nl(t), null;
    case 13:
      if (K(ee), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(E(340));
        In();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return K(ee), null;
    case 4:
      return Dn(), null;
    case 10:
      return Jo(t.type._context), null;
    case 22:
    case 23:
      return ml(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Xr = !1, ke = !1, zp = typeof WeakSet == "function" ? WeakSet : Set, T = null;
function _n(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    ae(e, t, r);
  }
  else n.current = null;
}
function mo(e, t, n) {
  try {
    n();
  } catch (r) {
    ae(e, t, r);
  }
}
var Cs = !1;
function Mp(e, t) {
  if (Ki = ya, e = Uu(), Go(e)) {
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
        var l = 0, u = -1, s = -1, f = 0, g = 0, v = e, m = null;
        t: for (; ; ) {
          for (var x; v !== n || a !== 0 && v.nodeType !== 3 || (u = l + a), v !== i || r !== 0 && v.nodeType !== 3 || (s = l + r), v.nodeType === 3 && (l += v.nodeValue.length), (x = v.firstChild) !== null; )
            m = v, v = x;
          for (; ; ) {
            if (v === e) break t;
            if (m === n && ++f === a && (u = l), m === i && ++g === r && (s = l), (x = v.nextSibling) !== null) break;
            v = m, m = v.parentNode;
          }
          v = x;
        }
        n = u === -1 || s === -1 ? null : { start: u, end: s };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Xi = { focusedElem: e, selectionRange: n }, ya = !1, T = t; T !== null; ) if (t = T, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, T = e;
  else for (; T !== null; ) {
    t = T;
    try {
      var C = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (C !== null) {
            var y = C.memoizedProps, b = C.memoizedState, d = t.stateNode, c = d.getSnapshotBeforeUpdate(t.elementType === t.type ? y : Xe(t.type, y), b);
            d.__reactInternalSnapshotBeforeUpdate = c;
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
          throw Error(E(163));
      }
    } catch (k) {
      ae(t, t.return, k);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, T = e;
      break;
    }
    T = t.return;
  }
  return C = Cs, Cs = !1, C;
}
function sr(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var a = r = r.next;
    do {
      if ((a.tag & e) === e) {
        var i = a.destroy;
        a.destroy = void 0, i !== void 0 && mo(t, n, i);
      }
      a = a.next;
    } while (a !== r);
  }
}
function Wa(e, t) {
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
function ho(e) {
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
function $c(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, $c(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[st], delete t[jr], delete t[eo], delete t[fp], delete t[pp])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Oc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function _s(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Oc(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function go(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = ka));
  else if (r !== 4 && (e = e.child, e !== null)) for (go(e, t, n), e = e.sibling; e !== null; ) go(e, t, n), e = e.sibling;
}
function vo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (vo(e, t, n), e = e.sibling; e !== null; ) vo(e, t, n), e = e.sibling;
}
var he = null, Je = !1;
function Mt(e, t, n) {
  for (n = n.child; n !== null; ) Fc(e, t, n), n = n.sibling;
}
function Fc(e, t, n) {
  if (ut && typeof ut.onCommitFiberUnmount == "function") try {
    ut.onCommitFiberUnmount(Oa, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      ke || _n(n, t);
    case 6:
      var r = he, a = Je;
      he = null, Mt(e, t, n), he = r, Je = a, he !== null && (Je ? (e = he, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : he.removeChild(n.stateNode));
      break;
    case 18:
      he !== null && (Je ? (e = he, n = n.stateNode, e.nodeType === 8 ? vi(e.parentNode, n) : e.nodeType === 1 && vi(e, n), vr(e)) : vi(he, n.stateNode));
      break;
    case 4:
      r = he, a = Je, he = n.stateNode.containerInfo, Je = !0, Mt(e, t, n), he = r, Je = a;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ke && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        a = r = r.next;
        do {
          var i = a, l = i.destroy;
          i = i.tag, l !== void 0 && (i & 2 || i & 4) && mo(n, t, l), a = a.next;
        } while (a !== r);
      }
      Mt(e, t, n);
      break;
    case 1:
      if (!ke && (_n(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (u) {
        ae(n, t, u);
      }
      Mt(e, t, n);
      break;
    case 21:
      Mt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (ke = (r = ke) || n.memoizedState !== null, Mt(e, t, n), ke = r) : Mt(e, t, n);
      break;
    default:
      Mt(e, t, n);
  }
}
function Ns(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new zp()), t.forEach(function(r) {
      var a = Op.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(a, a));
    });
  }
}
function Ke(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var a = n[r];
    try {
      var i = e, l = t, u = l;
      e: for (; u !== null; ) {
        switch (u.tag) {
          case 5:
            he = u.stateNode, Je = !1;
            break e;
          case 3:
            he = u.stateNode.containerInfo, Je = !0;
            break e;
          case 4:
            he = u.stateNode.containerInfo, Je = !0;
            break e;
        }
        u = u.return;
      }
      if (he === null) throw Error(E(160));
      Fc(i, l, a), he = null, Je = !1;
      var s = a.alternate;
      s !== null && (s.return = null), a.return = null;
    } catch (f) {
      ae(a, t, f);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Bc(t, e), t = t.sibling;
}
function Bc(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Ke(t, e), ot(e), r & 4) {
        try {
          sr(3, e, e.return), Wa(3, e);
        } catch (y) {
          ae(e, e.return, y);
        }
        try {
          sr(5, e, e.return);
        } catch (y) {
          ae(e, e.return, y);
        }
      }
      break;
    case 1:
      Ke(t, e), ot(e), r & 512 && n !== null && _n(n, n.return);
      break;
    case 5:
      if (Ke(t, e), ot(e), r & 512 && n !== null && _n(n, n.return), e.flags & 32) {
        var a = e.stateNode;
        try {
          pr(a, "");
        } catch (y) {
          ae(e, e.return, y);
        }
      }
      if (r & 4 && (a = e.stateNode, a != null)) {
        var i = e.memoizedProps, l = n !== null ? n.memoizedProps : i, u = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null) try {
          u === "input" && i.type === "radio" && i.name != null && uu(a, i), Fi(u, l);
          var f = Fi(u, i);
          for (l = 0; l < s.length; l += 2) {
            var g = s[l], v = s[l + 1];
            g === "style" ? mu(a, v) : g === "dangerouslySetInnerHTML" ? fu(a, v) : g === "children" ? pr(a, v) : Lo(a, g, v, f);
          }
          switch (u) {
            case "input":
              Ii(a, i);
              break;
            case "textarea":
              cu(a, i);
              break;
            case "select":
              var m = a._wrapperState.wasMultiple;
              a._wrapperState.wasMultiple = !!i.multiple;
              var x = i.value;
              x != null ? En(a, !!i.multiple, x, !1) : m !== !!i.multiple && (i.defaultValue != null ? En(
                a,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : En(a, !!i.multiple, i.multiple ? [] : "", !1));
          }
          a[jr] = i;
        } catch (y) {
          ae(e, e.return, y);
        }
      }
      break;
    case 6:
      if (Ke(t, e), ot(e), r & 4) {
        if (e.stateNode === null) throw Error(E(162));
        a = e.stateNode, i = e.memoizedProps;
        try {
          a.nodeValue = i;
        } catch (y) {
          ae(e, e.return, y);
        }
      }
      break;
    case 3:
      if (Ke(t, e), ot(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        vr(t.containerInfo);
      } catch (y) {
        ae(e, e.return, y);
      }
      break;
    case 4:
      Ke(t, e), ot(e);
      break;
    case 13:
      Ke(t, e), ot(e), a = e.child, a.flags & 8192 && (i = a.memoizedState !== null, a.stateNode.isHidden = i, !i || a.alternate !== null && a.alternate.memoizedState !== null || (fl = ie())), r & 4 && Ns(e);
      break;
    case 22:
      if (g = n !== null && n.memoizedState !== null, e.mode & 1 ? (ke = (f = ke) || g, Ke(t, e), ke = f) : Ke(t, e), ot(e), r & 8192) {
        if (f = e.memoizedState !== null, (e.stateNode.isHidden = f) && !g && e.mode & 1) for (T = e, g = e.child; g !== null; ) {
          for (v = T = g; T !== null; ) {
            switch (m = T, x = m.child, m.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                sr(4, m, m.return);
                break;
              case 1:
                _n(m, m.return);
                var C = m.stateNode;
                if (typeof C.componentWillUnmount == "function") {
                  r = m, n = m.return;
                  try {
                    t = r, C.props = t.memoizedProps, C.state = t.memoizedState, C.componentWillUnmount();
                  } catch (y) {
                    ae(r, n, y);
                  }
                }
                break;
              case 5:
                _n(m, m.return);
                break;
              case 22:
                if (m.memoizedState !== null) {
                  Ps(v);
                  continue;
                }
            }
            x !== null ? (x.return = m, T = x) : Ps(v);
          }
          g = g.sibling;
        }
        e: for (g = null, v = e; ; ) {
          if (v.tag === 5) {
            if (g === null) {
              g = v;
              try {
                a = v.stateNode, f ? (i = a.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (u = v.stateNode, s = v.memoizedProps.style, l = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = pu("display", l));
              } catch (y) {
                ae(e, e.return, y);
              }
            }
          } else if (v.tag === 6) {
            if (g === null) try {
              v.stateNode.nodeValue = f ? "" : v.memoizedProps;
            } catch (y) {
              ae(e, e.return, y);
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
      Ke(t, e), ot(e), r & 4 && Ns(e);
      break;
    case 21:
      break;
    default:
      Ke(
        t,
        e
      ), ot(e);
  }
}
function ot(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Oc(n)) {
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
          r.flags & 32 && (pr(a, ""), r.flags &= -33);
          var i = _s(e);
          vo(e, i, a);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo, u = _s(e);
          go(e, u, l);
          break;
        default:
          throw Error(E(161));
      }
    } catch (s) {
      ae(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Tp(e, t, n) {
  T = e, Uc(e);
}
function Uc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; T !== null; ) {
    var a = T, i = a.child;
    if (a.tag === 22 && r) {
      var l = a.memoizedState !== null || Xr;
      if (!l) {
        var u = a.alternate, s = u !== null && u.memoizedState !== null || ke;
        u = Xr;
        var f = ke;
        if (Xr = l, (ke = s) && !f) for (T = a; T !== null; ) l = T, s = l.child, l.tag === 22 && l.memoizedState !== null ? zs(a) : s !== null ? (s.return = l, T = s) : zs(a);
        for (; i !== null; ) T = i, Uc(i), i = i.sibling;
        T = a, Xr = u, ke = f;
      }
      Es(e);
    } else a.subtreeFlags & 8772 && i !== null ? (i.return = a, T = i) : Es(e);
  }
}
function Es(e) {
  for (; T !== null; ) {
    var t = T;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            ke || Wa(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !ke) if (n === null) r.componentDidMount();
            else {
              var a = t.elementType === t.type ? n.memoizedProps : Xe(t.type, n.memoizedProps);
              r.componentDidUpdate(a, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && ds(t, i, r);
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
              ds(t, l, n);
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
              var f = t.alternate;
              if (f !== null) {
                var g = f.memoizedState;
                if (g !== null) {
                  var v = g.dehydrated;
                  v !== null && vr(v);
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
        ke || t.flags & 512 && ho(t);
      } catch (m) {
        ae(t, t.return, m);
      }
    }
    if (t === e) {
      T = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, T = n;
      break;
    }
    T = t.return;
  }
}
function Ps(e) {
  for (; T !== null; ) {
    var t = T;
    if (t === e) {
      T = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, T = n;
      break;
    }
    T = t.return;
  }
}
function zs(e) {
  for (; T !== null; ) {
    var t = T;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Wa(4, t);
          } catch (s) {
            ae(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var a = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              ae(t, a, s);
            }
          }
          var i = t.return;
          try {
            ho(t);
          } catch (s) {
            ae(t, i, s);
          }
          break;
        case 5:
          var l = t.return;
          try {
            ho(t);
          } catch (s) {
            ae(t, l, s);
          }
      }
    } catch (s) {
      ae(t, t.return, s);
    }
    if (t === e) {
      T = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      u.return = t.return, T = u;
      break;
    }
    T = t.return;
  }
}
var bp = Math.ceil, ba = _t.ReactCurrentDispatcher, cl = _t.ReactCurrentOwner, Ge = _t.ReactCurrentBatchConfig, H = 0, fe = null, le = null, ge = 0, Ae = 0, Nn = Qt(0), ue = 0, Pr = null, un = 0, Qa = 0, dl = 0, ur = null, Pe = null, fl = 0, On = 1 / 0, ht = null, La = !1, yo = null, Ut = null, Jr = !1, At = null, Ra = 0, cr = 0, xo = null, ua = -1, ca = 0;
function _e() {
  return H & 6 ? ie() : ua !== -1 ? ua : ua = ie();
}
function Vt(e) {
  return e.mode & 1 ? H & 2 && ge !== 0 ? ge & -ge : hp.transition !== null ? (ca === 0 && (ca = Nu()), ca) : (e = W, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Lu(e.type)), e) : 1;
}
function tt(e, t, n, r) {
  if (50 < cr) throw cr = 0, xo = null, Error(E(185));
  br(e, n, r), (!(H & 2) || e !== fe) && (e === fe && (!(H & 2) && (Qa |= n), ue === 4 && Rt(e, ge)), be(e, r), n === 1 && H === 0 && !(t.mode & 1) && (On = ie() + 500, Ha && Yt()));
}
function be(e, t) {
  var n = e.callbackNode;
  hf(e, t);
  var r = va(e, e === fe ? ge : 0);
  if (r === 0) n !== null && $l(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && $l(n), t === 1) e.tag === 0 ? mp(Ms.bind(null, e)) : Ju(Ms.bind(null, e)), cp(function() {
      !(H & 6) && Yt();
    }), n = null;
    else {
      switch (Eu(r)) {
        case 1:
          n = $o;
          break;
        case 4:
          n = Cu;
          break;
        case 16:
          n = ga;
          break;
        case 536870912:
          n = _u;
          break;
        default:
          n = ga;
      }
      n = Kc(n, Vc.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Vc(e, t) {
  if (ua = -1, ca = 0, H & 6) throw Error(E(327));
  var n = e.callbackNode;
  if (bn() && e.callbackNode !== n) return null;
  var r = va(e, e === fe ? ge : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ia(e, r);
  else {
    t = r;
    var a = H;
    H |= 2;
    var i = qc();
    (fe !== e || ge !== t) && (ht = null, On = ie() + 500, rn(e, t));
    do
      try {
        Ip();
        break;
      } catch (u) {
        Hc(e, u);
      }
    while (!0);
    Xo(), ba.current = i, H = a, le !== null ? t = 0 : (fe = null, ge = 0, t = ue);
  }
  if (t !== 0) {
    if (t === 2 && (a = qi(e), a !== 0 && (r = a, t = wo(e, a))), t === 1) throw n = Pr, rn(e, 0), Rt(e, r), be(e, ie()), n;
    if (t === 6) Rt(e, r);
    else {
      if (a = e.current.alternate, !(r & 30) && !Lp(a) && (t = Ia(e, r), t === 2 && (i = qi(e), i !== 0 && (r = i, t = wo(e, i))), t === 1)) throw n = Pr, rn(e, 0), Rt(e, r), be(e, ie()), n;
      switch (e.finishedWork = a, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(E(345));
        case 2:
          Zt(e, Pe, ht);
          break;
        case 3:
          if (Rt(e, r), (r & 130023424) === r && (t = fl + 500 - ie(), 10 < t)) {
            if (va(e, 0) !== 0) break;
            if (a = e.suspendedLanes, (a & r) !== r) {
              _e(), e.pingedLanes |= e.suspendedLanes & a;
              break;
            }
            e.timeoutHandle = Zi(Zt.bind(null, e, Pe, ht), t);
            break;
          }
          Zt(e, Pe, ht);
          break;
        case 4:
          if (Rt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, a = -1; 0 < r; ) {
            var l = 31 - et(r);
            i = 1 << l, l = t[l], l > a && (a = l), r &= ~i;
          }
          if (r = a, r = ie() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * bp(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Zi(Zt.bind(null, e, Pe, ht), r);
            break;
          }
          Zt(e, Pe, ht);
          break;
        case 5:
          Zt(e, Pe, ht);
          break;
        default:
          throw Error(E(329));
      }
    }
  }
  return be(e, ie()), e.callbackNode === n ? Vc.bind(null, e) : null;
}
function wo(e, t) {
  var n = ur;
  return e.current.memoizedState.isDehydrated && (rn(e, t).flags |= 256), e = Ia(e, t), e !== 2 && (t = Pe, Pe = n, t !== null && ko(t)), e;
}
function ko(e) {
  Pe === null ? Pe = e : Pe.push.apply(Pe, e);
}
function Lp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var a = n[r], i = a.getSnapshot;
        a = a.value;
        try {
          if (!nt(i(), a)) return !1;
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
function Rt(e, t) {
  for (t &= ~dl, t &= ~Qa, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - et(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Ms(e) {
  if (H & 6) throw Error(E(327));
  bn();
  var t = va(e, 0);
  if (!(t & 1)) return be(e, ie()), null;
  var n = Ia(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = qi(e);
    r !== 0 && (t = r, n = wo(e, r));
  }
  if (n === 1) throw n = Pr, rn(e, 0), Rt(e, t), be(e, ie()), n;
  if (n === 6) throw Error(E(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Zt(e, Pe, ht), be(e, ie()), null;
}
function pl(e, t) {
  var n = H;
  H |= 1;
  try {
    return e(t);
  } finally {
    H = n, H === 0 && (On = ie() + 500, Ha && Yt());
  }
}
function cn(e) {
  At !== null && At.tag === 0 && !(H & 6) && bn();
  var t = H;
  H |= 1;
  var n = Ge.transition, r = W;
  try {
    if (Ge.transition = null, W = 1, e) return e();
  } finally {
    W = r, Ge.transition = n, H = t, !(H & 6) && Yt();
  }
}
function ml() {
  Ae = Nn.current, K(Nn);
}
function rn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, up(n)), le !== null) for (n = le.return; n !== null; ) {
    var r = n;
    switch (Qo(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && ja();
        break;
      case 3:
        Dn(), K(Me), K(je), rl();
        break;
      case 5:
        nl(r);
        break;
      case 4:
        Dn();
        break;
      case 13:
        K(ee);
        break;
      case 19:
        K(ee);
        break;
      case 10:
        Jo(r.type._context);
        break;
      case 22:
      case 23:
        ml();
    }
    n = n.return;
  }
  if (fe = e, le = e = Ht(e.current, null), ge = Ae = t, ue = 0, Pr = null, dl = Qa = un = 0, Pe = ur = null, tn !== null) {
    for (t = 0; t < tn.length; t++) if (n = tn[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var a = r.next, i = n.pending;
      if (i !== null) {
        var l = i.next;
        i.next = a, r.next = l;
      }
      n.pending = r;
    }
    tn = null;
  }
  return e;
}
function Hc(e, t) {
  do {
    var n = le;
    try {
      if (Xo(), oa.current = Ta, Ma) {
        for (var r = te.memoizedState; r !== null; ) {
          var a = r.queue;
          a !== null && (a.pending = null), r = r.next;
        }
        Ma = !1;
      }
      if (sn = 0, de = se = te = null, lr = !1, _r = 0, cl.current = null, n === null || n.return === null) {
        ue = 1, Pr = t, le = null;
        break;
      }
      e: {
        var i = e, l = n.return, u = n, s = t;
        if (t = ge, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var f = s, g = u, v = g.tag;
          if (!(g.mode & 1) && (v === 0 || v === 11 || v === 15)) {
            var m = g.alternate;
            m ? (g.updateQueue = m.updateQueue, g.memoizedState = m.memoizedState, g.lanes = m.lanes) : (g.updateQueue = null, g.memoizedState = null);
          }
          var x = vs(l);
          if (x !== null) {
            x.flags &= -257, ys(x, l, u, i, t), x.mode & 1 && gs(i, f, t), t = x, s = f;
            var C = t.updateQueue;
            if (C === null) {
              var y = /* @__PURE__ */ new Set();
              y.add(s), t.updateQueue = y;
            } else C.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              gs(i, f, t), hl();
              break e;
            }
            s = Error(E(426));
          }
        } else if (X && u.mode & 1) {
          var b = vs(l);
          if (b !== null) {
            !(b.flags & 65536) && (b.flags |= 256), ys(b, l, u, i, t), Yo($n(s, u));
            break e;
          }
        }
        i = s = $n(s, u), ue !== 4 && (ue = 2), ur === null ? ur = [i] : ur.push(i), i = l;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var d = Ec(i, s, t);
              cs(i, d);
              break e;
            case 1:
              u = s;
              var c = i.type, p = i.stateNode;
              if (!(i.flags & 128) && (typeof c.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (Ut === null || !Ut.has(p)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var k = Pc(i, u, t);
                cs(i, k);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Wc(n);
    } catch (j) {
      t = j, le === n && n !== null && (le = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function qc() {
  var e = ba.current;
  return ba.current = Ta, e === null ? Ta : e;
}
function hl() {
  (ue === 0 || ue === 3 || ue === 2) && (ue = 4), fe === null || !(un & 268435455) && !(Qa & 268435455) || Rt(fe, ge);
}
function Ia(e, t) {
  var n = H;
  H |= 2;
  var r = qc();
  (fe !== e || ge !== t) && (ht = null, rn(e, t));
  do
    try {
      Rp();
      break;
    } catch (a) {
      Hc(e, a);
    }
  while (!0);
  if (Xo(), H = n, ba.current = r, le !== null) throw Error(E(261));
  return fe = null, ge = 0, ue;
}
function Rp() {
  for (; le !== null; ) Gc(le);
}
function Ip() {
  for (; le !== null && !of(); ) Gc(le);
}
function Gc(e) {
  var t = Yc(e.alternate, e, Ae);
  e.memoizedProps = e.pendingProps, t === null ? Wc(e) : le = t, cl.current = null;
}
function Wc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Pp(n, t), n !== null) {
        n.flags &= 32767, le = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ue = 6, le = null;
        return;
      }
    } else if (n = Ep(n, t, Ae), n !== null) {
      le = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      le = t;
      return;
    }
    le = t = e;
  } while (t !== null);
  ue === 0 && (ue = 5);
}
function Zt(e, t, n) {
  var r = W, a = Ge.transition;
  try {
    Ge.transition = null, W = 1, Ap(e, t, n, r);
  } finally {
    Ge.transition = a, W = r;
  }
  return null;
}
function Ap(e, t, n, r) {
  do
    bn();
  while (At !== null);
  if (H & 6) throw Error(E(327));
  n = e.finishedWork;
  var a = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(E(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (gf(e, i), e === fe && (le = fe = null, ge = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Jr || (Jr = !0, Kc(ga, function() {
    return bn(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = Ge.transition, Ge.transition = null;
    var l = W;
    W = 1;
    var u = H;
    H |= 4, cl.current = null, Mp(e, n), Bc(n, e), np(Xi), ya = !!Ki, Xi = Ki = null, e.current = n, Tp(n), lf(), H = u, W = l, Ge.transition = i;
  } else e.current = n;
  if (Jr && (Jr = !1, At = e, Ra = a), i = e.pendingLanes, i === 0 && (Ut = null), cf(n.stateNode), be(e, ie()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) a = t[n], r(a.value, { componentStack: a.stack, digest: a.digest });
  if (La) throw La = !1, e = yo, yo = null, e;
  return Ra & 1 && e.tag !== 0 && bn(), i = e.pendingLanes, i & 1 ? e === xo ? cr++ : (cr = 0, xo = e) : cr = 0, Yt(), null;
}
function bn() {
  if (At !== null) {
    var e = Eu(Ra), t = Ge.transition, n = W;
    try {
      if (Ge.transition = null, W = 16 > e ? 16 : e, At === null) var r = !1;
      else {
        if (e = At, At = null, Ra = 0, H & 6) throw Error(E(331));
        var a = H;
        for (H |= 4, T = e.current; T !== null; ) {
          var i = T, l = i.child;
          if (T.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var f = u[s];
                for (T = f; T !== null; ) {
                  var g = T;
                  switch (g.tag) {
                    case 0:
                    case 11:
                    case 15:
                      sr(8, g, i);
                  }
                  var v = g.child;
                  if (v !== null) v.return = g, T = v;
                  else for (; T !== null; ) {
                    g = T;
                    var m = g.sibling, x = g.return;
                    if ($c(g), g === f) {
                      T = null;
                      break;
                    }
                    if (m !== null) {
                      m.return = x, T = m;
                      break;
                    }
                    T = x;
                  }
                }
              }
              var C = i.alternate;
              if (C !== null) {
                var y = C.child;
                if (y !== null) {
                  C.child = null;
                  do {
                    var b = y.sibling;
                    y.sibling = null, y = b;
                  } while (y !== null);
                }
              }
              T = i;
            }
          }
          if (i.subtreeFlags & 2064 && l !== null) l.return = i, T = l;
          else e: for (; T !== null; ) {
            if (i = T, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                sr(9, i, i.return);
            }
            var d = i.sibling;
            if (d !== null) {
              d.return = i.return, T = d;
              break e;
            }
            T = i.return;
          }
        }
        var c = e.current;
        for (T = c; T !== null; ) {
          l = T;
          var p = l.child;
          if (l.subtreeFlags & 2064 && p !== null) p.return = l, T = p;
          else e: for (l = c; T !== null; ) {
            if (u = T, u.flags & 2048) try {
              switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  Wa(9, u);
              }
            } catch (j) {
              ae(u, u.return, j);
            }
            if (u === l) {
              T = null;
              break e;
            }
            var k = u.sibling;
            if (k !== null) {
              k.return = u.return, T = k;
              break e;
            }
            T = u.return;
          }
        }
        if (H = a, Yt(), ut && typeof ut.onPostCommitFiberRoot == "function") try {
          ut.onPostCommitFiberRoot(Oa, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      W = n, Ge.transition = t;
    }
  }
  return !1;
}
function Ts(e, t, n) {
  t = $n(n, t), t = Ec(e, t, 1), e = Bt(e, t, 1), t = _e(), e !== null && (br(e, 1, t), be(e, t));
}
function ae(e, t, n) {
  if (e.tag === 3) Ts(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Ts(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Ut === null || !Ut.has(r))) {
        e = $n(n, e), e = Pc(t, e, 1), t = Bt(t, e, 1), e = _e(), t !== null && (br(t, 1, e), be(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Dp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = _e(), e.pingedLanes |= e.suspendedLanes & n, fe === e && (ge & n) === n && (ue === 4 || ue === 3 && (ge & 130023424) === ge && 500 > ie() - fl ? rn(e, 0) : dl |= n), be(e, t);
}
function Qc(e, t) {
  t === 0 && (e.mode & 1 ? (t = Ur, Ur <<= 1, !(Ur & 130023424) && (Ur = 4194304)) : t = 1);
  var n = _e();
  e = St(e, t), e !== null && (br(e, t, n), be(e, n));
}
function $p(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Qc(e, n);
}
function Op(e, t) {
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
  r !== null && r.delete(t), Qc(e, n);
}
var Yc;
Yc = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Me.current) ze = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return ze = !1, Np(e, t, n);
    ze = !!(e.flags & 131072);
  }
  else ze = !1, X && t.flags & 1048576 && Zu(t, _a, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      sa(e, t), e = t.pendingProps;
      var a = Rn(t, je.current);
      Tn(t, n), a = il(null, t, r, e, a, n);
      var i = ol();
      return t.flags |= 1, typeof a == "object" && a !== null && typeof a.render == "function" && a.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Te(r) ? (i = !0, Sa(t)) : i = !1, t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, el(t), a.updater = Ga, t.stateNode = a, a._reactInternals = t, oo(t, r, e, n), t = uo(null, t, r, !0, i, n)) : (t.tag = 0, X && i && Wo(t), Ce(null, t, a, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (sa(e, t), e = t.pendingProps, a = r._init, r = a(r._payload), t.type = r, a = t.tag = Bp(r), e = Xe(r, e), a) {
          case 0:
            t = so(null, t, r, e, n);
            break e;
          case 1:
            t = ks(null, t, r, e, n);
            break e;
          case 11:
            t = xs(null, t, r, e, n);
            break e;
          case 14:
            t = ws(null, t, r, Xe(r.type, e), n);
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
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : Xe(r, a), so(e, t, r, a, n);
    case 1:
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : Xe(r, a), ks(e, t, r, a, n);
    case 3:
      e: {
        if (bc(t), e === null) throw Error(E(387));
        r = t.pendingProps, i = t.memoizedState, a = i.element, ic(e, t), Pa(t, r, null, n);
        var l = t.memoizedState;
        if (r = l.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: l.cache, pendingSuspenseBoundaries: l.pendingSuspenseBoundaries, transitions: l.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          a = $n(Error(E(423)), t), t = js(e, t, r, n, a);
          break e;
        } else if (r !== a) {
          a = $n(Error(E(424)), t), t = js(e, t, r, n, a);
          break e;
        } else for (De = Ft(t.stateNode.containerInfo.firstChild), $e = t, X = !0, Ze = null, n = rc(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (In(), r === a) {
            t = Ct(e, t, n);
            break e;
          }
          Ce(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return oc(t), e === null && ro(t), r = t.type, a = t.pendingProps, i = e !== null ? e.memoizedProps : null, l = a.children, Ji(r, a) ? l = null : i !== null && Ji(r, i) && (t.flags |= 32), Tc(e, t), Ce(e, t, l, n), t.child;
    case 6:
      return e === null && ro(t), null;
    case 13:
      return Lc(e, t, n);
    case 4:
      return tl(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = An(t, null, r, n) : Ce(e, t, r, n), t.child;
    case 11:
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : Xe(r, a), xs(e, t, r, a, n);
    case 7:
      return Ce(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ce(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ce(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, a = t.pendingProps, i = t.memoizedProps, l = a.value, Q(Na, r._currentValue), r._currentValue = l, i !== null) if (nt(i.value, l)) {
          if (i.children === a.children && !Me.current) {
            t = Ct(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var u = i.dependencies;
          if (u !== null) {
            l = i.child;
            for (var s = u.firstContext; s !== null; ) {
              if (s.context === r) {
                if (i.tag === 1) {
                  s = wt(-1, n & -n), s.tag = 2;
                  var f = i.updateQueue;
                  if (f !== null) {
                    f = f.shared;
                    var g = f.pending;
                    g === null ? s.next = s : (s.next = g.next, g.next = s), f.pending = s;
                  }
                }
                i.lanes |= n, s = i.alternate, s !== null && (s.lanes |= n), ao(
                  i.return,
                  n,
                  t
                ), u.lanes |= n;
                break;
              }
              s = s.next;
            }
          } else if (i.tag === 10) l = i.type === t.type ? null : i.child;
          else if (i.tag === 18) {
            if (l = i.return, l === null) throw Error(E(341));
            l.lanes |= n, u = l.alternate, u !== null && (u.lanes |= n), ao(l, n, t), l = i.sibling;
          } else l = i.child;
          if (l !== null) l.return = i;
          else for (l = i; l !== null; ) {
            if (l === t) {
              l = null;
              break;
            }
            if (i = l.sibling, i !== null) {
              i.return = l.return, l = i;
              break;
            }
            l = l.return;
          }
          i = l;
        }
        Ce(e, t, a.children, n), t = t.child;
      }
      return t;
    case 9:
      return a = t.type, r = t.pendingProps.children, Tn(t, n), a = We(a), r = r(a), t.flags |= 1, Ce(e, t, r, n), t.child;
    case 14:
      return r = t.type, a = Xe(r, t.pendingProps), a = Xe(r.type, a), ws(e, t, r, a, n);
    case 15:
      return zc(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : Xe(r, a), sa(e, t), t.tag = 1, Te(r) ? (e = !0, Sa(t)) : e = !1, Tn(t, n), Nc(t, r, a), oo(t, r, a, n), uo(null, t, r, !0, e, n);
    case 19:
      return Rc(e, t, n);
    case 22:
      return Mc(e, t, n);
  }
  throw Error(E(156, t.tag));
};
function Kc(e, t) {
  return Su(e, t);
}
function Fp(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function qe(e, t, n, r) {
  return new Fp(e, t, n, r);
}
function gl(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Bp(e) {
  if (typeof e == "function") return gl(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Io) return 11;
    if (e === Ao) return 14;
  }
  return 2;
}
function Ht(e, t) {
  var n = e.alternate;
  return n === null ? (n = qe(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function da(e, t, n, r, a, i) {
  var l = 2;
  if (r = e, typeof e == "function") gl(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else e: switch (e) {
    case gn:
      return an(n.children, a, i, t);
    case Ro:
      l = 8, a |= 8;
      break;
    case Mi:
      return e = qe(12, n, t, a | 2), e.elementType = Mi, e.lanes = i, e;
    case Ti:
      return e = qe(13, n, t, a), e.elementType = Ti, e.lanes = i, e;
    case bi:
      return e = qe(19, n, t, a), e.elementType = bi, e.lanes = i, e;
    case ou:
      return Ya(n, a, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case au:
          l = 10;
          break e;
        case iu:
          l = 9;
          break e;
        case Io:
          l = 11;
          break e;
        case Ao:
          l = 14;
          break e;
        case Tt:
          l = 16, r = null;
          break e;
      }
      throw Error(E(130, e == null ? e : typeof e, ""));
  }
  return t = qe(l, n, t, a), t.elementType = e, t.type = r, t.lanes = i, t;
}
function an(e, t, n, r) {
  return e = qe(7, e, r, t), e.lanes = n, e;
}
function Ya(e, t, n, r) {
  return e = qe(22, e, r, t), e.elementType = ou, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function _i(e, t, n) {
  return e = qe(6, e, null, t), e.lanes = n, e;
}
function Ni(e, t, n) {
  return t = qe(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Up(e, t, n, r, a) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = oi(0), this.expirationTimes = oi(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = oi(0), this.identifierPrefix = r, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null;
}
function vl(e, t, n, r, a, i, l, u, s) {
  return e = new Up(e, t, n, u, s), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = qe(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, el(i), e;
}
function Vp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: hn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Xc(e) {
  if (!e) return Gt;
  e = e._reactInternals;
  e: {
    if (fn(e) !== e || e.tag !== 1) throw Error(E(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Te(t.type)) {
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
    if (Te(n)) return Xu(e, n, t);
  }
  return t;
}
function Jc(e, t, n, r, a, i, l, u, s) {
  return e = vl(n, r, !0, e, a, i, l, u, s), e.context = Xc(null), n = e.current, r = _e(), a = Vt(n), i = wt(r, a), i.callback = t ?? null, Bt(n, i, a), e.current.lanes = a, br(e, a, r), be(e, r), e;
}
function Ka(e, t, n, r) {
  var a = t.current, i = _e(), l = Vt(a);
  return n = Xc(n), t.context === null ? t.context = n : t.pendingContext = n, t = wt(i, l), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Bt(a, t, l), e !== null && (tt(e, a, l, i), ia(e, a, l)), l;
}
function Aa(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function bs(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function yl(e, t) {
  bs(e, t), (e = e.alternate) && bs(e, t);
}
function Hp() {
  return null;
}
var Zc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function xl(e) {
  this._internalRoot = e;
}
Xa.prototype.render = xl.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(E(409));
  Ka(e, t, null, null);
};
Xa.prototype.unmount = xl.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    cn(function() {
      Ka(null, e, null, null);
    }), t[jt] = null;
  }
};
function Xa(e) {
  this._internalRoot = e;
}
Xa.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Mu();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Lt.length && t !== 0 && t < Lt[n].priority; n++) ;
    Lt.splice(n, 0, e), n === 0 && bu(e);
  }
};
function wl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Ja(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Ls() {
}
function qp(e, t, n, r, a) {
  if (a) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var f = Aa(l);
        i.call(f);
      };
    }
    var l = Jc(t, r, e, 0, null, !1, !1, "", Ls);
    return e._reactRootContainer = l, e[jt] = l.current, wr(e.nodeType === 8 ? e.parentNode : e), cn(), l;
  }
  for (; a = e.lastChild; ) e.removeChild(a);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var f = Aa(s);
      u.call(f);
    };
  }
  var s = vl(e, 0, !1, null, null, !1, !1, "", Ls);
  return e._reactRootContainer = s, e[jt] = s.current, wr(e.nodeType === 8 ? e.parentNode : e), cn(function() {
    Ka(t, s, n, r);
  }), s;
}
function Za(e, t, n, r, a) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof a == "function") {
      var u = a;
      a = function() {
        var s = Aa(l);
        u.call(s);
      };
    }
    Ka(t, l, e, a);
  } else l = qp(n, t, e, a, r);
  return Aa(l);
}
Pu = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = er(t.pendingLanes);
        n !== 0 && (Oo(t, n | 1), be(t, ie()), !(H & 6) && (On = ie() + 500, Yt()));
      }
      break;
    case 13:
      cn(function() {
        var r = St(e, 1);
        if (r !== null) {
          var a = _e();
          tt(r, e, 1, a);
        }
      }), yl(e, 1);
  }
};
Fo = function(e) {
  if (e.tag === 13) {
    var t = St(e, 134217728);
    if (t !== null) {
      var n = _e();
      tt(t, e, 134217728, n);
    }
    yl(e, 134217728);
  }
};
zu = function(e) {
  if (e.tag === 13) {
    var t = Vt(e), n = St(e, t);
    if (n !== null) {
      var r = _e();
      tt(n, e, t, r);
    }
    yl(e, t);
  }
};
Mu = function() {
  return W;
};
Tu = function(e, t) {
  var n = W;
  try {
    return W = e, t();
  } finally {
    W = n;
  }
};
Ui = function(e, t, n) {
  switch (t) {
    case "input":
      if (Ii(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var a = Va(r);
            if (!a) throw Error(E(90));
            su(r), Ii(r, a);
          }
        }
      }
      break;
    case "textarea":
      cu(e, n);
      break;
    case "select":
      t = n.value, t != null && En(e, !!n.multiple, t, !1);
  }
};
vu = pl;
yu = cn;
var Gp = { usingClientEntryPoint: !1, Events: [Rr, wn, Va, hu, gu, pl] }, Xn = { findFiberByHostInstance: en, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Wp = { bundleType: Xn.bundleType, version: Xn.version, rendererPackageName: Xn.rendererPackageName, rendererConfig: Xn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: _t.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = ku(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Xn.findFiberByHostInstance || Hp, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Zr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Zr.isDisabled && Zr.supportsFiber) try {
    Oa = Zr.inject(Wp), ut = Zr;
  } catch {
  }
}
Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Gp;
Fe.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!wl(t)) throw Error(E(200));
  return Vp(e, t, null, n);
};
Fe.createRoot = function(e, t) {
  if (!wl(e)) throw Error(E(299));
  var n = !1, r = "", a = Zc;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (a = t.onRecoverableError)), t = vl(e, 1, !1, null, null, n, !1, r, a), e[jt] = t.current, wr(e.nodeType === 8 ? e.parentNode : e), new xl(t);
};
Fe.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(E(188)) : (e = Object.keys(e).join(","), Error(E(268, e)));
  return e = ku(t), e = e === null ? null : e.stateNode, e;
};
Fe.flushSync = function(e) {
  return cn(e);
};
Fe.hydrate = function(e, t, n) {
  if (!Ja(t)) throw Error(E(200));
  return Za(null, e, t, !0, n);
};
Fe.hydrateRoot = function(e, t, n) {
  if (!wl(e)) throw Error(E(405));
  var r = n != null && n.hydratedSources || null, a = !1, i = "", l = Zc;
  if (n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), t = Jc(t, null, e, 1, n ?? null, a, !1, i, l), e[jt] = t.current, wr(e), r) for (e = 0; e < r.length; e++) n = r[e], a = n._getVersion, a = a(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(
    n,
    a
  );
  return new Xa(t);
};
Fe.render = function(e, t, n) {
  if (!Ja(t)) throw Error(E(200));
  return Za(null, e, t, !1, n);
};
Fe.unmountComponentAtNode = function(e) {
  if (!Ja(e)) throw Error(E(40));
  return e._reactRootContainer ? (cn(function() {
    Za(null, null, e, !1, function() {
      e._reactRootContainer = null, e[jt] = null;
    });
  }), !0) : !1;
};
Fe.unstable_batchedUpdates = pl;
Fe.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Ja(n)) throw Error(E(200));
  if (e == null || e._reactInternals === void 0) throw Error(E(38));
  return Za(e, t, n, !1, r);
};
Fe.version = "18.3.1-next-f1338f8080-20240426";
function ed() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ed);
    } catch (e) {
      console.error(e);
    }
}
ed(), eu.exports = Fe;
var Qp = eu.exports, td, Rs = Qp;
td = Rs.createRoot, Rs.hydrateRoot;
const Is = {
  maker3: "Cricut Maker 3",
  maker: "Cricut Maker",
  maker5: "Cricut Maker 5",
  estandar: "Explore / Joy Xtra / Venture (estándar)",
  joy: "Cricut Joy 2"
}, Yp = {
  A4: [210, 297],
  A3: [297, 420],
  A5: [148, 210],
  Letter: [215.9, 279.4]
}, Kp = [
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
], Xp = [
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
function zr(e) {
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
function Jp(e) {
  const t = (Number.isFinite(e.scale_pct) ? e.scale_pct : 100) / 100, n = Number.isFinite(e.w_mm_base) ? e.w_mm_base : e.w_mm, r = Number.isFinite(e.h_mm_base) ? e.h_mm_base : e.h_mm, a = (Number.isFinite(n) ? n : 0) * t, i = (Number.isFinite(r) ? r : 0) * t;
  return { w: Number.isFinite(a) ? a : 0, h: Number.isFinite(i) ? i : 0 };
}
const Da = () => globalThis.__crycatBase || "";
async function V(e, t) {
  const n = await fetch(Da() + e, t);
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
const R = {
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
  blobs: (e) => V(`/api/assets/${e}/blobs`),
  limpiarContorno: (e, t) => V(`/api/assets/${e}/limpiar-contorno`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ quitar: t })
  }),
  previewUrl: (e) => `/api/assets/${e}/preview.png`,
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
  pageUrl: (e, t, n = !1, r = !1) => `${Da().replace(/\/$/, "")}/api/pages/${e}.png?v=${t}${n ? "&sim=1" : ""}${r ? "&bordes=1" : ""}`,
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
  iconUrl: () => `${Da()}/api/icon.png?v=${Date.now()}`,
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
async function Zp(e) {
  const t = await e.text(), n = new Blob([t], { type: "image/svg+xml" }), r = URL.createObjectURL(n);
  try {
    const a = new Image();
    await new Promise((g, v) => {
      a.onload = () => g(), a.onerror = () => v(new Error("SVG no válido")), a.src = r;
    });
    const i = a.naturalWidth || a.width || 1024, l = a.naturalHeight || a.height || 1024, u = Math.min(4, Math.max(0.5, 300 / 96)), s = document.createElement("canvas");
    return s.width = Math.round(i * u), s.height = Math.round(l * u), s.getContext("2d").drawImage(a, 0, 0, s.width, s.height), await new Promise(
      (g) => s.toBlob((v) => g(v), "image/png")
    );
  } finally {
    URL.revokeObjectURL(r);
  }
}
async function nd(e) {
  return e.name.toLowerCase().endsWith(".svg") ? { blob: await Zp(e), name: e.name.replace(/\.svg$/i, "") + ".png" } : { blob: e, name: e.name };
}
const jo = [
  {
    key: "wiwi",
    label: "Wiwi",
    colors: {
      bg: "#f9d7e4",
      panel: "#fff7f2",
      panel2: "#ffffff",
      accent: "#f2a0b7",
      accent2: "#ff8a9b",
      accent3: "#d94f6a",
      text: "#5e4a64",
      textSoft: "#a4889b",
      border: "#f3c6d4",
      danger: "#e96a7e",
      guide: "#e8556b"
    }
  },
  {
    key: "eevee",
    label: "Eevee",
    colors: {
      bg: "#f0e3cf",
      panel: "#fdf6ea",
      panel2: "#ffffff",
      accent: "#c99a5f",
      accent2: "#a9713d",
      accent3: "#8a5a2b",
      text: "#5a4632",
      textSoft: "#a08b70",
      border: "#e0cba8",
      danger: "#c26a4a",
      guide: "#a9713d"
    }
  },
  {
    key: "fidough",
    label: "Fidough",
    colors: {
      bg: "#f6ecd2",
      panel: "#fffaef",
      panel2: "#ffffff",
      accent: "#e8b64c",
      accent2: "#e07a5f",
      accent3: "#b3593f",
      text: "#5c4a2f",
      textSoft: "#a68f66",
      border: "#e8d9a8",
      danger: "#d4694f",
      guide: "#d4694f"
    }
  },
  {
    key: "sprigatito",
    label: "Sprigatito",
    colors: {
      bg: "#ddefdb",
      panel: "#f3faf0",
      panel2: "#ffffff",
      accent: "#8cc98a",
      accent2: "#5fae72",
      accent3: "#3f8f57",
      text: "#3f5a45",
      textSoft: "#88a68e",
      border: "#c2e2c0",
      danger: "#d4696f",
      guide: "#4d8f63"
    }
  },
  {
    key: "maushold",
    label: "Maushold",
    colors: {
      bg: "#eeeae2",
      panel: "#faf8f3",
      panel2: "#ffffff",
      accent: "#b9a98f",
      accent2: "#8f7c62",
      accent3: "#6f5f47",
      text: "#4f463a",
      textSoft: "#9c9081",
      border: "#d9d2c4",
      danger: "#c26a5a",
      guide: "#8f7c62"
    }
  },
  {
    key: "jirachi",
    label: "Jirachi",
    colors: {
      bg: "#fdf3d6",
      panel: "#fffbee",
      panel2: "#ffffff",
      accent: "#f5d75a",
      accent2: "#7fd1c8",
      accent3: "#c98a1e",
      text: "#5d5433",
      textSoft: "#ab9f74",
      border: "#efe3ab",
      danger: "#e07a8a",
      guide: "#5bb8ae"
    }
  },
  {
    key: "espeon",
    label: "Espeon",
    colors: {
      bg: "#e9e0f4",
      panel: "#f7f2fc",
      panel2: "#ffffff",
      accent: "#b79ae0",
      accent2: "#9d7cc9",
      accent3: "#8a5fc0",
      text: "#4f4366",
      textSoft: "#9b8bb0",
      border: "#d4c6e8",
      danger: "#d46a9a",
      guide: "#9d7cc9"
    }
  },
  {
    key: "espeon-shiny",
    label: "Espeon shiny",
    colors: {
      bg: "#e0f0f4",
      panel: "#f1fafc",
      panel2: "#ffffff",
      accent: "#8fd0dd",
      accent2: "#67b7c9",
      accent3: "#2f9aa8",
      text: "#3f5460",
      textSoft: "#8aacb6",
      border: "#c4e2e8",
      danger: "#d46a8a",
      guide: "#4fa3b5"
    }
  },
  {
    key: "umbreon",
    label: "Umbreon",
    colors: {
      bg: "#2e2b3a",
      panel: "#3a3749",
      panel2: "#454157",
      accent: "#f0c94a",
      accent2: "#8f7fd4",
      accent3: "#ffd76a",
      text: "#f0e9dc",
      textSoft: "#a99fc4",
      border: "#524d68",
      danger: "#e07a6a",
      guide: "#f0c94a"
    }
  },
  {
    key: "hippopotas",
    label: "Hippopotas",
    colors: {
      bg: "#efe0c3",
      panel: "#faf2df",
      panel2: "#ffffff",
      accent: "#c8a86a",
      accent2: "#a5854e",
      accent3: "#9a6f36",
      text: "#54432a",
      textSoft: "#a08c66",
      border: "#e0cda0",
      danger: "#c26a4a",
      guide: "#a5854e"
    }
  },
  {
    key: "vaporeon",
    label: "Vaporeon",
    colors: {
      bg: "#d7e8f2",
      panel: "#eff7fb",
      panel2: "#ffffff",
      accent: "#8ab6d9",
      accent2: "#5f96c4",
      accent3: "#3a7fb5",
      text: "#3a4f60",
      textSoft: "#84a2b5",
      border: "#c0daea",
      danger: "#d46a7e",
      guide: "#4a81ad"
    }
  },
  {
    key: "sylveon",
    label: "Sylveon",
    colors: {
      bg: "#f6e3ee",
      panel: "#fdf3f8",
      panel2: "#ffffff",
      accent: "#e8a8c8",
      accent2: "#a8d8e8",
      accent3: "#c95f9a",
      text: "#5e4a5c",
      textSoft: "#b08ea4",
      border: "#f0cddd",
      danger: "#e06a8a",
      guide: "#d47ca8"
    }
  }
];
function So(e) {
  return jo.find((t) => t.key === e) ?? jo[0];
}
function As(e) {
  const t = So(e), n = document.documentElement;
  Object.entries(t.colors).forEach(([r, a]) => {
    n.style.setProperty(`--${r.replace(/[A-Z]/g, (i) => "-" + i.toLowerCase())}`, a);
  }), n.dataset.theme = t.key;
  try {
    localStorage.setItem("crycat-tema", t.key);
  } catch {
  }
}
function rd() {
  try {
    const e = localStorage.getItem("crycat-tema");
    if (e) return So(e);
  } catch {
  }
  return So("wiwi");
}
const ad = {
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
}, id = w.createContext("es");
function em({ idioma: e, children: t }) {
  return /* @__PURE__ */ o.jsx(id.Provider, { value: e, children: t });
}
function kl() {
  return w.useContext(id);
}
function rt() {
  const e = kl();
  return (t, n) => {
    let r = e === "en" ? ad[t] ?? t : t;
    if (n)
      for (const [a, i] of Object.entries(n))
        r = r.split(`{${a}}`).join(String(i));
    return r;
  };
}
function tm(e, t, n) {
  return e === "en" ? ad[t] ?? t : t;
}
function J({ size: e = 18, children: t }) {
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
function nm({ size: e }) {
  return /* @__PURE__ */ o.jsxs(J, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M4 9.5h3l4.5-3.5v12L7 14.5H4z" }),
    /* @__PURE__ */ o.jsx("path", { d: "M16 9a4 4 0 0 1 0 6" }),
    /* @__PURE__ */ o.jsx("path", { d: "M18.7 6.5a7.5 7.5 0 0 1 0 11" })
  ] });
}
function rm({ size: e }) {
  return /* @__PURE__ */ o.jsxs(J, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M4 9.5h3l4.5-3.5v12L7 14.5H4z" }),
    /* @__PURE__ */ o.jsx("path", { d: "M16 9.5l5 5M21 9.5l-5 5" })
  ] });
}
function Mr({ size: e }) {
  return /* @__PURE__ */ o.jsx(J, { size: e, children: /* @__PURE__ */ o.jsx("path", { d: "M3 7.5a2 2 0 0 1 2-2h3.6l1.7 2H19a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }) });
}
function am({ size: e }) {
  return /* @__PURE__ */ o.jsxs(J, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M20 12a8 8 0 1 1-2.3-5.6" }),
    /* @__PURE__ */ o.jsx("path", { d: "M20 4v4h-4" })
  ] });
}
function im({ size: e }) {
  return /* @__PURE__ */ o.jsxs(J, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M4 7a3 3 0 0 1 3-3h5" }),
    /* @__PURE__ */ o.jsx("path", { d: "M20 17a3 3 0 0 1-3 3h-5" }),
    /* @__PURE__ */ o.jsx("path", { d: "M15 2l3 2-3 2M9 18l-3 2 3 2" })
  ] });
}
function om({ size: e }) {
  return /* @__PURE__ */ o.jsxs(J, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M12 3l1.9 4.6L18 9l-4.1 1.4L12 15l-1.9-4.6L6 9l4.1-1.4z" }),
    /* @__PURE__ */ o.jsx("path", { d: "M18 15l.9 2.1L21 18l-2.1.9L18 21l-.9-2.1L15 18l2.1-.9z" })
  ] });
}
function lm({ size: e }) {
  return /* @__PURE__ */ o.jsxs(J, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M4 4h16v16H4z" }),
    /* @__PURE__ */ o.jsx("path", { d: "M4 14l5-5 4 4 3-3 4 4" }),
    /* @__PURE__ */ o.jsx("circle", { cx: "9", cy: "8.5", r: "1.4" })
  ] });
}
function sm({ size: e }) {
  return /* @__PURE__ */ o.jsxs(J, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M3 12a9 9 0 1 0 3-6.7" }),
    /* @__PURE__ */ o.jsx("path", { d: "M3 4v5h5" })
  ] });
}
function od({ size: e }) {
  return /* @__PURE__ */ o.jsx(J, { size: e, children: /* @__PURE__ */ o.jsx("path", { d: "M6 6l12 12M18 6L6 18" }) });
}
function um({ size: e }) {
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
function cm({ size: e }) {
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
function ld({ size: e }) {
  return /* @__PURE__ */ o.jsx(J, { size: e, children: /* @__PURE__ */ o.jsx("path", { d: "M12 3l2.2 5.4L20 10.5l-5.8 2.1L12 18l-2.2-5.4L4 10.5l5.8-2.1z" }) });
}
function dm({ size: e }) {
  return /* @__PURE__ */ o.jsxs(J, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M9 7L4 12l5 5" }),
    /* @__PURE__ */ o.jsx("path", { d: "M4 12h9a5 5 0 0 1 5 5v1" })
  ] });
}
function fm({ size: e }) {
  return /* @__PURE__ */ o.jsxs(J, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M15 7l5 5-5 5" }),
    /* @__PURE__ */ o.jsx("path", { d: "M20 12h-9a5 5 0 0 0-5 5v1" })
  ] });
}
function pm({ size: e }) {
  return /* @__PURE__ */ o.jsxs(J, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M4 4h16v16H4z" }),
    /* @__PURE__ */ o.jsx("path", { d: "M4 9h16M9 4v16", strokeDasharray: "2 2" })
  ] });
}
function mm({ size: e }) {
  return /* @__PURE__ */ o.jsxs(J, { size: e, children: [
    /* @__PURE__ */ o.jsx("circle", { cx: "11", cy: "11", r: "6.5" }),
    /* @__PURE__ */ o.jsx("path", { d: "M11 8.5v5M8.5 11h5M20 20l-4.4-4.4" })
  ] });
}
function hm({ size: e }) {
  return /* @__PURE__ */ o.jsxs(J, { size: e, children: [
    /* @__PURE__ */ o.jsx("circle", { cx: "11", cy: "11", r: "6.5" }),
    /* @__PURE__ */ o.jsx("path", { d: "M8.5 11h5M20 20l-4.4-4.4" })
  ] });
}
function gm({ size: e }) {
  return /* @__PURE__ */ o.jsx(J, { size: e, children: /* @__PURE__ */ o.jsx("path", { d: "M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4" }) });
}
function vm({ size: e }) {
  return /* @__PURE__ */ o.jsxs(J, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M5 3h11l3 3v15H5z" }),
    /* @__PURE__ */ o.jsx("path", { d: "M8 3v6h7V3M8 15h8v6H8z" })
  ] });
}
function ym({ size: e }) {
  return /* @__PURE__ */ o.jsxs(J, { size: e, children: [
    /* @__PURE__ */ o.jsx("circle", { cx: "12", cy: "12", r: "9" }),
    /* @__PURE__ */ o.jsx("path", { d: "M12 11v5M12 7.6v.1" })
  ] });
}
function xm({ size: e }) {
  return /* @__PURE__ */ o.jsxs(J, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M12 3l9 16H3z" }),
    /* @__PURE__ */ o.jsx("path", { d: "M12 9v5M12 17v.1" })
  ] });
}
function sd({ size: e }) {
  return /* @__PURE__ */ o.jsxs(J, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M12 4l9 15H3z" }),
    /* @__PURE__ */ o.jsx("path", { d: "M12 10v4.5M12 17.2v.1" })
  ] });
}
function wm({ size: e }) {
  return /* @__PURE__ */ o.jsxs(J, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M12 3v12" }),
    /* @__PURE__ */ o.jsx("path", { d: "M7 11l5 5 5-5" }),
    /* @__PURE__ */ o.jsx("path", { d: "M4 20h16" })
  ] });
}
function km({ size: e }) {
  return /* @__PURE__ */ o.jsxs(J, { size: e, children: [
    /* @__PURE__ */ o.jsx("circle", { cx: "12", cy: "12", r: "8" }),
    /* @__PURE__ */ o.jsx("path", { d: "M12 8v4.5l3 2" })
  ] });
}
function jm({ size: e }) {
  return /* @__PURE__ */ o.jsxs(J, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M12 6.5C10.5 5 8.3 4.5 4 4.5v13c4.3 0 6.5.5 8 2 1.5-1.5 3.7-2 8-2v-13c-4.3 0-6.5.5-8 2z" }),
    /* @__PURE__ */ o.jsx("path", { d: "M12 6.5v13" })
  ] });
}
function Sm({ size: e }) {
  return /* @__PURE__ */ o.jsx(J, { size: e, children: /* @__PURE__ */ o.jsx("path", { d: "M12 20s-7.5-4.6-7.5-9.4A4.1 4.1 0 0 1 12 8a4.1 4.1 0 0 1 7.5 2.6C19.5 15.4 12 20 12 20z" }) });
}
function Cm({ open: e, assets: t, onClose: n, onDone: r }) {
  const a = rt(), i = w.useMemo(() => t.map((h) => h.id), [t]), [l, u] = w.useState(/* @__PURE__ */ new Set()), [s, f] = w.useState("escala"), [g, v] = w.useState(100), [m, x] = w.useState(50), [C, y] = w.useState("mayor"), [b, d] = w.useState("");
  w.useEffect(() => {
    e && (u(/* @__PURE__ */ new Set()), d(""));
  }, [e, i.join(",")]);
  const c = (h) => !l.has(h), p = (h) => u((S) => {
    const $ = new Set(S);
    return $.has(h) ? $.delete(h) : $.add(h), $;
  }), k = () => u(
    l.size === i.length ? /* @__PURE__ */ new Set() : new Set(i)
  ), j = (h) => {
    const S = h.w_mm_base || 0, $ = h.h_mm_base || 0;
    return C === "mayor" ? Math.max(S, $) : C === "menor" ? Math.min(S, $) : 2 * Math.sqrt(Math.max(0, S * $) / Math.PI);
  }, N = (h) => {
    if (s === "tamano") {
      const S = j(h);
      if (S > 0) return Math.min(10, Math.max(0.05, m / S));
    }
    return Math.min(10, Math.max(0.05, g / 100));
  }, _ = (h) => {
    const S = N(h);
    return { w: (h.w_mm_base || 0) * S, h: (h.h_mm_base || 0) * S };
  }, z = async () => {
    let h = 0;
    for (const S of t) {
      if (!c(S.id)) continue;
      const $ = N(S) * 100;
      await R.patchAsset(S.id, {
        scale_pct: Math.min(1e3, Math.max(5, Math.round($ * 10) / 10))
      }), h += 1;
    }
    await r(), d(a("{n} elementos ajustados ", { n: h })), n();
  };
  return !e || !t.length ? null : /* @__PURE__ */ o.jsx("div", { className: "modal-back", "data-testid": "import-dialog", children: /* @__PURE__ */ o.jsxs("div", { className: "modal import-modal", children: [
    /* @__PURE__ */ o.jsx("h3", { children: a("Adaptar los tamaños importados") }),
    /* @__PURE__ */ o.jsx("div", { className: "hint", children: a("El tamaño inicial sale de los PPP reales de cada archivo (si no trae datos, se supone 300). Marca los que quieras cambiar y pulsa Aplicar cambios.") }),
    /* @__PURE__ */ o.jsxs("div", { className: "import-grid", children: [
      /* @__PURE__ */ o.jsxs("div", { children: [
        /* @__PURE__ */ o.jsx("div", { className: "hint", children: a("Cómo quedan sobre la hoja") }),
        /* @__PURE__ */ o.jsx("div", { className: "a4-preview", "data-testid": "import-preview", children: t.map((h) => {
          const S = _(h), $ = Math.min(98, S.w / 210 * 100);
          return /* @__PURE__ */ o.jsx(
            "div",
            {
              className: "a4-item",
              "data-testid": `import-preview-${h.id}`,
              style: {
                width: `${$}%`,
                maxWidth: `${$}%`,
                aspectRatio: `${S.w || 1} / ${S.h || 1}`,
                opacity: c(h.id) ? 1 : 0.3
              },
              title: `${h.name} · ${S.w.toFixed(1)}×${S.h.toFixed(1)} mm`,
              children: /* @__PURE__ */ o.jsx("img", { src: R.previewUrl(h.id), alt: "" })
            },
            h.id
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
              children: l.size === i.length ? a("Seleccionar todos") : a("Quitar selección")
            }
          ),
          /* @__PURE__ */ o.jsxs("span", { children: [
            "— ",
            i.length - l.size,
            "/",
            i.length
          ] })
        ] }),
        /* @__PURE__ */ o.jsx("div", { className: "import-lista", "data-testid": "import-lista", children: t.map((h) => {
          const S = _(h);
          return /* @__PURE__ */ o.jsxs(
            "button",
            {
              type: "button",
              "data-testid": `import-item-${h.id}`,
              className: c(h.id) ? "sel" : "",
              onClick: () => p(h.id),
              title: h.name,
              children: [
                /* @__PURE__ */ o.jsx("img", { src: R.previewUrl(h.id), alt: h.name }),
                /* @__PURE__ */ o.jsx("span", { className: "import-nombre", children: h.name }),
                /* @__PURE__ */ o.jsxs("span", { className: "import-datos", children: [
                  Math.round(h.dpi_origen || 0),
                  " ppp ·",
                  " ",
                  S.w.toFixed(1),
                  "×",
                  S.h.toFixed(1),
                  " mm"
                ] })
              ]
            },
            h.id
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
              className: s === "escala" ? "on" : "",
              onClick: () => f("escala"),
              children: a("Escala (%)")
            }
          ),
          /* @__PURE__ */ o.jsx(
            "button",
            {
              type: "button",
              "data-testid": "import-modo-tamano",
              className: s === "tamano" ? "on" : "",
              onClick: () => f("tamano"),
              children: a("Tamaño fijo (mm)")
            }
          )
        ] }),
        s === "escala" ? /* @__PURE__ */ o.jsxs("label", { children: [
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
                onChange: (h) => v(Number(h.target.value))
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
                  value: String(m),
                  onChange: (h) => x(Number(h.target.value))
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
                value: C,
                onChange: (h) => y(h.target.value),
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
        b && /* @__PURE__ */ o.jsx("div", { className: "hint", "data-testid": "import-aviso", children: b })
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
          onClick: z,
          children: a("Aplicar cambios")
        }
      )
    ] })
  ] }) });
}
const Ds = {
  chapa: "Chapa",
  pegatina: "Pegatina",
  hoja: "Hoja de pegatinas",
  iman: "Imán",
  "pegatina-grande": "Pegatina grande",
  vinilo: "Vinilo"
};
function _m({ saveSettings: e }) {
  const t = rt(), [n, r] = w.useState(
    {}
  ), [a, i] = w.useState([]), [l, u] = w.useState(!1), [s, f] = w.useState(!1), [g, v] = w.useState(""), [m, x] = w.useState(""), C = () => R.presets().then((c) => i(Array.isArray(c.names) ? c.names : [])).catch(() => {
  });
  w.useEffect(() => {
    R.factoryPresets().then((c) => r(c.presets ?? {})).catch(() => {
    }), C();
  }, []);
  const y = async (c) => {
    if (c)
      try {
        if (c.startsWith("fabrica:")) {
          const p = c.slice(8);
          await e(n[p]), x(t("Perfil «{n}» aplicado", {
            n: t(Ds[p] ?? p)
          }));
        } else {
          const p = c.slice(9), k = await R.loadPreset(p);
          await e(k.settings), x(t("Perfil «{n}» cargado", { n: p }));
        }
      } catch {
        x(t("No se pudo aplicar el perfil"));
      }
  }, b = async () => {
    const c = g.trim();
    if (c)
      try {
        const p = await R.savePreset(c);
        i(Array.isArray(p.names) ? p.names : []), v(""), u(!1), x(t("Perfil «{n}» guardado", { n: c }));
      } catch {
        x(t("No se pudo guardar el perfil"));
      }
  }, d = async (c) => {
    try {
      i((await R.deletePreset(c)).names ?? []), x(t("Perfil «{n}» borrado", { n: c }));
    } catch {
      x(t("No se pudo borrar el perfil"));
    }
  };
  return /* @__PURE__ */ o.jsxs("div", { className: "perfiles-barra", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "row", children: [
      /* @__PURE__ */ o.jsxs(
        "select",
        {
          className: "perfil-select",
          "data-testid": "perfil-select",
          value: "",
          title: t("Aplicar un perfil de fábrica o uno guardado"),
          onChange: (c) => y(c.target.value),
          children: [
            /* @__PURE__ */ o.jsx("option", { value: "", children: t("Perfil…") }),
            /* @__PURE__ */ o.jsx("optgroup", { label: t("De fábrica"), children: Object.keys(n).map((c) => /* @__PURE__ */ o.jsx("option", { value: `fabrica:${c}`, children: t(Ds[c] ?? c) }, c)) }),
            a.length > 0 && /* @__PURE__ */ o.jsx("optgroup", { label: t("Guardados"), children: a.map((c) => /* @__PURE__ */ o.jsx("option", { value: `guardado:${c}`, children: c }, c)) })
          ]
        }
      ),
      !l && /* @__PURE__ */ o.jsxs(
        "button",
        {
          className: "chip",
          "data-testid": "perfil-guardar",
          title: t("Guardar los ajustes actuales como perfil"),
          onClick: () => u(!0),
          children: [
            /* @__PURE__ */ o.jsx(vm, { size: 15 }),
            " ",
            t("Guardar perfil")
          ]
        }
      ),
      a.length > 0 && /* @__PURE__ */ o.jsx(
        "button",
        {
          className: `chip${s ? " on" : ""}`,
          "data-testid": "perfil-gestion",
          title: t("Gestionar los perfiles guardados"),
          onClick: () => f(!s),
          children: /* @__PURE__ */ o.jsx(gm, { size: 15 })
        }
      )
    ] }),
    l && /* @__PURE__ */ o.jsxs("div", { className: "row", children: [
      /* @__PURE__ */ o.jsx(
        "input",
        {
          autoFocus: !0,
          type: "text",
          "data-testid": "perfil-nombre-nuevo",
          placeholder: t("Nombre del perfil (p. ej. «Pikmin A4»)"),
          value: g,
          onChange: (c) => v(c.target.value),
          onKeyDown: (c) => {
            c.key === "Enter" && b(), c.key === "Escape" && u(!1);
          }
        }
      ),
      /* @__PURE__ */ o.jsx("button", { "data-testid": "perfil-guardar-ok", onClick: b, children: t("Guardar") }),
      /* @__PURE__ */ o.jsx("button", { onClick: () => u(!1), children: t("Cancelar") })
    ] }),
    s && a.length > 0 && /* @__PURE__ */ o.jsx("div", { className: "perfil-lista", "data-testid": "perfil-lista", children: a.map((c) => /* @__PURE__ */ o.jsxs("div", { className: "row", children: [
      /* @__PURE__ */ o.jsx("span", { className: "perfil-nombre", title: c, children: c }),
      /* @__PURE__ */ o.jsx("button", { "data-testid": `cargar-${c}`, onClick: () => y(`guardado:${c}`), children: t("Cargar") }),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          className: "icon-btn danger",
          title: t("Borrar perfil"),
          "data-testid": `borrar-${c}`,
          onClick: () => d(c),
          children: /* @__PURE__ */ o.jsx(od, { size: 15 })
        }
      )
    ] }, c)) }),
    m && /* @__PURE__ */ o.jsx("div", { className: "hint", children: m })
  ] });
}
function Nm({
  a: e,
  result: t,
  onChange: n,
  onEditarContorno: r,
  onAntesDeCambiar: a
}) {
  const i = rt(), [l, u] = w.useState(() => zr(e));
  w.useEffect(() => u(zr(e)), [e]);
  const s = w.useRef(null), f = Jp(l), [g, v] = w.useState(""), m = w.useRef(!1), [x, C] = w.useState(""), y = w.useRef(!1), [b, d] = w.useState({ tamano: !1, borde: !1, mini: !1 });
  w.useEffect(() => {
    m.current || v(f.w > 0 ? f.w.toFixed(1) : ""), y.current || C(f.h > 0 ? f.h.toFixed(1) : "");
  }, [f.w, f.h]);
  const c = Number.isFinite(l.w_mm_base) ? l.w_mm_base : 0, p = Number.isFinite(l.h_mm_base) ? l.h_mm_base : 0, k = (h) => {
    v(h);
    const S = Number(h.replace(",", "."));
    !Number.isFinite(S) || S <= 0 || c <= 0 || z({ scale_pct: S / c * 100 });
  }, j = (h) => {
    C(h);
    const S = Number(h.replace(",", "."));
    !Number.isFinite(S) || S <= 0 || p <= 0 || z({ scale_pct: S / p * 100 });
  }, N = (t == null ? void 0 : t.placements.filter((h) => h.asset_id === e.id && h.mini).length) ?? 0, _ = (t == null ? void 0 : t.placements.filter((h) => h.asset_id === e.id && !h.mini).length) ?? 0, z = async (h) => {
    a == null || a(), "copies" in h && (h.copies = Math.max(0, h.copies ?? 0)), u((S) => ({ ...S, ...h }));
    try {
      await R.patchAsset(e.id, h);
    } finally {
      await n();
    }
  };
  return /* @__PURE__ */ o.jsxs("div", { className: "asset-card", "data-testid": "asset-card", children: [
    /* @__PURE__ */ o.jsx("div", { className: "preview", children: /* @__PURE__ */ o.jsx("img", { src: R.previewUrl(e.id), alt: e.name, loading: "lazy" }) }),
    /* @__PURE__ */ o.jsxs("div", { className: "info", children: [
      /* @__PURE__ */ o.jsxs("div", { className: "name-row", children: [
        /* @__PURE__ */ o.jsx("span", { className: "name", title: e.name, children: e.name }),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            className: "icon-btn",
            "data-testid": `abrir-carpeta-${e.id}`,
            title: i("Abrir en el explorador la carpeta de las imágenes de la sesión"),
            onClick: () => R.assetsFolder().then((h) => R.abrirCarpeta(h.path)).catch(() => R.abrirCarpeta().catch(() => {
            })),
            children: /* @__PURE__ */ o.jsx(Mr, { size: 16 })
          }
        ),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            className: "icon-btn",
            "data-testid": `reemplazar-${e.id}`,
            title: i("Reemplazar por otro archivo de la carpeta"),
            onClick: () => {
              var h;
              return (h = s.current) == null ? void 0 : h.click();
            },
            children: /* @__PURE__ */ o.jsx(im, { size: 16 })
          }
        ),
        /* @__PURE__ */ o.jsx(
          "input",
          {
            ref: s,
            type: "file",
            hidden: !0,
            accept: "image/*,.psd,.ai,.svg",
            onChange: async (h) => {
              var $;
              const S = ($ = h.target.files) == null ? void 0 : $[0];
              if (h.target.value = "", !!S)
                try {
                  const { blob: oe, name: ce } = await nd(S);
                  await R.reemplazar(e.id, oe, ce), await n();
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
            title: i("Limpiar contorno (quitar trozos sueltos) sin tocar el original"),
            onClick: () => r == null ? void 0 : r(e),
            children: /* @__PURE__ */ o.jsx(om, { size: 16 })
          }
        ),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            className: "icon-btn",
            title: l.bg_removed ? i("Restaurar fondo original") : i("Quitar fondo (inteligente)"),
            onClick: () => (l.bg_removed ? R.restoreBackground(e.id) : R.removeBackground(e.id)).then(n),
            children: l.bg_removed ? /* @__PURE__ */ o.jsx(sm, { size: 16 }) : /* @__PURE__ */ o.jsx(lm, { size: 16 })
          }
        ),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            className: "icon-btn danger",
            title: i("Eliminar imagen"),
            onClick: () => R.deleteAsset(e.id).then(n),
            children: /* @__PURE__ */ o.jsx(od, { size: 16 })
          }
        )
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: "card-actions", children: [
        /* @__PURE__ */ o.jsxs("div", { className: "copies-row", title: i("Copias"), children: [
          /* @__PURE__ */ o.jsx("button", { "data-testid": `resta-${e.id}`, onClick: () => z({ copies: l.copies - 1 }), children: "−" }),
          /* @__PURE__ */ o.jsx("span", { className: "n", "data-testid": `copias-${e.id}`, children: l.copies }),
          /* @__PURE__ */ o.jsx("button", { "data-testid": `suma-${e.id}`, onClick: () => z({ copies: l.copies + 1 }), children: "+" })
        ] }),
        /* @__PURE__ */ o.jsxs(
          "button",
          {
            className: `mini-toggle ${l.mini_enabled ? "on" : ""}`,
            "data-testid": `mini-${e.id}`,
            title: i("Incluir como mini (rellena huecos)"),
            onClick: () => z({ mini_enabled: !l.mini_enabled }),
            children: [
              /* @__PURE__ */ o.jsx(ld, { size: 15 }),
              " ",
              i("Mini")
            ]
          }
        )
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: "fold", children: [
        /* @__PURE__ */ o.jsxs(
          "button",
          {
            className: "fold-head",
            "data-testid": `fold-tamano-${e.id}`,
            onClick: () => d((h) => ({ ...h, tamano: !h.tamano })),
            children: [
              /* @__PURE__ */ o.jsx("span", { className: `chev ${b.tamano ? "open" : ""}`, children: "›" }),
              i("Tamaño"),
              /* @__PURE__ */ o.jsxs("span", { className: "fold-val", "data-testid": `tamano-${e.id}`, children: [
                f.w.toFixed(1),
                "×",
                f.h.toFixed(1),
                " mm · ",
                Math.round(l.scale_pct),
                "%"
              ] })
            ]
          }
        ),
        b.tamano && /* @__PURE__ */ o.jsxs("div", { className: "fold-body", children: [
          /* @__PURE__ */ o.jsxs("div", { className: "scale-row", children: [
            /* @__PURE__ */ o.jsx("span", { title: i("Escala del elemento (100% = tamaño natural)"), children: i("Escala") }),
            /* @__PURE__ */ o.jsx(
              "input",
              {
                type: "range",
                min: 10,
                max: 400,
                step: 5,
                value: l.scale_pct,
                "data-testid": `escala-${e.id}`,
                onChange: (h) => z({ scale_pct: Number(h.target.value) })
              }
            ),
            /* @__PURE__ */ o.jsxs("span", { className: "scale-val", children: [
              Math.round(l.scale_pct),
              "%"
            ] })
          ] }),
          /* @__PURE__ */ o.jsxs("div", { className: "exact-row", children: [
            /* @__PURE__ */ o.jsx("span", { title: i("Tamaño exacto en milímetros (mantiene la proporción)"), children: i("Ancho") }),
            /* @__PURE__ */ o.jsx(
              "input",
              {
                type: "number",
                min: 0.5,
                max: 2e3,
                step: 0.5,
                value: g,
                "data-testid": `ancho-mm-${e.id}`,
                onFocus: () => {
                  m.current = !0, y.current = !1;
                },
                onBlur: () => {
                  m.current = !1, v(f.w > 0 ? f.w.toFixed(1) : "");
                },
                onChange: (h) => k(h.target.value)
              }
            ),
            /* @__PURE__ */ o.jsx("span", { children: "mm" }),
            /* @__PURE__ */ o.jsx("span", { className: "por", children: "×" }),
            /* @__PURE__ */ o.jsx("span", { title: i("Tamaño exacto en milímetros (mantiene la proporción)"), children: i("Alto") }),
            /* @__PURE__ */ o.jsx(
              "input",
              {
                type: "number",
                min: 0.5,
                max: 2e3,
                step: 0.5,
                value: x,
                "data-testid": `alto-mm-${e.id}`,
                onFocus: () => {
                  y.current = !0, m.current = !1;
                },
                onBlur: () => {
                  y.current = !1, C(f.h > 0 ? f.h.toFixed(1) : "");
                },
                onChange: (h) => j(h.target.value)
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
            onClick: () => d((h) => ({ ...h, borde: !h.borde })),
            children: [
              /* @__PURE__ */ o.jsx("span", { className: `chev ${b.borde ? "open" : ""}`, children: "›" }),
              i("Borde"),
              /* @__PURE__ */ o.jsxs("span", { className: "fold-val", "data-testid": `offset-${e.id}`, children: [
                l.offset_mm.toFixed(1),
                " mm",
                l.offset_mm <= 0 ? ` · ${i("global")}` : ""
              ] })
            ]
          }
        ),
        b.borde && /* @__PURE__ */ o.jsxs("div", { className: "fold-body", children: [
          /* @__PURE__ */ o.jsxs("div", { className: "seg-row", children: [
            /* @__PURE__ */ o.jsx(
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
            /* @__PURE__ */ o.jsx(
              "input",
              {
                type: "range",
                min: 0,
                max: 10,
                step: 0.5,
                "data-testid": `offset-range-${e.id}`,
                value: l.offset_mm,
                onChange: (h) => z({ offset_mm: Number(h.target.value) })
              }
            ),
            /* @__PURE__ */ o.jsx(
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
          /* @__PURE__ */ o.jsxs("div", { className: "seg-row", children: [
            [
              ["extender", i("Extender")],
              ["blanco", i("Blanco")],
              ["color", i("Color")],
              ["unir_recto", i("Unir recto")],
              ["unir_curvo", i("Unir curvo")]
            ].map(([h, S]) => /* @__PURE__ */ o.jsx(
              "button",
              {
                className: `seg ${(l.offset_modo || "") === h ? "on" : ""}`,
                "data-testid": `offset-modo-${h}-${e.id}`,
                onClick: () => z({ offset_modo: h }),
                children: S
              },
              h
            )),
            /* @__PURE__ */ o.jsx(
              "input",
              {
                type: "color",
                className: "color-pick",
                "data-testid": `offset-color-${e.id}`,
                value: l.offset_color || "#ffffff",
                title: i("Color del borde"),
                onChange: (h) => z({
                  offset_color: h.target.value,
                  offset_modo: "color"
                })
              }
            )
          ] })
        ] })
      ] }),
      l.mini_enabled && /* @__PURE__ */ o.jsxs("div", { className: "fold", children: [
        /* @__PURE__ */ o.jsxs(
          "button",
          {
            className: "fold-head",
            "data-testid": `fold-mini-${e.id}`,
            onClick: () => d((h) => ({ ...h, mini: !h.mini })),
            children: [
              /* @__PURE__ */ o.jsx("span", { className: `chev ${b.mini ? "open" : ""}`, children: "›" }),
              i("Opciones de mini"),
              /* @__PURE__ */ o.jsxs("span", { className: "fold-val", "data-testid": `minis-${e.id}`, children: [
                "×",
                l.mini_quota,
                " · ",
                N
              ] })
            ]
          }
        ),
        b.mini && /* @__PURE__ */ o.jsx("div", { className: "fold-body", children: /* @__PURE__ */ o.jsxs("div", { className: "seg-row", children: [
          /* @__PURE__ */ o.jsx("span", { title: i("Cuántos minis quieres de este elemento respecto a los demás (1 = reparto equitativo; 3 = el triple)"), children: i("Cuota") }),
          /* @__PURE__ */ o.jsx(
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
          /* @__PURE__ */ o.jsxs("span", { className: "quota-val", "data-testid": `cuota-${e.id}`, children: [
            "×",
            l.mini_quota
          ] }),
          /* @__PURE__ */ o.jsx(
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
          /* @__PURE__ */ o.jsx("span", { className: "mini-count", children: i(" {n} minis", { n: N }) })
        ] }) })
      ] }),
      _ > 0 && /* @__PURE__ */ o.jsx("div", { className: "size-mm", children: i("Colocadas: {n}", { n: _ }) }),
      l.warnings.length > 0 && /* @__PURE__ */ o.jsxs("div", { className: "warn", children: [
        /* @__PURE__ */ o.jsx(sd, { size: 14 }),
        " ",
        l.warnings[0],
        " ",
        /blob|trozos sueltos/i.test(l.warnings[0]) && /* @__PURE__ */ o.jsx(
          "button",
          {
            className: "warn-link",
            "data-testid": `limpiar-aviso-${e.id}`,
            onClick: () => r == null ? void 0 : r(e),
            children: i("limpiar contorno")
          }
        )
      ] })
    ] })
  ] });
}
function Em({
  assets: e,
  result: t,
  settings: n,
  onChange: r,
  saveSettings: a,
  onEditarContorno: i,
  onAntesDeCambiar: l
}) {
  const u = rt(), s = w.useRef(null), [f, g] = w.useState(!1), [v, m] = w.useState(null), x = async (c) => {
    const p = [];
    for (const k of Array.from(c))
      try {
        const { blob: j, name: N } = await nd(k);
        p.push(zr(await R.upload(j, N)));
      } catch (j) {
        console.error(j);
      }
    await r(), p.length > 1 && m(p);
  }, C = n.usar_minis, y = {
    90: "libre",
    libre: "no",
    no: "90"
  }, b = {
    90: "90°",
    libre: u("libre"),
    no: u("fijo")
  }, d = e.some((c) => c.demo);
  return /* @__PURE__ */ o.jsxs("div", { className: "file-panel", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "file-head", children: [
      /* @__PURE__ */ o.jsx("h2", { children: u("Imágenes") }),
      /* @__PURE__ */ o.jsx("span", { className: "count-badge", "data-testid": "total-assets", children: e.length })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "acciones-rapidas", children: [
      /* @__PURE__ */ o.jsxs(
        "button",
        {
          className: `chip${C ? " on" : ""}`,
          "data-testid": "chip-minis",
          title: u("Generar minis: rellenar los huecos con copias pequeñas"),
          onClick: () => a({
            usar_minis: !C,
            // al activarlos se desactiva el recálculo automático (solo ahora)
            ...C ? {} : { auto_recalcular: !1 }
          }),
          children: [
            /* @__PURE__ */ o.jsx(ld, { size: 15 }),
            " ",
            u("Minis")
          ]
        }
      ),
      /* @__PURE__ */ o.jsxs(
        "button",
        {
          className: `chip${n.auto_recalcular ? " on" : ""}`,
          "data-testid": "chip-auto",
          title: u("Recalcular automáticamente con cada cambio"),
          onClick: () => a({ auto_recalcular: !n.auto_recalcular }),
          children: [
            /* @__PURE__ */ o.jsx(am, { size: 15 }),
            " ",
            u("Auto")
          ]
        }
      ),
      /* @__PURE__ */ o.jsxs(
        "button",
        {
          className: "chip",
          "data-testid": "chip-rotacion",
          title: u("Rotación admitida: pulsa para cambiar entre 90°, libre y fijo"),
          onClick: () => a({
            rotacion: y[n.rotacion] ?? "90"
          }),
          children: [
            /* @__PURE__ */ o.jsx(cm, { size: 15 }),
            " ",
            b[n.rotacion] ?? "90°"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ o.jsx(_m, { saveSettings: a }),
    d && /* @__PURE__ */ o.jsx("div", { className: "hint", "data-testid": "aviso-demo", children: u("Estas figuras son de ejemplo: desaparecen solas al añadir tus imágenes.") }),
    /* @__PURE__ */ o.jsxs(
      "div",
      {
        className: `dropzone${f ? " over" : ""}`,
        "data-testid": "dropzone",
        onClick: () => {
          var c;
          return (c = s.current) == null ? void 0 : c.click();
        },
        onDragOver: (c) => {
          c.preventDefault(), g(!0);
        },
        onDragLeave: () => g(!1),
        onDrop: (c) => {
          c.preventDefault(), g(!1), c.dataTransfer.files.length && x(c.dataTransfer.files);
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
              ref: s,
              type: "file",
              multiple: !0,
              hidden: !0,
              accept: "image/*,.psd,.ai,.svg",
              onChange: (c) => {
                c.target.files && x(c.target.files), c.target.value = "";
              }
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ o.jsx("div", { className: "asset-list", "data-testid": "asset-list", children: e.map((c) => /* @__PURE__ */ o.jsx(
      Nm,
      {
        a: c,
        result: t,
        onChange: r,
        onEditarContorno: i,
        onAntesDeCambiar: l
      },
      c.id
    )) }),
    !C && /* @__PURE__ */ o.jsx("div", { className: "hint", children: u("Sugerencia: activa «Usar minis» en Ajustes para rellenar huecos con copias pequeñas.") }),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        className: "btn-clear-all danger",
        "data-testid": "borrar-todo",
        disabled: e.length === 0,
        onClick: () => R.clearAssets().then(r),
        children: u("Descartar imágenes")
      }
    ),
    /* @__PURE__ */ o.jsx(
      Cm,
      {
        open: !!v,
        assets: v ?? [],
        onClose: () => m(null),
        onDone: async () => {
          await r();
        }
      }
    )
  ] });
}
function ud({ open: e, onClose: t, onPick: n, initial: r }) {
  const a = rt(), [i, l] = w.useState(null), [u, s] = w.useState("");
  w.useEffect(() => {
    e && f(r || "");
  }, [e]);
  const f = async (g = "") => {
    s("");
    try {
      l(await R.fsList(g));
    } catch (v) {
      s(v.message);
    }
  };
  return e ? /* @__PURE__ */ o.jsx("div", { className: "modal-back", onClick: t, children: /* @__PURE__ */ o.jsxs("div", { className: "modal", onClick: (g) => g.stopPropagation(), "data-testid": "folder-picker", children: [
    /* @__PURE__ */ o.jsx("strong", { children: a("Elegir carpeta de guardado") }),
    /* @__PURE__ */ o.jsx("div", { className: "hint", children: (i == null ? void 0 : i.path) ?? "…" }),
    u && /* @__PURE__ */ o.jsxs("div", { className: "warn", children: [
      " ",
      u
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "dir-list", children: [
      i && i.parent !== i.path && /* @__PURE__ */ o.jsx("button", { onClick: () => f(i.parent), children: ".." }),
      i == null ? void 0 : i.dirs.map((g) => /* @__PURE__ */ o.jsx(
        "button",
        {
          onClick: () => f(`${i.path}/${g}`.replace("//", "/")),
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
function Pm({
  open: e,
  files: t,
  folder: n,
  error: r,
  onOpenFolder: a,
  onClose: i
}) {
  const l = rt(), [u, s] = w.useState("resumen");
  if (!e) return null;
  const f = t.length > 0 && t.every((v) => v.startsWith("data:")), g = [
    l("Abre Cricut Design Space."),
    l("Carga la imagen y elige «Imagen completa» (conserva la transparencia)."),
    l("Redimensiónala al tamaño real (el que se muestra en CryCat)."),
    l("Pulsa «Crear» para preparar el lienzo."),
    l("Comprueba que las dimensiones coinciden con las del archivo."),
    l("Imprime en papel mate blanco y colócalo en la esterilla."),
    l("¡Listo! La máquina leerá las marcas y cortará tus pegatinas.")
  ];
  return /* @__PURE__ */ o.jsx("div", { className: "modal-back", "data-testid": "save-dialog", children: /* @__PURE__ */ o.jsx("div", { className: "modal", children: u === "resumen" ? /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx("h3", { "data-testid": "save-titulo", children: l(r ? "No se pudo guardar" : "Imagen guardada") }),
    r ? /* @__PURE__ */ o.jsx("p", { className: "error", children: r }) : /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
      /* @__PURE__ */ o.jsx("p", { className: "hint", children: l("Archivos:") }),
      /* @__PURE__ */ o.jsx("ul", { className: "lista-archivos", children: t.map((v) => /* @__PURE__ */ o.jsx("li", { title: v, children: v.split(/[\\/]/).pop() }, v)) }),
      !f && /* @__PURE__ */ o.jsxs("p", { className: "hint", children: [
        l("Carpeta"),
        ": ",
        /* @__PURE__ */ o.jsx("code", { children: n })
      ] }),
      f && /* @__PURE__ */ o.jsx("p", { className: "hint", children: l("Descarga el resultado y ábrelo en Cricut Design Space.") })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "modal-botones", children: [
      f ? t.map((v, m) => /* @__PURE__ */ o.jsxs(
        "a",
        {
          "data-testid": `btn-descargar-${m}`,
          href: v,
          download: `crycat_pagina-${String(m + 1).padStart(2, "0")}.png`,
          className: "btn-descarga",
          children: [
            /* @__PURE__ */ o.jsx(Mr, { size: 15 }),
            " ",
            l("Descargar página {n}", { n: m + 1 })
          ]
        },
        m
      )) : /* @__PURE__ */ o.jsxs(
        "button",
        {
          "data-testid": "btn-abrir-carpeta",
          onClick: () => a == null ? void 0 : a(n),
          children: [
            /* @__PURE__ */ o.jsx(Mr, { size: 15 }),
            " ",
            l("Abrir carpeta")
          ]
        }
      ),
      /* @__PURE__ */ o.jsx("button", { "data-testid": "btn-continuar", onClick: i, children: l("Continuar") }),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          "data-testid": "btn-pasos-cricut",
          onClick: () => s("cricut"),
          children: l("Pasos en Cricut Design Space")
        }
      )
    ] })
  ] }) : /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsx("h3", { children: l("Cómo usar tu PNG en Cricut Design Space") }),
    /* @__PURE__ */ o.jsx("ol", { className: "lista-pasos", "data-testid": "pasos-cricut", children: g.map((v, m) => /* @__PURE__ */ o.jsx("li", { children: v }, m)) }),
    /* @__PURE__ */ o.jsxs("div", { className: "modal-botones", children: [
      /* @__PURE__ */ o.jsx(
        "button",
        {
          "data-testid": "btn-volver",
          onClick: () => s("resumen"),
          children: l("Volver")
        }
      ),
      /* @__PURE__ */ o.jsx("button", { onClick: i, children: l("Entendido") })
    ] })
  ] }) }) });
}
function zm({ assets: e, result: t, settings: n, ui: r, setUi: a, saveSettings: i, onRefresh: l, onJob: u, onRecalc: s, editando: f, onFinEdicion: g, onDeshacer: v, onRehacer: m, puedeDeshacer: x, puedeRehacer: C }) {
  const y = rt(), b = kl(), [d, c] = w.useState(1), [p, k] = w.useState({ x: 0, y: 0 }), [j, N] = w.useState(null), [_, z] = w.useState(() => Date.now()), [h, S] = w.useState(null), [$, oe] = w.useState(null), [ce, Le] = w.useState(!1), [dt, pe] = w.useState([]), [Re, M] = w.useState(""), [O, F] = w.useState(/* @__PURE__ */ new Set()), q = w.useRef(null), G = w.useRef(null), L = b === "en" ? Xp : Kp, Z = w.useMemo(
    () => L[Math.floor(Math.random() * L.length)],
    [L]
  ), Ie = r.saveName.trim() || Z;
  w.useEffect(() => {
    z(Date.now());
  }, [t, n.dpi_salida, n.lienzo, n.color_formato]);
  const Se = (t == null ? void 0 : t.pages) ?? 0, Ye = !!t && t.efficiency < 0.8;
  w.useEffect(() => {
    const P = q.current;
    if (!P) return;
    const I = (D) => {
      D.preventDefault(), D.stopPropagation();
      const me = P.getBoundingClientRect(), Ue = D.clientX - me.left, pt = D.clientY - me.top;
      c((it) => {
        const ye = D.deltaY < 0 ? 1.05 : 0.9523809523809523, re = Math.min(12, Math.max(0.05, it * ye)), Pt = re / it;
        return k((zt) => ({ x: Ue - (Ue - zt.x) * Pt, y: pt - (pt - zt.y) * Pt })), re;
      });
    };
    return P.addEventListener("wheel", I, { passive: !1 }), () => P.removeEventListener("wheel", I);
  }, []);
  const Vn = (P) => {
    if (P.target.closest(".item-box")) return;
    G.current = { x: P.clientX - p.x, y: P.clientY - p.y };
    const I = (me) => {
      G.current && k({ x: me.clientX - G.current.x, y: me.clientY - G.current.y });
    }, D = () => {
      G.current = null, window.removeEventListener("mousemove", I), window.removeEventListener("mouseup", D);
    };
    window.addEventListener("mousemove", I), window.addEventListener("mouseup", D);
  };
  w.useEffect(() => {
    const P = (I) => {
      I.target.tagName !== "INPUT" && (I.key === "+" || I.key === "=" ? c((D) => Math.min(12, D * 1.08)) : I.key === "-" || I.key === "_" ? c((D) => Math.max(0.05, D / 1.08)) : I.key === "0" ? (c(1), k({ x: 0, y: 0 })) : I.key === "Escape" ? N(null) : I.key === "g" ? a((D) => ({ ...D, guidesVisible: !D.guidesVisible })) : I.key === "t" && a((D) => D.eyeFosforito ? { ...D, eyeFosforito: !1, eyeTransparent: !1 } : D.eyeTransparent ? { ...D, eyeTransparent: !1, eyeFosforito: !0 } : { ...D, eyeTransparent: !0, eyeFosforito: !1 }));
    };
    return window.addEventListener("keydown", P), () => window.removeEventListener("keydown", P);
  }, [a]);
  const Kt = w.useRef(null), A = w.useRef(null), B = (P, I) => {
    P.preventDefault(), P.stopPropagation();
    const D = P.currentTarget.closest(".page-box");
    if (!D || !t) return;
    const me = t.page_mm[0] / D.clientWidth, Ue = {
      uid: I.uid,
      startX: P.clientX,
      startY: P.clientY,
      origX: I.x,
      origY: I.y,
      mmPerPx: me
    };
    Kt.current = Ue, A.current = { x: I.x, y: I.y }, S(Ue), oe({ uid: I.uid, x: I.x, y: I.y });
    const pt = (ye) => {
      const re = Kt.current;
      if (!re) return;
      const Pt = (ye.clientX - re.startX) * re.mmPerPx / d, zt = (ye.clientY - re.startY) * re.mmPerPx / d;
      A.current = { x: re.origX + Pt, y: re.origY + zt }, oe({ uid: re.uid, x: re.origX + Pt, y: re.origY + zt });
    }, it = (ye) => {
      window.removeEventListener("mousemove", pt), window.removeEventListener("mouseup", it);
      const re = Kt.current;
      if (Kt.current = null, !re) return;
      const Pt = (ye.clientX - re.startX) * re.mmPerPx / d, zt = (ye.clientY - re.startY) * re.mmPerPx / d;
      S(null), oe(null), !(Math.abs(Pt) < 0.5 && Math.abs(zt) < 0.5) && Nt(re.uid, re.origX + Pt, re.origY + zt);
    };
    window.addEventListener("mousemove", pt), window.addEventListener("mouseup", it);
  }, Nt = async (P, I, D) => {
    try {
      const me = await R.move(P, I, D);
      me.job ? u(me.job) : await l();
    } catch {
      await l();
    } finally {
      z(Date.now());
    }
  }, ft = async (P) => {
    const I = await R.unpin(P);
    u(I);
  };
  w.useEffect(() => {
    if (!f) {
      pe([]), M(""), F(/* @__PURE__ */ new Set());
      return;
    }
    R.blobs(f.id).then((P) => {
      pe(P.blobs), M(P.preview_png), F(new Set(P.blobs.filter((I) => !I.principal).map((I) => I.id)));
    }).catch(() => {
      pe([]), M("");
    });
  }, [f]);
  const Ar = async () => {
    if (f)
      try {
        await R.limpiarContorno(f.id, Array.from(O));
      } finally {
        await (g == null ? void 0 : g());
      }
  }, Et = (P) => {
    F((I) => {
      const D = new Set(I);
      return D.has(P) ? D.delete(P) : D.add(P), D;
    });
  }, [at, Xt] = w.useState(null), fd = async () => {
    try {
      const I = await R.export(
        r.saveName || "crycat",
        n.carpeta_export || void 0
      );
      Xt({ files: I.files, folder: I.folder });
    } catch (I) {
      Xt({ files: [], folder: "", error: I.message });
      return;
    }
    const P = document.createElement("iframe");
    P.setAttribute("aria-hidden", "true"), P.style.cssText = "position:fixed;right:0;bottom:0;width:0;height:0;border:0", P.src = "/api/print.pdf", P.onload = () => {
      var I, D;
      try {
        (I = P.contentWindow) == null || I.focus(), (D = P.contentWindow) == null || D.print();
      } finally {
        window.setTimeout(() => P.remove(), 6e4);
      }
    }, document.body.appendChild(P);
  }, pd = async () => {
    try {
      const P = await R.export(Ie);
      Xt({ files: P.files, folder: P.folder });
    } catch (P) {
      Xt({ files: [], folder: "", error: P.message });
    }
  }, md = () => {
    Le(!0);
  }, hd = async (P) => {
    try {
      const I = await R.export(Ie, P);
      Xt({ files: I.files, folder: I.folder });
    } catch (I) {
      Xt({ files: [], folder: "", error: I.message });
    }
  }, jl = (t == null ? void 0 : t.poly_mm) ?? [], [gd, vd] = (t == null ? void 0 : t.bbox_offset_mm) ?? [0, 0], [yd, xd] = (t == null ? void 0 : t.bbox_mm) ?? [0, 0], pn = n.lienzo === "pagina" ? (t == null ? void 0 : t.page_mm[0]) ?? 0 : yd, ei = n.lienzo === "pagina" ? (t == null ? void 0 : t.page_mm[1]) ?? 0 : xd, Sl = n.lienzo === "pagina" ? 0 : gd, Cl = n.lienzo === "pagina" ? 0 : vd, _l = jl.length ? "M" + jl.map(([P, I]) => `${P - Sl},${I - Cl}`).join(" L") + " Z" : "", wd = (P) => {
    const I = (t == null ? void 0 : t.placements.filter((D) => D.page === P)) ?? [];
    return /* @__PURE__ */ o.jsxs(
      "div",
      {
        className: `page-box ${r.eyeFosforito ? "fondo-fosforito" : r.eyeTransparent ? "alpha-bg" : "white-bg"}`,
        style: { width: "100%" },
        onClick: (D) => {
          Se > 1 && j === null && !D.target.closest(".item-box") && N(P);
        },
        "data-testid": `page-${P}`,
        children: [
          /* @__PURE__ */ o.jsx("img", { className: "sheet", src: R.pageUrl(P, _, n.simular_impresion === !0, r.verBordes), alt: y("Página {i}", { i: P + 1 }), draggable: !1 }),
          r.guidesVisible && _l && /* @__PURE__ */ o.jsx("svg", { className: "overlay-svg", viewBox: `0 0 ${pn} ${ei}`, preserveAspectRatio: "none", children: /* @__PURE__ */ o.jsx(
            "path",
            {
              d: _l,
              fill: "none",
              stroke: "var(--guide)",
              strokeWidth: Math.max(0.6, pn / 250),
              strokeDasharray: `${pn / 55} ${pn / 85}`,
              opacity: 0.85
            }
          ) }),
          I.map((D) => {
            const me = e.find((ye) => ye.id === D.asset_id), Ue = ($ == null ? void 0 : $.uid) === D.uid ? $ : null, pt = ((Ue ? Ue.x : D.x) - Sl) / (pn || 1) * 100, it = ((Ue ? Ue.y : D.y) - Cl) / (ei || 1) * 100;
            return /* @__PURE__ */ o.jsx(
              "div",
              {
                className: `item-box ${D.pinned ? "pinned" : ""} ${(h == null ? void 0 : h.uid) === D.uid ? "dragging" : ""}`,
                style: {
                  left: `${pt}%`,
                  top: `${it}%`,
                  width: `${D.w / (pn || 1) * 100}%`,
                  height: `${D.h / (ei || 1) * 100}%`
                },
                title: (me == null ? void 0 : me.name) ?? "",
                onMouseDown: (ye) => B(ye, D),
                onContextMenu: (ye) => {
                  ye.preventDefault(), ft(D.uid);
                },
                "data-testid": `item-${D.uid}`,
                children: D.pinned && /* @__PURE__ */ o.jsx("span", { className: "pin" })
              },
              D.uid
            );
          })
        ]
      },
      P
    );
  }, kd = j !== null ? [j] : Array.from({ length: Se }, (P, I) => I);
  return /* @__PURE__ */ o.jsxs("div", { className: "viewer", "data-testid": "viewer", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "viewer-top", children: [
      /* @__PURE__ */ o.jsxs("div", { className: "group hist", children: [
        /* @__PURE__ */ o.jsxs(
          "button",
          {
            "data-testid": "btn-deshacer",
            title: y("Deshacer (Ctrl+Z)"),
            onClick: () => v(),
            disabled: !x,
            children: [
              /* @__PURE__ */ o.jsx(dm, { size: 15 }),
              " ",
              y("Deshacer")
            ]
          }
        ),
        /* @__PURE__ */ o.jsxs(
          "button",
          {
            "data-testid": "btn-rehacer",
            title: y("Rehacer (Ctrl+Y / Ctrl+Shift+Z)"),
            onClick: () => m(),
            disabled: !C,
            children: [
              /* @__PURE__ */ o.jsx(fm, { size: 15 }),
              " ",
              y("Rehacer")
            ]
          }
        )
      ] }),
      /* @__PURE__ */ o.jsx("div", { className: "group", children: /* @__PURE__ */ o.jsxs(
        "button",
        {
          "data-testid": "btn-bordes",
          className: r.verBordes ? "primary" : "",
          title: y("Ver los contornos reales: en un color la silueta que se corta (con borde y cambios) y en otro el dibujo sin borde"),
          onClick: () => a((P) => ({ ...P, verBordes: !P.verBordes })),
          children: [
            /* @__PURE__ */ o.jsx(um, { size: 15 }),
            " ",
            r.verBordes ? y("Bordes") : y("Sin bordes")
          ]
        }
      ) }),
      /* @__PURE__ */ o.jsx("div", { className: "group", children: /* @__PURE__ */ o.jsxs(
        "button",
        {
          "data-testid": "btn-guias",
          title: y("Mostrar/ocultar guías de límites Cricut (tecla G) — solo en la vista previa, nunca en el archivo final"),
          onClick: () => a((P) => ({ ...P, guidesVisible: !P.guidesVisible })),
          children: [
            /* @__PURE__ */ o.jsx(pm, { size: 15 }),
            " ",
            r.guidesVisible ? y("Guías") : y("Sin guías")
          ]
        }
      ) }),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          className: "recalc-btn",
          "data-testid": "btn-recalcular",
          title: y("Forzar la recolocación de todo (ignora los elementos fijados)"),
          onClick: () => s(Ye ? "rapido" : "optimo"),
          children: y(Ye ? " Recalcular rápido" : " Recalcular óptimo")
        }
      ),
      /* @__PURE__ */ o.jsxs("div", { className: "group", children: [
        Se > 1 && j === null && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
          /* @__PURE__ */ o.jsx("button", { "data-testid": "view-1", className: r.viewMode === 1 ? "primary" : "", onClick: () => a((P) => ({ ...P, viewMode: 1 })), children: "1" }),
          /* @__PURE__ */ o.jsx("button", { "data-testid": "view-2", className: r.viewMode === 2 ? "primary" : "", onClick: () => a((P) => ({ ...P, viewMode: 2 })), children: "2" }),
          /* @__PURE__ */ o.jsx("button", { "data-testid": "view-4", className: r.viewMode === 4 ? "primary" : "", onClick: () => a((P) => ({ ...P, viewMode: 4 })), children: "4" })
        ] }),
        j !== null && /* @__PURE__ */ o.jsx("button", { onClick: () => N(null), title: y("Volver a la cuadrícula (Esc)"), children: y(" Ver todo") }),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            "data-testid": "btn-ojo",
            title: y("Fondo: blanco  transparente  verde fosforito (tecla T)"),
            onClick: () => a((P) => P.eyeFosforito ? { ...P, eyeFosforito: !1, eyeTransparent: !1 } : P.eyeTransparent ? { ...P, eyeTransparent: !1, eyeFosforito: !0 } : { ...P, eyeTransparent: !0, eyeFosforito: !1 }),
            children: (r.eyeFosforito || r.eyeTransparent, "")
          }
        ),
        /* @__PURE__ */ o.jsx("button", { onClick: () => c((P) => Math.min(12, P * 1.08)), title: y("Acercar (+)"), children: /* @__PURE__ */ o.jsx(mm, { size: 15 }) }),
        /* @__PURE__ */ o.jsx("button", { onClick: () => c((P) => Math.max(0.05, P / 1.08)), title: y("Alejar (−)"), children: /* @__PURE__ */ o.jsx(hm, { size: 15 }) }),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            "data-testid": "zoom-reset",
            onClick: () => {
              c(1), k({ x: 0, y: 0 });
            },
            title: y("Volver al zoom original (tecla 0)"),
            children: "100%"
          }
        )
      ] })
    ] }),
    f ? /* @__PURE__ */ o.jsxs("div", { className: "editor-blobs", "data-testid": "editor-blobs", children: [
      /* @__PURE__ */ o.jsxs("div", { className: "editor-lienzo", children: [
        /* @__PURE__ */ o.jsx(
          "img",
          {
            src: R.previewUrl(f.id) + `?t=${_}`,
            alt: f.name,
            draggable: !1
          }
        ),
        /* @__PURE__ */ o.jsx("div", { className: "editor-overlay", children: f && dt.filter((P) => !P.principal).map((P, I) => {
          const [D, me, Ue, pt] = P.bbox, it = f.w_px || 1, ye = f.h_px || 1;
          return /* @__PURE__ */ o.jsx(
            "button",
            {
              className: `blob${O.has(P.id) ? " sel" : ""}`,
              "data-testid": `blob-${I}`,
              title: y("Trozo de {px} px — clic para {accion}", {
                px: P.area_px,
                accion: O.has(P.id) ? y("conservar") : y("quitar")
              }),
              style: {
                left: `${D / it * 100}%`,
                top: `${me / ye * 100}%`,
                width: `${(Ue - D) / it * 100}%`,
                height: `${(pt - me) / ye * 100}%`
              },
              onClick: () => Et(P.id)
            },
            P.id
          );
        }) })
      ] }),
      /* @__PURE__ */ o.jsx("div", { className: "hint", children: y("Pulsa los trozos sueltos para marcarlos (se quitarán al guardar). El contorno principal nunca se elimina. El archivo original no se toca.") })
    ] }) : /* @__PURE__ */ o.jsx(
      "div",
      {
        ref: q,
        className: `canvas ${h ? "panning" : ""}`,
        "data-testid": "canvas",
        onMouseDown: Vn,
        children: /* @__PURE__ */ o.jsxs(
          "div",
          {
            className: "canvas-inner",
            style: { transform: `translate(${p.x}px, ${p.y}px) scale(${d})` },
            children: [
              Se === 0 && /* @__PURE__ */ o.jsx("div", { className: "hint", style: { margin: "30px auto" }, children: y("Añade imágenes y se colocarán aquí de forma óptima, respetando el área recortable de Cricut.") }),
              /* @__PURE__ */ o.jsx(
                "div",
                {
                  className: "pages-grid",
                  style: {
                    width: "100%",
                    display: "grid",
                    gridTemplateColumns: `repeat(${j !== null ? 1 : r.viewMode}, 1fr)`,
                    gap: 18
                  },
                  children: kd.map(wd)
                }
              )
            ]
          }
        )
      }
    ),
    f ? /* @__PURE__ */ o.jsx("div", { className: "viewer-bottom", children: /* @__PURE__ */ o.jsxs("div", { className: "btn-row", children: [
      /* @__PURE__ */ o.jsx(
        "button",
        {
          className: "primary",
          "data-testid": "btn-guardar-contorno",
          onClick: Ar,
          children: y("Guardar limpieza")
        }
      ),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          "data-testid": "btn-descartar-contorno",
          onClick: () => g == null ? void 0 : g(),
          children: y("Descartar")
        }
      )
    ] }) }) : /* @__PURE__ */ o.jsxs("div", { className: "viewer-bottom", children: [
      /* @__PURE__ */ o.jsx(
        "input",
        {
          type: "text",
          "data-testid": "save-name",
          placeholder: Z,
          value: r.saveName,
          onChange: (P) => a((I) => ({ ...I, saveName: P.target.value }))
        }
      ),
      /* @__PURE__ */ o.jsxs("div", { className: "btn-row", children: [
        /* @__PURE__ */ o.jsx(
          "button",
          {
            "data-testid": "btn-abrir-guardado",
            className: "btn-icono",
            title: y("Abrir la carpeta de guardado en el explorador"),
            "aria-label": y("Abrir carpeta de guardado"),
            onClick: () => R.abrirCarpeta(n.carpeta_export || void 0).catch(() => {
            }),
            children: /* @__PURE__ */ o.jsx(Mr, { size: 16 })
          }
        ),
        /* @__PURE__ */ o.jsx("button", { "data-testid": "btn-guardar", onClick: pd, children: y("Guardar") }),
        /* @__PURE__ */ o.jsx("button", { "data-testid": "btn-guardar-como", onClick: md, children: y("Guardar como…") }),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            "data-testid": "btn-imprimir",
            onClick: fd,
            disabled: Se === 0,
            children: y("Imprimir")
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ o.jsx(
      ud,
      {
        open: ce,
        initial: n.carpeta_export,
        onClose: () => Le(!1),
        onPick: hd
      }
    ),
    /* @__PURE__ */ o.jsx(
      Pm,
      {
        open: !!at,
        files: (at == null ? void 0 : at.files) ?? [],
        folder: (at == null ? void 0 : at.folder) ?? "",
        error: at == null ? void 0 : at.error,
        onOpenFolder: (P) => void R.fsOpen(P).catch(() => {
        }),
        onClose: () => Xt(null)
      }
    )
  ] });
}
function Mm({ i: e, valor: t, refBase: n, onPct: r, onQuitar: a, t: i }) {
  const [l, u] = w.useState(null), s = n ? t / 100 * n : 0;
  return /* @__PURE__ */ o.jsxs("div", { className: "mini-fila", children: [
    /* @__PURE__ */ o.jsx(
      "input",
      {
        type: "number",
        min: 1,
        max: 99,
        step: 5,
        "data-testid": `mini-tamano-${e}`,
        value: String(t),
        onChange: (f) => r(Math.min(99, Math.max(1, Number(f.target.value))))
      }
    ),
    /* @__PURE__ */ o.jsx("span", { className: "hint", children: "%" }),
    /* @__PURE__ */ o.jsx(
      "input",
      {
        type: "number",
        min: 1,
        step: 1,
        "data-testid": `mini-tamano-mm-${e}`,
        value: l ?? (n ? s.toFixed(1) : ""),
        disabled: !n,
        title: i("Tamaño final del mini para la imagen de referencia"),
        onChange: (f) => {
          if (u(f.target.value), !n) return;
          const g = Number(f.target.value);
          isFinite(g) && g > 0 && r(Math.min(99, Math.max(
            1,
            Math.round(g / n * 1e3) / 10
          )));
        },
        onBlur: () => u(null)
      }
    ),
    /* @__PURE__ */ o.jsx("span", { className: "hint", children: "mm" }),
    /* @__PURE__ */ o.jsx(
      "button",
      {
        className: "icon-btn danger",
        title: i("Quitar tamaño"),
        "data-testid": `mini-tamano-quitar-${e}`,
        onClick: a
      }
    )
  ] });
}
function mt({ id: e, title: t, open: n, toggle: r, children: a }) {
  return /* @__PURE__ */ o.jsxs("div", { className: `sect ${n ? "open" : ""}`, "data-testid": `sect-${e}`, children: [
    /* @__PURE__ */ o.jsxs("div", { className: "sect-head", onClick: () => r(e), children: [
      /* @__PURE__ */ o.jsx("span", { children: t }),
      /* @__PURE__ */ o.jsx("span", { className: "arrow", children: "▼" })
    ] }),
    n && /* @__PURE__ */ o.jsx("div", { className: "sect-body", children: a })
  ] });
}
function $s(e, t) {
  return e.split(new RegExp(`(${t.join("|")})`)).map((n, r) => t.includes(n) ? /* @__PURE__ */ o.jsx("strong", { children: n }, r) : n);
}
const Tm = {
  greedy: 6,
  largest: 3,
  voronoi: 6,
  genetic: 25
}, bm = {
  greedy: "Greedy / Bottom-Left",
  largest: "Largest First",
  voronoi: "Voronoi",
  genetic: "Genético"
};
function Lm({
  settings: e,
  saveSettings: t,
  assets: n
}) {
  const r = rt(), [a, i] = w.useState(!0), [l, u] = w.useState({
    minis: !1,
    optimizacion: !1,
    imagen: !1,
    visualizacion: !1,
    historial: !1,
    perfiles: !1,
    corte: !1,
    extras: !1,
    offset: !1
  }), [s, f] = w.useState(!1), g = w.useMemo(() => {
    const d = (n ?? []).filter((p) => p.mini_enabled);
    return (d.length ? d : n ?? []).slice().sort((p, k) => Math.min(k.w_mm, k.h_mm) - Math.min(p.w_mm, p.h_mm))[0] ?? null;
  }, [n]), v = g ? Math.min(g.w_mm, g.h_mm) : 0, m = (d) => u((c) => ({ ...c, [d]: !c[d] })), x = (d) => t(d), C = w.useRef(null), y = (d, c, p, k, j = 1, N = "", _) => /* @__PURE__ */ o.jsxs("div", { className: "ctl", children: [
    /* @__PURE__ */ o.jsx("label", { children: r(d) }),
    /* @__PURE__ */ o.jsxs("div", { className: "row", children: [
      /* @__PURE__ */ o.jsx(
        "input",
        {
          type: "number",
          min: p,
          max: k,
          step: j,
          "data-testid": `set-${c}`,
          value: String(e[c]),
          onChange: (z) => {
            const h = Number(z.target.value);
            Number.isNaN(h) || x({ [c]: h });
          }
        }
      ),
      N && /* @__PURE__ */ o.jsx("span", { className: "hint", children: N }),
      _
    ] })
  ] }), b = (d, c, p, k) => /* @__PURE__ */ o.jsxs("div", { className: "ctl", children: [
    /* @__PURE__ */ o.jsx("label", { children: r(d) }),
    /* @__PURE__ */ o.jsx(
      "select",
      {
        "data-testid": `set-${c}`,
        value: String(e[c]),
        onChange: (j) => x({ [c]: j.target.value }),
        children: p.map(([j, N]) => /* @__PURE__ */ o.jsx("option", { value: j, children: r(N) }, j))
      }
    )
  ] });
  return /* @__PURE__ */ o.jsxs("div", { className: "file-panel settings-panel", children: [
    /* @__PURE__ */ o.jsxs(
      "button",
      {
        className: "panel-head",
        "data-testid": "panel-ajustes",
        onClick: () => i((d) => !d),
        children: [
          /* @__PURE__ */ o.jsx("span", { className: `chev ${a ? "open" : ""}`, children: "›" }),
          /* @__PURE__ */ o.jsx("h2", { children: r("Ajustes") }),
          /* @__PURE__ */ o.jsx("span", { className: "fold-val", children: e.tema })
        ]
      }
    ),
    !a && /* @__PURE__ */ o.jsx("div", { className: "hint", children: r("Pulsa para desplegar los ajustes") }),
    a && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
      /* @__PURE__ */ o.jsxs(mt, { id: "general", title: r("General"), open: !0, toggle: () => {
      }, children: [
        y("Espacio entre elementos", "espacio_mm", 0, 20, 0.5, "mm"),
        y("Margen de seguridad a los límites", "margen_mm", 0, 20, 0.5, "mm"),
        b("Rotación admitida", "rotacion", [
          ["no", "No girar"],
          ["90", "Giros de 0º / 90º / 180º / 270º"],
          ["libre", "Cualquier ángulo"]
        ]),
        y("Resolución de salida", "dpi_salida", 72, 1200, 1, "ppp"),
        /* @__PURE__ */ o.jsxs("div", { className: "ctl", children: [
          /* @__PURE__ */ o.jsx("label", { children: r("Tamaño de salida (vertical)") }),
          /* @__PURE__ */ o.jsxs(
            "select",
            {
              "data-testid": "set-pagina",
              value: e.pagina,
              onChange: (d) => {
                const c = d.target.value, p = Yp[c];
                x(p ? { pagina: c, pagina_w: p[0], pagina_h: p[1] } : { pagina: c });
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
        e.pagina === "custom" && /* @__PURE__ */ o.jsxs("div", { className: "ctl", children: [
          /* @__PURE__ */ o.jsx("label", { children: r("Ancho × alto (mm)") }),
          /* @__PURE__ */ o.jsxs("div", { className: "row", children: [
            /* @__PURE__ */ o.jsx(
              "input",
              {
                type: "number",
                "data-testid": "set-pagina-w",
                value: String(e.pagina_w),
                onChange: (d) => x({ pagina_w: Number(d.target.value) })
              }
            ),
            /* @__PURE__ */ o.jsx(
              "input",
              {
                type: "number",
                "data-testid": "set-pagina-h",
                value: String(e.pagina_h),
                onChange: (d) => x({ pagina_h: Number(d.target.value) })
              }
            )
          ] })
        ] }),
        b("Máquina Cricut", "maquina", [
          ["maker3", "Cricut Maker 3"],
          ["maker", "Cricut Maker"],
          ["maker5", "Cricut Maker 5"],
          ["estandar", "Explore / Joy Xtra / Venture"],
          ["joy", "Cricut Joy 2"]
        ]),
        /* @__PURE__ */ o.jsx("div", { className: "ctl", children: /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
          /* @__PURE__ */ o.jsx(
            "input",
            {
              type: "checkbox",
              "data-testid": "set-usar-minis",
              checked: e.usar_minis,
              onChange: (d) => x({ usar_minis: d.target.checked })
            }
          ),
          r("Usar minis (rellenar huecos con copias pequeñas)")
        ] }) }),
        /* @__PURE__ */ o.jsxs("div", { className: "ctl", children: [
          /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
            /* @__PURE__ */ o.jsx(
              "input",
              {
                type: "checkbox",
                "data-testid": "set-auto-recalcular",
                checked: e.auto_recalcular !== !1,
                onChange: (d) => x({ auto_recalcular: d.target.checked })
              }
            ),
            r("Recalcular automáticamente con cada cambio")
          ] }),
          /* @__PURE__ */ o.jsx("div", { className: "hint", children: r("Si lo desactivas, solo se recolocará al pulsar «Recalcular».") })
        ] })
      ] }),
      /* @__PURE__ */ o.jsxs(mt, { id: "minis", title: r("Minis"), open: l.minis, toggle: m, children: [
        /* @__PURE__ */ o.jsx("div", { className: "hint", children: r("Los minis rellenan huecos (no cuentan como copias): dan eficiencia y pegatinas extra. La cuota de cada elemento decide cuántos recibe respecto a los demás: todos empiezan en 1 (reparto equitativo) y 3 significa el triple. El tamaño lo elige el optimizador, siempre más pequeño que el original.") }),
        y("Tamaño mínimo", "mini_min_mm", 1, 50, 0.5, "mm"),
        y(
          "Tamaño máximo del mini (% del original)",
          "mini_max_rescale",
          10,
          100,
          5,
          "%"
        ),
        b("Rotaciones admitidas", "mini_rotacion", [
          ["no", "No girar"],
          ["90", "Giros de 0º / 90º / 180º / 270º"],
          ["libre", "Cualquier ángulo"]
        ]),
        b("Selección de tamaños", "mini_tamanos", [
          ["iguales", "Priorizar que sean iguales"],
          ["grandes", "Priorizar grandes"]
        ]),
        /* @__PURE__ */ o.jsx("div", { className: "ctl", children: /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
          /* @__PURE__ */ o.jsx(
            "input",
            {
              type: "checkbox",
              "data-testid": "set-mini-usar-lista",
              checked: e.mini_usar_lista === !0,
              onChange: (d) => x({ mini_usar_lista: d.target.checked })
            }
          ),
          r("Usar lista de tamaños (en vez de los automáticos)")
        ] }) }),
        e.mini_usar_lista && /* @__PURE__ */ o.jsxs("div", { className: "ctl", children: [
          /* @__PURE__ */ o.jsx("label", { children: r("Tamaños deseados (% y tamaño final)") }),
          /* @__PURE__ */ o.jsxs("div", { className: "size-list", "data-testid": "mini-lista", children: [
            (e.mini_tamanos_lista ?? []).map((d, c) => /* @__PURE__ */ o.jsx(
              Mm,
              {
                i: c,
                valor: d,
                refBase: v,
                t: r,
                onPct: (p) => {
                  const k = [...e.mini_tamanos_lista ?? []];
                  k[c] = p, x({ mini_tamanos_lista: k });
                },
                onQuitar: () => x({
                  mini_tamanos_lista: (e.mini_tamanos_lista ?? []).filter(
                    (p, k) => k !== c
                  )
                })
              },
              c
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
          /* @__PURE__ */ o.jsx("div", { className: "hint", children: g ? r(
            "El tamaño en mm es para «{nombre}» (su lado menor mide {mm} mm); cada mini se escala igual respecto a su original.",
            { nombre: g.name, mm: v.toFixed(1) }
          ) : r("El tamaño en mm se calcula por imagen; añade imágenes para verlo. Cada valor es el tamaño del mini respecto al original.") })
        ] })
      ] }),
      /* @__PURE__ */ o.jsxs(mt, { id: "optimizacion", title: r("Optimización"), open: l.optimizacion, toggle: m, children: [
        b("Método", "opt_metodo", [
          ["greedy", "Greedy / Bottom-Left (rápido)"],
          ["largest", "Largest First (mayor primero)"],
          ["voronoi", "Voronoi (huecos más grandes)"],
          ["genetic", "Genético (máxima calidad)"]
        ]),
        b("Calidad de cálculo", "opt_calidad", [
          ["exacta", "Exacta (más fina, más lenta)"],
          ["normal", "Normal (equilibrada)"],
          ["rapida", "Rápida (más gruesa, para bocetos)"]
        ]),
        /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
          /* @__PURE__ */ o.jsx(
            "input",
            {
              type: "checkbox",
              "data-testid": "set-opt_tiempo_auto",
              checked: e.opt_tiempo_auto !== !1,
              onChange: (d) => x({ opt_tiempo_auto: d.target.checked })
            }
          ),
          r("Tiempo automático (el recomendado para cada método)")
        ] }),
        e.opt_tiempo_auto !== !1 ? /* @__PURE__ */ o.jsx("div", { className: "hint", "data-testid": "tiempo-recomendado", children: r(
          "Se usarán {s} s con «{m}» (el resto de métodos tienen el suyo).",
          {
            s: Tm[e.opt_metodo] ?? 8,
            m: r(bm[e.opt_metodo] ?? e.opt_metodo)
          }
        ) }) : y("Tiempo máximo", "opt_tiempo_max_s", 0.5, 120, 0.5, "s"),
        /* @__PURE__ */ o.jsx("div", { className: "hint", children: r("La eficiencia del último cálculo se muestra en la barra de estado.") })
      ] }),
      /* @__PURE__ */ o.jsxs(mt, { id: "imagen", title: r("Imagen"), open: l.imagen, toggle: m, children: [
        y("Sangrado de impresión", "bleed_mm", 0, 5, 0.2, "mm"),
        /* @__PURE__ */ o.jsx("div", { className: "hint", children: r("Repite el color del borde hacia fuera para que no salga reborde blanco si la impresora no está perfectamente alineada (0 = sin sangrado).") }),
        b("Espacio de color de impresión", "espacio_color", [
          ["srgb", "sRGB (estándar, el más seguro)"],
          ["adobergb", "AdobeRGB (más gamas verdes/azules)"]
        ]),
        /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
          /* @__PURE__ */ o.jsx(
            "input",
            {
              type: "checkbox",
              "data-testid": "set-simular_impresion",
              checked: e.simular_impresion === !0,
              onChange: (d) => x({ simular_impresion: d.target.checked })
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
                onChange: (d) => x({ sim_cmyk: d.target.checked })
              }
            ),
            r("Simular el recorte de CMYK (amarillea azules/verdes)")
          ] }),
          y("Saturación de la simulación", "sim_saturacion", 0.5, 2, 0.05),
          y("Contraste de la simulación", "sim_contraste", 0.5, 2, 0.05),
          y("Brillo de la simulación", "sim_brillo", 0.5, 2, 0.05),
          /* @__PURE__ */ o.jsx("div", { className: "hint", children: r("Sube saturación/contraste para compensar lo que apaga la impresión. El archivo no se modifica: solo la vista previa.") })
        ] }),
        b("Formato de color de salida", "color_formato", [
          ["rgba", "PNG con transparencia (recomendado)"],
          ["rgb", "PNG con fondo blanco"]
        ]),
        /* @__PURE__ */ o.jsx("div", { className: "ctl", children: /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
          /* @__PURE__ */ o.jsx(
            "input",
            {
              type: "checkbox",
              "data-testid": "set-chequear-lineas",
              checked: e.chequear_lineas,
              onChange: (d) => x({ chequear_lineas: d.target.checked })
            }
          ),
          r("Comprobación de líneas anómalas")
        ] }) }),
        y(
          "DPI de importación en Design Space",
          "dpi_importacion",
          72,
          600,
          1,
          "ppp"
        ),
        /* @__PURE__ */ o.jsx("div", { className: "hint", children: r("Si Design Space importa la imagen con un tamaño distinto, prueba 144 (el valor que suele usar) o ajusta al de tu versión. 300 mantiene la calidad de impresión.") }),
        b("Lienzo del archivo final", "lienzo", [
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
                onClick: () => f(!0),
                children: r("Elegir carpeta…")
              }
            )
          ] }),
          /* @__PURE__ */ o.jsx("div", { className: "hint", children: r("Se guarda para la próxima vez que abras CryCat.") })
        ] })
      ] }),
      /* @__PURE__ */ o.jsxs(mt, { id: "offset", title: r("Offset / borde"), open: l.offset, toggle: m, children: [
        /* @__PURE__ */ o.jsx("div", { className: "ctl", children: /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
          /* @__PURE__ */ o.jsx(
            "input",
            {
              type: "checkbox",
              "data-testid": "set-offset-activo",
              checked: e.offset_activo === !0,
              onChange: (d) => x({ offset_activo: d.target.checked })
            }
          ),
          r("Añadir borde a todos los elementos")
        ] }) }),
        e.offset_activo && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
          y("Grosor del borde", "offset_mm", 0.1, 20, 0.1, "mm"),
          b("Tipo de borde", "offset_modo", [
            ["extender", "Extender el color del borde (suave)"],
            ["blanco", "Blanco"],
            ["color", "Color personalizado"],
            ["unir_recto", "Unir trozos: borde recto (envolvente)"],
            ["unir_curvo", "Unir trozos: borde curvo (redondeado)"]
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
                  onChange: (d) => x({ offset_color: d.target.value })
                }
              ),
              /* @__PURE__ */ o.jsx("span", { className: "hint", children: e.offset_color })
            ] })
          ] }),
          /* @__PURE__ */ o.jsx("div", { className: "hint", children: r("El borde forma parte de la pieza (se tiene en cuenta al colocar y se guarda en la imagen final). El original nunca se modifica.") })
        ] })
      ] }),
      /* @__PURE__ */ o.jsxs(mt, { id: "corte", title: r("Estimación de corte"), open: l.corte, toggle: m, children: [
        /* @__PURE__ */ o.jsx("div", { className: "hint", children: $s(
          r(
            "Tiempo estimado de corte de la {maquina}, calculado a partir del perímetro de las siluetas y del recorrido entre formas.",
            { maquina: Is[e.maquina] ?? "Cricut Maker 3" }
          ),
          [Is[e.maquina] ?? "Cricut Maker 3"]
        ) }),
        y("Velocidad de corte", "corte_velocidad_mm_s", 1, 500, 1, "mm/s"),
        y("Velocidad de viaje (sin cortar)", "corte_viaje_mm_s", 1, 1e3, 5, "mm/s"),
        y("Tiempo extra por forma", "corte_extra_forma_s", 0, 30, 0.1, "s"),
        y("Factor de corrección", "corte_factor", 0.1, 20, 0.05, "×"),
        /* @__PURE__ */ o.jsx("div", { className: "hint", children: r("Ajusta el factor para corregir con tu máquina y material reales; se guarda para la próxima vez.") })
      ] }),
      /* @__PURE__ */ o.jsxs(
        mt,
        {
          id: "historial",
          title: r("Historial (deshacer/rehacer)"),
          open: l.historial,
          toggle: m,
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
                  onChange: (d) => x({ historial: d.target.checked })
                }
              ),
              /* @__PURE__ */ o.jsx("span", { className: "switch-text", children: r("Activar historial") })
            ] }),
            e.historial !== !1 && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
              y("Cambios que se guardan", "historial_max", 5, 200, 5),
              /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ o.jsx(
                  "input",
                  {
                    type: "checkbox",
                    className: "switch",
                    "data-testid": "set-hist-tamano",
                    checked: e.hist_tamano !== !1,
                    onChange: (d) => x({ hist_tamano: d.target.checked })
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
                    onChange: (d) => x({ hist_copias: d.target.checked })
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
                    onChange: (d) => x({ hist_borde: d.target.checked })
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
                    onChange: (d) => x({ hist_minis: d.target.checked })
                  }
                ),
                /* @__PURE__ */ o.jsx("span", { className: "switch-text", children: r("Minis") })
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ o.jsxs(mt, { id: "visualizacion", title: r("Visualización"), open: l.visualizacion, toggle: m, children: [
        /* @__PURE__ */ o.jsxs("div", { className: "ctl", children: [
          /* @__PURE__ */ o.jsx("label", { children: r("Tema") }),
          /* @__PURE__ */ o.jsx("div", { className: "theme-grid", "data-testid": "theme-grid", children: jo.map((d) => /* @__PURE__ */ o.jsxs(
            "button",
            {
              className: `theme-chip ${e.tema === d.key ? "active" : ""}`,
              "data-testid": `tema-${d.key}`,
              onClick: () => t({ tema: d.key }),
              children: [
                /* @__PURE__ */ o.jsx("span", { className: "dot", style: { background: d.colors.accent } }),
                /* @__PURE__ */ o.jsx("span", { className: "dot", style: { background: d.colors.accent2 } }),
                d.label
              ]
            },
            d.key
          )) })
        ] }),
        /* @__PURE__ */ o.jsx("div", { className: "ctl", children: /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
          /* @__PURE__ */ o.jsx(
            "input",
            {
              type: "checkbox",
              "data-testid": "set-ver-guias",
              checked: e.ver_guias,
              onChange: (d) => t({ ver_guias: d.target.checked })
            }
          ),
          r("Mostrar guías de límites al inicio")
        ] }) }),
        /* @__PURE__ */ o.jsxs("div", { className: "ctl", children: [
          /* @__PURE__ */ o.jsx("label", { children: r("Icono de la aplicación") }),
          /* @__PURE__ */ o.jsxs("div", { className: "row", children: [
            /* @__PURE__ */ o.jsx("img", { src: R.iconUrl(), alt: r("icono"), style: { width: 34, height: 34, borderRadius: 10 } }),
            /* @__PURE__ */ o.jsx("button", { "data-testid": "btn-cambiar-icono", onClick: () => {
              var d;
              return (d = C.current) == null ? void 0 : d.click();
            }, children: r("Cargar nuevo icono") }),
            /* @__PURE__ */ o.jsx(
              "input",
              {
                ref: C,
                type: "file",
                hidden: !0,
                accept: "image/*",
                onChange: (d) => {
                  var p;
                  const c = (p = d.target.files) == null ? void 0 : p[0];
                  c && R.setIcon(c).then(() => {
                    window.location.reload();
                  }), d.target.value = "";
                }
              }
            )
          ] }),
          /* @__PURE__ */ o.jsx("div", { className: "hint", children: r("Actualiza la barra de estado, la pestaña y el lanzador.") })
        ] })
      ] }),
      /* @__PURE__ */ o.jsxs(mt, { id: "extras", title: r("Extras"), open: l.extras, toggle: m, children: [
        /* @__PURE__ */ o.jsx("div", { className: "ctl", children: /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
          /* @__PURE__ */ o.jsx(
            "input",
            {
              type: "checkbox",
              "data-testid": "set-pikmin-activo",
              checked: e.pikmin_activo !== !1,
              onChange: (d) => x({ pikmin_activo: d.target.checked })
            }
          ),
          r("Mostrar Pikmin de vez en cuando")
        ] }) }),
        y("Frecuencia media", "pikmin_frecuencia_min", 0.1, 60, 0.1, "min"),
        /* @__PURE__ */ o.jsx("div", { className: "ctl", children: /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
          /* @__PURE__ */ o.jsx(
            "input",
            {
              type: "checkbox",
              "data-testid": "set-pikmin-sonido",
              checked: e.pikmin_sonido !== !1,
              onChange: (d) => x({ pikmin_sonido: d.target.checked })
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
              onChange: (d) => x({ pikmin_sonido_morir: d.target.checked })
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
              onChange: (d) => t({ comprobar_versiones: d.target.checked })
            }
          ),
          r("Comprobar si hay versiones nuevas al iniciar")
        ] }) }),
        /* @__PURE__ */ o.jsx("div", { className: "hint", children: r("Las imágenes rotan entre las del proyecto y las de Pikmin Bloom.") })
      ] }),
      /* @__PURE__ */ o.jsx("div", { className: "creditos", "data-testid": "creditos", children: $s(
        r("CryCat · hecha por Daniel Hernández Ferrándiz y Wivi.eve, para los artistas."),
        ["CryCat", "Daniel Hernández Ferrándiz", "Wivi.eve"]
      ) })
    ] }),
    /* @__PURE__ */ o.jsx(
      ud,
      {
        open: s,
        initial: e.carpeta_export,
        onClose: () => f(!1),
        onPick: (d) => t({ carpeta_export: d })
      }
    )
  ] });
}
const vt = (e) => (globalThis.__crycatAssets || "") + e;
function Os(e) {
  if (!Number.isFinite(e) || e <= 0) return "—";
  if (e < 60) return `${Math.ceil(e)} s`;
  const t = Math.floor(e / 60), n = Math.round(e % 60);
  return t < 60 ? `${t} min ${n} s` : `${Math.floor(t / 60)} h ${t % 60} min`;
}
function Rm({
  job: e,
  backendOk: t,
  result: n,
  estimate: r,
  volumen: a = 0.5,
  mute: i = !1,
  onVolumen: l,
  onMute: u,
  onIdioma: s,
  onEasterEgg: f,
  onAyuda: g,
  onReportar: v
}) {
  var q, G;
  const m = rt(), x = kl(), [C, y] = w.useState([]), [b, d] = w.useState(0), [c, p] = w.useState(null), [k, j] = w.useState(!1), [N, _] = w.useState(""), z = w.useRef(!1), h = w.useRef([]);
  w.useEffect(() => {
    fetch("/api/funmsgs").then((L) => L.ok ? L.json() : { msgs: [] }).then((L) => y(L.msgs ?? [])).catch(() => {
    });
  }, []), w.useEffect(() => {
    let L = !0;
    return R.version().then((Z) => {
      L && (p(Z), !Z.comprobado && !z.current && (z.current = !0, R.checkVersion().then((Ie) => L && p(Ie)).catch(() => {
      })));
    }).catch(() => {
    }), () => {
      L = !1;
    };
  }, []);
  const S = ((q = c == null ? void 0 : c.actualizacion) == null ? void 0 : q.estado) === "descargando" || ((G = c == null ? void 0 : c.actualizacion) == null ? void 0 : G.estado) === "instalando";
  w.useEffect(() => {
    if (!S) return;
    const L = setInterval(() => {
      R.version().then(p).catch(() => {
      });
    }, 700);
    return () => clearInterval(L);
  }, [S]);
  const $ = !!(e && !e.done);
  w.useEffect(() => {
    if (!$) return;
    const L = setInterval(() => d((Z) => Z + 1), 1200);
    return () => clearInterval(L);
  }, [$]);
  const oe = C.length ? C : [
    m("Optimizando…"),
    "Rascando Pikachus…",
    "Contando Mausholds…",
    "Tortilleando Exeggcutes…",
    "Ordenando los cubiertos de Sinistea…"
  ], ce = w.useMemo(() => {
    if (N) return N;
    if (S) {
      const L = c == null ? void 0 : c.actualizacion;
      if ((L == null ? void 0 : L.estado) === "instalando") return m("Instalando y reiniciando…");
      const Z = (L == null ? void 0 : L.progreso) != null ? Math.round(L.progreso) : null;
      return Z != null ? m("Descargando… {p}%", { p: Z }) : (L == null ? void 0 : L.mensaje) || m("Descargando actualización…");
    }
    if ($)
      return oe[b % oe.length];
    if (e && e.status === "error") return e.message || "Error";
    if (n && n.pages > 0) {
      const L = Math.round(n.efficiency * 100);
      return m(
        "{n} imágenes en {p} página{s} · eficiencia {ef}% · {m} minis",
        {
          n: n.placed,
          p: n.pages,
          s: n.pages > 1 ? "s" : "",
          ef: L,
          m: n.minis
        }
      );
    }
    return m("Listo para empezar");
  }, [N, S, $, e, oe, b, n, m, c]), Le = Math.round(((e == null ? void 0 : e.progress) ?? 0) * 100), dt = w.useMemo(() => {
    const L = e == null ? void 0 : e.eta_s;
    return !$ || L === void 0 || L === null || L <= 0.5 ? "" : m(" · {x} restante", { x: Os(L) });
  }, [e == null ? void 0 : e.eta_s, $, m]), pe = w.useMemo(() => !r || !r.segundos ? "" : Os(r.segundos), [r]), Re = async () => {
    j(!0), _("");
    try {
      const L = await R.checkVersion();
      p(L), L.error ? _(m("Sin conexión")) : L.hay_nueva || _(m("Estás en la última versión"));
    } catch {
      _(m("Sin conexión"));
    } finally {
      j(!1);
    }
  }, M = async () => {
    _("");
    try {
      const L = await R.updateVersion();
      L.ok ? _(m("Instalando y reiniciando…")) : L.modo === "dev" && L.url ? (_(m("Modo desarrollo: se actualiza con git")), await R.openReleases().catch(() => {
      })) : _(L.mensaje || m("No se pudo actualizar")), R.version().then(p).catch(() => {
      });
    } catch {
      _(m("No se pudo actualizar"));
    }
  }, F = !!(c != null && c.hay_nueva && !$ && !S) ? m("Nueva versión {v} disponible", { v: (c == null ? void 0 : c.ultima) ?? "" }) : "";
  return /* @__PURE__ */ o.jsxs("div", { className: "statusbar", "data-testid": "statusbar", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "brand", children: [
      /* @__PURE__ */ o.jsx(
        "img",
        {
          src: R.iconUrl(),
          alt: "CryCat",
          "data-testid": "brand-icon",
          title: m("CryCat"),
          style: { cursor: "pointer" },
          onClick: () => {
            const L = Date.now();
            h.current = [...h.current, L].filter((Z) => L - Z < 2500), h.current.length >= 5 && (h.current = [], _(m("¡Fiesta Pikmin!")), window.setTimeout(() => _(""), 4e3), f == null || f());
          }
        }
      ),
      /* @__PURE__ */ o.jsx("span", { className: "nombre", children: "CryCat" })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "center", "data-testid": "status-center", children: [
      /* @__PURE__ */ o.jsx("span", { className: "msg", children: ce }),
      !!n && n.pages > 1 && /* @__PURE__ */ o.jsx(
        "span",
        {
          className: "aviso-paginas",
          "data-testid": "aviso-paginas",
          title: m("No cabe todo en una página: se usarán varias"),
          children: m("No cabe en una página: {n} páginas", { n: n.pages })
        }
      ),
      $ && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        /* @__PURE__ */ o.jsx("div", { className: "progress", "data-testid": "progress", children: /* @__PURE__ */ o.jsx("div", { style: { width: `${Math.max(4, Le)}%` } }) }),
        /* @__PURE__ */ o.jsxs("span", { className: "eta", "data-testid": "eta", children: [
          Le,
          "%",
          dt
        ] }),
        /* @__PURE__ */ o.jsx(
          "img",
          {
            className: "piensa",
            "data-testid": "piensa",
            src: vt("/piensa.gif"),
            alt: "",
            title: m("Pensando…"),
            onError: (L) => {
              L.currentTarget.style.display = "none";
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
          title: m("Cómo usar CryCat (vuelve a mostrar la ayuda)"),
          onClick: () => g == null ? void 0 : g(),
          children: [
            /* @__PURE__ */ o.jsx(jm, { size: 15 }),
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
          title: m("Reportar un bug: abre un issue en GitHub ya rellenado"),
          onClick: () => v == null ? void 0 : v(),
          children: [
            /* @__PURE__ */ o.jsx(sd, { size: 15 }),
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
          title: m("Apoyar el proyecto (PayPal)"),
          onClick: () => window.open(
            "https://paypal.me/Darkniel42",
            "_blank",
            "noopener"
          ),
          children: [
            /* @__PURE__ */ o.jsx(Sm, { size: 15 }),
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
          onClick: () => window.open((c == null ? void 0 : c.repo) ?? "https://github.com/dhernandezgit/CryCat-Tool", "_blank", "noopener"),
          children: /* @__PURE__ */ o.jsx(ym, { size: 15 })
        }
      ),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          className: "idioma",
          "data-testid": "btn-idioma",
          title: m("Idioma"),
          onClick: () => s == null ? void 0 : s(x === "es" ? "en" : "es"),
          children: x.toUpperCase()
        }
      ),
      /* @__PURE__ */ o.jsxs(
        "span",
        {
          className: "version-chip",
          "data-testid": "version-chip",
          title: m("Versión actual"),
          children: [
            (c == null ? void 0 : c.hay_nueva) && !S && /* @__PURE__ */ o.jsx(
              "button",
              {
                className: "alerta-version",
                "data-testid": "aviso-version",
                title: F || m("Hay una versión nueva"),
                onClick: M,
                children: /* @__PURE__ */ o.jsx(xm, { size: 14 })
              }
            ),
            "v",
            (c == null ? void 0 : c.actual) ?? "—",
            (c == null ? void 0 : c.hay_nueva) && (c == null ? void 0 : c.ultima) && /* @__PURE__ */ o.jsxs("span", { className: "version-nueva", "data-testid": "version-nueva", children: [
              "v",
              c.ultima
            ] }),
            /* @__PURE__ */ o.jsx(
              "button",
              {
                className: "btn-mini",
                "data-testid": "btn-comprobar",
                title: m("Comprobar versiones"),
                onClick: Re,
                disabled: k,
                children: k ? "…" : /* @__PURE__ */ o.jsx(km, { size: 14 })
              }
            ),
            (c == null ? void 0 : c.hay_nueva) && /* @__PURE__ */ o.jsx(
              "button",
              {
                className: "btn-mini destacado",
                "data-testid": "btn-actualizar",
                title: m("Descargar e instalar la nueva versión"),
                onClick: M,
                children: /* @__PURE__ */ o.jsx(wm, { size: 14 })
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ o.jsxs("div", { className: "vol-control", children: [
        /* @__PURE__ */ o.jsx(
          "button",
          {
            "data-testid": "btn-mute",
            className: "icon-sonido",
            title: m(i ? "Activar sonido" : "Silenciar"),
            "aria-label": m(i ? "Activar sonido" : "Silenciar"),
            onClick: () => u == null ? void 0 : u(!i),
            children: i ? /* @__PURE__ */ o.jsx(rm, {}) : /* @__PURE__ */ o.jsx(nm, {})
          }
        ),
        /* @__PURE__ */ o.jsx(
          "input",
          {
            type: "range",
            min: 0,
            max: 1,
            step: 0.05,
            "data-testid": "volumen",
            title: m("Volumen"),
            value: a,
            onChange: (L) => {
              l == null || l(Number(L.target.value)), i && Number(L.target.value) > 0 && (u == null || u(!1));
            }
          }
        )
      ] }),
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
            pe || "—"
          ]
        }
      )
    ] })
  ] });
}
const Im = [
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
], Am = "/pikmin_bloom/", Fs = "/pikmin/alma.png", Dm = "/sonidos/pikmin.mp3", $m = "/sonidos/pikmin_morir.mp3";
function Om(e) {
  const [t, n] = w.useState(Im), [r, a] = w.useState([]);
  return w.useEffect(() => {
    fetch(vt("/pikmin/indice.json")).then((i) => i.ok ? i.json() : null).then((i) => {
      Array.isArray(i) && i.length && n(i.map((l) => "/pikmin/" + l));
    }).catch(() => {
    }), fetch(vt("/pikmin_bloom/indice.json")).then((i) => i.ok ? i.json() : []).then((i) => {
      if (!Array.isArray(i)) return;
      const l = [...i];
      for (let u = l.length - 1; u > 0; u--) {
        const s = Math.floor(Math.random() * (u + 1));
        [l[u], l[s]] = [l[s], l[u]];
      }
      a(l.slice(0, 60).map((u) => vt(Am + u)));
    }).catch(() => {
    });
  }, []), w.useMemo(
    () => e && e.length ? [...e, ...r].map(vt) : [...t, ...r].map(vt),
    [e, t, r]
  );
}
function Fm({
  activo: e = !0,
  frecuenciaMin: t = 5,
  sonido: n = !0,
  sonidoMorir: r = !0,
  volumen: a = 0.5,
  mute: i = !1,
  fiesta: l = !1,
  minDelay: u,
  maxDelay: s,
  fuentes: f
}) {
  const g = Om(f), [v, m] = w.useState([]), x = w.useRef(void 0), C = w.useRef(
    typeof document < "u" && document.visibilityState === "hidden"
  ), y = w.useRef(l);
  y.current = l;
  const b = Math.max(5e3, t * 6e4), d = (j) => {
    if (!(!n || i))
      try {
        const N = new Audio(vt(j ? $m : Dm));
        N.volume = Math.min(1, Math.max(0, a)), N.play().catch(() => {
        });
      } catch {
      }
  }, c = () => {
    const j = r && Math.random() < 0.25, N = j ? vt(Fs) : g[Math.floor(Math.random() * g.length)] ?? vt(Fs);
    m((_) => [..._, {
      src: N,
      left: 3 + Math.random() * 92,
      key: Date.now() + _.length,
      morir: j,
      estado: "paseando"
    }]), d(j);
  }, p = () => {
    if (!e) return;
    const j = u ?? Math.round(b * 0.5), N = s ?? Math.round(b * 1.5), _ = j + Math.random() * Math.max(1, N - j);
    x.current = window.setTimeout(c, _);
  };
  w.useEffect(() => {
    if (!e) {
      window.clearTimeout(x.current), m([]);
      return;
    }
    return p(), () => window.clearTimeout(x.current);
  }, [e, t, n, r, a, i, g]), w.useEffect(() => {
    const j = () => {
      C.current = document.visibilityState === "hidden", !C.current && y.current && window.setTimeout(() => {
        m((N) => N.length ? (d(!1), N.map((_) => ({ ..._, estado: "festejando" }))) : N), window.setTimeout(() => {
          m([]), p();
        }, 2200);
      }, 1e3);
    };
    return document.addEventListener("visibilitychange", j), () => document.removeEventListener("visibilitychange", j);
  }, []);
  const k = (j) => {
    if (y.current && C.current) {
      m((N) => N.map((_) => _.key === j ? { ..._, estado: "quieto" } : _));
      return;
    }
    m((N) => N.filter((_) => _.key !== j)), p();
  };
  return /* @__PURE__ */ o.jsx(o.Fragment, { children: v.map((j) => /* @__PURE__ */ o.jsx(
    "div",
    {
      className: `pikmin-pet ${j.estado}${j.morir ? " muriendo" : ""}`,
      "data-testid": "pikmin-pet",
      "data-estado": j.estado,
      "data-morir": j.morir ? "1" : "0",
      style: { left: `${j.left}%` },
      onAnimationEnd: () => k(j.key),
      children: /* @__PURE__ */ o.jsx(
        "img",
        {
          src: j.src,
          alt: "",
          "aria-hidden": "true",
          onError: () => k(j.key)
        }
      )
    },
    j.key
  )) });
}
const Bs = "crycat_bienvenida_v1";
function Bm() {
  const [e, t] = w.useState(!1);
  return w.useEffect(() => {
    try {
      localStorage.getItem(Bs) !== "1" && t(!0);
    } catch {
      t(!0);
    }
  }, []), { visible: e, abrir: () => t(!0), cerrar: () => {
    try {
      localStorage.setItem(Bs, "1");
    } catch {
    }
    t(!1);
  } };
}
function Um({ open: e, onClose: t, onAbrirCarpeta: n }) {
  const r = rt(), [a, i] = w.useState("inicio");
  if (!e) return null;
  const l = [
    r("Arrastra tus imágenes al panel de la izquierda (PNG, JPG, PSD, AI, SVG…)."),
    r("Ajusta el tamaño: usa la escala o escribe el ancho/alto exacto en mm."),
    r("Activa «Mini» en las imágenes que quieras repetir rellenando huecos."),
    r("Pulsa «Recalcular» si quieres recolocarlo a fondo (o déjalo en automático)."),
    r("Guarda: un PNG a 300 ppp listo para imprimir. Nunca sobrescribe nada.")
  ], u = [
    r("Abre Cricut Design Space."),
    r("Sube el PNG y elige «Imagen completa» (conserva la transparencia)."),
    r("Redimensiónala al tamaño real que ves en CryCat."),
    r("Pulsa «Crear» y comprueba que las medidas coinciden."),
    r("Imprime en papel mate blanco (o usa las marcas de Cricut) y colócalo en la esterilla."),
    r("¡Listo! La máquina leerá las marcas y cortará tus pegatinas.")
  ];
  return /* @__PURE__ */ o.jsx("div", { className: "modal-back", "data-testid": "ayuda-dialog", children: /* @__PURE__ */ o.jsxs("div", { className: "modal ayuda-modal", children: [
    /* @__PURE__ */ o.jsx("h3", { children: r(a === "inicio" ? "Cómo usar CryCat" : "Cómo usar tu PNG en Cricut Design Space") }),
    /* @__PURE__ */ o.jsx("ol", { className: "lista-pasos", "data-testid": "ayuda-pasos", children: (a === "inicio" ? l : u).map((s, f) => /* @__PURE__ */ o.jsx("li", { children: s }, f)) }),
    a === "inicio" && /* @__PURE__ */ o.jsx("div", { className: "hint", children: r("Los archivos originales nunca se modifican y la exportación nunca sobrescribe.") }),
    /* @__PURE__ */ o.jsx("div", { className: "modal-botones", children: a === "inicio" ? /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
      n && /* @__PURE__ */ o.jsxs("button", { "data-testid": "ayuda-carpeta", onClick: n, children: [
        /* @__PURE__ */ o.jsx(Mr, { size: 15 }),
        " ",
        r("Abrir carpeta de guardado")
      ] }),
      /* @__PURE__ */ o.jsx("button", { "data-testid": "ayuda-cricut", onClick: () => i("cricut"), children: r("Pasos en Cricut Design Space") }),
      /* @__PURE__ */ o.jsx("button", { className: "primary", "data-testid": "ayuda-cerrar", onClick: t, children: r("¡Entendido!") })
    ] }) : /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
      /* @__PURE__ */ o.jsx("button", { "data-testid": "ayuda-volver", onClick: () => i("inicio"), children: r("Volver") }),
      /* @__PURE__ */ o.jsx("button", { className: "primary", onClick: t, children: r("¡Entendido!") })
    ] }) })
  ] }) });
}
const Vm = "https://github.com/dhernandezgit/CryCat-Tool", Hm = [
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
function qm({
  open: e,
  onClose: t,
  settings: n,
  job: r,
  result: a
}) {
  const i = rt(), [l, u] = w.useState(""), [s, f] = w.useState(""), [g, v] = w.useState(""), [m, x] = w.useState(!0), [C, y] = w.useState(!0), [b, d] = w.useState(!0), [c, p] = w.useState(!1);
  w.useEffect(() => {
    e && (R.version().then((h) => u(h.actual)).catch(() => {
    }), p(!1));
  }, [e]);
  const k = () => (globalThis.__crycatErrores ?? []).map(
    (S) => `- [${S.t}] ${S.msg} (${S.donde || "?"})`
  );
  if (!e) return null;
  const j = () => {
    var oe, ce;
    const h = navigator.userAgent, S = !!globalThis.__crycatBase, $ = [
      `- CryCat: v${l || "?"}`,
      `- Modo: ${S ? "web (navegador)" : "escritorio"}`,
      `- Sistema: ${navigator.platform || "-"}`,
      `- Navegador: ${h}`,
      `- Idioma: ${navigator.language || "-"}`,
      `- Pantalla: ${((oe = window.screen) == null ? void 0 : oe.width) ?? "?"}x${((ce = window.screen) == null ? void 0 : ce.height) ?? "?"} @${window.devicePixelRatio ?? 1}x (ventana ${window.innerWidth}x${window.innerHeight})`,
      `- Núcleos: ${navigator.hardwareConcurrency ?? "?"}`
    ];
    return a && $.push(`- Elementos: ${a.pages} página(s)`), r && $.push(`- Último trabajo: ${r.status}${r.message ? ` — ${r.message}` : ""}`), $.join(`
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
  ].map((S) => `- ${S}: ${String(n[S])}`).join(`
`) : "", _ = () => {
    const h = [
      "### Qué pasó",
      s.trim() || "(cuéntalo aquí)",
      "",
      "### Pasos para reproducirlo",
      g.trim() || "1. …",
      ""
    ];
    m && h.push("### Entorno", j(), ""), C && n && h.push("### Ajustes", N(), "");
    const S = k();
    return b && S.length && h.push("### Errores recogidos", S.join(`
`), ""), h.push("<!-- Abierto desde el botón «Reportar» de CryCat -->"), h.join(`
`);
  }, z = () => {
    const h = `[Bug] ${s.trim().split(`
`)[0].slice(0, 70) || "algo no va bien"}`, S = `${Vm}/issues/new?` + new URLSearchParams({
      title: h,
      body: _(),
      labels: "bug"
    }).toString();
    window.open(S, "_blank", "noopener"), t();
  };
  return /* @__PURE__ */ o.jsx("div", { className: "modal-back", "data-testid": "reportar-dialog", children: /* @__PURE__ */ o.jsxs("div", { className: "modal", children: [
    /* @__PURE__ */ o.jsx("h3", { children: i("Reportar un bug") }),
    /* @__PURE__ */ o.jsx("div", { className: "hint", children: i("Se abrirá la página de GitHub con el informe ya escrito: revisa, ajusta y pulsa «Submit new issue».") }),
    /* @__PURE__ */ o.jsx("div", { className: "hint", children: i("Sugerencias (pulsa para añadirla):") }),
    /* @__PURE__ */ o.jsx("div", { className: "reportar-chips", children: Hm.map(([h, S]) => /* @__PURE__ */ o.jsx(
      "button",
      {
        type: "button",
        className: "chip",
        "data-testid": `reportar-sug-${h}`,
        onClick: () => f(($) => ($ ? $ + `
` : "") + S),
        children: i(h)
      },
      h
    )) }),
    /* @__PURE__ */ o.jsxs("label", { className: "col", children: [
      i("¿Qué ha pasado?"),
      /* @__PURE__ */ o.jsx(
        "textarea",
        {
          "data-testid": "reportar-texto",
          rows: 4,
          value: s,
          placeholder: i("Cuéntalo con tus palabras: qué esperabas y qué pasó."),
          onChange: (h) => f(h.target.value)
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
          onChange: (h) => v(h.target.value)
        }
      )
    ] }),
    /* @__PURE__ */ o.jsxs("label", { className: "row", children: [
      /* @__PURE__ */ o.jsx(
        "input",
        {
          type: "checkbox",
          "data-testid": "reportar-entorno",
          checked: m,
          onChange: (h) => x(h.target.checked)
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
          checked: C,
          onChange: (h) => y(h.target.checked)
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
          checked: b,
          onChange: (h) => d(h.target.checked)
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
                `${s}

${g}

${_()}`
              ), p(!0);
            } catch {
            }
          },
          children: i(c ? "¡Copiado!" : "Copiar informe")
        }
      ),
      /* @__PURE__ */ o.jsx("button", { className: "primary", "data-testid": "reportar-abrir", onClick: z, children: i("Abrir issue en GitHub") })
    ] })
  ] }) });
}
function Gm() {
  const [e, t] = w.useState([]), [n, r] = w.useState(null), [a, i] = w.useState(null), [l, u] = w.useState(null), [s, f] = w.useState(null), [g, v] = w.useState(null), [m, x] = w.useState(!0), [C, y] = w.useState(!1), [b, d] = w.useState({
    eyeTransparent: !1,
    eyeFosforito: !1,
    guidesVisible: !0,
    verBordes: !1,
    viewMode: 1,
    saveName: ""
  }), [c, p] = w.useState(33.3), [k, j] = w.useState(33.3), N = Bm(), _ = w.useRef(null), z = w.useRef(null);
  w.useEffect(() => {
    (async () => {
      try {
        const A = await R.getSettings();
        f(A.settings), As(A.settings.tema), d((B) => ({
          ...B,
          guidesVisible: A.settings.ver_guias,
          eyeTransparent: A.settings.fondo_transparente
        })), t((await R.listAssets()).map(zr)), i(await R.result());
      } catch {
        x(!1);
      }
    })();
  }, []), w.useEffect(() => {
    const A = setInterval(async () => {
      try {
        await R.health(), x(!0);
      } catch {
        x(!1);
      }
    }, 5e3);
    return () => clearInterval(A);
  }, []);
  const h = w.useCallback(async () => {
    try {
      t((await R.listAssets()).map(zr)), i(await R.result());
      try {
        u(await R.estimate());
      } catch {
      }
    } catch {
      x(!1);
    }
  }, []), S = w.useCallback((A) => {
    z.current && window.clearInterval(z.current), z.current = window.setInterval(async () => {
      try {
        const B = await R.job(A);
        v(B), B.done && (window.clearInterval(z.current), z.current = null, await h(), B.status === "done" && window.setTimeout(() => v(null), 2500));
      } catch {
        window.clearInterval(z.current), z.current = null;
      }
    }, 300);
  }, []), $ = w.useCallback(async () => {
    try {
      const A = await R.optimize();
      v(A), S(A.id);
    } catch {
      x(!1);
    }
  }, [S]), oe = w.useCallback(
    async (A) => {
      try {
        const B = await R.optimize(A, !0);
        v(B), S(B.id);
      } catch {
        x(!1);
      }
    },
    [S]
  ), ce = w.useCallback(() => {
    s && s.auto_recalcular === !1 || (_.current && window.clearTimeout(_.current), _.current = window.setTimeout($, 400));
  }, [$, s]), Le = w.useRef(null);
  w.useEffect(() => {
    Le.current = ce;
  }, [ce]);
  const dt = w.useRef(!1);
  w.useEffect(() => {
    if (!(!s || dt.current)) {
      if (e.length > 0) {
        dt.current = !0;
        return;
      }
      dt.current = !0, R.crearDemo().then(async (A) => {
        var B;
        A.ok && (await h(), (B = Le.current) == null || B.call(Le));
      }).catch(() => {
      });
    }
  }, [s, e.length, h]);
  const pe = w.useCallback(
    async (A) => {
      f((B) => B && { ...B, ...A }), A.tema && As(A.tema);
      try {
        const B = await R.putSettings(A);
        if (B.job)
          v(B.job), S(B.job.id);
        else
          try {
            u(await R.estimate());
          } catch {
          }
      } catch {
        x(!1);
      }
    },
    [S]
  ), Re = w.useRef([]), M = w.useRef([]), [O, F] = w.useState({ puedeDeshacer: !1, puedeRehacer: !1 }), q = (s == null ? void 0 : s.historial) !== !1, G = (s == null ? void 0 : s.historial_max) ?? 40, L = () => F({
    puedeDeshacer: Re.current.length > 0,
    puedeRehacer: M.current.length > 0
  }), Z = w.useCallback(() => {
    const A = [];
    return (s == null ? void 0 : s.hist_tamano) !== !1 && A.push("scale_pct"), (s == null ? void 0 : s.hist_copias) !== !1 && A.push("copies"), (s == null ? void 0 : s.hist_borde) !== !1 && A.push("offset_mm", "offset_modo", "offset_color"), (s == null ? void 0 : s.hist_minis) !== !1 && A.push("mini_enabled", "mini_quota"), A;
  }, [
    s == null ? void 0 : s.hist_tamano,
    s == null ? void 0 : s.hist_copias,
    s == null ? void 0 : s.hist_borde,
    s == null ? void 0 : s.hist_minis
  ]), Ie = w.useCallback((A) => {
    const B = {};
    for (const Nt of Z()) B[Nt] = A[Nt];
    return B;
  }, [Z]), Se = w.useCallback(() => {
    q && (Re.current = [...Re.current, e].slice(-G), M.current = [], L());
  }, [e, q, G]), Ye = w.useCallback(async () => {
    const A = Re.current.pop();
    if (A) {
      M.current = [...M.current, e], t(A), L();
      for (const B of A)
        await R.patchAsset(B.id, Ie(B)).catch(() => {
        });
      await h();
    }
  }, [e, h, Ie]), Vn = w.useCallback(async () => {
    const A = M.current.pop();
    if (A) {
      Re.current = [...Re.current, e], t(A), L();
      for (const B of A)
        await R.patchAsset(B.id, Ie(B)).catch(() => {
        });
      await h();
    }
  }, [e, h, Ie]);
  w.useEffect(() => {
    const A = (B) => {
      if (!(B.ctrlKey || B.metaKey)) return;
      const ft = B.target;
      if (ft && (ft.tagName === "INPUT" || ft.tagName === "TEXTAREA" || ft.tagName === "SELECT" || ft.isContentEditable)) return;
      const Et = B.key.toLowerCase();
      Et === "z" && !B.shiftKey ? (B.preventDefault(), Ye()) : (Et === "y" || Et === "z" && B.shiftKey) && (B.preventDefault(), Vn());
    };
    return window.addEventListener("keydown", A), () => window.removeEventListener("keydown", A);
  }, [Ye, Vn]);
  const Kt = w.useCallback(
    (A) => {
      const B = (ft) => {
        const Ar = window.innerWidth, Et = ft.clientX / Ar * 100;
        A === "left" ? p(Math.min(45, Math.max(12, Et))) : j(Math.min(60, Math.max(20, Et - c)));
      }, Nt = () => {
        window.removeEventListener("mousemove", B), window.removeEventListener("mouseup", Nt);
      };
      window.addEventListener("mousemove", B), window.addEventListener("mouseup", Nt);
    },
    [c]
  );
  return w.useEffect(() => {
    document.documentElement.lang = (s == null ? void 0 : s.idioma) ?? "es";
  }, [s == null ? void 0 : s.idioma]), s ? /* @__PURE__ */ o.jsx(em, { idioma: s.idioma ?? "es", children: /* @__PURE__ */ o.jsxs("div", { className: "app", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "main", children: [
      /* @__PURE__ */ o.jsx("div", { className: "panel left", style: { width: `${c}%` }, "data-testid": "file-panel", children: /* @__PURE__ */ o.jsx(
        Em,
        {
          assets: e,
          result: a,
          settings: s,
          onChange: async () => {
            await h(), ce();
          },
          saveSettings: pe,
          onEditarContorno: (A) => r(A),
          onAntesDeCambiar: Se
        }
      ) }),
      /* @__PURE__ */ o.jsx("div", { className: "splitter", "data-testid": "splitter-left", onMouseDown: () => Kt("left") }),
      /* @__PURE__ */ o.jsx("div", { className: "viewer-wrap", style: { width: `${k}%` }, children: /* @__PURE__ */ o.jsx(
        zm,
        {
          assets: e,
          result: a,
          settings: s,
          ui: b,
          setUi: d,
          saveSettings: pe,
          optimize: $,
          onRefresh: h,
          onJob: (A) => {
            v(A), S(A.id);
          },
          onRecalc: oe,
          editando: n,
          onFinEdicion: async () => {
            r(null), await h();
          },
          onDeshacer: Ye,
          onRehacer: Vn,
          puedeDeshacer: O.puedeDeshacer,
          puedeRehacer: O.puedeRehacer
        }
      ) }),
      /* @__PURE__ */ o.jsx("div", { className: "splitter", "data-testid": "splitter-center", onMouseDown: () => Kt("center") }),
      /* @__PURE__ */ o.jsx("div", { className: "panel right", style: { flex: 1 }, "data-testid": "settings-panel", children: /* @__PURE__ */ o.jsx(
        Lm,
        {
          settings: s,
          assets: e,
          saveSettings: pe
        }
      ) })
    ] }),
    /* @__PURE__ */ o.jsx(
      Rm,
      {
        job: g,
        backendOk: m,
        result: a,
        estimate: l,
        volumen: s.volumen ?? 0.5,
        mute: s.mute ?? !1,
        onVolumen: (A) => pe({ volumen: A }),
        onMute: (A) => pe({ mute: A }),
        onIdioma: (A) => pe({ idioma: A }),
        onEasterEgg: () => pe({
          pikmin_fiesta: !s.pikmin_fiesta
        }),
        onAyuda: N.abrir,
        onReportar: () => y(!0)
      }
    ),
    /* @__PURE__ */ o.jsx(
      Fm,
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
    /* @__PURE__ */ o.jsx(
      Um,
      {
        open: N.visible,
        onClose: N.cerrar,
        onAbrirCarpeta: () => void R.fsOpen(
          s.carpeta_export || ""
        ).catch(() => {
        })
      }
    ),
    /* @__PURE__ */ o.jsx(
      qm,
      {
        open: C,
        onClose: () => y(!1),
        settings: s,
        job: g,
        result: a
      }
    )
  ] }) }) : /* @__PURE__ */ o.jsx("div", { style: { padding: 30 }, children: tm("es", "Cargando CryCat…") });
}
const cd = document.getElementById("root"), Ei = [
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
], Co = 7, fa = [];
globalThis.__crycatErrores = fa;
const dd = (e, t) => {
  fa.push({ t: (/* @__PURE__ */ new Date()).toISOString().slice(11, 19), msg: e, donde: t }), fa.length > 12 && fa.shift();
};
window.addEventListener("error", (e) => dd(String(e.message || e.error || "error"), e.filename || ""));
window.addEventListener("unhandledrejection", (e) => dd(
  String(e.reason && e.reason.message || e.reason || "promesa"),
  "promesa"
));
let _o;
function Us(e, t = !1) {
  window.clearTimeout(_o);
  const n = rd().colors;
  if (cd.innerHTML = `
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
                min-height:1.2em">${t ? "" : "Paso 1 de " + Co}</div>
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
  let r = Math.floor(Math.random() * Ei.length);
  const a = () => {
    const l = document.getElementById("carga-fun");
    l && (l.textContent = Ei[r++ % Ei.length]);
  }, i = () => {
    a(), _o = window.setTimeout(
      i,
      2200 + Math.random() * 1600
    );
  };
  i();
}
const Pi = (e, t) => {
  const n = document.getElementById("carga-txt");
  if (n && (n.textContent = e), t) {
    const r = document.getElementById("carga-paso");
    r && (r.textContent = `Paso ${t} de ${Co}`);
    const a = document.getElementById("carga-barra");
    a && (a.style.width = `${Math.round(t / Co * 100)}%`);
  }
};
let dr = null;
const No = (e) => {
  const t = new Uint8Array(e);
  let n = "";
  const r = 32768;
  for (let a = 0; a < t.length; a += r)
    n += String.fromCharCode.apply(null, t.subarray(a, a + r));
  return btoa(n);
}, Wm = (e) => {
  const t = atob(e || ""), n = new Uint8Array(t.length);
  for (let r = 0; r < t.length; r++) n[r] = t.charCodeAt(r);
  return n;
};
async function Qm(e) {
  const t = "----crycat" + Math.random().toString(36).slice(2), n = [], r = [];
  e.forEach((i, l) => r.push([l, i]));
  for (const [i, l] of r)
    l instanceof Blob ? (n.push(`--${t}\r
Content-Disposition: form-data; name="${i}"; filename="${l.name || "file"}"\r
Content-Type: ${l.type || "application/octet-stream"}\r
\r
`), n.push(l), n.push(`\r
`)) : n.push(`--${t}\r
Content-Disposition: form-data; name="${i}"\r
\r
${l}\r
`);
  n.push(`--${t}--\r
`);
  const a = new Blob(n);
  return [
    No(await a.arrayBuffer()),
    `multipart/form-data; boundary=${t}`
  ];
}
async function Ym(e, t, n) {
  const r = new URL(t, location.href), a = r.pathname.indexOf("/api/"), i = (a >= 0 ? r.pathname.slice(a) : r.pathname) + r.search, l = {};
  new Headers((n == null ? void 0 : n.headers) || {}).forEach((v, m) => {
    l[m] = v;
  });
  let u = "";
  const s = n == null ? void 0 : n.body;
  if (s instanceof FormData) {
    const [v, m] = await Qm(s);
    u = v, l["content-type"] = m;
  } else s instanceof Blob ? u = No(await s.arrayBuffer()) : typeof s == "string" && (u = No(new TextEncoder().encode(s).buffer));
  const f = `import json
from crycat import webapi
await webapi.peticion(` + JSON.stringify(e) + ", " + JSON.stringify(i) + ", " + JSON.stringify(JSON.stringify(l)) + ", " + JSON.stringify(u) + ")", g = JSON.parse(await dr.runPythonAsync(f));
  return new Response(Wm(g.body), {
    status: g.status || 200,
    headers: g.headers || { "content-type": "application/json" }
  });
}
function Km() {
  const e = window.fetch.bind(window);
  window.fetch = async (t, n) => {
    const r = typeof t == "string" ? t : t && t.url ? t.url : String(t);
    if (r.includes("/api/") && dr)
      try {
        return await Ym(((n == null ? void 0 : n.method) || "GET").toUpperCase(), r, n);
      } catch (a) {
        return new Response(
          "error: " + a.message,
          { status: 500 }
        );
      }
    return e(t, n);
  };
}
async function Xm() {
  try {
    if (Us("Preparando el entorno…"), "serviceWorker" in navigator)
      try {
        const n = new URL("../", location.href).pathname;
        await Promise.race([
          navigator.serviceWorker.register("../sw.js", { scope: n }).then(() => navigator.serviceWorker.ready),
          new Promise((r) => setTimeout(r, 6e3))
        ]);
      } catch {
      }
    dr = await (await import(new URL("../pyodide-crycat.js?v=${VERSION}", import.meta.url).href)).cargarCryCat(Pi), Pi("Instalando FastAPI en el navegador (solo la primera vez)…", 6), await dr.runPythonAsync(
      `import asyncio
from crycat import webapi
await webapi.iniciar()`
    ), navigator.serviceWorker.addEventListener("message", async (n) => {
      const r = n.data;
      if (!r || r.tipo !== "api") return;
      const a = n.ports && n.ports[0];
      if (a)
        try {
          const i = `import json
from crycat import webapi
await webapi.peticion(` + JSON.stringify(r.method) + ", " + JSON.stringify(r.path) + ", " + JSON.stringify(JSON.stringify(r.headers || {})) + ", " + JSON.stringify(r.body || "") + ")", l = await dr.runPythonAsync(i);
          a.postMessage(JSON.parse(l));
        } catch (i) {
          a.postMessage({
            status: 500,
            headers: { "content-type": "text/plain; charset=utf-8" },
            body: btoa("error: " + (i && i.message ? i.message : i))
          });
        }
    }), globalThis.__crycatBase = new URL("./", location.href).pathname, globalThis.__crycatAssets = new URL("./app", location.href).pathname, Km();
    try {
      const n = rd().key;
      n && n !== "wiwi" && await fetch(Da() + "/api/settings", {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ tema: n })
      });
    } catch {
    }
    Pi("Abriendo la aplicación…", 7), window.clearTimeout(_o), td(cd).render(/* @__PURE__ */ o.jsx(Gm, {}));
  } catch (e) {
    Us("No se pudo iniciar la versión web: " + (e && e.message ? e.message : e), !0);
  }
}
Xm();
