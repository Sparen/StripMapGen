var obj_lineA = {
    "linename": "Lines 11 & 12",
    "iconID": ["ICON_LINE11", "ICON_LINE12"],
    "fonttype": "DIN Alternate",
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
            "stnfonttype": "Source Sans Pro"
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
            "stnfonttype": "Source Sans Pro"
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
            "stnfonttype": "Source Sans Pro",
            "stnfontsize": "18px"
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
    "fonttype": "'DIN Alternate', 'Microsoft Yahei', '微软雅黑', STXihei, '华文细黑'",
    "strokes": [
        {
            "color": "#AACCFF",
            "strokewidth": "20px",
            "startpoint": 8,
            "endpoint": 8,
            "startlinkheight": -128,
            "endlinkheight": 128
        },
        {
            "color": "#AACCFF",
            "strokewidth": "20px",
            "startpoint": 16,
            "endpoint": 16,
            "startlinkheight": -128,
            "endlinkheight": 128
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
            "stnfonttype": "'Source Sans Pro', 'Microsoft Yahei', '微软雅黑', STXihei, '华文细黑'"
        },
        {
            "stypeID": "STATION_TYPE_NONE",
            "stnnodes": [
            ],
            "stnfonttype": "'Source Sans Pro', 'Microsoft Yahei', '微软雅黑', STXihei, '华文细黑'"
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
            "stnfonttype": "'Source Sans Pro', 'Microsoft Yahei', '微软雅黑', STXihei, '华文细黑'",
            "stnfontsize": "18px"
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
            "name": ["Northwind Road"],
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
            "name": ["天山北路"],
            "stationtype": "STATION_TYPE13",
            "icons": [
            ]
        },
        {
            "name": ["平安大路"],
            "stationtype": "STATION_TYPE13",
            "icons": [
            ]
        },
        {
            "name": ["鲜花广场"],
            "stationtype": "STATION_TYPE13",
            "icons": [
            ]
        },
        {
            "name": ["大叔路"],
            "stationtype": "STATION_TYPE13",
            "icons": [
            ]
        },
        {
            "name": ["文化广场"],
            "stationtype": "STATION_TYPE13",
            "icons": [
            ]
        },
        {
            "name": ["体育门"],
            "stationtype": "STATION_TYPE13",
            "icons": [
            ]
        },
        {
            "name": ["地铁大学"],
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
    "fonttype": "'DIN Alternate', 'ヒラギノ角ゴ Pro W3', 'Hiragino Kaku Gothic Pro', Osaka, 'メイリオ', 'Meiryo'",
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
        }
    ],
    "stationtypes": [
        {
            "stypeID": "STATION_TYPE14",
            "stnnodes": [
                {
                    "stationsvg": "<rect x='0' y='0' height='40' width='32' stroke-width='4px' rx='6px' stroke='#FFAAAA' fill='white'></path>",
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
            "stnfonttype": "'Source Sans Pro', 'ヒラギノ角ゴ Pro W3', 'Hiragino Kaku Gothic Pro', Osaka, 'メイリオ', 'Meiryo'",
        },
        {
            "stypeID": "STATION_TYPE_NONE",
            "stnnodes": [
            ],
            "stnfonttype": "'Source Sans Pro', 'ヒラギノ角ゴ Pro W3', 'Hiragino Kaku Gothic Pro', Osaka, 'メイリオ', 'Meiryo'",
        },
        {
            "stypeID": "STATION_TYPE_TRANSFER",
            "stnnodes": [
                {
                    "stationsvg": "<rect x='0' y='0' height='40' width='32' stroke-width='4px' rx='6px' stroke='#FFAAAA' fill='white'></path>",
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
            "stnfonttype": "'Source Sans Pro', 'ヒラギノ角ゴ Pro W3', 'Hiragino Kaku Gothic Pro', Osaka, 'メイリオ', 'Meiryo'",
            "stnfontsize": "18px"
        }
    ],
    "stations": [
        {
            "name": ["Verdant Gardens"],
            "stationtype": "STATION_TYPE14",
            "icons": [
            ],
            "textoffset": -28,
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
            "textoffset": -28,
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
            "textoffset": -28,
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
            "textoffset": -28,
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
            "textoffset": -28,
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
            "textoffset": -28,
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
            "textoffset": -28,
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
            "textoffset": -28,
            "iconoffset": 28,
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
            "textoffset": -28,
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
            "textoffset": -28,
            "iconoffset": 28,
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
            "textoffset": -28,
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
            "textoffset": -28
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
            "textoffset": -28,
            "iconoffset": 28,
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
            "textoffset": -28,
            "iconoffset": 28,
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
            "textoffset": -28,
            "iconoffset": 28,
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
            "textoffset": -28,
            "iconoffset": 28,
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
            "textoffset": -28,
            "iconoffset": 28,
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
            "textoffset": -28,
            "iconoffset": 28,
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
            "textoffset": -28,
            "iconoffset": 28,
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