// ==UserScript==
// @name         SBF-fixer
// @namespace    https://code.enriz.eu
// @version      0.1.7
// @description  Fixing broken things over at svenskbridge.se, check out my code over at github.com/zirne
// @author       Erik Einarsson
// @require      https://code.jquery.com/jquery-2.1.4.min.js
// @match        http://www.svenskbridge.se/tvl/*/info
// @downloadURL  https://code.enriz.eu/repo/sbf-fixer/SBF-fixer.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
//Resize iFrame of "spader" class
var myiFrame = $( ".spader" );
myiFrame.load(function(){
    console.log("Resized your iframe, you're welcome. //Erik Einarsson. If you are reading this, you are cute. <3");
    $( ".spader" ).height("1000px");
});
})();
