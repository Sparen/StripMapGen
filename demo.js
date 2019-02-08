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