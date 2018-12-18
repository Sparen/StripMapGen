var obj_line1_v1 = {
    "linename": "M1 - Batıkent Metrosu",
    "iconID": ["ICON_LINEM1_ANK"],
    "strokes": [
        {
            "color": "#DD0000",
            "strokewidth": "8px"
        }
    ],
    "stationtypes": [
        {
            "stypeID": "STATION_TYPEA",
            "stnnodes": [
                {
                    "stationstrokewidth": 4,
                    "stationradius": 6,
                    "scolor": "#DD0000"
                }
            ]
        }
    ],
    "stations": [
        {
            "name": ["Kızılay"],
            "stationtype": "STATION_TYPEA",
            "icons": [
                ["ICON_LINEM2_ANK"],
                ["ICON_LINEAKR_ANK"]
            ]
        },
        {
            "name": ["Sıhhiye"],
            "stationtype": "STATION_TYPEA",
            "icons": [
                ["ICON_LINEBKR_ANK"]
            ]
        },
        {
            "name": ["Ulus"],
            "stationtype": "STATION_TYPEA",
            "icons": [
            ]
        },
        {
            "name": ["Atatürk Kültür Merkezi"],
            "stationtype": "STATION_TYPEA",
            "icons": [
                ["ICON_LINEM4_ANK"]
            ]
        },
        {
            "name": ["Akköprü"],
            "stationtype": "STATION_TYPEA",
            "icons": [
            ]
        },
        {
            "name": ["İvedik"],
            "stationtype": "STATION_TYPEA",
            "icons": [
            ]
        },
        {
            "name": ["Yenimahalle"],
            "stationtype": "STATION_TYPEA",
            "icons": [
            ]
        },
        {
            "name": ["Demetevler"],
            "stationtype": "STATION_TYPEA",
            "icons": [
            ]
        },
        {
            "name": ["Hastane"],
            "stationtype": "STATION_TYPEA",
            "icons": [
            ]
        },
        {
            "name": ["Macunköy"],
            "stationtype": "STATION_TYPEA",
            "icons": [
            ]
        },
        {
            "name": ["Ostim"],
            "stationtype": "STATION_TYPEA",
            "icons": [
            ]
        },
        {
            "name": ["Batıkent"],
            "stationtype": "STATION_TYPEA",
            "icons": [
                ["ICON_LINEM3_ANK"]
            ]
        }
    ]
};

var obj_line1_v2 = {
    "linename": "Example 1 - dy",
    "iconID": ["ICON_LINEM1_ANK"],
    "strokes": [
        {
            "color": "#FFEEEE",
            "strokewidth": "8px"
        },
        {
            "color": "#DD0000",
            "strokewidth": "8px",
            "startlinkheight": 64,
            "endlinkheight": -64
        }
    ],
    "stationtypes": [
        {
            "stypeID": "STATION_TYPEA",
            "stnnodes": [
                {
                    "stationstrokewidth": 4,
                    "stationradius": 6,
                    "scolor": "#DD0000"
                }
            ]
        }
    ],
    "stations": [
        {
            "name": ["Kızılay"],
            "stationtype": "STATION_TYPEA",
            "icons": [
                ["ICON_LINEM2_ANK"],
                ["ICON_LINEAKR_ANK"]
            ],
            "dy": 64
        },
        {
            "name": ["Sıhhiye"],
            "stationtype": "STATION_TYPEA",
            "icons": [
                ["ICON_LINEBKR_ANK"]
            ],
            "dy": 32
        },
        {
            "name": ["Ulus"],
            "stationtype": "STATION_TYPEA",
            "icons": [
            ]
        },
        {
            "name": ["Atatürk Kültür Merkezi"],
            "stationtype": "STATION_TYPEA",
            "icons": [
                ["ICON_LINEM4_ANK"]
            ],
            "dy": -32
        },
        {
            "name": ["Akköprü"],
            "stationtype": "STATION_TYPEA",
            "icons": [
            ],
            "dy": -64
        }
    ]
};

var obj_line1_v3 = {
    "linename": "Example 2 - dy with iconshift",
    "iconID": ["ICON_LINEM1_ANK"],
    "strokes": [
        {
            "color": "#FFEEEE",
            "strokewidth": "8px"
        },
        {
            "color": "#DD0000",
            "strokewidth": "8px",
            "startlinkheight": 64,
            "endlinkheight": -64
        }
    ],
    "stationtypes": [
        {
            "stypeID": "STATION_TYPEA",
            "stnnodes": [
                {
                    "stationstrokewidth": 4,
                    "stationradius": 6,
                    "scolor": "#DD0000"
                }
            ]
        }
    ],
    "stations": [
        {
            "name": ["Kızılay"],
            "stationtype": "STATION_TYPEA",
            "icons": [
                ["ICON_LINEM2_ANK"],
                ["ICON_LINEAKR_ANK"]
            ],
            "dy": 64,
            "iconshift": true
        },
        {
            "name": ["Sıhhiye"],
            "stationtype": "STATION_TYPEA",
            "icons": [
                ["ICON_LINEBKR_ANK"]
            ],
            "dy": 32,
            "iconshift": true
        },
        {
            "name": ["Ulus"],
            "stationtype": "STATION_TYPEA",
            "icons": [
            ]
        },
        {
            "name": ["Atatürk Kültür Merkezi"],
            "stationtype": "STATION_TYPEA",
            "icons": [
                ["ICON_LINEM4_ANK"]
            ],
            "dy": -32,
            "iconshift": true
        },
        {
            "name": ["Akköprü"],
            "stationtype": "STATION_TYPEA",
            "icons": [
            ],
            "dy": -64
        }
    ]
};

var obj_line1_v4 = {
    "linename": "Example 3 - textoffset",
    "iconID": ["ICON_LINEM1_ANK"],
    "strokes": [
        {
            "color": "#DD0000",
            "strokewidth": "8px"
        }
    ],
    "stationtypes": [
        {
            "stypeID": "STATION_TYPEA",
            "stnnodes": [
                {
                    "stationstrokewidth": 4,
                    "stationradius": 6,
                    "scolor": "#DD0000"
                }
            ]
        }
    ],
    "stations": [
        {
            "name": ["Kızılay"],
            "stationtype": "STATION_TYPEA",
            "icons": [
                ["ICON_LINEM2_ANK"],
                ["ICON_LINEAKR_ANK"]
            ],
            "textoffset": 64
        },
        {
            "name": ["Sıhhiye"],
            "stationtype": "STATION_TYPEA",
            "icons": [
                ["ICON_LINEBKR_ANK"]
            ],
            "textoffset": 32
        },
        {
            "name": ["Ulus"],
            "stationtype": "STATION_TYPEA",
            "icons": [
            ]
        },
        {
            "name": ["Atatürk Kültür Merkezi"],
            "stationtype": "STATION_TYPEA",
            "icons": [
                ["ICON_LINEM4_ANK"]
            ],
            "textoffset": -32
        },
        {
            "name": ["Akköprü"],
            "stationtype": "STATION_TYPEA",
            "icons": [
            ],
            "textoffset": -64
        }
    ]
};

var obj_line1_v5 = {
    "linename": "Example 4 - textoffset (in a reasonable scenario)",
    "iconID": ["ICON_LINEM1_ANK"],
    "strokes": [
        {
            "color": "#DD0000",
            "strokewidth": "8px"
        }
    ],
    "stationtypes": [
        {
            "stypeID": "STATION_TYPEA",
            "stnnodes": [
                {
                    "stationsvg": "<path d='M 20 0 L 0 20 L 20 40 L 40 20 z' stroke-width='4px' stroke='#DD0000' fill='white'></path>",
                    "stationwidth": 40,
                    "stationheight": 40,
                    "scolor": "#DD0000",
                    "componenttype": "CUSTOM"
                },
                {
                    "stationsvg": "<text x='20' y='20' font-family='Verdana' font-size='18px' fill='#DD0000' text-anchor='middle' dominant-baseline='central'>M</text>",
                    "stationwidth": 40,
                    "stationheight": 40,
                    "scolor": "#DD0000",
                    "componenttype": "CUSTOM"
                }
            ]
        }
    ],
    "stations": [
        {
            "name": ["Kızılay"],
            "stationtype": "STATION_TYPEA",
            "icons": [
                ["ICON_LINEM2_ANK"],
                ["ICON_LINEAKR_ANK"]
            ],
            "textoffset": -32,
            "iconoffset": 32
        },
        {
            "name": ["Sıhhiye"],
            "stationtype": "STATION_TYPEA",
            "icons": [
                ["ICON_LINEBKR_ANK"]
            ],
            "textoffset": -32,
            "iconoffset": 32
        },
        {
            "name": ["Ulus"],
            "stationtype": "STATION_TYPEA",
            "icons": [
            ],
            "textoffset": -32,
            "iconoffset": 32
        },
        {
            "name": ["Atatürk Kültür Merkezi"],
            "stationtype": "STATION_TYPEA",
            "icons": [
                ["ICON_LINEM4_ANK"]
            ],
            "textoffset": -32,
            "iconoffset": 32
        },
        {
            "name": ["Akköprü"],
            "stationtype": "STATION_TYPEA",
            "icons": [
            ],
            "textoffset": -32,
            "iconoffset": 32
        }
    ]
};