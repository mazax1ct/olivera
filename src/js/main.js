//удаление класса по маске
(function($) {
    $.fn.removeClassWild = function(mask) {
        return this.removeClass(function(index, cls) {
            var re = mask.replace(/\*/g, '\\S+');
            return (cls.match(new RegExp('\\b' + re + '', 'g')) || []).join(' ');
        });
    };
})(jQuery);

//аккордион
$(document).on('click', '.js-accordion', function () {
  $(this).toggleClass("is-active");
  $(this).closest('.accordion').find('.accordion__body').slideToggle();
  return false;
});

//табы
$(document).on('click', '.js-tab-toggler', function () {

  if(!$(this).hasClass('is-active')) {
    $('.tabs-nav__link').removeClass('is-active');
    $(this).closest('.tabs').find('.tabs-nav').find('.tabs-nav__item').eq($(this).closest('.tab').index()).find('.tabs-nav__link').addClass('is-active');

    $('.js-tab-toggler').removeClass('is-active');
    $(this).addClass('is-active');

    $('.tab').removeClass('is-active');
    $(this).closest('.tab').addClass('is-active');

    $('.tab__body').slideUp();
    $(this).closest('.tab').find('.tab__body').slideDown();
  } else {
    $(this).removeClass('is-active');
    $('.tab__body').slideUp();
  }

  return false;
});

$(document).on('click', '.js-tab-opener', function () {

  $('.js-tab-opener').removeClass('is-active');
  $(this).addClass('is-active');


  $(this).closest('.tabs').find('.tab').removeClass('is-active');
  $(this).closest('.tabs').find('.tabs__list').find('.tab').eq($(this).closest('.tabs-nav__item').index()).addClass('is-active');




  return false;
});
