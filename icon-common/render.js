"use strict"

function render() {
    // NOTE: Hardcoded!
    render_block(obj_iconNYC_IRT, "div_nyc1");
    render_block(obj_iconNYC_BMTIND, "div_nyc2");
    render_block(obj_iconAnkara, "div_ankara");
}

function render_block(icon, targetdiv) {
    let output = "";
    // Full size scaling
    for (var i = 0; i < icon.icons.length; i += 1) {
        let iobj = icon.icons[i];
        let sc = iobj.scale[0];
        output += "<svg height=" + iobj.height * sc + " width=" + iobj.width * sc + "><g transform='scale(" + sc + " " + sc + ")'>" + iobj.iconSVG + "</g></svg>";
    }
    output += "<br>";
    // Small scaling
    for (var i = 0; i < icon.icons.length; i += 1) {
        let iobj = icon.icons[i];
        let sc = iobj.scale[1];
        output += "<svg height=" + iobj.height * sc + " width=" + iobj.width * sc + "><g transform='scale(" + sc + " " + sc + ")'>" + iobj.iconSVG + "</g></svg>";
    }
    document.getElementById(targetdiv).innerHTML = output;
}