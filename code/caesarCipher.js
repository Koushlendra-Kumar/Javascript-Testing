export function caesarCipher(str, k){
    let alphabets = Array.from('abcdefghijklmnopqrstuvwxyz');
    str = str.split('');
    for(let i = 0; i<str.length; i++){
        if(alphabets.includes(str[i].toLowerCase())){
            if(str[i] == str[i].toUpperCase()){
                str[i] = alphabets[(alphabets.indexOf(str[i].toLowerCase()) + k) % 26].toUpperCase();
            } else {
                str[i] = alphabets[(alphabets.indexOf(str[i].toLowerCase()) + k) % 26]
            }
                    
        }
    }
    return str.join('');
        
}