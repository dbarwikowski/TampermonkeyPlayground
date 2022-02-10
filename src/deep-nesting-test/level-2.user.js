// ==UserScript==
// @name         Level-2
// @version      0.1
// @require      level-3.user.js
// ==/UserScript==

function level2_config() {

}

level2_config.prototype = {
    foo: function() {
        console.log("foo");
        level3.bar();
    }
}

var level2 = new level2_config();