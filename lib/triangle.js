// Start of JS file
// would extend Shapes
const Shapes = require('./shapes');

class Triangle extends Shapes {
    constructor(text, text_color, shape_color){
        super(text, text_color, shape_color);
    };
    render()
    {
        return ``; // svg 'triangle' dimensions
    };
}

module.exports = Triangle;
// End of JS file