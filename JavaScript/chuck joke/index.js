const baseEndpoint = 'https://api.chucknorris.io/jokes';
const randomEndpoint = `${baseEndpoint}/random`;
const categoryEndpoint = `${randomEndpoint}?category`

async function getJoke(url) {
    const jokeData = await fetch(url);
    const joke = await jokeData.json();
    return joke.value;
};


const joke = document.querySelector('.a-joke_1');
document.querySelector('.single_button').addEventListener('click', async () => {
    joke.textContent = "loading ...";
    joke.textContent = await getJoke(randomEndpoint);
});


const joke2 = document.querySelector('.a-joke_2');
const buttonsArr =  document.querySelector('.category_section').children;
for(let i = 0; i < buttonsArr.length; i++){
    buttonsArr[i].addEventListener('click', async function() {
        joke2.textContent = "loading ...";
        joke2.textContent = await getJoke(`${categoryEndpoint}=${this.textContent}`);
    });
}


const joke3 = document.querySelector('.a-joke_3');
const select = document.querySelector('select');
const submit =  document.querySelector('.submit_button');
submit.addEventListener('click', async () => {
    joke3.textContent = "loading ...";
    joke3.textContent = await getJoke(`${categoryEndpoint}=${select.value}`);
});