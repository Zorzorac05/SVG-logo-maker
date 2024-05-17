const {Circle, Triangle, Square} = require("./shapes");

describe('Circle', () => {
    test('renders correctly', () => {
        const shape = new Circle();
        var color = 'red';
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}">`);
    });
});

describe('Triangle', () => {
    test('renders correctly', () => {
        const shape = new Triangle();
        var color = 'green';
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points ="0,200 300,200 150,0" fill="${color}">`);
    });
});

describe('Square', () => {
    test('renders correctly', () => {
        const shape = new Square();
        var color = 'blue';
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="50%" y="50%" height="100%" width="100%" fill="${color}">`);
    });
});