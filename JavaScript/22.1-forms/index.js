const fullName = document.querySelector("#name");
const email = document.querySelector("#email");
const age = document.querySelector("#age");
const button = document.querySelector(".btn");


button.addEventListener("click", () => {
    const response = confirm(`Please verify the data, Name: ${fullName.value}, Email: ${email.value}, Age: ${parseInt(age.value)}`);
    if(response){
        window.alert("congratulations you successfully sent this form");
    }
});