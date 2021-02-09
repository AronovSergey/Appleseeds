// language:string, isIsland:boolean, population:number country:string
const countryToLiveIn = (language, isIsland, population, country) => {
    if(language === 'English' && population < 50 && !isIsland)  
        console.log(`You should live in ${country}`);
    else 
        console.log(`${country} does not meet your criteria`);
}

countryToLiveIn('Hebrew', false, 9.3, 'Israel');
countryToLiveIn('English', false, 40, 'United Kingdom');