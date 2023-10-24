// Start of JS file
// would extend Shapes
const Shapes = require('./shapes');
// Triangle class; render will return the triangle dimensions with user input values.
class Triangle extends Shapes {
    constructor(text, text_color, shape_color){
        super(text, text_color, shape_color);
    };
    render()
    {
        return `
        <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <polygon points="100, 15 200, 200 0, 200" fill="${this.shape_color}"/>
        <text x="100" y="185" font-size="70" text-anchor="middle" fill="${this.text_color}">${this.text}</text>
        </svg>
        `; // svg 'triangle' dimensions
    };
}

module.exports = Triangle;
// End of JS file