const loginForm = document.querySelector("#login-form");
const loginFormContainer = document.querySelector("#login-form__container");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginFormContainer.classList.add(HIDDEN_CLASSNAME);
  paintGreeting(username);
}

function paintGreeting(username) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello! ${username}.`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginFormContainer.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreeting(savedUsername);
}
