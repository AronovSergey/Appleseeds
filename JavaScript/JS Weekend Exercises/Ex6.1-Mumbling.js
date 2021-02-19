/*
    This time no story, no theory. The examples below show you how to write function accum:
    Examples:
    accum("abcd") -> "A-Bb-Ccc-Dddd"
    accum("RqaEzty") -> "R-Qq-Aaa-Eeeezzzz-Tttttt-Yyyyyyy"
    accum("cwAt") -> "C-Ww-Aaa-Tttt"
    The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

const accum = (str) => {
    let result = '';
    for(let i = 0; i < str.length; i++){
        result += str[i].toUpperCase();
        for(let j = 0; j < i; j++)
            result += str[i].toLowerCase();
        if(i !== str.length - 1)
            result += '-';
    }
    return result;
}

// Examples 
console.log(accum("abcd"));
console.log(accum("RqaEzty"));
console.log(accum("cwAt"));