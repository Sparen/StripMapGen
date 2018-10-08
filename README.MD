# Strip Map Generator

This is a specification and generator for simple strip maps.

The following samples are provided:  
* `/test-network` - Basic usage examples covering most of the features
* `/test-helsinki` - Example utilizing the Helsinki Metro

## Usage

## Line Format
Each line object has the following required fields:

* `linename` - Name of the line. Displayed on each generated strip map in the top left.
* `iconID` - The large 48x48 icon to use for this line. Displayed to the left of the line's name.

The required `strokes` field of the line object is an array of objects that has the following options.
* `color` - The color of the line. Supports Hex, RGB, and HTML/CSS standard colors.
* `strokewidth` - The width of the line. 
* `dy` - [OPTIONAL] The vertical offset of the stroke.
* `startpoint` - [OPTIONAL] The starting station of the stroke. Can be negative to extend line offscreen to the left.
* `endpoint` - [OPTIONAL] The ending station of the stroke. Can be greater than number of stations on line to extend line offscreen to the right.
* `linkheight` - [OPTIONAL] The vertical offset from the stroke for the `endpoint`, with the `startpoint` being at the standard height of the line. Enables horizontal and angled portions. It is suggested to set `linecap` to "round" to cover the breaks in the lines if using angles.
* `dasharray` - [OPTIONAL] Sets the `stroke-dasharray` field for the stroke. Should be a string of comma delimited numbers, e.g. `4,4`
* `linecap` - [OPTIONAL] Sets the `stroke-linecap` field for the stroke. Should be "butt" (svg default if field not provided), "square", or "round"

The required `stationtypes` field of the line object is an array of objects that has the following options.
* `stypeID` - The ID for the specified station, for cross referencing later.
* `stnnodes` - Array of nodes that are part of the station

Each object in `stnnodes` contains the following options.
* `stationstrokewidth` - The stroke width of the station icon components.
* `stationradius` - [CIRCLE ONLY] The radius of the circle station icon component.
* `stationwidth` - [RECT ONLY] The width of the station icon component.
* `stationheight` - [RECT ONLY] The width of the station icon component.
* `scolor` - The stroke color of the station icon component. Supports Hex, RGB, and HTML/CSS standard colors.
* `fcolor` - [OPTIONAL] The fill color of the station icon component. Supports Hex, RGB, and HTML/CSS standard colors. Defaults to white.
* `componenttype` - [OPTIONAL] The component type of the station icon component - possible values include "RECT" for rectangle. If this field is not present, the component defaults to a circle.

The required `stations` field of the line object is an array of objects that has the following options. Note that stations go from left to right on the strip map.

* `name` - Name of the station.
* `stationtype` - Station type associated with this station. Refers to a `stypeID` within `stationtypes`.
* `icons` - Array of strings referring to icon IDs to attach to the station. These are rendered below the station icon, in order.
* `dy` - [OPTIONAL] The vertical offset of the station. Does not affect rendering of icons.
* `iconshift` - [OPTIONAL] If set to true, will apply dy shift to icons as well.
* `xshift` - [OPTIONAL] Offsets the station position using the distance between stations. Refer to Helsinki example for usage.

## Icon Format
Each icon object has a single `icons` field which is an array of objects with the following specification:

* `iconID` - ID of the icon. This ID is used to cross reference specific icons. Naturally, each ID must be unique.
* `iconSVG` - SVG of the icon. Main line icons must be 48x48, while transfer icons must be 32x32. 

