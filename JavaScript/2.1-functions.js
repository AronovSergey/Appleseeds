const describeCountry = (country, population, capitalCity) => `${country} has ${population} people and its capital city is ${capitalCity}`;

const describeIsrael = describeCountry('Israel', '9.3 milion', 'Jerusalem');
const describeBrasil = describeCountry('Brasil', '210 milion', 'Brasilia');
const describeGreece = describeCountry('Greece', '10.7 milion', 'Athens');

console.log(describeIsrael);
console.log(describeBrasil);
console.log(describeGreece);