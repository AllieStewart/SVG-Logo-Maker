const Square = require('../lib/square');

describe('Square', () => {
    it('should return the logo.svg with the user choice of text, text color, and shape color', () => 
    {
        const square = new Square('GGZ','red','black');
        expect(square.render()).toEqual(`
        <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" fill="black"/>
        <text x="100" y="125" font-size="70" text-anchor="middle" fill="red">GGZ</text>
        </svg>
        `
        );
    });
});