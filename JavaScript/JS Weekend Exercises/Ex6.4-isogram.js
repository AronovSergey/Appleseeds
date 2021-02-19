/*
    An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
*/

const isIsogram = (str) => {
    const counter = {};

    const arr = str.split("");

    for(let i = 0; i < arr.length; i++) {
        const ch = arr[i].toLowerCase()
        if(counter[ch])
            return false;
        else
            counter[ch] = 1;
    };

    return true;
};

// Examples
console.log(isIsogram(""));
console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));