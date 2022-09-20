const thumbs = new Swiper('.js-thumbs', {
  loop: false,
  direction: 'vertical',
  slidesPerView: 'auto',
  spaceBetween: 10,
  watchSlidesProgress: true,
});

const mainSlider = new Swiper('.js-main-slider', {
  loop: true,

  spaceBetween: 10,

  pagination: {
    el: '.swiper-pagination',
  },

  thumbs: {
    swiper: thumbs
  },

  breakpoints: {
    768: {
      loop: false,

      pagination: false
    }
  }
});
