//переключение вида каталога
$(document).on('click', '.js-section-view', function () {
  $('.js-section-view').removeClass('is-active');
  $(this).addClass("is-active");

  $('.products').removeClassWild('view-*');
  $('.products').addClass($(this).attr('data-view'));
  return false;
});

function formatResultState (state) {
  if (!state.id) {
    return state.text;
  }

  var new_state = $('<span class="sorting-text"><svg class="sorting-text__icon" aria-hidden="true"><use xlink:href="#'+ state.element.className +'" /></svg><span class="sorting-text__text">'+ state.text +'</span></span>');

  return new_state;
};

function formatSelectionState (state) {
  if (!state.id) {
    return state.text;
  }

  var new_state = $('<span class="sorting-text"><svg class="sorting-text__icon" aria-hidden="true"><use xlink:href="#'+ state.element.className +'" /></svg><span class="sorting-text__text">'+ state.element.parentElement.dataset.placeholder +'</span></span>');

  return new_state;
};

$(document).ready(function() {
  //кастомный селект
  $('.js-select').each(function() {
    var $p = $(this).closest('.select-wrapper');
    $(this).select2({
      minimumResultsForSearch: Infinity,
      dropdownPosition: 'below',
      dropdownParent: $p,
      templateResult: formatResultState,
      templateSelection: formatSelectionState
    });
	}).on("select2:open", function (e) {
    var $p = $(this).closest('.select-wrapper');
    $p.addClass('open');
	}).on("select2:close", function (e) {
    var $p = $(this).closest('.select-wrapper');
    $p.removeClass('open');
	});
});
