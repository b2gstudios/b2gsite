/* Obfuscate your JavaScript at http://jscrambler.com */(function (B, r) {
    var P0 = "scroll",
        Q0 = "static",
        u0 = "relative",
        t0 = "fixed",
        S = "toggle",
        C0 = ":hidden",
        i0 = "hide",
        o0 = "olddisplay",
        h0 = "show",
        D0 = "marginLeft",
        v0 = "marginTop",
        R0 = "application/x-www-form-urlencoded",
        Z0 = "marginRight",
        p0 = "inline-block",
        S0 = "opacity",
        W1 = "replaceWith",
        u1 = "nextSibling",
        a1 = "previousSibling",
        v1 = "parentNode",
        Y1 = ".specialChange",
        w1 = "focusout",
        x1 = "_change_data",
        X1 = "select-multiple",
        b1 = "submit",
        c1 = "auto",
        w0 = "height",
        F0 = "button",
        d1 = "form",
        z1 = "tabIndex",
        A1 = "value",
        E0 = "get",
        y1 = "inprogress",
        e0 = "fx",
        V = "undefined",
        g1 = "inline",
        f1 = "absolute",
        H0 = "hidden",
        h1 = "type",
        G0 = "on",
        T0 = "href",
        B1 = "select",
        e1 = "className",
        b0 = "div",
        f0 = "number",
        Z1 = "parsererror",
        V0 = "function",
        i1 = "boolean",
        U0 = "body",
        I0 = "mark",
        x0 = "queue",
        a2 = "mouseleave",
        b2 = "mouseenter",
        E1 = "(\\.|$)",
        F1 = "\\.(?:.*\\.)?",
        C1 = "(^|\\.)",
        D1 = "events",
        j1 = "tbody",
        M = ".",
        H1 = "option",
        c0 = "radio",
        q0 = "checkbox",
        c2 = "getElementsByTagName",
        L = "input",
        k0 = "script",
        j0 = "px",
        G1 = "Width",
        I1 = "margin",
        l1 = "padding",
        k1 = "border",
        l0 = "width",
        p = null,
        K = "object",
        z = " ",
        H = "*",
        C = "string",
        e2 = "CSS1Compat",
        m0 = "none",
        K0 = "display";

    function J1(a) {
        return e.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : !1;
    }function d2(a) {
        if (!V1[a]) {
            var b = t.body,
                c = e("<" + a + ">").appendTo(b),
                d = c.css(K0);
            c.remove();
            if (d === m0 || d === "") {
                g0 || (g0 = t.createElement("iframe"), g0.frameBorder = g0.width = g0.height = 0), b.appendChild(g0);
                if (!O0 || !g0.createElement) O0 = (g0.contentWindow || g0.contentDocument).document, O0.write((t.compatMode === e2 ? "<!doctype html>" : "") + "<html><body>"), O0.close();
                c = O0.createElement(a), O0.body.appendChild(c), d = e.css(c, K0), b.removeChild(g0);
            }
            V1[a] = d;
        }
        return V1[a];
    }function J0(a, b) {
        var c = {};
        e.each(P2.concat.apply([], P2.slice(0, b)), function () {
            c[this] = a;
        });
        return c;
    }function Q2() {
        s1 = r;
    }function k2() {
        setTimeout(Q2, 0);
        return s1 = e.now();
    }function T2() {
        try {
            return new B.ActiveXObject("Microsoft.XMLHTTP");
        } catch (a) {}
    }function l2() {
        try {
            return new B.XMLHttpRequest;
        } catch (a) {}
    }function U2(a, b) {
        a.dataFilter && (b = a.dataFilter(b, a.dataType));
        var c = a.dataTypes,
            d = {},
            f, g, h = c.length,
            i, j = c[0],
            k, m, q, n, l;
        for (f = 1; f < h; f++) {
            if (f === 1) for (g in a.converters) typeof g == C && (d[g.toLowerCase()] = a.converters[g]);
            k = j, j = c[f];
            if (j === H) j = k;
            else if (k !== H && k !== j) {
                m = k + z + j, q = d[m] || d["* " + j];
                if (!q) {
                    l = r;
                    for (n in d) {
                        i = n.split(z);
                        if (i[0] === k || i[0] === H) {
                            l = d[i[1] + z + j];
                            if (l) {
                                n = d[n], n === !0 ? q = l : l === !0 && (q = n);
                                break
                            }
                        }
                    }
                }!q && !l && e.error("No conversion from " + m.replace(z, " to ")), q !== !0 && (b = q ? q(b) : l(n(b)));
            }
        }
        return b;
    }function V2(a, b, c) {
        var d = a.contents,
            f = a.dataTypes,
            g = a.responseFields,
            h, i, j, k;
        for (i in g) i in c && (b[g[i]] = c[i]);
        while (f[0] === H) f.shift(), h === r && (h = a.mimeType || b.getResponseHeader("content-type"));
        if (h) for (i in d) if (d[i] && d[i].test(h)) {
            f.unshift(i);
            break
        }
        if (f[0] in c) j = f[0];
        else {
            for (i in c) {
                if (!f[0] || a.converters[i + z + f[0]]) {
                    j = i;
                    break
                }
                k || (k = i);
            }
            j = j || k;
        }
        if (j) {
            j !== f[0] && f.unshift(j);
            return c[j];
        }
    }function K1(c, d, f, g) {
        if (e.isArray(d)) e.each(d, function (a, b) {
            f || D3.test(c) ? g(c, b) : K1(c + "[" + (typeof b == K || e.isArray(b) ? a : "") + "]", b, f, g);
        });
        else if (!f && d != p && typeof d == K) for (var h in d) K1(c + "[" + h + "]", d[h], f, g);
        else g(c, d);
    }function n1(a, b, c, d, f, g) {
        f = f || b.dataTypes[0], g = g || {}, g[f] = !0;
        var h = a[f],
            i = 0,
            j = h ? h.length : 0,
            k = a === T1,
            m;
        for (; i < j && (k || !m); i++) m = h[i](b, c, d), typeof m == C && (!k || g[m] ? m = r : (b.dataTypes.unshift(m), m = n1(a, b, c, d, m, g)));
        (k || !m) && !g[H] && (m = n1(a, b, c, d, H, g));
        return m;
    }function m2(j) {
        return function (a, b) {
            typeof a != C && (b = a, a = H);
            if (e.isFunction(b)) {
                var c = a.toLowerCase().split(M2),
                    d = 0,
                    f = c.length,
                    g, h, i;
                for (; d < f; d++) g = c[d], i = /^\+/.test(g), i && (g = g.substr(1) || H), h = j[g] = j[g] || [], h[i ? "unshift" : "push"](b);
            }
        };
    }function f2(a, b, c) {
        var d = b === l0 ? a.offsetWidth : a.offsetHeight,
            f = b === l0 ? J3 : K3;
        if (d > 0) {
            c !== k1 && e.each(f, function () {
                c || (d -= parseFloat(e.css(a, l1 + this)) || 0), c === I1 ? d += parseFloat(e.css(a, c + this)) || 0 : d -= parseFloat(e.css(a, k1 + this + G1)) || 0;
            });
            return d + j0;
        }
        d = L0(a, b, b);
        if (d < 0 || d == p) d = a.style[b] || 0;
        d = parseFloat(d) || 0, c && e.each(f, function () {
            d += parseFloat(e.css(a, l1 + this)) || 0, c !== l1 && (d += parseFloat(e.css(a, k1 + this + G1)) || 0), c === I1 && (d += parseFloat(e.css(a, c + this)) || 0);
        });
        return d + j0;
    }function R2(a, b) {
        b.src ? e.ajax({
            url: b.src,
            async: !1,
            dataType: k0
        }) : e.globalEval((b.text || b.textContent || b.innerHTML || "").replace(u3, "/*$0*/")), b.parentNode && b.parentNode.removeChild(b);
    }function h2(a) {
        e.nodeName(a, L) ? g2(a) : c2 in a && e.grep(a.getElementsByTagName(L), g2);
    }function g2(a) {
        if (a.type === q0 || a.type === c0) a.defaultChecked = a.checked;
    }function m1(a) {
        return c2 in a ? a.getElementsByTagName(H) : "querySelectorAll" in a ? a.querySelectorAll(H) : [];
    }function i2(a, b) {
        var c;
        if (b.nodeType === 1) {
            b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName.toLowerCase();
            if (c === K) b.outerHTML = a.outerHTML;
            else if (c !== L || a.type !== q0 && a.type !== c0) {
                if (c === H1) b.selected = a.defaultSelected;
                else if (c === L || c === "textarea") b.defaultValue = a.defaultValue;
            } else a.checked && (b.defaultChecked = b.checked = a.checked), b.value !== a.value && (b.value = a.value);
            b.removeAttribute(e.expando);
        }
    }function j2(a, b) {
        if (b.nodeType === 1 && !! e.hasData(a)) {
            var c = e.expando,
                d = e.data(a),
                f = e.data(b, d);
            if (d = d[c]) {
                var g = d.events;
                f = f[c] = e.extend({}, d);
                if (g) {
                    delete f.handle, f.events = {};
                    for (var h in g) for (var i = 0, j = g[h].length; i < j; i++) e.event.add(b, h + (g[h][i].namespace ? M : "") + g[h][i].namespace, g[h][i], g[h][i].data);
                }
            }
        }
    }function S2(a, b) {
        return e.nodeName(a, "table") ? a.getElementsByTagName(j1)[0] || a.appendChild(a.ownerDocument.createElement(j1)) : a;
    }function p2(d, f, g) {
        f = f || 0;
        if (e.isFunction(f)) return e.grep(d, function (a, b) {
            var c = !! f.call(a, b, a);
            return c === g;
        });
        if (f.nodeType) return e.grep(d, function (a, b) {
            return a === f === g;
        });
        if (typeof f == C) {
            var h = e.grep(d, function (a) {
                return a.nodeType === 1;
            });
            if (j3.test(f)) return e.filter(f, h, !g);
            f = e.filter(f, h);
        }
        return e.grep(d, function (a, b) {
            return e.inArray(a, f) >= 0 === g;
        });
    }function q2(a) {
        return !a || !a.parentNode || a.parentNode.nodeType === 11;
    }function o1(a, b) {
        return (a && a !== H ? a + M : "") + b.replace(b3, "`").replace(a3, "&");
    }function Y2(a) {
        var b, c, d, f, g, h, i, j, k, m, q, n, l, o = [],
            s = [],
            D = e._data(this, D1);
        if (!(a.liveFired === this || !D || !D.live || a.target.disabled || a.button && a.type === "click")) {
            a.namespace && (n = new RegExp(C1 + a.namespace.split(M).join(F1) + E1)), a.liveFired = this;
            var A = D.live.slice(0);
            for (i = 0; i < A.length; i++) g = A[i], g.origType.replace(O1, "") === a.type ? s.push(g.selector) : A.splice(i--, 1);
            f = e(a.target).closest(s, a.currentTarget);
            for (j = 0, k = f.length; j < k; j++) {
                q = f[j];
                for (i = 0; i < A.length; i++) {
                    g = A[i];
                    if (q.selector === g.selector && (!n || n.test(g.namespace)) && !q.elem.disabled) {
                        h = q.elem, d = p;
                        if (g.preType === b2 || g.preType === a2) a.type = g.preType, d = e(a.relatedTarget).closest(g.selector)[0], d && e.contains(h, d) && (d = h);
                        (!d || d !== h) && o.push({
                            elem: h,
                            handleObj: g,
                            level: q.level
                        });
                    }
                }
            }
            for (j = 0, k = o.length; j < k; j++) {
                f = o[j];
                if (c && f.level > c) break;
                a.currentTarget = f.elem, a.data = f.handleObj.data, a.handleObj = f.handleObj, l = f.handleObj.origHandler.apply(f.elem, arguments);
                if (l === !1 || a.isPropagationStopped()) {
                    c = f.level, l === !1 && (b = !1);
                    if (a.isImmediatePropagationStopped()) break
                }
            }
            return b;
        }
    }function r2(a, b, c) {
        var d = e.extend({}, c[0]);
        d.type = a, d.originalEvent = {}, d.liveFired = r, e.event.handle.call(b, d), d.isDefaultPrevented() && c[0].preventDefault();
    }function p1() {
        return !0;
    }function y0() {
        return !1;
    }function s2(a, b, c) {
        var d = b + "defer",
            f = b + x0,
            g = b + I0,
            h = e.data(a, d, r, !0);
        h && (c === x0 || !e.data(a, f, r, !0)) && (c === I0 || !e.data(a, g, r, !0)) && setTimeout(function () {
            !e.data(a, f, r, !0) && !e.data(a, g, r, !0) && (e.removeData(a, d, !0), h.resolve());
        }, 0);
    }function L1(a) {
        for (var b in a) if (b !== "toJSON") return !1;
        return !0;
    }function n2(b, c, d) {
        if (d === r && b.nodeType === 1) {
            var f = "data-" + c.replace(c3, "$1-$2").toLowerCase();
            d = b.getAttribute(f);
            if (typeof d == C) {
                try {
                    d = d === "true" ? !0 : d === "false" ? !1 : d === "null" ? p : e.isNaN(d) ? d3.test(d) ? e.parseJSON(d) : d : parseFloat(d);
                } catch (a) {}
                e.data(b, c, d);
            } else d = r;
        }
        return d;
    }
    var t = B.document,
        W2 = B.navigator,
        X2 = B.location,
        e = function () {
            var m = "onreadystatechange",
                q = "DOMContentLoaded";

            function n() {
                if (!l.isReady) {
                    try {
                        t.documentElement.doScroll("left");
                    } catch (a) {
                        setTimeout(n, 1);
                        return;
                    }
                    l.ready();
                }
            }
            var l = function (a, b) {
                    return new l.fn.init(a, b, D);
                },
                o = B.jQuery,
                s = B.$,
                D, A = /^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
                E = /\S/,
                F = /^\s+/,
                J = /\s+$/,
                X = /\d/,
                Y = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
                n0 = /^[\],:{}\s]*$/,
                Z = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                T = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                O = /(?:^|:|,)(?:\s*\[)+/g,
                G = /(webkit)[ \/]([\w.]+)/,
                u = /(opera)(?:.*version)?[ \/]([\w.]+)/,
                v = /(msie) ([\w.]+)/,
                U = /(mozilla)(?:.*? rv:([\w.]+))?/,
                w = /-([a-z])/ig,
                Q = function (a, b) {
                    return b.toUpperCase();
                },
                I = W2.userAgent,
                N, P, R, t1 = Object.prototype.toString,
                d0 = Object.prototype.hasOwnProperty,
                r0 = Array.prototype.push,
                a0 = Array.prototype.slice,
                Y0 = String.prototype.trim,
                s0 = Array.prototype.indexOf,
                X0 = {};
            l.fn = l.prototype = {
                constructor: l,
                init: function (a, b, c) {
                    var d, f, g, h;
                    if (!a) return this;
                    if (a.nodeType) {
                        this.context = this[0] = a, this.length = 1;
                        return this;
                    }
                    if (a === U0 && !b && t.body) {
                        this.context = t, this[0] = t.body, this.selector = a, this.length = 1;
                        return this;
                    }
                    if (typeof a == C) {
                        a.charAt(0) !== "<" || a.charAt(a.length - 1) !== ">" || a.length < 3 ? d = A.exec(a) : d = [p, a, p];
                        if (d && (d[1] || !b)) {
                            if (d[1]) {
                                b = b instanceof l ? b[0] : b, h = b ? b.ownerDocument || b : t, g = Y.exec(a), g ? l.isPlainObject(b) ? (a = [t.createElement(g[1])], l.fn.attr.call(a, b, !0)) : a = [h.createElement(g[1])] : (g = l.buildFragment([d[1]], [h]), a = (g.cacheable ? l.clone(g.fragment) : g.fragment).childNodes);
                                return l.merge(this, a);
                            }
                            f = t.getElementById(d[2]);
                            if (f && f.parentNode) {
                                if (f.id !== d[2]) return c.find(a);
                                this.length = 1, this[0] = f;
                            }
                            this.context = t, this.selector = a;
                            return this;
                        }
                        return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
                    }
                    if (l.isFunction(a)) return c.ready(a);
                    a.selector !== r && (this.selector = a.selector, this.context = a.context);
                    return l.makeArray(a, this);
                },
                selector: "",
                jquery: "1.6.2",
                length: 0,
                size: function () {
                    return this.length;
                },
                toArray: function () {
                    return a0.call(this, 0);
                },
                get: function (a) {
                    return a == p ? this.toArray() : a < 0 ? this[this.length + a] : this[a];
                },
                pushStack: function (a, b, c) {
                    var d = this.constructor();
                    l.isArray(a) ? r0.apply(d, a) : l.merge(d, a), d.prevObject = this, d.context = this.context, b === "find" ? d.selector = this.selector + (this.selector ? z : "") + c : b && (d.selector = this.selector + M + b + "(" + c + ")");
                    return d;
                },
                each: function (a, b) {
                    return l.each(this, a, b);
                },
                ready: function (a) {
                    l.bindReady(), P.done(a);
                    return this;
                },
                eq: function (a) {
                    return a === -1 ? this.slice(a) : this.slice(a, +a + 1);
                },
                first: function () {
                    return this.eq(0);
                },
                last: function () {
                    return this.eq(-1);
                },
                slice: function () {
                    return this.pushStack(a0.apply(this, arguments), "slice", a0.call(arguments).join(","));
                },
                map: function (c) {
                    return this.pushStack(l.map(this, function (a, b) {
                        return c.call(a, b, a);
                    }));
                },
                end: function () {
                    return this.prevObject || this.constructor(p);
                },
                push: r0,
                sort: [].sort,
                splice: [].splice
            }, l.fn.init.prototype = l.fn, l.extend = l.fn.extend = function () {
                var a, b, c, d, f, g, h = arguments[0] || {},
                    i = 1,
                    j = arguments.length,
                    k = !1;
                typeof h == i1 && (k = h, h = arguments[1] || {}, i = 2), typeof h != K && !l.isFunction(h) && (h = {}), j === i && (h = this, --i);
                for (; i < j; i++) if ((a = arguments[i]) != p) for (b in a) {
                    c = h[b], d = a[b];
                    if (h === d) continue;
                    k && d && (l.isPlainObject(d) || (f = l.isArray(d))) ? (f ? (f = !1, g = c && l.isArray(c) ? c : []) : g = c && l.isPlainObject(c) ? c : {}, h[b] = l.extend(k, g, d)) : d !== r && (h[b] = d);
                }
                return h;
            }, l.extend({
                noConflict: function (a) {
                    B.$ === l && (B.$ = s), a && B.jQuery === l && (B.jQuery = o);
                    return l;
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function (a) {
                    a ? l.readyWait++ : l.ready(!0);
                },
                ready: function (a) {
                    if (a === !0 && !--l.readyWait || a !== !0 && !l.isReady) {
                        if (!t.body) return setTimeout(l.ready, 1);
                        l.isReady = !0;
                        if (a !== !0 && --l.readyWait > 0) return;
                        P.resolveWith(t, [l]), l.fn.trigger && l(t).trigger("ready").unbind("ready");
                    }
                },
                bindReady: function () {
                    if (!P) {
                        P = l._Deferred();
                        if (t.readyState === "complete") return setTimeout(l.ready, 1);
                        if (t.addEventListener) t.addEventListener(q, R, !1), B.addEventListener("load", l.ready, !1);
                        else if (t.attachEvent) {
                            t.attachEvent(m, R), B.attachEvent("onload", l.ready);
                            var b = !1;
                            try {
                                b = B.frameElement == p;
                            } catch (a) {}
                            t.documentElement.doScroll && b && n();
                        }
                    }
                },
                isFunction: function (a) {
                    return l.type(a) === V0;
                },
                isArray: Array.isArray || function (a) {
                    return l.type(a) === "array";
                },
                isWindow: function (a) {
                    return a && typeof a == K && "setInterval" in a;
                },
                isNaN: function (a) {
                    return a == p || !X.test(a) || isNaN(a);
                },
                type: function (a) {
                    return a == p ? String(a) : X0[t1.call(a)] || K;
                },
                isPlainObject: function (a) {
                    if (!a || l.type(a) !== K || a.nodeType || l.isWindow(a)) return !1;
                    if (a.constructor && !d0.call(a, "constructor") && !d0.call(a.constructor.prototype, "isPrototypeOf")) return !1;
                    var b;
                    for (b in a);
                    return b === r || d0.call(a, b);
                },
                isEmptyObject: function (a) {
                    for (var b in a) return !1;
                    return !0;
                },
                error: function (a) {
                    throw a
                },
                parseJSON: function (a) {
                    if (typeof a != C || !a) return p;
                    a = l.trim(a);
                    if (B.JSON && B.JSON.parse) return B.JSON.parse(a);
                    if (n0.test(a.replace(Z, "@").replace(T, "]").replace(O, ""))) return (new Function("return " + a))();
                    l.error("Invalid JSON: " + a);
                },
                parseXML: function (a, b, c) {
                    B.DOMParser ? (c = new DOMParser, b = c.parseFromString(a, "text/xml")) : (b = new ActiveXObject("Microsoft.XMLDOM"), b.async = "false", b.loadXML(a)), c = b.documentElement, (!c || !c.nodeName || c.nodeName === Z1) && l.error("Invalid XML: " + a);
                    return b;
                },
                noop: function () {},
                globalEval: function (b) {
                    b && E.test(b) && (B.execScript || function (a) {
                        B.eval.call(B, a);
                    })(b);
                },
                camelCase: function (a) {
                    return a.replace(w, Q);
                },
                nodeName: function (a, b) {
                    return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase();
                },
                each: function (a, b, c) {
                    var d, f = 0,
                        g = a.length,
                        h = g === r || l.isFunction(a);
                    if (c) {
                        if (h) {
                            for (d in a) if (b.apply(a[d], c) === !1) break
                        } else for (; f < g;) if (b.apply(a[f++], c) === !1) break
                    } else if (h) {
                        for (d in a) if (b.call(a[d], d, a[d]) === !1) break
                    } else for (; f < g;) if (b.call(a[f], f, a[f++]) === !1) break;
                    return a;
                },
                trim: Y0 ? function (a) {
                    return a == p ? "" : Y0.call(a);
                } : function (a) {
                    return a == p ? "" : (a + "").replace(F, "").replace(J, "");
                },
                makeArray: function (a, b) {
                    var c = b || [];
                    if (a != p) {
                        var d = l.type(a);
                        a.length == p || d === C || d === V0 || d === "regexp" || l.isWindow(a) ? r0.call(c, a) : l.merge(c, a);
                    }
                    return c;
                },
                inArray: function (a, b) {
                    if (s0) return s0.call(b, a);
                    for (var c = 0, d = b.length; c < d; c++) if (b[c] === a) return c;
                    return -1;
                },
                merge: function (a, b) {
                    var c = a.length,
                        d = 0;
                    if (typeof b.length == f0) for (var f = b.length; d < f; d++) a[c++] = b[d];
                    else while (b[d] !== r) a[c++] = b[d++];
                    a.length = c;
                    return a;
                },
                grep: function (a, b, c) {
                    var d = [],
                        f;
                    c = !! c;
                    for (var g = 0, h = a.length; g < h; g++) f = !! b(a[g], g), c !== f && d.push(a[g]);
                    return d;
                },
                map: function (a, b, c) {
                    var d, f, g = [],
                        h = 0,
                        i = a.length,
                        j = a instanceof l || i !== r && typeof i == f0 && (i > 0 && a[0] && a[i - 1] || i === 0 || l.isArray(a));
                    if (j) for (; h < i; h++) d = b(a[h], h, c), d != p && (g[g.length] = d);
                    else for (f in a) d = b(a[f], f, c), d != p && (g[g.length] = d);
                    return g.concat.apply([], g);
                },
                guid: 1,
                proxy: function (a, b) {
                    if (typeof b == C) {
                        var c = a[b];
                        b = a, a = c;
                    }
                    if (!l.isFunction(a)) return r;
                    var d = a0.call(arguments, 2),
                        f = function () {
                            return a.apply(b, d.concat(a0.call(arguments)));
                        };
                    f.guid = a.guid = a.guid || f.guid || l.guid++;
                    return f;
                },
                access: function (a, b, c, d, f, g) {
                    var h = a.length;
                    if (typeof b == K) {
                        for (var i in b) l.access(a, i, b[i], d, f, c);
                        return a;
                    }
                    if (c !== r) {
                        d = !g && d && l.isFunction(c);
                        for (var j = 0; j < h; j++) f(a[j], b, d ? c.call(a[j], j, f(a[j], b)) : c, g);
                        return a;
                    }
                    return h ? f(a[0], b) : r;
                },
                now: function () {
                    return (new Date).getTime();
                },
                uaMatch: function (a) {
                    a = a.toLowerCase();
                    var b = G.exec(a) || u.exec(a) || v.exec(a) || a.indexOf("compatible") < 0 && U.exec(a) || [];
                    return {
                        browser: b[1] || "",
                        version: b[2] || "0"
                    };
                },
                sub: function () {function c(a, b) {
                        return new c.fn.init(a, b);
                    }
                    l.extend(!0, c, this), c.superclass = this, c.fn = c.prototype = this(), c.fn.constructor = c, c.sub = this.sub, c.fn.init = function (a, b) {
                        b && b instanceof l && !(b instanceof c) && (b = c(b));
                        return l.fn.init.call(this, a, b, d);
                    }, c.fn.init.prototype = c.fn;
                    var d = c(t);
                    return c;
                },
                browser: {}
            }), l.each("Boolean Number String Function Array Date RegExp Object".split(z), function (a, b) {
                X0["[object " + b + "]"] = b.toLowerCase();
            }), N = l.uaMatch(I), N.browser && (l.browser[N.browser] = !0, l.browser.version = N.version), l.browser.webkit && (l.browser.safari = !0), E.test("��") && (F = /^[\s\xA0]+/, J = /[\s\xA0]+$/), D = l(t), t.addEventListener ? R = function () {
                t.removeEventListener(q, R, !1), l.ready();
            } : t.attachEvent && (R = function () {
                t.readyState === "complete" && (t.detachEvent(m, R), l.ready());
            });
            return l;
        }(),
        M1 = "done fail isResolved isRejected promise then always pipe".split(z),
        o2 = [].slice;
    e.extend({
        _Deferred: function () {
            var h = [],
                i, j, k, m = {
                    done: function () {
                        if (!k) {
                            var a = arguments,
                                b, c, d, f, g;
                            i && (g = i, i = 0);
                            for (b = 0, c = a.length; b < c; b++) d = a[b], f = e.type(d), f === "array" ? m.done.apply(m, d) : f === V0 && h.push(d);
                            g && m.resolveWith(g[0], g[1]);
                        }
                        return this;
                    },
                    resolveWith: function (a, b) {
                        if (!k && !i && !j) {
                            b = b || [], j = 1;
                            try {
                                while (h[0]) h.shift().apply(a, b);
                            } finally {
                                i = [a, b], j = 0;
                            }
                        }
                        return this;
                    },
                    resolve: function () {
                        m.resolveWith(this, arguments);
                        return this;
                    },
                    isResolved: function () {
                        return !!j || !! i;
                    },
                    cancel: function () {
                        k = 1, h = [];
                        return this;
                    }
                };
            return m;
        },
        Deferred: function (j) {
            var k = e._Deferred(),
                m = e._Deferred(),
                q;
            e.extend(k, {
                then: function (a, b) {
                    k.done(a).fail(b);
                    return this;
                },
                always: function () {
                    return k.done.apply(k, arguments).fail.apply(this, arguments);
                },
                fail: m.done,
                rejectWith: m.resolveWith,
                reject: m.resolve,
                isRejected: m.isResolved,
                pipe: function (h, i) {
                    return e.Deferred(function (g) {
                        e.each({
                            done: [h, "resolve"],
                            fail: [i, "reject"]
                        }, function (a, b) {
                            var c = b[0],
                                d = b[1],
                                f;
                            e.isFunction(c) ? k[a](function () {
                                f = c.apply(this, arguments), f && e.isFunction(f.promise) ? f.promise().then(g.resolve, g.reject) : g[d](f);
                            }) : k[a](g[d]);
                        });
                    }).promise();
                },
                promise: function (a) {
                    if (a == p) {
                        if (q) return q;
                        q = a = {};
                    }
                    var b = M1.length;
                    while (b--) a[M1[b]] = k[M1[b]];
                    return a;
                }
            }), k.done(m.cancel).fail(k.cancel), delete k.cancel, j && j.call(k, k);
            return k;
        },
        when: function (c) {function d(b) {
                return function (a) {
                    f[b] = arguments.length > 1 ? o2.call(arguments, 0) : a, --i || j.resolveWith(j, o2.call(f, 0));
                };
            }
            var f = arguments,
                g = 0,
                h = f.length,
                i = h,
                j = h <= 1 && c && e.isFunction(c.promise) ? c : e.Deferred();
            if (h > 1) {
                for (; g < h; g++) f[g] && e.isFunction(f[g].promise) ? f[g].promise().then(d(g), j.reject) : --i;
                i || j.resolveWith(j, f);
            } else j !== c && j.resolveWith(j, h ? [c] : []);
            return j.promise();
        }
    }), e.support = function () {
        var b = t.createElement(b0),
            c = t.documentElement,
            d, f, g, h, i, j, k, m, q, n, l, o, s, D, A, E, F;
        b.setAttribute(e1, "t"), b.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>", d = b.getElementsByTagName(H), f = b.getElementsByTagName("a")[0];
        if (!d || !d.length || !f) return {};
        g = t.createElement(B1), h = g.appendChild(t.createElement(H1)), i = b.getElementsByTagName(L)[0], k = {
            leadingWhitespace: b.firstChild.nodeType === 3,
            tbody: !b.getElementsByTagName(j1).length,
            htmlSerialize: !! b.getElementsByTagName("link").length,
            style: /top/.test(f.getAttribute("style")),
            hrefNormalized: f.getAttribute(T0) === "/a",
            opacity: /^0.55$/.test(f.style.opacity),
            cssFloat: !! f.style.cssFloat,
            checkOn: i.value === G0,
            optSelected: h.selected,
            getSetAttribute: b.className !== "t",
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0
        }, i.checked = !0, k.noCloneChecked = i.cloneNode(!0).checked, g.disabled = !0, k.optDisabled = !h.disabled;
        try {
            delete b.test;
        } catch (a) {
            k.deleteExpando = !1;
        }!b.addEventListener && b.attachEvent && b.fireEvent && (b.attachEvent("onclick", function () {
            k.noCloneEvent = !1;
        }), b.cloneNode(!0).fireEvent("onclick")), i = t.createElement(L), i.value = "t", i.setAttribute(h1, c0), k.radioValue = i.value === "t", i.setAttribute("checked", "checked"), b.appendChild(i), m = t.createDocumentFragment(), m.appendChild(b.firstChild), k.checkClone = m.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "", b.style.width = b.style.paddingLeft = "1px", q = t.getElementsByTagName(U0)[0], l = t.createElement(q ? b0 : U0), o = {
            visibility: H0,
            width: 0,
            height: 0,
            border: 0,
            margin: 0
        }, q && e.extend(o, {
            position: f1,
            left: -1e3,
            top: -1e3
        });
        for (E in o) l.style[E] = o[E];
        l.appendChild(b), n = q || c, n.insertBefore(l, n.firstChild), k.appendChecked = i.checked, k.boxModel = b.offsetWidth === 2, "zoom" in b.style && (b.style.display = g1, b.style.zoom = 1, k.inlineBlockNeedsLayout = b.offsetWidth === 2, b.style.display = "", b.innerHTML = "<div style='width:4px;'></div>", k.shrinkWrapBlocks = b.offsetWidth !== 2), b.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>", s = b.getElementsByTagName("td"), F = s[0].offsetHeight === 0, s[0].style.display = "", s[1].style.display = m0, k.reliableHiddenOffsets = F && s[0].offsetHeight === 0, b.innerHTML = "", t.defaultView && t.defaultView.getComputedStyle && (j = t.createElement(b0), j.style.width = "0", j.style.marginRight = "0", b.appendChild(j), k.reliableMarginRight = (parseInt((t.defaultView.getComputedStyle(j, p) || {
            marginRight: 0
        }).marginRight, 10) || 0) === 0), l.innerHTML = "", n.removeChild(l);
        if (b.attachEvent) for (E in {
            submit: 1,
            change: 1,
            focusin: 1
        }) A = G0 + E, F = A in b, F || (b.setAttribute(A, "return;"), F = typeof b[A] == V0), k[E + "Bubbles"] = F;
        l = m = g = h = q = j = b = i = p;
        return k;
    }(), e.boxModel = e.support.boxModel;
    var d3 = /^(?:\{.*\}|\[.*\])$/,
        c3 = /([a-z])([A-Z])/g;
    e.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (e.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function (a) {
            a = a.nodeType ? e.cache[a[e.expando]] : a[e.expando];
            return !!a && !L1(a);
        },
        data: function (a, b, c, d) {
            if ( !! e.acceptData(a)) {
                var f = e.expando,
                    g = typeof b == C,
                    h, i = a.nodeType,
                    j = i ? e.cache : a,
                    k = i ? a[e.expando] : a[e.expando] && e.expando;
                if ((!k || d && k && !j[k][f]) && g && c === r) return;
                k || (i ? a[e.expando] = k = ++e.uuid : k = e.expando), j[k] || (j[k] = {}, i || (j[k].toJSON = e.noop));
                if (typeof b == K || typeof b == V0) d ? j[k][f] = e.extend(j[k][f], b) : j[k] = e.extend(j[k], b);
                h = j[k], d && (h[f] || (h[f] = {}), h = h[f]), c !== r && (h[e.camelCase(b)] = c);
                if (b === D1 && !h[b]) return h[f] && h[f].events;
                return g ? h[e.camelCase(b)] || h[b] : h;
            }
        },
        removeData: function (a, b, c) {
            if ( !! e.acceptData(a)) {
                var d = e.expando,
                    f = a.nodeType,
                    g = f ? e.cache : a,
                    h = f ? a[e.expando] : e.expando;
                if (!g[h]) return;
                if (b) {
                    var i = c ? g[h][d] : g[h];
                    if (i) {
                        delete i[b];
                        if (!L1(i)) return;
                    }
                }
                if (c) {
                    delete g[h][d];
                    if (!L1(g[h])) return;
                }
                var j = g[h][d];
                e.support.deleteExpando || g != B ? delete g[h] : g[h] = p, j ? (g[h] = {}, f || (g[h].toJSON = e.noop), g[h][d] = j) : f && (e.support.deleteExpando ? delete a[e.expando] : a.removeAttribute ? a.removeAttribute(e.expando) : a[e.expando] = p);
            }
        },
        _data: function (a, b, c) {
            return e.data(a, b, c, !0);
        },
        acceptData: function (a) {
            if (a.nodeName) {
                var b = e.noData[a.nodeName.toLowerCase()];
                if (b) return b !== !0 && a.getAttribute("classid") === b;
            }
            return !0;
        }
    }), e.fn.extend({
        data: function (c, d) {
            var f = p;
            if (typeof c == V) {
                if (this.length) {
                    f = e.data(this[0]);
                    if (this[0].nodeType === 1) {
                        var g = this[0].attributes,
                            h;
                        for (var i = 0, j = g.length; i < j; i++) h = g[i].name, h.indexOf("data-") === 0 && (h = e.camelCase(h.substring(5)), n2(this[0], h, f[h]));
                    }
                }
                return f;
            }
            if (typeof c == K) return this.each(function () {
                e.data(this, c);
            });
            var k = c.split(M);
            k[1] = k[1] ? M + k[1] : "";
            if (d === r) {
                f = this.triggerHandler("getData" + k[1] + "!", [k[0]]), f === r && this.length && (f = e.data(this[0], c), f = n2(this[0], c, f));
                return f === r && k[1] ? this.data(k[0]) : f;
            }
            return this.each(function () {
                var a = e(this),
                    b = [k[0], d];
                a.triggerHandler("setData" + k[1] + "!", b), e.data(this, c, d), a.triggerHandler("changeData" + k[1] + "!", b);
            });
        },
        removeData: function (a) {
            return this.each(function () {
                e.removeData(this, a);
            });
        }
    }), e.extend({
        _mark: function (a, b) {
            a && (b = (b || e0) + I0, e.data(a, b, (e.data(a, b, r, !0) || 0) + 1, !0));
        },
        _unmark: function (a, b, c) {
            a !== !0 && (c = b, b = a, a = !1);
            if (b) {
                c = c || e0;
                var d = c + I0,
                    f = a ? 0 : (e.data(b, d, r, !0) || 1) - 1;
                f ? e.data(b, d, f, !0) : (e.removeData(b, d, !0), s2(b, c, I0));
            }
        },
        queue: function (a, b, c) {
            if (a) {
                b = (b || e0) + x0;
                var d = e.data(a, b, r, !0);
                c && (!d || e.isArray(c) ? d = e.data(a, b, e.makeArray(c), !0) : d.push(c));
                return d || [];
            }
        },
        dequeue: function (a, b) {
            b = b || e0;
            var c = e.queue(a, b),
                d = c.shift(),
                f;
            d === y1 && (d = c.shift()), d && (b === e0 && c.unshift(y1), d.call(a, function () {
                e.dequeue(a, b);
            })), c.length || (e.removeData(a, b + x0, !0), s2(a, b, x0));
        }
    }), e.fn.extend({
        queue: function (b, c) {
            typeof b != C && (c = b, b = e0);
            if (c === r) return e.queue(this[0], b);
            return this.each(function () {
                var a = e.queue(this, b, c);
                b === e0 && a[0] !== y1 && e.dequeue(this, b);
            });
        },
        dequeue: function (a) {
            return this.each(function () {
                e.dequeue(this, a);
            });
        },
        delay: function (b, c) {
            b = e.fx ? e.fx.speeds[b] || b : b, c = c || e0;
            return this.queue(c, function () {
                var a = this;
                setTimeout(function () {
                    e.dequeue(a, c);
                }, b);
            });
        },
        clearQueue: function (a) {
            return this.queue(a || e0, []);
        },
        promise: function (a, b) {function c() {
                --h || d.resolveWith(f, [f]);
            }
            typeof a != C && (b = a, a = r), a = a || e0;
            var d = e.Deferred(),
                f = this,
                g = f.length,
                h = 1,
                i = a + "defer",
                j = a + x0,
                k = a + I0,
                m;
            while (g--) if (m = e.data(f[g], i, r, !0) || (e.data(f[g], j, r, !0) || e.data(f[g], k, r, !0)) && e.data(f[g], i, e._Deferred(), !0)) h++, m.done(c);
            c();
            return d.promise();
        }
    });
    var v2 = /[\n\t\r]/g,
        P1 = /\s+/,
        h3 = /\r/g,
        g3 = /^(?:button|input)$/i,
        f3 = /^(?:button|input|object|select|textarea)$/i,
        e3 = /^a(?:rea)?$/i,
        u2 = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        Z2 = /\:|^on/,
        z0, t2;
    e.fn.extend({
        attr: function (a, b) {
            return e.access(this, a, b, !0, e.attr);
        },
        removeAttr: function (a) {
            return this.each(function () {
                e.removeAttr(this, a);
            });
        },
        prop: function (a, b) {
            return e.access(this, a, b, !0, e.prop);
        },
        removeProp: function (b) {
            b = e.propFix[b] || b;
            return this.each(function () {
                try {
                    this[b] = r, delete this[b];
                } catch (a) {}
            });
        },
        addClass: function (b) {
            var c, d, f, g, h, i, j;
            if (e.isFunction(b)) return this.each(function (a) {
                e(this).addClass(b.call(this, a, this.className));
            });
            if (b && typeof b == C) {
                c = b.split(P1);
                for (d = 0, f = this.length; d < f; d++) {
                    g = this[d];
                    if (g.nodeType === 1) if (!g.className && c.length === 1) g.className = b;
                    else {
                        h = z + g.className + z;
                        for (i = 0, j = c.length; i < j; i++)~h.indexOf(z + c[i] + z) || (h += c[i] + z);
                        g.className = e.trim(h);
                    }
                }
            }
            return this;
        },
        removeClass: function (b) {
            var c, d, f, g, h, i, j;
            if (e.isFunction(b)) return this.each(function (a) {
                e(this).removeClass(b.call(this, a, this.className));
            });
            if (b && typeof b == C || b === r) {
                c = (b || "").split(P1);
                for (d = 0, f = this.length; d < f; d++) {
                    g = this[d];
                    if (g.nodeType === 1 && g.className) if (b) {
                        h = (z + g.className + z).replace(v2, z);
                        for (i = 0, j = c.length; i < j; i++) h = h.replace(z + c[i] + z, z);
                        g.className = e.trim(h);
                    } else g.className = "";
                }
            }
            return this;
        },
        toggleClass: function (h, i) {
            var j = typeof h,
                k = typeof i == i1;
            if (e.isFunction(h)) return this.each(function (a) {
                e(this).toggleClass(h.call(this, a, this.className, i), i);
            });
            return this.each(function () {
                var a = "__className__";
                if (j === C) {
                    var b, c = 0,
                        d = e(this),
                        f = i,
                        g = h.split(P1);
                    while (b = g[c++]) f = k ? f : !d.hasClass(b), d[f ? "addClass" : "removeClass"](b);
                } else if (j === V || j === i1) this.className && e._data(this, a, this.className), this.className = this.className || h === !1 ? "" : e._data(this, a) || "";
            });
        },
        hasClass: function (a) {
            var b = z + a + z;
            for (var c = 0, d = this.length; c < d; c++) if ((z + this[c].className + z).replace(v2, z).indexOf(b) > -1) return !0;
            return !1;
        },
        val: function (f) {
            var g, h, i = this[0];
            if (!arguments.length) {
                if (i) {
                    g = e.valHooks[i.nodeName.toLowerCase()] || e.valHooks[i.type];
                    if (g && E0 in g && (h = g.get(i, A1)) !== r) return h;
                    h = i.value;
                    return typeof h == C ? h.replace(h3, "") : h == p ? "" : h;
                }
                return r;
            }
            var j = e.isFunction(f);
            return this.each(function (b) {
                var c = e(this),
                    d;
                if (this.nodeType === 1) {
                    j ? d = f.call(this, b, c.val()) : d = f, d == p ? d = "" : typeof d == f0 ? d += "" : e.isArray(d) && (d = e.map(d, function (a) {
                        return a == p ? "" : a + "";
                    })), g = e.valHooks[this.nodeName.toLowerCase()] || e.valHooks[this.type];
                    if (!g || !("set" in g) || g.set(this, d, A1) === r) this.value = d;
                }
            });
        }
    }), e.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = a.attributes.value;
                    return !b || b.specified ? a.value : a.text;
                }
            },
            select: {
                get: function (a) {
                    var b, c = a.selectedIndex,
                        d = [],
                        f = a.options,
                        g = a.type === "select-one";
                    if (c < 0) return p;
                    for (var h = g ? c : 0, i = g ? c + 1 : f.length; h < i; h++) {
                        var j = f[h];
                        if (j.selected && (e.support.optDisabled ? !j.disabled : j.getAttribute("disabled") === p) && (!j.parentNode.disabled || !e.nodeName(j.parentNode, "optgroup"))) {
                            b = e(j).val();
                            if (g) return b;
                            d.push(b);
                        }
                    }
                    if (g && !d.length && f.length) return e(f[c]).val();
                    return d;
                },
                set: function (a, b) {
                    var c = e.makeArray(b);
                    e(a).find(H1).each(function () {
                        this.selected = e.inArray(e(this).val(), c) >= 0;
                    }), c.length || (a.selectedIndex = -1);
                    return c;
                }
            }
        },
        attrFn: {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0
        },
        attrFix: {
            tabindex: z1
        },
        attr: function (a, b, c, d) {
            var f = a.nodeType;
            if (!a || f === 3 || f === 8 || f === 2) return r;
            if (d && b in e.attrFn) return e(a)[b](c);
            if (!("getAttribute" in a)) return e.prop(a, b, c);
            var g, h, i = f !== 1 || !e.isXMLDoc(a);
            i && (b = e.attrFix[b] || b, h = e.attrHooks[b], h || (u2.test(b) ? h = t2 : z0 && b !== e1 && (e.nodeName(a, d1) || Z2.test(b)) && (h = z0)));
            if (c !== r) {
                if (c === p) {
                    e.removeAttr(a, b);
                    return r;
                }
                if (h && "set" in h && i && (g = h.set(a, c, b)) !== r) return g;
                a.setAttribute(b, "" + c);
                return c;
            }
            if (h && E0 in h && i && (g = h.get(a, b)) !== p) return g;
            g = a.getAttribute(b);
            return g === p ? r : g;
        },
        removeAttr: function (a, b) {
            var c;
            a.nodeType === 1 && (b = e.attrFix[b] || b, e.support.getSetAttribute ? a.removeAttribute(b) : (e.attr(a, b, ""), a.removeAttributeNode(a.getAttributeNode(b))), u2.test(b) && (c = e.propFix[b] || b) in a && (a[c] = !1));
        },
        attrHooks: {
            type: {
                set: function (a, b) {
                    if (g3.test(a.nodeName) && a.parentNode) e.error("type property can't be changed");
                    else if (!e.support.radioValue && b === c0 && e.nodeName(a, L)) {
                        var c = a.value;
                        a.setAttribute(h1, b), c && (a.value = c);
                        return b;
                    }
                }
            },
            tabIndex: {
                get: function (a) {
                    var b = a.getAttributeNode(z1);
                    return b && b.specified ? parseInt(b.value, 10) : f3.test(a.nodeName) || e3.test(a.nodeName) && a.href ? 0 : r;
                }
            },
            value: {
                get: function (a, b) {
                    if (z0 && e.nodeName(a, F0)) return z0.get(a, b);
                    return b in a ? a.value : p;
                },
                set: function (a, b, c) {
                    if (z0 && e.nodeName(a, F0)) return z0.set(a, b, c);
                    a.value = b;
                }
            }
        },
        propFix: {
            tabindex: z1,
            readonly: "readOnly",
            "for": "htmlFor",
            "class": e1,
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (a, b, c) {
            var d = a.nodeType;
            if (!a || d === 3 || d === 8 || d === 2) return r;
            var f, g, h = d !== 1 || !e.isXMLDoc(a);
            h && (b = e.propFix[b] || b, g = e.propHooks[b]);
            return c !== r ? g && "set" in g && (f = g.set(a, c, b)) !== r ? f : a[b] = c : g && E0 in g && (f = g.get(a, b)) !== r ? f : a[b];
        },
        propHooks: {}
    }), t2 = {
        get: function (a, b) {
            return e.prop(a, b) ? b.toLowerCase() : r;
        },
        set: function (a, b, c) {
            var d;
            b === !1 ? e.removeAttr(a, c) : (d = e.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase()));
            return c;
        }
    }, e.support.getSetAttribute || (e.attrFix = e.propFix, z0 = e.attrHooks.name = e.attrHooks.title = e.valHooks.button = {
        get: function (a, b) {
            var c;
            c = a.getAttributeNode(b);
            return c && c.nodeValue !== "" ? c.nodeValue : r;
        },
        set: function (a, b, c) {
            var d = a.getAttributeNode(c);
            if (d) {
                d.nodeValue = b;
                return b;
            }
        }
    }, e.each([l0, w0], function (c, d) {
        e.attrHooks[d] = e.extend(e.attrHooks[d], {
            set: function (a, b) {
                if (b === "") {
                    a.setAttribute(d, c1);
                    return b;
                }
            }
        });
    })), e.support.hrefNormalized || e.each([T0, "src", l0, w0], function (c, d) {
        e.attrHooks[d] = e.extend(e.attrHooks[d], {
            get: function (a) {
                var b = a.getAttribute(d, 2);
                return b === p ? r : b;
            }
        });
    }), e.support.style || (e.attrHooks.style = {
        get: function (a) {
            return a.style.cssText.toLowerCase() || r;
        },
        set: function (a, b) {
            return a.style.cssText = "" + b;
        }
    }), e.support.optSelected || (e.propHooks.selected = e.extend(e.propHooks.selected, {
        get: function (a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
        }
    })), e.support.checkOn || e.each([c0, q0], function () {
        e.valHooks[this] = {
            get: function (a) {
                return a.getAttribute(A1) === p ? G0 : a.value;
            }
        };
    }), e.each([c0, q0], function () {
        e.valHooks[this] = e.extend(e.valHooks[this], {
            set: function (a, b) {
                if (e.isArray(b)) return a.checked = e.inArray(e(a).val(), b) >= 0;
            }
        });
    });
    var O1 = /\.(.*)$/,
        N1 = /^(?:textarea|input|select)$/i,
        b3 = /\./g,
        a3 = / /g,
        p3 = /[^\w\s.|`]/g,
        q3 = function (a) {
            return a.replace(p3, "\\$&");
        };
    e.event = {
        add: function (b, c, d, f) {
            if (b.nodeType !== 3 && b.nodeType !== 8) {
                if (d === !1) d = y0;
                else if (!d) return;
                var g, h;
                d.handler && (g = d, d = g.handler), d.guid || (d.guid = e.guid++);
                var i = e._data(b);
                if (!i) return;
                var j = i.events,
                    k = i.handle;
                j || (i.events = j = {}), k || (i.handle = k = function (a) {
                    return typeof e != V && (!a || e.event.triggered !== a.type) ? e.event.handle.apply(k.elem, arguments) : r;
                }), k.elem = b, c = c.split(z);
                var m, q = 0,
                    n;
                while (m = c[q++]) {
                    h = g ? e.extend({}, g) : {
                        handler: d,
                        data: f
                    }, m.indexOf(M) > -1 ? (n = m.split(M), m = n.shift(), h.namespace = n.slice(0).sort().join(M)) : (n = [], h.namespace = ""), h.type = m, h.guid || (h.guid = d.guid);
                    var l = j[m],
                        o = e.event.special[m] || {};
                    if (!l) {
                        l = j[m] = [];
                        if (!o.setup || o.setup.call(b, f, n, k) === !1) b.addEventListener ? b.addEventListener(m, k, !1) : b.attachEvent && b.attachEvent(G0 + m, k);
                    }
                    o.add && (o.add.call(b, h), h.handler.guid || (h.handler.guid = d.guid)), l.push(h), e.event.global[m] = !0;
                }
                b = p;
            }
        },
        global: {},
        remove: function (a, b, c, d) {
            if (a.nodeType !== 3 && a.nodeType !== 8) {
                c === !1 && (c = y0);
                var f, g, h, i, j = 0,
                    k, m, q, n, l, o, s, D = e.hasData(a) && e._data(a),
                    A = D && D.events;
                if (!D || !A) return;
                b && b.type && (c = b.handler, b = b.type);
                if (!b || typeof b == C && b.charAt(0) === M) {
                    b = b || "";
                    for (g in A) e.event.remove(a, g + b);
                    return;
                }
                b = b.split(z);
                while (g = b[j++]) {
                    s = g, o = p, k = g.indexOf(M) < 0, m = [], k || (m = g.split(M), g = m.shift(), q = new RegExp(C1 + e.map(m.slice(0).sort(), q3).join(F1) + E1)), l = A[g];
                    if (!l) continue;
                    if (!c) {
                        for (i = 0; i < l.length; i++) {
                            o = l[i];
                            if (k || q.test(o.namespace)) e.event.remove(a, s, o.handler, i), l.splice(i--, 1);
                        }
                        continue
                    }
                    n = e.event.special[g] || {};
                    for (i = d || 0; i < l.length; i++) {
                        o = l[i];
                        if (c.guid === o.guid) {
                            if (k || q.test(o.namespace)) d == p && l.splice(i--, 1), n.remove && n.remove.call(a, o);
                            if (d != p) break
                        }
                    }
                    if (l.length === 0 || d != p && l.length === 1)(!n.teardown || n.teardown.call(a, m) === !1) && e.removeEvent(a, g, D.handle), f = p, delete A[g];
                }
                if (e.isEmptyObject(A)) {
                    var E = D.handle;
                    E && (E.elem = p), delete D.events, delete D.handle, e.isEmptyObject(D) && e.removeData(a, r, !0);
                }
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function (c, d, f, g) {
            var h = c.type || c,
                i = [],
                j;
            h.indexOf("!") >= 0 && (h = h.slice(0, -1), j = !0), h.indexOf(M) >= 0 && (i = h.split(M), h = i.shift(), i.sort());
            if ( !! f && !e.event.customEvent[h] || !! e.event.global[h]) {
                c = typeof c == K ? c[e.expando] ? c : new e.Event(h, c) : new e.Event(h), c.type = h, c.exclusive = j, c.namespace = i.join(M), c.namespace_re = new RegExp(C1 + i.join(F1) + E1);
                if (g || !f) c.preventDefault(), c.stopPropagation();
                if (!f) {
                    e.each(e.cache, function () {
                        var a = e.expando,
                            b = this[a];
                        b && b.events && b.events[h] && e.event.trigger(c, d, b.handle.elem);
                    });
                    return;
                }
                if (f.nodeType === 3 || f.nodeType === 8) return;
                c.result = r, c.target = f, d = d != p ? e.makeArray(d) : [], d.unshift(c);
                var k = f,
                    m = h.indexOf(":") < 0 ? G0 + h : "";
                do {
                    var q = e._data(k, "handle");
                    c.currentTarget = k, q && q.apply(k, d), m && e.acceptData(k) && k[m] && k[m].apply(k, d) === !1 && (c.result = !1, c.preventDefault()), k = k.parentNode || k.ownerDocument || k === c.target.ownerDocument && B;
                } while (k && !c.isPropagationStopped());
                if (!c.isDefaultPrevented()) {
                    var n, l = e.event.special[h] || {};
                    if ((!l._default || l._default.call(f.ownerDocument, c) === !1) && (h !== "click" || !e.nodeName(f, "a")) && e.acceptData(f)) {
                        try {
                            m && f[h] && (n = f[m], n && (f[m] = p), e.event.triggered = h, f[h]());
                        } catch (a) {}
                        n && (f[m] = n), e.event.triggered = r;
                    }
                }
                return c.result;
            }
        },
        handle: function (a) {
            a = e.event.fix(a || B.event);
            var b = ((e._data(this, D1) || {})[a.type] || []).slice(0),
                c = !a.exclusive && !a.namespace,
                d = Array.prototype.slice.call(arguments, 0);
            d[0] = a, a.currentTarget = this;
            for (var f = 0, g = b.length; f < g; f++) {
                var h = b[f];
                if (c || a.namespace_re.test(h.namespace)) {
                    a.handler = h.handler, a.data = h.data, a.handleObj = h;
                    var i = h.handler.apply(this, d);
                    i !== r && (a.result = i, i === !1 && (a.preventDefault(), a.stopPropagation()));
                    if (a.isImmediatePropagationStopped()) break
                }
            }
            return a.result;
        },
        props: "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(z),
        fix: function (a) {
            if (a[e.expando]) return a;
            var b = a;
            a = e.Event(b);
            for (var c = this.props.length, d; c;) d = this.props[--c], a[d] = b[d];
            a.target || (a.target = a.srcElement || t), a.target.nodeType === 3 && (a.target = a.target.parentNode), !a.relatedTarget && a.fromElement && (a.relatedTarget = a.fromElement === a.target ? a.toElement : a.fromElement);
            if (a.pageX == p && a.clientX != p) {
                var f = a.target.ownerDocument || t,
                    g = f.documentElement,
                    h = f.body;
                a.pageX = a.clientX + (g && g.scrollLeft || h && h.scrollLeft || 0) - (g && g.clientLeft || h && h.clientLeft || 0), a.pageY = a.clientY + (g && g.scrollTop || h && h.scrollTop || 0) - (g && g.clientTop || h && h.clientTop || 0);
            }
            a.which == p && (a.charCode != p || a.keyCode != p) && (a.which = a.charCode != p ? a.charCode : a.keyCode), !a.metaKey && a.ctrlKey && (a.metaKey = a.ctrlKey), !a.which && a.button !== r && (a.which = a.button & 1 ? 1 : a.button & 2 ? 3 : a.button & 4 ? 2 : 0);
            return a;
        },
        guid: 1e8,
        proxy: e.proxy,
        special: {
            ready: {
                setup: e.bindReady,
                teardown: e.noop
            },
            live: {
                add: function (a) {
                    e.event.add(this, o1(a.origType, a.selector), e.extend({}, a, {
                        handler: Y2,
                        guid: a.handler.guid
                    }));
                },
                remove: function (a) {
                    e.event.remove(this, o1(a.origType, a.selector), a);
                }
            },
            beforeunload: {
                setup: function (a, b, c) {
                    e.isWindow(this) && (this.onbeforeunload = c);
                },
                teardown: function (a, b) {
                    this.onbeforeunload === b && (this.onbeforeunload = p);
                }
            }
        }
    }, e.removeEvent = t.removeEventListener ? function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1);
    } : function (a, b, c) {
        a.detachEvent && a.detachEvent(G0 + b, c);
    }, e.Event = function (a, b) {
        if (!this.preventDefault) return new e.Event(a, b);
        a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? p1 : y0) : this.type = a, b && e.extend(this, b), this.timeStamp = e.now(), this[e.expando] = !0;
    }, e.Event.prototype = {
        preventDefault: function () {
            this.isDefaultPrevented = p1;
            var a = this.originalEvent;
            !a || (a.preventDefault ? a.preventDefault() : a.returnValue = !1);
        },
        stopPropagation: function () {
            this.isPropagationStopped = p1;
            var a = this.originalEvent;
            !a || (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0);
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = p1, this.stopPropagation();
        },
        isDefaultPrevented: y0,
        isPropagationStopped: y0,
        isImmediatePropagationStopped: y0
    };
    var x2 = function (a) {
            var b = a.relatedTarget,
                c = !1,
                d = a.type;
            a.type = a.data, b !== this && (b && (c = e.contains(this, b)), c || (e.event.handle.apply(this, arguments), a.type = d));
        },
        y2 = function (a) {
            a.type = a.data, e.event.handle.apply(this, arguments);
        };
    e.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (b, c) {
        e.event.special[b] = {
            setup: function (a) {
                e.event.add(this, c, a && a.selector ? y2 : x2, b);
            },
            teardown: function (a) {
                e.event.remove(this, c, a && a.selector ? y2 : x2);
            }
        };
    }), e.support.submitBubbles || (e.event.special.submit = {
        setup: function (d, f) {
            if (!e.nodeName(this, d1)) e.event.add(this, "click.specialSubmit", function (a) {
                var b = a.target,
                    c = b.type;
                (c === b1 || c === "image") && e(b).closest(d1).length && r2(b1, this, arguments);
            }), e.event.add(this, "keypress.specialSubmit", function (a) {
                var b = a.target,
                    c = b.type;
                (c === "text" || c === "password") && e(b).closest(d1).length && a.keyCode === 13 && r2(b1, this, arguments);
            });
            else return !1;
        },
        teardown: function (a) {
            e.event.remove(this, ".specialSubmit");
        }
    });
    if (!e.support.changeBubbles) {
        var W0, z2 = function (b) {
                var c = b.type,
                    d = b.value;
                c === c0 || c === q0 ? d = b.checked : c === X1 ? d = b.selectedIndex > -1 ? e.map(b.options, function (a) {
                    return a.selected;
                }).join("-") : "" : e.nodeName(b, B1) && (d = b.selectedIndex);
                return d;
            },
            q1 = function (a) {
                var b = a.target,
                    c, d;
                if ( !! N1.test(b.nodeName) && !b.readOnly) {
                    c = e._data(b, x1), d = z2(b), (a.type !== w1 || b.type !== c0) && e._data(b, x1, d);
                    if (c === r || d === c) return;
                    if (c != p || d) a.type = "change", a.liveFired = r, e.event.trigger(a, arguments[1], b);
                }
            };
        e.event.special.change = {
            filters: {
                focusout: q1,
                beforedeactivate: q1,
                click: function (a) {
                    var b = a.target,
                        c = e.nodeName(b, L) ? b.type : "";
                    (c === c0 || c === q0 || e.nodeName(b, B1)) && q1.call(this, a);
                },
                keydown: function (a) {
                    var b = a.target,
                        c = e.nodeName(b, L) ? b.type : "";
                    (a.keyCode === 13 && !e.nodeName(b, "textarea") || a.keyCode === 32 && (c === q0 || c === c0) || c === X1) && q1.call(this, a);
                },
                beforeactivate: function (a) {
                    var b = a.target;
                    e._data(b, x1, z2(b));
                }
            },
            setup: function (a, b) {
                if (this.type === "file") return !1;
                for (var c in W0) e.event.add(this, c + Y1, W0[c]);
                return N1.test(this.nodeName);
            },
            teardown: function (a) {
                e.event.remove(this, Y1);
                return N1.test(this.nodeName);
            }
        }, W0 = e.event.special.change.filters, W0.focus = W0.beforeactivate;
    }
    e.support.focusinBubbles || e.each({
        focus: "focusin",
        blur: w1
    }, function (c, d) {function f(a) {
            var b = e.event.fix(a);
            b.type = d, b.originalEvent = {}, e.event.trigger(b, p, b.target), b.isDefaultPrevented() && a.preventDefault();
        }
        var g = 0;
        e.event.special[d] = {
            setup: function () {
                g++ === 0 && t.addEventListener(c, f, !0);
            },
            teardown: function () {
                --g === 0 && t.removeEventListener(c, f, !0);
            }
        };
    }), e.each(["bind", "one"], function (j, k) {
        e.fn[k] = function (b, c, d) {
            var f;
            if (typeof b == K) {
                for (var g in b) this[k](g, c, b[g], d);
                return this;
            }
            if (arguments.length === 2 || c === !1) d = c, c = r;
            k === "one" ? (f = function (a) {
                e(this).unbind(a, f);
                return d.apply(this, arguments);
            }, f.guid = d.guid || e.guid++) : f = d;
            if (b === "unload" && k !== "one") this.one(b, c, d);
            else for (var h = 0, i = this.length; h < i; h++) e.event.add(this[h], b, f, c);
            return this;
        };
    }), e.fn.extend({
        unbind: function (a, b) {
            if (typeof a == K && !a.preventDefault) for (var c in a) this.unbind(c, a[c]);
            else for (var d = 0, f = this.length; d < f; d++) e.event.remove(this[d], a, b);
            return this;
        },
        delegate: function (a, b, c, d) {
            return this.live(b, c, d, a);
        },
        undelegate: function (a, b, c) {
            return arguments.length === 0 ? this.unbind("live") : this.die(b, p, c, a);
        },
        trigger: function (a, b) {
            return this.each(function () {
                e.event.trigger(a, b, this);
            });
        },
        triggerHandler: function (a, b) {
            if (this[0]) return e.event.trigger(a, b, this[0], !0);
        },
        toggle: function (d) {
            var f = arguments,
                g = d.guid || e.guid++,
                h = 0,
                i = function (a) {
                    var b = "lastToggle",
                        c = (e.data(this, b + d.guid) || 0) % h;
                    e.data(this, b + d.guid, c + 1), a.preventDefault();
                    return f[c].apply(this, arguments) || !1;
                };
            i.guid = g;
            while (h < f.length) f[h++].guid = g;
            return this.click(i);
        },
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a);
        }
    });
    var Q1 = {
        focus: "focusin",
        blur: w1,
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    };
    e.each(["live", "die"], function (o, s) {
        e.fn[s] = function (a, b, c, d) {
            var f, g = 0,
                h, i, j, k = d || this.selector,
                m = d ? this : e(this.context);
            if (typeof a == K && !a.preventDefault) {
                for (var q in a) m[s](q, b, a[q], k);
                return this;
            }
            if (s === "die" && !a && d && d.charAt(0) === M) {
                m.unbind(d);
                return this;
            }
            if (b === !1 || e.isFunction(b)) c = b || y0, b = r;
            a = (a || "").split(z);
            while ((f = a[g++]) != p) {
                h = O1.exec(f), i = "", h && (i = h[0], f = f.replace(O1, ""));
                if (f === "hover") {
                    a.push(b2 + i, a2 + i);
                    continue
                }
                j = f, Q1[f] ? (a.push(Q1[f] + i), f = f + i) : f = (Q1[f] || f) + i;
                if (s === "live") for (var n = 0, l = m.length; n < l; n++) e.event.add(m[n], "live." + o1(f, k), {
                    data: b,
                    selector: k,
                    handler: c,
                    origType: f,
                    origHandler: c,
                    preType: j
                });
                else m.unbind("live." + o1(f, k), c);
            }
            return this;
        };
    }), e.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(z), function (c, d) {
        e.fn[d] = function (a, b) {
            b == p && (b = a, a = p);
            return arguments.length > 0 ? this.bind(d, a, b) : this.trigger(d);
        }, e.attrFn && (e.attrFn[d] = !0);
    }), function () {
        var A = "id",
            E = "[object Array]";

        function F(a, b, c, d, f, g) {
            for (var h = 0, i = d.length; h < i; h++) {
                var j = d[h];
                if (j) {
                    var k = !1;
                    j = j[a];
                    while (j) {
                        if (j.sizcache === c) {
                            k = d[j.sizset];
                            break
                        }
                        if (j.nodeType === 1) {
                            g || (j.sizcache = c, j.sizset = h);
                            if (typeof b != C) {
                                if (j === b) {
                                    k = !0;
                                    break
                                }
                            } else if (u.filter(b, [j]).length > 0) {
                                k = j;
                                break
                            }
                        }
                        j = j[a];
                    }
                    d[h] = k;
                }
            }
        }function J(a, b, c, d, f, g) {
            for (var h = 0, i = d.length; h < i; h++) {
                var j = d[h];
                if (j) {
                    var k = !1;
                    j = j[a];
                    while (j) {
                        if (j.sizcache === c) {
                            k = d[j.sizset];
                            break
                        }
                        j.nodeType === 1 && !g && (j.sizcache = c, j.sizset = h);
                        if (j.nodeName.toLowerCase() === b) {
                            k = j;
                            break
                        }
                        j = j[a];
                    }
                    d[h] = k;
                }
            }
        }
        var X = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
            Y = 0,
            n0 = Object.prototype.toString,
            Z = !1,
            T = !0,
            O = /\\/g,
            G = /\W/;
        [0, 0].sort(function () {
            T = !1;
            return 0;
        });
        var u = function (a, b, c, d) {
                c = c || [], b = b || t;
                var f = b;
                if (b.nodeType !== 1 && b.nodeType !== 9) return [];
                if (!a || typeof a != C) return c;
                var g, h, i, j, k, m, q, n, l = !0,
                    o = u.isXML(b),
                    s = [],
                    D = a;
                do {
                    X.exec(""), g = X.exec(D);
                    if (g) {
                        D = g[3], s.push(g[1]);
                        if (g[2]) {
                            j = g[3];
                            break
                        }
                    }
                } while (g);
                if (s.length > 1 && U.exec(a)) if (s.length === 2 && v.relative[s[0]]) h = R(s[0] + s[1], b);
                else {
                    h = v.relative[s[0]] ? [b] : u(s.shift(), b);
                    while (s.length) a = s.shift(), v.relative[a] && (a += s.shift()), h = R(a, h);
                } else {
                    !d && s.length > 1 && b.nodeType === 9 && !o && v.match.ID.test(s[0]) && !v.match.ID.test(s[s.length - 1]) && (k = u.find(s.shift(), b, o), b = k.expr ? u.filter(k.expr, k.set)[0] : k.set[0]);
                    if (b) {
                        k = d ? {
                            expr: s.pop(),
                            set: I(d)
                        } : u.find(s.pop(), s.length === 1 && (s[0] === "~" || s[0] === "+") && b.parentNode ? b.parentNode : b, o), h = k.expr ? u.filter(k.expr, k.set) : k.set, s.length > 0 ? i = I(h) : l = !1;
                        while (s.length) m = s.pop(), q = m, v.relative[m] ? q = s.pop() : m = "", q == p && (q = b), v.relative[m](i, q, o);
                    } else i = s = [];
                }
                i || (i = h), i || u.error(m || a);
                if (n0.call(i) === E) if (!l) c.push.apply(c, i);
                else if (b && b.nodeType === 1) for (n = 0; i[n] != p; n++) i[n] && (i[n] === !0 || i[n].nodeType === 1 && u.contains(b, i[n])) && c.push(h[n]);
                else for (n = 0; i[n] != p; n++) i[n] && i[n].nodeType === 1 && c.push(h[n]);
                else I(i, c);
                j && (u(j, f, c, d), u.uniqueSort(c));
                return c;
            };
        u.uniqueSort = function (a) {
            if (N) {
                Z = T, a.sort(N);
                if (Z) for (var b = 1; b < a.length; b++) a[b] === a[b - 1] && a.splice(b--, 1);
            }
            return a;
        }, u.matches = function (a, b) {
            return u(a, p, p, b);
        }, u.matchesSelector = function (a, b) {
            return u(b, p, p, [a]).length > 0;
        }, u.find = function (a, b, c) {
            var d;
            if (!a) return [];
            for (var f = 0, g = v.order.length; f < g; f++) {
                var h, i = v.order[f];
                if (h = v.leftMatch[i].exec(a)) {
                    var j = h[1];
                    h.splice(1, 1);
                    if (j.substr(j.length - 1) !== "\\") {
                        h[1] = (h[1] || "").replace(O, ""), d = v.find[i](h, b, c);
                        if (d != p) {
                            a = a.replace(v.match[i], "");
                            break
                        }
                    }
                }
            }
            d || (d = typeof b.getElementsByTagName != V ? b.getElementsByTagName(H) : []);
            return {
                set: d,
                expr: a
            };
        }, u.filter = function (a, b, c, d) {
            var f, g, h = a,
                i = [],
                j = b,
                k = b && b[0] && u.isXML(b[0]);
            while (a && b.length) {
                for (var m in v.filter) if ((f = v.leftMatch[m].exec(a)) != p && f[2]) {
                    var q, n, l = v.filter[m],
                        o = f[1];
                    g = !1, f.splice(1, 1);
                    if (o.substr(o.length - 1) === "\\") continue;
                    j === i && (i = []);
                    if (v.preFilter[m]) {
                        f = v.preFilter[m](f, j, c, i, d, k);
                        if (!f) g = q = !0;
                        else if (f === !0) continue
                    }
                    if (f) for (var s = 0;
                    (n = j[s]) != p; s++) if (n) {
                        q = l(n, f, s, j);
                        var D = d ^ !! q;
                        c && q != p ? D ? g = !0 : j[s] = !1 : D && (i.push(n), g = !0);
                    }
                    if (q !== r) {
                        c || (j = i), a = a.replace(v.match[m], "");
                        if (!g) return [];
                        break
                    }
                }
                if (a === h) if (g == p) u.error(a);
                else break;
                h = a;
            }
            return j;
        }, u.error = function (a) {
            throw "Syntax error, unrecognized expression: " + a
        };
        var v = u.selectors = {
            order: ["ID", "NAME", "TAG"],
            match: {
                ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
            },
            leftMatch: {},
            attrMap: {
                "class": e1,
                "for": "htmlFor"
            },
            attrHandle: {
                href: function (a) {
                    return a.getAttribute(T0);
                },
                type: function (a) {
                    return a.getAttribute(h1);
                }
            },
            relative: {
                "+": function (a, b) {
                    var c = typeof b == C,
                        d = c && !G.test(b),
                        f = c && !d;
                    d && (b = b.toLowerCase());
                    for (var g = 0, h = a.length, i; g < h; g++) if (i = a[g]) {
                        while ((i = i.previousSibling) && i.nodeType !== 1);
                        a[g] = f || i && i.nodeName.toLowerCase() === b ? i || !1 : i === b;
                    }
                    f && u.filter(b, a, !0);
                },
                ">": function (a, b) {
                    var c, d = typeof b == C,
                        f = 0,
                        g = a.length;
                    if (d && !G.test(b)) {
                        b = b.toLowerCase();
                        for (; f < g; f++) {
                            c = a[f];
                            if (c) {
                                var h = c.parentNode;
                                a[f] = h.nodeName.toLowerCase() === b ? h : !1;
                            }
                        }
                    } else {
                        for (; f < g; f++) c = a[f], c && (a[f] = d ? c.parentNode : c.parentNode === b);
                        d && u.filter(b, a, !0);
                    }
                },
                "": function (a, b, c) {
                    var d, f = Y++,
                        g = F;
                    typeof b == C && !G.test(b) && (b = b.toLowerCase(), d = b, g = J), g(v1, b, f, a, d, c);
                },
                "~": function (a, b, c) {
                    var d, f = Y++,
                        g = F;
                    typeof b == C && !G.test(b) && (b = b.toLowerCase(), d = b, g = J), g(a1, b, f, a, d, c);
                }
            },
            find: {
                ID: function (a, b, c) {
                    if (typeof b.getElementById != V && !c) {
                        var d = b.getElementById(a[1]);
                        return d && d.parentNode ? [d] : [];
                    }
                },
                NAME: function (a, b) {
                    if (typeof b.getElementsByName != V) {
                        var c = [],
                            d = b.getElementsByName(a[1]);
                        for (var f = 0, g = d.length; f < g; f++) d[f].getAttribute("name") === a[1] && c.push(d[f]);
                        return c.length === 0 ? p : c;
                    }
                },
                TAG: function (a, b) {
                    if (typeof b.getElementsByTagName != V) return b.getElementsByTagName(a[1]);
                }
            },
            preFilter: {
                CLASS: function (a, b, c, d, f, g) {
                    a = z + a[1].replace(O, "") + z;
                    if (g) return a;
                    for (var h = 0, i;
                    (i = b[h]) != p; h++) i && (f ^ (i.className && (z + i.className + z).replace(/[\t\n\r]/g, z).indexOf(a) >= 0) ? c || d.push(i) : c && (b[h] = !1));
                    return !1;
                },
                ID: function (a) {
                    return a[1].replace(O, "");
                },
                TAG: function (a, b) {
                    return a[1].replace(O, "").toLowerCase();
                },
                CHILD: function (a) {
                    if (a[1] === "nth") {
                        a[2] || u.error(a[0]), a[2] = a[2].replace(/^\+|\s*/g, "");
                        var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2] === "even" && "2n" || a[2] === "odd" && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
                        a[2] = b[1] + (b[2] || 1) - 0, a[3] = b[3] - 0;
                    } else a[2] && u.error(a[0]);
                    a[0] = Y++;
                    return a;
                },
                ATTR: function (a, b, c, d, f, g) {
                    var h = a[1] = a[1].replace(O, "");
                    !g && v.attrMap[h] && (a[1] = v.attrMap[h]), a[4] = (a[4] || a[5] || "").replace(O, ""), a[2] === "~=" && (a[4] = z + a[4] + z);
                    return a;
                },
                PSEUDO: function (a, b, c, d, f) {
                    if (a[1] === "not") if ((X.exec(a[3]) || "").length > 1 || /^\w/.test(a[3])) a[3] = u(a[3], p, p, b);
                    else {
                        var g = u.filter(a[3], b, c, !0 ^ f);
                        c || d.push.apply(d, g);
                        return !1;
                    } else if (v.match.POS.test(a[0]) || v.match.CHILD.test(a[0])) return !0;
                    return a;
                },
                POS: function (a) {
                    a.unshift(!0);
                    return a;
                }
            },
            filters: {
                enabled: function (a) {
                    return a.disabled === !1 && a.type !== H0;
                },
                disabled: function (a) {
                    return a.disabled === !0;
                },
                checked: function (a) {
                    return a.checked === !0;
                },
                selected: function (a) {
                    a.parentNode && a.parentNode.selectedIndex;
                    return a.selected === !0;
                },
                parent: function (a) {
                    return !!a.firstChild;
                },
                empty: function (a) {
                    return !a.firstChild;
                },
                has: function (a, b, c) {
                    return !!u(c[3], a).length;
                },
                header: function (a) {
                    return /h\d/i.test(a.nodeName);
                },
                text: function (a) {
                    var b = a.getAttribute(h1),
                        c = a.type;
                    return a.nodeName.toLowerCase() === L && "text" === c && (b === c || b === p);
                },
                radio: function (a) {
                    return a.nodeName.toLowerCase() === L && c0 === a.type;
                },
                checkbox: function (a) {
                    return a.nodeName.toLowerCase() === L && q0 === a.type;
                },
                file: function (a) {
                    return a.nodeName.toLowerCase() === L && "file" === a.type;
                },
                password: function (a) {
                    return a.nodeName.toLowerCase() === L && "password" === a.type;
                },
                submit: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return (b === L || b === F0) && b1 === a.type;
                },
                image: function (a) {
                    return a.nodeName.toLowerCase() === L && "image" === a.type;
                },
                reset: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return (b === L || b === F0) && "reset" === a.type;
                },
                button: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return b === L && F0 === a.type || b === F0;
                },
                input: function (a) {
                    return /input|select|textarea|button/i.test(a.nodeName);
                },
                focus: function (a) {
                    return a === a.ownerDocument.activeElement;
                }
            },
            setFilters: {
                first: function (a, b) {
                    return b === 0;
                },
                last: function (a, b, c, d) {
                    return b === d.length - 1;
                },
                even: function (a, b) {
                    return b % 2 === 0;
                },
                odd: function (a, b) {
                    return b % 2 === 1;
                },
                lt: function (a, b, c) {
                    return b < c[3] - 0;
                },
                gt: function (a, b, c) {
                    return b > c[3] - 0;
                },
                nth: function (a, b, c) {
                    return c[3] - 0 === b;
                },
                eq: function (a, b, c) {
                    return c[3] - 0 === b;
                }
            },
            filter: {
                PSEUDO: function (a, b, c, d) {
                    var f = b[1],
                        g = v.filters[f];
                    if (g) return g(a, c, b, d);
                    if (f === "contains") return (a.textContent || a.innerText || u.getText([a]) || "").indexOf(b[3]) >= 0;
                    if (f === "not") {
                        var h = b[3];
                        for (var i = 0, j = h.length; i < j; i++) if (h[i] === a) return !1;
                        return !0;
                    }
                    u.error(f);
                },
                CHILD: function (a, b) {
                    var c = b[1],
                        d = a;
                    switch (c) {
                    case "only":
                    case "first":
                        while (d = d.previousSibling) if (d.nodeType === 1) return !1;
                        if (c === "first") return !0;
                        d = a;
                    case "last":
                        while (d = d.nextSibling) if (d.nodeType === 1) return !1;
                        return !0;
                    case "nth":
                        var f = b[2],
                            g = b[3];
                        if (f === 1 && g === 0) return !0;
                        var h = b[0],
                            i = a.parentNode;
                        if (i && (i.sizcache !== h || !a.nodeIndex)) {
                            var j = 0;
                            for (d = i.firstChild; d; d = d.nextSibling) d.nodeType === 1 && (d.nodeIndex = ++j);
                            i.sizcache = h;
                        }
                        var k = a.nodeIndex - g;
                        return f === 0 ? k === 0 : k % f === 0 && k / f >= 0;
                    }
                },
                ID: function (a, b) {
                    return a.nodeType === 1 && a.getAttribute(A) === b;
                },
                TAG: function (a, b) {
                    return b === H && a.nodeType === 1 || a.nodeName.toLowerCase() === b;
                },
                CLASS: function (a, b) {
                    return (z + (a.className || a.getAttribute("class")) + z).indexOf(b) > -1;
                },
                ATTR: function (a, b) {
                    var c = b[1],
                        d = v.attrHandle[c] ? v.attrHandle[c](a) : a[c] != p ? a[c] : a.getAttribute(c),
                        f = d + "",
                        g = b[2],
                        h = b[4];
                    return d == p ? g === "!=" : g === "=" ? f === h : g === "*=" ? f.indexOf(h) >= 0 : g === "~=" ? (z + f + z).indexOf(h) >= 0 : h ? g === "!=" ? f !== h : g === "^=" ? f.indexOf(h) === 0 : g === "$=" ? f.substr(f.length - h.length) === h : g === "|=" ? f === h || f.substr(0, h.length + 1) === h + "-" : !1 : f && d !== !1;
                },
                POS: function (a, b, c, d) {
                    var f = b[2],
                        g = v.setFilters[f];
                    if (g) return g(a, c, b, d);
                }
            }
        },
            U = v.match.POS,
            w = function (a, b) {
                return "\\" + (b - 0 + 1);
            };
        for (var Q in v.match) v.match[Q] = new RegExp(v.match[Q].source + /(?![^\[]*\])(?![^\(]*\))/.source), v.leftMatch[Q] = new RegExp(/(^(?:.|\r|\n)*?)/.source + v.match[Q].source.replace(/\\(\d+)/g, w));
        var I = function (a, b) {
                a = Array.prototype.slice.call(a, 0);
                if (b) {
                    b.push.apply(b, a);
                    return b;
                }
                return a;
            };
        try {
            Array.prototype.slice.call(t.documentElement.childNodes, 0)[0].nodeType;
        } catch (g) {
            I = function (a, b) {
                var c = 0,
                    d = b || [];
                if (n0.call(a) === E) Array.prototype.push.apply(d, a);
                else if (typeof a.length == f0) for (var f = a.length; c < f; c++) d.push(a[c]);
                else for (; a[c]; c++) d.push(a[c]);
                return d;
            };
        }
        var N, P;
        t.documentElement.compareDocumentPosition ? N = function (a, b) {
            if (a === b) {
                Z = !0;
                return 0;
            }
            if (!a.compareDocumentPosition || !b.compareDocumentPosition) return a.compareDocumentPosition ? -1 : 1;
            return a.compareDocumentPosition(b) & 4 ? -1 : 1;
        } : (N = function (a, b) {
            if (a === b) {
                Z = !0;
                return 0;
            }
            if (a.sourceIndex && b.sourceIndex) return a.sourceIndex - b.sourceIndex;
            var c, d, f = [],
                g = [],
                h = a.parentNode,
                i = b.parentNode,
                j = h;
            if (h === i) return P(a, b);
            if (!h) return -1;
            if (!i) return 1;
            while (j) f.unshift(j), j = j.parentNode;
            j = i;
            while (j) g.unshift(j), j = j.parentNode;
            c = f.length, d = g.length;
            for (var k = 0; k < c && k < d; k++) if (f[k] !== g[k]) return P(f[k], g[k]);
            return k === c ? P(a, g[k], -1) : P(f[k], b, 1);
        }, P = function (a, b, c) {
            if (a === b) return c;
            var d = a.nextSibling;
            while (d) {
                if (d === b) return -1;
                d = d.nextSibling;
            }
            return 1;
        }), u.getText = function (a) {
            var b = "",
                c;
            for (var d = 0; a[d]; d++) c = a[d], c.nodeType === 3 || c.nodeType === 4 ? b += c.nodeValue : c.nodeType !== 8 && (b += u.getText(c.childNodes));
            return b;
        }, function () {
            var f = t.createElement(b0),
                g = k0 + (new Date).getTime(),
                h = t.documentElement;
            f.innerHTML = "<a name='" + g + "'/>", h.insertBefore(f, h.firstChild), t.getElementById(g) && (v.find.ID = function (a, b, c) {
                if (typeof b.getElementById != V && !c) {
                    var d = b.getElementById(a[1]);
                    return d ? d.id === a[1] || typeof d.getAttributeNode != V && d.getAttributeNode(A).nodeValue === a[1] ? [d] : r : [];
                }
            }, v.filter.ID = function (a, b) {
                var c = typeof a.getAttributeNode != V && a.getAttributeNode(A);
                return a.nodeType === 1 && c && c.nodeValue === b;
            }), h.removeChild(f), h = f = p;
        }(), function () {
            var g = t.createElement(b0);
            g.appendChild(t.createComment("")), g.getElementsByTagName(H).length > 0 && (v.find.TAG = function (a, b) {
                var c = b.getElementsByTagName(a[1]);
                if (a[1] === H) {
                    var d = [];
                    for (var f = 0; c[f]; f++) c[f].nodeType === 1 && d.push(c[f]);
                    c = d;
                }
                return c;
            }), g.innerHTML = "<a href='#'></a>", g.firstChild && typeof g.firstChild.getAttribute != V && g.firstChild.getAttribute(T0) !== "#" && (v.attrHandle.href = function (a) {
                return a.getAttribute(T0, 2);
            }), g = p;
        }(), t.querySelectorAll && function () {
            var n = u,
                l = t.createElement(b0),
                o = "__sizzle__";
            l.innerHTML = "<p class='TEST'></p>";
            if (!l.querySelectorAll || l.querySelectorAll(".TEST").length !== 0) {
                u = function (b, c, d, f) {
                    c = c || t;
                    if (!f && !u.isXML(c)) {
                        var g = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
                        if (g && (c.nodeType === 1 || c.nodeType === 9)) {
                            if (g[1]) return I(c.getElementsByTagName(b), d);
                            if (g[2] && v.find.CLASS && c.getElementsByClassName) return I(c.getElementsByClassName(g[2]), d);
                        }
                        if (c.nodeType === 9) {
                            if (b === U0 && c.body) return I([c.body], d);
                            if (g && g[3]) {
                                var h = c.getElementById(g[3]);
                                if (!h || !h.parentNode) return I([], d);
                                if (h.id === g[3]) return I([h], d);
                            }
                            try {
                                return I(c.querySelectorAll(b), d);
                            } catch (a) {}
                        } else if (c.nodeType === 1 && c.nodeName.toLowerCase() !== K) {
                            var i = c,
                                j = c.getAttribute(A),
                                k = j || o,
                                m = c.parentNode,
                                q = /^\s*[+~]/.test(b);
                            j ? k = k.replace(/'/g, "\\$&") : c.setAttribute(A, k), q && m && (c = c.parentNode);
                            try {
                                if (!q || m) return I(c.querySelectorAll("[id='" + k + "'] " + b), d);
                            } catch (a) {} finally {
                                j || i.removeAttribute(A);
                            }
                        }
                    }
                    return n(b, c, d, f);
                };
                for (var s in n) u[s] = n[s];
                l = p;
            }
        }(), function () {
            var f = t.documentElement,
                g = f.matchesSelector || f.mozMatchesSelector || f.webkitMatchesSelector || f.msMatchesSelector;
            if (g) {
                var h = !g.call(t.createElement(b0), b0),
                    i = !1;
                try {
                    g.call(t.documentElement, "[test!='']:sizzle");
                } catch (a) {
                    i = !0;
                }
                u.matchesSelector = function (b, c) {
                    c = c.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                    if (!u.isXML(b)) try {
                        if (i || !v.match.PSEUDO.test(c) && !/!=/.test(c)) {
                            var d = g.call(b, c);
                            if (d || !h || b.document && b.document.nodeType !== 11) return d;
                        }
                    } catch (a) {}
                    return u(c, p, p, [b]).length > 0;
                };
            }
        }(), function () {
            var d = t.createElement(b0);
            d.innerHTML = "<div class='test e'></div><div class='test'></div>";
            if ( !! d.getElementsByClassName && d.getElementsByClassName("e").length !== 0) {
                d.lastChild.className = "e";
                if (d.getElementsByClassName("e").length === 1) return;
                v.order.splice(1, 0, "CLASS"), v.find.CLASS = function (a, b, c) {
                    if (typeof b.getElementsByClassName != V && !c) return b.getElementsByClassName(a[1]);
                }, d = p;
            }
        }(), t.documentElement.contains ? u.contains = function (a, b) {
            return a !== b && (a.contains ? a.contains(b) : !0);
        } : t.documentElement.compareDocumentPosition ? u.contains = function (a, b) {
            return !!(a.compareDocumentPosition(b) & 16);
        } : u.contains = function () {
            return !1;
        }, u.isXML = function (a) {
            var b = (a ? a.ownerDocument || a : 0).documentElement;
            return b ? b.nodeName !== "HTML" : !1;
        };
        var R = function (a, b) {
                var c, d = [],
                    f = "",
                    g = b.nodeType ? [b] : b;
                while (c = v.match.PSEUDO.exec(a)) f += c[0], a = a.replace(v.match.PSEUDO, "");
                a = v.relative[a] ? a + H : a;
                for (var h = 0, i = g.length; h < i; h++) u(a, g[h], d);
                return u.filter(f, d);
            };
        e.find = u, e.expr = u.selectors, e.expr[":"] = e.expr.filters, e.unique = u.uniqueSort, e.text = u.getText, e.isXMLDoc = u.isXML, e.contains = u.contains;
    }();
    var k3 = /Until$/,
        l3 = /^(?:parents|prevUntil|prevAll)/,
        i3 = /,/,
        j3 = /^.[^:#\[\.,]*$/,
        o3 = Array.prototype.slice,
        w2 = e.expr.match.POS,
        m3 = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    e.fn.extend({
        find: function (a) {
            var b = this,
                c, d;
            if (typeof a != C) return e(a).filter(function () {
                for (c = 0, d = b.length; c < d; c++) if (e.contains(b[c], this)) return !0;
            });
            var f = this.pushStack("", "find", a),
                g, h, i;
            for (c = 0, d = this.length; c < d; c++) {
                g = f.length, e.find(a, this[c], f);
                if (c > 0) for (h = g; h < f.length; h++) for (i = 0; i < g; i++) if (f[i] === f[h]) {
                    f.splice(h--, 1);
                    break
                }
            }
            return f;
        },
        has: function (c) {
            var d = e(c);
            return this.filter(function () {
                for (var a = 0, b = d.length; a < b; a++) if (e.contains(this, d[a])) return !0;
            });
        },
        not: function (a) {
            return this.pushStack(p2(this, a, !1), "not", a);
        },
        filter: function (a) {
            return this.pushStack(p2(this, a, !0), "filter", a);
        },
        is: function (a) {
            return !!a && (typeof a == C ? e.filter(a, this).length > 0 : this.filter(a).length > 0);
        },
        closest: function (a, b) {
            var c = [],
                d, f, g = this[0];
            if (e.isArray(a)) {
                var h, i, j = {},
                    k = 1;
                if (g && a.length) {
                    for (d = 0, f = a.length; d < f; d++) i = a[d], j[i] || (j[i] = w2.test(i) ? e(i, b || this.context) : i);
                    while (g && g.ownerDocument && g !== b) {
                        for (i in j) h = j[i], (h.jquery ? h.index(g) > -1 : e(g).is(h)) && c.push({
                            selector: i,
                            elem: g,
                            level: k
                        });
                        g = g.parentNode, k++;
                    }
                }
                return c;
            }
            var m = w2.test(a) || typeof a != C ? e(a, b || this.context) : 0;
            for (d = 0, f = this.length; d < f; d++) {
                g = this[d];
                while (g) {
                    if (m ? m.index(g) > -1 : e.find.matchesSelector(g, a)) {
                        c.push(g);
                        break
                    }
                    g = g.parentNode;
                    if (!g || !g.ownerDocument || g === b || g.nodeType === 11) break
                }
            }
            c = c.length > 1 ? e.unique(c) : c;
            return this.pushStack(c, "closest", a);
        },
        index: function (a) {
            if (!a || typeof a == C) return e.inArray(this[0], a ? e(a) : this.parent().children());
            return e.inArray(a.jquery ? a[0] : a, this);
        },
        add: function (a, b) {
            var c = typeof a == C ? e(a, b) : e.makeArray(a && a.nodeType ? [a] : a),
                d = e.merge(this.get(), c);
            return this.pushStack(q2(c[0]) || q2(d[0]) ? d : e.unique(d));
        },
        andSelf: function () {
            return this.add(this.prevObject);
        }
    }), e.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && b.nodeType !== 11 ? b : p;
        },
        parents: function (a) {
            return e.dir(a, v1);
        },
        parentsUntil: function (a, b, c) {
            return e.dir(a, v1, c);
        },
        next: function (a) {
            return e.nth(a, 2, u1);
        },
        prev: function (a) {
            return e.nth(a, 2, a1);
        },
        nextAll: function (a) {
            return e.dir(a, u1);
        },
        prevAll: function (a) {
            return e.dir(a, a1);
        },
        nextUntil: function (a, b, c) {
            return e.dir(a, u1, c);
        },
        prevUntil: function (a, b, c) {
            return e.dir(a, a1, c);
        },
        siblings: function (a) {
            return e.sibling(a.parentNode.firstChild, a);
        },
        children: function (a) {
            return e.sibling(a.firstChild);
        },
        contents: function (a) {
            return e.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : e.makeArray(a.childNodes);
        }
    }, function (f, g) {
        e.fn[f] = function (a, b) {
            var c = e.map(this, g, a),
                d = o3.call(arguments);
            k3.test(f) || (b = a), b && typeof b == C && (c = e.filter(b, c)), c = this.length > 1 && !m3[f] ? e.unique(c) : c, (this.length > 1 || i3.test(b)) && l3.test(f) && (c = c.reverse());
            return this.pushStack(c, f, d.join(","));
        };
    }), e.extend({
        filter: function (a, b, c) {
            c && (a = ":not(" + a + ")");
            return b.length === 1 ? e.find.matchesSelector(b[0], a) ? [b[0]] : [] : e.find.matches(a, b);
        },
        dir: function (a, b, c) {
            var d = [],
                f = a[b];
            while (f && f.nodeType !== 9 && (c === r || f.nodeType !== 1 || !e(f).is(c))) f.nodeType === 1 && d.push(f), f = f[b];
            return d;
        },
        nth: function (a, b, c, d) {
            b = b || 1;
            var f = 0;
            for (; a; a = a[c]) if (a.nodeType === 1 && ++f === b) break;
            return a;
        },
        sibling: function (a, b) {
            var c = [];
            for (; a; a = a.nextSibling) a.nodeType === 1 && a !== b && c.push(a);
            return c;
        }
    });
    var n3 = / jQuery\d+="(?:\d+|null)"/g,
        R1 = /^\s+/,
        E2 = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
        F2 = /<([\w:]+)/,
        y3 = /<tbody/i,
        w3 = /<|&#?\w+;/,
        C2 = /<(?:script|object|embed|option|style)/i,
        D2 = /checked\s*(?:[^=]|=\s*.checked.)/i,
        x3 = /\/(java|ecma)script/i,
        u3 = /^\s*<!(?:\[CDATA\[|\-\-)/,
        W = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        };
    W.optgroup = W.option, W.tbody = W.tfoot = W.colgroup = W.caption = W.thead, W.th = W.td, e.support.htmlSerialize || (W._default = [1, "div<div>", "</div>"]), e.fn.extend({
        text: function (c) {
            if (e.isFunction(c)) return this.each(function (a) {
                var b = e(this);
                b.text(c.call(this, a, b.text()));
            });
            if (typeof c != K && c !== r) return this.empty().append((this[0] && this[0].ownerDocument || t).createTextNode(c));
            return e.text(this);
        },
        wrapAll: function (b) {
            if (e.isFunction(b)) return this.each(function (a) {
                e(this).wrapAll(b.call(this, a));
            });
            if (this[0]) {
                var c = e(b, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && c.insertBefore(this[0]), c.map(function () {
                    var a = this;
                    while (a.firstChild && a.firstChild.nodeType === 1) a = a.firstChild;
                    return a;
                }).append(this);
            }
            return this;
        },
        wrapInner: function (c) {
            if (e.isFunction(c)) return this.each(function (a) {
                e(this).wrapInner(c.call(this, a));
            });
            return this.each(function () {
                var a = e(this),
                    b = a.contents();
                b.length ? b.wrapAll(c) : a.append(c);
            });
        },
        wrap: function (a) {
            return this.each(function () {
                e(this).wrapAll(a);
            });
        },
        unwrap: function () {
            return this.parent().each(function () {
                e.nodeName(this, U0) || e(this).replaceWith(this.childNodes);
            }).end();
        },
        append: function () {
            return this.domManip(arguments, !0, function (a) {
                this.nodeType === 1 && this.appendChild(a);
            });
        },
        prepend: function () {
            return this.domManip(arguments, !0, function (a) {
                this.nodeType === 1 && this.insertBefore(a, this.firstChild);
            });
        },
        before: function () {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function (a) {
                this.parentNode.insertBefore(a, this);
            });
            if (arguments.length) {
                var b = e(arguments[0]);
                b.push.apply(b, this.toArray());
                return this.pushStack(b, "before", arguments);
            }
        },
        after: function () {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function (a) {
                this.parentNode.insertBefore(a, this.nextSibling);
            });
            if (arguments.length) {
                var b = this.pushStack(this, "after", arguments);
                b.push.apply(b, e(arguments[0]).toArray());
                return b;
            }
        },
        remove: function (a, b) {
            for (var c = 0, d;
            (d = this[c]) != p; c++) if (!a || e.filter(a, [d]).length)!b && d.nodeType === 1 && (e.cleanData(d.getElementsByTagName(H)), e.cleanData([d])), d.parentNode && d.parentNode.removeChild(d);
            return this;
        },
        empty: function () {
            for (var a = 0, b;
            (b = this[a]) != p; a++) {
                b.nodeType === 1 && e.cleanData(b.getElementsByTagName(H));
                while (b.firstChild) b.removeChild(b.firstChild);
            }
            return this;
        },
        clone: function (a, b) {
            a = a == p ? !1 : a, b = b == p ? a : b;
            return this.map(function () {
                return e.clone(this, a, b);
            });
        },
        html: function (c) {
            if (c === r) return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(n3, "") : p;
            if (typeof c == C && !C2.test(c) && (e.support.leadingWhitespace || !R1.test(c)) && !W[(F2.exec(c) || ["", ""])[1].toLowerCase()]) {
                c = c.replace(E2, "<$1></$2>");
                try {
                    for (var d = 0, f = this.length; d < f; d++) this[d].nodeType === 1 && (e.cleanData(this[d].getElementsByTagName(H)), this[d].innerHTML = c);
                } catch (a) {
                    this.empty().append(c);
                }
            } else e.isFunction(c) ? this.each(function (a) {
                var b = e(this);
                b.html(c.call(this, a, b.html()));
            }) : this.empty().append(c);
            return this;
        },
        replaceWith: function (d) {
            if (this[0] && this[0].parentNode) {
                if (e.isFunction(d)) return this.each(function (a) {
                    var b = e(this),
                        c = b.html();
                    b.replaceWith(d.call(this, a, c));
                });
                typeof d != C && (d = e(d).detach());
                return this.each(function () {
                    var a = this.nextSibling,
                        b = this.parentNode;
                    e(this).remove(), a ? e(a).before(d) : e(b).append(d);
                });
            }
            return this.length ? this.pushStack(e(e.isFunction(d) ? d() : d), W1, d) : this;
        },
        detach: function (a) {
            return this.remove(a, !0);
        },
        domManip: function (c, d, f) {
            var g, h, i, j, k = c[0],
                m = [];
            if (!e.support.checkClone && arguments.length === 3 && typeof k == C && D2.test(k)) return this.each(function () {
                e(this).domManip(c, d, f, !0);
            });
            if (e.isFunction(k)) return this.each(function (a) {
                var b = e(this);
                c[0] = k.call(this, a, d ? b.html() : r), b.domManip(c, d, f);
            });
            if (this[0]) {
                j = k && k.parentNode, e.support.parentNode && j && j.nodeType === 11 && j.childNodes.length === this.length ? g = {
                    fragment: j
                } : g = e.buildFragment(c, this, m), i = g.fragment, i.childNodes.length === 1 ? h = i = i.firstChild : h = i.firstChild;
                if (h) {
                    d = d && e.nodeName(h, "tr");
                    for (var q = 0, n = this.length, l = n - 1; q < n; q++) f.call(d ? S2(this[q], h) : this[q], g.cacheable || n > 1 && q < l ? e.clone(i, !0, !0) : i);
                }
                m.length && e.each(m, R2);
            }
            return this;
        }
    }), e.buildFragment = function (a, b, c) {
        var d, f, g, h;
        b && b[0] && (h = b[0].ownerDocument || b[0]), h.createDocumentFragment || (h = t), a.length === 1 && typeof a[0] == C && a[0].length < 512 && h === t && a[0].charAt(0) === "<" && !C2.test(a[0]) && (e.support.checkClone || !D2.test(a[0])) && (f = !0, g = e.fragments[a[0]], g && g !== 1 && (d = g)), d || (d = h.createDocumentFragment(), e.clean(a, h, d, c)), f && (e.fragments[a[0]] = g ? d : 1);
        return {
            fragment: d,
            cacheable: f
        };
    }, e.fragments = {}, e.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: W1
    }, function (i, j) {
        e.fn[i] = function (a) {
            var b = [],
                c = e(a),
                d = this.length === 1 && this[0].parentNode;
            if (d && d.nodeType === 11 && d.childNodes.length === 1 && c.length === 1) {
                c[j](this[0]);
                return this;
            }
            for (var f = 0, g = c.length; f < g; f++) {
                var h = (f > 0 ? this.clone(!0) : this).get();
                e(c[f])[j](h), b = b.concat(h);
            }
            return this.pushStack(b, i, c.selector);
        };
    }), e.extend({
        clone: function (a, b, c) {
            var d = a.cloneNode(!0),
                f, g, h;
            if ((!e.support.noCloneEvent || !e.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !e.isXMLDoc(a)) {
                i2(a, d), f = m1(a), g = m1(d);
                for (h = 0; f[h]; ++h) i2(f[h], g[h]);
            }
            if (b) {
                j2(a, d);
                if (c) {
                    f = m1(a), g = m1(d);
                    for (h = 0; f[h]; ++h) j2(f[h], g[h]);
                }
            }
            f = g = p;
            return d;
        },
        clean: function (b, c, d, f) {
            var g;
            c = c || t, typeof c.createElement == V && (c = c.ownerDocument || c[0] && c[0].ownerDocument || t);
            var h = [],
                i;
            for (var j = 0, k;
            (k = b[j]) != p; j++) {
                typeof k == f0 && (k += "");
                if (!k) continue;
                if (typeof k == C) if (!w3.test(k)) k = c.createTextNode(k);
                else {
                    k = k.replace(E2, "<$1></$2>");
                    var m = (F2.exec(k) || ["", ""])[1].toLowerCase(),
                        q = W[m] || W._default,
                        n = q[0],
                        l = c.createElement(b0);
                    l.innerHTML = q[1] + k + q[2];
                    while (n--) l = l.lastChild;
                    if (!e.support.tbody) {
                        var o = y3.test(k),
                            s = m === "table" && !o ? l.firstChild && l.firstChild.childNodes : q[1] === "<table>" && !o ? l.childNodes : [];
                        for (i = s.length - 1; i >= 0; --i) e.nodeName(s[i], j1) && !s[i].childNodes.length && s[i].parentNode.removeChild(s[i]);
                    }!e.support.leadingWhitespace && R1.test(k) && l.insertBefore(c.createTextNode(R1.exec(k)[0]), l.firstChild), k = l.childNodes;
                }
                var D;
                if (!e.support.appendChecked) if (k[0] && typeof (D = k.length) == f0) for (i = 0; i < D; i++) h2(k[i]);
                else h2(k);
                k.nodeType ? h.push(k) : h = e.merge(h, k);
            }
            if (d) {
                g = function (a) {
                    return !a.type || x3.test(a.type);
                };
                for (j = 0; h[j]; j++) if (f && e.nodeName(h[j], k0) && (!h[j].type || h[j].type.toLowerCase() === "text/javascript")) f.push(h[j].parentNode ? h[j].parentNode.removeChild(h[j]) : h[j]);
                else {
                    if (h[j].nodeType === 1) {
                        var A = e.grep(h[j].getElementsByTagName(k0), g);
                        h.splice.apply(h, [j + 1, 0].concat(A));
                    }
                    d.appendChild(h[j]);
                }
            }
            return h;
        },
        cleanData: function (a) {
            var b, c, d = e.cache,
                f = e.expando,
                g = e.event.special,
                h = e.support.deleteExpando;
            for (var i = 0, j;
            (j = a[i]) != p; i++) {
                if (j.nodeName && e.noData[j.nodeName.toLowerCase()]) continue;
                c = j[e.expando];
                if (c) {
                    b = d[c] && d[c][f];
                    if (b && b.events) {
                        for (var k in b.events) g[k] ? e.event.remove(j, k) : e.removeEvent(j, k, b.handle);
                        b.handle && (b.handle.elem = p);
                    }
                    h ? delete j[e.expando] : j.removeAttribute && j.removeAttribute(e.expando), delete d[c];
                }
            }
        }
    });
    var B2 = /alpha\([^)]*\)/i,
        v3 = /opacity=([^)]*)/,
        r3 = /([A-Z]|^ms)/g,
        A2 = /^-?\d+(?:px)?$/i,
        t3 = /^-?\d/,
        s3 = /^[+\-]=/,
        H3 = /[^+\-\.\de]+/g,
        I3 = {
            position: f1,
            visibility: H0,
            display: "block"
        },
        J3 = ["Left", "Right"],
        K3 = ["Top", "Bottom"],
        L0, H2, I2;
    e.fn.css = function (d, f) {
        if (arguments.length === 2 && f === r) return this;
        return e.access(this, d, f, !0, function (a, b, c) {
            return c !== r ? e.style(a, b, c) : e.css(a, b);
        });
    }, e.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = L0(a, S0, S0);
                        return c === "" ? "1" : c;
                    }
                    return a.style.opacity;
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": e.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (b, c, d, f) {
            if ( !! b && b.nodeType !== 3 && b.nodeType !== 8 && !! b.style) {
                var g, h, i = e.camelCase(c),
                    j = b.style,
                    k = e.cssHooks[i];
                c = e.cssProps[i] || i;
                if (d === r) {
                    if (k && E0 in k && (g = k.get(b, !1, f)) !== r) return g;
                    return j[c];
                }
                h = typeof d;
                if (h === f0 && isNaN(d) || d == p) return;
                h === C && s3.test(d) && (d = +d.replace(H3, "") + parseFloat(e.css(b, c)), h = f0), h === f0 && !e.cssNumber[i] && (d += j0);
                if (!k || !("set" in k) || (d = k.set(b, d)) !== r) try {
                    j[c] = d;
                } catch (a) {}
            }
        },
        css: function (a, b, c) {
            var d, f;
            b = e.camelCase(b), f = e.cssHooks[b], b = e.cssProps[b] || b, b === "cssFloat" && (b = "float");
            if (f && E0 in f && (d = f.get(a, !0, c)) !== r) return d;
            if (L0) return L0(a, b);
        },
        swap: function (a, b, c) {
            var d = {};
            for (var f in b) d[f] = a.style[f], a.style[f] = b[f];
            c.call(a);
            for (f in b) a.style[f] = d[f];
        }
    }), e.curCSS = e.css, e.each([w0, l0], function (f, g) {
        e.cssHooks[g] = {
            get: function (a, b, c) {
                var d;
                if (b) {
                    if (a.offsetWidth !== 0) return f2(a, g, c);
                    e.swap(a, I3, function () {
                        d = f2(a, g, c);
                    });
                    return d;
                }
            },
            set: function (a, b) {
                if (!A2.test(b)) return b;
                b = parseFloat(b);
                if (b >= 0) return b + j0;
            }
        };
    }), e.support.opacity || (e.cssHooks.opacity = {
        get: function (a, b) {
            return v3.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : "";
        },
        set: function (a, b) {
            var c = a.style,
                d = a.currentStyle;
            c.zoom = 1;
            var f = e.isNaN(b) ? "" : "alpha(opacity=" + b * 100 + ")",
                g = d && d.filter || c.filter || "";
            c.filter = B2.test(g) ? g.replace(B2, f) : g + z + f;
        }
    }), e(function () {
        e.support.reliableMarginRight || (e.cssHooks.marginRight = {
            get: function (a, b) {
                var c;
                e.swap(a, {
                    display: p0
                }, function () {
                    b ? c = L0(a, "margin-right", Z0) : c = a.style.marginRight;
                });
                return c;
            }
        });
    }), t.defaultView && t.defaultView.getComputedStyle && (H2 = function (a, b) {
        var c, d, f;
        b = b.replace(r3, "-$1").toLowerCase();
        if (!(d = a.ownerDocument.defaultView)) return r;
        if (f = d.getComputedStyle(a, p)) c = f.getPropertyValue(b), c === "" && !e.contains(a.ownerDocument.documentElement, a) && (c = e.style(a, b));
        return c;
    }), t.documentElement.currentStyle && (I2 = function (a, b) {
        var c, d = a.currentStyle && a.currentStyle[b],
            f = a.runtimeStyle && a.runtimeStyle[b],
            g = a.style;
        !A2.test(d) && t3.test(d) && (c = g.left, f && (a.runtimeStyle.left = a.currentStyle.left), g.left = b === "fontSize" ? "1em" : d || 0, d = g.pixelLeft + j0, g.left = c, f && (a.runtimeStyle.left = f));
        return d === "" ? c1 : d;
    }), L0 = H2 || I2, e.expr && e.expr.filters && (e.expr.filters.hidden = function (a) {
        var b = a.offsetWidth,
            c = a.offsetHeight;
        return b === 0 && c === 0 || !e.support.reliableHiddenOffsets && (a.style.display || e.css(a, K0)) === m0;
    }, e.expr.filters.visible = function (a) {
        return !e.expr.filters.hidden(a);
    });
    var G3 = /%20/g,
        D3 = /\[\]$/,
        G2 = /\r?\n/g,
        E3 = /#.*$/,
        F3 = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        z3 = /^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        A3 = /^(?:about|app|app\-storage|.+\-extension|file|widget):$/,
        B3 = /^(?:GET|HEAD)$/,
        C3 = /^\/\//,
        N2 = /\?/,
        P3 = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        O3 = /^(?:select|textarea)/i,
        M2 = /\s+/,
        N3 = /([?&])_=[^&]*/,
        L2 = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
        K2 = e.fn.load,
        T1 = {},
        J2 = {},
        B0, A0;
    try {
        B0 = X2.href;
    } catch (a) {
        B0 = t.createElement("a"), B0.href = "", B0 = B0.href;
    }
    A0 = L2.exec(B0.toLowerCase()) || [], e.fn.extend({

        load: function (f, g, h) {
            if (typeof f != C && K2) return K2.apply(this, arguments);
            if (!this.length) return this;
            var i = f.indexOf(z);
            if (i >= 0) {
                var j = f.slice(i, f.length);
                f = f.slice(0, i);
            }
            var k = "GET";
            g && (e.isFunction(g) ? (h = g, g = r) : typeof g == K && (g = e.param(g, e.ajaxSettings.traditional), k = "POST"));
            var m = this;
            e.ajax({
                url: f,
                type: k,
                dataType: "html",
                data: g,
                complete: function (b, c, d) {
                    d = b.responseText, b.isResolved() && (b.done(function (a) {
                        d = a;
                    }), m.html(j ? e("<div>").append(d.replace(P3, "")).find(j) : d)), h && m.each(h, [d, c, b]);
                }
            });
            return this;
        },
        serialize: function () {
            return e.param(this.serializeArray());
        },
        serializeArray: function () {
            return this.map(function () {
                return this.elements ? e.makeArray(this.elements) : this;
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || O3.test(this.nodeName) || z3.test(this.type));
            }).map(function (c, d) {
                var f = e(this).val();
                return f == p ? p : e.isArray(f) ? e.map(f, function (a, b) {
                    return {
                        name: d.name,
                        value: a.replace(G2, "\r\n")
                    };
                }) : {
                    name: d.name,
                    value: f.replace(G2, "\r\n")
                };
            }).get();
        }
    }), e.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(z), function (b, c) {
        e.fn[c] = function (a) {
            return this.bind(c, a);
        };
    }), e.each([E0, "post"], function (f, g) {
        e[g] = function (a, b, c, d) {
            e.isFunction(b) && (d = d || c, c = b, b = r);
            return e.ajax({
                type: g,
                url: a,
                data: b,
                success: c,
                dataType: d
            });
        };
    }), e.extend({
        getScript: function (a, b) {
            return e.get(a, r, b, k0);
        },
        getJSON: function (a, b, c) {
            return e.get(a, b, c, "json");
        },
        ajaxSetup: function (a, b) {
            b ? e.extend(!0, a, e.ajaxSettings, b) : (b = a, a = e.extend(!0, e.ajaxSettings, b));
            for (var c in {
                context: 1,
                url: 1
            }) c in b ? a[c] = b[c] : c in e.ajaxSettings && (a[c] = e.ajaxSettings[c]);
            return a;
        },
        ajaxSettings: {
            url: B0,
            isLocal: A3.test(A0[1]),
            global: !0,
            type: "GET",
            contentType: R0,
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": "*/*"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": B.String,
                "text html": !0,
                "text json": e.parseJSON,
                "text xml": e.parseXML
            }
        },
        ajaxPrefilter: m2(T1),
        ajaxTransport: m2(J2),
        ajax: function (q, n) {function l(b, c, d, f) {
                if (u !== 2) {
                    u = 2, O && clearTimeout(O), T = r, n0 = f || "", w.readyState = b ? 4 : 0;
                    var g, h, i, j = d ? V2(o, w, d) : r,
                        k, m;
                    if (b >= 200 && b < 300 || b === 304) {
                        if (o.ifModified) {
                            if (k = w.getResponseHeader("Last-Modified")) e.lastModified[J] = k;
                            if (m = w.getResponseHeader("Etag")) e.etag[J] = m;
                        }
                        if (b === 304) c = "notmodified", g = !0;
                        else try {
                            h = U2(o, j), c = "success", g = !0;
                        } catch (a) {
                            c = Z1, i = a;
                        }
                    } else {
                        i = c;
                        if (!c || b) c = "error", b < 0 && (b = 0);
                    }
                    w.status = b, w.statusText = c, g ? A.resolveWith(s, [h, c, w]) : A.rejectWith(s, [w, c, i]), w.statusCode(F), F = r, v && D.trigger("ajax" + (g ? "Success" : "Error"), [w, o, g ? h : i]), E.resolveWith(s, [w, c]), v && (D.trigger("ajaxComplete", [w, o]), --e.active || e.event.trigger("ajaxStop"));
                }
            }
            typeof q == K && (n = q, q = r), n = n || {};
            var o = e.ajaxSetup({}, n),
                s = o.context || o,
                D = s !== o && (s.nodeType || s instanceof e) ? e(s) : e.event,
                A = e.Deferred(),
                E = e._Deferred(),
                F = o.statusCode || {},
                J, X = {},
                Y = {},
                n0, Z, T, O, G, u = 0,
                v, U, w = {
                    readyState: 0,
                    setRequestHeader: function (a, b) {
                        if (!u) {
                            var c = a.toLowerCase();
                            a = Y[c] = Y[c] || a, X[a] = b;
                        }
                        return this;
                    },
                    getAllResponseHeaders: function () {
                        return u === 2 ? n0 : p;
                    },
                    getResponseHeader: function (a) {
                        var b;
                        if (u === 2) {
                            if (!Z) {
                                Z = {};
                                while (b = F3.exec(n0)) Z[b[1].toLowerCase()] = b[2];
                            }
                            b = Z[a.toLowerCase()];
                        }
                        return b === r ? p : b;
                    },
                    overrideMimeType: function (a) {
                        u || (o.mimeType = a);
                        return this;
                    },
                    abort: function (a) {
                        a = a || "abort", T && T.abort(a), l(0, a);
                        return this;
                    }
                };
            A.promise(w), w.success = w.done, w.error = w.fail, w.complete = E.done, w.statusCode = function (a) {
                if (a) {
                    var b;
                    if (u < 2) for (b in a) F[b] = [F[b], a[b]];
                    else b = a[w.status], w.then(b, b);
                }
                return this;
            }, o.url = ((q || o.url) + "").replace(E3, "").replace(C3, A0[1] + "//"), o.dataTypes = e.trim(o.dataType || H).toLowerCase().split(M2), o.crossDomain == p && (G = L2.exec(o.url.toLowerCase()), o.crossDomain = !(!G || G[1] == A0[1] && G[2] == A0[2] && (G[3] || (G[1] === "http:" ? 80 : 443)) == (A0[3] || (A0[1] === "http:" ? 80 : 443)))), o.data && o.processData && typeof o.data != C && (o.data = e.param(o.data, o.traditional)), n1(T1, o, n, w);
            if (u === 2) return !1;
            v = o.global, o.type = o.type.toUpperCase(), o.hasContent = !B3.test(o.type), v && e.active++ === 0 && e.event.trigger("ajaxStart");
            if (!o.hasContent) {
                o.data && (o.url += (N2.test(o.url) ? "&" : "?") + o.data), J = o.url;
                if (o.cache === !1) {
                    var Q = e.now(),
                        I = o.url.replace(N3, "$1_=" + Q);
                    o.url = I + (I === o.url ? (N2.test(o.url) ? "&" : "?") + "_=" + Q : "");
                }
            }(o.data && o.hasContent && o.contentType !== !1 || n.contentType) && w.setRequestHeader("Content-Type", o.contentType), o.ifModified && (J = J || o.url, e.lastModified[J] && w.setRequestHeader("If-Modified-Since", e.lastModified[J]), e.etag[J] && w.setRequestHeader("If-None-Match", e.etag[J])), w.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + (o.dataTypes[0] !== H ? ", */*; q=0.01" : "") : o.accepts[H]);
            for (U in o.headers) w.setRequestHeader(U, o.headers[U]);
            if (o.beforeSend && (o.beforeSend.call(s, w, o) === !1 || u === 2)) {
                w.abort();
                return !1;
            }
            for (U in {
                success: 1,
                error: 1,
                complete: 1
            }) w[U](o[U]);
            T = n1(J2, o, n, w);
            if (!T) l(-1, "No Transport");
            else {
                w.readyState = 1, v && D.trigger("ajaxSend", [w, o]), o.async && o.timeout > 0 && (O = setTimeout(function () {
                    w.abort("timeout");
                }, o.timeout));
                try {
                    u = 1, T.send(X, l);
                } catch (a) {
                    status < 2 ? l(-1, a) : e.error(a);
                }
            }
            return w;
        },
        param: function (c, d) {
            var f = [],
                g = function (a, b) {
                    b = e.isFunction(b) ? b() : b, f[f.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
                };
            d === r && (d = e.ajaxSettings.traditional);
            if (e.isArray(c) || c.jquery && !e.isPlainObject(c)) e.each(c, function () {
                g(this.name, this.value);
            });
            else for (var h in c) K1(h, c[h], d, g);
            return f.join("&").replace(G3, "+");
        }
    }), e.extend({
        active: 0,
        lastModified: {},
        etag: {}
    });
    var M3 = e.now(),
        r1 = /(\=)\?(&|$)|\?\?/i;
    e.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            return e.expando + "_" + M3++;
        }
    }), e.ajaxPrefilter("json jsonp", function (b, c, d) {
        var f = b.contentType === R0 && typeof b.data == C;
        if (b.dataTypes[0] === "jsonp" || b.jsonp !== !1 && (r1.test(b.url) || f && r1.test(b.data))) {
            var g, h = b.jsonpCallback = e.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
                i = B[h],
                j = b.url,
                k = b.data,
                m = "$1" + h + "$2";
            b.jsonp !== !1 && (j = j.replace(r1, m), b.url === j && (f && (k = k.replace(r1, m)), b.data === k && (j += (/\?/.test(j) ? "&" : "?") + b.jsonp + "=" + h))), b.url = j, b.data = k, B[h] = function (a) {
                g = [a];
            }, d.always(function () {
                B[h] = i, g && e.isFunction(i) && B[h](g[0]);
            }), b.converters["script json"] = function () {
                g || e.error(h + " was not called");
                return g[0];
            }, b.dataTypes[0] = "json";
            return k0;
        }
    }), e.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function (a) {
                e.globalEval(a);
                return a;
            }
        }
    }), e.ajaxPrefilter(k0, function (a) {
        a.cache === r && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1);
    }), e.ajaxTransport(k0, function (f) {
        if (f.crossDomain) {
            var g, h = t.head || t.getElementsByTagName("head")[0] || t.documentElement;
            return {
                send: function (c, d) {
                    g = t.createElement(k0), g.async = "async", f.scriptCharset && (g.charset = f.scriptCharset), g.src = f.url, g.onload = g.onreadystatechange = function (a, b) {
                        if (b || !g.readyState || /loaded|complete/.test(g.readyState)) g.onload = g.onreadystatechange = p, h && g.parentNode && h.removeChild(g), g = r, b || d(200, "success");
                    }, h.insertBefore(g, h.firstChild);
                },
                abort: function () {
                    g && g.onload(0, 1);
                }
            };
        }
    });
    var S1 = B.ActiveXObject ? function () {
            for (var a in M0) M0[a](0, 1);
        } : !1,
        L3 = 0,
        M0;
    e.ajaxSettings.xhr = B.ActiveXObject ? function () {
        return !this.isLocal && l2() || T2();
    } : l2, function (a) {
        e.extend(e.support, {
            ajax: !! a,
            cors: !! a && "withCredentials" in a
        });
    }(e.ajaxSettings.xhr()), e.support.ajax && e.ajaxTransport(function (o) {
        if (!o.crossDomain || e.support.cors) {
            var s;
            return {
                send: function (j, k) {
                    var m = "X-Requested-With",
                        q = o.xhr(),
                        n, l;
                    o.username ? q.open(o.type, o.url, o.async, o.username, o.password) : q.open(o.type, o.url, o.async);
                    if (o.xhrFields) for (l in o.xhrFields) q[l] = o.xhrFields[l];
                    o.mimeType && q.overrideMimeType && q.overrideMimeType(o.mimeType), !o.crossDomain && !j[m] && (j[m] = "XMLHttpRequest");
                    try {
                        for (l in j) q.setRequestHeader(l, j[l]);
                    } catch (a) {}
                    q.send(o.hasContent && o.data || p), s = function (b, c) {
                        var d, f, g, h, i;
                        try {
                            if (s && (c || q.readyState === 4)) {
                                s = r, n && (q.onreadystatechange = e.noop, S1 && delete M0[n]);
                                if (c) q.readyState !== 4 && q.abort();
                                else {
                                    d = q.status, g = q.getAllResponseHeaders(), h = {}, i = q.responseXML, i && i.documentElement && (h.xml = i), h.text = q.responseText;
                                    try {
                                        f = q.statusText;
                                    } catch (a) {
                                        f = "";
                                    }!d && o.isLocal && !o.crossDomain ? d = h.text ? 200 : 404 : d === 1223 && (d = 204);
                                }
                            }
                        } catch (a) {
                            c || k(-1, a);
                        }
                        h && k(d, f, h, g);
                    }, !o.async || q.readyState === 4 ? s() : (n = ++L3, S1 && (M0 || (M0 = {}, e(B).unload(S1)), M0[n] = s), q.onreadystatechange = s);
                },
                abort: function () {
                    s && s(0, 1);
                }
            };
        }
    });
    var V1 = {},
        g0, O0, S3 = /^(?:toggle|show|hide)$/,
        R3 = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
        N0, P2 = [
            [w0, v0, "marginBottom", "paddingTop", "paddingBottom"],
            [l0, D0, Z0, "paddingLeft", "paddingRight"],
            [S0]
        ],
        s1, U1 = B.webkitRequestAnimationFrame || B.mozRequestAnimationFrame || B.oRequestAnimationFrame;
    e.fn.extend({
        show: function (a, b, c) {
            var d, f;
            if (a || a === 0) return this.animate(J0(h0, 3), a, b, c);
            for (var g = 0, h = this.length; g < h; g++) d = this[g], d.style && (f = d.style.display, !e._data(d, o0) && f === m0 && (f = d.style.display = ""), f === "" && e.css(d, K0) === m0 && e._data(d, o0, d2(d.nodeName)));
            for (g = 0; g < h; g++) {
                d = this[g];
                if (d.style) {
                    f = d.style.display;
                    if (f === "" || f === m0) d.style.display = e._data(d, o0) || "";
                }
            }
            return this;
        },
        hide: function (a, b, c) {
            if (a || a === 0) return this.animate(J0(i0, 3), a, b, c);
            for (var d = 0, f = this.length; d < f; d++) if (this[d].style) {
                var g = e.css(this[d], K0);
                g !== m0 && !e._data(this[d], o0) && e._data(this[d], o0, g);
            }
            for (d = 0; d < f; d++) this[d].style && (this[d].style.display = m0);
            return this;
        },
        _toggle: e.fn.toggle,
        toggle: function (b, c, d) {
            var f = typeof b == i1;
            e.isFunction(b) && e.isFunction(c) ? this._toggle.apply(this, arguments) : b == p || f ? this.each(function () {
                var a = f ? b : e(this).is(C0);
                e(this)[a ? h0 : i0]();
            }) : this.animate(J0(S, 3), b, c, d);
            return this;
        },
        fadeTo: function (a, b, c, d) {
            return this.filter(C0).css(S0, 0).show().end().animate({
                opacity: b
            }, a, c, d);
        },
        animate: function (n, l, o, s) {
            var D = e.speed(l, o, s);
            if (e.isEmptyObject(n)) return this.each(D.complete, [!1]);
            n = e.extend({}, n);
            return this[D.queue === !1 ? "each" : x0](function () {
                D.queue === !1 && e._mark(this);
                var a = e.extend({}, D),
                    b = this.nodeType === 1,
                    c = b && e(this).is(C0),
                    d, f, g, h, i, j, k, m, q;
                a.animatedProperties = {};
                for (g in n) {
                    d = e.camelCase(g), g !== d && (n[d] = n[g], delete n[g]), f = n[d], e.isArray(f) ? (a.animatedProperties[d] = f[1], f = n[d] = f[0]) : a.animatedProperties[d] = a.specialEasing && a.specialEasing[d] || a.easing || "swing";
                    if (f === i0 && c || f === h0 && !c) return a.complete.call(this);
                    b && (d === w0 || d === l0) && (a.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], e.css(this, K0) === g1 && e.css(this, "float") === m0 && (e.support.inlineBlockNeedsLayout ? (h = d2(this.nodeName), h === g1 ? this.style.display = p0 : (this.style.display = g1, this.style.zoom = 1)) : this.style.display = p0));
                }
                a.overflow != p && (this.style.overflow = H0);
                for (g in n) i = new e.fx(this, a, g), f = n[g], S3.test(f) ? i[f === S ? c ? h0 : i0 : f]() : (j = R3.exec(f), k = i.cur(), j ? (m = parseFloat(j[2]), q = j[3] || (e.cssNumber[g] ? "" : j0), q !== j0 && (e.style(this, g, (m || 1) + q), k = (m || 1) / i.cur() * k, e.style(this, g, k + q)), j[1] && (m = (j[1] === "-=" ? -1 : 1) * m + k), i.custom(k, m, q)) : i.custom(k, f, ""));
                return !0;
            });
        },
        stop: function (c, d) {
            c && this.queue([]), this.each(function () {
                var a = e.timers,
                    b = a.length;
                d || e._unmark(!0, this);
                while (b--) a[b].elem === this && (d && a[b](!0), a.splice(b, 1));
            }), d || this.dequeue();
            return this;
        }
    }), e.each({
        slideDown: J0(h0, 1),
        slideUp: J0(i0, 1),
        slideToggle: J0(S, 1),
        fadeIn: {
            opacity: h0
        },
        fadeOut: {
            opacity: i0
        },
        fadeToggle: {
            opacity: S
        }
    }, function (d, f) {
        e.fn[d] = function (a, b, c) {
            return this.animate(f, a, b, c);
        };
    }), e.extend({
        speed: function (b, c, d) {
            var f = b && typeof b == K ? e.extend({}, b) : {
                complete: d || !d && c || e.isFunction(b) && b,
                duration: b,
                easing: d && c || c && !e.isFunction(c) && c
            };
            f.duration = e.fx.off ? 0 : typeof f.duration == f0 ? f.duration : f.duration in e.fx.speeds ? e.fx.speeds[f.duration] : e.fx.speeds._default, f.old = f.complete, f.complete = function (a) {
                e.isFunction(f.old) && f.old.call(this), f.queue !== !1 ? e.dequeue(this) : a !== !1 && e._unmark(this);
            };
            return f;
        },
        easing: {
            linear: function (a, b, c, d) {
                return c + d * a;
            },
            swing: function (a, b, c, d) {
                return (-Math.cos(a * Math.PI) / 2 + .5) * d + c;
            }
        },
        timers: [],
        fx: function (a, b, c) {
            this.options = b, this.elem = a, this.prop = c, b.orig = b.orig || {};
        }
    }), e.fx.prototype = {
        update: function () {
            this.options.step && this.options.step.call(this.elem, this.now, this), (e.fx.step[this.prop] || e.fx.step._default)(this);
        },
        cur: function () {
            if (this.elem[this.prop] != p && (!this.elem.style || this.elem.style[this.prop] == p)) return this.elem[this.prop];
            var a, b = e.css(this.elem, this.prop);
            return isNaN(a = parseFloat(b)) ? !b || b === c1 ? 0 : b : a;
        },
        custom: function (b, c, d) {function f(a) {
                return g.step(a);
            }
            var g = this,
                h = e.fx,
                i;
            this.startTime = s1 || k2(), this.start = b, this.end = c, this.unit = d || this.unit || (e.cssNumber[this.prop] ? "" : j0), this.now = this.start, this.pos = this.state = 0, f.elem = this.elem, f() && e.timers.push(f) && !N0 && (U1 ? (N0 = !0, i = function () {
                N0 && (U1(i), h.tick());
            }, U1(i)) : N0 = setInterval(h.tick, h.interval));
        },
        show: function () {
            this.options.orig[this.prop] = e.style(this.elem, this.prop), this.options.show = !0, this.custom(this.prop === l0 || this.prop === w0 ? 1 : 0, this.cur()), e(this.elem).show();
        },
        hide: function () {
            this.options.orig[this.prop] = e.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0);
        },
        step: function (c) {
            var d = s1 || k2(),
                f = !0,
                g = this.elem,
                h = this.options,
                i, j;
            if (c || d >= h.duration + this.startTime) {
                this.now = this.end, this.pos = this.state = 1, this.update(), h.animatedProperties[this.prop] = !0;
                for (i in h.animatedProperties) h.animatedProperties[i] !== !0 && (f = !1);
                if (f) {
                    h.overflow != p && !e.support.shrinkWrapBlocks && e.each(["", "X", "Y"], function (a, b) {
                        g.style["overflow" + b] = h.overflow[a];
                    }), h.hide && e(g).hide();
                    if (h.hide || h.show) for (var k in h.animatedProperties) e.style(g, k, h.orig[k]);
                    h.complete.call(g);
                }
                return !1;
            }
            h.duration == Infinity ? this.now = d : (j = d - this.startTime, this.state = j / h.duration, this.pos = e.easing[h.animatedProperties[this.prop]](this.state, j, 0, 1, h.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update();
            return !0;
        }
    }, e.extend(e.fx, {
        tick: function () {
            for (var a = e.timers, b = 0; b < a.length; ++b) a[b]() || a.splice(b--, 1);
            a.length || e.fx.stop();
        },
        interval: 13,
        stop: function () {
            clearInterval(N0), N0 = p;
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function (a) {
                e.style(a.elem, S0, a.now);
            },
            _default: function (a) {
                a.elem.style && a.elem.style[a.prop] != p ? a.elem.style[a.prop] = (a.prop === l0 || a.prop === w0 ? Math.max(0, a.now) : a.now) + a.unit : a.elem[a.prop] = a.now;
            }
        }
    }), e.expr && e.expr.filters && (e.expr.filters.animated = function (b) {
        return e.grep(e.timers, function (a) {
            return b === a.elem;
        }).length;
    });
    var Q3 = /^t(?:able|d|h)$/i,
        O2 = /^(?:body|html)$/i;
    "getBoundingClientRect" in t.documentElement ? e.fn.offset = function (b) {
        var c = this[0],
            d;
        if (b) return this.each(function (a) {
            e.offset.setOffset(this, b, a);
        });
        if (!c || !c.ownerDocument) return p;
        if (c === c.ownerDocument.body) return e.offset.bodyOffset(c);
        try {
            d = c.getBoundingClientRect();
        } catch (a) {}
        var f = c.ownerDocument,
            g = f.documentElement;
        if (!d || !e.contains(g, c)) return d ? {
            top: d.top,
            left: d.left
        } : {
            top: 0,
            left: 0
        };
        var h = f.body,
            i = J1(f),
            j = g.clientTop || h.clientTop || 0,
            k = g.clientLeft || h.clientLeft || 0,
            m = i.pageYOffset || e.support.boxModel && g.scrollTop || h.scrollTop,
            q = i.pageXOffset || e.support.boxModel && g.scrollLeft || h.scrollLeft,
            n = d.top + m - j,
            l = d.left + q - k;
        return {
            top: n,
            left: l
        };
    } : e.fn.offset = function (b) {
        var c = this[0];
        if (b) return this.each(function (a) {
            e.offset.setOffset(this, b, a);
        });
        if (!c || !c.ownerDocument) return p;
        if (c === c.ownerDocument.body) return e.offset.bodyOffset(c);
        e.offset.initialize();
        var d, f = c.offsetParent,
            g = c,
            h = c.ownerDocument,
            i = h.documentElement,
            j = h.body,
            k = h.defaultView,
            m = k ? k.getComputedStyle(c, p) : c.currentStyle,
            q = c.offsetTop,
            n = c.offsetLeft;
        while ((c = c.parentNode) && c !== j && c !== i) {
            if (e.offset.supportsFixedPosition && m.position === t0) break;
            d = k ? k.getComputedStyle(c, p) : c.currentStyle, q -= c.scrollTop, n -= c.scrollLeft, c === f && (q += c.offsetTop, n += c.offsetLeft, e.offset.doesNotAddBorder && (!e.offset.doesAddBorderForTableAndCells || !Q3.test(c.nodeName)) && (q += parseFloat(d.borderTopWidth) || 0, n += parseFloat(d.borderLeftWidth) || 0), g = f, f = c.offsetParent), e.offset.subtractsBorderForOverflowNotVisible && d.overflow !== "visible" && (q += parseFloat(d.borderTopWidth) || 0, n += parseFloat(d.borderLeftWidth) || 0), m = d;
        }
        if (m.position === u0 || m.position === Q0) q += j.offsetTop, n += j.offsetLeft;
        e.offset.supportsFixedPosition && m.position === t0 && (q += Math.max(i.scrollTop, j.scrollTop), n += Math.max(i.scrollLeft, j.scrollLeft));
        return {
            top: q,
            left: n
        };
    }, e.offset = {
        initialize: function () {
            var a = t.body,
                b = t.createElement(b0),
                c, d, f, g, h = parseFloat(e.css(a, v0)) || 0,
                i = "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
            e.extend(b.style, {
                position: f1,
                top: 0,
                left: 0,
                margin: 0,
                border: 0,
                width: "1px",
                height: "1px",
                visibility: H0
            }), b.innerHTML = i, a.insertBefore(b, a.firstChild), c = b.firstChild, d = c.firstChild, g = c.nextSibling.firstChild.firstChild, this.doesNotAddBorder = d.offsetTop !== 5, this.doesAddBorderForTableAndCells = g.offsetTop === 5, d.style.position = t0, d.style.top = "20px", this.supportsFixedPosition = d.offsetTop === 20 || d.offsetTop === 15, d.style.position = d.style.top = "", c.style.overflow = H0, c.style.position = u0, this.subtractsBorderForOverflowNotVisible = d.offsetTop === -5, this.doesNotIncludeMarginInBodyOffset = a.offsetTop !== h, a.removeChild(b), e.offset.initialize = e.noop;
        },
        bodyOffset: function (a) {
            var b = a.offsetTop,
                c = a.offsetLeft;
            e.offset.initialize(), e.offset.doesNotIncludeMarginInBodyOffset && (b += parseFloat(e.css(a, v0)) || 0, c += parseFloat(e.css(a, D0)) || 0);
            return {
                top: b,
                left: c
            };
        },
        setOffset: function (a, b, c) {
            var d = e.css(a, "position");
            d === Q0 && (a.style.position = u0);
            var f = e(a),
                g = f.offset(),
                h = e.css(a, "top"),
                i = e.css(a, "left"),
                j = (d === f1 || d === t0) && e.inArray(c1, [h, i]) > -1,
                k = {},
                m = {},
                q, n;
            j ? (m = f.position(), q = m.top, n = m.left) : (q = parseFloat(h) || 0, n = parseFloat(i) || 0), e.isFunction(b) && (b = b.call(a, c, g)), b.top != p && (k.top = b.top - g.top + q), b.left != p && (k.left = b.left - g.left + n), "using" in b ? b.using.call(a, k) : f.css(k);
        }
    }, e.fn.extend({
        position: function () {
            if (!this[0]) return p;
            var a = this[0],
                b = this.offsetParent(),
                c = this.offset(),
                d = O2.test(b[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : b.offset();
            c.top -= parseFloat(e.css(a, v0)) || 0, c.left -= parseFloat(e.css(a, D0)) || 0, d.top += parseFloat(e.css(b[0], "borderTopWidth")) || 0, d.left += parseFloat(e.css(b[0], "borderLeftWidth")) || 0;
            return {
                top: c.top - d.top,
                left: c.left - d.left
            };
        },
        offsetParent: function () {
            return this.map(function () {
                var a = this.offsetParent || t.body;
                while (a && !O2.test(a.nodeName) && e.css(a, "position") === Q0) a = a.offsetParent;
                return a;
            });
        }
    }), e.each(["Left", "Top"], function (f, g) {
        var h = P0 + g;
        e.fn[h] = function (a) {
            var b = "pageXOffset",
                c, d;
            if (a === r) {
                c = this[0];
                if (!c) return p;
                d = J1(c);
                return d ? b in d ? d[f ? "pageYOffset" : b] : e.support.boxModel && d.document.documentElement[h] || d.document.body[h] : c[h];
            }
            return this.each(function () {
                d = J1(this), d ? d.scrollTo(f ? e(d).scrollLeft() : a, f ? a : e(d).scrollTop()) : this[h] = a;
            });
        };
    }), e.each(["Height", G1], function (j, k) {
        var m = k.toLowerCase();
        e.fn["inner" + k] = function () {
            var a = this[0];
            return a && a.style ? parseFloat(e.css(a, m, l1)) : p;
        }, e.fn["outer" + k] = function (a) {
            var b = this[0];
            return b && b.style ? parseFloat(e.css(b, m, a ? I1 : k1)) : p;
        }, e.fn[m] = function (c) {
            var d = "client",
                f = this[0];
            if (!f) return c == p ? p : this;
            if (e.isFunction(c)) return this.each(function (a) {
                var b = e(this);
                b[m](c.call(this, a, b[m]()));
            });
            if (e.isWindow(f)) {
                var g = f.document.documentElement[d + k];
                return f.document.compatMode === e2 && g || f.document.body[d + k] || g;
            }
            if (f.nodeType === 9) return Math.max(f.documentElement[d + k], f.body[P0 + k], f.documentElement[P0 + k], f.body["offset" + k], f.documentElement["offset" + k]);
            if (c === r) {
                var h = e.css(f, m),
                    i = parseFloat(h);
                return e.isNaN(i) ? h : i;
            }
            return this.css(m, typeof c == C ? c : c + j0);
        };
    }), B.jQuery = B.$ = e;
})(window);