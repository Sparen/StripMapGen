var obj_line3_v1 = {
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
};

var obj_line3_v2 = {
    "linename": "UTA TRAX Light Rail",
    "iconID": ["ICON_BLUE", "ICON_RED", "ICON_GREEN"],
    "maincustomsvgbg": "<text x='16' y='460' font-family='DIN Alternate' font-size='20px' fill='#AAAAAA' text-anchor='start' dominant-baseline='central'>01/2019</text>",
    "strokes": [
        {
            "color": "#0055A4",
            "strokewidth": "14px",
            "linecap": "round"
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
            ]
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
            ]
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
            ]
        },
        {
            "stypeID": "STATION_TYPE_NONE",
            "stnnodes": [
            ]
        },
        {
            "stypeID": "STATION_TYPE_COMBINED",
            "stnnodes": [
                {
                    "stationradius": 7,
                    "stationstrokewidth": 4,
                    "fcolor": "white",
                    "scolor": "black"
                }
            ]
        }
    ],
    "stations": [
        {
            "name": ["Draper Town Center"],
            "stationtype": "STATION_TYPE_BLUE",
            "icons": [
            ]
        },
        {
            "name": ["Kimballs Lane"],
            "stationtype": "STATION_TYPE_BLUE",
            "icons": [
            ]
        },
        {
            "name": ["Crescent View"],
            "stationtype": "STATION_TYPE_BLUE",
            "icons": [
            ]
        },
        {
            "name": ["Sandy Civic Center"],
            "stationtype": "STATION_TYPE_BLUE",
            "icons": [
            ]
        },
        {
            "name": ["Sandy Expo"],
            "stationtype": "STATION_TYPE_BLUE",
            "icons": [
            ]
        },
        {
            "name": ["Historic Sandy"],
            "stationtype": "STATION_TYPE_BLUE",
            "icons": [
            ]
        },
        {
            "name": ["Midvale Center"],
            "stationtype": "STATION_TYPE_BLUE",
            "icons": [
            ]
        },
        {
            "name": ["Midvale Fort Union"],
            "stationtype": "STATION_TYPE_BLUE",
            "icons": [
            ]
        },
        {
            "name": ["Daybreak Pkwy."],
            "stationtype": "STATION_TYPE_RED",
            "icons": [
            ]
        },
        {
            "name": ["South Jordan Pkwy."],
            "stationtype": "STATION_TYPE_RED",
            "icons": [
            ]
        },
        {
            "name": ["5600 W. Old Bingham Hwy."],
            "stationtype": "STATION_TYPE_RED",
            "icons": [
            ]
        },
        {
            "name": ["4800 W. Old Bingham Hwy."],
            "stationtype": "STATION_TYPE_RED",
            "icons": [
            ]
        },
        {
            "name": ["Jordan Valley"],
            "stationtype": "STATION_TYPE_RED",
            "icons": [
            ]
        },
        {
            "name": ["Sugar Factory Rd."],
            "stationtype": "STATION_TYPE_RED",
            "icons": [
            ]
        },
        {
            "name": ["West Jordan City Center"],
            "stationtype": "STATION_TYPE_RED",
            "icons": [
            ]
        },
        {
            "name": ["Historic Gardner"],
            "stationtype": "STATION_TYPE_RED",
            "icons": [
            ]
        },
        {
            "name": ["Bingham Junction"],
            "stationtype": "STATION_TYPE_RED",
            "icons": [
            ]
        },
        {
            "name": ["Fashion Place West"],
            "stationtype": "STATION_TYPE_COMBINED",
            "icons": [
            ]
        },
        {
            "name": ["Murray Central"],
            "stationtype": "STATION_TYPE_COMBINED",
            "icons": [
                ["ICON_FRONTRUNNER"]
            ]
        },
        {
            "name": ["Murray North"],
            "stationtype": "STATION_TYPE_COMBINED",
            "icons": [
            ]
        },
        {
            "name": ["Meadowbrook"],
            "stationtype": "STATION_TYPE_COMBINED",
            "icons": [
            ]
        },
        {
            "name": ["Millcreek"],
            "stationtype": "STATION_TYPE_COMBINED",
            "icons": [
            ]
        },
        {
            "name": ["West Valley Central"],
            "stationtype": "STATION_TYPE_GREEN",
            "icons": [
            ]
        },
        {
            "name": ["Decker Lake"],
            "stationtype": "STATION_TYPE_GREEN",
            "icons": [
            ]
        },
        {
            "name": ["Redwood Junction"],
            "stationtype": "STATION_TYPE_GREEN",
            "icons": [
            ]
        },
        {
            "name": ["River Trail"],
            "stationtype": "STATION_TYPE_GREEN",
            "icons": [
            ]
        },
        {
            "name": ["Central Pointe"],
            "stationtype": "STATION_TYPE_COMBINED",
            "icons": [
                ["ICON_SLINE"]
            ]
        },
        {
            "name": ["Ballpark"],
            "stationtype": "STATION_TYPE_COMBINED",
            "icons": [
            ]
        },
        {
            "name": ["900 South"],
            "stationtype": "STATION_TYPE_COMBINED",
            "icons": [
            ]
        },
        {
            "name": ["Courthouse"],
            "stationtype": "STATION_TYPE_COMBINED",
            "icons": [
            ]
        },
        {
            "name": ["Gallivan Plaza"],
            "stationtype": "STATION_TYPE_COMBINED",
            "icons": [
            ]
        },
        {
            "name": ["City Center"],
            "stationtype": "STATION_TYPE_COMBINED",
            "icons": [
            ]
        },
        {
            "name": ["Temple Square"],
            "stationtype": "STATION_TYPE_COMBINED",
            "icons": [
            ]
        },
        {
            "name": ["Arena"],
            "stationtype": "STATION_TYPE_COMBINED",
            "icons": [
            ]
        },
        {
            "name": ["Library"],
            "stationtype": "STATION_TYPE_RED",
            "icons": [
            ]
        },
        {
            "name": ["Trolley"],
            "stationtype": "STATION_TYPE_RED",
            "icons": [
            ]
        },
        {
            "name": ["900 East"],
            "stationtype": "STATION_TYPE_RED",
            "icons": [
            ]
        },
        {
            "name": ["Stadium"],
            "stationtype": "STATION_TYPE_RED",
            "icons": [
            ]
        },
        {
            "name": ["University South Campus"],
            "stationtype": "STATION_TYPE_RED",
            "icons": [
            ]
        },
        {
            "name": ["Fort Douglas"],
            "stationtype": "STATION_TYPE_RED",
            "icons": [
            ]
        },
        {
            "name": ["University Medical Center"],
            "stationtype": "STATION_TYPE_RED",
            "icons": [
            ]
        },
        {
            "name": ["Planetarium"],
            "stationtype": "STATION_TYPE_BLUE",
            "icons": [
            ]
        },
        {
            "name": ["Old Greek Town"],
            "stationtype": "STATION_TYPE_BLUE",
            "icons": [
            ]
        },
        {
            "name": ["Salt Lake Central"],
            "stationtype": "STATION_TYPE_BLUE",
            "icons": [
                ["ICON_FRONTRUNNER"]
            ]
        },
        {
            "name": ["North Temple Bridge"],
            "stationtype": "STATION_TYPE_GREEN",
            "icons": [
                ["ICON_FRONTRUNNER"]
            ]
        },
        {
            "name": ["Jackson/Euclid"],
            "stationtype": "STATION_TYPE_GREEN",
            "icons": [
            ]
        },
        {
            "name": ["Fairpark"],
            "stationtype": "STATION_TYPE_GREEN",
            "icons": [
            ]
        },
        {
            "name": ["Power"],
            "stationtype": "STATION_TYPE_GREEN",
            "icons": [
            ]
        },
        {
            "name": ["1940 W. North Temple"],
            "stationtype": "STATION_TYPE_GREEN",
            "icons": [
            ]
        },
        {
            "name": ["Airport"],
            "stationtype": "STATION_TYPE_GREEN",
            "icons": [
            ]
        }
    ]
};

var obj_line3_v3 = {
    "linename": "UTA TRAX Light Rail",
    "iconID": ["ICON_BLUE", "ICON_RED", "ICON_GREEN"],
    "locknumstations": 30,
    "lineheight": 288,
    "maincustomsvgbg": "<text x='16' y='460' font-family='DIN Alternate' font-size='20px' fill='#AAAAAA' text-anchor='start' dominant-baseline='central'>01/2019</text>",
    "strokes": [
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
            ]
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
            ]
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
            ]
        },
        {
            "stypeID": "STATION_TYPE_NONE",
            "stnnodes": [
            ]
        },
        {
            "stypeID": "STATION_TYPE_COMBINED",
            "stnnodes": [
                {
                    "stationradius": 7,
                    "stationstrokewidth": 4,
                    "fcolor": "white",
                    "scolor": "black"
                }
            ]
        }
    ],
    "stations": [
        {
            "name": ["Draper Town Center"],
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
            "name": ["Sandy Civic Center"],
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
            "name": ["Midvale Fort Union"],
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
            "xshift": -9
        },
        {
            "name": ["South Jordan Pkwy."],
            "stationtype": "STATION_TYPE_RED",
            "icons": [
            ],
            "xshift": -9
        },
        {
            "name": ["5600 W. Old Bingham Hwy."],
            "stationtype": "STATION_TYPE_RED",
            "icons": [
            ],
            "xshift": -9
        },
        {
            "name": ["4800 W. Old Bingham Hwy."],
            "stationtype": "STATION_TYPE_RED",
            "icons": [
            ],
            "xshift": -9
        },
        {
            "name": ["Jordan Valley"],
            "stationtype": "STATION_TYPE_RED",
            "icons": [
            ],
            "xshift": -9
        },
        {
            "name": ["Sugar Factory Rd."],
            "stationtype": "STATION_TYPE_RED",
            "icons": [
            ],
            "xshift": -9
        },
        {
            "name": ["West Jordan City Center"],
            "stationtype": "STATION_TYPE_RED",
            "icons": [
            ],
            "xshift": -9
        },
        {
            "name": ["Historic Gardner"],
            "stationtype": "STATION_TYPE_RED",
            "icons": [
            ],
            "xshift": -9
        },
        {
            "name": ["Bingham Junction"],
            "stationtype": "STATION_TYPE_RED",
            "icons": [
            ],
            "xshift": -9
        },
        {
            "name": ["Fashion Place West"],
            "stationtype": "STATION_TYPE_COMBINED",
            "icons": [
            ],
            "xshift": -9
        },
        {
            "name": ["Murray Central"],
            "stationtype": "STATION_TYPE_COMBINED",
            "icons": [
                ["ICON_FRONTRUNNER"]
            ],
            "xshift": -9
        },
        {
            "name": ["Murray North"],
            "stationtype": "STATION_TYPE_COMBINED",
            "icons": [
            ],
            "xshift": -9
        },
        {
            "name": ["Meadowbrook"],
            "stationtype": "STATION_TYPE_COMBINED",
            "icons": [
            ],
            "xshift": -9
        },
        {
            "name": ["Millcreek"],
            "stationtype": "STATION_TYPE_COMBINED",
            "icons": [
            ],
            "xshift": -9
        },
        {
            "name": ["West Valley Central"],
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
            "xshift": -13
        },
        {
            "name": ["Ballpark"],
            "stationtype": "STATION_TYPE_COMBINED",
            "icons": [
            ],
            "xshift": -13
        },
        {
            "name": ["900 South"],
            "stationtype": "STATION_TYPE_COMBINED",
            "icons": [
            ],
            "xshift": -13
        },
        {
            "name": ["Courthouse"],
            "stationtype": "STATION_TYPE_COMBINED",
            "icons": [
            ],
            "xshift": -13
        },
        {
            "name": ["Gallivan Plaza"],
            "stationtype": "STATION_TYPE_COMBINED",
            "icons": [
            ],
            "xshift": -13
        },
        {
            "name": ["City Center"],
            "stationtype": "STATION_TYPE_COMBINED",
            "icons": [
            ],
            "xshift": -13
        },
        {
            "name": ["Temple Square"],
            "stationtype": "STATION_TYPE_COMBINED",
            "icons": [
            ],
            "xshift": -13
        },
        {
            "name": ["Arena"],
            "stationtype": "STATION_TYPE_COMBINED",
            "icons": [
            ],
            "xshift": -13
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
            "xshift": -23
        },
        {
            "name": ["Jackson/", "Euclid"],
            "stationtype": "STATION_TYPE_GREEN",
            "icons": [
            ],
            "xshift": -23
        },
        {
            "name": ["Fairpark"],
            "stationtype": "STATION_TYPE_GREEN",
            "icons": [
            ],
            "xshift": -23
        },
        {
            "name": ["Power"],
            "stationtype": "STATION_TYPE_GREEN",
            "icons": [
            ],
            "xshift": -23
        },
        {
            "name": ["1940 W. North Temple"],
            "stationtype": "STATION_TYPE_GREEN",
            "icons": [
            ],
            "xshift": -23
        },
        {
            "name": ["Airport"],
            "stationtype": "STATION_TYPE_GREEN",
            "icons": [
            ],
            "xshift": -23
        }
    ]
};


