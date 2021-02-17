function funcA() {
    console.log(a);
    console.log(foo());
    var a = 1;
    function foo() {
        return 2;
    }
}
// funcA();

// line 2: Returns undefined, as only declaration was hoisted, no initialization has happened at this stage.
// line 3: Even though we call the function in our code first, before the function is written, the code still works. This is because of how hoisting works in JavaScript.


var fullName = 'John Doe';
var obj = {
    fullName: 'Colin Ihrig',
    prop: {
        fullName: 'Aurelio De Rosa',
        getFullName: function () {
            return this.fullName;
        }
    }
};
// console.log(obj.prop.getFullName());
var test = obj.prop.getFullName;
// console.log(test());
// line 26: this keyword refers to the obj
// line 27: In this case this is undefined, this keyword refers to obj has been lost.


function funcB() {
    let a = b = 0;
    a++;
    return a;
}
funcB();
//console.log(typeof a);
//console.log(typeof b);
//Line 33: the equivalent of this line is: b = 0, let a = b;
//in this case: b is global variable, amd a is local variable

function funcC() {
    console.log("1");
}
//funcC();
function funcC() {
    console.log("2");
}
//funcC();
//both funcC are hoisted up before they have been used, second funcC override the first one



function funcD1() {
    d = 1;
}
funcD1();
//console.log(d);
function funcD2() {
    var e = 1;
}
funcD2();
//console.log(typeof e);
// line 56: d declared as a global variable
// line 61: e declared in functional scope and its a local variable


function funcE() {
    console.log("line 70 : Value of f in local scope: ", f);
}
console.log("line 72 : Value of f in global scope: ", f);
var f = 1;
funcE();
//line 72: Returns undefined, as only declaration was hoisted, no initialization has happened at this stage.
//line 70: Returns 1, because we using this function after f initialization.