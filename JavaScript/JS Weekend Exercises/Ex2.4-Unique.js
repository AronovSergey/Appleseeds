/*
    There is an array with some numbers. All numbers are equal except for one. Try to find it!
*/

const findUniq = (arr) => {
    const sortedArr = arr.sort((a, b) => a - b);
    return sortedArr[0] === sortedArr[1] ? sortedArr[arr.length - 1] : sortedArr[0];
};

// Tests
console.log(findUniq(([ 1, 1, 1, 2, 1, 1 ])));
console.log(findUniq(([ 0, 0, 0.55, 0, 0 ])));
console.log(findUniq(([ 1, 1, 1, 0, 1, 1 ])));
