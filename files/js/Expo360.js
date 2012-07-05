 

jQuery(document).ready(function (a) {



    var y0 = "pointer",
        z0 = "url(",
        A0 = ".tooltip[rel='",
        i0 = "disabled",
        V = "cursor",
        j0 = "block",
        k0 = 100,
        Q = 500,
        B0 = "blocked",
        C0 = "roll_over",
        O = "display",
        p0 = "playback-slider",
        l0 = '<div></div>',
        q0 = "zoom-slider",
        m0 = "px ",
        E0 = "zoom-out",
        D0 = "zoom-in",
        F0 = "right",
        H = "left",
        N0 = "inline-block",
        D = "100%",
        B = "absolute",
        H0 = "center",
        A = "0",
        G0 = "zoom_slider",
        r0 = "reset",
        I0 = "rotate_slider",
        b0 = "pan",
        E = "none",
        n0 = "hyperlink",
        n = "px",
        s0 = "height",
        o0 = "width",
        d0 = "autoplay",
        R = "auto",
        I = "<div></div>",
        w = null,
        S = "rotate",
        z = true,
        j = false,
        l = 10,
        J0 = "mouseout",
        V0 = a('body'),
        e0 = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i),
        t0 = jQuery.browser.msie,
        L = "mousedown",
        Z = "mousemove",
        J = "mouseup",
        L0 = "mouseover",
        K0 = J0,
        T = "click",
        O0 = l;
    if (e0) {
        O0 = 15;
        L = "vmousedown";
        Z = "vmousemove";
        J = "vmouseup";
        L0 = "vmouseover";
        K0 = "vmouseout";
        T = "vclick";
    }
    var c0 = 0,
        w0, P0, Q0 = function (b) {
            this.xml = b.xml;
            this.singleImage = j;
            this.focusable = z;
            this.oldImage = -1, this.currentImage = 0, this.numImages;
            this.degrees = 0, this.speedDeg = 0, this.speedInc = 0, this.speedDegDefault = 0;
            this.dragging = j, this.panning = j;
            this.positionClickedX, this.degWhenClicked;
            this.currentX, this.oldDif;
            this.buttonsDisabledAlpha = 0.3;
            this.viewLeft = 0, this.viewTop = 0;
            this.currentWidth, this.currentHeight;
            this.zoomWhenPad = 1;
            this.ease = 5, this.inertia = 1;
            this.mouse_wheel_function = "zoom", this.mouse_wheel_speed = 1;
            this.draggingZoomSlider = j, this.draggingPlaybackSlider = j;
            this.sliderWidth = 0, this.playbackSliderWidth = 0;
            this.maxZoom, this.minZoom, this.zoomEase, this.zoomSpeed, this.zoom = 1, this.zoomCurrent = 1, this.focusTimer;
            this.focused = j;
            this.autoplay = j, this.autoplaySpeed;
            this.mode = S;
            this.reverse = j;
            this.width, this.height;
            this.iniWidth, this.iniHeight;
            this.posX = 0, this.posY = 0;
            this.include_zoom_window = j;
            this.zoom_window_width, this.zoom_window_height, this.zoomWindowEnabled = z;
            this.viewLeftCurrent = 0, this.viewTopCurrent = 0, this.paddingEase = 5;
            this.imagesPath, this.imagesBigPath, this.hotspotsImagesPath, this.grab_hand_cursor = j, this.loading_text;
            this.imagesSrc = Array(), this.hotspots = Array(), this.hotspotsButtons = Array(), this.hotspotsTooltips = Array(), this.$hotspotsSmall;
            this.images = Array(), this.zoom_window_images = Array();
            this.controls = Array(), this.controlsExtras = Array();
            this.include_tooltips = j;
            this.panel_options = Object();
            this.loading_options = new Object();
            this.tooltips_options = new Object();
            this.zoom_window_options = new Object();
            this.tooltips_texts = new Object();
            this.$bigImage = w;
            this.$zoomSlider = w, this.$zoomMinus = w, this.$zoomPlus = w, this.$playbackSlider = w, this.$panButton = w, this.$rotateButton = w;
            this.$root = a(b.where);
            this.$main = a(I);
            this.$view = a(I);
            this.$imagesHolder = a(I);
            this.$bigContent = a(I);
            this.$panel = a(I);
            this.$loader = a(I);
            this.$zoomWindow, this.$zoomWindowBox, this.$zoomClickable;
            this.$loadingText = a(I);
            this.$autoplayPlay, this.$autoplayPause;
            this.sliderFrom, this.sliderTo, this.sliderX;
            this.posIniX, this.posIniY;
            this.zoomBtnInterval = 0;
            this.goToDegree = j, this.showedHotspots = j, this.focusedNum = -1, this.smallTweenTime = 200;
            this.currentHotspots = Array(), this.currentHotspotsTooltips = Array();
        };
    Q0.prototype = {
        _this: this,
        loadXml: function () {
            var c = this;
            a.ajax({
                type: "GET",
                url: c.xml,
                dataType: "xml",
                success: function (b) {
                    c.parseXml(b);
                }
            });
        },
        parseXml: function (s) {
            var F = "padding",
                g = "fadeTime",
                t = "text_color",
                C = "text_font",
                v = "round_corners",
                r = "background_pattern",
                u = "background_alpha",
                G = "background_color",
                P = "true",
                X = "maxZoom",
                K = this,
                p = a(s).find("ProductViewer");
            this.width = parseInt(a(p).find("viewWidth").text(), l);
            this.height = parseInt(a(p).find("viewHeight").text(), l);
            this.ease = parseFloat(a(p).find("ease").text(), l);
            this.paddingEase = parseFloat(a(p).find("padding_ease").text(), l);
            this.inertia = parseFloat(a(p).find("inertia").text(), l);
            this.mouse_wheel_function = a(p).find("mouse_wheel_function").text();
            this.mouse_wheel_speed = parseFloat(a(p).find("mouse_wheel_speed").text(), l);
            this.zoomSpeed = parseFloat(a(p).find("zoomSpeed").text(), l);
            this.zoomEase = parseInt(a(p).find("zoomEase").text(), l);
            if (a(p).find(X).text() == R) this.maxZoom = R;
            else this.maxZoom = parseFloat(a(p).find(X).text(), l);
            if (a(p).find("reverse").text() == P) this.reverse = z;
            if (a(p).find(d0).text() == P) this.autoplay = z;
            if (a(p).find("grab_hand_cursor").text() == P) this.grab_hand_cursor = z;
            this.autoplaySpeed = parseInt(a(p).find("autoplaySpeed").text(), l);
            if (a(p).find("include_tooltips").text() == P) this.include_tooltips = z;
            if (a(p).find("include_zoom_window").text() == P) this.include_zoom_window = z;
            var q = a(p).find("panel");
            this.panel_options.width = parseInt(a(q).find(o0).text(), l);
            this.panel_options.height = parseInt(a(q).find(s0).text(), l);
            this.panel_options.xOffset = parseInt(a(q).find("xOffset").text(), l);
            this.panel_options.yOffset = parseInt(a(q).find("yOffset").text(), l);
            this.panel_options.background_color = a(q).find(G).text();
            this.panel_options.background_alpha = a(q).find(u).text();
            this.panel_options.background_pattern = a(q).find(r).text();
            this.panel_options.round_corners = a(q).find(v).text() + n;
            this.panel_options.show = a(q).find("show").text();
            this.panel_options.buttons_side_margin = parseInt(a(q).find("buttons_side_margin").text(), l);
            this.panel_options.buttons_tween_time = parseInt(a(q).find("buttons_tween_time").text(), l);
            this.panel_options.ui_folder = a(q).find("ui_folder").text();
            this.panel_options.buttons_width = parseInt(a(q).find("buttons_width").text(), l);
            this.panel_options.buttons_height = parseInt(a(q).find("buttons_height").text(), l);
            this.panel_options.divider_width = parseInt(a(q).find("divider_width").text(), l);
            this.panel_options.divider_height = parseInt(a(q).find("divider_height").text(), l);
            this.panel_options.slider_width = a(q).find("slider_width").text();
            this.panel_options.slider_height = parseInt(a(q).find("slider_height").text(), l);
            this.panel_options.slider_background_color = a(q).find("slider_background_color").text();
            this.panel_options.slider_background_alpha = a(q).find("slider_background_alpha").text();
            this.panel_options.slider_background_pattern = a(q).find("slider_background_pattern").text();
            this.panel_options.slider_round_corners = a(q).find("slider_round_corners").text() + n;
            this.panel_options.zoom_subbuttons_width = parseInt(a(q).find("zoom_subbuttons_width").text(), l);
            this.panel_options.zoom_subbuttons_height = parseInt(a(q).find("zoom_subbuttons_height").text(), l);
            this.panel_options.zoom_subbuttons_distance = parseInt(a(q).find("zoom_subbuttons_distance").text(), l);
            this.panel_options.dragger_width = parseInt(a(q).find("dragger_width").text(), l);
            this.panel_options.dragger_height = parseInt(a(q).find("dragger_height").text(), l);
            var M = a(p).find("loading");
            this.loading_text = a(M).find("loading_text").text();
            this.loading_options.background_color = a(M).find(G).text();
            this.loading_options.background_alpha = a(M).find(u).text();
            this.loading_options.background_pattern = a(M).find(r).text();
            this.loading_options.text_font = a(M).find(C).text();
            this.loading_options.text_size = a(M).find("text_size").text();
            this.loading_options.text_color = a(M).find(t).text();
            this.loading_options.text_span_color = a(M).find("text_span_color").text();
            this.loading_options.text_background_color = a(M).find("text_background_color").text();
            this.loading_options.text_background_alpha = a(M).find("text_background_alpha").text();
            this.loading_options.text_background_pattern = a(M).find("text_background_pattern").text();
            this.loading_options.text_background_round_corner = a(M).find("text_background_round_corner").text() + n;
            var S0 = a(p).find("controls");
            a(S0).find("control").each(function (b) {
                var c = a(this);
                if (c.text() == n0) K.controlsExtras.push(c.attr("href"));
                else K.controlsExtras.push(E);
                K.controls.push(c.text());
            });
            var N = a(p).find("tooltips_texts");
            this.tooltips_texts.rotate = a(N).find(S).text();
            this.tooltips_texts.pan = a(N).find(b0).text();
            this.tooltips_texts.rotate_slider = a(N).find(I0).text();
            this.tooltips_texts.rotate_left = a(N).find("rotate_left").text();
            this.tooltips_texts.rotate_right = a(N).find("rotate_right").text();
            this.tooltips_texts.reset = a(N).find(r0).text();
            this.tooltips_texts.zoom_slider = a(N).find(G0).text();
            this.tooltips_texts.zoom_in = a(N).find("zoom_in").text();
            this.tooltips_texts.zoom_out = a(N).find("zoom_out").text();
            this.tooltips_texts.hyperlink = a(N).find(n0).text();
            this.tooltips_texts.play = a(N).find("play").text();
            this.tooltips_texts.pause = a(N).find("pause").text();
            var U = a(p).find("tooltips");
            this.tooltips_options.text_font = a(U).find(C).text();
            this.tooltips_options.text_size = a(U).find("text_size").text();
            this.tooltips_options.text_color = a(U).find(t).text();
            this.tooltips_options.left_right_padding = a(U).find("left_right_padding").text();
            this.tooltips_options.top_bottom_padding = a(U).find("top_bottom_padding").text();
            this.tooltips_options.background_color = a(U).find(G).text();
            this.tooltips_options.background_alpha = a(U).find(u).text();
            this.tooltips_options.round_corners = a(U).find(v).text() + n;
            this.tooltips_options.fadeTime = parseInt(a(U).find(g).text(), l);
            var Y = a(p).find("zoom_window");
            this.zoom_window_options.window_width = a(Y).find("window_width").text();
            this.zoom_window_options.window_height = a(Y).find("window_height").text();
            this.zoom_window_options.background_color = a(Y).find(G).text();
            this.zoom_window_options.background_alpha = a(Y).find(u).text();
            this.zoom_window_options.background_pattern = a(Y).find(r).text();
            this.zoom_window_options.padding = a(Y).find(F).text();
            this.zoom_window_options.selection_line_color = a(Y).find("selection_line_color").text();
            this.zoom_window_options.selection_line_alpha = a(Y).find("selection_line_alpha").text();
            this.hotspotsImagesPath = a(p).find("hotspotsImagesPath").text();
            var T0 = a(p).find("hotspotsButtons");
            a(T0).find("button").each(function (b) {
                var c = a(this),
                    d = Object();
                d.id = c.find("id").text();
                d.out = c.find("out").text();
                d.over = c.find("over").text();
                d.width = c.find(o0).text();
                d.height = c.find(s0).text();
                d.tweenTime = c.find("tweenTime").text();
                K.hotspotsButtons.push(d);
            });
            this.imagesPath = a(p).find("imagesPath").text();
            this.imagesBigPath = a(p).find("imagesBigPath").text();
            if (this.imagesBigPath == E) this.focusable = j;
            var U0 = a(p).find("images"),
                M0 = 0;
            a(U0).find("image").each(function (o) {
                M0++;
                var m = a(this);
                K.imagesSrc.push(m.attr("src"));
                var k = m.find("hotspot");
                if (k.length > 0) {
                    var h = Array();
                    a(k).each(function (b) {
                        var c = "content",
                            d = a(this),
                            e = Object();
                        e.id = d.find("button_id").text();
                        e.x = parseInt(d.find("x").text(), l);
                        e.y = parseInt(d.find("y").text(), l);
                        e.type = d.find("type").text();
                        e.tooltip = d.find("tooltip").text();
                        if (e.type == "link") e.content = d.find(c).text();
                        if (e.type == "small") {
                            var f = Object(),
                                i = d.find(c);
                            f.width = a(i).find(o0).text();
                            f.background_color = a(i).find(G).text();
                            f.background_alpha = a(i).find(u).text();
                            f.background_pattern = a(i).find(r).text();
                            f.padding = a(i).find(F).text();
                            f.round_corners = a(i).find(v).text() + n;
                            f.html = a(i).find("html").text();
                            f.fadeTime = parseInt(a(i).find(g).text(), l);
                            e.content = f;
                        }
                        if (e.type == "big") {
                            var f = Object(),
                                i = d.find(c);
                            f.background_color = a(i).find(G).text();
                            f.background_alpha = a(i).find(u).text();
                            f.background_pattern = a(i).find(r).text();
                            f.html = a(i).find("html").text();
                            f.close_button_id = a(i).find("close_button_id").text();
                            f.closeOffsetX = parseInt(a(i).find("closeOffsetX").text(), l);
                            f.closeOffsetY = parseInt(a(i).find("closeOffsetY").text(), l);
                            f.fadeTime = parseInt(a(i).find(g).text(), l);
                            e.content = f;
                        }
                        h.push(e);
                    });
                    K.hotspots.push(h);
                } else K.hotspots.push(w);
            });
            if (M0 == 1) this.singleImage = z;
            this.makeView();
        },
        makeView: function () {
            var b = "px 0px",
                c = "slider_over.png",
                d = "slider_out.png",
                e = '<a href="#"></a>',
                f = "relative",
                i = this.panel_options.height + this.panel_options.yOffset;
            if (i < 0) i = 0;
            this.$main.css({
                "position": f,
                "width": this.width + n,
                "height": (this.height + i) + n,
                "margin": A,
                "padding": A,
                "top": A,
                "left": A,
                "text-align": H0
            });
            this.$bigContent.css({
                "position": B
            });
            this.$imagesHolder.css({
                "position": B
            });
            if (this.include_zoom_window) {
                this.$zoomWindow = a(I);
                this.$zoomWindowBox = a(I);
                this.$zoomClickable = a(I);
                var o = a(I);
                this.$zoomWindow.css({
                    "position": B,
                    "top": "5px",
                    "left": "5px",
                    "padding": this.zoom_window_options.padding + n,
                    "opacity": A,
                    "display": E
                });
                this.$zoomClickable.css({
                    "width": D,
                    "height": D,
                    "position": B
                });
                this.$zoomWindowBox.css({
                    "position": B,
                    "border": "solid 1px " + this.zoom_window_options.selection_line_color,
                    "opacity": this.zoom_window_options.selection_line_alpha
                });
                o.css({
                    "width": D,
                    "height": D,
                    "background-color": "#ffffff",
                    "opacity": A
                });
                this.$zoomWindowBox.append(o);
                this.$zoomWindow.append(this.$zoomClickable, this.$zoomWindowBox);
                W(this.$zoomWindow, this.zoom_window_options.background_color, this.zoom_window_options.background_alpha, this.zoom_window_options.background_pattern);
            }
            this.$view.css({
                "position": f,
                "width": D,
                "height": this.height + n,
                "overflow": "hidden"
            });
            this.$panel.css({
                "position": B,
                "width": this.panel_options.width + n,
                "height": this.panel_options.height + n,
                "top": this.height + parseInt(this.panel_options.yOffset, l) + n,
                "left": ((this.width - this.panel_options.width) / 2) + parseInt(this.panel_options.xOffset, l) + n
            });
            W(this.$panel, this.panel_options.background_color, this.panel_options.background_alpha, this.panel_options.background_pattern);
            h0(this.$panel, this.panel_options.round_corners);
            this.$loader.css({
                "zoom": "1",
                "position": B,
                "width": D,
                "height": D,
                "text-align": H0,
                "top": 0,
                "left": 0
            });
            this.$loadingText.css({
                "padding": "8px 20px",
                "position": f,
                "top": this.height / 2 - 20 + n,
                "display": N0
            });
            h0(this.$loadingText, this.loading_options.text_background_round_corner);
            W(this.$loader, this.loading_options.background_color, this.loading_options.background_alpha, this.loading_options.background_pattern);
            W(this.$loadingText, this.loading_options.text_background_color, this.loading_options.text_background_alpha, this.loading_options.text_background_pattern);
            R0(this.$loadingText, this.loading_options.text_font, this.loading_options.text_color, this.loading_options.text_size);
            for (var m = 0; m < this.controls.length; m++) {
                if (this.controls[m] == H || this.controls[m] == F0 || this.controls[m] == S || this.controls[m] == b0 || this.controls[m] == n0 || this.controls[m] == r0 || this.controls[m] == D0 || this.controls[m] == E0) {
                    var k = a(e).appendTo(this.$panel);
                    k.css({
                        "position": f,
                        "float": H,
                        "margin": (this.panel_options.height / 2 - this.panel_options.buttons_height / 2) + m0 + this.panel_options.buttons_side_margin + n,
                        "width": this.panel_options.buttons_width + n,
                        "height": this.panel_options.buttons_height + n,
                        "top": 0,
                        "left": 0
                    });
                    buttonsClass(k, this.panel_options.ui_folder + this.controls[m] + "_out.png", this.panel_options.ui_folder + this.controls[m] + "_over.png", this.panel_options.buttons_width, this.panel_options.buttons_height, this.panel_options.buttons_tween_time);
                    a0(k);
                    k.click(function () {
                        return j;
                    });
                    if (this.include_tooltips) {
                        var h = this.getHint(this.controls[m]),
                            s = this.makeTooltip(h, k, m);
                    }
                    if (this.controls[m] == H) k.bind(L, a.proxy(this.leftControlDown, this));
                    else if (this.controls[m] == F0) k.bind(L, a.proxy(this.rightControlDown, this));
                    else if (this.controls[m] == S) {
                        this.$rotateButton = k;
                        k.bind(T, a.proxy(this.changeToRotate, this));
                    } else if (this.controls[m] == b0) {
                        this.$panButton = k;
                        k.bind(T, a.proxy(this.changeToPan, this));
                    } else if (this.controls[m] == r0) k.bind(T, a.proxy(this.resetControlClick, this));
                    else if (this.controls[m] == E0) k.bind(T, a.proxy(this.zoomoutControlClick, this));
                    else if (this.controls[m] == D0) k.bind(T, a.proxy(this.zoominControlClick, this));
                    else if (this.controls[m] == n0) {
                        k.attr("href", this.controlsExtras[m]);
                        k.attr("target", "_blank");
                        k.unbind("click");
                        k.click(function () {
                            return z;
                        });
                    }
                } else if (this.controls[m] == q0) {
                    var F = a(l0),
                        g = Math.max(this.panel_options.slider_height, this.panel_options.dragger_height);
                    F.css({
                        "position": f,
                        "float": H,
                        "height": g,
                        "margin": (this.panel_options.height / 2 - g / 2) + m0 + this.panel_options.zoom_subbuttons_distance + n,
                        "top": 0,
                        "left": 0
                    });
                    var t = a(e);
                    buttonsClass(t, this.panel_options.ui_folder + "minus_out.png", this.panel_options.ui_folder + "minus_over.png", this.panel_options.zoom_subbuttons_width, this.panel_options.zoom_subbuttons_height, this.panel_options.buttons_tween_time);
                    var C = a(e);
                    buttonsClass(C, this.panel_options.ui_folder + "plus_out.png", this.panel_options.ui_folder + "plus_over.png", this.panel_options.zoom_subbuttons_width, this.panel_options.zoom_subbuttons_height, this.panel_options.buttons_tween_time);
                    var v = a(e);
                    buttonsClass(v, this.panel_options.ui_folder + d, this.panel_options.ui_folder + c, this.panel_options.dragger_width, this.panel_options.dragger_height, this.panel_options.buttons_tween_time);
                    var r = a(e);
                    if (this.panel_options.slider_width == R) this.sliderWidth = this.panel_options.width - ((this.controls.length - 1) * (this.panel_options.buttons_width + this.panel_options.buttons_side_margin * 2) + this.panel_options.zoom_subbuttons_width * 2 + this.panel_options.buttons_side_margin * 2 + this.panel_options.zoom_subbuttons_distance * 2 + this.panel_options.divider_width * (this.controls.length - 1) + 1);
                    else this.sliderWidth = parseInt(this.panel_options.slider_width, l);
                    r.css({
                        "position": B,
                        "width": this.sliderWidth,
                        "height": this.panel_options.slider_height,
                        "top": g / 2 - this.panel_options.slider_height / 2,
                        "left": A
                    });
                    h0(r, this.panel_options.slider_round_corners);
                    W(r, this.panel_options.slider_background_color, this.panel_options.slider_background_alpha, this.panel_options.slider_background_pattern);
                    t.css({
                        "position": f,
                        "float": H,
                        "width": this.panel_options.zoom_subbuttons_width,
                        "height": this.panel_options.zoom_subbuttons_height,
                        "margin": (this.panel_options.height / 2 - this.panel_options.zoom_subbuttons_height / 2) + b,
                        "margin-left": this.panel_options.buttons_side_margin
                    });
                    C.css({
                        "position": f,
                        "float": H,
                        "width": this.panel_options.zoom_subbuttons_width,
                        "height": this.panel_options.zoom_subbuttons_height,
                        "margin": (this.panel_options.height / 2 - this.panel_options.zoom_subbuttons_height / 2) + b,
                        "margin-right": this.panel_options.buttons_side_margin
                    });
                    v.css({
                        "position": B,
                        "left": -this.panel_options.dragger_width / 2 + n,
                        "width": this.panel_options.dragger_width
                    });
                    F.css({
                        "width": this.sliderWidth
                    });
                    F.append(r, v);
                    this.$panel.append(t, F, C);
                    this.$zoomSlider = v;
                    this.$zoomMinus = t;
                    this.$zoomPlus = C;
                    v.click(function () {
                        return j;
                    });
                    a0(C);
                    a0(t);
                    a0(v);
                    this.sliderFrom = -this.panel_options.dragger_width / 2;
                    this.sliderTo = this.sliderWidth - this.panel_options.dragger_width / 2;
                    C.click(a.proxy(this.zoomPlusControlClick, this));
                    C.bind(L, a.proxy(this.zoomPlusControlDown, this));
                    t.click(a.proxy(this.zoomMinusControlClick, this));
                    t.bind(L, a.proxy(this.zoomMinusControlDown, this));
                    v.bind(L, a.proxy(this.zoomSliderDown, this));
                    r.click(a.proxy(this.zoomBackClick, this));
                    if (this.include_tooltips) {
                        var h = "Zoom 0%",
                            s = this.makeTooltip(h, v, q0, [t, C]);
                    }
                } else if (this.controls[m] == p0) {
                    var u = a(l0),
                        G = Math.max(this.panel_options.slider_height, this.panel_options.dragger_height);
                    u.css({
                        "position": f,
                        "float": H,
                        "height": G,
                        "margin": (this.panel_options.height / 2 - G / 2) + m0 + this.panel_options.buttons_side_margin + n,
                        "top": 0,
                        "left": 0
                    });
                    var v = a(e);
                    buttonsClass(v, this.panel_options.ui_folder + d, this.panel_options.ui_folder + c, this.panel_options.dragger_width, this.panel_options.dragger_height, this.panel_options.buttons_tween_time);
                    var r = a(e);
                    if (this.panel_options.slider_width == R) this.playbackSliderWidth = this.panel_options.width - ((this.controls.length - 1) * (this.panel_options.buttons_width + this.panel_options.buttons_side_margin * 2) + this.panel_options.buttons_side_margin * 2 + this.panel_options.divider_width * (this.controls.length - 1) + 1);
                    else this.playbackSliderWidth = parseInt(this.panel_options.slider_width, l);
                    var P = a(l0);
                    r.css({
                        "position": B,
                        "width": this.playbackSliderWidth,
                        "height": this.panel_options.slider_height,
                        "top": G / 2 - this.panel_options.slider_height / 2,
                        "left": A
                    });
                    h0(r, this.panel_options.slider_round_corners);
                    W(r, this.panel_options.slider_background_color, this.panel_options.slider_background_alpha, this.panel_options.slider_background_pattern);
                    v.css({
                        "position": B,
                        "left": -this.panel_options.dragger_width / 2 + n,
                    });
                    u.css({
                        "width": this.playbackSliderWidth
                    });
                    u.append(r, v);
                    this.$panel.append(u);
                    this.$playbackSlider = v;
                    v.click(function () {
                        return j;
                    });
                    a0(v);
                    this.sliderFrom = -this.panel_options.dragger_width / 2;
                    this.sliderTo = this.playbackSliderWidth - this.panel_options.dragger_width / 2;
                    v.bind(L, a.proxy(this.playbackSliderDown, this));
                    r.bind(T, a.proxy(this.playbackBackClick, this));
                    if (this.include_tooltips) {
                        var h = "Rotate 0",
                            s = this.makeTooltip(h, this.$playbackSlider, p0);
                    }
                } else if (this.controls[m] == d0) {
                    var k = a(l0);
                    k.css({
                        "position": f,
                        "float": H,
                        "margin": (this.panel_options.height / 2 - this.panel_options.buttons_height / 2) + m0 + this.panel_options.buttons_side_margin + n,
                        "width": this.panel_options.buttons_width + n,
                        "height": this.panel_options.buttons_height + n,
                        "overflow": "hidden",
                        "top": 0,
                        "left": 0
                    });
                    var X = a(e);
                    buttonsClass(X, this.panel_options.ui_folder + "play_out.png", this.panel_options.ui_folder + "play_over.png", this.panel_options.buttons_width, this.panel_options.buttons_height, this.panel_options.buttons_tween_time);
                    var K = a(e);
                    buttonsClass(K, this.panel_options.ui_folder + "pause_out.png", this.panel_options.ui_folder + "pause_over.png", this.panel_options.buttons_width, this.panel_options.buttons_height, this.panel_options.buttons_tween_time);
                    X.css({
                        "position": B,
                        "top": A,
                        "left": A
                    });
                    K.css({
                        "position": B,
                        "top": A,
                        "left": A
                    });
                    k.append(X, K);
                    this.$panel.append(k);
                    this.$autoplayPlay = X;
                    this.$autoplayPause = K;
                    if (this.autoplay) X.stop().fadeTo(0, 0).css(O, E);
                    else K.stop().fadeTo(0, 0).css(O, E);
                    k.click(a.proxy(this.autoplayClick, this));
                    if (this.include_tooltips) {
                        var h = this.tooltips_texts.play;
                        if (this.autoplay) h = this.tooltips_texts.pause;
                        var s = this.makeTooltip(h, k, d0);
                    }
                }
                if (m != this.controls.length - 1) {
                    var p = a(I);
                    p.css({
                        "position": f,
                        "float": H,
                        "margin": (this.panel_options.height / 2 - this.panel_options.divider_height / 2) + b,
                        "width": this.panel_options.divider_width,
                        "height": this.panel_options.divider_height
                    });
                    p.append('<img src="' + this.panel_options.ui_folder + 'divider.png" />');
                    this.$panel.append(p);
                }
            }
            if (this.mouse_wheel_function != E) this.$view.mousewheel(a.proxy(this.mouseWheelControl, this));
            this.$loader.append(this.$loadingText);
            this.$view.append(this.$imagesHolder, this.$zoomWindow, this.$bigContent);
            this.$main.append(this.$view);
            this.$main.append(this.$panel);
            this.$main.append(this.$loader);
            this.$root.append(this.$main);
            a('*', this.$main).bind(L, a.proxy(this.clearSmall, this));
            a('*', this.$view).unbind(L);
            if (this.panel_options.show == C0 && !e0) {
                this.$panel.css("opacity", A);
                var q = this;
                this.$main.hover(function () {
                    if (!q.$panel.hasClass(B0)) q.$panel.stop().fadeTo(Q, 1);
                }, function () {
                    q.$panel.stop().fadeTo(Q, 0);
                });
            }
            this.loadImage(0);
        },
        changeToRotate: function () {
            this.mode = S;
        },
        changeToPan: function () {
            this.mode = b0;
        },
        leftRightControlUp: function () {
            if (this.autoplay) this.speedDegDefault = this.autoplaySpeed;
            else this.speedDegDefault = 0;
            a(document).unbind(J);
            return j;
        },
        leftControlDown: function () {
            this.speedDegDefault = 7;
            a(document).bind(J, a.proxy(this.leftRightControlUp, this));
            return j;
        },
        rightControlDown: function () {
            this.speedDegDefault = -7;
            a(document).bind(J, a.proxy(this.leftRightControlUp, this));
            return j;
        },
        resetControlClick: function () {
            this.zoom = this.minZoom;
            this.goToDegree = z;
            this.goToDegreeNum = 0;
        },
        zoomoutControlClick: function () {
            this.zoom = this.minZoom;
            return j;
        },
        zoominControlClick: function () {
            this.zoom = this.maxZoom;
            return j;
        },
        zoomPlusControlClick: function () {
            this.incrementZoom();
            return j;
        },
        zoomMinusControlClick: function () {
            this.decrementZoom();
            return j;
        },
        incrementZoom: function () {
            this.zoom += this.zoomSpeed;
        },
        decrementZoom: function () {
            this.zoom -= this.zoomSpeed;
        },
        zoomControlUp: function () {
            clearInterval(this.zoomBtnInterval);
            this.changeFocus();
            a(document).unbind(J);
            return j;
        },
        zoomPlusControlDown: function () {
            this.zoomBtnInterval = setInterval(a.proxy(this.incrementZoom, this), k0);
            a(document).bind(J, a.proxy(this.zoomControlUp, this));
            return j;
        },
        zoomMinusControlDown: function () {
            this.zoomBtnInterval = setInterval(a.proxy(this.decrementZoom, this), k0);
            a(document).bind(J, a.proxy(this.zoomControlUp, this));
            return j;
        },
        zoomSliderMove: function (b) {
            var c = b.pageX - this.posIniX,
                d = this.sliderX + c;
            if (d < this.sliderFrom) d = this.sliderFrom;
            if (d > this.sliderTo) d = this.sliderTo;
            this.$zoomSlider.css({
                "left": d + n
            });
            var e = (d + this.panel_options.dragger_width / 2) / this.sliderWidth;
            this.zoom = e * (this.maxZoom + (1 - this.minZoom) - 1) + 1;
            this.zoomCurrent = this.zoom;
        },
        zoomSliderUp: function () {
            this.draggingZoomSlider = j;
            g0();
            return j;
        },
        zoomSliderDown: function (b) {
            this.posIniX = b.pageX;
            this.sliderX = parseInt(this.$zoomSlider.css(H), l);
            this.draggingZoomSlider = z;
            a(document).bind(Z, a.proxy(this.zoomSliderMove, this));
            a(document).bind(J, a.proxy(this.zoomSliderUp, this));
            return j;
        },
        zoomBackClick: function (b) {
            var c = a(b.target).offset(),
                d = b.pageX - c.left - this.panel_options.dragger_width / 2 - 3;
            if (d < this.sliderFrom) d = this.sliderFrom;
            if (d > this.sliderTo) d = this.sliderTo;
            var e = (d + this.panel_options.dragger_width / 2) / this.sliderWidth;
            this.zoom = e * (this.maxZoom - this.minZoom) + 1;
            return j;
        },
        playbackSliderMove: function (b) {
            var c = b.pageX - this.posIniX,
                d = this.sliderX + c;
            if (d < this.sliderFrom) d = this.sliderFrom;
            if (d > this.sliderTo) d = this.sliderTo;
            this.$playbackSlider.css({
                "left": d + n
            });
            var e = (d + this.panel_options.dragger_width / 2) / this.playbackSliderWidth;
            this.goToDegree = z;
            this.goToDegreeNum = Math.round(e * 360);
        },
        playbackSliderUp: function (b) {
            this.draggingPlaybackSlider = j;
            g0();
            return j;
        },
        playbackSliderDown: function (b) {
            this.posIniX = b.pageX;
            this.sliderX = parseInt(this.$playbackSlider.css(H), l);
            this.draggingPlaybackSlider = z;
            this.goToDegreeNum = this.degrees;
            a(document).bind(Z, a.proxy(this.playbackSliderMove, this));
            a(document).bind(J, a.proxy(this.playbackSliderUp, this));
            return j;
        },
        playbackBackClick: function (b) {
            var c = a(b.target).offset(),
                d = b.pageX - c.left - this.panel_options.dragger_width / 2 - 3;
            if (d < this.sliderFrom) d = this.sliderFrom;
            if (d > this.sliderTo) d = this.sliderTo;
            var e = (d + this.panel_options.dragger_width / 2) / this.playbackSliderWidth;
            this.goToDegree = z;
            this.goToDegreeNum = Math.round(e * 360);
            return j;
        },
        autoplayClick: function () {
            var b = this;
            if (this.autoplay) {
                v0(d0, this.tooltips_texts.play);
                this.autoplay = j;
                this.speedDegDefault = 0;
                this.$autoplayPlay.stop().css(O, j0).fadeTo(this.panel_options.buttons_tween_time, 1);
                this.$autoplayPause.stop().fadeTo(this.panel_options.buttons_tween_time, 0, function () {
                    b.$autoplayPause.css(O, E);
                });
            } else {
                v0(d0, this.tooltips_texts.pause);
                this.autoplay = z;
                this.speedDegDefault = this.autoplaySpeed;
                this.$autoplayPause.stop().css(O, j0).fadeTo(this.panel_options.buttons_tween_time, 1);
                this.$autoplayPlay.stop().fadeTo(this.panel_options.buttons_tween_time, 0, function () {
                    b.$autoplayPlay.css(O, E);
                });
            }
            f0(this.$autoplayPlay, d0);
            return j;
        },
        mouseWheelControl: function (b, c) {
            this.clearSmall();
            if (this.mouse_wheel_function == "zoom") this.zoom += c * this.mouse_wheel_speed;
            else if (this.mouse_wheel_function == S) this.speedDeg += c * this.mouse_wheel_speed;
            return j;
        },
        loadImage: function (m) {
            var k = new Image(),
                h = this;
            k.onload = function () {
                if (m == 0) {
                    var b = k.width,
                        c = k.height;
                    if (!(b == h.width && c == h.height)) {
                        var d = b / h.width;
                        if (d > (c / h.height)) d = c / h.height;
                        h.iniWidth = b / d;
                        h.iniHeight = c / d;
                        h.zoom = 1 - (d - 1);
                        h.zoomCurrent = h.zoom;
                    } else {
                        h.iniWidth = b;
                        h.iniHeight = c;
                        h.zoom = 1;
                        h.zoomCurrent = h.zoom;
                    }
                    h.minZoom = h.zoom;
                    h.$imagesHolder.css({
                        "width": h.iniWidth + n,
                        "height": h.iniHeight + n
                    });
                    if (h.include_zoom_window) {
                        var d = 1;
                        if (h.zoom_window_options.window_width == R) d = c / h.zoom_window_options.window_height;
                        else if (h.zoom_window_options.window_height == R) d = b / h.zoom_window_options.window_width;
                        else {
                            alert("Error on a zoom window parameter on the xml -> width OR height must be 'auto'");
                            return;
                        }
                        var e = Math.round(b / d),
                            f = Math.round(c / d);
                        h.$zoomWindow.css({
                            "width": e + n,
                            "height": f + n
                        });
                        h.zoom_window_width = e;
                        h.zoom_window_height = f;
                    }
                }
                a(k).css({
                    "width": D,
                    "height": D
                });
                var i = a("<div rel='" + m + "'></div>");
                i.css({
                    "position": B,
                    "width": D,
                    "height": D
                });
                i.append(k);
                h.$imagesHolder.append(i);
                if (h.include_zoom_window) {
                    var o = i.clone().css({
                        "padding": h.zoom_window_options.padding + n,
                        "width": R,
                        "height": R
                    }).prependTo(h.$zoomWindow);
                    h.zoom_window_images.push(o);
                }
                h.images.push(i);
                i.bind(L, a.proxy(h.clearSmall, h));
                if (m == h.imagesSrc.length - 1) h.loadFinished();
                else h.loadImage(++m);
            };
            var s = this.loading_text;
            s = s.replace("loaded_images", (m + 1));
            s = s.replace("total_images", this.imagesSrc.length);
            s = s.replace("#span#", "<span style='color:" + this.loading_options.text_span_color + "'>");
            s = s.replace("#spanEnd#", "</span>");
            this.$loadingText.html(s);
            k.src = (this.imagesPath + this.imagesSrc[m]);
        },
        loadFinished: function () {
            this.$loader.fadeOut(Q);
            this.currentImage = 0;
            this.numImages = this.imagesSrc.length;
            if (this.include_zoom_window) {
                this.relativeExcessW = ((this.zoom_window_width / this.iniWidth) * (this.iniWidth - this.width));
                this.relativeExcessH = ((this.zoom_window_height / this.iniHeight) * (this.iniHeight - this.height));
            }
            this.updateImage();
            if (this.autoplay) this.speedDegDefault = this.autoplaySpeed;
            this.dragAndDrop();
        },
        onRotateMove: function (b) {
            if (e0) {
                if (w0 != b.pageX && c0 > 2) this.currentX = b.pageX;
                else if (c0 <= 2) {
                    w0 = b.pageX;
                    c0++;
                }
            } else this.currentX = b.pageX;
        },
        onRotateUp: function () {
            this.grabHandOpen(this.$imagesHolder, this);
            this.dragging = j;
            this.changeFocus();
            g0();
        },
        onPanMove: function (b) {
            var c, d;
            if (e0) {
                if (w0 != b.pageX && P0 != b.pageY && c0 > 2) {
                    c = b.pageX;
                    d = b.pageY;
                } else if (c0 <= 2) {
                    w0 = b.pageX;
                    P0 = b.pageY;
                    c = this.panPrevX;
                    d = this.panPrevY;
                    c0++;
                }
            } else {
                c = b.pageX;
                d = b.pageY;
            }
            var e = this.panPrevLeft + (this.panPrevX - c),
                f = this.panPrevTop + (this.panPrevY - d),
                i = (this.currentWidth - this.width) / 2,
                o = (this.currentHeight - this.height) / 2;
            if (e < -i) e = -i;
            if (e > i) e = i;
            if (f < -o) f = -o;
            if (f > o) f = o;
            this.viewLeft = e;
            this.viewTop = f;
        },
        onPanUp: function () {
            this.grabHandOpen(this.$imagesHolder, this);
            this.panning = j;
            g0();
            return j;
        },
        startDrag: function (b) {
            this.grabHandClose(this.$imagesHolder, this);
            c0 = 0;
            if (this.mode == S && !this.singleImage) {
                this.removeFocus();
                this.positionClickedX = b.pageX;
                this.oldDif = 0;
                this.degWhenClicked = this.degrees;
                this.currentX = this.positionClickedX;
                this.dragging = z;
                a(document).bind(Z, a.proxy(this.onRotateMove, this));
                a(document).bind(J, a.proxy(this.onRotateUp, this));
                return j;
            } else {
                this.panPrevX = b.pageX;
                this.panPrevY = b.pageY;
                this.panning = z;
                this.panPrevLeft = this.viewLeft;
                this.panPrevTop = this.viewTop;
                this.zoomWhenPad = this.zoom;
                a(document).bind(Z, a.proxy(this.onPanMove, this));
                a(document).bind(J, a.proxy(this.onPanUp, this));
                return j;
            }
        },
        dragAndDrop: function () {
            var g = this;
            a0(this.$imagesHolder);
            this.$imagesHolder.hover(function () {
                g.grabHandOpen(g.$imagesHolder, g);
            }, function () {
                g.$imagesHolder.css(V, R);
            });
            this.$imagesHolder.bind(L, a.proxy(this.startDrag, this));
            if (this.include_zoom_window) {
                a0(this.$zoomWindowBox);
                this.$zoomWindowBox.hover(function () {
                    g.grabHandOpen(g.$zoomWindowBox, g);
                }, function () {
                    g.$zoomWindowBox.css(V, R);
                });
                this.$zoomClickable.click(function (b) {
                    var c = b.pageX,
                        d = b.pageY,
                        e = g.$zoomWindow.offset(),
                        f = (g.currentWidth - g.width) / 2,
                        i = (g.currentHeight - g.height) / 2,
                        o = parseInt(g.$zoomWindowBox.css(o0), l),
                        m = parseInt(g.$zoomWindowBox.css(s0), l),
                        k = -f + ((c - e.left - o / 2) * (g.width / o)),
                        h = -i + ((d - e.top - m / 2) * (g.height / m));
                    if (k < -f) k = -f;
                    if (k > f) k = f;
                    if (h < -i) h = -i;
                    if (h > i) h = i;
                    g.viewLeft = k;
                    g.viewTop = h;
                });
                g.$zoomWindowBox.bind(L, function (m) {
                    g.grabHandClose(g.$zoomWindowBox, g);
                    var k = m.pageX,
                        h = m.pageY;
                    g.panning = z;
                    var s = g.viewLeft,
                        F = g.viewTop;
                    g.zoomWhenPad = g.zoom;
                    a(document).bind(Z, function (b) {
                        var c = b.pageX,
                            d = b.pageY,
                            e = s - ((k - c) * (g.width / parseInt(g.$zoomWindowBox.css(o0), l))),
                            f = F - ((h - d) * (g.height / parseInt(g.$zoomWindowBox.css(s0), l))),
                            i = (g.currentWidth - g.width) / 2,
                            o = (g.currentHeight - g.height) / 2;
                        if (e < -i) e = -i;
                        if (e > i) e = i;
                        if (f < -o) f = -o;
                        if (f > o) f = o;
                        g.viewLeft = e;
                        g.viewTop = f;
                        return j;
                    });
                    a(document).bind(J, function (b) {
                        g.grabHandOpen(g.$imagesHolder, g);
                        g.panning = j;
                        g0();
                        return j;
                    });
                    return j;
                });
            }
        },
        makeTooltip: function (c, d, e, f) {
            var i = "5px solid transparent",
                o = a('<div class="tooltip"><span>' + c + '</span></div>'),
                m = a(l0);
            o.css({
                "-moz-font-feature-settings": "normal",
                "-moz-font-language-override": "normal",
                "display": N0,
                "pointer-events": E,
                "position": B,
                "text-align": H0,
                "text-decoration": E,
                "padding": this.tooltips_options.top_bottom_padding + m0 + this.tooltips_options.left_right_padding + n,
                "background-color": this.tooltips_options.background_color,
                "opacity": A
            });
            m.css({
                "float": H,
                "position": B,
                "top": D,
                "left": "50%",
                "margin-left": "-5px",
                "width": "0px",
                "height": "0px",
                "border-left": i,
                "border-right": i,
                "border-top": "5px solid " + this.tooltips_options.background_color,
                "opacity": this.tooltips_options.background_alpha
            });
            R0(o, this.tooltips_options.text_font, this.tooltips_options.text_color, this.tooltips_options.text_size);
            h0(o, this.tooltips_options.round_corners);
            W(o, this.tooltips_options.background_color, this.tooltips_options.background_alpha, E);
            o.append(m);
            V0.append(o);
            o.attr("rel", e);
            f0(d, e);
            var k = this;

            function h() {
                if (!a(this).hasClass(i0)) {
                    var b = f0(d, e);
                    b.stop().fadeTo(k.tooltips_options.fadeTime, 1);
                    if (t0) m.stop().fadeTo(k.tooltips_options.fadeTime, k.tooltips_options.background_alpha);
                }
            }function s() {
                if (!a(this).hasClass("removing")) {
                    var b = a(A0 + e + "']");
                    b.stop().fadeTo(k.tooltips_options.fadeTime, 0);
                    if (t0) m.stop().fadeTo(k.tooltips_options.fadeTime, 0);
                }
            }
            if (t0) {
                o.stop().fadeTo(0, 0);
                m.stop().fadeTo(0, 0);
            }
            d.bind(L0, h);
            d.bind(K0, s);
            if (f != w) a(f).each(function () {
                a(this).bind(L0, h);
                a(this).bind(K0, s);
            });
            return o;
        },
        getHint: function (b) {
            var c;
            switch (b) {
            case H:
                c = this.tooltips_texts.rotate_left;
                break;
            case F0:
                c = this.tooltips_texts.rotate_right;
                break;
            case S:
                c = this.tooltips_texts.rotate;
                break;
            case b0:
                c = this.tooltips_texts.pan;
                break;
            case n0:
                c = this.tooltips_texts.hyperlink;
                break;
            case r0:
                c = this.tooltips_texts.reset;
                break;
            case D0:
                c = this.tooltips_texts.zoom_in;
                break;
            case E0:
                c = this.tooltips_texts.zoom_out;
                break;
            case G0:
                var d = Math.round((this.zoom - this.minZoom) / (this.maxZoom - this.minZoom) * k0) + "";
                c = this.tooltips_texts.zoom_slider;
                c = c.replace("zoom_number", d);
                break;
            case I0:
                var e, f = this.degrees;
                if (this.degrees < 0) f = 360 + this.degrees;
                if (this.draggingPlaybackSlider) e = Math.round(this.goToDegreeNum) + "";
                else e = Math.round(f) + "";
                c = this.tooltips_texts.rotate_slider;
                c = c.replace("rotate_number", e);
                break;
            }
            return c;
        },
        clearSmall: function () {
            if (this.$hotspotsSmall != w) {
                this.$hotspotsSmall.stop().fadeTo(this.smallTweenTime, 0, function () {
                    a(this).remove();
                });
                this.$hotspotsSmall = w;
            }
        },
        updateSmall: function () {
            if (this.$hotspotsSmall != w) {
                this.$hotspotsSmall.css({
                    "left": parseInt(this.$smallHotspot.css(H), l) - this.smallWidth / 2,
                    "top": parseInt(this.$smallHotspot.css("top"), l) - this.smallHeight / 2
                });
            }
        },
        getHotspotButton: function (h, s) {
            var F = "<a href='#' rel=",
                g = this,
                t = -1;
            for (var C = 0; C < this.hotspotsButtons.length; C++) if (this.hotspotsButtons[C].id == h.id) {
                t = C;
                break;
            }
            if (t == -1) return w;
            var v = parseInt(this.hotspotsButtons[t].width, l),
                r = parseInt(this.hotspotsButtons[t].height, l),
                u = a(F + s + "></a>").css({
                    "position": B,
                    "margin-left": Math.round(-v / 2) + n,
                    "margin-top": Math.round(-r / 2) + n
                });
            buttonsClass(u, this.hotspotsImagesPath + this.hotspotsButtons[t].out, this.hotspotsImagesPath + this.hotspotsButtons[t].over, v, r, parseInt(this.hotspotsButtons[t].tweenTime, l));
            if (h.tooltip != E && h.tooltip != w) {
                var G = h.tooltip,
                    P = this.makeTooltip(G, u, "cont" + s);
                this.currentHotspotsTooltips.push(P);
            }
            if (h.type == "link") {
                u.attr({
                    "href": h.content,
                    "target": "_blank"
                });
                if (e0) u.bind(T, function () {
                    window.location = h.content;
                    return j;
                });
            }
            if (h.type == "small") u.bind(T, function () {
                var b = h.content,
                    c = a(this),
                    d = a(I).css({
                        "width": b.width,
                        "position": B,
                        "padding": b.padding + n,
                        "opacity": A
                    }).html(b.html);
                h0(d, b.round_corners);
                W(d, b.background_color, b.background_alpha, b.background_pattern);
                g.smallTweenTime = b.fadeTime;
                g.$imagesHolder.append(d.fadeTo(g.smallTweenTime, 1));
                g.$hotspotsSmall = d;
                g.$smallHotspot = c;
                g.smallWidth = b.width;
                g.smallHeight = d.outerHeight();
                return j;
            });
            else if (h.type == "big") u.bind(T, function makeBigHotspotContent() {
                var b = h.content,
                    c = a(this),
                    d, e = a(I);
                g.$bigContent.append(e);
                e.load(b.html);
                a.proxy(g.initScroll(e, g.width, g.height), g);
                e.css({
                    "width": D,
                    "position": B,
                    "left": A,
                    "top": A
                });
                g.$bigContent.css({
                    "width": D,
                    "height": D,
                    "opacity": A
                });
                W(g.$bigContent, b.background_color, b.background_alpha, b.background_pattern);
                var f = -1;
                for (var i = 0; i < g.hotspotsButtons.length; i++) if (g.hotspotsButtons[i].id == b.close_button_id) {
                    f = i;
                    break;
                }
                if (f == -1) return w;
                var o = parseInt(g.hotspotsButtons[f].width, l),
                    m = parseInt(g.hotspotsButtons[f].height, l),
                    k = a(F + s + "></a>").css({
                        "position": B,
                        "left": g.width - o + b.closeOffsetX + n,
                        "top": b.closeOffsetY + n
                    });
                buttonsClass(k, g.hotspotsImagesPath + g.hotspotsButtons[f].out, g.hotspotsImagesPath + g.hotspotsButtons[f].over, o, m, parseInt(g.hotspotsButtons[f].tweenTime, l));
                g.$bigContent.append(k).stop().fadeTo(b.fadeTime, 1);
                k.click(function () {
                    if (g.panel_options.show == C0) g.$panel.removeClass(B0).stop().fadeTo(Q, 1);
                    g.$bigContent.stop().fadeTo(b.fadeTime, 0, function () {
                        a(this).empty().css({
                            "width": A,
                            "height": A
                        });
                    });
                    return j;
                });
                if (g.panel_options.show == C0) g.$panel.addClass(B0).stop().fadeTo(Q, 0);
                return j;
            });
            return u;
        },
        clearHotspots: function () {
            for (var b = 0; b < this.currentHotspots.length; b++) {
                this.currentHotspots[b].addClass("disabled removing").stop().fadeTo(Q, 0, function () {
                    a(this).remove();
                });
            }
            for (var b = 0; b < this.currentHotspotsTooltips.length; b++) {
                this.currentHotspotsTooltips[b].stop().fadeTo(Q, 0, function () {
                    a(this).remove();
                });
            }
            this.currentHotspots = Array();
            this.currentHotspotsTooltips = Array();
        },
        updateHotspots: function () {
            for (var b = 0; b < this.currentHotspots.length; b++) {
                if (this.hotspots[this.currentImage] != w) {
                    var c = this.hotspots[this.currentImage][b];
                    this.currentHotspots[b].css({
                        "left": Math.round(c.x * this.zoomCurrent) + n,
                        "top": Math.round(c.y * this.zoomCurrent) + n
                    });
                    f0(this.currentHotspots[b], "cont" + this.currentHotspots[b].attr("rel"));
                }
            }
            this.updateSmall();
        },
        bringHotspotsTimeout: function () {
            if (this.hotspots[this.currentImage] != w) {
                for (var b = 0; b < this.hotspots[this.currentImage].length; b++) {
                    var c = this.hotspots[this.currentImage][b],
                        d = this.getHotspotButton(c, b).css({
                            "left": c.x + n,
                            "top": c.y + n,
                            "opacity": A
                        }).fadeTo(Q, 1);
                    if (d != w) {
                        this.$imagesHolder.append(d);
                        this.currentHotspots.push(d);
                    }
                }
            }
        },
        bringHotspots: function () {
            clearTimeout(this.hotspotsTimer);
            if (this.hotspots[this.currentImage] != w) this.hotspotsTimer = setTimeout(a.proxy(this.bringHotspotsTimeout, this), k0);
        },
        getToFront: function () {
            if (this.currentImage >= 0 && this.currentImage < this.numImages) if (this.currentImage != this.oldImage) {
                for (var b = 0; b < this.numImages; b++) {
                    this.images[b].css(O, E);
                    if (this.include_zoom_window) this.zoom_window_images[b].css(O, E);
                }
                this.images[this.currentImage].css(O, j0);
                if (this.include_zoom_window) this.zoom_window_images[this.currentImage].css(O, j0);
                this.oldImage = this.currentImage;
                this.clearHotspots();
                this.clearSmall();
                this.bringHotspots();
                this.changeFocus();
            }
        },
        removeFocus: function () {
            clearTimeout(this.focusTimer);
            this.focusing = j;
            this.focused = j;
            this.focusedNum = -1;
            if (this.$bigImage != w) this.$bigImage.remove();
        },
        changeFocus: function () {
            if (this.focusable) {
                this.removeFocus();
                if (this.zoom > 1 && !this.dragging) {
                    this.focusTimer = setTimeout(a.proxy(this.updateFocus, this), Q);
                }
            }
        },
        updateFocus: function () {
            if (this.focusable) {
                clearTimeout(this.focusTimer);
                this.focusing = z;
                this.loadBigImage();
            }
        },
        loadBigImage: function () {
            if (!this.dragging && this.focusable) {
                if (this.focused) this.removeFocus();
                var d = new Image(),
                    e = this.currentImage,
                    f = this;
                d.onload = function () {
                    if (e == f.currentImage && f.zoom > 1) {
                        if (f.focused) f.removeFocus();
                        f.focused = z;
                        f.focusing = j;
                        f.focusedNum = e;
                        var b = f.images[e],
                            c = a(d);
                        c.css({
                            "width": D,
                            "height": D,
                            "position": B
                        });
                        b.append(c);
                        f.$bigImage = c;
                    }
                };
                d.src = (this.imagesBigPath + this.imagesSrc[e]);
            }
        },
        calculateDegree: function () {
            if (!this.dragging && !this.goToDegree && !this.draggingPlaybackSlider) {
                var b = ((this.speedDegDefault - this.speedDeg) / this.ease);
                this.speedDeg += b;
                this.degrees += Math.round(this.speedDeg);
            } else if (this.goToDegree) {
                var b;
                if (this.draggingPlaybackSlider) b = ((this.goToDegreeNum - this.degrees));
                else b = ((this.goToDegreeNum - this.degrees) / this.ease);
                this.degrees += b;
                if (Math.round(this.degrees) == this.goToDegreeNum) {
                    this.goToDegree = j;
                    this.degrees = Math.round(this.degrees);
                }
            }
            while (this.degrees > 360) this.degrees -= 360;
            while (this.degrees < -360) this.degrees += 360;
            var c = this.degrees;
            if (this.degrees < 0) c = 360 + this.degrees;
            this.currentImage = Math.round((c / 360) * this.numImages);
            if (this.reverse) {
                if (this.currentImage != 0) this.currentImage = this.numImages - this.currentImage;
            }
            this.getToFront();
            if (this.$playbackSlider != w) {
                f0(this.$playbackSlider, p0);
                v0(p0, this.getHint(I0));
                if (!this.draggingPlaybackSlider) {
                    var d = Math.abs(c) / 360,
                        e = d * this.playbackSliderWidth - this.panel_options.dragger_width / 2;
                    this.$playbackSlider.css({
                        "left": e + n
                    });
                }
            }
        },
        calculateZoom: function () {
            if (this.zoom < this.minZoom) this.zoom = this.minZoom;
            if (this.zoom > this.maxZoom) this.zoom = this.maxZoom;
            var b = ((this.zoom - this.zoomCurrent) / this.zoomEase);
            this.zoomCurrent += b;
            this.currentWidth = Math.round(this.iniWidth * this.zoomCurrent);
            this.currentHeight = Math.round(this.iniHeight * this.zoomCurrent);
            var c = (this.currentWidth - this.width) / 2,
                d = (this.currentHeight - this.height) / 2;
            this.posX = Math.round(-c);
            this.posY = Math.round(-d);
            this.viewLeft += this.viewLeft * (this.zoomCurrent - this.zoomWhenPad) / 2;
            this.viewTop += this.viewTop * (this.zoomCurrent - this.zoomWhenPad) / 2;
            this.zoomWhenPad = this.zoomCurrent;
            var e = ((this.viewLeft - this.viewLeftCurrent) / this.paddingEase),
                f = ((this.viewTop - this.viewTopCurrent) / this.paddingEase);
            this.viewLeftCurrent += e;
            this.viewTopCurrent += f;
            var i = Math.round(this.posX - this.viewLeftCurrent),
                o = Math.round(this.posY - this.viewTopCurrent);
            if (i > 0) {
                this.viewLeft = this.posX;
                i = 0;
            } else if (i < -c * 2) {
                this.viewLeft = -this.posX;
                i = -c * 2;
            }
            if (o > 0) {
                this.viewTop = this.posY;
                o = 0;
            } else if (o < -d * 2) {
                this.viewTop = -this.posY;
                o = -d * 2;
            }
            if ((this.focused || this.focusing) && this.zoom <= 1) this.removeFocus();
            else if (!this.focusing && !this.focused && this.zoom > 1) this.updateFocus();
            this.$imagesHolder.css({
                "width": this.currentWidth + n,
                "height": this.currentHeight + n,
                "left": i + n,
                "top": o + n
            });
            if (this.include_zoom_window) {
                this.$zoomWindowBox.css({
                    "width": Math.round((this.zoom_window_width - this.relativeExcessW) / this.zoomCurrent) + n,
                    "height": Math.round((this.zoom_window_height - this.relativeExcessH) / this.zoomCurrent) + n,
                    "top": Math.round(-o * (this.zoom_window_height / this.currentHeight)) + n,
                    "left": Math.round(-i * (this.zoom_window_width / this.currentWidth)) + n
                });
            }
            if (this.$zoomSlider != w) {
                f0(this.$zoomSlider, q0);
                v0(q0, this.getHint(G0));
                if (!this.draggingZoomSlider) {
                    var m = (this.zoomCurrent - this.minZoom) / (this.maxZoom - this.minZoom),
                        k = m * this.sliderWidth - this.panel_options.dragger_width / 2;
                    this.$zoomSlider.css({
                        "left": k + n
                    });
                    if (this.zoom == this.minZoom) x0(this.$zoomMinus, this.buttonsDisabledAlpha);
                    else u0(this.$zoomMinus, this.buttonsDisabledAlpha);
                    if (this.zoom == this.maxZoom) x0(this.$zoomPlus, this.buttonsDisabledAlpha);
                    else u0(this.$zoomPlus, this.buttonsDisabledAlpha);
                }
            }
        },
        updateImage: function () {
            if (!this.singleImage) this.calculateDegree();
            else if (!this.showedHotspots) {
                this.bringHotspots();
                this.showedHotspots = z;
            }
            if (this.minZoom != this.maxZoom) {
                if (Math.round(this.zoom * 1000) != Math.round(this.zoomCurrent * k0)) this.calculateZoom();
            }
            this.updateHotspots();
            if (this.dragging) {
                var b = this.positionClickedX - this.currentX;
                if (e0) {
                    if (b < 20 && b > -20) b = 0;
                    b /= 2;
                }
                var c = b - this.oldDif;
                this.speedDeg = Math.round(c * this.inertia);
                this.oldDif = b;
                this.degrees = this.degWhenClicked + b;
            }
            var d = j,
                e = Math.round(this.iniWidth * this.zoom),
                f = Math.round(this.iniHeight * this.zoom);
            if (e > this.width || f > this.height) d = z;
            if (this.include_zoom_window) {
                if (d && !this.zoomWindowEnabled) {
                    this.$zoomWindow.css(O, j0).stop().fadeTo(Q, 1);
                    this.zoomWindowEnabled = z;
                } else if (!d && this.zoomWindowEnabled) {
                    this.$zoomWindow.stop().fadeTo(Q, 0, function () {
                        a(this).css(O, E);
                    });
                    this.zoomWindowEnabled = j;
                }
            }
            if (!d && this.mode == b0) this.mode = S;
            if (this.$panButton != w) {
                if (this.mode == b0 || !d) x0(this.$panButton, this.buttonsDisabledAlpha);
                else u0(this.$panButton, this.buttonsDisabledAlpha);
            }
            if (this.$rotateButton != w) {
                if (this.mode == S) x0(this.$rotateButton, this.buttonsDisabledAlpha);
                else u0(this.$rotateButton, this.buttonsDisabledAlpha);
            }
            setTimeout(a.proxy(this.updateImage, this), O0);
        },
        grabHandOpen: function (b, c) {
            if (c.grab_hand_cursor) b.css(V, z0 + c.panel_options.ui_folder + "grabhand_open.png) 12 12,auto");
            else b.css(V, y0);
        },
        grabHandClose: function (b, c) {
            if (c.grab_hand_cursor) b.css(V, z0 + c.panel_options.ui_folder + "grabhand_closed.png) 12 12,auto");
            else b.css(V, y0);
        },
        initScroll: function (t, C, v) {
            var r = t,
                u = this;
            a0(t);
            var G = C,
                P = v;
            t.hover(function () {

                u.grabHandOpen(t, u);
            }, function () {
                t.css(V, R);
            });
            t.bind(L, function initScrollDown(i) {
                u.grabHandClose(r, u);
                var o = i.pageX,
                    m = i.pageY,
                    k = parseInt(r.css(H), l),
                    h = parseInt(r.css("top"), l),
                    s = r.width(),
                    F = r.height();
                a(document).bind(Z, function initScrollMove(b) {
                    var c = b.pageX,
                        d = b.pageY,
                        e = k - (o - c),
                        f = h - (m - d);
                    if (e > 0) e = 0;
                    else if (e < G - s) e = G - s;
                    if (f > 0) f = 0;
                    else if (f < P - F) f = P - F;
                    r.css({
                        "left": e,
                        "top": f
                    });
                    return j;
                });

                function g() {
                    u.grabHandOpen(r, u);
                    g0();
                    a(document).unbind(J0);
                    return j;
                }
                a(document).bind(J, g);
                a(document).bind(J0, g);
                return j;
            });
        }
    };
    Expo360 = function (c) {
        var d = new Q0(c);
        d.loadXml();
        this.goTo = function (b) {
            d.goToDegree = z;
            d.goToDegreeNum = b;
        };
        this.zoomTo = function (b) {
            d.zoom = b;
        };
    };

    function x0(b, c) {
        if (!b.hasClass(i0)) {
            b.addClass(i0);
            b.stop().fadeTo(300, c);
            a("span", b).stop().fadeTo(300, 0);
            b.css(V, "default");
        }
    }function u0(b) {
        if (b.hasClass(i0)) {
            b.removeClass(i0);
            b.stop().fadeTo(300, 1);
            b.css(V, y0);
        }
    }function f0(b, c) {
        var d = b.offset(),
            e = a(A0 + c + "']"),
            f = d.top - e.outerHeight() - 3,
            i = d.left - (e.width() / 2) + parseInt(b.width(), l) / 4 - 1;
        e.css({
            "top": f,
            "left": i
        });
        return e;
    }function v0(b, c) {
        var d = a(A0 + b + "'] span");
        d.text(c);
    }function g0() {
        a(document).unbind(Z);
        a(document).unbind(J);
    }function R0(b, c, d, e) {
        b.css({
            "font-family": c,
            "color": d,
            "font-size": e + n
        });
    }function h0(b, c) {
        b.css({
            "-webkit-border-radius": c,
            "-moz-border-radius": c,
            "-o-border-radius": c,
            "border-radius": c
        });
    }function W(b, c, d, e) {
        if (d != A && d != 0) {
            var f = W0(c, d),
                i = X0(c, d);
            b.css({
                "background-color": c,
                "filter": f,
                "background": i
            });
        }
        if (e != E) b.css({
            "background-image": z0 + e + ")",
            "background-repeat": "repeat"
        });
    }function a0(c) {
        if (t0) c.get(0).onselectstart = function () {
            return j;
        };
        c.get(0).onmousedown = function (b) {
            b.preventDefault();
        };
    }function W0(b, c) {
        var d = parseInt((parseFloat(c, l) * 255)).toString(16),
            e = "progid:DXImageTransform.Microsoft.gradient(startColorstr=#" + d + b.substring(1, 3) + b.substring(3, 5) + b.substring(5, 7) + ",endColorstr=#" + d + b.substring(1, 3) + b.substring(3, 5) + b.substring(5, 7) + ")";
        return e;
    }function X0(b, c) {
        var d = "rgba(" + b.substring(1, 3) + ", " + b.substring(3, 5) + ", " + b.substring(5, 7) + ", " + c + ")";
        return d;
    }
});
