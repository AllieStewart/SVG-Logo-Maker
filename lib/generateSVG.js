// Start of JS file
// require triangle, circle, square, text, text_color.js files
// generates the SVG file based on user_input

// The required assets to make the user-generated SVG file
const Triangle = require('./triangle');
const Circle = require('./circle');
const Square = require('./square');
const Text = require('./text');
const Color = require('./colors');
// use const textColor = new Color();
// const shapeColor = new Color(); ?

// Creates the actual logo.svg to output to /examples
// needs arguments (text, text_color, shape, shape_color)?
function createSVG()
{
    // would need to determine the text, the text_color,
    // the shape, and shape_color

    // returns the logo.svg info
}

module.exports = { createSVG };
// End of JS file