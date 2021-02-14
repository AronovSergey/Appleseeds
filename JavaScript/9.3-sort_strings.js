// 1
const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];

console.log(foods.sort());
console.log(foods.sort().reverse());


// 2
const foodsWithUpperCase = ["falafel", "Sabich", "hummus", "pizza with extra pineapple"];

console.log(foodsWithUpperCase.sort((a, b) => a.localeCompare(b)));
console.log(foodsWithUpperCase.sort((a, b) => a.localeCompare(b)).reverse());


// 3
const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];
console.log(words.sort((a, b) => a.length < b.length ? 1 : -1));