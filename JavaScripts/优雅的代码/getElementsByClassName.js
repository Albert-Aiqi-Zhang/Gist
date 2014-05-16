/**
 * 兼容老版本浏览器实现getElementsByClassName
 * @param  {[type]} node      [DOM中搜索起点]
 * @param  {[type]} classname [搜索的类名]
 * @return {[type]}           [相应的节点列表]
 */
function getElementsByClassName(node, classname) {
    if (node.getElementsByClassName) {
        return node.getElementsByClassName(classname);
    } else {
        var results = new Array();
        var elems = node.getEmementsByTagName("*");
        for (var i=0; i<elems.length; i++) {
            if (elems[i].ClassName.indexOf(classname) != -1) {
                results[results.length] = elemsp[i];
            }
        }
        return results;
    }
}