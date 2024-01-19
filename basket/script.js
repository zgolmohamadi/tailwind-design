
$(document).ready(function () {
      //product carasual

  $('.carousel').slick({
    slidesToShow: 7,
    slidesToScroll: 3,
    infinite: false,
    rtl: true,
    arrows: true,
    prevArrow:
      "<button class='a-left control-c prev slick-prev'><img  src='../assets/img/arrow-right.svg'></button>",
    nextArrow:
      "<button class='a-right control-c next slick-next'><img  src='../assets/img/arrow-left.svg'></button>",
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
})