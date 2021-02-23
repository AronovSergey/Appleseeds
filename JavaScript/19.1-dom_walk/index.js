const startHere = document.querySelector(".start-here");

// 1
startHere.textContent = "main title";

// 2
const newLi = document.createElement("li");
newLi.textContent = "sub title 4";

startHere.nextElementSibling.firstElementChild.appendChild(newLi);

// 3
startHere.nextElementSibling.nextElementSibling.remove();

// 4
startHere.previousElementSibling.textContent = "Master Of The Dom";

// 5
startHere.parentElement.nextElementSibling.textContent = "something else of mine";