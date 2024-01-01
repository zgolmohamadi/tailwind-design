document.addEventListener('DOMContentLoaded', (event) => {
  var pinContainer = document.querySelectorAll('.pin-code');

  pinContainer.forEach((input, key) => {
    input.addEventListener(
      'keyup',
      function (event) {
        var target = event.target;

        var maxLength = parseInt(target.attributes['maxlength'].value, 10);
        var myLength = target.value.length;

        if (myLength >= maxLength) {
          var next = target;
          while ((next = next.nextElementSibling)) {
            if (next == null) break;
            if (next.tagName.toLowerCase() == 'input') {
              next.focus();
              break;
            }
          }
        }

        if (myLength === 0) {
          var next = target;
          while ((next = next.previousElementSibling)) {
            if (next == null) break;
            if (next.tagName.toLowerCase() == 'input') {
              next.focus();
              break;
            }
          }
        }
      },
      false
    );

    input.addEventListener(
      'keydown',
      function (event) {
        var target = event.target;
        target.value = '';
      },
      false
    );
  });

  //timer

  const timeConainer = document.getElementById('timeConainer');
  const btnReset = document.getElementById('resend');

  function startTimer(duration, display, btnReset) {
    var timer = duration,
      minutes,
      seconds;
    const timerduraion = setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;

      display.textContent = minutes + ':' + seconds;

      if (--timer < 0) {
        timer = duration;

        clearInterval(timerduraion);

        btnReset.classList.remove('hidden');
        timeConainer.classList.add('hidden');
      }
    }, 1000);
  }
  window.onload = function () {
    timer();
  };
  function timer() {
    var minutes = 60 * 2,
      display = document.querySelector('#time');

    timeConainer.classList.remove('hidden');

    btnReset.classList.add('hidden');

    startTimer(minutes, display, btnReset);
  }

  btnReset.addEventListener('click', timer);
});
