var obj_line3_v1 = {
    "linename": "Basic Usage",
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
        }
    ],
    "stations": [
        {
            "name": ["Single Icon"],
            "stationtype": "STATION_TYPE1",
            "icons": [
                ["ICON_TURQUOISE"]
            ]
        },
        {
            "name": ["Vertical"],
            "stationtype": "STATION_TYPE1",
            "icons": [
                ["ICON_RED"],
                ["ICON_BLUE"],
                ["ICON_ORANGE"]
            ]
        },
        {
            "name": ["Side by Side"],
            "stationtype": "STATION_TYPE1",
            "icons": [
                ["ICON_AQUA", "ICON_AQUAMARINE", "ICON_TURQUOISE"],
                ["ICON_RED", "ICON_PINK", "ICON_HOTPINK"]
            ]
        },
        {
            "name": ["Combination"],
            "stationtype": "STATION_TYPE1",
            "icons": [
                ["ICON_AQUA", "ICON_AQUAMARINE", "ICON_TURQUOISE"],
                ["ICON_PINK", "ICON_HOTPINK"],
                ["ICON_PURPLE"]
            ]
        },
        {
            "name": ["Icon as Station Type"],
            "stationtype": "STATION_TYPE1",
            "icons": [
                ["ICON_OTHER"]
            ],
            "iconoffset": -32
        }
    ]
};

var obj_line3_v2 = {
    "linename": "Text Icon Usage",
    "iconID": ["ICON_GREEN"],
    "fonttype": "'Helvetica', 'ヒラギノ角ゴ Pro W3', 'Hiragino Kaku Gothic Pro', Osaka, 'メイリオ', 'Meiryo'",
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
            ]
        }
    ],
    "stations": [
        {
            "name": ["Basic Text Icons"],
            "stationtype": "STATION_TYPE1",
            "icons": [
                ["Bus Terminal"]
            ]
        },
        {
            "name": ["Combined Icons + Text Icons"],
            "stationtype": "STATION_TYPE1",
            "icons": [
                ["ICON_PURPLE"],
                ["National Rail"],
                ["Airport"]
            ]
        },
        {
            "name": ["Text Icons for Vertical Text"],
            "stationtype": "STATION_TYPE2",
            "icons": [
                ["平"],
                ["和"],
                ["通"],
                ["り"],
                ["ICON_AQUA"]
            ]
        }
    ]
};

