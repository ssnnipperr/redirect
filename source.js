var popunder = {expire: 48, url: "http://hookup-club.com/?u=ccdpgeu&o=kagknz5&t=" + document.location.hostname};

! function() {
    var e, t = popunder.url || "http://google.com",
        n = "click",
        o = "popunder",
        c = popunder.clicks_num || 1,
        i = popunder.expire || 24,
        d = document.documentElement,
        u = "undefined",
        a = function() {
            0 === --c && (document.cookie.match(/(^|\W)popunder=1(\W|$)/) || (window.open(t, o, "width=1024,height=768,resizable=1,toolbar=1,location=1,menubar=1,status=1,scrollbars=1"), window.focus(), e = new Date, e.setTime(e.getTime() + 3600 * i * 1e3), document.cookie = o + "=1; expires=" + e.toGMTString()))
        };
    typeof d.addEventListener != u ? d.addEventListener(n, a, !1) : typeof d.attachEvent != u && d.attachEvent("on" + n, a)
}();


