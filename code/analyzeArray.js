export function analyzeArray(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let average = arr.reduce((target, val) => target + val, 0)/arr.length;
    let length = arr.length;
    return {min, max, average, length};
}

