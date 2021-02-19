/*
    Simple, given a string of words, return the length of the shortest word(s).
    String will never be empty and you do not need to account for different data types.
*/

const shortestWordLen = (str) => {
    return str.split(" ").reduce((shortest, word) => word.length < shortest? word.length : shortest, Infinity);
}


// Examples 
console.log(shortestWordLen("Hello world!, my name is Slim Shady!"));
console.log(shortestWordLen("bla bla bllla bl a bllaa"));