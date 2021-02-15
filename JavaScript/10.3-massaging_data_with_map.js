const data = [
    {
        name: "John",
        birthday: "1-1-1995",
        favoriteFoods: {
            meats: ["hamburgers", "sausages"],
            fish: ["salmon", "pike"],
        },
    },
    {
        name: "Mark",
        birthday: "10-5-1980",
        favoriteFoods: {
            meats: ["hamburgers", "steak", "lamb"],
            fish: ["tuna", "salmon", "barracuda"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["ham", "chicken"],
            fish: ["pike"],
        },
    },
    {
        name: "Thomas",
        birthday: "1-10-1990",
        favoriteFoods: {
            meats: ["bird", "rooster"],
            fish: ["salmon"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["hamburgers", "lamb"],
            fish: ["anchovies", "tuna"],
        },
    },
];

const getNames = (arr) => {
    return arr.map(person => person.name);
};

const getBefore1990 = (arr) => {
    return arr.filter(person => {
        const birthday = person.birthday;
        const birthdayYear = birthday.slice(birthday.length - 4, birthday.length);
        return birthdayYear < 1990;
    });
};

const foodsCounter = (arr) => {
    const food = {};

    arr.forEach(person => {
        person.favoriteFoods.meats.forEach(meat => {
            if(food[meat])
                food[meat]++;
            else
                food[meat] = 1;
        });
        person.favoriteFoods.fish.forEach(fish => {
            if(food[fish])
                food[fish]++;
            else
                food[fish] = 1;
        });
    });

    return food;
};

// 1
//console.log(getNames(data));

// 2
//console.log(getBefore1990(data));

// 3
console.log(foodsCounter(data));