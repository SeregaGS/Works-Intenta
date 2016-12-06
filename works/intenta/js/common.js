$(document).ready(function(){
  // - burger
    $('.navigation-top > .burger-wrap').on('click', function() {
      $('nav').removeClass('not-navig').addClass('active-navig');
    });
    $('.close-wrap').on('click', function() {
      $('nav').removeClass('active-navig').addClass('not-navig');
    });

    // - Input mask
     $("#phone").mask("+7(999) 999-9999");

   // - spoiler

  //    $('.services').mouseenter(function() {
  //      $(this).find('.hidden-desription').slideDown(300);
  //    })
  //    $('.services').mouseleave(function() {
  //      $(this).find('.hidden-desription').hide();
  //    });

      if(window.matchMedia('(max-width: 768px)').matches)
        {
          $('.services').click(function() {
            $(this).find('.hidden-desription').slideDown(300);
            $(this).addClass('hover');
            $(this).find('.closeds').css("display", "block");
          });
          $('.closeds').click(function() {
            
          });

        } else {
          $('.services').mouseenter(function() {
            $(this).find('.hidden-desription').slideDown(300);
           })
          $('.services').mouseleave(function() {
            $(this).find('.hidden-desription').hide();
          });
        }

});
