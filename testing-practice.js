let arr = [1,8,3,4,2,6]

function analyzeArray(array) {
    let min = Math.min(...array);
    let max = Math.max(...array);
    let average = array.reduce((target, val) => target + val, 0)/arr.length;
    let length = array.length;
    return {min, max, average, length};
}
module.exports = analyzeArray;