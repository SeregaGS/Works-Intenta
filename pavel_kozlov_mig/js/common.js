var imgArray = [
        'img/about-me-pravo.png',
        'img/about-me-pravo1.png',
        'img/bg-header.png',
        'img/button-arrow.png'
    ]
function preCacheHeros(){
    $.each(imgArray, function(){
        var img = new Image();
        img.src = this;
    });
};
$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});

$(window).load(function(){

  // Preloader img
    preCacheHeros();
});
$(document).ready(function(){

  // Carousel
  $("#owl").owlCarousel({

      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      navigationText : false
  });

  // MagnificPopup
  $('.brow-o').magnificPopup({
      type:'inline'
    });
  $('.forms-hidden').magnificPopup({
      type:'inline'
    });

  // animate .works .items
  $('.header-top .header-descr .persone-img').animated('animated fadeIn');
  $('.header-top .header-descr p, .header-top .header-descr h1, .header-descr .button').animated('animated fadeInLeft');
  $('.button-arrow').animated('animated bounce');
  $('.subscribe-button').animated('animated fadeInRight');
  $('.works .items').animated('animated fadeInLeft');
  $('.better-works .causes-wrapp li').animated('animated fadeInRight');

  // Burger open and closed
  $('.burgers').click(function() {
    $('.navig-media').slideDown().css('display: block');
    $('.button-closed').css('display', 'block');
  });
  $('.button-closed').click(function() {
    $('.navig-media').slideUp().css('display', 'none');
    $('.button-closed').css('display', 'none');
  });

  // Animate scroll
  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
  });

  // forms
  $('#sub').click(function(e){
    e.preventDefault();
      var Thisss = $(this);
      var formmm = Thisss.closest('form');
      var name = formmm.find('input[name="name"]').val();
      var phone = formmm.find('input[name="phone"]').val();
      var flag = 0;
    formmm.find('input').each(function(){
        var Thisisi = $(this);
      if(Thisisi.val() == '' && !(Thisisi.hasClass('req')) ) {
        Thisisi.addClass('red_border');
        Thisisi.val("Заполните это поле");
        flag = 1;
        } else if (Thisisi.val() != '' && Thisisi.hasClass('req') ) {
          flag = 1;
        }
      });
    if(flag != 0){
    return false;
    }

    $.ajax({
        url: 'data.php',
        type: 'POST',
        data: {name: name, phone: phone},
      success: function(res){
      $("#forms, #forms-thanks").toggle();
    },
      error: function(){
        alert("Ошибка! Не удалось отправить заявку. Пожалуйста повторите попытку или позвоните по номеру указанному в контактах");
      }
    });
    formmm.find('input[type="text"]').each(function(){
  $(this).val('');
  $(this).removeClass('red_border');
});
});
});
