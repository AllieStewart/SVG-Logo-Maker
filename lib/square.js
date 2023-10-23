// Start of JS file
// would extend Shapes
const Shapes = require('./shapes');
// Square class; render will return the square dimensions with user input values.
class Square extends Shapes {
    constructor(text, text_color, shape_color){
        super(text, text_color, shape_color);
    };
    render()
    {
        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" fill="${this.shape_color}"/>
        <text x="100" y="125" font-size="70" text-anchor="middle" fill="${this.text_color}">${this.text}</text>
    </svg>`; // svg 'square' dimensions
    };
}

module.exports = Square;
// End of JS file