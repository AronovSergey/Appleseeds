var b = 1;
function someFunction(number) {
    function otherFunction(input) {
        return b;
    }
    b = 5;
    return otherFunction;
}
var firstResult = someFunction(9);
var result = firstResult(2);
// otherFunction will search b value at local scope and then in someFunction scope and find it.


var a = 1;
function b2() {
    a = 10;
    return;
    function a() { }
}
b2();
//console.log(a);
//function a is hoisted in function b, that why assigning of the value 10 is on a local a(function) and not for on a global one. 



let i;
for (i = 0; i < 3; i++) {
    const log = () => {
        console.log(i);
    }
    setTimeout(log, 100);
}
// i is declaration is outside of for loop that makes him a global variable, in this case he act like a var. and setTimeout know the last value(3) and not current value.