function makeAllCaps(array) {
    return new Promise(resolve => {
        resolve(array.map(word => word.toUpperCase()))
    });
}

function sortWords(array) {
    const isOnlyString = array.reduce((isOnlyString, word) => isOnlyString && typeof word === 'string', true)
    return new Promise((resolve, reject) => {
        if(isOnlyString)
            resolve(array.sort());
        else    
            reject("err : The array does not include only words strings");
    });
}

// sortWords(['Hello', 'my', 'name', 'is', 'Sergey'])
//     .then(function(array) {
//         console.log("sortWords Done");
//         return makeAllCaps(array);
//     })
//     .then(function(array) {
//         console.log("makeAllCaps Done")
//         console.log(array)
//     })
//     .catch((err) => {
//         console.log(err);
//     })


sortWords(['Hello', 'my', 'name', 'is', 'Sergey', 4])
    .then(function(array) {
        console.log("sortWords Done");
        return makeAllCaps(array);
    })
    .then(function(array) {
        console.log("makeAllCaps Done")
        console.log(array)
    })
    .catch((err) => {
        console.log(err);
    })