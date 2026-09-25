var EC = { exports: {} }, nv = {}, Zh = { exports: {} }, Ft = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var uE;
function yk() {
  if (uE) return Ft;
  uE = 1;
  var g = Symbol.for("react.element"), w = Symbol.for("react.portal"), R = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), K = Symbol.for("react.profiler"), G = Symbol.for("react.provider"), S = Symbol.for("react.context"), $e = Symbol.for("react.forward_ref"), F = Symbol.for("react.suspense"), X = Symbol.for("react.memo"), xe = Symbol.for("react.lazy"), A = Symbol.iterator;
  function ve(D) {
    return D === null || typeof D != "object" ? null : (D = A && D[A] || D["@@iterator"], typeof D == "function" ? D : null);
  }
  var fe = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, He = Object.assign, ne = {};
  function Ie(D, M, Ve) {
    this.props = D, this.context = M, this.refs = ne, this.updater = Ve || fe;
  }
  Ie.prototype.isReactComponent = {}, Ie.prototype.setState = function(D, M) {
    if (typeof D != "object" && typeof D != "function" && D != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, D, M, "setState");
  }, Ie.prototype.forceUpdate = function(D) {
    this.updater.enqueueForceUpdate(this, D, "forceUpdate");
  };
  function be() {
  }
  be.prototype = Ie.prototype;
  function _e(D, M, Ve) {
    this.props = D, this.context = M, this.refs = ne, this.updater = Ve || fe;
  }
  var pe = _e.prototype = new be();
  pe.constructor = _e, He(pe, Ie.prototype), pe.isPureReactComponent = !0;
  var Je = Array.isArray, re = Object.prototype.hasOwnProperty, Y = { current: null }, ae = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Me(D, M, Ve) {
    var Ke, St = {}, oe = null, Se = null;
    if (M != null) for (Ke in M.ref !== void 0 && (Se = M.ref), M.key !== void 0 && (oe = "" + M.key), M) re.call(M, Ke) && !ae.hasOwnProperty(Ke) && (St[Ke] = M[Ke]);
    var pt = arguments.length - 2;
    if (pt === 1) St.children = Ve;
    else if (1 < pt) {
      for (var st = Array(pt), Ht = 0; Ht < pt; Ht++) st[Ht] = arguments[Ht + 2];
      St.children = st;
    }
    if (D && D.defaultProps) for (Ke in pt = D.defaultProps, pt) St[Ke] === void 0 && (St[Ke] = pt[Ke]);
    return { $$typeof: g, type: D, key: oe, ref: Se, props: St, _owner: Y.current };
  }
  function de(D, M) {
    return { $$typeof: g, type: D.type, key: M, ref: D.ref, props: D.props, _owner: D._owner };
  }
  function nt(D) {
    return typeof D == "object" && D !== null && D.$$typeof === g;
  }
  function et(D) {
    var M = { "=": "=0", ":": "=2" };
    return "$" + D.replace(/[=:]/g, function(Ve) {
      return M[Ve];
    });
  }
  var Xe = /\/+/g;
  function z(D, M) {
    return typeof D == "object" && D !== null && D.key != null ? et("" + D.key) : M.toString(36);
  }
  function Oe(D, M, Ve, Ke, St) {
    var oe = typeof D;
    (oe === "undefined" || oe === "boolean") && (D = null);
    var Se = !1;
    if (D === null) Se = !0;
    else switch (oe) {
      case "string":
      case "number":
        Se = !0;
        break;
      case "object":
        switch (D.$$typeof) {
          case g:
          case w:
            Se = !0;
        }
    }
    if (Se) return Se = D, St = St(Se), D = Ke === "" ? "." + z(Se, 0) : Ke, Je(St) ? (Ve = "", D != null && (Ve = D.replace(Xe, "$&/") + "/"), Oe(St, M, Ve, "", function(Ht) {
      return Ht;
    })) : St != null && (nt(St) && (St = de(St, Ve + (!St.key || Se && Se.key === St.key ? "" : ("" + St.key).replace(Xe, "$&/") + "/") + D)), M.push(St)), 1;
    if (Se = 0, Ke = Ke === "" ? "." : Ke + ":", Je(D)) for (var pt = 0; pt < D.length; pt++) {
      oe = D[pt];
      var st = Ke + z(oe, pt);
      Se += Oe(oe, M, Ve, st, St);
    }
    else if (st = ve(D), typeof st == "function") for (D = st.call(D), pt = 0; !(oe = D.next()).done; ) oe = oe.value, st = Ke + z(oe, pt++), Se += Oe(oe, M, Ve, st, St);
    else if (oe === "object") throw M = String(D), Error("Objects are not valid as a React child (found: " + (M === "[object Object]" ? "object with keys {" + Object.keys(D).join(", ") + "}" : M) + "). If you meant to render a collection of children, use an array instead.");
    return Se;
  }
  function lt(D, M, Ve) {
    if (D == null) return D;
    var Ke = [], St = 0;
    return Oe(D, Ke, "", "", function(oe) {
      return M.call(Ve, oe, St++);
    }), Ke;
  }
  function ht(D) {
    if (D._status === -1) {
      var M = D._result;
      M = M(), M.then(function(Ve) {
        (D._status === 0 || D._status === -1) && (D._status = 1, D._result = Ve);
      }, function(Ve) {
        (D._status === 0 || D._status === -1) && (D._status = 2, D._result = Ve);
      }), D._status === -1 && (D._status = 0, D._result = M);
    }
    if (D._status === 1) return D._result.default;
    throw D._result;
  }
  var ke = { current: null }, ce = { transition: null }, Le = { ReactCurrentDispatcher: ke, ReactCurrentBatchConfig: ce, ReactCurrentOwner: Y };
  function ge() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Ft.Children = { map: lt, forEach: function(D, M, Ve) {
    lt(D, function() {
      M.apply(this, arguments);
    }, Ve);
  }, count: function(D) {
    var M = 0;
    return lt(D, function() {
      M++;
    }), M;
  }, toArray: function(D) {
    return lt(D, function(M) {
      return M;
    }) || [];
  }, only: function(D) {
    if (!nt(D)) throw Error("React.Children.only expected to receive a single React element child.");
    return D;
  } }, Ft.Component = Ie, Ft.Fragment = R, Ft.Profiler = K, Ft.PureComponent = _e, Ft.StrictMode = _, Ft.Suspense = F, Ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Le, Ft.act = ge, Ft.cloneElement = function(D, M, Ve) {
    if (D == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + D + ".");
    var Ke = He({}, D.props), St = D.key, oe = D.ref, Se = D._owner;
    if (M != null) {
      if (M.ref !== void 0 && (oe = M.ref, Se = Y.current), M.key !== void 0 && (St = "" + M.key), D.type && D.type.defaultProps) var pt = D.type.defaultProps;
      for (st in M) re.call(M, st) && !ae.hasOwnProperty(st) && (Ke[st] = M[st] === void 0 && pt !== void 0 ? pt[st] : M[st]);
    }
    var st = arguments.length - 2;
    if (st === 1) Ke.children = Ve;
    else if (1 < st) {
      pt = Array(st);
      for (var Ht = 0; Ht < st; Ht++) pt[Ht] = arguments[Ht + 2];
      Ke.children = pt;
    }
    return { $$typeof: g, type: D.type, key: St, ref: oe, props: Ke, _owner: Se };
  }, Ft.createContext = function(D) {
    return D = { $$typeof: S, _currentValue: D, _currentValue2: D, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, D.Provider = { $$typeof: G, _context: D }, D.Consumer = D;
  }, Ft.createElement = Me, Ft.createFactory = function(D) {
    var M = Me.bind(null, D);
    return M.type = D, M;
  }, Ft.createRef = function() {
    return { current: null };
  }, Ft.forwardRef = function(D) {
    return { $$typeof: $e, render: D };
  }, Ft.isValidElement = nt, Ft.lazy = function(D) {
    return { $$typeof: xe, _payload: { _status: -1, _result: D }, _init: ht };
  }, Ft.memo = function(D, M) {
    return { $$typeof: X, type: D, compare: M === void 0 ? null : M };
  }, Ft.startTransition = function(D) {
    var M = ce.transition;
    ce.transition = {};
    try {
      D();
    } finally {
      ce.transition = M;
    }
  }, Ft.unstable_act = ge, Ft.useCallback = function(D, M) {
    return ke.current.useCallback(D, M);
  }, Ft.useContext = function(D) {
    return ke.current.useContext(D);
  }, Ft.useDebugValue = function() {
  }, Ft.useDeferredValue = function(D) {
    return ke.current.useDeferredValue(D);
  }, Ft.useEffect = function(D, M) {
    return ke.current.useEffect(D, M);
  }, Ft.useId = function() {
    return ke.current.useId();
  }, Ft.useImperativeHandle = function(D, M, Ve) {
    return ke.current.useImperativeHandle(D, M, Ve);
  }, Ft.useInsertionEffect = function(D, M) {
    return ke.current.useInsertionEffect(D, M);
  }, Ft.useLayoutEffect = function(D, M) {
    return ke.current.useLayoutEffect(D, M);
  }, Ft.useMemo = function(D, M) {
    return ke.current.useMemo(D, M);
  }, Ft.useReducer = function(D, M, Ve) {
    return ke.current.useReducer(D, M, Ve);
  }, Ft.useRef = function(D) {
    return ke.current.useRef(D);
  }, Ft.useState = function(D) {
    return ke.current.useState(D);
  }, Ft.useSyncExternalStore = function(D, M, Ve) {
    return ke.current.useSyncExternalStore(D, M, Ve);
  }, Ft.useTransition = function() {
    return ke.current.useTransition();
  }, Ft.version = "18.3.1", Ft;
}
var av = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
av.exports;
var sE;
function gk() {
  return sE || (sE = 1, function(g, w) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var R = "18.3.1", _ = Symbol.for("react.element"), K = Symbol.for("react.portal"), G = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), $e = Symbol.for("react.profiler"), F = Symbol.for("react.provider"), X = Symbol.for("react.context"), xe = Symbol.for("react.forward_ref"), A = Symbol.for("react.suspense"), ve = Symbol.for("react.suspense_list"), fe = Symbol.for("react.memo"), He = Symbol.for("react.lazy"), ne = Symbol.for("react.offscreen"), Ie = Symbol.iterator, be = "@@iterator";
      function _e(h) {
        if (h === null || typeof h != "object")
          return null;
        var E = Ie && h[Ie] || h[be];
        return typeof E == "function" ? E : null;
      }
      var pe = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Je = {
        transition: null
      }, re = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, Y = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ae = {}, Me = null;
      function de(h) {
        Me = h;
      }
      ae.setExtraStackFrame = function(h) {
        Me = h;
      }, ae.getCurrentStack = null, ae.getStackAddendum = function() {
        var h = "";
        Me && (h += Me);
        var E = ae.getCurrentStack;
        return E && (h += E() || ""), h;
      };
      var nt = !1, et = !1, Xe = !1, z = !1, Oe = !1, lt = {
        ReactCurrentDispatcher: pe,
        ReactCurrentBatchConfig: Je,
        ReactCurrentOwner: Y
      };
      lt.ReactDebugCurrentFrame = ae, lt.ReactCurrentActQueue = re;
      function ht(h) {
        {
          for (var E = arguments.length, B = new Array(E > 1 ? E - 1 : 0), q = 1; q < E; q++)
            B[q - 1] = arguments[q];
          ce("warn", h, B);
        }
      }
      function ke(h) {
        {
          for (var E = arguments.length, B = new Array(E > 1 ? E - 1 : 0), q = 1; q < E; q++)
            B[q - 1] = arguments[q];
          ce("error", h, B);
        }
      }
      function ce(h, E, B) {
        {
          var q = lt.ReactDebugCurrentFrame, ye = q.getStackAddendum();
          ye !== "" && (E += "%s", B = B.concat([ye]));
          var ot = B.map(function(Te) {
            return String(Te);
          });
          ot.unshift("Warning: " + E), Function.prototype.apply.call(console[h], console, ot);
        }
      }
      var Le = {};
      function ge(h, E) {
        {
          var B = h.constructor, q = B && (B.displayName || B.name) || "ReactClass", ye = q + "." + E;
          if (Le[ye])
            return;
          ke("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", E, q), Le[ye] = !0;
        }
      }
      var D = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(h) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(h, E, B) {
          ge(h, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(h, E, B, q) {
          ge(h, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(h, E, B, q) {
          ge(h, "setState");
        }
      }, M = Object.assign, Ve = {};
      Object.freeze(Ve);
      function Ke(h, E, B) {
        this.props = h, this.context = E, this.refs = Ve, this.updater = B || D;
      }
      Ke.prototype.isReactComponent = {}, Ke.prototype.setState = function(h, E) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, E, "setState");
      }, Ke.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var St = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, oe = function(h, E) {
          Object.defineProperty(Ke.prototype, h, {
            get: function() {
              ht("%s(...) is deprecated in plain JavaScript React classes. %s", E[0], E[1]);
            }
          });
        };
        for (var Se in St)
          St.hasOwnProperty(Se) && oe(Se, St[Se]);
      }
      function pt() {
      }
      pt.prototype = Ke.prototype;
      function st(h, E, B) {
        this.props = h, this.context = E, this.refs = Ve, this.updater = B || D;
      }
      var Ht = st.prototype = new pt();
      Ht.constructor = st, M(Ht, Ke.prototype), Ht.isPureReactComponent = !0;
      function on() {
        var h = {
          current: null
        };
        return Object.seal(h), h;
      }
      var mr = Array.isArray;
      function En(h) {
        return mr(h);
      }
      function er(h) {
        {
          var E = typeof Symbol == "function" && Symbol.toStringTag, B = E && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return B;
        }
      }
      function zn(h) {
        try {
          return nn(h), !1;
        } catch {
          return !0;
        }
      }
      function nn(h) {
        return "" + h;
      }
      function Dn(h) {
        if (zn(h))
          return ke("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", er(h)), nn(h);
      }
      function Oa(h, E, B) {
        var q = h.displayName;
        if (q)
          return q;
        var ye = E.displayName || E.name || "";
        return ye !== "" ? B + "(" + ye + ")" : B;
      }
      function Lr(h) {
        return h.displayName || "Context";
      }
      function $n(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && ke("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case G:
            return "Fragment";
          case K:
            return "Portal";
          case $e:
            return "Profiler";
          case S:
            return "StrictMode";
          case A:
            return "Suspense";
          case ve:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case X:
              var E = h;
              return Lr(E) + ".Consumer";
            case F:
              var B = h;
              return Lr(B._context) + ".Provider";
            case xe:
              return Oa(h, h.render, "ForwardRef");
            case fe:
              var q = h.displayName || null;
              return q !== null ? q : $n(h.type) || "Memo";
            case He: {
              var ye = h, ot = ye._payload, Te = ye._init;
              try {
                return $n(Te(ot));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var wn = Object.prototype.hasOwnProperty, jn = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, or, ga, On;
      On = {};
      function ur(h) {
        if (wn.call(h, "ref")) {
          var E = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (E && E.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function In(h) {
        if (wn.call(h, "key")) {
          var E = Object.getOwnPropertyDescriptor(h, "key").get;
          if (E && E.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function Ar(h, E) {
        var B = function() {
          or || (or = !0, ke("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", E));
        };
        B.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: B,
          configurable: !0
        });
      }
      function Sa(h, E) {
        var B = function() {
          ga || (ga = !0, ke("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", E));
        };
        B.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: B,
          configurable: !0
        });
      }
      function Ce(h) {
        if (typeof h.ref == "string" && Y.current && h.__self && Y.current.stateNode !== h.__self) {
          var E = $n(Y.current.type);
          On[E] || (ke('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', E, h.ref), On[E] = !0);
        }
      }
      var We = function(h, E, B, q, ye, ot, Te) {
        var ft = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: _,
          // Built-in properties that belong on the element
          type: h,
          key: E,
          ref: B,
          props: Te,
          // Record the component responsible for creating this element.
          _owner: ot
        };
        return ft._store = {}, Object.defineProperty(ft._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(ft, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: q
        }), Object.defineProperty(ft, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: ye
        }), Object.freeze && (Object.freeze(ft.props), Object.freeze(ft)), ft;
      };
      function Rt(h, E, B) {
        var q, ye = {}, ot = null, Te = null, ft = null, Lt = null;
        if (E != null) {
          ur(E) && (Te = E.ref, Ce(E)), In(E) && (Dn(E.key), ot = "" + E.key), ft = E.__self === void 0 ? null : E.__self, Lt = E.__source === void 0 ? null : E.__source;
          for (q in E)
            wn.call(E, q) && !jn.hasOwnProperty(q) && (ye[q] = E[q]);
        }
        var qt = arguments.length - 2;
        if (qt === 1)
          ye.children = B;
        else if (qt > 1) {
          for (var hn = Array(qt), sn = 0; sn < qt; sn++)
            hn[sn] = arguments[sn + 2];
          Object.freeze && Object.freeze(hn), ye.children = hn;
        }
        if (h && h.defaultProps) {
          var kt = h.defaultProps;
          for (q in kt)
            ye[q] === void 0 && (ye[q] = kt[q]);
        }
        if (ot || Te) {
          var cn = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          ot && Ar(ye, cn), Te && Sa(ye, cn);
        }
        return We(h, ot, Te, ft, Lt, Y.current, ye);
      }
      function Gt(h, E) {
        var B = We(h.type, E, h.ref, h._self, h._source, h._owner, h.props);
        return B;
      }
      function Z(h, E, B) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var q, ye = M({}, h.props), ot = h.key, Te = h.ref, ft = h._self, Lt = h._source, qt = h._owner;
        if (E != null) {
          ur(E) && (Te = E.ref, qt = Y.current), In(E) && (Dn(E.key), ot = "" + E.key);
          var hn;
          h.type && h.type.defaultProps && (hn = h.type.defaultProps);
          for (q in E)
            wn.call(E, q) && !jn.hasOwnProperty(q) && (E[q] === void 0 && hn !== void 0 ? ye[q] = hn[q] : ye[q] = E[q]);
        }
        var sn = arguments.length - 2;
        if (sn === 1)
          ye.children = B;
        else if (sn > 1) {
          for (var kt = Array(sn), cn = 0; cn < sn; cn++)
            kt[cn] = arguments[cn + 2];
          ye.children = kt;
        }
        return We(h.type, ot, Te, ft, Lt, qt, ye);
      }
      function Ee(h) {
        return typeof h == "object" && h !== null && h.$$typeof === _;
      }
      var we = ".", Pt = ":";
      function jt(h) {
        var E = /[=:]/g, B = {
          "=": "=0",
          ":": "=2"
        }, q = h.replace(E, function(ye) {
          return B[ye];
        });
        return "$" + q;
      }
      var At = !1, Ot = /\/+/g;
      function rn(h) {
        return h.replace(Ot, "$&/");
      }
      function Mt(h, E) {
        return typeof h == "object" && h !== null && h.key != null ? (Dn(h.key), jt("" + h.key)) : E.toString(36);
      }
      function Ln(h, E, B, q, ye) {
        var ot = typeof h;
        (ot === "undefined" || ot === "boolean") && (h = null);
        var Te = !1;
        if (h === null)
          Te = !0;
        else
          switch (ot) {
            case "string":
            case "number":
              Te = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case _:
                case K:
                  Te = !0;
              }
          }
        if (Te) {
          var ft = h, Lt = ye(ft), qt = q === "" ? we + Mt(ft, 0) : q;
          if (En(Lt)) {
            var hn = "";
            qt != null && (hn = rn(qt) + "/"), Ln(Lt, E, hn, "", function(ed) {
              return ed;
            });
          } else Lt != null && (Ee(Lt) && (Lt.key && (!ft || ft.key !== Lt.key) && Dn(Lt.key), Lt = Gt(
            Lt,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            B + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (Lt.key && (!ft || ft.key !== Lt.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              rn("" + Lt.key) + "/"
            ) : "") + qt
          )), E.push(Lt));
          return 1;
        }
        var sn, kt, cn = 0, Rn = q === "" ? we : q + Pt;
        if (En(h))
          for (var Rl = 0; Rl < h.length; Rl++)
            sn = h[Rl], kt = Rn + Mt(sn, Rl), cn += Ln(sn, E, B, kt, ye);
        else {
          var es = _e(h);
          if (typeof es == "function") {
            var Yi = h;
            es === Yi.entries && (At || ht("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), At = !0);
            for (var ts = es.call(Yi), po, Zf = 0; !(po = ts.next()).done; )
              sn = po.value, kt = Rn + Mt(sn, Zf++), cn += Ln(sn, E, B, kt, ye);
          } else if (ot === "object") {
            var pc = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (pc === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : pc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return cn;
      }
      function sr(h, E, B) {
        if (h == null)
          return h;
        var q = [], ye = 0;
        return Ln(h, q, "", "", function(ot) {
          return E.call(B, ot, ye++);
        }), q;
      }
      function ro(h) {
        var E = 0;
        return sr(h, function() {
          E++;
        }), E;
      }
      function ao(h, E, B) {
        sr(h, function() {
          E.apply(this, arguments);
        }, B);
      }
      function hl(h) {
        return sr(h, function(E) {
          return E;
        }) || [];
      }
      function yl(h) {
        if (!Ee(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function io(h) {
        var E = {
          $$typeof: X,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: h,
          _currentValue2: h,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        E.Provider = {
          $$typeof: F,
          _context: E
        };
        var B = !1, q = !1, ye = !1;
        {
          var ot = {
            $$typeof: X,
            _context: E
          };
          Object.defineProperties(ot, {
            Provider: {
              get: function() {
                return q || (q = !0, ke("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), E.Provider;
              },
              set: function(Te) {
                E.Provider = Te;
              }
            },
            _currentValue: {
              get: function() {
                return E._currentValue;
              },
              set: function(Te) {
                E._currentValue = Te;
              }
            },
            _currentValue2: {
              get: function() {
                return E._currentValue2;
              },
              set: function(Te) {
                E._currentValue2 = Te;
              }
            },
            _threadCount: {
              get: function() {
                return E._threadCount;
              },
              set: function(Te) {
                E._threadCount = Te;
              }
            },
            Consumer: {
              get: function() {
                return B || (B = !0, ke("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), E.Consumer;
              }
            },
            displayName: {
              get: function() {
                return E.displayName;
              },
              set: function(Te) {
                ye || (ht("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", Te), ye = !0);
              }
            }
          }), E.Consumer = ot;
        }
        return E._currentRenderer = null, E._currentRenderer2 = null, E;
      }
      var Ur = -1, Pr = 0, hr = 1, hi = 2;
      function Za(h) {
        if (h._status === Ur) {
          var E = h._result, B = E();
          if (B.then(function(ot) {
            if (h._status === Pr || h._status === Ur) {
              var Te = h;
              Te._status = hr, Te._result = ot;
            }
          }, function(ot) {
            if (h._status === Pr || h._status === Ur) {
              var Te = h;
              Te._status = hi, Te._result = ot;
            }
          }), h._status === Ur) {
            var q = h;
            q._status = Pr, q._result = B;
          }
        }
        if (h._status === hr) {
          var ye = h._result;
          return ye === void 0 && ke(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, ye), "default" in ye || ke(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, ye), ye.default;
        } else
          throw h._result;
      }
      function yi(h) {
        var E = {
          // We use these fields to store the result.
          _status: Ur,
          _result: h
        }, B = {
          $$typeof: He,
          _payload: E,
          _init: Za
        };
        {
          var q, ye;
          Object.defineProperties(B, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return q;
              },
              set: function(ot) {
                ke("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), q = ot, Object.defineProperty(B, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return ye;
              },
              set: function(ot) {
                ke("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), ye = ot, Object.defineProperty(B, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return B;
      }
      function gi(h) {
        h != null && h.$$typeof === fe ? ke("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? ke("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && ke("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && ke("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var E = {
          $$typeof: xe,
          render: h
        };
        {
          var B;
          Object.defineProperty(E, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return B;
            },
            set: function(q) {
              B = q, !h.name && !h.displayName && (h.displayName = q);
            }
          });
        }
        return E;
      }
      var T;
      T = Symbol.for("react.module.reference");
      function te(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === G || h === $e || Oe || h === S || h === A || h === ve || z || h === ne || nt || et || Xe || typeof h == "object" && h !== null && (h.$$typeof === He || h.$$typeof === fe || h.$$typeof === F || h.$$typeof === X || h.$$typeof === xe || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === T || h.getModuleId !== void 0));
      }
      function Ne(h, E) {
        te(h) || ke("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var B = {
          $$typeof: fe,
          type: h,
          compare: E === void 0 ? null : E
        };
        {
          var q;
          Object.defineProperty(B, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return q;
            },
            set: function(ye) {
              q = ye, !h.name && !h.displayName && (h.displayName = ye);
            }
          });
        }
        return B;
      }
      function Be() {
        var h = pe.current;
        return h === null && ke(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function Et(h) {
        var E = Be();
        if (h._context !== void 0) {
          var B = h._context;
          B.Consumer === h ? ke("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : B.Provider === h && ke("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return E.useContext(h);
      }
      function Ct(h) {
        var E = Be();
        return E.useState(h);
      }
      function zt(h, E, B) {
        var q = Be();
        return q.useReducer(h, E, B);
      }
      function Nt(h) {
        var E = Be();
        return E.useRef(h);
      }
      function An(h, E) {
        var B = Be();
        return B.useEffect(h, E);
      }
      function mn(h, E) {
        var B = Be();
        return B.useInsertionEffect(h, E);
      }
      function gn(h, E) {
        var B = Be();
        return B.useLayoutEffect(h, E);
      }
      function yr(h, E) {
        var B = Be();
        return B.useCallback(h, E);
      }
      function ei(h, E) {
        var B = Be();
        return B.useMemo(h, E);
      }
      function ti(h, E, B) {
        var q = Be();
        return q.useImperativeHandle(h, E, B);
      }
      function wt(h, E) {
        {
          var B = Be();
          return B.useDebugValue(h, E);
        }
      }
      function _t() {
        var h = Be();
        return h.useTransition();
      }
      function ni(h) {
        var E = Be();
        return E.useDeferredValue(h);
      }
      function lo() {
        var h = Be();
        return h.useId();
      }
      function oo(h, E, B) {
        var q = Be();
        return q.useSyncExternalStore(h, E, B);
      }
      var gl = 0, Zo, Sl, ta, Xu, Fr, fc, dc;
      function eu() {
      }
      eu.__reactDisabledLog = !0;
      function Cl() {
        {
          if (gl === 0) {
            Zo = console.log, Sl = console.info, ta = console.warn, Xu = console.error, Fr = console.group, fc = console.groupCollapsed, dc = console.groupEnd;
            var h = {
              configurable: !0,
              enumerable: !0,
              value: eu,
              writable: !0
            };
            Object.defineProperties(console, {
              info: h,
              log: h,
              warn: h,
              error: h,
              group: h,
              groupCollapsed: h,
              groupEnd: h
            });
          }
          gl++;
        }
      }
      function Ca() {
        {
          if (gl--, gl === 0) {
            var h = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: M({}, h, {
                value: Zo
              }),
              info: M({}, h, {
                value: Sl
              }),
              warn: M({}, h, {
                value: ta
              }),
              error: M({}, h, {
                value: Xu
              }),
              group: M({}, h, {
                value: Fr
              }),
              groupCollapsed: M({}, h, {
                value: fc
              }),
              groupEnd: M({}, h, {
                value: dc
              })
            });
          }
          gl < 0 && ke("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var ri = lt.ReactCurrentDispatcher, ai;
      function tu(h, E, B) {
        {
          if (ai === void 0)
            try {
              throw Error();
            } catch (ye) {
              var q = ye.stack.trim().match(/\n( *(at )?)/);
              ai = q && q[1] || "";
            }
          return `
` + ai + h;
        }
      }
      var uo = !1, xl;
      {
        var nu = typeof WeakMap == "function" ? WeakMap : Map;
        xl = new nu();
      }
      function ru(h, E) {
        if (!h || uo)
          return "";
        {
          var B = xl.get(h);
          if (B !== void 0)
            return B;
        }
        var q;
        uo = !0;
        var ye = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var ot;
        ot = ri.current, ri.current = null, Cl();
        try {
          if (E) {
            var Te = function() {
              throw Error();
            };
            if (Object.defineProperty(Te.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(Te, []);
              } catch (Rn) {
                q = Rn;
              }
              Reflect.construct(h, [], Te);
            } else {
              try {
                Te.call();
              } catch (Rn) {
                q = Rn;
              }
              h.call(Te.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Rn) {
              q = Rn;
            }
            h();
          }
        } catch (Rn) {
          if (Rn && q && typeof Rn.stack == "string") {
            for (var ft = Rn.stack.split(`
`), Lt = q.stack.split(`
`), qt = ft.length - 1, hn = Lt.length - 1; qt >= 1 && hn >= 0 && ft[qt] !== Lt[hn]; )
              hn--;
            for (; qt >= 1 && hn >= 0; qt--, hn--)
              if (ft[qt] !== Lt[hn]) {
                if (qt !== 1 || hn !== 1)
                  do
                    if (qt--, hn--, hn < 0 || ft[qt] !== Lt[hn]) {
                      var sn = `
` + ft[qt].replace(" at new ", " at ");
                      return h.displayName && sn.includes("<anonymous>") && (sn = sn.replace("<anonymous>", h.displayName)), typeof h == "function" && xl.set(h, sn), sn;
                    }
                  while (qt >= 1 && hn >= 0);
                break;
              }
          }
        } finally {
          uo = !1, ri.current = ot, Ca(), Error.prepareStackTrace = ye;
        }
        var kt = h ? h.displayName || h.name : "", cn = kt ? tu(kt) : "";
        return typeof h == "function" && xl.set(h, cn), cn;
      }
      function $i(h, E, B) {
        return ru(h, !1);
      }
      function Kf(h) {
        var E = h.prototype;
        return !!(E && E.isReactComponent);
      }
      function Ii(h, E, B) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return ru(h, Kf(h));
        if (typeof h == "string")
          return tu(h);
        switch (h) {
          case A:
            return tu("Suspense");
          case ve:
            return tu("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case xe:
              return $i(h.render);
            case fe:
              return Ii(h.type, E, B);
            case He: {
              var q = h, ye = q._payload, ot = q._init;
              try {
                return Ii(ot(ye), E, B);
              } catch {
              }
            }
          }
        return "";
      }
      var Qt = {}, au = lt.ReactDebugCurrentFrame;
      function Yt(h) {
        if (h) {
          var E = h._owner, B = Ii(h.type, h._source, E ? E.type : null);
          au.setExtraStackFrame(B);
        } else
          au.setExtraStackFrame(null);
      }
      function Ku(h, E, B, q, ye) {
        {
          var ot = Function.call.bind(wn);
          for (var Te in h)
            if (ot(h, Te)) {
              var ft = void 0;
              try {
                if (typeof h[Te] != "function") {
                  var Lt = Error((q || "React class") + ": " + B + " type `" + Te + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[Te] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw Lt.name = "Invariant Violation", Lt;
                }
                ft = h[Te](E, Te, q, B, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (qt) {
                ft = qt;
              }
              ft && !(ft instanceof Error) && (Yt(ye), ke("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", q || "React class", B, Te, typeof ft), Yt(null)), ft instanceof Error && !(ft.message in Qt) && (Qt[ft.message] = !0, Yt(ye), ke("Failed %s type: %s", B, ft.message), Yt(null));
            }
        }
      }
      function Si(h) {
        if (h) {
          var E = h._owner, B = Ii(h.type, h._source, E ? E.type : null);
          de(B);
        } else
          de(null);
      }
      var gt;
      gt = !1;
      function iu() {
        if (Y.current) {
          var h = $n(Y.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function gr(h) {
        if (h !== void 0) {
          var E = h.fileName.replace(/^.*[\\\/]/, ""), B = h.lineNumber;
          return `

Check your code at ` + E + ":" + B + ".";
        }
        return "";
      }
      function Ci(h) {
        return h != null ? gr(h.__source) : "";
      }
      var Hr = {};
      function xi(h) {
        var E = iu();
        if (!E) {
          var B = typeof h == "string" ? h : h.displayName || h.name;
          B && (E = `

Check the top-level render call using <` + B + ">.");
        }
        return E;
      }
      function Sn(h, E) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var B = xi(E);
          if (!Hr[B]) {
            Hr[B] = !0;
            var q = "";
            h && h._owner && h._owner !== Y.current && (q = " It was passed a child from " + $n(h._owner.type) + "."), Si(h), ke('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', B, q), Si(null);
          }
        }
      }
      function un(h, E) {
        if (typeof h == "object") {
          if (En(h))
            for (var B = 0; B < h.length; B++) {
              var q = h[B];
              Ee(q) && Sn(q, E);
            }
          else if (Ee(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var ye = _e(h);
            if (typeof ye == "function" && ye !== h.entries)
              for (var ot = ye.call(h), Te; !(Te = ot.next()).done; )
                Ee(Te.value) && Sn(Te.value, E);
          }
        }
      }
      function bl(h) {
        {
          var E = h.type;
          if (E == null || typeof E == "string")
            return;
          var B;
          if (typeof E == "function")
            B = E.propTypes;
          else if (typeof E == "object" && (E.$$typeof === xe || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          E.$$typeof === fe))
            B = E.propTypes;
          else
            return;
          if (B) {
            var q = $n(E);
            Ku(B, h.props, "prop", q, h);
          } else if (E.PropTypes !== void 0 && !gt) {
            gt = !0;
            var ye = $n(E);
            ke("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ye || "Unknown");
          }
          typeof E.getDefaultProps == "function" && !E.getDefaultProps.isReactClassApproved && ke("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function tr(h) {
        {
          for (var E = Object.keys(h.props), B = 0; B < E.length; B++) {
            var q = E[B];
            if (q !== "children" && q !== "key") {
              Si(h), ke("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", q), Si(null);
              break;
            }
          }
          h.ref !== null && (Si(h), ke("Invalid attribute `ref` supplied to `React.Fragment`."), Si(null));
        }
      }
      function Vr(h, E, B) {
        var q = te(h);
        if (!q) {
          var ye = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (ye += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ot = Ci(E);
          ot ? ye += ot : ye += iu();
          var Te;
          h === null ? Te = "null" : En(h) ? Te = "array" : h !== void 0 && h.$$typeof === _ ? (Te = "<" + ($n(h.type) || "Unknown") + " />", ye = " Did you accidentally export a JSX literal instead of a component?") : Te = typeof h, ke("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Te, ye);
        }
        var ft = Rt.apply(this, arguments);
        if (ft == null)
          return ft;
        if (q)
          for (var Lt = 2; Lt < arguments.length; Lt++)
            un(arguments[Lt], h);
        return h === G ? tr(ft) : bl(ft), ft;
      }
      var Ma = !1;
      function so(h) {
        var E = Vr.bind(null, h);
        return E.type = h, Ma || (Ma = !0, ht("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(E, "type", {
          enumerable: !1,
          get: function() {
            return ht("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), E;
      }
      function Ju(h, E, B) {
        for (var q = Z.apply(this, arguments), ye = 2; ye < arguments.length; ye++)
          un(arguments[ye], q.type);
        return bl(q), q;
      }
      function Zu(h, E) {
        var B = Je.transition;
        Je.transition = {};
        var q = Je.transition;
        Je.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (Je.transition = B, B === null && q._updatedFibers) {
            var ye = q._updatedFibers.size;
            ye > 10 && ht("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), q._updatedFibers.clear();
          }
        }
      }
      var El = !1, co = null;
      function Jf(h) {
        if (co === null)
          try {
            var E = ("require" + Math.random()).slice(0, 7), B = g && g[E];
            co = B.call(g, "timers").setImmediate;
          } catch {
            co = function(ye) {
              El === !1 && (El = !0, typeof MessageChannel > "u" && ke("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var ot = new MessageChannel();
              ot.port1.onmessage = ye, ot.port2.postMessage(void 0);
            };
          }
        return co(h);
      }
      var za = 0, ii = !1;
      function bi(h) {
        {
          var E = za;
          za++, re.current === null && (re.current = []);
          var B = re.isBatchingLegacy, q;
          try {
            if (re.isBatchingLegacy = !0, q = h(), !B && re.didScheduleLegacyUpdate) {
              var ye = re.current;
              ye !== null && (re.didScheduleLegacyUpdate = !1, wl(ye));
            }
          } catch (kt) {
            throw La(E), kt;
          } finally {
            re.isBatchingLegacy = B;
          }
          if (q !== null && typeof q == "object" && typeof q.then == "function") {
            var ot = q, Te = !1, ft = {
              then: function(kt, cn) {
                Te = !0, ot.then(function(Rn) {
                  La(E), za === 0 ? lu(Rn, kt, cn) : kt(Rn);
                }, function(Rn) {
                  La(E), cn(Rn);
                });
              }
            };
            return !ii && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              Te || (ii = !0, ke("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), ft;
          } else {
            var Lt = q;
            if (La(E), za === 0) {
              var qt = re.current;
              qt !== null && (wl(qt), re.current = null);
              var hn = {
                then: function(kt, cn) {
                  re.current === null ? (re.current = [], lu(Lt, kt, cn)) : kt(Lt);
                }
              };
              return hn;
            } else {
              var sn = {
                then: function(kt, cn) {
                  kt(Lt);
                }
              };
              return sn;
            }
          }
        }
      }
      function La(h) {
        h !== za - 1 && ke("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), za = h;
      }
      function lu(h, E, B) {
        {
          var q = re.current;
          if (q !== null)
            try {
              wl(q), Jf(function() {
                q.length === 0 ? (re.current = null, E(h)) : lu(h, E, B);
              });
            } catch (ye) {
              B(ye);
            }
          else
            E(h);
        }
      }
      var ou = !1;
      function wl(h) {
        if (!ou) {
          ou = !0;
          var E = 0;
          try {
            for (; E < h.length; E++) {
              var B = h[E];
              do
                B = B(!0);
              while (B !== null);
            }
            h.length = 0;
          } catch (q) {
            throw h = h.slice(E + 1), q;
          } finally {
            ou = !1;
          }
        }
      }
      var fo = Vr, uu = Ju, su = so, li = {
        map: sr,
        forEach: ao,
        count: ro,
        toArray: hl,
        only: yl
      };
      w.Children = li, w.Component = Ke, w.Fragment = G, w.Profiler = $e, w.PureComponent = st, w.StrictMode = S, w.Suspense = A, w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lt, w.act = bi, w.cloneElement = uu, w.createContext = io, w.createElement = fo, w.createFactory = su, w.createRef = on, w.forwardRef = gi, w.isValidElement = Ee, w.lazy = yi, w.memo = Ne, w.startTransition = Zu, w.unstable_act = bi, w.useCallback = yr, w.useContext = Et, w.useDebugValue = wt, w.useDeferredValue = ni, w.useEffect = An, w.useId = lo, w.useImperativeHandle = ti, w.useInsertionEffect = mn, w.useLayoutEffect = gn, w.useMemo = ei, w.useReducer = zt, w.useRef = Nt, w.useState = Ct, w.useSyncExternalStore = oo, w.useTransition = _t, w.version = R, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(av, av.exports)), av.exports;
}
var cE;
function ov() {
  return cE || (cE = 1, process.env.NODE_ENV === "production" ? Zh.exports = yk() : Zh.exports = gk()), Zh.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fE;
function Sk() {
  if (fE) return nv;
  fE = 1;
  var g = ov(), w = Symbol.for("react.element"), R = Symbol.for("react.fragment"), _ = Object.prototype.hasOwnProperty, K = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, G = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S($e, F, X) {
    var xe, A = {}, ve = null, fe = null;
    X !== void 0 && (ve = "" + X), F.key !== void 0 && (ve = "" + F.key), F.ref !== void 0 && (fe = F.ref);
    for (xe in F) _.call(F, xe) && !G.hasOwnProperty(xe) && (A[xe] = F[xe]);
    if ($e && $e.defaultProps) for (xe in F = $e.defaultProps, F) A[xe] === void 0 && (A[xe] = F[xe]);
    return { $$typeof: w, type: $e, key: ve, ref: fe, props: A, _owner: K.current };
  }
  return nv.Fragment = R, nv.jsx = S, nv.jsxs = S, nv;
}
var rv = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dE;
function Ck() {
  return dE || (dE = 1, process.env.NODE_ENV !== "production" && function() {
    var g = ov(), w = Symbol.for("react.element"), R = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), K = Symbol.for("react.strict_mode"), G = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), $e = Symbol.for("react.context"), F = Symbol.for("react.forward_ref"), X = Symbol.for("react.suspense"), xe = Symbol.for("react.suspense_list"), A = Symbol.for("react.memo"), ve = Symbol.for("react.lazy"), fe = Symbol.for("react.offscreen"), He = Symbol.iterator, ne = "@@iterator";
    function Ie(T) {
      if (T === null || typeof T != "object")
        return null;
      var te = He && T[He] || T[ne];
      return typeof te == "function" ? te : null;
    }
    var be = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function _e(T) {
      {
        for (var te = arguments.length, Ne = new Array(te > 1 ? te - 1 : 0), Be = 1; Be < te; Be++)
          Ne[Be - 1] = arguments[Be];
        pe("error", T, Ne);
      }
    }
    function pe(T, te, Ne) {
      {
        var Be = be.ReactDebugCurrentFrame, Et = Be.getStackAddendum();
        Et !== "" && (te += "%s", Ne = Ne.concat([Et]));
        var Ct = Ne.map(function(zt) {
          return String(zt);
        });
        Ct.unshift("Warning: " + te), Function.prototype.apply.call(console[T], console, Ct);
      }
    }
    var Je = !1, re = !1, Y = !1, ae = !1, Me = !1, de;
    de = Symbol.for("react.module.reference");
    function nt(T) {
      return !!(typeof T == "string" || typeof T == "function" || T === _ || T === G || Me || T === K || T === X || T === xe || ae || T === fe || Je || re || Y || typeof T == "object" && T !== null && (T.$$typeof === ve || T.$$typeof === A || T.$$typeof === S || T.$$typeof === $e || T.$$typeof === F || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      T.$$typeof === de || T.getModuleId !== void 0));
    }
    function et(T, te, Ne) {
      var Be = T.displayName;
      if (Be)
        return Be;
      var Et = te.displayName || te.name || "";
      return Et !== "" ? Ne + "(" + Et + ")" : Ne;
    }
    function Xe(T) {
      return T.displayName || "Context";
    }
    function z(T) {
      if (T == null)
        return null;
      if (typeof T.tag == "number" && _e("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof T == "function")
        return T.displayName || T.name || null;
      if (typeof T == "string")
        return T;
      switch (T) {
        case _:
          return "Fragment";
        case R:
          return "Portal";
        case G:
          return "Profiler";
        case K:
          return "StrictMode";
        case X:
          return "Suspense";
        case xe:
          return "SuspenseList";
      }
      if (typeof T == "object")
        switch (T.$$typeof) {
          case $e:
            var te = T;
            return Xe(te) + ".Consumer";
          case S:
            var Ne = T;
            return Xe(Ne._context) + ".Provider";
          case F:
            return et(T, T.render, "ForwardRef");
          case A:
            var Be = T.displayName || null;
            return Be !== null ? Be : z(T.type) || "Memo";
          case ve: {
            var Et = T, Ct = Et._payload, zt = Et._init;
            try {
              return z(zt(Ct));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Oe = Object.assign, lt = 0, ht, ke, ce, Le, ge, D, M;
    function Ve() {
    }
    Ve.__reactDisabledLog = !0;
    function Ke() {
      {
        if (lt === 0) {
          ht = console.log, ke = console.info, ce = console.warn, Le = console.error, ge = console.group, D = console.groupCollapsed, M = console.groupEnd;
          var T = {
            configurable: !0,
            enumerable: !0,
            value: Ve,
            writable: !0
          };
          Object.defineProperties(console, {
            info: T,
            log: T,
            warn: T,
            error: T,
            group: T,
            groupCollapsed: T,
            groupEnd: T
          });
        }
        lt++;
      }
    }
    function St() {
      {
        if (lt--, lt === 0) {
          var T = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Oe({}, T, {
              value: ht
            }),
            info: Oe({}, T, {
              value: ke
            }),
            warn: Oe({}, T, {
              value: ce
            }),
            error: Oe({}, T, {
              value: Le
            }),
            group: Oe({}, T, {
              value: ge
            }),
            groupCollapsed: Oe({}, T, {
              value: D
            }),
            groupEnd: Oe({}, T, {
              value: M
            })
          });
        }
        lt < 0 && _e("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var oe = be.ReactCurrentDispatcher, Se;
    function pt(T, te, Ne) {
      {
        if (Se === void 0)
          try {
            throw Error();
          } catch (Et) {
            var Be = Et.stack.trim().match(/\n( *(at )?)/);
            Se = Be && Be[1] || "";
          }
        return `
` + Se + T;
      }
    }
    var st = !1, Ht;
    {
      var on = typeof WeakMap == "function" ? WeakMap : Map;
      Ht = new on();
    }
    function mr(T, te) {
      if (!T || st)
        return "";
      {
        var Ne = Ht.get(T);
        if (Ne !== void 0)
          return Ne;
      }
      var Be;
      st = !0;
      var Et = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ct;
      Ct = oe.current, oe.current = null, Ke();
      try {
        if (te) {
          var zt = function() {
            throw Error();
          };
          if (Object.defineProperty(zt.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(zt, []);
            } catch (wt) {
              Be = wt;
            }
            Reflect.construct(T, [], zt);
          } else {
            try {
              zt.call();
            } catch (wt) {
              Be = wt;
            }
            T.call(zt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (wt) {
            Be = wt;
          }
          T();
        }
      } catch (wt) {
        if (wt && Be && typeof wt.stack == "string") {
          for (var Nt = wt.stack.split(`
`), An = Be.stack.split(`
`), mn = Nt.length - 1, gn = An.length - 1; mn >= 1 && gn >= 0 && Nt[mn] !== An[gn]; )
            gn--;
          for (; mn >= 1 && gn >= 0; mn--, gn--)
            if (Nt[mn] !== An[gn]) {
              if (mn !== 1 || gn !== 1)
                do
                  if (mn--, gn--, gn < 0 || Nt[mn] !== An[gn]) {
                    var yr = `
` + Nt[mn].replace(" at new ", " at ");
                    return T.displayName && yr.includes("<anonymous>") && (yr = yr.replace("<anonymous>", T.displayName)), typeof T == "function" && Ht.set(T, yr), yr;
                  }
                while (mn >= 1 && gn >= 0);
              break;
            }
        }
      } finally {
        st = !1, oe.current = Ct, St(), Error.prepareStackTrace = Et;
      }
      var ei = T ? T.displayName || T.name : "", ti = ei ? pt(ei) : "";
      return typeof T == "function" && Ht.set(T, ti), ti;
    }
    function En(T, te, Ne) {
      return mr(T, !1);
    }
    function er(T) {
      var te = T.prototype;
      return !!(te && te.isReactComponent);
    }
    function zn(T, te, Ne) {
      if (T == null)
        return "";
      if (typeof T == "function")
        return mr(T, er(T));
      if (typeof T == "string")
        return pt(T);
      switch (T) {
        case X:
          return pt("Suspense");
        case xe:
          return pt("SuspenseList");
      }
      if (typeof T == "object")
        switch (T.$$typeof) {
          case F:
            return En(T.render);
          case A:
            return zn(T.type, te, Ne);
          case ve: {
            var Be = T, Et = Be._payload, Ct = Be._init;
            try {
              return zn(Ct(Et), te, Ne);
            } catch {
            }
          }
        }
      return "";
    }
    var nn = Object.prototype.hasOwnProperty, Dn = {}, Oa = be.ReactDebugCurrentFrame;
    function Lr(T) {
      if (T) {
        var te = T._owner, Ne = zn(T.type, T._source, te ? te.type : null);
        Oa.setExtraStackFrame(Ne);
      } else
        Oa.setExtraStackFrame(null);
    }
    function $n(T, te, Ne, Be, Et) {
      {
        var Ct = Function.call.bind(nn);
        for (var zt in T)
          if (Ct(T, zt)) {
            var Nt = void 0;
            try {
              if (typeof T[zt] != "function") {
                var An = Error((Be || "React class") + ": " + Ne + " type `" + zt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof T[zt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw An.name = "Invariant Violation", An;
              }
              Nt = T[zt](te, zt, Be, Ne, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (mn) {
              Nt = mn;
            }
            Nt && !(Nt instanceof Error) && (Lr(Et), _e("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Be || "React class", Ne, zt, typeof Nt), Lr(null)), Nt instanceof Error && !(Nt.message in Dn) && (Dn[Nt.message] = !0, Lr(Et), _e("Failed %s type: %s", Ne, Nt.message), Lr(null));
          }
      }
    }
    var wn = Array.isArray;
    function jn(T) {
      return wn(T);
    }
    function or(T) {
      {
        var te = typeof Symbol == "function" && Symbol.toStringTag, Ne = te && T[Symbol.toStringTag] || T.constructor.name || "Object";
        return Ne;
      }
    }
    function ga(T) {
      try {
        return On(T), !1;
      } catch {
        return !0;
      }
    }
    function On(T) {
      return "" + T;
    }
    function ur(T) {
      if (ga(T))
        return _e("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", or(T)), On(T);
    }
    var In = be.ReactCurrentOwner, Ar = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Sa, Ce;
    function We(T) {
      if (nn.call(T, "ref")) {
        var te = Object.getOwnPropertyDescriptor(T, "ref").get;
        if (te && te.isReactWarning)
          return !1;
      }
      return T.ref !== void 0;
    }
    function Rt(T) {
      if (nn.call(T, "key")) {
        var te = Object.getOwnPropertyDescriptor(T, "key").get;
        if (te && te.isReactWarning)
          return !1;
      }
      return T.key !== void 0;
    }
    function Gt(T, te) {
      typeof T.ref == "string" && In.current;
    }
    function Z(T, te) {
      {
        var Ne = function() {
          Sa || (Sa = !0, _e("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", te));
        };
        Ne.isReactWarning = !0, Object.defineProperty(T, "key", {
          get: Ne,
          configurable: !0
        });
      }
    }
    function Ee(T, te) {
      {
        var Ne = function() {
          Ce || (Ce = !0, _e("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", te));
        };
        Ne.isReactWarning = !0, Object.defineProperty(T, "ref", {
          get: Ne,
          configurable: !0
        });
      }
    }
    var we = function(T, te, Ne, Be, Et, Ct, zt) {
      var Nt = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: w,
        // Built-in properties that belong on the element
        type: T,
        key: te,
        ref: Ne,
        props: zt,
        // Record the component responsible for creating this element.
        _owner: Ct
      };
      return Nt._store = {}, Object.defineProperty(Nt._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Nt, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Be
      }), Object.defineProperty(Nt, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Et
      }), Object.freeze && (Object.freeze(Nt.props), Object.freeze(Nt)), Nt;
    };
    function Pt(T, te, Ne, Be, Et) {
      {
        var Ct, zt = {}, Nt = null, An = null;
        Ne !== void 0 && (ur(Ne), Nt = "" + Ne), Rt(te) && (ur(te.key), Nt = "" + te.key), We(te) && (An = te.ref, Gt(te, Et));
        for (Ct in te)
          nn.call(te, Ct) && !Ar.hasOwnProperty(Ct) && (zt[Ct] = te[Ct]);
        if (T && T.defaultProps) {
          var mn = T.defaultProps;
          for (Ct in mn)
            zt[Ct] === void 0 && (zt[Ct] = mn[Ct]);
        }
        if (Nt || An) {
          var gn = typeof T == "function" ? T.displayName || T.name || "Unknown" : T;
          Nt && Z(zt, gn), An && Ee(zt, gn);
        }
        return we(T, Nt, An, Et, Be, In.current, zt);
      }
    }
    var jt = be.ReactCurrentOwner, At = be.ReactDebugCurrentFrame;
    function Ot(T) {
      if (T) {
        var te = T._owner, Ne = zn(T.type, T._source, te ? te.type : null);
        At.setExtraStackFrame(Ne);
      } else
        At.setExtraStackFrame(null);
    }
    var rn;
    rn = !1;
    function Mt(T) {
      return typeof T == "object" && T !== null && T.$$typeof === w;
    }
    function Ln() {
      {
        if (jt.current) {
          var T = z(jt.current.type);
          if (T)
            return `

Check the render method of \`` + T + "`.";
        }
        return "";
      }
    }
    function sr(T) {
      return "";
    }
    var ro = {};
    function ao(T) {
      {
        var te = Ln();
        if (!te) {
          var Ne = typeof T == "string" ? T : T.displayName || T.name;
          Ne && (te = `

Check the top-level render call using <` + Ne + ">.");
        }
        return te;
      }
    }
    function hl(T, te) {
      {
        if (!T._store || T._store.validated || T.key != null)
          return;
        T._store.validated = !0;
        var Ne = ao(te);
        if (ro[Ne])
          return;
        ro[Ne] = !0;
        var Be = "";
        T && T._owner && T._owner !== jt.current && (Be = " It was passed a child from " + z(T._owner.type) + "."), Ot(T), _e('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Ne, Be), Ot(null);
      }
    }
    function yl(T, te) {
      {
        if (typeof T != "object")
          return;
        if (jn(T))
          for (var Ne = 0; Ne < T.length; Ne++) {
            var Be = T[Ne];
            Mt(Be) && hl(Be, te);
          }
        else if (Mt(T))
          T._store && (T._store.validated = !0);
        else if (T) {
          var Et = Ie(T);
          if (typeof Et == "function" && Et !== T.entries)
            for (var Ct = Et.call(T), zt; !(zt = Ct.next()).done; )
              Mt(zt.value) && hl(zt.value, te);
        }
      }
    }
    function io(T) {
      {
        var te = T.type;
        if (te == null || typeof te == "string")
          return;
        var Ne;
        if (typeof te == "function")
          Ne = te.propTypes;
        else if (typeof te == "object" && (te.$$typeof === F || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        te.$$typeof === A))
          Ne = te.propTypes;
        else
          return;
        if (Ne) {
          var Be = z(te);
          $n(Ne, T.props, "prop", Be, T);
        } else if (te.PropTypes !== void 0 && !rn) {
          rn = !0;
          var Et = z(te);
          _e("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Et || "Unknown");
        }
        typeof te.getDefaultProps == "function" && !te.getDefaultProps.isReactClassApproved && _e("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ur(T) {
      {
        for (var te = Object.keys(T.props), Ne = 0; Ne < te.length; Ne++) {
          var Be = te[Ne];
          if (Be !== "children" && Be !== "key") {
            Ot(T), _e("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Be), Ot(null);
            break;
          }
        }
        T.ref !== null && (Ot(T), _e("Invalid attribute `ref` supplied to `React.Fragment`."), Ot(null));
      }
    }
    var Pr = {};
    function hr(T, te, Ne, Be, Et, Ct) {
      {
        var zt = nt(T);
        if (!zt) {
          var Nt = "";
          (T === void 0 || typeof T == "object" && T !== null && Object.keys(T).length === 0) && (Nt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var An = sr();
          An ? Nt += An : Nt += Ln();
          var mn;
          T === null ? mn = "null" : jn(T) ? mn = "array" : T !== void 0 && T.$$typeof === w ? (mn = "<" + (z(T.type) || "Unknown") + " />", Nt = " Did you accidentally export a JSX literal instead of a component?") : mn = typeof T, _e("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", mn, Nt);
        }
        var gn = Pt(T, te, Ne, Et, Ct);
        if (gn == null)
          return gn;
        if (zt) {
          var yr = te.children;
          if (yr !== void 0)
            if (Be)
              if (jn(yr)) {
                for (var ei = 0; ei < yr.length; ei++)
                  yl(yr[ei], T);
                Object.freeze && Object.freeze(yr);
              } else
                _e("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              yl(yr, T);
        }
        if (nn.call(te, "key")) {
          var ti = z(T), wt = Object.keys(te).filter(function(lo) {
            return lo !== "key";
          }), _t = wt.length > 0 ? "{key: someKey, " + wt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Pr[ti + _t]) {
            var ni = wt.length > 0 ? "{" + wt.join(": ..., ") + ": ...}" : "{}";
            _e(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, _t, ti, ni, ti), Pr[ti + _t] = !0;
          }
        }
        return T === _ ? Ur(gn) : io(gn), gn;
      }
    }
    function hi(T, te, Ne) {
      return hr(T, te, Ne, !0);
    }
    function Za(T, te, Ne) {
      return hr(T, te, Ne, !1);
    }
    var yi = Za, gi = hi;
    rv.Fragment = _, rv.jsx = yi, rv.jsxs = gi;
  }()), rv;
}
process.env.NODE_ENV === "production" ? EC.exports = Sk() : EC.exports = Ck();
var v = EC.exports, wC = { exports: {} }, Ka = {}, ey = { exports: {} }, gC = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pE;
function xk() {
  return pE || (pE = 1, function(g) {
    function w(ce, Le) {
      var ge = ce.length;
      ce.push(Le);
      e: for (; 0 < ge; ) {
        var D = ge - 1 >>> 1, M = ce[D];
        if (0 < K(M, Le)) ce[D] = Le, ce[ge] = M, ge = D;
        else break e;
      }
    }
    function R(ce) {
      return ce.length === 0 ? null : ce[0];
    }
    function _(ce) {
      if (ce.length === 0) return null;
      var Le = ce[0], ge = ce.pop();
      if (ge !== Le) {
        ce[0] = ge;
        e: for (var D = 0, M = ce.length, Ve = M >>> 1; D < Ve; ) {
          var Ke = 2 * (D + 1) - 1, St = ce[Ke], oe = Ke + 1, Se = ce[oe];
          if (0 > K(St, ge)) oe < M && 0 > K(Se, St) ? (ce[D] = Se, ce[oe] = ge, D = oe) : (ce[D] = St, ce[Ke] = ge, D = Ke);
          else if (oe < M && 0 > K(Se, ge)) ce[D] = Se, ce[oe] = ge, D = oe;
          else break e;
        }
      }
      return Le;
    }
    function K(ce, Le) {
      var ge = ce.sortIndex - Le.sortIndex;
      return ge !== 0 ? ge : ce.id - Le.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var G = performance;
      g.unstable_now = function() {
        return G.now();
      };
    } else {
      var S = Date, $e = S.now();
      g.unstable_now = function() {
        return S.now() - $e;
      };
    }
    var F = [], X = [], xe = 1, A = null, ve = 3, fe = !1, He = !1, ne = !1, Ie = typeof setTimeout == "function" ? setTimeout : null, be = typeof clearTimeout == "function" ? clearTimeout : null, _e = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function pe(ce) {
      for (var Le = R(X); Le !== null; ) {
        if (Le.callback === null) _(X);
        else if (Le.startTime <= ce) _(X), Le.sortIndex = Le.expirationTime, w(F, Le);
        else break;
        Le = R(X);
      }
    }
    function Je(ce) {
      if (ne = !1, pe(ce), !He) if (R(F) !== null) He = !0, ht(re);
      else {
        var Le = R(X);
        Le !== null && ke(Je, Le.startTime - ce);
      }
    }
    function re(ce, Le) {
      He = !1, ne && (ne = !1, be(Me), Me = -1), fe = !0;
      var ge = ve;
      try {
        for (pe(Le), A = R(F); A !== null && (!(A.expirationTime > Le) || ce && !et()); ) {
          var D = A.callback;
          if (typeof D == "function") {
            A.callback = null, ve = A.priorityLevel;
            var M = D(A.expirationTime <= Le);
            Le = g.unstable_now(), typeof M == "function" ? A.callback = M : A === R(F) && _(F), pe(Le);
          } else _(F);
          A = R(F);
        }
        if (A !== null) var Ve = !0;
        else {
          var Ke = R(X);
          Ke !== null && ke(Je, Ke.startTime - Le), Ve = !1;
        }
        return Ve;
      } finally {
        A = null, ve = ge, fe = !1;
      }
    }
    var Y = !1, ae = null, Me = -1, de = 5, nt = -1;
    function et() {
      return !(g.unstable_now() - nt < de);
    }
    function Xe() {
      if (ae !== null) {
        var ce = g.unstable_now();
        nt = ce;
        var Le = !0;
        try {
          Le = ae(!0, ce);
        } finally {
          Le ? z() : (Y = !1, ae = null);
        }
      } else Y = !1;
    }
    var z;
    if (typeof _e == "function") z = function() {
      _e(Xe);
    };
    else if (typeof MessageChannel < "u") {
      var Oe = new MessageChannel(), lt = Oe.port2;
      Oe.port1.onmessage = Xe, z = function() {
        lt.postMessage(null);
      };
    } else z = function() {
      Ie(Xe, 0);
    };
    function ht(ce) {
      ae = ce, Y || (Y = !0, z());
    }
    function ke(ce, Le) {
      Me = Ie(function() {
        ce(g.unstable_now());
      }, Le);
    }
    g.unstable_IdlePriority = 5, g.unstable_ImmediatePriority = 1, g.unstable_LowPriority = 4, g.unstable_NormalPriority = 3, g.unstable_Profiling = null, g.unstable_UserBlockingPriority = 2, g.unstable_cancelCallback = function(ce) {
      ce.callback = null;
    }, g.unstable_continueExecution = function() {
      He || fe || (He = !0, ht(re));
    }, g.unstable_forceFrameRate = function(ce) {
      0 > ce || 125 < ce ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : de = 0 < ce ? Math.floor(1e3 / ce) : 5;
    }, g.unstable_getCurrentPriorityLevel = function() {
      return ve;
    }, g.unstable_getFirstCallbackNode = function() {
      return R(F);
    }, g.unstable_next = function(ce) {
      switch (ve) {
        case 1:
        case 2:
        case 3:
          var Le = 3;
          break;
        default:
          Le = ve;
      }
      var ge = ve;
      ve = Le;
      try {
        return ce();
      } finally {
        ve = ge;
      }
    }, g.unstable_pauseExecution = function() {
    }, g.unstable_requestPaint = function() {
    }, g.unstable_runWithPriority = function(ce, Le) {
      switch (ce) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          ce = 3;
      }
      var ge = ve;
      ve = ce;
      try {
        return Le();
      } finally {
        ve = ge;
      }
    }, g.unstable_scheduleCallback = function(ce, Le, ge) {
      var D = g.unstable_now();
      switch (typeof ge == "object" && ge !== null ? (ge = ge.delay, ge = typeof ge == "number" && 0 < ge ? D + ge : D) : ge = D, ce) {
        case 1:
          var M = -1;
          break;
        case 2:
          M = 250;
          break;
        case 5:
          M = 1073741823;
          break;
        case 4:
          M = 1e4;
          break;
        default:
          M = 5e3;
      }
      return M = ge + M, ce = { id: xe++, callback: Le, priorityLevel: ce, startTime: ge, expirationTime: M, sortIndex: -1 }, ge > D ? (ce.sortIndex = ge, w(X, ce), R(F) === null && ce === R(X) && (ne ? (be(Me), Me = -1) : ne = !0, ke(Je, ge - D))) : (ce.sortIndex = M, w(F, ce), He || fe || (He = !0, ht(re))), ce;
    }, g.unstable_shouldYield = et, g.unstable_wrapCallback = function(ce) {
      var Le = ve;
      return function() {
        var ge = ve;
        ve = Le;
        try {
          return ce.apply(this, arguments);
        } finally {
          ve = ge;
        }
      };
    };
  }(gC)), gC;
}
var SC = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vE;
function bk() {
  return vE || (vE = 1, function(g) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var w = !1, R = 5;
      function _(Ce, We) {
        var Rt = Ce.length;
        Ce.push(We), S(Ce, We, Rt);
      }
      function K(Ce) {
        return Ce.length === 0 ? null : Ce[0];
      }
      function G(Ce) {
        if (Ce.length === 0)
          return null;
        var We = Ce[0], Rt = Ce.pop();
        return Rt !== We && (Ce[0] = Rt, $e(Ce, Rt, 0)), We;
      }
      function S(Ce, We, Rt) {
        for (var Gt = Rt; Gt > 0; ) {
          var Z = Gt - 1 >>> 1, Ee = Ce[Z];
          if (F(Ee, We) > 0)
            Ce[Z] = We, Ce[Gt] = Ee, Gt = Z;
          else
            return;
        }
      }
      function $e(Ce, We, Rt) {
        for (var Gt = Rt, Z = Ce.length, Ee = Z >>> 1; Gt < Ee; ) {
          var we = (Gt + 1) * 2 - 1, Pt = Ce[we], jt = we + 1, At = Ce[jt];
          if (F(Pt, We) < 0)
            jt < Z && F(At, Pt) < 0 ? (Ce[Gt] = At, Ce[jt] = We, Gt = jt) : (Ce[Gt] = Pt, Ce[we] = We, Gt = we);
          else if (jt < Z && F(At, We) < 0)
            Ce[Gt] = At, Ce[jt] = We, Gt = jt;
          else
            return;
        }
      }
      function F(Ce, We) {
        var Rt = Ce.sortIndex - We.sortIndex;
        return Rt !== 0 ? Rt : Ce.id - We.id;
      }
      var X = 1, xe = 2, A = 3, ve = 4, fe = 5;
      function He(Ce, We) {
      }
      var ne = typeof performance == "object" && typeof performance.now == "function";
      if (ne) {
        var Ie = performance;
        g.unstable_now = function() {
          return Ie.now();
        };
      } else {
        var be = Date, _e = be.now();
        g.unstable_now = function() {
          return be.now() - _e;
        };
      }
      var pe = 1073741823, Je = -1, re = 250, Y = 5e3, ae = 1e4, Me = pe, de = [], nt = [], et = 1, Xe = null, z = A, Oe = !1, lt = !1, ht = !1, ke = typeof setTimeout == "function" ? setTimeout : null, ce = typeof clearTimeout == "function" ? clearTimeout : null, Le = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function ge(Ce) {
        for (var We = K(nt); We !== null; ) {
          if (We.callback === null)
            G(nt);
          else if (We.startTime <= Ce)
            G(nt), We.sortIndex = We.expirationTime, _(de, We);
          else
            return;
          We = K(nt);
        }
      }
      function D(Ce) {
        if (ht = !1, ge(Ce), !lt)
          if (K(de) !== null)
            lt = !0, On(M);
          else {
            var We = K(nt);
            We !== null && ur(D, We.startTime - Ce);
          }
      }
      function M(Ce, We) {
        lt = !1, ht && (ht = !1, In()), Oe = !0;
        var Rt = z;
        try {
          var Gt;
          if (!w) return Ve(Ce, We);
        } finally {
          Xe = null, z = Rt, Oe = !1;
        }
      }
      function Ve(Ce, We) {
        var Rt = We;
        for (ge(Rt), Xe = K(de); Xe !== null && !(Xe.expirationTime > Rt && (!Ce || Oa())); ) {
          var Gt = Xe.callback;
          if (typeof Gt == "function") {
            Xe.callback = null, z = Xe.priorityLevel;
            var Z = Xe.expirationTime <= Rt, Ee = Gt(Z);
            Rt = g.unstable_now(), typeof Ee == "function" ? Xe.callback = Ee : Xe === K(de) && G(de), ge(Rt);
          } else
            G(de);
          Xe = K(de);
        }
        if (Xe !== null)
          return !0;
        var we = K(nt);
        return we !== null && ur(D, we.startTime - Rt), !1;
      }
      function Ke(Ce, We) {
        switch (Ce) {
          case X:
          case xe:
          case A:
          case ve:
          case fe:
            break;
          default:
            Ce = A;
        }
        var Rt = z;
        z = Ce;
        try {
          return We();
        } finally {
          z = Rt;
        }
      }
      function St(Ce) {
        var We;
        switch (z) {
          case X:
          case xe:
          case A:
            We = A;
            break;
          default:
            We = z;
            break;
        }
        var Rt = z;
        z = We;
        try {
          return Ce();
        } finally {
          z = Rt;
        }
      }
      function oe(Ce) {
        var We = z;
        return function() {
          var Rt = z;
          z = We;
          try {
            return Ce.apply(this, arguments);
          } finally {
            z = Rt;
          }
        };
      }
      function Se(Ce, We, Rt) {
        var Gt = g.unstable_now(), Z;
        if (typeof Rt == "object" && Rt !== null) {
          var Ee = Rt.delay;
          typeof Ee == "number" && Ee > 0 ? Z = Gt + Ee : Z = Gt;
        } else
          Z = Gt;
        var we;
        switch (Ce) {
          case X:
            we = Je;
            break;
          case xe:
            we = re;
            break;
          case fe:
            we = Me;
            break;
          case ve:
            we = ae;
            break;
          case A:
          default:
            we = Y;
            break;
        }
        var Pt = Z + we, jt = {
          id: et++,
          callback: We,
          priorityLevel: Ce,
          startTime: Z,
          expirationTime: Pt,
          sortIndex: -1
        };
        return Z > Gt ? (jt.sortIndex = Z, _(nt, jt), K(de) === null && jt === K(nt) && (ht ? In() : ht = !0, ur(D, Z - Gt))) : (jt.sortIndex = Pt, _(de, jt), !lt && !Oe && (lt = !0, On(M))), jt;
      }
      function pt() {
      }
      function st() {
        !lt && !Oe && (lt = !0, On(M));
      }
      function Ht() {
        return K(de);
      }
      function on(Ce) {
        Ce.callback = null;
      }
      function mr() {
        return z;
      }
      var En = !1, er = null, zn = -1, nn = R, Dn = -1;
      function Oa() {
        var Ce = g.unstable_now() - Dn;
        return !(Ce < nn);
      }
      function Lr() {
      }
      function $n(Ce) {
        if (Ce < 0 || Ce > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        Ce > 0 ? nn = Math.floor(1e3 / Ce) : nn = R;
      }
      var wn = function() {
        if (er !== null) {
          var Ce = g.unstable_now();
          Dn = Ce;
          var We = !0, Rt = !0;
          try {
            Rt = er(We, Ce);
          } finally {
            Rt ? jn() : (En = !1, er = null);
          }
        } else
          En = !1;
      }, jn;
      if (typeof Le == "function")
        jn = function() {
          Le(wn);
        };
      else if (typeof MessageChannel < "u") {
        var or = new MessageChannel(), ga = or.port2;
        or.port1.onmessage = wn, jn = function() {
          ga.postMessage(null);
        };
      } else
        jn = function() {
          ke(wn, 0);
        };
      function On(Ce) {
        er = Ce, En || (En = !0, jn());
      }
      function ur(Ce, We) {
        zn = ke(function() {
          Ce(g.unstable_now());
        }, We);
      }
      function In() {
        ce(zn), zn = -1;
      }
      var Ar = Lr, Sa = null;
      g.unstable_IdlePriority = fe, g.unstable_ImmediatePriority = X, g.unstable_LowPriority = ve, g.unstable_NormalPriority = A, g.unstable_Profiling = Sa, g.unstable_UserBlockingPriority = xe, g.unstable_cancelCallback = on, g.unstable_continueExecution = st, g.unstable_forceFrameRate = $n, g.unstable_getCurrentPriorityLevel = mr, g.unstable_getFirstCallbackNode = Ht, g.unstable_next = St, g.unstable_pauseExecution = pt, g.unstable_requestPaint = Ar, g.unstable_runWithPriority = Ke, g.unstable_scheduleCallback = Se, g.unstable_shouldYield = Oa, g.unstable_wrapCallback = oe, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(SC)), SC;
}
var mE;
function wE() {
  return mE || (mE = 1, process.env.NODE_ENV === "production" ? ey.exports = xk() : ey.exports = bk()), ey.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hE;
function Ek() {
  if (hE) return Ka;
  hE = 1;
  var g = ov(), w = wE();
  function R(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var _ = /* @__PURE__ */ new Set(), K = {};
  function G(n, r) {
    S(n, r), S(n + "Capture", r);
  }
  function S(n, r) {
    for (K[n] = r, n = 0; n < r.length; n++) _.add(r[n]);
  }
  var $e = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), F = Object.prototype.hasOwnProperty, X = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, xe = {}, A = {};
  function ve(n) {
    return F.call(A, n) ? !0 : F.call(xe, n) ? !1 : X.test(n) ? A[n] = !0 : (xe[n] = !0, !1);
  }
  function fe(n, r, l, u) {
    if (l !== null && l.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return u ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function He(n, r, l, u) {
    if (r === null || typeof r > "u" || fe(n, r, l, u)) return !0;
    if (u) return !1;
    if (l !== null) switch (l.type) {
      case 3:
        return !r;
      case 4:
        return r === !1;
      case 5:
        return isNaN(r);
      case 6:
        return isNaN(r) || 1 > r;
    }
    return !1;
  }
  function ne(n, r, l, u, c, d, y) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = u, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = y;
  }
  var Ie = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    Ie[n] = new ne(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    Ie[r] = new ne(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    Ie[n] = new ne(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    Ie[n] = new ne(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    Ie[n] = new ne(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    Ie[n] = new ne(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    Ie[n] = new ne(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    Ie[n] = new ne(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    Ie[n] = new ne(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var be = /[\-:]([a-z])/g;
  function _e(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      be,
      _e
    );
    Ie[r] = new ne(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(be, _e);
    Ie[r] = new ne(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(be, _e);
    Ie[r] = new ne(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    Ie[n] = new ne(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), Ie.xlinkHref = new ne("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    Ie[n] = new ne(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function pe(n, r, l, u) {
    var c = Ie.hasOwnProperty(r) ? Ie[r] : null;
    (c !== null ? c.type !== 0 : u || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (He(r, l, c, u) && (l = null), u || c === null ? ve(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, u = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, u ? n.setAttributeNS(u, r, l) : n.setAttribute(r, l))));
  }
  var Je = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, re = Symbol.for("react.element"), Y = Symbol.for("react.portal"), ae = Symbol.for("react.fragment"), Me = Symbol.for("react.strict_mode"), de = Symbol.for("react.profiler"), nt = Symbol.for("react.provider"), et = Symbol.for("react.context"), Xe = Symbol.for("react.forward_ref"), z = Symbol.for("react.suspense"), Oe = Symbol.for("react.suspense_list"), lt = Symbol.for("react.memo"), ht = Symbol.for("react.lazy"), ke = Symbol.for("react.offscreen"), ce = Symbol.iterator;
  function Le(n) {
    return n === null || typeof n != "object" ? null : (n = ce && n[ce] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var ge = Object.assign, D;
  function M(n) {
    if (D === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      D = r && r[1] || "";
    }
    return `
` + D + n;
  }
  var Ve = !1;
  function Ke(n, r) {
    if (!n || Ve) return "";
    Ve = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r) if (r = function() {
        throw Error();
      }, Object.defineProperty(r.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(r, []);
        } catch ($) {
          var u = $;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch ($) {
          u = $;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch ($) {
          u = $;
        }
        n();
      }
    } catch ($) {
      if ($ && u && typeof $.stack == "string") {
        for (var c = $.stack.split(`
`), d = u.stack.split(`
`), y = c.length - 1, b = d.length - 1; 1 <= y && 0 <= b && c[y] !== d[b]; ) b--;
        for (; 1 <= y && 0 <= b; y--, b--) if (c[y] !== d[b]) {
          if (y !== 1 || b !== 1)
            do
              if (y--, b--, 0 > b || c[y] !== d[b]) {
                var k = `
` + c[y].replace(" at new ", " at ");
                return n.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", n.displayName)), k;
              }
            while (1 <= y && 0 <= b);
          break;
        }
      }
    } finally {
      Ve = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? M(n) : "";
  }
  function St(n) {
    switch (n.tag) {
      case 5:
        return M(n.type);
      case 16:
        return M("Lazy");
      case 13:
        return M("Suspense");
      case 19:
        return M("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Ke(n.type, !1), n;
      case 11:
        return n = Ke(n.type.render, !1), n;
      case 1:
        return n = Ke(n.type, !0), n;
      default:
        return "";
    }
  }
  function oe(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case ae:
        return "Fragment";
      case Y:
        return "Portal";
      case de:
        return "Profiler";
      case Me:
        return "StrictMode";
      case z:
        return "Suspense";
      case Oe:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case et:
        return (n.displayName || "Context") + ".Consumer";
      case nt:
        return (n._context.displayName || "Context") + ".Provider";
      case Xe:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case lt:
        return r = n.displayName || null, r !== null ? r : oe(n.type) || "Memo";
      case ht:
        r = n._payload, n = n._init;
        try {
          return oe(n(r));
        } catch {
        }
    }
    return null;
  }
  function Se(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return oe(r);
      case 8:
        return r === Me ? "StrictMode" : "Mode";
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
        if (typeof r == "function") return r.displayName || r.name || null;
        if (typeof r == "string") return r;
    }
    return null;
  }
  function pt(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function st(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Ht(n) {
    var r = st(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), u = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, d = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(y) {
        u = "" + y, d.call(this, y);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return u;
      }, setValue: function(y) {
        u = "" + y;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function on(n) {
    n._valueTracker || (n._valueTracker = Ht(n));
  }
  function mr(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), u = "";
    return n && (u = st(n) ? n.checked ? "true" : "false" : n.value), n = u, n !== l ? (r.setValue(n), !0) : !1;
  }
  function En(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function er(n, r) {
    var l = r.checked;
    return ge({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function zn(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, u = r.checked != null ? r.checked : r.defaultChecked;
    l = pt(r.value != null ? r.value : l), n._wrapperState = { initialChecked: u, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function nn(n, r) {
    r = r.checked, r != null && pe(n, "checked", r, !1);
  }
  function Dn(n, r) {
    nn(n, r);
    var l = pt(r.value), u = r.type;
    if (l != null) u === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (u === "submit" || u === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Lr(n, r.type, l) : r.hasOwnProperty("defaultValue") && Lr(n, r.type, pt(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Oa(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var u = r.type;
      if (!(u !== "submit" && u !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function Lr(n, r, l) {
    (r !== "number" || En(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var $n = Array.isArray;
  function wn(n, r, l, u) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++) r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++) c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && u && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + pt(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, u && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function jn(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(R(91));
    return ge({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function or(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(R(92));
        if ($n(l)) {
          if (1 < l.length) throw Error(R(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: pt(l) };
  }
  function ga(n, r) {
    var l = pt(r.value), u = pt(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), u != null && (n.defaultValue = "" + u);
  }
  function On(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function ur(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function In(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? ur(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Ar, Sa = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, u, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, u, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (Ar = Ar || document.createElement("div"), Ar.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = Ar.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function Ce(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var We = {
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
  }, Rt = ["Webkit", "ms", "Moz", "O"];
  Object.keys(We).forEach(function(n) {
    Rt.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), We[r] = We[n];
    });
  });
  function Gt(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || We.hasOwnProperty(n) && We[n] ? ("" + r).trim() : r + "px";
  }
  function Z(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var u = l.indexOf("--") === 0, c = Gt(l, r[l], u);
      l === "float" && (l = "cssFloat"), u ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var Ee = ge({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function we(n, r) {
    if (r) {
      if (Ee[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(R(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(R(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(R(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(R(62));
    }
  }
  function Pt(n, r) {
    if (n.indexOf("-") === -1) return typeof r.is == "string";
    switch (n) {
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
  var jt = null;
  function At(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Ot = null, rn = null, Mt = null;
  function Ln(n) {
    if (n = rt(n)) {
      if (typeof Ot != "function") throw Error(R(280));
      var r = n.stateNode;
      r && (r = Tn(r), Ot(n.stateNode, n.type, r));
    }
  }
  function sr(n) {
    rn ? Mt ? Mt.push(n) : Mt = [n] : rn = n;
  }
  function ro() {
    if (rn) {
      var n = rn, r = Mt;
      if (Mt = rn = null, Ln(n), r) for (n = 0; n < r.length; n++) Ln(r[n]);
    }
  }
  function ao(n, r) {
    return n(r);
  }
  function hl() {
  }
  var yl = !1;
  function io(n, r, l) {
    if (yl) return n(r, l);
    yl = !0;
    try {
      return ao(n, r, l);
    } finally {
      yl = !1, (rn !== null || Mt !== null) && (hl(), ro());
    }
  }
  function Ur(n, r) {
    var l = n.stateNode;
    if (l === null) return null;
    var u = Tn(l);
    if (u === null) return null;
    l = u[r];
    e: switch (r) {
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
        (u = !u.disabled) || (n = n.type, u = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !u;
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (l && typeof l != "function") throw Error(R(231, r, typeof l));
    return l;
  }
  var Pr = !1;
  if ($e) try {
    var hr = {};
    Object.defineProperty(hr, "passive", { get: function() {
      Pr = !0;
    } }), window.addEventListener("test", hr, hr), window.removeEventListener("test", hr, hr);
  } catch {
    Pr = !1;
  }
  function hi(n, r, l, u, c, d, y, b, k) {
    var $ = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, $);
    } catch (ue) {
      this.onError(ue);
    }
  }
  var Za = !1, yi = null, gi = !1, T = null, te = { onError: function(n) {
    Za = !0, yi = n;
  } };
  function Ne(n, r, l, u, c, d, y, b, k) {
    Za = !1, yi = null, hi.apply(te, arguments);
  }
  function Be(n, r, l, u, c, d, y, b, k) {
    if (Ne.apply(this, arguments), Za) {
      if (Za) {
        var $ = yi;
        Za = !1, yi = null;
      } else throw Error(R(198));
      gi || (gi = !0, T = $);
    }
  }
  function Et(n) {
    var r = n, l = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function Ct(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function zt(n) {
    if (Et(n) !== n) throw Error(R(188));
  }
  function Nt(n) {
    var r = n.alternate;
    if (!r) {
      if (r = Et(n), r === null) throw Error(R(188));
      return r !== n ? null : n;
    }
    for (var l = n, u = r; ; ) {
      var c = l.return;
      if (c === null) break;
      var d = c.alternate;
      if (d === null) {
        if (u = c.return, u !== null) {
          l = u;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === l) return zt(c), n;
          if (d === u) return zt(c), r;
          d = d.sibling;
        }
        throw Error(R(188));
      }
      if (l.return !== u.return) l = c, u = d;
      else {
        for (var y = !1, b = c.child; b; ) {
          if (b === l) {
            y = !0, l = c, u = d;
            break;
          }
          if (b === u) {
            y = !0, u = c, l = d;
            break;
          }
          b = b.sibling;
        }
        if (!y) {
          for (b = d.child; b; ) {
            if (b === l) {
              y = !0, l = d, u = c;
              break;
            }
            if (b === u) {
              y = !0, u = d, l = c;
              break;
            }
            b = b.sibling;
          }
          if (!y) throw Error(R(189));
        }
      }
      if (l.alternate !== u) throw Error(R(190));
    }
    if (l.tag !== 3) throw Error(R(188));
    return l.stateNode.current === l ? n : r;
  }
  function An(n) {
    return n = Nt(n), n !== null ? mn(n) : null;
  }
  function mn(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = mn(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var gn = w.unstable_scheduleCallback, yr = w.unstable_cancelCallback, ei = w.unstable_shouldYield, ti = w.unstable_requestPaint, wt = w.unstable_now, _t = w.unstable_getCurrentPriorityLevel, ni = w.unstable_ImmediatePriority, lo = w.unstable_UserBlockingPriority, oo = w.unstable_NormalPriority, gl = w.unstable_LowPriority, Zo = w.unstable_IdlePriority, Sl = null, ta = null;
  function Xu(n) {
    if (ta && typeof ta.onCommitFiberRoot == "function") try {
      ta.onCommitFiberRoot(Sl, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Fr = Math.clz32 ? Math.clz32 : eu, fc = Math.log, dc = Math.LN2;
  function eu(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (fc(n) / dc | 0) | 0;
  }
  var Cl = 64, Ca = 4194304;
  function ri(n) {
    switch (n & -n) {
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
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function ai(n, r) {
    var l = n.pendingLanes;
    if (l === 0) return 0;
    var u = 0, c = n.suspendedLanes, d = n.pingedLanes, y = l & 268435455;
    if (y !== 0) {
      var b = y & ~c;
      b !== 0 ? u = ri(b) : (d &= y, d !== 0 && (u = ri(d)));
    } else y = l & ~c, y !== 0 ? u = ri(y) : d !== 0 && (u = ri(d));
    if (u === 0) return 0;
    if (r !== 0 && r !== u && !(r & c) && (c = u & -u, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0)) return r;
    if (u & 4 && (u |= l & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= u; 0 < r; ) l = 31 - Fr(r), c = 1 << l, u |= n[l], r &= ~c;
    return u;
  }
  function tu(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
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
        return r + 5e3;
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
  function uo(n, r) {
    for (var l = n.suspendedLanes, u = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var y = 31 - Fr(d), b = 1 << y, k = c[y];
      k === -1 ? (!(b & l) || b & u) && (c[y] = tu(b, r)) : k <= r && (n.expiredLanes |= b), d &= ~b;
    }
  }
  function xl(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function nu() {
    var n = Cl;
    return Cl <<= 1, !(Cl & 4194240) && (Cl = 64), n;
  }
  function ru(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function $i(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Fr(r), n[r] = l;
  }
  function Kf(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var u = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - Fr(l), d = 1 << c;
      r[c] = 0, u[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function Ii(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var u = 31 - Fr(l), c = 1 << u;
      c & r | n[u] & r && (n[u] |= r), l &= ~c;
    }
  }
  var Qt = 0;
  function au(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Yt, Ku, Si, gt, iu, gr = !1, Ci = [], Hr = null, xi = null, Sn = null, un = /* @__PURE__ */ new Map(), bl = /* @__PURE__ */ new Map(), tr = [], Vr = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Ma(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Hr = null;
        break;
      case "dragenter":
      case "dragleave":
        xi = null;
        break;
      case "mouseover":
      case "mouseout":
        Sn = null;
        break;
      case "pointerover":
      case "pointerout":
        un.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        bl.delete(r.pointerId);
    }
  }
  function so(n, r, l, u, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: u, nativeEvent: d, targetContainers: [c] }, r !== null && (r = rt(r), r !== null && Ku(r)), n) : (n.eventSystemFlags |= u, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function Ju(n, r, l, u, c) {
    switch (r) {
      case "focusin":
        return Hr = so(Hr, n, r, l, u, c), !0;
      case "dragenter":
        return xi = so(xi, n, r, l, u, c), !0;
      case "mouseover":
        return Sn = so(Sn, n, r, l, u, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return un.set(d, so(un.get(d) || null, n, r, l, u, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, bl.set(d, so(bl.get(d) || null, n, r, l, u, c)), !0;
    }
    return !1;
  }
  function Zu(n) {
    var r = So(n.target);
    if (r !== null) {
      var l = Et(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = Ct(l), r !== null) {
            n.blockedOn = r, iu(n.priority, function() {
              Si(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function El(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = uu(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var u = new l.constructor(l.type, l);
        jt = u, l.target.dispatchEvent(u), jt = null;
      } else return r = rt(l), r !== null && Ku(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function co(n, r, l) {
    El(n) && l.delete(r);
  }
  function Jf() {
    gr = !1, Hr !== null && El(Hr) && (Hr = null), xi !== null && El(xi) && (xi = null), Sn !== null && El(Sn) && (Sn = null), un.forEach(co), bl.forEach(co);
  }
  function za(n, r) {
    n.blockedOn === r && (n.blockedOn = null, gr || (gr = !0, w.unstable_scheduleCallback(w.unstable_NormalPriority, Jf)));
  }
  function ii(n) {
    function r(c) {
      return za(c, n);
    }
    if (0 < Ci.length) {
      za(Ci[0], n);
      for (var l = 1; l < Ci.length; l++) {
        var u = Ci[l];
        u.blockedOn === n && (u.blockedOn = null);
      }
    }
    for (Hr !== null && za(Hr, n), xi !== null && za(xi, n), Sn !== null && za(Sn, n), un.forEach(r), bl.forEach(r), l = 0; l < tr.length; l++) u = tr[l], u.blockedOn === n && (u.blockedOn = null);
    for (; 0 < tr.length && (l = tr[0], l.blockedOn === null); ) Zu(l), l.blockedOn === null && tr.shift();
  }
  var bi = Je.ReactCurrentBatchConfig, La = !0;
  function lu(n, r, l, u) {
    var c = Qt, d = bi.transition;
    bi.transition = null;
    try {
      Qt = 1, wl(n, r, l, u);
    } finally {
      Qt = c, bi.transition = d;
    }
  }
  function ou(n, r, l, u) {
    var c = Qt, d = bi.transition;
    bi.transition = null;
    try {
      Qt = 4, wl(n, r, l, u);
    } finally {
      Qt = c, bi.transition = d;
    }
  }
  function wl(n, r, l, u) {
    if (La) {
      var c = uu(n, r, l, u);
      if (c === null) wc(n, r, u, fo, l), Ma(n, u);
      else if (Ju(c, n, r, l, u)) u.stopPropagation();
      else if (Ma(n, u), r & 4 && -1 < Vr.indexOf(n)) {
        for (; c !== null; ) {
          var d = rt(c);
          if (d !== null && Yt(d), d = uu(n, r, l, u), d === null && wc(n, r, u, fo, l), d === c) break;
          c = d;
        }
        c !== null && u.stopPropagation();
      } else wc(n, r, u, null, l);
    }
  }
  var fo = null;
  function uu(n, r, l, u) {
    if (fo = null, n = At(u), n = So(n), n !== null) if (r = Et(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = Ct(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return fo = n, null;
  }
  function su(n) {
    switch (n) {
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
        switch (_t()) {
          case ni:
            return 1;
          case lo:
            return 4;
          case oo:
          case gl:
            return 16;
          case Zo:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var li = null, h = null, E = null;
  function B() {
    if (E) return E;
    var n, r = h, l = r.length, u, c = "value" in li ? li.value : li.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++) ;
    var y = l - n;
    for (u = 1; u <= y && r[l - u] === c[d - u]; u++) ;
    return E = c.slice(n, 1 < u ? 1 - u : void 0);
  }
  function q(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function ye() {
    return !0;
  }
  function ot() {
    return !1;
  }
  function Te(n) {
    function r(l, u, c, d, y) {
      this._reactName = l, this._targetInst = c, this.type = u, this.nativeEvent = d, this.target = y, this.currentTarget = null;
      for (var b in n) n.hasOwnProperty(b) && (l = n[b], this[b] = l ? l(d) : d[b]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? ye : ot, this.isPropagationStopped = ot, this;
    }
    return ge(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = ye);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = ye);
    }, persist: function() {
    }, isPersistent: ye }), r;
  }
  var ft = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Lt = Te(ft), qt = ge({}, ft, { view: 0, detail: 0 }), hn = Te(qt), sn, kt, cn, Rn = ge({}, qt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: rd, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== cn && (cn && n.type === "mousemove" ? (sn = n.screenX - cn.screenX, kt = n.screenY - cn.screenY) : kt = sn = 0, cn = n), sn);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : kt;
  } }), Rl = Te(Rn), es = ge({}, Rn, { dataTransfer: 0 }), Yi = Te(es), ts = ge({}, qt, { relatedTarget: 0 }), po = Te(ts), Zf = ge({}, ft, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), pc = Te(Zf), ed = ge({}, ft, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), uv = Te(ed), td = ge({}, ft, { data: 0 }), nd = Te(td), sv = {
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
  }, cv = {
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
  }, ny = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function qi(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = ny[n]) ? !!r[n] : !1;
  }
  function rd() {
    return qi;
  }
  var ad = ge({}, qt, { key: function(n) {
    if (n.key) {
      var r = sv[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = q(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? cv[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: rd, charCode: function(n) {
    return n.type === "keypress" ? q(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? q(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), id = Te(ad), ld = ge({}, Rn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), fv = Te(ld), vc = ge({}, qt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: rd }), dv = Te(vc), na = ge({}, ft, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Gi = Te(na), Yn = ge({}, Rn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Wi = Te(Yn), od = [9, 13, 27, 32], cu = $e && "CompositionEvent" in window, ns = null;
  $e && "documentMode" in document && (ns = document.documentMode);
  var rs = $e && "TextEvent" in window && !ns, pv = $e && (!cu || ns && 8 < ns && 11 >= ns), vv = " ", mc = !1;
  function mv(n, r) {
    switch (n) {
      case "keyup":
        return od.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function hv(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var fu = !1;
  function yv(n, r) {
    switch (n) {
      case "compositionend":
        return hv(r);
      case "keypress":
        return r.which !== 32 ? null : (mc = !0, vv);
      case "textInput":
        return n = r.data, n === vv && mc ? null : n;
      default:
        return null;
    }
  }
  function ry(n, r) {
    if (fu) return n === "compositionend" || !cu && mv(n, r) ? (n = B(), E = h = li = null, fu = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return pv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var ay = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function gv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!ay[n.type] : r === "textarea";
  }
  function ud(n, r, l, u) {
    sr(u), r = ss(r, "onChange"), 0 < r.length && (l = new Lt("onChange", "change", null, l, u), n.push({ event: l, listeners: r }));
  }
  var Ei = null, vo = null;
  function Sv(n) {
    yo(n, 0);
  }
  function as(n) {
    var r = ui(n);
    if (mr(r)) return n;
  }
  function iy(n, r) {
    if (n === "change") return r;
  }
  var Cv = !1;
  if ($e) {
    var sd;
    if ($e) {
      var cd = "oninput" in document;
      if (!cd) {
        var xv = document.createElement("div");
        xv.setAttribute("oninput", "return;"), cd = typeof xv.oninput == "function";
      }
      sd = cd;
    } else sd = !1;
    Cv = sd && (!document.documentMode || 9 < document.documentMode);
  }
  function bv() {
    Ei && (Ei.detachEvent("onpropertychange", Ev), vo = Ei = null);
  }
  function Ev(n) {
    if (n.propertyName === "value" && as(vo)) {
      var r = [];
      ud(r, vo, n, At(n)), io(Sv, r);
    }
  }
  function ly(n, r, l) {
    n === "focusin" ? (bv(), Ei = r, vo = l, Ei.attachEvent("onpropertychange", Ev)) : n === "focusout" && bv();
  }
  function wv(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return as(vo);
  }
  function oy(n, r) {
    if (n === "click") return as(r);
  }
  function Rv(n, r) {
    if (n === "input" || n === "change") return as(r);
  }
  function uy(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var oi = typeof Object.is == "function" ? Object.is : uy;
  function is(n, r) {
    if (oi(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), u = Object.keys(r);
    if (l.length !== u.length) return !1;
    for (u = 0; u < l.length; u++) {
      var c = l[u];
      if (!F.call(r, c) || !oi(n[c], r[c])) return !1;
    }
    return !0;
  }
  function Tv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function hc(n, r) {
    var l = Tv(n);
    n = 0;
    for (var u; l; ) {
      if (l.nodeType === 3) {
        if (u = n + l.textContent.length, n <= r && u >= r) return { node: l, offset: r - n };
        n = u;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = Tv(l);
    }
  }
  function Tl(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Tl(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function ls() {
    for (var n = window, r = En(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = r.contentWindow;
      else break;
      r = En(n.document);
    }
    return r;
  }
  function yc(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function du(n) {
    var r = ls(), l = n.focusedElem, u = n.selectionRange;
    if (r !== l && l && l.ownerDocument && Tl(l.ownerDocument.documentElement, l)) {
      if (u !== null && yc(l)) {
        if (r = u.start, n = u.end, n === void 0 && (n = r), "selectionStart" in l) l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(u.start, c);
          u = u.end === void 0 ? d : Math.min(u.end, c), !n.extend && d > u && (c = u, u = d, d = c), c = hc(l, d);
          var y = hc(
            l,
            u
          );
          c && y && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== y.node || n.focusOffset !== y.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > u ? (n.addRange(r), n.extend(y.node, y.offset)) : (r.setEnd(y.node, y.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++) n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var sy = $e && "documentMode" in document && 11 >= document.documentMode, pu = null, fd = null, os = null, dd = !1;
  function pd(n, r, l) {
    var u = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    dd || pu == null || pu !== En(u) || (u = pu, "selectionStart" in u && yc(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = { anchorNode: u.anchorNode, anchorOffset: u.anchorOffset, focusNode: u.focusNode, focusOffset: u.focusOffset }), os && is(os, u) || (os = u, u = ss(fd, "onSelect"), 0 < u.length && (r = new Lt("onSelect", "select", null, r, l), n.push({ event: r, listeners: u }), r.target = pu)));
  }
  function gc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var mo = { animationend: gc("Animation", "AnimationEnd"), animationiteration: gc("Animation", "AnimationIteration"), animationstart: gc("Animation", "AnimationStart"), transitionend: gc("Transition", "TransitionEnd") }, Sr = {}, vd = {};
  $e && (vd = document.createElement("div").style, "AnimationEvent" in window || (delete mo.animationend.animation, delete mo.animationiteration.animation, delete mo.animationstart.animation), "TransitionEvent" in window || delete mo.transitionend.transition);
  function Sc(n) {
    if (Sr[n]) return Sr[n];
    if (!mo[n]) return n;
    var r = mo[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in vd) return Sr[n] = r[l];
    return n;
  }
  var _v = Sc("animationend"), kv = Sc("animationiteration"), Nv = Sc("animationstart"), Dv = Sc("transitionend"), md = /* @__PURE__ */ new Map(), Cc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Aa(n, r) {
    md.set(n, r), G(r, [n]);
  }
  for (var hd = 0; hd < Cc.length; hd++) {
    var ho = Cc[hd], cy = ho.toLowerCase(), fy = ho[0].toUpperCase() + ho.slice(1);
    Aa(cy, "on" + fy);
  }
  Aa(_v, "onAnimationEnd"), Aa(kv, "onAnimationIteration"), Aa(Nv, "onAnimationStart"), Aa("dblclick", "onDoubleClick"), Aa("focusin", "onFocus"), Aa("focusout", "onBlur"), Aa(Dv, "onTransitionEnd"), S("onMouseEnter", ["mouseout", "mouseover"]), S("onMouseLeave", ["mouseout", "mouseover"]), S("onPointerEnter", ["pointerout", "pointerover"]), S("onPointerLeave", ["pointerout", "pointerover"]), G("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), G("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), G("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), G("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), G("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), G("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var us = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), yd = new Set("cancel close invalid load scroll toggle".split(" ").concat(us));
  function xc(n, r, l) {
    var u = n.type || "unknown-event";
    n.currentTarget = l, Be(u, r, void 0, n), n.currentTarget = null;
  }
  function yo(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var u = n[l], c = u.event;
      u = u.listeners;
      e: {
        var d = void 0;
        if (r) for (var y = u.length - 1; 0 <= y; y--) {
          var b = u[y], k = b.instance, $ = b.currentTarget;
          if (b = b.listener, k !== d && c.isPropagationStopped()) break e;
          xc(c, b, $), d = k;
        }
        else for (y = 0; y < u.length; y++) {
          if (b = u[y], k = b.instance, $ = b.currentTarget, b = b.listener, k !== d && c.isPropagationStopped()) break e;
          xc(c, b, $), d = k;
        }
      }
    }
    if (gi) throw n = T, gi = !1, T = null, n;
  }
  function an(n, r) {
    var l = r[ds];
    l === void 0 && (l = r[ds] = /* @__PURE__ */ new Set());
    var u = n + "__bubble";
    l.has(u) || (jv(r, n, 2, !1), l.add(u));
  }
  function bc(n, r, l) {
    var u = 0;
    r && (u |= 4), jv(l, n, u, r);
  }
  var Ec = "_reactListening" + Math.random().toString(36).slice(2);
  function vu(n) {
    if (!n[Ec]) {
      n[Ec] = !0, _.forEach(function(l) {
        l !== "selectionchange" && (yd.has(l) || bc(l, !1, n), bc(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Ec] || (r[Ec] = !0, bc("selectionchange", !1, r));
    }
  }
  function jv(n, r, l, u) {
    switch (su(r)) {
      case 1:
        var c = lu;
        break;
      case 4:
        c = ou;
        break;
      default:
        c = wl;
    }
    l = c.bind(null, r, l, n), c = void 0, !Pr || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), u ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function wc(n, r, l, u, c) {
    var d = u;
    if (!(r & 1) && !(r & 2) && u !== null) e: for (; ; ) {
      if (u === null) return;
      var y = u.tag;
      if (y === 3 || y === 4) {
        var b = u.stateNode.containerInfo;
        if (b === c || b.nodeType === 8 && b.parentNode === c) break;
        if (y === 4) for (y = u.return; y !== null; ) {
          var k = y.tag;
          if ((k === 3 || k === 4) && (k = y.stateNode.containerInfo, k === c || k.nodeType === 8 && k.parentNode === c)) return;
          y = y.return;
        }
        for (; b !== null; ) {
          if (y = So(b), y === null) return;
          if (k = y.tag, k === 5 || k === 6) {
            u = d = y;
            continue e;
          }
          b = b.parentNode;
        }
      }
      u = u.return;
    }
    io(function() {
      var $ = d, ue = At(l), me = [];
      e: {
        var le = md.get(n);
        if (le !== void 0) {
          var Ae = Lt, Ye = n;
          switch (n) {
            case "keypress":
              if (q(l) === 0) break e;
            case "keydown":
            case "keyup":
              Ae = id;
              break;
            case "focusin":
              Ye = "focus", Ae = po;
              break;
            case "focusout":
              Ye = "blur", Ae = po;
              break;
            case "beforeblur":
            case "afterblur":
              Ae = po;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Ae = Rl;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Ae = Yi;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Ae = dv;
              break;
            case _v:
            case kv:
            case Nv:
              Ae = pc;
              break;
            case Dv:
              Ae = Gi;
              break;
            case "scroll":
              Ae = hn;
              break;
            case "wheel":
              Ae = Wi;
              break;
            case "copy":
            case "cut":
            case "paste":
              Ae = uv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Ae = fv;
          }
          var Qe = (r & 4) !== 0, Vn = !Qe && n === "scroll", L = Qe ? le !== null ? le + "Capture" : null : le;
          Qe = [];
          for (var j = $, H; j !== null; ) {
            H = j;
            var se = H.stateNode;
            if (H.tag === 5 && se !== null && (H = se, L !== null && (se = Ur(j, L), se != null && Qe.push(mu(j, se, H)))), Vn) break;
            j = j.return;
          }
          0 < Qe.length && (le = new Ae(le, Ye, null, l, ue), me.push({ event: le, listeners: Qe }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (le = n === "mouseover" || n === "pointerover", Ae = n === "mouseout" || n === "pointerout", le && l !== jt && (Ye = l.relatedTarget || l.fromElement) && (So(Ye) || Ye[Qi])) break e;
          if ((Ae || le) && (le = ue.window === ue ? ue : (le = ue.ownerDocument) ? le.defaultView || le.parentWindow : window, Ae ? (Ye = l.relatedTarget || l.toElement, Ae = $, Ye = Ye ? So(Ye) : null, Ye !== null && (Vn = Et(Ye), Ye !== Vn || Ye.tag !== 5 && Ye.tag !== 6) && (Ye = null)) : (Ae = null, Ye = $), Ae !== Ye)) {
            if (Qe = Rl, se = "onMouseLeave", L = "onMouseEnter", j = "mouse", (n === "pointerout" || n === "pointerover") && (Qe = fv, se = "onPointerLeave", L = "onPointerEnter", j = "pointer"), Vn = Ae == null ? le : ui(Ae), H = Ye == null ? le : ui(Ye), le = new Qe(se, j + "leave", Ae, l, ue), le.target = Vn, le.relatedTarget = H, se = null, So(ue) === $ && (Qe = new Qe(L, j + "enter", Ye, l, ue), Qe.target = H, Qe.relatedTarget = Vn, se = Qe), Vn = se, Ae && Ye) t: {
              for (Qe = Ae, L = Ye, j = 0, H = Qe; H; H = _l(H)) j++;
              for (H = 0, se = L; se; se = _l(se)) H++;
              for (; 0 < j - H; ) Qe = _l(Qe), j--;
              for (; 0 < H - j; ) L = _l(L), H--;
              for (; j--; ) {
                if (Qe === L || L !== null && Qe === L.alternate) break t;
                Qe = _l(Qe), L = _l(L);
              }
              Qe = null;
            }
            else Qe = null;
            Ae !== null && Ov(me, le, Ae, Qe, !1), Ye !== null && Vn !== null && Ov(me, Vn, Ye, Qe, !0);
          }
        }
        e: {
          if (le = $ ? ui($) : window, Ae = le.nodeName && le.nodeName.toLowerCase(), Ae === "select" || Ae === "input" && le.type === "file") var qe = iy;
          else if (gv(le)) if (Cv) qe = Rv;
          else {
            qe = wv;
            var ct = ly;
          }
          else (Ae = le.nodeName) && Ae.toLowerCase() === "input" && (le.type === "checkbox" || le.type === "radio") && (qe = oy);
          if (qe && (qe = qe(n, $))) {
            ud(me, qe, l, ue);
            break e;
          }
          ct && ct(n, le, $), n === "focusout" && (ct = le._wrapperState) && ct.controlled && le.type === "number" && Lr(le, "number", le.value);
        }
        switch (ct = $ ? ui($) : window, n) {
          case "focusin":
            (gv(ct) || ct.contentEditable === "true") && (pu = ct, fd = $, os = null);
            break;
          case "focusout":
            os = fd = pu = null;
            break;
          case "mousedown":
            dd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            dd = !1, pd(me, l, ue);
            break;
          case "selectionchange":
            if (sy) break;
          case "keydown":
          case "keyup":
            pd(me, l, ue);
        }
        var dt;
        if (cu) e: {
          switch (n) {
            case "compositionstart":
              var yt = "onCompositionStart";
              break e;
            case "compositionend":
              yt = "onCompositionEnd";
              break e;
            case "compositionupdate":
              yt = "onCompositionUpdate";
              break e;
          }
          yt = void 0;
        }
        else fu ? mv(n, l) && (yt = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (yt = "onCompositionStart");
        yt && (pv && l.locale !== "ko" && (fu || yt !== "onCompositionStart" ? yt === "onCompositionEnd" && fu && (dt = B()) : (li = ue, h = "value" in li ? li.value : li.textContent, fu = !0)), ct = ss($, yt), 0 < ct.length && (yt = new nd(yt, n, null, l, ue), me.push({ event: yt, listeners: ct }), dt ? yt.data = dt : (dt = hv(l), dt !== null && (yt.data = dt)))), (dt = rs ? yv(n, l) : ry(n, l)) && ($ = ss($, "onBeforeInput"), 0 < $.length && (ue = new nd("onBeforeInput", "beforeinput", null, l, ue), me.push({ event: ue, listeners: $ }), ue.data = dt));
      }
      yo(me, r);
    });
  }
  function mu(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function ss(n, r) {
    for (var l = r + "Capture", u = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = Ur(n, l), d != null && u.unshift(mu(n, d, c)), d = Ur(n, r), d != null && u.push(mu(n, d, c))), n = n.return;
    }
    return u;
  }
  function _l(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function Ov(n, r, l, u, c) {
    for (var d = r._reactName, y = []; l !== null && l !== u; ) {
      var b = l, k = b.alternate, $ = b.stateNode;
      if (k !== null && k === u) break;
      b.tag === 5 && $ !== null && (b = $, c ? (k = Ur(l, d), k != null && y.unshift(mu(l, k, b))) : c || (k = Ur(l, d), k != null && y.push(mu(l, k, b)))), l = l.return;
    }
    y.length !== 0 && n.push({ event: r, listeners: y });
  }
  var Mv = /\r\n?/g, dy = /\u0000|\uFFFD/g;
  function zv(n) {
    return (typeof n == "string" ? n : "" + n).replace(Mv, `
`).replace(dy, "");
  }
  function Rc(n, r, l) {
    if (r = zv(r), zv(n) !== r && l) throw Error(R(425));
  }
  function kl() {
  }
  var cs = null, go = null;
  function Tc(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var _c = typeof setTimeout == "function" ? setTimeout : void 0, gd = typeof clearTimeout == "function" ? clearTimeout : void 0, Lv = typeof Promise == "function" ? Promise : void 0, hu = typeof queueMicrotask == "function" ? queueMicrotask : typeof Lv < "u" ? function(n) {
    return Lv.resolve(null).then(n).catch(kc);
  } : _c;
  function kc(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function yu(n, r) {
    var l = r, u = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8) if (l = c.data, l === "/$") {
        if (u === 0) {
          n.removeChild(c), ii(r);
          return;
        }
        u--;
      } else l !== "$" && l !== "$?" && l !== "$!" || u++;
      l = c;
    } while (l);
    ii(r);
  }
  function wi(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?") break;
        if (r === "/$") return null;
      }
    }
    return n;
  }
  function Av(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0) return n;
          r--;
        } else l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var Nl = Math.random().toString(36).slice(2), Ri = "__reactFiber$" + Nl, fs = "__reactProps$" + Nl, Qi = "__reactContainer$" + Nl, ds = "__reactEvents$" + Nl, gu = "__reactListeners$" + Nl, py = "__reactHandles$" + Nl;
  function So(n) {
    var r = n[Ri];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[Qi] || l[Ri]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = Av(n); n !== null; ) {
          if (l = n[Ri]) return l;
          n = Av(n);
        }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function rt(n) {
    return n = n[Ri] || n[Qi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function ui(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(R(33));
  }
  function Tn(n) {
    return n[fs] || null;
  }
  var Vt = [], Ua = -1;
  function Pa(n) {
    return { current: n };
  }
  function yn(n) {
    0 > Ua || (n.current = Vt[Ua], Vt[Ua] = null, Ua--);
  }
  function tt(n, r) {
    Ua++, Vt[Ua] = n.current, n.current = r;
  }
  var jr = {}, Mn = Pa(jr), nr = Pa(!1), ra = jr;
  function aa(n, r) {
    var l = n.type.contextTypes;
    if (!l) return jr;
    var u = n.stateNode;
    if (u && u.__reactInternalMemoizedUnmaskedChildContext === r) return u.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l) c[d] = r[d];
    return u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function qn(n) {
    return n = n.childContextTypes, n != null;
  }
  function Su() {
    yn(nr), yn(Mn);
  }
  function Uv(n, r, l) {
    if (Mn.current !== jr) throw Error(R(168));
    tt(Mn, r), tt(nr, l);
  }
  function ps(n, r, l) {
    var u = n.stateNode;
    if (r = r.childContextTypes, typeof u.getChildContext != "function") return l;
    u = u.getChildContext();
    for (var c in u) if (!(c in r)) throw Error(R(108, Se(n) || "Unknown", c));
    return ge({}, l, u);
  }
  function cr(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || jr, ra = Mn.current, tt(Mn, n), tt(nr, nr.current), !0;
  }
  function Nc(n, r, l) {
    var u = n.stateNode;
    if (!u) throw Error(R(169));
    l ? (n = ps(n, r, ra), u.__reactInternalMemoizedMergedChildContext = n, yn(nr), yn(Mn), tt(Mn, n)) : yn(nr), tt(nr, l);
  }
  var Ti = null, Cu = !1, Xi = !1;
  function Dc(n) {
    Ti === null ? Ti = [n] : Ti.push(n);
  }
  function Dl(n) {
    Cu = !0, Dc(n);
  }
  function _i() {
    if (!Xi && Ti !== null) {
      Xi = !0;
      var n = 0, r = Qt;
      try {
        var l = Ti;
        for (Qt = 1; n < l.length; n++) {
          var u = l[n];
          do
            u = u(!0);
          while (u !== null);
        }
        Ti = null, Cu = !1;
      } catch (c) {
        throw Ti !== null && (Ti = Ti.slice(n + 1)), gn(ni, _i), c;
      } finally {
        Qt = r, Xi = !1;
      }
    }
    return null;
  }
  var jl = [], Ol = 0, Ml = null, Ki = 0, Gn = [], Fa = 0, xa = null, ki = 1, Ni = "";
  function Co(n, r) {
    jl[Ol++] = Ki, jl[Ol++] = Ml, Ml = n, Ki = r;
  }
  function Pv(n, r, l) {
    Gn[Fa++] = ki, Gn[Fa++] = Ni, Gn[Fa++] = xa, xa = n;
    var u = ki;
    n = Ni;
    var c = 32 - Fr(u) - 1;
    u &= ~(1 << c), l += 1;
    var d = 32 - Fr(r) + c;
    if (30 < d) {
      var y = c - c % 5;
      d = (u & (1 << y) - 1).toString(32), u >>= y, c -= y, ki = 1 << 32 - Fr(r) + c | l << c | u, Ni = d + n;
    } else ki = 1 << d | l << c | u, Ni = n;
  }
  function jc(n) {
    n.return !== null && (Co(n, 1), Pv(n, 1, 0));
  }
  function Oc(n) {
    for (; n === Ml; ) Ml = jl[--Ol], jl[Ol] = null, Ki = jl[--Ol], jl[Ol] = null;
    for (; n === xa; ) xa = Gn[--Fa], Gn[Fa] = null, Ni = Gn[--Fa], Gn[Fa] = null, ki = Gn[--Fa], Gn[Fa] = null;
  }
  var ia = null, la = null, xn = !1, Ha = null;
  function Sd(n, r) {
    var l = Ya(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function Fv(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, ia = n, la = wi(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, ia = n, la = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = xa !== null ? { id: ki, overflow: Ni } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Ya(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, ia = n, la = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Cd(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function xd(n) {
    if (xn) {
      var r = la;
      if (r) {
        var l = r;
        if (!Fv(n, r)) {
          if (Cd(n)) throw Error(R(418));
          r = wi(l.nextSibling);
          var u = ia;
          r && Fv(n, r) ? Sd(u, l) : (n.flags = n.flags & -4097 | 2, xn = !1, ia = n);
        }
      } else {
        if (Cd(n)) throw Error(R(418));
        n.flags = n.flags & -4097 | 2, xn = !1, ia = n;
      }
    }
  }
  function rr(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    ia = n;
  }
  function Mc(n) {
    if (n !== ia) return !1;
    if (!xn) return rr(n), xn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Tc(n.type, n.memoizedProps)), r && (r = la)) {
      if (Cd(n)) throw vs(), Error(R(418));
      for (; r; ) Sd(n, r), r = wi(r.nextSibling);
    }
    if (rr(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(R(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                la = wi(n.nextSibling);
                break e;
              }
              r--;
            } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        la = null;
      }
    } else la = ia ? wi(n.stateNode.nextSibling) : null;
    return !0;
  }
  function vs() {
    for (var n = la; n; ) n = wi(n.nextSibling);
  }
  function zl() {
    la = ia = null, xn = !1;
  }
  function Ji(n) {
    Ha === null ? Ha = [n] : Ha.push(n);
  }
  var vy = Je.ReactCurrentBatchConfig;
  function xo(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1) throw Error(R(309));
          var u = l.stateNode;
        }
        if (!u) throw Error(R(147, n));
        var c = u, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(y) {
          var b = c.refs;
          y === null ? delete b[d] : b[d] = y;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string") throw Error(R(284));
      if (!l._owner) throw Error(R(290, n));
    }
    return n;
  }
  function zc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(R(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Hv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function bo(n) {
    function r(L, j) {
      if (n) {
        var H = L.deletions;
        H === null ? (L.deletions = [j], L.flags |= 16) : H.push(j);
      }
    }
    function l(L, j) {
      if (!n) return null;
      for (; j !== null; ) r(L, j), j = j.sibling;
      return null;
    }
    function u(L, j) {
      for (L = /* @__PURE__ */ new Map(); j !== null; ) j.key !== null ? L.set(j.key, j) : L.set(j.index, j), j = j.sibling;
      return L;
    }
    function c(L, j) {
      return L = Bl(L, j), L.index = 0, L.sibling = null, L;
    }
    function d(L, j, H) {
      return L.index = H, n ? (H = L.alternate, H !== null ? (H = H.index, H < j ? (L.flags |= 2, j) : H) : (L.flags |= 2, j)) : (L.flags |= 1048576, j);
    }
    function y(L) {
      return n && L.alternate === null && (L.flags |= 2), L;
    }
    function b(L, j, H, se) {
      return j === null || j.tag !== 6 ? (j = Jd(H, L.mode, se), j.return = L, j) : (j = c(j, H), j.return = L, j);
    }
    function k(L, j, H, se) {
      var qe = H.type;
      return qe === ae ? ue(L, j, H.props.children, se, H.key) : j !== null && (j.elementType === qe || typeof qe == "object" && qe !== null && qe.$$typeof === ht && Hv(qe) === j.type) ? (se = c(j, H.props), se.ref = xo(L, j, H), se.return = L, se) : (se = Is(H.type, H.key, H.props, null, L.mode, se), se.ref = xo(L, j, H), se.return = L, se);
    }
    function $(L, j, H, se) {
      return j === null || j.tag !== 4 || j.stateNode.containerInfo !== H.containerInfo || j.stateNode.implementation !== H.implementation ? (j = vf(H, L.mode, se), j.return = L, j) : (j = c(j, H.children || []), j.return = L, j);
    }
    function ue(L, j, H, se, qe) {
      return j === null || j.tag !== 7 ? (j = al(H, L.mode, se, qe), j.return = L, j) : (j = c(j, H), j.return = L, j);
    }
    function me(L, j, H) {
      if (typeof j == "string" && j !== "" || typeof j == "number") return j = Jd("" + j, L.mode, H), j.return = L, j;
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case re:
            return H = Is(j.type, j.key, j.props, null, L.mode, H), H.ref = xo(L, null, j), H.return = L, H;
          case Y:
            return j = vf(j, L.mode, H), j.return = L, j;
          case ht:
            var se = j._init;
            return me(L, se(j._payload), H);
        }
        if ($n(j) || Le(j)) return j = al(j, L.mode, H, null), j.return = L, j;
        zc(L, j);
      }
      return null;
    }
    function le(L, j, H, se) {
      var qe = j !== null ? j.key : null;
      if (typeof H == "string" && H !== "" || typeof H == "number") return qe !== null ? null : b(L, j, "" + H, se);
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case re:
            return H.key === qe ? k(L, j, H, se) : null;
          case Y:
            return H.key === qe ? $(L, j, H, se) : null;
          case ht:
            return qe = H._init, le(
              L,
              j,
              qe(H._payload),
              se
            );
        }
        if ($n(H) || Le(H)) return qe !== null ? null : ue(L, j, H, se, null);
        zc(L, H);
      }
      return null;
    }
    function Ae(L, j, H, se, qe) {
      if (typeof se == "string" && se !== "" || typeof se == "number") return L = L.get(H) || null, b(j, L, "" + se, qe);
      if (typeof se == "object" && se !== null) {
        switch (se.$$typeof) {
          case re:
            return L = L.get(se.key === null ? H : se.key) || null, k(j, L, se, qe);
          case Y:
            return L = L.get(se.key === null ? H : se.key) || null, $(j, L, se, qe);
          case ht:
            var ct = se._init;
            return Ae(L, j, H, ct(se._payload), qe);
        }
        if ($n(se) || Le(se)) return L = L.get(H) || null, ue(j, L, se, qe, null);
        zc(j, se);
      }
      return null;
    }
    function Ye(L, j, H, se) {
      for (var qe = null, ct = null, dt = j, yt = j = 0, pr = null; dt !== null && yt < H.length; yt++) {
        dt.index > yt ? (pr = dt, dt = null) : pr = dt.sibling;
        var Jt = le(L, dt, H[yt], se);
        if (Jt === null) {
          dt === null && (dt = pr);
          break;
        }
        n && dt && Jt.alternate === null && r(L, dt), j = d(Jt, j, yt), ct === null ? qe = Jt : ct.sibling = Jt, ct = Jt, dt = pr;
      }
      if (yt === H.length) return l(L, dt), xn && Co(L, yt), qe;
      if (dt === null) {
        for (; yt < H.length; yt++) dt = me(L, H[yt], se), dt !== null && (j = d(dt, j, yt), ct === null ? qe = dt : ct.sibling = dt, ct = dt);
        return xn && Co(L, yt), qe;
      }
      for (dt = u(L, dt); yt < H.length; yt++) pr = Ae(dt, L, yt, H[yt], se), pr !== null && (n && pr.alternate !== null && dt.delete(pr.key === null ? yt : pr.key), j = d(pr, j, yt), ct === null ? qe = pr : ct.sibling = pr, ct = pr);
      return n && dt.forEach(function(Yl) {
        return r(L, Yl);
      }), xn && Co(L, yt), qe;
    }
    function Qe(L, j, H, se) {
      var qe = Le(H);
      if (typeof qe != "function") throw Error(R(150));
      if (H = qe.call(H), H == null) throw Error(R(151));
      for (var ct = qe = null, dt = j, yt = j = 0, pr = null, Jt = H.next(); dt !== null && !Jt.done; yt++, Jt = H.next()) {
        dt.index > yt ? (pr = dt, dt = null) : pr = dt.sibling;
        var Yl = le(L, dt, Jt.value, se);
        if (Yl === null) {
          dt === null && (dt = pr);
          break;
        }
        n && dt && Yl.alternate === null && r(L, dt), j = d(Yl, j, yt), ct === null ? qe = Yl : ct.sibling = Yl, ct = Yl, dt = pr;
      }
      if (Jt.done) return l(
        L,
        dt
      ), xn && Co(L, yt), qe;
      if (dt === null) {
        for (; !Jt.done; yt++, Jt = H.next()) Jt = me(L, Jt.value, se), Jt !== null && (j = d(Jt, j, yt), ct === null ? qe = Jt : ct.sibling = Jt, ct = Jt);
        return xn && Co(L, yt), qe;
      }
      for (dt = u(L, dt); !Jt.done; yt++, Jt = H.next()) Jt = Ae(dt, L, yt, Jt.value, se), Jt !== null && (n && Jt.alternate !== null && dt.delete(Jt.key === null ? yt : Jt.key), j = d(Jt, j, yt), ct === null ? qe = Jt : ct.sibling = Jt, ct = Jt);
      return n && dt.forEach(function(bm) {
        return r(L, bm);
      }), xn && Co(L, yt), qe;
    }
    function Vn(L, j, H, se) {
      if (typeof H == "object" && H !== null && H.type === ae && H.key === null && (H = H.props.children), typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case re:
            e: {
              for (var qe = H.key, ct = j; ct !== null; ) {
                if (ct.key === qe) {
                  if (qe = H.type, qe === ae) {
                    if (ct.tag === 7) {
                      l(L, ct.sibling), j = c(ct, H.props.children), j.return = L, L = j;
                      break e;
                    }
                  } else if (ct.elementType === qe || typeof qe == "object" && qe !== null && qe.$$typeof === ht && Hv(qe) === ct.type) {
                    l(L, ct.sibling), j = c(ct, H.props), j.ref = xo(L, ct, H), j.return = L, L = j;
                    break e;
                  }
                  l(L, ct);
                  break;
                } else r(L, ct);
                ct = ct.sibling;
              }
              H.type === ae ? (j = al(H.props.children, L.mode, se, H.key), j.return = L, L = j) : (se = Is(H.type, H.key, H.props, null, L.mode, se), se.ref = xo(L, j, H), se.return = L, L = se);
            }
            return y(L);
          case Y:
            e: {
              for (ct = H.key; j !== null; ) {
                if (j.key === ct) if (j.tag === 4 && j.stateNode.containerInfo === H.containerInfo && j.stateNode.implementation === H.implementation) {
                  l(L, j.sibling), j = c(j, H.children || []), j.return = L, L = j;
                  break e;
                } else {
                  l(L, j);
                  break;
                }
                else r(L, j);
                j = j.sibling;
              }
              j = vf(H, L.mode, se), j.return = L, L = j;
            }
            return y(L);
          case ht:
            return ct = H._init, Vn(L, j, ct(H._payload), se);
        }
        if ($n(H)) return Ye(L, j, H, se);
        if (Le(H)) return Qe(L, j, H, se);
        zc(L, H);
      }
      return typeof H == "string" && H !== "" || typeof H == "number" ? (H = "" + H, j !== null && j.tag === 6 ? (l(L, j.sibling), j = c(j, H), j.return = L, L = j) : (l(L, j), j = Jd(H, L.mode, se), j.return = L, L = j), y(L)) : l(L, j);
    }
    return Vn;
  }
  var Un = bo(!0), De = bo(!1), ba = Pa(null), oa = null, xu = null, bd = null;
  function Ed() {
    bd = xu = oa = null;
  }
  function wd(n) {
    var r = ba.current;
    yn(ba), n._currentValue = r;
  }
  function Rd(n, r, l) {
    for (; n !== null; ) {
      var u = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, u !== null && (u.childLanes |= r)) : u !== null && (u.childLanes & r) !== r && (u.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function _n(n, r) {
    oa = n, bd = xu = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (Qn = !0), n.firstContext = null);
  }
  function Va(n) {
    var r = n._currentValue;
    if (bd !== n) if (n = { context: n, memoizedValue: r, next: null }, xu === null) {
      if (oa === null) throw Error(R(308));
      xu = n, oa.dependencies = { lanes: 0, firstContext: n };
    } else xu = xu.next = n;
    return r;
  }
  var Eo = null;
  function Td(n) {
    Eo === null ? Eo = [n] : Eo.push(n);
  }
  function _d(n, r, l, u) {
    var c = r.interleaved;
    return c === null ? (l.next = l, Td(r)) : (l.next = c.next, c.next = l), r.interleaved = l, Ea(n, u);
  }
  function Ea(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; ) n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var wa = !1;
  function kd(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Vv(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Zi(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Ll(n, r, l) {
    var u = n.updateQueue;
    if (u === null) return null;
    if (u = u.shared, Bt & 2) {
      var c = u.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), u.pending = r, Ea(n, l);
    }
    return c = u.interleaved, c === null ? (r.next = r, Td(u)) : (r.next = c.next, c.next = r), u.interleaved = r, Ea(n, l);
  }
  function Lc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var u = r.lanes;
      u &= n.pendingLanes, l |= u, r.lanes = l, Ii(n, l);
    }
  }
  function Bv(n, r) {
    var l = n.updateQueue, u = n.alternate;
    if (u !== null && (u = u.updateQueue, l === u)) {
      var c = null, d = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var y = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          d === null ? c = d = y : d = d.next = y, l = l.next;
        } while (l !== null);
        d === null ? c = d = r : d = d.next = r;
      } else c = d = r;
      l = { baseState: u.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: u.shared, effects: u.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function ms(n, r, l, u) {
    var c = n.updateQueue;
    wa = !1;
    var d = c.firstBaseUpdate, y = c.lastBaseUpdate, b = c.shared.pending;
    if (b !== null) {
      c.shared.pending = null;
      var k = b, $ = k.next;
      k.next = null, y === null ? d = $ : y.next = $, y = k;
      var ue = n.alternate;
      ue !== null && (ue = ue.updateQueue, b = ue.lastBaseUpdate, b !== y && (b === null ? ue.firstBaseUpdate = $ : b.next = $, ue.lastBaseUpdate = k));
    }
    if (d !== null) {
      var me = c.baseState;
      y = 0, ue = $ = k = null, b = d;
      do {
        var le = b.lane, Ae = b.eventTime;
        if ((u & le) === le) {
          ue !== null && (ue = ue.next = {
            eventTime: Ae,
            lane: 0,
            tag: b.tag,
            payload: b.payload,
            callback: b.callback,
            next: null
          });
          e: {
            var Ye = n, Qe = b;
            switch (le = r, Ae = l, Qe.tag) {
              case 1:
                if (Ye = Qe.payload, typeof Ye == "function") {
                  me = Ye.call(Ae, me, le);
                  break e;
                }
                me = Ye;
                break e;
              case 3:
                Ye.flags = Ye.flags & -65537 | 128;
              case 0:
                if (Ye = Qe.payload, le = typeof Ye == "function" ? Ye.call(Ae, me, le) : Ye, le == null) break e;
                me = ge({}, me, le);
                break e;
              case 2:
                wa = !0;
            }
          }
          b.callback !== null && b.lane !== 0 && (n.flags |= 64, le = c.effects, le === null ? c.effects = [b] : le.push(b));
        } else Ae = { eventTime: Ae, lane: le, tag: b.tag, payload: b.payload, callback: b.callback, next: null }, ue === null ? ($ = ue = Ae, k = me) : ue = ue.next = Ae, y |= le;
        if (b = b.next, b === null) {
          if (b = c.shared.pending, b === null) break;
          le = b, b = le.next, le.next = null, c.lastBaseUpdate = le, c.shared.pending = null;
        }
      } while (!0);
      if (ue === null && (k = me), c.baseState = k, c.firstBaseUpdate = $, c.lastBaseUpdate = ue, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          y |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      zi |= y, n.lanes = y, n.memoizedState = me;
    }
  }
  function Nd(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var u = n[r], c = u.callback;
      if (c !== null) {
        if (u.callback = null, u = l, typeof c != "function") throw Error(R(191, c));
        c.call(u);
      }
    }
  }
  var hs = {}, Di = Pa(hs), ys = Pa(hs), gs = Pa(hs);
  function wo(n) {
    if (n === hs) throw Error(R(174));
    return n;
  }
  function Dd(n, r) {
    switch (tt(gs, r), tt(ys, n), tt(Di, hs), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : In(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = In(r, n);
    }
    yn(Di), tt(Di, r);
  }
  function Ro() {
    yn(Di), yn(ys), yn(gs);
  }
  function $v(n) {
    wo(gs.current);
    var r = wo(Di.current), l = In(r, n.type);
    r !== l && (tt(ys, n), tt(Di, l));
  }
  function Ac(n) {
    ys.current === n && (yn(Di), yn(ys));
  }
  var kn = Pa(0);
  function Uc(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!")) return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128) return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n) return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var Ss = [];
  function at() {
    for (var n = 0; n < Ss.length; n++) Ss[n]._workInProgressVersionPrimary = null;
    Ss.length = 0;
  }
  var Dt = Je.ReactCurrentDispatcher, Xt = Je.ReactCurrentBatchConfig, fn = 0, Kt = null, Wn = null, fr = null, Pc = !1, Cs = !1, To = 0, ie = 0;
  function Wt() {
    throw Error(R(321));
  }
  function vt(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!oi(n[l], r[l])) return !1;
    return !0;
  }
  function Al(n, r, l, u, c, d) {
    if (fn = d, Kt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Dt.current = n === null || n.memoizedState === null ? Zc : Ts, n = l(u, c), Cs) {
      d = 0;
      do {
        if (Cs = !1, To = 0, 25 <= d) throw Error(R(301));
        d += 1, fr = Wn = null, r.updateQueue = null, Dt.current = ef, n = l(u, c);
      } while (Cs);
    }
    if (Dt.current = jo, r = Wn !== null && Wn.next !== null, fn = 0, fr = Wn = Kt = null, Pc = !1, r) throw Error(R(300));
    return n;
  }
  function si() {
    var n = To !== 0;
    return To = 0, n;
  }
  function Or() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return fr === null ? Kt.memoizedState = fr = n : fr = fr.next = n, fr;
  }
  function Pn() {
    if (Wn === null) {
      var n = Kt.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = Wn.next;
    var r = fr === null ? Kt.memoizedState : fr.next;
    if (r !== null) fr = r, Wn = n;
    else {
      if (n === null) throw Error(R(310));
      Wn = n, n = { memoizedState: Wn.memoizedState, baseState: Wn.baseState, baseQueue: Wn.baseQueue, queue: Wn.queue, next: null }, fr === null ? Kt.memoizedState = fr = n : fr = fr.next = n;
    }
    return fr;
  }
  function el(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Ul(n) {
    var r = Pn(), l = r.queue;
    if (l === null) throw Error(R(311));
    l.lastRenderedReducer = n;
    var u = Wn, c = u.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var y = c.next;
        c.next = d.next, d.next = y;
      }
      u.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, u = u.baseState;
      var b = y = null, k = null, $ = d;
      do {
        var ue = $.lane;
        if ((fn & ue) === ue) k !== null && (k = k.next = { lane: 0, action: $.action, hasEagerState: $.hasEagerState, eagerState: $.eagerState, next: null }), u = $.hasEagerState ? $.eagerState : n(u, $.action);
        else {
          var me = {
            lane: ue,
            action: $.action,
            hasEagerState: $.hasEagerState,
            eagerState: $.eagerState,
            next: null
          };
          k === null ? (b = k = me, y = u) : k = k.next = me, Kt.lanes |= ue, zi |= ue;
        }
        $ = $.next;
      } while ($ !== null && $ !== d);
      k === null ? y = u : k.next = b, oi(u, r.memoizedState) || (Qn = !0), r.memoizedState = u, r.baseState = y, r.baseQueue = k, l.lastRenderedState = u;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, Kt.lanes |= d, zi |= d, c = c.next;
      while (c !== n);
    } else c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function _o(n) {
    var r = Pn(), l = r.queue;
    if (l === null) throw Error(R(311));
    l.lastRenderedReducer = n;
    var u = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var y = c = c.next;
      do
        d = n(d, y.action), y = y.next;
      while (y !== c);
      oi(d, r.memoizedState) || (Qn = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, u];
  }
  function Fc() {
  }
  function Hc(n, r) {
    var l = Kt, u = Pn(), c = r(), d = !oi(u.memoizedState, c);
    if (d && (u.memoizedState = c, Qn = !0), u = u.queue, xs($c.bind(null, l, u, n), [n]), u.getSnapshot !== r || d || fr !== null && fr.memoizedState.tag & 1) {
      if (l.flags |= 2048, ko(9, Bc.bind(null, l, u, c, r), void 0, null), ar === null) throw Error(R(349));
      fn & 30 || Vc(l, r, c);
    }
    return c;
  }
  function Vc(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = Kt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Kt.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function Bc(n, r, l, u) {
    r.value = l, r.getSnapshot = u, Ic(r) && Yc(n);
  }
  function $c(n, r, l) {
    return l(function() {
      Ic(r) && Yc(n);
    });
  }
  function Ic(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !oi(n, l);
    } catch {
      return !0;
    }
  }
  function Yc(n) {
    var r = Ea(n, 1);
    r !== null && Yr(r, n, 1, -1);
  }
  function qc(n) {
    var r = Or();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: el, lastRenderedState: n }, r.queue = n, n = n.dispatch = Do.bind(null, Kt, n), [r.memoizedState, n];
  }
  function ko(n, r, l, u) {
    return n = { tag: n, create: r, destroy: l, deps: u, next: null }, r = Kt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Kt.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (u = l.next, l.next = n, n.next = u, r.lastEffect = n)), n;
  }
  function Gc() {
    return Pn().memoizedState;
  }
  function bu(n, r, l, u) {
    var c = Or();
    Kt.flags |= n, c.memoizedState = ko(1 | r, l, void 0, u === void 0 ? null : u);
  }
  function Eu(n, r, l, u) {
    var c = Pn();
    u = u === void 0 ? null : u;
    var d = void 0;
    if (Wn !== null) {
      var y = Wn.memoizedState;
      if (d = y.destroy, u !== null && vt(u, y.deps)) {
        c.memoizedState = ko(r, l, d, u);
        return;
      }
    }
    Kt.flags |= n, c.memoizedState = ko(1 | r, l, d, u);
  }
  function Wc(n, r) {
    return bu(8390656, 8, n, r);
  }
  function xs(n, r) {
    return Eu(2048, 8, n, r);
  }
  function Qc(n, r) {
    return Eu(4, 2, n, r);
  }
  function bs(n, r) {
    return Eu(4, 4, n, r);
  }
  function No(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function Xc(n, r, l) {
    return l = l != null ? l.concat([n]) : null, Eu(4, 4, No.bind(null, r, n), l);
  }
  function Es() {
  }
  function Kc(n, r) {
    var l = Pn();
    r = r === void 0 ? null : r;
    var u = l.memoizedState;
    return u !== null && r !== null && vt(r, u[1]) ? u[0] : (l.memoizedState = [n, r], n);
  }
  function Jc(n, r) {
    var l = Pn();
    r = r === void 0 ? null : r;
    var u = l.memoizedState;
    return u !== null && r !== null && vt(r, u[1]) ? u[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function jd(n, r, l) {
    return fn & 21 ? (oi(l, r) || (l = nu(), Kt.lanes |= l, zi |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, Qn = !0), n.memoizedState = l);
  }
  function ws(n, r) {
    var l = Qt;
    Qt = l !== 0 && 4 > l ? l : 4, n(!0);
    var u = Xt.transition;
    Xt.transition = {};
    try {
      n(!1), r();
    } finally {
      Qt = l, Xt.transition = u;
    }
  }
  function Od() {
    return Pn().memoizedState;
  }
  function Rs(n, r, l) {
    var u = Li(n);
    if (l = { lane: u, action: l, hasEagerState: !1, eagerState: null, next: null }, ua(n)) Iv(r, l);
    else if (l = _d(n, r, l, u), l !== null) {
      var c = Jn();
      Yr(l, n, u, c), vn(l, r, u);
    }
  }
  function Do(n, r, l) {
    var u = Li(n), c = { lane: u, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (ua(n)) Iv(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
        var y = r.lastRenderedState, b = d(y, l);
        if (c.hasEagerState = !0, c.eagerState = b, oi(b, y)) {
          var k = r.interleaved;
          k === null ? (c.next = c, Td(r)) : (c.next = k.next, k.next = c), r.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      l = _d(n, r, c, u), l !== null && (c = Jn(), Yr(l, n, u, c), vn(l, r, u));
    }
  }
  function ua(n) {
    var r = n.alternate;
    return n === Kt || r !== null && r === Kt;
  }
  function Iv(n, r) {
    Cs = Pc = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function vn(n, r, l) {
    if (l & 4194240) {
      var u = r.lanes;
      u &= n.pendingLanes, l |= u, r.lanes = l, Ii(n, l);
    }
  }
  var jo = { readContext: Va, useCallback: Wt, useContext: Wt, useEffect: Wt, useImperativeHandle: Wt, useInsertionEffect: Wt, useLayoutEffect: Wt, useMemo: Wt, useReducer: Wt, useRef: Wt, useState: Wt, useDebugValue: Wt, useDeferredValue: Wt, useTransition: Wt, useMutableSource: Wt, useSyncExternalStore: Wt, useId: Wt, unstable_isNewReconciler: !1 }, Zc = { readContext: Va, useCallback: function(n, r) {
    return Or().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Va, useEffect: Wc, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, bu(
      4194308,
      4,
      No.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return bu(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return bu(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = Or();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var u = Or();
    return r = l !== void 0 ? l(r) : r, u.memoizedState = u.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, u.queue = n, n = n.dispatch = Rs.bind(null, Kt, n), [u.memoizedState, n];
  }, useRef: function(n) {
    var r = Or();
    return n = { current: n }, r.memoizedState = n;
  }, useState: qc, useDebugValue: Es, useDeferredValue: function(n) {
    return Or().memoizedState = n;
  }, useTransition: function() {
    var n = qc(!1), r = n[0];
    return n = ws.bind(null, n[1]), Or().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var u = Kt, c = Or();
    if (xn) {
      if (l === void 0) throw Error(R(407));
      l = l();
    } else {
      if (l = r(), ar === null) throw Error(R(349));
      fn & 30 || Vc(u, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, Wc($c.bind(
      null,
      u,
      d,
      n
    ), [n]), u.flags |= 2048, ko(9, Bc.bind(null, u, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = Or(), r = ar.identifierPrefix;
    if (xn) {
      var l = Ni, u = ki;
      l = (u & ~(1 << 32 - Fr(u) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = To++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = ie++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Ts = {
    readContext: Va,
    useCallback: Kc,
    useContext: Va,
    useEffect: xs,
    useImperativeHandle: Xc,
    useInsertionEffect: Qc,
    useLayoutEffect: bs,
    useMemo: Jc,
    useReducer: Ul,
    useRef: Gc,
    useState: function() {
      return Ul(el);
    },
    useDebugValue: Es,
    useDeferredValue: function(n) {
      var r = Pn();
      return jd(r, Wn.memoizedState, n);
    },
    useTransition: function() {
      var n = Ul(el)[0], r = Pn().memoizedState;
      return [n, r];
    },
    useMutableSource: Fc,
    useSyncExternalStore: Hc,
    useId: Od,
    unstable_isNewReconciler: !1
  }, ef = { readContext: Va, useCallback: Kc, useContext: Va, useEffect: xs, useImperativeHandle: Xc, useInsertionEffect: Qc, useLayoutEffect: bs, useMemo: Jc, useReducer: _o, useRef: Gc, useState: function() {
    return _o(el);
  }, useDebugValue: Es, useDeferredValue: function(n) {
    var r = Pn();
    return Wn === null ? r.memoizedState = n : jd(r, Wn.memoizedState, n);
  }, useTransition: function() {
    var n = _o(el)[0], r = Pn().memoizedState;
    return [n, r];
  }, useMutableSource: Fc, useSyncExternalStore: Hc, useId: Od, unstable_isNewReconciler: !1 };
  function ci(n, r) {
    if (n && n.defaultProps) {
      r = ge({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function Md(n, r, l, u) {
    r = n.memoizedState, l = l(u, r), l = l == null ? r : ge({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var tf = { isMounted: function(n) {
    return (n = n._reactInternals) ? Et(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var u = Jn(), c = Li(n), d = Zi(u, c);
    d.payload = r, l != null && (d.callback = l), r = Ll(n, d, c), r !== null && (Yr(r, n, c, u), Lc(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var u = Jn(), c = Li(n), d = Zi(u, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = Ll(n, d, c), r !== null && (Yr(r, n, c, u), Lc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = Jn(), u = Li(n), c = Zi(l, u);
    c.tag = 2, r != null && (c.callback = r), r = Ll(n, c, u), r !== null && (Yr(r, n, u, l), Lc(r, n, u));
  } };
  function Yv(n, r, l, u, c, d, y) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(u, d, y) : r.prototype && r.prototype.isPureReactComponent ? !is(l, u) || !is(c, d) : !0;
  }
  function nf(n, r, l) {
    var u = !1, c = jr, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Va(d) : (c = qn(r) ? ra : Mn.current, u = r.contextTypes, d = (u = u != null) ? aa(n, c) : jr), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = tf, n.stateNode = r, r._reactInternals = n, u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function qv(n, r, l, u) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, u), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, u), r.state !== n && tf.enqueueReplaceState(r, r.state, null);
  }
  function _s(n, r, l, u) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, kd(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Va(d) : (d = qn(r) ? ra : Mn.current, c.context = aa(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (Md(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && tf.enqueueReplaceState(c, c.state, null), ms(n, l, c, u), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Oo(n, r) {
    try {
      var l = "", u = r;
      do
        l += St(u), u = u.return;
      while (u);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function zd(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function Ld(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var rf = typeof WeakMap == "function" ? WeakMap : Map;
  function Gv(n, r, l) {
    l = Zi(-1, l), l.tag = 3, l.payload = { element: null };
    var u = r.value;
    return l.callback = function() {
      Nu || (Nu = !0, Lo = u), Ld(n, r);
    }, l;
  }
  function Ad(n, r, l) {
    l = Zi(-1, l), l.tag = 3;
    var u = n.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var c = r.value;
      l.payload = function() {
        return u(c);
      }, l.callback = function() {
        Ld(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      Ld(n, r), typeof u != "function" && (Hl === null ? Hl = /* @__PURE__ */ new Set([this]) : Hl.add(this));
      var y = r.stack;
      this.componentDidCatch(r.value, { componentStack: y !== null ? y : "" });
    }), l;
  }
  function Ud(n, r, l) {
    var u = n.pingCache;
    if (u === null) {
      u = n.pingCache = new rf();
      var c = /* @__PURE__ */ new Set();
      u.set(r, c);
    } else c = u.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), u.set(r, c));
    c.has(l) || (c.add(l), n = xy.bind(null, n, r, l), r.then(n, n));
  }
  function Wv(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Pl(n, r, l, u, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = Zi(-1, 1), r.tag = 2, Ll(l, r, 1))), l.lanes |= 1), n);
  }
  var ks = Je.ReactCurrentOwner, Qn = !1;
  function Cr(n, r, l, u) {
    r.child = n === null ? De(r, null, l, u) : Un(r, n.child, l, u);
  }
  function sa(n, r, l, u, c) {
    l = l.render;
    var d = r.ref;
    return _n(r, c), u = Al(n, r, l, u, d, c), l = si(), n !== null && !Qn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, $a(n, r, c)) : (xn && l && jc(r), r.flags |= 1, Cr(n, r, u, c), r.child);
  }
  function Mo(n, r, l, u, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Kd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, Tt(n, r, d, u, c)) : (n = Is(l.type, null, u, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var y = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : is, l(y, u) && n.ref === r.ref) return $a(n, r, c);
    }
    return r.flags |= 1, n = Bl(d, u), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Tt(n, r, l, u, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (is(d, u) && n.ref === r.ref) if (Qn = !1, r.pendingProps = u = d, (n.lanes & c) !== 0) n.flags & 131072 && (Qn = !0);
      else return r.lanes = n.lanes, $a(n, r, c);
    }
    return Qv(n, r, l, u, c);
  }
  function Ns(n, r, l) {
    var u = r.pendingProps, c = u.children, d = n !== null ? n.memoizedState : null;
    if (u.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, tt(Tu, Ra), Ra |= l;
    else {
      if (!(l & 1073741824)) return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, tt(Tu, Ra), Ra |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, u = d !== null ? d.baseLanes : l, tt(Tu, Ra), Ra |= u;
    }
    else d !== null ? (u = d.baseLanes | l, r.memoizedState = null) : u = l, tt(Tu, Ra), Ra |= u;
    return Cr(n, r, c, l), r.child;
  }
  function Pd(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Qv(n, r, l, u, c) {
    var d = qn(l) ? ra : Mn.current;
    return d = aa(r, d), _n(r, c), l = Al(n, r, l, u, d, c), u = si(), n !== null && !Qn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, $a(n, r, c)) : (xn && u && jc(r), r.flags |= 1, Cr(n, r, l, c), r.child);
  }
  function Xv(n, r, l, u, c) {
    if (qn(l)) {
      var d = !0;
      cr(r);
    } else d = !1;
    if (_n(r, c), r.stateNode === null) Ba(n, r), nf(r, l, u), _s(r, l, u, c), u = !0;
    else if (n === null) {
      var y = r.stateNode, b = r.memoizedProps;
      y.props = b;
      var k = y.context, $ = l.contextType;
      typeof $ == "object" && $ !== null ? $ = Va($) : ($ = qn(l) ? ra : Mn.current, $ = aa(r, $));
      var ue = l.getDerivedStateFromProps, me = typeof ue == "function" || typeof y.getSnapshotBeforeUpdate == "function";
      me || typeof y.UNSAFE_componentWillReceiveProps != "function" && typeof y.componentWillReceiveProps != "function" || (b !== u || k !== $) && qv(r, y, u, $), wa = !1;
      var le = r.memoizedState;
      y.state = le, ms(r, u, y, c), k = r.memoizedState, b !== u || le !== k || nr.current || wa ? (typeof ue == "function" && (Md(r, l, ue, u), k = r.memoizedState), (b = wa || Yv(r, l, b, u, le, k, $)) ? (me || typeof y.UNSAFE_componentWillMount != "function" && typeof y.componentWillMount != "function" || (typeof y.componentWillMount == "function" && y.componentWillMount(), typeof y.UNSAFE_componentWillMount == "function" && y.UNSAFE_componentWillMount()), typeof y.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof y.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = u, r.memoizedState = k), y.props = u, y.state = k, y.context = $, u = b) : (typeof y.componentDidMount == "function" && (r.flags |= 4194308), u = !1);
    } else {
      y = r.stateNode, Vv(n, r), b = r.memoizedProps, $ = r.type === r.elementType ? b : ci(r.type, b), y.props = $, me = r.pendingProps, le = y.context, k = l.contextType, typeof k == "object" && k !== null ? k = Va(k) : (k = qn(l) ? ra : Mn.current, k = aa(r, k));
      var Ae = l.getDerivedStateFromProps;
      (ue = typeof Ae == "function" || typeof y.getSnapshotBeforeUpdate == "function") || typeof y.UNSAFE_componentWillReceiveProps != "function" && typeof y.componentWillReceiveProps != "function" || (b !== me || le !== k) && qv(r, y, u, k), wa = !1, le = r.memoizedState, y.state = le, ms(r, u, y, c);
      var Ye = r.memoizedState;
      b !== me || le !== Ye || nr.current || wa ? (typeof Ae == "function" && (Md(r, l, Ae, u), Ye = r.memoizedState), ($ = wa || Yv(r, l, $, u, le, Ye, k) || !1) ? (ue || typeof y.UNSAFE_componentWillUpdate != "function" && typeof y.componentWillUpdate != "function" || (typeof y.componentWillUpdate == "function" && y.componentWillUpdate(u, Ye, k), typeof y.UNSAFE_componentWillUpdate == "function" && y.UNSAFE_componentWillUpdate(u, Ye, k)), typeof y.componentDidUpdate == "function" && (r.flags |= 4), typeof y.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof y.componentDidUpdate != "function" || b === n.memoizedProps && le === n.memoizedState || (r.flags |= 4), typeof y.getSnapshotBeforeUpdate != "function" || b === n.memoizedProps && le === n.memoizedState || (r.flags |= 1024), r.memoizedProps = u, r.memoizedState = Ye), y.props = u, y.state = Ye, y.context = k, u = $) : (typeof y.componentDidUpdate != "function" || b === n.memoizedProps && le === n.memoizedState || (r.flags |= 4), typeof y.getSnapshotBeforeUpdate != "function" || b === n.memoizedProps && le === n.memoizedState || (r.flags |= 1024), u = !1);
    }
    return Ds(n, r, l, u, d, c);
  }
  function Ds(n, r, l, u, c, d) {
    Pd(n, r);
    var y = (r.flags & 128) !== 0;
    if (!u && !y) return c && Nc(r, l, !1), $a(n, r, d);
    u = r.stateNode, ks.current = r;
    var b = y && typeof l.getDerivedStateFromError != "function" ? null : u.render();
    return r.flags |= 1, n !== null && y ? (r.child = Un(r, n.child, null, d), r.child = Un(r, null, b, d)) : Cr(n, r, b, d), r.memoizedState = u.state, c && Nc(r, l, !0), r.child;
  }
  function wu(n) {
    var r = n.stateNode;
    r.pendingContext ? Uv(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Uv(n, r.context, !1), Dd(n, r.containerInfo);
  }
  function Kv(n, r, l, u, c) {
    return zl(), Ji(c), r.flags |= 256, Cr(n, r, l, u), r.child;
  }
  var af = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Fd(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function lf(n, r, l) {
    var u = r.pendingProps, c = kn.current, d = !1, y = (r.flags & 128) !== 0, b;
    if ((b = y) || (b = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), b ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), tt(kn, c & 1), n === null)
      return xd(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (y = u.children, n = u.fallback, d ? (u = r.mode, d = r.child, y = { mode: "hidden", children: y }, !(u & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = y) : d = $l(y, u, 0, null), n = al(n, u, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Fd(l), r.memoizedState = af, n) : Hd(r, y));
    if (c = n.memoizedState, c !== null && (b = c.dehydrated, b !== null)) return Jv(n, r, y, u, b, c, l);
    if (d) {
      d = u.fallback, y = r.mode, c = n.child, b = c.sibling;
      var k = { mode: "hidden", children: u.children };
      return !(y & 1) && r.child !== c ? (u = r.child, u.childLanes = 0, u.pendingProps = k, r.deletions = null) : (u = Bl(c, k), u.subtreeFlags = c.subtreeFlags & 14680064), b !== null ? d = Bl(b, d) : (d = al(d, y, l, null), d.flags |= 2), d.return = r, u.return = r, u.sibling = d, r.child = u, u = d, d = r.child, y = n.child.memoizedState, y = y === null ? Fd(l) : { baseLanes: y.baseLanes | l, cachePool: null, transitions: y.transitions }, d.memoizedState = y, d.childLanes = n.childLanes & ~l, r.memoizedState = af, u;
    }
    return d = n.child, n = d.sibling, u = Bl(d, { mode: "visible", children: u.children }), !(r.mode & 1) && (u.lanes = l), u.return = r, u.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = u, r.memoizedState = null, u;
  }
  function Hd(n, r) {
    return r = $l({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function js(n, r, l, u) {
    return u !== null && Ji(u), Un(r, n.child, null, l), n = Hd(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Jv(n, r, l, u, c, d, y) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, u = zd(Error(R(422))), js(n, r, y, u)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = u.fallback, c = r.mode, u = $l({ mode: "visible", children: u.children }, c, 0, null), d = al(d, c, y, null), d.flags |= 2, u.return = r, d.return = r, u.sibling = d, r.child = u, r.mode & 1 && Un(r, n.child, null, y), r.child.memoizedState = Fd(y), r.memoizedState = af, d);
    if (!(r.mode & 1)) return js(n, r, y, null);
    if (c.data === "$!") {
      if (u = c.nextSibling && c.nextSibling.dataset, u) var b = u.dgst;
      return u = b, d = Error(R(419)), u = zd(d, u, void 0), js(n, r, y, u);
    }
    if (b = (y & n.childLanes) !== 0, Qn || b) {
      if (u = ar, u !== null) {
        switch (y & -y) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
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
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = c & (u.suspendedLanes | y) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, Ea(n, c), Yr(u, n, c, -1));
      }
      return Xd(), u = zd(Error(R(421))), js(n, r, y, u);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = by.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, la = wi(c.nextSibling), ia = r, xn = !0, Ha = null, n !== null && (Gn[Fa++] = ki, Gn[Fa++] = Ni, Gn[Fa++] = xa, ki = n.id, Ni = n.overflow, xa = r), r = Hd(r, u.children), r.flags |= 4096, r);
  }
  function Vd(n, r, l) {
    n.lanes |= r;
    var u = n.alternate;
    u !== null && (u.lanes |= r), Rd(n.return, r, l);
  }
  function Br(n, r, l, u, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: u, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = u, d.tail = l, d.tailMode = c);
  }
  function ji(n, r, l) {
    var u = r.pendingProps, c = u.revealOrder, d = u.tail;
    if (Cr(n, r, u.children, l), u = kn.current, u & 2) u = u & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && Vd(n, l, r);
        else if (n.tag === 19) Vd(n, l, r);
        else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === r) break e;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === r) break e;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      u &= 1;
    }
    if (tt(kn, u), !(r.mode & 1)) r.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (l = r.child, c = null; l !== null; ) n = l.alternate, n !== null && Uc(n) === null && (c = l), l = l.sibling;
        l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), Br(r, !1, c, l, d);
        break;
      case "backwards":
        for (l = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && Uc(n) === null) {
            r.child = c;
            break;
          }
          n = c.sibling, c.sibling = l, l = c, c = n;
        }
        Br(r, !0, l, null, d);
        break;
      case "together":
        Br(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function Ba(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function $a(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), zi |= r.lanes, !(l & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(R(153));
    if (r.child !== null) {
      for (n = r.child, l = Bl(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = Bl(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function Os(n, r, l) {
    switch (r.tag) {
      case 3:
        wu(r), zl();
        break;
      case 5:
        $v(r);
        break;
      case 1:
        qn(r.type) && cr(r);
        break;
      case 4:
        Dd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var u = r.type._context, c = r.memoizedProps.value;
        tt(ba, u._currentValue), u._currentValue = c;
        break;
      case 13:
        if (u = r.memoizedState, u !== null)
          return u.dehydrated !== null ? (tt(kn, kn.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? lf(n, r, l) : (tt(kn, kn.current & 1), n = $a(n, r, l), n !== null ? n.sibling : null);
        tt(kn, kn.current & 1);
        break;
      case 19:
        if (u = (l & r.childLanes) !== 0, n.flags & 128) {
          if (u) return ji(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), tt(kn, kn.current), u) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, Ns(n, r, l);
    }
    return $a(n, r, l);
  }
  var Ia, Xn, Zv, em;
  Ia = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6) n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r) return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, Xn = function() {
  }, Zv = function(n, r, l, u) {
    var c = n.memoizedProps;
    if (c !== u) {
      n = r.stateNode, wo(Di.current);
      var d = null;
      switch (l) {
        case "input":
          c = er(n, c), u = er(n, u), d = [];
          break;
        case "select":
          c = ge({}, c, { value: void 0 }), u = ge({}, u, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = jn(n, c), u = jn(n, u), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof u.onClick == "function" && (n.onclick = kl);
      }
      we(l, u);
      var y;
      l = null;
      for ($ in c) if (!u.hasOwnProperty($) && c.hasOwnProperty($) && c[$] != null) if ($ === "style") {
        var b = c[$];
        for (y in b) b.hasOwnProperty(y) && (l || (l = {}), l[y] = "");
      } else $ !== "dangerouslySetInnerHTML" && $ !== "children" && $ !== "suppressContentEditableWarning" && $ !== "suppressHydrationWarning" && $ !== "autoFocus" && (K.hasOwnProperty($) ? d || (d = []) : (d = d || []).push($, null));
      for ($ in u) {
        var k = u[$];
        if (b = c != null ? c[$] : void 0, u.hasOwnProperty($) && k !== b && (k != null || b != null)) if ($ === "style") if (b) {
          for (y in b) !b.hasOwnProperty(y) || k && k.hasOwnProperty(y) || (l || (l = {}), l[y] = "");
          for (y in k) k.hasOwnProperty(y) && b[y] !== k[y] && (l || (l = {}), l[y] = k[y]);
        } else l || (d || (d = []), d.push(
          $,
          l
        )), l = k;
        else $ === "dangerouslySetInnerHTML" ? (k = k ? k.__html : void 0, b = b ? b.__html : void 0, k != null && b !== k && (d = d || []).push($, k)) : $ === "children" ? typeof k != "string" && typeof k != "number" || (d = d || []).push($, "" + k) : $ !== "suppressContentEditableWarning" && $ !== "suppressHydrationWarning" && (K.hasOwnProperty($) ? (k != null && $ === "onScroll" && an("scroll", n), d || b === k || (d = [])) : (d = d || []).push($, k));
      }
      l && (d = d || []).push("style", l);
      var $ = d;
      (r.updateQueue = $) && (r.flags |= 4);
    }
  }, em = function(n, r, l, u) {
    l !== u && (r.flags |= 4);
  };
  function Ms(n, r) {
    if (!xn) switch (n.tailMode) {
      case "hidden":
        r = n.tail;
        for (var l = null; r !== null; ) r.alternate !== null && (l = r), r = r.sibling;
        l === null ? n.tail = null : l.sibling = null;
        break;
      case "collapsed":
        l = n.tail;
        for (var u = null; l !== null; ) l.alternate !== null && (u = l), l = l.sibling;
        u === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : u.sibling = null;
    }
  }
  function dr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, u = 0;
    if (r) for (var c = n.child; c !== null; ) l |= c.lanes | c.childLanes, u |= c.subtreeFlags & 14680064, u |= c.flags & 14680064, c.return = n, c = c.sibling;
    else for (c = n.child; c !== null; ) l |= c.lanes | c.childLanes, u |= c.subtreeFlags, u |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= u, n.childLanes = l, r;
  }
  function tm(n, r, l) {
    var u = r.pendingProps;
    switch (Oc(r), r.tag) {
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
        return dr(r), null;
      case 1:
        return qn(r.type) && Su(), dr(r), null;
      case 3:
        return u = r.stateNode, Ro(), yn(nr), yn(Mn), at(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (n === null || n.child === null) && (Mc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Ha !== null && (Ao(Ha), Ha = null))), Xn(n, r), dr(r), null;
      case 5:
        Ac(r);
        var c = wo(gs.current);
        if (l = r.type, n !== null && r.stateNode != null) Zv(n, r, l, u, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!u) {
            if (r.stateNode === null) throw Error(R(166));
            return dr(r), null;
          }
          if (n = wo(Di.current), Mc(r)) {
            u = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (u[Ri] = r, u[fs] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                an("cancel", u), an("close", u);
                break;
              case "iframe":
              case "object":
              case "embed":
                an("load", u);
                break;
              case "video":
              case "audio":
                for (c = 0; c < us.length; c++) an(us[c], u);
                break;
              case "source":
                an("error", u);
                break;
              case "img":
              case "image":
              case "link":
                an(
                  "error",
                  u
                ), an("load", u);
                break;
              case "details":
                an("toggle", u);
                break;
              case "input":
                zn(u, d), an("invalid", u);
                break;
              case "select":
                u._wrapperState = { wasMultiple: !!d.multiple }, an("invalid", u);
                break;
              case "textarea":
                or(u, d), an("invalid", u);
            }
            we(l, d), c = null;
            for (var y in d) if (d.hasOwnProperty(y)) {
              var b = d[y];
              y === "children" ? typeof b == "string" ? u.textContent !== b && (d.suppressHydrationWarning !== !0 && Rc(u.textContent, b, n), c = ["children", b]) : typeof b == "number" && u.textContent !== "" + b && (d.suppressHydrationWarning !== !0 && Rc(
                u.textContent,
                b,
                n
              ), c = ["children", "" + b]) : K.hasOwnProperty(y) && b != null && y === "onScroll" && an("scroll", u);
            }
            switch (l) {
              case "input":
                on(u), Oa(u, d, !0);
                break;
              case "textarea":
                on(u), On(u);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (u.onclick = kl);
            }
            u = c, r.updateQueue = u, u !== null && (r.flags |= 4);
          } else {
            y = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = ur(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = y.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof u.is == "string" ? n = y.createElement(l, { is: u.is }) : (n = y.createElement(l), l === "select" && (y = n, u.multiple ? y.multiple = !0 : u.size && (y.size = u.size))) : n = y.createElementNS(n, l), n[Ri] = r, n[fs] = u, Ia(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (y = Pt(l, u), l) {
                case "dialog":
                  an("cancel", n), an("close", n), c = u;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  an("load", n), c = u;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < us.length; c++) an(us[c], n);
                  c = u;
                  break;
                case "source":
                  an("error", n), c = u;
                  break;
                case "img":
                case "image":
                case "link":
                  an(
                    "error",
                    n
                  ), an("load", n), c = u;
                  break;
                case "details":
                  an("toggle", n), c = u;
                  break;
                case "input":
                  zn(n, u), c = er(n, u), an("invalid", n);
                  break;
                case "option":
                  c = u;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!u.multiple }, c = ge({}, u, { value: void 0 }), an("invalid", n);
                  break;
                case "textarea":
                  or(n, u), c = jn(n, u), an("invalid", n);
                  break;
                default:
                  c = u;
              }
              we(l, c), b = c;
              for (d in b) if (b.hasOwnProperty(d)) {
                var k = b[d];
                d === "style" ? Z(n, k) : d === "dangerouslySetInnerHTML" ? (k = k ? k.__html : void 0, k != null && Sa(n, k)) : d === "children" ? typeof k == "string" ? (l !== "textarea" || k !== "") && Ce(n, k) : typeof k == "number" && Ce(n, "" + k) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (K.hasOwnProperty(d) ? k != null && d === "onScroll" && an("scroll", n) : k != null && pe(n, d, k, y));
              }
              switch (l) {
                case "input":
                  on(n), Oa(n, u, !1);
                  break;
                case "textarea":
                  on(n), On(n);
                  break;
                case "option":
                  u.value != null && n.setAttribute("value", "" + pt(u.value));
                  break;
                case "select":
                  n.multiple = !!u.multiple, d = u.value, d != null ? wn(n, !!u.multiple, d, !1) : u.defaultValue != null && wn(
                    n,
                    !!u.multiple,
                    u.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = kl);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  u = !!u.autoFocus;
                  break e;
                case "img":
                  u = !0;
                  break e;
                default:
                  u = !1;
              }
            }
            u && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return dr(r), null;
      case 6:
        if (n && r.stateNode != null) em(n, r, n.memoizedProps, u);
        else {
          if (typeof u != "string" && r.stateNode === null) throw Error(R(166));
          if (l = wo(gs.current), wo(Di.current), Mc(r)) {
            if (u = r.stateNode, l = r.memoizedProps, u[Ri] = r, (d = u.nodeValue !== l) && (n = ia, n !== null)) switch (n.tag) {
              case 3:
                Rc(u.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && Rc(u.nodeValue, l, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else u = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(u), u[Ri] = r, r.stateNode = u;
        }
        return dr(r), null;
      case 13:
        if (yn(kn), u = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (xn && la !== null && r.mode & 1 && !(r.flags & 128)) vs(), zl(), r.flags |= 98560, d = !1;
          else if (d = Mc(r), u !== null && u.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(R(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(R(317));
              d[Ri] = r;
            } else zl(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            dr(r), d = !1;
          } else Ha !== null && (Ao(Ha), Ha = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (u = u !== null, u !== (n !== null && n.memoizedState !== null) && u && (r.child.flags |= 8192, r.mode & 1 && (n === null || kn.current & 1 ? Hn === 0 && (Hn = 3) : Xd())), r.updateQueue !== null && (r.flags |= 4), dr(r), null);
      case 4:
        return Ro(), Xn(n, r), n === null && vu(r.stateNode.containerInfo), dr(r), null;
      case 10:
        return wd(r.type._context), dr(r), null;
      case 17:
        return qn(r.type) && Su(), dr(r), null;
      case 19:
        if (yn(kn), d = r.memoizedState, d === null) return dr(r), null;
        if (u = (r.flags & 128) !== 0, y = d.rendering, y === null) if (u) Ms(d, !1);
        else {
          if (Hn !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (y = Uc(n), y !== null) {
              for (r.flags |= 128, Ms(d, !1), u = y.updateQueue, u !== null && (r.updateQueue = u, r.flags |= 4), r.subtreeFlags = 0, u = l, l = r.child; l !== null; ) d = l, n = u, d.flags &= 14680066, y = d.alternate, y === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = y.childLanes, d.lanes = y.lanes, d.child = y.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = y.memoizedProps, d.memoizedState = y.memoizedState, d.updateQueue = y.updateQueue, d.type = y.type, n = y.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return tt(kn, kn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && wt() > ku && (r.flags |= 128, u = !0, Ms(d, !1), r.lanes = 4194304);
        }
        else {
          if (!u) if (n = Uc(y), n !== null) {
            if (r.flags |= 128, u = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), Ms(d, !0), d.tail === null && d.tailMode === "hidden" && !y.alternate && !xn) return dr(r), null;
          } else 2 * wt() - d.renderingStartTime > ku && l !== 1073741824 && (r.flags |= 128, u = !0, Ms(d, !1), r.lanes = 4194304);
          d.isBackwards ? (y.sibling = r.child, r.child = y) : (l = d.last, l !== null ? l.sibling = y : r.child = y, d.last = y);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = wt(), r.sibling = null, l = kn.current, tt(kn, u ? l & 1 | 2 : l & 1), r) : (dr(r), null);
      case 22:
      case 23:
        return Qd(), u = r.memoizedState !== null, n !== null && n.memoizedState !== null !== u && (r.flags |= 8192), u && r.mode & 1 ? Ra & 1073741824 && (dr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : dr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(R(156, r.tag));
  }
  function of(n, r) {
    switch (Oc(r), r.tag) {
      case 1:
        return qn(r.type) && Su(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Ro(), yn(nr), yn(Mn), at(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Ac(r), null;
      case 13:
        if (yn(kn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(R(340));
          zl();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return yn(kn), null;
      case 4:
        return Ro(), null;
      case 10:
        return wd(r.type._context), null;
      case 22:
      case 23:
        return Qd(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var zs = !1, Mr = !1, my = typeof WeakSet == "function" ? WeakSet : Set, Fe = null;
  function Ru(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (u) {
      bn(n, r, u);
    }
    else l.current = null;
  }
  function uf(n, r, l) {
    try {
      l();
    } catch (u) {
      bn(n, r, u);
    }
  }
  var nm = !1;
  function rm(n, r) {
    if (cs = La, n = ls(), yc(n)) {
      if ("selectionStart" in n) var l = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        l = (l = n.ownerDocument) && l.defaultView || window;
        var u = l.getSelection && l.getSelection();
        if (u && u.rangeCount !== 0) {
          l = u.anchorNode;
          var c = u.anchorOffset, d = u.focusNode;
          u = u.focusOffset;
          try {
            l.nodeType, d.nodeType;
          } catch {
            l = null;
            break e;
          }
          var y = 0, b = -1, k = -1, $ = 0, ue = 0, me = n, le = null;
          t: for (; ; ) {
            for (var Ae; me !== l || c !== 0 && me.nodeType !== 3 || (b = y + c), me !== d || u !== 0 && me.nodeType !== 3 || (k = y + u), me.nodeType === 3 && (y += me.nodeValue.length), (Ae = me.firstChild) !== null; )
              le = me, me = Ae;
            for (; ; ) {
              if (me === n) break t;
              if (le === l && ++$ === c && (b = y), le === d && ++ue === u && (k = y), (Ae = me.nextSibling) !== null) break;
              me = le, le = me.parentNode;
            }
            me = Ae;
          }
          l = b === -1 || k === -1 ? null : { start: b, end: k };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (go = { focusedElem: n, selectionRange: l }, La = !1, Fe = r; Fe !== null; ) if (r = Fe, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, Fe = n;
    else for (; Fe !== null; ) {
      r = Fe;
      try {
        var Ye = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (Ye !== null) {
              var Qe = Ye.memoizedProps, Vn = Ye.memoizedState, L = r.stateNode, j = L.getSnapshotBeforeUpdate(r.elementType === r.type ? Qe : ci(r.type, Qe), Vn);
              L.__reactInternalSnapshotBeforeUpdate = j;
            }
            break;
          case 3:
            var H = r.stateNode.containerInfo;
            H.nodeType === 1 ? H.textContent = "" : H.nodeType === 9 && H.documentElement && H.removeChild(H.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(R(163));
        }
      } catch (se) {
        bn(r, r.return, se);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, Fe = n;
        break;
      }
      Fe = r.return;
    }
    return Ye = nm, nm = !1, Ye;
  }
  function Ls(n, r, l) {
    var u = r.updateQueue;
    if (u = u !== null ? u.lastEffect : null, u !== null) {
      var c = u = u.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && uf(r, l, d);
        }
        c = c.next;
      } while (c !== u);
    }
  }
  function As(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var u = l.create;
          l.destroy = u();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Bd(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function sf(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, sf(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Ri], delete r[fs], delete r[ds], delete r[gu], delete r[py])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Us(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function tl(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || Us(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function Oi(n, r, l) {
    var u = n.tag;
    if (u === 5 || u === 6) n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = kl));
    else if (u !== 4 && (n = n.child, n !== null)) for (Oi(n, r, l), n = n.sibling; n !== null; ) Oi(n, r, l), n = n.sibling;
  }
  function Mi(n, r, l) {
    var u = n.tag;
    if (u === 5 || u === 6) n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (u !== 4 && (n = n.child, n !== null)) for (Mi(n, r, l), n = n.sibling; n !== null; ) Mi(n, r, l), n = n.sibling;
  }
  var Fn = null, $r = !1;
  function Ir(n, r, l) {
    for (l = l.child; l !== null; ) am(n, r, l), l = l.sibling;
  }
  function am(n, r, l) {
    if (ta && typeof ta.onCommitFiberUnmount == "function") try {
      ta.onCommitFiberUnmount(Sl, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        Mr || Ru(l, r);
      case 6:
        var u = Fn, c = $r;
        Fn = null, Ir(n, r, l), Fn = u, $r = c, Fn !== null && ($r ? (n = Fn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : Fn.removeChild(l.stateNode));
        break;
      case 18:
        Fn !== null && ($r ? (n = Fn, l = l.stateNode, n.nodeType === 8 ? yu(n.parentNode, l) : n.nodeType === 1 && yu(n, l), ii(n)) : yu(Fn, l.stateNode));
        break;
      case 4:
        u = Fn, c = $r, Fn = l.stateNode.containerInfo, $r = !0, Ir(n, r, l), Fn = u, $r = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Mr && (u = l.updateQueue, u !== null && (u = u.lastEffect, u !== null))) {
          c = u = u.next;
          do {
            var d = c, y = d.destroy;
            d = d.tag, y !== void 0 && (d & 2 || d & 4) && uf(l, r, y), c = c.next;
          } while (c !== u);
        }
        Ir(n, r, l);
        break;
      case 1:
        if (!Mr && (Ru(l, r), u = l.stateNode, typeof u.componentWillUnmount == "function")) try {
          u.props = l.memoizedProps, u.state = l.memoizedState, u.componentWillUnmount();
        } catch (b) {
          bn(l, r, b);
        }
        Ir(n, r, l);
        break;
      case 21:
        Ir(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (Mr = (u = Mr) || l.memoizedState !== null, Ir(n, r, l), Mr = u) : Ir(n, r, l);
        break;
      default:
        Ir(n, r, l);
    }
  }
  function im(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new my()), r.forEach(function(u) {
        var c = vm.bind(null, n, u);
        l.has(u) || (l.add(u), u.then(c, c));
      });
    }
  }
  function fi(n, r) {
    var l = r.deletions;
    if (l !== null) for (var u = 0; u < l.length; u++) {
      var c = l[u];
      try {
        var d = n, y = r, b = y;
        e: for (; b !== null; ) {
          switch (b.tag) {
            case 5:
              Fn = b.stateNode, $r = !1;
              break e;
            case 3:
              Fn = b.stateNode.containerInfo, $r = !0;
              break e;
            case 4:
              Fn = b.stateNode.containerInfo, $r = !0;
              break e;
          }
          b = b.return;
        }
        if (Fn === null) throw Error(R(160));
        am(d, y, c), Fn = null, $r = !1;
        var k = c.alternate;
        k !== null && (k.return = null), c.return = null;
      } catch ($) {
        bn(c, r, $);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) $d(r, n), r = r.sibling;
  }
  function $d(n, r) {
    var l = n.alternate, u = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (fi(r, n), ca(n), u & 4) {
          try {
            Ls(3, n, n.return), As(3, n);
          } catch (Qe) {
            bn(n, n.return, Qe);
          }
          try {
            Ls(5, n, n.return);
          } catch (Qe) {
            bn(n, n.return, Qe);
          }
        }
        break;
      case 1:
        fi(r, n), ca(n), u & 512 && l !== null && Ru(l, l.return);
        break;
      case 5:
        if (fi(r, n), ca(n), u & 512 && l !== null && Ru(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            Ce(c, "");
          } catch (Qe) {
            bn(n, n.return, Qe);
          }
        }
        if (u & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, y = l !== null ? l.memoizedProps : d, b = n.type, k = n.updateQueue;
          if (n.updateQueue = null, k !== null) try {
            b === "input" && d.type === "radio" && d.name != null && nn(c, d), Pt(b, y);
            var $ = Pt(b, d);
            for (y = 0; y < k.length; y += 2) {
              var ue = k[y], me = k[y + 1];
              ue === "style" ? Z(c, me) : ue === "dangerouslySetInnerHTML" ? Sa(c, me) : ue === "children" ? Ce(c, me) : pe(c, ue, me, $);
            }
            switch (b) {
              case "input":
                Dn(c, d);
                break;
              case "textarea":
                ga(c, d);
                break;
              case "select":
                var le = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var Ae = d.value;
                Ae != null ? wn(c, !!d.multiple, Ae, !1) : le !== !!d.multiple && (d.defaultValue != null ? wn(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : wn(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[fs] = d;
          } catch (Qe) {
            bn(n, n.return, Qe);
          }
        }
        break;
      case 6:
        if (fi(r, n), ca(n), u & 4) {
          if (n.stateNode === null) throw Error(R(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (Qe) {
            bn(n, n.return, Qe);
          }
        }
        break;
      case 3:
        if (fi(r, n), ca(n), u & 4 && l !== null && l.memoizedState.isDehydrated) try {
          ii(r.containerInfo);
        } catch (Qe) {
          bn(n, n.return, Qe);
        }
        break;
      case 4:
        fi(r, n), ca(n);
        break;
      case 13:
        fi(r, n), ca(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (qd = wt())), u & 4 && im(n);
        break;
      case 22:
        if (ue = l !== null && l.memoizedState !== null, n.mode & 1 ? (Mr = ($ = Mr) || ue, fi(r, n), Mr = $) : fi(r, n), ca(n), u & 8192) {
          if ($ = n.memoizedState !== null, (n.stateNode.isHidden = $) && !ue && n.mode & 1) for (Fe = n, ue = n.child; ue !== null; ) {
            for (me = Fe = ue; Fe !== null; ) {
              switch (le = Fe, Ae = le.child, le.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ls(4, le, le.return);
                  break;
                case 1:
                  Ru(le, le.return);
                  var Ye = le.stateNode;
                  if (typeof Ye.componentWillUnmount == "function") {
                    u = le, l = le.return;
                    try {
                      r = u, Ye.props = r.memoizedProps, Ye.state = r.memoizedState, Ye.componentWillUnmount();
                    } catch (Qe) {
                      bn(u, l, Qe);
                    }
                  }
                  break;
                case 5:
                  Ru(le, le.return);
                  break;
                case 22:
                  if (le.memoizedState !== null) {
                    Ps(me);
                    continue;
                  }
              }
              Ae !== null ? (Ae.return = le, Fe = Ae) : Ps(me);
            }
            ue = ue.sibling;
          }
          e: for (ue = null, me = n; ; ) {
            if (me.tag === 5) {
              if (ue === null) {
                ue = me;
                try {
                  c = me.stateNode, $ ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (b = me.stateNode, k = me.memoizedProps.style, y = k != null && k.hasOwnProperty("display") ? k.display : null, b.style.display = Gt("display", y));
                } catch (Qe) {
                  bn(n, n.return, Qe);
                }
              }
            } else if (me.tag === 6) {
              if (ue === null) try {
                me.stateNode.nodeValue = $ ? "" : me.memoizedProps;
              } catch (Qe) {
                bn(n, n.return, Qe);
              }
            } else if ((me.tag !== 22 && me.tag !== 23 || me.memoizedState === null || me === n) && me.child !== null) {
              me.child.return = me, me = me.child;
              continue;
            }
            if (me === n) break e;
            for (; me.sibling === null; ) {
              if (me.return === null || me.return === n) break e;
              ue === me && (ue = null), me = me.return;
            }
            ue === me && (ue = null), me.sibling.return = me.return, me = me.sibling;
          }
        }
        break;
      case 19:
        fi(r, n), ca(n), u & 4 && im(n);
        break;
      case 21:
        break;
      default:
        fi(
          r,
          n
        ), ca(n);
    }
  }
  function ca(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (Us(l)) {
              var u = l;
              break e;
            }
            l = l.return;
          }
          throw Error(R(160));
        }
        switch (u.tag) {
          case 5:
            var c = u.stateNode;
            u.flags & 32 && (Ce(c, ""), u.flags &= -33);
            var d = tl(n);
            Mi(n, d, c);
            break;
          case 3:
          case 4:
            var y = u.stateNode.containerInfo, b = tl(n);
            Oi(n, b, y);
            break;
          default:
            throw Error(R(161));
        }
      } catch (k) {
        bn(n, n.return, k);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function hy(n, r, l) {
    Fe = n, Id(n);
  }
  function Id(n, r, l) {
    for (var u = (n.mode & 1) !== 0; Fe !== null; ) {
      var c = Fe, d = c.child;
      if (c.tag === 22 && u) {
        var y = c.memoizedState !== null || zs;
        if (!y) {
          var b = c.alternate, k = b !== null && b.memoizedState !== null || Mr;
          b = zs;
          var $ = Mr;
          if (zs = y, (Mr = k) && !$) for (Fe = c; Fe !== null; ) y = Fe, k = y.child, y.tag === 22 && y.memoizedState !== null ? Yd(c) : k !== null ? (k.return = y, Fe = k) : Yd(c);
          for (; d !== null; ) Fe = d, Id(d), d = d.sibling;
          Fe = c, zs = b, Mr = $;
        }
        lm(n);
      } else c.subtreeFlags & 8772 && d !== null ? (d.return = c, Fe = d) : lm(n);
    }
  }
  function lm(n) {
    for (; Fe !== null; ) {
      var r = Fe;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              Mr || As(5, r);
              break;
            case 1:
              var u = r.stateNode;
              if (r.flags & 4 && !Mr) if (l === null) u.componentDidMount();
              else {
                var c = r.elementType === r.type ? l.memoizedProps : ci(r.type, l.memoizedProps);
                u.componentDidUpdate(c, l.memoizedState, u.__reactInternalSnapshotBeforeUpdate);
              }
              var d = r.updateQueue;
              d !== null && Nd(r, d, u);
              break;
            case 3:
              var y = r.updateQueue;
              if (y !== null) {
                if (l = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    l = r.child.stateNode;
                    break;
                  case 1:
                    l = r.child.stateNode;
                }
                Nd(r, y, l);
              }
              break;
            case 5:
              var b = r.stateNode;
              if (l === null && r.flags & 4) {
                l = b;
                var k = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    k.autoFocus && l.focus();
                    break;
                  case "img":
                    k.src && (l.src = k.src);
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
              if (r.memoizedState === null) {
                var $ = r.alternate;
                if ($ !== null) {
                  var ue = $.memoizedState;
                  if (ue !== null) {
                    var me = ue.dehydrated;
                    me !== null && ii(me);
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
              throw Error(R(163));
          }
          Mr || r.flags & 512 && Bd(r);
        } catch (le) {
          bn(r, r.return, le);
        }
      }
      if (r === n) {
        Fe = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, Fe = l;
        break;
      }
      Fe = r.return;
    }
  }
  function Ps(n) {
    for (; Fe !== null; ) {
      var r = Fe;
      if (r === n) {
        Fe = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, Fe = l;
        break;
      }
      Fe = r.return;
    }
  }
  function Yd(n) {
    for (; Fe !== null; ) {
      var r = Fe;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              As(4, r);
            } catch (k) {
              bn(r, l, k);
            }
            break;
          case 1:
            var u = r.stateNode;
            if (typeof u.componentDidMount == "function") {
              var c = r.return;
              try {
                u.componentDidMount();
              } catch (k) {
                bn(r, c, k);
              }
            }
            var d = r.return;
            try {
              Bd(r);
            } catch (k) {
              bn(r, d, k);
            }
            break;
          case 5:
            var y = r.return;
            try {
              Bd(r);
            } catch (k) {
              bn(r, y, k);
            }
        }
      } catch (k) {
        bn(r, r.return, k);
      }
      if (r === n) {
        Fe = null;
        break;
      }
      var b = r.sibling;
      if (b !== null) {
        b.return = r.return, Fe = b;
        break;
      }
      Fe = r.return;
    }
  }
  var yy = Math.ceil, Fl = Je.ReactCurrentDispatcher, zo = Je.ReactCurrentOwner, xr = Je.ReactCurrentBatchConfig, Bt = 0, ar = null, Kn = null, br = 0, Ra = 0, Tu = Pa(0), Hn = 0, Fs = null, zi = 0, _u = 0, cf = 0, Hs = null, fa = null, qd = 0, ku = 1 / 0, Ta = null, Nu = !1, Lo = null, Hl = null, ff = !1, nl = null, Vs = 0, Vl = 0, Du = null, Bs = -1, zr = 0;
  function Jn() {
    return Bt & 6 ? wt() : Bs !== -1 ? Bs : Bs = wt();
  }
  function Li(n) {
    return n.mode & 1 ? Bt & 2 && br !== 0 ? br & -br : vy.transition !== null ? (zr === 0 && (zr = nu()), zr) : (n = Qt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : su(n.type)), n) : 1;
  }
  function Yr(n, r, l, u) {
    if (50 < Vl) throw Vl = 0, Du = null, Error(R(185));
    $i(n, l, u), (!(Bt & 2) || n !== ar) && (n === ar && (!(Bt & 2) && (_u |= l), Hn === 4 && di(n, br)), da(n, u), l === 1 && Bt === 0 && !(r.mode & 1) && (ku = wt() + 500, Cu && _i()));
  }
  function da(n, r) {
    var l = n.callbackNode;
    uo(n, r);
    var u = ai(n, n === ar ? br : 0);
    if (u === 0) l !== null && yr(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = u & -u, n.callbackPriority !== r) {
      if (l != null && yr(l), r === 1) n.tag === 0 ? Dl(Gd.bind(null, n)) : Dc(Gd.bind(null, n)), hu(function() {
        !(Bt & 6) && _i();
      }), l = null;
      else {
        switch (au(u)) {
          case 1:
            l = ni;
            break;
          case 4:
            l = lo;
            break;
          case 16:
            l = oo;
            break;
          case 536870912:
            l = Zo;
            break;
          default:
            l = oo;
        }
        l = hm(l, df.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function df(n, r) {
    if (Bs = -1, zr = 0, Bt & 6) throw Error(R(327));
    var l = n.callbackNode;
    if (ju() && n.callbackNode !== l) return null;
    var u = ai(n, n === ar ? br : 0);
    if (u === 0) return null;
    if (u & 30 || u & n.expiredLanes || r) r = pf(n, u);
    else {
      r = u;
      var c = Bt;
      Bt |= 2;
      var d = um();
      (ar !== n || br !== r) && (Ta = null, ku = wt() + 500, rl(n, r));
      do
        try {
          sm();
          break;
        } catch (b) {
          om(n, b);
        }
      while (!0);
      Ed(), Fl.current = d, Bt = c, Kn !== null ? r = 0 : (ar = null, br = 0, r = Hn);
    }
    if (r !== 0) {
      if (r === 2 && (c = xl(n), c !== 0 && (u = c, r = $s(n, c))), r === 1) throw l = Fs, rl(n, 0), di(n, u), da(n, wt()), l;
      if (r === 6) di(n, u);
      else {
        if (c = n.current.alternate, !(u & 30) && !gy(c) && (r = pf(n, u), r === 2 && (d = xl(n), d !== 0 && (u = d, r = $s(n, d))), r === 1)) throw l = Fs, rl(n, 0), di(n, u), da(n, wt()), l;
        switch (n.finishedWork = c, n.finishedLanes = u, r) {
          case 0:
          case 1:
            throw Error(R(345));
          case 2:
            Po(n, fa, Ta);
            break;
          case 3:
            if (di(n, u), (u & 130023424) === u && (r = qd + 500 - wt(), 10 < r)) {
              if (ai(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & u) !== u) {
                Jn(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = _c(Po.bind(null, n, fa, Ta), r);
              break;
            }
            Po(n, fa, Ta);
            break;
          case 4:
            if (di(n, u), (u & 4194240) === u) break;
            for (r = n.eventTimes, c = -1; 0 < u; ) {
              var y = 31 - Fr(u);
              d = 1 << y, y = r[y], y > c && (c = y), u &= ~d;
            }
            if (u = c, u = wt() - u, u = (120 > u ? 120 : 480 > u ? 480 : 1080 > u ? 1080 : 1920 > u ? 1920 : 3e3 > u ? 3e3 : 4320 > u ? 4320 : 1960 * yy(u / 1960)) - u, 10 < u) {
              n.timeoutHandle = _c(Po.bind(null, n, fa, Ta), u);
              break;
            }
            Po(n, fa, Ta);
            break;
          case 5:
            Po(n, fa, Ta);
            break;
          default:
            throw Error(R(329));
        }
      }
    }
    return da(n, wt()), n.callbackNode === l ? df.bind(null, n) : null;
  }
  function $s(n, r) {
    var l = Hs;
    return n.current.memoizedState.isDehydrated && (rl(n, r).flags |= 256), n = pf(n, r), n !== 2 && (r = fa, fa = l, r !== null && Ao(r)), n;
  }
  function Ao(n) {
    fa === null ? fa = n : fa.push.apply(fa, n);
  }
  function gy(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null)) for (var u = 0; u < l.length; u++) {
          var c = l[u], d = c.getSnapshot;
          c = c.value;
          try {
            if (!oi(d(), c)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null) l.return = r, r = l;
      else {
        if (r === n) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n) return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function di(n, r) {
    for (r &= ~cf, r &= ~_u, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - Fr(r), u = 1 << l;
      n[l] = -1, r &= ~u;
    }
  }
  function Gd(n) {
    if (Bt & 6) throw Error(R(327));
    ju();
    var r = ai(n, 0);
    if (!(r & 1)) return da(n, wt()), null;
    var l = pf(n, r);
    if (n.tag !== 0 && l === 2) {
      var u = xl(n);
      u !== 0 && (r = u, l = $s(n, u));
    }
    if (l === 1) throw l = Fs, rl(n, 0), di(n, r), da(n, wt()), l;
    if (l === 6) throw Error(R(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Po(n, fa, Ta), da(n, wt()), null;
  }
  function Wd(n, r) {
    var l = Bt;
    Bt |= 1;
    try {
      return n(r);
    } finally {
      Bt = l, Bt === 0 && (ku = wt() + 500, Cu && _i());
    }
  }
  function Uo(n) {
    nl !== null && nl.tag === 0 && !(Bt & 6) && ju();
    var r = Bt;
    Bt |= 1;
    var l = xr.transition, u = Qt;
    try {
      if (xr.transition = null, Qt = 1, n) return n();
    } finally {
      Qt = u, xr.transition = l, Bt = r, !(Bt & 6) && _i();
    }
  }
  function Qd() {
    Ra = Tu.current, yn(Tu);
  }
  function rl(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, gd(l)), Kn !== null) for (l = Kn.return; l !== null; ) {
      var u = l;
      switch (Oc(u), u.tag) {
        case 1:
          u = u.type.childContextTypes, u != null && Su();
          break;
        case 3:
          Ro(), yn(nr), yn(Mn), at();
          break;
        case 5:
          Ac(u);
          break;
        case 4:
          Ro();
          break;
        case 13:
          yn(kn);
          break;
        case 19:
          yn(kn);
          break;
        case 10:
          wd(u.type._context);
          break;
        case 22:
        case 23:
          Qd();
      }
      l = l.return;
    }
    if (ar = n, Kn = n = Bl(n.current, null), br = Ra = r, Hn = 0, Fs = null, cf = _u = zi = 0, fa = Hs = null, Eo !== null) {
      for (r = 0; r < Eo.length; r++) if (l = Eo[r], u = l.interleaved, u !== null) {
        l.interleaved = null;
        var c = u.next, d = l.pending;
        if (d !== null) {
          var y = d.next;
          d.next = c, u.next = y;
        }
        l.pending = u;
      }
      Eo = null;
    }
    return n;
  }
  function om(n, r) {
    do {
      var l = Kn;
      try {
        if (Ed(), Dt.current = jo, Pc) {
          for (var u = Kt.memoizedState; u !== null; ) {
            var c = u.queue;
            c !== null && (c.pending = null), u = u.next;
          }
          Pc = !1;
        }
        if (fn = 0, fr = Wn = Kt = null, Cs = !1, To = 0, zo.current = null, l === null || l.return === null) {
          Hn = 1, Fs = r, Kn = null;
          break;
        }
        e: {
          var d = n, y = l.return, b = l, k = r;
          if (r = br, b.flags |= 32768, k !== null && typeof k == "object" && typeof k.then == "function") {
            var $ = k, ue = b, me = ue.tag;
            if (!(ue.mode & 1) && (me === 0 || me === 11 || me === 15)) {
              var le = ue.alternate;
              le ? (ue.updateQueue = le.updateQueue, ue.memoizedState = le.memoizedState, ue.lanes = le.lanes) : (ue.updateQueue = null, ue.memoizedState = null);
            }
            var Ae = Wv(y);
            if (Ae !== null) {
              Ae.flags &= -257, Pl(Ae, y, b, d, r), Ae.mode & 1 && Ud(d, $, r), r = Ae, k = $;
              var Ye = r.updateQueue;
              if (Ye === null) {
                var Qe = /* @__PURE__ */ new Set();
                Qe.add(k), r.updateQueue = Qe;
              } else Ye.add(k);
              break e;
            } else {
              if (!(r & 1)) {
                Ud(d, $, r), Xd();
                break e;
              }
              k = Error(R(426));
            }
          } else if (xn && b.mode & 1) {
            var Vn = Wv(y);
            if (Vn !== null) {
              !(Vn.flags & 65536) && (Vn.flags |= 256), Pl(Vn, y, b, d, r), Ji(Oo(k, b));
              break e;
            }
          }
          d = k = Oo(k, b), Hn !== 4 && (Hn = 2), Hs === null ? Hs = [d] : Hs.push(d), d = y;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var L = Gv(d, k, r);
                Bv(d, L);
                break e;
              case 1:
                b = k;
                var j = d.type, H = d.stateNode;
                if (!(d.flags & 128) && (typeof j.getDerivedStateFromError == "function" || H !== null && typeof H.componentDidCatch == "function" && (Hl === null || !Hl.has(H)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var se = Ad(d, b, r);
                  Bv(d, se);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        fm(l);
      } catch (qe) {
        r = qe, Kn === l && l !== null && (Kn = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function um() {
    var n = Fl.current;
    return Fl.current = jo, n === null ? jo : n;
  }
  function Xd() {
    (Hn === 0 || Hn === 3 || Hn === 2) && (Hn = 4), ar === null || !(zi & 268435455) && !(_u & 268435455) || di(ar, br);
  }
  function pf(n, r) {
    var l = Bt;
    Bt |= 2;
    var u = um();
    (ar !== n || br !== r) && (Ta = null, rl(n, r));
    do
      try {
        Sy();
        break;
      } catch (c) {
        om(n, c);
      }
    while (!0);
    if (Ed(), Bt = l, Fl.current = u, Kn !== null) throw Error(R(261));
    return ar = null, br = 0, Hn;
  }
  function Sy() {
    for (; Kn !== null; ) cm(Kn);
  }
  function sm() {
    for (; Kn !== null && !ei(); ) cm(Kn);
  }
  function cm(n) {
    var r = mm(n.alternate, n, Ra);
    n.memoizedProps = n.pendingProps, r === null ? fm(n) : Kn = r, zo.current = null;
  }
  function fm(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = of(l, r), l !== null) {
          l.flags &= 32767, Kn = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Hn = 6, Kn = null;
          return;
        }
      } else if (l = tm(l, r, Ra), l !== null) {
        Kn = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        Kn = r;
        return;
      }
      Kn = r = n;
    } while (r !== null);
    Hn === 0 && (Hn = 5);
  }
  function Po(n, r, l) {
    var u = Qt, c = xr.transition;
    try {
      xr.transition = null, Qt = 1, Cy(n, r, l, u);
    } finally {
      xr.transition = c, Qt = u;
    }
    return null;
  }
  function Cy(n, r, l, u) {
    do
      ju();
    while (nl !== null);
    if (Bt & 6) throw Error(R(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(R(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Kf(n, d), n === ar && (Kn = ar = null, br = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || ff || (ff = !0, hm(oo, function() {
      return ju(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = xr.transition, xr.transition = null;
      var y = Qt;
      Qt = 1;
      var b = Bt;
      Bt |= 4, zo.current = null, rm(n, l), $d(l, n), du(go), La = !!cs, go = cs = null, n.current = l, hy(l), ti(), Bt = b, Qt = y, xr.transition = d;
    } else n.current = l;
    if (ff && (ff = !1, nl = n, Vs = c), d = n.pendingLanes, d === 0 && (Hl = null), Xu(l.stateNode), da(n, wt()), r !== null) for (u = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], u(c.value, { componentStack: c.stack, digest: c.digest });
    if (Nu) throw Nu = !1, n = Lo, Lo = null, n;
    return Vs & 1 && n.tag !== 0 && ju(), d = n.pendingLanes, d & 1 ? n === Du ? Vl++ : (Vl = 0, Du = n) : Vl = 0, _i(), null;
  }
  function ju() {
    if (nl !== null) {
      var n = au(Vs), r = xr.transition, l = Qt;
      try {
        if (xr.transition = null, Qt = 16 > n ? 16 : n, nl === null) var u = !1;
        else {
          if (n = nl, nl = null, Vs = 0, Bt & 6) throw Error(R(331));
          var c = Bt;
          for (Bt |= 4, Fe = n.current; Fe !== null; ) {
            var d = Fe, y = d.child;
            if (Fe.flags & 16) {
              var b = d.deletions;
              if (b !== null) {
                for (var k = 0; k < b.length; k++) {
                  var $ = b[k];
                  for (Fe = $; Fe !== null; ) {
                    var ue = Fe;
                    switch (ue.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ls(8, ue, d);
                    }
                    var me = ue.child;
                    if (me !== null) me.return = ue, Fe = me;
                    else for (; Fe !== null; ) {
                      ue = Fe;
                      var le = ue.sibling, Ae = ue.return;
                      if (sf(ue), ue === $) {
                        Fe = null;
                        break;
                      }
                      if (le !== null) {
                        le.return = Ae, Fe = le;
                        break;
                      }
                      Fe = Ae;
                    }
                  }
                }
                var Ye = d.alternate;
                if (Ye !== null) {
                  var Qe = Ye.child;
                  if (Qe !== null) {
                    Ye.child = null;
                    do {
                      var Vn = Qe.sibling;
                      Qe.sibling = null, Qe = Vn;
                    } while (Qe !== null);
                  }
                }
                Fe = d;
              }
            }
            if (d.subtreeFlags & 2064 && y !== null) y.return = d, Fe = y;
            else e: for (; Fe !== null; ) {
              if (d = Fe, d.flags & 2048) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  Ls(9, d, d.return);
              }
              var L = d.sibling;
              if (L !== null) {
                L.return = d.return, Fe = L;
                break e;
              }
              Fe = d.return;
            }
          }
          var j = n.current;
          for (Fe = j; Fe !== null; ) {
            y = Fe;
            var H = y.child;
            if (y.subtreeFlags & 2064 && H !== null) H.return = y, Fe = H;
            else e: for (y = j; Fe !== null; ) {
              if (b = Fe, b.flags & 2048) try {
                switch (b.tag) {
                  case 0:
                  case 11:
                  case 15:
                    As(9, b);
                }
              } catch (qe) {
                bn(b, b.return, qe);
              }
              if (b === y) {
                Fe = null;
                break e;
              }
              var se = b.sibling;
              if (se !== null) {
                se.return = b.return, Fe = se;
                break e;
              }
              Fe = b.return;
            }
          }
          if (Bt = c, _i(), ta && typeof ta.onPostCommitFiberRoot == "function") try {
            ta.onPostCommitFiberRoot(Sl, n);
          } catch {
          }
          u = !0;
        }
        return u;
      } finally {
        Qt = l, xr.transition = r;
      }
    }
    return !1;
  }
  function dm(n, r, l) {
    r = Oo(l, r), r = Gv(n, r, 1), n = Ll(n, r, 1), r = Jn(), n !== null && ($i(n, 1, r), da(n, r));
  }
  function bn(n, r, l) {
    if (n.tag === 3) dm(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        dm(r, n, l);
        break;
      } else if (r.tag === 1) {
        var u = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (Hl === null || !Hl.has(u))) {
          n = Oo(l, n), n = Ad(r, n, 1), r = Ll(r, n, 1), n = Jn(), r !== null && ($i(r, 1, n), da(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function xy(n, r, l) {
    var u = n.pingCache;
    u !== null && u.delete(r), r = Jn(), n.pingedLanes |= n.suspendedLanes & l, ar === n && (br & l) === l && (Hn === 4 || Hn === 3 && (br & 130023424) === br && 500 > wt() - qd ? rl(n, 0) : cf |= l), da(n, r);
  }
  function pm(n, r) {
    r === 0 && (n.mode & 1 ? (r = Ca, Ca <<= 1, !(Ca & 130023424) && (Ca = 4194304)) : r = 1);
    var l = Jn();
    n = Ea(n, r), n !== null && ($i(n, r, l), da(n, l));
  }
  function by(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), pm(n, l);
  }
  function vm(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var u = n.stateNode, c = n.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        u = n.stateNode;
        break;
      default:
        throw Error(R(314));
    }
    u !== null && u.delete(r), pm(n, l);
  }
  var mm;
  mm = function(n, r, l) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || nr.current) Qn = !0;
    else {
      if (!(n.lanes & l) && !(r.flags & 128)) return Qn = !1, Os(n, r, l);
      Qn = !!(n.flags & 131072);
    }
    else Qn = !1, xn && r.flags & 1048576 && Pv(r, Ki, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var u = r.type;
        Ba(n, r), n = r.pendingProps;
        var c = aa(r, Mn.current);
        _n(r, l), c = Al(null, r, u, n, c, l);
        var d = si();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, qn(u) ? (d = !0, cr(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, kd(r), c.updater = tf, r.stateNode = c, c._reactInternals = r, _s(r, u, n, l), r = Ds(null, r, u, !0, d, l)) : (r.tag = 0, xn && d && jc(r), Cr(null, r, c, l), r = r.child), r;
      case 16:
        u = r.elementType;
        e: {
          switch (Ba(n, r), n = r.pendingProps, c = u._init, u = c(u._payload), r.type = u, c = r.tag = wy(u), n = ci(u, n), c) {
            case 0:
              r = Qv(null, r, u, n, l);
              break e;
            case 1:
              r = Xv(null, r, u, n, l);
              break e;
            case 11:
              r = sa(null, r, u, n, l);
              break e;
            case 14:
              r = Mo(null, r, u, ci(u.type, n), l);
              break e;
          }
          throw Error(R(
            306,
            u,
            ""
          ));
        }
        return r;
      case 0:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : ci(u, c), Qv(n, r, u, c, l);
      case 1:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : ci(u, c), Xv(n, r, u, c, l);
      case 3:
        e: {
          if (wu(r), n === null) throw Error(R(387));
          u = r.pendingProps, d = r.memoizedState, c = d.element, Vv(n, r), ms(r, u, null, l);
          var y = r.memoizedState;
          if (u = y.element, d.isDehydrated) if (d = { element: u, isDehydrated: !1, cache: y.cache, pendingSuspenseBoundaries: y.pendingSuspenseBoundaries, transitions: y.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = Oo(Error(R(423)), r), r = Kv(n, r, u, l, c);
            break e;
          } else if (u !== c) {
            c = Oo(Error(R(424)), r), r = Kv(n, r, u, l, c);
            break e;
          } else for (la = wi(r.stateNode.containerInfo.firstChild), ia = r, xn = !0, Ha = null, l = De(r, null, u, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (zl(), u === c) {
              r = $a(n, r, l);
              break e;
            }
            Cr(n, r, u, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return $v(r), n === null && xd(r), u = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, y = c.children, Tc(u, c) ? y = null : d !== null && Tc(u, d) && (r.flags |= 32), Pd(n, r), Cr(n, r, y, l), r.child;
      case 6:
        return n === null && xd(r), null;
      case 13:
        return lf(n, r, l);
      case 4:
        return Dd(r, r.stateNode.containerInfo), u = r.pendingProps, n === null ? r.child = Un(r, null, u, l) : Cr(n, r, u, l), r.child;
      case 11:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : ci(u, c), sa(n, r, u, c, l);
      case 7:
        return Cr(n, r, r.pendingProps, l), r.child;
      case 8:
        return Cr(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return Cr(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (u = r.type._context, c = r.pendingProps, d = r.memoizedProps, y = c.value, tt(ba, u._currentValue), u._currentValue = y, d !== null) if (oi(d.value, y)) {
            if (d.children === c.children && !nr.current) {
              r = $a(n, r, l);
              break e;
            }
          } else for (d = r.child, d !== null && (d.return = r); d !== null; ) {
            var b = d.dependencies;
            if (b !== null) {
              y = d.child;
              for (var k = b.firstContext; k !== null; ) {
                if (k.context === u) {
                  if (d.tag === 1) {
                    k = Zi(-1, l & -l), k.tag = 2;
                    var $ = d.updateQueue;
                    if ($ !== null) {
                      $ = $.shared;
                      var ue = $.pending;
                      ue === null ? k.next = k : (k.next = ue.next, ue.next = k), $.pending = k;
                    }
                  }
                  d.lanes |= l, k = d.alternate, k !== null && (k.lanes |= l), Rd(
                    d.return,
                    l,
                    r
                  ), b.lanes |= l;
                  break;
                }
                k = k.next;
              }
            } else if (d.tag === 10) y = d.type === r.type ? null : d.child;
            else if (d.tag === 18) {
              if (y = d.return, y === null) throw Error(R(341));
              y.lanes |= l, b = y.alternate, b !== null && (b.lanes |= l), Rd(y, l, r), y = d.sibling;
            } else y = d.child;
            if (y !== null) y.return = d;
            else for (y = d; y !== null; ) {
              if (y === r) {
                y = null;
                break;
              }
              if (d = y.sibling, d !== null) {
                d.return = y.return, y = d;
                break;
              }
              y = y.return;
            }
            d = y;
          }
          Cr(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, u = r.pendingProps.children, _n(r, l), c = Va(c), u = u(c), r.flags |= 1, Cr(n, r, u, l), r.child;
      case 14:
        return u = r.type, c = ci(u, r.pendingProps), c = ci(u.type, c), Mo(n, r, u, c, l);
      case 15:
        return Tt(n, r, r.type, r.pendingProps, l);
      case 17:
        return u = r.type, c = r.pendingProps, c = r.elementType === u ? c : ci(u, c), Ba(n, r), r.tag = 1, qn(u) ? (n = !0, cr(r)) : n = !1, _n(r, l), nf(r, u, c), _s(r, u, c, l), Ds(null, r, u, !0, n, l);
      case 19:
        return ji(n, r, l);
      case 22:
        return Ns(n, r, l);
    }
    throw Error(R(156, r.tag));
  };
  function hm(n, r) {
    return gn(n, r);
  }
  function Ey(n, r, l, u) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ya(n, r, l, u) {
    return new Ey(n, r, l, u);
  }
  function Kd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function wy(n) {
    if (typeof n == "function") return Kd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === Xe) return 11;
      if (n === lt) return 14;
    }
    return 2;
  }
  function Bl(n, r) {
    var l = n.alternate;
    return l === null ? (l = Ya(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function Is(n, r, l, u, c, d) {
    var y = 2;
    if (u = n, typeof n == "function") Kd(n) && (y = 1);
    else if (typeof n == "string") y = 5;
    else e: switch (n) {
      case ae:
        return al(l.children, c, d, r);
      case Me:
        y = 8, c |= 8;
        break;
      case de:
        return n = Ya(12, l, r, c | 2), n.elementType = de, n.lanes = d, n;
      case z:
        return n = Ya(13, l, r, c), n.elementType = z, n.lanes = d, n;
      case Oe:
        return n = Ya(19, l, r, c), n.elementType = Oe, n.lanes = d, n;
      case ke:
        return $l(l, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case nt:
            y = 10;
            break e;
          case et:
            y = 9;
            break e;
          case Xe:
            y = 11;
            break e;
          case lt:
            y = 14;
            break e;
          case ht:
            y = 16, u = null;
            break e;
        }
        throw Error(R(130, n == null ? n : typeof n, ""));
    }
    return r = Ya(y, l, r, c), r.elementType = n, r.type = u, r.lanes = d, r;
  }
  function al(n, r, l, u) {
    return n = Ya(7, n, u, r), n.lanes = l, n;
  }
  function $l(n, r, l, u) {
    return n = Ya(22, n, u, r), n.elementType = ke, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Jd(n, r, l) {
    return n = Ya(6, n, null, r), n.lanes = l, n;
  }
  function vf(n, r, l) {
    return r = Ya(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function ym(n, r, l, u, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ru(0), this.expirationTimes = ru(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ru(0), this.identifierPrefix = u, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function mf(n, r, l, u, c, d, y, b, k) {
    return n = new ym(n, r, l, b, k), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Ya(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: u, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, kd(d), n;
  }
  function Ry(n, r, l) {
    var u = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Y, key: u == null ? null : "" + u, children: n, containerInfo: r, implementation: l };
  }
  function Zd(n) {
    if (!n) return jr;
    n = n._reactInternals;
    e: {
      if (Et(n) !== n || n.tag !== 1) throw Error(R(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (qn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(R(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (qn(l)) return ps(n, l, r);
    }
    return r;
  }
  function gm(n, r, l, u, c, d, y, b, k) {
    return n = mf(l, u, !0, n, c, d, y, b, k), n.context = Zd(null), l = n.current, u = Jn(), c = Li(l), d = Zi(u, c), d.callback = r ?? null, Ll(l, d, c), n.current.lanes = c, $i(n, c, u), da(n, u), n;
  }
  function hf(n, r, l, u) {
    var c = r.current, d = Jn(), y = Li(c);
    return l = Zd(l), r.context === null ? r.context = l : r.pendingContext = l, r = Zi(d, y), r.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (r.callback = u), n = Ll(c, r, y), n !== null && (Yr(n, c, y, d), Lc(n, c, y)), y;
  }
  function yf(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function ep(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function gf(n, r) {
    ep(n, r), (n = n.alternate) && ep(n, r);
  }
  function Sm() {
    return null;
  }
  var Fo = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function tp(n) {
    this._internalRoot = n;
  }
  Sf.prototype.render = tp.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(R(409));
    hf(n, r, null, null);
  }, Sf.prototype.unmount = tp.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Uo(function() {
        hf(null, n, null, null);
      }), r[Qi] = null;
    }
  };
  function Sf(n) {
    this._internalRoot = n;
  }
  Sf.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = gt();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < tr.length && r !== 0 && r < tr[l].priority; l++) ;
      tr.splice(l, 0, n), l === 0 && Zu(n);
    }
  };
  function np(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function Cf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Cm() {
  }
  function Ty(n, r, l, u, c) {
    if (c) {
      if (typeof u == "function") {
        var d = u;
        u = function() {
          var $ = yf(y);
          d.call($);
        };
      }
      var y = gm(r, u, n, 0, null, !1, !1, "", Cm);
      return n._reactRootContainer = y, n[Qi] = y.current, vu(n.nodeType === 8 ? n.parentNode : n), Uo(), y;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof u == "function") {
      var b = u;
      u = function() {
        var $ = yf(k);
        b.call($);
      };
    }
    var k = mf(n, 0, !1, null, null, !1, !1, "", Cm);
    return n._reactRootContainer = k, n[Qi] = k.current, vu(n.nodeType === 8 ? n.parentNode : n), Uo(function() {
      hf(r, k, l, u);
    }), k;
  }
  function Ys(n, r, l, u, c) {
    var d = l._reactRootContainer;
    if (d) {
      var y = d;
      if (typeof c == "function") {
        var b = c;
        c = function() {
          var k = yf(y);
          b.call(k);
        };
      }
      hf(r, y, n, c);
    } else y = Ty(l, r, n, c, u);
    return yf(y);
  }
  Yt = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = ri(r.pendingLanes);
          l !== 0 && (Ii(r, l | 1), da(r, wt()), !(Bt & 6) && (ku = wt() + 500, _i()));
        }
        break;
      case 13:
        Uo(function() {
          var u = Ea(n, 1);
          if (u !== null) {
            var c = Jn();
            Yr(u, n, 1, c);
          }
        }), gf(n, 1);
    }
  }, Ku = function(n) {
    if (n.tag === 13) {
      var r = Ea(n, 134217728);
      if (r !== null) {
        var l = Jn();
        Yr(r, n, 134217728, l);
      }
      gf(n, 134217728);
    }
  }, Si = function(n) {
    if (n.tag === 13) {
      var r = Li(n), l = Ea(n, r);
      if (l !== null) {
        var u = Jn();
        Yr(l, n, r, u);
      }
      gf(n, r);
    }
  }, gt = function() {
    return Qt;
  }, iu = function(n, r) {
    var l = Qt;
    try {
      return Qt = n, r();
    } finally {
      Qt = l;
    }
  }, Ot = function(n, r, l) {
    switch (r) {
      case "input":
        if (Dn(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var u = l[r];
            if (u !== n && u.form === n.form) {
              var c = Tn(u);
              if (!c) throw Error(R(90));
              mr(u), Dn(u, c);
            }
          }
        }
        break;
      case "textarea":
        ga(n, l);
        break;
      case "select":
        r = l.value, r != null && wn(n, !!l.multiple, r, !1);
    }
  }, ao = Wd, hl = Uo;
  var _y = { usingClientEntryPoint: !1, Events: [rt, ui, Tn, sr, ro, Wd] }, qs = { findFiberByHostInstance: So, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, xm = { bundleType: qs.bundleType, version: qs.version, rendererPackageName: qs.rendererPackageName, rendererConfig: qs.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Je.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = An(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: qs.findFiberByHostInstance || Sm, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Il = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Il.isDisabled && Il.supportsFiber) try {
      Sl = Il.inject(xm), ta = Il;
    } catch {
    }
  }
  return Ka.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _y, Ka.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!np(r)) throw Error(R(200));
    return Ry(n, r, null, l);
  }, Ka.createRoot = function(n, r) {
    if (!np(n)) throw Error(R(299));
    var l = !1, u = "", c = Fo;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (u = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = mf(n, 1, !1, null, null, l, !1, u, c), n[Qi] = r.current, vu(n.nodeType === 8 ? n.parentNode : n), new tp(r);
  }, Ka.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(R(188)) : (n = Object.keys(n).join(","), Error(R(268, n)));
    return n = An(r), n = n === null ? null : n.stateNode, n;
  }, Ka.flushSync = function(n) {
    return Uo(n);
  }, Ka.hydrate = function(n, r, l) {
    if (!Cf(r)) throw Error(R(200));
    return Ys(null, n, r, !0, l);
  }, Ka.hydrateRoot = function(n, r, l) {
    if (!np(n)) throw Error(R(405));
    var u = l != null && l.hydratedSources || null, c = !1, d = "", y = Fo;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (y = l.onRecoverableError)), r = gm(r, null, n, 1, l ?? null, c, !1, d, y), n[Qi] = r.current, vu(n), u) for (n = 0; n < u.length; n++) l = u[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
      l,
      c
    );
    return new Sf(r);
  }, Ka.render = function(n, r, l) {
    if (!Cf(r)) throw Error(R(200));
    return Ys(null, n, r, !1, l);
  }, Ka.unmountComponentAtNode = function(n) {
    if (!Cf(n)) throw Error(R(40));
    return n._reactRootContainer ? (Uo(function() {
      Ys(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Qi] = null;
      });
    }), !0) : !1;
  }, Ka.unstable_batchedUpdates = Wd, Ka.unstable_renderSubtreeIntoContainer = function(n, r, l, u) {
    if (!Cf(l)) throw Error(R(200));
    if (n == null || n._reactInternals === void 0) throw Error(R(38));
    return Ys(n, r, l, !1, u);
  }, Ka.version = "18.3.1-next-f1338f8080-20240426", Ka;
}
var Ja = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yE;
function wk() {
  return yE || (yE = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var g = ov(), w = wE(), R = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, _ = !1;
    function K(e) {
      _ = e;
    }
    function G(e) {
      if (!_) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        $e("warn", e, a);
      }
    }
    function S(e) {
      if (!_) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        $e("error", e, a);
      }
    }
    function $e(e, t, a) {
      {
        var i = R.ReactDebugCurrentFrame, o = i.getStackAddendum();
        o !== "" && (t += "%s", a = a.concat([o]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var F = 0, X = 1, xe = 2, A = 3, ve = 4, fe = 5, He = 6, ne = 7, Ie = 8, be = 9, _e = 10, pe = 11, Je = 12, re = 13, Y = 14, ae = 15, Me = 16, de = 17, nt = 18, et = 19, Xe = 21, z = 22, Oe = 23, lt = 24, ht = 25, ke = !0, ce = !1, Le = !1, ge = !1, D = !1, M = !0, Ve = !0, Ke = !0, St = !0, oe = /* @__PURE__ */ new Set(), Se = {}, pt = {};
    function st(e, t) {
      Ht(e, t), Ht(e + "Capture", t);
    }
    function Ht(e, t) {
      Se[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Se[e] = t;
      {
        var a = e.toLowerCase();
        pt[a] = e, e === "onDoubleClick" && (pt.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        oe.add(t[i]);
    }
    var on = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", mr = Object.prototype.hasOwnProperty;
    function En(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function er(e) {
      try {
        return zn(e), !1;
      } catch {
        return !0;
      }
    }
    function zn(e) {
      return "" + e;
    }
    function nn(e, t) {
      if (er(e))
        return S("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, En(e)), zn(e);
    }
    function Dn(e) {
      if (er(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", En(e)), zn(e);
    }
    function Oa(e, t) {
      if (er(e))
        return S("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, En(e)), zn(e);
    }
    function Lr(e, t) {
      if (er(e))
        return S("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, En(e)), zn(e);
    }
    function $n(e) {
      if (er(e))
        return S("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", En(e)), zn(e);
    }
    function wn(e) {
      if (er(e))
        return S("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", En(e)), zn(e);
    }
    var jn = 0, or = 1, ga = 2, On = 3, ur = 4, In = 5, Ar = 6, Sa = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Ce = Sa + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", We = new RegExp("^[" + Sa + "][" + Ce + "]*$"), Rt = {}, Gt = {};
    function Z(e) {
      return mr.call(Gt, e) ? !0 : mr.call(Rt, e) ? !1 : We.test(e) ? (Gt[e] = !0, !0) : (Rt[e] = !0, S("Invalid attribute name: `%s`", e), !1);
    }
    function Ee(e, t, a) {
      return t !== null ? t.type === jn : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function we(e, t, a, i) {
      if (a !== null && a.type === jn)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var o = e.toLowerCase().slice(0, 5);
          return o !== "data-" && o !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Pt(e, t, a, i) {
      if (t === null || typeof t > "u" || we(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case On:
            return !t;
          case ur:
            return t === !1;
          case In:
            return isNaN(t);
          case Ar:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function jt(e) {
      return Ot.hasOwnProperty(e) ? Ot[e] : null;
    }
    function At(e, t, a, i, o, s, f) {
      this.acceptsBooleans = t === ga || t === On || t === ur, this.attributeName = i, this.attributeNamespace = o, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var Ot = {}, rn = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    rn.forEach(function(e) {
      Ot[e] = new At(
        e,
        jn,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      Ot[t] = new At(
        t,
        or,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Ot[e] = new At(
        e,
        ga,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      Ot[e] = new At(
        e,
        ga,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      Ot[e] = new At(
        e,
        On,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Ot[e] = new At(
        e,
        On,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Ot[e] = new At(
        e,
        ur,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Ot[e] = new At(
        e,
        Ar,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      Ot[e] = new At(
        e,
        In,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Mt = /[\-\:]([a-z])/g, Ln = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Mt, Ln);
      Ot[t] = new At(
        t,
        or,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Mt, Ln);
      Ot[t] = new At(
        t,
        or,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Mt, Ln);
      Ot[t] = new At(
        t,
        or,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Ot[e] = new At(
        e,
        or,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var sr = "xlinkHref";
    Ot[sr] = new At(
      "xlinkHref",
      or,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Ot[e] = new At(
        e,
        or,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var ro = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, ao = !1;
    function hl(e) {
      !ao && ro.test(e) && (ao = !0, S("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function yl(e, t, a, i) {
      if (i.mustUseProperty) {
        var o = i.propertyName;
        return e[o];
      } else {
        nn(a, t), i.sanitizeURL && hl("" + a);
        var s = i.attributeName, f = null;
        if (i.type === ur) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : Pt(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (Pt(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === On)
            return a;
          f = e.getAttribute(s);
        }
        return Pt(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function io(e, t, a, i) {
      {
        if (!Z(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var o = e.getAttribute(t);
        return nn(a, t), o === "" + a ? a : o;
      }
    }
    function Ur(e, t, a, i) {
      var o = jt(t);
      if (!Ee(t, o, i)) {
        if (Pt(t, a, o, i) && (a = null), i || o === null) {
          if (Z(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (nn(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = o.mustUseProperty;
        if (f) {
          var p = o.propertyName;
          if (a === null) {
            var m = o.type;
            e[p] = m === On ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var C = o.attributeName, x = o.attributeNamespace;
        if (a === null)
          e.removeAttribute(C);
        else {
          var O = o.type, N;
          O === On || O === ur && a === !0 ? N = "" : (nn(a, C), N = "" + a, o.sanitizeURL && hl(N.toString())), x ? e.setAttributeNS(x, C, N) : e.setAttribute(C, N);
        }
      }
    }
    var Pr = Symbol.for("react.element"), hr = Symbol.for("react.portal"), hi = Symbol.for("react.fragment"), Za = Symbol.for("react.strict_mode"), yi = Symbol.for("react.profiler"), gi = Symbol.for("react.provider"), T = Symbol.for("react.context"), te = Symbol.for("react.forward_ref"), Ne = Symbol.for("react.suspense"), Be = Symbol.for("react.suspense_list"), Et = Symbol.for("react.memo"), Ct = Symbol.for("react.lazy"), zt = Symbol.for("react.scope"), Nt = Symbol.for("react.debug_trace_mode"), An = Symbol.for("react.offscreen"), mn = Symbol.for("react.legacy_hidden"), gn = Symbol.for("react.cache"), yr = Symbol.for("react.tracing_marker"), ei = Symbol.iterator, ti = "@@iterator";
    function wt(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = ei && e[ei] || e[ti];
      return typeof t == "function" ? t : null;
    }
    var _t = Object.assign, ni = 0, lo, oo, gl, Zo, Sl, ta, Xu;
    function Fr() {
    }
    Fr.__reactDisabledLog = !0;
    function fc() {
      {
        if (ni === 0) {
          lo = console.log, oo = console.info, gl = console.warn, Zo = console.error, Sl = console.group, ta = console.groupCollapsed, Xu = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Fr,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        ni++;
      }
    }
    function dc() {
      {
        if (ni--, ni === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: _t({}, e, {
              value: lo
            }),
            info: _t({}, e, {
              value: oo
            }),
            warn: _t({}, e, {
              value: gl
            }),
            error: _t({}, e, {
              value: Zo
            }),
            group: _t({}, e, {
              value: Sl
            }),
            groupCollapsed: _t({}, e, {
              value: ta
            }),
            groupEnd: _t({}, e, {
              value: Xu
            })
          });
        }
        ni < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var eu = R.ReactCurrentDispatcher, Cl;
    function Ca(e, t, a) {
      {
        if (Cl === void 0)
          try {
            throw Error();
          } catch (o) {
            var i = o.stack.trim().match(/\n( *(at )?)/);
            Cl = i && i[1] || "";
          }
        return `
` + Cl + e;
      }
    }
    var ri = !1, ai;
    {
      var tu = typeof WeakMap == "function" ? WeakMap : Map;
      ai = new tu();
    }
    function uo(e, t) {
      if (!e || ri)
        return "";
      {
        var a = ai.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      ri = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = eu.current, eu.current = null, fc();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (I) {
              i = I;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (I) {
              i = I;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (I) {
            i = I;
          }
          e();
        }
      } catch (I) {
        if (I && i && typeof I.stack == "string") {
          for (var p = I.stack.split(`
`), m = i.stack.split(`
`), C = p.length - 1, x = m.length - 1; C >= 1 && x >= 0 && p[C] !== m[x]; )
            x--;
          for (; C >= 1 && x >= 0; C--, x--)
            if (p[C] !== m[x]) {
              if (C !== 1 || x !== 1)
                do
                  if (C--, x--, x < 0 || p[C] !== m[x]) {
                    var O = `
` + p[C].replace(" at new ", " at ");
                    return e.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", e.displayName)), typeof e == "function" && ai.set(e, O), O;
                  }
                while (C >= 1 && x >= 0);
              break;
            }
        }
      } finally {
        ri = !1, eu.current = s, dc(), Error.prepareStackTrace = o;
      }
      var N = e ? e.displayName || e.name : "", V = N ? Ca(N) : "";
      return typeof e == "function" && ai.set(e, V), V;
    }
    function xl(e, t, a) {
      return uo(e, !0);
    }
    function nu(e, t, a) {
      return uo(e, !1);
    }
    function ru(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function $i(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return uo(e, ru(e));
      if (typeof e == "string")
        return Ca(e);
      switch (e) {
        case Ne:
          return Ca("Suspense");
        case Be:
          return Ca("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case te:
            return nu(e.render);
          case Et:
            return $i(e.type, t, a);
          case Ct: {
            var i = e, o = i._payload, s = i._init;
            try {
              return $i(s(o), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Kf(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case fe:
          return Ca(e.type);
        case Me:
          return Ca("Lazy");
        case re:
          return Ca("Suspense");
        case et:
          return Ca("SuspenseList");
        case F:
        case xe:
        case ae:
          return nu(e.type);
        case pe:
          return nu(e.type.render);
        case X:
          return xl(e.type);
        default:
          return "";
      }
    }
    function Ii(e) {
      try {
        var t = "", a = e;
        do
          t += Kf(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Qt(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var o = t.displayName || t.name || "";
      return o !== "" ? a + "(" + o + ")" : a;
    }
    function au(e) {
      return e.displayName || "Context";
    }
    function Yt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case hi:
          return "Fragment";
        case hr:
          return "Portal";
        case yi:
          return "Profiler";
        case Za:
          return "StrictMode";
        case Ne:
          return "Suspense";
        case Be:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case T:
            var t = e;
            return au(t) + ".Consumer";
          case gi:
            var a = e;
            return au(a._context) + ".Provider";
          case te:
            return Qt(e, e.render, "ForwardRef");
          case Et:
            var i = e.displayName || null;
            return i !== null ? i : Yt(e.type) || "Memo";
          case Ct: {
            var o = e, s = o._payload, f = o._init;
            try {
              return Yt(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Ku(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function Si(e) {
      return e.displayName || "Context";
    }
    function gt(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case lt:
          return "Cache";
        case be:
          var i = a;
          return Si(i) + ".Consumer";
        case _e:
          var o = a;
          return Si(o._context) + ".Provider";
        case nt:
          return "DehydratedFragment";
        case pe:
          return Ku(a, a.render, "ForwardRef");
        case ne:
          return "Fragment";
        case fe:
          return a;
        case ve:
          return "Portal";
        case A:
          return "Root";
        case He:
          return "Text";
        case Me:
          return Yt(a);
        case Ie:
          return a === Za ? "StrictMode" : "Mode";
        case z:
          return "Offscreen";
        case Je:
          return "Profiler";
        case Xe:
          return "Scope";
        case re:
          return "Suspense";
        case et:
          return "SuspenseList";
        case ht:
          return "TracingMarker";
        case X:
        case F:
        case de:
        case xe:
        case Y:
        case ae:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var iu = R.ReactDebugCurrentFrame, gr = null, Ci = !1;
    function Hr() {
      {
        if (gr === null)
          return null;
        var e = gr._debugOwner;
        if (e !== null && typeof e < "u")
          return gt(e);
      }
      return null;
    }
    function xi() {
      return gr === null ? "" : Ii(gr);
    }
    function Sn() {
      iu.getCurrentStack = null, gr = null, Ci = !1;
    }
    function un(e) {
      iu.getCurrentStack = e === null ? null : xi, gr = e, Ci = !1;
    }
    function bl() {
      return gr;
    }
    function tr(e) {
      Ci = e;
    }
    function Vr(e) {
      return "" + e;
    }
    function Ma(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return wn(e), e;
        default:
          return "";
      }
    }
    var so = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Ju(e, t) {
      so[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || S("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || S("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Zu(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function El(e) {
      return e._valueTracker;
    }
    function co(e) {
      e._valueTracker = null;
    }
    function Jf(e) {
      var t = "";
      return e && (Zu(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function za(e) {
      var t = Zu(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      wn(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var o = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return o.call(this);
          },
          set: function(p) {
            wn(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            wn(p), i = "" + p;
          },
          stopTracking: function() {
            co(e), delete e[t];
          }
        };
        return f;
      }
    }
    function ii(e) {
      El(e) || (e._valueTracker = za(e));
    }
    function bi(e) {
      if (!e)
        return !1;
      var t = El(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Jf(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function La(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var lu = !1, ou = !1, wl = !1, fo = !1;
    function uu(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function su(e, t) {
      var a = e, i = t.checked, o = _t({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return o;
    }
    function li(e, t) {
      Ju("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !ou && (S("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Hr() || "A component", t.type), ou = !0), t.value !== void 0 && t.defaultValue !== void 0 && !lu && (S("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Hr() || "A component", t.type), lu = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Ma(t.value != null ? t.value : i),
        controlled: uu(t)
      };
    }
    function h(e, t) {
      var a = e, i = t.checked;
      i != null && Ur(a, "checked", i, !1);
    }
    function E(e, t) {
      var a = e;
      {
        var i = uu(t);
        !a._wrapperState.controlled && i && !fo && (S("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), fo = !0), a._wrapperState.controlled && !i && !wl && (S("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), wl = !0);
      }
      h(e, t);
      var o = Ma(t.value), s = t.type;
      if (o != null)
        s === "number" ? (o === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != o) && (a.value = Vr(o)) : a.value !== Vr(o) && (a.value = Vr(o));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? ot(a, t.type, o) : t.hasOwnProperty("defaultValue") && ot(a, t.type, Ma(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function B(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var o = t.type, s = o === "submit" || o === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = Vr(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function q(e, t) {
      var a = e;
      E(a, t), ye(a, t);
    }
    function ye(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        nn(a, "name");
        for (var o = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < o.length; s++) {
          var f = o[s];
          if (!(f === e || f.form !== e.form)) {
            var p = Fm(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            bi(f), E(f, p);
          }
        }
      }
    }
    function ot(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || La(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Vr(e._wrapperState.initialValue) : e.defaultValue !== Vr(a) && (e.defaultValue = Vr(a)));
    }
    var Te = !1, ft = !1, Lt = !1;
    function qt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? g.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || ft || (ft = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (Lt || (Lt = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !Te && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Te = !0);
    }
    function hn(e, t) {
      t.value != null && e.setAttribute("value", Vr(Ma(t.value)));
    }
    var sn = Array.isArray;
    function kt(e) {
      return sn(e);
    }
    var cn;
    cn = !1;
    function Rn() {
      var e = Hr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Rl = ["value", "defaultValue"];
    function es(e) {
      {
        Ju("select", e);
        for (var t = 0; t < Rl.length; t++) {
          var a = Rl[t];
          if (e[a] != null) {
            var i = kt(e[a]);
            e.multiple && !i ? S("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, Rn()) : !e.multiple && i && S("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, Rn());
          }
        }
      }
    }
    function Yi(e, t, a, i) {
      var o = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var m = 0; m < o.length; m++) {
          var C = f.hasOwnProperty("$" + o[m].value);
          o[m].selected !== C && (o[m].selected = C), C && i && (o[m].defaultSelected = !0);
        }
      } else {
        for (var x = Vr(Ma(a)), O = null, N = 0; N < o.length; N++) {
          if (o[N].value === x) {
            o[N].selected = !0, i && (o[N].defaultSelected = !0);
            return;
          }
          O === null && !o[N].disabled && (O = o[N]);
        }
        O !== null && (O.selected = !0);
      }
    }
    function ts(e, t) {
      return _t({}, t, {
        value: void 0
      });
    }
    function po(e, t) {
      var a = e;
      es(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !cn && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), cn = !0);
    }
    function Zf(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Yi(a, !!t.multiple, i, !1) : t.defaultValue != null && Yi(a, !!t.multiple, t.defaultValue, !0);
    }
    function pc(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var o = t.value;
      o != null ? Yi(a, !!t.multiple, o, !1) : i !== !!t.multiple && (t.defaultValue != null ? Yi(a, !!t.multiple, t.defaultValue, !0) : Yi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function ed(e, t) {
      var a = e, i = t.value;
      i != null && Yi(a, !!t.multiple, i, !1);
    }
    var uv = !1;
    function td(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = _t({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Vr(a._wrapperState.initialValue)
      });
      return i;
    }
    function nd(e, t) {
      var a = e;
      Ju("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !uv && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Hr() || "A component"), uv = !0);
      var i = t.value;
      if (i == null) {
        var o = t.children, s = t.defaultValue;
        if (o != null) {
          S("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (kt(o)) {
              if (o.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              o = o[0];
            }
            s = o;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: Ma(i)
      };
    }
    function sv(e, t) {
      var a = e, i = Ma(t.value), o = Ma(t.defaultValue);
      if (i != null) {
        var s = Vr(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      o != null && (a.defaultValue = Vr(o));
    }
    function cv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function ny(e, t) {
      sv(e, t);
    }
    var qi = "http://www.w3.org/1999/xhtml", rd = "http://www.w3.org/1998/Math/MathML", ad = "http://www.w3.org/2000/svg";
    function id(e) {
      switch (e) {
        case "svg":
          return ad;
        case "math":
          return rd;
        default:
          return qi;
      }
    }
    function ld(e, t) {
      return e == null || e === qi ? id(t) : e === ad && t === "foreignObject" ? qi : e;
    }
    var fv = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, o) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, o);
        });
      } : e;
    }, vc, dv = fv(function(e, t) {
      if (e.namespaceURI === ad && !("innerHTML" in e)) {
        vc = vc || document.createElement("div"), vc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = vc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), na = 1, Gi = 3, Yn = 8, Wi = 9, od = 11, cu = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Gi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, ns = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, rs = {
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
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function pv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var vv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(rs).forEach(function(e) {
      vv.forEach(function(t) {
        rs[pv(t, e)] = rs[e];
      });
    });
    function mc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(rs.hasOwnProperty(e) && rs[e]) ? t + "px" : (Lr(t, e), ("" + t).trim());
    }
    var mv = /([A-Z])/g, hv = /^ms-/;
    function fu(e) {
      return e.replace(mv, "-$1").toLowerCase().replace(hv, "-ms-");
    }
    var yv = function() {
    };
    {
      var ry = /^(?:webkit|moz|o)[A-Z]/, ay = /^-ms-/, gv = /-(.)/g, ud = /;\s*$/, Ei = {}, vo = {}, Sv = !1, as = !1, iy = function(e) {
        return e.replace(gv, function(t, a) {
          return a.toUpperCase();
        });
      }, Cv = function(e) {
        Ei.hasOwnProperty(e) && Ei[e] || (Ei[e] = !0, S(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          iy(e.replace(ay, "ms-"))
        ));
      }, sd = function(e) {
        Ei.hasOwnProperty(e) && Ei[e] || (Ei[e] = !0, S("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, cd = function(e, t) {
        vo.hasOwnProperty(t) && vo[t] || (vo[t] = !0, S(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(ud, "")));
      }, xv = function(e, t) {
        Sv || (Sv = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
      }, bv = function(e, t) {
        as || (as = !0, S("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      yv = function(e, t) {
        e.indexOf("-") > -1 ? Cv(e) : ry.test(e) ? sd(e) : ud.test(t) && cd(e, t), typeof t == "number" && (isNaN(t) ? xv(e, t) : isFinite(t) || bv(e, t));
      };
    }
    var Ev = yv;
    function ly(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var o = e[i];
            if (o != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : fu(i)) + ":", t += mc(i, o, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function wv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var o = i.indexOf("--") === 0;
          o || Ev(i, t[i]);
          var s = mc(i, t[i], o);
          i === "float" && (i = "cssFloat"), o ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function oy(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Rv(e) {
      var t = {};
      for (var a in e)
        for (var i = ns[a] || [a], o = 0; o < i.length; o++)
          t[i[o]] = a;
      return t;
    }
    function uy(e, t) {
      {
        if (!t)
          return;
        var a = Rv(e), i = Rv(t), o = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var m = f + "," + p;
            if (o[m])
              continue;
            o[m] = !0, S("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", oy(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var oi = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, is = _t({
      menuitem: !0
    }, oi), Tv = "__html";
    function hc(e, t) {
      if (t) {
        if (is[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Tv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && S("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Tl(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
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
    var ls = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, yc = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, du = {}, sy = new RegExp("^(aria)-[" + Ce + "]*$"), pu = new RegExp("^(aria)[A-Z][" + Ce + "]*$");
    function fd(e, t) {
      {
        if (mr.call(du, t) && du[t])
          return !0;
        if (pu.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = yc.hasOwnProperty(a) ? a : null;
          if (i == null)
            return S("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), du[t] = !0, !0;
          if (t !== i)
            return S("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), du[t] = !0, !0;
        }
        if (sy.test(t)) {
          var o = t.toLowerCase(), s = yc.hasOwnProperty(o) ? o : null;
          if (s == null)
            return du[t] = !0, !1;
          if (t !== s)
            return S("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), du[t] = !0, !0;
        }
      }
      return !0;
    }
    function os(e, t) {
      {
        var a = [];
        for (var i in t) {
          var o = fd(e, i);
          o || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? S("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && S("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function dd(e, t) {
      Tl(e, t) || os(e, t);
    }
    var pd = !1;
    function gc(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !pd && (pd = !0, e === "select" && t.multiple ? S("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : S("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var mo = function() {
    };
    {
      var Sr = {}, vd = /^on./, Sc = /^on[^A-Z]/, _v = new RegExp("^(aria)-[" + Ce + "]*$"), kv = new RegExp("^(aria)[A-Z][" + Ce + "]*$");
      mo = function(e, t, a, i) {
        if (mr.call(Sr, t) && Sr[t])
          return !0;
        var o = t.toLowerCase();
        if (o === "onfocusin" || o === "onfocusout")
          return S("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Sr[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(o) ? f[o] : null;
          if (p != null)
            return S("Invalid event handler property `%s`. Did you mean `%s`?", t, p), Sr[t] = !0, !0;
          if (vd.test(t))
            return S("Unknown event handler property `%s`. It will be ignored.", t), Sr[t] = !0, !0;
        } else if (vd.test(t))
          return Sc.test(t) && S("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Sr[t] = !0, !0;
        if (_v.test(t) || kv.test(t))
          return !0;
        if (o === "innerhtml")
          return S("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Sr[t] = !0, !0;
        if (o === "aria")
          return S("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Sr[t] = !0, !0;
        if (o === "is" && a !== null && a !== void 0 && typeof a != "string")
          return S("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), Sr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return S("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Sr[t] = !0, !0;
        var m = jt(t), C = m !== null && m.type === jn;
        if (ls.hasOwnProperty(o)) {
          var x = ls[o];
          if (x !== t)
            return S("Invalid DOM property `%s`. Did you mean `%s`?", t, x), Sr[t] = !0, !0;
        } else if (!C && t !== o)
          return S("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, o), Sr[t] = !0, !0;
        return typeof a == "boolean" && we(t, a, m, !1) ? (a ? S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), Sr[t] = !0, !0) : C ? !0 : we(t, a, m, !1) ? (Sr[t] = !0, !1) : ((a === "false" || a === "true") && m !== null && m.type === On && (S("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), Sr[t] = !0), !0);
      };
    }
    var Nv = function(e, t, a) {
      {
        var i = [];
        for (var o in t) {
          var s = mo(e, o, t[o], a);
          s || i.push(o);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? S("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && S("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function Dv(e, t, a) {
      Tl(e, t) || Nv(e, t, a);
    }
    var md = 1, Cc = 2, Aa = 4, hd = md | Cc | Aa, ho = null;
    function cy(e) {
      ho !== null && S("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), ho = e;
    }
    function fy() {
      ho === null && S("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), ho = null;
    }
    function us(e) {
      return e === ho;
    }
    function yd(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Gi ? t.parentNode : t;
    }
    var xc = null, yo = null, an = null;
    function bc(e) {
      var t = zu(e);
      if (t) {
        if (typeof xc != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Fm(a);
          xc(t.stateNode, t.type, i);
        }
      }
    }
    function Ec(e) {
      xc = e;
    }
    function vu(e) {
      yo ? an ? an.push(e) : an = [e] : yo = e;
    }
    function jv() {
      return yo !== null || an !== null;
    }
    function wc() {
      if (yo) {
        var e = yo, t = an;
        if (yo = null, an = null, bc(e), t)
          for (var a = 0; a < t.length; a++)
            bc(t[a]);
      }
    }
    var mu = function(e, t) {
      return e(t);
    }, ss = function() {
    }, _l = !1;
    function Ov() {
      var e = jv();
      e && (ss(), wc());
    }
    function Mv(e, t, a) {
      if (_l)
        return e(t, a);
      _l = !0;
      try {
        return mu(e, t, a);
      } finally {
        _l = !1, Ov();
      }
    }
    function dy(e, t, a) {
      mu = e, ss = a;
    }
    function zv(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Rc(e, t, a) {
      switch (e) {
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
          return !!(a.disabled && zv(t));
        default:
          return !1;
      }
    }
    function kl(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Fm(a);
      if (i === null)
        return null;
      var o = i[t];
      if (Rc(t, e.type, i))
        return null;
      if (o && typeof o != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof o + "` type.");
      return o;
    }
    var cs = !1;
    if (on)
      try {
        var go = {};
        Object.defineProperty(go, "passive", {
          get: function() {
            cs = !0;
          }
        }), window.addEventListener("test", go, go), window.removeEventListener("test", go, go);
      } catch {
        cs = !1;
      }
    function Tc(e, t, a, i, o, s, f, p, m) {
      var C = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, C);
      } catch (x) {
        this.onError(x);
      }
    }
    var _c = Tc;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var gd = document.createElement("react");
      _c = function(t, a, i, o, s, f, p, m, C) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var x = document.createEvent("Event"), O = !1, N = !0, V = window.event, I = Object.getOwnPropertyDescriptor(window, "event");
        function W() {
          gd.removeEventListener(Q, ut, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = V);
        }
        var je = Array.prototype.slice.call(arguments, 3);
        function ut() {
          O = !0, W(), a.apply(i, je), N = !1;
        }
        var Ze, It = !1, Ut = !1;
        function U(P) {
          if (Ze = P.error, It = !0, Ze === null && P.colno === 0 && P.lineno === 0 && (Ut = !0), P.defaultPrevented && Ze != null && typeof Ze == "object")
            try {
              Ze._suppressLogging = !0;
            } catch {
            }
        }
        var Q = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", U), gd.addEventListener(Q, ut, !1), x.initEvent(Q, !1, !1), gd.dispatchEvent(x), I && Object.defineProperty(window, "event", I), O && N && (It ? Ut && (Ze = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Ze = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Ze)), window.removeEventListener("error", U), !O)
          return W(), Tc.apply(this, arguments);
      };
    }
    var Lv = _c, hu = !1, kc = null, yu = !1, wi = null, Av = {
      onError: function(e) {
        hu = !0, kc = e;
      }
    };
    function Nl(e, t, a, i, o, s, f, p, m) {
      hu = !1, kc = null, Lv.apply(Av, arguments);
    }
    function Ri(e, t, a, i, o, s, f, p, m) {
      if (Nl.apply(this, arguments), hu) {
        var C = ds();
        yu || (yu = !0, wi = C);
      }
    }
    function fs() {
      if (yu) {
        var e = wi;
        throw yu = !1, wi = null, e;
      }
    }
    function Qi() {
      return hu;
    }
    function ds() {
      if (hu) {
        var e = kc;
        return hu = !1, kc = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function gu(e) {
      return e._reactInternals;
    }
    function py(e) {
      return e._reactInternals !== void 0;
    }
    function So(e, t) {
      e._reactInternals = t;
    }
    var rt = (
      /*                      */
      0
    ), ui = (
      /*                */
      1
    ), Tn = (
      /*                    */
      2
    ), Vt = (
      /*                       */
      4
    ), Ua = (
      /*                */
      16
    ), Pa = (
      /*                 */
      32
    ), yn = (
      /*                     */
      64
    ), tt = (
      /*                   */
      128
    ), jr = (
      /*            */
      256
    ), Mn = (
      /*                          */
      512
    ), nr = (
      /*                     */
      1024
    ), ra = (
      /*                      */
      2048
    ), aa = (
      /*                    */
      4096
    ), qn = (
      /*                   */
      8192
    ), Su = (
      /*             */
      16384
    ), Uv = (
      /*               */
      32767
    ), ps = (
      /*                   */
      32768
    ), cr = (
      /*                */
      65536
    ), Nc = (
      /* */
      131072
    ), Ti = (
      /*                       */
      1048576
    ), Cu = (
      /*                    */
      2097152
    ), Xi = (
      /*                 */
      4194304
    ), Dc = (
      /*                */
      8388608
    ), Dl = (
      /*               */
      16777216
    ), _i = (
      /*              */
      33554432
    ), jl = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Vt | nr | 0
    ), Ol = Tn | Vt | Ua | Pa | Mn | aa | qn, Ml = Vt | yn | Mn | qn, Ki = ra | Ua, Gn = Xi | Dc | Cu, Fa = R.ReactCurrentOwner;
    function xa(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (Tn | aa)) !== rt && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === A ? a : null;
    }
    function ki(e) {
      if (e.tag === re) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function Ni(e) {
      return e.tag === A ? e.stateNode.containerInfo : null;
    }
    function Co(e) {
      return xa(e) === e;
    }
    function Pv(e) {
      {
        var t = Fa.current;
        if (t !== null && t.tag === X) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || S("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", gt(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var o = gu(e);
      return o ? xa(o) === o : !1;
    }
    function jc(e) {
      if (xa(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Oc(e) {
      var t = e.alternate;
      if (!t) {
        var a = xa(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, o = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = o = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var m = s.child; m; ) {
            if (m === i)
              return jc(s), e;
            if (m === o)
              return jc(s), t;
            m = m.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== o.return)
          i = s, o = f;
        else {
          for (var C = !1, x = s.child; x; ) {
            if (x === i) {
              C = !0, i = s, o = f;
              break;
            }
            if (x === o) {
              C = !0, o = s, i = f;
              break;
            }
            x = x.sibling;
          }
          if (!C) {
            for (x = f.child; x; ) {
              if (x === i) {
                C = !0, i = f, o = s;
                break;
              }
              if (x === o) {
                C = !0, o = f, i = s;
                break;
              }
              x = x.sibling;
            }
            if (!C)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== o)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== A)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function ia(e) {
      var t = Oc(e);
      return t !== null ? la(t) : null;
    }
    function la(e) {
      if (e.tag === fe || e.tag === He)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = la(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function xn(e) {
      var t = Oc(e);
      return t !== null ? Ha(t) : null;
    }
    function Ha(e) {
      if (e.tag === fe || e.tag === He)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== ve) {
          var a = Ha(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Sd = w.unstable_scheduleCallback, Fv = w.unstable_cancelCallback, Cd = w.unstable_shouldYield, xd = w.unstable_requestPaint, rr = w.unstable_now, Mc = w.unstable_getCurrentPriorityLevel, vs = w.unstable_ImmediatePriority, zl = w.unstable_UserBlockingPriority, Ji = w.unstable_NormalPriority, vy = w.unstable_LowPriority, xo = w.unstable_IdlePriority, zc = w.unstable_yieldValue, Hv = w.unstable_setDisableYieldValue, bo = null, Un = null, De = null, ba = !1, oa = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function xu(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Ve && (e = _t({}, e, {
          getLaneLabelMap: Eo,
          injectProfilingHooks: Va
        })), bo = t.inject(e), Un = t;
      } catch (a) {
        S("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function bd(e, t) {
      if (Un && typeof Un.onScheduleFiberRoot == "function")
        try {
          Un.onScheduleFiberRoot(bo, e, t);
        } catch (a) {
          ba || (ba = !0, S("React instrumentation encountered an error: %s", a));
        }
    }
    function Ed(e, t) {
      if (Un && typeof Un.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & tt) === tt;
          if (Ke) {
            var i;
            switch (t) {
              case Br:
                i = vs;
                break;
              case ji:
                i = zl;
                break;
              case Ba:
                i = Ji;
                break;
              case $a:
                i = xo;
                break;
              default:
                i = Ji;
                break;
            }
            Un.onCommitFiberRoot(bo, e, i, a);
          }
        } catch (o) {
          ba || (ba = !0, S("React instrumentation encountered an error: %s", o));
        }
    }
    function wd(e) {
      if (Un && typeof Un.onPostCommitFiberRoot == "function")
        try {
          Un.onPostCommitFiberRoot(bo, e);
        } catch (t) {
          ba || (ba = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Rd(e) {
      if (Un && typeof Un.onCommitFiberUnmount == "function")
        try {
          Un.onCommitFiberUnmount(bo, e);
        } catch (t) {
          ba || (ba = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function _n(e) {
      if (typeof zc == "function" && (Hv(e), K(e)), Un && typeof Un.setStrictMode == "function")
        try {
          Un.setStrictMode(bo, e);
        } catch (t) {
          ba || (ba = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Va(e) {
      De = e;
    }
    function Eo() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < To; a++) {
          var i = Iv(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Td(e) {
      De !== null && typeof De.markCommitStarted == "function" && De.markCommitStarted(e);
    }
    function _d() {
      De !== null && typeof De.markCommitStopped == "function" && De.markCommitStopped();
    }
    function Ea(e) {
      De !== null && typeof De.markComponentRenderStarted == "function" && De.markComponentRenderStarted(e);
    }
    function wa() {
      De !== null && typeof De.markComponentRenderStopped == "function" && De.markComponentRenderStopped();
    }
    function kd(e) {
      De !== null && typeof De.markComponentPassiveEffectMountStarted == "function" && De.markComponentPassiveEffectMountStarted(e);
    }
    function Vv() {
      De !== null && typeof De.markComponentPassiveEffectMountStopped == "function" && De.markComponentPassiveEffectMountStopped();
    }
    function Zi(e) {
      De !== null && typeof De.markComponentPassiveEffectUnmountStarted == "function" && De.markComponentPassiveEffectUnmountStarted(e);
    }
    function Ll() {
      De !== null && typeof De.markComponentPassiveEffectUnmountStopped == "function" && De.markComponentPassiveEffectUnmountStopped();
    }
    function Lc(e) {
      De !== null && typeof De.markComponentLayoutEffectMountStarted == "function" && De.markComponentLayoutEffectMountStarted(e);
    }
    function Bv() {
      De !== null && typeof De.markComponentLayoutEffectMountStopped == "function" && De.markComponentLayoutEffectMountStopped();
    }
    function ms(e) {
      De !== null && typeof De.markComponentLayoutEffectUnmountStarted == "function" && De.markComponentLayoutEffectUnmountStarted(e);
    }
    function Nd() {
      De !== null && typeof De.markComponentLayoutEffectUnmountStopped == "function" && De.markComponentLayoutEffectUnmountStopped();
    }
    function hs(e, t, a) {
      De !== null && typeof De.markComponentErrored == "function" && De.markComponentErrored(e, t, a);
    }
    function Di(e, t, a) {
      De !== null && typeof De.markComponentSuspended == "function" && De.markComponentSuspended(e, t, a);
    }
    function ys(e) {
      De !== null && typeof De.markLayoutEffectsStarted == "function" && De.markLayoutEffectsStarted(e);
    }
    function gs() {
      De !== null && typeof De.markLayoutEffectsStopped == "function" && De.markLayoutEffectsStopped();
    }
    function wo(e) {
      De !== null && typeof De.markPassiveEffectsStarted == "function" && De.markPassiveEffectsStarted(e);
    }
    function Dd() {
      De !== null && typeof De.markPassiveEffectsStopped == "function" && De.markPassiveEffectsStopped();
    }
    function Ro(e) {
      De !== null && typeof De.markRenderStarted == "function" && De.markRenderStarted(e);
    }
    function $v() {
      De !== null && typeof De.markRenderYielded == "function" && De.markRenderYielded();
    }
    function Ac() {
      De !== null && typeof De.markRenderStopped == "function" && De.markRenderStopped();
    }
    function kn(e) {
      De !== null && typeof De.markRenderScheduled == "function" && De.markRenderScheduled(e);
    }
    function Uc(e, t) {
      De !== null && typeof De.markForceUpdateScheduled == "function" && De.markForceUpdateScheduled(e, t);
    }
    function Ss(e, t) {
      De !== null && typeof De.markStateUpdateScheduled == "function" && De.markStateUpdateScheduled(e, t);
    }
    var at = (
      /*                         */
      0
    ), Dt = (
      /*                 */
      1
    ), Xt = (
      /*                    */
      2
    ), fn = (
      /*               */
      8
    ), Kt = (
      /*              */
      16
    ), Wn = Math.clz32 ? Math.clz32 : Cs, fr = Math.log, Pc = Math.LN2;
    function Cs(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (fr(t) / Pc | 0) | 0;
    }
    var To = 31, ie = (
      /*                        */
      0
    ), Wt = (
      /*                          */
      0
    ), vt = (
      /*                        */
      1
    ), Al = (
      /*    */
      2
    ), si = (
      /*             */
      4
    ), Or = (
      /*            */
      8
    ), Pn = (
      /*                     */
      16
    ), el = (
      /*                */
      32
    ), Ul = (
      /*                       */
      4194240
    ), _o = (
      /*                        */
      64
    ), Fc = (
      /*                        */
      128
    ), Hc = (
      /*                        */
      256
    ), Vc = (
      /*                        */
      512
    ), Bc = (
      /*                        */
      1024
    ), $c = (
      /*                        */
      2048
    ), Ic = (
      /*                        */
      4096
    ), Yc = (
      /*                        */
      8192
    ), qc = (
      /*                        */
      16384
    ), ko = (
      /*                       */
      32768
    ), Gc = (
      /*                       */
      65536
    ), bu = (
      /*                       */
      131072
    ), Eu = (
      /*                       */
      262144
    ), Wc = (
      /*                       */
      524288
    ), xs = (
      /*                       */
      1048576
    ), Qc = (
      /*                       */
      2097152
    ), bs = (
      /*                            */
      130023424
    ), No = (
      /*                             */
      4194304
    ), Xc = (
      /*                             */
      8388608
    ), Es = (
      /*                             */
      16777216
    ), Kc = (
      /*                             */
      33554432
    ), Jc = (
      /*                             */
      67108864
    ), jd = No, ws = (
      /*          */
      134217728
    ), Od = (
      /*                          */
      268435455
    ), Rs = (
      /*               */
      268435456
    ), Do = (
      /*                        */
      536870912
    ), ua = (
      /*                   */
      1073741824
    );
    function Iv(e) {
      {
        if (e & vt)
          return "Sync";
        if (e & Al)
          return "InputContinuousHydration";
        if (e & si)
          return "InputContinuous";
        if (e & Or)
          return "DefaultHydration";
        if (e & Pn)
          return "Default";
        if (e & el)
          return "TransitionHydration";
        if (e & Ul)
          return "Transition";
        if (e & bs)
          return "Retry";
        if (e & ws)
          return "SelectiveHydration";
        if (e & Rs)
          return "IdleHydration";
        if (e & Do)
          return "Idle";
        if (e & ua)
          return "Offscreen";
      }
    }
    var vn = -1, jo = _o, Zc = No;
    function Ts(e) {
      switch (Pl(e)) {
        case vt:
          return vt;
        case Al:
          return Al;
        case si:
          return si;
        case Or:
          return Or;
        case Pn:
          return Pn;
        case el:
          return el;
        case _o:
        case Fc:
        case Hc:
        case Vc:
        case Bc:
        case $c:
        case Ic:
        case Yc:
        case qc:
        case ko:
        case Gc:
        case bu:
        case Eu:
        case Wc:
        case xs:
        case Qc:
          return e & Ul;
        case No:
        case Xc:
        case Es:
        case Kc:
        case Jc:
          return e & bs;
        case ws:
          return ws;
        case Rs:
          return Rs;
        case Do:
          return Do;
        case ua:
          return ua;
        default:
          return S("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function ef(e, t) {
      var a = e.pendingLanes;
      if (a === ie)
        return ie;
      var i = ie, o = e.suspendedLanes, s = e.pingedLanes, f = a & Od;
      if (f !== ie) {
        var p = f & ~o;
        if (p !== ie)
          i = Ts(p);
        else {
          var m = f & s;
          m !== ie && (i = Ts(m));
        }
      } else {
        var C = a & ~o;
        C !== ie ? i = Ts(C) : s !== ie && (i = Ts(s));
      }
      if (i === ie)
        return ie;
      if (t !== ie && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & o) === ie) {
        var x = Pl(i), O = Pl(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          x >= O || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          x === Pn && (O & Ul) !== ie
        )
          return t;
      }
      (i & si) !== ie && (i |= a & Pn);
      var N = e.entangledLanes;
      if (N !== ie)
        for (var V = e.entanglements, I = i & N; I > 0; ) {
          var W = Qn(I), je = 1 << W;
          i |= V[W], I &= ~je;
        }
      return i;
    }
    function ci(e, t) {
      for (var a = e.eventTimes, i = vn; t > 0; ) {
        var o = Qn(t), s = 1 << o, f = a[o];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function Md(e, t) {
      switch (e) {
        case vt:
        case Al:
        case si:
          return t + 250;
        case Or:
        case Pn:
        case el:
        case _o:
        case Fc:
        case Hc:
        case Vc:
        case Bc:
        case $c:
        case Ic:
        case Yc:
        case qc:
        case ko:
        case Gc:
        case bu:
        case Eu:
        case Wc:
        case xs:
        case Qc:
          return t + 5e3;
        case No:
        case Xc:
        case Es:
        case Kc:
        case Jc:
          return vn;
        case ws:
        case Rs:
        case Do:
        case ua:
          return vn;
        default:
          return S("Should have found matching lanes. This is a bug in React."), vn;
      }
    }
    function tf(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, o = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Qn(f), m = 1 << p, C = s[p];
        C === vn ? ((m & i) === ie || (m & o) !== ie) && (s[p] = Md(m, t)) : C <= t && (e.expiredLanes |= m), f &= ~m;
      }
    }
    function Yv(e) {
      return Ts(e.pendingLanes);
    }
    function nf(e) {
      var t = e.pendingLanes & ~ua;
      return t !== ie ? t : t & ua ? ua : ie;
    }
    function qv(e) {
      return (e & vt) !== ie;
    }
    function _s(e) {
      return (e & Od) !== ie;
    }
    function Oo(e) {
      return (e & bs) === e;
    }
    function zd(e) {
      var t = vt | si | Pn;
      return (e & t) === ie;
    }
    function Ld(e) {
      return (e & Ul) === e;
    }
    function rf(e, t) {
      var a = Al | si | Or | Pn;
      return (t & a) !== ie;
    }
    function Gv(e, t) {
      return (t & e.expiredLanes) !== ie;
    }
    function Ad(e) {
      return (e & Ul) !== ie;
    }
    function Ud() {
      var e = jo;
      return jo <<= 1, (jo & Ul) === ie && (jo = _o), e;
    }
    function Wv() {
      var e = Zc;
      return Zc <<= 1, (Zc & bs) === ie && (Zc = No), e;
    }
    function Pl(e) {
      return e & -e;
    }
    function ks(e) {
      return Pl(e);
    }
    function Qn(e) {
      return 31 - Wn(e);
    }
    function Cr(e) {
      return Qn(e);
    }
    function sa(e, t) {
      return (e & t) !== ie;
    }
    function Mo(e, t) {
      return (e & t) === t;
    }
    function Tt(e, t) {
      return e | t;
    }
    function Ns(e, t) {
      return e & ~t;
    }
    function Pd(e, t) {
      return e & t;
    }
    function Qv(e) {
      return e;
    }
    function Xv(e, t) {
      return e !== Wt && e < t ? e : t;
    }
    function Ds(e) {
      for (var t = [], a = 0; a < To; a++)
        t.push(e);
      return t;
    }
    function wu(e, t, a) {
      e.pendingLanes |= t, t !== Do && (e.suspendedLanes = ie, e.pingedLanes = ie);
      var i = e.eventTimes, o = Cr(t);
      i[o] = a;
    }
    function Kv(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var o = Qn(i), s = 1 << o;
        a[o] = vn, i &= ~s;
      }
    }
    function af(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Fd(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = ie, e.pingedLanes = ie, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, o = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Qn(f), m = 1 << p;
        i[p] = ie, o[p] = vn, s[p] = vn, f &= ~m;
      }
    }
    function lf(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, o = a; o; ) {
        var s = Qn(o), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), o &= ~f;
      }
    }
    function Hd(e, t) {
      var a = Pl(t), i;
      switch (a) {
        case si:
          i = Al;
          break;
        case Pn:
          i = Or;
          break;
        case _o:
        case Fc:
        case Hc:
        case Vc:
        case Bc:
        case $c:
        case Ic:
        case Yc:
        case qc:
        case ko:
        case Gc:
        case bu:
        case Eu:
        case Wc:
        case xs:
        case Qc:
        case No:
        case Xc:
        case Es:
        case Kc:
        case Jc:
          i = el;
          break;
        case Do:
          i = Rs;
          break;
        default:
          i = Wt;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Wt ? Wt : i;
    }
    function js(e, t, a) {
      if (oa)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var o = Cr(a), s = 1 << o, f = i[o];
          f.add(t), a &= ~s;
        }
    }
    function Jv(e, t) {
      if (oa)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var o = Cr(t), s = 1 << o, f = a[o];
          f.size > 0 && (f.forEach(function(p) {
            var m = p.alternate;
            (m === null || !i.has(m)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function Vd(e, t) {
      return null;
    }
    var Br = vt, ji = si, Ba = Pn, $a = Do, Os = Wt;
    function Ia() {
      return Os;
    }
    function Xn(e) {
      Os = e;
    }
    function Zv(e, t) {
      var a = Os;
      try {
        return Os = e, t();
      } finally {
        Os = a;
      }
    }
    function em(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function Ms(e, t) {
      return e > t ? e : t;
    }
    function dr(e, t) {
      return e !== 0 && e < t;
    }
    function tm(e) {
      var t = Pl(e);
      return dr(Br, t) ? dr(ji, t) ? _s(t) ? Ba : $a : ji : Br;
    }
    function of(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var zs;
    function Mr(e) {
      zs = e;
    }
    function my(e) {
      zs(e);
    }
    var Fe;
    function Ru(e) {
      Fe = e;
    }
    var uf;
    function nm(e) {
      uf = e;
    }
    var rm;
    function Ls(e) {
      rm = e;
    }
    var As;
    function Bd(e) {
      As = e;
    }
    var sf = !1, Us = [], tl = null, Oi = null, Mi = null, Fn = /* @__PURE__ */ new Map(), $r = /* @__PURE__ */ new Map(), Ir = [], am = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function im(e) {
      return am.indexOf(e) > -1;
    }
    function fi(e, t, a, i, o) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: o,
        targetContainers: [i]
      };
    }
    function $d(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          tl = null;
          break;
        case "dragenter":
        case "dragleave":
          Oi = null;
          break;
        case "mouseover":
        case "mouseout":
          Mi = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          Fn.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          $r.delete(i);
          break;
        }
      }
    }
    function ca(e, t, a, i, o, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = fi(t, a, i, o, s);
        if (t !== null) {
          var p = zu(t);
          p !== null && Fe(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var m = e.targetContainers;
      return o !== null && m.indexOf(o) === -1 && m.push(o), e;
    }
    function hy(e, t, a, i, o) {
      switch (t) {
        case "focusin": {
          var s = o;
          return tl = ca(tl, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = o;
          return Oi = ca(Oi, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = o;
          return Mi = ca(Mi, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var m = o, C = m.pointerId;
          return Fn.set(C, ca(Fn.get(C) || null, e, t, a, i, m)), !0;
        }
        case "gotpointercapture": {
          var x = o, O = x.pointerId;
          return $r.set(O, ca($r.get(O) || null, e, t, a, i, x)), !0;
        }
      }
      return !1;
    }
    function Id(e) {
      var t = Qs(e.target);
      if (t !== null) {
        var a = xa(t);
        if (a !== null) {
          var i = a.tag;
          if (i === re) {
            var o = ki(a);
            if (o !== null) {
              e.blockedOn = o, As(e.priority, function() {
                uf(a);
              });
              return;
            }
          } else if (i === A) {
            var s = a.stateNode;
            if (of(s)) {
              e.blockedOn = Ni(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function lm(e) {
      for (var t = rm(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Ir.length && dr(t, Ir[i].priority); i++)
        ;
      Ir.splice(i, 0, a), i === 0 && Id(a);
    }
    function Ps(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = _u(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var o = e.nativeEvent, s = new o.constructor(o.type, o);
          cy(s), o.target.dispatchEvent(s), fy();
        } else {
          var f = zu(i);
          return f !== null && Fe(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Yd(e, t, a) {
      Ps(e) && a.delete(t);
    }
    function yy() {
      sf = !1, tl !== null && Ps(tl) && (tl = null), Oi !== null && Ps(Oi) && (Oi = null), Mi !== null && Ps(Mi) && (Mi = null), Fn.forEach(Yd), $r.forEach(Yd);
    }
    function Fl(e, t) {
      e.blockedOn === t && (e.blockedOn = null, sf || (sf = !0, w.unstable_scheduleCallback(w.unstable_NormalPriority, yy)));
    }
    function zo(e) {
      if (Us.length > 0) {
        Fl(Us[0], e);
        for (var t = 1; t < Us.length; t++) {
          var a = Us[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      tl !== null && Fl(tl, e), Oi !== null && Fl(Oi, e), Mi !== null && Fl(Mi, e);
      var i = function(p) {
        return Fl(p, e);
      };
      Fn.forEach(i), $r.forEach(i);
      for (var o = 0; o < Ir.length; o++) {
        var s = Ir[o];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Ir.length > 0; ) {
        var f = Ir[0];
        if (f.blockedOn !== null)
          break;
        Id(f), f.blockedOn === null && Ir.shift();
      }
    }
    var xr = R.ReactCurrentBatchConfig, Bt = !0;
    function ar(e) {
      Bt = !!e;
    }
    function Kn() {
      return Bt;
    }
    function br(e, t, a) {
      var i = cf(t), o;
      switch (i) {
        case Br:
          o = Ra;
          break;
        case ji:
          o = Tu;
          break;
        case Ba:
        default:
          o = Hn;
          break;
      }
      return o.bind(null, t, a, e);
    }
    function Ra(e, t, a, i) {
      var o = Ia(), s = xr.transition;
      xr.transition = null;
      try {
        Xn(Br), Hn(e, t, a, i);
      } finally {
        Xn(o), xr.transition = s;
      }
    }
    function Tu(e, t, a, i) {
      var o = Ia(), s = xr.transition;
      xr.transition = null;
      try {
        Xn(ji), Hn(e, t, a, i);
      } finally {
        Xn(o), xr.transition = s;
      }
    }
    function Hn(e, t, a, i) {
      Bt && Fs(e, t, a, i);
    }
    function Fs(e, t, a, i) {
      var o = _u(e, t, a, i);
      if (o === null) {
        zy(e, t, i, zi, a), $d(e, i);
        return;
      }
      if (hy(o, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if ($d(e, i), t & Aa && im(e)) {
        for (; o !== null; ) {
          var s = zu(o);
          s !== null && my(s);
          var f = _u(e, t, a, i);
          if (f === null && zy(e, t, i, zi, a), f === o)
            break;
          o = f;
        }
        o !== null && i.stopPropagation();
        return;
      }
      zy(e, t, i, null, a);
    }
    var zi = null;
    function _u(e, t, a, i) {
      zi = null;
      var o = yd(i), s = Qs(o);
      if (s !== null) {
        var f = xa(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === re) {
            var m = ki(f);
            if (m !== null)
              return m;
            s = null;
          } else if (p === A) {
            var C = f.stateNode;
            if (of(C))
              return Ni(f);
            s = null;
          } else f !== s && (s = null);
        }
      }
      return zi = s, null;
    }
    function cf(e) {
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
          return Br;
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
          return ji;
        case "message": {
          var t = Mc();
          switch (t) {
            case vs:
              return Br;
            case zl:
              return ji;
            case Ji:
            case vy:
              return Ba;
            case xo:
              return $a;
            default:
              return Ba;
          }
        }
        default:
          return Ba;
      }
    }
    function Hs(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function fa(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function qd(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function ku(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var Ta = null, Nu = null, Lo = null;
    function Hl(e) {
      return Ta = e, Nu = Vs(), !0;
    }
    function ff() {
      Ta = null, Nu = null, Lo = null;
    }
    function nl() {
      if (Lo)
        return Lo;
      var e, t = Nu, a = t.length, i, o = Vs(), s = o.length;
      for (e = 0; e < a && t[e] === o[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === o[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Lo = o.slice(e, p), Lo;
    }
    function Vs() {
      return "value" in Ta ? Ta.value : Ta.textContent;
    }
    function Vl(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Du() {
      return !0;
    }
    function Bs() {
      return !1;
    }
    function zr(e) {
      function t(a, i, o, s, f) {
        this._reactName = a, this._targetInst = o, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var m = e[p];
            m ? this[p] = m(s) : this[p] = s[p];
          }
        var C = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return C ? this.isDefaultPrevented = Du : this.isDefaultPrevented = Bs, this.isPropagationStopped = Bs, this;
      }
      return _t(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Du);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Du);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: Du
      }), t;
    }
    var Jn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Li = zr(Jn), Yr = _t({}, Jn, {
      view: 0,
      detail: 0
    }), da = zr(Yr), df, $s, Ao;
    function gy(e) {
      e !== Ao && (Ao && e.type === "mousemove" ? (df = e.screenX - Ao.screenX, $s = e.screenY - Ao.screenY) : (df = 0, $s = 0), Ao = e);
    }
    var di = _t({}, Yr, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: bn,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (gy(e), df);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : $s;
      }
    }), Gd = zr(di), Wd = _t({}, di, {
      dataTransfer: 0
    }), Uo = zr(Wd), Qd = _t({}, Yr, {
      relatedTarget: 0
    }), rl = zr(Qd), om = _t({}, Jn, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), um = zr(om), Xd = _t({}, Jn, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), pf = zr(Xd), Sy = _t({}, Jn, {
      data: 0
    }), sm = zr(Sy), cm = sm, fm = {
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
    }, Po = {
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
    };
    function Cy(e) {
      if (e.key) {
        var t = fm[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Vl(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Po[e.keyCode] || "Unidentified" : "";
    }
    var ju = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function dm(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = ju[e];
      return i ? !!a[i] : !1;
    }
    function bn(e) {
      return dm;
    }
    var xy = _t({}, Yr, {
      key: Cy,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: bn,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Vl(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Vl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), pm = zr(xy), by = _t({}, di, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), vm = zr(by), mm = _t({}, Yr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: bn
    }), hm = zr(mm), Ey = _t({}, Jn, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Ya = zr(Ey), Kd = _t({}, di, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), wy = zr(Kd), Bl = [9, 13, 27, 32], Is = 229, al = on && "CompositionEvent" in window, $l = null;
    on && "documentMode" in document && ($l = document.documentMode);
    var Jd = on && "TextEvent" in window && !$l, vf = on && (!al || $l && $l > 8 && $l <= 11), ym = 32, mf = String.fromCharCode(ym);
    function Ry() {
      st("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), st("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), st("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), st("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Zd = !1;
    function gm(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function hf(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function yf(e, t) {
      return e === "keydown" && t.keyCode === Is;
    }
    function ep(e, t) {
      switch (e) {
        case "keyup":
          return Bl.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Is;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function gf(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function Sm(e) {
      return e.locale === "ko";
    }
    var Fo = !1;
    function tp(e, t, a, i, o) {
      var s, f;
      if (al ? s = hf(t) : Fo ? ep(t, i) && (s = "onCompositionEnd") : yf(t, i) && (s = "onCompositionStart"), !s)
        return null;
      vf && !Sm(i) && (!Fo && s === "onCompositionStart" ? Fo = Hl(o) : s === "onCompositionEnd" && Fo && (f = nl()));
      var p = Tm(a, s);
      if (p.length > 0) {
        var m = new sm(s, t, null, i, o);
        if (e.push({
          event: m,
          listeners: p
        }), f)
          m.data = f;
        else {
          var C = gf(i);
          C !== null && (m.data = C);
        }
      }
    }
    function Sf(e, t) {
      switch (e) {
        case "compositionend":
          return gf(t);
        case "keypress":
          var a = t.which;
          return a !== ym ? null : (Zd = !0, mf);
        case "textInput":
          var i = t.data;
          return i === mf && Zd ? null : i;
        default:
          return null;
      }
    }
    function np(e, t) {
      if (Fo) {
        if (e === "compositionend" || !al && ep(e, t)) {
          var a = nl();
          return ff(), Fo = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!gm(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return vf && !Sm(t) ? null : t.data;
        default:
          return null;
      }
    }
    function Cf(e, t, a, i, o) {
      var s;
      if (Jd ? s = Sf(t, i) : s = np(t, i), !s)
        return null;
      var f = Tm(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new cm("onBeforeInput", "beforeinput", null, i, o);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function Cm(e, t, a, i, o, s, f) {
      tp(e, t, a, i, o), Cf(e, t, a, i, o);
    }
    var Ty = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function Ys(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Ty[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function _y(e) {
      if (!on)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function qs() {
      st("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function xm(e, t, a, i) {
      vu(i);
      var o = Tm(t, "onChange");
      if (o.length > 0) {
        var s = new Li("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: o
        });
      }
    }
    var Il = null, n = null;
    function r(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function l(e) {
      var t = [];
      xm(t, n, e, yd(e)), Mv(u, t);
    }
    function u(e) {
      FC(e, 0);
    }
    function c(e) {
      var t = Tf(e);
      if (bi(t))
        return e;
    }
    function d(e, t) {
      if (e === "change")
        return t;
    }
    var y = !1;
    on && (y = _y("input") && (!document.documentMode || document.documentMode > 9));
    function b(e, t) {
      Il = e, n = t, Il.attachEvent("onpropertychange", $);
    }
    function k() {
      Il && (Il.detachEvent("onpropertychange", $), Il = null, n = null);
    }
    function $(e) {
      e.propertyName === "value" && c(n) && l(e);
    }
    function ue(e, t, a) {
      e === "focusin" ? (k(), b(t, a)) : e === "focusout" && k();
    }
    function me(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return c(n);
    }
    function le(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Ae(e, t) {
      if (e === "click")
        return c(t);
    }
    function Ye(e, t) {
      if (e === "input" || e === "change")
        return c(t);
    }
    function Qe(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || ot(e, "number", e.value);
    }
    function Vn(e, t, a, i, o, s, f) {
      var p = a ? Tf(a) : window, m, C;
      if (r(p) ? m = d : Ys(p) ? y ? m = Ye : (m = me, C = ue) : le(p) && (m = Ae), m) {
        var x = m(t, a);
        if (x) {
          xm(e, x, i, o);
          return;
        }
      }
      C && C(t, p, a), t === "focusout" && Qe(p);
    }
    function L() {
      Ht("onMouseEnter", ["mouseout", "mouseover"]), Ht("onMouseLeave", ["mouseout", "mouseover"]), Ht("onPointerEnter", ["pointerout", "pointerover"]), Ht("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function j(e, t, a, i, o, s, f) {
      var p = t === "mouseover" || t === "pointerover", m = t === "mouseout" || t === "pointerout";
      if (p && !us(i)) {
        var C = i.relatedTarget || i.fromElement;
        if (C && (Qs(C) || hp(C)))
          return;
      }
      if (!(!m && !p)) {
        var x;
        if (o.window === o)
          x = o;
        else {
          var O = o.ownerDocument;
          O ? x = O.defaultView || O.parentWindow : x = window;
        }
        var N, V;
        if (m) {
          var I = i.relatedTarget || i.toElement;
          if (N = a, V = I ? Qs(I) : null, V !== null) {
            var W = xa(V);
            (V !== W || V.tag !== fe && V.tag !== He) && (V = null);
          }
        } else
          N = null, V = a;
        if (N !== V) {
          var je = Gd, ut = "onMouseLeave", Ze = "onMouseEnter", It = "mouse";
          (t === "pointerout" || t === "pointerover") && (je = vm, ut = "onPointerLeave", Ze = "onPointerEnter", It = "pointer");
          var Ut = N == null ? x : Tf(N), U = V == null ? x : Tf(V), Q = new je(ut, It + "leave", N, i, o);
          Q.target = Ut, Q.relatedTarget = U;
          var P = null, he = Qs(o);
          if (he === a) {
            var Pe = new je(Ze, It + "enter", V, i, o);
            Pe.target = U, Pe.relatedTarget = Ut, P = Pe;
          }
          QE(e, Q, P, N, V);
        }
      }
    }
    function H(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var se = typeof Object.is == "function" ? Object.is : H;
    function qe(e, t) {
      if (se(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var o = 0; o < a.length; o++) {
        var s = a[o];
        if (!mr.call(t, s) || !se(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function ct(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function dt(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function yt(e, t) {
      for (var a = ct(e), i = 0, o = 0; a; ) {
        if (a.nodeType === Gi) {
          if (o = i + a.textContent.length, i <= t && o >= t)
            return {
              node: a,
              offset: t - i
            };
          i = o;
        }
        a = ct(dt(a));
      }
    }
    function pr(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var o = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        o.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return Jt(e, o, s, f, p);
    }
    function Jt(e, t, a, i, o) {
      var s = 0, f = -1, p = -1, m = 0, C = 0, x = e, O = null;
      e: for (; ; ) {
        for (var N = null; x === t && (a === 0 || x.nodeType === Gi) && (f = s + a), x === i && (o === 0 || x.nodeType === Gi) && (p = s + o), x.nodeType === Gi && (s += x.nodeValue.length), (N = x.firstChild) !== null; )
          O = x, x = N;
        for (; ; ) {
          if (x === e)
            break e;
          if (O === t && ++m === a && (f = s), O === i && ++C === o && (p = s), (N = x.nextSibling) !== null)
            break;
          x = O, O = x.parentNode;
        }
        x = N;
      }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function Yl(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var o = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!o.extend && f > p) {
          var m = p;
          p = f, f = m;
        }
        var C = yt(e, f), x = yt(e, p);
        if (C && x) {
          if (o.rangeCount === 1 && o.anchorNode === C.node && o.anchorOffset === C.offset && o.focusNode === x.node && o.focusOffset === x.offset)
            return;
          var O = a.createRange();
          O.setStart(C.node, C.offset), o.removeAllRanges(), f > p ? (o.addRange(O), o.extend(x.node, x.offset)) : (O.setEnd(x.node, x.offset), o.addRange(O));
        }
      }
    }
    function bm(e) {
      return e && e.nodeType === Gi;
    }
    function kC(e, t) {
      return !e || !t ? !1 : e === t ? !0 : bm(e) ? !1 : bm(t) ? kC(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function jE(e) {
      return e && e.ownerDocument && kC(e.ownerDocument.documentElement, e);
    }
    function OE(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function NC() {
      for (var e = window, t = La(); t instanceof e.HTMLIFrameElement; ) {
        if (OE(t))
          e = t.contentWindow;
        else
          return t;
        t = La(e.document);
      }
      return t;
    }
    function ky(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function ME() {
      var e = NC();
      return {
        focusedElem: e,
        selectionRange: ky(e) ? LE(e) : null
      };
    }
    function zE(e) {
      var t = NC(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && jE(a)) {
        i !== null && ky(a) && AE(a, i);
        for (var o = [], s = a; s = s.parentNode; )
          s.nodeType === na && o.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < o.length; f++) {
          var p = o[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function LE(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = pr(e), t || {
        start: 0,
        end: 0
      };
    }
    function AE(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : Yl(e, t);
    }
    var UE = on && "documentMode" in document && document.documentMode <= 11;
    function PE() {
      st("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var xf = null, Ny = null, rp = null, Dy = !1;
    function FE(e) {
      if ("selectionStart" in e && ky(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function HE(e) {
      return e.window === e ? e.document : e.nodeType === Wi ? e : e.ownerDocument;
    }
    function DC(e, t, a) {
      var i = HE(a);
      if (!(Dy || xf == null || xf !== La(i))) {
        var o = FE(xf);
        if (!rp || !qe(rp, o)) {
          rp = o;
          var s = Tm(Ny, "onSelect");
          if (s.length > 0) {
            var f = new Li("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = xf;
          }
        }
      }
    }
    function VE(e, t, a, i, o, s, f) {
      var p = a ? Tf(a) : window;
      switch (t) {
        case "focusin":
          (Ys(p) || p.contentEditable === "true") && (xf = p, Ny = a, rp = null);
          break;
        case "focusout":
          xf = null, Ny = null, rp = null;
          break;
        case "mousedown":
          Dy = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Dy = !1, DC(e, i, o);
          break;
        case "selectionchange":
          if (UE)
            break;
        case "keydown":
        case "keyup":
          DC(e, i, o);
      }
    }
    function Em(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var bf = {
      animationend: Em("Animation", "AnimationEnd"),
      animationiteration: Em("Animation", "AnimationIteration"),
      animationstart: Em("Animation", "AnimationStart"),
      transitionend: Em("Transition", "TransitionEnd")
    }, jy = {}, jC = {};
    on && (jC = document.createElement("div").style, "AnimationEvent" in window || (delete bf.animationend.animation, delete bf.animationiteration.animation, delete bf.animationstart.animation), "TransitionEvent" in window || delete bf.transitionend.transition);
    function wm(e) {
      if (jy[e])
        return jy[e];
      if (!bf[e])
        return e;
      var t = bf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in jC)
          return jy[e] = t[a];
      return e;
    }
    var OC = wm("animationend"), MC = wm("animationiteration"), zC = wm("animationstart"), LC = wm("transitionend"), AC = /* @__PURE__ */ new Map(), UC = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Ou(e, t) {
      AC.set(e, t), st(t, [e]);
    }
    function BE() {
      for (var e = 0; e < UC.length; e++) {
        var t = UC[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Ou(a, "on" + i);
      }
      Ou(OC, "onAnimationEnd"), Ou(MC, "onAnimationIteration"), Ou(zC, "onAnimationStart"), Ou("dblclick", "onDoubleClick"), Ou("focusin", "onFocus"), Ou("focusout", "onBlur"), Ou(LC, "onTransitionEnd");
    }
    function $E(e, t, a, i, o, s, f) {
      var p = AC.get(t);
      if (p !== void 0) {
        var m = Li, C = t;
        switch (t) {
          case "keypress":
            if (Vl(i) === 0)
              return;
          case "keydown":
          case "keyup":
            m = pm;
            break;
          case "focusin":
            C = "focus", m = rl;
            break;
          case "focusout":
            C = "blur", m = rl;
            break;
          case "beforeblur":
          case "afterblur":
            m = rl;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            m = Gd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            m = Uo;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            m = hm;
            break;
          case OC:
          case MC:
          case zC:
            m = um;
            break;
          case LC:
            m = Ya;
            break;
          case "scroll":
            m = da;
            break;
          case "wheel":
            m = wy;
            break;
          case "copy":
          case "cut":
          case "paste":
            m = pf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            m = vm;
            break;
        }
        var x = (s & Aa) !== 0;
        {
          var O = !x && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", N = GE(a, p, i.type, x, O);
          if (N.length > 0) {
            var V = new m(p, C, null, i, o);
            e.push({
              event: V,
              listeners: N
            });
          }
        }
      }
    }
    BE(), L(), qs(), PE(), Ry();
    function IE(e, t, a, i, o, s, f) {
      $E(e, t, a, i, o, s);
      var p = (s & hd) === 0;
      p && (j(e, t, a, i, o), Vn(e, t, a, i, o), VE(e, t, a, i, o), Cm(e, t, a, i, o));
    }
    var ap = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Oy = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(ap));
    function PC(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Ri(i, t, void 0, e), e.currentTarget = null;
    }
    function YE(e, t, a) {
      var i;
      if (a)
        for (var o = t.length - 1; o >= 0; o--) {
          var s = t[o], f = s.instance, p = s.currentTarget, m = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          PC(e, m, p), i = f;
        }
      else
        for (var C = 0; C < t.length; C++) {
          var x = t[C], O = x.instance, N = x.currentTarget, V = x.listener;
          if (O !== i && e.isPropagationStopped())
            return;
          PC(e, V, N), i = O;
        }
    }
    function FC(e, t) {
      for (var a = (t & Aa) !== 0, i = 0; i < e.length; i++) {
        var o = e[i], s = o.event, f = o.listeners;
        YE(s, f, a);
      }
      fs();
    }
    function qE(e, t, a, i, o) {
      var s = yd(a), f = [];
      IE(f, e, i, a, s, t), FC(f, t);
    }
    function Nn(e, t) {
      Oy.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = b1(t), o = XE(e);
      i.has(o) || (HC(t, e, Cc, a), i.add(o));
    }
    function My(e, t, a) {
      Oy.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= Aa), HC(a, e, i, t);
    }
    var Rm = "_reactListening" + Math.random().toString(36).slice(2);
    function ip(e) {
      if (!e[Rm]) {
        e[Rm] = !0, oe.forEach(function(a) {
          a !== "selectionchange" && (Oy.has(a) || My(a, !1, e), My(a, !0, e));
        });
        var t = e.nodeType === Wi ? e : e.ownerDocument;
        t !== null && (t[Rm] || (t[Rm] = !0, My("selectionchange", !1, t)));
      }
    }
    function HC(e, t, a, i, o) {
      var s = br(e, t, a), f = void 0;
      cs && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? qd(e, t, s, f) : fa(e, t, s) : f !== void 0 ? ku(e, t, s, f) : Hs(e, t, s);
    }
    function VC(e, t) {
      return e === t || e.nodeType === Yn && e.parentNode === t;
    }
    function zy(e, t, a, i, o) {
      var s = i;
      if (!(t & md) && !(t & Cc)) {
        var f = o;
        if (i !== null) {
          var p = i;
          e: for (; ; ) {
            if (p === null)
              return;
            var m = p.tag;
            if (m === A || m === ve) {
              var C = p.stateNode.containerInfo;
              if (VC(C, f))
                break;
              if (m === ve)
                for (var x = p.return; x !== null; ) {
                  var O = x.tag;
                  if (O === A || O === ve) {
                    var N = x.stateNode.containerInfo;
                    if (VC(N, f))
                      return;
                  }
                  x = x.return;
                }
              for (; C !== null; ) {
                var V = Qs(C);
                if (V === null)
                  return;
                var I = V.tag;
                if (I === fe || I === He) {
                  p = s = V;
                  continue e;
                }
                C = C.parentNode;
              }
            }
            p = p.return;
          }
        }
      }
      Mv(function() {
        return qE(e, t, a, s);
      });
    }
    function lp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function GE(e, t, a, i, o, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, m = [], C = e, x = null; C !== null; ) {
        var O = C, N = O.stateNode, V = O.tag;
        if (V === fe && N !== null && (x = N, p !== null)) {
          var I = kl(C, p);
          I != null && m.push(lp(C, I, x));
        }
        if (o)
          break;
        C = C.return;
      }
      return m;
    }
    function Tm(e, t) {
      for (var a = t + "Capture", i = [], o = e; o !== null; ) {
        var s = o, f = s.stateNode, p = s.tag;
        if (p === fe && f !== null) {
          var m = f, C = kl(o, a);
          C != null && i.unshift(lp(o, C, m));
          var x = kl(o, t);
          x != null && i.push(lp(o, x, m));
        }
        o = o.return;
      }
      return i;
    }
    function Ef(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== fe);
      return e || null;
    }
    function WE(e, t) {
      for (var a = e, i = t, o = 0, s = a; s; s = Ef(s))
        o++;
      for (var f = 0, p = i; p; p = Ef(p))
        f++;
      for (; o - f > 0; )
        a = Ef(a), o--;
      for (; f - o > 0; )
        i = Ef(i), f--;
      for (var m = o; m--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Ef(a), i = Ef(i);
      }
      return null;
    }
    function BC(e, t, a, i, o) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var m = p, C = m.alternate, x = m.stateNode, O = m.tag;
        if (C !== null && C === i)
          break;
        if (O === fe && x !== null) {
          var N = x;
          if (o) {
            var V = kl(p, s);
            V != null && f.unshift(lp(p, V, N));
          } else if (!o) {
            var I = kl(p, s);
            I != null && f.push(lp(p, I, N));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function QE(e, t, a, i, o) {
      var s = i && o ? WE(i, o) : null;
      i !== null && BC(e, t, i, s, !1), o !== null && a !== null && BC(e, a, o, s, !0);
    }
    function XE(e, t) {
      return e + "__bubble";
    }
    var qa = !1, op = "dangerouslySetInnerHTML", _m = "suppressContentEditableWarning", Mu = "suppressHydrationWarning", $C = "autoFocus", Gs = "children", Ws = "style", km = "__html", Ly, Nm, up, IC, Dm, YC, qC;
    Ly = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Nm = function(e, t) {
      dd(e, t), gc(e, t), Dv(e, t, {
        registrationNameDependencies: Se,
        possibleRegistrationNames: pt
      });
    }, YC = on && !document.documentMode, up = function(e, t, a) {
      if (!qa) {
        var i = jm(a), o = jm(t);
        o !== i && (qa = !0, S("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(o), JSON.stringify(i)));
      }
    }, IC = function(e) {
      if (!qa) {
        qa = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), S("Extra attributes from the server: %s", t);
      }
    }, Dm = function(e, t) {
      t === !1 ? S("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : S("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, qC = function(e, t) {
      var a = e.namespaceURI === qi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var KE = /\r\n?/g, JE = /\u0000|\uFFFD/g;
    function jm(e) {
      $n(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(KE, `
`).replace(JE, "");
    }
    function Om(e, t, a, i) {
      var o = jm(t), s = jm(e);
      if (s !== o && (i && (qa || (qa = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, o))), a && ke))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function GC(e) {
      return e.nodeType === Wi ? e : e.ownerDocument;
    }
    function ZE() {
    }
    function Mm(e) {
      e.onclick = ZE;
    }
    function ew(e, t, a, i, o) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Ws)
            f && Object.freeze(f), wv(t, f);
          else if (s === op) {
            var p = f ? f[km] : void 0;
            p != null && dv(t, p);
          } else if (s === Gs)
            if (typeof f == "string") {
              var m = e !== "textarea" || f !== "";
              m && cu(t, f);
            } else typeof f == "number" && cu(t, "" + f);
          else s === _m || s === Mu || s === $C || (Se.hasOwnProperty(s) ? f != null && (typeof f != "function" && Dm(s, f), s === "onScroll" && Nn("scroll", t)) : f != null && Ur(t, s, f, o));
        }
    }
    function tw(e, t, a, i) {
      for (var o = 0; o < t.length; o += 2) {
        var s = t[o], f = t[o + 1];
        s === Ws ? wv(e, f) : s === op ? dv(e, f) : s === Gs ? cu(e, f) : Ur(e, s, f, i);
      }
    }
    function nw(e, t, a, i) {
      var o, s = GC(a), f, p = i;
      if (p === qi && (p = id(e)), p === qi) {
        if (o = Tl(e, t), !o && e !== e.toLowerCase() && S("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var m = s.createElement("div");
          m.innerHTML = "<script><\/script>";
          var C = m.firstChild;
          f = m.removeChild(C);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var x = f;
          t.multiple ? x.multiple = !0 : t.size && (x.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === qi && !o && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !mr.call(Ly, e) && (Ly[e] = !0, S("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function rw(e, t) {
      return GC(t).createTextNode(e);
    }
    function aw(e, t, a, i) {
      var o = Tl(t, a);
      Nm(t, a);
      var s;
      switch (t) {
        case "dialog":
          Nn("cancel", e), Nn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          Nn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < ap.length; f++)
            Nn(ap[f], e);
          s = a;
          break;
        case "source":
          Nn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          Nn("error", e), Nn("load", e), s = a;
          break;
        case "details":
          Nn("toggle", e), s = a;
          break;
        case "input":
          li(e, a), s = su(e, a), Nn("invalid", e);
          break;
        case "option":
          qt(e, a), s = a;
          break;
        case "select":
          po(e, a), s = ts(e, a), Nn("invalid", e);
          break;
        case "textarea":
          nd(e, a), s = td(e, a), Nn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (hc(t, s), ew(t, e, i, s, o), t) {
        case "input":
          ii(e), B(e, a, !1);
          break;
        case "textarea":
          ii(e), cv(e);
          break;
        case "option":
          hn(e, a);
          break;
        case "select":
          Zf(e, a);
          break;
        default:
          typeof s.onClick == "function" && Mm(e);
          break;
      }
    }
    function iw(e, t, a, i, o) {
      Nm(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = su(e, a), p = su(e, i), s = [];
          break;
        case "select":
          f = ts(e, a), p = ts(e, i), s = [];
          break;
        case "textarea":
          f = td(e, a), p = td(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && Mm(e);
          break;
      }
      hc(t, p);
      var m, C, x = null;
      for (m in f)
        if (!(p.hasOwnProperty(m) || !f.hasOwnProperty(m) || f[m] == null))
          if (m === Ws) {
            var O = f[m];
            for (C in O)
              O.hasOwnProperty(C) && (x || (x = {}), x[C] = "");
          } else m === op || m === Gs || m === _m || m === Mu || m === $C || (Se.hasOwnProperty(m) ? s || (s = []) : (s = s || []).push(m, null));
      for (m in p) {
        var N = p[m], V = f != null ? f[m] : void 0;
        if (!(!p.hasOwnProperty(m) || N === V || N == null && V == null))
          if (m === Ws)
            if (N && Object.freeze(N), V) {
              for (C in V)
                V.hasOwnProperty(C) && (!N || !N.hasOwnProperty(C)) && (x || (x = {}), x[C] = "");
              for (C in N)
                N.hasOwnProperty(C) && V[C] !== N[C] && (x || (x = {}), x[C] = N[C]);
            } else
              x || (s || (s = []), s.push(m, x)), x = N;
          else if (m === op) {
            var I = N ? N[km] : void 0, W = V ? V[km] : void 0;
            I != null && W !== I && (s = s || []).push(m, I);
          } else m === Gs ? (typeof N == "string" || typeof N == "number") && (s = s || []).push(m, "" + N) : m === _m || m === Mu || (Se.hasOwnProperty(m) ? (N != null && (typeof N != "function" && Dm(m, N), m === "onScroll" && Nn("scroll", e)), !s && V !== N && (s = [])) : (s = s || []).push(m, N));
      }
      return x && (uy(x, p[Ws]), (s = s || []).push(Ws, x)), s;
    }
    function lw(e, t, a, i, o) {
      a === "input" && o.type === "radio" && o.name != null && h(e, o);
      var s = Tl(a, i), f = Tl(a, o);
      switch (tw(e, t, s, f), a) {
        case "input":
          E(e, o);
          break;
        case "textarea":
          sv(e, o);
          break;
        case "select":
          pc(e, o);
          break;
      }
    }
    function ow(e) {
      {
        var t = e.toLowerCase();
        return ls.hasOwnProperty(t) && ls[t] || null;
      }
    }
    function uw(e, t, a, i, o, s, f) {
      var p, m;
      switch (p = Tl(t, a), Nm(t, a), t) {
        case "dialog":
          Nn("cancel", e), Nn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Nn("load", e);
          break;
        case "video":
        case "audio":
          for (var C = 0; C < ap.length; C++)
            Nn(ap[C], e);
          break;
        case "source":
          Nn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Nn("error", e), Nn("load", e);
          break;
        case "details":
          Nn("toggle", e);
          break;
        case "input":
          li(e, a), Nn("invalid", e);
          break;
        case "option":
          qt(e, a);
          break;
        case "select":
          po(e, a), Nn("invalid", e);
          break;
        case "textarea":
          nd(e, a), Nn("invalid", e);
          break;
      }
      hc(t, a);
      {
        m = /* @__PURE__ */ new Set();
        for (var x = e.attributes, O = 0; O < x.length; O++) {
          var N = x[O].name.toLowerCase();
          switch (N) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              m.add(x[O].name);
          }
        }
      }
      var V = null;
      for (var I in a)
        if (a.hasOwnProperty(I)) {
          var W = a[I];
          if (I === Gs)
            typeof W == "string" ? e.textContent !== W && (a[Mu] !== !0 && Om(e.textContent, W, s, f), V = [Gs, W]) : typeof W == "number" && e.textContent !== "" + W && (a[Mu] !== !0 && Om(e.textContent, W, s, f), V = [Gs, "" + W]);
          else if (Se.hasOwnProperty(I))
            W != null && (typeof W != "function" && Dm(I, W), I === "onScroll" && Nn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var je = void 0, ut = jt(I);
            if (a[Mu] !== !0) {
              if (!(I === _m || I === Mu || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              I === "value" || I === "checked" || I === "selected")) {
                if (I === op) {
                  var Ze = e.innerHTML, It = W ? W[km] : void 0;
                  if (It != null) {
                    var Ut = qC(e, It);
                    Ut !== Ze && up(I, Ze, Ut);
                  }
                } else if (I === Ws) {
                  if (m.delete(I), YC) {
                    var U = ly(W);
                    je = e.getAttribute("style"), U !== je && up(I, je, U);
                  }
                } else if (p && !D)
                  m.delete(I.toLowerCase()), je = io(e, I, W), W !== je && up(I, je, W);
                else if (!Ee(I, ut, p) && !Pt(I, W, ut, p)) {
                  var Q = !1;
                  if (ut !== null)
                    m.delete(ut.attributeName), je = yl(e, I, W, ut);
                  else {
                    var P = i;
                    if (P === qi && (P = id(t)), P === qi)
                      m.delete(I.toLowerCase());
                    else {
                      var he = ow(I);
                      he !== null && he !== I && (Q = !0, m.delete(he)), m.delete(I);
                    }
                    je = io(e, I, W);
                  }
                  var Pe = D;
                  !Pe && W !== je && !Q && up(I, je, W);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      m.size > 0 && a[Mu] !== !0 && IC(m), t) {
        case "input":
          ii(e), B(e, a, !0);
          break;
        case "textarea":
          ii(e), cv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && Mm(e);
          break;
      }
      return V;
    }
    function sw(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function Ay(e, t) {
      {
        if (qa)
          return;
        qa = !0, S("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Uy(e, t) {
      {
        if (qa)
          return;
        qa = !0, S('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Py(e, t, a) {
      {
        if (qa)
          return;
        qa = !0, S("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Fy(e, t) {
      {
        if (t === "" || qa)
          return;
        qa = !0, S('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function cw(e, t, a) {
      switch (t) {
        case "input":
          q(e, a);
          return;
        case "textarea":
          ny(e, a);
          return;
        case "select":
          ed(e, a);
          return;
      }
    }
    var sp = function() {
    }, cp = function() {
    };
    {
      var fw = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], WC = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], dw = WC.concat(["button"]), pw = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], QC = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      cp = function(e, t) {
        var a = _t({}, e || QC), i = {
          tag: t
        };
        return WC.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), dw.indexOf(t) !== -1 && (a.pTagInButtonScope = null), fw.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var vw = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return pw.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, mw = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, XC = {};
      sp = function(e, t, a) {
        a = a || QC;
        var i = a.current, o = i && i.tag;
        t != null && (e != null && S("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = vw(e, o) ? null : i, f = s ? null : mw(e, a), p = s || f;
        if (p) {
          var m = p.tag, C = !!s + "|" + e + "|" + m;
          if (!XC[C]) {
            XC[C] = !0;
            var x = e, O = "";
            if (e === "#text" ? /\S/.test(t) ? x = "Text nodes" : (x = "Whitespace text nodes", O = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : x = "<" + e + ">", s) {
              var N = "";
              m === "table" && e === "tr" && (N += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), S("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", x, m, O, N);
            } else
              S("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", x, m);
          }
        }
      };
    }
    var zm = "suppressHydrationWarning", Lm = "$", Am = "/$", fp = "$?", dp = "$!", hw = "style", Hy = null, Vy = null;
    function yw(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Wi:
        case od: {
          t = i === Wi ? "#document" : "#fragment";
          var o = e.documentElement;
          a = o ? o.namespaceURI : ld(null, "");
          break;
        }
        default: {
          var s = i === Yn ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = ld(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), m = cp(null, p);
        return {
          namespace: a,
          ancestorInfo: m
        };
      }
    }
    function gw(e, t, a) {
      {
        var i = e, o = ld(i.namespace, t), s = cp(i.ancestorInfo, t);
        return {
          namespace: o,
          ancestorInfo: s
        };
      }
    }
    function gN(e) {
      return e;
    }
    function Sw(e) {
      Hy = Kn(), Vy = ME();
      var t = null;
      return ar(!1), t;
    }
    function Cw(e) {
      zE(Vy), ar(Hy), Hy = null, Vy = null;
    }
    function xw(e, t, a, i, o) {
      var s;
      {
        var f = i;
        if (sp(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, m = cp(f.ancestorInfo, e);
          sp(null, p, m);
        }
        s = f.namespace;
      }
      var C = nw(e, t, a, s);
      return mp(o, C), Qy(C, t), C;
    }
    function bw(e, t) {
      e.appendChild(t);
    }
    function Ew(e, t, a, i, o) {
      switch (aw(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function ww(e, t, a, i, o, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, m = cp(f.ancestorInfo, t);
          sp(null, p, m);
        }
      }
      return iw(e, t, a, i);
    }
    function By(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function Rw(e, t, a, i) {
      {
        var o = a;
        sp(null, e, o.ancestorInfo);
      }
      var s = rw(e, t);
      return mp(i, s), s;
    }
    function Tw() {
      var e = window.event;
      return e === void 0 ? Ba : cf(e.type);
    }
    var $y = typeof setTimeout == "function" ? setTimeout : void 0, _w = typeof clearTimeout == "function" ? clearTimeout : void 0, Iy = -1, KC = typeof Promise == "function" ? Promise : void 0, kw = typeof queueMicrotask == "function" ? queueMicrotask : typeof KC < "u" ? function(e) {
      return KC.resolve(null).then(e).catch(Nw);
    } : $y;
    function Nw(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function Dw(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function jw(e, t, a, i, o, s) {
      lw(e, t, a, i, o), Qy(e, o);
    }
    function JC(e) {
      cu(e, "");
    }
    function Ow(e, t, a) {
      e.nodeValue = a;
    }
    function Mw(e, t) {
      e.appendChild(t);
    }
    function zw(e, t) {
      var a;
      e.nodeType === Yn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Mm(a);
    }
    function Lw(e, t, a) {
      e.insertBefore(t, a);
    }
    function Aw(e, t, a) {
      e.nodeType === Yn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function Uw(e, t) {
      e.removeChild(t);
    }
    function Pw(e, t) {
      e.nodeType === Yn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Yy(e, t) {
      var a = t, i = 0;
      do {
        var o = a.nextSibling;
        if (e.removeChild(a), o && o.nodeType === Yn) {
          var s = o.data;
          if (s === Am)
            if (i === 0) {
              e.removeChild(o), zo(t);
              return;
            } else
              i--;
          else (s === Lm || s === fp || s === dp) && i++;
        }
        a = o;
      } while (a);
      zo(t);
    }
    function Fw(e, t) {
      e.nodeType === Yn ? Yy(e.parentNode, t) : e.nodeType === na && Yy(e, t), zo(e);
    }
    function Hw(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function Vw(e) {
      e.nodeValue = "";
    }
    function Bw(e, t) {
      e = e;
      var a = t[hw], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = mc("display", i);
    }
    function $w(e, t) {
      e.nodeValue = t;
    }
    function Iw(e) {
      e.nodeType === na ? e.textContent = "" : e.nodeType === Wi && e.documentElement && e.removeChild(e.documentElement);
    }
    function Yw(e, t, a) {
      return e.nodeType !== na || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function qw(e, t) {
      return t === "" || e.nodeType !== Gi ? null : e;
    }
    function Gw(e) {
      return e.nodeType !== Yn ? null : e;
    }
    function ZC(e) {
      return e.data === fp;
    }
    function qy(e) {
      return e.data === dp;
    }
    function Ww(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, o;
      return t && (a = t.dgst, i = t.msg, o = t.stck), {
        message: i,
        digest: a,
        stack: o
      };
    }
    function Qw(e, t) {
      e._reactRetry = t;
    }
    function Um(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === na || t === Gi)
          break;
        if (t === Yn) {
          var a = e.data;
          if (a === Lm || a === dp || a === fp)
            break;
          if (a === Am)
            return null;
        }
      }
      return e;
    }
    function pp(e) {
      return Um(e.nextSibling);
    }
    function Xw(e) {
      return Um(e.firstChild);
    }
    function Kw(e) {
      return Um(e.firstChild);
    }
    function Jw(e) {
      return Um(e.nextSibling);
    }
    function Zw(e, t, a, i, o, s, f) {
      mp(s, e), Qy(e, a);
      var p;
      {
        var m = o;
        p = m.namespace;
      }
      var C = (s.mode & Dt) !== at;
      return uw(e, t, a, p, i, C, f);
    }
    function e1(e, t, a, i) {
      return mp(a, e), a.mode & Dt, sw(e, t);
    }
    function t1(e, t) {
      mp(t, e);
    }
    function n1(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Yn) {
          var i = t.data;
          if (i === Am) {
            if (a === 0)
              return pp(t);
            a--;
          } else (i === Lm || i === dp || i === fp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function e0(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Yn) {
          var i = t.data;
          if (i === Lm || i === dp || i === fp) {
            if (a === 0)
              return t;
            a--;
          } else i === Am && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function r1(e) {
      zo(e);
    }
    function a1(e) {
      zo(e);
    }
    function i1(e) {
      return e !== "head" && e !== "body";
    }
    function l1(e, t, a, i) {
      var o = !0;
      Om(t.nodeValue, a, i, o);
    }
    function o1(e, t, a, i, o, s) {
      if (t[zm] !== !0) {
        var f = !0;
        Om(i.nodeValue, o, s, f);
      }
    }
    function u1(e, t) {
      t.nodeType === na ? Ay(e, t) : t.nodeType === Yn || Uy(e, t);
    }
    function s1(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === na ? Ay(a, t) : t.nodeType === Yn || Uy(a, t));
      }
    }
    function c1(e, t, a, i, o) {
      (o || t[zm] !== !0) && (i.nodeType === na ? Ay(a, i) : i.nodeType === Yn || Uy(a, i));
    }
    function f1(e, t, a) {
      Py(e, t);
    }
    function d1(e, t) {
      Fy(e, t);
    }
    function p1(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Py(i, t);
      }
    }
    function v1(e, t) {
      {
        var a = e.parentNode;
        a !== null && Fy(a, t);
      }
    }
    function m1(e, t, a, i, o, s) {
      (s || t[zm] !== !0) && Py(a, i);
    }
    function h1(e, t, a, i, o) {
      (o || t[zm] !== !0) && Fy(a, i);
    }
    function y1(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function g1(e) {
      ip(e);
    }
    var wf = Math.random().toString(36).slice(2), Rf = "__reactFiber$" + wf, Gy = "__reactProps$" + wf, vp = "__reactContainer$" + wf, Wy = "__reactEvents$" + wf, S1 = "__reactListeners$" + wf, C1 = "__reactHandles$" + wf;
    function x1(e) {
      delete e[Rf], delete e[Gy], delete e[Wy], delete e[S1], delete e[C1];
    }
    function mp(e, t) {
      t[Rf] = e;
    }
    function Pm(e, t) {
      t[vp] = e;
    }
    function t0(e) {
      e[vp] = null;
    }
    function hp(e) {
      return !!e[vp];
    }
    function Qs(e) {
      var t = e[Rf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[vp] || a[Rf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var o = e0(e); o !== null; ) {
              var s = o[Rf];
              if (s)
                return s;
              o = e0(o);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function zu(e) {
      var t = e[Rf] || e[vp];
      return t && (t.tag === fe || t.tag === He || t.tag === re || t.tag === A) ? t : null;
    }
    function Tf(e) {
      if (e.tag === fe || e.tag === He)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Fm(e) {
      return e[Gy] || null;
    }
    function Qy(e, t) {
      e[Gy] = t;
    }
    function b1(e) {
      var t = e[Wy];
      return t === void 0 && (t = e[Wy] = /* @__PURE__ */ new Set()), t;
    }
    var n0 = {}, r0 = R.ReactDebugCurrentFrame;
    function Hm(e) {
      if (e) {
        var t = e._owner, a = $i(e.type, e._source, t ? t.type : null);
        r0.setExtraStackFrame(a);
      } else
        r0.setExtraStackFrame(null);
    }
    function il(e, t, a, i, o) {
      {
        var s = Function.call.bind(mr);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var m = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw m.name = "Invariant Violation", m;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (C) {
              p = C;
            }
            p && !(p instanceof Error) && (Hm(o), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), Hm(null)), p instanceof Error && !(p.message in n0) && (n0[p.message] = !0, Hm(o), S("Failed %s type: %s", a, p.message), Hm(null));
          }
      }
    }
    var Xy = [], Vm;
    Vm = [];
    var Ho = -1;
    function Lu(e) {
      return {
        current: e
      };
    }
    function pa(e, t) {
      if (Ho < 0) {
        S("Unexpected pop.");
        return;
      }
      t !== Vm[Ho] && S("Unexpected Fiber popped."), e.current = Xy[Ho], Xy[Ho] = null, Vm[Ho] = null, Ho--;
    }
    function va(e, t, a) {
      Ho++, Xy[Ho] = e.current, Vm[Ho] = a, e.current = t;
    }
    var Ky;
    Ky = {};
    var pi = {};
    Object.freeze(pi);
    var Vo = Lu(pi), ql = Lu(!1), Jy = pi;
    function _f(e, t, a) {
      return a && Gl(t) ? Jy : Vo.current;
    }
    function a0(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function kf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return pi;
        var o = e.stateNode;
        if (o && o.__reactInternalMemoizedUnmaskedChildContext === t)
          return o.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = gt(e) || "Unknown";
          il(i, s, "context", p);
        }
        return o && a0(e, t, s), s;
      }
    }
    function Bm() {
      return ql.current;
    }
    function Gl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function $m(e) {
      pa(ql, e), pa(Vo, e);
    }
    function Zy(e) {
      pa(ql, e), pa(Vo, e);
    }
    function i0(e, t, a) {
      {
        if (Vo.current !== pi)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        va(Vo, t, e), va(ql, a, e);
      }
    }
    function l0(e, t, a) {
      {
        var i = e.stateNode, o = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = gt(e) || "Unknown";
            Ky[s] || (Ky[s] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in o))
            throw new Error((gt(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var m = gt(e) || "Unknown";
          il(o, f, "child context", m);
        }
        return _t({}, a, f);
      }
    }
    function Im(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || pi;
        return Jy = Vo.current, va(Vo, a, e), va(ql, ql.current, e), !0;
      }
    }
    function o0(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var o = l0(e, t, Jy);
          i.__reactInternalMemoizedMergedChildContext = o, pa(ql, e), pa(Vo, e), va(Vo, o, e), va(ql, a, e);
        } else
          pa(ql, e), va(ql, a, e);
      }
    }
    function E1(e) {
      {
        if (!Co(e) || e.tag !== X)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case A:
              return t.stateNode.context;
            case X: {
              var a = t.type;
              if (Gl(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Au = 0, Ym = 1, Bo = null, eg = !1, tg = !1;
    function u0(e) {
      Bo === null ? Bo = [e] : Bo.push(e);
    }
    function w1(e) {
      eg = !0, u0(e);
    }
    function s0() {
      eg && Uu();
    }
    function Uu() {
      if (!tg && Bo !== null) {
        tg = !0;
        var e = 0, t = Ia();
        try {
          var a = !0, i = Bo;
          for (Xn(Br); e < i.length; e++) {
            var o = i[e];
            do
              o = o(a);
            while (o !== null);
          }
          Bo = null, eg = !1;
        } catch (s) {
          throw Bo !== null && (Bo = Bo.slice(e + 1)), Sd(vs, Uu), s;
        } finally {
          Xn(t), tg = !1;
        }
      }
      return null;
    }
    var Nf = [], Df = 0, qm = null, Gm = 0, Ai = [], Ui = 0, Xs = null, $o = 1, Io = "";
    function R1(e) {
      return Js(), (e.flags & Ti) !== rt;
    }
    function T1(e) {
      return Js(), Gm;
    }
    function _1() {
      var e = Io, t = $o, a = t & ~k1(t);
      return a.toString(32) + e;
    }
    function Ks(e, t) {
      Js(), Nf[Df++] = Gm, Nf[Df++] = qm, qm = e, Gm = t;
    }
    function c0(e, t, a) {
      Js(), Ai[Ui++] = $o, Ai[Ui++] = Io, Ai[Ui++] = Xs, Xs = e;
      var i = $o, o = Io, s = Wm(i) - 1, f = i & ~(1 << s), p = a + 1, m = Wm(t) + s;
      if (m > 30) {
        var C = s - s % 5, x = (1 << C) - 1, O = (f & x).toString(32), N = f >> C, V = s - C, I = Wm(t) + V, W = p << V, je = W | N, ut = O + o;
        $o = 1 << I | je, Io = ut;
      } else {
        var Ze = p << s, It = Ze | f, Ut = o;
        $o = 1 << m | It, Io = Ut;
      }
    }
    function ng(e) {
      Js();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Ks(e, a), c0(e, a, i);
      }
    }
    function Wm(e) {
      return 32 - Wn(e);
    }
    function k1(e) {
      return 1 << Wm(e) - 1;
    }
    function rg(e) {
      for (; e === qm; )
        qm = Nf[--Df], Nf[Df] = null, Gm = Nf[--Df], Nf[Df] = null;
      for (; e === Xs; )
        Xs = Ai[--Ui], Ai[Ui] = null, Io = Ai[--Ui], Ai[Ui] = null, $o = Ai[--Ui], Ai[Ui] = null;
    }
    function N1() {
      return Js(), Xs !== null ? {
        id: $o,
        overflow: Io
      } : null;
    }
    function D1(e, t) {
      Js(), Ai[Ui++] = $o, Ai[Ui++] = Io, Ai[Ui++] = Xs, $o = t.id, Io = t.overflow, Xs = e;
    }
    function Js() {
      Gr() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var qr = null, Pi = null, ll = !1, Zs = !1, Pu = null;
    function j1() {
      ll && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function f0() {
      Zs = !0;
    }
    function O1() {
      return Zs;
    }
    function M1(e) {
      var t = e.stateNode.containerInfo;
      return Pi = Kw(t), qr = e, ll = !0, Pu = null, Zs = !1, !0;
    }
    function z1(e, t, a) {
      return Pi = Jw(t), qr = e, ll = !0, Pu = null, Zs = !1, a !== null && D1(e, a), !0;
    }
    function d0(e, t) {
      switch (e.tag) {
        case A: {
          u1(e.stateNode.containerInfo, t);
          break;
        }
        case fe: {
          var a = (e.mode & Dt) !== at;
          c1(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case re: {
          var i = e.memoizedState;
          i.dehydrated !== null && s1(i.dehydrated, t);
          break;
        }
      }
    }
    function p0(e, t) {
      d0(e, t);
      var a = P_();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Ua) : i.push(a);
    }
    function ag(e, t) {
      {
        if (Zs)
          return;
        switch (e.tag) {
          case A: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case fe:
                var i = t.type;
                t.pendingProps, f1(a, i);
                break;
              case He:
                var o = t.pendingProps;
                d1(a, o);
                break;
            }
            break;
          }
          case fe: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case fe: {
                var m = t.type, C = t.pendingProps, x = (e.mode & Dt) !== at;
                m1(
                  s,
                  f,
                  p,
                  m,
                  C,
                  // TODO: Delete this argument when we remove the legacy root API.
                  x
                );
                break;
              }
              case He: {
                var O = t.pendingProps, N = (e.mode & Dt) !== at;
                h1(
                  s,
                  f,
                  p,
                  O,
                  // TODO: Delete this argument when we remove the legacy root API.
                  N
                );
                break;
              }
            }
            break;
          }
          case re: {
            var V = e.memoizedState, I = V.dehydrated;
            if (I !== null) switch (t.tag) {
              case fe:
                var W = t.type;
                t.pendingProps, p1(I, W);
                break;
              case He:
                var je = t.pendingProps;
                v1(I, je);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function v0(e, t) {
      t.flags = t.flags & ~aa | Tn, ag(e, t);
    }
    function m0(e, t) {
      switch (e.tag) {
        case fe: {
          var a = e.type;
          e.pendingProps;
          var i = Yw(t, a);
          return i !== null ? (e.stateNode = i, qr = e, Pi = Xw(i), !0) : !1;
        }
        case He: {
          var o = e.pendingProps, s = qw(t, o);
          return s !== null ? (e.stateNode = s, qr = e, Pi = null, !0) : !1;
        }
        case re: {
          var f = Gw(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: N1(),
              retryLane: ua
            };
            e.memoizedState = p;
            var m = F_(f);
            return m.return = e, e.child = m, qr = e, Pi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function ig(e) {
      return (e.mode & Dt) !== at && (e.flags & tt) === rt;
    }
    function lg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function og(e) {
      if (ll) {
        var t = Pi;
        if (!t) {
          ig(e) && (ag(qr, e), lg()), v0(qr, e), ll = !1, qr = e;
          return;
        }
        var a = t;
        if (!m0(e, t)) {
          ig(e) && (ag(qr, e), lg()), t = pp(a);
          var i = qr;
          if (!t || !m0(e, t)) {
            v0(qr, e), ll = !1, qr = e;
            return;
          }
          p0(i, a);
        }
      }
    }
    function L1(e, t, a) {
      var i = e.stateNode, o = !Zs, s = Zw(i, e.type, e.memoizedProps, t, a, e, o);
      return e.updateQueue = s, s !== null;
    }
    function A1(e) {
      var t = e.stateNode, a = e.memoizedProps, i = e1(t, a, e);
      if (i) {
        var o = qr;
        if (o !== null)
          switch (o.tag) {
            case A: {
              var s = o.stateNode.containerInfo, f = (o.mode & Dt) !== at;
              l1(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case fe: {
              var p = o.type, m = o.memoizedProps, C = o.stateNode, x = (o.mode & Dt) !== at;
              o1(
                p,
                m,
                C,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                x
              );
              break;
            }
          }
      }
      return i;
    }
    function U1(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      t1(a, e);
    }
    function P1(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return n1(a);
    }
    function h0(e) {
      for (var t = e.return; t !== null && t.tag !== fe && t.tag !== A && t.tag !== re; )
        t = t.return;
      qr = t;
    }
    function Qm(e) {
      if (e !== qr)
        return !1;
      if (!ll)
        return h0(e), ll = !0, !1;
      if (e.tag !== A && (e.tag !== fe || i1(e.type) && !By(e.type, e.memoizedProps))) {
        var t = Pi;
        if (t)
          if (ig(e))
            y0(e), lg();
          else
            for (; t; )
              p0(e, t), t = pp(t);
      }
      return h0(e), e.tag === re ? Pi = P1(e) : Pi = qr ? pp(e.stateNode) : null, !0;
    }
    function F1() {
      return ll && Pi !== null;
    }
    function y0(e) {
      for (var t = Pi; t; )
        d0(e, t), t = pp(t);
    }
    function jf() {
      qr = null, Pi = null, ll = !1, Zs = !1;
    }
    function g0() {
      Pu !== null && (fb(Pu), Pu = null);
    }
    function Gr() {
      return ll;
    }
    function ug(e) {
      Pu === null ? Pu = [e] : Pu.push(e);
    }
    var H1 = R.ReactCurrentBatchConfig, V1 = null;
    function B1() {
      return H1.transition;
    }
    var ol = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var $1 = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & fn && (t = a), a = a.return;
        return t;
      }, ec = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, yp = [], gp = [], Sp = [], Cp = [], xp = [], bp = [], tc = /* @__PURE__ */ new Set();
      ol.recordUnsafeLifecycleWarnings = function(e, t) {
        tc.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && yp.push(e), e.mode & fn && typeof t.UNSAFE_componentWillMount == "function" && gp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Sp.push(e), e.mode & fn && typeof t.UNSAFE_componentWillReceiveProps == "function" && Cp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && xp.push(e), e.mode & fn && typeof t.UNSAFE_componentWillUpdate == "function" && bp.push(e));
      }, ol.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        yp.length > 0 && (yp.forEach(function(N) {
          e.add(gt(N) || "Component"), tc.add(N.type);
        }), yp = []);
        var t = /* @__PURE__ */ new Set();
        gp.length > 0 && (gp.forEach(function(N) {
          t.add(gt(N) || "Component"), tc.add(N.type);
        }), gp = []);
        var a = /* @__PURE__ */ new Set();
        Sp.length > 0 && (Sp.forEach(function(N) {
          a.add(gt(N) || "Component"), tc.add(N.type);
        }), Sp = []);
        var i = /* @__PURE__ */ new Set();
        Cp.length > 0 && (Cp.forEach(function(N) {
          i.add(gt(N) || "Component"), tc.add(N.type);
        }), Cp = []);
        var o = /* @__PURE__ */ new Set();
        xp.length > 0 && (xp.forEach(function(N) {
          o.add(gt(N) || "Component"), tc.add(N.type);
        }), xp = []);
        var s = /* @__PURE__ */ new Set();
        if (bp.length > 0 && (bp.forEach(function(N) {
          s.add(gt(N) || "Component"), tc.add(N.type);
        }), bp = []), t.size > 0) {
          var f = ec(t);
          S(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = ec(i);
          S(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var m = ec(s);
          S(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, m);
        }
        if (e.size > 0) {
          var C = ec(e);
          G(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, C);
        }
        if (a.size > 0) {
          var x = ec(a);
          G(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, x);
        }
        if (o.size > 0) {
          var O = ec(o);
          G(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, O);
        }
      };
      var Xm = /* @__PURE__ */ new Map(), S0 = /* @__PURE__ */ new Set();
      ol.recordLegacyContextWarning = function(e, t) {
        var a = $1(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!S0.has(e.type)) {
          var i = Xm.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Xm.set(a, i)), i.push(e));
        }
      }, ol.flushLegacyContextWarning = function() {
        Xm.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(gt(s) || "Component"), S0.add(s.type);
            });
            var o = ec(i);
            try {
              un(a), S(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, o);
            } finally {
              Sn();
            }
          }
        });
      }, ol.discardPendingWarnings = function() {
        yp = [], gp = [], Sp = [], Cp = [], xp = [], bp = [], Xm = /* @__PURE__ */ new Map();
      };
    }
    var sg, cg, fg, dg, pg, C0 = function(e, t) {
    };
    sg = !1, cg = !1, fg = {}, dg = {}, pg = {}, C0 = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = gt(t) || "Component";
        dg[a] || (dg[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function I1(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function Ep(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & fn || M) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== X) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !I1(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var o = gt(e) || "Component";
          fg[o] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', o, i), fg[o] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== X)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var m = f;
          Oa(i, "ref");
          var C = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === C)
            return t.ref;
          var x = function(O) {
            var N = m.refs;
            O === null ? delete N[C] : N[C] = O;
          };
          return x._stringRef = C, x;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function Km(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Jm(e) {
      {
        var t = gt(e) || "Component";
        if (pg[t])
          return;
        pg[t] = !0, S("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function x0(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function b0(e) {
      function t(U, Q) {
        if (e) {
          var P = U.deletions;
          P === null ? (U.deletions = [Q], U.flags |= Ua) : P.push(Q);
        }
      }
      function a(U, Q) {
        if (!e)
          return null;
        for (var P = Q; P !== null; )
          t(U, P), P = P.sibling;
        return null;
      }
      function i(U, Q) {
        for (var P = /* @__PURE__ */ new Map(), he = Q; he !== null; )
          he.key !== null ? P.set(he.key, he) : P.set(he.index, he), he = he.sibling;
        return P;
      }
      function o(U, Q) {
        var P = cc(U, Q);
        return P.index = 0, P.sibling = null, P;
      }
      function s(U, Q, P) {
        if (U.index = P, !e)
          return U.flags |= Ti, Q;
        var he = U.alternate;
        if (he !== null) {
          var Pe = he.index;
          return Pe < Q ? (U.flags |= Tn, Q) : Pe;
        } else
          return U.flags |= Tn, Q;
      }
      function f(U) {
        return e && U.alternate === null && (U.flags |= Tn), U;
      }
      function p(U, Q, P, he) {
        if (Q === null || Q.tag !== He) {
          var Pe = uC(P, U.mode, he);
          return Pe.return = U, Pe;
        } else {
          var ze = o(Q, P);
          return ze.return = U, ze;
        }
      }
      function m(U, Q, P, he) {
        var Pe = P.type;
        if (Pe === hi)
          return x(U, Q, P.props.children, he, P.key);
        if (Q !== null && (Q.elementType === Pe || // Keep this check inline so it only runs on the false path:
        _b(Q, P) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Pe == "object" && Pe !== null && Pe.$$typeof === Ct && x0(Pe) === Q.type)) {
          var ze = o(Q, P.props);
          return ze.ref = Ep(U, Q, P), ze.return = U, ze._debugSource = P._source, ze._debugOwner = P._owner, ze;
        }
        var mt = oC(P, U.mode, he);
        return mt.ref = Ep(U, Q, P), mt.return = U, mt;
      }
      function C(U, Q, P, he) {
        if (Q === null || Q.tag !== ve || Q.stateNode.containerInfo !== P.containerInfo || Q.stateNode.implementation !== P.implementation) {
          var Pe = sC(P, U.mode, he);
          return Pe.return = U, Pe;
        } else {
          var ze = o(Q, P.children || []);
          return ze.return = U, ze;
        }
      }
      function x(U, Q, P, he, Pe) {
        if (Q === null || Q.tag !== ne) {
          var ze = Qu(P, U.mode, he, Pe);
          return ze.return = U, ze;
        } else {
          var mt = o(Q, P);
          return mt.return = U, mt;
        }
      }
      function O(U, Q, P) {
        if (typeof Q == "string" && Q !== "" || typeof Q == "number") {
          var he = uC("" + Q, U.mode, P);
          return he.return = U, he;
        }
        if (typeof Q == "object" && Q !== null) {
          switch (Q.$$typeof) {
            case Pr: {
              var Pe = oC(Q, U.mode, P);
              return Pe.ref = Ep(U, null, Q), Pe.return = U, Pe;
            }
            case hr: {
              var ze = sC(Q, U.mode, P);
              return ze.return = U, ze;
            }
            case Ct: {
              var mt = Q._payload, bt = Q._init;
              return O(U, bt(mt), P);
            }
          }
          if (kt(Q) || wt(Q)) {
            var pn = Qu(Q, U.mode, P, null);
            return pn.return = U, pn;
          }
          Km(U, Q);
        }
        return typeof Q == "function" && Jm(U), null;
      }
      function N(U, Q, P, he) {
        var Pe = Q !== null ? Q.key : null;
        if (typeof P == "string" && P !== "" || typeof P == "number")
          return Pe !== null ? null : p(U, Q, "" + P, he);
        if (typeof P == "object" && P !== null) {
          switch (P.$$typeof) {
            case Pr:
              return P.key === Pe ? m(U, Q, P, he) : null;
            case hr:
              return P.key === Pe ? C(U, Q, P, he) : null;
            case Ct: {
              var ze = P._payload, mt = P._init;
              return N(U, Q, mt(ze), he);
            }
          }
          if (kt(P) || wt(P))
            return Pe !== null ? null : x(U, Q, P, he, null);
          Km(U, P);
        }
        return typeof P == "function" && Jm(U), null;
      }
      function V(U, Q, P, he, Pe) {
        if (typeof he == "string" && he !== "" || typeof he == "number") {
          var ze = U.get(P) || null;
          return p(Q, ze, "" + he, Pe);
        }
        if (typeof he == "object" && he !== null) {
          switch (he.$$typeof) {
            case Pr: {
              var mt = U.get(he.key === null ? P : he.key) || null;
              return m(Q, mt, he, Pe);
            }
            case hr: {
              var bt = U.get(he.key === null ? P : he.key) || null;
              return C(Q, bt, he, Pe);
            }
            case Ct:
              var pn = he._payload, Zt = he._init;
              return V(U, Q, P, Zt(pn), Pe);
          }
          if (kt(he) || wt(he)) {
            var ir = U.get(P) || null;
            return x(Q, ir, he, Pe, null);
          }
          Km(Q, he);
        }
        return typeof he == "function" && Jm(Q), null;
      }
      function I(U, Q, P) {
        {
          if (typeof U != "object" || U === null)
            return Q;
          switch (U.$$typeof) {
            case Pr:
            case hr:
              C0(U, P);
              var he = U.key;
              if (typeof he != "string")
                break;
              if (Q === null) {
                Q = /* @__PURE__ */ new Set(), Q.add(he);
                break;
              }
              if (!Q.has(he)) {
                Q.add(he);
                break;
              }
              S("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", he);
              break;
            case Ct:
              var Pe = U._payload, ze = U._init;
              I(ze(Pe), Q, P);
              break;
          }
        }
        return Q;
      }
      function W(U, Q, P, he) {
        for (var Pe = null, ze = 0; ze < P.length; ze++) {
          var mt = P[ze];
          Pe = I(mt, Pe, U);
        }
        for (var bt = null, pn = null, Zt = Q, ir = 0, en = 0, Zn = null; Zt !== null && en < P.length; en++) {
          Zt.index > en ? (Zn = Zt, Zt = null) : Zn = Zt.sibling;
          var ha = N(U, Zt, P[en], he);
          if (ha === null) {
            Zt === null && (Zt = Zn);
            break;
          }
          e && Zt && ha.alternate === null && t(U, Zt), ir = s(ha, ir, en), pn === null ? bt = ha : pn.sibling = ha, pn = ha, Zt = Zn;
        }
        if (en === P.length) {
          if (a(U, Zt), Gr()) {
            var ea = en;
            Ks(U, ea);
          }
          return bt;
        }
        if (Zt === null) {
          for (; en < P.length; en++) {
            var mi = O(U, P[en], he);
            mi !== null && (ir = s(mi, ir, en), pn === null ? bt = mi : pn.sibling = mi, pn = mi);
          }
          if (Gr()) {
            var Da = en;
            Ks(U, Da);
          }
          return bt;
        }
        for (var ja = i(U, Zt); en < P.length; en++) {
          var ya = V(ja, U, en, P[en], he);
          ya !== null && (e && ya.alternate !== null && ja.delete(ya.key === null ? en : ya.key), ir = s(ya, ir, en), pn === null ? bt = ya : pn.sibling = ya, pn = ya);
        }
        if (e && ja.forEach(function(Xf) {
          return t(U, Xf);
        }), Gr()) {
          var Ko = en;
          Ks(U, Ko);
        }
        return bt;
      }
      function je(U, Q, P, he) {
        var Pe = wt(P);
        if (typeof Pe != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          P[Symbol.toStringTag] === "Generator" && (cg || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), cg = !0), P.entries === Pe && (sg || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), sg = !0);
          var ze = Pe.call(P);
          if (ze)
            for (var mt = null, bt = ze.next(); !bt.done; bt = ze.next()) {
              var pn = bt.value;
              mt = I(pn, mt, U);
            }
        }
        var Zt = Pe.call(P);
        if (Zt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var ir = null, en = null, Zn = Q, ha = 0, ea = 0, mi = null, Da = Zt.next(); Zn !== null && !Da.done; ea++, Da = Zt.next()) {
          Zn.index > ea ? (mi = Zn, Zn = null) : mi = Zn.sibling;
          var ja = N(U, Zn, Da.value, he);
          if (ja === null) {
            Zn === null && (Zn = mi);
            break;
          }
          e && Zn && ja.alternate === null && t(U, Zn), ha = s(ja, ha, ea), en === null ? ir = ja : en.sibling = ja, en = ja, Zn = mi;
        }
        if (Da.done) {
          if (a(U, Zn), Gr()) {
            var ya = ea;
            Ks(U, ya);
          }
          return ir;
        }
        if (Zn === null) {
          for (; !Da.done; ea++, Da = Zt.next()) {
            var Ko = O(U, Da.value, he);
            Ko !== null && (ha = s(Ko, ha, ea), en === null ? ir = Ko : en.sibling = Ko, en = Ko);
          }
          if (Gr()) {
            var Xf = ea;
            Ks(U, Xf);
          }
          return ir;
        }
        for (var tv = i(U, Zn); !Da.done; ea++, Da = Zt.next()) {
          var to = V(tv, U, ea, Da.value, he);
          to !== null && (e && to.alternate !== null && tv.delete(to.key === null ? ea : to.key), ha = s(to, ha, ea), en === null ? ir = to : en.sibling = to, en = to);
        }
        if (e && tv.forEach(function(hk) {
          return t(U, hk);
        }), Gr()) {
          var mk = ea;
          Ks(U, mk);
        }
        return ir;
      }
      function ut(U, Q, P, he) {
        if (Q !== null && Q.tag === He) {
          a(U, Q.sibling);
          var Pe = o(Q, P);
          return Pe.return = U, Pe;
        }
        a(U, Q);
        var ze = uC(P, U.mode, he);
        return ze.return = U, ze;
      }
      function Ze(U, Q, P, he) {
        for (var Pe = P.key, ze = Q; ze !== null; ) {
          if (ze.key === Pe) {
            var mt = P.type;
            if (mt === hi) {
              if (ze.tag === ne) {
                a(U, ze.sibling);
                var bt = o(ze, P.props.children);
                return bt.return = U, bt._debugSource = P._source, bt._debugOwner = P._owner, bt;
              }
            } else if (ze.elementType === mt || // Keep this check inline so it only runs on the false path:
            _b(ze, P) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof mt == "object" && mt !== null && mt.$$typeof === Ct && x0(mt) === ze.type) {
              a(U, ze.sibling);
              var pn = o(ze, P.props);
              return pn.ref = Ep(U, ze, P), pn.return = U, pn._debugSource = P._source, pn._debugOwner = P._owner, pn;
            }
            a(U, ze);
            break;
          } else
            t(U, ze);
          ze = ze.sibling;
        }
        if (P.type === hi) {
          var Zt = Qu(P.props.children, U.mode, he, P.key);
          return Zt.return = U, Zt;
        } else {
          var ir = oC(P, U.mode, he);
          return ir.ref = Ep(U, Q, P), ir.return = U, ir;
        }
      }
      function It(U, Q, P, he) {
        for (var Pe = P.key, ze = Q; ze !== null; ) {
          if (ze.key === Pe)
            if (ze.tag === ve && ze.stateNode.containerInfo === P.containerInfo && ze.stateNode.implementation === P.implementation) {
              a(U, ze.sibling);
              var mt = o(ze, P.children || []);
              return mt.return = U, mt;
            } else {
              a(U, ze);
              break;
            }
          else
            t(U, ze);
          ze = ze.sibling;
        }
        var bt = sC(P, U.mode, he);
        return bt.return = U, bt;
      }
      function Ut(U, Q, P, he) {
        var Pe = typeof P == "object" && P !== null && P.type === hi && P.key === null;
        if (Pe && (P = P.props.children), typeof P == "object" && P !== null) {
          switch (P.$$typeof) {
            case Pr:
              return f(Ze(U, Q, P, he));
            case hr:
              return f(It(U, Q, P, he));
            case Ct:
              var ze = P._payload, mt = P._init;
              return Ut(U, Q, mt(ze), he);
          }
          if (kt(P))
            return W(U, Q, P, he);
          if (wt(P))
            return je(U, Q, P, he);
          Km(U, P);
        }
        return typeof P == "string" && P !== "" || typeof P == "number" ? f(ut(U, Q, "" + P, he)) : (typeof P == "function" && Jm(U), a(U, Q));
      }
      return Ut;
    }
    var Of = b0(!0), E0 = b0(!1);
    function Y1(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = cc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = cc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function q1(e, t) {
      for (var a = e.child; a !== null; )
        M_(a, t), a = a.sibling;
    }
    var vg = Lu(null), mg;
    mg = {};
    var Zm = null, Mf = null, hg = null, eh = !1;
    function th() {
      Zm = null, Mf = null, hg = null, eh = !1;
    }
    function w0() {
      eh = !0;
    }
    function R0() {
      eh = !1;
    }
    function T0(e, t, a) {
      va(vg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== mg && S("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = mg;
    }
    function yg(e, t) {
      var a = vg.current;
      pa(vg, t), e._currentValue = a;
    }
    function gg(e, t, a) {
      for (var i = e; i !== null; ) {
        var o = i.alternate;
        if (Mo(i.childLanes, t) ? o !== null && !Mo(o.childLanes, t) && (o.childLanes = Tt(o.childLanes, t)) : (i.childLanes = Tt(i.childLanes, t), o !== null && (o.childLanes = Tt(o.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function G1(e, t, a) {
      W1(e, t, a);
    }
    function W1(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var o = void 0, s = i.dependencies;
        if (s !== null) {
          o = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === X) {
                var p = ks(a), m = Yo(vn, p);
                m.tag = rh;
                var C = i.updateQueue;
                if (C !== null) {
                  var x = C.shared, O = x.pending;
                  O === null ? m.next = m : (m.next = O.next, O.next = m), x.pending = m;
                }
              }
              i.lanes = Tt(i.lanes, a);
              var N = i.alternate;
              N !== null && (N.lanes = Tt(N.lanes, a)), gg(i.return, a, e), s.lanes = Tt(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === _e)
          o = i.type === e.type ? null : i.child;
        else if (i.tag === nt) {
          var V = i.return;
          if (V === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          V.lanes = Tt(V.lanes, a);
          var I = V.alternate;
          I !== null && (I.lanes = Tt(I.lanes, a)), gg(V, a, e), o = i.sibling;
        } else
          o = i.child;
        if (o !== null)
          o.return = i;
        else
          for (o = i; o !== null; ) {
            if (o === e) {
              o = null;
              break;
            }
            var W = o.sibling;
            if (W !== null) {
              W.return = o.return, o = W;
              break;
            }
            o = o.return;
          }
        i = o;
      }
    }
    function zf(e, t) {
      Zm = e, Mf = null, hg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (sa(a.lanes, t) && Pp(), a.firstContext = null);
      }
    }
    function vr(e) {
      eh && S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (hg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Mf === null) {
          if (Zm === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Mf = a, Zm.dependencies = {
            lanes: ie,
            firstContext: a
          };
        } else
          Mf = Mf.next = a;
      }
      return t;
    }
    var nc = null;
    function Sg(e) {
      nc === null ? nc = [e] : nc.push(e);
    }
    function Q1() {
      if (nc !== null) {
        for (var e = 0; e < nc.length; e++) {
          var t = nc[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, o = t.pending;
            if (o !== null) {
              var s = o.next;
              o.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        nc = null;
      }
    }
    function _0(e, t, a, i) {
      var o = t.interleaved;
      return o === null ? (a.next = a, Sg(t)) : (a.next = o.next, o.next = a), t.interleaved = a, nh(e, i);
    }
    function X1(e, t, a, i) {
      var o = t.interleaved;
      o === null ? (a.next = a, Sg(t)) : (a.next = o.next, o.next = a), t.interleaved = a;
    }
    function K1(e, t, a, i) {
      var o = t.interleaved;
      return o === null ? (a.next = a, Sg(t)) : (a.next = o.next, o.next = a), t.interleaved = a, nh(e, i);
    }
    function Ga(e, t) {
      return nh(e, t);
    }
    var J1 = nh;
    function nh(e, t) {
      e.lanes = Tt(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = Tt(a.lanes, t)), a === null && (e.flags & (Tn | aa)) !== rt && Eb(e);
      for (var i = e, o = e.return; o !== null; )
        o.childLanes = Tt(o.childLanes, t), a = o.alternate, a !== null ? a.childLanes = Tt(a.childLanes, t) : (o.flags & (Tn | aa)) !== rt && Eb(e), i = o, o = o.return;
      if (i.tag === A) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var k0 = 0, N0 = 1, rh = 2, Cg = 3, ah = !1, xg, ih;
    xg = !1, ih = null;
    function bg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: ie
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function D0(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var o = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = o;
      }
    }
    function Yo(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: k0,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Fu(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var o = i.shared;
      if (ih === o && !xg && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), xg = !0), XT()) {
        var s = o.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), o.pending = t, J1(e, a);
      } else
        return K1(e, o, t, a);
    }
    function lh(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var o = i.shared;
        if (Ad(a)) {
          var s = o.lanes;
          s = Pd(s, e.pendingLanes);
          var f = Tt(s, a);
          o.lanes = f, lf(e, f);
        }
      }
    }
    function Eg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var o = i.updateQueue;
        if (a === o) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var m = p;
            do {
              var C = {
                eventTime: m.eventTime,
                lane: m.lane,
                tag: m.tag,
                payload: m.payload,
                callback: m.callback,
                next: null
              };
              f === null ? s = f = C : (f.next = C, f = C), m = m.next;
            } while (m !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: o.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: o.shared,
            effects: o.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var x = a.lastBaseUpdate;
      x === null ? a.firstBaseUpdate = t : x.next = t, a.lastBaseUpdate = t;
    }
    function Z1(e, t, a, i, o, s) {
      switch (a.tag) {
        case N0: {
          var f = a.payload;
          if (typeof f == "function") {
            w0();
            var p = f.call(s, i, o);
            {
              if (e.mode & fn) {
                _n(!0);
                try {
                  f.call(s, i, o);
                } finally {
                  _n(!1);
                }
              }
              R0();
            }
            return p;
          }
          return f;
        }
        case Cg:
          e.flags = e.flags & ~cr | tt;
        case k0: {
          var m = a.payload, C;
          if (typeof m == "function") {
            w0(), C = m.call(s, i, o);
            {
              if (e.mode & fn) {
                _n(!0);
                try {
                  m.call(s, i, o);
                } finally {
                  _n(!1);
                }
              }
              R0();
            }
          } else
            C = m;
          return C == null ? i : _t({}, i, C);
        }
        case rh:
          return ah = !0, i;
      }
      return i;
    }
    function oh(e, t, a, i) {
      var o = e.updateQueue;
      ah = !1, ih = o.shared;
      var s = o.firstBaseUpdate, f = o.lastBaseUpdate, p = o.shared.pending;
      if (p !== null) {
        o.shared.pending = null;
        var m = p, C = m.next;
        m.next = null, f === null ? s = C : f.next = C, f = m;
        var x = e.alternate;
        if (x !== null) {
          var O = x.updateQueue, N = O.lastBaseUpdate;
          N !== f && (N === null ? O.firstBaseUpdate = C : N.next = C, O.lastBaseUpdate = m);
        }
      }
      if (s !== null) {
        var V = o.baseState, I = ie, W = null, je = null, ut = null, Ze = s;
        do {
          var It = Ze.lane, Ut = Ze.eventTime;
          if (Mo(i, It)) {
            if (ut !== null) {
              var Q = {
                eventTime: Ut,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Wt,
                tag: Ze.tag,
                payload: Ze.payload,
                callback: Ze.callback,
                next: null
              };
              ut = ut.next = Q;
            }
            V = Z1(e, o, Ze, V, t, a);
            var P = Ze.callback;
            if (P !== null && // If the update was already committed, we should not queue its
            // callback again.
            Ze.lane !== Wt) {
              e.flags |= yn;
              var he = o.effects;
              he === null ? o.effects = [Ze] : he.push(Ze);
            }
          } else {
            var U = {
              eventTime: Ut,
              lane: It,
              tag: Ze.tag,
              payload: Ze.payload,
              callback: Ze.callback,
              next: null
            };
            ut === null ? (je = ut = U, W = V) : ut = ut.next = U, I = Tt(I, It);
          }
          if (Ze = Ze.next, Ze === null) {
            if (p = o.shared.pending, p === null)
              break;
            var Pe = p, ze = Pe.next;
            Pe.next = null, Ze = ze, o.lastBaseUpdate = Pe, o.shared.pending = null;
          }
        } while (!0);
        ut === null && (W = V), o.baseState = W, o.firstBaseUpdate = je, o.lastBaseUpdate = ut;
        var mt = o.shared.interleaved;
        if (mt !== null) {
          var bt = mt;
          do
            I = Tt(I, bt.lane), bt = bt.next;
          while (bt !== mt);
        } else s === null && (o.shared.lanes = ie);
        Xp(I), e.lanes = I, e.memoizedState = V;
      }
      ih = null;
    }
    function eR(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function j0() {
      ah = !1;
    }
    function uh() {
      return ah;
    }
    function O0(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var o = 0; o < i.length; o++) {
          var s = i[o], f = s.callback;
          f !== null && (s.callback = null, eR(f, a));
        }
    }
    var wp = {}, Hu = Lu(wp), Rp = Lu(wp), sh = Lu(wp);
    function ch(e) {
      if (e === wp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function M0() {
      var e = ch(sh.current);
      return e;
    }
    function wg(e, t) {
      va(sh, t, e), va(Rp, e, e), va(Hu, wp, e);
      var a = yw(t);
      pa(Hu, e), va(Hu, a, e);
    }
    function Lf(e) {
      pa(Hu, e), pa(Rp, e), pa(sh, e);
    }
    function Rg() {
      var e = ch(Hu.current);
      return e;
    }
    function z0(e) {
      ch(sh.current);
      var t = ch(Hu.current), a = gw(t, e.type);
      t !== a && (va(Rp, e, e), va(Hu, a, e));
    }
    function Tg(e) {
      Rp.current === e && (pa(Hu, e), pa(Rp, e));
    }
    var tR = 0, L0 = 1, A0 = 1, Tp = 2, ul = Lu(tR);
    function _g(e, t) {
      return (e & t) !== 0;
    }
    function Af(e) {
      return e & L0;
    }
    function kg(e, t) {
      return e & L0 | t;
    }
    function nR(e, t) {
      return e | t;
    }
    function Vu(e, t) {
      va(ul, t, e);
    }
    function Uf(e) {
      pa(ul, e);
    }
    function rR(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function fh(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === re) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || ZC(i) || qy(i))
              return t;
          }
        } else if (t.tag === et && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var o = (t.flags & tt) !== rt;
          if (o)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Wa = (
      /*   */
      0
    ), Er = (
      /* */
      1
    ), Wl = (
      /*  */
      2
    ), wr = (
      /*    */
      4
    ), Wr = (
      /*   */
      8
    ), Ng = [];
    function Dg() {
      for (var e = 0; e < Ng.length; e++) {
        var t = Ng[e];
        t._workInProgressVersionPrimary = null;
      }
      Ng.length = 0;
    }
    function aR(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var Ue = R.ReactCurrentDispatcher, _p = R.ReactCurrentBatchConfig, jg, Pf;
    jg = /* @__PURE__ */ new Set();
    var rc = ie, dn = null, Rr = null, Tr = null, dh = !1, kp = !1, Np = 0, iR = 0, lR = 25, J = null, Fi = null, Bu = -1, Og = !1;
    function ln() {
      {
        var e = J;
        Fi === null ? Fi = [e] : Fi.push(e);
      }
    }
    function Re() {
      {
        var e = J;
        Fi !== null && (Bu++, Fi[Bu] !== e && oR(e));
      }
    }
    function Ff(e) {
      e != null && !kt(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", J, typeof e);
    }
    function oR(e) {
      {
        var t = gt(dn);
        if (!jg.has(t) && (jg.add(t), Fi !== null)) {
          for (var a = "", i = 30, o = 0; o <= Bu; o++) {
            for (var s = Fi[o], f = o === Bu ? e : s, p = o + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          S(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function ma() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function Mg(e, t) {
      if (Og)
        return !1;
      if (t === null)
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", J), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, J, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!se(e[a], t[a]))
          return !1;
      return !0;
    }
    function Hf(e, t, a, i, o, s) {
      rc = s, dn = t, Fi = e !== null ? e._debugHookTypes : null, Bu = -1, Og = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = ie, e !== null && e.memoizedState !== null ? Ue.current = ax : Fi !== null ? Ue.current = rx : Ue.current = nx;
      var f = a(i, o);
      if (kp) {
        var p = 0;
        do {
          if (kp = !1, Np = 0, p >= lR)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, Og = !1, Rr = null, Tr = null, t.updateQueue = null, Bu = -1, Ue.current = ix, f = a(i, o);
        } while (kp);
      }
      Ue.current = Rh, t._debugHookTypes = Fi;
      var m = Rr !== null && Rr.next !== null;
      if (rc = ie, dn = null, Rr = null, Tr = null, J = null, Fi = null, Bu = -1, e !== null && (e.flags & Gn) !== (t.flags & Gn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & Dt) !== at && S("Internal React error: Expected static flag was missing. Please notify the React team."), dh = !1, m)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Vf() {
      var e = Np !== 0;
      return Np = 0, e;
    }
    function U0(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Kt) !== at ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = Ns(e.lanes, a);
    }
    function P0() {
      if (Ue.current = Rh, dh) {
        for (var e = dn.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        dh = !1;
      }
      rc = ie, dn = null, Rr = null, Tr = null, Fi = null, Bu = -1, J = null, K0 = !1, kp = !1, Np = 0;
    }
    function Ql() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Tr === null ? dn.memoizedState = Tr = e : Tr = Tr.next = e, Tr;
    }
    function Hi() {
      var e;
      if (Rr === null) {
        var t = dn.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = Rr.next;
      var a;
      if (Tr === null ? a = dn.memoizedState : a = Tr.next, a !== null)
        Tr = a, a = Tr.next, Rr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        Rr = e;
        var i = {
          memoizedState: Rr.memoizedState,
          baseState: Rr.baseState,
          baseQueue: Rr.baseQueue,
          queue: Rr.queue,
          next: null
        };
        Tr === null ? dn.memoizedState = Tr = i : Tr = Tr.next = i;
      }
      return Tr;
    }
    function F0() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function zg(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Lg(e, t, a) {
      var i = Ql(), o;
      a !== void 0 ? o = a(t) : o = t, i.memoizedState = i.baseState = o;
      var s = {
        pending: null,
        interleaved: null,
        lanes: ie,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: o
      };
      i.queue = s;
      var f = s.dispatch = fR.bind(null, dn, s);
      return [i.memoizedState, f];
    }
    function Ag(e, t, a) {
      var i = Hi(), o = i.queue;
      if (o === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      o.lastRenderedReducer = e;
      var s = Rr, f = s.baseQueue, p = o.pending;
      if (p !== null) {
        if (f !== null) {
          var m = f.next, C = p.next;
          f.next = C, p.next = m;
        }
        s.baseQueue !== f && S("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, o.pending = null;
      }
      if (f !== null) {
        var x = f.next, O = s.baseState, N = null, V = null, I = null, W = x;
        do {
          var je = W.lane;
          if (Mo(rc, je)) {
            if (I !== null) {
              var Ze = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Wt,
                action: W.action,
                hasEagerState: W.hasEagerState,
                eagerState: W.eagerState,
                next: null
              };
              I = I.next = Ze;
            }
            if (W.hasEagerState)
              O = W.eagerState;
            else {
              var It = W.action;
              O = e(O, It);
            }
          } else {
            var ut = {
              lane: je,
              action: W.action,
              hasEagerState: W.hasEagerState,
              eagerState: W.eagerState,
              next: null
            };
            I === null ? (V = I = ut, N = O) : I = I.next = ut, dn.lanes = Tt(dn.lanes, je), Xp(je);
          }
          W = W.next;
        } while (W !== null && W !== x);
        I === null ? N = O : I.next = V, se(O, i.memoizedState) || Pp(), i.memoizedState = O, i.baseState = N, i.baseQueue = I, o.lastRenderedState = O;
      }
      var Ut = o.interleaved;
      if (Ut !== null) {
        var U = Ut;
        do {
          var Q = U.lane;
          dn.lanes = Tt(dn.lanes, Q), Xp(Q), U = U.next;
        } while (U !== Ut);
      } else f === null && (o.lanes = ie);
      var P = o.dispatch;
      return [i.memoizedState, P];
    }
    function Ug(e, t, a) {
      var i = Hi(), o = i.queue;
      if (o === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      o.lastRenderedReducer = e;
      var s = o.dispatch, f = o.pending, p = i.memoizedState;
      if (f !== null) {
        o.pending = null;
        var m = f.next, C = m;
        do {
          var x = C.action;
          p = e(p, x), C = C.next;
        } while (C !== m);
        se(p, i.memoizedState) || Pp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), o.lastRenderedState = p;
      }
      return [p, s];
    }
    function SN(e, t, a) {
    }
    function CN(e, t, a) {
    }
    function Pg(e, t, a) {
      var i = dn, o = Ql(), s, f = Gr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Pf || s !== a() && (S("The result of getServerSnapshot should be cached to avoid an infinite loop"), Pf = !0);
      } else {
        if (s = t(), !Pf) {
          var p = t();
          se(s, p) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Pf = !0);
        }
        var m = Ih();
        if (m === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        rf(m, rc) || H0(i, t, s);
      }
      o.memoizedState = s;
      var C = {
        value: s,
        getSnapshot: t
      };
      return o.queue = C, yh(B0.bind(null, i, C, e), [e]), i.flags |= ra, Dp(Er | Wr, V0.bind(null, i, C, s, t), void 0, null), s;
    }
    function ph(e, t, a) {
      var i = dn, o = Hi(), s = t();
      if (!Pf) {
        var f = t();
        se(s, f) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Pf = !0);
      }
      var p = o.memoizedState, m = !se(p, s);
      m && (o.memoizedState = s, Pp());
      var C = o.queue;
      if (Op(B0.bind(null, i, C, e), [e]), C.getSnapshot !== t || m || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      Tr !== null && Tr.memoizedState.tag & Er) {
        i.flags |= ra, Dp(Er | Wr, V0.bind(null, i, C, s, t), void 0, null);
        var x = Ih();
        if (x === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        rf(x, rc) || H0(i, t, s);
      }
      return s;
    }
    function H0(e, t, a) {
      e.flags |= Su;
      var i = {
        getSnapshot: t,
        value: a
      }, o = dn.updateQueue;
      if (o === null)
        o = F0(), dn.updateQueue = o, o.stores = [i];
      else {
        var s = o.stores;
        s === null ? o.stores = [i] : s.push(i);
      }
    }
    function V0(e, t, a, i) {
      t.value = a, t.getSnapshot = i, $0(t) && I0(e);
    }
    function B0(e, t, a) {
      var i = function() {
        $0(t) && I0(e);
      };
      return a(i);
    }
    function $0(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !se(a, i);
      } catch {
        return !0;
      }
    }
    function I0(e) {
      var t = Ga(e, vt);
      t !== null && Dr(t, e, vt, vn);
    }
    function vh(e) {
      var t = Ql();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: ie,
        dispatch: null,
        lastRenderedReducer: zg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = dR.bind(null, dn, a);
      return [t.memoizedState, i];
    }
    function Fg(e) {
      return Ag(zg);
    }
    function Hg(e) {
      return Ug(zg);
    }
    function Dp(e, t, a, i) {
      var o = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = dn.updateQueue;
      if (s === null)
        s = F0(), dn.updateQueue = s, s.lastEffect = o.next = o;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = o.next = o;
        else {
          var p = f.next;
          f.next = o, o.next = p, s.lastEffect = o;
        }
      }
      return o;
    }
    function Vg(e) {
      var t = Ql();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function mh(e) {
      var t = Hi();
      return t.memoizedState;
    }
    function jp(e, t, a, i) {
      var o = Ql(), s = i === void 0 ? null : i;
      dn.flags |= e, o.memoizedState = Dp(Er | t, a, void 0, s);
    }
    function hh(e, t, a, i) {
      var o = Hi(), s = i === void 0 ? null : i, f = void 0;
      if (Rr !== null) {
        var p = Rr.memoizedState;
        if (f = p.destroy, s !== null) {
          var m = p.deps;
          if (Mg(s, m)) {
            o.memoizedState = Dp(t, a, f, s);
            return;
          }
        }
      }
      dn.flags |= e, o.memoizedState = Dp(Er | t, a, f, s);
    }
    function yh(e, t) {
      return (dn.mode & Kt) !== at ? jp(_i | ra | Dc, Wr, e, t) : jp(ra | Dc, Wr, e, t);
    }
    function Op(e, t) {
      return hh(ra, Wr, e, t);
    }
    function Bg(e, t) {
      return jp(Vt, Wl, e, t);
    }
    function gh(e, t) {
      return hh(Vt, Wl, e, t);
    }
    function $g(e, t) {
      var a = Vt;
      return a |= Xi, (dn.mode & Kt) !== at && (a |= Dl), jp(a, wr, e, t);
    }
    function Sh(e, t) {
      return hh(Vt, wr, e, t);
    }
    function Y0(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var o = t;
        o.hasOwnProperty("current") || S("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(o).join(", ") + "}");
        var s = e();
        return o.current = s, function() {
          o.current = null;
        };
      }
    }
    function Ig(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, o = Vt;
      return o |= Xi, (dn.mode & Kt) !== at && (o |= Dl), jp(o, wr, Y0.bind(null, t, e), i);
    }
    function Ch(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return hh(Vt, wr, Y0.bind(null, t, e), i);
    }
    function uR(e, t) {
    }
    var xh = uR;
    function Yg(e, t) {
      var a = Ql(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function bh(e, t) {
      var a = Hi(), i = t === void 0 ? null : t, o = a.memoizedState;
      if (o !== null && i !== null) {
        var s = o[1];
        if (Mg(i, s))
          return o[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function qg(e, t) {
      var a = Ql(), i = t === void 0 ? null : t, o = e();
      return a.memoizedState = [o, i], o;
    }
    function Eh(e, t) {
      var a = Hi(), i = t === void 0 ? null : t, o = a.memoizedState;
      if (o !== null && i !== null) {
        var s = o[1];
        if (Mg(i, s))
          return o[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function Gg(e) {
      var t = Ql();
      return t.memoizedState = e, e;
    }
    function q0(e) {
      var t = Hi(), a = Rr, i = a.memoizedState;
      return W0(t, i, e);
    }
    function G0(e) {
      var t = Hi();
      if (Rr === null)
        return t.memoizedState = e, e;
      var a = Rr.memoizedState;
      return W0(t, a, e);
    }
    function W0(e, t, a) {
      var i = !zd(rc);
      if (i) {
        if (!se(a, t)) {
          var o = Ud();
          dn.lanes = Tt(dn.lanes, o), Xp(o), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Pp()), e.memoizedState = a, a;
    }
    function sR(e, t, a) {
      var i = Ia();
      Xn(em(i, ji)), e(!0);
      var o = _p.transition;
      _p.transition = {};
      var s = _p.transition;
      _p.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Xn(i), _p.transition = o, o === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && G("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Wg() {
      var e = vh(!1), t = e[0], a = e[1], i = sR.bind(null, a), o = Ql();
      return o.memoizedState = i, [t, i];
    }
    function Q0() {
      var e = Fg(), t = e[0], a = Hi(), i = a.memoizedState;
      return [t, i];
    }
    function X0() {
      var e = Hg(), t = e[0], a = Hi(), i = a.memoizedState;
      return [t, i];
    }
    var K0 = !1;
    function cR() {
      return K0;
    }
    function Qg() {
      var e = Ql(), t = Ih(), a = t.identifierPrefix, i;
      if (Gr()) {
        var o = _1();
        i = ":" + a + "R" + o;
        var s = Np++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = iR++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function wh() {
      var e = Hi(), t = e.memoizedState;
      return t;
    }
    function fR(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Gu(e), o = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (J0(e))
        Z0(t, o);
      else {
        var s = _0(e, t, o, i);
        if (s !== null) {
          var f = Na();
          Dr(s, e, i, f), ex(s, t, i);
        }
      }
      tx(e, i);
    }
    function dR(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Gu(e), o = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (J0(e))
        Z0(t, o);
      else {
        var s = e.alternate;
        if (e.lanes === ie && (s === null || s.lanes === ie)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = Ue.current, Ue.current = sl;
            try {
              var m = t.lastRenderedState, C = f(m, a);
              if (o.hasEagerState = !0, o.eagerState = C, se(C, m)) {
                X1(e, t, o, i);
                return;
              }
            } catch {
            } finally {
              Ue.current = p;
            }
          }
        }
        var x = _0(e, t, o, i);
        if (x !== null) {
          var O = Na();
          Dr(x, e, i, O), ex(x, t, i);
        }
      }
      tx(e, i);
    }
    function J0(e) {
      var t = e.alternate;
      return e === dn || t !== null && t === dn;
    }
    function Z0(e, t) {
      kp = dh = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function ex(e, t, a) {
      if (Ad(a)) {
        var i = t.lanes;
        i = Pd(i, e.pendingLanes);
        var o = Tt(i, a);
        t.lanes = o, lf(e, o);
      }
    }
    function tx(e, t, a) {
      Ss(e, t);
    }
    var Rh = {
      readContext: vr,
      useCallback: ma,
      useContext: ma,
      useEffect: ma,
      useImperativeHandle: ma,
      useInsertionEffect: ma,
      useLayoutEffect: ma,
      useMemo: ma,
      useReducer: ma,
      useRef: ma,
      useState: ma,
      useDebugValue: ma,
      useDeferredValue: ma,
      useTransition: ma,
      useMutableSource: ma,
      useSyncExternalStore: ma,
      useId: ma,
      unstable_isNewReconciler: ce
    }, nx = null, rx = null, ax = null, ix = null, Xl = null, sl = null, Th = null;
    {
      var Xg = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, xt = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      nx = {
        readContext: function(e) {
          return vr(e);
        },
        useCallback: function(e, t) {
          return J = "useCallback", ln(), Ff(t), Yg(e, t);
        },
        useContext: function(e) {
          return J = "useContext", ln(), vr(e);
        },
        useEffect: function(e, t) {
          return J = "useEffect", ln(), Ff(t), yh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return J = "useImperativeHandle", ln(), Ff(a), Ig(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return J = "useInsertionEffect", ln(), Ff(t), Bg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", ln(), Ff(t), $g(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", ln(), Ff(t);
          var a = Ue.current;
          Ue.current = Xl;
          try {
            return qg(e, t);
          } finally {
            Ue.current = a;
          }
        },
        useReducer: function(e, t, a) {
          J = "useReducer", ln();
          var i = Ue.current;
          Ue.current = Xl;
          try {
            return Lg(e, t, a);
          } finally {
            Ue.current = i;
          }
        },
        useRef: function(e) {
          return J = "useRef", ln(), Vg(e);
        },
        useState: function(e) {
          J = "useState", ln();
          var t = Ue.current;
          Ue.current = Xl;
          try {
            return vh(e);
          } finally {
            Ue.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", ln(), void 0;
        },
        useDeferredValue: function(e) {
          return J = "useDeferredValue", ln(), Gg(e);
        },
        useTransition: function() {
          return J = "useTransition", ln(), Wg();
        },
        useMutableSource: function(e, t, a) {
          return J = "useMutableSource", ln(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return J = "useSyncExternalStore", ln(), Pg(e, t, a);
        },
        useId: function() {
          return J = "useId", ln(), Qg();
        },
        unstable_isNewReconciler: ce
      }, rx = {
        readContext: function(e) {
          return vr(e);
        },
        useCallback: function(e, t) {
          return J = "useCallback", Re(), Yg(e, t);
        },
        useContext: function(e) {
          return J = "useContext", Re(), vr(e);
        },
        useEffect: function(e, t) {
          return J = "useEffect", Re(), yh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return J = "useImperativeHandle", Re(), Ig(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return J = "useInsertionEffect", Re(), Bg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", Re(), $g(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", Re();
          var a = Ue.current;
          Ue.current = Xl;
          try {
            return qg(e, t);
          } finally {
            Ue.current = a;
          }
        },
        useReducer: function(e, t, a) {
          J = "useReducer", Re();
          var i = Ue.current;
          Ue.current = Xl;
          try {
            return Lg(e, t, a);
          } finally {
            Ue.current = i;
          }
        },
        useRef: function(e) {
          return J = "useRef", Re(), Vg(e);
        },
        useState: function(e) {
          J = "useState", Re();
          var t = Ue.current;
          Ue.current = Xl;
          try {
            return vh(e);
          } finally {
            Ue.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", Re(), void 0;
        },
        useDeferredValue: function(e) {
          return J = "useDeferredValue", Re(), Gg(e);
        },
        useTransition: function() {
          return J = "useTransition", Re(), Wg();
        },
        useMutableSource: function(e, t, a) {
          return J = "useMutableSource", Re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return J = "useSyncExternalStore", Re(), Pg(e, t, a);
        },
        useId: function() {
          return J = "useId", Re(), Qg();
        },
        unstable_isNewReconciler: ce
      }, ax = {
        readContext: function(e) {
          return vr(e);
        },
        useCallback: function(e, t) {
          return J = "useCallback", Re(), bh(e, t);
        },
        useContext: function(e) {
          return J = "useContext", Re(), vr(e);
        },
        useEffect: function(e, t) {
          return J = "useEffect", Re(), Op(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return J = "useImperativeHandle", Re(), Ch(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return J = "useInsertionEffect", Re(), gh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", Re(), Sh(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", Re();
          var a = Ue.current;
          Ue.current = sl;
          try {
            return Eh(e, t);
          } finally {
            Ue.current = a;
          }
        },
        useReducer: function(e, t, a) {
          J = "useReducer", Re();
          var i = Ue.current;
          Ue.current = sl;
          try {
            return Ag(e, t, a);
          } finally {
            Ue.current = i;
          }
        },
        useRef: function(e) {
          return J = "useRef", Re(), mh();
        },
        useState: function(e) {
          J = "useState", Re();
          var t = Ue.current;
          Ue.current = sl;
          try {
            return Fg(e);
          } finally {
            Ue.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", Re(), xh();
        },
        useDeferredValue: function(e) {
          return J = "useDeferredValue", Re(), q0(e);
        },
        useTransition: function() {
          return J = "useTransition", Re(), Q0();
        },
        useMutableSource: function(e, t, a) {
          return J = "useMutableSource", Re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return J = "useSyncExternalStore", Re(), ph(e, t);
        },
        useId: function() {
          return J = "useId", Re(), wh();
        },
        unstable_isNewReconciler: ce
      }, ix = {
        readContext: function(e) {
          return vr(e);
        },
        useCallback: function(e, t) {
          return J = "useCallback", Re(), bh(e, t);
        },
        useContext: function(e) {
          return J = "useContext", Re(), vr(e);
        },
        useEffect: function(e, t) {
          return J = "useEffect", Re(), Op(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return J = "useImperativeHandle", Re(), Ch(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return J = "useInsertionEffect", Re(), gh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", Re(), Sh(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", Re();
          var a = Ue.current;
          Ue.current = Th;
          try {
            return Eh(e, t);
          } finally {
            Ue.current = a;
          }
        },
        useReducer: function(e, t, a) {
          J = "useReducer", Re();
          var i = Ue.current;
          Ue.current = Th;
          try {
            return Ug(e, t, a);
          } finally {
            Ue.current = i;
          }
        },
        useRef: function(e) {
          return J = "useRef", Re(), mh();
        },
        useState: function(e) {
          J = "useState", Re();
          var t = Ue.current;
          Ue.current = Th;
          try {
            return Hg(e);
          } finally {
            Ue.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", Re(), xh();
        },
        useDeferredValue: function(e) {
          return J = "useDeferredValue", Re(), G0(e);
        },
        useTransition: function() {
          return J = "useTransition", Re(), X0();
        },
        useMutableSource: function(e, t, a) {
          return J = "useMutableSource", Re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return J = "useSyncExternalStore", Re(), ph(e, t);
        },
        useId: function() {
          return J = "useId", Re(), wh();
        },
        unstable_isNewReconciler: ce
      }, Xl = {
        readContext: function(e) {
          return Xg(), vr(e);
        },
        useCallback: function(e, t) {
          return J = "useCallback", xt(), ln(), Yg(e, t);
        },
        useContext: function(e) {
          return J = "useContext", xt(), ln(), vr(e);
        },
        useEffect: function(e, t) {
          return J = "useEffect", xt(), ln(), yh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return J = "useImperativeHandle", xt(), ln(), Ig(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return J = "useInsertionEffect", xt(), ln(), Bg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", xt(), ln(), $g(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", xt(), ln();
          var a = Ue.current;
          Ue.current = Xl;
          try {
            return qg(e, t);
          } finally {
            Ue.current = a;
          }
        },
        useReducer: function(e, t, a) {
          J = "useReducer", xt(), ln();
          var i = Ue.current;
          Ue.current = Xl;
          try {
            return Lg(e, t, a);
          } finally {
            Ue.current = i;
          }
        },
        useRef: function(e) {
          return J = "useRef", xt(), ln(), Vg(e);
        },
        useState: function(e) {
          J = "useState", xt(), ln();
          var t = Ue.current;
          Ue.current = Xl;
          try {
            return vh(e);
          } finally {
            Ue.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", xt(), ln(), void 0;
        },
        useDeferredValue: function(e) {
          return J = "useDeferredValue", xt(), ln(), Gg(e);
        },
        useTransition: function() {
          return J = "useTransition", xt(), ln(), Wg();
        },
        useMutableSource: function(e, t, a) {
          return J = "useMutableSource", xt(), ln(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return J = "useSyncExternalStore", xt(), ln(), Pg(e, t, a);
        },
        useId: function() {
          return J = "useId", xt(), ln(), Qg();
        },
        unstable_isNewReconciler: ce
      }, sl = {
        readContext: function(e) {
          return Xg(), vr(e);
        },
        useCallback: function(e, t) {
          return J = "useCallback", xt(), Re(), bh(e, t);
        },
        useContext: function(e) {
          return J = "useContext", xt(), Re(), vr(e);
        },
        useEffect: function(e, t) {
          return J = "useEffect", xt(), Re(), Op(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return J = "useImperativeHandle", xt(), Re(), Ch(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return J = "useInsertionEffect", xt(), Re(), gh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", xt(), Re(), Sh(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", xt(), Re();
          var a = Ue.current;
          Ue.current = sl;
          try {
            return Eh(e, t);
          } finally {
            Ue.current = a;
          }
        },
        useReducer: function(e, t, a) {
          J = "useReducer", xt(), Re();
          var i = Ue.current;
          Ue.current = sl;
          try {
            return Ag(e, t, a);
          } finally {
            Ue.current = i;
          }
        },
        useRef: function(e) {
          return J = "useRef", xt(), Re(), mh();
        },
        useState: function(e) {
          J = "useState", xt(), Re();
          var t = Ue.current;
          Ue.current = sl;
          try {
            return Fg(e);
          } finally {
            Ue.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", xt(), Re(), xh();
        },
        useDeferredValue: function(e) {
          return J = "useDeferredValue", xt(), Re(), q0(e);
        },
        useTransition: function() {
          return J = "useTransition", xt(), Re(), Q0();
        },
        useMutableSource: function(e, t, a) {
          return J = "useMutableSource", xt(), Re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return J = "useSyncExternalStore", xt(), Re(), ph(e, t);
        },
        useId: function() {
          return J = "useId", xt(), Re(), wh();
        },
        unstable_isNewReconciler: ce
      }, Th = {
        readContext: function(e) {
          return Xg(), vr(e);
        },
        useCallback: function(e, t) {
          return J = "useCallback", xt(), Re(), bh(e, t);
        },
        useContext: function(e) {
          return J = "useContext", xt(), Re(), vr(e);
        },
        useEffect: function(e, t) {
          return J = "useEffect", xt(), Re(), Op(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return J = "useImperativeHandle", xt(), Re(), Ch(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return J = "useInsertionEffect", xt(), Re(), gh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", xt(), Re(), Sh(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", xt(), Re();
          var a = Ue.current;
          Ue.current = sl;
          try {
            return Eh(e, t);
          } finally {
            Ue.current = a;
          }
        },
        useReducer: function(e, t, a) {
          J = "useReducer", xt(), Re();
          var i = Ue.current;
          Ue.current = sl;
          try {
            return Ug(e, t, a);
          } finally {
            Ue.current = i;
          }
        },
        useRef: function(e) {
          return J = "useRef", xt(), Re(), mh();
        },
        useState: function(e) {
          J = "useState", xt(), Re();
          var t = Ue.current;
          Ue.current = sl;
          try {
            return Hg(e);
          } finally {
            Ue.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", xt(), Re(), xh();
        },
        useDeferredValue: function(e) {
          return J = "useDeferredValue", xt(), Re(), G0(e);
        },
        useTransition: function() {
          return J = "useTransition", xt(), Re(), X0();
        },
        useMutableSource: function(e, t, a) {
          return J = "useMutableSource", xt(), Re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return J = "useSyncExternalStore", xt(), Re(), ph(e, t);
        },
        useId: function() {
          return J = "useId", xt(), Re(), wh();
        },
        unstable_isNewReconciler: ce
      };
    }
    var $u = w.unstable_now, lx = 0, _h = -1, Mp = -1, kh = -1, Kg = !1, Nh = !1;
    function ox() {
      return Kg;
    }
    function pR() {
      Nh = !0;
    }
    function vR() {
      Kg = !1, Nh = !1;
    }
    function mR() {
      Kg = Nh, Nh = !1;
    }
    function ux() {
      return lx;
    }
    function sx() {
      lx = $u();
    }
    function Jg(e) {
      Mp = $u(), e.actualStartTime < 0 && (e.actualStartTime = $u());
    }
    function cx(e) {
      Mp = -1;
    }
    function Dh(e, t) {
      if (Mp >= 0) {
        var a = $u() - Mp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Mp = -1;
      }
    }
    function Kl(e) {
      if (_h >= 0) {
        var t = $u() - _h;
        _h = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case A:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case Je:
              var o = a.stateNode;
              o.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function Zg(e) {
      if (kh >= 0) {
        var t = $u() - kh;
        kh = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case A:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case Je:
              var o = a.stateNode;
              o !== null && (o.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Jl() {
      _h = $u();
    }
    function eS() {
      kh = $u();
    }
    function tS(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function cl(e, t) {
      if (e && e.defaultProps) {
        var a = _t({}, t), i = e.defaultProps;
        for (var o in i)
          a[o] === void 0 && (a[o] = i[o]);
        return a;
      }
      return t;
    }
    var nS = {}, rS, aS, iS, lS, oS, fx, jh, uS, sS, cS, zp;
    {
      rS = /* @__PURE__ */ new Set(), aS = /* @__PURE__ */ new Set(), iS = /* @__PURE__ */ new Set(), lS = /* @__PURE__ */ new Set(), uS = /* @__PURE__ */ new Set(), oS = /* @__PURE__ */ new Set(), sS = /* @__PURE__ */ new Set(), cS = /* @__PURE__ */ new Set(), zp = /* @__PURE__ */ new Set();
      var dx = /* @__PURE__ */ new Set();
      jh = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          dx.has(a) || (dx.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, fx = function(e, t) {
        if (t === void 0) {
          var a = Yt(e) || "Component";
          oS.has(a) || (oS.add(a), S("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(nS, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(nS);
    }
    function fS(e, t, a, i) {
      var o = e.memoizedState, s = a(i, o);
      {
        if (e.mode & fn) {
          _n(!0);
          try {
            s = a(i, o);
          } finally {
            _n(!1);
          }
        }
        fx(t, s);
      }
      var f = s == null ? o : _t({}, o, s);
      if (e.memoizedState = f, e.lanes === ie) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var dS = {
      isMounted: Pv,
      enqueueSetState: function(e, t, a) {
        var i = gu(e), o = Na(), s = Gu(i), f = Yo(o, s);
        f.payload = t, a != null && (jh(a, "setState"), f.callback = a);
        var p = Fu(i, f, s);
        p !== null && (Dr(p, i, s, o), lh(p, i, s)), Ss(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = gu(e), o = Na(), s = Gu(i), f = Yo(o, s);
        f.tag = N0, f.payload = t, a != null && (jh(a, "replaceState"), f.callback = a);
        var p = Fu(i, f, s);
        p !== null && (Dr(p, i, s, o), lh(p, i, s)), Ss(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = gu(e), i = Na(), o = Gu(a), s = Yo(i, o);
        s.tag = rh, t != null && (jh(t, "forceUpdate"), s.callback = t);
        var f = Fu(a, s, o);
        f !== null && (Dr(f, a, o, i), lh(f, a, o)), Uc(a, o);
      }
    };
    function px(e, t, a, i, o, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var m = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & fn) {
            _n(!0);
            try {
              m = p.shouldComponentUpdate(i, s, f);
            } finally {
              _n(!1);
            }
          }
          m === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Yt(t) || "Component");
        }
        return m;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !qe(a, i) || !qe(o, s) : !0;
    }
    function hR(e, t, a) {
      var i = e.stateNode;
      {
        var o = Yt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", o) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", o)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", o), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", o), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", o), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", o), t.childContextTypes && !zp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & fn) === at && (zp.add(t), S(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, o)), t.contextTypes && !zp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & fn) === at && (zp.add(t), S(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, o)), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", o), t.contextType && t.contextTypes && !sS.has(t) && (sS.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", o)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", o), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Yt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", o), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", o), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", o), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", o);
        var f = i.props !== a;
        i.props !== void 0 && f && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", o, o), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", o, o), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !iS.has(t) && (iS.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Yt(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", o), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", o);
        var p = i.state;
        p && (typeof p != "object" || kt(p)) && S("%s.state: must be set to an object or null", o), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", o);
      }
    }
    function vx(e, t) {
      t.updater = dS, e.stateNode = t, So(t, e), t._reactInternalInstance = nS;
    }
    function mx(e, t, a) {
      var i = !1, o = pi, s = pi, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === T && f._context === void 0
        );
        if (!p && !cS.has(t)) {
          cS.add(t);
          var m = "";
          f === void 0 ? m = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? m = " However, it is set to a " + typeof f + "." : f.$$typeof === gi ? m = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? m = " Did you accidentally pass the Context.Consumer instead?" : m = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Yt(t) || "Component", m);
        }
      }
      if (typeof f == "object" && f !== null)
        s = vr(f);
      else {
        o = _f(e, t, !0);
        var C = t.contextTypes;
        i = C != null, s = i ? kf(e, o) : pi;
      }
      var x = new t(a, s);
      if (e.mode & fn) {
        _n(!0);
        try {
          x = new t(a, s);
        } finally {
          _n(!1);
        }
      }
      var O = e.memoizedState = x.state !== null && x.state !== void 0 ? x.state : null;
      vx(e, x);
      {
        if (typeof t.getDerivedStateFromProps == "function" && O === null) {
          var N = Yt(t) || "Component";
          aS.has(N) || (aS.add(N), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", N, x.state === null ? "null" : "undefined", N));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof x.getSnapshotBeforeUpdate == "function") {
          var V = null, I = null, W = null;
          if (typeof x.componentWillMount == "function" && x.componentWillMount.__suppressDeprecationWarning !== !0 ? V = "componentWillMount" : typeof x.UNSAFE_componentWillMount == "function" && (V = "UNSAFE_componentWillMount"), typeof x.componentWillReceiveProps == "function" && x.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? I = "componentWillReceiveProps" : typeof x.UNSAFE_componentWillReceiveProps == "function" && (I = "UNSAFE_componentWillReceiveProps"), typeof x.componentWillUpdate == "function" && x.componentWillUpdate.__suppressDeprecationWarning !== !0 ? W = "componentWillUpdate" : typeof x.UNSAFE_componentWillUpdate == "function" && (W = "UNSAFE_componentWillUpdate"), V !== null || I !== null || W !== null) {
            var je = Yt(t) || "Component", ut = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            lS.has(je) || (lS.add(je), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, je, ut, V !== null ? `
  ` + V : "", I !== null ? `
  ` + I : "", W !== null ? `
  ` + W : ""));
          }
        }
      }
      return i && a0(e, o, s), x;
    }
    function yR(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", gt(e) || "Component"), dS.enqueueReplaceState(t, t.state, null));
    }
    function hx(e, t, a, i) {
      var o = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== o) {
        {
          var s = gt(e) || "Component";
          rS.has(s) || (rS.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        dS.enqueueReplaceState(t, t.state, null);
      }
    }
    function pS(e, t, a, i) {
      hR(e, t, a);
      var o = e.stateNode;
      o.props = a, o.state = e.memoizedState, o.refs = {}, bg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        o.context = vr(s);
      else {
        var f = _f(e, t, !0);
        o.context = kf(e, f);
      }
      {
        if (o.state === a) {
          var p = Yt(t) || "Component";
          uS.has(p) || (uS.add(p), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & fn && ol.recordLegacyContextWarning(e, o), ol.recordUnsafeLifecycleWarnings(e, o);
      }
      o.state = e.memoizedState;
      var m = t.getDerivedStateFromProps;
      if (typeof m == "function" && (fS(e, t, m, a), o.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof o.getSnapshotBeforeUpdate != "function" && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function") && (yR(e, o), oh(e, a, o, i), o.state = e.memoizedState), typeof o.componentDidMount == "function") {
        var C = Vt;
        C |= Xi, (e.mode & Kt) !== at && (C |= Dl), e.flags |= C;
      }
    }
    function gR(e, t, a, i) {
      var o = e.stateNode, s = e.memoizedProps;
      o.props = s;
      var f = o.context, p = t.contextType, m = pi;
      if (typeof p == "object" && p !== null)
        m = vr(p);
      else {
        var C = _f(e, t, !0);
        m = kf(e, C);
      }
      var x = t.getDerivedStateFromProps, O = typeof x == "function" || typeof o.getSnapshotBeforeUpdate == "function";
      !O && (typeof o.UNSAFE_componentWillReceiveProps == "function" || typeof o.componentWillReceiveProps == "function") && (s !== a || f !== m) && hx(e, o, a, m), j0();
      var N = e.memoizedState, V = o.state = N;
      if (oh(e, a, o, i), V = e.memoizedState, s === a && N === V && !Bm() && !uh()) {
        if (typeof o.componentDidMount == "function") {
          var I = Vt;
          I |= Xi, (e.mode & Kt) !== at && (I |= Dl), e.flags |= I;
        }
        return !1;
      }
      typeof x == "function" && (fS(e, t, x, a), V = e.memoizedState);
      var W = uh() || px(e, t, s, a, N, V, m);
      if (W) {
        if (!O && (typeof o.UNSAFE_componentWillMount == "function" || typeof o.componentWillMount == "function") && (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function") {
          var je = Vt;
          je |= Xi, (e.mode & Kt) !== at && (je |= Dl), e.flags |= je;
        }
      } else {
        if (typeof o.componentDidMount == "function") {
          var ut = Vt;
          ut |= Xi, (e.mode & Kt) !== at && (ut |= Dl), e.flags |= ut;
        }
        e.memoizedProps = a, e.memoizedState = V;
      }
      return o.props = a, o.state = V, o.context = m, W;
    }
    function SR(e, t, a, i, o) {
      var s = t.stateNode;
      D0(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : cl(t.type, f);
      s.props = p;
      var m = t.pendingProps, C = s.context, x = a.contextType, O = pi;
      if (typeof x == "object" && x !== null)
        O = vr(x);
      else {
        var N = _f(t, a, !0);
        O = kf(t, N);
      }
      var V = a.getDerivedStateFromProps, I = typeof V == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !I && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== m || C !== O) && hx(t, s, i, O), j0();
      var W = t.memoizedState, je = s.state = W;
      if (oh(t, i, s, o), je = t.memoizedState, f === m && W === je && !Bm() && !uh() && !Le)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || W !== e.memoizedState) && (t.flags |= Vt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || W !== e.memoizedState) && (t.flags |= nr), !1;
      typeof V == "function" && (fS(t, a, V, i), je = t.memoizedState);
      var ut = uh() || px(t, a, p, i, W, je, O) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Le;
      return ut ? (!I && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, je, O), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, je, O)), typeof s.componentDidUpdate == "function" && (t.flags |= Vt), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= nr)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || W !== e.memoizedState) && (t.flags |= Vt), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || W !== e.memoizedState) && (t.flags |= nr), t.memoizedProps = i, t.memoizedState = je), s.props = i, s.state = je, s.context = O, ut;
    }
    function ac(e, t) {
      return {
        value: e,
        source: t,
        stack: Ii(t),
        digest: null
      };
    }
    function vS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function CR(e, t) {
      return !0;
    }
    function mS(e, t) {
      try {
        var a = CR(e, t);
        if (a === !1)
          return;
        var i = t.value, o = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === X)
            return;
          console.error(i);
        }
        var p = o ? gt(o) : null, m = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", C;
        if (e.tag === A)
          C = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var x = gt(e) || "Anonymous";
          C = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + x + ".");
        }
        var O = m + `
` + f + `

` + ("" + C);
        console.error(O);
      } catch (N) {
        setTimeout(function() {
          throw N;
        });
      }
    }
    var xR = typeof WeakMap == "function" ? WeakMap : Map;
    function yx(e, t, a) {
      var i = Yo(vn, a);
      i.tag = Cg, i.payload = {
        element: null
      };
      var o = t.value;
      return i.callback = function() {
        p_(o), mS(e, t);
      }, i;
    }
    function hS(e, t, a) {
      var i = Yo(vn, a);
      i.tag = Cg;
      var o = e.type.getDerivedStateFromError;
      if (typeof o == "function") {
        var s = t.value;
        i.payload = function() {
          return o(s);
        }, i.callback = function() {
          kb(e), mS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        kb(e), mS(e, t), typeof o != "function" && f_(this);
        var m = t.value, C = t.stack;
        this.componentDidCatch(m, {
          componentStack: C !== null ? C : ""
        }), typeof o != "function" && (sa(e.lanes, vt) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", gt(e) || "Unknown"));
      }), i;
    }
    function gx(e, t, a) {
      var i = e.pingCache, o;
      if (i === null ? (i = e.pingCache = new xR(), o = /* @__PURE__ */ new Set(), i.set(t, o)) : (o = i.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(t, o))), !o.has(a)) {
        o.add(a);
        var s = v_.bind(null, e, t, a);
        oa && Kp(e, a), t.then(s, s);
      }
    }
    function bR(e, t, a, i) {
      var o = e.updateQueue;
      if (o === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        o.add(a);
    }
    function ER(e, t) {
      var a = e.tag;
      if ((e.mode & Dt) === at && (a === F || a === pe || a === ae)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function Sx(e) {
      var t = e;
      do {
        if (t.tag === re && rR(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function Cx(e, t, a, i, o) {
      if ((e.mode & Dt) === at) {
        if (e === t)
          e.flags |= cr;
        else {
          if (e.flags |= tt, a.flags |= Nc, a.flags &= -52805, a.tag === X) {
            var s = a.alternate;
            if (s === null)
              a.tag = de;
            else {
              var f = Yo(vn, vt);
              f.tag = rh, Fu(a, f, vt);
            }
          }
          a.lanes = Tt(a.lanes, vt);
        }
        return e;
      }
      return e.flags |= cr, e.lanes = o, e;
    }
    function wR(e, t, a, i, o) {
      if (a.flags |= ps, oa && Kp(e, o), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        ER(a), Gr() && a.mode & Dt && f0();
        var f = Sx(t);
        if (f !== null) {
          f.flags &= ~jr, Cx(f, t, a, e, o), f.mode & Dt && gx(e, s, o), bR(f, e, s);
          return;
        } else {
          if (!qv(o)) {
            gx(e, s, o), QS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (Gr() && a.mode & Dt) {
        f0();
        var m = Sx(t);
        if (m !== null) {
          (m.flags & cr) === rt && (m.flags |= jr), Cx(m, t, a, e, o), ug(ac(i, a));
          return;
        }
      }
      i = ac(i, a), r_(i);
      var C = t;
      do {
        switch (C.tag) {
          case A: {
            var x = i;
            C.flags |= cr;
            var O = ks(o);
            C.lanes = Tt(C.lanes, O);
            var N = yx(C, x, O);
            Eg(C, N);
            return;
          }
          case X:
            var V = i, I = C.type, W = C.stateNode;
            if ((C.flags & tt) === rt && (typeof I.getDerivedStateFromError == "function" || W !== null && typeof W.componentDidCatch == "function" && !Sb(W))) {
              C.flags |= cr;
              var je = ks(o);
              C.lanes = Tt(C.lanes, je);
              var ut = hS(C, V, je);
              Eg(C, ut);
              return;
            }
            break;
        }
        C = C.return;
      } while (C !== null);
    }
    function RR() {
      return null;
    }
    var Lp = R.ReactCurrentOwner, fl = !1, yS, Ap, gS, SS, CS, ic, xS, Oh, Up;
    yS = {}, Ap = {}, gS = {}, SS = {}, CS = {}, ic = !1, xS = {}, Oh = {}, Up = {};
    function _a(e, t, a, i) {
      e === null ? t.child = E0(t, null, a, i) : t.child = Of(t, e.child, a, i);
    }
    function TR(e, t, a, i) {
      t.child = Of(t, e.child, null, i), t.child = Of(t, null, a, i);
    }
    function xx(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && il(
          s,
          i,
          // Resolved props
          "prop",
          Yt(a)
        );
      }
      var f = a.render, p = t.ref, m, C;
      zf(t, o), Ea(t);
      {
        if (Lp.current = t, tr(!0), m = Hf(e, t, f, i, p, o), C = Vf(), t.mode & fn) {
          _n(!0);
          try {
            m = Hf(e, t, f, i, p, o), C = Vf();
          } finally {
            _n(!1);
          }
        }
        tr(!1);
      }
      return wa(), e !== null && !fl ? (U0(e, t, o), qo(e, t, o)) : (Gr() && C && ng(t), t.flags |= ui, _a(e, t, m, o), t.child);
    }
    function bx(e, t, a, i, o) {
      if (e === null) {
        var s = a.type;
        if (j_(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Qf(s), t.tag = ae, t.type = f, wS(t, s), Ex(e, t, f, i, o);
        }
        {
          var p = s.propTypes;
          if (p && il(
            p,
            i,
            // Resolved props
            "prop",
            Yt(s)
          ), a.defaultProps !== void 0) {
            var m = Yt(s) || "Unknown";
            Up[m] || (S("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", m), Up[m] = !0);
          }
        }
        var C = lC(a.type, null, i, t, t.mode, o);
        return C.ref = t.ref, C.return = t, t.child = C, C;
      }
      {
        var x = a.type, O = x.propTypes;
        O && il(
          O,
          i,
          // Resolved props
          "prop",
          Yt(x)
        );
      }
      var N = e.child, V = DS(e, o);
      if (!V) {
        var I = N.memoizedProps, W = a.compare;
        if (W = W !== null ? W : qe, W(I, i) && e.ref === t.ref)
          return qo(e, t, o);
      }
      t.flags |= ui;
      var je = cc(N, i);
      return je.ref = t.ref, je.return = t, t.child = je, je;
    }
    function Ex(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === Ct) {
          var f = s, p = f._payload, m = f._init;
          try {
            s = m(p);
          } catch {
            s = null;
          }
          var C = s && s.propTypes;
          C && il(
            C,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Yt(s)
          );
        }
      }
      if (e !== null) {
        var x = e.memoizedProps;
        if (qe(x, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (fl = !1, t.pendingProps = i = x, DS(e, o))
            (e.flags & Nc) !== rt && (fl = !0);
          else return t.lanes = e.lanes, qo(e, t, o);
      }
      return bS(e, t, a, i, o);
    }
    function wx(e, t, a) {
      var i = t.pendingProps, o = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || ge)
        if ((t.mode & Dt) === at) {
          var f = {
            baseLanes: ie,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, Yh(t, a);
        } else if (sa(a, ua)) {
          var O = {
            baseLanes: ie,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = O;
          var N = s !== null ? s.baseLanes : a;
          Yh(t, N);
        } else {
          var p = null, m;
          if (s !== null) {
            var C = s.baseLanes;
            m = Tt(C, a);
          } else
            m = a;
          t.lanes = t.childLanes = ua;
          var x = {
            baseLanes: m,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = x, t.updateQueue = null, Yh(t, m), null;
        }
      else {
        var V;
        s !== null ? (V = Tt(s.baseLanes, a), t.memoizedState = null) : V = a, Yh(t, V);
      }
      return _a(e, t, o, a), t.child;
    }
    function _R(e, t, a) {
      var i = t.pendingProps;
      return _a(e, t, i, a), t.child;
    }
    function kR(e, t, a) {
      var i = t.pendingProps.children;
      return _a(e, t, i, a), t.child;
    }
    function NR(e, t, a) {
      {
        t.flags |= Vt;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var o = t.pendingProps, s = o.children;
      return _a(e, t, s, a), t.child;
    }
    function Rx(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Mn, t.flags |= Cu);
    }
    function bS(e, t, a, i, o) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && il(
          s,
          i,
          // Resolved props
          "prop",
          Yt(a)
        );
      }
      var f;
      {
        var p = _f(t, a, !0);
        f = kf(t, p);
      }
      var m, C;
      zf(t, o), Ea(t);
      {
        if (Lp.current = t, tr(!0), m = Hf(e, t, a, i, f, o), C = Vf(), t.mode & fn) {
          _n(!0);
          try {
            m = Hf(e, t, a, i, f, o), C = Vf();
          } finally {
            _n(!1);
          }
        }
        tr(!1);
      }
      return wa(), e !== null && !fl ? (U0(e, t, o), qo(e, t, o)) : (Gr() && C && ng(t), t.flags |= ui, _a(e, t, m, o), t.child);
    }
    function Tx(e, t, a, i, o) {
      {
        switch (q_(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), m = p.state;
            s.updater.enqueueSetState(s, m, null);
            break;
          }
          case !0: {
            t.flags |= tt, t.flags |= cr;
            var C = new Error("Simulated error coming from DevTools"), x = ks(o);
            t.lanes = Tt(t.lanes, x);
            var O = hS(t, ac(C, t), x);
            Eg(t, O);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var N = a.propTypes;
          N && il(
            N,
            i,
            // Resolved props
            "prop",
            Yt(a)
          );
        }
      }
      var V;
      Gl(a) ? (V = !0, Im(t)) : V = !1, zf(t, o);
      var I = t.stateNode, W;
      I === null ? (zh(e, t), mx(t, a, i), pS(t, a, i, o), W = !0) : e === null ? W = gR(t, a, i, o) : W = SR(e, t, a, i, o);
      var je = ES(e, t, a, W, V, o);
      {
        var ut = t.stateNode;
        W && ut.props !== i && (ic || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", gt(t) || "a component"), ic = !0);
      }
      return je;
    }
    function ES(e, t, a, i, o, s) {
      Rx(e, t);
      var f = (t.flags & tt) !== rt;
      if (!i && !f)
        return o && o0(t, a, !1), qo(e, t, s);
      var p = t.stateNode;
      Lp.current = t;
      var m;
      if (f && typeof a.getDerivedStateFromError != "function")
        m = null, cx();
      else {
        Ea(t);
        {
          if (tr(!0), m = p.render(), t.mode & fn) {
            _n(!0);
            try {
              p.render();
            } finally {
              _n(!1);
            }
          }
          tr(!1);
        }
        wa();
      }
      return t.flags |= ui, e !== null && f ? TR(e, t, m, s) : _a(e, t, m, s), t.memoizedState = p.state, o && o0(t, a, !0), t.child;
    }
    function _x(e) {
      var t = e.stateNode;
      t.pendingContext ? i0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && i0(e, t.context, !1), wg(e, t.containerInfo);
    }
    function DR(e, t, a) {
      if (_x(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, o = t.memoizedState, s = o.element;
      D0(e, t), oh(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (o.isDehydrated) {
        var m = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, C = t.updateQueue;
        if (C.baseState = m, t.memoizedState = m, t.flags & jr) {
          var x = ac(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return kx(e, t, p, a, x);
        } else if (p !== s) {
          var O = ac(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return kx(e, t, p, a, O);
        } else {
          M1(t);
          var N = E0(t, null, p, a);
          t.child = N;
          for (var V = N; V; )
            V.flags = V.flags & ~Tn | aa, V = V.sibling;
        }
      } else {
        if (jf(), p === s)
          return qo(e, t, a);
        _a(e, t, p, a);
      }
      return t.child;
    }
    function kx(e, t, a, i, o) {
      return jf(), ug(o), t.flags |= jr, _a(e, t, a, i), t.child;
    }
    function jR(e, t, a) {
      z0(t), e === null && og(t);
      var i = t.type, o = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = o.children, p = By(i, o);
      return p ? f = null : s !== null && By(i, s) && (t.flags |= Pa), Rx(e, t), _a(e, t, f, a), t.child;
    }
    function OR(e, t) {
      return e === null && og(t), null;
    }
    function MR(e, t, a, i) {
      zh(e, t);
      var o = t.pendingProps, s = a, f = s._payload, p = s._init, m = p(f);
      t.type = m;
      var C = t.tag = O_(m), x = cl(m, o), O;
      switch (C) {
        case F:
          return wS(t, m), t.type = m = Qf(m), O = bS(null, t, m, x, i), O;
        case X:
          return t.type = m = eC(m), O = Tx(null, t, m, x, i), O;
        case pe:
          return t.type = m = tC(m), O = xx(null, t, m, x, i), O;
        case Y: {
          if (t.type !== t.elementType) {
            var N = m.propTypes;
            N && il(
              N,
              x,
              // Resolved for outer only
              "prop",
              Yt(m)
            );
          }
          return O = bx(
            null,
            t,
            m,
            cl(m.type, x),
            // The inner type can have defaults too
            i
          ), O;
        }
      }
      var V = "";
      throw m !== null && typeof m == "object" && m.$$typeof === Ct && (V = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + m + ". " + ("Lazy element type must resolve to a class or function." + V));
    }
    function zR(e, t, a, i, o) {
      zh(e, t), t.tag = X;
      var s;
      return Gl(a) ? (s = !0, Im(t)) : s = !1, zf(t, o), mx(t, a, i), pS(t, a, i, o), ES(null, t, a, !0, s, o);
    }
    function LR(e, t, a, i) {
      zh(e, t);
      var o = t.pendingProps, s;
      {
        var f = _f(t, a, !1);
        s = kf(t, f);
      }
      zf(t, i);
      var p, m;
      Ea(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var C = Yt(a) || "Unknown";
          yS[C] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", C, C), yS[C] = !0);
        }
        t.mode & fn && ol.recordLegacyContextWarning(t, null), tr(!0), Lp.current = t, p = Hf(null, t, a, o, s, i), m = Vf(), tr(!1);
      }
      if (wa(), t.flags |= ui, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var x = Yt(a) || "Unknown";
        Ap[x] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", x, x, x), Ap[x] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var O = Yt(a) || "Unknown";
          Ap[O] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", O, O, O), Ap[O] = !0);
        }
        t.tag = X, t.memoizedState = null, t.updateQueue = null;
        var N = !1;
        return Gl(a) ? (N = !0, Im(t)) : N = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, bg(t), vx(t, p), pS(t, a, o, i), ES(null, t, a, !0, N, i);
      } else {
        if (t.tag = F, t.mode & fn) {
          _n(!0);
          try {
            p = Hf(null, t, a, o, s, i), m = Vf();
          } finally {
            _n(!1);
          }
        }
        return Gr() && m && ng(t), _a(null, t, p, i), wS(t, a), t.child;
      }
    }
    function wS(e, t) {
      {
        if (t && t.childContextTypes && S("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Hr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var o = i || "", s = e._debugSource;
          s && (o = s.fileName + ":" + s.lineNumber), CS[o] || (CS[o] = !0, S("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = Yt(t) || "Unknown";
          Up[f] || (S("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), Up[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = Yt(t) || "Unknown";
          SS[p] || (S("%s: Function components do not support getDerivedStateFromProps.", p), SS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var m = Yt(t) || "Unknown";
          gS[m] || (S("%s: Function components do not support contextType.", m), gS[m] = !0);
        }
      }
    }
    var RS = {
      dehydrated: null,
      treeContext: null,
      retryLane: Wt
    };
    function TS(e) {
      return {
        baseLanes: e,
        cachePool: RR(),
        transitions: null
      };
    }
    function AR(e, t) {
      var a = null;
      return {
        baseLanes: Tt(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function UR(e, t, a, i) {
      if (t !== null) {
        var o = t.memoizedState;
        if (o === null)
          return !1;
      }
      return _g(e, Tp);
    }
    function PR(e, t) {
      return Ns(e.childLanes, t);
    }
    function Nx(e, t, a) {
      var i = t.pendingProps;
      G_(t) && (t.flags |= tt);
      var o = ul.current, s = !1, f = (t.flags & tt) !== rt;
      if (f || UR(o, e) ? (s = !0, t.flags &= ~tt) : (e === null || e.memoizedState !== null) && (o = nR(o, A0)), o = Af(o), Vu(t, o), e === null) {
        og(t);
        var p = t.memoizedState;
        if (p !== null) {
          var m = p.dehydrated;
          if (m !== null)
            return $R(t, m);
        }
        var C = i.children, x = i.fallback;
        if (s) {
          var O = FR(t, C, x, a), N = t.child;
          return N.memoizedState = TS(a), t.memoizedState = RS, O;
        } else
          return _S(t, C);
      } else {
        var V = e.memoizedState;
        if (V !== null) {
          var I = V.dehydrated;
          if (I !== null)
            return IR(e, t, f, i, I, V, a);
        }
        if (s) {
          var W = i.fallback, je = i.children, ut = VR(e, t, je, W, a), Ze = t.child, It = e.child.memoizedState;
          return Ze.memoizedState = It === null ? TS(a) : AR(It, a), Ze.childLanes = PR(e, a), t.memoizedState = RS, ut;
        } else {
          var Ut = i.children, U = HR(e, t, Ut, a);
          return t.memoizedState = null, U;
        }
      }
    }
    function _S(e, t, a) {
      var i = e.mode, o = {
        mode: "visible",
        children: t
      }, s = kS(o, i);
      return s.return = e, e.child = s, s;
    }
    function FR(e, t, a, i) {
      var o = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, m;
      return (o & Dt) === at && s !== null ? (p = s, p.childLanes = ie, p.pendingProps = f, e.mode & Xt && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), m = Qu(a, o, i, null)) : (p = kS(f, o), m = Qu(a, o, i, null)), p.return = e, m.return = e, p.sibling = m, e.child = p, m;
    }
    function kS(e, t, a) {
      return Db(e, t, ie, null);
    }
    function Dx(e, t) {
      return cc(e, t);
    }
    function HR(e, t, a, i) {
      var o = e.child, s = o.sibling, f = Dx(o, {
        mode: "visible",
        children: a
      });
      if ((t.mode & Dt) === at && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Ua) : p.push(s);
      }
      return t.child = f, f;
    }
    function VR(e, t, a, i, o) {
      var s = t.mode, f = e.child, p = f.sibling, m = {
        mode: "hidden",
        children: a
      }, C;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & Dt) === at && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var x = t.child;
        C = x, C.childLanes = ie, C.pendingProps = m, t.mode & Xt && (C.actualDuration = 0, C.actualStartTime = -1, C.selfBaseDuration = f.selfBaseDuration, C.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        C = Dx(f, m), C.subtreeFlags = f.subtreeFlags & Gn;
      var O;
      return p !== null ? O = cc(p, i) : (O = Qu(i, s, o, null), O.flags |= Tn), O.return = t, C.return = t, C.sibling = O, t.child = C, O;
    }
    function Mh(e, t, a, i) {
      i !== null && ug(i), Of(t, e.child, null, a);
      var o = t.pendingProps, s = o.children, f = _S(t, s);
      return f.flags |= Tn, t.memoizedState = null, f;
    }
    function BR(e, t, a, i, o) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = kS(f, s), m = Qu(i, s, o, null);
      return m.flags |= Tn, p.return = t, m.return = t, p.sibling = m, t.child = p, (t.mode & Dt) !== at && Of(t, e.child, null, o), m;
    }
    function $R(e, t, a) {
      return (e.mode & Dt) === at ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = vt) : qy(t) ? e.lanes = Or : e.lanes = ua, null;
    }
    function IR(e, t, a, i, o, s, f) {
      if (a)
        if (t.flags & jr) {
          t.flags &= ~jr;
          var U = vS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Mh(e, t, f, U);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= tt, null;
          var Q = i.children, P = i.fallback, he = BR(e, t, Q, P, f), Pe = t.child;
          return Pe.memoizedState = TS(f), t.memoizedState = RS, he;
        }
      else {
        if (j1(), (t.mode & Dt) === at)
          return Mh(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (qy(o)) {
          var p, m, C;
          {
            var x = Ww(o);
            p = x.digest, m = x.message, C = x.stack;
          }
          var O;
          m ? O = new Error(m) : O = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var N = vS(O, p, C);
          return Mh(e, t, f, N);
        }
        var V = sa(f, e.childLanes);
        if (fl || V) {
          var I = Ih();
          if (I !== null) {
            var W = Hd(I, f);
            if (W !== Wt && W !== s.retryLane) {
              s.retryLane = W;
              var je = vn;
              Ga(e, W), Dr(I, e, W, je);
            }
          }
          QS();
          var ut = vS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Mh(e, t, f, ut);
        } else if (ZC(o)) {
          t.flags |= tt, t.child = e.child;
          var Ze = m_.bind(null, e);
          return Qw(o, Ze), null;
        } else {
          z1(t, o, s.treeContext);
          var It = i.children, Ut = _S(t, It);
          return Ut.flags |= aa, Ut;
        }
      }
    }
    function jx(e, t, a) {
      e.lanes = Tt(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = Tt(i.lanes, t)), gg(e.return, t, a);
    }
    function YR(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === re) {
          var o = i.memoizedState;
          o !== null && jx(i, a, e);
        } else if (i.tag === et)
          jx(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function qR(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && fh(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function GR(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !xS[e])
        if (xS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              S('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          S('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function WR(e, t) {
      e !== void 0 && !Oh[e] && (e !== "collapsed" && e !== "hidden" ? (Oh[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Oh[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function Ox(e, t) {
      {
        var a = kt(e), i = !a && typeof wt(e) == "function";
        if (a || i) {
          var o = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", o, t, o), !1;
        }
      }
      return !0;
    }
    function QR(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (kt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!Ox(e[a], a))
              return;
        } else {
          var i = wt(e);
          if (typeof i == "function") {
            var o = i.call(e);
            if (o)
              for (var s = o.next(), f = 0; !s.done; s = o.next()) {
                if (!Ox(s.value, f))
                  return;
                f++;
              }
          } else
            S('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function NS(e, t, a, i, o) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: o
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = o);
    }
    function Mx(e, t, a) {
      var i = t.pendingProps, o = i.revealOrder, s = i.tail, f = i.children;
      GR(o), WR(s, o), QR(f, o), _a(e, t, f, a);
      var p = ul.current, m = _g(p, Tp);
      if (m)
        p = kg(p, Tp), t.flags |= tt;
      else {
        var C = e !== null && (e.flags & tt) !== rt;
        C && YR(t, t.child, a), p = Af(p);
      }
      if (Vu(t, p), (t.mode & Dt) === at)
        t.memoizedState = null;
      else
        switch (o) {
          case "forwards": {
            var x = qR(t.child), O;
            x === null ? (O = t.child, t.child = null) : (O = x.sibling, x.sibling = null), NS(
              t,
              !1,
              // isBackwards
              O,
              x,
              s
            );
            break;
          }
          case "backwards": {
            var N = null, V = t.child;
            for (t.child = null; V !== null; ) {
              var I = V.alternate;
              if (I !== null && fh(I) === null) {
                t.child = V;
                break;
              }
              var W = V.sibling;
              V.sibling = N, N = V, V = W;
            }
            NS(
              t,
              !0,
              // isBackwards
              N,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            NS(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function XR(e, t, a) {
      wg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Of(t, null, i, a) : _a(e, t, i, a), t.child;
    }
    var zx = !1;
    function KR(e, t, a) {
      var i = t.type, o = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || zx || (zx = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var m = t.type.propTypes;
        m && il(m, s, "prop", "Context.Provider");
      }
      if (T0(t, o, p), f !== null) {
        var C = f.value;
        if (se(C, p)) {
          if (f.children === s.children && !Bm())
            return qo(e, t, a);
        } else
          G1(t, o, a);
      }
      var x = s.children;
      return _a(e, t, x, a), t.child;
    }
    var Lx = !1;
    function JR(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (Lx || (Lx = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var o = t.pendingProps, s = o.children;
      typeof s != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), zf(t, a);
      var f = vr(i);
      Ea(t);
      var p;
      return Lp.current = t, tr(!0), p = s(f), tr(!1), wa(), t.flags |= ui, _a(e, t, p, a), t.child;
    }
    function Pp() {
      fl = !0;
    }
    function zh(e, t) {
      (t.mode & Dt) === at && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Tn);
    }
    function qo(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), cx(), Xp(t.lanes), sa(a, t.childLanes) ? (Y1(e, t), t.child) : null;
    }
    function ZR(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var o = i.child;
          if (o === null)
            throw new Error("Expected parent to have a child.");
          for (; o.sibling !== t; )
            if (o = o.sibling, o === null)
              throw new Error("Expected to find the previous sibling.");
          o.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= Ua) : s.push(e), a.flags |= Tn, a;
      }
    }
    function DS(e, t) {
      var a = e.lanes;
      return !!sa(a, t);
    }
    function eT(e, t, a) {
      switch (t.tag) {
        case A:
          _x(t), t.stateNode, jf();
          break;
        case fe:
          z0(t);
          break;
        case X: {
          var i = t.type;
          Gl(i) && Im(t);
          break;
        }
        case ve:
          wg(t, t.stateNode.containerInfo);
          break;
        case _e: {
          var o = t.memoizedProps.value, s = t.type._context;
          T0(t, s, o);
          break;
        }
        case Je:
          {
            var f = sa(a, t.childLanes);
            f && (t.flags |= Vt);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case re: {
          var m = t.memoizedState;
          if (m !== null) {
            if (m.dehydrated !== null)
              return Vu(t, Af(ul.current)), t.flags |= tt, null;
            var C = t.child, x = C.childLanes;
            if (sa(a, x))
              return Nx(e, t, a);
            Vu(t, Af(ul.current));
            var O = qo(e, t, a);
            return O !== null ? O.sibling : null;
          } else
            Vu(t, Af(ul.current));
          break;
        }
        case et: {
          var N = (e.flags & tt) !== rt, V = sa(a, t.childLanes);
          if (N) {
            if (V)
              return Mx(e, t, a);
            t.flags |= tt;
          }
          var I = t.memoizedState;
          if (I !== null && (I.rendering = null, I.tail = null, I.lastEffect = null), Vu(t, ul.current), V)
            break;
          return null;
        }
        case z:
        case Oe:
          return t.lanes = ie, wx(e, t, a);
      }
      return qo(e, t, a);
    }
    function Ax(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return ZR(e, t, lC(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, o = t.pendingProps;
        if (i !== o || Bm() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          fl = !0;
        else {
          var s = DS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & tt) === rt)
            return fl = !1, eT(e, t, a);
          (e.flags & Nc) !== rt ? fl = !0 : fl = !1;
        }
      } else if (fl = !1, Gr() && R1(t)) {
        var f = t.index, p = T1();
        c0(t, p, f);
      }
      switch (t.lanes = ie, t.tag) {
        case xe:
          return LR(e, t, t.type, a);
        case Me: {
          var m = t.elementType;
          return MR(e, t, m, a);
        }
        case F: {
          var C = t.type, x = t.pendingProps, O = t.elementType === C ? x : cl(C, x);
          return bS(e, t, C, O, a);
        }
        case X: {
          var N = t.type, V = t.pendingProps, I = t.elementType === N ? V : cl(N, V);
          return Tx(e, t, N, I, a);
        }
        case A:
          return DR(e, t, a);
        case fe:
          return jR(e, t, a);
        case He:
          return OR(e, t);
        case re:
          return Nx(e, t, a);
        case ve:
          return XR(e, t, a);
        case pe: {
          var W = t.type, je = t.pendingProps, ut = t.elementType === W ? je : cl(W, je);
          return xx(e, t, W, ut, a);
        }
        case ne:
          return _R(e, t, a);
        case Ie:
          return kR(e, t, a);
        case Je:
          return NR(e, t, a);
        case _e:
          return KR(e, t, a);
        case be:
          return JR(e, t, a);
        case Y: {
          var Ze = t.type, It = t.pendingProps, Ut = cl(Ze, It);
          if (t.type !== t.elementType) {
            var U = Ze.propTypes;
            U && il(
              U,
              Ut,
              // Resolved for outer only
              "prop",
              Yt(Ze)
            );
          }
          return Ut = cl(Ze.type, Ut), bx(e, t, Ze, Ut, a);
        }
        case ae:
          return Ex(e, t, t.type, t.pendingProps, a);
        case de: {
          var Q = t.type, P = t.pendingProps, he = t.elementType === Q ? P : cl(Q, P);
          return zR(e, t, Q, he, a);
        }
        case et:
          return Mx(e, t, a);
        case Xe:
          break;
        case z:
          return wx(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Bf(e) {
      e.flags |= Vt;
    }
    function Ux(e) {
      e.flags |= Mn, e.flags |= Cu;
    }
    var Px, jS, Fx, Hx;
    Px = function(e, t, a, i) {
      for (var o = t.child; o !== null; ) {
        if (o.tag === fe || o.tag === He)
          bw(e, o.stateNode);
        else if (o.tag !== ve) {
          if (o.child !== null) {
            o.child.return = o, o = o.child;
            continue;
          }
        }
        if (o === t)
          return;
        for (; o.sibling === null; ) {
          if (o.return === null || o.return === t)
            return;
          o = o.return;
        }
        o.sibling.return = o.return, o = o.sibling;
      }
    }, jS = function(e, t) {
    }, Fx = function(e, t, a, i, o) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = Rg(), m = ww(f, a, s, i, o, p);
        t.updateQueue = m, m && Bf(t);
      }
    }, Hx = function(e, t, a, i) {
      a !== i && Bf(t);
    };
    function Fp(e, t) {
      if (!Gr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var o = e.tail, s = null; o !== null; )
              o.alternate !== null && (s = o), o = o.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function Qr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = ie, i = rt;
      if (t) {
        if ((e.mode & Xt) !== at) {
          for (var m = e.selfBaseDuration, C = e.child; C !== null; )
            a = Tt(a, Tt(C.lanes, C.childLanes)), i |= C.subtreeFlags & Gn, i |= C.flags & Gn, m += C.treeBaseDuration, C = C.sibling;
          e.treeBaseDuration = m;
        } else
          for (var x = e.child; x !== null; )
            a = Tt(a, Tt(x.lanes, x.childLanes)), i |= x.subtreeFlags & Gn, i |= x.flags & Gn, x.return = e, x = x.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Xt) !== at) {
          for (var o = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = Tt(a, Tt(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, o += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = o, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = Tt(a, Tt(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function tT(e, t, a) {
      if (F1() && (t.mode & Dt) !== at && (t.flags & tt) === rt)
        return y0(t), jf(), t.flags |= jr | ps | cr, !1;
      var i = Qm(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (U1(t), Qr(t), (t.mode & Xt) !== at) {
            var o = a !== null;
            if (o) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (jf(), (t.flags & tt) === rt && (t.memoizedState = null), t.flags |= Vt, Qr(t), (t.mode & Xt) !== at) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return g0(), !0;
    }
    function Vx(e, t, a) {
      var i = t.pendingProps;
      switch (rg(t), t.tag) {
        case xe:
        case Me:
        case ae:
        case F:
        case pe:
        case ne:
        case Ie:
        case Je:
        case be:
        case Y:
          return Qr(t), null;
        case X: {
          var o = t.type;
          return Gl(o) && $m(t), Qr(t), null;
        }
        case A: {
          var s = t.stateNode;
          if (Lf(t), Zy(t), Dg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Qm(t);
            if (f)
              Bf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & jr) !== rt) && (t.flags |= nr, g0());
            }
          }
          return jS(e, t), Qr(t), null;
        }
        case fe: {
          Tg(t);
          var m = M0(), C = t.type;
          if (e !== null && t.stateNode != null)
            Fx(e, t, C, i, m), e.ref !== t.ref && Ux(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Qr(t), null;
            }
            var x = Rg(), O = Qm(t);
            if (O)
              L1(t, m, x) && Bf(t);
            else {
              var N = xw(C, i, m, x, t);
              Px(N, t, !1, !1), t.stateNode = N, Ew(N, C, i, m) && Bf(t);
            }
            t.ref !== null && Ux(t);
          }
          return Qr(t), null;
        }
        case He: {
          var V = i;
          if (e && t.stateNode != null) {
            var I = e.memoizedProps;
            Hx(e, t, I, V);
          } else {
            if (typeof V != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var W = M0(), je = Rg(), ut = Qm(t);
            ut ? A1(t) && Bf(t) : t.stateNode = Rw(V, W, je, t);
          }
          return Qr(t), null;
        }
        case re: {
          Uf(t);
          var Ze = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var It = tT(e, t, Ze);
            if (!It)
              return t.flags & cr ? t : null;
          }
          if ((t.flags & tt) !== rt)
            return t.lanes = a, (t.mode & Xt) !== at && tS(t), t;
          var Ut = Ze !== null, U = e !== null && e.memoizedState !== null;
          if (Ut !== U && Ut) {
            var Q = t.child;
            if (Q.flags |= qn, (t.mode & Dt) !== at) {
              var P = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              P || _g(ul.current, A0) ? n_() : QS();
            }
          }
          var he = t.updateQueue;
          if (he !== null && (t.flags |= Vt), Qr(t), (t.mode & Xt) !== at && Ut) {
            var Pe = t.child;
            Pe !== null && (t.treeBaseDuration -= Pe.treeBaseDuration);
          }
          return null;
        }
        case ve:
          return Lf(t), jS(e, t), e === null && g1(t.stateNode.containerInfo), Qr(t), null;
        case _e:
          var ze = t.type._context;
          return yg(ze, t), Qr(t), null;
        case de: {
          var mt = t.type;
          return Gl(mt) && $m(t), Qr(t), null;
        }
        case et: {
          Uf(t);
          var bt = t.memoizedState;
          if (bt === null)
            return Qr(t), null;
          var pn = (t.flags & tt) !== rt, Zt = bt.rendering;
          if (Zt === null)
            if (pn)
              Fp(bt, !1);
            else {
              var ir = a_() && (e === null || (e.flags & tt) === rt);
              if (!ir)
                for (var en = t.child; en !== null; ) {
                  var Zn = fh(en);
                  if (Zn !== null) {
                    pn = !0, t.flags |= tt, Fp(bt, !1);
                    var ha = Zn.updateQueue;
                    return ha !== null && (t.updateQueue = ha, t.flags |= Vt), t.subtreeFlags = rt, q1(t, a), Vu(t, kg(ul.current, Tp)), t.child;
                  }
                  en = en.sibling;
                }
              bt.tail !== null && rr() > ub() && (t.flags |= tt, pn = !0, Fp(bt, !1), t.lanes = jd);
            }
          else {
            if (!pn) {
              var ea = fh(Zt);
              if (ea !== null) {
                t.flags |= tt, pn = !0;
                var mi = ea.updateQueue;
                if (mi !== null && (t.updateQueue = mi, t.flags |= Vt), Fp(bt, !0), bt.tail === null && bt.tailMode === "hidden" && !Zt.alternate && !Gr())
                  return Qr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              rr() * 2 - bt.renderingStartTime > ub() && a !== ua && (t.flags |= tt, pn = !0, Fp(bt, !1), t.lanes = jd);
            }
            if (bt.isBackwards)
              Zt.sibling = t.child, t.child = Zt;
            else {
              var Da = bt.last;
              Da !== null ? Da.sibling = Zt : t.child = Zt, bt.last = Zt;
            }
          }
          if (bt.tail !== null) {
            var ja = bt.tail;
            bt.rendering = ja, bt.tail = ja.sibling, bt.renderingStartTime = rr(), ja.sibling = null;
            var ya = ul.current;
            return pn ? ya = kg(ya, Tp) : ya = Af(ya), Vu(t, ya), ja;
          }
          return Qr(t), null;
        }
        case Xe:
          break;
        case z:
        case Oe: {
          WS(t);
          var Ko = t.memoizedState, Xf = Ko !== null;
          if (e !== null) {
            var tv = e.memoizedState, to = tv !== null;
            to !== Xf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !ge && (t.flags |= qn);
          }
          return !Xf || (t.mode & Dt) === at ? Qr(t) : sa(eo, ua) && (Qr(t), t.subtreeFlags & (Tn | Vt) && (t.flags |= qn)), null;
        }
        case lt:
          return null;
        case ht:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function nT(e, t, a) {
      switch (rg(t), t.tag) {
        case X: {
          var i = t.type;
          Gl(i) && $m(t);
          var o = t.flags;
          return o & cr ? (t.flags = o & ~cr | tt, (t.mode & Xt) !== at && tS(t), t) : null;
        }
        case A: {
          t.stateNode, Lf(t), Zy(t), Dg();
          var s = t.flags;
          return (s & cr) !== rt && (s & tt) === rt ? (t.flags = s & ~cr | tt, t) : null;
        }
        case fe:
          return Tg(t), null;
        case re: {
          Uf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            jf();
          }
          var p = t.flags;
          return p & cr ? (t.flags = p & ~cr | tt, (t.mode & Xt) !== at && tS(t), t) : null;
        }
        case et:
          return Uf(t), null;
        case ve:
          return Lf(t), null;
        case _e:
          var m = t.type._context;
          return yg(m, t), null;
        case z:
        case Oe:
          return WS(t), null;
        case lt:
          return null;
        default:
          return null;
      }
    }
    function Bx(e, t, a) {
      switch (rg(t), t.tag) {
        case X: {
          var i = t.type.childContextTypes;
          i != null && $m(t);
          break;
        }
        case A: {
          t.stateNode, Lf(t), Zy(t), Dg();
          break;
        }
        case fe: {
          Tg(t);
          break;
        }
        case ve:
          Lf(t);
          break;
        case re:
          Uf(t);
          break;
        case et:
          Uf(t);
          break;
        case _e:
          var o = t.type._context;
          yg(o, t);
          break;
        case z:
        case Oe:
          WS(t);
          break;
      }
    }
    var $x = null;
    $x = /* @__PURE__ */ new Set();
    var Lh = !1, Xr = !1, rT = typeof WeakSet == "function" ? WeakSet : Set, Ge = null, $f = null, If = null;
    function aT(e) {
      Nl(null, function() {
        throw e;
      }), ds();
    }
    var iT = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Xt)
        try {
          Jl(), t.componentWillUnmount();
        } finally {
          Kl(e);
        }
      else
        t.componentWillUnmount();
    };
    function Ix(e, t) {
      try {
        Iu(wr, e);
      } catch (a) {
        Cn(e, t, a);
      }
    }
    function OS(e, t, a) {
      try {
        iT(e, a);
      } catch (i) {
        Cn(e, t, i);
      }
    }
    function lT(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        Cn(e, t, i);
      }
    }
    function Yx(e, t) {
      try {
        Gx(e);
      } catch (a) {
        Cn(e, t, a);
      }
    }
    function Yf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (Ke && St && e.mode & Xt)
              try {
                Jl(), i = a(null);
              } finally {
                Kl(e);
              }
            else
              i = a(null);
          } catch (o) {
            Cn(e, t, o);
          }
          typeof i == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", gt(e));
        } else
          a.current = null;
    }
    function Ah(e, t, a) {
      try {
        a();
      } catch (i) {
        Cn(e, t, i);
      }
    }
    var qx = !1;
    function oT(e, t) {
      Sw(e.containerInfo), Ge = t, uT();
      var a = qx;
      return qx = !1, a;
    }
    function uT() {
      for (; Ge !== null; ) {
        var e = Ge, t = e.child;
        (e.subtreeFlags & jl) !== rt && t !== null ? (t.return = e, Ge = t) : sT();
      }
    }
    function sT() {
      for (; Ge !== null; ) {
        var e = Ge;
        un(e);
        try {
          cT(e);
        } catch (a) {
          Cn(e, e.return, a);
        }
        Sn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ge = t;
          return;
        }
        Ge = e.return;
      }
    }
    function cT(e) {
      var t = e.alternate, a = e.flags;
      if ((a & nr) !== rt) {
        switch (un(e), e.tag) {
          case F:
          case pe:
          case ae:
            break;
          case X: {
            if (t !== null) {
              var i = t.memoizedProps, o = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !ic && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", gt(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", gt(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : cl(e.type, i), o);
              {
                var p = $x;
                f === void 0 && !p.has(e.type) && (p.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", gt(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case A: {
            {
              var m = e.stateNode;
              Iw(m.containerInfo);
            }
            break;
          }
          case fe:
          case He:
          case ve:
          case de:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        Sn();
      }
    }
    function dl(e, t, a) {
      var i = t.updateQueue, o = i !== null ? i.lastEffect : null;
      if (o !== null) {
        var s = o.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & Wr) !== Wa ? Zi(t) : (e & wr) !== Wa && ms(t), (e & Wl) !== Wa && Jp(!0), Ah(t, a, p), (e & Wl) !== Wa && Jp(!1), (e & Wr) !== Wa ? Ll() : (e & wr) !== Wa && Nd());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Iu(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var o = i.next, s = o;
        do {
          if ((s.tag & e) === e) {
            (e & Wr) !== Wa ? kd(t) : (e & wr) !== Wa && Lc(t);
            var f = s.create;
            (e & Wl) !== Wa && Jp(!0), s.destroy = f(), (e & Wl) !== Wa && Jp(!1), (e & Wr) !== Wa ? Vv() : (e & wr) !== Wa && Bv();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var m = void 0;
                (s.tag & wr) !== rt ? m = "useLayoutEffect" : (s.tag & Wl) !== rt ? m = "useInsertionEffect" : m = "useEffect";
                var C = void 0;
                p === null ? C = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? C = `

It looks like you wrote ` + m + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + m + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : C = " You returned: " + p, S("%s must not return anything besides a function, which is used for clean-up.%s", m, C);
              }
            }
          }
          s = s.next;
        } while (s !== o);
      }
    }
    function fT(e, t) {
      if ((t.flags & Vt) !== rt)
        switch (t.tag) {
          case Je: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, o = i.id, s = i.onPostCommit, f = ux(), p = t.alternate === null ? "mount" : "update";
            ox() && (p = "nested-update"), typeof s == "function" && s(o, p, a, f);
            var m = t.return;
            e: for (; m !== null; ) {
              switch (m.tag) {
                case A:
                  var C = m.stateNode;
                  C.passiveEffectDuration += a;
                  break e;
                case Je:
                  var x = m.stateNode;
                  x.passiveEffectDuration += a;
                  break e;
              }
              m = m.return;
            }
            break;
          }
        }
    }
    function dT(e, t, a, i) {
      if ((a.flags & Ml) !== rt)
        switch (a.tag) {
          case F:
          case pe:
          case ae: {
            if (!Xr)
              if (a.mode & Xt)
                try {
                  Jl(), Iu(wr | Er, a);
                } finally {
                  Kl(a);
                }
              else
                Iu(wr | Er, a);
            break;
          }
          case X: {
            var o = a.stateNode;
            if (a.flags & Vt && !Xr)
              if (t === null)
                if (a.type === a.elementType && !ic && (o.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", gt(a) || "instance"), o.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", gt(a) || "instance")), a.mode & Xt)
                  try {
                    Jl(), o.componentDidMount();
                  } finally {
                    Kl(a);
                  }
                else
                  o.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : cl(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !ic && (o.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", gt(a) || "instance"), o.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", gt(a) || "instance")), a.mode & Xt)
                  try {
                    Jl(), o.componentDidUpdate(s, f, o.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Kl(a);
                  }
                else
                  o.componentDidUpdate(s, f, o.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !ic && (o.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", gt(a) || "instance"), o.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", gt(a) || "instance")), O0(a, p, o));
            break;
          }
          case A: {
            var m = a.updateQueue;
            if (m !== null) {
              var C = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case fe:
                    C = a.child.stateNode;
                    break;
                  case X:
                    C = a.child.stateNode;
                    break;
                }
              O0(a, m, C);
            }
            break;
          }
          case fe: {
            var x = a.stateNode;
            if (t === null && a.flags & Vt) {
              var O = a.type, N = a.memoizedProps;
              Dw(x, O, N);
            }
            break;
          }
          case He:
            break;
          case ve:
            break;
          case Je: {
            {
              var V = a.memoizedProps, I = V.onCommit, W = V.onRender, je = a.stateNode.effectDuration, ut = ux(), Ze = t === null ? "mount" : "update";
              ox() && (Ze = "nested-update"), typeof W == "function" && W(a.memoizedProps.id, Ze, a.actualDuration, a.treeBaseDuration, a.actualStartTime, ut);
              {
                typeof I == "function" && I(a.memoizedProps.id, Ze, je, ut), s_(a);
                var It = a.return;
                e: for (; It !== null; ) {
                  switch (It.tag) {
                    case A:
                      var Ut = It.stateNode;
                      Ut.effectDuration += je;
                      break e;
                    case Je:
                      var U = It.stateNode;
                      U.effectDuration += je;
                      break e;
                  }
                  It = It.return;
                }
              }
            }
            break;
          }
          case re: {
            CT(e, a);
            break;
          }
          case et:
          case de:
          case Xe:
          case z:
          case Oe:
          case ht:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Xr || a.flags & Mn && Gx(a);
    }
    function pT(e) {
      switch (e.tag) {
        case F:
        case pe:
        case ae: {
          if (e.mode & Xt)
            try {
              Jl(), Ix(e, e.return);
            } finally {
              Kl(e);
            }
          else
            Ix(e, e.return);
          break;
        }
        case X: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && lT(e, e.return, t), Yx(e, e.return);
          break;
        }
        case fe: {
          Yx(e, e.return);
          break;
        }
      }
    }
    function vT(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === fe) {
          if (a === null) {
            a = i;
            try {
              var o = i.stateNode;
              t ? Hw(o) : Bw(i.stateNode, i.memoizedProps);
            } catch (f) {
              Cn(e, e.return, f);
            }
          }
        } else if (i.tag === He) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? Vw(s) : $w(s, i.memoizedProps);
            } catch (f) {
              Cn(e, e.return, f);
            }
        } else if (!((i.tag === z || i.tag === Oe) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function Gx(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case fe:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var o;
          if (e.mode & Xt)
            try {
              Jl(), o = t(i);
            } finally {
              Kl(e);
            }
          else
            o = t(i);
          typeof o == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", gt(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", gt(e)), t.current = i;
      }
    }
    function mT(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function Wx(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, Wx(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === fe) {
          var a = e.stateNode;
          a !== null && x1(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function hT(e) {
      for (var t = e.return; t !== null; ) {
        if (Qx(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Qx(e) {
      return e.tag === fe || e.tag === A || e.tag === ve;
    }
    function Xx(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || Qx(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== fe && t.tag !== He && t.tag !== nt; ) {
          if (t.flags & Tn || t.child === null || t.tag === ve)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & Tn))
          return t.stateNode;
      }
    }
    function yT(e) {
      var t = hT(e);
      switch (t.tag) {
        case fe: {
          var a = t.stateNode;
          t.flags & Pa && (JC(a), t.flags &= ~Pa);
          var i = Xx(e);
          zS(e, i, a);
          break;
        }
        case A:
        case ve: {
          var o = t.stateNode.containerInfo, s = Xx(e);
          MS(e, s, o);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function MS(e, t, a) {
      var i = e.tag, o = i === fe || i === He;
      if (o) {
        var s = e.stateNode;
        t ? Aw(a, s, t) : zw(a, s);
      } else if (i !== ve) {
        var f = e.child;
        if (f !== null) {
          MS(f, t, a);
          for (var p = f.sibling; p !== null; )
            MS(p, t, a), p = p.sibling;
        }
      }
    }
    function zS(e, t, a) {
      var i = e.tag, o = i === fe || i === He;
      if (o) {
        var s = e.stateNode;
        t ? Lw(a, s, t) : Mw(a, s);
      } else if (i !== ve) {
        var f = e.child;
        if (f !== null) {
          zS(f, t, a);
          for (var p = f.sibling; p !== null; )
            zS(p, t, a), p = p.sibling;
        }
      }
    }
    var Kr = null, pl = !1;
    function gT(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case fe: {
              Kr = i.stateNode, pl = !1;
              break e;
            }
            case A: {
              Kr = i.stateNode.containerInfo, pl = !0;
              break e;
            }
            case ve: {
              Kr = i.stateNode.containerInfo, pl = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Kr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        Kx(e, t, a), Kr = null, pl = !1;
      }
      mT(a);
    }
    function Yu(e, t, a) {
      for (var i = a.child; i !== null; )
        Kx(e, t, i), i = i.sibling;
    }
    function Kx(e, t, a) {
      switch (Rd(a), a.tag) {
        case fe:
          Xr || Yf(a, t);
        case He: {
          {
            var i = Kr, o = pl;
            Kr = null, Yu(e, t, a), Kr = i, pl = o, Kr !== null && (pl ? Pw(Kr, a.stateNode) : Uw(Kr, a.stateNode));
          }
          return;
        }
        case nt: {
          Kr !== null && (pl ? Fw(Kr, a.stateNode) : Yy(Kr, a.stateNode));
          return;
        }
        case ve: {
          {
            var s = Kr, f = pl;
            Kr = a.stateNode.containerInfo, pl = !0, Yu(e, t, a), Kr = s, pl = f;
          }
          return;
        }
        case F:
        case pe:
        case Y:
        case ae: {
          if (!Xr) {
            var p = a.updateQueue;
            if (p !== null) {
              var m = p.lastEffect;
              if (m !== null) {
                var C = m.next, x = C;
                do {
                  var O = x, N = O.destroy, V = O.tag;
                  N !== void 0 && ((V & Wl) !== Wa ? Ah(a, t, N) : (V & wr) !== Wa && (ms(a), a.mode & Xt ? (Jl(), Ah(a, t, N), Kl(a)) : Ah(a, t, N), Nd())), x = x.next;
                } while (x !== C);
              }
            }
          }
          Yu(e, t, a);
          return;
        }
        case X: {
          if (!Xr) {
            Yf(a, t);
            var I = a.stateNode;
            typeof I.componentWillUnmount == "function" && OS(a, t, I);
          }
          Yu(e, t, a);
          return;
        }
        case Xe: {
          Yu(e, t, a);
          return;
        }
        case z: {
          if (
            // TODO: Remove this dead flag
            a.mode & Dt
          ) {
            var W = Xr;
            Xr = W || a.memoizedState !== null, Yu(e, t, a), Xr = W;
          } else
            Yu(e, t, a);
          break;
        }
        default: {
          Yu(e, t, a);
          return;
        }
      }
    }
    function ST(e) {
      e.memoizedState;
    }
    function CT(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var o = i.memoizedState;
          if (o !== null) {
            var s = o.dehydrated;
            s !== null && a1(s);
          }
        }
      }
    }
    function Jx(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new rT()), t.forEach(function(i) {
          var o = h_.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), oa)
              if ($f !== null && If !== null)
                Kp(If, $f);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(o, o);
          }
        });
      }
    }
    function xT(e, t, a) {
      $f = a, If = e, un(t), Zx(t, e), un(t), $f = null, If = null;
    }
    function vl(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var o = 0; o < i.length; o++) {
          var s = i[o];
          try {
            gT(e, t, s);
          } catch (m) {
            Cn(s, t, m);
          }
        }
      var f = bl();
      if (t.subtreeFlags & Ol)
        for (var p = t.child; p !== null; )
          un(p), Zx(p, e), p = p.sibling;
      un(f);
    }
    function Zx(e, t, a) {
      var i = e.alternate, o = e.flags;
      switch (e.tag) {
        case F:
        case pe:
        case Y:
        case ae: {
          if (vl(t, e), Zl(e), o & Vt) {
            try {
              dl(Wl | Er, e, e.return), Iu(Wl | Er, e);
            } catch (mt) {
              Cn(e, e.return, mt);
            }
            if (e.mode & Xt) {
              try {
                Jl(), dl(wr | Er, e, e.return);
              } catch (mt) {
                Cn(e, e.return, mt);
              }
              Kl(e);
            } else
              try {
                dl(wr | Er, e, e.return);
              } catch (mt) {
                Cn(e, e.return, mt);
              }
          }
          return;
        }
        case X: {
          vl(t, e), Zl(e), o & Mn && i !== null && Yf(i, i.return);
          return;
        }
        case fe: {
          vl(t, e), Zl(e), o & Mn && i !== null && Yf(i, i.return);
          {
            if (e.flags & Pa) {
              var s = e.stateNode;
              try {
                JC(s);
              } catch (mt) {
                Cn(e, e.return, mt);
              }
            }
            if (o & Vt) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, m = i !== null ? i.memoizedProps : p, C = e.type, x = e.updateQueue;
                if (e.updateQueue = null, x !== null)
                  try {
                    jw(f, x, C, m, p, e);
                  } catch (mt) {
                    Cn(e, e.return, mt);
                  }
              }
            }
          }
          return;
        }
        case He: {
          if (vl(t, e), Zl(e), o & Vt) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var O = e.stateNode, N = e.memoizedProps, V = i !== null ? i.memoizedProps : N;
            try {
              Ow(O, V, N);
            } catch (mt) {
              Cn(e, e.return, mt);
            }
          }
          return;
        }
        case A: {
          if (vl(t, e), Zl(e), o & Vt && i !== null) {
            var I = i.memoizedState;
            if (I.isDehydrated)
              try {
                r1(t.containerInfo);
              } catch (mt) {
                Cn(e, e.return, mt);
              }
          }
          return;
        }
        case ve: {
          vl(t, e), Zl(e);
          return;
        }
        case re: {
          vl(t, e), Zl(e);
          var W = e.child;
          if (W.flags & qn) {
            var je = W.stateNode, ut = W.memoizedState, Ze = ut !== null;
            if (je.isHidden = Ze, Ze) {
              var It = W.alternate !== null && W.alternate.memoizedState !== null;
              It || t_();
            }
          }
          if (o & Vt) {
            try {
              ST(e);
            } catch (mt) {
              Cn(e, e.return, mt);
            }
            Jx(e);
          }
          return;
        }
        case z: {
          var Ut = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & Dt
          ) {
            var U = Xr;
            Xr = U || Ut, vl(t, e), Xr = U;
          } else
            vl(t, e);
          if (Zl(e), o & qn) {
            var Q = e.stateNode, P = e.memoizedState, he = P !== null, Pe = e;
            if (Q.isHidden = he, he && !Ut && (Pe.mode & Dt) !== at) {
              Ge = Pe;
              for (var ze = Pe.child; ze !== null; )
                Ge = ze, ET(ze), ze = ze.sibling;
            }
            vT(Pe, he);
          }
          return;
        }
        case et: {
          vl(t, e), Zl(e), o & Vt && Jx(e);
          return;
        }
        case Xe:
          return;
        default: {
          vl(t, e), Zl(e);
          return;
        }
      }
    }
    function Zl(e) {
      var t = e.flags;
      if (t & Tn) {
        try {
          yT(e);
        } catch (a) {
          Cn(e, e.return, a);
        }
        e.flags &= ~Tn;
      }
      t & aa && (e.flags &= ~aa);
    }
    function bT(e, t, a) {
      $f = a, If = t, Ge = e, eb(e, t, a), $f = null, If = null;
    }
    function eb(e, t, a) {
      for (var i = (e.mode & Dt) !== at; Ge !== null; ) {
        var o = Ge, s = o.child;
        if (o.tag === z && i) {
          var f = o.memoizedState !== null, p = f || Lh;
          if (p) {
            LS(e, t, a);
            continue;
          } else {
            var m = o.alternate, C = m !== null && m.memoizedState !== null, x = C || Xr, O = Lh, N = Xr;
            Lh = p, Xr = x, Xr && !N && (Ge = o, wT(o));
            for (var V = s; V !== null; )
              Ge = V, eb(
                V,
                // New root; bubble back up to here and stop.
                t,
                a
              ), V = V.sibling;
            Ge = o, Lh = O, Xr = N, LS(e, t, a);
            continue;
          }
        }
        (o.subtreeFlags & Ml) !== rt && s !== null ? (s.return = o, Ge = s) : LS(e, t, a);
      }
    }
    function LS(e, t, a) {
      for (; Ge !== null; ) {
        var i = Ge;
        if ((i.flags & Ml) !== rt) {
          var o = i.alternate;
          un(i);
          try {
            dT(t, o, i, a);
          } catch (f) {
            Cn(i, i.return, f);
          }
          Sn();
        }
        if (i === e) {
          Ge = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, Ge = s;
          return;
        }
        Ge = i.return;
      }
    }
    function ET(e) {
      for (; Ge !== null; ) {
        var t = Ge, a = t.child;
        switch (t.tag) {
          case F:
          case pe:
          case Y:
          case ae: {
            if (t.mode & Xt)
              try {
                Jl(), dl(wr, t, t.return);
              } finally {
                Kl(t);
              }
            else
              dl(wr, t, t.return);
            break;
          }
          case X: {
            Yf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && OS(t, t.return, i);
            break;
          }
          case fe: {
            Yf(t, t.return);
            break;
          }
          case z: {
            var o = t.memoizedState !== null;
            if (o) {
              tb(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Ge = a) : tb(e);
      }
    }
    function tb(e) {
      for (; Ge !== null; ) {
        var t = Ge;
        if (t === e) {
          Ge = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Ge = a;
          return;
        }
        Ge = t.return;
      }
    }
    function wT(e) {
      for (; Ge !== null; ) {
        var t = Ge, a = t.child;
        if (t.tag === z) {
          var i = t.memoizedState !== null;
          if (i) {
            nb(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Ge = a) : nb(e);
      }
    }
    function nb(e) {
      for (; Ge !== null; ) {
        var t = Ge;
        un(t);
        try {
          pT(t);
        } catch (i) {
          Cn(t, t.return, i);
        }
        if (Sn(), t === e) {
          Ge = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Ge = a;
          return;
        }
        Ge = t.return;
      }
    }
    function RT(e, t, a, i) {
      Ge = t, TT(t, e, a, i);
    }
    function TT(e, t, a, i) {
      for (; Ge !== null; ) {
        var o = Ge, s = o.child;
        (o.subtreeFlags & Ki) !== rt && s !== null ? (s.return = o, Ge = s) : _T(e, t, a, i);
      }
    }
    function _T(e, t, a, i) {
      for (; Ge !== null; ) {
        var o = Ge;
        if ((o.flags & ra) !== rt) {
          un(o);
          try {
            kT(t, o, a, i);
          } catch (f) {
            Cn(o, o.return, f);
          }
          Sn();
        }
        if (o === e) {
          Ge = null;
          return;
        }
        var s = o.sibling;
        if (s !== null) {
          s.return = o.return, Ge = s;
          return;
        }
        Ge = o.return;
      }
    }
    function kT(e, t, a, i) {
      switch (t.tag) {
        case F:
        case pe:
        case ae: {
          if (t.mode & Xt) {
            eS();
            try {
              Iu(Wr | Er, t);
            } finally {
              Zg(t);
            }
          } else
            Iu(Wr | Er, t);
          break;
        }
      }
    }
    function NT(e) {
      Ge = e, DT();
    }
    function DT() {
      for (; Ge !== null; ) {
        var e = Ge, t = e.child;
        if ((Ge.flags & Ua) !== rt) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var o = a[i];
              Ge = o, MT(o, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var p = f.sibling;
                    f.sibling = null, f = p;
                  } while (f !== null);
                }
              }
            }
            Ge = e;
          }
        }
        (e.subtreeFlags & Ki) !== rt && t !== null ? (t.return = e, Ge = t) : jT();
      }
    }
    function jT() {
      for (; Ge !== null; ) {
        var e = Ge;
        (e.flags & ra) !== rt && (un(e), OT(e), Sn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Ge = t;
          return;
        }
        Ge = e.return;
      }
    }
    function OT(e) {
      switch (e.tag) {
        case F:
        case pe:
        case ae: {
          e.mode & Xt ? (eS(), dl(Wr | Er, e, e.return), Zg(e)) : dl(Wr | Er, e, e.return);
          break;
        }
      }
    }
    function MT(e, t) {
      for (; Ge !== null; ) {
        var a = Ge;
        un(a), LT(a, t), Sn();
        var i = a.child;
        i !== null ? (i.return = a, Ge = i) : zT(e);
      }
    }
    function zT(e) {
      for (; Ge !== null; ) {
        var t = Ge, a = t.sibling, i = t.return;
        if (Wx(t), t === e) {
          Ge = null;
          return;
        }
        if (a !== null) {
          a.return = i, Ge = a;
          return;
        }
        Ge = i;
      }
    }
    function LT(e, t) {
      switch (e.tag) {
        case F:
        case pe:
        case ae: {
          e.mode & Xt ? (eS(), dl(Wr, e, t), Zg(e)) : dl(Wr, e, t);
          break;
        }
      }
    }
    function AT(e) {
      switch (e.tag) {
        case F:
        case pe:
        case ae: {
          try {
            Iu(wr | Er, e);
          } catch (a) {
            Cn(e, e.return, a);
          }
          break;
        }
        case X: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            Cn(e, e.return, a);
          }
          break;
        }
      }
    }
    function UT(e) {
      switch (e.tag) {
        case F:
        case pe:
        case ae: {
          try {
            Iu(Wr | Er, e);
          } catch (t) {
            Cn(e, e.return, t);
          }
          break;
        }
      }
    }
    function PT(e) {
      switch (e.tag) {
        case F:
        case pe:
        case ae: {
          try {
            dl(wr | Er, e, e.return);
          } catch (a) {
            Cn(e, e.return, a);
          }
          break;
        }
        case X: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && OS(e, e.return, t);
          break;
        }
      }
    }
    function FT(e) {
      switch (e.tag) {
        case F:
        case pe:
        case ae:
          try {
            dl(Wr | Er, e, e.return);
          } catch (t) {
            Cn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Hp = Symbol.for;
      Hp("selector.component"), Hp("selector.has_pseudo_class"), Hp("selector.role"), Hp("selector.test_id"), Hp("selector.text");
    }
    var HT = [];
    function VT() {
      HT.forEach(function(e) {
        return e();
      });
    }
    var BT = R.ReactCurrentActQueue;
    function $T(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function rb() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && BT.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var IT = Math.ceil, AS = R.ReactCurrentDispatcher, US = R.ReactCurrentOwner, Jr = R.ReactCurrentBatchConfig, ml = R.ReactCurrentActQueue, _r = (
      /*             */
      0
    ), ab = (
      /*               */
      1
    ), Zr = (
      /*                */
      2
    ), Vi = (
      /*                */
      4
    ), Go = 0, Vp = 1, lc = 2, Uh = 3, Bp = 4, ib = 5, PS = 6, $t = _r, ka = null, Bn = null, kr = ie, eo = ie, FS = Lu(ie), Nr = Go, $p = null, Ph = ie, Ip = ie, Fh = ie, Yp = null, Qa = null, HS = 0, lb = 500, ob = 1 / 0, YT = 500, Wo = null;
    function qp() {
      ob = rr() + YT;
    }
    function ub() {
      return ob;
    }
    var Hh = !1, VS = null, qf = null, oc = !1, qu = null, Gp = ie, BS = [], $S = null, qT = 50, Wp = 0, IS = null, YS = !1, Vh = !1, GT = 50, Gf = 0, Bh = null, Qp = vn, $h = ie, sb = !1;
    function Ih() {
      return ka;
    }
    function Na() {
      return ($t & (Zr | Vi)) !== _r ? rr() : (Qp !== vn || (Qp = rr()), Qp);
    }
    function Gu(e) {
      var t = e.mode;
      if ((t & Dt) === at)
        return vt;
      if (($t & Zr) !== _r && kr !== ie)
        return ks(kr);
      var a = B1() !== V1;
      if (a) {
        if (Jr.transition !== null) {
          var i = Jr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return $h === Wt && ($h = Ud()), $h;
      }
      var o = Ia();
      if (o !== Wt)
        return o;
      var s = Tw();
      return s;
    }
    function WT(e) {
      var t = e.mode;
      return (t & Dt) === at ? vt : Wv();
    }
    function Dr(e, t, a, i) {
      g_(), sb && S("useInsertionEffect must not schedule updates."), YS && (Vh = !0), wu(e, a, i), ($t & Zr) !== ie && e === ka ? x_(t) : (oa && js(e, t, a), b_(t), e === ka && (($t & Zr) === _r && (Ip = Tt(Ip, a)), Nr === Bp && Wu(e, kr)), Xa(e, i), a === vt && $t === _r && (t.mode & Dt) === at && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !ml.isBatchingLegacy && (qp(), s0()));
    }
    function QT(e, t, a) {
      var i = e.current;
      i.lanes = t, wu(e, t, a), Xa(e, a);
    }
    function XT(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        ($t & Zr) !== _r
      );
    }
    function Xa(e, t) {
      var a = e.callbackNode;
      tf(e, t);
      var i = ef(e, e === ka ? kr : ie);
      if (i === ie) {
        a !== null && Rb(a), e.callbackNode = null, e.callbackPriority = Wt;
        return;
      }
      var o = Pl(i), s = e.callbackPriority;
      if (s === o && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(ml.current !== null && a !== JS)) {
        a == null && s !== vt && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && Rb(a);
      var f;
      if (o === vt)
        e.tag === Au ? (ml.isBatchingLegacy !== null && (ml.didScheduleLegacyUpdate = !0), w1(db.bind(null, e))) : u0(db.bind(null, e)), ml.current !== null ? ml.current.push(Uu) : kw(function() {
          ($t & (Zr | Vi)) === _r && Uu();
        }), f = null;
      else {
        var p;
        switch (tm(i)) {
          case Br:
            p = vs;
            break;
          case ji:
            p = zl;
            break;
          case Ba:
            p = Ji;
            break;
          case $a:
            p = xo;
            break;
          default:
            p = Ji;
            break;
        }
        f = ZS(p, cb.bind(null, e));
      }
      e.callbackPriority = o, e.callbackNode = f;
    }
    function cb(e, t) {
      if (vR(), Qp = vn, $h = ie, ($t & (Zr | Vi)) !== _r)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Xo();
      if (i && e.callbackNode !== a)
        return null;
      var o = ef(e, e === ka ? kr : ie);
      if (o === ie)
        return null;
      var s = !rf(e, o) && !Gv(e, o) && !t, f = s ? l_(e, o) : qh(e, o);
      if (f !== Go) {
        if (f === lc) {
          var p = nf(e);
          p !== ie && (o = p, f = qS(e, p));
        }
        if (f === Vp) {
          var m = $p;
          throw uc(e, ie), Wu(e, o), Xa(e, rr()), m;
        }
        if (f === PS)
          Wu(e, o);
        else {
          var C = !rf(e, o), x = e.current.alternate;
          if (C && !JT(x)) {
            if (f = qh(e, o), f === lc) {
              var O = nf(e);
              O !== ie && (o = O, f = qS(e, O));
            }
            if (f === Vp) {
              var N = $p;
              throw uc(e, ie), Wu(e, o), Xa(e, rr()), N;
            }
          }
          e.finishedWork = x, e.finishedLanes = o, KT(e, f, o);
        }
      }
      return Xa(e, rr()), e.callbackNode === a ? cb.bind(null, e) : null;
    }
    function qS(e, t) {
      var a = Yp;
      if (of(e)) {
        var i = uc(e, t);
        i.flags |= jr, y1(e.containerInfo);
      }
      var o = qh(e, t);
      if (o !== lc) {
        var s = Qa;
        Qa = a, s !== null && fb(s);
      }
      return o;
    }
    function fb(e) {
      Qa === null ? Qa = e : Qa.push.apply(Qa, e);
    }
    function KT(e, t, a) {
      switch (t) {
        case Go:
        case Vp:
          throw new Error("Root did not complete. This is a bug in React.");
        case lc: {
          sc(e, Qa, Wo);
          break;
        }
        case Uh: {
          if (Wu(e, a), Oo(a) && // do not delay if we're inside an act() scope
          !Tb()) {
            var i = HS + lb - rr();
            if (i > 10) {
              var o = ef(e, ie);
              if (o !== ie)
                break;
              var s = e.suspendedLanes;
              if (!Mo(s, a)) {
                Na(), af(e, s);
                break;
              }
              e.timeoutHandle = $y(sc.bind(null, e, Qa, Wo), i);
              break;
            }
          }
          sc(e, Qa, Wo);
          break;
        }
        case Bp: {
          if (Wu(e, a), Ld(a))
            break;
          if (!Tb()) {
            var f = ci(e, a), p = f, m = rr() - p, C = y_(m) - m;
            if (C > 10) {
              e.timeoutHandle = $y(sc.bind(null, e, Qa, Wo), C);
              break;
            }
          }
          sc(e, Qa, Wo);
          break;
        }
        case ib: {
          sc(e, Qa, Wo);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function JT(e) {
      for (var t = e; ; ) {
        if (t.flags & Su) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var o = 0; o < i.length; o++) {
                var s = i[o], f = s.getSnapshot, p = s.value;
                try {
                  if (!se(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var m = t.child;
        if (t.subtreeFlags & Su && m !== null) {
          m.return = t, t = m;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function Wu(e, t) {
      t = Ns(t, Fh), t = Ns(t, Ip), Kv(e, t);
    }
    function db(e) {
      if (mR(), ($t & (Zr | Vi)) !== _r)
        throw new Error("Should not already be working.");
      Xo();
      var t = ef(e, ie);
      if (!sa(t, vt))
        return Xa(e, rr()), null;
      var a = qh(e, t);
      if (e.tag !== Au && a === lc) {
        var i = nf(e);
        i !== ie && (t = i, a = qS(e, i));
      }
      if (a === Vp) {
        var o = $p;
        throw uc(e, ie), Wu(e, t), Xa(e, rr()), o;
      }
      if (a === PS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, sc(e, Qa, Wo), Xa(e, rr()), null;
    }
    function ZT(e, t) {
      t !== ie && (lf(e, Tt(t, vt)), Xa(e, rr()), ($t & (Zr | Vi)) === _r && (qp(), Uu()));
    }
    function GS(e, t) {
      var a = $t;
      $t |= ab;
      try {
        return e(t);
      } finally {
        $t = a, $t === _r && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !ml.isBatchingLegacy && (qp(), s0());
      }
    }
    function e_(e, t, a, i, o) {
      var s = Ia(), f = Jr.transition;
      try {
        return Jr.transition = null, Xn(Br), e(t, a, i, o);
      } finally {
        Xn(s), Jr.transition = f, $t === _r && qp();
      }
    }
    function Qo(e) {
      qu !== null && qu.tag === Au && ($t & (Zr | Vi)) === _r && Xo();
      var t = $t;
      $t |= ab;
      var a = Jr.transition, i = Ia();
      try {
        return Jr.transition = null, Xn(Br), e ? e() : void 0;
      } finally {
        Xn(i), Jr.transition = a, $t = t, ($t & (Zr | Vi)) === _r && Uu();
      }
    }
    function pb() {
      return ($t & (Zr | Vi)) !== _r;
    }
    function Yh(e, t) {
      va(FS, eo, e), eo = Tt(eo, t);
    }
    function WS(e) {
      eo = FS.current, pa(FS, e);
    }
    function uc(e, t) {
      e.finishedWork = null, e.finishedLanes = ie;
      var a = e.timeoutHandle;
      if (a !== Iy && (e.timeoutHandle = Iy, _w(a)), Bn !== null)
        for (var i = Bn.return; i !== null; ) {
          var o = i.alternate;
          Bx(o, i), i = i.return;
        }
      ka = e;
      var s = cc(e.current, null);
      return Bn = s, kr = eo = t, Nr = Go, $p = null, Ph = ie, Ip = ie, Fh = ie, Yp = null, Qa = null, Q1(), ol.discardPendingWarnings(), s;
    }
    function vb(e, t) {
      do {
        var a = Bn;
        try {
          if (th(), P0(), Sn(), US.current = null, a === null || a.return === null) {
            Nr = Vp, $p = t, Bn = null;
            return;
          }
          if (Ke && a.mode & Xt && Dh(a, !0), Ve)
            if (wa(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              Di(a, i, kr);
            } else
              hs(a, t, kr);
          wR(e, a.return, a, t, kr), gb(a);
        } catch (o) {
          t = o, Bn === a && a !== null ? (a = a.return, Bn = a) : a = Bn;
          continue;
        }
        return;
      } while (!0);
    }
    function mb() {
      var e = AS.current;
      return AS.current = Rh, e === null ? Rh : e;
    }
    function hb(e) {
      AS.current = e;
    }
    function t_() {
      HS = rr();
    }
    function Xp(e) {
      Ph = Tt(e, Ph);
    }
    function n_() {
      Nr === Go && (Nr = Uh);
    }
    function QS() {
      (Nr === Go || Nr === Uh || Nr === lc) && (Nr = Bp), ka !== null && (_s(Ph) || _s(Ip)) && Wu(ka, kr);
    }
    function r_(e) {
      Nr !== Bp && (Nr = lc), Yp === null ? Yp = [e] : Yp.push(e);
    }
    function a_() {
      return Nr === Go;
    }
    function qh(e, t) {
      var a = $t;
      $t |= Zr;
      var i = mb();
      if (ka !== e || kr !== t) {
        if (oa) {
          var o = e.memoizedUpdaters;
          o.size > 0 && (Kp(e, kr), o.clear()), Jv(e, t);
        }
        Wo = Vd(), uc(e, t);
      }
      Ro(t);
      do
        try {
          i_();
          break;
        } catch (s) {
          vb(e, s);
        }
      while (!0);
      if (th(), $t = a, hb(i), Bn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Ac(), ka = null, kr = ie, Nr;
    }
    function i_() {
      for (; Bn !== null; )
        yb(Bn);
    }
    function l_(e, t) {
      var a = $t;
      $t |= Zr;
      var i = mb();
      if (ka !== e || kr !== t) {
        if (oa) {
          var o = e.memoizedUpdaters;
          o.size > 0 && (Kp(e, kr), o.clear()), Jv(e, t);
        }
        Wo = Vd(), qp(), uc(e, t);
      }
      Ro(t);
      do
        try {
          o_();
          break;
        } catch (s) {
          vb(e, s);
        }
      while (!0);
      return th(), hb(i), $t = a, Bn !== null ? ($v(), Go) : (Ac(), ka = null, kr = ie, Nr);
    }
    function o_() {
      for (; Bn !== null && !Cd(); )
        yb(Bn);
    }
    function yb(e) {
      var t = e.alternate;
      un(e);
      var a;
      (e.mode & Xt) !== at ? (Jg(e), a = XS(t, e, eo), Dh(e, !0)) : a = XS(t, e, eo), Sn(), e.memoizedProps = e.pendingProps, a === null ? gb(e) : Bn = a, US.current = null;
    }
    function gb(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & ps) === rt) {
          un(t);
          var o = void 0;
          if ((t.mode & Xt) === at ? o = Vx(a, t, eo) : (Jg(t), o = Vx(a, t, eo), Dh(t, !1)), Sn(), o !== null) {
            Bn = o;
            return;
          }
        } else {
          var s = nT(a, t);
          if (s !== null) {
            s.flags &= Uv, Bn = s;
            return;
          }
          if ((t.mode & Xt) !== at) {
            Dh(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= ps, i.subtreeFlags = rt, i.deletions = null;
          else {
            Nr = PS, Bn = null;
            return;
          }
        }
        var m = t.sibling;
        if (m !== null) {
          Bn = m;
          return;
        }
        t = i, Bn = t;
      } while (t !== null);
      Nr === Go && (Nr = ib);
    }
    function sc(e, t, a) {
      var i = Ia(), o = Jr.transition;
      try {
        Jr.transition = null, Xn(Br), u_(e, t, a, i);
      } finally {
        Jr.transition = o, Xn(i);
      }
      return null;
    }
    function u_(e, t, a, i) {
      do
        Xo();
      while (qu !== null);
      if (S_(), ($t & (Zr | Vi)) !== _r)
        throw new Error("Should not already be working.");
      var o = e.finishedWork, s = e.finishedLanes;
      if (Td(s), o === null)
        return _d(), null;
      if (s === ie && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = ie, o === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Wt;
      var f = Tt(o.lanes, o.childLanes);
      Fd(e, f), e === ka && (ka = null, Bn = null, kr = ie), ((o.subtreeFlags & Ki) !== rt || (o.flags & Ki) !== rt) && (oc || (oc = !0, $S = a, ZS(Ji, function() {
        return Xo(), null;
      })));
      var p = (o.subtreeFlags & (jl | Ol | Ml | Ki)) !== rt, m = (o.flags & (jl | Ol | Ml | Ki)) !== rt;
      if (p || m) {
        var C = Jr.transition;
        Jr.transition = null;
        var x = Ia();
        Xn(Br);
        var O = $t;
        $t |= Vi, US.current = null, oT(e, o), sx(), xT(e, o, s), Cw(e.containerInfo), e.current = o, ys(s), bT(o, e, s), gs(), xd(), $t = O, Xn(x), Jr.transition = C;
      } else
        e.current = o, sx();
      var N = oc;
      if (oc ? (oc = !1, qu = e, Gp = s) : (Gf = 0, Bh = null), f = e.pendingLanes, f === ie && (qf = null), N || bb(e.current, !1), Ed(o.stateNode, i), oa && e.memoizedUpdaters.clear(), VT(), Xa(e, rr()), t !== null)
        for (var V = e.onRecoverableError, I = 0; I < t.length; I++) {
          var W = t[I], je = W.stack, ut = W.digest;
          V(W.value, {
            componentStack: je,
            digest: ut
          });
        }
      if (Hh) {
        Hh = !1;
        var Ze = VS;
        throw VS = null, Ze;
      }
      return sa(Gp, vt) && e.tag !== Au && Xo(), f = e.pendingLanes, sa(f, vt) ? (pR(), e === IS ? Wp++ : (Wp = 0, IS = e)) : Wp = 0, Uu(), _d(), null;
    }
    function Xo() {
      if (qu !== null) {
        var e = tm(Gp), t = Ms(Ba, e), a = Jr.transition, i = Ia();
        try {
          return Jr.transition = null, Xn(t), c_();
        } finally {
          Xn(i), Jr.transition = a;
        }
      }
      return !1;
    }
    function s_(e) {
      BS.push(e), oc || (oc = !0, ZS(Ji, function() {
        return Xo(), null;
      }));
    }
    function c_() {
      if (qu === null)
        return !1;
      var e = $S;
      $S = null;
      var t = qu, a = Gp;
      if (qu = null, Gp = ie, ($t & (Zr | Vi)) !== _r)
        throw new Error("Cannot flush passive effects while already rendering.");
      YS = !0, Vh = !1, wo(a);
      var i = $t;
      $t |= Vi, NT(t.current), RT(t, t.current, a, e);
      {
        var o = BS;
        BS = [];
        for (var s = 0; s < o.length; s++) {
          var f = o[s];
          fT(t, f);
        }
      }
      Dd(), bb(t.current, !0), $t = i, Uu(), Vh ? t === Bh ? Gf++ : (Gf = 0, Bh = t) : Gf = 0, YS = !1, Vh = !1, wd(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function Sb(e) {
      return qf !== null && qf.has(e);
    }
    function f_(e) {
      qf === null ? qf = /* @__PURE__ */ new Set([e]) : qf.add(e);
    }
    function d_(e) {
      Hh || (Hh = !0, VS = e);
    }
    var p_ = d_;
    function Cb(e, t, a) {
      var i = ac(a, t), o = yx(e, i, vt), s = Fu(e, o, vt), f = Na();
      s !== null && (wu(s, vt, f), Xa(s, f));
    }
    function Cn(e, t, a) {
      if (aT(a), Jp(!1), e.tag === A) {
        Cb(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === A) {
          Cb(i, e, a);
          return;
        } else if (i.tag === X) {
          var o = i.type, s = i.stateNode;
          if (typeof o.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !Sb(s)) {
            var f = ac(a, e), p = hS(i, f, vt), m = Fu(i, p, vt), C = Na();
            m !== null && (wu(m, vt, C), Xa(m, C));
            return;
          }
        }
        i = i.return;
      }
      S(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function v_(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var o = Na();
      af(e, a), E_(e), ka === e && Mo(kr, a) && (Nr === Bp || Nr === Uh && Oo(kr) && rr() - HS < lb ? uc(e, ie) : Fh = Tt(Fh, a)), Xa(e, o);
    }
    function xb(e, t) {
      t === Wt && (t = WT(e));
      var a = Na(), i = Ga(e, t);
      i !== null && (wu(i, t, a), Xa(i, a));
    }
    function m_(e) {
      var t = e.memoizedState, a = Wt;
      t !== null && (a = t.retryLane), xb(e, a);
    }
    function h_(e, t) {
      var a = Wt, i;
      switch (e.tag) {
        case re:
          i = e.stateNode;
          var o = e.memoizedState;
          o !== null && (a = o.retryLane);
          break;
        case et:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), xb(e, a);
    }
    function y_(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : IT(e / 1960) * 1960;
    }
    function g_() {
      if (Wp > qT)
        throw Wp = 0, IS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Gf > GT && (Gf = 0, Bh = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function S_() {
      ol.flushLegacyContextWarning(), ol.flushPendingUnsafeLifecycleWarnings();
    }
    function bb(e, t) {
      un(e), Gh(e, Dl, PT), t && Gh(e, _i, FT), Gh(e, Dl, AT), t && Gh(e, _i, UT), Sn();
    }
    function Gh(e, t, a) {
      for (var i = e, o = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== o && i.child !== null && s !== rt ? i = i.child : ((i.flags & t) !== rt && a(i), i.sibling !== null ? i = i.sibling : i = o = i.return);
      }
    }
    var Wh = null;
    function Eb(e) {
      {
        if (($t & Zr) !== _r || !(e.mode & Dt))
          return;
        var t = e.tag;
        if (t !== xe && t !== A && t !== X && t !== F && t !== pe && t !== Y && t !== ae)
          return;
        var a = gt(e) || "ReactComponent";
        if (Wh !== null) {
          if (Wh.has(a))
            return;
          Wh.add(a);
        } else
          Wh = /* @__PURE__ */ new Set([a]);
        var i = gr;
        try {
          un(e), S("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? un(e) : Sn();
        }
      }
    }
    var XS;
    {
      var C_ = null;
      XS = function(e, t, a) {
        var i = jb(C_, t);
        try {
          return Ax(e, t, a);
        } catch (s) {
          if (O1() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (th(), P0(), Bx(e, t), jb(t, i), t.mode & Xt && Jg(t), Nl(null, Ax, null, e, t, a), Qi()) {
            var o = ds();
            typeof o == "object" && o !== null && o._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var wb = !1, KS;
    KS = /* @__PURE__ */ new Set();
    function x_(e) {
      if (Ci && !cR())
        switch (e.tag) {
          case F:
          case pe:
          case ae: {
            var t = Bn && gt(Bn) || "Unknown", a = t;
            if (!KS.has(a)) {
              KS.add(a);
              var i = gt(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case X: {
            wb || (S("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), wb = !0);
            break;
          }
        }
    }
    function Kp(e, t) {
      if (oa) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          js(e, i, t);
        });
      }
    }
    var JS = {};
    function ZS(e, t) {
      {
        var a = ml.current;
        return a !== null ? (a.push(t), JS) : Sd(e, t);
      }
    }
    function Rb(e) {
      if (e !== JS)
        return Fv(e);
    }
    function Tb() {
      return ml.current !== null;
    }
    function b_(e) {
      {
        if (e.mode & Dt) {
          if (!rb())
            return;
        } else if (!$T() || $t !== _r || e.tag !== F && e.tag !== pe && e.tag !== ae)
          return;
        if (ml.current === null) {
          var t = gr;
          try {
            un(e), S(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, gt(e));
          } finally {
            t ? un(e) : Sn();
          }
        }
      }
    }
    function E_(e) {
      e.tag !== Au && rb() && ml.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Jp(e) {
      sb = e;
    }
    var Bi = null, Wf = null, w_ = function(e) {
      Bi = e;
    };
    function Qf(e) {
      {
        if (Bi === null)
          return e;
        var t = Bi(e);
        return t === void 0 ? e : t.current;
      }
    }
    function eC(e) {
      return Qf(e);
    }
    function tC(e) {
      {
        if (Bi === null)
          return e;
        var t = Bi(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Qf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: te,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function _b(e, t) {
      {
        if (Bi === null)
          return !1;
        var a = e.elementType, i = t.type, o = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case X: {
            typeof i == "function" && (o = !0);
            break;
          }
          case F: {
            (typeof i == "function" || s === Ct) && (o = !0);
            break;
          }
          case pe: {
            (s === te || s === Ct) && (o = !0);
            break;
          }
          case Y:
          case ae: {
            (s === Et || s === Ct) && (o = !0);
            break;
          }
          default:
            return !1;
        }
        if (o) {
          var f = Bi(a);
          if (f !== void 0 && f === Bi(i))
            return !0;
        }
        return !1;
      }
    }
    function kb(e) {
      {
        if (Bi === null || typeof WeakSet != "function")
          return;
        Wf === null && (Wf = /* @__PURE__ */ new WeakSet()), Wf.add(e);
      }
    }
    var R_ = function(e, t) {
      {
        if (Bi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Xo(), Qo(function() {
          nC(e.current, i, a);
        });
      }
    }, T_ = function(e, t) {
      {
        if (e.context !== pi)
          return;
        Xo(), Qo(function() {
          Zp(t, e, null, null);
        });
      }
    };
    function nC(e, t, a) {
      {
        var i = e.alternate, o = e.child, s = e.sibling, f = e.tag, p = e.type, m = null;
        switch (f) {
          case F:
          case ae:
          case X:
            m = p;
            break;
          case pe:
            m = p.render;
            break;
        }
        if (Bi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var C = !1, x = !1;
        if (m !== null) {
          var O = Bi(m);
          O !== void 0 && (a.has(O) ? x = !0 : t.has(O) && (f === X ? x = !0 : C = !0));
        }
        if (Wf !== null && (Wf.has(e) || i !== null && Wf.has(i)) && (x = !0), x && (e._debugNeedsRemount = !0), x || C) {
          var N = Ga(e, vt);
          N !== null && Dr(N, e, vt, vn);
        }
        o !== null && !x && nC(o, t, a), s !== null && nC(s, t, a);
      }
    }
    var __ = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(o) {
          return o.current;
        }));
        return rC(e.current, i, a), a;
      }
    };
    function rC(e, t, a) {
      {
        var i = e.child, o = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case F:
          case ae:
          case X:
            p = f;
            break;
          case pe:
            p = f.render;
            break;
        }
        var m = !1;
        p !== null && t.has(p) && (m = !0), m ? k_(e, a) : i !== null && rC(i, t, a), o !== null && rC(o, t, a);
      }
    }
    function k_(e, t) {
      {
        var a = N_(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case fe:
              t.add(i.stateNode);
              return;
            case ve:
              t.add(i.stateNode.containerInfo);
              return;
            case A:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function N_(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === fe)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var aC;
    {
      aC = !1;
      try {
        var Nb = Object.preventExtensions({});
      } catch {
        aC = !0;
      }
    }
    function D_(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = rt, this.subtreeFlags = rt, this.deletions = null, this.lanes = ie, this.childLanes = ie, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !aC && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var vi = function(e, t, a, i) {
      return new D_(e, t, a, i);
    };
    function iC(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function j_(e) {
      return typeof e == "function" && !iC(e) && e.defaultProps === void 0;
    }
    function O_(e) {
      if (typeof e == "function")
        return iC(e) ? X : F;
      if (e != null) {
        var t = e.$$typeof;
        if (t === te)
          return pe;
        if (t === Et)
          return Y;
      }
      return xe;
    }
    function cc(e, t) {
      var a = e.alternate;
      a === null ? (a = vi(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = rt, a.subtreeFlags = rt, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & Gn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case xe:
        case F:
        case ae:
          a.type = Qf(e.type);
          break;
        case X:
          a.type = eC(e.type);
          break;
        case pe:
          a.type = tC(e.type);
          break;
      }
      return a;
    }
    function M_(e, t) {
      e.flags &= Gn | Tn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = ie, e.lanes = t, e.child = null, e.subtreeFlags = rt, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = rt, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function z_(e, t, a) {
      var i;
      return e === Ym ? (i = Dt, t === !0 && (i |= fn, i |= Kt)) : i = at, oa && (i |= Xt), vi(A, null, null, i);
    }
    function lC(e, t, a, i, o, s) {
      var f = xe, p = e;
      if (typeof e == "function")
        iC(e) ? (f = X, p = eC(p)) : p = Qf(p);
      else if (typeof e == "string")
        f = fe;
      else
        e: switch (e) {
          case hi:
            return Qu(a.children, o, s, t);
          case Za:
            f = Ie, o |= fn, (o & Dt) !== at && (o |= Kt);
            break;
          case yi:
            return L_(a, o, s, t);
          case Ne:
            return A_(a, o, s, t);
          case Be:
            return U_(a, o, s, t);
          case An:
            return Db(a, o, s, t);
          case mn:
          case zt:
          case gn:
          case yr:
          case Nt:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case gi:
                  f = _e;
                  break e;
                case T:
                  f = be;
                  break e;
                case te:
                  f = pe, p = tC(p);
                  break e;
                case Et:
                  f = Y;
                  break e;
                case Ct:
                  f = Me, p = null;
                  break e;
              }
            var m = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var C = i ? gt(i) : null;
              C && (m += `

Check the render method of \`` + C + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + m));
          }
        }
      var x = vi(f, a, t, o);
      return x.elementType = e, x.type = p, x.lanes = s, x._debugOwner = i, x;
    }
    function oC(e, t, a) {
      var i = null;
      i = e._owner;
      var o = e.type, s = e.key, f = e.props, p = lC(o, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Qu(e, t, a, i) {
      var o = vi(ne, e, i, t);
      return o.lanes = a, o;
    }
    function L_(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var o = vi(Je, e, i, t | Xt);
      return o.elementType = yi, o.lanes = a, o.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, o;
    }
    function A_(e, t, a, i) {
      var o = vi(re, e, i, t);
      return o.elementType = Ne, o.lanes = a, o;
    }
    function U_(e, t, a, i) {
      var o = vi(et, e, i, t);
      return o.elementType = Be, o.lanes = a, o;
    }
    function Db(e, t, a, i) {
      var o = vi(z, e, i, t);
      o.elementType = An, o.lanes = a;
      var s = {
        isHidden: !1
      };
      return o.stateNode = s, o;
    }
    function uC(e, t, a) {
      var i = vi(He, e, null, t);
      return i.lanes = a, i;
    }
    function P_() {
      var e = vi(fe, null, null, at);
      return e.elementType = "DELETED", e;
    }
    function F_(e) {
      var t = vi(nt, null, null, at);
      return t.stateNode = e, t;
    }
    function sC(e, t, a) {
      var i = e.children !== null ? e.children : [], o = vi(ve, i, e.key, t);
      return o.lanes = a, o.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, o;
    }
    function jb(e, t) {
      return e === null && (e = vi(xe, null, null, at)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function H_(e, t, a, i, o) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Iy, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Wt, this.eventTimes = Ds(ie), this.expirationTimes = Ds(vn), this.pendingLanes = ie, this.suspendedLanes = ie, this.pingedLanes = ie, this.expiredLanes = ie, this.mutableReadLanes = ie, this.finishedLanes = ie, this.entangledLanes = ie, this.entanglements = Ds(ie), this.identifierPrefix = i, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < To; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Ym:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Au:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function Ob(e, t, a, i, o, s, f, p, m, C) {
      var x = new H_(e, t, a, p, m), O = z_(t, s);
      x.current = O, O.stateNode = x;
      {
        var N = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        O.memoizedState = N;
      }
      return bg(O), x;
    }
    var cC = "18.3.1";
    function V_(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Dn(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: hr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var fC, dC;
    fC = !1, dC = {};
    function Mb(e) {
      if (!e)
        return pi;
      var t = gu(e), a = E1(t);
      if (t.tag === X) {
        var i = t.type;
        if (Gl(i))
          return l0(t, i, a);
      }
      return a;
    }
    function B_(e, t) {
      {
        var a = gu(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var o = ia(a);
        if (o === null)
          return null;
        if (o.mode & fn) {
          var s = gt(a) || "Component";
          if (!dC[s]) {
            dC[s] = !0;
            var f = gr;
            try {
              un(o), a.mode & fn ? S("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : S("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? un(f) : Sn();
            }
          }
        }
        return o.stateNode;
      }
    }
    function zb(e, t, a, i, o, s, f, p) {
      var m = !1, C = null;
      return Ob(e, t, m, C, a, i, o, s, f);
    }
    function Lb(e, t, a, i, o, s, f, p, m, C) {
      var x = !0, O = Ob(a, i, x, e, o, s, f, p, m);
      O.context = Mb(null);
      var N = O.current, V = Na(), I = Gu(N), W = Yo(V, I);
      return W.callback = t ?? null, Fu(N, W, I), QT(O, I, V), O;
    }
    function Zp(e, t, a, i) {
      bd(t, e);
      var o = t.current, s = Na(), f = Gu(o);
      kn(f);
      var p = Mb(a);
      t.context === null ? t.context = p : t.pendingContext = p, Ci && gr !== null && !fC && (fC = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, gt(gr) || "Unknown"));
      var m = Yo(s, f);
      m.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), m.callback = i);
      var C = Fu(o, m, f);
      return C !== null && (Dr(C, o, f, s), lh(C, o, f)), f;
    }
    function Qh(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case fe:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function $_(e) {
      switch (e.tag) {
        case A: {
          var t = e.stateNode;
          if (of(t)) {
            var a = Yv(t);
            ZT(t, a);
          }
          break;
        }
        case re: {
          Qo(function() {
            var o = Ga(e, vt);
            if (o !== null) {
              var s = Na();
              Dr(o, e, vt, s);
            }
          });
          var i = vt;
          pC(e, i);
          break;
        }
      }
    }
    function Ab(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Xv(a.retryLane, t));
    }
    function pC(e, t) {
      Ab(e, t);
      var a = e.alternate;
      a && Ab(a, t);
    }
    function I_(e) {
      if (e.tag === re) {
        var t = ws, a = Ga(e, t);
        if (a !== null) {
          var i = Na();
          Dr(a, e, t, i);
        }
        pC(e, t);
      }
    }
    function Y_(e) {
      if (e.tag === re) {
        var t = Gu(e), a = Ga(e, t);
        if (a !== null) {
          var i = Na();
          Dr(a, e, t, i);
        }
        pC(e, t);
      }
    }
    function Ub(e) {
      var t = xn(e);
      return t === null ? null : t.stateNode;
    }
    var Pb = function(e) {
      return null;
    };
    function q_(e) {
      return Pb(e);
    }
    var Fb = function(e) {
      return !1;
    };
    function G_(e) {
      return Fb(e);
    }
    var Hb = null, Vb = null, Bb = null, $b = null, Ib = null, Yb = null, qb = null, Gb = null, Wb = null;
    {
      var Qb = function(e, t, a) {
        var i = t[a], o = kt(e) ? e.slice() : _t({}, e);
        return a + 1 === t.length ? (kt(o) ? o.splice(i, 1) : delete o[i], o) : (o[i] = Qb(e[i], t, a + 1), o);
      }, Xb = function(e, t) {
        return Qb(e, t, 0);
      }, Kb = function(e, t, a, i) {
        var o = t[i], s = kt(e) ? e.slice() : _t({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[o], kt(s) ? s.splice(o, 1) : delete s[o];
        } else
          s[o] = Kb(
            // $FlowFixMe number or string is fine here
            e[o],
            t,
            a,
            i + 1
          );
        return s;
      }, Jb = function(e, t, a) {
        if (t.length !== a.length) {
          G("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              G("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return Kb(e, t, a, 0);
      }, Zb = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var o = t[a], s = kt(e) ? e.slice() : _t({}, e);
        return s[o] = Zb(e[o], t, a + 1, i), s;
      }, eE = function(e, t, a) {
        return Zb(e, t, 0, a);
      }, vC = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      Hb = function(e, t, a, i) {
        var o = vC(e, t);
        if (o !== null) {
          var s = eE(o.memoizedState, a, i);
          o.memoizedState = s, o.baseState = s, e.memoizedProps = _t({}, e.memoizedProps);
          var f = Ga(e, vt);
          f !== null && Dr(f, e, vt, vn);
        }
      }, Vb = function(e, t, a) {
        var i = vC(e, t);
        if (i !== null) {
          var o = Xb(i.memoizedState, a);
          i.memoizedState = o, i.baseState = o, e.memoizedProps = _t({}, e.memoizedProps);
          var s = Ga(e, vt);
          s !== null && Dr(s, e, vt, vn);
        }
      }, Bb = function(e, t, a, i) {
        var o = vC(e, t);
        if (o !== null) {
          var s = Jb(o.memoizedState, a, i);
          o.memoizedState = s, o.baseState = s, e.memoizedProps = _t({}, e.memoizedProps);
          var f = Ga(e, vt);
          f !== null && Dr(f, e, vt, vn);
        }
      }, $b = function(e, t, a) {
        e.pendingProps = eE(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ga(e, vt);
        i !== null && Dr(i, e, vt, vn);
      }, Ib = function(e, t) {
        e.pendingProps = Xb(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Ga(e, vt);
        a !== null && Dr(a, e, vt, vn);
      }, Yb = function(e, t, a) {
        e.pendingProps = Jb(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ga(e, vt);
        i !== null && Dr(i, e, vt, vn);
      }, qb = function(e) {
        var t = Ga(e, vt);
        t !== null && Dr(t, e, vt, vn);
      }, Gb = function(e) {
        Pb = e;
      }, Wb = function(e) {
        Fb = e;
      };
    }
    function W_(e) {
      var t = ia(e);
      return t === null ? null : t.stateNode;
    }
    function Q_(e) {
      return null;
    }
    function X_() {
      return gr;
    }
    function K_(e) {
      var t = e.findFiberByHostInstance, a = R.ReactCurrentDispatcher;
      return xu({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: Hb,
        overrideHookStateDeletePath: Vb,
        overrideHookStateRenamePath: Bb,
        overrideProps: $b,
        overridePropsDeletePath: Ib,
        overridePropsRenamePath: Yb,
        setErrorHandler: Gb,
        setSuspenseHandler: Wb,
        scheduleUpdate: qb,
        currentDispatcherRef: a,
        findHostInstanceByFiber: W_,
        findFiberByHostInstance: t || Q_,
        // React Refresh
        findHostInstancesForRefresh: __,
        scheduleRefresh: R_,
        scheduleRoot: T_,
        setRefreshHandler: w_,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: X_,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: cC
      });
    }
    var tE = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function mC(e) {
      this._internalRoot = e;
    }
    Xh.prototype.render = mC.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? S("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Kh(arguments[1]) ? S("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && S("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Yn) {
          var i = Ub(t.current);
          i && i.parentNode !== a && S("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Zp(e, t, null, null);
    }, Xh.prototype.unmount = mC.prototype.unmount = function() {
      typeof arguments[0] == "function" && S("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        pb() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Qo(function() {
          Zp(null, e, null, null);
        }), t0(t);
      }
    };
    function J_(e, t) {
      if (!Kh(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      nE(e);
      var a = !1, i = !1, o = "", s = tE;
      t != null && (t.hydrate ? G("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Pr && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = zb(e, Ym, null, a, i, o, s);
      Pm(f.current, e);
      var p = e.nodeType === Yn ? e.parentNode : e;
      return ip(p), new mC(f);
    }
    function Xh(e) {
      this._internalRoot = e;
    }
    function Z_(e) {
      e && lm(e);
    }
    Xh.prototype.unstable_scheduleHydration = Z_;
    function ek(e, t, a) {
      if (!Kh(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      nE(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, o = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", m = tE;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (m = a.onRecoverableError));
      var C = Lb(t, null, e, Ym, i, s, f, p, m);
      if (Pm(C.current, e), ip(e), o)
        for (var x = 0; x < o.length; x++) {
          var O = o[x];
          aR(C, O);
        }
      return new Xh(C);
    }
    function Kh(e) {
      return !!(e && (e.nodeType === na || e.nodeType === Wi || e.nodeType === od));
    }
    function ev(e) {
      return !!(e && (e.nodeType === na || e.nodeType === Wi || e.nodeType === od || e.nodeType === Yn && e.nodeValue === " react-mount-point-unstable "));
    }
    function nE(e) {
      e.nodeType === na && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), hp(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var tk = R.ReactCurrentOwner, rE;
    rE = function(e) {
      if (e._reactRootContainer && e.nodeType !== Yn) {
        var t = Ub(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = hC(e), o = !!(i && zu(i));
      o && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === na && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function hC(e) {
      return e ? e.nodeType === Wi ? e.documentElement : e.firstChild : null;
    }
    function aE() {
    }
    function nk(e, t, a, i, o) {
      if (o) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var N = Qh(f);
            s.call(N);
          };
        }
        var f = Lb(
          t,
          i,
          e,
          Au,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          aE
        );
        e._reactRootContainer = f, Pm(f.current, e);
        var p = e.nodeType === Yn ? e.parentNode : e;
        return ip(p), Qo(), f;
      } else {
        for (var m; m = e.lastChild; )
          e.removeChild(m);
        if (typeof i == "function") {
          var C = i;
          i = function() {
            var N = Qh(x);
            C.call(N);
          };
        }
        var x = zb(
          e,
          Au,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          aE
        );
        e._reactRootContainer = x, Pm(x.current, e);
        var O = e.nodeType === Yn ? e.parentNode : e;
        return ip(O), Qo(function() {
          Zp(t, x, a, i);
        }), x;
      }
    }
    function rk(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Jh(e, t, a, i, o) {
      rE(a), rk(o === void 0 ? null : o, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = nk(a, t, e, o, i);
      else {
        if (f = s, typeof o == "function") {
          var p = o;
          o = function() {
            var m = Qh(f);
            p.call(m);
          };
        }
        Zp(t, f, e, o);
      }
      return Qh(f);
    }
    var iE = !1;
    function ak(e) {
      {
        iE || (iE = !0, S("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = tk.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Yt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === na ? e : B_(e, "findDOMNode");
    }
    function ik(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !ev(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = hp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Jh(null, e, t, !0, a);
    }
    function lk(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !ev(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = hp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Jh(null, e, t, !1, a);
    }
    function ok(e, t, a, i) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !ev(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !py(e))
        throw new Error("parentComponent must be a valid React Component");
      return Jh(e, t, a, !1, i);
    }
    var lE = !1;
    function uk(e) {
      if (lE || (lE = !0, S("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !ev(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = hp(e) && e._reactRootContainer === void 0;
        t && S("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = hC(e), i = a && !zu(a);
          i && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Qo(function() {
          Jh(null, null, e, !1, function() {
            e._reactRootContainer = null, t0(e);
          });
        }), !0;
      } else {
        {
          var o = hC(e), s = !!(o && zu(o)), f = e.nodeType === na && ev(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Mr($_), Ru(I_), nm(Y_), Ls(Ia), Bd(Zv), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Ec(cw), dy(GS, e_, Qo);
    function sk(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Kh(t))
        throw new Error("Target container is not a DOM element.");
      return V_(e, t, null, a);
    }
    function ck(e, t, a, i) {
      return ok(e, t, a, i);
    }
    var yC = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [zu, Tf, Fm, vu, wc, GS]
    };
    function fk(e, t) {
      return yC.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), J_(e, t);
    }
    function dk(e, t, a) {
      return yC.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), ek(e, t, a);
    }
    function pk(e) {
      return pb() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Qo(e);
    }
    var vk = K_({
      findFiberByHostInstance: Qs,
      bundleType: 1,
      version: cC,
      rendererPackageName: "react-dom"
    });
    if (!vk && on && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var oE = window.location.protocol;
      /^(https?|file):$/.test(oE) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (oE === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Ja.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yC, Ja.createPortal = sk, Ja.createRoot = fk, Ja.findDOMNode = ak, Ja.flushSync = pk, Ja.hydrate = ik, Ja.hydrateRoot = dk, Ja.render = lk, Ja.unmountComponentAtNode = uk, Ja.unstable_batchedUpdates = GS, Ja.unstable_renderSubtreeIntoContainer = ck, Ja.version = cC, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Ja;
}
function RE() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(RE);
    } catch (g) {
      console.error(g);
    }
  }
}
process.env.NODE_ENV === "production" ? (RE(), wC.exports = Ek()) : wC.exports = wk();
var Rk = wC.exports, RC, ty = Rk;
if (process.env.NODE_ENV === "production")
  RC = ty.createRoot, ty.hydrateRoot;
else {
  var gE = ty.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  RC = function(g, w) {
    gE.usingClientEntryPoint = !0;
    try {
      return ty.createRoot(g, w);
    } finally {
      gE.usingClientEntryPoint = !1;
    }
  };
}
var ee = ov();
const Tk = {
  A4: [210, 297],
  A3: [297, 420],
  A5: [148, 210],
  Letter: [215.9, 279.4]
}, _k = [
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
], kk = [
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
function iv(g) {
  const w = Number.isFinite(g.w_mm) ? g.w_mm : 0, R = Number.isFinite(g.h_mm) ? g.h_mm : 0;
  return {
    ...g,
    copies: Number.isFinite(g.copies) ? g.copies : 1,
    mini_quota: Number.isFinite(g.mini_quota) ? g.mini_quota : 1,
    offset_mm: Number.isFinite(g.offset_mm) ? g.offset_mm : 0,
    offset_modo: g.offset_modo ?? "",
    offset_color: g.offset_color ?? "",
    scale_pct: Number.isFinite(g.scale_pct) ? g.scale_pct : 100,
    w_mm: w,
    h_mm: R,
    w_mm_base: Number.isFinite(g.w_mm_base) ? g.w_mm_base : w,
    h_mm_base: Number.isFinite(g.h_mm_base) ? g.h_mm_base : R,
    warnings: g.warnings ?? []
  };
}
function Nk(g) {
  const w = (Number.isFinite(g.scale_pct) ? g.scale_pct : 100) / 100, R = Number.isFinite(g.w_mm_base) ? g.w_mm_base : g.w_mm, _ = Number.isFinite(g.h_mm_base) ? g.h_mm_base : g.h_mm, K = (Number.isFinite(R) ? R : 0) * w, G = (Number.isFinite(_) ? _ : 0) * w;
  return { w: Number.isFinite(K) ? K : 0, h: Number.isFinite(G) ? G : 0 };
}
async function tn(g, w) {
  const R = await fetch(g, w);
  if (!R.ok) {
    let _ = `${R.status}`;
    try {
      _ = (await R.json()).detail || _;
    } catch {
    }
    throw new Error(_);
  }
  return R.json();
}
const it = {
  health: () => tn("/api/health"),
  getSettings: () => tn(
    "/api/settings"
  ),
  putSettings: (g) => tn("/api/settings", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(g)
  }),
  upload: (g, w) => {
    const R = new FormData();
    return R.append("file", g, w), tn("/api/assets", { method: "POST", body: R });
  },
  listAssets: () => tn("/api/assets"),
  patchAsset: (g, w) => tn(`/api/assets/${g}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(w)
  }),
  deleteAsset: (g) => tn(`/api/assets/${g}`, { method: "DELETE" }),
  clearAssets: () => tn("/api/assets", { method: "DELETE" }),
  removeBackground: (g) => tn(`/api/assets/${g}/remove-background`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({})
  }),
  restoreBackground: (g) => tn(`/api/assets/${g}/restore-background`, { method: "POST" }),
  reemplazar: (g, w, R) => {
    const _ = new FormData();
    return _.append("file", w, R), tn(`/api/assets/${g}/reemplazar`, { method: "POST", body: _ });
  },
  blobs: (g) => tn(`/api/assets/${g}/blobs`),
  limpiarContorno: (g, w) => tn(`/api/assets/${g}/limpiar-contorno`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ quitar: w })
  }),
  previewUrl: (g) => `/api/assets/${g}/preview.png`,
  optimize: (g, w = !1) => tn("/api/optimize", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ modo: g ?? null, force: w })
  }),
  job: (g) => tn(`/api/job/${g}`),
  result: () => tn("/api/result"),
  version: () => tn("/api/version"),
  checkVersion: () => tn("/api/version/check", { method: "POST" }),
  updateVersion: () => tn(
    "/api/version/update",
    { method: "POST" }
  ),
  openReleases: () => tn("/api/version/open", { method: "POST" }),
  estimate: () => tn("/api/estimate"),
  pageUrl: (g, w, R = !1) => `/api/pages/${g}.png?v=${w}${R ? "&sim=1" : ""}`,
  move: (g, w, R) => tn(
    "/api/placements/move",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ uid: g, x: w, y: R })
    }
  ),
  unpin: (g) => tn("/api/placements/unpin", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ uid: g })
  }),
  export: (g, w) => tn("/api/export", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: g, folder: w })
  }),
  printUrl: () => "/api/print.pdf",
  fsList: (g) => tn(
    `/api/fs/list?path=${encodeURIComponent(g)}`
  ),
  abrirCarpeta: (g) => tn("/api/fs/open", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ path: g ?? null })
  }),
  fsOpen: (g) => tn("/api/fs/open", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ path: g })
  }),
  factoryPresets: () => tn(
    "/api/presets/factory"
  ),
  assetsFolder: () => tn("/api/assets-folder"),
  setIcon: (g) => {
    const w = new FormData();
    return w.append("file", g, "icono.png"), tn("/api/icon", { method: "POST", body: w });
  },
  iconUrl: () => `/api/icon.png?v=${Date.now()}`,
  // ---------------------------------------------------- perfiles --
  presets: () => tn("/api/presets"),
  savePreset: (g) => tn("/api/presets", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: g })
  }),
  loadPreset: (g) => tn(
    `/api/presets/${encodeURIComponent(g)}/load`,
    { method: "POST" }
  ),
  deletePreset: (g) => tn(
    `/api/presets/${encodeURIComponent(g)}`,
    { method: "DELETE" }
  )
};
async function Dk(g) {
  const w = await g.text(), R = new Blob([w], { type: "image/svg+xml" }), _ = URL.createObjectURL(R);
  try {
    const K = new Image();
    await new Promise((xe, A) => {
      K.onload = () => xe(), K.onerror = () => A(new Error("SVG no válido")), K.src = _;
    });
    const G = K.naturalWidth || K.width || 1024, S = K.naturalHeight || K.height || 1024, $e = Math.min(4, Math.max(0.5, 300 / 96)), F = document.createElement("canvas");
    return F.width = Math.round(G * $e), F.height = Math.round(S * $e), F.getContext("2d").drawImage(K, 0, 0, F.width, F.height), await new Promise(
      (xe) => F.toBlob((A) => xe(A), "image/png")
    );
  } finally {
    URL.revokeObjectURL(_);
  }
}
async function TE(g) {
  return g.name.toLowerCase().endsWith(".svg") ? { blob: await Dk(g), name: g.name.replace(/\.svg$/i, "") + ".png" } : { blob: g, name: g.name };
}
const TC = [
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
function jk(g) {
  return TC.find((w) => w.key === g) ?? TC[0];
}
function CC(g) {
  const w = jk(g), R = document.documentElement;
  Object.entries(w.colors).forEach(([_, K]) => {
    R.style.setProperty(`--${_.replace(/[A-Z]/g, (G) => "-" + G.toLowerCase())}`, K);
  }), R.dataset.theme = w.key;
}
const _E = {
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
  "Tiempo estimado de corte de la Cricut Maker 5, calculado a partir del perímetro de las siluetas y del recorrido entre formas.": "Estimated cutting time for the Cricut Maker 5, calculated from the outline perimeter and the travel between shapes.",
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
}, kE = ee.createContext("es");
function Ok({ idioma: g, children: w }) {
  return /* @__PURE__ */ v.jsx(kE.Provider, { value: g, children: w });
}
function _C() {
  return ee.useContext(kE);
}
function Jo() {
  const g = _C();
  return (w, R) => {
    let _ = g === "en" ? _E[w] ?? w : w;
    if (R)
      for (const [K, G] of Object.entries(R))
        _ = _.split(`{${K}}`).join(String(G));
    return _;
  };
}
function Mk(g, w, R) {
  return g === "en" ? _E[w] ?? w : w;
}
function lr({ size: g = 18, children: w }) {
  return /* @__PURE__ */ v.jsx(
    "svg",
    {
      width: g,
      height: g,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.9",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      children: w
    }
  );
}
function zk({ size: g }) {
  return /* @__PURE__ */ v.jsxs(lr, { size: g, children: [
    /* @__PURE__ */ v.jsx("path", { d: "M4 9.5h3l4.5-3.5v12L7 14.5H4z" }),
    /* @__PURE__ */ v.jsx("path", { d: "M16 9a4 4 0 0 1 0 6" }),
    /* @__PURE__ */ v.jsx("path", { d: "M18.7 6.5a7.5 7.5 0 0 1 0 11" })
  ] });
}
function Lk({ size: g }) {
  return /* @__PURE__ */ v.jsxs(lr, { size: g, children: [
    /* @__PURE__ */ v.jsx("path", { d: "M4 9.5h3l4.5-3.5v12L7 14.5H4z" }),
    /* @__PURE__ */ v.jsx("path", { d: "M16 9.5l5 5M21 9.5l-5 5" })
  ] });
}
function lv({ size: g }) {
  return /* @__PURE__ */ v.jsx(lr, { size: g, children: /* @__PURE__ */ v.jsx("path", { d: "M3 7.5a2 2 0 0 1 2-2h3.6l1.7 2H19a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }) });
}
function Ak({ size: g }) {
  return /* @__PURE__ */ v.jsxs(lr, { size: g, children: [
    /* @__PURE__ */ v.jsx("path", { d: "M4 7a3 3 0 0 1 3-3h5" }),
    /* @__PURE__ */ v.jsx("path", { d: "M20 17a3 3 0 0 1-3 3h-5" }),
    /* @__PURE__ */ v.jsx("path", { d: "M15 2l3 2-3 2M9 18l-3 2 3 2" })
  ] });
}
function Uk({ size: g }) {
  return /* @__PURE__ */ v.jsxs(lr, { size: g, children: [
    /* @__PURE__ */ v.jsx("path", { d: "M12 3l1.9 4.6L18 9l-4.1 1.4L12 15l-1.9-4.6L6 9l4.1-1.4z" }),
    /* @__PURE__ */ v.jsx("path", { d: "M18 15l.9 2.1L21 18l-2.1.9L18 21l-.9-2.1L15 18l2.1-.9z" })
  ] });
}
function Pk({ size: g }) {
  return /* @__PURE__ */ v.jsxs(lr, { size: g, children: [
    /* @__PURE__ */ v.jsx("path", { d: "M4 4h16v16H4z" }),
    /* @__PURE__ */ v.jsx("path", { d: "M4 14l5-5 4 4 3-3 4 4" }),
    /* @__PURE__ */ v.jsx("circle", { cx: "9", cy: "8.5", r: "1.4" })
  ] });
}
function Fk({ size: g }) {
  return /* @__PURE__ */ v.jsxs(lr, { size: g, children: [
    /* @__PURE__ */ v.jsx("path", { d: "M3 12a9 9 0 1 0 3-6.7" }),
    /* @__PURE__ */ v.jsx("path", { d: "M3 4v5h5" })
  ] });
}
function Hk({ size: g }) {
  return /* @__PURE__ */ v.jsx(lr, { size: g, children: /* @__PURE__ */ v.jsx("path", { d: "M6 6l12 12M18 6L6 18" }) });
}
function Vk({ size: g }) {
  return /* @__PURE__ */ v.jsx(lr, { size: g, children: /* @__PURE__ */ v.jsx("path", { d: "M12 3l2.2 5.4L20 10.5l-5.8 2.1L12 18l-2.2-5.4L4 10.5l5.8-2.1z" }) });
}
function Bk({ size: g }) {
  return /* @__PURE__ */ v.jsxs(lr, { size: g, children: [
    /* @__PURE__ */ v.jsx("path", { d: "M9 7L4 12l5 5" }),
    /* @__PURE__ */ v.jsx("path", { d: "M4 12h9a5 5 0 0 1 5 5v1" })
  ] });
}
function $k({ size: g }) {
  return /* @__PURE__ */ v.jsxs(lr, { size: g, children: [
    /* @__PURE__ */ v.jsx("path", { d: "M15 7l5 5-5 5" }),
    /* @__PURE__ */ v.jsx("path", { d: "M20 12h-9a5 5 0 0 0-5 5v1" })
  ] });
}
function Ik({ size: g }) {
  return /* @__PURE__ */ v.jsxs(lr, { size: g, children: [
    /* @__PURE__ */ v.jsx("path", { d: "M4 4h16v16H4z" }),
    /* @__PURE__ */ v.jsx("path", { d: "M4 9h16M9 4v16", strokeDasharray: "2 2" })
  ] });
}
function Yk({ size: g }) {
  return /* @__PURE__ */ v.jsxs(lr, { size: g, children: [
    /* @__PURE__ */ v.jsx("circle", { cx: "11", cy: "11", r: "6.5" }),
    /* @__PURE__ */ v.jsx("path", { d: "M11 8.5v5M8.5 11h5M20 20l-4.4-4.4" })
  ] });
}
function qk({ size: g }) {
  return /* @__PURE__ */ v.jsxs(lr, { size: g, children: [
    /* @__PURE__ */ v.jsx("circle", { cx: "11", cy: "11", r: "6.5" }),
    /* @__PURE__ */ v.jsx("path", { d: "M8.5 11h5M20 20l-4.4-4.4" })
  ] });
}
function Gk({ size: g }) {
  return /* @__PURE__ */ v.jsxs(lr, { size: g, children: [
    /* @__PURE__ */ v.jsx("circle", { cx: "12", cy: "12", r: "9" }),
    /* @__PURE__ */ v.jsx("path", { d: "M12 11v5M12 7.6v.1" })
  ] });
}
function Wk({ size: g }) {
  return /* @__PURE__ */ v.jsxs(lr, { size: g, children: [
    /* @__PURE__ */ v.jsx("path", { d: "M12 3l9 16H3z" }),
    /* @__PURE__ */ v.jsx("path", { d: "M12 9v5M12 17v.1" })
  ] });
}
function Qk({ size: g }) {
  return /* @__PURE__ */ v.jsxs(lr, { size: g, children: [
    /* @__PURE__ */ v.jsx("path", { d: "M12 4l9 15H3z" }),
    /* @__PURE__ */ v.jsx("path", { d: "M12 10v4.5M12 17.2v.1" })
  ] });
}
function Xk({ size: g }) {
  return /* @__PURE__ */ v.jsxs(lr, { size: g, children: [
    /* @__PURE__ */ v.jsx("path", { d: "M12 3v12" }),
    /* @__PURE__ */ v.jsx("path", { d: "M7 11l5 5 5-5" }),
    /* @__PURE__ */ v.jsx("path", { d: "M4 20h16" })
  ] });
}
function Kk({ size: g }) {
  return /* @__PURE__ */ v.jsxs(lr, { size: g, children: [
    /* @__PURE__ */ v.jsx("circle", { cx: "12", cy: "12", r: "8" }),
    /* @__PURE__ */ v.jsx("path", { d: "M12 8v4.5l3 2" })
  ] });
}
function Jk({ size: g }) {
  return /* @__PURE__ */ v.jsxs(lr, { size: g, children: [
    /* @__PURE__ */ v.jsx("path", { d: "M12 6.5C10.5 5 8.3 4.5 4 4.5v13c4.3 0 6.5.5 8 2 1.5-1.5 3.7-2 8-2v-13c-4.3 0-6.5.5-8 2z" }),
    /* @__PURE__ */ v.jsx("path", { d: "M12 6.5v13" })
  ] });
}
function Zk({ size: g }) {
  return /* @__PURE__ */ v.jsx(lr, { size: g, children: /* @__PURE__ */ v.jsx("path", { d: "M12 20s-7.5-4.6-7.5-9.4A4.1 4.1 0 0 1 12 8a4.1 4.1 0 0 1 7.5 2.6C19.5 15.4 12 20 12 20z" }) });
}
function eN({ open: g, assets: w, onClose: R, onDone: _ }) {
  const K = Jo(), G = ee.useMemo(() => w.map((Y) => Y.id), [w]), [S, $e] = ee.useState(/* @__PURE__ */ new Set()), [F, X] = ee.useState(100), [xe, A] = ee.useState(50), [ve, fe] = ee.useState("mayor"), [He, ne] = ee.useState("");
  ee.useEffect(() => {
    g && ($e(/* @__PURE__ */ new Set()), ne(""));
  }, [g, G.join(",")]);
  const Ie = (Y) => !S.has(Y), be = (Y) => $e((ae) => {
    const Me = new Set(ae);
    return Me.has(Y) ? Me.delete(Y) : Me.add(Y), Me;
  }), _e = (Y) => {
    const ae = Y.w_mm_base || 0, Me = Y.h_mm_base || 0;
    return ve === "mayor" ? Math.max(ae, Me) : ve === "menor" ? Math.min(ae, Me) : 2 * Math.sqrt(Math.max(0, ae * Me) / Math.PI);
  }, pe = (Y) => {
    if (xe > 0) {
      const ae = _e(Y);
      if (ae > 0) return Math.min(10, Math.max(0.05, xe / ae));
    }
    return Math.min(10, Math.max(0.05, F / 100));
  }, Je = (Y) => {
    const ae = pe(Y);
    return { w: (Y.w_mm_base || 0) * ae, h: (Y.h_mm_base || 0) * ae };
  }, re = async () => {
    let Y = 0;
    for (const ae of w) {
      if (!Ie(ae.id)) continue;
      const Me = pe(ae) * 100;
      await it.patchAsset(ae.id, {
        scale_pct: Math.min(1e3, Math.max(5, Math.round(Me * 10) / 10))
      }), Y += 1;
    }
    await _(), ne(K("{n} elementos ajustados ", { n: Y }));
  };
  return !g || !w.length ? null : /* @__PURE__ */ v.jsx("div", { className: "modal-back", "data-testid": "import-dialog", children: /* @__PURE__ */ v.jsxs("div", { className: "modal import-modal", children: [
    /* @__PURE__ */ v.jsx("h3", { children: K("Adaptar los tamaños importados") }),
    /* @__PURE__ */ v.jsxs("div", { className: "import-grid", children: [
      /* @__PURE__ */ v.jsxs("div", { children: [
        /* @__PURE__ */ v.jsx("div", { className: "hint", children: K("Cómo quedan sobre un A4") }),
        /* @__PURE__ */ v.jsx("div", { className: "a4-preview", "data-testid": "import-preview", children: w.map((Y) => {
          const ae = Je(Y), Me = Math.min(98, ae.w / 210 * 100);
          return /* @__PURE__ */ v.jsx(
            "div",
            {
              className: "a4-item",
              "data-testid": `import-preview-${Y.id}`,
              style: {
                width: `${Me}%`,
                maxWidth: `${Me}%`,
                aspectRatio: `${ae.w || 1} / ${ae.h || 1}`,
                opacity: Ie(Y.id) ? 1 : 0.3
              },
              title: `${Y.name} · ${ae.w.toFixed(1)}×${ae.h.toFixed(1)} mm`,
              children: /* @__PURE__ */ v.jsx("img", { src: it.previewUrl(Y.id), alt: "" })
            },
            Y.id
          );
        }) })
      ] }),
      /* @__PURE__ */ v.jsxs("div", { children: [
        /* @__PURE__ */ v.jsxs("div", { className: "hint", children: [
          K("Selecciona los que quieras (todos por defecto)"),
          " —",
          " ",
          G.length - S.size,
          "/",
          G.length
        ] }),
        /* @__PURE__ */ v.jsx("div", { className: "import-lista", "data-testid": "import-lista", children: w.map((Y) => /* @__PURE__ */ v.jsxs(
          "button",
          {
            type: "button",
            "data-testid": `import-item-${Y.id}`,
            className: Ie(Y.id) ? "sel" : "",
            onClick: () => be(Y.id),
            title: Y.name,
            children: [
              /* @__PURE__ */ v.jsx("img", { src: it.previewUrl(Y.id), alt: Y.name }),
              /* @__PURE__ */ v.jsx("span", { children: Y.name })
            ]
          },
          Y.id
        )) })
      ] }),
      /* @__PURE__ */ v.jsxs("div", { className: "import-ajustes", children: [
        /* @__PURE__ */ v.jsxs("label", { children: [
          K("Escala de los seleccionados"),
          /* @__PURE__ */ v.jsxs("span", { className: "row", children: [
            /* @__PURE__ */ v.jsx(
              "input",
              {
                type: "number",
                min: 5,
                max: 1e3,
                step: 5,
                "data-testid": "import-escala",
                value: String(F),
                onChange: (Y) => X(Number(Y.target.value))
              }
            ),
            /* @__PURE__ */ v.jsx("span", { children: "%" })
          ] })
        ] }),
        /* @__PURE__ */ v.jsxs("label", { children: [
          K("Tamaño del lado"),
          /* @__PURE__ */ v.jsxs("span", { className: "row", children: [
            /* @__PURE__ */ v.jsx(
              "input",
              {
                type: "number",
                min: 5,
                max: 2e3,
                step: 1,
                "data-testid": "import-tamano",
                value: String(xe),
                onChange: (Y) => A(Number(Y.target.value))
              }
            ),
            /* @__PURE__ */ v.jsx("span", { children: "mm" })
          ] })
        ] }),
        /* @__PURE__ */ v.jsxs("label", { children: [
          K("Medir el tamaño por"),
          /* @__PURE__ */ v.jsxs(
            "select",
            {
              "data-testid": "import-modo",
              value: ve,
              onChange: (Y) => fe(Y.target.value),
              children: [
                /* @__PURE__ */ v.jsx("option", { value: "mayor", children: K("Lado mayor") }),
                /* @__PURE__ */ v.jsx("option", { value: "menor", children: K("Lado menor") }),
                /* @__PURE__ */ v.jsx("option", { value: "circulo", children: K("Círculo equivalente (aprox.)") })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ v.jsx("div", { className: "hint", children: K("Los cambios se previsualizan en el A4 y se aplican al conservarlos.") }),
        He && /* @__PURE__ */ v.jsx("div", { className: "hint", "data-testid": "import-aviso", children: He })
      ] })
    ] }),
    /* @__PURE__ */ v.jsxs("div", { className: "modal-botones", children: [
      /* @__PURE__ */ v.jsx("button", { "data-testid": "import-original", onClick: () => {
        (async () => {
          for (const Y of w)
            await it.patchAsset(Y.id, { scale_pct: 100 });
          await _(), R();
        })();
      }, children: K("Importar con tamaño original") }),
      /* @__PURE__ */ v.jsx("button", { "data-testid": "import-conservar", onClick: re, children: K("Conservar cambios") })
    ] })
  ] }) });
}
function tN({
  a: g,
  result: w,
  onChange: R,
  onEditarContorno: _,
  onAntesDeCambiar: K
}) {
  const G = Jo(), [S, $e] = ee.useState(() => iv(g));
  ee.useEffect(() => $e(iv(g)), [g]);
  const F = ee.useRef(null), X = Nk(S), [xe, A] = ee.useState(""), ve = ee.useRef(!1), [fe, He] = ee.useState(""), ne = ee.useRef(!1), [Ie, be] = ee.useState({ tamano: !1, borde: !1, mini: !1 });
  ee.useEffect(() => {
    ve.current || A(X.w > 0 ? X.w.toFixed(1) : ""), ne.current || He(X.h > 0 ? X.h.toFixed(1) : "");
  }, [X.w, X.h]);
  const _e = Number.isFinite(S.w_mm_base) ? S.w_mm_base : 0, pe = Number.isFinite(S.h_mm_base) ? S.h_mm_base : 0, Je = (de) => {
    A(de);
    const nt = Number(de.replace(",", "."));
    !Number.isFinite(nt) || nt <= 0 || _e <= 0 || Me({ scale_pct: nt / _e * 100 });
  }, re = (de) => {
    He(de);
    const nt = Number(de.replace(",", "."));
    !Number.isFinite(nt) || nt <= 0 || pe <= 0 || Me({ scale_pct: nt / pe * 100 });
  }, Y = (w == null ? void 0 : w.placements.filter((de) => de.asset_id === g.id && de.mini).length) ?? 0, ae = (w == null ? void 0 : w.placements.filter((de) => de.asset_id === g.id && !de.mini).length) ?? 0, Me = async (de) => {
    K == null || K(), "copies" in de && (de.copies = Math.max(0, de.copies ?? 0)), $e((nt) => ({ ...nt, ...de }));
    try {
      await it.patchAsset(g.id, de);
    } finally {
      await R();
    }
  };
  return /* @__PURE__ */ v.jsxs("div", { className: "asset-card", "data-testid": "asset-card", children: [
    /* @__PURE__ */ v.jsx("div", { className: "preview", children: /* @__PURE__ */ v.jsx("img", { src: it.previewUrl(g.id), alt: g.name, loading: "lazy" }) }),
    /* @__PURE__ */ v.jsxs("div", { className: "info", children: [
      /* @__PURE__ */ v.jsxs("div", { className: "name-row", children: [
        /* @__PURE__ */ v.jsx("span", { className: "name", title: g.name, children: g.name }),
        /* @__PURE__ */ v.jsx(
          "button",
          {
            className: "icon-btn",
            "data-testid": `abrir-carpeta-${g.id}`,
            title: G("Abrir en el explorador la carpeta de las imágenes de la sesión"),
            onClick: () => it.assetsFolder().then((de) => it.abrirCarpeta(de.path)).catch(() => it.abrirCarpeta().catch(() => {
            })),
            children: /* @__PURE__ */ v.jsx(lv, { size: 16 })
          }
        ),
        /* @__PURE__ */ v.jsx(
          "button",
          {
            className: "icon-btn",
            "data-testid": `reemplazar-${g.id}`,
            title: G("Reemplazar por otro archivo de la carpeta"),
            onClick: () => {
              var de;
              return (de = F.current) == null ? void 0 : de.click();
            },
            children: /* @__PURE__ */ v.jsx(Ak, { size: 16 })
          }
        ),
        /* @__PURE__ */ v.jsx(
          "input",
          {
            ref: F,
            type: "file",
            hidden: !0,
            accept: "image/*,.psd,.ai,.svg",
            onChange: async (de) => {
              var et;
              const nt = (et = de.target.files) == null ? void 0 : et[0];
              if (de.target.value = "", !!nt)
                try {
                  const { blob: Xe, name: z } = await TE(nt);
                  await it.reemplazar(g.id, Xe, z), await R();
                } catch {
                }
            }
          }
        ),
        /* @__PURE__ */ v.jsx(
          "button",
          {
            className: "icon-btn",
            "data-testid": `limpiar-${g.id}`,
            title: G("Limpiar contorno (quitar trozos sueltos) sin tocar el original"),
            onClick: () => _ == null ? void 0 : _(g),
            children: /* @__PURE__ */ v.jsx(Uk, { size: 16 })
          }
        ),
        /* @__PURE__ */ v.jsx(
          "button",
          {
            className: "icon-btn",
            title: S.bg_removed ? G("Restaurar fondo original") : G("Quitar fondo (inteligente)"),
            onClick: () => (S.bg_removed ? it.restoreBackground(g.id) : it.removeBackground(g.id)).then(R),
            children: S.bg_removed ? /* @__PURE__ */ v.jsx(Fk, { size: 16 }) : /* @__PURE__ */ v.jsx(Pk, { size: 16 })
          }
        ),
        /* @__PURE__ */ v.jsx(
          "button",
          {
            className: "icon-btn danger",
            title: G("Eliminar imagen"),
            onClick: () => it.deleteAsset(g.id).then(R),
            children: /* @__PURE__ */ v.jsx(Hk, { size: 16 })
          }
        )
      ] }),
      /* @__PURE__ */ v.jsxs("div", { className: "card-actions", children: [
        /* @__PURE__ */ v.jsxs("div", { className: "copies-row", title: G("Copias"), children: [
          /* @__PURE__ */ v.jsx("button", { "data-testid": `resta-${g.id}`, onClick: () => Me({ copies: S.copies - 1 }), children: "−" }),
          /* @__PURE__ */ v.jsx("span", { className: "n", "data-testid": `copias-${g.id}`, children: S.copies }),
          /* @__PURE__ */ v.jsx("button", { "data-testid": `suma-${g.id}`, onClick: () => Me({ copies: S.copies + 1 }), children: "+" })
        ] }),
        /* @__PURE__ */ v.jsxs(
          "button",
          {
            className: `mini-toggle ${S.mini_enabled ? "on" : ""}`,
            "data-testid": `mini-${g.id}`,
            title: G("Incluir como mini (rellena huecos)"),
            onClick: () => Me({ mini_enabled: !S.mini_enabled }),
            children: [
              /* @__PURE__ */ v.jsx(Vk, { size: 15 }),
              " ",
              G("Mini")
            ]
          }
        )
      ] }),
      /* @__PURE__ */ v.jsxs("div", { className: "fold", children: [
        /* @__PURE__ */ v.jsxs(
          "button",
          {
            className: "fold-head",
            "data-testid": `fold-tamano-${g.id}`,
            onClick: () => be((de) => ({ ...de, tamano: !de.tamano })),
            children: [
              /* @__PURE__ */ v.jsx("span", { className: `chev ${Ie.tamano ? "open" : ""}`, children: "›" }),
              G("Tamaño"),
              /* @__PURE__ */ v.jsxs("span", { className: "fold-val", "data-testid": `tamano-${g.id}`, children: [
                X.w.toFixed(1),
                "×",
                X.h.toFixed(1),
                " mm · ",
                Math.round(S.scale_pct),
                "%"
              ] })
            ]
          }
        ),
        Ie.tamano && /* @__PURE__ */ v.jsxs("div", { className: "fold-body", children: [
          /* @__PURE__ */ v.jsxs("div", { className: "scale-row", children: [
            /* @__PURE__ */ v.jsx("span", { title: G("Escala del elemento (100% = tamaño natural)"), children: G("Escala") }),
            /* @__PURE__ */ v.jsx(
              "input",
              {
                type: "range",
                min: 10,
                max: 400,
                step: 5,
                value: S.scale_pct,
                "data-testid": `escala-${g.id}`,
                onChange: (de) => Me({ scale_pct: Number(de.target.value) })
              }
            ),
            /* @__PURE__ */ v.jsxs("span", { className: "scale-val", children: [
              Math.round(S.scale_pct),
              "%"
            ] })
          ] }),
          /* @__PURE__ */ v.jsxs("div", { className: "exact-row", children: [
            /* @__PURE__ */ v.jsx("span", { title: G("Tamaño exacto en milímetros (mantiene la proporción)"), children: G("Ancho") }),
            /* @__PURE__ */ v.jsx(
              "input",
              {
                type: "number",
                min: 0.5,
                max: 2e3,
                step: 0.5,
                value: xe,
                "data-testid": `ancho-mm-${g.id}`,
                onFocus: () => {
                  ve.current = !0, ne.current = !1;
                },
                onBlur: () => {
                  ve.current = !1, A(X.w > 0 ? X.w.toFixed(1) : "");
                },
                onChange: (de) => Je(de.target.value)
              }
            ),
            /* @__PURE__ */ v.jsx("span", { children: "mm" }),
            /* @__PURE__ */ v.jsx("span", { className: "por", children: "×" }),
            /* @__PURE__ */ v.jsx("span", { title: G("Tamaño exacto en milímetros (mantiene la proporción)"), children: G("Alto") }),
            /* @__PURE__ */ v.jsx(
              "input",
              {
                type: "number",
                min: 0.5,
                max: 2e3,
                step: 0.5,
                value: fe,
                "data-testid": `alto-mm-${g.id}`,
                onFocus: () => {
                  ne.current = !0, ve.current = !1;
                },
                onBlur: () => {
                  ne.current = !1, He(X.h > 0 ? X.h.toFixed(1) : "");
                },
                onChange: (de) => re(de.target.value)
              }
            ),
            /* @__PURE__ */ v.jsx("span", { children: "mm" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ v.jsxs("div", { className: "fold", children: [
        /* @__PURE__ */ v.jsxs(
          "button",
          {
            className: "fold-head",
            "data-testid": `fold-borde-${g.id}`,
            onClick: () => be((de) => ({ ...de, borde: !de.borde })),
            children: [
              /* @__PURE__ */ v.jsx("span", { className: `chev ${Ie.borde ? "open" : ""}`, children: "›" }),
              G("Borde"),
              /* @__PURE__ */ v.jsxs("span", { className: "fold-val", "data-testid": `offset-${g.id}`, children: [
                S.offset_mm.toFixed(1),
                " mm",
                S.offset_mm <= 0 ? ` · ${G("global")}` : ""
              ] })
            ]
          }
        ),
        Ie.borde && /* @__PURE__ */ v.jsxs("div", { className: "fold-body", children: [
          /* @__PURE__ */ v.jsxs("div", { className: "seg-row", children: [
            /* @__PURE__ */ v.jsx(
              "button",
              {
                className: "quota-btn",
                "data-testid": `offset-menos-${g.id}`,
                onClick: () => Me({ offset_mm: Math.max(
                  0,
                  Math.round((S.offset_mm - 0.5) * 2) / 2
                ) }),
                children: "−"
              }
            ),
            /* @__PURE__ */ v.jsx(
              "input",
              {
                type: "range",
                min: 0,
                max: 10,
                step: 0.5,
                "data-testid": `offset-range-${g.id}`,
                value: S.offset_mm,
                onChange: (de) => Me({ offset_mm: Number(de.target.value) })
              }
            ),
            /* @__PURE__ */ v.jsx(
              "button",
              {
                className: "quota-btn",
                "data-testid": `offset-mas-${g.id}`,
                onClick: () => Me({ offset_mm: Math.min(
                  20,
                  Math.round((S.offset_mm + 0.5) * 2) / 2
                ) }),
                children: "+"
              }
            )
          ] }),
          /* @__PURE__ */ v.jsxs("div", { className: "seg-row", children: [
            [
              ["extender", G("Extender")],
              ["blanco", G("Blanco")],
              ["color", G("Color")]
            ].map(([de, nt]) => /* @__PURE__ */ v.jsx(
              "button",
              {
                className: `seg ${(S.offset_modo || "") === de ? "on" : ""}`,
                "data-testid": `offset-modo-${de}-${g.id}`,
                onClick: () => Me({ offset_modo: de }),
                children: nt
              },
              de
            )),
            /* @__PURE__ */ v.jsx(
              "input",
              {
                type: "color",
                className: "color-pick",
                "data-testid": `offset-color-${g.id}`,
                value: S.offset_color || "#ffffff",
                title: G("Color del borde"),
                onChange: (de) => Me({
                  offset_color: de.target.value,
                  offset_modo: "color"
                })
              }
            )
          ] })
        ] })
      ] }),
      S.mini_enabled && /* @__PURE__ */ v.jsxs("div", { className: "fold", children: [
        /* @__PURE__ */ v.jsxs(
          "button",
          {
            className: "fold-head",
            "data-testid": `fold-mini-${g.id}`,
            onClick: () => be((de) => ({ ...de, mini: !de.mini })),
            children: [
              /* @__PURE__ */ v.jsx("span", { className: `chev ${Ie.mini ? "open" : ""}`, children: "›" }),
              G("Opciones de mini"),
              /* @__PURE__ */ v.jsxs("span", { className: "fold-val", "data-testid": `minis-${g.id}`, children: [
                "×",
                S.mini_quota,
                " · ",
                Y
              ] })
            ]
          }
        ),
        Ie.mini && /* @__PURE__ */ v.jsx("div", { className: "fold-body", children: /* @__PURE__ */ v.jsxs("div", { className: "seg-row", children: [
          /* @__PURE__ */ v.jsx("span", { title: G("Cuántos minis quieres de este elemento respecto a los demás (1 = reparto equitativo; 3 = el triple)"), children: G("Cuota") }),
          /* @__PURE__ */ v.jsx(
            "button",
            {
              className: "quota-btn",
              "data-testid": `cuota-menos-${g.id}`,
              onClick: () => Me({ mini_quota: Math.max(
                1,
                Math.round((S.mini_quota - 0.5) * 2) / 2
              ) }),
              children: "−"
            }
          ),
          /* @__PURE__ */ v.jsxs("span", { className: "quota-val", "data-testid": `cuota-${g.id}`, children: [
            "×",
            S.mini_quota
          ] }),
          /* @__PURE__ */ v.jsx(
            "button",
            {
              className: "quota-btn",
              "data-testid": `cuota-mas-${g.id}`,
              onClick: () => Me({ mini_quota: Math.min(
                100,
                Math.round((S.mini_quota + 0.5) * 2) / 2
              ) }),
              children: "+"
            }
          ),
          /* @__PURE__ */ v.jsx("span", { className: "mini-count", children: G(" {n} minis", { n: Y }) })
        ] }) })
      ] }),
      ae > 0 && /* @__PURE__ */ v.jsx("div", { className: "size-mm", children: G("Colocadas: {n}", { n: ae }) }),
      S.warnings.length > 0 && /* @__PURE__ */ v.jsxs("div", { className: "warn", children: [
        /* @__PURE__ */ v.jsx(Qk, { size: 14 }),
        " ",
        S.warnings[0],
        " ",
        /blob|trozos sueltos/i.test(S.warnings[0]) && /* @__PURE__ */ v.jsx(
          "button",
          {
            className: "warn-link",
            "data-testid": `limpiar-aviso-${g.id}`,
            onClick: () => _ == null ? void 0 : _(g),
            children: G("limpiar contorno")
          }
        )
      ] })
    ] })
  ] });
}
function nN({
  assets: g,
  result: w,
  settings: R,
  onChange: _,
  saveSettings: K,
  onEditarContorno: G,
  onAntesDeCambiar: S
}) {
  const $e = Jo(), F = ee.useRef(null), [X, xe] = ee.useState(!1), [A, ve] = ee.useState(null), fe = async (ne) => {
    const Ie = [];
    for (const be of Array.from(ne))
      try {
        const { blob: _e, name: pe } = await TE(be);
        Ie.push(iv(await it.upload(_e, pe)));
      } catch (_e) {
        console.error(_e);
      }
    await _(), Ie.length > 1 && ve(Ie);
  }, He = R.usar_minis;
  return /* @__PURE__ */ v.jsxs("div", { className: "file-panel", children: [
    /* @__PURE__ */ v.jsxs("div", { className: "file-head", children: [
      /* @__PURE__ */ v.jsx("h2", { children: $e("Imágenes") }),
      /* @__PURE__ */ v.jsx("span", { className: "count-badge", "data-testid": "total-assets", children: g.length })
    ] }),
    /* @__PURE__ */ v.jsxs(
      "div",
      {
        className: `dropzone${X ? " over" : ""}`,
        "data-testid": "dropzone",
        onClick: () => {
          var ne;
          return (ne = F.current) == null ? void 0 : ne.click();
        },
        onDragOver: (ne) => {
          ne.preventDefault(), xe(!0);
        },
        onDragLeave: () => xe(!1),
        onDrop: (ne) => {
          ne.preventDefault(), xe(!1), ne.dataTransfer.files.length && fe(ne.dataTransfer.files);
        },
        children: [
          /* @__PURE__ */ v.jsx("span", { className: "plus", children: "+" }),
          /* @__PURE__ */ v.jsxs("span", { children: [
            $e("Arrastra imágenes aquí"),
            /* @__PURE__ */ v.jsx("br", {}),
            /* @__PURE__ */ v.jsx("small", { children: "png · jpg · webp · bmp · tiff · gif · psd · ai · svg" })
          ] }),
          /* @__PURE__ */ v.jsx(
            "input",
            {
              ref: F,
              type: "file",
              multiple: !0,
              hidden: !0,
              accept: "image/*,.psd,.ai,.svg",
              onChange: (ne) => {
                ne.target.files && fe(ne.target.files), ne.target.value = "";
              }
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ v.jsx("div", { className: "asset-list", "data-testid": "asset-list", children: g.map((ne) => /* @__PURE__ */ v.jsx(
      tN,
      {
        a: ne,
        result: w,
        onChange: _,
        onEditarContorno: G,
        onAntesDeCambiar: S
      },
      ne.id
    )) }),
    !He && /* @__PURE__ */ v.jsx("div", { className: "hint", children: $e("Sugerencia: activa «Usar minis» en Ajustes para rellenar huecos con copias pequeñas.") }),
    /* @__PURE__ */ v.jsx(
      "button",
      {
        className: "btn-clear-all danger",
        "data-testid": "borrar-todo",
        disabled: g.length === 0,
        onClick: () => it.clearAssets().then(_),
        children: $e("Descartar imágenes")
      }
    ),
    /* @__PURE__ */ v.jsx(
      eN,
      {
        open: !!A,
        assets: A ?? [],
        onClose: () => ve(null),
        onDone: async () => {
          await _();
        }
      }
    )
  ] });
}
function NE({ open: g, onClose: w, onPick: R, initial: _ }) {
  const K = Jo(), [G, S] = ee.useState(null), [$e, F] = ee.useState("");
  ee.useEffect(() => {
    g && X(_ || "");
  }, [g]);
  const X = async (xe = "") => {
    F("");
    try {
      S(await it.fsList(xe));
    } catch (A) {
      F(A.message);
    }
  };
  return g ? /* @__PURE__ */ v.jsx("div", { className: "modal-back", onClick: w, children: /* @__PURE__ */ v.jsxs("div", { className: "modal", onClick: (xe) => xe.stopPropagation(), "data-testid": "folder-picker", children: [
    /* @__PURE__ */ v.jsx("strong", { children: K("Elegir carpeta de guardado") }),
    /* @__PURE__ */ v.jsx("div", { className: "hint", children: (G == null ? void 0 : G.path) ?? "…" }),
    $e && /* @__PURE__ */ v.jsxs("div", { className: "warn", children: [
      " ",
      $e
    ] }),
    /* @__PURE__ */ v.jsxs("div", { className: "dir-list", children: [
      G && G.parent !== G.path && /* @__PURE__ */ v.jsx("button", { onClick: () => X(G.parent), children: ".." }),
      G == null ? void 0 : G.dirs.map((xe) => /* @__PURE__ */ v.jsx(
        "button",
        {
          onClick: () => X(`${G.path}/${xe}`.replace("//", "/")),
          children: xe
        },
        xe
      ))
    ] }),
    /* @__PURE__ */ v.jsxs("div", { className: "btn-row", children: [
      /* @__PURE__ */ v.jsx(
        "button",
        {
          className: "primary",
          "data-testid": "elegir-carpeta-ok",
          disabled: !G,
          onClick: () => {
            G && R(G.path), w();
          },
          children: K("Seleccionar esta carpeta")
        }
      ),
      /* @__PURE__ */ v.jsx("button", { onClick: w, children: K("Cancelar") })
    ] })
  ] }) }) : null;
}
function rN({
  open: g,
  files: w,
  folder: R,
  error: _,
  onOpenFolder: K,
  onClose: G
}) {
  const S = Jo(), [$e, F] = ee.useState("resumen");
  if (!g) return null;
  const X = w.length > 0 && w.every((A) => A.startsWith("data:")), xe = [
    S("Abre Cricut Design Space."),
    S("Carga la imagen y elige «Imagen completa» (conserva la transparencia)."),
    S("Redimensiónala al tamaño real (el que se muestra en CryCat)."),
    S("Pulsa «Crear» para preparar el lienzo."),
    S("Comprueba que las dimensiones coinciden con las del archivo."),
    S("Imprime en papel mate blanco y colócalo en la esterilla."),
    S("¡Listo! La máquina leerá las marcas y cortará tus pegatinas.")
  ];
  return /* @__PURE__ */ v.jsx("div", { className: "modal-back", "data-testid": "save-dialog", children: /* @__PURE__ */ v.jsx("div", { className: "modal", children: $e === "resumen" ? /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
    /* @__PURE__ */ v.jsx("h3", { "data-testid": "save-titulo", children: S(_ ? "No se pudo guardar" : "Imagen guardada") }),
    _ ? /* @__PURE__ */ v.jsx("p", { className: "error", children: _ }) : /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
      /* @__PURE__ */ v.jsx("p", { className: "hint", children: S("Archivos:") }),
      /* @__PURE__ */ v.jsx("ul", { className: "lista-archivos", children: w.map((A) => /* @__PURE__ */ v.jsx("li", { title: A, children: A.split(/[\\/]/).pop() }, A)) }),
      !X && /* @__PURE__ */ v.jsxs("p", { className: "hint", children: [
        S("Carpeta"),
        ": ",
        /* @__PURE__ */ v.jsx("code", { children: R })
      ] }),
      X && /* @__PURE__ */ v.jsx("p", { className: "hint", children: S("Descarga el resultado y ábrelo en Cricut Design Space.") })
    ] }),
    /* @__PURE__ */ v.jsxs("div", { className: "modal-botones", children: [
      X ? w.map((A, ve) => /* @__PURE__ */ v.jsxs(
        "a",
        {
          "data-testid": `btn-descargar-${ve}`,
          href: A,
          download: `crycat_pagina-${String(ve + 1).padStart(2, "0")}.png`,
          className: "btn-descarga",
          children: [
            /* @__PURE__ */ v.jsx(lv, { size: 15 }),
            " ",
            S("Descargar página {n}", { n: ve + 1 })
          ]
        },
        ve
      )) : /* @__PURE__ */ v.jsxs(
        "button",
        {
          "data-testid": "btn-abrir-carpeta",
          onClick: () => K == null ? void 0 : K(R),
          children: [
            /* @__PURE__ */ v.jsx(lv, { size: 15 }),
            " ",
            S("Abrir carpeta")
          ]
        }
      ),
      /* @__PURE__ */ v.jsx("button", { "data-testid": "btn-continuar", onClick: G, children: S("Continuar") }),
      /* @__PURE__ */ v.jsx(
        "button",
        {
          "data-testid": "btn-pasos-cricut",
          onClick: () => F("cricut"),
          children: S("Pasos en Cricut Design Space")
        }
      )
    ] })
  ] }) : /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
    /* @__PURE__ */ v.jsx("h3", { children: S("Cómo usar tu PNG en Cricut Design Space") }),
    /* @__PURE__ */ v.jsx("ol", { className: "lista-pasos", "data-testid": "pasos-cricut", children: xe.map((A, ve) => /* @__PURE__ */ v.jsx("li", { children: A }, ve)) }),
    /* @__PURE__ */ v.jsxs("div", { className: "modal-botones", children: [
      /* @__PURE__ */ v.jsx(
        "button",
        {
          "data-testid": "btn-volver",
          onClick: () => F("resumen"),
          children: S("Volver")
        }
      ),
      /* @__PURE__ */ v.jsx("button", { onClick: G, children: S("Entendido") })
    ] })
  ] }) }) });
}
function aN({ assets: g, result: w, settings: R, ui: _, setUi: K, saveSettings: G, onRefresh: S, onJob: $e, onRecalc: F, editando: X, onFinEdicion: xe, onDeshacer: A, onRehacer: ve, puedeDeshacer: fe, puedeRehacer: He }) {
  const ne = Jo(), Ie = _C(), [be, _e] = ee.useState(1), [pe, Je] = ee.useState({ x: 0, y: 0 }), [re, Y] = ee.useState(null), [ae, Me] = ee.useState(() => Date.now()), [de, nt] = ee.useState(null), [et, Xe] = ee.useState(null), [z, Oe] = ee.useState(!1), [lt, ht] = ee.useState([]), [ke, ce] = ee.useState(""), [Le, ge] = ee.useState(/* @__PURE__ */ new Set()), D = ee.useRef(null), M = ee.useRef(null), Ve = Ie === "en" ? kk : _k, Ke = ee.useMemo(
    () => Ve[Math.floor(Math.random() * Ve.length)],
    [Ve]
  ), St = _.saveName.trim() || Ke;
  ee.useEffect(() => {
    Me(Date.now());
  }, [w, R.dpi_salida, R.lienzo, R.color_formato]);
  const oe = (w == null ? void 0 : w.pages) ?? 0, Se = !!w && w.efficiency < 0.8;
  ee.useEffect(() => {
    const Z = D.current;
    if (!Z) return;
    const Ee = (we) => {
      we.preventDefault(), we.stopPropagation();
      const Pt = Z.getBoundingClientRect(), jt = we.clientX - Pt.left, At = we.clientY - Pt.top;
      _e((Ot) => {
        const rn = we.deltaY < 0 ? 1.05 : 0.9523809523809523, Mt = Math.min(12, Math.max(0.05, Ot * rn)), Ln = Mt / Ot;
        return Je((sr) => ({ x: jt - (jt - sr.x) * Ln, y: At - (At - sr.y) * Ln })), Mt;
      });
    };
    return Z.addEventListener("wheel", Ee, { passive: !1 }), () => Z.removeEventListener("wheel", Ee);
  }, []);
  const pt = (Z) => {
    if (Z.target.closest(".item-box")) return;
    M.current = { x: Z.clientX - pe.x, y: Z.clientY - pe.y };
    const Ee = (Pt) => {
      M.current && Je({ x: Pt.clientX - M.current.x, y: Pt.clientY - M.current.y });
    }, we = () => {
      M.current = null, window.removeEventListener("mousemove", Ee), window.removeEventListener("mouseup", we);
    };
    window.addEventListener("mousemove", Ee), window.addEventListener("mouseup", we);
  };
  ee.useEffect(() => {
    const Z = (Ee) => {
      Ee.target.tagName !== "INPUT" && (Ee.key === "+" || Ee.key === "=" ? _e((we) => Math.min(12, we * 1.08)) : Ee.key === "-" || Ee.key === "_" ? _e((we) => Math.max(0.05, we / 1.08)) : Ee.key === "0" ? (_e(1), Je({ x: 0, y: 0 })) : Ee.key === "Escape" ? Y(null) : Ee.key === "g" ? K((we) => ({ ...we, guidesVisible: !we.guidesVisible })) : Ee.key === "t" && K((we) => we.eyeFosforito ? { ...we, eyeFosforito: !1, eyeTransparent: !1 } : we.eyeTransparent ? { ...we, eyeTransparent: !1, eyeFosforito: !0 } : { ...we, eyeTransparent: !0, eyeFosforito: !1 }));
    };
    return window.addEventListener("keydown", Z), () => window.removeEventListener("keydown", Z);
  }, [K]);
  const st = ee.useRef(null), Ht = ee.useRef(null), on = (Z, Ee) => {
    Z.preventDefault(), Z.stopPropagation();
    const we = Z.currentTarget.closest(".page-box");
    if (!we || !w) return;
    const Pt = w.page_mm[0] / we.clientWidth, jt = {
      uid: Ee.uid,
      startX: Z.clientX,
      startY: Z.clientY,
      origX: Ee.x,
      origY: Ee.y,
      mmPerPx: Pt
    };
    st.current = jt, Ht.current = { x: Ee.x, y: Ee.y }, nt(jt), Xe({ uid: Ee.uid, x: Ee.x, y: Ee.y });
    const At = (rn) => {
      const Mt = st.current;
      if (!Mt) return;
      const Ln = (rn.clientX - Mt.startX) * Mt.mmPerPx / be, sr = (rn.clientY - Mt.startY) * Mt.mmPerPx / be;
      Ht.current = { x: Mt.origX + Ln, y: Mt.origY + sr }, Xe({ uid: Mt.uid, x: Mt.origX + Ln, y: Mt.origY + sr });
    }, Ot = (rn) => {
      window.removeEventListener("mousemove", At), window.removeEventListener("mouseup", Ot);
      const Mt = st.current;
      if (st.current = null, !Mt) return;
      const Ln = (rn.clientX - Mt.startX) * Mt.mmPerPx / be, sr = (rn.clientY - Mt.startY) * Mt.mmPerPx / be;
      nt(null), Xe(null), !(Math.abs(Ln) < 0.5 && Math.abs(sr) < 0.5) && mr(Mt.uid, Mt.origX + Ln, Mt.origY + sr);
    };
    window.addEventListener("mousemove", At), window.addEventListener("mouseup", Ot);
  }, mr = async (Z, Ee, we) => {
    try {
      const Pt = await it.move(Z, Ee, we);
      Pt.job ? $e(Pt.job) : await S();
    } catch {
      await S();
    } finally {
      Me(Date.now());
    }
  }, En = async (Z) => {
    const Ee = await it.unpin(Z);
    $e(Ee);
  };
  ee.useEffect(() => {
    if (!X) {
      ht([]), ce(""), ge(/* @__PURE__ */ new Set());
      return;
    }
    it.blobs(X.id).then((Z) => {
      ht(Z.blobs), ce(Z.preview_png), ge(new Set(Z.blobs.filter((Ee) => !Ee.principal).map((Ee) => Ee.id)));
    }).catch(() => {
      ht([]), ce("");
    });
  }, [X]);
  const er = async () => {
    if (X)
      try {
        await it.limpiarContorno(X.id, Array.from(Le));
      } finally {
        await (xe == null ? void 0 : xe());
      }
  }, zn = (Z) => {
    ge((Ee) => {
      const we = new Set(Ee);
      return we.has(Z) ? we.delete(Z) : we.add(Z), we;
    });
  }, [nn, Dn] = ee.useState(null), Oa = async () => {
    try {
      const Ee = await it.export(
        _.saveName || "crycat",
        R.carpeta_export || void 0
      );
      Dn({ files: Ee.files, folder: Ee.folder });
    } catch (Ee) {
      Dn({ files: [], folder: "", error: Ee.message });
      return;
    }
    const Z = document.createElement("iframe");
    Z.setAttribute("aria-hidden", "true"), Z.style.cssText = "position:fixed;right:0;bottom:0;width:0;height:0;border:0", Z.src = "/api/print.pdf", Z.onload = () => {
      var Ee, we;
      try {
        (Ee = Z.contentWindow) == null || Ee.focus(), (we = Z.contentWindow) == null || we.print();
      } finally {
        window.setTimeout(() => Z.remove(), 6e4);
      }
    }, document.body.appendChild(Z);
  }, Lr = async () => {
    try {
      const Z = await it.export(St);
      Dn({ files: Z.files, folder: Z.folder });
    } catch (Z) {
      Dn({ files: [], folder: "", error: Z.message });
    }
  }, $n = () => {
    Oe(!0);
  }, wn = async (Z) => {
    try {
      const Ee = await it.export(St, Z);
      Dn({ files: Ee.files, folder: Ee.folder });
    } catch (Ee) {
      Dn({ files: [], folder: "", error: Ee.message });
    }
  }, jn = (w == null ? void 0 : w.poly_mm) ?? [], [or, ga] = (w == null ? void 0 : w.bbox_offset_mm) ?? [0, 0], [On, ur] = (w == null ? void 0 : w.bbox_mm) ?? [0, 0], In = R.lienzo === "pagina" ? (w == null ? void 0 : w.page_mm[0]) ?? 0 : On, Ar = R.lienzo === "pagina" ? (w == null ? void 0 : w.page_mm[1]) ?? 0 : ur, Sa = R.lienzo === "pagina" ? 0 : or, Ce = R.lienzo === "pagina" ? 0 : ga, We = jn.length ? "M" + jn.map(([Z, Ee]) => `${Z - Sa},${Ee - Ce}`).join(" L") + " Z" : "", Rt = (Z) => {
    const Ee = (w == null ? void 0 : w.placements.filter((we) => we.page === Z)) ?? [];
    return /* @__PURE__ */ v.jsxs(
      "div",
      {
        className: `page-box ${_.eyeFosforito ? "fondo-fosforito" : _.eyeTransparent ? "alpha-bg" : "white-bg"}`,
        style: { width: "100%" },
        onClick: (we) => {
          oe > 1 && re === null && !we.target.closest(".item-box") && Y(Z);
        },
        "data-testid": `page-${Z}`,
        children: [
          /* @__PURE__ */ v.jsx("img", { className: "sheet", src: it.pageUrl(Z, ae, R.simular_impresion === !0), alt: ne("Página {i}", { i: Z + 1 }), draggable: !1 }),
          _.guidesVisible && We && /* @__PURE__ */ v.jsx("svg", { className: "overlay-svg", viewBox: `0 0 ${In} ${Ar}`, preserveAspectRatio: "none", children: /* @__PURE__ */ v.jsx(
            "path",
            {
              d: We,
              fill: "none",
              stroke: "var(--guide)",
              strokeWidth: Math.max(0.6, In / 250),
              strokeDasharray: `${In / 55} ${In / 85}`,
              opacity: 0.85
            }
          ) }),
          Ee.map((we) => {
            const Pt = g.find((rn) => rn.id === we.asset_id), jt = (et == null ? void 0 : et.uid) === we.uid ? et : null, At = ((jt ? jt.x : we.x) - Sa) / (In || 1) * 100, Ot = ((jt ? jt.y : we.y) - Ce) / (Ar || 1) * 100;
            return /* @__PURE__ */ v.jsx(
              "div",
              {
                className: `item-box ${we.pinned ? "pinned" : ""} ${(de == null ? void 0 : de.uid) === we.uid ? "dragging" : ""}`,
                style: {
                  left: `${At}%`,
                  top: `${Ot}%`,
                  width: `${we.w / (In || 1) * 100}%`,
                  height: `${we.h / (Ar || 1) * 100}%`
                },
                title: (Pt == null ? void 0 : Pt.name) ?? "",
                onMouseDown: (rn) => on(rn, we),
                onContextMenu: (rn) => {
                  rn.preventDefault(), En(we.uid);
                },
                "data-testid": `item-${we.uid}`,
                children: we.pinned && /* @__PURE__ */ v.jsx("span", { className: "pin" })
              },
              we.uid
            );
          })
        ]
      },
      Z
    );
  }, Gt = re !== null ? [re] : Array.from({ length: oe }, (Z, Ee) => Ee);
  return /* @__PURE__ */ v.jsxs("div", { className: "viewer", "data-testid": "viewer", children: [
    /* @__PURE__ */ v.jsxs("div", { className: "viewer-top", children: [
      /* @__PURE__ */ v.jsxs("div", { className: "group hist", children: [
        /* @__PURE__ */ v.jsxs(
          "button",
          {
            "data-testid": "btn-deshacer",
            title: ne("Deshacer (Ctrl+Z)"),
            onClick: () => A(),
            disabled: !fe,
            children: [
              /* @__PURE__ */ v.jsx(Bk, { size: 15 }),
              " ",
              ne("Deshacer")
            ]
          }
        ),
        /* @__PURE__ */ v.jsxs(
          "button",
          {
            "data-testid": "btn-rehacer",
            title: ne("Rehacer (Ctrl+Y / Ctrl+Shift+Z)"),
            onClick: () => ve(),
            disabled: !He,
            children: [
              /* @__PURE__ */ v.jsx($k, { size: 15 }),
              " ",
              ne("Rehacer")
            ]
          }
        )
      ] }),
      /* @__PURE__ */ v.jsx("div", { className: "group", children: /* @__PURE__ */ v.jsxs(
        "button",
        {
          "data-testid": "btn-guias",
          title: ne("Mostrar/ocultar guías de límites Cricut (tecla G) — solo en la vista previa, nunca en el archivo final"),
          onClick: () => K((Z) => ({ ...Z, guidesVisible: !Z.guidesVisible })),
          children: [
            /* @__PURE__ */ v.jsx(Ik, { size: 15 }),
            " ",
            _.guidesVisible ? ne("Guías") : ne("Sin guías")
          ]
        }
      ) }),
      /* @__PURE__ */ v.jsx(
        "button",
        {
          className: "recalc-btn",
          "data-testid": "btn-recalcular",
          title: ne("Forzar la recolocación de todo (ignora los elementos fijados)"),
          onClick: () => F(Se ? "rapido" : "optimo"),
          children: ne(Se ? " Recalcular rápido" : " Recalcular óptimo")
        }
      ),
      /* @__PURE__ */ v.jsxs("div", { className: "group", children: [
        oe > 1 && re === null && /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
          /* @__PURE__ */ v.jsx("button", { "data-testid": "view-1", className: _.viewMode === 1 ? "primary" : "", onClick: () => K((Z) => ({ ...Z, viewMode: 1 })), children: "1" }),
          /* @__PURE__ */ v.jsx("button", { "data-testid": "view-2", className: _.viewMode === 2 ? "primary" : "", onClick: () => K((Z) => ({ ...Z, viewMode: 2 })), children: "2" }),
          /* @__PURE__ */ v.jsx("button", { "data-testid": "view-4", className: _.viewMode === 4 ? "primary" : "", onClick: () => K((Z) => ({ ...Z, viewMode: 4 })), children: "4" })
        ] }),
        re !== null && /* @__PURE__ */ v.jsx("button", { onClick: () => Y(null), title: ne("Volver a la cuadrícula (Esc)"), children: ne(" Ver todo") }),
        /* @__PURE__ */ v.jsx(
          "button",
          {
            "data-testid": "btn-ojo",
            title: ne("Fondo: blanco  transparente  verde fosforito (tecla T)"),
            onClick: () => K((Z) => Z.eyeFosforito ? { ...Z, eyeFosforito: !1, eyeTransparent: !1 } : Z.eyeTransparent ? { ...Z, eyeTransparent: !1, eyeFosforito: !0 } : { ...Z, eyeTransparent: !0, eyeFosforito: !1 }),
            children: (_.eyeFosforito || _.eyeTransparent, "")
          }
        ),
        /* @__PURE__ */ v.jsx("button", { onClick: () => _e((Z) => Math.min(12, Z * 1.08)), title: ne("Acercar (+)"), children: /* @__PURE__ */ v.jsx(Yk, { size: 15 }) }),
        /* @__PURE__ */ v.jsx("button", { onClick: () => _e((Z) => Math.max(0.05, Z / 1.08)), title: ne("Alejar (−)"), children: /* @__PURE__ */ v.jsx(qk, { size: 15 }) }),
        /* @__PURE__ */ v.jsx(
          "button",
          {
            "data-testid": "zoom-reset",
            onClick: () => {
              _e(1), Je({ x: 0, y: 0 });
            },
            title: ne("Volver al zoom original (tecla 0)"),
            children: "100%"
          }
        )
      ] })
    ] }),
    X ? /* @__PURE__ */ v.jsxs("div", { className: "editor-blobs", "data-testid": "editor-blobs", children: [
      /* @__PURE__ */ v.jsxs("div", { className: "editor-lienzo", children: [
        /* @__PURE__ */ v.jsx(
          "img",
          {
            src: it.previewUrl(X.id) + `?t=${ae}`,
            alt: X.name,
            draggable: !1
          }
        ),
        /* @__PURE__ */ v.jsx("div", { className: "editor-overlay", children: X && lt.filter((Z) => !Z.principal).map((Z, Ee) => {
          const [we, Pt, jt, At] = Z.bbox, Ot = X.w_px || 1, rn = X.h_px || 1;
          return /* @__PURE__ */ v.jsx(
            "button",
            {
              className: `blob${Le.has(Z.id) ? " sel" : ""}`,
              "data-testid": `blob-${Ee}`,
              title: ne("Trozo de {px} px — clic para {accion}", {
                px: Z.area_px,
                accion: Le.has(Z.id) ? ne("conservar") : ne("quitar")
              }),
              style: {
                left: `${we / Ot * 100}%`,
                top: `${Pt / rn * 100}%`,
                width: `${(jt - we) / Ot * 100}%`,
                height: `${(At - Pt) / rn * 100}%`
              },
              onClick: () => zn(Z.id)
            },
            Z.id
          );
        }) })
      ] }),
      /* @__PURE__ */ v.jsx("div", { className: "hint", children: ne("Pulsa los trozos sueltos para marcarlos (se quitarán al guardar). El contorno principal nunca se elimina. El archivo original no se toca.") })
    ] }) : /* @__PURE__ */ v.jsx(
      "div",
      {
        ref: D,
        className: `canvas ${de ? "panning" : ""}`,
        "data-testid": "canvas",
        onMouseDown: pt,
        children: /* @__PURE__ */ v.jsxs(
          "div",
          {
            className: "canvas-inner",
            style: { transform: `translate(${pe.x}px, ${pe.y}px) scale(${be})` },
            children: [
              oe === 0 && /* @__PURE__ */ v.jsx("div", { className: "hint", style: { margin: "30px auto" }, children: ne("Añade imágenes y se colocarán aquí de forma óptima, respetando el área recortable de Cricut.") }),
              /* @__PURE__ */ v.jsx(
                "div",
                {
                  className: "pages-grid",
                  style: {
                    width: "100%",
                    display: "grid",
                    gridTemplateColumns: `repeat(${re !== null ? 1 : _.viewMode}, 1fr)`,
                    gap: 18
                  },
                  children: Gt.map(Rt)
                }
              )
            ]
          }
        )
      }
    ),
    X ? /* @__PURE__ */ v.jsx("div", { className: "viewer-bottom", children: /* @__PURE__ */ v.jsxs("div", { className: "btn-row", children: [
      /* @__PURE__ */ v.jsx(
        "button",
        {
          className: "primary",
          "data-testid": "btn-guardar-contorno",
          onClick: er,
          children: ne("Guardar limpieza")
        }
      ),
      /* @__PURE__ */ v.jsx(
        "button",
        {
          "data-testid": "btn-descartar-contorno",
          onClick: () => xe == null ? void 0 : xe(),
          children: ne("Descartar")
        }
      )
    ] }) }) : /* @__PURE__ */ v.jsxs("div", { className: "viewer-bottom", children: [
      /* @__PURE__ */ v.jsx(
        "input",
        {
          type: "text",
          "data-testid": "save-name",
          placeholder: Ke,
          value: _.saveName,
          onChange: (Z) => K((Ee) => ({ ...Ee, saveName: Z.target.value }))
        }
      ),
      /* @__PURE__ */ v.jsxs("div", { className: "btn-row", children: [
        /* @__PURE__ */ v.jsx(
          "button",
          {
            "data-testid": "btn-abrir-guardado",
            className: "btn-icono",
            title: ne("Abrir la carpeta de guardado en el explorador"),
            "aria-label": ne("Abrir carpeta de guardado"),
            onClick: () => it.abrirCarpeta(R.carpeta_export || void 0).catch(() => {
            }),
            children: /* @__PURE__ */ v.jsx(lv, { size: 16 })
          }
        ),
        /* @__PURE__ */ v.jsx("button", { "data-testid": "btn-guardar", onClick: Lr, children: ne("Guardar") }),
        /* @__PURE__ */ v.jsx("button", { "data-testid": "btn-guardar-como", onClick: $n, children: ne("Guardar como…") }),
        /* @__PURE__ */ v.jsx(
          "button",
          {
            "data-testid": "btn-imprimir",
            onClick: Oa,
            disabled: oe === 0,
            children: ne("Imprimir")
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ v.jsx(
      NE,
      {
        open: z,
        initial: R.carpeta_export,
        onClose: () => Oe(!1),
        onPick: wn
      }
    ),
    /* @__PURE__ */ v.jsx(
      rN,
      {
        open: !!nn,
        files: (nn == null ? void 0 : nn.files) ?? [],
        folder: (nn == null ? void 0 : nn.folder) ?? "",
        error: nn == null ? void 0 : nn.error,
        onOpenFolder: (Z) => void it.fsOpen(Z).catch(() => {
        }),
        onClose: () => Dn(null)
      }
    )
  ] });
}
function no({ id: g, title: w, open: R, toggle: _, children: K }) {
  return /* @__PURE__ */ v.jsxs("div", { className: `sect ${R ? "open" : ""}`, "data-testid": `sect-${g}`, children: [
    /* @__PURE__ */ v.jsxs("div", { className: "sect-head", onClick: () => _(g), children: [
      /* @__PURE__ */ v.jsx("span", { children: w }),
      /* @__PURE__ */ v.jsx("span", { className: "arrow", children: "▼" })
    ] }),
    R && /* @__PURE__ */ v.jsx("div", { className: "sect-body", children: K })
  ] });
}
function SE(g, w) {
  return g.split(new RegExp(`(${w.join("|")})`)).map((R, _) => w.includes(R) ? /* @__PURE__ */ v.jsx("strong", { children: R }, _) : R);
}
const iN = {
  chapa: "Chapa",
  pegatina: "Pegatina",
  hoja: "Hoja de pegatinas",
  iman: "Imán",
  "pegatina-grande": "Pegatina grande",
  vinilo: "Vinilo"
};
function lN({ settings: g, saveSettings: w, applySettings: R }) {
  const _ = Jo(), [K, G] = ee.useState(!0), [S, $e] = ee.useState({
    minis: !1,
    optimizacion: !1,
    imagen: !1,
    visualizacion: !1,
    historial: !1,
    perfiles: !1,
    corte: !1,
    extras: !1,
    offset: !1
  }), [F, X] = ee.useState(!1), [xe, A] = ee.useState([]), [ve, fe] = ee.useState(""), [He, ne] = ee.useState(""), [Ie, be] = ee.useState({});
  ee.useEffect(() => {
    it.factoryPresets().then((z) => be(z.presets ?? {})).catch(() => {
    });
  }, []);
  const _e = (z) => $e((Oe) => ({ ...Oe, [z]: !Oe[z] })), pe = (z) => w(z), Je = ee.useRef(null), re = ee.useRef(void 0), Y = (z) => {
    ne(z), re.current && window.clearTimeout(re.current), re.current = window.setTimeout(() => ne(""), 2e3);
  }, ae = async () => {
    try {
      const z = await it.presets();
      A(Array.isArray(z.names) ? z.names : []);
    } catch {
    }
  };
  ee.useEffect(() => {
    ae();
  }, []);
  const Me = async () => {
    const z = ve.trim();
    if (z)
      try {
        const Oe = await it.savePreset(z);
        A(Oe.names), fe(""), Y(_("Perfil guardado "));
      } catch {
        Y(_("No se pudo guardar el perfil"));
      }
  }, de = async (z) => {
    try {
      const Oe = await it.loadPreset(z);
      R == null || R(Oe.settings, Oe.job), Y(_("Perfil «{n}» cargado ", { n: z }));
    } catch {
      Y(_("No se pudo cargar el perfil"));
    }
  }, nt = async (z) => {
    try {
      A((await it.deletePreset(z)).names);
    } catch {
      Y(_("No se pudo borrar el perfil"));
    }
  }, et = (z, Oe, lt, ht, ke = 1, ce = "", Le) => /* @__PURE__ */ v.jsxs("div", { className: "ctl", children: [
    /* @__PURE__ */ v.jsx("label", { children: _(z) }),
    /* @__PURE__ */ v.jsxs("div", { className: "row", children: [
      /* @__PURE__ */ v.jsx(
        "input",
        {
          type: "number",
          min: lt,
          max: ht,
          step: ke,
          "data-testid": `set-${Oe}`,
          value: String(g[Oe]),
          onChange: (ge) => {
            const D = Number(ge.target.value);
            Number.isNaN(D) || pe({ [Oe]: D });
          }
        }
      ),
      ce && /* @__PURE__ */ v.jsx("span", { className: "hint", children: ce }),
      Le
    ] })
  ] }), Xe = (z, Oe, lt, ht) => /* @__PURE__ */ v.jsxs("div", { className: "ctl", children: [
    /* @__PURE__ */ v.jsx("label", { children: _(z) }),
    /* @__PURE__ */ v.jsx(
      "select",
      {
        "data-testid": `set-${Oe}`,
        value: String(g[Oe]),
        onChange: (ke) => pe({ [Oe]: ke.target.value }),
        children: lt.map(([ke, ce]) => /* @__PURE__ */ v.jsx("option", { value: ke, children: _(ce) }, ke))
      }
    )
  ] });
  return /* @__PURE__ */ v.jsxs("div", { className: "file-panel settings-panel", children: [
    /* @__PURE__ */ v.jsxs(
      "button",
      {
        className: "panel-head",
        "data-testid": "panel-ajustes",
        onClick: () => G((z) => !z),
        children: [
          /* @__PURE__ */ v.jsx("span", { className: `chev ${K ? "open" : ""}`, children: "›" }),
          /* @__PURE__ */ v.jsx("h2", { children: _("Ajustes") }),
          /* @__PURE__ */ v.jsx("span", { className: "fold-val", children: g.tema })
        ]
      }
    ),
    !K && /* @__PURE__ */ v.jsx("div", { className: "hint", children: _("Pulsa para desplegar los ajustes") }),
    K && /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
      /* @__PURE__ */ v.jsxs(no, { id: "general", title: _("General"), open: !0, toggle: () => {
      }, children: [
        et("Espacio entre elementos", "espacio_mm", 0, 20, 0.5, "mm"),
        et("Margen de seguridad a los límites", "margen_mm", 0, 20, 0.5, "mm"),
        Xe("Rotación admitida", "rotacion", [
          ["no", "No girar"],
          ["90", "Giros de 0º / 90º / 180º / 270º"],
          ["libre", "Cualquier ángulo"]
        ]),
        et("Resolución de salida", "dpi_salida", 72, 1200, 1, "ppp"),
        /* @__PURE__ */ v.jsxs("div", { className: "ctl", children: [
          /* @__PURE__ */ v.jsx("label", { children: _("Tamaño de salida (vertical)") }),
          /* @__PURE__ */ v.jsxs(
            "select",
            {
              "data-testid": "set-pagina",
              value: g.pagina,
              onChange: (z) => {
                const Oe = z.target.value, lt = Tk[Oe];
                pe(lt ? { pagina: Oe, pagina_w: lt[0], pagina_h: lt[1] } : { pagina: Oe });
              },
              children: [
                /* @__PURE__ */ v.jsx("option", { value: "A4", children: "A4 (210×297)" }),
                /* @__PURE__ */ v.jsx("option", { value: "A3", children: "A3 (297×420)" }),
                /* @__PURE__ */ v.jsx("option", { value: "A5", children: "A5 (148×210)" }),
                /* @__PURE__ */ v.jsx("option", { value: "Letter", children: "Letter (216×279)" }),
                /* @__PURE__ */ v.jsx("option", { value: "custom", children: _("Personalizado") })
              ]
            }
          )
        ] }),
        g.pagina === "custom" && /* @__PURE__ */ v.jsxs("div", { className: "ctl", children: [
          /* @__PURE__ */ v.jsx("label", { children: _("Ancho × alto (mm)") }),
          /* @__PURE__ */ v.jsxs("div", { className: "row", children: [
            /* @__PURE__ */ v.jsx(
              "input",
              {
                type: "number",
                "data-testid": "set-pagina-w",
                value: String(g.pagina_w),
                onChange: (z) => pe({ pagina_w: Number(z.target.value) })
              }
            ),
            /* @__PURE__ */ v.jsx(
              "input",
              {
                type: "number",
                "data-testid": "set-pagina-h",
                value: String(g.pagina_h),
                onChange: (z) => pe({ pagina_h: Number(z.target.value) })
              }
            )
          ] })
        ] }),
        Xe("Máquina Cricut", "maquina", [
          ["maker5", "Cricut Maker 5"],
          ["estandar", "Explore / Joy Xtra / Venture"],
          ["joy", "Cricut Joy 2"]
        ]),
        /* @__PURE__ */ v.jsx("div", { className: "ctl", children: /* @__PURE__ */ v.jsxs("label", { className: "row", children: [
          /* @__PURE__ */ v.jsx(
            "input",
            {
              type: "checkbox",
              "data-testid": "set-usar-minis",
              checked: g.usar_minis,
              onChange: (z) => pe({ usar_minis: z.target.checked })
            }
          ),
          _("Usar minis (rellenar huecos con copias pequeñas)")
        ] }) }),
        /* @__PURE__ */ v.jsxs("div", { className: "ctl", children: [
          /* @__PURE__ */ v.jsxs("label", { className: "row", children: [
            /* @__PURE__ */ v.jsx(
              "input",
              {
                type: "checkbox",
                "data-testid": "set-auto-recalcular",
                checked: g.auto_recalcular !== !1,
                onChange: (z) => pe({ auto_recalcular: z.target.checked })
              }
            ),
            _("Recalcular automáticamente con cada cambio")
          ] }),
          /* @__PURE__ */ v.jsx("div", { className: "hint", children: _("Si lo desactivas, solo se recolocará al pulsar «Recalcular».") })
        ] })
      ] }),
      /* @__PURE__ */ v.jsxs(no, { id: "minis", title: _("Minis"), open: S.minis, toggle: _e, children: [
        /* @__PURE__ */ v.jsx("div", { className: "hint", children: _("Los minis rellenan huecos (no cuentan como copias): dan eficiencia y pegatinas extra. La cuota de cada elemento decide cuántos recibe respecto a los demás: todos empiezan en 1 (reparto equitativo) y 3 significa el triple. El tamaño lo elige el optimizador, siempre más pequeño que el original.") }),
        et("Tamaño mínimo", "mini_min_mm", 1, 50, 0.5, "mm"),
        et(
          "Tamaño máximo del mini (% del original)",
          "mini_max_rescale",
          10,
          100,
          5,
          "%"
        ),
        Xe("Rotaciones admitidas", "mini_rotacion", [
          ["no", "No girar"],
          ["90", "Giros de 0º / 90º / 180º / 270º"],
          ["libre", "Cualquier ángulo"]
        ]),
        Xe("Selección de tamaños", "mini_tamanos", [
          ["iguales", "Priorizar que sean iguales"],
          ["grandes", "Priorizar grandes"]
        ]),
        /* @__PURE__ */ v.jsx("div", { className: "ctl", children: /* @__PURE__ */ v.jsxs("label", { className: "row", children: [
          /* @__PURE__ */ v.jsx(
            "input",
            {
              type: "checkbox",
              "data-testid": "set-mini-usar-lista",
              checked: g.mini_usar_lista === !0,
              onChange: (z) => pe({ mini_usar_lista: z.target.checked })
            }
          ),
          _("Usar lista de tamaños (en vez de los automáticos)")
        ] }) }),
        g.mini_usar_lista && /* @__PURE__ */ v.jsxs("div", { className: "ctl", children: [
          /* @__PURE__ */ v.jsx("label", { children: _("Tamaños deseados (mayor a menor)") }),
          /* @__PURE__ */ v.jsxs("div", { className: "size-list", "data-testid": "mini-lista", children: [
            (g.mini_tamanos_lista ?? []).map((z, Oe) => /* @__PURE__ */ v.jsxs("div", { className: "row", children: [
              /* @__PURE__ */ v.jsx(
                "input",
                {
                  type: "number",
                  min: 1,
                  max: 1e3,
                  step: 5,
                  "data-testid": `mini-tamano-${Oe}`,
                  value: String(z),
                  onChange: (lt) => {
                    const ht = [...g.mini_tamanos_lista ?? []];
                    ht[Oe] = Number(lt.target.value), pe({ mini_tamanos_lista: ht });
                  }
                }
              ),
              /* @__PURE__ */ v.jsx("span", { className: "hint", children: "%" }),
              /* @__PURE__ */ v.jsx(
                "button",
                {
                  className: "icon-btn danger",
                  title: _("Quitar tamaño"),
                  "data-testid": `mini-tamano-quitar-${Oe}`,
                  onClick: () => pe({
                    mini_tamanos_lista: (g.mini_tamanos_lista ?? []).filter(
                      (lt, ht) => ht !== Oe
                    )
                  })
                }
              )
            ] }, Oe)),
            /* @__PURE__ */ v.jsx(
              "button",
              {
                "data-testid": "btn-add-mini-tamano",
                onClick: () => pe({
                  mini_tamanos_lista: [
                    ...g.mini_tamanos_lista ?? [],
                    50
                  ]
                }),
                children: _("Añadir tamaño")
              }
            )
          ] }),
          /* @__PURE__ */ v.jsx("div", { className: "hint", children: _("Cada valor es el tamaño del mini respecto al original; se prueban de mayor a menor hasta que quepan.") })
        ] })
      ] }),
      /* @__PURE__ */ v.jsxs(no, { id: "optimizacion", title: _("Optimización"), open: S.optimizacion, toggle: _e, children: [
        Xe("Método", "opt_metodo", [
          ["greedy", "Greedy / Bottom-Left (rápido)"],
          ["largest", "Largest First (mayor primero)"],
          ["voronoi", "Voronoi (huecos más grandes)"],
          ["genetic", "Genético (máxima calidad)"]
        ]),
        Xe("Calidad de cálculo", "opt_calidad", [
          ["exacta", "Exacta (más fina, más lenta)"],
          ["normal", "Normal (equilibrada)"],
          ["rapida", "Rápida (más gruesa, para bocetos)"]
        ]),
        et("Tiempo máximo", "opt_tiempo_max_s", 0.5, 120, 0.5, "s"),
        /* @__PURE__ */ v.jsxs("div", { className: "ctl", children: [
          /* @__PURE__ */ v.jsx("label", { children: _("Perfiles listos") }),
          /* @__PURE__ */ v.jsx("div", { className: "row", style: { gap: 8, flexWrap: "wrap" }, children: Object.entries(Ie).map(([z, Oe]) => /* @__PURE__ */ v.jsx(
            "button",
            {
              "data-testid": `preset-${z}`,
              onClick: () => pe(Oe),
              children: _(iN[z] ?? z)
            },
            z
          )) }),
          /* @__PURE__ */ v.jsx("div", { className: "hint", children: _("Chapa: casi sin espacio · Pegatina: espacio y borde · Hoja: sin espacio ni borde · Imán: borde blanco") })
        ] }),
        /* @__PURE__ */ v.jsxs("div", { className: "ctl", children: [
          /* @__PURE__ */ v.jsx("label", { children: _("Ajustes rápidos") }),
          /* @__PURE__ */ v.jsxs("div", { className: "row", style: { gap: 8, flexWrap: "wrap" }, children: [
            /* @__PURE__ */ v.jsx(
              "button",
              {
                "data-testid": "preset-chapa",
                title: _("Chapa: casi sin espacio entre piezas"),
                onClick: () => pe({
                  espacio_mm: 0.5,
                  margen_mm: 0.5,
                  offset_activo: !1
                }),
                children: _("Chapa")
              }
            ),
            /* @__PURE__ */ v.jsx(
              "button",
              {
                "data-testid": "preset-pegatina",
                title: _("Pegatina: espacio y borde de 1 mm para cortar fácil"),
                onClick: () => pe({
                  espacio_mm: 2,
                  margen_mm: 1,
                  offset_activo: !0,
                  offset_mm: 1,
                  offset_modo: "extender"
                }),
                children: _("Pegatina")
              }
            ),
            /* @__PURE__ */ v.jsx(
              "button",
              {
                "data-testid": "preset-hoja",
                title: _("Hoja de pegatinas: sin espacio ni borde entre piezas"),
                onClick: () => pe({
                  espacio_mm: 0,
                  margen_mm: 0.5,
                  offset_activo: !1
                }),
                children: _("Hoja de pegatinas")
              }
            )
          ] }),
          /* @__PURE__ */ v.jsx("div", { className: "hint", children: _("Chapa: casi sin espacio · Pegatina: espacio y borde · Hoja: sin espacio ni borde") })
        ] }),
        /* @__PURE__ */ v.jsx("div", { className: "hint", children: _("La eficiencia del último cálculo se muestra en la barra de estado.") })
      ] }),
      /* @__PURE__ */ v.jsxs(no, { id: "imagen", title: _("Imagen"), open: S.imagen, toggle: _e, children: [
        et("Sangrado de impresión", "bleed_mm", 0, 5, 0.2, "mm"),
        /* @__PURE__ */ v.jsx("div", { className: "hint", children: _("Repite el color del borde hacia fuera para que no salga reborde blanco si la impresora no está perfectamente alineada (0 = sin sangrado).") }),
        Xe("Espacio de color de impresión", "espacio_color", [
          ["srgb", "sRGB (estándar, el más seguro)"],
          ["adobergb", "AdobeRGB (más gamas verdes/azules)"]
        ]),
        /* @__PURE__ */ v.jsxs("label", { className: "row", children: [
          /* @__PURE__ */ v.jsx(
            "input",
            {
              type: "checkbox",
              "data-testid": "set-simular_impresion",
              checked: g.simular_impresion === !0,
              onChange: (z) => pe({ simular_impresion: z.target.checked })
            }
          ),
          _("Previsualizar la impresión (simular el espacio de color)")
        ] }),
        g.simular_impresion && /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
          /* @__PURE__ */ v.jsxs("label", { className: "row", children: [
            /* @__PURE__ */ v.jsx(
              "input",
              {
                type: "checkbox",
                "data-testid": "set-sim_cmyk",
                checked: g.sim_cmyk === !0,
                onChange: (z) => pe({ sim_cmyk: z.target.checked })
              }
            ),
            _("Simular el recorte de CMYK (amarillea azules/verdes)")
          ] }),
          et("Saturación de la simulación", "sim_saturacion", 0.5, 2, 0.05),
          et("Contraste de la simulación", "sim_contraste", 0.5, 2, 0.05),
          et("Brillo de la simulación", "sim_brillo", 0.5, 2, 0.05),
          /* @__PURE__ */ v.jsx("div", { className: "hint", children: _("Sube saturación/contraste para compensar lo que apaga la impresión. El archivo no se modifica: solo la vista previa.") })
        ] }),
        Xe("Formato de color de salida", "color_formato", [
          ["rgba", "PNG con transparencia (recomendado)"],
          ["rgb", "PNG con fondo blanco"]
        ]),
        /* @__PURE__ */ v.jsx("div", { className: "ctl", children: /* @__PURE__ */ v.jsxs("label", { className: "row", children: [
          /* @__PURE__ */ v.jsx(
            "input",
            {
              type: "checkbox",
              "data-testid": "set-chequear-lineas",
              checked: g.chequear_lineas,
              onChange: (z) => pe({ chequear_lineas: z.target.checked })
            }
          ),
          _("Comprobación de líneas anómalas")
        ] }) }),
        et(
          "DPI de importación en Design Space",
          "dpi_importacion",
          72,
          600,
          1,
          "ppp"
        ),
        /* @__PURE__ */ v.jsx("div", { className: "hint", children: _("Si Design Space importa la imagen con un tamaño distinto, prueba 144 (el valor que suele usar) o ajusta al de tu versión. 300 mantiene la calidad de impresión.") }),
        Xe("Lienzo del archivo final", "lienzo", [
          ["recortable", "Solo área recortable (recomendado)"],
          ["pagina", "Página completa con márgenes"]
        ]),
        /* @__PURE__ */ v.jsxs("div", { className: "ctl", children: [
          /* @__PURE__ */ v.jsx("label", { children: _("Carpeta predeterminada de exportación") }),
          /* @__PURE__ */ v.jsxs("div", { className: "row", children: [
            /* @__PURE__ */ v.jsx("span", { className: "path-text", "data-testid": "set-carpeta", children: g.carpeta_export || _("(Documentos)") }),
            /* @__PURE__ */ v.jsx(
              "button",
              {
                "data-testid": "btn-elegir-carpeta",
                onClick: () => X(!0),
                children: _("Elegir carpeta…")
              }
            )
          ] }),
          /* @__PURE__ */ v.jsx("div", { className: "hint", children: _("Se guarda para la próxima vez que abras CryCat.") })
        ] })
      ] }),
      /* @__PURE__ */ v.jsxs(no, { id: "offset", title: _("Offset / borde"), open: S.offset, toggle: _e, children: [
        /* @__PURE__ */ v.jsx("div", { className: "ctl", children: /* @__PURE__ */ v.jsxs("label", { className: "row", children: [
          /* @__PURE__ */ v.jsx(
            "input",
            {
              type: "checkbox",
              "data-testid": "set-offset-activo",
              checked: g.offset_activo === !0,
              onChange: (z) => pe({ offset_activo: z.target.checked })
            }
          ),
          _("Añadir borde a todos los elementos")
        ] }) }),
        g.offset_activo && /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
          et("Grosor del borde", "offset_mm", 0.1, 20, 0.1, "mm"),
          Xe("Tipo de borde", "offset_modo", [
            ["extender", "Extender el color del borde"],
            ["blanco", "Blanco"],
            ["color", "Color personalizado"]
          ]),
          g.offset_modo === "color" && /* @__PURE__ */ v.jsxs("div", { className: "ctl", children: [
            /* @__PURE__ */ v.jsx("label", { children: _("Color del borde") }),
            /* @__PURE__ */ v.jsxs("div", { className: "row", children: [
              /* @__PURE__ */ v.jsx(
                "input",
                {
                  type: "color",
                  "data-testid": "set-offset-color",
                  value: g.offset_color || "#ffffff",
                  onChange: (z) => pe({ offset_color: z.target.value })
                }
              ),
              /* @__PURE__ */ v.jsx("span", { className: "hint", children: g.offset_color })
            ] })
          ] }),
          /* @__PURE__ */ v.jsx("div", { className: "hint", children: _("El borde forma parte de la pieza (se tiene en cuenta al colocar y se guarda en la imagen final). El original nunca se modifica.") })
        ] })
      ] }),
      /* @__PURE__ */ v.jsxs(no, { id: "corte", title: _("Estimación de corte"), open: S.corte, toggle: _e, children: [
        /* @__PURE__ */ v.jsx("div", { className: "hint", children: SE(
          _("Tiempo estimado de corte de la Cricut Maker 5, calculado a partir del perímetro de las siluetas y del recorrido entre formas."),
          ["Cricut Maker 5"]
        ) }),
        et("Velocidad de corte", "corte_velocidad_mm_s", 1, 500, 1, "mm/s"),
        et("Velocidad de viaje (sin cortar)", "corte_viaje_mm_s", 1, 1e3, 5, "mm/s"),
        et("Tiempo extra por forma", "corte_extra_forma_s", 0, 30, 0.1, "s"),
        et("Factor de corrección", "corte_factor", 0.1, 20, 0.05, "×"),
        /* @__PURE__ */ v.jsx("div", { className: "hint", children: _("Ajusta el factor para corregir con tu máquina y material reales; se guarda para la próxima vez.") })
      ] }),
      /* @__PURE__ */ v.jsxs(
        no,
        {
          id: "historial",
          title: _("Historial (deshacer/rehacer)"),
          open: S.historial,
          toggle: _e,
          children: [
            /* @__PURE__ */ v.jsx("div", { className: "hint", children: _("Guarda los cambios en tu equipo para poder deshacer y rehacer (Ctrl+Z / Ctrl+Y). Elige qué se guarda.") }),
            /* @__PURE__ */ v.jsxs("label", { className: "row", children: [
              /* @__PURE__ */ v.jsx(
                "input",
                {
                  type: "checkbox",
                  className: "switch",
                  "data-testid": "set-historial",
                  checked: g.historial !== !1,
                  onChange: (z) => pe({ historial: z.target.checked })
                }
              ),
              /* @__PURE__ */ v.jsx("span", { className: "switch-text", children: _("Activar historial") })
            ] }),
            g.historial !== !1 && /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
              et("Cambios que se guardan", "historial_max", 5, 200, 5),
              /* @__PURE__ */ v.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ v.jsx(
                  "input",
                  {
                    type: "checkbox",
                    className: "switch",
                    "data-testid": "set-hist-tamano",
                    checked: g.hist_tamano !== !1,
                    onChange: (z) => pe({ hist_tamano: z.target.checked })
                  }
                ),
                /* @__PURE__ */ v.jsx("span", { className: "switch-text", children: _("Tamaño y escala") })
              ] }),
              /* @__PURE__ */ v.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ v.jsx(
                  "input",
                  {
                    type: "checkbox",
                    className: "switch",
                    "data-testid": "set-hist-copias",
                    checked: g.hist_copias !== !1,
                    onChange: (z) => pe({ hist_copias: z.target.checked })
                  }
                ),
                /* @__PURE__ */ v.jsx("span", { className: "switch-text", children: _("Copias") })
              ] }),
              /* @__PURE__ */ v.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ v.jsx(
                  "input",
                  {
                    type: "checkbox",
                    className: "switch",
                    "data-testid": "set-hist-borde",
                    checked: g.hist_borde !== !1,
                    onChange: (z) => pe({ hist_borde: z.target.checked })
                  }
                ),
                /* @__PURE__ */ v.jsx("span", { className: "switch-text", children: _("Borde por elemento") })
              ] }),
              /* @__PURE__ */ v.jsxs("label", { className: "row", children: [
                /* @__PURE__ */ v.jsx(
                  "input",
                  {
                    type: "checkbox",
                    className: "switch",
                    "data-testid": "set-hist-minis",
                    checked: g.hist_minis !== !1,
                    onChange: (z) => pe({ hist_minis: z.target.checked })
                  }
                ),
                /* @__PURE__ */ v.jsx("span", { className: "switch-text", children: _("Minis") })
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ v.jsxs(no, { id: "visualizacion", title: _("Visualización"), open: S.visualizacion, toggle: _e, children: [
        /* @__PURE__ */ v.jsxs("div", { className: "ctl", children: [
          /* @__PURE__ */ v.jsx("label", { children: _("Tema") }),
          /* @__PURE__ */ v.jsx("div", { className: "theme-grid", "data-testid": "theme-grid", children: TC.map((z) => /* @__PURE__ */ v.jsxs(
            "button",
            {
              className: `theme-chip ${g.tema === z.key ? "active" : ""}`,
              "data-testid": `tema-${z.key}`,
              onClick: () => w({ tema: z.key }),
              children: [
                /* @__PURE__ */ v.jsx("span", { className: "dot", style: { background: z.colors.accent } }),
                /* @__PURE__ */ v.jsx("span", { className: "dot", style: { background: z.colors.accent2 } }),
                z.label
              ]
            },
            z.key
          )) })
        ] }),
        /* @__PURE__ */ v.jsx("div", { className: "ctl", children: /* @__PURE__ */ v.jsxs("label", { className: "row", children: [
          /* @__PURE__ */ v.jsx(
            "input",
            {
              type: "checkbox",
              "data-testid": "set-ver-guias",
              checked: g.ver_guias,
              onChange: (z) => w({ ver_guias: z.target.checked })
            }
          ),
          _("Mostrar guías de límites al inicio")
        ] }) }),
        /* @__PURE__ */ v.jsxs("div", { className: "ctl", children: [
          /* @__PURE__ */ v.jsx("label", { children: _("Icono de la aplicación") }),
          /* @__PURE__ */ v.jsxs("div", { className: "row", children: [
            /* @__PURE__ */ v.jsx("img", { src: it.iconUrl(), alt: _("icono"), style: { width: 34, height: 34, borderRadius: 10 } }),
            /* @__PURE__ */ v.jsx("button", { "data-testid": "btn-cambiar-icono", onClick: () => {
              var z;
              return (z = Je.current) == null ? void 0 : z.click();
            }, children: _("Cargar nuevo icono") }),
            /* @__PURE__ */ v.jsx(
              "input",
              {
                ref: Je,
                type: "file",
                hidden: !0,
                accept: "image/*",
                onChange: (z) => {
                  var lt;
                  const Oe = (lt = z.target.files) == null ? void 0 : lt[0];
                  Oe && it.setIcon(Oe).then(() => {
                    window.location.reload();
                  }), z.target.value = "";
                }
              }
            )
          ] }),
          /* @__PURE__ */ v.jsx("div", { className: "hint", children: _("Actualiza la barra de estado, la pestaña y el lanzador.") })
        ] })
      ] }),
      /* @__PURE__ */ v.jsxs(no, { id: "perfiles", title: _("Perfiles de configuración"), open: S.perfiles, toggle: _e, children: [
        /* @__PURE__ */ v.jsxs("div", { className: "ctl", children: [
          /* @__PURE__ */ v.jsx("label", { children: _("Guardar la configuración actual con un nombre") }),
          /* @__PURE__ */ v.jsxs("div", { className: "row", children: [
            /* @__PURE__ */ v.jsx(
              "input",
              {
                type: "text",
                "data-testid": "perfil-nombre",
                placeholder: _("Nombre del perfil (p. ej. «Pikmin A4»)"),
                value: ve,
                onChange: (z) => fe(z.target.value)
              }
            ),
            /* @__PURE__ */ v.jsx("button", { "data-testid": "btn-guardar-perfil", onClick: Me, children: _("Guardar") })
          ] })
        ] }),
        /* @__PURE__ */ v.jsx("div", { className: "ctl", children: /* @__PURE__ */ v.jsxs("div", { className: "row", children: [
          /* @__PURE__ */ v.jsx(
            "button",
            {
              "data-testid": "btn-guardar-ajustes",
              onClick: async () => {
                await w({}), Y(_("Ajustes guardados "));
              },
              children: _("Guardar ajustes para la próxima vez")
            }
          ),
          He && /* @__PURE__ */ v.jsx("span", { className: "hint", children: He })
        ] }) }),
        /* @__PURE__ */ v.jsxs("div", { className: "ctl", children: [
          /* @__PURE__ */ v.jsx("label", { children: _("Perfiles guardados") }),
          xe.length === 0 && /* @__PURE__ */ v.jsx("div", { className: "hint", children: _("Todavía no hay perfiles guardados.") }),
          /* @__PURE__ */ v.jsx("div", { className: "profile-list", "data-testid": "perfil-lista", children: xe.map((z) => /* @__PURE__ */ v.jsxs("div", { className: "profile-row", children: [
            /* @__PURE__ */ v.jsx("span", { className: "profile-name", title: z, children: z }),
            /* @__PURE__ */ v.jsx("button", { "data-testid": `cargar-${z}`, onClick: () => de(z), children: _("Cargar") }),
            /* @__PURE__ */ v.jsx(
              "button",
              {
                className: "icon-btn danger",
                title: _("Borrar perfil"),
                onClick: () => nt(z)
              }
            )
          ] }, z)) })
        ] }),
        /* @__PURE__ */ v.jsx("div", { className: "hint", children: _("Los ajustes se guardan solos al cambiarlos; los perfiles permiten tener varias configuraciones con nombre y recuperarlas cuando quieras.") })
      ] }),
      /* @__PURE__ */ v.jsxs(no, { id: "extras", title: _("Extras"), open: S.extras, toggle: _e, children: [
        /* @__PURE__ */ v.jsx("div", { className: "ctl", children: /* @__PURE__ */ v.jsxs("label", { className: "row", children: [
          /* @__PURE__ */ v.jsx(
            "input",
            {
              type: "checkbox",
              "data-testid": "set-pikmin-activo",
              checked: g.pikmin_activo !== !1,
              onChange: (z) => pe({ pikmin_activo: z.target.checked })
            }
          ),
          _("Mostrar Pikmin de vez en cuando")
        ] }) }),
        et("Frecuencia media", "pikmin_frecuencia_min", 0.1, 60, 0.1, "min"),
        /* @__PURE__ */ v.jsx("div", { className: "ctl", children: /* @__PURE__ */ v.jsxs("label", { className: "row", children: [
          /* @__PURE__ */ v.jsx(
            "input",
            {
              type: "checkbox",
              "data-testid": "set-pikmin-sonido",
              checked: g.pikmin_sonido !== !1,
              onChange: (z) => pe({ pikmin_sonido: z.target.checked })
            }
          ),
          _("Sonido de Pikmin")
        ] }) }),
        /* @__PURE__ */ v.jsx("div", { className: "ctl", children: /* @__PURE__ */ v.jsxs("label", { className: "row", children: [
          /* @__PURE__ */ v.jsx(
            "input",
            {
              type: "checkbox",
              "data-testid": "set-pikmin-sonido-morir",
              checked: g.pikmin_sonido_morir !== !1,
              onChange: (z) => pe({ pikmin_sonido_morir: z.target.checked })
            }
          ),
          _("De vez en cuando se muere (alma + sonido)")
        ] }) }),
        /* @__PURE__ */ v.jsx("div", { className: "ctl", children: /* @__PURE__ */ v.jsxs("label", { className: "row", children: [
          /* @__PURE__ */ v.jsx(
            "input",
            {
              type: "checkbox",
              "data-testid": "set-comprobar_versiones",
              checked: g.comprobar_versiones !== !1,
              onChange: (z) => w({ comprobar_versiones: z.target.checked })
            }
          ),
          _("Comprobar si hay versiones nuevas al iniciar")
        ] }) }),
        /* @__PURE__ */ v.jsx("div", { className: "hint", children: _("Las imágenes rotan entre las del proyecto y las de Pikmin Bloom.") })
      ] }),
      /* @__PURE__ */ v.jsx("div", { className: "creditos", "data-testid": "creditos", children: SE(
        _("CryCat · hecha por Daniel Hernández Ferrándiz y Wivi.eve, para los artistas."),
        ["CryCat", "Daniel Hernández Ferrándiz", "Wivi.eve"]
      ) })
    ] }),
    /* @__PURE__ */ v.jsx(
      NE,
      {
        open: F,
        initial: g.carpeta_export,
        onClose: () => X(!1),
        onPick: (z) => w({ carpeta_export: z })
      }
    )
  ] });
}
function CE(g) {
  if (!Number.isFinite(g) || g <= 0) return "—";
  if (g < 60) return `${Math.ceil(g)} s`;
  const w = Math.floor(g / 60), R = Math.round(g % 60);
  return w < 60 ? `${w} min ${R} s` : `${Math.floor(w / 60)} h ${w % 60} min`;
}
function oN({
  job: g,
  backendOk: w,
  result: R,
  estimate: _,
  volumen: K = 0.5,
  mute: G = !1,
  onVolumen: S,
  onMute: $e,
  onIdioma: F,
  onEasterEgg: X,
  onAyuda: xe
}) {
  var ge, D;
  const A = Jo(), ve = _C(), [fe, He] = ee.useState([]), [ne, Ie] = ee.useState(0), [be, _e] = ee.useState(null), [pe, Je] = ee.useState(!1), [re, Y] = ee.useState(""), ae = ee.useRef(!1), Me = ee.useRef([]);
  ee.useEffect(() => {
    fetch("/api/funmsgs").then((M) => M.ok ? M.json() : { msgs: [] }).then((M) => He(M.msgs ?? [])).catch(() => {
    });
  }, []), ee.useEffect(() => {
    let M = !0;
    return it.version().then((Ve) => {
      M && (_e(Ve), !Ve.comprobado && !ae.current && (ae.current = !0, it.checkVersion().then((Ke) => M && _e(Ke)).catch(() => {
      })));
    }).catch(() => {
    }), () => {
      M = !1;
    };
  }, []);
  const de = ((ge = be == null ? void 0 : be.actualizacion) == null ? void 0 : ge.estado) === "descargando" || ((D = be == null ? void 0 : be.actualizacion) == null ? void 0 : D.estado) === "instalando";
  ee.useEffect(() => {
    if (!de) return;
    const M = setInterval(() => {
      it.version().then(_e).catch(() => {
      });
    }, 700);
    return () => clearInterval(M);
  }, [de]);
  const nt = !!(g && !g.done);
  ee.useEffect(() => {
    if (!nt) return;
    const M = setInterval(() => Ie((Ve) => Ve + 1), 1200);
    return () => clearInterval(M);
  }, [nt]);
  const et = fe.length ? fe : [
    A("Optimizando…"),
    "Rascando Pikachus…",
    "Contando Mausholds…",
    "Tortilleando Exeggcutes…",
    "Ordenando los cubiertos de Sinistea…"
  ], Xe = ee.useMemo(() => {
    if (re) return re;
    if (de) {
      const M = be == null ? void 0 : be.actualizacion;
      if ((M == null ? void 0 : M.estado) === "instalando") return A("Instalando y reiniciando…");
      const Ve = (M == null ? void 0 : M.progreso) != null ? Math.round(M.progreso) : null;
      return Ve != null ? A("Descargando… {p}%", { p: Ve }) : (M == null ? void 0 : M.mensaje) || A("Descargando actualización…");
    }
    if (nt)
      return et[ne % et.length];
    if (g && g.status === "error") return g.message || "Error";
    if (R && R.pages > 0) {
      const M = Math.round(R.efficiency * 100);
      return A(
        "{n} imágenes en {p} página{s} · eficiencia {ef}% · {m} minis",
        {
          n: R.placed,
          p: R.pages,
          s: R.pages > 1 ? "s" : "",
          ef: M,
          m: R.minis
        }
      );
    }
    return A("Listo para empezar");
  }, [re, de, nt, g, et, ne, R, A, be]), z = Math.round(((g == null ? void 0 : g.progress) ?? 0) * 100), Oe = ee.useMemo(() => {
    const M = g == null ? void 0 : g.eta_s;
    return !nt || M === void 0 || M === null || M <= 0.5 ? "" : A(" · {x} restante", { x: CE(M) });
  }, [g == null ? void 0 : g.eta_s, nt, A]), lt = ee.useMemo(() => !_ || !_.segundos ? "" : CE(_.segundos), [_]), ht = async () => {
    Je(!0), Y("");
    try {
      const M = await it.checkVersion();
      _e(M), M.error ? Y(A("Sin conexión")) : M.hay_nueva || Y(A("Estás en la última versión"));
    } catch {
      Y(A("Sin conexión"));
    } finally {
      Je(!1);
    }
  }, ke = async () => {
    Y("");
    try {
      const M = await it.updateVersion();
      M.ok ? Y(A("Instalando y reiniciando…")) : M.modo === "dev" && M.url ? (Y(A("Modo desarrollo: se actualiza con git")), await it.openReleases().catch(() => {
      })) : Y(M.mensaje || A("No se pudo actualizar")), it.version().then(_e).catch(() => {
      });
    } catch {
      Y(A("No se pudo actualizar"));
    }
  }, Le = !!(be != null && be.hay_nueva && !nt && !de) ? A("Nueva versión {v} disponible", { v: (be == null ? void 0 : be.ultima) ?? "" }) : "";
  return /* @__PURE__ */ v.jsxs("div", { className: "statusbar", "data-testid": "statusbar", children: [
    /* @__PURE__ */ v.jsxs("div", { className: "brand", children: [
      /* @__PURE__ */ v.jsx(
        "img",
        {
          src: it.iconUrl(),
          alt: "CryCat",
          "data-testid": "brand-icon",
          title: A("CryCat"),
          style: { cursor: "pointer" },
          onClick: () => {
            const M = Date.now();
            Me.current = [...Me.current, M].filter((Ve) => M - Ve < 2500), Me.current.length >= 5 && (Me.current = [], Y(A("¡Fiesta Pikmin!")), window.setTimeout(() => Y(""), 4e3), X == null || X());
          }
        }
      ),
      /* @__PURE__ */ v.jsx("span", { className: "nombre", children: "CryCat" })
    ] }),
    /* @__PURE__ */ v.jsxs("div", { className: "center", "data-testid": "status-center", children: [
      /* @__PURE__ */ v.jsx("span", { className: "msg", children: Xe }),
      !!R && R.pages > 1 && /* @__PURE__ */ v.jsx(
        "span",
        {
          className: "aviso-paginas",
          "data-testid": "aviso-paginas",
          title: A("No cabe todo en una página: se usarán varias"),
          children: A("No cabe en una página: {n} páginas", { n: R.pages })
        }
      ),
      nt && /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
        /* @__PURE__ */ v.jsx("div", { className: "progress", "data-testid": "progress", children: /* @__PURE__ */ v.jsx("div", { style: { width: `${Math.max(4, z)}%` } }) }),
        /* @__PURE__ */ v.jsxs("span", { className: "eta", "data-testid": "eta", children: [
          z,
          "%",
          Oe
        ] }),
        /* @__PURE__ */ v.jsx(
          "img",
          {
            className: "piensa",
            "data-testid": "piensa",
            src: "/piensa.gif",
            alt: "",
            title: A("Pensando…"),
            onError: (M) => {
              M.currentTarget.style.display = "none";
            }
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ v.jsxs("div", { className: "right", children: [
      /* @__PURE__ */ v.jsxs(
        "button",
        {
          className: "app-info",
          "data-testid": "btn-info",
          title: A("Cómo usar CryCat (vuelve a mostrar la ayuda)"),
          onClick: () => xe == null ? void 0 : xe(),
          children: [
            /* @__PURE__ */ v.jsx(Jk, { size: 15 }),
            " ",
            A("Cómo usar")
          ]
        }
      ),
      /* @__PURE__ */ v.jsxs(
        "button",
        {
          className: "app-info apoyar",
          "data-testid": "btn-apoyar",
          title: A("Apoyar el proyecto (PayPal)"),
          onClick: () => window.open(
            "https://paypal.me/Darkniel42",
            "_blank",
            "noopener"
          ),
          children: [
            /* @__PURE__ */ v.jsx(Zk, { size: 15 }),
            " ",
            A("Apoyar")
          ]
        }
      ),
      /* @__PURE__ */ v.jsx(
        "button",
        {
          className: "app-info",
          "data-testid": "btn-repo",
          title: A("Abrir el repositorio del proyecto en una pestaña nueva"),
          onClick: () => window.open((be == null ? void 0 : be.repo) ?? "https://github.com/dhernandezgit/CryCat-Tool", "_blank", "noopener"),
          children: /* @__PURE__ */ v.jsx(Gk, { size: 15 })
        }
      ),
      /* @__PURE__ */ v.jsx(
        "button",
        {
          className: "idioma",
          "data-testid": "btn-idioma",
          title: A("Idioma"),
          onClick: () => F == null ? void 0 : F(ve === "es" ? "en" : "es"),
          children: ve.toUpperCase()
        }
      ),
      /* @__PURE__ */ v.jsxs(
        "span",
        {
          className: "version-chip",
          "data-testid": "version-chip",
          title: A("Versión actual"),
          children: [
            (be == null ? void 0 : be.hay_nueva) && !de && /* @__PURE__ */ v.jsx(
              "button",
              {
                className: "alerta-version",
                "data-testid": "aviso-version",
                title: Le || A("Hay una versión nueva"),
                onClick: ke,
                children: /* @__PURE__ */ v.jsx(Wk, { size: 14 })
              }
            ),
            "v",
            (be == null ? void 0 : be.actual) ?? "—",
            (be == null ? void 0 : be.hay_nueva) && (be == null ? void 0 : be.ultima) && /* @__PURE__ */ v.jsxs("span", { className: "version-nueva", "data-testid": "version-nueva", children: [
              "v",
              be.ultima
            ] }),
            /* @__PURE__ */ v.jsx(
              "button",
              {
                className: "btn-mini",
                "data-testid": "btn-comprobar",
                title: A("Comprobar versiones"),
                onClick: ht,
                disabled: pe,
                children: pe ? "…" : /* @__PURE__ */ v.jsx(Kk, { size: 14 })
              }
            ),
            (be == null ? void 0 : be.hay_nueva) && /* @__PURE__ */ v.jsx(
              "button",
              {
                className: "btn-mini destacado",
                "data-testid": "btn-actualizar",
                title: A("Descargar e instalar la nueva versión"),
                onClick: ke,
                children: /* @__PURE__ */ v.jsx(Xk, { size: 14 })
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ v.jsxs("div", { className: "vol-control", children: [
        /* @__PURE__ */ v.jsx(
          "button",
          {
            "data-testid": "btn-mute",
            className: "icon-sonido",
            title: A(G ? "Activar sonido" : "Silenciar"),
            "aria-label": A(G ? "Activar sonido" : "Silenciar"),
            onClick: () => $e == null ? void 0 : $e(!G),
            children: G ? /* @__PURE__ */ v.jsx(Lk, {}) : /* @__PURE__ */ v.jsx(zk, {})
          }
        ),
        /* @__PURE__ */ v.jsx(
          "input",
          {
            type: "range",
            min: 0,
            max: 1,
            step: 0.05,
            "data-testid": "volumen",
            title: A("Volumen"),
            value: K,
            onChange: (M) => {
              S == null || S(Number(M.target.value)), G && Number(M.target.value) > 0 && ($e == null || $e(!1));
            }
          }
        )
      ] }),
      /* @__PURE__ */ v.jsx(
        "span",
        {
          className: `dot ${w ? "" : "off"}`,
          "data-testid": "backend-status",
          title: A(w ? "Backend conectado" : "Backend desconectado")
        }
      ),
      /* @__PURE__ */ v.jsxs(
        "span",
        {
          className: "eta",
          "data-testid": "corte-estimado",
          title: A("Tiempo estimado de corte (Cricut Maker 5)"),
          children: [
            A("Corte"),
            " ",
            lt || "—"
          ]
        }
      )
    ] })
  ] });
}
const uN = [
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
], sN = "/pikmin_bloom/", xE = "/pikmin/alma.png", cN = "/sonidos/pikmin.mp3", fN = "/sonidos/pikmin_morir.mp3";
function dN(g) {
  const [w, R] = ee.useState([]);
  return ee.useEffect(() => {
    fetch("/pikmin_bloom/indice.json").then((_) => _.ok ? _.json() : []).then((_) => {
      if (!Array.isArray(_)) return;
      const K = [..._];
      for (let G = K.length - 1; G > 0; G--) {
        const S = Math.floor(Math.random() * (G + 1));
        [K[G], K[S]] = [K[S], K[G]];
      }
      R(K.slice(0, 60).map((G) => sN + G));
    }).catch(() => {
    });
  }, []), ee.useMemo(
    () => g && g.length ? [...g, ...w] : [...uN, ...w],
    [g, w]
  );
}
function pN({
  activo: g = !0,
  frecuenciaMin: w = 5,
  sonido: R = !0,
  sonidoMorir: _ = !0,
  volumen: K = 0.5,
  mute: G = !1,
  fiesta: S = !1,
  minDelay: $e,
  maxDelay: F,
  fuentes: X
}) {
  const xe = dN(X), [A, ve] = ee.useState([]), fe = ee.useRef(void 0), He = ee.useRef(
    typeof document < "u" && document.visibilityState === "hidden"
  ), ne = ee.useRef(S);
  ne.current = S;
  const Ie = Math.max(5e3, w * 6e4), be = (re) => {
    if (!(!R || G))
      try {
        const Y = new Audio(re ? fN : cN);
        Y.volume = Math.min(1, Math.max(0, K)), Y.play().catch(() => {
        });
      } catch {
      }
  }, _e = () => {
    const re = _ && Math.random() < 0.25, Y = re ? xE : xe[Math.floor(Math.random() * xe.length)] ?? xE;
    ve((ae) => [...ae, {
      src: Y,
      left: 3 + Math.random() * 92,
      key: Date.now() + ae.length,
      morir: re,
      estado: "paseando"
    }]), be(re);
  }, pe = () => {
    if (!g) return;
    const re = $e ?? Math.round(Ie * 0.5), Y = F ?? Math.round(Ie * 1.5), ae = re + Math.random() * Math.max(1, Y - re);
    fe.current = window.setTimeout(_e, ae);
  };
  ee.useEffect(() => {
    if (!g) {
      window.clearTimeout(fe.current), ve([]);
      return;
    }
    return pe(), () => window.clearTimeout(fe.current);
  }, [g, w, R, _, K, G, xe]), ee.useEffect(() => {
    const re = () => {
      He.current = document.visibilityState === "hidden", !He.current && ne.current && window.setTimeout(() => {
        ve((Y) => Y.length ? (be(!1), Y.map((ae) => ({ ...ae, estado: "festejando" }))) : Y), window.setTimeout(() => {
          ve([]), pe();
        }, 2200);
      }, 1e3);
    };
    return document.addEventListener("visibilitychange", re), () => document.removeEventListener("visibilitychange", re);
  }, []);
  const Je = (re) => {
    if (ne.current && He.current) {
      ve((Y) => Y.map((ae) => ae.key === re ? { ...ae, estado: "quieto" } : ae));
      return;
    }
    ve((Y) => Y.filter((ae) => ae.key !== re)), pe();
  };
  return /* @__PURE__ */ v.jsx(v.Fragment, { children: A.map((re) => /* @__PURE__ */ v.jsx(
    "div",
    {
      className: `pikmin-pet ${re.estado}${re.morir ? " muriendo" : ""}`,
      "data-testid": "pikmin-pet",
      "data-estado": re.estado,
      "data-morir": re.morir ? "1" : "0",
      style: { left: `${re.left}%` },
      onAnimationEnd: () => Je(re.key),
      children: /* @__PURE__ */ v.jsx(
        "img",
        {
          src: re.src,
          alt: "",
          "aria-hidden": "true",
          onError: () => Je(re.key)
        }
      )
    },
    re.key
  )) });
}
const bE = "crycat_bienvenida_v1";
function vN() {
  const [g, w] = ee.useState(!1);
  return ee.useEffect(() => {
    try {
      localStorage.getItem(bE) !== "1" && w(!0);
    } catch {
      w(!0);
    }
  }, []), { visible: g, abrir: () => w(!0), cerrar: () => {
    try {
      localStorage.setItem(bE, "1");
    } catch {
    }
    w(!1);
  } };
}
function mN({ open: g, onClose: w, onAbrirCarpeta: R }) {
  const _ = Jo(), [K, G] = ee.useState("inicio");
  if (!g) return null;
  const S = [
    _("Arrastra tus imágenes al panel de la izquierda (PNG, JPG, PSD, AI, SVG…)."),
    _("Ajusta el tamaño: usa la escala o escribe el ancho/alto exacto en mm."),
    _("Activa «Mini» en las imágenes que quieras repetir rellenando huecos."),
    _("Pulsa «Recalcular» si quieres recolocarlo a fondo (o déjalo en automático)."),
    _("Guarda: un PNG a 300 ppp listo para imprimir. Nunca sobrescribe nada.")
  ], $e = [
    _("Abre Cricut Design Space."),
    _("Sube el PNG y elige «Imagen completa» (conserva la transparencia)."),
    _("Redimensiónala al tamaño real que ves en CryCat."),
    _("Pulsa «Crear» y comprueba que las medidas coinciden."),
    _("Imprime en papel mate blanco (o usa las marcas de Cricut) y colócalo en la esterilla."),
    _("¡Listo! La máquina leerá las marcas y cortará tus pegatinas.")
  ];
  return /* @__PURE__ */ v.jsx("div", { className: "modal-back", "data-testid": "ayuda-dialog", children: /* @__PURE__ */ v.jsxs("div", { className: "modal ayuda-modal", children: [
    /* @__PURE__ */ v.jsx("h3", { children: _(K === "inicio" ? "Cómo usar CryCat" : "Cómo usar tu PNG en Cricut Design Space") }),
    /* @__PURE__ */ v.jsx("ol", { className: "lista-pasos", "data-testid": "ayuda-pasos", children: (K === "inicio" ? S : $e).map((F, X) => /* @__PURE__ */ v.jsx("li", { children: F }, X)) }),
    K === "inicio" && /* @__PURE__ */ v.jsx("div", { className: "hint", children: _("Los archivos originales nunca se modifican y la exportación nunca sobrescribe.") }),
    /* @__PURE__ */ v.jsx("div", { className: "modal-botones", children: K === "inicio" ? /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
      R && /* @__PURE__ */ v.jsxs("button", { "data-testid": "ayuda-carpeta", onClick: R, children: [
        /* @__PURE__ */ v.jsx(lv, { size: 15 }),
        " ",
        _("Abrir carpeta de guardado")
      ] }),
      /* @__PURE__ */ v.jsx("button", { "data-testid": "ayuda-cricut", onClick: () => G("cricut"), children: _("Pasos en Cricut Design Space") }),
      /* @__PURE__ */ v.jsx("button", { className: "primary", "data-testid": "ayuda-cerrar", onClick: w, children: _("¡Entendido!") })
    ] }) : /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
      /* @__PURE__ */ v.jsx("button", { "data-testid": "ayuda-volver", onClick: () => G("inicio"), children: _("Volver") }),
      /* @__PURE__ */ v.jsx("button", { className: "primary", onClick: w, children: _("¡Entendido!") })
    ] }) })
  ] }) });
}
function hN() {
  const [g, w] = ee.useState([]), [R, _] = ee.useState(null), [K, G] = ee.useState(null), [S, $e] = ee.useState(null), [F, X] = ee.useState(null), [xe, A] = ee.useState(null), [ve, fe] = ee.useState(!0), [He, ne] = ee.useState({
    eyeTransparent: !1,
    eyeFosforito: !1,
    guidesVisible: !0,
    viewMode: 1,
    saveName: ""
  }), [Ie, be] = ee.useState(33.3), [_e, pe] = ee.useState(33.3), Je = vN(), re = ee.useRef(null), Y = ee.useRef(null);
  ee.useEffect(() => {
    (async () => {
      try {
        const oe = await it.getSettings();
        X(oe.settings), CC(oe.settings.tema), ne((Se) => ({
          ...Se,
          guidesVisible: oe.settings.ver_guias,
          eyeTransparent: oe.settings.fondo_transparente
        })), w((await it.listAssets()).map(iv)), G(await it.result());
      } catch {
        fe(!1);
      }
    })();
  }, []), ee.useEffect(() => {
    const oe = setInterval(async () => {
      try {
        await it.health(), fe(!0);
      } catch {
        fe(!1);
      }
    }, 5e3);
    return () => clearInterval(oe);
  }, []);
  const ae = ee.useCallback(async () => {
    try {
      w((await it.listAssets()).map(iv)), G(await it.result());
      try {
        $e(await it.estimate());
      } catch {
      }
    } catch {
      fe(!1);
    }
  }, []), Me = ee.useCallback((oe) => {
    Y.current && window.clearInterval(Y.current), Y.current = window.setInterval(async () => {
      try {
        const Se = await it.job(oe);
        A(Se), Se.done && (window.clearInterval(Y.current), Y.current = null, await ae(), Se.status === "done" && window.setTimeout(() => A(null), 2500));
      } catch {
        window.clearInterval(Y.current), Y.current = null;
      }
    }, 300);
  }, []), de = ee.useCallback(async () => {
    try {
      const oe = await it.optimize();
      A(oe), Me(oe.id);
    } catch {
      fe(!1);
    }
  }, [Me]), nt = ee.useCallback(
    async (oe) => {
      try {
        const Se = await it.optimize(oe, !0);
        A(Se), Me(Se.id);
      } catch {
        fe(!1);
      }
    },
    [Me]
  ), et = ee.useCallback(() => {
    F && F.auto_recalcular === !1 || (re.current && window.clearTimeout(re.current), re.current = window.setTimeout(de, 400));
  }, [de, F]), Xe = ee.useCallback(
    async (oe) => {
      X((Se) => Se && { ...Se, ...oe }), oe.tema && CC(oe.tema);
      try {
        const Se = await it.putSettings(oe);
        if (Se.job)
          A(Se.job), Me(Se.job.id);
        else
          try {
            $e(await it.estimate());
          } catch {
          }
      } catch {
        fe(!1);
      }
    },
    [Me]
  ), z = ee.useRef([]), Oe = ee.useRef([]), [lt, ht] = ee.useState({ puedeDeshacer: !1, puedeRehacer: !1 }), ke = (F == null ? void 0 : F.historial) !== !1, ce = (F == null ? void 0 : F.historial_max) ?? 40, Le = () => ht({
    puedeDeshacer: z.current.length > 0,
    puedeRehacer: Oe.current.length > 0
  }), ge = ee.useCallback(() => {
    const oe = [];
    return (F == null ? void 0 : F.hist_tamano) !== !1 && oe.push("scale_pct"), (F == null ? void 0 : F.hist_copias) !== !1 && oe.push("copies"), (F == null ? void 0 : F.hist_borde) !== !1 && oe.push("offset_mm", "offset_modo", "offset_color"), (F == null ? void 0 : F.hist_minis) !== !1 && oe.push("mini_enabled", "mini_quota"), oe;
  }, [
    F == null ? void 0 : F.hist_tamano,
    F == null ? void 0 : F.hist_copias,
    F == null ? void 0 : F.hist_borde,
    F == null ? void 0 : F.hist_minis
  ]), D = ee.useCallback((oe) => {
    const Se = {};
    for (const pt of ge()) Se[pt] = oe[pt];
    return Se;
  }, [ge]), M = ee.useCallback(() => {
    ke && (z.current = [...z.current, g].slice(-ce), Oe.current = [], Le());
  }, [g, ke, ce]), Ve = ee.useCallback(async () => {
    const oe = z.current.pop();
    if (oe) {
      Oe.current = [...Oe.current, g], w(oe), Le();
      for (const Se of oe)
        await it.patchAsset(Se.id, D(Se)).catch(() => {
        });
      await ae();
    }
  }, [g, ae, D]), Ke = ee.useCallback(async () => {
    const oe = Oe.current.pop();
    if (oe) {
      z.current = [...z.current, g], w(oe), Le();
      for (const Se of oe)
        await it.patchAsset(Se.id, D(Se)).catch(() => {
        });
      await ae();
    }
  }, [g, ae, D]);
  ee.useEffect(() => {
    const oe = (Se) => {
      if (!(Se.ctrlKey || Se.metaKey)) return;
      const st = Se.target;
      if (st && (st.tagName === "INPUT" || st.tagName === "TEXTAREA" || st.tagName === "SELECT" || st.isContentEditable)) return;
      const on = Se.key.toLowerCase();
      on === "z" && !Se.shiftKey ? (Se.preventDefault(), Ve()) : (on === "y" || on === "z" && Se.shiftKey) && (Se.preventDefault(), Ke());
    };
    return window.addEventListener("keydown", oe), () => window.removeEventListener("keydown", oe);
  }, [Ve, Ke]);
  const St = ee.useCallback(
    (oe) => {
      const Se = (st) => {
        const Ht = window.innerWidth, on = st.clientX / Ht * 100;
        oe === "left" ? be(Math.min(45, Math.max(12, on))) : pe(Math.min(60, Math.max(20, on - Ie)));
      }, pt = () => {
        window.removeEventListener("mousemove", Se), window.removeEventListener("mouseup", pt);
      };
      window.addEventListener("mousemove", Se), window.addEventListener("mouseup", pt);
    },
    [Ie]
  );
  return ee.useEffect(() => {
    document.documentElement.lang = (F == null ? void 0 : F.idioma) ?? "es";
  }, [F == null ? void 0 : F.idioma]), F ? /* @__PURE__ */ v.jsx(Ok, { idioma: F.idioma ?? "es", children: /* @__PURE__ */ v.jsxs("div", { className: "app", children: [
    /* @__PURE__ */ v.jsxs("div", { className: "main", children: [
      /* @__PURE__ */ v.jsx("div", { className: "panel left", style: { width: `${Ie}%` }, "data-testid": "file-panel", children: /* @__PURE__ */ v.jsx(
        nN,
        {
          assets: g,
          result: K,
          settings: F,
          onChange: async () => {
            await ae(), et();
          },
          saveSettings: Xe,
          onEditarContorno: (oe) => _(oe),
          onAntesDeCambiar: M
        }
      ) }),
      /* @__PURE__ */ v.jsx("div", { className: "splitter", "data-testid": "splitter-left", onMouseDown: () => St("left") }),
      /* @__PURE__ */ v.jsx("div", { className: "viewer-wrap", style: { width: `${_e}%` }, children: /* @__PURE__ */ v.jsx(
        aN,
        {
          assets: g,
          result: K,
          settings: F,
          ui: He,
          setUi: ne,
          saveSettings: Xe,
          optimize: de,
          onRefresh: ae,
          onJob: (oe) => {
            A(oe), Me(oe.id);
          },
          onRecalc: nt,
          editando: R,
          onFinEdicion: async () => {
            _(null), await ae();
          },
          onDeshacer: Ve,
          onRehacer: Ke,
          puedeDeshacer: lt.puedeDeshacer,
          puedeRehacer: lt.puedeRehacer
        }
      ) }),
      /* @__PURE__ */ v.jsx("div", { className: "splitter", "data-testid": "splitter-center", onMouseDown: () => St("center") }),
      /* @__PURE__ */ v.jsx("div", { className: "panel right", style: { flex: 1 }, "data-testid": "settings-panel", children: /* @__PURE__ */ v.jsx(
        lN,
        {
          settings: F,
          saveSettings: Xe,
          applySettings: (oe, Se) => {
            X(oe), CC(oe.tema), Se && (A(Se), Me(Se.id));
          }
        }
      ) })
    ] }),
    /* @__PURE__ */ v.jsx(
      oN,
      {
        job: xe,
        backendOk: ve,
        result: K,
        estimate: S,
        volumen: F.volumen ?? 0.5,
        mute: F.mute ?? !1,
        onVolumen: (oe) => Xe({ volumen: oe }),
        onMute: (oe) => Xe({ mute: oe }),
        onIdioma: (oe) => Xe({ idioma: oe }),
        onEasterEgg: () => Xe({
          pikmin_fiesta: !F.pikmin_fiesta
        }),
        onAyuda: Je.abrir
      }
    ),
    /* @__PURE__ */ v.jsx(
      pN,
      {
        activo: F.pikmin_activo !== !1,
        frecuenciaMin: F.pikmin_frecuencia_min ?? 1,
        sonido: F.pikmin_sonido !== !1,
        sonidoMorir: F.pikmin_sonido_morir !== !1,
        volumen: F.volumen ?? 0.5,
        mute: F.mute ?? !1,
        fiesta: F.pikmin_fiesta === !0
      }
    ),
    /* @__PURE__ */ v.jsx(
      mN,
      {
        open: Je.visible,
        onClose: Je.cerrar,
        onAbrirCarpeta: () => void it.fsOpen(
          F.carpeta_export || ""
        ).catch(() => {
        })
      }
    )
  ] }) }) : /* @__PURE__ */ v.jsx("div", { style: { padding: 30 }, children: Mk("es", "Cargando CryCat…") });
}
const DE = document.getElementById("root");
function EE(g, w = !1) {
  DE.innerHTML = `
    <div style="min-height:100vh;display:flex;flex-direction:column;
                align-items:center;justify-content:center;gap:14px;
                font:16px/1.5 system-ui,sans-serif;color:${w ? "#d94f6a" : "#8a7480"};
                background:#fdf7f9;padding:24px;text-align:center">
      <img src="./icono.png" alt="" style="width:88px;height:88px;border-radius:22px" />
      <div style="font-size:20px;font-weight:700;color:#43303a">CryCat web</div>
      <div id="carga-txt">${g}</div>
      <div style="max-width:520px;font-size:13px;color:#8a7480">
        El motor se descarga una vez y se queda en caché del navegador.
        Tus imágenes no salen de tu equipo.
      </div>
    </div>`;
}
const xC = (g) => {
  const w = document.getElementById("carga-txt");
  w && (w.textContent = g);
};
let bC = null;
async function yN() {
  try {
    if (EE("Preparando el entorno…"), !("serviceWorker" in navigator))
      throw new Error("Este navegador no soporta service workers");
    await navigator.serviceWorker.register("../sw.js", {
      scope: new URL("../", location.href).pathname
    }), await navigator.serviceWorker.ready, bC = await (await import(new URL("../pyodide-crycat.js", import.meta.url).href)).cargarCryCat(xC), xC("Instalando FastAPI en el navegador…"), await bC.runPythonAsync(
      `import asyncio
from crycat import webapi
await webapi.iniciar()`
    ), navigator.serviceWorker.addEventListener("message", async (R) => {
      const _ = R.data;
      if (!_ || _.tipo !== "api") return;
      const K = R.ports && R.ports[0];
      if (K)
        try {
          const G = `import json
from crycat import webapi
await webapi.peticion(` + JSON.stringify(_.method) + ", " + JSON.stringify(_.path) + ", " + JSON.stringify(JSON.stringify(_.headers || {})) + ", " + JSON.stringify(_.body || "") + ")", S = await bC.runPythonAsync(G);
          K.postMessage(JSON.parse(S));
        } catch (G) {
          K.postMessage({
            status: 500,
            headers: { "content-type": "text/plain; charset=utf-8" },
            body: btoa("error: " + (G && G.message ? G.message : G))
          });
        }
    }), xC("Abriendo la aplicación…"), RC(DE).render(/* @__PURE__ */ v.jsx(hN, {}));
  } catch (g) {
    EE("No se pudo iniciar la versión web: " + (g && g.message ? g.message : g), !0);
  }
}
yN();
