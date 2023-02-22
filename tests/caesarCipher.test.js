import { caesarCipher } from '../code/caesarCipher';

test('Should return encrypted string', () =>{
    expect(caesarCipher('defend the east wall of the castle', 1)).toBe('efgfoe uif fbtu xbmm pg uif dbtumf')
})

test('Should return encrypted string', () =>{
    expect(caesarCipher('middle-Outz',2)).toBe('okffng-Qwvb')
})