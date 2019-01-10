"use strict"

function docs_load(path) {
    // Old text
    //document.getElementById("navbar").innerHTML = '<div class="sm-navbar-header">Navigation Bar</div>' + 
    //'<div class="sm-navbar"><a href="' + path + '/index.html">HOME</a></div><div class="sm-navbar"><a href="' + path + '/docs.html">DOCS</a></div><div class="sm-navbar"><a href="' + path + '/user-guide/index.html">USER GUIDE</a></div>' + 
    //'<div class="sm-navbar-header">Example Strip Maps</div><div class="sm-navbar"><a href="' + path + '/test-network/test-network.html">Test Network</a></div><div class="sm-navbar"><a href="' + path + '/test-helsinki/test-helsinki.html">Helsinki</a></div>';
    // SVG Strip Map Navbar
    document.getElementById("navbar").innerHTML = '<div style="width:75%; text-align:center"><svg style="display: block" preserveAspectRatio="xMinYMin meet" viewBox="0 0 896 240" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' +
    '<rect width="896" height="240" fill="white" /><path d="M 64 192 H 320" stroke="#FF2222" stroke-width="8"></path><path d="M 320 192 H 832" stroke="#2222FF" stroke-width="8"></path>' +
    '<text x="32" y="40" font-family="Arial" font-size="32px" fill="black" font-weight="bold" text-anchor="start" dominant-baseline="central">SVG Strip Map Generator</text>' +
    '<a xlink:href="' + path + '/index.html"><g><rect x="60" y="180" width="8" height="16" fill="#FF2222"></rect><text x="64" y="176" font-family="Arial" font-size="16px" fill="black" font-weight="bold" text-anchor="start" dominant-baseline="alphabetic" transform="rotate(-45 64 176)">Home</text></g></a>' + 
    '<a xlink:href="' + path + '/docs.html"><g><rect x="188" y="180" width="8" height="16" fill="#FF2222"></rect><text x="192" y="176" font-family="Arial" font-size="16px" fill="black" font-weight="bold" text-anchor="start" dominant-baseline="alphabetic" transform="rotate(-45 192 176)">Docs</text></g></a>' + 
    '<a xlink:href="' + path + '/user-guide/index.html"><g><circle cx="320" cy="192" r="6" fill="#FFFFFF" stroke="#000000" stroke-width="2"></circle><text x="320" y="176" font-family="Arial" font-size="16px" fill="black" font-weight="bold" text-anchor="start" dominant-baseline="alphabetic" transform="rotate(-45 320 176)">User Guide</text></g></a>' +
    '<a xlink:href="' + path + '/test-network/test-network.html"><g><rect x="444" y="180" width="8" height="16" fill="#2222FF"></rect><text x="448" y="176" font-family="Arial" font-size="16px" fill="black" font-weight="bold" text-anchor="start" dominant-baseline="alphabetic" transform="rotate(-45 448 176)">Example Network</text></g></a>' + 
    '<a xlink:href="' + path + '/test-helsinki/test-helsinki.html"><g><rect x="572" y="180" width="8" height="16" fill="#2222FF"></rect><text x="576" y="176" font-family="Arial" font-size="16px" fill="black" font-weight="bold" text-anchor="start" dominant-baseline="alphabetic" transform="rotate(-45 576 176)">Example - Helsinki</text></g></a>' +
    '<a xlink:href="' + path + '/test-internal/test-internal.html"><g><rect x="700" y="180" width="8" height="16" fill="#2222FF"></rect><text x="704" y="176" font-family="Arial" font-size="16px" fill="black" font-weight="bold" text-anchor="start" dominant-baseline="alphabetic" transform="rotate(-45 704 176)">Example - Internal</text></g></a>' +
    '<a xlink:href="' + path + '/icon-common/index.html"><g><rect x="828" y="180" width="8" height="16" fill="#2222FF"></rect><text x="832" y="176" font-family="Arial" font-size="16px" fill="black" font-weight="bold" text-anchor="start" dominant-baseline="alphabetic" transform="rotate(-45 832 176)">Icon Viewer</text></g></a>' +  
    '</svg></div>';
}