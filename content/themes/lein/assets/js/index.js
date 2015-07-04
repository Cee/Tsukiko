$(document).ready(function(){
  $(document).scroll(function(){
    if ($(window).scrollTop() > ($('#header').height() - 40)) {
       $('#nav').addClass('white');
       $('#mobile-menu i').css('color', '#000');
     } else {
       $('#nav').removeClass('white');
       $('#mobile-menu i').css('color', '#fff');
     }
  });

  $('#mobile-menu').click(function() {
    $('#nav').css({'z-index': 999, 'opacity': 1});
  });

  $('#mobile-close').click(function() {
    $('#nav').css({'z-index': -1, 'opacity': 0});
  });
});
