const jumps = [5,5,8,7,-1,5];

const avgJumper = (jumps) => {
    const result = [];
    let sum = 0, tries = 0;
    for(let i = 0; i < jumps.length; i++) {
        if(jumps[i] !== -1){
            sum += jumps[i];
            tries++;
        } 
        if((i + 1) % 3 === 0){
            result.push(Math.round(sum / tries));
            sum = 0;
            tries = 0;
        }
    }
    return result;
}

const bestAvgJump = (jumps) => {
    const arrayOfAvg = avgJumper(jumps);
    let max = arrayOfAvg[0];

    for(let i = 1; i < arrayOfAvg.length; i++){
        if(arrayOfAvg[i] > max)
            max = arrayOfAvg[i];
    }

    return max;
}

const bestJump = (jumps) => {
    let max = jumps[0];

    for(let i = 1; i < jumps.length; i++){
        if(jumps[i] > max)
            max = jumps[i];
    }

    return max;
}

console.log(avgJumper(jumps));
console.log(bestAvgJump(jumps));
console.log(bestJump(jumps));