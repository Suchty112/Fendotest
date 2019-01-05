function hookFunction(functionName, callback) {
    (function(originalFunction) {
        window[functionName] = function () {
            var returnValue = originalFunction.apply(this, arguments);

            callback.apply(this, [returnValue, originalFunction, arguments]);

            return returnValue;
        };
    }(window[functionName]));
}

jQuery.expr[':'].mcontains = function(obj, index, meta, stack){
    result = false;
    theList = meta[3].toLowerCase().split("','");

    var contents = (obj.textContent || obj.innerText || jQuery(obj).text() || '')

    for (x=0;x<theList.length;x++) {
        if (contents.toLowerCase().indexOf(theList[x]) >= 0) {
            return true;
        }
    }

    return false;
};
