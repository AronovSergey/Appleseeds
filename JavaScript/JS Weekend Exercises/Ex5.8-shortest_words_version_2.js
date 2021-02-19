/*
    Given a string of words, return the longest word[s].
    String will never be empty and you do not need to account for different data types.
 */

const longestWordLen = (str) => {
    return str.split(" ").reduce((longest, word) => word.length > longest? word.length : longest, 0);
};


// Examples 
console.log(longestWordLen("Hellllo my name is Slllllim Shady"));
console.log(longestWordLen("bla bla bllla bl a bllaa"));