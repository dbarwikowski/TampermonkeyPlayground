// ==UserScript==
// @name         Level-2
// @version      0.1
// @require      https://github.com/dbarwikowski/TampermonkeyPlayground/raw/main/src/deep-nesting-test/level-3.user.js
// ==/UserScript==

function level2_config() {

}

level2_config.prototype = {
    foo: function() {
        GM_setValue('test', 'test-value');
        console.log("foo");
        level3.bar();
    }
}

var level2 = new level2_config();