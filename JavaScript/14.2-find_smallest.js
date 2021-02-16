function findSmallest(a, b, c){
    if (a > c && b > c){
        return c;
    } else if (c > a && b > a) {
        return a;
    } else {
        return b;
    }
}

console.log(findSmallest(52,66, 2));

/*
Line 2: ranges has written in a wrong way
Line 11: smallest was not spelled right
Debug method: stack trace

logic err: wrong Conditional Statements
Debug method: Breaking points
*/