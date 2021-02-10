const myCountry = {
    country: 'Israel',
    capital: 'Jerusalem',
    language: 'Hebrew',
    population: '8.884 Million',
    neighbours: ['Siria', 'Lebanon', 'Jordan', 'Egypt'],
    describe: function() {
        console.log(`${this.country} has ${this.population} people, their mother tongue is ${this.language}, they have ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
    },
    checkIsland: function() {
        this.isIsland = this.neighbours.length === 0 ? true : false;
    }
};

myCountry.describe();
myCountry.checkIsland();
console.log(myCountry.isIsland);