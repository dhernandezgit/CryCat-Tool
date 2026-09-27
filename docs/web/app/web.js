var Fs = { exports: {} }, Ia = {}, Bs = { exports: {} }, B = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zr = Symbol.for("react.element"), xd = Symbol.for("react.portal"), wd = Symbol.for("react.fragment"), kd = Symbol.for("react.strict_mode"), Sd = Symbol.for("react.profiler"), jd = Symbol.for("react.provider"), Cd = Symbol.for("react.context"), _d = Symbol.for("react.forward_ref"), Nd = Symbol.for("react.suspense"), Ed = Symbol.for("react.memo"), Pd = Symbol.for("react.lazy"), jl = Symbol.iterator;
function zd(e) {
  return e === null || typeof e != "object" ? null : (e = jl && e[jl] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Us = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Vs = Object.assign, Hs = {};
function bn(e, t, n) {
  this.props = e, this.context = t, this.refs = Hs, this.updater = n || Us;
}
bn.prototype.isReactComponent = {};
bn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
bn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Gs() {
}
Gs.prototype = bn.prototype;
function Co(e, t, n) {
  this.props = e, this.context = t, this.refs = Hs, this.updater = n || Us;
}
var _o = Co.prototype = new Gs();
_o.constructor = Co;
Vs(_o, bn.prototype);
_o.isPureReactComponent = !0;
var Cl = Array.isArray, qs = Object.prototype.hasOwnProperty, No = { current: null }, Ws = { key: !0, ref: !0, __self: !0, __source: !0 };
function Qs(e, t, n) {
  var r, a = {}, i = null, l = null;
  if (t != null) for (r in t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (i = "" + t.key), t) qs.call(t, r) && !Ws.hasOwnProperty(r) && (a[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) a.children = n;
  else if (1 < u) {
    for (var s = Array(u), f = 0; f < u; f++) s[f] = arguments[f + 2];
    a.children = s;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) a[r] === void 0 && (a[r] = u[r]);
  return { $$typeof: zr, type: e, key: i, ref: l, props: a, _owner: No.current };
}
function Md(e, t) {
  return { $$typeof: zr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Eo(e) {
  return typeof e == "object" && e !== null && e.$$typeof === zr;
}
function Td(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var _l = /\/+/g;
function Ja(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Td("" + e.key) : t.toString(36);
}
function Jr(e, t, n, r, a) {
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
        case zr:
        case xd:
          l = !0;
      }
  }
  if (l) return l = e, a = a(l), e = r === "" ? "." + Ja(l, 0) : r, Cl(a) ? (n = "", e != null && (n = e.replace(_l, "$&/") + "/"), Jr(a, t, n, "", function(f) {
    return f;
  })) : a != null && (Eo(a) && (a = Md(a, n + (!a.key || l && l.key === a.key ? "" : ("" + a.key).replace(_l, "$&/") + "/") + e)), t.push(a)), 1;
  if (l = 0, r = r === "" ? "." : r + ":", Cl(e)) for (var u = 0; u < e.length; u++) {
    i = e[u];
    var s = r + Ja(i, u);
    l += Jr(i, t, n, s, a);
  }
  else if (s = zd(e), typeof s == "function") for (e = s.call(e), u = 0; !(i = e.next()).done; ) i = i.value, s = r + Ja(i, u++), l += Jr(i, t, n, s, a);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return l;
}
function Ir(e, t, n) {
  if (e == null) return e;
  var r = [], a = 0;
  return Jr(e, r, "", "", function(i) {
    return t.call(n, i, a++);
  }), r;
}
function Ld(e) {
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
var Ne = { current: null }, Zr = { transition: null }, Rd = { ReactCurrentDispatcher: Ne, ReactCurrentBatchConfig: Zr, ReactCurrentOwner: No };
function Ys() {
  throw Error("act(...) is not supported in production builds of React.");
}
B.Children = { map: Ir, forEach: function(e, t, n) {
  Ir(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Ir(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Ir(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Eo(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
B.Component = bn;
B.Fragment = wd;
B.Profiler = Sd;
B.PureComponent = Co;
B.StrictMode = kd;
B.Suspense = Nd;
B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Rd;
B.act = Ys;
B.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Vs({}, e.props), a = e.key, i = e.ref, l = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, l = No.current), t.key !== void 0 && (a = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (s in t) qs.call(t, s) && !Ws.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var f = 0; f < s; f++) u[f] = arguments[f + 2];
    r.children = u;
  }
  return { $$typeof: zr, type: e.type, key: a, ref: i, props: r, _owner: l };
};
B.createContext = function(e) {
  return e = { $$typeof: Cd, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: jd, _context: e }, e.Consumer = e;
};
B.createElement = Qs;
B.createFactory = function(e) {
  var t = Qs.bind(null, e);
  return t.type = e, t;
};
B.createRef = function() {
  return { current: null };
};
B.forwardRef = function(e) {
  return { $$typeof: _d, render: e };
};
B.isValidElement = Eo;
B.lazy = function(e) {
  return { $$typeof: Pd, _payload: { _status: -1, _result: e }, _init: Ld };
};
B.memo = function(e, t) {
  return { $$typeof: Ed, type: e, compare: t === void 0 ? null : t };
};
B.startTransition = function(e) {
  var t = Zr.transition;
  Zr.transition = {};
  try {
    e();
  } finally {
    Zr.transition = t;
  }
};
B.unstable_act = Ys;
B.useCallback = function(e, t) {
  return Ne.current.useCallback(e, t);
};
B.useContext = function(e) {
  return Ne.current.useContext(e);
};
B.useDebugValue = function() {
};
B.useDeferredValue = function(e) {
  return Ne.current.useDeferredValue(e);
};
B.useEffect = function(e, t) {
  return Ne.current.useEffect(e, t);
};
B.useId = function() {
  return Ne.current.useId();
};
B.useImperativeHandle = function(e, t, n) {
  return Ne.current.useImperativeHandle(e, t, n);
};
B.useInsertionEffect = function(e, t) {
  return Ne.current.useInsertionEffect(e, t);
};
B.useLayoutEffect = function(e, t) {
  return Ne.current.useLayoutEffect(e, t);
};
B.useMemo = function(e, t) {
  return Ne.current.useMemo(e, t);
};
B.useReducer = function(e, t, n) {
  return Ne.current.useReducer(e, t, n);
};
B.useRef = function(e) {
  return Ne.current.useRef(e);
};
B.useState = function(e) {
  return Ne.current.useState(e);
};
B.useSyncExternalStore = function(e, t, n) {
  return Ne.current.useSyncExternalStore(e, t, n);
};
B.useTransition = function() {
  return Ne.current.useTransition();
};
B.version = "18.3.1";
Bs.exports = B;
var k = Bs.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dd = k, Id = Symbol.for("react.element"), Ad = Symbol.for("react.fragment"), Od = Object.prototype.hasOwnProperty, $d = Dd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, bd = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ks(e, t, n) {
  var r, a = {}, i = null, l = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (l = t.ref);
  for (r in t) Od.call(t, r) && !bd.hasOwnProperty(r) && (a[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) a[r] === void 0 && (a[r] = t[r]);
  return { $$typeof: Id, type: e, key: i, ref: l, props: a, _owner: $d.current };
}
Ia.Fragment = Ad;
Ia.jsx = Ks;
Ia.jsxs = Ks;
Fs.exports = Ia;
var o = Fs.exports, Xs = { exports: {} }, $e = {}, Js = { exports: {} }, Zs = {};
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
  function t(M, $) {
    var b = M.length;
    M.push($);
    e: for (; 0 < b; ) {
      var H = b - 1 >>> 1, z = M[H];
      if (0 < a(z, $)) M[H] = $, M[b] = z, b = H;
      else break e;
    }
  }
  function n(M) {
    return M.length === 0 ? null : M[0];
  }
  function r(M) {
    if (M.length === 0) return null;
    var $ = M[0], b = M.pop();
    if (b !== $) {
      M[0] = b;
      e: for (var H = 0, z = M.length, J = z >>> 1; H < J; ) {
        var Pe = 2 * (H + 1) - 1, nt = M[Pe], de = Pe + 1, rt = M[de];
        if (0 > a(nt, b)) de < z && 0 > a(rt, nt) ? (M[H] = rt, M[de] = b, H = de) : (M[H] = nt, M[Pe] = b, H = Pe);
        else if (de < z && 0 > a(rt, b)) M[H] = rt, M[de] = b, H = de;
        else break e;
      }
    }
    return $;
  }
  function a(M, $) {
    var b = M.sortIndex - $.sortIndex;
    return b !== 0 ? b : M.id - $.id;
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
  var s = [], f = [], v = 1, m = null, h = 3, x = !1, C = !1, y = !1, R = typeof setTimeout == "function" ? setTimeout : null, d = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(M) {
    for (var $ = n(f); $ !== null; ) {
      if ($.callback === null) r(f);
      else if ($.startTime <= M) r(f), $.sortIndex = $.expirationTime, t(s, $);
      else break;
      $ = n(f);
    }
  }
  function w(M) {
    if (y = !1, p(M), !C) if (n(s) !== null) C = !0, je(S);
    else {
      var $ = n(f);
      $ !== null && tt(w, $.startTime - M);
    }
  }
  function S(M, $) {
    C = !1, y && (y = !1, d(_), _ = -1), x = !0;
    var b = h;
    try {
      for (p($), m = n(s); m !== null && (!(m.expirationTime > $) || M && !q()); ) {
        var H = m.callback;
        if (typeof H == "function") {
          m.callback = null, h = m.priorityLevel;
          var z = H(m.expirationTime <= $);
          $ = e.unstable_now(), typeof z == "function" ? m.callback = z : m === n(s) && r(s), p($);
        } else r(s);
        m = n(s);
      }
      if (m !== null) var J = !0;
      else {
        var Pe = n(f);
        Pe !== null && tt(w, Pe.startTime - $), J = !1;
      }
      return J;
    } finally {
      m = null, h = b, x = !1;
    }
  }
  var g = !1, j = null, _ = -1, E = 5, L = -1;
  function q() {
    return !(e.unstable_now() - L < E);
  }
  function se() {
    if (j !== null) {
      var M = e.unstable_now();
      L = M;
      var $ = !0;
      try {
        $ = j(!0, M);
      } finally {
        $ ? ve() : (g = !1, j = null);
      }
    } else g = !1;
  }
  var ve;
  if (typeof c == "function") ve = function() {
    c(se);
  };
  else if (typeof MessageChannel < "u") {
    var Se = new MessageChannel(), Fe = Se.port2;
    Se.port1.onmessage = se, ve = function() {
      Fe.postMessage(null);
    };
  } else ve = function() {
    R(se, 0);
  };
  function je(M) {
    j = M, g || (g = !0, ve());
  }
  function tt(M, $) {
    _ = R(function() {
      M(e.unstable_now());
    }, $);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(M) {
    M.callback = null;
  }, e.unstable_continueExecution = function() {
    C || x || (C = !0, je(S));
  }, e.unstable_forceFrameRate = function(M) {
    0 > M || 125 < M ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : E = 0 < M ? Math.floor(1e3 / M) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return h;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(s);
  }, e.unstable_next = function(M) {
    switch (h) {
      case 1:
      case 2:
      case 3:
        var $ = 3;
        break;
      default:
        $ = h;
    }
    var b = h;
    h = $;
    try {
      return M();
    } finally {
      h = b;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(M, $) {
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
    var b = h;
    h = M;
    try {
      return $();
    } finally {
      h = b;
    }
  }, e.unstable_scheduleCallback = function(M, $, b) {
    var H = e.unstable_now();
    switch (typeof b == "object" && b !== null ? (b = b.delay, b = typeof b == "number" && 0 < b ? H + b : H) : b = H, M) {
      case 1:
        var z = -1;
        break;
      case 2:
        z = 250;
        break;
      case 5:
        z = 1073741823;
        break;
      case 4:
        z = 1e4;
        break;
      default:
        z = 5e3;
    }
    return z = b + z, M = { id: v++, callback: $, priorityLevel: M, startTime: b, expirationTime: z, sortIndex: -1 }, b > H ? (M.sortIndex = b, t(f, M), n(s) === null && M === n(f) && (y ? (d(_), _ = -1) : y = !0, tt(w, b - H))) : (M.sortIndex = z, t(s, M), C || x || (C = !0, je(S))), M;
  }, e.unstable_shouldYield = q, e.unstable_wrapCallback = function(M) {
    var $ = h;
    return function() {
      var b = h;
      h = $;
      try {
        return M.apply(this, arguments);
      } finally {
        h = b;
      }
    };
  };
})(Zs);
Js.exports = Zs;
var Fd = Js.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bd = k, Oe = Fd;
function N(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var eu = /* @__PURE__ */ new Set(), cr = {};
function cn(e, t) {
  Ln(e, t), Ln(e + "Capture", t);
}
function Ln(e, t) {
  for (cr[e] = t, e = 0; e < t.length; e++) eu.add(t[e]);
}
var St = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ni = Object.prototype.hasOwnProperty, Ud = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Nl = {}, El = {};
function Vd(e) {
  return Ni.call(El, e) ? !0 : Ni.call(Nl, e) ? !1 : Ud.test(e) ? El[e] = !0 : (Nl[e] = !0, !1);
}
function Hd(e, t, n, r) {
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
function Gd(e, t, n, r) {
  if (t === null || typeof t > "u" || Hd(e, t, n, r)) return !0;
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
var he = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  he[e] = new Ee(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  he[t] = new Ee(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  he[e] = new Ee(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  he[e] = new Ee(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  he[e] = new Ee(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  he[e] = new Ee(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  he[e] = new Ee(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  he[e] = new Ee(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  he[e] = new Ee(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Po = /[\-:]([a-z])/g;
function zo(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Po,
    zo
  );
  he[t] = new Ee(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Po, zo);
  he[t] = new Ee(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Po, zo);
  he[t] = new Ee(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  he[e] = new Ee(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
he.xlinkHref = new Ee("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  he[e] = new Ee(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Mo(e, t, n, r) {
  var a = he.hasOwnProperty(t) ? he[t] : null;
  (a !== null ? a.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Gd(t, n, a, r) && (n = null), r || a === null ? Vd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : a.mustUseProperty ? e[a.propertyName] = n === null ? a.type === 3 ? !1 : "" : n : (t = a.attributeName, r = a.attributeNamespace, n === null ? e.removeAttribute(t) : (a = a.type, n = a === 3 || a === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Nt = Bd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ar = Symbol.for("react.element"), mn = Symbol.for("react.portal"), hn = Symbol.for("react.fragment"), To = Symbol.for("react.strict_mode"), Ei = Symbol.for("react.profiler"), tu = Symbol.for("react.provider"), nu = Symbol.for("react.context"), Lo = Symbol.for("react.forward_ref"), Pi = Symbol.for("react.suspense"), zi = Symbol.for("react.suspense_list"), Ro = Symbol.for("react.memo"), Tt = Symbol.for("react.lazy"), ru = Symbol.for("react.offscreen"), Pl = Symbol.iterator;
function Un(e) {
  return e === null || typeof e != "object" ? null : (e = Pl && e[Pl] || e["@@iterator"], typeof e == "function" ? e : null);
}
var te = Object.assign, Za;
function Kn(e) {
  if (Za === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Za = t && t[1] || "";
  }
  return `
` + Za + e;
}
var ei = !1;
function ti(e, t) {
  if (!e || ei) return "";
  ei = !0;
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
    ei = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Kn(e) : "";
}
function qd(e) {
  switch (e.tag) {
    case 5:
      return Kn(e.type);
    case 16:
      return Kn("Lazy");
    case 13:
      return Kn("Suspense");
    case 19:
      return Kn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = ti(e.type, !1), e;
    case 11:
      return e = ti(e.type.render, !1), e;
    case 1:
      return e = ti(e.type, !0), e;
    default:
      return "";
  }
}
function Mi(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case hn:
      return "Fragment";
    case mn:
      return "Portal";
    case Ei:
      return "Profiler";
    case To:
      return "StrictMode";
    case Pi:
      return "Suspense";
    case zi:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case nu:
      return (e.displayName || "Context") + ".Consumer";
    case tu:
      return (e._context.displayName || "Context") + ".Provider";
    case Lo:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Ro:
      return t = e.displayName || null, t !== null ? t : Mi(e.type) || "Memo";
    case Tt:
      t = e._payload, e = e._init;
      try {
        return Mi(e(t));
      } catch {
      }
  }
  return null;
}
function Wd(e) {
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
      return Mi(t);
    case 8:
      return t === To ? "StrictMode" : "Mode";
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
function Gt(e) {
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
function au(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Qd(e) {
  var t = au(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
  e._valueTracker || (e._valueTracker = Qd(e));
}
function iu(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = au(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function ca(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ti(e, t) {
  var n = t.checked;
  return te({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function zl(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Gt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function ou(e, t) {
  t = t.checked, t != null && Mo(e, "checked", t, !1);
}
function Li(e, t) {
  ou(e, t);
  var n = Gt(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Ri(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ri(e, t.type, Gt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Ml(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Ri(e, t, n) {
  (t !== "number" || ca(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Xn = Array.isArray;
function Nn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
    for (n = 0; n < e.length; n++) a = t.hasOwnProperty("$" + e[n].value), e[n].selected !== a && (e[n].selected = a), a && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Gt(n), t = null, a = 0; a < e.length; a++) {
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
  if (t.dangerouslySetInnerHTML != null) throw Error(N(91));
  return te({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Tl(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(N(92));
      if (Xn(n)) {
        if (1 < n.length) throw Error(N(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Gt(n) };
}
function lu(e, t) {
  var n = Gt(t.value), r = Gt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Ll(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function su(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ii(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? su(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var $r, uu = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, a) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, a);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for ($r = $r || document.createElement("div"), $r.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = $r.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function dr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var er = {
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
}, Yd = ["Webkit", "ms", "Moz", "O"];
Object.keys(er).forEach(function(e) {
  Yd.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), er[t] = er[e];
  });
});
function cu(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || er.hasOwnProperty(e) && er[e] ? ("" + t).trim() : t + "px";
}
function du(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, a = cu(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, a) : e[n] = a;
  }
}
var Kd = te({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Ai(e, t) {
  if (t) {
    if (Kd[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(N(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(N(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(N(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(N(62));
  }
}
function Oi(e, t) {
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
var $i = null;
function Do(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var bi = null, En = null, Pn = null;
function Rl(e) {
  if (e = Lr(e)) {
    if (typeof bi != "function") throw Error(N(280));
    var t = e.stateNode;
    t && (t = Fa(t), bi(e.stateNode, e.type, t));
  }
}
function fu(e) {
  En ? Pn ? Pn.push(e) : Pn = [e] : En = e;
}
function pu() {
  if (En) {
    var e = En, t = Pn;
    if (Pn = En = null, Rl(e), t) for (e = 0; e < t.length; e++) Rl(t[e]);
  }
}
function mu(e, t) {
  return e(t);
}
function hu() {
}
var ni = !1;
function vu(e, t, n) {
  if (ni) return e(t, n);
  ni = !0;
  try {
    return mu(e, t, n);
  } finally {
    ni = !1, (En !== null || Pn !== null) && (hu(), pu());
  }
}
function fr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Fa(n);
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
  if (n && typeof n != "function") throw Error(N(231, t, typeof n));
  return n;
}
var Fi = !1;
if (St) try {
  var Vn = {};
  Object.defineProperty(Vn, "passive", { get: function() {
    Fi = !0;
  } }), window.addEventListener("test", Vn, Vn), window.removeEventListener("test", Vn, Vn);
} catch {
  Fi = !1;
}
function Xd(e, t, n, r, a, i, l, u, s) {
  var f = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, f);
  } catch (v) {
    this.onError(v);
  }
}
var tr = !1, da = null, fa = !1, Bi = null, Jd = { onError: function(e) {
  tr = !0, da = e;
} };
function Zd(e, t, n, r, a, i, l, u, s) {
  tr = !1, da = null, Xd.apply(Jd, arguments);
}
function ef(e, t, n, r, a, i, l, u, s) {
  if (Zd.apply(this, arguments), tr) {
    if (tr) {
      var f = da;
      tr = !1, da = null;
    } else throw Error(N(198));
    fa || (fa = !0, Bi = f);
  }
}
function dn(e) {
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
function gu(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Dl(e) {
  if (dn(e) !== e) throw Error(N(188));
}
function tf(e) {
  var t = e.alternate;
  if (!t) {
    if (t = dn(e), t === null) throw Error(N(188));
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
      throw Error(N(188));
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
        if (!l) throw Error(N(189));
      }
    }
    if (n.alternate !== r) throw Error(N(190));
  }
  if (n.tag !== 3) throw Error(N(188));
  return n.stateNode.current === n ? e : t;
}
function yu(e) {
  return e = tf(e), e !== null ? xu(e) : null;
}
function xu(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = xu(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var wu = Oe.unstable_scheduleCallback, Il = Oe.unstable_cancelCallback, nf = Oe.unstable_shouldYield, rf = Oe.unstable_requestPaint, ae = Oe.unstable_now, af = Oe.unstable_getCurrentPriorityLevel, Io = Oe.unstable_ImmediatePriority, ku = Oe.unstable_UserBlockingPriority, pa = Oe.unstable_NormalPriority, of = Oe.unstable_LowPriority, Su = Oe.unstable_IdlePriority, Aa = null, ut = null;
function lf(e) {
  if (ut && typeof ut.onCommitFiberRoot == "function") try {
    ut.onCommitFiberRoot(Aa, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Je = Math.clz32 ? Math.clz32 : cf, sf = Math.log, uf = Math.LN2;
function cf(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (sf(e) / uf | 0) | 0;
}
var br = 64, Fr = 4194304;
function Jn(e) {
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
function ma(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, a = e.suspendedLanes, i = e.pingedLanes, l = n & 268435455;
  if (l !== 0) {
    var u = l & ~a;
    u !== 0 ? r = Jn(u) : (i &= l, i !== 0 && (r = Jn(i)));
  } else l = n & ~a, l !== 0 ? r = Jn(l) : i !== 0 && (r = Jn(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & a) && (a = r & -r, i = t & -t, a >= i || a === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Je(t), a = 1 << n, r |= e[n], t &= ~a;
  return r;
}
function df(e, t) {
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
function ff(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var l = 31 - Je(i), u = 1 << l, s = a[l];
    s === -1 ? (!(u & n) || u & r) && (a[l] = df(u, t)) : s <= t && (e.expiredLanes |= u), i &= ~u;
  }
}
function Ui(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function ju() {
  var e = br;
  return br <<= 1, !(br & 4194240) && (br = 64), e;
}
function ri(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Mr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Je(t), e[t] = n;
}
function pf(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var a = 31 - Je(n), i = 1 << a;
    t[a] = 0, r[a] = -1, e[a] = -1, n &= ~i;
  }
}
function Ao(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Je(n), a = 1 << r;
    a & t | e[r] & t && (e[r] |= t), n &= ~a;
  }
}
var G = 0;
function Cu(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var _u, Oo, Nu, Eu, Pu, Vi = !1, Br = [], Ot = null, $t = null, bt = null, pr = /* @__PURE__ */ new Map(), mr = /* @__PURE__ */ new Map(), Rt = [], mf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Al(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Ot = null;
      break;
    case "dragenter":
    case "dragleave":
      $t = null;
      break;
    case "mouseover":
    case "mouseout":
      bt = null;
      break;
    case "pointerover":
    case "pointerout":
      pr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      mr.delete(t.pointerId);
  }
}
function Hn(e, t, n, r, a, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [a] }, t !== null && (t = Lr(t), t !== null && Oo(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
}
function hf(e, t, n, r, a) {
  switch (t) {
    case "focusin":
      return Ot = Hn(Ot, e, t, n, r, a), !0;
    case "dragenter":
      return $t = Hn($t, e, t, n, r, a), !0;
    case "mouseover":
      return bt = Hn(bt, e, t, n, r, a), !0;
    case "pointerover":
      var i = a.pointerId;
      return pr.set(i, Hn(pr.get(i) || null, e, t, n, r, a)), !0;
    case "gotpointercapture":
      return i = a.pointerId, mr.set(i, Hn(mr.get(i) || null, e, t, n, r, a)), !0;
  }
  return !1;
}
function zu(e) {
  var t = Zt(e.target);
  if (t !== null) {
    var n = dn(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = gu(n), t !== null) {
          e.blockedOn = t, Pu(e.priority, function() {
            Nu(n);
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
function ea(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Hi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      $i = r, n.target.dispatchEvent(r), $i = null;
    } else return t = Lr(n), t !== null && Oo(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Ol(e, t, n) {
  ea(e) && n.delete(t);
}
function vf() {
  Vi = !1, Ot !== null && ea(Ot) && (Ot = null), $t !== null && ea($t) && ($t = null), bt !== null && ea(bt) && (bt = null), pr.forEach(Ol), mr.forEach(Ol);
}
function Gn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Vi || (Vi = !0, Oe.unstable_scheduleCallback(Oe.unstable_NormalPriority, vf)));
}
function hr(e) {
  function t(a) {
    return Gn(a, e);
  }
  if (0 < Br.length) {
    Gn(Br[0], e);
    for (var n = 1; n < Br.length; n++) {
      var r = Br[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (Ot !== null && Gn(Ot, e), $t !== null && Gn($t, e), bt !== null && Gn(bt, e), pr.forEach(t), mr.forEach(t), n = 0; n < Rt.length; n++) r = Rt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Rt.length && (n = Rt[0], n.blockedOn === null); ) zu(n), n.blockedOn === null && Rt.shift();
}
var zn = Nt.ReactCurrentBatchConfig, ha = !0;
function gf(e, t, n, r) {
  var a = G, i = zn.transition;
  zn.transition = null;
  try {
    G = 1, $o(e, t, n, r);
  } finally {
    G = a, zn.transition = i;
  }
}
function yf(e, t, n, r) {
  var a = G, i = zn.transition;
  zn.transition = null;
  try {
    G = 4, $o(e, t, n, r);
  } finally {
    G = a, zn.transition = i;
  }
}
function $o(e, t, n, r) {
  if (ha) {
    var a = Hi(e, t, n, r);
    if (a === null) pi(e, t, r, va, n), Al(e, r);
    else if (hf(a, e, t, n, r)) r.stopPropagation();
    else if (Al(e, r), t & 4 && -1 < mf.indexOf(e)) {
      for (; a !== null; ) {
        var i = Lr(a);
        if (i !== null && _u(i), i = Hi(e, t, n, r), i === null && pi(e, t, r, va, n), i === a) break;
        a = i;
      }
      a !== null && r.stopPropagation();
    } else pi(e, t, r, null, n);
  }
}
var va = null;
function Hi(e, t, n, r) {
  if (va = null, e = Do(r), e = Zt(e), e !== null) if (t = dn(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = gu(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return va = e, null;
}
function Mu(e) {
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
      switch (af()) {
        case Io:
          return 1;
        case ku:
          return 4;
        case pa:
        case of:
          return 16;
        case Su:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var It = null, bo = null, ta = null;
function Tu() {
  if (ta) return ta;
  var e, t = bo, n = t.length, r, a = "value" in It ? It.value : It.textContent, i = a.length;
  for (e = 0; e < n && t[e] === a[e]; e++) ;
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === a[i - r]; r++) ;
  return ta = a.slice(e, 1 < r ? 1 - r : void 0);
}
function na(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Ur() {
  return !0;
}
function $l() {
  return !1;
}
function be(e) {
  function t(n, r, a, i, l) {
    this._reactName = n, this._targetInst = a, this.type = r, this.nativeEvent = i, this.target = l, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(i) : i[u]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Ur : $l, this.isPropagationStopped = $l, this;
  }
  return te(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Ur);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Ur);
  }, persist: function() {
  }, isPersistent: Ur }), t;
}
var Fn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Fo = be(Fn), Tr = te({}, Fn, { view: 0, detail: 0 }), xf = be(Tr), ai, ii, qn, Oa = te({}, Tr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Bo, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== qn && (qn && e.type === "mousemove" ? (ai = e.screenX - qn.screenX, ii = e.screenY - qn.screenY) : ii = ai = 0, qn = e), ai);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : ii;
} }), bl = be(Oa), wf = te({}, Oa, { dataTransfer: 0 }), kf = be(wf), Sf = te({}, Tr, { relatedTarget: 0 }), oi = be(Sf), jf = te({}, Fn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Cf = be(jf), _f = te({}, Fn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Nf = be(_f), Ef = te({}, Fn, { data: 0 }), Fl = be(Ef), Pf = {
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
}, zf = {
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
}, Mf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Tf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Mf[e]) ? !!t[e] : !1;
}
function Bo() {
  return Tf;
}
var Lf = te({}, Tr, { key: function(e) {
  if (e.key) {
    var t = Pf[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = na(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? zf[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Bo, charCode: function(e) {
  return e.type === "keypress" ? na(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? na(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Rf = be(Lf), Df = te({}, Oa, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Bl = be(Df), If = te({}, Tr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Bo }), Af = be(If), Of = te({}, Fn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), $f = be(Of), bf = te({}, Oa, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Ff = be(bf), Bf = [9, 13, 27, 32], Uo = St && "CompositionEvent" in window, nr = null;
St && "documentMode" in document && (nr = document.documentMode);
var Uf = St && "TextEvent" in window && !nr, Lu = St && (!Uo || nr && 8 < nr && 11 >= nr), Ul = " ", Vl = !1;
function Ru(e, t) {
  switch (e) {
    case "keyup":
      return Bf.indexOf(t.keyCode) !== -1;
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
function Vf(e, t) {
  switch (e) {
    case "compositionend":
      return Du(t);
    case "keypress":
      return t.which !== 32 ? null : (Vl = !0, Ul);
    case "textInput":
      return e = t.data, e === Ul && Vl ? null : e;
    default:
      return null;
  }
}
function Hf(e, t) {
  if (vn) return e === "compositionend" || !Uo && Ru(e, t) ? (e = Tu(), ta = bo = It = null, vn = !1, e) : null;
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
      return Lu && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Gf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Hl(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Gf[e.type] : t === "textarea";
}
function Iu(e, t, n, r) {
  fu(r), t = ga(t, "onChange"), 0 < t.length && (n = new Fo("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var rr = null, vr = null;
function qf(e) {
  qu(e, 0);
}
function $a(e) {
  var t = xn(e);
  if (iu(t)) return e;
}
function Wf(e, t) {
  if (e === "change") return t;
}
var Au = !1;
if (St) {
  var li;
  if (St) {
    var si = "oninput" in document;
    if (!si) {
      var Gl = document.createElement("div");
      Gl.setAttribute("oninput", "return;"), si = typeof Gl.oninput == "function";
    }
    li = si;
  } else li = !1;
  Au = li && (!document.documentMode || 9 < document.documentMode);
}
function ql() {
  rr && (rr.detachEvent("onpropertychange", Ou), vr = rr = null);
}
function Ou(e) {
  if (e.propertyName === "value" && $a(vr)) {
    var t = [];
    Iu(t, vr, e, Do(e)), vu(qf, t);
  }
}
function Qf(e, t, n) {
  e === "focusin" ? (ql(), rr = t, vr = n, rr.attachEvent("onpropertychange", Ou)) : e === "focusout" && ql();
}
function Yf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return $a(vr);
}
function Kf(e, t) {
  if (e === "click") return $a(t);
}
function Xf(e, t) {
  if (e === "input" || e === "change") return $a(t);
}
function Jf(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var et = typeof Object.is == "function" ? Object.is : Jf;
function gr(e, t) {
  if (et(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var a = n[r];
    if (!Ni.call(t, a) || !et(e[a], t[a])) return !1;
  }
  return !0;
}
function Wl(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ql(e, t) {
  var n = Wl(e);
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
    n = Wl(n);
  }
}
function $u(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? $u(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function bu() {
  for (var e = window, t = ca(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ca(e.document);
  }
  return t;
}
function Vo(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Zf(e) {
  var t = bu(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && $u(n.ownerDocument.documentElement, n)) {
    if (r !== null && Vo(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var a = n.textContent.length, i = Math.min(r.start, a);
        r = r.end === void 0 ? i : Math.min(r.end, a), !e.extend && i > r && (a = r, r = i, i = a), a = Ql(n, i);
        var l = Ql(
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
var ep = St && "documentMode" in document && 11 >= document.documentMode, gn = null, Gi = null, ar = null, qi = !1;
function Yl(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  qi || gn == null || gn !== ca(r) || (r = gn, "selectionStart" in r && Vo(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), ar && gr(ar, r) || (ar = r, r = ga(Gi, "onSelect"), 0 < r.length && (t = new Fo("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = gn)));
}
function Vr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var yn = { animationend: Vr("Animation", "AnimationEnd"), animationiteration: Vr("Animation", "AnimationIteration"), animationstart: Vr("Animation", "AnimationStart"), transitionend: Vr("Transition", "TransitionEnd") }, ui = {}, Fu = {};
St && (Fu = document.createElement("div").style, "AnimationEvent" in window || (delete yn.animationend.animation, delete yn.animationiteration.animation, delete yn.animationstart.animation), "TransitionEvent" in window || delete yn.transitionend.transition);
function ba(e) {
  if (ui[e]) return ui[e];
  if (!yn[e]) return e;
  var t = yn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Fu) return ui[e] = t[n];
  return e;
}
var Bu = ba("animationend"), Uu = ba("animationiteration"), Vu = ba("animationstart"), Hu = ba("transitionend"), Gu = /* @__PURE__ */ new Map(), Kl = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Wt(e, t) {
  Gu.set(e, t), cn(t, [e]);
}
for (var ci = 0; ci < Kl.length; ci++) {
  var di = Kl[ci], tp = di.toLowerCase(), np = di[0].toUpperCase() + di.slice(1);
  Wt(tp, "on" + np);
}
Wt(Bu, "onAnimationEnd");
Wt(Uu, "onAnimationIteration");
Wt(Vu, "onAnimationStart");
Wt("dblclick", "onDoubleClick");
Wt("focusin", "onFocus");
Wt("focusout", "onBlur");
Wt(Hu, "onTransitionEnd");
Ln("onMouseEnter", ["mouseout", "mouseover"]);
Ln("onMouseLeave", ["mouseout", "mouseover"]);
Ln("onPointerEnter", ["pointerout", "pointerover"]);
Ln("onPointerLeave", ["pointerout", "pointerover"]);
cn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
cn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
cn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
cn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
cn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
cn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Zn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), rp = new Set("cancel close invalid load scroll toggle".split(" ").concat(Zn));
function Xl(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, ef(r, t, void 0, e), e.currentTarget = null;
}
function qu(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], a = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var l = r.length - 1; 0 <= l; l--) {
        var u = r[l], s = u.instance, f = u.currentTarget;
        if (u = u.listener, s !== i && a.isPropagationStopped()) break e;
        Xl(a, u, f), i = s;
      }
      else for (l = 0; l < r.length; l++) {
        if (u = r[l], s = u.instance, f = u.currentTarget, u = u.listener, s !== i && a.isPropagationStopped()) break e;
        Xl(a, u, f), i = s;
      }
    }
  }
  if (fa) throw e = Bi, fa = !1, Bi = null, e;
}
function Q(e, t) {
  var n = t[Xi];
  n === void 0 && (n = t[Xi] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Wu(t, e, 2, !1), n.add(r));
}
function fi(e, t, n) {
  var r = 0;
  t && (r |= 4), Wu(n, e, r, t);
}
var Hr = "_reactListening" + Math.random().toString(36).slice(2);
function yr(e) {
  if (!e[Hr]) {
    e[Hr] = !0, eu.forEach(function(n) {
      n !== "selectionchange" && (rp.has(n) || fi(n, !1, e), fi(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Hr] || (t[Hr] = !0, fi("selectionchange", !1, t));
  }
}
function Wu(e, t, n, r) {
  switch (Mu(t)) {
    case 1:
      var a = gf;
      break;
    case 4:
      a = yf;
      break;
    default:
      a = $o;
  }
  n = a.bind(null, t, n, e), a = void 0, !Fi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), r ? a !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: a }) : e.addEventListener(t, n, !0) : a !== void 0 ? e.addEventListener(t, n, { passive: a }) : e.addEventListener(t, n, !1);
}
function pi(e, t, n, r, a) {
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
        if (l = Zt(u), l === null) return;
        if (s = l.tag, s === 5 || s === 6) {
          r = i = l;
          continue e;
        }
        u = u.parentNode;
      }
    }
    r = r.return;
  }
  vu(function() {
    var f = i, v = Do(n), m = [];
    e: {
      var h = Gu.get(e);
      if (h !== void 0) {
        var x = Fo, C = e;
        switch (e) {
          case "keypress":
            if (na(n) === 0) break e;
          case "keydown":
          case "keyup":
            x = Rf;
            break;
          case "focusin":
            C = "focus", x = oi;
            break;
          case "focusout":
            C = "blur", x = oi;
            break;
          case "beforeblur":
          case "afterblur":
            x = oi;
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
            x = bl;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = kf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = Af;
            break;
          case Bu:
          case Uu:
          case Vu:
            x = Cf;
            break;
          case Hu:
            x = $f;
            break;
          case "scroll":
            x = xf;
            break;
          case "wheel":
            x = Ff;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = Nf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = Bl;
        }
        var y = (t & 4) !== 0, R = !y && e === "scroll", d = y ? h !== null ? h + "Capture" : null : h;
        y = [];
        for (var c = f, p; c !== null; ) {
          p = c;
          var w = p.stateNode;
          if (p.tag === 5 && w !== null && (p = w, d !== null && (w = fr(c, d), w != null && y.push(xr(c, w, p)))), R) break;
          c = c.return;
        }
        0 < y.length && (h = new x(h, C, null, n, v), m.push({ event: h, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (h = e === "mouseover" || e === "pointerover", x = e === "mouseout" || e === "pointerout", h && n !== $i && (C = n.relatedTarget || n.fromElement) && (Zt(C) || C[jt])) break e;
        if ((x || h) && (h = v.window === v ? v : (h = v.ownerDocument) ? h.defaultView || h.parentWindow : window, x ? (C = n.relatedTarget || n.toElement, x = f, C = C ? Zt(C) : null, C !== null && (R = dn(C), C !== R || C.tag !== 5 && C.tag !== 6) && (C = null)) : (x = null, C = f), x !== C)) {
          if (y = bl, w = "onMouseLeave", d = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (y = Bl, w = "onPointerLeave", d = "onPointerEnter", c = "pointer"), R = x == null ? h : xn(x), p = C == null ? h : xn(C), h = new y(w, c + "leave", x, n, v), h.target = R, h.relatedTarget = p, w = null, Zt(v) === f && (y = new y(d, c + "enter", C, n, v), y.target = p, y.relatedTarget = R, w = y), R = w, x && C) t: {
            for (y = x, d = C, c = 0, p = y; p; p = pn(p)) c++;
            for (p = 0, w = d; w; w = pn(w)) p++;
            for (; 0 < c - p; ) y = pn(y), c--;
            for (; 0 < p - c; ) d = pn(d), p--;
            for (; c--; ) {
              if (y === d || d !== null && y === d.alternate) break t;
              y = pn(y), d = pn(d);
            }
            y = null;
          }
          else y = null;
          x !== null && Jl(m, h, x, y, !1), C !== null && R !== null && Jl(m, R, C, y, !0);
        }
      }
      e: {
        if (h = f ? xn(f) : window, x = h.nodeName && h.nodeName.toLowerCase(), x === "select" || x === "input" && h.type === "file") var S = Wf;
        else if (Hl(h)) if (Au) S = Xf;
        else {
          S = Yf;
          var g = Qf;
        }
        else (x = h.nodeName) && x.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (S = Kf);
        if (S && (S = S(e, f))) {
          Iu(m, S, n, v);
          break e;
        }
        g && g(e, h, f), e === "focusout" && (g = h._wrapperState) && g.controlled && h.type === "number" && Ri(h, "number", h.value);
      }
      switch (g = f ? xn(f) : window, e) {
        case "focusin":
          (Hl(g) || g.contentEditable === "true") && (gn = g, Gi = f, ar = null);
          break;
        case "focusout":
          ar = Gi = gn = null;
          break;
        case "mousedown":
          qi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          qi = !1, Yl(m, n, v);
          break;
        case "selectionchange":
          if (ep) break;
        case "keydown":
        case "keyup":
          Yl(m, n, v);
      }
      var j;
      if (Uo) e: {
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
      else vn ? Ru(e, n) && (_ = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (_ = "onCompositionStart");
      _ && (Lu && n.locale !== "ko" && (vn || _ !== "onCompositionStart" ? _ === "onCompositionEnd" && vn && (j = Tu()) : (It = v, bo = "value" in It ? It.value : It.textContent, vn = !0)), g = ga(f, _), 0 < g.length && (_ = new Fl(_, e, null, n, v), m.push({ event: _, listeners: g }), j ? _.data = j : (j = Du(n), j !== null && (_.data = j)))), (j = Uf ? Vf(e, n) : Hf(e, n)) && (f = ga(f, "onBeforeInput"), 0 < f.length && (v = new Fl("onBeforeInput", "beforeinput", null, n, v), m.push({ event: v, listeners: f }), v.data = j));
    }
    qu(m, t);
  });
}
function xr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ga(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var a = e, i = a.stateNode;
    a.tag === 5 && i !== null && (a = i, i = fr(e, n), i != null && r.unshift(xr(e, i, a)), i = fr(e, t), i != null && r.push(xr(e, i, a))), e = e.return;
  }
  return r;
}
function pn(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Jl(e, t, n, r, a) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var u = n, s = u.alternate, f = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 && f !== null && (u = f, a ? (s = fr(n, i), s != null && l.unshift(xr(n, s, u))) : a || (s = fr(n, i), s != null && l.push(xr(n, s, u)))), n = n.return;
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var ap = /\r\n?/g, ip = /\u0000|\uFFFD/g;
function Zl(e) {
  return (typeof e == "string" ? e : "" + e).replace(ap, `
`).replace(ip, "");
}
function Gr(e, t, n) {
  if (t = Zl(t), Zl(e) !== t && n) throw Error(N(425));
}
function ya() {
}
var Wi = null, Qi = null;
function Yi(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Ki = typeof setTimeout == "function" ? setTimeout : void 0, op = typeof clearTimeout == "function" ? clearTimeout : void 0, es = typeof Promise == "function" ? Promise : void 0, lp = typeof queueMicrotask == "function" ? queueMicrotask : typeof es < "u" ? function(e) {
  return es.resolve(null).then(e).catch(sp);
} : Ki;
function sp(e) {
  setTimeout(function() {
    throw e;
  });
}
function mi(e, t) {
  var n = t, r = 0;
  do {
    var a = n.nextSibling;
    if (e.removeChild(n), a && a.nodeType === 8) if (n = a.data, n === "/$") {
      if (r === 0) {
        e.removeChild(a), hr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = a;
  } while (n);
  hr(t);
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
function ts(e) {
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
var Bn = Math.random().toString(36).slice(2), st = "__reactFiber$" + Bn, wr = "__reactProps$" + Bn, jt = "__reactContainer$" + Bn, Xi = "__reactEvents$" + Bn, up = "__reactListeners$" + Bn, cp = "__reactHandles$" + Bn;
function Zt(e) {
  var t = e[st];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[jt] || n[st]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = ts(e); e !== null; ) {
        if (n = e[st]) return n;
        e = ts(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function Lr(e) {
  return e = e[st] || e[jt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function xn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(N(33));
}
function Fa(e) {
  return e[wr] || null;
}
var Ji = [], wn = -1;
function Qt(e) {
  return { current: e };
}
function Y(e) {
  0 > wn || (e.current = Ji[wn], Ji[wn] = null, wn--);
}
function W(e, t) {
  wn++, Ji[wn] = e.current, e.current = t;
}
var qt = {}, ke = Qt(qt), Te = Qt(!1), an = qt;
function Rn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return qt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var a = {}, i;
  for (i in n) a[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = a), a;
}
function Le(e) {
  return e = e.childContextTypes, e != null;
}
function xa() {
  Y(Te), Y(ke);
}
function ns(e, t, n) {
  if (ke.current !== qt) throw Error(N(168));
  W(ke, t), W(Te, n);
}
function Qu(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var a in r) if (!(a in t)) throw Error(N(108, Wd(e) || "Unknown", a));
  return te({}, n, r);
}
function wa(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || qt, an = ke.current, W(ke, e), W(Te, Te.current), !0;
}
function rs(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(N(169));
  n ? (e = Qu(e, t, an), r.__reactInternalMemoizedMergedChildContext = e, Y(Te), Y(ke), W(ke, e)) : Y(Te), W(Te, n);
}
var gt = null, Ba = !1, hi = !1;
function Yu(e) {
  gt === null ? gt = [e] : gt.push(e);
}
function dp(e) {
  Ba = !0, Yu(e);
}
function Yt() {
  if (!hi && gt !== null) {
    hi = !0;
    var e = 0, t = G;
    try {
      var n = gt;
      for (G = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      gt = null, Ba = !1;
    } catch (a) {
      throw gt !== null && (gt = gt.slice(e + 1)), wu(Io, Yt), a;
    } finally {
      G = t, hi = !1;
    }
  }
  return null;
}
var kn = [], Sn = 0, ka = null, Sa = 0, Ue = [], Ve = 0, on = null, xt = 1, wt = "";
function Xt(e, t) {
  kn[Sn++] = Sa, kn[Sn++] = ka, ka = e, Sa = t;
}
function Ku(e, t, n) {
  Ue[Ve++] = xt, Ue[Ve++] = wt, Ue[Ve++] = on, on = e;
  var r = xt;
  e = wt;
  var a = 32 - Je(r) - 1;
  r &= ~(1 << a), n += 1;
  var i = 32 - Je(t) + a;
  if (30 < i) {
    var l = a - a % 5;
    i = (r & (1 << l) - 1).toString(32), r >>= l, a -= l, xt = 1 << 32 - Je(t) + a | n << a | r, wt = i + e;
  } else xt = 1 << i | n << a | r, wt = e;
}
function Ho(e) {
  e.return !== null && (Xt(e, 1), Ku(e, 1, 0));
}
function Go(e) {
  for (; e === ka; ) ka = kn[--Sn], kn[Sn] = null, Sa = kn[--Sn], kn[Sn] = null;
  for (; e === on; ) on = Ue[--Ve], Ue[Ve] = null, wt = Ue[--Ve], Ue[Ve] = null, xt = Ue[--Ve], Ue[Ve] = null;
}
var Ae = null, Ie = null, K = !1, Xe = null;
function Xu(e, t) {
  var n = He(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function as(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ae = e, Ie = Ft(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ae = e, Ie = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = on !== null ? { id: xt, overflow: wt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = He(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ae = e, Ie = null, !0) : !1;
    default:
      return !1;
  }
}
function Zi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function eo(e) {
  if (K) {
    var t = Ie;
    if (t) {
      var n = t;
      if (!as(e, t)) {
        if (Zi(e)) throw Error(N(418));
        t = Ft(n.nextSibling);
        var r = Ae;
        t && as(e, t) ? Xu(r, n) : (e.flags = e.flags & -4097 | 2, K = !1, Ae = e);
      }
    } else {
      if (Zi(e)) throw Error(N(418));
      e.flags = e.flags & -4097 | 2, K = !1, Ae = e;
    }
  }
}
function is(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Ae = e;
}
function qr(e) {
  if (e !== Ae) return !1;
  if (!K) return is(e), K = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Yi(e.type, e.memoizedProps)), t && (t = Ie)) {
    if (Zi(e)) throw Ju(), Error(N(418));
    for (; t; ) Xu(e, t), t = Ft(t.nextSibling);
  }
  if (is(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(N(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ie = Ft(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Ie = null;
    }
  } else Ie = Ae ? Ft(e.stateNode.nextSibling) : null;
  return !0;
}
function Ju() {
  for (var e = Ie; e; ) e = Ft(e.nextSibling);
}
function Dn() {
  Ie = Ae = null, K = !1;
}
function qo(e) {
  Xe === null ? Xe = [e] : Xe.push(e);
}
var fp = Nt.ReactCurrentBatchConfig;
function Wn(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(N(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(N(147, e));
      var a = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(l) {
        var u = a.refs;
        l === null ? delete u[i] : u[i] = l;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string") throw Error(N(284));
    if (!n._owner) throw Error(N(290, e));
  }
  return e;
}
function Wr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(N(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function os(e) {
  var t = e._init;
  return t(e._payload);
}
function Zu(e) {
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
  function u(d, c, p, w) {
    return c === null || c.tag !== 6 ? (c = Si(p, d.mode, w), c.return = d, c) : (c = a(c, p), c.return = d, c);
  }
  function s(d, c, p, w) {
    var S = p.type;
    return S === hn ? v(d, c, p.props.children, w, p.key) : c !== null && (c.elementType === S || typeof S == "object" && S !== null && S.$$typeof === Tt && os(S) === c.type) ? (w = a(c, p.props), w.ref = Wn(d, c, p), w.return = d, w) : (w = ua(p.type, p.key, p.props, null, d.mode, w), w.ref = Wn(d, c, p), w.return = d, w);
  }
  function f(d, c, p, w) {
    return c === null || c.tag !== 4 || c.stateNode.containerInfo !== p.containerInfo || c.stateNode.implementation !== p.implementation ? (c = ji(p, d.mode, w), c.return = d, c) : (c = a(c, p.children || []), c.return = d, c);
  }
  function v(d, c, p, w, S) {
    return c === null || c.tag !== 7 ? (c = rn(p, d.mode, w, S), c.return = d, c) : (c = a(c, p), c.return = d, c);
  }
  function m(d, c, p) {
    if (typeof c == "string" && c !== "" || typeof c == "number") return c = Si("" + c, d.mode, p), c.return = d, c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Ar:
          return p = ua(c.type, c.key, c.props, null, d.mode, p), p.ref = Wn(d, null, c), p.return = d, p;
        case mn:
          return c = ji(c, d.mode, p), c.return = d, c;
        case Tt:
          var w = c._init;
          return m(d, w(c._payload), p);
      }
      if (Xn(c) || Un(c)) return c = rn(c, d.mode, p, null), c.return = d, c;
      Wr(d, c);
    }
    return null;
  }
  function h(d, c, p, w) {
    var S = c !== null ? c.key : null;
    if (typeof p == "string" && p !== "" || typeof p == "number") return S !== null ? null : u(d, c, "" + p, w);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Ar:
          return p.key === S ? s(d, c, p, w) : null;
        case mn:
          return p.key === S ? f(d, c, p, w) : null;
        case Tt:
          return S = p._init, h(
            d,
            c,
            S(p._payload),
            w
          );
      }
      if (Xn(p) || Un(p)) return S !== null ? null : v(d, c, p, w, null);
      Wr(d, p);
    }
    return null;
  }
  function x(d, c, p, w, S) {
    if (typeof w == "string" && w !== "" || typeof w == "number") return d = d.get(p) || null, u(c, d, "" + w, S);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Ar:
          return d = d.get(w.key === null ? p : w.key) || null, s(c, d, w, S);
        case mn:
          return d = d.get(w.key === null ? p : w.key) || null, f(c, d, w, S);
        case Tt:
          var g = w._init;
          return x(d, c, p, g(w._payload), S);
      }
      if (Xn(w) || Un(w)) return d = d.get(p) || null, v(c, d, w, S, null);
      Wr(c, w);
    }
    return null;
  }
  function C(d, c, p, w) {
    for (var S = null, g = null, j = c, _ = c = 0, E = null; j !== null && _ < p.length; _++) {
      j.index > _ ? (E = j, j = null) : E = j.sibling;
      var L = h(d, j, p[_], w);
      if (L === null) {
        j === null && (j = E);
        break;
      }
      e && j && L.alternate === null && t(d, j), c = i(L, c, _), g === null ? S = L : g.sibling = L, g = L, j = E;
    }
    if (_ === p.length) return n(d, j), K && Xt(d, _), S;
    if (j === null) {
      for (; _ < p.length; _++) j = m(d, p[_], w), j !== null && (c = i(j, c, _), g === null ? S = j : g.sibling = j, g = j);
      return K && Xt(d, _), S;
    }
    for (j = r(d, j); _ < p.length; _++) E = x(j, d, _, p[_], w), E !== null && (e && E.alternate !== null && j.delete(E.key === null ? _ : E.key), c = i(E, c, _), g === null ? S = E : g.sibling = E, g = E);
    return e && j.forEach(function(q) {
      return t(d, q);
    }), K && Xt(d, _), S;
  }
  function y(d, c, p, w) {
    var S = Un(p);
    if (typeof S != "function") throw Error(N(150));
    if (p = S.call(p), p == null) throw Error(N(151));
    for (var g = S = null, j = c, _ = c = 0, E = null, L = p.next(); j !== null && !L.done; _++, L = p.next()) {
      j.index > _ ? (E = j, j = null) : E = j.sibling;
      var q = h(d, j, L.value, w);
      if (q === null) {
        j === null && (j = E);
        break;
      }
      e && j && q.alternate === null && t(d, j), c = i(q, c, _), g === null ? S = q : g.sibling = q, g = q, j = E;
    }
    if (L.done) return n(
      d,
      j
    ), K && Xt(d, _), S;
    if (j === null) {
      for (; !L.done; _++, L = p.next()) L = m(d, L.value, w), L !== null && (c = i(L, c, _), g === null ? S = L : g.sibling = L, g = L);
      return K && Xt(d, _), S;
    }
    for (j = r(d, j); !L.done; _++, L = p.next()) L = x(j, d, _, L.value, w), L !== null && (e && L.alternate !== null && j.delete(L.key === null ? _ : L.key), c = i(L, c, _), g === null ? S = L : g.sibling = L, g = L);
    return e && j.forEach(function(se) {
      return t(d, se);
    }), K && Xt(d, _), S;
  }
  function R(d, c, p, w) {
    if (typeof p == "object" && p !== null && p.type === hn && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Ar:
          e: {
            for (var S = p.key, g = c; g !== null; ) {
              if (g.key === S) {
                if (S = p.type, S === hn) {
                  if (g.tag === 7) {
                    n(d, g.sibling), c = a(g, p.props.children), c.return = d, d = c;
                    break e;
                  }
                } else if (g.elementType === S || typeof S == "object" && S !== null && S.$$typeof === Tt && os(S) === g.type) {
                  n(d, g.sibling), c = a(g, p.props), c.ref = Wn(d, g, p), c.return = d, d = c;
                  break e;
                }
                n(d, g);
                break;
              } else t(d, g);
              g = g.sibling;
            }
            p.type === hn ? (c = rn(p.props.children, d.mode, w, p.key), c.return = d, d = c) : (w = ua(p.type, p.key, p.props, null, d.mode, w), w.ref = Wn(d, c, p), w.return = d, d = w);
          }
          return l(d);
        case mn:
          e: {
            for (g = p.key; c !== null; ) {
              if (c.key === g) if (c.tag === 4 && c.stateNode.containerInfo === p.containerInfo && c.stateNode.implementation === p.implementation) {
                n(d, c.sibling), c = a(c, p.children || []), c.return = d, d = c;
                break e;
              } else {
                n(d, c);
                break;
              }
              else t(d, c);
              c = c.sibling;
            }
            c = ji(p, d.mode, w), c.return = d, d = c;
          }
          return l(d);
        case Tt:
          return g = p._init, R(d, c, g(p._payload), w);
      }
      if (Xn(p)) return C(d, c, p, w);
      if (Un(p)) return y(d, c, p, w);
      Wr(d, p);
    }
    return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, c !== null && c.tag === 6 ? (n(d, c.sibling), c = a(c, p), c.return = d, d = c) : (n(d, c), c = Si(p, d.mode, w), c.return = d, d = c), l(d)) : n(d, c);
  }
  return R;
}
var In = Zu(!0), ec = Zu(!1), ja = Qt(null), Ca = null, jn = null, Wo = null;
function Qo() {
  Wo = jn = Ca = null;
}
function Yo(e) {
  var t = ja.current;
  Y(ja), e._currentValue = t;
}
function to(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function Mn(e, t) {
  Ca = e, Wo = jn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Me = !0), e.firstContext = null);
}
function qe(e) {
  var t = e._currentValue;
  if (Wo !== e) if (e = { context: e, memoizedValue: t, next: null }, jn === null) {
    if (Ca === null) throw Error(N(308));
    jn = e, Ca.dependencies = { lanes: 0, firstContext: e };
  } else jn = jn.next = e;
  return t;
}
var en = null;
function Ko(e) {
  en === null ? en = [e] : en.push(e);
}
function tc(e, t, n, r) {
  var a = t.interleaved;
  return a === null ? (n.next = n, Ko(t)) : (n.next = a.next, a.next = n), t.interleaved = n, Ct(e, r);
}
function Ct(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var Lt = !1;
function Xo(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function nc(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function kt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Bt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, V & 2) {
    var a = r.pending;
    return a === null ? t.next = t : (t.next = a.next, a.next = t), r.pending = t, Ct(e, n);
  }
  return a = r.interleaved, a === null ? (t.next = t, Ko(r)) : (t.next = a.next, a.next = t), r.interleaved = t, Ct(e, n);
}
function ra(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ao(e, n);
  }
}
function ls(e, t) {
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
function _a(e, t, n, r) {
  var a = e.updateQueue;
  Lt = !1;
  var i = a.firstBaseUpdate, l = a.lastBaseUpdate, u = a.shared.pending;
  if (u !== null) {
    a.shared.pending = null;
    var s = u, f = s.next;
    s.next = null, l === null ? i = f : l.next = f, l = s;
    var v = e.alternate;
    v !== null && (v = v.updateQueue, u = v.lastBaseUpdate, u !== l && (u === null ? v.firstBaseUpdate = f : u.next = f, v.lastBaseUpdate = s));
  }
  if (i !== null) {
    var m = a.baseState;
    l = 0, v = f = s = null, u = i;
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
          var C = e, y = u;
          switch (h = t, x = n, y.tag) {
            case 1:
              if (C = y.payload, typeof C == "function") {
                m = C.call(x, m, h);
                break e;
              }
              m = C;
              break e;
            case 3:
              C.flags = C.flags & -65537 | 128;
            case 0:
              if (C = y.payload, h = typeof C == "function" ? C.call(x, m, h) : C, h == null) break e;
              m = te({}, m, h);
              break e;
            case 2:
              Lt = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, h = a.effects, h === null ? a.effects = [u] : h.push(u));
      } else x = { eventTime: x, lane: h, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, v === null ? (f = v = x, s = m) : v = v.next = x, l |= h;
      if (u = u.next, u === null) {
        if (u = a.shared.pending, u === null) break;
        h = u, u = h.next, h.next = null, a.lastBaseUpdate = h, a.shared.pending = null;
      }
    } while (!0);
    if (v === null && (s = m), a.baseState = s, a.firstBaseUpdate = f, a.lastBaseUpdate = v, t = a.shared.interleaved, t !== null) {
      a = t;
      do
        l |= a.lane, a = a.next;
      while (a !== t);
    } else i === null && (a.shared.lanes = 0);
    sn |= l, e.lanes = l, e.memoizedState = m;
  }
}
function ss(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], a = r.callback;
    if (a !== null) {
      if (r.callback = null, r = n, typeof a != "function") throw Error(N(191, a));
      a.call(r);
    }
  }
}
var Rr = {}, ct = Qt(Rr), kr = Qt(Rr), Sr = Qt(Rr);
function tn(e) {
  if (e === Rr) throw Error(N(174));
  return e;
}
function Jo(e, t) {
  switch (W(Sr, t), W(kr, e), W(ct, Rr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ii(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ii(t, e);
  }
  Y(ct), W(ct, t);
}
function An() {
  Y(ct), Y(kr), Y(Sr);
}
function rc(e) {
  tn(Sr.current);
  var t = tn(ct.current), n = Ii(t, e.type);
  t !== n && (W(kr, e), W(ct, n));
}
function Zo(e) {
  kr.current === e && (Y(ct), Y(kr));
}
var Z = Qt(0);
function Na(e) {
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
var vi = [];
function el() {
  for (var e = 0; e < vi.length; e++) vi[e]._workInProgressVersionPrimary = null;
  vi.length = 0;
}
var aa = Nt.ReactCurrentDispatcher, gi = Nt.ReactCurrentBatchConfig, ln = 0, ee = null, oe = null, ue = null, Ea = !1, ir = !1, jr = 0, pp = 0;
function ye() {
  throw Error(N(321));
}
function tl(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!et(e[n], t[n])) return !1;
  return !0;
}
function nl(e, t, n, r, a, i) {
  if (ln = i, ee = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, aa.current = e === null || e.memoizedState === null ? gp : yp, e = n(r, a), ir) {
    i = 0;
    do {
      if (ir = !1, jr = 0, 25 <= i) throw Error(N(301));
      i += 1, ue = oe = null, t.updateQueue = null, aa.current = xp, e = n(r, a);
    } while (ir);
  }
  if (aa.current = Pa, t = oe !== null && oe.next !== null, ln = 0, ue = oe = ee = null, Ea = !1, t) throw Error(N(300));
  return e;
}
function rl() {
  var e = jr !== 0;
  return jr = 0, e;
}
function lt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return ue === null ? ee.memoizedState = ue = e : ue = ue.next = e, ue;
}
function We() {
  if (oe === null) {
    var e = ee.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = oe.next;
  var t = ue === null ? ee.memoizedState : ue.next;
  if (t !== null) ue = t, oe = e;
  else {
    if (e === null) throw Error(N(310));
    oe = e, e = { memoizedState: oe.memoizedState, baseState: oe.baseState, baseQueue: oe.baseQueue, queue: oe.queue, next: null }, ue === null ? ee.memoizedState = ue = e : ue = ue.next = e;
  }
  return ue;
}
function Cr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function yi(e) {
  var t = We(), n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = oe, a = r.baseQueue, i = n.pending;
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
      var v = f.lane;
      if ((ln & v) === v) s !== null && (s = s.next = { lane: 0, action: f.action, hasEagerState: f.hasEagerState, eagerState: f.eagerState, next: null }), r = f.hasEagerState ? f.eagerState : e(r, f.action);
      else {
        var m = {
          lane: v,
          action: f.action,
          hasEagerState: f.hasEagerState,
          eagerState: f.eagerState,
          next: null
        };
        s === null ? (u = s = m, l = r) : s = s.next = m, ee.lanes |= v, sn |= v;
      }
      f = f.next;
    } while (f !== null && f !== i);
    s === null ? l = r : s.next = u, et(r, t.memoizedState) || (Me = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = s, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    a = e;
    do
      i = a.lane, ee.lanes |= i, sn |= i, a = a.next;
    while (a !== e);
  } else a === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function xi(e) {
  var t = We(), n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, a = n.pending, i = t.memoizedState;
  if (a !== null) {
    n.pending = null;
    var l = a = a.next;
    do
      i = e(i, l.action), l = l.next;
    while (l !== a);
    et(i, t.memoizedState) || (Me = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function ac() {
}
function ic(e, t) {
  var n = ee, r = We(), a = t(), i = !et(r.memoizedState, a);
  if (i && (r.memoizedState = a, Me = !0), r = r.queue, al(sc.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || ue !== null && ue.memoizedState.tag & 1) {
    if (n.flags |= 2048, _r(9, lc.bind(null, n, r, a, t), void 0, null), ce === null) throw Error(N(349));
    ln & 30 || oc(n, t, a);
  }
  return a;
}
function oc(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ee.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ee.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function lc(e, t, n, r) {
  t.value = n, t.getSnapshot = r, uc(t) && cc(e);
}
function sc(e, t, n) {
  return n(function() {
    uc(t) && cc(e);
  });
}
function uc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !et(e, n);
  } catch {
    return !0;
  }
}
function cc(e) {
  var t = Ct(e, 1);
  t !== null && Ze(t, e, 1, -1);
}
function us(e) {
  var t = lt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Cr, lastRenderedState: e }, t.queue = e, e = e.dispatch = vp.bind(null, ee, e), [t.memoizedState, e];
}
function _r(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ee.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ee.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function dc() {
  return We().memoizedState;
}
function ia(e, t, n, r) {
  var a = lt();
  ee.flags |= e, a.memoizedState = _r(1 | t, n, void 0, r === void 0 ? null : r);
}
function Ua(e, t, n, r) {
  var a = We();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (oe !== null) {
    var l = oe.memoizedState;
    if (i = l.destroy, r !== null && tl(r, l.deps)) {
      a.memoizedState = _r(t, n, i, r);
      return;
    }
  }
  ee.flags |= e, a.memoizedState = _r(1 | t, n, i, r);
}
function cs(e, t) {
  return ia(8390656, 8, e, t);
}
function al(e, t) {
  return Ua(2048, 8, e, t);
}
function fc(e, t) {
  return Ua(4, 2, e, t);
}
function pc(e, t) {
  return Ua(4, 4, e, t);
}
function mc(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function hc(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ua(4, 4, mc.bind(null, t, e), n);
}
function il() {
}
function vc(e, t) {
  var n = We();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && tl(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function gc(e, t) {
  var n = We();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && tl(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function yc(e, t, n) {
  return ln & 21 ? (et(n, t) || (n = ju(), ee.lanes |= n, sn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Me = !0), e.memoizedState = n);
}
function mp(e, t) {
  var n = G;
  G = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = gi.transition;
  gi.transition = {};
  try {
    e(!1), t();
  } finally {
    G = n, gi.transition = r;
  }
}
function xc() {
  return We().memoizedState;
}
function hp(e, t, n) {
  var r = Vt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, wc(e)) kc(t, n);
  else if (n = tc(e, t, n, r), n !== null) {
    var a = _e();
    Ze(n, e, r, a), Sc(n, t, r);
  }
}
function vp(e, t, n) {
  var r = Vt(e), a = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (wc(e)) kc(t, a);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var l = t.lastRenderedState, u = i(l, n);
      if (a.hasEagerState = !0, a.eagerState = u, et(u, l)) {
        var s = t.interleaved;
        s === null ? (a.next = a, Ko(t)) : (a.next = s.next, s.next = a), t.interleaved = a;
        return;
      }
    } catch {
    } finally {
    }
    n = tc(e, t, a, r), n !== null && (a = _e(), Ze(n, e, r, a), Sc(n, t, r));
  }
}
function wc(e) {
  var t = e.alternate;
  return e === ee || t !== null && t === ee;
}
function kc(e, t) {
  ir = Ea = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Sc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Ao(e, n);
  }
}
var Pa = { readContext: qe, useCallback: ye, useContext: ye, useEffect: ye, useImperativeHandle: ye, useInsertionEffect: ye, useLayoutEffect: ye, useMemo: ye, useReducer: ye, useRef: ye, useState: ye, useDebugValue: ye, useDeferredValue: ye, useTransition: ye, useMutableSource: ye, useSyncExternalStore: ye, useId: ye, unstable_isNewReconciler: !1 }, gp = { readContext: qe, useCallback: function(e, t) {
  return lt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: qe, useEffect: cs, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, ia(
    4194308,
    4,
    mc.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return ia(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return ia(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = lt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = lt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = hp.bind(null, ee, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = lt();
  return e = { current: e }, t.memoizedState = e;
}, useState: us, useDebugValue: il, useDeferredValue: function(e) {
  return lt().memoizedState = e;
}, useTransition: function() {
  var e = us(!1), t = e[0];
  return e = mp.bind(null, e[1]), lt().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = ee, a = lt();
  if (K) {
    if (n === void 0) throw Error(N(407));
    n = n();
  } else {
    if (n = t(), ce === null) throw Error(N(349));
    ln & 30 || oc(r, t, n);
  }
  a.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return a.queue = i, cs(sc.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, _r(9, lc.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = lt(), t = ce.identifierPrefix;
  if (K) {
    var n = wt, r = xt;
    n = (r & ~(1 << 32 - Je(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = jr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = pp++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, yp = {
  readContext: qe,
  useCallback: vc,
  useContext: qe,
  useEffect: al,
  useImperativeHandle: hc,
  useInsertionEffect: fc,
  useLayoutEffect: pc,
  useMemo: gc,
  useReducer: yi,
  useRef: dc,
  useState: function() {
    return yi(Cr);
  },
  useDebugValue: il,
  useDeferredValue: function(e) {
    var t = We();
    return yc(t, oe.memoizedState, e);
  },
  useTransition: function() {
    var e = yi(Cr)[0], t = We().memoizedState;
    return [e, t];
  },
  useMutableSource: ac,
  useSyncExternalStore: ic,
  useId: xc,
  unstable_isNewReconciler: !1
}, xp = { readContext: qe, useCallback: vc, useContext: qe, useEffect: al, useImperativeHandle: hc, useInsertionEffect: fc, useLayoutEffect: pc, useMemo: gc, useReducer: xi, useRef: dc, useState: function() {
  return xi(Cr);
}, useDebugValue: il, useDeferredValue: function(e) {
  var t = We();
  return oe === null ? t.memoizedState = e : yc(t, oe.memoizedState, e);
}, useTransition: function() {
  var e = xi(Cr)[0], t = We().memoizedState;
  return [e, t];
}, useMutableSource: ac, useSyncExternalStore: ic, useId: xc, unstable_isNewReconciler: !1 };
function Ye(e, t) {
  if (e && e.defaultProps) {
    t = te({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function no(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : te({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Va = { isMounted: function(e) {
  return (e = e._reactInternals) ? dn(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = _e(), a = Vt(e), i = kt(r, a);
  i.payload = t, n != null && (i.callback = n), t = Bt(e, i, a), t !== null && (Ze(t, e, a, r), ra(t, e, a));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = _e(), a = Vt(e), i = kt(r, a);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Bt(e, i, a), t !== null && (Ze(t, e, a, r), ra(t, e, a));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = _e(), r = Vt(e), a = kt(n, r);
  a.tag = 2, t != null && (a.callback = t), t = Bt(e, a, r), t !== null && (Ze(t, e, r, n), ra(t, e, r));
} };
function ds(e, t, n, r, a, i, l) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, l) : t.prototype && t.prototype.isPureReactComponent ? !gr(n, r) || !gr(a, i) : !0;
}
function jc(e, t, n) {
  var r = !1, a = qt, i = t.contextType;
  return typeof i == "object" && i !== null ? i = qe(i) : (a = Le(t) ? an : ke.current, r = t.contextTypes, i = (r = r != null) ? Rn(e, a) : qt), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Va, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function fs(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Va.enqueueReplaceState(t, t.state, null);
}
function ro(e, t, n, r) {
  var a = e.stateNode;
  a.props = n, a.state = e.memoizedState, a.refs = {}, Xo(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? a.context = qe(i) : (i = Le(t) ? an : ke.current, a.context = Rn(e, i)), a.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (no(e, t, i, n), a.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (t = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), t !== a.state && Va.enqueueReplaceState(a, a.state, null), _a(e, n, a, r), a.state = e.memoizedState), typeof a.componentDidMount == "function" && (e.flags |= 4194308);
}
function On(e, t) {
  try {
    var n = "", r = t;
    do
      n += qd(r), r = r.return;
    while (r);
    var a = n;
  } catch (i) {
    a = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: a, digest: null };
}
function wi(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ao(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var wp = typeof WeakMap == "function" ? WeakMap : Map;
function Cc(e, t, n) {
  n = kt(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Ma || (Ma = !0, ho = r), ao(e, t);
  }, n;
}
function _c(e, t, n) {
  n = kt(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var a = t.value;
    n.payload = function() {
      return r(a);
    }, n.callback = function() {
      ao(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    ao(e, t), typeof r != "function" && (Ut === null ? Ut = /* @__PURE__ */ new Set([this]) : Ut.add(this));
    var l = t.stack;
    this.componentDidCatch(t.value, { componentStack: l !== null ? l : "" });
  }), n;
}
function ps(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new wp();
    var a = /* @__PURE__ */ new Set();
    r.set(t, a);
  } else a = r.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), r.set(t, a));
  a.has(n) || (a.add(n), e = Dp.bind(null, e, t, n), t.then(e, e));
}
function ms(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function hs(e, t, n, r, a) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = a, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = kt(-1, 1), t.tag = 2, Bt(n, t, 1))), n.lanes |= 1), e);
}
var kp = Nt.ReactCurrentOwner, Me = !1;
function Ce(e, t, n, r) {
  t.child = e === null ? ec(t, null, n, r) : In(t, e.child, n, r);
}
function vs(e, t, n, r, a) {
  n = n.render;
  var i = t.ref;
  return Mn(t, a), r = nl(e, t, n, r, i, a), n = rl(), e !== null && !Me ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, _t(e, t, a)) : (K && n && Ho(t), t.flags |= 1, Ce(e, t, r, a), t.child);
}
function gs(e, t, n, r, a) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !pl(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Nc(e, t, i, r, a)) : (e = ua(n.type, null, r, t, t.mode, a), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & a)) {
    var l = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : gr, n(l, r) && e.ref === t.ref) return _t(e, t, a);
  }
  return t.flags |= 1, e = Ht(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Nc(e, t, n, r, a) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (gr(i, r) && e.ref === t.ref) if (Me = !1, t.pendingProps = r = i, (e.lanes & a) !== 0) e.flags & 131072 && (Me = !0);
    else return t.lanes = e.lanes, _t(e, t, a);
  }
  return io(e, t, n, r, a);
}
function Ec(e, t, n) {
  var r = t.pendingProps, a = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, W(_n, De), De |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, W(_n, De), De |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, W(_n, De), De |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, W(_n, De), De |= r;
  return Ce(e, t, a, n), t.child;
}
function Pc(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function io(e, t, n, r, a) {
  var i = Le(n) ? an : ke.current;
  return i = Rn(t, i), Mn(t, a), n = nl(e, t, n, r, i, a), r = rl(), e !== null && !Me ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, _t(e, t, a)) : (K && r && Ho(t), t.flags |= 1, Ce(e, t, n, a), t.child);
}
function ys(e, t, n, r, a) {
  if (Le(n)) {
    var i = !0;
    wa(t);
  } else i = !1;
  if (Mn(t, a), t.stateNode === null) oa(e, t), jc(t, n, r), ro(t, n, r, a), r = !0;
  else if (e === null) {
    var l = t.stateNode, u = t.memoizedProps;
    l.props = u;
    var s = l.context, f = n.contextType;
    typeof f == "object" && f !== null ? f = qe(f) : (f = Le(n) ? an : ke.current, f = Rn(t, f));
    var v = n.getDerivedStateFromProps, m = typeof v == "function" || typeof l.getSnapshotBeforeUpdate == "function";
    m || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (u !== r || s !== f) && fs(t, l, r, f), Lt = !1;
    var h = t.memoizedState;
    l.state = h, _a(t, r, l, a), s = t.memoizedState, u !== r || h !== s || Te.current || Lt ? (typeof v == "function" && (no(t, n, v, r), s = t.memoizedState), (u = Lt || ds(t, n, u, r, h, s, f)) ? (m || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), l.props = r, l.state = s, l.context = f, r = u) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    l = t.stateNode, nc(e, t), u = t.memoizedProps, f = t.type === t.elementType ? u : Ye(t.type, u), l.props = f, m = t.pendingProps, h = l.context, s = n.contextType, typeof s == "object" && s !== null ? s = qe(s) : (s = Le(n) ? an : ke.current, s = Rn(t, s));
    var x = n.getDerivedStateFromProps;
    (v = typeof x == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (u !== m || h !== s) && fs(t, l, r, s), Lt = !1, h = t.memoizedState, l.state = h, _a(t, r, l, a);
    var C = t.memoizedState;
    u !== m || h !== C || Te.current || Lt ? (typeof x == "function" && (no(t, n, x, r), C = t.memoizedState), (f = Lt || ds(t, n, f, r, h, C, s) || !1) ? (v || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, C, s), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, C, s)), typeof l.componentDidUpdate == "function" && (t.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = C), l.props = r, l.state = C, l.context = s, r = f) : (typeof l.componentDidUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return oo(e, t, n, r, i, a);
}
function oo(e, t, n, r, a, i) {
  Pc(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return a && rs(t, n, !1), _t(e, t, i);
  r = t.stateNode, kp.current = t;
  var u = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && l ? (t.child = In(t, e.child, null, i), t.child = In(t, null, u, i)) : Ce(e, t, u, i), t.memoizedState = r.state, a && rs(t, n, !0), t.child;
}
function zc(e) {
  var t = e.stateNode;
  t.pendingContext ? ns(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ns(e, t.context, !1), Jo(e, t.containerInfo);
}
function xs(e, t, n, r, a) {
  return Dn(), qo(a), t.flags |= 256, Ce(e, t, n, r), t.child;
}
var lo = { dehydrated: null, treeContext: null, retryLane: 0 };
function so(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Mc(e, t, n) {
  var r = t.pendingProps, a = Z.current, i = !1, l = (t.flags & 128) !== 0, u;
  if ((u = l) || (u = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0), u ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (a |= 1), W(Z, a & 1), e === null)
    return eo(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (l = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, l = { mode: "hidden", children: l }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = l) : i = qa(l, r, 0, null), e = rn(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = so(n), t.memoizedState = lo, e) : ol(t, l));
  if (a = e.memoizedState, a !== null && (u = a.dehydrated, u !== null)) return Sp(e, t, l, r, u, a, n);
  if (i) {
    i = r.fallback, l = t.mode, a = e.child, u = a.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(l & 1) && t.child !== a ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = Ht(a, s), r.subtreeFlags = a.subtreeFlags & 14680064), u !== null ? i = Ht(u, i) : (i = rn(i, l, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, l = e.child.memoizedState, l = l === null ? so(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }, i.memoizedState = l, i.childLanes = e.childLanes & ~n, t.memoizedState = lo, r;
  }
  return i = e.child, e = i.sibling, r = Ht(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function ol(e, t) {
  return t = qa({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Qr(e, t, n, r) {
  return r !== null && qo(r), In(t, e.child, null, n), e = ol(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Sp(e, t, n, r, a, i, l) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = wi(Error(N(422))), Qr(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, a = t.mode, r = qa({ mode: "visible", children: r.children }, a, 0, null), i = rn(i, a, l, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && In(t, e.child, null, l), t.child.memoizedState = so(l), t.memoizedState = lo, i);
  if (!(t.mode & 1)) return Qr(e, t, l, null);
  if (a.data === "$!") {
    if (r = a.nextSibling && a.nextSibling.dataset, r) var u = r.dgst;
    return r = u, i = Error(N(419)), r = wi(i, r, void 0), Qr(e, t, l, r);
  }
  if (u = (l & e.childLanes) !== 0, Me || u) {
    if (r = ce, r !== null) {
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
      a = a & (r.suspendedLanes | l) ? 0 : a, a !== 0 && a !== i.retryLane && (i.retryLane = a, Ct(e, a), Ze(r, e, a, -1));
    }
    return fl(), r = wi(Error(N(421))), Qr(e, t, l, r);
  }
  return a.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Ip.bind(null, e), a._reactRetry = t, null) : (e = i.treeContext, Ie = Ft(a.nextSibling), Ae = t, K = !0, Xe = null, e !== null && (Ue[Ve++] = xt, Ue[Ve++] = wt, Ue[Ve++] = on, xt = e.id, wt = e.overflow, on = t), t = ol(t, r.children), t.flags |= 4096, t);
}
function ws(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), to(e.return, t, n);
}
function ki(e, t, n, r, a) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: a } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = a);
}
function Tc(e, t, n) {
  var r = t.pendingProps, a = r.revealOrder, i = r.tail;
  if (Ce(e, t, r.children, n), r = Z.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && ws(e, n, t);
      else if (e.tag === 19) ws(e, n, t);
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
  if (W(Z, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (a) {
    case "forwards":
      for (n = t.child, a = null; n !== null; ) e = n.alternate, e !== null && Na(e) === null && (a = n), n = n.sibling;
      n = a, n === null ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), ki(t, !1, a, n, i);
      break;
    case "backwards":
      for (n = null, a = t.child, t.child = null; a !== null; ) {
        if (e = a.alternate, e !== null && Na(e) === null) {
          t.child = a;
          break;
        }
        e = a.sibling, a.sibling = n, n = a, a = e;
      }
      ki(t, !0, n, null, i);
      break;
    case "together":
      ki(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function oa(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function _t(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), sn |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(N(153));
  if (t.child !== null) {
    for (e = t.child, n = Ht(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Ht(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function jp(e, t, n) {
  switch (t.tag) {
    case 3:
      zc(t), Dn();
      break;
    case 5:
      rc(t);
      break;
    case 1:
      Le(t.type) && wa(t);
      break;
    case 4:
      Jo(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, a = t.memoizedProps.value;
      W(ja, r._currentValue), r._currentValue = a;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (W(Z, Z.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Mc(e, t, n) : (W(Z, Z.current & 1), e = _t(e, t, n), e !== null ? e.sibling : null);
      W(Z, Z.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Tc(e, t, n);
        t.flags |= 128;
      }
      if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), W(Z, Z.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Ec(e, t, n);
  }
  return _t(e, t, n);
}
var Lc, uo, Rc, Dc;
Lc = function(e, t) {
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
uo = function() {
};
Rc = function(e, t, n, r) {
  var a = e.memoizedProps;
  if (a !== r) {
    e = t.stateNode, tn(ct.current);
    var i = null;
    switch (n) {
      case "input":
        a = Ti(e, a), r = Ti(e, r), i = [];
        break;
      case "select":
        a = te({}, a, { value: void 0 }), r = te({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        a = Di(e, a), r = Di(e, r), i = [];
        break;
      default:
        typeof a.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ya);
    }
    Ai(n, r);
    var l;
    n = null;
    for (f in a) if (!r.hasOwnProperty(f) && a.hasOwnProperty(f) && a[f] != null) if (f === "style") {
      var u = a[f];
      for (l in u) u.hasOwnProperty(l) && (n || (n = {}), n[l] = "");
    } else f !== "dangerouslySetInnerHTML" && f !== "children" && f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && f !== "autoFocus" && (cr.hasOwnProperty(f) ? i || (i = []) : (i = i || []).push(f, null));
    for (f in r) {
      var s = r[f];
      if (u = a != null ? a[f] : void 0, r.hasOwnProperty(f) && s !== u && (s != null || u != null)) if (f === "style") if (u) {
        for (l in u) !u.hasOwnProperty(l) || s && s.hasOwnProperty(l) || (n || (n = {}), n[l] = "");
        for (l in s) s.hasOwnProperty(l) && u[l] !== s[l] && (n || (n = {}), n[l] = s[l]);
      } else n || (i || (i = []), i.push(
        f,
        n
      )), n = s;
      else f === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (i = i || []).push(f, s)) : f === "children" ? typeof s != "string" && typeof s != "number" || (i = i || []).push(f, "" + s) : f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && (cr.hasOwnProperty(f) ? (s != null && f === "onScroll" && Q("scroll", e), i || u === s || (i = [])) : (i = i || []).push(f, s));
    }
    n && (i = i || []).push("style", n);
    var f = i;
    (t.updateQueue = f) && (t.flags |= 4);
  }
};
Dc = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Qn(e, t) {
  if (!K) switch (e.tailMode) {
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
function Cp(e, t, n) {
  var r = t.pendingProps;
  switch (Go(t), t.tag) {
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
      return Le(t.type) && xa(), xe(t), null;
    case 3:
      return r = t.stateNode, An(), Y(Te), Y(ke), el(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (qr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Xe !== null && (yo(Xe), Xe = null))), uo(e, t), xe(t), null;
    case 5:
      Zo(t);
      var a = tn(Sr.current);
      if (n = t.type, e !== null && t.stateNode != null) Rc(e, t, n, r, a), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(N(166));
          return xe(t), null;
        }
        if (e = tn(ct.current), qr(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[st] = t, r[wr] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              Q("cancel", r), Q("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Q("load", r);
              break;
            case "video":
            case "audio":
              for (a = 0; a < Zn.length; a++) Q(Zn[a], r);
              break;
            case "source":
              Q("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Q(
                "error",
                r
              ), Q("load", r);
              break;
            case "details":
              Q("toggle", r);
              break;
            case "input":
              zl(r, i), Q("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, Q("invalid", r);
              break;
            case "textarea":
              Tl(r, i), Q("invalid", r);
          }
          Ai(n, i), a = null;
          for (var l in i) if (i.hasOwnProperty(l)) {
            var u = i[l];
            l === "children" ? typeof u == "string" ? r.textContent !== u && (i.suppressHydrationWarning !== !0 && Gr(r.textContent, u, e), a = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (i.suppressHydrationWarning !== !0 && Gr(
              r.textContent,
              u,
              e
            ), a = ["children", "" + u]) : cr.hasOwnProperty(l) && u != null && l === "onScroll" && Q("scroll", r);
          }
          switch (n) {
            case "input":
              Or(r), Ml(r, i, !0);
              break;
            case "textarea":
              Or(r), Ll(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = ya);
          }
          r = a, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          l = a.nodeType === 9 ? a : a.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = su(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, { is: r.is }) : (e = l.createElement(n), n === "select" && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[st] = t, e[wr] = r, Lc(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (l = Oi(n, r), n) {
              case "dialog":
                Q("cancel", e), Q("close", e), a = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                Q("load", e), a = r;
                break;
              case "video":
              case "audio":
                for (a = 0; a < Zn.length; a++) Q(Zn[a], e);
                a = r;
                break;
              case "source":
                Q("error", e), a = r;
                break;
              case "img":
              case "image":
              case "link":
                Q(
                  "error",
                  e
                ), Q("load", e), a = r;
                break;
              case "details":
                Q("toggle", e), a = r;
                break;
              case "input":
                zl(e, r), a = Ti(e, r), Q("invalid", e);
                break;
              case "option":
                a = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, a = te({}, r, { value: void 0 }), Q("invalid", e);
                break;
              case "textarea":
                Tl(e, r), a = Di(e, r), Q("invalid", e);
                break;
              default:
                a = r;
            }
            Ai(n, a), u = a;
            for (i in u) if (u.hasOwnProperty(i)) {
              var s = u[i];
              i === "style" ? du(e, s) : i === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && uu(e, s)) : i === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && dr(e, s) : typeof s == "number" && dr(e, "" + s) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (cr.hasOwnProperty(i) ? s != null && i === "onScroll" && Q("scroll", e) : s != null && Mo(e, i, s, l));
            }
            switch (n) {
              case "input":
                Or(e), Ml(e, r, !1);
                break;
              case "textarea":
                Or(e), Ll(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Gt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? Nn(e, !!r.multiple, i, !1) : r.defaultValue != null && Nn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof a.onClick == "function" && (e.onclick = ya);
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
      if (e && t.stateNode != null) Dc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(N(166));
        if (n = tn(Sr.current), tn(ct.current), qr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[st] = t, (i = r.nodeValue !== n) && (e = Ae, e !== null)) switch (e.tag) {
            case 3:
              Gr(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Gr(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[st] = t, t.stateNode = r;
      }
      return xe(t), null;
    case 13:
      if (Y(Z), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (K && Ie !== null && t.mode & 1 && !(t.flags & 128)) Ju(), Dn(), t.flags |= 98560, i = !1;
        else if (i = qr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(N(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(N(317));
            i[st] = t;
          } else Dn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          xe(t), i = !1;
        } else Xe !== null && (yo(Xe), Xe = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Z.current & 1 ? le === 0 && (le = 3) : fl())), t.updateQueue !== null && (t.flags |= 4), xe(t), null);
    case 4:
      return An(), uo(e, t), e === null && yr(t.stateNode.containerInfo), xe(t), null;
    case 10:
      return Yo(t.type._context), xe(t), null;
    case 17:
      return Le(t.type) && xa(), xe(t), null;
    case 19:
      if (Y(Z), i = t.memoizedState, i === null) return xe(t), null;
      if (r = (t.flags & 128) !== 0, l = i.rendering, l === null) if (r) Qn(i, !1);
      else {
        if (le !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (l = Na(e), l !== null) {
            for (t.flags |= 128, Qn(i, !1), r = l.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, l = i.alternate, l === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = l.childLanes, i.lanes = l.lanes, i.child = l.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = l.memoizedProps, i.memoizedState = l.memoizedState, i.updateQueue = l.updateQueue, i.type = l.type, e = l.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return W(Z, Z.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && ae() > $n && (t.flags |= 128, r = !0, Qn(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = Na(l), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Qn(i, !0), i.tail === null && i.tailMode === "hidden" && !l.alternate && !K) return xe(t), null;
        } else 2 * ae() - i.renderingStartTime > $n && n !== 1073741824 && (t.flags |= 128, r = !0, Qn(i, !1), t.lanes = 4194304);
        i.isBackwards ? (l.sibling = t.child, t.child = l) : (n = i.last, n !== null ? n.sibling = l : t.child = l, i.last = l);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = ae(), t.sibling = null, n = Z.current, W(Z, r ? n & 1 | 2 : n & 1), t) : (xe(t), null);
    case 22:
    case 23:
      return dl(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? De & 1073741824 && (xe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : xe(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(N(156, t.tag));
}
function _p(e, t) {
  switch (Go(t), t.tag) {
    case 1:
      return Le(t.type) && xa(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return An(), Y(Te), Y(ke), el(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Zo(t), null;
    case 13:
      if (Y(Z), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(N(340));
        Dn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return Y(Z), null;
    case 4:
      return An(), null;
    case 10:
      return Yo(t.type._context), null;
    case 22:
    case 23:
      return dl(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Yr = !1, we = !1, Np = typeof WeakSet == "function" ? WeakSet : Set, T = null;
function Cn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    re(e, t, r);
  }
  else n.current = null;
}
function co(e, t, n) {
  try {
    n();
  } catch (r) {
    re(e, t, r);
  }
}
var ks = !1;
function Ep(e, t) {
  if (Wi = ha, e = bu(), Vo(e)) {
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
        var l = 0, u = -1, s = -1, f = 0, v = 0, m = e, h = null;
        t: for (; ; ) {
          for (var x; m !== n || a !== 0 && m.nodeType !== 3 || (u = l + a), m !== i || r !== 0 && m.nodeType !== 3 || (s = l + r), m.nodeType === 3 && (l += m.nodeValue.length), (x = m.firstChild) !== null; )
            h = m, m = x;
          for (; ; ) {
            if (m === e) break t;
            if (h === n && ++f === a && (u = l), h === i && ++v === r && (s = l), (x = m.nextSibling) !== null) break;
            m = h, h = m.parentNode;
          }
          m = x;
        }
        n = u === -1 || s === -1 ? null : { start: u, end: s };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Qi = { focusedElem: e, selectionRange: n }, ha = !1, T = t; T !== null; ) if (t = T, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, T = e;
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
            var y = C.memoizedProps, R = C.memoizedState, d = t.stateNode, c = d.getSnapshotBeforeUpdate(t.elementType === t.type ? y : Ye(t.type, y), R);
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
          throw Error(N(163));
      }
    } catch (w) {
      re(t, t.return, w);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, T = e;
      break;
    }
    T = t.return;
  }
  return C = ks, ks = !1, C;
}
function or(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var a = r = r.next;
    do {
      if ((a.tag & e) === e) {
        var i = a.destroy;
        a.destroy = void 0, i !== void 0 && co(t, n, i);
      }
      a = a.next;
    } while (a !== r);
  }
}
function Ha(e, t) {
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
function fo(e) {
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
function Ic(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Ic(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[st], delete t[wr], delete t[Xi], delete t[up], delete t[cp])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Ac(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ss(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ac(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function po(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = ya));
  else if (r !== 4 && (e = e.child, e !== null)) for (po(e, t, n), e = e.sibling; e !== null; ) po(e, t, n), e = e.sibling;
}
function mo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (mo(e, t, n), e = e.sibling; e !== null; ) mo(e, t, n), e = e.sibling;
}
var pe = null, Ke = !1;
function Mt(e, t, n) {
  for (n = n.child; n !== null; ) Oc(e, t, n), n = n.sibling;
}
function Oc(e, t, n) {
  if (ut && typeof ut.onCommitFiberUnmount == "function") try {
    ut.onCommitFiberUnmount(Aa, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      we || Cn(n, t);
    case 6:
      var r = pe, a = Ke;
      pe = null, Mt(e, t, n), pe = r, Ke = a, pe !== null && (Ke ? (e = pe, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : pe.removeChild(n.stateNode));
      break;
    case 18:
      pe !== null && (Ke ? (e = pe, n = n.stateNode, e.nodeType === 8 ? mi(e.parentNode, n) : e.nodeType === 1 && mi(e, n), hr(e)) : mi(pe, n.stateNode));
      break;
    case 4:
      r = pe, a = Ke, pe = n.stateNode.containerInfo, Ke = !0, Mt(e, t, n), pe = r, Ke = a;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!we && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        a = r = r.next;
        do {
          var i = a, l = i.destroy;
          i = i.tag, l !== void 0 && (i & 2 || i & 4) && co(n, t, l), a = a.next;
        } while (a !== r);
      }
      Mt(e, t, n);
      break;
    case 1:
      if (!we && (Cn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (u) {
        re(n, t, u);
      }
      Mt(e, t, n);
      break;
    case 21:
      Mt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (we = (r = we) || n.memoizedState !== null, Mt(e, t, n), we = r) : Mt(e, t, n);
      break;
    default:
      Mt(e, t, n);
  }
}
function js(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Np()), t.forEach(function(r) {
      var a = Ap.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(a, a));
    });
  }
}
function Qe(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var a = n[r];
    try {
      var i = e, l = t, u = l;
      e: for (; u !== null; ) {
        switch (u.tag) {
          case 5:
            pe = u.stateNode, Ke = !1;
            break e;
          case 3:
            pe = u.stateNode.containerInfo, Ke = !0;
            break e;
          case 4:
            pe = u.stateNode.containerInfo, Ke = !0;
            break e;
        }
        u = u.return;
      }
      if (pe === null) throw Error(N(160));
      Oc(i, l, a), pe = null, Ke = !1;
      var s = a.alternate;
      s !== null && (s.return = null), a.return = null;
    } catch (f) {
      re(a, t, f);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) $c(t, e), t = t.sibling;
}
function $c(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Qe(t, e), ot(e), r & 4) {
        try {
          or(3, e, e.return), Ha(3, e);
        } catch (y) {
          re(e, e.return, y);
        }
        try {
          or(5, e, e.return);
        } catch (y) {
          re(e, e.return, y);
        }
      }
      break;
    case 1:
      Qe(t, e), ot(e), r & 512 && n !== null && Cn(n, n.return);
      break;
    case 5:
      if (Qe(t, e), ot(e), r & 512 && n !== null && Cn(n, n.return), e.flags & 32) {
        var a = e.stateNode;
        try {
          dr(a, "");
        } catch (y) {
          re(e, e.return, y);
        }
      }
      if (r & 4 && (a = e.stateNode, a != null)) {
        var i = e.memoizedProps, l = n !== null ? n.memoizedProps : i, u = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null) try {
          u === "input" && i.type === "radio" && i.name != null && ou(a, i), Oi(u, l);
          var f = Oi(u, i);
          for (l = 0; l < s.length; l += 2) {
            var v = s[l], m = s[l + 1];
            v === "style" ? du(a, m) : v === "dangerouslySetInnerHTML" ? uu(a, m) : v === "children" ? dr(a, m) : Mo(a, v, m, f);
          }
          switch (u) {
            case "input":
              Li(a, i);
              break;
            case "textarea":
              lu(a, i);
              break;
            case "select":
              var h = a._wrapperState.wasMultiple;
              a._wrapperState.wasMultiple = !!i.multiple;
              var x = i.value;
              x != null ? Nn(a, !!i.multiple, x, !1) : h !== !!i.multiple && (i.defaultValue != null ? Nn(
                a,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : Nn(a, !!i.multiple, i.multiple ? [] : "", !1));
          }
          a[wr] = i;
        } catch (y) {
          re(e, e.return, y);
        }
      }
      break;
    case 6:
      if (Qe(t, e), ot(e), r & 4) {
        if (e.stateNode === null) throw Error(N(162));
        a = e.stateNode, i = e.memoizedProps;
        try {
          a.nodeValue = i;
        } catch (y) {
          re(e, e.return, y);
        }
      }
      break;
    case 3:
      if (Qe(t, e), ot(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        hr(t.containerInfo);
      } catch (y) {
        re(e, e.return, y);
      }
      break;
    case 4:
      Qe(t, e), ot(e);
      break;
    case 13:
      Qe(t, e), ot(e), a = e.child, a.flags & 8192 && (i = a.memoizedState !== null, a.stateNode.isHidden = i, !i || a.alternate !== null && a.alternate.memoizedState !== null || (ul = ae())), r & 4 && js(e);
      break;
    case 22:
      if (v = n !== null && n.memoizedState !== null, e.mode & 1 ? (we = (f = we) || v, Qe(t, e), we = f) : Qe(t, e), ot(e), r & 8192) {
        if (f = e.memoizedState !== null, (e.stateNode.isHidden = f) && !v && e.mode & 1) for (T = e, v = e.child; v !== null; ) {
          for (m = T = v; T !== null; ) {
            switch (h = T, x = h.child, h.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                or(4, h, h.return);
                break;
              case 1:
                Cn(h, h.return);
                var C = h.stateNode;
                if (typeof C.componentWillUnmount == "function") {
                  r = h, n = h.return;
                  try {
                    t = r, C.props = t.memoizedProps, C.state = t.memoizedState, C.componentWillUnmount();
                  } catch (y) {
                    re(r, n, y);
                  }
                }
                break;
              case 5:
                Cn(h, h.return);
                break;
              case 22:
                if (h.memoizedState !== null) {
                  _s(m);
                  continue;
                }
            }
            x !== null ? (x.return = h, T = x) : _s(m);
          }
          v = v.sibling;
        }
        e: for (v = null, m = e; ; ) {
          if (m.tag === 5) {
            if (v === null) {
              v = m;
              try {
                a = m.stateNode, f ? (i = a.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (u = m.stateNode, s = m.memoizedProps.style, l = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = cu("display", l));
              } catch (y) {
                re(e, e.return, y);
              }
            }
          } else if (m.tag === 6) {
            if (v === null) try {
              m.stateNode.nodeValue = f ? "" : m.memoizedProps;
            } catch (y) {
              re(e, e.return, y);
            }
          } else if ((m.tag !== 22 && m.tag !== 23 || m.memoizedState === null || m === e) && m.child !== null) {
            m.child.return = m, m = m.child;
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            v === m && (v = null), m = m.return;
          }
          v === m && (v = null), m.sibling.return = m.return, m = m.sibling;
        }
      }
      break;
    case 19:
      Qe(t, e), ot(e), r & 4 && js(e);
      break;
    case 21:
      break;
    default:
      Qe(
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
          if (Ac(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(N(160));
      }
      switch (r.tag) {
        case 5:
          var a = r.stateNode;
          r.flags & 32 && (dr(a, ""), r.flags &= -33);
          var i = Ss(e);
          mo(e, i, a);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo, u = Ss(e);
          po(e, u, l);
          break;
        default:
          throw Error(N(161));
      }
    } catch (s) {
      re(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Pp(e, t, n) {
  T = e, bc(e);
}
function bc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; T !== null; ) {
    var a = T, i = a.child;
    if (a.tag === 22 && r) {
      var l = a.memoizedState !== null || Yr;
      if (!l) {
        var u = a.alternate, s = u !== null && u.memoizedState !== null || we;
        u = Yr;
        var f = we;
        if (Yr = l, (we = s) && !f) for (T = a; T !== null; ) l = T, s = l.child, l.tag === 22 && l.memoizedState !== null ? Ns(a) : s !== null ? (s.return = l, T = s) : Ns(a);
        for (; i !== null; ) T = i, bc(i), i = i.sibling;
        T = a, Yr = u, we = f;
      }
      Cs(e);
    } else a.subtreeFlags & 8772 && i !== null ? (i.return = a, T = i) : Cs(e);
  }
}
function Cs(e) {
  for (; T !== null; ) {
    var t = T;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            we || Ha(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !we) if (n === null) r.componentDidMount();
            else {
              var a = t.elementType === t.type ? n.memoizedProps : Ye(t.type, n.memoizedProps);
              r.componentDidUpdate(a, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && ss(t, i, r);
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
              ss(t, l, n);
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
                var v = f.memoizedState;
                if (v !== null) {
                  var m = v.dehydrated;
                  m !== null && hr(m);
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
            throw Error(N(163));
        }
        we || t.flags & 512 && fo(t);
      } catch (h) {
        re(t, t.return, h);
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
function _s(e) {
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
function Ns(e) {
  for (; T !== null; ) {
    var t = T;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ha(4, t);
          } catch (s) {
            re(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var a = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              re(t, a, s);
            }
          }
          var i = t.return;
          try {
            fo(t);
          } catch (s) {
            re(t, i, s);
          }
          break;
        case 5:
          var l = t.return;
          try {
            fo(t);
          } catch (s) {
            re(t, l, s);
          }
      }
    } catch (s) {
      re(t, t.return, s);
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
var zp = Math.ceil, za = Nt.ReactCurrentDispatcher, ll = Nt.ReactCurrentOwner, Ge = Nt.ReactCurrentBatchConfig, V = 0, ce = null, ie = null, me = 0, De = 0, _n = Qt(0), le = 0, Nr = null, sn = 0, Ga = 0, sl = 0, lr = null, ze = null, ul = 0, $n = 1 / 0, vt = null, Ma = !1, ho = null, Ut = null, Kr = !1, At = null, Ta = 0, sr = 0, vo = null, la = -1, sa = 0;
function _e() {
  return V & 6 ? ae() : la !== -1 ? la : la = ae();
}
function Vt(e) {
  return e.mode & 1 ? V & 2 && me !== 0 ? me & -me : fp.transition !== null ? (sa === 0 && (sa = ju()), sa) : (e = G, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Mu(e.type)), e) : 1;
}
function Ze(e, t, n, r) {
  if (50 < sr) throw sr = 0, vo = null, Error(N(185));
  Mr(e, n, r), (!(V & 2) || e !== ce) && (e === ce && (!(V & 2) && (Ga |= n), le === 4 && Dt(e, me)), Re(e, r), n === 1 && V === 0 && !(t.mode & 1) && ($n = ae() + 500, Ba && Yt()));
}
function Re(e, t) {
  var n = e.callbackNode;
  ff(e, t);
  var r = ma(e, e === ce ? me : 0);
  if (r === 0) n !== null && Il(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Il(n), t === 1) e.tag === 0 ? dp(Es.bind(null, e)) : Yu(Es.bind(null, e)), lp(function() {
      !(V & 6) && Yt();
    }), n = null;
    else {
      switch (Cu(r)) {
        case 1:
          n = Io;
          break;
        case 4:
          n = ku;
          break;
        case 16:
          n = pa;
          break;
        case 536870912:
          n = Su;
          break;
        default:
          n = pa;
      }
      n = Wc(n, Fc.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Fc(e, t) {
  if (la = -1, sa = 0, V & 6) throw Error(N(327));
  var n = e.callbackNode;
  if (Tn() && e.callbackNode !== n) return null;
  var r = ma(e, e === ce ? me : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = La(e, r);
  else {
    t = r;
    var a = V;
    V |= 2;
    var i = Uc();
    (ce !== e || me !== t) && (vt = null, $n = ae() + 500, nn(e, t));
    do
      try {
        Lp();
        break;
      } catch (u) {
        Bc(e, u);
      }
    while (!0);
    Qo(), za.current = i, V = a, ie !== null ? t = 0 : (ce = null, me = 0, t = le);
  }
  if (t !== 0) {
    if (t === 2 && (a = Ui(e), a !== 0 && (r = a, t = go(e, a))), t === 1) throw n = Nr, nn(e, 0), Dt(e, r), Re(e, ae()), n;
    if (t === 6) Dt(e, r);
    else {
      if (a = e.current.alternate, !(r & 30) && !Mp(a) && (t = La(e, r), t === 2 && (i = Ui(e), i !== 0 && (r = i, t = go(e, i))), t === 1)) throw n = Nr, nn(e, 0), Dt(e, r), Re(e, ae()), n;
      switch (e.finishedWork = a, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(N(345));
        case 2:
          Jt(e, ze, vt);
          break;
        case 3:
          if (Dt(e, r), (r & 130023424) === r && (t = ul + 500 - ae(), 10 < t)) {
            if (ma(e, 0) !== 0) break;
            if (a = e.suspendedLanes, (a & r) !== r) {
              _e(), e.pingedLanes |= e.suspendedLanes & a;
              break;
            }
            e.timeoutHandle = Ki(Jt.bind(null, e, ze, vt), t);
            break;
          }
          Jt(e, ze, vt);
          break;
        case 4:
          if (Dt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, a = -1; 0 < r; ) {
            var l = 31 - Je(r);
            i = 1 << l, l = t[l], l > a && (a = l), r &= ~i;
          }
          if (r = a, r = ae() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * zp(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Ki(Jt.bind(null, e, ze, vt), r);
            break;
          }
          Jt(e, ze, vt);
          break;
        case 5:
          Jt(e, ze, vt);
          break;
        default:
          throw Error(N(329));
      }
    }
  }
  return Re(e, ae()), e.callbackNode === n ? Fc.bind(null, e) : null;
}
function go(e, t) {
  var n = lr;
  return e.current.memoizedState.isDehydrated && (nn(e, t).flags |= 256), e = La(e, t), e !== 2 && (t = ze, ze = n, t !== null && yo(t)), e;
}
function yo(e) {
  ze === null ? ze = e : ze.push.apply(ze, e);
}
function Mp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var a = n[r], i = a.getSnapshot;
        a = a.value;
        try {
          if (!et(i(), a)) return !1;
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
function Dt(e, t) {
  for (t &= ~sl, t &= ~Ga, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Je(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Es(e) {
  if (V & 6) throw Error(N(327));
  Tn();
  var t = ma(e, 0);
  if (!(t & 1)) return Re(e, ae()), null;
  var n = La(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ui(e);
    r !== 0 && (t = r, n = go(e, r));
  }
  if (n === 1) throw n = Nr, nn(e, 0), Dt(e, t), Re(e, ae()), n;
  if (n === 6) throw Error(N(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Jt(e, ze, vt), Re(e, ae()), null;
}
function cl(e, t) {
  var n = V;
  V |= 1;
  try {
    return e(t);
  } finally {
    V = n, V === 0 && ($n = ae() + 500, Ba && Yt());
  }
}
function un(e) {
  At !== null && At.tag === 0 && !(V & 6) && Tn();
  var t = V;
  V |= 1;
  var n = Ge.transition, r = G;
  try {
    if (Ge.transition = null, G = 1, e) return e();
  } finally {
    G = r, Ge.transition = n, V = t, !(V & 6) && Yt();
  }
}
function dl() {
  De = _n.current, Y(_n);
}
function nn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, op(n)), ie !== null) for (n = ie.return; n !== null; ) {
    var r = n;
    switch (Go(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && xa();
        break;
      case 3:
        An(), Y(Te), Y(ke), el();
        break;
      case 5:
        Zo(r);
        break;
      case 4:
        An();
        break;
      case 13:
        Y(Z);
        break;
      case 19:
        Y(Z);
        break;
      case 10:
        Yo(r.type._context);
        break;
      case 22:
      case 23:
        dl();
    }
    n = n.return;
  }
  if (ce = e, ie = e = Ht(e.current, null), me = De = t, le = 0, Nr = null, sl = Ga = sn = 0, ze = lr = null, en !== null) {
    for (t = 0; t < en.length; t++) if (n = en[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var a = r.next, i = n.pending;
      if (i !== null) {
        var l = i.next;
        i.next = a, r.next = l;
      }
      n.pending = r;
    }
    en = null;
  }
  return e;
}
function Bc(e, t) {
  do {
    var n = ie;
    try {
      if (Qo(), aa.current = Pa, Ea) {
        for (var r = ee.memoizedState; r !== null; ) {
          var a = r.queue;
          a !== null && (a.pending = null), r = r.next;
        }
        Ea = !1;
      }
      if (ln = 0, ue = oe = ee = null, ir = !1, jr = 0, ll.current = null, n === null || n.return === null) {
        le = 1, Nr = t, ie = null;
        break;
      }
      e: {
        var i = e, l = n.return, u = n, s = t;
        if (t = me, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var f = s, v = u, m = v.tag;
          if (!(v.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var h = v.alternate;
            h ? (v.updateQueue = h.updateQueue, v.memoizedState = h.memoizedState, v.lanes = h.lanes) : (v.updateQueue = null, v.memoizedState = null);
          }
          var x = ms(l);
          if (x !== null) {
            x.flags &= -257, hs(x, l, u, i, t), x.mode & 1 && ps(i, f, t), t = x, s = f;
            var C = t.updateQueue;
            if (C === null) {
              var y = /* @__PURE__ */ new Set();
              y.add(s), t.updateQueue = y;
            } else C.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              ps(i, f, t), fl();
              break e;
            }
            s = Error(N(426));
          }
        } else if (K && u.mode & 1) {
          var R = ms(l);
          if (R !== null) {
            !(R.flags & 65536) && (R.flags |= 256), hs(R, l, u, i, t), qo(On(s, u));
            break e;
          }
        }
        i = s = On(s, u), le !== 4 && (le = 2), lr === null ? lr = [i] : lr.push(i), i = l;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var d = Cc(i, s, t);
              ls(i, d);
              break e;
            case 1:
              u = s;
              var c = i.type, p = i.stateNode;
              if (!(i.flags & 128) && (typeof c.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (Ut === null || !Ut.has(p)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var w = _c(i, u, t);
                ls(i, w);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Hc(n);
    } catch (S) {
      t = S, ie === n && n !== null && (ie = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Uc() {
  var e = za.current;
  return za.current = Pa, e === null ? Pa : e;
}
function fl() {
  (le === 0 || le === 3 || le === 2) && (le = 4), ce === null || !(sn & 268435455) && !(Ga & 268435455) || Dt(ce, me);
}
function La(e, t) {
  var n = V;
  V |= 2;
  var r = Uc();
  (ce !== e || me !== t) && (vt = null, nn(e, t));
  do
    try {
      Tp();
      break;
    } catch (a) {
      Bc(e, a);
    }
  while (!0);
  if (Qo(), V = n, za.current = r, ie !== null) throw Error(N(261));
  return ce = null, me = 0, le;
}
function Tp() {
  for (; ie !== null; ) Vc(ie);
}
function Lp() {
  for (; ie !== null && !nf(); ) Vc(ie);
}
function Vc(e) {
  var t = qc(e.alternate, e, De);
  e.memoizedProps = e.pendingProps, t === null ? Hc(e) : ie = t, ll.current = null;
}
function Hc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = _p(n, t), n !== null) {
        n.flags &= 32767, ie = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        le = 6, ie = null;
        return;
      }
    } else if (n = Cp(n, t, De), n !== null) {
      ie = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      ie = t;
      return;
    }
    ie = t = e;
  } while (t !== null);
  le === 0 && (le = 5);
}
function Jt(e, t, n) {
  var r = G, a = Ge.transition;
  try {
    Ge.transition = null, G = 1, Rp(e, t, n, r);
  } finally {
    Ge.transition = a, G = r;
  }
  return null;
}
function Rp(e, t, n, r) {
  do
    Tn();
  while (At !== null);
  if (V & 6) throw Error(N(327));
  n = e.finishedWork;
  var a = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(N(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (pf(e, i), e === ce && (ie = ce = null, me = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Kr || (Kr = !0, Wc(pa, function() {
    return Tn(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = Ge.transition, Ge.transition = null;
    var l = G;
    G = 1;
    var u = V;
    V |= 4, ll.current = null, Ep(e, n), $c(n, e), Zf(Qi), ha = !!Wi, Qi = Wi = null, e.current = n, Pp(n), rf(), V = u, G = l, Ge.transition = i;
  } else e.current = n;
  if (Kr && (Kr = !1, At = e, Ta = a), i = e.pendingLanes, i === 0 && (Ut = null), lf(n.stateNode), Re(e, ae()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) a = t[n], r(a.value, { componentStack: a.stack, digest: a.digest });
  if (Ma) throw Ma = !1, e = ho, ho = null, e;
  return Ta & 1 && e.tag !== 0 && Tn(), i = e.pendingLanes, i & 1 ? e === vo ? sr++ : (sr = 0, vo = e) : sr = 0, Yt(), null;
}
function Tn() {
  if (At !== null) {
    var e = Cu(Ta), t = Ge.transition, n = G;
    try {
      if (Ge.transition = null, G = 16 > e ? 16 : e, At === null) var r = !1;
      else {
        if (e = At, At = null, Ta = 0, V & 6) throw Error(N(331));
        var a = V;
        for (V |= 4, T = e.current; T !== null; ) {
          var i = T, l = i.child;
          if (T.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var f = u[s];
                for (T = f; T !== null; ) {
                  var v = T;
                  switch (v.tag) {
                    case 0:
                    case 11:
                    case 15:
                      or(8, v, i);
                  }
                  var m = v.child;
                  if (m !== null) m.return = v, T = m;
                  else for (; T !== null; ) {
                    v = T;
                    var h = v.sibling, x = v.return;
                    if (Ic(v), v === f) {
                      T = null;
                      break;
                    }
                    if (h !== null) {
                      h.return = x, T = h;
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
                    var R = y.sibling;
                    y.sibling = null, y = R;
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
                or(9, i, i.return);
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
                  Ha(9, u);
              }
            } catch (S) {
              re(u, u.return, S);
            }
            if (u === l) {
              T = null;
              break e;
            }
            var w = u.sibling;
            if (w !== null) {
              w.return = u.return, T = w;
              break e;
            }
            T = u.return;
          }
        }
        if (V = a, Yt(), ut && typeof ut.onPostCommitFiberRoot == "function") try {
          ut.onPostCommitFiberRoot(Aa, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      G = n, Ge.transition = t;
    }
  }
  return !1;
}
function Ps(e, t, n) {
  t = On(n, t), t = Cc(e, t, 1), e = Bt(e, t, 1), t = _e(), e !== null && (Mr(e, 1, t), Re(e, t));
}
function re(e, t, n) {
  if (e.tag === 3) Ps(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Ps(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Ut === null || !Ut.has(r))) {
        e = On(n, e), e = _c(t, e, 1), t = Bt(t, e, 1), e = _e(), t !== null && (Mr(t, 1, e), Re(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Dp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = _e(), e.pingedLanes |= e.suspendedLanes & n, ce === e && (me & n) === n && (le === 4 || le === 3 && (me & 130023424) === me && 500 > ae() - ul ? nn(e, 0) : sl |= n), Re(e, t);
}
function Gc(e, t) {
  t === 0 && (e.mode & 1 ? (t = Fr, Fr <<= 1, !(Fr & 130023424) && (Fr = 4194304)) : t = 1);
  var n = _e();
  e = Ct(e, t), e !== null && (Mr(e, t, n), Re(e, n));
}
function Ip(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Gc(e, n);
}
function Ap(e, t) {
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
      throw Error(N(314));
  }
  r !== null && r.delete(t), Gc(e, n);
}
var qc;
qc = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Te.current) Me = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Me = !1, jp(e, t, n);
    Me = !!(e.flags & 131072);
  }
  else Me = !1, K && t.flags & 1048576 && Ku(t, Sa, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      oa(e, t), e = t.pendingProps;
      var a = Rn(t, ke.current);
      Mn(t, n), a = nl(null, t, r, e, a, n);
      var i = rl();
      return t.flags |= 1, typeof a == "object" && a !== null && typeof a.render == "function" && a.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Le(r) ? (i = !0, wa(t)) : i = !1, t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, Xo(t), a.updater = Va, t.stateNode = a, a._reactInternals = t, ro(t, r, e, n), t = oo(null, t, r, !0, i, n)) : (t.tag = 0, K && i && Ho(t), Ce(null, t, a, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (oa(e, t), e = t.pendingProps, a = r._init, r = a(r._payload), t.type = r, a = t.tag = $p(r), e = Ye(r, e), a) {
          case 0:
            t = io(null, t, r, e, n);
            break e;
          case 1:
            t = ys(null, t, r, e, n);
            break e;
          case 11:
            t = vs(null, t, r, e, n);
            break e;
          case 14:
            t = gs(null, t, r, Ye(r.type, e), n);
            break e;
        }
        throw Error(N(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : Ye(r, a), io(e, t, r, a, n);
    case 1:
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : Ye(r, a), ys(e, t, r, a, n);
    case 3:
      e: {
        if (zc(t), e === null) throw Error(N(387));
        r = t.pendingProps, i = t.memoizedState, a = i.element, nc(e, t), _a(t, r, null, n);
        var l = t.memoizedState;
        if (r = l.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: l.cache, pendingSuspenseBoundaries: l.pendingSuspenseBoundaries, transitions: l.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          a = On(Error(N(423)), t), t = xs(e, t, r, n, a);
          break e;
        } else if (r !== a) {
          a = On(Error(N(424)), t), t = xs(e, t, r, n, a);
          break e;
        } else for (Ie = Ft(t.stateNode.containerInfo.firstChild), Ae = t, K = !0, Xe = null, n = ec(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (Dn(), r === a) {
            t = _t(e, t, n);
            break e;
          }
          Ce(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return rc(t), e === null && eo(t), r = t.type, a = t.pendingProps, i = e !== null ? e.memoizedProps : null, l = a.children, Yi(r, a) ? l = null : i !== null && Yi(r, i) && (t.flags |= 32), Pc(e, t), Ce(e, t, l, n), t.child;
    case 6:
      return e === null && eo(t), null;
    case 13:
      return Mc(e, t, n);
    case 4:
      return Jo(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = In(t, null, r, n) : Ce(e, t, r, n), t.child;
    case 11:
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : Ye(r, a), vs(e, t, r, a, n);
    case 7:
      return Ce(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ce(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ce(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, a = t.pendingProps, i = t.memoizedProps, l = a.value, W(ja, r._currentValue), r._currentValue = l, i !== null) if (et(i.value, l)) {
          if (i.children === a.children && !Te.current) {
            t = _t(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var u = i.dependencies;
          if (u !== null) {
            l = i.child;
            for (var s = u.firstContext; s !== null; ) {
              if (s.context === r) {
                if (i.tag === 1) {
                  s = kt(-1, n & -n), s.tag = 2;
                  var f = i.updateQueue;
                  if (f !== null) {
                    f = f.shared;
                    var v = f.pending;
                    v === null ? s.next = s : (s.next = v.next, v.next = s), f.pending = s;
                  }
                }
                i.lanes |= n, s = i.alternate, s !== null && (s.lanes |= n), to(
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
            if (l = i.return, l === null) throw Error(N(341));
            l.lanes |= n, u = l.alternate, u !== null && (u.lanes |= n), to(l, n, t), l = i.sibling;
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
      return a = t.type, r = t.pendingProps.children, Mn(t, n), a = qe(a), r = r(a), t.flags |= 1, Ce(e, t, r, n), t.child;
    case 14:
      return r = t.type, a = Ye(r, t.pendingProps), a = Ye(r.type, a), gs(e, t, r, a, n);
    case 15:
      return Nc(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : Ye(r, a), oa(e, t), t.tag = 1, Le(r) ? (e = !0, wa(t)) : e = !1, Mn(t, n), jc(t, r, a), ro(t, r, a, n), oo(null, t, r, !0, e, n);
    case 19:
      return Tc(e, t, n);
    case 22:
      return Ec(e, t, n);
  }
  throw Error(N(156, t.tag));
};
function Wc(e, t) {
  return wu(e, t);
}
function Op(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function He(e, t, n, r) {
  return new Op(e, t, n, r);
}
function pl(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function $p(e) {
  if (typeof e == "function") return pl(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === Lo) return 11;
    if (e === Ro) return 14;
  }
  return 2;
}
function Ht(e, t) {
  var n = e.alternate;
  return n === null ? (n = He(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function ua(e, t, n, r, a, i) {
  var l = 2;
  if (r = e, typeof e == "function") pl(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else e: switch (e) {
    case hn:
      return rn(n.children, a, i, t);
    case To:
      l = 8, a |= 8;
      break;
    case Ei:
      return e = He(12, n, t, a | 2), e.elementType = Ei, e.lanes = i, e;
    case Pi:
      return e = He(13, n, t, a), e.elementType = Pi, e.lanes = i, e;
    case zi:
      return e = He(19, n, t, a), e.elementType = zi, e.lanes = i, e;
    case ru:
      return qa(n, a, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case tu:
          l = 10;
          break e;
        case nu:
          l = 9;
          break e;
        case Lo:
          l = 11;
          break e;
        case Ro:
          l = 14;
          break e;
        case Tt:
          l = 16, r = null;
          break e;
      }
      throw Error(N(130, e == null ? e : typeof e, ""));
  }
  return t = He(l, n, t, a), t.elementType = e, t.type = r, t.lanes = i, t;
}
function rn(e, t, n, r) {
  return e = He(7, e, r, t), e.lanes = n, e;
}
function qa(e, t, n, r) {
  return e = He(22, e, r, t), e.elementType = ru, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function Si(e, t, n) {
  return e = He(6, e, null, t), e.lanes = n, e;
}
function ji(e, t, n) {
  return t = He(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function bp(e, t, n, r, a) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ri(0), this.expirationTimes = ri(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ri(0), this.identifierPrefix = r, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null;
}
function ml(e, t, n, r, a, i, l, u, s) {
  return e = new bp(e, t, n, u, s), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = He(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Xo(i), e;
}
function Fp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: mn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Qc(e) {
  if (!e) return qt;
  e = e._reactInternals;
  e: {
    if (dn(e) !== e || e.tag !== 1) throw Error(N(170));
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
    throw Error(N(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Le(n)) return Qu(e, n, t);
  }
  return t;
}
function Yc(e, t, n, r, a, i, l, u, s) {
  return e = ml(n, r, !0, e, a, i, l, u, s), e.context = Qc(null), n = e.current, r = _e(), a = Vt(n), i = kt(r, a), i.callback = t ?? null, Bt(n, i, a), e.current.lanes = a, Mr(e, a, r), Re(e, r), e;
}
function Wa(e, t, n, r) {
  var a = t.current, i = _e(), l = Vt(a);
  return n = Qc(n), t.context === null ? t.context = n : t.pendingContext = n, t = kt(i, l), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Bt(a, t, l), e !== null && (Ze(e, a, l, i), ra(e, a, l)), l;
}
function Ra(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function zs(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function hl(e, t) {
  zs(e, t), (e = e.alternate) && zs(e, t);
}
function Bp() {
  return null;
}
var Kc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function vl(e) {
  this._internalRoot = e;
}
Qa.prototype.render = vl.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(N(409));
  Wa(e, t, null, null);
};
Qa.prototype.unmount = vl.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    un(function() {
      Wa(null, e, null, null);
    }), t[jt] = null;
  }
};
function Qa(e) {
  this._internalRoot = e;
}
Qa.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Eu();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Rt.length && t !== 0 && t < Rt[n].priority; n++) ;
    Rt.splice(n, 0, e), n === 0 && zu(e);
  }
};
function gl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Ya(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Ms() {
}
function Up(e, t, n, r, a) {
  if (a) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var f = Ra(l);
        i.call(f);
      };
    }
    var l = Yc(t, r, e, 0, null, !1, !1, "", Ms);
    return e._reactRootContainer = l, e[jt] = l.current, yr(e.nodeType === 8 ? e.parentNode : e), un(), l;
  }
  for (; a = e.lastChild; ) e.removeChild(a);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var f = Ra(s);
      u.call(f);
    };
  }
  var s = ml(e, 0, !1, null, null, !1, !1, "", Ms);
  return e._reactRootContainer = s, e[jt] = s.current, yr(e.nodeType === 8 ? e.parentNode : e), un(function() {
    Wa(t, s, n, r);
  }), s;
}
function Ka(e, t, n, r, a) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof a == "function") {
      var u = a;
      a = function() {
        var s = Ra(l);
        u.call(s);
      };
    }
    Wa(t, l, e, a);
  } else l = Up(n, t, e, a, r);
  return Ra(l);
}
_u = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Jn(t.pendingLanes);
        n !== 0 && (Ao(t, n | 1), Re(t, ae()), !(V & 6) && ($n = ae() + 500, Yt()));
      }
      break;
    case 13:
      un(function() {
        var r = Ct(e, 1);
        if (r !== null) {
          var a = _e();
          Ze(r, e, 1, a);
        }
      }), hl(e, 1);
  }
};
Oo = function(e) {
  if (e.tag === 13) {
    var t = Ct(e, 134217728);
    if (t !== null) {
      var n = _e();
      Ze(t, e, 134217728, n);
    }
    hl(e, 134217728);
  }
};
Nu = function(e) {
  if (e.tag === 13) {
    var t = Vt(e), n = Ct(e, t);
    if (n !== null) {
      var r = _e();
      Ze(n, e, t, r);
    }
    hl(e, t);
  }
};
Eu = function() {
  return G;
};
Pu = function(e, t) {
  var n = G;
  try {
    return G = e, t();
  } finally {
    G = n;
  }
};
bi = function(e, t, n) {
  switch (t) {
    case "input":
      if (Li(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var a = Fa(r);
            if (!a) throw Error(N(90));
            iu(r), Li(r, a);
          }
        }
      }
      break;
    case "textarea":
      lu(e, n);
      break;
    case "select":
      t = n.value, t != null && Nn(e, !!n.multiple, t, !1);
  }
};
mu = cl;
hu = un;
var Vp = { usingClientEntryPoint: !1, Events: [Lr, xn, Fa, fu, pu, cl] }, Yn = { findFiberByHostInstance: Zt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Hp = { bundleType: Yn.bundleType, version: Yn.version, rendererPackageName: Yn.rendererPackageName, rendererConfig: Yn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Nt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = yu(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Yn.findFiberByHostInstance || Bp, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Xr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Xr.isDisabled && Xr.supportsFiber) try {
    Aa = Xr.inject(Hp), ut = Xr;
  } catch {
  }
}
$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Vp;
$e.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!gl(t)) throw Error(N(200));
  return Fp(e, t, null, n);
};
$e.createRoot = function(e, t) {
  if (!gl(e)) throw Error(N(299));
  var n = !1, r = "", a = Kc;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (a = t.onRecoverableError)), t = ml(e, 1, !1, null, null, n, !1, r, a), e[jt] = t.current, yr(e.nodeType === 8 ? e.parentNode : e), new vl(t);
};
$e.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(N(188)) : (e = Object.keys(e).join(","), Error(N(268, e)));
  return e = yu(t), e = e === null ? null : e.stateNode, e;
};
$e.flushSync = function(e) {
  return un(e);
};
$e.hydrate = function(e, t, n) {
  if (!Ya(t)) throw Error(N(200));
  return Ka(null, e, t, !0, n);
};
$e.hydrateRoot = function(e, t, n) {
  if (!gl(e)) throw Error(N(405));
  var r = n != null && n.hydratedSources || null, a = !1, i = "", l = Kc;
  if (n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), t = Yc(t, null, e, 1, n ?? null, a, !1, i, l), e[jt] = t.current, yr(e), r) for (e = 0; e < r.length; e++) n = r[e], a = n._getVersion, a = a(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(
    n,
    a
  );
  return new Qa(t);
};
$e.render = function(e, t, n) {
  if (!Ya(t)) throw Error(N(200));
  return Ka(null, e, t, !1, n);
};
$e.unmountComponentAtNode = function(e) {
  if (!Ya(e)) throw Error(N(40));
  return e._reactRootContainer ? (un(function() {
    Ka(null, null, e, !1, function() {
      e._reactRootContainer = null, e[jt] = null;
    });
  }), !0) : !1;
};
$e.unstable_batchedUpdates = cl;
$e.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Ya(n)) throw Error(N(200));
  if (e == null || e._reactInternals === void 0) throw Error(N(38));
  return Ka(e, t, n, !1, r);
};
$e.version = "18.3.1-next-f1338f8080-20240426";
function Xc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Xc);
    } catch (e) {
      console.error(e);
    }
}
Xc(), Xs.exports = $e;
var Gp = Xs.exports, Jc, Ts = Gp;
Jc = Ts.createRoot, Ts.hydrateRoot;
const Ls = {
  maker3: "Cricut Maker 3",
  maker: "Cricut Maker",
  maker5: "Cricut Maker 5",
  estandar: "Explore / Joy Xtra / Venture (estándar)",
  joy: "Cricut Joy 2"
}, qp = {
  A4: [210, 297],
  A3: [297, 420],
  A5: [148, 210],
  Letter: [215.9, 279.4]
}, Wp = [
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
], Qp = [
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
function Er(e) {
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
function Yp(e) {
  const t = (Number.isFinite(e.scale_pct) ? e.scale_pct : 100) / 100, n = Number.isFinite(e.w_mm_base) ? e.w_mm_base : e.w_mm, r = Number.isFinite(e.h_mm_base) ? e.h_mm_base : e.h_mm, a = (Number.isFinite(n) ? n : 0) * t, i = (Number.isFinite(r) ? r : 0) * t;
  return { w: Number.isFinite(a) ? a : 0, h: Number.isFinite(i) ? i : 0 };
}
const Da = () => globalThis.__crycatBase || "";
async function U(e, t) {
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
const D = {
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
  blobs: (e) => U(`/api/assets/${e}/blobs`),
  limpiarContorno: (e, t) => U(`/api/assets/${e}/limpiar-contorno`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ quitar: t })
  }),
  previewUrl: (e) => `/api/assets/${e}/preview.png`,
  optimize: (e, t = !1) => U("/api/optimize", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ modo: e ?? null, force: t })
  }),
  job: (e) => U(`/api/job/${e}`),
  result: () => U("/api/result"),
  version: () => U("/api/version"),
  checkVersion: () => U("/api/version/check", { method: "POST" }),
  updateVersion: () => U(
    "/api/version/update",
    { method: "POST" }
  ),
  openReleases: () => U("/api/version/open", { method: "POST" }),
  estimate: () => U("/api/estimate"),
  pageUrl: (e, t, n = !1) => `${Da().replace(/\/$/, "")}/api/pages/${e}.png?v=${t}${n ? "&sim=1" : ""}`,
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
  iconUrl: () => `${Da()}/api/icon.png?v=${Date.now()}`,
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
  )
};
async function Kp(e) {
  const t = await e.text(), n = new Blob([t], { type: "image/svg+xml" }), r = URL.createObjectURL(n);
  try {
    const a = new Image();
    await new Promise((v, m) => {
      a.onload = () => v(), a.onerror = () => m(new Error("SVG no válido")), a.src = r;
    });
    const i = a.naturalWidth || a.width || 1024, l = a.naturalHeight || a.height || 1024, u = Math.min(4, Math.max(0.5, 300 / 96)), s = document.createElement("canvas");
    return s.width = Math.round(i * u), s.height = Math.round(l * u), s.getContext("2d").drawImage(a, 0, 0, s.width, s.height), await new Promise(
      (v) => s.toBlob((m) => v(m), "image/png")
    );
  } finally {
    URL.revokeObjectURL(r);
  }
}
async function Zc(e) {
  return e.name.toLowerCase().endsWith(".svg") ? { blob: await Kp(e), name: e.name.replace(/\.svg$/i, "") + ".png" } : { blob: e, name: e.name };
}
const xo = [
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
function wo(e) {
  return xo.find((t) => t.key === e) ?? xo[0];
}
function Rs(e) {
  const t = wo(e), n = document.documentElement;
  Object.entries(t.colors).forEach(([r, a]) => {
    n.style.setProperty(`--${r.replace(/[A-Z]/g, (i) => "-" + i.toLowerCase())}`, a);
  }), n.dataset.theme = t.key;
  try {
    localStorage.setItem("crycat-tema", t.key);
  } catch {
  }
}
function ed() {
  try {
    const e = localStorage.getItem("crycat-tema");
    if (e) return wo(e);
  } catch {
  }
  return wo("wiwi");
}
const td = {
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
}, nd = k.createContext("es");
function Xp({ idioma: e, children: t }) {
  return /* @__PURE__ */ o.jsx(nd.Provider, { value: e, children: t });
}
function yl() {
  return k.useContext(nd);
}
function dt() {
  const e = yl();
  return (t, n) => {
    let r = e === "en" ? td[t] ?? t : t;
    if (n)
      for (const [a, i] of Object.entries(n))
        r = r.split(`{${a}}`).join(String(i));
    return r;
  };
}
function Jp(e, t, n) {
  return e === "en" ? td[t] ?? t : t;
}
function X({ size: e = 18, children: t }) {
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
function Zp({ size: e }) {
  return /* @__PURE__ */ o.jsxs(X, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M4 9.5h3l4.5-3.5v12L7 14.5H4z" }),
    /* @__PURE__ */ o.jsx("path", { d: "M16 9a4 4 0 0 1 0 6" }),
    /* @__PURE__ */ o.jsx("path", { d: "M18.7 6.5a7.5 7.5 0 0 1 0 11" })
  ] });
}
function em({ size: e }) {
  return /* @__PURE__ */ o.jsxs(X, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M4 9.5h3l4.5-3.5v12L7 14.5H4z" }),
    /* @__PURE__ */ o.jsx("path", { d: "M16 9.5l5 5M21 9.5l-5 5" })
  ] });
}
function Pr({ size: e }) {
  return /* @__PURE__ */ o.jsx(X, { size: e, children: /* @__PURE__ */ o.jsx("path", { d: "M3 7.5a2 2 0 0 1 2-2h3.6l1.7 2H19a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }) });
}
function tm({ size: e }) {
  return /* @__PURE__ */ o.jsxs(X, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M20 12a8 8 0 1 1-2.3-5.6" }),
    /* @__PURE__ */ o.jsx("path", { d: "M20 4v4h-4" })
  ] });
}
function nm({ size: e }) {
  return /* @__PURE__ */ o.jsxs(X, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M4 7a3 3 0 0 1 3-3h5" }),
    /* @__PURE__ */ o.jsx("path", { d: "M20 17a3 3 0 0 1-3 3h-5" }),
    /* @__PURE__ */ o.jsx("path", { d: "M15 2l3 2-3 2M9 18l-3 2 3 2" })
  ] });
}
function rm({ size: e }) {
  return /* @__PURE__ */ o.jsxs(X, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M12 3l1.9 4.6L18 9l-4.1 1.4L12 15l-1.9-4.6L6 9l4.1-1.4z" }),
    /* @__PURE__ */ o.jsx("path", { d: "M18 15l.9 2.1L21 18l-2.1.9L18 21l-.9-2.1L15 18l2.1-.9z" })
  ] });
}
function am({ size: e }) {
  return /* @__PURE__ */ o.jsxs(X, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M4 4h16v16H4z" }),
    /* @__PURE__ */ o.jsx("path", { d: "M4 14l5-5 4 4 3-3 4 4" }),
    /* @__PURE__ */ o.jsx("circle", { cx: "9", cy: "8.5", r: "1.4" })
  ] });
}
function im({ size: e }) {
  return /* @__PURE__ */ o.jsxs(X, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M3 12a9 9 0 1 0 3-6.7" }),
    /* @__PURE__ */ o.jsx("path", { d: "M3 4v5h5" })
  ] });
}
function rd({ size: e }) {
  return /* @__PURE__ */ o.jsx(X, { size: e, children: /* @__PURE__ */ o.jsx("path", { d: "M6 6l12 12M18 6L6 18" }) });
}
function om({ size: e }) {
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
function ad({ size: e }) {
  return /* @__PURE__ */ o.jsx(X, { size: e, children: /* @__PURE__ */ o.jsx("path", { d: "M12 3l2.2 5.4L20 10.5l-5.8 2.1L12 18l-2.2-5.4L4 10.5l5.8-2.1z" }) });
}
function lm({ size: e }) {
  return /* @__PURE__ */ o.jsxs(X, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M9 7L4 12l5 5" }),
    /* @__PURE__ */ o.jsx("path", { d: "M4 12h9a5 5 0 0 1 5 5v1" })
  ] });
}
function sm({ size: e }) {
  return /* @__PURE__ */ o.jsxs(X, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M15 7l5 5-5 5" }),
    /* @__PURE__ */ o.jsx("path", { d: "M20 12h-9a5 5 0 0 0-5 5v1" })
  ] });
}
function um({ size: e }) {
  return /* @__PURE__ */ o.jsxs(X, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M4 4h16v16H4z" }),
    /* @__PURE__ */ o.jsx("path", { d: "M4 9h16M9 4v16", strokeDasharray: "2 2" })
  ] });
}
function cm({ size: e }) {
  return /* @__PURE__ */ o.jsxs(X, { size: e, children: [
    /* @__PURE__ */ o.jsx("circle", { cx: "11", cy: "11", r: "6.5" }),
    /* @__PURE__ */ o.jsx("path", { d: "M11 8.5v5M8.5 11h5M20 20l-4.4-4.4" })
  ] });
}
function dm({ size: e }) {
  return /* @__PURE__ */ o.jsxs(X, { size: e, children: [
    /* @__PURE__ */ o.jsx("circle", { cx: "11", cy: "11", r: "6.5" }),
    /* @__PURE__ */ o.jsx("path", { d: "M8.5 11h5M20 20l-4.4-4.4" })
  ] });
}
function fm({ size: e }) {
  return /* @__PURE__ */ o.jsx(X, { size: e, children: /* @__PURE__ */ o.jsx("path", { d: "M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4" }) });
}
function pm({ size: e }) {
  return /* @__PURE__ */ o.jsxs(X, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M5 3h11l3 3v15H5z" }),
    /* @__PURE__ */ o.jsx("path", { d: "M8 3v6h7V3M8 15h8v6H8z" })
  ] });
}
function mm({ size: e }) {
  return /* @__PURE__ */ o.jsxs(X, { size: e, children: [
    /* @__PURE__ */ o.jsx("circle", { cx: "12", cy: "12", r: "9" }),
    /* @__PURE__ */ o.jsx("path", { d: "M12 11v5M12 7.6v.1" })
  ] });
}
function hm({ size: e }) {
  return /* @__PURE__ */ o.jsxs(X, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M12 3l9 16H3z" }),
    /* @__PURE__ */ o.jsx("path", { d: "M12 9v5M12 17v.1" })
  ] });
}
function vm({ size: e }) {
  return /* @__PURE__ */ o.jsxs(X, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M12 4l9 15H3z" }),
    /* @__PURE__ */ o.jsx("path", { d: "M12 10v4.5M12 17.2v.1" })
  ] });
}
function gm({ size: e }) {
  return /* @__PURE__ */ o.jsxs(X, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M12 3v12" }),
    /* @__PURE__ */ o.jsx("path", { d: "M7 11l5 5 5-5" }),
    /* @__PURE__ */ o.jsx("path", { d: "M4 20h16" })
  ] });
}
function ym({ size: e }) {
  return /* @__PURE__ */ o.jsxs(X, { size: e, children: [
    /* @__PURE__ */ o.jsx("circle", { cx: "12", cy: "12", r: "8" }),
    /* @__PURE__ */ o.jsx("path", { d: "M12 8v4.5l3 2" })
  ] });
}
function xm({ size: e }) {
  return /* @__PURE__ */ o.jsxs(X, { size: e, children: [
    /* @__PURE__ */ o.jsx("path", { d: "M12 6.5C10.5 5 8.3 4.5 4 4.5v13c4.3 0 6.5.5 8 2 1.5-1.5 3.7-2 8-2v-13c-4.3 0-6.5.5-8 2z" }),
    /* @__PURE__ */ o.jsx("path", { d: "M12 6.5v13" })
  ] });
}
function wm({ size: e }) {
  return /* @__PURE__ */ o.jsx(X, { size: e, children: /* @__PURE__ */ o.jsx("path", { d: "M12 20s-7.5-4.6-7.5-9.4A4.1 4.1 0 0 1 12 8a4.1 4.1 0 0 1 7.5 2.6C19.5 15.4 12 20 12 20z" }) });
}
function km({ open: e, assets: t, onClose: n, onDone: r }) {
  const a = dt(), i = k.useMemo(() => t.map((g) => g.id), [t]), [l, u] = k.useState(/* @__PURE__ */ new Set()), [s, f] = k.useState(100), [v, m] = k.useState(50), [h, x] = k.useState("mayor"), [C, y] = k.useState("");
  k.useEffect(() => {
    e && (u(/* @__PURE__ */ new Set()), y(""));
  }, [e, i.join(",")]);
  const R = (g) => !l.has(g), d = (g) => u((j) => {
    const _ = new Set(j);
    return _.has(g) ? _.delete(g) : _.add(g), _;
  }), c = (g) => {
    const j = g.w_mm_base || 0, _ = g.h_mm_base || 0;
    return h === "mayor" ? Math.max(j, _) : h === "menor" ? Math.min(j, _) : 2 * Math.sqrt(Math.max(0, j * _) / Math.PI);
  }, p = (g) => {
    if (v > 0) {
      const j = c(g);
      if (j > 0) return Math.min(10, Math.max(0.05, v / j));
    }
    return Math.min(10, Math.max(0.05, s / 100));
  }, w = (g) => {
    const j = p(g);
    return { w: (g.w_mm_base || 0) * j, h: (g.h_mm_base || 0) * j };
  }, S = async () => {
    let g = 0;
    for (const j of t) {
      if (!R(j.id)) continue;
      const _ = p(j) * 100;
      await D.patchAsset(j.id, {
        scale_pct: Math.min(1e3, Math.max(5, Math.round(_ * 10) / 10))
      }), g += 1;
    }
    await r(), y(a("{n} elementos ajustados ", { n: g }));
  };
  return !e || !t.length ? null : /* @__PURE__ */ o.jsx("div", { className: "modal-back", "data-testid": "import-dialog", children: /* @__PURE__ */ o.jsxs("div", { className: "modal import-modal", children: [
    /* @__PURE__ */ o.jsx("h3", { children: a("Adaptar los tamaños importados") }),
    /* @__PURE__ */ o.jsxs("div", { className: "import-grid", children: [
      /* @__PURE__ */ o.jsxs("div", { children: [
        /* @__PURE__ */ o.jsx("div", { className: "hint", children: a("Cómo quedan sobre un A4") }),
        /* @__PURE__ */ o.jsx("div", { className: "a4-preview", "data-testid": "import-preview", children: t.map((g) => {
          const j = w(g), _ = Math.min(98, j.w / 210 * 100);
          return /* @__PURE__ */ o.jsx(
            "div",
            {
              className: "a4-item",
              "data-testid": `import-preview-${g.id}`,
              style: {
                width: `${_}%`,
                maxWidth: `${_}%`,
                aspectRatio: `${j.w || 1} / ${j.h || 1}`,
                opacity: R(g.id) ? 1 : 0.3
              },
              title: `${g.name} · ${j.w.toFixed(1)}×${j.h.toFixed(1)} mm`,
              children: /* @__PURE__ */ o.jsx("img", { src: D.previewUrl(g.id), alt: "" })
            },
            g.id
          );
        }) })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { children: [
        /* @__PURE__ */ o.jsxs("div", { className: "hint", children: [
          a("Selecciona los que quieras (todos por defecto)"),
          " —",
          " ",
          i.length - l.size,
          "/",
          i.length
        ] }),
        /* @__PURE__ */ o.jsx("div", { className: "import-lista", "data-testid": "import-lista", children: t.map((g) => /* @__PURE__ */ o.jsxs(
          "button",
          {
            type: "button",
            "data-testid": `import-item-${g.id}`,
            className: R(g.id) ? "sel" : "",
            onClick: () => d(g.id),
            title: g.name,
            children: [
              /* @__PURE__ */ o.jsx("img", { src: D.previewUrl(g.id), alt: g.name }),
              /* @__PURE__ */ o.jsx("span", { children: g.name })
            ]
          },
          g.id
        )) })
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: "import-ajustes", children: [
        /* @__PURE__ */ o.jsxs("label", { children: [
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
                value: String(s),
                onChange: (g) => f(Number(g.target.value))
              }
            ),
            /* @__PURE__ */ o.jsx("span", { children: "%" })
          ] })
        ] }),
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
                value: String(v),
                onChange: (g) => m(Number(g.target.value))
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
              onChange: (g) => x(g.target.value),
              children: [
                /* @__PURE__ */ o.jsx("option", { value: "mayor", children: a("Lado mayor") }),
                /* @__PURE__ */ o.jsx("option", { value: "menor", children: a("Lado menor") }),
                /* @__PURE__ */ o.jsx("option", { value: "circulo", children: a("Círculo equivalente (aprox.)") })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ o.jsx("div", { className: "hint", children: a("Los cambios se previsualizan en el A4 y se aplican al conservarlos.") }),
        C && /* @__PURE__ */ o.jsx("div", { className: "hint", "data-testid": "import-aviso", children: C })
      ] })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "modal-botones", children: [
      /* @__PURE__ */ o.jsx("button", { "data-testid": "import-original", onClick: () => {
        (async () => {
          for (const g of t)
            await D.patchAsset(g.id, { scale_pct: 100 });
          await r(), n();
        })();
      }, children: a("Importar con tamaño original") }),
      /* @__PURE__ */ o.jsx("button", { "data-testid": "import-conservar", onClick: S, children: a("Conservar cambios") })
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
function Sm({ saveSettings: e }) {
  const t = dt(), [n, r] = k.useState(
    {}
  ), [a, i] = k.useState([]), [l, u] = k.useState(!1), [s, f] = k.useState(!1), [v, m] = k.useState(""), [h, x] = k.useState(""), C = () => D.presets().then((c) => i(Array.isArray(c.names) ? c.names : [])).catch(() => {
  });
  k.useEffect(() => {
    D.factoryPresets().then((c) => r(c.presets ?? {})).catch(() => {
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
          const p = c.slice(9), w = await D.loadPreset(p);
          await e(w.settings), x(t("Perfil «{n}» cargado", { n: p }));
        }
      } catch {
        x(t("No se pudo aplicar el perfil"));
      }
  }, R = async () => {
    const c = v.trim();
    if (c)
      try {
        const p = await D.savePreset(c);
        i(Array.isArray(p.names) ? p.names : []), m(""), u(!1), x(t("Perfil «{n}» guardado", { n: c }));
      } catch {
        x(t("No se pudo guardar el perfil"));
      }
  }, d = async (c) => {
    try {
      i((await D.deletePreset(c)).names ?? []), x(t("Perfil «{n}» borrado", { n: c }));
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
            /* @__PURE__ */ o.jsx(pm, { size: 15 }),
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
          children: /* @__PURE__ */ o.jsx(fm, { size: 15 })
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
          value: v,
          onChange: (c) => m(c.target.value),
          onKeyDown: (c) => {
            c.key === "Enter" && R(), c.key === "Escape" && u(!1);
          }
        }
      ),
      /* @__PURE__ */ o.jsx("button", { "data-testid": "perfil-guardar-ok", onClick: R, children: t("Guardar") }),
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
          children: /* @__PURE__ */ o.jsx(rd, { size: 15 })
        }
      )
    ] }, c)) }),
    h && /* @__PURE__ */ o.jsx("div", { className: "hint", children: h })
  ] });
}
function jm({
  a: e,
  result: t,
  onChange: n,
  onEditarContorno: r,
  onAntesDeCambiar: a
}) {
  const i = dt(), [l, u] = k.useState(() => Er(e));
  k.useEffect(() => u(Er(e)), [e]);
  const s = k.useRef(null), f = Yp(l), [v, m] = k.useState(""), h = k.useRef(!1), [x, C] = k.useState(""), y = k.useRef(!1), [R, d] = k.useState({ tamano: !1, borde: !1, mini: !1 });
  k.useEffect(() => {
    h.current || m(f.w > 0 ? f.w.toFixed(1) : ""), y.current || C(f.h > 0 ? f.h.toFixed(1) : "");
  }, [f.w, f.h]);
  const c = Number.isFinite(l.w_mm_base) ? l.w_mm_base : 0, p = Number.isFinite(l.h_mm_base) ? l.h_mm_base : 0, w = (E) => {
    m(E);
    const L = Number(E.replace(",", "."));
    !Number.isFinite(L) || L <= 0 || c <= 0 || _({ scale_pct: L / c * 100 });
  }, S = (E) => {
    C(E);
    const L = Number(E.replace(",", "."));
    !Number.isFinite(L) || L <= 0 || p <= 0 || _({ scale_pct: L / p * 100 });
  }, g = (t == null ? void 0 : t.placements.filter((E) => E.asset_id === e.id && E.mini).length) ?? 0, j = (t == null ? void 0 : t.placements.filter((E) => E.asset_id === e.id && !E.mini).length) ?? 0, _ = async (E) => {
    a == null || a(), "copies" in E && (E.copies = Math.max(0, E.copies ?? 0)), u((L) => ({ ...L, ...E }));
    try {
      await D.patchAsset(e.id, E);
    } finally {
      await n();
    }
  };
  return /* @__PURE__ */ o.jsxs("div", { className: "asset-card", "data-testid": "asset-card", children: [
    /* @__PURE__ */ o.jsx("div", { className: "preview", children: /* @__PURE__ */ o.jsx("img", { src: D.previewUrl(e.id), alt: e.name, loading: "lazy" }) }),
    /* @__PURE__ */ o.jsxs("div", { className: "info", children: [
      /* @__PURE__ */ o.jsxs("div", { className: "name-row", children: [
        /* @__PURE__ */ o.jsx("span", { className: "name", title: e.name, children: e.name }),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            className: "icon-btn",
            "data-testid": `abrir-carpeta-${e.id}`,
            title: i("Abrir en el explorador la carpeta de las imágenes de la sesión"),
            onClick: () => D.assetsFolder().then((E) => D.abrirCarpeta(E.path)).catch(() => D.abrirCarpeta().catch(() => {
            })),
            children: /* @__PURE__ */ o.jsx(Pr, { size: 16 })
          }
        ),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            className: "icon-btn",
            "data-testid": `reemplazar-${e.id}`,
            title: i("Reemplazar por otro archivo de la carpeta"),
            onClick: () => {
              var E;
              return (E = s.current) == null ? void 0 : E.click();
            },
            children: /* @__PURE__ */ o.jsx(nm, { size: 16 })
          }
        ),
        /* @__PURE__ */ o.jsx(
          "input",
          {
            ref: s,
            type: "file",
            hidden: !0,
            accept: "image/*,.psd,.ai,.svg",
            onChange: async (E) => {
              var q;
              const L = (q = E.target.files) == null ? void 0 : q[0];
              if (E.target.value = "", !!L)
                try {
                  const { blob: se, name: ve } = await Zc(L);
                  await D.reemplazar(e.id, se, ve), await n();
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
            children: /* @__PURE__ */ o.jsx(rm, { size: 16 })
          }
        ),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            className: "icon-btn",
            title: l.bg_removed ? i("Restaurar fondo original") : i("Quitar fondo (inteligente)"),
            onClick: () => (l.bg_removed ? D.restoreBackground(e.id) : D.removeBackground(e.id)).then(n),
            children: l.bg_removed ? /* @__PURE__ */ o.jsx(im, { size: 16 }) : /* @__PURE__ */ o.jsx(am, { size: 16 })
          }
        ),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            className: "icon-btn danger",
            title: i("Eliminar imagen"),
            onClick: () => D.deleteAsset(e.id).then(n),
            children: /* @__PURE__ */ o.jsx(rd, { size: 16 })
          }
        )
      ] }),
      /* @__PURE__ */ o.jsxs("div", { className: "card-actions", children: [
        /* @__PURE__ */ o.jsxs("div", { className: "copies-row", title: i("Copias"), children: [
          /* @__PURE__ */ o.jsx("button", { "data-testid": `resta-${e.id}`, onClick: () => _({ copies: l.copies - 1 }), children: "−" }),
          /* @__PURE__ */ o.jsx("span", { className: "n", "data-testid": `copias-${e.id}`, children: l.copies }),
          /* @__PURE__ */ o.jsx("button", { "data-testid": `suma-${e.id}`, onClick: () => _({ copies: l.copies + 1 }), children: "+" })
        ] }),
        /* @__PURE__ */ o.jsxs(
          "button",
          {
            className: `mini-toggle ${l.mini_enabled ? "on" : ""}`,
            "data-testid": `mini-${e.id}`,
            title: i("Incluir como mini (rellena huecos)"),
            onClick: () => _({ mini_enabled: !l.mini_enabled }),
            children: [
              /* @__PURE__ */ o.jsx(ad, { size: 15 }),
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
            onClick: () => d((E) => ({ ...E, tamano: !E.tamano })),
            children: [
              /* @__PURE__ */ o.jsx("span", { className: `chev ${R.tamano ? "open" : ""}`, children: "›" }),
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
        R.tamano && /* @__PURE__ */ o.jsxs("div", { className: "fold-body", children: [
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
                onChange: (E) => _({ scale_pct: Number(E.target.value) })
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
                value: v,
                "data-testid": `ancho-mm-${e.id}`,
                onFocus: () => {
                  h.current = !0, y.current = !1;
                },
                onBlur: () => {
                  h.current = !1, m(f.w > 0 ? f.w.toFixed(1) : "");
                },
                onChange: (E) => w(E.target.value)
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
                  y.current = !0, h.current = !1;
                },
                onBlur: () => {
                  y.current = !1, C(f.h > 0 ? f.h.toFixed(1) : "");
                },
                onChange: (E) => S(E.target.value)
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
            onClick: () => d((E) => ({ ...E, borde: !E.borde })),
            children: [
              /* @__PURE__ */ o.jsx("span", { className: `chev ${R.borde ? "open" : ""}`, children: "›" }),
              i("Borde"),
              /* @__PURE__ */ o.jsxs("span", { className: "fold-val", "data-testid": `offset-${e.id}`, children: [
                l.offset_mm.toFixed(1),
                " mm",
                l.offset_mm <= 0 ? ` · ${i("global")}` : ""
              ] })
            ]
          }
        ),
        R.borde && /* @__PURE__ */ o.jsxs("div", { className: "fold-body", children: [
          /* @__PURE__ */ o.jsxs("div", { className: "seg-row", children: [
            /* @__PURE__ */ o.jsx(
              "button",
              {
                className: "quota-btn",
                "data-testid": `offset-menos-${e.id}`,
                onClick: () => _({ offset_mm: Math.max(
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
                onChange: (E) => _({ offset_mm: Number(E.target.value) })
              }
            ),
            /* @__PURE__ */ o.jsx(
              "button",
              {
                className: "quota-btn",
                "data-testid": `offset-mas-${e.id}`,
                onClick: () => _({ offset_mm: Math.min(
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
              ["color", i("Color")]
            ].map(([E, L]) => /* @__PURE__ */ o.jsx(
              "button",
              {
                className: `seg ${(l.offset_modo || "") === E ? "on" : ""}`,
                "data-testid": `offset-modo-${E}-${e.id}`,
                onClick: () => _({ offset_modo: E }),
                children: L
              },
              E
            )),
            /* @__PURE__ */ o.jsx(
              "input",
              {
                type: "color",
                className: "color-pick",
                "data-testid": `offset-color-${e.id}`,
                value: l.offset_color || "#ffffff",
                title: i("Color del borde"),
                onChange: (E) => _({
                  offset_color: E.target.value,
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
            onClick: () => d((E) => ({ ...E, mini: !E.mini })),
            children: [
              /* @__PURE__ */ o.jsx("span", { className: `chev ${R.mini ? "open" : ""}`, children: "›" }),
              i("Opciones de mini"),
              /* @__PURE__ */ o.jsxs("span", { className: "fold-val", "data-testid": `minis-${e.id}`, children: [
                "×",
                l.mini_quota,
                " · ",
                g
              ] })
            ]
          }
        ),
        R.mini && /* @__PURE__ */ o.jsx("div", { className: "fold-body", children: /* @__PURE__ */ o.jsxs("div", { className: "seg-row", children: [
          /* @__PURE__ */ o.jsx("span", { title: i("Cuántos minis quieres de este elemento respecto a los demás (1 = reparto equitativo; 3 = el triple)"), children: i("Cuota") }),
          /* @__PURE__ */ o.jsx(
            "button",
            {
              className: "quota-btn",
              "data-testid": `cuota-menos-${e.id}`,
              onClick: () => _({ mini_quota: Math.max(
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
              onClick: () => _({ mini_quota: Math.min(
                100,
                Math.round((l.mini_quota + 0.5) * 2) / 2
              ) }),
              children: "+"
            }
          ),
          /* @__PURE__ */ o.jsx("span", { className: "mini-count", children: i(" {n} minis", { n: g }) })
        ] }) })
      ] }),
      j > 0 && /* @__PURE__ */ o.jsx("div", { className: "size-mm", children: i("Colocadas: {n}", { n: j }) }),
      l.warnings.length > 0 && /* @__PURE__ */ o.jsxs("div", { className: "warn", children: [
        /* @__PURE__ */ o.jsx(vm, { size: 14 }),
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
function Cm({
  assets: e,
  result: t,
  settings: n,
  onChange: r,
  saveSettings: a,
  onEditarContorno: i,
  onAntesDeCambiar: l
}) {
  const u = dt(), s = k.useRef(null), [f, v] = k.useState(!1), [m, h] = k.useState(null), x = async (c) => {
    const p = [];
    for (const w of Array.from(c))
      try {
        const { blob: S, name: g } = await Zc(w);
        p.push(Er(await D.upload(S, g)));
      } catch (S) {
        console.error(S);
      }
    await r(), p.length > 1 && h(p);
  }, C = n.usar_minis, y = {
    90: "libre",
    libre: "no",
    no: "90"
  }, R = {
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
            /* @__PURE__ */ o.jsx(ad, { size: 15 }),
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
            /* @__PURE__ */ o.jsx(tm, { size: 15 }),
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
            /* @__PURE__ */ o.jsx(om, { size: 15 }),
            " ",
            R[n.rotacion] ?? "90°"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ o.jsx(Sm, { saveSettings: a }),
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
          c.preventDefault(), v(!0);
        },
        onDragLeave: () => v(!1),
        onDrop: (c) => {
          c.preventDefault(), v(!1), c.dataTransfer.files.length && x(c.dataTransfer.files);
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
      jm,
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
        onClick: () => D.clearAssets().then(r),
        children: u("Descartar imágenes")
      }
    ),
    /* @__PURE__ */ o.jsx(
      km,
      {
        open: !!m,
        assets: m ?? [],
        onClose: () => h(null),
        onDone: async () => {
          await r();
        }
      }
    )
  ] });
}
function id({ open: e, onClose: t, onPick: n, initial: r }) {
  const a = dt(), [i, l] = k.useState(null), [u, s] = k.useState("");
  k.useEffect(() => {
    e && f(r || "");
  }, [e]);
  const f = async (v = "") => {
    s("");
    try {
      l(await D.fsList(v));
    } catch (m) {
      s(m.message);
    }
  };
  return e ? /* @__PURE__ */ o.jsx("div", { className: "modal-back", onClick: t, children: /* @__PURE__ */ o.jsxs("div", { className: "modal", onClick: (v) => v.stopPropagation(), "data-testid": "folder-picker", children: [
    /* @__PURE__ */ o.jsx("strong", { children: a("Elegir carpeta de guardado") }),
    /* @__PURE__ */ o.jsx("div", { className: "hint", children: (i == null ? void 0 : i.path) ?? "…" }),
    u && /* @__PURE__ */ o.jsxs("div", { className: "warn", children: [
      " ",
      u
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "dir-list", children: [
      i && i.parent !== i.path && /* @__PURE__ */ o.jsx("button", { onClick: () => f(i.parent), children: ".." }),
      i == null ? void 0 : i.dirs.map((v) => /* @__PURE__ */ o.jsx(
        "button",
        {
          onClick: () => f(`${i.path}/${v}`.replace("//", "/")),
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
function _m({
  open: e,
  files: t,
  folder: n,
  error: r,
  onOpenFolder: a,
  onClose: i
}) {
  const l = dt(), [u, s] = k.useState("resumen");
  if (!e) return null;
  const f = t.length > 0 && t.every((m) => m.startsWith("data:")), v = [
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
      /* @__PURE__ */ o.jsx("ul", { className: "lista-archivos", children: t.map((m) => /* @__PURE__ */ o.jsx("li", { title: m, children: m.split(/[\\/]/).pop() }, m)) }),
      !f && /* @__PURE__ */ o.jsxs("p", { className: "hint", children: [
        l("Carpeta"),
        ": ",
        /* @__PURE__ */ o.jsx("code", { children: n })
      ] }),
      f && /* @__PURE__ */ o.jsx("p", { className: "hint", children: l("Descarga el resultado y ábrelo en Cricut Design Space.") })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "modal-botones", children: [
      f ? t.map((m, h) => /* @__PURE__ */ o.jsxs(
        "a",
        {
          "data-testid": `btn-descargar-${h}`,
          href: m,
          download: `crycat_pagina-${String(h + 1).padStart(2, "0")}.png`,
          className: "btn-descarga",
          children: [
            /* @__PURE__ */ o.jsx(Pr, { size: 15 }),
            " ",
            l("Descargar página {n}", { n: h + 1 })
          ]
        },
        h
      )) : /* @__PURE__ */ o.jsxs(
        "button",
        {
          "data-testid": "btn-abrir-carpeta",
          onClick: () => a == null ? void 0 : a(n),
          children: [
            /* @__PURE__ */ o.jsx(Pr, { size: 15 }),
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
    /* @__PURE__ */ o.jsx("ol", { className: "lista-pasos", "data-testid": "pasos-cricut", children: v.map((m, h) => /* @__PURE__ */ o.jsx("li", { children: m }, h)) }),
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
function Nm({ assets: e, result: t, settings: n, ui: r, setUi: a, saveSettings: i, onRefresh: l, onJob: u, onRecalc: s, editando: f, onFinEdicion: v, onDeshacer: m, onRehacer: h, puedeDeshacer: x, puedeRehacer: C }) {
  const y = dt(), R = yl(), [d, c] = k.useState(1), [p, w] = k.useState({ x: 0, y: 0 }), [S, g] = k.useState(null), [j, _] = k.useState(() => Date.now()), [E, L] = k.useState(null), [q, se] = k.useState(null), [ve, Se] = k.useState(!1), [Fe, je] = k.useState([]), [tt, M] = k.useState(""), [$, b] = k.useState(/* @__PURE__ */ new Set()), H = k.useRef(null), z = k.useRef(null), J = R === "en" ? Qp : Wp, Pe = k.useMemo(
    () => J[Math.floor(Math.random() * J.length)],
    [J]
  ), nt = r.saveName.trim() || Pe;
  k.useEffect(() => {
    _(Date.now());
  }, [t, n.dpi_salida, n.lienzo, n.color_formato]);
  const de = (t == null ? void 0 : t.pages) ?? 0, rt = !!t && t.efficiency < 0.8;
  k.useEffect(() => {
    const P = H.current;
    if (!P) return;
    const I = (A) => {
      A.preventDefault(), A.stopPropagation();
      const fe = P.getBoundingClientRect(), Be = A.clientX - fe.left, mt = A.clientY - fe.top;
      c((it) => {
        const ge = A.deltaY < 0 ? 1.05 : 0.9523809523809523, ne = Math.min(12, Math.max(0.05, it * ge)), Pt = ne / it;
        return w((zt) => ({ x: Be - (Be - zt.x) * Pt, y: mt - (mt - zt.y) * Pt })), ne;
      });
    };
    return P.addEventListener("wheel", I, { passive: !1 }), () => P.removeEventListener("wheel", I);
  }, []);
  const O = (P) => {
    if (P.target.closest(".item-box")) return;
    z.current = { x: P.clientX - p.x, y: P.clientY - p.y };
    const I = (fe) => {
      z.current && w({ x: fe.clientX - z.current.x, y: fe.clientY - z.current.y });
    }, A = () => {
      z.current = null, window.removeEventListener("mousemove", I), window.removeEventListener("mouseup", A);
    };
    window.addEventListener("mousemove", I), window.addEventListener("mouseup", A);
  };
  k.useEffect(() => {
    const P = (I) => {
      I.target.tagName !== "INPUT" && (I.key === "+" || I.key === "=" ? c((A) => Math.min(12, A * 1.08)) : I.key === "-" || I.key === "_" ? c((A) => Math.max(0.05, A / 1.08)) : I.key === "0" ? (c(1), w({ x: 0, y: 0 })) : I.key === "Escape" ? g(null) : I.key === "g" ? a((A) => ({ ...A, guidesVisible: !A.guidesVisible })) : I.key === "t" && a((A) => A.eyeFosforito ? { ...A, eyeFosforito: !1, eyeTransparent: !1 } : A.eyeTransparent ? { ...A, eyeTransparent: !1, eyeFosforito: !0 } : { ...A, eyeTransparent: !0, eyeFosforito: !1 }));
    };
    return window.addEventListener("keydown", P), () => window.removeEventListener("keydown", P);
  }, [a]);
  const F = k.useRef(null), ft = k.useRef(null), pt = (P, I) => {
    P.preventDefault(), P.stopPropagation();
    const A = P.currentTarget.closest(".page-box");
    if (!A || !t) return;
    const fe = t.page_mm[0] / A.clientWidth, Be = {
      uid: I.uid,
      startX: P.clientX,
      startY: P.clientY,
      origX: I.x,
      origY: I.y,
      mmPerPx: fe
    };
    F.current = Be, ft.current = { x: I.x, y: I.y }, L(Be), se({ uid: I.uid, x: I.x, y: I.y });
    const mt = (ge) => {
      const ne = F.current;
      if (!ne) return;
      const Pt = (ge.clientX - ne.startX) * ne.mmPerPx / d, zt = (ge.clientY - ne.startY) * ne.mmPerPx / d;
      ft.current = { x: ne.origX + Pt, y: ne.origY + zt }, se({ uid: ne.uid, x: ne.origX + Pt, y: ne.origY + zt });
    }, it = (ge) => {
      window.removeEventListener("mousemove", mt), window.removeEventListener("mouseup", it);
      const ne = F.current;
      if (F.current = null, !ne) return;
      const Pt = (ge.clientX - ne.startX) * ne.mmPerPx / d, zt = (ge.clientY - ne.startY) * ne.mmPerPx / d;
      L(null), se(null), !(Math.abs(Pt) < 0.5 && Math.abs(zt) < 0.5) && Dr(ne.uid, ne.origX + Pt, ne.origY + zt);
    };
    window.addEventListener("mousemove", mt), window.addEventListener("mouseup", it);
  }, Dr = async (P, I, A) => {
    try {
      const fe = await D.move(P, I, A);
      fe.job ? u(fe.job) : await l();
    } catch {
      await l();
    } finally {
      _(Date.now());
    }
  }, Et = async (P) => {
    const I = await D.unpin(P);
    u(I);
  };
  k.useEffect(() => {
    if (!f) {
      je([]), M(""), b(/* @__PURE__ */ new Set());
      return;
    }
    D.blobs(f.id).then((P) => {
      je(P.blobs), M(P.preview_png), b(new Set(P.blobs.filter((I) => !I.principal).map((I) => I.id)));
    }).catch(() => {
      je([]), M("");
    });
  }, [f]);
  const ld = async () => {
    if (f)
      try {
        await D.limpiarContorno(f.id, Array.from($));
      } finally {
        await (v == null ? void 0 : v());
      }
  }, sd = (P) => {
    b((I) => {
      const A = new Set(I);
      return A.has(P) ? A.delete(P) : A.add(P), A;
    });
  }, [at, Kt] = k.useState(null), ud = async () => {
    try {
      const I = await D.export(
        r.saveName || "crycat",
        n.carpeta_export || void 0
      );
      Kt({ files: I.files, folder: I.folder });
    } catch (I) {
      Kt({ files: [], folder: "", error: I.message });
      return;
    }
    const P = document.createElement("iframe");
    P.setAttribute("aria-hidden", "true"), P.style.cssText = "position:fixed;right:0;bottom:0;width:0;height:0;border:0", P.src = "/api/print.pdf", P.onload = () => {
      var I, A;
      try {
        (I = P.contentWindow) == null || I.focus(), (A = P.contentWindow) == null || A.print();
      } finally {
        window.setTimeout(() => P.remove(), 6e4);
      }
    }, document.body.appendChild(P);
  }, cd = async () => {
    try {
      const P = await D.export(nt);
      Kt({ files: P.files, folder: P.folder });
    } catch (P) {
      Kt({ files: [], folder: "", error: P.message });
    }
  }, dd = () => {
    Se(!0);
  }, fd = async (P) => {
    try {
      const I = await D.export(nt, P);
      Kt({ files: I.files, folder: I.folder });
    } catch (I) {
      Kt({ files: [], folder: "", error: I.message });
    }
  }, xl = (t == null ? void 0 : t.poly_mm) ?? [], [pd, md] = (t == null ? void 0 : t.bbox_offset_mm) ?? [0, 0], [hd, vd] = (t == null ? void 0 : t.bbox_mm) ?? [0, 0], fn = n.lienzo === "pagina" ? (t == null ? void 0 : t.page_mm[0]) ?? 0 : hd, Xa = n.lienzo === "pagina" ? (t == null ? void 0 : t.page_mm[1]) ?? 0 : vd, wl = n.lienzo === "pagina" ? 0 : pd, kl = n.lienzo === "pagina" ? 0 : md, Sl = xl.length ? "M" + xl.map(([P, I]) => `${P - wl},${I - kl}`).join(" L") + " Z" : "", gd = (P) => {
    const I = (t == null ? void 0 : t.placements.filter((A) => A.page === P)) ?? [];
    return /* @__PURE__ */ o.jsxs(
      "div",
      {
        className: `page-box ${r.eyeFosforito ? "fondo-fosforito" : r.eyeTransparent ? "alpha-bg" : "white-bg"}`,
        style: { width: "100%" },
        onClick: (A) => {
          de > 1 && S === null && !A.target.closest(".item-box") && g(P);
        },
        "data-testid": `page-${P}`,
        children: [
          /* @__PURE__ */ o.jsx("img", { className: "sheet", src: D.pageUrl(P, j, n.simular_impresion === !0), alt: y("Página {i}", { i: P + 1 }), draggable: !1 }),
          r.guidesVisible && Sl && /* @__PURE__ */ o.jsx("svg", { className: "overlay-svg", viewBox: `0 0 ${fn} ${Xa}`, preserveAspectRatio: "none", children: /* @__PURE__ */ o.jsx(
            "path",
            {
              d: Sl,
              fill: "none",
              stroke: "var(--guide)",
              strokeWidth: Math.max(0.6, fn / 250),
              strokeDasharray: `${fn / 55} ${fn / 85}`,
              opacity: 0.85
            }
          ) }),
          I.map((A) => {
            const fe = e.find((ge) => ge.id === A.asset_id), Be = (q == null ? void 0 : q.uid) === A.uid ? q : null, mt = ((Be ? Be.x : A.x) - wl) / (fn || 1) * 100, it = ((Be ? Be.y : A.y) - kl) / (Xa || 1) * 100;
            return /* @__PURE__ */ o.jsx(
              "div",
              {
                className: `item-box ${A.pinned ? "pinned" : ""} ${(E == null ? void 0 : E.uid) === A.uid ? "dragging" : ""}`,
                style: {
                  left: `${mt}%`,
                  top: `${it}%`,
                  width: `${A.w / (fn || 1) * 100}%`,
                  height: `${A.h / (Xa || 1) * 100}%`
                },
                title: (fe == null ? void 0 : fe.name) ?? "",
                onMouseDown: (ge) => pt(ge, A),
                onContextMenu: (ge) => {
                  ge.preventDefault(), Et(A.uid);
                },
                "data-testid": `item-${A.uid}`,
                children: A.pinned && /* @__PURE__ */ o.jsx("span", { className: "pin" })
              },
              A.uid
            );
          })
        ]
      },
      P
    );
  }, yd = S !== null ? [S] : Array.from({ length: de }, (P, I) => I);
  return /* @__PURE__ */ o.jsxs("div", { className: "viewer", "data-testid": "viewer", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "viewer-top", children: [
      /* @__PURE__ */ o.jsxs("div", { className: "group hist", children: [
        /* @__PURE__ */ o.jsxs(
          "button",
          {
            "data-testid": "btn-deshacer",
            title: y("Deshacer (Ctrl+Z)"),
            onClick: () => m(),
            disabled: !x,
            children: [
              /* @__PURE__ */ o.jsx(lm, { size: 15 }),
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
            onClick: () => h(),
            disabled: !C,
            children: [
              /* @__PURE__ */ o.jsx(sm, { size: 15 }),
              " ",
              y("Rehacer")
            ]
          }
        )
      ] }),
      /* @__PURE__ */ o.jsx("div", { className: "group", children: /* @__PURE__ */ o.jsxs(
        "button",
        {
          "data-testid": "btn-guias",
          title: y("Mostrar/ocultar guías de límites Cricut (tecla G) — solo en la vista previa, nunca en el archivo final"),
          onClick: () => a((P) => ({ ...P, guidesVisible: !P.guidesVisible })),
          children: [
            /* @__PURE__ */ o.jsx(um, { size: 15 }),
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
          onClick: () => s(rt ? "rapido" : "optimo"),
          children: y(rt ? " Recalcular rápido" : " Recalcular óptimo")
        }
      ),
      /* @__PURE__ */ o.jsxs("div", { className: "group", children: [
        de > 1 && S === null && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
          /* @__PURE__ */ o.jsx("button", { "data-testid": "view-1", className: r.viewMode === 1 ? "primary" : "", onClick: () => a((P) => ({ ...P, viewMode: 1 })), children: "1" }),
          /* @__PURE__ */ o.jsx("button", { "data-testid": "view-2", className: r.viewMode === 2 ? "primary" : "", onClick: () => a((P) => ({ ...P, viewMode: 2 })), children: "2" }),
          /* @__PURE__ */ o.jsx("button", { "data-testid": "view-4", className: r.viewMode === 4 ? "primary" : "", onClick: () => a((P) => ({ ...P, viewMode: 4 })), children: "4" })
        ] }),
        S !== null && /* @__PURE__ */ o.jsx("button", { onClick: () => g(null), title: y("Volver a la cuadrícula (Esc)"), children: y(" Ver todo") }),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            "data-testid": "btn-ojo",
            title: y("Fondo: blanco  transparente  verde fosforito (tecla T)"),
            onClick: () => a((P) => P.eyeFosforito ? { ...P, eyeFosforito: !1, eyeTransparent: !1 } : P.eyeTransparent ? { ...P, eyeTransparent: !1, eyeFosforito: !0 } : { ...P, eyeTransparent: !0, eyeFosforito: !1 }),
            children: (r.eyeFosforito || r.eyeTransparent, "")
          }
        ),
        /* @__PURE__ */ o.jsx("button", { onClick: () => c((P) => Math.min(12, P * 1.08)), title: y("Acercar (+)"), children: /* @__PURE__ */ o.jsx(cm, { size: 15 }) }),
        /* @__PURE__ */ o.jsx("button", { onClick: () => c((P) => Math.max(0.05, P / 1.08)), title: y("Alejar (−)"), children: /* @__PURE__ */ o.jsx(dm, { size: 15 }) }),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            "data-testid": "zoom-reset",
            onClick: () => {
              c(1), w({ x: 0, y: 0 });
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
            src: D.previewUrl(f.id) + `?t=${j}`,
            alt: f.name,
            draggable: !1
          }
        ),
        /* @__PURE__ */ o.jsx("div", { className: "editor-overlay", children: f && Fe.filter((P) => !P.principal).map((P, I) => {
          const [A, fe, Be, mt] = P.bbox, it = f.w_px || 1, ge = f.h_px || 1;
          return /* @__PURE__ */ o.jsx(
            "button",
            {
              className: `blob${$.has(P.id) ? " sel" : ""}`,
              "data-testid": `blob-${I}`,
              title: y("Trozo de {px} px — clic para {accion}", {
                px: P.area_px,
                accion: $.has(P.id) ? y("conservar") : y("quitar")
              }),
              style: {
                left: `${A / it * 100}%`,
                top: `${fe / ge * 100}%`,
                width: `${(Be - A) / it * 100}%`,
                height: `${(mt - fe) / ge * 100}%`
              },
              onClick: () => sd(P.id)
            },
            P.id
          );
        }) })
      ] }),
      /* @__PURE__ */ o.jsx("div", { className: "hint", children: y("Pulsa los trozos sueltos para marcarlos (se quitarán al guardar). El contorno principal nunca se elimina. El archivo original no se toca.") })
    ] }) : /* @__PURE__ */ o.jsx(
      "div",
      {
        ref: H,
        className: `canvas ${E ? "panning" : ""}`,
        "data-testid": "canvas",
        onMouseDown: O,
        children: /* @__PURE__ */ o.jsxs(
          "div",
          {
            className: "canvas-inner",
            style: { transform: `translate(${p.x}px, ${p.y}px) scale(${d})` },
            children: [
              de === 0 && /* @__PURE__ */ o.jsx("div", { className: "hint", style: { margin: "30px auto" }, children: y("Añade imágenes y se colocarán aquí de forma óptima, respetando el área recortable de Cricut.") }),
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
                  children: yd.map(gd)
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
          onClick: ld,
          children: y("Guardar limpieza")
        }
      ),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          "data-testid": "btn-descartar-contorno",
          onClick: () => v == null ? void 0 : v(),
          children: y("Descartar")
        }
      )
    ] }) }) : /* @__PURE__ */ o.jsxs("div", { className: "viewer-bottom", children: [
      /* @__PURE__ */ o.jsx(
        "input",
        {
          type: "text",
          "data-testid": "save-name",
          placeholder: Pe,
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
            onClick: () => D.abrirCarpeta(n.carpeta_export || void 0).catch(() => {
            }),
            children: /* @__PURE__ */ o.jsx(Pr, { size: 16 })
          }
        ),
        /* @__PURE__ */ o.jsx("button", { "data-testid": "btn-guardar", onClick: cd, children: y("Guardar") }),
        /* @__PURE__ */ o.jsx("button", { "data-testid": "btn-guardar-como", onClick: dd, children: y("Guardar como…") }),
        /* @__PURE__ */ o.jsx(
          "button",
          {
            "data-testid": "btn-imprimir",
            onClick: ud,
            disabled: de === 0,
            children: y("Imprimir")
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ o.jsx(
      id,
      {
        open: ve,
        initial: n.carpeta_export,
        onClose: () => Se(!1),
        onPick: fd
      }
    ),
    /* @__PURE__ */ o.jsx(
      _m,
      {
        open: !!at,
        files: (at == null ? void 0 : at.files) ?? [],
        folder: (at == null ? void 0 : at.folder) ?? "",
        error: at == null ? void 0 : at.error,
        onOpenFolder: (P) => void D.fsOpen(P).catch(() => {
        }),
        onClose: () => Kt(null)
      }
    )
  ] });
}
function Em({ i: e, valor: t, refBase: n, onPct: r, onQuitar: a, t: i }) {
  const [l, u] = k.useState(null), s = n ? t / 100 * n : 0;
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
          const v = Number(f.target.value);
          isFinite(v) && v > 0 && r(Math.min(99, Math.max(
            1,
            Math.round(v / n * 1e3) / 10
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
function ht({ id: e, title: t, open: n, toggle: r, children: a }) {
  return /* @__PURE__ */ o.jsxs("div", { className: `sect ${n ? "open" : ""}`, "data-testid": `sect-${e}`, children: [
    /* @__PURE__ */ o.jsxs("div", { className: "sect-head", onClick: () => r(e), children: [
      /* @__PURE__ */ o.jsx("span", { children: t }),
      /* @__PURE__ */ o.jsx("span", { className: "arrow", children: "▼" })
    ] }),
    n && /* @__PURE__ */ o.jsx("div", { className: "sect-body", children: a })
  ] });
}
function Is(e, t) {
  return e.split(new RegExp(`(${t.join("|")})`)).map((n, r) => t.includes(n) ? /* @__PURE__ */ o.jsx("strong", { children: n }, r) : n);
}
const Pm = {
  greedy: 6,
  largest: 3,
  voronoi: 6,
  genetic: 25
}, zm = {
  greedy: "Greedy / Bottom-Left",
  largest: "Largest First",
  voronoi: "Voronoi",
  genetic: "Genético"
};
function Mm({
  settings: e,
  saveSettings: t,
  assets: n
}) {
  const r = dt(), [a, i] = k.useState(!0), [l, u] = k.useState({
    minis: !1,
    optimizacion: !1,
    imagen: !1,
    visualizacion: !1,
    historial: !1,
    perfiles: !1,
    corte: !1,
    extras: !1,
    offset: !1
  }), [s, f] = k.useState(!1), v = k.useMemo(() => {
    const d = (n ?? []).filter((p) => p.mini_enabled);
    return (d.length ? d : n ?? []).slice().sort((p, w) => Math.min(w.w_mm, w.h_mm) - Math.min(p.w_mm, p.h_mm))[0] ?? null;
  }, [n]), m = v ? Math.min(v.w_mm, v.h_mm) : 0, h = (d) => u((c) => ({ ...c, [d]: !c[d] })), x = (d) => t(d), C = k.useRef(null), y = (d, c, p, w, S = 1, g = "", j) => /* @__PURE__ */ o.jsxs("div", { className: "ctl", children: [
    /* @__PURE__ */ o.jsx("label", { children: r(d) }),
    /* @__PURE__ */ o.jsxs("div", { className: "row", children: [
      /* @__PURE__ */ o.jsx(
        "input",
        {
          type: "number",
          min: p,
          max: w,
          step: S,
          "data-testid": `set-${c}`,
          value: String(e[c]),
          onChange: (_) => {
            const E = Number(_.target.value);
            Number.isNaN(E) || x({ [c]: E });
          }
        }
      ),
      g && /* @__PURE__ */ o.jsx("span", { className: "hint", children: g }),
      j
    ] })
  ] }), R = (d, c, p, w) => /* @__PURE__ */ o.jsxs("div", { className: "ctl", children: [
    /* @__PURE__ */ o.jsx("label", { children: r(d) }),
    /* @__PURE__ */ o.jsx(
      "select",
      {
        "data-testid": `set-${c}`,
        value: String(e[c]),
        onChange: (S) => x({ [c]: S.target.value }),
        children: p.map(([S, g]) => /* @__PURE__ */ o.jsx("option", { value: S, children: r(g) }, S))
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
      /* @__PURE__ */ o.jsxs(ht, { id: "general", title: r("General"), open: !0, toggle: () => {
      }, children: [
        y("Espacio entre elementos", "espacio_mm", 0, 20, 0.5, "mm"),
        y("Margen de seguridad a los límites", "margen_mm", 0, 20, 0.5, "mm"),
        R("Rotación admitida", "rotacion", [
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
                const c = d.target.value, p = qp[c];
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
        R("Máquina Cricut", "maquina", [
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
      /* @__PURE__ */ o.jsxs(ht, { id: "minis", title: r("Minis"), open: l.minis, toggle: h, children: [
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
        R("Rotaciones admitidas", "mini_rotacion", [
          ["no", "No girar"],
          ["90", "Giros de 0º / 90º / 180º / 270º"],
          ["libre", "Cualquier ángulo"]
        ]),
        R("Selección de tamaños", "mini_tamanos", [
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
              Em,
              {
                i: c,
                valor: d,
                refBase: m,
                t: r,
                onPct: (p) => {
                  const w = [...e.mini_tamanos_lista ?? []];
                  w[c] = p, x({ mini_tamanos_lista: w });
                },
                onQuitar: () => x({
                  mini_tamanos_lista: (e.mini_tamanos_lista ?? []).filter(
                    (p, w) => w !== c
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
          /* @__PURE__ */ o.jsx("div", { className: "hint", children: v ? r(
            "El tamaño en mm es para «{nombre}» (su lado menor mide {mm} mm); cada mini se escala igual respecto a su original.",
            { nombre: v.name, mm: m.toFixed(1) }
          ) : r("El tamaño en mm se calcula por imagen; añade imágenes para verlo. Cada valor es el tamaño del mini respecto al original.") })
        ] })
      ] }),
      /* @__PURE__ */ o.jsxs(ht, { id: "optimizacion", title: r("Optimización"), open: l.optimizacion, toggle: h, children: [
        R("Método", "opt_metodo", [
          ["greedy", "Greedy / Bottom-Left (rápido)"],
          ["largest", "Largest First (mayor primero)"],
          ["voronoi", "Voronoi (huecos más grandes)"],
          ["genetic", "Genético (máxima calidad)"]
        ]),
        R("Calidad de cálculo", "opt_calidad", [
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
            s: Pm[e.opt_metodo] ?? 8,
            m: r(zm[e.opt_metodo] ?? e.opt_metodo)
          }
        ) }) : y("Tiempo máximo", "opt_tiempo_max_s", 0.5, 120, 0.5, "s"),
        /* @__PURE__ */ o.jsx("div", { className: "hint", children: r("La eficiencia del último cálculo se muestra en la barra de estado.") })
      ] }),
      /* @__PURE__ */ o.jsxs(ht, { id: "imagen", title: r("Imagen"), open: l.imagen, toggle: h, children: [
        y("Sangrado de impresión", "bleed_mm", 0, 5, 0.2, "mm"),
        /* @__PURE__ */ o.jsx("div", { className: "hint", children: r("Repite el color del borde hacia fuera para que no salga reborde blanco si la impresora no está perfectamente alineada (0 = sin sangrado).") }),
        R("Espacio de color de impresión", "espacio_color", [
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
        R("Formato de color de salida", "color_formato", [
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
        R("Lienzo del archivo final", "lienzo", [
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
      /* @__PURE__ */ o.jsxs(ht, { id: "offset", title: r("Offset / borde"), open: l.offset, toggle: h, children: [
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
          R("Tipo de borde", "offset_modo", [
            ["extender", "Extender el color del borde"],
            ["blanco", "Blanco"],
            ["color", "Color personalizado"]
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
      /* @__PURE__ */ o.jsxs(ht, { id: "corte", title: r("Estimación de corte"), open: l.corte, toggle: h, children: [
        /* @__PURE__ */ o.jsx("div", { className: "hint", children: Is(
          r(
            "Tiempo estimado de corte de la {maquina}, calculado a partir del perímetro de las siluetas y del recorrido entre formas.",
            { maquina: Ls[e.maquina] ?? "Cricut Maker 3" }
          ),
          [Ls[e.maquina] ?? "Cricut Maker 3"]
        ) }),
        y("Velocidad de corte", "corte_velocidad_mm_s", 1, 500, 1, "mm/s"),
        y("Velocidad de viaje (sin cortar)", "corte_viaje_mm_s", 1, 1e3, 5, "mm/s"),
        y("Tiempo extra por forma", "corte_extra_forma_s", 0, 30, 0.1, "s"),
        y("Factor de corrección", "corte_factor", 0.1, 20, 0.05, "×"),
        /* @__PURE__ */ o.jsx("div", { className: "hint", children: r("Ajusta el factor para corregir con tu máquina y material reales; se guarda para la próxima vez.") })
      ] }),
      /* @__PURE__ */ o.jsxs(
        ht,
        {
          id: "historial",
          title: r("Historial (deshacer/rehacer)"),
          open: l.historial,
          toggle: h,
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
      /* @__PURE__ */ o.jsxs(ht, { id: "visualizacion", title: r("Visualización"), open: l.visualizacion, toggle: h, children: [
        /* @__PURE__ */ o.jsxs("div", { className: "ctl", children: [
          /* @__PURE__ */ o.jsx("label", { children: r("Tema") }),
          /* @__PURE__ */ o.jsx("div", { className: "theme-grid", "data-testid": "theme-grid", children: xo.map((d) => /* @__PURE__ */ o.jsxs(
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
            /* @__PURE__ */ o.jsx("img", { src: D.iconUrl(), alt: r("icono"), style: { width: 34, height: 34, borderRadius: 10 } }),
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
                  c && D.setIcon(c).then(() => {
                    window.location.reload();
                  }), d.target.value = "";
                }
              }
            )
          ] }),
          /* @__PURE__ */ o.jsx("div", { className: "hint", children: r("Actualiza la barra de estado, la pestaña y el lanzador.") })
        ] })
      ] }),
      /* @__PURE__ */ o.jsxs(ht, { id: "extras", title: r("Extras"), open: l.extras, toggle: h, children: [
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
      /* @__PURE__ */ o.jsx("div", { className: "creditos", "data-testid": "creditos", children: Is(
        r("CryCat · hecha por Daniel Hernández Ferrándiz y Wivi.eve, para los artistas."),
        ["CryCat", "Daniel Hernández Ferrándiz", "Wivi.eve"]
      ) })
    ] }),
    /* @__PURE__ */ o.jsx(
      id,
      {
        open: s,
        initial: e.carpeta_export,
        onClose: () => f(!1),
        onPick: (d) => t({ carpeta_export: d })
      }
    )
  ] });
}
const yt = (e) => (globalThis.__crycatAssets || "") + e;
function As(e) {
  if (!Number.isFinite(e) || e <= 0) return "—";
  if (e < 60) return `${Math.ceil(e)} s`;
  const t = Math.floor(e / 60), n = Math.round(e % 60);
  return t < 60 ? `${t} min ${n} s` : `${Math.floor(t / 60)} h ${t % 60} min`;
}
function Tm({
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
  onAyuda: v
}) {
  var b, H;
  const m = dt(), h = yl(), [x, C] = k.useState([]), [y, R] = k.useState(0), [d, c] = k.useState(null), [p, w] = k.useState(!1), [S, g] = k.useState(""), j = k.useRef(!1), _ = k.useRef([]);
  k.useEffect(() => {
    fetch("/api/funmsgs").then((z) => z.ok ? z.json() : { msgs: [] }).then((z) => C(z.msgs ?? [])).catch(() => {
    });
  }, []), k.useEffect(() => {
    let z = !0;
    return D.version().then((J) => {
      z && (c(J), !J.comprobado && !j.current && (j.current = !0, D.checkVersion().then((Pe) => z && c(Pe)).catch(() => {
      })));
    }).catch(() => {
    }), () => {
      z = !1;
    };
  }, []);
  const E = ((b = d == null ? void 0 : d.actualizacion) == null ? void 0 : b.estado) === "descargando" || ((H = d == null ? void 0 : d.actualizacion) == null ? void 0 : H.estado) === "instalando";
  k.useEffect(() => {
    if (!E) return;
    const z = setInterval(() => {
      D.version().then(c).catch(() => {
      });
    }, 700);
    return () => clearInterval(z);
  }, [E]);
  const L = !!(e && !e.done);
  k.useEffect(() => {
    if (!L) return;
    const z = setInterval(() => R((J) => J + 1), 1200);
    return () => clearInterval(z);
  }, [L]);
  const q = x.length ? x : [
    m("Optimizando…"),
    "Rascando Pikachus…",
    "Contando Mausholds…",
    "Tortilleando Exeggcutes…",
    "Ordenando los cubiertos de Sinistea…"
  ], se = k.useMemo(() => {
    if (S) return S;
    if (E) {
      const z = d == null ? void 0 : d.actualizacion;
      if ((z == null ? void 0 : z.estado) === "instalando") return m("Instalando y reiniciando…");
      const J = (z == null ? void 0 : z.progreso) != null ? Math.round(z.progreso) : null;
      return J != null ? m("Descargando… {p}%", { p: J }) : (z == null ? void 0 : z.mensaje) || m("Descargando actualización…");
    }
    if (L)
      return q[y % q.length];
    if (e && e.status === "error") return e.message || "Error";
    if (n && n.pages > 0) {
      const z = Math.round(n.efficiency * 100);
      return m(
        "{n} imágenes en {p} página{s} · eficiencia {ef}% · {m} minis",
        {
          n: n.placed,
          p: n.pages,
          s: n.pages > 1 ? "s" : "",
          ef: z,
          m: n.minis
        }
      );
    }
    return m("Listo para empezar");
  }, [S, E, L, e, q, y, n, m, d]), ve = Math.round(((e == null ? void 0 : e.progress) ?? 0) * 100), Se = k.useMemo(() => {
    const z = e == null ? void 0 : e.eta_s;
    return !L || z === void 0 || z === null || z <= 0.5 ? "" : m(" · {x} restante", { x: As(z) });
  }, [e == null ? void 0 : e.eta_s, L, m]), Fe = k.useMemo(() => !r || !r.segundos ? "" : As(r.segundos), [r]), je = async () => {
    w(!0), g("");
    try {
      const z = await D.checkVersion();
      c(z), z.error ? g(m("Sin conexión")) : z.hay_nueva || g(m("Estás en la última versión"));
    } catch {
      g(m("Sin conexión"));
    } finally {
      w(!1);
    }
  }, tt = async () => {
    g("");
    try {
      const z = await D.updateVersion();
      z.ok ? g(m("Instalando y reiniciando…")) : z.modo === "dev" && z.url ? (g(m("Modo desarrollo: se actualiza con git")), await D.openReleases().catch(() => {
      })) : g(z.mensaje || m("No se pudo actualizar")), D.version().then(c).catch(() => {
      });
    } catch {
      g(m("No se pudo actualizar"));
    }
  }, $ = !!(d != null && d.hay_nueva && !L && !E) ? m("Nueva versión {v} disponible", { v: (d == null ? void 0 : d.ultima) ?? "" }) : "";
  return /* @__PURE__ */ o.jsxs("div", { className: "statusbar", "data-testid": "statusbar", children: [
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
            const z = Date.now();
            _.current = [..._.current, z].filter((J) => z - J < 2500), _.current.length >= 5 && (_.current = [], g(m("¡Fiesta Pikmin!")), window.setTimeout(() => g(""), 4e3), f == null || f());
          }
        }
      ),
      /* @__PURE__ */ o.jsx("span", { className: "nombre", children: "CryCat" })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "center", "data-testid": "status-center", children: [
      /* @__PURE__ */ o.jsx("span", { className: "msg", children: se }),
      !!n && n.pages > 1 && /* @__PURE__ */ o.jsx(
        "span",
        {
          className: "aviso-paginas",
          "data-testid": "aviso-paginas",
          title: m("No cabe todo en una página: se usarán varias"),
          children: m("No cabe en una página: {n} páginas", { n: n.pages })
        }
      ),
      L && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        /* @__PURE__ */ o.jsx("div", { className: "progress", "data-testid": "progress", children: /* @__PURE__ */ o.jsx("div", { style: { width: `${Math.max(4, ve)}%` } }) }),
        /* @__PURE__ */ o.jsxs("span", { className: "eta", "data-testid": "eta", children: [
          ve,
          "%",
          Se
        ] }),
        /* @__PURE__ */ o.jsx(
          "img",
          {
            className: "piensa",
            "data-testid": "piensa",
            src: yt("/piensa.gif"),
            alt: "",
            title: m("Pensando…"),
            onError: (z) => {
              z.currentTarget.style.display = "none";
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
          onClick: () => v == null ? void 0 : v(),
          children: [
            /* @__PURE__ */ o.jsx(xm, { size: 15 }),
            " ",
            m("Cómo usar")
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
            /* @__PURE__ */ o.jsx(wm, { size: 15 }),
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
          onClick: () => window.open((d == null ? void 0 : d.repo) ?? "https://github.com/dhernandezgit/CryCat-Tool", "_blank", "noopener"),
          children: /* @__PURE__ */ o.jsx(mm, { size: 15 })
        }
      ),
      /* @__PURE__ */ o.jsx(
        "button",
        {
          className: "idioma",
          "data-testid": "btn-idioma",
          title: m("Idioma"),
          onClick: () => s == null ? void 0 : s(h === "es" ? "en" : "es"),
          children: h.toUpperCase()
        }
      ),
      /* @__PURE__ */ o.jsxs(
        "span",
        {
          className: "version-chip",
          "data-testid": "version-chip",
          title: m("Versión actual"),
          children: [
            (d == null ? void 0 : d.hay_nueva) && !E && /* @__PURE__ */ o.jsx(
              "button",
              {
                className: "alerta-version",
                "data-testid": "aviso-version",
                title: $ || m("Hay una versión nueva"),
                onClick: tt,
                children: /* @__PURE__ */ o.jsx(hm, { size: 14 })
              }
            ),
            "v",
            (d == null ? void 0 : d.actual) ?? "—",
            (d == null ? void 0 : d.hay_nueva) && (d == null ? void 0 : d.ultima) && /* @__PURE__ */ o.jsxs("span", { className: "version-nueva", "data-testid": "version-nueva", children: [
              "v",
              d.ultima
            ] }),
            /* @__PURE__ */ o.jsx(
              "button",
              {
                className: "btn-mini",
                "data-testid": "btn-comprobar",
                title: m("Comprobar versiones"),
                onClick: je,
                disabled: p,
                children: p ? "…" : /* @__PURE__ */ o.jsx(ym, { size: 14 })
              }
            ),
            (d == null ? void 0 : d.hay_nueva) && /* @__PURE__ */ o.jsx(
              "button",
              {
                className: "btn-mini destacado",
                "data-testid": "btn-actualizar",
                title: m("Descargar e instalar la nueva versión"),
                onClick: tt,
                children: /* @__PURE__ */ o.jsx(gm, { size: 14 })
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
            children: i ? /* @__PURE__ */ o.jsx(em, {}) : /* @__PURE__ */ o.jsx(Zp, {})
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
            onChange: (z) => {
              l == null || l(Number(z.target.value)), i && Number(z.target.value) > 0 && (u == null || u(!1));
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
            Fe || "—"
          ]
        }
      )
    ] })
  ] });
}
const Lm = [
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
], Rm = "/pikmin_bloom/", Os = "/pikmin/alma.png", Dm = "/sonidos/pikmin.mp3", Im = "/sonidos/pikmin_morir.mp3";
function Am(e) {
  const [t, n] = k.useState(Lm), [r, a] = k.useState([]);
  return k.useEffect(() => {
    fetch(yt("/pikmin/indice.json")).then((i) => i.ok ? i.json() : null).then((i) => {
      Array.isArray(i) && i.length && n(i.map((l) => "/pikmin/" + l));
    }).catch(() => {
    }), fetch(yt("/pikmin_bloom/indice.json")).then((i) => i.ok ? i.json() : []).then((i) => {
      if (!Array.isArray(i)) return;
      const l = [...i];
      for (let u = l.length - 1; u > 0; u--) {
        const s = Math.floor(Math.random() * (u + 1));
        [l[u], l[s]] = [l[s], l[u]];
      }
      a(l.slice(0, 60).map((u) => yt(Rm + u)));
    }).catch(() => {
    });
  }, []), k.useMemo(
    () => e && e.length ? [...e, ...r].map(yt) : [...t, ...r].map(yt),
    [e, t, r]
  );
}
function Om({
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
  const v = Am(f), [m, h] = k.useState([]), x = k.useRef(void 0), C = k.useRef(
    typeof document < "u" && document.visibilityState === "hidden"
  ), y = k.useRef(l);
  y.current = l;
  const R = Math.max(5e3, t * 6e4), d = (S) => {
    if (!(!n || i))
      try {
        const g = new Audio(yt(S ? Im : Dm));
        g.volume = Math.min(1, Math.max(0, a)), g.play().catch(() => {
        });
      } catch {
      }
  }, c = () => {
    const S = r && Math.random() < 0.25, g = S ? yt(Os) : v[Math.floor(Math.random() * v.length)] ?? yt(Os);
    h((j) => [...j, {
      src: g,
      left: 3 + Math.random() * 92,
      key: Date.now() + j.length,
      morir: S,
      estado: "paseando"
    }]), d(S);
  }, p = () => {
    if (!e) return;
    const S = u ?? Math.round(R * 0.5), g = s ?? Math.round(R * 1.5), j = S + Math.random() * Math.max(1, g - S);
    x.current = window.setTimeout(c, j);
  };
  k.useEffect(() => {
    if (!e) {
      window.clearTimeout(x.current), h([]);
      return;
    }
    return p(), () => window.clearTimeout(x.current);
  }, [e, t, n, r, a, i, v]), k.useEffect(() => {
    const S = () => {
      C.current = document.visibilityState === "hidden", !C.current && y.current && window.setTimeout(() => {
        h((g) => g.length ? (d(!1), g.map((j) => ({ ...j, estado: "festejando" }))) : g), window.setTimeout(() => {
          h([]), p();
        }, 2200);
      }, 1e3);
    };
    return document.addEventListener("visibilitychange", S), () => document.removeEventListener("visibilitychange", S);
  }, []);
  const w = (S) => {
    if (y.current && C.current) {
      h((g) => g.map((j) => j.key === S ? { ...j, estado: "quieto" } : j));
      return;
    }
    h((g) => g.filter((j) => j.key !== S)), p();
  };
  return /* @__PURE__ */ o.jsx(o.Fragment, { children: m.map((S) => /* @__PURE__ */ o.jsx(
    "div",
    {
      className: `pikmin-pet ${S.estado}${S.morir ? " muriendo" : ""}`,
      "data-testid": "pikmin-pet",
      "data-estado": S.estado,
      "data-morir": S.morir ? "1" : "0",
      style: { left: `${S.left}%` },
      onAnimationEnd: () => w(S.key),
      children: /* @__PURE__ */ o.jsx(
        "img",
        {
          src: S.src,
          alt: "",
          "aria-hidden": "true",
          onError: () => w(S.key)
        }
      )
    },
    S.key
  )) });
}
const $s = "crycat_bienvenida_v1";
function $m() {
  const [e, t] = k.useState(!1);
  return k.useEffect(() => {
    try {
      localStorage.getItem($s) !== "1" && t(!0);
    } catch {
      t(!0);
    }
  }, []), { visible: e, abrir: () => t(!0), cerrar: () => {
    try {
      localStorage.setItem($s, "1");
    } catch {
    }
    t(!1);
  } };
}
function bm({ open: e, onClose: t, onAbrirCarpeta: n }) {
  const r = dt(), [a, i] = k.useState("inicio");
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
        /* @__PURE__ */ o.jsx(Pr, { size: 15 }),
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
function Fm() {
  const [e, t] = k.useState([]), [n, r] = k.useState(null), [a, i] = k.useState(null), [l, u] = k.useState(null), [s, f] = k.useState(null), [v, m] = k.useState(null), [h, x] = k.useState(!0), [C, y] = k.useState({
    eyeTransparent: !1,
    eyeFosforito: !1,
    guidesVisible: !0,
    viewMode: 1,
    saveName: ""
  }), [R, d] = k.useState(33.3), [c, p] = k.useState(33.3), w = $m(), S = k.useRef(null), g = k.useRef(null);
  k.useEffect(() => {
    (async () => {
      try {
        const O = await D.getSettings();
        f(O.settings), Rs(O.settings.tema), y((F) => ({
          ...F,
          guidesVisible: O.settings.ver_guias,
          eyeTransparent: O.settings.fondo_transparente
        })), t((await D.listAssets()).map(Er)), i(await D.result());
      } catch {
        x(!1);
      }
    })();
  }, []), k.useEffect(() => {
    const O = setInterval(async () => {
      try {
        await D.health(), x(!0);
      } catch {
        x(!1);
      }
    }, 5e3);
    return () => clearInterval(O);
  }, []);
  const j = k.useCallback(async () => {
    try {
      t((await D.listAssets()).map(Er)), i(await D.result());
      try {
        u(await D.estimate());
      } catch {
      }
    } catch {
      x(!1);
    }
  }, []), _ = k.useCallback((O) => {
    g.current && window.clearInterval(g.current), g.current = window.setInterval(async () => {
      try {
        const F = await D.job(O);
        m(F), F.done && (window.clearInterval(g.current), g.current = null, await j(), F.status === "done" && window.setTimeout(() => m(null), 2500));
      } catch {
        window.clearInterval(g.current), g.current = null;
      }
    }, 300);
  }, []), E = k.useCallback(async () => {
    try {
      const O = await D.optimize();
      m(O), _(O.id);
    } catch {
      x(!1);
    }
  }, [_]), L = k.useCallback(
    async (O) => {
      try {
        const F = await D.optimize(O, !0);
        m(F), _(F.id);
      } catch {
        x(!1);
      }
    },
    [_]
  ), q = k.useCallback(() => {
    s && s.auto_recalcular === !1 || (S.current && window.clearTimeout(S.current), S.current = window.setTimeout(E, 400));
  }, [E, s]), se = k.useRef(null);
  k.useEffect(() => {
    se.current = q;
  }, [q]);
  const ve = k.useRef(!1);
  k.useEffect(() => {
    if (!(!s || ve.current)) {
      if (e.length > 0) {
        ve.current = !0;
        return;
      }
      ve.current = !0, D.crearDemo().then(async (O) => {
        var F;
        O.ok && (await j(), (F = se.current) == null || F.call(se));
      }).catch(() => {
      });
    }
  }, [s, e.length, j]);
  const Se = k.useCallback(
    async (O) => {
      f((F) => F && { ...F, ...O }), O.tema && Rs(O.tema);
      try {
        const F = await D.putSettings(O);
        if (F.job)
          m(F.job), _(F.job.id);
        else
          try {
            u(await D.estimate());
          } catch {
          }
      } catch {
        x(!1);
      }
    },
    [_]
  ), Fe = k.useRef([]), je = k.useRef([]), [tt, M] = k.useState({ puedeDeshacer: !1, puedeRehacer: !1 }), $ = (s == null ? void 0 : s.historial) !== !1, b = (s == null ? void 0 : s.historial_max) ?? 40, H = () => M({
    puedeDeshacer: Fe.current.length > 0,
    puedeRehacer: je.current.length > 0
  }), z = k.useCallback(() => {
    const O = [];
    return (s == null ? void 0 : s.hist_tamano) !== !1 && O.push("scale_pct"), (s == null ? void 0 : s.hist_copias) !== !1 && O.push("copies"), (s == null ? void 0 : s.hist_borde) !== !1 && O.push("offset_mm", "offset_modo", "offset_color"), (s == null ? void 0 : s.hist_minis) !== !1 && O.push("mini_enabled", "mini_quota"), O;
  }, [
    s == null ? void 0 : s.hist_tamano,
    s == null ? void 0 : s.hist_copias,
    s == null ? void 0 : s.hist_borde,
    s == null ? void 0 : s.hist_minis
  ]), J = k.useCallback((O) => {
    const F = {};
    for (const ft of z()) F[ft] = O[ft];
    return F;
  }, [z]), Pe = k.useCallback(() => {
    $ && (Fe.current = [...Fe.current, e].slice(-b), je.current = [], H());
  }, [e, $, b]), nt = k.useCallback(async () => {
    const O = Fe.current.pop();
    if (O) {
      je.current = [...je.current, e], t(O), H();
      for (const F of O)
        await D.patchAsset(F.id, J(F)).catch(() => {
        });
      await j();
    }
  }, [e, j, J]), de = k.useCallback(async () => {
    const O = je.current.pop();
    if (O) {
      Fe.current = [...Fe.current, e], t(O), H();
      for (const F of O)
        await D.patchAsset(F.id, J(F)).catch(() => {
        });
      await j();
    }
  }, [e, j, J]);
  k.useEffect(() => {
    const O = (F) => {
      if (!(F.ctrlKey || F.metaKey)) return;
      const pt = F.target;
      if (pt && (pt.tagName === "INPUT" || pt.tagName === "TEXTAREA" || pt.tagName === "SELECT" || pt.isContentEditable)) return;
      const Et = F.key.toLowerCase();
      Et === "z" && !F.shiftKey ? (F.preventDefault(), nt()) : (Et === "y" || Et === "z" && F.shiftKey) && (F.preventDefault(), de());
    };
    return window.addEventListener("keydown", O), () => window.removeEventListener("keydown", O);
  }, [nt, de]);
  const rt = k.useCallback(
    (O) => {
      const F = (pt) => {
        const Dr = window.innerWidth, Et = pt.clientX / Dr * 100;
        O === "left" ? d(Math.min(45, Math.max(12, Et))) : p(Math.min(60, Math.max(20, Et - R)));
      }, ft = () => {
        window.removeEventListener("mousemove", F), window.removeEventListener("mouseup", ft);
      };
      window.addEventListener("mousemove", F), window.addEventListener("mouseup", ft);
    },
    [R]
  );
  return k.useEffect(() => {
    document.documentElement.lang = (s == null ? void 0 : s.idioma) ?? "es";
  }, [s == null ? void 0 : s.idioma]), s ? /* @__PURE__ */ o.jsx(Xp, { idioma: s.idioma ?? "es", children: /* @__PURE__ */ o.jsxs("div", { className: "app", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "main", children: [
      /* @__PURE__ */ o.jsx("div", { className: "panel left", style: { width: `${R}%` }, "data-testid": "file-panel", children: /* @__PURE__ */ o.jsx(
        Cm,
        {
          assets: e,
          result: a,
          settings: s,
          onChange: async () => {
            await j(), q();
          },
          saveSettings: Se,
          onEditarContorno: (O) => r(O),
          onAntesDeCambiar: Pe
        }
      ) }),
      /* @__PURE__ */ o.jsx("div", { className: "splitter", "data-testid": "splitter-left", onMouseDown: () => rt("left") }),
      /* @__PURE__ */ o.jsx("div", { className: "viewer-wrap", style: { width: `${c}%` }, children: /* @__PURE__ */ o.jsx(
        Nm,
        {
          assets: e,
          result: a,
          settings: s,
          ui: C,
          setUi: y,
          saveSettings: Se,
          optimize: E,
          onRefresh: j,
          onJob: (O) => {
            m(O), _(O.id);
          },
          onRecalc: L,
          editando: n,
          onFinEdicion: async () => {
            r(null), await j();
          },
          onDeshacer: nt,
          onRehacer: de,
          puedeDeshacer: tt.puedeDeshacer,
          puedeRehacer: tt.puedeRehacer
        }
      ) }),
      /* @__PURE__ */ o.jsx("div", { className: "splitter", "data-testid": "splitter-center", onMouseDown: () => rt("center") }),
      /* @__PURE__ */ o.jsx("div", { className: "panel right", style: { flex: 1 }, "data-testid": "settings-panel", children: /* @__PURE__ */ o.jsx(
        Mm,
        {
          settings: s,
          assets: e,
          saveSettings: Se
        }
      ) })
    ] }),
    /* @__PURE__ */ o.jsx(
      Tm,
      {
        job: v,
        backendOk: h,
        result: a,
        estimate: l,
        volumen: s.volumen ?? 0.5,
        mute: s.mute ?? !1,
        onVolumen: (O) => Se({ volumen: O }),
        onMute: (O) => Se({ mute: O }),
        onIdioma: (O) => Se({ idioma: O }),
        onEasterEgg: () => Se({
          pikmin_fiesta: !s.pikmin_fiesta
        }),
        onAyuda: w.abrir
      }
    ),
    /* @__PURE__ */ o.jsx(
      Om,
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
      bm,
      {
        open: w.visible,
        onClose: w.cerrar,
        onAbrirCarpeta: () => void D.fsOpen(
          s.carpeta_export || ""
        ).catch(() => {
        })
      }
    )
  ] }) }) : /* @__PURE__ */ o.jsx("div", { style: { padding: 30 }, children: Jp("es", "Cargando CryCat…") });
}
const od = document.getElementById("root"), Ci = [
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
], ko = 7;
let So;
function bs(e, t = !1) {
  window.clearTimeout(So);
  const n = ed().colors;
  if (od.innerHTML = `
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
                min-height:1.2em">${t ? "" : "Paso 1 de " + ko}</div>
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
  let r = Math.floor(Math.random() * Ci.length);
  const a = () => {
    const l = document.getElementById("carga-fun");
    l && (l.textContent = Ci[r++ % Ci.length]);
  }, i = () => {
    a(), So = window.setTimeout(
      i,
      2200 + Math.random() * 1600
    );
  };
  i();
}
const _i = (e, t) => {
  const n = document.getElementById("carga-txt");
  if (n && (n.textContent = e), t) {
    const r = document.getElementById("carga-paso");
    r && (r.textContent = `Paso ${t} de ${ko}`);
    const a = document.getElementById("carga-barra");
    a && (a.style.width = `${Math.round(t / ko * 100)}%`);
  }
};
let ur = null;
const jo = (e) => {
  const t = new Uint8Array(e);
  let n = "";
  const r = 32768;
  for (let a = 0; a < t.length; a += r)
    n += String.fromCharCode.apply(null, t.subarray(a, a + r));
  return btoa(n);
}, Bm = (e) => {
  const t = atob(e || ""), n = new Uint8Array(t.length);
  for (let r = 0; r < t.length; r++) n[r] = t.charCodeAt(r);
  return n;
};
async function Um(e) {
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
    jo(await a.arrayBuffer()),
    `multipart/form-data; boundary=${t}`
  ];
}
async function Vm(e, t, n) {
  const r = new URL(t, location.href), a = r.pathname.indexOf("/api/"), i = (a >= 0 ? r.pathname.slice(a) : r.pathname) + r.search, l = {};
  new Headers((n == null ? void 0 : n.headers) || {}).forEach((m, h) => {
    l[h] = m;
  });
  let u = "";
  const s = n == null ? void 0 : n.body;
  if (s instanceof FormData) {
    const [m, h] = await Um(s);
    u = m, l["content-type"] = h;
  } else s instanceof Blob ? u = jo(await s.arrayBuffer()) : typeof s == "string" && (u = jo(new TextEncoder().encode(s).buffer));
  const f = `import json
from crycat import webapi
await webapi.peticion(` + JSON.stringify(e) + ", " + JSON.stringify(i) + ", " + JSON.stringify(JSON.stringify(l)) + ", " + JSON.stringify(u) + ")", v = JSON.parse(await ur.runPythonAsync(f));
  return new Response(Bm(v.body), {
    status: v.status || 200,
    headers: v.headers || { "content-type": "application/json" }
  });
}
function Hm() {
  const e = window.fetch.bind(window);
  window.fetch = async (t, n) => {
    const r = typeof t == "string" ? t : t && t.url ? t.url : String(t);
    if (r.includes("/api/") && ur)
      try {
        return await Vm(((n == null ? void 0 : n.method) || "GET").toUpperCase(), r, n);
      } catch (a) {
        return new Response(
          "error: " + a.message,
          { status: 500 }
        );
      }
    return e(t, n);
  };
}
async function Gm() {
  try {
    if (bs("Preparando el entorno…"), "serviceWorker" in navigator)
      try {
        const n = new URL("../", location.href).pathname;
        await Promise.race([
          navigator.serviceWorker.register("../sw.js", { scope: n }).then(() => navigator.serviceWorker.ready),
          new Promise((r) => setTimeout(r, 6e3))
        ]);
      } catch {
      }
    ur = await (await import(new URL("../pyodide-crycat.js?v=${VERSION}", import.meta.url).href)).cargarCryCat(_i), _i("Instalando FastAPI en el navegador (solo la primera vez)…", 6), await ur.runPythonAsync(
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
await webapi.peticion(` + JSON.stringify(r.method) + ", " + JSON.stringify(r.path) + ", " + JSON.stringify(JSON.stringify(r.headers || {})) + ", " + JSON.stringify(r.body || "") + ")", l = await ur.runPythonAsync(i);
          a.postMessage(JSON.parse(l));
        } catch (i) {
          a.postMessage({
            status: 500,
            headers: { "content-type": "text/plain; charset=utf-8" },
            body: btoa("error: " + (i && i.message ? i.message : i))
          });
        }
    }), globalThis.__crycatBase = new URL("./", location.href).pathname, globalThis.__crycatAssets = new URL("./app", location.href).pathname, Hm();
    try {
      const n = ed().key;
      n && n !== "wiwi" && await fetch(Da() + "/api/settings", {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ tema: n })
      });
    } catch {
    }
    _i("Abriendo la aplicación…", 7), window.clearTimeout(So), Jc(od).render(/* @__PURE__ */ o.jsx(Fm, {}));
  } catch (e) {
    bs("No se pudo iniciar la versión web: " + (e && e.message ? e.message : e), !0);
  }
}
Gm();
