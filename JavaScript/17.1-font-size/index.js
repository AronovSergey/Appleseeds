const someText = document.querySelector('span');
const firstButton = document.querySelectorAll('button')[0];
const secondButton = document.querySelectorAll('button')[1];

let someTextFontSize = 16;
someText.style.fontSize = '16px';

firstButton.addEventListener('click', () => {
    if(someTextFontSize <  100){
        someTextFontSize++;
        someText.style.fontSize = someTextFontSize + 'px';
    }     
});

secondButton.addEventListener('click', () => {
    if(someTextFontSize >  6){
        someTextFontSize--;
        someText.style.fontSize = someTextFontSize + 'px';
    }     
});