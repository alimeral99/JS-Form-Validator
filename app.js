const form = document.getElementById("form");
const email = document.getElementById("email");
const username = document.getElementById("username");
const password = document.getElementById("password");
const repassword = document.getElementById("repassword");

function error(input, mesagge) {
  input.className = "form-control is-invalid";
  const div = input.nextElementSibling;
  div.innerText = mesagge;
  div.className = "invalid-feedback";
}

function success(input) {
  input.className = "form-control is-valid";
}

const checkEmail = (input) => {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (re.test(input.value)) {
    success(input);
  } else {
    error(input, "hatalı mail adresi");
  }
};

function checkRequrired(inputs) {
  inputs.forEach(function (input) {
    if (input.value === "") {
      error(input, `${input.id} is requreid`);
    } else {
      success(input);
    }
  });
}

function checkLength(input, min, max) {
  if (input.value.length < min) {
    error(input, `en az ${min} karakter olmalıdır`);
  } else if (input.value.length > max) {
    error(input, `en fazla ${max} karakter olmalıdır`);
  } else {
    success(input);
  }
}

function checkPassword(password1, password2) {
  if (password1 !== password2) {
    error(password2, "parolalar eşleşmiyor");
  } else {
    success();
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequrired([username, email, password, repassword]);
  checkEmail(email);
  checkLength(username, 7, 15);

  checkLength(password, 7, 12);

  checkPassword(password, repassword);
});
