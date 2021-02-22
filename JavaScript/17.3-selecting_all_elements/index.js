const divArr = document.querySelectorAll('div');

for(let i = 0; i < divArr.length; i++){
    divArr[i].textContent = i;
    divArr[i].style.fontSize = 20 * (i + 1) + 'px';
}