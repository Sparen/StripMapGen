"use strict"

// This function takes a line object and icon object (required to include those scripts) and outputs to the specified target div
function loadMap(lineobj, iconobj, targetdiv) {
    let smsvg = '<svg preserveAspectRatio="xMinYMin meet" viewBox="0 0 2000 480" version="1.1" xmlns="http://www.w3.org/2000/svg">';
    smsvg += '<rect width="2000" height="480" fill="white" />';

    // Define def patterns for icons. Loading all of them.
    smsvg += '<defs>';
    for (let i = 0; i < iconobj.icons.length; i += 1) {
        let lineIconSmall = iconobj.icons[i];
        smsvg += '<pattern id="PATTERN_' + lineIconSmall.iconID + '" x="0" y="0" width="100%" height="100%" patternUnits="objectBoundingBox">';
        smsvg += lineIconSmall.iconSVG;
        smsvg += '</pattern>';
    }
    smsvg += '</defs>';

    // First, place the name of the line in the top left with its own icon
    smsvg += '<rect x="20" y="24" height="48" width="48" fill="url(#PATTERN_' + lineobj.iconID + ')" />';
    smsvg += '<text x="80" y="48" font-family="Arial" font-size="32px" fill="black" font-weight="bold" text-anchor="start" dominant-baseline="central">' + lineobj.linename + '</text>';

    // Number of stations. Used for spacing and placement
    const numstations = lineobj.stations.length;

    // Next, draw the line strokes
    smsvg += drawLine(lineobj, numstations);

    // Next, add the stations, their icons, and their names, rotated 45 degrees
    // Note that station information must be retrieved
    smsvg += drawStations(lineobj, numstations);

    smsvg += '</svg>';
    document.getElementById(targetdiv).innerHTML = smsvg;
}

// Returns SVG for the line paths
function drawLine(lineobj, numstations) {
    let linepath = "";
    for (let i = 0; i < lineobj.strokes.length; i += 1) {
        let lineStroke = lineobj.strokes[i];
        // Defaults
        const LINE_LEFT = 128;
        const LINE_RIGHT = 1600;
        let strokeStart = LINE_LEFT;
        let strokeEnd = LINE_RIGHT;
        // Note: It is possible to extend the line beyond the set bounds of 128 and 1600
        if ("startpoint" in lineStroke) {
            strokeStart = LINE_LEFT + lineStroke.startpoint * 1472/(numstations - 1);
        }
        if ("endpoint" in lineStroke) {
            strokeEnd = LINE_LEFT + lineStroke.endpoint * 1472/(numstations - 1);
        }
        let ycoord = 240;
        if ("dy" in lineStroke) {
            ycoord += lineStroke.dy;
        }
        // Additional parameters to strokes
        let additionalParameters = " ";
        if ("dasharray" in lineStroke) {
            additionalParameters += 'stroke-dasharray="' + lineStroke.dasharray + '" ';
        }
        if ("linecap" in lineStroke) {
            additionalParameters += 'stroke-linecap="' + lineStroke.linecap + '" ';
        }
        if ("startlinkheight" in lineStroke || "endlinkheight" in lineStroke) { // Vertical
            let startoffset = 0;
            let endoffset = 0;
            if ("startlinkheight" in lineStroke) {startoffset = lineStroke.startlinkheight;}
            if ("endlinkheight" in lineStroke) {endoffset = lineStroke.endlinkheight;}
            linepath += '<path d="M ' + strokeStart + ' ' + (ycoord + startoffset) + ' L ' + strokeEnd + ' ' + (ycoord + endoffset) + '" stroke="' + lineStroke.color + '" stroke-width="' + lineStroke.strokewidth + '" ' + additionalParameters + '></path>';
        } else { //Horizontal
            linepath += '<path d="M ' + strokeStart + ' ' + ycoord + ' H ' + strokeEnd + '" stroke="' + lineStroke.color + '" stroke-width="' + lineStroke.strokewidth + '" ' + additionalParameters + '></path>';
        }
    }
    return linepath;
}

// Returns SVG for the stations and their names
function drawStations(lineobj, numstations) {
    let stationsvg = "";
    for(let i = 0; i < numstations; i += 1) {
        let currstn = lineobj.stations[i];
        // First, before drawing, determine station features
        let stntypeobj;
        for (let j = 0; j < lineobj.stationtypes.length; j += 1) {
            if (lineobj.stationtypes[j].stypeID == currstn.stationtype) {
                stntypeobj = lineobj.stationtypes[j];
            }
        }
        if (stntypeobj === undefined || stntypeobj === null) {
            console.log("Error: Station type " + currstn.stationtype + " associated with station with name " + currstn.name + " was not found.");
            return;
        }
        // Handle offsets
        let ycoord = 240;
        let iconycoord = 256;
        let textycoord = 240;
        if ("dy" in currstn) {
            ycoord += currstn.dy;
            textycoord += currstn.dy;
            if ("iconshift" in currstn && currstn.iconshift) {
                iconycoord += currstn.dy;
            }
        }
        if ("textoffset" in currstn) {
            textycoord += currstn.textoffset;
        } else {
            textycoord -= 16;
        }
        let xshift = 0;
        if ("xshift" in currstn) { // Shifts are relative to station positions rather than absolute
            xshift += 1472/(numstations - 1) * currstn.xshift;
        }
        // Draw Station components
        let stationxpos = 128 + xshift + 1472/(numstations - 1) * i; // x position of station icon(s)
        for (let k = 0; k < stntypeobj.stnnodes.length; k += 1) {
            const currstntype = stntypeobj.stnnodes[k];
            let nodefill = 'white';
            if ("fcolor" in currstntype) {
                nodefill = currstntype.fcolor;
            }
            let yoffset = 0;
            if ("dy" in currstntype) {
                yoffset = currstntype.dy;
            }
            if ("componenttype" in currstntype && currstntype.componenttype === "RECT") {
                stationsvg += '<rect x="' + (stationxpos - currstntype.stationwidth/2) + '" y="' + (ycoord - currstntype.stationheight/2 + yoffset) + '" height="' + currstntype.stationheight + '" width="' + currstntype.stationwidth + '" stroke="' + currstntype.scolor + '" stroke-width="' + currstntype.stationstrokewidth + '" fill="' + nodefill + '"></rect>';
            } else {
                stationsvg += '<circle cx="' + (stationxpos) + '" cy="' + (ycoord + yoffset) + '" r="' + currstntype.stationradius + '" stroke="' + currstntype.scolor + '" stroke-width="' + currstntype.stationstrokewidth + '" fill="' + nodefill + '"></circle>';
            }
        }
        // Station Name
        stationsvg += '<text x="' + (stationxpos) + '" y="' + (textycoord) + '" font-family="Arial" font-size="16px" fill="black" font-weight="bold" text-anchor="start" dominant-baseline="alphabetic" transform="rotate(-45 ' + (stationxpos) + ' ' + (textycoord) + ')">' + currstn.name + '</text>';
        // Draw Icons
        let stationIcons = currstn.icons;
        for (let j = 0; j < stationIcons.length; j += 1) {
            stationsvg += '<rect x="' + (stationxpos - 16) + '" y="' + (iconycoord + 36*j) + '" height="32" width="32" fill="url(#PATTERN_' + stationIcons[j] + ')" />';
        }
    }
    return stationsvg;
}