const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

const letterCounter = (array) => {
    const result = {};
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array[i].length; j++){
            let letter = array[i][j];
            if(letter >= 'A' && letter <= 'Z')
                letter = letter.toLowerCase();

            if(!(letter >= 'a' && letter <= 'z'));
            else if(result[letter])
                result[letter]++;
            else
                result[letter] = 1;
        }
    }
    return result;
}

console.log(letterCounter(array));