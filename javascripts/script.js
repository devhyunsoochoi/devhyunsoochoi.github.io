$(document).ready(function() {

  $(".mobile_menu").click(function() {

    $("ul").slideToggle(400, function() {
      $(this).toggleClass("mobile_menu");
    });

  });

});
