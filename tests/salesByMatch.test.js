import { countPairs } from "../code/salesByMatch";

test('Case 1 : for zero pairs', ()=>{
    expect(countPairs([])).toBe(0)
});

test('Case 2 : 2 pairs', ()=>{
    expect(countPairs([1,1,2,2,3])).toBe(2)
});

test('Case 3 : 10 pairs', ()=>{
    expect(countPairs([1,1,2,2,3,3,4,4,4,4,5,5,7,7,8,8,9,9,1,7,1])).toBe(10)
});

test('Case 4 : 3 pairs', ()=>{
    expect(countPairs([10, 20, 20, 10, 10, 30, 50, 10, 20])).toBe(3)
});