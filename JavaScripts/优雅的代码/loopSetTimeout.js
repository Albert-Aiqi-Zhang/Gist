/**
 * loopCount: 循环次数
 * loopInterval：循环间隔时间
 * 一切都要在循环间隔时间之内完成
 * 
 */
window.addEventListener('load', function() {
    assertload();
}, false);


var curTime = new Date().getTime();

function assertload() {
    loopCount = 3;
    currentLoop = 0;
    loopInterval = 3000;

    var funcLoop = function() {
      if (currentLoop++ < loopCount) {
        console.log('loopInterval立刻执行的: ' + (new Date().getTime() - curTime));
        setTimeout(function() {
          console.log('根据循环次数决定延时的(第一次立刻，其余延迟1s): ' + (new Date().getTime() - curTime));
          return setTimeout(function() {
            console.log('内置延迟1s的: ' + (new Date().getTime() - curTime));
          }, 1000);
        }, currentLoop>1? 1000: 0);
        return setTimeout(funcLoop, loopInterval);
      }
    }
    return funcLoop();
  }