const btnElement = document.querySelector(".btn");
const inputElement = document.getElementById("input");
const copyIconElement = document.querySelector(".fa-copy");
const alertContainerElement = document.querySelector(".alert-container");

btnElement.addEventListener("click", () => {
    createPassword();
});

copyIconElement.addEventListener("click", () => {
    copyPassword();
    if(inputElement.value){
        alertContainerElement.classList.remove("active");
        setTimeout(() => {
            alertContainerElement.classList.add("active");
        }, 2000);
    }
});

function createPassword() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    const passwordLength = 14; 
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        const randomNum = Math.floor(Math.random() * characters.length);
        password += characters.substring(randomNum, randomNum + 1);
        console.log(randomNum,password);
    }
    inputElement.value = password;
}
function copyPassword() {
    inputElement.select();
    inputElement.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(inputElement.value);
    alertContainerElement.innerText = inputElement.value + " Copied";
}