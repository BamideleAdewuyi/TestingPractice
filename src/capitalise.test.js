const capitalise = require('./capitalise');

test('Function exists', () => {
    expect(capitalise("hello")).toBeDefined();
});

test('Function reverses string', () => {
    expect(capitalise('capitalise')).toBe('Capitalise');
});

test('Function reverses another string', () => {
    expect(capitalise('another')).toBe('Another');
})