import Calculator from "./calculator";


test('Add method returns something', () => {
    const calc = new Calculator;
    expect(calc.add(1, 2)).toBeDefined();
})

test('Add method returns sum of two arguments', () => {
    const calc = new Calculator;
    expect(calc.add(1, 2)).toBe(3);
})