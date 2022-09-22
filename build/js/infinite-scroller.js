const infiniteSlider = new Swiper('.js-infinite-scroller', {
  loop: true,
  freeMode: false,
  spaceBetween: 10,
  grabCursor: false,
  slidesPerView: 5,
  autoplay: {
    delay: 1,
    disableOnInteraction: false
  },
  speed: 5000,
  freeModeMomentum: false,
  followFinger: false,
  allowTouchMove: false,
  slideToClickedSlide: false,
  pauseOnMouseEnter: false,
  a11y: false,
  breakpoints: {
    1024: {
      slidesPerView: 7,
      spaceBetween: 50,
    }
  }
});
