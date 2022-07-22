let wasm_bindgen;
(function () {
  const __exports = {};
  let wasm;
  let cachedUint8Memory0;
  function getUint8Memory0() {
    if (cachedUint8Memory0.byteLength === 0) {
      cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8Memory0;
  }
  let WASM_VECTOR_LEN = 0;
  function passArray8ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 1);
    getUint8Memory0().set(arg, ptr / 1);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
  }
  __exports.init_pagefind = function (metadata_bytes) {
    const ptr0 = passArray8ToWasm0(metadata_bytes, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.init_pagefind(ptr0, len0);
    return ret;
  };
  __exports.load_index_chunk = function (ptr, chunk_bytes) {
    const ptr0 = passArray8ToWasm0(chunk_bytes, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.load_index_chunk(ptr, ptr0, len0);
    return ret;
  };
  __exports.load_filter_chunk = function (ptr, chunk_bytes) {
    const ptr0 = passArray8ToWasm0(chunk_bytes, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.load_filter_chunk(ptr, ptr0, len0);
    return ret;
  };
  const cachedTextEncoder = new TextEncoder("utf-8");
  const encodeString =
    typeof cachedTextEncoder.encodeInto === "function"
      ? function (arg, view) {
          return cachedTextEncoder.encodeInto(arg, view);
        }
      : function (arg, view) {
          const buf = cachedTextEncoder.encode(arg);
          view.set(buf);
          return { read: arg.length, written: buf.length };
        };
  function passStringToWasm0(arg, malloc, realloc) {
    if (realloc === undefined) {
      const buf = cachedTextEncoder.encode(arg);
      const ptr = malloc(buf.length);
      getUint8Memory0()
        .subarray(ptr, ptr + buf.length)
        .set(buf);
      WASM_VECTOR_LEN = buf.length;
      return ptr;
    }
    let len = arg.length;
    let ptr = malloc(len);
    const mem = getUint8Memory0();
    let offset = 0;
    for (; offset < len; offset++) {
      const code = arg.charCodeAt(offset);
      if (code > 0x7f) break;
      mem[ptr + offset] = code;
    }
    if (offset !== len) {
      if (offset !== 0) {
        arg = arg.slice(offset);
      }
      ptr = realloc(ptr, len, (len = offset + arg.length * 3));
      const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
      const ret = encodeString(arg, view);
      offset += ret.written;
    }
    WASM_VECTOR_LEN = offset;
    return ptr;
  }
  let cachedInt32Memory0;
  function getInt32Memory0() {
    if (cachedInt32Memory0.byteLength === 0) {
      cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachedInt32Memory0;
  }
  const cachedTextDecoder = new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true,
  });
  cachedTextDecoder.decode();
  function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
  }
  __exports.request_indexes = function (ptr, query) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      const ptr0 = passStringToWasm0(
        query,
        wasm.__wbindgen_malloc,
        wasm.__wbindgen_realloc
      );
      const len0 = WASM_VECTOR_LEN;
      wasm.request_indexes(retptr, ptr, ptr0, len0);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      return getStringFromWasm0(r0, r1);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      wasm.__wbindgen_free(r0, r1);
    }
  };
  __exports.request_filter_indexes = function (ptr, filters) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      const ptr0 = passStringToWasm0(
        filters,
        wasm.__wbindgen_malloc,
        wasm.__wbindgen_realloc
      );
      const len0 = WASM_VECTOR_LEN;
      wasm.request_filter_indexes(retptr, ptr, ptr0, len0);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      return getStringFromWasm0(r0, r1);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      wasm.__wbindgen_free(r0, r1);
    }
  };
  __exports.request_all_filter_indexes = function (ptr) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.request_all_filter_indexes(retptr, ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      return getStringFromWasm0(r0, r1);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      wasm.__wbindgen_free(r0, r1);
    }
  };
  __exports.filters = function (ptr) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      wasm.filters(retptr, ptr);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      return getStringFromWasm0(r0, r1);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      wasm.__wbindgen_free(r0, r1);
    }
  };
  __exports.search = function (ptr, query, filter, exact) {
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      const ptr0 = passStringToWasm0(
        query,
        wasm.__wbindgen_malloc,
        wasm.__wbindgen_realloc
      );
      const len0 = WASM_VECTOR_LEN;
      const ptr1 = passStringToWasm0(
        filter,
        wasm.__wbindgen_malloc,
        wasm.__wbindgen_realloc
      );
      const len1 = WASM_VECTOR_LEN;
      wasm.search(retptr, ptr, ptr0, len0, ptr1, len1, exact);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      return getStringFromWasm0(r0, r1);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
      wasm.__wbindgen_free(r0, r1);
    }
  };
  async function load(module, imports) {
    if (typeof Response === "function" && module instanceof Response) {
      if (typeof WebAssembly.instantiateStreaming === "function") {
        try {
          return await WebAssembly.instantiateStreaming(module, imports);
        } catch (e) {
          if (module.headers.get("Content-Type") != "application/wasm") {
            console.warn(
              "`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",
              e
            );
          } else {
            throw e;
          }
        }
      }
      const bytes = await module.arrayBuffer();
      return await WebAssembly.instantiate(bytes, imports);
    } else {
      const instance = await WebAssembly.instantiate(module, imports);
      if (instance instanceof WebAssembly.Instance) {
        return { instance, module };
      } else {
        return instance;
      }
    }
  }
  function getImports() {
    const imports = {};
    imports.wbg = {};
    return imports;
  }
  function initMemory(imports, maybe_memory) {}
  function finalizeInit(instance, module) {
    wasm = instance.exports;
    init.__wbindgen_wasm_module = module;
    cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);
    cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    return wasm;
  }
  function initSync(bytes) {
    const imports = getImports();
    initMemory(imports);
    const module = new WebAssembly.Module(bytes);
    const instance = new WebAssembly.Instance(module, imports);
    return finalizeInit(instance, module);
  }
  async function init(input) {
    if (typeof input === "undefined") {
      let src;
      if (typeof document === "undefined") {
        src = location.href;
      } else {
        src = document.currentScript.src;
      }
      input = src.replace(/\.js$/, "_bg.wasm");
    }
    const imports = getImports();
    if (
      typeof input === "string" ||
      (typeof Request === "function" && input instanceof Request) ||
      (typeof URL === "function" && input instanceof URL)
    ) {
      input = fetch(input);
    }
    initMemory(imports);
    const { instance, module } = await load(await input, imports);
    return finalizeInit(instance, module);
  }
  wasm_bindgen = Object.assign(init, __exports);
})();
let gunzip;
(() => {
  var u8 = Uint8Array;
  var u16 = Uint16Array;
  var u32 = Uint32Array;
  var fleb = new u8([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    4,
    4,
    4,
    4,
    5,
    5,
    5,
    5,
    0,
    0,
    0,
    0,
  ]);
  var fdeb = new u8([
    0,
    0,
    0,
    0,
    1,
    1,
    2,
    2,
    3,
    3,
    4,
    4,
    5,
    5,
    6,
    6,
    7,
    7,
    8,
    8,
    9,
    9,
    10,
    10,
    11,
    11,
    12,
    12,
    13,
    13,
    0,
    0,
  ]);
  var clim = new u8([
    16,
    17,
    18,
    0,
    8,
    7,
    9,
    6,
    10,
    5,
    11,
    4,
    12,
    3,
    13,
    2,
    14,
    1,
    15,
  ]);
  var freb = function (eb, start) {
    var b = new u16(31);
    for (var i = 0; i < 31; ++i) {
      b[i] = start += 1 << eb[i - 1];
    }
    var r = new u32(b[30]);
    for (var i = 1; i < 30; ++i) {
      for (var j = b[i]; j < b[i + 1]; ++j) {
        r[j] = ((j - b[i]) << 5) | i;
      }
    }
    return [b, r];
  };
  var _a = freb(fleb, 2);
  var fl = _a[0];
  var revfl = _a[1];
  (fl[28] = 258), (revfl[258] = 28);
  var _b = freb(fdeb, 0);
  var fd = _b[0];
  var revfd = _b[1];
  var rev = new u16(32768);
  for (i = 0; i < 32768; ++i) {
    x = ((i & 43690) >>> 1) | ((i & 21845) << 1);
    x = ((x & 52428) >>> 2) | ((x & 13107) << 2);
    x = ((x & 61680) >>> 4) | ((x & 3855) << 4);
    rev[i] = (((x & 65280) >>> 8) | ((x & 255) << 8)) >>> 1;
  }
  var x;
  var i;
  var hMap = function (cd, mb, r) {
    var s = cd.length;
    var i = 0;
    var l = new u16(mb);
    for (; i < s; ++i) {
      if (cd[i]) ++l[cd[i] - 1];
    }
    var le = new u16(mb);
    for (i = 0; i < mb; ++i) {
      le[i] = (le[i - 1] + l[i - 1]) << 1;
    }
    var co;
    if (r) {
      co = new u16(1 << mb);
      var rvb = 15 - mb;
      for (i = 0; i < s; ++i) {
        if (cd[i]) {
          var sv = (i << 4) | cd[i];
          var r_1 = mb - cd[i];
          var v = le[cd[i] - 1]++ << r_1;
          for (var m = v | ((1 << r_1) - 1); v <= m; ++v) {
            co[rev[v] >>> rvb] = sv;
          }
        }
      }
    } else {
      co = new u16(s);
      for (i = 0; i < s; ++i) {
        if (cd[i]) {
          co[i] = rev[le[cd[i] - 1]++] >>> (15 - cd[i]);
        }
      }
    }
    return co;
  };
  var flt = new u8(288);
  for (i = 0; i < 144; ++i) flt[i] = 8;
  var i;
  for (i = 144; i < 256; ++i) flt[i] = 9;
  var i;
  for (i = 256; i < 280; ++i) flt[i] = 7;
  var i;
  for (i = 280; i < 288; ++i) flt[i] = 8;
  var i;
  var fdt = new u8(32);
  for (i = 0; i < 32; ++i) fdt[i] = 5;
  var i;
  var flrm = hMap(flt, 9, 1);
  var fdrm = hMap(fdt, 5, 1);
  var max = function (a) {
    var m = a[0];
    for (var i = 1; i < a.length; ++i) {
      if (a[i] > m) m = a[i];
    }
    return m;
  };
  var bits = function (d, p, m) {
    var o = (p / 8) | 0;
    return ((d[o] | (d[o + 1] << 8)) >> (p & 7)) & m;
  };
  var bits16 = function (d, p) {
    var o = (p / 8) | 0;
    return (d[o] | (d[o + 1] << 8) | (d[o + 2] << 16)) >> (p & 7);
  };
  var shft = function (p) {
    return ((p + 7) / 8) | 0;
  };
  var slc = function (v, s, e) {
    if (s == null || s < 0) s = 0;
    if (e == null || e > v.length) e = v.length;
    var n = new (v.BYTES_PER_ELEMENT == 2
      ? u16
      : v.BYTES_PER_ELEMENT == 4
      ? u32
      : u8)(e - s);
    n.set(v.subarray(s, e));
    return n;
  };
  var ec = [
    "unexpected EOF",
    "invalid block type",
    "invalid length/literal",
    "invalid distance",
    "stream finished",
    "no stream handler",
    ,
    "no callback",
    "invalid UTF-8 data",
    "extra field too long",
    "date not in range 1980-2099",
    "filename too long",
    "stream finishing",
    "invalid zip data",
  ];
  var err = function (ind, msg, nt) {
    var e = new Error(msg || ec[ind]);
    e.code = ind;
    if (Error.captureStackTrace) Error.captureStackTrace(e, err);
    if (!nt) throw e;
    return e;
  };
  var inflt = function (dat, buf, st) {
    var sl = dat.length;
    if (!sl || (st && st.f && !st.l)) return buf || new u8(0);
    var noBuf = !buf || st;
    var noSt = !st || st.i;
    if (!st) st = {};
    if (!buf) buf = new u8(sl * 3);
    var cbuf = function (l2) {
      var bl = buf.length;
      if (l2 > bl) {
        var nbuf = new u8(Math.max(bl * 2, l2));
        nbuf.set(buf);
        buf = nbuf;
      }
    };
    var final = st.f || 0,
      pos = st.p || 0,
      bt = st.b || 0,
      lm = st.l,
      dm = st.d,
      lbt = st.m,
      dbt = st.n;
    var tbts = sl * 8;
    do {
      if (!lm) {
        final = bits(dat, pos, 1);
        var type = bits(dat, pos + 1, 3);
        pos += 3;
        if (!type) {
          var s = shft(pos) + 4,
            l = dat[s - 4] | (dat[s - 3] << 8),
            t = s + l;
          if (t > sl) {
            if (noSt) err(0);
            break;
          }
          if (noBuf) cbuf(bt + l);
          buf.set(dat.subarray(s, t), bt);
          (st.b = bt += l), (st.p = pos = t * 8), (st.f = final);
          continue;
        } else if (type == 1) (lm = flrm), (dm = fdrm), (lbt = 9), (dbt = 5);
        else if (type == 2) {
          var hLit = bits(dat, pos, 31) + 257,
            hcLen = bits(dat, pos + 10, 15) + 4;
          var tl = hLit + bits(dat, pos + 5, 31) + 1;
          pos += 14;
          var ldt = new u8(tl);
          var clt = new u8(19);
          for (var i = 0; i < hcLen; ++i) {
            clt[clim[i]] = bits(dat, pos + i * 3, 7);
          }
          pos += hcLen * 3;
          var clb = max(clt),
            clbmsk = (1 << clb) - 1;
          var clm = hMap(clt, clb, 1);
          for (var i = 0; i < tl; ) {
            var r = clm[bits(dat, pos, clbmsk)];
            pos += r & 15;
            var s = r >>> 4;
            if (s < 16) {
              ldt[i++] = s;
            } else {
              var c = 0,
                n = 0;
              if (s == 16)
                (n = 3 + bits(dat, pos, 3)), (pos += 2), (c = ldt[i - 1]);
              else if (s == 17) (n = 3 + bits(dat, pos, 7)), (pos += 3);
              else if (s == 18) (n = 11 + bits(dat, pos, 127)), (pos += 7);
              while (n--) ldt[i++] = c;
            }
          }
          var lt = ldt.subarray(0, hLit),
            dt = ldt.subarray(hLit);
          lbt = max(lt);
          dbt = max(dt);
          lm = hMap(lt, lbt, 1);
          dm = hMap(dt, dbt, 1);
        } else err(1);
        if (pos > tbts) {
          if (noSt) err(0);
          break;
        }
      }
      if (noBuf) cbuf(bt + 131072);
      var lms = (1 << lbt) - 1,
        dms = (1 << dbt) - 1;
      var lpos = pos;
      for (; ; lpos = pos) {
        var c = lm[bits16(dat, pos) & lms],
          sym = c >>> 4;
        pos += c & 15;
        if (pos > tbts) {
          if (noSt) err(0);
          break;
        }
        if (!c) err(2);
        if (sym < 256) buf[bt++] = sym;
        else if (sym == 256) {
          (lpos = pos), (lm = null);
          break;
        } else {
          var add = sym - 254;
          if (sym > 264) {
            var i = sym - 257,
              b = fleb[i];
            add = bits(dat, pos, (1 << b) - 1) + fl[i];
            pos += b;
          }
          var d = dm[bits16(dat, pos) & dms],
            dsym = d >>> 4;
          if (!d) err(3);
          pos += d & 15;
          var dt = fd[dsym];
          if (dsym > 3) {
            var b = fdeb[dsym];
            (dt += bits16(dat, pos) & ((1 << b) - 1)), (pos += b);
          }
          if (pos > tbts) {
            if (noSt) err(0);
            break;
          }
          if (noBuf) cbuf(bt + 131072);
          var end = bt + add;
          for (; bt < end; bt += 4) {
            buf[bt] = buf[bt - dt];
            buf[bt + 1] = buf[bt + 1 - dt];
            buf[bt + 2] = buf[bt + 2 - dt];
            buf[bt + 3] = buf[bt + 3 - dt];
          }
          bt = end;
        }
      }
      (st.l = lm), (st.p = lpos), (st.b = bt), (st.f = final);
      if (lm) (final = 1), (st.m = lbt), (st.d = dm), (st.n = dbt);
    } while (!final);
    return bt == buf.length ? buf : slc(buf, 0, bt);
  };
  var et = new u8(0);
  var gzs = function (d) {
    if (d[0] != 31 || d[1] != 139 || d[2] != 8) err(6, "invalid gzip data");
    var flg = d[3];
    var st = 10;
    if (flg & 4) st += d[10] | ((d[11] << 8) + 2);
    for (var zs = ((flg >> 3) & 1) + ((flg >> 4) & 1); zs > 0; zs -= !d[st++]);
    return st + (flg & 2);
  };
  var gzl = function (d) {
    var l = d.length;
    return (
      (d[l - 4] | (d[l - 3] << 8) | (d[l - 2] << 16) | (d[l - 1] << 24)) >>> 0
    );
  };
  function gunzipSync(data, out) {
    return inflt(data.subarray(gzs(data), -8), out || new u8(gzl(data)));
  }
  var td = typeof TextDecoder != "undefined" && new TextDecoder();
  var tds = 0;
  try {
    td.decode(et, { stream: true });
    tds = 1;
  } catch (e) {}
  gunzip = gunzipSync;
})();
class Pagefind {
  constructor() {
    this.backend = wasm_bindgen;
    this.wasm = null;
    this.searchIndex = null;
    this.searchMeta = null;
    this.raw_ptr = null;
    this.loaded_chunks = {};
    this.loaded_filters = {};
    this.loaded_fragments = {};
    this.basePath = "/_pagefind/";
    this.baseUrl = "/";
    this.init();
  }
  options(options) {
    const opts = ["basePath", "baseUrl"];
    for (const [k, v] of Object.entries(options)) {
      if (opts.includes(k)) {
        this[k] = v;
      } else {
        console.warn(
          `Unknown Pagefind option ${k}. Allowed options: [${opts.join(", ")}]`
        );
      }
    }
  }
  async init() {
    try {
      this.basePath = new URL(import.meta.url).pathname.match(
        /^(.*\/)pagefind.js.*$/
      )[1];
      let default_base = this.basePath.match(/^(.*\/)_pagefind/)?.[1];
      this.baseUrl = default_base || this.baseUrl;
    } catch (e) {
      console.warn(
        "Pagefind couldn't determine the base of the bundle from the import path. Falling back to the default."
      );
    }
    await Promise.all([this.loadWasm(), this.loadMeta()]);
    window.tmp_pagefind = this.backend;
    this.raw_ptr = this.backend.init_pagefind(new Uint8Array(this.searchMeta));
  }
  async loadMeta() {
    try {
      let compressed_meta = await fetch(
        `${this.basePath}pagefind.pf_meta?ts=${Date.now()}`
      );
      compressed_meta = await compressed_meta.arrayBuffer();
      this.searchMeta = gunzip(new Uint8Array(compressed_meta));
    } catch (e) {
      console.error(`Failed to load the meta index:\n${e.toString()}`);
    }
  }
  async loadWasm() {
    try {
      let compressed_wasm = await fetch(`${this.basePath}wasm.pagefind`);
      compressed_wasm = await compressed_wasm.arrayBuffer();
      this.wasm = await this.backend(gunzip(new Uint8Array(compressed_wasm)));
    } catch (e) {
      console.error(
        `Failed to load the Pagefind WASM ${url}:\n${e.toString()}`
      );
    }
  }
  async _loadGenericChunk(url, method) {
    try {
      let compressed_chunk = await fetch(url);
      compressed_chunk = await compressed_chunk.arrayBuffer();
      let chunk = gunzip(new Uint8Array(compressed_chunk));
      let ptr = await this.getPtr();
      this.raw_ptr = this.backend[method](ptr, chunk);
    } catch (e) {
      console.error(`Failed to load the index chunk ${url}:\n${e.toString()}`);
    }
  }
  async loadChunk(hash) {
    if (!this.loaded_chunks[hash]) {
      const url = `${this.basePath}index/${hash}.pf_index`;
      this.loaded_chunks[hash] = this._loadGenericChunk(
        url,
        "load_index_chunk"
      );
    }
    return await this.loaded_chunks[hash];
  }
  async loadFilterChunk(hash) {
    if (!this.loaded_filters[hash]) {
      const url = `${this.basePath}filter/${hash}.pf_filter`;
      this.loaded_filters[hash] = this._loadGenericChunk(
        url,
        "load_filter_chunk"
      );
    }
    return await this.loaded_filters[hash];
  }
  async _loadFragment(hash) {
    let compressed_fragment = await fetch(
      `${this.basePath}fragment/${hash}.pf_fragment`
    );
    compressed_fragment = await compressed_fragment.arrayBuffer();
    let fragment = gunzip(new Uint8Array(compressed_fragment));
    return JSON.parse(new TextDecoder().decode(fragment));
  }
  async loadFragment(hash, excerpt = [0, 0], locations = []) {
    if (!this.loaded_fragments[hash]) {
      this.loaded_fragments[hash] = this._loadFragment(hash);
    }
    let fragment = await this.loaded_fragments[hash];
    let fragment_words = fragment.content.split(/[\r\n\s]+/g);
    for (let word of locations) {
      fragment_words[word] = `<mark>${fragment_words[word]}</mark>`;
    }
    fragment.excerpt = fragment_words
      .slice(excerpt[0], excerpt[0] + excerpt[1])
      .join(" ");
    if (!fragment.raw_url) {
      fragment.raw_url = fragment.url;
      fragment.url = this.fullUrl(fragment.raw_url);
    }
    return fragment;
  }
  fullUrl(raw) {
    return `/${this.baseUrl}/${raw}`.replace(/\/+/g, "/");
  }
  async sleep(ms = 100) {
    return new Promise((r) => setTimeout(r, ms));
  }
  async getPtr() {
    while (this.raw_ptr === null) {
      await this.sleep(50);
    }
    if (!this.raw_ptr) {
      console.error("Pagefind: WASM Error (No pointer)");
      throw new Error("Pagefind: WASM Error (No pointer)");
    }
    return this.raw_ptr;
  }
  parseFilters(str) {
    let output = {};
    if (!str) return output;
    for (const block of str.split("__PF_FILTER_DELIM__")) {
      let [filter, values] = block.split(/:(.*)$/);
      output[filter] = {};
      for (const valueBlock of values.split("__PF_VALUE_DELIM__")) {
        let [, value, count] = valueBlock.match(/^(.*):(\d+)$/);
        output[filter][value] = count;
      }
    }
    return output;
  }
  async filters() {
    let ptr = await this.getPtr();
    let filter_chunks = this.backend
      .request_all_filter_indexes(ptr)
      .split(" ")
      .filter((v) => v)
      .map((chunk) => this.loadFilterChunk(chunk));
    await Promise.all([...filter_chunks]);
    ptr = await this.getPtr();
    let results = this.backend.filters(ptr);
    return this.parseFilters(results);
  }
  async search(term, options) {
    options = { verbose: false, filters: {}, ...options };
    const log = (str) => {
      if (options.verbose) console.log(str);
    };
    let start = Date.now();
    let ptr = await this.getPtr();
    let exact_search = /^\s*".+"\s*$/.test(term);
    term = term
      .toLowerCase()
      .trim()
      .replace(/[^\w\s]/g, "")
      .replace(/\s{2,}/g, " ")
      .trim();
    let filter_list = [];
    for (let [filter, values] of Object.entries(options.filters)) {
      if (Array.isArray(values)) {
        for (let value of values) {
          filter_list.push(`${filter}:${value}`);
        }
      } else {
        filter_list.push(`${filter}:${values}`);
      }
    }
    filter_list = filter_list.join("__PF_FILTER_DELIM__");
    let chunks = this.backend
      .request_indexes(ptr, term)
      .split(" ")
      .filter((v) => v)
      .map((chunk) => this.loadChunk(chunk));
    let filter_chunks = this.backend
      .request_filter_indexes(ptr, filter_list)
      .split(" ")
      .filter((v) => v)
      .map((chunk) => this.loadFilterChunk(chunk));
    await Promise.all([...chunks, ...filter_chunks]);
    ptr = await this.getPtr();
    let searchStart = Date.now();
    let result = this.backend.search(ptr, term, filter_list, exact_search);
    let [results, filters] = result.split(/:(.*)$/);
    let filterObj = this.parseFilters(filters);
    results = results.length ? results.split(" ") : [];
    let resultsInterface = results.map((result) => {
      let [hash, excerpt, locations] = result.split("@");
      locations = locations.split(",").map((l) => parseInt(l));
      excerpt = excerpt.split(",").map((l) => parseInt(l));
      return {
        id: hash,
        words: locations,
        excerpt_range: excerpt,
        data: async () => await this.loadFragment(hash, excerpt, locations),
      };
    });
    log(
      `Found ${results.length} result${
        results.length == 1 ? "" : "s"
      } for "${term}" in ${Date.now() - searchStart}ms (${
        Date.now() - start
      }ms realtime)`
    );
    return { results: resultsInterface, filters: filterObj };
  }
}
const pagefind = new Pagefind();
export const options = (options) => pagefind.options(options);
export const search = async (term, options) =>
  await pagefind.search(term, options);
export const filters = async () => await pagefind.filters();
