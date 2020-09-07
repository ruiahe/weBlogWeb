!(function(e) {
  var t,
    n,
    o,
    i,
    c,
    a,
    h,
    l =
      '<svg><symbol id="icon-icon-test" viewBox="0 0 1024 1024"><path d="M544 224h-64v288c0 8.832 3.584 16.832 9.376 22.656l192 191.968 45.248-45.248L544 498.752V224z" fill="#181818" ></path><path d="M512 896C300.256 896 128 723.744 128 512S300.256 128 512 128s384 172.256 384 384-172.256 384-384 384m0-832C264.576 64 64 264.576 64 512s200.576 448 448 448 448-200.576 448-448S759.424 64 512 64" fill="#181818" ></path></symbol><symbol id="icon-rili" viewBox="0 0 1024 1024"><path d="M864 192H704v-64h-64v64H384v-64h-64v64H160c-17.6 0-32 14.4-32 32v640c0 17.6 14.4 32 32 32h704c17.6 0 32-14.4 32-32V224c0-17.6-14.4-32-32-32z m-32 640H192V384h640v448zM384 512H256v-64h128v64z m192 0H448v-64h128v64z m192 0H640v-64h128v64zM384 640H256v-64h128v64z m192 0H448v-64h128v64z m192 0H640v-64h128v64zM384 768H256v-64h128v64z m192 0H448v-64h128v64z"  ></path></symbol><symbol id="icon-shouye" viewBox="0 0 1024 1024"><path d="M919.2 419.2L531.2 141.6c-11.2-8-26.4-8-36.8 0L104 419.2c-12.8 8.8-6.4 28.8 9.6 28.8H192v432c0 8.8 7.2 16 16 16h192c8.8 0 16-7.2 16-16V640h192v240c0 8.8 7.2 16 16 16h192c8.8 0 16-7.2 16-16V448h78.4c15.2 0 21.6-20 8.8-28.8z"  ></path></symbol><symbol id="icon-camera" viewBox="0 0 1024 1024"><path d="M256 320v-48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16v48h388.864c6.16 0 11.136 4.976 11.136 11.136v441.728a11.136 11.136 0 0 1-11.136 11.136H187.136a11.136 11.136 0 0 1-11.136-11.136V331.136c0-6.16 4.976-11.136 11.136-11.136H256z m43.04 0h105.92v-24.384h-105.92V320zM224 736h576V368H224v368z m475.136-336h41.728c6.16 0 11.136 4.976 11.136 11.136v41.728a11.136 11.136 0 0 1-11.136 11.136h-41.728a11.136 11.136 0 0 1-11.136-11.136v-41.728c0-6.16 4.976-11.136 11.136-11.136zM504 680a128 128 0 1 1 0-256 128 128 0 0 1 0 256z m0-48a80 80 0 1 0 0-160 80 80 0 0 0 0 160z"  ></path></symbol><symbol id="icon-home" viewBox="0 0 1024 1024"><path d="M267.168 454.624v316.48h152V598.224c0-6.144 4.992-11.12 11.136-11.12h169.728c6.16 0 11.136 4.976 11.136 11.12v172.88h136V453.6l-239.36-188.848-240.64 189.856z m-48 37.872l-39.36 31.04a16 16 0 0 1-22.464-2.656l-9.904-12.56a16 16 0 0 1 2.656-22.464l347.792-274.416a16 16 0 0 1 19.84 0l347.792 274.4a16 16 0 0 1 2.656 22.48l-9.92 12.56a16 16 0 0 1-22.464 2.656l-40.624-32.048v292.48a35.136 35.136 0 0 1-35.136 35.136H254.304a35.136 35.136 0 0 1-35.136-35.136V492.496z m248 270.608h96v-128h-96v128z"  ></path></symbol></svg>',
    v = (t = document.getElementsByTagName("script"))[
      t.length - 1
    ].getAttribute("data-injectcss");
  if (v && !e.__iconfont__svg__cssinject__) {
    e.__iconfont__svg__cssinject__ = !0;
    try {
      document.write(
        "<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>"
      );
    } catch (e) {
      console && console.log(e);
    }
  }
  function d() {
    a || ((a = !0), i());
  }
  (n = function() {
    var e,
      t,
      n,
      o,
      i,
      c = document.createElement("div");
    (c.innerHTML = l),
      (l = null),
      (e = c.getElementsByTagName("svg")[0]) &&
        (e.setAttribute("aria-hidden", "true"),
        (e.style.position = "absolute"),
        (e.style.width = 0),
        (e.style.height = 0),
        (e.style.overflow = "hidden"),
        (t = e),
        (n = document.body).firstChild
          ? ((o = t), (i = n.firstChild).parentNode.insertBefore(o, i))
          : n.appendChild(t));
  }),
    document.addEventListener
      ? ~["complete", "loaded", "interactive"].indexOf(document.readyState)
        ? setTimeout(n, 0)
        : ((o = function() {
            document.removeEventListener("DOMContentLoaded", o, !1), n();
          }),
          document.addEventListener("DOMContentLoaded", o, !1))
      : document.attachEvent &&
        ((i = n),
        (c = e.document),
        (a = !1),
        (h = function() {
          try {
            c.documentElement.doScroll("left");
          } catch (e) {
            return void setTimeout(h, 50);
          }
          d();
        })(),
        (c.onreadystatechange = function() {
          "complete" == c.readyState && ((c.onreadystatechange = null), d());
        }));
})(window);
