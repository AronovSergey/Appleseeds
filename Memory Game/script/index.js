const board = document.querySelector('.game-section');
const cardsArray = document.querySelectorAll('.card');
const score = document.querySelector('.score');
const flips = document.querySelector('.flips');

const cardsValueArray = shuffle(['castle', 'castle', 'dog', 'dog', 'dragon', 'dragon', 'pony', 'pony', 'prince', 'prince', 'star', 'star']);


const chosenCards = {
    isTwoOpened: true,
    firstValue: null,
    firstIndex: null,
    add: function(value, index){
        this.isTwoOpened = !this.isTwoOpened;

        if(this.isTwoOpened) {
            removeAllEventsLiseners();

            if(this.firstValue !== value) {
                setTimeout(() => {
                    flipCard(this.firstIndex);
                    flipCard(index);
                    minusTwo();
                    addAllEventsLiseners();
                }, 1000);
            }
            else {
                plusTeen();
                addAllEventsLiseners();
            }

            
        }
        else {
            this.firstValue = value;
            this.firstIndex = index;
        }
    }
}

cardsValueArray.forEach((value, index) => {
    const img = document.createElement('img');
    img.src = `./images/${value}.png`;
    img.alt = `${value}.png`;
    remove(img);
    cardsArray[index].appendChild(img);

    const span = document.createElement('span');
    span.textContent = `${value}`;
    remove(span);
    cardsArray[index].appendChild(span);

    cardsArray[index].setAttribute('value', value);
    cardsArray[index].addEventListener('click', cardClickHandler);
})


function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
}
function display(element) {
    element.classList.remove('display-none');
}
function remove(element) {
    element.classList.add('display-none');
}
function flipCard(index) {
    remove(cardsArray[index].firstElementChild);
    remove(cardsArray[index].lastElementChild);
}
function minusTwo () {
    if(parseInt(score.textContent) > 1)
        score.textContent = parseInt(score.textContent) - 2;
    flips.textContent = parseInt(flips.textContent) + 1;
}
function plusTeen () {
    score.textContent = parseInt(score.textContent) + 10;
    flips.textContent = parseInt(flips.textContent) + 1;
}
function cardClickHandler() {
    const index = this.getAttribute('index');
    const value = this.getAttribute('value');

    display(cardsArray[index].firstElementChild);
    display(cardsArray[index].lastElementChild);

    chosenCards.add(value, index);

}
function removeAllEventsLiseners() {
    for(let i = 0; i < cardsArray.length; i++){
        cardsArray[i].removeEventListener('click', cardClickHandler);
    }
}
function addAllEventsLiseners() {
    for(let i = 0; i < cardsArray.length; i++){
        cardsArray[i].addEventListener('click', cardClickHandler);
    }
}