//js code for counter 
$(document).ready(function() {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });



//js code for owl carousel
    $( '.owl-carousel' ).owlCarousel({
     loop: true,
     autoplay: true,
     autoplayTimeout: 2000,
     autoplayHoverPause: true,
     dots: true,
     responsiveClass: true,

      responsive: {
        0:{
          items: 1,
          nav: false,
          dots: true
        },
        576:{
          items: 2,
          nav: false,
          dots: true
        },
        768:{
          items: 3,
          nav: false,
          dots: true
        },
        1200:{
          items: 3,
          nav: false,
          dots: true
        }
      }
    });

});



