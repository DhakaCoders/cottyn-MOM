(function($) {
var windowWidth = $(window).width();
var windowWidth_1920 = $('.page-body-cntlr').width();


$('.navbar-toggle').on('click', function(){
	$('#mobile-nav').slideToggle(300);
});

if( $('.hamburger-icon').length ){
  $('.hamburger-icon').click(function(){
    $('body').toggleClass('allWork');
  });
}
if(windowWidth <= 991){
    if( $('ul > li.menu-item-has-children').length ){
      $('ul > li.menu-item-has-children').click(function(){
       $(this).find('.sub-menu').slideToggle(300);
       $(this).toggleClass('sub-menu-arrow');
     });
    }
}
	
if($("ul.slick-dots li").length == 1){
   $("ul.slick-dots").hide();
}
//matchHeightCol
if($('.mHc').length){
  $('.mHc').matchHeight();
};
if($('.mHc1').length){
  $('.mHc1').matchHeight();
};
if($('.mHc2').length){
  $('.mHc2').matchHeight();
};
if($('.mHc3').length){
  $('.mHc3').matchHeight();
};
if($('.mHc4').length){
  $('.mHc4').matchHeight();
};
if($('.mHc5').length){
  $('.mHc5').matchHeight();
};
if($('.mHc6').length){
  $('.mHc6').matchHeight();
};
$(window).load(function() {
//matchHeightCol
  if($('.mHc').length){
    $('.mHc').matchHeight();
  };
  if($('.mHc1').length){
    $('.mHc1').matchHeight();
  };
  if($('.mHc2').length){
    $('.mHc2').matchHeight();
  };
  if($('.mHc3').length){
    $('.mHc3').matchHeight();
  };
  if($('.mHc4').length){
    $('.mHc4').matchHeight();
  };
  if($('.mHc5').length){
    $('.mHc5').matchHeight();
  };
  if($('.mHc6').length){
    $('.mHc6').matchHeight();
  };
});

//$('[data-toggle="tooltip"]').tooltip();

//banner animation
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  $('.page-banner-bg').css({
    '-webkit-transform' : 'scale(' + (1 + scroll/2000) + ')',
    '-moz-transform'    : 'scale(' + (1 + scroll/2000) + ')',
    '-ms-transform'     : 'scale(' + (1 + scroll/2000) + ')',
    '-o-transform'      : 'scale(' + (1 + scroll/2000) + ')',
    'transform'         : 'scale(' + (1 + scroll/2000) + ')'
  });
});


if($('.fancybox').length){
$('.fancybox').fancybox({
    //openEffect  : 'none',
    //closeEffect : 'none'
  });

}


/**
Responsive on 767px
*/

// if (windowWidth <= 767) {
  $('.toggle-btn').on('click', function(){
    $(this).toggleClass('menu-expend');
    $('.toggle-bar ul').slideToggle(500);
  });


// }



// http://codepen.io/norman_pixelkings/pen/NNbqgG
// https://stackoverflow.com/questions/38686650/slick-slides-on-pagination-hover


/**
Slick slider
*/
if( $('.blockqouteItemSlider').length ){
    $('.blockqouteItemSlider').slick({
      dots: false,
      arrows: true,
      infinite: true,
      autoplay: false,
      autoplaySpeed: 1000,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow:$('.fl-prev-next .fl-prev'),
      nextArrow:$('.fl-prev-next .fl-next')
    });
}
if( $('.related-articles-sec .newsGridSlider').length ){
    $('.related-articles-sec .newsGridSlider').slick({
      dots: false,
      arrows: true,
      infinite: true,
      autoplay: false,
      autoplaySpeed: 1000,
      speed: 700,
      slidesToShow: 2,
      slidesToScroll: 1,
      prevArrow:$('.fl-prev-next .fl-prev'),
      nextArrow:$('.fl-prev-next .fl-next')
    });
}
if( $('.expertiseGridSlider').length ){
    $('.expertiseGridSlider').slick({
      dots: false,
      arrows: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 1000,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
}

 $(window).scroll(function() { 
    var scroll = $(window).scrollTop();   
    if (scroll >= 100) {
        $('.header-sticky').addClass('fixed-hdr');
    } else {
        $('.header-sticky').removeClass('fixed-hdr');
    }  
});
 $(window).scroll(function() { 
    var scroll = $(window).scrollTop();   
    if (scroll >= 500) {
        $('.sticky-nav').addClass('sticky-navbar');
    } else {
        $('.sticky-nav').removeClass('sticky-navbar');
    }  
});

// tab
$('.ov-tab-btn ul li a').on('click', function(e){
  e.preventDefault();
  var bittab = $(this).data('to');
  $('.ov-tab-btn ul li a').removeClass('ui-tabs-active');
  $(this).addClass('ui-tabs-active');

  $('.ov-tab-content-items .ov-tab-content-itm').removeClass('ov-tab-content-item-active');
  $(bittab).addClass('ov-tab-content-item-active');
});

$('.hdr-search a').click(function(){
$('.src-bx-hvr').slideDown();  
});
$('.humburgur-button-main').click(function(){
$('.src-bx-hvr').slideUp();
});

// accordion
if( $('.faq-accordion-inr').length ){
  $('.faq-accordion-hdr').on('click', function(){
    $(this).toggleClass('active');
    $(this).parents('.faq-accordion-inr .faq-accordion').siblings().find('.faq-accordion-hdr').removeClass('active');
    $(this).parents('.faq-accordion-inr .faq-accordion').find('.faq-accordion-desc').slideToggle(300);
    $(this).parents('.faq-accordion-inr .faq-accordion').siblings().find('.faq-accordion-desc').slideUp(300);
  });
}
if( $('.vacature-accordion-cntlr').length ){
  $('.vacature-accordion-hdr').on('click', function(){
    $(this).toggleClass('active');
    $(this).parents('.vacature-accordion-cntlr .vacature-accordion').siblings().find('.vacature-accordion-hdr').removeClass('active');
    $(this).parents('.vacature-accordion-cntlr .vacature-accordion').find('.vacature-accordion-desc').slideToggle(300);
    $(this).parents('.vacature-accordion-cntlr .vacature-accordion').siblings().find('.vacature-accordion-desc').slideUp(300);
  });
}
if( $('.vacature-accordion-cntlr').length ){
  $('.vacature-sub-accordion-hdr').on('click', function(){
    $(this).toggleClass('active');
    $(this).parents('.vacature-sub-accordion').find('.vacature-sub-accordion-desc').slideToggle(300);
  });
}
function leftWidth(){
    var windowWidth = $(window).width();
    var containerwidth = $(".container").width();
    var lefttoconWidth = ((windowWidth-containerwidth)/2);
    // var mradd = lefttoconWidth;
    $(".ctn-full-width-img").css({
      "margin-left":-lefttoconWidth,
    });
  }
  leftWidth();
  $(window).resize(function(){
    leftWidth();
  });


$('.select2-ctlr').select2();
if( $('#mapID').length ){
var latitude = $('#mapID').data('latitude');
var longitude = $('#mapID').data('longitude');

var myCenter= new google.maps.LatLng(latitude,  longitude);
function initialize(){
    var mapProp = {
      center:myCenter,
      mapTypeControl:true,
      scrollwheel: false,
      zoomControl: true,
      disableDefaultUI: true,
      zoom:7,
      streetViewControl: false,
      rotateControl: true,
      mapTypeId:google.maps.MapTypeId.ROADMAP,
      styles: CustomMapStyles
      };

    var map= new google.maps.Map(document.getElementById('mapID'),mapProp);
    var marker= new google.maps.Marker({
      position:myCenter,
        //icon:'map-marker.png'
      });
    marker.setMap(map);
}
google.maps.event.addDomListener(window, 'load', initialize);

}



/* BS form Validator*/
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

if( $('.contact-form-wrp').length ){
  $('.contact-form-wrp .wpforms-container .wpforms-form .wpforms-submit-container button').on('click', function(){
    $('.wpforms-field input[required],.wpforms-field select[required]').parents('.wpforms-field').addClass('wpforms-has-error');
    $('.wpforms-field input[required],.wpforms-field select[required]').addClass('wpforms-error');
  });
}


if( $('.wpforms-error').length ){
  $('.wpforms-error').on('click', function(){
    $(this).parents('.wpforms-field').removeClass('wpforms-has-error');
  });
}



/* innerpage buttons */
$(".dft-fl-btn" ).each(function( index ) {
  var color = $(this).data('color');
  var bg = $(this).data('bg');
  var border = $(this).data('border');
  $(this).css('color', color);
  $(this).css('background', bg);
  $(this).css('border-color', border);
  $(this).on('mouseenter', function(){
    if( bg != ''){
      $(this).css('background', 'transparent');
      $(this).css('color', bg);
    }
    if( bg == ''){
      $(this).css('background', border);
      $(this).css('color', '#fff');
    }
  });
  $(this).on('mouseleave', function(){
    if( bg != ''){
      $(this).css('background', bg);
      $(this).css('color', color);
    }
    if( bg == ''){
      $(this).css('background', 'transparent');
      $(this).css('color', border);
    }
  });
});


/* start of Noyon */
if( $('.cntrp-fag').length ){
  $('.cntrp-faq-accordion-hdr').on('click', function(){
    $(this).toggleClass('active');
    $(this).parents('.cntrp-fag ul li').siblings().find('.cntrp-faq-accordion-hdr').removeClass('active');
    $(this).parents('.cntrp-fag ul li').find('.cntrp-faq-accordion-desc').slideToggle(300);
    $(this).parents('.cntrp-fag ul li').siblings().find('.cntrp-faq-accordion-desc').slideUp(300);
  });
}

if( $('.xs-page-entry-menu').length ){
  $('.xs-page-entry-menu ul li a').on('click', function(e){
    e.preventDefault();
    $(this).parent().toggleClass('active');
    $(this).parents('.xs-page-entry-menu').find('.xs-page-entry-menu ul li').removeClass('active');
    $(this).next().slideToggle(300);
  });
}


/* start of Kashob*/



/* start of Momin */

if(windowWidth <= 575){
    $('.teamGridSlider').slick({
      dots: true,
      infinite: true,
      autoplay: false,
      arrows: false,
      autoplaySpeed: 1000,
      speed: 700,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
}

/* start of Shariful */

    if( $('.scrollto').length ){
      $('.scrollto').on('click', function(e){
        e.preventDefault();
        var togo = $(this).data('to');
        goToByScroll(togo, 0);
      });
    }
    function goToByScroll(id, offset){
      if(id){
        // Remove "link" from the ID
        id = id.replace("link", "");
        // Scroll
        $('html,body').animate(
          {scrollTop: $(id).offset().top - offset},
          500);
      }
    }

    function bannerheight(){
      var windowWidth = $(window).width();
      var windowHeight = $(window).height();
      var winHeight = (windowHeight + 100);
      var headerHeight = $('.header').height();
      var hdrHeight = (headerHeight + 40);
      var bnrHeight = (winHeight - hdrHeight);
      if (windowWidth > 767){
        $('.hm-banner-des-cntlr').css('height', bnrHeight);
      }
    }
    bannerheight();
    $(window).resize(function(){
      bannerheight();
    });

    if(windowWidth <= 639){
      $('.hmGrdsSlider').slick({
        dots: true,
        infinite: true,
        autoplay: false,
        arrows: false,
        autoplaySpeed: 1000,
        speed: 700,
        slidesToShow: 1.02,
        slidesToScroll: 1
      });
    }
    if(windowWidth <= 767){
      $('.destinationSlider').slick({
        dots: true,
        infinite: true,
        autoplay: false,
        arrows: false,
        autoplaySpeed: 1000,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1
      });
    }
    if(windowWidth <= 639){
      $('.testimonialSlider').slick({
        dots: true,
        infinite: true,
        autoplay: false,
        arrows: false,
        autoplaySpeed: 1000,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1
      });
    }
    if(windowWidth <= 767){
      $('.blogGrdSlider').slick({
        dots: true,
        infinite: true,
        autoplay: false,
        arrows: false,
        autoplaySpeed: 1000,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1
      });
    }
    if(windowWidth <= 575){
      $('.phasellusSlider').slick({
        dots: true,
        infinite: true,
        autoplay: false,
        arrows: false,
        autoplaySpeed: 1000,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1
      });
    }


    
    




new WOW().init();

})(jQuery);