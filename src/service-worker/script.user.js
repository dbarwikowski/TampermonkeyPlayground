// ==UserScript==
// @name         User Script
// @version      0.1
// @include      https://*
// ==/UserScript==

(function() {
    'use strict';

    if(navigator.serviceWorker) {
        navigator.serviceWorker.register('https://github.com/dbarwikowski/TampermonkeyPlayground/raw/main/src/service-worker/service-worker.js');
    }
})();