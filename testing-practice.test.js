import {analyzeArray, capitalize, add, subtract, multiply, divide, reverseString} from './testing-practice';

test('Should return an object with avg, min, max and length', ()=>{
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
      })
})

test('Should return capitalized string', ()=>{
  expect(capitalize('hello')).toEqual('Hello')
})

test('Should return reversed string', ()=>{
  expect(reverseString('hello')).toEqual('olleh')
})

test('Should return capitalized string', ()=>{
  expect(add(5,6)).toBe(11)
})

test('Should return capitalized string', ()=>{
  expect(subtract(5,6)).toBe(-1)
})

test('Should return capitalized string', ()=>{
  expect(multiply(5,6)).toBe(30)
})

test('Should return capitalized string', ()=>{
  expect(divide(6,3)).toBe(2)
})