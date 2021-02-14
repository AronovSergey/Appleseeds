// 1
const print = value => { console.log(value); }

const isString = (str, fun) => {
    if(typeof str === 'string')
        fun(str);
}

isString('Sergey', print);
isString(2, print);


// 2
const dashesBetween = (str) => {
    str = str.split(" ").join("-");
    return str;
}
const firstWordUpperCase = (str, fun) => {
    str = str.split(" ");
    str[0] = str[0].toUpperCase();
    str = str.join(" ");
    str = fun(str);
    return str;
}

// 3
console.log(firstWordUpperCase("Hello, my name is Sergey", dashesBetween));

// 4
const dubleOne = x => x+x;
const dubleAll = (arr, fun) => {
    return arr.map(fun);
}
console.log(dubleAll([1, 2, 3, 4], dubleOne));

