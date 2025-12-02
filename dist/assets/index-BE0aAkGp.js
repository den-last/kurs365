$(document).ready(function () {
    $('.mob-menu-start').click(function () {
      $('.window-overlay').toggleClass('open');
      $('.mobile-menu').toggleClass('open');
      $(this).children('img').toggle();
    });
});
  