/**
 * Created by dongsk on 16/6/23.
 */


!function (e) {
    e["script.templates.script.object.define.Property"] || (!function () {
        var e = Object.defineProperty;
        Object.defineProperty = function (t, n, r) {
            return r.configurable !== !0 && (r.configurable = !0), e.call(Object, t, n, r)
        }
    }(), e["script.templates.script.object.define.Property"] = !0), e["script.templates.script.object.define.Properties"] || (!function () {
        Object.defineProperties = function (e, t) {
            var n;
            for (n in t)t.hasOwnProperty(n) && Object.defineProperty(e, n, t[n]);
            return e
        }
    }(), e["script.templates.script.object.define.Properties"] = !0), e["script.script.OS"] || (!function () {
        var t = navigator.userAgent;
        Object.defineProperties(e.OS = {}, {
            isIOS: {
                get: function () {
                    return /iPhone|iPad/.test(t)
                }
            }, isAndroid: {
                get: function () {
                    return /Android/.test(t)
                }
            }, isWindows: {
                get: function () {
                    return /Windows/.test(t)
                }
            }, isMac: {
                get: function () {
                    return /Mac\sOS/.test(t) && !this.isIOS
                }
            }
        })
    }(), e["script.script.OS"] = !0), e["script.script.Reset"] || (!function () {
        function t(e) {
            e.preventDefault()
        }

        window.addEventListener("DOMContentLoaded", function (n) {
            var r = document.body, a = e.OS;
            a.isWindows || a.isMac ? r.addEventListener("contextmenu", t) : "true" === r.getAttribute("data-muse-attr-native-scroll") && a.isAndroid ? r.classList.add("muse-native-scroll") : "true" === r.getAttribute("data-muse-attr-touch-scroll") ? r.classList.add("muse-native-scroll") : r.addEventListener("touchmove", t)
        })
    }(), e["script.script.Reset"] = !0), e["script.script.Array"] || (!function () {
        function e(e, t) {
            e.push(t)
        }

        function t(e, t) {
            Array.push(e, t)
        }

        function n(e, t) {
            -1 === e.indexOf(t) && e.push(t)
        }

        function e(e, t) {
            Array.push(e, t)
        }

        function r(e, t) {
            Array.remove(e, t)
        }

        "from" in Array || (Array.from = function (e) {
            for (var t = [], n = e.length, r = 0; n > r; r++)t.push(e[r]);
            return t
        }), Array.from2 = function (e) {
            return Array.isArray(e) || (e = null !== e && void 0 !== e ? [e] : []), e
        }, Array.forEach = function (e, t) {
            var n, r, a = e.length, i = 0, o = Array.from(arguments);
            for (o.splice(0, 2), o.splice(n = o.length, 0, 1, 2, 3); a > i; i++)if (o[n] = e[i], o[n + 1] = i, o[n + 2] = e, r = t.apply(void 0, o), void 0 !== r)return r
        }, Array.push = function (t, n) {
            Array.forEach(n, e, t)
        }, Array.join = function () {
            var e = [];
            return Array.forEach(arguments, t, e), e
        }, Array.unique = function (e) {
            var t = [];
            return Array.forEach(e, n, t), t
        }, Array.push = function (t, n) {
            if (n instanceof Array) {
                var r = t.length;
                return Array.forEach(n, e, t), t.length > r ? !0 : !1
            }
            return -1 === t.indexOf(n) ? (t.push(n), !0) : !1
        }, Array.remove = function (e, t) {
            var n, a = !1;
            if (t instanceof Array) {
                var i = e.length;
                return Array.forEach(t, r, e), e.length < i ? !0 : !1
            }
            for (; -1 !== (n = e.indexOf(t));)a = !0, e.splice(n, 1);
            return a
        }
    }(), e["script.script.Array"] = !0), e["script.script.Object"] || (!function () {
        function e(e, t, n) {
            var r, a;
            "object" == typeof n ? (r = n.from, a = n.to) : (r = n, a = n), e[a] = t[r]
        }

        function t(e, t, n) {
            e.hasOwnProperty(n) || (e[n] = t[n])
        }

        function n(e, t) {
            Object.applyTo(e, t)
        }

        function r(e, t, n) {
            e.push(t[n])
        }

        Object.isObject = function (e) {
            return e && "[object Object]" === e.toString()
        }, Object.value = function (e, t, n) {
            for (var r, a = t.split(/\./), i = a.length, o = 0, s = e, c = void 0 !== n; i > o; o++) {
                if (r = a[o], !Object.isObject(s)) {
                    if (!c)break;
                    s = Object.value(e, a.slice(0, o).join("."), {})
                }
                if (c && o === i - 1)return s[r] = n;
                s = s[r]
            }
            return s
        }, Object.copyTo = function (t, n, r) {
            return r = r || Object.keys(n), Array.forEach(r || Object.keys(n), e, t, n), t
        }, Object.applyTo = function (e, n) {
            return Array.forEach(Object.keys(n), t, e, n), e
        }, Object.join = function () {
            var e = {};
            return Array.forEach(arguments, n, e), e
        }, Object.values = function (e) {
            var t = [];
            return Array.forEach(Object.keys(e), r, t, e), t
        }, Object.forEach = function (e, t) {
            var n, r, a, i = Array.from(arguments);
            i.splice(0, 2), i.splice(r = i.length, 0, 1, 2, 3);
            for (n in e)if (e.hasOwnProperty(n) && (i[r] = n, i[r + 1] = e[n], i[r + 2] = e, a = t.apply(void 0, i), void 0 !== a))return a
        }
    }(), e["script.script.Object"] = !0), e["script.script.Observable"] || (!function () {
        function t() {
        }

        function n() {
            var e = this;
            e.hasOwnProperty("$bubbleEvents") || (e.$bubbleEvents = o)
        }

        function r(e, t, n) {
            Array.forEach(n, a, e, t)
        }

        function a(e, t, n) {
            e.removeEventListener(t, n)
        }

        function i(e, t, n) {
            return n && n.apply(e, t) === !1 ? !1 : void 0
        }

        e.Observable = t;
        var o = ["tap"];
        t.prototype = {
            addEventListener: function (e, t) {
                var n = this, r = n.$listeners;
                r || (r = {});
                var a = r[e];
                a ? Array.push(a, t) : r[e] = [t], n.$listeners = r
            }, removeEventListener: function (e, t) {
                var n = this.$listeners;
                if (n && (n = n[e])) {
                    var r;
                    -1 !== (r = n.indexOf(t)) && (n[r] = void 0)
                }
            }, hasEventListener: function (e) {
                var t = this.$listeners;
                return t ? t.hasOwnProperty(e) : !1
            }, dispatchEvent: function (e) {
                var t = this, r = t.$listeners, a = Array.from(arguments), o = !1;
                if (r && r.hasOwnProperty(e)) {
                    if ("string" == typeof e ? (o = !0, a[0] = t) : (e = a[a.length - 1], a.length--), t.$suspendEvents !== !0 && r && r.hasOwnProperty(e) && Array.forEach(r[e], i, t, a) === !1)return !1;
                    if (Array.remove(r[e], void 0), n.call(t), !o || t.isBubbleEvent(e)) {
                        var s, c = t.getBubbleTarget();
                        return c && (a.push(e), s = arguments.callee.apply(c, a), s === !1) ? !1 : void 0
                    }
                }
            }, enableBubbleEvent: function () {
                var e = this.$bubbleEvents;
                Array.push(e, arguments), Array.unique(e)
            }, isBubbleEvent: function (e) {
                return -1 !== this.$bubbleEvents.indexOf(e)
            }, clearEventListeners: function () {
                var e = this;
                Object.forEach(e.$listeners || [], r, e), e.resumeEvents(), delete e.$listeners
            }, suspendEvents: function () {
                this.$suspendEvents = !0
            }, resumeEvents: function () {
                delete this.$suspendEvents
            }, getBubbleTarget: function () {
            }
        }
    }(), e["script.script.Observable"] = !0), e["script.script.Feature"] || (!function () {
        var t, n = e.Feature = {};
        Object.defineProperties(n, {
            isTouch: {
                get: function () {
                    return void 0 !== t ? t : t = this.isEventSupported("touchstart")
                }
            }
        }), n.isEventSupported = function (e, t) {
            return t = t || window, "on" + e.toLowerCase() in t
        }, n.isStyleSupported = function (e, t) {
            return t = t || document.body, void 0 !== t.style[String.capitalize(e)]
        }, n.getSupportedPropertyName = function (e, t) {
            var n = "-webkit-" + e;
            return e in t ? e : n in t ? n : void 0
        }
    }(), e["script.script.Feature"] = !0), e["script.script.Selector"] || (!function () {
        function t(e) {
            return "#" + this + e
        }

        function n(n, a) {
            return Array.forEach(a.split(/\,/), r, t.bind(n.id = n.id || e.IDGenerator.id())), selectors.join(",")
        }

        function r(e, t, n, r) {
            n[t] = e.replace(i, r[0]).trim()
        }

        function a(e) {
            e.querySelector2 = function (e) {
                var t = this;
                return i.test(e) ? t.parentElement.querySelector(n(t, e)) : t.querySelector.apply(t, arguments)
            }, e.querySelectorAll2 = function (e) {
                var t = this;
                return i.test(e) ? t.parentElement.querySelectorAll(n(t, e)) : t.querySelectorAll.apply(t, arguments)
            }
        }

        var i = /^\s*>[^\,]+/g;
        a(HTMLElement.prototype), a(document);
        var o = HTMLElement.prototype;
        o.is = function (e) {
            for (var t, n = this, r = n; t = r.parentElement;) {
                if (-1 !== Array.from(t.querySelectorAll2(e)).indexOf(n))return !0;
                r = t
            }
            return !1
        }, o.findParent = function (e, t) {
            var n = this;
            do {
                if (n.is(e))return n;
                if (n === t)break;
                n = n.parentElement
            } while (n)
        }
    }(), e["script.script.Selector"] = !0), e["script.script.element.Observable"] || (!function () {
        function t() {
            if (void 0 !== a)return a;
            var t = document.body;
            return t ? a = e.Feature.isStyleSupported("transitionProperty", document.body) : !1
        }

        function n(n) {
            return i.hasOwnProperty(n) && t() ? i[n] : !e.Feature.isTouch && o.hasOwnProperty(n) ? o[n] : n
        }

        function r(e) {
            function t(e, t, n, r) {
                var a, i, o;
                if (c.test(t) ? r = r : (a = r, r = a.target), i = r.findParent(e, this), i && (o = n.apply(i, a ? [r, a] : Array.from(arguments).slice(3)), o === !1)) {
                    if (!a)return !1;
                    a.stopEvent()
                }
            }

            function r(e, t) {
                var n = t.name, r = t.selector, a = t.independent, i = t.fn;
                void 0 !== i && (r ? a === !0 ? c.test(n) ? e.querySelector(r).addEventListener2(n.replace(l, ""), i) : e.querySelector(r).addEventListener(n, i) : e.addElementEventListener(r, n, i) : c.test(n) ? e.addEventListener2(n.replace(l, ""), i) : e.addEventListener(n, i))
            }

            var a = e.addEventListener, i = e.removeEventListener;
            e.addEventListener = function (e, t) {
                var r = this, i = Array.from(arguments);
                i[0] = e = n(e), a.apply(r, i), s.addEventListener.call(r, e, t)
            }, e.removeEventListener = function (e, t) {
                var r = this, a = Array.from(arguments);
                a[0] = e = n(e), i.apply(r, a), s.removeEventListener.call(r, e, t)
            }, Object.copyTo(e, s, [{
                from: "dispatchEvent",
                to: "dispatchEvent2"
            }, "clearEventListeners", "hasEventListener", "suspendEvents", "resumeEvents", "isBubbleEvent", "enableBubbleEvent"]), e.addElementEventListener = function (e, n, r) {
                var a = this, i = t.bind(a, e, n, r);
                c.test(n) ? a.addEventListener2(n.replace(l, ""), i) : a.addEventListener(n, i)
            }, e.addEventListeners = function (e) {
                Array.forEach(e, r, this)
            }, e.addEventListener2 = function (e) {
                var t = this, n = t.hasEventListener(e);
                n || "ExtendedEventAddListened" === e || "ExtendedEventRemoveListened" === e || window.dispatchEvent2("ExtendedEventAddListened", t, e), s.addEventListener.apply(t, arguments)
            }, e.removeEventListener2 = function (e) {
                var t = this;
                s.removeEventListener.apply(t, arguments), t.hasEventListener(e) || "ExtendedEventAddListened" === e || "ExtendedEventRemoveListened" === e || window.dispatchEvent2("ExtendedEventRemoveListened", t, e)
            }, e.getBubbleTarget = function () {
                return this.parentElement
            }
        }

        var a, i = {
            animationiteration: "webkitAnimationIteration",
            animationstart: "webkitAnimationStart",
            animationend: "webkitAnimationEnd",
            transitionend: "webkitTransitionEnd"
        }, o = {
            touchstart: "mousedown",
            touchmove: "mousemove",
            touchend: "mouseup"
        }, s = e.Observable.prototype, c = /^extended\:[a-z0-9]+$/, l = /^extended\:/;
        r(HTMLElement.prototype), r(window)
    }(), e["script.script.element.Observable"] = !0), e["script.script.string.LeftPad"] || (!function () {
        String.leftPad = function (e, t, n) {
            for (var r = [e], a = 0, i = n - e.length; i > a; a++)r.unshift(t);
            return r.join("")
        }
    }(), e["script.script.string.LeftPad"] = !0), e["script.script.Date"] || (!function () {
        function e(e) {
            return String.leftPad(String(e), "0", 2)
        }

        Date.isDate = function (e) {
            return "[object Date]" === Object.prototype.toString.call(e)
        }, Date.getDateString = function (t) {
            return t.getFullYear() + "-" + e(t.getMonth() + 1) + "-" + e(t.getDate())
        }, Date.getTimeString = function (t) {
            return e(t.getHours()) + ":" + e(t.getMinutes()) + ":" + e(t.getSeconds())
        }, Date.getDateTimeString = function (e) {
            return Date.getDateString(e) + "T" + Date.getTimeString(e)
        }
    }(), e["script.script.Date"] = !0), e["script.script.String"] || (!function () {
        function e(e, t, n) {
            0 !== n && (t = String.capitalize(t)), e.push(t)
        }

        function t(e, t, n, r) {
            e.push(n), e.push("="), e.push(String.toString(r, t))
        }

        function n(e, t, n, r) {
            r[n] = String.toString(t, e)
        }

        function r(e, t) {
            var n = t.match(/([^\:]+)\:([^\;]+)/);
            e[n[1]] = n[2]
        }

        function a(e, t, n, r) {
            e.hasOwnProperty(t) && (r[t] = String.convertTo(n, e.name))
        }

        function i(e, t, n, r) {
            r[n] = String.convertTo(t, e)
        }

        function o(e, t) {
            var n;
            for (n in t)if (c.hasOwnProperty(n) && (e = c[n](e, t[n]), void 0 === e))return;
            return e
        }

        var s = /-/;
        String.capitalize = function (e) {
            return e.charAt(0).toUpperCase() + e.substr(1)
        }, String.join = function () {
            var e = Array.from(arguments);
            return Array.remove(e, void 0), Array.remove(e, null), e.join("")
        }, String.getPropertyName = function (t) {
            var n = [];
            return Array.forEach(t.split(s), e, n), n.join("")
        }, String.toString = function (e, r) {
            switch (typeof e) {
                case"string":
                case"number":
                    return String(e);
                case"boolean":
                    return e ? "true" : "false";
                case"object":
                    if (Array.isArray(e))return Array.forEach(e, n, r), Array.remove(e, void 0), e.join(" ");
                    if (Date.isDate(e))switch (r) {
                        case"date":
                            return Date.getDateString(e);
                        case"time":
                            return Date.getTimeString(e);
                        case"datetime":
                            return Date.getDateTimeString(e)
                    } else if (Object.isObject(e)) {
                        var a = [];
                        return Object.forEach(e, t, a, r), a.join(";") + ";"
                    }
            }
        }, String.convertTo = function (e, t, n) {
            if ("string" != typeof e)return e;
            switch (t) {
                case"trimedString":
                    e = e.trim();
                    break;
                case"number":
                    if (!/^\-?\d+(?:\.\d+)?$/.test(e))return;
                    e = Number(e);
                    break;
                case"boolean":
                    if (!/^(?:true|false)$/.test(e))return;
                    e = "true" === e;
                    break;
                case"date":
                    if (!/^\d{4}\-\d{2}(?:\-\d{2})?$/.test(e))return;
                    e = new Date(e);
                    break;
                case"time":
                    if (!/^\d{2}\:\d{2}(?:\:\d{2})?$/.test(e))return;
                    e = new Date("1981-10-28T" + e);
                    break;
                case"datetime":
                    if (!/^\d{4}\-\d{2}\-\d{2}T\d{2}\:\d{2}\:\d{2}$/.test(e))return;
                    e = new Date(e);
                    break;
                case"array":
                    e = e.split(/\s+/), Array.remove(e, "");
                    break;
                case"object":
                    var a = {};
                    Array.forEach(e.match(/[^\:]+\:[^\;]+/g) || [], r, a), e = a
            }
            return void 0 !== n ? o(e, n) : e
        };
        var c = {
            enumeration: function (e, t) {
                return -1 !== t.indexOf(e) ? e : void 0
            }, items: function (e, t) {
                return Object.isObject(e) ? (Object.forEach(e, a, t), e) : Array.isArray(e) ? (Array.forEach(e, i, t), e) : void 0
            }, length: function (e, t) {
                return "string" == typeof e && e.length === t ? e : void 0
            }, maxLength: function (e, t) {
                return "string" == typeof e ? e.substr(0, t) : void 0
            }, minLength: function (e, t) {
                return "string" == typeof e && e.length >= t ? e : void 0
            }, minInclusive: function (e, t) {
                return Date.isDate(e) && (e = e.getTime()), "number" == typeof e && e >= t ? e : void 0
            }, maxInclusive: function (e, t) {
                return Date.isDate(e) && (e = e.getTime()), "number" == typeof e && t >= e ? e : void 0
            }, minExclusive: function (e, t) {
                return Date.isDate(e) && (e = e.getTime()), "number" == typeof e && e > t ? e : void 0
            }, maxExclusive: function (e, t) {
                return Date.isDate(e) && (e = e.getTime()), "number" == typeof e && t > e ? e : void 0
            }
        }
    }(), e["script.script.String"] = !0), e["script.script.element.Property"] || (!function () {
        function e(e, t) {
            void 0 === e.dataset["museAttr" + String.capitalize(t)] && (e[t] = e[t])
        }

        function t(e, t) {
            var r = t.name;
            delete t.name;
            var a = t.type = t.type || "string";
            t.hasOwnProperty("defaultValue") && (t.defaultValue = String.convertTo(t.defaultValue, a, t)), t.hasOwnProperty("enumeration") && Array.forEach(t.enumeration, n, a, t), Object.defineProperty2(e, r, t)
        }

        function n(e, t, n, r, a) {
            a[r] = String.convertTo(n, e, t)
        }

        HTMLElement.prototype.initProperties = function () {
            var t = this;
            t.hasOwnProperty("$properties") && Array.forEach(t.$properties, e, t)
        };
        var r = function () {
        };
        Object.defineProperty2 = function (e, t, n) {
            if (!(t in e)) {
                e.hasOwnProperty("$properties") || (e.$properties = []), e.$properties.push(t);
                var a = n.beforeApply || r, i = n.apply || r, o = n.get || r, s = n.defaultValue, c = n.type;
                delete n.beforeApply, delete n.apply, delete n.get, delete n.defaultValue, delete n.type, Object.defineProperty(e, t, {
                    set: function (e) {
                        var r = this, o = "museAttr" + String.capitalize(t);
                        "string" == typeof e && (e = String.convertTo(e, c, n)), void 0 === e && (e = s), void 0 !== e && (a.call(r, e) !== !1 ? i.call(r, e) : e = void 0), void 0 !== e && (e = String.toString(e, n.type)), void 0 === e ? delete r.dataset[o] : r.dataset[o] = e
                    }, get: function () {
                        var e, n = this;
                        return e = o !== r ? o.call(n) : n.dataset["museAttr" + String.capitalize(t)], void 0 === e && (e = s), String.convertTo(e, c)
                    }
                })
            }
        }, Object.defineProperties2 = function (e, n) {
            Array.forEach(n, t, e)
        }
    }(), e["script.script.element.Property"] = !0), e["script.script.MUSE"] || (!function () {
        function t(e) {
            e instanceof SVGElement || (e.clearEventListeners(), Array.forEach(e.children, t))
        }

        function n(e) {
            e.$readied !== !0 && (e instanceof SVGElement || (Array.forEach(e.children, n), e.hasAttribute("data-muse-component") && e.dispatchEvent2("ready"), e.$readied = !0))
        }

        function r(t) {
            t.$initialized !== !0 && (t instanceof SVGElement || (t.hasAttribute("data-muse-component") && window.dispatchEvent2(t.dataset.museComponent.replace(o, ":") + "::initialized", t), Array.forEach(t.children, r), Array.forEach(Array.from(t.attributes), a, t), t.initProperties(), t.$initialized = !0, e.init(t)))
        }

        function a(e, t) {
            var n, r = t.name;
            i.test(r) && (n = String.getPropertyName(r.replace(i, "")), n in e && (e[n] = t.value))
        }

        var i = /^data-muse-attr-/, o = /\./g;
        e.destroy = function (e) {
            t(e || document.body)
        }, e.ready = function (e) {
            n(e || document.body)
        }, e.init = function (e) {
            r(e || document.body)
        }
    }(), e["script.script.MUSE"] = !0), e["script.script.element.ClassList"] || (!function () {
        function e(t, r, a) {
            a = a.trim(), n.test(a) ? a.split(n).forEach(function (n) {
                e(t, r, n)
            }) : t.classList[r](a)
        }

        var t = HTMLElement.prototype, n = /\s+/;
        t.addCls = function (t) {
            e(this, "add", t)
        }, t.hasCls = function (e) {
            e = e.trim();
            var t = this;
            if (n.test(e)) {
                for (var r = e.split(n), a = r.length, i = 0; a > i; i++)if (t.hasCls(r[i]) === !1)return !1;
                return !0
            }
            return t.classList.contains(e)
        }, t.removeCls = function (t) {
            e(this, "remove", t)
        }, t.radioCls = function (e) {
            for (var t, n = this, r = n.parentElement.children, a = r.length, i = 0; a > i; i++)t = r[i], t !== n ? t.removeCls(e) : t.addCls(e)
        }, t.toggleCls = function (e) {
            var t = this;
            t.hasCls(e) ? t.removeCls(e) : t.addCls(e)
        }
    }(), e["script.script.element.ClassList"] = !0), e["script.script.Bootstrap"] || (!function () {
        window.addEventListener("DOMContentLoaded", function () {
            e.init()
        }), window.addEventListener("load", function () {
            e.ready(), document.body.addCls("muse-ready")
        }), window.addEventListener("unload", function () {
            e.destroy()
        })
    }(), e["script.script.Bootstrap"] = !0), e["script.script.element.Offset"] || (!function () {
        var e = HTMLElement.prototype;
        Object.defineProperties(e, {
            offsetLeft2: {
                get: function () {
                    var e = this, t = e.offsetParent;
                    return t ? e.offsetLeft + t.offsetLeft2 : e.offsetLeft
                }
            }, offsetTop2: {
                get: function () {
                    var e = this, t = e.offsetParent;
                    return t ? e.offsetTop + t.offsetTop2 : e.offsetTop
                }
            }
        })
    }(), e["script.script.element.Offset"] = !0), e["script.script.object.QueryString"] || (!function () {
        Object.fromQueryString = function (e) {
            for (var t, n, r = e.split("&"), a = r.length, i = 0, o = {}; a > i; i++)t = r[i], n = t.split("="), o[decodeURIComponent(n[0])] = decodeURIComponent(n[1]);
            return o
        }, Object.toQueryString = function (e) {
            var t = [];
            return Object.forEach(e, function (e, n) {
                "object" == typeof n && n instanceof Date && (n = n.getTime()), "object" != typeof n && null !== n && void 0 !== n && t.push(encodeURIComponent(e) + "=" + encodeURIComponent(String(n)))
            }), t.join("&")
        }, e.searchParams = "" !== location.search ? Object.fromQueryString(location.search.replace(/^\?/, "")) : {}
    }(), e["script.script.object.QueryString"] = !0), e["script.script.string.URL"] || (!function () {
        String.urlAppend = function (e, t) {
            return e + (-1 === e.indexOf("?") ? "?" : "&") + Object.toQueryString(t)
        }
    }(), e["script.script.string.URL"] = !0), e["script.script.Ajax"] || (!function () {
        function t() {
            0 === a && n.dispatchEvent("transactioncomplete")
        }

        var n = e.Ajax = {}, r = e.Observable, a = 0, i = !1;
        n.__proto__ = r.prototype, n.begin = function () {
            i = !0
        }, n.end = function () {
            i = !1, t()
        }, n.request = function (e, n, o) {
            i && a++;
            var s, c = new XMLHttpRequest, l = o === !0 ? new r : void 0;
            if (n = n || {}, n.hasOwnProperty("query")) {
                var d, u = n.query;
                for (d in u)if (u.hasOwnProperty(d)) {
                    e = String.urlAppend(e, u);
                    break
                }
            }
            return c.open(n.method || "POST", String.urlAppend(e, {_dc: (new Date).getTime()}), !0), n.json === !0 ? (c.setRequestHeader("Accept", "application/json"), c.setRequestHeader("Content-Type", "application/json; charset=UTF-8")) : c.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"), c.addEventListener("readystatechange", function () {
                if (4 === c.readyState && 200 === c.status) {
                    if (n.hasOwnProperty("callback")) {
                        var e = c.responseText;
                        try {
                            e = JSON.parse(e)
                        } catch (r) {
                        }
                        n.callback(e) !== !1 && l && l.dispatchEvent("aftercallback", e)
                    }
                    0 !== a && (a--, t())
                }
            }), n.hasOwnProperty("params") ? (s = n.params, n.json === !0 ? c.send(JSON.stringify(s)) : c.send(Object.toQueryString(s))) : n.json === !0 ? c.send(JSON.stringify({})) : c.send(), l
        }
    }(), e["script.script.Ajax"] = !0), e["script.script.ciic2.salary3.common.Param"] || (!function () {
        var t = e.SalaryParam = {}, n = document.cookie, r = Object.fromQueryString, a = {
            jsonrpc: "2.0",
            method: "call"
        };
        Object.defineProperties(t, {
            sessionId: {
                get: function () {
                    return r(n).session_id
                }
            }, id: {
                get: function () {
                    return Number((new Date).getTime())
                }
            }
        }), t.generate = function (e) {
            var t = this;
            return Object.join(a, {params: e}, {id: t.id, session_id: t.sessionId})
        }
    }(), e["script.script.ciic2.salary3.common.Param"] = !0), e["script.script.JSON"] || (!function () {
        function e(t, n, r) {
            var a = /^\d+$/, i = n.shift(), o = n.length;
            return 0 === o ? void(t[i] = r) : ((void 0 === t[i] || null === t[i]) && (a.test(n[0]) ? t[i] = [] : t[i] = {}), void e(t[i], n, r))
        }

        JSON.getPathValue = function (e, t) {
            if ("." === t)return e;
            for (var n = t.split(/\./), r = n.length, a = 0, i = e; r > a && (i = i[n[a]], null !== i && void 0 !== i); a++);
            return i
        }, JSON.setPathValue = function (t, n, r) {
            var a = n.split(/\./), i = t || {};
            return e(i, a, r), i
        }
    }(), e["script.script.JSON"] = !0), e["script.script.ciic2.salary3.common.Pays"] || (!function () {
        function t(e, t, r) {
            Array.forEach(r.items, n, e, t, r.category)
        }

        function n(e, t, n, r) {
            var a, i, o = {category: n}, s = [];
            if (Object.copyTo(o, r), s = o.name_search.split(/\s/), a = 0, i = s.length, t) {
                for (; i > a; ++a)if (-1 !== s[a].indexOf(t))return void e.push(o)
            } else e.push(o)
        }

        function r(e, r) {
            var a, i = [], o = s.payItems, c = 0, l = o.length;
            if (1 == e.level && "引用项" !== e.value)Array.forEach(o, t, i, r); else if (2 == e.level)for (; l > c; ++c)if (a = o[c], a.category === e.value) {
                Array.forEach(a.items, n, i, r, a.category);
                break
            }
            return i
        }

        function a(e, r) {
            var a, i = [], o = s.referencePayItems, c = 0, l = o.length;
            if (1 == e.level && "薪资项" !== e.value)Array.forEach(o, t, i, r); else if (2 == e.level)for (; l > c; ++c)if (a = o[c], a.category === e.value) {
                Array.forEach(a.items, n, i, r, a.category);
                break
            }
            return i
        }

        var i, o, s = e.Pays = {};
        Object.defineProperties(s, {
            payItems: {
                set: function (e) {
                    i = e
                }, get: function () {
                    return i || []
                }
            }, referencePayItems: {
                set: function (e) {
                    o = e
                }, get: function () {
                    return o || []
                }
            }, enabled: {
                get: function () {
                    var e = this;
                    return e.payItems.length && e.referencePayItems.length
                }
            }, itemTypes: {
                get: function () {
                    var e, t = this, n = [], r = t.payItems, a = t.referencePayItems, i = r.length, o = a.length;
                    if ((i || o) && n.push({level: 1, value: "全部"}), i)for (e = 0, n.push({
                        level: 1,
                        value: "薪资项"
                    }); i > e; ++e)n.push({level: 2, value: r[e].category});
                    if (a.length)for (e = 0, n.push({level: 1, value: "引用项"}); o > e; ++e)n.push({
                        level: 2,
                        value: a[e].category
                    });
                    return n
                }
            }
        }), s.getData = function (e) {
            return Array.join(r(e), a(e))
        }, s.searchData = function (e) {
            var t = {level: 1, value: "全部"};
            return Array.join(r(t, e), a(t, e))
        }
    }(), e["script.script.ciic2.salary3.common.Pays"] = !0), e["script.script.ciic2.salary3.common.Functions"] || (!function () {
        function t(e, t, r) {
            Array.forEach(r.items, n, e, t, r.category)
        }

        function n(e, t, n, r) {
            var a, i, o = {category: n}, s = [];
            if (Object.copyTo(o, r), s = o.name_search.split(/\s/), a = 0, i = s.length, t) {
                for (; i > a; ++a)if (-1 !== s[a].indexOf(t))return void e.push(o)
            } else e.push(o)
        }

        function r(e, r) {
            var a, s = [], c = o.functions;
            if (i = 0, length = c.length, "全部" === e)Array.forEach(c, t, s, r); else for (; i < length; ++i)if (a = c[i], a.category === e) {
                Array.forEach(a.items, n, s, r, a.category);
                break
            }
            return s
        }

        var a, o = e.Functions = {};
        Object.defineProperties(o, {
            functions: {
                set: function (e) {
                    a = e
                }, get: function () {
                    return a || []
                }
            }, enabled: {
                get: function () {
                    return this.functions.length
                }
            }, itemTypes: {
                get: function () {
                    var e = [], t = this.functions, n = 0, r = t.length;
                    if (r)for (e.push("全部"); r > n; ++n)e.push(t[n].category);
                    return e
                }
            }
        }), o.getData = function (e) {
            return r(e)
        }, o.searchData = function (e) {
            return r("全部", e)
        }
    }(), e["script.script.ciic2.salary3.common.Functions"] = !0), e["script.script.Math"] || (!function () {
        var e = Math.abs, t = Math.pow, n = Math.PI;
        Math.distance = function (n, r) {
            return Math.sqrt(t(e(n), 2) + t(e(r), 2))
        }, Math.distance2 = function (e, t) {
            return Math.distance(t[0] - e[0], t[1] - e[1])
        }, Math.angle2radian = function (e) {
            return e * n / 180
        }, Math.radian2angle = function (e) {
            return 180 * e / n
        }, Math.angle = function (e, t, n, r) {
            return Math.radian2angle(Math.atan2(t - r, e - n))
        }, Math.angleStandardize = function (e) {
            return e % 360 === 0 ? 0 >= e ? 0 : 360 : (e %= 360, 0 > e && (e += 360), e)
        }
    }(), e["script.script.Math"] = !0), e["script.script.element.observable.Helper"] || (!function () {
        var t = e.Feature, n = e.ObservableHelper = {};
        n.process = function (e, n) {
            if (t.isTouch) {
                var r, a = n === !0 ? e.changedTouches : e.touches;
                1 === a.length && (r = a[0], e.pageX2 = r.pageX, e.pageY2 = r.pageY)
            } else e.pageX2 = e.pageX, e.pageY2 = e.pageY;
            return e
        }
    }(), e["script.script.element.observable.Helper"] = !0), e["script.script.element.observable.extended.Tap"] || (!function () {
        function t(e) {
            var t = this;
            c.process(e), t.$museTapStartPoint = [e.pageX2, e.pageY2], t.addEventListener("touchmove", n), t.addEventListener("touchend", r)
        }

        function n(e) {
            void 0 === o && (o = "true" === document.body.getAttribute("data-muse-attr-native-scroll") && l.isAndroid || "true" === document.body.getAttribute("data-muse-attr-touch-scroll")), o === !1 && e.preventDefault(), c.process(e);
            var t = this, n = e.pageY2, r = e.pageX2;
            (0 > n || r >= screen.width - 2) && l.isIOS && t.dispatchEvent2("touchend", e), Math.distance2(t.$museTapStartPoint, [r, n]) >= s && a(t)
        }

        function r(e) {
            var t = this;
            a(t), t.dispatchEvent2("tap", c.process(e, !0))
        }

        function a(e) {
            e.removeEventListener("touchmove", n), e.removeEventListener("touchend", r), delete e.$museTapStartPoint
        }

        function i(e) {
            this.dispatchEvent2("tap", c.process(e))
        }

        var o, s = 8, c = e.ObservableHelper, l = e.OS, d = e.Feature;
        window.addEventListener2("ExtendedEventAddListened", function (e, n, r) {
            "tap" === r && (d.isTouch ? n.addEventListener("touchstart", t) : n.addEventListener("click", i))
        }), window.addEventListener2("ExtendedEventRemoveListened", function (e, n, r) {
            "tap" === r && (d.isTouch ? n.removeEventListener("touchstart", t) : n.removeEventListener("click", i))
        })
    }(), e["script.script.element.observable.extended.Tap"] = !0), e["script.script.element.Style"] || (!function () {
        var t = HTMLElement.prototype, n = e.Feature;
        t.setStyle = function (e, t) {
            var r = this;
            "object" == typeof e ? Object.forEach(e, function (e, t) {
                r.setStyle(e, t)
            }) : r.style.setProperty(n.getSupportedPropertyName(e, r.style), t)
        }, t.isStyle = function (e, t) {
            return this.getStyle(e) === t
        }, t.getStyle = function (e) {
            var t = this;
            if (arguments.length > 1) {
                var r = {};
                return Array.forEach(Array.from(arguments), function (e) {
                    r[e] = t.getStyle(e)
                }), r
            }
            return window.getComputedStyle(t, "")[n.getSupportedPropertyName(e, t.style)]
        }, t.getStyleValue = function (e) {
            var t = this;
            return t.style.getPropertyValue(n.getSupportedPropertyName(e, t.style))
        }
    }(), e["script.script.element.Style"] = !0), e["script.html.ciic2.salary3.home.Result"] || (window.addEventListener2("html:ciic2:salary3:home:Result::initialized", function (e, t) {
        function n() {
            e.addEventListener2("tap", function (e, t) {
                var n = t.target, r = n.findParent(".result-error");
                !r && u && u.hasCls("result-error") && (u.removeCls("result-error"), u.innerHTML = d, u.parentElement.setStyle("overflow", ""))
            })
        }

        function r() {
            t.dispatchEvent2("empty")
        }

        function a() {
            t.data = {code: 1, result: ""}, t.dispatchEvent2("verify")
        }

        function i() {
            t.data = {code: 1, result: ""}, t.dispatchEvent2("apply")
        }

        function o(e) {
            t.querySelector(".result-text").innerHTML = e
        }

        function s(e) {
            var n = t.querySelector(".result-hint div");
            e.code ? (n.removeEventListener2("tap", c), l = !1, u = !1, n.removeCls("result-error"), n.innerHTML = e.result) : (n.removeCls("result-error"), n.addEventListener2("tap", c), n.innerHTML = d, l = e.msg + "<br>错误行数：" + e.lineno + "<br>" + e.error_text)
        }

        function c() {
            var e = t.querySelector(".result-hint div");
            e.addCls("result-error"), e.innerHTML = l, u = e, e.parentElement.setStyle("overflow", "initial")
        }

        var l = !1, d = "计算发生错误，请点击检查公式", u = !1;
        Object.defineProperties2(t, [{name: "titleName", apply: o, type: "string"}, {
            name: "data",
            apply: s,
            type: "string"
        }]), t.addEventListeners([{name: "extended:ready", fn: n}, {
            name: "extended:tap",
            selector: ".empty",
            fn: r,
            independent: !0
        }, {name: "extended:tap", selector: ".verify", fn: a, independent: !0}, {
            name: "extended:tap",
            selector: ".apply",
            fn: i,
            independent: !0
        }])
    }), e["script.html.ciic2.salary3.home.Result"] = !0), e["script.script.element.observable.extended.Drag"] || (!function () {
        function t(e, t) {
            var n = Math.abs, r = t.$museDragStartPoint, a = t.$museDragPreviousPoint;
            e.deltaX = e.pageX2 - r[0], e.deltaY = e.pageY2 - r[1], e.absDeltaX = n(e.deltaX), e.absDeltaY = n(e.deltaY), e.previousTime = t.$museDragPreviousTime, e.previousPageX = a[0], e.previousPageY = a[1]
        }

        function n(e) {
            var t = this;
            u.process(e), t.$museDragStartPoint = [e.pageX2, e.pageY2], t.addEventListener("touchmove", r), t.addEventListener("touchend", a)
        }

        function r(e) {
            void 0 === l && (l = "true" === document.body.getAttribute("data-muse-attr-native-scroll") && p.isAndroid || "true" === document.body.getAttribute("data-muse-attr-touch-scroll")), l === !1 && e.preventDefault(), u.process(e);
            var t = this, n = e.pageY2, r = e.pageX2;
            (0 > n || r >= screen.width - 2) && p.isIOS && t.dispatchEvent2("touchend", e), Math.distance2(t.$museDragStartPoint, [r, n]) >= d && (c(t), i.call(t, e))
        }

        function a() {
            c(this)
        }

        function i(e) {
            u.process(e);
            var n = this;
            n.dispatchEvent2("dragstart", e), n.$museDragStartPoint = [e.pageX2, e.pageY2], n.$museDragPreviousPoint = [e.pageX2, e.pageY2], n.$museDragStartTime = n.$museDragPreviousTime = Date.now(), t(e, n), n.addEventListener("touchmove", o), n.addEventListener("touchend", s)
        }

        function o(e) {
            u.process(e);
            var n, r = this, a = e.pageX2, i = e.pageY2;
            r.$museDragEvent = e, (0 > i || a >= screen.width - 2) && p.isIOS ? r.dispatchEvent2("touchend", e) : (t(e, r), r.dispatchEvent2("drag", e), n = r.$museDragPreviousPoint, n[0] = a, n[1] = i, r.$museDragPreviousTime = Date.now())
        }

        function s() {
            var e = this, t = e.$museDragEvent, n = Date.now() - t.previousTime;
            50 > n && n > 0 ? (t.velocityX = (t.pageX2 - t.previousPageX) / n, t.velocityY = (t.pageY2 - t.previousPageY) / n) : (t.velocityX = 0, t.velocityY = 0), e.removeEventListener("touchmove", o), e.removeEventListener("touchend", s), delete e.$museDragStartPoint, delete e.$museDragPreviousPoint, delete e.$museDragStartTime, delete e.$museDragPreviousTime, e.dispatchEvent2("dragend", t), delete e.$museLastedDragEvent
        }

        function c(e) {
            e.removeEventListener("touchmove", r), e.removeEventListener("touchend", a), delete e.$museDragStartPoint
        }

        var l, d = 8, u = e.ObservableHelper, p = e.OS;
        window.addEventListener2("ExtendedEventAddListened", function (e, t, r) {
            switch (r) {
                case"dragstart":
                case"drag":
                case"dragend":
                    t.hasEventListener("dragstart") || t.hasEventListener("drag") || t.hasEventListener("dragend") || t.addEventListener("touchstart", n)
            }
        }), window.addEventListener2("ExtendedEventRemoveListened", function (e, t, r) {
            switch (r) {
                case"dragstart":
                case"drag":
                case"dragend":
                    t.hasEventListener("dragstart") || t.hasEventListener("drag") || t.hasEventListener("dragend") || t.removeEventListener("touchstart", n)
            }
        })
    }(), e["script.script.element.observable.extended.Drag"] = !0), e["script.script.element.Size"] || (!function () {
        var e = HTMLElement.prototype, t = Math.max;
        Object.defineProperties(e, {
            width: {
                set: function (e) {
                    this.setStyle("width", e + "px")
                }, get: function () {
                    return t(0, this.offsetWidth)
                }
            }, height: {
                set: function (e) {
                    this.setStyle("height", e + "px")
                }, get: function () {
                    return t(0, this.offsetHeight)
                }
            }
        })
    }(), e["script.script.element.Size"] = !0), e["script.script.element.Position"] || (!function () {
        function e(e) {
            return Number(this.getStyle(e).replace(/px$/, "")) || 0
        }

        function t(e, t) {
            this.setStyle(e, t + "px")
        }

        function n() {
            return this.isStyle("position", "absolute")
        }

        var r = HTMLElement.prototype;
        Object.defineProperties(r, {
            x: {
                set: function (e) {
                    var r = this;
                    n.call(r) && t.call(r, "left", e)
                }, get: function () {
                    return e.call(this, "left")
                }
            }, y: {
                set: function (e) {
                    var r = this;
                    n.call(r) && t.call(r, "top", e)
                }, get: function () {
                    return e.call(this, "top")
                }
            }, centerX: {
                set: function (e) {
                    var t = this;
                    t.x = e - t.width / 2
                }, get: function () {
                    var e = this;
                    return e.x + e.width / 2
                }
            }, centerY: {
                set: function (e) {
                    var t = this;
                    t.y = e - t.height / 2
                }, get: function () {
                    var e = this;
                    return e.y + e.height / 2
                }
            }, x1: {
                set: function (e) {
                    var t = this;
                    t.x = e - t.width
                }, get: function () {
                    var e = this;
                    return e.x + e.width
                }
            }, y1: {
                set: function (e) {
                    var t = this;
                    t.y = e - t.height
                }, get: function () {
                    var e = this;
                    return e.y + e.height
                }
            }
        })
    }(), e["script.script.element.Position"] = !0), e["script.script.ciic2.salary3.home.formula.Item"] || (!function () {
        document.write('<link rel="stylesheet" type="text/css" href="html.ciic2.salary3.home.formula.Item/font.css">')
    }(), e["script.script.ciic2.salary3.home.formula.Item"] = !0), e["script.html.ciic2.salary3.home.formula.Item"] || (window.addEventListener2("html:ciic2:salary3:home:formula:Item::initialized", function (e, t) {
        function n() {
            o && clearTimeout(o)
        }

        function r(e) {
            var t = this;
            l = void 0 === e ? !l : e, "char" !== t.type && (t.firstElementChild.innerHTML = (l ? t.config.code : t.config.name) || "")
        }

        var a, i, o, s = /px$/, c = 10, l = !1;
        Object.defineProperties(t, {
            type: {
                set: function (e) {
                    var t = this, n = t.firstElementChild;
                    switch (e) {
                        case"function":
                            t.setStyle("padding", "0 2px"), n.setStyle("padding", "0 5px"), n.setStyle("background-color", "#e4e9eb"), a = e;
                            break;
                        case"item":
                            t.setStyle("padding", "0 2px"), n.setStyle("padding", "0 5px"), n.setStyle("background-color", "#efeff4"), a = e;
                            break;
                        case"char":
                            t.setStyle("padding", "0 0"), n.setStyle("padding", "0 0"), n.setStyle("background-color", ""), a = e
                    }
                }, get: function () {
                    return a || "char"
                }
            }, config: {
                set: function (e) {
                    var t = this, n = t.firstElementChild;
                    e instanceof Object && (i = e.name || "", n.innerHTML = (l ? e.code : e.name) || "", "&nbsp;" === i ? (n.innerHTML = "", n.addCls("muse-html-ciic2-salary3-home-formula-item-space")) : "enter" === i && (n.innerHTML = "", n.addCls("muse-html-ciic2-salary3-home-formula-item-enter")), t.dataset.item = Object.toQueryString(e), void 0 === o && (o = setTimeout(function () {
                        t.dispatchEvent2("itemready"), t.addCls("muse-html-ciic2-salary3-home-formula-item-show")
                    }, c)))
                }, get: function () {
                    var e = this, t = e.dataset.item, n = t ? Object.fromQueryString(t) : {};
                    return n.itemType = e.type, n
                }
            }, value: {
                get: function () {
                    return i || ""
                }
            }, itemWidth: {
                get: function () {
                    return Number(this.getStyle("width").replace(s, ""))
                }
            }
        }), Object.defineProperties2(t, []), t.addEventListeners([]), t.destroy = n, t.switchContent = r
    }), e["script.html.ciic2.salary3.home.formula.Item"] = !0), e["script.html.ciic2.salary3.home.formula.Cursor"] || (window.addEventListener2("html:ciic2:salary3:home:formula:Cursor::initialized", function (e, t) {
        function n() {
            m && clearTimeout(m), v.show(), h.hide()
        }

        function r() {
            h.show(), v.hide()
        }

        function a() {
            m = setTimeout(r, g)
        }

        function i(e) {
            var t = e[0], r = e[1];
            n(), document.activeElement !== y && y.focus(), v.x = t, v.y = r, h.x = t, h.y = r, a()
        }

        function o() {
            m && clearTimeout(m), v.hide(), h.hide(), document.activeElement === y && y.blur()
        }

        function s(e, n) {
            for (var r, a = 0, i = n.length; i > a; ++a)r = n[a], " " === r ? r = "&nbsp;" : "\n" === r && (r = "enter"), t.dispatchEvent2(e, r)
        }

        function c(e, t) {
            var n, r = 0, a = Math.min(e.length, t.length);
            if (e !== t) {
                for (; a > r && e[r] === t[r]; ++r);
                for (e = e.substr(r), t = t.substr(r), r = e.length, n = t.length; r >= 0 && n >= 0 && (--r, --n, e[r] === t[n]););
                e = e.substr(0, r + 1),
                    t = t.substr(0, n + 1), "" !== t && s("normalkeydelete", t), s("normalkeyadd", e)
            }
        }

        function l(e) {
            return 9 === e.keyCode ? (e.preventDefault(), y.value = f = "", n(), t.dispatchEvent2("normalkeyadd", "&nbsp;"), t.dispatchEvent2("normalkeyadd", "&nbsp;"), t.dispatchEvent2("normalkeyadd", "&nbsp;"), t.dispatchEvent2("normalkeyadd", "&nbsp;"), !0) : void 0
        }

        function d(e) {
            return 8 === e.keyCode ? (e.preventDefault(), y.value = f = "", n(), t.dispatchEvent2("deletekeypress"), !0) : void 0
        }

        function u(e) {
            var r, a = e.keyCode;
            switch (a) {
                case 37:
                    r = "left";
                    break;
                case 38:
                    r = "up";
                    break;
                case 39:
                    r = "right";
                    break;
                case 40:
                    e.code && -1 !== e.code.indexOf("Numpad") || (r = "down")
            }
            return void 0 !== r && (n(), t.dispatchEvent2("directionkeypress", r)), void 0 !== r
        }

        function p(e) {
            46 === e.keyCode && (e.preventDefault(), y.value = f = "")
        }

        var f, m, v = t.querySelector2("div.muse-html-ciic2-salary3-home-formula-cursor-static"), h = t.querySelector2("div.muse-html-ciic2-salary3-home-formula-cursor-dynamic"), y = t.querySelector2("textarea"), g = 10;
        y.value = f = "", Array.forEach([v, h], function (e) {
            e.show = function () {
                var e = this;
                "none" === e.getStyle("display") && e.setStyle("display", "")
            }, e.hide = function () {
                var e = this;
                "none" !== e.getStyle("display") && e.setStyle("display", "none")
            }
        }), y.addEventListener("keydown", function (e) {
            return l(e) || d(e) || u(e) ? void a() : void p(e)
        }), y.oninput = function () {
            var e = y.value;
            return "" === e ? void(f = e) : (c(e, f), void(f = e))
        }, Object.defineProperties2(t, []), t.addEventListeners([]), t.showAt = i, t.hide = o
    }), e["script.html.ciic2.salary3.home.formula.Cursor"] = !0), e["script.html.ciic2.salary3.home.Formula"] || (window.addEventListener2("html:ciic2:salary3:home:Formula::initialized", function (t, n) {
        function r(e) {
            a(e, "function"), a({name: "("}, "char"), a({name: ")"}, "char"), --P, T && d()
        }

        function a(t, n) {
            var r = A.cloneNode(!0);
            r.addEventListener2("itemready", c), w.appendChild(r), e.init(r), e.ready(r), x.splice(P, 0, r), ++P, r.type = n || "item", r.config = t, r.switchContent(C)
        }

        function i(e) {
            for (var t, n = x.length - 1; n >= 0;)t = x[n].config.code, void 0 !== t && t === e.code && o(n), --n
        }

        function o(t) {
            var n = x[void 0 !== t ? t : P - 1];
            n && (n.destroy(), e.destroy(n), w.removeChild(n), --P, 0 > P && (P = 0), x.splice(void 0 !== t ? t : P, 1), c())
        }

        function s() {
            w.innerHTML = "", Array.forEach(x, function (t) {
                t.destroy(), e.destroy(t)
            }), delete x, x = [], P = 0, c()
        }

        function c() {
            for (var e, t, r = 0, a = x.length, i = p(n) - k, o = D + I, s = k, c = D; a > r; ++r)e = x[r], t = e.itemWidth, "enter" !== e.value ? t > i - s ? s === k ? (e.x = s, e.y = c, c += D + I, o += D + I) : (c += D + I, o += D + I, e.x = k, e.y = c, s = k + t) : (e.x = s, e.y = c, s += t) : (e.x = s, e.y = c, s = k, c += D + I, o += D + I);
            o += D, n.height = o + 2, T && d()
        }

        function l(e) {
            var t, r, a, i = e[0], o = e[1], s = 0, c = 0, l = x.length;
            if (o < top)return P = 0, void d();
            if (o > n.clientHeight - D)return P = x.length, void d();
            for (t = Math.floor((o - D) / (D + I)); l > c; ++c) {
                if (a = x[c], s === t) {
                    if (k > i) {
                        P = "enter" === a.value ? c : c - 1;
                        break
                    }
                    if ("enter" === a.value) {
                        P = c;
                        break
                    }
                    if (i >= a.x && i < a.x + a.itemWidth / 2) {
                        P = c;
                        break
                    }
                    if (i >= a.x + a.itemWidth / 2 && i <= a.x + a.itemWidth) {
                        P = c + 1;
                        break
                    }
                }
                if ("enter" === a.value ? ++s : r && "enter" !== r.value && a.y > r.y && ++s, s > t) {
                    P = c;
                    break
                }
                if (c === l - 1) {
                    P = c + 1;
                    break
                }
                r = a
            }
            d()
        }

        function d() {
            for (var e, t, n = 0, r = x.length, a = k, i = D; r > n && n !== P; ++n)t = x[n], "enter" === t.value ? (a = k, i += D + I) : e && "enter" !== e.value && t.y > e.y ? (a = k + t.itemWidth, i += D + I) : a += t.itemWidth, e = t;
            T = !0, O.showAt([a, i])
        }

        function u(e) {
            var t, r, a, i, o = e[0], s = e[1], c = 0, l = 0, d = x.length;
            if (s < top)return null;
            if (s > n.clientHeight - D)return null;
            for (t = Math.floor((s - D) / (D + I)); d > l; ++l) {
                if (a = x[l], c === t) {
                    if (k > o)return null;
                    if ("enter" === a.value)return null;
                    if (o >= a.x && o <= a.x + a.itemWidth)return i = a.type, "function" === i || "item" === i ? a : null
                }
                if ("enter" === a.value ? ++c : r && "enter" !== r.value && a.y > r.y && ++c, c > t)return null;
                if (l === d - 1)return null;
                r = a
            }
        }

        function p(e) {
            return Number(e.getStyle("width").replace(j, ""))
        }

        function f(e, t) {
            a({name: t}, "char")
        }

        function m(e, t) {
            for (var n, r = P - 1; r >= 0; --r)if (n = x[r], "char" === n.type && n.value === t)return void o(r);
            o()
        }

        function v() {
            o()
        }

        function h(e, t) {
            var r, a, e = O.firstElementChild;
            if ("left" === t) {
                if (0 === P)return;
                --P, d()
            } else if ("right" === t) {
                if (P === x.length)return;
                ++P, d()
            } else"up" === t ? (r = e.x, a = e.y - (I + D) / 2, a >= D && n.showCursorAt([r, a])) : "down" === t && (r = e.x, a = e.y + I + D, a <= n.clientHeight - D && n.showCursorAt([r, a]))
        }

        function y(e, t) {
            var n = t.offsetX, r = t.offsetY, e = u([n, r]);
            e ? (S = e.cloneNode(!0), w.appendChild(S), L = x.indexOf(e), S.x = n, S.y = r) : (S = null, L = void 0)
        }

        function g(e, t) {
            var r = t.offsetX, a = t.offsetY;
            S && (S.x = r, S.y = a, n.showCursorAt([r, a]))
        }

        function E(e, t) {
            var e, r = t.offsetX, a = t.offsetY;
            S && (n.showCursorAt([r, a]), e = x.splice(L, 1)[0], x.splice(P >= L ? P - 1 : P, 0, e), w.removeChild(S), c(), S = null, L = void 0)
        }

        function b(e) {
            var t = 0, n = x.length;
            for (C = void 0 === e ? !C : e; n > t; ++t)x[t].switchContent(C);
            c()
        }

        var S, L, A = n.querySelector2('div[data-muse-component="html.ciic2.salary3.home.formula.Item"]'), w = n.querySelector2("div.muse-html-ciic2-salary3-home-formula-body"), O = n.querySelector2('div[data-muse-component="html.ciic2.salary3.home.formula.Cursor"]'), x = [], P = 0, T = !1, C = !1, j = /px$/, k = 14, D = 12, I = 24;
        Object.defineProperties(n, {
            formula: {
                set: function (e) {
                    for (var t, r = 0, a = e.length; a > r; ++r)t = e[r], n.addItem(t, t.itemType)
                }, get: function () {
                    for (var e = [], t = 0, n = x.length; n > t; ++t)e.push(x[t].config);
                    return e
                }
            }, rule: {
                get: function () {
                    for (var e, t = this.formula, n = 0, r = t.length, a = ""; r > n; ++n)e = t[n].name, a += "&nbsp;" === e ? " " : "enter" === e ? "\n" : e;
                    return a
                }
            }
        }), t.addEventListener2("tap", function (e, t) {
            var r = t.target.findParent('[data-muse-component="html.ciic2.salary3.home.Formula"]');
            r && r === n ? (n.showCursorAt([t.offsetX, t.offsetY]), T = !0) : (T = !1, O.hide())
        }), t.addEventListener("resize", c), Object.defineProperties2(n, []), n.addEventListeners([{
            name: "extended:normalkeyadd",
            selector: 'div[data-muse-component="html.ciic2.salary3.home.formula.Cursor"]',
            fn: f,
            independent: !0
        }, {
            name: "extended:normalkeydelete",
            selector: 'div[data-muse-component="html.ciic2.salary3.home.formula.Cursor"]',
            fn: m,
            independent: !0
        }, {
            name: "extended:deletekeypress",
            selector: 'div[data-muse-component="html.ciic2.salary3.home.formula.Cursor"]',
            fn: v,
            independent: !0
        }, {
            name: "extended:directionkeypress",
            selector: 'div[data-muse-component="html.ciic2.salary3.home.formula.Cursor"]',
            fn: h,
            independent: !0
        }, {name: "extended:dragstart", fn: y}, {name: "extended:drag", fn: g}, {
            name: "extended:dragend",
            fn: E
        }]), n.addFunction = r, n.addItem = a, n.deleteItemViaData = i, n.deleteItem = o, n.deleteAllItems = s, n.relayout = c, n.showCursorAt = l, n.showCursorAtItemIndex = d, n.switchContent = b
    }), e["script.html.ciic2.salary3.home.Formula"] = !0), e["script.html.ciic2.salary3.home.Item"] || (window.addEventListener2("html:ciic2:salary3:home:Item::initialized", function (t, n) {
        function r() {
            n.querySelectorAll(".item");
            t.addEventListener2("dragstart", function (e, r) {
                var o = r.target, s = o.findParent(".item");
                s && (v = s.cloneNode(!0), h.appendChild(v), v.addCls("target-item"), y = r.pageX2 - s.offsetLeft2 + f.scrollLeft, g = r.pageY2 - s.offsetTop2, t.addEventListener2("drag", a), t.addEventListener2("dragend", i), n.dispatchEvent2("itemdragstart", [r.pageX2, r.pageY2]))
            }), n.addEventListener2("tap", function (e, t) {
                var r = t.target, a = r.findParent(".item-close"), i = !1;
                a && (i = a.parentElement, b.splice(b.indexOf(i.dataset.data.name), 1), n.dispatchEvent2("itemremove", JSON.parse(i.dataset.data || "{}")), i.remove(), o())
            }), n.addEventListener("dblclick", function (e) {
                var t = e.target, r = t.findParent(".item");
                r && n.dispatchEvent2("itemdblclick", JSON.parse(r.dataset.data || "{}"))
            }), E && n.setStyle("height", "139px"), o()
        }

        function a(e, t) {
            v.addCls("target-move-item"), v.setStyle("left", t.pageX2 - y + "px"), v.setStyle("top", t.pageY2 - g + "px"), n.dispatchEvent2("itemdragmove", [t.pageX2, t.pageY2], JSON.parse(v.dataset.data || "{}"))
        }

        function i(e, r) {
            t.removeEventListener2("drag", a), t.removeEventListener2("dragend", i), n.dispatchEvent2("itemdragend", [r.pageX2, r.pageY2], JSON.parse(v.dataset.data || "{}")), v.remove(), v = null, g = 0, y = 0
        }

        function o() {
            var e = m.querySelectorAll(".item"), t = e.length;
            m.setStyle("width", 140 * t + "px")
        }

        function s(e) {
            if (-1 === b.indexOf(e.name)) {
                var t = document.createElement("DIV");
                n.setStyle("display", ""), t.addCls("item"), t.dataset.data = JSON.stringify(e), t.innerHTML = '<div class="item-close"></div><div class="item-name">' + e.name + '</div><input class="item-num" type="text" value="' + (e.value || 0) + '" />', b.push(e.name), m.appendChild(t), o()
            }
        }

        function c() {
            for (var e = n.querySelectorAll(".item"), t = 0, r = e.length, a = []; r > t; t++) {
                var i = JSON.parse(e[t].dataset.data || "{}"), o = e[t].querySelector(".item-num").value;
                "float" == i.value_type ? o = parseFloat(o) : "integer" == i.value_type && (o = parseInt(o)), i.value = o, a.push(i)
            }
            return a
        }

        function l(e) {
            m.innerHTML = "";
            for (var t = 0, n = e.length; n > t; t++)s(e[t])
        }

        function d() {
            m.innerHTML = "", b.length = 0, o()
        }

        function u() {
            for (var e = n.querySelectorAll(".item"), t = 0, r = e.length; r > t; t++) {
                var a = JSON.parse(e[t].dataset.data).value_type, i = e[t].querySelector(".item-num");
                "float" == a ? (value = i.value, S.test(value) ? value = parseFloat(value) : value = 0, i.value = value) : "integer" == a && (value = i.value, S.test(value) ? value = parseInt(value) : value = 0, i.value = value)
            }
        }

        function p() {
            for (var e, t = this.data, n = 0, r = t.length, a = {}; r > n; ++n)e = t[n], a[e.name] = [e.value_type, e.value];
            return a
        }

        var f = n.querySelector2(".item-wrapper"), m = n.querySelector2(".item-container"), v = !1, h = document.body, y = 0, g = 0, E = e.OS.isWindows, b = [], S = /(?:^\d+$)|(?:^\d+\.\d*$)|(?:^\d*\.\d+$)/;
        n.setStyle("display", "none"), Object.defineProperties2(n, [{
            name: "data",
            apply: l,
            get: c,
            type: "object"
        }, {name: "parameterData", get: p, type: "object"}]), n.addEventListeners([{
            name: "extended:ready",
            fn: r
        }]), n.appendData = s, n.empty = d, n.verify = u, n.calcWidth = o
    }), e["script.html.ciic2.salary3.home.Item"] = !0), e["script.html.ciic2.salary3.home.Tab"] || (window.addEventListener2("html:ciic2:salary3:home:Tab::initialized", function (e, t) {
        function n(e, n) {
            var a = n.target.findParent('div[data-muse-component="html.ciic2.salary3.home.Tab"] > div'), i = r.indexOf(a);
            a && i > -1 && 2 > i && (a.radioCls("html-ciic2-salary3-home-tab-chosen"), t.dispatchEvent2("tabselect", i))
        }

        var r = Array.from(t.children);
        Object.defineProperties2(t, []), t.addEventListeners([{name: "extended:tap", fn: n}])
    }), e["script.html.ciic2.salary3.home.Tab"] = !0), e["script.html.system.layout.Card"] || (window.addEventListener2("html:system:layout:Card::initialized", function (e, t) {
        function n(e) {
            return e < this.children.length
        }

        function r(e) {
            this.children[e].radioCls("activate")
        }

        Object.defineProperties2(t, [{
            name: "activeIndex",
            beforeApply: n,
            apply: r,
            type: "number",
            defaultValue: "0"
        }]), t.addEventListeners([])
    }), e["script.html.system.layout.Card"] = !0), e["script.html.ciic2.salary3.home.Selector"] || (window.addEventListener2("html:ciic2:salary3:home:Selector::initialized", function (e, t) {
        function n(e) {
            var t = e || {};
            r(t)
        }

        function r(e) {
            var t = e.result.functions, n = e.result.reference_payitems, r = e.result.payitems, o = document.querySelector(".selector-card-reference"), s = document.querySelector(".selector-card-payitems");
            s.previousElementSibling.firstElementChild.innerHTML = "薪资项(" + r.length + ")", o.previousElementSibling.firstElementChild.innerHTML = "引入项(" + n.length + ")", f(n, o, "引入项"), f(r, s, "薪资项"), m(t), console.log("解析数据完毕");
            var c = document.querySelectorAll(".drag-item");
            v(c), g(c), E();
            var l = document.querySelectorAll(".search_value");
            a(l[0]), a(l[1]), i()
        }

        function a(e) {
            var e = e, t = e.nextElementSibling, n = t.children[1];
            e.onfocus = function () {
                c(t), t.parentElement.previousElementSibling.style.display = "block", Array.forEach(A.querySelectorAll("ul"), function (e, t) {
                    e.hasCls("active") && (e.removeCls("active"), "SPAN" == e.previousElementSibling.children[1].tagName && (e.previousElementSibling.children[1].innerHTML = "+"))
                })
            }, n.addEventListener2("tap", function (e, t) {
                e.parentElement.previousElementSibling.value = "", e.parentElement.parentElement.previousElementSibling.children[0].innerHTML = "", e.parentElement.previousElementSibling.focus()
            })
        }

        function i() {
            var e = document.querySelectorAll(".search_value");
            e[0].onkeyup = function () {
                var e = S.querySelector(".search_value").value, t = S.querySelector(".selector-card－back").querySelectorAll(".drag-item"), n = null, r = null, a = null;
                S.querySelector(".selector-search-inputbox").children[1];
                e = e.toLowerCase();
                var i = S.querySelector(".selector-search-output div");
                i.innerHTML = "", "" != e && Array.forEach(t, function (t, a) {
                    n = t.dataset.name_search, n = n.replace(/\s+/g, ""), target = n.match(e), target && target[0] && (r = t.cloneNode(!0), i.appendChild(r))
                }), a = i.querySelectorAll(".drag-item"), v(a), g(a)
            }, e[1].onkeyup = function () {
                var e = S.querySelectorAll(".search_value")[1].value, t = S.querySelector(".selector-card－formula").querySelectorAll(".drag-item"), n = null, r = null, a = null, i = S.querySelector(".selector-search-inputbox").children[1];
                c(i), e = e.toLowerCase();
                var o = S.querySelectorAll(".selector-search-output div")[1];
                o.innerHTML = "", "" != e && Array.forEach(t, function (t, a) {
                    n = t.dataset.name_search, target = n.match(e), target && target[0] && (r = t.cloneNode(!0), o.appendChild(r))
                }), a = o.querySelectorAll(".drag-item"), v(a), g(a)
            }
        }

        function o(e, t) {
            var n = t.target;
            A.activeIndex = n.getAttribute("data-index"), n.hasCls("selector-active") || (n.addCls("selector-active"), w.removeCls("selector-active"), w = n), Array.forEach(A.querySelectorAll("ul"), function (e, t) {
                e.hasCls("active") && (e.removeCls("active"), "SPAN" == e.previousElementSibling.children[1].tagName && (e.previousElementSibling.children[1].innerHTML = "+"))
            }), s()
        }

        function s() {
            var e = S.querySelectorAll(".selector-search-output"), t = S.querySelectorAll(".search_value");
            Array.forEach(e, function (e) {
                e.style.display = "none", e.querySelector("div").innerHTML = ""
            }), Array.forEach(t, function (e) {
                e.value = ""
            }), l(S.querySelectorAll(".selector-search-inputbox")[0].children[1]), l(S.querySelectorAll(".selector-search-inputbox")[1].children[1])
        }

        function c(e) {
            e.children[0].style.display = "none", e.children[1].style.display = "block"
        }

        function l(e) {
            e.children[0].style.display = "block", e.children[1].style.display = "none"
        }

        function d(e, t) {
            var n = t.target, r = n.findParent(".selector-itemer");
            if (s(), r) {
                var a = r.nextElementSibling;
                a ? a.getElementsByTagName("li")[0] ? p(a) : (a = a.parentElement.nextElementSibling, p(a)) : (a = r.parentElement.nextElementSibling, p(a))
            }
        }

        function u(e, t) {
            var n = t.target, r = n.findParent(".selector-itemer");
            if (s(), r) {
                var a = r.nextElementSibling;
                a ? a.getElementsByTagName("li")[0] ? p(a) : (a = a.parentElement.nextElementSibling, p(a)) : (a = r.parentElement.nextElementSibling, p(a))
            }
        }

        function p(e) {
            var e = e;
            e && (e.hasCls("active") ? (e.removeCls("active"), "SPAN" == e.previousElementSibling.children[1].tagName && (e.previousElementSibling.children[1].innerHTML = "+")) : (e.addCls("active"), "SPAN" == e.previousElementSibling.children[1].tagName && (e.previousElementSibling.children[1].innerHTML = "-")))
        }

        function f(e, t) {
            var e = e, t = t;
            Array.forEach(e, function (e, n) {
                var r = document.createElement("li"), a = document.createElement("div"), i = document.createElement("ul"), o = document.createElement("span"), s = document.createElement("span"), c = document.createTextNode(e.category + "(" + e.items.length + ")"), l = document.createTextNode("+");
                o.appendChild(c), s.appendChild(l), a.appendChild(o), a.appendChild(s), a.setAttribute("class", "selector-itemer"), r.appendChild(a), r.appendChild(i), t.appendChild(r), Array.forEach(e.items, function (e, t) {
                    var n = document.createElement("li"), r = document.createElement("div"), a = document.createTextNode(e.name);
                    r.setAttribute("class", "drag-item"), r.dataset.info = JSON.stringify(e), r.dataset.name_search = e.name_search, r.dataset.description = e.description, r.dataset.code = e.code, r.dataset.name = e.name, r.dataset.value_type = e.value_type, r.dataset.functions = "false", r.appendChild(a), n.appendChild(r), i.appendChild(n)
                })
            })
        }

        function m(e) {
            var t = document.querySelector(".selector-card－formula");
            Array.forEach(e, function (e, n) {
                var r = document.createElement("li"), a = document.createElement("div"), i = document.createElement("ul"), o = document.createElement("span"), s = document.createElement("span"), c = document.createTextNode(e.category + "(" + e.items.length + ")"), l = document.createTextNode("+");
                o.appendChild(c), s.appendChild(l), a.appendChild(o), a.appendChild(s), a.setAttribute("class", "selector-itemer"), r.appendChild(a), r.appendChild(i), t.appendChild(r), Array.forEach(e.items, function (e, t) {
                    var n = document.createElement("li"), r = document.createElement("div"), a = document.createTextNode(e.name);
                    r.setAttribute("class", "drag-item"), r.dataset.info = JSON.stringify(e), r.dataset.name_search = e.name_search, r.dataset.description = e.description, r.dataset.code = e.code, r.dataset.name = e.name, r.dataset.functions = "true", r.appendChild(a), n.appendChild(r), i.appendChild(n)
                })
            })
        }

        function v(n) {
            var r = n;
            Array.forEach(r, function (n, r) {
                n.addEventListener2("dragstart", function (n, r) {
                    var a = n, i = a.parentElement.parentElement.parentElement.parentElement;
                    b = i.hasCls("selector-card－back") ? i : a.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement, a && (targetItem = a.cloneNode(!0), targetItem.children[0] && targetItem.children[0].remove(), document.body.appendChild(targetItem), targetItem.addCls("drag-item drag-box"), O = r.pageX2 - a.offsetLeft2, x = r.pageY2 - a.offsetTop2 + b.scrollTop, e.addEventListener2("drag", h), e.addEventListener2("dragend", y), t.dispatchEvent2("itemdragstart", [r.pageX2, r.pageY2]))
                })
            })
        }

        function h(e, n) {
            return targetItem ? (targetItem.setStyle("left", n.pageX2 - O + "px"), targetItem.setStyle("top", n.pageY2 - x + "px"), t.dispatchEvent2("itemdragmove", [n.pageX2, n.pageY2]), void 0) : !1
        }

        function y(e, n) {
            return e.removeEventListener2("drag", h), e.removeEventListener2("dragend", y), targetItem ? (t.dispatchEvent2("itemdragend", [n.pageX2, n.pageY2], JSON.parse(targetItem.dataset.info || "{}"), targetItem.dataset.functions), targetItem.remove(), targetItem = null, x = 0, void(O = 0)) : !1
        }

        function g(e) {
            var e = e;
            Array.forEach(e, function (e, n) {
                e.addEventListener("dblclick", function (n) {
                    t.dispatchEvent2("itemdblclick", JSON.parse(e.dataset.info || "{}"), e.dataset.functions)
                })
            })
        }

        function E() {
            var e = document.querySelectorAll(".drag-item"), t = null, n = null;
            Array.forEach(e, function (e) {
                e.addEventListener2("tap", function (e, r) {
                    var a = e.dataset.description;
                    e.children[0] ? e.iconChangeKey ? (e.children[0].style.display = "block", e.style.background = "#efeff4", e.iconChangeKey = !1) : (e.children[0].style.display = "none", e.style.background = "#fff", e.iconChangeKey = !0) : ("false" != a ? (t = document.createElement("p"), t.innerHTML = a, e.appendChild(t)) : (t = document.createElement("p"), n = document.createTextNode("说明：暂无。"), t.appendChild(n), e.appendChild(t)), e.children[0].style.display = "block", e.iconChangeKey = !1, e.style.background = "#efeff4")
                })
            })
        }

        var b, S = t.querySelector2(".selector-box"), L = t.querySelector2(".selector-item"), A = t.querySelector2('[data-muse-component="html.system.layout.Card"]'), w = (t.querySelector2(".selector-card－back"), t.querySelector2(".selector-card－formula"), t.querySelector2(".drag-item"), L.children[0]), O = 0, x = 0;
        Object.defineProperties(t, {
            data: {
                set: function (e) {
                    n(e)
                }
            }
        }), Object.defineProperties2(t, []), t.addEventListeners([{
            name: "extended:tap",
            selector: ".selector-item",
            fn: o,
            independent: !0
        }, {name: "extended:tap", selector: ".selector-card－back", fn: d, independent: !0}, {
            name: "extended:tap",
            selector: ".selector-card－formula",
            fn: u,
            independent: !0
        }])
    }), e["script.html.ciic2.salary3.home.Selector"] = !0), e["script.html.ciic2.salary3.Home"] || (window.addEventListener2("html:ciic2:salary3:Home::initialized", function (t, n) {
        function r(e, t) {
            var n = t[0], r = t[1];
            n >= g.offsetLeft2 && n <= g.offsetLeft2 + g.clientWidth && r >= g.offsetTop2 && r <= g.offsetTop2 + g.clientHeight && (n -= g.offsetLeft2, r -= g.offsetTop2, g.showCursorAt([n, r]))
        }

        function a(e, t, n, r) {
            var a = t[0], i = t[1];
            a >= g.offsetLeft2 && a <= g.offsetLeft2 + g.clientWidth && i >= g.offsetTop2 && i <= g.offsetTop2 + g.clientHeight ? ("true" == r ? g.addFunction(n) : (g.addItem(n), E.appendData(n)), g.showCursorAtItemIndex()) : a >= E.offsetLeft2 && a <= E.offsetLeft2 + E.clientWidth && i >= E.offsetTop2 && i <= E.offsetTop2 + E.clientHeight && "false" == r && E.appendData(n)
        }

        function i(e, t, n) {
            "true" == n ? g.addFunction(t) : (g.addItem(t), E.appendData(t))
        }

        function o(e, t) {
            var n = t[0], r = t[1];
            n >= g.offsetLeft2 && n <= g.offsetLeft2 + g.clientWidth && r >= g.offsetTop2 && r <= g.offsetTop2 + g.clientHeight && (n -= g.offsetLeft2, r -= g.offsetTop2, g.showCursorAt([n, r]))
        }

        function s(e, t, n) {
            g.addItem(n), g.showCursorAtItemIndex()
        }

        function c(e, t) {
            g.addItem(t)
        }

        function l(e, t) {
            g.deleteItemViaData(t)
        }

        function d() {
            g.deleteAllItems()
        }

        function u(e) {
            E.verify(), S.request("/web/dataset/call_kw/hr.payroll.payitem/validate_calculation", {
                params: A.generate({
                    model: "hr.payroll.payitem",
                    method: "validate_calculation",
                    args: [],
                    kwargs: {payitem_id: x, parameter: E.parameterData, rule: g.rule, is_save: 2}
                }), callback: function (e) {
                    b.data = JSON.getPathValue(e, "result")
                }, json: !0
            })
        }

        function p(e) {
            E.verify(), S.request("/web/dataset/call_kw/hr.payroll.payitem/validate_calculation", {
                params: A.generate({
                    model: "hr.payroll.payitem",
                    method: "validate_calculation",
                    args: [],
                    kwargs: {payitem_id: x, parameter: E.parameterData, rule: g.rule, is_save: 1}
                }), callback: function (e) {
                    var t = JSON.getPathValue(e, "result");
                    t.code ? S.request("/web/dataset/call_kw/hr.payroll.payitem/save_state", {
                        params: A.generate({
                            model: "hr.payroll.payitem",
                            method: "save_state",
                            args: [],
                            kwargs: {payitem_id: x, parameter: E.data, rule: g.formula}
                        }), callback: function (e) {
                            b.data = {code: 1, result: "保存成功"}
                        }, json: !0
                    }) : b.data = t
                }, json: !0
            })
        }

        function f(e, t) {
            g.switchContent(0 === t ? !1 : !0)
        }

        function m() {
            function e() {
                ++r, 2 === r && (b.titleName = t.result.payitem_name, y.data = t, n.result.rule.length ? g.formula = n.result.rule : v(t.result.formula), n.result.parameter.length ? E.data = n.result.parameter : h(t.result.parameters))
            }

            var t, n, r = 0;
            S.request("/web/dataset/call_kw/hr.payroll.payitem/get_payitem_and_function", {
                params: A.generate({
                    model: "hr.payroll.payitem",
                    method: "get_payitem_and_function",
                    args: [x],
                    kwargs: {}
                }), callback: function (n) {
                    var r = JSON.getPathValue(n, "result");
                    t = n, w.payItems = r.payitems, w.referencePayItems = r.reference_payitems, O.functions = r.functions, e()
                }, json: !0
            }), S.request("/web/dataset/call_kw/hr.payroll.payitem/last_state", {
                params: A.generate({
                    model: "hr.payroll.payitem",
                    method: "last_state",
                    args: [x],
                    kwargs: {}
                }), callback: function (t) {
                    n = t, e()
                }, json: !0
            })
        }

        function v(e) {
            for (var t, n, r = 0, a = e.length; a > r; ++r)t = e[r], t.code ? (n = w.searchData(t.expression), n.length ? g.addItem(n[0], "item") : (n = O.searchData(t.expression), g.addItem(n[0], "function"))) : (t = t.expression, g.addItem({name: t}, "char"))
        }

        function h(e) {
            for (var t, n, r = 0, a = e.length; a > r; ++r)t = e[r], n = w.searchData(t.name)[0], n.value = t.value[1], E.appendData(n)
        }

        var y = n.querySelector2('div[data-muse-component="html.ciic2.salary3.home.Selector"]'), g = n.querySelector2('div[data-muse-component="html.ciic2.salary3.home.Formula"]'), E = n.querySelector2('div[data-muse-component="html.ciic2.salary3.home.Item"]'), b = n.querySelector2('div[data-muse-component="html.ciic2.salary3.home.Result"]'), S = e.Ajax, L = e.searchParams, A = e.SalaryParam, w = e.Pays, O = e.Functions, x = Number(L.active_id) || 1458;
        Object.defineProperties2(n, []), n.addEventListeners([{
            name: "extended:itemdragmove",
            selector: 'div[data-muse-component="html.ciic2.salary3.home.Selector"]',
            fn: r,
            independent: !0
        }, {
            name: "extended:itemdragend",
            selector: 'div[data-muse-component="html.ciic2.salary3.home.Selector"]',
            fn: a,
            independent: !0
        }, {
            name: "extended:itemdblclick",
            selector: 'div[data-muse-component="html.ciic2.salary3.home.Selector"]',
            fn: i,
            independent: !0
        }, {
            name: "extended:itemdragmove",
            selector: 'div[data-muse-component="html.ciic2.salary3.home.Item"]',
            fn: o,
            independent: !0
        }, {
            name: "extended:itemdragend",
            selector: 'div[data-muse-component="html.ciic2.salary3.home.Item"]',
            fn: s,
            independent: !0
        }, {
            name: "extended:itemdblclick",
            selector: 'div[data-muse-component="html.ciic2.salary3.home.Item"]',
            fn: c,
            independent: !0
        }, {
            name: "extended:itemremove",
            selector: 'div[data-muse-component="html.ciic2.salary3.home.Item"]',
            fn: l,
            independent: !0
        }, {
            name: "extended:empty",
            selector: 'div[data-muse-component="html.ciic2.salary3.home.Result"]',
            fn: d,
            independent: !0
        }, {
            name: "extended:verify",
            selector: 'div[data-muse-component="html.ciic2.salary3.home.Result"]',
            fn: u,
            independent: !0
        }, {
            name: "extended:apply",
            selector: 'div[data-muse-component="html.ciic2.salary3.home.Result"]',
            fn: p,
            independent: !0
        }, {
            name: "extended:tabselect",
            selector: 'div[data-muse-component="html.ciic2.salary3.home.Tab"]',
            fn: f,
            independent: !0
        }, {name: "extended:ready", fn: m}])
    }), e["script.html.ciic2.salary3.Home"] = !0)
}(window.MUSE = window.MUSE || {});

