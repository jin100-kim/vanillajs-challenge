const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginText = document.querySelector("#login-text");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintLoginText(username);
}

function paintLoginText(username) {
    loginText.classList.remove(HIDDEN_CLASSNAME);
    loginText.innerText = `hello! ${username}`; 
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit)
} else {
    paintLoginText(savedUsername);
}