// Start of JS file
// require triangle, circle, square, text, text_color.js files
// generates the SVG file based on user_input

// The required assets to make the user-generated SVG file
const Triangle = require('./triangle');
const Circle = require('./circle');
const Square = require('./square');

// Creates the actual logo.svg to output to /examples
function createSVG(text, text_color, shape, shape_color)
{
    let newShape;
    // newShape is the svg shape based on the user's choice
    // will render the text, text color, and shape color as well

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
    // returns the logo.svg
    return newShape;
}

module.exports = { createSVG };
// End of JS file