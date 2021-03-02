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