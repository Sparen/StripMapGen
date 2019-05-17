var obj_lineA = {
    "linename": "Lines 11 & 12",
    "iconID": ["ICON_LINE11", "ICON_LINE12"],
    "fonttype": "'DIN Alternate', Helvetica",
    "maincustomsvgbg": "<text x='16' y='460' font-family='DIN Alternate' font-size='20px' fill='#AAAAAA' text-anchor='start' dominant-baseline='central'>01/2019</text>",
    "strokes": [
        {
            "color": "#FFAA00",
            "strokewidth": "8px",
            "startpoint": 4.25,
            "endpoint": 4.75,
            "endlinkheight": -64,
            "linecap": "round"
        },
        {
            "color": "#FFAA00",
            "strokewidth": "8px",
            "startpoint": 4.75,
            "endpoint": 6.25,
            "startlinkheight": -64,
            "endlinkheight": -64,
            "linecap": "round"
        },
        {
            "color": "#FFAA00",
            "strokewidth": "8px",
            "startpoint": 6.25,
            "endpoint": 6.75,
            "startlinkheight": -64,
            "linecap": "round"
        },
        {
            "color": "#FFAA00",
            "strokewidth": "8px",
            "startpoint": 11.5,
            "endpoint": 12,
            "endlinkheight": -64,
            "linecap": "round"
        },
        {
            "color": "#FFAA00",
            "strokewidth": "8px",
            "startpoint": 12,
            "endpoint": 16.5,
            "startlinkheight": -64,
            "endlinkheight": -64,
            "linecap": "round"
        },
        {
            "color": "#FF0000",
            "strokewidth": "8px",
            "endpoint": 4.25
        },
        {
            "color": "#FF0000",
            "strokewidth": "8px",
            "startpoint": 4.25,
            "endpoint": 4.75,
            "endlinkheight": 64,
            "linecap": "round"
        },
        {
            "color": "#FF0000",
            "strokewidth": "8px",
            "startpoint": 4.75,
            "endpoint": 6.25,
            "startlinkheight": 64,
            "endlinkheight": 64,
            "linecap": "round"
        },
        {
            "color": "#FF0000",
            "strokewidth": "8px",
            "startpoint": 6.25,
            "endpoint": 6.75,
            "startlinkheight": 64,
            "linecap": "round"
        },
        {
            "color": "#FF0000",
            "strokewidth": "8px",
            "startpoint": 6.75,
            "endpoint": 11.5
        },
        {
            "color": "#FF0000",
            "strokewidth": "8px",
            "startpoint": 11.5,
            "endpoint": 12,
            "endlinkheight": 64,
            "linecap": "round"
        },
        {
            "color": "#FF0000",
            "strokewidth": "8px",
            "startpoint": 12,
            "endpoint": 16.5,
            "startlinkheight": 64,
            "endlinkheight": 64,
            "linecap": "round"
        },
        {
            "color": "#FFAA00",
            "strokewidth": "3px",
            "endpoint": 4.25
        },
        {
            "color": "#FFAA00",
            "strokewidth": "3px",
            "startpoint": 4.25,
            "endpoint": 4.75,
            "endlinkheight": -64,
            "linecap": "round"
        },
        {
            "color": "#FFAA00",
            "strokewidth": "3px",
            "startpoint": 6.25,
            "endpoint": 6.75,
            "startlinkheight": -64,
            "linecap": "round"
        },
        {
            "color": "#FFAA00",
            "strokewidth": "3px",
            "startpoint": 6.75,
            "endpoint": 11.5
        },
        {
            "color": "#FFAA00",
            "strokewidth": "3px",
            "startpoint": 11.5,
            "endpoint": 12,
            "endlinkheight": -64,
            "linecap": "round"
        }
    ],
    "stationtypes": [
        {
            "stypeID": "STATION_TYPE11",
            "stnnodes": [
                {
                    "stationstrokewidth": 2,
                    "stationradius": 8,
                    "scolor": "#FF0000"
                }
            ],
            "stnfonttype": "'Source Sans Pro', 'Helvetica'",
            "stnfontangle": 55
        },
        {
            "stypeID": "STATION_TYPE12",
            "stnnodes": [
                {
                    "stationstrokewidth": 2,
                    "stationradius": 8,
                    "scolor": "#FFAA00"
                }
            ],
            "stnfonttype": "'Source Sans Pro', 'Helvetica'",
            "stnfontangle": 55
        },
        {
            "stypeID": "STATION_TYPE_TRANSFER",
            "stnnodes": [
                {
                    "stationstrokewidth": 2,
                    "stationradius": 8,
                    "scolor": "#000000"
                }
            ],
            "stnfonttype": "'Source Sans Pro', 'Helvetica'",
            "stnfontsize": 18,
            "stnfontangle": 55
        }
    ],
    "stations": [
        {
            "name": ["Balliston"],
            "stationtype": "STATION_TYPE11",
            "icons": [
            ]
        },
        {
            "name": ["Central Plaza"],
            "stationtype": "STATION_TYPE_TRANSFER",
            "icons": [
                ["ICON_LINE13", "ICON_LINE14"],
                ["Bus Terminal"]
            ]
        },
        {
            "name": ["Oak Street"],
            "stationtype": "STATION_TYPE11",
            "icons": [
            ]
        },
        {
            "name": ["Elm Street"],
            "stationtype": "STATION_TYPE11",
            "icons": [
            ]
        },
        {
            "name": ["Pine Street"],
            "stationtype": "STATION_TYPE11",
            "icons": [
            ]
        },
        {
            "name": ["Wood Lane Parkway"],
            "stationtype": "STATION_TYPE12",
            "icons": [
            ],
            "dy": -64,
            "xshift": 0.5,
            "iconshift": true
        },
        {
            "name": ["City Gardens"],
            "stationtype": "STATION_TYPE11",
            "icons": [
            ],
            "dy": 64,
            "xshift": -0.5,
            "iconshift": true
        },
        {
            "name": ["Roland Circle"],
            "stationtype": "STATION_TYPE_TRANSFER",
            "icons": [
                ["ICON_LINE16"]
            ]
        },
        {
            "name": ["Mystle Road"],
            "stationtype": "STATION_TYPE11",
            "icons": [
            ]
        },
        {
            "name": ["Kaleidoscope Museum"],
            "stationtype": "STATION_TYPE11",
            "icons": [
            ]
        },
        {
            "name": ["Dneiper Avenue"],
            "stationtype": "STATION_TYPE11",
            "icons": [
            ]
        },
        {
            "name": ["East Railway Station"],
            "stationtype": "STATION_TYPE_TRANSFER",
            "icons": [
                ["ICON_LINE15"],
                ["National Rail"]
            ]
        },
        {
            "name": ["Thistle Way"],
            "stationtype": "STATION_TYPE12",
            "icons": [
            ],
            "dy": -64,
            "xshift": 0.5,
            "iconshift": true
        },
        {
            "name": ["Myrtle Av"],
            "stationtype": "STATION_TYPE11",
            "icons": [
            ],
            "dy": 64,
            "xshift": -0.5,
            "iconshift": true
        },
        {
            "name": ["Teakwood Avenue"],
            "stationtype": "STATION_TYPE12",
            "icons": [
            ],
            "dy": -64,
            "xshift": 0.5,
            "iconshift": true
        },
        {
            "name": ["Valley Street"],
            "stationtype": "STATION_TYPE11",
            "icons": [
            ],
            "dy": 64,
            "xshift": -0.5,
            "iconshift": true
        },
        {
            "name": ["Peat Hill"],
            "stationtype": "STATION_TYPE12",
            "icons": [
            ],
            "dy": -64,
            "xshift": 0.5,
            "iconshift": true
        },
        {
            "name": ["Addison Road"],
            "stationtype": "STATION_TYPE11",
            "icons": [
            ],
            "dy": 64,
            "xshift": -0.5,
            "iconshift": true
        }
    ]
};

var obj_lineB = {
    "linename": "13号线",
    "iconID": ["ICON_LINE13"],
    "fonttype": "'DIN Alternate', 'Helvetica', 'Microsoft Yahei', '微软雅黑', STXihei, '华文细黑'",
    "maincustomsvgbg": "<text x='16' y='460' font-family='DIN Alternate' font-size='20px' fill='#AAAAAA' text-anchor='start' dominant-baseline='central'>01/2019</text>",
    "strokes": [
        {
            "color": "#AACCFF",
            "strokewidth": "20px",
            "startpoint": 8,
            "endpoint": 8,
            "startlinkheight": -128,
            "endlinkheight": 128,
            "linecap": "round"
        },
        {
            "color": "#AACCFF",
            "strokewidth": "20px",
            "startpoint": 16,
            "endpoint": 16,
            "startlinkheight": -32,
            "endlinkheight": 128,
            "linecap": "round"
        },
        {
            "color": "#AACCFF",
            "strokewidth": "20px",
            "startpoint": 17.2,
            "endpoint": 16,
            "startlinkheight": -128,
            "endlinkheight": -32,
            "linecap": "round"
        },
        {
            "color": "#FF00AA",
            "strokewidth": "8px"
        }
    ],
    "stationtypes": [
        {
            "stypeID": "STATION_TYPE13",
            "stnnodes": [
                {
                    "stationstrokewidth": 2,
                    "stationradius": 8,
                    "scolor": "#FF00AA"
                }
            ],
            "stnfonttype": "'Source Sans Pro', 'Helvetica', 'Microsoft Yahei', '微软雅黑', STXihei, '华文细黑'"
        },
        {
            "stypeID": "STATION_TYPE_NONE",
            "stnnodes": [
            ],
            "stnfonttype": "'Source Sans Pro', 'Helvetica', 'Microsoft Yahei', '微软雅黑', STXihei, '华文细黑'"
        },
        {
            "stypeID": "STATION_TYPE_TRANSFER",
            "stnnodes": [
                {
                    "stationstrokewidth": 2,
                    "stationradius": 8,
                    "scolor": "#000000"
                },
            ],
            "stnfonttype": "'Source Sans Pro', 'Helvetica', 'Microsoft Yahei', '微软雅黑', STXihei, '华文细黑'",
            "stnfontsize": 18
        }
    ],
    "stations": [
        {
            "name": ["Northwind Road"],
            "stationtype": "STATION_TYPE13",
            "icons": [
            ]
        },
        {
            "name": ["River Drive"],
            "stationtype": "STATION_TYPE13",
            "icons": [
            ]
        },
        {
            "name": ["Chestnut Avenue"],
            "stationtype": "STATION_TYPE13",
            "icons": [
            ]
        },
        {
            "name": ["Broad Street"],
            "stationtype": "STATION_TYPE_TRANSFER",
            "icons": [
                ["ICON_LINE16"],
            ]
        },
        {
            "name": ["Breezeway"],
            "stationtype": "STATION_TYPE13",
            "icons": [
            ]
        },
        {
            "name": ["Central Plaza"],
            "stationtype": "STATION_TYPE_TRANSFER",
            "icons": [
                ["ICON_LINE11", "ICON_LINE12", "ICON_LINE14"],
                ["Bus Terminal"]
            ]
        },
        {
            "name": ["Bloom Street"],
            "stationtype": "STATION_TYPE13",
            "icons": [
            ]
        },
        {
            "name": ["Bridgebank"],
            "stationtype": "STATION_TYPE13",
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
            "name": ["天山北路", "Tianshan North Road"],
            "stationtype": "STATION_TYPE13",
            "icons": [
            ]
        },
        {
            "name": ["平安大路", "Ping'an Avenue"],
            "stationtype": "STATION_TYPE13",
            "icons": [
            ]
        },
        {
            "name": ["鲜花广场", "Flower Square"],
            "stationtype": "STATION_TYPE13",
            "icons": [
            ]
        },
        {
            "name": ["大树路", "Dashu Road"],
            "stationtype": "STATION_TYPE13",
            "icons": [
            ]
        },
        {
            "name": ["文化广场", "Cultural Square"],
            "stationtype": "STATION_TYPE13",
            "icons": [
            ]
        },
        {
            "name": ["体育门", "Sports Gate"],
            "stationtype": "STATION_TYPE13",
            "icons": [
            ]
        },
        {
            "name": ["地铁大学", "University of Metro Engineering"],
            "stationtype": "STATION_TYPE13",
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
            "name": ["Bay Plaza"],
            "stationtype": "STATION_TYPE13",
            "icons": [
            ]
        },
        {
            "name": ["South Station"],
            "stationtype": "STATION_TYPE_TRANSFER",
            "icons": [
                ["National Rail"]
            ]
        }
    ]
};

var obj_lineC = {
    "linename": "14 - 流山線",
    "iconID": ["ICON_LINE14"],
    "fonttype": "'DIN Alternate', 'Helvetica', 'ヒラギノ角ゴ Pro W3', 'Hiragino Kaku Gothic Pro', Osaka, 'メイリオ', 'Meiryo'",
    "maincustomsvgbg": "<text x='16' y='460' font-family='DIN Alternate' font-size='20px' fill='#AAAAAA' text-anchor='start' dominant-baseline='central'>01/2019</text>",
    "extraicons": [
        {
            "iconID": "ICON_LINE17",
            "iconx": 64,
            "icony": 240
        },
        {
            "iconID": "Through",
            "iconx": 64,
            "icony": 272
        },
        {
            "iconID": "Service",
            "iconx": 64,
            "icony": 292
        }
    ],
    "strokes": [
        {
            "color": "#AACCFF",
            "strokewidth": "20px",
            "startpoint": 11,
            "endpoint": 11,
            "startlinkheight": -128,
            "endlinkheight": 128
        },
        {
            "color": "#FFAAAA",
            "strokewidth": "8px"
        },
        {
            "color": "#00AAFF",
            "strokewidth": "8px",
            "startpoint": -0.5,
            "endpoint": 0
        }
    ],
    "stationtypes": [
        {
            "stypeID": "STATION_TYPE14",
            "stnnodes": [
                {
                    "stationsvg": "<rect x='0' y='0' height='40' width='32' stroke-width='4px' rx='6px' stroke='#FFAAAA' fill='white'></rect>",
                    "stationwidth": 32,
                    "stationheight": 40,
                    "scolor": "#FFAAAA",
                    "componenttype": "CUSTOM"
                },
                {
                    "stationsvg": "<text x='16' y='12' font-family='Futura' font-size='16px' fill='#FF8888' text-anchor='middle' dominant-baseline='central'>N</text>",
                    "stationwidth": 32,
                    "stationheight": 40,
                    "scolor": "#FFAAAA",
                    "componenttype": "CUSTOM"
                }
            ],
            "stnfonttype": "'Source Sans Pro', 'Helvetica', 'ヒラギノ角ゴ Pro W3', 'Hiragino Kaku Gothic Pro', Osaka, 'メイリオ', 'Meiryo'",
            "stntextoffset": 28,
            "stniconoffset": 28
        },
        {
            "stypeID": "STATION_TYPE_NONE",
            "stnnodes": [
            ],
            "stnfonttype": "'Source Sans Pro', 'ヒラギノ角ゴ Pro W3', 'Hiragino Kaku Gothic Pro', Osaka, 'メイリオ', 'Meiryo'"
        },
        {
            "stypeID": "STATION_TYPE_TRANSFER",
            "stnnodes": [
                {
                    "stationsvg": "<rect x='0' y='0' height='40' width='32' stroke-width='4px' rx='6px' stroke='#FFAAAA' fill='white'></rect>",
                    "stationwidth": 32,
                    "stationheight": 40,
                    "scolor": "#FFAAAA",
                    "componenttype": "CUSTOM"
                },
                {
                    "stationsvg": "<text x='16' y='12' font-family='Futura' font-size='16px' fill='#FF8888' text-anchor='middle' dominant-baseline='central'>N</text>",
                    "stationwidth": 32,
                    "stationheight": 40,
                    "scolor": "#FFAAAA",
                    "componenttype": "CUSTOM"
                }
            ],
            "stnfonttype": "'Source Sans Pro', 'Helvetica', 'ヒラギノ角ゴ Pro W3', 'Hiragino Kaku Gothic Pro', Osaka, 'メイリオ', 'Meiryo'",
            "stnfontsize": 18,
            "stntextoffset": 28,
            "stniconoffset": 28
        }
    ],
    "stations": [
        {
            "name": ["Verdant Gardens"],
            "stationtype": "STATION_TYPE14",
            "icons": [
            ],
            "customsvg": [
                {
                    "nodewidth": 32,
                    "nodeheight": 40,
                    "nodesvg": "<text x='16' y='28' font-family='Futura' font-size='16px' fill='#FF8888' text-anchor='middle' dominant-baseline='central'>01</text>"
                }
            ]
        },
        {
            "name": ["Maple Road"],
            "stationtype": "STATION_TYPE14",
            "icons": [
            ],
            "customsvg": [
                {
                    "nodewidth": 32,
                    "nodeheight": 40,
                    "nodesvg": "<text x='16' y='28' font-family='Futura' font-size='16px' fill='#FF8888' text-anchor='middle' dominant-baseline='central'>02</text>"
                }
            ]
        },
        {
            "name": ["Evergreen Lane"],
            "stationtype": "STATION_TYPE14",
            "icons": [
            ],
            "customsvg": [
                {
                    "nodewidth": 32,
                    "nodeheight": 40,
                    "nodesvg": "<text x='16' y='28' font-family='Futura' font-size='16px' fill='#FF8888' text-anchor='middle' dominant-baseline='central'>03</text>"
                }
            ]
        },
        {
            "name": ["Vine Avenue"],
            "stationtype": "STATION_TYPE14",
            "icons": [
            ],
            "customsvg": [
                {
                    "nodewidth": 32,
                    "nodeheight": 40,
                    "nodesvg": "<text x='16' y='28' font-family='Futura' font-size='16px' fill='#FF8888' text-anchor='middle' dominant-baseline='central'>04</text>"
                }
            ]
        },
        {
            "name": ["Cherrygrove Parkway"],
            "stationtype": "STATION_TYPE14",
            "icons": [
            ],
            "customsvg": [
                {
                    "nodewidth": 32,
                    "nodeheight": 40,
                    "nodesvg": "<text x='16' y='28' font-family='Futura' font-size='16px' fill='#FF8888' text-anchor='middle' dominant-baseline='central'>05</text>"
                }
            ]
        },
        {
            "name": ["Ivy Road"],
            "stationtype": "STATION_TYPE14",
            "icons": [
            ],
            "customsvg": [
                {
                    "nodewidth": 32,
                    "nodeheight": 40,
                    "nodesvg": "<text x='16' y='28' font-family='Futura' font-size='16px' fill='#FF8888' text-anchor='middle' dominant-baseline='central'>06</text>"
                }
            ]
        },
        {
            "name": ["Route 32"],
            "stationtype": "STATION_TYPE14",
            "icons": [
            ],
            "customsvg": [
                {
                    "nodewidth": 32,
                    "nodeheight": 40,
                    "nodesvg": "<text x='16' y='28' font-family='Futura' font-size='16px' fill='#FF8888' text-anchor='middle' dominant-baseline='central'>07</text>"
                }
            ]
        },
        {
            "name": ["Broad Street East"],
            "stationtype": "STATION_TYPE_TRANSFER",
            "icons": [
                ["ICON_LINE16"],
            ],
            "customsvg": [
                {
                    "nodewidth": 32,
                    "nodeheight": 40,
                    "nodesvg": "<text x='16' y='28' font-family='Futura' font-size='16px' fill='#FF8888' text-anchor='middle' dominant-baseline='central'>08</text>"
                }
            ]
        },
        {
            "name": ["Museum"],
            "stationtype": "STATION_TYPE14",
            "icons": [
            ],
            "customsvg": [
                {
                    "nodewidth": 32,
                    "nodeheight": 40,
                    "nodesvg": "<text x='16' y='28' font-family='Futura' font-size='16px' fill='#FF8888' text-anchor='middle' dominant-baseline='central'>09</text>"
                }
            ]
        },
        {
            "name": ["Central Plaza"],
            "stationtype": "STATION_TYPE_TRANSFER",
            "icons": [
                ["ICON_LINE11", "ICON_LINE12", "ICON_LINE13"],
                ["Bus Terminal"]
            ],
            "customsvg": [
                {
                    "nodewidth": 32,
                    "nodeheight": 40,
                    "nodesvg": "<text x='16' y='28' font-family='Futura' font-size='16px' fill='#FF8888' text-anchor='middle' dominant-baseline='central'>10</text>"
                }
            ]
        },
        {
            "name": ["Southriver", "Park"],
            "stationtype": "STATION_TYPE14",
            "icons": [
            ],
            "customsvg": [
                {
                    "nodewidth": 32,
                    "nodeheight": 40,
                    "nodesvg": "<text x='16' y='28' font-family='Futura' font-size='16px' fill='#FF8888' text-anchor='middle' dominant-baseline='central'>11</text>"
                }
            ]
        },
        {
            "name": [""],
            "stationtype": "STATION_TYPE_NONE",
            "icons": [
            ],
        },
        {
            "name": ["Aoyamakoen"],
            "stationtype": "STATION_TYPE14",
            "icons": [
                ["青"],
                ["山"],
                ["公"],
                ["園"]
            ],
            "customsvg": [
                {
                    "nodewidth": 32,
                    "nodeheight": 40,
                    "nodesvg": "<text x='16' y='28' font-family='Futura' font-size='16px' fill='#FF8888' text-anchor='middle' dominant-baseline='central'>12</text>"
                }
            ]
        },
        {
            "name": ["City University"],
            "stationtype": "STATION_TYPE14",
            "icons": [
                ["都"],
                ["市"],
                ["大"],
                ["学"]
            ],
            "customsvg": [
                {
                    "nodewidth": 32,
                    "nodeheight": 40,
                    "nodesvg": "<text x='16' y='28' font-family='Futura' font-size='16px' fill='#FF8888' text-anchor='middle' dominant-baseline='central'>13</text>"
                }
            ]
        },
        {
            "name": ["Kaigandori"],
            "stationtype": "STATION_TYPE14",
            "icons": [
                ["海"],
                ["岸"],
                ["通"],
                ["り"]
            ],
            "customsvg": [
                {
                    "nodewidth": 32,
                    "nodeheight": 40,
                    "nodesvg": "<text x='16' y='28' font-family='Futura' font-size='16px' fill='#FF8888' text-anchor='middle' dominant-baseline='central'>14</text>"
                }
            ]
        },
        {
            "name": ["Yamato"],
            "stationtype": "STATION_TYPE14",
            "icons": [
                ["大"],
                ["和"]
            ],
            "customsvg": [
                {
                    "nodewidth": 32,
                    "nodeheight": 40,
                    "nodesvg": "<text x='16' y='28' font-family='Futura' font-size='16px' fill='#FF8888' text-anchor='middle' dominant-baseline='central'>15</text>"
                }
            ]
        },
        {
            "name": ["Suizenji"],
            "stationtype": "STATION_TYPE14",
            "icons": [
                ["水"],
                ["前"],
                ["寺"]
            ],
            "customsvg": [
                {
                    "nodewidth": 32,
                    "nodeheight": 40,
                    "nodesvg": "<text x='16' y='28' font-family='Futura' font-size='16px' fill='#FF8888' text-anchor='middle' dominant-baseline='central'>16</text>"
                }
            ]
        },
        {
            "name": ["Odairamachi"],
            "stationtype": "STATION_TYPE14",
            "icons": [
                ["大"],
                ["平"],
                ["町"]
            ],
            "customsvg": [
                {
                    "nodewidth": 32,
                    "nodeheight": 40,
                    "nodesvg": "<text x='16' y='28' font-family='Futura' font-size='16px' fill='#FF8888' text-anchor='middle' dominant-baseline='central'>17</text>"
                }
            ]
        },
        {
            "name": ["Nagareyama"],
            "stationtype": "STATION_TYPE14",
            "icons": [
                ["流"],
                ["山"]
            ],
            "customsvg": [
                {
                    "nodewidth": 32,
                    "nodeheight": 40,
                    "nodesvg": "<text x='16' y='28' font-family='Futura' font-size='16px' fill='#FF8888' text-anchor='middle' dominant-baseline='central'>18</text>"
                }
            ]
        }
    ]
};

var obj_lineD = {
    "linename": "Line 15",
    "iconID": ["ICON_LINE15"],
    "fonttype": "'DIN Alternate', 'Helvetica'",
    "locknumstations": 9,
    "linestart": 256,
    "maincustomsvgbg": "<text x='16' y='460' font-family='DIN Alternate' font-size='20px' fill='#AAAAAA' text-anchor='start' dominant-baseline='central'>01/2019</text>",
    "strokes": [
        {
            "color": "#EEEEEE",
            "strokewidth": "2px",
            "linecap": "round",
            "startpoint": 3.75,
            "endpoint": 11.25,
            "startlinkheight": -128,
            "endlinkheight": 128
        },
        {
            "color": "#EEEEEE",
            "strokewidth": "2px",
            "linecap": "round",
            "startpoint": 3.75,
            "endpoint": 11.25,
            "startlinkheight": 128,
            "endlinkheight": -128
        },
        {
            "color": "#EEEEEE",
            "strokewidth": "2px",
            "linecap": "round",
            "startpoint": 7.5,
            "endpoint": 7.5,
            "startlinkheight": 128,
            "endlinkheight": -128
        },
        {
            "color": "#AA00FF",
            "strokewidth": "8px",
            "linecap": "round",
            "startpoint": 1,
            "endpoint": 14,
            "startlinkheight": 128,
            "endlinkheight": 128
        },
        {
            "color": "#AA00FF",
            "strokewidth": "8px",
            "linecap": "round",
            "startpoint": 1,
            "endpoint": 14,
            "startlinkheight": -128,
            "endlinkheight": -128
        },
        {
            "color": "#AA00FF",
            "strokewidth": "8px",
            "linecap": "round",
            "startpoint": 0,
            "endpoint": 1,
            "startlinkheight": 64,
            "endlinkheight": 128
        },
        {
            "color": "#AA00FF",
            "strokewidth": "8px",
            "linecap": "round",
            "startpoint": 0,
            "endpoint": 1,
            "startlinkheight": -64,
            "endlinkheight": -128
        },
        {
            "color": "#AA00FF",
            "strokewidth": "8px",
            "linecap": "round",
            "startpoint": 14,
            "endpoint": 15,
            "startlinkheight": 128,
            "endlinkheight": 64
        },
        {
            "color": "#AA00FF",
            "strokewidth": "8px",
            "linecap": "round",
            "startpoint": 14,
            "endpoint": 15,
            "startlinkheight": -128,
            "endlinkheight": -64
        },
        {
            "color": "#AA00FF",
            "strokewidth": "8px",
            "linecap": "round",
            "startpoint": 0,
            "endpoint": 0,
            "startlinkheight": -64,
            "endlinkheight": 64
        },
        {
            "color": "#AA00FF",
            "strokewidth": "8px",
            "linecap": "round",
            "startpoint": 15,
            "endpoint": 15,
            "startlinkheight": -64,
            "endlinkheight": 64
        }
    ],
    "stationtypes": [
        {
            "stypeID": "STATION_TYPE15",
            "stnnodes": [
                {
                    "stationstrokewidth": 2,
                    "stationradius": 8,
                    "scolor": "#AA00FF"
                }
            ],
            "stnfonttype": "'Source Sans Pro', 'Helvetica'",
            "stnfontangle": 30
        },
        {
            "stypeID": "STATION_TYPE_NONE",
            "stnnodes": [
            ],
            "stnfonttype": "'Source Sans Pro', 'Helvetica'"
        },
        {
            "stypeID": "STATION_TYPE_TRANSFER",
            "stnnodes": [
                {
                    "stationstrokewidth": 2,
                    "stationradius": 8,
                    "scolor": "#000000"
                }
            ],
            "stnfonttype": "'Source Sans Pro', 'Helvetica'",
            "stnfontsize": 18,
            "stnfontangle": 30
        }
    ],
    "stations": [
        {
            "name": [""],
            "stationtype": "STATION_TYPE15",
            "icons": [
            ],
            "customsvg": [
                {
                    "nodewidth": 128,
                    "nodeheight": 32,
                    "nodesvg": "<text x='48' y='16' dominant-baseline='middle' font-family='Source Sans Pro' font-size='16px' fill='black' font-weight='bold' text-anchor='end'>Tech Center</text>"
                }
            ]
        },
        {
            "name": ["Basin Street"],
            "stationtype": "STATION_TYPE15",
            "icons": [
            ],
            "dy": 128
        },
        {
            "name": ["Cross Street SW"],
            "stationtype": "STATION_TYPE15",
            "icons": [
            ],
            "dy": 128
        },
        {
            "name": ["Lilac Street"],
            "stationtype": "STATION_TYPE15",
            "icons": [
            ],
            "dy": 128
        },
        {
            "name": ["East Railway Station"],
            "stationtype": "STATION_TYPE_TRANSFER",
            "icons": [
                ["ICON_LINE11", "ICON_LINE12"],
                ["National Rail"]
            ],
            "dy": 128
        },
        {
            "name": ["Mangrove Avenue"],
            "stationtype": "STATION_TYPE15",
            "icons": [
            ],
            "dy": 128
        },
        {
            "name": ["Cross Street SE"],
            "stationtype": "STATION_TYPE15",
            "icons": [
            ],
            "dy": 128
        },
        {
            "name": ["Crysanthenum Road"],
            "stationtype": "STATION_TYPE15",
            "icons": [
            ],
            "dy": 128
        },
        {
            "name": [""],
            "stationtype": "STATION_TYPE15",
            "icons": [
            ],
            "customsvg": [
                {
                    "nodewidth": 128,
                    "nodeheight": 32,
                    "nodesvg": "<text x='80' y='16' dominant-baseline='middle' font-family='Source Sans Pro' font-size='16px' fill='black' font-weight='bold' text-anchor='start'>Woodberry</text>"
                }
            ]
        },
        {
            "name": ["Bark Street"],
            "stationtype": "STATION_TYPE15",
            "icons": [
            ],
            "dy": -128,
            "xshift": -2
        },
        {
            "name": ["Cross Street NE"],
            "stationtype": "STATION_TYPE15",
            "icons": [
            ],
            "dy": -128,
            "xshift": -4
        },
        {
            "name": ["Music Hall"],
            "stationtype": "STATION_TYPE15",
            "icons": [
            ],
            "dy": -128,
            "xshift": -6
        },
        {
            "name": ["Botanic Garden"],
            "stationtype": "STATION_TYPE_TRANSFER",
            "icons": [
                ["ICON_LINE16"],
                ["National Rail"]
            ],
            "dy": -128,
            "xshift": -8
        },
        {
            "name": ["Stone Road"],
            "stationtype": "STATION_TYPE15",
            "icons": [
            ],
            "dy": -128,
            "xshift": -10
        },
        {
            "name": ["Cross Street NW"],
            "stationtype": "STATION_TYPE15",
            "icons": [
            ],
            "dy": -128,
            "xshift": -12
        },
        {
            "name": ["Basin Street"],
            "stationtype": "STATION_TYPE15",
            "icons": [
            ],
            "dy": -128,
            "xshift": -14
        }
    ]
};