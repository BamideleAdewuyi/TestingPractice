import Calculator from "./calculator";


test('Object add method returns something', () => {
    const calc = new Calculator;
    expect(calc.add(1, 2)).toBeDefined();
})