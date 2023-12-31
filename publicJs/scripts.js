//menu burger
document.addEventListener('DOMContentLoaded', (event) => {
  //accordion
  const accordion = document.getElementsByClassName('accordion');

  for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
      this.classList.toggle('active');
    });
  }


  //menu
  const burger = document.getElementById('navbar-burger');
  const menu = document.getElementById('navbar-menu');

  if (burger) burger.addEventListener('click', openMenu);

  function openMenu() {
    menu.classList.toggle('hidden');
  }
});

function validateIranianPhonenumber(number) {
  var regex = /^(\+98|0)?9\d{9}$/;
  return regex.test(number);
}


function debounce(callback, delay) {
    let timeout;
    return function () {
      clearTimeout(timeout);
      timeout = setTimeout(callback, delay);
    };
  }

