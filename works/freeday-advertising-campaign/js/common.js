$(document).ready(function() {
  $("#owl-demo").owlCarousel({

      navigation : true,
      navigationText: false,
      slideSpeed : 300,
      autoPlay: true,
      singleItem: true
  });

  $('.popup-link').magnificPopup({
    type: 'image'
  });

  $("input[type=tel]").mask("8(999)-999-9999");

  $('.headerTopSB').magnificPopup({
    type:'inline'
  });

  $("#nav").on("click","a", function (event) {

    event.preventDefault();
    var id  = $(this).attr('href'),
       //узнаем высоту от начала страницы до блока на который ссылается якорь
         top = $(id).offset().top;
       //анимируем переход на расстояние - top за 1500 мс
       $('body,html').animate({scrollTop: top-100}, 1500);
   });

  var navOffset = $('ul').offset().top
    $(window).on('scroll',function(){
      if($(window).scrollTop() > navOffset){
        $('ul').addClass('sticky');
      } else{
        $('ul').removeClass('sticky');
      }
    });

});
