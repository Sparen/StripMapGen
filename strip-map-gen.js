"use strict"

// This function takes a line object and icon object (required to include those scripts) and outputs to the specified target div
function SMG_loadMap(lineobj, iconobj, targetdiv) {
    let smsvg = '<svg preserveAspectRatio="xMinYMin meet" viewBox="0 0 2000 480" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">';
    smsvg += '<rect width="2000" height="480" fill="white" stroke="#EEEEEE" stroke-width="2"/>';

    // Load icon patterns into the SVG
    smsvg += SMG_setPatternDefinitions(iconobj);

    // Load other line-specific data
    SMG_lineObjSetDefault(lineobj);

    // First, place the name of the line in the top left with its own icon
    let numicons = lineobj.iconID.length;
    let linenamexoffset = 0; // Offset (based on size of icons)
    for (let j = 0; j < numicons; j += 1) {
        let tgtheight = 48;
        let tgtwidth = 48;
        // Search list of icons and retrieve the height + width
        let lineIcon = SMG_getIconByID(iconobj, lineobj.iconID[j]);
        if (!(lineIcon === null)) {
            tgtheight = lineIcon.height;
            tgtwidth = lineIcon.width;
        }
        smsvg += '<rect x="' + (20 + linenamexoffset) + '" y="24" height="' + tgtheight + '" width="' + tgtwidth + '" fill="url(#PATTERN_' + lineobj.iconID[j] + '_SCALE1)" />';
        linenamexoffset += tgtwidth;
    }
    smsvg += '<text x="' + (32 + linenamexoffset) + '" y="48" font-family="' + lineobj.fonttype +'" font-size="32px" fill="black" font-weight="bold" text-anchor="start" dominant-baseline="central">' + lineobj.linename + '</text>';

    // Number of stations. Used for spacing and placement
    const numstations = lineobj.stations.length;

    // Next, draw the line strokes
    smsvg += SMG_drawLine(lineobj, numstations);

    // Next, add the stations, their icons, and their names, rotated 45 degrees
    // Note that station information must be retrieved
    smsvg += SMG_drawStations(lineobj, numstations, iconobj);

    smsvg += '</svg>';
    document.getElementById(targetdiv).innerHTML = smsvg;
}

// Define def patterns for icons. Loading all of them.
// Make sure to load them for all scales (hardcoded to 2)
function SMG_setPatternDefinitions(iconobj) {
    let pdefs = '<defs>';
    for (let i = 0; i < iconobj.icons.length; i += 1) {
        let lineIcon = iconobj.icons[i];
        let sc = lineIcon.scale;
        pdefs += '<pattern id="PATTERN_' + lineIcon.iconID + '_SCALE1" x="0" y="0" width="100%" height="100%" patternUnits="objectBoundingBox">';
        pdefs += "<g transform='scale(" + sc[0] + " " + sc[0] + ")'>" + lineIcon.iconSVG + "</g>";
        pdefs += '</pattern>';
        pdefs += '<pattern id="PATTERN_' + lineIcon.iconID + '_SCALE2" x="0" y="0" width="100%" height="100%" patternUnits="objectBoundingBox">';
        pdefs += "<g transform='scale(" + sc[1] + " " + sc[1] + ")'>" + lineIcon.iconSVG + "</g>";
        pdefs += '</pattern>';
    }
    pdefs += '</defs>';
    return pdefs;
}

// Returns SVG for the line paths
function SMG_drawLine(lineobj, numstations) {
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
function SMG_drawStations(lineobj, numstations, iconobj) {
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
        // Station Name fields
        let stationnamefont = "Arial";
        let stationnamefontsize = "16px";
        if ("stnfonttype" in stntypeobj) {
            stationnamefont = stntypeobj.stnfonttype;
        }
        if ("stnfontsize" in stntypeobj) {
            stationnamefontsize = stntypeobj.stnfontsize;
        }
        // Handle offsets
        let ycoord = 240;
        let iconycoord = 240;
        let textycoord = 240;
        if ("dy" in currstn) {
            ycoord += currstn.dy;
            textycoord += currstn.dy;
            if ("iconshift" in currstn && currstn.iconshift) {
                iconycoord += currstn.dy;
            }
        }
        if ("iconoffset" in currstn) {
                iconycoord += currstn.iconoffset;
            } else {
                iconycoord += 16; // Default is 16 pixels from path
            }
        if ("textoffset" in currstn) {
            textycoord += currstn.textoffset;
        } else {
            textycoord -= 16; // Default is 16 pixels from path
        }
        let xshift = 0;
        if ("xshift" in currstn) { // Shifts are relative to station positions rather than absolute
            xshift += 1472/(numstations - 1) * currstn.xshift;
        }
        // Draw Station components
        let stationxpos = 128 + xshift + 1472/(numstations - 1) * i; // x position of station icon(s)
        for (let k = 0; k < stntypeobj.stnnodes.length; k += 1) {
            const currstntype = stntypeobj.stnnodes[k];
            let stationstrokewidth = '4px';
            if ("stationstrokewidth" in currstntype) {
                stationstrokewidth = currstntype.stationstrokewidth;
            }
            let nodefill = 'white';
            if ("fcolor" in currstntype) {
                nodefill = currstntype.fcolor;
            }
            let nodestroke = 'black';
            if ("scolor" in currstntype) {
                nodestroke = currstntype.scolor;
            }
            let yoffset = 0;
            if ("dy" in currstntype) {
                yoffset = currstntype.dy;
            }
            if ("componenttype" in currstntype && currstntype.componenttype === "RECT") {
                stationsvg += '<rect x="' + (stationxpos - currstntype.stationwidth/2) + '" y="' + (ycoord - currstntype.stationheight/2 + yoffset) + '" height="' + currstntype.stationheight + '" width="' + currstntype.stationwidth + '" stroke="' + nodestroke + '" stroke-width="' + stationstrokewidth + '" fill="' + nodefill + '"></rect>';
            } else if ("componenttype" in currstntype && currstntype.componenttype === "CUSTOM") {
                stationsvg += '<g transform="translate(' + (stationxpos - currstntype.stationwidth/2) + ' ' + (ycoord - currstntype.stationheight/2 + yoffset) + ')">' + currstntype.stationsvg + '</g>';
            } else {
                stationsvg += '<circle cx="' + (stationxpos) + '" cy="' + (ycoord + yoffset) + '" r="' + currstntype.stationradius + '" stroke="' + nodestroke + '" stroke-width="' + stationstrokewidth + '" fill="' + nodefill + '"></circle>';
            }
        }
        // Station Name(s)
        stationsvg += '<text x="' + (stationxpos) + '" y="' + (textycoord) + '" font-family="' + stationnamefont + '" font-size="' + stationnamefontsize + '" fill="black" font-weight="bold" text-anchor="start" dominant-baseline="alphabetic" transform="rotate(-45 ' + (stationxpos) + ' ' + (textycoord) + ')">';
        let stationNames = currstn.name;
        for (let j = 0; j < stationNames.length; j += 1) {
            let stnNameDY = 16; // In the future, needs to be a factor of font size
            if (j === 0) {stnNameDY = 0;} // Prevent the first name from shifting downwards - dy should only be applied to non-first elements
            // Note that x position shifted using stnNameDY: This forces alignment on the bottom 
            stationsvg += '<tspan x="' + (stationxpos + stnNameDY * j) + '" dy="' + (stnNameDY) + '">' + stationNames[j] + '</tspan>';
        }
        stationsvg += '</text>';
        // Draw Icons
        let stationIcons = currstn.icons;
        let totalmaxht = 0;
        // For every array (visually, horizontal line) of icons
        for (let j = 0; j < stationIcons.length; j += 1) {
            let currmaxht = 0; // Max height for any icon on current line
            let currline = stationIcons[j];
            let iconfound = false; // Whether or not the icon was found. If not found, defaults to printing the text.
            // First run, get the max height for this row
            for (let k = 0; k < currline.length; k += 1) {
                let curricon = currline[k]; // Name of current icon in the line
                // Search list of icons and retrieve the max height
                let lineIcon = SMG_getIconByID(iconobj, curricon);
                if (!(lineIcon === null)) {
                    if (lineIcon.height * lineIcon.scale[1] > currmaxht) {
                        currmaxht = lineIcon.height * lineIcon.scale[1];
                    }
                    iconfound = true;
                }
            }
            // If icon not  found, default to a value for height. TODO: Height should depend on font size of text
            if (!iconfound) {
                currmaxht = lineobj.texticonfontsize;
            }
            // Second run, render the icons
            // For each icon in the line, get necessary information for rendering
            for (let k = 0; k < currline.length; k += 1) {
                let curricon = currline[k];
                let curriconht = 0;
                let curriconwd = 0;
                let lineIcon = SMG_getIconByID(iconobj, curricon);
                if (!(lineIcon === null)) {
                    curriconht = lineIcon.height * lineIcon.scale[1];
                    curriconwd = lineIcon.width * lineIcon.scale[1];
                }
                // Icon was not found. Display text. DOES NOT SUPPORT MULTIPLE ARBITRARY TEXT FIELDS IN A ROW.
                if (!iconfound) {
                    let currx = stationxpos // Station position. Assumes centered in x dir around station
                    stationsvg += '<text x="' + currx + '" y="' + (iconycoord + totalmaxht + lineobj.texticonfontsize/2) + '" font-family="' + lineobj.fonttype + '" font-size="' + lineobj.texticonfontsize + 'px" fill="black" text-anchor="middle" dominant-baseline="central">' + curricon + '</text>';
                } else {
                    // NOTE: Current x position rendering assumes icons in same line have same width
                    let iconoffset = curriconwd * k - curriconwd * (currline.length - 1)/2; // e.g. if two icons, they're centered around the main coord
                    let currx = (stationxpos - curriconwd/2 + iconoffset) // Station position, offset left to center rect. Then depends on number of elements in row
                    stationsvg += '<rect x="' + currx + '" y="' + (iconycoord + totalmaxht) + '" height="' + curriconht + '" width="' + curriconwd + '" fill="url(#PATTERN_' + curricon + '_SCALE2)" />';
                }
            }
            totalmaxht += currmaxht * (1.125); // 1.125 multiplier puts buffer space between rows vertically
        }
    }
    return stationsvg;
}

/* ---------------- Accessory Functions ---------------- */

// Returns the icon object associated with the provided ID, or null if DNE
function SMG_getIconByID(iconobj, iconID) {
    for (let i = 0; i < iconobj.icons.length; i += 1) {
        let lineIcon = iconobj.icons[i];
        if (lineIcon.iconID === iconID) {
            return lineIcon;
        }
    }
    console.log("Strip Map Generator - Warning: Attempted to find Icon with ID " + iconID + " but it was not found.");
    return null;
}

// If the line object does not have certain fields, sets default values
function SMG_lineObjSetDefault(lineobj) {
    if (!("fonttype" in lineobj)) {
        lineobj.fonttype = "Arial"; // Default: Main font is Arial
    }
    if (!("texticonfontsize" in lineobj)) {
        lineobj.texticonfontsize = 20; // Default: 20 px for text icons
    }
}



