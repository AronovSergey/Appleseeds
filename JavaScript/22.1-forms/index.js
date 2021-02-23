const form =  document.querySelector("form");
const button = document.querySelector(".btn");


button.addEventListener("click", () => {
    const response = confirm(`Please verify the data, Name: ${form.name.value}, Email: ${form.email.value}, Age: ${parseInt(form.age.value)}`);
    if(response){
        window.alert("congratulations you successfully sent this form");
    }
});