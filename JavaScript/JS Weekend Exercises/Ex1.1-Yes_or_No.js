/* 
    Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false
*/

const booleanToString = (bool) => {
    return typeof bool === "boolean" ?
        (bool ? "Yes" : "No") :
        ("Wrong input!");
}

//Tests
console.log(booleanToString(true));
console.log(booleanToString(false));
console.log(booleanToString(2));
console.log(booleanToString("Hello world"));