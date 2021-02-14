const objOne = {
    name: 'Sergey'
};

const objTwo = {
    name: 'David'
};

const objThree = {
    name: 'Ella'
};

const myMap = new Map();

myMap.set(objOne, 123456);
myMap.set(objTwo, 234567);
myMap.set(objThree, 345678);


for(const person of myMap){
    console.log(person[0], person[1])
}