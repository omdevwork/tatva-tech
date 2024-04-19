/**
*
* --------------------------------------------------------------------
*
* Template : Mighti - WordPress Theme

* --------------------------------------------------------------------
*
**/

(function($) {
    "use strict";
    
    // sticky menu
    var header = $('.menu-sticky');
    var win = $(window);
    var headerinnerHeight = $(".header-inner").innerHeight();

    win.on('scroll', function() {
       var scroll = win.scrollTop();
       if (scroll < headerinnerHeight) {
           header.removeClass("sticky");
           $('.menu-area').removeClass("sticky-menu");
           
       } else {
           header.addClass("sticky");
           $('.menu-area').addClass("sticky-menu");
       }
    });

    $('.header-inner').waypoint('sticky', {
      offset: 0
    });

    document.addEventListener("DOMContentLoaded", function() {
        let headerSwitchCheckbox = document.getElementById("headerSwitchCheckbox");
        if(headerSwitchCheckbox){
			let htmlTag = document.documentElement;
			let themeMode = localStorage.theme;

			if (themeMode) {
				htmlTag.setAttribute("data-theme", themeMode);

				if (themeMode === "dark") {
					localStorage.theme === "dark"
					headerSwitchCheckbox.checked = true;
				} else {
					localStorage.theme === "light"
					headerSwitchCheckbox.checked = false;
				}
			}

			function toggleTheme(e) {
				if (headerSwitchCheckbox.checked) {
                    htmlTag.setAttribute("data-theme", "dark");
                    localStorage.theme = 'dark';
                } else {
                    htmlTag.setAttribute("data-theme", "light");
                    localStorage.theme = 'light';
                }
			}

            // Add event listener for the toggle switch
            headerSwitchCheckbox.addEventListener("change", toggleTheme);
			
        }
    });


    $(".widget_nav_menu li a").filter(function(){
        return $.trim($(this).html()) == '';
    }).hide();


    // collapse hidden
    $(function(){ 
        var navMain = $(".navbar-collapse"); // avoid dependency on #id
         // when you have dropdown inside navbar
         navMain.on("click", "a:not([data-toggle])", null, function () {
             navMain.collapse('hide');
        });
     });

    // video 
    if ($('.player').length) {
        $(".player").YTPlayer();
    } 

    $(".menu-area .navbar ul > li.menu-item-has-children").hover(
        function () {
            $(this).addClass('hover-minimize');
        },
        function () {
            $(this).removeClass("hover-minimize");
        }
    );

    $( ".showcase-item" ).hover(function() {
        $( this ).toggleClass("hover");
    });

     //Phone Number
    $('.phone_call').on('click', function(event) {        
        $('.phone_num_call').slideToggle('show');
    });

    //search 

     $('.sticky_search').on('click', function(event) {        
        $('.sticky_form').animate({ opacity: 'toggle' }, 500);;
        $( '.sticky_form input' ).focus();
    });

    $('.sticky_search').on('click', function() {
        $('body').removeClass('search-active').removeClass('search-close');
          if ($(this).hasClass('close-full')) {
            $('body').addClass('search-close');
             $('.sticky_form').fadeOut('show');
        }
        else {
            $('body').addClass('search-active');
        }
        return false;
    });
   
    $('.nav-link-container').on('click', function(e){
        $('body.on-offcanvas').removeClass('on-offcanvas');
        setTimeout(function(){ $('body').addClass('on-offcanvas'); },500);        
    });

    if($('.reactheme-newsletter').hasClass('reactheme-newsletters')){
        $('body').addClass('reactheme-pages-btm-gap');
    } 
    $('.sticky_form_search').on('click', function() {      
        $('body, html').removeClass('reactheme-search-active').removeClass('reactheme-search-close');
          if ($(this).hasClass('close-search')) {
          $('body, html').addClass('reactheme-search-close');

        }
        else {
          $('body, html').addClass('reactheme-search-active');
        }
        return false;
    });

   
    if($('#reactheme-header').hasClass('fixed-menu')){
        $('body').addClass('body-left-space');
    }  

    $("#reactheme-header ul > li.classic").hover(
        function () {
            $('body').addClass('mega-classic');
        },
        function () {
            $('body.mega-classic').removeClass("mega-classic");
        }
    );

    var nav = $('#nav');
    if(nav.length){
        $('#menu-single-menu').onePageNav();
    }
   new WOW().init();

    $(document).ready(function(){
        function resizeNav() {
            $(".menu-ofcn").css({"height": window.innerHeight});
            var radius = Math.sqrt(Math.pow(window.innerHeight, 2) + Math.pow(window.innerWidth, 2));
            var diameter = radius * 2;
            $(".off-nav-layer").width(diameter);
            $(".off-nav-layer").height(diameter);
            $(".off-nav-layer").css({"margin-top": -radius, "margin-left": -radius});
        }
        $(".menu-button, .close-button").on('click', function() {
            $(".nav-toggle, .off-nav-layer, .menu-ofcn, .close-button, body").toggleClass("off-open");
        });    

        $(window).resize(resizeNav);
        resizeNav();
    });
   
    // Canvas Menu Js
    $( ".nav-link-container > a" ).off("click").on("click", function(event){
        event.preventDefault();
        $(".nav-link-container").toggleClass("nav-inactive-menu-link-container");
        $(".mobile-menus").toggleClass("nav-active-menu-container");
    });

    // Get a quote popup
    $('.popup-quote').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#qname',
        removalDelay: 500, //delay removal by X to allow out-animation
        // When elemened is focused, some mobile browsers in some cases zoom in
        // It looks not nice, so we disable it:
        callbacks: {
            beforeOpen: function() {
                this.st.mainClass = this.st.el.attr('data-effect');
                if($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#qname';
                }
            }
        }
    });

    // Canvas Menu Js
    $( ".nav-link-container > a" ).off("click").on("click", function(event){
        event.preventDefault();
        $(".nav-link-container").toggleClass("nav-inactive-menu-link-container");
        $(".mobile-menus").toggleClass("nav-active-menu-container");
    });
    
    $(".nav-close-menu-li > a").on('click', function(event){
        $(".mobile-menus").toggleClass("nav-active-menu-container");
        $(".content").toggleClass("inactive-body");
    });


    $(function(){ 
        $( "ul.children" ).addClass( "sub-menu" );
    });

    $(".reactheme-products-grid .product-btn .button").addClass("glyph-icon flaticon-shopping-bag");
    
     //Videos popup jQuery activation code
    $('.popup-videos').magnificPopup({
        disableOn: 10,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    // collapse hidden
    $(function(){ 
         var navMain = $(".navbar-collapse"); // avoid dependency on #id
         // "a:not([data-toggle])" - to avoid issues caused
         // when you have dropdown inside navbar
         navMain.on("click", "a:not([data-toggle])", null, function () {
             navMain.collapse('hide');
         });
     });

    //Select box wrap css
    $("header .menu-area .navbar ul > li.mega > ul.sub-menu").wrapInner("<div class='container flex-mega'></div>");
   

    if ($('div').hasClass('openingfoot')) {
        $('body').addClass('openingfootwrap');
    }

  
  //preloader
    $(window).on( 'load', function() {
        $("#mighti-load").delay(500).fadeOut(200);
        $(".mighti-loader").delay(500).fadeOut(200);       
        

    if($(window).width() < 992) {
      $('.reactheme-menu').css('height', '0');
      $('.reactheme-menu').css('opacity', '0');
      $('.reactheme-menu').css('z-index', '-1');
      $('.reactheme-menu-toggle').on( 'click', function(){
         $('.reactheme-menu').css('opacity', '1');
         $('.reactheme-menu').css('z-index', '1');
     });
    }
    })

    // JS for Filter
    $(window).load(function() {
        
        // image loaded portfolio init
        $('.grid').imagesLoaded(function() {
            $('.portfolio-filter').on('click', 'button', function() {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });
            var $grid = $('.grid').isotope({
                animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            },

                itemSelector: '.grid-item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.grid-item',
                }
            });
        });
        $('.portfolio-filter button').on('click', function(event) {
            $(this).siblings('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
            event.preventDefault();
        });

    });    

    // scrollTop init
    var win=$(window);
    var totop = $('#top-to-bottom');    
    win.on('scroll', function() {
        if (win.scrollTop() > 150) {
            totop.fadeIn();
        } else {
            totop.fadeOut();
        }
    });
    totop.on('click', function() {
        $("html,body").animate({
            scrollTop: 0
        }, 500)
    }); 

    $(function(){ 
        $( "ul.children" ).addClass( "sub-menu" );
    });  
    
    $( ".comment-body, .comment-respond" ).wrap( "<div class='comment-full'></div>" );    
    //mobile menu
    $.fn.menumaker = function(options) {      
        var mobile_menu = $(this), settings = $.extend({
          format: "dropdown",
          sticky: false
        }, options);
           return this.each(function() {
           mobile_menu.find('li ul').parent().addClass('has-sub');
           var multiTg = function() {
              mobile_menu.find(".has-sub").prepend('<span class="submenu-button"></span>');
              mobile_menu.find(".hash").parent().addClass('hash-has-sub');
              mobile_menu.find('.submenu-button').on('click', function() {
                  $(this).toggleClass('submenu-opened');
                  if ($(this).siblings('ul').hasClass('open-sub')) {
                      $(this).siblings('ul').removeClass('open-sub').hide('fadeToggle');
                      $(this).siblings('ul').hide('fadeToggle');                                     
                  }
                  else {
                      $(this).siblings('ul').addClass('open-sub').hide('fadeToggle');
                      $(this).siblings('ul').slideToggle().show('fadeToggle');
                  }
              });
           };
          if (settings.format === 'multitoggle') multiTg();
          else mobile_menu.addClass('dropdown');
          if (settings.sticky === true) mobile_menu.css('position', 'fixed');
          var resizeFix = function() {
               if ($( window ).width() > 991) {
                   mobile_menu.find('ul').show('fadeToggle');
                   mobile_menu.find('ul.sub-menu').hide('fadeToggle');
               }          
           };
          resizeFix();
          return $(window).on('resize', resizeFix);
          });
      };
      $(document).ready(function(){
        $("#mobile_menu").menumaker({
           format: "multitoggle"
        });
        
    });




    //Canvas Menu Wrap
        $('.current_page_item > a').on('click', function (event) {
        event.preventDefault();
        });

        // Hover Effect
        $('.rts-fs-container li.menu-item > a').on('mouseenter', function () {
        $('.rts-fs-container li.menu-item > a').not(this).css('color', 'var(--color-contrast-medium)');
        $(this).css('color', 'var(--color-white)');
        });
        $('.rts-fs-container .menu-item a').on('mouseleave', function () {
        $('.rts-fs-container li.menu-item > a').css('color', 'var(--color-white)');
        });

        function rts_mi_show() {
        $('.menu.active > li').addClass('loading');
        menu_btn_locked();
        }

        function menu_classes_toggle(item, block) {
        item.toggleClass('style-open');
        $('.rts-logo__default').toggleClass('menu_opened');
        $('.rts-fs-menu').toggleClass('visible');
        $('html').toggleClass('fsm-opened');
        $('.close-event').css('display', block);
        $('.action-menu .open-event').attr('disabled', true);
        $('.action-menu .close-event').attr('disabled', true);
        if ($('.rts-fs-container ul').hasClass('active')) {} else {
            $('.menu').toggleClass('active');
        }

        }

        function menu_btn_locked() {
        $('.action-menu .open-event').attr('disabled', false);
        $('.action-menu .close-event').attr('disabled', false);
        }

        // Open
        $('.rts-offcanvas-wrapper .action-menu .open-event').on('click', function (event) {
        event.preventDefault();
        var item = $(this),
            block = 'block';
        menu_classes_toggle(item, block);
        gsap.fromTo('.icon-burger', {
            x: 100
        });
        gsap.fromTo(".burger_close_icon", {
            opacity: 1
        }, {
            opacity: 1,
            ease: Power3.easeOut,
            duration: .6
        });
        gsap.to(".burger_close_icon", {
            stagger: 0.2,
            ease: Power3.easeOut,
            duration: .6,
            delay: .8,
            strokeDasharray: "20,999px",
            onComplete: menu_btn_locked
        });
        });

        // Close
        $('.rts-offcanvas-wrapper .burger_close_icon').on('click', function () {          
        var item = $('.open-event'),
            block = 'none';
            menu_classes_toggle(item, block);            
            gsap.fromTo('.burger_close_icon', {
            x: '100'
            }, 
            );
            gsap.fromTo(".burger_close_icon", {
            opacity: 1
            }, 
            {
            opacity: 0,
            ease: Power3.easeOut,
            duration: .6
            });
            gsap.fromTo(".burger_close_icon", {
            strokeDasharray: "20,999px"
            }
        );
        });

        // Sub-menu Header
        var has_children = $('.rts-fs--nav ul > li.menu-item-has-children > a');
        has_children.next("ul.sub-menu").prepend('<li class="menu-item--back"><a href="#">subtitle</a></li>');

        // Has Children
        $('.rts-fs--nav .menu-item-has-children > a').append('<span><svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path class="heroicon-ui" d="M18.59 13H3a1 1 0 0 1 0-2h15.59l-5.3-5.3a1 1 0 1 1 1.42-1.4l7 7a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-1.42-1.4l5.3-5.3z"/></svg></span>')

        // Menu Slide Effect
        $('.menu-item-has-children > a').on('click', function (event) {
        event.preventDefault();
        var back_text = $(this).text();
        $(this).closest('ul').removeClass('active');
        $(this).next('ul.sub-menu').addClass('active').find('.menu-item--back a').text(back_text);
        gsap.to(".rts-offcanvas-wrapper .menu", {
            x: "-=100%",
            ease: Power3.easeOut,
            duration: .6
        });
        });

        $(document).on('click', '.menu-item--back', function () {
        $(this).closest('ul').removeClass('active');
        $(this).parent('ul').parent('li').closest('ul').addClass('active')
        gsap.to(".rts-offcanvas-wrapper .menu", {
            x: "+=100%",
            ease: Power3.easeOut,
            duration: .6
        });
        });
        
    

    function clearFunc() {
        console.clear();
    }



})(jQuery);