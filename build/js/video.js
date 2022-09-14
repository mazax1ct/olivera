$(document).on('click', '.video__play', function () {
  var video = $(this).closest('.video').find('video');
  video[0].play();
  $(this).hide();

  return false;
});
