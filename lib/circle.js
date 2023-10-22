// Start of JS file
// would extend Shapes
const Shapes = require('./shapes');

class Circle extends Shapes {
    constructor(text, text_color, shape_color){
        super(text, text_color, shape_color);
    };
    render()
    {
        return ``; // svg 'circle' dimensions
    };
}

module.exports = Circle;
// End of JS file