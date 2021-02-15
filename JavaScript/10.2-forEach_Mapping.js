const nums = [1, 2, 3, 4, 5, 6];
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const str = "Hello My Name Is Sergey!";

// *** 1 ***
// const doubleValues = (arr) => {
//     const result = [];
//     arr.forEach(value => {
//         result.push(value + value);
//     });
//     return result;
// };
const doubleValues = (arr) => {
    return arr.map(value => value + value);
};

//console.log(doubleValues(nums));



// *** 2 ***
const onlyEvenValues = (arr) => {
    const result = [];
    arr.forEach(value => {
        if(value % 2 === 0)
            result.push(value);
    });
    return result;
};

// console.log(onlyEvenValues(nums));



// *** 3 ***
const showFirstAndLast = (arr) => {
    const result = [];
    arr.forEach((value, index) => {
        if(index === 0 || index === arr.length - 1)
            result.push(value);
    })
    return result;
};

// console.log(showFirstAndLast(fruits));



// *** 4 ***
const vowelCount = (str) => {
    const vowel = { a: 0, e: 0, i: 0, o: 0, u: 0 };
    const arr = str.split("");
    arr.forEach(val => {
        if(['a', 'e', 'i', 'o', 'u'].includes(val.toLowerCase())){
            vowel[val.toLowerCase()]++;
        }
    });
    return vowel;
};

// console.log(vowelCount(str));



// *** 5 ***
// const capitalize = (str) => {
//     const arr = str.split("");
//     arr.forEach((val, index) => {
//         arr[index] = val.toUpperCase();
//     });
//     return arr.join("");
// };
const capitalize = (str) => {
    return str.split("").map(letter => letter.toUpperCase()).join("");
};

//console.log(capitalize(str));


// *** 6 ***
// const shiftLetters = (str) => {
//     const arr = str.split("");

//     arr.forEach((val, index) => {
//         if(val === 'a')
//             arr[index] = 'z';
//         else if(val === 'A')
//             arr[index] = 'Z';
//         else if((val > 'a' && val <= 'z') || (val > 'A' && val <= 'Z')){
//             const asciiCode = val.charCodeAt(0);
//             arr[index] = String.fromCharCode(asciiCode - 1);
//         } 
//     });

//     return arr.join("");
// };
const shiftLetters = (str) => {
    return str.split("").map(val => {
        if(val === 'a')
            return 'z';
        else if(val === 'A')
            return 'Z';
        else if((val > 'a' && val <= 'z') || (val > 'A' && val <= 'Z')){
            const asciiCode = val.charCodeAt(0);
            return String.fromCharCode(asciiCode - 1);
        } 
        else
            return val;
    }).join("");
};
console.log(shiftLetters(str));




// *** 7 ***
// const swapCase = (str) => {
//     const arr = str.split(" ");
//     arr.forEach((word, index) =>{
//         if(index % 2 === 0)
//             arr[index] = capitalize(word);
//     });
//     return arr.join(" ");
// }
const swapCase = (str) => {
    return str.split(" ").map((word, index) =>{
        if(index % 2 === 0)
            return capitalize(word);
        else
            return word
    }).join(" ");
}
console.log(swapCase(str));