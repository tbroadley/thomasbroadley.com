(() => {
  var Nn = Object.defineProperty;
  var D = (t, e) => {
    for (var n in e) Nn(t, n, { get: e[n], enumerable: !0 });
  };
  function O() {}
  function Me(t) {
    return t();
  }
  function Xe() {
    return Object.create(null);
  }
  function U(t) {
    t.forEach(Me);
  }
  function Ze(t) {
    return typeof t == "function";
  }
  function V(t, e) {
    return t != t
      ? e == e
      : t !== e || (t && typeof t == "object") || typeof t == "function";
  }
  var Ee;
  function He(t, e) {
    return (
      Ee || (Ee = document.createElement("a")), (Ee.href = e), t === Ee.href
    );
  }
  function et(t) {
    return Object.keys(t).length === 0;
  }
  var tt = !1;
  function On() {
    tt = !0;
  }
  function jn() {
    tt = !1;
  }
  function E(t, e) {
    t.appendChild(e);
  }
  function w(t, e, n) {
    t.insertBefore(e, n || null);
  }
  function v(t) {
    t.parentNode.removeChild(t);
  }
  function re(t, e) {
    for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e);
  }
  function y(t) {
    return document.createElement(t);
  }
  function Dn(t) {
    return document.createElementNS("http://www.w3.org/2000/svg", t);
  }
  function M(t) {
    return document.createTextNode(t);
  }
  function R() {
    return M(" ");
  }
  function J() {
    return M("");
  }
  function K(t, e, n, l) {
    return t.addEventListener(e, n, l), () => t.removeEventListener(e, n, l);
  }
  function p(t, e, n) {
    n == null
      ? t.removeAttribute(e)
      : t.getAttribute(e) !== n && t.setAttribute(e, n);
  }
  function $n(t) {
    return Array.from(t.childNodes);
  }
  function I(t, e) {
    (e = "" + e), t.wholeText !== e && (t.data = e);
  }
  function Ne(t, e) {
    t.value = e ?? "";
  }
  function q(t, e, n) {
    t.classList[n ? "add" : "remove"](e);
  }
  var W = class {
    constructor(e = !1) {
      (this.is_svg = !1), (this.is_svg = e), (this.e = this.n = null);
    }
    c(e) {
      this.h(e);
    }
    m(e, n, l = null) {
      this.e ||
        (this.is_svg ? (this.e = Dn(n.nodeName)) : (this.e = y(n.nodeName)),
        (this.t = n),
        this.c(e)),
        this.i(l);
    }
    h(e) {
      (this.e.innerHTML = e), (this.n = Array.from(this.e.childNodes));
    }
    i(e) {
      for (let n = 0; n < this.n.length; n += 1) w(this.t, this.n[n], e);
    }
    p(e) {
      this.d(), this.h(e), this.i(this.a);
    }
    d() {
      this.n.forEach(v);
    }
  };
  var le;
  function ne(t) {
    le = t;
  }
  function zn() {
    if (!le)
      throw new Error("Function called outside component initialization");
    return le;
  }
  function Oe(t) {
    zn().$$.on_mount.push(t);
  }
  var te = [];
  var Ce = [],
    ve = [],
    Se = [],
    In = Promise.resolve(),
    Te = !1;
  function Ln() {
    Te || ((Te = !0), In.then(lt));
  }
  function Ae(t) {
    ve.push(t);
  }
  function nt(t) {
    Se.push(t);
  }
  var Fe = new Set(),
    ye = 0;
  function lt() {
    let t = le;
    do {
      for (; ye < te.length; ) {
        let e = te[ye];
        ye++, ne(e), Pn(e.$$);
      }
      for (ne(null), te.length = 0, ye = 0; Ce.length; ) Ce.pop()();
      for (let e = 0; e < ve.length; e += 1) {
        let n = ve[e];
        Fe.has(n) || (Fe.add(n), n());
      }
      ve.length = 0;
    } while (te.length);
    for (; Se.length; ) Se.pop()();
    (Te = !1), Fe.clear(), ne(t);
  }
  function Pn(t) {
    if (t.fragment !== null) {
      t.update(), U(t.before_update);
      let e = t.dirty;
      (t.dirty = [-1]),
        t.fragment && t.fragment.p(t.ctx, e),
        t.after_update.forEach(Ae);
    }
  }
  var we = new Set(),
    x;
  function se() {
    x = { r: 0, c: [], p: x };
  }
  function ie() {
    x.r || U(x.c), (x = x.p);
  }
  function H(t, e) {
    t && t.i && (we.delete(t), t.i(e));
  }
  function $(t, e, n, l) {
    if (t && t.o) {
      if (we.has(t)) return;
      we.add(t),
        x.c.push(() => {
          we.delete(t), l && (n && t.d(1), l());
        }),
        t.o(e);
    }
  }
  var bl =
    typeof window < "u"
      ? window
      : typeof globalThis < "u"
      ? globalThis
      : global;
  function rt(t, e) {
    $(t, 1, 1, () => {
      e.delete(t.key);
    });
  }
  function st(t, e, n, l, r, s, i, o, a, d, f, _) {
    let c = t.length,
      h = s.length,
      u = c,
      m = {};
    for (; u--; ) m[t[u].key] = u;
    let g = [],
      k = new Map(),
      P = new Map();
    for (u = h; u--; ) {
      let C = _(r, s, u),
        T = n(C),
        N = i.get(T);
      N ? l && N.p(C, e) : ((N = d(T, C)), N.c()),
        k.set(T, (g[u] = N)),
        T in m && P.set(T, Math.abs(u - m[T]));
    }
    let j = new Set(),
      F = new Set();
    function Q(C) {
      H(C, 1), C.m(o, f), i.set(C.key, C), (f = C.first), h--;
    }
    for (; c && h; ) {
      let C = g[h - 1],
        T = t[c - 1],
        N = C.key,
        G = T.key;
      C === T
        ? ((f = C.first), c--, h--)
        : k.has(G)
        ? !i.has(N) || j.has(N)
          ? Q(C)
          : F.has(G)
          ? c--
          : P.get(N) > P.get(G)
          ? (F.add(N), Q(C))
          : (j.add(G), c--)
        : (a(T, i), c--);
    }
    for (; c--; ) {
      let C = t[c];
      k.has(C.key) || a(C, i);
    }
    for (; h; ) Q(g[h - 1]);
    return g;
  }
  function it(t, e, n) {
    let l = t.$$.props[e];
    l !== void 0 && ((t.$$.bound[l] = n), n(t.$$.ctx[l]));
  }
  function je(t) {
    t && t.c();
  }
  function Re(t, e, n, l) {
    let { fragment: r, on_mount: s, on_destroy: i, after_update: o } = t.$$;
    r && r.m(e, n),
      l ||
        Ae(() => {
          let a = s.map(Me).filter(Ze);
          i ? i.push(...a) : U(a), (t.$$.on_mount = []);
        }),
      o.forEach(Ae);
  }
  function oe(t, e) {
    let n = t.$$;
    n.fragment !== null &&
      (U(n.on_destroy),
      n.fragment && n.fragment.d(e),
      (n.on_destroy = n.fragment = null),
      (n.ctx = []));
  }
  function Un(t, e) {
    t.$$.dirty[0] === -1 && (te.push(t), Ln(), t.$$.dirty.fill(0)),
      (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
  }
  function Y(t, e, n, l, r, s, i, o = [-1]) {
    let a = le;
    ne(t);
    let d = (t.$$ = {
      fragment: null,
      ctx: null,
      props: s,
      update: O,
      not_equal: r,
      bound: Xe(),
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(e.context || (a ? a.$$.context : [])),
      callbacks: Xe(),
      dirty: o,
      skip_bound: !1,
      root: e.target || a.$$.root,
    });
    i && i(d.root);
    let f = !1;
    if (
      ((d.ctx = n
        ? n(t, e.props || {}, (_, c, ...h) => {
            let u = h.length ? h[0] : c;
            return (
              d.ctx &&
                r(d.ctx[_], (d.ctx[_] = u)) &&
                (!d.skip_bound && d.bound[_] && d.bound[_](u), f && Un(t, _)),
              c
            );
          })
        : []),
      d.update(),
      (f = !0),
      U(d.before_update),
      (d.fragment = l ? l(d.ctx) : !1),
      e.target)
    ) {
      if (e.hydrate) {
        On();
        let _ = $n(e.target);
        d.fragment && d.fragment.l(_), _.forEach(v);
      } else d.fragment && d.fragment.c();
      e.intro && H(t.$$.fragment),
        Re(t, e.target, e.anchor, e.customElement),
        jn(),
        lt();
    }
    ne(a);
  }
  var qn;
  typeof HTMLElement == "function" &&
    (qn = class extends HTMLElement {
      constructor() {
        super(), this.attachShadow({ mode: "open" });
      }
      connectedCallback() {
        let { on_mount: t } = this.$$;
        this.$$.on_disconnect = t.map(Me).filter(Ze);
        for (let e in this.$$.slotted) this.appendChild(this.$$.slotted[e]);
      }
      attributeChangedCallback(t, e, n) {
        this[t] = n;
      }
      disconnectedCallback() {
        U(this.$$.on_disconnect);
      }
      $destroy() {
        oe(this, 1), (this.$destroy = O);
      }
      $on(t, e) {
        let n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
        return (
          n.push(e),
          () => {
            let l = n.indexOf(e);
            l !== -1 && n.splice(l, 1);
          }
        );
      }
      $set(t) {
        this.$$set &&
          !et(t) &&
          ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1));
      }
    });
  var z = class {
    $destroy() {
      oe(this, 1), (this.$destroy = O);
    }
    $on(e, n) {
      let l = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
      return (
        l.push(n),
        () => {
          let r = l.indexOf(n);
          r !== -1 && l.splice(r, 1);
        }
      );
    }
    $set(e) {
      this.$$set &&
        !et(e) &&
        ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
    }
  };
  function S(t) {
    let e = typeof t == "string" ? t.charCodeAt(0) : t;
    return (e >= 97 && e <= 122) || (e >= 65 && e <= 90);
  }
  function B(t) {
    let e = typeof t == "string" ? t.charCodeAt(0) : t;
    return e >= 48 && e <= 57;
  }
  function L(t) {
    return S(t) || B(t);
  }
  var ot = [
    "art-lojban",
    "cel-gaulish",
    "no-bok",
    "no-nyn",
    "zh-guoyu",
    "zh-hakka",
    "zh-min",
    "zh-min-nan",
    "zh-xiang",
  ];
  var De = {
    "en-gb-oed": "en-GB-oxendict",
    "i-ami": "ami",
    "i-bnn": "bnn",
    "i-default": null,
    "i-enochian": null,
    "i-hak": "hak",
    "i-klingon": "tlh",
    "i-lux": "lb",
    "i-mingo": null,
    "i-navajo": "nv",
    "i-pwn": "pwn",
    "i-tao": "tao",
    "i-tay": "tay",
    "i-tsu": "tsu",
    "sgn-be-fr": "sfb",
    "sgn-be-nl": "vgt",
    "sgn-ch-de": "sgg",
    "art-lojban": "jbo",
    "cel-gaulish": null,
    "no-bok": "nb",
    "no-nyn": "nn",
    "zh-guoyu": "cmn",
    "zh-hakka": "hak",
    "zh-min": null,
    "zh-min-nan": "nan",
    "zh-xiang": "hsn",
  };
  var Bn = {}.hasOwnProperty;
  function ke(t, e = {}) {
    let n = at(),
      l = String(t),
      r = l.toLowerCase(),
      s = 0;
    if (t == null) throw new Error("Expected string, got `" + t + "`");
    if (Bn.call(De, r)) {
      let o = De[r];
      return (e.normalize === void 0 || e.normalize === null || e.normalize) &&
        typeof o == "string"
        ? ke(o)
        : ((n[ot.includes(r) ? "regular" : "irregular"] = l), n);
    }
    for (; S(r.charCodeAt(s)) && s < 9; ) s++;
    if (s > 1 && s < 9) {
      if (((n.language = l.slice(0, s)), s < 4)) {
        let o = 0;
        for (
          ;
          r.charCodeAt(s) === 45 &&
          S(r.charCodeAt(s + 1)) &&
          S(r.charCodeAt(s + 2)) &&
          S(r.charCodeAt(s + 3)) &&
          !S(r.charCodeAt(s + 4));

        ) {
          if (o > 2)
            return i(
              s,
              3,
              "Too many extended language subtags, expected at most 3 subtags"
            );
          n.extendedLanguageSubtags.push(l.slice(s + 1, s + 4)), (s += 4), o++;
        }
      }
      for (
        r.charCodeAt(s) === 45 &&
          S(r.charCodeAt(s + 1)) &&
          S(r.charCodeAt(s + 2)) &&
          S(r.charCodeAt(s + 3)) &&
          S(r.charCodeAt(s + 4)) &&
          !S(r.charCodeAt(s + 5)) &&
          ((n.script = l.slice(s + 1, s + 5)), (s += 5)),
          r.charCodeAt(s) === 45 &&
            (S(r.charCodeAt(s + 1)) &&
            S(r.charCodeAt(s + 2)) &&
            !S(r.charCodeAt(s + 3))
              ? ((n.region = l.slice(s + 1, s + 3)), (s += 3))
              : B(r.charCodeAt(s + 1)) &&
                B(r.charCodeAt(s + 2)) &&
                B(r.charCodeAt(s + 3)) &&
                !B(r.charCodeAt(s + 4)) &&
                ((n.region = l.slice(s + 1, s + 4)), (s += 4)));
        r.charCodeAt(s) === 45;

      ) {
        let o = s + 1,
          a = o;
        for (; L(r.charCodeAt(a)); ) {
          if (a - o > 7)
            return i(a, 1, "Too long variant, expected at most 8 characters");
          a++;
        }
        if (a - o > 4 || (a - o > 3 && B(r.charCodeAt(o))))
          n.variants.push(l.slice(o, a)), (s = a);
        else break;
      }
      for (
        ;
        r.charCodeAt(s) === 45 &&
        !(
          r.charCodeAt(s + 1) === 120 ||
          !L(r.charCodeAt(s + 1)) ||
          r.charCodeAt(s + 2) !== 45 ||
          !L(r.charCodeAt(s + 3))
        );

      ) {
        let o = s + 2,
          a = 0;
        for (
          ;
          r.charCodeAt(o) === 45 &&
          L(r.charCodeAt(o + 1)) &&
          L(r.charCodeAt(o + 2));

        ) {
          let d = o + 1;
          for (o = d + 2, a++; L(r.charCodeAt(o)); ) {
            if (o - d > 7)
              return i(
                o,
                2,
                "Too long extension, expected at most 8 characters"
              );
            o++;
          }
        }
        if (!a)
          return i(
            o,
            4,
            "Empty extension, extensions must have at least 2 characters of content"
          );
        n.extensions.push({
          singleton: l.charAt(s + 1),
          extensions: l.slice(s + 3, o).split("-"),
        }),
          (s = o);
      }
    } else s = 0;
    if (
      (s === 0 && r.charCodeAt(s) === 120) ||
      (r.charCodeAt(s) === 45 && r.charCodeAt(s + 1) === 120)
    ) {
      s = s ? s + 2 : 1;
      let o = s;
      for (; r.charCodeAt(o) === 45 && L(r.charCodeAt(o + 1)); ) {
        let a = s + 1;
        for (o = a; L(r.charCodeAt(o)); ) {
          if (o - a > 7)
            return i(
              o,
              5,
              "Too long private-use area, expected at most 8 characters"
            );
          o++;
        }
        n.privateuse.push(l.slice(s + 1, o)), (s = o);
      }
    }
    if (s !== l.length) return i(s, 6, "Found superfluous content after tag");
    return n;
    function i(o, a, d) {
      return e.warning && e.warning(d, a, o), e.forgiving ? n : at();
    }
  }
  function at() {
    return {
      language: null,
      extendedLanguageSubtags: [],
      script: null,
      region: null,
      variants: [],
      extensions: [],
      privateuse: [],
      irregular: null,
      regular: null,
    };
  }
  function ct(t, e, n) {
    let l = t.slice();
    return (l[7] = e[n][0]), (l[8] = e[n][1]), l;
  }
  function Gn(t) {
    let e,
      n,
      l,
      r,
      s,
      i = t[0] && ut(t);
    return {
      c() {
        i && i.c(),
          (e = R()),
          (n = y("div")),
          (l = y("p")),
          (l.textContent = `${t[3](30)}`),
          (r = R()),
          (s = y("p")),
          (s.textContent = `${t[3](40)}`),
          p(
            l,
            "class",
            "pagefind-ui__result-title pagefind-ui__loading svelte-j9e30"
          ),
          p(
            s,
            "class",
            "pagefind-ui__result-excerpt pagefind-ui__loading svelte-j9e30"
          ),
          p(n, "class", "pagefind-ui__result-inner svelte-j9e30");
      },
      m(o, a) {
        i && i.m(o, a), w(o, e, a), w(o, n, a), E(n, l), E(n, r), E(n, s);
      },
      p(o, a) {
        o[0]
          ? i || ((i = ut(o)), i.c(), i.m(e.parentNode, e))
          : i && (i.d(1), (i = null));
      },
      d(o) {
        i && i.d(o), o && v(e), o && v(n);
      },
    };
  }
  function xn(t) {
    let e,
      n,
      l,
      r,
      s = t[1].meta?.title + "",
      i,
      o,
      a,
      d = t[1].excerpt + "",
      f,
      _ = t[0] && ft(t),
      c = t[2].length && dt(t);
    return {
      c() {
        _ && _.c(),
          (e = R()),
          (n = y("div")),
          (l = y("p")),
          (r = y("a")),
          (o = R()),
          (a = y("p")),
          (f = R()),
          c && c.c(),
          p(r, "class", "pagefind-ui__result-link svelte-j9e30"),
          p(r, "href", (i = t[1].meta?.url || t[1].url)),
          p(l, "class", "pagefind-ui__result-title svelte-j9e30"),
          p(a, "class", "pagefind-ui__result-excerpt svelte-j9e30"),
          p(n, "class", "pagefind-ui__result-inner svelte-j9e30");
      },
      m(h, u) {
        _ && _.m(h, u),
          w(h, e, u),
          w(h, n, u),
          E(n, l),
          E(l, r),
          (r.innerHTML = s),
          E(n, o),
          E(n, a),
          (a.innerHTML = d),
          E(n, f),
          c && c.m(n, null);
      },
      p(h, u) {
        h[0]
          ? _
            ? _.p(h, u)
            : ((_ = ft(h)), _.c(), _.m(e.parentNode, e))
          : _ && (_.d(1), (_ = null)),
          u & 2 && s !== (s = h[1].meta?.title + "") && (r.innerHTML = s),
          u & 2 && i !== (i = h[1].meta?.url || h[1].url) && p(r, "href", i),
          u & 2 && d !== (d = h[1].excerpt + "") && (a.innerHTML = d),
          h[2].length
            ? c
              ? c.p(h, u)
              : ((c = dt(h)), c.c(), c.m(n, null))
            : c && (c.d(1), (c = null));
      },
      d(h) {
        _ && _.d(h), h && v(e), h && v(n), c && c.d();
      },
    };
  }
  function ut(t) {
    let e;
    return {
      c() {
        (e = y("div")),
          p(
            e,
            "class",
            "pagefind-ui__result-thumb pagefind-ui__loading svelte-j9e30"
          );
      },
      m(n, l) {
        w(n, e, l);
      },
      d(n) {
        n && v(e);
      },
    };
  }
  function ft(t) {
    let e,
      n = t[1].meta.image && _t(t);
    return {
      c() {
        (e = y("div")),
          n && n.c(),
          p(e, "class", "pagefind-ui__result-thumb svelte-j9e30");
      },
      m(l, r) {
        w(l, e, r), n && n.m(e, null);
      },
      p(l, r) {
        l[1].meta.image
          ? n
            ? n.p(l, r)
            : ((n = _t(l)), n.c(), n.m(e, null))
          : n && (n.d(1), (n = null));
      },
      d(l) {
        l && v(e), n && n.d();
      },
    };
  }
  function _t(t) {
    let e, n, l;
    return {
      c() {
        (e = y("img")),
          p(e, "class", "pagefind-ui__result-image svelte-j9e30"),
          He(e.src, (n = t[1].meta?.image)) || p(e, "src", n),
          p(e, "alt", (l = t[1].meta?.image_alt || t[1].meta?.title));
      },
      m(r, s) {
        w(r, e, s);
      },
      p(r, s) {
        s & 2 && !He(e.src, (n = r[1].meta?.image)) && p(e, "src", n),
          s & 2 &&
            l !== (l = r[1].meta?.image_alt || r[1].meta?.title) &&
            p(e, "alt", l);
      },
      d(r) {
        r && v(e);
      },
    };
  }
  function dt(t) {
    let e,
      n = t[2],
      l = [];
    for (let r = 0; r < n.length; r += 1) l[r] = ht(ct(t, n, r));
    return {
      c() {
        e = y("ul");
        for (let r = 0; r < l.length; r += 1) l[r].c();
        p(e, "class", "pagefind-ui__result-tags svelte-j9e30");
      },
      m(r, s) {
        w(r, e, s);
        for (let i = 0; i < l.length; i += 1) l[i].m(e, null);
      },
      p(r, s) {
        if (s & 4) {
          n = r[2];
          let i;
          for (i = 0; i < n.length; i += 1) {
            let o = ct(r, n, i);
            l[i] ? l[i].p(o, s) : ((l[i] = ht(o)), l[i].c(), l[i].m(e, null));
          }
          for (; i < l.length; i += 1) l[i].d(1);
          l.length = n.length;
        }
      },
      d(r) {
        r && v(e), re(l, r);
      },
    };
  }
  function ht(t) {
    let e,
      n,
      l = t[7].replace(/^(\w)/, mt) + "",
      r,
      s,
      i = t[8] + "",
      o;
    return {
      c() {
        (e = y("li")),
          (n = new W(!1)),
          (r = M(": ")),
          (s = new W(!1)),
          (o = R()),
          (n.a = r),
          (s.a = o),
          p(e, "class", "pagefind-ui__result-tag svelte-j9e30");
      },
      m(a, d) {
        w(a, e, d), n.m(l, e), E(e, r), s.m(i, e), E(e, o);
      },
      p(a, d) {
        d & 4 && l !== (l = a[7].replace(/^(\w)/, mt) + "") && n.p(l),
          d & 4 && i !== (i = a[8] + "") && s.p(i);
      },
      d(a) {
        a && v(e);
      },
    };
  }
  function Wn(t) {
    let e;
    function n(s, i) {
      return s[1] ? xn : Gn;
    }
    let l = n(t, -1),
      r = l(t);
    return {
      c() {
        (e = y("li")), r.c(), p(e, "class", "pagefind-ui__result svelte-j9e30");
      },
      m(s, i) {
        w(s, e, i), r.m(e, null);
      },
      p(s, [i]) {
        l === (l = n(s, i)) && r
          ? r.p(s, i)
          : (r.d(1), (r = l(s)), r && (r.c(), r.m(e, null)));
      },
      i: O,
      o: O,
      d(s) {
        s && v(e), r.d();
      },
    };
  }
  var mt = (t) => t.toLocaleUpperCase();
  function Vn(t, e, n) {
    let { show_images: l = !0 } = e,
      { result: r = { data: async () => {} } } = e,
      s = ["title", "image", "image_alt", "url"],
      i,
      o = [],
      a = async (f) => {
        n(1, (i = await f.data())),
          n(2, (o = Object.entries(i.meta).filter(([_]) => !s.includes(_))));
      },
      d = (f = 30) => ". ".repeat(Math.floor(10 + Math.random() * f));
    return (
      (t.$$set = (f) => {
        "show_images" in f && n(0, (l = f.show_images)),
          "result" in f && n(4, (r = f.result));
      }),
      (t.$$.update = () => {
        if (t.$$.dirty & 16) {
          e: a(r);
        }
      }),
      [l, i, o, d, r]
    );
  }
  var $e = class extends z {
      constructor(e) {
        super(), Y(this, e, Vn, Wn, V, { show_images: 0, result: 4 });
      }
    },
    pt = $e;
  function gt(t, e, n) {
    let l = t.slice();
    return (l[7] = e[n][0]), (l[8] = e[n][1]), (l[9] = e), (l[10] = n), l;
  }
  function bt(t, e, n) {
    let l = t.slice();
    return (l[11] = e[n][0]), (l[12] = e[n][1]), (l[13] = e), (l[14] = n), l;
  }
  function Et(t) {
    let e,
      n,
      l = t[3].strings.filters_label + "",
      r,
      s,
      i = Object.entries(t[1]),
      o = [];
    for (let a = 0; a < i.length; a += 1) o[a] = wt(gt(t, i, a));
    return {
      c() {
        (e = y("fieldset")), (n = y("legend")), (r = M(l)), (s = R());
        for (let a = 0; a < o.length; a += 1) o[a].c();
        p(n, "class", "pagefind-ui__filter-panel-label svelte-1v2r7ls"),
          p(e, "class", "pagefind-ui__filter-panel svelte-1v2r7ls");
      },
      m(a, d) {
        w(a, e, d), E(e, n), E(n, r), E(e, s);
        for (let f = 0; f < o.length; f += 1) o[f].m(e, null);
      },
      p(a, d) {
        if (
          (d & 8 && l !== (l = a[3].strings.filters_label + "") && I(r, l),
          d & 23)
        ) {
          i = Object.entries(a[1]);
          let f;
          for (f = 0; f < i.length; f += 1) {
            let _ = gt(a, i, f);
            o[f] ? o[f].p(_, d) : ((o[f] = wt(_)), o[f].c(), o[f].m(e, null));
          }
          for (; f < o.length; f += 1) o[f].d(1);
          o.length = i.length;
        }
      },
      d(a) {
        a && v(e), re(o, a);
      },
    };
  }
  function yt(t) {
    let e,
      n,
      l,
      r,
      s,
      i,
      o,
      a,
      d = t[11] + "",
      f,
      _ = t[12] + "",
      c,
      h,
      u,
      m,
      g,
      k;
    function P() {
      t[6].call(n, t[7], t[11]);
    }
    return {
      c() {
        (e = y("div")),
          (n = y("input")),
          (i = R()),
          (o = y("label")),
          (a = new W(!1)),
          (f = M(" (")),
          (c = M(_)),
          (h = M(")")),
          (m = R()),
          p(n, "class", "pagefind-ui__filter-checkbox svelte-1v2r7ls"),
          p(n, "type", "checkbox"),
          p(n, "id", (l = t[7] + "-" + t[11])),
          p(n, "name", (r = t[7])),
          (n.__value = s = t[11]),
          (n.value = n.__value),
          (a.a = f),
          p(o, "class", "pagefind-ui__filter-label svelte-1v2r7ls"),
          p(o, "for", (u = t[7] + "-" + t[11])),
          p(e, "class", "pagefind-ui__filter-value svelte-1v2r7ls"),
          q(e, "pagefind-ui__filter-value--checked", t[0][`${t[7]}:${t[11]}`]);
      },
      m(j, F) {
        w(j, e, F),
          E(e, n),
          (n.checked = t[0][`${t[7]}:${t[11]}`]),
          E(e, i),
          E(e, o),
          a.m(d, o),
          E(o, f),
          E(o, c),
          E(o, h),
          E(e, m),
          g || ((k = K(n, "change", P)), (g = !0));
      },
      p(j, F) {
        (t = j),
          F & 2 && l !== (l = t[7] + "-" + t[11]) && p(n, "id", l),
          F & 2 && r !== (r = t[7]) && p(n, "name", r),
          F & 2 &&
            s !== (s = t[11]) &&
            ((n.__value = s), (n.value = n.__value)),
          F & 3 && (n.checked = t[0][`${t[7]}:${t[11]}`]),
          F & 2 && d !== (d = t[11] + "") && a.p(d),
          F & 2 && _ !== (_ = t[12] + "") && I(c, _),
          F & 2 && u !== (u = t[7] + "-" + t[11]) && p(o, "for", u),
          F & 3 &&
            q(
              e,
              "pagefind-ui__filter-value--checked",
              t[0][`${t[7]}:${t[11]}`]
            );
      },
      d(j) {
        j && v(e), (g = !1), k();
      },
    };
  }
  function vt(t) {
    let e,
      n = (t[2] || t[12] || t[0][`${t[7]}:${t[11]}`]) && yt(t);
    return {
      c() {
        n && n.c(), (e = J());
      },
      m(l, r) {
        n && n.m(l, r), w(l, e, r);
      },
      p(l, r) {
        l[2] || l[12] || l[0][`${l[7]}:${l[11]}`]
          ? n
            ? n.p(l, r)
            : ((n = yt(l)), n.c(), n.m(e.parentNode, e))
          : n && (n.d(1), (n = null));
      },
      d(l) {
        n && n.d(l), l && v(e);
      },
    };
  }
  function wt(t) {
    let e,
      n,
      l = t[7].replace(/^(\w)/, Ct) + "",
      r,
      s,
      i,
      o = t[7] + "",
      a,
      d,
      f = Object.entries(t[8] || {}),
      _ = [];
    for (let c = 0; c < f.length; c += 1) _[c] = vt(bt(t, f, c));
    return {
      c() {
        (e = y("details")),
          (n = y("summary")),
          (r = R()),
          (s = y("fieldset")),
          (i = y("legend")),
          (a = R());
        for (let c = 0; c < _.length; c += 1) _[c].c();
        (d = R()),
          p(n, "class", "pagefind-ui__filter-name svelte-1v2r7ls"),
          p(i, "class", "pagefind-ui__filter-group-label svelte-1v2r7ls"),
          p(s, "class", "pagefind-ui__filter-group svelte-1v2r7ls"),
          p(e, "class", "pagefind-ui__filter-block svelte-1v2r7ls"),
          (e.open = t[4]);
      },
      m(c, h) {
        w(c, e, h),
          E(e, n),
          (n.innerHTML = l),
          E(e, r),
          E(e, s),
          E(s, i),
          (i.innerHTML = o),
          E(s, a);
        for (let u = 0; u < _.length; u += 1) _[u].m(s, null);
        E(e, d);
      },
      p(c, h) {
        if (
          (h & 2 &&
            l !== (l = c[7].replace(/^(\w)/, Ct) + "") &&
            (n.innerHTML = l),
          h & 2 && o !== (o = c[7] + "") && (i.innerHTML = o),
          h & 7)
        ) {
          f = Object.entries(c[8] || {});
          let u;
          for (u = 0; u < f.length; u += 1) {
            let m = bt(c, f, u);
            _[u] ? _[u].p(m, h) : ((_[u] = vt(m)), _[u].c(), _[u].m(s, null));
          }
          for (; u < _.length; u += 1) _[u].d(1);
          _.length = f.length;
        }
        h & 16 && (e.open = c[4]);
      },
      d(c) {
        c && v(e), re(_, c);
      },
    };
  }
  function Jn(t) {
    let e = t[1] && Object.entries(t[1]).length,
      n,
      l = e && Et(t);
    return {
      c() {
        l && l.c(), (n = J());
      },
      m(r, s) {
        l && l.m(r, s), w(r, n, s);
      },
      p(r, [s]) {
        s & 2 && (e = r[1] && Object.entries(r[1]).length),
          e
            ? l
              ? l.p(r, s)
              : ((l = Et(r)), l.c(), l.m(n.parentNode, n))
            : l && (l.d(1), (l = null));
      },
      i: O,
      o: O,
      d(r) {
        l && l.d(r), r && v(n);
      },
    };
  }
  var Ct = (t) => t.toLocaleUpperCase();
  function Kn(t, e, n) {
    let { available_filters: l = null } = e,
      { show_empty_filters: r = !0 } = e,
      { translations: s } = e,
      i = {},
      o = !1,
      a = !1;
    function d(f, _) {
      (i[`${f}:${_}`] = this.checked), n(0, i);
    }
    return (
      (t.$$set = (f) => {
        "available_filters" in f && n(1, (l = f.available_filters)),
          "show_empty_filters" in f && n(2, (r = f.show_empty_filters)),
          "translations" in f && n(3, (s = f.translations));
      }),
      (t.$$.update = () => {
        if (t.$$.dirty & 34) {
          e: if (l && !o) {
            n(5, (o = !0));
            let f = Object.entries(l || {});
            f.length === 1 &&
              Object.entries(f[0][1])?.length <= 6 &&
              n(4, (a = !0));
          }
        }
      }),
      [i, l, r, s, a, o, d]
    );
  }
  var ze = class extends z {
      constructor(e) {
        super(),
          Y(this, e, Kn, Jn, V, {
            available_filters: 1,
            show_empty_filters: 2,
            translations: 3,
            selected_filters: 0,
          });
      }
      get selected_filters() {
        return this.$$.ctx[0];
      }
    },
    Rt = ze;
  var Ie = {};
  D(Ie, {
    comments: () => Ft,
    default: () => Yn,
    direction: () => St,
    strings: () => Tt,
    thanks_to: () => kt,
  });
  var kt = "Jan Claasen",
    Ft = "",
    St = "ltr",
    Tt = {
      placeholder: "Soek",
      clear_search: "Opruim",
      load_more: "Laai nog resultate",
      search_label: "Soek hierdie webwerf",
      filters_label: "Filters",
      zero_results: "Geen resultate vir [SEARCH_TERM]",
      many_results: "[COUNT] resultate vir [SEARCH_TERM]",
      one_result: "[COUNT] resultate vir [SEARCH_TERM]",
      alt_search:
        "Geen resultate vir [SEARCH_TERM]. Toon resultate vir [DIFFERENT_TERM] in plaas daarvan",
      search_suggestion:
        "Geen resultate vir [SEARCH_TERM]. Probeer eerder een van die volgende terme:",
      searching: "Soek vir [SEARCH_TERM]",
    },
    Yn = { thanks_to: kt, comments: Ft, direction: St, strings: Tt };
  var Le = {};
  D(Le, {
    comments: () => Mt,
    default: () => Qn,
    direction: () => Ht,
    strings: () => Nt,
    thanks_to: () => At,
  });
  var At = "Jan Claasen",
    Mt = "",
    Ht = "ltr",
    Nt = {
      placeholder: "Suche",
      clear_search: "L\xF6schen",
      load_more: "Mehr Ergebnisse laden",
      search_label: "Suche diese Seite",
      filters_label: "Filter",
      zero_results: "Keine Ergebnisse f\xFCr [SEARCH_TERM]",
      many_results: "[COUNT] Ergebnisse f\xFCr [SEARCH_TERM]",
      one_result: "[COUNT] Ergebnis f\xFCr [SEARCH_TERM]",
      alt_search:
        "Keine Ergebnisse f\xFCr [SEARCH_TERM]. Stattdessen werden Ergebnisse f\xFCr [DIFFERENT_TERM] angezeigt",
      search_suggestion:
        "Keine Ergebnisse f\xFCr [SEARCH_TERM]. Versuchen Sie eine der folgenden Suchen:",
      searching: "Suche f\xFCr [SEARCH_TERM]",
    },
    Qn = { thanks_to: At, comments: Mt, direction: Ht, strings: Nt };
  var Pe = {};
  D(Pe, {
    comments: () => jt,
    default: () => Xn,
    direction: () => Dt,
    strings: () => $t,
    thanks_to: () => Ot,
  });
  var Ot = "Liam Bigelow <liam@cloudcannon.com>",
    jt = "",
    Dt = "ltr",
    $t = {
      placeholder: "Search",
      clear_search: "Clear",
      load_more: "Load more results",
      search_label: "Search this site",
      filters_label: "Filters",
      zero_results: "No results for [SEARCH_TERM]",
      many_results: "[COUNT] results for [SEARCH_TERM]",
      one_result: "[COUNT] result for [SEARCH_TERM]",
      alt_search:
        "No results for [SEARCH_TERM]. Showing results for [DIFFERENT_TERM] instead",
      search_suggestion:
        "No results for [SEARCH_TERM]. Try one of the following searches:",
      searching: "Searching for [SEARCH_TERM]...",
    },
    Xn = { thanks_to: Ot, comments: jt, direction: Dt, strings: $t };
  var Ue = {};
  D(Ue, {
    comments: () => It,
    default: () => Zn,
    direction: () => Lt,
    strings: () => Pt,
    thanks_to: () => zt,
  });
  var zt = "Nicolas Friedli <nicolas@theologique.ch>",
    It = "",
    Lt = "ltr",
    Pt = {
      placeholder: "Rechercher",
      clear_search: "Nettoyer",
      load_more: "Charger plus de r\xE9sultats",
      search_label: "Recherche sur ce site",
      filters_label: "Filtres",
      zero_results: "Pas de r\xE9sultat pour [SEARCH_TERM]",
      many_results: "[COUNT] r\xE9sultats pour [SEARCH_TERM]",
      one_result: "[COUNT] r\xE9sultat pour [SEARCH_TERM]",
      alt_search:
        "Pas de r\xE9sultat pour [SEARCH_TERM]. Montre les r\xE9sultats pour [DIFFERENT_TERM] \xE0 la place",
      search_suggestion:
        "Pas de r\xE9sultat pour [SEARCH_TERM]. Essayer une des recherches suivantes:",
      searching: "Recherche [SEARCH_TERM]...",
    },
    Zn = { thanks_to: zt, comments: It, direction: Lt, strings: Pt };
  var qe = {};
  D(qe, {
    comments: () => qt,
    default: () => el,
    direction: () => Bt,
    strings: () => Gt,
    thanks_to: () => Ut,
  });
  var Ut = "Tate",
    qt = "",
    Bt = "ltr",
    Gt = {
      placeholder: "\u691C\u7D22",
      clear_search: "\u6D88\u3059",
      load_more: "\u3082\u3063\u3068\u8AAD\u307F\u8FBC\u3080",
      search_label: "\u3053\u306E\u30B5\u30A4\u30C8\u3092\u691C\u7D22",
      filters_label: "\u30D5\u30A3\u30EB\u30BF",
      zero_results:
        "[SEARCH_TERM]\u306E\u691C\u7D22\u306B\u4E00\u81F4\u3059\u308B\u4EF6\u306F\u3042\u308A\u307E\u305B\u3093\u3067\u3057\u305F",
      many_results:
        "[SEARCH_TERM]\u306E[COUNT]\u4EF6\u306E\u691C\u7D22\u7D50\u679C",
      one_result:
        "[SEARCH_TERM]\u306E[COUNT]\u4EF6\u306E\u691C\u7D22\u7D50\u679C",
      alt_search:
        "[SEARCH_TERM]\u306E\u691C\u7D22\u306B\u4E00\u81F4\u3059\u308B\u4EF6\u306F\u3042\u308A\u307E\u305B\u3093\u3067\u3057\u305F\u3002[DIFFERENT_TERM]\u306E\u691C\u7D22\u7D50\u679C\u3092\u8868\u793A\u3057\u3066\u3044\u307E\u3059",
      search_suggestion:
        "[SEARCH_TERM]\u306E\u691C\u7D22\u306B\u4E00\u81F4\u3059\u308B\u4EF6\u306F\u3042\u308A\u307E\u305B\u3093\u3067\u3057\u305F\u3002\u6B21\u306E\u3044\u305A\u308C\u304B\u306E\u691C\u7D22\u3092\u8A66\u3057\u3066\u304F\u3060\u3055\u3044",
      searching:
        "[SEARCH_TERM]\u3092\u691C\u7D22\u3057\u3066\u3044\u307E\u3059",
    },
    el = { thanks_to: Ut, comments: qt, direction: Bt, strings: Gt };
  var Be = {};
  D(Be, {
    comments: () => Wt,
    default: () => tl,
    direction: () => Vt,
    strings: () => Jt,
    thanks_to: () => xt,
  });
  var xt = "Christopher Wingate",
    Wt = "",
    Vt = "ltr",
    Jt = {
      placeholder: "S\xF8k",
      clear_search: "Fjern",
      load_more: "Last flere resultater",
      search_label: "S\xF8k p\xE5 denne siden",
      filters_label: "Filtre",
      zero_results: "Ingen resultater for [SEARCH_TERM]",
      many_results: "[COUNT] resultater for [SEARCH_TERM]",
      one_result: "[COUNT] resultat for [SEARCH_TERM]",
      alt_search:
        "Ingen resultater for [SEARCH_TERM]. Viser resultater for [DIFFERENT_TERM] i stedet",
      search_suggestion:
        "Ingen resultater for [SEARCH_TERM]. Pr\xF8v en av disse s\xF8keordene i stedet:",
      searching: "S\xF8ker etter [SEARCH_TERM]",
    },
    tl = { thanks_to: xt, comments: Wt, direction: Vt, strings: Jt };
  var Ge = {};
  D(Ge, {
    comments: () => Yt,
    default: () => nl,
    direction: () => Qt,
    strings: () => Xt,
    thanks_to: () => Kt,
  });
  var Kt = "Jonatah",
    Yt = "",
    Qt = "ltr",
    Xt = {
      placeholder: "Pesquisar",
      clear_search: "Limpar",
      load_more: "Ver mais resultados",
      search_label: "Pesquisar",
      filters_label: "Filtros",
      zero_results: "Nenhum resultado encontrado para [SEARCH_TERM]",
      many_results: "[COUNT] resultados encontrados para [SEARCH_TERM]",
      one_result: "[COUNT] resultado encontrado para [SEARCH_TERM]",
      alt_search:
        "Nenhum resultado encontrado para [SEARCH_TERM]. Exibindo resultados para [DIFFERENT_TERM]",
      search_suggestion:
        "Nenhum resultado encontrado para [SEARCH_TERM]. Tente uma das seguintes pesquisas:",
      searching: "Pesquisando por [SEARCH_TERM]...",
    },
    nl = { thanks_to: Kt, comments: Yt, direction: Qt, strings: Xt };
  var xe = {};
  D(xe, {
    comments: () => en,
    default: () => ll,
    direction: () => tn,
    strings: () => nn,
    thanks_to: () => Zt,
  });
  var Zt = "Aleksandr Gordeev",
    en = "",
    tn = "ltr",
    nn = {
      placeholder: "\u041F\u043E\u0438\u0441\u043A",
      clear_search:
        "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u043F\u043E\u043B\u0435",
      load_more:
        "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0435\u0449\u0435",
      search_label:
        "\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u0441\u0430\u0439\u0442\u0443",
      filters_label: "\u0424\u0438\u043B\u044C\u0442\u0440\u044B",
      zero_results:
        "\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E \u043F\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0443: [SEARCH_TERM]",
      many_results:
        "[COUNT] \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432 \u043F\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0443: [SEARCH_TERM]",
      one_result:
        "[COUNT] \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u043F\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0443: [SEARCH_TERM]",
      alt_search:
        "\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E \u043F\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0443: [SEARCH_TERM]. \u041F\u043E\u043A\u0430\u0437\u0430\u043D\u044B \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B \u043F\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0443: [DIFFERENT_TERM]",
      search_suggestion:
        "\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E \u043F\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0443: [SEARCH_TERM]. \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u043E\u0434\u0438\u043D \u0438\u0437 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0445 \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u043E\u0432",
      searching:
        "\u041F\u043E\u0438\u0441\u043A \u043F\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0443: [SEARCH_TERM]",
    },
    ll = { thanks_to: Zt, comments: en, direction: tn, strings: nn };
  var We = {};
  D(We, {
    comments: () => rn,
    default: () => rl,
    direction: () => sn,
    strings: () => on,
    thanks_to: () => ln,
  });
  var ln = "Amber Song",
    rn = "",
    sn = "ltr",
    on = {
      placeholder: "\u641C\u7D22",
      clear_search: "\u6E05\u9664",
      load_more: "\u52A0\u8F7D\u66F4\u591A\u7ED3\u679C",
      search_label: "\u7AD9\u5185\u641C\u7D22",
      filters_label: "\u7B5B\u9009",
      zero_results:
        "\u672A\u627E\u5230 [SEARCH_TERM] \u7684\u76F8\u5173\u7ED3\u679C",
      many_results:
        "\u627E\u5230 [COUNT] \u4E2A [SEARCH_TERM] \u7684\u76F8\u5173\u7ED3\u679C",
      one_result:
        "\u627E\u5230 [COUNT] \u4E2A [SEARCH_TERM] \u7684\u76F8\u5173\u7ED3\u679C",
      alt_search:
        "\u672A\u627E\u5230 [SEARCH_TERM] \u7684\u76F8\u5173\u7ED3\u679C\u3002\u6539\u4E3A\u663E\u793A [DIFFERENT_TERM] \u7684\u76F8\u5173\u7ED3\u679C",
      search_suggestion:
        "\u672A\u627E\u5230 [SEARCH_TERM] \u7684\u76F8\u5173\u7ED3\u679C\u3002\u8BF7\u5C1D\u8BD5\u4EE5\u4E0B\u641C\u7D22\u3002",
      searching: "\u6B63\u5728\u641C\u7D22 [SEARCH_TERM]...",
    },
    rl = { thanks_to: ln, comments: rn, direction: sn, strings: on };
  var Ve = {};
  D(Ve, {
    comments: () => cn,
    default: () => sl,
    direction: () => un,
    strings: () => fn,
    thanks_to: () => an,
  });
  var an = "Amber Song",
    cn = "",
    un = "ltr",
    fn = {
      placeholder: "\u641C\u7D22",
      clear_search: "\u6E05\u9664",
      load_more: "\u52A0\u8F09\u66F4\u591A\u7D50\u679C",
      search_label: "\u7AD9\u5167\u641C\u7D22",
      filters_label: "\u7BE9\u9078",
      zero_results:
        "\u672A\u627E\u5230 [SEARCH_TERM] \u7684\u76F8\u95DC\u7D50\u679C",
      many_results:
        "\u627E\u5230 [COUNT] \u500B [SEARCH_TERM] \u7684\u76F8\u95DC\u7D50\u679C",
      one_result:
        "\u627E\u5230 [COUNT] \u500B [SEARCH_TERM] \u7684\u76F8\u95DC\u7D50\u679C",
      alt_search:
        "\u672A\u627E\u5230 [SEARCH_TERM] \u7684\u76F8\u95DC\u7D50\u679C\u3002\u6539\u70BA\u986F\u793A [DIFFERENT_TERM] \u7684\u76F8\u95DC\u7D50\u679C",
      search_suggestion:
        "\u672A\u627E\u5230 [SEARCH_TERM] \u7684\u76F8\u95DC\u7D50\u679C\u3002\u8ACB\u5617\u8A66\u4EE5\u4E0B\u641C\u7D22\u3002",
      searching: "\u6B63\u5728\u641C\u7D22 [SEARCH_TERM]...",
    },
    sl = { thanks_to: an, comments: cn, direction: un, strings: fn };
  var Je = {};
  D(Je, {
    comments: () => dn,
    default: () => il,
    direction: () => hn,
    strings: () => mn,
    thanks_to: () => _n,
  });
  var _n = "Amber Song",
    dn = "",
    hn = "ltr",
    mn = {
      placeholder: "\u641C\u7D22",
      clear_search: "\u6E05\u9664",
      load_more: "\u52A0\u8F7D\u66F4\u591A\u7ED3\u679C",
      search_label: "\u7AD9\u5185\u641C\u7D22",
      filters_label: "\u7B5B\u9009",
      zero_results:
        "\u672A\u627E\u5230 [SEARCH_TERM] \u7684\u76F8\u5173\u7ED3\u679C",
      many_results:
        "\u627E\u5230 [COUNT] \u4E2A [SEARCH_TERM] \u7684\u76F8\u5173\u7ED3\u679C",
      one_result:
        "\u627E\u5230 [COUNT] \u4E2A [SEARCH_TERM] \u7684\u76F8\u5173\u7ED3\u679C",
      alt_search:
        "\u672A\u627E\u5230 [SEARCH_TERM] \u7684\u76F8\u5173\u7ED3\u679C\u3002\u6539\u4E3A\u663E\u793A [DIFFERENT_TERM] \u7684\u76F8\u5173\u7ED3\u679C",
      search_suggestion:
        "\u672A\u627E\u5230 [SEARCH_TERM] \u7684\u76F8\u5173\u7ED3\u679C\u3002\u8BF7\u5C1D\u8BD5\u4EE5\u4E0B\u641C\u7D22\u3002",
      searching: "\u6B63\u5728\u641C\u7D22 [SEARCH_TERM]...",
    },
    il = { thanks_to: _n, comments: dn, direction: hn, strings: mn };
  var ol = [Ie, Le, Pe, Ue, qe, Be, Ge, xe, We, Ve, Je],
    pn = ol,
    gn = [
      "../translations/af.json",
      "../translations/de.json",
      "../translations/en.json",
      "../translations/fr.json",
      "../translations/ja.json",
      "../translations/no.json",
      "../translations/pt.json",
      "../translations/ru.json",
      "../translations/zh-cn.json",
      "../translations/zh-tw.json",
      "../translations/zh.json",
    ];
  function bn(t, e, n) {
    let l = t.slice();
    return (l[29] = e[n]), l;
  }
  function En(t) {
    let e, n, l;
    function r(i) {
      t[20](i);
    }
    let s = {
      show_empty_filters: t[2],
      available_filters: t[11],
      translations: t[12],
    };
    return (
      t[4] !== void 0 && (s.selected_filters = t[4]),
      (e = new Rt({ props: s })),
      Ce.push(() => it(e, "selected_filters", r)),
      {
        c() {
          je(e.$$.fragment);
        },
        m(i, o) {
          Re(e, i, o), (l = !0);
        },
        p(i, o) {
          let a = {};
          o[0] & 4 && (a.show_empty_filters = i[2]),
            o[0] & 2048 && (a.available_filters = i[11]),
            o[0] & 4096 && (a.translations = i[12]),
            !n &&
              o[0] & 16 &&
              ((n = !0), (a.selected_filters = i[4]), nt(() => (n = !1))),
            e.$set(a);
        },
        i(i) {
          l || (H(e.$$.fragment, i), (l = !0));
        },
        o(i) {
          $(e.$$.fragment, i), (l = !1);
        },
        d(i) {
          oe(e, i);
        },
      }
    );
  }
  function yn(t) {
    let e,
      n,
      l,
      r,
      s = [ul, cl],
      i = [];
    function o(a, d) {
      return a[7] ? 0 : 1;
    }
    return (
      (n = o(t, [-1, -1])),
      (l = i[n] = s[n](t)),
      {
        c() {
          (e = y("div")),
            l.c(),
            p(e, "class", "pagefind-ui__results-area svelte-193m69l");
        },
        m(a, d) {
          w(a, e, d), i[n].m(e, null), (r = !0);
        },
        p(a, d) {
          let f = n;
          (n = o(a, d)),
            n === f
              ? i[n].p(a, d)
              : (se(),
                $(i[f], 1, 1, () => {
                  i[f] = null;
                }),
                ie(),
                (l = i[n]),
                l ? l.p(a, d) : ((l = i[n] = s[n](a)), l.c()),
                H(l, 1),
                l.m(e, null));
        },
        i(a) {
          r || (H(l), (r = !0));
        },
        o(a) {
          $(l), (r = !1);
        },
        d(a) {
          a && v(e), i[n].d();
        },
      }
    );
  }
  function cl(t) {
    let e,
      n,
      l,
      r = [],
      s = new Map(),
      i,
      o,
      a;
    function d(m, g) {
      return m[6].results.length === 0
        ? dl
        : m[6].results.length === 1
        ? _l
        : fl;
    }
    let f = d(t, [-1, -1]),
      _ = f(t),
      c = t[6].results.slice(0, t[10]),
      h = (m) => m[29].id;
    for (let m = 0; m < c.length; m += 1) {
      let g = bn(t, c, m),
        k = h(g);
      s.set(k, (r[m] = vn(k, g)));
    }
    let u = t[6].results.length > t[10] && wn(t);
    return {
      c() {
        (e = y("p")), _.c(), (n = R()), (l = y("ol"));
        for (let m = 0; m < r.length; m += 1) r[m].c();
        (i = R()),
          u && u.c(),
          (o = J()),
          p(e, "class", "pagefind-ui__message svelte-193m69l"),
          p(l, "class", "pagefind-ui__results svelte-193m69l");
      },
      m(m, g) {
        w(m, e, g), _.m(e, null), w(m, n, g), w(m, l, g);
        for (let k = 0; k < r.length; k += 1) r[k].m(l, null);
        w(m, i, g), u && u.m(m, g), w(m, o, g), (a = !0);
      },
      p(m, g) {
        f === (f = d(m, g)) && _
          ? _.p(m, g)
          : (_.d(1), (_ = f(m)), _ && (_.c(), _.m(e, null))),
          g[0] & 1090 &&
            ((c = m[6].results.slice(0, m[10])),
            se(),
            (r = st(r, g, h, 1, m, c, s, l, rt, vn, null, bn)),
            ie()),
          m[6].results.length > m[10]
            ? u
              ? u.p(m, g)
              : ((u = wn(m)), u.c(), u.m(o.parentNode, o))
            : u && (u.d(1), (u = null));
      },
      i(m) {
        if (!a) {
          for (let g = 0; g < c.length; g += 1) H(r[g]);
          a = !0;
        }
      },
      o(m) {
        for (let g = 0; g < r.length; g += 1) $(r[g]);
        a = !1;
      },
      d(m) {
        m && v(e), _.d(), m && v(n), m && v(l);
        for (let g = 0; g < r.length; g += 1) r[g].d();
        m && v(i), u && u.d(m), m && v(o);
      },
    };
  }
  function ul(t) {
    let e,
      n = t[9] && Cn(t);
    return {
      c() {
        n && n.c(), (e = J());
      },
      m(l, r) {
        n && n.m(l, r), w(l, e, r);
      },
      p(l, r) {
        l[9]
          ? n
            ? n.p(l, r)
            : ((n = Cn(l)), n.c(), n.m(e.parentNode, e))
          : n && (n.d(1), (n = null));
      },
      i: O,
      o: O,
      d(l) {
        n && n.d(l), l && v(e);
      },
    };
  }
  function fl(t) {
    let e =
        t[12].strings.many_results
          .replace(/\[SEARCH_TERM\]/, t[9])
          .replace(
            /\[COUNT\]/,
            new Intl.NumberFormat(t[12].language).format(t[6].results.length)
          ) + "",
      n;
    return {
      c() {
        n = M(e);
      },
      m(l, r) {
        w(l, n, r);
      },
      p(l, r) {
        r[0] & 4672 &&
          e !==
            (e =
              l[12].strings.many_results
                .replace(/\[SEARCH_TERM\]/, l[9])
                .replace(
                  /\[COUNT\]/,
                  new Intl.NumberFormat(l[12].language).format(
                    l[6].results.length
                  )
                ) + "") &&
          I(n, e);
      },
      d(l) {
        l && v(n);
      },
    };
  }
  function _l(t) {
    let e =
        t[12].strings.one_result
          .replace(/\[SEARCH_TERM\]/, t[9])
          .replace(
            /\[COUNT\]/,
            new Intl.NumberFormat(t[12].language).format(1)
          ) + "",
      n;
    return {
      c() {
        n = M(e);
      },
      m(l, r) {
        w(l, n, r);
      },
      p(l, r) {
        r[0] & 4608 &&
          e !==
            (e =
              l[12].strings.one_result
                .replace(/\[SEARCH_TERM\]/, l[9])
                .replace(
                  /\[COUNT\]/,
                  new Intl.NumberFormat(l[12].language).format(1)
                ) + "") &&
          I(n, e);
      },
      d(l) {
        l && v(n);
      },
    };
  }
  function dl(t) {
    let e = t[12].strings.zero_results.replace(/\[SEARCH_TERM\]/, t[9]) + "",
      n;
    return {
      c() {
        n = M(e);
      },
      m(l, r) {
        w(l, n, r);
      },
      p(l, r) {
        r[0] & 4608 &&
          e !==
            (e =
              l[12].strings.zero_results.replace(/\[SEARCH_TERM\]/, l[9]) +
              "") &&
          I(n, e);
      },
      d(l) {
        l && v(n);
      },
    };
  }
  function vn(t, e) {
    let n, l, r;
    return (
      (l = new pt({ props: { show_images: e[1], result: e[29] } })),
      {
        key: t,
        first: null,
        c() {
          (n = J()), je(l.$$.fragment), (this.first = n);
        },
        m(s, i) {
          w(s, n, i), Re(l, s, i), (r = !0);
        },
        p(s, i) {
          e = s;
          let o = {};
          i[0] & 2 && (o.show_images = e[1]),
            i[0] & 1088 && (o.result = e[29]),
            l.$set(o);
        },
        i(s) {
          r || (H(l.$$.fragment, s), (r = !0));
        },
        o(s) {
          $(l.$$.fragment, s), (r = !1);
        },
        d(s) {
          s && v(n), oe(l, s);
        },
      }
    );
  }
  function wn(t) {
    let e,
      n = t[12].strings.load_more + "",
      l,
      r,
      s;
    return {
      c() {
        (e = y("button")),
          (l = M(n)),
          p(e, "type", "button"),
          p(e, "class", "pagefind-ui__button svelte-193m69l");
      },
      m(i, o) {
        w(i, e, o), E(e, l), r || ((s = K(e, "click", t[14])), (r = !0));
      },
      p(i, o) {
        o[0] & 4096 && n !== (n = i[12].strings.load_more + "") && I(l, n);
      },
      d(i) {
        i && v(e), (r = !1), s();
      },
    };
  }
  function Cn(t) {
    let e,
      n = t[12].strings.searching.replace(/\[SEARCH_TERM\]/, t[9]) + "",
      l;
    return {
      c() {
        (e = y("p")),
          (l = M(n)),
          p(e, "class", "pagefind-ui__message svelte-193m69l");
      },
      m(r, s) {
        w(r, e, s), E(e, l);
      },
      p(r, s) {
        s[0] & 4608 &&
          n !==
            (n =
              r[12].strings.searching.replace(/\[SEARCH_TERM\]/, r[9]) + "") &&
          I(l, n);
      },
      d(r) {
        r && v(e);
      },
    };
  }
  function hl(t) {
    let e,
      n,
      l,
      r,
      s,
      i,
      o,
      a,
      d,
      f,
      _,
      c = t[5] && En(t),
      h = t[8] && yn(t);
    return {
      c() {
        (e = y("div")),
          (n = y("form")),
          (l = y("input")),
          (s = R()),
          (i = y("div")),
          c && c.c(),
          (o = R()),
          h && h.c(),
          p(l, "class", "pagefind-ui__search-input svelte-193m69l"),
          p(l, "type", "text"),
          p(l, "placeholder", (r = t[12].strings.placeholder)),
          p(i, "class", "pagefind-ui__drawer svelte-193m69l"),
          q(i, "pagefind-ui__hidden", !t[8]),
          p(n, "class", "pagefind-ui__form svelte-193m69l"),
          p(n, "role", "search"),
          p(n, "aria-label", (a = t[12].strings.search_label)),
          p(n, "action", "javascript:void(0);"),
          p(e, "class", "pagefind-ui svelte-193m69l"),
          q(e, "pagefind-ui--reset", t[0]);
      },
      m(u, m) {
        w(u, e, m),
          E(e, n),
          E(n, l),
          Ne(l, t[3]),
          E(n, s),
          E(n, i),
          c && c.m(i, null),
          E(i, o),
          h && h.m(i, null),
          (d = !0),
          f ||
            ((_ = [
              K(l, "focus", t[13]),
              K(l, "input", t[19]),
              K(n, "submit", ml),
            ]),
            (f = !0));
      },
      p(u, m) {
        (!d || (m[0] & 4096 && r !== (r = u[12].strings.placeholder))) &&
          p(l, "placeholder", r),
          m[0] & 8 && l.value !== u[3] && Ne(l, u[3]),
          u[5]
            ? c
              ? (c.p(u, m), m[0] & 32 && H(c, 1))
              : ((c = En(u)), c.c(), H(c, 1), c.m(i, o))
            : c &&
              (se(),
              $(c, 1, 1, () => {
                c = null;
              }),
              ie()),
          u[8]
            ? h
              ? (h.p(u, m), m[0] & 256 && H(h, 1))
              : ((h = yn(u)), h.c(), H(h, 1), h.m(i, null))
            : h &&
              (se(),
              $(h, 1, 1, () => {
                h = null;
              }),
              ie()),
          m[0] & 256 && q(i, "pagefind-ui__hidden", !u[8]),
          (!d || (m[0] & 4096 && a !== (a = u[12].strings.search_label))) &&
            p(n, "aria-label", a),
          m[0] & 1 && q(e, "pagefind-ui--reset", u[0]);
      },
      i(u) {
        d || (H(c), H(h), (d = !0));
      },
      o(u) {
        $(c), $(h), (d = !1);
      },
      d(u) {
        u && v(e), c && c.d(), h && h.d(), (f = !1), U(_);
      },
    };
  }
  var ml = (t) => t.preventDefault();
  function pl(t, e, n) {
    let l = {},
      r = gn.map((b) => b.match(/([^\/]+)\.json$/)[1]);
    for (let b = 0; b < r.length; b++) l[r[b]] = { language: r[b], ...pn[b] };
    let { base_path: s = "/_pagefind/" } = e,
      { reset_styles: i = !0 } = e,
      { show_images: o = !0 } = e,
      { show_empty_filters: a = !0 } = e,
      { pagefind_options: d = {} } = e,
      { merge_index: f = [] } = e,
      { trigger_search_term: _ = "" } = e,
      c = "",
      h,
      u = !1,
      m = [],
      g = !1,
      k = !1,
      P = 0,
      j = "",
      F = 5,
      Q = null,
      C = null,
      T = {},
      N = l.en;
    Oe(() => {
      let b = document?.querySelector?.("html")?.getAttribute?.("lang") || "en",
        A = ke(b.toLocaleLowerCase());
      n(
        12,
        (N =
          l[`${A.language}-${A.script}-${A.region}`] ||
          l[`${A.language}-${A.region}`] ||
          l[`${A.language}`] ||
          l.en)
      );
    });
    let G = async () => {
        if (!u && (n(5, (u = !0)), !h)) {
          (h = await import(`${s}pagefind.js`)), await h.options(d || {});
          for (let b of f) {
            if (!b.bundlePath)
              throw new Error("mergeIndex requires a bundlePath parameter");
            let A = b.bundlePath;
            delete b.bundlePath, await h.mergeIndex(A, b);
          }
          kn();
        }
      },
      kn = async () => {
        h &&
          ((Q = await h.filters()),
          (!C || !Object.keys(C).length) && n(11, (C = Q)));
      },
      Fn = (b) => {
        let A = {};
        return (
          Object.entries(b)
            .filter(([, Z]) => Z)
            .forEach(([Z]) => {
              let [ee, X] = Z.split(/:(.*)$/);
              (A[ee] = A[ee] || []), A[ee].push(X);
            }),
          A
        );
      },
      Sn = async (b, A) => {
        let Z = Fn(A);
        if (!b) {
          n(8, (k = !1));
          return;
        }
        for (n(9, (j = b || "")), n(7, (g = !0)), n(8, (k = !0)); !h; )
          G(), await new Promise((Hn) => setTimeout(Hn, 50));
        let ee = ++P,
          X = await h.search(b, { filters: Z });
        P === ee &&
          (X.filters &&
            Object.keys(X.filters)?.length &&
            n(11, (C = X.filters)),
          n(6, (m = X)),
          n(7, (g = !1)),
          n(10, (F = 5)));
      },
      Tn = (b) => {
        b?.preventDefault(), n(10, (F += 5));
      };
    function An() {
      (c = this.value), n(3, c), n(15, _);
    }
    function Mn(b) {
      (T = b), n(4, T);
    }
    return (
      (t.$$set = (b) => {
        "base_path" in b && n(16, (s = b.base_path)),
          "reset_styles" in b && n(0, (i = b.reset_styles)),
          "show_images" in b && n(1, (o = b.show_images)),
          "show_empty_filters" in b && n(2, (a = b.show_empty_filters)),
          "pagefind_options" in b && n(17, (d = b.pagefind_options)),
          "merge_index" in b && n(18, (f = b.merge_index)),
          "trigger_search_term" in b && n(15, (_ = b.trigger_search_term));
      }),
      (t.$$.update = () => {
        if (t.$$.dirty[0] & 32768) {
          e: _ && (n(3, (c = _)), n(15, (_ = "")));
        }
        if (t.$$.dirty[0] & 24) {
          e: Sn(c, T);
        }
      }),
      [i, o, a, c, T, u, m, g, k, j, F, C, N, G, Tn, _, s, d, f, An, Mn]
    );
  }
  var Ke = class extends z {
      constructor(e) {
        super(),
          Y(
            this,
            e,
            pl,
            hl,
            V,
            {
              base_path: 16,
              reset_styles: 0,
              show_images: 1,
              show_empty_filters: 2,
              pagefind_options: 17,
              merge_index: 18,
              trigger_search_term: 15,
            },
            null,
            [-1, -1]
          );
      }
    },
    Rn = Ke;
  var Ye;
  try {
    Ye = new URL(document.currentScript.src).pathname.match(
      /^(.*\/)(?:pagefind-)?ui.js.*$/
    )[1];
  } catch {
    (Ye = "/_pagefind/"),
      console.warn(
        `Pagefind couldn't determine the base of the bundle from the javascript import path. Falling back to the default of ${bundlePath}.`
      ),
      console.warn(
        "You can configure this by passing a bundlePath option to PagefindUI"
      ),
      console.warn(
        `[DEBUG: Loaded from ${document?.currentScript?.src ?? "unknown"}]`
      );
  }
  var Qe = class {
    constructor(e) {
      this._pfs = null;
      let n = e.element ?? "[data-pagefind-ui]",
        l = e.bundlePath ?? Ye,
        r = e.resetStyles ?? !0,
        s = e.showImages ?? !0,
        i = e.showEmptyFilters ?? !0,
        o = e.mergeIndex ?? [];
      delete e.element,
        delete e.bundlePath,
        delete e.resetStyles,
        delete e.showImages,
        delete e.showEmptyFilters,
        delete e.mergeIndex;
      let a = document.querySelector(n);
      a
        ? (this._pfs = new Rn({
            target: a,
            props: {
              base_path: l,
              reset_styles: r,
              show_images: s,
              show_empty_filters: i,
              merge_index: o,
              pagefind_options: e,
            },
          }))
        : console.error(`Pagefind UI couldn't find the selector ${n}`);
    }
    triggerSearch(e) {
      this._pfs.$$set({ trigger_search_term: e });
    }
  };
  window.PagefindUI = Qe;
})();
