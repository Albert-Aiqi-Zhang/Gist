/**
 * 获取元素的坐标，返回一个mouse对象，包含x, y
 */

function captureMouse(element) {
    var mouse = {x:0, y:0};
    element.addEventListener('mousemove', function(event) {
        var x, y;
        if (event.pageX || event.pageY) {
            x = event.pageX;
            y = event.pageY;
        } else {
            x = event.clientX + document.body.scroolLeft + document.documentElement.scroolLeft;
            y = event.clientY + document.body.scroolTop + document.documentElement.scroolTop;
            x -= element.offsetLeft;
            y -= element.offsetTop;
            mouse.x = x;
            mouse.y = y;
        }
    }, false);
    return mouse;
}