const hero = {
    health: 5,
    power: 68,
    getStrength: function() {
        if (this.health <= 5) return this.power - 10;
        else return this.power;
    }
};

function whoIsStronger(getStrength){
    const myStrength = 82;
    if (getStrength() < myStrength) return "I am stronger";
    else return "You are stronger";
};

const bound = hero.getStrength.bind(hero);
console.log(whoIsStronger(bound));

;

/* 
    In a line 17 "hero.getStrength" function "this" lost reference to owner of this method, that why this.power is undefined.
    My solution is to use bind method in line 16: like this:
    const bound = hero.getStrength.bind(hero)
*/