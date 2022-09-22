const recipesSlider = new Swiper('.js-recipes-slider', {
  loop: true,

  centeredSlides: true,
  centeredSlidesBounds: true,
  slidesPerView: 'auto',
  spaceBetween: 10,

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  breakpoints: {
    768: {
      spaceBetween: 20
    },

    1350: {
      spaceBetween: 40
    },

    1900: {
      spaceBetween: 80
    }
  }
});
