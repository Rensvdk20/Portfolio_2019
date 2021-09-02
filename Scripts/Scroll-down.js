//***** SCROLL DOWN BUTTON *****//
$(function() {
    $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('div.scrollpos1').offset().top }, 'slow');
      return false;
    });
  });