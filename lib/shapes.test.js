// lib/shapes.test.js
const path = require('path');
const { Triangle, Circle, Square } = require(path.resolve(__dirname, './shapes.js'));

describe('Shape classes', () => {
  test('Triangle renders correctly', () => {
    const shape = new Triangle('blue');
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
  });

  test('Circle renders correctly', () => {
    const shape = new Circle('red');
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
  });

  test('Square renders correctly', () => {
    const shape = new Square('green');
    expect(shape.render()).toEqual('<rect x="70" y="20" width="160" height="160" fill="green" />');
  });
});
