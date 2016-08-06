$(document).ready(function() {
  $('.mobile_menu').click( function(){
    $('ul.nav').slideToggle();
  });
  $(window).resize(function(){
    if ($(window).width() > 480 ) {
      $('ul.nav').removeAttr('style');
    }
  });
});
