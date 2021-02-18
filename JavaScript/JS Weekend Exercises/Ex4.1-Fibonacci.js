/*
    “Write a function to return an n element in Fibonacci sequence” is one of the most common   questions you can hear during the coding challenge interview part. In this blogpost I’m going to walk through the two of the most typical solutions for this problem and also cover a dreadful (for most of novice developers) topic of time complexity.
    So what is a Fibonacci sequence? According to Wikipedia:
    “In mathematics, the Fibonacci numbers are the numbers in the following integer sequence,
    called the Fibonacci sequence, and characterized by the fact that every number after the first
    two is the sum of the two preceding ones.”
*/

const fibonacci = (n) => {
    let prev = 0;
    let curr = 1;
    for(let i = 2; i < n; i++) {
        const next = prev + curr;
        prev = curr;
        curr = next;
    }
    return curr;
}

// Examples
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(8));