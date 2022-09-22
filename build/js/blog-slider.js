if($('body').width() < 992) {
  const blogSlider = new Swiper('.js-blog-slider', {
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });
}
