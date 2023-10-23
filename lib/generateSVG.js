// Start of JS file
// require triangle, circle, square, text, text_color.js files
// generates the SVG file based on user_input

// The required assets to make the user-generated SVG file
const Triangle = require('./triangle');
const Circle = require('./circle');
const Square = require('./square');

// Creates the actual logo.svg to output to /examples
// needs arguments (text, text_color, shape, shape_color)?
function createSVG(text, text_color, shape, shape_color)
{
    let newShape;
    // would need to determine the text, the text_color,
    // the shape, and shape_color
    if (shape === "Triangle")
    {
        newShape = new Triangle(text, text_color, shape_color).render();
    }

    if (shape === "Circle")
    {
        newShape = new Circle(text, text_color, shape_color).render();
    }
    
    if (shape === "Square")
    {
        newShape = new Square(text, text_color, shape_color).render();
    }
    // returns the logo.svg info
    return newShape;
}

module.exports = { createSVG };
// End of JS file