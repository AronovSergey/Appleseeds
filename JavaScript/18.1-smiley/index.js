const textField = document.querySelector('input');
const button =  document.querySelector('button');
const ul = document.querySelector('ul');

button.addEventListener('click', () => {
    const input = parseInt(textField.value);

    ul.innerHTML = "";

    if (isNaN(input)){
        console.log("Wrong Input!")
    }

    else {
        for(let i = 0; i < input; i++){
            let img = document.createElement("img");
            img.src = "./Mr._Smiley_Face.svg"
            let li = document.createElement("li");
            li.appendChild(img);
            ul.appendChild(li);
        }
    }
});