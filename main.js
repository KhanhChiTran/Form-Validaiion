//Construction 'Validator'
function Validator(options) {
  let formElement = document.querySelector(options.form);

  if (formElement) {
    options.rules.forEach(function (rule) {
      let inputElement = formElement.querySelector(rule.selector);
      let errorMessage = inputElement.parentElement.querySelector(
        "form-message"
      );
      if (inputElement) {
        inputElement.onblur = function () {
          //   console.log("blur" + rule.selector);
          //   console.log(rule);
          let erroMessage = rule.test(inputElement.value);
          if (errorMessage) {
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add("invalid");
          } else {
            errorElement.innerText = "";
            inputElement.parentElement.classList.remove("invalid");
          }
        };
      }
    });
  }
}

Validator.isRequired = function (selector) {
  return {
    selector: selector,
    test: function () {},
  };
};

Validator.isEmail = function (selector) {
  return {
    selector: selector,
    test: function () {},
  };
};
