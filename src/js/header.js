//вычисляем ширину скроллбара
function scrollBarWidth() {
  var scrollBarWidth = window.innerWidth-$(document).width();

  if(scrollBarWidth > 0) {
    $('body').addClass('compensate-for-scrollbar');
    $('head').append('<style id="menu-open" type="text/css">.compensate-for-scrollbar{padding-right:'+scrollBarWidth+"px;}</style>")
  }
}

var header = $('.header'),
    scrollPrev = 0;

var resize_scroll = function(e) {
  var scrolled = $(window).scrollTop();

  if ( scrolled > $('.header').height()*4 ) {
		header.addClass('scrolled');
	} else {
		header.removeClass('scrolled');
	}

	if ( scrolled > $('.header').height() && scrolled > scrollPrev ) {
		header.addClass('out');
	} else {
		header.removeClass('out');
	}
	scrollPrev = scrolled;
};

$(document).ready(function() {
  //запуск функции навешивания класса на шапку
  resize_scroll();
});

//перезапуск функции навешивания класса на шапку при скролле и ресайзе
$(window).on("scroll", resize_scroll).on("resize", resize_scroll);

//тоглер главного меню
$(document).on('click', '.js-menu-toggler', function () {
  if(!$(this).hasClass('is-active')) {
    $(this).addClass("is-active");
    $(this).attr('title', 'Закрыть меню');
    $(this).find('use').attr('xlink:href', '#close');
    $('body').addClass('overflow');
    $('.main-menu').fadeIn(300, function() {
      setTimeout(function() {
        $('.main-menu').addClass("is-active");
      }, 300);
    });
  } else {
    $(this).removeClass("is-active");
    $(this).attr('title', 'Открыть меню');
    $(this).find('use').attr('xlink:href', '#burger');
    $('body').removeClass('overflow');
    $('.main-menu').removeClass("is-active");
    setTimeout(function() {
      $('.main-menu').fadeOut();
    }, 300);
  }
  return false;
});

//тоглер меню второго уровня
$(document).on('click', '.js-main-menu-root', function () {
  if(!$(this).hasClass('is-open')) {
    $(this).addClass("is-open");
    if($('body').width() > 1023) {
      scrollBarWidth();
      $('body').addClass('overflow');
      $(this).closest('.main-menu__list-item').find('.submenu').css('display', 'flex').hide().fadeIn(300, function() {
        setTimeout(function() {
          $(this).addClass("is-active");
        }, 300);
      });
    } else {
      $(this).closest('.main-menu__list-item').find('.submenu').css('display', 'flex').hide().slideToggle(300, function() {
        setTimeout(function() {
          $(this).addClass("is-active");
        }, 300);
      });
    }
  } else {
    $('.submenu').removeClass("is-active");
    setTimeout(function() {
      if($('body').width() > 1023) {
        $('.submenu').fadeOut(300, function () {
          $('body').removeClass('overflow');
        });
      } else {
        $('.submenu').slideToggle();
      }
    }, 300);
    $(this).removeClass("is-open");
  }
  return false;
});

//закрытие меню второго уровня
$(document).on('click', '.js-submenu-closer', function () {
  $('.submenu').removeClass("is-active");
  setTimeout(function() {
    if($('body').width() > 1023) {
      $('.submenu').fadeOut(300, function () {
        $('#menu-open').remove();
        $('body').removeClass('compensate-for-scrollbar');
        $('body').removeClass('overflow');
      });

    } else {
      $('.submenu').slideToggle();
    }
  }, 300);
  $('.js-main-menu-root').removeClass("is-open");
  return false;
});

//тоглер поиска
$(document).on('click', '.js-search-toggler', function () {
  if(!$(this).hasClass('is-active')) {
    $(this).addClass("is-active");
    $(this).attr('title', 'Закрыть поиск');
    $(this).find('use').attr('xlink:href', '#close');
    $('.header-search').fadeIn(300, function() {
      setTimeout(function() {
        $('.header-search').addClass("is-active");
      }, 300);
    });
  } else {
    $(this).removeClass("is-active");
    $(this).attr('title', 'Открыть поиск');
    $(this).find('use').attr('xlink:href', '#search');
    $('.header-search').removeClass("is-active");
    setTimeout(function() {
      $('.header-search').fadeOut();
    }, 300);
  }
  return false;
});
