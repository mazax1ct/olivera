var swiperOptions = {
  loop: true,
  freeMode: false,
  spaceBetween: 10,
  grabCursor: false,
  slidesPerView: 5,
  loop: true,
  autoplay: {
    delay: 1,
    disableOnInteraction: true
  },
  speed: 5000,
  freeModeMomentum: false,
  followFinger: false,
  allowTouchMove: false,
  breakpoints: {
    1024: {
      slidesPerView: 7,
      spaceBetween: 50,
    }
  }
};

var swiper = new Swiper(".js-infinite-scroller", swiperOptions);
