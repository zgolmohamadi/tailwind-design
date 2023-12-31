//menu burger
document.addEventListener('DOMContentLoaded', (event) => {
  //active input by typing
  const input = document.getElementById('mobileInput');
  const btnLogin = document.getElementById('loginBtn');
  const clearButton = document.getElementById('clear_input');
  const validation_label = document.getElementById('mobile-validation');

  if (input) {
    input.addEventListener('input', validate);
  }
  if (clear) {
    clearButton.addEventListener('click', clear);
  }

  input.addEventListener('keyup', debounce(dbounceFn, 1000));

  function dbounceFn() {
    if (input.value) {
      if (!validateIranianPhonenumber(input.value)) {
        input.classList.add('!border-primary-red');
        validation_label.classList.remove('hidden');
      } else {
        input.classList.remove('!border-primary-red');
        validation_label.classList.add('hidden');
      }
    }
  }

  function validate() {
    if (input.value === '') {
      btnLogin.setAttribute('disabled', 'disabled');
      clearButton.classList.add('hidden');
    } else {
      btnLogin.removeAttribute('disabled');
      clearButton.classList.remove('hidden');
    }
  }

  function clear() {
    clearButton.classList.add('hidden');
    input.value = '';
  }
});
