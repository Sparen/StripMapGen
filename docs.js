"use strict"

function docs_load(path) {
    document.getElementById("navbar").innerHTML = '<div class="sm-navbar-header">Navigation Bar</div>' + 
    '<div class="sm-navbar"><a href="' + path + '/index.html">[ HOME ]</a></div><div class="sm-navbar"><a href="' + path + '/docs.html">[ DOCS ]</a></div><div class="sm-navbar"><a href="' + path + '/user-guide/index.html">[ USER GUIDE ]</a></div>' + 
    '<div class="sm-navbar-header">Example Strip Maps</div><div class="sm-navbar"><a href="' + path + '/test-network/test-network.html">[ Test Network ]</a></div><div class="sm-navbar"><a href="' + path + '/test-helsinki/test-helsinki.html">[ Helsinki ]</a></div>';
}