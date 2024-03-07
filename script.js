const form = document.querySelector('form');
const password = document.querySelector("#password");
const confPassword = document.querySelector("#confirm-password");
const passwordError = document.querySelector("#password-error");


passwordError.style.visibility = "hidden";

confPassword.addEventListener("keyup", () => {
  console.log(password.value, confPassword.value);
  if (password.value !== confPassword.value) {
    passwordError.style.visibility = "visible";
  } else {
    passwordError.style.visibility = "hidden";
  }
});

//still want to make this work with validation as well...
//currently only shows or hides the "no match" message