import { caesarCipher } from "./caesarCipher";

test('Function returns something', () => {
    expect(caesarCipher('abc', 3)).toBeDefined();
});

test('Function shifts abc to def', () => {
    expect(caesarCipher('abc', 3)).toBe('def');
})