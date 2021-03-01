function greaterThan10(num) {
    return new Promise((resolve, reject) => {
        if(num > 10)
            resolve();
        else    
            reject();
    });
};

greaterThan10(11)
    .then(() => {
        console.log("resolve : greater than 10");
    })
    .catch(() => {
        console.log("reject : less than 10");
    })

greaterThan10(7)
    .then(() => {
        console.log("resolve : greater than 10");
    })
    .catch(() => {
        console.log("reject : less than 10");
    })