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