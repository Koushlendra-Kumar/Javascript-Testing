import {capitalize} from '../code/capitalize';

test('Should return capitalized string', ()=>{
    expect(capitalize('hello')).toEqual('Hello')
  })