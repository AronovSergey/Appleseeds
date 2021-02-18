/*
    `Write a function called repeat_str which repeats the given string src exactly count times.
*/

const repeatStr = (repeats, str) => {
    let result = "";

    for(let i = 0; i < repeats; i++){
        result = result.concat(str);
    }

    return result;
};

// Examples
console.log(repeatStr(6, "I"));
console.log(repeatStr(5, "Hello"));
