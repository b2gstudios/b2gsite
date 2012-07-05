(function (n, l, o, s) {
    var D = "vmousecancel",
        A = true,
        E = false,
        F = "virtualMouseBindings",
        J = "virtualTouchID",
        X = "vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),
        Y = "clientX clientY pageX pageY screenX screenY".split(" "),
        T = n.event.mouseHooks ? n.event.mouseHooks.props : [],
        O = n.event.props.concat(T),
        G = {},
        u = 0,
        v = 0,
        U = 0,
        w = E,
        Q = [],
        I = E,
        N = E,
        P = "addEventListener" in o,
        R = n(o),
        t1 = 1,
        d0 = 0,
        r0;
    n.vmouse = {
        moveDistanceThreshold: 10,
        clickDistanceThreshold: 10,
        resetTimerDuration: 1500
    };

    function a0(a) {
        while (a && typeof a.originalEvent !== "undefined") {
            a = a.originalEvent;
        }
        return a;
    }function Y0(a, b) {
        var c = a.type,
            d, f, g, h, i, j, k, m, q;
        a = n.Event(a);
        a.type = b;
        d = a.originalEvent;
        f = n.event.props;
        if (c.search(/^(mouse|click)/) > -1) {
            f = O;
        }
        if (d) {
            for (k = f.length, h; k;) {
                h = f[--k];
                a[h] = d[h];
            }
        }
        if (c.search(/mouse(down|up)|click/) > -1 && !a.which) {
            a.which = 1;
        }
        if (c.search(/^touch/) !== -1) {
            g = a0(d);
            c = g.touches;
            i = g.changedTouches;
            j = (c && c.length) ? c[0] : ((i && i.length) ? i[0] : s);
            if (j) {
                for (m = 0, q = Y.length; m < q; m++) {
                    h = Y[m];
                    a[h] = j[h];
                }
            }
        }
        return a;
    }function s0(a) {
        var b = {},
            c, d;
        while (a) {
            c = n.data(a, F);
            for (d in c) {
                if (c[d]) {
                    b[d] = b.hasVirtualBinding = A;
                }
            }
            a = a.parentNode;
        }
        return b;
    }function X0(a, b) {
        var c;
        while (a) {
            c = n.data(a, F);
            if (c && (!b || c[b])) {
                return a;
            }
            a = a.parentNode;
        }
        return null;
    }function B() {
        N = E;
    }function r() {
        N = A;
    }function P0() {
        d0 = 0;
        Q.length = 0;
        I = E;
        r();
    }function Q0() {
        B();
    }function u0() {
        t0();
        u = setTimeout(function () {
            u = 0;
            P0();
        }, n.vmouse.resetTimerDuration);
    }function t0() {
        if (u) {
            clearTimeout(u);
            u = 0;
        }
    }function S(a, b, c) {
        var d;
        if ((c && c[a]) || (!c && X0(b.target, a))) {
            d = Y0(b, a);
            n(b.target).trigger(d);
        }
        return d;
    }function C0(a) {
        var b = n.data(a.target, J);
        if (!I && (!d0 || d0 !== b)) {
            var c = S("v" + a.type, a);
            if (c) {
                if (c.isDefaultPrevented()) {
                    a.preventDefault();
                }
                if (c.isPropagationStopped()) {
                    a.stopPropagation();
                }
                if (c.isImmediatePropagationStopped()) {
                    a.stopImmediatePropagation();
                }
            }
        }
    }function i0(a) {
        var b = a0(a).touches,
            c, d;
        if (b && b.length === 1) {
            c = a.target;
            d = s0(c);
            if (d.hasVirtualBinding) {
                d0 = t1++;
                n.data(c, J, d0);
                t0();
                Q0();
                w = E;
                var f = a0(a).touches[0];
                v = f.pageX;
                U = f.pageY;
                S("vmouseover", a, d);
                S("vmousedown", a, d);
            }
        }
    }function o0(a) {
        if (N) {
            return;
        }
        if (!w) {
            S(D, a, s0(a.target));
        }
        w = A;
        u0();
    }function h0(a) {
        if (N) {
            return;
        }
        var b = a0(a).touches[0],
            c = w,
            d = n.vmouse.moveDistanceThreshold,
            f = s0(a.target);
        w = w || (Math.abs(b.pageX - v) > d || Math.abs(b.pageY - U) > d);
        if (w && !c) {
            S(D, a, f);
        }
        S("vmousemove", a, f);
        u0();
    }function D0(a) {
        if (N) {
            return;
        }
        r();
        var b = s0(a.target),
            c;
        S("vmouseup", a, b);
        if (!w) {
            var d = S("vclick", a, b);
            if (d && d.isDefaultPrevented()) {
                c = a0(a).changedTouches[0];
                Q.push({
                    touchID: d0,
                    x: c.clientX,
                    y: c.clientY
                });
                I = A;
            }
        }
        S("vmouseout", a, b);
        w = E;
        u0();
    }function v0(a) {
        var b = n.data(a, F),
            c;
        if (b) {
            for (c in b) {
                if (b[c]) {
                    return A;
                }
            }
        }
        return E;
    }function R0() {}function Z0(f) {
        var g = "touchstart",
            h = f.substr(1);
        return {
            setup: function (a, b) {
                if (!v0(this)) {
                    n.data(this, F, {});
                }
                var c = n.data(this, F);
                c[f] = A;
                G[f] = (G[f] || 0) + 1;
                if (G[f] === 1) {
                    R.bind(h, C0);
                }
                n(this).bind(h, R0);
                if (P) {
                    G[g] = (G[g] || 0) + 1;
                    if (G[g] === 1) {
                        R.bind(g, i0).bind("touchend", D0).bind("touchmove", h0).bind("scroll", o0);
                    }
                }
            },
            teardown: function (a, b) {
                --G[f];
                if (!G[f]) {
                    R.unbind(h, C0);
                }
                if (P) {
                    --G[g];
                    if (!G[g]) {
                        R.unbind(g, i0).unbind("touchmove", h0).unbind("touchend", D0).unbind("scroll", o0);
                    }
                }
                var c = n(this),
                    d = n.data(this, F);
                if (d) {
                    d[f] = E;
                }
                c.unbind(h, R0);
                if (!v0(this)) {
                    c.removeData(F);
                }
            }
        };
    }
    for (var p0 = 0; p0 < X.length; p0++) {
        n.event.special[X[p0]] = Z0(X[p0]);
    }
    if (P) {
        o.addEventListener("click", function (a) {
            var b = Q.length,
                c = a.target,
                d, f, g, h, i, j;
            if (b) {
                d = a.clientX;
                f = a.clientY;
                r0 = n.vmouse.clickDistanceThreshold;
                g = c;
                while (g) {
                    for (h = 0; h < b; h++) {
                        i = Q[h];
                        j = 0;
                        if ((g === c && Math.abs(i.x - d) < r0 && Math.abs(i.y - f) < r0) || n.data(g, J) === i.touchID) {
                            a.preventDefault();
                            a.stopPropagation();
                            return;
                        }
                    }
                    g = g.parentNode;
                }
            }
        }, A);
    }
})(jQuery, window, document);