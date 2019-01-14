var obj_line1_v1 = {
    "linename": "M1 - Batıkent Metrosu",
    "iconID": ["ICON_LINEM1_ANK"],
    "maincustomsvgbg": "<text x='16' y='460' font-family='DIN Alternate' font-size='20px' fill='#AAAAAA' text-anchor='start' dominant-baseline='central'>12/2018</text>",
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
    "linename": "Example 2 - dy with iconshift set to false",
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
            "iconshift": false
        },
        {
            "name": ["Sıhhiye"],
            "stationtype": "STATION_TYPEA",
            "icons": [
                ["ICON_LINEBKR_ANK"]
            ],
            "dy": 32,
            "iconshift": false
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
            "iconshift": false
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
            "textoffset": -28,
            "iconoffset": 28
        },
        {
            "name": ["Sıhhiye"],
            "stationtype": "STATION_TYPEA",
            "icons": [
                ["ICON_LINEBKR_ANK"]
            ],
            "textoffset": -28,
            "iconoffset": 28
        },
        {
            "name": ["Ulus"],
            "stationtype": "STATION_TYPEA",
            "icons": [
            ],
            "textoffset": -28,
            "iconoffset": 28
        },
        {
            "name": ["Atatürk Kültür Merkezi"],
            "stationtype": "STATION_TYPEA",
            "icons": [
                ["ICON_LINEM4_ANK"]
            ],
            "textoffset": -28,
            "iconoffset": 28
        },
        {
            "name": ["Akköprü"],
            "stationtype": "STATION_TYPEA",
            "icons": [
            ],
            "textoffset": -28,
            "iconoffset": 28
        },
        {
            "name": ["İvedik"],
            "stationtype": "STATION_TYPEA",
            "icons": [
            ],
            "textoffset": -28,
            "iconoffset": 28
        },
        {
            "name": ["Yenimahalle"],
            "stationtype": "STATION_TYPEA",
            "icons": [
            ],
            "textoffset": -28,
            "iconoffset": 28
        },
        {
            "name": ["Demetevler"],
            "stationtype": "STATION_TYPEA",
            "icons": [
            ],
            "textoffset": -28,
            "iconoffset": 28
        },
        {
            "name": ["Hastane"],
            "stationtype": "STATION_TYPEA",
            "icons": [
            ],
            "textoffset": -28,
            "iconoffset": 28
        },
        {
            "name": ["Macunköy"],
            "stationtype": "STATION_TYPEA",
            "icons": [
            ],
            "textoffset": -28,
            "iconoffset": 28
        },
        {
            "name": ["Ostim"],
            "stationtype": "STATION_TYPEA",
            "icons": [
            ],
            "textoffset": -28,
            "iconoffset": 28
        },
        {
            "name": ["Batıkent"],
            "stationtype": "STATION_TYPEA",
            "icons": [
                ["ICON_LINEM3_ANK"]
            ],
            "textoffset": -28,
            "iconoffset": 28
        }
    ]
};

var obj_line1_v6 = {
    "linename": "Example 5 - xshift regions",
    "iconID": ["ICON_LINEM1_ANK"],
    "strokes": [
        {
            "color": "#DD0000",
            "strokewidth": "8px"
        },
        {
            "color": "#AAAAFF",
            "strokewidth": "4px",
            "startlinkheight": 128,
            "endlinkheight": -128,
            "startpoint": 0,
            "endpoint": 0
        },
        {
            "color": "#AAAAFF",
            "strokewidth": "4px",
            "startlinkheight": 128,
            "endlinkheight": -128,
            "startpoint": 1,
            "endpoint": 1
        },
        {
            "color": "#AAAAFF",
            "strokewidth": "4px",
            "startlinkheight": 128,
            "endlinkheight": -128,
            "startpoint": 2,
            "endpoint": 2
        },
        {
            "color": "#AAAAFF",
            "strokewidth": "4px",
            "startlinkheight": 128,
            "endlinkheight": -128,
            "startpoint": 3,
            "endpoint": 3
        },
        {
            "color": "#AAAAFF",
            "strokewidth": "4px",
            "startlinkheight": 128,
            "endlinkheight": -128,
            "startpoint": 4,
            "endpoint": 4
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
            "name": ["Akköprü"],
            "stationtype": "STATION_TYPEA",
            "icons": [
            ],
            "textoffset": -28,
            "iconoffset": 28,
        },
        {
            "name": ["İvedik"],
            "stationtype": "STATION_TYPEA",
            "icons": [
            ],
            "textoffset": -28,
            "iconoffset": 28
        },
        {
            "name": ["Yenimahalle"],
            "stationtype": "STATION_TYPEA",
            "icons": [
            ],
            "textoffset": -28,
            "iconoffset": 28
        },
        {
            "name": ["Demetevler"],
            "stationtype": "STATION_TYPEA",
            "icons": [
            ],
            "textoffset": -28,
            "iconoffset": 28
        },
        {
            "name": ["Hastane"],
            "stationtype": "STATION_TYPEA",
            "icons": [
            ],
            "textoffset": -28,
            "iconoffset": 28
        }
    ]
};

var obj_line1_v7 = {
    "linename": "Example 7 - xshift applied",
    "iconID": ["ICON_LINEM1_ANK"],
    "strokes": [
        {
            "color": "#DD0000",
            "strokewidth": "8px"
        },
        {
            "color": "#AAAAFF",
            "strokewidth": "4px",
            "startlinkheight": 128,
            "endlinkheight": -128,
            "startpoint": 0,
            "endpoint": 0
        },
        {
            "color": "#AAAAFF",
            "strokewidth": "4px",
            "startlinkheight": 128,
            "endlinkheight": -128,
            "startpoint": 0.25,
            "endpoint": 0.25
        },
        {
            "color": "#AAAAFF",
            "strokewidth": "4px",
            "startlinkheight": 128,
            "endlinkheight": -128,
            "startpoint": 0.5,
            "endpoint": 0.5
        },
        {
            "color": "#AAAAFF",
            "strokewidth": "4px",
            "startlinkheight": 128,
            "endlinkheight": -128,
            "startpoint": 0.75,
            "endpoint": 0.75
        },
        {
            "color": "#AAAAFF",
            "strokewidth": "4px",
            "startlinkheight": 128,
            "endlinkheight": -128,
            "startpoint": 1,
            "endpoint": 1
        },
        {
            "color": "#AAAAFF",
            "strokewidth": "4px",
            "startlinkheight": 128,
            "endlinkheight": -128,
            "startpoint": 1.25,
            "endpoint": 1.25
        },
        {
            "color": "#AAAAFF",
            "strokewidth": "4px",
            "startlinkheight": 128,
            "endlinkheight": -128,
            "startpoint": 1.5,
            "endpoint": 1.5
        },
        {
            "color": "#AAAAFF",
            "strokewidth": "4px",
            "startlinkheight": 128,
            "endlinkheight": -128,
            "startpoint": 1.75,
            "endpoint": 1.75
        },
        {
            "color": "#AAAAFF",
            "strokewidth": "4px",
            "startlinkheight": 128,
            "endlinkheight": -128,
            "startpoint": 2,
            "endpoint": 2
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
            "name": ["Akköprü"],
            "stationtype": "STATION_TYPEA",
            "icons": [
            ],
            "textoffset": -28,
            "iconoffset": 28,
            "xshift": 0.25
        },
        {
            "name": ["İvedik"],
            "stationtype": "STATION_TYPEA",
            "icons": [
            ],
            "textoffset": -28,
            "iconoffset": 28
        },
        {
            "name": ["Yenimahalle"],
            "stationtype": "STATION_TYPEA",
            "icons": [
            ],
            "textoffset": -28,
            "iconoffset": 28
        },
        {
            "name": ["Demetevler"],
            "stationtype": "STATION_TYPEA",
            "icons": [
            ],
            "textoffset": -28,
            "iconoffset": 28
        },
        {
            "name": ["Hastane"],
            "stationtype": "STATION_TYPEA",
            "icons": [
            ],
            "textoffset": -28,
            "iconoffset": 28,
            "xshift": -0.25
        }
    ]
};