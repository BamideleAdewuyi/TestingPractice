const reverseString = require('./reverseString')

test('Function returns something', () => {
    expect(reverseString("anything")).toBeDefined();
})

test('Function reverses a string', () => {
    expect(reverseString("reverse")).toBe("esrever");
})