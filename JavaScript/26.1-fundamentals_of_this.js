Question 1:
In your own words what will this point to and why?(Note
this is the global scope)
console.log(this);

return { }, Because NodeJS runs your code in a module, and this references the object it creates for your module's exports, 



Question 2:
a. In your own words what will this point to and why.
b. How can you fix this code.
const myObj = {
 name: "Timmy",
 greet: () => {
 console.log(`Hello ${this.name}`);
 },
};
myObj.greet();

a.In arrow functions this will be set to the global object;
b.Change it to regular function



Question 3:
In your own words what will this point to and why?
const myFuncDec = function () {
 console.log(this);
};

In a function this refers to owner of this method, in this case global object.



Question 4:
In your own words what will this point to and why?
const myFuncArrow = () => {
 console.log(this);
};

In arrow functions, this retains the value of the enclosing lexical context's this. In global code, it will be set to the global object
return { }, Because NodeJS runs your code in a module, and this references the object it creates for your module's exports, 



myFuncArrow();
Question 5:
a. In your own words what will this point to and why.
b. How can you fix this code.
document.querySelector(".element").addEventListener(() => {
 console.log(this);
});

In this case this referring to selected element