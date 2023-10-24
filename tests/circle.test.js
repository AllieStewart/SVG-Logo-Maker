const Circle = require('../lib/circle');

describe('Circle', () => {
    it('should return the logo.svg with the user choice of text, text color, and shape color', () => 
    {
        const circle = new Circle('TBH','white','blue');
        expect(circle.render()).toEqual(`
        <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="100" fill="blue"/>
        <text x="150" y="125" font-size="70" text-anchor="middle" fill="white">TBH</text>
        </svg>
        `
        );
    });
});