import { caesarCipher } from "./caesarCipher";

test('Function returns something', () => {
    expect(caesarCipher('abc', 3)).toBeDefined();
});