const lenCalculator = (arr) => {
    const result = [];

    let index = 0;

    while(arr[index]){
        result.push(arr[index].length)
        index++;
    }

    return result;
};

console.log(lenCalculator(["boo", "doooo", "hoo","ro"]));


//In my opionion for loop solution is better for this task, Because the amount of iterations is known and the stopping conditions is dependent on a array length.