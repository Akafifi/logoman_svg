const { Circle, Triangle, Square} = require ('./shapes.js')

describe('Circle', () => {
    it('renders circle', () => {
        const shape = new Circle;
        shape.setColor('blue');
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="green" />');
    })
})

describe('Triangle', () => {
    it('renders triangle', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    })
})

describe('Square', () => {
    const shape = new Square();
    shape.setColor("yellow");
    expect(shape.render()).toEqual('<rect points="150, 18 244, 182 56, 182" fill="blue" />');
})