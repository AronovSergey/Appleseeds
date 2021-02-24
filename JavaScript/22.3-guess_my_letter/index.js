const keys = document.querySelector(".keys");
const guess = document.querySelector(".guess");
const guidance = document.querySelector(".guidance");
const characters = 'abcdefghijklmnopqrstuvwxyz';
const randomChar = characters.charAt(Math.floor(Math.random() * characters.length));
const guessArr = [];

console.log(randomChar);

document.body.addEventListener('keyup', (e) => {
    const key = e.code.toLowerCase()[3];

    if(key === randomChar){
        guess.textContent = key;
        guidance.textContent = "Right Letter!";
        guidance.style.color = "green";
    }
    else {
        if(!guessArr.includes(key)){
            keys.textContent += `${key}, `;
            guidance.textContent = "Nope, wrong letter";
            guessArr.push(key);
        }
        else {
            guidance.textContent = `${key} has already been guessed!`;
        }
        guidance.style.color = "red";
    }
})
