const capitalise = require('./capitalise');

test('Function exists', () => {
    expect(capitalise("hello")).toBeDefined();
});

test('Function reverses string', () => {
    expect(capitalise('capitalise')).toBe('Capitalise')
});