/*=====================
    Loader js 
==========================*/
$(window).on('load', function() {
  setTimeout(function() {
      $('.loader').fadeOut('slow');
  }, 500);
  $('.loader').remove('slow');
});


/*=====================
    Slick slider js 
==========================*/
$('.vertical-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  vertical: true,
  autoplaySpeed: 3500,
  arrows: false
});


$('.slide-5').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3500,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.slide-3').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: false,
  autoplaySpeed: 3500,
  arrows: false,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '80px',
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '50px',
      }
    },
    {
      breakpoint: 360,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '20px',
      }
    }
  ]
});

$('.slider-3').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 3500,
  arrows: false,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.slider-nav').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.slide-3',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});

/*=====================
 Image to background js
 ==========================*/
$(".bg-top").parent().addClass('b-top');
$(".bg-bottom").parent().addClass('b-bottom');
$(".bg-center").parent().addClass('b-center');
$(".bg_size_content").parent().addClass('b_size_content');
$(".bg-img").parent().addClass('bg-size');
$(".bg-img.blur-up").parent().addClass('blur-up lazyload');

jQuery('.bg-img').each(function () {

  var el = $(this),
    src = el.attr('src'),
    parent = el.parent();

  parent.css({
    'background-image': 'url(' + src + ')',
    'background-size': 'cover',
    'background-position': 'center',
    'display': 'block'
  });

  el.hide();
});


/*=====================
 Sticky Scroll js
 ==========================*/
var contentwidth = $(window).width();
if ((contentwidth) < '767') {
    $('.footer-title h4').append('<span class="according-menu"></span>');
    $('.footer-title').on('click', function () {
        $('.footer-title').removeClass('active');
        $('.footer-contant').slideUp('normal');
        if ($(this).next().is(':hidden') == true) {
            $(this).addClass('active');
            $(this).next().slideDown('normal');
        }
    });
    $('.footer-contant').hide();
} else {
    $('.footer-contant').show();
}


/*=====================
 Dark/light js
 ==========================*/
$(".dark-light-btn i").click(function(){
  $(".dark-light-btn").toggleClass("light");
});



/*=====================
 Header Sticky js
 ==========================*/
$(window).scroll(function() {
  if ($(this).scrollTop() > 300) {
      $('header').addClass("sticky");
  } else {
      $('header').removeClass("sticky");
  }
});



/*=====================
 wow animation js
 ==========================*/
new WOW().init();
