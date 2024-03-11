const form = document.querySelector('form');
const password = document.querySelector("#password");
const confPassword = document.querySelector("#confirm-password");
const passwordError = document.querySelector("#password-error");


passwordError.style.visibility = "hidden";

confPassword.addEventListener("keyup", () => {
  if (password.value !== confPassword.value) {
    passwordError.style.visibility = "visible";
    password.setCustomValidity("invalid");
    confPassword.setCustomValidity("invalid");
  } else {
    passwordError.style.visibility = "hidden";
    password.setCustomValidity("");
    confPassword.setCustomValidity("");
  }
});

//still want to make this work with validation as well...
//currently only shows or hides the "no match" message