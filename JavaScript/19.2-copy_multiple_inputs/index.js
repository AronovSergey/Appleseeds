const inputs =  document.querySelectorAll("input");

inputs.forEach((input, index) => {
    input.addEventListener('keyup', function(){
        if(index !== inputs.length - 1)
            this.nextElementSibling.focus();            
    });
});

inputs[0].addEventListener('paste', (event) => {
    let paste = event.clipboardData.getData('text');
    paste.split("").forEach((digit, index) => {
        inputs[index].value = digit;
    });
    inputs[inputs.length - 1].focus();
});