"use strict";

// This code powers the demo, loading and saving to Local Storage as well as calling the generator methods.
// This code is heavily based on the older Map Generator and many of the functions have been copied verbatim.

//Setup first time on load. Defaults to Baltimore
function demo_setup() {
    var success = false;
    if (typeof(Storage) !== "undefined") {
        //If preexisting work exists, load it.
        var temp = localStorage.getItem("storage1");
        if (temp !== undefined && temp !== null && temp !== "") {
            document.getElementById("json1").value = temp;
            success = true;
        }
        var temp2 = localStorage.getItem("storage2");
        if (temp2 !== undefined && temp2 !== null && temp2 !== "") {
            document.getElementById("json2").value = temp2;
            success = true;
        }
    } else {
        alert("Your browser does not support Local Storage. Your work will not be saved, so please make sure to copy it to your local computer if you wish to continue working on it at a later time.");
    }
    if (success) {
        return;
    }
    //Initialize contents of text area if new user/no storage saved
    resetPrefab();
}

//Save to local storage
function saveLS() {
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("storage1", document.getElementById("json1").value);
        localStorage.setItem("storage2", document.getElementById("json2").value);
        alert("Your work has been saved in Local Storage.");
    } else {
        alert("Your browser does not support Local Storage. Please consider Load/Save from JSON file.");
    }
}

//Load from local storage
function loadLS() {
    if (typeof(Storage) !== "undefined") {
        document.getElementById("json1").value = localStorage.getItem("storage1");
        document.getElementById("json2").value = localStorage.getItem("storage2");
        alert("Your work has been loaded from Local Storage.");
    } else {
        alert("Your browser does not support Local Storage. Please consider Load/Save from JSON file.");
    }
}

//Return input without comments (to provide valid JSON)
function pruneComments(input) {
    //console.log("DEBUG: input = \n" + input);
    var output = "";
    var splitinput = input.split("\n");
    //console.log("DEBUG: splitinput = \n" + splitinput);
    //for all lines in input, add to output if OK
    for (var i = 0; i < splitinput.length; i += 1) {
        var tempstr = splitinput[i];
        if (tempstr.length > 2) { //Actually contains something
            if (tempstr.charAt(0) !== '/' && tempstr.charAt(1) !== '/') {
                //add to output, make sure to add back the new line for formatting purposes
                output = output + tempstr + "\n";
            }
        } else {
            //add to output
            output = output + tempstr + "\n";
        }
    }
    //console.log("DEBUG: output = \n" + output);
    return output;
}

// Generates the map
function mapgen() {
    var rawinput1 = document.getElementById("json1").value;
    var input1 = pruneComments(rawinput1);
    var lineobj = JSON.parse(input1);
    var rawinput2 = document.getElementById("json2").value;
    var input2 = pruneComments(rawinput2);
    var iconobj = JSON.parse(input2);

    var mapSVG = SMG_loadMap (lineobj, iconobj, "demo_map");

    document.getElementById('outputSVG').value = mapSVG;
}

// Copies SVG to clipboard. See https://stackoverflow.com/questions/127040 and https://stackoverflow.com/questions/400212
function svgToClip() {
    document.getElementById('outputSVG').select();
    //document.getElementById('outputSVG').focus();
    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Fallback: Copying SVG command was ' + msg);
    } catch (err) {
        console.error('Fallback: Unable to copy output SVG to clipboard', err);
    }
}

document.querySelector("#clipsave").addEventListener("click", svgToClip);

// Sets the demo to the default line and icon.
function resetPrefab() {
    document.getElementById("json1").value = genPrefab_BlankLine(); // Left
    document.getElementById("json2").value = genPrefab_BlankIcon(); // Right
}

// Sets the demo to the UTA line and icon.
function resetUTA() {
    document.getElementById("json1").value = genPrefab_UTALine(); // Left
    document.getElementById("json2").value = genPrefab_UTAIcon(); // Right
}

function genPrefab_BlankLine() {
    return `// Line Object. 
// This is a comment. These are ignored by the parser.
{
    "linename": "Template Line",
    "iconID": ["ICON_LINE_TEMPLATE"],
    "strokes": [
        {
            "color": "#FF0000",
            "strokewidth": "8px"
        }
    ],
    "stationtypes": [
        {
            "stypeID": "STATION_TYPEA",
            "stnnodes": [
                {
                    "stationstrokewidth": 2,
                    "stationradius": 8,
                    "scolor": "#FF0000"
                }
            ]
        }
    ],
    "stations": [
        {
            "name": ["1st Street"],
            "stationtype": "STATION_TYPEA",
            "icons": [
            ]
        },
        {
            "name": ["2nd Street"],
            "stationtype": "STATION_TYPEA",
            "icons": [
            ]
        }
    ]
}`
}

function genPrefab_BlankIcon() {
    return `// Icon Object. 
// This is a comment. These are ignored by the parser.
{
    "icons": [
        {
            "iconID": "ICON_LINE_TEMPLATE",
            "height": 48,
            "width": 48,
            "scale": [1.0, 0.67],
            "iconSVG": "<circle cx='24' cy='24' r='18' stroke-width='0' stroke='none' fill='#FF0000'></circle>"
        }
    ]
}`
}

function genPrefab_UTALine() {
    return `// Line Object. 
// This is a comment. These are ignored by the parser.
// This example is from User Guide 3 under the User Guides, with some extra features.
{
    "linename": "UTA TRAX Light Rail",
    "iconID": ["ICON_BLUE", "ICON_RED", "ICON_GREEN"],
    "locknumstations": 30,
    "lineheight": 288,
    "maincustomsvgbg": "<text x='16' y='460' font-family='DIN Alternate' font-size='20px' fill='#AAAAAA' text-anchor='start' dominant-baseline='central'>01/2019</text>",
    "strokes": [
        {
            "color": "#0055A4",
            "strokewidth": "14px",
            "linecap": "round",
            "startlinkheight": 160,
            "endlinkheight": 160,
            "endpoint": 12.75
        },
        {
            "color": "#0055A4",
            "strokewidth": "14px",
            "linecap": "round",
            "startlinkheight": 160,
            "startpoint": 12.75,
            "endpoint": 15.75
        },
        {
            "color": "#0055A4",
            "strokewidth": "14px",
            "linecap": "round",
            "startpoint": 15.75,
            "endpoint": 40
        },
        {
            "color": "#0055A4",
            "strokewidth": "14px",
            "linecap": "round",
            "endlinkheight": -144,
            "startpoint": 40,
            "endpoint": 43
        },
        {
            "color": "#0055A4",
            "strokewidth": "14px",
            "linecap": "round",
            "startlinkheight": -144,
            "endlinkheight": -144,
            "startpoint": 43,
            "endpoint": 46.5
        },
        {
            "color": "#EC1C24",
            "strokewidth": "14px",
            "linecap": "round",
            "startlinkheight": 14,
            "endlinkheight": 14,
            "endpoint": 32.5
        },
        {
            "color": "#EC1C24",
            "strokewidth": "14px",
            "linecap": "round",
            "startlinkheight": 14,
            "endlinkheight": 160,
            "startpoint": 32.5,
            "endpoint": 35.5
        },
        {
            "color": "#EC1C24",
            "strokewidth": "14px",
            "linecap": "round",
            "startlinkheight": 160,
            "endlinkheight": 160,
            "startpoint": 35.5,
            "endpoint": 46.5
        },
        {
            "color": "#00A076",
            "strokewidth": "14px",
            "linecap": "round",
            "startlinkheight": -144,
            "endlinkheight": -144,
            "startpoint": 18,
            "endpoint": 23.5
        },
        {
            "color": "#00A076",
            "strokewidth": "14px",
            "linecap": "round",
            "startlinkheight": -144,
            "endlinkheight": -14,
            "startpoint": 23.5,
            "endpoint": 26.5
        },
        {
            "color": "#00A076",
            "strokewidth": "14px",
            "linecap": "round",
            "startlinkheight": -14,
            "endlinkheight": -14,
            "startpoint": 26.5
        }
    ],
    "stationtypes": [
        {
            "stypeID": "STATION_TYPE_BLUE",
            "stnnodes": [
                {
                    "stationradius": 7,
                    "stationstrokewidth": 4,
                    "fcolor": "white",
                    "scolor": "#0055A4"
                }
            ],
            "stnfontangle": 58
        },
        {
            "stypeID": "STATION_TYPE_RED",
            "stnnodes": [
                {
                    "stationradius": 7,
                    "stationstrokewidth": 4,
                    "fcolor": "white",
                    "scolor": "#EC1C24"
                }
            ],
            "stnfontangle": 58
        },
        {
            "stypeID": "STATION_TYPE_GREEN",
            "stnnodes": [
                {
                    "stationradius": 7,
                    "stationstrokewidth": 4,
                    "fcolor": "white",
                    "scolor": "#00A076"
                }
            ],
            "stnfontangle": 58
        },
        {
            "stypeID": "STATION_TYPE_NONE",
            "stnnodes": [
            ]
        },
        {
            "stypeID": "STATION_TYPE_BLUERED",
            "stnnodes": [
                {
                    "stationradius": 7,
                    "stationstrokewidth": 4,
                    "fcolor": "white",
                    "scolor": "#0055A4"
                },
                {
                    "stationradius": 7,
                    "stationstrokewidth": 4,
                    "fcolor": "white",
                    "scolor": "#EC1C24",
                    "dy": 14
                },
                {
                    "componenttype": "RECT",
                    "stationstrokewidth": 0,
                    "stationwidth": 10,
                    "stationheight": 14,
                    "scolor": "#FFFFFF",
                    "dy": 7
                }
            ],
            "stnfontangle": 58
        },
        {
            "stypeID": "STATION_TYPE_BLUEGREEN",
            "stnnodes": [
                {
                    "stationradius": 7,
                    "stationstrokewidth": 4,
                    "fcolor": "white",
                    "scolor": "#0055A4"
                },
                {
                    "stationradius": 7,
                    "stationstrokewidth": 4,
                    "fcolor": "white",
                    "scolor": "#00A076",
                    "dy": -14
                },
                {
                    "componenttype": "RECT",
                    "stationstrokewidth": 0,
                    "stationwidth": 10,
                    "stationheight": 14,
                    "scolor": "#FFFFFF",
                    "dy": -7
                }
            ],
            "stnfontangle": 58
        },
        {
            "stypeID": "STATION_TYPE_COMBINED",
            "stnnodes": [
                {
                    "stationradius": 7,
                    "stationstrokewidth": 4,
                    "fcolor": "white",
                    "scolor": "#0055A4"
                },
                {
                    "stationradius": 7,
                    "stationstrokewidth": 4,
                    "fcolor": "white",
                    "scolor": "#00A076",
                    "dy": -14
                },
                {
                    "stationradius": 7,
                    "stationstrokewidth": 4,
                    "fcolor": "white",
                    "scolor": "#EC1C24",
                    "dy": 14
                },
                {
                    "componenttype": "RECT",
                    "stationstrokewidth": 0,
                    "stationwidth": 10,
                    "stationheight": 28,
                    "scolor": "#FFFFFF"
                }
            ],
            "stnfontangle": 58
        }
    ],
    "key": {
        "lines": [
            {"colwidth": 2000, "rowheight": 32, "services": ["ICON_BLUE", "ICON_RED", "ICON_GREEN", "ICON_SLINE", "ICON_FRONTRUNNER"]}
        ]
    },
    "stations": [
        {
            "name": ["Draper", "Town Center"],
            "stationtype": "STATION_TYPE_BLUE",
            "icons": [
            ],
            "dy": 160
        },
        {
            "name": ["Kimballs Lane"],
            "stationtype": "STATION_TYPE_BLUE",
            "icons": [
            ],
            "dy": 160
        },
        {
            "name": ["Crescent View"],
            "stationtype": "STATION_TYPE_BLUE",
            "icons": [
            ],
            "dy": 160
        },
        {
            "name": ["Sandy", "Civic Center"],
            "stationtype": "STATION_TYPE_BLUE",
            "icons": [
            ],
            "dy": 160
        },
        {
            "name": ["Sandy Expo"],
            "stationtype": "STATION_TYPE_BLUE",
            "icons": [
            ],
            "dy": 160
        },
        {
            "name": ["Historic Sandy"],
            "stationtype": "STATION_TYPE_BLUE",
            "icons": [
            ],
            "dy": 160
        },
        {
            "name": ["Midvale Center"],
            "stationtype": "STATION_TYPE_BLUE",
            "icons": [
            ],
            "dy": 160
        },
        {
            "name": ["Midvale","Fort Union"],
            "stationtype": "STATION_TYPE_BLUE",
            "icons": [
            ],
            "dy": 160
        },
        {
            "name": [""],
            "stationtype": "STATION_TYPE_NONE",
            "icons": [
            ],
            "dy": 160
        },
        {
            "name": ["Daybreak Pkwy."],
            "stationtype": "STATION_TYPE_RED",
            "icons": [
            ],
            "xshift": -9,
            "dy": 14
        },
        {
            "name": ["South Jordan Pkwy."],
            "stationtype": "STATION_TYPE_RED",
            "icons": [
            ],
            "xshift": -9,
            "dy": 14
        },
        {
            "name": ["5600 W. Old Bingham Hwy."],
            "stationtype": "STATION_TYPE_RED",
            "icons": [
            ],
            "xshift": -9,
            "dy": 14
        },
        {
            "name": ["4800 W. Old Bingham Hwy."],
            "stationtype": "STATION_TYPE_RED",
            "icons": [
            ],
            "xshift": -9,
            "dy": 14
        },
        {
            "name": ["Jordan Valley"],
            "stationtype": "STATION_TYPE_RED",
            "icons": [
            ],
            "xshift": -9,
            "dy": 14
        },
        {
            "name": ["Sugar Factory Rd."],
            "stationtype": "STATION_TYPE_RED",
            "icons": [
            ],
            "xshift": -9,
            "dy": 14
        },
        {
            "name": ["West Jordan City Center"],
            "stationtype": "STATION_TYPE_RED",
            "icons": [
            ],
            "xshift": -9,
            "dy": 14
        },
        {
            "name": ["Historic Gardner"],
            "stationtype": "STATION_TYPE_RED",
            "icons": [
            ],
            "xshift": -9,
            "dy": 14
        },
        {
            "name": ["Bingham Junction"],
            "stationtype": "STATION_TYPE_RED",
            "icons": [
            ],
            "xshift": -9,
            "dy": 14
        },
        {
            "name": ["Fashion Place", "West"],
            "stationtype": "STATION_TYPE_BLUERED",
            "icons": [
            ],
            "xshift": -9
        },
        {
            "name": ["Murray Central"],
            "stationtype": "STATION_TYPE_BLUERED",
            "icons": [
                ["ICON_FRONTRUNNER"]
            ],
            "xshift": -9,
            "iconoffset": 14
        },
        {
            "name": ["Murray North"],
            "stationtype": "STATION_TYPE_BLUERED",
            "icons": [
            ],
            "xshift": -9
        },
        {
            "name": ["Meadowbrook"],
            "stationtype": "STATION_TYPE_BLUERED",
            "icons": [
            ],
            "xshift": -9
        },
        {
            "name": ["Millcreek"],
            "stationtype": "STATION_TYPE_BLUERED",
            "icons": [
            ],
            "xshift": -9
        },
        {
            "name": ["West Valley", "Central"],
            "stationtype": "STATION_TYPE_GREEN",
            "icons": [
            ],
            "dy": -144,
            "xshift": -13
        },
        {
            "name": ["Decker Lake"],
            "stationtype": "STATION_TYPE_GREEN",
            "icons": [
            ],
            "dy": -144,
            "xshift": -13
        },
        {
            "name": ["Redwood Junction"],
            "stationtype": "STATION_TYPE_GREEN",
            "icons": [
            ],
            "dy": -144,
            "xshift": -13
        },
        {
            "name": ["River Trail"],
            "stationtype": "STATION_TYPE_GREEN",
            "icons": [
            ],
            "dy": -144,
            "xshift": -13
        },
        {
            "name": [""],
            "stationtype": "STATION_TYPE_NONE",
            "icons": [
            ],
            "xshift": -9
        },
        {
            "name": ["Central Pointe"],
            "stationtype": "STATION_TYPE_COMBINED",
            "icons": [
                ["ICON_SLINE"]
            ],
            "xshift": -13,
            "textoffset": 14,
            "iconoffset": 14
        },
        {
            "name": ["Ballpark"],
            "stationtype": "STATION_TYPE_COMBINED",
            "icons": [
            ],
            "xshift": -13,
            "textoffset": 14
        },
        {
            "name": ["900 South"],
            "stationtype": "STATION_TYPE_COMBINED",
            "icons": [
            ],
            "xshift": -13,
            "textoffset": 14
        },
        {
            "name": ["Courthouse"],
            "stationtype": "STATION_TYPE_COMBINED",
            "icons": [
            ],
            "xshift": -13,
            "textoffset": 14
        },
        {
            "name": ["Gallivan Plaza"],
            "stationtype": "STATION_TYPE_BLUEGREEN",
            "icons": [
            ],
            "xshift": -13,
            "textoffset": 14
        },
        {
            "name": ["City Center"],
            "stationtype": "STATION_TYPE_BLUEGREEN",
            "icons": [
            ],
            "xshift": -13,
            "textoffset": 14
        },
        {
            "name": ["Temple Square"],
            "stationtype": "STATION_TYPE_BLUEGREEN",
            "icons": [
            ],
            "xshift": -13,
            "textoffset": 14
        },
        {
            "name": ["Arena"],
            "stationtype": "STATION_TYPE_BLUEGREEN",
            "icons": [
            ],
            "xshift": -13,
            "textoffset": 14
        },
        {
            "name": ["Library"],
            "stationtype": "STATION_TYPE_RED",
            "icons": [
            ],
            "dy": 160,
            "xshift": -16
        },
        {
            "name": ["Trolley"],
            "stationtype": "STATION_TYPE_RED",
            "icons": [
            ],
            "dy": 160,
            "xshift": -16
        },
        {
            "name": ["900 East"],
            "stationtype": "STATION_TYPE_RED",
            "icons": [
            ],
            "dy": 160,
            "xshift": -16
        },
        {
            "name": ["Stadium"],
            "stationtype": "STATION_TYPE_RED",
            "icons": [
            ],
            "dy": 160,
            "xshift": -16
        },
        {
            "name": ["University", "South Campus"],
            "stationtype": "STATION_TYPE_RED",
            "icons": [
            ],
            "dy": 160,
            "xshift": -16
        },
        {
            "name": ["Fort Douglas"],
            "stationtype": "STATION_TYPE_RED",
            "icons": [
            ],
            "dy": 160,
            "xshift": -16
        },
        {
            "name": ["University", "Medical Center"],
            "stationtype": "STATION_TYPE_RED",
            "icons": [
            ],
            "dy": 160,
            "xshift": -16
        },
        {
            "name": [""],
            "stationtype": "STATION_TYPE_NONE",
            "icons": [
            ],
            "xshift": -20
        },
        {
            "name": ["Planetarium"],
            "stationtype": "STATION_TYPE_BLUE",
            "icons": [
            ],
            "dy": -144,
            "xshift": -20
        },
        {
            "name": ["Old Greek Town"],
            "stationtype": "STATION_TYPE_BLUE",
            "icons": [
            ],
            "dy": -144,
            "xshift": -20
        },
        {
            "name": ["Salt Lake Central"],
            "stationtype": "STATION_TYPE_BLUE",
            "icons": [
                ["ICON_FRONTRUNNER"]
            ],
            "dy": -144,
            "xshift": -20
        },
        {
            "name": ["North Temple", "Bridge"],
            "stationtype": "STATION_TYPE_GREEN",
            "icons": [
                ["ICON_FRONTRUNNER"]
            ],
            "xshift": -23,
            "dy": -14
        },
        {
            "name": ["Jackson/", "Euclid"],
            "stationtype": "STATION_TYPE_GREEN",
            "icons": [
            ],
            "xshift": -23,
            "dy": -14
        },
        {
            "name": ["Fairpark"],
            "stationtype": "STATION_TYPE_GREEN",
            "icons": [
            ],
            "xshift": -23,
            "dy": -14
        },
        {
            "name": ["Power"],
            "stationtype": "STATION_TYPE_GREEN",
            "icons": [
            ],
            "xshift": -23,
            "dy": -14
        },
        {
            "name": ["1940 W. North Temple"],
            "stationtype": "STATION_TYPE_GREEN",
            "icons": [
            ],
            "xshift": -23,
            "dy": -14
        },
        {
            "name": ["Airport"],
            "stationtype": "STATION_TYPE_GREEN",
            "icons": [
            ],
            "xshift": -23,
            "dy": -14
        }
    ]
}`
}

function genPrefab_UTAIcon() {
    return `// Icon Object. 
// This is a comment. These are ignored by the parser.
{
    "icons": [
        {
            "iconID": "ICON_BLUE",
            "description": "Blue Line Light Rail",
            "height": 48,
            "width": 64,
            "scale": [1.0, 0.67],
            "iconSVG": "<rect x='4' y='4' height='40' width='56' stroke-width='2px' stroke='white' fill='#0055A4' rx='6' ry='6'></rect><text x='32' y='24' font-family='Verdana' font-size='20px' fill='white' text-anchor='middle' dominant-baseline='central'>701</text>"
        },
        {
            "iconID": "ICON_RED",
            "description": "Red Line Light Rail",
            "height": 48,
            "width": 64,
            "scale": [1.0, 0.67],
            "iconSVG": "<rect x='4' y='4' height='40' width='56' stroke-width='2px' stroke='white' fill='#EC1C24' rx='6' ry='6'></rect><text x='32' y='24' font-family='Verdana' font-size='20px' fill='white' text-anchor='middle' dominant-baseline='central'>703</text>"
        },
        {
            "iconID": "ICON_GREEN",
            "description": "Green Line Light Rail",
            "height": 48,
            "width": 64,
            "scale": [1.0, 0.67],
            "iconSVG": "<rect x='4' y='4' height='40' width='56' stroke-width='2px' stroke='white' fill='#00A076' rx='6' ry='6'></rect><text x='32' y='24' font-family='Verdana' font-size='20px' fill='white' text-anchor='middle' dominant-baseline='central'>704</text>"
        },
        {
            "iconID": "ICON_SLINE",
            "description": "S Line Streetcar",
            "height": 48,
            "width": 64,
            "scale": [1.0, 0.67],
            "iconSVG": "<rect x='4' y='4' height='40' width='56' stroke-width='2px' stroke='white' fill='#808080' rx='6' ry='6'></rect><text x='32' y='24' font-family='Verdana' font-size='20px' fill='white' text-anchor='middle' dominant-baseline='central'>720</text>"
        },
        {
            "iconID": "ICON_FRONTRUNNER",
            "description": "FrontRunner Commuter Rail",
            "height": 48,
            "width": 64,
            "scale": [1.0, 0.67],
            "iconSVG": "<rect x='4' y='4' height='40' width='56' stroke-width='2px' stroke='white' fill='#9622B2' rx='6' ry='6'></rect><text x='32' y='24' font-family='Verdana' font-size='20px' fill='white' text-anchor='middle' dominant-baseline='central'>750</text>"
        }
    ]
}`
}