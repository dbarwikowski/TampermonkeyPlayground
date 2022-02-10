// ==UserScript==
// @name         Level-3
// @version      0.1
// ==/UserScript==

function level3_config() {
}

level3_config.prototype = {
    bar: function() {
        console.log("bar");
    }
}

var level3 = new level3_config();