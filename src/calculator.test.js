import Calculator from "./calculator";
const calc = new Calculator

test('Add method returns something', () => {
    expect(calc.add(1, 2)).toBeDefined();
})

test('Add method returns sum of two arguments', () => {
    expect(calc.add(1, 2)).toBe(3);
})

test('Add method returns sum of a different two arguments', () => {
    expect(calc.add(3343, 4535)).toBe(7878)
})