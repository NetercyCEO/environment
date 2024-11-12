(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
  new MutationObserver((i) => {
    for (const r of i)
      if (r.type === "childList")
        for (const a of r.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && n(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(i) {
    const r = {};
    return (
      i.integrity && (r.integrity = i.integrity),
      i.referrerPolicy && (r.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (r.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (r.credentials = "omit")
        : (r.credentials = "same-origin"),
      r
    );
  }
  function n(i) {
    if (i.ep) return;
    i.ep = !0;
    const r = t(i);
    fetch(i.href, r);
  }
})();
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */ const Jr = "158",
  Jn = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 },
  Qn = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 },
  bc = 0,
  Ra = 1,
  wc = 2,
  wl = 1,
  Rc = 2,
  fn = 3,
  gn = 0,
  Rt = 1,
  Zt = 2,
  Rn = 0,
  xi = 1,
  Ca = 2,
  La = 3,
  Pa = 4,
  Cc = 5,
  Gn = 100,
  Lc = 101,
  Pc = 102,
  Da = 103,
  Ia = 104,
  Dc = 200,
  Ic = 201,
  Uc = 202,
  Nc = 203,
  Or = 204,
  Br = 205,
  Fc = 206,
  Oc = 207,
  Bc = 208,
  Hc = 209,
  zc = 210,
  kc = 211,
  Gc = 212,
  Vc = 213,
  Wc = 214,
  Xc = 0,
  Yc = 1,
  jc = 2,
  Fs = 3,
  qc = 4,
  $c = 5,
  Kc = 6,
  Zc = 7,
  Rl = 0,
  Jc = 1,
  Qc = 2,
  Cn = 0,
  eh = 1,
  th = 2,
  nh = 3,
  ih = 4,
  sh = 5,
  Ua = "attached",
  rh = "detached",
  Cl = 300,
  yi = 301,
  Ei = 302,
  Os = 303,
  Hr = 304,
  Ws = 306,
  Si = 1e3,
  wt = 1001,
  Bs = 1002,
  pt = 1003,
  zr = 1004,
  Us = 1005,
  lt = 1006,
  Ll = 1007,
  Pn = 1008,
  Ln = 1009,
  ah = 1010,
  oh = 1011,
  Qr = 1012,
  Pl = 1013,
  bn = 1014,
  Ht = 1015,
  Qt = 1016,
  Dl = 1017,
  Il = 1018,
  Xn = 1020,
  lh = 1021,
  Ot = 1023,
  ch = 1024,
  hh = 1025,
  Yn = 1026,
  Ti = 1027,
  uh = 1028,
  Ul = 1029,
  dh = 1030,
  Nl = 1031,
  Fl = 1033,
  Js = 33776,
  Qs = 33777,
  er = 33778,
  tr = 33779,
  Na = 35840,
  Fa = 35841,
  Oa = 35842,
  Ba = 35843,
  fh = 36196,
  Ha = 37492,
  za = 37496,
  ka = 37808,
  Ga = 37809,
  Va = 37810,
  Wa = 37811,
  Xa = 37812,
  Ya = 37813,
  ja = 37814,
  qa = 37815,
  $a = 37816,
  Ka = 37817,
  Za = 37818,
  Ja = 37819,
  Qa = 37820,
  eo = 37821,
  nr = 36492,
  to = 36494,
  no = 36495,
  ph = 36283,
  io = 36284,
  so = 36285,
  ro = 36286,
  $i = 2300,
  Ai = 2301,
  ir = 2302,
  ao = 2400,
  oo = 2401,
  lo = 2402,
  mh = 2500,
  gh = 0,
  Ol = 1,
  kr = 2,
  Bl = 3e3,
  jn = 3001,
  _h = 3200,
  xh = 3201,
  Hl = 0,
  vh = 1,
  Bt = "",
  et = "srgb",
  gt = "srgb-linear",
  ea = "display-p3",
  Xs = "display-p3-linear",
  Hs = "linear",
  Je = "srgb",
  zs = "rec709",
  ks = "p3",
  ei = 7680,
  co = 519,
  Mh = 512,
  yh = 513,
  Eh = 514,
  Sh = 515,
  Th = 516,
  Ah = 517,
  bh = 518,
  wh = 519,
  Gr = 35044,
  ho = "300 es",
  Vr = 1035,
  mn = 2e3,
  Gs = 2001;
class Zn {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0) return !1;
    const n = this._listeners;
    return n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0) return;
    const i = this._listeners[e];
    if (i !== void 0) {
      const r = i.indexOf(t);
      r !== -1 && i.splice(r, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0) return;
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const i = n.slice(0);
      for (let r = 0, a = i.length; r < a; r++) i[r].call(this, e);
      e.target = null;
    }
  }
}
const vt = [
  "00",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "0a",
  "0b",
  "0c",
  "0d",
  "0e",
  "0f",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "1a",
  "1b",
  "1c",
  "1d",
  "1e",
  "1f",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "2a",
  "2b",
  "2c",
  "2d",
  "2e",
  "2f",
  "30",
  "31",
  "32",
  "33",
  "34",
  "35",
  "36",
  "37",
  "38",
  "39",
  "3a",
  "3b",
  "3c",
  "3d",
  "3e",
  "3f",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46",
  "47",
  "48",
  "49",
  "4a",
  "4b",
  "4c",
  "4d",
  "4e",
  "4f",
  "50",
  "51",
  "52",
  "53",
  "54",
  "55",
  "56",
  "57",
  "58",
  "59",
  "5a",
  "5b",
  "5c",
  "5d",
  "5e",
  "5f",
  "60",
  "61",
  "62",
  "63",
  "64",
  "65",
  "66",
  "67",
  "68",
  "69",
  "6a",
  "6b",
  "6c",
  "6d",
  "6e",
  "6f",
  "70",
  "71",
  "72",
  "73",
  "74",
  "75",
  "76",
  "77",
  "78",
  "79",
  "7a",
  "7b",
  "7c",
  "7d",
  "7e",
  "7f",
  "80",
  "81",
  "82",
  "83",
  "84",
  "85",
  "86",
  "87",
  "88",
  "89",
  "8a",
  "8b",
  "8c",
  "8d",
  "8e",
  "8f",
  "90",
  "91",
  "92",
  "93",
  "94",
  "95",
  "96",
  "97",
  "98",
  "99",
  "9a",
  "9b",
  "9c",
  "9d",
  "9e",
  "9f",
  "a0",
  "a1",
  "a2",
  "a3",
  "a4",
  "a5",
  "a6",
  "a7",
  "a8",
  "a9",
  "aa",
  "ab",
  "ac",
  "ad",
  "ae",
  "af",
  "b0",
  "b1",
  "b2",
  "b3",
  "b4",
  "b5",
  "b6",
  "b7",
  "b8",
  "b9",
  "ba",
  "bb",
  "bc",
  "bd",
  "be",
  "bf",
  "c0",
  "c1",
  "c2",
  "c3",
  "c4",
  "c5",
  "c6",
  "c7",
  "c8",
  "c9",
  "ca",
  "cb",
  "cc",
  "cd",
  "ce",
  "cf",
  "d0",
  "d1",
  "d2",
  "d3",
  "d4",
  "d5",
  "d6",
  "d7",
  "d8",
  "d9",
  "da",
  "db",
  "dc",
  "dd",
  "de",
  "df",
  "e0",
  "e1",
  "e2",
  "e3",
  "e4",
  "e5",
  "e6",
  "e7",
  "e8",
  "e9",
  "ea",
  "eb",
  "ec",
  "ed",
  "ee",
  "ef",
  "f0",
  "f1",
  "f2",
  "f3",
  "f4",
  "f5",
  "f6",
  "f7",
  "f8",
  "f9",
  "fa",
  "fb",
  "fc",
  "fd",
  "fe",
  "ff",
];
let uo = 1234567;
const Yi = Math.PI / 180,
  bi = 180 / Math.PI;
function Yt() {
  const s = (Math.random() * 4294967295) | 0,
    e = (Math.random() * 4294967295) | 0,
    t = (Math.random() * 4294967295) | 0,
    n = (Math.random() * 4294967295) | 0;
  return (
    vt[s & 255] +
    vt[(s >> 8) & 255] +
    vt[(s >> 16) & 255] +
    vt[(s >> 24) & 255] +
    "-" +
    vt[e & 255] +
    vt[(e >> 8) & 255] +
    "-" +
    vt[((e >> 16) & 15) | 64] +
    vt[(e >> 24) & 255] +
    "-" +
    vt[(t & 63) | 128] +
    vt[(t >> 8) & 255] +
    "-" +
    vt[(t >> 16) & 255] +
    vt[(t >> 24) & 255] +
    vt[n & 255] +
    vt[(n >> 8) & 255] +
    vt[(n >> 16) & 255] +
    vt[(n >> 24) & 255]
  ).toLowerCase();
}
function mt(s, e, t) {
  return Math.max(e, Math.min(t, s));
}
function ta(s, e) {
  return ((s % e) + e) % e;
}
function Rh(s, e, t, n, i) {
  return n + ((s - e) * (i - n)) / (t - e);
}
function Ch(s, e, t) {
  return s !== e ? (t - s) / (e - s) : 0;
}
function ji(s, e, t) {
  return (1 - t) * s + t * e;
}
function Lh(s, e, t, n) {
  return ji(s, e, 1 - Math.exp(-t * n));
}
function Ph(s, e = 1) {
  return e - Math.abs(ta(s, e * 2) - e);
}
function Dh(s, e, t) {
  return s <= e
    ? 0
    : s >= t
    ? 1
    : ((s = (s - e) / (t - e)), s * s * (3 - 2 * s));
}
function Ih(s, e, t) {
  return s <= e
    ? 0
    : s >= t
    ? 1
    : ((s = (s - e) / (t - e)), s * s * s * (s * (s * 6 - 15) + 10));
}
function Uh(s, e) {
  return s + Math.floor(Math.random() * (e - s + 1));
}
function Nh(s, e) {
  return s + Math.random() * (e - s);
}
function Fh(s) {
  return s * (0.5 - Math.random());
}
function Oh(s) {
  s !== void 0 && (uo = s);
  let e = (uo += 1831565813);
  return (
    (e = Math.imul(e ^ (e >>> 15), e | 1)),
    (e ^= e + Math.imul(e ^ (e >>> 7), e | 61)),
    ((e ^ (e >>> 14)) >>> 0) / 4294967296
  );
}
function Bh(s) {
  return s * Yi;
}
function Hh(s) {
  return s * bi;
}
function Wr(s) {
  return (s & (s - 1)) === 0 && s !== 0;
}
function zl(s) {
  return Math.pow(2, Math.ceil(Math.log(s) / Math.LN2));
}
function Vs(s) {
  return Math.pow(2, Math.floor(Math.log(s) / Math.LN2));
}
function zh(s, e, t, n, i) {
  const r = Math.cos,
    a = Math.sin,
    o = r(t / 2),
    l = a(t / 2),
    c = r((e + n) / 2),
    h = a((e + n) / 2),
    u = r((e - n) / 2),
    d = a((e - n) / 2),
    m = r((n - e) / 2),
    g = a((n - e) / 2);
  switch (i) {
    case "XYX":
      s.set(o * h, l * u, l * d, o * c);
      break;
    case "YZY":
      s.set(l * d, o * h, l * u, o * c);
      break;
    case "ZXZ":
      s.set(l * u, l * d, o * h, o * c);
      break;
    case "XZX":
      s.set(o * h, l * g, l * m, o * c);
      break;
    case "YXY":
      s.set(l * m, o * h, l * g, o * c);
      break;
    case "ZYZ":
      s.set(l * g, l * m, o * h, o * c);
      break;
    default:
      console.warn(
        "THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " +
          i
      );
  }
}
function Jt(s, e) {
  switch (e.constructor) {
    case Float32Array:
      return s;
    case Uint32Array:
      return s / 4294967295;
    case Uint16Array:
      return s / 65535;
    case Uint8Array:
      return s / 255;
    case Int32Array:
      return Math.max(s / 2147483647, -1);
    case Int16Array:
      return Math.max(s / 32767, -1);
    case Int8Array:
      return Math.max(s / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function qe(s, e) {
  switch (e.constructor) {
    case Float32Array:
      return s;
    case Uint32Array:
      return Math.round(s * 4294967295);
    case Uint16Array:
      return Math.round(s * 65535);
    case Uint8Array:
      return Math.round(s * 255);
    case Int32Array:
      return Math.round(s * 2147483647);
    case Int16Array:
      return Math.round(s * 32767);
    case Int8Array:
      return Math.round(s * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
const kl = {
  DEG2RAD: Yi,
  RAD2DEG: bi,
  generateUUID: Yt,
  clamp: mt,
  euclideanModulo: ta,
  mapLinear: Rh,
  inverseLerp: Ch,
  lerp: ji,
  damp: Lh,
  pingpong: Ph,
  smoothstep: Dh,
  smootherstep: Ih,
  randInt: Uh,
  randFloat: Nh,
  randFloatSpread: Fh,
  seededRandom: Oh,
  degToRad: Bh,
  radToDeg: Hh,
  isPowerOfTwo: Wr,
  ceilPowerOfTwo: zl,
  floorPowerOfTwo: Vs,
  setQuaternionFromProperEuler: zh,
  normalize: qe,
  denormalize: Jt,
};
class Re {
  constructor(e = 0, t = 0) {
    (Re.prototype.isVector2 = !0), (this.x = e), (this.y = t);
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return (this.x = e), (this.y = t), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), this;
  }
  add(e) {
    return (this.x += e.x), (this.y += e.y), this;
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), this;
  }
  addVectors(e, t) {
    return (this.x = e.x + t.x), (this.y = e.y + t.y), this;
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), this;
  }
  sub(e) {
    return (this.x -= e.x), (this.y -= e.y), this;
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), this;
  }
  subVectors(e, t) {
    return (this.x = e.x - t.x), (this.y = e.y - t.y), this;
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), this;
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x,
      n = this.y,
      i = e.elements;
    return (
      (this.x = i[0] * t + i[3] * n + i[6]),
      (this.y = i[1] * t + i[4] * n + i[7]),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)), (this.y = Math.min(this.y, e.y)), this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)), (this.y = Math.max(this.y, e.y)), this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(e, Math.min(t, n))
    );
  }
  floor() {
    return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
  }
  ceil() {
    return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
  }
  round() {
    return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
  }
  roundToZero() {
    return (this.x = Math.trunc(this.x)), (this.y = Math.trunc(this.y)), this;
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(mt(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (this.x += (e.x - this.x) * t), (this.y += (e.y - this.y) * t), this;
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n), (this.y = e.y + (t.y - e.y) * n), this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), e;
  }
  fromBufferAttribute(e, t) {
    return (this.x = e.getX(t)), (this.y = e.getY(t)), this;
  }
  rotateAround(e, t) {
    const n = Math.cos(t),
      i = Math.sin(t),
      r = this.x - e.x,
      a = this.y - e.y;
    return (this.x = r * n - a * i + e.x), (this.y = r * i + a * n + e.y), this;
  }
  random() {
    return (this.x = Math.random()), (this.y = Math.random()), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class Be {
  constructor(e, t, n, i, r, a, o, l, c) {
    (Be.prototype.isMatrix3 = !0),
      (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
      e !== void 0 && this.set(e, t, n, i, r, a, o, l, c);
  }
  set(e, t, n, i, r, a, o, l, c) {
    const h = this.elements;
    return (
      (h[0] = e),
      (h[1] = i),
      (h[2] = o),
      (h[3] = t),
      (h[4] = r),
      (h[5] = l),
      (h[6] = n),
      (h[7] = a),
      (h[8] = c),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(e) {
    const t = this.elements,
      n = e.elements;
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[3]),
      (t[4] = n[4]),
      (t[5] = n[5]),
      (t[6] = n[6]),
      (t[7] = n[7]),
      (t[8] = n[8]),
      this
    );
  }
  extractBasis(e, t, n) {
    return (
      e.setFromMatrix3Column(this, 0),
      t.setFromMatrix3Column(this, 1),
      n.setFromMatrix3Column(this, 2),
      this
    );
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return (
      this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements,
      i = t.elements,
      r = this.elements,
      a = n[0],
      o = n[3],
      l = n[6],
      c = n[1],
      h = n[4],
      u = n[7],
      d = n[2],
      m = n[5],
      g = n[8],
      _ = i[0],
      p = i[3],
      f = i[6],
      y = i[1],
      M = i[4],
      S = i[7],
      b = i[2],
      L = i[5],
      w = i[8];
    return (
      (r[0] = a * _ + o * y + l * b),
      (r[3] = a * p + o * M + l * L),
      (r[6] = a * f + o * S + l * w),
      (r[1] = c * _ + h * y + u * b),
      (r[4] = c * p + h * M + u * L),
      (r[7] = c * f + h * S + u * w),
      (r[2] = d * _ + m * y + g * b),
      (r[5] = d * p + m * M + g * L),
      (r[8] = d * f + m * S + g * w),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[3] *= e),
      (t[6] *= e),
      (t[1] *= e),
      (t[4] *= e),
      (t[7] *= e),
      (t[2] *= e),
      (t[5] *= e),
      (t[8] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      i = e[2],
      r = e[3],
      a = e[4],
      o = e[5],
      l = e[6],
      c = e[7],
      h = e[8];
    return (
      t * a * h - t * o * c - n * r * h + n * o * l + i * r * c - i * a * l
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      i = e[2],
      r = e[3],
      a = e[4],
      o = e[5],
      l = e[6],
      c = e[7],
      h = e[8],
      u = h * a - o * c,
      d = o * l - h * r,
      m = c * r - a * l,
      g = t * u + n * d + i * m;
    if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const _ = 1 / g;
    return (
      (e[0] = u * _),
      (e[1] = (i * c - h * n) * _),
      (e[2] = (o * n - i * a) * _),
      (e[3] = d * _),
      (e[4] = (h * t - i * l) * _),
      (e[5] = (i * r - o * t) * _),
      (e[6] = m * _),
      (e[7] = (n * l - c * t) * _),
      (e[8] = (a * t - n * r) * _),
      this
    );
  }
  transpose() {
    let e;
    const t = this.elements;
    return (
      (e = t[1]),
      (t[1] = t[3]),
      (t[3] = e),
      (e = t[2]),
      (t[2] = t[6]),
      (t[6] = e),
      (e = t[5]),
      (t[5] = t[7]),
      (t[7] = e),
      this
    );
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return (
      (e[0] = t[0]),
      (e[1] = t[3]),
      (e[2] = t[6]),
      (e[3] = t[1]),
      (e[4] = t[4]),
      (e[5] = t[7]),
      (e[6] = t[2]),
      (e[7] = t[5]),
      (e[8] = t[8]),
      this
    );
  }
  setUvTransform(e, t, n, i, r, a, o) {
    const l = Math.cos(r),
      c = Math.sin(r);
    return (
      this.set(
        n * l,
        n * c,
        -n * (l * a + c * o) + a + e,
        -i * c,
        i * l,
        -i * (-c * a + l * o) + o + t,
        0,
        0,
        1
      ),
      this
    );
  }
  scale(e, t) {
    return this.premultiply(sr.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(sr.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(sr.makeTranslation(e, t)), this;
  }
  makeTranslation(e, t) {
    return (
      e.isVector2
        ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1)
        : this.set(1, 0, e, 0, 1, t, 0, 0, 1),
      this
    );
  }
  makeRotation(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, -n, 0, n, t, 0, 0, 0, 1), this;
  }
  makeScale(e, t) {
    return this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this;
  }
  equals(e) {
    const t = this.elements,
      n = e.elements;
    for (let i = 0; i < 9; i++) if (t[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return (
      (e[t] = n[0]),
      (e[t + 1] = n[1]),
      (e[t + 2] = n[2]),
      (e[t + 3] = n[3]),
      (e[t + 4] = n[4]),
      (e[t + 5] = n[5]),
      (e[t + 6] = n[6]),
      (e[t + 7] = n[7]),
      (e[t + 8] = n[8]),
      e
    );
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const sr = new Be();
function Gl(s) {
  for (let e = s.length - 1; e >= 0; --e) if (s[e] >= 65535) return !0;
  return !1;
}
function Ki(s) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", s);
}
function kh() {
  const s = Ki("canvas");
  return (s.style.display = "block"), s;
}
const fo = {};
function qi(s) {
  s in fo || ((fo[s] = !0), console.warn(s));
}
const po = new Be().set(
    0.8224621,
    0.177538,
    0,
    0.0331941,
    0.9668058,
    0,
    0.0170827,
    0.0723974,
    0.9105199
  ),
  mo = new Be().set(
    1.2249401,
    -0.2249404,
    0,
    -0.0420569,
    1.0420571,
    0,
    -0.0196376,
    -0.0786361,
    1.0982735
  ),
  ss = {
    [gt]: {
      transfer: Hs,
      primaries: zs,
      toReference: (s) => s,
      fromReference: (s) => s,
    },
    [et]: {
      transfer: Je,
      primaries: zs,
      toReference: (s) => s.convertSRGBToLinear(),
      fromReference: (s) => s.convertLinearToSRGB(),
    },
    [Xs]: {
      transfer: Hs,
      primaries: ks,
      toReference: (s) => s.applyMatrix3(mo),
      fromReference: (s) => s.applyMatrix3(po),
    },
    [ea]: {
      transfer: Je,
      primaries: ks,
      toReference: (s) => s.convertSRGBToLinear().applyMatrix3(mo),
      fromReference: (s) => s.applyMatrix3(po).convertLinearToSRGB(),
    },
  },
  Gh = new Set([gt, Xs]),
  Ye = {
    enabled: !0,
    _workingColorSpace: gt,
    get legacyMode() {
      return (
        console.warn(
          "THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."
        ),
        !this.enabled
      );
    },
    set legacyMode(s) {
      console.warn(
        "THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."
      ),
        (this.enabled = !s);
    },
    get workingColorSpace() {
      return this._workingColorSpace;
    },
    set workingColorSpace(s) {
      if (!Gh.has(s))
        throw new Error(`Unsupported working color space, "${s}".`);
      this._workingColorSpace = s;
    },
    convert: function (s, e, t) {
      if (this.enabled === !1 || e === t || !e || !t) return s;
      const n = ss[e].toReference,
        i = ss[t].fromReference;
      return i(n(s));
    },
    fromWorkingColorSpace: function (s, e) {
      return this.convert(s, this._workingColorSpace, e);
    },
    toWorkingColorSpace: function (s, e) {
      return this.convert(s, e, this._workingColorSpace);
    },
    getPrimaries: function (s) {
      return ss[s].primaries;
    },
    getTransfer: function (s) {
      return s === Bt ? Hs : ss[s].transfer;
    },
  };
function vi(s) {
  return s < 0.04045
    ? s * 0.0773993808
    : Math.pow(s * 0.9478672986 + 0.0521327014, 2.4);
}
function rr(s) {
  return s < 0.0031308 ? s * 12.92 : 1.055 * Math.pow(s, 0.41666) - 0.055;
}
let ti;
class Vl {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
    let t;
    if (e instanceof HTMLCanvasElement) t = e;
    else {
      ti === void 0 && (ti = Ki("canvas")),
        (ti.width = e.width),
        (ti.height = e.height);
      const n = ti.getContext("2d");
      e instanceof ImageData
        ? n.putImageData(e, 0, 0)
        : n.drawImage(e, 0, 0, e.width, e.height),
        (t = ti);
    }
    return t.width > 2048 || t.height > 2048
      ? (console.warn(
          "THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",
          e
        ),
        t.toDataURL("image/jpeg", 0.6))
      : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (
      (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement) ||
      (typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement) ||
      (typeof ImageBitmap < "u" && e instanceof ImageBitmap)
    ) {
      const t = Ki("canvas");
      (t.width = e.width), (t.height = e.height);
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const i = n.getImageData(0, 0, e.width, e.height),
        r = i.data;
      for (let a = 0; a < r.length; a++) r[a] = vi(r[a] / 255) * 255;
      return n.putImageData(i, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray
          ? (t[n] = Math.floor(vi(t[n] / 255) * 255))
          : (t[n] = vi(t[n]));
      return { data: t, width: e.width, height: e.height };
    } else
      return (
        console.warn(
          "THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."
        ),
        e
      );
  }
}
let Vh = 0;
class Wl {
  constructor(e = null) {
    (this.isSource = !0),
      Object.defineProperty(this, "id", { value: Vh++ }),
      (this.uuid = Yt()),
      (this.data = e),
      (this.version = 0);
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
    const n = { uuid: this.uuid, url: "" },
      i = this.data;
    if (i !== null) {
      let r;
      if (Array.isArray(i)) {
        r = [];
        for (let a = 0, o = i.length; a < o; a++)
          i[a].isDataTexture ? r.push(ar(i[a].image)) : r.push(ar(i[a]));
      } else r = ar(i);
      n.url = r;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function ar(s) {
  return (typeof HTMLImageElement < "u" && s instanceof HTMLImageElement) ||
    (typeof HTMLCanvasElement < "u" && s instanceof HTMLCanvasElement) ||
    (typeof ImageBitmap < "u" && s instanceof ImageBitmap)
    ? Vl.getDataURL(s)
    : s.data
    ? {
        data: Array.from(s.data),
        width: s.width,
        height: s.height,
        type: s.data.constructor.name,
      }
    : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let Wh = 0;
class _t extends Zn {
  constructor(
    e = _t.DEFAULT_IMAGE,
    t = _t.DEFAULT_MAPPING,
    n = wt,
    i = wt,
    r = lt,
    a = Pn,
    o = Ot,
    l = Ln,
    c = _t.DEFAULT_ANISOTROPY,
    h = Bt
  ) {
    super(),
      (this.isTexture = !0),
      Object.defineProperty(this, "id", { value: Wh++ }),
      (this.uuid = Yt()),
      (this.name = ""),
      (this.source = new Wl(e)),
      (this.mipmaps = []),
      (this.mapping = t),
      (this.channel = 0),
      (this.wrapS = n),
      (this.wrapT = i),
      (this.magFilter = r),
      (this.minFilter = a),
      (this.anisotropy = c),
      (this.format = o),
      (this.internalFormat = null),
      (this.type = l),
      (this.offset = new Re(0, 0)),
      (this.repeat = new Re(1, 1)),
      (this.center = new Re(0, 0)),
      (this.rotation = 0),
      (this.matrixAutoUpdate = !0),
      (this.matrix = new Be()),
      (this.generateMipmaps = !0),
      (this.premultiplyAlpha = !1),
      (this.flipY = !0),
      (this.unpackAlignment = 4),
      typeof h == "string"
        ? (this.colorSpace = h)
        : (qi(
            "THREE.Texture: Property .encoding has been replaced by .colorSpace."
          ),
          (this.colorSpace = h === jn ? et : Bt)),
      (this.userData = {}),
      (this.version = 0),
      (this.onUpdate = null),
      (this.isRenderTargetTexture = !1),
      (this.needsPMREMUpdate = !1);
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(
      this.offset.x,
      this.offset.y,
      this.repeat.x,
      this.repeat.y,
      this.rotation,
      this.center.x,
      this.center.y
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.source = e.source),
      (this.mipmaps = e.mipmaps.slice(0)),
      (this.mapping = e.mapping),
      (this.channel = e.channel),
      (this.wrapS = e.wrapS),
      (this.wrapT = e.wrapT),
      (this.magFilter = e.magFilter),
      (this.minFilter = e.minFilter),
      (this.anisotropy = e.anisotropy),
      (this.format = e.format),
      (this.internalFormat = e.internalFormat),
      (this.type = e.type),
      this.offset.copy(e.offset),
      this.repeat.copy(e.repeat),
      this.center.copy(e.center),
      (this.rotation = e.rotation),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this.matrix.copy(e.matrix),
      (this.generateMipmaps = e.generateMipmaps),
      (this.premultiplyAlpha = e.premultiplyAlpha),
      (this.flipY = e.flipY),
      (this.unpackAlignment = e.unpackAlignment),
      (this.colorSpace = e.colorSpace),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      (this.needsUpdate = !0),
      this
    );
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
    const n = {
      metadata: { version: 4.6, type: "Texture", generator: "Texture.toJSON" },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment,
    };
    return (
      Object.keys(this.userData).length > 0 && (n.userData = this.userData),
      t || (e.textures[this.uuid] = n),
      n
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== Cl) return e;
    if ((e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1))
      switch (this.wrapS) {
        case Si:
          e.x = e.x - Math.floor(e.x);
          break;
        case wt:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case Bs:
          Math.abs(Math.floor(e.x) % 2) === 1
            ? (e.x = Math.ceil(e.x) - e.x)
            : (e.x = e.x - Math.floor(e.x));
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case Si:
          e.y = e.y - Math.floor(e.y);
          break;
        case wt:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case Bs:
          Math.abs(Math.floor(e.y) % 2) === 1
            ? (e.y = Math.ceil(e.y) - e.y)
            : (e.y = e.y - Math.floor(e.y));
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, (this.source.needsUpdate = !0));
  }
  get encoding() {
    return (
      qi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),
      this.colorSpace === et ? jn : Bl
    );
  }
  set encoding(e) {
    qi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),
      (this.colorSpace = e === jn ? et : Bt);
  }
}
_t.DEFAULT_IMAGE = null;
_t.DEFAULT_MAPPING = Cl;
_t.DEFAULT_ANISOTROPY = 1;
class $e {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    ($e.prototype.isVector4 = !0),
      (this.x = e),
      (this.y = t),
      (this.z = n),
      (this.w = i);
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, i) {
    return (this.x = e), (this.y = t), (this.z = n), (this.w = i), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), (this.w = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setW(e) {
    return (this.w = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return (
      (this.x = e.x),
      (this.y = e.y),
      (this.z = e.z),
      (this.w = e.w !== void 0 ? e.w : 1),
      this
    );
  }
  add(e) {
    return (
      (this.x += e.x), (this.y += e.y), (this.z += e.z), (this.w += e.w), this
    );
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), (this.w += e), this;
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x),
      (this.y = e.y + t.y),
      (this.z = e.z + t.z),
      (this.w = e.w + t.w),
      this
    );
  }
  addScaledVector(e, t) {
    return (
      (this.x += e.x * t),
      (this.y += e.y * t),
      (this.z += e.z * t),
      (this.w += e.w * t),
      this
    );
  }
  sub(e) {
    return (
      (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), (this.w -= e.w), this
    );
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), (this.w -= e), this;
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x),
      (this.y = e.y - t.y),
      (this.z = e.z - t.z),
      (this.w = e.w - t.w),
      this
    );
  }
  multiply(e) {
    return (
      (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), (this.w *= e.w), this
    );
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), (this.w *= e), this;
  }
  applyMatrix4(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      r = this.w,
      a = e.elements;
    return (
      (this.x = a[0] * t + a[4] * n + a[8] * i + a[12] * r),
      (this.y = a[1] * t + a[5] * n + a[9] * i + a[13] * r),
      (this.z = a[2] * t + a[6] * n + a[10] * i + a[14] * r),
      (this.w = a[3] * t + a[7] * n + a[11] * i + a[15] * r),
      this
    );
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return (
      t < 1e-4
        ? ((this.x = 1), (this.y = 0), (this.z = 0))
        : ((this.x = e.x / t), (this.y = e.y / t), (this.z = e.z / t)),
      this
    );
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, i, r;
    const l = e.elements,
      c = l[0],
      h = l[4],
      u = l[8],
      d = l[1],
      m = l[5],
      g = l[9],
      _ = l[2],
      p = l[6],
      f = l[10];
    if (
      Math.abs(h - d) < 0.01 &&
      Math.abs(u - _) < 0.01 &&
      Math.abs(g - p) < 0.01
    ) {
      if (
        Math.abs(h + d) < 0.1 &&
        Math.abs(u + _) < 0.1 &&
        Math.abs(g + p) < 0.1 &&
        Math.abs(c + m + f - 3) < 0.1
      )
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const M = (c + 1) / 2,
        S = (m + 1) / 2,
        b = (f + 1) / 2,
        L = (h + d) / 4,
        w = (u + _) / 4,
        I = (g + p) / 4;
      return (
        M > S && M > b
          ? M < 0.01
            ? ((n = 0), (i = 0.707106781), (r = 0.707106781))
            : ((n = Math.sqrt(M)), (i = L / n), (r = w / n))
          : S > b
          ? S < 0.01
            ? ((n = 0.707106781), (i = 0), (r = 0.707106781))
            : ((i = Math.sqrt(S)), (n = L / i), (r = I / i))
          : b < 0.01
          ? ((n = 0.707106781), (i = 0.707106781), (r = 0))
          : ((r = Math.sqrt(b)), (n = w / r), (i = I / r)),
        this.set(n, i, r, t),
        this
      );
    }
    let y = Math.sqrt(
      (p - g) * (p - g) + (u - _) * (u - _) + (d - h) * (d - h)
    );
    return (
      Math.abs(y) < 0.001 && (y = 1),
      (this.x = (p - g) / y),
      (this.y = (u - _) / y),
      (this.z = (d - h) / y),
      (this.w = Math.acos((c + m + f - 1) / 2)),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      (this.w = Math.min(this.w, e.w)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      (this.w = Math.max(this.w, e.w)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      (this.z = Math.max(e.z, Math.min(t.z, this.z))),
      (this.w = Math.max(e.w, Math.min(t.w, this.w))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      (this.z = Math.max(e, Math.min(t, this.z))),
      (this.w = Math.max(e, Math.min(t, this.w))),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(e, Math.min(t, n))
    );
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      (this.w = Math.floor(this.w)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      (this.w = Math.ceil(this.w)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      (this.w = Math.round(this.w)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = Math.trunc(this.x)),
      (this.y = Math.trunc(this.y)),
      (this.z = Math.trunc(this.z)),
      (this.w = Math.trunc(this.w)),
      this
    );
  }
  negate() {
    return (
      (this.x = -this.x),
      (this.y = -this.y),
      (this.z = -this.z),
      (this.w = -this.w),
      this
    );
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return (
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  length() {
    return Math.sqrt(
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  manhattanLength() {
    return (
      Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    );
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      (this.w += (e.w - this.w) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      (this.z = e.z + (t.z - e.z) * n),
      (this.w = e.w + (t.w - e.w) * n),
      this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return (
      (this.x = e[t]),
      (this.y = e[t + 1]),
      (this.z = e[t + 2]),
      (this.w = e[t + 3]),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this.x),
      (e[t + 1] = this.y),
      (e[t + 2] = this.z),
      (e[t + 3] = this.w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this.x = e.getX(t)),
      (this.y = e.getY(t)),
      (this.z = e.getZ(t)),
      (this.w = e.getW(t)),
      this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      (this.w = Math.random()),
      this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class Xh extends Zn {
  constructor(e = 1, t = 1, n = {}) {
    super(),
      (this.isRenderTarget = !0),
      (this.width = e),
      (this.height = t),
      (this.depth = 1),
      (this.scissor = new $e(0, 0, e, t)),
      (this.scissorTest = !1),
      (this.viewport = new $e(0, 0, e, t));
    const i = { width: e, height: t, depth: 1 };
    n.encoding !== void 0 &&
      (qi(
        "THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."
      ),
      (n.colorSpace = n.encoding === jn ? et : Bt)),
      (n = Object.assign(
        {
          generateMipmaps: !1,
          internalFormat: null,
          minFilter: lt,
          depthBuffer: !0,
          stencilBuffer: !1,
          depthTexture: null,
          samples: 0,
        },
        n
      )),
      (this.texture = new _t(
        i,
        n.mapping,
        n.wrapS,
        n.wrapT,
        n.magFilter,
        n.minFilter,
        n.format,
        n.type,
        n.anisotropy,
        n.colorSpace
      )),
      (this.texture.isRenderTargetTexture = !0),
      (this.texture.flipY = !1),
      (this.texture.generateMipmaps = n.generateMipmaps),
      (this.texture.internalFormat = n.internalFormat),
      (this.depthBuffer = n.depthBuffer),
      (this.stencilBuffer = n.stencilBuffer),
      (this.depthTexture = n.depthTexture),
      (this.samples = n.samples);
  }
  setSize(e, t, n = 1) {
    (this.width !== e || this.height !== t || this.depth !== n) &&
      ((this.width = e),
      (this.height = t),
      (this.depth = n),
      (this.texture.image.width = e),
      (this.texture.image.height = t),
      (this.texture.image.depth = n),
      this.dispose()),
      this.viewport.set(0, 0, e, t),
      this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.width = e.width),
      (this.height = e.height),
      (this.depth = e.depth),
      this.scissor.copy(e.scissor),
      (this.scissorTest = e.scissorTest),
      this.viewport.copy(e.viewport),
      (this.texture = e.texture.clone()),
      (this.texture.isRenderTargetTexture = !0);
    const t = Object.assign({}, e.texture.image);
    return (
      (this.texture.source = new Wl(t)),
      (this.depthBuffer = e.depthBuffer),
      (this.stencilBuffer = e.stencilBuffer),
      e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()),
      (this.samples = e.samples),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class qn extends Xh {
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n), (this.isWebGLRenderTarget = !0);
  }
}
class Xl extends _t {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null),
      (this.isDataArrayTexture = !0),
      (this.image = { data: e, width: t, height: n, depth: i }),
      (this.magFilter = pt),
      (this.minFilter = pt),
      (this.wrapR = wt),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
class Yh extends _t {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null),
      (this.isData3DTexture = !0),
      (this.image = { data: e, width: t, height: n, depth: i }),
      (this.magFilter = pt),
      (this.minFilter = pt),
      (this.wrapR = wt),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
class nn {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    (this.isQuaternion = !0),
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._w = i);
  }
  static slerpFlat(e, t, n, i, r, a, o) {
    let l = n[i + 0],
      c = n[i + 1],
      h = n[i + 2],
      u = n[i + 3];
    const d = r[a + 0],
      m = r[a + 1],
      g = r[a + 2],
      _ = r[a + 3];
    if (o === 0) {
      (e[t + 0] = l), (e[t + 1] = c), (e[t + 2] = h), (e[t + 3] = u);
      return;
    }
    if (o === 1) {
      (e[t + 0] = d), (e[t + 1] = m), (e[t + 2] = g), (e[t + 3] = _);
      return;
    }
    if (u !== _ || l !== d || c !== m || h !== g) {
      let p = 1 - o;
      const f = l * d + c * m + h * g + u * _,
        y = f >= 0 ? 1 : -1,
        M = 1 - f * f;
      if (M > Number.EPSILON) {
        const b = Math.sqrt(M),
          L = Math.atan2(b, f * y);
        (p = Math.sin(p * L) / b), (o = Math.sin(o * L) / b);
      }
      const S = o * y;
      if (
        ((l = l * p + d * S),
        (c = c * p + m * S),
        (h = h * p + g * S),
        (u = u * p + _ * S),
        p === 1 - o)
      ) {
        const b = 1 / Math.sqrt(l * l + c * c + h * h + u * u);
        (l *= b), (c *= b), (h *= b), (u *= b);
      }
    }
    (e[t] = l), (e[t + 1] = c), (e[t + 2] = h), (e[t + 3] = u);
  }
  static multiplyQuaternionsFlat(e, t, n, i, r, a) {
    const o = n[i],
      l = n[i + 1],
      c = n[i + 2],
      h = n[i + 3],
      u = r[a],
      d = r[a + 1],
      m = r[a + 2],
      g = r[a + 3];
    return (
      (e[t] = o * g + h * u + l * m - c * d),
      (e[t + 1] = l * g + h * d + c * u - o * m),
      (e[t + 2] = c * g + h * m + o * d - l * u),
      (e[t + 3] = h * g - o * u - l * d - c * m),
      e
    );
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    (this._w = e), this._onChangeCallback();
  }
  set(e, t, n, i) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._w = i),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return (
      (this._x = e.x),
      (this._y = e.y),
      (this._z = e.z),
      (this._w = e.w),
      this._onChangeCallback(),
      this
    );
  }
  setFromEuler(e, t) {
    const n = e._x,
      i = e._y,
      r = e._z,
      a = e._order,
      o = Math.cos,
      l = Math.sin,
      c = o(n / 2),
      h = o(i / 2),
      u = o(r / 2),
      d = l(n / 2),
      m = l(i / 2),
      g = l(r / 2);
    switch (a) {
      case "XYZ":
        (this._x = d * h * u + c * m * g),
          (this._y = c * m * u - d * h * g),
          (this._z = c * h * g + d * m * u),
          (this._w = c * h * u - d * m * g);
        break;
      case "YXZ":
        (this._x = d * h * u + c * m * g),
          (this._y = c * m * u - d * h * g),
          (this._z = c * h * g - d * m * u),
          (this._w = c * h * u + d * m * g);
        break;
      case "ZXY":
        (this._x = d * h * u - c * m * g),
          (this._y = c * m * u + d * h * g),
          (this._z = c * h * g + d * m * u),
          (this._w = c * h * u - d * m * g);
        break;
      case "ZYX":
        (this._x = d * h * u - c * m * g),
          (this._y = c * m * u + d * h * g),
          (this._z = c * h * g - d * m * u),
          (this._w = c * h * u + d * m * g);
        break;
      case "YZX":
        (this._x = d * h * u + c * m * g),
          (this._y = c * m * u + d * h * g),
          (this._z = c * h * g - d * m * u),
          (this._w = c * h * u - d * m * g);
        break;
      case "XZY":
        (this._x = d * h * u - c * m * g),
          (this._y = c * m * u - d * h * g),
          (this._z = c * h * g + d * m * u),
          (this._w = c * h * u + d * m * g);
        break;
      default:
        console.warn(
          "THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a
        );
    }
    return t !== !1 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2,
      i = Math.sin(n);
    return (
      (this._x = e.x * i),
      (this._y = e.y * i),
      (this._z = e.z * i),
      (this._w = Math.cos(n)),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e) {
    const t = e.elements,
      n = t[0],
      i = t[4],
      r = t[8],
      a = t[1],
      o = t[5],
      l = t[9],
      c = t[2],
      h = t[6],
      u = t[10],
      d = n + o + u;
    if (d > 0) {
      const m = 0.5 / Math.sqrt(d + 1);
      (this._w = 0.25 / m),
        (this._x = (h - l) * m),
        (this._y = (r - c) * m),
        (this._z = (a - i) * m);
    } else if (n > o && n > u) {
      const m = 2 * Math.sqrt(1 + n - o - u);
      (this._w = (h - l) / m),
        (this._x = 0.25 * m),
        (this._y = (i + a) / m),
        (this._z = (r + c) / m);
    } else if (o > u) {
      const m = 2 * Math.sqrt(1 + o - n - u);
      (this._w = (r - c) / m),
        (this._x = (i + a) / m),
        (this._y = 0.25 * m),
        (this._z = (l + h) / m);
    } else {
      const m = 2 * Math.sqrt(1 + u - n - o);
      (this._w = (a - i) / m),
        (this._x = (r + c) / m),
        (this._y = (l + h) / m),
        (this._z = 0.25 * m);
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return (
      n < Number.EPSILON
        ? ((n = 0),
          Math.abs(e.x) > Math.abs(e.z)
            ? ((this._x = -e.y), (this._y = e.x), (this._z = 0), (this._w = n))
            : ((this._x = 0), (this._y = -e.z), (this._z = e.y), (this._w = n)))
        : ((this._x = e.y * t.z - e.z * t.y),
          (this._y = e.z * t.x - e.x * t.z),
          (this._z = e.x * t.y - e.y * t.x),
          (this._w = n)),
      this.normalize()
    );
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(mt(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const i = Math.min(1, t / n);
    return this.slerp(e, i), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return (
      (this._x *= -1),
      (this._y *= -1),
      (this._z *= -1),
      this._onChangeCallback(),
      this
    );
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return (
      this._x * this._x +
      this._y * this._y +
      this._z * this._z +
      this._w * this._w
    );
  }
  length() {
    return Math.sqrt(
      this._x * this._x +
        this._y * this._y +
        this._z * this._z +
        this._w * this._w
    );
  }
  normalize() {
    let e = this.length();
    return (
      e === 0
        ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
        : ((e = 1 / e),
          (this._x = this._x * e),
          (this._y = this._y * e),
          (this._z = this._z * e),
          (this._w = this._w * e)),
      this._onChangeCallback(),
      this
    );
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x,
      i = e._y,
      r = e._z,
      a = e._w,
      o = t._x,
      l = t._y,
      c = t._z,
      h = t._w;
    return (
      (this._x = n * h + a * o + i * c - r * l),
      (this._y = i * h + a * l + r * o - n * c),
      (this._z = r * h + a * c + n * l - i * o),
      (this._w = a * h - n * o - i * l - r * c),
      this._onChangeCallback(),
      this
    );
  }
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const n = this._x,
      i = this._y,
      r = this._z,
      a = this._w;
    let o = a * e._w + n * e._x + i * e._y + r * e._z;
    if (
      (o < 0
        ? ((this._w = -e._w),
          (this._x = -e._x),
          (this._y = -e._y),
          (this._z = -e._z),
          (o = -o))
        : this.copy(e),
      o >= 1)
    )
      return (this._w = a), (this._x = n), (this._y = i), (this._z = r), this;
    const l = 1 - o * o;
    if (l <= Number.EPSILON) {
      const m = 1 - t;
      return (
        (this._w = m * a + t * this._w),
        (this._x = m * n + t * this._x),
        (this._y = m * i + t * this._y),
        (this._z = m * r + t * this._z),
        this.normalize(),
        this._onChangeCallback(),
        this
      );
    }
    const c = Math.sqrt(l),
      h = Math.atan2(c, o),
      u = Math.sin((1 - t) * h) / c,
      d = Math.sin(t * h) / c;
    return (
      (this._w = a * u + this._w * d),
      (this._x = n * u + this._x * d),
      (this._y = i * u + this._y * d),
      (this._z = r * u + this._z * d),
      this._onChangeCallback(),
      this
    );
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = Math.random(),
      t = Math.sqrt(1 - e),
      n = Math.sqrt(e),
      i = 2 * Math.PI * Math.random(),
      r = 2 * Math.PI * Math.random();
    return this.set(
      t * Math.cos(i),
      n * Math.sin(r),
      n * Math.cos(r),
      t * Math.sin(i)
    );
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._w === this._w
    );
  }
  fromArray(e, t = 0) {
    return (
      (this._x = e[t]),
      (this._y = e[t + 1]),
      (this._z = e[t + 2]),
      (this._w = e[t + 3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this._x = e.getX(t)),
      (this._y = e.getY(t)),
      (this._z = e.getZ(t)),
      (this._w = e.getW(t)),
      this
    );
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class D {
  constructor(e = 0, t = 0, n = 0) {
    (D.prototype.isVector3 = !0), (this.x = e), (this.y = t), (this.z = n);
  }
  set(e, t, n) {
    return (
      n === void 0 && (n = this.z),
      (this.x = e),
      (this.y = t),
      (this.z = n),
      this
    );
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), (this.z = e.z), this;
  }
  add(e) {
    return (this.x += e.x), (this.y += e.y), (this.z += e.z), this;
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), this;
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x), (this.y = e.y + t.y), (this.z = e.z + t.z), this
    );
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), (this.z += e.z * t), this;
  }
  sub(e) {
    return (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), this;
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), this;
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x), (this.y = e.y - t.y), (this.z = e.z - t.z), this
    );
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), this;
  }
  multiplyVectors(e, t) {
    return (
      (this.x = e.x * t.x), (this.y = e.y * t.y), (this.z = e.z * t.z), this
    );
  }
  applyEuler(e) {
    return this.applyQuaternion(go.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(go.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      r = e.elements;
    return (
      (this.x = r[0] * t + r[3] * n + r[6] * i),
      (this.y = r[1] * t + r[4] * n + r[7] * i),
      (this.z = r[2] * t + r[5] * n + r[8] * i),
      this
    );
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      r = e.elements,
      a = 1 / (r[3] * t + r[7] * n + r[11] * i + r[15]);
    return (
      (this.x = (r[0] * t + r[4] * n + r[8] * i + r[12]) * a),
      (this.y = (r[1] * t + r[5] * n + r[9] * i + r[13]) * a),
      (this.z = (r[2] * t + r[6] * n + r[10] * i + r[14]) * a),
      this
    );
  }
  applyQuaternion(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      r = e.x,
      a = e.y,
      o = e.z,
      l = e.w,
      c = 2 * (a * i - o * n),
      h = 2 * (o * t - r * i),
      u = 2 * (r * n - a * t);
    return (
      (this.x = t + l * c + a * u - o * h),
      (this.y = n + l * h + o * c - r * u),
      (this.z = i + l * u + r * h - a * c),
      this
    );
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(
      e.projectionMatrix
    );
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(
      e.matrixWorld
    );
  }
  transformDirection(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      r = e.elements;
    return (
      (this.x = r[0] * t + r[4] * n + r[8] * i),
      (this.y = r[1] * t + r[5] * n + r[9] * i),
      (this.z = r[2] * t + r[6] * n + r[10] * i),
      this.normalize()
    );
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), (this.z /= e.z), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      (this.z = Math.max(e.z, Math.min(t.z, this.z))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      (this.z = Math.max(e, Math.min(t, this.z))),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(e, Math.min(t, n))
    );
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = Math.trunc(this.x)),
      (this.y = Math.trunc(this.y)),
      (this.z = Math.trunc(this.z)),
      this
    );
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      (this.z = e.z + (t.z - e.z) * n),
      this
    );
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x,
      i = e.y,
      r = e.z,
      a = t.x,
      o = t.y,
      l = t.z;
    return (
      (this.x = i * l - r * o),
      (this.y = r * a - n * l),
      (this.z = n * o - i * a),
      this
    );
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return or.copy(this).projectOnVector(e), this.sub(or);
  }
  reflect(e) {
    return this.sub(or.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(mt(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      n = this.y - e.y,
      i = this.z - e.z;
    return t * t + n * n + i * i;
  }
  manhattanDistanceTo(e) {
    return (
      Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
    );
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const i = Math.sin(t) * e;
    return (
      (this.x = i * Math.sin(n)),
      (this.y = Math.cos(t) * e),
      (this.z = i * Math.cos(n)),
      this
    );
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return (
      (this.x = e * Math.sin(t)), (this.y = n), (this.z = e * Math.cos(t)), this
    );
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return (this.x = t[12]), (this.y = t[13]), (this.z = t[14]), this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(),
      n = this.setFromMatrixColumn(e, 1).length(),
      i = this.setFromMatrixColumn(e, 2).length();
    return (this.x = t), (this.y = n), (this.z = i), this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return (this.x = e._x), (this.y = e._y), (this.z = e._z), this;
  }
  setFromColor(e) {
    return (this.x = e.r), (this.y = e.g), (this.z = e.b), this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), (this.z = e[t + 2]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), (e[t + 2] = this.z), e;
  }
  fromBufferAttribute(e, t) {
    return (
      (this.x = e.getX(t)), (this.y = e.getY(t)), (this.z = e.getZ(t)), this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      this
    );
  }
  randomDirection() {
    const e = (Math.random() - 0.5) * 2,
      t = Math.random() * Math.PI * 2,
      n = Math.sqrt(1 - e ** 2);
    return (
      (this.x = n * Math.cos(t)), (this.y = n * Math.sin(t)), (this.z = e), this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const or = new D(),
  go = new nn();
class _n {
  constructor(
    e = new D(1 / 0, 1 / 0, 1 / 0),
    t = new D(-1 / 0, -1 / 0, -1 / 0)
  ) {
    (this.isBox3 = !0), (this.min = e), (this.max = t);
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3)
      this.expandByPoint(Gt.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++)
      this.expandByPoint(Gt.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = Gt.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return (
      (this.min.x = this.min.y = this.min.z = 1 / 0),
      (this.max.x = this.max.y = this.max.z = -1 / 0),
      this
    );
  }
  isEmpty() {
    return (
      this.max.x < this.min.x ||
      this.max.y < this.min.y ||
      this.max.z < this.min.z
    );
  }
  getCenter(e) {
    return this.isEmpty()
      ? e.set(0, 0, 0)
      : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const n = e.geometry;
    if (n !== void 0) {
      const r = n.getAttribute("position");
      if (t === !0 && r !== void 0 && e.isInstancedMesh !== !0)
        for (let a = 0, o = r.count; a < o; a++)
          e.isMesh === !0
            ? e.getVertexPosition(a, Gt)
            : Gt.fromBufferAttribute(r, a),
            Gt.applyMatrix4(e.matrixWorld),
            this.expandByPoint(Gt);
      else
        e.boundingBox !== void 0
          ? (e.boundingBox === null && e.computeBoundingBox(),
            rs.copy(e.boundingBox))
          : (n.boundingBox === null && n.computeBoundingBox(),
            rs.copy(n.boundingBox)),
          rs.applyMatrix4(e.matrixWorld),
          this.union(rs);
    }
    const i = e.children;
    for (let r = 0, a = i.length; r < a; r++) this.expandByObject(i[r], t);
    return this;
  }
  containsPoint(e) {
    return !(
      e.x < this.min.x ||
      e.x > this.max.x ||
      e.y < this.min.y ||
      e.y > this.max.y ||
      e.z < this.min.z ||
      e.z > this.max.z
    );
  }
  containsBox(e) {
    return (
      this.min.x <= e.min.x &&
      e.max.x <= this.max.x &&
      this.min.y <= e.min.y &&
      e.max.y <= this.max.y &&
      this.min.z <= e.min.z &&
      e.max.z <= this.max.z
    );
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(e) {
    return !(
      e.max.x < this.min.x ||
      e.min.x > this.max.x ||
      e.max.y < this.min.y ||
      e.min.y > this.max.y ||
      e.max.z < this.min.z ||
      e.min.z > this.max.z
    );
  }
  intersectsSphere(e) {
    return (
      this.clampPoint(e.center, Gt),
      Gt.distanceToSquared(e.center) <= e.radius * e.radius
    );
  }
  intersectsPlane(e) {
    let t, n;
    return (
      e.normal.x > 0
        ? ((t = e.normal.x * this.min.x), (n = e.normal.x * this.max.x))
        : ((t = e.normal.x * this.max.x), (n = e.normal.x * this.min.x)),
      e.normal.y > 0
        ? ((t += e.normal.y * this.min.y), (n += e.normal.y * this.max.y))
        : ((t += e.normal.y * this.max.y), (n += e.normal.y * this.min.y)),
      e.normal.z > 0
        ? ((t += e.normal.z * this.min.z), (n += e.normal.z * this.max.z))
        : ((t += e.normal.z * this.max.z), (n += e.normal.z * this.min.z)),
      t <= -e.constant && n >= -e.constant
    );
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) return !1;
    this.getCenter(Oi),
      as.subVectors(this.max, Oi),
      ni.subVectors(e.a, Oi),
      ii.subVectors(e.b, Oi),
      si.subVectors(e.c, Oi),
      xn.subVectors(ii, ni),
      vn.subVectors(si, ii),
      Fn.subVectors(ni, si);
    let t = [
      0,
      -xn.z,
      xn.y,
      0,
      -vn.z,
      vn.y,
      0,
      -Fn.z,
      Fn.y,
      xn.z,
      0,
      -xn.x,
      vn.z,
      0,
      -vn.x,
      Fn.z,
      0,
      -Fn.x,
      -xn.y,
      xn.x,
      0,
      -vn.y,
      vn.x,
      0,
      -Fn.y,
      Fn.x,
      0,
    ];
    return !lr(t, ni, ii, si, as) ||
      ((t = [1, 0, 0, 0, 1, 0, 0, 0, 1]), !lr(t, ni, ii, si, as))
      ? !1
      : (os.crossVectors(xn, vn),
        (t = [os.x, os.y, os.z]),
        lr(t, ni, ii, si, as));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, Gt).distanceTo(e);
  }
  getBoundingSphere(e) {
    return (
      this.isEmpty()
        ? e.makeEmpty()
        : (this.getCenter(e.center),
          (e.radius = this.getSize(Gt).length() * 0.5)),
      e
    );
  }
  intersect(e) {
    return (
      this.min.max(e.min),
      this.max.min(e.max),
      this.isEmpty() && this.makeEmpty(),
      this
    );
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty()
      ? this
      : (on[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
        on[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
        on[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
        on[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
        on[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
        on[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
        on[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
        on[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
        this.setFromPoints(on),
        this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const on = [
    new D(),
    new D(),
    new D(),
    new D(),
    new D(),
    new D(),
    new D(),
    new D(),
  ],
  Gt = new D(),
  rs = new _n(),
  ni = new D(),
  ii = new D(),
  si = new D(),
  xn = new D(),
  vn = new D(),
  Fn = new D(),
  Oi = new D(),
  as = new D(),
  os = new D(),
  On = new D();
function lr(s, e, t, n, i) {
  for (let r = 0, a = s.length - 3; r <= a; r += 3) {
    On.fromArray(s, r);
    const o =
        i.x * Math.abs(On.x) + i.y * Math.abs(On.y) + i.z * Math.abs(On.z),
      l = e.dot(On),
      c = t.dot(On),
      h = n.dot(On);
    if (Math.max(-Math.max(l, c, h), Math.min(l, c, h)) > o) return !1;
  }
  return !0;
}
const jh = new _n(),
  Bi = new D(),
  cr = new D();
class sn {
  constructor(e = new D(), t = -1) {
    (this.center = e), (this.radius = t);
  }
  set(e, t) {
    return this.center.copy(e), (this.radius = t), this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : jh.setFromPoints(e).getCenter(n);
    let i = 0;
    for (let r = 0, a = e.length; r < a; r++)
      i = Math.max(i, n.distanceToSquared(e[r]));
    return (this.radius = Math.sqrt(i)), this;
  }
  copy(e) {
    return this.center.copy(e.center), (this.radius = e.radius), this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), (this.radius = -1), this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return (
      t.copy(e),
      n > this.radius * this.radius &&
        (t.sub(this.center).normalize(),
        t.multiplyScalar(this.radius).add(this.center)),
      t
    );
  }
  getBoundingBox(e) {
    return this.isEmpty()
      ? (e.makeEmpty(), e)
      : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return (
      this.center.applyMatrix4(e),
      (this.radius = this.radius * e.getMaxScaleOnAxis()),
      this
    );
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty()) return this.center.copy(e), (this.radius = 0), this;
    Bi.subVectors(e, this.center);
    const t = Bi.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t),
        i = (n - this.radius) * 0.5;
      this.center.addScaledVector(Bi, i / n), (this.radius += i);
    }
    return this;
  }
  union(e) {
    return e.isEmpty()
      ? this
      : this.isEmpty()
      ? (this.copy(e), this)
      : (this.center.equals(e.center) === !0
          ? (this.radius = Math.max(this.radius, e.radius))
          : (cr.subVectors(e.center, this.center).setLength(e.radius),
            this.expandByPoint(Bi.copy(e.center).add(cr)),
            this.expandByPoint(Bi.copy(e.center).sub(cr))),
        this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const ln = new D(),
  hr = new D(),
  ls = new D(),
  Mn = new D(),
  ur = new D(),
  cs = new D(),
  dr = new D();
class Qi {
  constructor(e = new D(), t = new D(0, 0, -1)) {
    (this.origin = e), (this.direction = t);
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, ln)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0
      ? t.copy(this.origin)
      : t.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = ln.subVectors(e, this.origin).dot(this.direction);
    return t < 0
      ? this.origin.distanceToSquared(e)
      : (ln.copy(this.origin).addScaledVector(this.direction, t),
        ln.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, i) {
    hr.copy(e).add(t).multiplyScalar(0.5),
      ls.copy(t).sub(e).normalize(),
      Mn.copy(this.origin).sub(hr);
    const r = e.distanceTo(t) * 0.5,
      a = -this.direction.dot(ls),
      o = Mn.dot(this.direction),
      l = -Mn.dot(ls),
      c = Mn.lengthSq(),
      h = Math.abs(1 - a * a);
    let u, d, m, g;
    if (h > 0)
      if (((u = a * l - o), (d = a * o - l), (g = r * h), u >= 0))
        if (d >= -g)
          if (d <= g) {
            const _ = 1 / h;
            (u *= _),
              (d *= _),
              (m = u * (u + a * d + 2 * o) + d * (a * u + d + 2 * l) + c);
          } else
            (d = r),
              (u = Math.max(0, -(a * d + o))),
              (m = -u * u + d * (d + 2 * l) + c);
        else
          (d = -r),
            (u = Math.max(0, -(a * d + o))),
            (m = -u * u + d * (d + 2 * l) + c);
      else
        d <= -g
          ? ((u = Math.max(0, -(-a * r + o))),
            (d = u > 0 ? -r : Math.min(Math.max(-r, -l), r)),
            (m = -u * u + d * (d + 2 * l) + c))
          : d <= g
          ? ((u = 0),
            (d = Math.min(Math.max(-r, -l), r)),
            (m = d * (d + 2 * l) + c))
          : ((u = Math.max(0, -(a * r + o))),
            (d = u > 0 ? r : Math.min(Math.max(-r, -l), r)),
            (m = -u * u + d * (d + 2 * l) + c));
    else
      (d = a > 0 ? -r : r),
        (u = Math.max(0, -(a * d + o))),
        (m = -u * u + d * (d + 2 * l) + c);
    return (
      n && n.copy(this.origin).addScaledVector(this.direction, u),
      i && i.copy(hr).addScaledVector(ls, d),
      m
    );
  }
  intersectSphere(e, t) {
    ln.subVectors(e.center, this.origin);
    const n = ln.dot(this.direction),
      i = ln.dot(ln) - n * n,
      r = e.radius * e.radius;
    if (i > r) return null;
    const a = Math.sqrt(r - i),
      o = n - a,
      l = n + a;
    return l < 0 ? null : o < 0 ? this.at(l, t) : this.at(o, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, i, r, a, o, l;
    const c = 1 / this.direction.x,
      h = 1 / this.direction.y,
      u = 1 / this.direction.z,
      d = this.origin;
    return (
      c >= 0
        ? ((n = (e.min.x - d.x) * c), (i = (e.max.x - d.x) * c))
        : ((n = (e.max.x - d.x) * c), (i = (e.min.x - d.x) * c)),
      h >= 0
        ? ((r = (e.min.y - d.y) * h), (a = (e.max.y - d.y) * h))
        : ((r = (e.max.y - d.y) * h), (a = (e.min.y - d.y) * h)),
      n > a ||
      r > i ||
      ((r > n || isNaN(n)) && (n = r),
      (a < i || isNaN(i)) && (i = a),
      u >= 0
        ? ((o = (e.min.z - d.z) * u), (l = (e.max.z - d.z) * u))
        : ((o = (e.max.z - d.z) * u), (l = (e.min.z - d.z) * u)),
      n > l || o > i) ||
      ((o > n || n !== n) && (n = o), (l < i || i !== i) && (i = l), i < 0)
        ? null
        : this.at(n >= 0 ? n : i, t)
    );
  }
  intersectsBox(e) {
    return this.intersectBox(e, ln) !== null;
  }
  intersectTriangle(e, t, n, i, r) {
    ur.subVectors(t, e), cs.subVectors(n, e), dr.crossVectors(ur, cs);
    let a = this.direction.dot(dr),
      o;
    if (a > 0) {
      if (i) return null;
      o = 1;
    } else if (a < 0) (o = -1), (a = -a);
    else return null;
    Mn.subVectors(this.origin, e);
    const l = o * this.direction.dot(cs.crossVectors(Mn, cs));
    if (l < 0) return null;
    const c = o * this.direction.dot(ur.cross(Mn));
    if (c < 0 || l + c > a) return null;
    const h = -o * Mn.dot(dr);
    return h < 0 ? null : this.at(h / a, r);
  }
  applyMatrix4(e) {
    return (
      this.origin.applyMatrix4(e), this.direction.transformDirection(e), this
    );
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class He {
  constructor(e, t, n, i, r, a, o, l, c, h, u, d, m, g, _, p) {
    (He.prototype.isMatrix4 = !0),
      (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
      e !== void 0 && this.set(e, t, n, i, r, a, o, l, c, h, u, d, m, g, _, p);
  }
  set(e, t, n, i, r, a, o, l, c, h, u, d, m, g, _, p) {
    const f = this.elements;
    return (
      (f[0] = e),
      (f[4] = t),
      (f[8] = n),
      (f[12] = i),
      (f[1] = r),
      (f[5] = a),
      (f[9] = o),
      (f[13] = l),
      (f[2] = c),
      (f[6] = h),
      (f[10] = u),
      (f[14] = d),
      (f[3] = m),
      (f[7] = g),
      (f[11] = _),
      (f[15] = p),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new He().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements,
      n = e.elements;
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[3]),
      (t[4] = n[4]),
      (t[5] = n[5]),
      (t[6] = n[6]),
      (t[7] = n[7]),
      (t[8] = n[8]),
      (t[9] = n[9]),
      (t[10] = n[10]),
      (t[11] = n[11]),
      (t[12] = n[12]),
      (t[13] = n[13]),
      (t[14] = n[14]),
      (t[15] = n[15]),
      this
    );
  }
  copyPosition(e) {
    const t = this.elements,
      n = e.elements;
    return (t[12] = n[12]), (t[13] = n[13]), (t[14] = n[14]), this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return (
      this.set(
        t[0],
        t[3],
        t[6],
        0,
        t[1],
        t[4],
        t[7],
        0,
        t[2],
        t[5],
        t[8],
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  extractBasis(e, t, n) {
    return (
      e.setFromMatrixColumn(this, 0),
      t.setFromMatrixColumn(this, 1),
      n.setFromMatrixColumn(this, 2),
      this
    );
  }
  makeBasis(e, t, n) {
    return (
      this.set(
        e.x,
        t.x,
        n.x,
        0,
        e.y,
        t.y,
        n.y,
        0,
        e.z,
        t.z,
        n.z,
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  extractRotation(e) {
    const t = this.elements,
      n = e.elements,
      i = 1 / ri.setFromMatrixColumn(e, 0).length(),
      r = 1 / ri.setFromMatrixColumn(e, 1).length(),
      a = 1 / ri.setFromMatrixColumn(e, 2).length();
    return (
      (t[0] = n[0] * i),
      (t[1] = n[1] * i),
      (t[2] = n[2] * i),
      (t[3] = 0),
      (t[4] = n[4] * r),
      (t[5] = n[5] * r),
      (t[6] = n[6] * r),
      (t[7] = 0),
      (t[8] = n[8] * a),
      (t[9] = n[9] * a),
      (t[10] = n[10] * a),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromEuler(e) {
    const t = this.elements,
      n = e.x,
      i = e.y,
      r = e.z,
      a = Math.cos(n),
      o = Math.sin(n),
      l = Math.cos(i),
      c = Math.sin(i),
      h = Math.cos(r),
      u = Math.sin(r);
    if (e.order === "XYZ") {
      const d = a * h,
        m = a * u,
        g = o * h,
        _ = o * u;
      (t[0] = l * h),
        (t[4] = -l * u),
        (t[8] = c),
        (t[1] = m + g * c),
        (t[5] = d - _ * c),
        (t[9] = -o * l),
        (t[2] = _ - d * c),
        (t[6] = g + m * c),
        (t[10] = a * l);
    } else if (e.order === "YXZ") {
      const d = l * h,
        m = l * u,
        g = c * h,
        _ = c * u;
      (t[0] = d + _ * o),
        (t[4] = g * o - m),
        (t[8] = a * c),
        (t[1] = a * u),
        (t[5] = a * h),
        (t[9] = -o),
        (t[2] = m * o - g),
        (t[6] = _ + d * o),
        (t[10] = a * l);
    } else if (e.order === "ZXY") {
      const d = l * h,
        m = l * u,
        g = c * h,
        _ = c * u;
      (t[0] = d - _ * o),
        (t[4] = -a * u),
        (t[8] = g + m * o),
        (t[1] = m + g * o),
        (t[5] = a * h),
        (t[9] = _ - d * o),
        (t[2] = -a * c),
        (t[6] = o),
        (t[10] = a * l);
    } else if (e.order === "ZYX") {
      const d = a * h,
        m = a * u,
        g = o * h,
        _ = o * u;
      (t[0] = l * h),
        (t[4] = g * c - m),
        (t[8] = d * c + _),
        (t[1] = l * u),
        (t[5] = _ * c + d),
        (t[9] = m * c - g),
        (t[2] = -c),
        (t[6] = o * l),
        (t[10] = a * l);
    } else if (e.order === "YZX") {
      const d = a * l,
        m = a * c,
        g = o * l,
        _ = o * c;
      (t[0] = l * h),
        (t[4] = _ - d * u),
        (t[8] = g * u + m),
        (t[1] = u),
        (t[5] = a * h),
        (t[9] = -o * h),
        (t[2] = -c * h),
        (t[6] = m * u + g),
        (t[10] = d - _ * u);
    } else if (e.order === "XZY") {
      const d = a * l,
        m = a * c,
        g = o * l,
        _ = o * c;
      (t[0] = l * h),
        (t[4] = -u),
        (t[8] = c * h),
        (t[1] = d * u + _),
        (t[5] = a * h),
        (t[9] = m * u - g),
        (t[2] = g * u - m),
        (t[6] = o * h),
        (t[10] = _ * u + d);
    }
    return (
      (t[3] = 0),
      (t[7] = 0),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromQuaternion(e) {
    return this.compose(qh, e, $h);
  }
  lookAt(e, t, n) {
    const i = this.elements;
    return (
      Pt.subVectors(e, t),
      Pt.lengthSq() === 0 && (Pt.z = 1),
      Pt.normalize(),
      yn.crossVectors(n, Pt),
      yn.lengthSq() === 0 &&
        (Math.abs(n.z) === 1 ? (Pt.x += 1e-4) : (Pt.z += 1e-4),
        Pt.normalize(),
        yn.crossVectors(n, Pt)),
      yn.normalize(),
      hs.crossVectors(Pt, yn),
      (i[0] = yn.x),
      (i[4] = hs.x),
      (i[8] = Pt.x),
      (i[1] = yn.y),
      (i[5] = hs.y),
      (i[9] = Pt.y),
      (i[2] = yn.z),
      (i[6] = hs.z),
      (i[10] = Pt.z),
      this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements,
      i = t.elements,
      r = this.elements,
      a = n[0],
      o = n[4],
      l = n[8],
      c = n[12],
      h = n[1],
      u = n[5],
      d = n[9],
      m = n[13],
      g = n[2],
      _ = n[6],
      p = n[10],
      f = n[14],
      y = n[3],
      M = n[7],
      S = n[11],
      b = n[15],
      L = i[0],
      w = i[4],
      I = i[8],
      v = i[12],
      T = i[1],
      G = i[5],
      j = i[9],
      $ = i[13],
      C = i[2],
      F = i[6],
      V = i[10],
      Y = i[14],
      ee = i[3],
      Z = i[7],
      q = i[11],
      U = i[15];
    return (
      (r[0] = a * L + o * T + l * C + c * ee),
      (r[4] = a * w + o * G + l * F + c * Z),
      (r[8] = a * I + o * j + l * V + c * q),
      (r[12] = a * v + o * $ + l * Y + c * U),
      (r[1] = h * L + u * T + d * C + m * ee),
      (r[5] = h * w + u * G + d * F + m * Z),
      (r[9] = h * I + u * j + d * V + m * q),
      (r[13] = h * v + u * $ + d * Y + m * U),
      (r[2] = g * L + _ * T + p * C + f * ee),
      (r[6] = g * w + _ * G + p * F + f * Z),
      (r[10] = g * I + _ * j + p * V + f * q),
      (r[14] = g * v + _ * $ + p * Y + f * U),
      (r[3] = y * L + M * T + S * C + b * ee),
      (r[7] = y * w + M * G + S * F + b * Z),
      (r[11] = y * I + M * j + S * V + b * q),
      (r[15] = y * v + M * $ + S * Y + b * U),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[4] *= e),
      (t[8] *= e),
      (t[12] *= e),
      (t[1] *= e),
      (t[5] *= e),
      (t[9] *= e),
      (t[13] *= e),
      (t[2] *= e),
      (t[6] *= e),
      (t[10] *= e),
      (t[14] *= e),
      (t[3] *= e),
      (t[7] *= e),
      (t[11] *= e),
      (t[15] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      n = e[4],
      i = e[8],
      r = e[12],
      a = e[1],
      o = e[5],
      l = e[9],
      c = e[13],
      h = e[2],
      u = e[6],
      d = e[10],
      m = e[14],
      g = e[3],
      _ = e[7],
      p = e[11],
      f = e[15];
    return (
      g *
        (+r * l * u -
          i * c * u -
          r * o * d +
          n * c * d +
          i * o * m -
          n * l * m) +
      _ *
        (+t * l * m -
          t * c * d +
          r * a * d -
          i * a * m +
          i * c * h -
          r * l * h) +
      p *
        (+t * c * u -
          t * o * m -
          r * a * u +
          n * a * m +
          r * o * h -
          n * c * h) +
      f *
        (-i * o * h - t * l * u + t * o * d + i * a * u - n * a * d + n * l * h)
    );
  }
  transpose() {
    const e = this.elements;
    let t;
    return (
      (t = e[1]),
      (e[1] = e[4]),
      (e[4] = t),
      (t = e[2]),
      (e[2] = e[8]),
      (e[8] = t),
      (t = e[6]),
      (e[6] = e[9]),
      (e[9] = t),
      (t = e[3]),
      (e[3] = e[12]),
      (e[12] = t),
      (t = e[7]),
      (e[7] = e[13]),
      (e[13] = t),
      (t = e[11]),
      (e[11] = e[14]),
      (e[14] = t),
      this
    );
  }
  setPosition(e, t, n) {
    const i = this.elements;
    return (
      e.isVector3
        ? ((i[12] = e.x), (i[13] = e.y), (i[14] = e.z))
        : ((i[12] = e), (i[13] = t), (i[14] = n)),
      this
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      i = e[2],
      r = e[3],
      a = e[4],
      o = e[5],
      l = e[6],
      c = e[7],
      h = e[8],
      u = e[9],
      d = e[10],
      m = e[11],
      g = e[12],
      _ = e[13],
      p = e[14],
      f = e[15],
      y = u * p * c - _ * d * c + _ * l * m - o * p * m - u * l * f + o * d * f,
      M = g * d * c - h * p * c - g * l * m + a * p * m + h * l * f - a * d * f,
      S = h * _ * c - g * u * c + g * o * m - a * _ * m - h * o * f + a * u * f,
      b = g * u * l - h * _ * l - g * o * d + a * _ * d + h * o * p - a * u * p,
      L = t * y + n * M + i * S + r * b;
    if (L === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const w = 1 / L;
    return (
      (e[0] = y * w),
      (e[1] =
        (_ * d * r -
          u * p * r -
          _ * i * m +
          n * p * m +
          u * i * f -
          n * d * f) *
        w),
      (e[2] =
        (o * p * r -
          _ * l * r +
          _ * i * c -
          n * p * c -
          o * i * f +
          n * l * f) *
        w),
      (e[3] =
        (u * l * r -
          o * d * r -
          u * i * c +
          n * d * c +
          o * i * m -
          n * l * m) *
        w),
      (e[4] = M * w),
      (e[5] =
        (h * p * r -
          g * d * r +
          g * i * m -
          t * p * m -
          h * i * f +
          t * d * f) *
        w),
      (e[6] =
        (g * l * r -
          a * p * r -
          g * i * c +
          t * p * c +
          a * i * f -
          t * l * f) *
        w),
      (e[7] =
        (a * d * r -
          h * l * r +
          h * i * c -
          t * d * c -
          a * i * m +
          t * l * m) *
        w),
      (e[8] = S * w),
      (e[9] =
        (g * u * r -
          h * _ * r -
          g * n * m +
          t * _ * m +
          h * n * f -
          t * u * f) *
        w),
      (e[10] =
        (a * _ * r -
          g * o * r +
          g * n * c -
          t * _ * c -
          a * n * f +
          t * o * f) *
        w),
      (e[11] =
        (h * o * r -
          a * u * r -
          h * n * c +
          t * u * c +
          a * n * m -
          t * o * m) *
        w),
      (e[12] = b * w),
      (e[13] =
        (h * _ * i -
          g * u * i +
          g * n * d -
          t * _ * d -
          h * n * p +
          t * u * p) *
        w),
      (e[14] =
        (g * o * i -
          a * _ * i -
          g * n * l +
          t * _ * l +
          a * n * p -
          t * o * p) *
        w),
      (e[15] =
        (a * u * i -
          h * o * i +
          h * n * l -
          t * u * l -
          a * n * d +
          t * o * d) *
        w),
      this
    );
  }
  scale(e) {
    const t = this.elements,
      n = e.x,
      i = e.y,
      r = e.z;
    return (
      (t[0] *= n),
      (t[4] *= i),
      (t[8] *= r),
      (t[1] *= n),
      (t[5] *= i),
      (t[9] *= r),
      (t[2] *= n),
      (t[6] *= i),
      (t[10] *= r),
      (t[3] *= n),
      (t[7] *= i),
      (t[11] *= r),
      this
    );
  }
  getMaxScaleOnAxis() {
    const e = this.elements,
      t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
      n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
      i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, i));
  }
  makeTranslation(e, t, n) {
    return (
      e.isVector3
        ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1)
        : this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1),
      this
    );
  }
  makeRotationX(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t),
      i = Math.sin(t),
      r = 1 - n,
      a = e.x,
      o = e.y,
      l = e.z,
      c = r * a,
      h = r * o;
    return (
      this.set(
        c * a + n,
        c * o - i * l,
        c * l + i * o,
        0,
        c * o + i * l,
        h * o + n,
        h * l - i * a,
        0,
        c * l - i * o,
        h * l + i * a,
        r * l * l + n,
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  makeScale(e, t, n) {
    return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
  }
  makeShear(e, t, n, i, r, a) {
    return this.set(1, n, r, 0, e, 1, a, 0, t, i, 1, 0, 0, 0, 0, 1), this;
  }
  compose(e, t, n) {
    const i = this.elements,
      r = t._x,
      a = t._y,
      o = t._z,
      l = t._w,
      c = r + r,
      h = a + a,
      u = o + o,
      d = r * c,
      m = r * h,
      g = r * u,
      _ = a * h,
      p = a * u,
      f = o * u,
      y = l * c,
      M = l * h,
      S = l * u,
      b = n.x,
      L = n.y,
      w = n.z;
    return (
      (i[0] = (1 - (_ + f)) * b),
      (i[1] = (m + S) * b),
      (i[2] = (g - M) * b),
      (i[3] = 0),
      (i[4] = (m - S) * L),
      (i[5] = (1 - (d + f)) * L),
      (i[6] = (p + y) * L),
      (i[7] = 0),
      (i[8] = (g + M) * w),
      (i[9] = (p - y) * w),
      (i[10] = (1 - (d + _)) * w),
      (i[11] = 0),
      (i[12] = e.x),
      (i[13] = e.y),
      (i[14] = e.z),
      (i[15] = 1),
      this
    );
  }
  decompose(e, t, n) {
    const i = this.elements;
    let r = ri.set(i[0], i[1], i[2]).length();
    const a = ri.set(i[4], i[5], i[6]).length(),
      o = ri.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (r = -r),
      (e.x = i[12]),
      (e.y = i[13]),
      (e.z = i[14]),
      Vt.copy(this);
    const c = 1 / r,
      h = 1 / a,
      u = 1 / o;
    return (
      (Vt.elements[0] *= c),
      (Vt.elements[1] *= c),
      (Vt.elements[2] *= c),
      (Vt.elements[4] *= h),
      (Vt.elements[5] *= h),
      (Vt.elements[6] *= h),
      (Vt.elements[8] *= u),
      (Vt.elements[9] *= u),
      (Vt.elements[10] *= u),
      t.setFromRotationMatrix(Vt),
      (n.x = r),
      (n.y = a),
      (n.z = o),
      this
    );
  }
  makePerspective(e, t, n, i, r, a, o = mn) {
    const l = this.elements,
      c = (2 * r) / (t - e),
      h = (2 * r) / (n - i),
      u = (t + e) / (t - e),
      d = (n + i) / (n - i);
    let m, g;
    if (o === mn) (m = -(a + r) / (a - r)), (g = (-2 * a * r) / (a - r));
    else if (o === Gs) (m = -a / (a - r)), (g = (-a * r) / (a - r));
    else
      throw new Error(
        "THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o
      );
    return (
      (l[0] = c),
      (l[4] = 0),
      (l[8] = u),
      (l[12] = 0),
      (l[1] = 0),
      (l[5] = h),
      (l[9] = d),
      (l[13] = 0),
      (l[2] = 0),
      (l[6] = 0),
      (l[10] = m),
      (l[14] = g),
      (l[3] = 0),
      (l[7] = 0),
      (l[11] = -1),
      (l[15] = 0),
      this
    );
  }
  makeOrthographic(e, t, n, i, r, a, o = mn) {
    const l = this.elements,
      c = 1 / (t - e),
      h = 1 / (n - i),
      u = 1 / (a - r),
      d = (t + e) * c,
      m = (n + i) * h;
    let g, _;
    if (o === mn) (g = (a + r) * u), (_ = -2 * u);
    else if (o === Gs) (g = r * u), (_ = -1 * u);
    else
      throw new Error(
        "THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o
      );
    return (
      (l[0] = 2 * c),
      (l[4] = 0),
      (l[8] = 0),
      (l[12] = -d),
      (l[1] = 0),
      (l[5] = 2 * h),
      (l[9] = 0),
      (l[13] = -m),
      (l[2] = 0),
      (l[6] = 0),
      (l[10] = _),
      (l[14] = -g),
      (l[3] = 0),
      (l[7] = 0),
      (l[11] = 0),
      (l[15] = 1),
      this
    );
  }
  equals(e) {
    const t = this.elements,
      n = e.elements;
    for (let i = 0; i < 16; i++) if (t[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return (
      (e[t] = n[0]),
      (e[t + 1] = n[1]),
      (e[t + 2] = n[2]),
      (e[t + 3] = n[3]),
      (e[t + 4] = n[4]),
      (e[t + 5] = n[5]),
      (e[t + 6] = n[6]),
      (e[t + 7] = n[7]),
      (e[t + 8] = n[8]),
      (e[t + 9] = n[9]),
      (e[t + 10] = n[10]),
      (e[t + 11] = n[11]),
      (e[t + 12] = n[12]),
      (e[t + 13] = n[13]),
      (e[t + 14] = n[14]),
      (e[t + 15] = n[15]),
      e
    );
  }
}
const ri = new D(),
  Vt = new He(),
  qh = new D(0, 0, 0),
  $h = new D(1, 1, 1),
  yn = new D(),
  hs = new D(),
  Pt = new D(),
  _o = new He(),
  xo = new nn();
class Ys {
  constructor(e = 0, t = 0, n = 0, i = Ys.DEFAULT_ORDER) {
    (this.isEuler = !0),
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._order = i);
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    (this._order = e), this._onChangeCallback();
  }
  set(e, t, n, i = this._order) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._order = i),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return (
      (this._x = e._x),
      (this._y = e._y),
      (this._z = e._z),
      (this._order = e._order),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const i = e.elements,
      r = i[0],
      a = i[4],
      o = i[8],
      l = i[1],
      c = i[5],
      h = i[9],
      u = i[2],
      d = i[6],
      m = i[10];
    switch (t) {
      case "XYZ":
        (this._y = Math.asin(mt(o, -1, 1))),
          Math.abs(o) < 0.9999999
            ? ((this._x = Math.atan2(-h, m)), (this._z = Math.atan2(-a, r)))
            : ((this._x = Math.atan2(d, c)), (this._z = 0));
        break;
      case "YXZ":
        (this._x = Math.asin(-mt(h, -1, 1))),
          Math.abs(h) < 0.9999999
            ? ((this._y = Math.atan2(o, m)), (this._z = Math.atan2(l, c)))
            : ((this._y = Math.atan2(-u, r)), (this._z = 0));
        break;
      case "ZXY":
        (this._x = Math.asin(mt(d, -1, 1))),
          Math.abs(d) < 0.9999999
            ? ((this._y = Math.atan2(-u, m)), (this._z = Math.atan2(-a, c)))
            : ((this._y = 0), (this._z = Math.atan2(l, r)));
        break;
      case "ZYX":
        (this._y = Math.asin(-mt(u, -1, 1))),
          Math.abs(u) < 0.9999999
            ? ((this._x = Math.atan2(d, m)), (this._z = Math.atan2(l, r)))
            : ((this._x = 0), (this._z = Math.atan2(-a, c)));
        break;
      case "YZX":
        (this._z = Math.asin(mt(l, -1, 1))),
          Math.abs(l) < 0.9999999
            ? ((this._x = Math.atan2(-h, c)), (this._y = Math.atan2(-u, r)))
            : ((this._x = 0), (this._y = Math.atan2(o, m)));
        break;
      case "XZY":
        (this._z = Math.asin(-mt(a, -1, 1))),
          Math.abs(a) < 0.9999999
            ? ((this._x = Math.atan2(d, c)), (this._y = Math.atan2(o, r)))
            : ((this._x = Math.atan2(-h, m)), (this._y = 0));
        break;
      default:
        console.warn(
          "THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " +
            t
        );
    }
    return (this._order = t), n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return (
      _o.makeRotationFromQuaternion(e), this.setFromRotationMatrix(_o, t, n)
    );
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return xo.setFromEuler(this), this.setFromQuaternion(xo, e);
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._order === this._order
    );
  }
  fromArray(e) {
    return (
      (this._x = e[0]),
      (this._y = e[1]),
      (this._z = e[2]),
      e[3] !== void 0 && (this._order = e[3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._order),
      e
    );
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
Ys.DEFAULT_ORDER = "XYZ";
class Yl {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = ((1 << e) | 0) >>> 0;
  }
  enable(e) {
    this.mask |= (1 << e) | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= (1 << e) | 0;
  }
  disable(e) {
    this.mask &= ~((1 << e) | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & ((1 << e) | 0)) !== 0;
  }
}
let Kh = 0;
const vo = new D(),
  ai = new nn(),
  cn = new He(),
  us = new D(),
  Hi = new D(),
  Zh = new D(),
  Jh = new nn(),
  Mo = new D(1, 0, 0),
  yo = new D(0, 1, 0),
  Eo = new D(0, 0, 1),
  Qh = { type: "added" },
  eu = { type: "removed" };
class tt extends Zn {
  constructor() {
    super(),
      (this.isObject3D = !0),
      Object.defineProperty(this, "id", { value: Kh++ }),
      (this.uuid = Yt()),
      (this.name = ""),
      (this.type = "Object3D"),
      (this.parent = null),
      (this.children = []),
      (this.up = tt.DEFAULT_UP.clone());
    const e = new D(),
      t = new Ys(),
      n = new nn(),
      i = new D(1, 1, 1);
    function r() {
      n.setFromEuler(t, !1);
    }
    function a() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(r),
      n._onChange(a),
      Object.defineProperties(this, {
        position: { configurable: !0, enumerable: !0, value: e },
        rotation: { configurable: !0, enumerable: !0, value: t },
        quaternion: { configurable: !0, enumerable: !0, value: n },
        scale: { configurable: !0, enumerable: !0, value: i },
        modelViewMatrix: { value: new He() },
        normalMatrix: { value: new Be() },
      }),
      (this.matrix = new He()),
      (this.matrixWorld = new He()),
      (this.matrixAutoUpdate = tt.DEFAULT_MATRIX_AUTO_UPDATE),
      (this.matrixWorldNeedsUpdate = !1),
      (this.matrixWorldAutoUpdate = tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE),
      (this.layers = new Yl()),
      (this.visible = !0),
      (this.castShadow = !1),
      (this.receiveShadow = !1),
      (this.frustumCulled = !0),
      (this.renderOrder = 0),
      (this.animations = []),
      (this.userData = {});
  }
  onBeforeRender() {}
  onAfterRender() {}
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      this.matrix.premultiply(e),
      this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return ai.setFromAxisAngle(e, t), this.quaternion.multiply(ai), this;
  }
  rotateOnWorldAxis(e, t) {
    return ai.setFromAxisAngle(e, t), this.quaternion.premultiply(ai), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(Mo, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(yo, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(Eo, e);
  }
  translateOnAxis(e, t) {
    return (
      vo.copy(e).applyQuaternion(this.quaternion),
      this.position.add(vo.multiplyScalar(t)),
      this
    );
  }
  translateX(e) {
    return this.translateOnAxis(Mo, e);
  }
  translateY(e) {
    return this.translateOnAxis(yo, e);
  }
  translateZ(e) {
    return this.translateOnAxis(Eo, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      e.applyMatrix4(cn.copy(this.matrixWorld).invert())
    );
  }
  lookAt(e, t, n) {
    e.isVector3 ? us.copy(e) : us.set(e, t, n);
    const i = this.parent;
    this.updateWorldMatrix(!0, !1),
      Hi.setFromMatrixPosition(this.matrixWorld),
      this.isCamera || this.isLight
        ? cn.lookAt(Hi, us, this.up)
        : cn.lookAt(us, Hi, this.up),
      this.quaternion.setFromRotationMatrix(cn),
      i &&
        (cn.extractRotation(i.matrixWorld),
        ai.setFromRotationMatrix(cn),
        this.quaternion.premultiply(ai.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
      return this;
    }
    return e === this
      ? (console.error(
          "THREE.Object3D.add: object can't be added as a child of itself.",
          e
        ),
        this)
      : (e && e.isObject3D
          ? (e.parent !== null && e.parent.remove(e),
            (e.parent = this),
            this.children.push(e),
            e.dispatchEvent(Qh))
          : console.error(
              "THREE.Object3D.add: object not an instance of THREE.Object3D.",
              e
            ),
        this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++) this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return (
      t !== -1 &&
        ((e.parent = null), this.children.splice(t, 1), e.dispatchEvent(eu)),
      this
    );
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      cn.copy(this.matrixWorld).invert(),
      e.parent !== null &&
        (e.parent.updateWorldMatrix(!0, !1), cn.multiply(e.parent.matrixWorld)),
      e.applyMatrix4(cn),
      this.add(e),
      e.updateWorldMatrix(!1, !0),
      this
    );
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, i = this.children.length; n < i; n++) {
      const a = this.children[n].getObjectByProperty(e, t);
      if (a !== void 0) return a;
    }
  }
  getObjectsByProperty(e, t) {
    let n = [];
    this[e] === t && n.push(this);
    for (let i = 0, r = this.children.length; i < r; i++) {
      const a = this.children[i].getObjectsByProperty(e, t);
      a.length > 0 && (n = n.concat(a));
    }
    return n;
  }
  getWorldPosition(e) {
    return (
      this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld)
    );
  }
  getWorldQuaternion(e) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Hi, e, Zh), e
    );
  }
  getWorldScale(e) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Hi, Jh, e), e
    );
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {}
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale),
      (this.matrixWorldNeedsUpdate = !0);
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      (this.matrixWorldNeedsUpdate || e) &&
        (this.parent === null
          ? this.matrixWorld.copy(this.matrix)
          : this.matrixWorld.multiplyMatrices(
              this.parent.matrixWorld,
              this.matrix
            ),
        (this.matrixWorldNeedsUpdate = !1),
        (e = !0));
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) {
      const r = t[n];
      (r.matrixWorldAutoUpdate === !0 || e === !0) && r.updateMatrixWorld(e);
    }
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (
      (e === !0 &&
        n !== null &&
        n.matrixWorldAutoUpdate === !0 &&
        n.updateWorldMatrix(!0, !1),
      this.matrixAutoUpdate && this.updateMatrix(),
      this.parent === null
        ? this.matrixWorld.copy(this.matrix)
        : this.matrixWorld.multiplyMatrices(
            this.parent.matrixWorld,
            this.matrix
          ),
      t === !0)
    ) {
      const i = this.children;
      for (let r = 0, a = i.length; r < a; r++) {
        const o = i[r];
        o.matrixWorldAutoUpdate === !0 && o.updateWorldMatrix(!1, !0);
      }
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string",
      n = {};
    t &&
      ((e = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {},
        skeletons: {},
        animations: {},
        nodes: {},
      }),
      (n.metadata = {
        version: 4.6,
        type: "Object",
        generator: "Object3D.toJSON",
      }));
    const i = {};
    (i.uuid = this.uuid),
      (i.type = this.type),
      this.name !== "" && (i.name = this.name),
      this.castShadow === !0 && (i.castShadow = !0),
      this.receiveShadow === !0 && (i.receiveShadow = !0),
      this.visible === !1 && (i.visible = !1),
      this.frustumCulled === !1 && (i.frustumCulled = !1),
      this.renderOrder !== 0 && (i.renderOrder = this.renderOrder),
      Object.keys(this.userData).length > 0 && (i.userData = this.userData),
      (i.layers = this.layers.mask),
      (i.matrix = this.matrix.toArray()),
      (i.up = this.up.toArray()),
      this.matrixAutoUpdate === !1 && (i.matrixAutoUpdate = !1),
      this.isInstancedMesh &&
        ((i.type = "InstancedMesh"),
        (i.count = this.count),
        (i.instanceMatrix = this.instanceMatrix.toJSON()),
        this.instanceColor !== null &&
          (i.instanceColor = this.instanceColor.toJSON()));
    function r(o, l) {
      return o[l.uuid] === void 0 && (o[l.uuid] = l.toJSON(e)), l.uuid;
    }
    if (this.isScene)
      this.background &&
        (this.background.isColor
          ? (i.background = this.background.toJSON())
          : this.background.isTexture &&
            (i.background = this.background.toJSON(e).uuid)),
        this.environment &&
          this.environment.isTexture &&
          this.environment.isRenderTargetTexture !== !0 &&
          (i.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = r(e.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const l = o.shapes;
        if (Array.isArray(l))
          for (let c = 0, h = l.length; c < h; c++) {
            const u = l[c];
            r(e.shapes, u);
          }
        else r(e.shapes, l);
      }
    }
    if (
      (this.isSkinnedMesh &&
        ((i.bindMode = this.bindMode),
        (i.bindMatrix = this.bindMatrix.toArray()),
        this.skeleton !== void 0 &&
          (r(e.skeletons, this.skeleton), (i.skeleton = this.skeleton.uuid))),
      this.material !== void 0)
    )
      if (Array.isArray(this.material)) {
        const o = [];
        for (let l = 0, c = this.material.length; l < c; l++)
          o.push(r(e.materials, this.material[l]));
        i.material = o;
      } else i.material = r(e.materials, this.material);
    if (this.children.length > 0) {
      i.children = [];
      for (let o = 0; o < this.children.length; o++)
        i.children.push(this.children[o].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      i.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const l = this.animations[o];
        i.animations.push(r(e.animations, l));
      }
    }
    if (t) {
      const o = a(e.geometries),
        l = a(e.materials),
        c = a(e.textures),
        h = a(e.images),
        u = a(e.shapes),
        d = a(e.skeletons),
        m = a(e.animations),
        g = a(e.nodes);
      o.length > 0 && (n.geometries = o),
        l.length > 0 && (n.materials = l),
        c.length > 0 && (n.textures = c),
        h.length > 0 && (n.images = h),
        u.length > 0 && (n.shapes = u),
        d.length > 0 && (n.skeletons = d),
        m.length > 0 && (n.animations = m),
        g.length > 0 && (n.nodes = g);
    }
    return (n.object = i), n;
    function a(o) {
      const l = [];
      for (const c in o) {
        const h = o[c];
        delete h.metadata, l.push(h);
      }
      return l;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (
      ((this.name = e.name),
      this.up.copy(e.up),
      this.position.copy(e.position),
      (this.rotation.order = e.rotation.order),
      this.quaternion.copy(e.quaternion),
      this.scale.copy(e.scale),
      this.matrix.copy(e.matrix),
      this.matrixWorld.copy(e.matrixWorld),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      (this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate),
      (this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate),
      (this.layers.mask = e.layers.mask),
      (this.visible = e.visible),
      (this.castShadow = e.castShadow),
      (this.receiveShadow = e.receiveShadow),
      (this.frustumCulled = e.frustumCulled),
      (this.renderOrder = e.renderOrder),
      (this.animations = e.animations.slice()),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      t === !0)
    )
      for (let n = 0; n < e.children.length; n++) {
        const i = e.children[n];
        this.add(i.clone());
      }
    return this;
  }
}
tt.DEFAULT_UP = new D(0, 1, 0);
tt.DEFAULT_MATRIX_AUTO_UPDATE = !0;
tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const Wt = new D(),
  hn = new D(),
  fr = new D(),
  un = new D(),
  oi = new D(),
  li = new D(),
  So = new D(),
  pr = new D(),
  mr = new D(),
  gr = new D();
let ds = !1;
class Xt {
  constructor(e = new D(), t = new D(), n = new D()) {
    (this.a = e), (this.b = t), (this.c = n);
  }
  static getNormal(e, t, n, i) {
    i.subVectors(n, t), Wt.subVectors(e, t), i.cross(Wt);
    const r = i.lengthSq();
    return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0);
  }
  static getBarycoord(e, t, n, i, r) {
    Wt.subVectors(i, t), hn.subVectors(n, t), fr.subVectors(e, t);
    const a = Wt.dot(Wt),
      o = Wt.dot(hn),
      l = Wt.dot(fr),
      c = hn.dot(hn),
      h = hn.dot(fr),
      u = a * c - o * o;
    if (u === 0) return r.set(-2, -1, -1);
    const d = 1 / u,
      m = (c * l - o * h) * d,
      g = (a * h - o * l) * d;
    return r.set(1 - m - g, g, m);
  }
  static containsPoint(e, t, n, i) {
    return (
      this.getBarycoord(e, t, n, i, un),
      un.x >= 0 && un.y >= 0 && un.x + un.y <= 1
    );
  }
  static getUV(e, t, n, i, r, a, o, l) {
    return (
      ds === !1 &&
        (console.warn(
          "THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."
        ),
        (ds = !0)),
      this.getInterpolation(e, t, n, i, r, a, o, l)
    );
  }
  static getInterpolation(e, t, n, i, r, a, o, l) {
    return (
      this.getBarycoord(e, t, n, i, un),
      l.setScalar(0),
      l.addScaledVector(r, un.x),
      l.addScaledVector(a, un.y),
      l.addScaledVector(o, un.z),
      l
    );
  }
  static isFrontFacing(e, t, n, i) {
    return Wt.subVectors(n, t), hn.subVectors(e, t), Wt.cross(hn).dot(i) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, i) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this;
  }
  setFromAttributeAndIndices(e, t, n, i) {
    return (
      this.a.fromBufferAttribute(e, t),
      this.b.fromBufferAttribute(e, n),
      this.c.fromBufferAttribute(e, i),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return (
      Wt.subVectors(this.c, this.b),
      hn.subVectors(this.a, this.b),
      Wt.cross(hn).length() * 0.5
    );
  }
  getMidpoint(e) {
    return e
      .addVectors(this.a, this.b)
      .add(this.c)
      .multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return Xt.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return Xt.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getUV(e, t, n, i, r) {
    return (
      ds === !1 &&
        (console.warn(
          "THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."
        ),
        (ds = !0)),
      Xt.getInterpolation(e, this.a, this.b, this.c, t, n, i, r)
    );
  }
  getInterpolation(e, t, n, i, r) {
    return Xt.getInterpolation(e, this.a, this.b, this.c, t, n, i, r);
  }
  containsPoint(e) {
    return Xt.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return Xt.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a,
      i = this.b,
      r = this.c;
    let a, o;
    oi.subVectors(i, n), li.subVectors(r, n), pr.subVectors(e, n);
    const l = oi.dot(pr),
      c = li.dot(pr);
    if (l <= 0 && c <= 0) return t.copy(n);
    mr.subVectors(e, i);
    const h = oi.dot(mr),
      u = li.dot(mr);
    if (h >= 0 && u <= h) return t.copy(i);
    const d = l * u - h * c;
    if (d <= 0 && l >= 0 && h <= 0)
      return (a = l / (l - h)), t.copy(n).addScaledVector(oi, a);
    gr.subVectors(e, r);
    const m = oi.dot(gr),
      g = li.dot(gr);
    if (g >= 0 && m <= g) return t.copy(r);
    const _ = m * c - l * g;
    if (_ <= 0 && c >= 0 && g <= 0)
      return (o = c / (c - g)), t.copy(n).addScaledVector(li, o);
    const p = h * g - m * u;
    if (p <= 0 && u - h >= 0 && m - g >= 0)
      return (
        So.subVectors(r, i),
        (o = (u - h) / (u - h + (m - g))),
        t.copy(i).addScaledVector(So, o)
      );
    const f = 1 / (p + _ + d);
    return (
      (a = _ * f),
      (o = d * f),
      t.copy(n).addScaledVector(oi, a).addScaledVector(li, o)
    );
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const jl = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  },
  En = { h: 0, s: 0, l: 0 },
  fs = { h: 0, s: 0, l: 0 };
function _r(s, e, t) {
  return (
    t < 0 && (t += 1),
    t > 1 && (t -= 1),
    t < 1 / 6
      ? s + (e - s) * 6 * t
      : t < 1 / 2
      ? e
      : t < 2 / 3
      ? s + (e - s) * 6 * (2 / 3 - t)
      : s
  );
}
class Ce {
  constructor(e, t, n) {
    return (
      (this.isColor = !0),
      (this.r = 1),
      (this.g = 1),
      (this.b = 1),
      this.set(e, t, n)
    );
  }
  set(e, t, n) {
    if (t === void 0 && n === void 0) {
      const i = e;
      i && i.isColor
        ? this.copy(i)
        : typeof i == "number"
        ? this.setHex(i)
        : typeof i == "string" && this.setStyle(i);
    } else this.setRGB(e, t, n);
    return this;
  }
  setScalar(e) {
    return (this.r = e), (this.g = e), (this.b = e), this;
  }
  setHex(e, t = et) {
    return (
      (e = Math.floor(e)),
      (this.r = ((e >> 16) & 255) / 255),
      (this.g = ((e >> 8) & 255) / 255),
      (this.b = (e & 255) / 255),
      Ye.toWorkingColorSpace(this, t),
      this
    );
  }
  setRGB(e, t, n, i = Ye.workingColorSpace) {
    return (
      (this.r = e),
      (this.g = t),
      (this.b = n),
      Ye.toWorkingColorSpace(this, i),
      this
    );
  }
  setHSL(e, t, n, i = Ye.workingColorSpace) {
    if (((e = ta(e, 1)), (t = mt(t, 0, 1)), (n = mt(n, 0, 1)), t === 0))
      this.r = this.g = this.b = n;
    else {
      const r = n <= 0.5 ? n * (1 + t) : n + t - n * t,
        a = 2 * n - r;
      (this.r = _r(a, r, e + 1 / 3)),
        (this.g = _r(a, r, e)),
        (this.b = _r(a, r, e - 1 / 3));
    }
    return Ye.toWorkingColorSpace(this, i), this;
  }
  setStyle(e, t = et) {
    function n(r) {
      r !== void 0 &&
        parseFloat(r) < 1 &&
        console.warn(
          "THREE.Color: Alpha component of " + e + " will be ignored."
        );
    }
    let i;
    if ((i = /^(\w+)\(([^\)]*)\)/.exec(e))) {
      let r;
      const a = i[1],
        o = i[2];
      switch (a) {
        case "rgb":
        case "rgba":
          if (
            (r =
              /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                o
              ))
          )
            return (
              n(r[4]),
              this.setRGB(
                Math.min(255, parseInt(r[1], 10)) / 255,
                Math.min(255, parseInt(r[2], 10)) / 255,
                Math.min(255, parseInt(r[3], 10)) / 255,
                t
              )
            );
          if (
            (r =
              /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                o
              ))
          )
            return (
              n(r[4]),
              this.setRGB(
                Math.min(100, parseInt(r[1], 10)) / 100,
                Math.min(100, parseInt(r[2], 10)) / 100,
                Math.min(100, parseInt(r[3], 10)) / 100,
                t
              )
            );
          break;
        case "hsl":
        case "hsla":
          if (
            (r =
              /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                o
              ))
          )
            return (
              n(r[4]),
              this.setHSL(
                parseFloat(r[1]) / 360,
                parseFloat(r[2]) / 100,
                parseFloat(r[3]) / 100,
                t
              )
            );
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e);
      }
    } else if ((i = /^\#([A-Fa-f\d]+)$/.exec(e))) {
      const r = i[1],
        a = r.length;
      if (a === 3)
        return this.setRGB(
          parseInt(r.charAt(0), 16) / 15,
          parseInt(r.charAt(1), 16) / 15,
          parseInt(r.charAt(2), 16) / 15,
          t
        );
      if (a === 6) return this.setHex(parseInt(r, 16), t);
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0) return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = et) {
    const n = jl[e.toLowerCase()];
    return (
      n !== void 0
        ? this.setHex(n, t)
        : console.warn("THREE.Color: Unknown color " + e),
      this
    );
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return (this.r = e.r), (this.g = e.g), (this.b = e.b), this;
  }
  copySRGBToLinear(e) {
    return (this.r = vi(e.r)), (this.g = vi(e.g)), (this.b = vi(e.b)), this;
  }
  copyLinearToSRGB(e) {
    return (this.r = rr(e.r)), (this.g = rr(e.g)), (this.b = rr(e.b)), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = et) {
    return (
      Ye.fromWorkingColorSpace(Mt.copy(this), e),
      Math.round(mt(Mt.r * 255, 0, 255)) * 65536 +
        Math.round(mt(Mt.g * 255, 0, 255)) * 256 +
        Math.round(mt(Mt.b * 255, 0, 255))
    );
  }
  getHexString(e = et) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = Ye.workingColorSpace) {
    Ye.fromWorkingColorSpace(Mt.copy(this), t);
    const n = Mt.r,
      i = Mt.g,
      r = Mt.b,
      a = Math.max(n, i, r),
      o = Math.min(n, i, r);
    let l, c;
    const h = (o + a) / 2;
    if (o === a) (l = 0), (c = 0);
    else {
      const u = a - o;
      switch (((c = h <= 0.5 ? u / (a + o) : u / (2 - a - o)), a)) {
        case n:
          l = (i - r) / u + (i < r ? 6 : 0);
          break;
        case i:
          l = (r - n) / u + 2;
          break;
        case r:
          l = (n - i) / u + 4;
          break;
      }
      l /= 6;
    }
    return (e.h = l), (e.s = c), (e.l = h), e;
  }
  getRGB(e, t = Ye.workingColorSpace) {
    return (
      Ye.fromWorkingColorSpace(Mt.copy(this), t),
      (e.r = Mt.r),
      (e.g = Mt.g),
      (e.b = Mt.b),
      e
    );
  }
  getStyle(e = et) {
    Ye.fromWorkingColorSpace(Mt.copy(this), e);
    const t = Mt.r,
      n = Mt.g,
      i = Mt.b;
    return e !== et
      ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`
      : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(
          i * 255
        )})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(En), this.setHSL(En.h + e, En.s + t, En.l + n);
  }
  add(e) {
    return (this.r += e.r), (this.g += e.g), (this.b += e.b), this;
  }
  addColors(e, t) {
    return (
      (this.r = e.r + t.r), (this.g = e.g + t.g), (this.b = e.b + t.b), this
    );
  }
  addScalar(e) {
    return (this.r += e), (this.g += e), (this.b += e), this;
  }
  sub(e) {
    return (
      (this.r = Math.max(0, this.r - e.r)),
      (this.g = Math.max(0, this.g - e.g)),
      (this.b = Math.max(0, this.b - e.b)),
      this
    );
  }
  multiply(e) {
    return (this.r *= e.r), (this.g *= e.g), (this.b *= e.b), this;
  }
  multiplyScalar(e) {
    return (this.r *= e), (this.g *= e), (this.b *= e), this;
  }
  lerp(e, t) {
    return (
      (this.r += (e.r - this.r) * t),
      (this.g += (e.g - this.g) * t),
      (this.b += (e.b - this.b) * t),
      this
    );
  }
  lerpColors(e, t, n) {
    return (
      (this.r = e.r + (t.r - e.r) * n),
      (this.g = e.g + (t.g - e.g) * n),
      (this.b = e.b + (t.b - e.b) * n),
      this
    );
  }
  lerpHSL(e, t) {
    this.getHSL(En), e.getHSL(fs);
    const n = ji(En.h, fs.h, t),
      i = ji(En.s, fs.s, t),
      r = ji(En.l, fs.l, t);
    return this.setHSL(n, i, r), this;
  }
  setFromVector3(e) {
    return (this.r = e.x), (this.g = e.y), (this.b = e.z), this;
  }
  applyMatrix3(e) {
    const t = this.r,
      n = this.g,
      i = this.b,
      r = e.elements;
    return (
      (this.r = r[0] * t + r[3] * n + r[6] * i),
      (this.g = r[1] * t + r[4] * n + r[7] * i),
      (this.b = r[2] * t + r[5] * n + r[8] * i),
      this
    );
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return (this.r = e[t]), (this.g = e[t + 1]), (this.b = e[t + 2]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.r), (e[t + 1] = this.g), (e[t + 2] = this.b), e;
  }
  fromBufferAttribute(e, t) {
    return (
      (this.r = e.getX(t)), (this.g = e.getY(t)), (this.b = e.getZ(t)), this
    );
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const Mt = new Ce();
Ce.NAMES = jl;
let tu = 0;
class en extends Zn {
  constructor() {
    super(),
      (this.isMaterial = !0),
      Object.defineProperty(this, "id", { value: tu++ }),
      (this.uuid = Yt()),
      (this.name = ""),
      (this.type = "Material"),
      (this.blending = xi),
      (this.side = gn),
      (this.vertexColors = !1),
      (this.opacity = 1),
      (this.transparent = !1),
      (this.alphaHash = !1),
      (this.blendSrc = Or),
      (this.blendDst = Br),
      (this.blendEquation = Gn),
      (this.blendSrcAlpha = null),
      (this.blendDstAlpha = null),
      (this.blendEquationAlpha = null),
      (this.blendColor = new Ce(0, 0, 0)),
      (this.blendAlpha = 0),
      (this.depthFunc = Fs),
      (this.depthTest = !0),
      (this.depthWrite = !0),
      (this.stencilWriteMask = 255),
      (this.stencilFunc = co),
      (this.stencilRef = 0),
      (this.stencilFuncMask = 255),
      (this.stencilFail = ei),
      (this.stencilZFail = ei),
      (this.stencilZPass = ei),
      (this.stencilWrite = !1),
      (this.clippingPlanes = null),
      (this.clipIntersection = !1),
      (this.clipShadows = !1),
      (this.shadowSide = null),
      (this.colorWrite = !0),
      (this.precision = null),
      (this.polygonOffset = !1),
      (this.polygonOffsetFactor = 0),
      (this.polygonOffsetUnits = 0),
      (this.dithering = !1),
      (this.alphaToCoverage = !1),
      (this.premultipliedAlpha = !1),
      (this.forceSinglePass = !1),
      (this.visible = !0),
      (this.toneMapped = !0),
      (this.userData = {}),
      (this.version = 0),
      (this._alphaTest = 0);
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, (this._alphaTest = e);
  }
  onBuild() {}
  onBeforeRender() {}
  onBeforeCompile() {}
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          console.warn(
            `THREE.Material: parameter '${t}' has value of undefined.`
          );
          continue;
        }
        const i = this[t];
        if (i === void 0) {
          console.warn(
            `THREE.Material: '${t}' is not a property of THREE.${this.type}.`
          );
          continue;
        }
        i && i.isColor
          ? i.set(n)
          : i && i.isVector3 && n && n.isVector3
          ? i.copy(n)
          : (this[t] = n);
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = { textures: {}, images: {} });
    const n = {
      metadata: {
        version: 4.6,
        type: "Material",
        generator: "Material.toJSON",
      },
    };
    (n.uuid = this.uuid),
      (n.type = this.type),
      this.name !== "" && (n.name = this.name),
      this.color && this.color.isColor && (n.color = this.color.getHex()),
      this.roughness !== void 0 && (n.roughness = this.roughness),
      this.metalness !== void 0 && (n.metalness = this.metalness),
      this.sheen !== void 0 && (n.sheen = this.sheen),
      this.sheenColor &&
        this.sheenColor.isColor &&
        (n.sheenColor = this.sheenColor.getHex()),
      this.sheenRoughness !== void 0 &&
        (n.sheenRoughness = this.sheenRoughness),
      this.emissive &&
        this.emissive.isColor &&
        (n.emissive = this.emissive.getHex()),
      this.emissiveIntensity &&
        this.emissiveIntensity !== 1 &&
        (n.emissiveIntensity = this.emissiveIntensity),
      this.specular &&
        this.specular.isColor &&
        (n.specular = this.specular.getHex()),
      this.specularIntensity !== void 0 &&
        (n.specularIntensity = this.specularIntensity),
      this.specularColor &&
        this.specularColor.isColor &&
        (n.specularColor = this.specularColor.getHex()),
      this.shininess !== void 0 && (n.shininess = this.shininess),
      this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat),
      this.clearcoatRoughness !== void 0 &&
        (n.clearcoatRoughness = this.clearcoatRoughness),
      this.clearcoatMap &&
        this.clearcoatMap.isTexture &&
        (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid),
      this.clearcoatRoughnessMap &&
        this.clearcoatRoughnessMap.isTexture &&
        (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid),
      this.clearcoatNormalMap &&
        this.clearcoatNormalMap.isTexture &&
        ((n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid),
        (n.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
      this.iridescence !== void 0 && (n.iridescence = this.iridescence),
      this.iridescenceIOR !== void 0 &&
        (n.iridescenceIOR = this.iridescenceIOR),
      this.iridescenceThicknessRange !== void 0 &&
        (n.iridescenceThicknessRange = this.iridescenceThicknessRange),
      this.iridescenceMap &&
        this.iridescenceMap.isTexture &&
        (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid),
      this.iridescenceThicknessMap &&
        this.iridescenceThicknessMap.isTexture &&
        (n.iridescenceThicknessMap =
          this.iridescenceThicknessMap.toJSON(e).uuid),
      this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy),
      this.anisotropyRotation !== void 0 &&
        (n.anisotropyRotation = this.anisotropyRotation),
      this.anisotropyMap &&
        this.anisotropyMap.isTexture &&
        (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid),
      this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid),
      this.matcap &&
        this.matcap.isTexture &&
        (n.matcap = this.matcap.toJSON(e).uuid),
      this.alphaMap &&
        this.alphaMap.isTexture &&
        (n.alphaMap = this.alphaMap.toJSON(e).uuid),
      this.lightMap &&
        this.lightMap.isTexture &&
        ((n.lightMap = this.lightMap.toJSON(e).uuid),
        (n.lightMapIntensity = this.lightMapIntensity)),
      this.aoMap &&
        this.aoMap.isTexture &&
        ((n.aoMap = this.aoMap.toJSON(e).uuid),
        (n.aoMapIntensity = this.aoMapIntensity)),
      this.bumpMap &&
        this.bumpMap.isTexture &&
        ((n.bumpMap = this.bumpMap.toJSON(e).uuid),
        (n.bumpScale = this.bumpScale)),
      this.normalMap &&
        this.normalMap.isTexture &&
        ((n.normalMap = this.normalMap.toJSON(e).uuid),
        (n.normalMapType = this.normalMapType),
        (n.normalScale = this.normalScale.toArray())),
      this.displacementMap &&
        this.displacementMap.isTexture &&
        ((n.displacementMap = this.displacementMap.toJSON(e).uuid),
        (n.displacementScale = this.displacementScale),
        (n.displacementBias = this.displacementBias)),
      this.roughnessMap &&
        this.roughnessMap.isTexture &&
        (n.roughnessMap = this.roughnessMap.toJSON(e).uuid),
      this.metalnessMap &&
        this.metalnessMap.isTexture &&
        (n.metalnessMap = this.metalnessMap.toJSON(e).uuid),
      this.emissiveMap &&
        this.emissiveMap.isTexture &&
        (n.emissiveMap = this.emissiveMap.toJSON(e).uuid),
      this.specularMap &&
        this.specularMap.isTexture &&
        (n.specularMap = this.specularMap.toJSON(e).uuid),
      this.specularIntensityMap &&
        this.specularIntensityMap.isTexture &&
        (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid),
      this.specularColorMap &&
        this.specularColorMap.isTexture &&
        (n.specularColorMap = this.specularColorMap.toJSON(e).uuid),
      this.envMap &&
        this.envMap.isTexture &&
        ((n.envMap = this.envMap.toJSON(e).uuid),
        this.combine !== void 0 && (n.combine = this.combine)),
      this.envMapIntensity !== void 0 &&
        (n.envMapIntensity = this.envMapIntensity),
      this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity),
      this.refractionRatio !== void 0 &&
        (n.refractionRatio = this.refractionRatio),
      this.gradientMap &&
        this.gradientMap.isTexture &&
        (n.gradientMap = this.gradientMap.toJSON(e).uuid),
      this.transmission !== void 0 && (n.transmission = this.transmission),
      this.transmissionMap &&
        this.transmissionMap.isTexture &&
        (n.transmissionMap = this.transmissionMap.toJSON(e).uuid),
      this.thickness !== void 0 && (n.thickness = this.thickness),
      this.thicknessMap &&
        this.thicknessMap.isTexture &&
        (n.thicknessMap = this.thicknessMap.toJSON(e).uuid),
      this.attenuationDistance !== void 0 &&
        this.attenuationDistance !== 1 / 0 &&
        (n.attenuationDistance = this.attenuationDistance),
      this.attenuationColor !== void 0 &&
        (n.attenuationColor = this.attenuationColor.getHex()),
      this.size !== void 0 && (n.size = this.size),
      this.shadowSide !== null && (n.shadowSide = this.shadowSide),
      this.sizeAttenuation !== void 0 &&
        (n.sizeAttenuation = this.sizeAttenuation),
      this.blending !== xi && (n.blending = this.blending),
      this.side !== gn && (n.side = this.side),
      this.vertexColors === !0 && (n.vertexColors = !0),
      this.opacity < 1 && (n.opacity = this.opacity),
      this.transparent === !0 && (n.transparent = !0),
      this.blendSrc !== Or && (n.blendSrc = this.blendSrc),
      this.blendDst !== Br && (n.blendDst = this.blendDst),
      this.blendEquation !== Gn && (n.blendEquation = this.blendEquation),
      this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha),
      this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha),
      this.blendEquationAlpha !== null &&
        (n.blendEquationAlpha = this.blendEquationAlpha),
      this.blendColor &&
        this.blendColor.isColor &&
        (n.blendColor = this.blendColor.getHex()),
      this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha),
      this.depthFunc !== Fs && (n.depthFunc = this.depthFunc),
      this.depthTest === !1 && (n.depthTest = this.depthTest),
      this.depthWrite === !1 && (n.depthWrite = this.depthWrite),
      this.colorWrite === !1 && (n.colorWrite = this.colorWrite),
      this.stencilWriteMask !== 255 &&
        (n.stencilWriteMask = this.stencilWriteMask),
      this.stencilFunc !== co && (n.stencilFunc = this.stencilFunc),
      this.stencilRef !== 0 && (n.stencilRef = this.stencilRef),
      this.stencilFuncMask !== 255 &&
        (n.stencilFuncMask = this.stencilFuncMask),
      this.stencilFail !== ei && (n.stencilFail = this.stencilFail),
      this.stencilZFail !== ei && (n.stencilZFail = this.stencilZFail),
      this.stencilZPass !== ei && (n.stencilZPass = this.stencilZPass),
      this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite),
      this.rotation !== void 0 &&
        this.rotation !== 0 &&
        (n.rotation = this.rotation),
      this.polygonOffset === !0 && (n.polygonOffset = !0),
      this.polygonOffsetFactor !== 0 &&
        (n.polygonOffsetFactor = this.polygonOffsetFactor),
      this.polygonOffsetUnits !== 0 &&
        (n.polygonOffsetUnits = this.polygonOffsetUnits),
      this.linewidth !== void 0 &&
        this.linewidth !== 1 &&
        (n.linewidth = this.linewidth),
      this.dashSize !== void 0 && (n.dashSize = this.dashSize),
      this.gapSize !== void 0 && (n.gapSize = this.gapSize),
      this.scale !== void 0 && (n.scale = this.scale),
      this.dithering === !0 && (n.dithering = !0),
      this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
      this.alphaHash === !0 && (n.alphaHash = !0),
      this.alphaToCoverage === !0 && (n.alphaToCoverage = !0),
      this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0),
      this.forceSinglePass === !0 && (n.forceSinglePass = !0),
      this.wireframe === !0 && (n.wireframe = !0),
      this.wireframeLinewidth > 1 &&
        (n.wireframeLinewidth = this.wireframeLinewidth),
      this.wireframeLinecap !== "round" &&
        (n.wireframeLinecap = this.wireframeLinecap),
      this.wireframeLinejoin !== "round" &&
        (n.wireframeLinejoin = this.wireframeLinejoin),
      this.flatShading === !0 && (n.flatShading = !0),
      this.visible === !1 && (n.visible = !1),
      this.toneMapped === !1 && (n.toneMapped = !1),
      this.fog === !1 && (n.fog = !1),
      Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function i(r) {
      const a = [];
      for (const o in r) {
        const l = r[o];
        delete l.metadata, a.push(l);
      }
      return a;
    }
    if (t) {
      const r = i(e.textures),
        a = i(e.images);
      r.length > 0 && (n.textures = r), a.length > 0 && (n.images = a);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.name = e.name),
      (this.blending = e.blending),
      (this.side = e.side),
      (this.vertexColors = e.vertexColors),
      (this.opacity = e.opacity),
      (this.transparent = e.transparent),
      (this.blendSrc = e.blendSrc),
      (this.blendDst = e.blendDst),
      (this.blendEquation = e.blendEquation),
      (this.blendSrcAlpha = e.blendSrcAlpha),
      (this.blendDstAlpha = e.blendDstAlpha),
      (this.blendEquationAlpha = e.blendEquationAlpha),
      this.blendColor.copy(e.blendColor),
      (this.blendAlpha = e.blendAlpha),
      (this.depthFunc = e.depthFunc),
      (this.depthTest = e.depthTest),
      (this.depthWrite = e.depthWrite),
      (this.stencilWriteMask = e.stencilWriteMask),
      (this.stencilFunc = e.stencilFunc),
      (this.stencilRef = e.stencilRef),
      (this.stencilFuncMask = e.stencilFuncMask),
      (this.stencilFail = e.stencilFail),
      (this.stencilZFail = e.stencilZFail),
      (this.stencilZPass = e.stencilZPass),
      (this.stencilWrite = e.stencilWrite);
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const i = t.length;
      n = new Array(i);
      for (let r = 0; r !== i; ++r) n[r] = t[r].clone();
    }
    return (
      (this.clippingPlanes = n),
      (this.clipIntersection = e.clipIntersection),
      (this.clipShadows = e.clipShadows),
      (this.shadowSide = e.shadowSide),
      (this.colorWrite = e.colorWrite),
      (this.precision = e.precision),
      (this.polygonOffset = e.polygonOffset),
      (this.polygonOffsetFactor = e.polygonOffsetFactor),
      (this.polygonOffsetUnits = e.polygonOffsetUnits),
      (this.dithering = e.dithering),
      (this.alphaTest = e.alphaTest),
      (this.alphaHash = e.alphaHash),
      (this.alphaToCoverage = e.alphaToCoverage),
      (this.premultipliedAlpha = e.premultipliedAlpha),
      (this.forceSinglePass = e.forceSinglePass),
      (this.visible = e.visible),
      (this.toneMapped = e.toneMapped),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
}
class wn extends en {
  constructor(e) {
    super(),
      (this.isMeshBasicMaterial = !0),
      (this.type = "MeshBasicMaterial"),
      (this.color = new Ce(16777215)),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.combine = Rl),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      (this.specularMap = e.specularMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      (this.combine = e.combine),
      (this.reflectivity = e.reflectivity),
      (this.refractionRatio = e.refractionRatio),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.fog = e.fog),
      this
    );
  }
}
const pn = nu();
function nu() {
  const s = new ArrayBuffer(4),
    e = new Float32Array(s),
    t = new Uint32Array(s),
    n = new Uint32Array(512),
    i = new Uint32Array(512);
  for (let l = 0; l < 256; ++l) {
    const c = l - 127;
    c < -27
      ? ((n[l] = 0), (n[l | 256] = 32768), (i[l] = 24), (i[l | 256] = 24))
      : c < -14
      ? ((n[l] = 1024 >> (-c - 14)),
        (n[l | 256] = (1024 >> (-c - 14)) | 32768),
        (i[l] = -c - 1),
        (i[l | 256] = -c - 1))
      : c <= 15
      ? ((n[l] = (c + 15) << 10),
        (n[l | 256] = ((c + 15) << 10) | 32768),
        (i[l] = 13),
        (i[l | 256] = 13))
      : c < 128
      ? ((n[l] = 31744), (n[l | 256] = 64512), (i[l] = 24), (i[l | 256] = 24))
      : ((n[l] = 31744), (n[l | 256] = 64512), (i[l] = 13), (i[l | 256] = 13));
  }
  const r = new Uint32Array(2048),
    a = new Uint32Array(64),
    o = new Uint32Array(64);
  for (let l = 1; l < 1024; ++l) {
    let c = l << 13,
      h = 0;
    for (; !(c & 8388608); ) (c <<= 1), (h -= 8388608);
    (c &= -8388609), (h += 947912704), (r[l] = c | h);
  }
  for (let l = 1024; l < 2048; ++l) r[l] = 939524096 + ((l - 1024) << 13);
  for (let l = 1; l < 31; ++l) a[l] = l << 23;
  (a[31] = 1199570944), (a[32] = 2147483648);
  for (let l = 33; l < 63; ++l) a[l] = 2147483648 + ((l - 32) << 23);
  a[63] = 3347054592;
  for (let l = 1; l < 64; ++l) l !== 32 && (o[l] = 1024);
  return {
    floatView: e,
    uint32View: t,
    baseTable: n,
    shiftTable: i,
    mantissaTable: r,
    exponentTable: a,
    offsetTable: o,
  };
}
function iu(s) {
  Math.abs(s) > 65504 &&
    console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),
    (s = mt(s, -65504, 65504)),
    (pn.floatView[0] = s);
  const e = pn.uint32View[0],
    t = (e >> 23) & 511;
  return pn.baseTable[t] + ((e & 8388607) >> pn.shiftTable[t]);
}
function su(s) {
  const e = s >> 10;
  return (
    (pn.uint32View[0] =
      pn.mantissaTable[pn.offsetTable[e] + (s & 1023)] + pn.exponentTable[e]),
    pn.floatView[0]
  );
}
const ps = { toHalfFloat: iu, fromHalfFloat: su },
  ot = new D(),
  ms = new Re();
class bt {
  constructor(e, t, n = !1) {
    if (Array.isArray(e))
      throw new TypeError(
        "THREE.BufferAttribute: array should be a Typed Array."
      );
    (this.isBufferAttribute = !0),
      (this.name = ""),
      (this.array = e),
      (this.itemSize = t),
      (this.count = e !== void 0 ? e.length / t : 0),
      (this.normalized = n),
      (this.usage = Gr),
      (this.updateRange = { offset: 0, count: -1 }),
      (this.gpuType = Ht),
      (this.version = 0);
  }
  onUploadCallback() {}
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return (this.usage = e), this;
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.array = new e.array.constructor(e.array)),
      (this.itemSize = e.itemSize),
      (this.count = e.count),
      (this.normalized = e.normalized),
      (this.usage = e.usage),
      (this.gpuType = e.gpuType),
      this
    );
  }
  copyAt(e, t, n) {
    (e *= this.itemSize), (n *= t.itemSize);
    for (let i = 0, r = this.itemSize; i < r; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        ms.fromBufferAttribute(this, t),
          ms.applyMatrix3(e),
          this.setXY(t, ms.x, ms.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        ot.fromBufferAttribute(this, t),
          ot.applyMatrix3(e),
          this.setXYZ(t, ot.x, ot.y, ot.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      ot.fromBufferAttribute(this, t),
        ot.applyMatrix4(e),
        this.setXYZ(t, ot.x, ot.y, ot.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      ot.fromBufferAttribute(this, t),
        ot.applyNormalMatrix(e),
        this.setXYZ(t, ot.x, ot.y, ot.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      ot.fromBufferAttribute(this, t),
        ot.transformDirection(e),
        this.setXYZ(t, ot.x, ot.y, ot.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.itemSize + t];
    return this.normalized && (n = Jt(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return (
      this.normalized && (n = qe(n, this.array)),
      (this.array[e * this.itemSize + t] = n),
      this
    );
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = Jt(t, this.array)), t;
  }
  setX(e, t) {
    return (
      this.normalized && (t = qe(t, this.array)),
      (this.array[e * this.itemSize] = t),
      this
    );
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = Jt(t, this.array)), t;
  }
  setY(e, t) {
    return (
      this.normalized && (t = qe(t, this.array)),
      (this.array[e * this.itemSize + 1] = t),
      this
    );
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = Jt(t, this.array)), t;
  }
  setZ(e, t) {
    return (
      this.normalized && (t = qe(t, this.array)),
      (this.array[e * this.itemSize + 2] = t),
      this
    );
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = Jt(t, this.array)), t;
  }
  setW(e, t) {
    return (
      this.normalized && (t = qe(t, this.array)),
      (this.array[e * this.itemSize + 3] = t),
      this
    );
  }
  setXY(e, t, n) {
    return (
      (e *= this.itemSize),
      this.normalized && ((t = qe(t, this.array)), (n = qe(n, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      this
    );
  }
  setXYZ(e, t, n, i) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((t = qe(t, this.array)),
        (n = qe(n, this.array)),
        (i = qe(i, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      (this.array[e + 2] = i),
      this
    );
  }
  setXYZW(e, t, n, i, r) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((t = qe(t, this.array)),
        (n = qe(n, this.array)),
        (i = qe(i, this.array)),
        (r = qe(r, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      (this.array[e + 2] = i),
      (this.array[e + 3] = r),
      this
    );
  }
  onUpload(e) {
    return (this.onUploadCallback = e), this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized,
    };
    return (
      this.name !== "" && (e.name = this.name),
      this.usage !== Gr && (e.usage = this.usage),
      (this.updateRange.offset !== 0 || this.updateRange.count !== -1) &&
        (e.updateRange = this.updateRange),
      e
    );
  }
}
class ql extends bt {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class $l extends bt {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class zt extends bt {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let ru = 0;
const Nt = new He(),
  xr = new tt(),
  ci = new D(),
  Dt = new _n(),
  zi = new _n(),
  ft = new D();
class jt extends Zn {
  constructor() {
    super(),
      (this.isBufferGeometry = !0),
      Object.defineProperty(this, "id", { value: ru++ }),
      (this.uuid = Yt()),
      (this.name = ""),
      (this.type = "BufferGeometry"),
      (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.morphTargetsRelative = !1),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null),
      (this.drawRange = { start: 0, count: 1 / 0 }),
      (this.userData = {});
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return (
      Array.isArray(e)
        ? (this.index = new (Gl(e) ? $l : ql)(e, 1))
        : (this.index = e),
      this
    );
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return (this.attributes[e] = t), this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({ start: e, count: t, materialIndex: n });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    (this.drawRange.start = e), (this.drawRange.count = t);
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), (t.needsUpdate = !0));
    const n = this.attributes.normal;
    if (n !== void 0) {
      const r = new Be().getNormalMatrix(e);
      n.applyNormalMatrix(r), (n.needsUpdate = !0);
    }
    const i = this.attributes.tangent;
    return (
      i !== void 0 && (i.transformDirection(e), (i.needsUpdate = !0)),
      this.boundingBox !== null && this.computeBoundingBox(),
      this.boundingSphere !== null && this.computeBoundingSphere(),
      this
    );
  }
  applyQuaternion(e) {
    return Nt.makeRotationFromQuaternion(e), this.applyMatrix4(Nt), this;
  }
  rotateX(e) {
    return Nt.makeRotationX(e), this.applyMatrix4(Nt), this;
  }
  rotateY(e) {
    return Nt.makeRotationY(e), this.applyMatrix4(Nt), this;
  }
  rotateZ(e) {
    return Nt.makeRotationZ(e), this.applyMatrix4(Nt), this;
  }
  translate(e, t, n) {
    return Nt.makeTranslation(e, t, n), this.applyMatrix4(Nt), this;
  }
  scale(e, t, n) {
    return Nt.makeScale(e, t, n), this.applyMatrix4(Nt), this;
  }
  lookAt(e) {
    return xr.lookAt(e), xr.updateMatrix(), this.applyMatrix4(xr.matrix), this;
  }
  center() {
    return (
      this.computeBoundingBox(),
      this.boundingBox.getCenter(ci).negate(),
      this.translate(ci.x, ci.y, ci.z),
      this
    );
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, i = e.length; n < i; n++) {
      const r = e[n];
      t.push(r.x, r.y, r.z || 0);
    }
    return this.setAttribute("position", new zt(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new _n());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error(
        'THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',
        this
      ),
        this.boundingBox.set(
          new D(-1 / 0, -1 / 0, -1 / 0),
          new D(1 / 0, 1 / 0, 1 / 0)
        );
      return;
    }
    if (e !== void 0) {
      if ((this.boundingBox.setFromBufferAttribute(e), t))
        for (let n = 0, i = t.length; n < i; n++) {
          const r = t[n];
          Dt.setFromBufferAttribute(r),
            this.morphTargetsRelative
              ? (ft.addVectors(this.boundingBox.min, Dt.min),
                this.boundingBox.expandByPoint(ft),
                ft.addVectors(this.boundingBox.max, Dt.max),
                this.boundingBox.expandByPoint(ft))
              : (this.boundingBox.expandByPoint(Dt.min),
                this.boundingBox.expandByPoint(Dt.max));
        }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) ||
      isNaN(this.boundingBox.min.y) ||
      isNaN(this.boundingBox.min.z)) &&
      console.error(
        'THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
        this
      );
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new sn());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error(
        'THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',
        this
      ),
        this.boundingSphere.set(new D(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if ((Dt.setFromBufferAttribute(e), t))
        for (let r = 0, a = t.length; r < a; r++) {
          const o = t[r];
          zi.setFromBufferAttribute(o),
            this.morphTargetsRelative
              ? (ft.addVectors(Dt.min, zi.min),
                Dt.expandByPoint(ft),
                ft.addVectors(Dt.max, zi.max),
                Dt.expandByPoint(ft))
              : (Dt.expandByPoint(zi.min), Dt.expandByPoint(zi.max));
        }
      Dt.getCenter(n);
      let i = 0;
      for (let r = 0, a = e.count; r < a; r++)
        ft.fromBufferAttribute(e, r),
          (i = Math.max(i, n.distanceToSquared(ft)));
      if (t)
        for (let r = 0, a = t.length; r < a; r++) {
          const o = t[r],
            l = this.morphTargetsRelative;
          for (let c = 0, h = o.count; c < h; c++)
            ft.fromBufferAttribute(o, c),
              l && (ci.fromBufferAttribute(e, c), ft.add(ci)),
              (i = Math.max(i, n.distanceToSquared(ft)));
        }
      (this.boundingSphere.radius = Math.sqrt(i)),
        isNaN(this.boundingSphere.radius) &&
          console.error(
            'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
            this
          );
    }
  }
  computeTangents() {
    const e = this.index,
      t = this.attributes;
    if (
      e === null ||
      t.position === void 0 ||
      t.normal === void 0 ||
      t.uv === void 0
    ) {
      console.error(
        "THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)"
      );
      return;
    }
    const n = e.array,
      i = t.position.array,
      r = t.normal.array,
      a = t.uv.array,
      o = i.length / 3;
    this.hasAttribute("tangent") === !1 &&
      this.setAttribute("tangent", new bt(new Float32Array(4 * o), 4));
    const l = this.getAttribute("tangent").array,
      c = [],
      h = [];
    for (let T = 0; T < o; T++) (c[T] = new D()), (h[T] = new D());
    const u = new D(),
      d = new D(),
      m = new D(),
      g = new Re(),
      _ = new Re(),
      p = new Re(),
      f = new D(),
      y = new D();
    function M(T, G, j) {
      u.fromArray(i, T * 3),
        d.fromArray(i, G * 3),
        m.fromArray(i, j * 3),
        g.fromArray(a, T * 2),
        _.fromArray(a, G * 2),
        p.fromArray(a, j * 2),
        d.sub(u),
        m.sub(u),
        _.sub(g),
        p.sub(g);
      const $ = 1 / (_.x * p.y - p.x * _.y);
      isFinite($) &&
        (f
          .copy(d)
          .multiplyScalar(p.y)
          .addScaledVector(m, -_.y)
          .multiplyScalar($),
        y
          .copy(m)
          .multiplyScalar(_.x)
          .addScaledVector(d, -p.x)
          .multiplyScalar($),
        c[T].add(f),
        c[G].add(f),
        c[j].add(f),
        h[T].add(y),
        h[G].add(y),
        h[j].add(y));
    }
    let S = this.groups;
    S.length === 0 && (S = [{ start: 0, count: n.length }]);
    for (let T = 0, G = S.length; T < G; ++T) {
      const j = S[T],
        $ = j.start,
        C = j.count;
      for (let F = $, V = $ + C; F < V; F += 3) M(n[F + 0], n[F + 1], n[F + 2]);
    }
    const b = new D(),
      L = new D(),
      w = new D(),
      I = new D();
    function v(T) {
      w.fromArray(r, T * 3), I.copy(w);
      const G = c[T];
      b.copy(G),
        b.sub(w.multiplyScalar(w.dot(G))).normalize(),
        L.crossVectors(I, G);
      const $ = L.dot(h[T]) < 0 ? -1 : 1;
      (l[T * 4] = b.x),
        (l[T * 4 + 1] = b.y),
        (l[T * 4 + 2] = b.z),
        (l[T * 4 + 3] = $);
    }
    for (let T = 0, G = S.length; T < G; ++T) {
      const j = S[T],
        $ = j.start,
        C = j.count;
      for (let F = $, V = $ + C; F < V; F += 3)
        v(n[F + 0]), v(n[F + 1]), v(n[F + 2]);
    }
  }
  computeVertexNormals() {
    const e = this.index,
      t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        (n = new bt(new Float32Array(t.count * 3), 3)),
          this.setAttribute("normal", n);
      else for (let d = 0, m = n.count; d < m; d++) n.setXYZ(d, 0, 0, 0);
      const i = new D(),
        r = new D(),
        a = new D(),
        o = new D(),
        l = new D(),
        c = new D(),
        h = new D(),
        u = new D();
      if (e)
        for (let d = 0, m = e.count; d < m; d += 3) {
          const g = e.getX(d + 0),
            _ = e.getX(d + 1),
            p = e.getX(d + 2);
          i.fromBufferAttribute(t, g),
            r.fromBufferAttribute(t, _),
            a.fromBufferAttribute(t, p),
            h.subVectors(a, r),
            u.subVectors(i, r),
            h.cross(u),
            o.fromBufferAttribute(n, g),
            l.fromBufferAttribute(n, _),
            c.fromBufferAttribute(n, p),
            o.add(h),
            l.add(h),
            c.add(h),
            n.setXYZ(g, o.x, o.y, o.z),
            n.setXYZ(_, l.x, l.y, l.z),
            n.setXYZ(p, c.x, c.y, c.z);
        }
      else
        for (let d = 0, m = t.count; d < m; d += 3)
          i.fromBufferAttribute(t, d + 0),
            r.fromBufferAttribute(t, d + 1),
            a.fromBufferAttribute(t, d + 2),
            h.subVectors(a, r),
            u.subVectors(i, r),
            h.cross(u),
            n.setXYZ(d + 0, h.x, h.y, h.z),
            n.setXYZ(d + 1, h.x, h.y, h.z),
            n.setXYZ(d + 2, h.x, h.y, h.z);
      this.normalizeNormals(), (n.needsUpdate = !0);
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      ft.fromBufferAttribute(e, t),
        ft.normalize(),
        e.setXYZ(t, ft.x, ft.y, ft.z);
  }
  toNonIndexed() {
    function e(o, l) {
      const c = o.array,
        h = o.itemSize,
        u = o.normalized,
        d = new c.constructor(l.length * h);
      let m = 0,
        g = 0;
      for (let _ = 0, p = l.length; _ < p; _++) {
        o.isInterleavedBufferAttribute
          ? (m = l[_] * o.data.stride + o.offset)
          : (m = l[_] * h);
        for (let f = 0; f < h; f++) d[g++] = c[m++];
      }
      return new bt(d, h, u);
    }
    if (this.index === null)
      return (
        console.warn(
          "THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."
        ),
        this
      );
    const t = new jt(),
      n = this.index.array,
      i = this.attributes;
    for (const o in i) {
      const l = i[o],
        c = e(l, n);
      t.setAttribute(o, c);
    }
    const r = this.morphAttributes;
    for (const o in r) {
      const l = [],
        c = r[o];
      for (let h = 0, u = c.length; h < u; h++) {
        const d = c[h],
          m = e(d, n);
        l.push(m);
      }
      t.morphAttributes[o] = l;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let o = 0, l = a.length; o < l; o++) {
      const c = a[o];
      t.addGroup(c.start, c.count, c.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.6,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON",
      },
    };
    if (
      ((e.uuid = this.uuid),
      (e.type = this.type),
      this.name !== "" && (e.name = this.name),
      Object.keys(this.userData).length > 0 && (e.userData = this.userData),
      this.parameters !== void 0)
    ) {
      const l = this.parameters;
      for (const c in l) l[c] !== void 0 && (e[c] = l[c]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null &&
      (e.data.index = {
        type: t.array.constructor.name,
        array: Array.prototype.slice.call(t.array),
      });
    const n = this.attributes;
    for (const l in n) {
      const c = n[l];
      e.data.attributes[l] = c.toJSON(e.data);
    }
    const i = {};
    let r = !1;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l],
        h = [];
      for (let u = 0, d = c.length; u < d; u++) {
        const m = c[u];
        h.push(m.toJSON(e.data));
      }
      h.length > 0 && ((i[l] = h), (r = !0));
    }
    r &&
      ((e.data.morphAttributes = i),
      (e.data.morphTargetsRelative = this.morphTargetsRelative));
    const a = this.groups;
    a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
    const o = this.boundingSphere;
    return (
      o !== null &&
        (e.data.boundingSphere = {
          center: o.center.toArray(),
          radius: o.radius,
        }),
      e
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null);
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone(t));
    const i = e.attributes;
    for (const c in i) {
      const h = i[c];
      this.setAttribute(c, h.clone(t));
    }
    const r = e.morphAttributes;
    for (const c in r) {
      const h = [],
        u = r[c];
      for (let d = 0, m = u.length; d < m; d++) h.push(u[d].clone(t));
      this.morphAttributes[c] = h;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const a = e.groups;
    for (let c = 0, h = a.length; c < h; c++) {
      const u = a[c];
      this.addGroup(u.start, u.count, u.materialIndex);
    }
    const o = e.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const l = e.boundingSphere;
    return (
      l !== null && (this.boundingSphere = l.clone()),
      (this.drawRange.start = e.drawRange.start),
      (this.drawRange.count = e.drawRange.count),
      (this.userData = e.userData),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const To = new He(),
  Bn = new Qi(),
  gs = new sn(),
  Ao = new D(),
  hi = new D(),
  ui = new D(),
  di = new D(),
  vr = new D(),
  _s = new D(),
  xs = new Re(),
  vs = new Re(),
  Ms = new Re(),
  bo = new D(),
  wo = new D(),
  Ro = new D(),
  ys = new D(),
  Es = new D();
class It extends tt {
  constructor(e = new jt(), t = new wn()) {
    super(),
      (this.isMesh = !0),
      (this.type = "Mesh"),
      (this.geometry = e),
      (this.material = t),
      this.updateMorphTargets();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.morphTargetInfluences !== void 0 &&
        (this.morphTargetInfluences = e.morphTargetInfluences.slice()),
      e.morphTargetDictionary !== void 0 &&
        (this.morphTargetDictionary = Object.assign(
          {},
          e.morphTargetDictionary
        )),
      (this.material = Array.isArray(e.material)
        ? e.material.slice()
        : e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes,
      n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let r = 0, a = i.length; r < a; r++) {
          const o = i[r].name || String(r);
          this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[o] = r);
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry,
      i = n.attributes.position,
      r = n.morphAttributes.position,
      a = n.morphTargetsRelative;
    t.fromBufferAttribute(i, e);
    const o = this.morphTargetInfluences;
    if (r && o) {
      _s.set(0, 0, 0);
      for (let l = 0, c = r.length; l < c; l++) {
        const h = o[l],
          u = r[l];
        h !== 0 &&
          (vr.fromBufferAttribute(u, e),
          a ? _s.addScaledVector(vr, h) : _s.addScaledVector(vr.sub(t), h));
      }
      t.add(_s);
    }
    return t;
  }
  raycast(e, t) {
    const n = this.geometry,
      i = this.material,
      r = this.matrixWorld;
    i !== void 0 &&
      (n.boundingSphere === null && n.computeBoundingSphere(),
      gs.copy(n.boundingSphere),
      gs.applyMatrix4(r),
      Bn.copy(e.ray).recast(e.near),
      !(
        gs.containsPoint(Bn.origin) === !1 &&
        (Bn.intersectSphere(gs, Ao) === null ||
          Bn.origin.distanceToSquared(Ao) > (e.far - e.near) ** 2)
      ) &&
        (To.copy(r).invert(),
        Bn.copy(e.ray).applyMatrix4(To),
        !(n.boundingBox !== null && Bn.intersectsBox(n.boundingBox) === !1) &&
          this._computeIntersections(e, t, Bn)));
  }
  _computeIntersections(e, t, n) {
    let i;
    const r = this.geometry,
      a = this.material,
      o = r.index,
      l = r.attributes.position,
      c = r.attributes.uv,
      h = r.attributes.uv1,
      u = r.attributes.normal,
      d = r.groups,
      m = r.drawRange;
    if (o !== null)
      if (Array.isArray(a))
        for (let g = 0, _ = d.length; g < _; g++) {
          const p = d[g],
            f = a[p.materialIndex],
            y = Math.max(p.start, m.start),
            M = Math.min(
              o.count,
              Math.min(p.start + p.count, m.start + m.count)
            );
          for (let S = y, b = M; S < b; S += 3) {
            const L = o.getX(S),
              w = o.getX(S + 1),
              I = o.getX(S + 2);
            (i = Ss(this, f, e, n, c, h, u, L, w, I)),
              i &&
                ((i.faceIndex = Math.floor(S / 3)),
                (i.face.materialIndex = p.materialIndex),
                t.push(i));
          }
        }
      else {
        const g = Math.max(0, m.start),
          _ = Math.min(o.count, m.start + m.count);
        for (let p = g, f = _; p < f; p += 3) {
          const y = o.getX(p),
            M = o.getX(p + 1),
            S = o.getX(p + 2);
          (i = Ss(this, a, e, n, c, h, u, y, M, S)),
            i && ((i.faceIndex = Math.floor(p / 3)), t.push(i));
        }
      }
    else if (l !== void 0)
      if (Array.isArray(a))
        for (let g = 0, _ = d.length; g < _; g++) {
          const p = d[g],
            f = a[p.materialIndex],
            y = Math.max(p.start, m.start),
            M = Math.min(
              l.count,
              Math.min(p.start + p.count, m.start + m.count)
            );
          for (let S = y, b = M; S < b; S += 3) {
            const L = S,
              w = S + 1,
              I = S + 2;
            (i = Ss(this, f, e, n, c, h, u, L, w, I)),
              i &&
                ((i.faceIndex = Math.floor(S / 3)),
                (i.face.materialIndex = p.materialIndex),
                t.push(i));
          }
        }
      else {
        const g = Math.max(0, m.start),
          _ = Math.min(l.count, m.start + m.count);
        for (let p = g, f = _; p < f; p += 3) {
          const y = p,
            M = p + 1,
            S = p + 2;
          (i = Ss(this, a, e, n, c, h, u, y, M, S)),
            i && ((i.faceIndex = Math.floor(p / 3)), t.push(i));
        }
      }
  }
}
function au(s, e, t, n, i, r, a, o) {
  let l;
  if (
    (e.side === Rt
      ? (l = n.intersectTriangle(a, r, i, !0, o))
      : (l = n.intersectTriangle(i, r, a, e.side === gn, o)),
    l === null)
  )
    return null;
  Es.copy(o), Es.applyMatrix4(s.matrixWorld);
  const c = t.ray.origin.distanceTo(Es);
  return c < t.near || c > t.far
    ? null
    : { distance: c, point: Es.clone(), object: s };
}
function Ss(s, e, t, n, i, r, a, o, l, c) {
  s.getVertexPosition(o, hi),
    s.getVertexPosition(l, ui),
    s.getVertexPosition(c, di);
  const h = au(s, e, t, n, hi, ui, di, ys);
  if (h) {
    i &&
      (xs.fromBufferAttribute(i, o),
      vs.fromBufferAttribute(i, l),
      Ms.fromBufferAttribute(i, c),
      (h.uv = Xt.getInterpolation(ys, hi, ui, di, xs, vs, Ms, new Re()))),
      r &&
        (xs.fromBufferAttribute(r, o),
        vs.fromBufferAttribute(r, l),
        Ms.fromBufferAttribute(r, c),
        (h.uv1 = Xt.getInterpolation(ys, hi, ui, di, xs, vs, Ms, new Re())),
        (h.uv2 = h.uv1)),
      a &&
        (bo.fromBufferAttribute(a, o),
        wo.fromBufferAttribute(a, l),
        Ro.fromBufferAttribute(a, c),
        (h.normal = Xt.getInterpolation(ys, hi, ui, di, bo, wo, Ro, new D())),
        h.normal.dot(n.direction) > 0 && h.normal.multiplyScalar(-1));
    const u = { a: o, b: l, c, normal: new D(), materialIndex: 0 };
    Xt.getNormal(hi, ui, di, u.normal), (h.face = u);
  }
  return h;
}
class es extends jt {
  constructor(e = 1, t = 1, n = 1, i = 1, r = 1, a = 1) {
    super(),
      (this.type = "BoxGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        depth: n,
        widthSegments: i,
        heightSegments: r,
        depthSegments: a,
      });
    const o = this;
    (i = Math.floor(i)), (r = Math.floor(r)), (a = Math.floor(a));
    const l = [],
      c = [],
      h = [],
      u = [];
    let d = 0,
      m = 0;
    g("z", "y", "x", -1, -1, n, t, e, a, r, 0),
      g("z", "y", "x", 1, -1, n, t, -e, a, r, 1),
      g("x", "z", "y", 1, 1, e, n, t, i, a, 2),
      g("x", "z", "y", 1, -1, e, n, -t, i, a, 3),
      g("x", "y", "z", 1, -1, e, t, n, i, r, 4),
      g("x", "y", "z", -1, -1, e, t, -n, i, r, 5),
      this.setIndex(l),
      this.setAttribute("position", new zt(c, 3)),
      this.setAttribute("normal", new zt(h, 3)),
      this.setAttribute("uv", new zt(u, 2));
    function g(_, p, f, y, M, S, b, L, w, I, v) {
      const T = S / w,
        G = b / I,
        j = S / 2,
        $ = b / 2,
        C = L / 2,
        F = w + 1,
        V = I + 1;
      let Y = 0,
        ee = 0;
      const Z = new D();
      for (let q = 0; q < V; q++) {
        const U = q * G - $;
        for (let H = 0; H < F; H++) {
          const ae = H * T - j;
          (Z[_] = ae * y),
            (Z[p] = U * M),
            (Z[f] = C),
            c.push(Z.x, Z.y, Z.z),
            (Z[_] = 0),
            (Z[p] = 0),
            (Z[f] = L > 0 ? 1 : -1),
            h.push(Z.x, Z.y, Z.z),
            u.push(H / w),
            u.push(1 - q / I),
            (Y += 1);
        }
      }
      for (let q = 0; q < I; q++)
        for (let U = 0; U < w; U++) {
          const H = d + U + F * q,
            ae = d + U + F * (q + 1),
            he = d + (U + 1) + F * (q + 1),
            fe = d + (U + 1) + F * q;
          l.push(H, ae, fe), l.push(ae, he, fe), (ee += 6);
        }
      o.addGroup(m, ee, v), (m += ee), (d += Y);
    }
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new es(
      e.width,
      e.height,
      e.depth,
      e.widthSegments,
      e.heightSegments,
      e.depthSegments
    );
  }
}
function wi(s) {
  const e = {};
  for (const t in s) {
    e[t] = {};
    for (const n in s[t]) {
      const i = s[t][n];
      i &&
      (i.isColor ||
        i.isMatrix3 ||
        i.isMatrix4 ||
        i.isVector2 ||
        i.isVector3 ||
        i.isVector4 ||
        i.isTexture ||
        i.isQuaternion)
        ? i.isRenderTargetTexture
          ? (console.warn(
              "UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."
            ),
            (e[t][n] = null))
          : (e[t][n] = i.clone())
        : Array.isArray(i)
        ? (e[t][n] = i.slice())
        : (e[t][n] = i);
    }
  }
  return e;
}
function Tt(s) {
  const e = {};
  for (let t = 0; t < s.length; t++) {
    const n = wi(s[t]);
    for (const i in n) e[i] = n[i];
  }
  return e;
}
function ou(s) {
  const e = [];
  for (let t = 0; t < s.length; t++) e.push(s[t].clone());
  return e;
}
function Kl(s) {
  return s.getRenderTarget() === null
    ? s.outputColorSpace
    : Ye.workingColorSpace;
}
const lu = { clone: wi, merge: Tt };
var cu = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,
  hu = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class $n extends en {
  constructor(e) {
    super(),
      (this.isShaderMaterial = !0),
      (this.type = "ShaderMaterial"),
      (this.defines = {}),
      (this.uniforms = {}),
      (this.uniformsGroups = []),
      (this.vertexShader = cu),
      (this.fragmentShader = hu),
      (this.linewidth = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.fog = !1),
      (this.lights = !1),
      (this.clipping = !1),
      (this.forceSinglePass = !0),
      (this.extensions = {
        derivatives: !1,
        fragDepth: !1,
        drawBuffers: !1,
        shaderTextureLOD: !1,
      }),
      (this.defaultAttributeValues = {
        color: [1, 1, 1],
        uv: [0, 0],
        uv1: [0, 0],
      }),
      (this.index0AttributeName = void 0),
      (this.uniformsNeedUpdate = !1),
      (this.glslVersion = null),
      e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.fragmentShader = e.fragmentShader),
      (this.vertexShader = e.vertexShader),
      (this.uniforms = wi(e.uniforms)),
      (this.uniformsGroups = ou(e.uniformsGroups)),
      (this.defines = Object.assign({}, e.defines)),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.fog = e.fog),
      (this.lights = e.lights),
      (this.clipping = e.clipping),
      (this.extensions = Object.assign({}, e.extensions)),
      (this.glslVersion = e.glslVersion),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    (t.glslVersion = this.glslVersion), (t.uniforms = {});
    for (const i in this.uniforms) {
      const a = this.uniforms[i].value;
      a && a.isTexture
        ? (t.uniforms[i] = { type: "t", value: a.toJSON(e).uuid })
        : a && a.isColor
        ? (t.uniforms[i] = { type: "c", value: a.getHex() })
        : a && a.isVector2
        ? (t.uniforms[i] = { type: "v2", value: a.toArray() })
        : a && a.isVector3
        ? (t.uniforms[i] = { type: "v3", value: a.toArray() })
        : a && a.isVector4
        ? (t.uniforms[i] = { type: "v4", value: a.toArray() })
        : a && a.isMatrix3
        ? (t.uniforms[i] = { type: "m3", value: a.toArray() })
        : a && a.isMatrix4
        ? (t.uniforms[i] = { type: "m4", value: a.toArray() })
        : (t.uniforms[i] = { value: a });
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines),
      (t.vertexShader = this.vertexShader),
      (t.fragmentShader = this.fragmentShader),
      (t.lights = this.lights),
      (t.clipping = this.clipping);
    const n = {};
    for (const i in this.extensions) this.extensions[i] === !0 && (n[i] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class Zl extends tt {
  constructor() {
    super(),
      (this.isCamera = !0),
      (this.type = "Camera"),
      (this.matrixWorldInverse = new He()),
      (this.projectionMatrix = new He()),
      (this.projectionMatrixInverse = new He()),
      (this.coordinateSystem = mn);
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      this.matrixWorldInverse.copy(e.matrixWorldInverse),
      this.projectionMatrix.copy(e.projectionMatrix),
      this.projectionMatrixInverse.copy(e.projectionMatrixInverse),
      (this.coordinateSystem = e.coordinateSystem),
      this
    );
  }
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class At extends Zl {
  constructor(e = 50, t = 1, n = 0.1, i = 2e3) {
    super(),
      (this.isPerspectiveCamera = !0),
      (this.type = "PerspectiveCamera"),
      (this.fov = e),
      (this.zoom = 1),
      (this.near = n),
      (this.far = i),
      (this.focus = 10),
      (this.aspect = t),
      (this.view = null),
      (this.filmGauge = 35),
      (this.filmOffset = 0),
      this.updateProjectionMatrix();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.fov = e.fov),
      (this.zoom = e.zoom),
      (this.near = e.near),
      (this.far = e.far),
      (this.focus = e.focus),
      (this.aspect = e.aspect),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      (this.filmGauge = e.filmGauge),
      (this.filmOffset = e.filmOffset),
      this
    );
  }
  setFocalLength(e) {
    const t = (0.5 * this.getFilmHeight()) / e;
    (this.fov = bi * 2 * Math.atan(t)), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(Yi * 0.5 * this.fov);
    return (0.5 * this.getFilmHeight()) / e;
  }
  getEffectiveFOV() {
    return bi * 2 * Math.atan(Math.tan(Yi * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  setViewOffset(e, t, n, i, r, a) {
    (this.aspect = e / t),
      this.view === null &&
        (this.view = {
          enabled: !0,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1,
        }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = n),
      (this.view.offsetY = i),
      (this.view.width = r),
      (this.view.height = a),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = (e * Math.tan(Yi * 0.5 * this.fov)) / this.zoom,
      n = 2 * t,
      i = this.aspect * n,
      r = -0.5 * i;
    const a = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = a.fullWidth,
        c = a.fullHeight;
      (r += (a.offsetX * i) / l),
        (t -= (a.offsetY * n) / c),
        (i *= a.width / l),
        (n *= a.height / c);
    }
    const o = this.filmOffset;
    o !== 0 && (r += (e * o) / this.getFilmWidth()),
      this.projectionMatrix.makePerspective(
        r,
        r + i,
        t,
        t - n,
        e,
        this.far,
        this.coordinateSystem
      ),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.fov = this.fov),
      (t.object.zoom = this.zoom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      (t.object.focus = this.focus),
      (t.object.aspect = this.aspect),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      (t.object.filmGauge = this.filmGauge),
      (t.object.filmOffset = this.filmOffset),
      t
    );
  }
}
const fi = -90,
  pi = 1;
class Jl extends tt {
  constructor(e, t, n) {
    super(),
      (this.type = "CubeCamera"),
      (this.renderTarget = n),
      (this.coordinateSystem = null),
      (this.activeMipmapLevel = 0);
    const i = new At(fi, pi, e, t);
    (i.layers = this.layers), this.add(i);
    const r = new At(fi, pi, e, t);
    (r.layers = this.layers), this.add(r);
    const a = new At(fi, pi, e, t);
    (a.layers = this.layers), this.add(a);
    const o = new At(fi, pi, e, t);
    (o.layers = this.layers), this.add(o);
    const l = new At(fi, pi, e, t);
    (l.layers = this.layers), this.add(l);
    const c = new At(fi, pi, e, t);
    (c.layers = this.layers), this.add(c);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem,
      t = this.children.concat(),
      [n, i, r, a, o, l] = t;
    for (const c of t) this.remove(c);
    if (e === mn)
      n.up.set(0, 1, 0),
        n.lookAt(1, 0, 0),
        i.up.set(0, 1, 0),
        i.lookAt(-1, 0, 0),
        r.up.set(0, 0, -1),
        r.lookAt(0, 1, 0),
        a.up.set(0, 0, 1),
        a.lookAt(0, -1, 0),
        o.up.set(0, 1, 0),
        o.lookAt(0, 0, 1),
        l.up.set(0, 1, 0),
        l.lookAt(0, 0, -1);
    else if (e === Gs)
      n.up.set(0, -1, 0),
        n.lookAt(-1, 0, 0),
        i.up.set(0, -1, 0),
        i.lookAt(1, 0, 0),
        r.up.set(0, 0, 1),
        r.lookAt(0, 1, 0),
        a.up.set(0, 0, -1),
        a.lookAt(0, -1, 0),
        o.up.set(0, -1, 0),
        o.lookAt(0, 0, 1),
        l.up.set(0, -1, 0),
        l.lookAt(0, 0, -1);
    else
      throw new Error(
        "THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " +
          e
      );
    for (const c of t) this.add(c), c.updateMatrixWorld();
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: i } = this;
    this.coordinateSystem !== e.coordinateSystem &&
      ((this.coordinateSystem = e.coordinateSystem),
      this.updateCoordinateSystem());
    const [r, a, o, l, c, h] = this.children,
      u = e.getRenderTarget(),
      d = e.getActiveCubeFace(),
      m = e.getActiveMipmapLevel(),
      g = e.xr.enabled;
    e.xr.enabled = !1;
    const _ = n.texture.generateMipmaps;
    (n.texture.generateMipmaps = !1),
      e.setRenderTarget(n, 0, i),
      e.render(t, r),
      e.setRenderTarget(n, 1, i),
      e.render(t, a),
      e.setRenderTarget(n, 2, i),
      e.render(t, o),
      e.setRenderTarget(n, 3, i),
      e.render(t, l),
      e.setRenderTarget(n, 4, i),
      e.render(t, c),
      (n.texture.generateMipmaps = _),
      e.setRenderTarget(n, 5, i),
      e.render(t, h),
      e.setRenderTarget(u, d, m),
      (e.xr.enabled = g),
      (n.texture.needsPMREMUpdate = !0);
  }
}
class na extends _t {
  constructor(e, t, n, i, r, a, o, l, c, h) {
    (e = e !== void 0 ? e : []),
      (t = t !== void 0 ? t : yi),
      super(e, t, n, i, r, a, o, l, c, h),
      (this.isCubeTexture = !0),
      (this.flipY = !1);
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class Ql extends qn {
  constructor(e = 1, t = {}) {
    super(e, e, t), (this.isWebGLCubeRenderTarget = !0);
    const n = { width: e, height: e, depth: 1 },
      i = [n, n, n, n, n, n];
    t.encoding !== void 0 &&
      (qi(
        "THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."
      ),
      (t.colorSpace = t.encoding === jn ? et : Bt)),
      (this.texture = new na(
        i,
        t.mapping,
        t.wrapS,
        t.wrapT,
        t.magFilter,
        t.minFilter,
        t.format,
        t.type,
        t.anisotropy,
        t.colorSpace
      )),
      (this.texture.isRenderTargetTexture = !0),
      (this.texture.generateMipmaps =
        t.generateMipmaps !== void 0 ? t.generateMipmaps : !1),
      (this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : lt);
  }
  fromEquirectangularTexture(e, t) {
    (this.texture.type = t.type),
      (this.texture.colorSpace = t.colorSpace),
      (this.texture.generateMipmaps = t.generateMipmaps),
      (this.texture.minFilter = t.minFilter),
      (this.texture.magFilter = t.magFilter);
    const n = {
        uniforms: { tEquirect: { value: null } },
        vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
        fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`,
      },
      i = new es(5, 5, 5),
      r = new $n({
        name: "CubemapFromEquirect",
        uniforms: wi(n.uniforms),
        vertexShader: n.vertexShader,
        fragmentShader: n.fragmentShader,
        side: Rt,
        blending: Rn,
      });
    r.uniforms.tEquirect.value = t;
    const a = new It(i, r),
      o = t.minFilter;
    return (
      t.minFilter === Pn && (t.minFilter = lt),
      new Jl(1, 10, this).update(e, a),
      (t.minFilter = o),
      a.geometry.dispose(),
      a.material.dispose(),
      this
    );
  }
  clear(e, t, n, i) {
    const r = e.getRenderTarget();
    for (let a = 0; a < 6; a++) e.setRenderTarget(this, a), e.clear(t, n, i);
    e.setRenderTarget(r);
  }
}
const Mr = new D(),
  uu = new D(),
  du = new Be();
class Tn {
  constructor(e = new D(1, 0, 0), t = 0) {
    (this.isPlane = !0), (this.normal = e), (this.constant = t);
  }
  set(e, t) {
    return this.normal.copy(e), (this.constant = t), this;
  }
  setComponents(e, t, n, i) {
    return this.normal.set(e, t, n), (this.constant = i), this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), (this.constant = -t.dot(this.normal)), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const i = Mr.subVectors(n, t).cross(uu.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(i, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), (this.constant = e.constant), this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), (this.constant *= e), this;
  }
  negate() {
    return (this.constant *= -1), this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t) {
    const n = e.delta(Mr),
      i = this.normal.dot(n);
    if (i === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const r = -(e.start.dot(this.normal) + this.constant) / i;
    return r < 0 || r > 1 ? null : t.copy(e.start).addScaledVector(n, r);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start),
      n = this.distanceToPoint(e.end);
    return (t < 0 && n > 0) || (n < 0 && t > 0);
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || du.getNormalMatrix(e),
      i = this.coplanarPoint(Mr).applyMatrix4(e),
      r = this.normal.applyMatrix3(n).normalize();
    return (this.constant = -i.dot(r)), this;
  }
  translate(e) {
    return (this.constant -= e.dot(this.normal)), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Hn = new sn(),
  Ts = new D();
class ia {
  constructor(
    e = new Tn(),
    t = new Tn(),
    n = new Tn(),
    i = new Tn(),
    r = new Tn(),
    a = new Tn()
  ) {
    this.planes = [e, t, n, i, r, a];
  }
  set(e, t, n, i, r, a) {
    const o = this.planes;
    return (
      o[0].copy(e),
      o[1].copy(t),
      o[2].copy(n),
      o[3].copy(i),
      o[4].copy(r),
      o[5].copy(a),
      this
    );
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e, t = mn) {
    const n = this.planes,
      i = e.elements,
      r = i[0],
      a = i[1],
      o = i[2],
      l = i[3],
      c = i[4],
      h = i[5],
      u = i[6],
      d = i[7],
      m = i[8],
      g = i[9],
      _ = i[10],
      p = i[11],
      f = i[12],
      y = i[13],
      M = i[14],
      S = i[15];
    if (
      (n[0].setComponents(l - r, d - c, p - m, S - f).normalize(),
      n[1].setComponents(l + r, d + c, p + m, S + f).normalize(),
      n[2].setComponents(l + a, d + h, p + g, S + y).normalize(),
      n[3].setComponents(l - a, d - h, p - g, S - y).normalize(),
      n[4].setComponents(l - o, d - u, p - _, S - M).normalize(),
      t === mn)
    )
      n[5].setComponents(l + o, d + u, p + _, S + M).normalize();
    else if (t === Gs) n[5].setComponents(o, u, _, M).normalize();
    else
      throw new Error(
        "THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " +
          t
      );
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      e.boundingSphere === null && e.computeBoundingSphere(),
        Hn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(),
        Hn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(Hn);
  }
  intersectsSprite(e) {
    return (
      Hn.center.set(0, 0, 0),
      (Hn.radius = 0.7071067811865476),
      Hn.applyMatrix4(e.matrixWorld),
      this.intersectsSphere(Hn)
    );
  }
  intersectsSphere(e) {
    const t = this.planes,
      n = e.center,
      i = -e.radius;
    for (let r = 0; r < 6; r++) if (t[r].distanceToPoint(n) < i) return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const i = t[n];
      if (
        ((Ts.x = i.normal.x > 0 ? e.max.x : e.min.x),
        (Ts.y = i.normal.y > 0 ? e.max.y : e.min.y),
        (Ts.z = i.normal.z > 0 ? e.max.z : e.min.z),
        i.distanceToPoint(Ts) < 0)
      )
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) if (t[n].distanceToPoint(e) < 0) return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function ec() {
  let s = null,
    e = !1,
    t = null,
    n = null;
  function i(r, a) {
    t(r, a), (n = s.requestAnimationFrame(i));
  }
  return {
    start: function () {
      e !== !0 && t !== null && ((n = s.requestAnimationFrame(i)), (e = !0));
    },
    stop: function () {
      s.cancelAnimationFrame(n), (e = !1);
    },
    setAnimationLoop: function (r) {
      t = r;
    },
    setContext: function (r) {
      s = r;
    },
  };
}
function fu(s, e) {
  const t = e.isWebGL2,
    n = new WeakMap();
  function i(c, h) {
    const u = c.array,
      d = c.usage,
      m = s.createBuffer();
    s.bindBuffer(h, m), s.bufferData(h, u, d), c.onUploadCallback();
    let g;
    if (u instanceof Float32Array) g = s.FLOAT;
    else if (u instanceof Uint16Array)
      if (c.isFloat16BufferAttribute)
        if (t) g = s.HALF_FLOAT;
        else
          throw new Error(
            "THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."
          );
      else g = s.UNSIGNED_SHORT;
    else if (u instanceof Int16Array) g = s.SHORT;
    else if (u instanceof Uint32Array) g = s.UNSIGNED_INT;
    else if (u instanceof Int32Array) g = s.INT;
    else if (u instanceof Int8Array) g = s.BYTE;
    else if (u instanceof Uint8Array) g = s.UNSIGNED_BYTE;
    else if (u instanceof Uint8ClampedArray) g = s.UNSIGNED_BYTE;
    else
      throw new Error(
        "THREE.WebGLAttributes: Unsupported buffer data format: " + u
      );
    return {
      buffer: m,
      type: g,
      bytesPerElement: u.BYTES_PER_ELEMENT,
      version: c.version,
    };
  }
  function r(c, h, u) {
    const d = h.array,
      m = h.updateRange;
    s.bindBuffer(u, c),
      m.count === -1
        ? s.bufferSubData(u, 0, d)
        : (t
            ? s.bufferSubData(
                u,
                m.offset * d.BYTES_PER_ELEMENT,
                d,
                m.offset,
                m.count
              )
            : s.bufferSubData(
                u,
                m.offset * d.BYTES_PER_ELEMENT,
                d.subarray(m.offset, m.offset + m.count)
              ),
          (m.count = -1)),
      h.onUploadCallback();
  }
  function a(c) {
    return c.isInterleavedBufferAttribute && (c = c.data), n.get(c);
  }
  function o(c) {
    c.isInterleavedBufferAttribute && (c = c.data);
    const h = n.get(c);
    h && (s.deleteBuffer(h.buffer), n.delete(c));
  }
  function l(c, h) {
    if (c.isGLBufferAttribute) {
      const d = n.get(c);
      (!d || d.version < c.version) &&
        n.set(c, {
          buffer: c.buffer,
          type: c.type,
          bytesPerElement: c.elementSize,
          version: c.version,
        });
      return;
    }
    c.isInterleavedBufferAttribute && (c = c.data);
    const u = n.get(c);
    u === void 0
      ? n.set(c, i(c, h))
      : u.version < c.version && (r(u.buffer, c, h), (u.version = c.version));
  }
  return { get: a, remove: o, update: l };
}
class sa extends jt {
  constructor(e = 1, t = 1, n = 1, i = 1) {
    super(),
      (this.type = "PlaneGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        widthSegments: n,
        heightSegments: i,
      });
    const r = e / 2,
      a = t / 2,
      o = Math.floor(n),
      l = Math.floor(i),
      c = o + 1,
      h = l + 1,
      u = e / o,
      d = t / l,
      m = [],
      g = [],
      _ = [],
      p = [];
    for (let f = 0; f < h; f++) {
      const y = f * d - a;
      for (let M = 0; M < c; M++) {
        const S = M * u - r;
        g.push(S, -y, 0), _.push(0, 0, 1), p.push(M / o), p.push(1 - f / l);
      }
    }
    for (let f = 0; f < l; f++)
      for (let y = 0; y < o; y++) {
        const M = y + c * f,
          S = y + c * (f + 1),
          b = y + 1 + c * (f + 1),
          L = y + 1 + c * f;
        m.push(M, S, L), m.push(S, b, L);
      }
    this.setIndex(m),
      this.setAttribute("position", new zt(g, 3)),
      this.setAttribute("normal", new zt(_, 3)),
      this.setAttribute("uv", new zt(p, 2));
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new sa(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var pu = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,
  mu = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,
  gu = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,
  _u = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  xu = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,
  vu = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,
  Mu = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,
  yu = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,
  Eu = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,
  Su = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,
  Tu = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,
  Au = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,
  bu = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,
  wu = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,
  Ru = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,
  Cu = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,
  Lu = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,
  Pu = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,
  Du = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,
  Iu = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,
  Uu = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,
  Nu = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,
  Fu = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,
  Ou = `vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,
  Bu = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,
  Hu = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,
  zu = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,
  ku = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,
  Gu = "gl_FragColor = linearToOutputTexel( gl_FragColor );",
  Vu = `
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,
  Wu = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,
  Xu = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,
  Yu = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,
  ju = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,
  qu = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,
  $u = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,
  Ku = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`,
  Zu = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,
  Ju = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,
  Qu = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,
  ed = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,
  td = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,
  nd = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,
  id = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,
  sd = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,
  rd = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,
  ad = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,
  od = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,
  ld = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,
  cd = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,
  hd = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,
  ud = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,
  dd = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,
  fd = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,
  pd = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,
  md = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,
  gd = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  _d = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,
  xd = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,
  vd = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,
  Md = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`,
  yd = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,
  Ed = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  Sd = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,
  Td = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,
  Ad = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,
  bd = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,
  wd = `#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,
  Rd = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,
  Cd = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,
  Ld = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,
  Pd = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  Dd = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  Id = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,
  Ud = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,
  Nd = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,
  Fd = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,
  Od = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,
  Bd = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,
  Hd = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,
  zd = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,
  kd = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,
  Gd = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,
  Vd = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,
  Wd = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,
  Xd = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,
  Yd = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,
  jd = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,
  qd = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,
  $d = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,
  Kd = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,
  Zd = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,
  Jd = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,
  Qd = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,
  ef = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,
  tf = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,
  nf = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,
  sf = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,
  rf = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,
  af = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,
  of = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,
  lf = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,
  cf = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,
  hf = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,
  uf = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const df = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,
  ff = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  pf = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  mf = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  gf = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  _f = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  xf = `#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,
  vf = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,
  Mf = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,
  yf = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,
  Ef = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,
  Sf = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  Tf = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  Af = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  bf = `#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,
  wf = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Rf = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  Cf = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Lf = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,
  Pf = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Df = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,
  If = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,
  Uf = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  Nf = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Ff = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,
  Of = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Bf = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  Hf = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  zf = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,
  kf = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  Gf = `#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  Vf = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,
  Wf = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  Xf = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,
  Fe = {
    alphahash_fragment: pu,
    alphahash_pars_fragment: mu,
    alphamap_fragment: gu,
    alphamap_pars_fragment: _u,
    alphatest_fragment: xu,
    alphatest_pars_fragment: vu,
    aomap_fragment: Mu,
    aomap_pars_fragment: yu,
    begin_vertex: Eu,
    beginnormal_vertex: Su,
    bsdfs: Tu,
    iridescence_fragment: Au,
    bumpmap_pars_fragment: bu,
    clipping_planes_fragment: wu,
    clipping_planes_pars_fragment: Ru,
    clipping_planes_pars_vertex: Cu,
    clipping_planes_vertex: Lu,
    color_fragment: Pu,
    color_pars_fragment: Du,
    color_pars_vertex: Iu,
    color_vertex: Uu,
    common: Nu,
    cube_uv_reflection_fragment: Fu,
    defaultnormal_vertex: Ou,
    displacementmap_pars_vertex: Bu,
    displacementmap_vertex: Hu,
    emissivemap_fragment: zu,
    emissivemap_pars_fragment: ku,
    colorspace_fragment: Gu,
    colorspace_pars_fragment: Vu,
    envmap_fragment: Wu,
    envmap_common_pars_fragment: Xu,
    envmap_pars_fragment: Yu,
    envmap_pars_vertex: ju,
    envmap_physical_pars_fragment: rd,
    envmap_vertex: qu,
    fog_vertex: $u,
    fog_pars_vertex: Ku,
    fog_fragment: Zu,
    fog_pars_fragment: Ju,
    gradientmap_pars_fragment: Qu,
    lightmap_fragment: ed,
    lightmap_pars_fragment: td,
    lights_lambert_fragment: nd,
    lights_lambert_pars_fragment: id,
    lights_pars_begin: sd,
    lights_toon_fragment: ad,
    lights_toon_pars_fragment: od,
    lights_phong_fragment: ld,
    lights_phong_pars_fragment: cd,
    lights_physical_fragment: hd,
    lights_physical_pars_fragment: ud,
    lights_fragment_begin: dd,
    lights_fragment_maps: fd,
    lights_fragment_end: pd,
    logdepthbuf_fragment: md,
    logdepthbuf_pars_fragment: gd,
    logdepthbuf_pars_vertex: _d,
    logdepthbuf_vertex: xd,
    map_fragment: vd,
    map_pars_fragment: Md,
    map_particle_fragment: yd,
    map_particle_pars_fragment: Ed,
    metalnessmap_fragment: Sd,
    metalnessmap_pars_fragment: Td,
    morphcolor_vertex: Ad,
    morphnormal_vertex: bd,
    morphtarget_pars_vertex: wd,
    morphtarget_vertex: Rd,
    normal_fragment_begin: Cd,
    normal_fragment_maps: Ld,
    normal_pars_fragment: Pd,
    normal_pars_vertex: Dd,
    normal_vertex: Id,
    normalmap_pars_fragment: Ud,
    clearcoat_normal_fragment_begin: Nd,
    clearcoat_normal_fragment_maps: Fd,
    clearcoat_pars_fragment: Od,
    iridescence_pars_fragment: Bd,
    opaque_fragment: Hd,
    packing: zd,
    premultiplied_alpha_fragment: kd,
    project_vertex: Gd,
    dithering_fragment: Vd,
    dithering_pars_fragment: Wd,
    roughnessmap_fragment: Xd,
    roughnessmap_pars_fragment: Yd,
    shadowmap_pars_fragment: jd,
    shadowmap_pars_vertex: qd,
    shadowmap_vertex: $d,
    shadowmask_pars_fragment: Kd,
    skinbase_vertex: Zd,
    skinning_pars_vertex: Jd,
    skinning_vertex: Qd,
    skinnormal_vertex: ef,
    specularmap_fragment: tf,
    specularmap_pars_fragment: nf,
    tonemapping_fragment: sf,
    tonemapping_pars_fragment: rf,
    transmission_fragment: af,
    transmission_pars_fragment: of,
    uv_pars_fragment: lf,
    uv_pars_vertex: cf,
    uv_vertex: hf,
    worldpos_vertex: uf,
    background_vert: df,
    background_frag: ff,
    backgroundCube_vert: pf,
    backgroundCube_frag: mf,
    cube_vert: gf,
    cube_frag: _f,
    depth_vert: xf,
    depth_frag: vf,
    distanceRGBA_vert: Mf,
    distanceRGBA_frag: yf,
    equirect_vert: Ef,
    equirect_frag: Sf,
    linedashed_vert: Tf,
    linedashed_frag: Af,
    meshbasic_vert: bf,
    meshbasic_frag: wf,
    meshlambert_vert: Rf,
    meshlambert_frag: Cf,
    meshmatcap_vert: Lf,
    meshmatcap_frag: Pf,
    meshnormal_vert: Df,
    meshnormal_frag: If,
    meshphong_vert: Uf,
    meshphong_frag: Nf,
    meshphysical_vert: Ff,
    meshphysical_frag: Of,
    meshtoon_vert: Bf,
    meshtoon_frag: Hf,
    points_vert: zf,
    points_frag: kf,
    shadow_vert: Gf,
    shadow_frag: Vf,
    sprite_vert: Wf,
    sprite_frag: Xf,
  },
  le = {
    common: {
      diffuse: { value: new Ce(16777215) },
      opacity: { value: 1 },
      map: { value: null },
      mapTransform: { value: new Be() },
      alphaMap: { value: null },
      alphaMapTransform: { value: new Be() },
      alphaTest: { value: 0 },
    },
    specularmap: {
      specularMap: { value: null },
      specularMapTransform: { value: new Be() },
    },
    envmap: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      reflectivity: { value: 1 },
      ior: { value: 1.5 },
      refractionRatio: { value: 0.98 },
    },
    aomap: {
      aoMap: { value: null },
      aoMapIntensity: { value: 1 },
      aoMapTransform: { value: new Be() },
    },
    lightmap: {
      lightMap: { value: null },
      lightMapIntensity: { value: 1 },
      lightMapTransform: { value: new Be() },
    },
    bumpmap: {
      bumpMap: { value: null },
      bumpMapTransform: { value: new Be() },
      bumpScale: { value: 1 },
    },
    normalmap: {
      normalMap: { value: null },
      normalMapTransform: { value: new Be() },
      normalScale: { value: new Re(1, 1) },
    },
    displacementmap: {
      displacementMap: { value: null },
      displacementMapTransform: { value: new Be() },
      displacementScale: { value: 1 },
      displacementBias: { value: 0 },
    },
    emissivemap: {
      emissiveMap: { value: null },
      emissiveMapTransform: { value: new Be() },
    },
    metalnessmap: {
      metalnessMap: { value: null },
      metalnessMapTransform: { value: new Be() },
    },
    roughnessmap: {
      roughnessMap: { value: null },
      roughnessMapTransform: { value: new Be() },
    },
    gradientmap: { gradientMap: { value: null } },
    fog: {
      fogDensity: { value: 25e-5 },
      fogNear: { value: 1 },
      fogFar: { value: 2e3 },
      fogColor: { value: new Ce(16777215) },
    },
    lights: {
      ambientLightColor: { value: [] },
      lightProbe: { value: [] },
      directionalLights: {
        value: [],
        properties: { direction: {}, color: {} },
      },
      directionalLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      directionalShadowMap: { value: [] },
      directionalShadowMatrix: { value: [] },
      spotLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          direction: {},
          distance: {},
          coneCos: {},
          penumbraCos: {},
          decay: {},
        },
      },
      spotLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      spotLightMap: { value: [] },
      spotShadowMap: { value: [] },
      spotLightMatrix: { value: [] },
      pointLights: {
        value: [],
        properties: { color: {}, position: {}, decay: {}, distance: {} },
      },
      pointLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
          shadowCameraNear: {},
          shadowCameraFar: {},
        },
      },
      pointShadowMap: { value: [] },
      pointShadowMatrix: { value: [] },
      hemisphereLights: {
        value: [],
        properties: { direction: {}, skyColor: {}, groundColor: {} },
      },
      rectAreaLights: {
        value: [],
        properties: { color: {}, position: {}, width: {}, height: {} },
      },
      ltc_1: { value: null },
      ltc_2: { value: null },
    },
    points: {
      diffuse: { value: new Ce(16777215) },
      opacity: { value: 1 },
      size: { value: 1 },
      scale: { value: 1 },
      map: { value: null },
      alphaMap: { value: null },
      alphaMapTransform: { value: new Be() },
      alphaTest: { value: 0 },
      uvTransform: { value: new Be() },
    },
    sprite: {
      diffuse: { value: new Ce(16777215) },
      opacity: { value: 1 },
      center: { value: new Re(0.5, 0.5) },
      rotation: { value: 0 },
      map: { value: null },
      mapTransform: { value: new Be() },
      alphaMap: { value: null },
      alphaMapTransform: { value: new Be() },
      alphaTest: { value: 0 },
    },
  },
  $t = {
    basic: {
      uniforms: Tt([
        le.common,
        le.specularmap,
        le.envmap,
        le.aomap,
        le.lightmap,
        le.fog,
      ]),
      vertexShader: Fe.meshbasic_vert,
      fragmentShader: Fe.meshbasic_frag,
    },
    lambert: {
      uniforms: Tt([
        le.common,
        le.specularmap,
        le.envmap,
        le.aomap,
        le.lightmap,
        le.emissivemap,
        le.bumpmap,
        le.normalmap,
        le.displacementmap,
        le.fog,
        le.lights,
        { emissive: { value: new Ce(0) } },
      ]),
      vertexShader: Fe.meshlambert_vert,
      fragmentShader: Fe.meshlambert_frag,
    },
    phong: {
      uniforms: Tt([
        le.common,
        le.specularmap,
        le.envmap,
        le.aomap,
        le.lightmap,
        le.emissivemap,
        le.bumpmap,
        le.normalmap,
        le.displacementmap,
        le.fog,
        le.lights,
        {
          emissive: { value: new Ce(0) },
          specular: { value: new Ce(1118481) },
          shininess: { value: 30 },
        },
      ]),
      vertexShader: Fe.meshphong_vert,
      fragmentShader: Fe.meshphong_frag,
    },
    standard: {
      uniforms: Tt([
        le.common,
        le.envmap,
        le.aomap,
        le.lightmap,
        le.emissivemap,
        le.bumpmap,
        le.normalmap,
        le.displacementmap,
        le.roughnessmap,
        le.metalnessmap,
        le.fog,
        le.lights,
        {
          emissive: { value: new Ce(0) },
          roughness: { value: 1 },
          metalness: { value: 0 },
          envMapIntensity: { value: 1 },
        },
      ]),
      vertexShader: Fe.meshphysical_vert,
      fragmentShader: Fe.meshphysical_frag,
    },
    toon: {
      uniforms: Tt([
        le.common,
        le.aomap,
        le.lightmap,
        le.emissivemap,
        le.bumpmap,
        le.normalmap,
        le.displacementmap,
        le.gradientmap,
        le.fog,
        le.lights,
        { emissive: { value: new Ce(0) } },
      ]),
      vertexShader: Fe.meshtoon_vert,
      fragmentShader: Fe.meshtoon_frag,
    },
    matcap: {
      uniforms: Tt([
        le.common,
        le.bumpmap,
        le.normalmap,
        le.displacementmap,
        le.fog,
        { matcap: { value: null } },
      ]),
      vertexShader: Fe.meshmatcap_vert,
      fragmentShader: Fe.meshmatcap_frag,
    },
    points: {
      uniforms: Tt([le.points, le.fog]),
      vertexShader: Fe.points_vert,
      fragmentShader: Fe.points_frag,
    },
    dashed: {
      uniforms: Tt([
        le.common,
        le.fog,
        {
          scale: { value: 1 },
          dashSize: { value: 1 },
          totalSize: { value: 2 },
        },
      ]),
      vertexShader: Fe.linedashed_vert,
      fragmentShader: Fe.linedashed_frag,
    },
    depth: {
      uniforms: Tt([le.common, le.displacementmap]),
      vertexShader: Fe.depth_vert,
      fragmentShader: Fe.depth_frag,
    },
    normal: {
      uniforms: Tt([
        le.common,
        le.bumpmap,
        le.normalmap,
        le.displacementmap,
        { opacity: { value: 1 } },
      ]),
      vertexShader: Fe.meshnormal_vert,
      fragmentShader: Fe.meshnormal_frag,
    },
    sprite: {
      uniforms: Tt([le.sprite, le.fog]),
      vertexShader: Fe.sprite_vert,
      fragmentShader: Fe.sprite_frag,
    },
    background: {
      uniforms: {
        uvTransform: { value: new Be() },
        t2D: { value: null },
        backgroundIntensity: { value: 1 },
      },
      vertexShader: Fe.background_vert,
      fragmentShader: Fe.background_frag,
    },
    backgroundCube: {
      uniforms: {
        envMap: { value: null },
        flipEnvMap: { value: -1 },
        backgroundBlurriness: { value: 0 },
        backgroundIntensity: { value: 1 },
      },
      vertexShader: Fe.backgroundCube_vert,
      fragmentShader: Fe.backgroundCube_frag,
    },
    cube: {
      uniforms: {
        tCube: { value: null },
        tFlip: { value: -1 },
        opacity: { value: 1 },
      },
      vertexShader: Fe.cube_vert,
      fragmentShader: Fe.cube_frag,
    },
    equirect: {
      uniforms: { tEquirect: { value: null } },
      vertexShader: Fe.equirect_vert,
      fragmentShader: Fe.equirect_frag,
    },
    distanceRGBA: {
      uniforms: Tt([
        le.common,
        le.displacementmap,
        {
          referencePosition: { value: new D() },
          nearDistance: { value: 1 },
          farDistance: { value: 1e3 },
        },
      ]),
      vertexShader: Fe.distanceRGBA_vert,
      fragmentShader: Fe.distanceRGBA_frag,
    },
    shadow: {
      uniforms: Tt([
        le.lights,
        le.fog,
        { color: { value: new Ce(0) }, opacity: { value: 1 } },
      ]),
      vertexShader: Fe.shadow_vert,
      fragmentShader: Fe.shadow_frag,
    },
  };
$t.physical = {
  uniforms: Tt([
    $t.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: new Be() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: new Be() },
      clearcoatNormalScale: { value: new Re(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: new Be() },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: new Be() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: new Be() },
      sheen: { value: 0 },
      sheenColor: { value: new Ce(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: new Be() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: new Be() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: new Be() },
      transmissionSamplerSize: { value: new Re() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: new Be() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: new Ce(0) },
      specularColor: { value: new Ce(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: new Be() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: new Be() },
      anisotropyVector: { value: new Re() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: new Be() },
    },
  ]),
  vertexShader: Fe.meshphysical_vert,
  fragmentShader: Fe.meshphysical_frag,
};
const As = { r: 0, b: 0, g: 0 };
function Yf(s, e, t, n, i, r, a) {
  const o = new Ce(0);
  let l = r === !0 ? 0 : 1,
    c,
    h,
    u = null,
    d = 0,
    m = null;
  function g(p, f) {
    let y = !1,
      M = f.isScene === !0 ? f.background : null;
    M && M.isTexture && (M = (f.backgroundBlurriness > 0 ? t : e).get(M)),
      M === null ? _(o, l) : M && M.isColor && (_(M, 1), (y = !0));
    const S = s.xr.getEnvironmentBlendMode();
    S === "additive"
      ? n.buffers.color.setClear(0, 0, 0, 1, a)
      : S === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a),
      (s.autoClear || y) &&
        s.clear(s.autoClearColor, s.autoClearDepth, s.autoClearStencil),
      M && (M.isCubeTexture || M.mapping === Ws)
        ? (h === void 0 &&
            ((h = new It(
              new es(1, 1, 1),
              new $n({
                name: "BackgroundCubeMaterial",
                uniforms: wi($t.backgroundCube.uniforms),
                vertexShader: $t.backgroundCube.vertexShader,
                fragmentShader: $t.backgroundCube.fragmentShader,
                side: Rt,
                depthTest: !1,
                depthWrite: !1,
                fog: !1,
              })
            )),
            h.geometry.deleteAttribute("normal"),
            h.geometry.deleteAttribute("uv"),
            (h.onBeforeRender = function (b, L, w) {
              this.matrixWorld.copyPosition(w.matrixWorld);
            }),
            Object.defineProperty(h.material, "envMap", {
              get: function () {
                return this.uniforms.envMap.value;
              },
            }),
            i.update(h)),
          (h.material.uniforms.envMap.value = M),
          (h.material.uniforms.flipEnvMap.value =
            M.isCubeTexture && M.isRenderTargetTexture === !1 ? -1 : 1),
          (h.material.uniforms.backgroundBlurriness.value =
            f.backgroundBlurriness),
          (h.material.uniforms.backgroundIntensity.value =
            f.backgroundIntensity),
          (h.material.toneMapped = Ye.getTransfer(M.colorSpace) !== Je),
          (u !== M || d !== M.version || m !== s.toneMapping) &&
            ((h.material.needsUpdate = !0),
            (u = M),
            (d = M.version),
            (m = s.toneMapping)),
          h.layers.enableAll(),
          p.unshift(h, h.geometry, h.material, 0, 0, null))
        : M &&
          M.isTexture &&
          (c === void 0 &&
            ((c = new It(
              new sa(2, 2),
              new $n({
                name: "BackgroundMaterial",
                uniforms: wi($t.background.uniforms),
                vertexShader: $t.background.vertexShader,
                fragmentShader: $t.background.fragmentShader,
                side: gn,
                depthTest: !1,
                depthWrite: !1,
                fog: !1,
              })
            )),
            c.geometry.deleteAttribute("normal"),
            Object.defineProperty(c.material, "map", {
              get: function () {
                return this.uniforms.t2D.value;
              },
            }),
            i.update(c)),
          (c.material.uniforms.t2D.value = M),
          (c.material.uniforms.backgroundIntensity.value =
            f.backgroundIntensity),
          (c.material.toneMapped = Ye.getTransfer(M.colorSpace) !== Je),
          M.matrixAutoUpdate === !0 && M.updateMatrix(),
          c.material.uniforms.uvTransform.value.copy(M.matrix),
          (u !== M || d !== M.version || m !== s.toneMapping) &&
            ((c.material.needsUpdate = !0),
            (u = M),
            (d = M.version),
            (m = s.toneMapping)),
          c.layers.enableAll(),
          p.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function _(p, f) {
    p.getRGB(As, Kl(s)), n.buffers.color.setClear(As.r, As.g, As.b, f, a);
  }
  return {
    getClearColor: function () {
      return o;
    },
    setClearColor: function (p, f = 1) {
      o.set(p), (l = f), _(o, l);
    },
    getClearAlpha: function () {
      return l;
    },
    setClearAlpha: function (p) {
      (l = p), _(o, l);
    },
    render: g,
  };
}
function jf(s, e, t, n) {
  const i = s.getParameter(s.MAX_VERTEX_ATTRIBS),
    r = n.isWebGL2 ? null : e.get("OES_vertex_array_object"),
    a = n.isWebGL2 || r !== null,
    o = {},
    l = p(null);
  let c = l,
    h = !1;
  function u(C, F, V, Y, ee) {
    let Z = !1;
    if (a) {
      const q = _(Y, V, F);
      c !== q && ((c = q), m(c.object)),
        (Z = f(C, Y, V, ee)),
        Z && y(C, Y, V, ee);
    } else {
      const q = F.wireframe === !0;
      (c.geometry !== Y.id || c.program !== V.id || c.wireframe !== q) &&
        ((c.geometry = Y.id), (c.program = V.id), (c.wireframe = q), (Z = !0));
    }
    ee !== null && t.update(ee, s.ELEMENT_ARRAY_BUFFER),
      (Z || h) &&
        ((h = !1),
        I(C, F, V, Y),
        ee !== null && s.bindBuffer(s.ELEMENT_ARRAY_BUFFER, t.get(ee).buffer));
  }
  function d() {
    return n.isWebGL2 ? s.createVertexArray() : r.createVertexArrayOES();
  }
  function m(C) {
    return n.isWebGL2 ? s.bindVertexArray(C) : r.bindVertexArrayOES(C);
  }
  function g(C) {
    return n.isWebGL2 ? s.deleteVertexArray(C) : r.deleteVertexArrayOES(C);
  }
  function _(C, F, V) {
    const Y = V.wireframe === !0;
    let ee = o[C.id];
    ee === void 0 && ((ee = {}), (o[C.id] = ee));
    let Z = ee[F.id];
    Z === void 0 && ((Z = {}), (ee[F.id] = Z));
    let q = Z[Y];
    return q === void 0 && ((q = p(d())), (Z[Y] = q)), q;
  }
  function p(C) {
    const F = [],
      V = [],
      Y = [];
    for (let ee = 0; ee < i; ee++) (F[ee] = 0), (V[ee] = 0), (Y[ee] = 0);
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: F,
      enabledAttributes: V,
      attributeDivisors: Y,
      object: C,
      attributes: {},
      index: null,
    };
  }
  function f(C, F, V, Y) {
    const ee = c.attributes,
      Z = F.attributes;
    let q = 0;
    const U = V.getAttributes();
    for (const H in U)
      if (U[H].location >= 0) {
        const he = ee[H];
        let fe = Z[H];
        if (
          (fe === void 0 &&
            (H === "instanceMatrix" &&
              C.instanceMatrix &&
              (fe = C.instanceMatrix),
            H === "instanceColor" && C.instanceColor && (fe = C.instanceColor)),
          he === void 0 || he.attribute !== fe || (fe && he.data !== fe.data))
        )
          return !0;
        q++;
      }
    return c.attributesNum !== q || c.index !== Y;
  }
  function y(C, F, V, Y) {
    const ee = {},
      Z = F.attributes;
    let q = 0;
    const U = V.getAttributes();
    for (const H in U)
      if (U[H].location >= 0) {
        let he = Z[H];
        he === void 0 &&
          (H === "instanceMatrix" &&
            C.instanceMatrix &&
            (he = C.instanceMatrix),
          H === "instanceColor" && C.instanceColor && (he = C.instanceColor));
        const fe = {};
        (fe.attribute = he),
          he && he.data && (fe.data = he.data),
          (ee[H] = fe),
          q++;
      }
    (c.attributes = ee), (c.attributesNum = q), (c.index = Y);
  }
  function M() {
    const C = c.newAttributes;
    for (let F = 0, V = C.length; F < V; F++) C[F] = 0;
  }
  function S(C) {
    b(C, 0);
  }
  function b(C, F) {
    const V = c.newAttributes,
      Y = c.enabledAttributes,
      ee = c.attributeDivisors;
    (V[C] = 1),
      Y[C] === 0 && (s.enableVertexAttribArray(C), (Y[C] = 1)),
      ee[C] !== F &&
        ((n.isWebGL2 ? s : e.get("ANGLE_instanced_arrays"))[
          n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"
        ](C, F),
        (ee[C] = F));
  }
  function L() {
    const C = c.newAttributes,
      F = c.enabledAttributes;
    for (let V = 0, Y = F.length; V < Y; V++)
      F[V] !== C[V] && (s.disableVertexAttribArray(V), (F[V] = 0));
  }
  function w(C, F, V, Y, ee, Z, q) {
    q === !0
      ? s.vertexAttribIPointer(C, F, V, ee, Z)
      : s.vertexAttribPointer(C, F, V, Y, ee, Z);
  }
  function I(C, F, V, Y) {
    if (
      n.isWebGL2 === !1 &&
      (C.isInstancedMesh || Y.isInstancedBufferGeometry) &&
      e.get("ANGLE_instanced_arrays") === null
    )
      return;
    M();
    const ee = Y.attributes,
      Z = V.getAttributes(),
      q = F.defaultAttributeValues;
    for (const U in Z) {
      const H = Z[U];
      if (H.location >= 0) {
        let ae = ee[U];
        if (
          (ae === void 0 &&
            (U === "instanceMatrix" &&
              C.instanceMatrix &&
              (ae = C.instanceMatrix),
            U === "instanceColor" && C.instanceColor && (ae = C.instanceColor)),
          ae !== void 0)
        ) {
          const he = ae.normalized,
            fe = ae.itemSize,
            Se = t.get(ae);
          if (Se === void 0) continue;
          const ze = Se.buffer,
            Te = Se.type,
            Le = Se.bytesPerElement,
            Ze =
              n.isWebGL2 === !0 &&
              (Te === s.INT || Te === s.UNSIGNED_INT || ae.gpuType === Pl);
          if (ae.isInterleavedBufferAttribute) {
            const Ne = ae.data,
              O = Ne.stride,
              xt = ae.offset;
            if (Ne.isInstancedInterleavedBuffer) {
              for (let ve = 0; ve < H.locationSize; ve++)
                b(H.location + ve, Ne.meshPerAttribute);
              C.isInstancedMesh !== !0 &&
                Y._maxInstanceCount === void 0 &&
                (Y._maxInstanceCount = Ne.meshPerAttribute * Ne.count);
            } else
              for (let ve = 0; ve < H.locationSize; ve++) S(H.location + ve);
            s.bindBuffer(s.ARRAY_BUFFER, ze);
            for (let ve = 0; ve < H.locationSize; ve++)
              w(
                H.location + ve,
                fe / H.locationSize,
                Te,
                he,
                O * Le,
                (xt + (fe / H.locationSize) * ve) * Le,
                Ze
              );
          } else {
            if (ae.isInstancedBufferAttribute) {
              for (let Ne = 0; Ne < H.locationSize; Ne++)
                b(H.location + Ne, ae.meshPerAttribute);
              C.isInstancedMesh !== !0 &&
                Y._maxInstanceCount === void 0 &&
                (Y._maxInstanceCount = ae.meshPerAttribute * ae.count);
            } else
              for (let Ne = 0; Ne < H.locationSize; Ne++) S(H.location + Ne);
            s.bindBuffer(s.ARRAY_BUFFER, ze);
            for (let Ne = 0; Ne < H.locationSize; Ne++)
              w(
                H.location + Ne,
                fe / H.locationSize,
                Te,
                he,
                fe * Le,
                (fe / H.locationSize) * Ne * Le,
                Ze
              );
          }
        } else if (q !== void 0) {
          const he = q[U];
          if (he !== void 0)
            switch (he.length) {
              case 2:
                s.vertexAttrib2fv(H.location, he);
                break;
              case 3:
                s.vertexAttrib3fv(H.location, he);
                break;
              case 4:
                s.vertexAttrib4fv(H.location, he);
                break;
              default:
                s.vertexAttrib1fv(H.location, he);
            }
        }
      }
    }
    L();
  }
  function v() {
    j();
    for (const C in o) {
      const F = o[C];
      for (const V in F) {
        const Y = F[V];
        for (const ee in Y) g(Y[ee].object), delete Y[ee];
        delete F[V];
      }
      delete o[C];
    }
  }
  function T(C) {
    if (o[C.id] === void 0) return;
    const F = o[C.id];
    for (const V in F) {
      const Y = F[V];
      for (const ee in Y) g(Y[ee].object), delete Y[ee];
      delete F[V];
    }
    delete o[C.id];
  }
  function G(C) {
    for (const F in o) {
      const V = o[F];
      if (V[C.id] === void 0) continue;
      const Y = V[C.id];
      for (const ee in Y) g(Y[ee].object), delete Y[ee];
      delete V[C.id];
    }
  }
  function j() {
    $(), (h = !0), c !== l && ((c = l), m(c.object));
  }
  function $() {
    (l.geometry = null), (l.program = null), (l.wireframe = !1);
  }
  return {
    setup: u,
    reset: j,
    resetDefaultState: $,
    dispose: v,
    releaseStatesOfGeometry: T,
    releaseStatesOfProgram: G,
    initAttributes: M,
    enableAttribute: S,
    disableUnusedAttributes: L,
  };
}
function qf(s, e, t, n) {
  const i = n.isWebGL2;
  let r;
  function a(c) {
    r = c;
  }
  function o(c, h) {
    s.drawArrays(r, c, h), t.update(h, r, 1);
  }
  function l(c, h, u) {
    if (u === 0) return;
    let d, m;
    if (i) (d = s), (m = "drawArraysInstanced");
    else if (
      ((d = e.get("ANGLE_instanced_arrays")),
      (m = "drawArraysInstancedANGLE"),
      d === null)
    ) {
      console.error(
        "THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
      );
      return;
    }
    d[m](r, c, h, u), t.update(h, r, u);
  }
  (this.setMode = a), (this.render = o), (this.renderInstances = l);
}
function $f(s, e, t) {
  let n;
  function i() {
    if (n !== void 0) return n;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const w = e.get("EXT_texture_filter_anisotropic");
      n = s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else n = 0;
    return n;
  }
  function r(w) {
    if (w === "highp") {
      if (
        s.getShaderPrecisionFormat(s.VERTEX_SHADER, s.HIGH_FLOAT).precision >
          0 &&
        s.getShaderPrecisionFormat(s.FRAGMENT_SHADER, s.HIGH_FLOAT).precision >
          0
      )
        return "highp";
      w = "mediump";
    }
    return w === "mediump" &&
      s.getShaderPrecisionFormat(s.VERTEX_SHADER, s.MEDIUM_FLOAT).precision >
        0 &&
      s.getShaderPrecisionFormat(s.FRAGMENT_SHADER, s.MEDIUM_FLOAT).precision >
        0
      ? "mediump"
      : "lowp";
  }
  const a =
    typeof WebGL2RenderingContext < "u" &&
    s.constructor.name === "WebGL2RenderingContext";
  let o = t.precision !== void 0 ? t.precision : "highp";
  const l = r(o);
  l !== o &&
    (console.warn(
      "THREE.WebGLRenderer:",
      o,
      "not supported, using",
      l,
      "instead."
    ),
    (o = l));
  const c = a || e.has("WEBGL_draw_buffers"),
    h = t.logarithmicDepthBuffer === !0,
    u = s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),
    d = s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
    m = s.getParameter(s.MAX_TEXTURE_SIZE),
    g = s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),
    _ = s.getParameter(s.MAX_VERTEX_ATTRIBS),
    p = s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),
    f = s.getParameter(s.MAX_VARYING_VECTORS),
    y = s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),
    M = d > 0,
    S = a || e.has("OES_texture_float"),
    b = M && S,
    L = a ? s.getParameter(s.MAX_SAMPLES) : 0;
  return {
    isWebGL2: a,
    drawBuffers: c,
    getMaxAnisotropy: i,
    getMaxPrecision: r,
    precision: o,
    logarithmicDepthBuffer: h,
    maxTextures: u,
    maxVertexTextures: d,
    maxTextureSize: m,
    maxCubemapSize: g,
    maxAttributes: _,
    maxVertexUniforms: p,
    maxVaryings: f,
    maxFragmentUniforms: y,
    vertexTextures: M,
    floatFragmentTextures: S,
    floatVertexTextures: b,
    maxSamples: L,
  };
}
function Kf(s) {
  const e = this;
  let t = null,
    n = 0,
    i = !1,
    r = !1;
  const a = new Tn(),
    o = new Be(),
    l = { value: null, needsUpdate: !1 };
  (this.uniform = l),
    (this.numPlanes = 0),
    (this.numIntersection = 0),
    (this.init = function (u, d) {
      const m = u.length !== 0 || d || n !== 0 || i;
      return (i = d), (n = u.length), m;
    }),
    (this.beginShadows = function () {
      (r = !0), h(null);
    }),
    (this.endShadows = function () {
      r = !1;
    }),
    (this.setGlobalState = function (u, d) {
      t = h(u, d, 0);
    }),
    (this.setState = function (u, d, m) {
      const g = u.clippingPlanes,
        _ = u.clipIntersection,
        p = u.clipShadows,
        f = s.get(u);
      if (!i || g === null || g.length === 0 || (r && !p)) r ? h(null) : c();
      else {
        const y = r ? 0 : n,
          M = y * 4;
        let S = f.clippingState || null;
        (l.value = S), (S = h(g, d, M, m));
        for (let b = 0; b !== M; ++b) S[b] = t[b];
        (f.clippingState = S),
          (this.numIntersection = _ ? this.numPlanes : 0),
          (this.numPlanes += y);
      }
    });
  function c() {
    l.value !== t && ((l.value = t), (l.needsUpdate = n > 0)),
      (e.numPlanes = n),
      (e.numIntersection = 0);
  }
  function h(u, d, m, g) {
    const _ = u !== null ? u.length : 0;
    let p = null;
    if (_ !== 0) {
      if (((p = l.value), g !== !0 || p === null)) {
        const f = m + _ * 4,
          y = d.matrixWorldInverse;
        o.getNormalMatrix(y),
          (p === null || p.length < f) && (p = new Float32Array(f));
        for (let M = 0, S = m; M !== _; ++M, S += 4)
          a.copy(u[M]).applyMatrix4(y, o),
            a.normal.toArray(p, S),
            (p[S + 3] = a.constant);
      }
      (l.value = p), (l.needsUpdate = !0);
    }
    return (e.numPlanes = _), (e.numIntersection = 0), p;
  }
}
function Zf(s) {
  let e = new WeakMap();
  function t(a, o) {
    return o === Os ? (a.mapping = yi) : o === Hr && (a.mapping = Ei), a;
  }
  function n(a) {
    if (a && a.isTexture && a.isRenderTargetTexture === !1) {
      const o = a.mapping;
      if (o === Os || o === Hr)
        if (e.has(a)) {
          const l = e.get(a).texture;
          return t(l, a.mapping);
        } else {
          const l = a.image;
          if (l && l.height > 0) {
            const c = new Ql(l.height / 2);
            return (
              c.fromEquirectangularTexture(s, a),
              e.set(a, c),
              a.addEventListener("dispose", i),
              t(c.texture, a.mapping)
            );
          } else return null;
        }
    }
    return a;
  }
  function i(a) {
    const o = a.target;
    o.removeEventListener("dispose", i);
    const l = e.get(o);
    l !== void 0 && (e.delete(o), l.dispose());
  }
  function r() {
    e = new WeakMap();
  }
  return { get: n, dispose: r };
}
class ra extends Zl {
  constructor(e = -1, t = 1, n = 1, i = -1, r = 0.1, a = 2e3) {
    super(),
      (this.isOrthographicCamera = !0),
      (this.type = "OrthographicCamera"),
      (this.zoom = 1),
      (this.view = null),
      (this.left = e),
      (this.right = t),
      (this.top = n),
      (this.bottom = i),
      (this.near = r),
      (this.far = a),
      this.updateProjectionMatrix();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.left = e.left),
      (this.right = e.right),
      (this.top = e.top),
      (this.bottom = e.bottom),
      (this.near = e.near),
      (this.far = e.far),
      (this.zoom = e.zoom),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      this
    );
  }
  setViewOffset(e, t, n, i, r, a) {
    this.view === null &&
      (this.view = {
        enabled: !0,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1,
      }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = n),
      (this.view.offsetY = i),
      (this.view.width = r),
      (this.view.height = a),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom),
      t = (this.top - this.bottom) / (2 * this.zoom),
      n = (this.right + this.left) / 2,
      i = (this.top + this.bottom) / 2;
    let r = n - e,
      a = n + e,
      o = i + t,
      l = i - t;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom,
        h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      (r += c * this.view.offsetX),
        (a = r + c * this.view.width),
        (o -= h * this.view.offsetY),
        (l = o - h * this.view.height);
    }
    this.projectionMatrix.makeOrthographic(
      r,
      a,
      o,
      l,
      this.near,
      this.far,
      this.coordinateSystem
    ),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.zoom = this.zoom),
      (t.object.left = this.left),
      (t.object.right = this.right),
      (t.object.top = this.top),
      (t.object.bottom = this.bottom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      t
    );
  }
}
const _i = 4,
  Co = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
  Vn = 20,
  yr = new ra(),
  Lo = new Ce();
let Er = null,
  Sr = 0,
  Tr = 0;
const kn = (1 + Math.sqrt(5)) / 2,
  mi = 1 / kn,
  Po = [
    new D(1, 1, 1),
    new D(-1, 1, 1),
    new D(1, 1, -1),
    new D(-1, 1, -1),
    new D(0, kn, mi),
    new D(0, kn, -mi),
    new D(mi, 0, kn),
    new D(-mi, 0, kn),
    new D(kn, mi, 0),
    new D(-kn, mi, 0),
  ];
class Do {
  constructor(e) {
    (this._renderer = e),
      (this._pingPongRenderTarget = null),
      (this._lodMax = 0),
      (this._cubeSize = 0),
      (this._lodPlanes = []),
      (this._sizeLods = []),
      (this._sigmas = []),
      (this._blurMaterial = null),
      (this._cubemapMaterial = null),
      (this._equirectMaterial = null),
      this._compileMaterial(this._blurMaterial);
  }
  fromScene(e, t = 0, n = 0.1, i = 100) {
    (Er = this._renderer.getRenderTarget()),
      (Sr = this._renderer.getActiveCubeFace()),
      (Tr = this._renderer.getActiveMipmapLevel()),
      this._setSize(256);
    const r = this._allocateTargets();
    return (
      (r.depthBuffer = !0),
      this._sceneToCubeUV(e, n, i, r),
      t > 0 && this._blur(r, 0, 0, t),
      this._applyPMREM(r),
      this._cleanup(r),
      r
    );
  }
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null &&
      ((this._cubemapMaterial = No()),
      this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null &&
      ((this._equirectMaterial = Uo()),
      this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(),
      this._cubemapMaterial !== null && this._cubemapMaterial.dispose(),
      this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  _setSize(e) {
    (this._lodMax = Math.floor(Math.log2(e))),
      (this._cubeSize = Math.pow(2, this._lodMax));
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(),
      this._pingPongRenderTarget !== null &&
        this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(Er, Sr, Tr),
      (e.scissorTest = !1),
      bs(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === yi || e.mapping === Ei
      ? this._setSize(
          e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width
        )
      : this._setSize(e.image.width / 4),
      (Er = this._renderer.getRenderTarget()),
      (Sr = this._renderer.getActiveCubeFace()),
      (Tr = this._renderer.getActiveMipmapLevel());
    const n = t || this._allocateTargets();
    return (
      this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n
    );
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112),
      t = 4 * this._cubeSize,
      n = {
        magFilter: lt,
        minFilter: lt,
        generateMipmaps: !1,
        type: Qt,
        format: Ot,
        colorSpace: gt,
        depthBuffer: !1,
      },
      i = Io(e, t, n);
    if (
      this._pingPongRenderTarget === null ||
      this._pingPongRenderTarget.width !== e ||
      this._pingPongRenderTarget.height !== t
    ) {
      this._pingPongRenderTarget !== null && this._dispose(),
        (this._pingPongRenderTarget = Io(e, t, n));
      const { _lodMax: r } = this;
      ({
        sizeLods: this._sizeLods,
        lodPlanes: this._lodPlanes,
        sigmas: this._sigmas,
      } = Jf(r)),
        (this._blurMaterial = Qf(r, e, t));
    }
    return i;
  }
  _compileMaterial(e) {
    const t = new It(this._lodPlanes[0], e);
    this._renderer.compile(t, yr);
  }
  _sceneToCubeUV(e, t, n, i) {
    const o = new At(90, 1, t, n),
      l = [1, -1, 1, 1, 1, 1],
      c = [1, 1, 1, -1, -1, -1],
      h = this._renderer,
      u = h.autoClear,
      d = h.toneMapping;
    h.getClearColor(Lo), (h.toneMapping = Cn), (h.autoClear = !1);
    const m = new wn({
        name: "PMREM.Background",
        side: Rt,
        depthWrite: !1,
        depthTest: !1,
      }),
      g = new It(new es(), m);
    let _ = !1;
    const p = e.background;
    p
      ? p.isColor && (m.color.copy(p), (e.background = null), (_ = !0))
      : (m.color.copy(Lo), (_ = !0));
    for (let f = 0; f < 6; f++) {
      const y = f % 3;
      y === 0
        ? (o.up.set(0, l[f], 0), o.lookAt(c[f], 0, 0))
        : y === 1
        ? (o.up.set(0, 0, l[f]), o.lookAt(0, c[f], 0))
        : (o.up.set(0, l[f], 0), o.lookAt(0, 0, c[f]));
      const M = this._cubeSize;
      bs(i, y * M, f > 2 ? M : 0, M, M),
        h.setRenderTarget(i),
        _ && h.render(g, o),
        h.render(e, o);
    }
    g.geometry.dispose(),
      g.material.dispose(),
      (h.toneMapping = d),
      (h.autoClear = u),
      (e.background = p);
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer,
      i = e.mapping === yi || e.mapping === Ei;
    i
      ? (this._cubemapMaterial === null && (this._cubemapMaterial = No()),
        (this._cubemapMaterial.uniforms.flipEnvMap.value =
          e.isRenderTargetTexture === !1 ? -1 : 1))
      : this._equirectMaterial === null && (this._equirectMaterial = Uo());
    const r = i ? this._cubemapMaterial : this._equirectMaterial,
      a = new It(this._lodPlanes[0], r),
      o = r.uniforms;
    o.envMap.value = e;
    const l = this._cubeSize;
    bs(t, 0, 0, 3 * l, 2 * l), n.setRenderTarget(t), n.render(a, yr);
  }
  _applyPMREM(e) {
    const t = this._renderer,
      n = t.autoClear;
    t.autoClear = !1;
    for (let i = 1; i < this._lodPlanes.length; i++) {
      const r = Math.sqrt(
          this._sigmas[i] * this._sigmas[i] -
            this._sigmas[i - 1] * this._sigmas[i - 1]
        ),
        a = Po[(i - 1) % Po.length];
      this._blur(e, i - 1, i, r, a);
    }
    t.autoClear = n;
  }
  _blur(e, t, n, i, r) {
    const a = this._pingPongRenderTarget;
    this._halfBlur(e, a, t, n, i, "latitudinal", r),
      this._halfBlur(a, e, n, n, i, "longitudinal", r);
  }
  _halfBlur(e, t, n, i, r, a, o) {
    const l = this._renderer,
      c = this._blurMaterial;
    a !== "latitudinal" &&
      a !== "longitudinal" &&
      console.error(
        "blur direction must be either latitudinal or longitudinal!"
      );
    const h = 3,
      u = new It(this._lodPlanes[i], c),
      d = c.uniforms,
      m = this._sizeLods[n] - 1,
      g = isFinite(r) ? Math.PI / (2 * m) : (2 * Math.PI) / (2 * Vn - 1),
      _ = r / g,
      p = isFinite(r) ? 1 + Math.floor(h * _) : Vn;
    p > Vn &&
      console.warn(
        `sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Vn}`
      );
    const f = [];
    let y = 0;
    for (let w = 0; w < Vn; ++w) {
      const I = w / _,
        v = Math.exp((-I * I) / 2);
      f.push(v), w === 0 ? (y += v) : w < p && (y += 2 * v);
    }
    for (let w = 0; w < f.length; w++) f[w] = f[w] / y;
    (d.envMap.value = e.texture),
      (d.samples.value = p),
      (d.weights.value = f),
      (d.latitudinal.value = a === "latitudinal"),
      o && (d.poleAxis.value = o);
    const { _lodMax: M } = this;
    (d.dTheta.value = g), (d.mipInt.value = M - n);
    const S = this._sizeLods[i],
      b = 3 * S * (i > M - _i ? i - M + _i : 0),
      L = 4 * (this._cubeSize - S);
    bs(t, b, L, 3 * S, 2 * S), l.setRenderTarget(t), l.render(u, yr);
  }
}
function Jf(s) {
  const e = [],
    t = [],
    n = [];
  let i = s;
  const r = s - _i + 1 + Co.length;
  for (let a = 0; a < r; a++) {
    const o = Math.pow(2, i);
    t.push(o);
    let l = 1 / o;
    a > s - _i ? (l = Co[a - s + _i - 1]) : a === 0 && (l = 0), n.push(l);
    const c = 1 / (o - 2),
      h = -c,
      u = 1 + c,
      d = [h, h, u, h, u, u, h, h, u, u, h, u],
      m = 6,
      g = 6,
      _ = 3,
      p = 2,
      f = 1,
      y = new Float32Array(_ * g * m),
      M = new Float32Array(p * g * m),
      S = new Float32Array(f * g * m);
    for (let L = 0; L < m; L++) {
      const w = ((L % 3) * 2) / 3 - 1,
        I = L > 2 ? 0 : -1,
        v = [
          w,
          I,
          0,
          w + 2 / 3,
          I,
          0,
          w + 2 / 3,
          I + 1,
          0,
          w,
          I,
          0,
          w + 2 / 3,
          I + 1,
          0,
          w,
          I + 1,
          0,
        ];
      y.set(v, _ * g * L), M.set(d, p * g * L);
      const T = [L, L, L, L, L, L];
      S.set(T, f * g * L);
    }
    const b = new jt();
    b.setAttribute("position", new bt(y, _)),
      b.setAttribute("uv", new bt(M, p)),
      b.setAttribute("faceIndex", new bt(S, f)),
      e.push(b),
      i > _i && i--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function Io(s, e, t) {
  const n = new qn(s, e, t);
  return (
    (n.texture.mapping = Ws),
    (n.texture.name = "PMREM.cubeUv"),
    (n.scissorTest = !0),
    n
  );
}
function bs(s, e, t, n, i) {
  s.viewport.set(e, t, n, i), s.scissor.set(e, t, n, i);
}
function Qf(s, e, t) {
  const n = new Float32Array(Vn),
    i = new D(0, 1, 0);
  return new $n({
    name: "SphericalGaussianBlur",
    defines: {
      n: Vn,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${s}.0`,
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: i },
    },
    vertexShader: aa(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
    blending: Rn,
    depthTest: !1,
    depthWrite: !1,
  });
}
function Uo() {
  return new $n({
    name: "EquirectangularToCubeUV",
    uniforms: { envMap: { value: null } },
    vertexShader: aa(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
    blending: Rn,
    depthTest: !1,
    depthWrite: !1,
  });
}
function No() {
  return new $n({
    name: "CubemapToCubeUV",
    uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } },
    vertexShader: aa(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
    blending: Rn,
    depthTest: !1,
    depthWrite: !1,
  });
}
function aa() {
  return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
function ep(s) {
  let e = new WeakMap(),
    t = null;
  function n(o) {
    if (o && o.isTexture) {
      const l = o.mapping,
        c = l === Os || l === Hr,
        h = l === yi || l === Ei;
      if (c || h)
        if (o.isRenderTargetTexture && o.needsPMREMUpdate === !0) {
          o.needsPMREMUpdate = !1;
          let u = e.get(o);
          return (
            t === null && (t = new Do(s)),
            (u = c ? t.fromEquirectangular(o, u) : t.fromCubemap(o, u)),
            e.set(o, u),
            u.texture
          );
        } else {
          if (e.has(o)) return e.get(o).texture;
          {
            const u = o.image;
            if ((c && u && u.height > 0) || (h && u && i(u))) {
              t === null && (t = new Do(s));
              const d = c ? t.fromEquirectangular(o) : t.fromCubemap(o);
              return e.set(o, d), o.addEventListener("dispose", r), d.texture;
            } else return null;
          }
        }
    }
    return o;
  }
  function i(o) {
    let l = 0;
    const c = 6;
    for (let h = 0; h < c; h++) o[h] !== void 0 && l++;
    return l === c;
  }
  function r(o) {
    const l = o.target;
    l.removeEventListener("dispose", r);
    const c = e.get(l);
    c !== void 0 && (e.delete(l), c.dispose());
  }
  function a() {
    (e = new WeakMap()), t !== null && (t.dispose(), (t = null));
  }
  return { get: n, dispose: a };
}
function tp(s) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0) return e[n];
    let i;
    switch (n) {
      case "WEBGL_depth_texture":
        i =
          s.getExtension("WEBGL_depth_texture") ||
          s.getExtension("MOZ_WEBGL_depth_texture") ||
          s.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        i =
          s.getExtension("EXT_texture_filter_anisotropic") ||
          s.getExtension("MOZ_EXT_texture_filter_anisotropic") ||
          s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        i =
          s.getExtension("WEBGL_compressed_texture_s3tc") ||
          s.getExtension("MOZ_WEBGL_compressed_texture_s3tc") ||
          s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        i =
          s.getExtension("WEBGL_compressed_texture_pvrtc") ||
          s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        i = s.getExtension(n);
    }
    return (e[n] = i), i;
  }
  return {
    has: function (n) {
      return t(n) !== null;
    },
    init: function (n) {
      n.isWebGL2
        ? t("EXT_color_buffer_float")
        : (t("WEBGL_depth_texture"),
          t("OES_texture_float"),
          t("OES_texture_half_float"),
          t("OES_texture_half_float_linear"),
          t("OES_standard_derivatives"),
          t("OES_element_index_uint"),
          t("OES_vertex_array_object"),
          t("ANGLE_instanced_arrays")),
        t("OES_texture_float_linear"),
        t("EXT_color_buffer_half_float"),
        t("WEBGL_multisampled_render_to_texture");
    },
    get: function (n) {
      const i = t(n);
      return (
        i === null &&
          console.warn(
            "THREE.WebGLRenderer: " + n + " extension not supported."
          ),
        i
      );
    },
  };
}
function np(s, e, t, n) {
  const i = {},
    r = new WeakMap();
  function a(u) {
    const d = u.target;
    d.index !== null && e.remove(d.index);
    for (const g in d.attributes) e.remove(d.attributes[g]);
    for (const g in d.morphAttributes) {
      const _ = d.morphAttributes[g];
      for (let p = 0, f = _.length; p < f; p++) e.remove(_[p]);
    }
    d.removeEventListener("dispose", a), delete i[d.id];
    const m = r.get(d);
    m && (e.remove(m), r.delete(d)),
      n.releaseStatesOfGeometry(d),
      d.isInstancedBufferGeometry === !0 && delete d._maxInstanceCount,
      t.memory.geometries--;
  }
  function o(u, d) {
    return (
      i[d.id] === !0 ||
        (d.addEventListener("dispose", a),
        (i[d.id] = !0),
        t.memory.geometries++),
      d
    );
  }
  function l(u) {
    const d = u.attributes;
    for (const g in d) e.update(d[g], s.ARRAY_BUFFER);
    const m = u.morphAttributes;
    for (const g in m) {
      const _ = m[g];
      for (let p = 0, f = _.length; p < f; p++) e.update(_[p], s.ARRAY_BUFFER);
    }
  }
  function c(u) {
    const d = [],
      m = u.index,
      g = u.attributes.position;
    let _ = 0;
    if (m !== null) {
      const y = m.array;
      _ = m.version;
      for (let M = 0, S = y.length; M < S; M += 3) {
        const b = y[M + 0],
          L = y[M + 1],
          w = y[M + 2];
        d.push(b, L, L, w, w, b);
      }
    } else if (g !== void 0) {
      const y = g.array;
      _ = g.version;
      for (let M = 0, S = y.length / 3 - 1; M < S; M += 3) {
        const b = M + 0,
          L = M + 1,
          w = M + 2;
        d.push(b, L, L, w, w, b);
      }
    } else return;
    const p = new (Gl(d) ? $l : ql)(d, 1);
    p.version = _;
    const f = r.get(u);
    f && e.remove(f), r.set(u, p);
  }
  function h(u) {
    const d = r.get(u);
    if (d) {
      const m = u.index;
      m !== null && d.version < m.version && c(u);
    } else c(u);
    return r.get(u);
  }
  return { get: o, update: l, getWireframeAttribute: h };
}
function ip(s, e, t, n) {
  const i = n.isWebGL2;
  let r;
  function a(d) {
    r = d;
  }
  let o, l;
  function c(d) {
    (o = d.type), (l = d.bytesPerElement);
  }
  function h(d, m) {
    s.drawElements(r, m, o, d * l), t.update(m, r, 1);
  }
  function u(d, m, g) {
    if (g === 0) return;
    let _, p;
    if (i) (_ = s), (p = "drawElementsInstanced");
    else if (
      ((_ = e.get("ANGLE_instanced_arrays")),
      (p = "drawElementsInstancedANGLE"),
      _ === null)
    ) {
      console.error(
        "THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
      );
      return;
    }
    _[p](r, m, o, d * l, g), t.update(m, r, g);
  }
  (this.setMode = a),
    (this.setIndex = c),
    (this.render = h),
    (this.renderInstances = u);
}
function sp(s) {
  const e = { geometries: 0, textures: 0 },
    t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  function n(r, a, o) {
    switch ((t.calls++, a)) {
      case s.TRIANGLES:
        t.triangles += o * (r / 3);
        break;
      case s.LINES:
        t.lines += o * (r / 2);
        break;
      case s.LINE_STRIP:
        t.lines += o * (r - 1);
        break;
      case s.LINE_LOOP:
        t.lines += o * r;
        break;
      case s.POINTS:
        t.points += o * r;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", a);
        break;
    }
  }
  function i() {
    (t.calls = 0), (t.triangles = 0), (t.points = 0), (t.lines = 0);
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: i,
    update: n,
  };
}
function rp(s, e) {
  return s[0] - e[0];
}
function ap(s, e) {
  return Math.abs(e[1]) - Math.abs(s[1]);
}
function op(s, e, t) {
  const n = {},
    i = new Float32Array(8),
    r = new WeakMap(),
    a = new $e(),
    o = [];
  for (let c = 0; c < 8; c++) o[c] = [c, 0];
  function l(c, h, u) {
    const d = c.morphTargetInfluences;
    if (e.isWebGL2 === !0) {
      const g =
          h.morphAttributes.position ||
          h.morphAttributes.normal ||
          h.morphAttributes.color,
        _ = g !== void 0 ? g.length : 0;
      let p = r.get(h);
      if (p === void 0 || p.count !== _) {
        let F = function () {
          $.dispose(), r.delete(h), h.removeEventListener("dispose", F);
        };
        var m = F;
        p !== void 0 && p.texture.dispose();
        const M = h.morphAttributes.position !== void 0,
          S = h.morphAttributes.normal !== void 0,
          b = h.morphAttributes.color !== void 0,
          L = h.morphAttributes.position || [],
          w = h.morphAttributes.normal || [],
          I = h.morphAttributes.color || [];
        let v = 0;
        M === !0 && (v = 1), S === !0 && (v = 2), b === !0 && (v = 3);
        let T = h.attributes.position.count * v,
          G = 1;
        T > e.maxTextureSize &&
          ((G = Math.ceil(T / e.maxTextureSize)), (T = e.maxTextureSize));
        const j = new Float32Array(T * G * 4 * _),
          $ = new Xl(j, T, G, _);
        ($.type = Ht), ($.needsUpdate = !0);
        const C = v * 4;
        for (let V = 0; V < _; V++) {
          const Y = L[V],
            ee = w[V],
            Z = I[V],
            q = T * G * 4 * V;
          for (let U = 0; U < Y.count; U++) {
            const H = U * C;
            M === !0 &&
              (a.fromBufferAttribute(Y, U),
              (j[q + H + 0] = a.x),
              (j[q + H + 1] = a.y),
              (j[q + H + 2] = a.z),
              (j[q + H + 3] = 0)),
              S === !0 &&
                (a.fromBufferAttribute(ee, U),
                (j[q + H + 4] = a.x),
                (j[q + H + 5] = a.y),
                (j[q + H + 6] = a.z),
                (j[q + H + 7] = 0)),
              b === !0 &&
                (a.fromBufferAttribute(Z, U),
                (j[q + H + 8] = a.x),
                (j[q + H + 9] = a.y),
                (j[q + H + 10] = a.z),
                (j[q + H + 11] = Z.itemSize === 4 ? a.w : 1));
          }
        }
        (p = { count: _, texture: $, size: new Re(T, G) }),
          r.set(h, p),
          h.addEventListener("dispose", F);
      }
      let f = 0;
      for (let M = 0; M < d.length; M++) f += d[M];
      const y = h.morphTargetsRelative ? 1 : 1 - f;
      u.getUniforms().setValue(s, "morphTargetBaseInfluence", y),
        u.getUniforms().setValue(s, "morphTargetInfluences", d),
        u.getUniforms().setValue(s, "morphTargetsTexture", p.texture, t),
        u.getUniforms().setValue(s, "morphTargetsTextureSize", p.size);
    } else {
      const g = d === void 0 ? 0 : d.length;
      let _ = n[h.id];
      if (_ === void 0 || _.length !== g) {
        _ = [];
        for (let S = 0; S < g; S++) _[S] = [S, 0];
        n[h.id] = _;
      }
      for (let S = 0; S < g; S++) {
        const b = _[S];
        (b[0] = S), (b[1] = d[S]);
      }
      _.sort(ap);
      for (let S = 0; S < 8; S++)
        S < g && _[S][1]
          ? ((o[S][0] = _[S][0]), (o[S][1] = _[S][1]))
          : ((o[S][0] = Number.MAX_SAFE_INTEGER), (o[S][1] = 0));
      o.sort(rp);
      const p = h.morphAttributes.position,
        f = h.morphAttributes.normal;
      let y = 0;
      for (let S = 0; S < 8; S++) {
        const b = o[S],
          L = b[0],
          w = b[1];
        L !== Number.MAX_SAFE_INTEGER && w
          ? (p &&
              h.getAttribute("morphTarget" + S) !== p[L] &&
              h.setAttribute("morphTarget" + S, p[L]),
            f &&
              h.getAttribute("morphNormal" + S) !== f[L] &&
              h.setAttribute("morphNormal" + S, f[L]),
            (i[S] = w),
            (y += w))
          : (p &&
              h.hasAttribute("morphTarget" + S) === !0 &&
              h.deleteAttribute("morphTarget" + S),
            f &&
              h.hasAttribute("morphNormal" + S) === !0 &&
              h.deleteAttribute("morphNormal" + S),
            (i[S] = 0));
      }
      const M = h.morphTargetsRelative ? 1 : 1 - y;
      u.getUniforms().setValue(s, "morphTargetBaseInfluence", M),
        u.getUniforms().setValue(s, "morphTargetInfluences", i);
    }
  }
  return { update: l };
}
function lp(s, e, t, n) {
  let i = new WeakMap();
  function r(l) {
    const c = n.render.frame,
      h = l.geometry,
      u = e.get(l, h);
    if (
      (i.get(u) !== c && (e.update(u), i.set(u, c)),
      l.isInstancedMesh &&
        (l.hasEventListener("dispose", o) === !1 &&
          l.addEventListener("dispose", o),
        i.get(l) !== c &&
          (t.update(l.instanceMatrix, s.ARRAY_BUFFER),
          l.instanceColor !== null && t.update(l.instanceColor, s.ARRAY_BUFFER),
          i.set(l, c))),
      l.isSkinnedMesh)
    ) {
      const d = l.skeleton;
      i.get(d) !== c && (d.update(), i.set(d, c));
    }
    return u;
  }
  function a() {
    i = new WeakMap();
  }
  function o(l) {
    const c = l.target;
    c.removeEventListener("dispose", o),
      t.remove(c.instanceMatrix),
      c.instanceColor !== null && t.remove(c.instanceColor);
  }
  return { update: r, dispose: a };
}
const tc = new _t(),
  nc = new Xl(),
  ic = new Yh(),
  sc = new na(),
  Fo = [],
  Oo = [],
  Bo = new Float32Array(16),
  Ho = new Float32Array(9),
  zo = new Float32Array(4);
function Ii(s, e, t) {
  const n = s[0];
  if (n <= 0 || n > 0) return s;
  const i = e * t;
  let r = Fo[i];
  if ((r === void 0 && ((r = new Float32Array(i)), (Fo[i] = r)), e !== 0)) {
    n.toArray(r, 0);
    for (let a = 1, o = 0; a !== e; ++a) (o += t), s[a].toArray(r, o);
  }
  return r;
}
function ct(s, e) {
  if (s.length !== e.length) return !1;
  for (let t = 0, n = s.length; t < n; t++) if (s[t] !== e[t]) return !1;
  return !0;
}
function ht(s, e) {
  for (let t = 0, n = e.length; t < n; t++) s[t] = e[t];
}
function js(s, e) {
  let t = Oo[e];
  t === void 0 && ((t = new Int32Array(e)), (Oo[e] = t));
  for (let n = 0; n !== e; ++n) t[n] = s.allocateTextureUnit();
  return t;
}
function cp(s, e) {
  const t = this.cache;
  t[0] !== e && (s.uniform1f(this.addr, e), (t[0] = e));
}
function hp(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (s.uniform2f(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (ct(t, e)) return;
    s.uniform2fv(this.addr, e), ht(t, e);
  }
}
function up(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (s.uniform3f(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) &&
      (s.uniform3f(this.addr, e.r, e.g, e.b),
      (t[0] = e.r),
      (t[1] = e.g),
      (t[2] = e.b));
  else {
    if (ct(t, e)) return;
    s.uniform3fv(this.addr, e), ht(t, e);
  }
}
function dp(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (s.uniform4f(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (ct(t, e)) return;
    s.uniform4fv(this.addr, e), ht(t, e);
  }
}
function fp(s, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (ct(t, e)) return;
    s.uniformMatrix2fv(this.addr, !1, e), ht(t, e);
  } else {
    if (ct(t, n)) return;
    zo.set(n), s.uniformMatrix2fv(this.addr, !1, zo), ht(t, n);
  }
}
function pp(s, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (ct(t, e)) return;
    s.uniformMatrix3fv(this.addr, !1, e), ht(t, e);
  } else {
    if (ct(t, n)) return;
    Ho.set(n), s.uniformMatrix3fv(this.addr, !1, Ho), ht(t, n);
  }
}
function mp(s, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (ct(t, e)) return;
    s.uniformMatrix4fv(this.addr, !1, e), ht(t, e);
  } else {
    if (ct(t, n)) return;
    Bo.set(n), s.uniformMatrix4fv(this.addr, !1, Bo), ht(t, n);
  }
}
function gp(s, e) {
  const t = this.cache;
  t[0] !== e && (s.uniform1i(this.addr, e), (t[0] = e));
}
function _p(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (s.uniform2i(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (ct(t, e)) return;
    s.uniform2iv(this.addr, e), ht(t, e);
  }
}
function xp(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (s.uniform3i(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else {
    if (ct(t, e)) return;
    s.uniform3iv(this.addr, e), ht(t, e);
  }
}
function vp(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (s.uniform4i(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (ct(t, e)) return;
    s.uniform4iv(this.addr, e), ht(t, e);
  }
}
function Mp(s, e) {
  const t = this.cache;
  t[0] !== e && (s.uniform1ui(this.addr, e), (t[0] = e));
}
function yp(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (s.uniform2ui(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (ct(t, e)) return;
    s.uniform2uiv(this.addr, e), ht(t, e);
  }
}
function Ep(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (s.uniform3ui(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else {
    if (ct(t, e)) return;
    s.uniform3uiv(this.addr, e), ht(t, e);
  }
}
function Sp(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (s.uniform4ui(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (ct(t, e)) return;
    s.uniform4uiv(this.addr, e), ht(t, e);
  }
}
function Tp(s, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), (n[0] = i)),
    t.setTexture2D(e || tc, i);
}
function Ap(s, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), (n[0] = i)),
    t.setTexture3D(e || ic, i);
}
function bp(s, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), (n[0] = i)),
    t.setTextureCube(e || sc, i);
}
function wp(s, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), (n[0] = i)),
    t.setTexture2DArray(e || nc, i);
}
function Rp(s) {
  switch (s) {
    case 5126:
      return cp;
    case 35664:
      return hp;
    case 35665:
      return up;
    case 35666:
      return dp;
    case 35674:
      return fp;
    case 35675:
      return pp;
    case 35676:
      return mp;
    case 5124:
    case 35670:
      return gp;
    case 35667:
    case 35671:
      return _p;
    case 35668:
    case 35672:
      return xp;
    case 35669:
    case 35673:
      return vp;
    case 5125:
      return Mp;
    case 36294:
      return yp;
    case 36295:
      return Ep;
    case 36296:
      return Sp;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Tp;
    case 35679:
    case 36299:
    case 36307:
      return Ap;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return bp;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return wp;
  }
}
function Cp(s, e) {
  s.uniform1fv(this.addr, e);
}
function Lp(s, e) {
  const t = Ii(e, this.size, 2);
  s.uniform2fv(this.addr, t);
}
function Pp(s, e) {
  const t = Ii(e, this.size, 3);
  s.uniform3fv(this.addr, t);
}
function Dp(s, e) {
  const t = Ii(e, this.size, 4);
  s.uniform4fv(this.addr, t);
}
function Ip(s, e) {
  const t = Ii(e, this.size, 4);
  s.uniformMatrix2fv(this.addr, !1, t);
}
function Up(s, e) {
  const t = Ii(e, this.size, 9);
  s.uniformMatrix3fv(this.addr, !1, t);
}
function Np(s, e) {
  const t = Ii(e, this.size, 16);
  s.uniformMatrix4fv(this.addr, !1, t);
}
function Fp(s, e) {
  s.uniform1iv(this.addr, e);
}
function Op(s, e) {
  s.uniform2iv(this.addr, e);
}
function Bp(s, e) {
  s.uniform3iv(this.addr, e);
}
function Hp(s, e) {
  s.uniform4iv(this.addr, e);
}
function zp(s, e) {
  s.uniform1uiv(this.addr, e);
}
function kp(s, e) {
  s.uniform2uiv(this.addr, e);
}
function Gp(s, e) {
  s.uniform3uiv(this.addr, e);
}
function Vp(s, e) {
  s.uniform4uiv(this.addr, e);
}
function Wp(s, e, t) {
  const n = this.cache,
    i = e.length,
    r = js(t, i);
  ct(n, r) || (s.uniform1iv(this.addr, r), ht(n, r));
  for (let a = 0; a !== i; ++a) t.setTexture2D(e[a] || tc, r[a]);
}
function Xp(s, e, t) {
  const n = this.cache,
    i = e.length,
    r = js(t, i);
  ct(n, r) || (s.uniform1iv(this.addr, r), ht(n, r));
  for (let a = 0; a !== i; ++a) t.setTexture3D(e[a] || ic, r[a]);
}
function Yp(s, e, t) {
  const n = this.cache,
    i = e.length,
    r = js(t, i);
  ct(n, r) || (s.uniform1iv(this.addr, r), ht(n, r));
  for (let a = 0; a !== i; ++a) t.setTextureCube(e[a] || sc, r[a]);
}
function jp(s, e, t) {
  const n = this.cache,
    i = e.length,
    r = js(t, i);
  ct(n, r) || (s.uniform1iv(this.addr, r), ht(n, r));
  for (let a = 0; a !== i; ++a) t.setTexture2DArray(e[a] || nc, r[a]);
}
function qp(s) {
  switch (s) {
    case 5126:
      return Cp;
    case 35664:
      return Lp;
    case 35665:
      return Pp;
    case 35666:
      return Dp;
    case 35674:
      return Ip;
    case 35675:
      return Up;
    case 35676:
      return Np;
    case 5124:
    case 35670:
      return Fp;
    case 35667:
    case 35671:
      return Op;
    case 35668:
    case 35672:
      return Bp;
    case 35669:
    case 35673:
      return Hp;
    case 5125:
      return zp;
    case 36294:
      return kp;
    case 36295:
      return Gp;
    case 36296:
      return Vp;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Wp;
    case 35679:
    case 36299:
    case 36307:
      return Xp;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Yp;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return jp;
  }
}
class $p {
  constructor(e, t, n) {
    (this.id = e),
      (this.addr = n),
      (this.cache = []),
      (this.setValue = Rp(t.type));
  }
}
class Kp {
  constructor(e, t, n) {
    (this.id = e),
      (this.addr = n),
      (this.cache = []),
      (this.size = t.size),
      (this.setValue = qp(t.type));
  }
}
class Zp {
  constructor(e) {
    (this.id = e), (this.seq = []), (this.map = {});
  }
  setValue(e, t, n) {
    const i = this.seq;
    for (let r = 0, a = i.length; r !== a; ++r) {
      const o = i[r];
      o.setValue(e, t[o.id], n);
    }
  }
}
const Ar = /(\w+)(\])?(\[|\.)?/g;
function ko(s, e) {
  s.seq.push(e), (s.map[e.id] = e);
}
function Jp(s, e, t) {
  const n = s.name,
    i = n.length;
  for (Ar.lastIndex = 0; ; ) {
    const r = Ar.exec(n),
      a = Ar.lastIndex;
    let o = r[1];
    const l = r[2] === "]",
      c = r[3];
    if ((l && (o = o | 0), c === void 0 || (c === "[" && a + 2 === i))) {
      ko(t, c === void 0 ? new $p(o, s, e) : new Kp(o, s, e));
      break;
    } else {
      let u = t.map[o];
      u === void 0 && ((u = new Zp(o)), ko(t, u)), (t = u);
    }
  }
}
class Ns {
  constructor(e, t) {
    (this.seq = []), (this.map = {});
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let i = 0; i < n; ++i) {
      const r = e.getActiveUniform(t, i),
        a = e.getUniformLocation(t, r.name);
      Jp(r, a, this);
    }
  }
  setValue(e, t, n, i) {
    const r = this.map[t];
    r !== void 0 && r.setValue(e, n, i);
  }
  setOptional(e, t, n) {
    const i = t[n];
    i !== void 0 && this.setValue(e, n, i);
  }
  static upload(e, t, n, i) {
    for (let r = 0, a = t.length; r !== a; ++r) {
      const o = t[r],
        l = n[o.id];
      l.needsUpdate !== !1 && o.setValue(e, l.value, i);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let i = 0, r = e.length; i !== r; ++i) {
      const a = e[i];
      a.id in t && n.push(a);
    }
    return n;
  }
}
function Go(s, e, t) {
  const n = s.createShader(e);
  return s.shaderSource(n, t), s.compileShader(n), n;
}
const Qp = 37297;
let em = 0;
function tm(s, e) {
  const t = s.split(`
`),
    n = [],
    i = Math.max(e - 6, 0),
    r = Math.min(e + 6, t.length);
  for (let a = i; a < r; a++) {
    const o = a + 1;
    n.push(`${o === e ? ">" : " "} ${o}: ${t[a]}`);
  }
  return n.join(`
`);
}
function nm(s) {
  const e = Ye.getPrimaries(Ye.workingColorSpace),
    t = Ye.getPrimaries(s);
  let n;
  switch (
    (e === t
      ? (n = "")
      : e === ks && t === zs
      ? (n = "LinearDisplayP3ToLinearSRGB")
      : e === zs && t === ks && (n = "LinearSRGBToLinearDisplayP3"),
    s)
  ) {
    case gt:
    case Xs:
      return [n, "LinearTransferOETF"];
    case et:
    case ea:
      return [n, "sRGBTransferOETF"];
    default:
      return (
        console.warn("THREE.WebGLProgram: Unsupported color space:", s),
        [n, "LinearTransferOETF"]
      );
  }
}
function Vo(s, e, t) {
  const n = s.getShaderParameter(e, s.COMPILE_STATUS),
    i = s.getShaderInfoLog(e).trim();
  if (n && i === "") return "";
  const r = /ERROR: 0:(\d+)/.exec(i);
  if (r) {
    const a = parseInt(r[1]);
    return (
      t.toUpperCase() +
      `

` +
      i +
      `

` +
      tm(s.getShaderSource(e), a)
    );
  } else return i;
}
function im(s, e) {
  const t = nm(e);
  return `vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`;
}
function sm(s, e) {
  let t;
  switch (e) {
    case eh:
      t = "Linear";
      break;
    case th:
      t = "Reinhard";
      break;
    case nh:
      t = "OptimizedCineon";
      break;
    case ih:
      t = "ACESFilmic";
      break;
    case sh:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e),
        (t = "Linear");
  }
  return (
    "vec3 " + s + "( vec3 color ) { return " + t + "ToneMapping( color ); }"
  );
}
function rm(s) {
  return [
    s.extensionDerivatives ||
    s.envMapCubeUVHeight ||
    s.bumpMap ||
    s.normalMapTangentSpace ||
    s.clearcoatNormalMap ||
    s.flatShading ||
    s.shaderID === "physical"
      ? "#extension GL_OES_standard_derivatives : enable"
      : "",
    (s.extensionFragDepth || s.logarithmicDepthBuffer) &&
    s.rendererExtensionFragDepth
      ? "#extension GL_EXT_frag_depth : enable"
      : "",
    s.extensionDrawBuffers && s.rendererExtensionDrawBuffers
      ? "#extension GL_EXT_draw_buffers : require"
      : "",
    (s.extensionShaderTextureLOD || s.envMap || s.transmission) &&
    s.rendererExtensionShaderTextureLod
      ? "#extension GL_EXT_shader_texture_lod : enable"
      : "",
  ].filter(Xi).join(`
`);
}
function am(s) {
  const e = [];
  for (const t in s) {
    const n = s[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function om(s, e) {
  const t = {},
    n = s.getProgramParameter(e, s.ACTIVE_ATTRIBUTES);
  for (let i = 0; i < n; i++) {
    const r = s.getActiveAttrib(e, i),
      a = r.name;
    let o = 1;
    r.type === s.FLOAT_MAT2 && (o = 2),
      r.type === s.FLOAT_MAT3 && (o = 3),
      r.type === s.FLOAT_MAT4 && (o = 4),
      (t[a] = {
        type: r.type,
        location: s.getAttribLocation(e, a),
        locationSize: o,
      });
  }
  return t;
}
function Xi(s) {
  return s !== "";
}
function Wo(s, e) {
  const t =
    e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return s
    .replace(/NUM_DIR_LIGHTS/g, e.numDirLights)
    .replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights)
    .replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps)
    .replace(/NUM_SPOT_LIGHT_COORDS/g, t)
    .replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights)
    .replace(/NUM_POINT_LIGHTS/g, e.numPointLights)
    .replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
    .replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows)
    .replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps)
    .replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows)
    .replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function Xo(s, e) {
  return s
    .replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes)
    .replace(
      /UNION_CLIPPING_PLANES/g,
      e.numClippingPlanes - e.numClipIntersection
    );
}
const lm = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Xr(s) {
  return s.replace(lm, hm);
}
const cm = new Map([
  ["encodings_fragment", "colorspace_fragment"],
  ["encodings_pars_fragment", "colorspace_pars_fragment"],
  ["output_fragment", "opaque_fragment"],
]);
function hm(s, e) {
  let t = Fe[e];
  if (t === void 0) {
    const n = cm.get(e);
    if (n !== void 0)
      (t = Fe[n]),
        console.warn(
          'THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',
          e,
          n
        );
    else throw new Error("Can not resolve #include <" + e + ">");
  }
  return Xr(t);
}
const um =
  /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Yo(s) {
  return s.replace(um, dm);
}
function dm(s, e, t, n) {
  let i = "";
  for (let r = parseInt(e); r < parseInt(t); r++)
    i += n
      .replace(/\[\s*i\s*\]/g, "[ " + r + " ]")
      .replace(/UNROLLED_LOOP_INDEX/g, r);
  return i;
}
function jo(s) {
  let e =
    "precision " +
    s.precision +
    ` float;
precision ` +
    s.precision +
    " int;";
  return (
    s.precision === "highp"
      ? (e += `
#define HIGH_PRECISION`)
      : s.precision === "mediump"
      ? (e += `
#define MEDIUM_PRECISION`)
      : s.precision === "lowp" &&
        (e += `
#define LOW_PRECISION`),
    e
  );
}
function fm(s) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return (
    s.shadowMapType === wl
      ? (e = "SHADOWMAP_TYPE_PCF")
      : s.shadowMapType === Rc
      ? (e = "SHADOWMAP_TYPE_PCF_SOFT")
      : s.shadowMapType === fn && (e = "SHADOWMAP_TYPE_VSM"),
    e
  );
}
function pm(s) {
  let e = "ENVMAP_TYPE_CUBE";
  if (s.envMap)
    switch (s.envMapMode) {
      case yi:
      case Ei:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case Ws:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function mm(s) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (s.envMap)
    switch (s.envMapMode) {
      case Ei:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function gm(s) {
  let e = "ENVMAP_BLENDING_NONE";
  if (s.envMap)
    switch (s.combine) {
      case Rl:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case Jc:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case Qc:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function _m(s) {
  const e = s.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2,
    n = 1 / e;
  return {
    texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)),
    texelHeight: n,
    maxMip: t,
  };
}
function xm(s, e, t, n) {
  const i = s.getContext(),
    r = t.defines;
  let a = t.vertexShader,
    o = t.fragmentShader;
  const l = fm(t),
    c = pm(t),
    h = mm(t),
    u = gm(t),
    d = _m(t),
    m = t.isWebGL2 ? "" : rm(t),
    g = am(r),
    _ = i.createProgram();
  let p,
    f,
    y = t.glslVersion
      ? "#version " +
        t.glslVersion +
        `
`
      : "";
  t.isRawShaderMaterial
    ? ((p = [
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        g,
      ].filter(Xi).join(`
`)),
      p.length > 0 &&
        (p += `
`),
      (f = [
        m,
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        g,
      ].filter(Xi).join(`
`)),
      f.length > 0 &&
        (f += `
`))
    : ((p = [
        jo(t),
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        g,
        t.instancing ? "#define USE_INSTANCING" : "",
        t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
        t.useFog && t.fog ? "#define USE_FOG" : "",
        t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
        t.map ? "#define USE_MAP" : "",
        t.envMap ? "#define USE_ENVMAP" : "",
        t.envMap ? "#define " + h : "",
        t.lightMap ? "#define USE_LIGHTMAP" : "",
        t.aoMap ? "#define USE_AOMAP" : "",
        t.bumpMap ? "#define USE_BUMPMAP" : "",
        t.normalMap ? "#define USE_NORMALMAP" : "",
        t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
        t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
        t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
        t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        t.anisotropy ? "#define USE_ANISOTROPY" : "",
        t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
        t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        t.specularMap ? "#define USE_SPECULARMAP" : "",
        t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
        t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
        t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        t.metalnessMap ? "#define USE_METALNESSMAP" : "",
        t.alphaMap ? "#define USE_ALPHAMAP" : "",
        t.alphaHash ? "#define USE_ALPHAHASH" : "",
        t.transmission ? "#define USE_TRANSMISSION" : "",
        t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
        t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
        t.mapUv ? "#define MAP_UV " + t.mapUv : "",
        t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "",
        t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "",
        t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "",
        t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "",
        t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "",
        t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "",
        t.displacementMapUv
          ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv
          : "",
        t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "",
        t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "",
        t.anisotropyMapUv
          ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv
          : "",
        t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "",
        t.clearcoatNormalMapUv
          ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv
          : "",
        t.clearcoatRoughnessMapUv
          ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv
          : "",
        t.iridescenceMapUv
          ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv
          : "",
        t.iridescenceThicknessMapUv
          ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv
          : "",
        t.sheenColorMapUv
          ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv
          : "",
        t.sheenRoughnessMapUv
          ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv
          : "",
        t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "",
        t.specularColorMapUv
          ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv
          : "",
        t.specularIntensityMapUv
          ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv
          : "",
        t.transmissionMapUv
          ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv
          : "",
        t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "",
        t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
        t.vertexColors ? "#define USE_COLOR" : "",
        t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        t.vertexUv1s ? "#define USE_UV1" : "",
        t.vertexUv2s ? "#define USE_UV2" : "",
        t.vertexUv3s ? "#define USE_UV3" : "",
        t.pointsUvs ? "#define USE_POINTS_UV" : "",
        t.flatShading ? "#define FLAT_SHADED" : "",
        t.skinning ? "#define USE_SKINNING" : "",
        t.morphTargets ? "#define USE_MORPHTARGETS" : "",
        t.morphNormals && t.flatShading === !1
          ? "#define USE_MORPHNORMALS"
          : "",
        t.morphColors && t.isWebGL2 ? "#define USE_MORPHCOLORS" : "",
        t.morphTargetsCount > 0 && t.isWebGL2
          ? "#define MORPHTARGETS_TEXTURE"
          : "",
        t.morphTargetsCount > 0 && t.isWebGL2
          ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride
          : "",
        t.morphTargetsCount > 0 && t.isWebGL2
          ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount
          : "",
        t.doubleSided ? "#define DOUBLE_SIDED" : "",
        t.flipSided ? "#define FLIP_SIDED" : "",
        t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        t.shadowMapEnabled ? "#define " + l : "",
        t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
        t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
        t.useLegacyLights ? "#define LEGACY_LIGHTS" : "",
        t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        t.logarithmicDepthBuffer && t.rendererExtensionFragDepth
          ? "#define USE_LOGDEPTHBUF_EXT"
          : "",
        "uniform mat4 modelMatrix;",
        "uniform mat4 modelViewMatrix;",
        "uniform mat4 projectionMatrix;",
        "uniform mat4 viewMatrix;",
        "uniform mat3 normalMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        "#ifdef USE_INSTANCING",
        "	attribute mat4 instanceMatrix;",
        "#endif",
        "#ifdef USE_INSTANCING_COLOR",
        "	attribute vec3 instanceColor;",
        "#endif",
        "attribute vec3 position;",
        "attribute vec3 normal;",
        "attribute vec2 uv;",
        "#ifdef USE_UV1",
        "	attribute vec2 uv1;",
        "#endif",
        "#ifdef USE_UV2",
        "	attribute vec2 uv2;",
        "#endif",
        "#ifdef USE_UV3",
        "	attribute vec2 uv3;",
        "#endif",
        "#ifdef USE_TANGENT",
        "	attribute vec4 tangent;",
        "#endif",
        "#if defined( USE_COLOR_ALPHA )",
        "	attribute vec4 color;",
        "#elif defined( USE_COLOR )",
        "	attribute vec3 color;",
        "#endif",
        "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )",
        "	attribute vec3 morphTarget0;",
        "	attribute vec3 morphTarget1;",
        "	attribute vec3 morphTarget2;",
        "	attribute vec3 morphTarget3;",
        "	#ifdef USE_MORPHNORMALS",
        "		attribute vec3 morphNormal0;",
        "		attribute vec3 morphNormal1;",
        "		attribute vec3 morphNormal2;",
        "		attribute vec3 morphNormal3;",
        "	#else",
        "		attribute vec3 morphTarget4;",
        "		attribute vec3 morphTarget5;",
        "		attribute vec3 morphTarget6;",
        "		attribute vec3 morphTarget7;",
        "	#endif",
        "#endif",
        "#ifdef USE_SKINNING",
        "	attribute vec4 skinIndex;",
        "	attribute vec4 skinWeight;",
        "#endif",
        `
`,
      ].filter(Xi).join(`
`)),
      (f = [
        m,
        jo(t),
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        g,
        t.useFog && t.fog ? "#define USE_FOG" : "",
        t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
        t.map ? "#define USE_MAP" : "",
        t.matcap ? "#define USE_MATCAP" : "",
        t.envMap ? "#define USE_ENVMAP" : "",
        t.envMap ? "#define " + c : "",
        t.envMap ? "#define " + h : "",
        t.envMap ? "#define " + u : "",
        d ? "#define CUBEUV_TEXEL_WIDTH " + d.texelWidth : "",
        d ? "#define CUBEUV_TEXEL_HEIGHT " + d.texelHeight : "",
        d ? "#define CUBEUV_MAX_MIP " + d.maxMip + ".0" : "",
        t.lightMap ? "#define USE_LIGHTMAP" : "",
        t.aoMap ? "#define USE_AOMAP" : "",
        t.bumpMap ? "#define USE_BUMPMAP" : "",
        t.normalMap ? "#define USE_NORMALMAP" : "",
        t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
        t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
        t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        t.anisotropy ? "#define USE_ANISOTROPY" : "",
        t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
        t.clearcoat ? "#define USE_CLEARCOAT" : "",
        t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        t.iridescence ? "#define USE_IRIDESCENCE" : "",
        t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        t.specularMap ? "#define USE_SPECULARMAP" : "",
        t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
        t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
        t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        t.metalnessMap ? "#define USE_METALNESSMAP" : "",
        t.alphaMap ? "#define USE_ALPHAMAP" : "",
        t.alphaTest ? "#define USE_ALPHATEST" : "",
        t.alphaHash ? "#define USE_ALPHAHASH" : "",
        t.sheen ? "#define USE_SHEEN" : "",
        t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
        t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
        t.transmission ? "#define USE_TRANSMISSION" : "",
        t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
        t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "",
        t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        t.vertexUv1s ? "#define USE_UV1" : "",
        t.vertexUv2s ? "#define USE_UV2" : "",
        t.vertexUv3s ? "#define USE_UV3" : "",
        t.pointsUvs ? "#define USE_POINTS_UV" : "",
        t.gradientMap ? "#define USE_GRADIENTMAP" : "",
        t.flatShading ? "#define FLAT_SHADED" : "",
        t.doubleSided ? "#define DOUBLE_SIDED" : "",
        t.flipSided ? "#define FLIP_SIDED" : "",
        t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        t.shadowMapEnabled ? "#define " + l : "",
        t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
        t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
        t.useLegacyLights ? "#define LEGACY_LIGHTS" : "",
        t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
        t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        t.logarithmicDepthBuffer && t.rendererExtensionFragDepth
          ? "#define USE_LOGDEPTHBUF_EXT"
          : "",
        "uniform mat4 viewMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        t.toneMapping !== Cn ? "#define TONE_MAPPING" : "",
        t.toneMapping !== Cn ? Fe.tonemapping_pars_fragment : "",
        t.toneMapping !== Cn ? sm("toneMapping", t.toneMapping) : "",
        t.dithering ? "#define DITHERING" : "",
        t.opaque ? "#define OPAQUE" : "",
        Fe.colorspace_pars_fragment,
        im("linearToOutputTexel", t.outputColorSpace),
        t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
        `
`,
      ].filter(Xi).join(`
`))),
    (a = Xr(a)),
    (a = Wo(a, t)),
    (a = Xo(a, t)),
    (o = Xr(o)),
    (o = Wo(o, t)),
    (o = Xo(o, t)),
    (a = Yo(a)),
    (o = Yo(o)),
    t.isWebGL2 &&
      t.isRawShaderMaterial !== !0 &&
      ((y = `#version 300 es
`),
      (p =
        [
          "precision mediump sampler2DArray;",
          "#define attribute in",
          "#define varying out",
          "#define texture2D texture",
        ].join(`
`) +
        `
` +
        p),
      (f =
        [
          "precision mediump sampler2DArray;",
          "#define varying in",
          t.glslVersion === ho
            ? ""
            : "layout(location = 0) out highp vec4 pc_fragColor;",
          t.glslVersion === ho ? "" : "#define gl_FragColor pc_fragColor",
          "#define gl_FragDepthEXT gl_FragDepth",
          "#define texture2D texture",
          "#define textureCube texture",
          "#define texture2DProj textureProj",
          "#define texture2DLodEXT textureLod",
          "#define texture2DProjLodEXT textureProjLod",
          "#define textureCubeLodEXT textureLod",
          "#define texture2DGradEXT textureGrad",
          "#define texture2DProjGradEXT textureProjGrad",
          "#define textureCubeGradEXT textureGrad",
        ].join(`
`) +
        `
` +
        f));
  const M = y + p + a,
    S = y + f + o,
    b = Go(i, i.VERTEX_SHADER, M),
    L = Go(i, i.FRAGMENT_SHADER, S);
  i.attachShader(_, b),
    i.attachShader(_, L),
    t.index0AttributeName !== void 0
      ? i.bindAttribLocation(_, 0, t.index0AttributeName)
      : t.morphTargets === !0 && i.bindAttribLocation(_, 0, "position"),
    i.linkProgram(_);
  function w(G) {
    if (s.debug.checkShaderErrors) {
      const j = i.getProgramInfoLog(_).trim(),
        $ = i.getShaderInfoLog(b).trim(),
        C = i.getShaderInfoLog(L).trim();
      let F = !0,
        V = !0;
      if (i.getProgramParameter(_, i.LINK_STATUS) === !1)
        if (((F = !1), typeof s.debug.onShaderError == "function"))
          s.debug.onShaderError(i, _, b, L);
        else {
          const Y = Vo(i, b, "vertex"),
            ee = Vo(i, L, "fragment");
          console.error(
            "THREE.WebGLProgram: Shader Error " +
              i.getError() +
              " - VALIDATE_STATUS " +
              i.getProgramParameter(_, i.VALIDATE_STATUS) +
              `

Program Info Log: ` +
              j +
              `
` +
              Y +
              `
` +
              ee
          );
        }
      else
        j !== ""
          ? console.warn("THREE.WebGLProgram: Program Info Log:", j)
          : ($ === "" || C === "") && (V = !1);
      V &&
        (G.diagnostics = {
          runnable: F,
          programLog: j,
          vertexShader: { log: $, prefix: p },
          fragmentShader: { log: C, prefix: f },
        });
    }
    i.deleteShader(b), i.deleteShader(L), (I = new Ns(i, _)), (v = om(i, _));
  }
  let I;
  this.getUniforms = function () {
    return I === void 0 && w(this), I;
  };
  let v;
  this.getAttributes = function () {
    return v === void 0 && w(this), v;
  };
  let T = t.rendererExtensionParallelShaderCompile === !1;
  return (
    (this.isReady = function () {
      return T === !1 && (T = i.getProgramParameter(_, Qp)), T;
    }),
    (this.destroy = function () {
      n.releaseStatesOfProgram(this),
        i.deleteProgram(_),
        (this.program = void 0);
    }),
    (this.type = t.shaderType),
    (this.name = t.shaderName),
    (this.id = em++),
    (this.cacheKey = e),
    (this.usedTimes = 1),
    (this.program = _),
    (this.vertexShader = b),
    (this.fragmentShader = L),
    this
  );
}
let vm = 0;
class Mm {
  constructor() {
    (this.shaderCache = new Map()), (this.materialCache = new Map());
  }
  update(e) {
    const t = e.vertexShader,
      n = e.fragmentShader,
      i = this._getShaderStage(t),
      r = this._getShaderStage(n),
      a = this._getShaderCacheForMaterial(e);
    return (
      a.has(i) === !1 && (a.add(i), i.usedTimes++),
      a.has(r) === !1 && (a.add(r), r.usedTimes++),
      this
    );
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && ((n = new Set()), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && ((n = new ym(e)), t.set(e, n)), n;
  }
}
class ym {
  constructor(e) {
    (this.id = vm++), (this.code = e), (this.usedTimes = 0);
  }
}
function Em(s, e, t, n, i, r, a) {
  const o = new Yl(),
    l = new Mm(),
    c = [],
    h = i.isWebGL2,
    u = i.logarithmicDepthBuffer,
    d = i.vertexTextures;
  let m = i.precision;
  const g = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite",
  };
  function _(v) {
    return v === 0 ? "uv" : `uv${v}`;
  }
  function p(v, T, G, j, $) {
    const C = j.fog,
      F = $.geometry,
      V = v.isMeshStandardMaterial ? j.environment : null,
      Y = (v.isMeshStandardMaterial ? t : e).get(v.envMap || V),
      ee = Y && Y.mapping === Ws ? Y.image.height : null,
      Z = g[v.type];
    v.precision !== null &&
      ((m = i.getMaxPrecision(v.precision)),
      m !== v.precision &&
        console.warn(
          "THREE.WebGLProgram.getParameters:",
          v.precision,
          "not supported, using",
          m,
          "instead."
        ));
    const q =
        F.morphAttributes.position ||
        F.morphAttributes.normal ||
        F.morphAttributes.color,
      U = q !== void 0 ? q.length : 0;
    let H = 0;
    F.morphAttributes.position !== void 0 && (H = 1),
      F.morphAttributes.normal !== void 0 && (H = 2),
      F.morphAttributes.color !== void 0 && (H = 3);
    let ae, he, fe, Se;
    if (Z) {
      const rt = $t[Z];
      (ae = rt.vertexShader), (he = rt.fragmentShader);
    } else
      (ae = v.vertexShader),
        (he = v.fragmentShader),
        l.update(v),
        (fe = l.getVertexShaderID(v)),
        (Se = l.getFragmentShaderID(v));
    const ze = s.getRenderTarget(),
      Te = $.isInstancedMesh === !0,
      Le = !!v.map,
      Ze = !!v.matcap,
      Ne = !!Y,
      O = !!v.aoMap,
      xt = !!v.lightMap,
      ve = !!v.bumpMap,
      Ae = !!v.normalMap,
      be = !!v.displacementMap,
      Qe = !!v.emissiveMap,
      Ie = !!v.metalnessMap,
      Pe = !!v.roughnessMap,
      Xe = v.anisotropy > 0,
      st = v.clearcoat > 0,
      ut = v.iridescence > 0,
      A = v.sheen > 0,
      x = v.transmission > 0,
      B = Xe && !!v.anisotropyMap,
      te = st && !!v.clearcoatMap,
      J = st && !!v.clearcoatNormalMap,
      ne = st && !!v.clearcoatRoughnessMap,
      me = ut && !!v.iridescenceMap,
      re = ut && !!v.iridescenceThicknessMap,
      ce = A && !!v.sheenColorMap,
      R = A && !!v.sheenRoughnessMap,
      se = !!v.specularMap,
      K = !!v.specularColorMap,
      ye = !!v.specularIntensityMap,
      ge = x && !!v.transmissionMap,
      Me = x && !!v.thicknessMap,
      pe = !!v.gradientMap,
      de = !!v.alphaMap,
      ke = v.alphaTest > 0,
      P = !!v.alphaHash,
      oe = !!v.extensions,
      Q = !!F.attributes.uv1,
      X = !!F.attributes.uv2,
      ie = !!F.attributes.uv3;
    let xe = Cn;
    return (
      v.toneMapped &&
        (ze === null || ze.isXRRenderTarget === !0) &&
        (xe = s.toneMapping),
      {
        isWebGL2: h,
        shaderID: Z,
        shaderType: v.type,
        shaderName: v.name,
        vertexShader: ae,
        fragmentShader: he,
        defines: v.defines,
        customVertexShaderID: fe,
        customFragmentShaderID: Se,
        isRawShaderMaterial: v.isRawShaderMaterial === !0,
        glslVersion: v.glslVersion,
        precision: m,
        instancing: Te,
        instancingColor: Te && $.instanceColor !== null,
        supportsVertexTextures: d,
        outputColorSpace:
          ze === null
            ? s.outputColorSpace
            : ze.isXRRenderTarget === !0
            ? ze.texture.colorSpace
            : gt,
        map: Le,
        matcap: Ze,
        envMap: Ne,
        envMapMode: Ne && Y.mapping,
        envMapCubeUVHeight: ee,
        aoMap: O,
        lightMap: xt,
        bumpMap: ve,
        normalMap: Ae,
        displacementMap: d && be,
        emissiveMap: Qe,
        normalMapObjectSpace: Ae && v.normalMapType === vh,
        normalMapTangentSpace: Ae && v.normalMapType === Hl,
        metalnessMap: Ie,
        roughnessMap: Pe,
        anisotropy: Xe,
        anisotropyMap: B,
        clearcoat: st,
        clearcoatMap: te,
        clearcoatNormalMap: J,
        clearcoatRoughnessMap: ne,
        iridescence: ut,
        iridescenceMap: me,
        iridescenceThicknessMap: re,
        sheen: A,
        sheenColorMap: ce,
        sheenRoughnessMap: R,
        specularMap: se,
        specularColorMap: K,
        specularIntensityMap: ye,
        transmission: x,
        transmissionMap: ge,
        thicknessMap: Me,
        gradientMap: pe,
        opaque: v.transparent === !1 && v.blending === xi,
        alphaMap: de,
        alphaTest: ke,
        alphaHash: P,
        combine: v.combine,
        mapUv: Le && _(v.map.channel),
        aoMapUv: O && _(v.aoMap.channel),
        lightMapUv: xt && _(v.lightMap.channel),
        bumpMapUv: ve && _(v.bumpMap.channel),
        normalMapUv: Ae && _(v.normalMap.channel),
        displacementMapUv: be && _(v.displacementMap.channel),
        emissiveMapUv: Qe && _(v.emissiveMap.channel),
        metalnessMapUv: Ie && _(v.metalnessMap.channel),
        roughnessMapUv: Pe && _(v.roughnessMap.channel),
        anisotropyMapUv: B && _(v.anisotropyMap.channel),
        clearcoatMapUv: te && _(v.clearcoatMap.channel),
        clearcoatNormalMapUv: J && _(v.clearcoatNormalMap.channel),
        clearcoatRoughnessMapUv: ne && _(v.clearcoatRoughnessMap.channel),
        iridescenceMapUv: me && _(v.iridescenceMap.channel),
        iridescenceThicknessMapUv: re && _(v.iridescenceThicknessMap.channel),
        sheenColorMapUv: ce && _(v.sheenColorMap.channel),
        sheenRoughnessMapUv: R && _(v.sheenRoughnessMap.channel),
        specularMapUv: se && _(v.specularMap.channel),
        specularColorMapUv: K && _(v.specularColorMap.channel),
        specularIntensityMapUv: ye && _(v.specularIntensityMap.channel),
        transmissionMapUv: ge && _(v.transmissionMap.channel),
        thicknessMapUv: Me && _(v.thicknessMap.channel),
        alphaMapUv: de && _(v.alphaMap.channel),
        vertexTangents: !!F.attributes.tangent && (Ae || Xe),
        vertexColors: v.vertexColors,
        vertexAlphas:
          v.vertexColors === !0 &&
          !!F.attributes.color &&
          F.attributes.color.itemSize === 4,
        vertexUv1s: Q,
        vertexUv2s: X,
        vertexUv3s: ie,
        pointsUvs: $.isPoints === !0 && !!F.attributes.uv && (Le || de),
        fog: !!C,
        useFog: v.fog === !0,
        fogExp2: C && C.isFogExp2,
        flatShading: v.flatShading === !0,
        sizeAttenuation: v.sizeAttenuation === !0,
        logarithmicDepthBuffer: u,
        skinning: $.isSkinnedMesh === !0,
        morphTargets: F.morphAttributes.position !== void 0,
        morphNormals: F.morphAttributes.normal !== void 0,
        morphColors: F.morphAttributes.color !== void 0,
        morphTargetsCount: U,
        morphTextureStride: H,
        numDirLights: T.directional.length,
        numPointLights: T.point.length,
        numSpotLights: T.spot.length,
        numSpotLightMaps: T.spotLightMap.length,
        numRectAreaLights: T.rectArea.length,
        numHemiLights: T.hemi.length,
        numDirLightShadows: T.directionalShadowMap.length,
        numPointLightShadows: T.pointShadowMap.length,
        numSpotLightShadows: T.spotShadowMap.length,
        numSpotLightShadowsWithMaps: T.numSpotLightShadowsWithMaps,
        numLightProbes: T.numLightProbes,
        numClippingPlanes: a.numPlanes,
        numClipIntersection: a.numIntersection,
        dithering: v.dithering,
        shadowMapEnabled: s.shadowMap.enabled && G.length > 0,
        shadowMapType: s.shadowMap.type,
        toneMapping: xe,
        useLegacyLights: s._useLegacyLights,
        decodeVideoTexture:
          Le &&
          v.map.isVideoTexture === !0 &&
          Ye.getTransfer(v.map.colorSpace) === Je,
        premultipliedAlpha: v.premultipliedAlpha,
        doubleSided: v.side === Zt,
        flipSided: v.side === Rt,
        useDepthPacking: v.depthPacking >= 0,
        depthPacking: v.depthPacking || 0,
        index0AttributeName: v.index0AttributeName,
        extensionDerivatives: oe && v.extensions.derivatives === !0,
        extensionFragDepth: oe && v.extensions.fragDepth === !0,
        extensionDrawBuffers: oe && v.extensions.drawBuffers === !0,
        extensionShaderTextureLOD: oe && v.extensions.shaderTextureLOD === !0,
        rendererExtensionFragDepth: h || n.has("EXT_frag_depth"),
        rendererExtensionDrawBuffers: h || n.has("WEBGL_draw_buffers"),
        rendererExtensionShaderTextureLod: h || n.has("EXT_shader_texture_lod"),
        rendererExtensionParallelShaderCompile: n.has(
          "KHR_parallel_shader_compile"
        ),
        customProgramCacheKey: v.customProgramCacheKey(),
      }
    );
  }
  function f(v) {
    const T = [];
    if (
      (v.shaderID
        ? T.push(v.shaderID)
        : (T.push(v.customVertexShaderID), T.push(v.customFragmentShaderID)),
      v.defines !== void 0)
    )
      for (const G in v.defines) T.push(G), T.push(v.defines[G]);
    return (
      v.isRawShaderMaterial === !1 &&
        (y(T, v), M(T, v), T.push(s.outputColorSpace)),
      T.push(v.customProgramCacheKey),
      T.join()
    );
  }
  function y(v, T) {
    v.push(T.precision),
      v.push(T.outputColorSpace),
      v.push(T.envMapMode),
      v.push(T.envMapCubeUVHeight),
      v.push(T.mapUv),
      v.push(T.alphaMapUv),
      v.push(T.lightMapUv),
      v.push(T.aoMapUv),
      v.push(T.bumpMapUv),
      v.push(T.normalMapUv),
      v.push(T.displacementMapUv),
      v.push(T.emissiveMapUv),
      v.push(T.metalnessMapUv),
      v.push(T.roughnessMapUv),
      v.push(T.anisotropyMapUv),
      v.push(T.clearcoatMapUv),
      v.push(T.clearcoatNormalMapUv),
      v.push(T.clearcoatRoughnessMapUv),
      v.push(T.iridescenceMapUv),
      v.push(T.iridescenceThicknessMapUv),
      v.push(T.sheenColorMapUv),
      v.push(T.sheenRoughnessMapUv),
      v.push(T.specularMapUv),
      v.push(T.specularColorMapUv),
      v.push(T.specularIntensityMapUv),
      v.push(T.transmissionMapUv),
      v.push(T.thicknessMapUv),
      v.push(T.combine),
      v.push(T.fogExp2),
      v.push(T.sizeAttenuation),
      v.push(T.morphTargetsCount),
      v.push(T.morphAttributeCount),
      v.push(T.numDirLights),
      v.push(T.numPointLights),
      v.push(T.numSpotLights),
      v.push(T.numSpotLightMaps),
      v.push(T.numHemiLights),
      v.push(T.numRectAreaLights),
      v.push(T.numDirLightShadows),
      v.push(T.numPointLightShadows),
      v.push(T.numSpotLightShadows),
      v.push(T.numSpotLightShadowsWithMaps),
      v.push(T.numLightProbes),
      v.push(T.shadowMapType),
      v.push(T.toneMapping),
      v.push(T.numClippingPlanes),
      v.push(T.numClipIntersection),
      v.push(T.depthPacking);
  }
  function M(v, T) {
    o.disableAll(),
      T.isWebGL2 && o.enable(0),
      T.supportsVertexTextures && o.enable(1),
      T.instancing && o.enable(2),
      T.instancingColor && o.enable(3),
      T.matcap && o.enable(4),
      T.envMap && o.enable(5),
      T.normalMapObjectSpace && o.enable(6),
      T.normalMapTangentSpace && o.enable(7),
      T.clearcoat && o.enable(8),
      T.iridescence && o.enable(9),
      T.alphaTest && o.enable(10),
      T.vertexColors && o.enable(11),
      T.vertexAlphas && o.enable(12),
      T.vertexUv1s && o.enable(13),
      T.vertexUv2s && o.enable(14),
      T.vertexUv3s && o.enable(15),
      T.vertexTangents && o.enable(16),
      T.anisotropy && o.enable(17),
      T.alphaHash && o.enable(18),
      v.push(o.mask),
      o.disableAll(),
      T.fog && o.enable(0),
      T.useFog && o.enable(1),
      T.flatShading && o.enable(2),
      T.logarithmicDepthBuffer && o.enable(3),
      T.skinning && o.enable(4),
      T.morphTargets && o.enable(5),
      T.morphNormals && o.enable(6),
      T.morphColors && o.enable(7),
      T.premultipliedAlpha && o.enable(8),
      T.shadowMapEnabled && o.enable(9),
      T.useLegacyLights && o.enable(10),
      T.doubleSided && o.enable(11),
      T.flipSided && o.enable(12),
      T.useDepthPacking && o.enable(13),
      T.dithering && o.enable(14),
      T.transmission && o.enable(15),
      T.sheen && o.enable(16),
      T.opaque && o.enable(17),
      T.pointsUvs && o.enable(18),
      T.decodeVideoTexture && o.enable(19),
      v.push(o.mask);
  }
  function S(v) {
    const T = g[v.type];
    let G;
    if (T) {
      const j = $t[T];
      G = lu.clone(j.uniforms);
    } else G = v.uniforms;
    return G;
  }
  function b(v, T) {
    let G;
    for (let j = 0, $ = c.length; j < $; j++) {
      const C = c[j];
      if (C.cacheKey === T) {
        (G = C), ++G.usedTimes;
        break;
      }
    }
    return G === void 0 && ((G = new xm(s, T, v, r)), c.push(G)), G;
  }
  function L(v) {
    if (--v.usedTimes === 0) {
      const T = c.indexOf(v);
      (c[T] = c[c.length - 1]), c.pop(), v.destroy();
    }
  }
  function w(v) {
    l.remove(v);
  }
  function I() {
    l.dispose();
  }
  return {
    getParameters: p,
    getProgramCacheKey: f,
    getUniforms: S,
    acquireProgram: b,
    releaseProgram: L,
    releaseShaderCache: w,
    programs: c,
    dispose: I,
  };
}
function Sm() {
  let s = new WeakMap();
  function e(r) {
    let a = s.get(r);
    return a === void 0 && ((a = {}), s.set(r, a)), a;
  }
  function t(r) {
    s.delete(r);
  }
  function n(r, a, o) {
    s.get(r)[a] = o;
  }
  function i() {
    s = new WeakMap();
  }
  return { get: e, remove: t, update: n, dispose: i };
}
function Tm(s, e) {
  return s.groupOrder !== e.groupOrder
    ? s.groupOrder - e.groupOrder
    : s.renderOrder !== e.renderOrder
    ? s.renderOrder - e.renderOrder
    : s.material.id !== e.material.id
    ? s.material.id - e.material.id
    : s.z !== e.z
    ? s.z - e.z
    : s.id - e.id;
}
function qo(s, e) {
  return s.groupOrder !== e.groupOrder
    ? s.groupOrder - e.groupOrder
    : s.renderOrder !== e.renderOrder
    ? s.renderOrder - e.renderOrder
    : s.z !== e.z
    ? e.z - s.z
    : s.id - e.id;
}
function $o() {
  const s = [];
  let e = 0;
  const t = [],
    n = [],
    i = [];
  function r() {
    (e = 0), (t.length = 0), (n.length = 0), (i.length = 0);
  }
  function a(u, d, m, g, _, p) {
    let f = s[e];
    return (
      f === void 0
        ? ((f = {
            id: u.id,
            object: u,
            geometry: d,
            material: m,
            groupOrder: g,
            renderOrder: u.renderOrder,
            z: _,
            group: p,
          }),
          (s[e] = f))
        : ((f.id = u.id),
          (f.object = u),
          (f.geometry = d),
          (f.material = m),
          (f.groupOrder = g),
          (f.renderOrder = u.renderOrder),
          (f.z = _),
          (f.group = p)),
      e++,
      f
    );
  }
  function o(u, d, m, g, _, p) {
    const f = a(u, d, m, g, _, p);
    m.transmission > 0
      ? n.push(f)
      : m.transparent === !0
      ? i.push(f)
      : t.push(f);
  }
  function l(u, d, m, g, _, p) {
    const f = a(u, d, m, g, _, p);
    m.transmission > 0
      ? n.unshift(f)
      : m.transparent === !0
      ? i.unshift(f)
      : t.unshift(f);
  }
  function c(u, d) {
    t.length > 1 && t.sort(u || Tm),
      n.length > 1 && n.sort(d || qo),
      i.length > 1 && i.sort(d || qo);
  }
  function h() {
    for (let u = e, d = s.length; u < d; u++) {
      const m = s[u];
      if (m.id === null) break;
      (m.id = null),
        (m.object = null),
        (m.geometry = null),
        (m.material = null),
        (m.group = null);
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: i,
    init: r,
    push: o,
    unshift: l,
    finish: h,
    sort: c,
  };
}
function Am() {
  let s = new WeakMap();
  function e(n, i) {
    const r = s.get(n);
    let a;
    return (
      r === void 0
        ? ((a = new $o()), s.set(n, [a]))
        : i >= r.length
        ? ((a = new $o()), r.push(a))
        : (a = r[i]),
      a
    );
  }
  function t() {
    s = new WeakMap();
  }
  return { get: e, dispose: t };
}
function bm() {
  const s = {};
  return {
    get: function (e) {
      if (s[e.id] !== void 0) return s[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = { direction: new D(), color: new Ce() };
          break;
        case "SpotLight":
          t = {
            position: new D(),
            direction: new D(),
            color: new Ce(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0,
          };
          break;
        case "PointLight":
          t = { position: new D(), color: new Ce(), distance: 0, decay: 0 };
          break;
        case "HemisphereLight":
          t = { direction: new D(), skyColor: new Ce(), groundColor: new Ce() };
          break;
        case "RectAreaLight":
          t = {
            color: new Ce(),
            position: new D(),
            halfWidth: new D(),
            halfHeight: new D(),
          };
          break;
      }
      return (s[e.id] = t), t;
    },
  };
}
function wm() {
  const s = {};
  return {
    get: function (e) {
      if (s[e.id] !== void 0) return s[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Re(),
          };
          break;
        case "SpotLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Re(),
          };
          break;
        case "PointLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Re(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3,
          };
          break;
      }
      return (s[e.id] = t), t;
    },
  };
}
let Rm = 0;
function Cm(s, e) {
  return (
    (e.castShadow ? 2 : 0) -
    (s.castShadow ? 2 : 0) +
    (e.map ? 1 : 0) -
    (s.map ? 1 : 0)
  );
}
function Lm(s, e) {
  const t = new bm(),
    n = wm(),
    i = {
      version: 0,
      hash: {
        directionalLength: -1,
        pointLength: -1,
        spotLength: -1,
        rectAreaLength: -1,
        hemiLength: -1,
        numDirectionalShadows: -1,
        numPointShadows: -1,
        numSpotShadows: -1,
        numSpotMaps: -1,
        numLightProbes: -1,
      },
      ambient: [0, 0, 0],
      probe: [],
      directional: [],
      directionalShadow: [],
      directionalShadowMap: [],
      directionalShadowMatrix: [],
      spot: [],
      spotLightMap: [],
      spotShadow: [],
      spotShadowMap: [],
      spotLightMatrix: [],
      rectArea: [],
      rectAreaLTC1: null,
      rectAreaLTC2: null,
      point: [],
      pointShadow: [],
      pointShadowMap: [],
      pointShadowMatrix: [],
      hemi: [],
      numSpotLightShadowsWithMaps: 0,
      numLightProbes: 0,
    };
  for (let h = 0; h < 9; h++) i.probe.push(new D());
  const r = new D(),
    a = new He(),
    o = new He();
  function l(h, u) {
    let d = 0,
      m = 0,
      g = 0;
    for (let j = 0; j < 9; j++) i.probe[j].set(0, 0, 0);
    let _ = 0,
      p = 0,
      f = 0,
      y = 0,
      M = 0,
      S = 0,
      b = 0,
      L = 0,
      w = 0,
      I = 0,
      v = 0;
    h.sort(Cm);
    const T = u === !0 ? Math.PI : 1;
    for (let j = 0, $ = h.length; j < $; j++) {
      const C = h[j],
        F = C.color,
        V = C.intensity,
        Y = C.distance,
        ee = C.shadow && C.shadow.map ? C.shadow.map.texture : null;
      if (C.isAmbientLight)
        (d += F.r * V * T), (m += F.g * V * T), (g += F.b * V * T);
      else if (C.isLightProbe) {
        for (let Z = 0; Z < 9; Z++)
          i.probe[Z].addScaledVector(C.sh.coefficients[Z], V);
        v++;
      } else if (C.isDirectionalLight) {
        const Z = t.get(C);
        if (
          (Z.color.copy(C.color).multiplyScalar(C.intensity * T), C.castShadow)
        ) {
          const q = C.shadow,
            U = n.get(C);
          (U.shadowBias = q.bias),
            (U.shadowNormalBias = q.normalBias),
            (U.shadowRadius = q.radius),
            (U.shadowMapSize = q.mapSize),
            (i.directionalShadow[_] = U),
            (i.directionalShadowMap[_] = ee),
            (i.directionalShadowMatrix[_] = C.shadow.matrix),
            S++;
        }
        (i.directional[_] = Z), _++;
      } else if (C.isSpotLight) {
        const Z = t.get(C);
        Z.position.setFromMatrixPosition(C.matrixWorld),
          Z.color.copy(F).multiplyScalar(V * T),
          (Z.distance = Y),
          (Z.coneCos = Math.cos(C.angle)),
          (Z.penumbraCos = Math.cos(C.angle * (1 - C.penumbra))),
          (Z.decay = C.decay),
          (i.spot[f] = Z);
        const q = C.shadow;
        if (
          (C.map &&
            ((i.spotLightMap[w] = C.map),
            w++,
            q.updateMatrices(C),
            C.castShadow && I++),
          (i.spotLightMatrix[f] = q.matrix),
          C.castShadow)
        ) {
          const U = n.get(C);
          (U.shadowBias = q.bias),
            (U.shadowNormalBias = q.normalBias),
            (U.shadowRadius = q.radius),
            (U.shadowMapSize = q.mapSize),
            (i.spotShadow[f] = U),
            (i.spotShadowMap[f] = ee),
            L++;
        }
        f++;
      } else if (C.isRectAreaLight) {
        const Z = t.get(C);
        Z.color.copy(F).multiplyScalar(V),
          Z.halfWidth.set(C.width * 0.5, 0, 0),
          Z.halfHeight.set(0, C.height * 0.5, 0),
          (i.rectArea[y] = Z),
          y++;
      } else if (C.isPointLight) {
        const Z = t.get(C);
        if (
          (Z.color.copy(C.color).multiplyScalar(C.intensity * T),
          (Z.distance = C.distance),
          (Z.decay = C.decay),
          C.castShadow)
        ) {
          const q = C.shadow,
            U = n.get(C);
          (U.shadowBias = q.bias),
            (U.shadowNormalBias = q.normalBias),
            (U.shadowRadius = q.radius),
            (U.shadowMapSize = q.mapSize),
            (U.shadowCameraNear = q.camera.near),
            (U.shadowCameraFar = q.camera.far),
            (i.pointShadow[p] = U),
            (i.pointShadowMap[p] = ee),
            (i.pointShadowMatrix[p] = C.shadow.matrix),
            b++;
        }
        (i.point[p] = Z), p++;
      } else if (C.isHemisphereLight) {
        const Z = t.get(C);
        Z.skyColor.copy(C.color).multiplyScalar(V * T),
          Z.groundColor.copy(C.groundColor).multiplyScalar(V * T),
          (i.hemi[M] = Z),
          M++;
      }
    }
    y > 0 &&
      (e.isWebGL2 || s.has("OES_texture_float_linear") === !0
        ? ((i.rectAreaLTC1 = le.LTC_FLOAT_1), (i.rectAreaLTC2 = le.LTC_FLOAT_2))
        : s.has("OES_texture_half_float_linear") === !0
        ? ((i.rectAreaLTC1 = le.LTC_HALF_1), (i.rectAreaLTC2 = le.LTC_HALF_2))
        : console.error(
            "THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions."
          )),
      (i.ambient[0] = d),
      (i.ambient[1] = m),
      (i.ambient[2] = g);
    const G = i.hash;
    (G.directionalLength !== _ ||
      G.pointLength !== p ||
      G.spotLength !== f ||
      G.rectAreaLength !== y ||
      G.hemiLength !== M ||
      G.numDirectionalShadows !== S ||
      G.numPointShadows !== b ||
      G.numSpotShadows !== L ||
      G.numSpotMaps !== w ||
      G.numLightProbes !== v) &&
      ((i.directional.length = _),
      (i.spot.length = f),
      (i.rectArea.length = y),
      (i.point.length = p),
      (i.hemi.length = M),
      (i.directionalShadow.length = S),
      (i.directionalShadowMap.length = S),
      (i.pointShadow.length = b),
      (i.pointShadowMap.length = b),
      (i.spotShadow.length = L),
      (i.spotShadowMap.length = L),
      (i.directionalShadowMatrix.length = S),
      (i.pointShadowMatrix.length = b),
      (i.spotLightMatrix.length = L + w - I),
      (i.spotLightMap.length = w),
      (i.numSpotLightShadowsWithMaps = I),
      (i.numLightProbes = v),
      (G.directionalLength = _),
      (G.pointLength = p),
      (G.spotLength = f),
      (G.rectAreaLength = y),
      (G.hemiLength = M),
      (G.numDirectionalShadows = S),
      (G.numPointShadows = b),
      (G.numSpotShadows = L),
      (G.numSpotMaps = w),
      (G.numLightProbes = v),
      (i.version = Rm++));
  }
  function c(h, u) {
    let d = 0,
      m = 0,
      g = 0,
      _ = 0,
      p = 0;
    const f = u.matrixWorldInverse;
    for (let y = 0, M = h.length; y < M; y++) {
      const S = h[y];
      if (S.isDirectionalLight) {
        const b = i.directional[d];
        b.direction.setFromMatrixPosition(S.matrixWorld),
          r.setFromMatrixPosition(S.target.matrixWorld),
          b.direction.sub(r),
          b.direction.transformDirection(f),
          d++;
      } else if (S.isSpotLight) {
        const b = i.spot[g];
        b.position.setFromMatrixPosition(S.matrixWorld),
          b.position.applyMatrix4(f),
          b.direction.setFromMatrixPosition(S.matrixWorld),
          r.setFromMatrixPosition(S.target.matrixWorld),
          b.direction.sub(r),
          b.direction.transformDirection(f),
          g++;
      } else if (S.isRectAreaLight) {
        const b = i.rectArea[_];
        b.position.setFromMatrixPosition(S.matrixWorld),
          b.position.applyMatrix4(f),
          o.identity(),
          a.copy(S.matrixWorld),
          a.premultiply(f),
          o.extractRotation(a),
          b.halfWidth.set(S.width * 0.5, 0, 0),
          b.halfHeight.set(0, S.height * 0.5, 0),
          b.halfWidth.applyMatrix4(o),
          b.halfHeight.applyMatrix4(o),
          _++;
      } else if (S.isPointLight) {
        const b = i.point[m];
        b.position.setFromMatrixPosition(S.matrixWorld),
          b.position.applyMatrix4(f),
          m++;
      } else if (S.isHemisphereLight) {
        const b = i.hemi[p];
        b.direction.setFromMatrixPosition(S.matrixWorld),
          b.direction.transformDirection(f),
          p++;
      }
    }
  }
  return { setup: l, setupView: c, state: i };
}
function Ko(s, e) {
  const t = new Lm(s, e),
    n = [],
    i = [];
  function r() {
    (n.length = 0), (i.length = 0);
  }
  function a(u) {
    n.push(u);
  }
  function o(u) {
    i.push(u);
  }
  function l(u) {
    t.setup(n, u);
  }
  function c(u) {
    t.setupView(n, u);
  }
  return {
    init: r,
    state: { lightsArray: n, shadowsArray: i, lights: t },
    setupLights: l,
    setupLightsView: c,
    pushLight: a,
    pushShadow: o,
  };
}
function Pm(s, e) {
  let t = new WeakMap();
  function n(r, a = 0) {
    const o = t.get(r);
    let l;
    return (
      o === void 0
        ? ((l = new Ko(s, e)), t.set(r, [l]))
        : a >= o.length
        ? ((l = new Ko(s, e)), o.push(l))
        : (l = o[a]),
      l
    );
  }
  function i() {
    t = new WeakMap();
  }
  return { get: n, dispose: i };
}
class Dm extends en {
  constructor(e) {
    super(),
      (this.isMeshDepthMaterial = !0),
      (this.type = "MeshDepthMaterial"),
      (this.depthPacking = _h),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.depthPacking = e.depthPacking),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      this
    );
  }
}
class Im extends en {
  constructor(e) {
    super(),
      (this.isMeshDistanceMaterial = !0),
      (this.type = "MeshDistanceMaterial"),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      this
    );
  }
}
const Um = `void main() {
	gl_Position = vec4( position, 1.0 );
}`,
  Nm = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function Fm(s, e, t) {
  let n = new ia();
  const i = new Re(),
    r = new Re(),
    a = new $e(),
    o = new Dm({ depthPacking: xh }),
    l = new Im(),
    c = {},
    h = t.maxTextureSize,
    u = { [gn]: Rt, [Rt]: gn, [Zt]: Zt },
    d = new $n({
      defines: { VSM_SAMPLES: 8 },
      uniforms: {
        shadow_pass: { value: null },
        resolution: { value: new Re() },
        radius: { value: 4 },
      },
      vertexShader: Um,
      fragmentShader: Nm,
    }),
    m = d.clone();
  m.defines.HORIZONTAL_PASS = 1;
  const g = new jt();
  g.setAttribute(
    "position",
    new bt(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3)
  );
  const _ = new It(g, d),
    p = this;
  (this.enabled = !1),
    (this.autoUpdate = !0),
    (this.needsUpdate = !1),
    (this.type = wl);
  let f = this.type;
  this.render = function (b, L, w) {
    if (
      p.enabled === !1 ||
      (p.autoUpdate === !1 && p.needsUpdate === !1) ||
      b.length === 0
    )
      return;
    const I = s.getRenderTarget(),
      v = s.getActiveCubeFace(),
      T = s.getActiveMipmapLevel(),
      G = s.state;
    G.setBlending(Rn),
      G.buffers.color.setClear(1, 1, 1, 1),
      G.buffers.depth.setTest(!0),
      G.setScissorTest(!1);
    const j = f !== fn && this.type === fn,
      $ = f === fn && this.type !== fn;
    for (let C = 0, F = b.length; C < F; C++) {
      const V = b[C],
        Y = V.shadow;
      if (Y === void 0) {
        console.warn("THREE.WebGLShadowMap:", V, "has no shadow.");
        continue;
      }
      if (Y.autoUpdate === !1 && Y.needsUpdate === !1) continue;
      i.copy(Y.mapSize);
      const ee = Y.getFrameExtents();
      if (
        (i.multiply(ee),
        r.copy(Y.mapSize),
        (i.x > h || i.y > h) &&
          (i.x > h &&
            ((r.x = Math.floor(h / ee.x)),
            (i.x = r.x * ee.x),
            (Y.mapSize.x = r.x)),
          i.y > h &&
            ((r.y = Math.floor(h / ee.y)),
            (i.y = r.y * ee.y),
            (Y.mapSize.y = r.y))),
        Y.map === null || j === !0 || $ === !0)
      ) {
        const q = this.type !== fn ? { minFilter: pt, magFilter: pt } : {};
        Y.map !== null && Y.map.dispose(),
          (Y.map = new qn(i.x, i.y, q)),
          (Y.map.texture.name = V.name + ".shadowMap"),
          Y.camera.updateProjectionMatrix();
      }
      s.setRenderTarget(Y.map), s.clear();
      const Z = Y.getViewportCount();
      for (let q = 0; q < Z; q++) {
        const U = Y.getViewport(q);
        a.set(r.x * U.x, r.y * U.y, r.x * U.z, r.y * U.w),
          G.viewport(a),
          Y.updateMatrices(V, q),
          (n = Y.getFrustum()),
          S(L, w, Y.camera, V, this.type);
      }
      Y.isPointLightShadow !== !0 && this.type === fn && y(Y, w),
        (Y.needsUpdate = !1);
    }
    (f = this.type), (p.needsUpdate = !1), s.setRenderTarget(I, v, T);
  };
  function y(b, L) {
    const w = e.update(_);
    d.defines.VSM_SAMPLES !== b.blurSamples &&
      ((d.defines.VSM_SAMPLES = b.blurSamples),
      (m.defines.VSM_SAMPLES = b.blurSamples),
      (d.needsUpdate = !0),
      (m.needsUpdate = !0)),
      b.mapPass === null && (b.mapPass = new qn(i.x, i.y)),
      (d.uniforms.shadow_pass.value = b.map.texture),
      (d.uniforms.resolution.value = b.mapSize),
      (d.uniforms.radius.value = b.radius),
      s.setRenderTarget(b.mapPass),
      s.clear(),
      s.renderBufferDirect(L, null, w, d, _, null),
      (m.uniforms.shadow_pass.value = b.mapPass.texture),
      (m.uniforms.resolution.value = b.mapSize),
      (m.uniforms.radius.value = b.radius),
      s.setRenderTarget(b.map),
      s.clear(),
      s.renderBufferDirect(L, null, w, m, _, null);
  }
  function M(b, L, w, I) {
    let v = null;
    const T =
      w.isPointLight === !0 ? b.customDistanceMaterial : b.customDepthMaterial;
    if (T !== void 0) v = T;
    else if (
      ((v = w.isPointLight === !0 ? l : o),
      (s.localClippingEnabled &&
        L.clipShadows === !0 &&
        Array.isArray(L.clippingPlanes) &&
        L.clippingPlanes.length !== 0) ||
        (L.displacementMap && L.displacementScale !== 0) ||
        (L.alphaMap && L.alphaTest > 0) ||
        (L.map && L.alphaTest > 0))
    ) {
      const G = v.uuid,
        j = L.uuid;
      let $ = c[G];
      $ === void 0 && (($ = {}), (c[G] = $));
      let C = $[j];
      C === void 0 && ((C = v.clone()), ($[j] = C)), (v = C);
    }
    if (
      ((v.visible = L.visible),
      (v.wireframe = L.wireframe),
      I === fn
        ? (v.side = L.shadowSide !== null ? L.shadowSide : L.side)
        : (v.side = L.shadowSide !== null ? L.shadowSide : u[L.side]),
      (v.alphaMap = L.alphaMap),
      (v.alphaTest = L.alphaTest),
      (v.map = L.map),
      (v.clipShadows = L.clipShadows),
      (v.clippingPlanes = L.clippingPlanes),
      (v.clipIntersection = L.clipIntersection),
      (v.displacementMap = L.displacementMap),
      (v.displacementScale = L.displacementScale),
      (v.displacementBias = L.displacementBias),
      (v.wireframeLinewidth = L.wireframeLinewidth),
      (v.linewidth = L.linewidth),
      w.isPointLight === !0 && v.isMeshDistanceMaterial === !0)
    ) {
      const G = s.properties.get(v);
      G.light = w;
    }
    return v;
  }
  function S(b, L, w, I, v) {
    if (b.visible === !1) return;
    if (
      b.layers.test(L.layers) &&
      (b.isMesh || b.isLine || b.isPoints) &&
      (b.castShadow || (b.receiveShadow && v === fn)) &&
      (!b.frustumCulled || n.intersectsObject(b))
    ) {
      b.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse, b.matrixWorld);
      const j = e.update(b),
        $ = b.material;
      if (Array.isArray($)) {
        const C = j.groups;
        for (let F = 0, V = C.length; F < V; F++) {
          const Y = C[F],
            ee = $[Y.materialIndex];
          if (ee && ee.visible) {
            const Z = M(b, ee, I, v);
            s.renderBufferDirect(w, null, j, Z, b, Y);
          }
        }
      } else if ($.visible) {
        const C = M(b, $, I, v);
        s.renderBufferDirect(w, null, j, C, b, null);
      }
    }
    const G = b.children;
    for (let j = 0, $ = G.length; j < $; j++) S(G[j], L, w, I, v);
  }
}
function Om(s, e, t) {
  const n = t.isWebGL2;
  function i() {
    let P = !1;
    const oe = new $e();
    let Q = null;
    const X = new $e(0, 0, 0, 0);
    return {
      setMask: function (ie) {
        Q !== ie && !P && (s.colorMask(ie, ie, ie, ie), (Q = ie));
      },
      setLocked: function (ie) {
        P = ie;
      },
      setClear: function (ie, xe, Ge, rt, Ut) {
        Ut === !0 && ((ie *= rt), (xe *= rt), (Ge *= rt)),
          oe.set(ie, xe, Ge, rt),
          X.equals(oe) === !1 && (s.clearColor(ie, xe, Ge, rt), X.copy(oe));
      },
      reset: function () {
        (P = !1), (Q = null), X.set(-1, 0, 0, 0);
      },
    };
  }
  function r() {
    let P = !1,
      oe = null,
      Q = null,
      X = null;
    return {
      setTest: function (ie) {
        ie ? Le(s.DEPTH_TEST) : Ze(s.DEPTH_TEST);
      },
      setMask: function (ie) {
        oe !== ie && !P && (s.depthMask(ie), (oe = ie));
      },
      setFunc: function (ie) {
        if (Q !== ie) {
          switch (ie) {
            case Xc:
              s.depthFunc(s.NEVER);
              break;
            case Yc:
              s.depthFunc(s.ALWAYS);
              break;
            case jc:
              s.depthFunc(s.LESS);
              break;
            case Fs:
              s.depthFunc(s.LEQUAL);
              break;
            case qc:
              s.depthFunc(s.EQUAL);
              break;
            case $c:
              s.depthFunc(s.GEQUAL);
              break;
            case Kc:
              s.depthFunc(s.GREATER);
              break;
            case Zc:
              s.depthFunc(s.NOTEQUAL);
              break;
            default:
              s.depthFunc(s.LEQUAL);
          }
          Q = ie;
        }
      },
      setLocked: function (ie) {
        P = ie;
      },
      setClear: function (ie) {
        X !== ie && (s.clearDepth(ie), (X = ie));
      },
      reset: function () {
        (P = !1), (oe = null), (Q = null), (X = null);
      },
    };
  }
  function a() {
    let P = !1,
      oe = null,
      Q = null,
      X = null,
      ie = null,
      xe = null,
      Ge = null,
      rt = null,
      Ut = null;
    return {
      setTest: function (Ke) {
        P || (Ke ? Le(s.STENCIL_TEST) : Ze(s.STENCIL_TEST));
      },
      setMask: function (Ke) {
        oe !== Ke && !P && (s.stencilMask(Ke), (oe = Ke));
      },
      setFunc: function (Ke, yt, qt) {
        (Q !== Ke || X !== yt || ie !== qt) &&
          (s.stencilFunc(Ke, yt, qt), (Q = Ke), (X = yt), (ie = qt));
      },
      setOp: function (Ke, yt, qt) {
        (xe !== Ke || Ge !== yt || rt !== qt) &&
          (s.stencilOp(Ke, yt, qt), (xe = Ke), (Ge = yt), (rt = qt));
      },
      setLocked: function (Ke) {
        P = Ke;
      },
      setClear: function (Ke) {
        Ut !== Ke && (s.clearStencil(Ke), (Ut = Ke));
      },
      reset: function () {
        (P = !1),
          (oe = null),
          (Q = null),
          (X = null),
          (ie = null),
          (xe = null),
          (Ge = null),
          (rt = null),
          (Ut = null);
      },
    };
  }
  const o = new i(),
    l = new r(),
    c = new a(),
    h = new WeakMap(),
    u = new WeakMap();
  let d = {},
    m = {},
    g = new WeakMap(),
    _ = [],
    p = null,
    f = !1,
    y = null,
    M = null,
    S = null,
    b = null,
    L = null,
    w = null,
    I = null,
    v = new Ce(0, 0, 0),
    T = 0,
    G = !1,
    j = null,
    $ = null,
    C = null,
    F = null,
    V = null;
  const Y = s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let ee = !1,
    Z = 0;
  const q = s.getParameter(s.VERSION);
  q.indexOf("WebGL") !== -1
    ? ((Z = parseFloat(/^WebGL (\d)/.exec(q)[1])), (ee = Z >= 1))
    : q.indexOf("OpenGL ES") !== -1 &&
      ((Z = parseFloat(/^OpenGL ES (\d)/.exec(q)[1])), (ee = Z >= 2));
  let U = null,
    H = {};
  const ae = s.getParameter(s.SCISSOR_BOX),
    he = s.getParameter(s.VIEWPORT),
    fe = new $e().fromArray(ae),
    Se = new $e().fromArray(he);
  function ze(P, oe, Q, X) {
    const ie = new Uint8Array(4),
      xe = s.createTexture();
    s.bindTexture(P, xe),
      s.texParameteri(P, s.TEXTURE_MIN_FILTER, s.NEAREST),
      s.texParameteri(P, s.TEXTURE_MAG_FILTER, s.NEAREST);
    for (let Ge = 0; Ge < Q; Ge++)
      n && (P === s.TEXTURE_3D || P === s.TEXTURE_2D_ARRAY)
        ? s.texImage3D(oe, 0, s.RGBA, 1, 1, X, 0, s.RGBA, s.UNSIGNED_BYTE, ie)
        : s.texImage2D(
            oe + Ge,
            0,
            s.RGBA,
            1,
            1,
            0,
            s.RGBA,
            s.UNSIGNED_BYTE,
            ie
          );
    return xe;
  }
  const Te = {};
  (Te[s.TEXTURE_2D] = ze(s.TEXTURE_2D, s.TEXTURE_2D, 1)),
    (Te[s.TEXTURE_CUBE_MAP] = ze(
      s.TEXTURE_CUBE_MAP,
      s.TEXTURE_CUBE_MAP_POSITIVE_X,
      6
    )),
    n &&
      ((Te[s.TEXTURE_2D_ARRAY] = ze(
        s.TEXTURE_2D_ARRAY,
        s.TEXTURE_2D_ARRAY,
        1,
        1
      )),
      (Te[s.TEXTURE_3D] = ze(s.TEXTURE_3D, s.TEXTURE_3D, 1, 1))),
    o.setClear(0, 0, 0, 1),
    l.setClear(1),
    c.setClear(0),
    Le(s.DEPTH_TEST),
    l.setFunc(Fs),
    Ie(!1),
    Pe(Ra),
    Le(s.CULL_FACE),
    be(Rn);
  function Le(P) {
    d[P] !== !0 && (s.enable(P), (d[P] = !0));
  }
  function Ze(P) {
    d[P] !== !1 && (s.disable(P), (d[P] = !1));
  }
  function Ne(P, oe) {
    return m[P] !== oe
      ? (s.bindFramebuffer(P, oe),
        (m[P] = oe),
        n &&
          (P === s.DRAW_FRAMEBUFFER && (m[s.FRAMEBUFFER] = oe),
          P === s.FRAMEBUFFER && (m[s.DRAW_FRAMEBUFFER] = oe)),
        !0)
      : !1;
  }
  function O(P, oe) {
    let Q = _,
      X = !1;
    if (P)
      if (
        ((Q = g.get(oe)),
        Q === void 0 && ((Q = []), g.set(oe, Q)),
        P.isWebGLMultipleRenderTargets)
      ) {
        const ie = P.texture;
        if (Q.length !== ie.length || Q[0] !== s.COLOR_ATTACHMENT0) {
          for (let xe = 0, Ge = ie.length; xe < Ge; xe++)
            Q[xe] = s.COLOR_ATTACHMENT0 + xe;
          (Q.length = ie.length), (X = !0);
        }
      } else
        Q[0] !== s.COLOR_ATTACHMENT0 &&
          ((Q[0] = s.COLOR_ATTACHMENT0), (X = !0));
    else Q[0] !== s.BACK && ((Q[0] = s.BACK), (X = !0));
    X &&
      (t.isWebGL2
        ? s.drawBuffers(Q)
        : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Q));
  }
  function xt(P) {
    return p !== P ? (s.useProgram(P), (p = P), !0) : !1;
  }
  const ve = {
    [Gn]: s.FUNC_ADD,
    [Lc]: s.FUNC_SUBTRACT,
    [Pc]: s.FUNC_REVERSE_SUBTRACT,
  };
  if (n) (ve[Da] = s.MIN), (ve[Ia] = s.MAX);
  else {
    const P = e.get("EXT_blend_minmax");
    P !== null && ((ve[Da] = P.MIN_EXT), (ve[Ia] = P.MAX_EXT));
  }
  const Ae = {
    [Dc]: s.ZERO,
    [Ic]: s.ONE,
    [Uc]: s.SRC_COLOR,
    [Or]: s.SRC_ALPHA,
    [zc]: s.SRC_ALPHA_SATURATE,
    [Bc]: s.DST_COLOR,
    [Fc]: s.DST_ALPHA,
    [Nc]: s.ONE_MINUS_SRC_COLOR,
    [Br]: s.ONE_MINUS_SRC_ALPHA,
    [Hc]: s.ONE_MINUS_DST_COLOR,
    [Oc]: s.ONE_MINUS_DST_ALPHA,
    [kc]: s.CONSTANT_COLOR,
    [Gc]: s.ONE_MINUS_CONSTANT_COLOR,
    [Vc]: s.CONSTANT_ALPHA,
    [Wc]: s.ONE_MINUS_CONSTANT_ALPHA,
  };
  function be(P, oe, Q, X, ie, xe, Ge, rt, Ut, Ke) {
    if (P === Rn) {
      f === !0 && (Ze(s.BLEND), (f = !1));
      return;
    }
    if ((f === !1 && (Le(s.BLEND), (f = !0)), P !== Cc)) {
      if (P !== y || Ke !== G) {
        if (
          ((M !== Gn || L !== Gn) &&
            (s.blendEquation(s.FUNC_ADD), (M = Gn), (L = Gn)),
          Ke)
        )
          switch (P) {
            case xi:
              s.blendFuncSeparate(
                s.ONE,
                s.ONE_MINUS_SRC_ALPHA,
                s.ONE,
                s.ONE_MINUS_SRC_ALPHA
              );
              break;
            case Ca:
              s.blendFunc(s.ONE, s.ONE);
              break;
            case La:
              s.blendFuncSeparate(s.ZERO, s.ONE_MINUS_SRC_COLOR, s.ZERO, s.ONE);
              break;
            case Pa:
              s.blendFuncSeparate(s.ZERO, s.SRC_COLOR, s.ZERO, s.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", P);
              break;
          }
        else
          switch (P) {
            case xi:
              s.blendFuncSeparate(
                s.SRC_ALPHA,
                s.ONE_MINUS_SRC_ALPHA,
                s.ONE,
                s.ONE_MINUS_SRC_ALPHA
              );
              break;
            case Ca:
              s.blendFunc(s.SRC_ALPHA, s.ONE);
              break;
            case La:
              s.blendFuncSeparate(s.ZERO, s.ONE_MINUS_SRC_COLOR, s.ZERO, s.ONE);
              break;
            case Pa:
              s.blendFunc(s.ZERO, s.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", P);
              break;
          }
        (S = null),
          (b = null),
          (w = null),
          (I = null),
          v.set(0, 0, 0),
          (T = 0),
          (y = P),
          (G = Ke);
      }
      return;
    }
    (ie = ie || oe),
      (xe = xe || Q),
      (Ge = Ge || X),
      (oe !== M || ie !== L) &&
        (s.blendEquationSeparate(ve[oe], ve[ie]), (M = oe), (L = ie)),
      (Q !== S || X !== b || xe !== w || Ge !== I) &&
        (s.blendFuncSeparate(Ae[Q], Ae[X], Ae[xe], Ae[Ge]),
        (S = Q),
        (b = X),
        (w = xe),
        (I = Ge)),
      (rt.equals(v) === !1 || Ut !== T) &&
        (s.blendColor(rt.r, rt.g, rt.b, Ut), v.copy(rt), (T = Ut)),
      (y = P),
      (G = !1);
  }
  function Qe(P, oe) {
    P.side === Zt ? Ze(s.CULL_FACE) : Le(s.CULL_FACE);
    let Q = P.side === Rt;
    oe && (Q = !Q),
      Ie(Q),
      P.blending === xi && P.transparent === !1
        ? be(Rn)
        : be(
            P.blending,
            P.blendEquation,
            P.blendSrc,
            P.blendDst,
            P.blendEquationAlpha,
            P.blendSrcAlpha,
            P.blendDstAlpha,
            P.blendColor,
            P.blendAlpha,
            P.premultipliedAlpha
          ),
      l.setFunc(P.depthFunc),
      l.setTest(P.depthTest),
      l.setMask(P.depthWrite),
      o.setMask(P.colorWrite);
    const X = P.stencilWrite;
    c.setTest(X),
      X &&
        (c.setMask(P.stencilWriteMask),
        c.setFunc(P.stencilFunc, P.stencilRef, P.stencilFuncMask),
        c.setOp(P.stencilFail, P.stencilZFail, P.stencilZPass)),
      st(P.polygonOffset, P.polygonOffsetFactor, P.polygonOffsetUnits),
      P.alphaToCoverage === !0
        ? Le(s.SAMPLE_ALPHA_TO_COVERAGE)
        : Ze(s.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function Ie(P) {
    j !== P && (P ? s.frontFace(s.CW) : s.frontFace(s.CCW), (j = P));
  }
  function Pe(P) {
    P !== bc
      ? (Le(s.CULL_FACE),
        P !== $ &&
          (P === Ra
            ? s.cullFace(s.BACK)
            : P === wc
            ? s.cullFace(s.FRONT)
            : s.cullFace(s.FRONT_AND_BACK)))
      : Ze(s.CULL_FACE),
      ($ = P);
  }
  function Xe(P) {
    P !== C && (ee && s.lineWidth(P), (C = P));
  }
  function st(P, oe, Q) {
    P
      ? (Le(s.POLYGON_OFFSET_FILL),
        (F !== oe || V !== Q) && (s.polygonOffset(oe, Q), (F = oe), (V = Q)))
      : Ze(s.POLYGON_OFFSET_FILL);
  }
  function ut(P) {
    P ? Le(s.SCISSOR_TEST) : Ze(s.SCISSOR_TEST);
  }
  function A(P) {
    P === void 0 && (P = s.TEXTURE0 + Y - 1),
      U !== P && (s.activeTexture(P), (U = P));
  }
  function x(P, oe, Q) {
    Q === void 0 && (U === null ? (Q = s.TEXTURE0 + Y - 1) : (Q = U));
    let X = H[Q];
    X === void 0 && ((X = { type: void 0, texture: void 0 }), (H[Q] = X)),
      (X.type !== P || X.texture !== oe) &&
        (U !== Q && (s.activeTexture(Q), (U = Q)),
        s.bindTexture(P, oe || Te[P]),
        (X.type = P),
        (X.texture = oe));
  }
  function B() {
    const P = H[U];
    P !== void 0 &&
      P.type !== void 0 &&
      (s.bindTexture(P.type, null), (P.type = void 0), (P.texture = void 0));
  }
  function te() {
    try {
      s.compressedTexImage2D.apply(s, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function J() {
    try {
      s.compressedTexImage3D.apply(s, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function ne() {
    try {
      s.texSubImage2D.apply(s, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function me() {
    try {
      s.texSubImage3D.apply(s, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function re() {
    try {
      s.compressedTexSubImage2D.apply(s, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function ce() {
    try {
      s.compressedTexSubImage3D.apply(s, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function R() {
    try {
      s.texStorage2D.apply(s, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function se() {
    try {
      s.texStorage3D.apply(s, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function K() {
    try {
      s.texImage2D.apply(s, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function ye() {
    try {
      s.texImage3D.apply(s, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function ge(P) {
    fe.equals(P) === !1 && (s.scissor(P.x, P.y, P.z, P.w), fe.copy(P));
  }
  function Me(P) {
    Se.equals(P) === !1 && (s.viewport(P.x, P.y, P.z, P.w), Se.copy(P));
  }
  function pe(P, oe) {
    let Q = u.get(oe);
    Q === void 0 && ((Q = new WeakMap()), u.set(oe, Q));
    let X = Q.get(P);
    X === void 0 && ((X = s.getUniformBlockIndex(oe, P.name)), Q.set(P, X));
  }
  function de(P, oe) {
    const X = u.get(oe).get(P);
    h.get(oe) !== X &&
      (s.uniformBlockBinding(oe, X, P.__bindingPointIndex), h.set(oe, X));
  }
  function ke() {
    s.disable(s.BLEND),
      s.disable(s.CULL_FACE),
      s.disable(s.DEPTH_TEST),
      s.disable(s.POLYGON_OFFSET_FILL),
      s.disable(s.SCISSOR_TEST),
      s.disable(s.STENCIL_TEST),
      s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),
      s.blendEquation(s.FUNC_ADD),
      s.blendFunc(s.ONE, s.ZERO),
      s.blendFuncSeparate(s.ONE, s.ZERO, s.ONE, s.ZERO),
      s.blendColor(0, 0, 0, 0),
      s.colorMask(!0, !0, !0, !0),
      s.clearColor(0, 0, 0, 0),
      s.depthMask(!0),
      s.depthFunc(s.LESS),
      s.clearDepth(1),
      s.stencilMask(4294967295),
      s.stencilFunc(s.ALWAYS, 0, 4294967295),
      s.stencilOp(s.KEEP, s.KEEP, s.KEEP),
      s.clearStencil(0),
      s.cullFace(s.BACK),
      s.frontFace(s.CCW),
      s.polygonOffset(0, 0),
      s.activeTexture(s.TEXTURE0),
      s.bindFramebuffer(s.FRAMEBUFFER, null),
      n === !0 &&
        (s.bindFramebuffer(s.DRAW_FRAMEBUFFER, null),
        s.bindFramebuffer(s.READ_FRAMEBUFFER, null)),
      s.useProgram(null),
      s.lineWidth(1),
      s.scissor(0, 0, s.canvas.width, s.canvas.height),
      s.viewport(0, 0, s.canvas.width, s.canvas.height),
      (d = {}),
      (U = null),
      (H = {}),
      (m = {}),
      (g = new WeakMap()),
      (_ = []),
      (p = null),
      (f = !1),
      (y = null),
      (M = null),
      (S = null),
      (b = null),
      (L = null),
      (w = null),
      (I = null),
      (v = new Ce(0, 0, 0)),
      (T = 0),
      (G = !1),
      (j = null),
      ($ = null),
      (C = null),
      (F = null),
      (V = null),
      fe.set(0, 0, s.canvas.width, s.canvas.height),
      Se.set(0, 0, s.canvas.width, s.canvas.height),
      o.reset(),
      l.reset(),
      c.reset();
  }
  return {
    buffers: { color: o, depth: l, stencil: c },
    enable: Le,
    disable: Ze,
    bindFramebuffer: Ne,
    drawBuffers: O,
    useProgram: xt,
    setBlending: be,
    setMaterial: Qe,
    setFlipSided: Ie,
    setCullFace: Pe,
    setLineWidth: Xe,
    setPolygonOffset: st,
    setScissorTest: ut,
    activeTexture: A,
    bindTexture: x,
    unbindTexture: B,
    compressedTexImage2D: te,
    compressedTexImage3D: J,
    texImage2D: K,
    texImage3D: ye,
    updateUBOMapping: pe,
    uniformBlockBinding: de,
    texStorage2D: R,
    texStorage3D: se,
    texSubImage2D: ne,
    texSubImage3D: me,
    compressedTexSubImage2D: re,
    compressedTexSubImage3D: ce,
    scissor: ge,
    viewport: Me,
    reset: ke,
  };
}
function Bm(s, e, t, n, i, r, a) {
  const o = i.isWebGL2,
    l = i.maxTextures,
    c = i.maxCubemapSize,
    h = i.maxTextureSize,
    u = i.maxSamples,
    d = e.has("WEBGL_multisampled_render_to_texture")
      ? e.get("WEBGL_multisampled_render_to_texture")
      : null,
    m =
      typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent),
    g = new WeakMap();
  let _;
  const p = new WeakMap();
  let f = !1;
  try {
    f =
      typeof OffscreenCanvas < "u" &&
      new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {}
  function y(A, x) {
    return f ? new OffscreenCanvas(A, x) : Ki("canvas");
  }
  function M(A, x, B, te) {
    let J = 1;
    if (
      ((A.width > te || A.height > te) &&
        (J = te / Math.max(A.width, A.height)),
      J < 1 || x === !0)
    )
      if (
        (typeof HTMLImageElement < "u" && A instanceof HTMLImageElement) ||
        (typeof HTMLCanvasElement < "u" && A instanceof HTMLCanvasElement) ||
        (typeof ImageBitmap < "u" && A instanceof ImageBitmap)
      ) {
        const ne = x ? Vs : Math.floor,
          me = ne(J * A.width),
          re = ne(J * A.height);
        _ === void 0 && (_ = y(me, re));
        const ce = B ? y(me, re) : _;
        return (
          (ce.width = me),
          (ce.height = re),
          ce.getContext("2d").drawImage(A, 0, 0, me, re),
          console.warn(
            "THREE.WebGLRenderer: Texture has been resized from (" +
              A.width +
              "x" +
              A.height +
              ") to (" +
              me +
              "x" +
              re +
              ")."
          ),
          ce
        );
      } else
        return (
          "data" in A &&
            console.warn(
              "THREE.WebGLRenderer: Image in DataTexture is too big (" +
                A.width +
                "x" +
                A.height +
                ")."
            ),
          A
        );
    return A;
  }
  function S(A) {
    return Wr(A.width) && Wr(A.height);
  }
  function b(A) {
    return o
      ? !1
      : A.wrapS !== wt ||
          A.wrapT !== wt ||
          (A.minFilter !== pt && A.minFilter !== lt);
  }
  function L(A, x) {
    return A.generateMipmaps && x && A.minFilter !== pt && A.minFilter !== lt;
  }
  function w(A) {
    s.generateMipmap(A);
  }
  function I(A, x, B, te, J = !1) {
    if (o === !1) return x;
    if (A !== null) {
      if (s[A] !== void 0) return s[A];
      console.warn(
        "THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" +
          A +
          "'"
      );
    }
    let ne = x;
    if (
      (x === s.RED &&
        (B === s.FLOAT && (ne = s.R32F),
        B === s.HALF_FLOAT && (ne = s.R16F),
        B === s.UNSIGNED_BYTE && (ne = s.R8)),
      x === s.RED_INTEGER &&
        (B === s.UNSIGNED_BYTE && (ne = s.R8UI),
        B === s.UNSIGNED_SHORT && (ne = s.R16UI),
        B === s.UNSIGNED_INT && (ne = s.R32UI),
        B === s.BYTE && (ne = s.R8I),
        B === s.SHORT && (ne = s.R16I),
        B === s.INT && (ne = s.R32I)),
      x === s.RG &&
        (B === s.FLOAT && (ne = s.RG32F),
        B === s.HALF_FLOAT && (ne = s.RG16F),
        B === s.UNSIGNED_BYTE && (ne = s.RG8)),
      x === s.RGBA)
    ) {
      const me = J ? Hs : Ye.getTransfer(te);
      B === s.FLOAT && (ne = s.RGBA32F),
        B === s.HALF_FLOAT && (ne = s.RGBA16F),
        B === s.UNSIGNED_BYTE && (ne = me === Je ? s.SRGB8_ALPHA8 : s.RGBA8),
        B === s.UNSIGNED_SHORT_4_4_4_4 && (ne = s.RGBA4),
        B === s.UNSIGNED_SHORT_5_5_5_1 && (ne = s.RGB5_A1);
    }
    return (
      (ne === s.R16F ||
        ne === s.R32F ||
        ne === s.RG16F ||
        ne === s.RG32F ||
        ne === s.RGBA16F ||
        ne === s.RGBA32F) &&
        e.get("EXT_color_buffer_float"),
      ne
    );
  }
  function v(A, x, B) {
    return L(A, B) === !0 ||
      (A.isFramebufferTexture && A.minFilter !== pt && A.minFilter !== lt)
      ? Math.log2(Math.max(x.width, x.height)) + 1
      : A.mipmaps !== void 0 && A.mipmaps.length > 0
      ? A.mipmaps.length
      : A.isCompressedTexture && Array.isArray(A.image)
      ? x.mipmaps.length
      : 1;
  }
  function T(A) {
    return A === pt || A === zr || A === Us ? s.NEAREST : s.LINEAR;
  }
  function G(A) {
    const x = A.target;
    x.removeEventListener("dispose", G), $(x), x.isVideoTexture && g.delete(x);
  }
  function j(A) {
    const x = A.target;
    x.removeEventListener("dispose", j), F(x);
  }
  function $(A) {
    const x = n.get(A);
    if (x.__webglInit === void 0) return;
    const B = A.source,
      te = p.get(B);
    if (te) {
      const J = te[x.__cacheKey];
      J.usedTimes--,
        J.usedTimes === 0 && C(A),
        Object.keys(te).length === 0 && p.delete(B);
    }
    n.remove(A);
  }
  function C(A) {
    const x = n.get(A);
    s.deleteTexture(x.__webglTexture);
    const B = A.source,
      te = p.get(B);
    delete te[x.__cacheKey], a.memory.textures--;
  }
  function F(A) {
    const x = A.texture,
      B = n.get(A),
      te = n.get(x);
    if (
      (te.__webglTexture !== void 0 &&
        (s.deleteTexture(te.__webglTexture), a.memory.textures--),
      A.depthTexture && A.depthTexture.dispose(),
      A.isWebGLCubeRenderTarget)
    )
      for (let J = 0; J < 6; J++) {
        if (Array.isArray(B.__webglFramebuffer[J]))
          for (let ne = 0; ne < B.__webglFramebuffer[J].length; ne++)
            s.deleteFramebuffer(B.__webglFramebuffer[J][ne]);
        else s.deleteFramebuffer(B.__webglFramebuffer[J]);
        B.__webglDepthbuffer && s.deleteRenderbuffer(B.__webglDepthbuffer[J]);
      }
    else {
      if (Array.isArray(B.__webglFramebuffer))
        for (let J = 0; J < B.__webglFramebuffer.length; J++)
          s.deleteFramebuffer(B.__webglFramebuffer[J]);
      else s.deleteFramebuffer(B.__webglFramebuffer);
      if (
        (B.__webglDepthbuffer && s.deleteRenderbuffer(B.__webglDepthbuffer),
        B.__webglMultisampledFramebuffer &&
          s.deleteFramebuffer(B.__webglMultisampledFramebuffer),
        B.__webglColorRenderbuffer)
      )
        for (let J = 0; J < B.__webglColorRenderbuffer.length; J++)
          B.__webglColorRenderbuffer[J] &&
            s.deleteRenderbuffer(B.__webglColorRenderbuffer[J]);
      B.__webglDepthRenderbuffer &&
        s.deleteRenderbuffer(B.__webglDepthRenderbuffer);
    }
    if (A.isWebGLMultipleRenderTargets)
      for (let J = 0, ne = x.length; J < ne; J++) {
        const me = n.get(x[J]);
        me.__webglTexture &&
          (s.deleteTexture(me.__webglTexture), a.memory.textures--),
          n.remove(x[J]);
      }
    n.remove(x), n.remove(A);
  }
  let V = 0;
  function Y() {
    V = 0;
  }
  function ee() {
    const A = V;
    return (
      A >= l &&
        console.warn(
          "THREE.WebGLTextures: Trying to use " +
            A +
            " texture units while this GPU supports only " +
            l
        ),
      (V += 1),
      A
    );
  }
  function Z(A) {
    const x = [];
    return (
      x.push(A.wrapS),
      x.push(A.wrapT),
      x.push(A.wrapR || 0),
      x.push(A.magFilter),
      x.push(A.minFilter),
      x.push(A.anisotropy),
      x.push(A.internalFormat),
      x.push(A.format),
      x.push(A.type),
      x.push(A.generateMipmaps),
      x.push(A.premultiplyAlpha),
      x.push(A.flipY),
      x.push(A.unpackAlignment),
      x.push(A.colorSpace),
      x.join()
    );
  }
  function q(A, x) {
    const B = n.get(A);
    if (
      (A.isVideoTexture && st(A),
      A.isRenderTargetTexture === !1 &&
        A.version > 0 &&
        B.__version !== A.version)
    ) {
      const te = A.image;
      if (te === null)
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but no image data found."
        );
      else if (te.complete === !1)
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but image is incomplete"
        );
      else {
        Le(B, A, x);
        return;
      }
    }
    t.bindTexture(s.TEXTURE_2D, B.__webglTexture, s.TEXTURE0 + x);
  }
  function U(A, x) {
    const B = n.get(A);
    if (A.version > 0 && B.__version !== A.version) {
      Le(B, A, x);
      return;
    }
    t.bindTexture(s.TEXTURE_2D_ARRAY, B.__webglTexture, s.TEXTURE0 + x);
  }
  function H(A, x) {
    const B = n.get(A);
    if (A.version > 0 && B.__version !== A.version) {
      Le(B, A, x);
      return;
    }
    t.bindTexture(s.TEXTURE_3D, B.__webglTexture, s.TEXTURE0 + x);
  }
  function ae(A, x) {
    const B = n.get(A);
    if (A.version > 0 && B.__version !== A.version) {
      Ze(B, A, x);
      return;
    }
    t.bindTexture(s.TEXTURE_CUBE_MAP, B.__webglTexture, s.TEXTURE0 + x);
  }
  const he = { [Si]: s.REPEAT, [wt]: s.CLAMP_TO_EDGE, [Bs]: s.MIRRORED_REPEAT },
    fe = {
      [pt]: s.NEAREST,
      [zr]: s.NEAREST_MIPMAP_NEAREST,
      [Us]: s.NEAREST_MIPMAP_LINEAR,
      [lt]: s.LINEAR,
      [Ll]: s.LINEAR_MIPMAP_NEAREST,
      [Pn]: s.LINEAR_MIPMAP_LINEAR,
    },
    Se = {
      [Mh]: s.NEVER,
      [wh]: s.ALWAYS,
      [yh]: s.LESS,
      [Sh]: s.LEQUAL,
      [Eh]: s.EQUAL,
      [bh]: s.GEQUAL,
      [Th]: s.GREATER,
      [Ah]: s.NOTEQUAL,
    };
  function ze(A, x, B) {
    if (
      (B
        ? (s.texParameteri(A, s.TEXTURE_WRAP_S, he[x.wrapS]),
          s.texParameteri(A, s.TEXTURE_WRAP_T, he[x.wrapT]),
          (A === s.TEXTURE_3D || A === s.TEXTURE_2D_ARRAY) &&
            s.texParameteri(A, s.TEXTURE_WRAP_R, he[x.wrapR]),
          s.texParameteri(A, s.TEXTURE_MAG_FILTER, fe[x.magFilter]),
          s.texParameteri(A, s.TEXTURE_MIN_FILTER, fe[x.minFilter]))
        : (s.texParameteri(A, s.TEXTURE_WRAP_S, s.CLAMP_TO_EDGE),
          s.texParameteri(A, s.TEXTURE_WRAP_T, s.CLAMP_TO_EDGE),
          (A === s.TEXTURE_3D || A === s.TEXTURE_2D_ARRAY) &&
            s.texParameteri(A, s.TEXTURE_WRAP_R, s.CLAMP_TO_EDGE),
          (x.wrapS !== wt || x.wrapT !== wt) &&
            console.warn(
              "THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."
            ),
          s.texParameteri(A, s.TEXTURE_MAG_FILTER, T(x.magFilter)),
          s.texParameteri(A, s.TEXTURE_MIN_FILTER, T(x.minFilter)),
          x.minFilter !== pt &&
            x.minFilter !== lt &&
            console.warn(
              "THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."
            )),
      x.compareFunction &&
        (s.texParameteri(A, s.TEXTURE_COMPARE_MODE, s.COMPARE_REF_TO_TEXTURE),
        s.texParameteri(A, s.TEXTURE_COMPARE_FUNC, Se[x.compareFunction])),
      e.has("EXT_texture_filter_anisotropic") === !0)
    ) {
      const te = e.get("EXT_texture_filter_anisotropic");
      if (
        x.magFilter === pt ||
        (x.minFilter !== Us && x.minFilter !== Pn) ||
        (x.type === Ht && e.has("OES_texture_float_linear") === !1) ||
        (o === !1 &&
          x.type === Qt &&
          e.has("OES_texture_half_float_linear") === !1)
      )
        return;
      (x.anisotropy > 1 || n.get(x).__currentAnisotropy) &&
        (s.texParameterf(
          A,
          te.TEXTURE_MAX_ANISOTROPY_EXT,
          Math.min(x.anisotropy, i.getMaxAnisotropy())
        ),
        (n.get(x).__currentAnisotropy = x.anisotropy));
    }
  }
  function Te(A, x) {
    let B = !1;
    A.__webglInit === void 0 &&
      ((A.__webglInit = !0), x.addEventListener("dispose", G));
    const te = x.source;
    let J = p.get(te);
    J === void 0 && ((J = {}), p.set(te, J));
    const ne = Z(x);
    if (ne !== A.__cacheKey) {
      J[ne] === void 0 &&
        ((J[ne] = { texture: s.createTexture(), usedTimes: 0 }),
        a.memory.textures++,
        (B = !0)),
        J[ne].usedTimes++;
      const me = J[A.__cacheKey];
      me !== void 0 &&
        (J[A.__cacheKey].usedTimes--, me.usedTimes === 0 && C(x)),
        (A.__cacheKey = ne),
        (A.__webglTexture = J[ne].texture);
    }
    return B;
  }
  function Le(A, x, B) {
    let te = s.TEXTURE_2D;
    (x.isDataArrayTexture || x.isCompressedArrayTexture) &&
      (te = s.TEXTURE_2D_ARRAY),
      x.isData3DTexture && (te = s.TEXTURE_3D);
    const J = Te(A, x),
      ne = x.source;
    t.bindTexture(te, A.__webglTexture, s.TEXTURE0 + B);
    const me = n.get(ne);
    if (ne.version !== me.__version || J === !0) {
      t.activeTexture(s.TEXTURE0 + B);
      const re = Ye.getPrimaries(Ye.workingColorSpace),
        ce = x.colorSpace === Bt ? null : Ye.getPrimaries(x.colorSpace),
        R = x.colorSpace === Bt || re === ce ? s.NONE : s.BROWSER_DEFAULT_WEBGL;
      s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL, x.flipY),
        s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL, x.premultiplyAlpha),
        s.pixelStorei(s.UNPACK_ALIGNMENT, x.unpackAlignment),
        s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL, R);
      const se = b(x) && S(x.image) === !1;
      let K = M(x.image, se, !1, h);
      K = ut(x, K);
      const ye = S(K) || o,
        ge = r.convert(x.format, x.colorSpace);
      let Me = r.convert(x.type),
        pe = I(x.internalFormat, ge, Me, x.colorSpace, x.isVideoTexture);
      ze(te, x, ye);
      let de;
      const ke = x.mipmaps,
        P = o && x.isVideoTexture !== !0,
        oe = me.__version === void 0 || J === !0,
        Q = v(x, K, ye);
      if (x.isDepthTexture)
        (pe = s.DEPTH_COMPONENT),
          o
            ? x.type === Ht
              ? (pe = s.DEPTH_COMPONENT32F)
              : x.type === bn
              ? (pe = s.DEPTH_COMPONENT24)
              : x.type === Xn
              ? (pe = s.DEPTH24_STENCIL8)
              : (pe = s.DEPTH_COMPONENT16)
            : x.type === Ht &&
              console.error(
                "WebGLRenderer: Floating point depth texture requires WebGL2."
              ),
          x.format === Yn &&
            pe === s.DEPTH_COMPONENT &&
            x.type !== Qr &&
            x.type !== bn &&
            (console.warn(
              "THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."
            ),
            (x.type = bn),
            (Me = r.convert(x.type))),
          x.format === Ti &&
            pe === s.DEPTH_COMPONENT &&
            ((pe = s.DEPTH_STENCIL),
            x.type !== Xn &&
              (console.warn(
                "THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."
              ),
              (x.type = Xn),
              (Me = r.convert(x.type)))),
          oe &&
            (P
              ? t.texStorage2D(s.TEXTURE_2D, 1, pe, K.width, K.height)
              : t.texImage2D(
                  s.TEXTURE_2D,
                  0,
                  pe,
                  K.width,
                  K.height,
                  0,
                  ge,
                  Me,
                  null
                ));
      else if (x.isDataTexture)
        if (ke.length > 0 && ye) {
          P &&
            oe &&
            t.texStorage2D(s.TEXTURE_2D, Q, pe, ke[0].width, ke[0].height);
          for (let X = 0, ie = ke.length; X < ie; X++)
            (de = ke[X]),
              P
                ? t.texSubImage2D(
                    s.TEXTURE_2D,
                    X,
                    0,
                    0,
                    de.width,
                    de.height,
                    ge,
                    Me,
                    de.data
                  )
                : t.texImage2D(
                    s.TEXTURE_2D,
                    X,
                    pe,
                    de.width,
                    de.height,
                    0,
                    ge,
                    Me,
                    de.data
                  );
          x.generateMipmaps = !1;
        } else
          P
            ? (oe && t.texStorage2D(s.TEXTURE_2D, Q, pe, K.width, K.height),
              t.texSubImage2D(
                s.TEXTURE_2D,
                0,
                0,
                0,
                K.width,
                K.height,
                ge,
                Me,
                K.data
              ))
            : t.texImage2D(
                s.TEXTURE_2D,
                0,
                pe,
                K.width,
                K.height,
                0,
                ge,
                Me,
                K.data
              );
      else if (x.isCompressedTexture)
        if (x.isCompressedArrayTexture) {
          P &&
            oe &&
            t.texStorage3D(
              s.TEXTURE_2D_ARRAY,
              Q,
              pe,
              ke[0].width,
              ke[0].height,
              K.depth
            );
          for (let X = 0, ie = ke.length; X < ie; X++)
            (de = ke[X]),
              x.format !== Ot
                ? ge !== null
                  ? P
                    ? t.compressedTexSubImage3D(
                        s.TEXTURE_2D_ARRAY,
                        X,
                        0,
                        0,
                        0,
                        de.width,
                        de.height,
                        K.depth,
                        ge,
                        de.data,
                        0,
                        0
                      )
                    : t.compressedTexImage3D(
                        s.TEXTURE_2D_ARRAY,
                        X,
                        pe,
                        de.width,
                        de.height,
                        K.depth,
                        0,
                        de.data,
                        0,
                        0
                      )
                  : console.warn(
                      "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                    )
                : P
                ? t.texSubImage3D(
                    s.TEXTURE_2D_ARRAY,
                    X,
                    0,
                    0,
                    0,
                    de.width,
                    de.height,
                    K.depth,
                    ge,
                    Me,
                    de.data
                  )
                : t.texImage3D(
                    s.TEXTURE_2D_ARRAY,
                    X,
                    pe,
                    de.width,
                    de.height,
                    K.depth,
                    0,
                    ge,
                    Me,
                    de.data
                  );
        } else {
          P &&
            oe &&
            t.texStorage2D(s.TEXTURE_2D, Q, pe, ke[0].width, ke[0].height);
          for (let X = 0, ie = ke.length; X < ie; X++)
            (de = ke[X]),
              x.format !== Ot
                ? ge !== null
                  ? P
                    ? t.compressedTexSubImage2D(
                        s.TEXTURE_2D,
                        X,
                        0,
                        0,
                        de.width,
                        de.height,
                        ge,
                        de.data
                      )
                    : t.compressedTexImage2D(
                        s.TEXTURE_2D,
                        X,
                        pe,
                        de.width,
                        de.height,
                        0,
                        de.data
                      )
                  : console.warn(
                      "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                    )
                : P
                ? t.texSubImage2D(
                    s.TEXTURE_2D,
                    X,
                    0,
                    0,
                    de.width,
                    de.height,
                    ge,
                    Me,
                    de.data
                  )
                : t.texImage2D(
                    s.TEXTURE_2D,
                    X,
                    pe,
                    de.width,
                    de.height,
                    0,
                    ge,
                    Me,
                    de.data
                  );
        }
      else if (x.isDataArrayTexture)
        P
          ? (oe &&
              t.texStorage3D(
                s.TEXTURE_2D_ARRAY,
                Q,
                pe,
                K.width,
                K.height,
                K.depth
              ),
            t.texSubImage3D(
              s.TEXTURE_2D_ARRAY,
              0,
              0,
              0,
              0,
              K.width,
              K.height,
              K.depth,
              ge,
              Me,
              K.data
            ))
          : t.texImage3D(
              s.TEXTURE_2D_ARRAY,
              0,
              pe,
              K.width,
              K.height,
              K.depth,
              0,
              ge,
              Me,
              K.data
            );
      else if (x.isData3DTexture)
        P
          ? (oe &&
              t.texStorage3D(s.TEXTURE_3D, Q, pe, K.width, K.height, K.depth),
            t.texSubImage3D(
              s.TEXTURE_3D,
              0,
              0,
              0,
              0,
              K.width,
              K.height,
              K.depth,
              ge,
              Me,
              K.data
            ))
          : t.texImage3D(
              s.TEXTURE_3D,
              0,
              pe,
              K.width,
              K.height,
              K.depth,
              0,
              ge,
              Me,
              K.data
            );
      else if (x.isFramebufferTexture) {
        if (oe)
          if (P) t.texStorage2D(s.TEXTURE_2D, Q, pe, K.width, K.height);
          else {
            let X = K.width,
              ie = K.height;
            for (let xe = 0; xe < Q; xe++)
              t.texImage2D(s.TEXTURE_2D, xe, pe, X, ie, 0, ge, Me, null),
                (X >>= 1),
                (ie >>= 1);
          }
      } else if (ke.length > 0 && ye) {
        P &&
          oe &&
          t.texStorage2D(s.TEXTURE_2D, Q, pe, ke[0].width, ke[0].height);
        for (let X = 0, ie = ke.length; X < ie; X++)
          (de = ke[X]),
            P
              ? t.texSubImage2D(s.TEXTURE_2D, X, 0, 0, ge, Me, de)
              : t.texImage2D(s.TEXTURE_2D, X, pe, ge, Me, de);
        x.generateMipmaps = !1;
      } else
        P
          ? (oe && t.texStorage2D(s.TEXTURE_2D, Q, pe, K.width, K.height),
            t.texSubImage2D(s.TEXTURE_2D, 0, 0, 0, ge, Me, K))
          : t.texImage2D(s.TEXTURE_2D, 0, pe, ge, Me, K);
      L(x, ye) && w(te),
        (me.__version = ne.version),
        x.onUpdate && x.onUpdate(x);
    }
    A.__version = x.version;
  }
  function Ze(A, x, B) {
    if (x.image.length !== 6) return;
    const te = Te(A, x),
      J = x.source;
    t.bindTexture(s.TEXTURE_CUBE_MAP, A.__webglTexture, s.TEXTURE0 + B);
    const ne = n.get(J);
    if (J.version !== ne.__version || te === !0) {
      t.activeTexture(s.TEXTURE0 + B);
      const me = Ye.getPrimaries(Ye.workingColorSpace),
        re = x.colorSpace === Bt ? null : Ye.getPrimaries(x.colorSpace),
        ce =
          x.colorSpace === Bt || me === re ? s.NONE : s.BROWSER_DEFAULT_WEBGL;
      s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL, x.flipY),
        s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL, x.premultiplyAlpha),
        s.pixelStorei(s.UNPACK_ALIGNMENT, x.unpackAlignment),
        s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL, ce);
      const R = x.isCompressedTexture || x.image[0].isCompressedTexture,
        se = x.image[0] && x.image[0].isDataTexture,
        K = [];
      for (let X = 0; X < 6; X++)
        !R && !se
          ? (K[X] = M(x.image[X], !1, !0, c))
          : (K[X] = se ? x.image[X].image : x.image[X]),
          (K[X] = ut(x, K[X]));
      const ye = K[0],
        ge = S(ye) || o,
        Me = r.convert(x.format, x.colorSpace),
        pe = r.convert(x.type),
        de = I(x.internalFormat, Me, pe, x.colorSpace),
        ke = o && x.isVideoTexture !== !0,
        P = ne.__version === void 0 || te === !0;
      let oe = v(x, ye, ge);
      ze(s.TEXTURE_CUBE_MAP, x, ge);
      let Q;
      if (R) {
        ke &&
          P &&
          t.texStorage2D(s.TEXTURE_CUBE_MAP, oe, de, ye.width, ye.height);
        for (let X = 0; X < 6; X++) {
          Q = K[X].mipmaps;
          for (let ie = 0; ie < Q.length; ie++) {
            const xe = Q[ie];
            x.format !== Ot
              ? Me !== null
                ? ke
                  ? t.compressedTexSubImage2D(
                      s.TEXTURE_CUBE_MAP_POSITIVE_X + X,
                      ie,
                      0,
                      0,
                      xe.width,
                      xe.height,
                      Me,
                      xe.data
                    )
                  : t.compressedTexImage2D(
                      s.TEXTURE_CUBE_MAP_POSITIVE_X + X,
                      ie,
                      de,
                      xe.width,
                      xe.height,
                      0,
                      xe.data
                    )
                : console.warn(
                    "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"
                  )
              : ke
              ? t.texSubImage2D(
                  s.TEXTURE_CUBE_MAP_POSITIVE_X + X,
                  ie,
                  0,
                  0,
                  xe.width,
                  xe.height,
                  Me,
                  pe,
                  xe.data
                )
              : t.texImage2D(
                  s.TEXTURE_CUBE_MAP_POSITIVE_X + X,
                  ie,
                  de,
                  xe.width,
                  xe.height,
                  0,
                  Me,
                  pe,
                  xe.data
                );
          }
        }
      } else {
        (Q = x.mipmaps),
          ke &&
            P &&
            (Q.length > 0 && oe++,
            t.texStorage2D(
              s.TEXTURE_CUBE_MAP,
              oe,
              de,
              K[0].width,
              K[0].height
            ));
        for (let X = 0; X < 6; X++)
          if (se) {
            ke
              ? t.texSubImage2D(
                  s.TEXTURE_CUBE_MAP_POSITIVE_X + X,
                  0,
                  0,
                  0,
                  K[X].width,
                  K[X].height,
                  Me,
                  pe,
                  K[X].data
                )
              : t.texImage2D(
                  s.TEXTURE_CUBE_MAP_POSITIVE_X + X,
                  0,
                  de,
                  K[X].width,
                  K[X].height,
                  0,
                  Me,
                  pe,
                  K[X].data
                );
            for (let ie = 0; ie < Q.length; ie++) {
              const Ge = Q[ie].image[X].image;
              ke
                ? t.texSubImage2D(
                    s.TEXTURE_CUBE_MAP_POSITIVE_X + X,
                    ie + 1,
                    0,
                    0,
                    Ge.width,
                    Ge.height,
                    Me,
                    pe,
                    Ge.data
                  )
                : t.texImage2D(
                    s.TEXTURE_CUBE_MAP_POSITIVE_X + X,
                    ie + 1,
                    de,
                    Ge.width,
                    Ge.height,
                    0,
                    Me,
                    pe,
                    Ge.data
                  );
            }
          } else {
            ke
              ? t.texSubImage2D(
                  s.TEXTURE_CUBE_MAP_POSITIVE_X + X,
                  0,
                  0,
                  0,
                  Me,
                  pe,
                  K[X]
                )
              : t.texImage2D(
                  s.TEXTURE_CUBE_MAP_POSITIVE_X + X,
                  0,
                  de,
                  Me,
                  pe,
                  K[X]
                );
            for (let ie = 0; ie < Q.length; ie++) {
              const xe = Q[ie];
              ke
                ? t.texSubImage2D(
                    s.TEXTURE_CUBE_MAP_POSITIVE_X + X,
                    ie + 1,
                    0,
                    0,
                    Me,
                    pe,
                    xe.image[X]
                  )
                : t.texImage2D(
                    s.TEXTURE_CUBE_MAP_POSITIVE_X + X,
                    ie + 1,
                    de,
                    Me,
                    pe,
                    xe.image[X]
                  );
            }
          }
      }
      L(x, ge) && w(s.TEXTURE_CUBE_MAP),
        (ne.__version = J.version),
        x.onUpdate && x.onUpdate(x);
    }
    A.__version = x.version;
  }
  function Ne(A, x, B, te, J, ne) {
    const me = r.convert(B.format, B.colorSpace),
      re = r.convert(B.type),
      ce = I(B.internalFormat, me, re, B.colorSpace);
    if (!n.get(x).__hasExternalTextures) {
      const se = Math.max(1, x.width >> ne),
        K = Math.max(1, x.height >> ne);
      J === s.TEXTURE_3D || J === s.TEXTURE_2D_ARRAY
        ? t.texImage3D(J, ne, ce, se, K, x.depth, 0, me, re, null)
        : t.texImage2D(J, ne, ce, se, K, 0, me, re, null);
    }
    t.bindFramebuffer(s.FRAMEBUFFER, A),
      Xe(x)
        ? d.framebufferTexture2DMultisampleEXT(
            s.FRAMEBUFFER,
            te,
            J,
            n.get(B).__webglTexture,
            0,
            Pe(x)
          )
        : (J === s.TEXTURE_2D ||
            (J >= s.TEXTURE_CUBE_MAP_POSITIVE_X &&
              J <= s.TEXTURE_CUBE_MAP_NEGATIVE_Z)) &&
          s.framebufferTexture2D(
            s.FRAMEBUFFER,
            te,
            J,
            n.get(B).__webglTexture,
            ne
          ),
      t.bindFramebuffer(s.FRAMEBUFFER, null);
  }
  function O(A, x, B) {
    if (
      (s.bindRenderbuffer(s.RENDERBUFFER, A), x.depthBuffer && !x.stencilBuffer)
    ) {
      let te = o === !0 ? s.DEPTH_COMPONENT24 : s.DEPTH_COMPONENT16;
      if (B || Xe(x)) {
        const J = x.depthTexture;
        J &&
          J.isDepthTexture &&
          (J.type === Ht
            ? (te = s.DEPTH_COMPONENT32F)
            : J.type === bn && (te = s.DEPTH_COMPONENT24));
        const ne = Pe(x);
        Xe(x)
          ? d.renderbufferStorageMultisampleEXT(
              s.RENDERBUFFER,
              ne,
              te,
              x.width,
              x.height
            )
          : s.renderbufferStorageMultisample(
              s.RENDERBUFFER,
              ne,
              te,
              x.width,
              x.height
            );
      } else s.renderbufferStorage(s.RENDERBUFFER, te, x.width, x.height);
      s.framebufferRenderbuffer(
        s.FRAMEBUFFER,
        s.DEPTH_ATTACHMENT,
        s.RENDERBUFFER,
        A
      );
    } else if (x.depthBuffer && x.stencilBuffer) {
      const te = Pe(x);
      B && Xe(x) === !1
        ? s.renderbufferStorageMultisample(
            s.RENDERBUFFER,
            te,
            s.DEPTH24_STENCIL8,
            x.width,
            x.height
          )
        : Xe(x)
        ? d.renderbufferStorageMultisampleEXT(
            s.RENDERBUFFER,
            te,
            s.DEPTH24_STENCIL8,
            x.width,
            x.height
          )
        : s.renderbufferStorage(
            s.RENDERBUFFER,
            s.DEPTH_STENCIL,
            x.width,
            x.height
          ),
        s.framebufferRenderbuffer(
          s.FRAMEBUFFER,
          s.DEPTH_STENCIL_ATTACHMENT,
          s.RENDERBUFFER,
          A
        );
    } else {
      const te =
        x.isWebGLMultipleRenderTargets === !0 ? x.texture : [x.texture];
      for (let J = 0; J < te.length; J++) {
        const ne = te[J],
          me = r.convert(ne.format, ne.colorSpace),
          re = r.convert(ne.type),
          ce = I(ne.internalFormat, me, re, ne.colorSpace),
          R = Pe(x);
        B && Xe(x) === !1
          ? s.renderbufferStorageMultisample(
              s.RENDERBUFFER,
              R,
              ce,
              x.width,
              x.height
            )
          : Xe(x)
          ? d.renderbufferStorageMultisampleEXT(
              s.RENDERBUFFER,
              R,
              ce,
              x.width,
              x.height
            )
          : s.renderbufferStorage(s.RENDERBUFFER, ce, x.width, x.height);
      }
    }
    s.bindRenderbuffer(s.RENDERBUFFER, null);
  }
  function xt(A, x) {
    if (x && x.isWebGLCubeRenderTarget)
      throw new Error(
        "Depth Texture with cube render targets is not supported"
      );
    if (
      (t.bindFramebuffer(s.FRAMEBUFFER, A),
      !(x.depthTexture && x.depthTexture.isDepthTexture))
    )
      throw new Error(
        "renderTarget.depthTexture must be an instance of THREE.DepthTexture"
      );
    (!n.get(x.depthTexture).__webglTexture ||
      x.depthTexture.image.width !== x.width ||
      x.depthTexture.image.height !== x.height) &&
      ((x.depthTexture.image.width = x.width),
      (x.depthTexture.image.height = x.height),
      (x.depthTexture.needsUpdate = !0)),
      q(x.depthTexture, 0);
    const te = n.get(x.depthTexture).__webglTexture,
      J = Pe(x);
    if (x.depthTexture.format === Yn)
      Xe(x)
        ? d.framebufferTexture2DMultisampleEXT(
            s.FRAMEBUFFER,
            s.DEPTH_ATTACHMENT,
            s.TEXTURE_2D,
            te,
            0,
            J
          )
        : s.framebufferTexture2D(
            s.FRAMEBUFFER,
            s.DEPTH_ATTACHMENT,
            s.TEXTURE_2D,
            te,
            0
          );
    else if (x.depthTexture.format === Ti)
      Xe(x)
        ? d.framebufferTexture2DMultisampleEXT(
            s.FRAMEBUFFER,
            s.DEPTH_STENCIL_ATTACHMENT,
            s.TEXTURE_2D,
            te,
            0,
            J
          )
        : s.framebufferTexture2D(
            s.FRAMEBUFFER,
            s.DEPTH_STENCIL_ATTACHMENT,
            s.TEXTURE_2D,
            te,
            0
          );
    else throw new Error("Unknown depthTexture format");
  }
  function ve(A) {
    const x = n.get(A),
      B = A.isWebGLCubeRenderTarget === !0;
    if (A.depthTexture && !x.__autoAllocateDepthBuffer) {
      if (B)
        throw new Error(
          "target.depthTexture not supported in Cube render targets"
        );
      xt(x.__webglFramebuffer, A);
    } else if (B) {
      x.__webglDepthbuffer = [];
      for (let te = 0; te < 6; te++)
        t.bindFramebuffer(s.FRAMEBUFFER, x.__webglFramebuffer[te]),
          (x.__webglDepthbuffer[te] = s.createRenderbuffer()),
          O(x.__webglDepthbuffer[te], A, !1);
    } else
      t.bindFramebuffer(s.FRAMEBUFFER, x.__webglFramebuffer),
        (x.__webglDepthbuffer = s.createRenderbuffer()),
        O(x.__webglDepthbuffer, A, !1);
    t.bindFramebuffer(s.FRAMEBUFFER, null);
  }
  function Ae(A, x, B) {
    const te = n.get(A);
    x !== void 0 &&
      Ne(
        te.__webglFramebuffer,
        A,
        A.texture,
        s.COLOR_ATTACHMENT0,
        s.TEXTURE_2D,
        0
      ),
      B !== void 0 && ve(A);
  }
  function be(A) {
    const x = A.texture,
      B = n.get(A),
      te = n.get(x);
    A.addEventListener("dispose", j),
      A.isWebGLMultipleRenderTargets !== !0 &&
        (te.__webglTexture === void 0 &&
          (te.__webglTexture = s.createTexture()),
        (te.__version = x.version),
        a.memory.textures++);
    const J = A.isWebGLCubeRenderTarget === !0,
      ne = A.isWebGLMultipleRenderTargets === !0,
      me = S(A) || o;
    if (J) {
      B.__webglFramebuffer = [];
      for (let re = 0; re < 6; re++)
        if (o && x.mipmaps && x.mipmaps.length > 0) {
          B.__webglFramebuffer[re] = [];
          for (let ce = 0; ce < x.mipmaps.length; ce++)
            B.__webglFramebuffer[re][ce] = s.createFramebuffer();
        } else B.__webglFramebuffer[re] = s.createFramebuffer();
    } else {
      if (o && x.mipmaps && x.mipmaps.length > 0) {
        B.__webglFramebuffer = [];
        for (let re = 0; re < x.mipmaps.length; re++)
          B.__webglFramebuffer[re] = s.createFramebuffer();
      } else B.__webglFramebuffer = s.createFramebuffer();
      if (ne)
        if (i.drawBuffers) {
          const re = A.texture;
          for (let ce = 0, R = re.length; ce < R; ce++) {
            const se = n.get(re[ce]);
            se.__webglTexture === void 0 &&
              ((se.__webglTexture = s.createTexture()), a.memory.textures++);
          }
        } else
          console.warn(
            "THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension."
          );
      if (o && A.samples > 0 && Xe(A) === !1) {
        const re = ne ? x : [x];
        (B.__webglMultisampledFramebuffer = s.createFramebuffer()),
          (B.__webglColorRenderbuffer = []),
          t.bindFramebuffer(s.FRAMEBUFFER, B.__webglMultisampledFramebuffer);
        for (let ce = 0; ce < re.length; ce++) {
          const R = re[ce];
          (B.__webglColorRenderbuffer[ce] = s.createRenderbuffer()),
            s.bindRenderbuffer(s.RENDERBUFFER, B.__webglColorRenderbuffer[ce]);
          const se = r.convert(R.format, R.colorSpace),
            K = r.convert(R.type),
            ye = I(
              R.internalFormat,
              se,
              K,
              R.colorSpace,
              A.isXRRenderTarget === !0
            ),
            ge = Pe(A);
          s.renderbufferStorageMultisample(
            s.RENDERBUFFER,
            ge,
            ye,
            A.width,
            A.height
          ),
            s.framebufferRenderbuffer(
              s.FRAMEBUFFER,
              s.COLOR_ATTACHMENT0 + ce,
              s.RENDERBUFFER,
              B.__webglColorRenderbuffer[ce]
            );
        }
        s.bindRenderbuffer(s.RENDERBUFFER, null),
          A.depthBuffer &&
            ((B.__webglDepthRenderbuffer = s.createRenderbuffer()),
            O(B.__webglDepthRenderbuffer, A, !0)),
          t.bindFramebuffer(s.FRAMEBUFFER, null);
      }
    }
    if (J) {
      t.bindTexture(s.TEXTURE_CUBE_MAP, te.__webglTexture),
        ze(s.TEXTURE_CUBE_MAP, x, me);
      for (let re = 0; re < 6; re++)
        if (o && x.mipmaps && x.mipmaps.length > 0)
          for (let ce = 0; ce < x.mipmaps.length; ce++)
            Ne(
              B.__webglFramebuffer[re][ce],
              A,
              x,
              s.COLOR_ATTACHMENT0,
              s.TEXTURE_CUBE_MAP_POSITIVE_X + re,
              ce
            );
        else
          Ne(
            B.__webglFramebuffer[re],
            A,
            x,
            s.COLOR_ATTACHMENT0,
            s.TEXTURE_CUBE_MAP_POSITIVE_X + re,
            0
          );
      L(x, me) && w(s.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (ne) {
      const re = A.texture;
      for (let ce = 0, R = re.length; ce < R; ce++) {
        const se = re[ce],
          K = n.get(se);
        t.bindTexture(s.TEXTURE_2D, K.__webglTexture),
          ze(s.TEXTURE_2D, se, me),
          Ne(
            B.__webglFramebuffer,
            A,
            se,
            s.COLOR_ATTACHMENT0 + ce,
            s.TEXTURE_2D,
            0
          ),
          L(se, me) && w(s.TEXTURE_2D);
      }
      t.unbindTexture();
    } else {
      let re = s.TEXTURE_2D;
      if (
        ((A.isWebGL3DRenderTarget || A.isWebGLArrayRenderTarget) &&
          (o
            ? (re = A.isWebGL3DRenderTarget ? s.TEXTURE_3D : s.TEXTURE_2D_ARRAY)
            : console.error(
                "THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2."
              )),
        t.bindTexture(re, te.__webglTexture),
        ze(re, x, me),
        o && x.mipmaps && x.mipmaps.length > 0)
      )
        for (let ce = 0; ce < x.mipmaps.length; ce++)
          Ne(B.__webglFramebuffer[ce], A, x, s.COLOR_ATTACHMENT0, re, ce);
      else Ne(B.__webglFramebuffer, A, x, s.COLOR_ATTACHMENT0, re, 0);
      L(x, me) && w(re), t.unbindTexture();
    }
    A.depthBuffer && ve(A);
  }
  function Qe(A) {
    const x = S(A) || o,
      B = A.isWebGLMultipleRenderTargets === !0 ? A.texture : [A.texture];
    for (let te = 0, J = B.length; te < J; te++) {
      const ne = B[te];
      if (L(ne, x)) {
        const me = A.isWebGLCubeRenderTarget
            ? s.TEXTURE_CUBE_MAP
            : s.TEXTURE_2D,
          re = n.get(ne).__webglTexture;
        t.bindTexture(me, re), w(me), t.unbindTexture();
      }
    }
  }
  function Ie(A) {
    if (o && A.samples > 0 && Xe(A) === !1) {
      const x = A.isWebGLMultipleRenderTargets ? A.texture : [A.texture],
        B = A.width,
        te = A.height;
      let J = s.COLOR_BUFFER_BIT;
      const ne = [],
        me = A.stencilBuffer ? s.DEPTH_STENCIL_ATTACHMENT : s.DEPTH_ATTACHMENT,
        re = n.get(A),
        ce = A.isWebGLMultipleRenderTargets === !0;
      if (ce)
        for (let R = 0; R < x.length; R++)
          t.bindFramebuffer(s.FRAMEBUFFER, re.__webglMultisampledFramebuffer),
            s.framebufferRenderbuffer(
              s.FRAMEBUFFER,
              s.COLOR_ATTACHMENT0 + R,
              s.RENDERBUFFER,
              null
            ),
            t.bindFramebuffer(s.FRAMEBUFFER, re.__webglFramebuffer),
            s.framebufferTexture2D(
              s.DRAW_FRAMEBUFFER,
              s.COLOR_ATTACHMENT0 + R,
              s.TEXTURE_2D,
              null,
              0
            );
      t.bindFramebuffer(s.READ_FRAMEBUFFER, re.__webglMultisampledFramebuffer),
        t.bindFramebuffer(s.DRAW_FRAMEBUFFER, re.__webglFramebuffer);
      for (let R = 0; R < x.length; R++) {
        ne.push(s.COLOR_ATTACHMENT0 + R), A.depthBuffer && ne.push(me);
        const se =
          re.__ignoreDepthValues !== void 0 ? re.__ignoreDepthValues : !1;
        if (
          (se === !1 &&
            (A.depthBuffer && (J |= s.DEPTH_BUFFER_BIT),
            A.stencilBuffer && (J |= s.STENCIL_BUFFER_BIT)),
          ce &&
            s.framebufferRenderbuffer(
              s.READ_FRAMEBUFFER,
              s.COLOR_ATTACHMENT0,
              s.RENDERBUFFER,
              re.__webglColorRenderbuffer[R]
            ),
          se === !0 &&
            (s.invalidateFramebuffer(s.READ_FRAMEBUFFER, [me]),
            s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER, [me])),
          ce)
        ) {
          const K = n.get(x[R]).__webglTexture;
          s.framebufferTexture2D(
            s.DRAW_FRAMEBUFFER,
            s.COLOR_ATTACHMENT0,
            s.TEXTURE_2D,
            K,
            0
          );
        }
        s.blitFramebuffer(0, 0, B, te, 0, 0, B, te, J, s.NEAREST),
          m && s.invalidateFramebuffer(s.READ_FRAMEBUFFER, ne);
      }
      if (
        (t.bindFramebuffer(s.READ_FRAMEBUFFER, null),
        t.bindFramebuffer(s.DRAW_FRAMEBUFFER, null),
        ce)
      )
        for (let R = 0; R < x.length; R++) {
          t.bindFramebuffer(s.FRAMEBUFFER, re.__webglMultisampledFramebuffer),
            s.framebufferRenderbuffer(
              s.FRAMEBUFFER,
              s.COLOR_ATTACHMENT0 + R,
              s.RENDERBUFFER,
              re.__webglColorRenderbuffer[R]
            );
          const se = n.get(x[R]).__webglTexture;
          t.bindFramebuffer(s.FRAMEBUFFER, re.__webglFramebuffer),
            s.framebufferTexture2D(
              s.DRAW_FRAMEBUFFER,
              s.COLOR_ATTACHMENT0 + R,
              s.TEXTURE_2D,
              se,
              0
            );
        }
      t.bindFramebuffer(s.DRAW_FRAMEBUFFER, re.__webglMultisampledFramebuffer);
    }
  }
  function Pe(A) {
    return Math.min(u, A.samples);
  }
  function Xe(A) {
    const x = n.get(A);
    return (
      o &&
      A.samples > 0 &&
      e.has("WEBGL_multisampled_render_to_texture") === !0 &&
      x.__useRenderToTexture !== !1
    );
  }
  function st(A) {
    const x = a.render.frame;
    g.get(A) !== x && (g.set(A, x), A.update());
  }
  function ut(A, x) {
    const B = A.colorSpace,
      te = A.format,
      J = A.type;
    return (
      A.isCompressedTexture === !0 ||
        A.isVideoTexture === !0 ||
        A.format === Vr ||
        (B !== gt &&
          B !== Bt &&
          (Ye.getTransfer(B) === Je
            ? o === !1
              ? e.has("EXT_sRGB") === !0 && te === Ot
                ? ((A.format = Vr),
                  (A.minFilter = lt),
                  (A.generateMipmaps = !1))
                : (x = Vl.sRGBToLinear(x))
              : (te !== Ot || J !== Ln) &&
                console.warn(
                  "THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."
                )
            : console.error(
                "THREE.WebGLTextures: Unsupported texture color space:",
                B
              ))),
      x
    );
  }
  (this.allocateTextureUnit = ee),
    (this.resetTextureUnits = Y),
    (this.setTexture2D = q),
    (this.setTexture2DArray = U),
    (this.setTexture3D = H),
    (this.setTextureCube = ae),
    (this.rebindTextures = Ae),
    (this.setupRenderTarget = be),
    (this.updateRenderTargetMipmap = Qe),
    (this.updateMultisampleRenderTarget = Ie),
    (this.setupDepthRenderbuffer = ve),
    (this.setupFrameBufferTexture = Ne),
    (this.useMultisampledRTT = Xe);
}
function Hm(s, e, t) {
  const n = t.isWebGL2;
  function i(r, a = Bt) {
    let o;
    const l = Ye.getTransfer(a);
    if (r === Ln) return s.UNSIGNED_BYTE;
    if (r === Dl) return s.UNSIGNED_SHORT_4_4_4_4;
    if (r === Il) return s.UNSIGNED_SHORT_5_5_5_1;
    if (r === ah) return s.BYTE;
    if (r === oh) return s.SHORT;
    if (r === Qr) return s.UNSIGNED_SHORT;
    if (r === Pl) return s.INT;
    if (r === bn) return s.UNSIGNED_INT;
    if (r === Ht) return s.FLOAT;
    if (r === Qt)
      return n
        ? s.HALF_FLOAT
        : ((o = e.get("OES_texture_half_float")),
          o !== null ? o.HALF_FLOAT_OES : null);
    if (r === lh) return s.ALPHA;
    if (r === Ot) return s.RGBA;
    if (r === ch) return s.LUMINANCE;
    if (r === hh) return s.LUMINANCE_ALPHA;
    if (r === Yn) return s.DEPTH_COMPONENT;
    if (r === Ti) return s.DEPTH_STENCIL;
    if (r === Vr)
      return (o = e.get("EXT_sRGB")), o !== null ? o.SRGB_ALPHA_EXT : null;
    if (r === uh) return s.RED;
    if (r === Ul) return s.RED_INTEGER;
    if (r === dh) return s.RG;
    if (r === Nl) return s.RG_INTEGER;
    if (r === Fl) return s.RGBA_INTEGER;
    if (r === Js || r === Qs || r === er || r === tr)
      if (l === Je)
        if (((o = e.get("WEBGL_compressed_texture_s3tc_srgb")), o !== null)) {
          if (r === Js) return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (r === Qs) return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (r === er) return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (r === tr) return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else return null;
      else if (((o = e.get("WEBGL_compressed_texture_s3tc")), o !== null)) {
        if (r === Js) return o.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (r === Qs) return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (r === er) return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (r === tr) return o.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else return null;
    if (r === Na || r === Fa || r === Oa || r === Ba)
      if (((o = e.get("WEBGL_compressed_texture_pvrtc")), o !== null)) {
        if (r === Na) return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (r === Fa) return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (r === Oa) return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (r === Ba) return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else return null;
    if (r === fh)
      return (
        (o = e.get("WEBGL_compressed_texture_etc1")),
        o !== null ? o.COMPRESSED_RGB_ETC1_WEBGL : null
      );
    if (r === Ha || r === za)
      if (((o = e.get("WEBGL_compressed_texture_etc")), o !== null)) {
        if (r === Ha)
          return l === Je ? o.COMPRESSED_SRGB8_ETC2 : o.COMPRESSED_RGB8_ETC2;
        if (r === za)
          return l === Je
            ? o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC
            : o.COMPRESSED_RGBA8_ETC2_EAC;
      } else return null;
    if (
      r === ka ||
      r === Ga ||
      r === Va ||
      r === Wa ||
      r === Xa ||
      r === Ya ||
      r === ja ||
      r === qa ||
      r === $a ||
      r === Ka ||
      r === Za ||
      r === Ja ||
      r === Qa ||
      r === eo
    )
      if (((o = e.get("WEBGL_compressed_texture_astc")), o !== null)) {
        if (r === ka)
          return l === Je
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR
            : o.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (r === Ga)
          return l === Je
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR
            : o.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (r === Va)
          return l === Je
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR
            : o.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (r === Wa)
          return l === Je
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR
            : o.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (r === Xa)
          return l === Je
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR
            : o.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (r === Ya)
          return l === Je
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR
            : o.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (r === ja)
          return l === Je
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR
            : o.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (r === qa)
          return l === Je
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR
            : o.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (r === $a)
          return l === Je
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR
            : o.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (r === Ka)
          return l === Je
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR
            : o.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (r === Za)
          return l === Je
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR
            : o.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (r === Ja)
          return l === Je
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR
            : o.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (r === Qa)
          return l === Je
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR
            : o.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (r === eo)
          return l === Je
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR
            : o.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else return null;
    if (r === nr || r === to || r === no)
      if (((o = e.get("EXT_texture_compression_bptc")), o !== null)) {
        if (r === nr)
          return l === Je
            ? o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT
            : o.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (r === to) return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (r === no) return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else return null;
    if (r === ph || r === io || r === so || r === ro)
      if (((o = e.get("EXT_texture_compression_rgtc")), o !== null)) {
        if (r === nr) return o.COMPRESSED_RED_RGTC1_EXT;
        if (r === io) return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (r === so) return o.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (r === ro) return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else return null;
    return r === Xn
      ? n
        ? s.UNSIGNED_INT_24_8
        : ((o = e.get("WEBGL_depth_texture")),
          o !== null ? o.UNSIGNED_INT_24_8_WEBGL : null)
      : s[r] !== void 0
      ? s[r]
      : null;
  }
  return { convert: i };
}
class zm extends At {
  constructor(e = []) {
    super(), (this.isArrayCamera = !0), (this.cameras = e);
  }
}
class Wn extends tt {
  constructor() {
    super(), (this.isGroup = !0), (this.type = "Group");
  }
}
const km = { type: "move" };
class br {
  constructor() {
    (this._targetRay = null), (this._grip = null), (this._hand = null);
  }
  getHandSpace() {
    return (
      this._hand === null &&
        ((this._hand = new Wn()),
        (this._hand.matrixAutoUpdate = !1),
        (this._hand.visible = !1),
        (this._hand.joints = {}),
        (this._hand.inputState = { pinching: !1 })),
      this._hand
    );
  }
  getTargetRaySpace() {
    return (
      this._targetRay === null &&
        ((this._targetRay = new Wn()),
        (this._targetRay.matrixAutoUpdate = !1),
        (this._targetRay.visible = !1),
        (this._targetRay.hasLinearVelocity = !1),
        (this._targetRay.linearVelocity = new D()),
        (this._targetRay.hasAngularVelocity = !1),
        (this._targetRay.angularVelocity = new D())),
      this._targetRay
    );
  }
  getGripSpace() {
    return (
      this._grip === null &&
        ((this._grip = new Wn()),
        (this._grip.matrixAutoUpdate = !1),
        (this._grip.visible = !1),
        (this._grip.hasLinearVelocity = !1),
        (this._grip.linearVelocity = new D()),
        (this._grip.hasAngularVelocity = !1),
        (this._grip.angularVelocity = new D())),
      this._grip
    );
  }
  dispatchEvent(e) {
    return (
      this._targetRay !== null && this._targetRay.dispatchEvent(e),
      this._grip !== null && this._grip.dispatchEvent(e),
      this._hand !== null && this._hand.dispatchEvent(e),
      this
    );
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t) for (const n of e.hand.values()) this._getHandJoint(t, n);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  disconnect(e) {
    return (
      this.dispatchEvent({ type: "disconnected", data: e }),
      this._targetRay !== null && (this._targetRay.visible = !1),
      this._grip !== null && (this._grip.visible = !1),
      this._hand !== null && (this._hand.visible = !1),
      this
    );
  }
  update(e, t, n) {
    let i = null,
      r = null,
      a = null;
    const o = this._targetRay,
      l = this._grip,
      c = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (c && e.hand) {
        a = !0;
        for (const _ of e.hand.values()) {
          const p = t.getJointPose(_, n),
            f = this._getHandJoint(c, _);
          p !== null &&
            (f.matrix.fromArray(p.transform.matrix),
            f.matrix.decompose(f.position, f.rotation, f.scale),
            (f.matrixWorldNeedsUpdate = !0),
            (f.jointRadius = p.radius)),
            (f.visible = p !== null);
        }
        const h = c.joints["index-finger-tip"],
          u = c.joints["thumb-tip"],
          d = h.position.distanceTo(u.position),
          m = 0.02,
          g = 0.005;
        c.inputState.pinching && d > m + g
          ? ((c.inputState.pinching = !1),
            this.dispatchEvent({
              type: "pinchend",
              handedness: e.handedness,
              target: this,
            }))
          : !c.inputState.pinching &&
            d <= m - g &&
            ((c.inputState.pinching = !0),
            this.dispatchEvent({
              type: "pinchstart",
              handedness: e.handedness,
              target: this,
            }));
      } else
        l !== null &&
          e.gripSpace &&
          ((r = t.getPose(e.gripSpace, n)),
          r !== null &&
            (l.matrix.fromArray(r.transform.matrix),
            l.matrix.decompose(l.position, l.rotation, l.scale),
            (l.matrixWorldNeedsUpdate = !0),
            r.linearVelocity
              ? ((l.hasLinearVelocity = !0),
                l.linearVelocity.copy(r.linearVelocity))
              : (l.hasLinearVelocity = !1),
            r.angularVelocity
              ? ((l.hasAngularVelocity = !0),
                l.angularVelocity.copy(r.angularVelocity))
              : (l.hasAngularVelocity = !1)));
      o !== null &&
        ((i = t.getPose(e.targetRaySpace, n)),
        i === null && r !== null && (i = r),
        i !== null &&
          (o.matrix.fromArray(i.transform.matrix),
          o.matrix.decompose(o.position, o.rotation, o.scale),
          (o.matrixWorldNeedsUpdate = !0),
          i.linearVelocity
            ? ((o.hasLinearVelocity = !0),
              o.linearVelocity.copy(i.linearVelocity))
            : (o.hasLinearVelocity = !1),
          i.angularVelocity
            ? ((o.hasAngularVelocity = !0),
              o.angularVelocity.copy(i.angularVelocity))
            : (o.hasAngularVelocity = !1),
          this.dispatchEvent(km)));
    }
    return (
      o !== null && (o.visible = i !== null),
      l !== null && (l.visible = r !== null),
      c !== null && (c.visible = a !== null),
      this
    );
  }
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new Wn();
      (n.matrixAutoUpdate = !1),
        (n.visible = !1),
        (e.joints[t.jointName] = n),
        e.add(n);
    }
    return e.joints[t.jointName];
  }
}
class Gm extends _t {
  constructor(e, t, n, i, r, a, o, l, c, h) {
    if (((h = h !== void 0 ? h : Yn), h !== Yn && h !== Ti))
      throw new Error(
        "DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat"
      );
    n === void 0 && h === Yn && (n = bn),
      n === void 0 && h === Ti && (n = Xn),
      super(null, i, r, a, o, l, h, n, c),
      (this.isDepthTexture = !0),
      (this.image = { width: e, height: t }),
      (this.magFilter = o !== void 0 ? o : pt),
      (this.minFilter = l !== void 0 ? l : pt),
      (this.flipY = !1),
      (this.generateMipmaps = !1),
      (this.compareFunction = null);
  }
  copy(e) {
    return super.copy(e), (this.compareFunction = e.compareFunction), this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      this.compareFunction !== null &&
        (t.compareFunction = this.compareFunction),
      t
    );
  }
}
class Vm extends Zn {
  constructor(e, t) {
    super();
    const n = this;
    let i = null,
      r = 1,
      a = null,
      o = "local-floor",
      l = 1,
      c = null,
      h = null,
      u = null,
      d = null,
      m = null,
      g = null;
    const _ = t.getContextAttributes();
    let p = null,
      f = null;
    const y = [],
      M = [],
      S = new At();
    S.layers.enable(1), (S.viewport = new $e());
    const b = new At();
    b.layers.enable(2), (b.viewport = new $e());
    const L = [S, b],
      w = new zm();
    w.layers.enable(1), w.layers.enable(2);
    let I = null,
      v = null;
    (this.cameraAutoUpdate = !0),
      (this.enabled = !1),
      (this.isPresenting = !1),
      (this.getController = function (U) {
        let H = y[U];
        return (
          H === void 0 && ((H = new br()), (y[U] = H)), H.getTargetRaySpace()
        );
      }),
      (this.getControllerGrip = function (U) {
        let H = y[U];
        return H === void 0 && ((H = new br()), (y[U] = H)), H.getGripSpace();
      }),
      (this.getHand = function (U) {
        let H = y[U];
        return H === void 0 && ((H = new br()), (y[U] = H)), H.getHandSpace();
      });
    function T(U) {
      const H = M.indexOf(U.inputSource);
      if (H === -1) return;
      const ae = y[H];
      ae !== void 0 &&
        (ae.update(U.inputSource, U.frame, c || a),
        ae.dispatchEvent({ type: U.type, data: U.inputSource }));
    }
    function G() {
      i.removeEventListener("select", T),
        i.removeEventListener("selectstart", T),
        i.removeEventListener("selectend", T),
        i.removeEventListener("squeeze", T),
        i.removeEventListener("squeezestart", T),
        i.removeEventListener("squeezeend", T),
        i.removeEventListener("end", G),
        i.removeEventListener("inputsourceschange", j);
      for (let U = 0; U < y.length; U++) {
        const H = M[U];
        H !== null && ((M[U] = null), y[U].disconnect(H));
      }
      (I = null),
        (v = null),
        e.setRenderTarget(p),
        (m = null),
        (d = null),
        (u = null),
        (i = null),
        (f = null),
        q.stop(),
        (n.isPresenting = !1),
        n.dispatchEvent({ type: "sessionend" });
    }
    (this.setFramebufferScaleFactor = function (U) {
      (r = U),
        n.isPresenting === !0 &&
          console.warn(
            "THREE.WebXRManager: Cannot change framebuffer scale while presenting."
          );
    }),
      (this.setReferenceSpaceType = function (U) {
        (o = U),
          n.isPresenting === !0 &&
            console.warn(
              "THREE.WebXRManager: Cannot change reference space type while presenting."
            );
      }),
      (this.getReferenceSpace = function () {
        return c || a;
      }),
      (this.setReferenceSpace = function (U) {
        c = U;
      }),
      (this.getBaseLayer = function () {
        return d !== null ? d : m;
      }),
      (this.getBinding = function () {
        return u;
      }),
      (this.getFrame = function () {
        return g;
      }),
      (this.getSession = function () {
        return i;
      }),
      (this.setSession = async function (U) {
        if (((i = U), i !== null)) {
          if (
            ((p = e.getRenderTarget()),
            i.addEventListener("select", T),
            i.addEventListener("selectstart", T),
            i.addEventListener("selectend", T),
            i.addEventListener("squeeze", T),
            i.addEventListener("squeezestart", T),
            i.addEventListener("squeezeend", T),
            i.addEventListener("end", G),
            i.addEventListener("inputsourceschange", j),
            _.xrCompatible !== !0 && (await t.makeXRCompatible()),
            i.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1)
          ) {
            const H = {
              antialias: i.renderState.layers === void 0 ? _.antialias : !0,
              alpha: !0,
              depth: _.depth,
              stencil: _.stencil,
              framebufferScaleFactor: r,
            };
            (m = new XRWebGLLayer(i, t, H)),
              i.updateRenderState({ baseLayer: m }),
              (f = new qn(m.framebufferWidth, m.framebufferHeight, {
                format: Ot,
                type: Ln,
                colorSpace: e.outputColorSpace,
                stencilBuffer: _.stencil,
              }));
          } else {
            let H = null,
              ae = null,
              he = null;
            _.depth &&
              ((he = _.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24),
              (H = _.stencil ? Ti : Yn),
              (ae = _.stencil ? Xn : bn));
            const fe = {
              colorFormat: t.RGBA8,
              depthFormat: he,
              scaleFactor: r,
            };
            (u = new XRWebGLBinding(i, t)),
              (d = u.createProjectionLayer(fe)),
              i.updateRenderState({ layers: [d] }),
              (f = new qn(d.textureWidth, d.textureHeight, {
                format: Ot,
                type: Ln,
                depthTexture: new Gm(
                  d.textureWidth,
                  d.textureHeight,
                  ae,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  H
                ),
                stencilBuffer: _.stencil,
                colorSpace: e.outputColorSpace,
                samples: _.antialias ? 4 : 0,
              }));
            const Se = e.properties.get(f);
            Se.__ignoreDepthValues = d.ignoreDepthValues;
          }
          (f.isXRRenderTarget = !0),
            this.setFoveation(l),
            (c = null),
            (a = await i.requestReferenceSpace(o)),
            q.setContext(i),
            q.start(),
            (n.isPresenting = !0),
            n.dispatchEvent({ type: "sessionstart" });
        }
      }),
      (this.getEnvironmentBlendMode = function () {
        if (i !== null) return i.environmentBlendMode;
      });
    function j(U) {
      for (let H = 0; H < U.removed.length; H++) {
        const ae = U.removed[H],
          he = M.indexOf(ae);
        he >= 0 && ((M[he] = null), y[he].disconnect(ae));
      }
      for (let H = 0; H < U.added.length; H++) {
        const ae = U.added[H];
        let he = M.indexOf(ae);
        if (he === -1) {
          for (let Se = 0; Se < y.length; Se++)
            if (Se >= M.length) {
              M.push(ae), (he = Se);
              break;
            } else if (M[Se] === null) {
              (M[Se] = ae), (he = Se);
              break;
            }
          if (he === -1) break;
        }
        const fe = y[he];
        fe && fe.connect(ae);
      }
    }
    const $ = new D(),
      C = new D();
    function F(U, H, ae) {
      $.setFromMatrixPosition(H.matrixWorld),
        C.setFromMatrixPosition(ae.matrixWorld);
      const he = $.distanceTo(C),
        fe = H.projectionMatrix.elements,
        Se = ae.projectionMatrix.elements,
        ze = fe[14] / (fe[10] - 1),
        Te = fe[14] / (fe[10] + 1),
        Le = (fe[9] + 1) / fe[5],
        Ze = (fe[9] - 1) / fe[5],
        Ne = (fe[8] - 1) / fe[0],
        O = (Se[8] + 1) / Se[0],
        xt = ze * Ne,
        ve = ze * O,
        Ae = he / (-Ne + O),
        be = Ae * -Ne;
      H.matrixWorld.decompose(U.position, U.quaternion, U.scale),
        U.translateX(be),
        U.translateZ(Ae),
        U.matrixWorld.compose(U.position, U.quaternion, U.scale),
        U.matrixWorldInverse.copy(U.matrixWorld).invert();
      const Qe = ze + Ae,
        Ie = Te + Ae,
        Pe = xt - be,
        Xe = ve + (he - be),
        st = ((Le * Te) / Ie) * Qe,
        ut = ((Ze * Te) / Ie) * Qe;
      U.projectionMatrix.makePerspective(Pe, Xe, st, ut, Qe, Ie),
        U.projectionMatrixInverse.copy(U.projectionMatrix).invert();
    }
    function V(U, H) {
      H === null
        ? U.matrixWorld.copy(U.matrix)
        : U.matrixWorld.multiplyMatrices(H.matrixWorld, U.matrix),
        U.matrixWorldInverse.copy(U.matrixWorld).invert();
    }
    this.updateCamera = function (U) {
      if (i === null) return;
      (w.near = b.near = S.near = U.near),
        (w.far = b.far = S.far = U.far),
        (I !== w.near || v !== w.far) &&
          (i.updateRenderState({ depthNear: w.near, depthFar: w.far }),
          (I = w.near),
          (v = w.far));
      const H = U.parent,
        ae = w.cameras;
      V(w, H);
      for (let he = 0; he < ae.length; he++) V(ae[he], H);
      ae.length === 2
        ? F(w, S, b)
        : w.projectionMatrix.copy(S.projectionMatrix),
        Y(U, w, H);
    };
    function Y(U, H, ae) {
      ae === null
        ? U.matrix.copy(H.matrixWorld)
        : (U.matrix.copy(ae.matrixWorld),
          U.matrix.invert(),
          U.matrix.multiply(H.matrixWorld)),
        U.matrix.decompose(U.position, U.quaternion, U.scale),
        U.updateMatrixWorld(!0),
        U.projectionMatrix.copy(H.projectionMatrix),
        U.projectionMatrixInverse.copy(H.projectionMatrixInverse),
        U.isPerspectiveCamera &&
          ((U.fov = bi * 2 * Math.atan(1 / U.projectionMatrix.elements[5])),
          (U.zoom = 1));
    }
    (this.getCamera = function () {
      return w;
    }),
      (this.getFoveation = function () {
        if (!(d === null && m === null)) return l;
      }),
      (this.setFoveation = function (U) {
        (l = U),
          d !== null && (d.fixedFoveation = U),
          m !== null && m.fixedFoveation !== void 0 && (m.fixedFoveation = U);
      });
    let ee = null;
    function Z(U, H) {
      if (((h = H.getViewerPose(c || a)), (g = H), h !== null)) {
        const ae = h.views;
        m !== null &&
          (e.setRenderTargetFramebuffer(f, m.framebuffer),
          e.setRenderTarget(f));
        let he = !1;
        ae.length !== w.cameras.length && ((w.cameras.length = 0), (he = !0));
        for (let fe = 0; fe < ae.length; fe++) {
          const Se = ae[fe];
          let ze = null;
          if (m !== null) ze = m.getViewport(Se);
          else {
            const Le = u.getViewSubImage(d, Se);
            (ze = Le.viewport),
              fe === 0 &&
                (e.setRenderTargetTextures(
                  f,
                  Le.colorTexture,
                  d.ignoreDepthValues ? void 0 : Le.depthStencilTexture
                ),
                e.setRenderTarget(f));
          }
          let Te = L[fe];
          Te === void 0 &&
            ((Te = new At()),
            Te.layers.enable(fe),
            (Te.viewport = new $e()),
            (L[fe] = Te)),
            Te.matrix.fromArray(Se.transform.matrix),
            Te.matrix.decompose(Te.position, Te.quaternion, Te.scale),
            Te.projectionMatrix.fromArray(Se.projectionMatrix),
            Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),
            Te.viewport.set(ze.x, ze.y, ze.width, ze.height),
            fe === 0 &&
              (w.matrix.copy(Te.matrix),
              w.matrix.decompose(w.position, w.quaternion, w.scale)),
            he === !0 && w.cameras.push(Te);
        }
      }
      for (let ae = 0; ae < y.length; ae++) {
        const he = M[ae],
          fe = y[ae];
        he !== null && fe !== void 0 && fe.update(he, H, c || a);
      }
      ee && ee(U, H),
        H.detectedPlanes &&
          n.dispatchEvent({ type: "planesdetected", data: H }),
        (g = null);
    }
    const q = new ec();
    q.setAnimationLoop(Z),
      (this.setAnimationLoop = function (U) {
        ee = U;
      }),
      (this.dispose = function () {});
  }
}
function Wm(s, e) {
  function t(p, f) {
    p.matrixAutoUpdate === !0 && p.updateMatrix(), f.value.copy(p.matrix);
  }
  function n(p, f) {
    f.color.getRGB(p.fogColor.value, Kl(s)),
      f.isFog
        ? ((p.fogNear.value = f.near), (p.fogFar.value = f.far))
        : f.isFogExp2 && (p.fogDensity.value = f.density);
  }
  function i(p, f, y, M, S) {
    f.isMeshBasicMaterial || f.isMeshLambertMaterial
      ? r(p, f)
      : f.isMeshToonMaterial
      ? (r(p, f), u(p, f))
      : f.isMeshPhongMaterial
      ? (r(p, f), h(p, f))
      : f.isMeshStandardMaterial
      ? (r(p, f), d(p, f), f.isMeshPhysicalMaterial && m(p, f, S))
      : f.isMeshMatcapMaterial
      ? (r(p, f), g(p, f))
      : f.isMeshDepthMaterial
      ? r(p, f)
      : f.isMeshDistanceMaterial
      ? (r(p, f), _(p, f))
      : f.isMeshNormalMaterial
      ? r(p, f)
      : f.isLineBasicMaterial
      ? (a(p, f), f.isLineDashedMaterial && o(p, f))
      : f.isPointsMaterial
      ? l(p, f, y, M)
      : f.isSpriteMaterial
      ? c(p, f)
      : f.isShadowMaterial
      ? (p.color.value.copy(f.color), (p.opacity.value = f.opacity))
      : f.isShaderMaterial && (f.uniformsNeedUpdate = !1);
  }
  function r(p, f) {
    (p.opacity.value = f.opacity),
      f.color && p.diffuse.value.copy(f.color),
      f.emissive &&
        p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),
      f.map && ((p.map.value = f.map), t(f.map, p.mapTransform)),
      f.alphaMap &&
        ((p.alphaMap.value = f.alphaMap), t(f.alphaMap, p.alphaMapTransform)),
      f.bumpMap &&
        ((p.bumpMap.value = f.bumpMap),
        t(f.bumpMap, p.bumpMapTransform),
        (p.bumpScale.value = f.bumpScale),
        f.side === Rt && (p.bumpScale.value *= -1)),
      f.normalMap &&
        ((p.normalMap.value = f.normalMap),
        t(f.normalMap, p.normalMapTransform),
        p.normalScale.value.copy(f.normalScale),
        f.side === Rt && p.normalScale.value.negate()),
      f.displacementMap &&
        ((p.displacementMap.value = f.displacementMap),
        t(f.displacementMap, p.displacementMapTransform),
        (p.displacementScale.value = f.displacementScale),
        (p.displacementBias.value = f.displacementBias)),
      f.emissiveMap &&
        ((p.emissiveMap.value = f.emissiveMap),
        t(f.emissiveMap, p.emissiveMapTransform)),
      f.specularMap &&
        ((p.specularMap.value = f.specularMap),
        t(f.specularMap, p.specularMapTransform)),
      f.alphaTest > 0 && (p.alphaTest.value = f.alphaTest);
    const y = e.get(f).envMap;
    if (
      (y &&
        ((p.envMap.value = y),
        (p.flipEnvMap.value =
          y.isCubeTexture && y.isRenderTargetTexture === !1 ? -1 : 1),
        (p.reflectivity.value = f.reflectivity),
        (p.ior.value = f.ior),
        (p.refractionRatio.value = f.refractionRatio)),
      f.lightMap)
    ) {
      p.lightMap.value = f.lightMap;
      const M = s._useLegacyLights === !0 ? Math.PI : 1;
      (p.lightMapIntensity.value = f.lightMapIntensity * M),
        t(f.lightMap, p.lightMapTransform);
    }
    f.aoMap &&
      ((p.aoMap.value = f.aoMap),
      (p.aoMapIntensity.value = f.aoMapIntensity),
      t(f.aoMap, p.aoMapTransform));
  }
  function a(p, f) {
    p.diffuse.value.copy(f.color),
      (p.opacity.value = f.opacity),
      f.map && ((p.map.value = f.map), t(f.map, p.mapTransform));
  }
  function o(p, f) {
    (p.dashSize.value = f.dashSize),
      (p.totalSize.value = f.dashSize + f.gapSize),
      (p.scale.value = f.scale);
  }
  function l(p, f, y, M) {
    p.diffuse.value.copy(f.color),
      (p.opacity.value = f.opacity),
      (p.size.value = f.size * y),
      (p.scale.value = M * 0.5),
      f.map && ((p.map.value = f.map), t(f.map, p.uvTransform)),
      f.alphaMap &&
        ((p.alphaMap.value = f.alphaMap), t(f.alphaMap, p.alphaMapTransform)),
      f.alphaTest > 0 && (p.alphaTest.value = f.alphaTest);
  }
  function c(p, f) {
    p.diffuse.value.copy(f.color),
      (p.opacity.value = f.opacity),
      (p.rotation.value = f.rotation),
      f.map && ((p.map.value = f.map), t(f.map, p.mapTransform)),
      f.alphaMap &&
        ((p.alphaMap.value = f.alphaMap), t(f.alphaMap, p.alphaMapTransform)),
      f.alphaTest > 0 && (p.alphaTest.value = f.alphaTest);
  }
  function h(p, f) {
    p.specular.value.copy(f.specular),
      (p.shininess.value = Math.max(f.shininess, 1e-4));
  }
  function u(p, f) {
    f.gradientMap && (p.gradientMap.value = f.gradientMap);
  }
  function d(p, f) {
    (p.metalness.value = f.metalness),
      f.metalnessMap &&
        ((p.metalnessMap.value = f.metalnessMap),
        t(f.metalnessMap, p.metalnessMapTransform)),
      (p.roughness.value = f.roughness),
      f.roughnessMap &&
        ((p.roughnessMap.value = f.roughnessMap),
        t(f.roughnessMap, p.roughnessMapTransform)),
      e.get(f).envMap && (p.envMapIntensity.value = f.envMapIntensity);
  }
  function m(p, f, y) {
    (p.ior.value = f.ior),
      f.sheen > 0 &&
        (p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),
        (p.sheenRoughness.value = f.sheenRoughness),
        f.sheenColorMap &&
          ((p.sheenColorMap.value = f.sheenColorMap),
          t(f.sheenColorMap, p.sheenColorMapTransform)),
        f.sheenRoughnessMap &&
          ((p.sheenRoughnessMap.value = f.sheenRoughnessMap),
          t(f.sheenRoughnessMap, p.sheenRoughnessMapTransform))),
      f.clearcoat > 0 &&
        ((p.clearcoat.value = f.clearcoat),
        (p.clearcoatRoughness.value = f.clearcoatRoughness),
        f.clearcoatMap &&
          ((p.clearcoatMap.value = f.clearcoatMap),
          t(f.clearcoatMap, p.clearcoatMapTransform)),
        f.clearcoatRoughnessMap &&
          ((p.clearcoatRoughnessMap.value = f.clearcoatRoughnessMap),
          t(f.clearcoatRoughnessMap, p.clearcoatRoughnessMapTransform)),
        f.clearcoatNormalMap &&
          ((p.clearcoatNormalMap.value = f.clearcoatNormalMap),
          t(f.clearcoatNormalMap, p.clearcoatNormalMapTransform),
          p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),
          f.side === Rt && p.clearcoatNormalScale.value.negate())),
      f.iridescence > 0 &&
        ((p.iridescence.value = f.iridescence),
        (p.iridescenceIOR.value = f.iridescenceIOR),
        (p.iridescenceThicknessMinimum.value = f.iridescenceThicknessRange[0]),
        (p.iridescenceThicknessMaximum.value = f.iridescenceThicknessRange[1]),
        f.iridescenceMap &&
          ((p.iridescenceMap.value = f.iridescenceMap),
          t(f.iridescenceMap, p.iridescenceMapTransform)),
        f.iridescenceThicknessMap &&
          ((p.iridescenceThicknessMap.value = f.iridescenceThicknessMap),
          t(f.iridescenceThicknessMap, p.iridescenceThicknessMapTransform))),
      f.transmission > 0 &&
        ((p.transmission.value = f.transmission),
        (p.transmissionSamplerMap.value = y.texture),
        p.transmissionSamplerSize.value.set(y.width, y.height),
        f.transmissionMap &&
          ((p.transmissionMap.value = f.transmissionMap),
          t(f.transmissionMap, p.transmissionMapTransform)),
        (p.thickness.value = f.thickness),
        f.thicknessMap &&
          ((p.thicknessMap.value = f.thicknessMap),
          t(f.thicknessMap, p.thicknessMapTransform)),
        (p.attenuationDistance.value = f.attenuationDistance),
        p.attenuationColor.value.copy(f.attenuationColor)),
      f.anisotropy > 0 &&
        (p.anisotropyVector.value.set(
          f.anisotropy * Math.cos(f.anisotropyRotation),
          f.anisotropy * Math.sin(f.anisotropyRotation)
        ),
        f.anisotropyMap &&
          ((p.anisotropyMap.value = f.anisotropyMap),
          t(f.anisotropyMap, p.anisotropyMapTransform))),
      (p.specularIntensity.value = f.specularIntensity),
      p.specularColor.value.copy(f.specularColor),
      f.specularColorMap &&
        ((p.specularColorMap.value = f.specularColorMap),
        t(f.specularColorMap, p.specularColorMapTransform)),
      f.specularIntensityMap &&
        ((p.specularIntensityMap.value = f.specularIntensityMap),
        t(f.specularIntensityMap, p.specularIntensityMapTransform));
  }
  function g(p, f) {
    f.matcap && (p.matcap.value = f.matcap);
  }
  function _(p, f) {
    const y = e.get(f).light;
    p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),
      (p.nearDistance.value = y.shadow.camera.near),
      (p.farDistance.value = y.shadow.camera.far);
  }
  return { refreshFogUniforms: n, refreshMaterialUniforms: i };
}
function Xm(s, e, t, n) {
  let i = {},
    r = {},
    a = [];
  const o = t.isWebGL2 ? s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS) : 0;
  function l(y, M) {
    const S = M.program;
    n.uniformBlockBinding(y, S);
  }
  function c(y, M) {
    let S = i[y.id];
    S === void 0 &&
      (g(y), (S = h(y)), (i[y.id] = S), y.addEventListener("dispose", p));
    const b = M.program;
    n.updateUBOMapping(y, b);
    const L = e.render.frame;
    r[y.id] !== L && (d(y), (r[y.id] = L));
  }
  function h(y) {
    const M = u();
    y.__bindingPointIndex = M;
    const S = s.createBuffer(),
      b = y.__size,
      L = y.usage;
    return (
      s.bindBuffer(s.UNIFORM_BUFFER, S),
      s.bufferData(s.UNIFORM_BUFFER, b, L),
      s.bindBuffer(s.UNIFORM_BUFFER, null),
      s.bindBufferBase(s.UNIFORM_BUFFER, M, S),
      S
    );
  }
  function u() {
    for (let y = 0; y < o; y++) if (a.indexOf(y) === -1) return a.push(y), y;
    return (
      console.error(
        "THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."
      ),
      0
    );
  }
  function d(y) {
    const M = i[y.id],
      S = y.uniforms,
      b = y.__cache;
    s.bindBuffer(s.UNIFORM_BUFFER, M);
    for (let L = 0, w = S.length; L < w; L++) {
      const I = S[L];
      if (m(I, L, b) === !0) {
        const v = I.__offset,
          T = Array.isArray(I.value) ? I.value : [I.value];
        let G = 0;
        for (let j = 0; j < T.length; j++) {
          const $ = T[j],
            C = _($);
          typeof $ == "number"
            ? ((I.__data[0] = $),
              s.bufferSubData(s.UNIFORM_BUFFER, v + G, I.__data))
            : $.isMatrix3
            ? ((I.__data[0] = $.elements[0]),
              (I.__data[1] = $.elements[1]),
              (I.__data[2] = $.elements[2]),
              (I.__data[3] = $.elements[0]),
              (I.__data[4] = $.elements[3]),
              (I.__data[5] = $.elements[4]),
              (I.__data[6] = $.elements[5]),
              (I.__data[7] = $.elements[0]),
              (I.__data[8] = $.elements[6]),
              (I.__data[9] = $.elements[7]),
              (I.__data[10] = $.elements[8]),
              (I.__data[11] = $.elements[0]))
            : ($.toArray(I.__data, G),
              (G += C.storage / Float32Array.BYTES_PER_ELEMENT));
        }
        s.bufferSubData(s.UNIFORM_BUFFER, v, I.__data);
      }
    }
    s.bindBuffer(s.UNIFORM_BUFFER, null);
  }
  function m(y, M, S) {
    const b = y.value;
    if (S[M] === void 0) {
      if (typeof b == "number") S[M] = b;
      else {
        const L = Array.isArray(b) ? b : [b],
          w = [];
        for (let I = 0; I < L.length; I++) w.push(L[I].clone());
        S[M] = w;
      }
      return !0;
    } else if (typeof b == "number") {
      if (S[M] !== b) return (S[M] = b), !0;
    } else {
      const L = Array.isArray(S[M]) ? S[M] : [S[M]],
        w = Array.isArray(b) ? b : [b];
      for (let I = 0; I < L.length; I++) {
        const v = L[I];
        if (v.equals(w[I]) === !1) return v.copy(w[I]), !0;
      }
    }
    return !1;
  }
  function g(y) {
    const M = y.uniforms;
    let S = 0;
    const b = 16;
    let L = 0;
    for (let w = 0, I = M.length; w < I; w++) {
      const v = M[w],
        T = { boundary: 0, storage: 0 },
        G = Array.isArray(v.value) ? v.value : [v.value];
      for (let j = 0, $ = G.length; j < $; j++) {
        const C = G[j],
          F = _(C);
        (T.boundary += F.boundary), (T.storage += F.storage);
      }
      if (
        ((v.__data = new Float32Array(
          T.storage / Float32Array.BYTES_PER_ELEMENT
        )),
        (v.__offset = S),
        w > 0)
      ) {
        L = S % b;
        const j = b - L;
        L !== 0 && j - T.boundary < 0 && ((S += b - L), (v.__offset = S));
      }
      S += T.storage;
    }
    return (
      (L = S % b), L > 0 && (S += b - L), (y.__size = S), (y.__cache = {}), this
    );
  }
  function _(y) {
    const M = { boundary: 0, storage: 0 };
    return (
      typeof y == "number"
        ? ((M.boundary = 4), (M.storage = 4))
        : y.isVector2
        ? ((M.boundary = 8), (M.storage = 8))
        : y.isVector3 || y.isColor
        ? ((M.boundary = 16), (M.storage = 12))
        : y.isVector4
        ? ((M.boundary = 16), (M.storage = 16))
        : y.isMatrix3
        ? ((M.boundary = 48), (M.storage = 48))
        : y.isMatrix4
        ? ((M.boundary = 64), (M.storage = 64))
        : y.isTexture
        ? console.warn(
            "THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."
          )
        : console.warn(
            "THREE.WebGLRenderer: Unsupported uniform value type.",
            y
          ),
      M
    );
  }
  function p(y) {
    const M = y.target;
    M.removeEventListener("dispose", p);
    const S = a.indexOf(M.__bindingPointIndex);
    a.splice(S, 1), s.deleteBuffer(i[M.id]), delete i[M.id], delete r[M.id];
  }
  function f() {
    for (const y in i) s.deleteBuffer(i[y]);
    (a = []), (i = {}), (r = {});
  }
  return { bind: l, update: c, dispose: f };
}
class rc {
  constructor(e = {}) {
    const {
      canvas: t = kh(),
      context: n = null,
      depth: i = !0,
      stencil: r = !0,
      alpha: a = !1,
      antialias: o = !1,
      premultipliedAlpha: l = !0,
      preserveDrawingBuffer: c = !1,
      powerPreference: h = "default",
      failIfMajorPerformanceCaveat: u = !1,
    } = e;
    this.isWebGLRenderer = !0;
    let d;
    n !== null ? (d = n.getContextAttributes().alpha) : (d = a);
    const m = new Uint32Array(4),
      g = new Int32Array(4);
    let _ = null,
      p = null;
    const f = [],
      y = [];
    (this.domElement = t),
      (this.debug = { checkShaderErrors: !0, onShaderError: null }),
      (this.autoClear = !0),
      (this.autoClearColor = !0),
      (this.autoClearDepth = !0),
      (this.autoClearStencil = !0),
      (this.sortObjects = !0),
      (this.clippingPlanes = []),
      (this.localClippingEnabled = !1),
      (this._outputColorSpace = et),
      (this._useLegacyLights = !1),
      (this.toneMapping = Cn),
      (this.toneMappingExposure = 1);
    const M = this;
    let S = !1,
      b = 0,
      L = 0,
      w = null,
      I = -1,
      v = null;
    const T = new $e(),
      G = new $e();
    let j = null;
    const $ = new Ce(0);
    let C = 0,
      F = t.width,
      V = t.height,
      Y = 1,
      ee = null,
      Z = null;
    const q = new $e(0, 0, F, V),
      U = new $e(0, 0, F, V);
    let H = !1;
    const ae = new ia();
    let he = !1,
      fe = !1,
      Se = null;
    const ze = new He(),
      Te = new Re(),
      Le = new D(),
      Ze = {
        background: null,
        fog: null,
        environment: null,
        overrideMaterial: null,
        isScene: !0,
      };
    function Ne() {
      return w === null ? Y : 1;
    }
    let O = n;
    function xt(E, N) {
      for (let z = 0; z < E.length; z++) {
        const k = E[z],
          W = t.getContext(k, N);
        if (W !== null) return W;
      }
      return null;
    }
    try {
      const E = {
        alpha: !0,
        depth: i,
        stencil: r,
        antialias: o,
        premultipliedAlpha: l,
        preserveDrawingBuffer: c,
        powerPreference: h,
        failIfMajorPerformanceCaveat: u,
      };
      if (
        ("setAttribute" in t &&
          t.setAttribute("data-engine", `three.js r${Jr}`),
        t.addEventListener("webglcontextlost", ke, !1),
        t.addEventListener("webglcontextrestored", P, !1),
        t.addEventListener("webglcontextcreationerror", oe, !1),
        O === null)
      ) {
        const N = ["webgl2", "webgl", "experimental-webgl"];
        if (
          (M.isWebGL1Renderer === !0 && N.shift(), (O = xt(N, E)), O === null)
        )
          throw xt(N)
            ? new Error(
                "Error creating WebGL context with your selected attributes."
              )
            : new Error("Error creating WebGL context.");
      }
      typeof WebGLRenderingContext < "u" &&
        O instanceof WebGLRenderingContext &&
        console.warn(
          "THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."
        ),
        O.getShaderPrecisionFormat === void 0 &&
          (O.getShaderPrecisionFormat = function () {
            return { rangeMin: 1, rangeMax: 1, precision: 1 };
          });
    } catch (E) {
      throw (console.error("THREE.WebGLRenderer: " + E.message), E);
    }
    let ve,
      Ae,
      be,
      Qe,
      Ie,
      Pe,
      Xe,
      st,
      ut,
      A,
      x,
      B,
      te,
      J,
      ne,
      me,
      re,
      ce,
      R,
      se,
      K,
      ye,
      ge,
      Me;
    function pe() {
      (ve = new tp(O)),
        (Ae = new $f(O, ve, e)),
        ve.init(Ae),
        (ye = new Hm(O, ve, Ae)),
        (be = new Om(O, ve, Ae)),
        (Qe = new sp(O)),
        (Ie = new Sm()),
        (Pe = new Bm(O, ve, be, Ie, Ae, ye, Qe)),
        (Xe = new Zf(M)),
        (st = new ep(M)),
        (ut = new fu(O, Ae)),
        (ge = new jf(O, ve, ut, Ae)),
        (A = new np(O, ut, Qe, ge)),
        (x = new lp(O, A, ut, Qe)),
        (R = new op(O, Ae, Pe)),
        (me = new Kf(Ie)),
        (B = new Em(M, Xe, st, ve, Ae, ge, me)),
        (te = new Wm(M, Ie)),
        (J = new Am()),
        (ne = new Pm(ve, Ae)),
        (ce = new Yf(M, Xe, st, be, x, d, l)),
        (re = new Fm(M, x, Ae)),
        (Me = new Xm(O, Qe, Ae, be)),
        (se = new qf(O, ve, Qe, Ae)),
        (K = new ip(O, ve, Qe, Ae)),
        (Qe.programs = B.programs),
        (M.capabilities = Ae),
        (M.extensions = ve),
        (M.properties = Ie),
        (M.renderLists = J),
        (M.shadowMap = re),
        (M.state = be),
        (M.info = Qe);
    }
    pe();
    const de = new Vm(M, O);
    (this.xr = de),
      (this.getContext = function () {
        return O;
      }),
      (this.getContextAttributes = function () {
        return O.getContextAttributes();
      }),
      (this.forceContextLoss = function () {
        const E = ve.get("WEBGL_lose_context");
        E && E.loseContext();
      }),
      (this.forceContextRestore = function () {
        const E = ve.get("WEBGL_lose_context");
        E && E.restoreContext();
      }),
      (this.getPixelRatio = function () {
        return Y;
      }),
      (this.setPixelRatio = function (E) {
        E !== void 0 && ((Y = E), this.setSize(F, V, !1));
      }),
      (this.getSize = function (E) {
        return E.set(F, V);
      }),
      (this.setSize = function (E, N, z = !0) {
        if (de.isPresenting) {
          console.warn(
            "THREE.WebGLRenderer: Can't change size while VR device is presenting."
          );
          return;
        }
        (F = E),
          (V = N),
          (t.width = Math.floor(E * Y)),
          (t.height = Math.floor(N * Y)),
          z === !0 && ((t.style.width = E + "px"), (t.style.height = N + "px")),
          this.setViewport(0, 0, E, N);
      }),
      (this.getDrawingBufferSize = function (E) {
        return E.set(F * Y, V * Y).floor();
      }),
      (this.setDrawingBufferSize = function (E, N, z) {
        (F = E),
          (V = N),
          (Y = z),
          (t.width = Math.floor(E * z)),
          (t.height = Math.floor(N * z)),
          this.setViewport(0, 0, E, N);
      }),
      (this.getCurrentViewport = function (E) {
        return E.copy(T);
      }),
      (this.getViewport = function (E) {
        return E.copy(q);
      }),
      (this.setViewport = function (E, N, z, k) {
        E.isVector4 ? q.set(E.x, E.y, E.z, E.w) : q.set(E, N, z, k),
          be.viewport(T.copy(q).multiplyScalar(Y).floor());
      }),
      (this.getScissor = function (E) {
        return E.copy(U);
      }),
      (this.setScissor = function (E, N, z, k) {
        E.isVector4 ? U.set(E.x, E.y, E.z, E.w) : U.set(E, N, z, k),
          be.scissor(G.copy(U).multiplyScalar(Y).floor());
      }),
      (this.getScissorTest = function () {
        return H;
      }),
      (this.setScissorTest = function (E) {
        be.setScissorTest((H = E));
      }),
      (this.setOpaqueSort = function (E) {
        ee = E;
      }),
      (this.setTransparentSort = function (E) {
        Z = E;
      }),
      (this.getClearColor = function (E) {
        return E.copy(ce.getClearColor());
      }),
      (this.setClearColor = function () {
        ce.setClearColor.apply(ce, arguments);
      }),
      (this.getClearAlpha = function () {
        return ce.getClearAlpha();
      }),
      (this.setClearAlpha = function () {
        ce.setClearAlpha.apply(ce, arguments);
      }),
      (this.clear = function (E = !0, N = !0, z = !0) {
        let k = 0;
        if (E) {
          let W = !1;
          if (w !== null) {
            const ue = w.texture.format;
            W = ue === Fl || ue === Nl || ue === Ul;
          }
          if (W) {
            const ue = w.texture.type,
              _e =
                ue === Ln ||
                ue === bn ||
                ue === Qr ||
                ue === Xn ||
                ue === Dl ||
                ue === Il,
              Ee = ce.getClearColor(),
              we = ce.getClearAlpha(),
              Oe = Ee.r,
              De = Ee.g,
              Ue = Ee.b;
            _e
              ? ((m[0] = Oe),
                (m[1] = De),
                (m[2] = Ue),
                (m[3] = we),
                O.clearBufferuiv(O.COLOR, 0, m))
              : ((g[0] = Oe),
                (g[1] = De),
                (g[2] = Ue),
                (g[3] = we),
                O.clearBufferiv(O.COLOR, 0, g));
          } else k |= O.COLOR_BUFFER_BIT;
        }
        N && (k |= O.DEPTH_BUFFER_BIT),
          z &&
            ((k |= O.STENCIL_BUFFER_BIT),
            this.state.buffers.stencil.setMask(4294967295)),
          O.clear(k);
      }),
      (this.clearColor = function () {
        this.clear(!0, !1, !1);
      }),
      (this.clearDepth = function () {
        this.clear(!1, !0, !1);
      }),
      (this.clearStencil = function () {
        this.clear(!1, !1, !0);
      }),
      (this.dispose = function () {
        t.removeEventListener("webglcontextlost", ke, !1),
          t.removeEventListener("webglcontextrestored", P, !1),
          t.removeEventListener("webglcontextcreationerror", oe, !1),
          J.dispose(),
          ne.dispose(),
          Ie.dispose(),
          Xe.dispose(),
          st.dispose(),
          x.dispose(),
          ge.dispose(),
          Me.dispose(),
          B.dispose(),
          de.dispose(),
          de.removeEventListener("sessionstart", Ut),
          de.removeEventListener("sessionend", Ke),
          Se && (Se.dispose(), (Se = null)),
          yt.stop();
      });
    function ke(E) {
      E.preventDefault(),
        console.log("THREE.WebGLRenderer: Context Lost."),
        (S = !0);
    }
    function P() {
      console.log("THREE.WebGLRenderer: Context Restored."), (S = !1);
      const E = Qe.autoReset,
        N = re.enabled,
        z = re.autoUpdate,
        k = re.needsUpdate,
        W = re.type;
      pe(),
        (Qe.autoReset = E),
        (re.enabled = N),
        (re.autoUpdate = z),
        (re.needsUpdate = k),
        (re.type = W);
    }
    function oe(E) {
      console.error(
        "THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",
        E.statusMessage
      );
    }
    function Q(E) {
      const N = E.target;
      N.removeEventListener("dispose", Q), X(N);
    }
    function X(E) {
      ie(E), Ie.remove(E);
    }
    function ie(E) {
      const N = Ie.get(E).programs;
      N !== void 0 &&
        (N.forEach(function (z) {
          B.releaseProgram(z);
        }),
        E.isShaderMaterial && B.releaseShaderCache(E));
    }
    this.renderBufferDirect = function (E, N, z, k, W, ue) {
      N === null && (N = Ze);
      const _e = W.isMesh && W.matrixWorld.determinant() < 0,
        Ee = Ec(E, N, z, k, W);
      be.setMaterial(k, _e);
      let we = z.index,
        Oe = 1;
      if (k.wireframe === !0) {
        if (((we = A.getWireframeAttribute(z)), we === void 0)) return;
        Oe = 2;
      }
      const De = z.drawRange,
        Ue = z.attributes.position;
      let it = De.start * Oe,
        Ct = (De.start + De.count) * Oe;
      ue !== null &&
        ((it = Math.max(it, ue.start * Oe)),
        (Ct = Math.min(Ct, (ue.start + ue.count) * Oe))),
        we !== null
          ? ((it = Math.max(it, 0)), (Ct = Math.min(Ct, we.count)))
          : Ue != null &&
            ((it = Math.max(it, 0)), (Ct = Math.min(Ct, Ue.count)));
      const dt = Ct - it;
      if (dt < 0 || dt === 1 / 0) return;
      ge.setup(W, k, Ee, z, we);
      let an,
        nt = se;
      if (
        (we !== null && ((an = ut.get(we)), (nt = K), nt.setIndex(an)),
        W.isMesh)
      )
        k.wireframe === !0
          ? (be.setLineWidth(k.wireframeLinewidth * Ne()), nt.setMode(O.LINES))
          : nt.setMode(O.TRIANGLES);
      else if (W.isLine) {
        let Ve = k.linewidth;
        Ve === void 0 && (Ve = 1),
          be.setLineWidth(Ve * Ne()),
          W.isLineSegments
            ? nt.setMode(O.LINES)
            : W.isLineLoop
            ? nt.setMode(O.LINE_LOOP)
            : nt.setMode(O.LINE_STRIP);
      } else
        W.isPoints
          ? nt.setMode(O.POINTS)
          : W.isSprite && nt.setMode(O.TRIANGLES);
      if (W.isInstancedMesh) nt.renderInstances(it, dt, W.count);
      else if (z.isInstancedBufferGeometry) {
        const Ve = z._maxInstanceCount !== void 0 ? z._maxInstanceCount : 1 / 0,
          qs = Math.min(z.instanceCount, Ve);
        nt.renderInstances(it, dt, qs);
      } else nt.render(it, dt);
    };
    function xe(E, N, z) {
      E.transparent === !0 && E.side === Zt && E.forceSinglePass === !1
        ? ((E.side = Rt),
          (E.needsUpdate = !0),
          is(E, N, z),
          (E.side = gn),
          (E.needsUpdate = !0),
          is(E, N, z),
          (E.side = Zt))
        : is(E, N, z);
    }
    (this.compile = function (E, N, z = null) {
      z === null && (z = E),
        (p = ne.get(z)),
        p.init(),
        y.push(p),
        z.traverseVisible(function (W) {
          W.isLight &&
            W.layers.test(N.layers) &&
            (p.pushLight(W), W.castShadow && p.pushShadow(W));
        }),
        E !== z &&
          E.traverseVisible(function (W) {
            W.isLight &&
              W.layers.test(N.layers) &&
              (p.pushLight(W), W.castShadow && p.pushShadow(W));
          }),
        p.setupLights(M._useLegacyLights);
      const k = new Set();
      return (
        E.traverse(function (W) {
          const ue = W.material;
          if (ue)
            if (Array.isArray(ue))
              for (let _e = 0; _e < ue.length; _e++) {
                const Ee = ue[_e];
                xe(Ee, z, W), k.add(Ee);
              }
            else xe(ue, z, W), k.add(ue);
        }),
        y.pop(),
        (p = null),
        k
      );
    }),
      (this.compileAsync = function (E, N, z = null) {
        const k = this.compile(E, N, z);
        return new Promise((W) => {
          function ue() {
            if (
              (k.forEach(function (_e) {
                Ie.get(_e).currentProgram.isReady() && k.delete(_e);
              }),
              k.size === 0)
            ) {
              W(E);
              return;
            }
            setTimeout(ue, 10);
          }
          ve.get("KHR_parallel_shader_compile") !== null
            ? ue()
            : setTimeout(ue, 10);
        });
      });
    let Ge = null;
    function rt(E) {
      Ge && Ge(E);
    }
    function Ut() {
      yt.stop();
    }
    function Ke() {
      yt.start();
    }
    const yt = new ec();
    yt.setAnimationLoop(rt),
      typeof self < "u" && yt.setContext(self),
      (this.setAnimationLoop = function (E) {
        (Ge = E), de.setAnimationLoop(E), E === null ? yt.stop() : yt.start();
      }),
      de.addEventListener("sessionstart", Ut),
      de.addEventListener("sessionend", Ke),
      (this.render = function (E, N) {
        if (N !== void 0 && N.isCamera !== !0) {
          console.error(
            "THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera."
          );
          return;
        }
        if (S === !0) return;
        E.matrixWorldAutoUpdate === !0 && E.updateMatrixWorld(),
          N.parent === null &&
            N.matrixWorldAutoUpdate === !0 &&
            N.updateMatrixWorld(),
          de.enabled === !0 &&
            de.isPresenting === !0 &&
            (de.cameraAutoUpdate === !0 && de.updateCamera(N),
            (N = de.getCamera())),
          E.isScene === !0 && E.onBeforeRender(M, E, N, w),
          (p = ne.get(E, y.length)),
          p.init(),
          y.push(p),
          ze.multiplyMatrices(N.projectionMatrix, N.matrixWorldInverse),
          ae.setFromProjectionMatrix(ze),
          (fe = this.localClippingEnabled),
          (he = me.init(this.clippingPlanes, fe)),
          (_ = J.get(E, f.length)),
          _.init(),
          f.push(_),
          qt(E, N, 0, M.sortObjects),
          _.finish(),
          M.sortObjects === !0 && _.sort(ee, Z),
          this.info.render.frame++,
          he === !0 && me.beginShadows();
        const z = p.state.shadowsArray;
        if (
          (re.render(z, E, N),
          he === !0 && me.endShadows(),
          this.info.autoReset === !0 && this.info.reset(),
          ce.render(_, E),
          p.setupLights(M._useLegacyLights),
          N.isArrayCamera)
        ) {
          const k = N.cameras;
          for (let W = 0, ue = k.length; W < ue; W++) {
            const _e = k[W];
            Ea(_, E, _e, _e.viewport);
          }
        } else Ea(_, E, N);
        w !== null &&
          (Pe.updateMultisampleRenderTarget(w), Pe.updateRenderTargetMipmap(w)),
          E.isScene === !0 && E.onAfterRender(M, E, N),
          ge.resetDefaultState(),
          (I = -1),
          (v = null),
          y.pop(),
          y.length > 0 ? (p = y[y.length - 1]) : (p = null),
          f.pop(),
          f.length > 0 ? (_ = f[f.length - 1]) : (_ = null);
      });
    function qt(E, N, z, k) {
      if (E.visible === !1) return;
      if (E.layers.test(N.layers)) {
        if (E.isGroup) z = E.renderOrder;
        else if (E.isLOD) E.autoUpdate === !0 && E.update(N);
        else if (E.isLight) p.pushLight(E), E.castShadow && p.pushShadow(E);
        else if (E.isSprite) {
          if (!E.frustumCulled || ae.intersectsSprite(E)) {
            k && Le.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ze);
            const _e = x.update(E),
              Ee = E.material;
            Ee.visible && _.push(E, _e, Ee, z, Le.z, null);
          }
        } else if (
          (E.isMesh || E.isLine || E.isPoints) &&
          (!E.frustumCulled || ae.intersectsObject(E))
        ) {
          const _e = x.update(E),
            Ee = E.material;
          if (
            (k &&
              (E.boundingSphere !== void 0
                ? (E.boundingSphere === null && E.computeBoundingSphere(),
                  Le.copy(E.boundingSphere.center))
                : (_e.boundingSphere === null && _e.computeBoundingSphere(),
                  Le.copy(_e.boundingSphere.center)),
              Le.applyMatrix4(E.matrixWorld).applyMatrix4(ze)),
            Array.isArray(Ee))
          ) {
            const we = _e.groups;
            for (let Oe = 0, De = we.length; Oe < De; Oe++) {
              const Ue = we[Oe],
                it = Ee[Ue.materialIndex];
              it && it.visible && _.push(E, _e, it, z, Le.z, Ue);
            }
          } else Ee.visible && _.push(E, _e, Ee, z, Le.z, null);
        }
      }
      const ue = E.children;
      for (let _e = 0, Ee = ue.length; _e < Ee; _e++) qt(ue[_e], N, z, k);
    }
    function Ea(E, N, z, k) {
      const W = E.opaque,
        ue = E.transmissive,
        _e = E.transparent;
      p.setupLightsView(z),
        he === !0 && me.setGlobalState(M.clippingPlanes, z),
        ue.length > 0 && yc(W, ue, N, z),
        k && be.viewport(T.copy(k)),
        W.length > 0 && ns(W, N, z),
        ue.length > 0 && ns(ue, N, z),
        _e.length > 0 && ns(_e, N, z),
        be.buffers.depth.setTest(!0),
        be.buffers.depth.setMask(!0),
        be.buffers.color.setMask(!0),
        be.setPolygonOffset(!1);
    }
    function yc(E, N, z, k) {
      if ((z.isScene === !0 ? z.overrideMaterial : null) !== null) return;
      const ue = Ae.isWebGL2;
      Se === null &&
        (Se = new qn(1, 1, {
          generateMipmaps: !0,
          type: ve.has("EXT_color_buffer_half_float") ? Qt : Ln,
          minFilter: Pn,
          samples: ue ? 4 : 0,
        })),
        M.getDrawingBufferSize(Te),
        ue ? Se.setSize(Te.x, Te.y) : Se.setSize(Vs(Te.x), Vs(Te.y));
      const _e = M.getRenderTarget();
      M.setRenderTarget(Se),
        M.getClearColor($),
        (C = M.getClearAlpha()),
        C < 1 && M.setClearColor(16777215, 0.5),
        M.clear();
      const Ee = M.toneMapping;
      (M.toneMapping = Cn),
        ns(E, z, k),
        Pe.updateMultisampleRenderTarget(Se),
        Pe.updateRenderTargetMipmap(Se);
      let we = !1;
      for (let Oe = 0, De = N.length; Oe < De; Oe++) {
        const Ue = N[Oe],
          it = Ue.object,
          Ct = Ue.geometry,
          dt = Ue.material,
          an = Ue.group;
        if (dt.side === Zt && it.layers.test(k.layers)) {
          const nt = dt.side;
          (dt.side = Rt),
            (dt.needsUpdate = !0),
            Sa(it, z, k, Ct, dt, an),
            (dt.side = nt),
            (dt.needsUpdate = !0),
            (we = !0);
        }
      }
      we === !0 &&
        (Pe.updateMultisampleRenderTarget(Se), Pe.updateRenderTargetMipmap(Se)),
        M.setRenderTarget(_e),
        M.setClearColor($, C),
        (M.toneMapping = Ee);
    }
    function ns(E, N, z) {
      const k = N.isScene === !0 ? N.overrideMaterial : null;
      for (let W = 0, ue = E.length; W < ue; W++) {
        const _e = E[W],
          Ee = _e.object,
          we = _e.geometry,
          Oe = k === null ? _e.material : k,
          De = _e.group;
        Ee.layers.test(z.layers) && Sa(Ee, N, z, we, Oe, De);
      }
    }
    function Sa(E, N, z, k, W, ue) {
      E.onBeforeRender(M, N, z, k, W, ue),
        E.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse, E.matrixWorld),
        E.normalMatrix.getNormalMatrix(E.modelViewMatrix),
        W.onBeforeRender(M, N, z, k, E, ue),
        W.transparent === !0 && W.side === Zt && W.forceSinglePass === !1
          ? ((W.side = Rt),
            (W.needsUpdate = !0),
            M.renderBufferDirect(z, N, k, W, E, ue),
            (W.side = gn),
            (W.needsUpdate = !0),
            M.renderBufferDirect(z, N, k, W, E, ue),
            (W.side = Zt))
          : M.renderBufferDirect(z, N, k, W, E, ue),
        E.onAfterRender(M, N, z, k, W, ue);
    }
    function is(E, N, z) {
      N.isScene !== !0 && (N = Ze);
      const k = Ie.get(E),
        W = p.state.lights,
        ue = p.state.shadowsArray,
        _e = W.state.version,
        Ee = B.getParameters(E, W.state, ue, N, z),
        we = B.getProgramCacheKey(Ee);
      let Oe = k.programs;
      (k.environment = E.isMeshStandardMaterial ? N.environment : null),
        (k.fog = N.fog),
        (k.envMap = (E.isMeshStandardMaterial ? st : Xe).get(
          E.envMap || k.environment
        )),
        Oe === void 0 &&
          (E.addEventListener("dispose", Q),
          (Oe = new Map()),
          (k.programs = Oe));
      let De = Oe.get(we);
      if (De !== void 0) {
        if (k.currentProgram === De && k.lightsStateVersion === _e)
          return Aa(E, Ee), De;
      } else
        (Ee.uniforms = B.getUniforms(E)),
          E.onBuild(z, Ee, M),
          E.onBeforeCompile(Ee, M),
          (De = B.acquireProgram(Ee, we)),
          Oe.set(we, De),
          (k.uniforms = Ee.uniforms);
      const Ue = k.uniforms;
      return (
        ((!E.isShaderMaterial && !E.isRawShaderMaterial) ||
          E.clipping === !0) &&
          (Ue.clippingPlanes = me.uniform),
        Aa(E, Ee),
        (k.needsLights = Tc(E)),
        (k.lightsStateVersion = _e),
        k.needsLights &&
          ((Ue.ambientLightColor.value = W.state.ambient),
          (Ue.lightProbe.value = W.state.probe),
          (Ue.directionalLights.value = W.state.directional),
          (Ue.directionalLightShadows.value = W.state.directionalShadow),
          (Ue.spotLights.value = W.state.spot),
          (Ue.spotLightShadows.value = W.state.spotShadow),
          (Ue.rectAreaLights.value = W.state.rectArea),
          (Ue.ltc_1.value = W.state.rectAreaLTC1),
          (Ue.ltc_2.value = W.state.rectAreaLTC2),
          (Ue.pointLights.value = W.state.point),
          (Ue.pointLightShadows.value = W.state.pointShadow),
          (Ue.hemisphereLights.value = W.state.hemi),
          (Ue.directionalShadowMap.value = W.state.directionalShadowMap),
          (Ue.directionalShadowMatrix.value = W.state.directionalShadowMatrix),
          (Ue.spotShadowMap.value = W.state.spotShadowMap),
          (Ue.spotLightMatrix.value = W.state.spotLightMatrix),
          (Ue.spotLightMap.value = W.state.spotLightMap),
          (Ue.pointShadowMap.value = W.state.pointShadowMap),
          (Ue.pointShadowMatrix.value = W.state.pointShadowMatrix)),
        (k.currentProgram = De),
        (k.uniformsList = null),
        De
      );
    }
    function Ta(E) {
      if (E.uniformsList === null) {
        const N = E.currentProgram.getUniforms();
        E.uniformsList = Ns.seqWithValue(N.seq, E.uniforms);
      }
      return E.uniformsList;
    }
    function Aa(E, N) {
      const z = Ie.get(E);
      (z.outputColorSpace = N.outputColorSpace),
        (z.instancing = N.instancing),
        (z.instancingColor = N.instancingColor),
        (z.skinning = N.skinning),
        (z.morphTargets = N.morphTargets),
        (z.morphNormals = N.morphNormals),
        (z.morphColors = N.morphColors),
        (z.morphTargetsCount = N.morphTargetsCount),
        (z.numClippingPlanes = N.numClippingPlanes),
        (z.numIntersection = N.numClipIntersection),
        (z.vertexAlphas = N.vertexAlphas),
        (z.vertexTangents = N.vertexTangents),
        (z.toneMapping = N.toneMapping);
    }
    function Ec(E, N, z, k, W) {
      N.isScene !== !0 && (N = Ze), Pe.resetTextureUnits();
      const ue = N.fog,
        _e = k.isMeshStandardMaterial ? N.environment : null,
        Ee =
          w === null
            ? M.outputColorSpace
            : w.isXRRenderTarget === !0
            ? w.texture.colorSpace
            : gt,
        we = (k.isMeshStandardMaterial ? st : Xe).get(k.envMap || _e),
        Oe =
          k.vertexColors === !0 &&
          !!z.attributes.color &&
          z.attributes.color.itemSize === 4,
        De = !!z.attributes.tangent && (!!k.normalMap || k.anisotropy > 0),
        Ue = !!z.morphAttributes.position,
        it = !!z.morphAttributes.normal,
        Ct = !!z.morphAttributes.color;
      let dt = Cn;
      k.toneMapped &&
        (w === null || w.isXRRenderTarget === !0) &&
        (dt = M.toneMapping);
      const an =
          z.morphAttributes.position ||
          z.morphAttributes.normal ||
          z.morphAttributes.color,
        nt = an !== void 0 ? an.length : 0,
        Ve = Ie.get(k),
        qs = p.state.lights;
      if (he === !0 && (fe === !0 || E !== v)) {
        const Lt = E === v && k.id === I;
        me.setState(k, E, Lt);
      }
      let at = !1;
      k.version === Ve.__version
        ? ((Ve.needsLights && Ve.lightsStateVersion !== qs.state.version) ||
            Ve.outputColorSpace !== Ee ||
            (W.isInstancedMesh && Ve.instancing === !1) ||
            (!W.isInstancedMesh && Ve.instancing === !0) ||
            (W.isSkinnedMesh && Ve.skinning === !1) ||
            (!W.isSkinnedMesh && Ve.skinning === !0) ||
            (W.isInstancedMesh &&
              Ve.instancingColor === !0 &&
              W.instanceColor === null) ||
            (W.isInstancedMesh &&
              Ve.instancingColor === !1 &&
              W.instanceColor !== null) ||
            Ve.envMap !== we ||
            (k.fog === !0 && Ve.fog !== ue) ||
            (Ve.numClippingPlanes !== void 0 &&
              (Ve.numClippingPlanes !== me.numPlanes ||
                Ve.numIntersection !== me.numIntersection)) ||
            Ve.vertexAlphas !== Oe ||
            Ve.vertexTangents !== De ||
            Ve.morphTargets !== Ue ||
            Ve.morphNormals !== it ||
            Ve.morphColors !== Ct ||
            Ve.toneMapping !== dt ||
            (Ae.isWebGL2 === !0 && Ve.morphTargetsCount !== nt)) &&
          (at = !0)
        : ((at = !0), (Ve.__version = k.version));
      let Un = Ve.currentProgram;
      at === !0 && (Un = is(k, N, W));
      let ba = !1,
        Fi = !1,
        $s = !1;
      const Et = Un.getUniforms(),
        Nn = Ve.uniforms;
      if (
        (be.useProgram(Un.program) && ((ba = !0), (Fi = !0), ($s = !0)),
        k.id !== I && ((I = k.id), (Fi = !0)),
        ba || v !== E)
      ) {
        Et.setValue(O, "projectionMatrix", E.projectionMatrix),
          Et.setValue(O, "viewMatrix", E.matrixWorldInverse);
        const Lt = Et.map.cameraPosition;
        Lt !== void 0 &&
          Lt.setValue(O, Le.setFromMatrixPosition(E.matrixWorld)),
          Ae.logarithmicDepthBuffer &&
            Et.setValue(
              O,
              "logDepthBufFC",
              2 / (Math.log(E.far + 1) / Math.LN2)
            ),
          (k.isMeshPhongMaterial ||
            k.isMeshToonMaterial ||
            k.isMeshLambertMaterial ||
            k.isMeshBasicMaterial ||
            k.isMeshStandardMaterial ||
            k.isShaderMaterial) &&
            Et.setValue(O, "isOrthographic", E.isOrthographicCamera === !0),
          v !== E && ((v = E), (Fi = !0), ($s = !0));
      }
      if (W.isSkinnedMesh) {
        Et.setOptional(O, W, "bindMatrix"),
          Et.setOptional(O, W, "bindMatrixInverse");
        const Lt = W.skeleton;
        Lt &&
          (Ae.floatVertexTextures
            ? (Lt.boneTexture === null && Lt.computeBoneTexture(),
              Et.setValue(O, "boneTexture", Lt.boneTexture, Pe),
              Et.setValue(O, "boneTextureSize", Lt.boneTextureSize))
            : console.warn(
                "THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."
              ));
      }
      const Ks = z.morphAttributes;
      if (
        ((Ks.position !== void 0 ||
          Ks.normal !== void 0 ||
          (Ks.color !== void 0 && Ae.isWebGL2 === !0)) &&
          R.update(W, z, Un),
        (Fi || Ve.receiveShadow !== W.receiveShadow) &&
          ((Ve.receiveShadow = W.receiveShadow),
          Et.setValue(O, "receiveShadow", W.receiveShadow)),
        k.isMeshGouraudMaterial &&
          k.envMap !== null &&
          ((Nn.envMap.value = we),
          (Nn.flipEnvMap.value =
            we.isCubeTexture && we.isRenderTargetTexture === !1 ? -1 : 1)),
        Fi &&
          (Et.setValue(O, "toneMappingExposure", M.toneMappingExposure),
          Ve.needsLights && Sc(Nn, $s),
          ue && k.fog === !0 && te.refreshFogUniforms(Nn, ue),
          te.refreshMaterialUniforms(Nn, k, Y, V, Se),
          Ns.upload(O, Ta(Ve), Nn, Pe)),
        k.isShaderMaterial &&
          k.uniformsNeedUpdate === !0 &&
          (Ns.upload(O, Ta(Ve), Nn, Pe), (k.uniformsNeedUpdate = !1)),
        k.isSpriteMaterial && Et.setValue(O, "center", W.center),
        Et.setValue(O, "modelViewMatrix", W.modelViewMatrix),
        Et.setValue(O, "normalMatrix", W.normalMatrix),
        Et.setValue(O, "modelMatrix", W.matrixWorld),
        k.isShaderMaterial || k.isRawShaderMaterial)
      ) {
        const Lt = k.uniformsGroups;
        for (let Zs = 0, Ac = Lt.length; Zs < Ac; Zs++)
          if (Ae.isWebGL2) {
            const wa = Lt[Zs];
            Me.update(wa, Un), Me.bind(wa, Un);
          } else
            console.warn(
              "THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2."
            );
      }
      return Un;
    }
    function Sc(E, N) {
      (E.ambientLightColor.needsUpdate = N),
        (E.lightProbe.needsUpdate = N),
        (E.directionalLights.needsUpdate = N),
        (E.directionalLightShadows.needsUpdate = N),
        (E.pointLights.needsUpdate = N),
        (E.pointLightShadows.needsUpdate = N),
        (E.spotLights.needsUpdate = N),
        (E.spotLightShadows.needsUpdate = N),
        (E.rectAreaLights.needsUpdate = N),
        (E.hemisphereLights.needsUpdate = N);
    }
    function Tc(E) {
      return (
        E.isMeshLambertMaterial ||
        E.isMeshToonMaterial ||
        E.isMeshPhongMaterial ||
        E.isMeshStandardMaterial ||
        E.isShadowMaterial ||
        (E.isShaderMaterial && E.lights === !0)
      );
    }
    (this.getActiveCubeFace = function () {
      return b;
    }),
      (this.getActiveMipmapLevel = function () {
        return L;
      }),
      (this.getRenderTarget = function () {
        return w;
      }),
      (this.setRenderTargetTextures = function (E, N, z) {
        (Ie.get(E.texture).__webglTexture = N),
          (Ie.get(E.depthTexture).__webglTexture = z);
        const k = Ie.get(E);
        (k.__hasExternalTextures = !0),
          k.__hasExternalTextures &&
            ((k.__autoAllocateDepthBuffer = z === void 0),
            k.__autoAllocateDepthBuffer ||
              (ve.has("WEBGL_multisampled_render_to_texture") === !0 &&
                (console.warn(
                  "THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"
                ),
                (k.__useRenderToTexture = !1))));
      }),
      (this.setRenderTargetFramebuffer = function (E, N) {
        const z = Ie.get(E);
        (z.__webglFramebuffer = N), (z.__useDefaultFramebuffer = N === void 0);
      }),
      (this.setRenderTarget = function (E, N = 0, z = 0) {
        (w = E), (b = N), (L = z);
        let k = !0,
          W = null,
          ue = !1,
          _e = !1;
        if (E) {
          const we = Ie.get(E);
          we.__useDefaultFramebuffer !== void 0
            ? (be.bindFramebuffer(O.FRAMEBUFFER, null), (k = !1))
            : we.__webglFramebuffer === void 0
            ? Pe.setupRenderTarget(E)
            : we.__hasExternalTextures &&
              Pe.rebindTextures(
                E,
                Ie.get(E.texture).__webglTexture,
                Ie.get(E.depthTexture).__webglTexture
              );
          const Oe = E.texture;
          (Oe.isData3DTexture ||
            Oe.isDataArrayTexture ||
            Oe.isCompressedArrayTexture) &&
            (_e = !0);
          const De = Ie.get(E).__webglFramebuffer;
          E.isWebGLCubeRenderTarget
            ? (Array.isArray(De[N]) ? (W = De[N][z]) : (W = De[N]), (ue = !0))
            : Ae.isWebGL2 && E.samples > 0 && Pe.useMultisampledRTT(E) === !1
            ? (W = Ie.get(E).__webglMultisampledFramebuffer)
            : Array.isArray(De)
            ? (W = De[z])
            : (W = De),
            T.copy(E.viewport),
            G.copy(E.scissor),
            (j = E.scissorTest);
        } else
          T.copy(q).multiplyScalar(Y).floor(),
            G.copy(U).multiplyScalar(Y).floor(),
            (j = H);
        if (
          (be.bindFramebuffer(O.FRAMEBUFFER, W) &&
            Ae.drawBuffers &&
            k &&
            be.drawBuffers(E, W),
          be.viewport(T),
          be.scissor(G),
          be.setScissorTest(j),
          ue)
        ) {
          const we = Ie.get(E.texture);
          O.framebufferTexture2D(
            O.FRAMEBUFFER,
            O.COLOR_ATTACHMENT0,
            O.TEXTURE_CUBE_MAP_POSITIVE_X + N,
            we.__webglTexture,
            z
          );
        } else if (_e) {
          const we = Ie.get(E.texture),
            Oe = N || 0;
          O.framebufferTextureLayer(
            O.FRAMEBUFFER,
            O.COLOR_ATTACHMENT0,
            we.__webglTexture,
            z || 0,
            Oe
          );
        }
        I = -1;
      }),
      (this.readRenderTargetPixels = function (E, N, z, k, W, ue, _e) {
        if (!(E && E.isWebGLRenderTarget)) {
          console.error(
            "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."
          );
          return;
        }
        let Ee = Ie.get(E).__webglFramebuffer;
        if ((E.isWebGLCubeRenderTarget && _e !== void 0 && (Ee = Ee[_e]), Ee)) {
          be.bindFramebuffer(O.FRAMEBUFFER, Ee);
          try {
            const we = E.texture,
              Oe = we.format,
              De = we.type;
            if (
              Oe !== Ot &&
              ye.convert(Oe) !==
                O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)
            ) {
              console.error(
                "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."
              );
              return;
            }
            const Ue =
              De === Qt &&
              (ve.has("EXT_color_buffer_half_float") ||
                (Ae.isWebGL2 && ve.has("EXT_color_buffer_float")));
            if (
              De !== Ln &&
              ye.convert(De) !==
                O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE) &&
              !(
                De === Ht &&
                (Ae.isWebGL2 ||
                  ve.has("OES_texture_float") ||
                  ve.has("WEBGL_color_buffer_float"))
              ) &&
              !Ue
            ) {
              console.error(
                "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type."
              );
              return;
            }
            N >= 0 &&
              N <= E.width - k &&
              z >= 0 &&
              z <= E.height - W &&
              O.readPixels(N, z, k, W, ye.convert(Oe), ye.convert(De), ue);
          } finally {
            const we = w !== null ? Ie.get(w).__webglFramebuffer : null;
            be.bindFramebuffer(O.FRAMEBUFFER, we);
          }
        }
      }),
      (this.copyFramebufferToTexture = function (E, N, z = 0) {
        const k = Math.pow(2, -z),
          W = Math.floor(N.image.width * k),
          ue = Math.floor(N.image.height * k);
        Pe.setTexture2D(N, 0),
          O.copyTexSubImage2D(O.TEXTURE_2D, z, 0, 0, E.x, E.y, W, ue),
          be.unbindTexture();
      }),
      (this.copyTextureToTexture = function (E, N, z, k = 0) {
        const W = N.image.width,
          ue = N.image.height,
          _e = ye.convert(z.format),
          Ee = ye.convert(z.type);
        Pe.setTexture2D(z, 0),
          O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL, z.flipY),
          O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL, z.premultiplyAlpha),
          O.pixelStorei(O.UNPACK_ALIGNMENT, z.unpackAlignment),
          N.isDataTexture
            ? O.texSubImage2D(
                O.TEXTURE_2D,
                k,
                E.x,
                E.y,
                W,
                ue,
                _e,
                Ee,
                N.image.data
              )
            : N.isCompressedTexture
            ? O.compressedTexSubImage2D(
                O.TEXTURE_2D,
                k,
                E.x,
                E.y,
                N.mipmaps[0].width,
                N.mipmaps[0].height,
                _e,
                N.mipmaps[0].data
              )
            : O.texSubImage2D(O.TEXTURE_2D, k, E.x, E.y, _e, Ee, N.image),
          k === 0 && z.generateMipmaps && O.generateMipmap(O.TEXTURE_2D),
          be.unbindTexture();
      }),
      (this.copyTextureToTexture3D = function (E, N, z, k, W = 0) {
        if (M.isWebGL1Renderer) {
          console.warn(
            "THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2."
          );
          return;
        }
        const ue = E.max.x - E.min.x + 1,
          _e = E.max.y - E.min.y + 1,
          Ee = E.max.z - E.min.z + 1,
          we = ye.convert(k.format),
          Oe = ye.convert(k.type);
        let De;
        if (k.isData3DTexture) Pe.setTexture3D(k, 0), (De = O.TEXTURE_3D);
        else if (k.isDataArrayTexture)
          Pe.setTexture2DArray(k, 0), (De = O.TEXTURE_2D_ARRAY);
        else {
          console.warn(
            "THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray."
          );
          return;
        }
        O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL, k.flipY),
          O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL, k.premultiplyAlpha),
          O.pixelStorei(O.UNPACK_ALIGNMENT, k.unpackAlignment);
        const Ue = O.getParameter(O.UNPACK_ROW_LENGTH),
          it = O.getParameter(O.UNPACK_IMAGE_HEIGHT),
          Ct = O.getParameter(O.UNPACK_SKIP_PIXELS),
          dt = O.getParameter(O.UNPACK_SKIP_ROWS),
          an = O.getParameter(O.UNPACK_SKIP_IMAGES),
          nt = z.isCompressedTexture ? z.mipmaps[0] : z.image;
        O.pixelStorei(O.UNPACK_ROW_LENGTH, nt.width),
          O.pixelStorei(O.UNPACK_IMAGE_HEIGHT, nt.height),
          O.pixelStorei(O.UNPACK_SKIP_PIXELS, E.min.x),
          O.pixelStorei(O.UNPACK_SKIP_ROWS, E.min.y),
          O.pixelStorei(O.UNPACK_SKIP_IMAGES, E.min.z),
          z.isDataTexture || z.isData3DTexture
            ? O.texSubImage3D(De, W, N.x, N.y, N.z, ue, _e, Ee, we, Oe, nt.data)
            : z.isCompressedArrayTexture
            ? (console.warn(
                "THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."
              ),
              O.compressedTexSubImage3D(
                De,
                W,
                N.x,
                N.y,
                N.z,
                ue,
                _e,
                Ee,
                we,
                nt.data
              ))
            : O.texSubImage3D(De, W, N.x, N.y, N.z, ue, _e, Ee, we, Oe, nt),
          O.pixelStorei(O.UNPACK_ROW_LENGTH, Ue),
          O.pixelStorei(O.UNPACK_IMAGE_HEIGHT, it),
          O.pixelStorei(O.UNPACK_SKIP_PIXELS, Ct),
          O.pixelStorei(O.UNPACK_SKIP_ROWS, dt),
          O.pixelStorei(O.UNPACK_SKIP_IMAGES, an),
          W === 0 && k.generateMipmaps && O.generateMipmap(De),
          be.unbindTexture();
      }),
      (this.initTexture = function (E) {
        E.isCubeTexture
          ? Pe.setTextureCube(E, 0)
          : E.isData3DTexture
          ? Pe.setTexture3D(E, 0)
          : E.isDataArrayTexture || E.isCompressedArrayTexture
          ? Pe.setTexture2DArray(E, 0)
          : Pe.setTexture2D(E, 0),
          be.unbindTexture();
      }),
      (this.resetState = function () {
        (b = 0), (L = 0), (w = null), be.reset(), ge.reset();
      }),
      typeof __THREE_DEVTOOLS__ < "u" &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", { detail: this })
        );
  }
  get coordinateSystem() {
    return mn;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    (t.drawingBufferColorSpace = e === ea ? "display-p3" : "srgb"),
      (t.unpackColorSpace =
        Ye.workingColorSpace === Xs ? "display-p3" : "srgb");
  }
  get physicallyCorrectLights() {
    return (
      console.warn(
        "THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."
      ),
      !this.useLegacyLights
    );
  }
  set physicallyCorrectLights(e) {
    console.warn(
      "THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."
    ),
      (this.useLegacyLights = !e);
  }
  get outputEncoding() {
    return (
      console.warn(
        "THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."
      ),
      this.outputColorSpace === et ? jn : Bl
    );
  }
  set outputEncoding(e) {
    console.warn(
      "THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."
    ),
      (this.outputColorSpace = e === jn ? et : gt);
  }
  get useLegacyLights() {
    return (
      console.warn(
        "THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."
      ),
      this._useLegacyLights
    );
  }
  set useLegacyLights(e) {
    console.warn(
      "THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."
    ),
      (this._useLegacyLights = e);
  }
}
class Ym extends rc {}
Ym.prototype.isWebGL1Renderer = !0;
class jm extends tt {
  constructor() {
    super(),
      (this.isScene = !0),
      (this.type = "Scene"),
      (this.background = null),
      (this.environment = null),
      (this.fog = null),
      (this.backgroundBlurriness = 0),
      (this.backgroundIntensity = 1),
      (this.overrideMaterial = null),
      typeof __THREE_DEVTOOLS__ < "u" &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", { detail: this })
        );
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.background !== null && (this.background = e.background.clone()),
      e.environment !== null && (this.environment = e.environment.clone()),
      e.fog !== null && (this.fog = e.fog.clone()),
      (this.backgroundBlurriness = e.backgroundBlurriness),
      (this.backgroundIntensity = e.backgroundIntensity),
      e.overrideMaterial !== null &&
        (this.overrideMaterial = e.overrideMaterial.clone()),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      this.fog !== null && (t.object.fog = this.fog.toJSON()),
      this.backgroundBlurriness > 0 &&
        (t.object.backgroundBlurriness = this.backgroundBlurriness),
      this.backgroundIntensity !== 1 &&
        (t.object.backgroundIntensity = this.backgroundIntensity),
      t
    );
  }
}
class qm {
  constructor(e, t) {
    (this.isInterleavedBuffer = !0),
      (this.array = e),
      (this.stride = t),
      (this.count = e !== void 0 ? e.length / t : 0),
      (this.usage = Gr),
      (this.updateRange = { offset: 0, count: -1 }),
      (this.version = 0),
      (this.uuid = Yt());
  }
  onUploadCallback() {}
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return (this.usage = e), this;
  }
  copy(e) {
    return (
      (this.array = new e.array.constructor(e.array)),
      (this.count = e.count),
      (this.stride = e.stride),
      (this.usage = e.usage),
      this
    );
  }
  copyAt(e, t, n) {
    (e *= this.stride), (n *= t.stride);
    for (let i = 0, r = this.stride; i < r; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  clone(e) {
    e.arrayBuffers === void 0 && (e.arrayBuffers = {}),
      this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Yt()),
      e.arrayBuffers[this.array.buffer._uuid] === void 0 &&
        (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const t = new this.array.constructor(
        e.arrayBuffers[this.array.buffer._uuid]
      ),
      n = new this.constructor(t, this.stride);
    return n.setUsage(this.usage), n;
  }
  onUpload(e) {
    return (this.onUploadCallback = e), this;
  }
  toJSON(e) {
    return (
      e.arrayBuffers === void 0 && (e.arrayBuffers = {}),
      this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Yt()),
      e.arrayBuffers[this.array.buffer._uuid] === void 0 &&
        (e.arrayBuffers[this.array.buffer._uuid] = Array.from(
          new Uint32Array(this.array.buffer)
        )),
      {
        uuid: this.uuid,
        buffer: this.array.buffer._uuid,
        type: this.array.constructor.name,
        stride: this.stride,
      }
    );
  }
}
const St = new D();
class oa {
  constructor(e, t, n, i = !1) {
    (this.isInterleavedBufferAttribute = !0),
      (this.name = ""),
      (this.data = e),
      (this.itemSize = t),
      (this.offset = n),
      (this.normalized = i);
  }
  get count() {
    return this.data.count;
  }
  get array() {
    return this.data.array;
  }
  set needsUpdate(e) {
    this.data.needsUpdate = e;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.data.count; t < n; t++)
      St.fromBufferAttribute(this, t),
        St.applyMatrix4(e),
        this.setXYZ(t, St.x, St.y, St.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      St.fromBufferAttribute(this, t),
        St.applyNormalMatrix(e),
        this.setXYZ(t, St.x, St.y, St.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      St.fromBufferAttribute(this, t),
        St.transformDirection(e),
        this.setXYZ(t, St.x, St.y, St.z);
    return this;
  }
  setX(e, t) {
    return (
      this.normalized && (t = qe(t, this.array)),
      (this.data.array[e * this.data.stride + this.offset] = t),
      this
    );
  }
  setY(e, t) {
    return (
      this.normalized && (t = qe(t, this.array)),
      (this.data.array[e * this.data.stride + this.offset + 1] = t),
      this
    );
  }
  setZ(e, t) {
    return (
      this.normalized && (t = qe(t, this.array)),
      (this.data.array[e * this.data.stride + this.offset + 2] = t),
      this
    );
  }
  setW(e, t) {
    return (
      this.normalized && (t = qe(t, this.array)),
      (this.data.array[e * this.data.stride + this.offset + 3] = t),
      this
    );
  }
  getX(e) {
    let t = this.data.array[e * this.data.stride + this.offset];
    return this.normalized && (t = Jt(t, this.array)), t;
  }
  getY(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 1];
    return this.normalized && (t = Jt(t, this.array)), t;
  }
  getZ(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 2];
    return this.normalized && (t = Jt(t, this.array)), t;
  }
  getW(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 3];
    return this.normalized && (t = Jt(t, this.array)), t;
  }
  setXY(e, t, n) {
    return (
      (e = e * this.data.stride + this.offset),
      this.normalized && ((t = qe(t, this.array)), (n = qe(n, this.array))),
      (this.data.array[e + 0] = t),
      (this.data.array[e + 1] = n),
      this
    );
  }
  setXYZ(e, t, n, i) {
    return (
      (e = e * this.data.stride + this.offset),
      this.normalized &&
        ((t = qe(t, this.array)),
        (n = qe(n, this.array)),
        (i = qe(i, this.array))),
      (this.data.array[e + 0] = t),
      (this.data.array[e + 1] = n),
      (this.data.array[e + 2] = i),
      this
    );
  }
  setXYZW(e, t, n, i, r) {
    return (
      (e = e * this.data.stride + this.offset),
      this.normalized &&
        ((t = qe(t, this.array)),
        (n = qe(n, this.array)),
        (i = qe(i, this.array)),
        (r = qe(r, this.array))),
      (this.data.array[e + 0] = t),
      (this.data.array[e + 1] = n),
      (this.data.array[e + 2] = i),
      (this.data.array[e + 3] = r),
      this
    );
  }
  clone(e) {
    if (e === void 0) {
      console.log(
        "THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data."
      );
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let r = 0; r < this.itemSize; r++) t.push(this.data.array[i + r]);
      }
      return new bt(
        new this.array.constructor(t),
        this.itemSize,
        this.normalized
      );
    } else
      return (
        e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}),
        e.interleavedBuffers[this.data.uuid] === void 0 &&
          (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)),
        new oa(
          e.interleavedBuffers[this.data.uuid],
          this.itemSize,
          this.offset,
          this.normalized
        )
      );
  }
  toJSON(e) {
    if (e === void 0) {
      console.log(
        "THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data."
      );
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let r = 0; r < this.itemSize; r++) t.push(this.data.array[i + r]);
      }
      return {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: t,
        normalized: this.normalized,
      };
    } else
      return (
        e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}),
        e.interleavedBuffers[this.data.uuid] === void 0 &&
          (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)),
        {
          isInterleavedBufferAttribute: !0,
          itemSize: this.itemSize,
          data: this.data.uuid,
          offset: this.offset,
          normalized: this.normalized,
        }
      );
  }
}
const Zo = new D(),
  Jo = new $e(),
  Qo = new $e(),
  $m = new D(),
  el = new He(),
  ws = new D(),
  wr = new sn(),
  tl = new He(),
  Rr = new Qi();
class Km extends It {
  constructor(e, t) {
    super(e, t),
      (this.isSkinnedMesh = !0),
      (this.type = "SkinnedMesh"),
      (this.bindMode = Ua),
      (this.bindMatrix = new He()),
      (this.bindMatrixInverse = new He()),
      (this.boundingBox = null),
      (this.boundingSphere = null);
  }
  computeBoundingBox() {
    const e = this.geometry;
    this.boundingBox === null && (this.boundingBox = new _n()),
      this.boundingBox.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++)
      this.getVertexPosition(n, ws), this.boundingBox.expandByPoint(ws);
  }
  computeBoundingSphere() {
    const e = this.geometry;
    this.boundingSphere === null && (this.boundingSphere = new sn()),
      this.boundingSphere.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++)
      this.getVertexPosition(n, ws), this.boundingSphere.expandByPoint(ws);
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.bindMode = e.bindMode),
      this.bindMatrix.copy(e.bindMatrix),
      this.bindMatrixInverse.copy(e.bindMatrixInverse),
      (this.skeleton = e.skeleton),
      e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()),
      e.boundingSphere !== null &&
        (this.boundingSphere = e.boundingSphere.clone()),
      this
    );
  }
  raycast(e, t) {
    const n = this.material,
      i = this.matrixWorld;
    n !== void 0 &&
      (this.boundingSphere === null && this.computeBoundingSphere(),
      wr.copy(this.boundingSphere),
      wr.applyMatrix4(i),
      e.ray.intersectsSphere(wr) !== !1 &&
        (tl.copy(i).invert(),
        Rr.copy(e.ray).applyMatrix4(tl),
        !(
          this.boundingBox !== null && Rr.intersectsBox(this.boundingBox) === !1
        ) && this._computeIntersections(e, t, Rr)));
  }
  getVertexPosition(e, t) {
    return super.getVertexPosition(e, t), this.applyBoneTransform(e, t), t;
  }
  bind(e, t) {
    (this.skeleton = e),
      t === void 0 &&
        (this.updateMatrixWorld(!0),
        this.skeleton.calculateInverses(),
        (t = this.matrixWorld)),
      this.bindMatrix.copy(t),
      this.bindMatrixInverse.copy(t).invert();
  }
  pose() {
    this.skeleton.pose();
  }
  normalizeSkinWeights() {
    const e = new $e(),
      t = this.geometry.attributes.skinWeight;
    for (let n = 0, i = t.count; n < i; n++) {
      e.fromBufferAttribute(t, n);
      const r = 1 / e.manhattanLength();
      r !== 1 / 0 ? e.multiplyScalar(r) : e.set(1, 0, 0, 0),
        t.setXYZW(n, e.x, e.y, e.z, e.w);
    }
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e),
      this.bindMode === Ua
        ? this.bindMatrixInverse.copy(this.matrixWorld).invert()
        : this.bindMode === rh
        ? this.bindMatrixInverse.copy(this.bindMatrix).invert()
        : console.warn(
            "THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode
          );
  }
  applyBoneTransform(e, t) {
    const n = this.skeleton,
      i = this.geometry;
    Jo.fromBufferAttribute(i.attributes.skinIndex, e),
      Qo.fromBufferAttribute(i.attributes.skinWeight, e),
      Zo.copy(t).applyMatrix4(this.bindMatrix),
      t.set(0, 0, 0);
    for (let r = 0; r < 4; r++) {
      const a = Qo.getComponent(r);
      if (a !== 0) {
        const o = Jo.getComponent(r);
        el.multiplyMatrices(n.bones[o].matrixWorld, n.boneInverses[o]),
          t.addScaledVector($m.copy(Zo).applyMatrix4(el), a);
      }
    }
    return t.applyMatrix4(this.bindMatrixInverse);
  }
  boneTransform(e, t) {
    return (
      console.warn(
        "THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."
      ),
      this.applyBoneTransform(e, t)
    );
  }
}
class ac extends tt {
  constructor() {
    super(), (this.isBone = !0), (this.type = "Bone");
  }
}
class oc extends _t {
  constructor(e = null, t = 1, n = 1, i, r, a, o, l, c = pt, h = pt, u, d) {
    super(null, a, o, l, c, h, i, r, u, d),
      (this.isDataTexture = !0),
      (this.image = { data: e, width: t, height: n }),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
const nl = new He(),
  Zm = new He();
class la {
  constructor(e = [], t = []) {
    (this.uuid = Yt()),
      (this.bones = e.slice(0)),
      (this.boneInverses = t),
      (this.boneMatrices = null),
      (this.boneTexture = null),
      (this.boneTextureSize = 0),
      this.init();
  }
  init() {
    const e = this.bones,
      t = this.boneInverses;
    if (((this.boneMatrices = new Float32Array(e.length * 16)), t.length === 0))
      this.calculateInverses();
    else if (e.length !== t.length) {
      console.warn(
        "THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."
      ),
        (this.boneInverses = []);
      for (let n = 0, i = this.bones.length; n < i; n++)
        this.boneInverses.push(new He());
    }
  }
  calculateInverses() {
    this.boneInverses.length = 0;
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = new He();
      this.bones[e] && n.copy(this.bones[e].matrixWorld).invert(),
        this.boneInverses.push(n);
    }
  }
  pose() {
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = this.bones[e];
      n && n.matrixWorld.copy(this.boneInverses[e]).invert();
    }
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = this.bones[e];
      n &&
        (n.parent && n.parent.isBone
          ? (n.matrix.copy(n.parent.matrixWorld).invert(),
            n.matrix.multiply(n.matrixWorld))
          : n.matrix.copy(n.matrixWorld),
        n.matrix.decompose(n.position, n.quaternion, n.scale));
    }
  }
  update() {
    const e = this.bones,
      t = this.boneInverses,
      n = this.boneMatrices,
      i = this.boneTexture;
    for (let r = 0, a = e.length; r < a; r++) {
      const o = e[r] ? e[r].matrixWorld : Zm;
      nl.multiplyMatrices(o, t[r]), nl.toArray(n, r * 16);
    }
    i !== null && (i.needsUpdate = !0);
  }
  clone() {
    return new la(this.bones, this.boneInverses);
  }
  computeBoneTexture() {
    let e = Math.sqrt(this.bones.length * 4);
    (e = zl(e)), (e = Math.max(e, 4));
    const t = new Float32Array(e * e * 4);
    t.set(this.boneMatrices);
    const n = new oc(t, e, e, Ot, Ht);
    return (
      (n.needsUpdate = !0),
      (this.boneMatrices = t),
      (this.boneTexture = n),
      (this.boneTextureSize = e),
      this
    );
  }
  getBoneByName(e) {
    for (let t = 0, n = this.bones.length; t < n; t++) {
      const i = this.bones[t];
      if (i.name === e) return i;
    }
  }
  dispose() {
    this.boneTexture !== null &&
      (this.boneTexture.dispose(), (this.boneTexture = null));
  }
  fromJSON(e, t) {
    this.uuid = e.uuid;
    for (let n = 0, i = e.bones.length; n < i; n++) {
      const r = e.bones[n];
      let a = t[r];
      a === void 0 &&
        (console.warn("THREE.Skeleton: No bone found with UUID:", r),
        (a = new ac())),
        this.bones.push(a),
        this.boneInverses.push(new He().fromArray(e.boneInverses[n]));
    }
    return this.init(), this;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.6,
        type: "Skeleton",
        generator: "Skeleton.toJSON",
      },
      bones: [],
      boneInverses: [],
    };
    e.uuid = this.uuid;
    const t = this.bones,
      n = this.boneInverses;
    for (let i = 0, r = t.length; i < r; i++) {
      const a = t[i];
      e.bones.push(a.uuid);
      const o = n[i];
      e.boneInverses.push(o.toArray());
    }
    return e;
  }
}
class Yr extends bt {
  constructor(e, t, n, i = 1) {
    super(e, t, n),
      (this.isInstancedBufferAttribute = !0),
      (this.meshPerAttribute = i);
  }
  copy(e) {
    return super.copy(e), (this.meshPerAttribute = e.meshPerAttribute), this;
  }
  toJSON() {
    const e = super.toJSON();
    return (
      (e.meshPerAttribute = this.meshPerAttribute),
      (e.isInstancedBufferAttribute = !0),
      e
    );
  }
}
const gi = new He(),
  il = new He(),
  Rs = [],
  sl = new _n(),
  Jm = new He(),
  ki = new It(),
  Gi = new sn();
class Qm extends It {
  constructor(e, t, n) {
    super(e, t),
      (this.isInstancedMesh = !0),
      (this.instanceMatrix = new Yr(new Float32Array(n * 16), 16)),
      (this.instanceColor = null),
      (this.count = n),
      (this.boundingBox = null),
      (this.boundingSphere = null);
    for (let i = 0; i < n; i++) this.setMatrixAt(i, Jm);
  }
  computeBoundingBox() {
    const e = this.geometry,
      t = this.count;
    this.boundingBox === null && (this.boundingBox = new _n()),
      e.boundingBox === null && e.computeBoundingBox(),
      this.boundingBox.makeEmpty();
    for (let n = 0; n < t; n++)
      this.getMatrixAt(n, gi),
        sl.copy(e.boundingBox).applyMatrix4(gi),
        this.boundingBox.union(sl);
  }
  computeBoundingSphere() {
    const e = this.geometry,
      t = this.count;
    this.boundingSphere === null && (this.boundingSphere = new sn()),
      e.boundingSphere === null && e.computeBoundingSphere(),
      this.boundingSphere.makeEmpty();
    for (let n = 0; n < t; n++)
      this.getMatrixAt(n, gi),
        Gi.copy(e.boundingSphere).applyMatrix4(gi),
        this.boundingSphere.union(Gi);
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      this.instanceMatrix.copy(e.instanceMatrix),
      e.instanceColor !== null &&
        (this.instanceColor = e.instanceColor.clone()),
      (this.count = e.count),
      e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()),
      e.boundingSphere !== null &&
        (this.boundingSphere = e.boundingSphere.clone()),
      this
    );
  }
  getColorAt(e, t) {
    t.fromArray(this.instanceColor.array, e * 3);
  }
  getMatrixAt(e, t) {
    t.fromArray(this.instanceMatrix.array, e * 16);
  }
  raycast(e, t) {
    const n = this.matrixWorld,
      i = this.count;
    if (
      ((ki.geometry = this.geometry),
      (ki.material = this.material),
      ki.material !== void 0 &&
        (this.boundingSphere === null && this.computeBoundingSphere(),
        Gi.copy(this.boundingSphere),
        Gi.applyMatrix4(n),
        e.ray.intersectsSphere(Gi) !== !1))
    )
      for (let r = 0; r < i; r++) {
        this.getMatrixAt(r, gi),
          il.multiplyMatrices(n, gi),
          (ki.matrixWorld = il),
          ki.raycast(e, Rs);
        for (let a = 0, o = Rs.length; a < o; a++) {
          const l = Rs[a];
          (l.instanceId = r), (l.object = this), t.push(l);
        }
        Rs.length = 0;
      }
  }
  setColorAt(e, t) {
    this.instanceColor === null &&
      (this.instanceColor = new Yr(
        new Float32Array(this.instanceMatrix.count * 3),
        3
      )),
      t.toArray(this.instanceColor.array, e * 3);
  }
  setMatrixAt(e, t) {
    t.toArray(this.instanceMatrix.array, e * 16);
  }
  updateMorphTargets() {}
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class lc extends en {
  constructor(e) {
    super(),
      (this.isLineBasicMaterial = !0),
      (this.type = "LineBasicMaterial"),
      (this.color = new Ce(16777215)),
      (this.map = null),
      (this.linewidth = 1),
      (this.linecap = "round"),
      (this.linejoin = "round"),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.linewidth = e.linewidth),
      (this.linecap = e.linecap),
      (this.linejoin = e.linejoin),
      (this.fog = e.fog),
      this
    );
  }
}
const rl = new D(),
  al = new D(),
  ol = new He(),
  Cr = new Qi(),
  Cs = new sn();
class ca extends tt {
  constructor(e = new jt(), t = new lc()) {
    super(),
      (this.isLine = !0),
      (this.type = "Line"),
      (this.geometry = e),
      (this.material = t),
      this.updateMorphTargets();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.material = Array.isArray(e.material)
        ? e.material.slice()
        : e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position,
        n = [0];
      for (let i = 1, r = t.count; i < r; i++)
        rl.fromBufferAttribute(t, i - 1),
          al.fromBufferAttribute(t, i),
          (n[i] = n[i - 1]),
          (n[i] += rl.distanceTo(al));
      e.setAttribute("lineDistance", new zt(n, 1));
    } else
      console.warn(
        "THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."
      );
    return this;
  }
  raycast(e, t) {
    const n = this.geometry,
      i = this.matrixWorld,
      r = e.params.Line.threshold,
      a = n.drawRange;
    if (
      (n.boundingSphere === null && n.computeBoundingSphere(),
      Cs.copy(n.boundingSphere),
      Cs.applyMatrix4(i),
      (Cs.radius += r),
      e.ray.intersectsSphere(Cs) === !1)
    )
      return;
    ol.copy(i).invert(), Cr.copy(e.ray).applyMatrix4(ol);
    const o = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
      l = o * o,
      c = new D(),
      h = new D(),
      u = new D(),
      d = new D(),
      m = this.isLineSegments ? 2 : 1,
      g = n.index,
      p = n.attributes.position;
    if (g !== null) {
      const f = Math.max(0, a.start),
        y = Math.min(g.count, a.start + a.count);
      for (let M = f, S = y - 1; M < S; M += m) {
        const b = g.getX(M),
          L = g.getX(M + 1);
        if (
          (c.fromBufferAttribute(p, b),
          h.fromBufferAttribute(p, L),
          Cr.distanceSqToSegment(c, h, d, u) > l)
        )
          continue;
        d.applyMatrix4(this.matrixWorld);
        const I = e.ray.origin.distanceTo(d);
        I < e.near ||
          I > e.far ||
          t.push({
            distance: I,
            point: u.clone().applyMatrix4(this.matrixWorld),
            index: M,
            face: null,
            faceIndex: null,
            object: this,
          });
      }
    } else {
      const f = Math.max(0, a.start),
        y = Math.min(p.count, a.start + a.count);
      for (let M = f, S = y - 1; M < S; M += m) {
        if (
          (c.fromBufferAttribute(p, M),
          h.fromBufferAttribute(p, M + 1),
          Cr.distanceSqToSegment(c, h, d, u) > l)
        )
          continue;
        d.applyMatrix4(this.matrixWorld);
        const L = e.ray.origin.distanceTo(d);
        L < e.near ||
          L > e.far ||
          t.push({
            distance: L,
            point: u.clone().applyMatrix4(this.matrixWorld),
            index: M,
            face: null,
            faceIndex: null,
            object: this,
          });
      }
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes,
      n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let r = 0, a = i.length; r < a; r++) {
          const o = i[r].name || String(r);
          this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[o] = r);
        }
      }
    }
  }
}
const ll = new D(),
  cl = new D();
class eg extends ca {
  constructor(e, t) {
    super(e, t), (this.isLineSegments = !0), (this.type = "LineSegments");
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position,
        n = [];
      for (let i = 0, r = t.count; i < r; i += 2)
        ll.fromBufferAttribute(t, i),
          cl.fromBufferAttribute(t, i + 1),
          (n[i] = i === 0 ? 0 : n[i - 1]),
          (n[i + 1] = n[i] + ll.distanceTo(cl));
      e.setAttribute("lineDistance", new zt(n, 1));
    } else
      console.warn(
        "THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."
      );
    return this;
  }
}
class tg extends ca {
  constructor(e, t) {
    super(e, t), (this.isLineLoop = !0), (this.type = "LineLoop");
  }
}
class cc extends en {
  constructor(e) {
    super(),
      (this.isPointsMaterial = !0),
      (this.type = "PointsMaterial"),
      (this.color = new Ce(16777215)),
      (this.map = null),
      (this.alphaMap = null),
      (this.size = 1),
      (this.sizeAttenuation = !0),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.size = e.size),
      (this.sizeAttenuation = e.sizeAttenuation),
      (this.fog = e.fog),
      this
    );
  }
}
const hl = new He(),
  jr = new Qi(),
  Ls = new sn(),
  Ps = new D();
class ng extends tt {
  constructor(e = new jt(), t = new cc()) {
    super(),
      (this.isPoints = !0),
      (this.type = "Points"),
      (this.geometry = e),
      (this.material = t),
      this.updateMorphTargets();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.material = Array.isArray(e.material)
        ? e.material.slice()
        : e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  raycast(e, t) {
    const n = this.geometry,
      i = this.matrixWorld,
      r = e.params.Points.threshold,
      a = n.drawRange;
    if (
      (n.boundingSphere === null && n.computeBoundingSphere(),
      Ls.copy(n.boundingSphere),
      Ls.applyMatrix4(i),
      (Ls.radius += r),
      e.ray.intersectsSphere(Ls) === !1)
    )
      return;
    hl.copy(i).invert(), jr.copy(e.ray).applyMatrix4(hl);
    const o = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
      l = o * o,
      c = n.index,
      u = n.attributes.position;
    if (c !== null) {
      const d = Math.max(0, a.start),
        m = Math.min(c.count, a.start + a.count);
      for (let g = d, _ = m; g < _; g++) {
        const p = c.getX(g);
        Ps.fromBufferAttribute(u, p), ul(Ps, p, l, i, e, t, this);
      }
    } else {
      const d = Math.max(0, a.start),
        m = Math.min(u.count, a.start + a.count);
      for (let g = d, _ = m; g < _; g++)
        Ps.fromBufferAttribute(u, g), ul(Ps, g, l, i, e, t, this);
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes,
      n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let r = 0, a = i.length; r < a; r++) {
          const o = i[r].name || String(r);
          this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[o] = r);
        }
      }
    }
  }
}
function ul(s, e, t, n, i, r, a) {
  const o = jr.distanceSqToPoint(s);
  if (o < t) {
    const l = new D();
    jr.closestPointToPoint(s, l), l.applyMatrix4(n);
    const c = i.ray.origin.distanceTo(l);
    if (c < i.near || c > i.far) return;
    r.push({
      distance: c,
      distanceToRay: Math.sqrt(o),
      point: l,
      index: e,
      face: null,
      object: a,
    });
  }
}
class ha extends jt {
  constructor(e = 1, t = 0.4, n = 12, i = 48, r = Math.PI * 2) {
    super(),
      (this.type = "TorusGeometry"),
      (this.parameters = {
        radius: e,
        tube: t,
        radialSegments: n,
        tubularSegments: i,
        arc: r,
      }),
      (n = Math.floor(n)),
      (i = Math.floor(i));
    const a = [],
      o = [],
      l = [],
      c = [],
      h = new D(),
      u = new D(),
      d = new D();
    for (let m = 0; m <= n; m++)
      for (let g = 0; g <= i; g++) {
        const _ = (g / i) * r,
          p = (m / n) * Math.PI * 2;
        (u.x = (e + t * Math.cos(p)) * Math.cos(_)),
          (u.y = (e + t * Math.cos(p)) * Math.sin(_)),
          (u.z = t * Math.sin(p)),
          o.push(u.x, u.y, u.z),
          (h.x = e * Math.cos(_)),
          (h.y = e * Math.sin(_)),
          d.subVectors(u, h).normalize(),
          l.push(d.x, d.y, d.z),
          c.push(g / i),
          c.push(m / n);
      }
    for (let m = 1; m <= n; m++)
      for (let g = 1; g <= i; g++) {
        const _ = (i + 1) * m + g - 1,
          p = (i + 1) * (m - 1) + g - 1,
          f = (i + 1) * (m - 1) + g,
          y = (i + 1) * m + g;
        a.push(_, p, y), a.push(p, f, y);
      }
    this.setIndex(a),
      this.setAttribute("position", new zt(o, 3)),
      this.setAttribute("normal", new zt(l, 3)),
      this.setAttribute("uv", new zt(c, 2));
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new ha(e.radius, e.tube, e.radialSegments, e.tubularSegments, e.arc);
  }
}
class ua extends en {
  constructor(e) {
    super(),
      (this.isMeshStandardMaterial = !0),
      (this.defines = { STANDARD: "" }),
      (this.type = "MeshStandardMaterial"),
      (this.color = new Ce(16777215)),
      (this.roughness = 1),
      (this.metalness = 0),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new Ce(0)),
      (this.emissiveIntensity = 1),
      (this.emissiveMap = null),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = Hl),
      (this.normalScale = new Re(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.roughnessMap = null),
      (this.metalnessMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.envMapIntensity = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.flatShading = !1),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.defines = { STANDARD: "" }),
      this.color.copy(e.color),
      (this.roughness = e.roughness),
      (this.metalness = e.metalness),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      this.emissive.copy(e.emissive),
      (this.emissiveMap = e.emissiveMap),
      (this.emissiveIntensity = e.emissiveIntensity),
      (this.bumpMap = e.bumpMap),
      (this.bumpScale = e.bumpScale),
      (this.normalMap = e.normalMap),
      (this.normalMapType = e.normalMapType),
      this.normalScale.copy(e.normalScale),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.roughnessMap = e.roughnessMap),
      (this.metalnessMap = e.metalnessMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      (this.envMapIntensity = e.envMapIntensity),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.flatShading = e.flatShading),
      (this.fog = e.fog),
      this
    );
  }
}
class Dn extends ua {
  constructor(e) {
    super(),
      (this.isMeshPhysicalMaterial = !0),
      (this.defines = { STANDARD: "", PHYSICAL: "" }),
      (this.type = "MeshPhysicalMaterial"),
      (this.anisotropyRotation = 0),
      (this.anisotropyMap = null),
      (this.clearcoatMap = null),
      (this.clearcoatRoughness = 0),
      (this.clearcoatRoughnessMap = null),
      (this.clearcoatNormalScale = new Re(1, 1)),
      (this.clearcoatNormalMap = null),
      (this.ior = 1.5),
      Object.defineProperty(this, "reflectivity", {
        get: function () {
          return mt((2.5 * (this.ior - 1)) / (this.ior + 1), 0, 1);
        },
        set: function (t) {
          this.ior = (1 + 0.4 * t) / (1 - 0.4 * t);
        },
      }),
      (this.iridescenceMap = null),
      (this.iridescenceIOR = 1.3),
      (this.iridescenceThicknessRange = [100, 400]),
      (this.iridescenceThicknessMap = null),
      (this.sheenColor = new Ce(0)),
      (this.sheenColorMap = null),
      (this.sheenRoughness = 1),
      (this.sheenRoughnessMap = null),
      (this.transmissionMap = null),
      (this.thickness = 0),
      (this.thicknessMap = null),
      (this.attenuationDistance = 1 / 0),
      (this.attenuationColor = new Ce(1, 1, 1)),
      (this.specularIntensity = 1),
      (this.specularIntensityMap = null),
      (this.specularColor = new Ce(1, 1, 1)),
      (this.specularColorMap = null),
      (this._anisotropy = 0),
      (this._clearcoat = 0),
      (this._iridescence = 0),
      (this._sheen = 0),
      (this._transmission = 0),
      this.setValues(e);
  }
  get anisotropy() {
    return this._anisotropy;
  }
  set anisotropy(e) {
    this._anisotropy > 0 != e > 0 && this.version++, (this._anisotropy = e);
  }
  get clearcoat() {
    return this._clearcoat;
  }
  set clearcoat(e) {
    this._clearcoat > 0 != e > 0 && this.version++, (this._clearcoat = e);
  }
  get iridescence() {
    return this._iridescence;
  }
  set iridescence(e) {
    this._iridescence > 0 != e > 0 && this.version++, (this._iridescence = e);
  }
  get sheen() {
    return this._sheen;
  }
  set sheen(e) {
    this._sheen > 0 != e > 0 && this.version++, (this._sheen = e);
  }
  get transmission() {
    return this._transmission;
  }
  set transmission(e) {
    this._transmission > 0 != e > 0 && this.version++, (this._transmission = e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.defines = { STANDARD: "", PHYSICAL: "" }),
      (this.anisotropy = e.anisotropy),
      (this.anisotropyRotation = e.anisotropyRotation),
      (this.anisotropyMap = e.anisotropyMap),
      (this.clearcoat = e.clearcoat),
      (this.clearcoatMap = e.clearcoatMap),
      (this.clearcoatRoughness = e.clearcoatRoughness),
      (this.clearcoatRoughnessMap = e.clearcoatRoughnessMap),
      (this.clearcoatNormalMap = e.clearcoatNormalMap),
      this.clearcoatNormalScale.copy(e.clearcoatNormalScale),
      (this.ior = e.ior),
      (this.iridescence = e.iridescence),
      (this.iridescenceMap = e.iridescenceMap),
      (this.iridescenceIOR = e.iridescenceIOR),
      (this.iridescenceThicknessRange = [...e.iridescenceThicknessRange]),
      (this.iridescenceThicknessMap = e.iridescenceThicknessMap),
      (this.sheen = e.sheen),
      this.sheenColor.copy(e.sheenColor),
      (this.sheenColorMap = e.sheenColorMap),
      (this.sheenRoughness = e.sheenRoughness),
      (this.sheenRoughnessMap = e.sheenRoughnessMap),
      (this.transmission = e.transmission),
      (this.transmissionMap = e.transmissionMap),
      (this.thickness = e.thickness),
      (this.thicknessMap = e.thicknessMap),
      (this.attenuationDistance = e.attenuationDistance),
      this.attenuationColor.copy(e.attenuationColor),
      (this.specularIntensity = e.specularIntensity),
      (this.specularIntensityMap = e.specularIntensityMap),
      this.specularColor.copy(e.specularColor),
      (this.specularColorMap = e.specularColorMap),
      this
    );
  }
}
function Ds(s, e, t) {
  return !s || (!t && s.constructor === e)
    ? s
    : typeof e.BYTES_PER_ELEMENT == "number"
    ? new e(s)
    : Array.prototype.slice.call(s);
}
function ig(s) {
  return ArrayBuffer.isView(s) && !(s instanceof DataView);
}
function sg(s) {
  function e(i, r) {
    return s[i] - s[r];
  }
  const t = s.length,
    n = new Array(t);
  for (let i = 0; i !== t; ++i) n[i] = i;
  return n.sort(e), n;
}
function dl(s, e, t) {
  const n = s.length,
    i = new s.constructor(n);
  for (let r = 0, a = 0; a !== n; ++r) {
    const o = t[r] * e;
    for (let l = 0; l !== e; ++l) i[a++] = s[o + l];
  }
  return i;
}
function hc(s, e, t, n) {
  let i = 1,
    r = s[0];
  for (; r !== void 0 && r[n] === void 0; ) r = s[i++];
  if (r === void 0) return;
  let a = r[n];
  if (a !== void 0)
    if (Array.isArray(a))
      do
        (a = r[n]),
          a !== void 0 && (e.push(r.time), t.push.apply(t, a)),
          (r = s[i++]);
      while (r !== void 0);
    else if (a.toArray !== void 0)
      do
        (a = r[n]),
          a !== void 0 && (e.push(r.time), a.toArray(t, t.length)),
          (r = s[i++]);
      while (r !== void 0);
    else
      do (a = r[n]), a !== void 0 && (e.push(r.time), t.push(a)), (r = s[i++]);
      while (r !== void 0);
}
class ts {
  constructor(e, t, n, i) {
    (this.parameterPositions = e),
      (this._cachedIndex = 0),
      (this.resultBuffer = i !== void 0 ? i : new t.constructor(n)),
      (this.sampleValues = t),
      (this.valueSize = n),
      (this.settings = null),
      (this.DefaultSettings_ = {});
  }
  evaluate(e) {
    const t = this.parameterPositions;
    let n = this._cachedIndex,
      i = t[n],
      r = t[n - 1];
    n: {
      e: {
        let a;
        t: {
          i: if (!(e < i)) {
            for (let o = n + 2; ; ) {
              if (i === void 0) {
                if (e < r) break i;
                return (
                  (n = t.length),
                  (this._cachedIndex = n),
                  this.copySampleValue_(n - 1)
                );
              }
              if (n === o) break;
              if (((r = i), (i = t[++n]), e < i)) break e;
            }
            a = t.length;
            break t;
          }
          if (!(e >= r)) {
            const o = t[1];
            e < o && ((n = 2), (r = o));
            for (let l = n - 2; ; ) {
              if (r === void 0)
                return (this._cachedIndex = 0), this.copySampleValue_(0);
              if (n === l) break;
              if (((i = r), (r = t[--n - 1]), e >= r)) break e;
            }
            (a = n), (n = 0);
            break t;
          }
          break n;
        }
        for (; n < a; ) {
          const o = (n + a) >>> 1;
          e < t[o] ? (a = o) : (n = o + 1);
        }
        if (((i = t[n]), (r = t[n - 1]), r === void 0))
          return (this._cachedIndex = 0), this.copySampleValue_(0);
        if (i === void 0)
          return (
            (n = t.length),
            (this._cachedIndex = n),
            this.copySampleValue_(n - 1)
          );
      }
      (this._cachedIndex = n), this.intervalChanged_(n, r, i);
    }
    return this.interpolate_(n, r, e, i);
  }
  getSettings_() {
    return this.settings || this.DefaultSettings_;
  }
  copySampleValue_(e) {
    const t = this.resultBuffer,
      n = this.sampleValues,
      i = this.valueSize,
      r = e * i;
    for (let a = 0; a !== i; ++a) t[a] = n[r + a];
    return t;
  }
  interpolate_() {
    throw new Error("call to abstract method");
  }
  intervalChanged_() {}
}
class rg extends ts {
  constructor(e, t, n, i) {
    super(e, t, n, i),
      (this._weightPrev = -0),
      (this._offsetPrev = -0),
      (this._weightNext = -0),
      (this._offsetNext = -0),
      (this.DefaultSettings_ = { endingStart: ao, endingEnd: ao });
  }
  intervalChanged_(e, t, n) {
    const i = this.parameterPositions;
    let r = e - 2,
      a = e + 1,
      o = i[r],
      l = i[a];
    if (o === void 0)
      switch (this.getSettings_().endingStart) {
        case oo:
          (r = e), (o = 2 * t - n);
          break;
        case lo:
          (r = i.length - 2), (o = t + i[r] - i[r + 1]);
          break;
        default:
          (r = e), (o = n);
      }
    if (l === void 0)
      switch (this.getSettings_().endingEnd) {
        case oo:
          (a = e), (l = 2 * n - t);
          break;
        case lo:
          (a = 1), (l = n + i[1] - i[0]);
          break;
        default:
          (a = e - 1), (l = t);
      }
    const c = (n - t) * 0.5,
      h = this.valueSize;
    (this._weightPrev = c / (t - o)),
      (this._weightNext = c / (l - n)),
      (this._offsetPrev = r * h),
      (this._offsetNext = a * h);
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer,
      a = this.sampleValues,
      o = this.valueSize,
      l = e * o,
      c = l - o,
      h = this._offsetPrev,
      u = this._offsetNext,
      d = this._weightPrev,
      m = this._weightNext,
      g = (n - t) / (i - t),
      _ = g * g,
      p = _ * g,
      f = -d * p + 2 * d * _ - d * g,
      y = (1 + d) * p + (-1.5 - 2 * d) * _ + (-0.5 + d) * g + 1,
      M = (-1 - m) * p + (1.5 + m) * _ + 0.5 * g,
      S = m * p - m * _;
    for (let b = 0; b !== o; ++b)
      r[b] = f * a[h + b] + y * a[c + b] + M * a[l + b] + S * a[u + b];
    return r;
  }
}
class ag extends ts {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer,
      a = this.sampleValues,
      o = this.valueSize,
      l = e * o,
      c = l - o,
      h = (n - t) / (i - t),
      u = 1 - h;
    for (let d = 0; d !== o; ++d) r[d] = a[c + d] * u + a[l + d] * h;
    return r;
  }
}
class og extends ts {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e) {
    return this.copySampleValue_(e - 1);
  }
}
class rn {
  constructor(e, t, n, i) {
    if (e === void 0)
      throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (t === void 0 || t.length === 0)
      throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
    (this.name = e),
      (this.times = Ds(t, this.TimeBufferType)),
      (this.values = Ds(n, this.ValueBufferType)),
      this.setInterpolation(i || this.DefaultInterpolation);
  }
  static toJSON(e) {
    const t = e.constructor;
    let n;
    if (t.toJSON !== this.toJSON) n = t.toJSON(e);
    else {
      n = {
        name: e.name,
        times: Ds(e.times, Array),
        values: Ds(e.values, Array),
      };
      const i = e.getInterpolation();
      i !== e.DefaultInterpolation && (n.interpolation = i);
    }
    return (n.type = e.ValueTypeName), n;
  }
  InterpolantFactoryMethodDiscrete(e) {
    return new og(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodLinear(e) {
    return new ag(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodSmooth(e) {
    return new rg(this.times, this.values, this.getValueSize(), e);
  }
  setInterpolation(e) {
    let t;
    switch (e) {
      case $i:
        t = this.InterpolantFactoryMethodDiscrete;
        break;
      case Ai:
        t = this.InterpolantFactoryMethodLinear;
        break;
      case ir:
        t = this.InterpolantFactoryMethodSmooth;
        break;
    }
    if (t === void 0) {
      const n =
        "unsupported interpolation for " +
        this.ValueTypeName +
        " keyframe track named " +
        this.name;
      if (this.createInterpolant === void 0)
        if (e !== this.DefaultInterpolation)
          this.setInterpolation(this.DefaultInterpolation);
        else throw new Error(n);
      return console.warn("THREE.KeyframeTrack:", n), this;
    }
    return (this.createInterpolant = t), this;
  }
  getInterpolation() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return $i;
      case this.InterpolantFactoryMethodLinear:
        return Ai;
      case this.InterpolantFactoryMethodSmooth:
        return ir;
    }
  }
  getValueSize() {
    return this.values.length / this.times.length;
  }
  shift(e) {
    if (e !== 0) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n) t[n] += e;
    }
    return this;
  }
  scale(e) {
    if (e !== 1) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n) t[n] *= e;
    }
    return this;
  }
  trim(e, t) {
    const n = this.times,
      i = n.length;
    let r = 0,
      a = i - 1;
    for (; r !== i && n[r] < e; ) ++r;
    for (; a !== -1 && n[a] > t; ) --a;
    if ((++a, r !== 0 || a !== i)) {
      r >= a && ((a = Math.max(a, 1)), (r = a - 1));
      const o = this.getValueSize();
      (this.times = n.slice(r, a)),
        (this.values = this.values.slice(r * o, a * o));
    }
    return this;
  }
  validate() {
    let e = !0;
    const t = this.getValueSize();
    t - Math.floor(t) !== 0 &&
      (console.error("THREE.KeyframeTrack: Invalid value size in track.", this),
      (e = !1));
    const n = this.times,
      i = this.values,
      r = n.length;
    r === 0 &&
      (console.error("THREE.KeyframeTrack: Track is empty.", this), (e = !1));
    let a = null;
    for (let o = 0; o !== r; o++) {
      const l = n[o];
      if (typeof l == "number" && isNaN(l)) {
        console.error(
          "THREE.KeyframeTrack: Time is not a valid number.",
          this,
          o,
          l
        ),
          (e = !1);
        break;
      }
      if (a !== null && a > l) {
        console.error("THREE.KeyframeTrack: Out of order keys.", this, o, l, a),
          (e = !1);
        break;
      }
      a = l;
    }
    if (i !== void 0 && ig(i))
      for (let o = 0, l = i.length; o !== l; ++o) {
        const c = i[o];
        if (isNaN(c)) {
          console.error(
            "THREE.KeyframeTrack: Value is not a valid number.",
            this,
            o,
            c
          ),
            (e = !1);
          break;
        }
      }
    return e;
  }
  optimize() {
    const e = this.times.slice(),
      t = this.values.slice(),
      n = this.getValueSize(),
      i = this.getInterpolation() === ir,
      r = e.length - 1;
    let a = 1;
    for (let o = 1; o < r; ++o) {
      let l = !1;
      const c = e[o],
        h = e[o + 1];
      if (c !== h && (o !== 1 || c !== e[0]))
        if (i) l = !0;
        else {
          const u = o * n,
            d = u - n,
            m = u + n;
          for (let g = 0; g !== n; ++g) {
            const _ = t[u + g];
            if (_ !== t[d + g] || _ !== t[m + g]) {
              l = !0;
              break;
            }
          }
        }
      if (l) {
        if (o !== a) {
          e[a] = e[o];
          const u = o * n,
            d = a * n;
          for (let m = 0; m !== n; ++m) t[d + m] = t[u + m];
        }
        ++a;
      }
    }
    if (r > 0) {
      e[a] = e[r];
      for (let o = r * n, l = a * n, c = 0; c !== n; ++c) t[l + c] = t[o + c];
      ++a;
    }
    return (
      a !== e.length
        ? ((this.times = e.slice(0, a)), (this.values = t.slice(0, a * n)))
        : ((this.times = e), (this.values = t)),
      this
    );
  }
  clone() {
    const e = this.times.slice(),
      t = this.values.slice(),
      n = this.constructor,
      i = new n(this.name, e, t);
    return (i.createInterpolant = this.createInterpolant), i;
  }
}
rn.prototype.TimeBufferType = Float32Array;
rn.prototype.ValueBufferType = Float32Array;
rn.prototype.DefaultInterpolation = Ai;
class Ui extends rn {}
Ui.prototype.ValueTypeName = "bool";
Ui.prototype.ValueBufferType = Array;
Ui.prototype.DefaultInterpolation = $i;
Ui.prototype.InterpolantFactoryMethodLinear = void 0;
Ui.prototype.InterpolantFactoryMethodSmooth = void 0;
class uc extends rn {}
uc.prototype.ValueTypeName = "color";
class Ri extends rn {}
Ri.prototype.ValueTypeName = "number";
class lg extends ts {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer,
      a = this.sampleValues,
      o = this.valueSize,
      l = (n - t) / (i - t);
    let c = e * o;
    for (let h = c + o; c !== h; c += 4) nn.slerpFlat(r, 0, a, c - o, a, c, l);
    return r;
  }
}
class Kn extends rn {
  InterpolantFactoryMethodLinear(e) {
    return new lg(this.times, this.values, this.getValueSize(), e);
  }
}
Kn.prototype.ValueTypeName = "quaternion";
Kn.prototype.DefaultInterpolation = Ai;
Kn.prototype.InterpolantFactoryMethodSmooth = void 0;
class Ni extends rn {}
Ni.prototype.ValueTypeName = "string";
Ni.prototype.ValueBufferType = Array;
Ni.prototype.DefaultInterpolation = $i;
Ni.prototype.InterpolantFactoryMethodLinear = void 0;
Ni.prototype.InterpolantFactoryMethodSmooth = void 0;
class Ci extends rn {}
Ci.prototype.ValueTypeName = "vector";
class cg {
  constructor(e, t = -1, n, i = mh) {
    (this.name = e),
      (this.tracks = n),
      (this.duration = t),
      (this.blendMode = i),
      (this.uuid = Yt()),
      this.duration < 0 && this.resetDuration();
  }
  static parse(e) {
    const t = [],
      n = e.tracks,
      i = 1 / (e.fps || 1);
    for (let a = 0, o = n.length; a !== o; ++a) t.push(ug(n[a]).scale(i));
    const r = new this(e.name, e.duration, t, e.blendMode);
    return (r.uuid = e.uuid), r;
  }
  static toJSON(e) {
    const t = [],
      n = e.tracks,
      i = {
        name: e.name,
        duration: e.duration,
        tracks: t,
        uuid: e.uuid,
        blendMode: e.blendMode,
      };
    for (let r = 0, a = n.length; r !== a; ++r) t.push(rn.toJSON(n[r]));
    return i;
  }
  static CreateFromMorphTargetSequence(e, t, n, i) {
    const r = t.length,
      a = [];
    for (let o = 0; o < r; o++) {
      let l = [],
        c = [];
      l.push((o + r - 1) % r, o, (o + 1) % r), c.push(0, 1, 0);
      const h = sg(l);
      (l = dl(l, 1, h)),
        (c = dl(c, 1, h)),
        !i && l[0] === 0 && (l.push(r), c.push(c[0])),
        a.push(
          new Ri(".morphTargetInfluences[" + t[o].name + "]", l, c).scale(1 / n)
        );
    }
    return new this(e, -1, a);
  }
  static findByName(e, t) {
    let n = e;
    if (!Array.isArray(e)) {
      const i = e;
      n = (i.geometry && i.geometry.animations) || i.animations;
    }
    for (let i = 0; i < n.length; i++) if (n[i].name === t) return n[i];
    return null;
  }
  static CreateClipsFromMorphTargetSequences(e, t, n) {
    const i = {},
      r = /^([\w-]*?)([\d]+)$/;
    for (let o = 0, l = e.length; o < l; o++) {
      const c = e[o],
        h = c.name.match(r);
      if (h && h.length > 1) {
        const u = h[1];
        let d = i[u];
        d || (i[u] = d = []), d.push(c);
      }
    }
    const a = [];
    for (const o in i)
      a.push(this.CreateFromMorphTargetSequence(o, i[o], t, n));
    return a;
  }
  static parseAnimation(e, t) {
    if (!e)
      return (
        console.error("THREE.AnimationClip: No animation in JSONLoader data."),
        null
      );
    const n = function (u, d, m, g, _) {
        if (m.length !== 0) {
          const p = [],
            f = [];
          hc(m, p, f, g), p.length !== 0 && _.push(new u(d, p, f));
        }
      },
      i = [],
      r = e.name || "default",
      a = e.fps || 30,
      o = e.blendMode;
    let l = e.length || -1;
    const c = e.hierarchy || [];
    for (let u = 0; u < c.length; u++) {
      const d = c[u].keys;
      if (!(!d || d.length === 0))
        if (d[0].morphTargets) {
          const m = {};
          let g;
          for (g = 0; g < d.length; g++)
            if (d[g].morphTargets)
              for (let _ = 0; _ < d[g].morphTargets.length; _++)
                m[d[g].morphTargets[_]] = -1;
          for (const _ in m) {
            const p = [],
              f = [];
            for (let y = 0; y !== d[g].morphTargets.length; ++y) {
              const M = d[g];
              p.push(M.time), f.push(M.morphTarget === _ ? 1 : 0);
            }
            i.push(new Ri(".morphTargetInfluence[" + _ + "]", p, f));
          }
          l = m.length * a;
        } else {
          const m = ".bones[" + t[u].name + "]";
          n(Ci, m + ".position", d, "pos", i),
            n(Kn, m + ".quaternion", d, "rot", i),
            n(Ci, m + ".scale", d, "scl", i);
        }
    }
    return i.length === 0 ? null : new this(r, l, i, o);
  }
  resetDuration() {
    const e = this.tracks;
    let t = 0;
    for (let n = 0, i = e.length; n !== i; ++n) {
      const r = this.tracks[n];
      t = Math.max(t, r.times[r.times.length - 1]);
    }
    return (this.duration = t), this;
  }
  trim() {
    for (let e = 0; e < this.tracks.length; e++)
      this.tracks[e].trim(0, this.duration);
    return this;
  }
  validate() {
    let e = !0;
    for (let t = 0; t < this.tracks.length; t++)
      e = e && this.tracks[t].validate();
    return e;
  }
  optimize() {
    for (let e = 0; e < this.tracks.length; e++) this.tracks[e].optimize();
    return this;
  }
  clone() {
    const e = [];
    for (let t = 0; t < this.tracks.length; t++) e.push(this.tracks[t].clone());
    return new this.constructor(this.name, this.duration, e, this.blendMode);
  }
  toJSON() {
    return this.constructor.toJSON(this);
  }
}
function hg(s) {
  switch (s.toLowerCase()) {
    case "scalar":
    case "double":
    case "float":
    case "number":
    case "integer":
      return Ri;
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4":
      return Ci;
    case "color":
      return uc;
    case "quaternion":
      return Kn;
    case "bool":
    case "boolean":
      return Ui;
    case "string":
      return Ni;
  }
  throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + s);
}
function ug(s) {
  if (s.type === void 0)
    throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
  const e = hg(s.type);
  if (s.times === void 0) {
    const t = [],
      n = [];
    hc(s.keys, t, n, "value"), (s.times = t), (s.values = n);
  }
  return e.parse !== void 0
    ? e.parse(s)
    : new e(s.name, s.times, s.values, s.interpolation);
}
const Li = {
  enabled: !1,
  files: {},
  add: function (s, e) {
    this.enabled !== !1 && (this.files[s] = e);
  },
  get: function (s) {
    if (this.enabled !== !1) return this.files[s];
  },
  remove: function (s) {
    delete this.files[s];
  },
  clear: function () {
    this.files = {};
  },
};
class dg {
  constructor(e, t, n) {
    const i = this;
    let r = !1,
      a = 0,
      o = 0,
      l;
    const c = [];
    (this.onStart = void 0),
      (this.onLoad = e),
      (this.onProgress = t),
      (this.onError = n),
      (this.itemStart = function (h) {
        o++, r === !1 && i.onStart !== void 0 && i.onStart(h, a, o), (r = !0);
      }),
      (this.itemEnd = function (h) {
        a++,
          i.onProgress !== void 0 && i.onProgress(h, a, o),
          a === o && ((r = !1), i.onLoad !== void 0 && i.onLoad());
      }),
      (this.itemError = function (h) {
        i.onError !== void 0 && i.onError(h);
      }),
      (this.resolveURL = function (h) {
        return l ? l(h) : h;
      }),
      (this.setURLModifier = function (h) {
        return (l = h), this;
      }),
      (this.addHandler = function (h, u) {
        return c.push(h, u), this;
      }),
      (this.removeHandler = function (h) {
        const u = c.indexOf(h);
        return u !== -1 && c.splice(u, 2), this;
      }),
      (this.getHandler = function (h) {
        for (let u = 0, d = c.length; u < d; u += 2) {
          const m = c[u],
            g = c[u + 1];
          if ((m.global && (m.lastIndex = 0), m.test(h))) return g;
        }
        return null;
      });
  }
}
const fg = new dg();
class In {
  constructor(e) {
    (this.manager = e !== void 0 ? e : fg),
      (this.crossOrigin = "anonymous"),
      (this.withCredentials = !1),
      (this.path = ""),
      (this.resourcePath = ""),
      (this.requestHeader = {});
  }
  load() {}
  loadAsync(e, t) {
    const n = this;
    return new Promise(function (i, r) {
      n.load(e, i, t, r);
    });
  }
  parse() {}
  setCrossOrigin(e) {
    return (this.crossOrigin = e), this;
  }
  setWithCredentials(e) {
    return (this.withCredentials = e), this;
  }
  setPath(e) {
    return (this.path = e), this;
  }
  setResourcePath(e) {
    return (this.resourcePath = e), this;
  }
  setRequestHeader(e) {
    return (this.requestHeader = e), this;
  }
}
In.DEFAULT_MATERIAL_NAME = "__DEFAULT";
const dn = {};
class pg extends Error {
  constructor(e, t) {
    super(e), (this.response = t);
  }
}
class da extends In {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""),
      this.path !== void 0 && (e = this.path + e),
      (e = this.manager.resolveURL(e));
    const r = Li.get(e);
    if (r !== void 0)
      return (
        this.manager.itemStart(e),
        setTimeout(() => {
          t && t(r), this.manager.itemEnd(e);
        }, 0),
        r
      );
    if (dn[e] !== void 0) {
      dn[e].push({ onLoad: t, onProgress: n, onError: i });
      return;
    }
    (dn[e] = []), dn[e].push({ onLoad: t, onProgress: n, onError: i });
    const a = new Request(e, {
        headers: new Headers(this.requestHeader),
        credentials: this.withCredentials ? "include" : "same-origin",
      }),
      o = this.mimeType,
      l = this.responseType;
    fetch(a)
      .then((c) => {
        if (c.status === 200 || c.status === 0) {
          if (
            (c.status === 0 &&
              console.warn("THREE.FileLoader: HTTP Status 0 received."),
            typeof ReadableStream > "u" ||
              c.body === void 0 ||
              c.body.getReader === void 0)
          )
            return c;
          const h = dn[e],
            u = c.body.getReader(),
            d = c.headers.get("Content-Length") || c.headers.get("X-File-Size"),
            m = d ? parseInt(d) : 0,
            g = m !== 0;
          let _ = 0;
          const p = new ReadableStream({
            start(f) {
              y();
              function y() {
                u.read().then(({ done: M, value: S }) => {
                  if (M) f.close();
                  else {
                    _ += S.byteLength;
                    const b = new ProgressEvent("progress", {
                      lengthComputable: g,
                      loaded: _,
                      total: m,
                    });
                    for (let L = 0, w = h.length; L < w; L++) {
                      const I = h[L];
                      I.onProgress && I.onProgress(b);
                    }
                    f.enqueue(S), y();
                  }
                });
              }
            },
          });
          return new Response(p);
        } else
          throw new pg(
            `fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,
            c
          );
      })
      .then((c) => {
        switch (l) {
          case "arraybuffer":
            return c.arrayBuffer();
          case "blob":
            return c.blob();
          case "document":
            return c.text().then((h) => new DOMParser().parseFromString(h, o));
          case "json":
            return c.json();
          default:
            if (o === void 0) return c.text();
            {
              const u = /charset="?([^;"\s]*)"?/i.exec(o),
                d = u && u[1] ? u[1].toLowerCase() : void 0,
                m = new TextDecoder(d);
              return c.arrayBuffer().then((g) => m.decode(g));
            }
        }
      })
      .then((c) => {
        Li.add(e, c);
        const h = dn[e];
        delete dn[e];
        for (let u = 0, d = h.length; u < d; u++) {
          const m = h[u];
          m.onLoad && m.onLoad(c);
        }
      })
      .catch((c) => {
        const h = dn[e];
        if (h === void 0) throw (this.manager.itemError(e), c);
        delete dn[e];
        for (let u = 0, d = h.length; u < d; u++) {
          const m = h[u];
          m.onError && m.onError(c);
        }
        this.manager.itemError(e);
      })
      .finally(() => {
        this.manager.itemEnd(e);
      }),
      this.manager.itemStart(e);
  }
  setResponseType(e) {
    return (this.responseType = e), this;
  }
  setMimeType(e) {
    return (this.mimeType = e), this;
  }
}
class dc extends In {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    this.path !== void 0 && (e = this.path + e),
      (e = this.manager.resolveURL(e));
    const r = this,
      a = Li.get(e);
    if (a !== void 0)
      return (
        r.manager.itemStart(e),
        setTimeout(function () {
          t && t(a), r.manager.itemEnd(e);
        }, 0),
        a
      );
    const o = Ki("img");
    function l() {
      h(), Li.add(e, this), t && t(this), r.manager.itemEnd(e);
    }
    function c(u) {
      h(), i && i(u), r.manager.itemError(e), r.manager.itemEnd(e);
    }
    function h() {
      o.removeEventListener("load", l, !1),
        o.removeEventListener("error", c, !1);
    }
    return (
      o.addEventListener("load", l, !1),
      o.addEventListener("error", c, !1),
      e.slice(0, 5) !== "data:" &&
        this.crossOrigin !== void 0 &&
        (o.crossOrigin = this.crossOrigin),
      r.manager.itemStart(e),
      (o.src = e),
      o
    );
  }
}
class mg extends In {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const r = new na();
    r.colorSpace = et;
    const a = new dc(this.manager);
    a.setCrossOrigin(this.crossOrigin), a.setPath(this.path);
    let o = 0;
    function l(c) {
      a.load(
        e[c],
        function (h) {
          (r.images[c] = h), o++, o === 6 && ((r.needsUpdate = !0), t && t(r));
        },
        void 0,
        i
      );
    }
    for (let c = 0; c < e.length; ++c) l(c);
    return r;
  }
}
class gg extends In {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const r = this,
      a = new oc(),
      o = new da(this.manager);
    return (
      o.setResponseType("arraybuffer"),
      o.setRequestHeader(this.requestHeader),
      o.setPath(this.path),
      o.setWithCredentials(r.withCredentials),
      o.load(
        e,
        function (l) {
          let c;
          try {
            c = r.parse(l);
          } catch (h) {
            if (i !== void 0) i(h);
            else {
              console.error(h);
              return;
            }
          }
          c.image !== void 0
            ? (a.image = c.image)
            : c.data !== void 0 &&
              ((a.image.width = c.width),
              (a.image.height = c.height),
              (a.image.data = c.data)),
            (a.wrapS = c.wrapS !== void 0 ? c.wrapS : wt),
            (a.wrapT = c.wrapT !== void 0 ? c.wrapT : wt),
            (a.magFilter = c.magFilter !== void 0 ? c.magFilter : lt),
            (a.minFilter = c.minFilter !== void 0 ? c.minFilter : lt),
            (a.anisotropy = c.anisotropy !== void 0 ? c.anisotropy : 1),
            c.colorSpace !== void 0
              ? (a.colorSpace = c.colorSpace)
              : c.encoding !== void 0 && (a.encoding = c.encoding),
            c.flipY !== void 0 && (a.flipY = c.flipY),
            c.format !== void 0 && (a.format = c.format),
            c.type !== void 0 && (a.type = c.type),
            c.mipmaps !== void 0 &&
              ((a.mipmaps = c.mipmaps), (a.minFilter = Pn)),
            c.mipmapCount === 1 && (a.minFilter = lt),
            c.generateMipmaps !== void 0 &&
              (a.generateMipmaps = c.generateMipmaps),
            (a.needsUpdate = !0),
            t && t(a, c);
        },
        n,
        i
      ),
      a
    );
  }
}
class fc extends In {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const r = new _t(),
      a = new dc(this.manager);
    return (
      a.setCrossOrigin(this.crossOrigin),
      a.setPath(this.path),
      a.load(
        e,
        function (o) {
          (r.image = o), (r.needsUpdate = !0), t !== void 0 && t(r);
        },
        n,
        i
      ),
      r
    );
  }
}
class fa extends tt {
  constructor(e, t = 1) {
    super(),
      (this.isLight = !0),
      (this.type = "Light"),
      (this.color = new Ce(e)),
      (this.intensity = t);
  }
  dispose() {}
  copy(e, t) {
    return (
      super.copy(e, t),
      this.color.copy(e.color),
      (this.intensity = e.intensity),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.color = this.color.getHex()),
      (t.object.intensity = this.intensity),
      this.groundColor !== void 0 &&
        (t.object.groundColor = this.groundColor.getHex()),
      this.distance !== void 0 && (t.object.distance = this.distance),
      this.angle !== void 0 && (t.object.angle = this.angle),
      this.decay !== void 0 && (t.object.decay = this.decay),
      this.penumbra !== void 0 && (t.object.penumbra = this.penumbra),
      this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()),
      t
    );
  }
}
const Lr = new He(),
  fl = new D(),
  pl = new D();
class pa {
  constructor(e) {
    (this.camera = e),
      (this.bias = 0),
      (this.normalBias = 0),
      (this.radius = 1),
      (this.blurSamples = 8),
      (this.mapSize = new Re(512, 512)),
      (this.map = null),
      (this.mapPass = null),
      (this.matrix = new He()),
      (this.autoUpdate = !0),
      (this.needsUpdate = !1),
      (this._frustum = new ia()),
      (this._frameExtents = new Re(1, 1)),
      (this._viewportCount = 1),
      (this._viewports = [new $e(0, 0, 1, 1)]);
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    const t = this.camera,
      n = this.matrix;
    fl.setFromMatrixPosition(e.matrixWorld),
      t.position.copy(fl),
      pl.setFromMatrixPosition(e.target.matrixWorld),
      t.lookAt(pl),
      t.updateMatrixWorld(),
      Lr.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
      this._frustum.setFromProjectionMatrix(Lr),
      n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1),
      n.multiply(Lr);
  }
  getViewport(e) {
    return this._viewports[e];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(e) {
    return (
      (this.camera = e.camera.clone()),
      (this.bias = e.bias),
      (this.radius = e.radius),
      this.mapSize.copy(e.mapSize),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = {};
    return (
      this.bias !== 0 && (e.bias = this.bias),
      this.normalBias !== 0 && (e.normalBias = this.normalBias),
      this.radius !== 1 && (e.radius = this.radius),
      (this.mapSize.x !== 512 || this.mapSize.y !== 512) &&
        (e.mapSize = this.mapSize.toArray()),
      (e.camera = this.camera.toJSON(!1).object),
      delete e.camera.matrix,
      e
    );
  }
}
class _g extends pa {
  constructor() {
    super(new At(50, 1, 0.5, 500)),
      (this.isSpotLightShadow = !0),
      (this.focus = 1);
  }
  updateMatrices(e) {
    const t = this.camera,
      n = bi * 2 * e.angle * this.focus,
      i = this.mapSize.width / this.mapSize.height,
      r = e.distance || t.far;
    (n !== t.fov || i !== t.aspect || r !== t.far) &&
      ((t.fov = n), (t.aspect = i), (t.far = r), t.updateProjectionMatrix()),
      super.updateMatrices(e);
  }
  copy(e) {
    return super.copy(e), (this.focus = e.focus), this;
  }
}
class xg extends fa {
  constructor(e, t, n = 0, i = Math.PI / 3, r = 0, a = 2) {
    super(e, t),
      (this.isSpotLight = !0),
      (this.type = "SpotLight"),
      this.position.copy(tt.DEFAULT_UP),
      this.updateMatrix(),
      (this.target = new tt()),
      (this.distance = n),
      (this.angle = i),
      (this.penumbra = r),
      (this.decay = a),
      (this.map = null),
      (this.shadow = new _g());
  }
  get power() {
    return this.intensity * Math.PI;
  }
  set power(e) {
    this.intensity = e / Math.PI;
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.distance = e.distance),
      (this.angle = e.angle),
      (this.penumbra = e.penumbra),
      (this.decay = e.decay),
      (this.target = e.target.clone()),
      (this.shadow = e.shadow.clone()),
      this
    );
  }
}
const ml = new He(),
  Vi = new D(),
  Pr = new D();
class vg extends pa {
  constructor() {
    super(new At(90, 1, 0.5, 500)),
      (this.isPointLightShadow = !0),
      (this._frameExtents = new Re(4, 2)),
      (this._viewportCount = 6),
      (this._viewports = [
        new $e(2, 1, 1, 1),
        new $e(0, 1, 1, 1),
        new $e(3, 1, 1, 1),
        new $e(1, 1, 1, 1),
        new $e(3, 0, 1, 1),
        new $e(1, 0, 1, 1),
      ]),
      (this._cubeDirections = [
        new D(1, 0, 0),
        new D(-1, 0, 0),
        new D(0, 0, 1),
        new D(0, 0, -1),
        new D(0, 1, 0),
        new D(0, -1, 0),
      ]),
      (this._cubeUps = [
        new D(0, 1, 0),
        new D(0, 1, 0),
        new D(0, 1, 0),
        new D(0, 1, 0),
        new D(0, 0, 1),
        new D(0, 0, -1),
      ]);
  }
  updateMatrices(e, t = 0) {
    const n = this.camera,
      i = this.matrix,
      r = e.distance || n.far;
    r !== n.far && ((n.far = r), n.updateProjectionMatrix()),
      Vi.setFromMatrixPosition(e.matrixWorld),
      n.position.copy(Vi),
      Pr.copy(n.position),
      Pr.add(this._cubeDirections[t]),
      n.up.copy(this._cubeUps[t]),
      n.lookAt(Pr),
      n.updateMatrixWorld(),
      i.makeTranslation(-Vi.x, -Vi.y, -Vi.z),
      ml.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse),
      this._frustum.setFromProjectionMatrix(ml);
  }
}
class Mg extends fa {
  constructor(e, t, n = 0, i = 2) {
    super(e, t),
      (this.isPointLight = !0),
      (this.type = "PointLight"),
      (this.distance = n),
      (this.decay = i),
      (this.shadow = new vg());
  }
  get power() {
    return this.intensity * 4 * Math.PI;
  }
  set power(e) {
    this.intensity = e / (4 * Math.PI);
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.distance = e.distance),
      (this.decay = e.decay),
      (this.shadow = e.shadow.clone()),
      this
    );
  }
}
class yg extends pa {
  constructor() {
    super(new ra(-5, 5, 5, -5, 0.5, 500)), (this.isDirectionalLightShadow = !0);
  }
}
class Eg extends fa {
  constructor(e, t) {
    super(e, t),
      (this.isDirectionalLight = !0),
      (this.type = "DirectionalLight"),
      this.position.copy(tt.DEFAULT_UP),
      this.updateMatrix(),
      (this.target = new tt()),
      (this.shadow = new yg());
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return (
      super.copy(e),
      (this.target = e.target.clone()),
      (this.shadow = e.shadow.clone()),
      this
    );
  }
}
class qr {
  static decodeText(e) {
    if (typeof TextDecoder < "u") return new TextDecoder().decode(e);
    let t = "";
    for (let n = 0, i = e.length; n < i; n++) t += String.fromCharCode(e[n]);
    try {
      return decodeURIComponent(escape(t));
    } catch {
      return t;
    }
  }
  static extractUrlBase(e) {
    const t = e.lastIndexOf("/");
    return t === -1 ? "./" : e.slice(0, t + 1);
  }
  static resolveURL(e, t) {
    return typeof e != "string" || e === ""
      ? ""
      : (/^https?:\/\//i.test(t) &&
          /^\//.test(e) &&
          (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")),
        /^(https?:)?\/\//i.test(e) ||
        /^data:.*,.*$/i.test(e) ||
        /^blob:.*$/i.test(e)
          ? e
          : t + e);
  }
}
class Sg extends In {
  constructor(e) {
    super(e),
      (this.isImageBitmapLoader = !0),
      typeof createImageBitmap > "u" &&
        console.warn(
          "THREE.ImageBitmapLoader: createImageBitmap() not supported."
        ),
      typeof fetch > "u" &&
        console.warn("THREE.ImageBitmapLoader: fetch() not supported."),
      (this.options = { premultiplyAlpha: "none" });
  }
  setOptions(e) {
    return (this.options = e), this;
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""),
      this.path !== void 0 && (e = this.path + e),
      (e = this.manager.resolveURL(e));
    const r = this,
      a = Li.get(e);
    if (a !== void 0)
      return (
        r.manager.itemStart(e),
        setTimeout(function () {
          t && t(a), r.manager.itemEnd(e);
        }, 0),
        a
      );
    const o = {};
    (o.credentials =
      this.crossOrigin === "anonymous" ? "same-origin" : "include"),
      (o.headers = this.requestHeader),
      fetch(e, o)
        .then(function (l) {
          return l.blob();
        })
        .then(function (l) {
          return createImageBitmap(
            l,
            Object.assign(r.options, { colorSpaceConversion: "none" })
          );
        })
        .then(function (l) {
          Li.add(e, l), t && t(l), r.manager.itemEnd(e);
        })
        .catch(function (l) {
          i && i(l), r.manager.itemError(e), r.manager.itemEnd(e);
        }),
      r.manager.itemStart(e);
  }
}
class Tg {
  constructor(e = !0) {
    (this.autoStart = e),
      (this.startTime = 0),
      (this.oldTime = 0),
      (this.elapsedTime = 0),
      (this.running = !1);
  }
  start() {
    (this.startTime = gl()),
      (this.oldTime = this.startTime),
      (this.elapsedTime = 0),
      (this.running = !0);
  }
  stop() {
    this.getElapsedTime(), (this.running = !1), (this.autoStart = !1);
  }
  getElapsedTime() {
    return this.getDelta(), this.elapsedTime;
  }
  getDelta() {
    let e = 0;
    if (this.autoStart && !this.running) return this.start(), 0;
    if (this.running) {
      const t = gl();
      (e = (t - this.oldTime) / 1e3),
        (this.oldTime = t),
        (this.elapsedTime += e);
    }
    return e;
  }
}
function gl() {
  return (typeof performance > "u" ? Date : performance).now();
}
const ma = "\\[\\]\\.:\\/",
  Ag = new RegExp("[" + ma + "]", "g"),
  ga = "[^" + ma + "]",
  bg = "[^" + ma.replace("\\.", "") + "]",
  wg = /((?:WC+[\/:])*)/.source.replace("WC", ga),
  Rg = /(WCOD+)?/.source.replace("WCOD", bg),
  Cg = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", ga),
  Lg = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", ga),
  Pg = new RegExp("^" + wg + Rg + Cg + Lg + "$"),
  Dg = ["material", "materials", "bones", "map"];
class Ig {
  constructor(e, t, n) {
    const i = n || je.parseTrackName(t);
    (this._targetGroup = e), (this._bindings = e.subscribe_(t, i));
  }
  getValue(e, t) {
    this.bind();
    const n = this._targetGroup.nCachedObjects_,
      i = this._bindings[n];
    i !== void 0 && i.getValue(e, t);
  }
  setValue(e, t) {
    const n = this._bindings;
    for (let i = this._targetGroup.nCachedObjects_, r = n.length; i !== r; ++i)
      n[i].setValue(e, t);
  }
  bind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
      e[t].bind();
  }
  unbind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
      e[t].unbind();
  }
}
class je {
  constructor(e, t, n) {
    (this.path = t),
      (this.parsedPath = n || je.parseTrackName(t)),
      (this.node = je.findNode(e, this.parsedPath.nodeName)),
      (this.rootNode = e),
      (this.getValue = this._getValue_unbound),
      (this.setValue = this._setValue_unbound);
  }
  static create(e, t, n) {
    return e && e.isAnimationObjectGroup
      ? new je.Composite(e, t, n)
      : new je(e, t, n);
  }
  static sanitizeNodeName(e) {
    return e.replace(/\s/g, "_").replace(Ag, "");
  }
  static parseTrackName(e) {
    const t = Pg.exec(e);
    if (t === null)
      throw new Error("PropertyBinding: Cannot parse trackName: " + e);
    const n = {
        nodeName: t[2],
        objectName: t[3],
        objectIndex: t[4],
        propertyName: t[5],
        propertyIndex: t[6],
      },
      i = n.nodeName && n.nodeName.lastIndexOf(".");
    if (i !== void 0 && i !== -1) {
      const r = n.nodeName.substring(i + 1);
      Dg.indexOf(r) !== -1 &&
        ((n.nodeName = n.nodeName.substring(0, i)), (n.objectName = r));
    }
    if (n.propertyName === null || n.propertyName.length === 0)
      throw new Error(
        "PropertyBinding: can not parse propertyName from trackName: " + e
      );
    return n;
  }
  static findNode(e, t) {
    if (
      t === void 0 ||
      t === "" ||
      t === "." ||
      t === -1 ||
      t === e.name ||
      t === e.uuid
    )
      return e;
    if (e.skeleton) {
      const n = e.skeleton.getBoneByName(t);
      if (n !== void 0) return n;
    }
    if (e.children) {
      const n = function (r) {
          for (let a = 0; a < r.length; a++) {
            const o = r[a];
            if (o.name === t || o.uuid === t) return o;
            const l = n(o.children);
            if (l) return l;
          }
          return null;
        },
        i = n(e.children);
      if (i) return i;
    }
    return null;
  }
  _getValue_unavailable() {}
  _setValue_unavailable() {}
  _getValue_direct(e, t) {
    e[t] = this.targetObject[this.propertyName];
  }
  _getValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i) e[t++] = n[i];
  }
  _getValue_arrayElement(e, t) {
    e[t] = this.resolvedProperty[this.propertyIndex];
  }
  _getValue_toArray(e, t) {
    this.resolvedProperty.toArray(e, t);
  }
  _setValue_direct(e, t) {
    this.targetObject[this.propertyName] = e[t];
  }
  _setValue_direct_setNeedsUpdate(e, t) {
    (this.targetObject[this.propertyName] = e[t]),
      (this.targetObject.needsUpdate = !0);
  }
  _setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
    (this.targetObject[this.propertyName] = e[t]),
      (this.targetObject.matrixWorldNeedsUpdate = !0);
  }
  _setValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i) n[i] = e[t++];
  }
  _setValue_array_setNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i) n[i] = e[t++];
    this.targetObject.needsUpdate = !0;
  }
  _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i) n[i] = e[t++];
    this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _setValue_arrayElement(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t];
  }
  _setValue_arrayElement_setNeedsUpdate(e, t) {
    (this.resolvedProperty[this.propertyIndex] = e[t]),
      (this.targetObject.needsUpdate = !0);
  }
  _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
    (this.resolvedProperty[this.propertyIndex] = e[t]),
      (this.targetObject.matrixWorldNeedsUpdate = !0);
  }
  _setValue_fromArray(e, t) {
    this.resolvedProperty.fromArray(e, t);
  }
  _setValue_fromArray_setNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t), (this.targetObject.needsUpdate = !0);
  }
  _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t),
      (this.targetObject.matrixWorldNeedsUpdate = !0);
  }
  _getValue_unbound(e, t) {
    this.bind(), this.getValue(e, t);
  }
  _setValue_unbound(e, t) {
    this.bind(), this.setValue(e, t);
  }
  bind() {
    let e = this.node;
    const t = this.parsedPath,
      n = t.objectName,
      i = t.propertyName;
    let r = t.propertyIndex;
    if (
      (e || ((e = je.findNode(this.rootNode, t.nodeName)), (this.node = e)),
      (this.getValue = this._getValue_unavailable),
      (this.setValue = this._setValue_unavailable),
      !e)
    ) {
      console.warn(
        "THREE.PropertyBinding: No target node found for track: " +
          this.path +
          "."
      );
      return;
    }
    if (n) {
      let c = t.objectIndex;
      switch (n) {
        case "materials":
          if (!e.material) {
            console.error(
              "THREE.PropertyBinding: Can not bind to material as node does not have a material.",
              this
            );
            return;
          }
          if (!e.material.materials) {
            console.error(
              "THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",
              this
            );
            return;
          }
          e = e.material.materials;
          break;
        case "bones":
          if (!e.skeleton) {
            console.error(
              "THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",
              this
            );
            return;
          }
          e = e.skeleton.bones;
          for (let h = 0; h < e.length; h++)
            if (e[h].name === c) {
              c = h;
              break;
            }
          break;
        case "map":
          if ("map" in e) {
            e = e.map;
            break;
          }
          if (!e.material) {
            console.error(
              "THREE.PropertyBinding: Can not bind to material as node does not have a material.",
              this
            );
            return;
          }
          if (!e.material.map) {
            console.error(
              "THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",
              this
            );
            return;
          }
          e = e.material.map;
          break;
        default:
          if (e[n] === void 0) {
            console.error(
              "THREE.PropertyBinding: Can not bind to objectName of node undefined.",
              this
            );
            return;
          }
          e = e[n];
      }
      if (c !== void 0) {
        if (e[c] === void 0) {
          console.error(
            "THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",
            this,
            e
          );
          return;
        }
        e = e[c];
      }
    }
    const a = e[i];
    if (a === void 0) {
      const c = t.nodeName;
      console.error(
        "THREE.PropertyBinding: Trying to update property for track: " +
          c +
          "." +
          i +
          " but it wasn't found.",
        e
      );
      return;
    }
    let o = this.Versioning.None;
    (this.targetObject = e),
      e.needsUpdate !== void 0
        ? (o = this.Versioning.NeedsUpdate)
        : e.matrixWorldNeedsUpdate !== void 0 &&
          (o = this.Versioning.MatrixWorldNeedsUpdate);
    let l = this.BindingType.Direct;
    if (r !== void 0) {
      if (i === "morphTargetInfluences") {
        if (!e.geometry) {
          console.error(
            "THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",
            this
          );
          return;
        }
        if (!e.geometry.morphAttributes) {
          console.error(
            "THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",
            this
          );
          return;
        }
        e.morphTargetDictionary[r] !== void 0 &&
          (r = e.morphTargetDictionary[r]);
      }
      (l = this.BindingType.ArrayElement),
        (this.resolvedProperty = a),
        (this.propertyIndex = r);
    } else
      a.fromArray !== void 0 && a.toArray !== void 0
        ? ((l = this.BindingType.HasFromToArray), (this.resolvedProperty = a))
        : Array.isArray(a)
        ? ((l = this.BindingType.EntireArray), (this.resolvedProperty = a))
        : (this.propertyName = i);
    (this.getValue = this.GetterByBindingType[l]),
      (this.setValue = this.SetterByBindingTypeAndVersioning[l][o]);
  }
  unbind() {
    (this.node = null),
      (this.getValue = this._getValue_unbound),
      (this.setValue = this._setValue_unbound);
  }
}
je.Composite = Ig;
je.prototype.BindingType = {
  Direct: 0,
  EntireArray: 1,
  ArrayElement: 2,
  HasFromToArray: 3,
};
je.prototype.Versioning = {
  None: 0,
  NeedsUpdate: 1,
  MatrixWorldNeedsUpdate: 2,
};
je.prototype.GetterByBindingType = [
  je.prototype._getValue_direct,
  je.prototype._getValue_array,
  je.prototype._getValue_arrayElement,
  je.prototype._getValue_toArray,
];
je.prototype.SetterByBindingTypeAndVersioning = [
  [
    je.prototype._setValue_direct,
    je.prototype._setValue_direct_setNeedsUpdate,
    je.prototype._setValue_direct_setMatrixWorldNeedsUpdate,
  ],
  [
    je.prototype._setValue_array,
    je.prototype._setValue_array_setNeedsUpdate,
    je.prototype._setValue_array_setMatrixWorldNeedsUpdate,
  ],
  [
    je.prototype._setValue_arrayElement,
    je.prototype._setValue_arrayElement_setNeedsUpdate,
    je.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate,
  ],
  [
    je.prototype._setValue_fromArray,
    je.prototype._setValue_fromArray_setNeedsUpdate,
    je.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate,
  ],
];
class _l {
  constructor(e = 1, t = 0, n = 0) {
    return (this.radius = e), (this.phi = t), (this.theta = n), this;
  }
  set(e, t, n) {
    return (this.radius = e), (this.phi = t), (this.theta = n), this;
  }
  copy(e) {
    return (
      (this.radius = e.radius), (this.phi = e.phi), (this.theta = e.theta), this
    );
  }
  makeSafe() {
    return (
      (this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi))), this
    );
  }
  setFromVector3(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  }
  setFromCartesianCoords(e, t, n) {
    return (
      (this.radius = Math.sqrt(e * e + t * t + n * n)),
      this.radius === 0
        ? ((this.theta = 0), (this.phi = 0))
        : ((this.theta = Math.atan2(e, n)),
          (this.phi = Math.acos(mt(t / this.radius, -1, 1)))),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
typeof __THREE_DEVTOOLS__ < "u" &&
  __THREE_DEVTOOLS__.dispatchEvent(
    new CustomEvent("register", { detail: { revision: Jr } })
  );
typeof window < "u" &&
  (window.__THREE__
    ? console.warn("WARNING: Multiple instances of Three.js being imported.")
    : (window.__THREE__ = Jr));
const xl = { type: "change" },
  Dr = { type: "start" },
  vl = { type: "end" },
  Is = new Qi(),
  Ml = new Tn(),
  Ug = Math.cos(70 * kl.DEG2RAD);
class Ng extends Zn {
  constructor(e, t) {
    super(),
      (this.object = e),
      (this.domElement = t),
      (this.domElement.style.touchAction = "none"),
      (this.enabled = !0),
      (this.target = new D()),
      (this.cursor = new D()),
      (this.minDistance = 0),
      (this.maxDistance = 1 / 0),
      (this.minZoom = 0),
      (this.maxZoom = 1 / 0),
      (this.minTargetRadius = 0),
      (this.maxTargetRadius = 1 / 0),
      (this.minPolarAngle = 0),
      (this.maxPolarAngle = Math.PI),
      (this.minAzimuthAngle = -1 / 0),
      (this.maxAzimuthAngle = 1 / 0),
      (this.enableDamping = !1),
      (this.dampingFactor = 0.05),
      (this.enableZoom = !0),
      (this.zoomSpeed = 1),
      (this.enableRotate = !0),
      (this.rotateSpeed = 1),
      (this.enablePan = !0),
      (this.panSpeed = 1),
      (this.screenSpacePanning = !0),
      (this.keyPanSpeed = 7),
      (this.zoomToCursor = !1),
      (this.autoRotate = !1),
      (this.autoRotateSpeed = 2),
      (this.keys = {
        LEFT: "ArrowLeft",
        UP: "ArrowUp",
        RIGHT: "ArrowRight",
        BOTTOM: "ArrowDown",
      }),
      (this.mouseButtons = {
        LEFT: Jn.ROTATE,
        MIDDLE: Jn.DOLLY,
        RIGHT: Jn.PAN,
      }),
      (this.touches = { ONE: Qn.ROTATE, TWO: Qn.DOLLY_PAN }),
      (this.target0 = this.target.clone()),
      (this.position0 = this.object.position.clone()),
      (this.zoom0 = this.object.zoom),
      (this._domElementKeyEvents = null),
      (this.getPolarAngle = function () {
        return o.phi;
      }),
      (this.getAzimuthalAngle = function () {
        return o.theta;
      }),
      (this.getDistance = function () {
        return this.object.position.distanceTo(this.target);
      }),
      (this.listenToKeyEvents = function (R) {
        R.addEventListener("keydown", x), (this._domElementKeyEvents = R);
      }),
      (this.stopListenToKeyEvents = function () {
        this._domElementKeyEvents.removeEventListener("keydown", x),
          (this._domElementKeyEvents = null);
      }),
      (this.saveState = function () {
        n.target0.copy(n.target),
          n.position0.copy(n.object.position),
          (n.zoom0 = n.object.zoom);
      }),
      (this.reset = function () {
        n.target.copy(n.target0),
          n.object.position.copy(n.position0),
          (n.object.zoom = n.zoom0),
          n.object.updateProjectionMatrix(),
          n.dispatchEvent(xl),
          n.update(),
          (r = i.NONE);
      }),
      (this.update = (function () {
        const R = new D(),
          se = new nn().setFromUnitVectors(e.up, new D(0, 1, 0)),
          K = se.clone().invert(),
          ye = new D(),
          ge = new nn(),
          Me = new D(),
          pe = 2 * Math.PI;
        return function (ke = null) {
          const P = n.object.position;
          R.copy(P).sub(n.target),
            R.applyQuaternion(se),
            o.setFromVector3(R),
            n.autoRotate && r === i.NONE && G(v(ke)),
            n.enableDamping
              ? ((o.theta += l.theta * n.dampingFactor),
                (o.phi += l.phi * n.dampingFactor))
              : ((o.theta += l.theta), (o.phi += l.phi));
          let oe = n.minAzimuthAngle,
            Q = n.maxAzimuthAngle;
          isFinite(oe) &&
            isFinite(Q) &&
            (oe < -Math.PI ? (oe += pe) : oe > Math.PI && (oe -= pe),
            Q < -Math.PI ? (Q += pe) : Q > Math.PI && (Q -= pe),
            oe <= Q
              ? (o.theta = Math.max(oe, Math.min(Q, o.theta)))
              : (o.theta =
                  o.theta > (oe + Q) / 2
                    ? Math.max(oe, o.theta)
                    : Math.min(Q, o.theta))),
            (o.phi = Math.max(
              n.minPolarAngle,
              Math.min(n.maxPolarAngle, o.phi)
            )),
            o.makeSafe(),
            n.enableDamping === !0
              ? n.target.addScaledVector(h, n.dampingFactor)
              : n.target.add(h),
            n.target.sub(n.cursor),
            n.target.clampLength(n.minTargetRadius, n.maxTargetRadius),
            n.target.add(n.cursor),
            (n.zoomToCursor && L) || n.object.isOrthographicCamera
              ? (o.radius = Z(o.radius))
              : (o.radius = Z(o.radius * c)),
            R.setFromSpherical(o),
            R.applyQuaternion(K),
            P.copy(n.target).add(R),
            n.object.lookAt(n.target),
            n.enableDamping === !0
              ? ((l.theta *= 1 - n.dampingFactor),
                (l.phi *= 1 - n.dampingFactor),
                h.multiplyScalar(1 - n.dampingFactor))
              : (l.set(0, 0, 0), h.set(0, 0, 0));
          let X = !1;
          if (n.zoomToCursor && L) {
            let ie = null;
            if (n.object.isPerspectiveCamera) {
              const xe = R.length();
              ie = Z(xe * c);
              const Ge = xe - ie;
              n.object.position.addScaledVector(S, Ge),
                n.object.updateMatrixWorld();
            } else if (n.object.isOrthographicCamera) {
              const xe = new D(b.x, b.y, 0);
              xe.unproject(n.object),
                (n.object.zoom = Math.max(
                  n.minZoom,
                  Math.min(n.maxZoom, n.object.zoom / c)
                )),
                n.object.updateProjectionMatrix(),
                (X = !0);
              const Ge = new D(b.x, b.y, 0);
              Ge.unproject(n.object),
                n.object.position.sub(Ge).add(xe),
                n.object.updateMatrixWorld(),
                (ie = R.length());
            } else
              console.warn(
                "WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."
              ),
                (n.zoomToCursor = !1);
            ie !== null &&
              (this.screenSpacePanning
                ? n.target
                    .set(0, 0, -1)
                    .transformDirection(n.object.matrix)
                    .multiplyScalar(ie)
                    .add(n.object.position)
                : (Is.origin.copy(n.object.position),
                  Is.direction
                    .set(0, 0, -1)
                    .transformDirection(n.object.matrix),
                  Math.abs(n.object.up.dot(Is.direction)) < Ug
                    ? e.lookAt(n.target)
                    : (Ml.setFromNormalAndCoplanarPoint(n.object.up, n.target),
                      Is.intersectPlane(Ml, n.target))));
          } else
            n.object.isOrthographicCamera &&
              ((n.object.zoom = Math.max(
                n.minZoom,
                Math.min(n.maxZoom, n.object.zoom / c)
              )),
              n.object.updateProjectionMatrix(),
              (X = !0));
          return (
            (c = 1),
            (L = !1),
            X ||
            ye.distanceToSquared(n.object.position) > a ||
            8 * (1 - ge.dot(n.object.quaternion)) > a ||
            Me.distanceToSquared(n.target) > 0
              ? (n.dispatchEvent(xl),
                ye.copy(n.object.position),
                ge.copy(n.object.quaternion),
                Me.copy(n.target),
                (X = !1),
                !0)
              : !1
          );
        };
      })()),
      (this.dispose = function () {
        n.domElement.removeEventListener("contextmenu", J),
          n.domElement.removeEventListener("pointerdown", Ie),
          n.domElement.removeEventListener("pointercancel", Xe),
          n.domElement.removeEventListener("wheel", A),
          n.domElement.removeEventListener("pointermove", Pe),
          n.domElement.removeEventListener("pointerup", Xe),
          n._domElementKeyEvents !== null &&
            (n._domElementKeyEvents.removeEventListener("keydown", x),
            (n._domElementKeyEvents = null));
      });
    const n = this,
      i = {
        NONE: -1,
        ROTATE: 0,
        DOLLY: 1,
        PAN: 2,
        TOUCH_ROTATE: 3,
        TOUCH_PAN: 4,
        TOUCH_DOLLY_PAN: 5,
        TOUCH_DOLLY_ROTATE: 6,
      };
    let r = i.NONE;
    const a = 1e-6,
      o = new _l(),
      l = new _l();
    let c = 1;
    const h = new D(),
      u = new Re(),
      d = new Re(),
      m = new Re(),
      g = new Re(),
      _ = new Re(),
      p = new Re(),
      f = new Re(),
      y = new Re(),
      M = new Re(),
      S = new D(),
      b = new Re();
    let L = !1;
    const w = [],
      I = {};
    function v(R) {
      return R !== null
        ? ((2 * Math.PI) / 60) * n.autoRotateSpeed * R
        : ((2 * Math.PI) / 60 / 60) * n.autoRotateSpeed;
    }
    function T() {
      return Math.pow(0.95, n.zoomSpeed);
    }
    function G(R) {
      l.theta -= R;
    }
    function j(R) {
      l.phi -= R;
    }
    const $ = (function () {
        const R = new D();
        return function (K, ye) {
          R.setFromMatrixColumn(ye, 0), R.multiplyScalar(-K), h.add(R);
        };
      })(),
      C = (function () {
        const R = new D();
        return function (K, ye) {
          n.screenSpacePanning === !0
            ? R.setFromMatrixColumn(ye, 1)
            : (R.setFromMatrixColumn(ye, 0), R.crossVectors(n.object.up, R)),
            R.multiplyScalar(K),
            h.add(R);
        };
      })(),
      F = (function () {
        const R = new D();
        return function (K, ye) {
          const ge = n.domElement;
          if (n.object.isPerspectiveCamera) {
            const Me = n.object.position;
            R.copy(Me).sub(n.target);
            let pe = R.length();
            (pe *= Math.tan(((n.object.fov / 2) * Math.PI) / 180)),
              $((2 * K * pe) / ge.clientHeight, n.object.matrix),
              C((2 * ye * pe) / ge.clientHeight, n.object.matrix);
          } else
            n.object.isOrthographicCamera
              ? ($(
                  (K * (n.object.right - n.object.left)) /
                    n.object.zoom /
                    ge.clientWidth,
                  n.object.matrix
                ),
                C(
                  (ye * (n.object.top - n.object.bottom)) /
                    n.object.zoom /
                    ge.clientHeight,
                  n.object.matrix
                ))
              : (console.warn(
                  "WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."
                ),
                (n.enablePan = !1));
        };
      })();
    function V(R) {
      n.object.isPerspectiveCamera || n.object.isOrthographicCamera
        ? (c /= R)
        : (console.warn(
            "WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."
          ),
          (n.enableZoom = !1));
    }
    function Y(R) {
      n.object.isPerspectiveCamera || n.object.isOrthographicCamera
        ? (c *= R)
        : (console.warn(
            "WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."
          ),
          (n.enableZoom = !1));
    }
    function ee(R) {
      if (!n.zoomToCursor) return;
      L = !0;
      const se = n.domElement.getBoundingClientRect(),
        K = R.clientX - se.left,
        ye = R.clientY - se.top,
        ge = se.width,
        Me = se.height;
      (b.x = (K / ge) * 2 - 1),
        (b.y = -(ye / Me) * 2 + 1),
        S.set(b.x, b.y, 1)
          .unproject(n.object)
          .sub(n.object.position)
          .normalize();
    }
    function Z(R) {
      return Math.max(n.minDistance, Math.min(n.maxDistance, R));
    }
    function q(R) {
      u.set(R.clientX, R.clientY);
    }
    function U(R) {
      ee(R), f.set(R.clientX, R.clientY);
    }
    function H(R) {
      g.set(R.clientX, R.clientY);
    }
    function ae(R) {
      d.set(R.clientX, R.clientY),
        m.subVectors(d, u).multiplyScalar(n.rotateSpeed);
      const se = n.domElement;
      G((2 * Math.PI * m.x) / se.clientHeight),
        j((2 * Math.PI * m.y) / se.clientHeight),
        u.copy(d),
        n.update();
    }
    function he(R) {
      y.set(R.clientX, R.clientY),
        M.subVectors(y, f),
        M.y > 0 ? V(T()) : M.y < 0 && Y(T()),
        f.copy(y),
        n.update();
    }
    function fe(R) {
      _.set(R.clientX, R.clientY),
        p.subVectors(_, g).multiplyScalar(n.panSpeed),
        F(p.x, p.y),
        g.copy(_),
        n.update();
    }
    function Se(R) {
      ee(R), R.deltaY < 0 ? Y(T()) : R.deltaY > 0 && V(T()), n.update();
    }
    function ze(R) {
      let se = !1;
      switch (R.code) {
        case n.keys.UP:
          R.ctrlKey || R.metaKey || R.shiftKey
            ? j((2 * Math.PI * n.rotateSpeed) / n.domElement.clientHeight)
            : F(0, n.keyPanSpeed),
            (se = !0);
          break;
        case n.keys.BOTTOM:
          R.ctrlKey || R.metaKey || R.shiftKey
            ? j((-2 * Math.PI * n.rotateSpeed) / n.domElement.clientHeight)
            : F(0, -n.keyPanSpeed),
            (se = !0);
          break;
        case n.keys.LEFT:
          R.ctrlKey || R.metaKey || R.shiftKey
            ? G((2 * Math.PI * n.rotateSpeed) / n.domElement.clientHeight)
            : F(n.keyPanSpeed, 0),
            (se = !0);
          break;
        case n.keys.RIGHT:
          R.ctrlKey || R.metaKey || R.shiftKey
            ? G((-2 * Math.PI * n.rotateSpeed) / n.domElement.clientHeight)
            : F(-n.keyPanSpeed, 0),
            (se = !0);
          break;
      }
      se && (R.preventDefault(), n.update());
    }
    function Te() {
      if (w.length === 1) u.set(w[0].pageX, w[0].pageY);
      else {
        const R = 0.5 * (w[0].pageX + w[1].pageX),
          se = 0.5 * (w[0].pageY + w[1].pageY);
        u.set(R, se);
      }
    }
    function Le() {
      if (w.length === 1) g.set(w[0].pageX, w[0].pageY);
      else {
        const R = 0.5 * (w[0].pageX + w[1].pageX),
          se = 0.5 * (w[0].pageY + w[1].pageY);
        g.set(R, se);
      }
    }
    function Ze() {
      const R = w[0].pageX - w[1].pageX,
        se = w[0].pageY - w[1].pageY,
        K = Math.sqrt(R * R + se * se);
      f.set(0, K);
    }
    function Ne() {
      n.enableZoom && Ze(), n.enablePan && Le();
    }
    function O() {
      n.enableZoom && Ze(), n.enableRotate && Te();
    }
    function xt(R) {
      if (w.length == 1) d.set(R.pageX, R.pageY);
      else {
        const K = ce(R),
          ye = 0.5 * (R.pageX + K.x),
          ge = 0.5 * (R.pageY + K.y);
        d.set(ye, ge);
      }
      m.subVectors(d, u).multiplyScalar(n.rotateSpeed);
      const se = n.domElement;
      G((2 * Math.PI * m.x) / se.clientHeight),
        j((2 * Math.PI * m.y) / se.clientHeight),
        u.copy(d);
    }
    function ve(R) {
      if (w.length === 1) _.set(R.pageX, R.pageY);
      else {
        const se = ce(R),
          K = 0.5 * (R.pageX + se.x),
          ye = 0.5 * (R.pageY + se.y);
        _.set(K, ye);
      }
      p.subVectors(_, g).multiplyScalar(n.panSpeed), F(p.x, p.y), g.copy(_);
    }
    function Ae(R) {
      const se = ce(R),
        K = R.pageX - se.x,
        ye = R.pageY - se.y,
        ge = Math.sqrt(K * K + ye * ye);
      y.set(0, ge),
        M.set(0, Math.pow(y.y / f.y, n.zoomSpeed)),
        V(M.y),
        f.copy(y);
    }
    function be(R) {
      n.enableZoom && Ae(R), n.enablePan && ve(R);
    }
    function Qe(R) {
      n.enableZoom && Ae(R), n.enableRotate && xt(R);
    }
    function Ie(R) {
      n.enabled !== !1 &&
        (w.length === 0 &&
          (n.domElement.setPointerCapture(R.pointerId),
          n.domElement.addEventListener("pointermove", Pe),
          n.domElement.addEventListener("pointerup", Xe)),
        ne(R),
        R.pointerType === "touch" ? B(R) : st(R));
    }
    function Pe(R) {
      n.enabled !== !1 && (R.pointerType === "touch" ? te(R) : ut(R));
    }
    function Xe(R) {
      me(R),
        w.length === 0 &&
          (n.domElement.releasePointerCapture(R.pointerId),
          n.domElement.removeEventListener("pointermove", Pe),
          n.domElement.removeEventListener("pointerup", Xe)),
        n.dispatchEvent(vl),
        (r = i.NONE);
    }
    function st(R) {
      let se;
      switch (R.button) {
        case 0:
          se = n.mouseButtons.LEFT;
          break;
        case 1:
          se = n.mouseButtons.MIDDLE;
          break;
        case 2:
          se = n.mouseButtons.RIGHT;
          break;
        default:
          se = -1;
      }
      switch (se) {
        case Jn.DOLLY:
          if (n.enableZoom === !1) return;
          U(R), (r = i.DOLLY);
          break;
        case Jn.ROTATE:
          if (R.ctrlKey || R.metaKey || R.shiftKey) {
            if (n.enablePan === !1) return;
            H(R), (r = i.PAN);
          } else {
            if (n.enableRotate === !1) return;
            q(R), (r = i.ROTATE);
          }
          break;
        case Jn.PAN:
          if (R.ctrlKey || R.metaKey || R.shiftKey) {
            if (n.enableRotate === !1) return;
            q(R), (r = i.ROTATE);
          } else {
            if (n.enablePan === !1) return;
            H(R), (r = i.PAN);
          }
          break;
        default:
          r = i.NONE;
      }
      r !== i.NONE && n.dispatchEvent(Dr);
    }
    function ut(R) {
      switch (r) {
        case i.ROTATE:
          if (n.enableRotate === !1) return;
          ae(R);
          break;
        case i.DOLLY:
          if (n.enableZoom === !1) return;
          he(R);
          break;
        case i.PAN:
          if (n.enablePan === !1) return;
          fe(R);
          break;
      }
    }
    function A(R) {
      n.enabled === !1 ||
        n.enableZoom === !1 ||
        r !== i.NONE ||
        (R.preventDefault(), n.dispatchEvent(Dr), Se(R), n.dispatchEvent(vl));
    }
    function x(R) {
      n.enabled === !1 || n.enablePan === !1 || ze(R);
    }
    function B(R) {
      switch ((re(R), w.length)) {
        case 1:
          switch (n.touches.ONE) {
            case Qn.ROTATE:
              if (n.enableRotate === !1) return;
              Te(), (r = i.TOUCH_ROTATE);
              break;
            case Qn.PAN:
              if (n.enablePan === !1) return;
              Le(), (r = i.TOUCH_PAN);
              break;
            default:
              r = i.NONE;
          }
          break;
        case 2:
          switch (n.touches.TWO) {
            case Qn.DOLLY_PAN:
              if (n.enableZoom === !1 && n.enablePan === !1) return;
              Ne(), (r = i.TOUCH_DOLLY_PAN);
              break;
            case Qn.DOLLY_ROTATE:
              if (n.enableZoom === !1 && n.enableRotate === !1) return;
              O(), (r = i.TOUCH_DOLLY_ROTATE);
              break;
            default:
              r = i.NONE;
          }
          break;
        default:
          r = i.NONE;
      }
      r !== i.NONE && n.dispatchEvent(Dr);
    }
    function te(R) {
      switch ((re(R), r)) {
        case i.TOUCH_ROTATE:
          if (n.enableRotate === !1) return;
          xt(R), n.update();
          break;
        case i.TOUCH_PAN:
          if (n.enablePan === !1) return;
          ve(R), n.update();
          break;
        case i.TOUCH_DOLLY_PAN:
          if (n.enableZoom === !1 && n.enablePan === !1) return;
          be(R), n.update();
          break;
        case i.TOUCH_DOLLY_ROTATE:
          if (n.enableZoom === !1 && n.enableRotate === !1) return;
          Qe(R), n.update();
          break;
        default:
          r = i.NONE;
      }
    }
    function J(R) {
      n.enabled !== !1 && R.preventDefault();
    }
    function ne(R) {
      w.push(R);
    }
    function me(R) {
      delete I[R.pointerId];
      for (let se = 0; se < w.length; se++)
        if (w[se].pointerId == R.pointerId) {
          w.splice(se, 1);
          return;
        }
    }
    function re(R) {
      let se = I[R.pointerId];
      se === void 0 && ((se = new Re()), (I[R.pointerId] = se)),
        se.set(R.pageX, R.pageY);
    }
    function ce(R) {
      const se = R.pointerId === w[0].pointerId ? w[1] : w[0];
      return I[se.pointerId];
    }
    n.domElement.addEventListener("contextmenu", J),
      n.domElement.addEventListener("pointerdown", Ie),
      n.domElement.addEventListener("pointercancel", Xe),
      n.domElement.addEventListener("wheel", A, { passive: !1 }),
      this.update();
  }
}
/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.19.2
 * @author George Michael Brower
 * @license MIT
 */ class tn {
  constructor(e, t, n, i, r = "div") {
    (this.parent = e),
      (this.object = t),
      (this.property = n),
      (this._disabled = !1),
      (this._hidden = !1),
      (this.initialValue = this.getValue()),
      (this.domElement = document.createElement(r)),
      this.domElement.classList.add("controller"),
      this.domElement.classList.add(i),
      (this.$name = document.createElement("div")),
      this.$name.classList.add("name"),
      (tn.nextNameID = tn.nextNameID || 0),
      (this.$name.id = `lil-gui-name-${++tn.nextNameID}`),
      (this.$widget = document.createElement("div")),
      this.$widget.classList.add("widget"),
      (this.$disable = this.$widget),
      this.domElement.appendChild(this.$name),
      this.domElement.appendChild(this.$widget),
      this.domElement.addEventListener("keydown", (a) => a.stopPropagation()),
      this.domElement.addEventListener("keyup", (a) => a.stopPropagation()),
      this.parent.children.push(this),
      this.parent.controllers.push(this),
      this.parent.$children.appendChild(this.domElement),
      (this._listenCallback = this._listenCallback.bind(this)),
      this.name(n);
  }
  name(e) {
    return (this._name = e), (this.$name.textContent = e), this;
  }
  onChange(e) {
    return (this._onChange = e), this;
  }
  _callOnChange() {
    this.parent._callOnChange(this),
      this._onChange !== void 0 && this._onChange.call(this, this.getValue()),
      (this._changed = !0);
  }
  onFinishChange(e) {
    return (this._onFinishChange = e), this;
  }
  _callOnFinishChange() {
    this._changed &&
      (this.parent._callOnFinishChange(this),
      this._onFinishChange !== void 0 &&
        this._onFinishChange.call(this, this.getValue())),
      (this._changed = !1);
  }
  reset() {
    return this.setValue(this.initialValue), this._callOnFinishChange(), this;
  }
  enable(e = !0) {
    return this.disable(!e);
  }
  disable(e = !0) {
    return e === this._disabled
      ? this
      : ((this._disabled = e),
        this.domElement.classList.toggle("disabled", e),
        this.$disable.toggleAttribute("disabled", e),
        this);
  }
  show(e = !0) {
    return (
      (this._hidden = !e),
      (this.domElement.style.display = this._hidden ? "none" : ""),
      this
    );
  }
  hide() {
    return this.show(!1);
  }
  options(e) {
    const t = this.parent.add(this.object, this.property, e);
    return t.name(this._name), this.destroy(), t;
  }
  min(e) {
    return this;
  }
  max(e) {
    return this;
  }
  step(e) {
    return this;
  }
  decimals(e) {
    return this;
  }
  listen(e = !0) {
    return (
      (this._listening = e),
      this._listenCallbackID !== void 0 &&
        (cancelAnimationFrame(this._listenCallbackID),
        (this._listenCallbackID = void 0)),
      this._listening && this._listenCallback(),
      this
    );
  }
  _listenCallback() {
    this._listenCallbackID = requestAnimationFrame(this._listenCallback);
    const e = this.save();
    e !== this._listenPrevValue && this.updateDisplay(),
      (this._listenPrevValue = e);
  }
  getValue() {
    return this.object[this.property];
  }
  setValue(e) {
    return (
      this.getValue() !== e &&
        ((this.object[this.property] = e),
        this._callOnChange(),
        this.updateDisplay()),
      this
    );
  }
  updateDisplay() {
    return this;
  }
  load(e) {
    return this.setValue(e), this._callOnFinishChange(), this;
  }
  save() {
    return this.getValue();
  }
  destroy() {
    this.listen(!1),
      this.parent.children.splice(this.parent.children.indexOf(this), 1),
      this.parent.controllers.splice(this.parent.controllers.indexOf(this), 1),
      this.parent.$children.removeChild(this.domElement);
  }
}
class Fg extends tn {
  constructor(e, t, n) {
    super(e, t, n, "boolean", "label"),
      (this.$input = document.createElement("input")),
      this.$input.setAttribute("type", "checkbox"),
      this.$input.setAttribute("aria-labelledby", this.$name.id),
      this.$widget.appendChild(this.$input),
      this.$input.addEventListener("change", () => {
        this.setValue(this.$input.checked), this._callOnFinishChange();
      }),
      (this.$disable = this.$input),
      this.updateDisplay();
  }
  updateDisplay() {
    return (this.$input.checked = this.getValue()), this;
  }
}
function $r(s) {
  let e, t;
  return (
    (e = s.match(/(#|0x)?([a-f0-9]{6})/i))
      ? (t = e[2])
      : (e = s.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))
      ? (t =
          parseInt(e[1]).toString(16).padStart(2, 0) +
          parseInt(e[2]).toString(16).padStart(2, 0) +
          parseInt(e[3]).toString(16).padStart(2, 0))
      : (e = s.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i)) &&
        (t = e[1] + e[1] + e[2] + e[2] + e[3] + e[3]),
    t ? "#" + t : !1
  );
}
const Og = {
    isPrimitive: !0,
    match: (s) => typeof s == "string",
    fromHexString: $r,
    toHexString: $r,
  },
  Zi = {
    isPrimitive: !0,
    match: (s) => typeof s == "number",
    fromHexString: (s) => parseInt(s.substring(1), 16),
    toHexString: (s) => "#" + s.toString(16).padStart(6, 0),
  },
  Bg = {
    isPrimitive: !1,
    match: (s) => Array.isArray(s),
    fromHexString(s, e, t = 1) {
      const n = Zi.fromHexString(s);
      (e[0] = (((n >> 16) & 255) / 255) * t),
        (e[1] = (((n >> 8) & 255) / 255) * t),
        (e[2] = ((n & 255) / 255) * t);
    },
    toHexString([s, e, t], n = 1) {
      n = 255 / n;
      const i = ((s * n) << 16) ^ ((e * n) << 8) ^ ((t * n) << 0);
      return Zi.toHexString(i);
    },
  },
  Hg = {
    isPrimitive: !1,
    match: (s) => Object(s) === s,
    fromHexString(s, e, t = 1) {
      const n = Zi.fromHexString(s);
      (e.r = (((n >> 16) & 255) / 255) * t),
        (e.g = (((n >> 8) & 255) / 255) * t),
        (e.b = ((n & 255) / 255) * t);
    },
    toHexString({ r: s, g: e, b: t }, n = 1) {
      n = 255 / n;
      const i = ((s * n) << 16) ^ ((e * n) << 8) ^ ((t * n) << 0);
      return Zi.toHexString(i);
    },
  },
  zg = [Og, Zi, Bg, Hg];
function kg(s) {
  return zg.find((e) => e.match(s));
}
class Gg extends tn {
  constructor(e, t, n, i) {
    super(e, t, n, "color"),
      (this.$input = document.createElement("input")),
      this.$input.setAttribute("type", "color"),
      this.$input.setAttribute("tabindex", -1),
      this.$input.setAttribute("aria-labelledby", this.$name.id),
      (this.$text = document.createElement("input")),
      this.$text.setAttribute("type", "text"),
      this.$text.setAttribute("spellcheck", "false"),
      this.$text.setAttribute("aria-labelledby", this.$name.id),
      (this.$display = document.createElement("div")),
      this.$display.classList.add("display"),
      this.$display.appendChild(this.$input),
      this.$widget.appendChild(this.$display),
      this.$widget.appendChild(this.$text),
      (this._format = kg(this.initialValue)),
      (this._rgbScale = i),
      (this._initialValueHexString = this.save()),
      (this._textFocused = !1),
      this.$input.addEventListener("input", () => {
        this._setValueFromHexString(this.$input.value);
      }),
      this.$input.addEventListener("blur", () => {
        this._callOnFinishChange();
      }),
      this.$text.addEventListener("input", () => {
        const r = $r(this.$text.value);
        r && this._setValueFromHexString(r);
      }),
      this.$text.addEventListener("focus", () => {
        (this._textFocused = !0), this.$text.select();
      }),
      this.$text.addEventListener("blur", () => {
        (this._textFocused = !1),
          this.updateDisplay(),
          this._callOnFinishChange();
      }),
      (this.$disable = this.$text),
      this.updateDisplay();
  }
  reset() {
    return this._setValueFromHexString(this._initialValueHexString), this;
  }
  _setValueFromHexString(e) {
    if (this._format.isPrimitive) {
      const t = this._format.fromHexString(e);
      this.setValue(t);
    } else
      this._format.fromHexString(e, this.getValue(), this._rgbScale),
        this._callOnChange(),
        this.updateDisplay();
  }
  save() {
    return this._format.toHexString(this.getValue(), this._rgbScale);
  }
  load(e) {
    return this._setValueFromHexString(e), this._callOnFinishChange(), this;
  }
  updateDisplay() {
    return (
      (this.$input.value = this._format.toHexString(
        this.getValue(),
        this._rgbScale
      )),
      this._textFocused || (this.$text.value = this.$input.value.substring(1)),
      (this.$display.style.backgroundColor = this.$input.value),
      this
    );
  }
}
class Ir extends tn {
  constructor(e, t, n) {
    super(e, t, n, "function"),
      (this.$button = document.createElement("button")),
      this.$button.appendChild(this.$name),
      this.$widget.appendChild(this.$button),
      this.$button.addEventListener("click", (i) => {
        i.preventDefault(),
          this.getValue().call(this.object),
          this._callOnChange();
      }),
      this.$button.addEventListener("touchstart", () => {}, { passive: !0 }),
      (this.$disable = this.$button);
  }
}
class Vg extends tn {
  constructor(e, t, n, i, r, a) {
    super(e, t, n, "number"), this._initInput(), this.min(i), this.max(r);
    const o = a !== void 0;
    this.step(o ? a : this._getImplicitStep(), o), this.updateDisplay();
  }
  decimals(e) {
    return (this._decimals = e), this.updateDisplay(), this;
  }
  min(e) {
    return (this._min = e), this._onUpdateMinMax(), this;
  }
  max(e) {
    return (this._max = e), this._onUpdateMinMax(), this;
  }
  step(e, t = !0) {
    return (this._step = e), (this._stepExplicit = t), this;
  }
  updateDisplay() {
    const e = this.getValue();
    if (this._hasSlider) {
      let t = (e - this._min) / (this._max - this._min);
      (t = Math.max(0, Math.min(t, 1))),
        (this.$fill.style.width = t * 100 + "%");
    }
    return (
      this._inputFocused ||
        (this.$input.value =
          this._decimals === void 0 ? e : e.toFixed(this._decimals)),
      this
    );
  }
  _initInput() {
    (this.$input = document.createElement("input")),
      this.$input.setAttribute("type", "text"),
      this.$input.setAttribute("aria-labelledby", this.$name.id),
      window.matchMedia("(pointer: coarse)").matches &&
        (this.$input.setAttribute("type", "number"),
        this.$input.setAttribute("step", "any")),
      this.$widget.appendChild(this.$input),
      (this.$disable = this.$input);
    const t = () => {
        let y = parseFloat(this.$input.value);
        isNaN(y) ||
          (this._stepExplicit && (y = this._snap(y)),
          this.setValue(this._clamp(y)));
      },
      n = (y) => {
        const M = parseFloat(this.$input.value);
        isNaN(M) ||
          (this._snapClampSetValue(M + y),
          (this.$input.value = this.getValue()));
      },
      i = (y) => {
        y.key === "Enter" && this.$input.blur(),
          y.code === "ArrowUp" &&
            (y.preventDefault(), n(this._step * this._arrowKeyMultiplier(y))),
          y.code === "ArrowDown" &&
            (y.preventDefault(),
            n(this._step * this._arrowKeyMultiplier(y) * -1));
      },
      r = (y) => {
        this._inputFocused &&
          (y.preventDefault(), n(this._step * this._normalizeMouseWheel(y)));
      };
    let a = !1,
      o,
      l,
      c,
      h,
      u;
    const d = 5,
      m = (y) => {
        (o = y.clientX),
          (l = c = y.clientY),
          (a = !0),
          (h = this.getValue()),
          (u = 0),
          window.addEventListener("mousemove", g),
          window.addEventListener("mouseup", _);
      },
      g = (y) => {
        if (a) {
          const M = y.clientX - o,
            S = y.clientY - l;
          Math.abs(S) > d
            ? (y.preventDefault(),
              this.$input.blur(),
              (a = !1),
              this._setDraggingStyle(!0, "vertical"))
            : Math.abs(M) > d && _();
        }
        if (!a) {
          const M = y.clientY - c;
          (u -= M * this._step * this._arrowKeyMultiplier(y)),
            h + u > this._max
              ? (u = this._max - h)
              : h + u < this._min && (u = this._min - h),
            this._snapClampSetValue(h + u);
        }
        c = y.clientY;
      },
      _ = () => {
        this._setDraggingStyle(!1, "vertical"),
          this._callOnFinishChange(),
          window.removeEventListener("mousemove", g),
          window.removeEventListener("mouseup", _);
      },
      p = () => {
        this._inputFocused = !0;
      },
      f = () => {
        (this._inputFocused = !1),
          this.updateDisplay(),
          this._callOnFinishChange();
      };
    this.$input.addEventListener("input", t),
      this.$input.addEventListener("keydown", i),
      this.$input.addEventListener("wheel", r, { passive: !1 }),
      this.$input.addEventListener("mousedown", m),
      this.$input.addEventListener("focus", p),
      this.$input.addEventListener("blur", f);
  }
  _initSlider() {
    (this._hasSlider = !0),
      (this.$slider = document.createElement("div")),
      this.$slider.classList.add("slider"),
      (this.$fill = document.createElement("div")),
      this.$fill.classList.add("fill"),
      this.$slider.appendChild(this.$fill),
      this.$widget.insertBefore(this.$slider, this.$input),
      this.domElement.classList.add("hasSlider");
    const e = (f, y, M, S, b) => ((f - y) / (M - y)) * (b - S) + S,
      t = (f) => {
        const y = this.$slider.getBoundingClientRect();
        let M = e(f, y.left, y.right, this._min, this._max);
        this._snapClampSetValue(M);
      },
      n = (f) => {
        this._setDraggingStyle(!0),
          t(f.clientX),
          window.addEventListener("mousemove", i),
          window.addEventListener("mouseup", r);
      },
      i = (f) => {
        t(f.clientX);
      },
      r = () => {
        this._callOnFinishChange(),
          this._setDraggingStyle(!1),
          window.removeEventListener("mousemove", i),
          window.removeEventListener("mouseup", r);
      };
    let a = !1,
      o,
      l;
    const c = (f) => {
        f.preventDefault(),
          this._setDraggingStyle(!0),
          t(f.touches[0].clientX),
          (a = !1);
      },
      h = (f) => {
        f.touches.length > 1 ||
          (this._hasScrollBar
            ? ((o = f.touches[0].clientX), (l = f.touches[0].clientY), (a = !0))
            : c(f),
          window.addEventListener("touchmove", u, { passive: !1 }),
          window.addEventListener("touchend", d));
      },
      u = (f) => {
        if (a) {
          const y = f.touches[0].clientX - o,
            M = f.touches[0].clientY - l;
          Math.abs(y) > Math.abs(M)
            ? c(f)
            : (window.removeEventListener("touchmove", u),
              window.removeEventListener("touchend", d));
        } else f.preventDefault(), t(f.touches[0].clientX);
      },
      d = () => {
        this._callOnFinishChange(),
          this._setDraggingStyle(!1),
          window.removeEventListener("touchmove", u),
          window.removeEventListener("touchend", d);
      },
      m = this._callOnFinishChange.bind(this),
      g = 400;
    let _;
    const p = (f) => {
      if (Math.abs(f.deltaX) < Math.abs(f.deltaY) && this._hasScrollBar) return;
      f.preventDefault();
      const M = this._normalizeMouseWheel(f) * this._step;
      this._snapClampSetValue(this.getValue() + M),
        (this.$input.value = this.getValue()),
        clearTimeout(_),
        (_ = setTimeout(m, g));
    };
    this.$slider.addEventListener("mousedown", n),
      this.$slider.addEventListener("touchstart", h, { passive: !1 }),
      this.$slider.addEventListener("wheel", p, { passive: !1 });
  }
  _setDraggingStyle(e, t = "horizontal") {
    this.$slider && this.$slider.classList.toggle("active", e),
      document.body.classList.toggle("lil-gui-dragging", e),
      document.body.classList.toggle(`lil-gui-${t}`, e);
  }
  _getImplicitStep() {
    return this._hasMin && this._hasMax ? (this._max - this._min) / 1e3 : 0.1;
  }
  _onUpdateMinMax() {
    !this._hasSlider &&
      this._hasMin &&
      this._hasMax &&
      (this._stepExplicit || this.step(this._getImplicitStep(), !1),
      this._initSlider(),
      this.updateDisplay());
  }
  _normalizeMouseWheel(e) {
    let { deltaX: t, deltaY: n } = e;
    return (
      Math.floor(e.deltaY) !== e.deltaY &&
        e.wheelDelta &&
        ((t = 0),
        (n = -e.wheelDelta / 120),
        (n *= this._stepExplicit ? 1 : 10)),
      t + -n
    );
  }
  _arrowKeyMultiplier(e) {
    let t = this._stepExplicit ? 1 : 10;
    return e.shiftKey ? (t *= 10) : e.altKey && (t /= 10), t;
  }
  _snap(e) {
    const t = Math.round(e / this._step) * this._step;
    return parseFloat(t.toPrecision(15));
  }
  _clamp(e) {
    return (
      e < this._min && (e = this._min), e > this._max && (e = this._max), e
    );
  }
  _snapClampSetValue(e) {
    this.setValue(this._clamp(this._snap(e)));
  }
  get _hasScrollBar() {
    const e = this.parent.root.$children;
    return e.scrollHeight > e.clientHeight;
  }
  get _hasMin() {
    return this._min !== void 0;
  }
  get _hasMax() {
    return this._max !== void 0;
  }
}
class Wg extends tn {
  constructor(e, t, n, i) {
    super(e, t, n, "option"),
      (this.$select = document.createElement("select")),
      this.$select.setAttribute("aria-labelledby", this.$name.id),
      (this.$display = document.createElement("div")),
      this.$display.classList.add("display"),
      this.$select.addEventListener("change", () => {
        this.setValue(this._values[this.$select.selectedIndex]),
          this._callOnFinishChange();
      }),
      this.$select.addEventListener("focus", () => {
        this.$display.classList.add("focus");
      }),
      this.$select.addEventListener("blur", () => {
        this.$display.classList.remove("focus");
      }),
      this.$widget.appendChild(this.$select),
      this.$widget.appendChild(this.$display),
      (this.$disable = this.$select),
      this.options(i);
  }
  options(e) {
    return (
      (this._values = Array.isArray(e) ? e : Object.values(e)),
      (this._names = Array.isArray(e) ? e : Object.keys(e)),
      this.$select.replaceChildren(),
      this._names.forEach((t) => {
        const n = document.createElement("option");
        (n.textContent = t), this.$select.appendChild(n);
      }),
      this.updateDisplay(),
      this
    );
  }
  updateDisplay() {
    const e = this.getValue(),
      t = this._values.indexOf(e);
    return (
      (this.$select.selectedIndex = t),
      (this.$display.textContent = t === -1 ? e : this._names[t]),
      this
    );
  }
}
class Xg extends tn {
  constructor(e, t, n) {
    super(e, t, n, "string"),
      (this.$input = document.createElement("input")),
      this.$input.setAttribute("type", "text"),
      this.$input.setAttribute("spellcheck", "false"),
      this.$input.setAttribute("aria-labelledby", this.$name.id),
      this.$input.addEventListener("input", () => {
        this.setValue(this.$input.value);
      }),
      this.$input.addEventListener("keydown", (i) => {
        i.code === "Enter" && this.$input.blur();
      }),
      this.$input.addEventListener("blur", () => {
        this._callOnFinishChange();
      }),
      this.$widget.appendChild(this.$input),
      (this.$disable = this.$input),
      this.updateDisplay();
  }
  updateDisplay() {
    return (this.$input.value = this.getValue()), this;
  }
}
const Yg = `.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: none;
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
  }
  .lil-gui button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;
function jg(s) {
  const e = document.createElement("style");
  e.innerHTML = s;
  const t = document.querySelector("head link[rel=stylesheet], head style");
  t ? document.head.insertBefore(e, t) : document.head.appendChild(e);
}
let yl = !1;
class _a {
  constructor({
    parent: e,
    autoPlace: t = e === void 0,
    container: n,
    width: i,
    title: r = "Controls",
    closeFolders: a = !1,
    injectStyles: o = !0,
    touchStyles: l = !0,
  } = {}) {
    if (
      ((this.parent = e),
      (this.root = e ? e.root : this),
      (this.children = []),
      (this.controllers = []),
      (this.folders = []),
      (this._closed = !1),
      (this._hidden = !1),
      (this.domElement = document.createElement("div")),
      this.domElement.classList.add("lil-gui"),
      (this.$title = document.createElement("div")),
      this.$title.classList.add("title"),
      this.$title.setAttribute("role", "button"),
      this.$title.setAttribute("aria-expanded", !0),
      this.$title.setAttribute("tabindex", 0),
      this.$title.addEventListener("click", () =>
        this.openAnimated(this._closed)
      ),
      this.$title.addEventListener("keydown", (c) => {
        (c.code === "Enter" || c.code === "Space") &&
          (c.preventDefault(), this.$title.click());
      }),
      this.$title.addEventListener("touchstart", () => {}, { passive: !0 }),
      (this.$children = document.createElement("div")),
      this.$children.classList.add("children"),
      this.domElement.appendChild(this.$title),
      this.domElement.appendChild(this.$children),
      this.title(r),
      this.parent)
    ) {
      this.parent.children.push(this),
        this.parent.folders.push(this),
        this.parent.$children.appendChild(this.domElement);
      return;
    }
    this.domElement.classList.add("root"),
      l && this.domElement.classList.add("allow-touch-styles"),
      !yl && o && (jg(Yg), (yl = !0)),
      n
        ? n.appendChild(this.domElement)
        : t &&
          (this.domElement.classList.add("autoPlace"),
          document.body.appendChild(this.domElement)),
      i && this.domElement.style.setProperty("--width", i + "px"),
      (this._closeFolders = a);
  }
  add(e, t, n, i, r) {
    if (Object(n) === n) return new Wg(this, e, t, n);
    const a = e[t];
    switch (typeof a) {
      case "number":
        return new Vg(this, e, t, n, i, r);
      case "boolean":
        return new Fg(this, e, t);
      case "string":
        return new Xg(this, e, t);
      case "function":
        return new Ir(this, e, t);
    }
    console.error(
      `gui.add failed
	property:`,
      t,
      `
	object:`,
      e,
      `
	value:`,
      a
    );
  }
  addColor(e, t, n = 1) {
    return new Gg(this, e, t, n);
  }
  addFolder(e) {
    const t = new _a({ parent: this, title: e });
    return this.root._closeFolders && t.close(), t;
  }
  load(e, t = !0) {
    return (
      e.controllers &&
        this.controllers.forEach((n) => {
          n instanceof Ir ||
            (n._name in e.controllers && n.load(e.controllers[n._name]));
        }),
      t &&
        e.folders &&
        this.folders.forEach((n) => {
          n._title in e.folders && n.load(e.folders[n._title]);
        }),
      this
    );
  }
  save(e = !0) {
    const t = { controllers: {}, folders: {} };
    return (
      this.controllers.forEach((n) => {
        if (!(n instanceof Ir)) {
          if (n._name in t.controllers)
            throw new Error(
              `Cannot save GUI with duplicate property "${n._name}"`
            );
          t.controllers[n._name] = n.save();
        }
      }),
      e &&
        this.folders.forEach((n) => {
          if (n._title in t.folders)
            throw new Error(
              `Cannot save GUI with duplicate folder "${n._title}"`
            );
          t.folders[n._title] = n.save();
        }),
      t
    );
  }
  open(e = !0) {
    return (
      this._setClosed(!e),
      this.$title.setAttribute("aria-expanded", !this._closed),
      this.domElement.classList.toggle("closed", this._closed),
      this
    );
  }
  close() {
    return this.open(!1);
  }
  _setClosed(e) {
    this._closed !== e && ((this._closed = e), this._callOnOpenClose(this));
  }
  show(e = !0) {
    return (
      (this._hidden = !e),
      (this.domElement.style.display = this._hidden ? "none" : ""),
      this
    );
  }
  hide() {
    return this.show(!1);
  }
  openAnimated(e = !0) {
    return (
      this._setClosed(!e),
      this.$title.setAttribute("aria-expanded", !this._closed),
      requestAnimationFrame(() => {
        const t = this.$children.clientHeight;
        (this.$children.style.height = t + "px"),
          this.domElement.classList.add("transition");
        const n = (r) => {
          r.target === this.$children &&
            ((this.$children.style.height = ""),
            this.domElement.classList.remove("transition"),
            this.$children.removeEventListener("transitionend", n));
        };
        this.$children.addEventListener("transitionend", n);
        const i = e ? this.$children.scrollHeight : 0;
        this.domElement.classList.toggle("closed", !e),
          requestAnimationFrame(() => {
            this.$children.style.height = i + "px";
          });
      }),
      this
    );
  }
  title(e) {
    return (this._title = e), (this.$title.textContent = e), this;
  }
  reset(e = !0) {
    return (
      (e ? this.controllersRecursive() : this.controllers).forEach((n) =>
        n.reset()
      ),
      this
    );
  }
  onChange(e) {
    return (this._onChange = e), this;
  }
  _callOnChange(e) {
    this.parent && this.parent._callOnChange(e),
      this._onChange !== void 0 &&
        this._onChange.call(this, {
          object: e.object,
          property: e.property,
          value: e.getValue(),
          controller: e,
        });
  }
  onFinishChange(e) {
    return (this._onFinishChange = e), this;
  }
  _callOnFinishChange(e) {
    this.parent && this.parent._callOnFinishChange(e),
      this._onFinishChange !== void 0 &&
        this._onFinishChange.call(this, {
          object: e.object,
          property: e.property,
          value: e.getValue(),
          controller: e,
        });
  }
  onOpenClose(e) {
    return (this._onOpenClose = e), this;
  }
  _callOnOpenClose(e) {
    this.parent && this.parent._callOnOpenClose(e),
      this._onOpenClose !== void 0 && this._onOpenClose.call(this, e);
  }
  destroy() {
    this.parent &&
      (this.parent.children.splice(this.parent.children.indexOf(this), 1),
      this.parent.folders.splice(this.parent.folders.indexOf(this), 1)),
      this.domElement.parentElement &&
        this.domElement.parentElement.removeChild(this.domElement),
      Array.from(this.children).forEach((e) => e.destroy());
  }
  controllersRecursive() {
    let e = Array.from(this.controllers);
    return (
      this.folders.forEach((t) => {
        e = e.concat(t.controllersRecursive());
      }),
      e
    );
  }
  foldersRecursive() {
    let e = Array.from(this.folders);
    return (
      this.folders.forEach((t) => {
        e = e.concat(t.foldersRecursive());
      }),
      e
    );
  }
}
const qg = _a;
function El(s, e) {
  if (e === gh)
    return (
      console.warn(
        "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."
      ),
      s
    );
  if (e === kr || e === Ol) {
    let t = s.getIndex();
    if (t === null) {
      const a = [],
        o = s.getAttribute("position");
      if (o !== void 0) {
        for (let l = 0; l < o.count; l++) a.push(l);
        s.setIndex(a), (t = s.getIndex());
      } else
        return (
          console.error(
            "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."
          ),
          s
        );
    }
    const n = t.count - 2,
      i = [];
    if (e === kr)
      for (let a = 1; a <= n; a++)
        i.push(t.getX(0)), i.push(t.getX(a)), i.push(t.getX(a + 1));
    else
      for (let a = 0; a < n; a++)
        a % 2 === 0
          ? (i.push(t.getX(a)), i.push(t.getX(a + 1)), i.push(t.getX(a + 2)))
          : (i.push(t.getX(a + 2)), i.push(t.getX(a + 1)), i.push(t.getX(a)));
    i.length / 3 !== n &&
      console.error(
        "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."
      );
    const r = s.clone();
    return r.setIndex(i), r.clearGroups(), r;
  } else
    return (
      console.error(
        "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",
        e
      ),
      s
    );
}
class $g extends In {
  constructor(e) {
    super(e),
      (this.dracoLoader = null),
      (this.ktx2Loader = null),
      (this.meshoptDecoder = null),
      (this.pluginCallbacks = []),
      this.register(function (t) {
        return new e_(t);
      }),
      this.register(function (t) {
        return new l_(t);
      }),
      this.register(function (t) {
        return new c_(t);
      }),
      this.register(function (t) {
        return new h_(t);
      }),
      this.register(function (t) {
        return new n_(t);
      }),
      this.register(function (t) {
        return new i_(t);
      }),
      this.register(function (t) {
        return new s_(t);
      }),
      this.register(function (t) {
        return new r_(t);
      }),
      this.register(function (t) {
        return new Qg(t);
      }),
      this.register(function (t) {
        return new a_(t);
      }),
      this.register(function (t) {
        return new t_(t);
      }),
      this.register(function (t) {
        return new o_(t);
      }),
      this.register(function (t) {
        return new Zg(t);
      }),
      this.register(function (t) {
        return new u_(t);
      }),
      this.register(function (t) {
        return new d_(t);
      });
  }
  load(e, t, n, i) {
    const r = this;
    let a;
    this.resourcePath !== ""
      ? (a = this.resourcePath)
      : this.path !== ""
      ? (a = this.path)
      : (a = qr.extractUrlBase(e)),
      this.manager.itemStart(e);
    const o = function (c) {
        i ? i(c) : console.error(c),
          r.manager.itemError(e),
          r.manager.itemEnd(e);
      },
      l = new da(this.manager);
    l.setPath(this.path),
      l.setResponseType("arraybuffer"),
      l.setRequestHeader(this.requestHeader),
      l.setWithCredentials(this.withCredentials),
      l.load(
        e,
        function (c) {
          try {
            r.parse(
              c,
              a,
              function (h) {
                t(h), r.manager.itemEnd(e);
              },
              o
            );
          } catch (h) {
            o(h);
          }
        },
        n,
        o
      );
  }
  setDRACOLoader(e) {
    return (this.dracoLoader = e), this;
  }
  setDDSLoader() {
    throw new Error(
      'THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".'
    );
  }
  setKTX2Loader(e) {
    return (this.ktx2Loader = e), this;
  }
  setMeshoptDecoder(e) {
    return (this.meshoptDecoder = e), this;
  }
  register(e) {
    return (
      this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e),
      this
    );
  }
  unregister(e) {
    return (
      this.pluginCallbacks.indexOf(e) !== -1 &&
        this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1),
      this
    );
  }
  parse(e, t, n, i) {
    let r;
    const a = {},
      o = {},
      l = new TextDecoder();
    if (typeof e == "string") r = JSON.parse(e);
    else if (e instanceof ArrayBuffer)
      if (l.decode(new Uint8Array(e, 0, 4)) === pc) {
        try {
          a[We.KHR_BINARY_GLTF] = new f_(e);
        } catch (u) {
          i && i(u);
          return;
        }
        r = JSON.parse(a[We.KHR_BINARY_GLTF].content);
      } else r = JSON.parse(l.decode(e));
    else r = e;
    if (r.asset === void 0 || r.asset.version[0] < 2) {
      i &&
        i(
          new Error(
            "THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."
          )
        );
      return;
    }
    const c = new b_(r, {
      path: t || this.resourcePath || "",
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder,
    });
    c.fileLoader.setRequestHeader(this.requestHeader);
    for (let h = 0; h < this.pluginCallbacks.length; h++) {
      const u = this.pluginCallbacks[h](c);
      u.name ||
        console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),
        (o[u.name] = u),
        (a[u.name] = !0);
    }
    if (r.extensionsUsed)
      for (let h = 0; h < r.extensionsUsed.length; ++h) {
        const u = r.extensionsUsed[h],
          d = r.extensionsRequired || [];
        switch (u) {
          case We.KHR_MATERIALS_UNLIT:
            a[u] = new Jg();
            break;
          case We.KHR_DRACO_MESH_COMPRESSION:
            a[u] = new p_(r, this.dracoLoader);
            break;
          case We.KHR_TEXTURE_TRANSFORM:
            a[u] = new m_();
            break;
          case We.KHR_MESH_QUANTIZATION:
            a[u] = new g_();
            break;
          default:
            d.indexOf(u) >= 0 &&
              o[u] === void 0 &&
              console.warn('THREE.GLTFLoader: Unknown extension "' + u + '".');
        }
      }
    c.setExtensions(a), c.setPlugins(o), c.parse(n, i);
  }
  parseAsync(e, t) {
    const n = this;
    return new Promise(function (i, r) {
      n.parse(e, t, i, r);
    });
  }
}
function Kg() {
  let s = {};
  return {
    get: function (e) {
      return s[e];
    },
    add: function (e, t) {
      s[e] = t;
    },
    remove: function (e) {
      delete s[e];
    },
    removeAll: function () {
      s = {};
    },
  };
}
const We = {
  KHR_BINARY_GLTF: "KHR_binary_glTF",
  KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
  KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
  KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
  KHR_MATERIALS_IOR: "KHR_materials_ior",
  KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
  KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
  KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
  KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
  KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy",
  KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
  KHR_MATERIALS_VOLUME: "KHR_materials_volume",
  KHR_TEXTURE_BASISU: "KHR_texture_basisu",
  KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
  KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
  KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
  EXT_TEXTURE_WEBP: "EXT_texture_webp",
  EXT_TEXTURE_AVIF: "EXT_texture_avif",
  EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
  EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing",
};
class Zg {
  constructor(e) {
    (this.parser = e),
      (this.name = We.KHR_LIGHTS_PUNCTUAL),
      (this.cache = { refs: {}, uses: {} });
  }
  _markDefs() {
    const e = this.parser,
      t = this.parser.json.nodes || [];
    for (let n = 0, i = t.length; n < i; n++) {
      const r = t[n];
      r.extensions &&
        r.extensions[this.name] &&
        r.extensions[this.name].light !== void 0 &&
        e._addNodeRef(this.cache, r.extensions[this.name].light);
    }
  }
  _loadLight(e) {
    const t = this.parser,
      n = "light:" + e;
    let i = t.cache.get(n);
    if (i) return i;
    const r = t.json,
      l = (((r.extensions && r.extensions[this.name]) || {}).lights || [])[e];
    let c;
    const h = new Ce(16777215);
    l.color !== void 0 && h.setRGB(l.color[0], l.color[1], l.color[2], gt);
    const u = l.range !== void 0 ? l.range : 0;
    switch (l.type) {
      case "directional":
        (c = new Eg(h)), c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      case "point":
        (c = new Mg(h)), (c.distance = u);
        break;
      case "spot":
        (c = new xg(h)),
          (c.distance = u),
          (l.spot = l.spot || {}),
          (l.spot.innerConeAngle =
            l.spot.innerConeAngle !== void 0 ? l.spot.innerConeAngle : 0),
          (l.spot.outerConeAngle =
            l.spot.outerConeAngle !== void 0
              ? l.spot.outerConeAngle
              : Math.PI / 4),
          (c.angle = l.spot.outerConeAngle),
          (c.penumbra = 1 - l.spot.innerConeAngle / l.spot.outerConeAngle),
          c.target.position.set(0, 0, -1),
          c.add(c.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + l.type);
    }
    return (
      c.position.set(0, 0, 0),
      (c.decay = 2),
      An(c, l),
      l.intensity !== void 0 && (c.intensity = l.intensity),
      (c.name = t.createUniqueName(l.name || "light_" + e)),
      (i = Promise.resolve(c)),
      t.cache.add(n, i),
      i
    );
  }
  getDependency(e, t) {
    if (e === "light") return this._loadLight(t);
  }
  createNodeAttachment(e) {
    const t = this,
      n = this.parser,
      r = n.json.nodes[e],
      o = ((r.extensions && r.extensions[this.name]) || {}).light;
    return o === void 0
      ? null
      : this._loadLight(o).then(function (l) {
          return n._getNodeRef(t.cache, o, l);
        });
  }
}
class Jg {
  constructor() {
    this.name = We.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return wn;
  }
  extendParams(e, t, n) {
    const i = [];
    (e.color = new Ce(1, 1, 1)), (e.opacity = 1);
    const r = t.pbrMetallicRoughness;
    if (r) {
      if (Array.isArray(r.baseColorFactor)) {
        const a = r.baseColorFactor;
        e.color.setRGB(a[0], a[1], a[2], gt), (e.opacity = a[3]);
      }
      r.baseColorTexture !== void 0 &&
        i.push(n.assignTexture(e, "map", r.baseColorTexture, et));
    }
    return Promise.all(i);
  }
}
class Qg {
  constructor(e) {
    (this.parser = e), (this.name = We.KHR_MATERIALS_EMISSIVE_STRENGTH);
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = i.extensions[this.name].emissiveStrength;
    return r !== void 0 && (t.emissiveIntensity = r), Promise.resolve();
  }
}
class e_ {
  constructor(e) {
    (this.parser = e), (this.name = We.KHR_MATERIALS_CLEARCOAT);
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Dn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser,
      i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [],
      a = i.extensions[this.name];
    if (
      (a.clearcoatFactor !== void 0 && (t.clearcoat = a.clearcoatFactor),
      a.clearcoatTexture !== void 0 &&
        r.push(n.assignTexture(t, "clearcoatMap", a.clearcoatTexture)),
      a.clearcoatRoughnessFactor !== void 0 &&
        (t.clearcoatRoughness = a.clearcoatRoughnessFactor),
      a.clearcoatRoughnessTexture !== void 0 &&
        r.push(
          n.assignTexture(
            t,
            "clearcoatRoughnessMap",
            a.clearcoatRoughnessTexture
          )
        ),
      a.clearcoatNormalTexture !== void 0 &&
        (r.push(
          n.assignTexture(t, "clearcoatNormalMap", a.clearcoatNormalTexture)
        ),
        a.clearcoatNormalTexture.scale !== void 0))
    ) {
      const o = a.clearcoatNormalTexture.scale;
      t.clearcoatNormalScale = new Re(o, o);
    }
    return Promise.all(r);
  }
}
class t_ {
  constructor(e) {
    (this.parser = e), (this.name = We.KHR_MATERIALS_IRIDESCENCE);
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Dn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser,
      i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [],
      a = i.extensions[this.name];
    return (
      a.iridescenceFactor !== void 0 && (t.iridescence = a.iridescenceFactor),
      a.iridescenceTexture !== void 0 &&
        r.push(n.assignTexture(t, "iridescenceMap", a.iridescenceTexture)),
      a.iridescenceIor !== void 0 && (t.iridescenceIOR = a.iridescenceIor),
      t.iridescenceThicknessRange === void 0 &&
        (t.iridescenceThicknessRange = [100, 400]),
      a.iridescenceThicknessMinimum !== void 0 &&
        (t.iridescenceThicknessRange[0] = a.iridescenceThicknessMinimum),
      a.iridescenceThicknessMaximum !== void 0 &&
        (t.iridescenceThicknessRange[1] = a.iridescenceThicknessMaximum),
      a.iridescenceThicknessTexture !== void 0 &&
        r.push(
          n.assignTexture(
            t,
            "iridescenceThicknessMap",
            a.iridescenceThicknessTexture
          )
        ),
      Promise.all(r)
    );
  }
}
class n_ {
  constructor(e) {
    (this.parser = e), (this.name = We.KHR_MATERIALS_SHEEN);
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Dn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser,
      i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [];
    (t.sheenColor = new Ce(0, 0, 0)), (t.sheenRoughness = 0), (t.sheen = 1);
    const a = i.extensions[this.name];
    if (a.sheenColorFactor !== void 0) {
      const o = a.sheenColorFactor;
      t.sheenColor.setRGB(o[0], o[1], o[2], gt);
    }
    return (
      a.sheenRoughnessFactor !== void 0 &&
        (t.sheenRoughness = a.sheenRoughnessFactor),
      a.sheenColorTexture !== void 0 &&
        r.push(n.assignTexture(t, "sheenColorMap", a.sheenColorTexture, et)),
      a.sheenRoughnessTexture !== void 0 &&
        r.push(
          n.assignTexture(t, "sheenRoughnessMap", a.sheenRoughnessTexture)
        ),
      Promise.all(r)
    );
  }
}
class i_ {
  constructor(e) {
    (this.parser = e), (this.name = We.KHR_MATERIALS_TRANSMISSION);
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Dn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser,
      i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [],
      a = i.extensions[this.name];
    return (
      a.transmissionFactor !== void 0 &&
        (t.transmission = a.transmissionFactor),
      a.transmissionTexture !== void 0 &&
        r.push(n.assignTexture(t, "transmissionMap", a.transmissionTexture)),
      Promise.all(r)
    );
  }
}
class s_ {
  constructor(e) {
    (this.parser = e), (this.name = We.KHR_MATERIALS_VOLUME);
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Dn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser,
      i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [],
      a = i.extensions[this.name];
    (t.thickness = a.thicknessFactor !== void 0 ? a.thicknessFactor : 0),
      a.thicknessTexture !== void 0 &&
        r.push(n.assignTexture(t, "thicknessMap", a.thicknessTexture)),
      (t.attenuationDistance = a.attenuationDistance || 1 / 0);
    const o = a.attenuationColor || [1, 1, 1];
    return (
      (t.attenuationColor = new Ce().setRGB(o[0], o[1], o[2], gt)),
      Promise.all(r)
    );
  }
}
class r_ {
  constructor(e) {
    (this.parser = e), (this.name = We.KHR_MATERIALS_IOR);
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Dn;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = i.extensions[this.name];
    return (t.ior = r.ior !== void 0 ? r.ior : 1.5), Promise.resolve();
  }
}
class a_ {
  constructor(e) {
    (this.parser = e), (this.name = We.KHR_MATERIALS_SPECULAR);
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Dn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser,
      i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [],
      a = i.extensions[this.name];
    (t.specularIntensity = a.specularFactor !== void 0 ? a.specularFactor : 1),
      a.specularTexture !== void 0 &&
        r.push(n.assignTexture(t, "specularIntensityMap", a.specularTexture));
    const o = a.specularColorFactor || [1, 1, 1];
    return (
      (t.specularColor = new Ce().setRGB(o[0], o[1], o[2], gt)),
      a.specularColorTexture !== void 0 &&
        r.push(
          n.assignTexture(t, "specularColorMap", a.specularColorTexture, et)
        ),
      Promise.all(r)
    );
  }
}
class o_ {
  constructor(e) {
    (this.parser = e), (this.name = We.KHR_MATERIALS_ANISOTROPY);
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Dn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser,
      i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [],
      a = i.extensions[this.name];
    return (
      a.anisotropyStrength !== void 0 && (t.anisotropy = a.anisotropyStrength),
      a.anisotropyRotation !== void 0 &&
        (t.anisotropyRotation = a.anisotropyRotation),
      a.anisotropyTexture !== void 0 &&
        r.push(n.assignTexture(t, "anisotropyMap", a.anisotropyTexture)),
      Promise.all(r)
    );
  }
}
class l_ {
  constructor(e) {
    (this.parser = e), (this.name = We.KHR_TEXTURE_BASISU);
  }
  loadTexture(e) {
    const t = this.parser,
      n = t.json,
      i = n.textures[e];
    if (!i.extensions || !i.extensions[this.name]) return null;
    const r = i.extensions[this.name],
      a = t.options.ktx2Loader;
    if (!a) {
      if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0)
        throw new Error(
          "THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures"
        );
      return null;
    }
    return t.loadTextureImage(e, r.source, a);
  }
}
class c_ {
  constructor(e) {
    (this.parser = e),
      (this.name = We.EXT_TEXTURE_WEBP),
      (this.isSupported = null);
  }
  loadTexture(e) {
    const t = this.name,
      n = this.parser,
      i = n.json,
      r = i.textures[e];
    if (!r.extensions || !r.extensions[t]) return null;
    const a = r.extensions[t],
      o = i.images[a.source];
    let l = n.textureLoader;
    if (o.uri) {
      const c = n.options.manager.getHandler(o.uri);
      c !== null && (l = c);
    }
    return this.detectSupport().then(function (c) {
      if (c) return n.loadTextureImage(e, a.source, l);
      if (i.extensionsRequired && i.extensionsRequired.indexOf(t) >= 0)
        throw new Error(
          "THREE.GLTFLoader: WebP required by asset but unsupported."
        );
      return n.loadTexture(e);
    });
  }
  detectSupport() {
    return (
      this.isSupported ||
        (this.isSupported = new Promise(function (e) {
          const t = new Image();
          (t.src =
            "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA"),
            (t.onload = t.onerror =
              function () {
                e(t.height === 1);
              });
        })),
      this.isSupported
    );
  }
}
class h_ {
  constructor(e) {
    (this.parser = e),
      (this.name = We.EXT_TEXTURE_AVIF),
      (this.isSupported = null);
  }
  loadTexture(e) {
    const t = this.name,
      n = this.parser,
      i = n.json,
      r = i.textures[e];
    if (!r.extensions || !r.extensions[t]) return null;
    const a = r.extensions[t],
      o = i.images[a.source];
    let l = n.textureLoader;
    if (o.uri) {
      const c = n.options.manager.getHandler(o.uri);
      c !== null && (l = c);
    }
    return this.detectSupport().then(function (c) {
      if (c) return n.loadTextureImage(e, a.source, l);
      if (i.extensionsRequired && i.extensionsRequired.indexOf(t) >= 0)
        throw new Error(
          "THREE.GLTFLoader: AVIF required by asset but unsupported."
        );
      return n.loadTexture(e);
    });
  }
  detectSupport() {
    return (
      this.isSupported ||
        (this.isSupported = new Promise(function (e) {
          const t = new Image();
          (t.src =
            "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI="),
            (t.onload = t.onerror =
              function () {
                e(t.height === 1);
              });
        })),
      this.isSupported
    );
  }
}
class u_ {
  constructor(e) {
    (this.name = We.EXT_MESHOPT_COMPRESSION), (this.parser = e);
  }
  loadBufferView(e) {
    const t = this.parser.json,
      n = t.bufferViews[e];
    if (n.extensions && n.extensions[this.name]) {
      const i = n.extensions[this.name],
        r = this.parser.getDependency("buffer", i.buffer),
        a = this.parser.options.meshoptDecoder;
      if (!a || !a.supported) {
        if (
          t.extensionsRequired &&
          t.extensionsRequired.indexOf(this.name) >= 0
        )
          throw new Error(
            "THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files"
          );
        return null;
      }
      return r.then(function (o) {
        const l = i.byteOffset || 0,
          c = i.byteLength || 0,
          h = i.count,
          u = i.byteStride,
          d = new Uint8Array(o, l, c);
        return a.decodeGltfBufferAsync
          ? a
              .decodeGltfBufferAsync(h, u, d, i.mode, i.filter)
              .then(function (m) {
                return m.buffer;
              })
          : a.ready.then(function () {
              const m = new ArrayBuffer(h * u);
              return (
                a.decodeGltfBuffer(
                  new Uint8Array(m),
                  h,
                  u,
                  d,
                  i.mode,
                  i.filter
                ),
                m
              );
            });
      });
    } else return null;
  }
}
class d_ {
  constructor(e) {
    (this.name = We.EXT_MESH_GPU_INSTANCING), (this.parser = e);
  }
  createNodeMesh(e) {
    const t = this.parser.json,
      n = t.nodes[e];
    if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0)
      return null;
    const i = t.meshes[n.mesh];
    for (const c of i.primitives)
      if (
        c.mode !== Ft.TRIANGLES &&
        c.mode !== Ft.TRIANGLE_STRIP &&
        c.mode !== Ft.TRIANGLE_FAN &&
        c.mode !== void 0
      )
        return null;
    const a = n.extensions[this.name].attributes,
      o = [],
      l = {};
    for (const c in a)
      o.push(
        this.parser
          .getDependency("accessor", a[c])
          .then((h) => ((l[c] = h), l[c]))
      );
    return o.length < 1
      ? null
      : (o.push(this.parser.createNodeMesh(e)),
        Promise.all(o).then((c) => {
          const h = c.pop(),
            u = h.isGroup ? h.children : [h],
            d = c[0].count,
            m = [];
          for (const g of u) {
            const _ = new He(),
              p = new D(),
              f = new nn(),
              y = new D(1, 1, 1),
              M = new Qm(g.geometry, g.material, d);
            for (let S = 0; S < d; S++)
              l.TRANSLATION && p.fromBufferAttribute(l.TRANSLATION, S),
                l.ROTATION && f.fromBufferAttribute(l.ROTATION, S),
                l.SCALE && y.fromBufferAttribute(l.SCALE, S),
                M.setMatrixAt(S, _.compose(p, f, y));
            for (const S in l)
              if (S === "_COLOR_0") {
                const b = l[S];
                M.instanceColor = new Yr(b.array, b.itemSize, b.normalized);
              } else
                S !== "TRANSLATION" &&
                  S !== "ROTATION" &&
                  S !== "SCALE" &&
                  g.geometry.setAttribute(S, l[S]);
            tt.prototype.copy.call(M, g),
              this.parser.assignFinalMaterial(M),
              m.push(M);
          }
          return h.isGroup ? (h.clear(), h.add(...m), h) : m[0];
        }));
  }
}
const pc = "glTF",
  Wi = 12,
  Sl = { JSON: 1313821514, BIN: 5130562 };
class f_ {
  constructor(e) {
    (this.name = We.KHR_BINARY_GLTF), (this.content = null), (this.body = null);
    const t = new DataView(e, 0, Wi),
      n = new TextDecoder();
    if (
      ((this.header = {
        magic: n.decode(new Uint8Array(e.slice(0, 4))),
        version: t.getUint32(4, !0),
        length: t.getUint32(8, !0),
      }),
      this.header.magic !== pc)
    )
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const i = this.header.length - Wi,
      r = new DataView(e, Wi);
    let a = 0;
    for (; a < i; ) {
      const o = r.getUint32(a, !0);
      a += 4;
      const l = r.getUint32(a, !0);
      if (((a += 4), l === Sl.JSON)) {
        const c = new Uint8Array(e, Wi + a, o);
        this.content = n.decode(c);
      } else if (l === Sl.BIN) {
        const c = Wi + a;
        this.body = e.slice(c, c + o);
      }
      a += o;
    }
    if (this.content === null)
      throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class p_ {
  constructor(e, t) {
    if (!t)
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    (this.name = We.KHR_DRACO_MESH_COMPRESSION),
      (this.json = e),
      (this.dracoLoader = t),
      this.dracoLoader.preload();
  }
  decodePrimitive(e, t) {
    const n = this.json,
      i = this.dracoLoader,
      r = e.extensions[this.name].bufferView,
      a = e.extensions[this.name].attributes,
      o = {},
      l = {},
      c = {};
    for (const h in a) {
      const u = Kr[h] || h.toLowerCase();
      o[u] = a[h];
    }
    for (const h in e.attributes) {
      const u = Kr[h] || h.toLowerCase();
      if (a[h] !== void 0) {
        const d = n.accessors[e.attributes[h]],
          m = Mi[d.componentType];
        (c[u] = m.name), (l[u] = d.normalized === !0);
      }
    }
    return t.getDependency("bufferView", r).then(function (h) {
      return new Promise(function (u) {
        i.decodeDracoFile(
          h,
          function (d) {
            for (const m in d.attributes) {
              const g = d.attributes[m],
                _ = l[m];
              _ !== void 0 && (g.normalized = _);
            }
            u(d);
          },
          o,
          c
        );
      });
    });
  }
}
class m_ {
  constructor() {
    this.name = We.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(e, t) {
    return (
      ((t.texCoord === void 0 || t.texCoord === e.channel) &&
        t.offset === void 0 &&
        t.rotation === void 0 &&
        t.scale === void 0) ||
        ((e = e.clone()),
        t.texCoord !== void 0 && (e.channel = t.texCoord),
        t.offset !== void 0 && e.offset.fromArray(t.offset),
        t.rotation !== void 0 && (e.rotation = t.rotation),
        t.scale !== void 0 && e.repeat.fromArray(t.scale),
        (e.needsUpdate = !0)),
      e
    );
  }
}
class g_ {
  constructor() {
    this.name = We.KHR_MESH_QUANTIZATION;
  }
}
class mc extends ts {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  copySampleValue_(e) {
    const t = this.resultBuffer,
      n = this.sampleValues,
      i = this.valueSize,
      r = e * i * 3 + i;
    for (let a = 0; a !== i; a++) t[a] = n[r + a];
    return t;
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer,
      a = this.sampleValues,
      o = this.valueSize,
      l = o * 2,
      c = o * 3,
      h = i - t,
      u = (n - t) / h,
      d = u * u,
      m = d * u,
      g = e * c,
      _ = g - c,
      p = -2 * m + 3 * d,
      f = m - d,
      y = 1 - p,
      M = f - d + u;
    for (let S = 0; S !== o; S++) {
      const b = a[_ + S + o],
        L = a[_ + S + l] * h,
        w = a[g + S + o],
        I = a[g + S] * h;
      r[S] = y * b + M * L + p * w + f * I;
    }
    return r;
  }
}
const __ = new nn();
class x_ extends mc {
  interpolate_(e, t, n, i) {
    const r = super.interpolate_(e, t, n, i);
    return __.fromArray(r).normalize().toArray(r), r;
  }
}
const Ft = {
    FLOAT: 5126,
    FLOAT_MAT3: 35675,
    FLOAT_MAT4: 35676,
    FLOAT_VEC2: 35664,
    FLOAT_VEC3: 35665,
    FLOAT_VEC4: 35666,
    LINEAR: 9729,
    REPEAT: 10497,
    SAMPLER_2D: 35678,
    POINTS: 0,
    LINES: 1,
    LINE_LOOP: 2,
    LINE_STRIP: 3,
    TRIANGLES: 4,
    TRIANGLE_STRIP: 5,
    TRIANGLE_FAN: 6,
    UNSIGNED_BYTE: 5121,
    UNSIGNED_SHORT: 5123,
  },
  Mi = {
    5120: Int8Array,
    5121: Uint8Array,
    5122: Int16Array,
    5123: Uint16Array,
    5125: Uint32Array,
    5126: Float32Array,
  },
  Tl = { 9728: pt, 9729: lt, 9984: zr, 9985: Ll, 9986: Us, 9987: Pn },
  Al = { 33071: wt, 33648: Bs, 10497: Si },
  Ur = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4, MAT2: 4, MAT3: 9, MAT4: 16 },
  Kr = {
    POSITION: "position",
    NORMAL: "normal",
    TANGENT: "tangent",
    TEXCOORD_0: "uv",
    TEXCOORD_1: "uv1",
    TEXCOORD_2: "uv2",
    TEXCOORD_3: "uv3",
    COLOR_0: "color",
    WEIGHTS_0: "skinWeight",
    JOINTS_0: "skinIndex",
  },
  Sn = {
    scale: "scale",
    translation: "position",
    rotation: "quaternion",
    weights: "morphTargetInfluences",
  },
  v_ = { CUBICSPLINE: void 0, LINEAR: Ai, STEP: $i },
  Nr = { OPAQUE: "OPAQUE", MASK: "MASK", BLEND: "BLEND" };
function M_(s) {
  return (
    s.DefaultMaterial === void 0 &&
      (s.DefaultMaterial = new ua({
        color: 16777215,
        emissive: 0,
        metalness: 1,
        roughness: 1,
        transparent: !1,
        depthTest: !0,
        side: gn,
      })),
    s.DefaultMaterial
  );
}
function zn(s, e, t) {
  for (const n in t.extensions)
    s[n] === void 0 &&
      ((e.userData.gltfExtensions = e.userData.gltfExtensions || {}),
      (e.userData.gltfExtensions[n] = t.extensions[n]));
}
function An(s, e) {
  e.extras !== void 0 &&
    (typeof e.extras == "object"
      ? Object.assign(s.userData, e.extras)
      : console.warn(
          "THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras
        ));
}
function y_(s, e, t) {
  let n = !1,
    i = !1,
    r = !1;
  for (let c = 0, h = e.length; c < h; c++) {
    const u = e[c];
    if (
      (u.POSITION !== void 0 && (n = !0),
      u.NORMAL !== void 0 && (i = !0),
      u.COLOR_0 !== void 0 && (r = !0),
      n && i && r)
    )
      break;
  }
  if (!n && !i && !r) return Promise.resolve(s);
  const a = [],
    o = [],
    l = [];
  for (let c = 0, h = e.length; c < h; c++) {
    const u = e[c];
    if (n) {
      const d =
        u.POSITION !== void 0
          ? t.getDependency("accessor", u.POSITION)
          : s.attributes.position;
      a.push(d);
    }
    if (i) {
      const d =
        u.NORMAL !== void 0
          ? t.getDependency("accessor", u.NORMAL)
          : s.attributes.normal;
      o.push(d);
    }
    if (r) {
      const d =
        u.COLOR_0 !== void 0
          ? t.getDependency("accessor", u.COLOR_0)
          : s.attributes.color;
      l.push(d);
    }
  }
  return Promise.all([Promise.all(a), Promise.all(o), Promise.all(l)]).then(
    function (c) {
      const h = c[0],
        u = c[1],
        d = c[2];
      return (
        n && (s.morphAttributes.position = h),
        i && (s.morphAttributes.normal = u),
        r && (s.morphAttributes.color = d),
        (s.morphTargetsRelative = !0),
        s
      );
    }
  );
}
function E_(s, e) {
  if ((s.updateMorphTargets(), e.weights !== void 0))
    for (let t = 0, n = e.weights.length; t < n; t++)
      s.morphTargetInfluences[t] = e.weights[t];
  if (e.extras && Array.isArray(e.extras.targetNames)) {
    const t = e.extras.targetNames;
    if (s.morphTargetInfluences.length === t.length) {
      s.morphTargetDictionary = {};
      for (let n = 0, i = t.length; n < i; n++)
        s.morphTargetDictionary[t[n]] = n;
    } else
      console.warn(
        "THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names."
      );
  }
}
function S_(s) {
  let e;
  const t = s.extensions && s.extensions[We.KHR_DRACO_MESH_COMPRESSION];
  if (
    (t
      ? (e = "draco:" + t.bufferView + ":" + t.indices + ":" + Fr(t.attributes))
      : (e = s.indices + ":" + Fr(s.attributes) + ":" + s.mode),
    s.targets !== void 0)
  )
    for (let n = 0, i = s.targets.length; n < i; n++)
      e += ":" + Fr(s.targets[n]);
  return e;
}
function Fr(s) {
  let e = "";
  const t = Object.keys(s).sort();
  for (let n = 0, i = t.length; n < i; n++) e += t[n] + ":" + s[t[n]] + ";";
  return e;
}
function Zr(s) {
  switch (s) {
    case Int8Array:
      return 1 / 127;
    case Uint8Array:
      return 1 / 255;
    case Int16Array:
      return 1 / 32767;
    case Uint16Array:
      return 1 / 65535;
    default:
      throw new Error(
        "THREE.GLTFLoader: Unsupported normalized accessor component type."
      );
  }
}
function T_(s) {
  return s.search(/\.jpe?g($|\?)/i) > 0 || s.search(/^data\:image\/jpeg/) === 0
    ? "image/jpeg"
    : s.search(/\.webp($|\?)/i) > 0 || s.search(/^data\:image\/webp/) === 0
    ? "image/webp"
    : "image/png";
}
const A_ = new He();
class b_ {
  constructor(e = {}, t = {}) {
    (this.json = e),
      (this.extensions = {}),
      (this.plugins = {}),
      (this.options = t),
      (this.cache = new Kg()),
      (this.associations = new Map()),
      (this.primitiveCache = {}),
      (this.nodeCache = {}),
      (this.meshCache = { refs: {}, uses: {} }),
      (this.cameraCache = { refs: {}, uses: {} }),
      (this.lightCache = { refs: {}, uses: {} }),
      (this.sourceCache = {}),
      (this.textureCache = {}),
      (this.nodeNamesUsed = {});
    let n = !1,
      i = !1,
      r = -1;
    typeof navigator < "u" &&
      ((n = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) === !0),
      (i = navigator.userAgent.indexOf("Firefox") > -1),
      (r = i ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1)),
      typeof createImageBitmap > "u" || n || (i && r < 98)
        ? (this.textureLoader = new fc(this.options.manager))
        : (this.textureLoader = new Sg(this.options.manager)),
      this.textureLoader.setCrossOrigin(this.options.crossOrigin),
      this.textureLoader.setRequestHeader(this.options.requestHeader),
      (this.fileLoader = new da(this.options.manager)),
      this.fileLoader.setResponseType("arraybuffer"),
      this.options.crossOrigin === "use-credentials" &&
        this.fileLoader.setWithCredentials(!0);
  }
  setExtensions(e) {
    this.extensions = e;
  }
  setPlugins(e) {
    this.plugins = e;
  }
  parse(e, t) {
    const n = this,
      i = this.json,
      r = this.extensions;
    this.cache.removeAll(),
      (this.nodeCache = {}),
      this._invokeAll(function (a) {
        return a._markDefs && a._markDefs();
      }),
      Promise.all(
        this._invokeAll(function (a) {
          return a.beforeRoot && a.beforeRoot();
        })
      )
        .then(function () {
          return Promise.all([
            n.getDependencies("scene"),
            n.getDependencies("animation"),
            n.getDependencies("camera"),
          ]);
        })
        .then(function (a) {
          const o = {
            scene: a[0][i.scene || 0],
            scenes: a[0],
            animations: a[1],
            cameras: a[2],
            asset: i.asset,
            parser: n,
            userData: {},
          };
          return (
            zn(r, o, i),
            An(o, i),
            Promise.all(
              n._invokeAll(function (l) {
                return l.afterRoot && l.afterRoot(o);
              })
            ).then(function () {
              e(o);
            })
          );
        })
        .catch(t);
  }
  _markDefs() {
    const e = this.json.nodes || [],
      t = this.json.skins || [],
      n = this.json.meshes || [];
    for (let i = 0, r = t.length; i < r; i++) {
      const a = t[i].joints;
      for (let o = 0, l = a.length; o < l; o++) e[a[o]].isBone = !0;
    }
    for (let i = 0, r = e.length; i < r; i++) {
      const a = e[i];
      a.mesh !== void 0 &&
        (this._addNodeRef(this.meshCache, a.mesh),
        a.skin !== void 0 && (n[a.mesh].isSkinnedMesh = !0)),
        a.camera !== void 0 && this._addNodeRef(this.cameraCache, a.camera);
    }
  }
  _addNodeRef(e, t) {
    t !== void 0 &&
      (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
  }
  _getNodeRef(e, t, n) {
    if (e.refs[t] <= 1) return n;
    const i = n.clone(),
      r = (a, o) => {
        const l = this.associations.get(a);
        l != null && this.associations.set(o, l);
        for (const [c, h] of a.children.entries()) r(h, o.children[c]);
      };
    return r(n, i), (i.name += "_instance_" + e.uses[t]++), i;
  }
  _invokeOne(e) {
    const t = Object.values(this.plugins);
    t.push(this);
    for (let n = 0; n < t.length; n++) {
      const i = e(t[n]);
      if (i) return i;
    }
    return null;
  }
  _invokeAll(e) {
    const t = Object.values(this.plugins);
    t.unshift(this);
    const n = [];
    for (let i = 0; i < t.length; i++) {
      const r = e(t[i]);
      r && n.push(r);
    }
    return n;
  }
  getDependency(e, t) {
    const n = e + ":" + t;
    let i = this.cache.get(n);
    if (!i) {
      switch (e) {
        case "scene":
          i = this.loadScene(t);
          break;
        case "node":
          i = this._invokeOne(function (r) {
            return r.loadNode && r.loadNode(t);
          });
          break;
        case "mesh":
          i = this._invokeOne(function (r) {
            return r.loadMesh && r.loadMesh(t);
          });
          break;
        case "accessor":
          i = this.loadAccessor(t);
          break;
        case "bufferView":
          i = this._invokeOne(function (r) {
            return r.loadBufferView && r.loadBufferView(t);
          });
          break;
        case "buffer":
          i = this.loadBuffer(t);
          break;
        case "material":
          i = this._invokeOne(function (r) {
            return r.loadMaterial && r.loadMaterial(t);
          });
          break;
        case "texture":
          i = this._invokeOne(function (r) {
            return r.loadTexture && r.loadTexture(t);
          });
          break;
        case "skin":
          i = this.loadSkin(t);
          break;
        case "animation":
          i = this._invokeOne(function (r) {
            return r.loadAnimation && r.loadAnimation(t);
          });
          break;
        case "camera":
          i = this.loadCamera(t);
          break;
        default:
          if (
            ((i = this._invokeOne(function (r) {
              return r != this && r.getDependency && r.getDependency(e, t);
            })),
            !i)
          )
            throw new Error("Unknown type: " + e);
          break;
      }
      this.cache.add(n, i);
    }
    return i;
  }
  getDependencies(e) {
    let t = this.cache.get(e);
    if (!t) {
      const n = this,
        i = this.json[e + (e === "mesh" ? "es" : "s")] || [];
      (t = Promise.all(
        i.map(function (r, a) {
          return n.getDependency(e, a);
        })
      )),
        this.cache.add(e, t);
    }
    return t;
  }
  loadBuffer(e) {
    const t = this.json.buffers[e],
      n = this.fileLoader;
    if (t.type && t.type !== "arraybuffer")
      throw new Error(
        "THREE.GLTFLoader: " + t.type + " buffer type is not supported."
      );
    if (t.uri === void 0 && e === 0)
      return Promise.resolve(this.extensions[We.KHR_BINARY_GLTF].body);
    const i = this.options;
    return new Promise(function (r, a) {
      n.load(qr.resolveURL(t.uri, i.path), r, void 0, function () {
        a(
          new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".')
        );
      });
    });
  }
  loadBufferView(e) {
    const t = this.json.bufferViews[e];
    return this.getDependency("buffer", t.buffer).then(function (n) {
      const i = t.byteLength || 0,
        r = t.byteOffset || 0;
      return n.slice(r, r + i);
    });
  }
  loadAccessor(e) {
    const t = this,
      n = this.json,
      i = this.json.accessors[e];
    if (i.bufferView === void 0 && i.sparse === void 0) {
      const a = Ur[i.type],
        o = Mi[i.componentType],
        l = i.normalized === !0,
        c = new o(i.count * a);
      return Promise.resolve(new bt(c, a, l));
    }
    const r = [];
    return (
      i.bufferView !== void 0
        ? r.push(this.getDependency("bufferView", i.bufferView))
        : r.push(null),
      i.sparse !== void 0 &&
        (r.push(this.getDependency("bufferView", i.sparse.indices.bufferView)),
        r.push(this.getDependency("bufferView", i.sparse.values.bufferView))),
      Promise.all(r).then(function (a) {
        const o = a[0],
          l = Ur[i.type],
          c = Mi[i.componentType],
          h = c.BYTES_PER_ELEMENT,
          u = h * l,
          d = i.byteOffset || 0,
          m =
            i.bufferView !== void 0
              ? n.bufferViews[i.bufferView].byteStride
              : void 0,
          g = i.normalized === !0;
        let _, p;
        if (m && m !== u) {
          const f = Math.floor(d / m),
            y =
              "InterleavedBuffer:" +
              i.bufferView +
              ":" +
              i.componentType +
              ":" +
              f +
              ":" +
              i.count;
          let M = t.cache.get(y);
          M ||
            ((_ = new c(o, f * m, (i.count * m) / h)),
            (M = new qm(_, m / h)),
            t.cache.add(y, M)),
            (p = new oa(M, l, (d % m) / h, g));
        } else o === null ? (_ = new c(i.count * l)) : (_ = new c(o, d, i.count * l)), (p = new bt(_, l, g));
        if (i.sparse !== void 0) {
          const f = Ur.SCALAR,
            y = Mi[i.sparse.indices.componentType],
            M = i.sparse.indices.byteOffset || 0,
            S = i.sparse.values.byteOffset || 0,
            b = new y(a[1], M, i.sparse.count * f),
            L = new c(a[2], S, i.sparse.count * l);
          o !== null && (p = new bt(p.array.slice(), p.itemSize, p.normalized));
          for (let w = 0, I = b.length; w < I; w++) {
            const v = b[w];
            if (
              (p.setX(v, L[w * l]),
              l >= 2 && p.setY(v, L[w * l + 1]),
              l >= 3 && p.setZ(v, L[w * l + 2]),
              l >= 4 && p.setW(v, L[w * l + 3]),
              l >= 5)
            )
              throw new Error(
                "THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute."
              );
          }
        }
        return p;
      })
    );
  }
  loadTexture(e) {
    const t = this.json,
      n = this.options,
      r = t.textures[e].source,
      a = t.images[r];
    let o = this.textureLoader;
    if (a.uri) {
      const l = n.manager.getHandler(a.uri);
      l !== null && (o = l);
    }
    return this.loadTextureImage(e, r, o);
  }
  loadTextureImage(e, t, n) {
    const i = this,
      r = this.json,
      a = r.textures[e],
      o = r.images[t],
      l = (o.uri || o.bufferView) + ":" + a.sampler;
    if (this.textureCache[l]) return this.textureCache[l];
    const c = this.loadImageSource(t, n)
      .then(function (h) {
        (h.flipY = !1),
          (h.name = a.name || o.name || ""),
          h.name === "" &&
            typeof o.uri == "string" &&
            o.uri.startsWith("data:image/") === !1 &&
            (h.name = o.uri);
        const d = (r.samplers || {})[a.sampler] || {};
        return (
          (h.magFilter = Tl[d.magFilter] || lt),
          (h.minFilter = Tl[d.minFilter] || Pn),
          (h.wrapS = Al[d.wrapS] || Si),
          (h.wrapT = Al[d.wrapT] || Si),
          i.associations.set(h, { textures: e }),
          h
        );
      })
      .catch(function () {
        return null;
      });
    return (this.textureCache[l] = c), c;
  }
  loadImageSource(e, t) {
    const n = this,
      i = this.json,
      r = this.options;
    if (this.sourceCache[e] !== void 0)
      return this.sourceCache[e].then((u) => u.clone());
    const a = i.images[e],
      o = self.URL || self.webkitURL;
    let l = a.uri || "",
      c = !1;
    if (a.bufferView !== void 0)
      l = n.getDependency("bufferView", a.bufferView).then(function (u) {
        c = !0;
        const d = new Blob([u], { type: a.mimeType });
        return (l = o.createObjectURL(d)), l;
      });
    else if (a.uri === void 0)
      throw new Error(
        "THREE.GLTFLoader: Image " + e + " is missing URI and bufferView"
      );
    const h = Promise.resolve(l)
      .then(function (u) {
        return new Promise(function (d, m) {
          let g = d;
          t.isImageBitmapLoader === !0 &&
            (g = function (_) {
              const p = new _t(_);
              (p.needsUpdate = !0), d(p);
            }),
            t.load(qr.resolveURL(u, r.path), g, void 0, m);
        });
      })
      .then(function (u) {
        return (
          c === !0 && o.revokeObjectURL(l),
          (u.userData.mimeType = a.mimeType || T_(a.uri)),
          u
        );
      })
      .catch(function (u) {
        throw (console.error("THREE.GLTFLoader: Couldn't load texture", l), u);
      });
    return (this.sourceCache[e] = h), h;
  }
  assignTexture(e, t, n, i) {
    const r = this;
    return this.getDependency("texture", n.index).then(function (a) {
      if (!a) return null;
      if (
        (n.texCoord !== void 0 &&
          n.texCoord > 0 &&
          ((a = a.clone()), (a.channel = n.texCoord)),
        r.extensions[We.KHR_TEXTURE_TRANSFORM])
      ) {
        const o =
          n.extensions !== void 0
            ? n.extensions[We.KHR_TEXTURE_TRANSFORM]
            : void 0;
        if (o) {
          const l = r.associations.get(a);
          (a = r.extensions[We.KHR_TEXTURE_TRANSFORM].extendTexture(a, o)),
            r.associations.set(a, l);
        }
      }
      return i !== void 0 && (a.colorSpace = i), (e[t] = a), a;
    });
  }
  assignFinalMaterial(e) {
    const t = e.geometry;
    let n = e.material;
    const i = t.attributes.tangent === void 0,
      r = t.attributes.color !== void 0,
      a = t.attributes.normal === void 0;
    if (e.isPoints) {
      const o = "PointsMaterial:" + n.uuid;
      let l = this.cache.get(o);
      l ||
        ((l = new cc()),
        en.prototype.copy.call(l, n),
        l.color.copy(n.color),
        (l.map = n.map),
        (l.sizeAttenuation = !1),
        this.cache.add(o, l)),
        (n = l);
    } else if (e.isLine) {
      const o = "LineBasicMaterial:" + n.uuid;
      let l = this.cache.get(o);
      l ||
        ((l = new lc()),
        en.prototype.copy.call(l, n),
        l.color.copy(n.color),
        (l.map = n.map),
        this.cache.add(o, l)),
        (n = l);
    }
    if (i || r || a) {
      let o = "ClonedMaterial:" + n.uuid + ":";
      i && (o += "derivative-tangents:"),
        r && (o += "vertex-colors:"),
        a && (o += "flat-shading:");
      let l = this.cache.get(o);
      l ||
        ((l = n.clone()),
        r && (l.vertexColors = !0),
        a && (l.flatShading = !0),
        i &&
          (l.normalScale && (l.normalScale.y *= -1),
          l.clearcoatNormalScale && (l.clearcoatNormalScale.y *= -1)),
        this.cache.add(o, l),
        this.associations.set(l, this.associations.get(n))),
        (n = l);
    }
    e.material = n;
  }
  getMaterialType() {
    return ua;
  }
  loadMaterial(e) {
    const t = this,
      n = this.json,
      i = this.extensions,
      r = n.materials[e];
    let a;
    const o = {},
      l = r.extensions || {},
      c = [];
    if (l[We.KHR_MATERIALS_UNLIT]) {
      const u = i[We.KHR_MATERIALS_UNLIT];
      (a = u.getMaterialType()), c.push(u.extendParams(o, r, t));
    } else {
      const u = r.pbrMetallicRoughness || {};
      if (
        ((o.color = new Ce(1, 1, 1)),
        (o.opacity = 1),
        Array.isArray(u.baseColorFactor))
      ) {
        const d = u.baseColorFactor;
        o.color.setRGB(d[0], d[1], d[2], gt), (o.opacity = d[3]);
      }
      u.baseColorTexture !== void 0 &&
        c.push(t.assignTexture(o, "map", u.baseColorTexture, et)),
        (o.metalness = u.metallicFactor !== void 0 ? u.metallicFactor : 1),
        (o.roughness = u.roughnessFactor !== void 0 ? u.roughnessFactor : 1),
        u.metallicRoughnessTexture !== void 0 &&
          (c.push(
            t.assignTexture(o, "metalnessMap", u.metallicRoughnessTexture)
          ),
          c.push(
            t.assignTexture(o, "roughnessMap", u.metallicRoughnessTexture)
          )),
        (a = this._invokeOne(function (d) {
          return d.getMaterialType && d.getMaterialType(e);
        })),
        c.push(
          Promise.all(
            this._invokeAll(function (d) {
              return d.extendMaterialParams && d.extendMaterialParams(e, o);
            })
          )
        );
    }
    r.doubleSided === !0 && (o.side = Zt);
    const h = r.alphaMode || Nr.OPAQUE;
    if (
      (h === Nr.BLEND
        ? ((o.transparent = !0), (o.depthWrite = !1))
        : ((o.transparent = !1),
          h === Nr.MASK &&
            (o.alphaTest = r.alphaCutoff !== void 0 ? r.alphaCutoff : 0.5)),
      r.normalTexture !== void 0 &&
        a !== wn &&
        (c.push(t.assignTexture(o, "normalMap", r.normalTexture)),
        (o.normalScale = new Re(1, 1)),
        r.normalTexture.scale !== void 0))
    ) {
      const u = r.normalTexture.scale;
      o.normalScale.set(u, u);
    }
    if (
      (r.occlusionTexture !== void 0 &&
        a !== wn &&
        (c.push(t.assignTexture(o, "aoMap", r.occlusionTexture)),
        r.occlusionTexture.strength !== void 0 &&
          (o.aoMapIntensity = r.occlusionTexture.strength)),
      r.emissiveFactor !== void 0 && a !== wn)
    ) {
      const u = r.emissiveFactor;
      o.emissive = new Ce().setRGB(u[0], u[1], u[2], gt);
    }
    return (
      r.emissiveTexture !== void 0 &&
        a !== wn &&
        c.push(t.assignTexture(o, "emissiveMap", r.emissiveTexture, et)),
      Promise.all(c).then(function () {
        const u = new a(o);
        return (
          r.name && (u.name = r.name),
          An(u, r),
          t.associations.set(u, { materials: e }),
          r.extensions && zn(i, u, r),
          u
        );
      })
    );
  }
  createUniqueName(e) {
    const t = je.sanitizeNodeName(e || "");
    return t in this.nodeNamesUsed
      ? t + "_" + ++this.nodeNamesUsed[t]
      : ((this.nodeNamesUsed[t] = 0), t);
  }
  loadGeometries(e) {
    const t = this,
      n = this.extensions,
      i = this.primitiveCache;
    function r(o) {
      return n[We.KHR_DRACO_MESH_COMPRESSION]
        .decodePrimitive(o, t)
        .then(function (l) {
          return bl(l, o, t);
        });
    }
    const a = [];
    for (let o = 0, l = e.length; o < l; o++) {
      const c = e[o],
        h = S_(c),
        u = i[h];
      if (u) a.push(u.promise);
      else {
        let d;
        c.extensions && c.extensions[We.KHR_DRACO_MESH_COMPRESSION]
          ? (d = r(c))
          : (d = bl(new jt(), c, t)),
          (i[h] = { primitive: c, promise: d }),
          a.push(d);
      }
    }
    return Promise.all(a);
  }
  loadMesh(e) {
    const t = this,
      n = this.json,
      i = this.extensions,
      r = n.meshes[e],
      a = r.primitives,
      o = [];
    for (let l = 0, c = a.length; l < c; l++) {
      const h =
        a[l].material === void 0
          ? M_(this.cache)
          : this.getDependency("material", a[l].material);
      o.push(h);
    }
    return (
      o.push(t.loadGeometries(a)),
      Promise.all(o).then(function (l) {
        const c = l.slice(0, l.length - 1),
          h = l[l.length - 1],
          u = [];
        for (let m = 0, g = h.length; m < g; m++) {
          const _ = h[m],
            p = a[m];
          let f;
          const y = c[m];
          if (
            p.mode === Ft.TRIANGLES ||
            p.mode === Ft.TRIANGLE_STRIP ||
            p.mode === Ft.TRIANGLE_FAN ||
            p.mode === void 0
          )
            (f = r.isSkinnedMesh === !0 ? new Km(_, y) : new It(_, y)),
              f.isSkinnedMesh === !0 && f.normalizeSkinWeights(),
              p.mode === Ft.TRIANGLE_STRIP
                ? (f.geometry = El(f.geometry, Ol))
                : p.mode === Ft.TRIANGLE_FAN &&
                  (f.geometry = El(f.geometry, kr));
          else if (p.mode === Ft.LINES) f = new eg(_, y);
          else if (p.mode === Ft.LINE_STRIP) f = new ca(_, y);
          else if (p.mode === Ft.LINE_LOOP) f = new tg(_, y);
          else if (p.mode === Ft.POINTS) f = new ng(_, y);
          else
            throw new Error(
              "THREE.GLTFLoader: Primitive mode unsupported: " + p.mode
            );
          Object.keys(f.geometry.morphAttributes).length > 0 && E_(f, r),
            (f.name = t.createUniqueName(r.name || "mesh_" + e)),
            An(f, r),
            p.extensions && zn(i, f, p),
            t.assignFinalMaterial(f),
            u.push(f);
        }
        for (let m = 0, g = u.length; m < g; m++)
          t.associations.set(u[m], { meshes: e, primitives: m });
        if (u.length === 1) return r.extensions && zn(i, u[0], r), u[0];
        const d = new Wn();
        r.extensions && zn(i, d, r), t.associations.set(d, { meshes: e });
        for (let m = 0, g = u.length; m < g; m++) d.add(u[m]);
        return d;
      })
    );
  }
  loadCamera(e) {
    let t;
    const n = this.json.cameras[e],
      i = n[n.type];
    if (!i) {
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
      return;
    }
    return (
      n.type === "perspective"
        ? (t = new At(
            kl.radToDeg(i.yfov),
            i.aspectRatio || 1,
            i.znear || 1,
            i.zfar || 2e6
          ))
        : n.type === "orthographic" &&
          (t = new ra(-i.xmag, i.xmag, i.ymag, -i.ymag, i.znear, i.zfar)),
      n.name && (t.name = this.createUniqueName(n.name)),
      An(t, n),
      Promise.resolve(t)
    );
  }
  loadSkin(e) {
    const t = this.json.skins[e],
      n = [];
    for (let i = 0, r = t.joints.length; i < r; i++)
      n.push(this._loadNodeShallow(t.joints[i]));
    return (
      t.inverseBindMatrices !== void 0
        ? n.push(this.getDependency("accessor", t.inverseBindMatrices))
        : n.push(null),
      Promise.all(n).then(function (i) {
        const r = i.pop(),
          a = i,
          o = [],
          l = [];
        for (let c = 0, h = a.length; c < h; c++) {
          const u = a[c];
          if (u) {
            o.push(u);
            const d = new He();
            r !== null && d.fromArray(r.array, c * 16), l.push(d);
          } else
            console.warn(
              'THREE.GLTFLoader: Joint "%s" could not be found.',
              t.joints[c]
            );
        }
        return new la(o, l);
      })
    );
  }
  loadAnimation(e) {
    const t = this.json,
      n = this,
      i = t.animations[e],
      r = i.name ? i.name : "animation_" + e,
      a = [],
      o = [],
      l = [],
      c = [],
      h = [];
    for (let u = 0, d = i.channels.length; u < d; u++) {
      const m = i.channels[u],
        g = i.samplers[m.sampler],
        _ = m.target,
        p = _.node,
        f = i.parameters !== void 0 ? i.parameters[g.input] : g.input,
        y = i.parameters !== void 0 ? i.parameters[g.output] : g.output;
      _.node !== void 0 &&
        (a.push(this.getDependency("node", p)),
        o.push(this.getDependency("accessor", f)),
        l.push(this.getDependency("accessor", y)),
        c.push(g),
        h.push(_));
    }
    return Promise.all([
      Promise.all(a),
      Promise.all(o),
      Promise.all(l),
      Promise.all(c),
      Promise.all(h),
    ]).then(function (u) {
      const d = u[0],
        m = u[1],
        g = u[2],
        _ = u[3],
        p = u[4],
        f = [];
      for (let y = 0, M = d.length; y < M; y++) {
        const S = d[y],
          b = m[y],
          L = g[y],
          w = _[y],
          I = p[y];
        if (S === void 0) continue;
        S.updateMatrix && S.updateMatrix();
        const v = n._createAnimationTracks(S, b, L, w, I);
        if (v) for (let T = 0; T < v.length; T++) f.push(v[T]);
      }
      return new cg(r, void 0, f);
    });
  }
  createNodeMesh(e) {
    const t = this.json,
      n = this,
      i = t.nodes[e];
    return i.mesh === void 0
      ? null
      : n.getDependency("mesh", i.mesh).then(function (r) {
          const a = n._getNodeRef(n.meshCache, i.mesh, r);
          return (
            i.weights !== void 0 &&
              a.traverse(function (o) {
                if (o.isMesh)
                  for (let l = 0, c = i.weights.length; l < c; l++)
                    o.morphTargetInfluences[l] = i.weights[l];
              }),
            a
          );
        });
  }
  loadNode(e) {
    const t = this.json,
      n = this,
      i = t.nodes[e],
      r = n._loadNodeShallow(e),
      a = [],
      o = i.children || [];
    for (let c = 0, h = o.length; c < h; c++)
      a.push(n.getDependency("node", o[c]));
    const l =
      i.skin === void 0
        ? Promise.resolve(null)
        : n.getDependency("skin", i.skin);
    return Promise.all([r, Promise.all(a), l]).then(function (c) {
      const h = c[0],
        u = c[1],
        d = c[2];
      d !== null &&
        h.traverse(function (m) {
          m.isSkinnedMesh && m.bind(d, A_);
        });
      for (let m = 0, g = u.length; m < g; m++) h.add(u[m]);
      return h;
    });
  }
  _loadNodeShallow(e) {
    const t = this.json,
      n = this.extensions,
      i = this;
    if (this.nodeCache[e] !== void 0) return this.nodeCache[e];
    const r = t.nodes[e],
      a = r.name ? i.createUniqueName(r.name) : "",
      o = [],
      l = i._invokeOne(function (c) {
        return c.createNodeMesh && c.createNodeMesh(e);
      });
    return (
      l && o.push(l),
      r.camera !== void 0 &&
        o.push(
          i.getDependency("camera", r.camera).then(function (c) {
            return i._getNodeRef(i.cameraCache, r.camera, c);
          })
        ),
      i
        ._invokeAll(function (c) {
          return c.createNodeAttachment && c.createNodeAttachment(e);
        })
        .forEach(function (c) {
          o.push(c);
        }),
      (this.nodeCache[e] = Promise.all(o).then(function (c) {
        let h;
        if (
          (r.isBone === !0
            ? (h = new ac())
            : c.length > 1
            ? (h = new Wn())
            : c.length === 1
            ? (h = c[0])
            : (h = new tt()),
          h !== c[0])
        )
          for (let u = 0, d = c.length; u < d; u++) h.add(c[u]);
        if (
          (r.name && ((h.userData.name = r.name), (h.name = a)),
          An(h, r),
          r.extensions && zn(n, h, r),
          r.matrix !== void 0)
        ) {
          const u = new He();
          u.fromArray(r.matrix), h.applyMatrix4(u);
        } else r.translation !== void 0 && h.position.fromArray(r.translation), r.rotation !== void 0 && h.quaternion.fromArray(r.rotation), r.scale !== void 0 && h.scale.fromArray(r.scale);
        return (
          i.associations.has(h) || i.associations.set(h, {}),
          (i.associations.get(h).nodes = e),
          h
        );
      })),
      this.nodeCache[e]
    );
  }
  loadScene(e) {
    const t = this.extensions,
      n = this.json.scenes[e],
      i = this,
      r = new Wn();
    n.name && (r.name = i.createUniqueName(n.name)),
      An(r, n),
      n.extensions && zn(t, r, n);
    const a = n.nodes || [],
      o = [];
    for (let l = 0, c = a.length; l < c; l++)
      o.push(i.getDependency("node", a[l]));
    return Promise.all(o).then(function (l) {
      for (let h = 0, u = l.length; h < u; h++) r.add(l[h]);
      const c = (h) => {
        const u = new Map();
        for (const [d, m] of i.associations)
          (d instanceof en || d instanceof _t) && u.set(d, m);
        return (
          h.traverse((d) => {
            const m = i.associations.get(d);
            m != null && u.set(d, m);
          }),
          u
        );
      };
      return (i.associations = c(r)), r;
    });
  }
  _createAnimationTracks(e, t, n, i, r) {
    const a = [],
      o = e.name ? e.name : e.uuid,
      l = [];
    Sn[r.path] === Sn.weights
      ? e.traverse(function (d) {
          d.morphTargetInfluences && l.push(d.name ? d.name : d.uuid);
        })
      : l.push(o);
    let c;
    switch (Sn[r.path]) {
      case Sn.weights:
        c = Ri;
        break;
      case Sn.rotation:
        c = Kn;
        break;
      case Sn.position:
      case Sn.scale:
        c = Ci;
        break;
      default:
        switch (n.itemSize) {
          case 1:
            c = Ri;
            break;
          case 2:
          case 3:
          default:
            c = Ci;
            break;
        }
        break;
    }
    const h = i.interpolation !== void 0 ? v_[i.interpolation] : Ai,
      u = this._getArrayFromAccessor(n);
    for (let d = 0, m = l.length; d < m; d++) {
      const g = new c(l[d] + "." + Sn[r.path], t.array, u, h);
      i.interpolation === "CUBICSPLINE" &&
        this._createCubicSplineTrackInterpolant(g),
        a.push(g);
    }
    return a;
  }
  _getArrayFromAccessor(e) {
    let t = e.array;
    if (e.normalized) {
      const n = Zr(t.constructor),
        i = new Float32Array(t.length);
      for (let r = 0, a = t.length; r < a; r++) i[r] = t[r] * n;
      t = i;
    }
    return t;
  }
  _createCubicSplineTrackInterpolant(e) {
    (e.createInterpolant = function (n) {
      const i = this instanceof Kn ? x_ : mc;
      return new i(this.times, this.values, this.getValueSize() / 3, n);
    }),
      (e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0);
  }
}
function w_(s, e, t) {
  const n = e.attributes,
    i = new _n();
  if (n.POSITION !== void 0) {
    const o = t.json.accessors[n.POSITION],
      l = o.min,
      c = o.max;
    if (l !== void 0 && c !== void 0) {
      if (
        (i.set(new D(l[0], l[1], l[2]), new D(c[0], c[1], c[2])), o.normalized)
      ) {
        const h = Zr(Mi[o.componentType]);
        i.min.multiplyScalar(h), i.max.multiplyScalar(h);
      }
    } else {
      console.warn(
        "THREE.GLTFLoader: Missing min/max properties for accessor POSITION."
      );
      return;
    }
  } else return;
  const r = e.targets;
  if (r !== void 0) {
    const o = new D(),
      l = new D();
    for (let c = 0, h = r.length; c < h; c++) {
      const u = r[c];
      if (u.POSITION !== void 0) {
        const d = t.json.accessors[u.POSITION],
          m = d.min,
          g = d.max;
        if (m !== void 0 && g !== void 0) {
          if (
            (l.setX(Math.max(Math.abs(m[0]), Math.abs(g[0]))),
            l.setY(Math.max(Math.abs(m[1]), Math.abs(g[1]))),
            l.setZ(Math.max(Math.abs(m[2]), Math.abs(g[2]))),
            d.normalized)
          ) {
            const _ = Zr(Mi[d.componentType]);
            l.multiplyScalar(_);
          }
          o.max(l);
        } else
          console.warn(
            "THREE.GLTFLoader: Missing min/max properties for accessor POSITION."
          );
      }
    }
    i.expandByVector(o);
  }
  s.boundingBox = i;
  const a = new sn();
  i.getCenter(a.center),
    (a.radius = i.min.distanceTo(i.max) / 2),
    (s.boundingSphere = a);
}
function bl(s, e, t) {
  const n = e.attributes,
    i = [];
  function r(a, o) {
    return t.getDependency("accessor", a).then(function (l) {
      s.setAttribute(o, l);
    });
  }
  for (const a in n) {
    const o = Kr[a] || a.toLowerCase();
    o in s.attributes || i.push(r(n[a], o));
  }
  if (e.indices !== void 0 && !s.index) {
    const a = t.getDependency("accessor", e.indices).then(function (o) {
      s.setIndex(o);
    });
    i.push(a);
  }
  return (
    Ye.workingColorSpace !== gt &&
      "COLOR_0" in n &&
      console.warn(
        `THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ye.workingColorSpace}" not supported.`
      ),
    An(s, e),
    w_(s, e, t),
    Promise.all(i).then(function () {
      return e.targets !== void 0 ? y_(s, e.targets, t) : s;
    })
  );
}
class R_ extends gg {
  constructor(e) {
    super(e), (this.type = Qt);
  }
  parse(e) {
    const a = function (I, v) {
        switch (I) {
          case 1:
            throw new Error("THREE.RGBELoader: Read Error: " + (v || ""));
          case 2:
            throw new Error("THREE.RGBELoader: Write Error: " + (v || ""));
          case 3:
            throw new Error("THREE.RGBELoader: Bad File Format: " + (v || ""));
          default:
          case 4:
            throw new Error("THREE.RGBELoader: Memory Error: " + (v || ""));
        }
      },
      h = `
`,
      u = function (I, v, T) {
        v = v || 1024;
        let j = I.pos,
          $ = -1,
          C = 0,
          F = "",
          V = String.fromCharCode.apply(
            null,
            new Uint16Array(I.subarray(j, j + 128))
          );
        for (; 0 > ($ = V.indexOf(h)) && C < v && j < I.byteLength; )
          (F += V),
            (C += V.length),
            (j += 128),
            (V += String.fromCharCode.apply(
              null,
              new Uint16Array(I.subarray(j, j + 128))
            ));
        return -1 < $
          ? (T !== !1 && (I.pos += C + $ + 1), F + V.slice(0, $))
          : !1;
      },
      d = function (I) {
        const v = /^#\?(\S+)/,
          T = /^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,
          G = /^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,
          j = /^\s*FORMAT=(\S+)\s*$/,
          $ = /^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,
          C = {
            valid: 0,
            string: "",
            comments: "",
            programtype: "RGBE",
            format: "",
            gamma: 1,
            exposure: 1,
            width: 0,
            height: 0,
          };
        let F, V;
        for (
          (I.pos >= I.byteLength || !(F = u(I))) && a(1, "no header found"),
            (V = F.match(v)) || a(3, "bad initial token"),
            C.valid |= 1,
            C.programtype = V[1],
            C.string +=
              F +
              `
`;
          (F = u(I)), F !== !1;

        ) {
          if (
            ((C.string +=
              F +
              `
`),
            F.charAt(0) === "#")
          ) {
            C.comments +=
              F +
              `
`;
            continue;
          }
          if (
            ((V = F.match(T)) && (C.gamma = parseFloat(V[1])),
            (V = F.match(G)) && (C.exposure = parseFloat(V[1])),
            (V = F.match(j)) && ((C.valid |= 2), (C.format = V[1])),
            (V = F.match($)) &&
              ((C.valid |= 4),
              (C.height = parseInt(V[1], 10)),
              (C.width = parseInt(V[2], 10))),
            C.valid & 2 && C.valid & 4)
          )
            break;
        }
        return (
          C.valid & 2 || a(3, "missing format specifier"),
          C.valid & 4 || a(3, "missing image size specifier"),
          C
        );
      },
      m = function (I, v, T) {
        const G = v;
        if (G < 8 || G > 32767 || I[0] !== 2 || I[1] !== 2 || I[2] & 128)
          return new Uint8Array(I);
        G !== ((I[2] << 8) | I[3]) && a(3, "wrong scanline width");
        const j = new Uint8Array(4 * v * T);
        j.length || a(4, "unable to allocate buffer space");
        let $ = 0,
          C = 0;
        const F = 4 * G,
          V = new Uint8Array(4),
          Y = new Uint8Array(F);
        let ee = T;
        for (; ee > 0 && C < I.byteLength; ) {
          C + 4 > I.byteLength && a(1),
            (V[0] = I[C++]),
            (V[1] = I[C++]),
            (V[2] = I[C++]),
            (V[3] = I[C++]),
            (V[0] != 2 || V[1] != 2 || ((V[2] << 8) | V[3]) != G) &&
              a(3, "bad rgbe scanline format");
          let Z = 0,
            q;
          for (; Z < F && C < I.byteLength; ) {
            q = I[C++];
            const H = q > 128;
            if (
              (H && (q -= 128),
              (q === 0 || Z + q > F) && a(3, "bad scanline data"),
              H)
            ) {
              const ae = I[C++];
              for (let he = 0; he < q; he++) Y[Z++] = ae;
            } else Y.set(I.subarray(C, C + q), Z), (Z += q), (C += q);
          }
          const U = G;
          for (let H = 0; H < U; H++) {
            let ae = 0;
            (j[$] = Y[H + ae]),
              (ae += G),
              (j[$ + 1] = Y[H + ae]),
              (ae += G),
              (j[$ + 2] = Y[H + ae]),
              (ae += G),
              (j[$ + 3] = Y[H + ae]),
              ($ += 4);
          }
          ee--;
        }
        return j;
      },
      g = function (I, v, T, G) {
        const j = I[v + 3],
          $ = Math.pow(2, j - 128) / 255;
        (T[G + 0] = I[v + 0] * $),
          (T[G + 1] = I[v + 1] * $),
          (T[G + 2] = I[v + 2] * $),
          (T[G + 3] = 1);
      },
      _ = function (I, v, T, G) {
        const j = I[v + 3],
          $ = Math.pow(2, j - 128) / 255;
        (T[G + 0] = ps.toHalfFloat(Math.min(I[v + 0] * $, 65504))),
          (T[G + 1] = ps.toHalfFloat(Math.min(I[v + 1] * $, 65504))),
          (T[G + 2] = ps.toHalfFloat(Math.min(I[v + 2] * $, 65504))),
          (T[G + 3] = ps.toHalfFloat(1));
      },
      p = new Uint8Array(e);
    p.pos = 0;
    const f = d(p),
      y = f.width,
      M = f.height,
      S = m(p.subarray(p.pos), y, M);
    let b, L, w;
    switch (this.type) {
      case Ht:
        w = S.length / 4;
        const I = new Float32Array(w * 4);
        for (let T = 0; T < w; T++) g(S, T * 4, I, T * 4);
        (b = I), (L = Ht);
        break;
      case Qt:
        w = S.length / 4;
        const v = new Uint16Array(w * 4);
        for (let T = 0; T < w; T++) _(S, T * 4, v, T * 4);
        (b = v), (L = Qt);
        break;
      default:
        throw new Error("THREE.RGBELoader: Unsupported type: " + this.type);
    }
    return {
      width: y,
      height: M,
      data: b,
      header: f.string,
      gamma: f.gamma,
      exposure: f.exposure,
      type: L,
    };
  }
  setDataType(e) {
    return (this.type = e), this;
  }
  load(e, t, n, i) {
    function r(a, o) {
      switch (a.type) {
        case Ht:
        case Qt:
          (a.colorSpace = gt),
            (a.minFilter = lt),
            (a.magFilter = lt),
            (a.generateMipmaps = !1),
            (a.flipY = !0);
          break;
      }
      t && t(a, o);
    }
    return super.load(e, r, n, i);
  }
}
const C_ = new $g();
new mg();
new R_();
const L_ = new fc(),
  xa = new qg(),
  va = {},
  gc = document.querySelector("canvas.webgl"),
  kt = new jm(),
  _c = () => {
    kt.traverse((s) => {
      s.isMesh &&
        s.material.isMeshStandardMaterial &&
        (s.material.envMapIntensity = va.envMapIntensity);
    });
  };
kt.backgroundBlurriness = 0;
kt.backgroundIntensity = 1;
xa.add(kt, "backgroundBlurriness").min(0).max(0.5).step(0.001);
xa.add(kt, "backgroundIntensity").min(0).max(10).step(0.001);
va.envMapIntensity = 1;
xa.add(va, "envMapIntensity").min(0).max(10).step(0.001).onChange(_c);
const Ma = L_.load(
  "./environmentMaps/blockadesLabsSkybox/interior_views_cozy_wood_cabin_with_cauldron_and_p.jpg"
);
Ma.mapping = Os;
Ma.colorSpace = et;
kt.background = Ma;
const Ji = new It(new ha(8, 0.5), new wn({ color: new Ce(10, 4, 2) }));
Ji.layers.enable(1);
Ji.position.y = 3.5;
kt.add(Ji);
const xc = new Ql(256, { type: Qt });
kt.environment = xc.texture;
const vc = new Jl(0.1, 100, xc);
vc.layers.set(1);
C_.load("./models/FlightHelmet/glTF/FlightHelmet.gltf", (s) => {
  s.scene.scale.set(8, 8, 8), (s.scene.position.y = 1), kt.add(s.scene), _c();
});
const Kt = { width: window.innerWidth, height: window.innerHeight };
window.addEventListener("resize", () => {
  (Kt.width = window.innerWidth),
    (Kt.height = window.innerHeight),
    (Pi.aspect = Kt.width / Kt.height),
    Pi.updateProjectionMatrix(),
    Di.setSize(Kt.width, Kt.height),
    Di.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});
const Pi = new At(75, Kt.width / Kt.height, 0.1, 100);
Pi.position.set(8, 5, 12);
kt.add(Pi);
const ya = new Ng(Pi, gc);
ya.target.y = 3.5;
ya.enableDamping = !0;
const Di = new rc({ canvas: gc });
Di.setSize(Kt.width, Kt.height);
Di.setPixelRatio(Math.min(window.devicePixelRatio, 2));
const P_ = new Tg(),
  Mc = () => {
    const s = P_.getElapsedTime();
    Ji && ((Ji.rotation.x = Math.sin(s) * 2), vc.update(Di, kt)),
      ya.update(),
      Di.render(kt, Pi),
      window.requestAnimationFrame(Mc);
  };
Mc();
//# sourceMappingURL=index-629a9156.js.map
