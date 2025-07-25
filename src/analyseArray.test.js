import { analyseArray } from "./analyseArray";

test('Function returns something', () => {
    expect(analyseArray([3])).toBeDefined();
});

test('Function can calculate average', () => {
    expect(analyseArray([1,8,3,4,2,6])['average']).toBe(4);
});