export function analyseArray(arr) {
    const average = arr.reduce(((acc, current) => (acc + current)))/arr.length;
    const minimum = Math.min(...arr)
    return {
        "average": average,
        "min": minimum
    }
};