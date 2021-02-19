/*
    Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
    The output should be two capital letters with a dot separating them.
*/

const initials = (name) => {
    const arr  =  name.split(" ");
    return (arr[0][0].toUpperCase() + '.').concat(arr[1][0].toUpperCase());
};

// Examples
console.log(initials("Sam Harris"));
console.log(initials("Patrick Feeney"));