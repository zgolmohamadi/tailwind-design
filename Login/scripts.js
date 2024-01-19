//menu burger
document.addEventListener('DOMContentLoaded', (event) => {
  //active input by typing
  const mobileInput = document.getElementById('mobileInput');
  const btnLogin = document.getElementById('loginBtn');
  const clearButton = document.getElementById('clear_input');
  const validation_label = document.getElementById('mobile-validation');

  if (mobileInput) {
    mobileInput.addEventListener('input', validate);
  }
  if (clearButton) {
    clearButton.addEventListener('click', clear);
  }

  if(mobileInput) mobileInput.addEventListener('keyup', debounce(dbounceFn, 1000));

  function dbounceFn() {
    if (mobileInput.value) {
      if (!validateIranianPhonenumber(mobileInput.value)) {
        mobileInput.classList.add('!border-primary-red');
        validation_label.classList.remove('invisible');
      } else {
        mobileInput.classList.remove('!border-primary-red');
        validation_label.classList.add('invisible');
      }
    }
  }

  function validate() {
    if (mobileInput.value === '') {
      btnLogin.setAttribute('disabled', 'disabled');
      clearButton.classList.add('hidden');
    } else {
      btnLogin.removeAttribute('disabled');
      clearButton.classList.remove('hidden');
    }
  }

  function clear() {
    clearButton.classList.add('hidden');
    mobileInput.value = '';
  }
});


