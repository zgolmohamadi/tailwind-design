document.addEventListener('DOMContentLoaded', () => {

  //tab
  const nav = document.getElementById('nav-bar'),
    navAnchor = nav.querySelectorAll('li a'),
    navHeight = nav.offsetHeight,
    animate = findAnimationElement();

  for (var i = 0; i < navAnchor.length; i++) {
    var element = navAnchor[i];

    element.addEventListener('click', function (e) {
      var el = this,
        id = el.getAttribute('href');

        nav.querySelector('.active').classList.remove('active');
        el.classList.add('active');

      e.preventDefault();
      scrollTo(document.getElementById(id.substring(1)), 300);
    });
  }

  function findAnimationElement() {
    // Webkit browsers animate `body`, others animate `html` (the document element)
    var bodyCurrent = document.body.scrollTop;
    var docElCurrent = document.documentElement.scrollTop;
    document.documentElement.scrollTop = document.body.scrollTop = 10;
    var animate;
    if (document.body.scrollTop > 0) {
      animate = document.body;
      document.body.scrollTop = bodyCurrent;
    } else {
      animate = document.documentElement;
      document.documentElement.scrollTop = docElCurrent;
    }
    return animate;
  }

  function scrollTo(to, duration) {
    
    var finishAt = Date.now() + duration;

    // Start
    requestAnimationFrame(tick);

    function tick() {
      // How many frames left? (60fps = 16.6ms per frame)
      var framesLeft = (finishAt - Date.now()) / 16.6;

      // How far do we have to go?
      var distance = to.getBoundingClientRect().top-navHeight;
      if (distance <= 0) {
        // Done (this shouldn't happen, belt & braces)
        return;
      }

      // Adjust by one frame's worth
      if (framesLeft <= 1) {
        // Last call
        animate.scrollTop += distance;
      } else {
        // Not the last, adjust and schedule next
        animate.scrollTop += Math.max(1, distance / framesLeft);
        requestAnimationFrame(tick);
      }
    }
  }

  var splide = new Splide( '.splide' );
  splide.mount();
});
