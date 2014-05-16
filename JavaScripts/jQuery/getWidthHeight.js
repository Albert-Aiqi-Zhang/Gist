/**
 * 之前都是通过原生 javascript 的 document 属性来获取对象的宽高，如 document.documentElement.clientWidth, document.documentElement.scrollWidth 等等，今天才发现直接使用 $(document)、$(window) 就可以简单快捷的获取到了。
 */


var str = '';
str += 'DIV容器宽度：' + $('#div').width() + '，高度：' + $('#div').height() + '<br />';
str += '网页宽度：' + $(document).width() + '，高度：' + $(document).height() + '<br />';
str += '浏览器窗口宽度：' + $(window).width() + '，高度：' + $(window).height() + '<br />';
$('#msg').append(str);