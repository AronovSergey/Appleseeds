/*
    Your task is to create a function that does four basic .
    The function should take three arguments - operation(string/char), value1(number), value2(number).
    The function should return result of numbers after applying the chosen operation
*/  

const operations = {
    '+': function(a, b) { return a + b },
    '*': function(a, b) { return a * b },
    '-': function(a, b) { return a - b },
    '/': function(a, b) { return a / b },
};

const basicOp = (operation, value1, value2) => {
    return operations[operation](value1, value2);
};

// Examples
console.log(basicOp('+', 4, 7));
console.log(basicOp('-', 15, 18));
console.log(basicOp('*', 5, 5));
console.log(basicOp('/', 49, 7));