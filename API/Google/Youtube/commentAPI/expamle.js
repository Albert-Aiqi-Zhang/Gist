/* Google Analytics */
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-40631803-1']);
_gaq.push(['_trackPageview']);
(function() {
    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
})();

/* Facebook */
window.fbAsyncInit = function() {
    FB.init({
        appId: '361099960658029',
        status: true,
        xfbml: true
    });
};
(function(d) {
    var js, id = 'facebook-jssdk',
        ref = d.getElementsByTagName('script')[0];
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement('script');
    js.id = id;
    js.async = true;
    js.src = "//connect.facebook.net/en_US/all.js";
    ref.parentNode.insertBefore(js, ref);
}(document));

/*  SWFObject v2.2 <http://code.google.com/p/swfobject/>
    is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
*/
var swfobject = function() {
    var D = "undefined",
        r = "object",
        S = "Shockwave Flash",
        W = "ShockwaveFlash.ShockwaveFlash",
        q = "application/x-shockwave-flash",
        R = "SWFObjectExprInst",
        x = "onreadystatechange",
        O = window,
        j = document,
        t = navigator,
        T = false,
        U = [h],
        o = [],
        N = [],
        I = [],
        l, Q, E, B, J = false,
        a = false,
        n, G, m = true,
        M = function() {
            var aa = typeof j.getElementById != D && typeof j.getElementsByTagName != D && typeof j.createElement != D,
                ah = t.userAgent.toLowerCase(),
                Y = t.platform.toLowerCase(),
                ae = Y ? /win/.test(Y) : /win/.test(ah),
                ac = Y ? /mac/.test(Y) : /mac/.test(ah),
                af = /webkit/.test(ah) ? parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false,
                X = !+"\v1",
                ag = [0, 0, 0],
                ab = null;
            if (typeof t.plugins != D && typeof t.plugins[S] == r) {
                ab = t.plugins[S].description;
                if (ab && !(typeof t.mimeTypes != D && t.mimeTypes[q] && !t.mimeTypes[q].enabledPlugin)) {
                    T = true;
                    X = false;
                    ab = ab.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                    ag[0] = parseInt(ab.replace(/^(.*)\..*$/, "$1"), 10);
                    ag[1] = parseInt(ab.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
                    ag[2] = /[a-zA-Z]/.test(ab) ? parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0
                }
            } else {
                if (typeof O.ActiveXObject != D) {
                    try {
                        var ad = new ActiveXObject(W);
                        if (ad) {
                            ab = ad.GetVariable("$version");
                            if (ab) {
                                X = true;
                                ab = ab.split(" ")[1].split(",");
                                ag = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
                            }
                        }
                    } catch (Z) {}
                }
            }
            return {
                w3: aa,
                pv: ag,
                wk: af,
                ie: X,
                win: ae,
                mac: ac
            }
        }(),
        k = function() {
            if (!M.w3) {
                return
            }
            if ((typeof j.readyState != D && j.readyState == "complete") || (typeof j.readyState == D && (j.getElementsByTagName("body")[0] || j.body))) {
                f()
            }
            if (!J) {
                if (typeof j.addEventListener != D) {
                    j.addEventListener("DOMContentLoaded", f, false)
                }
                if (M.ie && M.win) {
                    j.attachEvent(x, function() {
                        if (j.readyState == "complete") {
                            j.detachEvent(x, arguments.callee);
                            f()
                        }
                    });
                    if (O == top) {
                        (function() {
                            if (J) {
                                return
                            }
                            try {
                                j.documentElement.doScroll("left")
                            } catch (X) {
                                setTimeout(arguments.callee, 0);
                                return
                            }
                            f()
                        })()
                    }
                }
                if (M.wk) {
                    (function() {
                        if (J) {
                            return
                        }
                        if (!/loaded|complete/.test(j.readyState)) {
                            setTimeout(arguments.callee, 0);
                            return
                        }
                        f()
                    })()
                }
                s(f)
            }
        }();

    function f() {
        if (J) {
            return
        }
        try {
            var Z = j.getElementsByTagName("body")[0].appendChild(C("span"));
            Z.parentNode.removeChild(Z)
        } catch (aa) {
            return
        }
        J = true;
        var X = U.length;
        for (var Y = 0; Y < X; Y++) {
            U[Y]()
        }
    }

    function K(X) {
        if (J) {
            X()
        } else {
            U[U.length] = X
        }
    }

    function s(Y) {
        if (typeof O.addEventListener != D) {
            O.addEventListener("load", Y, false)
        } else {
            if (typeof j.addEventListener != D) {
                j.addEventListener("load", Y, false)
            } else {
                if (typeof O.attachEvent != D) {
                    i(O, "onload", Y)
                } else {
                    if (typeof O.onload == "function") {
                        var X = O.onload;
                        O.onload = function() {
                            X();
                            Y()
                        }
                    } else {
                        O.onload = Y
                    }
                }
            }
        }
    }

    function h() {
        if (T) {
            V()
        } else {
            H()
        }
    }

    function V() {
        var X = j.getElementsByTagName("body")[0];
        var aa = C(r);
        aa.setAttribute("type", q);
        var Z = X.appendChild(aa);
        if (Z) {
            var Y = 0;
            (function() {
                if (typeof Z.GetVariable != D) {
                    var ab = Z.GetVariable("$version");
                    if (ab) {
                        ab = ab.split(" ")[1].split(",");
                        M.pv = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
                    }
                } else {
                    if (Y < 10) {
                        Y++;
                        setTimeout(arguments.callee, 10);
                        return
                    }
                }
                X.removeChild(aa);
                Z = null;
                H()
            })()
        } else {
            H()
        }
    }

    function H() {
        var ag = o.length;
        if (ag > 0) {
            for (var af = 0; af < ag; af++) {
                var Y = o[af].id;
                var ab = o[af].callbackFn;
                var aa = {
                    success: false,
                    id: Y
                };
                if (M.pv[0] > 0) {
                    var ae = c(Y);
                    if (ae) {
                        if (F(o[af].swfVersion) && !(M.wk && M.wk < 312)) {
                            w(Y, true);
                            if (ab) {
                                aa.success = true;
                                aa.ref = z(Y);
                                ab(aa)
                            }
                        } else {
                            if (o[af].expressInstall && A()) {
                                var ai = {};
                                ai.data = o[af].expressInstall;
                                ai.width = ae.getAttribute("width") || "0";
                                ai.height = ae.getAttribute("height") || "0";
                                if (ae.getAttribute("class")) {
                                    ai.styleclass = ae.getAttribute("class")
                                }
                                if (ae.getAttribute("align")) {
                                    ai.align = ae.getAttribute("align")
                                }
                                var ah = {};
                                var X = ae.getElementsByTagName("param");
                                var ac = X.length;
                                for (var ad = 0; ad < ac; ad++) {
                                    if (X[ad].getAttribute("name").toLowerCase() != "movie") {
                                        ah[X[ad].getAttribute("name")] = X[ad].getAttribute("value")
                                    }
                                }
                                P(ai, ah, Y, ab)
                            } else {
                                p(ae);
                                if (ab) {
                                    ab(aa)
                                }
                            }
                        }
                    }
                } else {
                    w(Y, true);
                    if (ab) {
                        var Z = z(Y);
                        if (Z && typeof Z.SetVariable != D) {
                            aa.success = true;
                            aa.ref = Z
                        }
                        ab(aa)
                    }
                }
            }
        }
    }

    function z(aa) {
        var X = null;
        var Y = c(aa);
        if (Y && Y.nodeName == "OBJECT") {
            if (typeof Y.SetVariable != D) {
                X = Y
            } else {
                var Z = Y.getElementsByTagName(r)[0];
                if (Z) {
                    X = Z
                }
            }
        }
        return X
    }

    function A() {
        return !a && F("6.0.65") && (M.win || M.mac) && !(M.wk && M.wk < 312)
    }

    function P(aa, ab, X, Z) {
        a = true;
        E = Z || null;
        B = {
            success: false,
            id: X
        };
        var ae = c(X);
        if (ae) {
            if (ae.nodeName == "OBJECT") {
                l = g(ae);
                Q = null
            } else {
                l = ae;
                Q = X
            }
            aa.id = R;
            if (typeof aa.width == D || (!/%$/.test(aa.width) && parseInt(aa.width, 10) < 310)) {
                aa.width = "310"
            }
            if (typeof aa.height == D || (!/%$/.test(aa.height) && parseInt(aa.height, 10) < 137)) {
                aa.height = "137"
            }
            j.title = j.title.slice(0, 47) + " - Flash Player Installation";
            var ad = M.ie && M.win ? "ActiveX" : "PlugIn",
                ac = "MMredirectURL=" + O.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + ad + "&MMdoctitle=" + j.title;
            if (typeof ab.flashvars != D) {
                ab.flashvars += "&" + ac
            } else {
                ab.flashvars = ac
            } if (M.ie && M.win && ae.readyState != 4) {
                var Y = C("div");
                X += "SWFObjectNew";
                Y.setAttribute("id", X);
                ae.parentNode.insertBefore(Y, ae);
                ae.style.display = "none";
                (function() {
                    if (ae.readyState == 4) {
                        ae.parentNode.removeChild(ae)
                    } else {
                        setTimeout(arguments.callee, 10)
                    }
                })()
            }
            u(aa, ab, X)
        }
    }

    function p(Y) {
        if (M.ie && M.win && Y.readyState != 4) {
            var X = C("div");
            Y.parentNode.insertBefore(X, Y);
            X.parentNode.replaceChild(g(Y), X);
            Y.style.display = "none";
            (function() {
                if (Y.readyState == 4) {
                    Y.parentNode.removeChild(Y)
                } else {
                    setTimeout(arguments.callee, 10)
                }
            })()
        } else {
            Y.parentNode.replaceChild(g(Y), Y)
        }
    }

    function g(ab) {
        var aa = C("div");
        if (M.win && M.ie) {
            aa.innerHTML = ab.innerHTML
        } else {
            var Y = ab.getElementsByTagName(r)[0];
            if (Y) {
                var ad = Y.childNodes;
                if (ad) {
                    var X = ad.length;
                    for (var Z = 0; Z < X; Z++) {
                        if (!(ad[Z].nodeType == 1 && ad[Z].nodeName == "PARAM") && !(ad[Z].nodeType == 8)) {
                            aa.appendChild(ad[Z].cloneNode(true))
                        }
                    }
                }
            }
        }
        return aa
    }

    function u(ai, ag, Y) {
        var X, aa = c(Y);
        if (M.wk && M.wk < 312) {
            return X
        }
        if (aa) {
            if (typeof ai.id == D) {
                ai.id = Y
            }
            if (M.ie && M.win) {
                var ah = "";
                for (var ae in ai) {
                    if (ai[ae] != Object.prototype[ae]) {
                        if (ae.toLowerCase() == "data") {
                            ag.movie = ai[ae]
                        } else {
                            if (ae.toLowerCase() == "styleclass") {
                                ah += ' class="' + ai[ae] + '"'
                            } else {
                                if (ae.toLowerCase() != "classid") {
                                    ah += " " + ae + '="' + ai[ae] + '"'
                                }
                            }
                        }
                    }
                }
                var af = "";
                for (var ad in ag) {
                    if (ag[ad] != Object.prototype[ad]) {
                        af += '<param name="' + ad + '" value="' + ag[ad] + '" />'
                    }
                }
                aa.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + ah + ">" + af + "</object>";
                N[N.length] = ai.id;
                X = c(ai.id)
            } else {
                var Z = C(r);
                Z.setAttribute("type", q);
                for (var ac in ai) {
                    if (ai[ac] != Object.prototype[ac]) {
                        if (ac.toLowerCase() == "styleclass") {
                            Z.setAttribute("class", ai[ac])
                        } else {
                            if (ac.toLowerCase() != "classid") {
                                Z.setAttribute(ac, ai[ac])
                            }
                        }
                    }
                }
                for (var ab in ag) {
                    if (ag[ab] != Object.prototype[ab] && ab.toLowerCase() != "movie") {
                        e(Z, ab, ag[ab])
                    }
                }
                aa.parentNode.replaceChild(Z, aa);
                X = Z
            }
        }
        return X
    }

    function e(Z, X, Y) {
        var aa = C("param");
        aa.setAttribute("name", X);
        aa.setAttribute("value", Y);
        Z.appendChild(aa)
    }

    function y(Y) {
        var X = c(Y);
        if (X && X.nodeName == "OBJECT") {
            if (M.ie && M.win) {
                X.style.display = "none";
                (function() {
                    if (X.readyState == 4) {
                        b(Y)
                    } else {
                        setTimeout(arguments.callee, 10)
                    }
                })()
            } else {
                X.parentNode.removeChild(X)
            }
        }
    }

    function b(Z) {
        var Y = c(Z);
        if (Y) {
            for (var X in Y) {
                if (typeof Y[X] == "function") {
                    Y[X] = null
                }
            }
            Y.parentNode.removeChild(Y)
        }
    }

    function c(Z) {
        var X = null;
        try {
            X = j.getElementById(Z)
        } catch (Y) {}
        return X
    }

    function C(X) {
        return j.createElement(X)
    }

    function i(Z, X, Y) {
        Z.attachEvent(X, Y);
        I[I.length] = [Z, X, Y]
    }

    function F(Z) {
        var Y = M.pv,
            X = Z.split(".");
        X[0] = parseInt(X[0], 10);
        X[1] = parseInt(X[1], 10) || 0;
        X[2] = parseInt(X[2], 10) || 0;
        return (Y[0] > X[0] || (Y[0] == X[0] && Y[1] > X[1]) || (Y[0] == X[0] && Y[1] == X[1] && Y[2] >= X[2])) ? true : false
    }

    function v(ac, Y, ad, ab) {
        if (M.ie && M.mac) {
            return
        }
        var aa = j.getElementsByTagName("head")[0];
        if (!aa) {
            return
        }
        var X = (ad && typeof ad == "string") ? ad : "screen";
        if (ab) {
            n = null;
            G = null
        }
        if (!n || G != X) {
            var Z = C("style");
            Z.setAttribute("type", "text/css");
            Z.setAttribute("media", X);
            n = aa.appendChild(Z);
            if (M.ie && M.win && typeof j.styleSheets != D && j.styleSheets.length > 0) {
                n = j.styleSheets[j.styleSheets.length - 1]
            }
            G = X
        }
        if (M.ie && M.win) {
            if (n && typeof n.addRule == r) {
                n.addRule(ac, Y)
            }
        } else {
            if (n && typeof j.createTextNode != D) {
                n.appendChild(j.createTextNode(ac + " {" + Y + "}"))
            }
        }
    }

    function w(Z, X) {
        if (!m) {
            return
        }
        var Y = X ? "visible" : "hidden";
        if (J && c(Z)) {
            c(Z).style.visibility = Y
        } else {
            v("#" + Z, "visibility:" + Y)
        }
    }

    function L(Y) {
        var Z = /[\\\"<>\.;]/;
        var X = Z.exec(Y) != null;
        return X && typeof encodeURIComponent != D ? encodeURIComponent(Y) : Y
    }
    var d = function() {
        if (M.ie && M.win) {
            window.attachEvent("onunload", function() {
                var ac = I.length;
                for (var ab = 0; ab < ac; ab++) {
                    I[ab][0].detachEvent(I[ab][1], I[ab][2])
                }
                var Z = N.length;
                for (var aa = 0; aa < Z; aa++) {
                    y(N[aa])
                }
                for (var Y in M) {
                    M[Y] = null
                }
                M = null;
                for (var X in swfobject) {
                    swfobject[X] = null
                }
                swfobject = null
            })
        }
    }();
    return {
        registerObject: function(ab, X, aa, Z) {
            if (M.w3 && ab && X) {
                var Y = {};
                Y.id = ab;
                Y.swfVersion = X;
                Y.expressInstall = aa;
                Y.callbackFn = Z;
                o[o.length] = Y;
                w(ab, false)
            } else {
                if (Z) {
                    Z({
                        success: false,
                        id: ab
                    })
                }
            }
        },
        getObjectById: function(X) {
            if (M.w3) {
                return z(X)
            }
        },
        embedSWF: function(ab, ah, ae, ag, Y, aa, Z, ad, af, ac) {
            var X = {
                success: false,
                id: ah
            };
            if (M.w3 && !(M.wk && M.wk < 312) && ab && ah && ae && ag && Y) {
                w(ah, false);
                K(function() {
                    ae += "";
                    ag += "";
                    var aj = {};
                    if (af && typeof af === r) {
                        for (var al in af) {
                            aj[al] = af[al]
                        }
                    }
                    aj.data = ab;
                    aj.width = ae;
                    aj.height = ag;
                    var am = {};
                    if (ad && typeof ad === r) {
                        for (var ak in ad) {
                            am[ak] = ad[ak]
                        }
                    }
                    if (Z && typeof Z === r) {
                        for (var ai in Z) {
                            if (typeof am.flashvars != D) {
                                am.flashvars += "&" + ai + "=" + Z[ai]
                            } else {
                                am.flashvars = ai + "=" + Z[ai]
                            }
                        }
                    }
                    if (F(Y)) {
                        var an = u(aj, am, ah);
                        if (aj.id == ah) {
                            w(ah, true)
                        }
                        X.success = true;
                        X.ref = an
                    } else {
                        if (aa && A()) {
                            aj.data = aa;
                            P(aj, am, ah, ac);
                            return
                        } else {
                            w(ah, true)
                        }
                    } if (ac) {
                        ac(X)
                    }
                })
            } else {
                if (ac) {
                    ac(X)
                }
            }
        },
        switchOffAutoHideShow: function() {
            m = false
        },
        ua: M,
        getFlashPlayerVersion: function() {
            return {
                major: M.pv[0],
                minor: M.pv[1],
                release: M.pv[2]
            }
        },
        hasFlashPlayerVersion: F,
        createSWF: function(Z, Y, X) {
            if (M.w3) {
                return u(Z, Y, X)
            } else {
                return undefined
            }
        },
        showExpressInstall: function(Z, aa, X, Y) {
            if (M.w3 && A()) {
                P(Z, aa, X, Y)
            }
        },
        removeSWF: function(X) {
            if (M.w3) {
                y(X)
            }
        },
        createCSS: function(aa, Z, Y, X) {
            if (M.w3) {
                v(aa, Z, Y, X)
            }
        },
        addDomLoadEvent: K,
        addLoadEvent: s,
        getQueryParamValue: function(aa) {
            var Z = j.location.search || j.location.hash;
            if (Z) {
                if (/\?/.test(Z)) {
                    Z = Z.split("?")[1]
                }
                if (aa == null) {
                    return L(Z)
                }
                var Y = Z.split("&");
                for (var X = 0; X < Y.length; X++) {
                    if (Y[X].substring(0, Y[X].indexOf("=")) == aa) {
                        return L(Y[X].substring((Y[X].indexOf("=") + 1)))
                    }
                }
            }
            return ""
        },
        expressInstallCallback: function() {
            if (a) {
                var X = c(R);
                if (X && l) {
                    X.parentNode.replaceChild(l, X);
                    if (Q) {
                        w(Q, true);
                        if (M.ie && M.win) {
                            l.style.display = "block"
                        }
                    }
                    if (E) {
                        E(B)
                    }
                }
                a = false
            }
        }
    }
}();

var txtProp =
    'textContent' in document.createElement('div') ? 'textContent' : 'innerText';

/*
     Methods for logging into Youtube
     Reference: https://developers.google.com/api-client-library/javascript/samples/samples
 */

var clientId = '486758557125.apps.googleusercontent.com',
    apiKey = 'AIzaSyAYRIW3PWpbSI85jHtmVqGBoOOyothW5K0',
    scopes = 'https://www.googleapis.com/auth/youtube',
    $videos = $('.video-wrapper');


function handleClientLoad() {
    gapi.client.setApiKey(apiKey);
    window.setTimeout(checkAuth, 1);
}

function handleAuthClick(event) {
    gapi.auth.authorize({
        client_id: clientId,
        scope: scopes,
        immediate: false
    }, handleAuthResult);
    return false;
}

function checkAuth() {
    gapi.auth.authorize({
        client_id: clientId,
        scope: scopes,
        immediate: true
    }, handleAuthResult);
}

function handleAuthResult(authResult) {
    if (authResult && !authResult.error) {
        //console.log('authed!');
        //trigger validation event on DOM
        $(document).trigger('validated');
        $videos.trigger('validated');
    } else {
        $videos.find('.login-url').click(function(e) {
            e.preventDefault();
            handleAuthClick(e);
        });
    }
}


/*Click handlers for toggle comment forms*/

(function($) {
    $(document).ready(function() {
        //console.log('init click events');
        $('.comments-toggle').click(function(e) {
            var target = $(this).data('target');
            e.preventDefault();
            $(this).toggleClass('inactive');
            $(target).toggleClass('inactive');
        });
    });

}(jQuery));

/*
    Video Events
    Reference: https://developers.google.com/youtube/js_api_reference#EventHandlers
 */

(function($) {
    var allVideos = [], //array for storing YouTube players
        transition;
    $.fn.transitionEnd = function(callback) {
        //plugin for detecting the end of a transition and then doing a callback
        $(this).one('webkitTransitionEnd otransitionend msTransitionEnd transitionend',
            function(e) {
                if (typeof callback == 'function') {
                    callback.call(this);
                }
            });
    };

    function hasTransition() {
        //detects if browser has css3 transitions
        var div = document.createElement("div");
        var p, ext, pre = ["ms", "O", "Webkit", "Moz"];
        for (p in pre) {
            if (div.style[pre[p] + "Transition"] !== undefined) {
                ext = pre[p];
                break;
            }
        }
        delete div;
        return ext;
    };

    function scroll(target, reset) {
        //method for triggering animations and video events, animations are defined in the CSS
        var selector, previousVideo, targetVideo;
        //define variable accordingly if the target entered is a jquery object
        if (target instanceof jQuery === true) {
            selector = target;
            targetVideo = target.find('.masthead').attr('data-target');
        } else {
            targetVideo = target + 'video';
            selector = $('#' + target + '-container');
        }
        var player = document.getElementById(targetVideo);
        if (reset) {
            previousVideo = $('.video-container.active');
            //stop all videos from playing
            for (var i = 0; i < allVideos.length; i += 1) {
                allVideos[i].stopVideo();
            }
        } else {
            previousVideo = selector.prev('.video-container');
        }
        $('.inactive').removeClass('inactive');
        previousVideo.removeClass('active');

        if (transition) {
            //if browser supports CSS3 transitions, listen to transitions' end
            previousVideo.transitionEnd(function() {
                selector.addClass('active');
            });
        } else {
            //if browser doesn't havs css3 transitions, make sure events still occur
            selector.addClass('active');
        }
    }

    // need to declare these functions on window or else they won't work
    window.onYouTubePlayerReady = function(playerId) {
        var p = document.getElementById(playerId),
            $masthead = $('.masthead[data-target="' + playerId + '"]'),
            $container = $masthead.parent('.video-container');

        allVideos.push(p); //add players to array

        $masthead.click(function() {
            scroll($container, true);

            _gaq.push([
                '_trackEvent',
                'Drawer Opened',
                $masthead[0].getElementsByTagName('h2')[0][txtProp]
            ]);
        });

        p.addEventListener('onStateChange', playerId + 'StateChange');

    };
    //separate event listeners for each video
    window.dropvideoStateChange = function(newState) {
        //scroll event for when the video finishes playing
        if (newState === 0) {
            scroll('crush');
        }
    };
    window.crushvideoStateChange = function(newState) {
        if (newState === 0) {
            scroll('smash');
        }
    };
    window.smashvideoStateChange = function(newState) {
        if (newState === 0) {
            scroll('impact');
        }
    };
    $(document).ready(function() {
        transition = hasTransition();
    });
}(jQuery));



/*
     Intializing youtube players and event listeners for making API calls
     References:
     https://developers.google.com/youtube/js_api_reference#Embedding
     https://developers.google.com/youtube/2.0/developers_guide_protocol_ratings
     https://developers.google.com/youtube/2.0/developers_guide_protocol_comments
 */

(function($) {
    var
    params = {
        allowScriptAccess: "always",
        allowFullScreen: "true",
        "wmode": "opaque"
    }, //for swfobject
        dimensions = {
            width: "970",
            height: "545"
        },
        successMessage = "<div class='success'>" +
            "<p>Thanks for your comment, soft citizen. -Al Lenderson</p>" +
            "<img src='images/text-thanks-comments.png' alt='' />" +
            "</div>";

    function callAPI(data, successFunction) {
        //for making api calls
        $.ajax({
            url: '../proxy/index.php',
            type: "POST",
            data: data,
            success: successFunction
        });
    }


    $(document).ready(function() {
        var $videos = $('.video-wrapper'),
            accessToken;

        $(this).on('validated', function() {
            //define accessToken when 'validated' event is triggers
            accessToken = gapi.auth.getToken().access_token;
        });

        $videos.each(function() {
            var $_this = $(this),
                youtubeID = $_this.attr('data-videoID'),
                selector = $_this.find('.video-player').attr('id'),
                commentsURL = 'https://gdata.youtube.com/feeds/api/videos/' + youtubeID + '/comments?v=2', //urls for api
                ratingURL = 'https://gdata.youtube.com/feeds/api/videos/' + youtubeID + '/ratings';
            //embed video players
            swfobject.embedSWF("https://www.youtube.com/v/" + youtubeID + "?enablejsapi=1&playerapiid=" + selector + "&version=3&controls=1&autohide=1&fs=1&&showinfo=0&rel=0",
                selector, dimensions.width, dimensions.height, "8", null, null, params, {
                    id: selector
                });

            $_this.on("validated", function() {
                //create form if user is logged in
                var $form = $_this.find('.comments').append(
                    "<form action='' class='clear' method='get' accept-charset='utf-8'>" +
                    "<textarea name='' placeholder='Share your soft comments.' id='comment-text' ></textarea>" +
                    "<button type='submit'>Post</button> " +
                    "</form>"
                ),
                    $likeButtons = $_this.find('.like-buttons'),
                    $rate, $label;

                $_this.find('.login-url').remove(); //remove login urls if user is logged in

                //create rating buttons if user is logged in
                $likeButtons.append(
                    "<a href='#' class='like-video rate'>" +
                    "<img src='../images/icon-like.png' alt='' />" +
                    "</a>" +
                    "<p>like</p>" +
                    "<a href='#' class='dislike-video rate'>" +
                    "<img src='./images/icon-dislike.png' alt='' />" +
                    "</a>"
                );
                $rate = $_this.find('.rate'); //define variables after rating buttons are created
                $label = $_this.find('.like-buttons p');

                $rate.click(function(e) {
                    var rating,
                        $button = $(this);

                    if ($button.hasClass('like-video') === true) {
                        rating = "like";
                    } else {
                        rating = "dislike";
                    }
                    var success = function(response) {
                        var $vid = $button.closest('.video-wrapper'),
                            $mast = $vid.siblings('.masthead');

                        //toggle buttons depending on user's rating
                        if (rating == "like") {
                            $button.find('img').attr('src', '../images/icon-liked.png');
                            //reset icons, if previously rated
                            $likeButtons.find('.dislike-video> img').attr('src', '../images/icon-dislike.png');
                            $label.html('liked');

                            _gaq.push([
                                '_trackEvent',
                                'Rate',
                                'Like',
                                $mast[0].getElementsByTagName('h2')[0][txtProp]
                            ]);
                        } else {
                            $button.find('img').attr('src', '../images/icon-disliked.png');
                            $likeButtons.find('.like-video> img').attr('src', '../images/icon-like.png');
                            $label.html('disliked');

                            _gaq.push([
                                '_trackEvent',
                                'Rate',
                                'Dislike',
                                $mast[0].getElementsByTagName('h2')[0][txtProp]
                            ]);
                        }
                        //console.log(response);
                    };
                    var data = {
                        type: "rate",
                        value: rating,
                        apiURL: ratingURL,
                        token: accessToken
                    };

                    e.preventDefault(e);
                    callAPI(data, success);
                });

                $form.submit(function(e) {
                    var $this = $(this),
                        $vid = $this.closest('.video-wrapper'),
                        $mast = $vid.siblings('.masthead');
                    var commentText = $this.find('textarea').val();
                    commentText = $.trim(commentText); //sanitize input for php
                    var data = {
                        type: "comment",
                        comment: commentText,
                        apiURL: commentsURL,
                        token: accessToken
                    };
                    var success = function(response) {
                        $_this.find('form').remove();
                        $_this.find('.comments').append(successMessage);
                        //console.log(response);

                        _gaq.push([
                            '_trackEvent',
                            'Comment Posted',
                            $mast[0].getElementsByTagName('h2')[0][txtProp]
                        ]);
                    };
                    e.preventDefault();

                    callAPI(data, success);
                });
            });
        });

        $('div.share-buttons > a').on('click', function() {
            var $this = $(this),
                $vid = $this.closest('.video-wrapper'),
                $mast = $vid.siblings('.masthead');

            _gaq.push([
                '_trackEvent',
                'Share Button Clicked', ~this.className.indexOf('facebook') ? 'Facebook' : 'Twitter',
                $mast[0].getElementsByTagName('h2')[0][txtProp]
            ]);
        });

        $('div.share-buttons a.facebook').on('click', function(e) {
            e.preventDefault();

            var vidID = $(this).closest('.video-container')[0].id,
                feedInfo =
                    vidID === 'drop-container' ? {
                        method: 'feed',
                        name: 'Soften the Drop',
                        link: 'http://youtu.be/F8_x8vaGbp8',
                        picture: 'http://www.hanessoftentheblow.com/images/facebook.jpg',
                        caption: '',
                        description: 'What happens when you wrap a scooter with hundreds of Hanes ComfortBlend庐 undershirts and throw it off a cliff? Will Hanes soften the blow? Join Al Lenderson to find out!'
                } : vidID === 'crush-container' ? {
                    method: 'feed',
                    name: 'Soften the Crush',
                    link: 'http://youtu.be/2QCz1xlgMyE',
                    picture: 'http://www.hanessoftentheblow.com/images/facebook.jpg',
                    caption: '',
                    description: 'Ever seen a baby grand piano dropped from 50 feet in the air? On an extremely rare baby violin wrapped in Hanes ComfortBlend庐 boxer briefs? Us either. Which is why we did it. Join Al Lenderson to find out if Hanes will soften the blow!'
                } : vidID === 'smash-container' ? {
                    method: 'feed',
                    name: 'Soften the Smash',
                    link: 'http://youtu.be/jlIu8odHtQk',
                    picture: 'http://www.hanessoftentheblow.com/images/facebook.jpg',
                    caption: '',
                    description: 'What happens when you take fruits and vegetables wrapped in Hanes ComfortBlend鈩� socks and slingshot them at a gong through fine china, eggs, and champagne flutes? Watch as Al Lenderson finds out!'
                } : vidID === 'impact-container' ? {
                    method: 'feed',
                    name: 'Soften the Impact',
                    link: 'http://youtu.be/kqDE1sxx0t0',
                    picture: 'http://www.hanessoftentheblow.com/images/facebook.jpg',
                    caption: '',
                    description: 'Can a huge target made of Hanes ComfortBlend庐 t-shirts save priceless antiques from a medieval catapult launch? Join Al Lenderson and find out!'
                } : '';

            FB.ui(
                feedInfo,
                function(response) {}
            );
        });

        $('#social a.facebook').on('click', function(e) {
            e.preventDefault();

            FB.ui({
                    method: 'feed',
                    name: 'Soften the Blow',
                    link: 'http://www.youtube.com/user/HanesOnline/softentheblow',
                    picture: 'http://www.hanessoftentheblow.com/images/facebook.jpg',
                    caption: '',
                    description: 'A devastating catapult launch. An explosive slingshot slam. A smashing piano crash. And An epic cliff drop. Will the supreme softness of Hanes ComfortBlend庐 soften the blow of these four destruction-filled experiments? Click here to unwrap the results!'
                },
                function(response) {}
            );
        });
    });
}(jQuery));