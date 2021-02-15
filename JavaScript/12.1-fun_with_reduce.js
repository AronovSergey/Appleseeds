const max = (arr) => {
    return arr.reduce((max, num) => num > max ? num : max )
} 

const sumOfEvenNum = (arr) => {
    return arr.reduce((sum, num, index) => index % 2 === 0 ? sum + num : sum)
} 

const average = (arr) => {
    const sum = arr.reduce((sum, num) => sum + num), len = arr.length;
    return sum / len;
}

const arr = [2, 8, 20, 3, 8, 60, 2, 3];

console.log(max(arr));
console.log(sumOfEvenNum(arr));
console.log(average(arr));