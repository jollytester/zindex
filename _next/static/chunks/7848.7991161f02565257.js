(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7848], {
        52707: function(e, t, n) {
            "use strict";
            n.d(t, {
                _W: function() {
                    return f
                },
                kh: function() {
                    return d
                },
                Pt: function() {
                    return h
                },
                DS: function() {
                    return p
                },
                QM: function() {
                    return _
                },
                ek: function() {
                    return g
                },
                oO: function() {
                    return m
                },
                VQ: function() {
                    return y
                },
                ii: function() {
                    return v
                },
                eu: function() {
                    return w
                },
                H3: function() {
                    return b
                },
                ly: function() {
                    return E
                },
                Zr: function() {
                    return R
                },
                ZV: function() {
                    return S
                },
                OG: function() {
                    return x
                },
                pF: function() {
                    return C
                },
                y$: function() {
                    return I
                },
                Gj: function() {
                    return O
                },
                eC: function() {
                    return k
                },
                gy: function() {
                    return T
                },
                A7: function() {
                    return L
                },
                zH: function() {
                    return P
                },
                fU: function() {
                    return U
                },
                eP: function() {
                    return B
                },
                oL: function() {
                    return D
                },
                bZ: function() {
                    return j
                },
                Kb: function() {
                    return q
                },
                w3: function() {
                    return J
                },
                KT: function() {
                    return W
                },
                L_: function() {
                    return z
                },
                xb: function() {
                    return $
                },
                wL: function() {
                    return V
                }
            });
            var r = n(4501),
                o = n.n(r),
                i = n(65054),
                s = n.n(i),
                c = n(48764).Buffer;
            const a = "hex",
                u = "utf8",
                l = "0";

            function f(e) {
                return new Uint8Array(e)
            }

            function d(e, t = !1) {
                const n = e.toString(a);
                return t ? z(n) : n
            }

            function h(e) {
                return e.toString(u)
            }

            function p(e) {
                return e.readUIntBE(0, e.length)
            }

            function _(e) {
                return s()(e)
            }

            function g(e, t = !1) {
                return d(_(e), t)
            }

            function m(e) {
                return h(_(e))
            }

            function y(e) {
                return p(_(e))
            }

            function v(e) {
                return c.from(W(e), a)
            }

            function w(e) {
                return f(v(e))
            }

            function b(e) {
                return h(v(e))
            }

            function E(e) {
                return y(w(e))
            }

            function R(e) {
                return c.from(e, u)
            }

            function S(e) {
                return f(R(e))
            }

            function x(e, t = !1) {
                return d(R(e), t)
            }

            function C(e) {
                const t = parseInt(e, 10);
                return function(e, t) {
                    if (!e) throw new Error(t)
                }(! function(e) {
                    return "undefined" === typeof e
                }(t), "Number can only safely store up to 53 bits"), t
            }

            function I(e) {
                return _(M(N(e)))
            }

            function O(e) {
                return M(N(e))
            }

            function k(e, t) {
                return A(N(e), t)
            }

            function T(e) {
                return `${e}`
            }

            function N(e) {
                return F((e >>> 0).toString(2))
            }

            function M(e) {
                return new Uint8Array(H(e).map((e => parseInt(e, 2))))
            }

            function A(e, t) {
                return g(M(e), t)
            }

            function L(e, t) {
                return !("string" !== typeof e || !e.match(/^0x[0-9A-Fa-f]*$/)) && (!t || e.length === 2 + 2 * t)
            }

            function P(e) {
                return c.isBuffer(e)
            }

            function U(e) {
                return o().strict(e) && !P(e)
            }

            function B(e) {
                return !U(e) && !P(e) && "undefined" !== typeof e.byteLength
            }

            function D(e) {
                return P(e) ? "buffer" : U(e) ? "typed-array" : B(e) ? "array-buffer" : Array.isArray(e) ? "array" : typeof e
            }

            function j(e) {
                return function(e) {
                    return !("string" !== typeof e || !new RegExp(/^[01]+$/).test(e)) && e.length % 8 === 0
                }(e) ? "binary" : L(e) ? a : u
            }

            function q(...e) {
                return c.concat(e)
            }

            function J(...e) {
                let t = [];
                return e.forEach((e => t = t.concat(Array.from(e)))), new Uint8Array([...t])
            }

            function H(e, t = 8) {
                const n = F(e).match(new RegExp(`.{${t}}`, "gi"));
                return Array.from(n || [])
            }

            function F(e, t = 8, n = "0") {
                return function(e, t, n = "0") {
                    return K(e, t, !0, n)
                }(e, function(e, t = 8) {
                    const n = e % t;
                    return n ? (e - n) / t * t + t : e
                }(e.length, t), n)
            }

            function W(e) {
                return e.replace(/^0x/, "")
            }

            function z(e) {
                return e.startsWith("0x") ? e : `0x${e}`
            }

            function $(e) {
                return (e = F(e = W(e), 2)) && (e = z(e)), e
            }

            function V(e) {
                const t = e.startsWith("0x");
                return e = (e = W(e)).startsWith(l) ? e.substring(1) : e, t ? z(e) : e
            }

            function K(e, t, n, r = "0") {
                const o = t - e.length;
                let i = e;
                if (o > 0) {
                    const t = r.repeat(o);
                    i = n ? t + e : e + t
                }
                return i
            }
        },
        40926: function(e, t, n) {
            "use strict";

            function r() {
                return (null === n.g || void 0 === n.g ? void 0 : n.g.crypto) || (null === n.g || void 0 === n.g ? void 0 : n.g.msCrypto) || {}
            }

            function o() {
                const e = r();
                return e.subtle || e.webkitSubtle
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isBrowserCryptoAvailable = t.getSubtleCrypto = t.getBrowerCrypto = void 0, t.getBrowerCrypto = r, t.getSubtleCrypto = o, t.isBrowserCryptoAvailable = function() {
                return !!r() && !!o()
            }
        },
        88618: function(e, t, n) {
            "use strict";
            var r = n(34155);

            function o() {
                return "undefined" === typeof document && "undefined" !== typeof navigator && "ReactNative" === navigator.product
            }

            function i() {
                return "undefined" !== typeof r && "undefined" !== typeof r.versions && "undefined" !== typeof r.versions.node
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isBrowser = t.isNode = t.isReactNative = void 0, t.isReactNative = o, t.isNode = i, t.isBrowser = function() {
                return !o() && !i()
            }
        },
        1468: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const r = n(70655);
            r.__exportStar(n(40926), t), r.__exportStar(n(88618), t)
        },
        35885: function(e, t, n) {
            "use strict";
            n.d(t, {
                IJsonRpcProvider: function() {
                    return o.x0
                }
            });
            var r = n(74057);
            n.o(r, "IJsonRpcProvider") && n.d(t, {
                IJsonRpcProvider: function() {
                    return r.IJsonRpcProvider
                }
            }), n.o(r, "isHttpUrl") && n.d(t, {
                isHttpUrl: function() {
                    return r.isHttpUrl
                }
            }), n.o(r, "isJsonRpcError") && n.d(t, {
                isJsonRpcError: function() {
                    return r.isJsonRpcError
                }
            }), n.o(r, "isJsonRpcResponse") && n.d(t, {
                isJsonRpcResponse: function() {
                    return r.isJsonRpcResponse
                }
            });
            var o = n(73416),
                i = n(71948);
            n.o(i, "isHttpUrl") && n.d(t, {
                isHttpUrl: function() {
                    return i.isHttpUrl
                }
            }), n.o(i, "isJsonRpcError") && n.d(t, {
                isJsonRpcError: function() {
                    return i.isJsonRpcError
                }
            }), n.o(i, "isJsonRpcResponse") && n.d(t, {
                isJsonRpcResponse: function() {
                    return i.isJsonRpcResponse
                }
            })
        },
        74057: function() {},
        73416: function(e, t, n) {
            "use strict";
            n.d(t, {
                XR: function() {
                    return o
                },
                x0: function() {
                    return s
                }
            });
            class r {}
            class o extends r {
                constructor(e) {
                    super()
                }
            }
            class i extends r {
                constructor() {
                    super()
                }
            }
            class s extends i {
                constructor(e) {
                    super()
                }
            }
        },
        71948: function() {},
        79806: function(e, t, n) {
            "use strict";
            n.d(t, {
                O4: function() {
                    return r
                },
                CA: function() {
                    return o
                },
                dQ: function() {
                    return i
                },
                xK: function() {
                    return s
                },
                JV: function() {
                    return c
                }
            });
            const r = "INTERNAL_ERROR",
                o = "SERVER_ERROR",
                i = [-32700, -32600, -32601, -32602, -32603],
                s = {
                    PARSE_ERROR: {
                        code: -32700,
                        message: "Parse error"
                    },
                    INVALID_REQUEST: {
                        code: -32600,
                        message: "Invalid Request"
                    },
                    METHOD_NOT_FOUND: {
                        code: -32601,
                        message: "Method not found"
                    },
                    INVALID_PARAMS: {
                        code: -32602,
                        message: "Invalid params"
                    },
                    [r]: {
                        code: -32603,
                        message: "Internal error"
                    },
                    [o]: {
                        code: -32e3,
                        message: "Server error"
                    }
                },
                c = o
        },
        9698: function(e, t, n) {
            "use strict";
            var r = n(1468);
            n.o(r, "IJsonRpcProvider") && n.d(t, {
                IJsonRpcProvider: function() {
                    return r.IJsonRpcProvider
                }
            }), n.o(r, "formatJsonRpcError") && n.d(t, {
                formatJsonRpcError: function() {
                    return r.formatJsonRpcError
                }
            }), n.o(r, "formatJsonRpcRequest") && n.d(t, {
                formatJsonRpcRequest: function() {
                    return r.formatJsonRpcRequest
                }
            }), n.o(r, "isHttpUrl") && n.d(t, {
                isHttpUrl: function() {
                    return r.isHttpUrl
                }
            }), n.o(r, "isJsonRpcError") && n.d(t, {
                isJsonRpcError: function() {
                    return r.isJsonRpcError
                }
            }), n.o(r, "isJsonRpcResponse") && n.d(t, {
                isJsonRpcResponse: function() {
                    return r.isJsonRpcResponse
                }
            }), n.o(r, "payloadId") && n.d(t, {
                payloadId: function() {
                    return r.payloadId
                }
            })
        },
        90110: function(e, t, n) {
            "use strict";
            n.d(t, {
                i5: function() {
                    return o
                },
                by: function() {
                    return i
                },
                L2: function() {
                    return s
                },
                CX: function() {
                    return c
                }
            });
            var r = n(79806);

            function o(e) {
                return r.dQ.includes(e)
            }

            function i(e) {
                return Object.keys(r.xK).includes(e) ? r.xK[e] : r.xK[r.JV]
            }

            function s(e) {
                const t = Object.values(r.xK).find((t => t.code === e));
                return t || r.xK[r.JV]
            }

            function c(e, t, n) {
                return e.message.includes("getaddrinfo ENOTFOUND") || e.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${n} RPC url at ${t}`) : e
            }
        },
        71937: function(e, t, n) {
            "use strict";
            n.d(t, {
                o0: function() {
                    return i
                },
                sT: function() {
                    return s
                },
                RI: function() {
                    return c
                }
            });
            var r = n(90110),
                o = n(79806);

            function i() {
                return Date.now() * Math.pow(10, 3) + Math.floor(Math.random() * Math.pow(10, 3))
            }

            function s(e, t, n) {
                return {
                    id: n || i(),
                    jsonrpc: "2.0",
                    method: e,
                    params: t
                }
            }

            function c(e, t, n) {
                return {
                    id: e,
                    jsonrpc: "2.0",
                    error: a(t, n)
                }
            }

            function a(e, t) {
                return "undefined" === typeof e ? (0, r.by)(o.O4) : ("string" === typeof e && (e = Object.assign(Object.assign({}, (0, r.by)(o.CA)), {
                    message: e
                })), "undefined" !== typeof t && (e.data = t), (0, r.i5)(e.code) && (e = (0, r.L2)(e.code)), e)
            }
        },
        56186: function(e, t, n) {
            "use strict";
            n.d(t, {
                CX: function() {
                    return r.CX
                },
                formatJsonRpcError: function() {
                    return i.RI
                },
                formatJsonRpcRequest: function() {
                    return i.sT
                },
                payloadId: function() {
                    return i.o0
                },
                isHttpUrl: function() {
                    return c.jK
                },
                isJsonRpcError: function() {
                    return a.jg
                },
                isJsonRpcResponse: function() {
                    return a.u
                }
            });
            n(79806);
            var r = n(90110),
                o = n(9698);
            n.o(o, "IJsonRpcProvider") && n.d(t, {
                IJsonRpcProvider: function() {
                    return o.IJsonRpcProvider
                }
            }), n.o(o, "formatJsonRpcError") && n.d(t, {
                formatJsonRpcError: function() {
                    return o.formatJsonRpcError
                }
            }), n.o(o, "formatJsonRpcRequest") && n.d(t, {
                formatJsonRpcRequest: function() {
                    return o.formatJsonRpcRequest
                }
            }), n.o(o, "isHttpUrl") && n.d(t, {
                isHttpUrl: function() {
                    return o.isHttpUrl
                }
            }), n.o(o, "isJsonRpcError") && n.d(t, {
                isJsonRpcError: function() {
                    return o.isJsonRpcError
                }
            }), n.o(o, "isJsonRpcResponse") && n.d(t, {
                isJsonRpcResponse: function() {
                    return o.isJsonRpcResponse
                }
            }), n.o(o, "payloadId") && n.d(t, {
                payloadId: function() {
                    return o.payloadId
                }
            });
            var i = n(71937),
                s = n(26043);
            n.o(s, "IJsonRpcProvider") && n.d(t, {
                IJsonRpcProvider: function() {
                    return s.IJsonRpcProvider
                }
            }), n.o(s, "isHttpUrl") && n.d(t, {
                isHttpUrl: function() {
                    return s.isHttpUrl
                }
            }), n.o(s, "isJsonRpcError") && n.d(t, {
                isJsonRpcError: function() {
                    return s.isJsonRpcError
                }
            }), n.o(s, "isJsonRpcResponse") && n.d(t, {
                isJsonRpcResponse: function() {
                    return s.isJsonRpcResponse
                }
            });
            var c = n(46119),
                a = n(84733)
        },
        26043: function(e, t, n) {
            "use strict";
            n.d(t, {
                IJsonRpcProvider: function() {
                    return r.IJsonRpcProvider
                }
            });
            var r = n(35885);
            n.o(r, "isHttpUrl") && n.d(t, {
                isHttpUrl: function() {
                    return r.isHttpUrl
                }
            }), n.o(r, "isJsonRpcError") && n.d(t, {
                isJsonRpcError: function() {
                    return r.isJsonRpcError
                }
            }), n.o(r, "isJsonRpcResponse") && n.d(t, {
                isJsonRpcResponse: function() {
                    return r.isJsonRpcResponse
                }
            })
        },
        46119: function(e, t, n) {
            "use strict";
            n.d(t, {
                jK: function() {
                    return o
                }
            });

            function r(e, t) {
                const n = function(e) {
                    const t = e.match(new RegExp(/^\w+:/, "gi"));
                    if (t && t.length) return t[0]
                }(e);
                return "undefined" !== typeof n && new RegExp(t).test(n)
            }

            function o(e) {
                return r(e, "^https?:")
            }
        },
        84733: function(e, t, n) {
            "use strict";

            function r(e) {
                return "object" === typeof e && "id" in e && "jsonrpc" in e && "2.0" === e.jsonrpc
            }

            function o(e) {
                return r(e) && (function(e) {
                    return "result" in e
                }(e) || i(e))
            }

            function i(e) {
                return "error" in e
            }
            n.d(t, {
                u: function() {
                    return o
                },
                jg: function() {
                    return i
                }
            })
        },
        55727: function(e, t, n) {
            var r = n(34155);

            function o(e) {
                return e && "object" === typeof e && "default" in e ? e.default : e
            }
            var i = n(83906),
                s = o(n(92592)),
                c = o(n(20640)),
                a = n(57423);
            "undefined" !== typeof Symbol && (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))), "undefined" !== typeof Symbol && (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")));
            var u = "walletconnect-wrapper",
                l = "walletconnect-style-sheet",
                f = "walletconnect-qrcode-modal",
                d = "walletconnect-qrcode-text";

            function h(e) {
                return a.createElement("div", {
                    className: "walletconnect-modal__header"
                }, a.createElement("img", {
                    src: "data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='300px' height='185px' viewBox='0 0 300 185' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch --%3E %3Ctitle%3EWalletConnect%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='walletconnect-logo-alt' fill='%233B99FC' fill-rule='nonzero'%3E %3Cpath d='M61.4385429,36.2562612 C110.349767,-11.6319051 189.65053,-11.6319051 238.561752,36.2562612 L244.448297,42.0196786 C246.893858,44.4140867 246.893858,48.2961898 244.448297,50.690599 L224.311602,70.406102 C223.088821,71.6033071 221.106302,71.6033071 219.883521,70.406102 L211.782937,62.4749541 C177.661245,29.0669724 122.339051,29.0669724 88.2173582,62.4749541 L79.542302,70.9685592 C78.3195204,72.1657633 76.337001,72.1657633 75.1142214,70.9685592 L54.9775265,51.2530561 C52.5319653,48.8586469 52.5319653,44.9765439 54.9775265,42.5821357 L61.4385429,36.2562612 Z M280.206339,77.0300061 L298.128036,94.5769031 C300.573585,96.9713 300.573599,100.85338 298.128067,103.247793 L217.317896,182.368927 C214.872352,184.763353 210.907314,184.76338 208.461736,182.368989 C208.461726,182.368979 208.461714,182.368967 208.461704,182.368957 L151.107561,126.214385 C150.496171,125.615783 149.504911,125.615783 148.893521,126.214385 C148.893517,126.214389 148.893514,126.214393 148.89351,126.214396 L91.5405888,182.368927 C89.095052,184.763359 85.1300133,184.763399 82.6844276,182.369014 C82.6844133,182.369 82.684398,182.368986 82.6843827,182.36897 L1.87196327,103.246785 C-0.573596939,100.852377 -0.573596939,96.9702735 1.87196327,94.5758653 L19.7936929,77.028998 C22.2392531,74.6345898 26.2042918,74.6345898 28.6498531,77.028998 L86.0048306,133.184355 C86.6162214,133.782957 87.6074796,133.782957 88.2188704,133.184355 C88.2188796,133.184346 88.2188878,133.184338 88.2188969,133.184331 L145.571,77.028998 C148.016505,74.6345347 151.981544,74.6344449 154.427161,77.028798 C154.427195,77.0288316 154.427229,77.0288653 154.427262,77.028899 L211.782164,133.184331 C212.393554,133.782932 213.384814,133.782932 213.996204,133.184331 L271.350179,77.0300061 C273.79574,74.6355969 277.760778,74.6355969 280.206339,77.0300061 Z' id='WalletConnect'%3E%3C/path%3E %3C/g%3E %3C/g%3E %3C/svg%3E",
                    className: "walletconnect-modal__headerLogo"
                }), a.createElement("p", null, "WalletConnect"), a.createElement("div", {
                    className: "walletconnect-modal__close__wrapper",
                    onClick: e.onClose
                }, a.createElement("div", {
                    id: "walletconnect-qrcode-close",
                    className: "walletconnect-modal__close__icon"
                }, a.createElement("div", {
                    className: "walletconnect-modal__close__line1"
                }), a.createElement("div", {
                    className: "walletconnect-modal__close__line2"
                }))))
            }

            function p(e) {
                return a.createElement("a", {
                    className: "walletconnect-connect__button",
                    href: e.href,
                    id: "walletconnect-connect-button-" + e.name,
                    onClick: e.onClick,
                    rel: "noopener noreferrer",
                    style: {
                        backgroundColor: e.color
                    },
                    target: "_blank"
                }, e.name)
            }

            function _(e) {
                var t = e.color,
                    n = e.href,
                    r = e.name,
                    o = e.logo,
                    i = e.onClick;
                return a.createElement("a", {
                    className: "walletconnect-modal__base__row",
                    href: n,
                    onClick: i,
                    rel: "noopener noreferrer",
                    target: "_blank"
                }, a.createElement("h3", {
                    className: "walletconnect-modal__base__row__h3"
                }, r), a.createElement("div", {
                    className: "walletconnect-modal__base__row__right"
                }, a.createElement("div", {
                    className: "walletconnect-modal__base__row__right__app-icon",
                    style: {
                        background: "url('" + o + "') " + t,
                        backgroundSize: "100%"
                    }
                }), a.createElement("img", {
                    src: "data:image/svg+xml,%3Csvg width='8' height='18' viewBox='0 0 8 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0.586301 0.213898C0.150354 0.552968 0.0718197 1.18124 0.41089 1.61719L5.2892 7.88931C5.57007 8.25042 5.57007 8.75608 5.2892 9.11719L0.410889 15.3893C0.071819 15.8253 0.150353 16.4535 0.586301 16.7926C1.02225 17.1317 1.65052 17.0531 1.98959 16.6172L6.86791 10.3451C7.7105 9.26174 7.7105 7.74476 6.86791 6.66143L1.98959 0.38931C1.65052 -0.0466374 1.02225 -0.125172 0.586301 0.213898Z' fill='%233C4252'/%3E %3C/svg%3E",
                    className: "walletconnect-modal__base__row__right__caret"
                })))
            }

            function g(e) {
                var t = e.color,
                    n = e.href,
                    r = e.name,
                    o = e.logo,
                    i = e.onClick,
                    s = window.innerWidth < 768 ? (r.length > 8 ? 2.5 : 2.7) + "vw" : "inherit";
                return a.createElement("a", {
                    className: "walletconnect-connect__button__icon_anchor",
                    href: n,
                    onClick: i,
                    rel: "noopener noreferrer",
                    target: "_blank"
                }, a.createElement("div", {
                    className: "walletconnect-connect__button__icon",
                    style: {
                        background: "url('" + o + "') " + t,
                        backgroundSize: "100%"
                    }
                }), a.createElement("div", {
                    style: {
                        fontSize: s
                    },
                    className: "walletconnect-connect__button__text"
                }, r))
            }

            function m(e) {
                var t = i.isAndroid(),
                    n = a.useState(""),
                    r = n[0],
                    o = n[1],
                    s = a.useState(""),
                    c = s[0],
                    u = s[1],
                    l = a.useState(1),
                    f = l[0],
                    h = l[1],
                    m = c ? e.links.filter((function(e) {
                        return e.name.toLowerCase().includes(c.toLowerCase())
                    })) : e.links,
                    y = e.errorMessage,
                    v = c || m.length > 5,
                    w = Math.ceil(m.length / 12),
                    b = [12 * (f - 1) + 1, 12 * f],
                    E = m.length ? m.filter((function(e, t) {
                        return t + 1 >= b[0] && t + 1 <= b[1]
                    })) : [],
                    R = !(t || !(w > 1)),
                    S = void 0;
                return a.createElement("div", null, a.createElement("p", {
                    id: d,
                    className: "walletconnect-qrcode__text"
                }, t ? e.text.connect_mobile_wallet : e.text.choose_preferred_wallet), !t && a.createElement("input", {
                    className: "walletconnect-search__input",
                    placeholder: "Search",
                    value: r,
                    onChange: function(e) {
                        o(e.target.value), clearTimeout(S), e.target.value ? S = setTimeout((function() {
                            u(e.target.value), h(1)
                        }), 1e3) : (o(""), u(""), h(1))
                    }
                }), a.createElement("div", {
                    className: "walletconnect-connect__buttons__wrapper" + (t ? "__android" : v && m.length ? "__wrap" : "")
                }, t ? a.createElement(p, {
                    name: e.text.connect,
                    color: "rgb(64, 153, 255)",
                    href: e.uri,
                    onClick: a.useCallback((function() {
                        i.saveMobileLinkInfo({
                            name: "Unknown",
                            href: e.uri
                        })
                    }), [])
                }) : E.length ? E.map((function(t) {
                    var n = t.color,
                        r = t.name,
                        o = t.shortName,
                        s = t.logo,
                        c = i.formatIOSMobile(e.uri, t),
                        u = a.useCallback((function() {
                            i.saveMobileLinkInfo({
                                name: r,
                                href: c
                            })
                        }), [E]);
                    return v ? a.createElement(g, {
                        color: n,
                        href: c,
                        name: o || r,
                        logo: s,
                        onClick: u
                    }) : a.createElement(_, {
                        color: n,
                        href: c,
                        name: r,
                        logo: s,
                        onClick: u
                    })
                })) : a.createElement(a.Fragment, null, a.createElement("p", null, y.length ? e.errorMessage : e.links.length && !m.length ? e.text.no_wallets_found : e.text.loading))), R && a.createElement("div", {
                    className: "walletconnect-modal__footer"
                }, Array(w).fill(0).map((function(e, t) {
                    var n = t + 1,
                        r = f === n;
                    return a.createElement("a", {
                        style: {
                            margin: "auto 10px",
                            fontWeight: r ? "bold" : "normal"
                        },
                        onClick: function() {
                            return h(n)
                        }
                    }, n)
                }))))
            }

            function y(e) {
                var t = !!e.message.trim();
                return a.createElement("div", {
                    className: "walletconnect-qrcode__notification" + (t ? " notification__show" : "")
                }, e.message)
            }

            function v(e) {
                var t = a.useState(""),
                    n = t[0],
                    r = t[1],
                    o = a.useState(""),
                    i = o[0],
                    u = o[1];
                a.useEffect((function() {
                    try {
                        return Promise.resolve(function(e) {
                            try {
                                var t = "";
                                return Promise.resolve(s.toString(e, {
                                    margin: 0,
                                    type: "svg"
                                })).then((function(e) {
                                    return "string" === typeof e && (t = e.replace("<svg", '<svg class="walletconnect-qrcode__image"')), t
                                }))
                            } catch (n) {
                                return Promise.reject(n)
                            }
                        }(e.uri)).then((function(e) {
                            u(e)
                        }))
                    } catch (t) {
                        Promise.reject(t)
                    }
                }), []);
                return a.createElement("div", null, a.createElement("p", {
                    id: d,
                    className: "walletconnect-qrcode__text"
                }, e.text.scan_qrcode_with_wallet), a.createElement("div", {
                    dangerouslySetInnerHTML: {
                        __html: i
                    }
                }), a.createElement("div", {
                    className: "walletconnect-modal__footer"
                }, a.createElement("a", {
                    onClick: function() {
                        c(e.uri) ? (r(e.text.copied_to_clipboard), setInterval((function() {
                            return r("")
                        }), 1200)) : (r("Error"), setInterval((function() {
                            return r("")
                        }), 1200))
                    }
                }, e.text.copy_to_clipboard)), a.createElement(y, {
                    message: n
                }))
            }

            function w(e) {
                var t = i.isAndroid(),
                    n = i.isMobile(),
                    r = n ? e.qrcodeModalOptions && e.qrcodeModalOptions.mobileLinks ? e.qrcodeModalOptions.mobileLinks : void 0 : e.qrcodeModalOptions && e.qrcodeModalOptions.desktopLinks ? e.qrcodeModalOptions.desktopLinks : void 0,
                    o = a.useState(!1),
                    s = o[0],
                    c = o[1],
                    u = a.useState(!1),
                    l = u[0],
                    d = u[1],
                    p = a.useState(!n),
                    _ = p[0],
                    g = p[1],
                    y = {
                        mobile: n,
                        text: e.text,
                        uri: e.uri,
                        qrcodeModalOptions: e.qrcodeModalOptions
                    },
                    w = a.useState(""),
                    b = w[0],
                    E = w[1],
                    R = a.useState(!1),
                    S = R[0],
                    x = R[1],
                    C = a.useState([]),
                    I = C[0],
                    O = C[1],
                    k = a.useState(""),
                    T = k[0],
                    N = k[1],
                    M = function() {
                        l || s || r && !r.length || I.length > 0 || a.useEffect((function() {
                            ! function() {
                                try {
                                    if (t) return Promise.resolve();
                                    c(!0);
                                    var o = function(e, t) {
                                        try {
                                            var n = e()
                                        } catch (r) {
                                            return t(r)
                                        }
                                        return n && n.then ? n.then(void 0, t) : n
                                    }((function() {
                                        var t = e.qrcodeModalOptions && e.qrcodeModalOptions.registryUrl ? e.qrcodeModalOptions.registryUrl : i.getWalletRegistryUrl();
                                        return Promise.resolve(fetch(t)).then((function(t) {
                                            return Promise.resolve(t.json()).then((function(t) {
                                                var o = t.listings,
                                                    s = n ? "mobile" : "desktop",
                                                    a = i.getMobileLinkRegistry(i.formatMobileRegistry(o, s), r);
                                                c(!1), d(!0), N(a.length ? "" : e.text.no_supported_wallets), O(a);
                                                var u = 1 === a.length;
                                                u && (E(i.formatIOSMobile(e.uri, a[0])), g(!0)), x(u)
                                            }))
                                        }))
                                    }), (function(t) {
                                        c(!1), d(!0), N(e.text.something_went_wrong), console.error(t)
                                    }));
                                    Promise.resolve(o && o.then ? o.then((function() {})) : void 0)
                                } catch (s) {
                                    return Promise.reject(s)
                                }
                            }()
                        }))
                    };
                M();
                var A = n ? _ : !_;
                return a.createElement("div", {
                    id: f,
                    className: "walletconnect-qrcode__base animated fadeIn"
                }, a.createElement("div", {
                    className: "walletconnect-modal__base"
                }, a.createElement(h, {
                    onClose: e.onClose
                }), S && _ ? a.createElement("div", {
                    className: "walletconnect-modal__single_wallet"
                }, a.createElement("a", {
                    onClick: function() {
                        return i.saveMobileLinkInfo({
                            name: I[0].name,
                            href: b
                        })
                    },
                    href: b,
                    rel: "noopener noreferrer",
                    target: "_blank"
                }, e.text.connect_with + " " + (S ? I[0].name : "") + " \u203a")) : t || s || !s && I.length ? a.createElement("div", {
                    className: "walletconnect-modal__mobile__toggle" + (A ? " right__selected" : "")
                }, a.createElement("div", {
                    className: "walletconnect-modal__mobile__toggle_selector"
                }), n ? a.createElement(a.Fragment, null, a.createElement("a", {
                    onClick: function() {
                        return g(!1), M()
                    }
                }, e.text.mobile), a.createElement("a", {
                    onClick: function() {
                        return g(!0)
                    }
                }, e.text.qrcode)) : a.createElement(a.Fragment, null, a.createElement("a", {
                    onClick: function() {
                        return g(!0)
                    }
                }, e.text.qrcode), a.createElement("a", {
                    onClick: function() {
                        return g(!1), M()
                    }
                }, e.text.desktop))) : null, a.createElement("div", null, _ || !t && !s && !I.length ? a.createElement(v, Object.assign({}, y)) : a.createElement(m, Object.assign({}, y, {
                    links: I,
                    errorMessage: T
                })))))
            }
            var b = {
                de: {
                    choose_preferred_wallet: "W\xe4hle bevorzugte Wallet",
                    connect_mobile_wallet: "Verbinde mit Mobile Wallet",
                    scan_qrcode_with_wallet: "Scanne den QR-code mit einer WalletConnect kompatiblen Wallet",
                    connect: "Verbinden",
                    qrcode: "QR-Code",
                    mobile: "Mobile",
                    desktop: "Desktop",
                    copy_to_clipboard: "In die Zwischenablage kopieren",
                    copied_to_clipboard: "In die Zwischenablage kopiert!",
                    connect_with: "Verbinden mit Hilfe von",
                    loading: "Laden...",
                    something_went_wrong: "Etwas ist schief gelaufen",
                    no_supported_wallets: "Es gibt noch keine unterst\xfctzten Wallet",
                    no_wallets_found: "keine Wallet gefunden"
                },
                en: {
                    choose_preferred_wallet: "Choose your preferred wallet",
                    connect_mobile_wallet: "Connect to Mobile Wallet",
                    scan_qrcode_with_wallet: "Scan QR code with a WalletConnect-compatible wallet",
                    connect: "Connect",
                    qrcode: "QR Code",
                    mobile: "Mobile",
                    desktop: "Desktop",
                    copy_to_clipboard: "Copy to clipboard",
                    copied_to_clipboard: "Copied to clipboard!",
                    connect_with: "Connect with",
                    loading: "Loading...",
                    something_went_wrong: "Something went wrong",
                    no_supported_wallets: "There are no supported wallets yet",
                    no_wallets_found: "No wallets found"
                },
                es: {
                    choose_preferred_wallet: "Elige tu billetera preferida",
                    connect_mobile_wallet: "Conectar a billetera m\xf3vil",
                    scan_qrcode_with_wallet: "Escanea el c\xf3digo QR con una billetera compatible con WalletConnect",
                    connect: "Conectar",
                    qrcode: "C\xf3digo QR",
                    mobile: "M\xf3vil",
                    desktop: "Desktop",
                    copy_to_clipboard: "Copiar",
                    copied_to_clipboard: "Copiado!",
                    connect_with: "Conectar mediante",
                    loading: "Cargando...",
                    something_went_wrong: "Algo sali\xf3 mal",
                    no_supported_wallets: "Todav\xeda no hay billeteras compatibles",
                    no_wallets_found: "No se encontraron billeteras"
                },
                fr: {
                    choose_preferred_wallet: "Choisissez votre portefeuille pr\xe9f\xe9r\xe9",
                    connect_mobile_wallet: "Se connecter au portefeuille mobile",
                    scan_qrcode_with_wallet: "Scannez le QR code avec un portefeuille compatible WalletConnect",
                    connect: "Se connecter",
                    qrcode: "QR Code",
                    mobile: "Mobile",
                    desktop: "Desktop",
                    copy_to_clipboard: "Copier",
                    copied_to_clipboard: "Copi\xe9!",
                    connect_with: "Connectez-vous \xe0 l'aide de",
                    loading: "Chargement...",
                    something_went_wrong: "Quelque chose a mal tourn\xe9",
                    no_supported_wallets: "Il n'y a pas encore de portefeuilles pris en charge",
                    no_wallets_found: "Aucun portefeuille trouv\xe9"
                },
                ko: {
                    choose_preferred_wallet: "\uc6d0\ud558\ub294 \uc9c0\uac11\uc744 \uc120\ud0dd\ud558\uc138\uc694",
                    connect_mobile_wallet: "\ubaa8\ubc14\uc77c \uc9c0\uac11\uacfc \uc5f0\uacb0",
                    scan_qrcode_with_wallet: "WalletConnect \uc9c0\uc6d0 \uc9c0\uac11\uc5d0\uc11c QR\ucf54\ub4dc\ub97c \uc2a4\uce94\ud558\uc138\uc694",
                    connect: "\uc5f0\uacb0",
                    qrcode: "QR \ucf54\ub4dc",
                    mobile: "\ubaa8\ubc14\uc77c",
                    desktop: "\ub370\uc2a4\ud06c\ud0d1",
                    copy_to_clipboard: "\ud074\ub9bd\ubcf4\ub4dc\uc5d0 \ubcf5\uc0ac",
                    copied_to_clipboard: "\ud074\ub9bd\ubcf4\ub4dc\uc5d0 \ubcf5\uc0ac\ub418\uc5c8\uc2b5\ub2c8\ub2e4!",
                    connect_with: "\uc640 \uc5f0\uacb0\ud558\ub2e4",
                    loading: "\ub85c\ub4dc \uc911...",
                    something_went_wrong: "\ubb38\uc81c\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4.",
                    no_supported_wallets: "\uc544\uc9c1 \uc9c0\uc6d0\ub418\ub294 \uc9c0\uac11\uc774 \uc5c6\uc2b5\ub2c8\ub2e4",
                    no_wallets_found: "\uc9c0\uac11\uc744 \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4"
                },
                pt: {
                    choose_preferred_wallet: "Escolha sua carteira preferida",
                    connect_mobile_wallet: "Conectar-se \xe0 carteira m\xf3vel",
                    scan_qrcode_with_wallet: "Ler o c\xf3digo QR com uma carteira compat\xedvel com WalletConnect",
                    connect: "Conectar",
                    qrcode: "C\xf3digo QR",
                    mobile: "M\xf3vel",
                    desktop: "Desktop",
                    copy_to_clipboard: "Copiar",
                    copied_to_clipboard: "Copiado!",
                    connect_with: "Ligar por meio de",
                    loading: "Carregamento...",
                    something_went_wrong: "Algo correu mal",
                    no_supported_wallets: "Ainda n\xe3o h\xe1 carteiras suportadas",
                    no_wallets_found: "Nenhuma carteira encontrada"
                },
                zh: {
                    choose_preferred_wallet: "\u9009\u62e9\u4f60\u7684\u94b1\u5305",
                    connect_mobile_wallet: "\u8fde\u63a5\u81f3\u79fb\u52a8\u7aef\u94b1\u5305",
                    scan_qrcode_with_wallet: "\u4f7f\u7528\u517c\u5bb9 WalletConnect \u7684\u94b1\u5305\u626b\u63cf\u4e8c\u7ef4\u7801",
                    connect: "\u8fde\u63a5",
                    qrcode: "\u4e8c\u7ef4\u7801",
                    mobile: "\u79fb\u52a8",
                    desktop: "\u684c\u9762",
                    copy_to_clipboard: "\u590d\u5236\u5230\u526a\u8d34\u677f",
                    copied_to_clipboard: "\u590d\u5236\u5230\u526a\u8d34\u677f\u6210\u529f\uff01",
                    connect_with: "\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u8fde\u63a5",
                    loading: "\u6b63\u5728\u52a0\u8f7d...",
                    something_went_wrong: "\u51fa\u4e86\u95ee\u9898",
                    no_supported_wallets: "\u76ee\u524d\u8fd8\u6ca1\u6709\u652f\u6301\u7684\u94b1\u5305",
                    no_wallets_found: "\u6ca1\u6709\u627e\u5230\u94b1\u5305"
                },
                fa: {
                    choose_preferred_wallet: "\u06a9\u06cc\u0641 \u067e\u0648\u0644 \u0645\u0648\u0631\u062f \u0646\u0638\u0631 \u062e\u0648\u062f \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f",
                    connect_mobile_wallet: "\u0628\u0647 \u06a9\u06cc\u0641 \u067e\u0648\u0644 \u0645\u0648\u0628\u0627\u06cc\u0644 \u0648\u0635\u0644 \u0634\u0648\u06cc\u062f",
                    scan_qrcode_with_wallet: "\u06a9\u062f QR \u0631\u0627 \u0628\u0627 \u06cc\u06a9 \u06a9\u06cc\u0641 \u067e\u0648\u0644 \u0633\u0627\u0632\u06af\u0627\u0631 \u0628\u0627 WalletConnect \u0627\u0633\u06a9\u0646 \u06a9\u0646\u06cc\u062f",
                    connect: "\u0627\u062a\u0635\u0627\u0644",
                    qrcode: "\u06a9\u062f QR",
                    mobile: "\u0633\u06cc\u0627\u0631",
                    desktop: "\u062f\u0633\u06a9\u062a\u0627\u067e",
                    copy_to_clipboard: "\u06a9\u067e\u06cc \u0628\u0647 \u06a9\u0644\u06cc\u067e \u0628\u0648\u0631\u062f",
                    copied_to_clipboard: "\u062f\u0631 \u06a9\u0644\u06cc\u067e \u0628\u0648\u0631\u062f \u06a9\u067e\u06cc \u0634\u062f!",
                    connect_with: "\u0627\u0631\u062a\u0628\u0627\u0637 \u0628\u0627",
                    loading: "...\u0628\u0627\u0631\u06af\u0630\u0627\u0631\u06cc",
                    something_went_wrong: "\u0645\u0634\u06a9\u0644\u06cc \u067e\u06cc\u0634 \u0622\u0645\u062f",
                    no_supported_wallets: "\u0647\u0646\u0648\u0632 \u0647\u06cc\u0686 \u06a9\u06cc\u0641 \u067e\u0648\u0644 \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc \u0634\u062f\u0647 \u0627\u06cc \u0648\u062c\u0648\u062f \u0646\u062f\u0627\u0631\u062f",
                    no_wallets_found: "\u0647\u06cc\u0686 \u06a9\u06cc\u0641 \u067e\u0648\u0644\u06cc \u067e\u06cc\u062f\u0627 \u0646\u0634\u062f"
                }
            };

            function E() {
                var e = i.getDocumentOrThrow(),
                    t = e.getElementById(f);
                t && (t.className = t.className.replace("fadeIn", "fadeOut"), setTimeout((function() {
                    var t = e.getElementById(u);
                    t && e.body.removeChild(t)
                }), 300))
            }

            function R(e) {
                return function() {
                    E(), e && e()
                }
            }

            function S() {
                var e = i.getNavigatorOrThrow().language.split("-")[0] || "en";
                return b[e] || b.en
            }

            function x(e, t, n) {
                ! function() {
                    var e = i.getDocumentOrThrow(),
                        t = e.getElementById(l);
                    t && e.head.removeChild(t);
                    var n = e.createElement("style");
                    n.setAttribute("id", l), n.innerText = ':root {\n  --animation-duration: 300ms;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n.animated {\n  animation-duration: var(--animation-duration);\n  animation-fill-mode: both;\n}\n\n.fadeIn {\n  animation-name: fadeIn;\n}\n\n.fadeOut {\n  animation-name: fadeOut;\n}\n\n#walletconnect-wrapper {\n  -webkit-user-select: none;\n  align-items: center;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  left: 0;\n  pointer-events: none;\n  position: fixed;\n  top: 0;\n  user-select: none;\n  width: 100%;\n  z-index: 99999999999999;\n}\n\n.walletconnect-modal__headerLogo {\n  height: 21px;\n}\n\n.walletconnect-modal__header p {\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n  align-items: flex-start;\n  display: flex;\n  flex: 1;\n  margin-left: 5px;\n}\n\n.walletconnect-modal__close__wrapper {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  z-index: 10000;\n  background: white;\n  border-radius: 26px;\n  padding: 6px;\n  box-sizing: border-box;\n  width: 26px;\n  height: 26px;\n  cursor: pointer;\n}\n\n.walletconnect-modal__close__icon {\n  position: relative;\n  top: 7px;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transform: rotate(45deg);\n}\n\n.walletconnect-modal__close__line1 {\n  position: absolute;\n  width: 100%;\n  border: 1px solid rgb(48, 52, 59);\n}\n\n.walletconnect-modal__close__line2 {\n  position: absolute;\n  width: 100%;\n  border: 1px solid rgb(48, 52, 59);\n  transform: rotate(90deg);\n}\n\n.walletconnect-qrcode__base {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  background: rgba(37, 41, 46, 0.95);\n  height: 100%;\n  left: 0;\n  pointer-events: auto;\n  position: fixed;\n  top: 0;\n  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);\n  width: 100%;\n  will-change: opacity;\n  padding: 40px;\n  box-sizing: border-box;\n}\n\n.walletconnect-qrcode__text {\n  color: rgba(60, 66, 82, 0.6);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.1875em;\n  margin: 10px 0 20px 0;\n  text-align: center;\n  width: 100%;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-qrcode__text {\n    font-size: 4vw;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-qrcode__text {\n    font-size: 14px;\n  }\n}\n\n.walletconnect-qrcode__image {\n  width: calc(100% - 30px);\n  box-sizing: border-box;\n  cursor: none;\n  margin: 0 auto;\n}\n\n.walletconnect-qrcode__notification {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  font-size: 16px;\n  padding: 16px 20px;\n  border-radius: 16px;\n  text-align: center;\n  transition: all 0.1s ease-in-out;\n  background: white;\n  color: black;\n  margin-bottom: -60px;\n  opacity: 0;\n}\n\n.walletconnect-qrcode__notification.notification__show {\n  opacity: 1;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-modal__header {\n    height: 130px;\n  }\n  .walletconnect-modal__base {\n    overflow: auto;\n  }\n}\n\n@media only screen and (min-device-width: 415px) and (max-width: 768px) {\n  #content {\n    max-width: 768px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (min-width: 375px) and (max-width: 415px) {\n  #content {\n    max-width: 414px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (min-width: 320px) and (max-width: 375px) {\n  #content {\n    max-width: 375px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  #content {\n    max-width: 320px;\n    box-sizing: border-box;\n  }\n}\n\n.walletconnect-modal__base {\n  -webkit-font-smoothing: antialiased;\n  background: #ffffff;\n  border-radius: 24px;\n  box-shadow: 0 10px 50px 5px rgba(0, 0, 0, 0.4);\n  font-family: ui-rounded, "SF Pro Rounded", "SF Pro Text", medium-content-sans-serif-font,\n    -apple-system, BlinkMacSystemFont, ui-sans-serif, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,\n    "Open Sans", "Helvetica Neue", sans-serif;\n  margin-top: 41px;\n  padding: 24px 24px 22px;\n  pointer-events: auto;\n  position: relative;\n  text-align: center;\n  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);\n  will-change: transform;\n  overflow: visible;\n  transform: translateY(-50%);\n  top: 50%;\n  max-width: 500px;\n  margin: auto;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-modal__base {\n    padding: 24px 12px;\n  }\n}\n\n.walletconnect-modal__base .hidden {\n  transform: translateY(150%);\n  transition: 0.125s cubic-bezier(0.4, 0, 1, 1);\n}\n\n.walletconnect-modal__header {\n  align-items: center;\n  display: flex;\n  height: 26px;\n  left: 0;\n  justify-content: space-between;\n  position: absolute;\n  top: -42px;\n  width: 100%;\n}\n\n.walletconnect-modal__base .wc-logo {\n  align-items: center;\n  display: flex;\n  height: 26px;\n  margin-top: 15px;\n  padding-bottom: 15px;\n  pointer-events: auto;\n}\n\n.walletconnect-modal__base .wc-logo div {\n  background-color: #3399ff;\n  height: 21px;\n  margin-right: 5px;\n  mask-image: url("images/wc-logo.svg") center no-repeat;\n  width: 32px;\n}\n\n.walletconnect-modal__base .wc-logo p {\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n}\n\n.walletconnect-modal__base h2 {\n  color: rgba(60, 66, 82, 0.6);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.1875em;\n  margin: 0 0 19px 0;\n  text-align: center;\n  width: 100%;\n}\n\n.walletconnect-modal__base__row {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  align-items: center;\n  border-radius: 20px;\n  cursor: pointer;\n  display: flex;\n  height: 56px;\n  justify-content: space-between;\n  padding: 0 15px;\n  position: relative;\n  margin: 0px 0px 8px;\n  text-align: left;\n  transition: 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  will-change: transform;\n  text-decoration: none;\n}\n\n.walletconnect-modal__base__row:hover {\n  background: rgba(60, 66, 82, 0.06);\n}\n\n.walletconnect-modal__base__row:active {\n  background: rgba(60, 66, 82, 0.06);\n  transform: scale(0.975);\n  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n\n.walletconnect-modal__base__row__h3 {\n  color: #25292e;\n  font-size: 20px;\n  font-weight: 700;\n  margin: 0;\n  padding-bottom: 3px;\n}\n\n.walletconnect-modal__base__row__right {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n\n.walletconnect-modal__base__row__right__app-icon {\n  border-radius: 8px;\n  height: 34px;\n  margin: 0 11px 2px 0;\n  width: 34px;\n  background-size: 100%;\n  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);\n}\n\n.walletconnect-modal__base__row__right__caret {\n  height: 18px;\n  opacity: 0.3;\n  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  width: 8px;\n  will-change: opacity;\n}\n\n.walletconnect-modal__base__row:hover .caret,\n.walletconnect-modal__base__row:active .caret {\n  opacity: 0.6;\n}\n\n.walletconnect-modal__mobile__toggle {\n  width: 80%;\n  display: flex;\n  margin: 0 auto;\n  position: relative;\n  overflow: hidden;\n  border-radius: 8px;\n  margin-bottom: 18px;\n  background: #d4d5d9;\n}\n\n.walletconnect-modal__single_wallet {\n  display: flex;\n  justify-content: center;\n  margin-top: 7px;\n  margin-bottom: 18px;\n}\n\n.walletconnect-modal__single_wallet a {\n  cursor: pointer;\n  color: rgb(64, 153, 255);\n  font-size: 21px;\n  font-weight: 800;\n  text-decoration: none !important;\n  margin: 0 auto;\n}\n\n.walletconnect-modal__mobile__toggle_selector {\n  width: calc(50% - 8px);\n  background: white;\n  position: absolute;\n  border-radius: 5px;\n  height: calc(100% - 8px);\n  top: 4px;\n  transition: all 0.2s ease-in-out;\n  transform: translate3d(4px, 0, 0);\n}\n\n.walletconnect-modal__mobile__toggle.right__selected .walletconnect-modal__mobile__toggle_selector {\n  transform: translate3d(calc(100% + 12px), 0, 0);\n}\n\n.walletconnect-modal__mobile__toggle a {\n  font-size: 12px;\n  width: 50%;\n  text-align: center;\n  padding: 8px;\n  margin: 0;\n  font-weight: 600;\n  z-index: 1;\n}\n\n.walletconnect-modal__footer {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-modal__footer {\n    margin-top: 5vw;\n  }\n}\n\n.walletconnect-modal__footer a {\n  cursor: pointer;\n  color: #898d97;\n  font-size: 15px;\n  margin: 0 auto;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-modal__footer a {\n    font-size: 14px;\n  }\n}\n\n.walletconnect-connect__buttons__wrapper {\n  max-height: 44vh;\n}\n\n.walletconnect-connect__buttons__wrapper__android {\n  margin: 50% 0;\n}\n\n.walletconnect-connect__buttons__wrapper__wrap {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  margin: 10px 0;\n}\n\n@media only screen and (min-width: 768px) {\n  .walletconnect-connect__buttons__wrapper__wrap {\n    margin-top: 40px;\n  }\n}\n\n.walletconnect-connect__button {\n  background-color: rgb(64, 153, 255);\n  padding: 12px;\n  border-radius: 8px;\n  text-decoration: none;\n  color: rgb(255, 255, 255);\n  font-weight: 500;\n}\n\n.walletconnect-connect__button__icon_anchor {\n  cursor: pointer;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  margin: 8px;\n  width: 42px;\n  justify-self: center;\n  flex-direction: column;\n  text-decoration: none !important;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-connect__button__icon_anchor {\n    margin: 4px;\n  }\n}\n\n.walletconnect-connect__button__icon {\n  border-radius: 10px;\n  height: 42px;\n  margin: 0;\n  width: 42px;\n  background-size: cover !important;\n  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);\n}\n\n.walletconnect-connect__button__text {\n  color: #424952;\n  font-size: 2.7vw;\n  text-decoration: none !important;\n  padding: 0;\n  margin-top: 1.8vw;\n  font-weight: 600;\n}\n\n@media only screen and (min-width: 768px) {\n  .walletconnect-connect__button__text {\n    font-size: 16px;\n    margin-top: 12px;\n  }\n}\n\n.walletconnect-search__input {\n  border: none;\n  background: #d4d5d9;\n  border-style: none;\n  padding: 8px 16px;\n  outline: none;\n  font-style: normal;\n  font-stretch: normal;\n  font-size: 16px;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: left;\n  border-radius: 8px;\n  width: calc(100% - 16px);\n  margin: 0;\n  margin-bottom: 8px;\n}\n', e.head.appendChild(n)
                }();
                var r = function() {
                    var e = i.getDocumentOrThrow(),
                        t = e.createElement("div");
                    return t.setAttribute("id", u), e.body.appendChild(t), t
                }();
                a.render(a.createElement(w, {
                    text: S(),
                    uri: e,
                    onClose: R(t),
                    qrcodeModalOptions: n
                }), r)
            }
            var C = function() {
                return "undefined" !== typeof r && "undefined" !== typeof r.versions && "undefined" !== typeof r.versions.node
            };
            var I = {
                open: function(e, t, n) {
                    console.log(e), C() ? function(e) {
                        s.toString(e, {
                            type: "terminal"
                        }).then(console.log)
                    }(e) : x(e, t, n)
                },
                close: function() {
                    C() || E()
                }
            };
            e.exports = I
        },
        7848: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return q
                }
            });
            var r = {};
            n.r(r), n.d(r, {
                decrypt: function() {
                    return L
                },
                encrypt: function() {
                    return A
                },
                generateKey: function() {
                    return N
                },
                verifyHmac: function() {
                    return M
                }
            });
            var o = n(17187),
                i = n.n(o),
                s = n(56186);
            class c extends s.IJsonRpcProvider {
                constructor(e) {
                    super(e), this.events = new o.EventEmitter, this.hasRegisteredEventListeners = !1, this.connection = this.setConnection(e), this.connection.connected && this.registerEventListeners()
                }
                async connect(e = this.connection) {
                    await this.open(e)
                }
                async disconnect() {
                    await this.close()
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                async request(e, t) {
                    return this.requestStrict((0, s.formatJsonRpcRequest)(e.method, e.params || []), t)
                }
                async requestStrict(e, t) {
                    return new Promise((async (n, r) => {
                        if (!this.connection.connected) try {
                            await this.open()
                        } catch (o) {
                            r(o)
                        }
                        this.events.on(`${e.id}`, (e => {
                            (0, s.isJsonRpcError)(e) ? r(e.error): n(e.result)
                        }));
                        try {
                            await this.connection.send(e, t)
                        } catch (o) {
                            r(o)
                        }
                    }))
                }
                setConnection(e = this.connection) {
                    return e
                }
                onPayload(e) {
                    this.events.emit("payload", e), (0, s.isJsonRpcResponse)(e) ? this.events.emit(`${e.id}`, e) : this.events.emit("message", {
                        type: e.method,
                        data: e.params
                    })
                }
                onClose(e) {
                    e && 3e3 === e.code && this.events.emit("error", new Error(`WebSocket connection closed abnormally with code: ${e.code} ${e.reason?`(${e.reason})`:""}`)), this.events.emit("disconnect")
                }
                async open(e = this.connection) {
                    this.connection === e && this.connection.connected || (this.connection.connected && this.close(), "string" === typeof e && (await this.connection.open(e), e = this.connection), this.connection = this.setConnection(e), await this.connection.open(), this.registerEventListeners(), this.events.emit("connect"))
                }
                async close() {
                    await this.connection.close()
                }
                registerEventListeners() {
                    this.hasRegisteredEventListeners || (this.connection.on("payload", (e => this.onPayload(e))), this.connection.on("close", (e => this.onClose(e))), this.connection.on("error", (e => this.events.emit("error", e))), this.hasRegisteredEventListeners = !0)
                }
            }
            var a = n(54098),
                u = n.n(a),
                l = n(85094);
            const f = {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                method: "POST"
            };
            class d {
                constructor(e) {
                    if (this.url = e, this.events = new o.EventEmitter, this.isAvailable = !1, this.registering = !1, !(0, s.isHttpUrl)(e)) throw new Error(`Provided URL is not compatible with HTTP connection: ${e}`);
                    this.url = e
                }
                get connected() {
                    return this.isAvailable
                }
                get connecting() {
                    return this.registering
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                async open(e = this.url) {
                    await this.register(e)
                }
                async close() {
                    if (!this.isAvailable) throw new Error("Connection already closed");
                    this.onClose()
                }
                async send(e, t) {
                    this.isAvailable || await this.register();
                    try {
                        const t = (0, l.u)(e),
                            n = await u()(this.url, Object.assign(Object.assign({}, f), {
                                body: t
                            })),
                            r = await n.json();
                        this.onPayload({
                            data: r
                        })
                    } catch (n) {
                        this.onError(e.id, n)
                    }
                }
                async register(e = this.url) {
                    if (!(0, s.isHttpUrl)(e)) throw new Error(`Provided URL is not compatible with HTTP connection: ${e}`);
                    if (this.registering) {
                        const e = this.events.getMaxListeners();
                        return (this.events.listenerCount("register_error") >= e || this.events.listenerCount("open") >= e) && this.events.setMaxListeners(e + 1), new Promise(((e, t) => {
                            this.events.once("register_error", (e => {
                                this.resetMaxListeners(), t(e)
                            })), this.events.once("open", (() => {
                                if (this.resetMaxListeners(), "undefined" === typeof this.isAvailable) return t(new Error("HTTP connection is missing or invalid"));
                                e()
                            }))
                        }))
                    }
                    this.url = e, this.registering = !0;
                    try {
                        const t = (0, l.u)({
                            id: 1,
                            jsonrpc: "2.0",
                            method: "test",
                            params: []
                        });
                        await u()(e, Object.assign(Object.assign({}, f), {
                            body: t
                        })), this.onOpen()
                    } catch (t) {
                        const e = this.parseError(t);
                        throw this.events.emit("register_error", e), this.onClose(), e
                    }
                }
                onOpen() {
                    this.isAvailable = !0, this.registering = !1, this.events.emit("open")
                }
                onClose() {
                    this.isAvailable = !1, this.registering = !1, this.events.emit("close")
                }
                onPayload(e) {
                    if ("undefined" === typeof e.data) return;
                    const t = "string" === typeof e.data ? (0, l.D)(e.data) : e.data;
                    this.events.emit("payload", t)
                }
                onError(e, t) {
                    const n = this.parseError(t),
                        r = n.message || n.toString(),
                        o = (0, s.formatJsonRpcError)(e, r);
                    this.events.emit("payload", o)
                }
                parseError(e, t = this.url) {
                    return (0, s.CX)(e, t, "HTTP")
                }
                resetMaxListeners() {
                    this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10)
                }
            }
            var h = n(22494),
                p = n(83906);
            var _ = class {
                constructor() {
                    this._eventEmitters = [], "undefined" !== typeof window && "undefined" !== typeof window.addEventListener && (window.addEventListener("online", (() => this.trigger("online"))), window.addEventListener("offline", (() => this.trigger("offline"))))
                }
                on(e, t) {
                    this._eventEmitters.push({
                        event: e,
                        callback: t
                    })
                }
                trigger(e) {
                    let t = [];
                    e && (t = this._eventEmitters.filter((t => t.event === e))), t.forEach((e => {
                        e.callback()
                    }))
                }
            };
            const g = "undefined" !== typeof n.g.WebSocket ? n.g.WebSocket : n(57026);
            var m = class {
                constructor(e) {
                    if (this.opts = e, this._queue = [], this._events = [], this._subscriptions = [], this._protocol = e.protocol, this._version = e.version, this._url = "", this._netMonitor = null, this._socket = null, this._nextSocket = null, this._subscriptions = e.subscriptions || [], this._netMonitor = e.netMonitor || new _, !e.url || "string" !== typeof e.url) throw new Error("Missing or invalid WebSocket url");
                    this._url = e.url, this._netMonitor.on("online", (() => this._socketCreate()))
                }
                set readyState(e) {}
                get readyState() {
                    return this._socket ? this._socket.readyState : -1
                }
                set connecting(e) {}
                get connecting() {
                    return 0 === this.readyState
                }
                set connected(e) {}
                get connected() {
                    return 1 === this.readyState
                }
                set closing(e) {}
                get closing() {
                    return 2 === this.readyState
                }
                set closed(e) {}
                get closed() {
                    return 3 === this.readyState
                }
                open() {
                    this._socketCreate()
                }
                close() {
                    this._socketClose()
                }
                send(e, t, n) {
                    if (!t || "string" !== typeof t) throw new Error("Missing or invalid topic field");
                    this._socketSend({
                        topic: t,
                        type: "pub",
                        payload: e,
                        silent: !!n
                    })
                }
                subscribe(e) {
                    this._socketSend({
                        topic: e,
                        type: "sub",
                        payload: "",
                        silent: !0
                    })
                }
                on(e, t) {
                    this._events.push({
                        event: e,
                        callback: t
                    })
                }
                _socketCreate() {
                    if (this._nextSocket) return;
                    const e = function(e, t, n) {
                        var r, o;
                        const i = (e.startsWith("https") ? e.replace("https", "wss") : e.startsWith("http") ? e.replace("http", "ws") : e).split("?"),
                            s = (0, p.isBrowser)() ? {
                                protocol: t,
                                version: n,
                                env: "browser",
                                host: (null === (r = (0, p.getLocation)()) || void 0 === r ? void 0 : r.host) || ""
                            } : {
                                protocol: t,
                                version: n,
                                env: (null === (o = (0, p.detectEnv)()) || void 0 === o ? void 0 : o.name) || ""
                            },
                            c = (0, p.appendToQueryString)((0, p.getQueryString)(i[1] || ""), s);
                        return i[0] + "?" + c
                    }(this._url, this._protocol, this._version);
                    if (this._nextSocket = new g(e), !this._nextSocket) throw new Error("Failed to create socket");
                    this._nextSocket.onmessage = e => this._socketReceive(e), this._nextSocket.onopen = () => this._socketOpen(), this._nextSocket.onerror = e => this._socketError(e), this._nextSocket.onclose = () => {
                        setTimeout((() => {
                            this._nextSocket = null, this._socketCreate()
                        }), 1e3)
                    }
                }
                _socketOpen() {
                    this._socketClose(), this._socket = this._nextSocket, this._nextSocket = null, this._queueSubscriptions(), this._pushQueue()
                }
                _socketClose() {
                    this._socket && (this._socket.onclose = () => {}, this._socket.close())
                }
                _socketSend(e) {
                    const t = JSON.stringify(e);
                    this._socket && 1 === this._socket.readyState ? this._socket.send(t) : (this._setToQueue(e), this._socketCreate())
                }
                async _socketReceive(e) {
                    let t;
                    try {
                        t = JSON.parse(e.data)
                    } catch (n) {
                        return
                    }
                    if (this._socketSend({
                            topic: t.topic,
                            type: "ack",
                            payload: "",
                            silent: !0
                        }), this._socket && 1 === this._socket.readyState) {
                        const e = this._events.filter((e => "message" === e.event));
                        e && e.length && e.forEach((e => e.callback(t)))
                    }
                }
                _socketError(e) {
                    const t = this._events.filter((e => "error" === e.event));
                    t && t.length && t.forEach((t => t.callback(e)))
                }
                _queueSubscriptions() {
                    this._subscriptions.forEach((e => this._queue.push({
                        topic: e,
                        type: "sub",
                        payload: "",
                        silent: !0
                    }))), this._subscriptions = this.opts.subscriptions || []
                }
                _setToQueue(e) {
                    this._queue.push(e)
                }
                _pushQueue() {
                    this._queue.forEach((e => this._socketSend(e))), this._queue = []
                }
            };
            var y = class {
                constructor() {
                    this._eventEmitters = []
                }
                subscribe(e) {
                    this._eventEmitters.push(e)
                }
                unsubscribe(e) {
                    this._eventEmitters = this._eventEmitters.filter((t => t.event !== e))
                }
                trigger(e) {
                    let t, n = [];
                    t = (0, p.isJsonRpcRequest)(e) ? e.method : (0, p.isJsonRpcResponseSuccess)(e) || (0, p.isJsonRpcResponseError)(e) ? `response:${e.id}` : (0, p.isInternalEvent)(e) ? e.event : "", t && (n = this._eventEmitters.filter((e => e.event === t))), n && n.length || (0, p.isReservedEvent)(t) || (0, p.isInternalEvent)(t) || (n = this._eventEmitters.filter((e => "call_request" === e.event))), n.forEach((t => {
                        if ((0, p.isJsonRpcResponseError)(e)) {
                            const n = new Error(e.error.message);
                            t.callback(n, null)
                        } else t.callback(null, e)
                    }))
                }
            };
            var v = class {
                constructor(e = "walletconnect") {
                    this.storageId = e
                }
                getSession() {
                    let e = null;
                    const t = (0, p.getLocal)(this.storageId);
                    return t && (0, p.isWalletConnectSession)(t) && (e = t), e
                }
                setSession(e) {
                    return (0, p.setLocal)(this.storageId, e), e
                }
                removeSession() {
                    (0, p.removeLocal)(this.storageId)
                }
            };
            const w = "abcdefghijklmnopqrstuvwxyz0123456789".split("").map((e => `https://${e}.bridge.walletconnect.org`));

            function b() {
                return w[Math.floor(Math.random() * w.length)]
            }
            var E = class {
                    constructor(e) {
                        if (this.protocol = "wc", this.version = 1, this._bridge = "", this._key = null, this._clientId = "", this._clientMeta = null, this._peerId = "", this._peerMeta = null, this._handshakeId = 0, this._handshakeTopic = "", this._connected = !1, this._accounts = [], this._chainId = 0, this._networkId = 0, this._rpcUrl = "", this._eventManager = new y, this._clientMeta = (0, p.getClientMeta)() || e.connectorOpts.clientMeta || null, this._cryptoLib = e.cryptoLib, this._sessionStorage = e.sessionStorage || new v(e.connectorOpts.storageId), this._qrcodeModal = e.connectorOpts.qrcodeModal, this._qrcodeModalOptions = e.connectorOpts.qrcodeModalOptions, this._signingMethods = [...h.SIGNING_METHODS, ...e.connectorOpts.signingMethods || []], !e.connectorOpts.bridge && !e.connectorOpts.uri && !e.connectorOpts.session) throw new Error(h.ERROR_MISSING_REQUIRED);
                        var t;
                        e.connectorOpts.bridge && (this.bridge = function(e) {
                            return "walletconnect.org" === function(e) {
                                return function(e) {
                                    let t = e.indexOf("//") > -1 ? e.split("/")[2] : e.split("/")[0];
                                    return t = t.split(":")[0], t = t.split("?")[0], t
                                }(e).split(".").slice(-2).join(".")
                            }(e)
                        }(t = e.connectorOpts.bridge) ? b() : t), e.connectorOpts.uri && (this.uri = e.connectorOpts.uri);
                        const n = e.connectorOpts.session || this._getStorageSession();
                        n && (this.session = n), this.handshakeId && this._subscribeToSessionResponse(this.handshakeId, "Session request rejected"), this._transport = e.transport || new m({
                            protocol: this.protocol,
                            version: this.version,
                            url: this.bridge,
                            subscriptions: [this.clientId]
                        }), this._subscribeToInternalEvents(), this._initTransport(), e.connectorOpts.uri && this._subscribeToSessionRequest(), e.pushServerOpts && this._registerPushServer(e.pushServerOpts)
                    }
                    set bridge(e) {
                        e && (this._bridge = e)
                    }
                    get bridge() {
                        return this._bridge
                    }
                    set key(e) {
                        if (!e) return;
                        const t = (0, p.convertHexToArrayBuffer)(e);
                        this._key = t
                    }
                    get key() {
                        if (this._key) {
                            return (0, p.convertArrayBufferToHex)(this._key, !0)
                        }
                        return ""
                    }
                    set clientId(e) {
                        e && (this._clientId = e)
                    }
                    get clientId() {
                        let e = this._clientId;
                        return e || (e = this._clientId = (0, p.uuid)()), this._clientId
                    }
                    set peerId(e) {
                        e && (this._peerId = e)
                    }
                    get peerId() {
                        return this._peerId
                    }
                    set clientMeta(e) {}
                    get clientMeta() {
                        let e = this._clientMeta;
                        return e || (e = this._clientMeta = (0, p.getClientMeta)()), e
                    }
                    set peerMeta(e) {
                        this._peerMeta = e
                    }
                    get peerMeta() {
                        return this._peerMeta
                    }
                    set handshakeTopic(e) {
                        e && (this._handshakeTopic = e)
                    }
                    get handshakeTopic() {
                        return this._handshakeTopic
                    }
                    set handshakeId(e) {
                        e && (this._handshakeId = e)
                    }
                    get handshakeId() {
                        return this._handshakeId
                    }
                    get uri() {
                        return this._formatUri()
                    }
                    set uri(e) {
                        if (!e) return;
                        const {
                            handshakeTopic: t,
                            bridge: n,
                            key: r
                        } = this._parseUri(e);
                        this.handshakeTopic = t, this.bridge = n, this.key = r
                    }
                    set chainId(e) {
                        this._chainId = e
                    }
                    get chainId() {
                        return this._chainId
                    }
                    set networkId(e) {
                        this._networkId = e
                    }
                    get networkId() {
                        return this._networkId
                    }
                    set accounts(e) {
                        this._accounts = e
                    }
                    get accounts() {
                        return this._accounts
                    }
                    set rpcUrl(e) {
                        this._rpcUrl = e
                    }
                    get rpcUrl() {
                        return this._rpcUrl
                    }
                    set connected(e) {}
                    get connected() {
                        return this._connected
                    }
                    set pending(e) {}
                    get pending() {
                        return !!this._handshakeTopic
                    }
                    get session() {
                        return {
                            connected: this.connected,
                            accounts: this.accounts,
                            chainId: this.chainId,
                            bridge: this.bridge,
                            key: this.key,
                            clientId: this.clientId,
                            clientMeta: this.clientMeta,
                            peerId: this.peerId,
                            peerMeta: this.peerMeta,
                            handshakeId: this.handshakeId,
                            handshakeTopic: this.handshakeTopic
                        }
                    }
                    set session(e) {
                        e && (this._connected = e.connected, this.accounts = e.accounts, this.chainId = e.chainId, this.bridge = e.bridge, this.key = e.key, this.clientId = e.clientId, this.clientMeta = e.clientMeta, this.peerId = e.peerId, this.peerMeta = e.peerMeta, this.handshakeId = e.handshakeId, this.handshakeTopic = e.handshakeTopic)
                    }
                    on(e, t) {
                        const n = {
                            event: e,
                            callback: t
                        };
                        this._eventManager.subscribe(n)
                    }
                    off(e) {
                        this._eventManager.unsubscribe(e)
                    }
                    async createInstantRequest(e) {
                        this._key = await this._generateKey();
                        const t = this._formatRequest({
                            method: "wc_instantRequest",
                            params: [{
                                peerId: this.clientId,
                                peerMeta: this.clientMeta,
                                request: this._formatRequest(e)
                            }]
                        });
                        this.handshakeId = t.id, this.handshakeTopic = (0, p.uuid)(), this._eventManager.trigger({
                            event: "display_uri",
                            params: [this.uri]
                        }), this.on("modal_closed", (() => {
                            throw new Error(h.ERROR_QRCODE_MODAL_USER_CLOSED)
                        }));
                        const n = () => {
                            this.killSession()
                        };
                        try {
                            const e = await this._sendCallRequest(t);
                            return e && n(), e
                        } catch (r) {
                            throw n(), r
                        }
                    }
                    async connect(e) {
                        if (!this._qrcodeModal) throw new Error(h.ERROR_QRCODE_MODAL_NOT_PROVIDED);
                        return this.connected ? {
                            chainId: this.chainId,
                            accounts: this.accounts
                        } : (await this.createSession(e), new Promise((async (e, t) => {
                            this.on("modal_closed", (() => t(new Error(h.ERROR_QRCODE_MODAL_USER_CLOSED)))), this.on("connect", ((n, r) => {
                                if (n) return t(n);
                                e(r.params[0])
                            }))
                        })))
                    }
                    async createSession(e) {
                        if (this._connected) throw new Error(h.ERROR_SESSION_CONNECTED);
                        if (this.pending) return;
                        this._key = await this._generateKey();
                        const t = this._formatRequest({
                            method: "wc_sessionRequest",
                            params: [{
                                peerId: this.clientId,
                                peerMeta: this.clientMeta,
                                chainId: e && e.chainId ? e.chainId : null
                            }]
                        });
                        this.handshakeId = t.id, this.handshakeTopic = (0, p.uuid)(), this._sendSessionRequest(t, "Session update rejected", {
                            topic: this.handshakeTopic
                        }), this._eventManager.trigger({
                            event: "display_uri",
                            params: [this.uri]
                        })
                    }
                    approveSession(e) {
                        if (this._connected) throw new Error(h.ERROR_SESSION_CONNECTED);
                        this.chainId = e.chainId, this.accounts = e.accounts, this.networkId = e.networkId || 0, this.rpcUrl = e.rpcUrl || "";
                        const t = {
                                approved: !0,
                                chainId: this.chainId,
                                networkId: this.networkId,
                                accounts: this.accounts,
                                rpcUrl: this.rpcUrl,
                                peerId: this.clientId,
                                peerMeta: this.clientMeta
                            },
                            n = {
                                id: this.handshakeId,
                                jsonrpc: "2.0",
                                result: t
                            };
                        this._sendResponse(n), this._connected = !0, this._setStorageSession(), this._eventManager.trigger({
                            event: "connect",
                            params: [{
                                peerId: this.peerId,
                                peerMeta: this.peerMeta,
                                chainId: this.chainId,
                                accounts: this.accounts
                            }]
                        })
                    }
                    rejectSession(e) {
                        if (this._connected) throw new Error(h.ERROR_SESSION_CONNECTED);
                        const t = e && e.message ? e.message : h.ERROR_SESSION_REJECTED,
                            n = this._formatResponse({
                                id: this.handshakeId,
                                error: {
                                    message: t
                                }
                            });
                        this._sendResponse(n), this._connected = !1, this._eventManager.trigger({
                            event: "disconnect",
                            params: [{
                                message: t
                            }]
                        }), this._removeStorageSession()
                    }
                    updateSession(e) {
                        if (!this._connected) throw new Error(h.ERROR_SESSION_DISCONNECTED);
                        this.chainId = e.chainId, this.accounts = e.accounts, this.networkId = e.networkId || 0, this.rpcUrl = e.rpcUrl || "";
                        const t = {
                                approved: !0,
                                chainId: this.chainId,
                                networkId: this.networkId,
                                accounts: this.accounts,
                                rpcUrl: this.rpcUrl
                            },
                            n = this._formatRequest({
                                method: "wc_sessionUpdate",
                                params: [t]
                            });
                        this._sendSessionRequest(n, "Session update rejected"), this._eventManager.trigger({
                            event: "session_update",
                            params: [{
                                chainId: this.chainId,
                                accounts: this.accounts
                            }]
                        }), this._manageStorageSession()
                    }
                    async killSession(e) {
                        const t = e ? e.message : "Session Disconnected",
                            n = this._formatRequest({
                                method: "wc_sessionUpdate",
                                params: [{
                                    approved: !1,
                                    chainId: null,
                                    networkId: null,
                                    accounts: null
                                }]
                            });
                        await this._sendRequest(n), this._handleSessionDisconnect(t)
                    }
                    async sendTransaction(e) {
                        if (!this._connected) throw new Error(h.ERROR_SESSION_DISCONNECTED);
                        const t = e,
                            n = this._formatRequest({
                                method: "eth_sendTransaction",
                                params: [t]
                            });
                        return await this._sendCallRequest(n)
                    }
                    async signTransaction(e) {
                        if (!this._connected) throw new Error(h.ERROR_SESSION_DISCONNECTED);
                        const t = e,
                            n = this._formatRequest({
                                method: "eth_signTransaction",
                                params: [t]
                            });
                        return await this._sendCallRequest(n)
                    }
                    async signMessage(e) {
                        if (!this._connected) throw new Error(h.ERROR_SESSION_DISCONNECTED);
                        const t = this._formatRequest({
                            method: "eth_sign",
                            params: e
                        });
                        return await this._sendCallRequest(t)
                    }
                    async signPersonalMessage(e) {
                        if (!this._connected) throw new Error(h.ERROR_SESSION_DISCONNECTED);
                        const t = this._formatRequest({
                            method: "personal_sign",
                            params: e
                        });
                        return await this._sendCallRequest(t)
                    }
                    async signTypedData(e) {
                        if (!this._connected) throw new Error(h.ERROR_SESSION_DISCONNECTED);
                        const t = this._formatRequest({
                            method: "eth_signTypedData",
                            params: e
                        });
                        return await this._sendCallRequest(t)
                    }
                    async updateChain(e) {
                        if (!this._connected) throw new Error("Session currently disconnected");
                        const t = this._formatRequest({
                            method: "wallet_updateChain",
                            params: [e]
                        });
                        return await this._sendCallRequest(t)
                    }
                    unsafeSend(e, t) {
                        return this._sendRequest(e, t), this._eventManager.trigger({
                            event: "call_request_sent",
                            params: [{
                                request: e,
                                options: t
                            }]
                        }), new Promise(((t, n) => {
                            this._subscribeToResponse(e.id, ((e, r) => {
                                if (e) n(e);
                                else {
                                    if (!r) throw new Error(h.ERROR_MISSING_JSON_RPC);
                                    t(r)
                                }
                            }))
                        }))
                    }
                    async sendCustomRequest(e, t) {
                        if (!this._connected) throw new Error(h.ERROR_SESSION_DISCONNECTED);
                        switch (e.method) {
                            case "eth_accounts":
                                return this.accounts;
                            case "eth_chainId":
                                return (0, p.convertNumberToHex)(this.chainId);
                            case "eth_sendTransaction":
                            case "eth_signTransaction":
                            case "personal_sign":
                                e.params
                        }
                        const n = this._formatRequest(e);
                        return await this._sendCallRequest(n, t)
                    }
                    approveRequest(e) {
                        if (!(0, p.isJsonRpcResponseSuccess)(e)) throw new Error(h.ERROR_MISSING_RESULT); {
                            const t = this._formatResponse(e);
                            this._sendResponse(t)
                        }
                    }
                    rejectRequest(e) {
                        if (!(0, p.isJsonRpcResponseError)(e)) throw new Error(h.ERROR_MISSING_ERROR); {
                            const t = this._formatResponse(e);
                            this._sendResponse(t)
                        }
                    }
                    transportClose() {
                        this._transport.close()
                    }
                    async _sendRequest(e, t) {
                        const n = this._formatRequest(e),
                            r = await this._encrypt(n),
                            o = "undefined" !== typeof(null === t || void 0 === t ? void 0 : t.topic) ? t.topic : this.peerId,
                            i = JSON.stringify(r),
                            s = "undefined" !== typeof(null === t || void 0 === t ? void 0 : t.forcePushNotification) ? !t.forcePushNotification : (0, p.isSilentPayload)(n);
                        this._transport.send(i, o, s)
                    }
                    async _sendResponse(e) {
                        const t = await this._encrypt(e),
                            n = this.peerId,
                            r = JSON.stringify(t);
                        this._transport.send(r, n, !0)
                    }
                    async _sendSessionRequest(e, t, n) {
                        this._sendRequest(e, n), this._subscribeToSessionResponse(e.id, t)
                    }
                    _sendCallRequest(e, t) {
                        return this._sendRequest(e, t), this._eventManager.trigger({
                            event: "call_request_sent",
                            params: [{
                                request: e,
                                options: t
                            }]
                        }), this._subscribeToCallResponse(e.id)
                    }
                    _formatRequest(e) {
                        if ("undefined" === typeof e.method) throw new Error(h.ERROR_MISSING_METHOD);
                        return {
                            id: "undefined" === typeof e.id ? (0, p.payloadId)() : e.id,
                            jsonrpc: "2.0",
                            method: e.method,
                            params: "undefined" === typeof e.params ? [] : e.params
                        }
                    }
                    _formatResponse(e) {
                        if ("undefined" === typeof e.id) throw new Error(h.ERROR_MISSING_ID);
                        const t = {
                            id: e.id,
                            jsonrpc: "2.0"
                        };
                        if ((0, p.isJsonRpcResponseError)(e)) {
                            const n = (0, p.formatRpcError)(e.error);
                            return Object.assign(Object.assign(Object.assign({}, t), e), {
                                error: n
                            })
                        }
                        if ((0, p.isJsonRpcResponseSuccess)(e)) {
                            return Object.assign(Object.assign({}, t), e)
                        }
                        throw new Error(h.ERROR_INVALID_RESPONSE)
                    }
                    _handleSessionDisconnect(e) {
                        const t = e || "Session Disconnected";
                        this._connected || (this._qrcodeModal && this._qrcodeModal.close(), (0, p.removeLocal)(h.MOBILE_LINK_CHOICE_KEY)), this._connected && (this._connected = !1), this._handshakeId && (this._handshakeId = 0), this._handshakeTopic && (this._handshakeTopic = ""), this._peerId && (this._peerId = ""), this._eventManager.trigger({
                            event: "disconnect",
                            params: [{
                                message: t
                            }]
                        }), this._removeStorageSession(), this.transportClose()
                    }
                    _handleSessionResponse(e, t) {
                        t && t.approved ? (this._connected ? (t.chainId && (this.chainId = t.chainId), t.accounts && (this.accounts = t.accounts), this._eventManager.trigger({
                            event: "session_update",
                            params: [{
                                chainId: this.chainId,
                                accounts: this.accounts
                            }]
                        })) : (this._connected = !0, t.chainId && (this.chainId = t.chainId), t.accounts && (this.accounts = t.accounts), t.peerId && !this.peerId && (this.peerId = t.peerId), t.peerMeta && !this.peerMeta && (this.peerMeta = t.peerMeta), this._eventManager.trigger({
                            event: "connect",
                            params: [{
                                peerId: this.peerId,
                                peerMeta: this.peerMeta,
                                chainId: this.chainId,
                                accounts: this.accounts
                            }]
                        })), this._manageStorageSession()) : this._handleSessionDisconnect(e)
                    }
                    async _handleIncomingMessages(e) {
                        if (![this.clientId, this.handshakeTopic].includes(e.topic)) return;
                        let t;
                        try {
                            t = JSON.parse(e.payload)
                        } catch (r) {
                            return
                        }
                        const n = await this._decrypt(t);
                        n && this._eventManager.trigger(n)
                    }
                    _subscribeToSessionRequest() {
                        this._transport.subscribe(this.handshakeTopic)
                    }
                    _subscribeToResponse(e, t) {
                        this.on(`response:${e}`, t)
                    }
                    _subscribeToSessionResponse(e, t) {
                        this._subscribeToResponse(e, ((e, n) => {
                            e ? this._handleSessionResponse(e.message) : (0, p.isJsonRpcResponseSuccess)(n) ? this._handleSessionResponse(t, n.result) : n.error && n.error.message ? this._handleSessionResponse(n.error.message) : this._handleSessionResponse(t)
                        }))
                    }
                    _subscribeToCallResponse(e) {
                        return new Promise(((t, n) => {
                            this._subscribeToResponse(e, ((e, r) => {
                                e ? n(e) : (0, p.isJsonRpcResponseSuccess)(r) ? t(r.result) : r.error && r.error.message ? n(r.error) : n(new Error(h.ERROR_INVALID_RESPONSE))
                            }))
                        }))
                    }
                    _subscribeToInternalEvents() {
                        this.on("display_uri", (() => {
                            this._qrcodeModal && this._qrcodeModal.open(this.uri, (() => {
                                this._eventManager.trigger({
                                    event: "modal_closed",
                                    params: []
                                })
                            }), this._qrcodeModalOptions)
                        })), this.on("connect", (() => {
                            this._qrcodeModal && this._qrcodeModal.close()
                        })), this.on("call_request_sent", ((e, t) => {
                            const {
                                request: n
                            } = t.params[0];
                            if ((0, p.isMobile)() && this._signingMethods.includes(n.method)) {
                                const e = (0, p.getLocal)(h.MOBILE_LINK_CHOICE_KEY);
                                e && (window.location.href = e.href)
                            }
                        })), this.on("wc_sessionRequest", ((e, t) => {
                            e && this._eventManager.trigger({
                                event: "error",
                                params: [{
                                    code: "SESSION_REQUEST_ERROR",
                                    message: e.toString()
                                }]
                            }), this.handshakeId = t.id, this.peerId = t.params[0].peerId, this.peerMeta = t.params[0].peerMeta;
                            const n = Object.assign(Object.assign({}, t), {
                                method: "session_request"
                            });
                            this._eventManager.trigger(n)
                        })), this.on("wc_sessionUpdate", ((e, t) => {
                            e && this._handleSessionResponse(e.message), this._handleSessionResponse("Session disconnected", t.params[0])
                        }))
                    }
                    _initTransport() {
                        this._transport.on("message", (e => this._handleIncomingMessages(e))), this._transport.on("open", (() => this._eventManager.trigger({
                            event: "transport_open",
                            params: []
                        }))), this._transport.on("close", (() => this._eventManager.trigger({
                            event: "transport_close",
                            params: []
                        }))), this._transport.on("error", (() => this._eventManager.trigger({
                            event: "transport_error",
                            params: ["Websocket connection failed"]
                        }))), this._transport.open()
                    }
                    _formatUri() {
                        return `${this.protocol}:${this.handshakeTopic}@${this.version}?bridge=${encodeURIComponent(this.bridge)}&key=${this.key}`
                    }
                    _parseUri(e) {
                        const t = (0, p.parseWalletConnectUri)(e);
                        if (t.protocol === this.protocol) {
                            if (!t.handshakeTopic) throw Error("Invalid or missing handshakeTopic parameter value");
                            const e = t.handshakeTopic;
                            if (!t.bridge) throw Error("Invalid or missing bridge url parameter value");
                            const n = decodeURIComponent(t.bridge);
                            if (!t.key) throw Error("Invalid or missing key parameter value");
                            return {
                                handshakeTopic: e,
                                bridge: n,
                                key: t.key
                            }
                        }
                        throw new Error(h.ERROR_INVALID_URI)
                    }
                    async _generateKey() {
                        if (this._cryptoLib) {
                            return await this._cryptoLib.generateKey()
                        }
                        return null
                    }
                    async _encrypt(e) {
                        const t = this._key;
                        if (this._cryptoLib && t) {
                            return await this._cryptoLib.encrypt(e, t)
                        }
                        return null
                    }
                    async _decrypt(e) {
                        const t = this._key;
                        if (this._cryptoLib && t) {
                            return await this._cryptoLib.decrypt(e, t)
                        }
                        return null
                    }
                    _getStorageSession() {
                        let e = null;
                        return this._sessionStorage && (e = this._sessionStorage.getSession()), e
                    }
                    _setStorageSession() {
                        this._sessionStorage && this._sessionStorage.setSession(this.session)
                    }
                    _removeStorageSession() {
                        this._sessionStorage && this._sessionStorage.removeSession()
                    }
                    _manageStorageSession() {
                        this._connected ? this._setStorageSession() : this._removeStorageSession()
                    }
                    _registerPushServer(e) {
                        if (!e.url || "string" !== typeof e.url) throw Error("Invalid or missing pushServerOpts.url parameter value");
                        if (!e.type || "string" !== typeof e.type) throw Error("Invalid or missing pushServerOpts.type parameter value");
                        if (!e.token || "string" !== typeof e.token) throw Error("Invalid or missing pushServerOpts.token parameter value");
                        const t = {
                            bridge: this.bridge,
                            topic: this.clientId,
                            type: e.type,
                            token: e.token,
                            peerName: "",
                            language: e.language || ""
                        };
                        this.on("connect", (async (n, r) => {
                            if (n) throw n;
                            if (e.peerMeta) {
                                const e = r.params[0].peerMeta.name;
                                t.peerName = e
                            }
                            try {
                                const n = await fetch(`${e.url}/new`, {
                                    method: "POST",
                                    headers: {
                                        Accept: "application/json",
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify(t)
                                });
                                if (!(await n.json()).success) throw Error("Failed to register in Push Server")
                            } catch (n) {
                                throw Error("Failed to register in Push Server")
                            }
                        }))
                    }
                },
                R = n(1468);
            const S = "AES-CBC",
                x = "HMAC";
            async function C(e, t = "AES-CBC") {
                return R.getSubtleCrypto().importKey("raw", e, function(e) {
                    return e === S ? {
                        length: 256,
                        name: S
                    } : {
                        hash: {
                            name: "SHA-256"
                        },
                        name: x
                    }
                }(t), !0, function(e) {
                    return e === S ? ["encrypt", "decrypt"] : ["sign", "verify"]
                }(t))
            }

            function I(e, t, n) {
                return async function(e, t, n) {
                    const r = R.getSubtleCrypto(),
                        o = await C(t, S),
                        i = await r.encrypt({
                            iv: e,
                            name: S
                        }, o, n);
                    return new Uint8Array(i)
                }(e, t, n)
            }

            function O(e, t, n) {
                return async function(e, t, n) {
                    const r = R.getSubtleCrypto(),
                        o = await C(t, S),
                        i = await r.decrypt({
                            iv: e,
                            name: S
                        }, o, n);
                    return new Uint8Array(i)
                }(e, t, n)
            }
            async function k(e, t) {
                return await async function(e, t) {
                    const n = R.getSubtleCrypto(),
                        r = await C(e, x),
                        o = await n.sign({
                            length: 256,
                            name: x
                        }, r, t);
                    return new Uint8Array(o)
                }(e, t)
            }
            var T = n(52707);
            async function N(e) {
                const t = function(e) {
                    return R.getBrowerCrypto().getRandomValues(new Uint8Array(e))
                }((e || 256) / 8);
                return (0, p.convertBufferToArrayBuffer)(T.QM(t))
            }
            async function M(e, t) {
                const n = T.eu(e.data),
                    r = T.eu(e.iv),
                    o = T.eu(e.hmac),
                    i = T.ek(o, !1),
                    s = T.w3(n, r),
                    c = await k(t, s),
                    a = T.ek(c, !1);
                return T.KT(i) === T.KT(a)
            }
            async function A(e, t, n) {
                const r = T._W((0, p.convertArrayBufferToBuffer)(t)),
                    o = n || await N(128),
                    i = T._W((0, p.convertArrayBufferToBuffer)(o)),
                    s = T.ek(i, !1),
                    c = JSON.stringify(e),
                    a = T.ZV(c),
                    u = await I(i, r, a),
                    l = T.ek(u, !1),
                    f = T.w3(u, i),
                    d = await k(r, f);
                return {
                    data: l,
                    hmac: T.ek(d, !1),
                    iv: s
                }
            }
            async function L(e, t) {
                const n = T._W((0, p.convertArrayBufferToBuffer)(t));
                if (!n) throw new Error("Missing key: required for decryption");
                if (!(await M(e, n))) return null;
                const r = T.eu(e.data),
                    o = T.eu(e.iv),
                    i = await O(o, n, r),
                    s = T.oO(i);
                let c;
                try {
                    c = JSON.parse(s)
                } catch (a) {
                    return null
                }
                return c
            }
            var P = class extends E {
                    constructor(e, t) {
                        super({
                            cryptoLib: r,
                            connectorOpts: e,
                            pushServerOpts: t
                        })
                    }
                },
                U = n(55727),
                B = n.n(U),
                D = n(73416);
            class j extends D.XR {
                constructor(e) {
                    super(), this.events = new(i()), this.accounts = [], this.chainId = 1, this.pending = !1, this.bridge = "https://bridge.walletconnect.org", this.qrcode = !0, this.qrcodeModalOptions = void 0, this.opts = e, this.chainId = (null === e || void 0 === e ? void 0 : e.chainId) || this.chainId, this.wc = this.register(e)
                }
                get connected() {
                    return "undefined" !== typeof this.wc && this.wc.connected
                }
                get connecting() {
                    return this.pending
                }
                get connector() {
                    return this.wc = this.register(this.opts), this.wc
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                async open(e) {
                    if (!this.connected) return new Promise(((t, n) => {
                        this.on("error", (e => {
                            n(e)
                        })), this.on("open", (() => {
                            t()
                        })), this.create(e)
                    }));
                    this.onOpen()
                }
                async close() {
                    "undefined" !== typeof this.wc && (this.wc.connected && this.wc.killSession(), this.onClose())
                }
                async send(e) {
                    this.wc = this.register(this.opts), this.connected || await this.open(), this.sendPayload(e).then((e => this.events.emit("payload", e))).catch((t => this.events.emit("payload", (0, s.formatJsonRpcError)(e.id, t.message))))
                }
                register(e) {
                    if (this.wc) return this.wc;
                    this.opts = e || this.opts, this.bridge = (null === e || void 0 === e ? void 0 : e.connector) ? e.connector.bridge : (null === e || void 0 === e ? void 0 : e.bridge) || "https://bridge.walletconnect.org", this.qrcode = "undefined" === typeof(null === e || void 0 === e ? void 0 : e.qrcode) || !1 !== e.qrcode, this.chainId = "undefined" !== typeof(null === e || void 0 === e ? void 0 : e.chainId) ? e.chainId : this.chainId, this.qrcodeModalOptions = null === e || void 0 === e ? void 0 : e.qrcodeModalOptions;
                    const t = {
                        bridge: this.bridge,
                        qrcodeModal: this.qrcode ? B() : void 0,
                        qrcodeModalOptions: this.qrcodeModalOptions,
                        storageId: null === e || void 0 === e ? void 0 : e.storageId,
                        signingMethods: null === e || void 0 === e ? void 0 : e.signingMethods,
                        clientMeta: null === e || void 0 === e ? void 0 : e.clientMeta
                    };
                    if (this.wc = "undefined" !== typeof(null === e || void 0 === e ? void 0 : e.connector) ? e.connector : new P(t), "undefined" === typeof this.wc) throw new Error("Failed to register WalletConnect connector");
                    return this.wc.accounts.length && (this.accounts = this.wc.accounts), this.wc.chainId && (this.chainId = this.wc.chainId), this.registerConnectorEvents(), this.wc
                }
                onOpen(e) {
                    this.pending = !1, e && (this.wc = e), this.events.emit("open")
                }
                onClose() {
                    this.pending = !1, this.wc && (this.wc = void 0), this.events.emit("close")
                }
                onError(e, t = "Failed or Rejected Request", n = -32e3) {
                    const r = {
                        id: e.id,
                        jsonrpc: e.jsonrpc,
                        error: {
                            code: n,
                            message: t
                        }
                    };
                    return this.events.emit("payload", r), r
                }
                create(e) {
                    this.wc = this.register(this.opts), this.chainId = e || this.chainId, this.connected || this.pending || (this.pending = !0, this.registerConnectorEvents(), this.wc.createSession({
                        chainId: this.chainId
                    }).then((() => this.events.emit("created"))).catch((e => this.events.emit("error", e))))
                }
                registerConnectorEvents() {
                    this.wc = this.register(this.opts), this.wc.on("connect", (e => {
                        var t, n;
                        e ? this.events.emit("error", e) : (this.accounts = (null === (t = this.wc) || void 0 === t ? void 0 : t.accounts) || [], this.chainId = (null === (n = this.wc) || void 0 === n ? void 0 : n.chainId) || this.chainId, this.onOpen())
                    })), this.wc.on("disconnect", (e => {
                        e ? this.events.emit("error", e) : this.onClose()
                    })), this.wc.on("modal_closed", (() => {
                        this.events.emit("error", new Error("User closed modal"))
                    })), this.wc.on("session_update", ((e, t) => {
                        const {
                            accounts: n,
                            chainId: r
                        } = t.params[0];
                        (!this.accounts || n && this.accounts !== n) && (this.accounts = n, this.events.emit("accountsChanged", n)), (!this.chainId || r && this.chainId !== r) && (this.chainId = r, this.events.emit("chainChanged", r))
                    }))
                }
                async sendPayload(e) {
                    this.wc = this.register(this.opts);
                    try {
                        const t = await this.wc.unsafeSend(e);
                        return this.sanitizeResponse(t)
                    } catch (t) {
                        return this.onError(e, t.message)
                    }
                }
                sanitizeResponse(e) {
                    return "undefined" !== typeof e.error && "undefined" === typeof e.error.code ? (0, s.formatJsonRpcError)(e.id, e.error.message, e.error.data) : e
                }
            }
            var q = class {
                constructor(e) {
                    this.events = new(i()), this.rpc = {
                        infuraId: null === e || void 0 === e ? void 0 : e.infuraId,
                        custom: null === e || void 0 === e ? void 0 : e.rpc
                    }, this.signer = new c(new j(e));
                    const t = this.signer.connection.chainId || (null === e || void 0 === e ? void 0 : e.chainId) || 1;
                    this.http = this.setHttpProvider(t), this.registerEventListeners()
                }
                get connected() {
                    return this.signer.connection.connected
                }
                get connector() {
                    return this.signer.connection.connector
                }
                get accounts() {
                    return this.signer.connection.accounts
                }
                get chainId() {
                    return this.signer.connection.chainId
                }
                get rpcUrl() {
                    var e;
                    return (null === (e = this.http) || void 0 === e ? void 0 : e.connection).url || ""
                }
                async request(e) {
                    switch (e.method) {
                        case "eth_requestAccounts":
                            return await this.connect(), this.signer.connection.accounts;
                        case "eth_accounts":
                            return this.signer.connection.accounts;
                        case "eth_chainId":
                            return this.signer.connection.chainId
                    }
                    if (h.SIGNING_METHODS.includes(e.method)) return this.signer.request(e);
                    if ("undefined" === typeof this.http) throw new Error(`Cannot request JSON-RPC method (${e.method}) without provided rpc url`);
                    return this.http.request(e)
                }
                sendAsync(e, t) {
                    this.request(e).then((e => t(null, e))).catch((e => t(e, void 0)))
                }
                async enable() {
                    return await this.request({
                        method: "eth_requestAccounts"
                    })
                }
                async connect() {
                    this.signer.connection.connected || await this.signer.connect()
                }
                async disconnect() {
                    this.signer.connection.connected && await this.signer.disconnect()
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                get isWalletConnect() {
                    return !0
                }
                registerEventListeners() {
                    this.signer.connection.on("accountsChanged", (e => {
                        this.events.emit("accountsChanged", e)
                    })), this.signer.connection.on("chainChanged", (e => {
                        this.http = this.setHttpProvider(e), this.events.emit("chainChanged", e)
                    })), this.signer.on("disconnect", (() => {
                        this.events.emit("disconnect")
                    }))
                }
                setHttpProvider(e) {
                    const t = (0, p.getRpcUrl)(e, this.rpc);
                    if ("undefined" === typeof t) return;
                    return new c(new d(t))
                }
            }
        },
        56679: function() {},
        22494: function(e, t, n) {
            "use strict";
            n.d(t, {
                ERROR_INVALID_RESPONSE: function() {
                    return d
                },
                ERROR_INVALID_URI: function() {
                    return h
                },
                ERROR_MISSING_ERROR: function() {
                    return a
                },
                ERROR_MISSING_ID: function() {
                    return l
                },
                ERROR_MISSING_JSON_RPC: function() {
                    return s
                },
                ERROR_MISSING_METHOD: function() {
                    return u
                },
                ERROR_MISSING_REQUIRED: function() {
                    return f
                },
                ERROR_MISSING_RESULT: function() {
                    return c
                },
                ERROR_QRCODE_MODAL_NOT_PROVIDED: function() {
                    return p
                },
                ERROR_QRCODE_MODAL_USER_CLOSED: function() {
                    return _
                },
                ERROR_SESSION_CONNECTED: function() {
                    return r
                },
                ERROR_SESSION_DISCONNECTED: function() {
                    return o
                },
                ERROR_SESSION_REJECTED: function() {
                    return i
                },
                INFURA_NETWORKS: function() {
                    return v
                },
                MOBILE_LINK_CHOICE_KEY: function() {
                    return y
                },
                RESERVED_EVENTS: function() {
                    return g
                },
                SIGNING_METHODS: function() {
                    return m
                }
            });
            n(56679);
            const r = "Session currently connected",
                o = "Session currently disconnected",
                i = "Session Rejected",
                s = "Missing JSON RPC response",
                c = 'JSON-RPC success response must include "result" field',
                a = 'JSON-RPC error response must include "error" field',
                u = 'JSON RPC request must have valid "method" value',
                l = 'JSON RPC request must have valid "id" value',
                f = "Missing one of the required parameters: bridge / uri / session",
                d = "JSON RPC response format is invalid",
                h = "URI format is invalid",
                p = "QRCode Modal not provided",
                _ = "User close QRCode Modal",
                g = ["session_request", "session_update", "exchange_key", "connect", "disconnect", "display_uri", "modal_closed", "transport_open", "transport_close", "transport_error"],
                m = ["eth_sendTransaction", "eth_signTransaction", "eth_sign", "eth_signTypedData", "eth_signTypedData_v1", "eth_signTypedData_v2", "eth_signTypedData_v3", "eth_signTypedData_v4", "personal_sign", "wallet_addEthereumChain", "wallet_switchEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode"],
                y = "WALLETCONNECT_DEEPLINK_CHOICE",
                v = {
                    1: "mainnet",
                    3: "ropsten",
                    4: "rinkeby",
                    5: "goerli",
                    42: "kovan"
                }
        },
        83906: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                addHexPrefix: function() {
                    return ge
                },
                appendToQueryString: function() {
                    return Be
                },
                concatArrayBuffers: function() {
                    return a
                },
                concatBuffers: function() {
                    return h
                },
                convertArrayBufferToBuffer: function() {
                    return o
                },
                convertArrayBufferToHex: function() {
                    return s
                },
                convertArrayBufferToNumber: function() {
                    return c
                },
                convertArrayBufferToUtf8: function() {
                    return i
                },
                convertBufferToArrayBuffer: function() {
                    return u
                },
                convertBufferToHex: function() {
                    return f
                },
                convertBufferToNumber: function() {
                    return d
                },
                convertBufferToUtf8: function() {
                    return l
                },
                convertHexToArrayBuffer: function() {
                    return v
                },
                convertHexToBuffer: function() {
                    return y
                },
                convertHexToNumber: function() {
                    return b
                },
                convertHexToUtf8: function() {
                    return w
                },
                convertNumberToArrayBuffer: function() {
                    return R
                },
                convertNumberToBuffer: function() {
                    return E
                },
                convertNumberToHex: function() {
                    return x
                },
                convertNumberToUtf8: function() {
                    return S
                },
                convertUtf8ToArrayBuffer: function() {
                    return p
                },
                convertUtf8ToBuffer: function() {
                    return _
                },
                convertUtf8ToHex: function() {
                    return g
                },
                convertUtf8ToNumber: function() {
                    return m
                },
                detectEnv: function() {
                    return Z
                },
                detectOS: function() {
                    return X
                },
                formatIOSMobile: function() {
                    return Se
                },
                formatMobileRegistry: function() {
                    return Le
                },
                formatMobileRegistryEntry: function() {
                    return Ae
                },
                formatQueryString: function() {
                    return je
                },
                formatRpcError: function() {
                    return ke
                },
                getClientMeta: function() {
                    return de
                },
                getCrypto: function() {
                    return Q
                },
                getCryptoOrThrow: function() {
                    return K
                },
                getDappRegistryUrl: function() {
                    return Me
                },
                getDocument: function() {
                    return F
                },
                getDocumentOrThrow: function() {
                    return H
                },
                getEncoding: function() {
                    return Ke
                },
                getFromWindow: function() {
                    return q
                },
                getFromWindowOrThrow: function() {
                    return J
                },
                getInfuraRpcUrl: function() {
                    return Ee
                },
                getLocal: function() {
                    return ue
                },
                getLocalStorage: function() {
                    return Y
                },
                getLocalStorageOrThrow: function() {
                    return G
                },
                getLocation: function() {
                    return V
                },
                getLocationOrThrow: function() {
                    return $
                },
                getMobileLinkRegistry: function() {
                    return Ie
                },
                getMobileRegistryEntry: function() {
                    return Ce
                },
                getNavigator: function() {
                    return z
                },
                getNavigatorOrThrow: function() {
                    return W
                },
                getQueryString: function() {
                    return Ue
                },
                getRpcUrl: function() {
                    return Re
                },
                getType: function() {
                    return Ve
                },
                getWalletRegistryUrl: function() {
                    return Ne
                },
                isAndroid: function() {
                    return ee
                },
                isArrayBuffer: function() {
                    return $e
                },
                isBrowser: function() {
                    return oe
                },
                isBuffer: function() {
                    return We
                },
                isEmptyArray: function() {
                    return Fe
                },
                isEmptyString: function() {
                    return He
                },
                isHexString: function() {
                    return Qe
                },
                isIOS: function() {
                    return te
                },
                isInternalEvent: function() {
                    return et
                },
                isJsonRpcRequest: function() {
                    return Ye
                },
                isJsonRpcResponseError: function() {
                    return Xe
                },
                isJsonRpcResponseSuccess: function() {
                    return Ze
                },
                isJsonRpcSubscription: function() {
                    return Ge
                },
                isMobile: function() {
                    return ne
                },
                isNode: function() {
                    return re
                },
                isReservedEvent: function() {
                    return tt
                },
                isSilentPayload: function() {
                    return nt
                },
                isTypedArray: function() {
                    return ze
                },
                isWalletConnectSession: function() {
                    return qe
                },
                logDeprecationWarning: function() {
                    return be
                },
                parseQueryString: function() {
                    return De
                },
                parseWalletConnectUri: function() {
                    return Je
                },
                payloadId: function() {
                    return ve
                },
                promisify: function() {
                    return Oe
                },
                removeHexLeadingZeros: function() {
                    return ye
                },
                removeHexPrefix: function() {
                    return me
                },
                removeLocal: function() {
                    return le
                },
                safeJsonParse: function() {
                    return se
                },
                safeJsonStringify: function() {
                    return ce
                },
                sanitizeHex: function() {
                    return _e
                },
                saveMobileLinkInfo: function() {
                    return xe
                },
                setLocal: function() {
                    return ae
                },
                uuid: function() {
                    return we
                }
            });
            var r = n(52707);

            function o(e) {
                return r.QM(new Uint8Array(e))
            }

            function i(e) {
                return r.oO(new Uint8Array(e))
            }

            function s(e, t) {
                return r.ek(new Uint8Array(e), !t)
            }

            function c(e) {
                return r.VQ(new Uint8Array(e))
            }

            function a(...e) {
                return r.eu(e.map((e => r.ek(new Uint8Array(e)))).join("")).buffer
            }

            function u(e) {
                return r._W(e).buffer
            }

            function l(e) {
                return r.Pt(e)
            }

            function f(e, t) {
                return r.kh(e, !t)
            }

            function d(e) {
                return r.DS(e)
            }

            function h(...e) {
                return r.Kb(...e)
            }

            function p(e) {
                return r.ZV(e).buffer
            }

            function _(e) {
                return r.Zr(e)
            }

            function g(e, t) {
                return r.OG(e, !t)
            }

            function m(e) {
                return r.pF(e)
            }

            function y(e) {
                return r.ii(e)
            }

            function v(e) {
                return r.eu(e).buffer
            }

            function w(e) {
                return r.H3(e)
            }

            function b(e) {
                return r.ly(e)
            }

            function E(e) {
                return r.y$(e)
            }

            function R(e) {
                return r.Gj(e).buffer
            }

            function S(e) {
                return r.gy(e)
            }

            function x(e, t) {
                return r.eC(Number(e), !t)
            }
            var C = n(34155),
                I = function(e, t, n) {
                    if (n || 2 === arguments.length)
                        for (var r, o = 0, i = t.length; o < i; o++) !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)), r[o] = t[o]);
                    return e.concat(r || Array.prototype.slice.call(t))
                },
                O = function(e, t, n) {
                    this.name = e, this.version = t, this.os = n, this.type = "browser"
                },
                k = function(e) {
                    this.version = e, this.type = "node", this.name = "node", this.os = C.platform
                },
                T = function(e, t, n, r) {
                    this.name = e, this.version = t, this.os = n, this.bot = r, this.type = "bot-device"
                },
                N = function() {
                    this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null
                },
                M = function() {
                    this.type = "react-native", this.name = "react-native", this.version = null, this.os = null
                },
                A = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
                L = [
                    ["aol", /AOLShield\/([0-9\._]+)/],
                    ["edge", /Edge\/([0-9\._]+)/],
                    ["edge-ios", /EdgiOS\/([0-9\._]+)/],
                    ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
                    ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
                    ["samsung", /SamsungBrowser\/([0-9\.]+)/],
                    ["silk", /\bSilk\/([0-9._-]+)\b/],
                    ["miui", /MiuiBrowser\/([0-9\.]+)$/],
                    ["beaker", /BeakerBrowser\/([0-9\.]+)/],
                    ["edge-chromium", /EdgA?\/([0-9\.]+)/],
                    ["chromium-webview", /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
                    ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
                    ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
                    ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
                    ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
                    ["fxios", /FxiOS\/([0-9\.]+)/],
                    ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
                    ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
                    ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
                    ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
                    ["pie", /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],
                    ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
                    ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
                    ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
                    ["ie", /MSIE\s(7\.0)/],
                    ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
                    ["android", /Android\s([0-9\.]+)/],
                    ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
                    ["safari", /Version\/([0-9\._]+).*Safari/],
                    ["facebook", /FB[AS]V\/([0-9\.]+)/],
                    ["instagram", /Instagram\s([0-9\.]+)/],
                    ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
                    ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
                    ["curl", /^curl\/([0-9\.]+)$/],
                    ["searchbot", /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]
                ],
                P = [
                    ["iOS", /iP(hone|od|ad)/],
                    ["Android OS", /Android/],
                    ["BlackBerry OS", /BlackBerry|BB10/],
                    ["Windows Mobile", /IEMobile/],
                    ["Amazon OS", /Kindle/],
                    ["Windows 3.11", /Win16/],
                    ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
                    ["Windows 98", /(Windows 98)|(Win98)/],
                    ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
                    ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
                    ["Windows Server 2003", /(Windows NT 5.2)/],
                    ["Windows Vista", /(Windows NT 6.0)/],
                    ["Windows 7", /(Windows NT 6.1)/],
                    ["Windows 8", /(Windows NT 6.2)/],
                    ["Windows 8.1", /(Windows NT 6.3)/],
                    ["Windows 10", /(Windows NT 10.0)/],
                    ["Windows ME", /Windows ME/],
                    ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
                    ["Open BSD", /OpenBSD/],
                    ["Sun OS", /SunOS/],
                    ["Chrome OS", /CrOS/],
                    ["Linux", /(Linux)|(X11)/],
                    ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
                    ["QNX", /QNX/],
                    ["BeOS", /BeOS/],
                    ["OS/2", /OS\/2/]
                ];

            function U(e) {
                return e ? D(e) : "undefined" === typeof document && "undefined" !== typeof navigator && "ReactNative" === navigator.product ? new M : "undefined" !== typeof navigator ? D(navigator.userAgent) : "undefined" !== typeof C && C.version ? new k(C.version.slice(1)) : null
            }

            function B(e) {
                return "" !== e && L.reduce((function(t, n) {
                    var r = n[0],
                        o = n[1];
                    if (t) return t;
                    var i = o.exec(e);
                    return !!i && [r, i]
                }), !1)
            }

            function D(e) {
                var t = B(e);
                if (!t) return null;
                var n = t[0],
                    r = t[1];
                if ("searchbot" === n) return new N;
                var o = r[1] && r[1].split(".").join("_").split("_").slice(0, 3);
                o ? o.length < 3 && (o = I(I([], o, !0), function(e) {
                    for (var t = [], n = 0; n < e; n++) t.push("0");
                    return t
                }(3 - o.length), !0)) : o = [];
                var i = o.join("."),
                    s = function(e) {
                        for (var t = 0, n = P.length; t < n; t++) {
                            var r = P[t],
                                o = r[0];
                            if (r[1].exec(e)) return o
                        }
                        return null
                    }(e),
                    c = A.exec(e);
                return c && c[1] ? new T(n, i, s, c[1]) : new O(n, i, s)
            }
            var j = n(62873);
            const q = j.getFromWindow,
                J = j.getFromWindowOrThrow,
                H = j.getDocumentOrThrow,
                F = j.getDocument,
                W = j.getNavigatorOrThrow,
                z = j.getNavigator,
                $ = j.getLocationOrThrow,
                V = j.getLocation,
                K = j.getCryptoOrThrow,
                Q = j.getCrypto,
                G = j.getLocalStorageOrThrow,
                Y = j.getLocalStorage;

            function Z(e) {
                return U(e)
            }

            function X() {
                const e = Z();
                return e && e.os ? e.os : void 0
            }

            function ee() {
                const e = X();
                return !!e && e.toLowerCase().includes("android")
            }

            function te() {
                const e = X();
                return !!e && (e.toLowerCase().includes("ios") || e.toLowerCase().includes("mac") && navigator.maxTouchPoints > 1)
            }

            function ne() {
                return !!X() && (ee() || te())
            }

            function re() {
                const e = Z();
                return !(!e || !e.name) && "node" === e.name.toLowerCase()
            }

            function oe() {
                return !re() && !!z()
            }
            var ie = n(85094);
            const se = ie.D,
                ce = ie.u;

            function ae(e, t) {
                const n = ce(t),
                    r = Y();
                r && r.setItem(e, n)
            }

            function ue(e) {
                let t = null,
                    n = null;
                const r = Y();
                return r && (n = r.getItem(e)), t = n ? se(n) : n, t
            }

            function le(e) {
                const t = Y();
                t && t.removeItem(e)
            }
            var fe = n(65755);

            function de() {
                return fe.D()
            }
            var he = n(56186),
                pe = n(22494);

            function _e(e) {
                return r.xb(e)
            }

            function ge(e) {
                return r.L_(e)
            }

            function me(e) {
                return r.KT(e)
            }

            function ye(e) {
                return r.wL(r.L_(e))
            }
            const ve = he.payloadId;

            function we() {
                return ((e, t) => {
                    for (t = e = ""; e++ < 36; t += 51 * e & 52 ? (15 ^ e ? 8 ^ Math.random() * (20 ^ e ? 16 : 4) : 4).toString(16) : "-");
                    return t
                })()
            }

            function be() {
                console.warn("DEPRECATION WARNING: This WalletConnect client library will be deprecated in favor of @walletconnect/client. Please check docs.walletconnect.org to learn more about this migration!")
            }

            function Ee(e, t) {
                let n;
                const r = pe.INFURA_NETWORKS[e];
                return r && (n = `https://${r}.infura.io/v3/${t}`), n
            }

            function Re(e, t) {
                let n;
                const r = Ee(e, t.infuraId);
                return t.custom && t.custom[e] ? n = t.custom[e] : r && (n = r), n
            }

            function Se(e, t) {
                const n = encodeURIComponent(e);
                return t.universalLink ? `${t.universalLink}/wc?uri=${n}` : t.deepLink ? `${t.deepLink}${t.deepLink.endsWith(":")?"//":"/"}wc?uri=${n}` : ""
            }

            function xe(e) {
                const t = e.href.split("?")[0];
                ae(pe.MOBILE_LINK_CHOICE_KEY, Object.assign(Object.assign({}, e), {
                    href: t
                }))
            }

            function Ce(e, t) {
                return e.filter((e => e.name.toLowerCase().includes(t.toLowerCase())))[0]
            }

            function Ie(e, t) {
                let n = e;
                return t && (n = t.map((t => Ce(e, t))).filter(Boolean)), n
            }

            function Oe(e, t) {
                return async (...n) => new Promise(((r, o) => {
                    e.apply(t, [...n, (e, t) => {
                        null !== e && "undefined" !== typeof e || o(e), r(t)
                    }])
                }))
            }

            function ke(e) {
                const t = e.message || "Failed or Rejected Request";
                let n = -32e3;
                if (e && !e.code) switch (t) {
                    case "Parse error":
                        n = -32700;
                        break;
                    case "Invalid request":
                        n = -32600;
                        break;
                    case "Method not found":
                        n = -32601;
                        break;
                    case "Invalid params":
                        n = -32602;
                        break;
                    case "Internal error":
                        n = -32603;
                        break;
                    default:
                        n = -32e3
                }
                const r = {
                    code: n,
                    message: t
                };
                return e.data && (r.data = e.data), r
            }
            const Te = "https://registry.walletconnect.com";

            function Ne() {
                return Te + "/api/v2/wallets"
            }

            function Me() {
                return Te + "/api/v2/dapps"
            }

            function Ae(e, t = "mobile") {
                var n;
                return {
                    name: e.name || "",
                    shortName: e.metadata.shortName || "",
                    color: e.metadata.colors.primary || "",
                    logo: null !== (n = e.image_url.sm) && void 0 !== n ? n : "",
                    universalLink: e[t].universal || "",
                    deepLink: e[t].native || ""
                }
            }

            function Le(e, t = "mobile") {
                return Object.values(e).filter((e => !!e[t].universal || !!e[t].native)).map((e => Ae(e, t)))
            }
            var Pe = n(17563);

            function Ue(e) {
                const t = -1 !== e.indexOf("?") ? e.indexOf("?") : void 0;
                return "undefined" !== typeof t ? e.substr(t) : ""
            }

            function Be(e, t) {
                let n = De(e);
                return n = Object.assign(Object.assign({}, n), t), e = je(n)
            }

            function De(e) {
                return Pe.parse(e)
            }

            function je(e) {
                return Pe.stringify(e)
            }

            function qe(e) {
                return "undefined" !== typeof e.bridge
            }

            function Je(e) {
                const t = e.indexOf(":"),
                    n = -1 !== e.indexOf("?") ? e.indexOf("?") : void 0,
                    r = e.substring(0, t);
                const o = function(e) {
                    const t = e.split("@");
                    return {
                        handshakeTopic: t[0],
                        version: parseInt(t[1], 10)
                    }
                }(e.substring(t + 1, n));
                const i = function(e) {
                    const t = De(e);
                    return {
                        key: t.key || "",
                        bridge: t.bridge || ""
                    }
                }("undefined" !== typeof n ? e.substr(n) : "");
                return Object.assign(Object.assign({
                    protocol: r
                }, o), i)
            }

            function He(e) {
                return "" === e || "string" === typeof e && "" === e.trim()
            }

            function Fe(e) {
                return !(e && e.length)
            }

            function We(e) {
                return r.zH(e)
            }

            function ze(e) {
                return r.fU(e)
            }

            function $e(e) {
                return r.eP(e)
            }

            function Ve(e) {
                return r.oL(e)
            }

            function Ke(e) {
                return r.bZ(e)
            }

            function Qe(e, t) {
                return r.A7(e, t)
            }

            function Ge(e) {
                return "object" === typeof e.params
            }

            function Ye(e) {
                return "undefined" !== typeof e.method
            }

            function Ze(e) {
                return "undefined" !== typeof e.result
            }

            function Xe(e) {
                return "undefined" !== typeof e.error
            }

            function et(e) {
                return "undefined" !== typeof e.event
            }

            function tt(e) {
                return pe.RESERVED_EVENTS.includes(e) || e.startsWith("wc_")
            }

            function nt(e) {
                return !!e.method.startsWith("wc_") || !pe.SIGNING_METHODS.includes(e.method)
            }
        },
        85094: function(e, t, n) {
            "use strict";

            function r(e) {
                if ("string" !== typeof e) throw new Error("Cannot safe json parse value of type " + typeof e);
                try {
                    return JSON.parse(e)
                } catch (t) {
                    return e
                }
            }

            function o(e) {
                return "string" === typeof e ? e : JSON.stringify(e)
            }
            n.d(t, {
                D: function() {
                    return r
                },
                u: function() {
                    return o
                }
            })
        },
        62873: function(e, t) {
            "use strict";

            function n(e) {
                let t;
                return "undefined" !== typeof window && "undefined" !== typeof window[e] && (t = window[e]), t
            }

            function r(e) {
                const t = n(e);
                if (!t) throw new Error(`${e} is not defined in Window`);
                return t
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getLocalStorage = t.getLocalStorageOrThrow = t.getCrypto = t.getCryptoOrThrow = t.getLocation = t.getLocationOrThrow = t.getNavigator = t.getNavigatorOrThrow = t.getDocument = t.getDocumentOrThrow = t.getFromWindowOrThrow = t.getFromWindow = void 0, t.getFromWindow = n, t.getFromWindowOrThrow = r, t.getDocumentOrThrow = function() {
                return r("document")
            }, t.getDocument = function() {
                return n("document")
            }, t.getNavigatorOrThrow = function() {
                return r("navigator")
            }, t.getNavigator = function() {
                return n("navigator")
            }, t.getLocationOrThrow = function() {
                return r("location")
            }, t.getLocation = function() {
                return n("location")
            }, t.getCryptoOrThrow = function() {
                return r("crypto")
            }, t.getCrypto = function() {
                return n("crypto")
            }, t.getLocalStorageOrThrow = function() {
                return r("localStorage")
            }, t.getLocalStorage = function() {
                return n("localStorage")
            }
        },
        65755: function(e, t, n) {
            "use strict";
            t.D = void 0;
            const r = n(62873);
            t.D = function() {
                let e, t;
                try {
                    e = r.getDocumentOrThrow(), t = r.getLocationOrThrow()
                } catch (i) {
                    return null
                }

                function n(...t) {
                    const n = e.getElementsByTagName("meta");
                    for (let e = 0; e < n.length; e++) {
                        const r = n[e],
                            o = ["itemprop", "property", "name"].map((e => r.getAttribute(e))).filter((e => !!e && t.includes(e)));
                        if (o.length && o) {
                            const e = r.getAttribute("content");
                            if (e) return e
                        }
                    }
                    return ""
                }
                const o = function() {
                    let t = n("name", "og:site_name", "og:title", "twitter:title");
                    return t || (t = e.title), t
                }();
                return {
                    description: n("description", "og:description", "twitter:description", "keywords"),
                    url: t.origin,
                    icons: function() {
                        const n = e.getElementsByTagName("link"),
                            r = [];
                        for (let e = 0; e < n.length; e++) {
                            const o = n[e],
                                i = o.getAttribute("rel");
                            if (i && i.toLowerCase().indexOf("icon") > -1) {
                                const e = o.getAttribute("href");
                                if (e)
                                    if (-1 === e.toLowerCase().indexOf("https:") && -1 === e.toLowerCase().indexOf("http:") && 0 !== e.indexOf("//")) {
                                        let n = t.protocol + "//" + t.host;
                                        if (0 === e.indexOf("/")) n += e;
                                        else {
                                            const r = t.pathname.split("/");
                                            r.pop();
                                            n += r.join("/") + "/" + e
                                        }
                                        r.push(n)
                                    } else if (0 === e.indexOf("//")) {
                                    const n = t.protocol + e;
                                    r.push(n)
                                } else r.push(e)
                            }
                        }
                        return r
                    }(),
                    name: o
                }
            }
        },
        20640: function(e, t, n) {
            "use strict";
            var r = n(11742),
                o = {
                    "text/plain": "Text",
                    "text/html": "Url",
                    default: "Text"
                };
            e.exports = function(e, t) {
                var n, i, s, c, a, u, l = !1;
                t || (t = {}), n = t.debug || !1;
                try {
                    if (s = r(), c = document.createRange(), a = document.getSelection(), (u = document.createElement("span")).textContent = e, u.ariaHidden = "true", u.style.all = "unset", u.style.position = "fixed", u.style.top = 0, u.style.clip = "rect(0, 0, 0, 0)", u.style.whiteSpace = "pre", u.style.webkitUserSelect = "text", u.style.MozUserSelect = "text", u.style.msUserSelect = "text", u.style.userSelect = "text", u.addEventListener("copy", (function(r) {
                            if (r.stopPropagation(), t.format)
                                if (r.preventDefault(), "undefined" === typeof r.clipboardData) {
                                    n && console.warn("unable to use e.clipboardData"), n && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
                                    var i = o[t.format] || o.default;
                                    window.clipboardData.setData(i, e)
                                } else r.clipboardData.clearData(), r.clipboardData.setData(t.format, e);
                            t.onCopy && (r.preventDefault(), t.onCopy(r.clipboardData))
                        })), document.body.appendChild(u), c.selectNodeContents(u), a.addRange(c), !document.execCommand("copy")) throw new Error("copy command was unsuccessful");
                    l = !0
                } catch (f) {
                    n && console.error("unable to copy using execCommand: ", f), n && console.warn("trying IE specific stuff");
                    try {
                        window.clipboardData.setData(t.format || "text", e), t.onCopy && t.onCopy(window.clipboardData), l = !0
                    } catch (f) {
                        n && console.error("unable to copy using clipboardData: ", f), n && console.error("falling back to prompt"), i = function(e) {
                            var t = (/mac os x/i.test(navigator.userAgent) ? "\u2318" : "Ctrl") + "+C";
                            return e.replace(/#{\s*key\s*}/g, t)
                        }("message" in t ? t.message : "Copy to clipboard: #{key}, Enter"), window.prompt(i, e)
                    }
                } finally {
                    a && ("function" == typeof a.removeRange ? a.removeRange(c) : a.removeAllRanges()), u && document.body.removeChild(u), s()
                }
                return l
            }
        },
        54098: function(e, t) {
            var n = "undefined" !== typeof self ? self : this,
                r = function() {
                    function e() {
                        this.fetch = !1, this.DOMException = n.DOMException
                    }
                    return e.prototype = n, new e
                }();
            ! function(e) {
                ! function(t) {
                    var n = "URLSearchParams" in e,
                        r = "Symbol" in e && "iterator" in Symbol,
                        o = "FileReader" in e && "Blob" in e && function() {
                            try {
                                return new Blob, !0
                            } catch (e) {
                                return !1
                            }
                        }(),
                        i = "FormData" in e,
                        s = "ArrayBuffer" in e;
                    if (s) var c = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                        a = ArrayBuffer.isView || function(e) {
                            return e && c.indexOf(Object.prototype.toString.call(e)) > -1
                        };

                    function u(e) {
                        if ("string" !== typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e)) throw new TypeError("Invalid character in header field name");
                        return e.toLowerCase()
                    }

                    function l(e) {
                        return "string" !== typeof e && (e = String(e)), e
                    }

                    function f(e) {
                        var t = {
                            next: function() {
                                var t = e.shift();
                                return {
                                    done: void 0 === t,
                                    value: t
                                }
                            }
                        };
                        return r && (t[Symbol.iterator] = function() {
                            return t
                        }), t
                    }

                    function d(e) {
                        this.map = {}, e instanceof d ? e.forEach((function(e, t) {
                            this.append(t, e)
                        }), this) : Array.isArray(e) ? e.forEach((function(e) {
                            this.append(e[0], e[1])
                        }), this) : e && Object.getOwnPropertyNames(e).forEach((function(t) {
                            this.append(t, e[t])
                        }), this)
                    }

                    function h(e) {
                        if (e.bodyUsed) return Promise.reject(new TypeError("Already read"));
                        e.bodyUsed = !0
                    }

                    function p(e) {
                        return new Promise((function(t, n) {
                            e.onload = function() {
                                t(e.result)
                            }, e.onerror = function() {
                                n(e.error)
                            }
                        }))
                    }

                    function _(e) {
                        var t = new FileReader,
                            n = p(t);
                        return t.readAsArrayBuffer(e), n
                    }

                    function g(e) {
                        if (e.slice) return e.slice(0);
                        var t = new Uint8Array(e.byteLength);
                        return t.set(new Uint8Array(e)), t.buffer
                    }

                    function m() {
                        return this.bodyUsed = !1, this._initBody = function(e) {
                            var t;
                            this._bodyInit = e, e ? "string" === typeof e ? this._bodyText = e : o && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : i && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : n && URLSearchParams.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : s && o && ((t = e) && DataView.prototype.isPrototypeOf(t)) ? (this._bodyArrayBuffer = g(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : s && (ArrayBuffer.prototype.isPrototypeOf(e) || a(e)) ? this._bodyArrayBuffer = g(e) : this._bodyText = e = Object.prototype.toString.call(e) : this._bodyText = "", this.headers.get("content-type") || ("string" === typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : n && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                        }, o && (this.blob = function() {
                            var e = h(this);
                            if (e) return e;
                            if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                            if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                            if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                            return Promise.resolve(new Blob([this._bodyText]))
                        }, this.arrayBuffer = function() {
                            return this._bodyArrayBuffer ? h(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(_)
                        }), this.text = function() {
                            var e = h(this);
                            if (e) return e;
                            if (this._bodyBlob) return function(e) {
                                var t = new FileReader,
                                    n = p(t);
                                return t.readAsText(e), n
                            }(this._bodyBlob);
                            if (this._bodyArrayBuffer) return Promise.resolve(function(e) {
                                for (var t = new Uint8Array(e), n = new Array(t.length), r = 0; r < t.length; r++) n[r] = String.fromCharCode(t[r]);
                                return n.join("")
                            }(this._bodyArrayBuffer));
                            if (this._bodyFormData) throw new Error("could not read FormData body as text");
                            return Promise.resolve(this._bodyText)
                        }, i && (this.formData = function() {
                            return this.text().then(w)
                        }), this.json = function() {
                            return this.text().then(JSON.parse)
                        }, this
                    }
                    d.prototype.append = function(e, t) {
                        e = u(e), t = l(t);
                        var n = this.map[e];
                        this.map[e] = n ? n + ", " + t : t
                    }, d.prototype.delete = function(e) {
                        delete this.map[u(e)]
                    }, d.prototype.get = function(e) {
                        return e = u(e), this.has(e) ? this.map[e] : null
                    }, d.prototype.has = function(e) {
                        return this.map.hasOwnProperty(u(e))
                    }, d.prototype.set = function(e, t) {
                        this.map[u(e)] = l(t)
                    }, d.prototype.forEach = function(e, t) {
                        for (var n in this.map) this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this)
                    }, d.prototype.keys = function() {
                        var e = [];
                        return this.forEach((function(t, n) {
                            e.push(n)
                        })), f(e)
                    }, d.prototype.values = function() {
                        var e = [];
                        return this.forEach((function(t) {
                            e.push(t)
                        })), f(e)
                    }, d.prototype.entries = function() {
                        var e = [];
                        return this.forEach((function(t, n) {
                            e.push([n, t])
                        })), f(e)
                    }, r && (d.prototype[Symbol.iterator] = d.prototype.entries);
                    var y = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

                    function v(e, t) {
                        var n = (t = t || {}).body;
                        if (e instanceof v) {
                            if (e.bodyUsed) throw new TypeError("Already read");
                            this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new d(e.headers)), this.method = e.method, this.mode = e.mode, this.signal = e.signal, n || null == e._bodyInit || (n = e._bodyInit, e.bodyUsed = !0)
                        } else this.url = String(e);
                        if (this.credentials = t.credentials || this.credentials || "same-origin", !t.headers && this.headers || (this.headers = new d(t.headers)), this.method = function(e) {
                                var t = e.toUpperCase();
                                return y.indexOf(t) > -1 ? t : e
                            }(t.method || this.method || "GET"), this.mode = t.mode || this.mode || null, this.signal = t.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && n) throw new TypeError("Body not allowed for GET or HEAD requests");
                        this._initBody(n)
                    }

                    function w(e) {
                        var t = new FormData;
                        return e.trim().split("&").forEach((function(e) {
                            if (e) {
                                var n = e.split("="),
                                    r = n.shift().replace(/\+/g, " "),
                                    o = n.join("=").replace(/\+/g, " ");
                                t.append(decodeURIComponent(r), decodeURIComponent(o))
                            }
                        })), t
                    }

                    function b(e) {
                        var t = new d;
                        return e.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach((function(e) {
                            var n = e.split(":"),
                                r = n.shift().trim();
                            if (r) {
                                var o = n.join(":").trim();
                                t.append(r, o)
                            }
                        })), t
                    }

                    function E(e, t) {
                        t || (t = {}), this.type = "default", this.status = void 0 === t.status ? 200 : t.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in t ? t.statusText : "OK", this.headers = new d(t.headers), this.url = t.url || "", this._initBody(e)
                    }
                    v.prototype.clone = function() {
                        return new v(this, {
                            body: this._bodyInit
                        })
                    }, m.call(v.prototype), m.call(E.prototype), E.prototype.clone = function() {
                        return new E(this._bodyInit, {
                            status: this.status,
                            statusText: this.statusText,
                            headers: new d(this.headers),
                            url: this.url
                        })
                    }, E.error = function() {
                        var e = new E(null, {
                            status: 0,
                            statusText: ""
                        });
                        return e.type = "error", e
                    };
                    var R = [301, 302, 303, 307, 308];
                    E.redirect = function(e, t) {
                        if (-1 === R.indexOf(t)) throw new RangeError("Invalid status code");
                        return new E(null, {
                            status: t,
                            headers: {
                                location: e
                            }
                        })
                    }, t.DOMException = e.DOMException;
                    try {
                        new t.DOMException
                    } catch (x) {
                        t.DOMException = function(e, t) {
                            this.message = e, this.name = t;
                            var n = Error(e);
                            this.stack = n.stack
                        }, t.DOMException.prototype = Object.create(Error.prototype), t.DOMException.prototype.constructor = t.DOMException
                    }

                    function S(e, n) {
                        return new Promise((function(r, i) {
                            var s = new v(e, n);
                            if (s.signal && s.signal.aborted) return i(new t.DOMException("Aborted", "AbortError"));
                            var c = new XMLHttpRequest;

                            function a() {
                                c.abort()
                            }
                            c.onload = function() {
                                var e = {
                                    status: c.status,
                                    statusText: c.statusText,
                                    headers: b(c.getAllResponseHeaders() || "")
                                };
                                e.url = "responseURL" in c ? c.responseURL : e.headers.get("X-Request-URL");
                                var t = "response" in c ? c.response : c.responseText;
                                r(new E(t, e))
                            }, c.onerror = function() {
                                i(new TypeError("Network request failed"))
                            }, c.ontimeout = function() {
                                i(new TypeError("Network request failed"))
                            }, c.onabort = function() {
                                i(new t.DOMException("Aborted", "AbortError"))
                            }, c.open(s.method, s.url, !0), "include" === s.credentials ? c.withCredentials = !0 : "omit" === s.credentials && (c.withCredentials = !1), "responseType" in c && o && (c.responseType = "blob"), s.headers.forEach((function(e, t) {
                                c.setRequestHeader(t, e)
                            })), s.signal && (s.signal.addEventListener("abort", a), c.onreadystatechange = function() {
                                4 === c.readyState && s.signal.removeEventListener("abort", a)
                            }), c.send("undefined" === typeof s._bodyInit ? null : s._bodyInit)
                        }))
                    }
                    S.polyfill = !0, e.fetch || (e.fetch = S, e.Headers = d, e.Request = v, e.Response = E), t.Headers = d, t.Request = v, t.Response = E, t.fetch = S, Object.defineProperty(t, "__esModule", {
                        value: !0
                    })
                }({})
            }(r), r.fetch.ponyfill = !0, delete r.fetch.polyfill;
            var o = r;
            (t = o.fetch).default = o.fetch, t.fetch = o.fetch, t.Headers = o.Headers, t.Request = o.Request, t.Response = o.Response, e.exports = t
        },
        44020: function(e) {
            "use strict";
            var t = "%[a-f0-9]{2}",
                n = new RegExp("(" + t + ")|([^%]+?)", "gi"),
                r = new RegExp("(" + t + ")+", "gi");

            function o(e, t) {
                try {
                    return [decodeURIComponent(e.join(""))]
                } catch (i) {}
                if (1 === e.length) return e;
                t = t || 1;
                var n = e.slice(0, t),
                    r = e.slice(t);
                return Array.prototype.concat.call([], o(n), o(r))
            }

            function i(e) {
                try {
                    return decodeURIComponent(e)
                } catch (i) {
                    for (var t = e.match(n) || [], r = 1; r < t.length; r++) t = (e = o(t, r).join("")).match(n) || [];
                    return e
                }
            }
            e.exports = function(e) {
                if ("string" !== typeof e) throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
                try {
                    return e = e.replace(/\+/g, " "), decodeURIComponent(e)
                } catch (t) {
                    return function(e) {
                        for (var n = {
                                "%FE%FF": "\ufffd\ufffd",
                                "%FF%FE": "\ufffd\ufffd"
                            }, o = r.exec(e); o;) {
                            try {
                                n[o[0]] = decodeURIComponent(o[0])
                            } catch (t) {
                                var s = i(o[0]);
                                s !== o[0] && (n[o[0]] = s)
                            }
                            o = r.exec(e)
                        }
                        n["%C2"] = "\ufffd";
                        for (var c = Object.keys(n), a = 0; a < c.length; a++) {
                            var u = c[a];
                            e = e.replace(new RegExp(u, "g"), n[u])
                        }
                        return e
                    }(e)
                }
            }
        },
        17187: function(e) {
            "use strict";
            var t, n = "object" === typeof Reflect ? Reflect : null,
                r = n && "function" === typeof n.apply ? n.apply : function(e, t, n) {
                    return Function.prototype.apply.call(e, t, n)
                };
            t = n && "function" === typeof n.ownKeys ? n.ownKeys : Object.getOwnPropertySymbols ? function(e) {
                return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
            } : function(e) {
                return Object.getOwnPropertyNames(e)
            };
            var o = Number.isNaN || function(e) {
                return e !== e
            };

            function i() {
                i.init.call(this)
            }
            e.exports = i, e.exports.once = function(e, t) {
                return new Promise((function(n, r) {
                    function o(n) {
                        e.removeListener(t, i), r(n)
                    }

                    function i() {
                        "function" === typeof e.removeListener && e.removeListener("error", o), n([].slice.call(arguments))
                    }
                    _(e, t, i, {
                        once: !0
                    }), "error" !== t && function(e, t, n) {
                        "function" === typeof e.on && _(e, "error", t, n)
                    }(e, o, {
                        once: !0
                    })
                }))
            }, i.EventEmitter = i, i.prototype._events = void 0, i.prototype._eventsCount = 0, i.prototype._maxListeners = void 0;
            var s = 10;

            function c(e) {
                if ("function" !== typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
            }

            function a(e) {
                return void 0 === e._maxListeners ? i.defaultMaxListeners : e._maxListeners
            }

            function u(e, t, n, r) {
                var o, i, s, u;
                if (c(n), void 0 === (i = e._events) ? (i = e._events = Object.create(null), e._eventsCount = 0) : (void 0 !== i.newListener && (e.emit("newListener", t, n.listener ? n.listener : n), i = e._events), s = i[t]), void 0 === s) s = i[t] = n, ++e._eventsCount;
                else if ("function" === typeof s ? s = i[t] = r ? [n, s] : [s, n] : r ? s.unshift(n) : s.push(n), (o = a(e)) > 0 && s.length > o && !s.warned) {
                    s.warned = !0;
                    var l = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                    l.name = "MaxListenersExceededWarning", l.emitter = e, l.type = t, l.count = s.length, u = l, console && console.warn && console.warn(u)
                }
                return e
            }

            function l() {
                if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
            }

            function f(e, t, n) {
                var r = {
                        fired: !1,
                        wrapFn: void 0,
                        target: e,
                        type: t,
                        listener: n
                    },
                    o = l.bind(r);
                return o.listener = n, r.wrapFn = o, o
            }

            function d(e, t, n) {
                var r = e._events;
                if (void 0 === r) return [];
                var o = r[t];
                return void 0 === o ? [] : "function" === typeof o ? n ? [o.listener || o] : [o] : n ? function(e) {
                    for (var t = new Array(e.length), n = 0; n < t.length; ++n) t[n] = e[n].listener || e[n];
                    return t
                }(o) : p(o, o.length)
            }

            function h(e) {
                var t = this._events;
                if (void 0 !== t) {
                    var n = t[e];
                    if ("function" === typeof n) return 1;
                    if (void 0 !== n) return n.length
                }
                return 0
            }

            function p(e, t) {
                for (var n = new Array(t), r = 0; r < t; ++r) n[r] = e[r];
                return n
            }

            function _(e, t, n, r) {
                if ("function" === typeof e.on) r.once ? e.once(t, n) : e.on(t, n);
                else {
                    if ("function" !== typeof e.addEventListener) throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
                    e.addEventListener(t, (function o(i) {
                        r.once && e.removeEventListener(t, o), n(i)
                    }))
                }
            }
            Object.defineProperty(i, "defaultMaxListeners", {
                enumerable: !0,
                get: function() {
                    return s
                },
                set: function(e) {
                    if ("number" !== typeof e || e < 0 || o(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
                    s = e
                }
            }), i.init = function() {
                void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
            }, i.prototype.setMaxListeners = function(e) {
                if ("number" !== typeof e || e < 0 || o(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
                return this._maxListeners = e, this
            }, i.prototype.getMaxListeners = function() {
                return a(this)
            }, i.prototype.emit = function(e) {
                for (var t = [], n = 1; n < arguments.length; n++) t.push(arguments[n]);
                var o = "error" === e,
                    i = this._events;
                if (void 0 !== i) o = o && void 0 === i.error;
                else if (!o) return !1;
                if (o) {
                    var s;
                    if (t.length > 0 && (s = t[0]), s instanceof Error) throw s;
                    var c = new Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
                    throw c.context = s, c
                }
                var a = i[e];
                if (void 0 === a) return !1;
                if ("function" === typeof a) r(a, this, t);
                else {
                    var u = a.length,
                        l = p(a, u);
                    for (n = 0; n < u; ++n) r(l[n], this, t)
                }
                return !0
            }, i.prototype.addListener = function(e, t) {
                return u(this, e, t, !1)
            }, i.prototype.on = i.prototype.addListener, i.prototype.prependListener = function(e, t) {
                return u(this, e, t, !0)
            }, i.prototype.once = function(e, t) {
                return c(t), this.on(e, f(this, e, t)), this
            }, i.prototype.prependOnceListener = function(e, t) {
                return c(t), this.prependListener(e, f(this, e, t)), this
            }, i.prototype.removeListener = function(e, t) {
                var n, r, o, i, s;
                if (c(t), void 0 === (r = this._events)) return this;
                if (void 0 === (n = r[e])) return this;
                if (n === t || n.listener === t) 0 === --this._eventsCount ? this._events = Object.create(null) : (delete r[e], r.removeListener && this.emit("removeListener", e, n.listener || t));
                else if ("function" !== typeof n) {
                    for (o = -1, i = n.length - 1; i >= 0; i--)
                        if (n[i] === t || n[i].listener === t) {
                            s = n[i].listener, o = i;
                            break
                        }
                    if (o < 0) return this;
                    0 === o ? n.shift() : function(e, t) {
                        for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                        e.pop()
                    }(n, o), 1 === n.length && (r[e] = n[0]), void 0 !== r.removeListener && this.emit("removeListener", e, s || t)
                }
                return this
            }, i.prototype.off = i.prototype.removeListener, i.prototype.removeAllListeners = function(e) {
                var t, n, r;
                if (void 0 === (n = this._events)) return this;
                if (void 0 === n.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== n[e] && (0 === --this._eventsCount ? this._events = Object.create(null) : delete n[e]), this;
                if (0 === arguments.length) {
                    var o, i = Object.keys(n);
                    for (r = 0; r < i.length; ++r) "removeListener" !== (o = i[r]) && this.removeAllListeners(o);
                    return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
                }
                if ("function" === typeof(t = n[e])) this.removeListener(e, t);
                else if (void 0 !== t)
                    for (r = t.length - 1; r >= 0; r--) this.removeListener(e, t[r]);
                return this
            }, i.prototype.listeners = function(e) {
                return d(this, e, !0)
            }, i.prototype.rawListeners = function(e) {
                return d(this, e, !1)
            }, i.listenerCount = function(e, t) {
                return "function" === typeof e.listenerCount ? e.listenerCount(t) : h.call(e, t)
            }, i.prototype.listenerCount = h, i.prototype.eventNames = function() {
                return this._eventsCount > 0 ? t(this._events) : []
            }
        },
        92806: function(e) {
            "use strict";
            e.exports = function(e, t) {
                for (var n = {}, r = Object.keys(e), o = Array.isArray(t), i = 0; i < r.length; i++) {
                    var s = r[i],
                        c = e[s];
                    (o ? -1 !== t.indexOf(s) : t(s, c, e)) && (n[s] = c)
                }
                return n
            }
        },
        4501: function(e) {
            e.exports = r, r.strict = o, r.loose = i;
            var t = Object.prototype.toString,
                n = {
                    "[object Int8Array]": !0,
                    "[object Int16Array]": !0,
                    "[object Int32Array]": !0,
                    "[object Uint8Array]": !0,
                    "[object Uint8ClampedArray]": !0,
                    "[object Uint16Array]": !0,
                    "[object Uint32Array]": !0,
                    "[object Float32Array]": !0,
                    "[object Float64Array]": !0
                };

            function r(e) {
                return o(e) || i(e)
            }

            function o(e) {
                return e instanceof Int8Array || e instanceof Int16Array || e instanceof Int32Array || e instanceof Uint8Array || e instanceof Uint8ClampedArray || e instanceof Uint16Array || e instanceof Uint32Array || e instanceof Float32Array || e instanceof Float64Array
            }

            function i(e) {
                return n[t.call(e)]
            }
        },
        57423: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Children: function() {
                    return Ne
                },
                Component: function() {
                    return w
                },
                Fragment: function() {
                    return v
                },
                PureComponent: function() {
                    return xe
                },
                StrictMode: function() {
                    return gt
                },
                Suspense: function() {
                    return Ue
                },
                SuspenseList: function() {
                    return je
                },
                __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: function() {
                    return ct
                },
                cloneElement: function() {
                    return ft
                },
                createContext: function() {
                    return F
                },
                createElement: function() {
                    return g
                },
                createFactory: function() {
                    return ut
                },
                createPortal: function() {
                    return Fe
                },
                createRef: function() {
                    return y
                },
                default: function() {
                    return Et
                },
                findDOMNode: function() {
                    return ht
                },
                flushSync: function() {
                    return _t
                },
                forwardRef: function() {
                    return ke
                },
                hydrate: function() {
                    return Ye
                },
                isValidElement: function() {
                    return lt
                },
                lazy: function() {
                    return De
                },
                memo: function() {
                    return Ce
                },
                render: function() {
                    return Ge
                },
                startTransition: function() {
                    return mt
                },
                unmountComponentAtNode: function() {
                    return dt
                },
                unstable_batchedUpdates: function() {
                    return pt
                },
                useCallback: function() {
                    return le
                },
                useContext: function() {
                    return fe
                },
                useDebugValue: function() {
                    return de
                },
                useDeferredValue: function() {
                    return yt
                },
                useEffect: function() {
                    return ie
                },
                useErrorBoundary: function() {
                    return he
                },
                useId: function() {
                    return pe
                },
                useImperativeHandle: function() {
                    return ae
                },
                useInsertionEffect: function() {
                    return wt
                },
                useLayoutEffect: function() {
                    return se
                },
                useMemo: function() {
                    return ue
                },
                useReducer: function() {
                    return oe
                },
                useRef: function() {
                    return ce
                },
                useState: function() {
                    return re
                },
                useSyncExternalStore: function() {
                    return bt
                },
                useTransition: function() {
                    return vt
                },
                version: function() {
                    return at
                }
            });
            var r, o, i, s, c, a, u, l, f = {},
                d = [],
                h = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

            function p(e, t) {
                for (var n in t) e[n] = t[n];
                return e
            }

            function _(e) {
                var t = e.parentNode;
                t && t.removeChild(e)
            }

            function g(e, t, n) {
                var o, i, s, c = {};
                for (s in t) "key" == s ? o = t[s] : "ref" == s ? i = t[s] : c[s] = t[s];
                if (arguments.length > 2 && (c.children = arguments.length > 3 ? r.call(arguments, 2) : n), "function" == typeof e && null != e.defaultProps)
                    for (s in e.defaultProps) void 0 === c[s] && (c[s] = e.defaultProps[s]);
                return m(e, c, o, i, null)
            }

            function m(e, t, n, r, s) {
                var c = {
                    type: e,
                    props: t,
                    key: n,
                    ref: r,
                    __k: null,
                    __: null,
                    __b: 0,
                    __e: null,
                    __d: void 0,
                    __c: null,
                    __h: null,
                    constructor: void 0,
                    __v: null == s ? ++i : s
                };
                return null == s && null != o.vnode && o.vnode(c), c
            }

            function y() {
                return {
                    current: null
                }
            }

            function v(e) {
                return e.children
            }

            function w(e, t) {
                this.props = e, this.context = t
            }

            function b(e, t) {
                if (null == t) return e.__ ? b(e.__, e.__.__k.indexOf(e) + 1) : null;
                for (var n; t < e.__k.length; t++)
                    if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
                return "function" == typeof e.type ? b(e) : null
            }

            function E(e) {
                var t, n;
                if (null != (e = e.__) && null != e.__c) {
                    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
                        if (null != (n = e.__k[t]) && null != n.__e) {
                            e.__e = e.__c.base = n.__e;
                            break
                        }
                    return E(e)
                }
            }

            function R(e) {
                (!e.__d && (e.__d = !0) && s.push(e) && !S.__r++ || c !== o.debounceRendering) && ((c = o.debounceRendering) || a)(S)
            }

            function S() {
                var e, t, n, r, o, i, c, a;
                for (s.sort(u); e = s.shift();) e.__d && (t = s.length, r = void 0, o = void 0, c = (i = (n = e).__v).__e, (a = n.__P) && (r = [], (o = p({}, i)).__v = i.__v + 1, L(a, i, o, n.__n, void 0 !== a.ownerSVGElement, null != i.__h ? [c] : null, r, null == c ? b(i) : c, i.__h), P(r, i), i.__e != c && E(i)), s.length > t && s.sort(u));
                S.__r = 0
            }

            function x(e, t, n, r, o, i, s, c, a, u) {
                var l, h, p, _, g, y, w, E = r && r.__k || d,
                    R = E.length;
                for (n.__k = [], l = 0; l < t.length; l++)
                    if (null != (_ = n.__k[l] = null == (_ = t[l]) || "boolean" == typeof _ || "function" == typeof _ ? null : "string" == typeof _ || "number" == typeof _ || "bigint" == typeof _ ? m(null, _, null, null, _) : Array.isArray(_) ? m(v, {
                            children: _
                        }, null, null, null) : _.__b > 0 ? m(_.type, _.props, _.key, _.ref ? _.ref : null, _.__v) : _)) {
                        if (_.__ = n, _.__b = n.__b + 1, null === (p = E[l]) || p && _.key == p.key && _.type === p.type) E[l] = void 0;
                        else
                            for (h = 0; h < R; h++) {
                                if ((p = E[h]) && _.key == p.key && _.type === p.type) {
                                    E[h] = void 0;
                                    break
                                }
                                p = null
                            }
                        L(e, _, p = p || f, o, i, s, c, a, u), g = _.__e, (h = _.ref) && p.ref != h && (w || (w = []), p.ref && w.push(p.ref, null, _), w.push(h, _.__c || g, _)), null != g ? (null == y && (y = g), "function" == typeof _.type && _.__k === p.__k ? _.__d = a = C(_, a, e) : a = O(e, _, p, E, g, a), "function" == typeof n.type && (n.__d = a)) : a && p.__e == a && a.parentNode != e && (a = b(p))
                    }
                for (n.__e = y, l = R; l--;) null != E[l] && ("function" == typeof n.type && null != E[l].__e && E[l].__e == n.__d && (n.__d = k(r).nextSibling), D(E[l], E[l]));
                if (w)
                    for (l = 0; l < w.length; l++) B(w[l], w[++l], w[++l])
            }

            function C(e, t, n) {
                for (var r, o = e.__k, i = 0; o && i < o.length; i++)(r = o[i]) && (r.__ = e, t = "function" == typeof r.type ? C(r, t, n) : O(n, r, r, o, r.__e, t));
                return t
            }

            function I(e, t) {
                return t = t || [], null == e || "boolean" == typeof e || (Array.isArray(e) ? e.some((function(e) {
                    I(e, t)
                })) : t.push(e)), t
            }

            function O(e, t, n, r, o, i) {
                var s, c, a;
                if (void 0 !== t.__d) s = t.__d, t.__d = void 0;
                else if (null == n || o != i || null == o.parentNode) e: if (null == i || i.parentNode !== e) e.appendChild(o), s = null;
                    else {
                        for (c = i, a = 0;
                            (c = c.nextSibling) && a < r.length; a += 1)
                            if (c == o) break e;
                        e.insertBefore(o, i), s = i
                    }
                return void 0 !== s ? s : o.nextSibling
            }

            function k(e) {
                var t, n, r;
                if (null == e.type || "string" == typeof e.type) return e.__e;
                if (e.__k)
                    for (t = e.__k.length - 1; t >= 0; t--)
                        if ((n = e.__k[t]) && (r = k(n))) return r;
                return null
            }

            function T(e, t, n) {
                "-" === t[0] ? e.setProperty(t, null == n ? "" : n) : e[t] = null == n ? "" : "number" != typeof n || h.test(t) ? n : n + "px"
            }

            function N(e, t, n, r, o) {
                var i;
                e: if ("style" === t)
                    if ("string" == typeof n) e.style.cssText = n;
                    else {
                        if ("string" == typeof r && (e.style.cssText = r = ""), r)
                            for (t in r) n && t in n || T(e.style, t, "");
                        if (n)
                            for (t in n) r && n[t] === r[t] || T(e.style, t, n[t])
                    }
                else if ("o" === t[0] && "n" === t[1]) i = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = n, n ? r || e.addEventListener(t, i ? A : M, i) : e.removeEventListener(t, i ? A : M, i);
                else if ("dangerouslySetInnerHTML" !== t) {
                    if (o) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
                    else if ("width" !== t && "height" !== t && "href" !== t && "list" !== t && "form" !== t && "tabIndex" !== t && "download" !== t && t in e) try {
                        e[t] = null == n ? "" : n;
                        break e
                    } catch (e) {}
                    "function" == typeof n || (null == n || !1 === n && -1 == t.indexOf("-") ? e.removeAttribute(t) : e.setAttribute(t, n))
                }
            }

            function M(e) {
                return this.l[e.type + !1](o.event ? o.event(e) : e)
            }

            function A(e) {
                return this.l[e.type + !0](o.event ? o.event(e) : e)
            }

            function L(e, t, n, r, i, s, c, a, u) {
                var l, f, d, h, _, g, m, y, b, E, R, S, C, I, O, k = t.type;
                if (void 0 !== t.constructor) return null;
                null != n.__h && (u = n.__h, a = t.__e = n.__e, t.__h = null, s = [a]), (l = o.__b) && l(t);
                try {
                    e: if ("function" == typeof k) {
                        if (y = t.props, b = (l = k.contextType) && r[l.__c], E = l ? b ? b.props.value : l.__ : r, n.__c ? m = (f = t.__c = n.__c).__ = f.__E : ("prototype" in k && k.prototype.render ? t.__c = f = new k(y, E) : (t.__c = f = new w(y, E), f.constructor = k, f.render = j), b && b.sub(f), f.props = y, f.state || (f.state = {}), f.context = E, f.__n = r, d = f.__d = !0, f.__h = [], f._sb = []), null == f.__s && (f.__s = f.state), null != k.getDerivedStateFromProps && (f.__s == f.state && (f.__s = p({}, f.__s)), p(f.__s, k.getDerivedStateFromProps(y, f.__s))), h = f.props, _ = f.state, f.__v = t, d) null == k.getDerivedStateFromProps && null != f.componentWillMount && f.componentWillMount(), null != f.componentDidMount && f.__h.push(f.componentDidMount);
                        else {
                            if (null == k.getDerivedStateFromProps && y !== h && null != f.componentWillReceiveProps && f.componentWillReceiveProps(y, E), !f.__e && null != f.shouldComponentUpdate && !1 === f.shouldComponentUpdate(y, f.__s, E) || t.__v === n.__v) {
                                for (t.__v !== n.__v && (f.props = y, f.state = f.__s, f.__d = !1), f.__e = !1, t.__e = n.__e, t.__k = n.__k, t.__k.forEach((function(e) {
                                        e && (e.__ = t)
                                    })), R = 0; R < f._sb.length; R++) f.__h.push(f._sb[R]);
                                f._sb = [], f.__h.length && c.push(f);
                                break e
                            }
                            null != f.componentWillUpdate && f.componentWillUpdate(y, f.__s, E), null != f.componentDidUpdate && f.__h.push((function() {
                                f.componentDidUpdate(h, _, g)
                            }))
                        }
                        if (f.context = E, f.props = y, f.__P = e, S = o.__r, C = 0, "prototype" in k && k.prototype.render) {
                            for (f.state = f.__s, f.__d = !1, S && S(t), l = f.render(f.props, f.state, f.context), I = 0; I < f._sb.length; I++) f.__h.push(f._sb[I]);
                            f._sb = []
                        } else
                            do {
                                f.__d = !1, S && S(t), l = f.render(f.props, f.state, f.context), f.state = f.__s
                            } while (f.__d && ++C < 25);
                        f.state = f.__s, null != f.getChildContext && (r = p(p({}, r), f.getChildContext())), d || null == f.getSnapshotBeforeUpdate || (g = f.getSnapshotBeforeUpdate(h, _)), O = null != l && l.type === v && null == l.key ? l.props.children : l, x(e, Array.isArray(O) ? O : [O], t, n, r, i, s, c, a, u), f.base = t.__e, t.__h = null, f.__h.length && c.push(f), m && (f.__E = f.__ = null), f.__e = !1
                    } else null == s && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = U(n.__e, t, n, r, i, s, c, u);
                    (l = o.diffed) && l(t)
                }
                catch (e) {
                    t.__v = null, (u || null != s) && (t.__e = a, t.__h = !!u, s[s.indexOf(a)] = null), o.__e(e, t, n)
                }
            }

            function P(e, t) {
                o.__c && o.__c(t, e), e.some((function(t) {
                    try {
                        e = t.__h, t.__h = [], e.some((function(e) {
                            e.call(t)
                        }))
                    } catch (e) {
                        o.__e(e, t.__v)
                    }
                }))
            }

            function U(e, t, n, o, i, s, c, a) {
                var u, l, d, h = n.props,
                    p = t.props,
                    g = t.type,
                    m = 0;
                if ("svg" === g && (i = !0), null != s)
                    for (; m < s.length; m++)
                        if ((u = s[m]) && "setAttribute" in u == !!g && (g ? u.localName === g : 3 === u.nodeType)) {
                            e = u, s[m] = null;
                            break
                        }
                if (null == e) {
                    if (null === g) return document.createTextNode(p);
                    e = i ? document.createElementNS("http://www.w3.org/2000/svg", g) : document.createElement(g, p.is && p), s = null, a = !1
                }
                if (null === g) h === p || a && e.data === p || (e.data = p);
                else {
                    if (s = s && r.call(e.childNodes), l = (h = n.props || f).dangerouslySetInnerHTML, d = p.dangerouslySetInnerHTML, !a) {
                        if (null != s)
                            for (h = {}, m = 0; m < e.attributes.length; m++) h[e.attributes[m].name] = e.attributes[m].value;
                        (d || l) && (d && (l && d.__html == l.__html || d.__html === e.innerHTML) || (e.innerHTML = d && d.__html || ""))
                    }
                    if (function(e, t, n, r, o) {
                            var i;
                            for (i in n) "children" === i || "key" === i || i in t || N(e, i, null, n[i], r);
                            for (i in t) o && "function" != typeof t[i] || "children" === i || "key" === i || "value" === i || "checked" === i || n[i] === t[i] || N(e, i, t[i], n[i], r)
                        }(e, p, h, i, a), d) t.__k = [];
                    else if (m = t.props.children, x(e, Array.isArray(m) ? m : [m], t, n, o, i && "foreignObject" !== g, s, c, s ? s[0] : n.__k && b(n, 0), a), null != s)
                        for (m = s.length; m--;) null != s[m] && _(s[m]);
                    a || ("value" in p && void 0 !== (m = p.value) && (m !== e.value || "progress" === g && !m || "option" === g && m !== h.value) && N(e, "value", m, h.value, !1), "checked" in p && void 0 !== (m = p.checked) && m !== e.checked && N(e, "checked", m, h.checked, !1))
                }
                return e
            }

            function B(e, t, n) {
                try {
                    "function" == typeof e ? e(t) : e.current = t
                } catch (e) {
                    o.__e(e, n)
                }
            }

            function D(e, t, n) {
                var r, i;
                if (o.unmount && o.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || B(r, null, t)), null != (r = e.__c)) {
                    if (r.componentWillUnmount) try {
                        r.componentWillUnmount()
                    } catch (e) {
                        o.__e(e, t)
                    }
                    r.base = r.__P = null, e.__c = void 0
                }
                if (r = e.__k)
                    for (i = 0; i < r.length; i++) r[i] && D(r[i], t, n || "function" != typeof e.type);
                n || null == e.__e || _(e.__e), e.__ = e.__e = e.__d = void 0
            }

            function j(e, t, n) {
                return this.constructor(e, n)
            }

            function q(e, t, n) {
                var i, s, c;
                o.__ && o.__(e, t), s = (i = "function" == typeof n) ? null : n && n.__k || t.__k, c = [], L(t, e = (!i && n || t).__k = g(v, null, [e]), s || f, f, void 0 !== t.ownerSVGElement, !i && n ? [n] : s ? null : t.firstChild ? r.call(t.childNodes) : null, c, !i && n ? n : s ? s.__e : t.firstChild, i), P(c, e)
            }

            function J(e, t) {
                q(e, t, J)
            }

            function H(e, t, n) {
                var o, i, s, c = p({}, e.props);
                for (s in t) "key" == s ? o = t[s] : "ref" == s ? i = t[s] : c[s] = t[s];
                return arguments.length > 2 && (c.children = arguments.length > 3 ? r.call(arguments, 2) : n), m(e.type, c, o || e.key, i || e.ref, null)
            }

            function F(e, t) {
                var n = {
                    __c: t = "__cC" + l++,
                    __: e,
                    Consumer: function(e, t) {
                        return e.children(t)
                    },
                    Provider: function(e) {
                        var n, r;
                        return this.getChildContext || (n = [], (r = {})[t] = this, this.getChildContext = function() {
                            return r
                        }, this.shouldComponentUpdate = function(e) {
                            this.props.value !== e.value && n.some((function(e) {
                                e.__e = !0, R(e)
                            }))
                        }, this.sub = function(e) {
                            n.push(e);
                            var t = e.componentWillUnmount;
                            e.componentWillUnmount = function() {
                                n.splice(n.indexOf(e), 1), t && t.call(e)
                            }
                        }), e.children
                    }
                };
                return n.Provider.__ = n.Consumer.contextType = n
            }
            r = d.slice, o = {
                __e: function(e, t, n, r) {
                    for (var o, i, s; t = t.__;)
                        if ((o = t.__c) && !o.__) try {
                            if ((i = o.constructor) && null != i.getDerivedStateFromError && (o.setState(i.getDerivedStateFromError(e)), s = o.__d), null != o.componentDidCatch && (o.componentDidCatch(e, r || {}), s = o.__d), s) return o.__E = o
                        } catch (t) {
                            e = t
                        }
                    throw e
                }
            }, i = 0, w.prototype.setState = function(e, t) {
                var n;
                n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = p({}, this.state), "function" == typeof e && (e = e(p({}, n), this.props)), e && p(n, e), null != e && this.__v && (t && this._sb.push(t), R(this))
            }, w.prototype.forceUpdate = function(e) {
                this.__v && (this.__e = !0, e && this.__h.push(e), R(this))
            }, w.prototype.render = v, s = [], a = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, u = function(e, t) {
                return e.__v.__b - t.__v.__b
            }, S.__r = 0, l = 0;
            var W, z, $, V, K = 0,
                Q = [],
                G = [],
                Y = o.__b,
                Z = o.__r,
                X = o.diffed,
                ee = o.__c,
                te = o.unmount;

            function ne(e, t) {
                o.__h && o.__h(z, e, K || t), K = 0;
                var n = z.__H || (z.__H = {
                    __: [],
                    __h: []
                });
                return e >= n.__.length && n.__.push({
                    __V: G
                }), n.__[e]
            }

            function re(e) {
                return K = 1, oe(be, e)
            }

            function oe(e, t, n) {
                var r = ne(W++, 2);
                if (r.t = e, !r.__c && (r.__ = [n ? n(t) : be(void 0, t), function(e) {
                        var t = r.__N ? r.__N[0] : r.__[0],
                            n = r.t(t, e);
                        t !== n && (r.__N = [n, r.__[1]], r.__c.setState({}))
                    }], r.__c = z, !z.u)) {
                    var o = function(e, t, n) {
                        if (!r.__c.__H) return !0;
                        var o = r.__c.__H.__.filter((function(e) {
                            return e.__c
                        }));
                        if (o.every((function(e) {
                                return !e.__N
                            }))) return !i || i.call(this, e, t, n);
                        var s = !1;
                        return o.forEach((function(e) {
                            if (e.__N) {
                                var t = e.__[0];
                                e.__ = e.__N, e.__N = void 0, t !== e.__[0] && (s = !0)
                            }
                        })), !(!s && r.__c.props === e) && (!i || i.call(this, e, t, n))
                    };
                    z.u = !0;
                    var i = z.shouldComponentUpdate,
                        s = z.componentWillUpdate;
                    z.componentWillUpdate = function(e, t, n) {
                        if (this.__e) {
                            var r = i;
                            i = void 0, o(e, t, n), i = r
                        }
                        s && s.call(this, e, t, n)
                    }, z.shouldComponentUpdate = o
                }
                return r.__N || r.__
            }

            function ie(e, t) {
                var n = ne(W++, 3);
                !o.__s && we(n.__H, t) && (n.__ = e, n.i = t, z.__H.__h.push(n))
            }

            function se(e, t) {
                var n = ne(W++, 4);
                !o.__s && we(n.__H, t) && (n.__ = e, n.i = t, z.__h.push(n))
            }

            function ce(e) {
                return K = 5, ue((function() {
                    return {
                        current: e
                    }
                }), [])
            }

            function ae(e, t, n) {
                K = 6, se((function() {
                    return "function" == typeof e ? (e(t()), function() {
                        return e(null)
                    }) : e ? (e.current = t(), function() {
                        return e.current = null
                    }) : void 0
                }), null == n ? n : n.concat(e))
            }

            function ue(e, t) {
                var n = ne(W++, 7);
                return we(n.__H, t) ? (n.__V = e(), n.i = t, n.__h = e, n.__V) : n.__
            }

            function le(e, t) {
                return K = 8, ue((function() {
                    return e
                }), t)
            }

            function fe(e) {
                var t = z.context[e.__c],
                    n = ne(W++, 9);
                return n.c = e, t ? (null == n.__ && (n.__ = !0, t.sub(z)), t.props.value) : e.__
            }

            function de(e, t) {
                o.useDebugValue && o.useDebugValue(t ? t(e) : e)
            }

            function he(e) {
                var t = ne(W++, 10),
                    n = re();
                return t.__ = e, z.componentDidCatch || (z.componentDidCatch = function(e, r) {
                    t.__ && t.__(e, r), n[1](e)
                }), [n[0], function() {
                    n[1](void 0)
                }]
            }

            function pe() {
                var e = ne(W++, 11);
                if (!e.__) {
                    for (var t = z.__v; null !== t && !t.__m && null !== t.__;) t = t.__;
                    var n = t.__m || (t.__m = [0, 0]);
                    e.__ = "P" + n[0] + "-" + n[1]++
                }
                return e.__
            }

            function _e() {
                for (var e; e = Q.shift();)
                    if (e.__P && e.__H) try {
                        e.__H.__h.forEach(ye), e.__H.__h.forEach(ve), e.__H.__h = []
                    } catch (c) {
                        e.__H.__h = [], o.__e(c, e.__v)
                    }
            }
            o.__b = function(e) {
                z = null, Y && Y(e)
            }, o.__r = function(e) {
                Z && Z(e), W = 0;
                var t = (z = e.__c).__H;
                t && ($ === z ? (t.__h = [], z.__h = [], t.__.forEach((function(e) {
                    e.__N && (e.__ = e.__N), e.__V = G, e.__N = e.i = void 0
                }))) : (t.__h.forEach(ye), t.__h.forEach(ve), t.__h = [])), $ = z
            }, o.diffed = function(e) {
                X && X(e);
                var t = e.__c;
                t && t.__H && (t.__H.__h.length && (1 !== Q.push(t) && V === o.requestAnimationFrame || ((V = o.requestAnimationFrame) || me)(_e)), t.__H.__.forEach((function(e) {
                    e.i && (e.__H = e.i), e.__V !== G && (e.__ = e.__V), e.i = void 0, e.__V = G
                }))), $ = z = null
            }, o.__c = function(e, t) {
                t.some((function(e) {
                    try {
                        e.__h.forEach(ye), e.__h = e.__h.filter((function(e) {
                            return !e.__ || ve(e)
                        }))
                    } catch (i) {
                        t.some((function(e) {
                            e.__h && (e.__h = [])
                        })), t = [], o.__e(i, e.__v)
                    }
                })), ee && ee(e, t)
            }, o.unmount = function(e) {
                te && te(e);
                var t, n = e.__c;
                n && n.__H && (n.__H.__.forEach((function(e) {
                    try {
                        ye(e)
                    } catch (e) {
                        t = e
                    }
                })), n.__H = void 0, t && o.__e(t, n.__v))
            };
            var ge = "function" == typeof requestAnimationFrame;

            function me(e) {
                var t, n = function() {
                        clearTimeout(r), ge && cancelAnimationFrame(t), setTimeout(e)
                    },
                    r = setTimeout(n, 100);
                ge && (t = requestAnimationFrame(n))
            }

            function ye(e) {
                var t = z,
                    n = e.__c;
                "function" == typeof n && (e.__c = void 0, n()), z = t
            }

            function ve(e) {
                var t = z;
                e.__c = e.__(), z = t
            }

            function we(e, t) {
                return !e || e.length !== t.length || t.some((function(t, n) {
                    return t !== e[n]
                }))
            }

            function be(e, t) {
                return "function" == typeof t ? t(e) : t
            }

            function Ee(e, t) {
                for (var n in t) e[n] = t[n];
                return e
            }

            function Re(e, t) {
                for (var n in e)
                    if ("__source" !== n && !(n in t)) return !0;
                for (var r in t)
                    if ("__source" !== r && e[r] !== t[r]) return !0;
                return !1
            }

            function Se(e, t) {
                return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
            }

            function xe(e) {
                this.props = e
            }

            function Ce(e, t) {
                function n(e) {
                    var n = this.props.ref,
                        r = n == e.ref;
                    return !r && n && (n.call ? n(null) : n.current = null), t ? !t(this.props, e) || !r : Re(this.props, e)
                }

                function r(t) {
                    return this.shouldComponentUpdate = n, g(e, t)
                }
                return r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r
            }(xe.prototype = new w).isPureReactComponent = !0, xe.prototype.shouldComponentUpdate = function(e, t) {
                return Re(this.props, e) || Re(this.state, t)
            };
            var Ie = o.__b;
            o.__b = function(e) {
                e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), Ie && Ie(e)
            };
            var Oe = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;

            function ke(e) {
                function t(t) {
                    var n = Ee({}, t);
                    return delete n.ref, e(n, t.ref || null)
                }
                return t.$$typeof = Oe, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t
            }
            var Te = function(e, t) {
                    return null == e ? null : I(I(e).map(t))
                },
                Ne = {
                    map: Te,
                    forEach: Te,
                    count: function(e) {
                        return e ? I(e).length : 0
                    },
                    only: function(e) {
                        var t = I(e);
                        if (1 !== t.length) throw "Children.only";
                        return t[0]
                    },
                    toArray: I
                },
                Me = o.__e;
            o.__e = function(e, t, n, r) {
                if (e.then)
                    for (var o, i = t; i = i.__;)
                        if ((o = i.__c) && o.__c) return null == t.__e && (t.__e = n.__e, t.__k = n.__k), o.__c(e, t);
                Me(e, t, n, r)
            };
            var Ae = o.unmount;

            function Le(e, t, n) {
                return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach((function(e) {
                    "function" == typeof e.__c && e.__c()
                })), e.__c.__H = null), null != (e = Ee({}, e)).__c && (e.__c.__P === n && (e.__c.__P = t), e.__c = null), e.__k = e.__k && e.__k.map((function(e) {
                    return Le(e, t, n)
                }))), e
            }

            function Pe(e, t, n) {
                return e && (e.__v = null, e.__k = e.__k && e.__k.map((function(e) {
                    return Pe(e, t, n)
                })), e.__c && e.__c.__P === t && (e.__e && n.insertBefore(e.__e, e.__d), e.__c.__e = !0, e.__c.__P = n)), e
            }

            function Ue() {
                this.__u = 0, this.t = null, this.__b = null
            }

            function Be(e) {
                var t = e.__.__c;
                return t && t.__a && t.__a(e)
            }

            function De(e) {
                var t, n, r;

                function o(o) {
                    if (t || (t = e()).then((function(e) {
                            n = e.default || e
                        }), (function(e) {
                            r = e
                        })), r) throw r;
                    if (!n) throw t;
                    return g(n, o)
                }
                return o.displayName = "Lazy", o.__f = !0, o
            }

            function je() {
                this.u = null, this.o = null
            }
            o.unmount = function(e) {
                var t = e.__c;
                t && t.__R && t.__R(), t && !0 === e.__h && (e.type = null), Ae && Ae(e)
            }, (Ue.prototype = new w).__c = function(e, t) {
                var n = t.__c,
                    r = this;
                null == r.t && (r.t = []), r.t.push(n);
                var o = Be(r.__v),
                    i = !1,
                    s = function() {
                        i || (i = !0, n.__R = null, o ? o(c) : c())
                    };
                n.__R = s;
                var c = function() {
                        if (!--r.__u) {
                            if (r.state.__a) {
                                var e = r.state.__a;
                                r.__v.__k[0] = Pe(e, e.__c.__P, e.__c.__O)
                            }
                            var t;
                            for (r.setState({
                                    __a: r.__b = null
                                }); t = r.t.pop();) t.forceUpdate()
                        }
                    },
                    a = !0 === t.__h;
                r.__u++ || a || r.setState({
                    __a: r.__b = r.__v.__k[0]
                }), e.then(s, s)
            }, Ue.prototype.componentWillUnmount = function() {
                this.t = []
            }, Ue.prototype.render = function(e, t) {
                if (this.__b) {
                    if (this.__v.__k) {
                        var n = document.createElement("div"),
                            r = this.__v.__k[0].__c;
                        this.__v.__k[0] = Le(this.__b, n, r.__O = r.__P)
                    }
                    this.__b = null
                }
                var o = t.__a && g(v, null, e.fallback);
                return o && (o.__h = null), [g(v, null, t.__a ? null : e.children), o]
            };
            var qe = function(e, t, n) {
                if (++n[1] === n[0] && e.o.delete(t), e.props.revealOrder && ("t" !== e.props.revealOrder[0] || !e.o.size))
                    for (n = e.u; n;) {
                        for (; n.length > 3;) n.pop()();
                        if (n[1] < n[0]) break;
                        e.u = n = n[2]
                    }
            };

            function Je(e) {
                return this.getChildContext = function() {
                    return e.context
                }, e.children
            }

            function He(e) {
                var t = this,
                    n = e.i;
                t.componentWillUnmount = function() {
                    q(null, t.l), t.l = null, t.i = null
                }, t.i && t.i !== n && t.componentWillUnmount(), e.__v ? (t.l || (t.i = n, t.l = {
                    nodeType: 1,
                    parentNode: n,
                    childNodes: [],
                    appendChild: function(e) {
                        this.childNodes.push(e), t.i.appendChild(e)
                    },
                    insertBefore: function(e, n) {
                        this.childNodes.push(e), t.i.appendChild(e)
                    },
                    removeChild: function(e) {
                        this.childNodes.splice(this.childNodes.indexOf(e) >>> 1, 1), t.i.removeChild(e)
                    }
                }), q(g(Je, {
                    context: t.context
                }, e.__v), t.l)) : t.l && t.componentWillUnmount()
            }

            function Fe(e, t) {
                var n = g(He, {
                    __v: e,
                    i: t
                });
                return n.containerInfo = t, n
            }(je.prototype = new w).__a = function(e) {
                var t = this,
                    n = Be(t.__v),
                    r = t.o.get(e);
                return r[0]++,
                    function(o) {
                        var i = function() {
                            t.props.revealOrder ? (r.push(o), qe(t, e, r)) : o()
                        };
                        n ? n(i) : i()
                    }
            }, je.prototype.render = function(e) {
                this.u = null, this.o = new Map;
                var t = I(e.children);
                e.revealOrder && "b" === e.revealOrder[0] && t.reverse();
                for (var n = t.length; n--;) this.o.set(t[n], this.u = [1, 0, this.u]);
                return e.children
            }, je.prototype.componentDidUpdate = je.prototype.componentDidMount = function() {
                var e = this;
                this.o.forEach((function(t, n) {
                    qe(e, n, t)
                }))
            };
            var We = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
                ze = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
                $e = /^on(Ani|Tra|Tou|BeforeInp|Compo)/,
                Ve = /[A-Z0-9]/g,
                Ke = "undefined" != typeof document,
                Qe = function(e) {
                    return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(e)
                };

            function Ge(e, t, n) {
                return null == t.__k && (t.textContent = ""), q(e, t), "function" == typeof n && n(), e ? e.__c : null
            }

            function Ye(e, t, n) {
                return J(e, t), "function" == typeof n && n(), e ? e.__c : null
            }
            w.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach((function(e) {
                Object.defineProperty(w.prototype, e, {
                    configurable: !0,
                    get: function() {
                        return this["UNSAFE_" + e]
                    },
                    set: function(t) {
                        Object.defineProperty(this, e, {
                            configurable: !0,
                            writable: !0,
                            value: t
                        })
                    }
                })
            }));
            var Ze = o.event;

            function Xe() {}

            function et() {
                return this.cancelBubble
            }

            function tt() {
                return this.defaultPrevented
            }
            o.event = function(e) {
                return Ze && (e = Ze(e)), e.persist = Xe, e.isPropagationStopped = et, e.isDefaultPrevented = tt, e.nativeEvent = e
            };
            var nt, rt = {
                    configurable: !0,
                    get: function() {
                        return this.class
                    }
                },
                ot = o.vnode;
            o.vnode = function(e) {
                var t = e.type,
                    n = e.props,
                    r = n;
                if ("string" == typeof t) {
                    for (var o in r = {}, n) {
                        var i = n[o];
                        if (!("value" === o && "defaultValue" in n && null == i || Ke && "children" === o && "noscript" === t)) {
                            var s = o.toLowerCase();
                            "defaultValue" === o && "value" in n && null == n.value ? o = "value" : "download" === o && !0 === i ? i = "" : "ondoubleclick" === s ? o = "ondblclick" : "onchange" !== s || "input" !== t && "textarea" !== t || Qe(n.type) ? "onfocus" === s ? o = "onfocusin" : "onblur" === s ? o = "onfocusout" : $e.test(o) ? o = s : -1 === t.indexOf("-") && ze.test(o) ? o = o.replace(Ve, "-$&").toLowerCase() : null === i && (i = void 0) : s = o = "oninput", "oninput" === s && r[o = s] && (o = "oninputCapture"), r[o] = i
                        }
                    }
                    "select" == t && r.multiple && Array.isArray(r.value) && (r.value = I(n.children).forEach((function(e) {
                        e.props.selected = -1 != r.value.indexOf(e.props.value)
                    }))), "select" == t && null != r.defaultValue && (r.value = I(n.children).forEach((function(e) {
                        e.props.selected = r.multiple ? -1 != r.defaultValue.indexOf(e.props.value) : r.defaultValue == e.props.value
                    }))), e.props = r, n.class != n.className && (rt.enumerable = "className" in n, null != n.className && (r.class = n.className), Object.defineProperty(r, "className", rt))
                }
                e.$$typeof = We, ot && ot(e)
            };
            var it = o.__r;
            o.__r = function(e) {
                it && it(e), nt = e.__c
            };
            var st = o.diffed;
            o.diffed = function(e) {
                st && st(e);
                var t = e.props,
                    n = e.__e;
                null != n && "textarea" === e.type && "value" in t && t.value !== n.value && (n.value = null == t.value ? "" : t.value), nt = null
            };
            var ct = {
                    ReactCurrentDispatcher: {
                        current: {
                            readContext: function(e) {
                                return nt.__n[e.__c].props.value
                            }
                        }
                    }
                },
                at = "17.0.2";

            function ut(e) {
                return g.bind(null, e)
            }

            function lt(e) {
                return !!e && e.$$typeof === We
            }

            function ft(e) {
                return lt(e) ? H.apply(null, arguments) : e
            }

            function dt(e) {
                return !!e.__k && (q(null, e), !0)
            }

            function ht(e) {
                return e && (e.base || 1 === e.nodeType && e) || null
            }
            var pt = function(e, t) {
                    return e(t)
                },
                _t = function(e, t) {
                    return e(t)
                },
                gt = v;

            function mt(e) {
                e()
            }

            function yt(e) {
                return e
            }

            function vt() {
                return [!1, mt]
            }
            var wt = se;

            function bt(e, t) {
                var n = t(),
                    r = re({
                        h: {
                            __: n,
                            v: t
                        }
                    }),
                    o = r[0].h,
                    i = r[1];
                return se((function() {
                    o.__ = n, o.v = t, Se(o.__, t()) || i({
                        h: o
                    })
                }), [e, n, t]), ie((function() {
                    return Se(o.__, o.v()) || i({
                        h: o
                    }), e((function() {
                        Se(o.__, o.v()) || i({
                            h: o
                        })
                    }))
                }), [e]), n
            }
            var Et = {
                useState: re,
                useId: pe,
                useReducer: oe,
                useEffect: ie,
                useLayoutEffect: se,
                useInsertionEffect: se,
                useTransition: vt,
                useDeferredValue: yt,
                useSyncExternalStore: bt,
                startTransition: mt,
                useRef: ce,
                useImperativeHandle: ae,
                useMemo: ue,
                useCallback: le,
                useContext: fe,
                useDebugValue: de,
                version: "17.0.2",
                Children: Ne,
                render: Ge,
                hydrate: Ye,
                unmountComponentAtNode: dt,
                createPortal: Fe,
                createElement: g,
                createContext: F,
                createFactory: ut,
                cloneElement: ft,
                createRef: y,
                Fragment: v,
                isValidElement: lt,
                findDOMNode: ht,
                Component: w,
                PureComponent: xe,
                memo: Ce,
                forwardRef: ke,
                flushSync: _t,
                unstable_batchedUpdates: pt,
                StrictMode: v,
                Suspense: Ue,
                SuspenseList: je,
                lazy: De,
                __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ct
            }
        },
        92592: function(e, t, n) {
            const r = n(47138),
                o = n(95115),
                i = n(6907),
                s = n(93776);

            function c(e, t, n, i, s) {
                const c = [].slice.call(arguments, 1),
                    a = c.length,
                    u = "function" === typeof c[a - 1];
                if (!u && !r()) throw new Error("Callback required as last argument");
                if (!u) {
                    if (a < 1) throw new Error("Too few arguments provided");
                    return 1 === a ? (n = t, t = i = void 0) : 2 !== a || t.getContext || (i = n, n = t, t = void 0), new Promise((function(r, s) {
                        try {
                            const s = o.create(n, i);
                            r(e(s, t, i))
                        } catch (c) {
                            s(c)
                        }
                    }))
                }
                if (a < 2) throw new Error("Too few arguments provided");
                2 === a ? (s = n, n = t, t = i = void 0) : 3 === a && (t.getContext && "undefined" === typeof s ? (s = i, i = void 0) : (s = i, i = n, n = t, t = void 0));
                try {
                    const r = o.create(n, i);
                    s(null, e(r, t, i))
                } catch (l) {
                    s(l)
                }
            }
            t.create = o.create, t.toCanvas = c.bind(null, i.render), t.toDataURL = c.bind(null, i.renderToDataURL), t.toString = c.bind(null, (function(e, t, n) {
                return s.render(e, n)
            }))
        },
        47138: function(e) {
            e.exports = function() {
                return "function" === typeof Promise && Promise.prototype && Promise.prototype.then
            }
        },
        21845: function(e, t, n) {
            const r = n(10242).getSymbolSize;
            t.getRowColCoords = function(e) {
                if (1 === e) return [];
                const t = Math.floor(e / 7) + 2,
                    n = r(e),
                    o = 145 === n ? 26 : 2 * Math.ceil((n - 13) / (2 * t - 2)),
                    i = [n - 7];
                for (let r = 1; r < t - 1; r++) i[r] = i[r - 1] - o;
                return i.push(6), i.reverse()
            }, t.getPositions = function(e) {
                const n = [],
                    r = t.getRowColCoords(e),
                    o = r.length;
                for (let t = 0; t < o; t++)
                    for (let e = 0; e < o; e++) 0 === t && 0 === e || 0 === t && e === o - 1 || t === o - 1 && 0 === e || n.push([r[t], r[e]]);
                return n
            }
        },
        8260: function(e, t, n) {
            const r = n(76910),
                o = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];

            function i(e) {
                this.mode = r.ALPHANUMERIC, this.data = e
            }
            i.getBitsLength = function(e) {
                return 11 * Math.floor(e / 2) + e % 2 * 6
            }, i.prototype.getLength = function() {
                return this.data.length
            }, i.prototype.getBitsLength = function() {
                return i.getBitsLength(this.data.length)
            }, i.prototype.write = function(e) {
                let t;
                for (t = 0; t + 2 <= this.data.length; t += 2) {
                    let n = 45 * o.indexOf(this.data[t]);
                    n += o.indexOf(this.data[t + 1]), e.put(n, 11)
                }
                this.data.length % 2 && e.put(o.indexOf(this.data[t]), 6)
            }, e.exports = i
        },
        97245: function(e) {
            function t() {
                this.buffer = [], this.length = 0
            }
            t.prototype = {
                get: function(e) {
                    const t = Math.floor(e / 8);
                    return 1 === (this.buffer[t] >>> 7 - e % 8 & 1)
                },
                put: function(e, t) {
                    for (let n = 0; n < t; n++) this.putBit(1 === (e >>> t - n - 1 & 1))
                },
                getLengthInBits: function() {
                    return this.length
                },
                putBit: function(e) {
                    const t = Math.floor(this.length / 8);
                    this.buffer.length <= t && this.buffer.push(0), e && (this.buffer[t] |= 128 >>> this.length % 8), this.length++
                }
            }, e.exports = t
        },
        73280: function(e) {
            function t(e) {
                if (!e || e < 1) throw new Error("BitMatrix size must be defined and greater than 0");
                this.size = e, this.data = new Uint8Array(e * e), this.reservedBit = new Uint8Array(e * e)
            }
            t.prototype.set = function(e, t, n, r) {
                const o = e * this.size + t;
                this.data[o] = n, r && (this.reservedBit[o] = !0)
            }, t.prototype.get = function(e, t) {
                return this.data[e * this.size + t]
            }, t.prototype.xor = function(e, t, n) {
                this.data[e * this.size + t] ^= n
            }, t.prototype.isReserved = function(e, t) {
                return this.reservedBit[e * this.size + t]
            }, e.exports = t
        },
        43424: function(e, t, n) {
            const r = n(62378),
                o = n(76910);

            function i(e) {
                this.mode = o.BYTE, "string" === typeof e && (e = r(e)), this.data = new Uint8Array(e)
            }
            i.getBitsLength = function(e) {
                return 8 * e
            }, i.prototype.getLength = function() {
                return this.data.length
            }, i.prototype.getBitsLength = function() {
                return i.getBitsLength(this.data.length)
            }, i.prototype.write = function(e) {
                for (let t = 0, n = this.data.length; t < n; t++) e.put(this.data[t], 8)
            }, e.exports = i
        },
        35393: function(e, t, n) {
            const r = n(64908),
                o = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81],
                i = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
            t.getBlocksCount = function(e, t) {
                switch (t) {
                    case r.L:
                        return o[4 * (e - 1) + 0];
                    case r.M:
                        return o[4 * (e - 1) + 1];
                    case r.Q:
                        return o[4 * (e - 1) + 2];
                    case r.H:
                        return o[4 * (e - 1) + 3];
                    default:
                        return
                }
            }, t.getTotalCodewordsCount = function(e, t) {
                switch (t) {
                    case r.L:
                        return i[4 * (e - 1) + 0];
                    case r.M:
                        return i[4 * (e - 1) + 1];
                    case r.Q:
                        return i[4 * (e - 1) + 2];
                    case r.H:
                        return i[4 * (e - 1) + 3];
                    default:
                        return
                }
            }
        },
        64908: function(e, t) {
            t.L = {
                bit: 1
            }, t.M = {
                bit: 0
            }, t.Q = {
                bit: 3
            }, t.H = {
                bit: 2
            }, t.isValid = function(e) {
                return e && "undefined" !== typeof e.bit && e.bit >= 0 && e.bit < 4
            }, t.from = function(e, n) {
                if (t.isValid(e)) return e;
                try {
                    return function(e) {
                        if ("string" !== typeof e) throw new Error("Param is not a string");
                        switch (e.toLowerCase()) {
                            case "l":
                            case "low":
                                return t.L;
                            case "m":
                            case "medium":
                                return t.M;
                            case "q":
                            case "quartile":
                                return t.Q;
                            case "h":
                            case "high":
                                return t.H;
                            default:
                                throw new Error("Unknown EC Level: " + e)
                        }
                    }(e)
                } catch (r) {
                    return n
                }
            }
        },
        76526: function(e, t, n) {
            const r = n(10242).getSymbolSize;
            t.getPositions = function(e) {
                const t = r(e);
                return [
                    [0, 0],
                    [t - 7, 0],
                    [0, t - 7]
                ]
            }
        },
        61642: function(e, t, n) {
            const r = n(10242),
                o = r.getBCHDigit(1335);
            t.getEncodedBits = function(e, t) {
                const n = e.bit << 3 | t;
                let i = n << 10;
                for (; r.getBCHDigit(i) - o >= 0;) i ^= 1335 << r.getBCHDigit(i) - o;
                return 21522 ^ (n << 10 | i)
            }
        },
        69729: function(e, t) {
            const n = new Uint8Array(512),
                r = new Uint8Array(256);
            ! function() {
                let e = 1;
                for (let t = 0; t < 255; t++) n[t] = e, r[e] = t, e <<= 1, 256 & e && (e ^= 285);
                for (let t = 255; t < 512; t++) n[t] = n[t - 255]
            }(), t.log = function(e) {
                if (e < 1) throw new Error("log(" + e + ")");
                return r[e]
            }, t.exp = function(e) {
                return n[e]
            }, t.mul = function(e, t) {
                return 0 === e || 0 === t ? 0 : n[r[e] + r[t]]
            }
        },
        35442: function(e, t, n) {
            const r = n(76910),
                o = n(10242);

            function i(e) {
                this.mode = r.KANJI, this.data = e
            }
            i.getBitsLength = function(e) {
                return 13 * e
            }, i.prototype.getLength = function() {
                return this.data.length
            }, i.prototype.getBitsLength = function() {
                return i.getBitsLength(this.data.length)
            }, i.prototype.write = function(e) {
                let t;
                for (t = 0; t < this.data.length; t++) {
                    let n = o.toSJIS(this.data[t]);
                    if (n >= 33088 && n <= 40956) n -= 33088;
                    else {
                        if (!(n >= 57408 && n <= 60351)) throw new Error("Invalid SJIS character: " + this.data[t] + "\nMake sure your charset is UTF-8");
                        n -= 49472
                    }
                    n = 192 * (n >>> 8 & 255) + (255 & n), e.put(n, 13)
                }
            }, e.exports = i
        },
        27126: function(e, t) {
            t.Patterns = {
                PATTERN000: 0,
                PATTERN001: 1,
                PATTERN010: 2,
                PATTERN011: 3,
                PATTERN100: 4,
                PATTERN101: 5,
                PATTERN110: 6,
                PATTERN111: 7
            };
            const n = 3,
                r = 3,
                o = 40,
                i = 10;

            function s(e, n, r) {
                switch (e) {
                    case t.Patterns.PATTERN000:
                        return (n + r) % 2 === 0;
                    case t.Patterns.PATTERN001:
                        return n % 2 === 0;
                    case t.Patterns.PATTERN010:
                        return r % 3 === 0;
                    case t.Patterns.PATTERN011:
                        return (n + r) % 3 === 0;
                    case t.Patterns.PATTERN100:
                        return (Math.floor(n / 2) + Math.floor(r / 3)) % 2 === 0;
                    case t.Patterns.PATTERN101:
                        return n * r % 2 + n * r % 3 === 0;
                    case t.Patterns.PATTERN110:
                        return (n * r % 2 + n * r % 3) % 2 === 0;
                    case t.Patterns.PATTERN111:
                        return (n * r % 3 + (n + r) % 2) % 2 === 0;
                    default:
                        throw new Error("bad maskPattern:" + e)
                }
            }
            t.isValid = function(e) {
                return null != e && "" !== e && !isNaN(e) && e >= 0 && e <= 7
            }, t.from = function(e) {
                return t.isValid(e) ? parseInt(e, 10) : void 0
            }, t.getPenaltyN1 = function(e) {
                const t = e.size;
                let r = 0,
                    o = 0,
                    i = 0,
                    s = null,
                    c = null;
                for (let a = 0; a < t; a++) {
                    o = i = 0, s = c = null;
                    for (let u = 0; u < t; u++) {
                        let t = e.get(a, u);
                        t === s ? o++ : (o >= 5 && (r += n + (o - 5)), s = t, o = 1), t = e.get(u, a), t === c ? i++ : (i >= 5 && (r += n + (i - 5)), c = t, i = 1)
                    }
                    o >= 5 && (r += n + (o - 5)), i >= 5 && (r += n + (i - 5))
                }
                return r
            }, t.getPenaltyN2 = function(e) {
                const t = e.size;
                let n = 0;
                for (let r = 0; r < t - 1; r++)
                    for (let o = 0; o < t - 1; o++) {
                        const t = e.get(r, o) + e.get(r, o + 1) + e.get(r + 1, o) + e.get(r + 1, o + 1);
                        4 !== t && 0 !== t || n++
                    }
                return n * r
            }, t.getPenaltyN3 = function(e) {
                const t = e.size;
                let n = 0,
                    r = 0,
                    i = 0;
                for (let o = 0; o < t; o++) {
                    r = i = 0;
                    for (let s = 0; s < t; s++) r = r << 1 & 2047 | e.get(o, s), s >= 10 && (1488 === r || 93 === r) && n++, i = i << 1 & 2047 | e.get(s, o), s >= 10 && (1488 === i || 93 === i) && n++
                }
                return n * o
            }, t.getPenaltyN4 = function(e) {
                let t = 0;
                const n = e.data.length;
                for (let r = 0; r < n; r++) t += e.data[r];
                return Math.abs(Math.ceil(100 * t / n / 5) - 10) * i
            }, t.applyMask = function(e, t) {
                const n = t.size;
                for (let r = 0; r < n; r++)
                    for (let o = 0; o < n; o++) t.isReserved(o, r) || t.xor(o, r, s(e, o, r))
            }, t.getBestMask = function(e, n) {
                const r = Object.keys(t.Patterns).length;
                let o = 0,
                    i = 1 / 0;
                for (let s = 0; s < r; s++) {
                    n(s), t.applyMask(s, e);
                    const r = t.getPenaltyN1(e) + t.getPenaltyN2(e) + t.getPenaltyN3(e) + t.getPenaltyN4(e);
                    t.applyMask(s, e), r < i && (i = r, o = s)
                }
                return o
            }
        },
        76910: function(e, t, n) {
            const r = n(43114),
                o = n(7007);
            t.NUMERIC = {
                id: "Numeric",
                bit: 1,
                ccBits: [10, 12, 14]
            }, t.ALPHANUMERIC = {
                id: "Alphanumeric",
                bit: 2,
                ccBits: [9, 11, 13]
            }, t.BYTE = {
                id: "Byte",
                bit: 4,
                ccBits: [8, 16, 16]
            }, t.KANJI = {
                id: "Kanji",
                bit: 8,
                ccBits: [8, 10, 12]
            }, t.MIXED = {
                bit: -1
            }, t.getCharCountIndicator = function(e, t) {
                if (!e.ccBits) throw new Error("Invalid mode: " + e);
                if (!r.isValid(t)) throw new Error("Invalid version: " + t);
                return t >= 1 && t < 10 ? e.ccBits[0] : t < 27 ? e.ccBits[1] : e.ccBits[2]
            }, t.getBestModeForData = function(e) {
                return o.testNumeric(e) ? t.NUMERIC : o.testAlphanumeric(e) ? t.ALPHANUMERIC : o.testKanji(e) ? t.KANJI : t.BYTE
            }, t.toString = function(e) {
                if (e && e.id) return e.id;
                throw new Error("Invalid mode")
            }, t.isValid = function(e) {
                return e && e.bit && e.ccBits
            }, t.from = function(e, n) {
                if (t.isValid(e)) return e;
                try {
                    return function(e) {
                        if ("string" !== typeof e) throw new Error("Param is not a string");
                        switch (e.toLowerCase()) {
                            case "numeric":
                                return t.NUMERIC;
                            case "alphanumeric":
                                return t.ALPHANUMERIC;
                            case "kanji":
                                return t.KANJI;
                            case "byte":
                                return t.BYTE;
                            default:
                                throw new Error("Unknown mode: " + e)
                        }
                    }(e)
                } catch (r) {
                    return n
                }
            }
        },
        41085: function(e, t, n) {
            const r = n(76910);

            function o(e) {
                this.mode = r.NUMERIC, this.data = e.toString()
            }
            o.getBitsLength = function(e) {
                return 10 * Math.floor(e / 3) + (e % 3 ? e % 3 * 3 + 1 : 0)
            }, o.prototype.getLength = function() {
                return this.data.length
            }, o.prototype.getBitsLength = function() {
                return o.getBitsLength(this.data.length)
            }, o.prototype.write = function(e) {
                let t, n, r;
                for (t = 0; t + 3 <= this.data.length; t += 3) n = this.data.substr(t, 3), r = parseInt(n, 10), e.put(r, 10);
                const o = this.data.length - t;
                o > 0 && (n = this.data.substr(t), r = parseInt(n, 10), e.put(r, 3 * o + 1))
            }, e.exports = o
        },
        26143: function(e, t, n) {
            const r = n(69729);
            t.mul = function(e, t) {
                const n = new Uint8Array(e.length + t.length - 1);
                for (let o = 0; o < e.length; o++)
                    for (let i = 0; i < t.length; i++) n[o + i] ^= r.mul(e[o], t[i]);
                return n
            }, t.mod = function(e, t) {
                let n = new Uint8Array(e);
                for (; n.length - t.length >= 0;) {
                    const e = n[0];
                    for (let i = 0; i < t.length; i++) n[i] ^= r.mul(t[i], e);
                    let o = 0;
                    for (; o < n.length && 0 === n[o];) o++;
                    n = n.slice(o)
                }
                return n
            }, t.generateECPolynomial = function(e) {
                let n = new Uint8Array([1]);
                for (let o = 0; o < e; o++) n = t.mul(n, new Uint8Array([1, r.exp(o)]));
                return n
            }
        },
        95115: function(e, t, n) {
            const r = n(10242),
                o = n(64908),
                i = n(97245),
                s = n(73280),
                c = n(21845),
                a = n(76526),
                u = n(27126),
                l = n(35393),
                f = n(52882),
                d = n(23103),
                h = n(61642),
                p = n(76910),
                _ = n(16130);

            function g(e, t, n) {
                const r = e.size,
                    o = h.getEncodedBits(t, n);
                let i, s;
                for (i = 0; i < 15; i++) s = 1 === (o >> i & 1), i < 6 ? e.set(i, 8, s, !0) : i < 8 ? e.set(i + 1, 8, s, !0) : e.set(r - 15 + i, 8, s, !0), i < 8 ? e.set(8, r - i - 1, s, !0) : i < 9 ? e.set(8, 15 - i - 1 + 1, s, !0) : e.set(8, 15 - i - 1, s, !0);
                e.set(r - 8, 8, 1, !0)
            }

            function m(e, t, n) {
                const o = new i;
                n.forEach((function(t) {
                    o.put(t.mode.bit, 4), o.put(t.getLength(), p.getCharCountIndicator(t.mode, e)), t.write(o)
                }));
                const s = 8 * (r.getSymbolTotalCodewords(e) - l.getTotalCodewordsCount(e, t));
                for (o.getLengthInBits() + 4 <= s && o.put(0, 4); o.getLengthInBits() % 8 !== 0;) o.putBit(0);
                const c = (s - o.getLengthInBits()) / 8;
                for (let r = 0; r < c; r++) o.put(r % 2 ? 17 : 236, 8);
                return function(e, t, n) {
                    const o = r.getSymbolTotalCodewords(t),
                        i = l.getTotalCodewordsCount(t, n),
                        s = o - i,
                        c = l.getBlocksCount(t, n),
                        a = c - o % c,
                        u = Math.floor(o / c),
                        d = Math.floor(s / c),
                        h = d + 1,
                        p = u - d,
                        _ = new f(p);
                    let g = 0;
                    const m = new Array(c),
                        y = new Array(c);
                    let v = 0;
                    const w = new Uint8Array(e.buffer);
                    for (let r = 0; r < c; r++) {
                        const e = r < a ? d : h;
                        m[r] = w.slice(g, g + e), y[r] = _.encode(m[r]), g += e, v = Math.max(v, e)
                    }
                    const b = new Uint8Array(o);
                    let E, R, S = 0;
                    for (E = 0; E < v; E++)
                        for (R = 0; R < c; R++) E < m[R].length && (b[S++] = m[R][E]);
                    for (E = 0; E < p; E++)
                        for (R = 0; R < c; R++) b[S++] = y[R][E];
                    return b
                }(o, e, t)
            }

            function y(e, t, n, o) {
                let i;
                if (Array.isArray(e)) i = _.fromArray(e);
                else {
                    if ("string" !== typeof e) throw new Error("Invalid data"); {
                        let r = t;
                        if (!r) {
                            const t = _.rawSplit(e);
                            r = d.getBestVersionForData(t, n)
                        }
                        i = _.fromString(e, r || 40)
                    }
                }
                const l = d.getBestVersionForData(i, n);
                if (!l) throw new Error("The amount of data is too big to be stored in a QR Code");
                if (t) {
                    if (t < l) throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + l + ".\n")
                } else t = l;
                const f = m(t, n, i),
                    h = r.getSymbolSize(t),
                    p = new s(h);
                return function(e, t) {
                        const n = e.size,
                            r = a.getPositions(t);
                        for (let o = 0; o < r.length; o++) {
                            const t = r[o][0],
                                i = r[o][1];
                            for (let r = -1; r <= 7; r++)
                                if (!(t + r <= -1 || n <= t + r))
                                    for (let o = -1; o <= 7; o++) i + o <= -1 || n <= i + o || (r >= 0 && r <= 6 && (0 === o || 6 === o) || o >= 0 && o <= 6 && (0 === r || 6 === r) || r >= 2 && r <= 4 && o >= 2 && o <= 4 ? e.set(t + r, i + o, !0, !0) : e.set(t + r, i + o, !1, !0))
                        }
                    }(p, t),
                    function(e) {
                        const t = e.size;
                        for (let n = 8; n < t - 8; n++) {
                            const t = n % 2 === 0;
                            e.set(n, 6, t, !0), e.set(6, n, t, !0)
                        }
                    }(p),
                    function(e, t) {
                        const n = c.getPositions(t);
                        for (let r = 0; r < n.length; r++) {
                            const t = n[r][0],
                                o = n[r][1];
                            for (let n = -2; n <= 2; n++)
                                for (let r = -2; r <= 2; r++) - 2 === n || 2 === n || -2 === r || 2 === r || 0 === n && 0 === r ? e.set(t + n, o + r, !0, !0) : e.set(t + n, o + r, !1, !0)
                        }
                    }(p, t), g(p, n, 0), t >= 7 && function(e, t) {
                        const n = e.size,
                            r = d.getEncodedBits(t);
                        let o, i, s;
                        for (let c = 0; c < 18; c++) o = Math.floor(c / 3), i = c % 3 + n - 8 - 3, s = 1 === (r >> c & 1), e.set(o, i, s, !0), e.set(i, o, s, !0)
                    }(p, t),
                    function(e, t) {
                        const n = e.size;
                        let r = -1,
                            o = n - 1,
                            i = 7,
                            s = 0;
                        for (let c = n - 1; c > 0; c -= 2)
                            for (6 === c && c--;;) {
                                for (let n = 0; n < 2; n++)
                                    if (!e.isReserved(o, c - n)) {
                                        let r = !1;
                                        s < t.length && (r = 1 === (t[s] >>> i & 1)), e.set(o, c - n, r), i--, -1 === i && (s++, i = 7)
                                    }
                                if (o += r, o < 0 || n <= o) {
                                    o -= r, r = -r;
                                    break
                                }
                            }
                    }(p, f), isNaN(o) && (o = u.getBestMask(p, g.bind(null, p, n))), u.applyMask(o, p), g(p, n, o), {
                        modules: p,
                        version: t,
                        errorCorrectionLevel: n,
                        maskPattern: o,
                        segments: i
                    }
            }
            t.create = function(e, t) {
                if ("undefined" === typeof e || "" === e) throw new Error("No input text");
                let n, i, s = o.M;
                return "undefined" !== typeof t && (s = o.from(t.errorCorrectionLevel, o.M), n = d.from(t.version), i = u.from(t.maskPattern), t.toSJISFunc && r.setToSJISFunction(t.toSJISFunc)), y(e, n, s, i)
            }
        },
        52882: function(e, t, n) {
            const r = n(26143);

            function o(e) {
                this.genPoly = void 0, this.degree = e, this.degree && this.initialize(this.degree)
            }
            o.prototype.initialize = function(e) {
                this.degree = e, this.genPoly = r.generateECPolynomial(this.degree)
            }, o.prototype.encode = function(e) {
                if (!this.genPoly) throw new Error("Encoder not initialized");
                const t = new Uint8Array(e.length + this.degree);
                t.set(e);
                const n = r.mod(t, this.genPoly),
                    o = this.degree - n.length;
                if (o > 0) {
                    const e = new Uint8Array(this.degree);
                    return e.set(n, o), e
                }
                return n
            }, e.exports = o
        },
        7007: function(e, t) {
            const n = "[0-9]+";
            let r = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
            r = r.replace(/u/g, "\\u");
            const o = "(?:(?![A-Z0-9 $%*+\\-./:]|" + r + ")(?:.|[\r\n]))+";
            t.KANJI = new RegExp(r, "g"), t.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"), t.BYTE = new RegExp(o, "g"), t.NUMERIC = new RegExp(n, "g"), t.ALPHANUMERIC = new RegExp("[A-Z $%*+\\-./:]+", "g");
            const i = new RegExp("^" + r + "$"),
                s = new RegExp("^[0-9]+$"),
                c = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
            t.testKanji = function(e) {
                return i.test(e)
            }, t.testNumeric = function(e) {
                return s.test(e)
            }, t.testAlphanumeric = function(e) {
                return c.test(e)
            }
        },
        16130: function(e, t, n) {
            const r = n(76910),
                o = n(41085),
                i = n(8260),
                s = n(43424),
                c = n(35442),
                a = n(7007),
                u = n(10242),
                l = n(65987);

            function f(e) {
                return unescape(encodeURIComponent(e)).length
            }

            function d(e, t, n) {
                const r = [];
                let o;
                for (; null !== (o = e.exec(n));) r.push({
                    data: o[0],
                    index: o.index,
                    mode: t,
                    length: o[0].length
                });
                return r
            }

            function h(e) {
                const t = d(a.NUMERIC, r.NUMERIC, e),
                    n = d(a.ALPHANUMERIC, r.ALPHANUMERIC, e);
                let o, i;
                u.isKanjiModeEnabled() ? (o = d(a.BYTE, r.BYTE, e), i = d(a.KANJI, r.KANJI, e)) : (o = d(a.BYTE_KANJI, r.BYTE, e), i = []);
                return t.concat(n, o, i).sort((function(e, t) {
                    return e.index - t.index
                })).map((function(e) {
                    return {
                        data: e.data,
                        mode: e.mode,
                        length: e.length
                    }
                }))
            }

            function p(e, t) {
                switch (t) {
                    case r.NUMERIC:
                        return o.getBitsLength(e);
                    case r.ALPHANUMERIC:
                        return i.getBitsLength(e);
                    case r.KANJI:
                        return c.getBitsLength(e);
                    case r.BYTE:
                        return s.getBitsLength(e)
                }
            }

            function _(e, t) {
                let n;
                const a = r.getBestModeForData(e);
                if (n = r.from(t, a), n !== r.BYTE && n.bit < a.bit) throw new Error('"' + e + '" cannot be encoded with mode ' + r.toString(n) + ".\n Suggested mode is: " + r.toString(a));
                switch (n !== r.KANJI || u.isKanjiModeEnabled() || (n = r.BYTE), n) {
                    case r.NUMERIC:
                        return new o(e);
                    case r.ALPHANUMERIC:
                        return new i(e);
                    case r.KANJI:
                        return new c(e);
                    case r.BYTE:
                        return new s(e)
                }
            }
            t.fromArray = function(e) {
                return e.reduce((function(e, t) {
                    return "string" === typeof t ? e.push(_(t, null)) : t.data && e.push(_(t.data, t.mode)), e
                }), [])
            }, t.fromString = function(e, n) {
                const o = function(e, t) {
                        const n = {},
                            o = {
                                start: {}
                            };
                        let i = ["start"];
                        for (let s = 0; s < e.length; s++) {
                            const c = e[s],
                                a = [];
                            for (let e = 0; e < c.length; e++) {
                                const u = c[e],
                                    l = "" + s + e;
                                a.push(l), n[l] = {
                                    node: u,
                                    lastCount: 0
                                }, o[l] = {};
                                for (let e = 0; e < i.length; e++) {
                                    const s = i[e];
                                    n[s] && n[s].node.mode === u.mode ? (o[s][l] = p(n[s].lastCount + u.length, u.mode) - p(n[s].lastCount, u.mode), n[s].lastCount += u.length) : (n[s] && (n[s].lastCount = u.length), o[s][l] = p(u.length, u.mode) + 4 + r.getCharCountIndicator(u.mode, t))
                                }
                            }
                            i = a
                        }
                        for (let r = 0; r < i.length; r++) o[i[r]].end = 0;
                        return {
                            map: o,
                            table: n
                        }
                    }(function(e) {
                        const t = [];
                        for (let n = 0; n < e.length; n++) {
                            const o = e[n];
                            switch (o.mode) {
                                case r.NUMERIC:
                                    t.push([o, {
                                        data: o.data,
                                        mode: r.ALPHANUMERIC,
                                        length: o.length
                                    }, {
                                        data: o.data,
                                        mode: r.BYTE,
                                        length: o.length
                                    }]);
                                    break;
                                case r.ALPHANUMERIC:
                                    t.push([o, {
                                        data: o.data,
                                        mode: r.BYTE,
                                        length: o.length
                                    }]);
                                    break;
                                case r.KANJI:
                                    t.push([o, {
                                        data: o.data,
                                        mode: r.BYTE,
                                        length: f(o.data)
                                    }]);
                                    break;
                                case r.BYTE:
                                    t.push([{
                                        data: o.data,
                                        mode: r.BYTE,
                                        length: f(o.data)
                                    }])
                            }
                        }
                        return t
                    }(h(e, u.isKanjiModeEnabled())), n),
                    i = l.find_path(o.map, "start", "end"),
                    s = [];
                for (let t = 1; t < i.length - 1; t++) s.push(o.table[i[t]].node);
                return t.fromArray(function(e) {
                    return e.reduce((function(e, t) {
                        const n = e.length - 1 >= 0 ? e[e.length - 1] : null;
                        return n && n.mode === t.mode ? (e[e.length - 1].data += t.data, e) : (e.push(t), e)
                    }), [])
                }(s))
            }, t.rawSplit = function(e) {
                return t.fromArray(h(e, u.isKanjiModeEnabled()))
            }
        },
        10242: function(e, t) {
            let n;
            const r = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
            t.getSymbolSize = function(e) {
                if (!e) throw new Error('"version" cannot be null or undefined');
                if (e < 1 || e > 40) throw new Error('"version" should be in range from 1 to 40');
                return 4 * e + 17
            }, t.getSymbolTotalCodewords = function(e) {
                return r[e]
            }, t.getBCHDigit = function(e) {
                let t = 0;
                for (; 0 !== e;) t++, e >>>= 1;
                return t
            }, t.setToSJISFunction = function(e) {
                if ("function" !== typeof e) throw new Error('"toSJISFunc" is not a valid function.');
                n = e
            }, t.isKanjiModeEnabled = function() {
                return "undefined" !== typeof n
            }, t.toSJIS = function(e) {
                return n(e)
            }
        },
        43114: function(e, t) {
            t.isValid = function(e) {
                return !isNaN(e) && e >= 1 && e <= 40
            }
        },
        23103: function(e, t, n) {
            const r = n(10242),
                o = n(35393),
                i = n(64908),
                s = n(76910),
                c = n(43114),
                a = r.getBCHDigit(7973);

            function u(e, t) {
                return s.getCharCountIndicator(e, t) + 4
            }

            function l(e, t) {
                let n = 0;
                return e.forEach((function(e) {
                    const r = u(e.mode, t);
                    n += r + e.getBitsLength()
                })), n
            }
            t.from = function(e, t) {
                return c.isValid(e) ? parseInt(e, 10) : t
            }, t.getCapacity = function(e, t, n) {
                if (!c.isValid(e)) throw new Error("Invalid QR Code version");
                "undefined" === typeof n && (n = s.BYTE);
                const i = 8 * (r.getSymbolTotalCodewords(e) - o.getTotalCodewordsCount(e, t));
                if (n === s.MIXED) return i;
                const a = i - u(n, e);
                switch (n) {
                    case s.NUMERIC:
                        return Math.floor(a / 10 * 3);
                    case s.ALPHANUMERIC:
                        return Math.floor(a / 11 * 2);
                    case s.KANJI:
                        return Math.floor(a / 13);
                    case s.BYTE:
                    default:
                        return Math.floor(a / 8)
                }
            }, t.getBestVersionForData = function(e, n) {
                let r;
                const o = i.from(n, i.M);
                if (Array.isArray(e)) {
                    if (e.length > 1) return function(e, n) {
                        for (let r = 1; r <= 40; r++)
                            if (l(e, r) <= t.getCapacity(r, n, s.MIXED)) return r
                    }(e, o);
                    if (0 === e.length) return 1;
                    r = e[0]
                } else r = e;
                return function(e, n, r) {
                    for (let o = 1; o <= 40; o++)
                        if (n <= t.getCapacity(o, r, e)) return o
                }(r.mode, r.getLength(), o)
            }, t.getEncodedBits = function(e) {
                if (!c.isValid(e) || e < 7) throw new Error("Invalid QR Code version");
                let t = e << 12;
                for (; r.getBCHDigit(t) - a >= 0;) t ^= 7973 << r.getBCHDigit(t) - a;
                return e << 12 | t
            }
        },
        6907: function(e, t, n) {
            const r = n(89653);
            t.render = function(e, t, n) {
                let o = n,
                    i = t;
                "undefined" !== typeof o || t && t.getContext || (o = t, t = void 0), t || (i = function() {
                    try {
                        return document.createElement("canvas")
                    } catch (e) {
                        throw new Error("You need to specify a canvas element")
                    }
                }()), o = r.getOptions(o);
                const s = r.getImageWidth(e.modules.size, o),
                    c = i.getContext("2d"),
                    a = c.createImageData(s, s);
                return r.qrToImageData(a.data, e, o),
                    function(e, t, n) {
                        e.clearRect(0, 0, t.width, t.height), t.style || (t.style = {}), t.height = n, t.width = n, t.style.height = n + "px", t.style.width = n + "px"
                    }(c, i, s), c.putImageData(a, 0, 0), i
            }, t.renderToDataURL = function(e, n, r) {
                let o = r;
                "undefined" !== typeof o || n && n.getContext || (o = n, n = void 0), o || (o = {});
                const i = t.render(e, n, o),
                    s = o.type || "image/png",
                    c = o.rendererOpts || {};
                return i.toDataURL(s, c.quality)
            }
        },
        93776: function(e, t, n) {
            const r = n(89653);

            function o(e, t) {
                const n = e.a / 255,
                    r = t + '="' + e.hex + '"';
                return n < 1 ? r + " " + t + '-opacity="' + n.toFixed(2).slice(1) + '"' : r
            }

            function i(e, t, n) {
                let r = e + t;
                return "undefined" !== typeof n && (r += " " + n), r
            }
            t.render = function(e, t, n) {
                const s = r.getOptions(t),
                    c = e.modules.size,
                    a = e.modules.data,
                    u = c + 2 * s.margin,
                    l = s.color.light.a ? "<path " + o(s.color.light, "fill") + ' d="M0 0h' + u + "v" + u + 'H0z"/>' : "",
                    f = "<path " + o(s.color.dark, "stroke") + ' d="' + function(e, t, n) {
                        let r = "",
                            o = 0,
                            s = !1,
                            c = 0;
                        for (let a = 0; a < e.length; a++) {
                            const u = Math.floor(a % t),
                                l = Math.floor(a / t);
                            u || s || (s = !0), e[a] ? (c++, a > 0 && u > 0 && e[a - 1] || (r += s ? i("M", u + n, .5 + l + n) : i("m", o, 0), o = 0, s = !1), u + 1 < t && e[a + 1] || (r += i("h", c), c = 0)) : o++
                        }
                        return r
                    }(a, c, s.margin) + '"/>',
                    d = 'viewBox="0 0 ' + u + " " + u + '"',
                    h = '<svg xmlns="http://www.w3.org/2000/svg" ' + (s.width ? 'width="' + s.width + '" height="' + s.width + '" ' : "") + d + ' shape-rendering="crispEdges">' + l + f + "</svg>\n";
                return "function" === typeof n && n(null, h), h
            }
        },
        89653: function(e, t) {
            function n(e) {
                if ("number" === typeof e && (e = e.toString()), "string" !== typeof e) throw new Error("Color should be defined as hex string");
                let t = e.slice().replace("#", "").split("");
                if (t.length < 3 || 5 === t.length || t.length > 8) throw new Error("Invalid hex color: " + e);
                3 !== t.length && 4 !== t.length || (t = Array.prototype.concat.apply([], t.map((function(e) {
                    return [e, e]
                })))), 6 === t.length && t.push("F", "F");
                const n = parseInt(t.join(""), 16);
                return {
                    r: n >> 24 & 255,
                    g: n >> 16 & 255,
                    b: n >> 8 & 255,
                    a: 255 & n,
                    hex: "#" + t.slice(0, 6).join("")
                }
            }
            t.getOptions = function(e) {
                e || (e = {}), e.color || (e.color = {});
                const t = "undefined" === typeof e.margin || null === e.margin || e.margin < 0 ? 4 : e.margin,
                    r = e.width && e.width >= 21 ? e.width : void 0,
                    o = e.scale || 4;
                return {
                    width: r,
                    scale: r ? 4 : o,
                    margin: t,
                    color: {
                        dark: n(e.color.dark || "#000000ff"),
                        light: n(e.color.light || "#ffffffff")
                    },
                    type: e.type,
                    rendererOpts: e.rendererOpts || {}
                }
            }, t.getScale = function(e, t) {
                return t.width && t.width >= e + 2 * t.margin ? t.width / (e + 2 * t.margin) : t.scale
            }, t.getImageWidth = function(e, n) {
                const r = t.getScale(e, n);
                return Math.floor((e + 2 * n.margin) * r)
            }, t.qrToImageData = function(e, n, r) {
                const o = n.modules.size,
                    i = n.modules.data,
                    s = t.getScale(o, r),
                    c = Math.floor((o + 2 * r.margin) * s),
                    a = r.margin * s,
                    u = [r.color.light, r.color.dark];
                for (let t = 0; t < c; t++)
                    for (let n = 0; n < c; n++) {
                        let l = 4 * (t * c + n),
                            f = r.color.light;
                        if (t >= a && n >= a && t < c - a && n < c - a) {
                            f = u[i[Math.floor((t - a) / s) * o + Math.floor((n - a) / s)] ? 1 : 0]
                        }
                        e[l++] = f.r, e[l++] = f.g, e[l++] = f.b, e[l] = f.a
                    }
            }
        },
        17563: function(e, t, n) {
            "use strict";
            const r = n(70610),
                o = n(44020),
                i = n(80500),
                s = n(92806);

            function c(e) {
                if ("string" !== typeof e || 1 !== e.length) throw new TypeError("arrayFormatSeparator must be single character string")
            }

            function a(e, t) {
                return t.encode ? t.strict ? r(e) : encodeURIComponent(e) : e
            }

            function u(e, t) {
                return t.decode ? o(e) : e
            }

            function l(e) {
                return Array.isArray(e) ? e.sort() : "object" === typeof e ? l(Object.keys(e)).sort(((e, t) => Number(e) - Number(t))).map((t => e[t])) : e
            }

            function f(e) {
                const t = e.indexOf("#");
                return -1 !== t && (e = e.slice(0, t)), e
            }

            function d(e) {
                const t = (e = f(e)).indexOf("?");
                return -1 === t ? "" : e.slice(t + 1)
            }

            function h(e, t) {
                return t.parseNumbers && !Number.isNaN(Number(e)) && "string" === typeof e && "" !== e.trim() ? e = Number(e) : !t.parseBooleans || null === e || "true" !== e.toLowerCase() && "false" !== e.toLowerCase() || (e = "true" === e.toLowerCase()), e
            }

            function p(e, t) {
                c((t = Object.assign({
                    decode: !0,
                    sort: !0,
                    arrayFormat: "none",
                    arrayFormatSeparator: ",",
                    parseNumbers: !1,
                    parseBooleans: !1
                }, t)).arrayFormatSeparator);
                const n = function(e) {
                        let t;
                        switch (e.arrayFormat) {
                            case "index":
                                return (e, n, r) => {
                                    t = /\[(\d*)\]$/.exec(e), e = e.replace(/\[\d*\]$/, ""), t ? (void 0 === r[e] && (r[e] = {}), r[e][t[1]] = n) : r[e] = n
                                };
                            case "bracket":
                                return (e, n, r) => {
                                    t = /(\[\])$/.exec(e), e = e.replace(/\[\]$/, ""), t ? void 0 !== r[e] ? r[e] = [].concat(r[e], n) : r[e] = [n] : r[e] = n
                                };
                            case "comma":
                            case "separator":
                                return (t, n, r) => {
                                    const o = "string" === typeof n && n.includes(e.arrayFormatSeparator),
                                        i = "string" === typeof n && !o && u(n, e).includes(e.arrayFormatSeparator);
                                    n = i ? u(n, e) : n;
                                    const s = o || i ? n.split(e.arrayFormatSeparator).map((t => u(t, e))) : null === n ? n : u(n, e);
                                    r[t] = s
                                };
                            default:
                                return (e, t, n) => {
                                    void 0 !== n[e] ? n[e] = [].concat(n[e], t) : n[e] = t
                                }
                        }
                    }(t),
                    r = Object.create(null);
                if ("string" !== typeof e) return r;
                if (!(e = e.trim().replace(/^[?#&]/, ""))) return r;
                for (const o of e.split("&")) {
                    if ("" === o) continue;
                    let [e, s] = i(t.decode ? o.replace(/\+/g, " ") : o, "=");
                    s = void 0 === s ? null : ["comma", "separator"].includes(t.arrayFormat) ? s : u(s, t), n(u(e, t), s, r)
                }
                for (const o of Object.keys(r)) {
                    const e = r[o];
                    if ("object" === typeof e && null !== e)
                        for (const n of Object.keys(e)) e[n] = h(e[n], t);
                    else r[o] = h(e, t)
                }
                return !1 === t.sort ? r : (!0 === t.sort ? Object.keys(r).sort() : Object.keys(r).sort(t.sort)).reduce(((e, t) => {
                    const n = r[t];
                    return Boolean(n) && "object" === typeof n && !Array.isArray(n) ? e[t] = l(n) : e[t] = n, e
                }), Object.create(null))
            }
            t.extract = d, t.parse = p, t.stringify = (e, t) => {
                if (!e) return "";
                c((t = Object.assign({
                    encode: !0,
                    strict: !0,
                    arrayFormat: "none",
                    arrayFormatSeparator: ","
                }, t)).arrayFormatSeparator);
                const n = n => {
                        return t.skipNull && (null === (r = e[n]) || void 0 === r) || t.skipEmptyString && "" === e[n];
                        var r
                    },
                    r = function(e) {
                        switch (e.arrayFormat) {
                            case "index":
                                return t => (n, r) => {
                                    const o = n.length;
                                    return void 0 === r || e.skipNull && null === r || e.skipEmptyString && "" === r ? n : null === r ? [...n, [a(t, e), "[", o, "]"].join("")] : [...n, [a(t, e), "[", a(o, e), "]=", a(r, e)].join("")]
                                };
                            case "bracket":
                                return t => (n, r) => void 0 === r || e.skipNull && null === r || e.skipEmptyString && "" === r ? n : null === r ? [...n, [a(t, e), "[]"].join("")] : [...n, [a(t, e), "[]=", a(r, e)].join("")];
                            case "comma":
                            case "separator":
                                return t => (n, r) => null === r || void 0 === r || 0 === r.length ? n : 0 === n.length ? [
                                    [a(t, e), "=", a(r, e)].join("")
                                ] : [
                                    [n, a(r, e)].join(e.arrayFormatSeparator)
                                ];
                            default:
                                return t => (n, r) => void 0 === r || e.skipNull && null === r || e.skipEmptyString && "" === r ? n : null === r ? [...n, a(t, e)] : [...n, [a(t, e), "=", a(r, e)].join("")]
                        }
                    }(t),
                    o = {};
                for (const s of Object.keys(e)) n(s) || (o[s] = e[s]);
                const i = Object.keys(o);
                return !1 !== t.sort && i.sort(t.sort), i.map((n => {
                    const o = e[n];
                    return void 0 === o ? "" : null === o ? a(n, t) : Array.isArray(o) ? o.reduce(r(n), []).join("&") : a(n, t) + "=" + a(o, t)
                })).filter((e => e.length > 0)).join("&")
            }, t.parseUrl = (e, t) => {
                t = Object.assign({
                    decode: !0
                }, t);
                const [n, r] = i(e, "#");
                return Object.assign({
                    url: n.split("?")[0] || "",
                    query: p(d(e), t)
                }, t && t.parseFragmentIdentifier && r ? {
                    fragmentIdentifier: u(r, t)
                } : {})
            }, t.stringifyUrl = (e, n) => {
                n = Object.assign({
                    encode: !0,
                    strict: !0
                }, n);
                const r = f(e.url).split("?")[0] || "",
                    o = t.extract(e.url),
                    i = t.parse(o, {
                        sort: !1
                    }),
                    s = Object.assign(i, e.query);
                let c = t.stringify(s, n);
                c && (c = `?${c}`);
                let u = function(e) {
                    let t = "";
                    const n = e.indexOf("#");
                    return -1 !== n && (t = e.slice(n)), t
                }(e.url);
                return e.fragmentIdentifier && (u = `#${a(e.fragmentIdentifier,n)}`), `${r}${c}${u}`
            }, t.pick = (e, n, r) => {
                r = Object.assign({
                    parseFragmentIdentifier: !0
                }, r);
                const {
                    url: o,
                    query: i,
                    fragmentIdentifier: c
                } = t.parseUrl(e, r);
                return t.stringifyUrl({
                    url: o,
                    query: s(i, n),
                    fragmentIdentifier: c
                }, r)
            }, t.exclude = (e, n, r) => {
                const o = Array.isArray(n) ? e => !n.includes(e) : (e, t) => !n(e, t);
                return t.pick(e, o, r)
            }
        },
        80500: function(e) {
            "use strict";
            e.exports = (e, t) => {
                if ("string" !== typeof e || "string" !== typeof t) throw new TypeError("Expected the arguments to be of type `string`");
                if ("" === t) return [e];
                const n = e.indexOf(t);
                return -1 === n ? [e] : [e.slice(0, n), e.slice(n + t.length)]
            }
        },
        70610: function(e) {
            "use strict";
            e.exports = e => encodeURIComponent(e).replace(/[!'()*]/g, (e => `%${e.charCodeAt(0).toString(16).toUpperCase()}`))
        },
        11742: function(e) {
            e.exports = function() {
                var e = document.getSelection();
                if (!e.rangeCount) return function() {};
                for (var t = document.activeElement, n = [], r = 0; r < e.rangeCount; r++) n.push(e.getRangeAt(r));
                switch (t.tagName.toUpperCase()) {
                    case "INPUT":
                    case "TEXTAREA":
                        t.blur();
                        break;
                    default:
                        t = null
                }
                return e.removeAllRanges(),
                    function() {
                        "Caret" === e.type && e.removeAllRanges(), e.rangeCount || n.forEach((function(t) {
                            e.addRange(t)
                        })), t && t.focus()
                    }
            }
        },
        70655: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                __extends: function() {
                    return o
                },
                __assign: function() {
                    return i
                },
                __rest: function() {
                    return s
                },
                __decorate: function() {
                    return c
                },
                __param: function() {
                    return a
                },
                __metadata: function() {
                    return u
                },
                __awaiter: function() {
                    return l
                },
                __generator: function() {
                    return f
                },
                __createBinding: function() {
                    return d
                },
                __exportStar: function() {
                    return h
                },
                __values: function() {
                    return p
                },
                __read: function() {
                    return _
                },
                __spread: function() {
                    return g
                },
                __spreadArrays: function() {
                    return m
                },
                __await: function() {
                    return y
                },
                __asyncGenerator: function() {
                    return v
                },
                __asyncDelegator: function() {
                    return w
                },
                __asyncValues: function() {
                    return b
                },
                __makeTemplateObject: function() {
                    return E
                },
                __importStar: function() {
                    return R
                },
                __importDefault: function() {
                    return S
                },
                __classPrivateFieldGet: function() {
                    return x
                },
                __classPrivateFieldSet: function() {
                    return C
                }
            });
            var r = function(e, t) {
                return (r = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    })(e, t)
            };

            function o(e, t) {
                function n() {
                    this.constructor = e
                }
                r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }
            var i = function() {
                return (i = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }).apply(this, arguments)
            };

            function s(e, t) {
                var n = {};
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                    var o = 0;
                    for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
                }
                return n
            }

            function c(e, t, n, r) {
                var o, i = arguments.length,
                    s = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) s = Reflect.decorate(e, t, n, r);
                else
                    for (var c = e.length - 1; c >= 0; c--)(o = e[c]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, n, s) : o(t, n)) || s);
                return i > 3 && s && Object.defineProperty(t, n, s), s
            }

            function a(e, t) {
                return function(n, r) {
                    t(n, r, e)
                }
            }

            function u(e, t) {
                if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(e, t)
            }

            function l(e, t, n, r) {
                return new(n || (n = Promise))((function(o, i) {
                    function s(e) {
                        try {
                            a(r.next(e))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function c(e) {
                        try {
                            a(r.throw(e))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function a(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(s, c)
                    }
                    a((r = r.apply(e, t || [])).next())
                }))
            }

            function f(e, t) {
                var n, r, o, i, s = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" === typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function c(i) {
                    return function(c) {
                        return function(i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, r = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = (o = s.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            s.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && s.label < o[1]) {
                                            s.label = o[1], o = i;
                                            break
                                        }
                                        if (o && s.label < o[2]) {
                                            s.label = o[2], s.ops.push(i);
                                            break
                                        }
                                        o[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                i = t.call(e, s)
                            } catch (c) {
                                i = [6, c], r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, c])
                    }
                }
            }

            function d(e, t, n, r) {
                void 0 === r && (r = n), e[r] = t[n]
            }

            function h(e, t) {
                for (var n in e) "default" === n || t.hasOwnProperty(n) || (t[n] = e[n])
            }

            function p(e) {
                var t = "function" === typeof Symbol && Symbol.iterator,
                    n = t && e[t],
                    r = 0;
                if (n) return n.call(e);
                if (e && "number" === typeof e.length) return {
                    next: function() {
                        return e && r >= e.length && (e = void 0), {
                            value: e && e[r++],
                            done: !e
                        }
                    }
                };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function _(e, t) {
                var n = "function" === typeof Symbol && e[Symbol.iterator];
                if (!n) return e;
                var r, o, i = n.call(e),
                    s = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(r = i.next()).done;) s.push(r.value)
                } catch (c) {
                    o = {
                        error: c
                    }
                } finally {
                    try {
                        r && !r.done && (n = i.return) && n.call(i)
                    } finally {
                        if (o) throw o.error
                    }
                }
                return s
            }

            function g() {
                for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(_(arguments[t]));
                return e
            }

            function m() {
                for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
                var r = Array(e),
                    o = 0;
                for (t = 0; t < n; t++)
                    for (var i = arguments[t], s = 0, c = i.length; s < c; s++, o++) r[o] = i[s];
                return r
            }

            function y(e) {
                return this instanceof y ? (this.v = e, this) : new y(e)
            }

            function v(e, t, n) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var r, o = n.apply(e, t || []),
                    i = [];
                return r = {}, s("next"), s("throw"), s("return"), r[Symbol.asyncIterator] = function() {
                    return this
                }, r;

                function s(e) {
                    o[e] && (r[e] = function(t) {
                        return new Promise((function(n, r) {
                            i.push([e, t, n, r]) > 1 || c(e, t)
                        }))
                    })
                }

                function c(e, t) {
                    try {
                        (n = o[e](t)).value instanceof y ? Promise.resolve(n.value.v).then(a, u) : l(i[0][2], n)
                    } catch (r) {
                        l(i[0][3], r)
                    }
                    var n
                }

                function a(e) {
                    c("next", e)
                }

                function u(e) {
                    c("throw", e)
                }

                function l(e, t) {
                    e(t), i.shift(), i.length && c(i[0][0], i[0][1])
                }
            }

            function w(e) {
                var t, n;
                return t = {}, r("next"), r("throw", (function(e) {
                    throw e
                })), r("return"), t[Symbol.iterator] = function() {
                    return this
                }, t;

                function r(r, o) {
                    t[r] = e[r] ? function(t) {
                        return (n = !n) ? {
                            value: y(e[r](t)),
                            done: "return" === r
                        } : o ? o(t) : t
                    } : o
                }
            }

            function b(e) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var t, n = e[Symbol.asyncIterator];
                return n ? n.call(e) : (e = p(e), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function() {
                    return this
                }, t);

                function r(n) {
                    t[n] = e[n] && function(t) {
                        return new Promise((function(r, o) {
                            (function(e, t, n, r) {
                                Promise.resolve(r).then((function(t) {
                                    e({
                                        value: t,
                                        done: n
                                    })
                                }), t)
                            })(r, o, (t = e[n](t)).done, t.value)
                        }))
                    }
                }
            }

            function E(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t, e
            }

            function R(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t.default = e, t
            }

            function S(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function x(e, t) {
                if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
                return t.get(e)
            }

            function C(e, t, n) {
                if (!t.has(e)) throw new TypeError("attempted to set private field on non-instance");
                return t.set(e, n), n
            }
        },
        65054: function(e, t, n) {
            var r = n(48764).Buffer,
                o = n(4501).strict;
            e.exports = function(e) {
                if (o(e)) {
                    var t = r.from(e.buffer);
                    return e.byteLength !== e.buffer.byteLength && (t = t.slice(e.byteOffset, e.byteOffset + e.byteLength)), t
                }
                return r.from(e)
            }
        },
        57026: function(e) {
            "use strict";
            e.exports = function() {
                throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
            }
        }
    }
]);