import { add, subtract, multiply, divide } from '../code/calculator';

test('Should return the sum', ()=>{
    expect(add(5,6)).toBe(11)
  })
  
  test('Should return difference', ()=>{
    expect(subtract(5,6)).toBe(-1)
  })
  
  test('Should return product', ()=>{
    expect(multiply(5,6)).toBe(30)
  })
  
  test('Should return quotient', ()=>{
    expect(divide(6,3)).toBe(2)
  })