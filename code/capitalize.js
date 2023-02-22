export function capitalize(str){
    let s = str.split('');
    s[0] = s[0].toUpperCase();
    return s.join('');
}