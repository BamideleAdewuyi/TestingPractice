import { caesarCipher } from "./caesarCipher";

test('Function returns something', () => {
    expect(caesarCipher('abc', 3)).toBeDefined();
});

test('Function shifts abc to def', () => {
    expect(caesarCipher('abc', 3)).toBe('def');
});

test('Function can handle wrapping from z to a. ("xyz", 3) should return "abc"', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc')
});