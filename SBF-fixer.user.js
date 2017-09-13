// ==UserScript==
// @name         SBF-fixer
// @namespace    https://code.enriz.eu
// @version      0.1
// @description  Clean up other peoples mess
// @author       Erik Einarsson
// @require https://code.jquery.com/jquery-2.1.4.min.js
// @include        http://localhost/sbf/* //For testing purposes only
// @include        http://www.svenskbridge.se/tvl/*/info
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
$(window).ready(fixEverything());

function fixEverything(){
    $( ".spader" ).height("1000px");
}
})();