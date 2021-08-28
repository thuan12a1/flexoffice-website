var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});

var galleryTop = new Swiper('.gallery-top', {
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: galleryThumbs
  }
});
var swiper = new Swiper('.home__deal-slider', {
  slidesPerView: 5,
  spaceBetween: 30,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },

    // when window width is >= 768px
    768: {
      slidesPerView: 4,
      spaceBetween: 40
    },
    // when window width is >= 1023px
    1023: {
      slidesPerView: 5,
      spaceBetween: 40
    }
  },

  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  // pagination: {
  //   clickable: false,
  // },
  navigation: {
    nextEl: '.icon-left',
    prevEl: '.icon-right',
  },
});

//  var swiper = new Swiper('.mySwiper', {
//     slidesPerView: '2.5',
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
// });


