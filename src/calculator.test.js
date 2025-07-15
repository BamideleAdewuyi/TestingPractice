const calculator = require('./calculator');


test('Object add method returns something', () => {
    expect(calculator.add(1, 2)).toBeDefined();
})