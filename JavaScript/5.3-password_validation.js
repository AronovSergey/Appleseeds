/*
// A function that uses a if/else conditional expression.
const passwordsValidation = password => {
    if(password.length > 7) 
        return 'Strong';
    else
        return 'Weak';
}
*/

/*
// A function that uses a ternary conditional expression.
const passwordsValidation = password => {
    return password.length > 7 ? 'Strong' : 'Weak';
}
*/

/*
// A function that uses a && logical operator
const passwordsValidation = password => {
    return password.length > 7 && typeof password === 'string' ? 'Strong' : 'Weak';
}
*/

// an “advanced” password validation function 
const passwordsValidation = password => {
    return password.length > 7 ?
        (hasCapitalLetter(password) ?'Very Strong' : 'Strong')
    : 'Weak';
}
function hasCapitalLetter(password) {
    for(let i = 0; i < password.length; i++){
        if(password[i] >= 'A' && password[i] <= 'Z')
            return true;
    }
    return false;
}


console.log(passwordsValidation("abcdefg"));
console.log(passwordsValidation("abcdefgh"));
console.log(passwordsValidation("Abcdefgh"));