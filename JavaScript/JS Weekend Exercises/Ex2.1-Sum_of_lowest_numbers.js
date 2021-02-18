/*
    Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive i ntegers. No floats or non-positive integers will be passed. For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7. [10, 343445353, 3453445, 3453545353453] should return 3453455.
*/

const sumOf2Lowest = (arr) => {
    if(typeof arr !== 'object')
        return 'Wrong Input!';
    const sortedArr = arr.sort((a, b) => a - b);
    return sortedArr[0] + sortedArr[1];
}

//tests
console.log(sumOf2Lowest([19, 5, 42, 2, 77]));
console.log(sumOf2Lowest([10, 343445353, 3453445, 3453545353453]));
console.log(sumOf2Lowest("Hello world!"));
