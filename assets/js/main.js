//js for preloader
var loader = document.getElementById("preloader");

window.addEventListener("load", function(){
    loader.style.display = "none";
})
$('.menu-toggle').click(function() {

    /*--------------------------------------------------------------*/
    /*open-close Navigation menu btn, 500 milliseconds to drop-close*/
    /*--------------------------------------------------------------*/
    $('.site-nav').toggleClass('site-nav-open', 500);
        
    /*-------------------------------------------------------------*/
    /* changes hamburger to red X for close button .open CSS       */
    /*-------------------------------------------------------------*/
    $(this).toggleClass('open');

  })
  // Service and team carousel
  $(".service-carousel, .team-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    margin: 30,
    dots: false,
    loop: true,
    nav : true,
    navText : [
        '<i class="fa-solid fa-chevron-left" aria-hidden="true"></i>',
        '<i class="fa-solid fa-chevron-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0:{
            items:1
        },
        576:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        }
    }
});
$(".banner-carowsel").owlCarousel({
  autoplay: true,
  smartSpeed: 1500,
  margin: 30,
  dots: true,
  loop: true,
  nav : false,
  navText : [
      '<i class="fa-solid fa-chevron-left" aria-hidden="true"></i>',
      '<i class="fa-solid fa-chevron-right" aria-hidden="true"></i>'
  ],
  responsive: {
      0:{
          items:1
      },
      576:{
          items:1
      },
      768:{
          items:1
      },
      992:{
          items:1
      }
  }
});
// Testimonials carousel
$(".testimonial-carousel").owlCarousel({
  autoplay: true,
  smartSpeed: 1500,
  dots: true,
  loop: true,
  items: 1
});
