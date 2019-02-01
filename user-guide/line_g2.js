var obj_line2_v1 = {
    "linename": "Station Set 1",
    "iconID": ["ICON_GREEN"],
    "strokes": [
        {
            "color": "#66AA66",
            "strokewidth": "8px"
        }
    ],
    "stationtypes": [
        {
            "stypeID": "STATION_TYPE1",
            "stnnodes": [
                {
                    "stationstrokewidth": 4,
                    "stationradius": 6,
                    "scolor": "#66AA66"
                }
            ]
        },
        {
            "stypeID": "STATION_TYPE2",
            "stnnodes": [
                {
                    "stationstrokewidth": 4,
                    "stationradius": 6,
                    "scolor": "#66AA66"
                }
            ],
            "stnfonttype": "'Times New Roman', 'serif'"
        },
        {
            "stypeID": "STATION_TYPE3",
            "stnnodes": [
                {
                    "stationstrokewidth": 4,
                    "stationradius": 6,
                    "scolor": "#66AA66"
                }
            ],
            "stnfonttype": "'Times New Roman', 'serif'",
            "stnfontsize": 20
        },
        {
            "stypeID": "STATION_TYPE4",
            "stnnodes": [
                {
                    "stationstrokewidth": 4,
                    "stationradius": 6,
                    "scolor": "#66AA66"
                }
            ],
            "stnfonttype": "'Times New Roman', 'serif'",
            "stnfontsize": 20,
            "stnfontangle": 20
        },
        {
            "stypeID": "STATION_TYPE5",
            "stnnodes": [
                {
                    "stationstrokewidth": 4,
                    "stationradius": 6,
                    "scolor": "#66AA66"
                }
            ],
            "stniconoffset": 32,
            "stntextoffset": 32
        }
    ],
    "stations": [
        {
            "name": ["Station Type 1 - Basic"],
            "stationtype": "STATION_TYPE1",
            "icons": [
            ]
        },
        {
            "name": ["Station Type 2 - stnfonttype"],
            "stationtype": "STATION_TYPE2",
            "icons": [
            ]
        },
        {
            "name": ["Station Type 3 - stnfontsize"],
            "stationtype": "STATION_TYPE3",
            "icons": [
            ]
        },
        {
            "name": ["Station Type 4 - stnfontangle"],
            "stationtype": "STATION_TYPE4",
            "icons": [
            ]
        },
        {
            "name": ["Station Type 1 - No offsets"],
            "stationtype": "STATION_TYPE1",
            "icons": [
                ["ICON_RED"]
            ]
        },
        {
            "name": ["Station Type 5 - With offsets of 32"],
            "stationtype": "STATION_TYPE5",
            "icons": [
                ["ICON_RED"]
            ]
        }
    ]
};

var obj_line2_v2 = {
    "linename": "Station Set 2 - Circles",
    "iconID": ["ICON_GREEN"],
    "strokes": [
        {
            "color": "#66AA66",
            "strokewidth": "8px"
        }
    ],
    "stationtypes": [
        {
            "stypeID": "STATION_TYPE1",
            "stnnodes": [
                {
                    "stationstrokewidth": 4,
                    "stationradius": 6,
                    "scolor": "#66AA66"
                }
            ]
        },
        {
            "stypeID": "STATION_TYPE2",
            "stnnodes": [
                {
                    "stationstrokewidth": 4,
                    "stationradius": 12,
                    "scolor": "#66AA66"
                }
            ]
        },
        {
            "stypeID": "STATION_TYPE3",
            "stnnodes": [
                {
                    "stationstrokewidth": 6,
                    "stationradius": 6,
                    "scolor": "#66AA66"
                }
            ]
        },
        {
            "stypeID": "STATION_TYPE4",
            "stnnodes": [
                {
                    "stationstrokewidth": 4,
                    "stationradius": 6,
                    "scolor": "black"
                }
            ]
        },
        {
            "stypeID": "STATION_TYPE5",
            "stnnodes": [
                {
                    "stationstrokewidth": 4,
                    "stationradius": 6,
                    "scolor": "white",
                    "fcolor": "#66AA66"
                }
            ]
        },
    ],
    "stations": [
        {
            "name": ["Station Type 1 - Basic"],
            "stationtype": "STATION_TYPE1",
            "icons": [
            ]
        },
        {
            "name": ["Station Type 2 - Larger radius"],
            "stationtype": "STATION_TYPE2",
            "icons": [
            ]
        },
        {
            "name": ["Station Type 3 - Larger stroke width"],
            "stationtype": "STATION_TYPE3",
            "icons": [
            ]
        },
        {
            "name": ["Station Type 4 - Black stroke"],
            "stationtype": "STATION_TYPE4",
            "icons": [
            ]
        },
        {
            "name": ["Station Type 5 - White stroke and green fill"],
            "stationtype": "STATION_TYPE5",
            "icons": [
            ]
        }
    ]
};

var obj_line2_v3 = {
    "linename": "Station Set 3 - Rects",
    "iconID": ["ICON_GREEN"],
    "strokes": [
        {
            "color": "#66AA66",
            "strokewidth": "8px",
            "endpoint": 5
        },
        {
            "color": "#66AA66",
            "strokewidth": "12px",
            "linecap": "square",
            "startpoint": 5
        }
    ],
    "stationtypes": [
        {
            "stypeID": "STATION_TYPE1",
            "stnnodes": [
                {
                    "stationstrokewidth": 4,
                    "stationheight": 12,
                    "stationwidth": 12,
                    "scolor": "#66AA66",
                    "componenttype": "RECT"
                }
            ]
        },
        {
            "stypeID": "STATION_TYPE2",
            "stnnodes": [
                {
                    "stationstrokewidth": 4,
                    "stationheight": 16,
                    "stationwidth": 12,
                    "scolor": "#66AA66",
                    "componenttype": "RECT"
                }
            ]
        },
        {
            "stypeID": "STATION_TYPE3",
            "stnnodes": [
                {
                    "stationstrokewidth": 6,
                    "stationheight": 12,
                    "stationwidth": 12,
                    "scolor": "#66AA66",
                    "componenttype": "RECT"
                }
            ]
        },
        {
            "stypeID": "STATION_TYPE4",
            "stnnodes": [
                {
                    "stationstrokewidth": 4,
                    "stationheight": 10,
                    "stationwidth": 3,
                    "scolor": "#66AA66",
                    "componenttype": "RECT",
                    "dy": -3
                }
            ]
        },
        {
            "stypeID": "STATION_TYPE5",
            "stnnodes": [
                {
                    "stationstrokewidth": 2,
                    "stationheight": 12,
                    "stationwidth": 12,
                    "scolor": "#66AA66",
                    "componenttype": "RECT",
                    "dy": -10
                }
            ]
        },
        {
            "stypeID": "STATION_TYPE_NONE",
            "stnnodes": [
            ]
        },
        {
            "stypeID": "STATION_TYPE6",
            "stnnodes": [
                {
                    "stationstrokewidth": 0,
                    "stationheight": 8,
                    "stationwidth": 8,
                    "scolor": "#66AA66",
                    "componenttype": "RECT"
                }
            ]
        }
    ],
    "stations": [
        {
            "name": ["Station Type 1 - Basic"],
            "stationtype": "STATION_TYPE1",
            "icons": [
            ]
        },
        {
            "name": ["Station Type 2 - Different Dimensions"],
            "stationtype": "STATION_TYPE2",
            "icons": [
            ]
        },
        {
            "name": ["Station Type 3 - Larger stroke width"],
            "stationtype": "STATION_TYPE3",
            "icons": [
            ]
        },
        {
            "name": ["Station Type 4 - Tick"],
            "stationtype": "STATION_TYPE4",
            "icons": [
            ]
        },
        {
            "name": ["Station Type 5 - Offset"],
            "stationtype": "STATION_TYPE5",
            "icons": [
            ]
        },
        {
            "name": [""],
            "stationtype": "STATION_TYPE_NONE",
            "icons": [
            ]
        },
        {
            "name": ["Station Type 6 - Inlay"],
            "stationtype": "STATION_TYPE6",
            "icons": [
            ]
        }
    ]
};

var obj_line2_v4 = {
    "linename": "Station Set 4 - Combinations",
    "iconID": ["ICON_GREEN"],
    "strokes": [
        {
            "color": "#66AA66",
            "strokewidth": "8px"
        },
        {
            "color": "#0000FF",
            "strokewidth": "8px",
            "startpoint": 0.5,
            "endpoint": 2.5,
            "dy": 8
        }
    ],
    "stationtypes": [
        {
            "stypeID": "STATION_TYPE1",
            "stnnodes": [
                {
                    "stationstrokewidth": 4,
                    "stationradius": 6,
                    "scolor": "#66AA66"
                }
            ]
        },
        {
            "stypeID": "STATION_TYPE2",
            "stnnodes": [
                {
                    "stationstrokewidth": 2,
                    "stationradius": 6,
                    "scolor": "#66AA66"
                },
                {
                    "stationstrokewidth": 2,
                    "stationradius": 6,
                    "scolor": "#0000FF",
                    "dy": 8
                },
                {
                    "stationstrokewidth": 2,
                    "stationheight": 4,
                    "stationwidth": 8,
                    "scolor": "#FFFFFF",
                    "dy": 4,
                    "componenttype": "RECT"
                }
            ]
        },
        {
            "stypeID": "STATION_TYPE3",
            "stnnodes": [
                {
                    "stationstrokewidth": 2,
                    "stationradius": 6,
                    "scolor": "#66AA66"
                },
                {
                    "stationstrokewidth": 2,
                    "stationradius": 6,
                    "scolor": "#0000FF",
                    "dy": 8
                },
                {
                    "stationstrokewidth": 2,
                    "stationheight": 4,
                    "stationwidth": 8,
                    "scolor": "#FFFFFF",
                    "dy": 4,
                    "componenttype": "RECT"
                },
                {
                    "stationstrokewidth": 0,
                    "stationradius": 3,
                    "fcolor": "#66AA66"
                },
                {
                    "stationstrokewidth": 0,
                    "stationradius": 3,
                    "fcolor": "#0000FF",
                    "dy": 8
                }
            ]
        },
        {
            "stypeID": "STATION_TYPE4",
            "stnnodes": [
                {
                    "stationstrokewidth": 2,
                    "stationheight": 16,
                    "stationwidth": 16,
                    "scolor": "#66AA66",
                    "componenttype": "RECT"
                },
                {
                    "stationstrokewidth": 2,
                    "stationradius": 4,
                    "scolor": "#66AA66"
                }
            ]
        }
    ],
    "stations": [
        {
            "name": ["Station Type 1 - Basic"],
            "stationtype": "STATION_TYPE1",
            "icons": [
            ]
        },
        {
            "name": ["Station Type 2 - Transfer 1"],
            "stationtype": "STATION_TYPE2",
            "icons": [
            ]
        },
        {
            "name": ["Station Type 3 - Transfer 2"],
            "stationtype": "STATION_TYPE3",
            "icons": [
            ]
        },
        {
            "name": ["Station Type 4 - Combination"],
            "stationtype": "STATION_TYPE4",
            "icons": [
            ]
        }
    ]
};

var obj_line2_v5 = {
    "linename": "Station Set 5 - Custom SVG",
    "iconID": ["ICON_GREEN"],
    "strokes": [
        {
            "color": "#66AA66",
            "strokewidth": "8px"
        }
    ],
    "stationtypes": [
        {
            "stypeID": "STATION_TYPE1",
            "stnnodes": [
                {
                    "stationsvg": "<rect x='0' y='0' height='24' width='24' stroke-width='4px' rx='6px' stroke='#66AA66' fill='white'></rect>",
                    "stationwidth": 24,
                    "stationheight": 24,
                    "componenttype": "CUSTOM"
                },
                {
                    "stationsvg": "<text x='12' y='12' font-family='Helvetica' font-size='16px' fill='#226622' text-anchor='middle' dominant-baseline='central'>M</text>",
                    "stationwidth": 24,
                    "stationheight": 24,
                    "componenttype": "CUSTOM"
                }
            ]
        },
        {
            "stypeID": "STATION_TYPE2",
            "stnnodes": [
                {
                    "stationsvg": "<polygon points='30,15 22.5,28 7.5,28 0,15 7.5,2 22.5,2' fill='#66AA66' stroke='white' stroke-width='1px'></polygon>",
                    "stationwidth": 30,
                    "stationheight": 30,
                    "componenttype": "CUSTOM"
                },
                {
                    "stationsvg": "<text x='12' y='12' font-family='Helvetica' font-size='16px' fill='white' text-anchor='middle' dominant-baseline='central'>M</text>",
                    "stationwidth": 24,
                    "stationheight": 24,
                    "componenttype": "CUSTOM"
                }
            ]
        },
        {
            "stypeID": "STATION_TYPE3",
            "stnnodes": [
                {
                    "stationstrokewidth": 2,
                    "stationradius": 12,
                    "scolor": "#66AA66",
                    "fcolor": "white"
                },
                {
                    "stationsvg": "<text x='12' y='12' font-family='Helvetica' font-size='20px' fill='white' text-anchor='middle' dominant-baseline='central'>🚈</text>",
                    "stationwidth": 24,
                    "stationheight": 24,
                    "componenttype": "CUSTOM"
                }
            ]
        },
        {
            "stypeID": "STATION_TYPE4",
            "stnnodes": [
                {
                    "stationstrokewidth": 2,
                    "stationwidth": 24,
                    "stationheight": 24,
                    "scolor": "#66AA66",
                    "fcolor": "white",
                    "componenttype": "RECT"
                },
                {
                    "stationsvg": "<text x='12' y='13.5' font-family='Helvetica' font-size='20px' fill='white' text-anchor='middle' dominant-baseline='central'>♿</text>",
                    "stationwidth": 24,
                    "stationheight": 24,
                    "componenttype": "CUSTOM"
                }
            ]
        }
    ],
    "stations": [
        {
            "name": ["Station Type 1", "Rounded square + letter"],
            "stationtype": "STATION_TYPE1",
            "icons": [
            ]
        },
        {
            "name": ["Station Type 2 - Hexagon + letter"],
            "stationtype": "STATION_TYPE2",
            "icons": [
            ]
        },
        {
            "name": ["Station Type 3 - Emoji", "NOTE: Please don't actually do this"],
            "stationtype": "STATION_TYPE3",
            "icons": [
            ]
        },
        {
            "name": ["Station Type 4", "Appropriate symbol usage"],
            "stationtype": "STATION_TYPE4",
            "icons": [
            ]
        }
    ]
};
