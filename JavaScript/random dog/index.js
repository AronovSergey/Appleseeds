const baseEndpoint = 'https://dog.ceo/api/breeds';
const imageEndpoint = `${baseEndpoint}/image/random`;


async function getImgUrl(url) {
    const imgData = await fetch(url);
    const img = await imgData.json();
    return(img.message);
};


const img = document.querySelector('img');
document.querySelector('button').addEventListener('click', async () => {
    let url = await getImgUrl(imageEndpoint);
    img.src = url;
});


const gallery = document.querySelector('.gallery');
const input = document.querySelector('input');
const submitButton = document.querySelector('.submit');
submitButton.addEventListener('click', async () => {
    if(input.value >= 1 && input.value <= 50) {
        gallery.innerHTML = "";
        const urlArr = await getImgUrl(`${imageEndpoint}/${input.value}`);
        urlArr.forEach(url => {
            let img = document.createElement('img');
            img.src = url;
            gallery.appendChild(img);
        });
    } else console.log('out of range')
});


const select = document.querySelector('select');
async function fillSelectOption () {
    const breedsData = await fetch('https://dog.ceo/api/breeds/list/all');
    const breeds = await breedsData.json();

    const keys = Object.keys(breeds.message);
    
    keys.forEach(key => {
        select.innerHTML += `<option value="${key}">${key}</option>`
    });
}
fillSelectOption();


const breedButton = document.querySelector(".btn");
breedButton.addEventListener('click', async () => {
    let url = await getImgUrl(`https://dog.ceo/api/breed/${select.value}/images/random`);
    img.src = url;
});




