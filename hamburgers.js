  var $hamburger = $(".hamburger");
  $hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
    //$('.menu_background').toggleClass("is-active");
    $('.menu_panel').toggleClass("is-active");
    // Do something else, like open/close menu
  });
