const arr = [1, 7, 3, 2, -5, 7, 3, 9];

for(let i = 0; i < arr.length; i++)
    console.log(arr[i]);

console.log('------------------')

const arrayLength = (arr) => {
    let index = 0;
    while(typeof arr[index] !== 'undefined'){
        index++;
    }
    return index;
}

const arraySum = (arr) => {
    let sum = 0;
    for(let i = 0; i < arr.length; i++)
        sum += arr[i];
    return sum;
}

const arrayMulti = (arr) => {
    let result = 1;
    for(let i = 0; i < arr.length; i++)
        result *= arr[i];
    return result;
}



console.log(arrayLength(arr));
console.log(arraySum(arr));
console.log(arrayMulti(arr));