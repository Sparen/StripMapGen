"use strict"

// This function takes a line object and icon object (required to include those scripts) and outputs to the specified target div
function loadMap(lineobj, iconobj, targetdiv) {
    var smsvg = '<svg preserveAspectRatio="xMinYMin meet" viewBox="0 0 2000 480" version="1.1" xmlns="http://www.w3.org/2000/svg">';
    smsvg += '<rect width="2000" height="480" fill="white" />';

    // First, place the name of the line in the top left with its own icon
    smsvg += '<text x="64" y="48" font-family="Arial" font-size="32px" fill="black" font-weight="bold" text-anchor="start" dominant-baseline="central">' + lineobj.linename + '</text>';

    // Next, draw the line
    smsvg += '<path d="M 128 240 H 1600" stroke="' + lineobj.color + '" stroke-width="' + lineobj.strokewidth + '""></path>';

    // Next, add the stations and their names, rotated 45 degrees
    var numstations = lineobj.stations.length;
    for(var i = 0; i < numstations; i += 1) {
        smsvg += '<circle cx="' + (128 + 1472/(numstations - 1) * i) + '" cy="240" r="' + lineobj.stationradius + '" stroke="' + lineobj.color + '" stroke-width="' + lineobj.stationstrokewidth + '" fill="white"></circle>';
        smsvg += '<text x="' + (128 + 1472/(numstations - 1) * i) + '" y="224" font-family="Arial" font-size="16px" fill="black" font-weight="bold" text-anchor="start" dominant-baseline="alphabetic" transform="rotate(-45 ' + (128 + 1472/(numstations - 1) * i) + ' 224)">' + lineobj.stations[i].name + '</text>';
    }

    // Finally, add the icons below the station

    smsvg += '</svg>';
    document.getElementById(targetdiv).innerHTML = smsvg;
}