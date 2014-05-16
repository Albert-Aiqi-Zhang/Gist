  var ease = function(t, b, c, d) {
    return -c * ((t = t / d - 1) * t * t * t - 1) + b
  }; //缓动算法
  var pos = 20;
  var b = document.documentElement.scrollTop || document.body.scrollTop, //当前页面位置
    t = 0,
    c = pos - b,
    d = 30; //初始值,次数,
  (function() {
    if (t < d) {
      ++t;
      window.scrollTo(0, ease(t, b, c, d));
      setTimeout(arguments.callee, 15);
    } else {
      window.scrollTo(0, pos - 1);
    }
  })();