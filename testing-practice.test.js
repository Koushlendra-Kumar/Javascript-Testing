import {analyzeArray, capitalize} from './testing-practice';

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