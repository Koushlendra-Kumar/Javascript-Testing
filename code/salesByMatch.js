export function countPairs(array){
    let count = {};
    array.forEach(element => {
        count[element] = count[element] +1 || 1
    });
    return Object.values(count).reduce((count,element) =>{
        return count + Math.floor(element/2);
    },0)
}
