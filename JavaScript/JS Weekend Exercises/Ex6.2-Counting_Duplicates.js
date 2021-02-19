/*
    Count the number of Duplicates
    Write a function that will return the count of distinct case-insensitive alphabetic characters and umeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.   
*/

const countingDuplicates = (str) => {
    const counter = new Map();
    
    str.split("").forEach(ch => {
        ch = ch.toLowerCase();
        if(counter.has(ch))
            counter.set(ch, counter.get(ch) + 1);
        else
            counter.set(ch, 1);
    });

    let max = 0;

    for(const [key, value] of counter)
        if(value > max)
            max = value;

    return max;
};


// Examples
console.log(countingDuplicates('abcde'));
console.log(countingDuplicates('aabbcde'));
console.log(countingDuplicates('aabBcde'));
console.log(countingDuplicates('indivisibility'));
console.log(countingDuplicates('Indivisibilities'));
console.log(countingDuplicates('aA11'));
console.log(countingDuplicates('ABBA'));