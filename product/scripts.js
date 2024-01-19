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
      var distance = to.getBoundingClientRect().top - navHeight;
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
});

$(document).ready(function () {
  //product slider

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: '.slider-nav',
    infinite: false,
    rtl: true,
    prevArrow:
      "<img class='a-left control-c prev slick-prev' src='../../assets/img/arrow-right.svg'>",
    nextArrow:
      "<img class='a-right control-c next slick-next' src='../../assets/img/arrow-left.svg'>",
  });
  $('.slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    focusOnSelect: true,
    rtl: true,
    variableWidth: false,
    arrows: false,
    centerMode: false,
    infinite: false,
  });

  //product carasual

  $('.carousel').slick({
    slidesToShow: 7,
    slidesToScroll: 3,
    infinite: false,
    rtl: true,
    arrows: true,
    prevArrow:
      "<button class='a-left control-c prev slick-prev'><img  src='../../assets/img/arrow-right.svg'></button>",
    nextArrow:
      "<button class='a-right control-c next slick-next'><img  src='../../assets/img/arrow-left.svg'></button>",
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          rtl: true,
          arrows: false,
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          rtl: true,
          arrows: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          rtl: true,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
