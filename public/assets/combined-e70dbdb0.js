/*
 AngularJS v1.3.0-build.2909+sha.2e84cf9
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function (N, U, r) {
  'use strict';
  function K(b) {
    return function () {
      var a = arguments[0], c, a = '[' + (b ? b + ':' : '') + a + '] http://errors.angularjs.org/1.3.0-build.2909+sha.2e84cf9/' + (b ? b + '/' : '') + a;
      for (c = 1; c < arguments.length; c++)
        a = a + (1 == c ? '?' : '&') + 'p' + (c - 1) + '=' + encodeURIComponent('function' == typeof arguments[c] ? arguments[c].toString().replace(/ \{[\s\S]*$/, '') : 'undefined' == typeof arguments[c] ? 'undefined' : 'string' != typeof arguments[c] ? JSON.stringify(arguments[c]) : arguments[c]);
      return Error(a);
    };
  }
  function db(b) {
    if (null == b || Oa(b))
      return !1;
    var a = b.length;
    return 1 === b.nodeType && a ? !0 : x(b) || L(b) || 0 === a || 'number' === typeof a && 0 < a && a - 1 in b;
  }
  function q(b, a, c) {
    var d, e;
    if (b)
      if (M(b))
        for (d in b)
          'prototype' == d || ('length' == d || 'name' == d || b.hasOwnProperty && !b.hasOwnProperty(d)) || a.call(c, b[d], d);
      else if (L(b) || db(b))
        for (d = 0, e = b.length; d < e; d++)
          a.call(c, b[d], d);
      else if (b.forEach && b.forEach !== q)
        b.forEach(a, c);
      else
        for (d in b)
          b.hasOwnProperty(d) && a.call(c, b[d], d);
    return b;
  }
  function Xb(b) {
    var a = [], c;
    for (c in b)
      b.hasOwnProperty(c) && a.push(c);
    return a.sort();
  }
  function jd(b, a, c) {
    for (var d = Xb(b), e = 0; e < d.length; e++)
      a.call(c, b[d[e]], d[e]);
    return d;
  }
  function Yb(b) {
    return function (a, c) {
      b(c, a);
    };
  }
  function kd() {
    return ++eb;
  }
  function Zb(b, a) {
    a ? b.$$hashKey = a : delete b.$$hashKey;
  }
  function A(b) {
    var a = b.$$hashKey;
    q(arguments, function (a) {
      a !== b && q(a, function (a, c) {
        b[c] = a;
      });
    });
    Zb(b, a);
    return b;
  }
  function Y(b) {
    return parseInt(b, 10);
  }
  function $b(b, a) {
    return A(new (A(function () {
    }, { prototype: b }))(), a);
  }
  function B() {
  }
  function Ea(b) {
    return b;
  }
  function da(b) {
    return function () {
      return b;
    };
  }
  function y(b) {
    return 'undefined' === typeof b;
  }
  function F(b) {
    return 'undefined' !== typeof b;
  }
  function S(b) {
    return null != b && 'object' === typeof b;
  }
  function x(b) {
    return 'string' === typeof b;
  }
  function Fa(b) {
    return 'number' === typeof b;
  }
  function ra(b) {
    return '[object Date]' === za.call(b);
  }
  function M(b) {
    return 'function' === typeof b;
  }
  function fb(b) {
    return '[object RegExp]' === za.call(b);
  }
  function Oa(b) {
    return b && b.window === b;
  }
  function ld(b) {
    return !(!b || !(b.nodeName || b.prop && b.attr && b.find));
  }
  function md(b) {
    var a = {};
    b = b.split(',');
    var c;
    for (c = 0; c < b.length; c++)
      a[b[c]] = !0;
    return a;
  }
  function nd(b, a, c) {
    var d = [];
    q(b, function (b, f, g) {
      d.push(a.call(c, b, f, g));
    });
    return d;
  }
  function Pa(b, a) {
    if (b.indexOf)
      return b.indexOf(a);
    for (var c = 0; c < b.length; c++)
      if (a === b[c])
        return c;
    return -1;
  }
  function Ga(b, a) {
    var c = Pa(b, a);
    0 <= c && b.splice(c, 1);
    return a;
  }
  function Aa(b, a, c, d) {
    if (Oa(b) || b && b.$evalAsync && b.$watch)
      throw Qa('cpws');
    if (a) {
      if (b === a)
        throw Qa('cpi');
      c = c || [];
      d = d || [];
      if (S(b)) {
        var e = Pa(c, b);
        if (-1 !== e)
          return d[e];
        c.push(b);
        d.push(a);
      }
      if (L(b))
        for (var f = a.length = 0; f < b.length; f++)
          e = Aa(b[f], null, c, d), S(b[f]) && (c.push(b[f]), d.push(e)), a.push(e);
      else {
        var g = a.$$hashKey;
        q(a, function (b, c) {
          delete a[c];
        });
        for (f in b)
          b.hasOwnProperty(f) && (e = Aa(b[f], null, c, d), S(b[f]) && (c.push(b[f]), d.push(e)), a[f] = e);
        Zb(a, g);
      }
    } else if (a = b)
      L(b) ? a = Aa(b, [], c, d) : ra(b) ? a = new Date(b.getTime()) : fb(b) ? a = RegExp(b.source) : S(b) && (e = Object.create(Object.getPrototypeOf(b)), a = Aa(b, e, c, d));
    return a;
  }
  function ka(b, a) {
    var c = 0;
    if (L(b))
      for (a = a || []; c < b.length; c++)
        a[c] = b[c];
    else if (S(b)) {
      a = a || {};
      for (var d = Object.keys(b), e = d.length; c < e; c++) {
        var f = d[c];
        if ('$' !== f.charAt(0) || '$' !== f.charAt(1))
          a[f] = b[f];
      }
    }
    return a || b;
  }
  function sa(b, a) {
    if (b === a)
      return !0;
    if (null === b || null === a)
      return !1;
    if (b !== b && a !== a)
      return !0;
    var c = typeof b, d;
    if (c == typeof a && 'object' == c)
      if (L(b)) {
        if (!L(a))
          return !1;
        if ((c = b.length) == a.length) {
          for (d = 0; d < c; d++)
            if (!sa(b[d], a[d]))
              return !1;
          return !0;
        }
      } else {
        if (ra(b))
          return ra(a) && b.getTime() == a.getTime();
        if (fb(b) && fb(a))
          return b.toString() == a.toString();
        if (b && b.$evalAsync && b.$watch || a && a.$evalAsync && a.$watch || Oa(b) || Oa(a) || L(a))
          return !1;
        c = {};
        for (d in b)
          if ('$' !== d.charAt(0) && !M(b[d])) {
            if (!sa(b[d], a[d]))
              return !1;
            c[d] = !0;
          }
        for (d in a)
          if (!c.hasOwnProperty(d) && '$' !== d.charAt(0) && a[d] !== r && !M(a[d]))
            return !1;
        return !0;
      }
    return !1;
  }
  function ac() {
    return U.securityPolicy && U.securityPolicy.isActive || U.querySelector && !(!U.querySelector('[ng-csp]') && !U.querySelector('[data-ng-csp]'));
  }
  function Ab(b, a) {
    var c = 2 < arguments.length ? la.call(arguments, 2) : [];
    return !M(a) || a instanceof RegExp ? a : c.length ? function () {
      return arguments.length ? a.apply(b, c.concat(la.call(arguments, 0))) : a.apply(b, c);
    } : function () {
      return arguments.length ? a.apply(b, arguments) : a.call(b);
    };
  }
  function od(b, a) {
    var c = a;
    'string' === typeof b && '$' === b.charAt(0) && '$' === b.charAt(1) ? c = r : Oa(a) ? c = '$WINDOW' : a && U === a ? c = '$DOCUMENT' : a && (a.$evalAsync && a.$watch) && (c = '$SCOPE');
    return c;
  }
  function ta(b, a) {
    return 'undefined' === typeof b ? r : JSON.stringify(b, od, a ? '  ' : null);
  }
  function bc(b) {
    return x(b) ? JSON.parse(b) : b;
  }
  function ha(b) {
    b = C(b).clone();
    try {
      b.empty();
    } catch (a) {
    }
    var c = C('<div>').append(b).html();
    try {
      return 3 === b[0].nodeType ? G(c) : c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (a, b) {
        return '<' + G(b);
      });
    } catch (d) {
      return G(c);
    }
  }
  function cc(b) {
    try {
      return decodeURIComponent(b);
    } catch (a) {
    }
  }
  function dc(b) {
    var a = {}, c, d;
    q((b || '').split('&'), function (b) {
      b && (c = b.split('='), d = cc(c[0]), F(d) && (b = F(c[1]) ? cc(c[1]) : !0, Bb.call(a, d) ? L(a[d]) ? a[d].push(b) : a[d] = [
        a[d],
        b
      ] : a[d] = b));
    });
    return a;
  }
  function Cb(b) {
    var a = [];
    q(b, function (b, d) {
      L(b) ? q(b, function (b) {
        a.push(Ba(d, !0) + (!0 === b ? '' : '=' + Ba(b, !0)));
      }) : a.push(Ba(d, !0) + (!0 === b ? '' : '=' + Ba(b, !0)));
    });
    return a.length ? a.join('&') : '';
  }
  function gb(b) {
    return Ba(b, !0).replace(/%26/gi, '&').replace(/%3D/gi, '=').replace(/%2B/gi, '+');
  }
  function Ba(b, a) {
    return encodeURIComponent(b).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, a ? '%20' : '+');
  }
  function pd(b, a) {
    var c, d, e = ec.length;
    b = C(b);
    for (d = 0; d < e; ++d)
      if (c = ec[d] + a, x(c = b.attr(c)))
        return c;
    return null;
  }
  function qd(b, a) {
    function c(a) {
      a && d.push(a);
    }
    var d = [b], e, f, g = {}, h = [
        'ng:app',
        'ng-app',
        'x-ng-app',
        'data-ng-app'
      ], m = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
    q(h, function (a) {
      h[a] = !0;
      c(U.getElementById(a));
      a = a.replace(':', '\\:');
      b.querySelectorAll && (q(b.querySelectorAll('.' + a), c), q(b.querySelectorAll('.' + a + '\\:'), c), q(b.querySelectorAll('[' + a + ']'), c));
    });
    q(d, function (a) {
      if (!e) {
        var b = m.exec(' ' + a.className + ' ');
        b ? (e = a, f = (b[2] || '').replace(/\s+/g, ',')) : q(a.attributes, function (b) {
          !e && h[b.name] && (e = a, f = b.value);
        });
      }
    });
    e && (g.strictDi = null !== pd(e, 'strict-di'), a(e, f ? [f] : [], g));
  }
  function fc(b, a, c) {
    S(c) || (c = {});
    c = A({ strictDi: !1 }, c);
    var d = function () {
        b = C(b);
        if (b.injector()) {
          var d = b[0] === U ? 'document' : ha(b);
          throw Qa('btstrpd', d);
        }
        a = a || [];
        a.unshift([
          '$provide',
          function (a) {
            a.value('$rootElement', b);
          }
        ]);
        a.unshift('ng');
        d = Db(a, c.strictDi);
        d.invoke([
          '$rootScope',
          '$rootElement',
          '$compile',
          '$injector',
          function (a, b, c, d) {
            a.$apply(function () {
              b.data('$injector', d);
              c(b)(a);
            });
          }
        ]);
        return d;
      }, e = /^NG_DEFER_BOOTSTRAP!/;
    if (N && !e.test(N.name))
      return d();
    N.name = N.name.replace(e, '');
    Ra.resumeBootstrap = function (b) {
      q(b, function (b) {
        a.push(b);
      });
      d();
    };
  }
  function hb(b, a) {
    a = a || '_';
    return b.replace(rd, function (b, d) {
      return (d ? a : '') + b.toLowerCase();
    });
  }
  function sd() {
    var b;
    (ua = N.jQuery) && ua.fn.on ? (C = ua, A(ua.fn, {
      scope: Ha.scope,
      isolateScope: Ha.isolateScope,
      controller: Ha.controller,
      injector: Ha.injector,
      inheritedData: Ha.inheritedData
    }), b = ua.cleanData, b = b.$$original || b, ua.cleanData = function (a) {
      for (var c = 0, d; null != (d = a[c]); c++)
        ua(d).triggerHandler('$destroy');
      b(a);
    }, ua.cleanData.$$original = b) : C = Q;
    Ra.element = C;
  }
  function Eb(b, a, c) {
    if (!b)
      throw Qa('areq', a || '?', c || 'required');
    return b;
  }
  function Sa(b, a, c) {
    c && L(b) && (b = b[b.length - 1]);
    Eb(M(b), a, 'not a function, got ' + (b && 'object' === typeof b ? b.constructor.name || 'Object' : typeof b));
    return b;
  }
  function Ca(b, a) {
    if ('hasOwnProperty' === b)
      throw Qa('badname', a);
  }
  function gc(b, a, c) {
    if (!a)
      return b;
    a = a.split('.');
    for (var d, e = b, f = a.length, g = 0; g < f; g++)
      d = a[g], b && (b = (e = b)[d]);
    return !c && M(b) ? Ab(e, b) : b;
  }
  function Fb(b) {
    var a = b[0];
    b = b[b.length - 1];
    if (a === b)
      return C(a);
    var c = [a];
    do {
      a = a.nextSibling;
      if (!a)
        break;
      c.push(a);
    } while (a !== b);
    return C(c);
  }
  function td(b) {
    var a = K('$injector'), c = K('ng');
    b = b.angular || (b.angular = {});
    b.$$minErr = b.$$minErr || K;
    return b.module || (b.module = function () {
      var b = {};
      return function (e, f, g) {
        if ('hasOwnProperty' === e)
          throw c('badname', 'module');
        f && b.hasOwnProperty(e) && (b[e] = null);
        return b[e] || (b[e] = function () {
          function b(a, d, e, f) {
            f || (f = c);
            return function () {
              f[e || 'push']([
                a,
                d,
                arguments
              ]);
              return k;
            };
          }
          if (!f)
            throw a('nomod', e);
          var c = [], d = [], n = [], p = b('$injector', 'invoke', 'push', d), k = {
              _invokeQueue: c,
              _configBlocks: d,
              _runBlocks: n,
              requires: f,
              name: e,
              provider: b('$provide', 'provider'),
              factory: b('$provide', 'factory'),
              service: b('$provide', 'service'),
              value: b('$provide', 'value'),
              constant: b('$provide', 'constant', 'unshift'),
              animation: b('$animateProvider', 'register'),
              filter: b('$filterProvider', 'register'),
              controller: b('$controllerProvider', 'register'),
              directive: b('$compileProvider', 'directive'),
              config: p,
              run: function (a) {
                n.push(a);
                return this;
              }
            };
          g && p(g);
          return k;
        }());
      };
    }());
  }
  function ud(b) {
    A(b, {
      bootstrap: fc,
      copy: Aa,
      extend: A,
      equals: sa,
      element: C,
      forEach: q,
      injector: Db,
      noop: B,
      bind: Ab,
      toJson: ta,
      fromJson: bc,
      identity: Ea,
      isUndefined: y,
      isDefined: F,
      isString: x,
      isFunction: M,
      isObject: S,
      isNumber: Fa,
      isElement: ld,
      isArray: L,
      version: vd,
      isDate: ra,
      lowercase: G,
      uppercase: ib,
      callbacks: { counter: 0 },
      $$minErr: K,
      $$csp: ac
    });
    Ta = td(N);
    try {
      Ta('ngLocale');
    } catch (a) {
      Ta('ngLocale', []).provider('$locale', wd);
    }
    Ta('ng', ['ngLocale'], [
      '$provide',
      function (a) {
        a.provider({ $$sanitizeUri: xd });
        a.provider('$compile', hc).directive({
          a: yd,
          input: ic,
          textarea: ic,
          form: zd,
          script: Ad,
          select: Bd,
          style: Cd,
          option: Dd,
          ngBind: Ed,
          ngBindHtml: Fd,
          ngBindTemplate: Gd,
          ngClass: Hd,
          ngClassEven: Id,
          ngClassOdd: Jd,
          ngCloak: Kd,
          ngController: Ld,
          ngForm: Md,
          ngHide: Nd,
          ngIf: Od,
          ngInclude: Pd,
          ngInit: Qd,
          ngNonBindable: Rd,
          ngPluralize: Sd,
          ngRepeat: Td,
          ngShow: Ud,
          ngStyle: Vd,
          ngSwitch: Wd,
          ngSwitchWhen: Xd,
          ngSwitchDefault: Yd,
          ngOptions: Zd,
          ngTransclude: $d,
          ngModel: ae,
          ngList: be,
          ngChange: ce,
          pattern: jc,
          ngPattern: jc,
          required: kc,
          ngRequired: kc,
          minlength: lc,
          ngMinlength: lc,
          maxlength: mc,
          ngMaxlength: mc,
          ngValue: de,
          ngModelOptions: ee
        }).directive({ ngInclude: fe }).directive(jb).directive(nc);
        a.provider({
          $anchorScroll: ge,
          $animate: he,
          $browser: ie,
          $cacheFactory: je,
          $controller: ke,
          $document: le,
          $exceptionHandler: me,
          $filter: oc,
          $interpolate: ne,
          $interval: oe,
          $http: pe,
          $httpBackend: qe,
          $location: re,
          $log: se,
          $parse: te,
          $rootScope: ue,
          $q: ve,
          $$q: we,
          $sce: xe,
          $sceDelegate: ye,
          $sniffer: ze,
          $templateCache: Ae,
          $timeout: Be,
          $window: Ce,
          $$rAF: De,
          $$asyncCallback: Ee
        });
      }
    ]);
  }
  function Ua(b) {
    return b.replace(Fe, function (a, b, d, e) {
      return e ? d.toUpperCase() : d;
    }).replace(Ge, 'Moz$1');
  }
  function He(b, a) {
    var c, d, e = a.createDocumentFragment(), f = [];
    if (Gb.test(b)) {
      c = c || e.appendChild(a.createElement('div'));
      d = (Ie.exec(b) || [
        '',
        ''
      ])[1].toLowerCase();
      d = fa[d] || fa._default;
      c.innerHTML = d[1] + b.replace(Je, '<$1></$2>') + d[2];
      for (d = d[0]; d--;)
        c = c.lastChild;
      f = f.concat(la.call(c.childNodes, void 0));
      c = e.firstChild;
      c.textContent = '';
    } else
      f.push(a.createTextNode(b));
    e.textContent = '';
    e.innerHTML = '';
    q(f, function (a) {
      e.appendChild(a);
    });
    return e;
  }
  function Q(b) {
    if (b instanceof Q)
      return b;
    x(b) && (b = aa(b));
    if (!(this instanceof Q)) {
      if (x(b) && '<' != b.charAt(0))
        throw Hb('nosel');
      return new Q(b);
    }
    if (x(b)) {
      var a;
      a = U;
      var c;
      b = (c = Ke.exec(b)) ? [a.createElement(c[1])] : (c = He(b, a)) ? c.childNodes : [];
    }
    pc(this, b);
  }
  function Ib(b) {
    return b.cloneNode(!0);
  }
  function Ia(b) {
    qc(b);
    for (var a = 0, c = b.children, d = c && c.length || 0; a < d; a++)
      b = c[a], Ia(b);
  }
  function rc(b, a, c, d) {
    if (F(d))
      throw Hb('offargs');
    var e = ma(b, 'events');
    ma(b, 'handle') && (y(a) ? q(e, function (a, c) {
      Va(b, c, a);
      delete e[c];
    }) : q(a.split(' '), function (a) {
      y(c) ? (Va(b, a, e[a]), delete e[a]) : Ga(e[a] || [], c);
    }));
  }
  function qc(b, a) {
    var c = b.ng339, d = Wa[c];
    d && (a ? delete Wa[c].data[a] : (d.handle && (d.events.$destroy && d.handle({}, '$destroy'), rc(b)), delete Wa[c], b.ng339 = r));
  }
  function ma(b, a, c) {
    var d = b.ng339, d = Wa[d || -1];
    if (F(c))
      d || (b.ng339 = d = ++Le, d = Wa[d] = {}), d[a] = c;
    else
      return d && d[a];
  }
  function sc(b, a, c) {
    if (!b.nodeType || 1 === b.nodeType || 9 === b.nodeType) {
      var d = ma(b, 'data'), e = F(c), f = !e && F(a), g = f && !S(a);
      d || g || ma(b, 'data', d = {});
      if (e)
        d[a] = c;
      else if (f) {
        if (g)
          return d && d[a];
        A(d, a);
      } else
        return d;
    }
  }
  function Jb(b, a) {
    return b.getAttribute ? -1 < (' ' + (b.getAttribute('class') || '') + ' ').replace(/[\n\t]/g, ' ').indexOf(' ' + a + ' ') : !1;
  }
  function kb(b, a) {
    a && b.setAttribute && q(a.split(' '), function (a) {
      b.setAttribute('class', aa((' ' + (b.getAttribute('class') || '') + ' ').replace(/[\n\t]/g, ' ').replace(' ' + aa(a) + ' ', ' ')));
    });
  }
  function lb(b, a) {
    if (a && b.setAttribute) {
      var c = (' ' + (b.getAttribute('class') || '') + ' ').replace(/[\n\t]/g, ' ');
      q(a.split(' '), function (a) {
        a = aa(a);
        -1 === c.indexOf(' ' + a + ' ') && (c += a + ' ');
      });
      b.setAttribute('class', aa(c));
    }
  }
  function pc(b, a) {
    if (a)
      if (a.nodeType)
        b[b.length++] = a;
      else {
        var c = a.length;
        'number' === typeof c && a.window !== a ? c && (a.item && (a = la.call(a)), tc.apply(b, a)) : b[b.length++] = a;
      }
  }
  function uc(b, a) {
    return mb(b, '$' + (a || 'ngController') + 'Controller');
  }
  function mb(b, a, c) {
    b = C(b);
    9 == b[0].nodeType && (b = b.find('html'));
    for (a = L(a) ? a : [a]; b.length;) {
      for (var d = b[0], e = 0, f = a.length; e < f; e++)
        if ((c = b.data(a[e])) !== r)
          return c;
      b = C(d.parentNode || 11 === d.nodeType && d.host);
    }
  }
  function vc(b) {
    for (var a = 0, c = b.childNodes; a < c.length; a++)
      Ia(c[a]);
    for (; b.firstChild;)
      b.removeChild(b.firstChild);
  }
  function wc(b, a) {
    var c = nb[a.toLowerCase()];
    return c && xc[na(b)] && c;
  }
  function Me(b, a) {
    var c = b.nodeName;
    return ('INPUT' === c || 'TEXTAREA' === c) && yc[a];
  }
  function Ne(b, a) {
    var c = function (c, e) {
      c.preventDefault || (c.preventDefault = function () {
        c.returnValue = !1;
      });
      c.stopPropagation || (c.stopPropagation = function () {
        c.cancelBubble = !0;
      });
      c.target || (c.target = c.srcElement || U);
      if (y(c.defaultPrevented)) {
        var f = c.preventDefault;
        c.preventDefault = function () {
          c.defaultPrevented = !0;
          f.call(c);
        };
        c.defaultPrevented = !1;
      }
      c.isDefaultPrevented = function () {
        return c.defaultPrevented || !1 === c.returnValue;
      };
      var g = ka(a[e || c.type] || []);
      q(g, function (a) {
        a.call(b, c);
      });
      8 >= W ? (c.preventDefault = null, c.stopPropagation = null, c.isDefaultPrevented = null) : (delete c.preventDefault, delete c.stopPropagation, delete c.isDefaultPrevented);
    };
    c.elem = b;
    return c;
  }
  function Ja(b, a) {
    var c = typeof b, d;
    'function' == c || 'object' == c && null !== b ? 'function' == typeof (d = b.$$hashKey) ? d = b.$$hashKey() : d === r && (d = b.$$hashKey = (a || kd)()) : d = b;
    return c + ':' + d;
  }
  function Xa(b, a) {
    if (a) {
      var c = 0;
      this.nextUid = function () {
        return ++c;
      };
    }
    q(b, this.put, this);
  }
  function Oe(b) {
    return (b = b.toString().replace(zc, '').match(Ac)) ? 'function(' + (b[1] || '').replace(/[\s\r\n]+/, ' ') + ')' : 'fn';
  }
  function Kb(b, a, c) {
    var d;
    if ('function' === typeof b) {
      if (!(d = b.$inject)) {
        d = [];
        if (b.length) {
          if (a)
            throw x(c) && c || (c = b.name || Oe(b)), Ka('strictdi', c);
          a = b.toString().replace(zc, '');
          a = a.match(Ac);
          q(a[1].split(Pe), function (a) {
            a.replace(Qe, function (a, b, c) {
              d.push(c);
            });
          });
        }
        b.$inject = d;
      }
    } else
      L(b) ? (a = b.length - 1, Sa(b[a], 'fn'), d = b.slice(0, a)) : Sa(b, 'fn', !0);
    return d;
  }
  function Db(b, a) {
    function c(a) {
      return function (b, c) {
        if (S(b))
          q(b, Yb(a));
        else
          return a(b, c);
      };
    }
    function d(a, b) {
      Ca(a, 'service');
      if (M(b) || L(b))
        b = k.instantiate(b);
      if (!b.$get)
        throw Ka('pget', a);
      return p[a + m] = b;
    }
    function e(a, b) {
      return d(a, { $get: b });
    }
    function f(a) {
      var b = [], c;
      q(a, function (a) {
        function d(a) {
          var b, c;
          b = 0;
          for (c = a.length; b < c; b++) {
            var e = a[b], f = k.get(e[0]);
            f[e[1]].apply(f, e[2]);
          }
        }
        if (!n.get(a)) {
          n.put(a, !0);
          try {
            x(a) ? (c = Ta(a), b = b.concat(f(c.requires)).concat(c._runBlocks), d(c._invokeQueue), d(c._configBlocks)) : M(a) ? b.push(k.invoke(a)) : L(a) ? b.push(k.invoke(a)) : Sa(a, 'module');
          } catch (e) {
            throw L(a) && (a = a[a.length - 1]), e.message && (e.stack && -1 == e.stack.indexOf(e.message)) && (e = e.message + '\n' + e.stack), Ka('modulerr', a, e.stack || e.message || e);
          }
        }
      });
      return b;
    }
    function g(b, c) {
      function d(a) {
        if (b.hasOwnProperty(a)) {
          if (b[a] === h)
            throw Ka('cdep', a + ' <- ' + l.join(' <- '));
          return b[a];
        }
        try {
          return l.unshift(a), b[a] = h, b[a] = c(a);
        } catch (e) {
          throw b[a] === h && delete b[a], e;
        } finally {
          l.shift();
        }
      }
      function e(b, c, f, g) {
        'string' === typeof f && (g = f, f = null);
        var h = [];
        g = Kb(b, a, g);
        var m, l, k;
        l = 0;
        for (m = g.length; l < m; l++) {
          k = g[l];
          if ('string' !== typeof k)
            throw Ka('itkn', k);
          h.push(f && f.hasOwnProperty(k) ? f[k] : d(k));
        }
        L(b) && (b = b[m]);
        return b.apply(c, h);
      }
      return {
        invoke: e,
        instantiate: function (a, b, c) {
          var d = function () {
          };
          d.prototype = (L(a) ? a[a.length - 1] : a).prototype;
          d = new d();
          a = e(a, d, b, c);
          return S(a) || M(a) ? a : d;
        },
        get: d,
        annotate: Kb,
        has: function (a) {
          return p.hasOwnProperty(a + m) || b.hasOwnProperty(a);
        }
      };
    }
    a = !0 === a;
    var h = {}, m = 'Provider', l = [], n = new Xa([], !0), p = {
        $provide: {
          provider: c(d),
          factory: c(e),
          service: c(function (a, b) {
            return e(a, [
              '$injector',
              function (a) {
                return a.instantiate(b);
              }
            ]);
          }),
          value: c(function (a, b) {
            return e(a, da(b));
          }),
          constant: c(function (a, b) {
            Ca(a, 'constant');
            p[a] = b;
            t[a] = b;
          }),
          decorator: function (a, b) {
            var c = k.get(a + m), d = c.$get;
            c.$get = function () {
              var a = s.invoke(d, c);
              return s.invoke(b, null, { $delegate: a });
            };
          }
        }
      }, k = p.$injector = g(p, function () {
        throw Ka('unpr', l.join(' <- '));
      }, a), t = {}, s = t.$injector = g(t, function (a) {
        var b = k.get(a + m);
        return s.invoke(b.$get, b, r, a);
      }, a);
    q(f(b), function (a) {
      s.invoke(a || B);
    });
    return s;
  }
  function ge() {
    var b = !0;
    this.disableAutoScrolling = function () {
      b = !1;
    };
    this.$get = [
      '$window',
      '$location',
      '$rootScope',
      function (a, c, d) {
        function e(a) {
          var b = null;
          q(a, function (a) {
            b || 'a' !== na(a) || (b = a);
          });
          return b;
        }
        function f() {
          var b = c.hash(), d;
          b ? (d = g.getElementById(b)) ? d.scrollIntoView() : (d = e(g.getElementsByName(b))) ? d.scrollIntoView() : 'top' === b && a.scrollTo(0, 0) : a.scrollTo(0, 0);
        }
        var g = a.document;
        b && d.$watch(function () {
          return c.hash();
        }, function () {
          d.$evalAsync(f);
        });
        return f;
      }
    ];
  }
  function Ee() {
    this.$get = [
      '$$rAF',
      '$timeout',
      function (b, a) {
        return b.supported ? function (a) {
          return b(a);
        } : function (b) {
          return a(b, 0, !1);
        };
      }
    ];
  }
  function Re(b, a, c, d) {
    function e(a) {
      try {
        a.apply(null, la.call(arguments, 1));
      } finally {
        if (s--, 0 === s)
          for (; I.length;)
            try {
              I.pop()();
            } catch (b) {
              c.error(b);
            }
      }
    }
    function f(a, b) {
      (function Se() {
        q(E, function (a) {
          a();
        });
        D = b(Se, a);
      }());
    }
    function g() {
      w = null;
      u != h.url() && (u = h.url(), q(X, function (a) {
        a(h.url());
      }));
    }
    var h = this, m = a[0], l = b.location, n = b.history, p = b.setTimeout, k = b.clearTimeout, t = {};
    h.isMock = !1;
    var s = 0, I = [];
    h.$$completeOutstandingRequest = e;
    h.$$incOutstandingRequestCount = function () {
      s++;
    };
    h.notifyWhenNoOutstandingRequests = function (a) {
      q(E, function (a) {
        a();
      });
      0 === s ? a() : I.push(a);
    };
    var E = [], D;
    h.addPollFn = function (a) {
      y(D) && f(100, p);
      E.push(a);
      return a;
    };
    var u = l.href, z = a.find('base'), w = null;
    h.url = function (a, c) {
      l !== b.location && (l = b.location);
      n !== b.history && (n = b.history);
      if (a) {
        if (u != a)
          return u = a, d.history ? c ? n.replaceState(null, '', a) : (n.pushState(null, '', a), z.attr('href', z.attr('href'))) : (w = a, c ? l.replace(a) : l.href = a), h;
      } else
        return w || l.href.replace(/%27/g, '\'');
    };
    var X = [], O = !1;
    h.onUrlChange = function (a) {
      if (!O) {
        if (d.history)
          C(b).on('popstate', g);
        if (d.hashchange)
          C(b).on('hashchange', g);
        else
          h.addPollFn(g);
        O = !0;
      }
      X.push(a);
      return a;
    };
    h.baseHref = function () {
      var a = z.attr('href');
      return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, '') : '';
    };
    var T = {}, P = '', V = h.baseHref();
    h.cookies = function (a, b) {
      var d, e, f, g;
      if (a)
        b === r ? m.cookie = escape(a) + '=;path=' + V + ';expires=Thu, 01 Jan 1970 00:00:00 GMT' : x(b) && (d = (m.cookie = escape(a) + '=' + escape(b) + ';path=' + V).length + 1, 4096 < d && c.warn('Cookie \'' + a + '\' possibly not set or overflowed because it was too large (' + d + ' > 4096 bytes)!'));
      else {
        if (m.cookie !== P)
          for (P = m.cookie, d = P.split('; '), T = {}, f = 0; f < d.length; f++)
            e = d[f], g = e.indexOf('='), 0 < g && (a = unescape(e.substring(0, g)), T[a] === r && (T[a] = unescape(e.substring(g + 1))));
        return T;
      }
    };
    h.defer = function (a, b) {
      var c;
      s++;
      c = p(function () {
        delete t[c];
        e(a);
      }, b || 0);
      t[c] = !0;
      return c;
    };
    h.defer.cancel = function (a) {
      return t[a] ? (delete t[a], k(a), e(B), !0) : !1;
    };
  }
  function ie() {
    this.$get = [
      '$window',
      '$log',
      '$sniffer',
      '$document',
      function (b, a, c, d) {
        return new Re(b, d, a, c);
      }
    ];
  }
  function je() {
    this.$get = function () {
      function b(b, d) {
        function e(a) {
          a != p && (k ? k == a && (k = a.n) : k = a, f(a.n, a.p), f(a, p), p = a, p.n = null);
        }
        function f(a, b) {
          a != b && (a && (a.p = b), b && (b.n = a));
        }
        if (b in a)
          throw K('$cacheFactory')('iid', b);
        var g = 0, h = A({}, d, { id: b }), m = {}, l = d && d.capacity || Number.MAX_VALUE, n = {}, p = null, k = null;
        return a[b] = {
          put: function (a, b) {
            if (l < Number.MAX_VALUE) {
              var c = n[a] || (n[a] = { key: a });
              e(c);
            }
            if (!y(b))
              return a in m || g++, m[a] = b, g > l && this.remove(k.key), b;
          },
          get: function (a) {
            if (l < Number.MAX_VALUE) {
              var b = n[a];
              if (!b)
                return;
              e(b);
            }
            return m[a];
          },
          remove: function (a) {
            if (l < Number.MAX_VALUE) {
              var b = n[a];
              if (!b)
                return;
              b == p && (p = b.p);
              b == k && (k = b.n);
              f(b.n, b.p);
              delete n[a];
            }
            delete m[a];
            g--;
          },
          removeAll: function () {
            m = {};
            g = 0;
            n = {};
            p = k = null;
          },
          destroy: function () {
            n = h = m = null;
            delete a[b];
          },
          info: function () {
            return A({}, h, { size: g });
          }
        };
      }
      var a = {};
      b.info = function () {
        var b = {};
        q(a, function (a, e) {
          b[e] = a.info();
        });
        return b;
      };
      b.get = function (b) {
        return a[b];
      };
      return b;
    };
  }
  function Ae() {
    this.$get = [
      '$cacheFactory',
      function (b) {
        return b('templates');
      }
    ];
  }
  function hc(b, a) {
    var c = {}, d = 'Directive', e = /^\s*directive\:\s*([\d\w_\-]+)\s+(.*)$/, f = /(([\d\w_\-]+)(?:\:([^;]+))?;?)/, g = md('ngSrc,ngSrcset,src,srcset'), h = /^(on[a-z]+|formaction)$/;
    this.directive = function l(a, e) {
      Ca(a, 'directive');
      x(a) ? (Eb(e, 'directiveFactory'), c.hasOwnProperty(a) || (c[a] = [], b.factory(a + d, [
        '$injector',
        '$exceptionHandler',
        function (b, d) {
          var e = [];
          q(c[a], function (c, f) {
            try {
              var g = b.invoke(c);
              M(g) ? g = { compile: da(g) } : !g.compile && g.link && (g.compile = da(g.link));
              g.priority = g.priority || 0;
              g.index = f;
              g.name = g.name || a;
              g.require = g.require || g.controller && g.name;
              g.restrict = g.restrict || 'A';
              e.push(g);
            } catch (h) {
              d(h);
            }
          });
          return e;
        }
      ])), c[a].push(e)) : q(a, Yb(l));
      return this;
    };
    this.aHrefSanitizationWhitelist = function (b) {
      return F(b) ? (a.aHrefSanitizationWhitelist(b), this) : a.aHrefSanitizationWhitelist();
    };
    this.imgSrcSanitizationWhitelist = function (b) {
      return F(b) ? (a.imgSrcSanitizationWhitelist(b), this) : a.imgSrcSanitizationWhitelist();
    };
    this.$get = [
      '$injector',
      '$interpolate',
      '$exceptionHandler',
      '$http',
      '$templateCache',
      '$parse',
      '$controller',
      '$rootScope',
      '$document',
      '$sce',
      '$animate',
      '$$sanitizeUri',
      function (a, b, p, k, t, s, I, E, D, u, z, w) {
        function X(a, b, c, d, e) {
          a instanceof C || (a = C(a));
          q(a, function (b, c) {
            3 == b.nodeType && b.nodeValue.match(/\S+/) && (a[c] = C(b).wrap('<span></span>').parent()[0]);
          });
          var f = T(a, b, a, c, d, e);
          O(a, 'ng-scope');
          return function (b, c, d, e) {
            Eb(b, 'scope');
            var g = c ? Ha.clone.call(a) : a;
            q(d, function (a, b) {
              g.data('$' + b + 'Controller', a);
            });
            g.data('$scope', b);
            c && c(g, b);
            f && f(b, g, g, e);
            return g;
          };
        }
        function O(a, b) {
          try {
            a.addClass(b);
          } catch (c) {
          }
        }
        function T(a, b, c, d, e, f) {
          function g(a, c, d, e) {
            var f, k, l, n, p, t, D;
            f = c.length;
            var s = Array(f);
            for (p = 0; p < f; p++)
              s[p] = c[p];
            D = p = 0;
            for (t = h.length; p < t; D++)
              k = s[D], c = h[p++], f = h[p++], l = C(k), c ? (c.scope ? (n = a.$new(), l.data('$scope', n)) : n = a, l = c.transcludeOnThisElement ? P(a, c.transclude, e) : !c.templateOnThisElement && e ? e : !e && b ? P(a, b) : null, c(f, n, k, d, l)) : f && f(a, k.childNodes, r, e);
          }
          for (var h = [], k, l, n, p, t = 0; t < a.length; t++)
            k = new Lb(), l = V(a[t], [], k, 0 === t ? d : r, e), (f = l.length ? J(l, a[t], k, b, c, null, [], [], f) : null) && f.scope && O(C(a[t]), 'ng-scope'), k = f && f.terminal || !(n = a[t].childNodes) || !n.length ? null : T(n, f ? (f.transcludeOnThisElement || !f.templateOnThisElement) && f.transclude : b), h.push(f, k), p = p || f || k, f = null;
          return p ? g : null;
        }
        function P(a, b, c) {
          return function (d, e, f) {
            var g = !1;
            d || (d = a.$new(), g = d.$$transcluded = !0);
            e = b(d, e, f, c);
            if (g)
              e.on('$destroy', function () {
                d.$destroy();
              });
            return e;
          };
        }
        function V(a, b, c, d, g) {
          var h = c.$attr, k;
          switch (a.nodeType) {
          case 1:
            va(b, pa(na(a)), 'E', d, g);
            for (var l, p, n, t = a.attributes, D = 0, s = t && t.length; D < s; D++) {
              var E = !1, I = !1;
              l = t[D];
              if (!W || 8 <= W || l.specified) {
                k = l.name;
                p = aa(l.value);
                l = pa(k);
                if (n = Da.test(l))
                  k = hb(l.substr(6), '-');
                var u = l.replace(/(Start|End)$/, '');
                l === u + 'Start' && (E = k, I = k.substr(0, k.length - 5) + 'end', k = k.substr(0, k.length - 6));
                l = pa(k.toLowerCase());
                h[l] = k;
                if (n || !c.hasOwnProperty(l))
                  c[l] = p, wc(a, l) && (c[l] = !0);
                Z(a, b, p, l);
                va(b, l, 'A', d, g, E, I);
              }
            }
            a = a.className;
            if (x(a) && '' !== a)
              for (; k = f.exec(a);)
                l = pa(k[2]), va(b, l, 'C', d, g) && (c[l] = aa(k[3])), a = a.substr(k.index + k[0].length);
            break;
          case 3:
            K(b, a.nodeValue);
            break;
          case 8:
            try {
              if (k = e.exec(a.nodeValue))
                l = pa(k[1]), va(b, l, 'M', d, g) && (c[l] = aa(k[2]));
            } catch (z) {
            }
          }
          b.sort(y);
          return b;
        }
        function v(a, b, c) {
          var d = [], e = 0;
          if (b && a.hasAttribute && a.hasAttribute(b)) {
            do {
              if (!a)
                throw ia('uterdir', b, c);
              1 == a.nodeType && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--);
              d.push(a);
              a = a.nextSibling;
            } while (0 < e);
          } else
            d.push(a);
          return C(d);
        }
        function $(a, b, c) {
          return function (d, e, f, g, h) {
            e = v(e[0], b, c);
            return a(d, e, f, g, h);
          };
        }
        function J(a, c, d, e, f, g, h, k, l) {
          function t(a, b, c, d) {
            if (a) {
              c && (a = $(a, c, d));
              a.require = H.require;
              a.directiveName = A;
              if (w === H || H.$$isolateScope)
                a = Cc(a, { isolateScope: !0 });
              h.push(a);
            }
            if (b) {
              c && (b = $(b, c, d));
              b.require = H.require;
              b.directiveName = A;
              if (w === H || H.$$isolateScope)
                b = Cc(b, { isolateScope: !0 });
              k.push(b);
            }
          }
          function D(a, b, c, d) {
            var e, f = 'data', g = !1;
            if (x(b)) {
              for (; '^' == (e = b.charAt(0)) || '?' == e;)
                b = b.substr(1), '^' == e && (f = 'inheritedData'), g = g || '?' == e;
              e = null;
              d && 'data' === f && (e = d[b]);
              e = e || c[f]('$' + b + 'Controller');
              if (!e && !g)
                throw ia('ctreq', b, a);
            } else
              L(b) && (e = [], q(b, function (b) {
                e.push(D(a, b, c, d));
              }));
            return e;
          }
          function E(a, e, f, g, l) {
            function t(a, b) {
              var c;
              2 > arguments.length && (b = a, a = r);
              y && (c = V);
              return l(a, b, c);
            }
            var u, z, Bc, v, X, J, V = {}, $;
            u = c === f ? d : ka(d, new Lb(C(f), d.$attr));
            z = u.$$element;
            if (w) {
              var Te = /^\s*([@=&])(\??)\s*(\w*)\s*$/;
              g = C(f);
              J = e.$new(!0);
              !T || T !== w && T !== w.$$originalDirective ? g.data('$isolateScopeNoTemplate', J) : g.data('$isolateScope', J);
              O(g, 'ng-isolate-scope');
              q(w.scope, function (a, c) {
                var d = a.match(Te) || [], f = d[3] || c, g = '?' == d[2], d = d[1], h, k, l, p;
                J.$$isolateBindings[c] = d + f;
                switch (d) {
                case '@':
                  u.$observe(f, function (a) {
                    J[c] = a;
                  });
                  u.$$observers[f].$$scope = e;
                  u[f] && (J[c] = b(u[f])(e));
                  break;
                case '=':
                  if (g && !u[f])
                    break;
                  k = s(u[f]);
                  p = k.literal ? sa : function (a, b) {
                    return a === b;
                  };
                  l = k.assign || function () {
                    h = J[c] = k(e);
                    throw ia('nonassign', u[f], w.name);
                  };
                  h = J[c] = k(e);
                  J.$watch(function Ue() {
                    var a = k(e);
                    p(a, J[c]) || (p(a, h) ? l(e, a = J[c]) : J[c] = a);
                    Ue.$$unwatch = k.$$unwatch;
                    return h = a;
                  }, null, k.literal);
                  break;
                case '&':
                  k = s(u[f]);
                  J[c] = function (a) {
                    return k(e, a);
                  };
                  break;
                default:
                  throw ia('iscp', w.name, c, a);
                }
              });
            }
            $ = l && t;
            P && q(P, function (a) {
              var b = {
                  $scope: a === w || a.$$isolateScope ? J : e,
                  $element: z,
                  $attrs: u,
                  $transclude: $
                }, c;
              X = a.controller;
              '@' == X && (X = u[a.name]);
              c = I(X, b);
              V[a.name] = c;
              y || z.data('$' + a.name + 'Controller', c);
              a.controllerAs && (b.$scope[a.controllerAs] = c);
            });
            g = 0;
            for (Bc = h.length; g < Bc; g++)
              try {
                v = h[g], v(v.isolateScope ? J : e, z, u, v.require && D(v.directiveName, v.require, z, V), $);
              } catch (oa) {
                p(oa, ha(z));
              }
            g = e;
            w && (w.template || null === w.templateUrl) && (g = J);
            a && a(g, f.childNodes, r, l);
            for (g = k.length - 1; 0 <= g; g--)
              try {
                v = k[g], v(v.isolateScope ? J : e, z, u, v.require && D(v.directiveName, v.require, z, V), $);
              } catch (R) {
                p(R, ha(z));
              }
          }
          l = l || {};
          for (var u = -Number.MAX_VALUE, z, P = l.controllerDirectives, w = l.newIsolateScopeDirective, T = l.templateDirective, J = l.nonTlbTranscludeDirective, va = !1, Ya = !1, y = l.hasElementTranscludeDirective, Z = d.$$element = C(c), H, A, R, K = e, G, N = 0, Q = a.length; N < Q; N++) {
            H = a[N];
            var Da = H.$$start, ob = H.$$end;
            Da && (Z = v(c, Da, ob));
            R = r;
            if (u > H.priority)
              break;
            if (R = H.scope)
              H.templateUrl || (S(R) ? (La('new/isolated scope', w || z, H, Z), w = H) : La('new/isolated scope', w, H, Z)), z = z || H;
            A = H.name;
            !H.templateUrl && H.controller && (R = H.controller, P = P || {}, La('\'' + A + '\' controller', P[A], H, Z), P[A] = H);
            if (R = H.transclude)
              va = !0, H.$$tlb || (La('transclusion', J, H, Z), J = H), 'element' == R ? (y = !0, u = H.priority, R = v(c, Da, ob), Z = d.$$element = C(U.createComment(' ' + A + ': ' + d[A] + ' ')), c = Z[0], pb(f, C(la.call(R, 0)), c), K = X(R, e, u, g && g.name, { nonTlbTranscludeDirective: J })) : (R = C(Ib(c)).contents(), Z.empty(), K = X(R, e));
            if (H.template)
              if (Ya = !0, La('template', T, H, Z), T = H, R = M(H.template) ? H.template(Z, d) : H.template, R = Dc(R), H.replace) {
                g = H;
                R = Gb.test(R) ? C(Ec(H.type, aa(R))) : [];
                c = R[0];
                if (1 != R.length || 1 !== c.nodeType)
                  throw ia('tplrt', A, '');
                pb(f, Z, c);
                Q = { $attr: {} };
                R = V(c, [], Q);
                var W = a.splice(N + 1, a.length - (N + 1));
                w && F(R);
                a = a.concat(R).concat(W);
                oa(d, Q);
                Q = a.length;
              } else
                Z.html(R);
            if (H.templateUrl)
              Ya = !0, La('template', T, H, Z), T = H, H.replace && (g = H), E = B(a.splice(N, a.length - N), Z, d, f, va && K, h, k, {
                controllerDirectives: P,
                newIsolateScopeDirective: w,
                templateDirective: T,
                nonTlbTranscludeDirective: J
              }), Q = a.length;
            else if (H.compile)
              try {
                G = H.compile(Z, d, K), M(G) ? t(null, G, Da, ob) : G && t(G.pre, G.post, Da, ob);
              } catch (Y) {
                p(Y, ha(Z));
              }
            H.terminal && (E.terminal = !0, u = Math.max(u, H.priority));
          }
          E.scope = z && !0 === z.scope;
          E.transcludeOnThisElement = va;
          E.templateOnThisElement = Ya;
          E.transclude = K;
          l.hasElementTranscludeDirective = y;
          return E;
        }
        function F(a) {
          for (var b = 0, c = a.length; b < c; b++)
            a[b] = $b(a[b], { $$isolateScope: !0 });
        }
        function va(b, e, f, g, h, k, n) {
          if (e === h)
            return null;
          h = null;
          if (c.hasOwnProperty(e)) {
            var t;
            e = a.get(e + d);
            for (var D = 0, s = e.length; D < s; D++)
              try {
                t = e[D], (g === r || g > t.priority) && -1 != t.restrict.indexOf(f) && (k && (t = $b(t, {
                  $$start: k,
                  $$end: n
                })), b.push(t), h = t);
              } catch (u) {
                p(u);
              }
          }
          return h;
        }
        function oa(a, b) {
          var c = b.$attr, d = a.$attr, e = a.$$element;
          q(a, function (d, e) {
            '$' != e.charAt(0) && (b[e] && b[e] !== d && (d += ('style' === e ? ';' : ' ') + b[e]), a.$set(e, d, !0, c[e]));
          });
          q(b, function (b, f) {
            'class' == f ? (O(e, b), a['class'] = (a['class'] ? a['class'] + ' ' : '') + b) : 'style' == f ? (e.attr('style', e.attr('style') + ';' + b), a.style = (a.style ? a.style + ';' : '') + b) : '$' == f.charAt(0) || a.hasOwnProperty(f) || (a[f] = b, d[f] = c[f]);
          });
        }
        function B(a, b, c, d, e, f, g, h) {
          var l = [], p, n, D = b[0], s = a.shift(), E = A({}, s, {
              templateUrl: null,
              transclude: null,
              replace: null,
              $$originalDirective: s
            }), z = M(s.templateUrl) ? s.templateUrl(b, c) : s.templateUrl, I = s.type;
          b.empty();
          k.get(u.getTrustedResourceUrl(z), { cache: t }).success(function (k) {
            var t, u;
            k = Dc(k);
            if (s.replace) {
              k = Gb.test(k) ? C(Ec(I, aa(k))) : [];
              t = k[0];
              if (1 != k.length || 1 !== t.nodeType)
                throw ia('tplrt', s.name, z);
              k = { $attr: {} };
              pb(d, b, t);
              var w = V(t, [], k);
              S(s.scope) && F(w);
              a = w.concat(a);
              oa(c, k);
            } else
              t = D, b.html(k);
            a.unshift(E);
            p = J(a, t, c, e, b, s, f, g, h);
            q(d, function (a, c) {
              a == t && (d[c] = b[0]);
            });
            for (n = T(b[0].childNodes, e); l.length;) {
              k = l.shift();
              u = l.shift();
              var v = l.shift(), X = l.shift(), w = b[0];
              if (u !== D) {
                var $ = u.className;
                h.hasElementTranscludeDirective && s.replace || (w = Ib(t));
                pb(v, C(u), w);
                O(C(w), $);
              }
              u = p.transcludeOnThisElement ? P(k, p.transclude, X) : X;
              p(n, k, w, d, u);
            }
            l = null;
          }).error(function (a, b, c, d) {
            throw ia('tpload', d.url);
          });
          return function (a, b, c, d, e) {
            a = e;
            l ? (l.push(b), l.push(c), l.push(d), l.push(a)) : (p.transcludeOnThisElement && (a = P(b, p.transclude, e)), p(n, b, c, d, a));
          };
        }
        function y(a, b) {
          var c = b.priority - a.priority;
          return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index;
        }
        function La(a, b, c, d) {
          if (b)
            throw ia('multidir', b.name, c.name, a, ha(d));
        }
        function K(a, c) {
          var d = b(c, !0);
          d && a.push({
            priority: 0,
            compile: function (a) {
              var e = a.parent().length;
              e && O(a.parent(), 'ng-binding');
              return function (a, f) {
                var g = f.parent(), h = g.data('$binding') || [];
                d = b(c);
                h.push(d);
                g.data('$binding', h);
                e || O(g, 'ng-binding');
                a.$watch(d, function (a) {
                  f[0].nodeValue = a;
                });
              };
            }
          });
        }
        function Ec(a, b) {
          a = G(a || 'html');
          switch (a) {
          case 'svg':
          case 'math':
            var c = U.createElement('div');
            c.innerHTML = '<' + a + '>' + b + '</' + a + '>';
            return c.childNodes[0].childNodes;
          default:
            return b;
          }
        }
        function Ya(a, b) {
          if ('srcdoc' == b)
            return u.HTML;
          var c = na(a);
          if ('xlinkHref' == b || 'form' == c && 'action' == b || 'img' != c && ('src' == b || 'ngSrc' == b))
            return u.RESOURCE_URL;
        }
        function Z(a, c, d, e) {
          var f = b(d, !0);
          if (f) {
            if ('multiple' === e && 'select' === na(a))
              throw ia('selmulti', ha(a));
            c.push({
              priority: 100,
              compile: function () {
                return {
                  pre: function (c, d, k) {
                    d = k.$$observers || (k.$$observers = {});
                    if (h.test(e))
                      throw ia('nodomevents');
                    if (f = b(k[e], !0, Ya(a, e), g[e]))
                      k[e] = f(c), (d[e] || (d[e] = [])).$$inter = !0, (k.$$observers && k.$$observers[e].$$scope || c).$watch(f, function (a, b) {
                        'class' === e && a != b ? k.$updateClass(a, b) : k.$set(e, a);
                      });
                  }
                };
              }
            });
          }
        }
        function pb(a, b, c) {
          var d = b[0], e = b.length, f = d.parentNode, g, h;
          if (a)
            for (g = 0, h = a.length; g < h; g++)
              if (a[g] == d) {
                a[g++] = c;
                h = g + e - 1;
                for (var k = a.length; g < k; g++, h++)
                  h < k ? a[g] = a[h] : delete a[g];
                a.length -= e - 1;
                break;
              }
          f && f.replaceChild(c, d);
          a = U.createDocumentFragment();
          a.appendChild(d);
          c[C.expando] = d[C.expando];
          d = 1;
          for (e = b.length; d < e; d++)
            f = b[d], C(f).remove(), a.appendChild(f), delete b[d];
          b[0] = c;
          b.length = 1;
        }
        function Cc(a, b) {
          return A(function () {
            return a.apply(null, arguments);
          }, a, b);
        }
        var Lb = function (a, b) {
          this.$$element = a;
          this.$attr = b || {};
        };
        Lb.prototype = {
          $normalize: pa,
          $addClass: function (a) {
            a && 0 < a.length && z.addClass(this.$$element, a);
          },
          $removeClass: function (a) {
            a && 0 < a.length && z.removeClass(this.$$element, a);
          },
          $updateClass: function (a, b) {
            var c = Fc(a, b), d = Fc(b, a);
            0 === c.length ? z.removeClass(this.$$element, d) : 0 === d.length ? z.addClass(this.$$element, c) : z.setClass(this.$$element, c, d);
          },
          $set: function (a, b, c, d) {
            var e = this.$$element[0], f = wc(e, a), g = Me(e, a), e = a;
            f ? (this.$$element.prop(a, b), d = f) : g && (this[g] = b, e = g);
            this[a] = b;
            d ? this.$attr[a] = d : (d = this.$attr[a]) || (this.$attr[a] = d = hb(a, '-'));
            f = na(this.$$element);
            if ('a' === f && 'href' === a || 'img' === f && 'src' === a)
              this[a] = b = w(b, 'src' === a);
            !1 !== c && (null === b || b === r ? this.$$element.removeAttr(d) : this.$$element.attr(d, b));
            (a = this.$$observers) && q(a[e], function (a) {
              try {
                a(b);
              } catch (c) {
                p(c);
              }
            });
          },
          $observe: function (a, b) {
            var c = this, d = c.$$observers || (c.$$observers = {}), e = d[a] || (d[a] = []);
            e.push(b);
            E.$evalAsync(function () {
              e.$$inter || b(c[a]);
            });
            return function () {
              Ga(e, b);
            };
          }
        };
        var N = b.startSymbol(), Q = b.endSymbol(), Dc = '{{' == N || '}}' == Q ? Ea : function (a) {
            return a.replace(/\{\{/g, N).replace(/}}/g, Q);
          }, Da = /^ngAttr[A-Z]/;
        return X;
      }
    ];
  }
  function pa(b) {
    return Ua(b.replace(Ve, ''));
  }
  function Fc(b, a) {
    var c = '', d = b.split(/\s+/), e = a.split(/\s+/), f = 0;
    a:
      for (; f < d.length; f++) {
        for (var g = d[f], h = 0; h < e.length; h++)
          if (g == e[h])
            continue a;
        c += (0 < c.length ? ' ' : '') + g;
      }
    return c;
  }
  function ke() {
    var b = {}, a = !1, c = /^(\S+)(\s+as\s+(\w+))?$/;
    this.register = function (a, c) {
      Ca(a, 'controller');
      S(a) ? A(b, a) : b[a] = c;
    };
    this.allowGlobals = function () {
      a = !0;
    };
    this.$get = [
      '$injector',
      '$window',
      function (d, e) {
        return function (f, g) {
          var h, m, l;
          x(f) && (h = f.match(c), m = h[1], l = h[3], f = b.hasOwnProperty(m) ? b[m] : gc(g.$scope, m, !0) || (a ? gc(e, m, !0) : r), Sa(f, m, !0));
          h = d.instantiate(f, g, m);
          if (l) {
            if (!g || 'object' !== typeof g.$scope)
              throw K('$controller')('noscp', m || f.name, l);
            g.$scope[l] = h;
          }
          return h;
        };
      }
    ];
  }
  function le() {
    this.$get = [
      '$window',
      function (b) {
        return C(b.document);
      }
    ];
  }
  function me() {
    this.$get = [
      '$log',
      function (b) {
        return function (a, c) {
          b.error.apply(b, arguments);
        };
      }
    ];
  }
  function Gc(b) {
    var a = {}, c, d, e;
    if (!b)
      return a;
    q(b.split('\n'), function (b) {
      e = b.indexOf(':');
      c = G(aa(b.substr(0, e)));
      d = aa(b.substr(e + 1));
      c && (a[c] = a[c] ? a[c] + (', ' + d) : d);
    });
    return a;
  }
  function Hc(b) {
    var a = S(b) ? b : r;
    return function (c) {
      a || (a = Gc(b));
      return c ? a[G(c)] || null : a;
    };
  }
  function Ic(b, a, c) {
    if (M(c))
      return c(b, a);
    q(c, function (c) {
      b = c(b, a);
    });
    return b;
  }
  function pe() {
    var b = /^\s*(\[|\{[^\{])/, a = /[\}\]]\s*$/, c = /^\)\]\}',?\n/, d = { 'Content-Type': 'application/json;charset=utf-8' }, e = this.defaults = {
        transformResponse: [function (d) {
            x(d) && (d = d.replace(c, ''), b.test(d) && a.test(d) && (d = bc(d)));
            return d;
          }],
        transformRequest: [function (a) {
            return S(a) && '[object File]' !== za.call(a) && '[object Blob]' !== za.call(a) ? ta(a) : a;
          }],
        headers: {
          common: { Accept: 'application/json, text/plain, */*' },
          post: ka(d),
          put: ka(d),
          patch: ka(d)
        },
        xsrfCookieName: 'XSRF-TOKEN',
        xsrfHeaderName: 'X-XSRF-TOKEN'
      }, f = this.interceptors = [];
    this.$get = [
      '$httpBackend',
      '$browser',
      '$cacheFactory',
      '$rootScope',
      '$q',
      '$injector',
      function (a, b, c, d, n, p) {
        function k(a) {
          function b(a) {
            var d = A({}, a, { data: Ic(a.data, a.headers, c.transformResponse) });
            return 200 <= a.status && 300 > a.status ? d : n.reject(d);
          }
          var c = {
              method: 'get',
              transformRequest: e.transformRequest,
              transformResponse: e.transformResponse
            }, d = function (a) {
              function b(a) {
                var c;
                q(a, function (b, d) {
                  M(b) && (c = b(), null != c ? a[d] = c : delete a[d]);
                });
              }
              var c = e.headers, d = A({}, a.headers), f, g, c = A({}, c.common, c[G(a.method)]);
              b(c);
              b(d);
              a:
                for (f in c) {
                  a = G(f);
                  for (g in d)
                    if (G(g) === a)
                      continue a;
                  d[f] = c[f];
                }
              return d;
            }(a);
          A(c, a);
          c.headers = d;
          c.method = ib(c.method);
          var f = [
              function (a) {
                d = a.headers;
                var c = Ic(a.data, Hc(d), a.transformRequest);
                y(c) && q(d, function (a, b) {
                  'content-type' === G(b) && delete d[b];
                });
                y(a.withCredentials) && !y(e.withCredentials) && (a.withCredentials = e.withCredentials);
                return t(a, c, d).then(b, b);
              },
              r
            ], g = n.when(c);
          for (q(E, function (a) {
              (a.request || a.requestError) && f.unshift(a.request, a.requestError);
              (a.response || a.responseError) && f.push(a.response, a.responseError);
            }); f.length;) {
            a = f.shift();
            var h = f.shift(), g = g.then(a, h);
          }
          g.success = function (a) {
            g.then(function (b) {
              a(b.data, b.status, b.headers, c);
            });
            return g;
          };
          g.error = function (a) {
            g.then(null, function (b) {
              a(b.data, b.status, b.headers, c);
            });
            return g;
          };
          return g;
        }
        function t(c, f, m) {
          function p(a, b, c, e) {
            V && (200 <= a && 300 > a ? V.put($, [
              a,
              b,
              Gc(c),
              e
            ]) : V.remove($));
            t(b, a, c, e);
            d.$$phase || d.$apply();
          }
          function t(a, b, d, e) {
            b = Math.max(b, 0);
            (200 <= b && 300 > b ? q.resolve : q.reject)({
              data: a,
              status: b,
              headers: Hc(d),
              config: c,
              statusText: e
            });
          }
          function E() {
            var a = Pa(k.pendingRequests, c);
            -1 !== a && k.pendingRequests.splice(a, 1);
          }
          var q = n.defer(), P = q.promise, V, v, $ = s(c.url, c.params);
          k.pendingRequests.push(c);
          P.then(E, E);
          (c.cache || e.cache) && (!1 !== c.cache && 'GET' == c.method) && (V = S(c.cache) ? c.cache : S(e.cache) ? e.cache : I);
          if (V)
            if (v = V.get($), F(v)) {
              if (v.then)
                return v.then(E, E), v;
              L(v) ? t(v[1], v[0], ka(v[2]), v[3]) : t(v, 200, {}, 'OK');
            } else
              V.put($, P);
          y(v) && ((v = Mb(c.url) ? b.cookies()[c.xsrfCookieName || e.xsrfCookieName] : r) && (m[c.xsrfHeaderName || e.xsrfHeaderName] = v), a(c.method, $, f, p, m, c.timeout, c.withCredentials, c.responseType));
          return P;
        }
        function s(a, b) {
          if (!b)
            return a;
          var c = [];
          jd(b, function (a, b) {
            null === a || y(a) || (L(a) || (a = [a]), q(a, function (a) {
              S(a) && (a = ta(a));
              c.push(Ba(b) + '=' + Ba(a));
            }));
          });
          0 < c.length && (a += (-1 == a.indexOf('?') ? '?' : '&') + c.join('&'));
          return a;
        }
        var I = c('$http'), E = [];
        q(f, function (a) {
          E.unshift(x(a) ? p.get(a) : p.invoke(a));
        });
        k.pendingRequests = [];
        (function (a) {
          q(arguments, function (a) {
            k[a] = function (b, c) {
              return k(A(c || {}, {
                method: a,
                url: b
              }));
            };
          });
        }('get', 'delete', 'head', 'jsonp'));
        (function (a) {
          q(arguments, function (a) {
            k[a] = function (b, c, d) {
              return k(A(d || {}, {
                method: a,
                url: b,
                data: c
              }));
            };
          });
        }('post', 'put', 'patch'));
        k.defaults = e;
        return k;
      }
    ];
  }
  function We(b) {
    if (8 >= W && (!b.match(/^(get|post|head|put|delete|options)$/i) || !N.XMLHttpRequest))
      return new N.ActiveXObject('Microsoft.XMLHTTP');
    if (N.XMLHttpRequest)
      return new N.XMLHttpRequest();
    throw K('$httpBackend')('noxhr');
  }
  function qe() {
    this.$get = [
      '$browser',
      '$window',
      '$document',
      function (b, a, c) {
        return Xe(b, We, b.defer, a.angular.callbacks, c[0]);
      }
    ];
  }
  function Xe(b, a, c, d, e) {
    function f(a, b, c) {
      var f = e.createElement('script'), g = null;
      f.type = 'text/javascript';
      f.src = a;
      f.async = !0;
      g = function (a) {
        Va(f, 'load', g);
        Va(f, 'error', g);
        e.body.removeChild(f);
        f = null;
        var h = -1, s = 'unknown';
        a && ('load' !== a.type || d[b].called || (a = { type: 'error' }), s = a.type, h = 'error' === a.type ? 404 : 200);
        c && c(h, s);
      };
      qb(f, 'load', g);
      qb(f, 'error', g);
      e.body.appendChild(f);
      return g;
    }
    var g = -1;
    return function (e, m, l, n, p, k, t, s) {
      function I() {
        D = g;
        z && z();
        w && w.abort();
      }
      function E(a, d, e, f, g) {
        O && c.cancel(O);
        z = w = null;
        0 === d && (d = e ? 200 : 'file' == wa(m).protocol ? 404 : 0);
        a(1223 === d ? 204 : d, e, f, g || '');
        b.$$completeOutstandingRequest(B);
      }
      var D;
      b.$$incOutstandingRequestCount();
      m = m || b.url();
      if ('jsonp' == G(e)) {
        var u = '_' + (d.counter++).toString(36);
        d[u] = function (a) {
          d[u].data = a;
          d[u].called = !0;
        };
        var z = f(m.replace('JSON_CALLBACK', 'angular.callbacks.' + u), u, function (a, b) {
            E(n, a, d[u].data, '', b);
            d[u] = B;
          });
      } else {
        var w = a(e);
        w.open(e, m, !0);
        q(p, function (a, b) {
          F(a) && w.setRequestHeader(b, a);
        });
        w.onreadystatechange = function () {
          if (w && 4 == w.readyState) {
            var a = null, b = null, c = '';
            D !== g && (a = w.getAllResponseHeaders(), b = 'response' in w ? w.response : w.responseText);
            D === g && 10 > W || (c = w.statusText);
            E(n, D || w.status, b, a, c);
          }
        };
        t && (w.withCredentials = !0);
        if (s)
          try {
            w.responseType = s;
          } catch (X) {
            if ('json' !== s)
              throw X;
          }
        w.send(l || null);
      }
      if (0 < k)
        var O = c(I, k);
      else
        k && k.then && k.then(I);
    };
  }
  function ne() {
    var b = '{{', a = '}}';
    this.startSymbol = function (a) {
      return a ? (b = a, this) : b;
    };
    this.endSymbol = function (b) {
      return b ? (a = b, this) : a;
    };
    this.$get = [
      '$parse',
      '$exceptionHandler',
      '$sce',
      function (c, d, e) {
        function f(a) {
          return '\\\\\\' + a;
        }
        function g(f, g, t, s) {
          s = !!s;
          for (var I, E, D = 0, u = [], z = [], w = [], X = f.length, O = !1, T = !1, P = [], V = {}, v = {}; D < X;)
            if (-1 != (I = f.indexOf(b, D)) && -1 != (E = f.indexOf(a, I + h)))
              D !== I && (T = !0), u.push(f.substring(D, I)), D = f.substring(I + h, E), z.push(D), w.push(c(D)), D = E + m, O = !0;
            else {
              D !== X && (T = !0, u.push(f.substring(D)));
              break;
            }
          q(u, function (c, d) {
            u[d] = u[d].replace(l, b).replace(n, a);
          });
          u.length === z.length && u.push('');
          if (t && O && (T || 1 < z.length))
            throw Jc('noconcat', f);
          if (!g || O) {
            P.length = u.length + z.length;
            var $ = function (a) {
                for (var b = 0, c = z.length; b < c; b++)
                  P[2 * b] = u[b], P[2 * b + 1] = a[b];
                P[2 * c] = u[c];
                return P.join('');
              }, J = function (a) {
                return a = t ? e.getTrusted(t, a) : e.valueOf(a);
              }, C = function (a) {
                if (null == a)
                  return '';
                switch (typeof a) {
                case 'string':
                  break;
                case 'number':
                  a = '' + a;
                  break;
                default:
                  a = ta(a);
                }
                return a;
              };
            return A(function oa(a) {
              var b = a && a.$id || 'notAScope', c = V[b], e = v[b], g = 0, h = z.length, k = Array(h), m, l = e === r ? !0 : !1;
              c || (c = [], l = !0, a && a.$on && a.$on('$destroy', function () {
                V[b] = null;
                v[b] = null;
              }));
              try {
                for (oa.$$unwatch = !0; g < h; g++) {
                  m = J(w[g](a));
                  if (s && y(m)) {
                    oa.$$unwatch = r;
                    return;
                  }
                  m = C(m);
                  m !== c[g] && (l = !0);
                  k[g] = m;
                  oa.$$unwatch = oa.$$unwatch && w[g].$$unwatch;
                }
                l && (V[b] = k, v[b] = e = $(k));
              } catch (t) {
                a = Jc('interr', f, t.toString()), d(a);
              }
              return e;
            }, {
              exp: f,
              separators: u,
              expressions: z
            });
          }
        }
        var h = b.length, m = a.length, l = RegExp(b.replace(/./g, f), 'g'), n = RegExp(a.replace(/./g, f), 'g');
        g.startSymbol = function () {
          return b;
        };
        g.endSymbol = function () {
          return a;
        };
        return g;
      }
    ];
  }
  function oe() {
    this.$get = [
      '$rootScope',
      '$window',
      '$q',
      '$$q',
      function (b, a, c, d) {
        function e(e, h, m, l) {
          var n = a.setInterval, p = a.clearInterval, k = 0, t = F(l) && !l, s = (t ? d : c).defer(), I = s.promise;
          m = F(m) ? m : 0;
          I.then(null, null, e);
          I.$$intervalId = n(function () {
            s.notify(k++);
            0 < m && k >= m && (s.resolve(k), p(I.$$intervalId), delete f[I.$$intervalId]);
            t || b.$apply();
          }, h);
          f[I.$$intervalId] = s;
          return I;
        }
        var f = {};
        e.cancel = function (b) {
          return b && b.$$intervalId in f ? (f[b.$$intervalId].reject('canceled'), a.clearInterval(b.$$intervalId), delete f[b.$$intervalId], !0) : !1;
        };
        return e;
      }
    ];
  }
  function wd() {
    this.$get = function () {
      return {
        id: 'en-us',
        NUMBER_FORMATS: {
          DECIMAL_SEP: '.',
          GROUP_SEP: ',',
          PATTERNS: [
            {
              minInt: 1,
              minFrac: 0,
              maxFrac: 3,
              posPre: '',
              posSuf: '',
              negPre: '-',
              negSuf: '',
              gSize: 3,
              lgSize: 3
            },
            {
              minInt: 1,
              minFrac: 2,
              maxFrac: 2,
              posPre: '\xa4',
              posSuf: '',
              negPre: '(\xa4',
              negSuf: ')',
              gSize: 3,
              lgSize: 3
            }
          ],
          CURRENCY_SYM: '$'
        },
        DATETIME_FORMATS: {
          MONTH: 'January February March April May June July August September October November December'.split(' '),
          SHORTMONTH: 'Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec'.split(' '),
          DAY: 'Sunday Monday Tuesday Wednesday Thursday Friday Saturday'.split(' '),
          SHORTDAY: 'Sun Mon Tue Wed Thu Fri Sat'.split(' '),
          AMPMS: [
            'AM',
            'PM'
          ],
          medium: 'MMM d, y h:mm:ss a',
          'short': 'M/d/yy h:mm a',
          fullDate: 'EEEE, MMMM d, y',
          longDate: 'MMMM d, y',
          mediumDate: 'MMM d, y',
          shortDate: 'M/d/yy',
          mediumTime: 'h:mm:ss a',
          shortTime: 'h:mm a'
        },
        pluralCat: function (b) {
          return 1 === b ? 'one' : 'other';
        }
      };
    };
  }
  function Nb(b) {
    b = b.split('/');
    for (var a = b.length; a--;)
      b[a] = gb(b[a]);
    return b.join('/');
  }
  function Kc(b, a, c) {
    b = wa(b, c);
    a.$$protocol = b.protocol;
    a.$$host = b.hostname;
    a.$$port = Y(b.port) || Ye[b.protocol] || null;
  }
  function Lc(b, a, c) {
    var d = '/' !== b.charAt(0);
    d && (b = '/' + b);
    b = wa(b, c);
    a.$$path = decodeURIComponent(d && '/' === b.pathname.charAt(0) ? b.pathname.substring(1) : b.pathname);
    a.$$search = dc(b.search);
    a.$$hash = decodeURIComponent(b.hash);
    a.$$path && '/' != a.$$path.charAt(0) && (a.$$path = '/' + a.$$path);
  }
  function qa(b, a) {
    if (0 === a.indexOf(b))
      return a.substr(b.length);
  }
  function Za(b) {
    var a = b.indexOf('#');
    return -1 == a ? b : b.substr(0, a);
  }
  function Ob(b) {
    return b.substr(0, Za(b).lastIndexOf('/') + 1);
  }
  function Mc(b, a) {
    this.$$html5 = !0;
    a = a || '';
    var c = Ob(b);
    Kc(b, this, b);
    this.$$parse = function (a) {
      var e = qa(c, a);
      if (!x(e))
        throw Pb('ipthprfx', a, c);
      Lc(e, this, b);
      this.$$path || (this.$$path = '/');
      this.$$compose();
    };
    this.$$compose = function () {
      var a = Cb(this.$$search), b = this.$$hash ? '#' + gb(this.$$hash) : '';
      this.$$url = Nb(this.$$path) + (a ? '?' + a : '') + b;
      this.$$absUrl = c + this.$$url.substr(1);
    };
    this.$$rewrite = function (d) {
      var e;
      if ((e = qa(b, d)) !== r)
        return d = e, (e = qa(a, e)) !== r ? c + (qa('/', e) || e) : b + d;
      if ((e = qa(c, d)) !== r)
        return c + e;
      if (c == d + '/')
        return c;
    };
  }
  function Qb(b, a) {
    var c = Ob(b);
    Kc(b, this, b);
    this.$$parse = function (d) {
      var e = qa(b, d) || qa(c, d), e = '#' == e.charAt(0) ? qa(a, e) : this.$$html5 ? e : '';
      if (!x(e))
        throw Pb('ihshprfx', d, a);
      Lc(e, this, b);
      d = this.$$path;
      var f = /^\/[A-Z]:(\/.*)/;
      0 === e.indexOf(b) && (e = e.replace(b, ''));
      f.exec(e) || (d = (e = f.exec(d)) ? e[1] : d);
      this.$$path = d;
      this.$$compose();
    };
    this.$$compose = function () {
      var c = Cb(this.$$search), e = this.$$hash ? '#' + gb(this.$$hash) : '';
      this.$$url = Nb(this.$$path) + (c ? '?' + c : '') + e;
      this.$$absUrl = b + (this.$$url ? a + this.$$url : '');
    };
    this.$$rewrite = function (a) {
      if (Za(b) == Za(a))
        return a;
    };
  }
  function Rb(b, a) {
    this.$$html5 = !0;
    Qb.apply(this, arguments);
    var c = Ob(b);
    this.$$rewrite = function (d) {
      var e;
      if (b == Za(d))
        return d;
      if (e = qa(c, d))
        return b + a + e;
      if (c === d + '/')
        return c;
    };
    this.$$compose = function () {
      var c = Cb(this.$$search), e = this.$$hash ? '#' + gb(this.$$hash) : '';
      this.$$url = Nb(this.$$path) + (c ? '?' + c : '') + e;
      this.$$absUrl = b + a + this.$$url;
    };
  }
  function rb(b) {
    return function () {
      return this[b];
    };
  }
  function Nc(b, a) {
    return function (c) {
      if (y(c))
        return this[b];
      this[b] = a(c);
      this.$$compose();
      return this;
    };
  }
  function re() {
    var b = '', a = !1;
    this.hashPrefix = function (a) {
      return F(a) ? (b = a, this) : b;
    };
    this.html5Mode = function (b) {
      return F(b) ? (a = b, this) : a;
    };
    this.$get = [
      '$rootScope',
      '$browser',
      '$sniffer',
      '$rootElement',
      function (c, d, e, f) {
        function g(a) {
          c.$broadcast('$locationChangeSuccess', h.absUrl(), a);
        }
        var h, m, l = d.baseHref(), n = d.url(), p;
        a ? (p = n.substring(0, n.indexOf('/', n.indexOf('//') + 2)) + (l || '/'), m = e.history ? Mc : Rb) : (p = Za(n), m = Qb);
        h = new m(p, '#' + b);
        h.$$parse(h.$$rewrite(n));
        f.on('click', function (a) {
          if (!a.ctrlKey && !a.metaKey && 2 != a.which) {
            for (var e = C(a.target); 'a' !== na(e[0]);)
              if (e[0] === f[0] || !(e = e.parent())[0])
                return;
            var g = e.prop('href');
            S(g) && '[object SVGAnimatedString]' === g.toString() && (g = wa(g.animVal).href);
            if (m === Rb) {
              var k = e.attr('href') || e.attr('xlink:href');
              if (0 > k.indexOf('://'))
                if (g = '#' + b, '/' == k[0])
                  g = p + g + k;
                else if ('#' == k[0])
                  g = p + g + (h.path() || '/') + k;
                else {
                  for (var l = h.path().split('/'), k = k.split('/'), n = 0; n < k.length; n++)
                    '.' != k[n] && ('..' == k[n] ? l.pop() : k[n].length && l.push(k[n]));
                  g = p + g + l.join('/');
                }
            }
            l = h.$$rewrite(g);
            g && (!e.attr('target') && l && !a.isDefaultPrevented()) && (a.preventDefault(), l != d.url() && (h.$$parse(l), c.$apply(), N.angular['ff-684208-preventDefault'] = !0));
          }
        });
        h.absUrl() != n && d.url(h.absUrl(), !0);
        d.onUrlChange(function (a) {
          h.absUrl() != a && (c.$evalAsync(function () {
            var b = h.absUrl();
            h.$$parse(a);
            c.$broadcast('$locationChangeStart', a, b).defaultPrevented ? (h.$$parse(b), d.url(b)) : g(b);
          }), c.$$phase || c.$digest());
        });
        var k = 0;
        c.$watch(function () {
          var a = d.url(), b = h.$$replace;
          k && a == h.absUrl() || (k++, c.$evalAsync(function () {
            c.$broadcast('$locationChangeStart', h.absUrl(), a).defaultPrevented ? h.$$parse(a) : (d.url(h.absUrl(), b), g(a));
          }));
          h.$$replace = !1;
          return k;
        });
        return h;
      }
    ];
  }
  function se() {
    var b = !0, a = this;
    this.debugEnabled = function (a) {
      return F(a) ? (b = a, this) : b;
    };
    this.$get = [
      '$window',
      function (c) {
        function d(a) {
          a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? 'Error: ' + a.message + '\n' + a.stack : a.stack : a.sourceURL && (a = a.message + '\n' + a.sourceURL + ':' + a.line));
          return a;
        }
        function e(a) {
          var b = c.console || {}, e = b[a] || b.log || B;
          a = !1;
          try {
            a = !!e.apply;
          } catch (m) {
          }
          return a ? function () {
            var a = [];
            q(arguments, function (b) {
              a.push(d(b));
            });
            return e.apply(b, a);
          } : function (a, b) {
            e(a, null == b ? '' : b);
          };
        }
        return {
          log: e('log'),
          info: e('info'),
          warn: e('warn'),
          error: e('error'),
          debug: function () {
            var c = e('debug');
            return function () {
              b && c.apply(a, arguments);
            };
          }()
        };
      }
    ];
  }
  function ea(b, a) {
    if ('__defineGetter__' === b || '__defineSetter__' === b || '__lookupGetter__' === b || '__lookupSetter__' === b || '__proto__' === b)
      throw ja('isecfld', a);
    return b;
  }
  function Ma(b, a) {
    if (b) {
      if (b.constructor === b)
        throw ja('isecfn', a);
      if (b.window === b)
        throw ja('isecwindow', a);
      if (b.children && (b.nodeName || b.prop && b.attr && b.find))
        throw ja('isecdom', a);
      if (b === Object)
        throw ja('isecobj', a);
    }
    return b;
  }
  function sb(b, a, c, d) {
    a = a.split('.');
    for (var e, f = 0; 1 < a.length; f++) {
      e = ea(a.shift(), d);
      var g = b[e];
      g || (g = {}, b[e] = g);
      b = g;
    }
    e = ea(a.shift(), d);
    Ma(b, d);
    Ma(b[e], d);
    return b[e] = c;
  }
  function Oc(b, a, c, d, e, f) {
    ea(b, f);
    ea(a, f);
    ea(c, f);
    ea(d, f);
    ea(e, f);
    return function (f, h) {
      var m = h && h.hasOwnProperty(b) ? h : f;
      if (null == m)
        return m;
      m = m[b];
      if (!a)
        return m;
      if (null == m)
        return r;
      m = m[a];
      if (!c)
        return m;
      if (null == m)
        return r;
      m = m[c];
      if (!d)
        return m;
      if (null == m)
        return r;
      m = m[d];
      return e ? null == m ? r : m = m[e] : m;
    };
  }
  function Ze(b, a) {
    ea(b, a);
    return function (a, d) {
      return null == a ? r : (d && d.hasOwnProperty(b) ? d : a)[b];
    };
  }
  function $e(b, a, c) {
    ea(b, c);
    ea(a, c);
    return function (c, e) {
      if (null == c)
        return r;
      c = (e && e.hasOwnProperty(b) ? e : c)[b];
      return null == c ? r : c[a];
    };
  }
  function Pc(b, a, c) {
    if (Sb.hasOwnProperty(b))
      return Sb[b];
    var d = b.split('.'), e = d.length;
    if (1 === e)
      a = Ze(d[0], c);
    else if (2 === e)
      a = $e(d[0], d[1], c);
    else if (a.csp)
      a = 6 > e ? Oc(d[0], d[1], d[2], d[3], d[4], c) : function (a, b) {
        var f = 0, l;
        do
          l = Oc(d[f++], d[f++], d[f++], d[f++], d[f++], c)(a, b), b = r, a = l;
        while (f < e);
        return l;
      };
    else {
      var f = 'var p;\n';
      q(d, function (a, b) {
        ea(a, c);
        f += 'if(s == null) return undefined;\ns=' + (b ? 's' : '((k&&k.hasOwnProperty("' + a + '"))?k:s)') + '["' + a + '"];\n';
      });
      f += 'return s;';
      a = new Function('s', 'k', f);
      a.toString = da(f);
    }
    'hasOwnProperty' !== b && (Sb[b] = a);
    return a;
  }
  function te() {
    var b = {}, a = { csp: !1 };
    this.$get = [
      '$filter',
      '$sniffer',
      function (c, d) {
        a.csp = d.csp;
        return function (d) {
          function f(a) {
            function b(e, f) {
              c || (d = a.constant && d ? d : a(e, f), b.$$unwatch = F(d), b.$$unwatch && (e && e.$$postDigestQueue) && e.$$postDigestQueue.push(function () {
                !(c = F(d)) || null !== d && d.$$unwrapTrustedValue || (d = Aa(d, null));
              }));
              return d;
            }
            var c = !1, d;
            b.literal = a.literal;
            b.constant = a.constant;
            b.assign = a.assign;
            return b;
          }
          var g, h;
          switch (typeof d) {
          case 'string':
            d = aa(d);
            ':' === d.charAt(0) && ':' === d.charAt(1) && (h = !0, d = d.substring(2));
            if (b.hasOwnProperty(d))
              return h ? f(b[d]) : b[d];
            g = new Tb(a);
            g = new $a(g, c, a).parse(d);
            'hasOwnProperty' !== d && (b[d] = g);
            return h || g.constant ? f(g) : g;
          case 'function':
            return d;
          default:
            return B;
          }
        };
      }
    ];
  }
  function ve() {
    this.$get = [
      '$rootScope',
      '$exceptionHandler',
      function (b, a) {
        return Qc(function (a) {
          b.$evalAsync(a);
        }, a);
      }
    ];
  }
  function we() {
    this.$get = [
      '$browser',
      '$exceptionHandler',
      function (b, a) {
        return Qc(function (a) {
          b.defer(a);
        }, a);
      }
    ];
  }
  function Qc(b, a) {
    function c(a) {
      return a;
    }
    function d(a) {
      return g(a);
    }
    var e = function () {
        var g = [], l, n;
        return n = {
          resolve: function (a) {
            if (g) {
              var c = g;
              g = r;
              l = f(a);
              c.length && b(function () {
                for (var a, b = 0, d = c.length; b < d; b++)
                  a = c[b], l.then(a[0], a[1], a[2]);
              });
            }
          },
          reject: function (a) {
            n.resolve(h(a));
          },
          notify: function (a) {
            if (g) {
              var c = g;
              g.length && b(function () {
                for (var b, d = 0, e = c.length; d < e; d++)
                  b = c[d], b[2](a);
              });
            }
          },
          promise: {
            then: function (b, f, h) {
              var n = e(), I = function (d) {
                  try {
                    n.resolve((M(b) ? b : c)(d));
                  } catch (e) {
                    n.reject(e), a(e);
                  }
                }, E = function (b) {
                  try {
                    n.resolve((M(f) ? f : d)(b));
                  } catch (c) {
                    n.reject(c), a(c);
                  }
                }, D = function (b) {
                  try {
                    n.notify((M(h) ? h : c)(b));
                  } catch (d) {
                    a(d);
                  }
                };
              g ? g.push([
                I,
                E,
                D
              ]) : l.then(I, E, D);
              return n.promise;
            },
            'catch': function (a) {
              return this.then(null, a);
            },
            'finally': function (a) {
              function b(a, c) {
                var d = e();
                c ? d.resolve(a) : d.reject(a);
                return d.promise;
              }
              function d(e, f) {
                var g = null;
                try {
                  g = (a || c)();
                } catch (h) {
                  return b(h, !1);
                }
                return g && M(g.then) ? g.then(function () {
                  return b(e, f);
                }, function (a) {
                  return b(a, !1);
                }) : b(e, f);
              }
              return this.then(function (a) {
                return d(a, !0);
              }, function (a) {
                return d(a, !1);
              });
            }
          }
        };
      }, f = function (a) {
        return a && M(a.then) ? a : {
          then: function (c) {
            var d = e();
            b(function () {
              d.resolve(c(a));
            });
            return d.promise;
          }
        };
      }, g = function (a) {
        var b = e();
        b.reject(a);
        return b.promise;
      }, h = function (c) {
        return {
          then: function (f, g) {
            var h = e();
            b(function () {
              try {
                h.resolve((M(g) ? g : d)(c));
              } catch (b) {
                h.reject(b), a(b);
              }
            });
            return h.promise;
          }
        };
      };
    return {
      defer: e,
      reject: g,
      when: function (h, l, n, p) {
        var k = e(), t, s = function (b) {
            try {
              return (M(l) ? l : c)(b);
            } catch (d) {
              return a(d), g(d);
            }
          }, I = function (b) {
            try {
              return (M(n) ? n : d)(b);
            } catch (c) {
              return a(c), g(c);
            }
          }, E = function (b) {
            try {
              return (M(p) ? p : c)(b);
            } catch (d) {
              a(d);
            }
          };
        b(function () {
          f(h).then(function (a) {
            t || (t = !0, k.resolve(f(a).then(s, I, E)));
          }, function (a) {
            t || (t = !0, k.resolve(I(a)));
          }, function (a) {
            t || k.notify(E(a));
          });
        });
        return k.promise;
      },
      all: function (a) {
        var b = e(), c = 0, d = L(a) ? [] : {};
        q(a, function (a, e) {
          c++;
          f(a).then(function (a) {
            d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d));
          }, function (a) {
            d.hasOwnProperty(e) || b.reject(a);
          });
        });
        0 === c && b.resolve(d);
        return b.promise;
      }
    };
  }
  function De() {
    this.$get = [
      '$window',
      '$timeout',
      function (b, a) {
        var c = b.requestAnimationFrame || b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame, d = b.cancelAnimationFrame || b.webkitCancelAnimationFrame || b.mozCancelAnimationFrame || b.webkitCancelRequestAnimationFrame, e = !!c, f = e ? function (a) {
            var b = c(a);
            return function () {
              d(b);
            };
          } : function (b) {
            var c = a(b, 16.66, !1);
            return function () {
              a.cancel(c);
            };
          };
        f.supported = e;
        return f;
      }
    ];
  }
  function ue() {
    var b = 10, a = K('$rootScope'), c = null;
    this.digestTtl = function (a) {
      arguments.length && (b = a);
      return b;
    };
    this.$get = [
      '$injector',
      '$exceptionHandler',
      '$parse',
      '$browser',
      function (d, e, f, g) {
        function h() {
          this.$id = ++eb;
          this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;
          this['this'] = this.$root = this;
          this.$$destroyed = !1;
          this.$$asyncQueue = [];
          this.$$postDigestQueue = [];
          this.$$listeners = {};
          this.$$listenerCount = {};
          this.$$isolateBindings = {};
        }
        function m(b) {
          if (k.$$phase)
            throw a('inprog', k.$$phase);
          k.$$phase = b;
        }
        function l(a, b) {
          var c = f(a);
          Sa(c, b);
          return c;
        }
        function n(a, b, c) {
          do
            a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c];
          while (a = a.$parent);
        }
        function p() {
        }
        h.prototype = {
          constructor: h,
          $new: function (a) {
            a ? (a = new h(), a.$root = this.$root, a.$$asyncQueue = this.$$asyncQueue, a.$$postDigestQueue = this.$$postDigestQueue) : (this.$$childScopeClass || (this.$$childScopeClass = function () {
              this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null;
              this.$$listeners = {};
              this.$$listenerCount = {};
              this.$id = ++eb;
              this.$$childScopeClass = null;
            }, this.$$childScopeClass.prototype = this), a = new this.$$childScopeClass());
            a['this'] = a;
            a.$parent = this;
            a.$$prevSibling = this.$$childTail;
            this.$$childHead ? this.$$childTail = this.$$childTail.$$nextSibling = a : this.$$childHead = this.$$childTail = a;
            return a;
          },
          $watch: function (a, b, d) {
            var e = l(a, 'watch'), f = this.$$watchers, g = {
                fn: b,
                last: p,
                get: e,
                exp: a,
                eq: !!d
              };
            c = null;
            if (!M(b)) {
              var h = l(b || B, 'listener');
              g.fn = function (a, b, c) {
                h(c);
              };
            }
            f || (f = this.$$watchers = []);
            f.unshift(g);
            return function () {
              Ga(f, g);
              c = null;
            };
          },
          $watchGroup: function (a, b) {
            function c() {
              return h;
            }
            var d = Array(a.length), e = Array(a.length), g = [], h = 0, k = this, l = Array(a.length), m = a.length;
            q(a, function (a, b) {
              var c = f(a);
              g.push(k.$watch(c, function (a, f) {
                e[b] = a;
                d[b] = f;
                h++;
                l[b] && !c.$$unwatch && m++;
                !l[b] && c.$$unwatch && m--;
                l[b] = c.$$unwatch;
              }));
            }, this);
            g.push(k.$watch(c, function () {
              b(e, d, k);
              c.$$unwatch = 0 === m ? !0 : !1;
            }));
            return function () {
              q(g, function (a) {
                a();
              });
            };
          },
          $watchCollection: function (a, b) {
            function c() {
              e = m(d);
              var a, b;
              if (S(e))
                if (db(e))
                  for (g !== n && (g = n, v = g.length = 0, l++), a = e.length, v !== a && (l++, g.length = v = a), b = 0; b < a; b++)
                    g[b] !== g[b] && e[b] !== e[b] || g[b] === e[b] || (l++, g[b] = e[b]);
                else {
                  g !== p && (g = p = {}, v = 0, l++);
                  a = 0;
                  for (b in e)
                    e.hasOwnProperty(b) && (a++, g.hasOwnProperty(b) ? g[b] !== e[b] && (l++, g[b] = e[b]) : (v++, g[b] = e[b], l++));
                  if (v > a)
                    for (b in l++, g)
                      g.hasOwnProperty(b) && !e.hasOwnProperty(b) && (v--, delete g[b]);
                }
              else
                g !== e && (g = e, l++);
              c.$$unwatch = m.$$unwatch;
              return l;
            }
            var d = this, e, g, h, k = 1 < b.length, l = 0, m = f(a), n = [], p = {}, q = !0, v = 0;
            return this.$watch(c, function () {
              q ? (q = !1, b(e, e, d)) : b(e, h, d);
              if (k)
                if (S(e))
                  if (db(e)) {
                    h = Array(e.length);
                    for (var a = 0; a < e.length; a++)
                      h[a] = e[a];
                  } else
                    for (a in h = {}, e)
                      Bb.call(e, a) && (h[a] = e[a]);
                else
                  h = e;
            });
          },
          $digest: function () {
            var d, f, g, h, l = this.$$asyncQueue, n = this.$$postDigestQueue, z, q, r = b, O, T = [], P = [], C, v, F;
            m('$digest');
            c = null;
            do {
              q = !1;
              for (O = this; l.length;) {
                try {
                  F = l.shift(), F.scope.$eval(F.expression);
                } catch (J) {
                  k.$$phase = null, e(J);
                }
                c = null;
              }
              a:
                do {
                  if (h = O.$$watchers)
                    for (z = h.length; z--;)
                      try {
                        if (d = h[z])
                          if ((f = d.get(O)) !== (g = d.last) && !(d.eq ? sa(f, g) : 'number' === typeof f && 'number' === typeof g && isNaN(f) && isNaN(g)))
                            q = !0, c = d, d.last = d.eq ? Aa(f, null) : f, d.fn(f, g === p ? f : g, O), 5 > r && (C = 4 - r, T[C] || (T[C] = []), v = M(d.exp) ? 'fn: ' + (d.exp.name || d.exp.toString()) : d.exp, v += '; newVal: ' + ta(f) + '; oldVal: ' + ta(g), T[C].push(v)), d.get.$$unwatch && P.push({
                              watch: d,
                              array: h
                            });
                          else if (d === c) {
                            q = !1;
                            break a;
                          }
                      } catch (A) {
                        k.$$phase = null, e(A);
                      }
                  if (!(z = O.$$childHead || O !== this && O.$$nextSibling))
                    for (; O !== this && !(z = O.$$nextSibling);)
                      O = O.$parent;
                } while (O = z);
              if ((q || l.length) && !r--)
                throw k.$$phase = null, a('infdig', b, ta(T));
            } while (q || l.length);
            for (k.$$phase = null; n.length;)
              try {
                n.shift()();
              } catch (B) {
                e(B);
              }
            for (z = P.length - 1; 0 <= z; --z)
              d = P[z], d.watch.get.$$unwatch && Ga(d.array, d.watch);
          },
          $destroy: function () {
            if (!this.$$destroyed) {
              var a = this.$parent;
              this.$broadcast('$destroy');
              this.$$destroyed = !0;
              this !== k && (q(this.$$listenerCount, Ab(null, n, this)), a.$$childHead == this && (a.$$childHead = this.$$nextSibling), a.$$childTail == this && (a.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = null, this.$$listeners = {}, this.$$watchers = this.$$asyncQueue = this.$$postDigestQueue = [], this.$destroy = this.$digest = this.$apply = B, this.$on = this.$watch = this.$watchGroup = function () {
                return B;
              });
            }
          },
          $eval: function (a, b) {
            return f(a)(this, b);
          },
          $evalAsync: function (a) {
            k.$$phase || k.$$asyncQueue.length || g.defer(function () {
              k.$$asyncQueue.length && k.$digest();
            });
            this.$$asyncQueue.push({
              scope: this,
              expression: a
            });
          },
          $$postDigest: function (a) {
            this.$$postDigestQueue.push(a);
          },
          $apply: function (a) {
            try {
              return m('$apply'), this.$eval(a);
            } catch (b) {
              e(b);
            } finally {
              k.$$phase = null;
              try {
                k.$digest();
              } catch (c) {
                throw e(c), c;
              }
            }
          },
          $on: function (a, b) {
            var c = this.$$listeners[a];
            c || (this.$$listeners[a] = c = []);
            c.push(b);
            var d = this;
            do
              d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++;
            while (d = d.$parent);
            var e = this;
            return function () {
              c[Pa(c, b)] = null;
              n(e, 1, a);
            };
          },
          $emit: function (a, b) {
            var c = [], d, f = this, g = !1, h = {
                name: a,
                targetScope: f,
                stopPropagation: function () {
                  g = !0;
                },
                preventDefault: function () {
                  h.defaultPrevented = !0;
                },
                defaultPrevented: !1
              }, k = [h].concat(la.call(arguments, 1)), l, m;
            do {
              d = f.$$listeners[a] || c;
              h.currentScope = f;
              l = 0;
              for (m = d.length; l < m; l++)
                if (d[l])
                  try {
                    d[l].apply(null, k);
                  } catch (n) {
                    e(n);
                  }
                else
                  d.splice(l, 1), l--, m--;
              if (g)
                return h.currentScope = null, h;
              f = f.$parent;
            } while (f);
            h.currentScope = null;
            return h;
          },
          $broadcast: function (a, b) {
            for (var c = this, d = this, f = {
                  name: a,
                  targetScope: this,
                  preventDefault: function () {
                    f.defaultPrevented = !0;
                  },
                  defaultPrevented: !1
                }, g = [f].concat(la.call(arguments, 1)), h, k; c = d;) {
              f.currentScope = c;
              d = c.$$listeners[a] || [];
              h = 0;
              for (k = d.length; h < k; h++)
                if (d[h])
                  try {
                    d[h].apply(null, g);
                  } catch (l) {
                    e(l);
                  }
                else
                  d.splice(h, 1), h--, k--;
              if (!(d = c.$$listenerCount[a] && c.$$childHead || c !== this && c.$$nextSibling))
                for (; c !== this && !(d = c.$$nextSibling);)
                  c = c.$parent;
            }
            f.currentScope = null;
            return f;
          }
        };
        var k = new h();
        return k;
      }
    ];
  }
  function xd() {
    var b = /^\s*(https?|ftp|mailto|tel|file):/, a = /^\s*(https?|ftp|file|blob):|data:image\//;
    this.aHrefSanitizationWhitelist = function (a) {
      return F(a) ? (b = a, this) : b;
    };
    this.imgSrcSanitizationWhitelist = function (b) {
      return F(b) ? (a = b, this) : a;
    };
    this.$get = function () {
      return function (c, d) {
        var e = d ? a : b, f;
        if (!W || 8 <= W)
          if (f = wa(c).href, '' !== f && !f.match(e))
            return 'unsafe:' + f;
        return c;
      };
    };
  }
  function af(b) {
    if ('self' === b)
      return b;
    if (x(b)) {
      if (-1 < b.indexOf('***'))
        throw xa('iwcard', b);
      b = b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, '\\$1').replace(/\x08/g, '\\x08').replace('\\*\\*', '.*').replace('\\*', '[^:/.?&;]*');
      return RegExp('^' + b + '$');
    }
    if (fb(b))
      return RegExp('^' + b.source + '$');
    throw xa('imatcher');
  }
  function Rc(b) {
    var a = [];
    F(b) && q(b, function (b) {
      a.push(af(b));
    });
    return a;
  }
  function ye() {
    this.SCE_CONTEXTS = ga;
    var b = ['self'], a = [];
    this.resourceUrlWhitelist = function (a) {
      arguments.length && (b = Rc(a));
      return b;
    };
    this.resourceUrlBlacklist = function (b) {
      arguments.length && (a = Rc(b));
      return a;
    };
    this.$get = [
      '$injector',
      function (c) {
        function d(a) {
          var b = function (a) {
            this.$$unwrapTrustedValue = function () {
              return a;
            };
          };
          a && (b.prototype = new a());
          b.prototype.valueOf = function () {
            return this.$$unwrapTrustedValue();
          };
          b.prototype.toString = function () {
            return this.$$unwrapTrustedValue().toString();
          };
          return b;
        }
        var e = function (a) {
          throw xa('unsafe');
        };
        c.has('$sanitize') && (e = c.get('$sanitize'));
        var f = d(), g = {};
        g[ga.HTML] = d(f);
        g[ga.CSS] = d(f);
        g[ga.URL] = d(f);
        g[ga.JS] = d(f);
        g[ga.RESOURCE_URL] = d(g[ga.URL]);
        return {
          trustAs: function (a, b) {
            var c = g.hasOwnProperty(a) ? g[a] : null;
            if (!c)
              throw xa('icontext', a, b);
            if (null === b || b === r || '' === b)
              return b;
            if ('string' !== typeof b)
              throw xa('itype', a);
            return new c(b);
          },
          getTrusted: function (c, d) {
            if (null === d || d === r || '' === d)
              return d;
            var f = g.hasOwnProperty(c) ? g[c] : null;
            if (f && d instanceof f)
              return d.$$unwrapTrustedValue();
            if (c === ga.RESOURCE_URL) {
              var f = wa(d.toString()), n, p, k = !1;
              n = 0;
              for (p = b.length; n < p; n++)
                if ('self' === b[n] ? Mb(f) : b[n].exec(f.href)) {
                  k = !0;
                  break;
                }
              if (k)
                for (n = 0, p = a.length; n < p; n++)
                  if ('self' === a[n] ? Mb(f) : a[n].exec(f.href)) {
                    k = !1;
                    break;
                  }
              if (k)
                return d;
              throw xa('insecurl', d.toString());
            }
            if (c === ga.HTML)
              return e(d);
            throw xa('unsafe');
          },
          valueOf: function (a) {
            return a instanceof f ? a.$$unwrapTrustedValue() : a;
          }
        };
      }
    ];
  }
  function xe() {
    var b = !0;
    this.enabled = function (a) {
      arguments.length && (b = !!a);
      return b;
    };
    this.$get = [
      '$parse',
      '$sniffer',
      '$sceDelegate',
      function (a, c, d) {
        if (b && c.msie && 8 > c.msieDocumentMode)
          throw xa('iequirks');
        var e = ka(ga);
        e.isEnabled = function () {
          return b;
        };
        e.trustAs = d.trustAs;
        e.getTrusted = d.getTrusted;
        e.valueOf = d.valueOf;
        b || (e.trustAs = e.getTrusted = function (a, b) {
          return b;
        }, e.valueOf = Ea);
        e.parseAs = function (b, c) {
          var d = a(c);
          return d.literal && d.constant ? d : function k(a, c) {
            var f = e.getTrusted(b, d(a, c));
            k.$$unwatch = d.$$unwatch;
            return f;
          };
        };
        var f = e.parseAs, g = e.getTrusted, h = e.trustAs;
        q(ga, function (a, b) {
          var c = G(b);
          e[Ua('parse_as_' + c)] = function (b) {
            return f(a, b);
          };
          e[Ua('get_trusted_' + c)] = function (b) {
            return g(a, b);
          };
          e[Ua('trust_as_' + c)] = function (b) {
            return h(a, b);
          };
        });
        return e;
      }
    ];
  }
  function ze() {
    this.$get = [
      '$window',
      '$document',
      function (b, a) {
        var c = {}, d = Y((/android (\d+)/.exec(G((b.navigator || {}).userAgent)) || [])[1]), e = /Boxee/i.test((b.navigator || {}).userAgent), f = a[0] || {}, g = f.documentMode, h, m = /^(Moz|webkit|O|ms)(?=[A-Z])/, l = f.body && f.body.style, n = !1, p = !1;
        if (l) {
          for (var k in l)
            if (n = m.exec(k)) {
              h = n[0];
              h = h.substr(0, 1).toUpperCase() + h.substr(1);
              break;
            }
          h || (h = 'WebkitOpacity' in l && 'webkit');
          n = !!('transition' in l || h + 'Transition' in l);
          p = !!('animation' in l || h + 'Animation' in l);
          !d || n && p || (n = x(f.body.style.webkitTransition), p = x(f.body.style.webkitAnimation));
        }
        return {
          history: !(!b.history || !b.history.pushState || 4 > d || e),
          hashchange: 'onhashchange' in b && (!g || 7 < g),
          hasEvent: function (a) {
            if ('input' == a && 9 == W)
              return !1;
            if (y(c[a])) {
              var b = f.createElement('div');
              c[a] = 'on' + a in b;
            }
            return c[a];
          },
          csp: ac(),
          vendorPrefix: h,
          transitions: n,
          animations: p,
          android: d,
          msie: W,
          msieDocumentMode: g
        };
      }
    ];
  }
  function Be() {
    this.$get = [
      '$rootScope',
      '$browser',
      '$q',
      '$$q',
      '$exceptionHandler',
      function (b, a, c, d, e) {
        function f(f, m, l) {
          var n = F(l) && !l, p = (n ? d : c).defer(), k = p.promise;
          m = a.defer(function () {
            try {
              p.resolve(f());
            } catch (a) {
              p.reject(a), e(a);
            } finally {
              delete g[k.$$timeoutId];
            }
            n || b.$apply();
          }, m);
          k.$$timeoutId = m;
          g[m] = p;
          return k;
        }
        var g = {};
        f.cancel = function (b) {
          return b && b.$$timeoutId in g ? (g[b.$$timeoutId].reject('canceled'), delete g[b.$$timeoutId], a.defer.cancel(b.$$timeoutId)) : !1;
        };
        return f;
      }
    ];
  }
  function wa(b, a) {
    var c = b;
    W && (ba.setAttribute('href', c), c = ba.href);
    ba.setAttribute('href', c);
    return {
      href: ba.href,
      protocol: ba.protocol ? ba.protocol.replace(/:$/, '') : '',
      host: ba.host,
      search: ba.search ? ba.search.replace(/^\?/, '') : '',
      hash: ba.hash ? ba.hash.replace(/^#/, '') : '',
      hostname: ba.hostname,
      port: ba.port,
      pathname: '/' === ba.pathname.charAt(0) ? ba.pathname : '/' + ba.pathname
    };
  }
  function Mb(b) {
    b = x(b) ? wa(b) : b;
    return b.protocol === Sc.protocol && b.host === Sc.host;
  }
  function Ce() {
    this.$get = da(N);
  }
  function oc(b) {
    function a(d, e) {
      if (S(d)) {
        var f = {};
        q(d, function (b, c) {
          f[c] = a(c, b);
        });
        return f;
      }
      return b.factory(d + c, e);
    }
    var c = 'Filter';
    this.register = a;
    this.$get = [
      '$injector',
      function (a) {
        return function (b) {
          return a.get(b + c);
        };
      }
    ];
    a('currency', Tc);
    a('date', Uc);
    a('filter', bf);
    a('json', cf);
    a('limitTo', df);
    a('lowercase', ef);
    a('number', Vc);
    a('orderBy', Wc);
    a('uppercase', ff);
  }
  function bf() {
    return function (b, a, c) {
      if (!L(b))
        return b;
      var d = typeof c, e = [];
      e.check = function (a) {
        for (var b = 0; b < e.length; b++)
          if (!e[b](a))
            return !1;
        return !0;
      };
      'function' !== d && (c = 'boolean' === d && c ? function (a, b) {
        return Ra.equals(a, b);
      } : function (a, b) {
        if (a && b && 'object' === typeof a && 'object' === typeof b) {
          for (var d in a)
            if ('$' !== d.charAt(0) && Bb.call(a, d) && c(a[d], b[d]))
              return !0;
          return !1;
        }
        b = ('' + b).toLowerCase();
        return -1 < ('' + a).toLowerCase().indexOf(b);
      });
      var f = function (a, b) {
        if ('string' == typeof b && '!' === b.charAt(0))
          return !f(a, b.substr(1));
        switch (typeof a) {
        case 'boolean':
        case 'number':
        case 'string':
          return c(a, b);
        case 'object':
          switch (typeof b) {
          case 'object':
            return c(a, b);
          default:
            for (var d in a)
              if ('$' !== d.charAt(0) && f(a[d], b))
                return !0;
          }
          return !1;
        case 'array':
          for (d = 0; d < a.length; d++)
            if (f(a[d], b))
              return !0;
          return !1;
        default:
          return !1;
        }
      };
      switch (typeof a) {
      case 'boolean':
      case 'number':
      case 'string':
        a = { $: a };
      case 'object':
        for (var g in a)
          (function (b) {
            'undefined' !== typeof a[b] && e.push(function (c) {
              return f('$' == b ? c : c && c[b], a[b]);
            });
          }(g));
        break;
      case 'function':
        e.push(a);
        break;
      default:
        return b;
      }
      d = [];
      for (g = 0; g < b.length; g++) {
        var h = b[g];
        e.check(h) && d.push(h);
      }
      return d;
    };
  }
  function Tc(b) {
    var a = b.NUMBER_FORMATS;
    return function (b, d) {
      y(d) && (d = a.CURRENCY_SYM);
      return Xc(b, a.PATTERNS[1], a.GROUP_SEP, a.DECIMAL_SEP, 2).replace(/\u00A4/g, d);
    };
  }
  function Vc(b) {
    var a = b.NUMBER_FORMATS;
    return function (b, d) {
      return Xc(b, a.PATTERNS[0], a.GROUP_SEP, a.DECIMAL_SEP, d);
    };
  }
  function Xc(b, a, c, d, e) {
    if (null == b || !isFinite(b) || S(b))
      return '';
    var f = 0 > b;
    b = Math.abs(b);
    var g = b + '', h = '', m = [], l = !1;
    if (-1 !== g.indexOf('e')) {
      var n = g.match(/([\d\.]+)e(-?)(\d+)/);
      n && '-' == n[2] && n[3] > e + 1 ? (g = '0', b = 0) : (h = g, l = !0);
    }
    if (l)
      0 < e && (-1 < b && 1 > b) && (h = b.toFixed(e));
    else {
      g = (g.split(Yc)[1] || '').length;
      y(e) && (e = Math.min(Math.max(a.minFrac, g), a.maxFrac));
      b = +(Math.round(+(b.toString() + 'e' + e)).toString() + 'e' + -e);
      b = ('' + b).split(Yc);
      g = b[0];
      b = b[1] || '';
      var n = 0, p = a.lgSize, k = a.gSize;
      if (g.length >= p + k)
        for (n = g.length - p, l = 0; l < n; l++)
          0 === (n - l) % k && 0 !== l && (h += c), h += g.charAt(l);
      for (l = n; l < g.length; l++)
        0 === (g.length - l) % p && 0 !== l && (h += c), h += g.charAt(l);
      for (; b.length < e;)
        b += '0';
      e && '0' !== e && (h += d + b.substr(0, e));
    }
    m.push(f ? a.negPre : a.posPre);
    m.push(h);
    m.push(f ? a.negSuf : a.posSuf);
    return m.join('');
  }
  function tb(b, a, c) {
    var d = '';
    0 > b && (d = '-', b = -b);
    for (b = '' + b; b.length < a;)
      b = '0' + b;
    c && (b = b.substr(b.length - a));
    return d + b;
  }
  function ca(b, a, c, d) {
    c = c || 0;
    return function (e) {
      e = e['get' + b]();
      if (0 < c || e > -c)
        e += c;
      0 === e && -12 == c && (e = 12);
      return tb(e, a, d);
    };
  }
  function ub(b, a) {
    return function (c, d) {
      var e = c['get' + b](), f = ib(a ? 'SHORT' + b : b);
      return d[f][e];
    };
  }
  function Zc(b) {
    var a = new Date(b, 0, 1).getDay();
    return new Date(b, 0, (4 >= a ? 5 : 12) - a);
  }
  function $c(b) {
    return function (a) {
      var c = Zc(a.getFullYear());
      a = +new Date(a.getFullYear(), a.getMonth(), a.getDate() + (4 - a.getDay())) - +c;
      a = 1 + Math.round(a / 604800000);
      return tb(a, b);
    };
  }
  function Uc(b) {
    function a(a) {
      var b;
      if (b = a.match(c)) {
        a = new Date(0);
        var f = 0, g = 0, h = b[8] ? a.setUTCFullYear : a.setFullYear, m = b[8] ? a.setUTCHours : a.setHours;
        b[9] && (f = Y(b[9] + b[10]), g = Y(b[9] + b[11]));
        h.call(a, Y(b[1]), Y(b[2]) - 1, Y(b[3]));
        f = Y(b[4] || 0) - f;
        g = Y(b[5] || 0) - g;
        h = Y(b[6] || 0);
        b = Math.round(1000 * parseFloat('0.' + (b[7] || 0)));
        m.call(a, f, g, h, b);
      }
      return a;
    }
    var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
    return function (c, e) {
      var f = '', g = [], h, m;
      e = e || 'mediumDate';
      e = b.DATETIME_FORMATS[e] || e;
      x(c) && (c = gf.test(c) ? Y(c) : a(c));
      Fa(c) && (c = new Date(c));
      if (!ra(c))
        return c;
      for (; e;)
        (m = hf.exec(e)) ? (g = g.concat(la.call(m, 1)), e = g.pop()) : (g.push(e), e = null);
      q(g, function (a) {
        h = jf[a];
        f += h ? h(c, b.DATETIME_FORMATS) : a.replace(/(^'|'$)/g, '').replace(/''/g, '\'');
      });
      return f;
    };
  }
  function cf() {
    return function (b) {
      return ta(b, !0);
    };
  }
  function df() {
    return function (b, a) {
      if (!L(b) && !x(b))
        return b;
      a = Infinity === Math.abs(Number(a)) ? Number(a) : Y(a);
      if (x(b))
        return a ? 0 <= a ? b.slice(0, a) : b.slice(a, b.length) : '';
      var c = [], d, e;
      a > b.length ? a = b.length : a < -b.length && (a = -b.length);
      0 < a ? (d = 0, e = a) : (d = b.length + a, e = b.length);
      for (; d < e; d++)
        c.push(b[d]);
      return c;
    };
  }
  function Wc(b) {
    return function (a, c, d) {
      function e(a, b) {
        return b ? function (b, c) {
          return a(c, b);
        } : a;
      }
      function f(a, b) {
        var c = typeof a, d = typeof b;
        return c == d ? ('string' == c && (a = a.toLowerCase(), b = b.toLowerCase()), a === b ? 0 : a < b ? -1 : 1) : c < d ? -1 : 1;
      }
      if (!L(a) || !c)
        return a;
      c = L(c) ? c : [c];
      c = nd(c, function (a) {
        var c = !1, d = a || Ea;
        if (x(a)) {
          if ('+' == a.charAt(0) || '-' == a.charAt(0))
            c = '-' == a.charAt(0), a = a.substring(1);
          d = b(a);
          if (d.constant) {
            var g = d();
            return e(function (a, b) {
              return f(a[g], b[g]);
            }, c);
          }
        }
        return e(function (a, b) {
          return f(d(a), d(b));
        }, c);
      });
      for (var g = [], h = 0; h < a.length; h++)
        g.push(a[h]);
      return g.sort(e(function (a, b) {
        for (var d = 0; d < c.length; d++) {
          var e = c[d](a, b);
          if (0 !== e)
            return e;
        }
        return 0;
      }, d));
    };
  }
  function ya(b) {
    M(b) && (b = { link: b });
    b.restrict = b.restrict || 'AC';
    return da(b);
  }
  function ad(b, a, c, d) {
    function e(a, c) {
      c = c ? '-' + hb(c, '-') : '';
      d.removeClass(b, (a ? vb : wb) + c);
      d.addClass(b, (a ? wb : vb) + c);
    }
    var f = this, g = b.parent().controller('form') || xb, h = 0, m = f.$error = {}, l = [];
    f.$name = a.name || a.ngForm;
    f.$dirty = !1;
    f.$pristine = !0;
    f.$valid = !0;
    f.$invalid = !1;
    g.$addControl(f);
    b.addClass(Na);
    e(!0);
    f.$rollbackViewValue = function () {
      q(l, function (a) {
        a.$rollbackViewValue();
      });
    };
    f.$commitViewValue = function () {
      q(l, function (a) {
        a.$commitViewValue();
      });
    };
    f.$addControl = function (a) {
      Ca(a.$name, 'input');
      l.push(a);
      a.$name && (f[a.$name] = a);
    };
    f.$removeControl = function (a) {
      a.$name && f[a.$name] === a && delete f[a.$name];
      q(m, function (b, c) {
        f.$setValidity(c, !0, a);
      });
      Ga(l, a);
    };
    f.$setValidity = function (a, b, c) {
      var d = m[a];
      if (b)
        d && (Ga(d, c), d.length || (h--, h || (e(b), f.$valid = !0, f.$invalid = !1), m[a] = !1, e(!0, a), g.$setValidity(a, !0, f)));
      else {
        h || e(b);
        if (d) {
          if (-1 != Pa(d, c))
            return;
        } else
          m[a] = d = [], h++, e(!1, a), g.$setValidity(a, !1, f);
        d.push(c);
        f.$valid = !1;
        f.$invalid = !0;
      }
    };
    f.$setDirty = function () {
      d.removeClass(b, Na);
      d.addClass(b, yb);
      f.$dirty = !0;
      f.$pristine = !1;
      g.$setDirty();
    };
    f.$setPristine = function () {
      d.removeClass(b, yb);
      d.addClass(b, Na);
      f.$dirty = !1;
      f.$pristine = !0;
      q(l, function (a) {
        a.$setPristine();
      });
    };
  }
  function Ub(b, a, c, d) {
    b.$setValidity(a, c);
    return c ? d : r;
  }
  function bd(b, a) {
    var c, d;
    if (a)
      for (c = 0; c < a.length; ++c)
        if (d = a[c], b[d])
          return !0;
    return !1;
  }
  function kf(b, a, c, d, e) {
    S(e) && (b.$$hasNativeValidators = !0, b.$parsers.push(function (f) {
      if (b.$error[a] || bd(e, d) || !bd(e, c))
        return f;
      b.$setValidity(a, !1);
    }));
  }
  function ab(b, a, c, d, e, f) {
    var g = a.prop(lf), h = a[0].placeholder, m = {};
    d.$$validityState = g;
    if (!e.android) {
      var l = !1;
      a.on('compositionstart', function (a) {
        l = !0;
      });
      a.on('compositionend', function () {
        l = !1;
        n();
      });
    }
    var n = function (e) {
      if (!l) {
        var f = a.val(), k = e && e.type;
        if (W && 'input' === (e || m).type && a[0].placeholder !== h)
          h = a[0].placeholder;
        else {
          c.ngTrim && 'false' === c.ngTrim || (f = aa(f));
          var p = g && d.$$hasNativeValidators;
          if (d.$viewValue !== f || '' === f && p)
            b.$$phase ? d.$setViewValue(f, k, p) : b.$apply(function () {
              d.$setViewValue(f, k, p);
            });
        }
      }
    };
    if (e.hasEvent('input'))
      a.on('input', n);
    else {
      var p, k = function (a) {
          p || (p = f.defer(function () {
            n(a);
            p = null;
          }));
        };
      a.on('keydown', function (a) {
        var b = a.keyCode;
        91 === b || (15 < b && 19 > b || 37 <= b && 40 >= b) || k(a);
      });
      if (e.hasEvent('paste'))
        a.on('paste cut', k);
    }
    a.on('change', n);
    d.$render = function () {
      a.val(d.$isEmpty(d.$viewValue) ? '' : d.$viewValue);
    };
  }
  function zb(b, a) {
    return function (c) {
      var d;
      return ra(c) ? c : x(c) && (b.lastIndex = 0, c = b.exec(c)) ? (c.shift(), d = {
        yyyy: 0,
        MM: 1,
        dd: 1,
        HH: 0,
        mm: 0
      }, q(c, function (b, c) {
        c < a.length && (d[a[c]] = +b);
      }), new Date(d.yyyy, d.MM - 1, d.dd, d.HH, d.mm)) : NaN;
    };
  }
  function bb(b, a, c, d) {
    return function (e, f, g, h, m, l, n) {
      ab(e, f, g, h, m, l);
      h.$parsers.push(function (d) {
        if (h.$isEmpty(d))
          return h.$setValidity(b, !0), null;
        if (a.test(d))
          return h.$setValidity(b, !0), c(d);
        h.$setValidity(b, !1);
        return r;
      });
      h.$formatters.push(function (a) {
        return ra(a) ? n('date')(a, d) : '';
      });
      g.min && (e = function (a) {
        var b = h.$isEmpty(a) || c(a) >= c(g.min);
        h.$setValidity('min', b);
        return b ? a : r;
      }, h.$parsers.push(e), h.$formatters.push(e));
      g.max && (e = function (a) {
        var b = h.$isEmpty(a) || c(a) <= c(g.max);
        h.$setValidity('max', b);
        return b ? a : r;
      }, h.$parsers.push(e), h.$formatters.push(e));
    };
  }
  function cd(b, a, c, d, e) {
    if (F(d)) {
      b = b(d);
      if (!b.constant)
        throw new K('ngModel')('constexpr', 'Expected constant expression for `{0}`, but saw `{1}`.', c, d);
      return b(a);
    }
    return e;
  }
  function Vb(b, a) {
    b = 'ngClass' + b;
    return [
      '$animate',
      function (c) {
        function d(a, b) {
          var c = [], d = 0;
          a:
            for (; d < a.length; d++) {
              for (var e = a[d], n = 0; n < b.length; n++)
                if (e == b[n])
                  continue a;
              c.push(e);
            }
          return c;
        }
        function e(a) {
          if (!L(a)) {
            if (x(a))
              return a.split(' ');
            if (S(a)) {
              var b = [];
              q(a, function (a, c) {
                a && (b = b.concat(c.split(' ')));
              });
              return b;
            }
          }
          return a;
        }
        return {
          restrict: 'AC',
          link: function (f, g, h) {
            function m(a, b) {
              var c = g.data('$classCounts') || {}, d = [];
              q(a, function (a) {
                if (0 < b || c[a])
                  c[a] = (c[a] || 0) + b, c[a] === +(0 < b) && d.push(a);
              });
              g.data('$classCounts', c);
              return d.join(' ');
            }
            function l(b) {
              if (!0 === a || f.$index % 2 === a) {
                var k = e(b || []);
                if (!n) {
                  var l = m(k, 1);
                  h.$addClass(l);
                } else if (!sa(b, n)) {
                  var q = e(n), l = d(k, q), k = d(q, k), k = m(k, -1), l = m(l, 1);
                  0 === l.length ? c.removeClass(g, k) : 0 === k.length ? c.addClass(g, l) : c.setClass(g, l, k);
                }
              }
              n = ka(b);
            }
            var n;
            f.$watch(h[b], l, !0);
            h.$observe('class', function (a) {
              l(f.$eval(h[b]));
            });
            'ngClass' !== b && f.$watch('$index', function (c, d) {
              var g = c & 1;
              if (g !== (d & 1)) {
                var l = e(f.$eval(h[b]));
                g === a ? (g = m(l, 1), h.$addClass(g)) : (g = m(l, -1), h.$removeClass(g));
              }
            });
          }
        };
      }
    ];
  }
  var mf = /^\/(.+)\/([a-z]*)$/, lf = 'validity', G = function (b) {
      return x(b) ? b.toLowerCase() : b;
    }, Bb = Object.prototype.hasOwnProperty, ib = function (b) {
      return x(b) ? b.toUpperCase() : b;
    }, W, C, ua, la = [].slice, tc = [].push, za = Object.prototype.toString, Qa = K('ng'), Ra = N.angular || (N.angular = {}), Ta, na, eb = 0;
  W = Y((/msie (\d+)/.exec(G(navigator.userAgent)) || [])[1]);
  isNaN(W) && (W = Y((/trident\/.*; rv:(\d+)/.exec(G(navigator.userAgent)) || [])[1]));
  B.$inject = [];
  Ea.$inject = [];
  var L = function () {
      return M(Array.isArray) ? Array.isArray : function (b) {
        return '[object Array]' === za.call(b);
      };
    }(), aa = function () {
      return String.prototype.trim ? function (b) {
        return x(b) ? b.trim() : b;
      } : function (b) {
        return x(b) ? b.replace(/^\s\s*/, '').replace(/\s\s*$/, '') : b;
      };
    }();
  na = 9 > W ? function (b) {
    b = b.nodeName ? b : b[0];
    return G(b.scopeName && 'HTML' != b.scopeName ? b.scopeName + ':' + b.nodeName : b.nodeName);
  } : function (b) {
    return G(b.nodeName ? b.nodeName : b[0].nodeName);
  };
  var ec = [
      'ng-',
      'data-ng-',
      'ng:',
      'x-ng-'
    ], rd = /[A-Z]/g, vd = {
      full: '1.3.0-build.2909+sha.2e84cf9',
      major: 1,
      minor: 3,
      dot: 0,
      codeName: 'snapshot'
    };
  Q.expando = 'ng339';
  var Wa = Q.cache = {}, Le = 1, qb = N.document.addEventListener ? function (b, a, c) {
      b.addEventListener(a, c, !1);
    } : function (b, a, c) {
      b.attachEvent('on' + a, c);
    }, Va = N.document.removeEventListener ? function (b, a, c) {
      b.removeEventListener(a, c, !1);
    } : function (b, a, c) {
      b.detachEvent('on' + a, c);
    };
  Q._data = function (b) {
    return this.cache[b[this.expando]] || {};
  };
  var Fe = /([\:\-\_]+(.))/g, Ge = /^moz([A-Z])/, Hb = K('jqLite'), Ke = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, Gb = /<|&#?\w+;/, Ie = /<([\w:]+)/, Je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, fa = {
      option: [
        1,
        '<select multiple="multiple">',
        '</select>'
      ],
      thead: [
        1,
        '<table>',
        '</table>'
      ],
      col: [
        2,
        '<table><colgroup>',
        '</colgroup></table>'
      ],
      tr: [
        2,
        '<table><tbody>',
        '</tbody></table>'
      ],
      td: [
        3,
        '<table><tbody><tr>',
        '</tr></tbody></table>'
      ],
      _default: [
        0,
        '',
        ''
      ]
    };
  fa.optgroup = fa.option;
  fa.tbody = fa.tfoot = fa.colgroup = fa.caption = fa.thead;
  fa.th = fa.td;
  var Ha = Q.prototype = {
      ready: function (b) {
        function a() {
          c || (c = !0, b());
        }
        var c = !1;
        'complete' === U.readyState ? setTimeout(a) : (this.on('DOMContentLoaded', a), Q(N).on('load', a));
      },
      toString: function () {
        var b = [];
        q(this, function (a) {
          b.push('' + a);
        });
        return '[' + b.join(', ') + ']';
      },
      eq: function (b) {
        return 0 <= b ? C(this[b]) : C(this[this.length + b]);
      },
      length: 0,
      push: tc,
      sort: [].sort,
      splice: [].splice
    }, nb = {};
  q('multiple selected checked disabled readOnly required open'.split(' '), function (b) {
    nb[G(b)] = b;
  });
  var xc = {};
  q('input select option textarea button form details'.split(' '), function (b) {
    xc[b] = !0;
  });
  var yc = {
      ngMinlength: 'minlength',
      ngMaxlength: 'maxlength',
      ngPattern: 'pattern'
    };
  q({
    data: sc,
    inheritedData: mb,
    scope: function (b) {
      return C(b).data('$scope') || mb(b.parentNode || b, [
        '$isolateScope',
        '$scope'
      ]);
    },
    isolateScope: function (b) {
      return C(b).data('$isolateScope') || C(b).data('$isolateScopeNoTemplate');
    },
    controller: uc,
    injector: function (b) {
      return mb(b, '$injector');
    },
    removeAttr: function (b, a) {
      b.removeAttribute(a);
    },
    hasClass: Jb,
    css: function (b, a, c) {
      a = Ua(a);
      if (F(c))
        b.style[a] = c;
      else {
        var d;
        8 >= W && (d = b.currentStyle && b.currentStyle[a], '' === d && (d = 'auto'));
        d = d || b.style[a];
        8 >= W && (d = '' === d ? r : d);
        return d;
      }
    },
    attr: function (b, a, c) {
      var d = G(a);
      if (nb[d])
        if (F(c))
          c ? (b[a] = !0, b.setAttribute(a, d)) : (b[a] = !1, b.removeAttribute(d));
        else
          return b[a] || (b.attributes.getNamedItem(a) || B).specified ? d : r;
      else if (F(c))
        b.setAttribute(a, c);
      else if (b.getAttribute)
        return b = b.getAttribute(a, 2), null === b ? r : b;
    },
    prop: function (b, a, c) {
      if (F(c))
        b[a] = c;
      else
        return b[a];
    },
    text: function () {
      function b(a, b) {
        if (y(b)) {
          var d = a.nodeType;
          return 1 === d || 3 === d ? a.textContent : '';
        }
        a.textContent = b;
      }
      b.$dv = '';
      return b;
    }(),
    val: function (b, a) {
      if (y(a)) {
        if (b.multiple && 'select' === na(b)) {
          var c = [];
          q(b.options, function (a) {
            a.selected && c.push(a.value || a.text);
          });
          return 0 === c.length ? null : c;
        }
        return b.value;
      }
      b.value = a;
    },
    html: function (b, a) {
      if (y(a))
        return b.innerHTML;
      for (var c = 0, d = b.childNodes; c < d.length; c++)
        Ia(d[c]);
      b.innerHTML = a;
    },
    empty: vc
  }, function (b, a) {
    Q.prototype[a] = function (a, d) {
      var e, f, g = this.length;
      if (b !== vc && (2 == b.length && b !== Jb && b !== uc ? a : d) === r) {
        if (S(a)) {
          for (e = 0; e < g; e++)
            if (b === sc)
              b(this[e], a);
            else
              for (f in a)
                b(this[e], f, a[f]);
          return this;
        }
        e = b.$dv;
        g = e === r ? Math.min(g, 1) : g;
        for (f = 0; f < g; f++) {
          var h = b(this[f], a, d);
          e = e ? e + h : h;
        }
        return e;
      }
      for (e = 0; e < g; e++)
        b(this[e], a, d);
      return this;
    };
  });
  q({
    removeData: qc,
    dealoc: Ia,
    on: function a(c, d, e, f) {
      if (F(f))
        throw Hb('onargs');
      if (!c.nodeType || 1 === c.nodeType || 9 === c.nodeType) {
        var g = ma(c, 'events'), h = ma(c, 'handle');
        g || ma(c, 'events', g = {});
        h || ma(c, 'handle', h = Ne(c, g));
        q(d.split(' '), function (d) {
          var f = g[d];
          if (!f) {
            if ('mouseenter' == d || 'mouseleave' == d) {
              var n = U.body.contains || U.body.compareDocumentPosition ? function (a, c) {
                  var d = 9 === a.nodeType ? a.documentElement : a, e = c && c.parentNode;
                  return a === e || !!(e && 1 === e.nodeType && (d.contains ? d.contains(e) : a.compareDocumentPosition && a.compareDocumentPosition(e) & 16));
                } : function (a, c) {
                  if (c)
                    for (; c = c.parentNode;)
                      if (c === a)
                        return !0;
                  return !1;
                };
              g[d] = [];
              a(c, {
                mouseleave: 'mouseout',
                mouseenter: 'mouseover'
              }[d], function (a) {
                var c = a.relatedTarget;
                c && (c === this || n(this, c)) || h(a, d);
              });
            } else
              qb(c, d, h), g[d] = [];
            f = g[d];
          }
          f.push(e);
        });
      }
    },
    off: rc,
    one: function (a, c, d) {
      a = C(a);
      a.on(c, function f() {
        a.off(c, d);
        a.off(c, f);
      });
      a.on(c, d);
    },
    replaceWith: function (a, c) {
      var d, e = a.parentNode;
      Ia(a);
      q(new Q(c), function (c) {
        d ? e.insertBefore(c, d.nextSibling) : e.replaceChild(c, a);
        d = c;
      });
    },
    children: function (a) {
      var c = [];
      q(a.childNodes, function (a) {
        1 === a.nodeType && c.push(a);
      });
      return c;
    },
    contents: function (a) {
      return a.contentDocument || a.childNodes || [];
    },
    append: function (a, c) {
      q(new Q(c), function (c) {
        1 !== a.nodeType && 11 !== a.nodeType || a.appendChild(c);
      });
    },
    prepend: function (a, c) {
      if (1 === a.nodeType) {
        var d = a.firstChild;
        q(new Q(c), function (c) {
          a.insertBefore(c, d);
        });
      }
    },
    wrap: function (a, c) {
      c = C(c)[0];
      var d = a.parentNode;
      d && d.replaceChild(c, a);
      c.appendChild(a);
    },
    remove: function (a) {
      Ia(a);
      var c = a.parentNode;
      c && c.removeChild(a);
    },
    after: function (a, c) {
      var d = a, e = a.parentNode;
      q(new Q(c), function (a) {
        e.insertBefore(a, d.nextSibling);
        d = a;
      });
    },
    addClass: lb,
    removeClass: kb,
    toggleClass: function (a, c, d) {
      c && q(c.split(' '), function (c) {
        var f = d;
        y(f) && (f = !Jb(a, c));
        (f ? lb : kb)(a, c);
      });
    },
    parent: function (a) {
      return (a = a.parentNode) && 11 !== a.nodeType ? a : null;
    },
    next: function (a) {
      if (a.nextElementSibling)
        return a.nextElementSibling;
      for (a = a.nextSibling; null != a && 1 !== a.nodeType;)
        a = a.nextSibling;
      return a;
    },
    find: function (a, c) {
      return a.getElementsByTagName ? a.getElementsByTagName(c) : [];
    },
    clone: Ib,
    triggerHandler: function (a, c, d) {
      c = (ma(a, 'events') || {})[c];
      d = d || [];
      var e = [{
            preventDefault: function () {
              this.defaultPrevented = !0;
            },
            isDefaultPrevented: function () {
              return !0 === this.defaultPrevented;
            },
            stopPropagation: B
          }];
      q(c, function (c) {
        c.apply(a, e.concat(d));
      });
    }
  }, function (a, c) {
    Q.prototype[c] = function (c, e, f) {
      for (var g, h = 0; h < this.length; h++)
        y(g) ? (g = a(this[h], c, e, f), F(g) && (g = C(g))) : pc(g, a(this[h], c, e, f));
      return F(g) ? g : this;
    };
    Q.prototype.bind = Q.prototype.on;
    Q.prototype.unbind = Q.prototype.off;
  });
  Xa.prototype = {
    put: function (a, c) {
      this[Ja(a, this.nextUid)] = c;
    },
    get: function (a) {
      return this[Ja(a, this.nextUid)];
    },
    remove: function (a) {
      var c = this[a = Ja(a, this.nextUid)];
      delete this[a];
      return c;
    }
  };
  var Ac = /^function\s*[^\(]*\(\s*([^\)]*)\)/m, Pe = /,/, Qe = /^\s*(_?)(\S+?)\1\s*$/, zc = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm, Ka = K('$injector');
  Db.$$annotate = Kb;
  var nf = K('$animate'), he = [
      '$provide',
      function (a) {
        this.$$selectors = {};
        this.register = function (c, d) {
          var e = c + '-animation';
          if (c && '.' != c.charAt(0))
            throw nf('notcsel', c);
          this.$$selectors[c.substr(1)] = e;
          a.factory(e, d);
        };
        this.classNameFilter = function (a) {
          1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null);
          return this.$$classNameFilter;
        };
        this.$get = [
          '$timeout',
          '$$asyncCallback',
          function (a, d) {
            return {
              enter: function (a, c, g, h) {
                g ? g.after(a) : c.prepend(a);
                h && d(h);
                return B;
              },
              leave: function (a, c) {
                a.remove();
                c && d(c);
                return B;
              },
              move: function (a, c, d, h) {
                return this.enter(a, c, d, h);
              },
              addClass: function (a, c, g) {
                c = x(c) ? c : L(c) ? c.join(' ') : '';
                q(a, function (a) {
                  lb(a, c);
                });
                g && d(g);
                return B;
              },
              removeClass: function (a, c, g) {
                c = x(c) ? c : L(c) ? c.join(' ') : '';
                q(a, function (a) {
                  kb(a, c);
                });
                g && d(g);
                return B;
              },
              setClass: function (a, c, g, h) {
                q(a, function (a) {
                  lb(a, c);
                  kb(a, g);
                });
                h && d(h);
                return B;
              },
              enabled: B
            };
          }
        ];
      }
    ], ia = K('$compile');
  hc.$inject = [
    '$provide',
    '$$sanitizeUriProvider'
  ];
  var Ve = /^(x[\:\-_]|data[\:\-_])/i, Jc = K('$interpolate'), of = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/, Ye = {
      http: 80,
      https: 443,
      ftp: 21
    }, Pb = K('$location');
  Rb.prototype = Qb.prototype = Mc.prototype = {
    $$html5: !1,
    $$replace: !1,
    absUrl: rb('$$absUrl'),
    url: function (a, c) {
      if (y(a))
        return this.$$url;
      var d = of.exec(a);
      d[1] && this.path(decodeURIComponent(d[1]));
      (d[2] || d[1]) && this.search(d[3] || '');
      this.hash(d[5] || '', c);
      return this;
    },
    protocol: rb('$$protocol'),
    host: rb('$$host'),
    port: rb('$$port'),
    path: Nc('$$path', function (a) {
      return '/' == a.charAt(0) ? a : '/' + a;
    }),
    search: function (a, c) {
      switch (arguments.length) {
      case 0:
        return this.$$search;
      case 1:
        if (x(a))
          this.$$search = dc(a);
        else if (S(a))
          q(a, function (c, e) {
            null == c && delete a[e];
          }), this.$$search = a;
        else
          throw Pb('isrcharg');
        break;
      default:
        y(c) || null === c ? delete this.$$search[a] : this.$$search[a] = c;
      }
      this.$$compose();
      return this;
    },
    hash: Nc('$$hash', Ea),
    replace: function () {
      this.$$replace = !0;
      return this;
    }
  };
  var ja = K('$parse'), pf = Function.prototype.call, qf = Function.prototype.apply, rf = Function.prototype.bind, cb = {
      'null': function () {
        return null;
      },
      'true': function () {
        return !0;
      },
      'false': function () {
        return !1;
      },
      undefined: B,
      '+': function (a, c, d, e) {
        d = d(a, c);
        e = e(a, c);
        return F(d) ? F(e) ? d + e : d : F(e) ? e : r;
      },
      '-': function (a, c, d, e) {
        d = d(a, c);
        e = e(a, c);
        return (F(d) ? d : 0) - (F(e) ? e : 0);
      },
      '*': function (a, c, d, e) {
        return d(a, c) * e(a, c);
      },
      '/': function (a, c, d, e) {
        return d(a, c) / e(a, c);
      },
      '%': function (a, c, d, e) {
        return d(a, c) % e(a, c);
      },
      '^': function (a, c, d, e) {
        return d(a, c) ^ e(a, c);
      },
      '=': B,
      '===': function (a, c, d, e) {
        return d(a, c) === e(a, c);
      },
      '!==': function (a, c, d, e) {
        return d(a, c) !== e(a, c);
      },
      '==': function (a, c, d, e) {
        return d(a, c) == e(a, c);
      },
      '!=': function (a, c, d, e) {
        return d(a, c) != e(a, c);
      },
      '<': function (a, c, d, e) {
        return d(a, c) < e(a, c);
      },
      '>': function (a, c, d, e) {
        return d(a, c) > e(a, c);
      },
      '<=': function (a, c, d, e) {
        return d(a, c) <= e(a, c);
      },
      '>=': function (a, c, d, e) {
        return d(a, c) >= e(a, c);
      },
      '&&': function (a, c, d, e) {
        return d(a, c) && e(a, c);
      },
      '||': function (a, c, d, e) {
        return d(a, c) || e(a, c);
      },
      '&': function (a, c, d, e) {
        return d(a, c) & e(a, c);
      },
      '|': function (a, c, d, e) {
        return e(a, c)(a, c, d(a, c));
      },
      '!': function (a, c, d) {
        return !d(a, c);
      }
    }, sf = {
      n: '\n',
      f: '\f',
      r: '\r',
      t: '\t',
      v: '\x0B',
      '\'': '\'',
      '"': '"'
    }, Tb = function (a) {
      this.options = a;
    };
  Tb.prototype = {
    constructor: Tb,
    lex: function (a) {
      this.text = a;
      this.index = 0;
      this.ch = r;
      for (this.tokens = []; this.index < this.text.length;)
        if (this.ch = this.text.charAt(this.index), this.is('"\''))
          this.readString(this.ch);
        else if (this.isNumber(this.ch) || this.is('.') && this.isNumber(this.peek()))
          this.readNumber();
        else if (this.isIdent(this.ch))
          this.readIdent();
        else if (this.is('(){}[].,;:?'))
          this.tokens.push({
            index: this.index,
            text: this.ch
          }), this.index++;
        else if (this.isWhitespace(this.ch))
          this.index++;
        else {
          a = this.ch + this.peek();
          var c = a + this.peek(2), d = cb[this.ch], e = cb[a], f = cb[c];
          f ? (this.tokens.push({
            index: this.index,
            text: c,
            fn: f
          }), this.index += 3) : e ? (this.tokens.push({
            index: this.index,
            text: a,
            fn: e
          }), this.index += 2) : d ? (this.tokens.push({
            index: this.index,
            text: this.ch,
            fn: d
          }), this.index += 1) : this.throwError('Unexpected next character ', this.index, this.index + 1);
        }
      return this.tokens;
    },
    is: function (a) {
      return -1 !== a.indexOf(this.ch);
    },
    peek: function (a) {
      a = a || 1;
      return this.index + a < this.text.length ? this.text.charAt(this.index + a) : !1;
    },
    isNumber: function (a) {
      return '0' <= a && '9' >= a;
    },
    isWhitespace: function (a) {
      return ' ' === a || '\r' === a || '\t' === a || '\n' === a || '\x0B' === a || '\xa0' === a;
    },
    isIdent: function (a) {
      return 'a' <= a && 'z' >= a || 'A' <= a && 'Z' >= a || '_' === a || '$' === a;
    },
    isExpOperator: function (a) {
      return '-' === a || '+' === a || this.isNumber(a);
    },
    throwError: function (a, c, d) {
      d = d || this.index;
      c = F(c) ? 's ' + c + '-' + this.index + ' [' + this.text.substring(c, d) + ']' : ' ' + d;
      throw ja('lexerr', a, c, this.text);
    },
    readNumber: function () {
      for (var a = '', c = this.index; this.index < this.text.length;) {
        var d = G(this.text.charAt(this.index));
        if ('.' == d || this.isNumber(d))
          a += d;
        else {
          var e = this.peek();
          if ('e' == d && this.isExpOperator(e))
            a += d;
          else if (this.isExpOperator(d) && e && this.isNumber(e) && 'e' == a.charAt(a.length - 1))
            a += d;
          else if (!this.isExpOperator(d) || e && this.isNumber(e) || 'e' != a.charAt(a.length - 1))
            break;
          else
            this.throwError('Invalid exponent');
        }
        this.index++;
      }
      a *= 1;
      this.tokens.push({
        index: c,
        text: a,
        constant: !0,
        fn: function () {
          return a;
        }
      });
    },
    readIdent: function () {
      for (var a = this, c = '', d = this.index, e, f, g, h; this.index < this.text.length;) {
        h = this.text.charAt(this.index);
        if ('.' === h || this.isIdent(h) || this.isNumber(h))
          '.' === h && (e = this.index), c += h;
        else
          break;
        this.index++;
      }
      if (e)
        for (f = this.index; f < this.text.length;) {
          h = this.text.charAt(f);
          if ('(' === h) {
            g = c.substr(e - d + 1);
            c = c.substr(0, e - d);
            this.index = f;
            break;
          }
          if (this.isWhitespace(h))
            f++;
          else
            break;
        }
      d = {
        index: d,
        text: c
      };
      if (cb.hasOwnProperty(c))
        d.fn = cb[c], d.constant = !0;
      else {
        var m = Pc(c, this.options, this.text);
        d.fn = A(function (a, c) {
          return m(a, c);
        }, {
          assign: function (d, e) {
            return sb(d, c, e, a.text);
          }
        });
      }
      this.tokens.push(d);
      g && (this.tokens.push({
        index: e,
        text: '.'
      }), this.tokens.push({
        index: e + 1,
        text: g
      }));
    },
    readString: function (a) {
      var c = this.index;
      this.index++;
      for (var d = '', e = a, f = !1; this.index < this.text.length;) {
        var g = this.text.charAt(this.index), e = e + g;
        if (f)
          'u' === g ? (g = this.text.substring(this.index + 1, this.index + 5), g.match(/[\da-f]{4}/i) || this.throwError('Invalid unicode escape [\\u' + g + ']'), this.index += 4, d += String.fromCharCode(parseInt(g, 16))) : d = (f = sf[g]) ? d + f : d + g, f = !1;
        else if ('\\' === g)
          f = !0;
        else {
          if (g === a) {
            this.index++;
            this.tokens.push({
              index: c,
              text: e,
              string: d,
              constant: !0,
              fn: function () {
                return d;
              }
            });
            return;
          }
          d += g;
        }
        this.index++;
      }
      this.throwError('Unterminated quote', c);
    }
  };
  var $a = function (a, c, d) {
    this.lexer = a;
    this.$filter = c;
    this.options = d;
  };
  $a.ZERO = A(function () {
    return 0;
  }, { constant: !0 });
  $a.prototype = {
    constructor: $a,
    parse: function (a) {
      this.text = a;
      this.tokens = this.lexer.lex(a);
      a = this.statements();
      0 !== this.tokens.length && this.throwError('is an unexpected token', this.tokens[0]);
      a.literal = !!a.literal;
      a.constant = !!a.constant;
      return a;
    },
    primary: function () {
      var a;
      if (this.expect('('))
        a = this.filterChain(), this.consume(')');
      else if (this.expect('['))
        a = this.arrayDeclaration();
      else if (this.expect('{'))
        a = this.object();
      else {
        var c = this.expect();
        (a = c.fn) || this.throwError('not a primary expression', c);
        c.constant && (a.constant = !0, a.literal = !0);
      }
      for (var d; c = this.expect('(', '[', '.');)
        '(' === c.text ? (a = this.functionCall(a, d), d = null) : '[' === c.text ? (d = a, a = this.objectIndex(a)) : '.' === c.text ? (d = a, a = this.fieldAccess(a)) : this.throwError('IMPOSSIBLE');
      return a;
    },
    throwError: function (a, c) {
      throw ja('syntax', c.text, a, c.index + 1, this.text, this.text.substring(c.index));
    },
    peekToken: function () {
      if (0 === this.tokens.length)
        throw ja('ueoe', this.text);
      return this.tokens[0];
    },
    peek: function (a, c, d, e) {
      if (0 < this.tokens.length) {
        var f = this.tokens[0], g = f.text;
        if (g === a || g === c || g === d || g === e || !(a || c || d || e))
          return f;
      }
      return !1;
    },
    expect: function (a, c, d, e) {
      return (a = this.peek(a, c, d, e)) ? (this.tokens.shift(), a) : !1;
    },
    consume: function (a) {
      this.expect(a) || this.throwError('is unexpected, expecting [' + a + ']', this.peek());
    },
    unaryFn: function (a, c) {
      return A(function (d, e) {
        return a(d, e, c);
      }, { constant: c.constant });
    },
    ternaryFn: function (a, c, d) {
      return A(function (e, f) {
        return a(e, f) ? c(e, f) : d(e, f);
      }, { constant: a.constant && c.constant && d.constant });
    },
    binaryFn: function (a, c, d) {
      return A(function (e, f) {
        return c(e, f, a, d);
      }, { constant: a.constant && d.constant });
    },
    statements: function () {
      for (var a = [];;)
        if (0 < this.tokens.length && !this.peek('}', ')', ';', ']') && a.push(this.filterChain()), !this.expect(';'))
          return 1 === a.length ? a[0] : function (c, d) {
            for (var e, f = 0; f < a.length; f++) {
              var g = a[f];
              g && (e = g(c, d));
            }
            return e;
          };
    },
    filterChain: function () {
      for (var a = this.expression(), c;;)
        if (c = this.expect('|'))
          a = this.binaryFn(a, c.fn, this.filter());
        else
          return a;
    },
    filter: function () {
      for (var a = this.expect(), c = this.$filter(a.text), d = []; this.expect(':');)
        d.push(this.expression());
      return da(function (a, f, g) {
        g = [g];
        for (var h = 0; h < d.length; h++)
          g.push(d[h](a, f));
        return c.apply(a, g);
      });
    },
    expression: function () {
      return this.assignment();
    },
    assignment: function () {
      var a = this.ternary(), c, d;
      return (d = this.expect('=')) ? (a.assign || this.throwError('implies assignment but [' + this.text.substring(0, d.index) + '] can not be assigned to', d), c = this.ternary(), function (d, f) {
        return a.assign(d, c(d, f), f);
      }) : a;
    },
    ternary: function () {
      var a = this.logicalOR(), c, d;
      if (this.expect('?')) {
        c = this.ternary();
        if (d = this.expect(':'))
          return this.ternaryFn(a, c, this.ternary());
        this.throwError('expected :', d);
      } else
        return a;
    },
    logicalOR: function () {
      for (var a = this.logicalAND(), c;;)
        if (c = this.expect('||'))
          a = this.binaryFn(a, c.fn, this.logicalAND());
        else
          return a;
    },
    logicalAND: function () {
      var a = this.equality(), c;
      if (c = this.expect('&&'))
        a = this.binaryFn(a, c.fn, this.logicalAND());
      return a;
    },
    equality: function () {
      var a = this.relational(), c;
      if (c = this.expect('==', '!=', '===', '!=='))
        a = this.binaryFn(a, c.fn, this.equality());
      return a;
    },
    relational: function () {
      var a = this.additive(), c;
      if (c = this.expect('<', '>', '<=', '>='))
        a = this.binaryFn(a, c.fn, this.relational());
      return a;
    },
    additive: function () {
      for (var a = this.multiplicative(), c; c = this.expect('+', '-');)
        a = this.binaryFn(a, c.fn, this.multiplicative());
      return a;
    },
    multiplicative: function () {
      for (var a = this.unary(), c; c = this.expect('*', '/', '%');)
        a = this.binaryFn(a, c.fn, this.unary());
      return a;
    },
    unary: function () {
      var a;
      return this.expect('+') ? this.primary() : (a = this.expect('-')) ? this.binaryFn($a.ZERO, a.fn, this.unary()) : (a = this.expect('!')) ? this.unaryFn(a.fn, this.unary()) : this.primary();
    },
    fieldAccess: function (a) {
      var c = this, d = this.expect().text, e = Pc(d, this.options, this.text);
      return A(function (c, d, h) {
        return e(h || a(c, d));
      }, {
        assign: function (e, g, h) {
          return sb(a(e, h), d, g, c.text);
        }
      });
    },
    objectIndex: function (a) {
      var c = this, d = this.expression();
      this.consume(']');
      return A(function (e, f) {
        var g = a(e, f), h = d(e, f);
        ea(h, c.text);
        return g ? Ma(g[h], c.text) : r;
      }, {
        assign: function (e, f, g) {
          var h = d(e, g);
          return Ma(a(e, g), c.text)[h] = f;
        }
      });
    },
    functionCall: function (a, c) {
      var d = [];
      if (')' !== this.peekToken().text) {
        do
          d.push(this.expression());
        while (this.expect(','));
      }
      this.consume(')');
      var e = this;
      return function (f, g) {
        for (var h = [], m = c ? c(f, g) : f, l = 0; l < d.length; l++)
          h.push(d[l](f, g));
        l = a(f, g, m) || B;
        Ma(m, e.text);
        var n = e.text;
        if (l) {
          if (l.constructor === l)
            throw ja('isecfn', n);
          if (l === pf || l === qf || l === rf)
            throw ja('isecff', n);
        }
        h = l.apply ? l.apply(m, h) : l(h[0], h[1], h[2], h[3], h[4]);
        return Ma(h, e.text);
      };
    },
    arrayDeclaration: function () {
      var a = [], c = !0;
      if (']' !== this.peekToken().text) {
        do {
          if (this.peek(']'))
            break;
          var d = this.expression();
          a.push(d);
          d.constant || (c = !1);
        } while (this.expect(','));
      }
      this.consume(']');
      return A(function (c, d) {
        for (var g = [], h = 0; h < a.length; h++)
          g.push(a[h](c, d));
        return g;
      }, {
        literal: !0,
        constant: c
      });
    },
    object: function () {
      var a = [], c = !0;
      if ('}' !== this.peekToken().text) {
        do {
          if (this.peek('}'))
            break;
          var d = this.expect(), d = d.string || d.text;
          this.consume(':');
          var e = this.expression();
          a.push({
            key: d,
            value: e
          });
          e.constant || (c = !1);
        } while (this.expect(','));
      }
      this.consume('}');
      return A(function (c, d) {
        for (var e = {}, m = 0; m < a.length; m++) {
          var l = a[m];
          e[l.key] = l.value(c, d);
        }
        return e;
      }, {
        literal: !0,
        constant: c
      });
    }
  };
  var Sb = {}, xa = K('$sce'), ga = {
      HTML: 'html',
      CSS: 'css',
      URL: 'url',
      RESOURCE_URL: 'resourceUrl',
      JS: 'js'
    }, ba = U.createElement('a'), Sc = wa(N.location.href, !0);
  oc.$inject = ['$provide'];
  Tc.$inject = ['$locale'];
  Vc.$inject = ['$locale'];
  var Yc = '.', jf = {
      yyyy: ca('FullYear', 4),
      yy: ca('FullYear', 2, 0, !0),
      y: ca('FullYear', 1),
      MMMM: ub('Month'),
      MMM: ub('Month', !0),
      MM: ca('Month', 2, 1),
      M: ca('Month', 1, 1),
      dd: ca('Date', 2),
      d: ca('Date', 1),
      HH: ca('Hours', 2),
      H: ca('Hours', 1),
      hh: ca('Hours', 2, -12),
      h: ca('Hours', 1, -12),
      mm: ca('Minutes', 2),
      m: ca('Minutes', 1),
      ss: ca('Seconds', 2),
      s: ca('Seconds', 1),
      sss: ca('Milliseconds', 3),
      EEEE: ub('Day'),
      EEE: ub('Day', !0),
      a: function (a, c) {
        return 12 > a.getHours() ? c.AMPMS[0] : c.AMPMS[1];
      },
      Z: function (a) {
        a = -1 * a.getTimezoneOffset();
        return a = (0 <= a ? '+' : '') + (tb(Math[0 < a ? 'floor' : 'ceil'](a / 60), 2) + tb(Math.abs(a % 60), 2));
      },
      ww: $c(2),
      w: $c(1)
    }, hf = /((?:[^yMdHhmsaZEw']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|w+))(.*)/, gf = /^\-?\d+$/;
  Uc.$inject = ['$locale'];
  var ef = da(G), ff = da(ib);
  Wc.$inject = ['$parse'];
  var yd = da({
      restrict: 'E',
      compile: function (a, c) {
        8 >= W && (c.href || c.name || c.$set('href', ''), a.append(U.createComment('IE fix')));
        if (!c.href && !c.xlinkHref && !c.name)
          return function (a, c) {
            var f = '[object SVGAnimatedString]' === za.call(c.prop('href')) ? 'xlink:href' : 'href';
            c.on('click', function (a) {
              c.attr(f) || a.preventDefault();
            });
          };
      }
    }), jb = {};
  q(nb, function (a, c) {
    if ('multiple' != a) {
      var d = pa('ng-' + c);
      jb[d] = function () {
        return {
          priority: 100,
          link: function (a, f, g) {
            a.$watch(g[d], function (a) {
              g.$set(c, !!a);
            });
          }
        };
      };
    }
  });
  q(yc, function (a, c) {
    jb[c] = function () {
      return {
        priority: 100,
        link: function (a, e, f) {
          if ('ngPattern' === c && '/' == f.ngPattern.charAt(0) && (e = f.ngPattern.match(mf))) {
            f.$set('ngPattern', RegExp(e[1], e[2]));
            return;
          }
          a.$watch(f[c], function (a) {
            f.$set(c, a);
          });
        }
      };
    };
  });
  q([
    'src',
    'srcset',
    'href'
  ], function (a) {
    var c = pa('ng-' + a);
    jb[c] = function () {
      return {
        priority: 99,
        link: function (d, e, f) {
          var g = a, h = a;
          'href' === a && '[object SVGAnimatedString]' === za.call(e.prop('href')) && (h = 'xlinkHref', f.$attr[h] = 'xlink:href', g = null);
          f.$observe(c, function (a) {
            a && (f.$set(h, a), W && g && e.prop(g, f[h]));
          });
        }
      };
    };
  });
  var xb = {
      $addControl: B,
      $removeControl: B,
      $setValidity: B,
      $setDirty: B,
      $setPristine: B
    };
  ad.$inject = [
    '$element',
    '$attrs',
    '$scope',
    '$animate'
  ];
  var dd = function (a) {
      return [
        '$timeout',
        function (c) {
          return {
            name: 'form',
            restrict: a ? 'EAC' : 'E',
            controller: ad,
            compile: function () {
              return {
                pre: function (a, e, f, g) {
                  if (!f.action) {
                    var h = function (c) {
                      a.$apply(function () {
                        g.$commitViewValue();
                      });
                      c.preventDefault ? c.preventDefault() : c.returnValue = !1;
                    };
                    qb(e[0], 'submit', h);
                    e.on('$destroy', function () {
                      c(function () {
                        Va(e[0], 'submit', h);
                      }, 0, !1);
                    });
                  }
                  var m = e.parent().controller('form'), l = f.name || f.ngForm;
                  l && sb(a, l, g, l);
                  if (m)
                    e.on('$destroy', function () {
                      m.$removeControl(g);
                      l && sb(a, l, r, l);
                      A(g, xb);
                    });
                }
              };
            }
          };
        }
      ];
    }, zd = dd(), Md = dd(!0), tf = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/, uf = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i, vf = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/, ed = /^(\d{4})-(\d{2})-(\d{2})$/, fd = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)$/, Wb = /^(\d{4})-W(\d\d)$/, gd = /^(\d{4})-(\d\d)$/, hd = /^(\d\d):(\d\d)$/, wf = /(\s+|^)default(\s+|$)/, id = {
      text: ab,
      date: bb('date', ed, zb(ed, [
        'yyyy',
        'MM',
        'dd'
      ]), 'yyyy-MM-dd'),
      'datetime-local': bb('datetimelocal', fd, zb(fd, [
        'yyyy',
        'MM',
        'dd',
        'HH',
        'mm'
      ]), 'yyyy-MM-ddTHH:mm'),
      time: bb('time', hd, zb(hd, [
        'HH',
        'mm'
      ]), 'HH:mm'),
      week: bb('week', Wb, function (a) {
        if (ra(a))
          return a;
        if (x(a)) {
          Wb.lastIndex = 0;
          var c = Wb.exec(a);
          if (c) {
            a = +c[1];
            var d = +c[2], c = Zc(a), d = 7 * (d - 1);
            return new Date(a, 0, c.getDate() + d);
          }
        }
        return NaN;
      }, 'yyyy-Www'),
      month: bb('month', gd, zb(gd, [
        'yyyy',
        'MM'
      ]), 'yyyy-MM'),
      number: function (a, c, d, e, f, g) {
        ab(a, c, d, e, f, g);
        e.$parsers.push(function (a) {
          var c = e.$isEmpty(a);
          if (c || vf.test(a))
            return e.$setValidity('number', !0), '' === a ? null : c ? a : parseFloat(a);
          e.$setValidity('number', !1);
          return r;
        });
        kf(e, 'number', xf, null, e.$$validityState);
        e.$formatters.push(function (a) {
          return e.$isEmpty(a) ? '' : '' + a;
        });
        d.min && (a = function (a) {
          var c = parseFloat(d.min);
          return Ub(e, 'min', e.$isEmpty(a) || a >= c, a);
        }, e.$parsers.push(a), e.$formatters.push(a));
        d.max && (a = function (a) {
          var c = parseFloat(d.max);
          return Ub(e, 'max', e.$isEmpty(a) || a <= c, a);
        }, e.$parsers.push(a), e.$formatters.push(a));
        e.$formatters.push(function (a) {
          return Ub(e, 'number', e.$isEmpty(a) || Fa(a), a);
        });
      },
      url: function (a, c, d, e, f, g) {
        ab(a, c, d, e, f, g);
        e.$validators.url = function (a, c) {
          var d = a || c;
          return e.$isEmpty(d) || tf.test(d);
        };
      },
      email: function (a, c, d, e, f, g) {
        ab(a, c, d, e, f, g);
        e.$validators.email = function (a, c) {
          var d = a || c;
          return e.$isEmpty(d) || uf.test(d);
        };
      },
      radio: function (a, c, d, e) {
        y(d.name) && c.attr('name', ++eb);
        c.on('click', function (f) {
          c[0].checked && a.$apply(function () {
            e.$setViewValue(d.value, f && f.type);
          });
        });
        e.$render = function () {
          c[0].checked = d.value == e.$viewValue;
        };
        d.$observe('value', e.$render);
      },
      checkbox: function (a, c, d, e, f, g, h, m) {
        var l = cd(m, a, 'ngTrueValue', d.ngTrueValue, !0), n = cd(m, a, 'ngFalseValue', d.ngFalseValue, !1);
        c.on('click', function (d) {
          a.$apply(function () {
            e.$setViewValue(c[0].checked, d && d.type);
          });
        });
        e.$render = function () {
          c[0].checked = e.$viewValue;
        };
        e.$isEmpty = function (a) {
          return a !== l;
        };
        e.$formatters.push(function (a) {
          return sa(a, l);
        });
        e.$parsers.push(function (a) {
          return a ? l : n;
        });
      },
      hidden: B,
      button: B,
      submit: B,
      reset: B,
      file: B
    }, xf = ['badInput'], ic = [
      '$browser',
      '$sniffer',
      '$filter',
      '$parse',
      function (a, c, d, e) {
        return {
          restrict: 'E',
          require: ['?ngModel'],
          link: function (f, g, h, m) {
            m[0] && (id[G(h.type)] || id.text)(f, g, h, m[0], c, a, d, e);
          }
        };
      }
    ], wb = 'ng-valid', vb = 'ng-invalid', Na = 'ng-pristine', yb = 'ng-dirty', yf = [
      '$scope',
      '$exceptionHandler',
      '$attrs',
      '$element',
      '$parse',
      '$animate',
      '$timeout',
      function (a, c, d, e, f, g, h) {
        function m(a, c) {
          c = c ? '-' + hb(c, '-') : '';
          g.removeClass(e, (a ? vb : wb) + c);
          g.addClass(e, (a ? wb : vb) + c);
        }
        this.$modelValue = this.$viewValue = Number.NaN;
        this.$validators = {};
        this.$parsers = [];
        this.$formatters = [];
        this.$viewChangeListeners = [];
        this.$untouched = !0;
        this.$touched = !1;
        this.$pristine = !0;
        this.$dirty = !1;
        this.$valid = !0;
        this.$invalid = !1;
        this.$name = d.name;
        var l = f(d.ngModel), n = l.assign, p = null, k = this;
        if (!n)
          throw K('ngModel')('nonassign', d.ngModel, ha(e));
        this.$render = B;
        this.$isEmpty = function (a) {
          return y(a) || '' === a || null === a || a !== a;
        };
        var t = e.inheritedData('$formController') || xb, s = 0, I = this.$error = {};
        e.addClass(Na).addClass('ng-untouched');
        m(!0);
        this.$setValidity = function (a, c) {
          I[a] !== !c && (c ? (I[a] && s--, s || (m(!0), k.$valid = !0, k.$invalid = !1)) : (m(!1), k.$invalid = !0, k.$valid = !1, s++), I[a] = !c, m(c, a), t.$setValidity(a, c, k));
        };
        this.$setPristine = function () {
          k.$dirty = !1;
          k.$pristine = !0;
          g.removeClass(e, yb);
          g.addClass(e, Na);
        };
        this.$setUntouched = function () {
          k.$touched = !1;
          k.$untouched = !0;
          g.setClass(e, 'ng-untouched', 'ng-touched');
        };
        this.$setTouched = function () {
          k.$touched = !0;
          k.$untouched = !1;
          g.setClass(e, 'ng-touched', 'ng-untouched');
        };
        this.$rollbackViewValue = function () {
          h.cancel(p);
          k.$viewValue = k.$$lastCommittedViewValue;
          k.$render();
        };
        this.$validate = function () {
          if (k.$modelValue === k.$modelValue) {
            var a = k.$modelValue;
            k.$$runValidators(k.$$invalidModelValue || k.$modelValue, k.$viewValue);
            a !== k.$modelValue && k.$$writeModelToScope();
          }
        };
        this.$$runValidators = function (a, c) {
          q(k.$validators, function (d, e) {
            k.$setValidity(e, d(a, c));
          });
          k.$modelValue = k.$valid ? a : r;
          k.$$invalidModelValue = k.$valid ? r : a;
        };
        this.$commitViewValue = function (a) {
          var c = k.$viewValue;
          h.cancel(p);
          if (a || k.$$lastCommittedViewValue !== c) {
            k.$$lastCommittedViewValue = c;
            k.$pristine && (k.$dirty = !0, k.$pristine = !1, g.removeClass(e, Na), g.addClass(e, yb), t.$setDirty());
            var d = c;
            q(k.$parsers, function (a) {
              d = a(d);
            });
            k.$modelValue === d || !y(k.$$invalidModelValue) && k.$$invalidModelValue == d || (k.$$runValidators(d, c), k.$$writeModelToScope());
          }
        };
        this.$$writeModelToScope = function () {
          var d;
          k.$options && k.$options.getterSetter && M(d = l(a)) ? d(k.$modelValue) : n(a, k.$modelValue);
          q(k.$viewChangeListeners, function (a) {
            try {
              a();
            } catch (d) {
              c(d);
            }
          });
        };
        this.$setViewValue = function (a, c, d) {
          k.$viewValue = a;
          k.$options && !k.$options.updateOnDefault || k.$$debounceViewValueCommit(c, d);
        };
        this.$$debounceViewValueCommit = function (a, c) {
          var d = 0, e = k.$options;
          e && F(e.debounce) && (e = e.debounce, Fa(e) ? d = e : Fa(e[a]) ? d = e[a] : Fa(e['default']) && (d = e['default']));
          h.cancel(p);
          d ? p = h(function () {
            k.$commitViewValue(c);
          }, d) : k.$commitViewValue(c);
        };
        a.$watch(function () {
          var c = l(a);
          k.$options && (k.$options.getterSetter && M(c)) && (c = c());
          if (k.$modelValue !== c && (y(k.$$invalidModelValue) || k.$$invalidModelValue != c)) {
            for (var d = k.$formatters, e = d.length, f = c; e--;)
              f = d[e](f);
            k.$$runValidators(c, f);
            k.$viewValue !== f && (k.$viewValue = k.$$lastCommittedViewValue = f, k.$render());
          }
          return c;
        });
      }
    ], ae = function () {
      return {
        require: [
          'ngModel',
          '^?form',
          '^?ngModelOptions'
        ],
        controller: yf,
        link: {
          pre: function (a, c, d, e) {
            e[2] && (e[0].$options = e[2].$options);
            var f = e[0], g = e[1] || xb;
            g.$addControl(f);
            a.$on('$destroy', function () {
              g.$removeControl(f);
            });
          },
          post: function (a, c, d, e) {
            var f = e[0];
            if (f.$options && f.$options.updateOn)
              c.on(f.$options.updateOn, function (c) {
                a.$apply(function () {
                  f.$$debounceViewValueCommit(c && c.type);
                });
              });
            c.on('blur', function (c) {
              a.$apply(function () {
                f.$setTouched();
              });
            });
          }
        }
      };
    }, ce = da({
      require: 'ngModel',
      link: function (a, c, d, e) {
        e.$viewChangeListeners.push(function () {
          a.$eval(d.ngChange);
        });
      }
    }), kc = function () {
      return {
        require: '?ngModel',
        link: function (a, c, d, e) {
          e && (d.required = !0, e.$validators.required = function (a, c) {
            return !d.required || !e.$isEmpty(c);
          }, d.$observe('required', function () {
            e.$validate();
          }));
        }
      };
    }, jc = function () {
      return {
        require: '?ngModel',
        link: function (a, c, d, e) {
          if (e) {
            var f, g = d.ngPattern || d.pattern;
            d.$observe('pattern', function (a) {
              x(a) && 0 < a.length && (a = RegExp(a));
              if (a && !a.test)
                throw K('ngPattern')('noregexp', g, a, ha(c));
              f = a || r;
              e.$validate();
            });
            e.$validators.pattern = function (a) {
              return e.$isEmpty(a) || y(f) || f.test(a);
            };
          }
        }
      };
    }, mc = function () {
      return {
        require: '?ngModel',
        link: function (a, c, d, e) {
          if (e) {
            var f = 0;
            d.$observe('maxlength', function (a) {
              f = Y(a) || 0;
              e.$validate();
            });
            e.$validators.maxlength = function (a) {
              return e.$isEmpty(a) || a.length <= f;
            };
          }
        }
      };
    }, lc = function () {
      return {
        require: '?ngModel',
        link: function (a, c, d, e) {
          if (e) {
            var f = 0;
            d.$observe('minlength', function (a) {
              f = Y(a) || 0;
              e.$validate();
            });
            e.$validators.minlength = function (a) {
              return e.$isEmpty(a) || a.length >= f;
            };
          }
        }
      };
    }, be = function () {
      return {
        require: 'ngModel',
        link: function (a, c, d, e) {
          var f = (a = /\/(.*)\//.exec(d.ngList)) && RegExp(a[1]) || d.ngList || ',';
          e.$parsers.push(function (a) {
            if (!y(a)) {
              var c = [];
              a && q(a.split(f), function (a) {
                a && c.push(aa(a));
              });
              return c;
            }
          });
          e.$formatters.push(function (a) {
            return L(a) ? a.join(', ') : r;
          });
          e.$isEmpty = function (a) {
            return !a || !a.length;
          };
        }
      };
    }, zf = /^(true|false|\d+)$/, de = function () {
      return {
        priority: 100,
        compile: function (a, c) {
          return zf.test(c.ngValue) ? function (a, c, f) {
            f.$set('value', a.$eval(f.ngValue));
          } : function (a, c, f) {
            a.$watch(f.ngValue, function (a) {
              f.$set('value', a);
            });
          };
        }
      };
    }, ee = function () {
      return {
        controller: [
          '$scope',
          '$attrs',
          function (a, c) {
            var d = this;
            this.$options = a.$eval(c.ngModelOptions);
            this.$options.updateOn !== r ? (this.$options.updateOnDefault = !1, this.$options.updateOn = aa(this.$options.updateOn.replace(wf, function () {
              d.$options.updateOnDefault = !0;
              return ' ';
            }))) : this.$options.updateOnDefault = !0;
          }
        ]
      };
    }, Ed = ya({
      compile: function (a) {
        a.addClass('ng-binding');
        return function (a, d, e) {
          d.data('$binding', e.ngBind);
          a.$watch(e.ngBind, function (a) {
            d.text(a == r ? '' : a);
          });
        };
      }
    }), Gd = [
      '$interpolate',
      function (a) {
        return function (c, d, e) {
          c = a(d.attr(e.$attr.ngBindTemplate));
          d.addClass('ng-binding').data('$binding', c);
          e.$observe('ngBindTemplate', function (a) {
            d.text(a);
          });
        };
      }
    ], Fd = [
      '$sce',
      '$parse',
      function (a, c) {
        return function (d, e, f) {
          function g() {
            var a = h(d);
            g.$$unwatch = h.$$unwatch;
            return (a || '').toString();
          }
          e.addClass('ng-binding').data('$binding', f.ngBindHtml);
          var h = c(f.ngBindHtml);
          d.$watch(g, function (c) {
            e.html(a.getTrustedHtml(h(d)) || '');
          });
        };
      }
    ], Hd = Vb('', !0), Jd = Vb('Odd', 0), Id = Vb('Even', 1), Kd = ya({
      compile: function (a, c) {
        c.$set('ngCloak', r);
        a.removeClass('ng-cloak');
      }
    }), Ld = [function () {
        return {
          scope: !0,
          controller: '@',
          priority: 500
        };
      }], nc = {};
  q('click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste'.split(' '), function (a) {
    var c = pa('ng-' + a);
    nc[c] = [
      '$parse',
      function (d) {
        return {
          compile: function (e, f) {
            var g = d(f[c]);
            return function (c, d) {
              d.on(G(a), function (a) {
                c.$apply(function () {
                  g(c, { $event: a });
                });
              });
            };
          }
        };
      }
    ];
  });
  var Od = [
      '$animate',
      function (a) {
        return {
          transclude: 'element',
          priority: 600,
          terminal: !0,
          restrict: 'A',
          $$tlb: !0,
          link: function (c, d, e, f, g) {
            var h, m, l;
            c.$watch(e.ngIf, function (c) {
              c ? m || g(function (c, f) {
                m = f;
                c[c.length++] = U.createComment(' end ngIf: ' + e.ngIf + ' ');
                h = { clone: c };
                a.enter(c, d.parent(), d);
              }) : (l && (l.remove(), l = null), m && (m.$destroy(), m = null), h && (l = Fb(h.clone), a.leave(l, function () {
                l = null;
              }), h = null));
            });
          }
        };
      }
    ], Pd = [
      '$http',
      '$templateCache',
      '$anchorScroll',
      '$animate',
      '$sce',
      function (a, c, d, e, f) {
        return {
          restrict: 'ECA',
          priority: 400,
          terminal: !0,
          transclude: 'element',
          controller: Ra.noop,
          compile: function (g, h) {
            var m = h.ngInclude || h.src, l = h.onload || '', n = h.autoscroll;
            return function (g, h, q, s, I) {
              var r = 0, D, u, z, w = function () {
                  u && (u.remove(), u = null);
                  D && (D.$destroy(), D = null);
                  z && (e.leave(z, function () {
                    u = null;
                  }), u = z, z = null);
                };
              g.$watch(f.parseAsResourceUrl(m), function (f) {
                var m = function () {
                    !F(n) || n && !g.$eval(n) || d();
                  }, q = ++r;
                f ? (a.get(f, { cache: c }).success(function (a) {
                  if (q === r) {
                    var c = g.$new();
                    s.template = a;
                    a = I(c, function (a) {
                      w();
                      e.enter(a, null, h, m);
                    });
                    D = c;
                    z = a;
                    D.$emit('$includeContentLoaded');
                    g.$eval(l);
                  }
                }).error(function () {
                  q === r && (w(), g.$emit('$includeContentError'));
                }), g.$emit('$includeContentRequested')) : (w(), s.template = null);
              });
            };
          }
        };
      }
    ], fe = [
      '$compile',
      function (a) {
        return {
          restrict: 'ECA',
          priority: -400,
          require: 'ngInclude',
          link: function (c, d, e, f) {
            d.html(f.template);
            a(d.contents())(c);
          }
        };
      }
    ], Qd = ya({
      priority: 450,
      compile: function () {
        return {
          pre: function (a, c, d) {
            a.$eval(d.ngInit);
          }
        };
      }
    }), Rd = ya({
      terminal: !0,
      priority: 1000
    }), Sd = [
      '$locale',
      '$interpolate',
      function (a, c) {
        var d = /{}/g;
        return {
          restrict: 'EA',
          link: function (e, f, g) {
            var h = g.count, m = g.$attr.when && f.attr(g.$attr.when), l = g.offset || 0, n = e.$eval(m) || {}, p = {}, k = c.startSymbol(), t = c.endSymbol(), s = /^when(Minus)?(.+)$/;
            q(g, function (a, c) {
              s.test(c) && (n[G(c.replace('when', '').replace('Minus', '-'))] = f.attr(g.$attr[c]));
            });
            q(n, function (a, e) {
              p[e] = c(a.replace(d, k + h + '-' + l + t));
            });
            e.$watch(function () {
              var c = parseFloat(e.$eval(h));
              if (isNaN(c))
                return '';
              c in n || (c = a.pluralCat(c - l));
              return p[c](e);
            }, function (a) {
              f.text(a);
            });
          }
        };
      }
    ], Td = [
      '$parse',
      '$animate',
      function (a, c) {
        var d = K('ngRepeat');
        return {
          transclude: 'element',
          priority: 1000,
          terminal: !0,
          $$tlb: !0,
          link: function (e, f, g, h, m) {
            var l = g.ngRepeat, n = l.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/), p, k, t, s, r, E, D = { $id: Ja };
            if (!n)
              throw d('iexp', l);
            g = n[1];
            h = n[2];
            (n = n[3]) ? (p = a(n), k = function (a, c, d) {
              E && (D[E] = a);
              D[r] = c;
              D.$index = d;
              return p(e, D);
            }) : (t = function (a, c) {
              return Ja(c);
            }, s = function (a) {
              return a;
            });
            n = g.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);
            if (!n)
              throw d('iidexp', g);
            r = n[3] || n[1];
            E = n[2];
            var u = {};
            e.$watchCollection(h, function (a) {
              var e, g, h = f[0], n, p = {}, D, v, F, J, A, B, y, x = [], R = function (a, c) {
                  a[r] = F;
                  E && (a[E] = v);
                  a.$index = c;
                  a.$first = 0 === c;
                  a.$last = c === D - 1;
                  a.$middle = !(a.$first || a.$last);
                  a.$odd = !(a.$even = 0 === (c & 1));
                };
              if (db(a))
                B = a, A = k || t;
              else {
                A = k || s;
                B = [];
                for (g in a)
                  a.hasOwnProperty(g) && '$' != g.charAt(0) && B.push(g);
                B.sort();
              }
              D = B.length;
              g = x.length = B.length;
              for (e = 0; e < g; e++)
                if (v = a === B ? e : B[e], F = a[v], J = A(v, F, e), Ca(J, '`track by` id'), u.hasOwnProperty(J))
                  y = u[J], delete u[J], p[J] = y, x[e] = y;
                else {
                  if (p.hasOwnProperty(J))
                    throw q(x, function (a) {
                      a && a.scope && (u[a.id] = a);
                    }), d('dupes', l, J);
                  x[e] = { id: J };
                  p[J] = !1;
                }
              for (n in u)
                u.hasOwnProperty(n) && (y = u[n], g = Fb(y.clone), c.leave(g), q(g, function (a) {
                  a.$$NG_REMOVED = !0;
                }), y.scope.$destroy());
              e = 0;
              for (g = B.length; e < g; e++)
                if (v = a === B ? e : B[e], F = a[v], y = x[e], x[e - 1] && (h = x[e - 1].clone[x[e - 1].clone.length - 1]), y.scope) {
                  n = h;
                  do
                    n = n.nextSibling;
                  while (n && n.$$NG_REMOVED);
                  y.clone[0] != n && c.move(Fb(y.clone), null, C(h));
                  h = y.clone[y.clone.length - 1];
                  R(y.scope, e);
                } else
                  m(function (a, d) {
                    y.scope = d;
                    a[a.length++] = U.createComment(' end ngRepeat: ' + l + ' ');
                    c.enter(a, null, C(h));
                    h = a;
                    y.clone = a;
                    p[y.id] = y;
                    R(y.scope, e);
                  });
              u = p;
            });
          }
        };
      }
    ], Ud = [
      '$animate',
      function (a) {
        return function (c, d, e) {
          c.$watch(e.ngShow, function (c) {
            a[c ? 'removeClass' : 'addClass'](d, 'ng-hide');
          });
        };
      }
    ], Nd = [
      '$animate',
      function (a) {
        return function (c, d, e) {
          c.$watch(e.ngHide, function (c) {
            a[c ? 'addClass' : 'removeClass'](d, 'ng-hide');
          });
        };
      }
    ], Vd = ya(function (a, c, d) {
      a.$watch(d.ngStyle, function (a, d) {
        d && a !== d && q(d, function (a, d) {
          c.css(d, '');
        });
        a && c.css(a);
      }, !0);
    }), Wd = [
      '$animate',
      function (a) {
        return {
          restrict: 'EA',
          require: 'ngSwitch',
          controller: [
            '$scope',
            function () {
              this.cases = {};
            }
          ],
          link: function (c, d, e, f) {
            var g = [], h = [], m = [], l = [];
            c.$watch(e.ngSwitch || e.on, function (d) {
              var p, k;
              p = 0;
              for (k = m.length; p < k; ++p)
                m[p].remove();
              p = m.length = 0;
              for (k = l.length; p < k; ++p) {
                var t = h[p];
                l[p].$destroy();
                m[p] = t;
                a.leave(t, function () {
                  m.splice(p, 1);
                });
              }
              h.length = 0;
              l.length = 0;
              if (g = f.cases['!' + d] || f.cases['?'])
                c.$eval(e.change), q(g, function (d) {
                  var e = c.$new();
                  l.push(e);
                  d.transclude(e, function (c) {
                    var e = d.element;
                    h.push(c);
                    a.enter(c, e.parent(), e);
                  });
                });
            });
          }
        };
      }
    ], Xd = ya({
      transclude: 'element',
      priority: 800,
      require: '^ngSwitch',
      link: function (a, c, d, e, f) {
        e.cases['!' + d.ngSwitchWhen] = e.cases['!' + d.ngSwitchWhen] || [];
        e.cases['!' + d.ngSwitchWhen].push({
          transclude: f,
          element: c
        });
      }
    }), Yd = ya({
      transclude: 'element',
      priority: 800,
      require: '^ngSwitch',
      link: function (a, c, d, e, f) {
        e.cases['?'] = e.cases['?'] || [];
        e.cases['?'].push({
          transclude: f,
          element: c
        });
      }
    }), $d = ya({
      link: function (a, c, d, e, f) {
        if (!f)
          throw K('ngTransclude')('orphan', ha(c));
        f(function (a) {
          c.empty();
          c.append(a);
        });
      }
    }), Ad = [
      '$templateCache',
      function (a) {
        return {
          restrict: 'E',
          terminal: !0,
          compile: function (c, d) {
            'text/ng-template' == d.type && a.put(d.id, c[0].text);
          }
        };
      }
    ], Af = K('ngOptions'), Zd = da({ terminal: !0 }), Bd = [
      '$compile',
      '$parse',
      function (a, c) {
        var d = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/, e = { $setViewValue: B };
        return {
          restrict: 'E',
          require: [
            'select',
            '?ngModel'
          ],
          controller: [
            '$element',
            '$scope',
            '$attrs',
            function (a, c, d) {
              var m = this, l = {}, n = e, p;
              m.databound = d.ngModel;
              m.init = function (a, c, d) {
                n = a;
                p = d;
              };
              m.addOption = function (c, d) {
                Ca(c, '"option value"');
                l[c] = !0;
                n.$viewValue == c && (a.val(c), p.parent() && p.remove());
                d[0].hasAttribute('selected') && (d[0].selected = !0);
              };
              m.removeOption = function (a) {
                this.hasOption(a) && (delete l[a], n.$viewValue == a && this.renderUnknownOption(a));
              };
              m.renderUnknownOption = function (c) {
                c = '? ' + Ja(c) + ' ?';
                p.val(c);
                a.prepend(p);
                a.val(c);
                p.prop('selected', !0);
              };
              m.hasOption = function (a) {
                return l.hasOwnProperty(a);
              };
              c.$on('$destroy', function () {
                m.renderUnknownOption = B;
              });
            }
          ],
          link: function (e, g, h, m) {
            function l(a, c, d, e) {
              d.$render = function () {
                var a = d.$viewValue;
                e.hasOption(a) ? (z.parent() && z.remove(), c.val(a), '' === a && E.prop('selected', !0)) : y(a) && E ? c.val('') : e.renderUnknownOption(a);
              };
              c.on('change', function () {
                a.$apply(function () {
                  z.parent() && z.remove();
                  d.$setViewValue(c.val());
                });
              });
            }
            function n(a, c, d) {
              var e;
              d.$render = function () {
                var a = new Xa(d.$viewValue);
                q(c.find('option'), function (c) {
                  c.selected = F(a.get(c.value));
                });
              };
              a.$watch(function () {
                sa(e, d.$viewValue) || (e = ka(d.$viewValue), d.$render());
              });
              c.on('change', function () {
                a.$apply(function () {
                  var a = [];
                  q(c.find('option'), function (c) {
                    c.selected && a.push(c.value);
                  });
                  d.$setViewValue(a);
                });
              });
            }
            function p(e, f, g) {
              function h() {
                var a = { '': [] }, c = [''], d, k, r, s, v;
                s = g.$modelValue;
                v = z(e) || [];
                var C = n ? Xb(v) : v, E, x, A;
                x = {};
                r = !1;
                var G, K;
                if (t)
                  if (w && L(s))
                    for (r = new Xa([]), A = 0; A < s.length; A++)
                      x[m] = s[A], r.put(w(e, x), s[A]);
                  else
                    r = new Xa(s);
                for (A = 0; E = C.length, A < E; A++) {
                  k = A;
                  if (n) {
                    k = C[A];
                    if ('$' === k.charAt(0))
                      continue;
                    x[n] = k;
                  }
                  x[m] = v[k];
                  d = p(e, x) || '';
                  (k = a[d]) || (k = a[d] = [], c.push(d));
                  t ? d = F(r.remove(w ? w(e, x) : q(e, x))) : (w ? (d = {}, d[m] = s, d = w(e, d) === w(e, x)) : d = s === q(e, x), r = r || d);
                  G = l(e, x);
                  G = F(G) ? G : '';
                  k.push({
                    id: w ? w(e, x) : n ? C[A] : A,
                    label: G,
                    selected: d
                  });
                }
                t || (B || null === s ? a[''].unshift({
                  id: '',
                  label: '',
                  selected: !r
                }) : r || a[''].unshift({
                  id: '?',
                  label: '',
                  selected: !0
                }));
                x = 0;
                for (C = c.length; x < C; x++) {
                  d = c[x];
                  k = a[d];
                  y.length <= x ? (s = {
                    element: u.clone().attr('label', d),
                    label: k.label
                  }, v = [s], y.push(v), f.append(s.element)) : (v = y[x], s = v[0], s.label != d && s.element.attr('label', s.label = d));
                  G = null;
                  A = 0;
                  for (E = k.length; A < E; A++)
                    r = k[A], (d = v[A + 1]) ? (G = d.element, d.label !== r.label && G.text(d.label = r.label), d.id !== r.id && G.val(d.id = r.id), d.selected !== r.selected && G.prop('selected', d.selected = r.selected)) : ('' === r.id && B ? K = B : (K = D.clone()).val(r.id).prop('selected', r.selected).text(r.label), v.push({
                      element: K,
                      label: r.label,
                      id: r.id,
                      selected: r.selected
                    }), G ? G.after(K) : s.element.append(K), G = K);
                  for (A++; v.length > A;)
                    v.pop().element.remove();
                }
                for (; y.length > x;)
                  y.pop()[0].element.remove();
              }
              var k;
              if (!(k = s.match(d)))
                throw Af('iexp', s, ha(f));
              var l = c(k[2] || k[1]), m = k[4] || k[6], n = k[5], p = c(k[3] || ''), q = c(k[2] ? k[1] : m), z = c(k[7]), w = k[8] ? c(k[8]) : null, y = [[{
                      element: f,
                      label: ''
                    }]];
              B && (a(B)(e), B.removeClass('ng-scope'), B.remove());
              f.empty();
              f.on('change', function () {
                e.$apply(function () {
                  var a, c = z(e) || [], d = {}, h, k, l, p, s, u, v;
                  if (t)
                    for (k = [], p = 0, u = y.length; p < u; p++)
                      for (a = y[p], l = 1, s = a.length; l < s; l++) {
                        if ((h = a[l].element)[0].selected) {
                          h = h.val();
                          n && (d[n] = h);
                          if (w)
                            for (v = 0; v < c.length && (d[m] = c[v], w(e, d) != h); v++);
                          else
                            d[m] = c[h];
                          k.push(q(e, d));
                        }
                      }
                  else {
                    h = f.val();
                    if ('?' == h)
                      k = r;
                    else if ('' === h)
                      k = null;
                    else if (w)
                      for (v = 0; v < c.length; v++) {
                        if (d[m] = c[v], w(e, d) == h) {
                          k = q(e, d);
                          break;
                        }
                      }
                    else
                      d[m] = c[h], n && (d[n] = h), k = q(e, d);
                    1 < y[0].length && y[0][1].id !== h && (y[0][1].selected = !1);
                  }
                  g.$setViewValue(k);
                });
              });
              g.$render = h;
              e.$watch(h);
            }
            if (m[1]) {
              var k = m[0];
              m = m[1];
              var t = h.multiple, s = h.ngOptions, B = !1, E, D = C(U.createElement('option')), u = C(U.createElement('optgroup')), z = D.clone();
              h = 0;
              for (var w = g.children(), x = w.length; h < x; h++)
                if ('' === w[h].value) {
                  E = B = w.eq(h);
                  break;
                }
              k.init(m, B, z);
              t && (m.$isEmpty = function (a) {
                return !a || 0 === a.length;
              });
              s ? p(e, g, m) : t ? n(e, g, m) : l(e, g, m, k);
            }
          }
        };
      }
    ], Dd = [
      '$interpolate',
      function (a) {
        var c = {
            addOption: B,
            removeOption: B
          };
        return {
          restrict: 'E',
          priority: 100,
          compile: function (d, e) {
            if (y(e.value)) {
              var f = a(d.text(), !0);
              f || e.$set('value', d.text());
            }
            return function (a, d, e) {
              var l = d.parent(), n = l.data('$selectController') || l.parent().data('$selectController');
              n && n.databound ? d.prop('selected', !1) : n = c;
              f ? a.$watch(f, function (a, c) {
                e.$set('value', a);
                c !== a && n.removeOption(c);
                n.addOption(a, d);
              }) : n.addOption(e.value, d);
              d.on('$destroy', function () {
                n.removeOption(e.value);
              });
            };
          }
        };
      }
    ], Cd = da({
      restrict: 'E',
      terminal: !1
    });
  N.angular.bootstrap ? console.log('WARNING: Tried to load angular more than once.') : (sd(), ud(Ra), C(U).ready(function () {
    qd(U, fc);
  }));
}(window, document));
!window.angular.$$csp() && window.angular.element(document).find('head').prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-animate){display:none !important;}ng\\:form{display:block;}</style>');  //# sourceMappingURL=angular.min.js.map

/**
 * @license AngularJS v1.2.20
 * (c) 2010-2014 Google, Inc. http://angularjs.org
 * License: MIT
 */
(function(window, angular, undefined) {'use strict';

/**
 * @ngdoc module
 * @name ngRoute
 * @description
 *
 * # ngRoute
 *
 * The `ngRoute` module provides routing and deeplinking services and directives for angular apps.
 *
 * ## Example
 * See {@link ngRoute.$route#example $route} for an example of configuring and using `ngRoute`.
 *
 *
 * <div doc-module-components="ngRoute"></div>
 */
 /* global -ngRouteModule */
var ngRouteModule = angular.module('ngRoute', ['ng']).
                        provider('$route', $RouteProvider);

/**
 * @ngdoc provider
 * @name $routeProvider
 * @kind function
 *
 * @description
 *
 * Used for configuring routes.
 *
 * ## Example
 * See {@link ngRoute.$route#example $route} for an example of configuring and using `ngRoute`.
 *
 * ## Dependencies
 * Requires the {@link ngRoute `ngRoute`} module to be installed.
 */
function $RouteProvider(){
  function inherit(parent, extra) {
    return angular.extend(new (angular.extend(function() {}, {prototype:parent}))(), extra);
  }

  var routes = {};

  /**
   * @ngdoc method
   * @name $routeProvider#when
   *
   * @param {string} path Route path (matched against `$location.path`). If `$location.path`
   *    contains redundant trailing slash or is missing one, the route will still match and the
   *    `$location.path` will be updated to add or drop the trailing slash to exactly match the
   *    route definition.
   *
   *    * `path` can contain named groups starting with a colon: e.g. `:name`. All characters up
   *        to the next slash are matched and stored in `$routeParams` under the given `name`
   *        when the route matches.
   *    * `path` can contain named groups starting with a colon and ending with a star:
   *        e.g.`:name*`. All characters are eagerly stored in `$routeParams` under the given `name`
   *        when the route matches.
   *    * `path` can contain optional named groups with a question mark: e.g.`:name?`.
   *
   *    For example, routes like `/color/:color/largecode/:largecode*\/edit` will match
   *    `/color/brown/largecode/code/with/slashes/edit` and extract:
   *
   *    * `color: brown`
   *    * `largecode: code/with/slashes`.
   *
   *
   * @param {Object} route Mapping information to be assigned to `$route.current` on route
   *    match.
   *
   *    Object properties:
   *
   *    - `controller` – `{(string|function()=}` – Controller fn that should be associated with
   *      newly created scope or the name of a {@link angular.Module#controller registered
   *      controller} if passed as a string.
   *    - `controllerAs` – `{string=}` – A controller alias name. If present the controller will be
   *      published to scope under the `controllerAs` name.
   *    - `template` – `{string=|function()=}` – html template as a string or a function that
   *      returns an html template as a string which should be used by {@link
   *      ngRoute.directive:ngView ngView} or {@link ng.directive:ngInclude ngInclude} directives.
   *      This property takes precedence over `templateUrl`.
   *
   *      If `template` is a function, it will be called with the following parameters:
   *
   *      - `{Array.<Object>}` - route parameters extracted from the current
   *        `$location.path()` by applying the current route
   *
   *    - `templateUrl` – `{string=|function()=}` – path or function that returns a path to an html
   *      template that should be used by {@link ngRoute.directive:ngView ngView}.
   *
   *      If `templateUrl` is a function, it will be called with the following parameters:
   *
   *      - `{Array.<Object>}` - route parameters extracted from the current
   *        `$location.path()` by applying the current route
   *
   *    - `resolve` - `{Object.<string, function>=}` - An optional map of dependencies which should
   *      be injected into the controller. If any of these dependencies are promises, the router
   *      will wait for them all to be resolved or one to be rejected before the controller is
   *      instantiated.
   *      If all the promises are resolved successfully, the values of the resolved promises are
   *      injected and {@link ngRoute.$route#$routeChangeSuccess $routeChangeSuccess} event is
   *      fired. If any of the promises are rejected the
   *      {@link ngRoute.$route#$routeChangeError $routeChangeError} event is fired. The map object
   *      is:
   *
   *      - `key` – `{string}`: a name of a dependency to be injected into the controller.
   *      - `factory` - `{string|function}`: If `string` then it is an alias for a service.
   *        Otherwise if function, then it is {@link auto.$injector#invoke injected}
   *        and the return value is treated as the dependency. If the result is a promise, it is
   *        resolved before its value is injected into the controller. Be aware that
   *        `ngRoute.$routeParams` will still refer to the previous route within these resolve
   *        functions.  Use `$route.current.params` to access the new route parameters, instead.
   *
   *    - `redirectTo` – {(string|function())=} – value to update
   *      {@link ng.$location $location} path with and trigger route redirection.
   *
   *      If `redirectTo` is a function, it will be called with the following parameters:
   *
   *      - `{Object.<string>}` - route parameters extracted from the current
   *        `$location.path()` by applying the current route templateUrl.
   *      - `{string}` - current `$location.path()`
   *      - `{Object}` - current `$location.search()`
   *
   *      The custom `redirectTo` function is expected to return a string which will be used
   *      to update `$location.path()` and `$location.search()`.
   *
   *    - `[reloadOnSearch=true]` - {boolean=} - reload route when only `$location.search()`
   *      or `$location.hash()` changes.
   *
   *      If the option is set to `false` and url in the browser changes, then
   *      `$routeUpdate` event is broadcasted on the root scope.
   *
   *    - `[caseInsensitiveMatch=false]` - {boolean=} - match routes without being case sensitive
   *
   *      If the option is set to `true`, then the particular route can be matched without being
   *      case sensitive
   *
   * @returns {Object} self
   *
   * @description
   * Adds a new route definition to the `$route` service.
   */
  this.when = function(path, route) {
    routes[path] = angular.extend(
      {reloadOnSearch: true},
      route,
      path && pathRegExp(path, route)
    );

    // create redirection for trailing slashes
    if (path) {
      var redirectPath = (path[path.length-1] == '/')
            ? path.substr(0, path.length-1)
            : path +'/';

      routes[redirectPath] = angular.extend(
        {redirectTo: path},
        pathRegExp(redirectPath, route)
      );
    }

    return this;
  };

   /**
    * @param path {string} path
    * @param opts {Object} options
    * @return {?Object}
    *
    * @description
    * Normalizes the given path, returning a regular expression
    * and the original path.
    *
    * Inspired by pathRexp in visionmedia/express/lib/utils.js.
    */
  function pathRegExp(path, opts) {
    var insensitive = opts.caseInsensitiveMatch,
        ret = {
          originalPath: path,
          regexp: path
        },
        keys = ret.keys = [];

    path = path
      .replace(/([().])/g, '\\$1')
      .replace(/(\/)?:(\w+)([\?\*])?/g, function(_, slash, key, option){
        var optional = option === '?' ? option : null;
        var star = option === '*' ? option : null;
        keys.push({ name: key, optional: !!optional });
        slash = slash || '';
        return ''
          + (optional ? '' : slash)
          + '(?:'
          + (optional ? slash : '')
          + (star && '(.+?)' || '([^/]+)')
          + (optional || '')
          + ')'
          + (optional || '');
      })
      .replace(/([\/$\*])/g, '\\$1');

    ret.regexp = new RegExp('^' + path + '$', insensitive ? 'i' : '');
    return ret;
  }

  /**
   * @ngdoc method
   * @name $routeProvider#otherwise
   *
   * @description
   * Sets route definition that will be used on route change when no other route definition
   * is matched.
   *
   * @param {Object} params Mapping information to be assigned to `$route.current`.
   * @returns {Object} self
   */
  this.otherwise = function(params) {
    this.when(null, params);
    return this;
  };


  this.$get = ['$rootScope',
               '$location',
               '$routeParams',
               '$q',
               '$injector',
               '$http',
               '$templateCache',
               '$sce',
      function($rootScope, $location, $routeParams, $q, $injector, $http, $templateCache, $sce) {

    /**
     * @ngdoc service
     * @name $route
     * @requires $location
     * @requires $routeParams
     *
     * @property {Object} current Reference to the current route definition.
     * The route definition contains:
     *
     *   - `controller`: The controller constructor as define in route definition.
     *   - `locals`: A map of locals which is used by {@link ng.$controller $controller} service for
     *     controller instantiation. The `locals` contain
     *     the resolved values of the `resolve` map. Additionally the `locals` also contain:
     *
     *     - `$scope` - The current route scope.
     *     - `$template` - The current route template HTML.
     *
     * @property {Object} routes Object with all route configuration Objects as its properties.
     *
     * @description
     * `$route` is used for deep-linking URLs to controllers and views (HTML partials).
     * It watches `$location.url()` and tries to map the path to an existing route definition.
     *
     * Requires the {@link ngRoute `ngRoute`} module to be installed.
     *
     * You can define routes through {@link ngRoute.$routeProvider $routeProvider}'s API.
     *
     * The `$route` service is typically used in conjunction with the
     * {@link ngRoute.directive:ngView `ngView`} directive and the
     * {@link ngRoute.$routeParams `$routeParams`} service.
     *
     * @example
     * This example shows how changing the URL hash causes the `$route` to match a route against the
     * URL, and the `ngView` pulls in the partial.
     *
     * Note that this example is using {@link ng.directive:script inlined templates}
     * to get it working on jsfiddle as well.
     *
     * <example name="$route-service" module="ngRouteExample"
     *          deps="angular-route.js" fixBase="true">
     *   <file name="index.html">
     *     <div ng-controller="MainController">
     *       Choose:
     *       <a href="Book/Moby">Moby</a> |
     *       <a href="Book/Moby/ch/1">Moby: Ch1</a> |
     *       <a href="Book/Gatsby">Gatsby</a> |
     *       <a href="Book/Gatsby/ch/4?key=value">Gatsby: Ch4</a> |
     *       <a href="Book/Scarlet">Scarlet Letter</a><br/>
     *
     *       <div ng-view></div>
     *
     *       <hr />
     *
     *       <pre>$location.path() = {{$location.path()}}</pre>
     *       <pre>$route.current.templateUrl = {{$route.current.templateUrl}}</pre>
     *       <pre>$route.current.params = {{$route.current.params}}</pre>
     *       <pre>$route.current.scope.name = {{$route.current.scope.name}}</pre>
     *       <pre>$routeParams = {{$routeParams}}</pre>
     *     </div>
     *   </file>
     *
     *   <file name="book.html">
     *     controller: {{name}}<br />
     *     Book Id: {{params.bookId}}<br />
     *   </file>
     *
     *   <file name="chapter.html">
     *     controller: {{name}}<br />
     *     Book Id: {{params.bookId}}<br />
     *     Chapter Id: {{params.chapterId}}
     *   </file>
     *
     *   <file name="script.js">
     *     angular.module('ngRouteExample', ['ngRoute'])
     *
     *      .controller('MainController', function($scope, $route, $routeParams, $location) {
     *          $scope.$route = $route;
     *          $scope.$location = $location;
     *          $scope.$routeParams = $routeParams;
     *      })
     *
     *      .controller('BookController', function($scope, $routeParams) {
     *          $scope.name = "BookController";
     *          $scope.params = $routeParams;
     *      })
     *
     *      .controller('ChapterController', function($scope, $routeParams) {
     *          $scope.name = "ChapterController";
     *          $scope.params = $routeParams;
     *      })
     *
     *     .config(function($routeProvider, $locationProvider) {
     *       $routeProvider
     *        .when('/Book/:bookId', {
     *         templateUrl: 'book.html',
     *         controller: 'BookController',
     *         resolve: {
     *           // I will cause a 1 second delay
     *           delay: function($q, $timeout) {
     *             var delay = $q.defer();
     *             $timeout(delay.resolve, 1000);
     *             return delay.promise;
     *           }
     *         }
     *       })
     *       .when('/Book/:bookId/ch/:chapterId', {
     *         templateUrl: 'chapter.html',
     *         controller: 'ChapterController'
     *       });
     *
     *       // configure html5 to get links working on jsfiddle
     *       $locationProvider.html5Mode(true);
     *     });
     *
     *   </file>
     *
     *   <file name="protractor.js" type="protractor">
     *     it('should load and compile correct template', function() {
     *       element(by.linkText('Moby: Ch1')).click();
     *       var content = element(by.css('[ng-view]')).getText();
     *       expect(content).toMatch(/controller\: ChapterController/);
     *       expect(content).toMatch(/Book Id\: Moby/);
     *       expect(content).toMatch(/Chapter Id\: 1/);
     *
     *       element(by.partialLinkText('Scarlet')).click();
     *
     *       content = element(by.css('[ng-view]')).getText();
     *       expect(content).toMatch(/controller\: BookController/);
     *       expect(content).toMatch(/Book Id\: Scarlet/);
     *     });
     *   </file>
     * </example>
     */

    /**
     * @ngdoc event
     * @name $route#$routeChangeStart
     * @eventType broadcast on root scope
     * @description
     * Broadcasted before a route change. At this  point the route services starts
     * resolving all of the dependencies needed for the route change to occur.
     * Typically this involves fetching the view template as well as any dependencies
     * defined in `resolve` route property. Once  all of the dependencies are resolved
     * `$routeChangeSuccess` is fired.
     *
     * @param {Object} angularEvent Synthetic event object.
     * @param {Route} next Future route information.
     * @param {Route} current Current route information.
     */

    /**
     * @ngdoc event
     * @name $route#$routeChangeSuccess
     * @eventType broadcast on root scope
     * @description
     * Broadcasted after a route dependencies are resolved.
     * {@link ngRoute.directive:ngView ngView} listens for the directive
     * to instantiate the controller and render the view.
     *
     * @param {Object} angularEvent Synthetic event object.
     * @param {Route} current Current route information.
     * @param {Route|Undefined} previous Previous route information, or undefined if current is
     * first route entered.
     */

    /**
     * @ngdoc event
     * @name $route#$routeChangeError
     * @eventType broadcast on root scope
     * @description
     * Broadcasted if any of the resolve promises are rejected.
     *
     * @param {Object} angularEvent Synthetic event object
     * @param {Route} current Current route information.
     * @param {Route} previous Previous route information.
     * @param {Route} rejection Rejection of the promise. Usually the error of the failed promise.
     */

    /**
     * @ngdoc event
     * @name $route#$routeUpdate
     * @eventType broadcast on root scope
     * @description
     *
     * The `reloadOnSearch` property has been set to false, and we are reusing the same
     * instance of the Controller.
     */

    var forceReload = false,
        $route = {
          routes: routes,

          /**
           * @ngdoc method
           * @name $route#reload
           *
           * @description
           * Causes `$route` service to reload the current route even if
           * {@link ng.$location $location} hasn't changed.
           *
           * As a result of that, {@link ngRoute.directive:ngView ngView}
           * creates new scope, reinstantiates the controller.
           */
          reload: function() {
            forceReload = true;
            $rootScope.$evalAsync(updateRoute);
          }
        };

    $rootScope.$on('$locationChangeSuccess', updateRoute);

    return $route;

    /////////////////////////////////////////////////////

    /**
     * @param on {string} current url
     * @param route {Object} route regexp to match the url against
     * @return {?Object}
     *
     * @description
     * Check if the route matches the current url.
     *
     * Inspired by match in
     * visionmedia/express/lib/router/router.js.
     */
    function switchRouteMatcher(on, route) {
      var keys = route.keys,
          params = {};

      if (!route.regexp) return null;

      var m = route.regexp.exec(on);
      if (!m) return null;

      for (var i = 1, len = m.length; i < len; ++i) {
        var key = keys[i - 1];

        var val = 'string' == typeof m[i]
              ? decodeURIComponent(m[i])
              : m[i];

        if (key && val) {
          params[key.name] = val;
        }
      }
      return params;
    }

    function updateRoute() {
      var next = parseRoute(),
          last = $route.current;

      if (next && last && next.$$route === last.$$route
          && angular.equals(next.pathParams, last.pathParams)
          && !next.reloadOnSearch && !forceReload) {
        last.params = next.params;
        angular.copy(last.params, $routeParams);
        $rootScope.$broadcast('$routeUpdate', last);
      } else if (next || last) {
        forceReload = false;
        $rootScope.$broadcast('$routeChangeStart', next, last);
        $route.current = next;
        if (next) {
          if (next.redirectTo) {
            if (angular.isString(next.redirectTo)) {
              $location.path(interpolate(next.redirectTo, next.params)).search(next.params)
                       .replace();
            } else {
              $location.url(next.redirectTo(next.pathParams, $location.path(), $location.search()))
                       .replace();
            }
          }
        }

        $q.when(next).
          then(function() {
            if (next) {
              var locals = angular.extend({}, next.resolve),
                  template, templateUrl;

              angular.forEach(locals, function(value, key) {
                locals[key] = angular.isString(value) ?
                    $injector.get(value) : $injector.invoke(value);
              });

              if (angular.isDefined(template = next.template)) {
                if (angular.isFunction(template)) {
                  template = template(next.params);
                }
              } else if (angular.isDefined(templateUrl = next.templateUrl)) {
                if (angular.isFunction(templateUrl)) {
                  templateUrl = templateUrl(next.params);
                }
                templateUrl = $sce.getTrustedResourceUrl(templateUrl);
                if (angular.isDefined(templateUrl)) {
                  next.loadedTemplateUrl = templateUrl;
                  template = $http.get(templateUrl, {cache: $templateCache}).
                      then(function(response) { return response.data; });
                }
              }
              if (angular.isDefined(template)) {
                locals['$template'] = template;
              }
              return $q.all(locals);
            }
          }).
          // after route change
          then(function(locals) {
            if (next == $route.current) {
              if (next) {
                next.locals = locals;
                angular.copy(next.params, $routeParams);
              }
              $rootScope.$broadcast('$routeChangeSuccess', next, last);
            }
          }, function(error) {
            if (next == $route.current) {
              $rootScope.$broadcast('$routeChangeError', next, last, error);
            }
          });
      }
    }


    /**
     * @returns {Object} the current active route, by matching it against the URL
     */
    function parseRoute() {
      // Match a route
      var params, match;
      angular.forEach(routes, function(route, path) {
        if (!match && (params = switchRouteMatcher($location.path(), route))) {
          match = inherit(route, {
            params: angular.extend({}, $location.search(), params),
            pathParams: params});
          match.$$route = route;
        }
      });
      // No route matched; fallback to "otherwise" route
      return match || routes[null] && inherit(routes[null], {params: {}, pathParams:{}});
    }

    /**
     * @returns {string} interpolation of the redirect path with the parameters
     */
    function interpolate(string, params) {
      var result = [];
      angular.forEach((string||'').split(':'), function(segment, i) {
        if (i === 0) {
          result.push(segment);
        } else {
          var segmentMatch = segment.match(/(\w+)(.*)/);
          var key = segmentMatch[1];
          result.push(params[key]);
          result.push(segmentMatch[2] || '');
          delete params[key];
        }
      });
      return result.join('');
    }
  }];
}

ngRouteModule.provider('$routeParams', $RouteParamsProvider);


/**
 * @ngdoc service
 * @name $routeParams
 * @requires $route
 *
 * @description
 * The `$routeParams` service allows you to retrieve the current set of route parameters.
 *
 * Requires the {@link ngRoute `ngRoute`} module to be installed.
 *
 * The route parameters are a combination of {@link ng.$location `$location`}'s
 * {@link ng.$location#search `search()`} and {@link ng.$location#path `path()`}.
 * The `path` parameters are extracted when the {@link ngRoute.$route `$route`} path is matched.
 *
 * In case of parameter name collision, `path` params take precedence over `search` params.
 *
 * The service guarantees that the identity of the `$routeParams` object will remain unchanged
 * (but its properties will likely change) even when a route change occurs.
 *
 * Note that the `$routeParams` are only updated *after* a route change completes successfully.
 * This means that you cannot rely on `$routeParams` being correct in route resolve functions.
 * Instead you can use `$route.current.params` to access the new route's parameters.
 *
 * @example
 * ```js
 *  // Given:
 *  // URL: http://server.com/index.html#/Chapter/1/Section/2?search=moby
 *  // Route: /Chapter/:chapterId/Section/:sectionId
 *  //
 *  // Then
 *  $routeParams ==> {chapterId:'1', sectionId:'2', search:'moby'}
 * ```
 */
function $RouteParamsProvider() {
  this.$get = function() { return {}; };
}

ngRouteModule.directive('ngView', ngViewFactory);
ngRouteModule.directive('ngView', ngViewFillContentFactory);


/**
 * @ngdoc directive
 * @name ngView
 * @restrict ECA
 *
 * @description
 * # Overview
 * `ngView` is a directive that complements the {@link ngRoute.$route $route} service by
 * including the rendered template of the current route into the main layout (`index.html`) file.
 * Every time the current route changes, the included view changes with it according to the
 * configuration of the `$route` service.
 *
 * Requires the {@link ngRoute `ngRoute`} module to be installed.
 *
 * @animations
 * enter - animation is used to bring new content into the browser.
 * leave - animation is used to animate existing content away.
 *
 * The enter and leave animation occur concurrently.
 *
 * @scope
 * @priority 400
 * @param {string=} onload Expression to evaluate whenever the view updates.
 *
 * @param {string=} autoscroll Whether `ngView` should call {@link ng.$anchorScroll
 *                  $anchorScroll} to scroll the viewport after the view is updated.
 *
 *                  - If the attribute is not set, disable scrolling.
 *                  - If the attribute is set without value, enable scrolling.
 *                  - Otherwise enable scrolling only if the `autoscroll` attribute value evaluated
 *                    as an expression yields a truthy value.
 * @example
    <example name="ngView-directive" module="ngViewExample"
             deps="angular-route.js;angular-animate.js"
             animations="true" fixBase="true">
      <file name="index.html">
        <div ng-controller="MainCtrl as main">
          Choose:
          <a href="Book/Moby">Moby</a> |
          <a href="Book/Moby/ch/1">Moby: Ch1</a> |
          <a href="Book/Gatsby">Gatsby</a> |
          <a href="Book/Gatsby/ch/4?key=value">Gatsby: Ch4</a> |
          <a href="Book/Scarlet">Scarlet Letter</a><br/>

          <div class="view-animate-container">
            <div ng-view class="view-animate"></div>
          </div>
          <hr />

          <pre>$location.path() = {{main.$location.path()}}</pre>
          <pre>$route.current.templateUrl = {{main.$route.current.templateUrl}}</pre>
          <pre>$route.current.params = {{main.$route.current.params}}</pre>
          <pre>$route.current.scope.name = {{main.$route.current.scope.name}}</pre>
          <pre>$routeParams = {{main.$routeParams}}</pre>
        </div>
      </file>

      <file name="book.html">
        <div>
          controller: {{book.name}}<br />
          Book Id: {{book.params.bookId}}<br />
        </div>
      </file>

      <file name="chapter.html">
        <div>
          controller: {{chapter.name}}<br />
          Book Id: {{chapter.params.bookId}}<br />
          Chapter Id: {{chapter.params.chapterId}}
        </div>
      </file>

      <file name="animations.css">
        .view-animate-container {
          position:relative;
          height:100px!important;
          position:relative;
          background:white;
          border:1px solid black;
          height:40px;
          overflow:hidden;
        }

        .view-animate {
          padding:10px;
        }

        .view-animate.ng-enter, .view-animate.ng-leave {
          -webkit-transition:all cubic-bezier(0.250, 0.460, 0.450, 0.940) 1.5s;
          transition:all cubic-bezier(0.250, 0.460, 0.450, 0.940) 1.5s;

          display:block;
          width:100%;
          border-left:1px solid black;

          position:absolute;
          top:0;
          left:0;
          right:0;
          bottom:0;
          padding:10px;
        }

        .view-animate.ng-enter {
          left:100%;
        }
        .view-animate.ng-enter.ng-enter-active {
          left:0;
        }
        .view-animate.ng-leave.ng-leave-active {
          left:-100%;
        }
      </file>

      <file name="script.js">
        angular.module('ngViewExample', ['ngRoute', 'ngAnimate'])
          .config(['$routeProvider', '$locationProvider',
            function($routeProvider, $locationProvider) {
              $routeProvider
                .when('/Book/:bookId', {
                  templateUrl: 'book.html',
                  controller: 'BookCtrl',
                  controllerAs: 'book'
                })
                .when('/Book/:bookId/ch/:chapterId', {
                  templateUrl: 'chapter.html',
                  controller: 'ChapterCtrl',
                  controllerAs: 'chapter'
                });

              // configure html5 to get links working on jsfiddle
              $locationProvider.html5Mode(true);
          }])
          .controller('MainCtrl', ['$route', '$routeParams', '$location',
            function($route, $routeParams, $location) {
              this.$route = $route;
              this.$location = $location;
              this.$routeParams = $routeParams;
          }])
          .controller('BookCtrl', ['$routeParams', function($routeParams) {
            this.name = "BookCtrl";
            this.params = $routeParams;
          }])
          .controller('ChapterCtrl', ['$routeParams', function($routeParams) {
            this.name = "ChapterCtrl";
            this.params = $routeParams;
          }]);

      </file>

      <file name="protractor.js" type="protractor">
        it('should load and compile correct template', function() {
          element(by.linkText('Moby: Ch1')).click();
          var content = element(by.css('[ng-view]')).getText();
          expect(content).toMatch(/controller\: ChapterCtrl/);
          expect(content).toMatch(/Book Id\: Moby/);
          expect(content).toMatch(/Chapter Id\: 1/);

          element(by.partialLinkText('Scarlet')).click();

          content = element(by.css('[ng-view]')).getText();
          expect(content).toMatch(/controller\: BookCtrl/);
          expect(content).toMatch(/Book Id\: Scarlet/);
        });
      </file>
    </example>
 */


/**
 * @ngdoc event
 * @name ngView#$viewContentLoaded
 * @eventType emit on the current ngView scope
 * @description
 * Emitted every time the ngView content is reloaded.
 */
ngViewFactory.$inject = ['$route', '$anchorScroll', '$animate'];
function ngViewFactory(   $route,   $anchorScroll,   $animate) {
  return {
    restrict: 'ECA',
    terminal: true,
    priority: 400,
    transclude: 'element',
    link: function(scope, $element, attr, ctrl, $transclude) {
        var currentScope,
            currentElement,
            previousElement,
            autoScrollExp = attr.autoscroll,
            onloadExp = attr.onload || '';

        scope.$on('$routeChangeSuccess', update);
        update();

        function cleanupLastView() {
          if(previousElement) {
            previousElement.remove();
            previousElement = null;
          }
          if(currentScope) {
            currentScope.$destroy();
            currentScope = null;
          }
          if(currentElement) {
            $animate.leave(currentElement, function() {
              previousElement = null;
            });
            previousElement = currentElement;
            currentElement = null;
          }
        }

        function update() {
          var locals = $route.current && $route.current.locals,
              template = locals && locals.$template;

          if (angular.isDefined(template)) {
            var newScope = scope.$new();
            var current = $route.current;

            // Note: This will also link all children of ng-view that were contained in the original
            // html. If that content contains controllers, ... they could pollute/change the scope.
            // However, using ng-view on an element with additional content does not make sense...
            // Note: We can't remove them in the cloneAttchFn of $transclude as that
            // function is called before linking the content, which would apply child
            // directives to non existing elements.
            var clone = $transclude(newScope, function(clone) {
              $animate.enter(clone, null, currentElement || $element, function onNgViewEnter () {
                if (angular.isDefined(autoScrollExp)
                  && (!autoScrollExp || scope.$eval(autoScrollExp))) {
                  $anchorScroll();
                }
              });
              cleanupLastView();
            });

            currentElement = clone;
            currentScope = current.scope = newScope;
            currentScope.$emit('$viewContentLoaded');
            currentScope.$eval(onloadExp);
          } else {
            cleanupLastView();
          }
        }
    }
  };
}

// This directive is called during the $transclude call of the first `ngView` directive.
// It will replace and compile the content of the element with the loaded template.
// We need this directive so that the element content is already filled when
// the link function of another directive on the same element as ngView
// is called.
ngViewFillContentFactory.$inject = ['$compile', '$controller', '$route'];
function ngViewFillContentFactory($compile, $controller, $route) {
  return {
    restrict: 'ECA',
    priority: -400,
    link: function(scope, $element) {
      var current = $route.current,
          locals = current.locals;

      $element.html(locals.$template);

      var link = $compile($element.contents());

      if (current.controller) {
        locals.$scope = scope;
        var controller = $controller(current.controller, locals);
        if (current.controllerAs) {
          scope[current.controllerAs] = controller;
        }
        $element.data('$ngControllerController', controller);
        $element.children().data('$ngControllerController', controller);
      }

      link(scope);
    }
  };
}


})(window, window.angular);

/*
 * angular-ui-bootstrap
 * http://angular-ui.github.io/bootstrap/

 * Version: 0.11.0 - 2014-05-01
 * License: MIT
 */
angular.module('ui.bootstrap', [
  'ui.bootstrap.tpls',
  'ui.bootstrap.transition',
  'ui.bootstrap.collapse',
  'ui.bootstrap.accordion',
  'ui.bootstrap.alert',
  'ui.bootstrap.bindHtml',
  'ui.bootstrap.buttons',
  'ui.bootstrap.carousel',
  'ui.bootstrap.dateparser',
  'ui.bootstrap.position',
  'ui.bootstrap.datepicker',
  'ui.bootstrap.dropdown',
  'ui.bootstrap.modal',
  'ui.bootstrap.pagination',
  'ui.bootstrap.tooltip',
  'ui.bootstrap.popover',
  'ui.bootstrap.progressbar',
  'ui.bootstrap.rating',
  'ui.bootstrap.tabs',
  'ui.bootstrap.timepicker',
  'ui.bootstrap.typeahead'
]);
angular.module('ui.bootstrap.tpls', [
  'template/accordion/accordion-group.html',
  'template/accordion/accordion.html',
  'template/alert/alert.html',
  'template/carousel/carousel.html',
  'template/carousel/slide.html',
  'template/datepicker/datepicker.html',
  'template/datepicker/day.html',
  'template/datepicker/month.html',
  'template/datepicker/popup.html',
  'template/datepicker/year.html',
  'template/modal/backdrop.html',
  'template/modal/window.html',
  'template/pagination/pager.html',
  'template/pagination/pagination.html',
  'template/tooltip/tooltip-html-unsafe-popup.html',
  'template/tooltip/tooltip-popup.html',
  'template/popover/popover.html',
  'template/progressbar/bar.html',
  'template/progressbar/progress.html',
  'template/progressbar/progressbar.html',
  'template/rating/rating.html',
  'template/tabs/tab.html',
  'template/tabs/tabset.html',
  'template/timepicker/timepicker.html',
  'template/typeahead/typeahead-match.html',
  'template/typeahead/typeahead-popup.html'
]);
angular.module('ui.bootstrap.transition', []).factory('$transition', [
  '$q',
  '$timeout',
  '$rootScope',
  function ($q, $timeout, $rootScope) {
    var $transition = function (element, trigger, options) {
      options = options || {};
      var deferred = $q.defer();
      var endEventName = $transition[options.animation ? 'animationEndEventName' : 'transitionEndEventName'];
      var transitionEndHandler = function (event) {
        $rootScope.$apply(function () {
          element.unbind(endEventName, transitionEndHandler);
          deferred.resolve(element);
        });
      };
      if (endEventName) {
        element.bind(endEventName, transitionEndHandler);
      }
      // Wrap in a timeout to allow the browser time to update the DOM before the transition is to occur
      $timeout(function () {
        if (angular.isString(trigger)) {
          element.addClass(trigger);
        } else if (angular.isFunction(trigger)) {
          trigger(element);
        } else if (angular.isObject(trigger)) {
          element.css(trigger);
        }
        //If browser does not support transitions, instantly resolve
        if (!endEventName) {
          deferred.resolve(element);
        }
      });
      // Add our custom cancel function to the promise that is returned
      // We can call this if we are about to run a new transition, which we know will prevent this transition from ending,
      // i.e. it will therefore never raise a transitionEnd event for that transition
      deferred.promise.cancel = function () {
        if (endEventName) {
          element.unbind(endEventName, transitionEndHandler);
        }
        deferred.reject('Transition cancelled');
      };
      return deferred.promise;
    };
    // Work out the name of the transitionEnd event
    var transElement = document.createElement('trans');
    var transitionEndEventNames = {
        'WebkitTransition': 'webkitTransitionEnd',
        'MozTransition': 'transitionend',
        'OTransition': 'oTransitionEnd',
        'transition': 'transitionend'
      };
    var animationEndEventNames = {
        'WebkitTransition': 'webkitAnimationEnd',
        'MozTransition': 'animationend',
        'OTransition': 'oAnimationEnd',
        'transition': 'animationend'
      };
    function findEndEventName(endEventNames) {
      for (var name in endEventNames) {
        if (transElement.style[name] !== undefined) {
          return endEventNames[name];
        }
      }
    }
    $transition.transitionEndEventName = findEndEventName(transitionEndEventNames);
    $transition.animationEndEventName = findEndEventName(animationEndEventNames);
    return $transition;
  }
]);
angular.module('ui.bootstrap.collapse', ['ui.bootstrap.transition']).directive('collapse', [
  '$transition',
  function ($transition) {
    return {
      link: function (scope, element, attrs) {
        var initialAnimSkip = true;
        var currentTransition;
        function doTransition(change) {
          var newTransition = $transition(element, change);
          if (currentTransition) {
            currentTransition.cancel();
          }
          currentTransition = newTransition;
          newTransition.then(newTransitionDone, newTransitionDone);
          return newTransition;
          function newTransitionDone() {
            // Make sure it's this transition, otherwise, leave it alone.
            if (currentTransition === newTransition) {
              currentTransition = undefined;
            }
          }
        }
        function expand() {
          if (initialAnimSkip) {
            initialAnimSkip = false;
            expandDone();
          } else {
            element.removeClass('collapse').addClass('collapsing');
            doTransition({ height: element[0].scrollHeight + 'px' }).then(expandDone);
          }
        }
        function expandDone() {
          element.removeClass('collapsing');
          element.addClass('collapse in');
          element.css({ height: 'auto' });
        }
        function collapse() {
          if (initialAnimSkip) {
            initialAnimSkip = false;
            collapseDone();
            element.css({ height: 0 });
          } else {
            // CSS transitions don't work with height: auto, so we have to manually change the height to a specific value
            element.css({ height: element[0].scrollHeight + 'px' });
            //trigger reflow so a browser realizes that height was updated from auto to a specific value
            var x = element[0].offsetWidth;
            element.removeClass('collapse in').addClass('collapsing');
            doTransition({ height: 0 }).then(collapseDone);
          }
        }
        function collapseDone() {
          element.removeClass('collapsing');
          element.addClass('collapse');
        }
        scope.$watch(attrs.collapse, function (shouldCollapse) {
          if (shouldCollapse) {
            collapse();
          } else {
            expand();
          }
        });
      }
    };
  }
]);
angular.module('ui.bootstrap.accordion', ['ui.bootstrap.collapse']).constant('accordionConfig', { closeOthers: true }).controller('AccordionController', [
  '$scope',
  '$attrs',
  'accordionConfig',
  function ($scope, $attrs, accordionConfig) {
    // This array keeps track of the accordion groups
    this.groups = [];
    // Ensure that all the groups in this accordion are closed, unless close-others explicitly says not to
    this.closeOthers = function (openGroup) {
      var closeOthers = angular.isDefined($attrs.closeOthers) ? $scope.$eval($attrs.closeOthers) : accordionConfig.closeOthers;
      if (closeOthers) {
        angular.forEach(this.groups, function (group) {
          if (group !== openGroup) {
            group.isOpen = false;
          }
        });
      }
    };
    // This is called from the accordion-group directive to add itself to the accordion
    this.addGroup = function (groupScope) {
      var that = this;
      this.groups.push(groupScope);
      groupScope.$on('$destroy', function (event) {
        that.removeGroup(groupScope);
      });
    };
    // This is called from the accordion-group directive when to remove itself
    this.removeGroup = function (group) {
      var index = this.groups.indexOf(group);
      if (index !== -1) {
        this.groups.splice(index, 1);
      }
    };
  }
]).directive('accordion', function () {
  return {
    restrict: 'EA',
    controller: 'AccordionController',
    transclude: true,
    replace: false,
    templateUrl: 'template/accordion/accordion.html'
  };
}).directive('accordionGroup', function () {
  return {
    require: '^accordion',
    restrict: 'EA',
    transclude: true,
    replace: true,
    templateUrl: 'template/accordion/accordion-group.html',
    scope: {
      heading: '@',
      isOpen: '=?',
      isDisabled: '=?'
    },
    controller: function () {
      this.setHeading = function (element) {
        this.heading = element;
      };
    },
    link: function (scope, element, attrs, accordionCtrl) {
      accordionCtrl.addGroup(scope);
      scope.$watch('isOpen', function (value) {
        if (value) {
          accordionCtrl.closeOthers(scope);
        }
      });
      scope.toggleOpen = function () {
        if (!scope.isDisabled) {
          scope.isOpen = !scope.isOpen;
        }
      };
    }
  };
}).directive('accordionHeading', function () {
  return {
    restrict: 'EA',
    transclude: true,
    template: '',
    replace: true,
    require: '^accordionGroup',
    link: function (scope, element, attr, accordionGroupCtrl, transclude) {
      // Pass the heading to the accordion-group controller
      // so that it can be transcluded into the right place in the template
      // [The second parameter to transclude causes the elements to be cloned so that they work in ng-repeat]
      accordionGroupCtrl.setHeading(transclude(scope, function () {
      }));
    }
  };
}).directive('accordionTransclude', function () {
  return {
    require: '^accordionGroup',
    link: function (scope, element, attr, controller) {
      scope.$watch(function () {
        return controller[attr.accordionTransclude];
      }, function (heading) {
        if (heading) {
          element.html('');
          element.append(heading);
        }
      });
    }
  };
});
angular.module('ui.bootstrap.alert', []).controller('AlertController', [
  '$scope',
  '$attrs',
  function ($scope, $attrs) {
    $scope.closeable = 'close' in $attrs;
  }
]).directive('alert', function () {
  return {
    restrict: 'EA',
    controller: 'AlertController',
    templateUrl: 'template/alert/alert.html',
    transclude: true,
    replace: true,
    scope: {
      type: '@',
      close: '&'
    }
  };
});
angular.module('ui.bootstrap.bindHtml', []).directive('bindHtmlUnsafe', function () {
  return function (scope, element, attr) {
    element.addClass('ng-binding').data('$binding', attr.bindHtmlUnsafe);
    scope.$watch(attr.bindHtmlUnsafe, function bindHtmlUnsafeWatchAction(value) {
      element.html(value || '');
    });
  };
});
angular.module('ui.bootstrap.buttons', []).constant('buttonConfig', {
  activeClass: 'active',
  toggleEvent: 'click'
}).controller('ButtonsController', [
  'buttonConfig',
  function (buttonConfig) {
    this.activeClass = buttonConfig.activeClass || 'active';
    this.toggleEvent = buttonConfig.toggleEvent || 'click';
  }
]).directive('btnRadio', function () {
  return {
    require: [
      'btnRadio',
      'ngModel'
    ],
    controller: 'ButtonsController',
    link: function (scope, element, attrs, ctrls) {
      var buttonsCtrl = ctrls[0], ngModelCtrl = ctrls[1];
      //model -> UI
      ngModelCtrl.$render = function () {
        element.toggleClass(buttonsCtrl.activeClass, angular.equals(ngModelCtrl.$modelValue, scope.$eval(attrs.btnRadio)));
      };
      //ui->model
      element.bind(buttonsCtrl.toggleEvent, function () {
        var isActive = element.hasClass(buttonsCtrl.activeClass);
        if (!isActive || angular.isDefined(attrs.uncheckable)) {
          scope.$apply(function () {
            ngModelCtrl.$setViewValue(isActive ? null : scope.$eval(attrs.btnRadio));
            ngModelCtrl.$render();
          });
        }
      });
    }
  };
}).directive('btnCheckbox', function () {
  return {
    require: [
      'btnCheckbox',
      'ngModel'
    ],
    controller: 'ButtonsController',
    link: function (scope, element, attrs, ctrls) {
      var buttonsCtrl = ctrls[0], ngModelCtrl = ctrls[1];
      function getTrueValue() {
        return getCheckboxValue(attrs.btnCheckboxTrue, true);
      }
      function getFalseValue() {
        return getCheckboxValue(attrs.btnCheckboxFalse, false);
      }
      function getCheckboxValue(attributeValue, defaultValue) {
        var val = scope.$eval(attributeValue);
        return angular.isDefined(val) ? val : defaultValue;
      }
      //model -> UI
      ngModelCtrl.$render = function () {
        element.toggleClass(buttonsCtrl.activeClass, angular.equals(ngModelCtrl.$modelValue, getTrueValue()));
      };
      //ui->model
      element.bind(buttonsCtrl.toggleEvent, function () {
        scope.$apply(function () {
          ngModelCtrl.$setViewValue(element.hasClass(buttonsCtrl.activeClass) ? getFalseValue() : getTrueValue());
          ngModelCtrl.$render();
        });
      });
    }
  };
});
/**
* @ngdoc overview
* @name ui.bootstrap.carousel
*
* @description
* AngularJS version of an image carousel.
*
*/
angular.module('ui.bootstrap.carousel', ['ui.bootstrap.transition']).controller('CarouselController', [
  '$scope',
  '$timeout',
  '$transition',
  function ($scope, $timeout, $transition) {
    var self = this, slides = self.slides = $scope.slides = [], currentIndex = -1, currentTimeout, isPlaying;
    self.currentSlide = null;
    var destroyed = false;
    /* direction: "prev" or "next" */
    self.select = $scope.select = function (nextSlide, direction) {
      var nextIndex = slides.indexOf(nextSlide);
      //Decide direction if it's not given
      if (direction === undefined) {
        direction = nextIndex > currentIndex ? 'next' : 'prev';
      }
      if (nextSlide && nextSlide !== self.currentSlide) {
        if ($scope.$currentTransition) {
          $scope.$currentTransition.cancel();
          //Timeout so ng-class in template has time to fix classes for finished slide
          $timeout(goNext);
        } else {
          goNext();
        }
      }
      function goNext() {
        // Scope has been destroyed, stop here.
        if (destroyed) {
          return;
        }
        //If we have a slide to transition from and we have a transition type and we're allowed, go
        if (self.currentSlide && angular.isString(direction) && !$scope.noTransition && nextSlide.$element) {
          //We shouldn't do class manip in here, but it's the same weird thing bootstrap does. need to fix sometime
          nextSlide.$element.addClass(direction);
          var reflow = nextSlide.$element[0].offsetWidth;
          //force reflow
          //Set all other slides to stop doing their stuff for the new transition
          angular.forEach(slides, function (slide) {
            angular.extend(slide, {
              direction: '',
              entering: false,
              leaving: false,
              active: false
            });
          });
          angular.extend(nextSlide, {
            direction: direction,
            active: true,
            entering: true
          });
          angular.extend(self.currentSlide || {}, {
            direction: direction,
            leaving: true
          });
          $scope.$currentTransition = $transition(nextSlide.$element, {});
          //We have to create new pointers inside a closure since next & current will change
          (function (next, current) {
            $scope.$currentTransition.then(function () {
              transitionDone(next, current);
            }, function () {
              transitionDone(next, current);
            });
          }(nextSlide, self.currentSlide));
        } else {
          transitionDone(nextSlide, self.currentSlide);
        }
        self.currentSlide = nextSlide;
        currentIndex = nextIndex;
        //every time you change slides, reset the timer
        restartTimer();
      }
      function transitionDone(next, current) {
        angular.extend(next, {
          direction: '',
          active: true,
          leaving: false,
          entering: false
        });
        angular.extend(current || {}, {
          direction: '',
          active: false,
          leaving: false,
          entering: false
        });
        $scope.$currentTransition = null;
      }
    };
    $scope.$on('$destroy', function () {
      destroyed = true;
    });
    /* Allow outside people to call indexOf on slides array */
    self.indexOfSlide = function (slide) {
      return slides.indexOf(slide);
    };
    $scope.next = function () {
      var newIndex = (currentIndex + 1) % slides.length;
      //Prevent this user-triggered transition from occurring if there is already one in progress
      if (!$scope.$currentTransition) {
        return self.select(slides[newIndex], 'next');
      }
    };
    $scope.prev = function () {
      var newIndex = currentIndex - 1 < 0 ? slides.length - 1 : currentIndex - 1;
      //Prevent this user-triggered transition from occurring if there is already one in progress
      if (!$scope.$currentTransition) {
        return self.select(slides[newIndex], 'prev');
      }
    };
    $scope.isActive = function (slide) {
      return self.currentSlide === slide;
    };
    $scope.$watch('interval', restartTimer);
    $scope.$on('$destroy', resetTimer);
    function restartTimer() {
      resetTimer();
      var interval = +$scope.interval;
      if (!isNaN(interval) && interval >= 0) {
        currentTimeout = $timeout(timerFn, interval);
      }
    }
    function resetTimer() {
      if (currentTimeout) {
        $timeout.cancel(currentTimeout);
        currentTimeout = null;
      }
    }
    function timerFn() {
      if (isPlaying) {
        $scope.next();
        restartTimer();
      } else {
        $scope.pause();
      }
    }
    $scope.play = function () {
      if (!isPlaying) {
        isPlaying = true;
        restartTimer();
      }
    };
    $scope.pause = function () {
      if (!$scope.noPause) {
        isPlaying = false;
        resetTimer();
      }
    };
    self.addSlide = function (slide, element) {
      slide.$element = element;
      slides.push(slide);
      //if this is the first slide or the slide is set to active, select it
      if (slides.length === 1 || slide.active) {
        self.select(slides[slides.length - 1]);
        if (slides.length == 1) {
          $scope.play();
        }
      } else {
        slide.active = false;
      }
    };
    self.removeSlide = function (slide) {
      //get the index of the slide inside the carousel
      var index = slides.indexOf(slide);
      slides.splice(index, 1);
      if (slides.length > 0 && slide.active) {
        if (index >= slides.length) {
          self.select(slides[index - 1]);
        } else {
          self.select(slides[index]);
        }
      } else if (currentIndex > index) {
        currentIndex--;
      }
    };
  }
]).directive('carousel', [function () {
    return {
      restrict: 'EA',
      transclude: true,
      replace: true,
      controller: 'CarouselController',
      require: 'carousel',
      templateUrl: 'template/carousel/carousel.html',
      scope: {
        interval: '=',
        noTransition: '=',
        noPause: '='
      }
    };
  }]).directive('slide', function () {
  return {
    require: '^carousel',
    restrict: 'EA',
    transclude: true,
    replace: true,
    templateUrl: 'template/carousel/slide.html',
    scope: { active: '=?' },
    link: function (scope, element, attrs, carouselCtrl) {
      carouselCtrl.addSlide(scope, element);
      //when the scope is destroyed then remove the slide from the current slides array
      scope.$on('$destroy', function () {
        carouselCtrl.removeSlide(scope);
      });
      scope.$watch('active', function (active) {
        if (active) {
          carouselCtrl.select(scope);
        }
      });
    }
  };
});
angular.module('ui.bootstrap.dateparser', []).service('dateParser', [
  '$locale',
  'orderByFilter',
  function ($locale, orderByFilter) {
    this.parsers = {};
    var formatCodeToRegex = {
        'yyyy': {
          regex: '\\d{4}',
          apply: function (value) {
            this.year = +value;
          }
        },
        'yy': {
          regex: '\\d{2}',
          apply: function (value) {
            this.year = +value + 2000;
          }
        },
        'y': {
          regex: '\\d{1,4}',
          apply: function (value) {
            this.year = +value;
          }
        },
        'MMMM': {
          regex: $locale.DATETIME_FORMATS.MONTH.join('|'),
          apply: function (value) {
            this.month = $locale.DATETIME_FORMATS.MONTH.indexOf(value);
          }
        },
        'MMM': {
          regex: $locale.DATETIME_FORMATS.SHORTMONTH.join('|'),
          apply: function (value) {
            this.month = $locale.DATETIME_FORMATS.SHORTMONTH.indexOf(value);
          }
        },
        'MM': {
          regex: '0[1-9]|1[0-2]',
          apply: function (value) {
            this.month = value - 1;
          }
        },
        'M': {
          regex: '[1-9]|1[0-2]',
          apply: function (value) {
            this.month = value - 1;
          }
        },
        'dd': {
          regex: '[0-2][0-9]{1}|3[0-1]{1}',
          apply: function (value) {
            this.date = +value;
          }
        },
        'd': {
          regex: '[1-2]?[0-9]{1}|3[0-1]{1}',
          apply: function (value) {
            this.date = +value;
          }
        },
        'EEEE': { regex: $locale.DATETIME_FORMATS.DAY.join('|') },
        'EEE': { regex: $locale.DATETIME_FORMATS.SHORTDAY.join('|') }
      };
    this.createParser = function (format) {
      var map = [], regex = format.split('');
      angular.forEach(formatCodeToRegex, function (data, code) {
        var index = format.indexOf(code);
        if (index > -1) {
          format = format.split('');
          regex[index] = '(' + data.regex + ')';
          format[index] = '$';
          // Custom symbol to define consumed part of format
          for (var i = index + 1, n = index + code.length; i < n; i++) {
            regex[i] = '';
            format[i] = '$';
          }
          format = format.join('');
          map.push({
            index: index,
            apply: data.apply
          });
        }
      });
      return {
        regex: new RegExp('^' + regex.join('') + '$'),
        map: orderByFilter(map, 'index')
      };
    };
    this.parse = function (input, format) {
      if (!angular.isString(input)) {
        return input;
      }
      format = $locale.DATETIME_FORMATS[format] || format;
      if (!this.parsers[format]) {
        this.parsers[format] = this.createParser(format);
      }
      var parser = this.parsers[format], regex = parser.regex, map = parser.map, results = input.match(regex);
      if (results && results.length) {
        var fields = {
            year: 1900,
            month: 0,
            date: 1,
            hours: 0
          }, dt;
        for (var i = 1, n = results.length; i < n; i++) {
          var mapper = map[i - 1];
          if (mapper.apply) {
            mapper.apply.call(fields, results[i]);
          }
        }
        if (isValid(fields.year, fields.month, fields.date)) {
          dt = new Date(fields.year, fields.month, fields.date, fields.hours);
        }
        return dt;
      }
    };
    // Check if date is valid for specific month (and year for February).
    // Month: 0 = Jan, 1 = Feb, etc
    function isValid(year, month, date) {
      if (month === 1 && date > 28) {
        return date === 29 && (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0);
      }
      if (month === 3 || month === 5 || month === 8 || month === 10) {
        return date < 31;
      }
      return true;
    }
  }
]);
angular.module('ui.bootstrap.position', []).factory('$position', [
  '$document',
  '$window',
  function ($document, $window) {
    function getStyle(el, cssprop) {
      if (el.currentStyle) {
        //IE
        return el.currentStyle[cssprop];
      } else if ($window.getComputedStyle) {
        return $window.getComputedStyle(el)[cssprop];
      }
      // finally try and get inline style
      return el.style[cssprop];
    }
    /**
     * Checks if a given element is statically positioned
     * @param element - raw DOM element
     */
    function isStaticPositioned(element) {
      return (getStyle(element, 'position') || 'static') === 'static';
    }
    /**
     * returns the closest, non-statically positioned parentOffset of a given element
     * @param element
     */
    var parentOffsetEl = function (element) {
      var docDomEl = $document[0];
      var offsetParent = element.offsetParent || docDomEl;
      while (offsetParent && offsetParent !== docDomEl && isStaticPositioned(offsetParent)) {
        offsetParent = offsetParent.offsetParent;
      }
      return offsetParent || docDomEl;
    };
    return {
      position: function (element) {
        var elBCR = this.offset(element);
        var offsetParentBCR = {
            top: 0,
            left: 0
          };
        var offsetParentEl = parentOffsetEl(element[0]);
        if (offsetParentEl != $document[0]) {
          offsetParentBCR = this.offset(angular.element(offsetParentEl));
          offsetParentBCR.top += offsetParentEl.clientTop - offsetParentEl.scrollTop;
          offsetParentBCR.left += offsetParentEl.clientLeft - offsetParentEl.scrollLeft;
        }
        var boundingClientRect = element[0].getBoundingClientRect();
        return {
          width: boundingClientRect.width || element.prop('offsetWidth'),
          height: boundingClientRect.height || element.prop('offsetHeight'),
          top: elBCR.top - offsetParentBCR.top,
          left: elBCR.left - offsetParentBCR.left
        };
      },
      offset: function (element) {
        var boundingClientRect = element[0].getBoundingClientRect();
        return {
          width: boundingClientRect.width || element.prop('offsetWidth'),
          height: boundingClientRect.height || element.prop('offsetHeight'),
          top: boundingClientRect.top + ($window.pageYOffset || $document[0].documentElement.scrollTop),
          left: boundingClientRect.left + ($window.pageXOffset || $document[0].documentElement.scrollLeft)
        };
      },
      positionElements: function (hostEl, targetEl, positionStr, appendToBody) {
        var positionStrParts = positionStr.split('-');
        var pos0 = positionStrParts[0], pos1 = positionStrParts[1] || 'center';
        var hostElPos, targetElWidth, targetElHeight, targetElPos;
        hostElPos = appendToBody ? this.offset(hostEl) : this.position(hostEl);
        targetElWidth = targetEl.prop('offsetWidth');
        targetElHeight = targetEl.prop('offsetHeight');
        var shiftWidth = {
            center: function () {
              return hostElPos.left + hostElPos.width / 2 - targetElWidth / 2;
            },
            left: function () {
              return hostElPos.left;
            },
            right: function () {
              return hostElPos.left + hostElPos.width;
            }
          };
        var shiftHeight = {
            center: function () {
              return hostElPos.top + hostElPos.height / 2 - targetElHeight / 2;
            },
            top: function () {
              return hostElPos.top;
            },
            bottom: function () {
              return hostElPos.top + hostElPos.height;
            }
          };
        switch (pos0) {
        case 'right':
          targetElPos = {
            top: shiftHeight[pos1](),
            left: shiftWidth[pos0]()
          };
          break;
        case 'left':
          targetElPos = {
            top: shiftHeight[pos1](),
            left: hostElPos.left - targetElWidth
          };
          break;
        case 'bottom':
          targetElPos = {
            top: shiftHeight[pos0](),
            left: shiftWidth[pos1]()
          };
          break;
        default:
          targetElPos = {
            top: hostElPos.top - targetElHeight,
            left: shiftWidth[pos1]()
          };
          break;
        }
        return targetElPos;
      }
    };
  }
]);
angular.module('ui.bootstrap.datepicker', [
  'ui.bootstrap.dateparser',
  'ui.bootstrap.position'
]).constant('datepickerConfig', {
  formatDay: 'dd',
  formatMonth: 'MMMM',
  formatYear: 'yyyy',
  formatDayHeader: 'EEE',
  formatDayTitle: 'MMMM yyyy',
  formatMonthTitle: 'yyyy',
  datepickerMode: 'day',
  minMode: 'day',
  maxMode: 'year',
  showWeeks: true,
  startingDay: 0,
  yearRange: 20,
  minDate: null,
  maxDate: null
}).controller('DatepickerController', [
  '$scope',
  '$attrs',
  '$parse',
  '$interpolate',
  '$timeout',
  '$log',
  'dateFilter',
  'datepickerConfig',
  function ($scope, $attrs, $parse, $interpolate, $timeout, $log, dateFilter, datepickerConfig) {
    var self = this, ngModelCtrl = { $setViewValue: angular.noop };
    // nullModelCtrl;
    // Modes chain
    this.modes = [
      'day',
      'month',
      'year'
    ];
    // Configuration attributes
    angular.forEach([
      'formatDay',
      'formatMonth',
      'formatYear',
      'formatDayHeader',
      'formatDayTitle',
      'formatMonthTitle',
      'minMode',
      'maxMode',
      'showWeeks',
      'startingDay',
      'yearRange'
    ], function (key, index) {
      self[key] = angular.isDefined($attrs[key]) ? index < 8 ? $interpolate($attrs[key])($scope.$parent) : $scope.$parent.$eval($attrs[key]) : datepickerConfig[key];
    });
    // Watchable attributes
    angular.forEach([
      'minDate',
      'maxDate'
    ], function (key) {
      if ($attrs[key]) {
        $scope.$parent.$watch($parse($attrs[key]), function (value) {
          self[key] = value ? new Date(value) : null;
          self.refreshView();
        });
      } else {
        self[key] = datepickerConfig[key] ? new Date(datepickerConfig[key]) : null;
      }
    });
    $scope.datepickerMode = $scope.datepickerMode || datepickerConfig.datepickerMode;
    $scope.uniqueId = 'datepicker-' + $scope.$id + '-' + Math.floor(Math.random() * 10000);
    this.activeDate = angular.isDefined($attrs.initDate) ? $scope.$parent.$eval($attrs.initDate) : new Date();
    $scope.isActive = function (dateObject) {
      if (self.compare(dateObject.date, self.activeDate) === 0) {
        $scope.activeDateId = dateObject.uid;
        return true;
      }
      return false;
    };
    this.init = function (ngModelCtrl_) {
      ngModelCtrl = ngModelCtrl_;
      ngModelCtrl.$render = function () {
        self.render();
      };
    };
    this.render = function () {
      if (ngModelCtrl.$modelValue) {
        var date = new Date(ngModelCtrl.$modelValue), isValid = !isNaN(date);
        if (isValid) {
          this.activeDate = date;
        } else {
          $log.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.');
        }
        ngModelCtrl.$setValidity('date', isValid);
      }
      this.refreshView();
    };
    this.refreshView = function () {
      if (this.element) {
        this._refreshView();
        var date = ngModelCtrl.$modelValue ? new Date(ngModelCtrl.$modelValue) : null;
        ngModelCtrl.$setValidity('date-disabled', !date || this.element && !this.isDisabled(date));
      }
    };
    this.createDateObject = function (date, format) {
      var model = ngModelCtrl.$modelValue ? new Date(ngModelCtrl.$modelValue) : null;
      return {
        date: date,
        label: dateFilter(date, format),
        selected: model && this.compare(date, model) === 0,
        disabled: this.isDisabled(date),
        current: this.compare(date, new Date()) === 0
      };
    };
    this.isDisabled = function (date) {
      return this.minDate && this.compare(date, this.minDate) < 0 || this.maxDate && this.compare(date, this.maxDate) > 0 || $attrs.dateDisabled && $scope.dateDisabled({
        date: date,
        mode: $scope.datepickerMode
      });
    };
    // Split array into smaller arrays
    this.split = function (arr, size) {
      var arrays = [];
      while (arr.length > 0) {
        arrays.push(arr.splice(0, size));
      }
      return arrays;
    };
    $scope.select = function (date) {
      if ($scope.datepickerMode === self.minMode) {
        var dt = ngModelCtrl.$modelValue ? new Date(ngModelCtrl.$modelValue) : new Date(0, 0, 0, 0, 0, 0, 0);
        dt.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
        ngModelCtrl.$setViewValue(dt);
        ngModelCtrl.$render();
      } else {
        self.activeDate = date;
        $scope.datepickerMode = self.modes[self.modes.indexOf($scope.datepickerMode) - 1];
      }
    };
    $scope.move = function (direction) {
      var year = self.activeDate.getFullYear() + direction * (self.step.years || 0), month = self.activeDate.getMonth() + direction * (self.step.months || 0);
      self.activeDate.setFullYear(year, month, 1);
      self.refreshView();
    };
    $scope.toggleMode = function (direction) {
      direction = direction || 1;
      if ($scope.datepickerMode === self.maxMode && direction === 1 || $scope.datepickerMode === self.minMode && direction === -1) {
        return;
      }
      $scope.datepickerMode = self.modes[self.modes.indexOf($scope.datepickerMode) + direction];
    };
    // Key event mapper
    $scope.keys = {
      13: 'enter',
      32: 'space',
      33: 'pageup',
      34: 'pagedown',
      35: 'end',
      36: 'home',
      37: 'left',
      38: 'up',
      39: 'right',
      40: 'down'
    };
    var focusElement = function () {
      $timeout(function () {
        self.element[0].focus();
      }, 0, false);
    };
    // Listen for focus requests from popup directive
    $scope.$on('datepicker.focus', focusElement);
    $scope.keydown = function (evt) {
      var key = $scope.keys[evt.which];
      if (!key || evt.shiftKey || evt.altKey) {
        return;
      }
      evt.preventDefault();
      evt.stopPropagation();
      if (key === 'enter' || key === 'space') {
        if (self.isDisabled(self.activeDate)) {
          return;  // do nothing
        }
        $scope.select(self.activeDate);
        focusElement();
      } else if (evt.ctrlKey && (key === 'up' || key === 'down')) {
        $scope.toggleMode(key === 'up' ? 1 : -1);
        focusElement();
      } else {
        self.handleKeyDown(key, evt);
        self.refreshView();
      }
    };
  }
]).directive('datepicker', function () {
  return {
    restrict: 'EA',
    replace: true,
    templateUrl: 'template/datepicker/datepicker.html',
    scope: {
      datepickerMode: '=?',
      dateDisabled: '&'
    },
    require: [
      'datepicker',
      '?^ngModel'
    ],
    controller: 'DatepickerController',
    link: function (scope, element, attrs, ctrls) {
      var datepickerCtrl = ctrls[0], ngModelCtrl = ctrls[1];
      if (ngModelCtrl) {
        datepickerCtrl.init(ngModelCtrl);
      }
    }
  };
}).directive('daypicker', [
  'dateFilter',
  function (dateFilter) {
    return {
      restrict: 'EA',
      replace: true,
      templateUrl: 'template/datepicker/day.html',
      require: '^datepicker',
      link: function (scope, element, attrs, ctrl) {
        scope.showWeeks = ctrl.showWeeks;
        ctrl.step = { months: 1 };
        ctrl.element = element;
        var DAYS_IN_MONTH = [
            31,
            28,
            31,
            30,
            31,
            30,
            31,
            31,
            30,
            31,
            30,
            31
          ];
        function getDaysInMonth(year, month) {
          return month === 1 && year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0) ? 29 : DAYS_IN_MONTH[month];
        }
        function getDates(startDate, n) {
          var dates = new Array(n), current = new Date(startDate), i = 0;
          current.setHours(12);
          // Prevent repeated dates because of timezone bug
          while (i < n) {
            dates[i++] = new Date(current);
            current.setDate(current.getDate() + 1);
          }
          return dates;
        }
        ctrl._refreshView = function () {
          var year = ctrl.activeDate.getFullYear(), month = ctrl.activeDate.getMonth(), firstDayOfMonth = new Date(year, month, 1), difference = ctrl.startingDay - firstDayOfMonth.getDay(), numDisplayedFromPreviousMonth = difference > 0 ? 7 - difference : -difference, firstDate = new Date(firstDayOfMonth);
          if (numDisplayedFromPreviousMonth > 0) {
            firstDate.setDate(-numDisplayedFromPreviousMonth + 1);
          }
          // 42 is the number of days on a six-month calendar
          var days = getDates(firstDate, 42);
          for (var i = 0; i < 42; i++) {
            days[i] = angular.extend(ctrl.createDateObject(days[i], ctrl.formatDay), {
              secondary: days[i].getMonth() !== month,
              uid: scope.uniqueId + '-' + i
            });
          }
          scope.labels = new Array(7);
          for (var j = 0; j < 7; j++) {
            scope.labels[j] = {
              abbr: dateFilter(days[j].date, ctrl.formatDayHeader),
              full: dateFilter(days[j].date, 'EEEE')
            };
          }
          scope.title = dateFilter(ctrl.activeDate, ctrl.formatDayTitle);
          scope.rows = ctrl.split(days, 7);
          if (scope.showWeeks) {
            scope.weekNumbers = [];
            var weekNumber = getISO8601WeekNumber(scope.rows[0][0].date), numWeeks = scope.rows.length;
            while (scope.weekNumbers.push(weekNumber++) < numWeeks) {
            }
          }
        };
        ctrl.compare = function (date1, date2) {
          return new Date(date1.getFullYear(), date1.getMonth(), date1.getDate()) - new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
        };
        function getISO8601WeekNumber(date) {
          var checkDate = new Date(date);
          checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
          // Thursday
          var time = checkDate.getTime();
          checkDate.setMonth(0);
          // Compare with Jan 1
          checkDate.setDate(1);
          return Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1;
        }
        ctrl.handleKeyDown = function (key, evt) {
          var date = ctrl.activeDate.getDate();
          if (key === 'left') {
            date = date - 1;  // up
          } else if (key === 'up') {
            date = date - 7;  // down
          } else if (key === 'right') {
            date = date + 1;  // down
          } else if (key === 'down') {
            date = date + 7;
          } else if (key === 'pageup' || key === 'pagedown') {
            var month = ctrl.activeDate.getMonth() + (key === 'pageup' ? -1 : 1);
            ctrl.activeDate.setMonth(month, 1);
            date = Math.min(getDaysInMonth(ctrl.activeDate.getFullYear(), ctrl.activeDate.getMonth()), date);
          } else if (key === 'home') {
            date = 1;
          } else if (key === 'end') {
            date = getDaysInMonth(ctrl.activeDate.getFullYear(), ctrl.activeDate.getMonth());
          }
          ctrl.activeDate.setDate(date);
        };
        ctrl.refreshView();
      }
    };
  }
]).directive('monthpicker', [
  'dateFilter',
  function (dateFilter) {
    return {
      restrict: 'EA',
      replace: true,
      templateUrl: 'template/datepicker/month.html',
      require: '^datepicker',
      link: function (scope, element, attrs, ctrl) {
        ctrl.step = { years: 1 };
        ctrl.element = element;
        ctrl._refreshView = function () {
          var months = new Array(12), year = ctrl.activeDate.getFullYear();
          for (var i = 0; i < 12; i++) {
            months[i] = angular.extend(ctrl.createDateObject(new Date(year, i, 1), ctrl.formatMonth), { uid: scope.uniqueId + '-' + i });
          }
          scope.title = dateFilter(ctrl.activeDate, ctrl.formatMonthTitle);
          scope.rows = ctrl.split(months, 3);
        };
        ctrl.compare = function (date1, date2) {
          return new Date(date1.getFullYear(), date1.getMonth()) - new Date(date2.getFullYear(), date2.getMonth());
        };
        ctrl.handleKeyDown = function (key, evt) {
          var date = ctrl.activeDate.getMonth();
          if (key === 'left') {
            date = date - 1;  // up
          } else if (key === 'up') {
            date = date - 3;  // down
          } else if (key === 'right') {
            date = date + 1;  // down
          } else if (key === 'down') {
            date = date + 3;
          } else if (key === 'pageup' || key === 'pagedown') {
            var year = ctrl.activeDate.getFullYear() + (key === 'pageup' ? -1 : 1);
            ctrl.activeDate.setFullYear(year);
          } else if (key === 'home') {
            date = 0;
          } else if (key === 'end') {
            date = 11;
          }
          ctrl.activeDate.setMonth(date);
        };
        ctrl.refreshView();
      }
    };
  }
]).directive('yearpicker', [
  'dateFilter',
  function (dateFilter) {
    return {
      restrict: 'EA',
      replace: true,
      templateUrl: 'template/datepicker/year.html',
      require: '^datepicker',
      link: function (scope, element, attrs, ctrl) {
        var range = ctrl.yearRange;
        ctrl.step = { years: range };
        ctrl.element = element;
        function getStartingYear(year) {
          return parseInt((year - 1) / range, 10) * range + 1;
        }
        ctrl._refreshView = function () {
          var years = new Array(range);
          for (var i = 0, start = getStartingYear(ctrl.activeDate.getFullYear()); i < range; i++) {
            years[i] = angular.extend(ctrl.createDateObject(new Date(start + i, 0, 1), ctrl.formatYear), { uid: scope.uniqueId + '-' + i });
          }
          scope.title = [
            years[0].label,
            years[range - 1].label
          ].join(' - ');
          scope.rows = ctrl.split(years, 5);
        };
        ctrl.compare = function (date1, date2) {
          return date1.getFullYear() - date2.getFullYear();
        };
        ctrl.handleKeyDown = function (key, evt) {
          var date = ctrl.activeDate.getFullYear();
          if (key === 'left') {
            date = date - 1;  // up
          } else if (key === 'up') {
            date = date - 5;  // down
          } else if (key === 'right') {
            date = date + 1;  // down
          } else if (key === 'down') {
            date = date + 5;
          } else if (key === 'pageup' || key === 'pagedown') {
            date += (key === 'pageup' ? -1 : 1) * ctrl.step.years;
          } else if (key === 'home') {
            date = getStartingYear(ctrl.activeDate.getFullYear());
          } else if (key === 'end') {
            date = getStartingYear(ctrl.activeDate.getFullYear()) + range - 1;
          }
          ctrl.activeDate.setFullYear(date);
        };
        ctrl.refreshView();
      }
    };
  }
]).constant('datepickerPopupConfig', {
  datepickerPopup: 'yyyy-MM-dd',
  currentText: 'Today',
  clearText: 'Clear',
  closeText: 'Done',
  closeOnDateSelection: true,
  appendToBody: false,
  showButtonBar: true
}).directive('datepickerPopup', [
  '$compile',
  '$parse',
  '$document',
  '$position',
  'dateFilter',
  'dateParser',
  'datepickerPopupConfig',
  function ($compile, $parse, $document, $position, dateFilter, dateParser, datepickerPopupConfig) {
    return {
      restrict: 'EA',
      require: 'ngModel',
      scope: {
        isOpen: '=?',
        currentText: '@',
        clearText: '@',
        closeText: '@',
        dateDisabled: '&'
      },
      link: function (scope, element, attrs, ngModel) {
        var dateFormat, closeOnDateSelection = angular.isDefined(attrs.closeOnDateSelection) ? scope.$parent.$eval(attrs.closeOnDateSelection) : datepickerPopupConfig.closeOnDateSelection, appendToBody = angular.isDefined(attrs.datepickerAppendToBody) ? scope.$parent.$eval(attrs.datepickerAppendToBody) : datepickerPopupConfig.appendToBody;
        scope.showButtonBar = angular.isDefined(attrs.showButtonBar) ? scope.$parent.$eval(attrs.showButtonBar) : datepickerPopupConfig.showButtonBar;
        scope.getText = function (key) {
          return scope[key + 'Text'] || datepickerPopupConfig[key + 'Text'];
        };
        attrs.$observe('datepickerPopup', function (value) {
          dateFormat = value || datepickerPopupConfig.datepickerPopup;
          ngModel.$render();
        });
        // popup element used to display calendar
        var popupEl = angular.element('<div datepicker-popup-wrap><div datepicker></div></div>');
        popupEl.attr({
          'ng-model': 'date',
          'ng-change': 'dateSelection()'
        });
        function cameltoDash(string) {
          return string.replace(/([A-Z])/g, function ($1) {
            return '-' + $1.toLowerCase();
          });
        }
        // datepicker element
        var datepickerEl = angular.element(popupEl.children()[0]);
        if (attrs.datepickerOptions) {
          angular.forEach(scope.$parent.$eval(attrs.datepickerOptions), function (value, option) {
            datepickerEl.attr(cameltoDash(option), value);
          });
        }
        angular.forEach([
          'minDate',
          'maxDate'
        ], function (key) {
          if (attrs[key]) {
            scope.$parent.$watch($parse(attrs[key]), function (value) {
              scope[key] = value;
            });
            datepickerEl.attr(cameltoDash(key), key);
          }
        });
        if (attrs.dateDisabled) {
          datepickerEl.attr('date-disabled', 'dateDisabled({ date: date, mode: mode })');
        }
        function parseDate(viewValue) {
          if (!viewValue) {
            ngModel.$setValidity('date', true);
            return null;
          } else if (angular.isDate(viewValue) && !isNaN(viewValue)) {
            ngModel.$setValidity('date', true);
            return viewValue;
          } else if (angular.isString(viewValue)) {
            var date = dateParser.parse(viewValue, dateFormat) || new Date(viewValue);
            if (isNaN(date)) {
              ngModel.$setValidity('date', false);
              return undefined;
            } else {
              ngModel.$setValidity('date', true);
              return date;
            }
          } else {
            ngModel.$setValidity('date', false);
            return undefined;
          }
        }
        ngModel.$parsers.unshift(parseDate);
        // Inner change
        scope.dateSelection = function (dt) {
          if (angular.isDefined(dt)) {
            scope.date = dt;
          }
          ngModel.$setViewValue(scope.date);
          ngModel.$render();
          if (closeOnDateSelection) {
            scope.isOpen = false;
            element[0].focus();
          }
        };
        element.bind('input change keyup', function () {
          scope.$apply(function () {
            scope.date = ngModel.$modelValue;
          });
        });
        // Outter change
        ngModel.$render = function () {
          var date = ngModel.$viewValue ? dateFilter(ngModel.$viewValue, dateFormat) : '';
          element.val(date);
          scope.date = parseDate(ngModel.$modelValue);
        };
        var documentClickBind = function (event) {
          if (scope.isOpen && event.target !== element[0]) {
            scope.$apply(function () {
              scope.isOpen = false;
            });
          }
        };
        var keydown = function (evt, noApply) {
          scope.keydown(evt);
        };
        element.bind('keydown', keydown);
        scope.keydown = function (evt) {
          if (evt.which === 27) {
            evt.preventDefault();
            evt.stopPropagation();
            scope.close();
          } else if (evt.which === 40 && !scope.isOpen) {
            scope.isOpen = true;
          }
        };
        scope.$watch('isOpen', function (value) {
          if (value) {
            scope.$broadcast('datepicker.focus');
            scope.position = appendToBody ? $position.offset(element) : $position.position(element);
            scope.position.top = scope.position.top + element.prop('offsetHeight');
            $document.bind('click', documentClickBind);
          } else {
            $document.unbind('click', documentClickBind);
          }
        });
        scope.select = function (date) {
          if (date === 'today') {
            var today = new Date();
            if (angular.isDate(ngModel.$modelValue)) {
              date = new Date(ngModel.$modelValue);
              date.setFullYear(today.getFullYear(), today.getMonth(), today.getDate());
            } else {
              date = new Date(today.setHours(0, 0, 0, 0));
            }
          }
          scope.dateSelection(date);
        };
        scope.close = function () {
          scope.isOpen = false;
          element[0].focus();
        };
        var $popup = $compile(popupEl)(scope);
        if (appendToBody) {
          $document.find('body').append($popup);
        } else {
          element.after($popup);
        }
        scope.$on('$destroy', function () {
          $popup.remove();
          element.unbind('keydown', keydown);
          $document.unbind('click', documentClickBind);
        });
      }
    };
  }
]).directive('datepickerPopupWrap', function () {
  return {
    restrict: 'EA',
    replace: true,
    transclude: true,
    templateUrl: 'template/datepicker/popup.html',
    link: function (scope, element, attrs) {
      element.bind('click', function (event) {
        event.preventDefault();
        event.stopPropagation();
      });
    }
  };
});
angular.module('ui.bootstrap.dropdown', []).constant('dropdownConfig', { openClass: 'open' }).service('dropdownService', [
  '$document',
  function ($document) {
    var openScope = null;
    this.open = function (dropdownScope) {
      if (!openScope) {
        $document.bind('click', closeDropdown);
        $document.bind('keydown', escapeKeyBind);
      }
      if (openScope && openScope !== dropdownScope) {
        openScope.isOpen = false;
      }
      openScope = dropdownScope;
    };
    this.close = function (dropdownScope) {
      if (openScope === dropdownScope) {
        openScope = null;
        $document.unbind('click', closeDropdown);
        $document.unbind('keydown', escapeKeyBind);
      }
    };
    var closeDropdown = function (evt) {
      if (evt && evt.isDefaultPrevented()) {
        return;
      }
      openScope.$apply(function () {
        openScope.isOpen = false;
      });
    };
    var escapeKeyBind = function (evt) {
      if (evt.which === 27) {
        openScope.focusToggleElement();
        closeDropdown();
      }
    };
  }
]).controller('DropdownController', [
  '$scope',
  '$attrs',
  '$parse',
  'dropdownConfig',
  'dropdownService',
  '$animate',
  function ($scope, $attrs, $parse, dropdownConfig, dropdownService, $animate) {
    var self = this, scope = $scope.$new(),
      // create a child scope so we are not polluting original one
      openClass = dropdownConfig.openClass, getIsOpen, setIsOpen = angular.noop, toggleInvoker = $attrs.onToggle ? $parse($attrs.onToggle) : angular.noop;
    this.init = function (element) {
      self.$element = element;
      if ($attrs.isOpen) {
        getIsOpen = $parse($attrs.isOpen);
        setIsOpen = getIsOpen.assign;
        $scope.$watch(getIsOpen, function (value) {
          scope.isOpen = !!value;
        });
      }
    };
    this.toggle = function (open) {
      return scope.isOpen = arguments.length ? !!open : !scope.isOpen;
    };
    // Allow other directives to watch status
    this.isOpen = function () {
      return scope.isOpen;
    };
    scope.focusToggleElement = function () {
      if (self.toggleElement) {
        self.toggleElement[0].focus();
      }
    };
    scope.$watch('isOpen', function (isOpen, wasOpen) {
      $animate[isOpen ? 'addClass' : 'removeClass'](self.$element, openClass);
      if (isOpen) {
        scope.focusToggleElement();
        dropdownService.open(scope);
      } else {
        dropdownService.close(scope);
      }
      setIsOpen($scope, isOpen);
      if (angular.isDefined(isOpen) && isOpen !== wasOpen) {
        toggleInvoker($scope, { open: !!isOpen });
      }
    });
    $scope.$on('$locationChangeSuccess', function () {
      scope.isOpen = false;
    });
    $scope.$on('$destroy', function () {
      scope.$destroy();
    });
  }
]).directive('dropdown', function () {
  return {
    restrict: 'CA',
    controller: 'DropdownController',
    link: function (scope, element, attrs, dropdownCtrl) {
      dropdownCtrl.init(element);
    }
  };
}).directive('dropdownToggle', function () {
  return {
    restrict: 'CA',
    require: '?^dropdown',
    link: function (scope, element, attrs, dropdownCtrl) {
      if (!dropdownCtrl) {
        return;
      }
      dropdownCtrl.toggleElement = element;
      var toggleDropdown = function (event) {
        event.preventDefault();
        if (!element.hasClass('disabled') && !attrs.disabled) {
          scope.$apply(function () {
            dropdownCtrl.toggle();
          });
        }
      };
      element.bind('click', toggleDropdown);
      // WAI-ARIA
      element.attr({
        'aria-haspopup': true,
        'aria-expanded': false
      });
      scope.$watch(dropdownCtrl.isOpen, function (isOpen) {
        element.attr('aria-expanded', !!isOpen);
      });
      scope.$on('$destroy', function () {
        element.unbind('click', toggleDropdown);
      });
    }
  };
});
angular.module('ui.bootstrap.modal', ['ui.bootstrap.transition']).factory('$$stackedMap', function () {
  return {
    createNew: function () {
      var stack = [];
      return {
        add: function (key, value) {
          stack.push({
            key: key,
            value: value
          });
        },
        get: function (key) {
          for (var i = 0; i < stack.length; i++) {
            if (key == stack[i].key) {
              return stack[i];
            }
          }
        },
        keys: function () {
          var keys = [];
          for (var i = 0; i < stack.length; i++) {
            keys.push(stack[i].key);
          }
          return keys;
        },
        top: function () {
          return stack[stack.length - 1];
        },
        remove: function (key) {
          var idx = -1;
          for (var i = 0; i < stack.length; i++) {
            if (key == stack[i].key) {
              idx = i;
              break;
            }
          }
          return stack.splice(idx, 1)[0];
        },
        removeTop: function () {
          return stack.splice(stack.length - 1, 1)[0];
        },
        length: function () {
          return stack.length;
        }
      };
    }
  };
}).directive('modalBackdrop', [
  '$timeout',
  function ($timeout) {
    return {
      restrict: 'EA',
      replace: true,
      templateUrl: 'template/modal/backdrop.html',
      link: function (scope) {
        scope.animate = false;
        //trigger CSS transitions
        $timeout(function () {
          scope.animate = true;
        });
      }
    };
  }
]).directive('modalWindow', [
  '$modalStack',
  '$timeout',
  function ($modalStack, $timeout) {
    return {
      restrict: 'EA',
      scope: {
        index: '@',
        animate: '='
      },
      replace: true,
      transclude: true,
      templateUrl: function (tElement, tAttrs) {
        return tAttrs.templateUrl || 'template/modal/window.html';
      },
      link: function (scope, element, attrs) {
        element.addClass(attrs.windowClass || '');
        scope.size = attrs.size;
        $timeout(function () {
          // trigger CSS transitions
          scope.animate = true;
          // focus a freshly-opened modal
          element[0].focus();
        });
        scope.close = function (evt) {
          var modal = $modalStack.getTop();
          if (modal && modal.value.backdrop && modal.value.backdrop != 'static' && evt.target === evt.currentTarget) {
            evt.preventDefault();
            evt.stopPropagation();
            $modalStack.dismiss(modal.key, 'backdrop click');
          }
        };
      }
    };
  }
]).factory('$modalStack', [
  '$transition',
  '$timeout',
  '$document',
  '$compile',
  '$rootScope',
  '$$stackedMap',
  function ($transition, $timeout, $document, $compile, $rootScope, $$stackedMap) {
    var OPENED_MODAL_CLASS = 'modal-open';
    var backdropDomEl, backdropScope;
    var openedWindows = $$stackedMap.createNew();
    var $modalStack = {};
    function backdropIndex() {
      var topBackdropIndex = -1;
      var opened = openedWindows.keys();
      for (var i = 0; i < opened.length; i++) {
        if (openedWindows.get(opened[i]).value.backdrop) {
          topBackdropIndex = i;
        }
      }
      return topBackdropIndex;
    }
    $rootScope.$watch(backdropIndex, function (newBackdropIndex) {
      if (backdropScope) {
        backdropScope.index = newBackdropIndex;
      }
    });
    function removeModalWindow(modalInstance) {
      var body = $document.find('body').eq(0);
      var modalWindow = openedWindows.get(modalInstance).value;
      //clean up the stack
      openedWindows.remove(modalInstance);
      //remove window DOM element
      removeAfterAnimate(modalWindow.modalDomEl, modalWindow.modalScope, 300, function () {
        modalWindow.modalScope.$destroy();
        body.toggleClass(OPENED_MODAL_CLASS, openedWindows.length() > 0);
        checkRemoveBackdrop();
      });
    }
    function checkRemoveBackdrop() {
      //remove backdrop if no longer needed
      if (backdropDomEl && backdropIndex() == -1) {
        var backdropScopeRef = backdropScope;
        removeAfterAnimate(backdropDomEl, backdropScope, 150, function () {
          backdropScopeRef.$destroy();
          backdropScopeRef = null;
        });
        backdropDomEl = undefined;
        backdropScope = undefined;
      }
    }
    function removeAfterAnimate(domEl, scope, emulateTime, done) {
      // Closing animation
      scope.animate = false;
      var transitionEndEventName = $transition.transitionEndEventName;
      if (transitionEndEventName) {
        // transition out
        var timeout = $timeout(afterAnimating, emulateTime);
        domEl.bind(transitionEndEventName, function () {
          $timeout.cancel(timeout);
          afterAnimating();
          scope.$apply();
        });
      } else {
        // Ensure this call is async
        $timeout(afterAnimating, 0);
      }
      function afterAnimating() {
        if (afterAnimating.done) {
          return;
        }
        afterAnimating.done = true;
        domEl.remove();
        if (done) {
          done();
        }
      }
    }
    $document.bind('keydown', function (evt) {
      var modal;
      if (evt.which === 27) {
        modal = openedWindows.top();
        if (modal && modal.value.keyboard) {
          evt.preventDefault();
          $rootScope.$apply(function () {
            $modalStack.dismiss(modal.key, 'escape key press');
          });
        }
      }
    });
    $modalStack.open = function (modalInstance, modal) {
      openedWindows.add(modalInstance, {
        deferred: modal.deferred,
        modalScope: modal.scope,
        backdrop: modal.backdrop,
        keyboard: modal.keyboard
      });
      var body = $document.find('body').eq(0), currBackdropIndex = backdropIndex();
      if (currBackdropIndex >= 0 && !backdropDomEl) {
        backdropScope = $rootScope.$new(true);
        backdropScope.index = currBackdropIndex;
        backdropDomEl = $compile('<div modal-backdrop></div>')(backdropScope);
        body.append(backdropDomEl);
      }
      var angularDomEl = angular.element('<div modal-window></div>');
      angularDomEl.attr({
        'template-url': modal.windowTemplateUrl,
        'window-class': modal.windowClass,
        'size': modal.size,
        'index': openedWindows.length() - 1,
        'animate': 'animate'
      }).html(modal.content);
      var modalDomEl = $compile(angularDomEl)(modal.scope);
      openedWindows.top().value.modalDomEl = modalDomEl;
      body.append(modalDomEl);
      body.addClass(OPENED_MODAL_CLASS);
    };
    $modalStack.close = function (modalInstance, result) {
      var modalWindow = openedWindows.get(modalInstance).value;
      if (modalWindow) {
        modalWindow.deferred.resolve(result);
        removeModalWindow(modalInstance);
      }
    };
    $modalStack.dismiss = function (modalInstance, reason) {
      var modalWindow = openedWindows.get(modalInstance).value;
      if (modalWindow) {
        modalWindow.deferred.reject(reason);
        removeModalWindow(modalInstance);
      }
    };
    $modalStack.dismissAll = function (reason) {
      var topModal = this.getTop();
      while (topModal) {
        this.dismiss(topModal.key, reason);
        topModal = this.getTop();
      }
    };
    $modalStack.getTop = function () {
      return openedWindows.top();
    };
    return $modalStack;
  }
]).provider('$modal', function () {
  var $modalProvider = {
      options: {
        backdrop: true,
        keyboard: true
      },
      $get: [
        '$injector',
        '$rootScope',
        '$q',
        '$http',
        '$templateCache',
        '$controller',
        '$modalStack',
        function ($injector, $rootScope, $q, $http, $templateCache, $controller, $modalStack) {
          var $modal = {};
          function getTemplatePromise(options) {
            return options.template ? $q.when(options.template) : $http.get(options.templateUrl, { cache: $templateCache }).then(function (result) {
              return result.data;
            });
          }
          function getResolvePromises(resolves) {
            var promisesArr = [];
            angular.forEach(resolves, function (value, key) {
              if (angular.isFunction(value) || angular.isArray(value)) {
                promisesArr.push($q.when($injector.invoke(value)));
              }
            });
            return promisesArr;
          }
          $modal.open = function (modalOptions) {
            var modalResultDeferred = $q.defer();
            var modalOpenedDeferred = $q.defer();
            //prepare an instance of a modal to be injected into controllers and returned to a caller
            var modalInstance = {
                result: modalResultDeferred.promise,
                opened: modalOpenedDeferred.promise,
                close: function (result) {
                  $modalStack.close(modalInstance, result);
                },
                dismiss: function (reason) {
                  $modalStack.dismiss(modalInstance, reason);
                }
              };
            //merge and clean up options
            modalOptions = angular.extend({}, $modalProvider.options, modalOptions);
            modalOptions.resolve = modalOptions.resolve || {};
            //verify options
            if (!modalOptions.template && !modalOptions.templateUrl) {
              throw new Error('One of template or templateUrl options is required.');
            }
            var templateAndResolvePromise = $q.all([getTemplatePromise(modalOptions)].concat(getResolvePromises(modalOptions.resolve)));
            templateAndResolvePromise.then(function resolveSuccess(tplAndVars) {
              var modalScope = (modalOptions.scope || $rootScope).$new();
              modalScope.$close = modalInstance.close;
              modalScope.$dismiss = modalInstance.dismiss;
              var ctrlInstance, ctrlLocals = {};
              var resolveIter = 1;
              //controllers
              if (modalOptions.controller) {
                ctrlLocals.$scope = modalScope;
                ctrlLocals.$modalInstance = modalInstance;
                angular.forEach(modalOptions.resolve, function (value, key) {
                  ctrlLocals[key] = tplAndVars[resolveIter++];
                });
                ctrlInstance = $controller(modalOptions.controller, ctrlLocals);
              }
              $modalStack.open(modalInstance, {
                scope: modalScope,
                deferred: modalResultDeferred,
                content: tplAndVars[0],
                backdrop: modalOptions.backdrop,
                keyboard: modalOptions.keyboard,
                windowClass: modalOptions.windowClass,
                windowTemplateUrl: modalOptions.windowTemplateUrl,
                size: modalOptions.size
              });
            }, function resolveError(reason) {
              modalResultDeferred.reject(reason);
            });
            templateAndResolvePromise.then(function () {
              modalOpenedDeferred.resolve(true);
            }, function () {
              modalOpenedDeferred.reject(false);
            });
            return modalInstance;
          };
          return $modal;
        }
      ]
    };
  return $modalProvider;
});
angular.module('ui.bootstrap.pagination', []).controller('PaginationController', [
  '$scope',
  '$attrs',
  '$parse',
  function ($scope, $attrs, $parse) {
    var self = this, ngModelCtrl = { $setViewValue: angular.noop },
      // nullModelCtrl
      setNumPages = $attrs.numPages ? $parse($attrs.numPages).assign : angular.noop;
    this.init = function (ngModelCtrl_, config) {
      ngModelCtrl = ngModelCtrl_;
      this.config = config;
      ngModelCtrl.$render = function () {
        self.render();
      };
      if ($attrs.itemsPerPage) {
        $scope.$parent.$watch($parse($attrs.itemsPerPage), function (value) {
          self.itemsPerPage = parseInt(value, 10);
          $scope.totalPages = self.calculateTotalPages();
        });
      } else {
        this.itemsPerPage = config.itemsPerPage;
      }
    };
    this.calculateTotalPages = function () {
      var totalPages = this.itemsPerPage < 1 ? 1 : Math.ceil($scope.totalItems / this.itemsPerPage);
      return Math.max(totalPages || 0, 1);
    };
    this.render = function () {
      $scope.page = parseInt(ngModelCtrl.$viewValue, 10) || 1;
    };
    $scope.selectPage = function (page) {
      if ($scope.page !== page && page > 0 && page <= $scope.totalPages) {
        ngModelCtrl.$setViewValue(page);
        ngModelCtrl.$render();
      }
    };
    $scope.getText = function (key) {
      return $scope[key + 'Text'] || self.config[key + 'Text'];
    };
    $scope.noPrevious = function () {
      return $scope.page === 1;
    };
    $scope.noNext = function () {
      return $scope.page === $scope.totalPages;
    };
    $scope.$watch('totalItems', function () {
      $scope.totalPages = self.calculateTotalPages();
    });
    $scope.$watch('totalPages', function (value) {
      setNumPages($scope.$parent, value);
      // Readonly variable
      if ($scope.page > value) {
        $scope.selectPage(value);
      } else {
        ngModelCtrl.$render();
      }
    });
  }
]).constant('paginationConfig', {
  itemsPerPage: 10,
  boundaryLinks: false,
  directionLinks: true,
  firstText: 'First',
  previousText: 'Previous',
  nextText: 'Next',
  lastText: 'Last',
  rotate: true
}).directive('pagination', [
  '$parse',
  'paginationConfig',
  function ($parse, paginationConfig) {
    return {
      restrict: 'EA',
      scope: {
        totalItems: '=',
        firstText: '@',
        previousText: '@',
        nextText: '@',
        lastText: '@'
      },
      require: [
        'pagination',
        '?ngModel'
      ],
      controller: 'PaginationController',
      templateUrl: 'template/pagination/pagination.html',
      replace: true,
      link: function (scope, element, attrs, ctrls) {
        var paginationCtrl = ctrls[0], ngModelCtrl = ctrls[1];
        if (!ngModelCtrl) {
          return;  // do nothing if no ng-model
        }
        // Setup configuration parameters
        var maxSize = angular.isDefined(attrs.maxSize) ? scope.$parent.$eval(attrs.maxSize) : paginationConfig.maxSize, rotate = angular.isDefined(attrs.rotate) ? scope.$parent.$eval(attrs.rotate) : paginationConfig.rotate;
        scope.boundaryLinks = angular.isDefined(attrs.boundaryLinks) ? scope.$parent.$eval(attrs.boundaryLinks) : paginationConfig.boundaryLinks;
        scope.directionLinks = angular.isDefined(attrs.directionLinks) ? scope.$parent.$eval(attrs.directionLinks) : paginationConfig.directionLinks;
        paginationCtrl.init(ngModelCtrl, paginationConfig);
        if (attrs.maxSize) {
          scope.$parent.$watch($parse(attrs.maxSize), function (value) {
            maxSize = parseInt(value, 10);
            paginationCtrl.render();
          });
        }
        // Create page object used in template
        function makePage(number, text, isActive) {
          return {
            number: number,
            text: text,
            active: isActive
          };
        }
        function getPages(currentPage, totalPages) {
          var pages = [];
          // Default page limits
          var startPage = 1, endPage = totalPages;
          var isMaxSized = angular.isDefined(maxSize) && maxSize < totalPages;
          // recompute if maxSize
          if (isMaxSized) {
            if (rotate) {
              // Current page is displayed in the middle of the visible ones
              startPage = Math.max(currentPage - Math.floor(maxSize / 2), 1);
              endPage = startPage + maxSize - 1;
              // Adjust if limit is exceeded
              if (endPage > totalPages) {
                endPage = totalPages;
                startPage = endPage - maxSize + 1;
              }
            } else {
              // Visible pages are paginated with maxSize
              startPage = (Math.ceil(currentPage / maxSize) - 1) * maxSize + 1;
              // Adjust last page if limit is exceeded
              endPage = Math.min(startPage + maxSize - 1, totalPages);
            }
          }
          // Add page number links
          for (var number = startPage; number <= endPage; number++) {
            var page = makePage(number, number, number === currentPage);
            pages.push(page);
          }
          // Add links to move between page sets
          if (isMaxSized && !rotate) {
            if (startPage > 1) {
              var previousPageSet = makePage(startPage - 1, '...', false);
              pages.unshift(previousPageSet);
            }
            if (endPage < totalPages) {
              var nextPageSet = makePage(endPage + 1, '...', false);
              pages.push(nextPageSet);
            }
          }
          return pages;
        }
        var originalRender = paginationCtrl.render;
        paginationCtrl.render = function () {
          originalRender();
          if (scope.page > 0 && scope.page <= scope.totalPages) {
            scope.pages = getPages(scope.page, scope.totalPages);
          }
        };
      }
    };
  }
]).constant('pagerConfig', {
  itemsPerPage: 10,
  previousText: '\xab Previous',
  nextText: 'Next \xbb',
  align: true
}).directive('pager', [
  'pagerConfig',
  function (pagerConfig) {
    return {
      restrict: 'EA',
      scope: {
        totalItems: '=',
        previousText: '@',
        nextText: '@'
      },
      require: [
        'pager',
        '?ngModel'
      ],
      controller: 'PaginationController',
      templateUrl: 'template/pagination/pager.html',
      replace: true,
      link: function (scope, element, attrs, ctrls) {
        var paginationCtrl = ctrls[0], ngModelCtrl = ctrls[1];
        if (!ngModelCtrl) {
          return;  // do nothing if no ng-model
        }
        scope.align = angular.isDefined(attrs.align) ? scope.$parent.$eval(attrs.align) : pagerConfig.align;
        paginationCtrl.init(ngModelCtrl, pagerConfig);
      }
    };
  }
]);
/**
 * The following features are still outstanding: animation as a
 * function, placement as a function, inside, support for more triggers than
 * just mouse enter/leave, html tooltips, and selector delegation.
 */
angular.module('ui.bootstrap.tooltip', [
  'ui.bootstrap.position',
  'ui.bootstrap.bindHtml'
]).provider('$tooltip', function () {
  // The default options tooltip and popover.
  var defaultOptions = {
      placement: 'top',
      animation: true,
      popupDelay: 0
    };
  // Default hide triggers for each show trigger
  var triggerMap = {
      'mouseenter': 'mouseleave',
      'click': 'click',
      'focus': 'blur'
    };
  // The options specified to the provider globally.
  var globalOptions = {};
  /**
   * `options({})` allows global configuration of all tooltips in the
   * application.
   *
   *   var app = angular.module( 'App', ['ui.bootstrap.tooltip'], function( $tooltipProvider ) {
   *     // place tooltips left instead of top by default
   *     $tooltipProvider.options( { placement: 'left' } );
   *   });
   */
  this.options = function (value) {
    angular.extend(globalOptions, value);
  };
  /**
   * This allows you to extend the set of trigger mappings available. E.g.:
   *
   *   $tooltipProvider.setTriggers( 'openTrigger': 'closeTrigger' );
   */
  this.setTriggers = function setTriggers(triggers) {
    angular.extend(triggerMap, triggers);
  };
  /**
   * This is a helper function for translating camel-case to snake-case.
   */
  function snake_case(name) {
    var regexp = /[A-Z]/g;
    var separator = '-';
    return name.replace(regexp, function (letter, pos) {
      return (pos ? separator : '') + letter.toLowerCase();
    });
  }
  /**
   * Returns the actual instance of the $tooltip service.
   * TODO support multiple triggers
   */
  this.$get = [
    '$window',
    '$compile',
    '$timeout',
    '$parse',
    '$document',
    '$position',
    '$interpolate',
    function ($window, $compile, $timeout, $parse, $document, $position, $interpolate) {
      return function $tooltip(type, prefix, defaultTriggerShow) {
        var options = angular.extend({}, defaultOptions, globalOptions);
        /**
       * Returns an object of show and hide triggers.
       *
       * If a trigger is supplied,
       * it is used to show the tooltip; otherwise, it will use the `trigger`
       * option passed to the `$tooltipProvider.options` method; else it will
       * default to the trigger supplied to this directive factory.
       *
       * The hide trigger is based on the show trigger. If the `trigger` option
       * was passed to the `$tooltipProvider.options` method, it will use the
       * mapped trigger from `triggerMap` or the passed trigger if the map is
       * undefined; otherwise, it uses the `triggerMap` value of the show
       * trigger; else it will just use the show trigger.
       */
        function getTriggers(trigger) {
          var show = trigger || options.trigger || defaultTriggerShow;
          var hide = triggerMap[show] || show;
          return {
            show: show,
            hide: hide
          };
        }
        var directiveName = snake_case(type);
        var startSym = $interpolate.startSymbol();
        var endSym = $interpolate.endSymbol();
        var template = '<div ' + directiveName + '-popup ' + 'title="' + startSym + 'tt_title' + endSym + '" ' + 'content="' + startSym + 'tt_content' + endSym + '" ' + 'placement="' + startSym + 'tt_placement' + endSym + '" ' + 'animation="tt_animation" ' + 'is-open="tt_isOpen"' + '>' + '</div>';
        return {
          restrict: 'EA',
          scope: true,
          compile: function (tElem, tAttrs) {
            var tooltipLinker = $compile(template);
            return function link(scope, element, attrs) {
              var tooltip;
              var transitionTimeout;
              var popupTimeout;
              var appendToBody = angular.isDefined(options.appendToBody) ? options.appendToBody : false;
              var triggers = getTriggers(undefined);
              var hasEnableExp = angular.isDefined(attrs[prefix + 'Enable']);
              var positionTooltip = function () {
                var ttPosition = $position.positionElements(element, tooltip, scope.tt_placement, appendToBody);
                ttPosition.top += 'px';
                ttPosition.left += 'px';
                // Now set the calculated positioning.
                tooltip.css(ttPosition);
              };
              // By default, the tooltip is not open.
              // TODO add ability to start tooltip opened
              scope.tt_isOpen = false;
              function toggleTooltipBind() {
                if (!scope.tt_isOpen) {
                  showTooltipBind();
                } else {
                  hideTooltipBind();
                }
              }
              // Show the tooltip with delay if specified, otherwise show it immediately
              function showTooltipBind() {
                if (hasEnableExp && !scope.$eval(attrs[prefix + 'Enable'])) {
                  return;
                }
                if (scope.tt_popupDelay) {
                  // Do nothing if the tooltip was already scheduled to pop-up.
                  // This happens if show is triggered multiple times before any hide is triggered.
                  if (!popupTimeout) {
                    popupTimeout = $timeout(show, scope.tt_popupDelay, false);
                    popupTimeout.then(function (reposition) {
                      reposition();
                    });
                  }
                } else {
                  show()();
                }
              }
              function hideTooltipBind() {
                scope.$apply(function () {
                  hide();
                });
              }
              // Show the tooltip popup element.
              function show() {
                popupTimeout = null;
                // If there is a pending remove transition, we must cancel it, lest the
                // tooltip be mysteriously removed.
                if (transitionTimeout) {
                  $timeout.cancel(transitionTimeout);
                  transitionTimeout = null;
                }
                // Don't show empty tooltips.
                if (!scope.tt_content) {
                  return angular.noop;
                }
                createTooltip();
                // Set the initial positioning.
                tooltip.css({
                  top: 0,
                  left: 0,
                  display: 'block'
                });
                // Now we add it to the DOM because need some info about it. But it's not 
                // visible yet anyway.
                if (appendToBody) {
                  $document.find('body').append(tooltip);
                } else {
                  element.after(tooltip);
                }
                positionTooltip();
                // And show the tooltip.
                scope.tt_isOpen = true;
                scope.$digest();
                // digest required as $apply is not called
                // Return positioning function as promise callback for correct
                // positioning after draw.
                return positionTooltip;
              }
              // Hide the tooltip popup element.
              function hide() {
                // First things first: we don't show it anymore.
                scope.tt_isOpen = false;
                //if tooltip is going to be shown after delay, we must cancel this
                $timeout.cancel(popupTimeout);
                popupTimeout = null;
                // And now we remove it from the DOM. However, if we have animation, we 
                // need to wait for it to expire beforehand.
                // FIXME: this is a placeholder for a port of the transitions library.
                if (scope.tt_animation) {
                  if (!transitionTimeout) {
                    transitionTimeout = $timeout(removeTooltip, 500);
                  }
                } else {
                  removeTooltip();
                }
              }
              function createTooltip() {
                // There can only be one tooltip element per directive shown at once.
                if (tooltip) {
                  removeTooltip();
                }
                tooltip = tooltipLinker(scope, function () {
                });
                // Get contents rendered into the tooltip
                scope.$digest();
              }
              function removeTooltip() {
                transitionTimeout = null;
                if (tooltip) {
                  tooltip.remove();
                  tooltip = null;
                }
              }
              /**
             * Observe the relevant attributes.
             */
              attrs.$observe(type, function (val) {
                scope.tt_content = val;
                if (!val && scope.tt_isOpen) {
                  hide();
                }
              });
              attrs.$observe(prefix + 'Title', function (val) {
                scope.tt_title = val;
              });
              attrs.$observe(prefix + 'Placement', function (val) {
                scope.tt_placement = angular.isDefined(val) ? val : options.placement;
              });
              attrs.$observe(prefix + 'PopupDelay', function (val) {
                var delay = parseInt(val, 10);
                scope.tt_popupDelay = !isNaN(delay) ? delay : options.popupDelay;
              });
              var unregisterTriggers = function () {
                element.unbind(triggers.show, showTooltipBind);
                element.unbind(triggers.hide, hideTooltipBind);
              };
              attrs.$observe(prefix + 'Trigger', function (val) {
                unregisterTriggers();
                triggers = getTriggers(val);
                if (triggers.show === triggers.hide) {
                  element.bind(triggers.show, toggleTooltipBind);
                } else {
                  element.bind(triggers.show, showTooltipBind);
                  element.bind(triggers.hide, hideTooltipBind);
                }
              });
              var animation = scope.$eval(attrs[prefix + 'Animation']);
              scope.tt_animation = angular.isDefined(animation) ? !!animation : options.animation;
              attrs.$observe(prefix + 'AppendToBody', function (val) {
                appendToBody = angular.isDefined(val) ? $parse(val)(scope) : appendToBody;
              });
              // if a tooltip is attached to <body> we need to remove it on
              // location change as its parent scope will probably not be destroyed
              // by the change.
              if (appendToBody) {
                scope.$on('$locationChangeSuccess', function closeTooltipOnLocationChangeSuccess() {
                  if (scope.tt_isOpen) {
                    hide();
                  }
                });
              }
              // Make sure tooltip is destroyed and removed.
              scope.$on('$destroy', function onDestroyTooltip() {
                $timeout.cancel(transitionTimeout);
                $timeout.cancel(popupTimeout);
                unregisterTriggers();
                removeTooltip();
              });
            };
          }
        };
      };
    }
  ];
}).directive('tooltipPopup', function () {
  return {
    restrict: 'EA',
    replace: true,
    scope: {
      content: '@',
      placement: '@',
      animation: '&',
      isOpen: '&'
    },
    templateUrl: 'template/tooltip/tooltip-popup.html'
  };
}).directive('tooltip', [
  '$tooltip',
  function ($tooltip) {
    return $tooltip('tooltip', 'tooltip', 'mouseenter');
  }
]).directive('tooltipHtmlUnsafePopup', function () {
  return {
    restrict: 'EA',
    replace: true,
    scope: {
      content: '@',
      placement: '@',
      animation: '&',
      isOpen: '&'
    },
    templateUrl: 'template/tooltip/tooltip-html-unsafe-popup.html'
  };
}).directive('tooltipHtmlUnsafe', [
  '$tooltip',
  function ($tooltip) {
    return $tooltip('tooltipHtmlUnsafe', 'tooltip', 'mouseenter');
  }
]);
/**
 * The following features are still outstanding: popup delay, animation as a
 * function, placement as a function, inside, support for more triggers than
 * just mouse enter/leave, html popovers, and selector delegatation.
 */
angular.module('ui.bootstrap.popover', ['ui.bootstrap.tooltip']).directive('popoverPopup', function () {
  return {
    restrict: 'EA',
    replace: true,
    scope: {
      title: '@',
      content: '@',
      placement: '@',
      animation: '&',
      isOpen: '&'
    },
    templateUrl: 'template/popover/popover.html'
  };
}).directive('popover', [
  '$tooltip',
  function ($tooltip) {
    return $tooltip('popover', 'popover', 'click');
  }
]);
angular.module('ui.bootstrap.progressbar', []).constant('progressConfig', {
  animate: true,
  max: 100
}).controller('ProgressController', [
  '$scope',
  '$attrs',
  'progressConfig',
  function ($scope, $attrs, progressConfig) {
    var self = this, animate = angular.isDefined($attrs.animate) ? $scope.$parent.$eval($attrs.animate) : progressConfig.animate;
    this.bars = [];
    $scope.max = angular.isDefined($attrs.max) ? $scope.$parent.$eval($attrs.max) : progressConfig.max;
    this.addBar = function (bar, element) {
      if (!animate) {
        element.css({ 'transition': 'none' });
      }
      this.bars.push(bar);
      bar.$watch('value', function (value) {
        bar.percent = +(100 * value / $scope.max).toFixed(2);
      });
      bar.$on('$destroy', function () {
        element = null;
        self.removeBar(bar);
      });
    };
    this.removeBar = function (bar) {
      this.bars.splice(this.bars.indexOf(bar), 1);
    };
  }
]).directive('progress', function () {
  return {
    restrict: 'EA',
    replace: true,
    transclude: true,
    controller: 'ProgressController',
    require: 'progress',
    scope: {},
    templateUrl: 'template/progressbar/progress.html'
  };
}).directive('bar', function () {
  return {
    restrict: 'EA',
    replace: true,
    transclude: true,
    require: '^progress',
    scope: {
      value: '=',
      type: '@'
    },
    templateUrl: 'template/progressbar/bar.html',
    link: function (scope, element, attrs, progressCtrl) {
      progressCtrl.addBar(scope, element);
    }
  };
}).directive('progressbar', function () {
  return {
    restrict: 'EA',
    replace: true,
    transclude: true,
    controller: 'ProgressController',
    scope: {
      value: '=',
      type: '@'
    },
    templateUrl: 'template/progressbar/progressbar.html',
    link: function (scope, element, attrs, progressCtrl) {
      progressCtrl.addBar(scope, angular.element(element.children()[0]));
    }
  };
});
angular.module('ui.bootstrap.rating', []).constant('ratingConfig', {
  max: 5,
  stateOn: null,
  stateOff: null
}).controller('RatingController', [
  '$scope',
  '$attrs',
  'ratingConfig',
  function ($scope, $attrs, ratingConfig) {
    var ngModelCtrl = { $setViewValue: angular.noop };
    this.init = function (ngModelCtrl_) {
      ngModelCtrl = ngModelCtrl_;
      ngModelCtrl.$render = this.render;
      this.stateOn = angular.isDefined($attrs.stateOn) ? $scope.$parent.$eval($attrs.stateOn) : ratingConfig.stateOn;
      this.stateOff = angular.isDefined($attrs.stateOff) ? $scope.$parent.$eval($attrs.stateOff) : ratingConfig.stateOff;
      var ratingStates = angular.isDefined($attrs.ratingStates) ? $scope.$parent.$eval($attrs.ratingStates) : new Array(angular.isDefined($attrs.max) ? $scope.$parent.$eval($attrs.max) : ratingConfig.max);
      $scope.range = this.buildTemplateObjects(ratingStates);
    };
    this.buildTemplateObjects = function (states) {
      for (var i = 0, n = states.length; i < n; i++) {
        states[i] = angular.extend({ index: i }, {
          stateOn: this.stateOn,
          stateOff: this.stateOff
        }, states[i]);
      }
      return states;
    };
    $scope.rate = function (value) {
      if (!$scope.readonly && value >= 0 && value <= $scope.range.length) {
        ngModelCtrl.$setViewValue(value);
        ngModelCtrl.$render();
      }
    };
    $scope.enter = function (value) {
      if (!$scope.readonly) {
        $scope.value = value;
      }
      $scope.onHover({ value: value });
    };
    $scope.reset = function () {
      $scope.value = ngModelCtrl.$viewValue;
      $scope.onLeave();
    };
    $scope.onKeydown = function (evt) {
      if (/(37|38|39|40)/.test(evt.which)) {
        evt.preventDefault();
        evt.stopPropagation();
        $scope.rate($scope.value + (evt.which === 38 || evt.which === 39 ? 1 : -1));
      }
    };
    this.render = function () {
      $scope.value = ngModelCtrl.$viewValue;
    };
  }
]).directive('rating', function () {
  return {
    restrict: 'EA',
    require: [
      'rating',
      'ngModel'
    ],
    scope: {
      readonly: '=?',
      onHover: '&',
      onLeave: '&'
    },
    controller: 'RatingController',
    templateUrl: 'template/rating/rating.html',
    replace: true,
    link: function (scope, element, attrs, ctrls) {
      var ratingCtrl = ctrls[0], ngModelCtrl = ctrls[1];
      if (ngModelCtrl) {
        ratingCtrl.init(ngModelCtrl);
      }
    }
  };
});
/**
 * @ngdoc overview
 * @name ui.bootstrap.tabs
 *
 * @description
 * AngularJS version of the tabs directive.
 */
angular.module('ui.bootstrap.tabs', []).controller('TabsetController', [
  '$scope',
  function TabsetCtrl($scope) {
    var ctrl = this, tabs = ctrl.tabs = $scope.tabs = [];
    ctrl.select = function (selectedTab) {
      angular.forEach(tabs, function (tab) {
        if (tab.active && tab !== selectedTab) {
          tab.active = false;
          tab.onDeselect();
        }
      });
      selectedTab.active = true;
      selectedTab.onSelect();
    };
    ctrl.addTab = function addTab(tab) {
      tabs.push(tab);
      // we can't run the select function on the first tab
      // since that would select it twice
      if (tabs.length === 1) {
        tab.active = true;
      } else if (tab.active) {
        ctrl.select(tab);
      }
    };
    ctrl.removeTab = function removeTab(tab) {
      var index = tabs.indexOf(tab);
      //Select a new tab if the tab to be removed is selected
      if (tab.active && tabs.length > 1) {
        //If this is the last tab, select the previous tab. else, the next tab.
        var newActiveIndex = index == tabs.length - 1 ? index - 1 : index + 1;
        ctrl.select(tabs[newActiveIndex]);
      }
      tabs.splice(index, 1);
    };
  }
]).directive('tabset', function () {
  return {
    restrict: 'EA',
    transclude: true,
    replace: true,
    scope: { type: '@' },
    controller: 'TabsetController',
    templateUrl: 'template/tabs/tabset.html',
    link: function (scope, element, attrs) {
      scope.vertical = angular.isDefined(attrs.vertical) ? scope.$parent.$eval(attrs.vertical) : false;
      scope.justified = angular.isDefined(attrs.justified) ? scope.$parent.$eval(attrs.justified) : false;
    }
  };
}).directive('tab', [
  '$parse',
  function ($parse) {
    return {
      require: '^tabset',
      restrict: 'EA',
      replace: true,
      templateUrl: 'template/tabs/tab.html',
      transclude: true,
      scope: {
        active: '=?',
        heading: '@',
        onSelect: '&select',
        onDeselect: '&deselect'
      },
      controller: function () {
      },
      compile: function (elm, attrs, transclude) {
        return function postLink(scope, elm, attrs, tabsetCtrl) {
          scope.$watch('active', function (active) {
            if (active) {
              tabsetCtrl.select(scope);
            }
          });
          scope.disabled = false;
          if (attrs.disabled) {
            scope.$parent.$watch($parse(attrs.disabled), function (value) {
              scope.disabled = !!value;
            });
          }
          scope.select = function () {
            if (!scope.disabled) {
              scope.active = true;
            }
          };
          tabsetCtrl.addTab(scope);
          scope.$on('$destroy', function () {
            tabsetCtrl.removeTab(scope);
          });
          //We need to transclude later, once the content container is ready.
          //when this link happens, we're inside a tab heading.
          scope.$transcludeFn = transclude;
        };
      }
    };
  }
]).directive('tabHeadingTransclude', [function () {
    return {
      restrict: 'A',
      require: '^tab',
      link: function (scope, elm, attrs, tabCtrl) {
        scope.$watch('headingElement', function updateHeadingElement(heading) {
          if (heading) {
            elm.html('');
            elm.append(heading);
          }
        });
      }
    };
  }]).directive('tabContentTransclude', function () {
  return {
    restrict: 'A',
    require: '^tabset',
    link: function (scope, elm, attrs) {
      var tab = scope.$eval(attrs.tabContentTransclude);
      //Now our tab is ready to be transcluded: both the tab heading area
      //and the tab content area are loaded.  Transclude 'em both.
      tab.$transcludeFn(tab.$parent, function (contents) {
        angular.forEach(contents, function (node) {
          if (isTabHeading(node)) {
            //Let tabHeadingTransclude know.
            tab.headingElement = node;
          } else {
            elm.append(node);
          }
        });
      });
    }
  };
  function isTabHeading(node) {
    return node.tagName && (node.hasAttribute('tab-heading') || node.hasAttribute('data-tab-heading') || node.tagName.toLowerCase() === 'tab-heading' || node.tagName.toLowerCase() === 'data-tab-heading');
  }
});
;
angular.module('ui.bootstrap.timepicker', []).constant('timepickerConfig', {
  hourStep: 1,
  minuteStep: 1,
  showMeridian: true,
  meridians: null,
  readonlyInput: false,
  mousewheel: true
}).controller('TimepickerController', [
  '$scope',
  '$attrs',
  '$parse',
  '$log',
  '$locale',
  'timepickerConfig',
  function ($scope, $attrs, $parse, $log, $locale, timepickerConfig) {
    var selected = new Date(), ngModelCtrl = { $setViewValue: angular.noop },
      // nullModelCtrl
      meridians = angular.isDefined($attrs.meridians) ? $scope.$parent.$eval($attrs.meridians) : timepickerConfig.meridians || $locale.DATETIME_FORMATS.AMPMS;
    this.init = function (ngModelCtrl_, inputs) {
      ngModelCtrl = ngModelCtrl_;
      ngModelCtrl.$render = this.render;
      var hoursInputEl = inputs.eq(0), minutesInputEl = inputs.eq(1);
      var mousewheel = angular.isDefined($attrs.mousewheel) ? $scope.$parent.$eval($attrs.mousewheel) : timepickerConfig.mousewheel;
      if (mousewheel) {
        this.setupMousewheelEvents(hoursInputEl, minutesInputEl);
      }
      $scope.readonlyInput = angular.isDefined($attrs.readonlyInput) ? $scope.$parent.$eval($attrs.readonlyInput) : timepickerConfig.readonlyInput;
      this.setupInputEvents(hoursInputEl, minutesInputEl);
    };
    var hourStep = timepickerConfig.hourStep;
    if ($attrs.hourStep) {
      $scope.$parent.$watch($parse($attrs.hourStep), function (value) {
        hourStep = parseInt(value, 10);
      });
    }
    var minuteStep = timepickerConfig.minuteStep;
    if ($attrs.minuteStep) {
      $scope.$parent.$watch($parse($attrs.minuteStep), function (value) {
        minuteStep = parseInt(value, 10);
      });
    }
    // 12H / 24H mode
    $scope.showMeridian = timepickerConfig.showMeridian;
    if ($attrs.showMeridian) {
      $scope.$parent.$watch($parse($attrs.showMeridian), function (value) {
        $scope.showMeridian = !!value;
        if (ngModelCtrl.$error.time) {
          // Evaluate from template
          var hours = getHoursFromTemplate(), minutes = getMinutesFromTemplate();
          if (angular.isDefined(hours) && angular.isDefined(minutes)) {
            selected.setHours(hours);
            refresh();
          }
        } else {
          updateTemplate();
        }
      });
    }
    // Get $scope.hours in 24H mode if valid
    function getHoursFromTemplate() {
      var hours = parseInt($scope.hours, 10);
      var valid = $scope.showMeridian ? hours > 0 && hours < 13 : hours >= 0 && hours < 24;
      if (!valid) {
        return undefined;
      }
      if ($scope.showMeridian) {
        if (hours === 12) {
          hours = 0;
        }
        if ($scope.meridian === meridians[1]) {
          hours = hours + 12;
        }
      }
      return hours;
    }
    function getMinutesFromTemplate() {
      var minutes = parseInt($scope.minutes, 10);
      return minutes >= 0 && minutes < 60 ? minutes : undefined;
    }
    function pad(value) {
      return angular.isDefined(value) && value.toString().length < 2 ? '0' + value : value;
    }
    // Respond on mousewheel spin
    this.setupMousewheelEvents = function (hoursInputEl, minutesInputEl) {
      var isScrollingUp = function (e) {
        if (e.originalEvent) {
          e = e.originalEvent;
        }
        //pick correct delta variable depending on event
        var delta = e.wheelDelta ? e.wheelDelta : -e.deltaY;
        return e.detail || delta > 0;
      };
      hoursInputEl.bind('mousewheel wheel', function (e) {
        $scope.$apply(isScrollingUp(e) ? $scope.incrementHours() : $scope.decrementHours());
        e.preventDefault();
      });
      minutesInputEl.bind('mousewheel wheel', function (e) {
        $scope.$apply(isScrollingUp(e) ? $scope.incrementMinutes() : $scope.decrementMinutes());
        e.preventDefault();
      });
    };
    this.setupInputEvents = function (hoursInputEl, minutesInputEl) {
      if ($scope.readonlyInput) {
        $scope.updateHours = angular.noop;
        $scope.updateMinutes = angular.noop;
        return;
      }
      var invalidate = function (invalidHours, invalidMinutes) {
        ngModelCtrl.$setViewValue(null);
        ngModelCtrl.$setValidity('time', false);
        if (angular.isDefined(invalidHours)) {
          $scope.invalidHours = invalidHours;
        }
        if (angular.isDefined(invalidMinutes)) {
          $scope.invalidMinutes = invalidMinutes;
        }
      };
      $scope.updateHours = function () {
        var hours = getHoursFromTemplate();
        if (angular.isDefined(hours)) {
          selected.setHours(hours);
          refresh('h');
        } else {
          invalidate(true);
        }
      };
      hoursInputEl.bind('blur', function (e) {
        if (!$scope.invalidHours && $scope.hours < 10) {
          $scope.$apply(function () {
            $scope.hours = pad($scope.hours);
          });
        }
      });
      $scope.updateMinutes = function () {
        var minutes = getMinutesFromTemplate();
        if (angular.isDefined(minutes)) {
          selected.setMinutes(minutes);
          refresh('m');
        } else {
          invalidate(undefined, true);
        }
      };
      minutesInputEl.bind('blur', function (e) {
        if (!$scope.invalidMinutes && $scope.minutes < 10) {
          $scope.$apply(function () {
            $scope.minutes = pad($scope.minutes);
          });
        }
      });
    };
    this.render = function () {
      var date = ngModelCtrl.$modelValue ? new Date(ngModelCtrl.$modelValue) : null;
      if (isNaN(date)) {
        ngModelCtrl.$setValidity('time', false);
        $log.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.');
      } else {
        if (date) {
          selected = date;
        }
        makeValid();
        updateTemplate();
      }
    };
    // Call internally when we know that model is valid.
    function refresh(keyboardChange) {
      makeValid();
      ngModelCtrl.$setViewValue(new Date(selected));
      updateTemplate(keyboardChange);
    }
    function makeValid() {
      ngModelCtrl.$setValidity('time', true);
      $scope.invalidHours = false;
      $scope.invalidMinutes = false;
    }
    function updateTemplate(keyboardChange) {
      var hours = selected.getHours(), minutes = selected.getMinutes();
      if ($scope.showMeridian) {
        hours = hours === 0 || hours === 12 ? 12 : hours % 12;  // Convert 24 to 12 hour system
      }
      $scope.hours = keyboardChange === 'h' ? hours : pad(hours);
      $scope.minutes = keyboardChange === 'm' ? minutes : pad(minutes);
      $scope.meridian = selected.getHours() < 12 ? meridians[0] : meridians[1];
    }
    function addMinutes(minutes) {
      var dt = new Date(selected.getTime() + minutes * 60000);
      selected.setHours(dt.getHours(), dt.getMinutes());
      refresh();
    }
    $scope.incrementHours = function () {
      addMinutes(hourStep * 60);
    };
    $scope.decrementHours = function () {
      addMinutes(-hourStep * 60);
    };
    $scope.incrementMinutes = function () {
      addMinutes(minuteStep);
    };
    $scope.decrementMinutes = function () {
      addMinutes(-minuteStep);
    };
    $scope.toggleMeridian = function () {
      addMinutes(12 * 60 * (selected.getHours() < 12 ? 1 : -1));
    };
  }
]).directive('timepicker', function () {
  return {
    restrict: 'EA',
    require: [
      'timepicker',
      '?^ngModel'
    ],
    controller: 'TimepickerController',
    replace: true,
    scope: {},
    templateUrl: 'template/timepicker/timepicker.html',
    link: function (scope, element, attrs, ctrls) {
      var timepickerCtrl = ctrls[0], ngModelCtrl = ctrls[1];
      if (ngModelCtrl) {
        timepickerCtrl.init(ngModelCtrl, element.find('input'));
      }
    }
  };
});
angular.module('ui.bootstrap.typeahead', [
  'ui.bootstrap.position',
  'ui.bootstrap.bindHtml'
]).factory('typeaheadParser', [
  '$parse',
  function ($parse) {
    //                      00000111000000000000022200000000000000003333333333333330000000000044000
    var TYPEAHEAD_REGEXP = /^\s*(.*?)(?:\s+as\s+(.*?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+(.*)$/;
    return {
      parse: function (input) {
        var match = input.match(TYPEAHEAD_REGEXP);
        if (!match) {
          throw new Error('Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_"' + ' but got "' + input + '".');
        }
        return {
          itemName: match[3],
          source: $parse(match[4]),
          viewMapper: $parse(match[2] || match[1]),
          modelMapper: $parse(match[1])
        };
      }
    };
  }
]).directive('typeahead', [
  '$compile',
  '$parse',
  '$q',
  '$timeout',
  '$document',
  '$position',
  'typeaheadParser',
  function ($compile, $parse, $q, $timeout, $document, $position, typeaheadParser) {
    var HOT_KEYS = [
        9,
        13,
        27,
        38,
        40
      ];
    return {
      require: 'ngModel',
      link: function (originalScope, element, attrs, modelCtrl) {
        //SUPPORTED ATTRIBUTES (OPTIONS)
        //minimal no of characters that needs to be entered before typeahead kicks-in
        var minSearch = originalScope.$eval(attrs.typeaheadMinLength) || 1;
        //minimal wait time after last character typed before typehead kicks-in
        var waitTime = originalScope.$eval(attrs.typeaheadWaitMs) || 0;
        //should it restrict model values to the ones selected from the popup only?
        var isEditable = originalScope.$eval(attrs.typeaheadEditable) !== false;
        //binding to a variable that indicates if matches are being retrieved asynchronously
        var isLoadingSetter = $parse(attrs.typeaheadLoading).assign || angular.noop;
        //a callback executed when a match is selected
        var onSelectCallback = $parse(attrs.typeaheadOnSelect);
        var inputFormatter = attrs.typeaheadInputFormatter ? $parse(attrs.typeaheadInputFormatter) : undefined;
        var appendToBody = attrs.typeaheadAppendToBody ? originalScope.$eval(attrs.typeaheadAppendToBody) : false;
        //INTERNAL VARIABLES
        //model setter executed upon match selection
        var $setModelValue = $parse(attrs.ngModel).assign;
        //expressions used by typeahead
        var parserResult = typeaheadParser.parse(attrs.typeahead);
        var hasFocus;
        //create a child scope for the typeahead directive so we are not polluting original scope
        //with typeahead-specific data (matches, query etc.)
        var scope = originalScope.$new();
        originalScope.$on('$destroy', function () {
          scope.$destroy();
        });
        // WAI-ARIA
        var popupId = 'typeahead-' + scope.$id + '-' + Math.floor(Math.random() * 10000);
        element.attr({
          'aria-autocomplete': 'list',
          'aria-expanded': false,
          'aria-owns': popupId
        });
        //pop-up element used to display matches
        var popUpEl = angular.element('<div typeahead-popup></div>');
        popUpEl.attr({
          id: popupId,
          matches: 'matches',
          active: 'activeIdx',
          select: 'select(activeIdx)',
          query: 'query',
          position: 'position'
        });
        //custom item template
        if (angular.isDefined(attrs.typeaheadTemplateUrl)) {
          popUpEl.attr('template-url', attrs.typeaheadTemplateUrl);
        }
        var resetMatches = function () {
          scope.matches = [];
          scope.activeIdx = -1;
          element.attr('aria-expanded', false);
        };
        var getMatchId = function (index) {
          return popupId + '-option-' + index;
        };
        // Indicate that the specified match is the active (pre-selected) item in the list owned by this typeahead.
        // This attribute is added or removed automatically when the `activeIdx` changes.
        scope.$watch('activeIdx', function (index) {
          if (index < 0) {
            element.removeAttr('aria-activedescendant');
          } else {
            element.attr('aria-activedescendant', getMatchId(index));
          }
        });
        var getMatchesAsync = function (inputValue) {
          var locals = { $viewValue: inputValue };
          isLoadingSetter(originalScope, true);
          $q.when(parserResult.source(originalScope, locals)).then(function (matches) {
            //it might happen that several async queries were in progress if a user were typing fast
            //but we are interested only in responses that correspond to the current view value
            var onCurrentRequest = inputValue === modelCtrl.$viewValue;
            if (onCurrentRequest && hasFocus) {
              if (matches.length > 0) {
                scope.activeIdx = 0;
                scope.matches.length = 0;
                //transform labels
                for (var i = 0; i < matches.length; i++) {
                  locals[parserResult.itemName] = matches[i];
                  scope.matches.push({
                    id: getMatchId(i),
                    label: parserResult.viewMapper(scope, locals),
                    model: matches[i]
                  });
                }
                scope.query = inputValue;
                //position pop-up with matches - we need to re-calculate its position each time we are opening a window
                //with matches as a pop-up might be absolute-positioned and position of an input might have changed on a page
                //due to other elements being rendered
                scope.position = appendToBody ? $position.offset(element) : $position.position(element);
                scope.position.top = scope.position.top + element.prop('offsetHeight');
                element.attr('aria-expanded', true);
              } else {
                resetMatches();
              }
            }
            if (onCurrentRequest) {
              isLoadingSetter(originalScope, false);
            }
          }, function () {
            resetMatches();
            isLoadingSetter(originalScope, false);
          });
        };
        resetMatches();
        //we need to propagate user's query so we can higlight matches
        scope.query = undefined;
        //Declare the timeout promise var outside the function scope so that stacked calls can be cancelled later 
        var timeoutPromise;
        //plug into $parsers pipeline to open a typeahead on view changes initiated from DOM
        //$parsers kick-in on all the changes coming from the view as well as manually triggered by $setViewValue
        modelCtrl.$parsers.unshift(function (inputValue) {
          hasFocus = true;
          if (inputValue && inputValue.length >= minSearch) {
            if (waitTime > 0) {
              if (timeoutPromise) {
                $timeout.cancel(timeoutPromise);  //cancel previous timeout
              }
              timeoutPromise = $timeout(function () {
                getMatchesAsync(inputValue);
              }, waitTime);
            } else {
              getMatchesAsync(inputValue);
            }
          } else {
            isLoadingSetter(originalScope, false);
            resetMatches();
          }
          if (isEditable) {
            return inputValue;
          } else {
            if (!inputValue) {
              // Reset in case user had typed something previously.
              modelCtrl.$setValidity('editable', true);
              return inputValue;
            } else {
              modelCtrl.$setValidity('editable', false);
              return undefined;
            }
          }
        });
        modelCtrl.$formatters.push(function (modelValue) {
          var candidateViewValue, emptyViewValue;
          var locals = {};
          if (inputFormatter) {
            locals['$model'] = modelValue;
            return inputFormatter(originalScope, locals);
          } else {
            //it might happen that we don't have enough info to properly render input value
            //we need to check for this situation and simply return model value if we can't apply custom formatting
            locals[parserResult.itemName] = modelValue;
            candidateViewValue = parserResult.viewMapper(originalScope, locals);
            locals[parserResult.itemName] = undefined;
            emptyViewValue = parserResult.viewMapper(originalScope, locals);
            return candidateViewValue !== emptyViewValue ? candidateViewValue : modelValue;
          }
        });
        scope.select = function (activeIdx) {
          //called from within the $digest() cycle
          var locals = {};
          var model, item;
          locals[parserResult.itemName] = item = scope.matches[activeIdx].model;
          model = parserResult.modelMapper(originalScope, locals);
          $setModelValue(originalScope, model);
          modelCtrl.$setValidity('editable', true);
          onSelectCallback(originalScope, {
            $item: item,
            $model: model,
            $label: parserResult.viewMapper(originalScope, locals)
          });
          resetMatches();
          //return focus to the input element if a match was selected via a mouse click event
          // use timeout to avoid $rootScope:inprog error
          $timeout(function () {
            element[0].focus();
          }, 0, false);
        };
        //bind keyboard events: arrows up(38) / down(40), enter(13) and tab(9), esc(27)
        element.bind('keydown', function (evt) {
          //typeahead is open and an "interesting" key was pressed
          if (scope.matches.length === 0 || HOT_KEYS.indexOf(evt.which) === -1) {
            return;
          }
          evt.preventDefault();
          if (evt.which === 40) {
            scope.activeIdx = (scope.activeIdx + 1) % scope.matches.length;
            scope.$digest();
          } else if (evt.which === 38) {
            scope.activeIdx = (scope.activeIdx ? scope.activeIdx : scope.matches.length) - 1;
            scope.$digest();
          } else if (evt.which === 13 || evt.which === 9) {
            scope.$apply(function () {
              scope.select(scope.activeIdx);
            });
          } else if (evt.which === 27) {
            evt.stopPropagation();
            resetMatches();
            scope.$digest();
          }
        });
        element.bind('blur', function (evt) {
          hasFocus = false;
        });
        // Keep reference to click handler to unbind it.
        var dismissClickHandler = function (evt) {
          if (element[0] !== evt.target) {
            resetMatches();
            scope.$digest();
          }
        };
        $document.bind('click', dismissClickHandler);
        originalScope.$on('$destroy', function () {
          $document.unbind('click', dismissClickHandler);
        });
        var $popup = $compile(popUpEl)(scope);
        if (appendToBody) {
          $document.find('body').append($popup);
        } else {
          element.after($popup);
        }
      }
    };
  }
]).directive('typeaheadPopup', function () {
  return {
    restrict: 'EA',
    scope: {
      matches: '=',
      query: '=',
      active: '=',
      position: '=',
      select: '&'
    },
    replace: true,
    templateUrl: 'template/typeahead/typeahead-popup.html',
    link: function (scope, element, attrs) {
      scope.templateUrl = attrs.templateUrl;
      scope.isOpen = function () {
        return scope.matches.length > 0;
      };
      scope.isActive = function (matchIdx) {
        return scope.active == matchIdx;
      };
      scope.selectActive = function (matchIdx) {
        scope.active = matchIdx;
      };
      scope.selectMatch = function (activeIdx) {
        scope.select({ activeIdx: activeIdx });
      };
    }
  };
}).directive('typeaheadMatch', [
  '$http',
  '$templateCache',
  '$compile',
  '$parse',
  function ($http, $templateCache, $compile, $parse) {
    return {
      restrict: 'EA',
      scope: {
        index: '=',
        match: '=',
        query: '='
      },
      link: function (scope, element, attrs) {
        var tplUrl = $parse(attrs.templateUrl)(scope.$parent) || 'template/typeahead/typeahead-match.html';
        $http.get(tplUrl, { cache: $templateCache }).success(function (tplContent) {
          element.replaceWith($compile(tplContent.trim())(scope));
        });
      }
    };
  }
]).filter('typeaheadHighlight', function () {
  function escapeRegexp(queryToEscape) {
    return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
  }
  return function (matchItem, query) {
    return query ? ('' + matchItem).replace(new RegExp(escapeRegexp(query), 'gi'), '<strong>$&</strong>') : matchItem;
  };
});
angular.module('template/accordion/accordion-group.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/accordion/accordion-group.html', '<div class="panel panel-default">\n' + '  <div class="panel-heading">\n' + '    <h4 class="panel-title">\n' + '      <a class="accordion-toggle" ng-click="toggleOpen()" accordion-transclude="heading"><span ng-class="{\'text-muted\': isDisabled}">{{heading}}</span></a>\n' + '    </h4>\n' + '  </div>\n' + '  <div class="panel-collapse" collapse="!isOpen">\n' + '\t  <div class="panel-body" ng-transclude></div>\n' + '  </div>\n' + '</div>');
  }
]);
angular.module('template/accordion/accordion.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/accordion/accordion.html', '<div class="panel-group" ng-transclude></div>');
  }
]);
angular.module('template/alert/alert.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/alert/alert.html', '<div class="alert" ng-class="{\'alert-{{type || \'warning\'}}\': true, \'alert-dismissable\': closeable}" role="alert">\n' + '    <button ng-show="closeable" type="button" class="close" ng-click="close()">\n' + '        <span aria-hidden="true">&times;</span>\n' + '        <span class="sr-only">Close</span>\n' + '    </button>\n' + '    <div ng-transclude></div>\n' + '</div>\n' + '');
  }
]);
angular.module('template/carousel/carousel.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/carousel/carousel.html', '<div ng-mouseenter="pause()" ng-mouseleave="play()" class="carousel" ng-swipe-right="prev()" ng-swipe-left="next()">\n' + '    <ol class="carousel-indicators" ng-show="slides.length > 1">\n' + '        <li ng-repeat="slide in slides track by $index" ng-class="{active: isActive(slide)}" ng-click="select(slide)"></li>\n' + '    </ol>\n' + '    <div class="carousel-inner" ng-transclude></div>\n' + '    <a class="left carousel-control" ng-click="prev()" ng-show="slides.length > 1"><span class="glyphicon glyphicon-chevron-left"></span></a>\n' + '    <a class="right carousel-control" ng-click="next()" ng-show="slides.length > 1"><span class="glyphicon glyphicon-chevron-right"></span></a>\n' + '</div>\n' + '');
  }
]);
angular.module('template/carousel/slide.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/carousel/slide.html', '<div ng-class="{\n' + '    \'active\': leaving || (active && !entering),\n' + '    \'prev\': (next || active) && direction==\'prev\',\n' + '    \'next\': (next || active) && direction==\'next\',\n' + '    \'right\': direction==\'prev\',\n' + '    \'left\': direction==\'next\'\n' + '  }" class="item text-center" ng-transclude></div>\n' + '');
  }
]);
angular.module('template/datepicker/datepicker.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/datepicker/datepicker.html', '<div ng-switch="datepickerMode" role="application" ng-keydown="keydown($event)">\n' + '  <daypicker ng-switch-when="day" tabindex="0"></daypicker>\n' + '  <monthpicker ng-switch-when="month" tabindex="0"></monthpicker>\n' + '  <yearpicker ng-switch-when="year" tabindex="0"></yearpicker>\n' + '</div>');
  }
]);
angular.module('template/datepicker/day.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/datepicker/day.html', '<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n' + '  <thead>\n' + '    <tr>\n' + '      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n' + '      <th colspan="{{5 + showWeeks}}"><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n' + '      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n' + '    </tr>\n' + '    <tr>\n' + '      <th ng-show="showWeeks" class="text-center"></th>\n' + '      <th ng-repeat="label in labels track by $index" class="text-center"><small aria-label="{{label.full}}">{{label.abbr}}</small></th>\n' + '    </tr>\n' + '  </thead>\n' + '  <tbody>\n' + '    <tr ng-repeat="row in rows track by $index">\n' + '      <td ng-show="showWeeks" class="text-center h6"><em>{{ weekNumbers[$index] }}</em></td>\n' + '      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n' + '        <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-muted\': dt.secondary, \'text-info\': dt.current}">{{dt.label}}</span></button>\n' + '      </td>\n' + '    </tr>\n' + '  </tbody>\n' + '</table>\n' + '');
  }
]);
angular.module('template/datepicker/month.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/datepicker/month.html', '<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n' + '  <thead>\n' + '    <tr>\n' + '      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n' + '      <th><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n' + '      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n' + '    </tr>\n' + '  </thead>\n' + '  <tbody>\n' + '    <tr ng-repeat="row in rows track by $index">\n' + '      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n' + '        <button type="button" style="width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-info\': dt.current}">{{dt.label}}</span></button>\n' + '      </td>\n' + '    </tr>\n' + '  </tbody>\n' + '</table>\n' + '');
  }
]);
angular.module('template/datepicker/popup.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/datepicker/popup.html', '<ul class="dropdown-menu" ng-style="{display: (isOpen && \'block\') || \'none\', top: position.top+\'px\', left: position.left+\'px\'}" ng-keydown="keydown($event)">\n' + '\t<li ng-transclude></li>\n' + '\t<li ng-if="showButtonBar" style="padding:10px 9px 2px">\n' + '\t\t<span class="btn-group">\n' + '\t\t\t<button type="button" class="btn btn-sm btn-info" ng-click="select(\'today\')">{{ getText(\'current\') }}</button>\n' + '\t\t\t<button type="button" class="btn btn-sm btn-danger" ng-click="select(null)">{{ getText(\'clear\') }}</button>\n' + '\t\t</span>\n' + '\t\t<button type="button" class="btn btn-sm btn-success pull-right" ng-click="close()">{{ getText(\'close\') }}</button>\n' + '\t</li>\n' + '</ul>\n' + '');
  }
]);
angular.module('template/datepicker/year.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/datepicker/year.html', '<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n' + '  <thead>\n' + '    <tr>\n' + '      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n' + '      <th colspan="3"><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n' + '      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n' + '    </tr>\n' + '  </thead>\n' + '  <tbody>\n' + '    <tr ng-repeat="row in rows track by $index">\n' + '      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n' + '        <button type="button" style="width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-info\': dt.current}">{{dt.label}}</span></button>\n' + '      </td>\n' + '    </tr>\n' + '  </tbody>\n' + '</table>\n' + '');
  }
]);
angular.module('template/modal/backdrop.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/modal/backdrop.html', '<div class="modal-backdrop fade"\n' + '     ng-class="{in: animate}"\n' + '     ng-style="{\'z-index\': 1040 + (index && 1 || 0) + index*10}"\n' + '></div>\n' + '');
  }
]);
angular.module('template/modal/window.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/modal/window.html', '<div tabindex="-1" role="dialog" class="modal fade" ng-class="{in: animate}" ng-style="{\'z-index\': 1050 + index*10, display: \'block\'}" ng-click="close($event)">\n' + '    <div class="modal-dialog" ng-class="{\'modal-sm\': size == \'sm\', \'modal-lg\': size == \'lg\'}"><div class="modal-content" ng-transclude></div></div>\n' + '</div>');
  }
]);
angular.module('template/pagination/pager.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/pagination/pager.html', '<ul class="pager">\n' + '  <li ng-class="{disabled: noPrevious(), previous: align}"><a href ng-click="selectPage(page - 1)">{{getText(\'previous\')}}</a></li>\n' + '  <li ng-class="{disabled: noNext(), next: align}"><a href ng-click="selectPage(page + 1)">{{getText(\'next\')}}</a></li>\n' + '</ul>');
  }
]);
angular.module('template/pagination/pagination.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/pagination/pagination.html', '<ul class="pagination">\n' + '  <li ng-if="boundaryLinks" ng-class="{disabled: noPrevious()}"><a href ng-click="selectPage(1)">{{getText(\'first\')}}</a></li>\n' + '  <li ng-if="directionLinks" ng-class="{disabled: noPrevious()}"><a href ng-click="selectPage(page - 1)">{{getText(\'previous\')}}</a></li>\n' + '  <li ng-repeat="page in pages track by $index" ng-class="{active: page.active}"><a href ng-click="selectPage(page.number)">{{page.text}}</a></li>\n' + '  <li ng-if="directionLinks" ng-class="{disabled: noNext()}"><a href ng-click="selectPage(page + 1)">{{getText(\'next\')}}</a></li>\n' + '  <li ng-if="boundaryLinks" ng-class="{disabled: noNext()}"><a href ng-click="selectPage(totalPages)">{{getText(\'last\')}}</a></li>\n' + '</ul>');
  }
]);
angular.module('template/tooltip/tooltip-html-unsafe-popup.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/tooltip/tooltip-html-unsafe-popup.html', '<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n' + '  <div class="tooltip-arrow"></div>\n' + '  <div class="tooltip-inner" bind-html-unsafe="content"></div>\n' + '</div>\n' + '');
  }
]);
angular.module('template/tooltip/tooltip-popup.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/tooltip/tooltip-popup.html', '<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n' + '  <div class="tooltip-arrow"></div>\n' + '  <div class="tooltip-inner" ng-bind="content"></div>\n' + '</div>\n' + '');
  }
]);
angular.module('template/popover/popover.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/popover/popover.html', '<div class="popover {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n' + '  <div class="arrow"></div>\n' + '\n' + '  <div class="popover-inner">\n' + '      <h3 class="popover-title" ng-bind="title" ng-show="title"></h3>\n' + '      <div class="popover-content" ng-bind="content"></div>\n' + '  </div>\n' + '</div>\n' + '');
  }
]);
angular.module('template/progressbar/bar.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/progressbar/bar.html', '<div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: percent + \'%\'}" aria-valuetext="{{percent | number:0}}%" ng-transclude></div>');
  }
]);
angular.module('template/progressbar/progress.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/progressbar/progress.html', '<div class="progress" ng-transclude></div>');
  }
]);
angular.module('template/progressbar/progressbar.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/progressbar/progressbar.html', '<div class="progress">\n' + '  <div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: percent + \'%\'}" aria-valuetext="{{percent | number:0}}%" ng-transclude></div>\n' + '</div>');
  }
]);
angular.module('template/rating/rating.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/rating/rating.html', '<span ng-mouseleave="reset()" ng-keydown="onKeydown($event)" tabindex="0" role="slider" aria-valuemin="0" aria-valuemax="{{range.length}}" aria-valuenow="{{value}}">\n' + '    <i ng-repeat="r in range track by $index" ng-mouseenter="enter($index + 1)" ng-click="rate($index + 1)" class="glyphicon" ng-class="$index < value && (r.stateOn || \'glyphicon-star\') || (r.stateOff || \'glyphicon-star-empty\')">\n' + '        <span class="sr-only">({{ $index < value ? \'*\' : \' \' }})</span>\n' + '    </i>\n' + '</span>');
  }
]);
angular.module('template/tabs/tab.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/tabs/tab.html', '<li ng-class="{active: active, disabled: disabled}">\n' + '  <a ng-click="select()" tab-heading-transclude>{{heading}}</a>\n' + '</li>\n' + '');
  }
]);
angular.module('template/tabs/tabset-titles.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/tabs/tabset-titles.html', '<ul class="nav {{type && \'nav-\' + type}}" ng-class="{\'nav-stacked\': vertical}">\n' + '</ul>\n' + '');
  }
]);
angular.module('template/tabs/tabset.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/tabs/tabset.html', '\n' + '<div>\n' + '  <ul class="nav nav-{{type || \'tabs\'}}" ng-class="{\'nav-stacked\': vertical, \'nav-justified\': justified}" ng-transclude></ul>\n' + '  <div class="tab-content">\n' + '    <div class="tab-pane" \n' + '         ng-repeat="tab in tabs" \n' + '         ng-class="{active: tab.active}"\n' + '         tab-content-transclude="tab">\n' + '    </div>\n' + '  </div>\n' + '</div>\n' + '');
  }
]);
angular.module('template/timepicker/timepicker.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/timepicker/timepicker.html', '<table>\n' + '\t<tbody>\n' + '\t\t<tr class="text-center">\n' + '\t\t\t<td><a ng-click="incrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n' + '\t\t\t<td>&nbsp;</td>\n' + '\t\t\t<td><a ng-click="incrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n' + '\t\t\t<td ng-show="showMeridian"></td>\n' + '\t\t</tr>\n' + '\t\t<tr>\n' + '\t\t\t<td style="width:50px;" class="form-group" ng-class="{\'has-error\': invalidHours}">\n' + '\t\t\t\t<input type="text" ng-model="hours" ng-change="updateHours()" class="form-control text-center" ng-mousewheel="incrementHours()" ng-readonly="readonlyInput" maxlength="2">\n' + '\t\t\t</td>\n' + '\t\t\t<td>:</td>\n' + '\t\t\t<td style="width:50px;" class="form-group" ng-class="{\'has-error\': invalidMinutes}">\n' + '\t\t\t\t<input type="text" ng-model="minutes" ng-change="updateMinutes()" class="form-control text-center" ng-readonly="readonlyInput" maxlength="2">\n' + '\t\t\t</td>\n' + '\t\t\t<td ng-show="showMeridian"><button type="button" class="btn btn-default text-center" ng-click="toggleMeridian()">{{meridian}}</button></td>\n' + '\t\t</tr>\n' + '\t\t<tr class="text-center">\n' + '\t\t\t<td><a ng-click="decrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n' + '\t\t\t<td>&nbsp;</td>\n' + '\t\t\t<td><a ng-click="decrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n' + '\t\t\t<td ng-show="showMeridian"></td>\n' + '\t\t</tr>\n' + '\t</tbody>\n' + '</table>\n' + '');
  }
]);
angular.module('template/typeahead/typeahead-match.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/typeahead/typeahead-match.html', '<a tabindex="-1" bind-html-unsafe="match.label | typeaheadHighlight:query"></a>');
  }
]);
angular.module('template/typeahead/typeahead-popup.html', []).run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('template/typeahead/typeahead-popup.html', '<ul class="dropdown-menu" ng-if="isOpen()" ng-style="{top: position.top+\'px\', left: position.left+\'px\'}" style="display: block;" role="listbox" aria-hidden="{{!isOpen()}}">\n' + '    <li ng-repeat="match in matches track by $index" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)" ng-click="selectMatch($index)" role="option" id="{{match.id}}">\n' + '        <div typeahead-match index="$index" match="match" query="query" template-url="templateUrl"></div>\n' + '    </li>\n' + '</ul>');
  }
]);
/**
 * @license AngularJS v1.3.0-build.2909+sha.2e84cf9
 * (c) 2010-2014 Google, Inc. http://angularjs.org
 * License: MIT
 */
(function (window, angular, undefined) {
  'use strict';
  /**
 * @ngdoc module
 * @name ngCookies
 * @description
 *
 * # ngCookies
 *
 * The `ngCookies` module provides a convenient wrapper for reading and writing browser cookies.
 *
 *
 * <div doc-module-components="ngCookies"></div>
 *
 * See {@link ngCookies.$cookies `$cookies`} and
 * {@link ngCookies.$cookieStore `$cookieStore`} for usage.
 */
  angular.module('ngCookies', ['ng']).factory('$cookies', [
    '$rootScope',
    '$browser',
    function ($rootScope, $browser) {
      var cookies = {}, lastCookies = {}, lastBrowserCookies, runEval = false, copy = angular.copy, isUndefined = angular.isUndefined;
      //creates a poller fn that copies all cookies from the $browser to service & inits the service
      $browser.addPollFn(function () {
        var currentCookies = $browser.cookies();
        if (lastBrowserCookies != currentCookies) {
          //relies on browser.cookies() impl
          lastBrowserCookies = currentCookies;
          copy(currentCookies, lastCookies);
          copy(currentCookies, cookies);
          if (runEval)
            $rootScope.$apply();
        }
      })();
      runEval = true;
      //at the end of each eval, push cookies
      //TODO: this should happen before the "delayed" watches fire, because if some cookies are not
      //      strings or browser refuses to store some cookies, we update the model in the push fn.
      $rootScope.$watch(push);
      return cookies;
      /**
       * Pushes all the cookies from the service to the browser and verifies if all cookies were
       * stored.
       */
      function push() {
        var name, value, browserCookies, updated;
        //delete any cookies deleted in $cookies
        for (name in lastCookies) {
          if (isUndefined(cookies[name])) {
            $browser.cookies(name, undefined);
          }
        }
        //update all cookies updated in $cookies
        for (name in cookies) {
          value = cookies[name];
          if (!angular.isString(value)) {
            value = '' + value;
            cookies[name] = value;
          }
          if (value !== lastCookies[name]) {
            $browser.cookies(name, value);
            updated = true;
          }
        }
        //verify what was actually stored
        if (updated) {
          updated = false;
          browserCookies = $browser.cookies();
          for (name in cookies) {
            if (cookies[name] !== browserCookies[name]) {
              //delete or reset all cookies that the browser dropped from $cookies
              if (isUndefined(browserCookies[name])) {
                delete cookies[name];
              } else {
                cookies[name] = browserCookies[name];
              }
              updated = true;
            }
          }
        }
      }
    }
  ]).factory('$cookieStore', [
    '$cookies',
    function ($cookies) {
      return {
        get: function (key) {
          var value = $cookies[key];
          return value ? angular.fromJson(value) : value;
        },
        put: function (key, value) {
          $cookies[key] = angular.toJson(value);
        },
        remove: function (key) {
          delete $cookies[key];
        }
      };
    }
  ]);
}(window, window.angular));
/**
 * @license
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash underscore exports="amd,commonjs,global,node" -o ./dist/lodash.underscore.js`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
;(function() {

  /** Used as a safe reference for `undefined` in pre ES5 environments */
  var undefined;

  /** Used to generate unique IDs */
  var idCounter = 0;

  /** Used internally to indicate various things */
  var indicatorObject = {};

  /** Used to prefix keys to avoid issues with `__proto__` and properties on `Object.prototype` */
  var keyPrefix = +new Date + '';

  /** Used to match "interpolate" template delimiters */
  var reInterpolate = /<%=([\s\S]+?)%>/g;

  /** Used to ensure capturing order of template delimiters */
  var reNoMatch = /($^)/;

  /** Used to match unescaped characters in compiled string literals */
  var reUnescapedString = /['\n\r\t\u2028\u2029\\]/g;

  /** `Object#toString` result shortcuts */
  var argsClass = '[object Arguments]',
      arrayClass = '[object Array]',
      boolClass = '[object Boolean]',
      dateClass = '[object Date]',
      funcClass = '[object Function]',
      numberClass = '[object Number]',
      objectClass = '[object Object]',
      regexpClass = '[object RegExp]',
      stringClass = '[object String]';

  /** Used to determine if values are of the language type Object */
  var objectTypes = {
    'boolean': false,
    'function': true,
    'object': true,
    'number': false,
    'string': false,
    'undefined': false
  };

  /** Used to escape characters for inclusion in compiled string literals */
  var stringEscapes = {
    '\\': '\\',
    "'": "'",
    '\n': 'n',
    '\r': 'r',
    '\t': 't',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  /** Used as a reference to the global object */
  var root = (objectTypes[typeof window] && window) || this;

  /** Detect free variable `exports` */
  var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;

  /** Detect free variable `module` */
  var freeModule = objectTypes[typeof module] && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports` */
  var moduleExports = freeModule && freeModule.exports === freeExports && freeExports;

  /** Detect free variable `global` from Node.js or Browserified code and use it as `root` */
  var freeGlobal = objectTypes[typeof global] && global;
  if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal)) {
    root = freeGlobal;
  }

  /*--------------------------------------------------------------------------*/

  /**
   * The base implementation of `_.indexOf` without support for binary searches
   * or `fromIndex` constraints.
   *
   * @private
   * @param {Array} array The array to search.
   * @param {*} value The value to search for.
   * @param {number} [fromIndex=0] The index to search from.
   * @returns {number} Returns the index of the matched value or `-1`.
   */
  function baseIndexOf(array, value, fromIndex) {
    var index = (fromIndex || 0) - 1,
        length = array ? array.length : 0;

    while (++index < length) {
      if (array[index] === value) {
        return index;
      }
    }
    return -1;
  }

  /**
   * Used by `sortBy` to compare transformed `collection` elements, stable sorting
   * them in ascending order.
   *
   * @private
   * @param {Object} a The object to compare to `b`.
   * @param {Object} b The object to compare to `a`.
   * @returns {number} Returns the sort order indicator of `1` or `-1`.
   */
  function compareAscending(a, b) {
    var ac = a.criteria,
        bc = b.criteria,
        index = -1,
        length = ac.length;

    while (++index < length) {
      var value = ac[index],
          other = bc[index];

      if (value !== other) {
        if (value > other || typeof value == 'undefined') {
          return 1;
        }
        if (value < other || typeof other == 'undefined') {
          return -1;
        }
      }
    }
    // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
    // that causes it, under certain circumstances, to return the same value for
    // `a` and `b`. See https://github.com/jashkenas/underscore/pull/1247
    //
    // This also ensures a stable sort in V8 and other engines.
    // See http://code.google.com/p/v8/issues/detail?id=90
    return a.index - b.index;
  }

  /**
   * Used by `template` to escape characters for inclusion in compiled
   * string literals.
   *
   * @private
   * @param {string} match The matched character to escape.
   * @returns {string} Returns the escaped character.
   */
  function escapeStringChar(match) {
    return '\\' + stringEscapes[match];
  }

  /**
   * Slices the `collection` from the `start` index up to, but not including,
   * the `end` index.
   *
   * Note: This function is used instead of `Array#slice` to support node lists
   * in IE < 9 and to ensure dense arrays are returned.
   *
   * @private
   * @param {Array|Object|string} collection The collection to slice.
   * @param {number} start The start index.
   * @param {number} end The end index.
   * @returns {Array} Returns the new array.
   */
  function slice(array, start, end) {
    start || (start = 0);
    if (typeof end == 'undefined') {
      end = array ? array.length : 0;
    }
    var index = -1,
        length = end - start || 0,
        result = Array(length < 0 ? 0 : length);

    while (++index < length) {
      result[index] = array[start + index];
    }
    return result;
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Used for `Array` method references.
   *
   * Normally `Array.prototype` would suffice, however, using an array literal
   * avoids issues in Narwhal.
   */
  var arrayRef = [];

  /** Used for native method references */
  var objectProto = Object.prototype;

  /** Used to restore the original `_` reference in `noConflict` */
  var oldDash = root._;

  /** Used to resolve the internal [[Class]] of values */
  var toString = objectProto.toString;

  /** Used to detect if a method is native */
  var reNative = RegExp('^' +
    String(toString)
      .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
      .replace(/toString| for [^\]]+/g, '.*?') + '$'
  );

  /** Native method shortcuts */
  var ceil = Math.ceil,
      floor = Math.floor,
      hasOwnProperty = objectProto.hasOwnProperty,
      push = arrayRef.push,
      propertyIsEnumerable = objectProto.propertyIsEnumerable;

  /* Native method shortcuts for methods with the same name as other `lodash` methods */
  var nativeCreate = isNative(nativeCreate = Object.create) && nativeCreate,
      nativeIsArray = isNative(nativeIsArray = Array.isArray) && nativeIsArray,
      nativeIsFinite = root.isFinite,
      nativeIsNaN = root.isNaN,
      nativeKeys = isNative(nativeKeys = Object.keys) && nativeKeys,
      nativeMax = Math.max,
      nativeMin = Math.min,
      nativeRandom = Math.random;

  /*--------------------------------------------------------------------------*/

  /**
   * Creates a `lodash` object which wraps the given value to enable intuitive
   * method chaining.
   *
   * In addition to Lo-Dash methods, wrappers also have the following `Array` methods:
   * `concat`, `join`, `pop`, `push`, `reverse`, `shift`, `slice`, `sort`, `splice`,
   * and `unshift`
   *
   * Chaining is supported in custom builds as long as the `value` method is
   * implicitly or explicitly included in the build.
   *
   * The chainable wrapper functions are:
   * `after`, `assign`, `bind`, `bindAll`, `bindKey`, `chain`, `compact`,
   * `compose`, `concat`, `countBy`, `create`, `createCallback`, `curry`,
   * `debounce`, `defaults`, `defer`, `delay`, `difference`, `filter`, `flatten`,
   * `forEach`, `forEachRight`, `forIn`, `forInRight`, `forOwn`, `forOwnRight`,
   * `functions`, `groupBy`, `indexBy`, `initial`, `intersection`, `invert`,
   * `invoke`, `keys`, `map`, `max`, `memoize`, `merge`, `min`, `object`, `omit`,
   * `once`, `pairs`, `partial`, `partialRight`, `pick`, `pluck`, `pull`, `push`,
   * `range`, `reject`, `remove`, `rest`, `reverse`, `shuffle`, `slice`, `sort`,
   * `sortBy`, `splice`, `tap`, `throttle`, `times`, `toArray`, `transform`,
   * `union`, `uniq`, `unshift`, `unzip`, `values`, `where`, `without`, `wrap`,
   * and `zip`
   *
   * The non-chainable wrapper functions are:
   * `clone`, `cloneDeep`, `contains`, `escape`, `every`, `find`, `findIndex`,
   * `findKey`, `findLast`, `findLastIndex`, `findLastKey`, `has`, `identity`,
   * `indexOf`, `isArguments`, `isArray`, `isBoolean`, `isDate`, `isElement`,
   * `isEmpty`, `isEqual`, `isFinite`, `isFunction`, `isNaN`, `isNull`, `isNumber`,
   * `isObject`, `isPlainObject`, `isRegExp`, `isString`, `isUndefined`, `join`,
   * `lastIndexOf`, `mixin`, `noConflict`, `parseInt`, `pop`, `random`, `reduce`,
   * `reduceRight`, `result`, `shift`, `size`, `some`, `sortedIndex`, `runInContext`,
   * `template`, `unescape`, `uniqueId`, and `value`
   *
   * The wrapper functions `first` and `last` return wrapped values when `n` is
   * provided, otherwise they return unwrapped values.
   *
   * Explicit chaining can be enabled by using the `_.chain` method.
   *
   * @name _
   * @constructor
   * @category Chaining
   * @param {*} value The value to wrap in a `lodash` instance.
   * @returns {Object} Returns a `lodash` instance.
   * @example
   *
   * var wrapped = _([1, 2, 3]);
   *
   * // returns an unwrapped value
   * wrapped.reduce(function(sum, num) {
   *   return sum + num;
   * });
   * // => 6
   *
   * // returns a wrapped value
   * var squares = wrapped.map(function(num) {
   *   return num * num;
   * });
   *
   * _.isArray(squares);
   * // => false
   *
   * _.isArray(squares.value());
   * // => true
   */
  function lodash(value) {
    return (value instanceof lodash)
      ? value
      : new lodashWrapper(value);
  }

  /**
   * A fast path for creating `lodash` wrapper objects.
   *
   * @private
   * @param {*} value The value to wrap in a `lodash` instance.
   * @param {boolean} chainAll A flag to enable chaining for all methods
   * @returns {Object} Returns a `lodash` instance.
   */
  function lodashWrapper(value, chainAll) {
    this.__chain__ = !!chainAll;
    this.__wrapped__ = value;
  }
  // ensure `new lodashWrapper` is an instance of `lodash`
  lodashWrapper.prototype = lodash.prototype;

  /**
   * An object used to flag environments features.
   *
   * @static
   * @memberOf _
   * @type Object
   */
  var support = {};

  (function() {
    var object = { '0': 1, 'length': 1 };

    /**
     * Detect if `Array#shift` and `Array#splice` augment array-like objects correctly.
     *
     * Firefox < 10, IE compatibility mode, and IE < 9 have buggy Array `shift()`
     * and `splice()` functions that fail to remove the last element, `value[0]`,
     * of array-like objects even though the `length` property is set to `0`.
     * The `shift()` method is buggy in IE 8 compatibility mode, while `splice()`
     * is buggy regardless of mode in IE < 9 and buggy in compatibility mode in IE 9.
     *
     * @memberOf _.support
     * @type boolean
     */
    support.spliceObjects = (arrayRef.splice.call(object, 0, 1), !object[0]);
  }(1));

  /**
   * By default, the template delimiters used by Lo-Dash are similar to those in
   * embedded Ruby (ERB). Change the following template settings to use alternative
   * delimiters.
   *
   * @static
   * @memberOf _
   * @type Object
   */
  lodash.templateSettings = {

    /**
     * Used to detect `data` property values to be HTML-escaped.
     *
     * @memberOf _.templateSettings
     * @type RegExp
     */
    'escape': /<%-([\s\S]+?)%>/g,

    /**
     * Used to detect code to be evaluated.
     *
     * @memberOf _.templateSettings
     * @type RegExp
     */
    'evaluate': /<%([\s\S]+?)%>/g,

    /**
     * Used to detect `data` property values to inject.
     *
     * @memberOf _.templateSettings
     * @type RegExp
     */
    'interpolate': reInterpolate,

    /**
     * Used to reference the data object in the template text.
     *
     * @memberOf _.templateSettings
     * @type string
     */
    'variable': ''
  };

  /*--------------------------------------------------------------------------*/

  /**
   * The base implementation of `_.bind` that creates the bound function and
   * sets its meta data.
   *
   * @private
   * @param {Array} bindData The bind data array.
   * @returns {Function} Returns the new bound function.
   */
  function baseBind(bindData) {
    var func = bindData[0],
        partialArgs = bindData[2],
        thisArg = bindData[4];

    function bound() {
      // `Function#bind` spec
      // http://es5.github.io/#x15.3.4.5
      if (partialArgs) {
        // avoid `arguments` object deoptimizations by using `slice` instead
        // of `Array.prototype.slice.call` and not assigning `arguments` to a
        // variable as a ternary expression
        var args = slice(partialArgs);
        push.apply(args, arguments);
      }
      // mimic the constructor's `return` behavior
      // http://es5.github.io/#x13.2.2
      if (this instanceof bound) {
        // ensure `new bound` is an instance of `func`
        var thisBinding = baseCreate(func.prototype),
            result = func.apply(thisBinding, args || arguments);
        return isObject(result) ? result : thisBinding;
      }
      return func.apply(thisArg, args || arguments);
    }
    return bound;
  }

  /**
   * The base implementation of `_.create` without support for assigning
   * properties to the created object.
   *
   * @private
   * @param {Object} prototype The object to inherit from.
   * @returns {Object} Returns the new object.
   */
  function baseCreate(prototype, properties) {
    return isObject(prototype) ? nativeCreate(prototype) : {};
  }
  // fallback for browsers without `Object.create`
  if (!nativeCreate) {
    baseCreate = (function() {
      function Object() {}
      return function(prototype) {
        if (isObject(prototype)) {
          Object.prototype = prototype;
          var result = new Object;
          Object.prototype = null;
        }
        return result || root.Object();
      };
    }());
  }

  /**
   * The base implementation of `_.createCallback` without support for creating
   * "_.pluck" or "_.where" style callbacks.
   *
   * @private
   * @param {*} [func=identity] The value to convert to a callback.
   * @param {*} [thisArg] The `this` binding of the created callback.
   * @param {number} [argCount] The number of arguments the callback accepts.
   * @returns {Function} Returns a callback function.
   */
  function baseCreateCallback(func, thisArg, argCount) {
    if (typeof func != 'function') {
      return identity;
    }
    // exit early for no `thisArg` or already bound by `Function#bind`
    if (typeof thisArg == 'undefined' || !('prototype' in func)) {
      return func;
    }
    switch (argCount) {
      case 1: return function(value) {
        return func.call(thisArg, value);
      };
      case 2: return function(a, b) {
        return func.call(thisArg, a, b);
      };
      case 3: return function(value, index, collection) {
        return func.call(thisArg, value, index, collection);
      };
      case 4: return function(accumulator, value, index, collection) {
        return func.call(thisArg, accumulator, value, index, collection);
      };
    }
    return bind(func, thisArg);
  }

  /**
   * The base implementation of `createWrapper` that creates the wrapper and
   * sets its meta data.
   *
   * @private
   * @param {Array} bindData The bind data array.
   * @returns {Function} Returns the new function.
   */
  function baseCreateWrapper(bindData) {
    var func = bindData[0],
        bitmask = bindData[1],
        partialArgs = bindData[2],
        partialRightArgs = bindData[3],
        thisArg = bindData[4],
        arity = bindData[5];

    var isBind = bitmask & 1,
        isBindKey = bitmask & 2,
        isCurry = bitmask & 4,
        isCurryBound = bitmask & 8,
        key = func;

    function bound() {
      var thisBinding = isBind ? thisArg : this;
      if (partialArgs) {
        var args = slice(partialArgs);
        push.apply(args, arguments);
      }
      if (partialRightArgs || isCurry) {
        args || (args = slice(arguments));
        if (partialRightArgs) {
          push.apply(args, partialRightArgs);
        }
        if (isCurry && args.length < arity) {
          bitmask |= 16 & ~32;
          return baseCreateWrapper([func, (isCurryBound ? bitmask : bitmask & ~3), args, null, thisArg, arity]);
        }
      }
      args || (args = arguments);
      if (isBindKey) {
        func = thisBinding[key];
      }
      if (this instanceof bound) {
        thisBinding = baseCreate(func.prototype);
        var result = func.apply(thisBinding, args);
        return isObject(result) ? result : thisBinding;
      }
      return func.apply(thisBinding, args);
    }
    return bound;
  }

  /**
   * The base implementation of `_.difference` that accepts a single array
   * of values to exclude.
   *
   * @private
   * @param {Array} array The array to process.
   * @param {Array} [values] The array of values to exclude.
   * @returns {Array} Returns a new array of filtered values.
   */
  function baseDifference(array, values) {
    var index = -1,
        indexOf = getIndexOf(),
        length = array ? array.length : 0,
        result = [];

    while (++index < length) {
      var value = array[index];
      if (indexOf(values, value) < 0) {
        result.push(value);
      }
    }
    return result;
  }

  /**
   * The base implementation of `_.flatten` without support for callback
   * shorthands or `thisArg` binding.
   *
   * @private
   * @param {Array} array The array to flatten.
   * @param {boolean} [isShallow=false] A flag to restrict flattening to a single level.
   * @param {boolean} [isStrict=false] A flag to restrict flattening to arrays and `arguments` objects.
   * @param {number} [fromIndex=0] The index to start from.
   * @returns {Array} Returns a new flattened array.
   */
  function baseFlatten(array, isShallow, isStrict, fromIndex) {
    var index = (fromIndex || 0) - 1,
        length = array ? array.length : 0,
        result = [];

    while (++index < length) {
      var value = array[index];

      if (value && typeof value == 'object' && typeof value.length == 'number'
          && (isArray(value) || isArguments(value))) {
        // recursively flatten arrays (susceptible to call stack limits)
        if (!isShallow) {
          value = baseFlatten(value, isShallow, isStrict);
        }
        var valIndex = -1,
            valLength = value.length,
            resIndex = result.length;

        result.length += valLength;
        while (++valIndex < valLength) {
          result[resIndex++] = value[valIndex];
        }
      } else if (!isStrict) {
        result.push(value);
      }
    }
    return result;
  }

  /**
   * The base implementation of `_.isEqual`, without support for `thisArg` binding,
   * that allows partial "_.where" style comparisons.
   *
   * @private
   * @param {*} a The value to compare.
   * @param {*} b The other value to compare.
   * @param {Function} [callback] The function to customize comparing values.
   * @param {Function} [isWhere=false] A flag to indicate performing partial comparisons.
   * @param {Array} [stackA=[]] Tracks traversed `a` objects.
   * @param {Array} [stackB=[]] Tracks traversed `b` objects.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   */
  function baseIsEqual(a, b, stackA, stackB) {
    if (a === b) {
      return a !== 0 || (1 / a == 1 / b);
    }
    var type = typeof a,
        otherType = typeof b;

    if (a === a &&
        !(a && objectTypes[type]) &&
        !(b && objectTypes[otherType])) {
      return false;
    }
    if (a == null || b == null) {
      return a === b;
    }
    var className = toString.call(a),
        otherClass = toString.call(b);

    if (className != otherClass) {
      return false;
    }
    switch (className) {
      case boolClass:
      case dateClass:
        return +a == +b;

      case numberClass:
        return a != +a
          ? b != +b
          : (a == 0 ? (1 / a == 1 / b) : a == +b);

      case regexpClass:
      case stringClass:
        return a == String(b);
    }
    var isArr = className == arrayClass;
    if (!isArr) {
      var aWrapped = a instanceof lodash,
          bWrapped = b instanceof lodash;

      if (aWrapped || bWrapped) {
        return baseIsEqual(aWrapped ? a.__wrapped__ : a, bWrapped ? b.__wrapped__ : b, stackA, stackB);
      }
      if (className != objectClass) {
        return false;
      }
      var ctorA = a.constructor,
          ctorB = b.constructor;

      if (ctorA != ctorB &&
            !(isFunction(ctorA) && ctorA instanceof ctorA && isFunction(ctorB) && ctorB instanceof ctorB) &&
            ('constructor' in a && 'constructor' in b)
          ) {
        return false;
      }
    }
    stackA || (stackA = []);
    stackB || (stackB = []);

    var length = stackA.length;
    while (length--) {
      if (stackA[length] == a) {
        return stackB[length] == b;
      }
    }
    var result = true,
        size = 0;

    stackA.push(a);
    stackB.push(b);

    if (isArr) {
      size = b.length;
      result = size == a.length;

      if (result) {
        while (size--) {
          if (!(result = baseIsEqual(a[size], b[size], stackA, stackB))) {
            break;
          }
        }
      }
    }
    else {
      forIn(b, function(value, key, b) {
        if (hasOwnProperty.call(b, key)) {
          size++;
          return !(result = hasOwnProperty.call(a, key) && baseIsEqual(a[key], value, stackA, stackB)) && indicatorObject;
        }
      });

      if (result) {
        forIn(a, function(value, key, a) {
          if (hasOwnProperty.call(a, key)) {
            return !(result = --size > -1) && indicatorObject;
          }
        });
      }
    }
    stackA.pop();
    stackB.pop();
    return result;
  }

  /**
   * The base implementation of `_.random` without argument juggling or support
   * for returning floating-point numbers.
   *
   * @private
   * @param {number} min The minimum possible value.
   * @param {number} max The maximum possible value.
   * @returns {number} Returns a random number.
   */
  function baseRandom(min, max) {
    return min + floor(nativeRandom() * (max - min + 1));
  }

  /**
   * The base implementation of `_.uniq` without support for callback shorthands
   * or `thisArg` binding.
   *
   * @private
   * @param {Array} array The array to process.
   * @param {boolean} [isSorted=false] A flag to indicate that `array` is sorted.
   * @param {Function} [callback] The function called per iteration.
   * @returns {Array} Returns a duplicate-value-free array.
   */
  function baseUniq(array, isSorted, callback) {
    var index = -1,
        indexOf = getIndexOf(),
        length = array ? array.length : 0,
        result = [],
        seen = callback ? [] : result;

    while (++index < length) {
      var value = array[index],
          computed = callback ? callback(value, index, array) : value;

      if (isSorted
            ? !index || seen[seen.length - 1] !== computed
            : indexOf(seen, computed) < 0
          ) {
        if (callback) {
          seen.push(computed);
        }
        result.push(value);
      }
    }
    return result;
  }

  /**
   * Creates a function that aggregates a collection, creating an object composed
   * of keys generated from the results of running each element of the collection
   * through a callback. The given `setter` function sets the keys and values
   * of the composed object.
   *
   * @private
   * @param {Function} setter The setter function.
   * @returns {Function} Returns the new aggregator function.
   */
  function createAggregator(setter) {
    return function(collection, callback, thisArg) {
      var result = {};
      callback = createCallback(callback, thisArg, 3);

      var index = -1,
          length = collection ? collection.length : 0;

      if (typeof length == 'number') {
        while (++index < length) {
          var value = collection[index];
          setter(result, value, callback(value, index, collection), collection);
        }
      } else {
        forOwn(collection, function(value, key, collection) {
          setter(result, value, callback(value, key, collection), collection);
        });
      }
      return result;
    };
  }

  /**
   * Creates a function that, when called, either curries or invokes `func`
   * with an optional `this` binding and partially applied arguments.
   *
   * @private
   * @param {Function|string} func The function or method name to reference.
   * @param {number} bitmask The bitmask of method flags to compose.
   *  The bitmask may be composed of the following flags:
   *  1 - `_.bind`
   *  2 - `_.bindKey`
   *  4 - `_.curry`
   *  8 - `_.curry` (bound)
   *  16 - `_.partial`
   *  32 - `_.partialRight`
   * @param {Array} [partialArgs] An array of arguments to prepend to those
   *  provided to the new function.
   * @param {Array} [partialRightArgs] An array of arguments to append to those
   *  provided to the new function.
   * @param {*} [thisArg] The `this` binding of `func`.
   * @param {number} [arity] The arity of `func`.
   * @returns {Function} Returns the new function.
   */
  function createWrapper(func, bitmask, partialArgs, partialRightArgs, thisArg, arity) {
    var isBind = bitmask & 1,
        isBindKey = bitmask & 2,
        isCurry = bitmask & 4,
        isCurryBound = bitmask & 8,
        isPartial = bitmask & 16,
        isPartialRight = bitmask & 32;

    if (!isBindKey && !isFunction(func)) {
      throw new TypeError;
    }
    if (isPartial && !partialArgs.length) {
      bitmask &= ~16;
      isPartial = partialArgs = false;
    }
    if (isPartialRight && !partialRightArgs.length) {
      bitmask &= ~32;
      isPartialRight = partialRightArgs = false;
    }
    // fast path for `_.bind`
    var creater = (bitmask == 1 || bitmask === 17) ? baseBind : baseCreateWrapper;
    return creater([func, bitmask, partialArgs, partialRightArgs, thisArg, arity]);
  }

  /**
   * Used by `escape` to convert characters to HTML entities.
   *
   * @private
   * @param {string} match The matched character to escape.
   * @returns {string} Returns the escaped character.
   */
  function escapeHtmlChar(match) {
    return htmlEscapes[match];
  }

  /**
   * Gets the appropriate "indexOf" function. If the `_.indexOf` method is
   * customized, this method returns the custom method, otherwise it returns
   * the `baseIndexOf` function.
   *
   * @private
   * @returns {Function} Returns the "indexOf" function.
   */
  function getIndexOf() {
    var result = (result = lodash.indexOf) === indexOf ? baseIndexOf : result;
    return result;
  }

  /**
   * Checks if `value` is a native function.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if the `value` is a native function, else `false`.
   */
  function isNative(value) {
    return typeof value == 'function' && reNative.test(value);
  }

  /**
   * Used by `unescape` to convert HTML entities to characters.
   *
   * @private
   * @param {string} match The matched character to unescape.
   * @returns {string} Returns the unescaped character.
   */
  function unescapeHtmlChar(match) {
    return htmlUnescapes[match];
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Checks if `value` is an `arguments` object.
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if the `value` is an `arguments` object, else `false`.
   * @example
   *
   * (function() { return _.isArguments(arguments); })(1, 2, 3);
   * // => true
   *
   * _.isArguments([1, 2, 3]);
   * // => false
   */
  function isArguments(value) {
    return value && typeof value == 'object' && typeof value.length == 'number' &&
      toString.call(value) == argsClass || false;
  }
  // fallback for browsers that can't detect `arguments` objects by [[Class]]
  if (!isArguments(arguments)) {
    isArguments = function(value) {
      return value && typeof value == 'object' && typeof value.length == 'number' &&
        hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee') || false;
    };
  }

  /**
   * Checks if `value` is an array.
   *
   * @static
   * @memberOf _
   * @type Function
   * @category Objects
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if the `value` is an array, else `false`.
   * @example
   *
   * (function() { return _.isArray(arguments); })();
   * // => false
   *
   * _.isArray([1, 2, 3]);
   * // => true
   */
  var isArray = nativeIsArray || function(value) {
    return value && typeof value == 'object' && typeof value.length == 'number' &&
      toString.call(value) == arrayClass || false;
  };

  /**
   * A fallback implementation of `Object.keys` which produces an array of the
   * given object's own enumerable property names.
   *
   * @private
   * @type Function
   * @param {Object} object The object to inspect.
   * @returns {Array} Returns an array of property names.
   */
  var shimKeys = function(object) {
    var index, iterable = object, result = [];
    if (!iterable) return result;
    if (!(objectTypes[typeof object])) return result;
      for (index in iterable) {
        if (hasOwnProperty.call(iterable, index)) {
          result.push(index);
        }
      }
    return result
  };

  /**
   * Creates an array composed of the own enumerable property names of an object.
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {Object} object The object to inspect.
   * @returns {Array} Returns an array of property names.
   * @example
   *
   * _.keys({ 'one': 1, 'two': 2, 'three': 3 });
   * // => ['one', 'two', 'three'] (property order is not guaranteed across environments)
   */
  var keys = !nativeKeys ? shimKeys : function(object) {
    if (!isObject(object)) {
      return [];
    }
    return nativeKeys(object);
  };

  /**
   * Used to convert characters to HTML entities:
   *
   * Though the `>` character is escaped for symmetry, characters like `>` and `/`
   * don't require escaping in HTML and have no special meaning unless they're part
   * of a tag or an unquoted attribute value.
   * http://mathiasbynens.be/notes/ambiguous-ampersands (under "semi-related fun fact")
   */
  var htmlEscapes = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;'
  };

  /** Used to convert HTML entities to characters */
  var htmlUnescapes = invert(htmlEscapes);

  /** Used to match HTML entities and HTML characters */
  var reEscapedHtml = RegExp('(' + keys(htmlUnescapes).join('|') + ')', 'g'),
      reUnescapedHtml = RegExp('[' + keys(htmlEscapes).join('') + ']', 'g');

  /*--------------------------------------------------------------------------*/

  /**
   * Assigns own enumerable properties of source object(s) to the destination
   * object. Subsequent sources will overwrite property assignments of previous
   * sources. If a callback is provided it will be executed to produce the
   * assigned values. The callback is bound to `thisArg` and invoked with two
   * arguments; (objectValue, sourceValue).
   *
   * @static
   * @memberOf _
   * @type Function
   * @alias extend
   * @category Objects
   * @param {Object} object The destination object.
   * @param {...Object} [source] The source objects.
   * @param {Function} [callback] The function to customize assigning values.
   * @param {*} [thisArg] The `this` binding of `callback`.
   * @returns {Object} Returns the destination object.
   * @example
   *
   * _.assign({ 'name': 'fred' }, { 'employer': 'slate' });
   * // => { 'name': 'fred', 'employer': 'slate' }
   *
   * var defaults = _.partialRight(_.assign, function(a, b) {
   *   return typeof a == 'undefined' ? b : a;
   * });
   *
   * var object = { 'name': 'barney' };
   * defaults(object, { 'name': 'fred', 'employer': 'slate' });
   * // => { 'name': 'barney', 'employer': 'slate' }
   */
  function assign(object) {
    if (!object) {
      return object;
    }
    for (var argsIndex = 1, argsLength = arguments.length; argsIndex < argsLength; argsIndex++) {
      var iterable = arguments[argsIndex];
      if (iterable) {
        for (var key in iterable) {
          object[key] = iterable[key];
        }
      }
    }
    return object;
  }

  /**
   * Creates a clone of `value`. If `isDeep` is `true` nested objects will also
   * be cloned, otherwise they will be assigned by reference. If a callback
   * is provided it will be executed to produce the cloned values. If the
   * callback returns `undefined` cloning will be handled by the method instead.
   * The callback is bound to `thisArg` and invoked with one argument; (value).
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {*} value The value to clone.
   * @param {boolean} [isDeep=false] Specify a deep clone.
   * @param {Function} [callback] The function to customize cloning values.
   * @param {*} [thisArg] The `this` binding of `callback`.
   * @returns {*} Returns the cloned value.
   * @example
   *
   * var characters = [
   *   { 'name': 'barney', 'age': 36 },
   *   { 'name': 'fred',   'age': 40 }
   * ];
   *
   * var shallow = _.clone(characters);
   * shallow[0] === characters[0];
   * // => true
   *
   * var deep = _.clone(characters, true);
   * deep[0] === characters[0];
   * // => false
   *
   * _.mixin({
   *   'clone': _.partialRight(_.clone, function(value) {
   *     return _.isElement(value) ? value.cloneNode(false) : undefined;
   *   })
   * });
   *
   * var clone = _.clone(document.body);
   * clone.childNodes.length;
   * // => 0
   */
  function clone(value) {
    return isObject(value)
      ? (isArray(value) ? slice(value) : assign({}, value))
      : value;
  }

  /**
   * Assigns own enumerable properties of source object(s) to the destination
   * object for all destination properties that resolve to `undefined`. Once a
   * property is set, additional defaults of the same property will be ignored.
   *
   * @static
   * @memberOf _
   * @type Function
   * @category Objects
   * @param {Object} object The destination object.
   * @param {...Object} [source] The source objects.
   * @param- {Object} [guard] Allows working with `_.reduce` without using its
   *  `key` and `object` arguments as sources.
   * @returns {Object} Returns the destination object.
   * @example
   *
   * var object = { 'name': 'barney' };
   * _.defaults(object, { 'name': 'fred', 'employer': 'slate' });
   * // => { 'name': 'barney', 'employer': 'slate' }
   */
  function defaults(object) {
    if (!object) {
      return object;
    }
    for (var argsIndex = 1, argsLength = arguments.length; argsIndex < argsLength; argsIndex++) {
      var iterable = arguments[argsIndex];
      if (iterable) {
        for (var key in iterable) {
          if (typeof object[key] == 'undefined') {
            object[key] = iterable[key];
          }
        }
      }
    }
    return object;
  }

  /**
   * Iterates over own and inherited enumerable properties of an object,
   * executing the callback for each property. The callback is bound to `thisArg`
   * and invoked with three arguments; (value, key, object). Callbacks may exit
   * iteration early by explicitly returning `false`.
   *
   * @static
   * @memberOf _
   * @type Function
   * @category Objects
   * @param {Object} object The object to iterate over.
   * @param {Function} [callback=identity] The function called per iteration.
   * @param {*} [thisArg] The `this` binding of `callback`.
   * @returns {Object} Returns `object`.
   * @example
   *
   * function Shape() {
   *   this.x = 0;
   *   this.y = 0;
   * }
   *
   * Shape.prototype.move = function(x, y) {
   *   this.x += x;
   *   this.y += y;
   * };
   *
   * _.forIn(new Shape, function(value, key) {
   *   console.log(key);
   * });
   * // => logs 'x', 'y', and 'move' (property order is not guaranteed across environments)
   */
  var forIn = function(collection, callback) {
    var index, iterable = collection, result = iterable;
    if (!iterable) return result;
    if (!objectTypes[typeof iterable]) return result;
      for (index in iterable) {
        if (callback(iterable[index], index, collection) === indicatorObject) return result;
      }
    return result
  };

  /**
   * Iterates over own enumerable properties of an object, executing the callback
   * for each property. The callback is bound to `thisArg` and invoked with three
   * arguments; (value, key, object). Callbacks may exit iteration early by
   * explicitly returning `false`.
   *
   * @static
   * @memberOf _
   * @type Function
   * @category Objects
   * @param {Object} object The object to iterate over.
   * @param {Function} [callback=identity] The function called per iteration.
   * @param {*} [thisArg] The `this` binding of `callback`.
   * @returns {Object} Returns `object`.
   * @example
   *
   * _.forOwn({ '0': 'zero', '1': 'one', 'length': 2 }, function(num, key) {
   *   console.log(key);
   * });
   * // => logs '0', '1', and 'length' (property order is not guaranteed across environments)
   */
  var forOwn = function(collection, callback) {
    var index, iterable = collection, result = iterable;
    if (!iterable) return result;
    if (!objectTypes[typeof iterable]) return result;
      for (index in iterable) {
        if (hasOwnProperty.call(iterable, index)) {
          if (callback(iterable[index], index, collection) === indicatorObject) return result;
        }
      }
    return result
  };

  /**
   * Creates a sorted array of property names of all enumerable properties,
   * own and inherited, of `object` that have function values.
   *
   * @static
   * @memberOf _
   * @alias methods
   * @category Objects
   * @param {Object} object The object to inspect.
   * @returns {Array} Returns an array of property names that have function values.
   * @example
   *
   * _.functions(_);
   * // => ['all', 'any', 'bind', 'bindAll', 'clone', 'compact', 'compose', ...]
   */
  function functions(object) {
    var result = [];
    forIn(object, function(value, key) {
      if (isFunction(value)) {
        result.push(key);
      }
    });
    return result.sort();
  }

  /**
   * Checks if the specified property name exists as a direct property of `object`,
   * instead of an inherited property.
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {Object} object The object to inspect.
   * @param {string} key The name of the property to check.
   * @returns {boolean} Returns `true` if key is a direct property, else `false`.
   * @example
   *
   * _.has({ 'a': 1, 'b': 2, 'c': 3 }, 'b');
   * // => true
   */
  function has(object, key) {
    return object ? hasOwnProperty.call(object, key) : false;
  }

  /**
   * Creates an object composed of the inverted keys and values of the given object.
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {Object} object The object to invert.
   * @returns {Object} Returns the created inverted object.
   * @example
   *
   * _.invert({ 'first': 'fred', 'second': 'barney' });
   * // => { 'fred': 'first', 'barney': 'second' }
   */
  function invert(object) {
    var index = -1,
        props = keys(object),
        length = props.length,
        result = {};

    while (++index < length) {
      var key = props[index];
      result[object[key]] = key;
    }
    return result;
  }

  /**
   * Checks if `value` is a boolean value.
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if the `value` is a boolean value, else `false`.
   * @example
   *
   * _.isBoolean(null);
   * // => false
   */
  function isBoolean(value) {
    return value === true || value === false ||
      value && typeof value == 'object' && toString.call(value) == boolClass || false;
  }

  /**
   * Checks if `value` is a date.
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if the `value` is a date, else `false`.
   * @example
   *
   * _.isDate(new Date);
   * // => true
   */
  function isDate(value) {
    return value && typeof value == 'object' && toString.call(value) == dateClass || false;
  }

  /**
   * Checks if `value` is a DOM element.
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if the `value` is a DOM element, else `false`.
   * @example
   *
   * _.isElement(document.body);
   * // => true
   */
  function isElement(value) {
    return value && value.nodeType === 1 || false;
  }

  /**
   * Checks if `value` is empty. Arrays, strings, or `arguments` objects with a
   * length of `0` and objects with no own enumerable properties are considered
   * "empty".
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {Array|Object|string} value The value to inspect.
   * @returns {boolean} Returns `true` if the `value` is empty, else `false`.
   * @example
   *
   * _.isEmpty([1, 2, 3]);
   * // => false
   *
   * _.isEmpty({});
   * // => true
   *
   * _.isEmpty('');
   * // => true
   */
  function isEmpty(value) {
    if (!value) {
      return true;
    }
    if (isArray(value) || isString(value)) {
      return !value.length;
    }
    for (var key in value) {
      if (hasOwnProperty.call(value, key)) {
        return false;
      }
    }
    return true;
  }

  /**
   * Performs a deep comparison between two values to determine if they are
   * equivalent to each other. If a callback is provided it will be executed
   * to compare values. If the callback returns `undefined` comparisons will
   * be handled by the method instead. The callback is bound to `thisArg` and
   * invoked with two arguments; (a, b).
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {*} a The value to compare.
   * @param {*} b The other value to compare.
   * @param {Function} [callback] The function to customize comparing values.
   * @param {*} [thisArg] The `this` binding of `callback`.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   * @example
   *
   * var object = { 'name': 'fred' };
   * var copy = { 'name': 'fred' };
   *
   * object == copy;
   * // => false
   *
   * _.isEqual(object, copy);
   * // => true
   *
   * var words = ['hello', 'goodbye'];
   * var otherWords = ['hi', 'goodbye'];
   *
   * _.isEqual(words, otherWords, function(a, b) {
   *   var reGreet = /^(?:hello|hi)$/i,
   *       aGreet = _.isString(a) && reGreet.test(a),
   *       bGreet = _.isString(b) && reGreet.test(b);
   *
   *   return (aGreet || bGreet) ? (aGreet == bGreet) : undefined;
   * });
   * // => true
   */
  function isEqual(a, b) {
    return baseIsEqual(a, b);
  }

  /**
   * Checks if `value` is, or can be coerced to, a finite number.
   *
   * Note: This is not the same as native `isFinite` which will return true for
   * booleans and empty strings. See http://es5.github.io/#x15.1.2.5.
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if the `value` is finite, else `false`.
   * @example
   *
   * _.isFinite(-101);
   * // => true
   *
   * _.isFinite('10');
   * // => true
   *
   * _.isFinite(true);
   * // => false
   *
   * _.isFinite('');
   * // => false
   *
   * _.isFinite(Infinity);
   * // => false
   */
  function isFinite(value) {
    return nativeIsFinite(value) && !nativeIsNaN(parseFloat(value));
  }

  /**
   * Checks if `value` is a function.
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if the `value` is a function, else `false`.
   * @example
   *
   * _.isFunction(_);
   * // => true
   */
  function isFunction(value) {
    return typeof value == 'function';
  }
  // fallback for older versions of Chrome and Safari
  if (isFunction(/x/)) {
    isFunction = function(value) {
      return typeof value == 'function' && toString.call(value) == funcClass;
    };
  }

  /**
   * Checks if `value` is the language type of Object.
   * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if the `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(1);
   * // => false
   */
  function isObject(value) {
    // check if the value is the ECMAScript language type of Object
    // http://es5.github.io/#x8
    // and avoid a V8 bug
    // http://code.google.com/p/v8/issues/detail?id=2291
    return !!(value && objectTypes[typeof value]);
  }

  /**
   * Checks if `value` is `NaN`.
   *
   * Note: This is not the same as native `isNaN` which will return `true` for
   * `undefined` and other non-numeric values. See http://es5.github.io/#x15.1.2.4.
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if the `value` is `NaN`, else `false`.
   * @example
   *
   * _.isNaN(NaN);
   * // => true
   *
   * _.isNaN(new Number(NaN));
   * // => true
   *
   * isNaN(undefined);
   * // => true
   *
   * _.isNaN(undefined);
   * // => false
   */
  function isNaN(value) {
    // `NaN` as a primitive is the only value that is not equal to itself
    // (perform the [[Class]] check first to avoid errors with some host objects in IE)
    return isNumber(value) && value != +value;
  }

  /**
   * Checks if `value` is `null`.
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if the `value` is `null`, else `false`.
   * @example
   *
   * _.isNull(null);
   * // => true
   *
   * _.isNull(undefined);
   * // => false
   */
  function isNull(value) {
    return value === null;
  }

  /**
   * Checks if `value` is a number.
   *
   * Note: `NaN` is considered a number. See http://es5.github.io/#x8.5.
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if the `value` is a number, else `false`.
   * @example
   *
   * _.isNumber(8.4 * 5);
   * // => true
   */
  function isNumber(value) {
    return typeof value == 'number' ||
      value && typeof value == 'object' && toString.call(value) == numberClass || false;
  }

  /**
   * Checks if `value` is a regular expression.
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if the `value` is a regular expression, else `false`.
   * @example
   *
   * _.isRegExp(/fred/);
   * // => true
   */
  function isRegExp(value) {
    return value && objectTypes[typeof value] && toString.call(value) == regexpClass || false;
  }

  /**
   * Checks if `value` is a string.
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if the `value` is a string, else `false`.
   * @example
   *
   * _.isString('fred');
   * // => true
   */
  function isString(value) {
    return typeof value == 'string' ||
      value && typeof value == 'object' && toString.call(value) == stringClass || false;
  }

  /**
   * Checks if `value` is `undefined`.
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if the `value` is `undefined`, else `false`.
   * @example
   *
   * _.isUndefined(void 0);
   * // => true
   */
  function isUndefined(value) {
    return typeof value == 'undefined';
  }

  /**
   * Creates a shallow clone of `object` excluding the specified properties.
   * Property names may be specified as individual arguments or as arrays of
   * property names. If a callback is provided it will be executed for each
   * property of `object` omitting the properties the callback returns truey
   * for. The callback is bound to `thisArg` and invoked with three arguments;
   * (value, key, object).
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {Object} object The source object.
   * @param {Function|...string|string[]} [callback] The properties to omit or the
   *  function called per iteration.
   * @param {*} [thisArg] The `this` binding of `callback`.
   * @returns {Object} Returns an object without the omitted properties.
   * @example
   *
   * _.omit({ 'name': 'fred', 'age': 40 }, 'age');
   * // => { 'name': 'fred' }
   *
   * _.omit({ 'name': 'fred', 'age': 40 }, function(value) {
   *   return typeof value == 'number';
   * });
   * // => { 'name': 'fred' }
   */
  function omit(object) {
    var props = [];
    forIn(object, function(value, key) {
      props.push(key);
    });
    props = baseDifference(props, baseFlatten(arguments, true, false, 1));

    var index = -1,
        length = props.length,
        result = {};

    while (++index < length) {
      var key = props[index];
      result[key] = object[key];
    }
    return result;
  }

  /**
   * Creates a two dimensional array of an object's key-value pairs,
   * i.e. `[[key1, value1], [key2, value2]]`.
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {Object} object The object to inspect.
   * @returns {Array} Returns new array of key-value pairs.
   * @example
   *
   * _.pairs({ 'barney': 36, 'fred': 40 });
   * // => [['barney', 36], ['fred', 40]] (property order is not guaranteed across environments)
   */
  function pairs(object) {
    var index = -1,
        props = keys(object),
        length = props.length,
        result = Array(length);

    while (++index < length) {
      var key = props[index];
      result[index] = [key, object[key]];
    }
    return result;
  }

  /**
   * Creates a shallow clone of `object` composed of the specified properties.
   * Property names may be specified as individual arguments or as arrays of
   * property names. If a callback is provided it will be executed for each
   * property of `object` picking the properties the callback returns truey
   * for. The callback is bound to `thisArg` and invoked with three arguments;
   * (value, key, object).
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {Object} object The source object.
   * @param {Function|...string|string[]} [callback] The function called per
   *  iteration or property names to pick, specified as individual property
   *  names or arrays of property names.
   * @param {*} [thisArg] The `this` binding of `callback`.
   * @returns {Object} Returns an object composed of the picked properties.
   * @example
   *
   * _.pick({ 'name': 'fred', '_userid': 'fred1' }, 'name');
   * // => { 'name': 'fred' }
   *
   * _.pick({ 'name': 'fred', '_userid': 'fred1' }, function(value, key) {
   *   return key.charAt(0) != '_';
   * });
   * // => { 'name': 'fred' }
   */
  function pick(object) {
    var index = -1,
        props = baseFlatten(arguments, true, false, 1),
        length = props.length,
        result = {};

    while (++index < length) {
      var key = props[index];
      if (key in object) {
        result[key] = object[key];
      }
    }
    return result;
  }

  /**
   * Creates an array composed of the own enumerable property values of `object`.
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {Object} object The object to inspect.
   * @returns {Array} Returns an array of property values.
   * @example
   *
   * _.values({ 'one': 1, 'two': 2, 'three': 3 });
   * // => [1, 2, 3] (property order is not guaranteed across environments)
   */
  function values(object) {
    var index = -1,
        props = keys(object),
        length = props.length,
        result = Array(length);

    while (++index < length) {
      result[index] = object[props[index]];
    }
    return result;
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Checks if a given value is present in a collection using strict equality
   * for comparisons, i.e. `===`. If `fromIndex` is negative, it is used as the
   * offset from the end of the collection.
   *
   * @static
   * @memberOf _
   * @alias include
   * @category Collections
   * @param {Array|Object|string} collection The collection to iterate over.
   * @param {*} target The value to check for.
   * @param {number} [fromIndex=0] The index to search from.
   * @returns {boolean} Returns `true` if the `target` element is found, else `false`.
   * @example
   *
   * _.contains([1, 2, 3], 1);
   * // => true
   *
   * _.contains([1, 2, 3], 1, 2);
   * // => false
   *
   * _.contains({ 'name': 'fred', 'age': 40 }, 'fred');
   * // => true
   *
   * _.contains('pebbles', 'eb');
   * // => true
   */
  function contains(collection, target) {
    var indexOf = getIndexOf(),
        length = collection ? collection.length : 0,
        result = false;
    if (length && typeof length == 'number') {
      result = indexOf(collection, target) > -1;
    } else {
      forOwn(collection, function(value) {
        return (result = value === target) && indicatorObject;
      });
    }
    return result;
  }

  /**
   * Creates an object composed of keys generated from the results of running
   * each element of `collection` through the callback. The corresponding value
   * of each key is the number of times the key was returned by the callback.
   * The callback is bound to `thisArg` and invoked with three arguments;
   * (value, index|key, collection).
   *
   * If a property name is provided for `callback` the created "_.pluck" style
   * callback will return the property value of the given element.
   *
   * If an object is provided for `callback` the created "_.where" style callback
   * will return `true` for elements that have the properties of the given object,
   * else `false`.
   *
   * @static
   * @memberOf _
   * @category Collections
   * @param {Array|Object|string} collection The collection to iterate over.
   * @param {Function|Object|string} [callback=identity] The function called
   *  per iteration. If a property name or object is provided it will be used
   *  to create a "_.pluck" or "_.where" style callback, respectively.
   * @param {*} [thisArg] The `this` binding of `callback`.
   * @returns {Object} Returns the composed aggregate object.
   * @example
   *
   * _.countBy([4.3, 6.1, 6.4], function(num) { return Math.floor(num); });
   * // => { '4': 1, '6': 2 }
   *
   * _.countBy([4.3, 6.1, 6.4], function(num) { return this.floor(num); }, Math);
   * // => { '4': 1, '6': 2 }
   *
   * _.countBy(['one', 'two', 'three'], 'length');
   * // => { '3': 2, '5': 1 }
   */
  var countBy = createAggregator(function(result, value, key) {
    (hasOwnProperty.call(result, key) ? result[key]++ : result[key] = 1);
  });

  /**
   * Checks if the given callback returns truey value for **all** elements of
   * a collection. The callback is bound to `thisArg` and invoked with three
   * arguments; (value, index|key, collection).
   *
   * If a property name is provided for `callback` the created "_.pluck" style
   * callback will return the property value of the given element.
   *
   * If an object is provided for `callback` the created "_.where" style callback
   * will return `true` for elements that have the properties of the given object,
   * else `false`.
   *
   * @static
   * @memberOf _
   * @alias all
   * @category Collections
   * @param {Array|Object|string} collection The collection to iterate over.
   * @param {Function|Object|string} [callback=identity] The function called
   *  per iteration. If a property name or object is provided it will be used
   *  to create a "_.pluck" or "_.where" style callback, respectively.
   * @param {*} [thisArg] The `this` binding of `callback`.
   * @returns {boolean} Returns `true` if all elements passed the callback check,
   *  else `false`.
   * @example
   *
   * _.every([true, 1, null, 'yes']);
   * // => false
   *
   * var characters = [
   *   { 'name': 'barney', 'age': 36 },
   *   { 'name': 'fred',   'age': 40 }
   * ];
   *
   * // using "_.pluck" callback shorthand
   * _.every(characters, 'age');
   * // => true
   *
   * // using "_.where" callback shorthand
   * _.every(characters, { 'age': 36 });
   * // => false
   */
  function every(collection, callback, thisArg) {
    var result = true;
    callback = createCallback(callback, thisArg, 3);

    var index = -1,
        length = collection ? collection.length : 0;

    if (typeof length == 'number') {
      while (++index < length) {
        if (!(result = !!callback(collection[index], index, collection))) {
          break;
        }
      }
    } else {
      forOwn(collection, function(value, index, collection) {
        return !(result = !!callback(value, index, collection)) && indicatorObject;
      });
    }
    return result;
  }

  /**
   * Iterates over elements of a collection, returning an array of all elements
   * the callback returns truey for. The callback is bound to `thisArg` and
   * invoked with three arguments; (value, index|key, collection).
   *
   * If a property name is provided for `callback` the created "_.pluck" style
   * callback will return the property value of the given element.
   *
   * If an object is provided for `callback` the created "_.where" style callback
   * will return `true` for elements that have the properties of the given object,
   * else `false`.
   *
   * @static
   * @memberOf _
   * @alias select
   * @category Collections
   * @param {Array|Object|string} collection The collection to iterate over.
   * @param {Function|Object|string} [callback=identity] The function called
   *  per iteration. If a property name or object is provided it will be used
   *  to create a "_.pluck" or "_.where" style callback, respectively.
   * @param {*} [thisArg] The `this` binding of `callback`.
   * @returns {Array} Returns a new array of elements that passed the callback check.
   * @example
   *
   * var evens = _.filter([1, 2, 3, 4, 5, 6], function(num) { return num % 2 == 0; });
   * // => [2, 4, 6]
   *
   * var characters = [
   *   { 'name': 'barney', 'age': 36, 'blocked': false },
   *   { 'name': 'fred',   'age': 40, 'blocked': true }
   * ];
   *
   * // using "_.pluck" callback shorthand
   * _.filter(characters, 'blocked');
   * // => [{ 'name': 'fred', 'age': 40, 'blocked': true }]
   *
   * // using "_.where" callback shorthand
   * _.filter(characters, { 'age': 36 });
   * // => [{ 'name': 'barney', 'age': 36, 'blocked': false }]
   */
  function filter(collection, callback, thisArg) {
    var result = [];
    callback = createCallback(callback, thisArg, 3);

    var index = -1,
        length = collection ? collection.length : 0;

    if (typeof length == 'number') {
      while (++index < length) {
        var value = collection[index];
        if (callback(value, index, collection)) {
          result.push(value);
        }
      }
    } else {
      forOwn(collection, function(value, index, collection) {
        if (callback(value, index, collection)) {
          result.push(value);
        }
      });
    }
    return result;
  }

  /**
   * Iterates over elements of a collection, returning the first element that
   * the callback returns truey for. The callback is bound to `thisArg` and
   * invoked with three arguments; (value, index|key, collection).
   *
   * If a property name is provided for `callback` the created "_.pluck" style
   * callback will return the property value of the given element.
   *
   * If an object is provided for `callback` the created "_.where" style callback
   * will return `true` for elements that have the properties of the given object,
   * else `false`.
   *
   * @static
   * @memberOf _
   * @alias detect, findWhere
   * @category Collections
   * @param {Array|Object|string} collection The collection to iterate over.
   * @param {Function|Object|string} [callback=identity] The function called
   *  per iteration. If a property name or object is provided it will be used
   *  to create a "_.pluck" or "_.where" style callback, respectively.
   * @param {*} [thisArg] The `this` binding of `callback`.
   * @returns {*} Returns the found element, else `undefined`.
   * @example
   *
   * var characters = [
   *   { 'name': 'barney',  'age': 36, 'blocked': false },
   *   { 'name': 'fred',    'age': 40, 'blocked': true },
   *   { 'name': 'pebbles', 'age': 1,  'blocked': false }
   * ];
   *
   * _.find(characters, function(chr) {
   *   return chr.age < 40;
   * });
   * // => { 'name': 'barney', 'age': 36, 'blocked': false }
   *
   * // using "_.where" callback shorthand
   * _.find(characters, { 'age': 1 });
   * // =>  { 'name': 'pebbles', 'age': 1, 'blocked': false }
   *
   * // using "_.pluck" callback shorthand
   * _.find(characters, 'blocked');
   * // => { 'name': 'fred', 'age': 40, 'blocked': true }
   */
  function find(collection, callback, thisArg) {
    callback = createCallback(callback, thisArg, 3);

    var index = -1,
        length = collection ? collection.length : 0;

    if (typeof length == 'number') {
      while (++index < length) {
        var value = collection[index];
        if (callback(value, index, collection)) {
          return value;
        }
      }
    } else {
      var result;
      forOwn(collection, function(value, index, collection) {
        if (callback(value, index, collection)) {
          result = value;
          return indicatorObject;
        }
      });
      return result;
    }
  }

  /**
   * Examines each element in a `collection`, returning the first that
   * has the given properties. When checking `properties`, this method
   * performs a deep comparison between values to determine if they are
   * equivalent to each other.
   *
   * @static
   * @memberOf _
   * @category Collections
   * @param {Array|Object|string} collection The collection to iterate over.
   * @param {Object} properties The object of property values to filter by.
   * @returns {*} Returns the found element, else `undefined`.
   * @example
   *
   * var food = [
   *   { 'name': 'apple',  'organic': false, 'type': 'fruit' },
   *   { 'name': 'banana', 'organic': true,  'type': 'fruit' },
   *   { 'name': 'beet',   'organic': false, 'type': 'vegetable' }
   * ];
   *
   * _.findWhere(food, { 'type': 'vegetable' });
   * // => { 'name': 'beet', 'organic': false, 'type': 'vegetable' }
   */
  function findWhere(object, properties) {
    return where(object, properties, true);
  }

  /**
   * Iterates over elements of a collection, executing the callback for each
   * element. The callback is bound to `thisArg` and invoked with three arguments;
   * (value, index|key, collection). Callbacks may exit iteration early by
   * explicitly returning `false`.
   *
   * Note: As with other "Collections" methods, objects with a `length` property
   * are iterated like arrays. To avoid this behavior `_.forIn` or `_.forOwn`
   * may be used for object iteration.
   *
   * @static
   * @memberOf _
   * @alias each
   * @category Collections
   * @param {Array|Object|string} collection The collection to iterate over.
   * @param {Function} [callback=identity] The function called per iteration.
   * @param {*} [thisArg] The `this` binding of `callback`.
   * @returns {Array|Object|string} Returns `collection`.
   * @example
   *
   * _([1, 2, 3]).forEach(function(num) { console.log(num); }).join(',');
   * // => logs each number and returns '1,2,3'
   *
   * _.forEach({ 'one': 1, 'two': 2, 'three': 3 }, function(num) { console.log(num); });
   * // => logs each number and returns the object (property order is not guaranteed across environments)
   */
  function forEach(collection, callback, thisArg) {
    var index = -1,
        length = collection ? collection.length : 0;

    callback = callback && typeof thisArg == 'undefined' ? callback : baseCreateCallback(callback, thisArg, 3);
    if (typeof length == 'number') {
      while (++index < length) {
        if (callback(collection[index], index, collection) === indicatorObject) {
          break;
        }
      }
    } else {
      forOwn(collection, callback);
    }
  }

  /**
   * This method is like `_.forEach` except that it iterates over elements
   * of a `collection` from right to left.
   *
   * @static
   * @memberOf _
   * @alias eachRight
   * @category Collections
   * @param {Array|Object|string} collection The collection to iterate over.
   * @param {Function} [callback=identity] The function called per iteration.
   * @param {*} [thisArg] The `this` binding of `callback`.
   * @returns {Array|Object|string} Returns `collection`.
   * @example
   *
   * _([1, 2, 3]).forEachRight(function(num) { console.log(num); }).join(',');
   * // => logs each number from right to left and returns '3,2,1'
   */
  function forEachRight(collection, callback) {
    var length = collection ? collection.length : 0;
    if (typeof length == 'number') {
      while (length--) {
        if (callback(collection[length], length, collection) === false) {
          break;
        }
      }
    } else {
      var props = keys(collection);
      length = props.length;
      forOwn(collection, function(value, key, collection) {
        key = props ? props[--length] : --length;
        return callback(collection[key], key, collection) === false && indicatorObject;
      });
    }
  }

  /**
   * Creates an object composed of keys generated from the results of running
   * each element of a collection through the callback. The corresponding value
   * of each key is an array of the elements responsible for generating the key.
   * The callback is bound to `thisArg` and invoked with three arguments;
   * (value, index|key, collection).
   *
   * If a property name is provided for `callback` the created "_.pluck" style
   * callback will return the property value of the given element.
   *
   * If an object is provided for `callback` the created "_.where" style callback
   * will return `true` for elements that have the properties of the given object,
   * else `false`
   *
   * @static
   * @memberOf _
   * @category Collections
   * @param {Array|Object|string} collection The collection to iterate over.
   * @param {Function|Object|string} [callback=identity] The function called
   *  per iteration. If a property name or object is provided it will be used
   *  to create a "_.pluck" or "_.where" style callback, respectively.
   * @param {*} [thisArg] The `this` binding of `callback`.
   * @returns {Object} Returns the composed aggregate object.
   * @example
   *
   * _.groupBy([4.2, 6.1, 6.4], function(num) { return Math.floor(num); });
   * // => { '4': [4.2], '6': [6.1, 6.4] }
   *
   * _.groupBy([4.2, 6.1, 6.4], function(num) { return this.floor(num); }, Math);
   * // => { '4': [4.2], '6': [6.1, 6.4] }
   *
   * // using "_.pluck" callback shorthand
   * _.groupBy(['one', 'two', 'three'], 'length');
   * // => { '3': ['one', 'two'], '5': ['three'] }
   */
  var groupBy = createAggregator(function(result, value, key) {
    (hasOwnProperty.call(result, key) ? result[key] : result[key] = []).push(value);
  });

  /**
   * Creates an object composed of keys generated from the results of running
   * each element of the collection through the given callback. The corresponding
   * value of each key is the last element responsible for generating the key.
   * The callback is bound to `thisArg` and invoked with three arguments;
   * (value, index|key, collection).
   *
   * If a property name is provided for `callback` the created "_.pluck" style
   * callback will return the property value of the given element.
   *
   * If an object is provided for `callback` the created "_.where" style callback
   * will return `true` for elements that have the properties of the given object,
   * else `false`.
   *
   * @static
   * @memberOf _
   * @category Collections
   * @param {Array|Object|string} collection The collection to iterate over.
   * @param {Function|Object|string} [callback=identity] The function called
   *  per iteration. If a property name or object is provided it will be used
   *  to create a "_.pluck" or "_.where" style callback, respectively.
   * @param {*} [thisArg] The `this` binding of `callback`.
   * @returns {Object} Returns the composed aggregate object.
   * @example
   *
   * var keys = [
   *   { 'dir': 'left', 'code': 97 },
   *   { 'dir': 'right', 'code': 100 }
   * ];
   *
   * _.indexBy(keys, 'dir');
   * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
   *
   * _.indexBy(keys, function(key) { return String.fromCharCode(key.code); });
   * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
   *
   * _.indexBy(characters, function(key) { this.fromCharCode(key.code); }, String);
   * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
   */
  var indexBy = createAggregator(function(result, value, key) {
    result[key] = value;
  });

  /**
   * Invokes the method named by `methodName` on each element in the `collection`
   * returning an array of the results of each invoked method. Additional arguments
   * will be provided to each invoked method. If `methodName` is a function it
   * will be invoked for, and `this` bound to, each element in the `collection`.
   *
   * @static
   * @memberOf _
   * @category Collections
   * @param {Array|Object|string} collection The collection to iterate over.
   * @param {Function|string} methodName The name of the method to invoke or
   *  the function invoked per iteration.
   * @param {...*} [arg] Arguments to invoke the method with.
   * @returns {Array} Returns a new array of the results of each invoked method.
   * @example
   *
   * _.invoke([[5, 1, 7], [3, 2, 1]], 'sort');
   * // => [[1, 5, 7], [1, 2, 3]]
   *
   * _.invoke([123, 456], String.prototype.split, '');
   * // => [['1', '2', '3'], ['4', '5', '6']]
   */
  function invoke(collection, methodName) {
    var args = slice(arguments, 2),
        index = -1,
        isFunc = typeof methodName == 'function',
        length = collection ? collection.length : 0,
        result = Array(typeof length == 'number' ? length : 0);

    forEach(collection, function(value) {
      result[++index] = (isFunc ? methodName : value[methodName]).apply(value, args);
    });
    return result;
  }

  /**
   * Creates an array of values by running each element in the collection
   * through the callback. The callback is bound to `thisArg` and invoked with
   * three arguments; (value, index|key, collection).
   *
   * If a property name is provided for `callback` the created "_.pluck" style
   * callback will return the property value of the given element.
   *
   * If an object is provided for `callback` the created "_.where" style callback
   * will return `true` for elements that have the properties of the given object,
   * else `false`.
   *
   * @static
   * @memberOf _
   * @alias collect
   * @category Collections
   * @param {Array|Object|string} collection The collection to iterate over.
   * @param {Function|Object|string} [callback=identity] The function called
   *  per iteration. If a property name or object is provided it will be used
   *  to create a "_.pluck" or "_.where" style callback, respectively.
   * @param {*} [thisArg] The `this` binding of `callback`.
   * @returns {Array} Returns a new array of the results of each `callback` execution.
   * @example
   *
   * _.map([1, 2, 3], function(num) { return num * 3; });
   * // => [3, 6, 9]
   *
   * _.map({ 'one': 1, 'two': 2, 'three': 3 }, function(num) { return num * 3; });
   * // => [3, 6, 9] (property order is not guaranteed across environments)
   *
   * var characters = [
   *   { 'name': 'barney', 'age': 36 },
   *   { 'name': 'fred',   'age': 40 }
   * ];
   *
   * // using "_.pluck" callback shorthand
   * _.map(characters, 'name');
   * // => ['barney', 'fred']
   */
  function map(collection, callback, thisArg) {
    var index = -1,
        length = collection ? collection.length : 0;

    callback = createCallback(callback, thisArg, 3);
    if (typeof length == 'number') {
      var result = Array(length);
      while (++index < length) {
        result[index] = callback(collection[index], index, collection);
      }
    } else {
      result = [];
      forOwn(collection, function(value, key, collection) {
        result[++index] = callback(value, key, collection);
      });
    }
    return result;
  }

  /**
   * Retrieves the maximum value of a collection. If the collection is empty or
   * falsey `-Infinity` is returned. If a callback is provided it will be executed
   * for each value in the collection to generate the criterion by which the value
   * is ranked. The callback is bound to `thisArg` and invoked with three
   * arguments; (value, index, collection).
   *
   * If a property name is provided for `callback` the created "_.pluck" style
   * callback will return the property value of the given element.
   *
   * If an object is provided for `callback` the created "_.where" style callback
   * will return `true` for elements that have the properties of the given object,
   * else `false`.
   *
   * @static
   * @memberOf _
   * @category Collections
   * @param {Array|Object|string} collection The collection to iterate over.
   * @param {Function|Object|string} [callback=identity] The function called
   *  per iteration. If a property name or object is provided it will be used
   *  to create a "_.pluck" or "_.where" style callback, respectively.
   * @param {*} [thisArg] The `this` binding of `callback`.
   * @returns {*} Returns the maximum value.
   * @example
   *
   * _.max([4, 2, 8, 6]);
   * // => 8
   *
   * var characters = [
   *   { 'name': 'barney', 'age': 36 },
   *   { 'name': 'fred',   'age': 40 }
   * ];
   *
   * _.max(characters, function(chr) { return chr.age; });
   * // => { 'name': 'fred', 'age': 40 };
   *
   * // using "_.pluck" callback shorthand
   * _.max(characters, 'age');
   * // => { 'name': 'fred', 'age': 40 };
   */
  function max(collection, callback, thisArg) {
    var computed = -Infinity,
        result = computed;

    // allows working with functions like `_.map` without using
    // their `index` argument as a callback
    if (typeof callback != 'function' && thisArg && thisArg[callback] === collection) {
      callback = null;
    }
    var index = -1,
        length = collection ? collection.length : 0;

    if (callback == null && typeof length == 'number') {
      while (++index < length) {
        var value = collection[index];
        if (value > result) {
          result = value;
        }
      }
    } else {
      callback = createCallback(callback, thisArg, 3);

      forEach(collection, function(value, index, collection) {
        var current = callback(value, index, collection);
        if (current > computed) {
          computed = current;
          result = value;
        }
      });
    }
    return result;
  }

  /**
   * Retrieves the minimum value of a collection. If the collection is empty or
   * falsey `Infinity` is returned. If a callback is provided it will be executed
   * for each value in the collection to generate the criterion by which the value
   * is ranked. The callback is bound to `thisArg` and invoked with three
   * arguments; (value, index, collection).
   *
   * If a property name is provided for `callback` the created "_.pluck" style
   * callback will return the property value of the given element.
   *
   * If an object is provided for `callback` the created "_.where" style callback
   * will return `true` for elements that have the properties of the given object,
   * else `false`.
   *
   * @static
   * @memberOf _
   * @category Collections
   * @param {Array|Object|string} collection The collection to iterate over.
   * @param {Function|Object|string} [callback=identity] The function called
   *  per iteration. If a property name or object is provided it will be used
   *  to create a "_.pluck" or "_.where" style callback, respectively.
   * @param {*} [thisArg] The `this` binding of `callback`.
   * @returns {*} Returns the minimum value.
   * @example
   *
   * _.min([4, 2, 8, 6]);
   * // => 2
   *
   * var characters = [
   *   { 'name': 'barney', 'age': 36 },
   *   { 'name': 'fred',   'age': 40 }
   * ];
   *
   * _.min(characters, function(chr) { return chr.age; });
   * // => { 'name': 'barney', 'age': 36 };
   *
   * // using "_.pluck" callback shorthand
   * _.min(characters, 'age');
   * // => { 'name': 'barney', 'age': 36 };
   */
  function min(collection, callback, thisArg) {
    var computed = Infinity,
        result = computed;

    // allows working with functions like `_.map` without using
    // their `index` argument as a callback
    if (typeof callback != 'function' && thisArg && thisArg[callback] === collection) {
      callback = null;
    }
    var index = -1,
        length = collection ? collection.length : 0;

    if (callback == null && typeof length == 'number') {
      while (++index < length) {
        var value = collection[index];
        if (value < result) {
          result = value;
        }
      }
    } else {
      callback = createCallback(callback, thisArg, 3);

      forEach(collection, function(value, index, collection) {
        var current = callback(value, index, collection);
        if (current < computed) {
          computed = current;
          result = value;
        }
      });
    }
    return result;
  }

  /**
   * Retrieves the value of a specified property from all elements in the collection.
   *
   * @static
   * @memberOf _
   * @type Function
   * @category Collections
   * @param {Array|Object|string} collection The collection to iterate over.
   * @param {string} property The name of the property to pluck.
   * @returns {Array} Returns a new array of property values.
   * @example
   *
   * var characters = [
   *   { 'name': 'barney', 'age': 36 },
   *   { 'name': 'fred',   'age': 40 }
   * ];
   *
   * _.pluck(characters, 'name');
   * // => ['barney', 'fred']
   */
  var pluck = map;

  /**
   * Reduces a collection to a value which is the accumulated result of running
   * each element in the collection through the callback, where each successive
   * callback execution consumes the return value of the previous execution. If
   * `accumulator` is not provided the first element of the collection will be
   * used as the initial `accumulator` value. The callback is bound to `thisArg`
   * and invoked with four arguments; (accumulator, value, index|key, collection).
   *
   * @static
   * @memberOf _
   * @alias foldl, inject
   * @category Collections
   * @param {Array|Object|string} collection The collection to iterate over.
   * @param {Function} [callback=identity] The function called per iteration.
   * @param {*} [accumulator] Initial value of the accumulator.
   * @param {*} [thisArg] The `this` binding of `callback`.
   * @returns {*} Returns the accumulated value.
   * @example
   *
   * var sum = _.reduce([1, 2, 3], function(sum, num) {
   *   return sum + num;
   * });
   * // => 6
   *
   * var mapped = _.reduce({ 'a': 1, 'b': 2, 'c': 3 }, function(result, num, key) {
   *   result[key] = num * 3;
   *   return result;
   * }, {});
   * // => { 'a': 3, 'b': 6, 'c': 9 }
   */
  function reduce(collection, callback, accumulator, thisArg) {
    if (!collection) return accumulator;
    var noaccum = arguments.length < 3;
    callback = createCallback(callback, thisArg, 4);

    var index = -1,
        length = collection.length;

    if (typeof length == 'number') {
      if (noaccum) {
        accumulator = collection[++index];
      }
      while (++index < length) {
        accumulator = callback(accumulator, collection[index], index, collection);
      }
    } else {
      forOwn(collection, function(value, index, collection) {
        accumulator = noaccum
          ? (noaccum = false, value)
          : callback(accumulator, value, index, collection)
      });
    }
    return accumulator;
  }

  /**
   * This method is like `_.reduce` except that it iterates over elements
   * of a `collection` from right to left.
   *
   * @static
   * @memberOf _
   * @alias foldr
   * @category Collections
   * @param {Array|Object|string} collection The collection to iterate over.
   * @param {Function} [callback=identity] The function called per iteration.
   * @param {*} [accumulator] Initial value of the accumulator.
   * @param {*} [thisArg] The `this` binding of `callback`.
   * @returns {*} Returns the accumulated value.
   * @example
   *
   * var list = [[0, 1], [2, 3], [4, 5]];
   * var flat = _.reduceRight(list, function(a, b) { return a.concat(b); }, []);
   * // => [4, 5, 2, 3, 0, 1]
   */
  function reduceRight(collection, callback, accumulator, thisArg) {
    var noaccum = arguments.length < 3;
    callback = createCallback(callback, thisArg, 4);
    forEachRight(collection, function(value, index, collection) {
      accumulator = noaccum
        ? (noaccum = false, value)
        : callback(accumulator, value, index, collection);
    });
    return accumulator;
  }

  /**
   * The opposite of `_.filter` this method returns the elements of a
   * collection that the callback does **not** return truey for.
   *
   * If a property name is provided for `callback` the created "_.pluck" style
   * callback will return the property value of the given element.
   *
   * If an object is provided for `callback` the created "_.where" style callback
   * will return `true` for elements that have the properties of the given object,
   * else `false`.
   *
   * @static
   * @memberOf _
   * @category Collections
   * @param {Array|Object|string} collection The collection to iterate over.
   * @param {Function|Object|string} [callback=identity] The function called
   *  per iteration. If a property name or object is provided it will be used
   *  to create a "_.pluck" or "_.where" style callback, respectively.
   * @param {*} [thisArg] The `this` binding of `callback`.
   * @returns {Array} Returns a new array of elements that failed the callback check.
   * @example
   *
   * var odds = _.reject([1, 2, 3, 4, 5, 6], function(num) { return num % 2 == 0; });
   * // => [1, 3, 5]
   *
   * var characters = [
   *   { 'name': 'barney', 'age': 36, 'blocked': false },
   *   { 'name': 'fred',   'age': 40, 'blocked': true }
   * ];
   *
   * // using "_.pluck" callback shorthand
   * _.reject(characters, 'blocked');
   * // => [{ 'name': 'barney', 'age': 36, 'blocked': false }]
   *
   * // using "_.where" callback shorthand
   * _.reject(characters, { 'age': 36 });
   * // => [{ 'name': 'fred', 'age': 40, 'blocked': true }]
   */
  function reject(collection, callback, thisArg) {
    callback = createCallback(callback, thisArg, 3);
    return filter(collection, function(value, index, collection) {
      return !callback(value, index, collection);
    });
  }

  /**
   * Retrieves a random element or `n` random elements from a collection.
   *
   * @static
   * @memberOf _
   * @category Collections
   * @param {Array|Object|string} collection The collection to sample.
   * @param {number} [n] The number of elements to sample.
   * @param- {Object} [guard] Allows working with functions like `_.map`
   *  without using their `index` arguments as `n`.
   * @returns {Array} Returns the random sample(s) of `collection`.
   * @example
   *
   * _.sample([1, 2, 3, 4]);
   * // => 2
   *
   * _.sample([1, 2, 3, 4], 2);
   * // => [3, 1]
   */
  function sample(collection, n, guard) {
    if (collection && typeof collection.length != 'number') {
      collection = values(collection);
    }
    if (n == null || guard) {
      return collection ? collection[baseRandom(0, collection.length - 1)] : undefined;
    }
    var result = shuffle(collection);
    result.length = nativeMin(nativeMax(0, n), result.length);
    return result;
  }

  /**
   * Creates an array of shuffled values, using a version of the Fisher-Yates
   * shuffle. See http://en.wikipedia.org/wiki/Fisher-Yates_shuffle.
   *
   * @static
   * @memberOf _
   * @category Collections
   * @param {Array|Object|string} collection The collection to shuffle.
   * @returns {Array} Returns a new shuffled collection.
   * @example
   *
   * _.shuffle([1, 2, 3, 4, 5, 6]);
   * // => [4, 1, 6, 3, 5, 2]
   */
  function shuffle(collection) {
    var index = -1,
        length = collection ? collection.length : 0,
        result = Array(typeof length == 'number' ? length : 0);

    forEach(collection, function(value) {
      var rand = baseRandom(0, ++index);
      result[index] = result[rand];
      result[rand] = value;
    });
    return result;
  }

  /**
   * Gets the size of the `collection` by returning `collection.length` for arrays
   * and array-like objects or the number of own enumerable properties for objects.
   *
   * @static
   * @memberOf _
   * @category Collections
   * @param {Array|Object|string} collection The collection to inspect.
   * @returns {number} Returns `collection.length` or number of own enumerable properties.
   * @example
   *
   * _.size([1, 2]);
   * // => 2
   *
   * _.size({ 'one': 1, 'two': 2, 'three': 3 });
   * // => 3
   *
   * _.size('pebbles');
   * // => 7
   */
  function size(collection) {
    var length = collection ? collection.length : 0;
    return typeof length == 'number' ? length : keys(collection).length;
  }

  /**
   * Checks if the callback returns a truey value for **any** element of a
   * collection. The function returns as soon as it finds a passing value and
   * does not iterate over the entire collection. The callback is bound to
   * `thisArg` and invoked with three arguments; (value, index|key, collection).
   *
   * If a property name is provided for `callback` the created "_.pluck" style
   * callback will return the property value of the given element.
   *
   * If an object is provided for `callback` the created "_.where" style callback
   * will return `true` for elements that have the properties of the given object,
   * else `false`.
   *
   * @static
   * @memberOf _
   * @alias any
   * @category Collections
   * @param {Array|Object|string} collection The collection to iterate over.
   * @param {Function|Object|string} [callback=identity] The function called
   *  per iteration. If a property name or object is provided it will be used
   *  to create a "_.pluck" or "_.where" style callback, respectively.
   * @param {*} [thisArg] The `this` binding of `callback`.
   * @returns {boolean} Returns `true` if any element passed the callback check,
   *  else `false`.
   * @example
   *
   * _.some([null, 0, 'yes', false], Boolean);
   * // => true
   *
   * var characters = [
   *   { 'name': 'barney', 'age': 36, 'blocked': false },
   *   { 'name': 'fred',   'age': 40, 'blocked': true }
   * ];
   *
   * // using "_.pluck" callback shorthand
   * _.some(characters, 'blocked');
   * // => true
   *
   * // using "_.where" callback shorthand
   * _.some(characters, { 'age': 1 });
   * // => false
   */
  function some(collection, callback, thisArg) {
    var result;
    callback = createCallback(callback, thisArg, 3);

    var index = -1,
        length = collection ? collection.length : 0;

    if (typeof length == 'number') {
      while (++index < length) {
        if ((result = callback(collection[index], index, collection))) {
          break;
        }
      }
    } else {
      forOwn(collection, function(value, index, collection) {
        return (result = callback(value, index, collection)) && indicatorObject;
      });
    }
    return !!result;
  }

  /**
   * Creates an array of elements, sorted in ascending order by the results of
   * running each element in a collection through the callback. This method
   * performs a stable sort, that is, it will preserve the original sort order
   * of equal elements. The callback is bound to `thisArg` and invoked with
   * three arguments; (value, index|key, collection).
   *
   * If a property name is provided for `callback` the created "_.pluck" style
   * callback will return the property value of the given element.
   *
   * If an array of property names is provided for `callback` the collection
   * will be sorted by each property value.
   *
   * If an object is provided for `callback` the created "_.where" style callback
   * will return `true` for elements that have the properties of the given object,
   * else `false`.
   *
   * @static
   * @memberOf _
   * @category Collections
   * @param {Array|Object|string} collection The collection to iterate over.
   * @param {Array|Function|Object|string} [callback=identity] The function called
   *  per iteration. If a property name or object is provided it will be used
   *  to create a "_.pluck" or "_.where" style callback, respectively.
   * @param {*} [thisArg] The `this` binding of `callback`.
   * @returns {Array} Returns a new array of sorted elements.
   * @example
   *
   * _.sortBy([1, 2, 3], function(num) { return Math.sin(num); });
   * // => [3, 1, 2]
   *
   * _.sortBy([1, 2, 3], function(num) { return this.sin(num); }, Math);
   * // => [3, 1, 2]
   *
   * var characters = [
   *   { 'name': 'barney',  'age': 36 },
   *   { 'name': 'fred',    'age': 40 },
   *   { 'name': 'barney',  'age': 26 },
   *   { 'name': 'fred',    'age': 30 }
   * ];
   *
   * // using "_.pluck" callback shorthand
   * _.map(_.sortBy(characters, 'age'), _.values);
   * // => [['barney', 26], ['fred', 30], ['barney', 36], ['fred', 40]]
   *
   * // sorting by multiple properties
   * _.map(_.sortBy(characters, ['name', 'age']), _.values);
   * // = > [['barney', 26], ['barney', 36], ['fred', 30], ['fred', 40]]
   */
  function sortBy(collection, callback, thisArg) {
    var index = -1,
        length = collection ? collection.length : 0,
        result = Array(typeof length == 'number' ? length : 0);

    callback = createCallback(callback, thisArg, 3);
    forEach(collection, function(value, key, collection) {
      result[++index] = {
        'criteria': [callback(value, key, collection)],
        'index': index,
        'value': value
      };
    });

    length = result.length;
    result.sort(compareAscending);
    while (length--) {
      result[length] = result[length].value;
    }
    return result;
  }

  /**
   * Converts the `collection` to an array.
   *
   * @static
   * @memberOf _
   * @category Collections
   * @param {Array|Object|string} collection The collection to convert.
   * @returns {Array} Returns the new converted array.
   * @example
   *
   * (function() { return _.toArray(arguments).slice(1); })(1, 2, 3, 4);
   * // => [2, 3, 4]
   */
  function toArray(collection) {
    if (isArray(collection)) {
      return slice(collection);
    }
    if (collection && typeof collection.length == 'number') {
      return map(collection);
    }
    return values(collection);
  }

  /**
   * Performs a deep comparison of each element in a `collection` to the given
   * `properties` object, returning an array of all elements that have equivalent
   * property values.
   *
   * @static
   * @memberOf _
   * @type Function
   * @category Collections
   * @param {Array|Object|string} collection The collection to iterate over.
   * @param {Object} props The object of property values to filter by.
   * @returns {Array} Returns a new array of elements that have the given properties.
   * @example
   *
   * var characters = [
   *   { 'name': 'barney', 'age': 36, 'pets': ['hoppy'] },
   *   { 'name': 'fred',   'age': 40, 'pets': ['baby puss', 'dino'] }
   * ];
   *
   * _.where(characters, { 'age': 36 });
   * // => [{ 'name': 'barney', 'age': 36, 'pets': ['hoppy'] }]
   *
   * _.where(characters, { 'pets': ['dino'] });
   * // => [{ 'name': 'fred', 'age': 40, 'pets': ['baby puss', 'dino'] }]
   */
  function where(collection, properties, first) {
    return (first && isEmpty(properties))
      ? undefined
      : (first ? find : filter)(collection, properties);
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Creates an array with all falsey values removed. The values `false`, `null`,
   * `0`, `""`, `undefined`, and `NaN` are all falsey.
   *
   * @static
   * @memberOf _
   * @category Arrays
   * @param {Array} array The array to compact.
   * @returns {Array} Returns a new array of filtered values.
   * @example
   *
   * _.compact([0, 1, false, 2, '', 3]);
   * // => [1, 2, 3]
   */
  function compact(array) {
    var index = -1,
        length = array ? array.length : 0,
        result = [];

    while (++index < length) {
      var value = array[index];
      if (value) {
        result.push(value);
      }
    }
    return result;
  }

  /**
   * Creates an array excluding all values of the provided arrays using strict
   * equality for comparisons, i.e. `===`.
   *
   * @static
   * @memberOf _
   * @category Arrays
   * @param {Array} array The array to process.
   * @param {...Array} [values] The arrays of values to exclude.
   * @returns {Array} Returns a new array of filtered values.
   * @example
   *
   * _.difference([1, 2, 3, 4, 5], [5, 2, 10]);
   * // => [1, 3, 4]
   */
  function difference(array) {
    return baseDifference(array, baseFlatten(arguments, true, true, 1));
  }

  /**
   * Gets the first element or first `n` elements of an array. If a callback
   * is provided elements at the beginning of the array are returned as long
   * as the callback returns truey. The callback is bound to `thisArg` and
   * invoked with three arguments; (value, index, array).
   *
   * If a property name is provided for `callback` the created "_.pluck" style
   * callback will return the property value of the given element.
   *
   * If an object is provided for `callback` the created "_.where" style callback
   * will return `true` for elements that have the properties of the given object,
   * else `false`.
   *
   * @static
   * @memberOf _
   * @alias head, take
   * @category Arrays
   * @param {Array} array The array to query.
   * @param {Function|Object|number|string} [callback] The function called
   *  per element or the number of elements to return. If a property name or
   *  object is provided it will be used to create a "_.pluck" or "_.where"
   *  style callback, respectively.
   * @param {*} [thisArg] The `this` binding of `callback`.
   * @returns {*} Returns the first element(s) of `array`.
   * @example
   *
   * _.first([1, 2, 3]);
   * // => 1
   *
   * _.first([1, 2, 3], 2);
   * // => [1, 2]
   *
   * _.first([1, 2, 3], function(num) {
   *   return num < 3;
   * });
   * // => [1, 2]
   *
   * var characters = [
   *   { 'name': 'barney',  'blocked': true,  'employer': 'slate' },
   *   { 'name': 'fred',    'blocked': false, 'employer': 'slate' },
   *   { 'name': 'pebbles', 'blocked': true,  'employer': 'na' }
   * ];
   *
   * // using "_.pluck" callback shorthand
   * _.first(characters, 'blocked');
   * // => [{ 'name': 'barney', 'blocked': true, 'employer': 'slate' }]
   *
   * // using "_.where" callback shorthand
   * _.pluck(_.first(characters, { 'employer': 'slate' }), 'name');
   * // => ['barney', 'fred']
   */
  function first(array, callback, thisArg) {
    var n = 0,
        length = array ? array.length : 0;

    if (typeof callback != 'number' && callback != null) {
      var index = -1;
      callback = createCallback(callback, thisArg, 3);
      while (++index < length && callback(array[index], index, array)) {
        n++;
      }
    } else {
      n = callback;
      if (n == null || thisArg) {
        return array ? array[0] : undefined;
      }
    }
    return slice(array, 0, nativeMin(nativeMax(0, n), length));
  }

  /**
   * Flattens a nested array (the nesting can be to any depth). If `isShallow`
   * is truey, the array will only be flattened a single level. If a callback
   * is provided each element of the array is passed through the callback before
   * flattening. The callback is bound to `thisArg` and invoked with three
   * arguments; (value, index, array).
   *
   * If a property name is provided for `callback` the created "_.pluck" style
   * callback will return the property value of the given element.
   *
   * If an object is provided for `callback` the created "_.where" style callback
   * will return `true` for elements that have the properties of the given object,
   * else `false`.
   *
   * @static
   * @memberOf _
   * @category Arrays
   * @param {Array} array The array to flatten.
   * @param {boolean} [isShallow=false] A flag to restrict flattening to a single level.
   * @param {Function|Object|string} [callback=identity] The function called
   *  per iteration. If a property name or object is provided it will be used
   *  to create a "_.pluck" or "_.where" style callback, respectively.
   * @param {*} [thisArg] The `this` binding of `callback`.
   * @returns {Array} Returns a new flattened array.
   * @example
   *
   * _.flatten([1, [2], [3, [[4]]]]);
   * // => [1, 2, 3, 4];
   *
   * _.flatten([1, [2], [3, [[4]]]], true);
   * // => [1, 2, 3, [[4]]];
   *
   * var characters = [
   *   { 'name': 'barney', 'age': 30, 'pets': ['hoppy'] },
   *   { 'name': 'fred',   'age': 40, 'pets': ['baby puss', 'dino'] }
   * ];
   *
   * // using "_.pluck" callback shorthand
   * _.flatten(characters, 'pets');
   * // => ['hoppy', 'baby puss', 'dino']
   */
  function flatten(array, isShallow) {
    return baseFlatten(array, isShallow);
  }

  /**
   * Gets the index at which the first occurrence of `value` is found using
   * strict equality for comparisons, i.e. `===`. If the array is already sorted
   * providing `true` for `fromIndex` will run a faster binary search.
   *
   * @static
   * @memberOf _
   * @category Arrays
   * @param {Array} array The array to search.
   * @param {*} value The value to search for.
   * @param {boolean|number} [fromIndex=0] The index to search from or `true`
   *  to perform a binary search on a sorted array.
   * @returns {number} Returns the index of the matched value or `-1`.
   * @example
   *
   * _.indexOf([1, 2, 3, 1, 2, 3], 2);
   * // => 1
   *
   * _.indexOf([1, 2, 3, 1, 2, 3], 2, 3);
   * // => 4
   *
   * _.indexOf([1, 1, 2, 2, 3, 3], 2, true);
   * // => 2
   */
  function indexOf(array, value, fromIndex) {
    if (typeof fromIndex == 'number') {
      var length = array ? array.length : 0;
      fromIndex = (fromIndex < 0 ? nativeMax(0, length + fromIndex) : fromIndex || 0);
    } else if (fromIndex) {
      var index = sortedIndex(array, value);
      return array[index] === value ? index : -1;
    }
    return baseIndexOf(array, value, fromIndex);
  }

  /**
   * Gets all but the last element or last `n` elements of an array. If a
   * callback is provided elements at the end of the array are excluded from
   * the result as long as the callback returns truey. The callback is bound
   * to `thisArg` and invoked with three arguments; (value, index, array).
   *
   * If a property name is provided for `callback` the created "_.pluck" style
   * callback will return the property value of the given element.
   *
   * If an object is provided for `callback` the created "_.where" style callback
   * will return `true` for elements that have the properties of the given object,
   * else `false`.
   *
   * @static
   * @memberOf _
   * @category Arrays
   * @param {Array} array The array to query.
   * @param {Function|Object|number|string} [callback=1] The function called
   *  per element or the number of elements to exclude. If a property name or
   *  object is provided it will be used to create a "_.pluck" or "_.where"
   *  style callback, respectively.
   * @param {*} [thisArg] The `this` binding of `callback`.
   * @returns {Array} Returns a slice of `array`.
   * @example
   *
   * _.initial([1, 2, 3]);
   * // => [1, 2]
   *
   * _.initial([1, 2, 3], 2);
   * // => [1]
   *
   * _.initial([1, 2, 3], function(num) {
   *   return num > 1;
   * });
   * // => [1]
   *
   * var characters = [
   *   { 'name': 'barney',  'blocked': false, 'employer': 'slate' },
   *   { 'name': 'fred',    'blocked': true,  'employer': 'slate' },
   *   { 'name': 'pebbles', 'blocked': true,  'employer': 'na' }
   * ];
   *
   * // using "_.pluck" callback shorthand
   * _.initial(characters, 'blocked');
   * // => [{ 'name': 'barney',  'blocked': false, 'employer': 'slate' }]
   *
   * // using "_.where" callback shorthand
   * _.pluck(_.initial(characters, { 'employer': 'na' }), 'name');
   * // => ['barney', 'fred']
   */
  function initial(array, callback, thisArg) {
    var n = 0,
        length = array ? array.length : 0;

    if (typeof callback != 'number' && callback != null) {
      var index = length;
      callback = createCallback(callback, thisArg, 3);
      while (index-- && callback(array[index], index, array)) {
        n++;
      }
    } else {
      n = (callback == null || thisArg) ? 1 : callback || n;
    }
    return slice(array, 0, nativeMin(nativeMax(0, length - n), length));
  }

  /**
   * Creates an array of unique values present in all provided arrays using
   * strict equality for comparisons, i.e. `===`.
   *
   * @static
   * @memberOf _
   * @category Arrays
   * @param {...Array} [array] The arrays to inspect.
   * @returns {Array} Returns an array of shared values.
   * @example
   *
   * _.intersection([1, 2, 3], [5, 2, 1, 4], [2, 1]);
   * // => [1, 2]
   */
  function intersection() {
    var args = [],
        argsIndex = -1,
        argsLength = arguments.length;

    while (++argsIndex < argsLength) {
      var value = arguments[argsIndex];
       if (isArray(value) || isArguments(value)) {
         args.push(value);
       }
    }
    var array = args[0],
        index = -1,
        indexOf = getIndexOf(),
        length = array ? array.length : 0,
        result = [];

    outer:
    while (++index < length) {
      value = array[index];
      if (indexOf(result, value) < 0) {
        var argsIndex = argsLength;
        while (--argsIndex) {
          if (indexOf(args[argsIndex], value) < 0) {
            continue outer;
          }
        }
        result.push(value);
      }
    }
    return result;
  }

  /**
   * Gets the last element or last `n` elements of an array. If a callback is
   * provided elements at the end of the array are returned as long as the
   * callback returns truey. The callback is bound to `thisArg` and invoked
   * with three arguments; (value, index, array).
   *
   * If a property name is provided for `callback` the created "_.pluck" style
   * callback will return the property value of the given element.
   *
   * If an object is provided for `callback` the created "_.where" style callback
   * will return `true` for elements that have the properties of the given object,
   * else `false`.
   *
   * @static
   * @memberOf _
   * @category Arrays
   * @param {Array} array The array to query.
   * @param {Function|Object|number|string} [callback] The function called
   *  per element or the number of elements to return. If a property name or
   *  object is provided it will be used to create a "_.pluck" or "_.where"
   *  style callback, respectively.
   * @param {*} [thisArg] The `this` binding of `callback`.
   * @returns {*} Returns the last element(s) of `array`.
   * @example
   *
   * _.last([1, 2, 3]);
   * // => 3
   *
   * _.last([1, 2, 3], 2);
   * // => [2, 3]
   *
   * _.last([1, 2, 3], function(num) {
   *   return num > 1;
   * });
   * // => [2, 3]
   *
   * var characters = [
   *   { 'name': 'barney',  'blocked': false, 'employer': 'slate' },
   *   { 'name': 'fred',    'blocked': true,  'employer': 'slate' },
   *   { 'name': 'pebbles', 'blocked': true,  'employer': 'na' }
   * ];
   *
   * // using "_.pluck" callback shorthand
   * _.pluck(_.last(characters, 'blocked'), 'name');
   * // => ['fred', 'pebbles']
   *
   * // using "_.where" callback shorthand
   * _.last(characters, { 'employer': 'na' });
   * // => [{ 'name': 'pebbles', 'blocked': true, 'employer': 'na' }]
   */
  function last(array, callback, thisArg) {
    var n = 0,
        length = array ? array.length : 0;

    if (typeof callback != 'number' && callback != null) {
      var index = length;
      callback = createCallback(callback, thisArg, 3);
      while (index-- && callback(array[index], index, array)) {
        n++;
      }
    } else {
      n = callback;
      if (n == null || thisArg) {
        return array ? array[length - 1] : undefined;
      }
    }
    return slice(array, nativeMax(0, length - n));
  }

  /**
   * Gets the index at which the last occurrence of `value` is found using strict
   * equality for comparisons, i.e. `===`. If `fromIndex` is negative, it is used
   * as the offset from the end of the collection.
   *
   * If a property name is provided for `callback` the created "_.pluck" style
   * callback will return the property value of the given element.
   *
   * If an object is provided for `callback` the created "_.where" style callback
   * will return `true` for elements that have the properties of the given object,
   * else `false`.
   *
   * @static
   * @memberOf _
   * @category Arrays
   * @param {Array} array The array to search.
   * @param {*} value The value to search for.
   * @param {number} [fromIndex=array.length-1] The index to search from.
   * @returns {number} Returns the index of the matched value or `-1`.
   * @example
   *
   * _.lastIndexOf([1, 2, 3, 1, 2, 3], 2);
   * // => 4
   *
   * _.lastIndexOf([1, 2, 3, 1, 2, 3], 2, 3);
   * // => 1
   */
  function lastIndexOf(array, value, fromIndex) {
    var index = array ? array.length : 0;
    if (typeof fromIndex == 'number') {
      index = (fromIndex < 0 ? nativeMax(0, index + fromIndex) : nativeMin(fromIndex, index - 1)) + 1;
    }
    while (index--) {
      if (array[index] === value) {
        return index;
      }
    }
    return -1;
  }

  /**
   * Creates an array of numbers (positive and/or negative) progressing from
   * `start` up to but not including `end`. If `start` is less than `stop` a
   * zero-length range is created unless a negative `step` is specified.
   *
   * @static
   * @memberOf _
   * @category Arrays
   * @param {number} [start=0] The start of the range.
   * @param {number} end The end of the range.
   * @param {number} [step=1] The value to increment or decrement by.
   * @returns {Array} Returns a new range array.
   * @example
   *
   * _.range(4);
   * // => [0, 1, 2, 3]
   *
   * _.range(1, 5);
   * // => [1, 2, 3, 4]
   *
   * _.range(0, 20, 5);
   * // => [0, 5, 10, 15]
   *
   * _.range(0, -4, -1);
   * // => [0, -1, -2, -3]
   *
   * _.range(1, 4, 0);
   * // => [1, 1, 1]
   *
   * _.range(0);
   * // => []
   */
  function range(start, end, step) {
    start = +start || 0;
    step =  (+step || 1);

    if (end == null) {
      end = start;
      start = 0;
    }
    // use `Array(length)` so engines like Chakra and V8 avoid slower modes
    // http://youtu.be/XAqIpGU8ZZk#t=17m25s
    var index = -1,
        length = nativeMax(0, ceil((end - start) / step)),
        result = Array(length);

    while (++index < length) {
      result[index] = start;
      start += step;
    }
    return result;
  }

  /**
   * The opposite of `_.initial` this method gets all but the first element or
   * first `n` elements of an array. If a callback function is provided elements
   * at the beginning of the array are excluded from the result as long as the
   * callback returns truey. The callback is bound to `thisArg` and invoked
   * with three arguments; (value, index, array).
   *
   * If a property name is provided for `callback` the created "_.pluck" style
   * callback will return the property value of the given element.
   *
   * If an object is provided for `callback` the created "_.where" style callback
   * will return `true` for elements that have the properties of the given object,
   * else `false`.
   *
   * @static
   * @memberOf _
   * @alias drop, tail
   * @category Arrays
   * @param {Array} array The array to query.
   * @param {Function|Object|number|string} [callback=1] The function called
   *  per element or the number of elements to exclude. If a property name or
   *  object is provided it will be used to create a "_.pluck" or "_.where"
   *  style callback, respectively.
   * @param {*} [thisArg] The `this` binding of `callback`.
   * @returns {Array} Returns a slice of `array`.
   * @example
   *
   * _.rest([1, 2, 3]);
   * // => [2, 3]
   *
   * _.rest([1, 2, 3], 2);
   * // => [3]
   *
   * _.rest([1, 2, 3], function(num) {
   *   return num < 3;
   * });
   * // => [3]
   *
   * var characters = [
   *   { 'name': 'barney',  'blocked': true,  'employer': 'slate' },
   *   { 'name': 'fred',    'blocked': false,  'employer': 'slate' },
   *   { 'name': 'pebbles', 'blocked': true, 'employer': 'na' }
   * ];
   *
   * // using "_.pluck" callback shorthand
   * _.pluck(_.rest(characters, 'blocked'), 'name');
   * // => ['fred', 'pebbles']
   *
   * // using "_.where" callback shorthand
   * _.rest(characters, { 'employer': 'slate' });
   * // => [{ 'name': 'pebbles', 'blocked': true, 'employer': 'na' }]
   */
  function rest(array, callback, thisArg) {
    if (typeof callback != 'number' && callback != null) {
      var n = 0,
          index = -1,
          length = array ? array.length : 0;

      callback = createCallback(callback, thisArg, 3);
      while (++index < length && callback(array[index], index, array)) {
        n++;
      }
    } else {
      n = (callback == null || thisArg) ? 1 : nativeMax(0, callback);
    }
    return slice(array, n);
  }

  /**
   * Uses a binary search to determine the smallest index at which a value
   * should be inserted into a given sorted array in order to maintain the sort
   * order of the array. If a callback is provided it will be executed for
   * `value` and each element of `array` to compute their sort ranking. The
   * callback is bound to `thisArg` and invoked with one argument; (value).
   *
   * If a property name is provided for `callback` the created "_.pluck" style
   * callback will return the property value of the given element.
   *
   * If an object is provided for `callback` the created "_.where" style callback
   * will return `true` for elements that have the properties of the given object,
   * else `false`.
   *
   * @static
   * @memberOf _
   * @category Arrays
   * @param {Array} array The array to inspect.
   * @param {*} value The value to evaluate.
   * @param {Function|Object|string} [callback=identity] The function called
   *  per iteration. If a property name or object is provided it will be used
   *  to create a "_.pluck" or "_.where" style callback, respectively.
   * @param {*} [thisArg] The `this` binding of `callback`.
   * @returns {number} Returns the index at which `value` should be inserted
   *  into `array`.
   * @example
   *
   * _.sortedIndex([20, 30, 50], 40);
   * // => 2
   *
   * // using "_.pluck" callback shorthand
   * _.sortedIndex([{ 'x': 20 }, { 'x': 30 }, { 'x': 50 }], { 'x': 40 }, 'x');
   * // => 2
   *
   * var dict = {
   *   'wordToNumber': { 'twenty': 20, 'thirty': 30, 'fourty': 40, 'fifty': 50 }
   * };
   *
   * _.sortedIndex(['twenty', 'thirty', 'fifty'], 'fourty', function(word) {
   *   return dict.wordToNumber[word];
   * });
   * // => 2
   *
   * _.sortedIndex(['twenty', 'thirty', 'fifty'], 'fourty', function(word) {
   *   return this.wordToNumber[word];
   * }, dict);
   * // => 2
   */
  function sortedIndex(array, value, callback, thisArg) {
    var low = 0,
        high = array ? array.length : low;

    // explicitly reference `identity` for better inlining in Firefox
    callback = callback ? createCallback(callback, thisArg, 1) : identity;
    value = callback(value);

    while (low < high) {
      var mid = (low + high) >>> 1;
      (callback(array[mid]) < value)
        ? low = mid + 1
        : high = mid;
    }
    return low;
  }

  /**
   * Creates an array of unique values, in order, of the provided arrays using
   * strict equality for comparisons, i.e. `===`.
   *
   * @static
   * @memberOf _
   * @category Arrays
   * @param {...Array} [array] The arrays to inspect.
   * @returns {Array} Returns an array of combined values.
   * @example
   *
   * _.union([1, 2, 3], [5, 2, 1, 4], [2, 1]);
   * // => [1, 2, 3, 5, 4]
   */
  function union() {
    return baseUniq(baseFlatten(arguments, true, true));
  }

  /**
   * Creates a duplicate-value-free version of an array using strict equality
   * for comparisons, i.e. `===`. If the array is sorted, providing
   * `true` for `isSorted` will use a faster algorithm. If a callback is provided
   * each element of `array` is passed through the callback before uniqueness
   * is computed. The callback is bound to `thisArg` and invoked with three
   * arguments; (value, index, array).
   *
   * If a property name is provided for `callback` the created "_.pluck" style
   * callback will return the property value of the given element.
   *
   * If an object is provided for `callback` the created "_.where" style callback
   * will return `true` for elements that have the properties of the given object,
   * else `false`.
   *
   * @static
   * @memberOf _
   * @alias unique
   * @category Arrays
   * @param {Array} array The array to process.
   * @param {boolean} [isSorted=false] A flag to indicate that `array` is sorted.
   * @param {Function|Object|string} [callback=identity] The function called
   *  per iteration. If a property name or object is provided it will be used
   *  to create a "_.pluck" or "_.where" style callback, respectively.
   * @param {*} [thisArg] The `this` binding of `callback`.
   * @returns {Array} Returns a duplicate-value-free array.
   * @example
   *
   * _.uniq([1, 2, 1, 3, 1]);
   * // => [1, 2, 3]
   *
   * _.uniq([1, 1, 2, 2, 3], true);
   * // => [1, 2, 3]
   *
   * _.uniq(['A', 'b', 'C', 'a', 'B', 'c'], function(letter) { return letter.toLowerCase(); });
   * // => ['A', 'b', 'C']
   *
   * _.uniq([1, 2.5, 3, 1.5, 2, 3.5], function(num) { return this.floor(num); }, Math);
   * // => [1, 2.5, 3]
   *
   * // using "_.pluck" callback shorthand
   * _.uniq([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
   * // => [{ 'x': 1 }, { 'x': 2 }]
   */
  function uniq(array, isSorted, callback, thisArg) {
    // juggle arguments
    if (typeof isSorted != 'boolean' && isSorted != null) {
      thisArg = callback;
      callback = (typeof isSorted != 'function' && thisArg && thisArg[isSorted] === array) ? null : isSorted;
      isSorted = false;
    }
    if (callback != null) {
      callback = createCallback(callback, thisArg, 3);
    }
    return baseUniq(array, isSorted, callback);
  }

  /**
   * Creates an array excluding all provided values using strict equality for
   * comparisons, i.e. `===`.
   *
   * @static
   * @memberOf _
   * @category Arrays
   * @param {Array} array The array to filter.
   * @param {...*} [value] The values to exclude.
   * @returns {Array} Returns a new array of filtered values.
   * @example
   *
   * _.without([1, 2, 1, 0, 3, 1, 4], 0, 1);
   * // => [2, 3, 4]
   */
  function without(array) {
    return baseDifference(array, slice(arguments, 1));
  }

  /**
   * Creates an array of grouped elements, the first of which contains the first
   * elements of the given arrays, the second of which contains the second
   * elements of the given arrays, and so on.
   *
   * @static
   * @memberOf _
   * @alias unzip
   * @category Arrays
   * @param {...Array} [array] Arrays to process.
   * @returns {Array} Returns a new array of grouped elements.
   * @example
   *
   * _.zip(['fred', 'barney'], [30, 40], [true, false]);
   * // => [['fred', 30, true], ['barney', 40, false]]
   */
  function zip() {
    var index = -1,
        length = max(pluck(arguments, 'length')),
        result = Array(length < 0 ? 0 : length);

    while (++index < length) {
      result[index] = pluck(arguments, index);
    }
    return result;
  }

  /**
   * Creates an object composed from arrays of `keys` and `values`. Provide
   * either a single two dimensional array, i.e. `[[key1, value1], [key2, value2]]`
   * or two arrays, one of `keys` and one of corresponding `values`.
   *
   * @static
   * @memberOf _
   * @alias object
   * @category Arrays
   * @param {Array} keys The array of keys.
   * @param {Array} [values=[]] The array of values.
   * @returns {Object} Returns an object composed of the given keys and
   *  corresponding values.
   * @example
   *
   * _.zipObject(['fred', 'barney'], [30, 40]);
   * // => { 'fred': 30, 'barney': 40 }
   */
  function zipObject(keys, values) {
    var index = -1,
        length = keys ? keys.length : 0,
        result = {};

    if (!values && length && !isArray(keys[0])) {
      values = [];
    }
    while (++index < length) {
      var key = keys[index];
      if (values) {
        result[key] = values[index];
      } else if (key) {
        result[key[0]] = key[1];
      }
    }
    return result;
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Creates a function that executes `func`, with  the `this` binding and
   * arguments of the created function, only after being called `n` times.
   *
   * @static
   * @memberOf _
   * @category Functions
   * @param {number} n The number of times the function must be called before
   *  `func` is executed.
   * @param {Function} func The function to restrict.
   * @returns {Function} Returns the new restricted function.
   * @example
   *
   * var saves = ['profile', 'settings'];
   *
   * var done = _.after(saves.length, function() {
   *   console.log('Done saving!');
   * });
   *
   * _.forEach(saves, function(type) {
   *   asyncSave({ 'type': type, 'complete': done });
   * });
   * // => logs 'Done saving!', after all saves have completed
   */
  function after(n, func) {
    if (!isFunction(func)) {
      throw new TypeError;
    }
    return function() {
      if (--n < 1) {
        return func.apply(this, arguments);
      }
    };
  }

  /**
   * Creates a function that, when called, invokes `func` with the `this`
   * binding of `thisArg` and prepends any additional `bind` arguments to those
   * provided to the bound function.
   *
   * @static
   * @memberOf _
   * @category Functions
   * @param {Function} func The function to bind.
   * @param {*} [thisArg] The `this` binding of `func`.
   * @param {...*} [arg] Arguments to be partially applied.
   * @returns {Function} Returns the new bound function.
   * @example
   *
   * var func = function(greeting) {
   *   return greeting + ' ' + this.name;
   * };
   *
   * func = _.bind(func, { 'name': 'fred' }, 'hi');
   * func();
   * // => 'hi fred'
   */
  function bind(func, thisArg) {
    return arguments.length > 2
      ? createWrapper(func, 17, slice(arguments, 2), null, thisArg)
      : createWrapper(func, 1, null, null, thisArg);
  }

  /**
   * Binds methods of an object to the object itself, overwriting the existing
   * method. Method names may be specified as individual arguments or as arrays
   * of method names. If no method names are provided all the function properties
   * of `object` will be bound.
   *
   * @static
   * @memberOf _
   * @category Functions
   * @param {Object} object The object to bind and assign the bound methods to.
   * @param {...string} [methodName] The object method names to
   *  bind, specified as individual method names or arrays of method names.
   * @returns {Object} Returns `object`.
   * @example
   *
   * var view = {
   *   'label': 'docs',
   *   'onClick': function() { console.log('clicked ' + this.label); }
   * };
   *
   * _.bindAll(view);
   * jQuery('#docs').on('click', view.onClick);
   * // => logs 'clicked docs', when the button is clicked
   */
  function bindAll(object) {
    var funcs = arguments.length > 1 ? baseFlatten(arguments, true, false, 1) : functions(object),
        index = -1,
        length = funcs.length;

    while (++index < length) {
      var key = funcs[index];
      object[key] = createWrapper(object[key], 1, null, null, object);
    }
    return object;
  }

  /**
   * Creates a function that is the composition of the provided functions,
   * where each function consumes the return value of the function that follows.
   * For example, composing the functions `f()`, `g()`, and `h()` produces `f(g(h()))`.
   * Each function is executed with the `this` binding of the composed function.
   *
   * @static
   * @memberOf _
   * @category Functions
   * @param {...Function} [func] Functions to compose.
   * @returns {Function} Returns the new composed function.
   * @example
   *
   * var realNameMap = {
   *   'pebbles': 'penelope'
   * };
   *
   * var format = function(name) {
   *   name = realNameMap[name.toLowerCase()] || name;
   *   return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
   * };
   *
   * var greet = function(formatted) {
   *   return 'Hiya ' + formatted + '!';
   * };
   *
   * var welcome = _.compose(greet, format);
   * welcome('pebbles');
   * // => 'Hiya Penelope!'
   */
  function compose() {
    var funcs = arguments,
        length = funcs.length;

    while (length--) {
      if (!isFunction(funcs[length])) {
        throw new TypeError;
      }
    }
    return function() {
      var args = arguments,
          length = funcs.length;

      while (length--) {
        args = [funcs[length].apply(this, args)];
      }
      return args[0];
    };
  }

  /**
   * Creates a function that will delay the execution of `func` until after
   * `wait` milliseconds have elapsed since the last time it was invoked.
   * Provide an options object to indicate that `func` should be invoked on
   * the leading and/or trailing edge of the `wait` timeout. Subsequent calls
   * to the debounced function will return the result of the last `func` call.
   *
   * Note: If `leading` and `trailing` options are `true` `func` will be called
   * on the trailing edge of the timeout only if the the debounced function is
   * invoked more than once during the `wait` timeout.
   *
   * @static
   * @memberOf _
   * @category Functions
   * @param {Function} func The function to debounce.
   * @param {number} wait The number of milliseconds to delay.
   * @param {Object} [options] The options object.
   * @param {boolean} [options.leading=false] Specify execution on the leading edge of the timeout.
   * @param {number} [options.maxWait] The maximum time `func` is allowed to be delayed before it's called.
   * @param {boolean} [options.trailing=true] Specify execution on the trailing edge of the timeout.
   * @returns {Function} Returns the new debounced function.
   * @example
   *
   * // avoid costly calculations while the window size is in flux
   * var lazyLayout = _.debounce(calculateLayout, 150);
   * jQuery(window).on('resize', lazyLayout);
   *
   * // execute `sendMail` when the click event is fired, debouncing subsequent calls
   * jQuery('#postbox').on('click', _.debounce(sendMail, 300, {
   *   'leading': true,
   *   'trailing': false
   * });
   *
   * // ensure `batchLog` is executed once after 1 second of debounced calls
   * var source = new EventSource('/stream');
   * source.addEventListener('message', _.debounce(batchLog, 250, {
   *   'maxWait': 1000
   * }, false);
   */
  function debounce(func, wait, options) {
    var args,
        maxTimeoutId,
        result,
        stamp,
        thisArg,
        timeoutId,
        trailingCall,
        lastCalled = 0,
        maxWait = false,
        trailing = true;

    if (!isFunction(func)) {
      throw new TypeError;
    }
    wait = nativeMax(0, wait) || 0;
    if (options === true) {
      var leading = true;
      trailing = false;
    } else if (isObject(options)) {
      leading = options.leading;
      maxWait = 'maxWait' in options && (nativeMax(wait, options.maxWait) || 0);
      trailing = 'trailing' in options ? options.trailing : trailing;
    }
    var delayed = function() {
      var remaining = wait - (now() - stamp);
      if (remaining <= 0) {
        if (maxTimeoutId) {
          clearTimeout(maxTimeoutId);
        }
        var isCalled = trailingCall;
        maxTimeoutId = timeoutId = trailingCall = undefined;
        if (isCalled) {
          lastCalled = now();
          result = func.apply(thisArg, args);
          if (!timeoutId && !maxTimeoutId) {
            args = thisArg = null;
          }
        }
      } else {
        timeoutId = setTimeout(delayed, remaining);
      }
    };

    var maxDelayed = function() {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      maxTimeoutId = timeoutId = trailingCall = undefined;
      if (trailing || (maxWait !== wait)) {
        lastCalled = now();
        result = func.apply(thisArg, args);
        if (!timeoutId && !maxTimeoutId) {
          args = thisArg = null;
        }
      }
    };

    return function() {
      args = arguments;
      stamp = now();
      thisArg = this;
      trailingCall = trailing && (timeoutId || !leading);

      if (maxWait === false) {
        var leadingCall = leading && !timeoutId;
      } else {
        if (!maxTimeoutId && !leading) {
          lastCalled = stamp;
        }
        var remaining = maxWait - (stamp - lastCalled),
            isCalled = remaining <= 0;

        if (isCalled) {
          if (maxTimeoutId) {
            maxTimeoutId = clearTimeout(maxTimeoutId);
          }
          lastCalled = stamp;
          result = func.apply(thisArg, args);
        }
        else if (!maxTimeoutId) {
          maxTimeoutId = setTimeout(maxDelayed, remaining);
        }
      }
      if (isCalled && timeoutId) {
        timeoutId = clearTimeout(timeoutId);
      }
      else if (!timeoutId && wait !== maxWait) {
        timeoutId = setTimeout(delayed, wait);
      }
      if (leadingCall) {
        isCalled = true;
        result = func.apply(thisArg, args);
      }
      if (isCalled && !timeoutId && !maxTimeoutId) {
        args = thisArg = null;
      }
      return result;
    };
  }

  /**
   * Defers executing the `func` function until the current call stack has cleared.
   * Additional arguments will be provided to `func` when it is invoked.
   *
   * @static
   * @memberOf _
   * @category Functions
   * @param {Function} func The function to defer.
   * @param {...*} [arg] Arguments to invoke the function with.
   * @returns {number} Returns the timer id.
   * @example
   *
   * _.defer(function(text) { console.log(text); }, 'deferred');
   * // logs 'deferred' after one or more milliseconds
   */
  function defer(func) {
    if (!isFunction(func)) {
      throw new TypeError;
    }
    var args = slice(arguments, 1);
    return setTimeout(function() { func.apply(undefined, args); }, 1);
  }

  /**
   * Executes the `func` function after `wait` milliseconds. Additional arguments
   * will be provided to `func` when it is invoked.
   *
   * @static
   * @memberOf _
   * @category Functions
   * @param {Function} func The function to delay.
   * @param {number} wait The number of milliseconds to delay execution.
   * @param {...*} [arg] Arguments to invoke the function with.
   * @returns {number} Returns the timer id.
   * @example
   *
   * _.delay(function(text) { console.log(text); }, 1000, 'later');
   * // => logs 'later' after one second
   */
  function delay(func, wait) {
    if (!isFunction(func)) {
      throw new TypeError;
    }
    var args = slice(arguments, 2);
    return setTimeout(function() { func.apply(undefined, args); }, wait);
  }

  /**
   * Creates a function that memoizes the result of `func`. If `resolver` is
   * provided it will be used to determine the cache key for storing the result
   * based on the arguments provided to the memoized function. By default, the
   * first argument provided to the memoized function is used as the cache key.
   * The `func` is executed with the `this` binding of the memoized function.
   * The result cache is exposed as the `cache` property on the memoized function.
   *
   * @static
   * @memberOf _
   * @category Functions
   * @param {Function} func The function to have its output memoized.
   * @param {Function} [resolver] A function used to resolve the cache key.
   * @returns {Function} Returns the new memoizing function.
   * @example
   *
   * var fibonacci = _.memoize(function(n) {
   *   return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
   * });
   *
   * fibonacci(9)
   * // => 34
   *
   * var data = {
   *   'fred': { 'name': 'fred', 'age': 40 },
   *   'pebbles': { 'name': 'pebbles', 'age': 1 }
   * };
   *
   * // modifying the result cache
   * var get = _.memoize(function(name) { return data[name]; }, _.identity);
   * get('pebbles');
   * // => { 'name': 'pebbles', 'age': 1 }
   *
   * get.cache.pebbles.name = 'penelope';
   * get('pebbles');
   * // => { 'name': 'penelope', 'age': 1 }
   */
  function memoize(func, resolver) {
    var cache = {};
    return function() {
      var key = resolver ? resolver.apply(this, arguments) : keyPrefix + arguments[0];
      return hasOwnProperty.call(cache, key)
        ? cache[key]
        : (cache[key] = func.apply(this, arguments));
    };
  }

  /**
   * Creates a function that is restricted to execute `func` once. Repeat calls to
   * the function will return the value of the first call. The `func` is executed
   * with the `this` binding of the created function.
   *
   * @static
   * @memberOf _
   * @category Functions
   * @param {Function} func The function to restrict.
   * @returns {Function} Returns the new restricted function.
   * @example
   *
   * var initialize = _.once(createApplication);
   * initialize();
   * initialize();
   * // `initialize` executes `createApplication` once
   */
  function once(func) {
    var ran,
        result;

    if (!isFunction(func)) {
      throw new TypeError;
    }
    return function() {
      if (ran) {
        return result;
      }
      ran = true;
      result = func.apply(this, arguments);

      // clear the `func` variable so the function may be garbage collected
      func = null;
      return result;
    };
  }

  /**
   * Creates a function that, when called, invokes `func` with any additional
   * `partial` arguments prepended to those provided to the new function. This
   * method is similar to `_.bind` except it does **not** alter the `this` binding.
   *
   * @static
   * @memberOf _
   * @category Functions
   * @param {Function} func The function to partially apply arguments to.
   * @param {...*} [arg] Arguments to be partially applied.
   * @returns {Function} Returns the new partially applied function.
   * @example
   *
   * var greet = function(greeting, name) { return greeting + ' ' + name; };
   * var hi = _.partial(greet, 'hi');
   * hi('fred');
   * // => 'hi fred'
   */
  function partial(func) {
    return createWrapper(func, 16, slice(arguments, 1));
  }

  /**
   * Creates a function that, when executed, will only call the `func` function
   * at most once per every `wait` milliseconds. Provide an options object to
   * indicate that `func` should be invoked on the leading and/or trailing edge
   * of the `wait` timeout. Subsequent calls to the throttled function will
   * return the result of the last `func` call.
   *
   * Note: If `leading` and `trailing` options are `true` `func` will be called
   * on the trailing edge of the timeout only if the the throttled function is
   * invoked more than once during the `wait` timeout.
   *
   * @static
   * @memberOf _
   * @category Functions
   * @param {Function} func The function to throttle.
   * @param {number} wait The number of milliseconds to throttle executions to.
   * @param {Object} [options] The options object.
   * @param {boolean} [options.leading=true] Specify execution on the leading edge of the timeout.
   * @param {boolean} [options.trailing=true] Specify execution on the trailing edge of the timeout.
   * @returns {Function} Returns the new throttled function.
   * @example
   *
   * // avoid excessively updating the position while scrolling
   * var throttled = _.throttle(updatePosition, 100);
   * jQuery(window).on('scroll', throttled);
   *
   * // execute `renewToken` when the click event is fired, but not more than once every 5 minutes
   * jQuery('.interactive').on('click', _.throttle(renewToken, 300000, {
   *   'trailing': false
   * }));
   */
  function throttle(func, wait, options) {
    var leading = true,
        trailing = true;

    if (!isFunction(func)) {
      throw new TypeError;
    }
    if (options === false) {
      leading = false;
    } else if (isObject(options)) {
      leading = 'leading' in options ? options.leading : leading;
      trailing = 'trailing' in options ? options.trailing : trailing;
    }
    options = {};
    options.leading = leading;
    options.maxWait = wait;
    options.trailing = trailing;

    return debounce(func, wait, options);
  }

  /**
   * Creates a function that provides `value` to the wrapper function as its
   * first argument. Additional arguments provided to the function are appended
   * to those provided to the wrapper function. The wrapper is executed with
   * the `this` binding of the created function.
   *
   * @static
   * @memberOf _
   * @category Functions
   * @param {*} value The value to wrap.
   * @param {Function} wrapper The wrapper function.
   * @returns {Function} Returns the new function.
   * @example
   *
   * var p = _.wrap(_.escape, function(func, text) {
   *   return '<p>' + func(text) + '</p>';
   * });
   *
   * p('Fred, Wilma, & Pebbles');
   * // => '<p>Fred, Wilma, &amp; Pebbles</p>'
   */
  function wrap(value, wrapper) {
    return createWrapper(wrapper, 16, [value]);
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Produces a callback bound to an optional `thisArg`. If `func` is a property
   * name the created callback will return the property value for a given element.
   * If `func` is an object the created callback will return `true` for elements
   * that contain the equivalent object properties, otherwise it will return `false`.
   *
   * @static
   * @memberOf _
   * @category Utilities
   * @param {*} [func=identity] The value to convert to a callback.
   * @param {*} [thisArg] The `this` binding of the created callback.
   * @param {number} [argCount] The number of arguments the callback accepts.
   * @returns {Function} Returns a callback function.
   * @example
   *
   * var characters = [
   *   { 'name': 'barney', 'age': 36 },
   *   { 'name': 'fred',   'age': 40 }
   * ];
   *
   * // wrap to create custom callback shorthands
   * _.createCallback = _.wrap(_.createCallback, function(func, callback, thisArg) {
   *   var match = /^(.+?)__([gl]t)(.+)$/.exec(callback);
   *   return !match ? func(callback, thisArg) : function(object) {
   *     return match[2] == 'gt' ? object[match[1]] > match[3] : object[match[1]] < match[3];
   *   };
   * });
   *
   * _.filter(characters, 'age__gt38');
   * // => [{ 'name': 'fred', 'age': 40 }]
   */
  function createCallback(func, thisArg, argCount) {
    var type = typeof func;
    if (func == null || type == 'function') {
      return baseCreateCallback(func, thisArg, argCount);
    }
    // handle "_.pluck" style callback shorthands
    if (type != 'object') {
      return property(func);
    }
    var props = keys(func);
    return function(object) {
      var length = props.length,
          result = false;

      while (length--) {
        if (!(result = object[props[length]] === func[props[length]])) {
          break;
        }
      }
      return result;
    };
  }

  /**
   * Converts the characters `&`, `<`, `>`, `"`, and `'` in `string` to their
   * corresponding HTML entities.
   *
   * @static
   * @memberOf _
   * @category Utilities
   * @param {string} string The string to escape.
   * @returns {string} Returns the escaped string.
   * @example
   *
   * _.escape('Fred, Wilma, & Pebbles');
   * // => 'Fred, Wilma, &amp; Pebbles'
   */
  function escape(string) {
    return string == null ? '' : String(string).replace(reUnescapedHtml, escapeHtmlChar);
  }

  /**
   * This method returns the first argument provided to it.
   *
   * @static
   * @memberOf _
   * @category Utilities
   * @param {*} value Any value.
   * @returns {*} Returns `value`.
   * @example
   *
   * var object = { 'name': 'fred' };
   * _.identity(object) === object;
   * // => true
   */
  function identity(value) {
    return value;
  }

  /**
   * Adds function properties of a source object to the destination object.
   * If `object` is a function methods will be added to its prototype as well.
   *
   * @static
   * @memberOf _
   * @category Utilities
   * @param {Function|Object} [object=lodash] object The destination object.
   * @param {Object} source The object of functions to add.
   * @param {Object} [options] The options object.
   * @param {boolean} [options.chain=true] Specify whether the functions added are chainable.
   * @example
   *
   * function capitalize(string) {
   *   return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
   * }
   *
   * _.mixin({ 'capitalize': capitalize });
   * _.capitalize('fred');
   * // => 'Fred'
   *
   * _('fred').capitalize().value();
   * // => 'Fred'
   *
   * _.mixin({ 'capitalize': capitalize }, { 'chain': false });
   * _('fred').capitalize();
   * // => 'Fred'
   */
  function mixin(object) {
    forEach(functions(object), function(methodName) {
      var func = lodash[methodName] = object[methodName];

      lodash.prototype[methodName] = function() {
        var args = [this.__wrapped__];
        push.apply(args, arguments);

        var result = func.apply(lodash, args);
        return this.__chain__
          ? new lodashWrapper(result, true)
          : result;
      };
    });
  }

  /**
   * Reverts the '_' variable to its previous value and returns a reference to
   * the `lodash` function.
   *
   * @static
   * @memberOf _
   * @category Utilities
   * @returns {Function} Returns the `lodash` function.
   * @example
   *
   * var lodash = _.noConflict();
   */
  function noConflict() {
    root._ = oldDash;
    return this;
  }

  /**
   * A no-operation function.
   *
   * @static
   * @memberOf _
   * @category Utilities
   * @example
   *
   * var object = { 'name': 'fred' };
   * _.noop(object) === undefined;
   * // => true
   */
  function noop() {
    // no operation performed
  }

  /**
   * Gets the number of milliseconds that have elapsed since the Unix epoch
   * (1 January 1970 00:00:00 UTC).
   *
   * @static
   * @memberOf _
   * @category Utilities
   * @example
   *
   * var stamp = _.now();
   * _.defer(function() { console.log(_.now() - stamp); });
   * // => logs the number of milliseconds it took for the deferred function to be called
   */
  var now = isNative(now = Date.now) && now || function() {
    return new Date().getTime();
  };

  /**
   * Creates a "_.pluck" style function, which returns the `key` value of a
   * given object.
   *
   * @static
   * @memberOf _
   * @category Utilities
   * @param {string} key The name of the property to retrieve.
   * @returns {Function} Returns the new function.
   * @example
   *
   * var characters = [
   *   { 'name': 'fred',   'age': 40 },
   *   { 'name': 'barney', 'age': 36 }
   * ];
   *
   * var getName = _.property('name');
   *
   * _.map(characters, getName);
   * // => ['barney', 'fred']
   *
   * _.sortBy(characters, getName);
   * // => [{ 'name': 'barney', 'age': 36 }, { 'name': 'fred',   'age': 40 }]
   */
  function property(key) {
    return function(object) {
      return object[key];
    };
  }

  /**
   * Produces a random number between `min` and `max` (inclusive). If only one
   * argument is provided a number between `0` and the given number will be
   * returned. If `floating` is truey or either `min` or `max` are floats a
   * floating-point number will be returned instead of an integer.
   *
   * @static
   * @memberOf _
   * @category Utilities
   * @param {number} [min=0] The minimum possible value.
   * @param {number} [max=1] The maximum possible value.
   * @param {boolean} [floating=false] Specify returning a floating-point number.
   * @returns {number} Returns a random number.
   * @example
   *
   * _.random(0, 5);
   * // => an integer between 0 and 5
   *
   * _.random(5);
   * // => also an integer between 0 and 5
   *
   * _.random(5, true);
   * // => a floating-point number between 0 and 5
   *
   * _.random(1.2, 5.2);
   * // => a floating-point number between 1.2 and 5.2
   */
  function random(min, max) {
    if (min == null && max == null) {
      max = 1;
    }
    min = +min || 0;
    if (max == null) {
      max = min;
      min = 0;
    } else {
      max = +max || 0;
    }
    return min + floor(nativeRandom() * (max - min + 1));
  }

  /**
   * Resolves the value of property `key` on `object`. If `key` is a function
   * it will be invoked with the `this` binding of `object` and its result returned,
   * else the property value is returned. If `object` is falsey then `undefined`
   * is returned.
   *
   * @static
   * @memberOf _
   * @category Utilities
   * @param {Object} object The object to inspect.
   * @param {string} key The name of the property to resolve.
   * @returns {*} Returns the resolved value.
   * @example
   *
   * var object = {
   *   'cheese': 'crumpets',
   *   'stuff': function() {
   *     return 'nonsense';
   *   }
   * };
   *
   * _.result(object, 'cheese');
   * // => 'crumpets'
   *
   * _.result(object, 'stuff');
   * // => 'nonsense'
   */
  function result(object, key) {
    if (object) {
      var value = object[key];
      return isFunction(value) ? object[key]() : value;
    }
  }

  /**
   * A micro-templating method that handles arbitrary delimiters, preserves
   * whitespace, and correctly escapes quotes within interpolated code.
   *
   * Note: In the development build, `_.template` utilizes sourceURLs for easier
   * debugging. See http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl
   *
   * For more information on precompiling templates see:
   * http://lodash.com/custom-builds
   *
   * For more information on Chrome extension sandboxes see:
   * http://developer.chrome.com/stable/extensions/sandboxingEval.html
   *
   * @static
   * @memberOf _
   * @category Utilities
   * @param {string} text The template text.
   * @param {Object} data The data object used to populate the text.
   * @param {Object} [options] The options object.
   * @param {RegExp} [options.escape] The "escape" delimiter.
   * @param {RegExp} [options.evaluate] The "evaluate" delimiter.
   * @param {Object} [options.imports] An object to import into the template as local variables.
   * @param {RegExp} [options.interpolate] The "interpolate" delimiter.
   * @param {string} [sourceURL] The sourceURL of the template's compiled source.
   * @param {string} [variable] The data object variable name.
   * @returns {Function|string} Returns a compiled function when no `data` object
   *  is given, else it returns the interpolated text.
   * @example
   *
   * // using the "interpolate" delimiter to create a compiled template
   * var compiled = _.template('hello <%= name %>');
   * compiled({ 'name': 'fred' });
   * // => 'hello fred'
   *
   * // using the "escape" delimiter to escape HTML in data property values
   * _.template('<b><%- value %></b>', { 'value': '<script>' });
   * // => '<b>&lt;script&gt;</b>'
   *
   * // using the "evaluate" delimiter to generate HTML
   * var list = '<% _.forEach(people, function(name) { %><li><%- name %></li><% }); %>';
   * _.template(list, { 'people': ['fred', 'barney'] });
   * // => '<li>fred</li><li>barney</li>'
   *
   * // using the ES6 delimiter as an alternative to the default "interpolate" delimiter
   * _.template('hello ${ name }', { 'name': 'pebbles' });
   * // => 'hello pebbles'
   *
   * // using the internal `print` function in "evaluate" delimiters
   * _.template('<% print("hello " + name); %>!', { 'name': 'barney' });
   * // => 'hello barney!'
   *
   * // using a custom template delimiters
   * _.templateSettings = {
   *   'interpolate': /{{([\s\S]+?)}}/g
   * };
   *
   * _.template('hello {{ name }}!', { 'name': 'mustache' });
   * // => 'hello mustache!'
   *
   * // using the `imports` option to import jQuery
   * var list = '<% jq.each(people, function(name) { %><li><%- name %></li><% }); %>';
   * _.template(list, { 'people': ['fred', 'barney'] }, { 'imports': { 'jq': jQuery } });
   * // => '<li>fred</li><li>barney</li>'
   *
   * // using the `sourceURL` option to specify a custom sourceURL for the template
   * var compiled = _.template('hello <%= name %>', null, { 'sourceURL': '/basic/greeting.jst' });
   * compiled(data);
   * // => find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector
   *
   * // using the `variable` option to ensure a with-statement isn't used in the compiled template
   * var compiled = _.template('hi <%= data.name %>!', null, { 'variable': 'data' });
   * compiled.source;
   * // => function(data) {
   *   var __t, __p = '', __e = _.escape;
   *   __p += 'hi ' + ((__t = ( data.name )) == null ? '' : __t) + '!';
   *   return __p;
   * }
   *
   * // using the `source` property to inline compiled templates for meaningful
   * // line numbers in error messages and a stack trace
   * fs.writeFileSync(path.join(cwd, 'jst.js'), '\
   *   var JST = {\
   *     "main": ' + _.template(mainText).source + '\
   *   };\
   * ');
   */
  function template(text, data, options) {
    var _ = lodash,
        settings = _.templateSettings;

    text = String(text || '');
    options = defaults({}, options, settings);

    var index = 0,
        source = "__p += '",
        variable = options.variable;

    var reDelimiters = RegExp(
      (options.escape || reNoMatch).source + '|' +
      (options.interpolate || reNoMatch).source + '|' +
      (options.evaluate || reNoMatch).source + '|$'
    , 'g');

    text.replace(reDelimiters, function(match, escapeValue, interpolateValue, evaluateValue, offset) {
      source += text.slice(index, offset).replace(reUnescapedString, escapeStringChar);
      if (escapeValue) {
        source += "' +\n_.escape(" + escapeValue + ") +\n'";
      }
      if (evaluateValue) {
        source += "';\n" + evaluateValue + ";\n__p += '";
      }
      if (interpolateValue) {
        source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
      }
      index = offset + match.length;
      return match;
    });

    source += "';\n";
    if (!variable) {
      variable = 'obj';
      source = 'with (' + variable + ' || {}) {\n' + source + '\n}\n';
    }
    source = 'function(' + variable + ') {\n' +
      "var __t, __p = '', __j = Array.prototype.join;\n" +
      "function print() { __p += __j.call(arguments, '') }\n" +
      source +
      'return __p\n}';

    try {
      var result = Function('_', 'return ' + source)(_);
    } catch(e) {
      e.source = source;
      throw e;
    }
    if (data) {
      return result(data);
    }
    result.source = source;
    return result;
  }

  /**
   * Executes the callback `n` times, returning an array of the results
   * of each callback execution. The callback is bound to `thisArg` and invoked
   * with one argument; (index).
   *
   * @static
   * @memberOf _
   * @category Utilities
   * @param {number} n The number of times to execute the callback.
   * @param {Function} callback The function called per iteration.
   * @param {*} [thisArg] The `this` binding of `callback`.
   * @returns {Array} Returns an array of the results of each `callback` execution.
   * @example
   *
   * var diceRolls = _.times(3, _.partial(_.random, 1, 6));
   * // => [3, 6, 4]
   *
   * _.times(3, function(n) { mage.castSpell(n); });
   * // => calls `mage.castSpell(n)` three times, passing `n` of `0`, `1`, and `2` respectively
   *
   * _.times(3, function(n) { this.cast(n); }, mage);
   * // => also calls `mage.castSpell(n)` three times
   */
  function times(n, callback, thisArg) {
    n = (n = +n) > -1 ? n : 0;
    var index = -1,
        result = Array(n);

    callback = baseCreateCallback(callback, thisArg, 1);
    while (++index < n) {
      result[index] = callback(index);
    }
    return result;
  }

  /**
   * The inverse of `_.escape` this method converts the HTML entities
   * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to their
   * corresponding characters.
   *
   * @static
   * @memberOf _
   * @category Utilities
   * @param {string} string The string to unescape.
   * @returns {string} Returns the unescaped string.
   * @example
   *
   * _.unescape('Fred, Barney &amp; Pebbles');
   * // => 'Fred, Barney & Pebbles'
   */
  function unescape(string) {
    return string == null ? '' : String(string).replace(reEscapedHtml, unescapeHtmlChar);
  }

  /**
   * Generates a unique ID. If `prefix` is provided the ID will be appended to it.
   *
   * @static
   * @memberOf _
   * @category Utilities
   * @param {string} [prefix] The value to prefix the ID with.
   * @returns {string} Returns the unique ID.
   * @example
   *
   * _.uniqueId('contact_');
   * // => 'contact_104'
   *
   * _.uniqueId();
   * // => '105'
   */
  function uniqueId(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Creates a `lodash` object that wraps the given value with explicit
   * method chaining enabled.
   *
   * @static
   * @memberOf _
   * @category Chaining
   * @param {*} value The value to wrap.
   * @returns {Object} Returns the wrapper object.
   * @example
   *
   * var characters = [
   *   { 'name': 'barney',  'age': 36 },
   *   { 'name': 'fred',    'age': 40 },
   *   { 'name': 'pebbles', 'age': 1 }
   * ];
   *
   * var youngest = _.chain(characters)
   *     .sortBy('age')
   *     .map(function(chr) { return chr.name + ' is ' + chr.age; })
   *     .first()
   *     .value();
   * // => 'pebbles is 1'
   */
  function chain(value) {
    value = new lodashWrapper(value);
    value.__chain__ = true;
    return value;
  }

  /**
   * Invokes `interceptor` with the `value` as the first argument and then
   * returns `value`. The purpose of this method is to "tap into" a method
   * chain in order to perform operations on intermediate results within
   * the chain.
   *
   * @static
   * @memberOf _
   * @category Chaining
   * @param {*} value The value to provide to `interceptor`.
   * @param {Function} interceptor The function to invoke.
   * @returns {*} Returns `value`.
   * @example
   *
   * _([1, 2, 3, 4])
   *  .tap(function(array) { array.pop(); })
   *  .reverse()
   *  .value();
   * // => [3, 2, 1]
   */
  function tap(value, interceptor) {
    interceptor(value);
    return value;
  }

  /**
   * Enables explicit method chaining on the wrapper object.
   *
   * @name chain
   * @memberOf _
   * @category Chaining
   * @returns {*} Returns the wrapper object.
   * @example
   *
   * var characters = [
   *   { 'name': 'barney', 'age': 36 },
   *   { 'name': 'fred',   'age': 40 }
   * ];
   *
   * // without explicit chaining
   * _(characters).first();
   * // => { 'name': 'barney', 'age': 36 }
   *
   * // with explicit chaining
   * _(characters).chain()
   *   .first()
   *   .pick('age')
   *   .value();
   * // => { 'age': 36 }
   */
  function wrapperChain() {
    this.__chain__ = true;
    return this;
  }

  /**
   * Extracts the wrapped value.
   *
   * @name valueOf
   * @memberOf _
   * @alias value
   * @category Chaining
   * @returns {*} Returns the wrapped value.
   * @example
   *
   * _([1, 2, 3]).valueOf();
   * // => [1, 2, 3]
   */
  function wrapperValueOf() {
    return this.__wrapped__;
  }

  /*--------------------------------------------------------------------------*/

  // add functions that return wrapped values when chaining
  lodash.after = after;
  lodash.bind = bind;
  lodash.bindAll = bindAll;
  lodash.chain = chain;
  lodash.compact = compact;
  lodash.compose = compose;
  lodash.countBy = countBy;
  lodash.debounce = debounce;
  lodash.defaults = defaults;
  lodash.defer = defer;
  lodash.delay = delay;
  lodash.difference = difference;
  lodash.filter = filter;
  lodash.flatten = flatten;
  lodash.forEach = forEach;
  lodash.functions = functions;
  lodash.groupBy = groupBy;
  lodash.indexBy = indexBy;
  lodash.initial = initial;
  lodash.intersection = intersection;
  lodash.invert = invert;
  lodash.invoke = invoke;
  lodash.keys = keys;
  lodash.map = map;
  lodash.max = max;
  lodash.memoize = memoize;
  lodash.min = min;
  lodash.omit = omit;
  lodash.once = once;
  lodash.pairs = pairs;
  lodash.partial = partial;
  lodash.pick = pick;
  lodash.pluck = pluck;
  lodash.range = range;
  lodash.reject = reject;
  lodash.rest = rest;
  lodash.shuffle = shuffle;
  lodash.sortBy = sortBy;
  lodash.tap = tap;
  lodash.throttle = throttle;
  lodash.times = times;
  lodash.toArray = toArray;
  lodash.union = union;
  lodash.uniq = uniq;
  lodash.values = values;
  lodash.where = where;
  lodash.without = without;
  lodash.wrap = wrap;
  lodash.zip = zip;

  // add aliases
  lodash.collect = map;
  lodash.drop = rest;
  lodash.each = forEach;
  lodash.extend = assign;
  lodash.methods = functions;
  lodash.object = zipObject;
  lodash.select = filter;
  lodash.tail = rest;
  lodash.unique = uniq;

  /*--------------------------------------------------------------------------*/

  // add functions that return unwrapped values when chaining
  lodash.clone = clone;
  lodash.contains = contains;
  lodash.escape = escape;
  lodash.every = every;
  lodash.find = find;
  lodash.has = has;
  lodash.identity = identity;
  lodash.indexOf = indexOf;
  lodash.isArguments = isArguments;
  lodash.isArray = isArray;
  lodash.isBoolean = isBoolean;
  lodash.isDate = isDate;
  lodash.isElement = isElement;
  lodash.isEmpty = isEmpty;
  lodash.isEqual = isEqual;
  lodash.isFinite = isFinite;
  lodash.isFunction = isFunction;
  lodash.isNaN = isNaN;
  lodash.isNull = isNull;
  lodash.isNumber = isNumber;
  lodash.isObject = isObject;
  lodash.isRegExp = isRegExp;
  lodash.isString = isString;
  lodash.isUndefined = isUndefined;
  lodash.lastIndexOf = lastIndexOf;
  lodash.mixin = mixin;
  lodash.noConflict = noConflict;
  lodash.random = random;
  lodash.reduce = reduce;
  lodash.reduceRight = reduceRight;
  lodash.result = result;
  lodash.size = size;
  lodash.some = some;
  lodash.sortedIndex = sortedIndex;
  lodash.template = template;
  lodash.unescape = unescape;
  lodash.uniqueId = uniqueId;

  // add aliases
  lodash.all = every;
  lodash.any = some;
  lodash.detect = find;
  lodash.findWhere = findWhere;
  lodash.foldl = reduce;
  lodash.foldr = reduceRight;
  lodash.include = contains;
  lodash.inject = reduce;

  /*--------------------------------------------------------------------------*/

  // add functions capable of returning wrapped and unwrapped values when chaining
  lodash.first = first;
  lodash.last = last;
  lodash.sample = sample;

  // add aliases
  lodash.take = first;
  lodash.head = first;

  /*--------------------------------------------------------------------------*/

  // add functions to `lodash.prototype`
  mixin(lodash);

  /**
   * The semantic version number.
   *
   * @static
   * @memberOf _
   * @type string
   */
  lodash.VERSION = '2.4.1';

  // add "Chaining" functions to the wrapper
  lodash.prototype.chain = wrapperChain;
  lodash.prototype.value = wrapperValueOf;

    // add `Array` mutator functions to the wrapper
    forEach(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(methodName) {
      var func = arrayRef[methodName];
      lodash.prototype[methodName] = function() {
        var value = this.__wrapped__;
        func.apply(value, arguments);

        // avoid array-like object bugs with `Array#shift` and `Array#splice`
        // in Firefox < 10 and IE < 9
        if (!support.spliceObjects && value.length === 0) {
          delete value[0];
        }
        return this;
      };
    });

    // add `Array` accessor functions to the wrapper
    forEach(['concat', 'join', 'slice'], function(methodName) {
      var func = arrayRef[methodName];
      lodash.prototype[methodName] = function() {
        var value = this.__wrapped__,
            result = func.apply(value, arguments);

        if (this.__chain__) {
          result = new lodashWrapper(result);
          result.__chain__ = true;
        }
        return result;
      };
    });

  /*--------------------------------------------------------------------------*/

  // some AMD build optimizers like r.js check for condition patterns like the following:
  if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
    // Expose Lo-Dash to the global object even when an AMD loader is present in
    // case Lo-Dash is loaded with a RequireJS shim config.
    // See http://requirejs.org/docs/api.html#config-shim
    root._ = lodash;

    // define as an anonymous module so, through path mapping, it can be
    // referenced as the "underscore" module
    define(function() {
      return lodash;
    });
  }
  // check for `exports` after `define` in case a build optimizer adds an `exports` object
  else if (freeExports && freeModule) {
    // in Node.js or RingoJS
    if (moduleExports) {
      (freeModule.exports = lodash)._ = lodash;
    }
    // in Narwhal or Rhino -require
    else {
      freeExports._ = lodash;
    }
  }
  else {
    // in a browser or Rhino
    root._ = lodash;
  }
}.call(this));

/*! angular-google-maps 1.1.7 2014-07-09
 *  AngularJS directives for Google Maps
 *  git: https://github.com/nlaplante/angular-google-maps.git
 */
/*
!
The MIT License

Copyright (c) 2010-2013 Google, Inc. http://angularjs.org

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

angular-google-maps
https://github.com/nlaplante/angular-google-maps

@authors
Nicolas Laplante - https://plus.google.com/108189012221374960701
Nicholas McCready - https://twitter.com/nmccready
*/
(function () {
  angular.module('google-maps.directives.api.utils', []);
  angular.module('google-maps.directives.api.managers', []);
  angular.module('google-maps.directives.api.models.child', ['google-maps.directives.api.utils']);
  angular.module('google-maps.directives.api.models.parent', [
    'google-maps.directives.api.managers',
    'google-maps.directives.api.models.child'
  ]);
  angular.module('google-maps.directives.api', ['google-maps.directives.api.models.parent']);
  angular.module('google-maps', ['google-maps.directives.api']).factory('debounce', [
    '$timeout',
    function ($timeout) {
      return function (fn) {
        var nthCall;
        nthCall = 0;
        return function () {
          var argz, later, that;
          that = this;
          argz = arguments;
          nthCall++;
          later = function (version) {
            return function () {
              if (version === nthCall) {
                return fn.apply(that, argz);
              }
            };
          }(nthCall);
          return $timeout(later, 0, true);
        };
      };
    }
  ]);
}.call(this));
(function () {
  angular.element(document).ready(function () {
    if (!(google || (typeof google !== 'undefined' && google !== null ? google.maps : void 0) || google.maps.InfoWindow != null)) {
      return;
    }
    google.maps.InfoWindow.prototype._open = google.maps.InfoWindow.prototype.open;
    google.maps.InfoWindow.prototype._close = google.maps.InfoWindow.prototype.close;
    google.maps.InfoWindow.prototype._isOpen = false;
    google.maps.InfoWindow.prototype.open = function (map, anchor) {
      this._isOpen = true;
      this._open(map, anchor);
    };
    google.maps.InfoWindow.prototype.close = function () {
      this._isOpen = false;
      this._close();
    };
    google.maps.InfoWindow.prototype.isOpen = function (val) {
      if (val == null) {
        val = void 0;
      }
      if (val == null) {
        return this._isOpen;
      } else {
        return this._isOpen = val;
      }
    };
    /*
    Do the same for InfoBox
    TODO: Clean this up so the logic is defined once, wait until develop becomes master as this will be easier
    */
    if (!window.InfoBox) {
      return;
    }
    window.InfoBox.prototype._open = window.InfoBox.prototype.open;
    window.InfoBox.prototype._close = window.InfoBox.prototype.close;
    window.InfoBox.prototype._isOpen = false;
    window.InfoBox.prototype.open = function (map, anchor) {
      this._isOpen = true;
      this._open(map, anchor);
    };
    window.InfoBox.prototype.close = function () {
      this._isOpen = false;
      this._close();
    };
    return window.InfoBox.prototype.isOpen = function (val) {
      if (val == null) {
        val = void 0;
      }
      if (val == null) {
        return this._isOpen;
      } else {
        return this._isOpen = val;
      }
    };
  });
}.call(this));
/*
    Author Nick McCready
    Intersection of Objects if the arrays have something in common each intersecting object will be returned
    in an new array.
*/
(function () {
  _.intersectionObjects = function (array1, array2, comparison) {
    var res, _this = this;
    if (comparison == null) {
      comparison = void 0;
    }
    res = _.map(array1, function (obj1) {
      return _.find(array2, function (obj2) {
        if (comparison != null) {
          return comparison(obj1, obj2);
        } else {
          return _.isEqual(obj1, obj2);
        }
      });
    });
    return _.filter(res, function (o) {
      return o != null;
    });
  };
  _.containsObject = _.includeObject = function (obj, target, comparison) {
    var _this = this;
    if (comparison == null) {
      comparison = void 0;
    }
    if (obj === null) {
      return false;
    }
    return _.any(obj, function (value) {
      if (comparison != null) {
        return comparison(value, target);
      } else {
        return _.isEqual(value, target);
      }
    });
  };
  _.differenceObjects = function (array1, array2, comparison) {
    if (comparison == null) {
      comparison = void 0;
    }
    return _.filter(array1, function (value) {
      return !_.containsObject(array2, value);
    });
  };
  _.withoutObjects = function (array, array2) {
    return _.differenceObjects(array, array2);
  };
  _.indexOfObject = function (array, item, comparison, isSorted) {
    var i, length;
    if (array == null) {
      return -1;
    }
    i = 0;
    length = array.length;
    if (isSorted) {
      if (typeof isSorted === 'number') {
        i = isSorted < 0 ? Math.max(0, length + isSorted) : isSorted;
      } else {
        i = _.sortedIndex(array, item);
        return array[i] === item ? i : -1;
      }
    }
    while (i < length) {
      if (comparison != null) {
        if (comparison(array[i], item)) {
          return i;
        }
      } else {
        if (_.isEqual(array[i], item)) {
          return i;
        }
      }
      i++;
    }
    return -1;
  };
  _['extends'] = function (arrayOfObjectsToCombine) {
    return _.reduce(arrayOfObjectsToCombine, function (combined, toAdd) {
      return _.extend(combined, toAdd);
    }, {});
  };
}.call(this));
/*
    Author: Nicholas McCready & jfriend00
    _async handles things asynchronous-like :), to allow the UI to be free'd to do other things
    Code taken from http://stackoverflow.com/questions/10344498/best-way-to-iterate-over-an-array-without-blocking-the-ui

    The design of any funcitonality of _async is to be like lodash/underscore and replicate it but call things
    asynchronously underneath. Each should be sufficient for most things to be derrived from.

    TODO: Handle Object iteration like underscore and lodash as well.. not that important right now
*/
(function () {
  var async;
  async = {
    each: function (array, callback, doneCallBack, pausedCallBack, chunk, index, pause) {
      var doChunk;
      if (chunk == null) {
        chunk = 20;
      }
      if (index == null) {
        index = 0;
      }
      if (pause == null) {
        pause = 1;
      }
      if (!pause) {
        throw 'pause (delay) must be set from _async!';
        return;
      }
      if (array === void 0 || (array != null ? array.length : void 0) <= 0) {
        doneCallBack();
        return;
      }
      doChunk = function () {
        var cnt, i;
        cnt = chunk;
        i = index;
        while (cnt-- && i < (array ? array.length : i + 1)) {
          callback(array[i], i);
          ++i;
        }
        if (array) {
          if (i < array.length) {
            index = i;
            if (pausedCallBack != null) {
              pausedCallBack();
            }
            return setTimeout(doChunk, pause);
          } else {
            if (doneCallBack) {
              return doneCallBack();
            }
          }
        }
      };
      return doChunk();
    },
    map: function (objs, iterator, doneCallBack, pausedCallBack, chunk) {
      var results;
      results = [];
      if (objs == null) {
        return results;
      }
      return _async.each(objs, function (o) {
        return results.push(iterator(o));
      }, function () {
        return doneCallBack(results);
      }, pausedCallBack, chunk);
    }
  };
  window._async = async;
  angular.module('google-maps.directives.api.utils').factory('async', function () {
    return window._async;
  });
}.call(this));
(function () {
  var __indexOf = [].indexOf || function (item) {
      for (var i = 0, l = this.length; i < l; i++) {
        if (i in this && this[i] === item)
          return i;
      }
      return -1;
    };
  angular.module('google-maps.directives.api.utils').factory('BaseObject', function () {
    var BaseObject, baseObjectKeywords;
    baseObjectKeywords = [
      'extended',
      'included'
    ];
    BaseObject = function () {
      function BaseObject() {
      }
      BaseObject.extend = function (obj) {
        var key, value, _ref;
        for (key in obj) {
          value = obj[key];
          if (__indexOf.call(baseObjectKeywords, key) < 0) {
            this[key] = value;
          }
        }
        if ((_ref = obj.extended) != null) {
          _ref.apply(this);
        }
        return this;
      };
      BaseObject.include = function (obj) {
        var key, value, _ref;
        for (key in obj) {
          value = obj[key];
          if (__indexOf.call(baseObjectKeywords, key) < 0) {
            this.prototype[key] = value;
          }
        }
        if ((_ref = obj.included) != null) {
          _ref.apply(this);
        }
        return this;
      };
      return BaseObject;
    }();
    return BaseObject;
  });
}.call(this));
/*
    Useful function callbacks that should be defined at later time.
    Mainly to be used for specs to verify creation / linking.

    This is to lead a common design in notifying child stuff.
*/
(function () {
  angular.module('google-maps.directives.api.utils').factory('ChildEvents', function () {
    return {
      onChildCreation: function (child) {
      }
    };
  });
}.call(this));
(function () {
  angular.module('google-maps.directives.api.utils').service('EventsHelper', [
    'Logger',
    function ($log) {
      return {
        setEvents: function (marker, scope, model) {
          if (angular.isDefined(scope.events) && scope.events != null && angular.isObject(scope.events)) {
            return _.compact(_.map(scope.events, function (eventHandler, eventName) {
              if (scope.events.hasOwnProperty(eventName) && angular.isFunction(scope.events[eventName])) {
                return google.maps.event.addListener(marker, eventName, function () {
                  return eventHandler.apply(scope, [
                    marker,
                    eventName,
                    model,
                    arguments
                  ]);
                });
              } else {
                return $log.info('MarkerEventHelper: invalid event listener ' + eventName);
              }
            }));
          }
        }
      };
    }
  ]);
}.call(this));
(function () {
  var __hasProp = {}.hasOwnProperty, __extends = function (child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key))
          child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };
  angular.module('google-maps.directives.api.utils').factory('FitHelper', [
    'BaseObject',
    'Logger',
    function (BaseObject, $log) {
      var FitHelper, _ref;
      return FitHelper = function (_super) {
        __extends(FitHelper, _super);
        function FitHelper() {
          _ref = FitHelper.__super__.constructor.apply(this, arguments);
          return _ref;
        }
        FitHelper.prototype.fit = function (gMarkers, gMap) {
          var bounds, everSet, _this = this;
          if (gMap && gMarkers && gMarkers.length > 0) {
            bounds = new google.maps.LatLngBounds();
            everSet = false;
            return _async.each(gMarkers, function (gMarker) {
              if (gMarker) {
                if (!everSet) {
                  everSet = true;
                }
                return bounds.extend(gMarker.getPosition());
              }
            }, function () {
              if (everSet) {
                return gMap.fitBounds(bounds);
              }
            });
          }
        };
        return FitHelper;
      }(BaseObject);
    }
  ]);
}.call(this));
(function () {
  angular.module('google-maps.directives.api.utils').service('GmapUtil', [
    'Logger',
    '$compile',
    function (Logger, $compile) {
      var getCoords, validateCoords;
      getCoords = function (value) {
        if (Array.isArray(value) && value.length === 2) {
          return new google.maps.LatLng(value[1], value[0]);
        } else if (angular.isDefined(value.type) && value.type === 'Point') {
          return new google.maps.LatLng(value.coordinates[1], value.coordinates[0]);
        } else {
          return new google.maps.LatLng(value.latitude, value.longitude);
        }
      };
      validateCoords = function (coords) {
        if (angular.isUndefined(coords)) {
          return false;
        }
        if (_.isArray(coords)) {
          if (coords.length === 2) {
            return true;
          }
        } else if (coords != null && (coords != null ? coords.type : void 0)) {
          if (coords.type === 'Point' && _.isArray(coords.coordinates) && coords.coordinates.length === 2) {
            return true;
          }
        }
        if (coords && angular.isDefined((coords != null ? coords.latitude : void 0) && angular.isDefined(coords != null ? coords.longitude : void 0))) {
          return true;
        }
        return false;
      };
      return {
        getLabelPositionPoint: function (anchor) {
          var xPos, yPos;
          if (anchor === void 0) {
            return void 0;
          }
          anchor = /^([-\d\.]+)\s([-\d\.]+)$/.exec(anchor);
          xPos = parseFloat(anchor[1]);
          yPos = parseFloat(anchor[2]);
          if (xPos != null && yPos != null) {
            return new google.maps.Point(xPos, yPos);
          }
        },
        createMarkerOptions: function (coords, icon, defaults, map) {
          var opts;
          if (map == null) {
            map = void 0;
          }
          if (defaults == null) {
            defaults = {};
          }
          opts = angular.extend({}, defaults, {
            position: defaults.position != null ? defaults.position : getCoords(coords),
            icon: defaults.icon != null ? defaults.icon : icon,
            visible: defaults.visible != null ? defaults.visible : validateCoords(coords)
          });
          if (map != null) {
            opts.map = map;
          }
          return opts;
        },
        createWindowOptions: function (gMarker, scope, content, defaults) {
          if (content != null && defaults != null && $compile != null) {
            return angular.extend({}, defaults, {
              content: this.buildContent(scope, defaults, content),
              position: defaults.position != null ? defaults.position : angular.isObject(gMarker) ? gMarker.getPosition() : getCoords(scope.coords)
            });
          } else {
            if (!defaults) {
              Logger.error('infoWindow defaults not defined');
              if (!content) {
                return Logger.error('infoWindow content not defined');
              }
            } else {
              return defaults;
            }
          }
        },
        buildContent: function (scope, defaults, content) {
          var parsed, ret;
          if (defaults.content != null) {
            ret = defaults.content;
          } else {
            if ($compile != null) {
              parsed = $compile(content)(scope);
              if (parsed.length > 0) {
                ret = parsed[0];
              }
            } else {
              ret = content;
            }
          }
          return ret;
        },
        defaultDelay: 50,
        isTrue: function (val) {
          return angular.isDefined(val) && val !== null && val === true || val === '1' || val === 'y' || val === 'true';
        },
        isFalse: function (value) {
          return [
            'false',
            'FALSE',
            0,
            'n',
            'N',
            'no',
            'NO'
          ].indexOf(value) !== -1;
        },
        getCoords: getCoords,
        validateCoords: validateCoords,
        validatePath: function (path) {
          var array, i, polygon, trackMaxVertices;
          i = 0;
          if (angular.isUndefined(path.type)) {
            if (!Array.isArray(path) || path.length < 2) {
              return false;
            }
            while (i < path.length) {
              if (!(angular.isDefined(path[i].latitude) && angular.isDefined(path[i].longitude) || typeof path[i].lat === 'function' && typeof path[i].lng === 'function')) {
                return false;
              }
              i++;
            }
            return true;
          } else {
            if (angular.isUndefined(path.coordinates)) {
              return false;
            }
            if (path.type === 'Polygon') {
              if (path.coordinates[0].length < 4) {
                return false;
              }
              array = path.coordinates[0];
            } else if (path.type === 'MultiPolygon') {
              trackMaxVertices = {
                max: 0,
                index: 0
              };
              _.forEach(path.coordinates, function (polygon, index) {
                if (polygon[0].length > this.max) {
                  this.max = polygon[0].length;
                  return this.index = index;
                }
              }, trackMaxVertices);
              polygon = path.coordinates[trackMaxVertices.index];
              array = polygon[0];
              if (array.length < 4) {
                return false;
              }
            } else if (path.type === 'LineString') {
              if (path.coordinates.length < 2) {
                return false;
              }
              array = path.coordinates;
            } else {
              return false;
            }
            while (i < array.length) {
              if (array[i].length !== 2) {
                return false;
              }
              i++;
            }
            return true;
          }
        },
        convertPathPoints: function (path) {
          var array, i, latlng, result, trackMaxVertices;
          i = 0;
          result = new google.maps.MVCArray();
          if (angular.isUndefined(path.type)) {
            while (i < path.length) {
              latlng;
              if (angular.isDefined(path[i].latitude) && angular.isDefined(path[i].longitude)) {
                latlng = new google.maps.LatLng(path[i].latitude, path[i].longitude);
              } else if (typeof path[i].lat === 'function' && typeof path[i].lng === 'function') {
                latlng = path[i];
              }
              result.push(latlng);
              i++;
            }
          } else {
            array;
            if (path.type === 'Polygon') {
              array = path.coordinates[0];
            } else if (path.type === 'MultiPolygon') {
              trackMaxVertices = {
                max: 0,
                index: 0
              };
              _.forEach(path.coordinates, function (polygon, index) {
                if (polygon[0].length > this.max) {
                  this.max = polygon[0].length;
                  return this.index = index;
                }
              }, trackMaxVertices);
              array = path.coordinates[trackMaxVertices.index][0];
            } else if (path.type === 'LineString') {
              array = path.coordinates;
            }
            while (i < array.length) {
              result.push(new google.maps.LatLng(array[i][1], array[i][0]));
              i++;
            }
          }
          return result;
        },
        extendMapBounds: function (map, points) {
          var bounds, i;
          bounds = new google.maps.LatLngBounds();
          i = 0;
          while (i < points.length) {
            bounds.extend(points.getAt(i));
            i++;
          }
          return map.fitBounds(bounds);
        }
      };
    }
  ]);
}.call(this));
(function () {
  var __hasProp = {}.hasOwnProperty, __extends = function (child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key))
          child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };
  angular.module('google-maps.directives.api.utils').factory('Linked', [
    'BaseObject',
    function (BaseObject) {
      var Linked;
      Linked = function (_super) {
        __extends(Linked, _super);
        function Linked(scope, element, attrs, ctrls) {
          this.scope = scope;
          this.element = element;
          this.attrs = attrs;
          this.ctrls = ctrls;
        }
        return Linked;
      }(BaseObject);
      return Linked;
    }
  ]);
}.call(this));
(function () {
  angular.module('google-maps.directives.api.utils').service('Logger', [
    '$log',
    function ($log) {
      return {
        logger: $log,
        doLog: false,
        info: function (msg) {
          if (this.doLog) {
            if (this.logger != null) {
              return this.logger.info(msg);
            } else {
              return console.info(msg);
            }
          }
        },
        error: function (msg) {
          if (this.doLog) {
            if (this.logger != null) {
              return this.logger.error(msg);
            } else {
              return console.error(msg);
            }
          }
        },
        warn: function (msg) {
          if (this.doLog) {
            if (this.logger != null) {
              return this.logger.warn(msg);
            } else {
              return console.warn(msg);
            }
          }
        }
      };
    }
  ]);
}.call(this));
(function () {
  var __bind = function (fn, me) {
      return function () {
        return fn.apply(me, arguments);
      };
    }, __hasProp = {}.hasOwnProperty, __extends = function (child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key))
          child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };
  angular.module('google-maps.directives.api.utils').factory('ModelKey', [
    'BaseObject',
    function (BaseObject) {
      var ModelKey;
      return ModelKey = function (_super) {
        __extends(ModelKey, _super);
        function ModelKey(scope) {
          this.scope = scope;
          this.setIdKey = __bind(this.setIdKey, this);
          this.modelKeyComparison = __bind(this.modelKeyComparison, this);
          ModelKey.__super__.constructor.call(this);
          this.defaultIdKey = 'id';
          this.idKey = void 0;
        }
        ModelKey.prototype.evalModelHandle = function (model, modelKey) {
          if (model === void 0) {
            return void 0;
          }
          if (modelKey === 'self') {
            return model;
          } else {
            return model[modelKey];
          }
        };
        ModelKey.prototype.modelKeyComparison = function (model1, model2) {
          var scope;
          scope = this.scope.coords != null ? this.scope : this.parentScope;
          if (scope == null) {
            throw 'No scope or parentScope set!';
          }
          return this.evalModelHandle(model1, scope.coords).latitude === this.evalModelHandle(model2, scope.coords).latitude && this.evalModelHandle(model1, scope.coords).longitude === this.evalModelHandle(model2, scope.coords).longitude;
        };
        ModelKey.prototype.setIdKey = function (scope) {
          return this.idKey = scope.idKey != null ? scope.idKey : this.defaultIdKey;
        };
        return ModelKey;
      }(BaseObject);
    }
  ]);
}.call(this));
(function () {
  angular.module('google-maps.directives.api.utils').factory('ModelsWatcher', [
    'Logger',
    function (Logger) {
      return {
        figureOutState: function (idKey, scope, childObjects, comparison, callBack) {
          var adds, mappedScopeModelIds, removals, _this = this;
          adds = [];
          mappedScopeModelIds = {};
          removals = [];
          return _async.each(scope.models, function (m) {
            var child;
            if (m[idKey] != null) {
              mappedScopeModelIds[m[idKey]] = {};
              if (childObjects[m[idKey]] == null) {
                return adds.push(m);
              } else {
                child = childObjects[m[idKey]];
                if (!comparison(m, child.model)) {
                  adds.push(m);
                  return removals.push(child);
                }
              }
            } else {
              return Logger.error('id missing for model ' + m.toString() + ', can not use do comparison/insertion');
            }
          }, function () {
            return _async.each(childObjects.values(), function (c) {
              var id;
              if (c == null) {
                Logger.error('child undefined in ModelsWatcher.');
                return;
              }
              if (c.model == null) {
                Logger.error('child.model undefined in ModelsWatcher.');
                return;
              }
              id = c.model[idKey];
              if (mappedScopeModelIds[id] == null) {
                return removals.push(c.model[idKey]);
              }
            }, function () {
              return callBack({
                adds: adds,
                removals: removals
              });
            });
          });
        }
      };
    }
  ]);
}.call(this));
/*
    Simple Object Map with a lenght property to make it easy to track length/size
*/
(function () {
  var __bind = function (fn, me) {
    return function () {
      return fn.apply(me, arguments);
    };
  };
  angular.module('google-maps.directives.api.utils').factory('PropMap', function () {
    var PropMap, propsToPop;
    propsToPop = [
      'get',
      'put',
      'remove',
      'values',
      'keys',
      'length'
    ];
    PropMap = function () {
      function PropMap() {
        this.keys = __bind(this.keys, this);
        this.values = __bind(this.values, this);
        this.remove = __bind(this.remove, this);
        this.put = __bind(this.put, this);
        this.get = __bind(this.get, this);
        this.length = 0;
      }
      PropMap.prototype.get = function (key) {
        return this[key];
      };
      PropMap.prototype.put = function (key, value) {
        if (this[key] == null) {
          this.length++;
        }
        return this[key] = value;
      };
      PropMap.prototype.remove = function (key) {
        delete this[key];
        return this.length--;
      };
      PropMap.prototype.values = function () {
        var all, keys, _this = this;
        all = [];
        keys = _.keys(this);
        _.each(keys, function (value) {
          if (_.indexOf(propsToPop, value) === -1) {
            return all.push(_this[value]);
          }
        });
        return all;
      };
      PropMap.prototype.keys = function () {
        var all, keys, _this = this;
        keys = _.keys(this);
        all = [];
        _.each(keys, function (prop) {
          if (_.indexOf(propsToPop, prop) === -1) {
            return all.push(prop);
          }
        });
        return all;
      };
      return PropMap;
    }();
    return PropMap;
  });
}.call(this));
(function () {
  var __bind = function (fn, me) {
      return function () {
        return fn.apply(me, arguments);
      };
    }, __hasProp = {}.hasOwnProperty, __extends = function (child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key))
          child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };
  angular.module('google-maps.directives.api.managers').factory('ClustererMarkerManager', [
    'Logger',
    'FitHelper',
    function ($log, FitHelper) {
      var ClustererMarkerManager;
      ClustererMarkerManager = function (_super) {
        __extends(ClustererMarkerManager, _super);
        function ClustererMarkerManager(gMap, opt_markers, opt_options, opt_events) {
          var self;
          this.opt_events = opt_events;
          this.fit = __bind(this.fit, this);
          this.destroy = __bind(this.destroy, this);
          this.clear = __bind(this.clear, this);
          this.draw = __bind(this.draw, this);
          this.removeMany = __bind(this.removeMany, this);
          this.remove = __bind(this.remove, this);
          this.addMany = __bind(this.addMany, this);
          this.add = __bind(this.add, this);
          ClustererMarkerManager.__super__.constructor.call(this);
          self = this;
          this.opt_options = opt_options;
          if (opt_options != null && opt_markers === void 0) {
            this.clusterer = new MarkerClusterer(gMap, void 0, opt_options);
          } else if (opt_options != null && opt_markers != null) {
            this.clusterer = new MarkerClusterer(gMap, opt_markers, opt_options);
          } else {
            this.clusterer = new MarkerClusterer(gMap);
          }
          this.attachEvents(this.opt_events, 'opt_events');
          this.clusterer.setIgnoreHidden(true);
          this.noDrawOnSingleAddRemoves = true;
          $log.info(this);
        }
        ClustererMarkerManager.prototype.add = function (gMarker) {
          return this.clusterer.addMarker(gMarker, this.noDrawOnSingleAddRemoves);
        };
        ClustererMarkerManager.prototype.addMany = function (gMarkers) {
          return this.clusterer.addMarkers(gMarkers);
        };
        ClustererMarkerManager.prototype.remove = function (gMarker) {
          return this.clusterer.removeMarker(gMarker, this.noDrawOnSingleAddRemoves);
        };
        ClustererMarkerManager.prototype.removeMany = function (gMarkers) {
          return this.clusterer.addMarkers(gMarkers);
        };
        ClustererMarkerManager.prototype.draw = function () {
          return this.clusterer.repaint();
        };
        ClustererMarkerManager.prototype.clear = function () {
          this.clusterer.clearMarkers();
          return this.clusterer.repaint();
        };
        ClustererMarkerManager.prototype.attachEvents = function (options, optionsName) {
          var eventHandler, eventName, _results;
          if (angular.isDefined(options) && options != null && angular.isObject(options)) {
            _results = [];
            for (eventName in options) {
              eventHandler = options[eventName];
              if (options.hasOwnProperty(eventName) && angular.isFunction(options[eventName])) {
                $log.info('' + optionsName + ': Attaching event: ' + eventName + ' to clusterer');
                _results.push(google.maps.event.addListener(this.clusterer, eventName, options[eventName]));
              } else {
                _results.push(void 0);
              }
            }
            return _results;
          }
        };
        ClustererMarkerManager.prototype.clearEvents = function (options) {
          var eventHandler, eventName, _results;
          if (angular.isDefined(options) && options != null && angular.isObject(options)) {
            _results = [];
            for (eventName in options) {
              eventHandler = options[eventName];
              if (options.hasOwnProperty(eventName) && angular.isFunction(options[eventName])) {
                $log.info('' + optionsName + ': Clearing event: ' + eventName + ' to clusterer');
                _results.push(google.maps.event.clearListeners(this.clusterer, eventName));
              } else {
                _results.push(void 0);
              }
            }
            return _results;
          }
        };
        ClustererMarkerManager.prototype.destroy = function () {
          this.clearEvents(this.opt_events);
          this.clearEvents(this.opt_internal_events);
          return this.clear();
        };
        ClustererMarkerManager.prototype.fit = function () {
          return ClustererMarkerManager.__super__.fit.call(this, this.clusterer.getMarkers(), this.clusterer.getMap());
        };
        return ClustererMarkerManager;
      }(FitHelper);
      return ClustererMarkerManager;
    }
  ]);
}.call(this));
(function () {
  var __bind = function (fn, me) {
      return function () {
        return fn.apply(me, arguments);
      };
    }, __hasProp = {}.hasOwnProperty, __extends = function (child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key))
          child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };
  angular.module('google-maps.directives.api.managers').factory('MarkerManager', [
    'Logger',
    'FitHelper',
    function (Logger, FitHelper) {
      var MarkerManager;
      MarkerManager = function (_super) {
        __extends(MarkerManager, _super);
        MarkerManager.include(FitHelper);
        function MarkerManager(gMap, opt_markers, opt_options) {
          this.fit = __bind(this.fit, this);
          this.handleOptDraw = __bind(this.handleOptDraw, this);
          this.clear = __bind(this.clear, this);
          this.draw = __bind(this.draw, this);
          this.removeMany = __bind(this.removeMany, this);
          this.remove = __bind(this.remove, this);
          this.addMany = __bind(this.addMany, this);
          this.add = __bind(this.add, this);
          var self;
          MarkerManager.__super__.constructor.call(this);
          self = this;
          this.gMap = gMap;
          this.gMarkers = [];
          this.$log = Logger;
          this.$log.info(this);
        }
        MarkerManager.prototype.add = function (gMarker, optDraw, redraw) {
          if (redraw == null) {
            redraw = true;
          }
          this.handleOptDraw(gMarker, optDraw, redraw);
          return this.gMarkers.push(gMarker);
        };
        MarkerManager.prototype.addMany = function (gMarkers) {
          var gMarker, _i, _len, _results;
          _results = [];
          for (_i = 0, _len = gMarkers.length; _i < _len; _i++) {
            gMarker = gMarkers[_i];
            _results.push(this.add(gMarker));
          }
          return _results;
        };
        MarkerManager.prototype.remove = function (gMarker, optDraw) {
          var index, tempIndex;
          this.handleOptDraw(gMarker, optDraw, false);
          if (!optDraw) {
            return;
          }
          index = void 0;
          if (this.gMarkers.indexOf != null) {
            index = this.gMarkers.indexOf(gMarker);
          } else {
            tempIndex = 0;
            _.find(this.gMarkers, function (marker) {
              tempIndex += 1;
              if (marker === gMarker) {
                index = tempIndex;
              }
            });
          }
          if (index != null) {
            return this.gMarkers.splice(index, 1);
          }
        };
        MarkerManager.prototype.removeMany = function (gMarkers) {
          var _this = this;
          return this.gMarkers.forEach(function (marker) {
            return _this.remove(marker);
          });
        };
        MarkerManager.prototype.draw = function () {
          var deletes, _this = this;
          deletes = [];
          this.gMarkers.forEach(function (gMarker) {
            if (!gMarker.isDrawn) {
              if (gMarker.doAdd) {
                gMarker.setMap(_this.gMap);
                return gMarker.isDrawn = true;
              } else {
                return deletes.push(gMarker);
              }
            }
          });
          return deletes.forEach(function (gMarker) {
            gMarker.isDrawn = false;
            return _this.remove(gMarker, true);
          });
        };
        MarkerManager.prototype.clear = function () {
          var gMarker, _i, _len, _ref;
          _ref = this.gMarkers;
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            gMarker = _ref[_i];
            gMarker.setMap(null);
          }
          delete this.gMarkers;
          return this.gMarkers = [];
        };
        MarkerManager.prototype.handleOptDraw = function (gMarker, optDraw, doAdd) {
          if (optDraw === true) {
            if (doAdd) {
              gMarker.setMap(this.gMap);
            } else {
              gMarker.setMap(null);
            }
            return gMarker.isDrawn = true;
          } else {
            gMarker.isDrawn = false;
            return gMarker.doAdd = doAdd;
          }
        };
        MarkerManager.prototype.fit = function () {
          return MarkerManager.__super__.fit.call(this, this.gMarkers, this.gMap);
        };
        return MarkerManager;
      }(FitHelper);
      return MarkerManager;
    }
  ]);
}.call(this));
(function () {
  angular.module('google-maps').factory('array-sync', [
    'add-events',
    function (mapEvents) {
      return function (mapArray, scope, pathEval, pathChangedFn) {
        var geojsonArray, geojsonHandlers, geojsonWatcher, isSetFromScope, legacyHandlers, legacyWatcher, mapArrayListener, scopePath, watchListener;
        isSetFromScope = false;
        scopePath = scope.$eval(pathEval);
        if (!scope['static']) {
          legacyHandlers = {
            set_at: function (index) {
              var value;
              if (isSetFromScope) {
                return;
              }
              value = mapArray.getAt(index);
              if (!value) {
                return;
              }
              if (!value.lng || !value.lat) {
                return scopePath[index] = value;
              } else {
                scopePath[index].latitude = value.lat();
                return scopePath[index].longitude = value.lng();
              }
            },
            insert_at: function (index) {
              var value;
              if (isSetFromScope) {
                return;
              }
              value = mapArray.getAt(index);
              if (!value) {
                return;
              }
              if (!value.lng || !value.lat) {
                return scopePath.splice(index, 0, value);
              } else {
                return scopePath.splice(index, 0, {
                  latitude: value.lat(),
                  longitude: value.lng()
                });
              }
            },
            remove_at: function (index) {
              if (isSetFromScope) {
                return;
              }
              return scopePath.splice(index, 1);
            }
          };
          geojsonArray;
          if (scopePath.type === 'Polygon') {
            geojsonArray = scopePath.coordinates[0];
          } else if (scopePath.type === 'LineString') {
            geojsonArray = scopePath.coordinates;
          }
          geojsonHandlers = {
            set_at: function (index) {
              var value;
              if (isSetFromScope) {
                return;
              }
              value = mapArray.getAt(index);
              if (!value) {
                return;
              }
              if (!value.lng || !value.lat) {
                return;
              }
              geojsonArray[index][1] = value.lat();
              return geojsonArray[index][0] = value.lng();
            },
            insert_at: function (index) {
              var value;
              if (isSetFromScope) {
                return;
              }
              value = mapArray.getAt(index);
              if (!value) {
                return;
              }
              if (!value.lng || !value.lat) {
                return;
              }
              return geojsonArray.splice(index, 0, [
                value.lng(),
                value.lat()
              ]);
            },
            remove_at: function (index) {
              if (isSetFromScope) {
                return;
              }
              return geojsonArray.splice(index, 1);
            }
          };
          mapArrayListener = mapEvents(mapArray, angular.isUndefined(scopePath.type) ? legacyHandlers : geojsonHandlers);
        }
        legacyWatcher = function (newPath) {
          var i, l, newLength, newValue, oldArray, oldLength, oldValue;
          isSetFromScope = true;
          oldArray = mapArray;
          if (newPath) {
            i = 0;
            oldLength = oldArray.getLength();
            newLength = newPath.length;
            l = Math.min(oldLength, newLength);
            newValue = void 0;
            while (i < l) {
              oldValue = oldArray.getAt(i);
              newValue = newPath[i];
              if (typeof newValue.equals === 'function') {
                if (!newValue.equals(oldValue)) {
                  oldArray.setAt(i, newValue);
                }
              } else {
                if (oldValue.lat() !== newValue.latitude || oldValue.lng() !== newValue.longitude) {
                  oldArray.setAt(i, new google.maps.LatLng(newValue.latitude, newValue.longitude));
                }
              }
              i++;
            }
            while (i < newLength) {
              newValue = newPath[i];
              if (typeof newValue.lat === 'function' && typeof newValue.lng === 'function') {
                oldArray.push(newValue);
              } else {
                oldArray.push(new google.maps.LatLng(newValue.latitude, newValue.longitude));
              }
              i++;
            }
            while (i < oldLength) {
              oldArray.pop();
              i++;
            }
          }
          return isSetFromScope = false;
        };
        geojsonWatcher = function (newPath) {
          var array, i, l, newLength, newValue, oldArray, oldLength, oldValue;
          isSetFromScope = true;
          oldArray = mapArray;
          if (newPath) {
            array;
            if (scopePath.type === 'Polygon') {
              array = newPath.coordinates[0];
            } else if (scopePath.type === 'LineString') {
              array = newPath.coordinates;
            }
            i = 0;
            oldLength = oldArray.getLength();
            newLength = array.length;
            l = Math.min(oldLength, newLength);
            newValue = void 0;
            while (i < l) {
              oldValue = oldArray.getAt(i);
              newValue = array[i];
              if (oldValue.lat() !== newValue[1] || oldValue.lng() !== newValue[0]) {
                oldArray.setAt(i, new google.maps.LatLng(newValue[1], newValue[0]));
              }
              i++;
            }
            while (i < newLength) {
              newValue = array[i];
              oldArray.push(new google.maps.LatLng(newValue[1], newValue[0]));
              i++;
            }
            while (i < oldLength) {
              oldArray.pop();
              i++;
            }
          }
          return isSetFromScope = false;
        };
        watchListener;
        if (!scope['static']) {
          if (angular.isUndefined(scopePath.type)) {
            watchListener = scope.$watchCollection(pathEval, legacyWatcher);
          } else {
            watchListener = scope.$watch(pathEval, geojsonWatcher, true);
          }
        }
        return function () {
          if (mapArrayListener) {
            mapArrayListener();
            mapArrayListener = null;
          }
          if (watchListener) {
            watchListener();
            return watchListener = null;
          }
        };
      };
    }
  ]);
}.call(this));
(function () {
  angular.module('google-maps').factory('add-events', [
    '$timeout',
    function ($timeout) {
      var addEvent, addEvents;
      addEvent = function (target, eventName, handler) {
        return google.maps.event.addListener(target, eventName, function () {
          handler.apply(this, arguments);
          return $timeout(function () {
          }, true);
        });
      };
      addEvents = function (target, eventName, handler) {
        var remove;
        if (handler) {
          return addEvent(target, eventName, handler);
        }
        remove = [];
        angular.forEach(eventName, function (_handler, key) {
          return remove.push(addEvent(target, key, _handler));
        });
        return function () {
          angular.forEach(remove, function (listener) {
            return google.maps.event.removeListener(listener);
          });
          return remove = null;
        };
      };
      return addEvents;
    }
  ]);
}.call(this));
(function () {
  var __bind = function (fn, me) {
      return function () {
        return fn.apply(me, arguments);
      };
    }, __hasProp = {}.hasOwnProperty, __extends = function (child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key))
          child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };
  angular.module('google-maps.directives.api.models.child').factory('MarkerLabelChildModel', [
    'BaseObject',
    'GmapUtil',
    function (BaseObject, GmapUtil) {
      var MarkerLabelChildModel;
      MarkerLabelChildModel = function (_super) {
        __extends(MarkerLabelChildModel, _super);
        MarkerLabelChildModel.include(GmapUtil);
        function MarkerLabelChildModel(gMarker, opt_options) {
          this.destroy = __bind(this.destroy, this);
          this.draw = __bind(this.draw, this);
          this.setPosition = __bind(this.setPosition, this);
          this.setZIndex = __bind(this.setZIndex, this);
          this.setVisible = __bind(this.setVisible, this);
          this.setAnchor = __bind(this.setAnchor, this);
          this.setMandatoryStyles = __bind(this.setMandatoryStyles, this);
          this.setStyles = __bind(this.setStyles, this);
          this.setContent = __bind(this.setContent, this);
          this.setTitle = __bind(this.setTitle, this);
          this.getSharedCross = __bind(this.getSharedCross, this);
          var self, _ref, _ref1;
          MarkerLabelChildModel.__super__.constructor.call(this);
          self = this;
          this.marker = gMarker;
          this.marker.set('labelContent', opt_options.labelContent);
          this.marker.set('labelAnchor', this.getLabelPositionPoint(opt_options.labelAnchor));
          this.marker.set('labelClass', opt_options.labelClass || 'labels');
          this.marker.set('labelStyle', opt_options.labelStyle || { opacity: 100 });
          this.marker.set('labelInBackground', opt_options.labelInBackground || false);
          if (!opt_options.labelVisible) {
            this.marker.set('labelVisible', true);
          }
          if (!opt_options.raiseOnDrag) {
            this.marker.set('raiseOnDrag', true);
          }
          if (!opt_options.clickable) {
            this.marker.set('clickable', true);
          }
          if (!opt_options.draggable) {
            this.marker.set('draggable', false);
          }
          if (!opt_options.optimized) {
            this.marker.set('optimized', false);
          }
          opt_options.crossImage = (_ref = opt_options.crossImage) != null ? _ref : document.location.protocol + '//maps.gstatic.com/intl/en_us/mapfiles/drag_cross_67_16.png';
          opt_options.handCursor = (_ref1 = opt_options.handCursor) != null ? _ref1 : document.location.protocol + '//maps.gstatic.com/intl/en_us/mapfiles/closedhand_8_8.cur';
          this.markerLabel = new MarkerLabel_(this.marker, opt_options.crossImage, opt_options.handCursor);
          this.marker.set('setMap', function (theMap) {
            google.maps.Marker.prototype.setMap.apply(this, arguments);
            return self.markerLabel.setMap(theMap);
          });
          this.marker.setMap(this.marker.getMap());
        }
        MarkerLabelChildModel.prototype.getSharedCross = function (crossUrl) {
          return this.markerLabel.getSharedCross(crossUrl);
        };
        MarkerLabelChildModel.prototype.setTitle = function () {
          return this.markerLabel.setTitle();
        };
        MarkerLabelChildModel.prototype.setContent = function () {
          return this.markerLabel.setContent();
        };
        MarkerLabelChildModel.prototype.setStyles = function () {
          return this.markerLabel.setStyles();
        };
        MarkerLabelChildModel.prototype.setMandatoryStyles = function () {
          return this.markerLabel.setMandatoryStyles();
        };
        MarkerLabelChildModel.prototype.setAnchor = function () {
          return this.markerLabel.setAnchor();
        };
        MarkerLabelChildModel.prototype.setVisible = function () {
          return this.markerLabel.setVisible();
        };
        MarkerLabelChildModel.prototype.setZIndex = function () {
          return this.markerLabel.setZIndex();
        };
        MarkerLabelChildModel.prototype.setPosition = function () {
          return this.markerLabel.setPosition();
        };
        MarkerLabelChildModel.prototype.draw = function () {
          return this.markerLabel.draw();
        };
        MarkerLabelChildModel.prototype.destroy = function () {
          if (this.markerLabel.labelDiv_.parentNode != null && this.markerLabel.eventDiv_.parentNode != null) {
            return this.markerLabel.onRemove();
          }
        };
        return MarkerLabelChildModel;
      }(BaseObject);
      return MarkerLabelChildModel;
    }
  ]);
}.call(this));
(function () {
  var __bind = function (fn, me) {
      return function () {
        return fn.apply(me, arguments);
      };
    }, __hasProp = {}.hasOwnProperty, __extends = function (child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key))
          child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };
  angular.module('google-maps.directives.api.models.child').factory('MarkerChildModel', [
    'ModelKey',
    'GmapUtil',
    'Logger',
    '$injector',
    'EventsHelper',
    function (ModelKey, GmapUtil, Logger, $injector, EventsHelper) {
      var MarkerChildModel;
      MarkerChildModel = function (_super) {
        __extends(MarkerChildModel, _super);
        MarkerChildModel.include(GmapUtil);
        MarkerChildModel.include(EventsHelper);
        function MarkerChildModel(model, parentScope, gMap, $timeout, defaults, doClick, gMarkerManager, idKey) {
          var self, _this = this;
          this.model = model;
          this.parentScope = parentScope;
          this.gMap = gMap;
          this.$timeout = $timeout;
          this.defaults = defaults;
          this.doClick = doClick;
          this.gMarkerManager = gMarkerManager;
          this.idKey = idKey;
          this.watchDestroy = __bind(this.watchDestroy, this);
          this.setLabelOptions = __bind(this.setLabelOptions, this);
          this.isLabelDefined = __bind(this.isLabelDefined, this);
          this.setOptions = __bind(this.setOptions, this);
          this.setIcon = __bind(this.setIcon, this);
          this.setCoords = __bind(this.setCoords, this);
          this.destroy = __bind(this.destroy, this);
          this.maybeSetScopeValue = __bind(this.maybeSetScopeValue, this);
          this.createMarker = __bind(this.createMarker, this);
          this.setMyScope = __bind(this.setMyScope, this);
          self = this;
          if (this.model[this.idKey]) {
            this.id = this.model[this.idKey];
          }
          this.iconKey = this.parentScope.icon;
          this.coordsKey = this.parentScope.coords;
          this.clickKey = this.parentScope.click();
          this.labelContentKey = this.parentScope.labelContent;
          this.optionsKey = this.parentScope.options;
          this.labelOptionsKey = this.parentScope.labelOptions;
          MarkerChildModel.__super__.constructor.call(this, this.parentScope.$new(false));
          this.scope.model = this.model;
          this.setMyScope(this.model, void 0, true);
          this.createMarker(this.model);
          this.scope.$watch('model', function (newValue, oldValue) {
            if (newValue !== oldValue) {
              return _this.setMyScope(newValue, oldValue);
            }
          }, true);
          this.$log = Logger;
          this.$log.info(self);
          this.watchDestroy(this.scope);
        }
        MarkerChildModel.prototype.setMyScope = function (model, oldModel, isInit) {
          var _this = this;
          if (oldModel == null) {
            oldModel = void 0;
          }
          if (isInit == null) {
            isInit = false;
          }
          this.maybeSetScopeValue('icon', model, oldModel, this.iconKey, this.evalModelHandle, isInit, this.setIcon);
          this.maybeSetScopeValue('coords', model, oldModel, this.coordsKey, this.evalModelHandle, isInit, this.setCoords);
          this.maybeSetScopeValue('labelContent', model, oldModel, this.labelContentKey, this.evalModelHandle, isInit);
          if (_.isFunction(this.clickKey) && $injector) {
            return this.scope.click = function () {
              return $injector.invoke(_this.clickKey, void 0, { '$markerModel': model });
            };
          } else {
            this.maybeSetScopeValue('click', model, oldModel, this.clickKey, this.evalModelHandle, isInit);
            return this.createMarker(model, oldModel, isInit);
          }
        };
        MarkerChildModel.prototype.createMarker = function (model, oldModel, isInit) {
          var _this = this;
          if (oldModel == null) {
            oldModel = void 0;
          }
          if (isInit == null) {
            isInit = false;
          }
          return this.maybeSetScopeValue('options', model, oldModel, this.optionsKey, function (lModel, lModelKey) {
            var value;
            if (lModel === void 0) {
              return void 0;
            }
            value = lModelKey === 'self' ? lModel : lModel[lModelKey];
            if (value === void 0) {
              return value = lModelKey === void 0 ? _this.defaults : _this.scope.options;
            } else {
              return value;
            }
          }, isInit, this.setOptions);
        };
        MarkerChildModel.prototype.maybeSetScopeValue = function (scopePropName, model, oldModel, modelKey, evaluate, isInit, gSetter) {
          var newValue, oldVal;
          if (gSetter == null) {
            gSetter = void 0;
          }
          if (oldModel === void 0) {
            this.scope[scopePropName] = evaluate(model, modelKey);
            if (!isInit) {
              if (gSetter != null) {
                gSetter(this.scope);
              }
            }
            return;
          }
          oldVal = evaluate(oldModel, modelKey);
          newValue = evaluate(model, modelKey);
          if (newValue !== oldVal && this.scope[scopePropName] !== newValue) {
            this.scope[scopePropName] = newValue;
            if (!isInit) {
              if (gSetter != null) {
                gSetter(this.scope);
              }
              return this.gMarkerManager.draw();
            }
          }
        };
        MarkerChildModel.prototype.destroy = function () {
          return this.scope.$destroy();
        };
        MarkerChildModel.prototype.setCoords = function (scope) {
          if (scope.$id !== this.scope.$id || this.gMarker === void 0) {
            return;
          }
          if (scope.coords != null) {
            if (!this.validateCoords(this.scope.coords)) {
              this.$log.error('MarkerChildMarker cannot render marker as scope.coords as no position on marker: ' + JSON.stringify(this.model));
              return;
            }
            this.gMarker.setPosition(this.getCoords(scope.coords));
            this.gMarker.setVisible(this.validateCoords(scope.coords));
            this.gMarkerManager.remove(this.gMarker);
            return this.gMarkerManager.add(this.gMarker);
          } else {
            return this.gMarkerManager.remove(this.gMarker);
          }
        };
        MarkerChildModel.prototype.setIcon = function (scope) {
          if (scope.$id !== this.scope.$id || this.gMarker === void 0) {
            return;
          }
          this.gMarkerManager.remove(this.gMarker);
          this.gMarker.setIcon(scope.icon);
          this.gMarkerManager.add(this.gMarker);
          this.gMarker.setPosition(this.getCoords(scope.coords));
          return this.gMarker.setVisible(this.validateCoords(scope.coords));
        };
        MarkerChildModel.prototype.setOptions = function (scope) {
          var _ref, _this = this;
          if (scope.$id !== this.scope.$id) {
            return;
          }
          if (this.gMarker != null) {
            this.gMarkerManager.remove(this.gMarker);
            delete this.gMarker;
          }
          if (!((_ref = scope.coords) != null ? _ref : typeof scope.icon === 'function' ? scope.icon(scope.options != null) : void 0)) {
            return;
          }
          this.opts = this.createMarkerOptions(scope.coords, scope.icon, scope.options);
          delete this.gMarker;
          if (this.isLabelDefined(scope)) {
            this.gMarker = new MarkerWithLabel(this.setLabelOptions(this.opts, scope));
          } else {
            this.gMarker = new google.maps.Marker(this.opts);
          }
          this.setEvents(this.gMarker, this.parentScope, this.model);
          if (this.id) {
            this.gMarker.key = this.id;
          }
          this.gMarkerManager.add(this.gMarker);
          return google.maps.event.addListener(this.gMarker, 'click', function () {
            if (_this.doClick && _this.scope.click != null) {
              return _this.scope.click();
            }
          });
        };
        MarkerChildModel.prototype.isLabelDefined = function (scope) {
          return scope.labelContent != null;
        };
        MarkerChildModel.prototype.setLabelOptions = function (opts, scope) {
          opts.labelAnchor = this.getLabelPositionPoint(scope.labelAnchor);
          opts.labelClass = scope.labelClass;
          opts.labelContent = scope.labelContent;
          return opts;
        };
        MarkerChildModel.prototype.watchDestroy = function (scope) {
          var _this = this;
          return scope.$on('$destroy', function () {
            var self, _ref;
            if (_this.gMarker != null) {
              google.maps.event.clearListeners(_this.gMarker, 'click');
              if (((_ref = _this.parentScope) != null ? _ref.events : void 0) && _.isArray(_this.parentScope.events)) {
                _this.parentScope.events.forEach(function (event, eventName) {
                  return google.maps.event.clearListeners(this.gMarker, eventName);
                });
              }
              _this.gMarkerManager.remove(_this.gMarker, true);
              delete _this.gMarker;
            }
            return self = void 0;
          });
        };
        return MarkerChildModel;
      }(ModelKey);
      return MarkerChildModel;
    }
  ]);
}.call(this));
(function () {
  var __bind = function (fn, me) {
      return function () {
        return fn.apply(me, arguments);
      };
    }, __hasProp = {}.hasOwnProperty, __extends = function (child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key))
          child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };
  angular.module('google-maps.directives.api').factory('PolylineChildModel', [
    'BaseObject',
    'Logger',
    '$timeout',
    'array-sync',
    'GmapUtil',
    function (BaseObject, Logger, $timeout, arraySync, GmapUtil) {
      var $log, PolylineChildModel;
      $log = Logger;
      return PolylineChildModel = function (_super) {
        __extends(PolylineChildModel, _super);
        PolylineChildModel.include(GmapUtil);
        function PolylineChildModel(scope, attrs, map, defaults, model) {
          var arraySyncer, pathPoints, _this = this;
          this.scope = scope;
          this.attrs = attrs;
          this.map = map;
          this.defaults = defaults;
          this.model = model;
          this.buildOpts = __bind(this.buildOpts, this);
          pathPoints = this.convertPathPoints(scope.path);
          this.polyline = new google.maps.Polyline(this.buildOpts(pathPoints));
          if (scope.fit) {
            GmapUtil.extendMapBounds(map, pathPoints);
          }
          if (!scope['static'] && angular.isDefined(scope.editable)) {
            scope.$watch('editable', function (newValue, oldValue) {
              if (newValue !== oldValue) {
                return _this.polyline.setEditable(newValue);
              }
            });
          }
          if (angular.isDefined(scope.draggable)) {
            scope.$watch('draggable', function (newValue, oldValue) {
              if (newValue !== oldValue) {
                return _this.polyline.setDraggable(newValue);
              }
            });
          }
          if (angular.isDefined(scope.visible)) {
            scope.$watch('visible', function (newValue, oldValue) {
              if (newValue !== oldValue) {
                return _this.polyline.setVisible(newValue);
              }
            });
          }
          if (angular.isDefined(scope.geodesic)) {
            scope.$watch('geodesic', function (newValue, oldValue) {
              if (newValue !== oldValue) {
                return _this.polyline.setOptions(_this.buildOpts(_this.polyline.getPath()));
              }
            });
          }
          if (angular.isDefined(scope.stroke) && angular.isDefined(scope.stroke.weight)) {
            scope.$watch('stroke.weight', function (newValue, oldValue) {
              if (newValue !== oldValue) {
                return _this.polyline.setOptions(_this.buildOpts(_this.polyline.getPath()));
              }
            });
          }
          if (angular.isDefined(scope.stroke) && angular.isDefined(scope.stroke.color)) {
            scope.$watch('stroke.color', function (newValue, oldValue) {
              if (newValue !== oldValue) {
                return _this.polyline.setOptions(_this.buildOpts(_this.polyline.getPath()));
              }
            });
          }
          if (angular.isDefined(scope.stroke) && angular.isDefined(scope.stroke.opacity)) {
            scope.$watch('stroke.opacity', function (newValue, oldValue) {
              if (newValue !== oldValue) {
                return _this.polyline.setOptions(_this.buildOpts(_this.polyline.getPath()));
              }
            });
          }
          if (angular.isDefined(scope.icons)) {
            scope.$watch('icons', function (newValue, oldValue) {
              if (newValue !== oldValue) {
                return _this.polyline.setOptions(_this.buildOpts(_this.polyline.getPath()));
              }
            });
          }
          arraySyncer = arraySync(this.polyline.getPath(), scope, 'path', function (pathPoints) {
            if (scope.fit) {
              return GmapUtil.extendMapBounds(map, pathPoints);
            }
          });
          scope.$on('$destroy', function () {
            _this.polyline.setMap(null);
            _this.polyline = null;
            _this.scope = null;
            if (arraySyncer) {
              arraySyncer();
              return arraySyncer = null;
            }
          });
          $log.info(this);
        }
        PolylineChildModel.prototype.buildOpts = function (pathPoints) {
          var opts, _this = this;
          opts = angular.extend({}, this.defaults, {
            map: this.map,
            path: pathPoints,
            icons: this.scope.icons,
            strokeColor: this.scope.stroke && this.scope.stroke.color,
            strokeOpacity: this.scope.stroke && this.scope.stroke.opacity,
            strokeWeight: this.scope.stroke && this.scope.stroke.weight
          });
          angular.forEach({
            clickable: true,
            draggable: false,
            editable: false,
            geodesic: false,
            visible: true,
            'static': false,
            fit: false
          }, function (defaultValue, key) {
            if (angular.isUndefined(_this.scope[key]) || _this.scope[key] === null) {
              return opts[key] = defaultValue;
            } else {
              return opts[key] = _this.scope[key];
            }
          });
          if (opts['static']) {
            opts.editable = false;
          }
          return opts;
        };
        PolylineChildModel.prototype.destroy = function () {
          return this.scope.$destroy();
        };
        return PolylineChildModel;
      }(BaseObject);
    }
  ]);
}.call(this));
(function () {
  var __bind = function (fn, me) {
      return function () {
        return fn.apply(me, arguments);
      };
    }, __hasProp = {}.hasOwnProperty, __extends = function (child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key))
          child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };
  angular.module('google-maps.directives.api.models.child').factory('WindowChildModel', [
    'BaseObject',
    'GmapUtil',
    'Logger',
    '$compile',
    '$http',
    '$templateCache',
    function (BaseObject, GmapUtil, Logger, $compile, $http, $templateCache) {
      var WindowChildModel;
      WindowChildModel = function (_super) {
        __extends(WindowChildModel, _super);
        WindowChildModel.include(GmapUtil);
        function WindowChildModel(model, scope, opts, isIconVisibleOnClick, mapCtrl, markerCtrl, element, needToManualDestroy, markerIsVisibleAfterWindowClose) {
          this.model = model;
          this.scope = scope;
          this.opts = opts;
          this.isIconVisibleOnClick = isIconVisibleOnClick;
          this.mapCtrl = mapCtrl;
          this.markerCtrl = markerCtrl;
          this.element = element;
          this.needToManualDestroy = needToManualDestroy != null ? needToManualDestroy : false;
          this.markerIsVisibleAfterWindowClose = markerIsVisibleAfterWindowClose != null ? markerIsVisibleAfterWindowClose : true;
          this.destroy = __bind(this.destroy, this);
          this.remove = __bind(this.remove, this);
          this.hideWindow = __bind(this.hideWindow, this);
          this.getLatestPosition = __bind(this.getLatestPosition, this);
          this.showWindow = __bind(this.showWindow, this);
          this.handleClick = __bind(this.handleClick, this);
          this.watchCoords = __bind(this.watchCoords, this);
          this.watchShow = __bind(this.watchShow, this);
          this.createGWin = __bind(this.createGWin, this);
          this.watchElement = __bind(this.watchElement, this);
          this.googleMapsHandles = [];
          this.$log = Logger;
          this.createGWin();
          if (this.markerCtrl != null) {
            this.markerCtrl.setClickable(true);
          }
          this.handleClick();
          this.watchElement();
          this.watchShow();
          this.watchCoords();
          this.$log.info(this);
        }
        WindowChildModel.prototype.watchElement = function () {
          var _this = this;
          return this.scope.$watch(function () {
            var _ref;
            if (!_this.element || !_this.html) {
              return;
            }
            if (_this.html !== _this.element.html()) {
              if (_this.gWin) {
                if ((_ref = _this.opts) != null) {
                  _ref.content = void 0;
                }
                _this.remove();
                _this.createGWin();
                return _this.showHide();
              }
            }
          });
        };
        WindowChildModel.prototype.createGWin = function () {
          var defaults, _this = this;
          if (this.gWin == null) {
            defaults = {};
            if (this.opts != null) {
              if (this.scope.coords) {
                this.opts.position = this.getCoords(this.scope.coords);
              }
              defaults = this.opts;
            }
            if (this.element) {
              this.html = _.isObject(this.element) ? this.element.html() : this.element;
            }
            this.opts = this.createWindowOptions(this.markerCtrl, this.scope, this.html, defaults);
          }
          if (this.opts != null && !this.gWin) {
            if (this.opts.boxClass && (window.InfoBox && typeof window.InfoBox === 'function')) {
              this.gWin = new window.InfoBox(this.opts);
            } else {
              this.gWin = new google.maps.InfoWindow(this.opts);
            }
            return this.googleMapsHandles.push(google.maps.event.addListener(this.gWin, 'closeclick', function () {
              var _ref;
              if ((_ref = _this.markerCtrl) != null) {
                _ref.setVisible(_this.markerIsVisibleAfterWindowClose);
              }
              _this.gWin.isOpen(false);
              if (_this.scope.closeClick != null) {
                return _this.scope.closeClick();
              }
            }));
          }
        };
        WindowChildModel.prototype.watchShow = function () {
          var _this = this;
          return this.scope.$watch('show', function (newValue, oldValue) {
            if (newValue !== oldValue) {
              if (newValue) {
                return _this.showWindow();
              } else {
                return _this.hideWindow();
              }
            } else {
              if (_this.gWin != null) {
                if (newValue && !_this.gWin.getMap()) {
                  return _this.showWindow();
                }
              }
            }
          }, true);
        };
        WindowChildModel.prototype.watchCoords = function () {
          var scope, _this = this;
          scope = this.markerCtrl != null ? this.scope.$parent : this.scope;
          return scope.$watch('coords', function (newValue, oldValue) {
            var pos;
            if (newValue !== oldValue) {
              if (newValue == null) {
                return _this.hideWindow();
              } else {
                if (!_this.validateCoords(newValue)) {
                  _this.$log.error('WindowChildMarker cannot render marker as scope.coords as no position on marker: ' + JSON.stringify(_this.model));
                  return;
                }
                pos = _this.getCoords(newValue);
                _this.gWin.setPosition(pos);
                if (_this.opts) {
                  return _this.opts.position = pos;
                }
              }
            }
          }, true);
        };
        WindowChildModel.prototype.handleClick = function () {
          var _this = this;
          if (this.markerCtrl != null) {
            return this.googleMapsHandles.push(google.maps.event.addListener(this.markerCtrl, 'click', function () {
              var pos;
              if (_this.gWin == null) {
                _this.createGWin();
              }
              pos = _this.markerCtrl.getPosition();
              if (_this.gWin != null) {
                _this.gWin.setPosition(pos);
                if (_this.opts) {
                  _this.opts.position = pos;
                }
                _this.showWindow();
              }
              _this.initialMarkerVisibility = _this.markerCtrl.getVisible();
              return _this.markerCtrl.setVisible(_this.isIconVisibleOnClick);
            }));
          }
        };
        WindowChildModel.prototype.showWindow = function () {
          var show, _this = this;
          show = function () {
            if (_this.gWin) {
              if ((_this.scope.show || _this.scope.show == null) && !_this.gWin.isOpen()) {
                return _this.gWin.open(_this.mapCtrl);
              }
            }
          };
          if (this.scope.templateUrl) {
            if (this.gWin) {
              $http.get(this.scope.templateUrl, { cache: $templateCache }).then(function (content) {
                var compiled, templateScope;
                templateScope = _this.scope.$new();
                if (angular.isDefined(_this.scope.templateParameter)) {
                  templateScope.parameter = _this.scope.templateParameter;
                }
                compiled = $compile(content.data)(templateScope);
                return _this.gWin.setContent(compiled[0]);
              });
            }
            return show();
          } else {
            return show();
          }
        };
        WindowChildModel.prototype.showHide = function () {
          if (this.scope.show) {
            return this.showWindow();
          } else {
            return this.hideWindow();
          }
        };
        WindowChildModel.prototype.getLatestPosition = function () {
          if (this.gWin != null && this.markerCtrl != null) {
            return this.gWin.setPosition(this.markerCtrl.getPosition());
          }
        };
        WindowChildModel.prototype.hideWindow = function () {
          if (this.gWin != null && this.gWin.isOpen()) {
            return this.gWin.close();
          }
        };
        WindowChildModel.prototype.remove = function () {
          this.hideWindow();
          _.each(this.googleMapsHandles, function (h) {
            return google.maps.event.removeListener(h);
          });
          this.googleMapsHandles.length = 0;
          return delete this.gWin;
        };
        WindowChildModel.prototype.destroy = function (manualOverride) {
          var self;
          if (manualOverride == null) {
            manualOverride = false;
          }
          this.remove();
          if (this.scope != null && (this.needToManualDestroy || manualOverride)) {
            this.scope.$destroy();
          }
          return self = void 0;
        };
        return WindowChildModel;
      }(BaseObject);
      return WindowChildModel;
    }
  ]);
}.call(this));
/*
	- interface for all markers to derrive from
 	- to enforce a minimum set of requirements
 		- attributes
 			- coords
 			- icon
		- implementation needed on watches
*/
(function () {
  var __bind = function (fn, me) {
      return function () {
        return fn.apply(me, arguments);
      };
    }, __hasProp = {}.hasOwnProperty, __extends = function (child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key))
          child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };
  angular.module('google-maps.directives.api.models.parent').factory('IMarkerParentModel', [
    'ModelKey',
    'Logger',
    function (ModelKey, Logger) {
      var IMarkerParentModel;
      IMarkerParentModel = function (_super) {
        __extends(IMarkerParentModel, _super);
        IMarkerParentModel.prototype.DEFAULTS = {};
        function IMarkerParentModel(scope, element, attrs, mapCtrl, $timeout) {
          var self, _this = this;
          this.scope = scope;
          this.element = element;
          this.attrs = attrs;
          this.mapCtrl = mapCtrl;
          this.$timeout = $timeout;
          this.linkInit = __bind(this.linkInit, this);
          this.onDestroy = __bind(this.onDestroy, this);
          this.onWatch = __bind(this.onWatch, this);
          this.watch = __bind(this.watch, this);
          this.validateScope = __bind(this.validateScope, this);
          this.onTimeOut = __bind(this.onTimeOut, this);
          IMarkerParentModel.__super__.constructor.call(this, this.scope);
          self = this;
          this.$log = Logger;
          if (!this.validateScope(scope)) {
            throw new String('Unable to construct IMarkerParentModel due to invalid scope');
          }
          this.doClick = angular.isDefined(attrs.click);
          if (scope.options != null) {
            this.DEFAULTS = scope.options;
          }
          this.$timeout(function () {
            _this.onTimeOut(scope);
            _this.watch('coords', _this.scope);
            _this.watch('icon', _this.scope);
            _this.watch('options', _this.scope);
            return scope.$on('$destroy', function () {
              return _this.onDestroy(scope);
            });
          });
        }
        IMarkerParentModel.prototype.onTimeOut = function (scope) {
        };
        IMarkerParentModel.prototype.validateScope = function (scope) {
          var ret;
          if (scope == null) {
            this.$log.error(this.constructor.name + ': invalid scope used');
            return false;
          }
          ret = scope.coords != null;
          if (!ret) {
            this.$log.error(this.constructor.name + ': no valid coords attribute found');
            return false;
          }
          return ret;
        };
        IMarkerParentModel.prototype.watch = function (propNameToWatch, scope) {
          var watchFunc, _this = this;
          watchFunc = function (newValue, oldValue) {
            if (newValue !== oldValue) {
              return _this.onWatch(propNameToWatch, scope, newValue, oldValue);
            }
          };
          return scope.$watch(propNameToWatch, watchFunc, true);
        };
        IMarkerParentModel.prototype.onWatch = function (propNameToWatch, scope, newValue, oldValue) {
          throw new String('OnWatch Not Implemented!!');
        };
        IMarkerParentModel.prototype.onDestroy = function (scope) {
          throw new String('OnDestroy Not Implemented!!');
        };
        IMarkerParentModel.prototype.linkInit = function (element, mapCtrl, scope, animate) {
          throw new String('LinkInit Not Implemented!!');
        };
        return IMarkerParentModel;
      }(ModelKey);
      return IMarkerParentModel;
    }
  ]);
}.call(this));
/*
	- interface directive for all window(s) to derrive from
*/
(function () {
  var __hasProp = {}.hasOwnProperty, __extends = function (child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key))
          child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };
  angular.module('google-maps.directives.api.models.parent').factory('IWindowParentModel', [
    'ModelKey',
    'GmapUtil',
    'Logger',
    function (ModelKey, GmapUtil, Logger) {
      var IWindowParentModel;
      IWindowParentModel = function (_super) {
        __extends(IWindowParentModel, _super);
        IWindowParentModel.include(GmapUtil);
        IWindowParentModel.prototype.DEFAULTS = {};
        function IWindowParentModel(scope, element, attrs, ctrls, $timeout, $compile, $http, $templateCache) {
          var self;
          IWindowParentModel.__super__.constructor.call(this, scope);
          self = this;
          this.$log = Logger;
          this.$timeout = $timeout;
          this.$compile = $compile;
          this.$http = $http;
          this.$templateCache = $templateCache;
          if (scope.options != null) {
            this.DEFAULTS = scope.options;
          }
        }
        return IWindowParentModel;
      }(ModelKey);
      return IWindowParentModel;
    }
  ]);
}.call(this));
(function () {
  var __bind = function (fn, me) {
      return function () {
        return fn.apply(me, arguments);
      };
    }, __hasProp = {}.hasOwnProperty, __extends = function (child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key))
          child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };
  angular.module('google-maps.directives.api.models.parent').factory('LayerParentModel', [
    'BaseObject',
    'Logger',
    function (BaseObject, Logger) {
      var LayerParentModel;
      LayerParentModel = function (_super) {
        __extends(LayerParentModel, _super);
        function LayerParentModel(scope, element, attrs, mapCtrl, $timeout, onLayerCreated, $log) {
          var _this = this;
          this.scope = scope;
          this.element = element;
          this.attrs = attrs;
          this.mapCtrl = mapCtrl;
          this.$timeout = $timeout;
          this.onLayerCreated = onLayerCreated != null ? onLayerCreated : void 0;
          this.$log = $log != null ? $log : Logger;
          this.createGoogleLayer = __bind(this.createGoogleLayer, this);
          if (this.attrs.type == null) {
            this.$log.info('type attribute for the layer directive is mandatory. Layer creation aborted!!');
            return;
          }
          this.createGoogleLayer();
          this.gMap = void 0;
          this.doShow = true;
          this.$timeout(function () {
            _this.gMap = mapCtrl.getMap();
            if (angular.isDefined(_this.attrs.show)) {
              _this.doShow = _this.scope.show;
            }
            if (_this.doShow && _this.gMap != null) {
              _this.layer.setMap(_this.gMap);
            }
            _this.scope.$watch('show', function (newValue, oldValue) {
              if (newValue !== oldValue) {
                _this.doShow = newValue;
                if (newValue) {
                  return _this.layer.setMap(_this.gMap);
                } else {
                  return _this.layer.setMap(null);
                }
              }
            }, true);
            _this.scope.$watch('options', function (newValue, oldValue) {
              if (newValue !== oldValue) {
                _this.layer.setMap(null);
                _this.layer = null;
                return _this.createGoogleLayer();
              }
            }, true);
            return _this.scope.$on('$destroy', function () {
              return _this.layer.setMap(null);
            });
          });
        }
        LayerParentModel.prototype.createGoogleLayer = function () {
          var _this = this;
          if (this.attrs.options == null) {
            this.layer = this.attrs.namespace === void 0 ? new google.maps[this.attrs.type]() : new google.maps[this.attrs.namespace][this.attrs.type]();
          } else {
            this.layer = this.attrs.namespace === void 0 ? new google.maps[this.attrs.type](this.scope.options) : new google.maps[this.attrs.namespace][this.attrs.type](this.scope.options);
          }
          return this.$timeout(function () {
            var fn;
            if (_this.layer != null && _this.onLayerCreated != null) {
              fn = _this.onLayerCreated(_this.scope, _this.layer);
              if (fn) {
                return fn(_this.layer);
              }
            }
          });
        };
        return LayerParentModel;
      }(BaseObject);
      return LayerParentModel;
    }
  ]);
}.call(this));
/*
	Basic Directive api for a marker. Basic in the sense that this directive contains 1:1 on scope and model.
	Thus there will be one html element per marker within the directive.
*/
(function () {
  var __bind = function (fn, me) {
      return function () {
        return fn.apply(me, arguments);
      };
    }, __hasProp = {}.hasOwnProperty, __extends = function (child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key))
          child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };
  angular.module('google-maps.directives.api.models.parent').factory('MarkerParentModel', [
    'IMarkerParentModel',
    'GmapUtil',
    'EventsHelper',
    function (IMarkerParentModel, GmapUtil, EventsHelper) {
      var MarkerParentModel;
      MarkerParentModel = function (_super) {
        __extends(MarkerParentModel, _super);
        MarkerParentModel.include(GmapUtil);
        MarkerParentModel.include(EventsHelper);
        function MarkerParentModel(scope, element, attrs, mapCtrl, $timeout, gMarkerManager, doFit) {
          var self;
          this.gMarkerManager = gMarkerManager;
          this.doFit = doFit;
          this.onDestroy = __bind(this.onDestroy, this);
          this.setGMarker = __bind(this.setGMarker, this);
          this.onWatch = __bind(this.onWatch, this);
          this.onTimeOut = __bind(this.onTimeOut, this);
          MarkerParentModel.__super__.constructor.call(this, scope, element, attrs, mapCtrl, $timeout);
          self = this;
        }
        MarkerParentModel.prototype.onTimeOut = function (scope) {
          var opts, _this = this;
          opts = this.createMarkerOptions(scope.coords, scope.icon, scope.options, this.mapCtrl.getMap());
          this.setGMarker(new google.maps.Marker(opts));
          google.maps.event.addListener(this.scope.gMarker, 'click', function () {
            if (_this.doClick && scope.click != null) {
              return _this.$timeout(function () {
                return _this.scope.click();
              });
            }
          });
          this.setEvents(this.scope.gMarker, scope, scope);
          return this.$log.info(this);
        };
        MarkerParentModel.prototype.onWatch = function (propNameToWatch, scope) {
          switch (propNameToWatch) {
          case 'coords':
            if (this.validateCoords(scope.coords) && this.scope.gMarker != null) {
              this.scope.gMarker.setMap(this.mapCtrl.getMap());
              this.scope.gMarker.setPosition(this.getCoords(scope.coords));
              this.scope.gMarker.setVisible(this.validateCoords(scope.coords));
              return this.scope.gMarker.setOptions(scope.options);
            } else {
              return this.scope.gMarker.setMap(null);
            }
            break;
          case 'icon':
            if (scope.icon != null && this.validateCoords(scope.coords) && this.scope.gMarker != null) {
              this.scope.gMarker.setOptions(scope.options);
              this.scope.gMarker.setIcon(scope.icon);
              this.scope.gMarker.setMap(null);
              this.scope.gMarker.setMap(this.mapCtrl.getMap());
              this.scope.gMarker.setPosition(this.getCoords(scope.coords));
              return this.scope.gMarker.setVisible(this.validateCoords(scope.coords));
            }
            break;
          case 'options':
            if (this.validateCoords(scope.coords) && scope.icon != null && scope.options) {
              if (this.scope.gMarker != null) {
                this.scope.gMarker.setMap(null);
              }
              return this.setGMarker(new google.maps.Marker(this.createMarkerOptions(scope.coords, scope.icon, scope.options, this.mapCtrl.getMap())));
            }
          }
        };
        MarkerParentModel.prototype.setGMarker = function (gMarker) {
          if (this.scope.gMarker) {
            delete this.scope.gMarker;
            this.gMarkerManager.remove(this.scope.gMarker, false);
          }
          this.scope.gMarker = gMarker;
          if (this.scope.gMarker) {
            this.gMarkerManager.add(this.scope.gMarker, false);
            if (this.doFit) {
              return this.gMarkerManager.fit();
            }
          }
        };
        MarkerParentModel.prototype.onDestroy = function (scope) {
          var self;
          if (!this.scope.gMarker) {
            self = void 0;
            return;
          }
          this.scope.gMarker.setMap(null);
          this.gMarkerManager.remove(this.scope.gMarker, false);
          delete this.scope.gMarker;
          return self = void 0;
        };
        return MarkerParentModel;
      }(IMarkerParentModel);
      return MarkerParentModel;
    }
  ]);
}.call(this));
(function () {
  var __bind = function (fn, me) {
      return function () {
        return fn.apply(me, arguments);
      };
    }, __hasProp = {}.hasOwnProperty, __extends = function (child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key))
          child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };
  angular.module('google-maps.directives.api.models.parent').factory('MarkersParentModel', [
    'IMarkerParentModel',
    'ModelsWatcher',
    'PropMap',
    'MarkerChildModel',
    'ClustererMarkerManager',
    'MarkerManager',
    function (IMarkerParentModel, ModelsWatcher, PropMap, MarkerChildModel, ClustererMarkerManager, MarkerManager) {
      var MarkersParentModel;
      MarkersParentModel = function (_super) {
        __extends(MarkersParentModel, _super);
        MarkersParentModel.include(ModelsWatcher);
        function MarkersParentModel(scope, element, attrs, mapCtrl, $timeout) {
          this.onDestroy = __bind(this.onDestroy, this);
          this.newChildMarker = __bind(this.newChildMarker, this);
          this.pieceMealMarkers = __bind(this.pieceMealMarkers, this);
          this.reBuildMarkers = __bind(this.reBuildMarkers, this);
          this.createMarkersFromScratch = __bind(this.createMarkersFromScratch, this);
          this.validateScope = __bind(this.validateScope, this);
          this.onWatch = __bind(this.onWatch, this);
          this.onTimeOut = __bind(this.onTimeOut, this);
          var self, _this = this;
          MarkersParentModel.__super__.constructor.call(this, scope, element, attrs, mapCtrl, $timeout);
          self = this;
          this.scope.markerModels = new PropMap();
          this.$timeout = $timeout;
          this.$log.info(this);
          this.doRebuildAll = this.scope.doRebuildAll != null ? this.scope.doRebuildAll : false;
          this.setIdKey(scope);
          this.scope.$watch('doRebuildAll', function (newValue, oldValue) {
            if (newValue !== oldValue) {
              return _this.doRebuildAll = newValue;
            }
          });
        }
        MarkersParentModel.prototype.onTimeOut = function (scope) {
          this.watch('models', scope);
          this.watch('doCluster', scope);
          this.watch('clusterOptions', scope);
          this.watch('clusterEvents', scope);
          this.watch('fit', scope);
          this.watch('idKey', scope);
          this.gMarkerManager = void 0;
          return this.createMarkersFromScratch(scope);
        };
        MarkersParentModel.prototype.onWatch = function (propNameToWatch, scope, newValue, oldValue) {
          if (propNameToWatch === 'idKey' && newValue !== oldValue) {
            this.idKey = newValue;
          }
          if (this.doRebuildAll) {
            return this.reBuildMarkers(scope);
          } else {
            return this.pieceMealMarkers(scope);
          }
        };
        MarkersParentModel.prototype.validateScope = function (scope) {
          var modelsNotDefined;
          modelsNotDefined = angular.isUndefined(scope.models) || scope.models === void 0;
          if (modelsNotDefined) {
            this.$log.error(this.constructor.name + ': no valid models attribute found');
          }
          return MarkersParentModel.__super__.validateScope.call(this, scope) || modelsNotDefined;
        };
        MarkersParentModel.prototype.createMarkersFromScratch = function (scope) {
          var _this = this;
          if (scope.doCluster) {
            if (scope.clusterEvents) {
              this.clusterInternalOptions = _.once(function () {
                var self, _ref, _ref1, _ref2;
                self = _this;
                if (!_this.origClusterEvents) {
                  _this.origClusterEvents = {
                    click: (_ref = scope.clusterEvents) != null ? _ref.click : void 0,
                    mouseout: (_ref1 = scope.clusterEvents) != null ? _ref1.mouseout : void 0,
                    mouseover: (_ref2 = scope.clusterEvents) != null ? _ref2.mouseover : void 0
                  };
                  return _.extend(scope.clusterEvents, {
                    click: function (cluster) {
                      return self.maybeExecMappedEvent(cluster, 'click');
                    },
                    mouseout: function (cluster) {
                      return self.maybeExecMappedEvent(cluster, 'mouseout');
                    },
                    mouseover: function (cluster) {
                      return self.maybeExecMappedEvent(cluster, 'mouseover');
                    }
                  });
                }
              })();
            }
            if (scope.clusterOptions || scope.clusterEvents) {
              if (this.gMarkerManager === void 0) {
                this.gMarkerManager = new ClustererMarkerManager(this.mapCtrl.getMap(), void 0, scope.clusterOptions, this.clusterInternalOptions);
              } else {
                if (this.gMarkerManager.opt_options !== scope.clusterOptions) {
                  this.gMarkerManager = new ClustererMarkerManager(this.mapCtrl.getMap(), void 0, scope.clusterOptions, this.clusterInternalOptions);
                }
              }
            } else {
              this.gMarkerManager = new ClustererMarkerManager(this.mapCtrl.getMap());
            }
          } else {
            this.gMarkerManager = new MarkerManager(this.mapCtrl.getMap());
          }
          return _async.each(scope.models, function (model) {
            return _this.newChildMarker(model, scope);
          }, function () {
            _this.gMarkerManager.draw();
            if (scope.fit) {
              return _this.gMarkerManager.fit();
            }
          });
        };
        MarkersParentModel.prototype.reBuildMarkers = function (scope) {
          if (!scope.doRebuild && scope.doRebuild !== void 0) {
            return;
          }
          this.onDestroy(scope);
          return this.createMarkersFromScratch(scope);
        };
        MarkersParentModel.prototype.pieceMealMarkers = function (scope) {
          var _this = this;
          if (this.scope.models != null && this.scope.models.length > 0 && this.scope.markerModels.length > 0) {
            return this.figureOutState(this.idKey, scope, this.scope.markerModels, this.modelKeyComparison, function (state) {
              var payload;
              payload = state;
              return _async.each(payload.removals, function (child) {
                if (child != null) {
                  if (child.destroy != null) {
                    child.destroy();
                  }
                  return _this.scope.markerModels.remove(child.id);
                }
              }, function () {
                return _async.each(payload.adds, function (modelToAdd) {
                  return _this.newChildMarker(modelToAdd, scope);
                }, function () {
                  if (payload.adds.length > 0 || payload.removals.length > 0) {
                    _this.gMarkerManager.draw();
                    return scope.markerModels = _this.scope.markerModels;
                  }
                });
              });
            });
          } else {
            return this.reBuildMarkers(scope);
          }
        };
        MarkersParentModel.prototype.newChildMarker = function (model, scope) {
          var child;
          if (model[this.idKey] == null) {
            this.$log.error('Marker model has no id to assign a child to. This is required for performance. Please assign id, or redirect id to a different key.');
            return;
          }
          this.$log.info('child', child, 'markers', this.scope.markerModels);
          child = new MarkerChildModel(model, scope, this.mapCtrl, this.$timeout, this.DEFAULTS, this.doClick, this.gMarkerManager, this.idKey);
          this.scope.markerModels.put(model[this.idKey], child);
          return child;
        };
        MarkersParentModel.prototype.onDestroy = function (scope) {
          _.each(this.scope.markerModels.values(), function (model) {
            if (model != null) {
              return model.destroy();
            }
          });
          delete this.scope.markerModels;
          this.scope.markerModels = new PropMap();
          if (this.gMarkerManager != null) {
            return this.gMarkerManager.clear();
          }
        };
        MarkersParentModel.prototype.maybeExecMappedEvent = function (cluster, fnName) {
          var pair, _ref;
          if (_.isFunction((_ref = this.scope.clusterEvents) != null ? _ref[fnName] : void 0)) {
            pair = this.mapClusterToMarkerModels(cluster);
            if (this.origClusterEvents[fnName]) {
              return this.origClusterEvents[fnName](pair.cluster, pair.mapped);
            }
          }
        };
        MarkersParentModel.prototype.mapClusterToMarkerModels = function (cluster) {
          var gMarkers, mapped, _this = this;
          gMarkers = cluster.getMarkers();
          mapped = gMarkers.map(function (g) {
            return _this.scope.markerModels[g.key].model;
          });
          return {
            cluster: cluster,
            mapped: mapped
          };
        };
        return MarkersParentModel;
      }(IMarkerParentModel);
      return MarkersParentModel;
    }
  ]);
}.call(this));
/*
	Windows directive where many windows map to the models property
*/
(function () {
  var __bind = function (fn, me) {
      return function () {
        return fn.apply(me, arguments);
      };
    }, __hasProp = {}.hasOwnProperty, __extends = function (child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key))
          child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };
  angular.module('google-maps.directives.api.models.parent').factory('PolylinesParentModel', [
    '$timeout',
    'Logger',
    'ModelKey',
    'ModelsWatcher',
    'PropMap',
    'PolylineChildModel',
    function ($timeout, Logger, ModelKey, ModelsWatcher, PropMap, PolylineChildModel) {
      var PolylinesParentModel;
      return PolylinesParentModel = function (_super) {
        __extends(PolylinesParentModel, _super);
        PolylinesParentModel.include(ModelsWatcher);
        function PolylinesParentModel(scope, element, attrs, gMap, defaults) {
          var self, _this = this;
          this.scope = scope;
          this.element = element;
          this.attrs = attrs;
          this.gMap = gMap;
          this.defaults = defaults;
          this.modelKeyComparison = __bind(this.modelKeyComparison, this);
          this.setChildScope = __bind(this.setChildScope, this);
          this.createChild = __bind(this.createChild, this);
          this.pieceMeal = __bind(this.pieceMeal, this);
          this.createAllNew = __bind(this.createAllNew, this);
          this.watchIdKey = __bind(this.watchIdKey, this);
          this.createChildScopes = __bind(this.createChildScopes, this);
          this.watchOurScope = __bind(this.watchOurScope, this);
          this.watchDestroy = __bind(this.watchDestroy, this);
          this.rebuildAll = __bind(this.rebuildAll, this);
          this.doINeedToWipe = __bind(this.doINeedToWipe, this);
          this.watchModels = __bind(this.watchModels, this);
          this.watch = __bind(this.watch, this);
          PolylinesParentModel.__super__.constructor.call(this, scope);
          self = this;
          this.$log = Logger;
          this.plurals = new PropMap();
          this.scopePropNames = [
            'path',
            'stroke',
            'clickable',
            'draggable',
            'editable',
            'geodesic',
            'icons',
            'visible'
          ];
          _.each(this.scopePropNames, function (name) {
            return _this[name + 'Key'] = void 0;
          });
          this.models = void 0;
          this.firstTime = true;
          this.$log.info(this);
          $timeout(function () {
            _this.watchOurScope(scope);
            return _this.createChildScopes();
          });
        }
        PolylinesParentModel.prototype.watch = function (scope, name, nameKey) {
          var _this = this;
          return scope.$watch(name, function (newValue, oldValue) {
            if (newValue !== oldValue) {
              _this[nameKey] = typeof newValue === 'function' ? newValue() : newValue;
              return _async.each(_.values(_this.plurals), function (model) {
                return model.scope[name] = _this[nameKey] === 'self' ? model : model[_this[nameKey]];
              }, function () {
              });
            }
          });
        };
        PolylinesParentModel.prototype.watchModels = function (scope) {
          var _this = this;
          return scope.$watch('models', function (newValue, oldValue) {
            if (!_.isEqual(newValue, oldValue)) {
              if (_this.doINeedToWipe(newValue)) {
                return _this.rebuildAll(scope, true, true);
              } else {
                return _this.createChildScopes(false);
              }
            }
          }, true);
        };
        PolylinesParentModel.prototype.doINeedToWipe = function (newValue) {
          var newValueIsEmpty;
          newValueIsEmpty = newValue != null ? newValue.length === 0 : true;
          return this.plurals.length > 0 && newValueIsEmpty;
        };
        PolylinesParentModel.prototype.rebuildAll = function (scope, doCreate, doDelete) {
          var _this = this;
          return _async.each(this.plurals.values(), function (model) {
            return model.destroy();
          }, function () {
            if (doDelete) {
              delete _this.plurals;
            }
            _this.plurals = new PropMap();
            if (doCreate) {
              return _this.createChildScopes();
            }
          });
        };
        PolylinesParentModel.prototype.watchDestroy = function (scope) {
          var _this = this;
          return scope.$on('$destroy', function () {
            return _this.rebuildAll(scope, false, true);
          });
        };
        PolylinesParentModel.prototype.watchOurScope = function (scope) {
          var _this = this;
          return _.each(this.scopePropNames, function (name) {
            var nameKey;
            nameKey = name + 'Key';
            _this[nameKey] = typeof scope[name] === 'function' ? scope[name]() : scope[name];
            return _this.watch(scope, name, nameKey);
          });
        };
        PolylinesParentModel.prototype.createChildScopes = function (isCreatingFromScratch) {
          if (isCreatingFromScratch == null) {
            isCreatingFromScratch = true;
          }
          if (angular.isUndefined(this.scope.models)) {
            this.$log.error('No models to create polylines from! I Need direct models!');
            return;
          }
          if (this.gMap != null) {
            if (this.scope.models != null) {
              this.watchIdKey(this.scope);
              if (isCreatingFromScratch) {
                return this.createAllNew(this.scope, false);
              } else {
                return this.pieceMeal(this.scope, false);
              }
            }
          }
        };
        PolylinesParentModel.prototype.watchIdKey = function (scope) {
          var _this = this;
          this.setIdKey(scope);
          return scope.$watch('idKey', function (newValue, oldValue) {
            if (newValue !== oldValue && newValue == null) {
              _this.idKey = newValue;
              return _this.rebuildAll(scope, true, true);
            }
          });
        };
        PolylinesParentModel.prototype.createAllNew = function (scope, isArray) {
          var _this = this;
          if (isArray == null) {
            isArray = false;
          }
          this.models = scope.models;
          if (this.firstTime) {
            this.watchModels(scope);
            this.watchDestroy(scope);
          }
          return _async.each(scope.models, function (model) {
            return _this.createChild(model, _this.gMap);
          }, function () {
            return _this.firstTime = false;
          });
        };
        PolylinesParentModel.prototype.pieceMeal = function (scope, isArray) {
          var _this = this;
          if (isArray == null) {
            isArray = true;
          }
          this.models = scope.models;
          if (scope != null && scope.models != null && scope.models.length > 0 && this.plurals.length > 0) {
            return this.figureOutState(this.idKey, scope, this.plurals, this.modelKeyComparison, function (state) {
              var payload;
              payload = state;
              return _async.each(payload.removals, function (id) {
                var child;
                child = _this.plurals[id];
                if (child != null) {
                  child.destroy();
                  return _this.plurals.remove(id);
                }
              }, function () {
                return _async.each(payload.adds, function (modelToAdd) {
                  return _this.createChild(modelToAdd, _this.gMap);
                }, function () {
                });
              });
            });
          } else {
            return this.rebuildAll(this.scope, true, true);
          }
        };
        PolylinesParentModel.prototype.createChild = function (model, gMap) {
          var child, childScope, _this = this;
          childScope = this.scope.$new(false);
          this.setChildScope(childScope, model);
          childScope.$watch('model', function (newValue, oldValue) {
            if (newValue !== oldValue) {
              return _this.setChildScope(childScope, newValue);
            }
          }, true);
          childScope['static'] = this.scope['static'];
          child = new PolylineChildModel(childScope, this.attrs, gMap, this.defaults, model);
          if (model[this.idKey] == null) {
            this.$log.error('Polyline model has no id to assign a child to. This is required for performance. Please assign id, or redirect id to a different key.');
            return;
          }
          this.plurals.put(model[this.idKey], child);
          return child;
        };
        PolylinesParentModel.prototype.setChildScope = function (childScope, model) {
          var _this = this;
          _.each(this.scopePropNames, function (name) {
            var nameKey, newValue;
            nameKey = name + 'Key';
            newValue = _this[nameKey] === 'self' ? model : model[_this[nameKey]];
            if (newValue !== childScope[name]) {
              return childScope[name] = newValue;
            }
          });
          return childScope.model = model;
        };
        PolylinesParentModel.prototype.modelKeyComparison = function (model1, model2) {
          return _.isEqual(this.evalModelHandle(model1, this.scope.path), this.evalModelHandle(model2, this.scope.path));
        };
        return PolylinesParentModel;
      }(ModelKey);
    }
  ]);
}.call(this));
/*
	Windows directive where many windows map to the models property
*/
(function () {
  var __bind = function (fn, me) {
      return function () {
        return fn.apply(me, arguments);
      };
    }, __hasProp = {}.hasOwnProperty, __extends = function (child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key))
          child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };
  angular.module('google-maps.directives.api.models.parent').factory('WindowsParentModel', [
    'IWindowParentModel',
    'ModelsWatcher',
    'PropMap',
    'WindowChildModel',
    'Linked',
    function (IWindowParentModel, ModelsWatcher, PropMap, WindowChildModel, Linked) {
      var WindowsParentModel;
      WindowsParentModel = function (_super) {
        __extends(WindowsParentModel, _super);
        WindowsParentModel.include(ModelsWatcher);
        function WindowsParentModel(scope, element, attrs, ctrls, $timeout, $compile, $http, $templateCache, $interpolate) {
          var self, _this = this;
          this.$interpolate = $interpolate;
          this.interpolateContent = __bind(this.interpolateContent, this);
          this.setChildScope = __bind(this.setChildScope, this);
          this.createWindow = __bind(this.createWindow, this);
          this.setContentKeys = __bind(this.setContentKeys, this);
          this.pieceMealWindows = __bind(this.pieceMealWindows, this);
          this.createAllNewWindows = __bind(this.createAllNewWindows, this);
          this.watchIdKey = __bind(this.watchIdKey, this);
          this.createChildScopesWindows = __bind(this.createChildScopesWindows, this);
          this.watchOurScope = __bind(this.watchOurScope, this);
          this.watchDestroy = __bind(this.watchDestroy, this);
          this.rebuildAll = __bind(this.rebuildAll, this);
          this.doINeedToWipe = __bind(this.doINeedToWipe, this);
          this.watchModels = __bind(this.watchModels, this);
          this.watch = __bind(this.watch, this);
          WindowsParentModel.__super__.constructor.call(this, scope, element, attrs, ctrls, $timeout, $compile, $http, $templateCache);
          self = this;
          this.windows = new PropMap();
          this.scopePropNames = [
            'show',
            'coords',
            'templateUrl',
            'templateParameter',
            'isIconVisibleOnClick',
            'closeClick'
          ];
          _.each(this.scopePropNames, function (name) {
            return _this[name + 'Key'] = void 0;
          });
          this.linked = new Linked(scope, element, attrs, ctrls);
          this.models = void 0;
          this.contentKeys = void 0;
          this.isIconVisibleOnClick = void 0;
          this.firstTime = true;
          this.$log.info(self);
          this.parentScope = void 0;
          this.$timeout(function () {
            _this.watchOurScope(scope);
            _this.doRebuildAll = _this.scope.doRebuildAll != null ? _this.scope.doRebuildAll : false;
            scope.$watch('doRebuildAll', function (newValue, oldValue) {
              if (newValue !== oldValue) {
                return _this.doRebuildAll = newValue;
              }
            });
            return _this.createChildScopesWindows();
          }, 50);
        }
        WindowsParentModel.prototype.watch = function (scope, name, nameKey) {
          var _this = this;
          return scope.$watch(name, function (newValue, oldValue) {
            if (newValue !== oldValue) {
              _this[nameKey] = typeof newValue === 'function' ? newValue() : newValue;
              return _async.each(_.values(_this.windows), function (model) {
                return model.scope[name] = _this[nameKey] === 'self' ? model : model[_this[nameKey]];
              }, function () {
              });
            }
          });
        };
        WindowsParentModel.prototype.watchModels = function (scope) {
          var _this = this;
          return scope.$watch('models', function (newValue, oldValue) {
            if (!_.isEqual(newValue, oldValue)) {
              if (_this.doRebuildAll || _this.doINeedToWipe(newValue)) {
                return _this.rebuildAll(scope, true, true);
              } else {
                return _this.createChildScopesWindows(false);
              }
            }
          });
        };
        WindowsParentModel.prototype.doINeedToWipe = function (newValue) {
          var newValueIsEmpty;
          newValueIsEmpty = newValue != null ? newValue.length === 0 : true;
          return this.windows.length > 0 && newValueIsEmpty;
        };
        WindowsParentModel.prototype.rebuildAll = function (scope, doCreate, doDelete) {
          var _this = this;
          return _async.each(this.windows.values(), function (model) {
            return model.destroy();
          }, function () {
            if (doDelete) {
              delete _this.windows;
            }
            _this.windows = new PropMap();
            if (doCreate) {
              return _this.createChildScopesWindows();
            }
          });
        };
        WindowsParentModel.prototype.watchDestroy = function (scope) {
          var _this = this;
          return scope.$on('$destroy', function () {
            return _this.rebuildAll(scope, false, true);
          });
        };
        WindowsParentModel.prototype.watchOurScope = function (scope) {
          var _this = this;
          return _.each(this.scopePropNames, function (name) {
            var nameKey;
            nameKey = name + 'Key';
            _this[nameKey] = typeof scope[name] === 'function' ? scope[name]() : scope[name];
            return _this.watch(scope, name, nameKey);
          });
        };
        WindowsParentModel.prototype.createChildScopesWindows = function (isCreatingFromScratch) {
          var markersScope, modelsNotDefined;
          if (isCreatingFromScratch == null) {
            isCreatingFromScratch = true;
          }
          /*
          being that we cannot tell the difference in Key String vs. a normal value string (TemplateUrl)
          we will assume that all scope values are string expressions either pointing to a key (propName) or using
          'self' to point the model as container/object of interest.
          
          This may force redundant information into the model, but this appears to be the most flexible approach.
          */
          this.isIconVisibleOnClick = true;
          if (angular.isDefined(this.linked.attrs.isiconvisibleonclick)) {
            this.isIconVisibleOnClick = this.linked.scope.isIconVisibleOnClick;
          }
          this.gMap = this.linked.ctrls[0].getMap();
          if (this.linked.ctrls[1] != null) {
            markersScope = this.linked.ctrls.length > 1 ? this.linked.ctrls[1].getMarkersScope() : void 0;
          }
          modelsNotDefined = angular.isUndefined(this.linked.scope.models);
          if (modelsNotDefined && (markersScope === void 0 || (markersScope.markerModels === void 0 || markersScope.models === void 0))) {
            this.$log.error('No models to create windows from! Need direct models or models derrived from markers!');
            return;
          }
          if (this.gMap != null) {
            if (this.linked.scope.models != null) {
              this.watchIdKey(this.linked.scope);
              if (isCreatingFromScratch) {
                return this.createAllNewWindows(this.linked.scope, false);
              } else {
                return this.pieceMealWindows(this.linked.scope, false);
              }
            } else {
              this.parentScope = markersScope;
              this.watchIdKey(this.parentScope);
              if (isCreatingFromScratch) {
                return this.createAllNewWindows(markersScope, true, 'markerModels', false);
              } else {
                return this.pieceMealWindows(markersScope, true, 'markerModels', false);
              }
            }
          }
        };
        WindowsParentModel.prototype.watchIdKey = function (scope) {
          var _this = this;
          this.setIdKey(scope);
          return scope.$watch('idKey', function (newValue, oldValue) {
            if (newValue !== oldValue && newValue == null) {
              _this.idKey = newValue;
              return _this.rebuildAll(scope, true, true);
            }
          });
        };
        WindowsParentModel.prototype.createAllNewWindows = function (scope, hasGMarker, modelsPropToIterate, isArray) {
          var _this = this;
          if (modelsPropToIterate == null) {
            modelsPropToIterate = 'models';
          }
          if (isArray == null) {
            isArray = false;
          }
          this.models = scope.models;
          if (this.firstTime) {
            this.watchModels(scope);
            this.watchDestroy(scope);
          }
          this.setContentKeys(scope.models);
          return _async.each(scope.models, function (model) {
            var gMarker;
            gMarker = hasGMarker ? scope[modelsPropToIterate][[model[_this.idKey]]].gMarker : void 0;
            return _this.createWindow(model, gMarker, _this.gMap);
          }, function () {
            return _this.firstTime = false;
          });
        };
        WindowsParentModel.prototype.pieceMealWindows = function (scope, hasGMarker, modelsPropToIterate, isArray) {
          var _this = this;
          if (modelsPropToIterate == null) {
            modelsPropToIterate = 'models';
          }
          if (isArray == null) {
            isArray = true;
          }
          this.models = scope.models;
          if (scope != null && scope.models != null && scope.models.length > 0 && this.windows.length > 0) {
            return this.figureOutState(this.idKey, scope, this.windows, this.modelKeyComparison, function (state) {
              var payload;
              payload = state;
              return _async.each(payload.removals, function (child) {
                if (child != null) {
                  if (child.destroy != null) {
                    child.destroy();
                  }
                  return _this.windows.remove(child.id);
                }
              }, function () {
                return _async.each(payload.adds, function (modelToAdd) {
                  var gMarker;
                  gMarker = scope[modelsPropToIterate][modelToAdd[_this.idKey]].gMarker;
                  return _this.createWindow(modelToAdd, gMarker, _this.gMap);
                }, function () {
                });
              });
            });
          } else {
            return this.rebuildAll(this.scope, true, true);
          }
        };
        WindowsParentModel.prototype.setContentKeys = function (models) {
          if (models.length > 0) {
            return this.contentKeys = Object.keys(models[0]);
          }
        };
        WindowsParentModel.prototype.createWindow = function (model, gMarker, gMap) {
          var child, childScope, fakeElement, opts, _this = this;
          childScope = this.linked.scope.$new(false);
          this.setChildScope(childScope, model);
          childScope.$watch('model', function (newValue, oldValue) {
            if (newValue !== oldValue) {
              return _this.setChildScope(childScope, newValue);
            }
          }, true);
          fakeElement = {
            html: function () {
              return _this.interpolateContent(_this.linked.element.html(), model);
            }
          };
          opts = this.createWindowOptions(gMarker, childScope, fakeElement.html(), this.DEFAULTS);
          child = new WindowChildModel(model, childScope, opts, this.isIconVisibleOnClick, gMap, gMarker, fakeElement, true, true);
          if (model[this.idKey] == null) {
            this.$log.error('Window model has no id to assign a child to. This is required for performance. Please assign id, or redirect id to a different key.');
            return;
          }
          this.windows.put(model[this.idKey], child);
          return child;
        };
        WindowsParentModel.prototype.setChildScope = function (childScope, model) {
          var _this = this;
          _.each(this.scopePropNames, function (name) {
            var nameKey, newValue;
            nameKey = name + 'Key';
            newValue = _this[nameKey] === 'self' ? model : model[_this[nameKey]];
            if (newValue !== childScope[name]) {
              return childScope[name] = newValue;
            }
          });
          return childScope.model = model;
        };
        WindowsParentModel.prototype.interpolateContent = function (content, model) {
          var exp, interpModel, key, _i, _len, _ref;
          if (this.contentKeys === void 0 || this.contentKeys.length === 0) {
            return;
          }
          exp = this.$interpolate(content);
          interpModel = {};
          _ref = this.contentKeys;
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            key = _ref[_i];
            interpModel[key] = model[key];
          }
          return exp(interpModel);
        };
        return WindowsParentModel;
      }(IWindowParentModel);
      return WindowsParentModel;
    }
  ]);
}.call(this));
/*
	- interface for all labels to derrive from
 	- to enforce a minimum set of requirements
 		- attributes
 			- content
 			- anchor
		- implementation needed on watches
*/
(function () {
  var __bind = function (fn, me) {
      return function () {
        return fn.apply(me, arguments);
      };
    }, __hasProp = {}.hasOwnProperty, __extends = function (child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key))
          child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };
  angular.module('google-maps.directives.api').factory('ILabel', [
    'BaseObject',
    'Logger',
    function (BaseObject, Logger) {
      var ILabel;
      return ILabel = function (_super) {
        __extends(ILabel, _super);
        function ILabel($timeout) {
          this.link = __bind(this.link, this);
          var self;
          self = this;
          this.restrict = 'ECMA';
          this.replace = true;
          this.template = void 0;
          this.require = void 0;
          this.transclude = true;
          this.priority = -100;
          this.scope = {
            labelContent: '=content',
            labelAnchor: '@anchor',
            labelClass: '@class',
            labelStyle: '=style'
          };
          this.$log = Logger;
          this.$timeout = $timeout;
        }
        ILabel.prototype.link = function (scope, element, attrs, ctrl) {
          throw new Exception('Not Implemented!!');
        };
        return ILabel;
      }(BaseObject);
    }
  ]);
}.call(this));
/*
	- interface for all markers to derrive from
 	- to enforce a minimum set of requirements
 		- attributes
 			- coords
 			- icon
		- implementation needed on watches
*/
(function () {
  var __bind = function (fn, me) {
      return function () {
        return fn.apply(me, arguments);
      };
    }, __hasProp = {}.hasOwnProperty, __extends = function (child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key))
          child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };
  angular.module('google-maps.directives.api').factory('IMarker', [
    'Logger',
    'BaseObject',
    function (Logger, BaseObject) {
      var IMarker;
      return IMarker = function (_super) {
        __extends(IMarker, _super);
        function IMarker($timeout) {
          this.link = __bind(this.link, this);
          var self;
          self = this;
          this.$log = Logger;
          this.$timeout = $timeout;
          this.restrict = 'ECMA';
          this.require = '^googleMap';
          this.priority = -1;
          this.transclude = true;
          this.replace = true;
          this.scope = {
            coords: '=coords',
            icon: '=icon',
            click: '&click',
            options: '=options',
            events: '=events',
            fit: '=fit'
          };
        }
        IMarker.prototype.controller = [
          '$scope',
          '$element',
          function ($scope, $element) {
            throw new Exception('Not Implemented!!');
          }
        ];
        IMarker.prototype.link = function (scope, element, attrs, ctrl) {
          throw new Exception('Not implemented!!');
        };
        return IMarker;
      }(BaseObject);
    }
  ]);
}.call(this));
(function () {
  var __hasProp = {}.hasOwnProperty, __extends = function (child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key))
          child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };
  angular.module('google-maps.directives.api').factory('IPolyline', [
    'GmapUtil',
    'BaseObject',
    'Logger',
    function (GmapUtil, BaseObject, Logger) {
      var IPolyline;
      return IPolyline = function (_super) {
        __extends(IPolyline, _super);
        IPolyline.include(GmapUtil);
        function IPolyline() {
          var self;
          self = this;
        }
        IPolyline.prototype.restrict = 'ECA';
        IPolyline.prototype.replace = true;
        IPolyline.prototype.require = '^googleMap';
        IPolyline.prototype.scope = {
          path: '=',
          stroke: '=',
          clickable: '=',
          draggable: '=',
          editable: '=',
          geodesic: '=',
          icons: '=',
          visible: '=',
          'static': '=',
          fit: '='
        };
        IPolyline.prototype.DEFAULTS = {};
        IPolyline.prototype.$log = Logger;
        return IPolyline;
      }(BaseObject);
    }
  ]);
}.call(this));
/*
	- interface directive for all window(s) to derrive from
*/
(function () {
  var __bind = function (fn, me) {
      return function () {
        return fn.apply(me, arguments);
      };
    }, __hasProp = {}.hasOwnProperty, __extends = function (child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key))
          child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };
  angular.module('google-maps.directives.api').factory('IWindow', [
    'BaseObject',
    'ChildEvents',
    'Logger',
    function (BaseObject, ChildEvents, Logger) {
      var IWindow;
      return IWindow = function (_super) {
        __extends(IWindow, _super);
        IWindow.include(ChildEvents);
        function IWindow($timeout, $compile, $http, $templateCache) {
          var self;
          this.$timeout = $timeout;
          this.$compile = $compile;
          this.$http = $http;
          this.$templateCache = $templateCache;
          this.link = __bind(this.link, this);
          self = this;
          this.restrict = 'ECMA';
          this.template = void 0;
          this.transclude = true;
          this.priority = -100;
          this.require = void 0;
          this.replace = true;
          this.scope = {
            coords: '=coords',
            show: '=show',
            templateUrl: '=templateurl',
            templateParameter: '=templateparameter',
            isIconVisibleOnClick: '=isiconvisibleonclick',
            closeClick: '&closeclick',
            options: '=options'
          };
          this.$log = Logger;
        }
        IWindow.prototype.link = function (scope, element, attrs, ctrls) {
          throw new Exception('Not Implemented!!');
        };
        return IWindow;
      }(BaseObject);
    }
  ]);
}.call(this));
(function () {
  var __bind = function (fn, me) {
      return function () {
        return fn.apply(me, arguments);
      };
    }, __hasProp = {}.hasOwnProperty, __extends = function (child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key))
          child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };
  angular.module('google-maps.directives.api').factory('Map', [
    '$timeout',
    'Logger',
    'GmapUtil',
    'BaseObject',
    function ($timeout, Logger, GmapUtil, BaseObject) {
      'use strict';
      var $log, DEFAULTS, Map;
      $log = Logger;
      DEFAULTS = { mapTypeId: google.maps.MapTypeId.ROADMAP };
      return Map = function (_super) {
        __extends(Map, _super);
        Map.include(GmapUtil);
        function Map() {
          this.link = __bind(this.link, this);
          var self;
          self = this;
        }
        Map.prototype.restrict = 'ECMA';
        Map.prototype.transclude = true;
        Map.prototype.replace = false;
        Map.prototype.template = '<div class="angular-google-map"><div class="angular-google-map-container"></div><div ng-transclude style="display: none"></div></div>';
        Map.prototype.scope = {
          center: '=center',
          zoom: '=zoom',
          dragging: '=dragging',
          control: '=',
          windows: '=windows',
          options: '=options',
          events: '=events',
          styles: '=styles',
          bounds: '=bounds'
        };
        Map.prototype.controller = [
          '$scope',
          function ($scope) {
            return {
              getMap: function () {
                return $scope.map;
              }
            };
          }
        ];
        /*
        @param scope
        @param element
        @param attrs
        */
        Map.prototype.link = function (scope, element, attrs) {
          var dragging, el, eventName, getEventHandler, opts, settingCenterFromScope, type, _m, _this = this;
          if (!this.validateCoords(scope.center)) {
            $log.error('angular-google-maps: could not find a valid center property');
            return;
          }
          if (!angular.isDefined(scope.zoom)) {
            $log.error('angular-google-maps: map zoom property not set');
            return;
          }
          el = angular.element(element);
          el.addClass('angular-google-map');
          opts = { options: {} };
          if (attrs.options) {
            opts.options = scope.options;
          }
          if (attrs.styles) {
            opts.styles = scope.styles;
          }
          if (attrs.type) {
            type = attrs.type.toUpperCase();
            if (google.maps.MapTypeId.hasOwnProperty(type)) {
              opts.mapTypeId = google.maps.MapTypeId[attrs.type.toUpperCase()];
            } else {
              $log.error('angular-google-maps: invalid map type "' + attrs.type + '"');
            }
          }
          _m = new google.maps.Map(el.find('div')[1], angular.extend({}, DEFAULTS, opts, {
            center: this.getCoords(scope.center),
            draggable: this.isTrue(attrs.draggable),
            zoom: scope.zoom,
            bounds: scope.bounds
          }));
          dragging = false;
          google.maps.event.addListener(_m, 'dragstart', function () {
            dragging = true;
            return _.defer(function () {
              return scope.$apply(function (s) {
                if (s.dragging != null) {
                  return s.dragging = dragging;
                }
              });
            });
          });
          google.maps.event.addListener(_m, 'dragend', function () {
            dragging = false;
            return _.defer(function () {
              return scope.$apply(function (s) {
                if (s.dragging != null) {
                  return s.dragging = dragging;
                }
              });
            });
          });
          google.maps.event.addListener(_m, 'drag', function () {
            var c;
            c = _m.center;
            return _.defer(function () {
              return scope.$apply(function (s) {
                if (angular.isDefined(s.center.type)) {
                  s.center.coordinates[1] = c.lat();
                  return s.center.coordinates[0] = c.lng();
                } else {
                  s.center.latitude = c.lat();
                  return s.center.longitude = c.lng();
                }
              });
            });
          });
          google.maps.event.addListener(_m, 'zoom_changed', function () {
            if (scope.zoom !== _m.zoom) {
              return _.defer(function () {
                return scope.$apply(function (s) {
                  return s.zoom = _m.zoom;
                });
              });
            }
          });
          settingCenterFromScope = false;
          google.maps.event.addListener(_m, 'center_changed', function () {
            var c;
            c = _m.center;
            if (settingCenterFromScope) {
              return;
            }
            return _.defer(function () {
              return scope.$apply(function (s) {
                if (!_m.dragging) {
                  if (angular.isDefined(s.center.type)) {
                    if (s.center.coordinates[1] !== c.lat()) {
                      s.center.coordinates[1] = c.lat();
                    }
                    if (s.center.coordinates[0] !== c.lng()) {
                      return s.center.coordinates[0] = c.lng();
                    }
                  } else {
                    if (s.center.latitude !== c.lat()) {
                      s.center.latitude = c.lat();
                    }
                    if (s.center.longitude !== c.lng()) {
                      return s.center.longitude = c.lng();
                    }
                  }
                }
              });
            });
          });
          google.maps.event.addListener(_m, 'idle', function () {
            var b, ne, sw;
            b = _m.getBounds();
            ne = b.getNorthEast();
            sw = b.getSouthWest();
            return _.defer(function () {
              return scope.$apply(function (s) {
                if (s.bounds !== null && s.bounds !== undefined && s.bounds !== void 0) {
                  s.bounds.northeast = {
                    latitude: ne.lat(),
                    longitude: ne.lng()
                  };
                  return s.bounds.southwest = {
                    latitude: sw.lat(),
                    longitude: sw.lng()
                  };
                }
              });
            });
          });
          if (angular.isDefined(scope.events) && scope.events !== null && angular.isObject(scope.events)) {
            getEventHandler = function (eventName) {
              return function () {
                return scope.events[eventName].apply(scope, [
                  _m,
                  eventName,
                  arguments
                ]);
              };
            };
            for (eventName in scope.events) {
              if (scope.events.hasOwnProperty(eventName) && angular.isFunction(scope.events[eventName])) {
                google.maps.event.addListener(_m, eventName, getEventHandler(eventName));
              }
            }
          }
          scope.map = _m;
          if (attrs.control != null && scope.control != null) {
            scope.control.refresh = function (maybeCoords) {
              var coords;
              if (_m == null) {
                return;
              }
              google.maps.event.trigger(_m, 'resize');
              if ((maybeCoords != null ? maybeCoords.latitude : void 0) != null && (maybeCoords != null ? maybeCoords.latitude : void 0) != null) {
                coords = _this.getCoords(maybeCoords);
                if (_this.isTrue(attrs.pan)) {
                  return _m.panTo(coords);
                } else {
                  return _m.setCenter(coords);
                }
              }
            };
            /*
            I am sure you all will love this. You want the instance here you go.. BOOM!
            */
            scope.control.getGMap = function () {
              return _m;
            };
          }
          scope.$watch('center', function (newValue, oldValue) {
            var coords;
            coords = _this.getCoords(newValue);
            if (coords.lat() === _m.center.lat() && coords.lng() === _m.center.lng()) {
              return;
            }
            settingCenterFromScope = true;
            if (!dragging) {
              if (!_this.validateCoords(newValue)) {
                $log.error('Invalid center for newValue: ' + JSON.stringify(newValue));
              }
              if (_this.isTrue(attrs.pan) && scope.zoom === _m.zoom) {
                _m.panTo(coords);
              } else {
                _m.setCenter(coords);
              }
            }
            return settingCenterFromScope = false;
          }, true);
          scope.$watch('zoom', function (newValue, oldValue) {
            if (newValue === _m.zoom) {
              return;
            }
            return _.defer(function () {
              return _m.setZoom(newValue);
            });
          });
          scope.$watch('bounds', function (newValue, oldValue) {
            var bounds, ne, sw;
            if (newValue === oldValue) {
              return;
            }
            if (newValue.northeast.latitude == null || newValue.northeast.longitude == null || newValue.southwest.latitude == null || newValue.southwest.longitude == null) {
              $log.error('Invalid map bounds for new value: ' + JSON.stringify(newValue));
              return;
            }
            ne = new google.maps.LatLng(newValue.northeast.latitude, newValue.northeast.longitude);
            sw = new google.maps.LatLng(newValue.southwest.latitude, newValue.southwest.longitude);
            bounds = new google.maps.LatLngBounds(sw, ne);
            return _m.fitBounds(bounds);
          });
          scope.$watch('options', function (newValue, oldValue) {
            if (!_.isEqual(newValue, oldValue)) {
              opts.options = newValue;
              if (_m != null) {
                return _m.setOptions(opts);
              }
            }
          }, true);
          return scope.$watch('styles', function (newValue, oldValue) {
            if (!_.isEqual(newValue, oldValue)) {
              opts.styles = newValue;
              if (_m != null) {
                return _m.setOptions(opts);
              }
            }
          }, true);
        };
        return Map;
      }(BaseObject);
    }
  ]);
}.call(this));
(function () {
  var __bind = function (fn, me) {
      return function () {
        return fn.apply(me, arguments);
      };
    }, __hasProp = {}.hasOwnProperty, __extends = function (child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key))
          child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };
  angular.module('google-maps.directives.api').factory('Marker', [
    'IMarker',
    'MarkerParentModel',
    'MarkerManager',
    function (IMarker, MarkerParentModel, MarkerManager) {
      var Marker;
      return Marker = function (_super) {
        __extends(Marker, _super);
        function Marker($timeout) {
          this.link = __bind(this.link, this);
          var self;
          Marker.__super__.constructor.call(this, $timeout);
          self = this;
          this.template = '<span class="angular-google-map-marker" ng-transclude></span>';
          this.$log.info(this);
        }
        Marker.prototype.controller = [
          '$scope',
          '$element',
          function ($scope, $element) {
            return {
              getMarkerScope: function () {
                return $scope;
              }
            };
          }
        ];
        Marker.prototype.link = function (scope, element, attrs, ctrl) {
          var doFit;
          if (scope.fit) {
            doFit = true;
          }
          if (!this.gMarkerManager) {
            this.gMarkerManager = new MarkerManager(ctrl.getMap());
          }
          return new MarkerParentModel(scope, element, attrs, ctrl, this.$timeout, this.gMarkerManager, doFit);
        };
        return Marker;
      }(IMarker);
    }
  ]);
}.call(this));
(function () {
  var __bind = function (fn, me) {
      return function () {
        return fn.apply(me, arguments);
      };
    }, __hasProp = {}.hasOwnProperty, __extends = function (child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key))
          child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };
  angular.module('google-maps.directives.api').factory('Markers', [
    'IMarker',
    'MarkersParentModel',
    function (IMarker, MarkersParentModel) {
      var Markers;
      return Markers = function (_super) {
        __extends(Markers, _super);
        function Markers($timeout) {
          this.link = __bind(this.link, this);
          var self;
          Markers.__super__.constructor.call(this, $timeout);
          this.template = '<span class="angular-google-map-markers" ng-transclude></span>';
          this.scope.idKey = '=idkey';
          this.scope.doRebuildAll = '=dorebuildall';
          this.scope.models = '=models';
          this.scope.doCluster = '=docluster';
          this.scope.clusterOptions = '=clusteroptions';
          this.scope.clusterEvents = '=clusterevents';
          this.scope.labelContent = '=labelcontent';
          this.scope.labelAnchor = '@labelanchor';
          this.scope.labelClass = '@labelclass';
          this.$timeout = $timeout;
          self = this;
          this.$log.info(this);
        }
        Markers.prototype.controller = [
          '$scope',
          '$element',
          function ($scope, $element) {
            return {
              getMarkersScope: function () {
                return $scope;
              }
            };
          }
        ];
        Markers.prototype.link = function (scope, element, attrs, ctrl) {
          return new MarkersParentModel(scope, element, attrs, ctrl, this.$timeout);
        };
        return Markers;
      }(IMarker);
    }
  ]);
}.call(this));
(function () {
  var __bind = function (fn, me) {
      return function () {
        return fn.apply(me, arguments);
      };
    }, __hasProp = {}.hasOwnProperty, __extends = function (child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key))
          child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };
  angular.module('google-maps.directives.api').factory('Polyline', [
    'IPolyline',
    '$timeout',
    'array-sync',
    'PolylineChildModel',
    function (IPolyline, $timeout, arraySync, PolylineChildModel) {
      var Polyline, _ref;
      return Polyline = function (_super) {
        __extends(Polyline, _super);
        function Polyline() {
          this.link = __bind(this.link, this);
          _ref = Polyline.__super__.constructor.apply(this, arguments);
          return _ref;
        }
        Polyline.prototype.link = function (scope, element, attrs, mapCtrl) {
          var _this = this;
          if (angular.isUndefined(scope.path) || scope.path === null || !this.validatePath(scope.path)) {
            this.$log.error('polyline: no valid path attribute found');
            return;
          }
          return $timeout(function () {
            return new PolylineChildModel(scope, attrs, mapCtrl.getMap(), _this.DEFAULTS);
          });
        };
        return Polyline;
      }(IPolyline);
    }
  ]);
}.call(this));
(function () {
  var __bind = function (fn, me) {
      return function () {
        return fn.apply(me, arguments);
      };
    }, __hasProp = {}.hasOwnProperty, __extends = function (child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key))
          child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };
  angular.module('google-maps.directives.api').factory('Polylines', [
    'IPolyline',
    '$timeout',
    'array-sync',
    'PolylinesParentModel',
    function (IPolyline, $timeout, arraySync, PolylinesParentModel) {
      var Polylines;
      return Polylines = function (_super) {
        __extends(Polylines, _super);
        function Polylines() {
          this.link = __bind(this.link, this);
          Polylines.__super__.constructor.call(this);
          this.scope.idKey = '=idkey';
          this.scope.models = '=models';
          this.$log.info(this);
        }
        Polylines.prototype.link = function (scope, element, attrs, mapCtrl) {
          var _this = this;
          if (angular.isUndefined(scope.path) || scope.path === null) {
            this.$log.error('polylines: no valid path attribute found');
            return;
          }
          if (!scope.models) {
            this.$log.error('polylines: no models found to create from');
            return;
          }
          return $timeout(function () {
            return new PolylinesParentModel(scope, element, attrs, mapCtrl.getMap(), _this.DEFAULTS);
          });
        };
        return Polylines;
      }(IPolyline);
    }
  ]);
}.call(this));
(function () {
  var __bind = function (fn, me) {
      return function () {
        return fn.apply(me, arguments);
      };
    }, __hasProp = {}.hasOwnProperty, __extends = function (child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key))
          child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };
  angular.module('google-maps.directives.api').factory('Window', [
    'IWindow',
    'GmapUtil',
    'WindowChildModel',
    function (IWindow, GmapUtil, WindowChildModel) {
      var Window;
      return Window = function (_super) {
        __extends(Window, _super);
        Window.include(GmapUtil);
        function Window($timeout, $compile, $http, $templateCache) {
          this.link = __bind(this.link, this);
          var self;
          Window.__super__.constructor.call(this, $timeout, $compile, $http, $templateCache);
          self = this;
          this.require = [
            '^googleMap',
            '^?marker'
          ];
          this.template = '<span class="angular-google-maps-window" ng-transclude></span>';
          this.$log.info(self);
        }
        Window.prototype.link = function (scope, element, attrs, ctrls) {
          var _this = this;
          return this.$timeout(function () {
            var defaults, hasScopeCoords, isIconVisibleOnClick, mapCtrl, markerCtrl, markerScope, opts, window;
            isIconVisibleOnClick = true;
            if (angular.isDefined(attrs.isiconvisibleonclick)) {
              isIconVisibleOnClick = scope.isIconVisibleOnClick;
            }
            mapCtrl = ctrls[0].getMap();
            markerCtrl = ctrls.length > 1 && ctrls[1] != null ? ctrls[1].getMarkerScope().gMarker : void 0;
            defaults = scope.options != null ? scope.options : {};
            hasScopeCoords = scope != null && _this.validateCoords(scope.coords);
            opts = hasScopeCoords ? _this.createWindowOptions(markerCtrl, scope, element.html(), defaults) : defaults;
            if (mapCtrl != null) {
              window = new WindowChildModel({}, scope, opts, isIconVisibleOnClick, mapCtrl, markerCtrl, element);
            }
            scope.$on('$destroy', function () {
              return window.destroy();
            });
            if (ctrls[1] != null) {
              markerScope = ctrls[1].getMarkerScope();
              markerScope.$watch('coords', function (newValue, oldValue) {
                if (!_this.validateCoords(newValue)) {
                  return window.hideWindow();
                }
                if (!angular.equals(newValue, oldValue)) {
                  return window.getLatestPosition();
                }
              }, true);
            }
            if (_this.onChildCreation != null && window != null) {
              return _this.onChildCreation(window);
            }
          }, GmapUtil.defaultDelay + 25);
        };
        return Window;
      }(IWindow);
    }
  ]);
}.call(this));
(function () {
  var __bind = function (fn, me) {
      return function () {
        return fn.apply(me, arguments);
      };
    }, __hasProp = {}.hasOwnProperty, __extends = function (child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key))
          child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };
  angular.module('google-maps.directives.api').factory('Windows', [
    'IWindow',
    'WindowsParentModel',
    function (IWindow, WindowsParentModel) {
      /*
      Windows directive where many windows map to the models property
      */
      var Windows;
      return Windows = function (_super) {
        __extends(Windows, _super);
        function Windows($timeout, $compile, $http, $templateCache, $interpolate) {
          this.link = __bind(this.link, this);
          var self;
          Windows.__super__.constructor.call(this, $timeout, $compile, $http, $templateCache);
          self = this;
          this.$interpolate = $interpolate;
          this.require = [
            '^googleMap',
            '^?markers'
          ];
          this.template = '<span class="angular-google-maps-windows" ng-transclude></span>';
          this.scope.idKey = '=idkey';
          this.scope.doRebuildAll = '=dorebuildall';
          this.scope.models = '=models';
          this.$log.info(this);
        }
        Windows.prototype.link = function (scope, element, attrs, ctrls) {
          return new WindowsParentModel(scope, element, attrs, ctrls, this.$timeout, this.$compile, this.$http, this.$templateCache, this.$interpolate);
        };
        return Windows;
      }(IWindow);
    }
  ]);
}.call(this));
/*
!
The MIT License

Copyright (c) 2010-2013 Google, Inc. http://angularjs.org

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

angular-google-maps
https://github.com/nlaplante/angular-google-maps

@authors
Nicolas Laplante - https://plus.google.com/108189012221374960701
Nicholas McCready - https://twitter.com/nmccready
Nick Baugh - https://github.com/niftylettuce
*/
(function () {
  angular.module('google-maps').directive('googleMap', [
    'Map',
    function (Map) {
      return new Map();
    }
  ]);
}.call(this));
/*
!
The MIT License

Copyright (c) 2010-2013 Google, Inc. http://angularjs.org

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

angular-google-maps
https://github.com/nlaplante/angular-google-maps

@authors
Nicolas Laplante - https://plus.google.com/108189012221374960701
Nicholas McCready - https://twitter.com/nmccready
*/
/*
Map marker directive

This directive is used to create a marker on an existing map.
This directive creates a new scope.

{attribute coords required}  object containing latitude and longitude properties
{attribute icon optional}    string url to image used for marker icon
{attribute animate optional} if set to false, the marker won't be animated (on by default)
*/
(function () {
  angular.module('google-maps').directive('marker', [
    '$timeout',
    'Marker',
    function ($timeout, Marker) {
      return new Marker($timeout);
    }
  ]);
}.call(this));
/*
!
The MIT License

Copyright (c) 2010-2013 Google, Inc. http://angularjs.org

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

angular-google-maps
https://github.com/nlaplante/angular-google-maps

@authors
Nicolas Laplante - https://plus.google.com/108189012221374960701
Nicholas McCready - https://twitter.com/nmccready
*/
/*
Map marker directive

This directive is used to create a marker on an existing map.
This directive creates a new scope.

{attribute coords required}  object containing latitude and longitude properties
{attribute icon optional}    string url to image used for marker icon
{attribute animate optional} if set to false, the marker won't be animated (on by default)
*/
(function () {
  angular.module('google-maps').directive('markers', [
    '$timeout',
    'Markers',
    function ($timeout, Markers) {
      return new Markers($timeout);
    }
  ]);
}.call(this));
/*
!
The MIT License

Copyright (c) 2010-2013 Google, Inc. http://angularjs.org

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

angular-google-maps
https://github.com/nlaplante/angular-google-maps

@authors Bruno Queiroz, creativelikeadog@gmail.com
*/
/*
Marker label directive

This directive is used to create a marker label on an existing map.

{attribute content required}  content of the label
{attribute anchor required}    string that contains the x and y point position of the label
{attribute class optional} class to DOM object
{attribute style optional} style for the label
*/
/*
Basic Directive api for a label. Basic in the sense that this directive contains 1:1 on scope and model.
Thus there will be one html element per marker within the directive.
*/
(function () {
  var __bind = function (fn, me) {
      return function () {
        return fn.apply(me, arguments);
      };
    }, __hasProp = {}.hasOwnProperty, __extends = function (child, parent) {
      for (var key in parent) {
        if (__hasProp.call(parent, key))
          child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    };
  angular.module('google-maps').directive('markerLabel', [
    '$timeout',
    'ILabel',
    'MarkerLabelChildModel',
    'GmapUtil',
    function ($timeout, ILabel, MarkerLabelChildModel, GmapUtil) {
      var Label;
      Label = function (_super) {
        __extends(Label, _super);
        function Label($timeout) {
          this.link = __bind(this.link, this);
          var self;
          Label.__super__.constructor.call(this, $timeout);
          self = this;
          this.require = '^marker';
          this.template = '<span class="angular-google-maps-marker-label" ng-transclude></span>';
          this.$log.info(this);
        }
        Label.prototype.link = function (scope, element, attrs, ctrl) {
          var _this = this;
          return this.$timeout(function () {
            var label, markerCtrl;
            markerCtrl = ctrl.getMarkerScope().gMarker;
            if (markerCtrl != null) {
              label = new MarkerLabelChildModel(markerCtrl, scope);
            }
            return scope.$on('$destroy', function () {
              return label.destroy();
            });
          }, GmapUtil.defaultDelay + 25);
        };
        return Label;
      }(ILabel);
      return new Label($timeout);
    }
  ]);
}.call(this));
/*
!
The MIT License

Copyright (c) 2010-2013 Google, Inc. http://angularjs.org

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

angular-google-maps
https://github.com/nlaplante/angular-google-maps

@authors
Nicolas Laplante - https://plus.google.com/108189012221374960701
Nicholas McCready - https://twitter.com/nmccready
Rick Huizinga - https://plus.google.com/+RickHuizinga
*/
(function () {
  angular.module('google-maps').directive('polygon', [
    '$log',
    '$timeout',
    'array-sync',
    'GmapUtil',
    function ($log, $timeout, arraySync, GmapUtil) {
      /*
      Check if a value is true
      */
      var DEFAULTS, isTrue;
      isTrue = function (val) {
        return angular.isDefined(val) && val !== null && val === true || val === '1' || val === 'y' || val === 'true';
      };
      'use strict';
      DEFAULTS = {};
      return {
        restrict: 'ECA',
        replace: true,
        require: '^googleMap',
        scope: {
          path: '=path',
          stroke: '=stroke',
          clickable: '=',
          draggable: '=',
          editable: '=',
          geodesic: '=',
          fill: '=',
          icons: '=icons',
          visible: '=',
          'static': '=',
          events: '=',
          zIndex: '=zindex',
          fit: '='
        },
        link: function (scope, element, attrs, mapCtrl) {
          if (angular.isUndefined(scope.path) || scope.path === null || !GmapUtil.validatePath(scope.path)) {
            $log.error('polygon: no valid path attribute found');
            return;
          }
          return $timeout(function () {
            var arraySyncer, buildOpts, eventName, getEventHandler, map, pathPoints, polygon;
            buildOpts = function (pathPoints) {
              var opts;
              opts = angular.extend({}, DEFAULTS, {
                map: map,
                path: pathPoints,
                strokeColor: scope.stroke && scope.stroke.color,
                strokeOpacity: scope.stroke && scope.stroke.opacity,
                strokeWeight: scope.stroke && scope.stroke.weight,
                fillColor: scope.fill && scope.fill.color,
                fillOpacity: scope.fill && scope.fill.opacity
              });
              angular.forEach({
                clickable: true,
                draggable: false,
                editable: false,
                geodesic: false,
                visible: true,
                'static': false,
                fit: false,
                zIndex: 0
              }, function (defaultValue, key) {
                if (angular.isUndefined(scope[key]) || scope[key] === null) {
                  return opts[key] = defaultValue;
                } else {
                  return opts[key] = scope[key];
                }
              });
              if (opts['static']) {
                opts.editable = false;
              }
              return opts;
            };
            map = mapCtrl.getMap();
            pathPoints = GmapUtil.convertPathPoints(scope.path);
            polygon = new google.maps.Polygon(buildOpts(pathPoints));
            if (scope.fit) {
              GmapUtil.extendMapBounds(map, pathPoints);
            }
            if (!scope['static'] && angular.isDefined(scope.editable)) {
              scope.$watch('editable', function (newValue, oldValue) {
                if (newValue !== oldValue) {
                  return polygon.setEditable(newValue);
                }
              });
            }
            if (angular.isDefined(scope.draggable)) {
              scope.$watch('draggable', function (newValue, oldValue) {
                if (newValue !== oldValue) {
                  return polygon.setDraggable(newValue);
                }
              });
            }
            if (angular.isDefined(scope.visible)) {
              scope.$watch('visible', function (newValue, oldValue) {
                if (newValue !== oldValue) {
                  return polygon.setVisible(newValue);
                }
              });
            }
            if (angular.isDefined(scope.geodesic)) {
              scope.$watch('geodesic', function (newValue, oldValue) {
                if (newValue !== oldValue) {
                  return polygon.setOptions(buildOpts(polygon.getPath()));
                }
              });
            }
            if (angular.isDefined(scope.stroke) && angular.isDefined(scope.stroke.opacity)) {
              scope.$watch('stroke.opacity', function (newValue, oldValue) {
                return polygon.setOptions(buildOpts(polygon.getPath()));
              });
            }
            if (angular.isDefined(scope.stroke) && angular.isDefined(scope.stroke.weight)) {
              scope.$watch('stroke.weight', function (newValue, oldValue) {
                if (newValue !== oldValue) {
                  return polygon.setOptions(buildOpts(polygon.getPath()));
                }
              });
            }
            if (angular.isDefined(scope.stroke) && angular.isDefined(scope.stroke.color)) {
              scope.$watch('stroke.color', function (newValue, oldValue) {
                if (newValue !== oldValue) {
                  return polygon.setOptions(buildOpts(polygon.getPath()));
                }
              });
            }
            if (angular.isDefined(scope.fill) && angular.isDefined(scope.fill.color)) {
              scope.$watch('fill.color', function (newValue, oldValue) {
                if (newValue !== oldValue) {
                  return polygon.setOptions(buildOpts(polygon.getPath()));
                }
              });
            }
            if (angular.isDefined(scope.fill) && angular.isDefined(scope.fill.opacity)) {
              scope.$watch('fill.opacity', function (newValue, oldValue) {
                if (newValue !== oldValue) {
                  return polygon.setOptions(buildOpts(polygon.getPath()));
                }
              });
            }
            if (angular.isDefined(scope.zIndex)) {
              scope.$watch('zIndex', function (newValue, oldValue) {
                if (newValue !== oldValue) {
                  return polygon.setOptions(buildOpts(polygon.getPath()));
                }
              });
            }
            if (angular.isDefined(scope.events) && scope.events !== null && angular.isObject(scope.events)) {
              getEventHandler = function (eventName) {
                return function () {
                  return scope.events[eventName].apply(scope, [
                    polygon,
                    eventName,
                    arguments
                  ]);
                };
              };
              for (eventName in scope.events) {
                if (scope.events.hasOwnProperty(eventName) && angular.isFunction(scope.events[eventName])) {
                  polygon.addListener(eventName, getEventHandler(eventName));
                }
              }
            }
            arraySyncer = arraySync(polygon.getPath(), scope, 'path', function (pathPoints) {
              if (scope.fit) {
                return GmapUtil.extendMapBounds(map, pathPoints);
              }
            });
            return scope.$on('$destroy', function () {
              polygon.setMap(null);
              if (arraySyncer) {
                arraySyncer();
                return arraySyncer = null;
              }
            });
          });
        }
      };
    }
  ]);
}.call(this));
/*
!
The MIT License

Copyright (c) 2010-2013 Google, Inc. http://angularjs.org

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

@authors
Julian Popescu - https://github.com/jpopesculian
Rick Huizinga - https://plus.google.com/+RickHuizinga
*/
(function () {
  angular.module('google-maps').directive('circle', [
    '$log',
    '$timeout',
    'GmapUtil',
    'EventsHelper',
    function ($log, $timeout, GmapUtil, EventsHelper) {
      'use strict';
      var DEFAULTS;
      DEFAULTS = {};
      return {
        restrict: 'ECA',
        replace: true,
        require: '^googleMap',
        scope: {
          center: '=center',
          radius: '=radius',
          stroke: '=stroke',
          fill: '=fill',
          clickable: '=',
          draggable: '=',
          editable: '=',
          geodesic: '=',
          icons: '=icons',
          visible: '=',
          events: '='
        },
        link: function (scope, element, attrs, mapCtrl) {
          return $timeout(function () {
            var buildOpts, circle, map;
            buildOpts = function () {
              var opts;
              if (!GmapUtil.validateCoords(scope.center)) {
                $log.error('circle: no valid center attribute found');
                return;
              }
              opts = angular.extend({}, DEFAULTS, {
                map: map,
                center: GmapUtil.getCoords(scope.center),
                radius: scope.radius,
                strokeColor: scope.stroke && scope.stroke.color,
                strokeOpacity: scope.stroke && scope.stroke.opacity,
                strokeWeight: scope.stroke && scope.stroke.weight,
                fillColor: scope.fill && scope.fill.color,
                fillOpacity: scope.fill && scope.fill.opacity
              });
              angular.forEach({
                clickable: true,
                draggable: false,
                editable: false,
                geodesic: false,
                visible: true
              }, function (defaultValue, key) {
                if (angular.isUndefined(scope[key]) || scope[key] === null) {
                  return opts[key] = defaultValue;
                } else {
                  return opts[key] = scope[key];
                }
              });
              return opts;
            };
            map = mapCtrl.getMap();
            circle = new google.maps.Circle(buildOpts());
            scope.$watchCollection('center', function (newVals, oldVals) {
              if (newVals !== oldVals) {
                return circle.setOptions(buildOpts());
              }
            });
            scope.$watchCollection('stroke', function (newVals, oldVals) {
              if (newVals !== oldVals) {
                return circle.setOptions(buildOpts());
              }
            });
            scope.$watchCollection('fill', function (newVals, oldVals) {
              if (newVals !== oldVals) {
                return circle.setOptions(buildOpts());
              }
            });
            scope.$watch('radius', function (newVal, oldVal) {
              if (newVal !== oldVal) {
                return circle.setOptions(buildOpts());
              }
            });
            scope.$watch('clickable', function (newVal, oldVal) {
              if (newVal !== oldVal) {
                return circle.setOptions(buildOpts());
              }
            });
            scope.$watch('editable', function (newVal, oldVal) {
              if (newVal !== oldVal) {
                return circle.setOptions(buildOpts());
              }
            });
            scope.$watch('draggable', function (newVal, oldVal) {
              if (newVal !== oldVal) {
                return circle.setOptions(buildOpts());
              }
            });
            scope.$watch('visible', function (newVal, oldVal) {
              if (newVal !== oldVal) {
                return circle.setOptions(buildOpts());
              }
            });
            scope.$watch('geodesic', function (newVal, oldVal) {
              if (newVal !== oldVal) {
                return circle.setOptions(buildOpts());
              }
            });
            EventsHelper.setEvents(circle, scope, scope);
            google.maps.event.addListener(circle, 'radius_changed', function () {
              scope.radius = circle.getRadius();
              return $timeout(function () {
                return scope.$apply();
              });
            });
            google.maps.event.addListener(circle, 'center_changed', function () {
              if (angular.isDefined(scope.center.type)) {
                scope.center.coordinates[1] = circle.getCenter().lat();
                scope.center.coordinates[0] = circle.getCenter().lng();
              } else {
                scope.center.latitude = circle.getCenter().lat();
                scope.center.longitude = circle.getCenter().lng();
              }
              return $timeout(function () {
                return scope.$apply();
              });
            });
            return scope.$on('$destroy', function () {
              return circle.setMap(null);
            });
          });
        }
      };
    }
  ]);
}.call(this));
/*
!
The MIT License

Copyright (c) 2010-2013 Google, Inc. http://angularjs.org

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

angular-google-maps
https://github.com/nlaplante/angular-google-maps

@authors
Nicolas Laplante - https://plus.google.com/108189012221374960701
Nicholas McCready - https://twitter.com/nmccready
*/
(function () {
  angular.module('google-maps').directive('polyline', [
    'Polyline',
    function (Polyline) {
      return new Polyline();
    }
  ]);
}.call(this));
/*
!
The MIT License

Copyright (c) 2010-2013 Google, Inc. http://angularjs.org

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

angular-google-maps
https://github.com/nlaplante/angular-google-maps

@authors
Nicolas Laplante - https://plus.google.com/108189012221374960701
Nicholas McCready - https://twitter.com/nmccready
*/
(function () {
  angular.module('google-maps').directive('polylines', [
    'Polylines',
    function (Polylines) {
      return new Polylines();
    }
  ]);
}.call(this));
/*
!
The MIT License

Copyright (c) 2010-2013 Google, Inc. http://angularjs.org

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

angular-google-maps
https://github.com/nlaplante/angular-google-maps

@authors
Nicolas Laplante - https://plus.google.com/108189012221374960701
Nicholas McCready - https://twitter.com/nmccready
Chentsu Lin - https://github.com/ChenTsuLin
*/
(function () {
  angular.module('google-maps').directive('rectangle', [
    '$log',
    '$timeout',
    function ($log, $timeout) {
      var DEFAULTS, convertBoundPoints, fitMapBounds, isTrue, validateBoundPoints;
      validateBoundPoints = function (bounds) {
        if (angular.isUndefined(bounds.sw.latitude) || angular.isUndefined(bounds.sw.longitude) || angular.isUndefined(bounds.ne.latitude) || angular.isUndefined(bounds.ne.longitude)) {
          return false;
        }
        return true;
      };
      convertBoundPoints = function (bounds) {
        var result;
        result = new google.maps.LatLngBounds(new google.maps.LatLng(bounds.sw.latitude, bounds.sw.longitude), new google.maps.LatLng(bounds.ne.latitude, bounds.ne.longitude));
        return result;
      };
      fitMapBounds = function (map, bounds) {
        return map.fitBounds(bounds);
      };
      /*
      Check if a value is true
      */
      isTrue = function (val) {
        return angular.isDefined(val) && val !== null && val === true || val === '1' || val === 'y' || val === 'true';
      };
      'use strict';
      DEFAULTS = {};
      return {
        restrict: 'ECA',
        require: '^googleMap',
        replace: true,
        scope: {
          bounds: '=',
          stroke: '=',
          clickable: '=',
          draggable: '=',
          editable: '=',
          fill: '=',
          visible: '='
        },
        link: function (scope, element, attrs, mapCtrl) {
          if (angular.isUndefined(scope.bounds) || scope.bounds === null || angular.isUndefined(scope.bounds.sw) || scope.bounds.sw === null || angular.isUndefined(scope.bounds.ne) || scope.bounds.ne === null || !validateBoundPoints(scope.bounds)) {
            $log.error('rectangle: no valid bound attribute found');
            return;
          }
          return $timeout(function () {
            var buildOpts, dragging, map, rectangle, settingBoundsFromScope;
            buildOpts = function (bounds) {
              var opts;
              opts = angular.extend({}, DEFAULTS, {
                map: map,
                bounds: bounds,
                strokeColor: scope.stroke && scope.stroke.color,
                strokeOpacity: scope.stroke && scope.stroke.opacity,
                strokeWeight: scope.stroke && scope.stroke.weight,
                fillColor: scope.fill && scope.fill.color,
                fillOpacity: scope.fill && scope.fill.opacity
              });
              angular.forEach({
                clickable: true,
                draggable: false,
                editable: false,
                visible: true
              }, function (defaultValue, key) {
                if (angular.isUndefined(scope[key]) || scope[key] === null) {
                  return opts[key] = defaultValue;
                } else {
                  return opts[key] = scope[key];
                }
              });
              return opts;
            };
            map = mapCtrl.getMap();
            rectangle = new google.maps.Rectangle(buildOpts(convertBoundPoints(scope.bounds)));
            if (isTrue(attrs.fit)) {
              fitMapBounds(map, bounds);
            }
            dragging = false;
            google.maps.event.addListener(rectangle, 'mousedown', function () {
              google.maps.event.addListener(rectangle, 'mousemove', function () {
                dragging = true;
                return _.defer(function () {
                  return scope.$apply(function (s) {
                    if (s.dragging != null) {
                      return s.dragging = dragging;
                    }
                  });
                });
              });
              google.maps.event.addListener(rectangle, 'mouseup', function () {
                google.maps.event.clearListeners(rectangle, 'mousemove');
                google.maps.event.clearListeners(rectangle, 'mouseup');
                dragging = false;
                return _.defer(function () {
                  return scope.$apply(function (s) {
                    if (s.dragging != null) {
                      return s.dragging = dragging;
                    }
                  });
                });
              });
            });
            settingBoundsFromScope = false;
            google.maps.event.addListener(rectangle, 'bounds_changed', function () {
              var b, ne, sw;
              b = rectangle.getBounds();
              ne = b.getNorthEast();
              sw = b.getSouthWest();
              if (settingBoundsFromScope) {
                return;
              }
              return _.defer(function () {
                return scope.$apply(function (s) {
                  if (!rectangle.dragging) {
                    if (s.bounds !== null && s.bounds !== undefined && s.bounds !== void 0) {
                      s.bounds.ne = {
                        latitude: ne.lat(),
                        longitude: ne.lng()
                      };
                      s.bounds.sw = {
                        latitude: sw.lat(),
                        longitude: sw.lng()
                      };
                    }
                  }
                });
              });
            });
            scope.$watch('bounds', function (newValue, oldValue) {
              var bounds;
              if (_.isEqual(newValue, oldValue)) {
                return;
              }
              settingBoundsFromScope = true;
              if (!dragging) {
                if (newValue.sw.latitude == null || newValue.sw.longitude == null || newValue.ne.latitude == null || newValue.ne.longitude == null) {
                  $log.error('Invalid bounds for newValue: ' + JSON.stringify(newValue));
                }
                bounds = new google.maps.LatLngBounds(new google.maps.LatLng(newValue.sw.latitude, newValue.sw.longitude), new google.maps.LatLng(newValue.ne.latitude, newValue.ne.longitude));
                rectangle.setBounds(bounds);
              }
              return settingBoundsFromScope = false;
            }, true);
            if (angular.isDefined(scope.editable)) {
              scope.$watch('editable', function (newValue, oldValue) {
                return rectangle.setEditable(newValue);
              });
            }
            if (angular.isDefined(scope.draggable)) {
              scope.$watch('draggable', function (newValue, oldValue) {
                return rectangle.setDraggable(newValue);
              });
            }
            if (angular.isDefined(scope.visible)) {
              scope.$watch('visible', function (newValue, oldValue) {
                return rectangle.setVisible(newValue);
              });
            }
            if (angular.isDefined(scope.stroke)) {
              if (angular.isDefined(scope.stroke.color)) {
                scope.$watch('stroke.color', function (newValue, oldValue) {
                  return rectangle.setOptions(buildOpts(rectangle.getBounds()));
                });
              }
              if (angular.isDefined(scope.stroke.weight)) {
                scope.$watch('stroke.weight', function (newValue, oldValue) {
                  return rectangle.setOptions(buildOpts(rectangle.getBounds()));
                });
              }
              if (angular.isDefined(scope.stroke.opacity)) {
                scope.$watch('stroke.opacity', function (newValue, oldValue) {
                  return rectangle.setOptions(buildOpts(rectangle.getBounds()));
                });
              }
            }
            if (angular.isDefined(scope.fill)) {
              if (angular.isDefined(scope.fill.color)) {
                scope.$watch('fill.color', function (newValue, oldValue) {
                  return rectangle.setOptions(buildOpts(rectangle.getBounds()));
                });
              }
              if (angular.isDefined(scope.fill.opacity)) {
                scope.$watch('fill.opacity', function (newValue, oldValue) {
                  return rectangle.setOptions(buildOpts(rectangle.getBounds()));
                });
              }
            }
            return scope.$on('$destroy', function () {
              return rectangle.setMap(null);
            });
          });
        }
      };
    }
  ]);
}.call(this));
/*
!
The MIT License

Copyright (c) 2010-2013 Google, Inc. http://angularjs.org

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

angular-google-maps
https://github.com/nlaplante/angular-google-maps

@authors
Nicolas Laplante - https://plus.google.com/108189012221374960701
Nicholas McCready - https://twitter.com/nmccready
*/
/*
Map info window directive

This directive is used to create an info window on an existing map.
This directive creates a new scope.

{attribute coords required}  object containing latitude and longitude properties
{attribute show optional}    map will show when this expression returns true
*/
(function () {
  angular.module('google-maps').directive('window', [
    '$timeout',
    '$compile',
    '$http',
    '$templateCache',
    'Window',
    function ($timeout, $compile, $http, $templateCache, Window) {
      return new Window($timeout, $compile, $http, $templateCache);
    }
  ]);
}.call(this));
/*
!
The MIT License

Copyright (c) 2010-2013 Google, Inc. http://angularjs.org

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

angular-google-maps
https://github.com/nlaplante/angular-google-maps

@authors
Nicolas Laplante - https://plus.google.com/108189012221374960701
Nicholas McCready - https://twitter.com/nmccready
*/
/*
Map info window directive

This directive is used to create an info window on an existing map.
This directive creates a new scope.

{attribute coords required}  object containing latitude and longitude properties
{attribute show optional}    map will show when this expression returns true
*/
(function () {
  angular.module('google-maps').directive('windows', [
    '$timeout',
    '$compile',
    '$http',
    '$templateCache',
    '$interpolate',
    'Windows',
    function ($timeout, $compile, $http, $templateCache, $interpolate, Windows) {
      return new Windows($timeout, $compile, $http, $templateCache, $interpolate);
    }
  ]);
}.call(this));
/*
!
The MIT License

Copyright (c) 2010-2013 Google, Inc. http://angularjs.org

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

angular-google-maps
https://github.com/nlaplante/angular-google-maps

@authors:
- Nicolas Laplante https://plus.google.com/108189012221374960701
- Nicholas McCready - https://twitter.com/nmccready
*/
/*
Map Layer directive

This directive is used to create any type of Layer from the google maps sdk.
This directive creates a new scope.

{attribute show optional}  true (default) shows the trafficlayer otherwise it is hidden
*/
(function () {
  var __bind = function (fn, me) {
    return function () {
      return fn.apply(me, arguments);
    };
  };
  angular.module('google-maps').directive('layer', [
    '$timeout',
    'Logger',
    'LayerParentModel',
    function ($timeout, Logger, LayerParentModel) {
      var Layer;
      Layer = function () {
        function Layer($timeout) {
          this.$timeout = $timeout;
          this.link = __bind(this.link, this);
          this.$log = Logger;
          this.restrict = 'ECMA';
          this.require = '^googleMap';
          this.priority = -1;
          this.transclude = true;
          this.template = '<span class="angular-google-map-layer" ng-transclude></span>';
          this.replace = true;
          this.scope = {
            show: '=show',
            type: '=type',
            namespace: '=namespace',
            options: '=options',
            onCreated: '&oncreated'
          };
        }
        Layer.prototype.link = function (scope, element, attrs, mapCtrl) {
          if (attrs.oncreated != null) {
            return new LayerParentModel(scope, element, attrs, mapCtrl, this.$timeout, scope.onCreated);
          } else {
            return new LayerParentModel(scope, element, attrs, mapCtrl, this.$timeout);
          }
        };
        return Layer;
      }();
      return new Layer($timeout);
    }
  ]);
}.call(this));
;
/**
 * @name InfoBox
 * @version 1.1.12 [December 11, 2012]
 * @author Gary Little (inspired by proof-of-concept code from Pamela Fox of Google)
 * @copyright Copyright 2010 Gary Little [gary at luxcentral.com]
 * @fileoverview InfoBox extends the Google Maps JavaScript API V3 <tt>OverlayView</tt> class.
 *  <p>
 *  An InfoBox behaves like a <tt>google.maps.InfoWindow</tt>, but it supports several
 *  additional properties for advanced styling. An InfoBox can also be used as a map label.
 *  <p>
 *  An InfoBox also fires the same events as a <tt>google.maps.InfoWindow</tt>.
 */
/*!
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/*jslint browser:true */
/*global google */
/**
 * @name InfoBoxOptions
 * @class This class represents the optional parameter passed to the {@link InfoBox} constructor.
 * @property {string|Node} content The content of the InfoBox (plain text or an HTML DOM node).
 * @property {boolean} [disableAutoPan=false] Disable auto-pan on <tt>open</tt>.
 * @property {number} maxWidth The maximum width (in pixels) of the InfoBox. Set to 0 if no maximum.
 * @property {Size} pixelOffset The offset (in pixels) from the top left corner of the InfoBox
 *  (or the bottom left corner if the <code>alignBottom</code> property is <code>true</code>)
 *  to the map pixel corresponding to <tt>position</tt>.
 * @property {LatLng} position The geographic location at which to display the InfoBox.
 * @property {number} zIndex The CSS z-index style value for the InfoBox.
 *  Note: This value overrides a zIndex setting specified in the <tt>boxStyle</tt> property.
 * @property {string} [boxClass="infoBox"] The name of the CSS class defining the styles for the InfoBox container.
 * @property {Object} [boxStyle] An object literal whose properties define specific CSS
 *  style values to be applied to the InfoBox. Style values defined here override those that may
 *  be defined in the <code>boxClass</code> style sheet. If this property is changed after the
 *  InfoBox has been created, all previously set styles (except those defined in the style sheet)
 *  are removed from the InfoBox before the new style values are applied.
 * @property {string} closeBoxMargin The CSS margin style value for the close box.
 *  The default is "2px" (a 2-pixel margin on all sides).
 * @property {string} closeBoxURL The URL of the image representing the close box.
 *  Note: The default is the URL for Google's standard close box.
 *  Set this property to "" if no close box is required.
 * @property {Size} infoBoxClearance Minimum offset (in pixels) from the InfoBox to the
 *  map edge after an auto-pan.
 * @property {boolean} [isHidden=false] Hide the InfoBox on <tt>open</tt>.
 *  [Deprecated in favor of the <tt>visible</tt> property.]
 * @property {boolean} [visible=true] Show the InfoBox on <tt>open</tt>.
 * @property {boolean} alignBottom Align the bottom left corner of the InfoBox to the <code>position</code>
 *  location (default is <tt>false</tt> which means that the top left corner of the InfoBox is aligned).
 * @property {string} pane The pane where the InfoBox is to appear (default is "floatPane").
 *  Set the pane to "mapPane" if the InfoBox is being used as a map label.
 *  Valid pane names are the property names for the <tt>google.maps.MapPanes</tt> object.
 * @property {boolean} enableEventPropagation Propagate mousedown, mousemove, mouseover, mouseout,
 *  mouseup, click, dblclick, touchstart, touchend, touchmove, and contextmenu events in the InfoBox
 *  (default is <tt>false</tt> to mimic the behavior of a <tt>google.maps.InfoWindow</tt>). Set
 *  this property to <tt>true</tt> if the InfoBox is being used as a map label.
 */
/**
 * Creates an InfoBox with the options specified in {@link InfoBoxOptions}.
 *  Call <tt>InfoBox.open</tt> to add the box to the map.
 * @constructor
 * @param {InfoBoxOptions} [opt_opts]
 */
function InfoBox(opt_opts) {
  opt_opts = opt_opts || {};
  google.maps.OverlayView.apply(this, arguments);
  // Standard options (in common with google.maps.InfoWindow):
  //
  this.content_ = opt_opts.content || '';
  this.disableAutoPan_ = opt_opts.disableAutoPan || false;
  this.maxWidth_ = opt_opts.maxWidth || 0;
  this.pixelOffset_ = opt_opts.pixelOffset || new google.maps.Size(0, 0);
  this.position_ = opt_opts.position || new google.maps.LatLng(0, 0);
  this.zIndex_ = opt_opts.zIndex || null;
  // Additional options (unique to InfoBox):
  //
  this.boxClass_ = opt_opts.boxClass || 'infoBox';
  this.boxStyle_ = opt_opts.boxStyle || {};
  this.closeBoxMargin_ = opt_opts.closeBoxMargin || '2px';
  this.closeBoxURL_ = opt_opts.closeBoxURL || 'http://www.google.com/intl/en_us/mapfiles/close.gif';
  if (opt_opts.closeBoxURL === '') {
    this.closeBoxURL_ = '';
  }
  this.infoBoxClearance_ = opt_opts.infoBoxClearance || new google.maps.Size(1, 1);
  if (typeof opt_opts.visible === 'undefined') {
    if (typeof opt_opts.isHidden === 'undefined') {
      opt_opts.visible = true;
    } else {
      opt_opts.visible = !opt_opts.isHidden;
    }
  }
  this.isHidden_ = !opt_opts.visible;
  this.alignBottom_ = opt_opts.alignBottom || false;
  this.pane_ = opt_opts.pane || 'floatPane';
  this.enableEventPropagation_ = opt_opts.enableEventPropagation || false;
  this.div_ = null;
  this.closeListener_ = null;
  this.moveListener_ = null;
  this.contextListener_ = null;
  this.eventListeners_ = null;
  this.fixedWidthSet_ = null;
}
/* InfoBox extends OverlayView in the Google Maps API v3.
 */
InfoBox.prototype = new google.maps.OverlayView();
/**
 * Creates the DIV representing the InfoBox.
 * @private
 */
InfoBox.prototype.createInfoBoxDiv_ = function () {
  var i;
  var events;
  var bw;
  var me = this;
  // This handler prevents an event in the InfoBox from being passed on to the map.
  //
  var cancelHandler = function (e) {
    e.cancelBubble = true;
    if (e.stopPropagation) {
      e.stopPropagation();
    }
  };
  // This handler ignores the current event in the InfoBox and conditionally prevents
  // the event from being passed on to the map. It is used for the contextmenu event.
  //
  var ignoreHandler = function (e) {
    e.returnValue = false;
    if (e.preventDefault) {
      e.preventDefault();
    }
    if (!me.enableEventPropagation_) {
      cancelHandler(e);
    }
  };
  if (!this.div_) {
    this.div_ = document.createElement('div');
    this.setBoxStyle_();
    if (typeof this.content_.nodeType === 'undefined') {
      this.div_.innerHTML = this.getCloseBoxImg_() + this.content_;
    } else {
      this.div_.innerHTML = this.getCloseBoxImg_();
      this.div_.appendChild(this.content_);
    }
    // Add the InfoBox DIV to the DOM
    this.getPanes()[this.pane_].appendChild(this.div_);
    this.addClickHandler_();
    if (this.div_.style.width) {
      this.fixedWidthSet_ = true;
    } else {
      if (this.maxWidth_ !== 0 && this.div_.offsetWidth > this.maxWidth_) {
        this.div_.style.width = this.maxWidth_;
        this.div_.style.overflow = 'auto';
        this.fixedWidthSet_ = true;
      } else {
        // The following code is needed to overcome problems with MSIE
        bw = this.getBoxWidths_();
        this.div_.style.width = this.div_.offsetWidth - bw.left - bw.right + 'px';
        this.fixedWidthSet_ = false;
      }
    }
    this.panBox_(this.disableAutoPan_);
    if (!this.enableEventPropagation_) {
      this.eventListeners_ = [];
      // Cancel event propagation.
      //
      // Note: mousemove not included (to resolve Issue 152)
      events = [
        'mousedown',
        'mouseover',
        'mouseout',
        'mouseup',
        'click',
        'dblclick',
        'touchstart',
        'touchend',
        'touchmove'
      ];
      for (i = 0; i < events.length; i++) {
        this.eventListeners_.push(google.maps.event.addDomListener(this.div_, events[i], cancelHandler));
      }
      // Workaround for Google bug that causes the cursor to change to a pointer
      // when the mouse moves over a marker underneath InfoBox.
      this.eventListeners_.push(google.maps.event.addDomListener(this.div_, 'mouseover', function (e) {
        this.style.cursor = 'default';
      }));
    }
    this.contextListener_ = google.maps.event.addDomListener(this.div_, 'contextmenu', ignoreHandler);
    /**
         * This event is fired when the DIV containing the InfoBox's content is attached to the DOM.
         * @name InfoBox#domready
         * @event
         */
    google.maps.event.trigger(this, 'domready');
  }
};
/**
 * Returns the HTML <IMG> tag for the close box.
 * @private
 */
InfoBox.prototype.getCloseBoxImg_ = function () {
  var img = '';
  if (this.closeBoxURL_ !== '') {
    img = '<img';
    img += ' src=\'' + this.closeBoxURL_ + '\'';
    img += ' align=right';
    // Do this because Opera chokes on style='float: right;'
    img += ' style=\'';
    img += ' position: relative;';
    // Required by MSIE
    img += ' cursor: pointer;';
    img += ' margin: ' + this.closeBoxMargin_ + ';';
    img += '\'>';
  }
  return img;
};
/**
 * Adds the click handler to the InfoBox close box.
 * @private
 */
InfoBox.prototype.addClickHandler_ = function () {
  var closeBox;
  if (this.closeBoxURL_ !== '') {
    closeBox = this.div_.firstChild;
    this.closeListener_ = google.maps.event.addDomListener(closeBox, 'click', this.getCloseClickHandler_());
  } else {
    this.closeListener_ = null;
  }
};
/**
 * Returns the function to call when the user clicks the close box of an InfoBox.
 * @private
 */
InfoBox.prototype.getCloseClickHandler_ = function () {
  var me = this;
  return function (e) {
    // 1.0.3 fix: Always prevent propagation of a close box click to the map:
    e.cancelBubble = true;
    if (e.stopPropagation) {
      e.stopPropagation();
    }
    /**
         * This event is fired when the InfoBox's close box is clicked.
         * @name InfoBox#closeclick
         * @event
         */
    google.maps.event.trigger(me, 'closeclick');
    me.close();
  };
};
/**
 * Pans the map so that the InfoBox appears entirely within the map's visible area.
 * @private
 */
InfoBox.prototype.panBox_ = function (disablePan) {
  var map;
  var bounds;
  var xOffset = 0, yOffset = 0;
  if (!disablePan) {
    map = this.getMap();
    if (map instanceof google.maps.Map) {
      // Only pan if attached to map, not panorama
      if (!map.getBounds().contains(this.position_)) {
        // Marker not in visible area of map, so set center
        // of map to the marker position first.
        map.setCenter(this.position_);
      }
      bounds = map.getBounds();
      var mapDiv = map.getDiv();
      var mapWidth = mapDiv.offsetWidth;
      var mapHeight = mapDiv.offsetHeight;
      var iwOffsetX = this.pixelOffset_.width;
      var iwOffsetY = this.pixelOffset_.height;
      var iwWidth = this.div_.offsetWidth;
      var iwHeight = this.div_.offsetHeight;
      var padX = this.infoBoxClearance_.width;
      var padY = this.infoBoxClearance_.height;
      var pixPosition = this.getProjection().fromLatLngToContainerPixel(this.position_);
      if (pixPosition.x < -iwOffsetX + padX) {
        xOffset = pixPosition.x + iwOffsetX - padX;
      } else if (pixPosition.x + iwWidth + iwOffsetX + padX > mapWidth) {
        xOffset = pixPosition.x + iwWidth + iwOffsetX + padX - mapWidth;
      }
      if (this.alignBottom_) {
        if (pixPosition.y < -iwOffsetY + padY + iwHeight) {
          yOffset = pixPosition.y + iwOffsetY - padY - iwHeight;
        } else if (pixPosition.y + iwOffsetY + padY > mapHeight) {
          yOffset = pixPosition.y + iwOffsetY + padY - mapHeight;
        }
      } else {
        if (pixPosition.y < -iwOffsetY + padY) {
          yOffset = pixPosition.y + iwOffsetY - padY;
        } else if (pixPosition.y + iwHeight + iwOffsetY + padY > mapHeight) {
          yOffset = pixPosition.y + iwHeight + iwOffsetY + padY - mapHeight;
        }
      }
      if (!(xOffset === 0 && yOffset === 0)) {
        // Move the map to the shifted center.
        //
        var c = map.getCenter();
        map.panBy(xOffset, yOffset);
      }
    }
  }
};
/**
 * Sets the style of the InfoBox by setting the style sheet and applying
 * other specific styles requested.
 * @private
 */
InfoBox.prototype.setBoxStyle_ = function () {
  var i, boxStyle;
  if (this.div_) {
    // Apply style values from the style sheet defined in the boxClass parameter:
    this.div_.className = this.boxClass_;
    // Clear existing inline style values:
    this.div_.style.cssText = '';
    // Apply style values defined in the boxStyle parameter:
    boxStyle = this.boxStyle_;
    for (i in boxStyle) {
      if (boxStyle.hasOwnProperty(i)) {
        this.div_.style[i] = boxStyle[i];
      }
    }
    // Fix up opacity style for benefit of MSIE:
    //
    if (typeof this.div_.style.opacity !== 'undefined' && this.div_.style.opacity !== '') {
      this.div_.style.filter = 'alpha(opacity=' + this.div_.style.opacity * 100 + ')';
    }
    // Apply required styles:
    //
    this.div_.style.position = 'absolute';
    this.div_.style.visibility = 'hidden';
    if (this.zIndex_ !== null) {
      this.div_.style.zIndex = this.zIndex_;
    }
  }
};
/**
 * Get the widths of the borders of the InfoBox.
 * @private
 * @return {Object} widths object (top, bottom left, right)
 */
InfoBox.prototype.getBoxWidths_ = function () {
  var computedStyle;
  var bw = {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    };
  var box = this.div_;
  if (document.defaultView && document.defaultView.getComputedStyle) {
    computedStyle = box.ownerDocument.defaultView.getComputedStyle(box, '');
    if (computedStyle) {
      // The computed styles are always in pixel units (good!)
      bw.top = parseInt(computedStyle.borderTopWidth, 10) || 0;
      bw.bottom = parseInt(computedStyle.borderBottomWidth, 10) || 0;
      bw.left = parseInt(computedStyle.borderLeftWidth, 10) || 0;
      bw.right = parseInt(computedStyle.borderRightWidth, 10) || 0;
    }
  } else if (document.documentElement.currentStyle) {
    // MSIE
    if (box.currentStyle) {
      // The current styles may not be in pixel units, but assume they are (bad!)
      bw.top = parseInt(box.currentStyle.borderTopWidth, 10) || 0;
      bw.bottom = parseInt(box.currentStyle.borderBottomWidth, 10) || 0;
      bw.left = parseInt(box.currentStyle.borderLeftWidth, 10) || 0;
      bw.right = parseInt(box.currentStyle.borderRightWidth, 10) || 0;
    }
  }
  return bw;
};
/**
 * Invoked when <tt>close</tt> is called. Do not call it directly.
 */
InfoBox.prototype.onRemove = function () {
  if (this.div_) {
    this.div_.parentNode.removeChild(this.div_);
    this.div_ = null;
  }
};
/**
 * Draws the InfoBox based on the current map projection and zoom level.
 */
InfoBox.prototype.draw = function () {
  this.createInfoBoxDiv_();
  var pixPosition = this.getProjection().fromLatLngToDivPixel(this.position_);
  this.div_.style.left = pixPosition.x + this.pixelOffset_.width + 'px';
  if (this.alignBottom_) {
    this.div_.style.bottom = -(pixPosition.y + this.pixelOffset_.height) + 'px';
  } else {
    this.div_.style.top = pixPosition.y + this.pixelOffset_.height + 'px';
  }
  if (this.isHidden_) {
    this.div_.style.visibility = 'hidden';
  } else {
    this.div_.style.visibility = 'visible';
  }
};
/**
 * Sets the options for the InfoBox. Note that changes to the <tt>maxWidth</tt>,
 *  <tt>closeBoxMargin</tt>, <tt>closeBoxURL</tt>, and <tt>enableEventPropagation</tt>
 *  properties have no affect until the current InfoBox is <tt>close</tt>d and a new one
 *  is <tt>open</tt>ed.
 * @param {InfoBoxOptions} opt_opts
 */
InfoBox.prototype.setOptions = function (opt_opts) {
  if (typeof opt_opts.boxClass !== 'undefined') {
    // Must be first
    this.boxClass_ = opt_opts.boxClass;
    this.setBoxStyle_();
  }
  if (typeof opt_opts.boxStyle !== 'undefined') {
    // Must be second
    this.boxStyle_ = opt_opts.boxStyle;
    this.setBoxStyle_();
  }
  if (typeof opt_opts.content !== 'undefined') {
    this.setContent(opt_opts.content);
  }
  if (typeof opt_opts.disableAutoPan !== 'undefined') {
    this.disableAutoPan_ = opt_opts.disableAutoPan;
  }
  if (typeof opt_opts.maxWidth !== 'undefined') {
    this.maxWidth_ = opt_opts.maxWidth;
  }
  if (typeof opt_opts.pixelOffset !== 'undefined') {
    this.pixelOffset_ = opt_opts.pixelOffset;
  }
  if (typeof opt_opts.alignBottom !== 'undefined') {
    this.alignBottom_ = opt_opts.alignBottom;
  }
  if (typeof opt_opts.position !== 'undefined') {
    this.setPosition(opt_opts.position);
  }
  if (typeof opt_opts.zIndex !== 'undefined') {
    this.setZIndex(opt_opts.zIndex);
  }
  if (typeof opt_opts.closeBoxMargin !== 'undefined') {
    this.closeBoxMargin_ = opt_opts.closeBoxMargin;
  }
  if (typeof opt_opts.closeBoxURL !== 'undefined') {
    this.closeBoxURL_ = opt_opts.closeBoxURL;
  }
  if (typeof opt_opts.infoBoxClearance !== 'undefined') {
    this.infoBoxClearance_ = opt_opts.infoBoxClearance;
  }
  if (typeof opt_opts.isHidden !== 'undefined') {
    this.isHidden_ = opt_opts.isHidden;
  }
  if (typeof opt_opts.visible !== 'undefined') {
    this.isHidden_ = !opt_opts.visible;
  }
  if (typeof opt_opts.enableEventPropagation !== 'undefined') {
    this.enableEventPropagation_ = opt_opts.enableEventPropagation;
  }
  if (this.div_) {
    this.draw();
  }
};
/**
 * Sets the content of the InfoBox.
 *  The content can be plain text or an HTML DOM node.
 * @param {string|Node} content
 */
InfoBox.prototype.setContent = function (content) {
  this.content_ = content;
  if (this.div_) {
    if (this.closeListener_) {
      google.maps.event.removeListener(this.closeListener_);
      this.closeListener_ = null;
    }
    // Odd code required to make things work with MSIE.
    //
    if (!this.fixedWidthSet_) {
      this.div_.style.width = '';
    }
    if (typeof content.nodeType === 'undefined') {
      this.div_.innerHTML = this.getCloseBoxImg_() + content;
    } else {
      this.div_.innerHTML = this.getCloseBoxImg_();
      this.div_.appendChild(content);
    }
    // Perverse code required to make things work with MSIE.
    // (Ensures the close box does, in fact, float to the right.)
    //
    if (!this.fixedWidthSet_) {
      this.div_.style.width = this.div_.offsetWidth + 'px';
      if (typeof content.nodeType === 'undefined') {
        this.div_.innerHTML = this.getCloseBoxImg_() + content;
      } else {
        this.div_.innerHTML = this.getCloseBoxImg_();
        this.div_.appendChild(content);
      }
    }
    this.addClickHandler_();
  }
  /**
     * This event is fired when the content of the InfoBox changes.
     * @name InfoBox#content_changed
     * @event
     */
  google.maps.event.trigger(this, 'content_changed');
};
/**
 * Sets the geographic location of the InfoBox.
 * @param {LatLng} latlng
 */
InfoBox.prototype.setPosition = function (latlng) {
  this.position_ = latlng;
  if (this.div_) {
    this.draw();
  }
  /**
     * This event is fired when the position of the InfoBox changes.
     * @name InfoBox#position_changed
     * @event
     */
  google.maps.event.trigger(this, 'position_changed');
};
/**
 * Sets the zIndex style for the InfoBox.
 * @param {number} index
 */
InfoBox.prototype.setZIndex = function (index) {
  this.zIndex_ = index;
  if (this.div_) {
    this.div_.style.zIndex = index;
  }
  /**
     * This event is fired when the zIndex of the InfoBox changes.
     * @name InfoBox#zindex_changed
     * @event
     */
  google.maps.event.trigger(this, 'zindex_changed');
};
/**
 * Sets the visibility of the InfoBox.
 * @param {boolean} isVisible
 */
InfoBox.prototype.setVisible = function (isVisible) {
  this.isHidden_ = !isVisible;
  if (this.div_) {
    this.div_.style.visibility = this.isHidden_ ? 'hidden' : 'visible';
  }
};
/**
 * Returns the content of the InfoBox.
 * @returns {string}
 */
InfoBox.prototype.getContent = function () {
  return this.content_;
};
/**
 * Returns the geographic location of the InfoBox.
 * @returns {LatLng}
 */
InfoBox.prototype.getPosition = function () {
  return this.position_;
};
/**
 * Returns the zIndex for the InfoBox.
 * @returns {number}
 */
InfoBox.prototype.getZIndex = function () {
  return this.zIndex_;
};
/**
 * Returns a flag indicating whether the InfoBox is visible.
 * @returns {boolean}
 */
InfoBox.prototype.getVisible = function () {
  var isVisible;
  if (typeof this.getMap() === 'undefined' || this.getMap() === null) {
    isVisible = false;
  } else {
    isVisible = !this.isHidden_;
  }
  return isVisible;
};
/**
 * Shows the InfoBox. [Deprecated; use <tt>setVisible</tt> instead.]
 */
InfoBox.prototype.show = function () {
  this.isHidden_ = false;
  if (this.div_) {
    this.div_.style.visibility = 'visible';
  }
};
/**
 * Hides the InfoBox. [Deprecated; use <tt>setVisible</tt> instead.]
 */
InfoBox.prototype.hide = function () {
  this.isHidden_ = true;
  if (this.div_) {
    this.div_.style.visibility = 'hidden';
  }
};
/**
 * Adds the InfoBox to the specified map or Street View panorama. If <tt>anchor</tt>
 *  (usually a <tt>google.maps.Marker</tt>) is specified, the position
 *  of the InfoBox is set to the position of the <tt>anchor</tt>. If the
 *  anchor is dragged to a new location, the InfoBox moves as well.
 * @param {Map|StreetViewPanorama} map
 * @param {MVCObject} [anchor]
 */
InfoBox.prototype.open = function (map, anchor) {
  var me = this;
  if (anchor) {
    this.position_ = anchor.getPosition();
    this.moveListener_ = google.maps.event.addListener(anchor, 'position_changed', function () {
      me.setPosition(this.getPosition());
    });
  }
  this.setMap(map);
  if (this.div_) {
    this.panBox_();
  }
};
/**
 * Removes the InfoBox from the map.
 */
InfoBox.prototype.close = function () {
  var i;
  if (this.closeListener_) {
    google.maps.event.removeListener(this.closeListener_);
    this.closeListener_ = null;
  }
  if (this.eventListeners_) {
    for (i = 0; i < this.eventListeners_.length; i++) {
      google.maps.event.removeListener(this.eventListeners_[i]);
    }
    this.eventListeners_ = null;
  }
  if (this.moveListener_) {
    google.maps.event.removeListener(this.moveListener_);
    this.moveListener_ = null;
  }
  if (this.contextListener_) {
    google.maps.event.removeListener(this.contextListener_);
    this.contextListener_ = null;
  }
  this.setMap(null);
};
;
/**
 * @name MarkerClustererPlus for Google Maps V3
 * @version 2.1.1 [November 4, 2013]
 * @author Gary Little
 * @fileoverview
 * The library creates and manages per-zoom-level clusters for large amounts of markers.
 * <p>
 * This is an enhanced V3 implementation of the
 * <a href="http://gmaps-utility-library-dev.googlecode.com/svn/tags/markerclusterer/"
 * >V2 MarkerClusterer</a> by Xiaoxi Wu. It is based on the
 * <a href="http://google-maps-utility-library-v3.googlecode.com/svn/tags/markerclusterer/"
 * >V3 MarkerClusterer</a> port by Luke Mahe. MarkerClustererPlus was created by Gary Little.
 * <p>
 * v2.0 release: MarkerClustererPlus v2.0 is backward compatible with MarkerClusterer v1.0. It
 *  adds support for the <code>ignoreHidden</code>, <code>title</code>, <code>batchSizeIE</code>,
 *  and <code>calculator</code> properties as well as support for four more events. It also allows
 *  greater control over the styling of the text that appears on the cluster marker. The
 *  documentation has been significantly improved and the overall code has been simplified and
 *  polished. Very large numbers of markers can now be managed without causing Javascript timeout
 *  errors on Internet Explorer. Note that the name of the <code>clusterclick</code> event has been
 *  deprecated. The new name is <code>click</code>, so please change your application code now.
 */
/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @name ClusterIconStyle
 * @class This class represents the object for values in the <code>styles</code> array passed
 *  to the {@link MarkerClusterer} constructor. The element in this array that is used to
 *  style the cluster icon is determined by calling the <code>calculator</code> function.
 *
 * @property {string} url The URL of the cluster icon image file. Required.
 * @property {number} height The display height (in pixels) of the cluster icon. Required.
 * @property {number} width The display width (in pixels) of the cluster icon. Required.
 * @property {Array} [anchorText] The position (in pixels) from the center of the cluster icon to
 *  where the text label is to be centered and drawn. The format is <code>[yoffset, xoffset]</code>
 *  where <code>yoffset</code> increases as you go down from center and <code>xoffset</code>
 *  increases to the right of center. The default is <code>[0, 0]</code>.
 * @property {Array} [anchorIcon] The anchor position (in pixels) of the cluster icon. This is the
 *  spot on the cluster icon that is to be aligned with the cluster position. The format is
 *  <code>[yoffset, xoffset]</code> where <code>yoffset</code> increases as you go down and
 *  <code>xoffset</code> increases to the right of the top-left corner of the icon. The default
 *  anchor position is the center of the cluster icon.
 * @property {string} [textColor="black"] The color of the label text shown on the
 *  cluster icon.
 * @property {number} [textSize=11] The size (in pixels) of the label text shown on the
 *  cluster icon.
 * @property {string} [textDecoration="none"] The value of the CSS <code>text-decoration</code>
 *  property for the label text shown on the cluster icon.
 * @property {string} [fontWeight="bold"] The value of the CSS <code>font-weight</code>
 *  property for the label text shown on the cluster icon.
 * @property {string} [fontStyle="normal"] The value of the CSS <code>font-style</code>
 *  property for the label text shown on the cluster icon.
 * @property {string} [fontFamily="Arial,sans-serif"] The value of the CSS <code>font-family</code>
 *  property for the label text shown on the cluster icon.
 * @property {string} [backgroundPosition="0 0"] The position of the cluster icon image
 *  within the image defined by <code>url</code>. The format is <code>"xpos ypos"</code>
 *  (the same format as for the CSS <code>background-position</code> property). You must set
 *  this property appropriately when the image defined by <code>url</code> represents a sprite
 *  containing multiple images. Note that the position <i>must</i> be specified in px units.
 */
/**
 * @name ClusterIconInfo
 * @class This class is an object containing general information about a cluster icon. This is
 *  the object that a <code>calculator</code> function returns.
 *
 * @property {string} text The text of the label to be shown on the cluster icon.
 * @property {number} index The index plus 1 of the element in the <code>styles</code>
 *  array to be used to style the cluster icon.
 * @property {string} title The tooltip to display when the mouse moves over the cluster icon.
 *  If this value is <code>undefined</code> or <code>""</code>, <code>title</code> is set to the
 *  value of the <code>title</code> property passed to the MarkerClusterer.
 */
/**
 * A cluster icon.
 *
 * @constructor
 * @extends google.maps.OverlayView
 * @param {Cluster} cluster The cluster with which the icon is to be associated.
 * @param {Array} [styles] An array of {@link ClusterIconStyle} defining the cluster icons
 *  to use for various cluster sizes.
 * @private
 */
function ClusterIcon(cluster, styles) {
  cluster.getMarkerClusterer().extend(ClusterIcon, google.maps.OverlayView);
  this.cluster_ = cluster;
  this.className_ = cluster.getMarkerClusterer().getClusterClass();
  this.styles_ = styles;
  this.center_ = null;
  this.div_ = null;
  this.sums_ = null;
  this.visible_ = false;
  this.setMap(cluster.getMap());  // Note: this causes onAdd to be called
}
/**
 * Adds the icon to the DOM.
 */
ClusterIcon.prototype.onAdd = function () {
  var cClusterIcon = this;
  var cMouseDownInCluster;
  var cDraggingMapByCluster;
  this.div_ = document.createElement('div');
  this.div_.className = this.className_;
  if (this.visible_) {
    this.show();
  }
  this.getPanes().overlayMouseTarget.appendChild(this.div_);
  // Fix for Issue 157
  this.boundsChangedListener_ = google.maps.event.addListener(this.getMap(), 'bounds_changed', function () {
    cDraggingMapByCluster = cMouseDownInCluster;
  });
  google.maps.event.addDomListener(this.div_, 'mousedown', function () {
    cMouseDownInCluster = true;
    cDraggingMapByCluster = false;
  });
  google.maps.event.addDomListener(this.div_, 'click', function (e) {
    cMouseDownInCluster = false;
    if (!cDraggingMapByCluster) {
      var theBounds;
      var mz;
      var mc = cClusterIcon.cluster_.getMarkerClusterer();
      /**
             * This event is fired when a cluster marker is clicked.
             * @name MarkerClusterer#click
             * @param {Cluster} c The cluster that was clicked.
             * @event
             */
      google.maps.event.trigger(mc, 'click', cClusterIcon.cluster_);
      google.maps.event.trigger(mc, 'clusterclick', cClusterIcon.cluster_);
      // deprecated name
      // The default click handler follows. Disable it by setting
      // the zoomOnClick property to false.
      if (mc.getZoomOnClick()) {
        // Zoom into the cluster.
        mz = mc.getMaxZoom();
        theBounds = cClusterIcon.cluster_.getBounds();
        mc.getMap().fitBounds(theBounds);
        // There is a fix for Issue 170 here:
        setTimeout(function () {
          mc.getMap().fitBounds(theBounds);
          // Don't zoom beyond the max zoom level
          if (mz !== null && mc.getMap().getZoom() > mz) {
            mc.getMap().setZoom(mz + 1);
          }
        }, 100);
      }
      // Prevent event propagation to the map:
      e.cancelBubble = true;
      if (e.stopPropagation) {
        e.stopPropagation();
      }
    }
  });
  google.maps.event.addDomListener(this.div_, 'mouseover', function () {
    var mc = cClusterIcon.cluster_.getMarkerClusterer();
    /**
         * This event is fired when the mouse moves over a cluster marker.
         * @name MarkerClusterer#mouseover
         * @param {Cluster} c The cluster that the mouse moved over.
         * @event
         */
    google.maps.event.trigger(mc, 'mouseover', cClusterIcon.cluster_);
  });
  google.maps.event.addDomListener(this.div_, 'mouseout', function () {
    var mc = cClusterIcon.cluster_.getMarkerClusterer();
    /**
         * This event is fired when the mouse moves out of a cluster marker.
         * @name MarkerClusterer#mouseout
         * @param {Cluster} c The cluster that the mouse moved out of.
         * @event
         */
    google.maps.event.trigger(mc, 'mouseout', cClusterIcon.cluster_);
  });
};
/**
 * Removes the icon from the DOM.
 */
ClusterIcon.prototype.onRemove = function () {
  if (this.div_ && this.div_.parentNode) {
    this.hide();
    google.maps.event.removeListener(this.boundsChangedListener_);
    google.maps.event.clearInstanceListeners(this.div_);
    this.div_.parentNode.removeChild(this.div_);
    this.div_ = null;
  }
};
/**
 * Draws the icon.
 */
ClusterIcon.prototype.draw = function () {
  if (this.visible_) {
    var pos = this.getPosFromLatLng_(this.center_);
    this.div_.style.top = pos.y + 'px';
    this.div_.style.left = pos.x + 'px';
  }
};
/**
 * Hides the icon.
 */
ClusterIcon.prototype.hide = function () {
  if (this.div_) {
    this.div_.style.display = 'none';
  }
  this.visible_ = false;
};
/**
 * Positions and shows the icon.
 */
ClusterIcon.prototype.show = function () {
  if (this.div_) {
    var img = '';
    // NOTE: values must be specified in px units
    var bp = this.backgroundPosition_.split(' ');
    var spriteH = parseInt(bp[0].trim(), 10);
    var spriteV = parseInt(bp[1].trim(), 10);
    var pos = this.getPosFromLatLng_(this.center_);
    this.div_.style.cssText = this.createCss(pos);
    img = '<img src=\'' + this.url_ + '\' style=\'position: absolute; top: ' + spriteV + 'px; left: ' + spriteH + 'px; ';
    if (!this.cluster_.getMarkerClusterer().enableRetinaIcons_) {
      img += 'clip: rect(' + -1 * spriteV + 'px, ' + (-1 * spriteH + this.width_) + 'px, ' + (-1 * spriteV + this.height_) + 'px, ' + -1 * spriteH + 'px);';
    }
    img += '\'>';
    this.div_.innerHTML = img + '<div style=\'' + 'position: absolute;' + 'top: ' + this.anchorText_[0] + 'px;' + 'left: ' + this.anchorText_[1] + 'px;' + 'color: ' + this.textColor_ + ';' + 'font-size: ' + this.textSize_ + 'px;' + 'font-family: ' + this.fontFamily_ + ';' + 'font-weight: ' + this.fontWeight_ + ';' + 'font-style: ' + this.fontStyle_ + ';' + 'text-decoration: ' + this.textDecoration_ + ';' + 'text-align: center;' + 'width: ' + this.width_ + 'px;' + 'line-height:' + this.height_ + 'px;' + '\'>' + this.sums_.text + '</div>';
    if (typeof this.sums_.title === 'undefined' || this.sums_.title === '') {
      this.div_.title = this.cluster_.getMarkerClusterer().getTitle();
    } else {
      this.div_.title = this.sums_.title;
    }
    this.div_.style.display = '';
  }
  this.visible_ = true;
};
/**
 * Sets the icon styles to the appropriate element in the styles array.
 *
 * @param {ClusterIconInfo} sums The icon label text and styles index.
 */
ClusterIcon.prototype.useStyle = function (sums) {
  this.sums_ = sums;
  var index = Math.max(0, sums.index - 1);
  index = Math.min(this.styles_.length - 1, index);
  var style = this.styles_[index];
  this.url_ = style.url;
  this.height_ = style.height;
  this.width_ = style.width;
  this.anchorText_ = style.anchorText || [
    0,
    0
  ];
  this.anchorIcon_ = style.anchorIcon || [
    parseInt(this.height_ / 2, 10),
    parseInt(this.width_ / 2, 10)
  ];
  this.textColor_ = style.textColor || 'black';
  this.textSize_ = style.textSize || 11;
  this.textDecoration_ = style.textDecoration || 'none';
  this.fontWeight_ = style.fontWeight || 'bold';
  this.fontStyle_ = style.fontStyle || 'normal';
  this.fontFamily_ = style.fontFamily || 'Arial,sans-serif';
  this.backgroundPosition_ = style.backgroundPosition || '0 0';
};
/**
 * Sets the position at which to center the icon.
 *
 * @param {google.maps.LatLng} center The latlng to set as the center.
 */
ClusterIcon.prototype.setCenter = function (center) {
  this.center_ = center;
};
/**
 * Creates the cssText style parameter based on the position of the icon.
 *
 * @param {google.maps.Point} pos The position of the icon.
 * @return {string} The CSS style text.
 */
ClusterIcon.prototype.createCss = function (pos) {
  var style = [];
  style.push('cursor: pointer;');
  style.push('position: absolute; top: ' + pos.y + 'px; left: ' + pos.x + 'px;');
  style.push('width: ' + this.width_ + 'px; height: ' + this.height_ + 'px;');
  return style.join('');
};
/**
 * Returns the position at which to place the DIV depending on the latlng.
 *
 * @param {google.maps.LatLng} latlng The position in latlng.
 * @return {google.maps.Point} The position in pixels.
 */
ClusterIcon.prototype.getPosFromLatLng_ = function (latlng) {
  var pos = this.getProjection().fromLatLngToDivPixel(latlng);
  pos.x -= this.anchorIcon_[1];
  pos.y -= this.anchorIcon_[0];
  pos.x = parseInt(pos.x, 10);
  pos.y = parseInt(pos.y, 10);
  return pos;
};
/**
 * Creates a single cluster that manages a group of proximate markers.
 *  Used internally, do not call this constructor directly.
 * @constructor
 * @param {MarkerClusterer} mc The <code>MarkerClusterer</code> object with which this
 *  cluster is associated.
 */
function Cluster(mc) {
  this.markerClusterer_ = mc;
  this.map_ = mc.getMap();
  this.gridSize_ = mc.getGridSize();
  this.minClusterSize_ = mc.getMinimumClusterSize();
  this.averageCenter_ = mc.getAverageCenter();
  this.markers_ = [];
  this.center_ = null;
  this.bounds_ = null;
  this.clusterIcon_ = new ClusterIcon(this, mc.getStyles());
}
/**
 * Returns the number of markers managed by the cluster. You can call this from
 * a <code>click</code>, <code>mouseover</code>, or <code>mouseout</code> event handler
 * for the <code>MarkerClusterer</code> object.
 *
 * @return {number} The number of markers in the cluster.
 */
Cluster.prototype.getSize = function () {
  return this.markers_.length;
};
/**
 * Returns the array of markers managed by the cluster. You can call this from
 * a <code>click</code>, <code>mouseover</code>, or <code>mouseout</code> event handler
 * for the <code>MarkerClusterer</code> object.
 *
 * @return {Array} The array of markers in the cluster.
 */
Cluster.prototype.getMarkers = function () {
  return this.markers_;
};
/**
 * Returns the center of the cluster. You can call this from
 * a <code>click</code>, <code>mouseover</code>, or <code>mouseout</code> event handler
 * for the <code>MarkerClusterer</code> object.
 *
 * @return {google.maps.LatLng} The center of the cluster.
 */
Cluster.prototype.getCenter = function () {
  return this.center_;
};
/**
 * Returns the map with which the cluster is associated.
 *
 * @return {google.maps.Map} The map.
 * @ignore
 */
Cluster.prototype.getMap = function () {
  return this.map_;
};
/**
 * Returns the <code>MarkerClusterer</code> object with which the cluster is associated.
 *
 * @return {MarkerClusterer} The associated marker clusterer.
 * @ignore
 */
Cluster.prototype.getMarkerClusterer = function () {
  return this.markerClusterer_;
};
/**
 * Returns the bounds of the cluster.
 *
 * @return {google.maps.LatLngBounds} the cluster bounds.
 * @ignore
 */
Cluster.prototype.getBounds = function () {
  var i;
  var bounds = new google.maps.LatLngBounds(this.center_, this.center_);
  var markers = this.getMarkers();
  for (i = 0; i < markers.length; i++) {
    bounds.extend(markers[i].getPosition());
  }
  return bounds;
};
/**
 * Removes the cluster from the map.
 *
 * @ignore
 */
Cluster.prototype.remove = function () {
  this.clusterIcon_.setMap(null);
  this.markers_ = [];
  delete this.markers_;
};
/**
 * Adds a marker to the cluster.
 *
 * @param {google.maps.Marker} marker The marker to be added.
 * @return {boolean} True if the marker was added.
 * @ignore
 */
Cluster.prototype.addMarker = function (marker) {
  var i;
  var mCount;
  var mz;
  if (this.isMarkerAlreadyAdded_(marker)) {
    return false;
  }
  if (!this.center_) {
    this.center_ = marker.getPosition();
    this.calculateBounds_();
  } else {
    if (this.averageCenter_) {
      var l = this.markers_.length + 1;
      var lat = (this.center_.lat() * (l - 1) + marker.getPosition().lat()) / l;
      var lng = (this.center_.lng() * (l - 1) + marker.getPosition().lng()) / l;
      this.center_ = new google.maps.LatLng(lat, lng);
      this.calculateBounds_();
    }
  }
  marker.isAdded = true;
  this.markers_.push(marker);
  mCount = this.markers_.length;
  mz = this.markerClusterer_.getMaxZoom();
  if (mz !== null && this.map_.getZoom() > mz) {
    // Zoomed in past max zoom, so show the marker.
    if (marker.getMap() !== this.map_) {
      marker.setMap(this.map_);
    }
  } else if (mCount < this.minClusterSize_) {
    // Min cluster size not reached so show the marker.
    if (marker.getMap() !== this.map_) {
      marker.setMap(this.map_);
    }
  } else if (mCount === this.minClusterSize_) {
    // Hide the markers that were showing.
    for (i = 0; i < mCount; i++) {
      this.markers_[i].setMap(null);
    }
  } else {
    marker.setMap(null);
  }
  this.updateIcon_();
  return true;
};
/**
 * Determines if a marker lies within the cluster's bounds.
 *
 * @param {google.maps.Marker} marker The marker to check.
 * @return {boolean} True if the marker lies in the bounds.
 * @ignore
 */
Cluster.prototype.isMarkerInClusterBounds = function (marker) {
  return this.bounds_.contains(marker.getPosition());
};
/**
 * Calculates the extended bounds of the cluster with the grid.
 */
Cluster.prototype.calculateBounds_ = function () {
  var bounds = new google.maps.LatLngBounds(this.center_, this.center_);
  this.bounds_ = this.markerClusterer_.getExtendedBounds(bounds);
};
/**
 * Updates the cluster icon.
 */
Cluster.prototype.updateIcon_ = function () {
  var mCount = this.markers_.length;
  var mz = this.markerClusterer_.getMaxZoom();
  if (mz !== null && this.map_.getZoom() > mz) {
    this.clusterIcon_.hide();
    return;
  }
  if (mCount < this.minClusterSize_) {
    // Min cluster size not yet reached.
    this.clusterIcon_.hide();
    return;
  }
  var numStyles = this.markerClusterer_.getStyles().length;
  var sums = this.markerClusterer_.getCalculator()(this.markers_, numStyles);
  this.clusterIcon_.setCenter(this.center_);
  this.clusterIcon_.useStyle(sums);
  this.clusterIcon_.show();
};
/**
 * Determines if a marker has already been added to the cluster.
 *
 * @param {google.maps.Marker} marker The marker to check.
 * @return {boolean} True if the marker has already been added.
 */
Cluster.prototype.isMarkerAlreadyAdded_ = function (marker) {
  var i;
  if (this.markers_.indexOf) {
    return this.markers_.indexOf(marker) !== -1;
  } else {
    for (i = 0; i < this.markers_.length; i++) {
      if (marker === this.markers_[i]) {
        return true;
      }
    }
  }
  return false;
};
/**
 * @name MarkerClustererOptions
 * @class This class represents the optional parameter passed to
 *  the {@link MarkerClusterer} constructor.
 * @property {number} [gridSize=60] The grid size of a cluster in pixels. The grid is a square.
 * @property {number} [maxZoom=null] The maximum zoom level at which clustering is enabled or
 *  <code>null</code> if clustering is to be enabled at all zoom levels.
 * @property {boolean} [zoomOnClick=true] Whether to zoom the map when a cluster marker is
 *  clicked. You may want to set this to <code>false</code> if you have installed a handler
 *  for the <code>click</code> event and it deals with zooming on its own.
 * @property {boolean} [averageCenter=false] Whether the position of a cluster marker should be
 *  the average position of all markers in the cluster. If set to <code>false</code>, the
 *  cluster marker is positioned at the location of the first marker added to the cluster.
 * @property {number} [minimumClusterSize=2] The minimum number of markers needed in a cluster
 *  before the markers are hidden and a cluster marker appears.
 * @property {boolean} [ignoreHidden=false] Whether to ignore hidden markers in clusters. You
 *  may want to set this to <code>true</code> to ensure that hidden markers are not included
 *  in the marker count that appears on a cluster marker (this count is the value of the
 *  <code>text</code> property of the result returned by the default <code>calculator</code>).
 *  If set to <code>true</code> and you change the visibility of a marker being clustered, be
 *  sure to also call <code>MarkerClusterer.repaint()</code>.
 * @property {string} [title=""] The tooltip to display when the mouse moves over a cluster
 *  marker. (Alternatively, you can use a custom <code>calculator</code> function to specify a
 *  different tooltip for each cluster marker.)
 * @property {function} [calculator=MarkerClusterer.CALCULATOR] The function used to determine
 *  the text to be displayed on a cluster marker and the index indicating which style to use
 *  for the cluster marker. The input parameters for the function are (1) the array of markers
 *  represented by a cluster marker and (2) the number of cluster icon styles. It returns a
 *  {@link ClusterIconInfo} object. The default <code>calculator</code> returns a
 *  <code>text</code> property which is the number of markers in the cluster and an
 *  <code>index</code> property which is one higher than the lowest integer such that
 *  <code>10^i</code> exceeds the number of markers in the cluster, or the size of the styles
 *  array, whichever is less. The <code>styles</code> array element used has an index of
 *  <code>index</code> minus 1. For example, the default <code>calculator</code> returns a
 *  <code>text</code> value of <code>"125"</code> and an <code>index</code> of <code>3</code>
 *  for a cluster icon representing 125 markers so the element used in the <code>styles</code>
 *  array is <code>2</code>. A <code>calculator</code> may also return a <code>title</code>
 *  property that contains the text of the tooltip to be used for the cluster marker. If
 *   <code>title</code> is not defined, the tooltip is set to the value of the <code>title</code>
 *   property for the MarkerClusterer.
 * @property {string} [clusterClass="cluster"] The name of the CSS class defining general styles
 *  for the cluster markers. Use this class to define CSS styles that are not set up by the code
 *  that processes the <code>styles</code> array.
 * @property {Array} [styles] An array of {@link ClusterIconStyle} elements defining the styles
 *  of the cluster markers to be used. The element to be used to style a given cluster marker
 *  is determined by the function defined by the <code>calculator</code> property.
 *  The default is an array of {@link ClusterIconStyle} elements whose properties are derived
 *  from the values for <code>imagePath</code>, <code>imageExtension</code>, and
 *  <code>imageSizes</code>.
 * @property {boolean} [enableRetinaIcons=false] Whether to allow the use of cluster icons that
 * have sizes that are some multiple (typically double) of their actual display size. Icons such
 * as these look better when viewed on high-resolution monitors such as Apple's Retina displays.
 * Note: if this property is <code>true</code>, sprites cannot be used as cluster icons.
 * @property {number} [batchSize=MarkerClusterer.BATCH_SIZE] Set this property to the
 *  number of markers to be processed in a single batch when using a browser other than
 *  Internet Explorer (for Internet Explorer, use the batchSizeIE property instead).
 * @property {number} [batchSizeIE=MarkerClusterer.BATCH_SIZE_IE] When Internet Explorer is
 *  being used, markers are processed in several batches with a small delay inserted between
 *  each batch in an attempt to avoid Javascript timeout errors. Set this property to the
 *  number of markers to be processed in a single batch; select as high a number as you can
 *  without causing a timeout error in the browser. This number might need to be as low as 100
 *  if 15,000 markers are being managed, for example.
 * @property {string} [imagePath=MarkerClusterer.IMAGE_PATH]
 *  The full URL of the root name of the group of image files to use for cluster icons.
 *  The complete file name is of the form <code>imagePath</code>n.<code>imageExtension</code>
 *  where n is the image file number (1, 2, etc.).
 * @property {string} [imageExtension=MarkerClusterer.IMAGE_EXTENSION]
 *  The extension name for the cluster icon image files (e.g., <code>"png"</code> or
 *  <code>"jpg"</code>).
 * @property {Array} [imageSizes=MarkerClusterer.IMAGE_SIZES]
 *  An array of numbers containing the widths of the group of
 *  <code>imagePath</code>n.<code>imageExtension</code> image files.
 *  (The images are assumed to be square.)
 */
/**
 * Creates a MarkerClusterer object with the options specified in {@link MarkerClustererOptions}.
 * @constructor
 * @extends google.maps.OverlayView
 * @param {google.maps.Map} map The Google map to attach to.
 * @param {Array.<google.maps.Marker>} [opt_markers] The markers to be added to the cluster.
 * @param {MarkerClustererOptions} [opt_options] The optional parameters.
 */
function MarkerClusterer(map, opt_markers, opt_options) {
  // MarkerClusterer implements google.maps.OverlayView interface. We use the
  // extend function to extend MarkerClusterer with google.maps.OverlayView
  // because it might not always be available when the code is defined so we
  // look for it at the last possible moment. If it doesn't exist now then
  // there is no point going ahead :)
  this.extend(MarkerClusterer, google.maps.OverlayView);
  opt_markers = opt_markers || [];
  opt_options = opt_options || {};
  this.markers_ = [];
  this.clusters_ = [];
  this.listeners_ = [];
  this.activeMap_ = null;
  this.ready_ = false;
  this.gridSize_ = opt_options.gridSize || 60;
  this.minClusterSize_ = opt_options.minimumClusterSize || 2;
  this.maxZoom_ = opt_options.maxZoom || null;
  this.styles_ = opt_options.styles || [];
  this.title_ = opt_options.title || '';
  this.zoomOnClick_ = true;
  if (opt_options.zoomOnClick !== undefined) {
    this.zoomOnClick_ = opt_options.zoomOnClick;
  }
  this.averageCenter_ = false;
  if (opt_options.averageCenter !== undefined) {
    this.averageCenter_ = opt_options.averageCenter;
  }
  this.ignoreHidden_ = false;
  if (opt_options.ignoreHidden !== undefined) {
    this.ignoreHidden_ = opt_options.ignoreHidden;
  }
  this.enableRetinaIcons_ = false;
  if (opt_options.enableRetinaIcons !== undefined) {
    this.enableRetinaIcons_ = opt_options.enableRetinaIcons;
  }
  this.imagePath_ = opt_options.imagePath || MarkerClusterer.IMAGE_PATH;
  this.imageExtension_ = opt_options.imageExtension || MarkerClusterer.IMAGE_EXTENSION;
  this.imageSizes_ = opt_options.imageSizes || MarkerClusterer.IMAGE_SIZES;
  this.calculator_ = opt_options.calculator || MarkerClusterer.CALCULATOR;
  this.batchSize_ = opt_options.batchSize || MarkerClusterer.BATCH_SIZE;
  this.batchSizeIE_ = opt_options.batchSizeIE || MarkerClusterer.BATCH_SIZE_IE;
  this.clusterClass_ = opt_options.clusterClass || 'cluster';
  if (navigator.userAgent.toLowerCase().indexOf('msie') !== -1) {
    // Try to avoid IE timeout when processing a huge number of markers:
    this.batchSize_ = this.batchSizeIE_;
  }
  this.setupStyles_();
  this.addMarkers(opt_markers, true);
  this.setMap(map);  // Note: this causes onAdd to be called
}
/**
 * Implementation of the onAdd interface method.
 * @ignore
 */
MarkerClusterer.prototype.onAdd = function () {
  var cMarkerClusterer = this;
  this.activeMap_ = this.getMap();
  this.ready_ = true;
  this.repaint();
  // Add the map event listeners
  this.listeners_ = [
    google.maps.event.addListener(this.getMap(), 'zoom_changed', function () {
      cMarkerClusterer.resetViewport_(false);
      // Workaround for this Google bug: when map is at level 0 and "-" of
      // zoom slider is clicked, a "zoom_changed" event is fired even though
      // the map doesn't zoom out any further. In this situation, no "idle"
      // event is triggered so the cluster markers that have been removed
      // do not get redrawn. Same goes for a zoom in at maxZoom.
      if (this.getZoom() === (this.get('minZoom') || 0) || this.getZoom() === this.get('maxZoom')) {
        google.maps.event.trigger(this, 'idle');
      }
    }),
    google.maps.event.addListener(this.getMap(), 'idle', function () {
      cMarkerClusterer.redraw_();
    })
  ];
};
/**
 * Implementation of the onRemove interface method.
 * Removes map event listeners and all cluster icons from the DOM.
 * All managed markers are also put back on the map.
 * @ignore
 */
MarkerClusterer.prototype.onRemove = function () {
  var i;
  // Put all the managed markers back on the map:
  for (i = 0; i < this.markers_.length; i++) {
    if (this.markers_[i].getMap() !== this.activeMap_) {
      this.markers_[i].setMap(this.activeMap_);
    }
  }
  // Remove all clusters:
  for (i = 0; i < this.clusters_.length; i++) {
    this.clusters_[i].remove();
  }
  this.clusters_ = [];
  // Remove map event listeners:
  for (i = 0; i < this.listeners_.length; i++) {
    google.maps.event.removeListener(this.listeners_[i]);
  }
  this.listeners_ = [];
  this.activeMap_ = null;
  this.ready_ = false;
};
/**
 * Implementation of the draw interface method.
 * @ignore
 */
MarkerClusterer.prototype.draw = function () {
};
/**
 * Sets up the styles object.
 */
MarkerClusterer.prototype.setupStyles_ = function () {
  var i, size;
  if (this.styles_.length > 0) {
    return;
  }
  for (i = 0; i < this.imageSizes_.length; i++) {
    size = this.imageSizes_[i];
    this.styles_.push({
      url: this.imagePath_ + (i + 1) + '.' + this.imageExtension_,
      height: size,
      width: size
    });
  }
};
/**
 *  Fits the map to the bounds of the markers managed by the clusterer.
 */
MarkerClusterer.prototype.fitMapToMarkers = function () {
  var i;
  var markers = this.getMarkers();
  var bounds = new google.maps.LatLngBounds();
  for (i = 0; i < markers.length; i++) {
    bounds.extend(markers[i].getPosition());
  }
  this.getMap().fitBounds(bounds);
};
/**
 * Returns the value of the <code>gridSize</code> property.
 *
 * @return {number} The grid size.
 */
MarkerClusterer.prototype.getGridSize = function () {
  return this.gridSize_;
};
/**
 * Sets the value of the <code>gridSize</code> property.
 *
 * @param {number} gridSize The grid size.
 */
MarkerClusterer.prototype.setGridSize = function (gridSize) {
  this.gridSize_ = gridSize;
};
/**
 * Returns the value of the <code>minimumClusterSize</code> property.
 *
 * @return {number} The minimum cluster size.
 */
MarkerClusterer.prototype.getMinimumClusterSize = function () {
  return this.minClusterSize_;
};
/**
 * Sets the value of the <code>minimumClusterSize</code> property.
 *
 * @param {number} minimumClusterSize The minimum cluster size.
 */
MarkerClusterer.prototype.setMinimumClusterSize = function (minimumClusterSize) {
  this.minClusterSize_ = minimumClusterSize;
};
/**
 *  Returns the value of the <code>maxZoom</code> property.
 *
 *  @return {number} The maximum zoom level.
 */
MarkerClusterer.prototype.getMaxZoom = function () {
  return this.maxZoom_;
};
/**
 *  Sets the value of the <code>maxZoom</code> property.
 *
 *  @param {number} maxZoom The maximum zoom level.
 */
MarkerClusterer.prototype.setMaxZoom = function (maxZoom) {
  this.maxZoom_ = maxZoom;
};
/**
 *  Returns the value of the <code>styles</code> property.
 *
 *  @return {Array} The array of styles defining the cluster markers to be used.
 */
MarkerClusterer.prototype.getStyles = function () {
  return this.styles_;
};
/**
 *  Sets the value of the <code>styles</code> property.
 *
 *  @param {Array.<ClusterIconStyle>} styles The array of styles to use.
 */
MarkerClusterer.prototype.setStyles = function (styles) {
  this.styles_ = styles;
};
/**
 * Returns the value of the <code>title</code> property.
 *
 * @return {string} The content of the title text.
 */
MarkerClusterer.prototype.getTitle = function () {
  return this.title_;
};
/**
 *  Sets the value of the <code>title</code> property.
 *
 *  @param {string} title The value of the title property.
 */
MarkerClusterer.prototype.setTitle = function (title) {
  this.title_ = title;
};
/**
 * Returns the value of the <code>zoomOnClick</code> property.
 *
 * @return {boolean} True if zoomOnClick property is set.
 */
MarkerClusterer.prototype.getZoomOnClick = function () {
  return this.zoomOnClick_;
};
/**
 *  Sets the value of the <code>zoomOnClick</code> property.
 *
 *  @param {boolean} zoomOnClick The value of the zoomOnClick property.
 */
MarkerClusterer.prototype.setZoomOnClick = function (zoomOnClick) {
  this.zoomOnClick_ = zoomOnClick;
};
/**
 * Returns the value of the <code>averageCenter</code> property.
 *
 * @return {boolean} True if averageCenter property is set.
 */
MarkerClusterer.prototype.getAverageCenter = function () {
  return this.averageCenter_;
};
/**
 *  Sets the value of the <code>averageCenter</code> property.
 *
 *  @param {boolean} averageCenter The value of the averageCenter property.
 */
MarkerClusterer.prototype.setAverageCenter = function (averageCenter) {
  this.averageCenter_ = averageCenter;
};
/**
 * Returns the value of the <code>ignoreHidden</code> property.
 *
 * @return {boolean} True if ignoreHidden property is set.
 */
MarkerClusterer.prototype.getIgnoreHidden = function () {
  return this.ignoreHidden_;
};
/**
 *  Sets the value of the <code>ignoreHidden</code> property.
 *
 *  @param {boolean} ignoreHidden The value of the ignoreHidden property.
 */
MarkerClusterer.prototype.setIgnoreHidden = function (ignoreHidden) {
  this.ignoreHidden_ = ignoreHidden;
};
/**
 * Returns the value of the <code>enableRetinaIcons</code> property.
 *
 * @return {boolean} True if enableRetinaIcons property is set.
 */
MarkerClusterer.prototype.getEnableRetinaIcons = function () {
  return this.enableRetinaIcons_;
};
/**
 *  Sets the value of the <code>enableRetinaIcons</code> property.
 *
 *  @param {boolean} enableRetinaIcons The value of the enableRetinaIcons property.
 */
MarkerClusterer.prototype.setEnableRetinaIcons = function (enableRetinaIcons) {
  this.enableRetinaIcons_ = enableRetinaIcons;
};
/**
 * Returns the value of the <code>imageExtension</code> property.
 *
 * @return {string} The value of the imageExtension property.
 */
MarkerClusterer.prototype.getImageExtension = function () {
  return this.imageExtension_;
};
/**
 *  Sets the value of the <code>imageExtension</code> property.
 *
 *  @param {string} imageExtension The value of the imageExtension property.
 */
MarkerClusterer.prototype.setImageExtension = function (imageExtension) {
  this.imageExtension_ = imageExtension;
};
/**
 * Returns the value of the <code>imagePath</code> property.
 *
 * @return {string} The value of the imagePath property.
 */
MarkerClusterer.prototype.getImagePath = function () {
  return this.imagePath_;
};
/**
 *  Sets the value of the <code>imagePath</code> property.
 *
 *  @param {string} imagePath The value of the imagePath property.
 */
MarkerClusterer.prototype.setImagePath = function (imagePath) {
  this.imagePath_ = imagePath;
};
/**
 * Returns the value of the <code>imageSizes</code> property.
 *
 * @return {Array} The value of the imageSizes property.
 */
MarkerClusterer.prototype.getImageSizes = function () {
  return this.imageSizes_;
};
/**
 *  Sets the value of the <code>imageSizes</code> property.
 *
 *  @param {Array} imageSizes The value of the imageSizes property.
 */
MarkerClusterer.prototype.setImageSizes = function (imageSizes) {
  this.imageSizes_ = imageSizes;
};
/**
 * Returns the value of the <code>calculator</code> property.
 *
 * @return {function} the value of the calculator property.
 */
MarkerClusterer.prototype.getCalculator = function () {
  return this.calculator_;
};
/**
 * Sets the value of the <code>calculator</code> property.
 *
 * @param {function(Array.<google.maps.Marker>, number)} calculator The value
 *  of the calculator property.
 */
MarkerClusterer.prototype.setCalculator = function (calculator) {
  this.calculator_ = calculator;
};
/**
 * Returns the value of the <code>batchSizeIE</code> property.
 *
 * @return {number} the value of the batchSizeIE property.
 */
MarkerClusterer.prototype.getBatchSizeIE = function () {
  return this.batchSizeIE_;
};
/**
 * Sets the value of the <code>batchSizeIE</code> property.
 *
 *  @param {number} batchSizeIE The value of the batchSizeIE property.
 */
MarkerClusterer.prototype.setBatchSizeIE = function (batchSizeIE) {
  this.batchSizeIE_ = batchSizeIE;
};
/**
 * Returns the value of the <code>clusterClass</code> property.
 *
 * @return {string} the value of the clusterClass property.
 */
MarkerClusterer.prototype.getClusterClass = function () {
  return this.clusterClass_;
};
/**
 * Sets the value of the <code>clusterClass</code> property.
 *
 *  @param {string} clusterClass The value of the clusterClass property.
 */
MarkerClusterer.prototype.setClusterClass = function (clusterClass) {
  this.clusterClass_ = clusterClass;
};
/**
 *  Returns the array of markers managed by the clusterer.
 *
 *  @return {Array} The array of markers managed by the clusterer.
 */
MarkerClusterer.prototype.getMarkers = function () {
  return this.markers_;
};
/**
 *  Returns the number of markers managed by the clusterer.
 *
 *  @return {number} The number of markers.
 */
MarkerClusterer.prototype.getTotalMarkers = function () {
  return this.markers_.length;
};
/**
 * Returns the current array of clusters formed by the clusterer.
 *
 * @return {Array} The array of clusters formed by the clusterer.
 */
MarkerClusterer.prototype.getClusters = function () {
  return this.clusters_;
};
/**
 * Returns the number of clusters formed by the clusterer.
 *
 * @return {number} The number of clusters formed by the clusterer.
 */
MarkerClusterer.prototype.getTotalClusters = function () {
  return this.clusters_.length;
};
/**
 * Adds a marker to the clusterer. The clusters are redrawn unless
 *  <code>opt_nodraw</code> is set to <code>true</code>.
 *
 * @param {google.maps.Marker} marker The marker to add.
 * @param {boolean} [opt_nodraw] Set to <code>true</code> to prevent redrawing.
 */
MarkerClusterer.prototype.addMarker = function (marker, opt_nodraw) {
  this.pushMarkerTo_(marker);
  if (!opt_nodraw) {
    this.redraw_();
  }
};
/**
 * Adds an array of markers to the clusterer. The clusters are redrawn unless
 *  <code>opt_nodraw</code> is set to <code>true</code>.
 *
 * @param {Array.<google.maps.Marker>} markers The markers to add.
 * @param {boolean} [opt_nodraw] Set to <code>true</code> to prevent redrawing.
 */
MarkerClusterer.prototype.addMarkers = function (markers, opt_nodraw) {
  var key;
  for (key in markers) {
    if (markers.hasOwnProperty(key)) {
      this.pushMarkerTo_(markers[key]);
    }
  }
  if (!opt_nodraw) {
    this.redraw_();
  }
};
/**
 * Pushes a marker to the clusterer.
 *
 * @param {google.maps.Marker} marker The marker to add.
 */
MarkerClusterer.prototype.pushMarkerTo_ = function (marker) {
  // If the marker is draggable add a listener so we can update the clusters on the dragend:
  if (marker.getDraggable()) {
    var cMarkerClusterer = this;
    google.maps.event.addListener(marker, 'dragend', function () {
      if (cMarkerClusterer.ready_) {
        this.isAdded = false;
        cMarkerClusterer.repaint();
      }
    });
  }
  marker.isAdded = false;
  this.markers_.push(marker);
};
/**
 * Removes a marker from the cluster.  The clusters are redrawn unless
 *  <code>opt_nodraw</code> is set to <code>true</code>. Returns <code>true</code> if the
 *  marker was removed from the clusterer.
 *
 * @param {google.maps.Marker} marker The marker to remove.
 * @param {boolean} [opt_nodraw] Set to <code>true</code> to prevent redrawing.
 * @return {boolean} True if the marker was removed from the clusterer.
 */
MarkerClusterer.prototype.removeMarker = function (marker, opt_nodraw) {
  var removed = this.removeMarker_(marker);
  if (!opt_nodraw && removed) {
    this.repaint();
  }
  return removed;
};
/**
 * Removes an array of markers from the cluster. The clusters are redrawn unless
 *  <code>opt_nodraw</code> is set to <code>true</code>. Returns <code>true</code> if markers
 *  were removed from the clusterer.
 *
 * @param {Array.<google.maps.Marker>} markers The markers to remove.
 * @param {boolean} [opt_nodraw] Set to <code>true</code> to prevent redrawing.
 * @return {boolean} True if markers were removed from the clusterer.
 */
MarkerClusterer.prototype.removeMarkers = function (markers, opt_nodraw) {
  var i, r;
  var removed = false;
  for (i = 0; i < markers.length; i++) {
    r = this.removeMarker_(markers[i]);
    removed = removed || r;
  }
  if (!opt_nodraw && removed) {
    this.repaint();
  }
  return removed;
};
/**
 * Removes a marker and returns true if removed, false if not.
 *
 * @param {google.maps.Marker} marker The marker to remove
 * @return {boolean} Whether the marker was removed or not
 */
MarkerClusterer.prototype.removeMarker_ = function (marker) {
  var i;
  var index = -1;
  if (this.markers_.indexOf) {
    index = this.markers_.indexOf(marker);
  } else {
    for (i = 0; i < this.markers_.length; i++) {
      if (marker === this.markers_[i]) {
        index = i;
        break;
      }
    }
  }
  if (index === -1) {
    // Marker is not in our list of markers, so do nothing:
    return false;
  }
  marker.setMap(null);
  this.markers_.splice(index, 1);
  // Remove the marker from the list of managed markers
  return true;
};
/**
 * Removes all clusters and markers from the map and also removes all markers
 *  managed by the clusterer.
 */
MarkerClusterer.prototype.clearMarkers = function () {
  this.resetViewport_(true);
  this.markers_ = [];
};
/**
 * Recalculates and redraws all the marker clusters from scratch.
 *  Call this after changing any properties.
 */
MarkerClusterer.prototype.repaint = function () {
  var oldClusters = this.clusters_.slice();
  this.clusters_ = [];
  this.resetViewport_(false);
  this.redraw_();
  // Remove the old clusters.
  // Do it in a timeout to prevent blinking effect.
  setTimeout(function () {
    var i;
    for (i = 0; i < oldClusters.length; i++) {
      oldClusters[i].remove();
    }
  }, 0);
};
/**
 * Returns the current bounds extended by the grid size.
 *
 * @param {google.maps.LatLngBounds} bounds The bounds to extend.
 * @return {google.maps.LatLngBounds} The extended bounds.
 * @ignore
 */
MarkerClusterer.prototype.getExtendedBounds = function (bounds) {
  var projection = this.getProjection();
  // Turn the bounds into latlng.
  var tr = new google.maps.LatLng(bounds.getNorthEast().lat(), bounds.getNorthEast().lng());
  var bl = new google.maps.LatLng(bounds.getSouthWest().lat(), bounds.getSouthWest().lng());
  // Convert the points to pixels and the extend out by the grid size.
  var trPix = projection.fromLatLngToDivPixel(tr);
  trPix.x += this.gridSize_;
  trPix.y -= this.gridSize_;
  var blPix = projection.fromLatLngToDivPixel(bl);
  blPix.x -= this.gridSize_;
  blPix.y += this.gridSize_;
  // Convert the pixel points back to LatLng
  var ne = projection.fromDivPixelToLatLng(trPix);
  var sw = projection.fromDivPixelToLatLng(blPix);
  // Extend the bounds to contain the new bounds.
  bounds.extend(ne);
  bounds.extend(sw);
  return bounds;
};
/**
 * Redraws all the clusters.
 */
MarkerClusterer.prototype.redraw_ = function () {
  this.createClusters_(0);
};
/**
 * Removes all clusters from the map. The markers are also removed from the map
 *  if <code>opt_hide</code> is set to <code>true</code>.
 *
 * @param {boolean} [opt_hide] Set to <code>true</code> to also remove the markers
 *  from the map.
 */
MarkerClusterer.prototype.resetViewport_ = function (opt_hide) {
  var i, marker;
  // Remove all the clusters
  for (i = 0; i < this.clusters_.length; i++) {
    this.clusters_[i].remove();
  }
  this.clusters_ = [];
  // Reset the markers to not be added and to be removed from the map.
  for (i = 0; i < this.markers_.length; i++) {
    marker = this.markers_[i];
    marker.isAdded = false;
    if (opt_hide) {
      marker.setMap(null);
    }
  }
};
/**
 * Calculates the distance between two latlng locations in km.
 *
 * @param {google.maps.LatLng} p1 The first lat lng point.
 * @param {google.maps.LatLng} p2 The second lat lng point.
 * @return {number} The distance between the two points in km.
 * @see http://www.movable-type.co.uk/scripts/latlong.html
 */
MarkerClusterer.prototype.distanceBetweenPoints_ = function (p1, p2) {
  var R = 6371;
  // Radius of the Earth in km
  var dLat = (p2.lat() - p1.lat()) * Math.PI / 180;
  var dLon = (p2.lng() - p1.lng()) * Math.PI / 180;
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(p1.lat() * Math.PI / 180) * Math.cos(p2.lat() * Math.PI / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d;
};
/**
 * Determines if a marker is contained in a bounds.
 *
 * @param {google.maps.Marker} marker The marker to check.
 * @param {google.maps.LatLngBounds} bounds The bounds to check against.
 * @return {boolean} True if the marker is in the bounds.
 */
MarkerClusterer.prototype.isMarkerInBounds_ = function (marker, bounds) {
  return bounds.contains(marker.getPosition());
};
/**
 * Adds a marker to a cluster, or creates a new cluster.
 *
 * @param {google.maps.Marker} marker The marker to add.
 */
MarkerClusterer.prototype.addToClosestCluster_ = function (marker) {
  var i, d, cluster, center;
  var distance = 40000;
  // Some large number
  var clusterToAddTo = null;
  for (i = 0; i < this.clusters_.length; i++) {
    cluster = this.clusters_[i];
    center = cluster.getCenter();
    if (center) {
      d = this.distanceBetweenPoints_(center, marker.getPosition());
      if (d < distance) {
        distance = d;
        clusterToAddTo = cluster;
      }
    }
  }
  if (clusterToAddTo && clusterToAddTo.isMarkerInClusterBounds(marker)) {
    clusterToAddTo.addMarker(marker);
  } else {
    cluster = new Cluster(this);
    cluster.addMarker(marker);
    this.clusters_.push(cluster);
  }
};
/**
 * Creates the clusters. This is done in batches to avoid timeout errors
 *  in some browsers when there is a huge number of markers.
 *
 * @param {number} iFirst The index of the first marker in the batch of
 *  markers to be added to clusters.
 */
MarkerClusterer.prototype.createClusters_ = function (iFirst) {
  var i, marker;
  var mapBounds;
  var cMarkerClusterer = this;
  if (!this.ready_) {
    return;
  }
  // Cancel previous batch processing if we're working on the first batch:
  if (iFirst === 0) {
    /**
         * This event is fired when the <code>MarkerClusterer</code> begins
         *  clustering markers.
         * @name MarkerClusterer#clusteringbegin
         * @param {MarkerClusterer} mc The MarkerClusterer whose markers are being clustered.
         * @event
         */
    google.maps.event.trigger(this, 'clusteringbegin', this);
    if (typeof this.timerRefStatic !== 'undefined') {
      clearTimeout(this.timerRefStatic);
      delete this.timerRefStatic;
    }
  }
  // Get our current map view bounds.
  // Create a new bounds object so we don't affect the map.
  //
  // See Comments 9 & 11 on Issue 3651 relating to this workaround for a Google Maps bug:
  if (this.getMap().getZoom() > 3) {
    mapBounds = new google.maps.LatLngBounds(this.getMap().getBounds().getSouthWest(), this.getMap().getBounds().getNorthEast());
  } else {
    mapBounds = new google.maps.LatLngBounds(new google.maps.LatLng(85.02070771743472, -178.48388434375), new google.maps.LatLng(-85.08136444384544, 178.00048865625));
  }
  var bounds = this.getExtendedBounds(mapBounds);
  var iLast = Math.min(iFirst + this.batchSize_, this.markers_.length);
  for (i = iFirst; i < iLast; i++) {
    marker = this.markers_[i];
    if (!marker.isAdded && this.isMarkerInBounds_(marker, bounds)) {
      if (!this.ignoreHidden_ || this.ignoreHidden_ && marker.getVisible()) {
        this.addToClosestCluster_(marker);
      }
    }
  }
  if (iLast < this.markers_.length) {
    this.timerRefStatic = setTimeout(function () {
      cMarkerClusterer.createClusters_(iLast);
    }, 0);
  } else {
    delete this.timerRefStatic;
    /**
         * This event is fired when the <code>MarkerClusterer</code> stops
         *  clustering markers.
         * @name MarkerClusterer#clusteringend
         * @param {MarkerClusterer} mc The MarkerClusterer whose markers are being clustered.
         * @event
         */
    google.maps.event.trigger(this, 'clusteringend', this);
  }
};
/**
 * Extends an object's prototype by another's.
 *
 * @param {Object} obj1 The object to be extended.
 * @param {Object} obj2 The object to extend with.
 * @return {Object} The new extended object.
 * @ignore
 */
MarkerClusterer.prototype.extend = function (obj1, obj2) {
  return function (object) {
    var property;
    for (property in object.prototype) {
      this.prototype[property] = object.prototype[property];
    }
    return this;
  }.apply(obj1, [obj2]);
};
/**
 * The default function for determining the label text and style
 * for a cluster icon.
 *
 * @param {Array.<google.maps.Marker>} markers The array of markers represented by the cluster.
 * @param {number} numStyles The number of marker styles available.
 * @return {ClusterIconInfo} The information resource for the cluster.
 * @constant
 * @ignore
 */
MarkerClusterer.CALCULATOR = function (markers, numStyles) {
  var index = 0;
  var title = '';
  var count = markers.length.toString();
  var dv = count;
  while (dv !== 0) {
    dv = parseInt(dv / 10, 10);
    index++;
  }
  index = Math.min(index, numStyles);
  return {
    text: count,
    index: index,
    title: title
  };
};
/**
 * The number of markers to process in one batch.
 *
 * @type {number}
 * @constant
 */
MarkerClusterer.BATCH_SIZE = 2000;
/**
 * The number of markers to process in one batch (IE only).
 *
 * @type {number}
 * @constant
 */
MarkerClusterer.BATCH_SIZE_IE = 500;
/**
 * The default root name for the marker cluster images.
 *
 * @type {string}
 * @constant
 */
MarkerClusterer.IMAGE_PATH = 'http://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclustererplus/images/m';
/**
 * The default extension name for the marker cluster images.
 *
 * @type {string}
 * @constant
 */
MarkerClusterer.IMAGE_EXTENSION = 'png';
/**
 * The default array of sizes for the marker cluster images.
 *
 * @type {Array.<number>}
 * @constant
 */
MarkerClusterer.IMAGE_SIZES = [
  53,
  56,
  66,
  78,
  90
];
if (typeof String.prototype.trim !== 'function') {
  /**
     * IE hack since trim() doesn't exist in all browsers
     * @return {string} The string with removed whitespace
     */
  String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g, '');
  };
}
;
/**
 * 1.1.9-patched
 * @name MarkerWithLabel for V3
 * @version 1.1.8 [February 26, 2013]
 * @author Gary Little (inspired by code from Marc Ridey of Google).
 * @copyright Copyright 2012 Gary Little [gary at luxcentral.com]
 * @fileoverview MarkerWithLabel extends the Google Maps JavaScript API V3
 *  <code>google.maps.Marker</code> class.
 *  <p>
 *  MarkerWithLabel allows you to define markers with associated labels. As you would expect,
 *  if the marker is draggable, so too will be the label. In addition, a marker with a label
 *  responds to all mouse events in the same manner as a regular marker. It also fires mouse
 *  events and "property changed" events just as a regular marker would. Version 1.1 adds
 *  support for the raiseOnDrag feature introduced in API V3.3.
 *  <p>
 *  If you drag a marker by its label, you can cancel the drag and return the marker to its
 *  original position by pressing the <code>Esc</code> key. This doesn't work if you drag the marker
 *  itself because this feature is not (yet) supported in the <code>google.maps.Marker</code> class.
 */
/*!
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/*jslint browser:true */
/*global document,google */
/**
 * @param {Function} childCtor Child class.
 * @param {Function} parentCtor Parent class.
 */
function inherits(childCtor, parentCtor) {
  /** @constructor */
  function tempCtor() {
  }
  tempCtor.prototype = parentCtor.prototype;
  childCtor.superClass_ = parentCtor.prototype;
  childCtor.prototype = new tempCtor();
  /** @override */
  childCtor.prototype.constructor = childCtor;
}
/**
 * This constructor creates a label and associates it with a marker.
 * It is for the private use of the MarkerWithLabel class.
 * @constructor
 * @param {Marker} marker The marker with which the label is to be associated.
 * @param {string} crossURL The URL of the cross image =.
 * @param {string} handCursor The URL of the hand cursor.
 * @private
 */
function MarkerLabel_(marker, crossURL, handCursorURL) {
  this.marker_ = marker;
  this.handCursorURL_ = marker.handCursorURL;
  this.labelDiv_ = document.createElement('div');
  this.labelDiv_.style.cssText = 'position: absolute; overflow: hidden;';
  // Set up the DIV for handling mouse events in the label. This DIV forms a transparent veil
  // in the "overlayMouseTarget" pane, a veil that covers just the label. This is done so that
  // events can be captured even if the label is in the shadow of a google.maps.InfoWindow.
  // Code is included here to ensure the veil is always exactly the same size as the label.
  this.eventDiv_ = document.createElement('div');
  this.eventDiv_.style.cssText = this.labelDiv_.style.cssText;
  // This is needed for proper behavior on MSIE:
  this.eventDiv_.setAttribute('onselectstart', 'return false;');
  this.eventDiv_.setAttribute('ondragstart', 'return false;');
  // Get the DIV for the "X" to be displayed when the marker is raised.
  this.crossDiv_ = MarkerLabel_.getSharedCross(crossURL);
}
inherits(MarkerLabel_, google.maps.OverlayView);
/**
 * Returns the DIV for the cross used when dragging a marker when the
 * raiseOnDrag parameter set to true. One cross is shared with all markers.
 * @param {string} crossURL The URL of the cross image =.
 * @private
 */
MarkerLabel_.getSharedCross = function (crossURL) {
  var div;
  if (typeof MarkerLabel_.getSharedCross.crossDiv === 'undefined') {
    div = document.createElement('img');
    div.style.cssText = 'position: absolute; z-index: 1000002; display: none;';
    // Hopefully Google never changes the standard "X" attributes:
    div.style.marginLeft = '-8px';
    div.style.marginTop = '-9px';
    div.src = crossURL;
    MarkerLabel_.getSharedCross.crossDiv = div;
  }
  return MarkerLabel_.getSharedCross.crossDiv;
};
/**
 * Adds the DIV representing the label to the DOM. This method is called
 * automatically when the marker's <code>setMap</code> method is called.
 * @private
 */
MarkerLabel_.prototype.onAdd = function () {
  var me = this;
  var cMouseIsDown = false;
  var cDraggingLabel = false;
  var cSavedZIndex;
  var cLatOffset, cLngOffset;
  var cIgnoreClick;
  var cRaiseEnabled;
  var cStartPosition;
  var cStartCenter;
  // Constants:
  var cRaiseOffset = 20;
  var cDraggingCursor = 'url(' + this.handCursorURL_ + ')';
  // Stops all processing of an event.
  //
  var cAbortEvent = function (e) {
    if (e.preventDefault) {
      e.preventDefault();
    }
    e.cancelBubble = true;
    if (e.stopPropagation) {
      e.stopPropagation();
    }
  };
  var cStopBounce = function () {
    me.marker_.setAnimation(null);
  };
  this.getPanes().overlayImage.appendChild(this.labelDiv_);
  this.getPanes().overlayMouseTarget.appendChild(this.eventDiv_);
  // One cross is shared with all markers, so only add it once:
  if (typeof MarkerLabel_.getSharedCross.processed === 'undefined') {
    this.getPanes().overlayImage.appendChild(this.crossDiv_);
    MarkerLabel_.getSharedCross.processed = true;
  }
  this.listeners_ = [
    google.maps.event.addDomListener(this.eventDiv_, 'mouseover', function (e) {
      if (me.marker_.getDraggable() || me.marker_.getClickable()) {
        this.style.cursor = 'pointer';
        google.maps.event.trigger(me.marker_, 'mouseover', e);
      }
    }),
    google.maps.event.addDomListener(this.eventDiv_, 'mouseout', function (e) {
      if ((me.marker_.getDraggable() || me.marker_.getClickable()) && !cDraggingLabel) {
        this.style.cursor = me.marker_.getCursor();
        google.maps.event.trigger(me.marker_, 'mouseout', e);
      }
    }),
    google.maps.event.addDomListener(this.eventDiv_, 'mousedown', function (e) {
      cDraggingLabel = false;
      if (me.marker_.getDraggable()) {
        cMouseIsDown = true;
        this.style.cursor = cDraggingCursor;
      }
      if (me.marker_.getDraggable() || me.marker_.getClickable()) {
        google.maps.event.trigger(me.marker_, 'mousedown', e);
        cAbortEvent(e);  // Prevent map pan when starting a drag on a label
      }
    }),
    google.maps.event.addDomListener(document, 'mouseup', function (mEvent) {
      var position;
      if (cMouseIsDown) {
        cMouseIsDown = false;
        me.eventDiv_.style.cursor = 'pointer';
        google.maps.event.trigger(me.marker_, 'mouseup', mEvent);
      }
      if (cDraggingLabel) {
        if (cRaiseEnabled) {
          // Lower the marker & label
          position = me.getProjection().fromLatLngToDivPixel(me.marker_.getPosition());
          position.y += cRaiseOffset;
          me.marker_.setPosition(me.getProjection().fromDivPixelToLatLng(position));
          // This is not the same bouncing style as when the marker portion is dragged,
          // but it will have to do:
          try {
            // Will fail if running Google Maps API earlier than V3.3
            me.marker_.setAnimation(google.maps.Animation.BOUNCE);
            setTimeout(cStopBounce, 1406);
          } catch (e) {
          }
        }
        me.crossDiv_.style.display = 'none';
        me.marker_.setZIndex(cSavedZIndex);
        cIgnoreClick = true;
        // Set flag to ignore the click event reported after a label drag
        cDraggingLabel = false;
        mEvent.latLng = me.marker_.getPosition();
        google.maps.event.trigger(me.marker_, 'dragend', mEvent);
      }
    }),
    google.maps.event.addListener(me.marker_.getMap(), 'mousemove', function (mEvent) {
      var position;
      if (cMouseIsDown) {
        if (cDraggingLabel) {
          // Change the reported location from the mouse position to the marker position:
          mEvent.latLng = new google.maps.LatLng(mEvent.latLng.lat() - cLatOffset, mEvent.latLng.lng() - cLngOffset);
          position = me.getProjection().fromLatLngToDivPixel(mEvent.latLng);
          if (cRaiseEnabled) {
            me.crossDiv_.style.left = position.x + 'px';
            me.crossDiv_.style.top = position.y + 'px';
            me.crossDiv_.style.display = '';
            position.y -= cRaiseOffset;
          }
          me.marker_.setPosition(me.getProjection().fromDivPixelToLatLng(position));
          if (cRaiseEnabled) {
            // Don't raise the veil; this hack needed to make MSIE act properly
            me.eventDiv_.style.top = position.y + cRaiseOffset + 'px';
          }
          google.maps.event.trigger(me.marker_, 'drag', mEvent);
        } else {
          // Calculate offsets from the click point to the marker position:
          cLatOffset = mEvent.latLng.lat() - me.marker_.getPosition().lat();
          cLngOffset = mEvent.latLng.lng() - me.marker_.getPosition().lng();
          cSavedZIndex = me.marker_.getZIndex();
          cStartPosition = me.marker_.getPosition();
          cStartCenter = me.marker_.getMap().getCenter();
          cRaiseEnabled = me.marker_.get('raiseOnDrag');
          cDraggingLabel = true;
          me.marker_.setZIndex(1000000);
          // Moves the marker & label to the foreground during a drag
          mEvent.latLng = me.marker_.getPosition();
          google.maps.event.trigger(me.marker_, 'dragstart', mEvent);
        }
      }
    }),
    google.maps.event.addDomListener(document, 'keydown', function (e) {
      if (cDraggingLabel) {
        if (e.keyCode === 27) {
          // Esc key
          cRaiseEnabled = false;
          me.marker_.setPosition(cStartPosition);
          me.marker_.getMap().setCenter(cStartCenter);
          google.maps.event.trigger(document, 'mouseup', e);
        }
      }
    }),
    google.maps.event.addDomListener(this.eventDiv_, 'click', function (e) {
      if (me.marker_.getDraggable() || me.marker_.getClickable()) {
        if (cIgnoreClick) {
          // Ignore the click reported when a label drag ends
          cIgnoreClick = false;
        } else {
          google.maps.event.trigger(me.marker_, 'click', e);
          cAbortEvent(e);  // Prevent click from being passed on to map
        }
      }
    }),
    google.maps.event.addDomListener(this.eventDiv_, 'dblclick', function (e) {
      if (me.marker_.getDraggable() || me.marker_.getClickable()) {
        google.maps.event.trigger(me.marker_, 'dblclick', e);
        cAbortEvent(e);  // Prevent map zoom when double-clicking on a label
      }
    }),
    google.maps.event.addListener(this.marker_, 'dragstart', function (mEvent) {
      if (!cDraggingLabel) {
        cRaiseEnabled = this.get('raiseOnDrag');
      }
    }),
    google.maps.event.addListener(this.marker_, 'drag', function (mEvent) {
      if (!cDraggingLabel) {
        if (cRaiseEnabled) {
          me.setPosition(cRaiseOffset);
          // During a drag, the marker's z-index is temporarily set to 1000000 to
          // ensure it appears above all other markers. Also set the label's z-index
          // to 1000000 (plus or minus 1 depending on whether the label is supposed
          // to be above or below the marker).
          me.labelDiv_.style.zIndex = 1000000 + (this.get('labelInBackground') ? -1 : +1);
        }
      }
    }),
    google.maps.event.addListener(this.marker_, 'dragend', function (mEvent) {
      if (!cDraggingLabel) {
        if (cRaiseEnabled) {
          me.setPosition(0);  // Also restores z-index of label
        }
      }
    }),
    google.maps.event.addListener(this.marker_, 'position_changed', function () {
      me.setPosition();
    }),
    google.maps.event.addListener(this.marker_, 'zindex_changed', function () {
      me.setZIndex();
    }),
    google.maps.event.addListener(this.marker_, 'visible_changed', function () {
      me.setVisible();
    }),
    google.maps.event.addListener(this.marker_, 'labelvisible_changed', function () {
      me.setVisible();
    }),
    google.maps.event.addListener(this.marker_, 'title_changed', function () {
      me.setTitle();
    }),
    google.maps.event.addListener(this.marker_, 'labelcontent_changed', function () {
      me.setContent();
    }),
    google.maps.event.addListener(this.marker_, 'labelanchor_changed', function () {
      me.setAnchor();
    }),
    google.maps.event.addListener(this.marker_, 'labelclass_changed', function () {
      me.setStyles();
    }),
    google.maps.event.addListener(this.marker_, 'labelstyle_changed', function () {
      me.setStyles();
    })
  ];
};
/**
 * Removes the DIV for the label from the DOM. It also removes all event handlers.
 * This method is called automatically when the marker's <code>setMap(null)</code>
 * method is called.
 * @private
 */
MarkerLabel_.prototype.onRemove = function () {
  var i;
  if (this.labelDiv_.parentNode !== null)
    this.labelDiv_.parentNode.removeChild(this.labelDiv_);
  if (this.eventDiv_.parentNode !== null)
    this.eventDiv_.parentNode.removeChild(this.eventDiv_);
  // Remove event listeners:
  for (i = 0; i < this.listeners_.length; i++) {
    google.maps.event.removeListener(this.listeners_[i]);
  }
};
/**
 * Draws the label on the map.
 * @private
 */
MarkerLabel_.prototype.draw = function () {
  this.setContent();
  this.setTitle();
  this.setStyles();
};
/**
 * Sets the content of the label.
 * The content can be plain text or an HTML DOM node.
 * @private
 */
MarkerLabel_.prototype.setContent = function () {
  var content = this.marker_.get('labelContent');
  if (typeof content.nodeType === 'undefined') {
    this.labelDiv_.innerHTML = content;
    this.eventDiv_.innerHTML = this.labelDiv_.innerHTML;
  } else {
    this.labelDiv_.innerHTML = '';
    // Remove current content
    this.labelDiv_.appendChild(content);
    content = content.cloneNode(true);
    this.eventDiv_.appendChild(content);
  }
};
/**
 * Sets the content of the tool tip for the label. It is
 * always set to be the same as for the marker itself.
 * @private
 */
MarkerLabel_.prototype.setTitle = function () {
  this.eventDiv_.title = this.marker_.getTitle() || '';
};
/**
 * Sets the style of the label by setting the style sheet and applying
 * other specific styles requested.
 * @private
 */
MarkerLabel_.prototype.setStyles = function () {
  var i, labelStyle;
  // Apply style values from the style sheet defined in the labelClass parameter:
  this.labelDiv_.className = this.marker_.get('labelClass');
  this.eventDiv_.className = this.labelDiv_.className;
  // Clear existing inline style values:
  this.labelDiv_.style.cssText = '';
  this.eventDiv_.style.cssText = '';
  // Apply style values defined in the labelStyle parameter:
  labelStyle = this.marker_.get('labelStyle');
  for (i in labelStyle) {
    if (labelStyle.hasOwnProperty(i)) {
      this.labelDiv_.style[i] = labelStyle[i];
      this.eventDiv_.style[i] = labelStyle[i];
    }
  }
  this.setMandatoryStyles();
};
/**
 * Sets the mandatory styles to the DIV representing the label as well as to the
 * associated event DIV. This includes setting the DIV position, z-index, and visibility.
 * @private
 */
MarkerLabel_.prototype.setMandatoryStyles = function () {
  this.labelDiv_.style.position = 'absolute';
  this.labelDiv_.style.overflow = 'hidden';
  // Make sure the opacity setting causes the desired effect on MSIE:
  if (typeof this.labelDiv_.style.opacity !== 'undefined' && this.labelDiv_.style.opacity !== '') {
    this.labelDiv_.style.MsFilter = '"progid:DXImageTransform.Microsoft.Alpha(opacity=' + this.labelDiv_.style.opacity * 100 + ')"';
    this.labelDiv_.style.filter = 'alpha(opacity=' + this.labelDiv_.style.opacity * 100 + ')';
  }
  this.eventDiv_.style.position = this.labelDiv_.style.position;
  this.eventDiv_.style.overflow = this.labelDiv_.style.overflow;
  this.eventDiv_.style.opacity = 0.01;
  // Don't use 0; DIV won't be clickable on MSIE
  this.eventDiv_.style.MsFilter = '"progid:DXImageTransform.Microsoft.Alpha(opacity=1)"';
  this.eventDiv_.style.filter = 'alpha(opacity=1)';
  // For MSIE
  this.setAnchor();
  this.setPosition();
  // This also updates z-index, if necessary.
  this.setVisible();
};
/**
 * Sets the anchor point of the label.
 * @private
 */
MarkerLabel_.prototype.setAnchor = function () {
  var anchor = this.marker_.get('labelAnchor');
  this.labelDiv_.style.marginLeft = -anchor.x + 'px';
  this.labelDiv_.style.marginTop = -anchor.y + 'px';
  this.eventDiv_.style.marginLeft = -anchor.x + 'px';
  this.eventDiv_.style.marginTop = -anchor.y + 'px';
};
/**
 * Sets the position of the label. The z-index is also updated, if necessary.
 * @private
 */
MarkerLabel_.prototype.setPosition = function (yOffset) {
  var position = this.getProjection().fromLatLngToDivPixel(this.marker_.getPosition());
  if (typeof yOffset === 'undefined') {
    yOffset = 0;
  }
  this.labelDiv_.style.left = Math.round(position.x) + 'px';
  this.labelDiv_.style.top = Math.round(position.y - yOffset) + 'px';
  this.eventDiv_.style.left = this.labelDiv_.style.left;
  this.eventDiv_.style.top = this.labelDiv_.style.top;
  this.setZIndex();
};
/**
 * Sets the z-index of the label. If the marker's z-index property has not been defined, the z-index
 * of the label is set to the vertical coordinate of the label. This is in keeping with the default
 * stacking order for Google Maps: markers to the south are in front of markers to the north.
 * @private
 */
MarkerLabel_.prototype.setZIndex = function () {
  var zAdjust = this.marker_.get('labelInBackground') ? -1 : +1;
  if (typeof this.marker_.getZIndex() === 'undefined') {
    this.labelDiv_.style.zIndex = parseInt(this.labelDiv_.style.top, 10) + zAdjust;
    this.eventDiv_.style.zIndex = this.labelDiv_.style.zIndex;
  } else {
    this.labelDiv_.style.zIndex = this.marker_.getZIndex() + zAdjust;
    this.eventDiv_.style.zIndex = this.labelDiv_.style.zIndex;
  }
};
/**
 * Sets the visibility of the label. The label is visible only if the marker itself is
 * visible (i.e., its visible property is true) and the labelVisible property is true.
 * @private
 */
MarkerLabel_.prototype.setVisible = function () {
  if (this.marker_.get('labelVisible')) {
    this.labelDiv_.style.display = this.marker_.getVisible() ? 'block' : 'none';
  } else {
    this.labelDiv_.style.display = 'none';
  }
  this.eventDiv_.style.display = this.labelDiv_.style.display;
};
/**
 * @name MarkerWithLabelOptions
 * @class This class represents the optional parameter passed to the {@link MarkerWithLabel} constructor.
 *  The properties available are the same as for <code>google.maps.Marker</code> with the addition
 *  of the properties listed below. To change any of these additional properties after the labeled
 *  marker has been created, call <code>google.maps.Marker.set(propertyName, propertyValue)</code>.
 *  <p>
 *  When any of these properties changes, a property changed event is fired. The names of these
 *  events are derived from the name of the property and are of the form <code>propertyname_changed</code>.
 *  For example, if the content of the label changes, a <code>labelcontent_changed</code> event
 *  is fired.
 *  <p>
 * @property {string|Node} [labelContent] The content of the label (plain text or an HTML DOM node).
 * @property {Point} [labelAnchor] By default, a label is drawn with its anchor point at (0,0) so
 *  that its top left corner is positioned at the anchor point of the associated marker. Use this
 *  property to change the anchor point of the label. For example, to center a 50px-wide label
 *  beneath a marker, specify a <code>labelAnchor</code> of <code>google.maps.Point(25, 0)</code>.
 *  (Note: x-values increase to the right and y-values increase to the top.)
 * @property {string} [labelClass] The name of the CSS class defining the styles for the label.
 *  Note that style values for <code>position</code>, <code>overflow</code>, <code>top</code>,
 *  <code>left</code>, <code>zIndex</code>, <code>display</code>, <code>marginLeft</code>, and
 *  <code>marginTop</code> are ignored; these styles are for internal use only.
 * @property {Object} [labelStyle] An object literal whose properties define specific CSS
 *  style values to be applied to the label. Style values defined here override those that may
 *  be defined in the <code>labelClass</code> style sheet. If this property is changed after the
 *  label has been created, all previously set styles (except those defined in the style sheet)
 *  are removed from the label before the new style values are applied.
 *  Note that style values for <code>position</code>, <code>overflow</code>, <code>top</code>,
 *  <code>left</code>, <code>zIndex</code>, <code>display</code>, <code>marginLeft</code>, and
 *  <code>marginTop</code> are ignored; these styles are for internal use only.
 * @property {boolean} [labelInBackground] A flag indicating whether a label that overlaps its
 *  associated marker should appear in the background (i.e., in a plane below the marker).
 *  The default is <code>false</code>, which causes the label to appear in the foreground.
 * @property {boolean} [labelVisible] A flag indicating whether the label is to be visible.
 *  The default is <code>true</code>. Note that even if <code>labelVisible</code> is
 *  <code>true</code>, the label will <i>not</i> be visible unless the associated marker is also
 *  visible (i.e., unless the marker's <code>visible</code> property is <code>true</code>).
 * @property {boolean} [raiseOnDrag] A flag indicating whether the label and marker are to be
 *  raised when the marker is dragged. The default is <code>true</code>. If a draggable marker is
 *  being created and a version of Google Maps API earlier than V3.3 is being used, this property
 *  must be set to <code>false</code>.
 * @property {boolean} [optimized] A flag indicating whether rendering is to be optimized for the
 *  marker. <b>Important: The optimized rendering technique is not supported by MarkerWithLabel,
 *  so the value of this parameter is always forced to <code>false</code>.
 * @property {string} [crossImage="http://maps.gstatic.com/intl/en_us/mapfiles/drag_cross_67_16.png"]
 *  The URL of the cross image to be displayed while dragging a marker.
 * @property {string} [handCursor="http://maps.gstatic.com/intl/en_us/mapfiles/closedhand_8_8.cur"]
 *  The URL of the cursor to be displayed while dragging a marker.
 */
/**
 * Creates a MarkerWithLabel with the options specified in {@link MarkerWithLabelOptions}.
 * @constructor
 * @param {MarkerWithLabelOptions} [opt_options] The optional parameters.
 */
function MarkerWithLabel(opt_options) {
  opt_options = opt_options || {};
  opt_options.labelContent = opt_options.labelContent || '';
  opt_options.labelAnchor = opt_options.labelAnchor || new google.maps.Point(0, 0);
  opt_options.labelClass = opt_options.labelClass || 'markerLabels';
  opt_options.labelStyle = opt_options.labelStyle || {};
  opt_options.labelInBackground = opt_options.labelInBackground || false;
  if (typeof opt_options.labelVisible === 'undefined') {
    opt_options.labelVisible = true;
  }
  if (typeof opt_options.raiseOnDrag === 'undefined') {
    opt_options.raiseOnDrag = true;
  }
  if (typeof opt_options.clickable === 'undefined') {
    opt_options.clickable = true;
  }
  if (typeof opt_options.draggable === 'undefined') {
    opt_options.draggable = false;
  }
  if (typeof opt_options.optimized === 'undefined') {
    opt_options.optimized = false;
  }
  opt_options.crossImage = opt_options.crossImage || 'http' + (document.location.protocol === 'https:' ? 's' : '') + '://maps.gstatic.com/intl/en_us/mapfiles/drag_cross_67_16.png';
  opt_options.handCursor = opt_options.handCursor || 'http' + (document.location.protocol === 'https:' ? 's' : '') + '://maps.gstatic.com/intl/en_us/mapfiles/closedhand_8_8.cur';
  opt_options.optimized = false;
  // Optimized rendering is not supported
  this.label = new MarkerLabel_(this, opt_options.crossImage, opt_options.handCursor);
  // Bind the label to the marker
  // Call the parent constructor. It calls Marker.setValues to initialize, so all
  // the new parameters are conveniently saved and can be accessed with get/set.
  // Marker.set triggers a property changed event (called "propertyname_changed")
  // that the marker label listens for in order to react to state changes.
  google.maps.Marker.apply(this, arguments);
}
inherits(MarkerWithLabel, google.maps.Marker);
/**
 * Overrides the standard Marker setMap function.
 * @param {Map} theMap The map to which the marker is to be added.
 * @private
 */
MarkerWithLabel.prototype.setMap = function (theMap) {
  // Call the inherited function...
  google.maps.Marker.prototype.setMap.apply(this, arguments);
  // ... then deal with the label:
  this.label.setMap(theMap);
};
/**
 * @license AngularJS v1.3.0-build.2909+sha.2e84cf9
 * (c) 2010-2014 Google, Inc. http://angularjs.org
 * License: MIT
 */
(function (window, angular, undefined) {
  'use strict';
  /* jshint maxlen: false */
  /**
 * @ngdoc module
 * @name ngAnimate
 * @description
 *
 * The `ngAnimate` module provides support for JavaScript, CSS3 transition and CSS3 keyframe animation hooks within existing core and custom directives.
 *
 * <div doc-module-components="ngAnimate"></div>
 *
 * # Usage
 *
 * To see animations in action, all that is required is to define the appropriate CSS classes
 * or to register a JavaScript animation via the myModule.animation() function. The directives that support animation automatically are:
 * `ngRepeat`, `ngInclude`, `ngIf`, `ngSwitch`, `ngShow`, `ngHide`, `ngView` and `ngClass`. Custom directives can take advantage of animation
 * by using the `$animate` service.
 *
 * Below is a more detailed breakdown of the supported animation events provided by pre-existing ng directives:
 *
 * | Directive                                                                                                 | Supported Animations                                                     |
 * |-----------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
 * | {@link ng.directive:ngRepeat#usage_animations ngRepeat}                                                   | enter, leave and move                                                    |
 * | {@link ngRoute.directive:ngView#usage_animations ngView}                                                  | enter and leave                                                          |
 * | {@link ng.directive:ngInclude#usage_animations ngInclude}                                                 | enter and leave                                                          |
 * | {@link ng.directive:ngSwitch#usage_animations ngSwitch}                                                   | enter and leave                                                          |
 * | {@link ng.directive:ngIf#usage_animations ngIf}                                                           | enter and leave                                                          |
 * | {@link ng.directive:ngClass#usage_animations ngClass}                                                     | add and remove (the CSS class(es) present)                               |
 * | {@link ng.directive:ngShow#usage_animations ngShow} & {@link ng.directive:ngHide#usage_animations ngHide} | add and remove (the ng-hide class value)                                 |
 * | {@link ng.directive:form#usage_animations form} & {@link ng.directive:ngModel#usage_animations ngModel}   | add and remove (dirty, pristine, valid, invalid & all other validations) |
 * | {@link ngMessages.directive:ngMessage#usage_animations ngMessages}                                        | add and remove (ng-active & ng-inactive)                                 |
 * | {@link ngMessages.directive:ngMessage#usage_animations ngMessage}                                         | enter and leave                                                          |
 *
 * You can find out more information about animations upon visiting each directive page.
 *
 * Below is an example of how to apply animations to a directive that supports animation hooks:
 *
 * ```html
 * <style type="text/css">
 * .slide.ng-enter, .slide.ng-leave {
 *   -webkit-transition:0.5s linear all;
 *   transition:0.5s linear all;
 * }
 *
 * .slide.ng-enter { }        /&#42; starting animations for enter &#42;/
 * .slide.ng-enter-active { } /&#42; terminal animations for enter &#42;/
 * .slide.ng-leave { }        /&#42; starting animations for leave &#42;/
 * .slide.ng-leave-active { } /&#42; terminal animations for leave &#42;/
 * </style>
 *
 * <!--
 * the animate service will automatically add .ng-enter and .ng-leave to the element
 * to trigger the CSS transition/animations
 * -->
 * <ANY class="slide" ng-include="..."></ANY>
 * ```
 *
 * Keep in mind that, by default, if an animation is running, any child elements cannot be animated
 * until the parent element's animation has completed. This blocking feature can be overridden by
 * placing the `ng-animate-children` attribute on a parent container tag.
 *
 * ```html
 * <div class="slide-animation" ng-if="on" ng-animate-children>
 *   <div class="fade-animation" ng-if="on">
 *     <div class="explode-animation" ng-if="on">
 *        ...
 *     </div>
 *   </div>
 * </div>
 * ```
 *
 * When the `on` expression value changes and an animation is triggered then each of the elements within
 * will all animate without the block being applied to child elements.
 *
 * <h2>CSS-defined Animations</h2>
 * The animate service will automatically apply two CSS classes to the animated element and these two CSS classes
 * are designed to contain the start and end CSS styling. Both CSS transitions and keyframe animations are supported
 * and can be used to play along with this naming structure.
 *
 * The following code below demonstrates how to perform animations using **CSS transitions** with Angular:
 *
 * ```html
 * <style type="text/css">
 * /&#42;
 *  The animate class is apart of the element and the ng-enter class
 *  is attached to the element once the enter animation event is triggered
 * &#42;/
 * .reveal-animation.ng-enter {
 *  -webkit-transition: 1s linear all; /&#42; Safari/Chrome &#42;/
 *  transition: 1s linear all; /&#42; All other modern browsers and IE10+ &#42;/
 *
 *  /&#42; The animation preparation code &#42;/
 *  opacity: 0;
 * }
 *
 * /&#42;
 *  Keep in mind that you want to combine both CSS
 *  classes together to avoid any CSS-specificity
 *  conflicts
 * &#42;/
 * .reveal-animation.ng-enter.ng-enter-active {
 *  /&#42; The animation code itself &#42;/
 *  opacity: 1;
 * }
 * </style>
 *
 * <div class="view-container">
 *   <div ng-view class="reveal-animation"></div>
 * </div>
 * ```
 *
 * The following code below demonstrates how to perform animations using **CSS animations** with Angular:
 *
 * ```html
 * <style type="text/css">
 * .reveal-animation.ng-enter {
 *   -webkit-animation: enter_sequence 1s linear; /&#42; Safari/Chrome &#42;/
 *   animation: enter_sequence 1s linear; /&#42; IE10+ and Future Browsers &#42;/
 * }
 * @-webkit-keyframes enter_sequence {
 *   from { opacity:0; }
 *   to { opacity:1; }
 * }
 * @keyframes enter_sequence {
 *   from { opacity:0; }
 *   to { opacity:1; }
 * }
 * </style>
 *
 * <div class="view-container">
 *   <div ng-view class="reveal-animation"></div>
 * </div>
 * ```
 *
 * Both CSS3 animations and transitions can be used together and the animate service will figure out the correct duration and delay timing.
 *
 * Upon DOM mutation, the event class is added first (something like `ng-enter`), then the browser prepares itself to add
 * the active class (in this case `ng-enter-active`) which then triggers the animation. The animation module will automatically
 * detect the CSS code to determine when the animation ends. Once the animation is over then both CSS classes will be
 * removed from the DOM. If a browser does not support CSS transitions or CSS animations then the animation will start and end
 * immediately resulting in a DOM element that is at its final state. This final state is when the DOM element
 * has no CSS transition/animation classes applied to it.
 *
 * ### Structural transition animations
 *
 * Structural transitions (such as enter, leave and move) will always apply a `0s none` transition
 * value to force the browser into rendering the styles defined in the setup (.ng-enter, .ng-leave
 * or .ng-move) class. This means that any active transition animations operating on the element
 * will be cut off to make way for the enter, leave or move animation.
 *
 * ### Class-based transition animations
 *
 * Class-based transitions refer to transition animations that are triggered when a CSS class is
 * added to or removed from the element (via `$animate.addClass`, `$animate.removeClass`,
 * `$animate.setClass`, or by directives such as `ngClass`, `ngModel` and `form`).
 * They are different when compared to structural animations since they **do not cancel existing
 * animations** nor do they **block successive transitions** from rendering on the same element.
 * This distinction allows for **multiple class-based transitions** to be performed on the same element.
 *
 * In addition to ngAnimate supporting the default (natural) functionality of class-based transition
 * animations, ngAnimate also decorates the element with starting and ending CSS classes to aid the
 * developer in further styling the element throughout the transition animation. Earlier versions
 * of ngAnimate may have caused natural CSS transitions to break and not render properly due to
 * $animate temporarily blocking transitions using `0s none` in order to allow the setup CSS class
 * (the `-add` or `-remove` class) to be applied without triggering an animation. However, as of
 * **version 1.3**, this workaround has been removed with ngAnimate and all non-ngAnimate CSS
 * class transitions are compatible with ngAnimate.
 *
 * There is, however, one special case when dealing with class-based transitions in ngAnimate.
 * When rendering class-based transitions that make use of the setup and active CSS classes
 * (e.g. `.fade-add` and `.fade-add-active` for when `.fade` is added) be sure to define
 * the transition value **on the active CSS class** and not the setup class.
 *
 * ```css
 * .fade-add {
 *   /&#42; remember to place a 0s transition here
 *      to ensure that the styles are applied instantly
 *      even if the element already has a transition style &#42;/
 *   transition:0s linear all;
 *
 *   /&#42; starting CSS styles &#42;/
 *   opacity:1;
 * }
 * .fade-add.fade-add-active {
 *   /&#42; this will be the length of the animation &#42;/
 *   transition:1s linear all;
 *   opacity:0;
 * }
 * ```
 *
 * The setup CSS class (in this case `.fade-add`) also has a transition style property, however, it
 * has a duration of zero. This may not be required, however, incase the browser is unable to render
 * the styling present in this CSS class instantly then it could be that the browser is attempting
 * to perform an unnecessary transition.
 *
 * This workaround, however, does not apply to  standard class-based transitions that are rendered
 * when a CSS class containing a transition is applied to an element:
 *
 * ```css
 * .fade {
 *   /&#42; this works as expected &#42;/
 *   transition:1s linear all;
 *   opacity:0;
 * }
 * ```
 *
 * Please keep this in mind when coding the CSS markup that will be used within class-based transitions.
 * Also, try not to mix the two class-based animation flavors together since the CSS code may become
 * overly complex.
 *
 * ### CSS Staggering Animations
 * A Staggering animation is a collection of animations that are issued with a slight delay in between each successive operation resulting in a
 * curtain-like effect. The ngAnimate module, as of 1.2.0, supports staggering animations and the stagger effect can be
 * performed by creating a **ng-EVENT-stagger** CSS class and attaching that class to the base CSS class used for
 * the animation. The style property expected within the stagger class can either be a **transition-delay** or an
 * **animation-delay** property (or both if your animation contains both transitions and keyframe animations).
 *
 * ```css
 * .my-animation.ng-enter {
 *   /&#42; standard transition code &#42;/
 *   -webkit-transition: 1s linear all;
 *   transition: 1s linear all;
 *   opacity:0;
 * }
 * .my-animation.ng-enter-stagger {
 *   /&#42; this will have a 100ms delay between each successive leave animation &#42;/
 *   -webkit-transition-delay: 0.1s;
 *   transition-delay: 0.1s;
 *
 *   /&#42; in case the stagger doesn't work then these two values
 *    must be set to 0 to avoid an accidental CSS inheritance &#42;/
 *   -webkit-transition-duration: 0s;
 *   transition-duration: 0s;
 * }
 * .my-animation.ng-enter.ng-enter-active {
 *   /&#42; standard transition styles &#42;/
 *   opacity:1;
 * }
 * ```
 *
 * Staggering animations work by default in ngRepeat (so long as the CSS class is defined). Outside of ngRepeat, to use staggering animations
 * on your own, they can be triggered by firing multiple calls to the same event on $animate. However, the restrictions surrounding this
 * are that each of the elements must have the same CSS className value as well as the same parent element. A stagger operation
 * will also be reset if more than 10ms has passed after the last animation has been fired.
 *
 * The following code will issue the **ng-leave-stagger** event on the element provided:
 *
 * ```js
 * var kids = parent.children();
 *
 * $animate.leave(kids[0]); //stagger index=0
 * $animate.leave(kids[1]); //stagger index=1
 * $animate.leave(kids[2]); //stagger index=2
 * $animate.leave(kids[3]); //stagger index=3
 * $animate.leave(kids[4]); //stagger index=4
 *
 * $timeout(function() {
 *   //stagger has reset itself
 *   $animate.leave(kids[5]); //stagger index=0
 *   $animate.leave(kids[6]); //stagger index=1
 * }, 100, false);
 * ```
 *
 * Stagger animations are currently only supported within CSS-defined animations.
 *
 * <h2>JavaScript-defined Animations</h2>
 * In the event that you do not want to use CSS3 transitions or CSS3 animations or if you wish to offer animations on browsers that do not
 * yet support CSS transitions/animations, then you can make use of JavaScript animations defined inside of your AngularJS module.
 *
 * ```js
 * //!annotate="YourApp" Your AngularJS Module|Replace this or ngModule with the module that you used to define your application.
 * var ngModule = angular.module('YourApp', ['ngAnimate']);
 * ngModule.animation('.my-crazy-animation', function() {
 *   return {
 *     enter: function(element, done) {
 *       //run the animation here and call done when the animation is complete
 *       return function(cancelled) {
 *         //this (optional) function will be called when the animation
 *         //completes or when the animation is cancelled (the cancelled
 *         //flag will be set to true if cancelled).
 *       };
 *     },
 *     leave: function(element, done) { },
 *     move: function(element, done) { },
 *
 *     //animation that can be triggered before the class is added
 *     beforeAddClass: function(element, className, done) { },
 *
 *     //animation that can be triggered after the class is added
 *     addClass: function(element, className, done) { },
 *
 *     //animation that can be triggered before the class is removed
 *     beforeRemoveClass: function(element, className, done) { },
 *
 *     //animation that can be triggered after the class is removed
 *     removeClass: function(element, className, done) { }
 *   };
 * });
 * ```
 *
 * JavaScript-defined animations are created with a CSS-like class selector and a collection of events which are set to run
 * a javascript callback function. When an animation is triggered, $animate will look for a matching animation which fits
 * the element's CSS class attribute value and then run the matching animation event function (if found).
 * In other words, if the CSS classes present on the animated element match any of the JavaScript animations then the callback function will
 * be executed. It should be also noted that only simple, single class selectors are allowed (compound class selectors are not supported).
 *
 * Within a JavaScript animation, an object containing various event callback animation functions is expected to be returned.
 * As explained above, these callbacks are triggered based on the animation event. Therefore if an enter animation is run,
 * and the JavaScript animation is found, then the enter callback will handle that animation (in addition to the CSS keyframe animation
 * or transition code that is defined via a stylesheet).
 *
 */
  angular.module('ngAnimate', ['ng']).directive('ngAnimateChildren', function () {
    var NG_ANIMATE_CHILDREN = '$$ngAnimateChildren';
    return function (scope, element, attrs) {
      var val = attrs.ngAnimateChildren;
      if (angular.isString(val) && val.length === 0) {
        //empty attribute
        element.data(NG_ANIMATE_CHILDREN, true);
      } else {
        scope.$watch(val, function (value) {
          element.data(NG_ANIMATE_CHILDREN, !!value);
        });
      }
    };
  }).factory('$$animateReflow', [
    '$$rAF',
    '$document',
    function ($$rAF, $document) {
      var bod = $document[0].body;
      return function (fn) {
        //the returned function acts as the cancellation function
        return $$rAF(function () {
          //the line below will force the browser to perform a repaint
          //so that all the animated elements within the animation frame
          //will be properly updated and drawn on screen. This is
          //required to perform multi-class CSS based animations with
          //Firefox. DO NOT REMOVE THIS LINE.
          var a = bod.offsetWidth + 1;
          fn();
        });
      };
    }
  ]).config([
    '$provide',
    '$animateProvider',
    function ($provide, $animateProvider) {
      var noop = angular.noop;
      var forEach = angular.forEach;
      var selectors = $animateProvider.$$selectors;
      var ELEMENT_NODE = 1;
      var NG_ANIMATE_STATE = '$$ngAnimateState';
      var NG_ANIMATE_CHILDREN = '$$ngAnimateChildren';
      var NG_ANIMATE_CLASS_NAME = 'ng-animate';
      var rootAnimateState = { running: true };
      function extractElementNode(element) {
        for (var i = 0; i < element.length; i++) {
          var elm = element[i];
          if (elm.nodeType == ELEMENT_NODE) {
            return elm;
          }
        }
      }
      function prepareElement(element) {
        return element && angular.element(element);
      }
      function stripCommentsFromElement(element) {
        return angular.element(extractElementNode(element));
      }
      function isMatchingElement(elm1, elm2) {
        return extractElementNode(elm1) == extractElementNode(elm2);
      }
      $provide.decorator('$animate', [
        '$delegate',
        '$injector',
        '$sniffer',
        '$rootElement',
        '$$asyncCallback',
        '$rootScope',
        '$document',
        function ($delegate, $injector, $sniffer, $rootElement, $$asyncCallback, $rootScope, $document) {
          var globalAnimationCounter = 0;
          $rootElement.data(NG_ANIMATE_STATE, rootAnimateState);
          // disable animations during bootstrap, but once we bootstrapped, wait again
          // for another digest until enabling animations. The reason why we digest twice
          // is because all structural animations (enter, leave and move) all perform a
          // post digest operation before animating. If we only wait for a single digest
          // to pass then the structural animation would render its animation on page load.
          // (which is what we're trying to avoid when the application first boots up.)
          $rootScope.$$postDigest(function () {
            $rootScope.$$postDigest(function () {
              rootAnimateState.running = false;
            });
          });
          var classNameFilter = $animateProvider.classNameFilter();
          var isAnimatableClassName = !classNameFilter ? function () {
              return true;
            } : function (className) {
              return classNameFilter.test(className);
            };
          function blockElementAnimations(element) {
            var data = element.data(NG_ANIMATE_STATE) || {};
            data.running = true;
            element.data(NG_ANIMATE_STATE, data);
          }
          function runAnimationPostDigest(fn) {
            var cancelFn;
            $rootScope.$$postDigest(function () {
              cancelFn = fn();
            });
            return function () {
              cancelFn && cancelFn();
            };
          }
          function lookup(name) {
            if (name) {
              var matches = [], flagMap = {}, classes = name.substr(1).split('.');
              //the empty string value is the default animation
              //operation which performs CSS transition and keyframe
              //animations sniffing. This is always included for each
              //element animation procedure if the browser supports
              //transitions and/or keyframe animations. The default
              //animation is added to the top of the list to prevent
              //any previous animations from affecting the element styling
              //prior to the element being animated.
              if ($sniffer.transitions || $sniffer.animations) {
                matches.push($injector.get(selectors['']));
              }
              for (var i = 0; i < classes.length; i++) {
                var klass = classes[i], selectorFactoryName = selectors[klass];
                if (selectorFactoryName && !flagMap[klass]) {
                  matches.push($injector.get(selectorFactoryName));
                  flagMap[klass] = true;
                }
              }
              return matches;
            }
          }
          function animationRunner(element, animationEvent, className) {
            //transcluded directives may sometimes fire an animation using only comment nodes
            //best to catch this early on to prevent any animation operations from occurring
            var node = element[0];
            if (!node) {
              return;
            }
            var isSetClassOperation = animationEvent == 'setClass';
            var isClassBased = isSetClassOperation || animationEvent == 'addClass' || animationEvent == 'removeClass';
            var classNameAdd, classNameRemove;
            if (angular.isArray(className)) {
              classNameAdd = className[0];
              classNameRemove = className[1];
              className = classNameAdd + ' ' + classNameRemove;
            }
            var currentClassName = element.attr('class');
            var classes = currentClassName + ' ' + className;
            if (!isAnimatableClassName(classes)) {
              return;
            }
            var beforeComplete = noop, beforeCancel = [], before = [], afterComplete = noop, afterCancel = [], after = [];
            var animationLookup = (' ' + classes).replace(/\s+/g, '.');
            forEach(lookup(animationLookup), function (animationFactory) {
              var created = registerAnimation(animationFactory, animationEvent);
              if (!created && isSetClassOperation) {
                registerAnimation(animationFactory, 'addClass');
                registerAnimation(animationFactory, 'removeClass');
              }
            });
            function registerAnimation(animationFactory, event) {
              var afterFn = animationFactory[event];
              var beforeFn = animationFactory['before' + event.charAt(0).toUpperCase() + event.substr(1)];
              if (afterFn || beforeFn) {
                if (event == 'leave') {
                  beforeFn = afterFn;
                  //when set as null then animation knows to skip this phase
                  afterFn = null;
                }
                after.push({
                  event: event,
                  fn: afterFn
                });
                before.push({
                  event: event,
                  fn: beforeFn
                });
                return true;
              }
            }
            function run(fns, cancellations, allCompleteFn) {
              var animations = [];
              forEach(fns, function (animation) {
                animation.fn && animations.push(animation);
              });
              var count = 0;
              function afterAnimationComplete(index) {
                if (cancellations) {
                  (cancellations[index] || noop)();
                  if (++count < animations.length)
                    return;
                  cancellations = null;
                }
                allCompleteFn();
              }
              //The code below adds directly to the array in order to work with
              //both sync and async animations. Sync animations are when the done()
              //operation is called right away. DO NOT REFACTOR!
              forEach(animations, function (animation, index) {
                var progress = function () {
                  afterAnimationComplete(index);
                };
                switch (animation.event) {
                case 'setClass':
                  cancellations.push(animation.fn(element, classNameAdd, classNameRemove, progress));
                  break;
                case 'addClass':
                  cancellations.push(animation.fn(element, classNameAdd || className, progress));
                  break;
                case 'removeClass':
                  cancellations.push(animation.fn(element, classNameRemove || className, progress));
                  break;
                default:
                  cancellations.push(animation.fn(element, progress));
                  break;
                }
              });
              if (cancellations && cancellations.length === 0) {
                allCompleteFn();
              }
            }
            return {
              node: node,
              event: animationEvent,
              className: className,
              isClassBased: isClassBased,
              isSetClassOperation: isSetClassOperation,
              before: function (allCompleteFn) {
                beforeComplete = allCompleteFn;
                run(before, beforeCancel, function () {
                  beforeComplete = noop;
                  allCompleteFn();
                });
              },
              after: function (allCompleteFn) {
                afterComplete = allCompleteFn;
                run(after, afterCancel, function () {
                  afterComplete = noop;
                  allCompleteFn();
                });
              },
              cancel: function () {
                if (beforeCancel) {
                  forEach(beforeCancel, function (cancelFn) {
                    (cancelFn || noop)(true);
                  });
                  beforeComplete(true);
                }
                if (afterCancel) {
                  forEach(afterCancel, function (cancelFn) {
                    (cancelFn || noop)(true);
                  });
                  afterComplete(true);
                }
              }
            };
          }
          /**
       * @ngdoc service
       * @name $animate
       * @kind function
       *
       * @description
       * The `$animate` service provides animation detection support while performing DOM operations (enter, leave and move) as well as during addClass and removeClass operations.
       * When any of these operations are run, the $animate service
       * will examine any JavaScript-defined animations (which are defined by using the $animateProvider provider object)
       * as well as any CSS-defined animations against the CSS classes present on the element once the DOM operation is run.
       *
       * The `$animate` service is used behind the scenes with pre-existing directives and animation with these directives
       * will work out of the box without any extra configuration.
       *
       * Requires the {@link ngAnimate `ngAnimate`} module to be installed.
       *
       * Please visit the {@link ngAnimate `ngAnimate`} module overview page learn more about how to use animations in your application.
       *
       */
          return {
            enter: function (element, parentElement, afterElement, doneCallback) {
              element = angular.element(element);
              parentElement = prepareElement(parentElement);
              afterElement = prepareElement(afterElement);
              blockElementAnimations(element);
              $delegate.enter(element, parentElement, afterElement);
              return runAnimationPostDigest(function () {
                return performAnimation('enter', 'ng-enter', stripCommentsFromElement(element), parentElement, afterElement, noop, doneCallback);
              });
            },
            leave: function (element, doneCallback) {
              element = angular.element(element);
              cancelChildAnimations(element);
              blockElementAnimations(element);
              this.enabled(false, element);
              return runAnimationPostDigest(function () {
                return performAnimation('leave', 'ng-leave', stripCommentsFromElement(element), null, null, function () {
                  $delegate.leave(element);
                }, doneCallback);
              });
            },
            move: function (element, parentElement, afterElement, doneCallback) {
              element = angular.element(element);
              parentElement = prepareElement(parentElement);
              afterElement = prepareElement(afterElement);
              cancelChildAnimations(element);
              blockElementAnimations(element);
              $delegate.move(element, parentElement, afterElement);
              return runAnimationPostDigest(function () {
                return performAnimation('move', 'ng-move', stripCommentsFromElement(element), parentElement, afterElement, noop, doneCallback);
              });
            },
            addClass: function (element, className, doneCallback) {
              element = angular.element(element);
              element = stripCommentsFromElement(element);
              return performAnimation('addClass', className, element, null, null, function () {
                $delegate.addClass(element, className);
              }, doneCallback);
            },
            removeClass: function (element, className, doneCallback) {
              element = angular.element(element);
              element = stripCommentsFromElement(element);
              return performAnimation('removeClass', className, element, null, null, function () {
                $delegate.removeClass(element, className);
              }, doneCallback);
            },
            setClass: function (element, add, remove, doneCallback) {
              element = angular.element(element);
              element = stripCommentsFromElement(element);
              return performAnimation('setClass', [
                add,
                remove
              ], element, null, null, function () {
                $delegate.setClass(element, add, remove);
              }, doneCallback);
            },
            enabled: function (value, element) {
              switch (arguments.length) {
              case 2:
                if (value) {
                  cleanup(element);
                } else {
                  var data = element.data(NG_ANIMATE_STATE) || {};
                  data.disabled = true;
                  element.data(NG_ANIMATE_STATE, data);
                }
                break;
              case 1:
                rootAnimateState.disabled = !value;
                break;
              default:
                value = !rootAnimateState.disabled;
                break;
              }
              return !!value;
            }
          };
          /*
        all animations call this shared animation triggering function internally.
        The animationEvent variable refers to the JavaScript animation event that will be triggered
        and the className value is the name of the animation that will be applied within the
        CSS code. Element, parentElement and afterElement are provided DOM elements for the animation
        and the onComplete callback will be fired once the animation is fully complete.
      */
          function performAnimation(animationEvent, className, element, parentElement, afterElement, domOperation, doneCallback) {
            var noopCancel = noop;
            var runner = animationRunner(element, animationEvent, className);
            if (!runner) {
              fireDOMOperation();
              fireBeforeCallbackAsync();
              fireAfterCallbackAsync();
              closeAnimation();
              return noopCancel;
            }
            className = runner.className;
            var elementEvents = angular.element._data(runner.node);
            elementEvents = elementEvents && elementEvents.events;
            if (!parentElement) {
              parentElement = afterElement ? afterElement.parent() : element.parent();
            }
            var ngAnimateState = element.data(NG_ANIMATE_STATE) || {};
            var runningAnimations = ngAnimateState.active || {};
            var totalActiveAnimations = ngAnimateState.totalActive || 0;
            var lastAnimation = ngAnimateState.last;
            //only allow animations if the currently running animation is not structural
            //or if there is no animation running at all
            var skipAnimations;
            if (runner.isClassBased) {
              skipAnimations = ngAnimateState.running || ngAnimateState.disabled || lastAnimation && !lastAnimation.isClassBased;
            }
            //skip the animation if animations are disabled, a parent is already being animated,
            //the element is not currently attached to the document body or then completely close
            //the animation if any matching animations are not found at all.
            //NOTE: IE8 + IE9 should close properly (run closeAnimation()) in case an animation was found.
            if (skipAnimations || animationsDisabled(element, parentElement)) {
              fireDOMOperation();
              fireBeforeCallbackAsync();
              fireAfterCallbackAsync();
              closeAnimation();
              return noopCancel;
            }
            var skipAnimation = false;
            if (totalActiveAnimations > 0) {
              var animationsToCancel = [];
              if (!runner.isClassBased) {
                if (animationEvent == 'leave' && runningAnimations['ng-leave']) {
                  skipAnimation = true;
                } else {
                  //cancel all animations when a structural animation takes place
                  for (var klass in runningAnimations) {
                    animationsToCancel.push(runningAnimations[klass]);
                  }
                  ngAnimateState = {};
                  cleanup(element, true);
                }
              } else if (lastAnimation.event == 'setClass') {
                animationsToCancel.push(lastAnimation);
                cleanup(element, className);
              } else if (runningAnimations[className]) {
                var current = runningAnimations[className];
                if (current.event == animationEvent) {
                  skipAnimation = true;
                } else {
                  animationsToCancel.push(current);
                  cleanup(element, className);
                }
              }
              if (animationsToCancel.length > 0) {
                forEach(animationsToCancel, function (operation) {
                  operation.cancel();
                });
              }
            }
            runningAnimations = ngAnimateState.active || {};
            totalActiveAnimations = ngAnimateState.totalActive || 0;
            if (runner.isClassBased && !runner.isSetClassOperation && !skipAnimation) {
              skipAnimation = animationEvent == 'addClass' == element.hasClass(className);  //opposite of XOR
            }
            if (skipAnimation) {
              fireDOMOperation();
              fireBeforeCallbackAsync();
              fireAfterCallbackAsync();
              fireDoneCallbackAsync();
              return noopCancel;
            }
            if (animationEvent == 'leave') {
              //there's no need to ever remove the listener since the element
              //will be removed (destroyed) after the leave animation ends or
              //is cancelled midway
              element.one('$destroy', function (e) {
                var element = angular.element(this);
                var state = element.data(NG_ANIMATE_STATE);
                if (state) {
                  var activeLeaveAnimation = state.active['ng-leave'];
                  if (activeLeaveAnimation) {
                    activeLeaveAnimation.cancel();
                    cleanup(element, 'ng-leave');
                  }
                }
              });
            }
            //the ng-animate class does nothing, but it's here to allow for
            //parent animations to find and cancel child animations when needed
            element.addClass(NG_ANIMATE_CLASS_NAME);
            var localAnimationCount = globalAnimationCounter++;
            totalActiveAnimations++;
            runningAnimations[className] = runner;
            element.data(NG_ANIMATE_STATE, {
              last: runner,
              active: runningAnimations,
              index: localAnimationCount,
              totalActive: totalActiveAnimations
            });
            //first we run the before animations and when all of those are complete
            //then we perform the DOM operation and run the next set of animations
            fireBeforeCallbackAsync();
            runner.before(function (cancelled) {
              var data = element.data(NG_ANIMATE_STATE);
              cancelled = cancelled || !data || !data.active[className] || runner.isClassBased && data.active[className].event != animationEvent;
              fireDOMOperation();
              if (cancelled === true) {
                closeAnimation();
              } else {
                fireAfterCallbackAsync();
                runner.after(closeAnimation);
              }
            });
            return runner.cancel;
            function fireDOMCallback(animationPhase) {
              var eventName = '$animate:' + animationPhase;
              if (elementEvents && elementEvents[eventName] && elementEvents[eventName].length > 0) {
                $$asyncCallback(function () {
                  element.triggerHandler(eventName, {
                    event: animationEvent,
                    className: className
                  });
                });
              }
            }
            function fireBeforeCallbackAsync() {
              fireDOMCallback('before');
            }
            function fireAfterCallbackAsync() {
              fireDOMCallback('after');
            }
            function fireDoneCallbackAsync() {
              fireDOMCallback('close');
              if (doneCallback) {
                $$asyncCallback(function () {
                  doneCallback();
                });
              }
            }
            //it is less complicated to use a flag than managing and canceling
            //timeouts containing multiple callbacks.
            function fireDOMOperation() {
              if (!fireDOMOperation.hasBeenRun) {
                fireDOMOperation.hasBeenRun = true;
                domOperation();
              }
            }
            function closeAnimation() {
              if (!closeAnimation.hasBeenRun) {
                closeAnimation.hasBeenRun = true;
                var data = element.data(NG_ANIMATE_STATE);
                if (data) {
                  /* only structural animations wait for reflow before removing an
                 animation, but class-based animations don't. An example of this
                 failing would be when a parent HTML tag has a ng-class attribute
                 causing ALL directives below to skip animations during the digest */
                  if (runner && runner.isClassBased) {
                    cleanup(element, className);
                  } else {
                    $$asyncCallback(function () {
                      var data = element.data(NG_ANIMATE_STATE) || {};
                      if (localAnimationCount == data.index) {
                        cleanup(element, className, animationEvent);
                      }
                    });
                    element.data(NG_ANIMATE_STATE, data);
                  }
                }
                fireDoneCallbackAsync();
              }
            }
          }
          function cancelChildAnimations(element) {
            var node = extractElementNode(element);
            if (node) {
              var nodes = angular.isFunction(node.getElementsByClassName) ? node.getElementsByClassName(NG_ANIMATE_CLASS_NAME) : node.querySelectorAll('.' + NG_ANIMATE_CLASS_NAME);
              forEach(nodes, function (element) {
                element = angular.element(element);
                var data = element.data(NG_ANIMATE_STATE);
                if (data && data.active) {
                  forEach(data.active, function (runner) {
                    runner.cancel();
                  });
                }
              });
            }
          }
          function cleanup(element, className) {
            if (isMatchingElement(element, $rootElement)) {
              if (!rootAnimateState.disabled) {
                rootAnimateState.running = false;
                rootAnimateState.structural = false;
              }
            } else if (className) {
              var data = element.data(NG_ANIMATE_STATE) || {};
              var removeAnimations = className === true;
              if (!removeAnimations && data.active && data.active[className]) {
                data.totalActive--;
                delete data.active[className];
              }
              if (removeAnimations || !data.totalActive) {
                element.removeClass(NG_ANIMATE_CLASS_NAME);
                element.removeData(NG_ANIMATE_STATE);
              }
            }
          }
          function animationsDisabled(element, parentElement) {
            if (rootAnimateState.disabled) {
              return true;
            }
            if (isMatchingElement(element, $rootElement)) {
              return rootAnimateState.running;
            }
            var allowChildAnimations, parentRunningAnimation, hasParent;
            do {
              //the element did not reach the root element which means that it
              //is not apart of the DOM. Therefore there is no reason to do
              //any animations on it
              if (parentElement.length === 0)
                break;
              var isRoot = isMatchingElement(parentElement, $rootElement);
              var state = isRoot ? rootAnimateState : parentElement.data(NG_ANIMATE_STATE) || {};
              if (state.disabled) {
                return true;
              }
              //no matter what, for an animation to work it must reach the root element
              //this implies that the element is attached to the DOM when the animation is run
              if (isRoot) {
                hasParent = true;
              }
              //once a flag is found that is strictly false then everything before
              //it will be discarded and all child animations will be restricted
              if (allowChildAnimations !== false) {
                var animateChildrenFlag = parentElement.data(NG_ANIMATE_CHILDREN);
                if (angular.isDefined(animateChildrenFlag)) {
                  allowChildAnimations = animateChildrenFlag;
                }
              }
              parentRunningAnimation = parentRunningAnimation || state.running || state.last && !state.last.isClassBased;
            } while (parentElement = parentElement.parent());
            return !hasParent || !allowChildAnimations && parentRunningAnimation;
          }
        }
      ]);
      $animateProvider.register('', [
        '$window',
        '$sniffer',
        '$timeout',
        '$$animateReflow',
        function ($window, $sniffer, $timeout, $$animateReflow) {
          // Detect proper transitionend/animationend event names.
          var CSS_PREFIX = '', TRANSITION_PROP, TRANSITIONEND_EVENT, ANIMATION_PROP, ANIMATIONEND_EVENT;
          // If unprefixed events are not supported but webkit-prefixed are, use the latter.
          // Otherwise, just use W3C names, browsers not supporting them at all will just ignore them.
          // Note: Chrome implements `window.onwebkitanimationend` and doesn't implement `window.onanimationend`
          // but at the same time dispatches the `animationend` event and not `webkitAnimationEnd`.
          // Register both events in case `window.onanimationend` is not supported because of that,
          // do the same for `transitionend` as Safari is likely to exhibit similar behavior.
          // Also, the only modern browser that uses vendor prefixes for transitions/keyframes is webkit
          // therefore there is no reason to test anymore for other vendor prefixes: http://caniuse.com/#search=transition
          if (window.ontransitionend === undefined && window.onwebkittransitionend !== undefined) {
            CSS_PREFIX = '-webkit-';
            TRANSITION_PROP = 'WebkitTransition';
            TRANSITIONEND_EVENT = 'webkitTransitionEnd transitionend';
          } else {
            TRANSITION_PROP = 'transition';
            TRANSITIONEND_EVENT = 'transitionend';
          }
          if (window.onanimationend === undefined && window.onwebkitanimationend !== undefined) {
            CSS_PREFIX = '-webkit-';
            ANIMATION_PROP = 'WebkitAnimation';
            ANIMATIONEND_EVENT = 'webkitAnimationEnd animationend';
          } else {
            ANIMATION_PROP = 'animation';
            ANIMATIONEND_EVENT = 'animationend';
          }
          var DURATION_KEY = 'Duration';
          var PROPERTY_KEY = 'Property';
          var DELAY_KEY = 'Delay';
          var ANIMATION_ITERATION_COUNT_KEY = 'IterationCount';
          var NG_ANIMATE_PARENT_KEY = '$$ngAnimateKey';
          var NG_ANIMATE_CSS_DATA_KEY = '$$ngAnimateCSS3Data';
          var ELAPSED_TIME_MAX_DECIMAL_PLACES = 3;
          var CLOSING_TIME_BUFFER = 1.5;
          var ONE_SECOND = 1000;
          var lookupCache = {};
          var parentCounter = 0;
          var animationReflowQueue = [];
          var cancelAnimationReflow;
          function afterReflow(element, callback) {
            if (cancelAnimationReflow) {
              cancelAnimationReflow();
            }
            animationReflowQueue.push(callback);
            cancelAnimationReflow = $$animateReflow(function () {
              forEach(animationReflowQueue, function (fn) {
                fn();
              });
              animationReflowQueue = [];
              cancelAnimationReflow = null;
              lookupCache = {};
            });
          }
          var closingTimer = null;
          var closingTimestamp = 0;
          var animationElementQueue = [];
          function animationCloseHandler(element, totalTime) {
            var node = extractElementNode(element);
            element = angular.element(node);
            //this item will be garbage collected by the closing
            //animation timeout
            animationElementQueue.push(element);
            //but it may not need to cancel out the existing timeout
            //if the timestamp is less than the previous one
            var futureTimestamp = Date.now() + totalTime;
            if (futureTimestamp <= closingTimestamp) {
              return;
            }
            $timeout.cancel(closingTimer);
            closingTimestamp = futureTimestamp;
            closingTimer = $timeout(function () {
              closeAllAnimations(animationElementQueue);
              animationElementQueue = [];
            }, totalTime, false);
          }
          function closeAllAnimations(elements) {
            forEach(elements, function (element) {
              var elementData = element.data(NG_ANIMATE_CSS_DATA_KEY);
              if (elementData) {
                forEach(elementData.closeAnimationFns, function (fn) {
                  fn();
                });
              }
            });
          }
          function getElementAnimationDetails(element, cacheKey) {
            var data = cacheKey ? lookupCache[cacheKey] : null;
            if (!data) {
              var transitionDuration = 0;
              var transitionDelay = 0;
              var animationDuration = 0;
              var animationDelay = 0;
              var transitionDelayStyle;
              var animationDelayStyle;
              var transitionDurationStyle;
              var transitionPropertyStyle;
              //we want all the styles defined before and after
              forEach(element, function (element) {
                if (element.nodeType == ELEMENT_NODE) {
                  var elementStyles = $window.getComputedStyle(element) || {};
                  transitionDurationStyle = elementStyles[TRANSITION_PROP + DURATION_KEY];
                  transitionDuration = Math.max(parseMaxTime(transitionDurationStyle), transitionDuration);
                  transitionPropertyStyle = elementStyles[TRANSITION_PROP + PROPERTY_KEY];
                  transitionDelayStyle = elementStyles[TRANSITION_PROP + DELAY_KEY];
                  transitionDelay = Math.max(parseMaxTime(transitionDelayStyle), transitionDelay);
                  animationDelayStyle = elementStyles[ANIMATION_PROP + DELAY_KEY];
                  animationDelay = Math.max(parseMaxTime(animationDelayStyle), animationDelay);
                  var aDuration = parseMaxTime(elementStyles[ANIMATION_PROP + DURATION_KEY]);
                  if (aDuration > 0) {
                    aDuration *= parseInt(elementStyles[ANIMATION_PROP + ANIMATION_ITERATION_COUNT_KEY], 10) || 1;
                  }
                  animationDuration = Math.max(aDuration, animationDuration);
                }
              });
              data = {
                total: 0,
                transitionPropertyStyle: transitionPropertyStyle,
                transitionDurationStyle: transitionDurationStyle,
                transitionDelayStyle: transitionDelayStyle,
                transitionDelay: transitionDelay,
                transitionDuration: transitionDuration,
                animationDelayStyle: animationDelayStyle,
                animationDelay: animationDelay,
                animationDuration: animationDuration
              };
              if (cacheKey) {
                lookupCache[cacheKey] = data;
              }
            }
            return data;
          }
          function parseMaxTime(str) {
            var maxValue = 0;
            var values = angular.isString(str) ? str.split(/\s*,\s*/) : [];
            forEach(values, function (value) {
              maxValue = Math.max(parseFloat(value) || 0, maxValue);
            });
            return maxValue;
          }
          function getCacheKey(element) {
            var parentElement = element.parent();
            var parentID = parentElement.data(NG_ANIMATE_PARENT_KEY);
            if (!parentID) {
              parentElement.data(NG_ANIMATE_PARENT_KEY, ++parentCounter);
              parentID = parentCounter;
            }
            return parentID + '-' + extractElementNode(element).getAttribute('class');
          }
          function animateSetup(animationEvent, element, className) {
            var structural = [
                'ng-enter',
                'ng-leave',
                'ng-move'
              ].indexOf(className) >= 0;
            var cacheKey = getCacheKey(element);
            var eventCacheKey = cacheKey + ' ' + className;
            var itemIndex = lookupCache[eventCacheKey] ? ++lookupCache[eventCacheKey].total : 0;
            var stagger = {};
            if (itemIndex > 0) {
              var staggerClassName = className + '-stagger';
              var staggerCacheKey = cacheKey + ' ' + staggerClassName;
              var applyClasses = !lookupCache[staggerCacheKey];
              applyClasses && element.addClass(staggerClassName);
              stagger = getElementAnimationDetails(element, staggerCacheKey);
              applyClasses && element.removeClass(staggerClassName);
            }
            element.addClass(className);
            var formerData = element.data(NG_ANIMATE_CSS_DATA_KEY) || {};
            var timings = getElementAnimationDetails(element, eventCacheKey);
            var transitionDuration = timings.transitionDuration;
            var animationDuration = timings.animationDuration;
            if (structural && transitionDuration === 0 && animationDuration === 0) {
              element.removeClass(className);
              return false;
            }
            var blockTransition = structural && transitionDuration > 0;
            var blockAnimation = animationDuration > 0 && stagger.animationDelay > 0 && stagger.animationDuration === 0;
            var closeAnimationFns = formerData.closeAnimationFns || [];
            element.data(NG_ANIMATE_CSS_DATA_KEY, {
              stagger: stagger,
              cacheKey: eventCacheKey,
              running: formerData.running || 0,
              itemIndex: itemIndex,
              blockTransition: blockTransition,
              blockAnimation: blockAnimation,
              closeAnimationFns: closeAnimationFns
            });
            var node = extractElementNode(element);
            if (blockTransition) {
              node.style[TRANSITION_PROP + PROPERTY_KEY] = 'none';
            }
            if (blockAnimation) {
              node.style[ANIMATION_PROP] = 'none 0s';
            }
            return true;
          }
          function animateRun(animationEvent, element, className, activeAnimationComplete) {
            var node = extractElementNode(element);
            var elementData = element.data(NG_ANIMATE_CSS_DATA_KEY);
            if (node.getAttribute('class').indexOf(className) == -1 || !elementData) {
              activeAnimationComplete();
              return;
            }
            if (elementData.blockTransition) {
              node.style[TRANSITION_PROP + PROPERTY_KEY] = '';
            }
            if (elementData.blockAnimation) {
              node.style[ANIMATION_PROP] = '';
            }
            var activeClassName = '';
            forEach(className.split(' '), function (klass, i) {
              activeClassName += (i > 0 ? ' ' : '') + klass + '-active';
            });
            element.addClass(activeClassName);
            var eventCacheKey = elementData.cacheKey + ' ' + activeClassName;
            var timings = getElementAnimationDetails(element, eventCacheKey);
            var maxDuration = Math.max(timings.transitionDuration, timings.animationDuration);
            if (maxDuration === 0) {
              element.removeClass(activeClassName);
              animateClose(element, className);
              activeAnimationComplete();
              return;
            }
            var maxDelay = Math.max(timings.transitionDelay, timings.animationDelay);
            var stagger = elementData.stagger;
            var itemIndex = elementData.itemIndex;
            var maxDelayTime = maxDelay * ONE_SECOND;
            var style = '', appliedStyles = [];
            if (timings.transitionDuration > 0) {
              var propertyStyle = timings.transitionPropertyStyle;
              if (propertyStyle.indexOf('all') == -1) {
                style += CSS_PREFIX + 'transition-property: ' + propertyStyle + ';';
                style += CSS_PREFIX + 'transition-duration: ' + timings.transitionDurationStyle + ';';
                appliedStyles.push(CSS_PREFIX + 'transition-property');
                appliedStyles.push(CSS_PREFIX + 'transition-duration');
              }
            }
            if (itemIndex > 0) {
              if (stagger.transitionDelay > 0 && stagger.transitionDuration === 0) {
                var delayStyle = timings.transitionDelayStyle;
                style += CSS_PREFIX + 'transition-delay: ' + prepareStaggerDelay(delayStyle, stagger.transitionDelay, itemIndex) + '; ';
                appliedStyles.push(CSS_PREFIX + 'transition-delay');
              }
              if (stagger.animationDelay > 0 && stagger.animationDuration === 0) {
                style += CSS_PREFIX + 'animation-delay: ' + prepareStaggerDelay(timings.animationDelayStyle, stagger.animationDelay, itemIndex) + '; ';
                appliedStyles.push(CSS_PREFIX + 'animation-delay');
              }
            }
            if (appliedStyles.length > 0) {
              //the element being animated may sometimes contain comment nodes in
              //the jqLite object, so we're safe to use a single variable to house
              //the styles since there is always only one element being animated
              var oldStyle = node.getAttribute('style') || '';
              node.setAttribute('style', oldStyle + '; ' + style);
            }
            var startTime = Date.now();
            var css3AnimationEvents = ANIMATIONEND_EVENT + ' ' + TRANSITIONEND_EVENT;
            element.on(css3AnimationEvents, onAnimationProgress);
            elementData.closeAnimationFns.push(function () {
              onEnd();
              activeAnimationComplete();
            });
            var staggerTime = itemIndex * (Math.max(stagger.animationDelay, stagger.transitionDelay) || 0);
            var animationTime = (maxDelay + maxDuration) * CLOSING_TIME_BUFFER;
            var totalTime = (staggerTime + animationTime) * ONE_SECOND;
            elementData.running++;
            animationCloseHandler(element, totalTime);
            return onEnd;
            // This will automatically be called by $animate so
            // there is no need to attach this internally to the
            // timeout done method.
            function onEnd(cancelled) {
              element.off(css3AnimationEvents, onAnimationProgress);
              element.removeClass(activeClassName);
              animateClose(element, className);
              var node = extractElementNode(element);
              for (var i in appliedStyles) {
                node.style.removeProperty(appliedStyles[i]);
              }
            }
            function onAnimationProgress(event) {
              event.stopPropagation();
              var ev = event.originalEvent || event;
              var timeStamp = ev.$manualTimeStamp || ev.timeStamp || Date.now();
              /* Firefox (or possibly just Gecko) likes to not round values up
           * when a ms measurement is used for the animation */
              var elapsedTime = parseFloat(ev.elapsedTime.toFixed(ELAPSED_TIME_MAX_DECIMAL_PLACES));
              /* $manualTimeStamp is a mocked timeStamp value which is set
           * within browserTrigger(). This is only here so that tests can
           * mock animations properly. Real events fallback to event.timeStamp,
           * or, if they don't, then a timeStamp is automatically created for them.
           * We're checking to see if the timeStamp surpasses the expected delay,
           * but we're using elapsedTime instead of the timeStamp on the 2nd
           * pre-condition since animations sometimes close off early */
              if (Math.max(timeStamp - startTime, 0) >= maxDelayTime && elapsedTime >= maxDuration) {
                activeAnimationComplete();
              }
            }
          }
          function prepareStaggerDelay(delayStyle, staggerDelay, index) {
            var style = '';
            forEach(delayStyle.split(','), function (val, i) {
              style += (i > 0 ? ',' : '') + (index * staggerDelay + parseInt(val, 10)) + 's';
            });
            return style;
          }
          function animateBefore(animationEvent, element, className, calculationDecorator) {
            if (animateSetup(animationEvent, element, className, calculationDecorator)) {
              return function (cancelled) {
                cancelled && animateClose(element, className);
              };
            }
          }
          function animateAfter(animationEvent, element, className, afterAnimationComplete) {
            if (element.data(NG_ANIMATE_CSS_DATA_KEY)) {
              return animateRun(animationEvent, element, className, afterAnimationComplete);
            } else {
              animateClose(element, className);
              afterAnimationComplete();
            }
          }
          function animate(animationEvent, element, className, animationComplete) {
            //If the animateSetup function doesn't bother returning a
            //cancellation function then it means that there is no animation
            //to perform at all
            var preReflowCancellation = animateBefore(animationEvent, element, className);
            if (!preReflowCancellation) {
              animationComplete();
              return;
            }
            //There are two cancellation functions: one is before the first
            //reflow animation and the second is during the active state
            //animation. The first function will take care of removing the
            //data from the element which will not make the 2nd animation
            //happen in the first place
            var cancel = preReflowCancellation;
            afterReflow(element, function () {
              //once the reflow is complete then we point cancel to
              //the new cancellation function which will remove all of the
              //animation properties from the active animation
              cancel = animateAfter(animationEvent, element, className, animationComplete);
            });
            return function (cancelled) {
              (cancel || noop)(cancelled);
            };
          }
          function animateClose(element, className) {
            element.removeClass(className);
            var data = element.data(NG_ANIMATE_CSS_DATA_KEY);
            if (data) {
              if (data.running) {
                data.running--;
              }
              if (!data.running || data.running === 0) {
                element.removeData(NG_ANIMATE_CSS_DATA_KEY);
              }
            }
          }
          return {
            enter: function (element, animationCompleted) {
              return animate('enter', element, 'ng-enter', animationCompleted);
            },
            leave: function (element, animationCompleted) {
              return animate('leave', element, 'ng-leave', animationCompleted);
            },
            move: function (element, animationCompleted) {
              return animate('move', element, 'ng-move', animationCompleted);
            },
            beforeSetClass: function (element, add, remove, animationCompleted) {
              var className = suffixClasses(remove, '-remove') + ' ' + suffixClasses(add, '-add');
              var cancellationMethod = animateBefore('setClass', element, className);
              if (cancellationMethod) {
                afterReflow(element, animationCompleted);
                return cancellationMethod;
              }
              animationCompleted();
            },
            beforeAddClass: function (element, className, animationCompleted) {
              var cancellationMethod = animateBefore('addClass', element, suffixClasses(className, '-add'));
              if (cancellationMethod) {
                afterReflow(element, animationCompleted);
                return cancellationMethod;
              }
              animationCompleted();
            },
            beforeRemoveClass: function (element, className, animationCompleted) {
              var cancellationMethod = animateBefore('removeClass', element, suffixClasses(className, '-remove'));
              if (cancellationMethod) {
                afterReflow(element, animationCompleted);
                return cancellationMethod;
              }
              animationCompleted();
            },
            setClass: function (element, add, remove, animationCompleted) {
              remove = suffixClasses(remove, '-remove');
              add = suffixClasses(add, '-add');
              var className = remove + ' ' + add;
              return animateAfter('setClass', element, className, animationCompleted);
            },
            addClass: function (element, className, animationCompleted) {
              return animateAfter('addClass', element, suffixClasses(className, '-add'), animationCompleted);
            },
            removeClass: function (element, className, animationCompleted) {
              return animateAfter('removeClass', element, suffixClasses(className, '-remove'), animationCompleted);
            }
          };
          function suffixClasses(classes, suffix) {
            var className = '';
            classes = angular.isArray(classes) ? classes : classes.split(/\s+/);
            forEach(classes, function (klass, i) {
              if (klass && klass.length > 0) {
                className += (i > 0 ? ' ' : '') + klass + suffix;
              }
            });
            return className;
          }
        }
      ]);
    }
  ]);
}(window, window.angular));
angular.module('ppApp', ['ngAnimate', 'ui.bootstrap', 'ngCookies', 'google-maps', 'ngRoute'])
.config(function($httpProvider){
  $httpProvider.interceptors.push('SessionInjector');
  $httpProvider.interceptors.push('AuthInterceptor');
})

angular.module('ppApp')
.config(function($routeProvider){
  $routeProvider.when('/signup', {
    templateUrl: 'signup/signup.html',
    controller: 'signupCtrl as signup',
    resolve: {Languages: function(LanguageService){
      return LanguageService.set();
    }}
  });
}).controller('signupCtrl', function($scope, $http, SignUpService, Languages){
  $scope.submit = function(signup){
    SignUpService(signup);
  };
  $scope.languages = Languages;
});
angular.module('ppApp')
.factory('MapData', function($http, $q){
  return function(){
    var defer = $q.defer();
    $http.get('/api/v1/users/').then(function(data){
      defer.resolve(data.data.users);
    })
    return defer.promise;
  }
})

angular.module('ppApp').factory('SessionInjector', function(CookieHandler){
  return {
    request: function(config) {
      if (CookieHandler.get() !== undefined) {
        config.headers['token'] = CookieHandler.get().token;
        config.headers['username'] = CookieHandler.get().username;
      }
      return config;
    }
  }
})

angular.module('ppApp')
.factory('SignUpService', function($http, $location){
  return function(userData){
    var newUser = {
      user : userData
    }
    $http.post('/api/v1/users', newUser).success(function(data){
      console.log(data);
      $location.path('/');
    })
    .error(function(data){
      console.log(data);
    });
  }
})
angular.module('ppApp')
.config(function($routeProvider){
  $routeProvider.when('/signin', {
    templateUrl: 'signin/signin.html',
    controller: 'signinCtrl as signin'
  });
})
.controller('signinCtrl', function($scope, SessionService, $http){
  $scope.newSession = function(authInfo){
    SessionService(authInfo);
  };

  $scope.auth_test = function(){
    $http.get('/api/v1/users/auth_test');
  };
  
  $scope.useTest = function(){
    $scope.signin.email = 'test@test.com';
    $scope.signin.password = 'password';
  }
});

angular.module('ppApp').config(function($routeProvider){
  $routeProvider.when('/', {
    templateUrl: 'home/home.html',
    controller: 'homeCtrl',
    resolve: { MapUsers: function(MapData){
        return MapData();
    }, Languages: function(LanguageService){
      return LanguageService.set();
    }
    }
  })
}).controller('homeCtrl', function($scope, $filter, MapUsers, Languages){
  $scope.users = MapUsers;
  $scope.languages = Languages;
  $scope.language = $scope.languages[0];
  $scope.map = {
      center: {
          latitude: 50,
          longitude: 0
      },
      zoom: 2,
      options: {mapTypeId: google.maps.MapTypeId.SATELLITE }
  };
  $scope.$watch('language', function(language){
    $scope.filteredUsers = $filter("filter")($scope.users, language.name);
  });
})

angular.module('ppApp')
.factory('SessionService', function(CookieHandler, $http, $location, $rootScope){
  return function(authInfo){
    $http.post('api/v1/sessions', authInfo)
    .success(function(data){
      CookieHandler.set(data.user);
      $rootScope.$broadcast('authorized', data.user.username);
      $location.path('/')
    })
		.error(function(){
			$rootScope.$broadcast('unauthorized');
    });
  };
});

angular.module('ppApp')
.factory('TokenHandler', function(){
  var token = null;
  
  var TokenHandler = {
    set: function(v) { token = v; },
    get: function() {
      return token;
    }
  };
  return TokenHandler;
});
angular.module('ppApp')
.factory('CookieHandler', function($cookieStore, $rootScope){
	var user = null;

	var CookieHandler = {
		set: function(user){
			$cookieStore.put('currentUser', user);
		},

		get: function(){
			return $cookieStore.get('currentUser');
		},

		delete: function(user){
			$cookieStore.remove('currentUser');
			$rootScope.$broadcast('logout');
		}
	};

	return CookieHandler;
});

angular.module('ppApp')
.controller('currentUserCtrl', function(CookieHandler, $scope){
	this.user = CookieHandler.get();
	$scope.logout = function(){
		//works, but does not update dom elements, digest?
		CookieHandler.delete();
	};
});
angular.module('ppApp')
.directive('navbar', function(){
  return {
    restrict: 'E',
    templateUrl: './layout/navbar/navbar.html',
    controller: 'navCtrl'
  }
})
.controller('navCtrl', function(CookieHandler, $location, $scope){
  $scope.user = CookieHandler.get();

  $scope.$watch(
    function(){
      var user = CookieHandler.get();
      return (user == null) ? 0 : user.id;
    },
    function(newValue, oldValue) {
      if( newValue !== oldValue) {
        $scope.user = CookieHandler.get();
      }
    }
  );

  $scope.logout = function(){
    CookieHandler.delete();
    $location.path('/')
  }
})

angular.module('ppApp')
.controller('alertsCtrl', function($scope){

	this.alerts = [];
	var alerts = this.alerts;

	$scope.$on('unauthorized', function(event, data){
		alerts.push({type: 'danger', msg: 'Check your credentials'});
	});

	$scope.$on('authorized', function(event, data){
		alerts.push({type: 'success', msg: 'What\'s up '+data});
	});

	$scope.$on('logout', function(event, data){
		alerts.push({type: 'success', msg: 'Later!'});
	});

	$scope.closeAlert = function(index) {
		alerts.splice(index, 1);
	};
})
.directive('alerts', function(){
  return {
    restrict: 'E',
    templateUrl: './layout/alerts/alerts.html'
  }
})

angular.module('ppApp')
.config(function($routeProvider){
  $routeProvider.when('/profile', {
    templateUrl: 'profile/profile.html',
    controller: 'profileCtrl as profile',
    resolve: {
      ProfileData: function(ProfileService, CookieHandler){
        return ProfileService();
      }
    }
  });
})
.controller('profileCtrl', function(ProfileData){
  this.user = ProfileData;
  console.log(ProfileData);
})

angular.module('ppApp')
.factory('ProfileService', function($http, $q, $location){
  return function(){

    var defer = $q.defer();
    $http.get('/api/v1/users/profile/').success(function(data){
      defer.resolve(data.user_profile);
    });
    return defer.promise;
  }
})
angular.module('ppApp')
.factory('AuthInterceptor', function($location, $q){
  //breaks on google map calls without $q conditions!
  //blog.thesparktree.com/post/75952317665/angularjs-interceptors-globally-handle-401-and-other
  return {
    response: function(response){
      if (response.status === 401) {
        console.log("Response 401");
      }
      return response || $q.when(response);
      },
    responseError: function(rejection) {
      if (rejection.status === 401) {
        console.log("Response Error 401",rejection);
        $location.path('/');
      }
      return $q.reject(rejection);
      }
    }
})
angular.module('ppApp')
.factory('LanguageService', function($http, $q){
  var LanguageService = {
    set: function(){
      var defer = $q.defer();
      $http.get('/api/v1/languages').success(function(data){
        defer.resolve(data.languages);
      });
      return defer.promise;
    }
  }
  return LanguageService;
})