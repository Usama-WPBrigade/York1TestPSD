
$(document).ready(function () {
  $(".menu_icon").on('click', function () {
    $("#menu").slideToggle();
    $("body").toggleClass("overflow")
  });


  var imgs = 0;
  $("#toggle_nav").click(function () {
    if (imgs == 0) {
      $(".image").attr("src", "assets/images/burger_menuClosed.svg");
      imgs = 1;
    } else if (imgs == 1) {
      $(".image").attr("src", "assets/images/burgerMenuIcon.svg");
      imgs = 0;
    }
  });
  var swiper = new Swiper(".logosSwiper", {
  slidesPerView: 1,
  spaceBetween: 50,
  // slidesPerGroup: 3,
  loop: true,
  centeredSlides: true,
  loopFillGroupWithBlank: true,
  pagination: {
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    480: {
      slidesPerView: 2,
      spaceBetween: 31,
    },

    768: {
      slidesPerView: 3,
      spaceBetween: 31,
    },
    980: {
      slidesPerView: 3,
      spaceBetween: 28,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 28,
    },
  },
});


var swiper = new Swiper(".metroSlider", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".metroSlider-button-next",
    prevEl: ".metroSlider-button-prev",
  },
});

});


