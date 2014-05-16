/**
 * @description 延迟添加class
 */

function delayAddClass(elementID, delayTime, classesToAdd) {
    var element;

    if (typeof elementID === 'string') {
        element = document.getElementById(elementID);
        if (element == null) {
            console.log('no #' + elementID);
            return;
        }

        return setTimeout(function() {
            // add class
            if (typeof classesToAdd === 'string') {
                element.setAttribute('class', classesToAdd);
            }
        }, false);

    } 
    return;
}