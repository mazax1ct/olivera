const hits = new Swiper('.js-hits', {
  loop: true,
  spaceBetween: 10,

  pagination: {
    el: '.swiper-pagination',
  },

  breakpoints: {
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 16
    },
    1200: {
      loop: false,
      slidesPerView: 4
    },
  }
});
