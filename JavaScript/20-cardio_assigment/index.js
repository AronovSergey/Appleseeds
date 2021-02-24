// Make a div
const div = document.createElement("div");
// add a class of wrapper to it
div.classList.add("wrapper");
// put it into the body
document.body.appendChild(div);
// make an unordered list
const ul = document.createElement("ul");
// add three list items with the words "one, two, three" in them
ul.innerHTML = `<li>One</li>
<li>Two</li>
<li>Three</li>`;
// put that list into the above wrapper
div.appendChild(ul);
// create an image
const img =  document.createElement("img");
// set the source to an image
img.src = "https://source.unsplash.com/random"; 
// set the width to 250
img.width = 250;
img.height = 250;
// add a class of cute
img.classList.add("cute");
// add an alt of Cute Puppy
img.alt = "Cute Puppy";
// Append that image to the wrapper
div.appendChild(img);
// with HTML string, make a div, with two paragraphs inside of it
const divString = `<div>
  <p>paragaraph one</p>
  <p>paragaraph two</p>
</div>`;
// put this div before the unordered list from above
ul.insertAdjacentHTML('beforebegin', divString);
// add a class to the second paragraph called warning
ul.previousElementSibling.children[1].classList.add("warning");
// remove the first paragraph
ul.previousElementSibling.children[0].remove();
// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>
const generatePlayerCard = (name, age, height) => {
  return `<div class="playerCard">
      <h2>${name} — ${age}</h2>
      <p>They are ${height} and ${age} years old. In Dog years this person would be ${age * 7}. That would be a tall dog!</p>
  </div>`;
}
// make a new div with a class of cards
const newDiv = document.createElement("div");
newDiv.classList.add("cards");
// make 4 player cards using generatePlayerCard
let cards = generatePlayerCard('sergey', 22, 5);
cards += generatePlayerCard('david', 24, 4);
cards += generatePlayerCard('ella', 26, 6);
cards += generatePlayerCard('peter', 26, 7);

// append those cards to the div
newDiv.innerHTML = cards;
// put the div into the DOM just before the wrapper element
div.insertAdjacentElement("beforebegin", newDiv);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed
// select all the buttons!
// make out delete function
// loop over them and attach a listener
const cardsElments = document.querySelectorAll(".playerCard");
cardsElments.forEach(card => {
  let deleteButton = document.createElement('button');
  deleteButton.textContent = 'delete';
  deleteButton.addEventListener('click', function () {
    this.parentElement.remove();
  });
  card.appendChild(deleteButton);
});