// Start of JS file
// would extend Shapes
const Shapes = require('./shapes');

class Square extends Shapes {
    constructor(text, text_color, shape_color){
        super(text, text_color, shape_color);
    };
    render()
    {
        return ``; // svg 'square' dimensions
    };
}

module.exports = Square;
// End of JS file