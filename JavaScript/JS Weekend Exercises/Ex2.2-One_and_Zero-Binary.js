/*
    Given an array of ones and zeroes, convert the equivalent binary value to an integer.
    Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
*/

const binaryToDecimal = (arr) => {
    let binary = 0;
    arr.forEach(num => {
        binary *= 10;
        binary += num;
    });
    return parseInt(binary, 2);
}

 //Tests
 console.log(binaryToDecimal([0, 0, 0, 1]));
 console.log(binaryToDecimal([1, 1, 1, 1]));
 console.log(binaryToDecimal([0, 1, 1, 0]));
 console.log(binaryToDecimal([0, 1, 1, 0, 0, 1]));