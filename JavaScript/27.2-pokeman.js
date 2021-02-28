function Pokemon(pokemonName, pokemonType, pokemonAttackList){
    this.name = pokemonName;
    this.type = pokemonType;
    this.attackList = pokemonAttackList;
}

const pikachu = new Pokemon('Pikachu', 'electric', ['Thunder Shock', 'Thunder Wave', 'Double Team', 'Electro Ball']);
const charmander = new Pokemon('Charmander', 'fire', ['Growl', 'Scratch', 'Fire Fang']);
const bulbasaur = new Pokemon('Bulbasaur', 'grass', ['Magical Leaf', 'Solar Beam', 'Giga Drain']);

Pokemon.prototype.callPokemon = function(){
    console.log(`I choose you, ${this.name}`);
}

Pokemon.prototype.attack = function(index) {
    console.log(`${this.name} used ${this.attackList[index]}`);
}


pikachu.callPokemon();
pikachu.attack(1);
bulbasaur.callPokemon();
bulbasaur.attack(2);