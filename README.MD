# Strip Map Generator

This is a specification and generator for simple strip maps.

## Usage

## Line Format
Each line object has the following required fields:

* `linename` - Name of the line. Displayed on each generated strip map in the top left.
* `iconID` - The large 48x48 icon to use for this line. Displayed to the left of the line's name.

The required `strokes` field of the line object is an array of objects that has the following requirements.
* `color` - The color of the line. Supports Hex, RGB, and HTML/CSS standard colors.
* `strokewidth` - The width of the line. 
* `dy` - [OPTIONAL] The vertical offset of the stroke.
* `startpoint` - [OPTIONAL] The starting station of the stroke. Can be negative to extend line offscreen to the left.
* `endpoint` - [OPTIONAL] The ending station of the stroke. Can be greater than number of stations on line to extend line offscreen to the right.

The required `stationtypes` field of the line object is an array of objects that has the following requirements.
* `stypeID` - The ID for the specified station, for cross referencing later.
* `stationstrokewidth` - The stroke width of the station icons.
* `stationradius` - The radius of each station icon.
* `scolor` - The color of the station stroke. Supports Hex, RGB, and HTML/CSS standard colors.

The required `stations` field of the line object is an array of objects that has the following requirements. Note that stations go from left to right on the strip map.

* `name` - Name of the station.
* `stationtype` - Station type associated with this station. Refers to a `stypeID` within `stationtypes`.
* `icons` - Array of strings referring to icon IDs to attach to the station. These are rendered below the station icon, in order.

## Icon Format
Each icon object has a single `icons` field which is an array of objects with the following specification:

* `iconID` - ID of the icon. This ID is used to cross reference specific icons. Naturally, each ID must be unique.
* `iconSVG` - SVG of the icon. Main line icons must be 48x48, while transfer icons must be 32x32. 

