username = document.getElementById('username');
password = document.getElementById('password');
email = document.getElementById('email')
form = document.querySelector("form")

let emailRegEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

const errorSpan = (parent, text) => {
    const newSpan = $(parent).prev().append(`<span class="error">${text}</span>`);
    return newSpan
}

const validateEmail = (email) => { 
    if (email.value === ''){
        alert("Email cannot be blank!")
    }
    else if (!emailRegEx.test(email)) {
        console.log("yay!")
    }
}

form.addEventListener("submit", (e) => {
    validateEmail(e.target.email)
}, false);