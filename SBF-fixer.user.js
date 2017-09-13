// ==UserScript==
// @name         SBF-fixer
// @namespace    https://code.enriz.eu
// @version      0.1.5
// @description  Clean up other peoples mess
// @author       Erik Einarsson
// @require      https://code.jquery.com/jquery-2.1.4.min.js
// @match        http://www.svenskbridge.se/tvl/*/info
// @downloadURL  https://github.com/zirne/SBF-fixer.user.js/blob/master/SBF-fixer.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
//Resize iFrame of "spader" class
var myiFrame = $( ".spader" );
myiFrame.load(function(){
    console.log("Resized your iframe, you're welcome. //Erik Einarsson");
    $( ".spader" ).height("1000px");
});
})();
