function analyzeArray(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let average = arr.reduce((target, val) => target + val, 0)/arr.length;
    let length = arr.length;
    return {min, max, average, length};
}
function capitalize(str){
    let s = str.split('');
    s[0] = s[0].toUpperCase();
    return s.join('');
}
 export {analyzeArray, capitalize};