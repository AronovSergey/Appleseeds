const text = document.querySelector('textarea');
const button = document.querySelector('button');

button.addEventListener('mouseover', () => {
    
    if(text.value.length < 100)
        alert(`Your message is too short, it contain ${text.value.length} characters. You must enter at least 100 characters before clicking the button.`);
});