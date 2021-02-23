const checkbox =  document.querySelector("input");
const img = document.querySelector("img")

checkbox.addEventListener('change', function(event) {
    if(event.currentTarget.checked){
        img.style.display = "inline";
    }
    else {
        img.style.display = "none";
    }
});