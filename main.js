// //Construction 'Validator'
// function Validator(options) {
//   let formElement = document.querySelector(options.form);

//   if (formElement) {
//     options.rules.forEach(function (rule) {
//       let inputElement = formElement.querySelector(rule.selector);
//       let errorMessage = inputElement.parentElement.querySelector(
//         "form-message"
//       );
//       if (inputElement) {
//         inputElement.onblur = function () {
//           //   console.log("blur" + rule.selector);
//           //   console.log(rule);
//           errorMessage = rule.test(inputElement.value);
//           if (errorMessage) {
//             errorElement.innerText = errorMessage;
//             inputElement.parentElement.classList.add("invalid");
//           } else {
//             errorElement.innerText = "";
//             inputElement.parentElement.classList.remove("invalid");
//           }
//         };
//       }
//     });
//   }
// }

// Validator.isRequired = function (selector) {
//   return {
//     selector: selector,
//     test: function () {},
//   };
// };

// Validator.isEmail = function (selector) {
//   return {
//     selector: selector,
//     test: function () {},
//   };
// };

const fullNameInput = document.querySelector("#fullname");
const fullNameError = document.querySelector(".fullname");

fullNameInput.onblur = () => {
  const nameValue = fullNameInput.value;
  if (nameValue.length < 6) {
    fullNameError.innerHTML = "Username required minimum 6 characters";
  } else {
    fullNameError.innerHTML = "";
  }
};

const emailInput = document.querySelector("#email");
const emailError = document.querySelector(".email");
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
emailInput.onblur = () => {
  const emailValue = emailInput.value;
  if (!validateEmail(emailValue)) {
    emailError.innerHTML = "Invalid email address";
  } else {
    emailError.innerHTML = "";
  }
};

const passwordInput = document.querySelector("#password");
const passwordError = document.querySelector(".password");
function validatePassword(password) {
  const mediumRegex = new RegExp(
    "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"
  );

  return mediumRegex.test(String(password).toLowerCase());
}
passwordInput.onblur = () => {
  const passwordValue = passwordInput.value;
  if (!validatePassword(passwordValue)) {
    passwordError.innerHTML = "Invalid password";
  } else {
    passwordError.innerHTML = "";
  }
};

const passwordConfirmInput = document.querySelector("#password-confirm");
const passwordConfirmError = document.querySelector(".password-confirm");
passwordConfirmInput.onblur = () => {
  const passwordConfirmValue = passwordConfirmInput.value;
  if (passwordInput !== passwordConfirmValue) {
    passwordConfirmError.innerHTML = "Incorrect password";
  } else {
    passwordConfirmError.innerHTML = "";
  }
};

const submitBtn = document.querySelector("#submit");

submitBtn.onclick = (e) => {
  e.preventDefault();
  if (
    !fullNameInput.length ||
    !emailInput.length ||
    !passwordInput.length ||
    !passwordConfirmInput.length
  ) {
    fullNameError.innerHTML = "Please fill out this field *";
    emailError.innerHTML = "Please fill out this field *";
    passwordError.innerHTML = "Please fill out this field *";
    passwordConfirmError.innerHTML = "Please fill out this field *";
  } else {
    submitError.innerHTML = "";
  }
};
