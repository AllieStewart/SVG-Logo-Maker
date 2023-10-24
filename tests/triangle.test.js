const Triangle = require('../lib/triangle');

describe('Triangle', () => {
    it('should return the logo.svg with the user choice of text, text color, and shape color', () => 
    {
        const triangle = new Triangle('PFD','green','yellow');
        expect(triangle.render()).toEqual(`
        <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <polygon points="100, 15 200, 200 0, 200" fill="yellow"/>
        <text x="100" y="185" font-size="70" text-anchor="middle" fill="green">PFD</text>
        </svg>
        `
        );
    });
});