/**
 * path-composedPath-polyfill.js v1.0.0
 * Polyfill de Event.path y Event.composedPath
 * [Back-compatibility: IE9+]
 * Copyright (c) 2021, Emanuel Rojas Vásquez
 * MIT License
 * https://github.com/erovas/path-composedPath-polyfill.js
 */
(function(event, document, window){
    if(!event.composedPath){
        Object.defineProperties(event, {
            path: {
                get: function(){
                    var target = this.target;
                    var path = [];
                    while(target.parentNode !== null){
                        path.push(target);
                        target = target.parentNode;
                    }

                    path.push(document, window);

                    return path;
                }
            },
            composedPath: {
                value: function(){
                    return this.path;
                },
                writable: true
            }
        });
    }
})(Event.prototype, document, window);