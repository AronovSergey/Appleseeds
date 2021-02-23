const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', function() {
    const age = parseInt(input.value);
    if(age > 17)
        console.log("you can drink appear");
    else
        console.log("you’re too young");
});