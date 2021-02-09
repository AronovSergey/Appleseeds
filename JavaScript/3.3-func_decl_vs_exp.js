const WORLD_POPULATION = 7900;

// function declaration
function percentageOfWorld1 (populationInMillions){
    return populationInMillions / WORLD_POPULATION * 100;
}

const percentageOfWorldPopulationIsrael = percentageOfWorld1(9.3);
const percentageOfWorldPopulationBrasil = percentageOfWorld1(210);
const percentageOfWorldPopulationGreece = percentageOfWorld1(10.7);

console.log(`Israel has 9.3 million people, so it's about ${percentageOfWorldPopulationIsrael} of the world population`);
console.log(`Brasil has 210 million people, so it's about ${percentageOfWorldPopulationBrasil} of the world population`);
console.log(`Greece has 10.7 million people, so it's about ${percentageOfWorldPopulationGreece} of the world population`);


// function expression
const percentageOfWorld2 = function(populationInMillions){
    return populationInMillions / WORLD_POPULATION * 100;
}

const percentageOfWorldPopulationIsrael2 = percentageOfWorld2(9.3);
const percentageOfWorldPopulationBrasil2 = percentageOfWorld2(210);
const percentageOfWorldPopulationGreece2 = percentageOfWorld2(10.7);

console.log(`Israel has 9.3 million people, so it's about ${percentageOfWorldPopulationIsrael2} of the world population`);
console.log(`Brasil has 210 million people, so it's about ${percentageOfWorldPopulationBrasil2} of the world population`);
console.log(`Greece has 10.7 million people, so it's about ${percentageOfWorldPopulationGreece2} of the world population`);

