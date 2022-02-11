// ==UserScript==
// @name         Level-1
// @version      0.1
// @match        https://github.com/dbarwikowski/TampermonkeyPlayground/*
// @require      https://github.com/dbarwikowski/TampermonkeyPlayground/raw/main/src/deep-nesting-test/level-2.user.js
// @grant        GM_setValue
// ==/UserScript==

(function() {
    'use strict';

    level2.foo();
})();