$(function () {

  var width = $(document).width();
  
  $(".tabs__link").on("click", function () {
    $(".tabs__link").removeClass("tabs__link--active")
    $(this).addClass("tabs__link--active")
  })

  if (width <= 768 ) {
    $(".footer__title").on("click", function () {
      $(this).next().slideToggle();
    })
  }
});