"use strict"

// This function takes a line object and icon object (required to include those scripts) and outputs to the specified target div
function loadMap(lineobj, iconobj, targetdiv) {
    var smsvg = '<svg preserveAspectRatio="xMinYMin meet" viewBox="0 0 2000 480" version="1.1" xmlns="http://www.w3.org/2000/svg">';
    smsvg += '<rect width="2000" height="480" fill="white" />';

    // Define def patterns for icons. Loading all of them.
    smsvg += '<defs>';
    for (var i = 0; i < iconobj.icons.length; i += 1) {
        var lineIconSmall = iconobj.icons[i];
        smsvg += '<pattern id="PATTERN_' + lineIconSmall.iconID + '" x="0" y="0" width="100%" height="100%" patternUnits="objectBoundingBox">';
        smsvg += lineIconSmall.iconSVG;
        smsvg += '</pattern>';
    }
    smsvg += '</defs>';

    // First, place the name of the line in the top left with its own icon
    smsvg += '<rect x="20" y="24" height="48" width="48" fill="url(#PATTERN_' + lineobj.iconID + ')" />';
    smsvg += '<text x="80" y="48" font-family="Arial" font-size="32px" fill="black" font-weight="bold" text-anchor="start" dominant-baseline="central">' + lineobj.linename + '</text>';

    // Next, draw the line strokes
    for (var i = 0; i < lineobj.strokes.length; i += 1) {
        var lineStroke = lineobj.strokes[i];
        // Defaults
        var strokeStart = 128;
        var strokeEnd = 1600;
        var ycoord = 240;
        if ("dy" in lineStroke) {
            ycoord += lineStroke.dy;
        }
        smsvg += '<path d="M ' + strokeStart + ' ' + ycoord + ' H ' + strokeEnd + '" stroke="' + lineStroke.color + '" stroke-width="' + lineStroke.strokewidth + '""></path>';
    }

    // Next, add the stations, their icons, and their names, rotated 45 degrees
    // Note that station information must be retrieved
    var numstations = lineobj.stations.length;
    for(var i = 0; i < numstations; i += 1) {
        var currstn = lineobj.stations[i];
        // First, before drawing, determine station features
        var stntypeobj;
        for (var j = 0; j < lineobj.stationtypes.length; j += 1) {
            if (lineobj.stationtypes[j].stypeID == currstn.stationtype) {
                stntypeobj = lineobj.stationtypes[j];
            }
        }
        if (stntypeobj === undefined || stntypeobj === null) {
            console.log("Error: Station type " + currstn.stationtype + " associated with station with name " + currstn.name + " was not found.");
            return;
        }
        smsvg += '<circle cx="' + (128 + 1472/(numstations - 1) * i) + '" cy="240" r="' + stntypeobj.stationradius + '" stroke="' + stntypeobj.scolor + '" stroke-width="' + stntypeobj.stationstrokewidth + '" fill="white"></circle>';
        smsvg += '<text x="' + (128 + 1472/(numstations - 1) * i) + '" y="224" font-family="Arial" font-size="16px" fill="black" font-weight="bold" text-anchor="start" dominant-baseline="alphabetic" transform="rotate(-45 ' + (128 + 1472/(numstations - 1) * i) + ' 224)">' + currstn.name + '</text>';
        var stationIcons = currstn.icons;
        for (var j = 0; j < stationIcons.length; j += 1) {
            smsvg += '<rect x="' + (128 + 1472/(numstations - 1) * i - 16) + '" y="' + (256 + 36*j) + '" height="32" width="32" fill="url(#PATTERN_' + stationIcons[j] + ')" />';
        }
    }

    smsvg += '</svg>';
    document.getElementById(targetdiv).innerHTML = smsvg;
}