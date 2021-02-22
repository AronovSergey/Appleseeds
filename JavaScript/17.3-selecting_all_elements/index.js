const divArr = document.querySelectorAll('div');

const divArr2 = document.querySelectorAll("body > *")

for(let i = 0; i < divArr.length; i++){
    divArr[i].textContent = i;
    divArr[i].style.fontSize = 20 * (i + 1) + 'px';
};

for(let i = 0; i < divArr2.length; i++){
    divArr2[i].textContent = i + 1;
    divArr2[i].style.fontSize = 20 * (i + 1) + 'px';
};