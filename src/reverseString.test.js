const reverseString = require('./reverseString')

test('Function returns something', () => {
    expect(reverseString("anything")).toBeDefined();
})

test('Function reverses a string', () => {
    expect(reverseString("reverse")).toBe("esrever");
})

test('Function reverses a string with spaces', () => {
    expect(reverseString("reverse something with spaces")).toBe("secaps htiw gnihtemos esrever");
})