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