function delaySetClass(elementID, delayTime, classesToAdd, classesToRemove){
    setTimeout(function () {
        if (typeof elementID === 'string'){
            element = document.getElementById(elementID);
            if (element == null) {
                console.log('no #' + elementID);
                return;
            }
        }
        if(typeof classesToAdd === 'string'){
            element.classList.add(classesToAdd);
        }else if (typeof classesToAdd === 'object' && 'length' in classesToAdd){
            for(var i = 0, il = classesToAdd.length; i < il; i++){
                element.classList.add(classesToAdd[i]);
            }
        }
        if(typeof classesToRemove === 'string'){
            element.classList.remove(classesToRemove);
        }else if (typeof classesToRemove === 'object' && 'length' in classesToRemove){
            for(var i = 0, il = classesToRemove.length; i < il; i++){
                element.classList.remove(classesToRemove[i]);
            }
        }
    }, delayTime);
};