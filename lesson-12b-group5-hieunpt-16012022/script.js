const form = document.querySelector(".form");
const username = document.querySelector(".form__username");
const password = document.querySelector(".form__password");
const errorWarning = document.querySelector(".form__error");

form.addEventListener("submit", (method) => {
    let messages = [];
    if (username.value === "" || username.value === null) {
        messages.push("Email address or phone number cannot be blank");
    }
    if (password.value.length < 8) {
        messages.push("Password must be at least 8 characters");
    }
    if (password.value === "12345678") {
        messages.push("This password is easy to guess, please try again!");
    }
    if (messages.length > 0) {
        method.preventDefault();
        errorWarning.innerText = messages.join('\n ');
    }
})

const signin = document.querySelector(".form__button--signin");

signin.onclick = function () {
    if (document.querySelector(".form__heading").innerHTML == "Log In") {
        document.querySelector(".form__heading").innerHTML = "Sign Up";
        document.querySelector(".form__button").innerHTML = "Sign Up";
        signin.innerHTML = "Already Have An Account?";
        document.querySelector(".form__input-box").innerHTML = '<input type="text" class="form__input form__username" name="email" placeholder="Email address or phone number" />\n<input type="password" class="form__input form__password" name="pass" placeholder="Password" />\n<input type="password" class="form__input form__password" name="pass" placeholder="Enter the password again" />';
        document.querySelector(".form__forgot").style.display = "none";
    }
    else if (document.querySelector(".form__heading").innerHTML == "Sign Up") {
        document.querySelector(".form__heading").innerHTML = "Log In";
        document.querySelector(".form__button").innerHTML = "Log In";
        signin.innerHTML = "Create New Account";
        document.querySelector(".form__input-box").innerHTML = '<input type="text" class="form__input form__username" name="email" placeholder="Email address or phone number" />\n<input type="password" class="form__input form__password" name="pass" placeholder="Password" />';
        document.querySelector(".form__forgot").style.display = "block";
    }
}