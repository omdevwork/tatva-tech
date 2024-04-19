/*=== Javascript function indexing hear===========

01.gsapAnimationImageRevel();
02.gsapScrollingText();
03.gsapAnimationImageScale();
04.serviceHoverImageRevel();
05.imageParalax();
06.swiperActivation();
07.tiltAnimation();
08.wowActive();
09.progressAvtivation();
10.counterUp();
11.radialProgress();
12.titleSkewUp();
13.scrollDiwnCircle();
14.bannerBgVideo();
15.textTitleAnimation__1();
16.counterJumpanimation();
17.featureJumpanimation();
18.paragraphBodyAnimation();
19.slideUpSkew();
20.slideUp();
21.slideLeft();
22.slideRight();
23.buttonMoveAnimation();
24.teamAnimation();
25.showRightRevel();
26.caseVarticleScroll();
27.titleOpacityWrap();
28.magicCoursor();
29.portfolioTenSwiper();
31.preloaderWithBannerActivation();
32.stickySidebar();
33.stickyHeader();
34.rollingText();
==================================================*/

(function ($) {
  'use strict';
  let device_width = window.innerWidth;
  $.exists = function (selector) {
    return $(selector).length > 0;
  };

  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

  var rtsJs = {
    m: function (e) {
      rtsJs.d();
      rtsJs.methods();
    },
    d: function (e) {
      this._window = $(window),
        this._document = $(document),
        this._body = $('body'),
        this._html = $('html')
    },
    methods: function (e) {
      rtsJs.gsapAnimationImageRevel();
      rtsJs.gsapScrollingText();
      rtsJs.gsapAnimationImageScale();
      rtsJs.serviceHoverImageRevel();
      // rtsJs.imageParalax();
      rtsJs.tiltAnimation();
      rtsJs.wowActive();
      rtsJs.progressAvtivation();
      rtsJs.counterUp();
      rtsJs.radialProgress();
      rtsJs.titleSkewUp();
      rtsJs.scrollDiwnCircle();
      rtsJs.bannerBgVideo();
      rtsJs.textTitleAnimation__1();
      rtsJs.counterJumpanimation();
      rtsJs.featureJumpanimation();
      rtsJs.paragraphBodyAnimation();
      rtsJs.slideUpSkew();
      rtsJs.slideUp();
      rtsJs.slideLeft();
      rtsJs.slideRight();
      rtsJs.buttonMoveAnimation();
      rtsJs.teamAnimation();
      rtsJs.showRightRevel();
      rtsJs.caseVarticleScroll();
      rtsJs.titleOpacityWrap();
      rtsJs.magicCoursor();
      rtsJs.portfolioTenSwiper();
      rtsJs.preloaderWithBannerActivation();
      rtsJs.stickySidebar();  
      rtsJs.stickyHeader();
      rtsJs.rollingText(); 
    },
    

    //gsapAnimationImageRevel
    gsapAnimationImageRevel: function (e) {
      
      gsap.registerPlugin(ScrollTrigger);
      let revealContainers = document.querySelectorAll(".rts-reveal-one");
      let revealContainers2 = document.querySelectorAll(".rts-reveal-two");
      let revealContainers3 = document.querySelectorAll(".rts-reveal-three");
  
      // rts-reveal-image-one
      revealContainers.forEach((container) => {
          let image = container.querySelector(".rts-reveal-image-one");
          let rts = gsap.timeline({
              scrollTrigger: {
              trigger: container,
              toggleActions: "restart none none reset",
              start: "top 90%",
              end: "top 0%",
              }
          });
  
          rts.set(container, {
              autoAlpha: 1
          });
          rts.from(container, 1.5, {
              xPercent: 100,
              ease: Power2.out
          });
          rts.from(image, 1.5, {
              xPercent: -100,
              scale: 1.3,
              delay: -1.5,
              ease: Power2.out
          });
      });
  
      // rts-reveal-image-two
      revealContainers2.forEach((container) => {
          let image = container.querySelector(".rts-reveal-image-two");
          let rts = gsap.timeline({
              scrollTrigger: {
              trigger: container,
              toggleActions: "restart none none reset",
              }
          });
  
          rts.set(container, {
              autoAlpha: 1
          });
          rts.from(container, 1.5, {
              xPercent: 100,
              ease: Power2.out
          });
          rts.from(image, 1.5, {
              xPercent: -100,
              scale: 1.3,
              delay: -1.5,
              ease: Power2.out
          });
      });
  
      // rts-reveal-image-three
      revealContainers3.forEach((container) => {
          let image = container.querySelector(".rts-reveal-image-three");
          let rts = gsap.timeline({
              scrollTrigger: {
              trigger: container,
              toggleActions: "restart none none reset",
              }
          });
  
          rts.set(container, {
              autoAlpha: 1
          });
          rts.from(container, 1.5, {
              xPercent: -100,
              ease: Power2.out
          });
          rts.from(image, 1.5, {
              xPercent: 100,
              scale: 1.3,
              delay: -1.5,
              ease: Power2.out
          });
      });
      


      $(document).ready(function () {
        gsap.registerPlugin(ScrollTrigger);

        let revealContainers = document.querySelectorAll(".rts-reveal-to-bottom-wrapper");

        revealContainers.forEach((container) => {
          let image = container.querySelector(".rts-reveal-image-toBottom");
          let rts = gsap.timeline({
            scrollTrigger: {
              trigger: container,
              toggleActions: "restart none none reset",
            }
          });

          rts.set(container, {
            autoAlpha: 1
          });
          rts.from(container, 1.5, {
            xPercent: 100,
            ease: Power2.out
          });
          rts.from(image, 1.5, {
            xPercent: -100,
            scale: 1.3,
            delay: -1.5,
            ease: Power2.out
          });
        });
      })
    },

    // gsapScrollingText
    gsapScrollingText: function () {
      $(document).ready(function () {
        let scrollingTextOne = document.getElementsByClassName('scrollingText');
        if (scrollingTextOne.length) {
          gsap.registerPlugin(ScrollTrigger);
          let tl2 = gsap.timeline();
          tl2.to(".scrollingText", {
            x: -1000,
            duration: 50,
            repeat: -1,
            ease: 'linear'
          })
          let tl = gsap.timeline();
          tl.to('.scrollingText', {
            xPercent: 5,
            scrollTrigger: {
              trigger: ".scrollingText",
              scrub: 1
            }
          })
        }

      });
      $(document).ready(function () {
        let scrollingTextTwo = document.getElementsByClassName('scrollingText-two');
        if (scrollingTextTwo.length) {
          gsap.registerPlugin(ScrollTrigger);
          let tl2 = gsap.timeline();
          tl2.to(".scrollingText-two", {
            x: 1000,
            duration: 50,
            repeat: -1,
            ease: 'linear'
          })
          let tl = gsap.timeline();
          tl.to('.scrollingText-two', {
            xPercent: 5,
            scrollTrigger: {
              trigger: ".scrollingText-two",
              scrub: 1
            }
          })
        }

      })
      $(document).ready(function () {
        let scrollingTextThree = document.getElementsByClassName('scrollingText-three');
        if (scrollingTextThree.length) {
          gsap.registerPlugin(ScrollTrigger);
          let tl2 = gsap.timeline();
          tl2.to(".scrollingText-three", {
            x: 1000,
            duration: 50,
            repeat: -1,
            ease: 'linear'
          })
          let tl = gsap.timeline();
          tl.to('.scrollingText-three', {
            xPercent: 5,
            scrollTrigger: {
              trigger: ".scrollingText-three",
              scrub: 1
            }
          })
        }

      })
      $(document).ready(function () {
        let scrollingTextFour = document.getElementsByClassName('scrollingText-four');
        if (scrollingTextFour.length) {
          gsap.registerPlugin(ScrollTrigger);
          let tl2 = gsap.timeline();
          tl2.to(".scrollingText-four", {
            x: -1000,
            duration: 50,
            repeat: 1,
            ease: 'linear'
          })
          let tl = gsap.timeline();
          tl.to('.scrollingText-four', {
            xPercent: -5,
            scrollTrigger: {
              trigger: ".scrollingText-four",
              scrub: 1
            }
          })
        }

      })
    },

    gsapAnimationImageScale: function (e) {
      $(document).ready(function () {

        let growActive = document.getElementsByClassName('grow');
        if (growActive.length) {
          const growTl = gsap.timeline({
            scrollTrigger: {
              trigger: ".grow",
              scrub: 1,
              start: "top center",
              end: "+=1000",
              ease: "power1.out"
            }
          });
          growTl.to(".grow", {
            duration: 1,
            scale: 1
          });
        }

      });

    },

    serviceHoverImageRevel: function (e) {
      $(document).ready(function () {
        let rts_service_item_1 = gsap.utils.toArray(".rts-service-animation");
        const serviceImgItems = document.querySelectorAll(".rts-service-item-1");

        function followImageCursor(event, serviceImgItem) {
          const contentBox = serviceImgItem.getBoundingClientRect();
          const dx = event.clientX - contentBox.left;
          const dy = event.clientY - contentBox.top;
          serviceImgItem.children[4].style.transform = `translate(${dx}px, ${dy}px)`;
        }

        serviceImgItems.forEach((item, i) => {
          item.addEventListener("mousemove", (event) => {
            followImageCursor(event, item);
          });
        });
      });
    },


    // imageParalax: function () {
    //   //  anim-image-parallax
    //     let paralax = document.getElementsByClassName('anim-image-parallax');
    //   if (paralax.length) {
    //     $(".anim-image-parallax").each(function () {

    //       // Add wrap <div>.
    //       $(this).wrap('<div class="anim-image-parallax-wrap"><div class="anim-image-parallax-inner"></div></div>');
    //       // Add overflow hidden.
    //       $(".anim-image-parallax-wrap").css({
    //         "overflow": "hidden"
    //       });
    //       var $animImageParallax = $(this);
    //       var $aipWrap = $animImageParallax.parents(".anim-image-parallax-wrap");
    //       var $aipInner = $aipWrap.find(".anim-image-parallax-inner");
    //       // Parallax
    //       gsap.to($animImageParallax, {
    //         yPercent: 40,
    //         ease: "none",
    //         scrollTrigger: {
    //           trigger: $aipWrap,
    //           start: "top bottom",
    //           end: "bottom top",
    //           scrub: true,
    //           markers: false,
    //         },
    //       });
    //       // Zoom in
    //       let tl_aipZoomIn = gsap.timeline({
    //         scrollTrigger: {
    //           trigger: $aipWrap,
    //           start: "top 90%",
    //           markers: false,
    //         }
    //       });
    //       tl_aipZoomIn.from($aipInner, {
    //         duration: 1.5,
    //         autoAlpha: 0,
    //         scale: 1.4,
    //         ease: Power2.easeOut,
    //         clearProps: "all"
    //       });

    //     });
    //   };
    // },

    // rollingText
    rollingText: function () {
      let elements = document.querySelectorAll("header .rolling-text");
      elements.forEach((element) => {
        let innerText = element.innerText;
        element.innerHTML = "";

        let textContainer = document.createElement("div");
        textContainer.classList.add("block");

        for (let letter of innerText) {
          let span = document.createElement("span");
          span.innerText = letter.trim() === "" ? "\xa0" : letter;
          span.classList.add("letter");
          textContainer.appendChild(span);
        }

        element.appendChild(textContainer);
        element.appendChild(textContainer.cloneNode(true));
      });

    },

    tiltAnimation: function (e) {
      $(document).ready(function () {
        "use strict";
        $(".card-tilt").tilt({
          maxTilt: 4,
          perspective: 1000,
          easing: "cubic-bezier(.03,.98,.52,.99)",
          speed: 1200,
          glare: true,
          maxGlare: 0.2,
          scale: 1.01
        });
      })
    },

    wowActive: function () {
      new WOW().init();
    },

    progressAvtivation: function () {
      $(window).scroll(function () {
        if ($(this).scrollTop() > 250) {
          var bars = document.querySelectorAll('.meter > span');
          console.clear();
          setInterval(function () {
            bars.forEach(function (bar) {
              var getWidth = parseFloat(bar.dataset.progress);
              for (var i = 0; i < getWidth; i++) {
                bar.style.width = i + '%';
              }
            });
          }, 100);
        }
      })
    },

    counterUp: function (e) {
      $('.counter').counterUp({
        delay: 10,
        time: 1000
      });
      $('.counter').addClass('animated fadeInDownBig');
      $('h3').addClass('animated fadeIn');
    },

    radialProgress: function () {
      function radial_animate() {
        $('svg.radial-progress').each(function (index, value) {

          $(this).find($('circle.bar--animated')).removeAttr('style');
          // Get element in Veiw port
          var elementTop = $(this).offset().top;
          var elementBottom = elementTop + $(this).outerHeight();
          var viewportTop = $(window).scrollTop();
          var viewportBottom = viewportTop + $(window).height();

          if (elementBottom > viewportTop && elementTop < viewportBottom) {
            var percent = $(value).data('countervalue');
            var radius = $(this).find($('circle.bar--animated')).attr('r');
            var circumference = 2 * Math.PI * radius;
            var strokeDashOffset = circumference - ((percent * circumference) / 100);
            $(this).find($('circle.bar--animated')).animate({
              'stroke-dashoffset': strokeDashOffset
            }, 2800);
          }
        });
      }
      // To check If it is in Viewport 
      var $window = $(window);

      function check_if_in_view() {
        $('.countervalue').each(function () {
          if ($(this).hasClass('start')) {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();

            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();

            if (elementBottom > viewportTop && elementTop < viewportBottom) {
              $(this).removeClass('start');
              $('.countervalue').text();
              var myNumbers = $(this).text();
              if (myNumbers == Math.floor(myNumbers)) {
                $(this).animate({
                  Counter: $(this).text()
                }, {
                  duration: 2800,
                  easing: 'swing',
                  step: function (now) {
                    $(this).text(Math.ceil(now) + '%');
                  }
                });
              } else {
                $(this).animate({
                  Counter: $(this).text()
                }, {
                  duration: 2800,
                  easing: 'swing',
                  step: function (now) {
                    $(this).text(now.toFixed(2) + '$');
                  }
                });
              }

              radial_animate();
            }
          }
        });
      }

      $window.on('scroll', check_if_in_view);
      $window.on('load', check_if_in_view);

    },

    titleSkewUp: function () {
      $(document).ready(function () {
        $(".anim-skewinup").each(function () {
          let rts_SkewInUp = gsap.timeline({
            scrollTrigger: {
              trigger: this,
              start: "top bottom",
              markers: false
            }
          });

          rts_SkewInUp.from(this, {
            duration: 2,
            skewY: 2,
            transformOrigin: "left top",
            autoAlpha: 0,
            y: 20,
            ease: Expo.easeOut,
            clearProps: "all"
          }, "+=0.2");
        });
      });
    },

    scrollDiwnCircle: function () {
      $(document).ready(function () {
        if ($(".scroll-down-circle").length) {
          gsap.to(".scroll-down-circle", {
            x: -100,
            autoAlpha: 0,
            ease: "none",
            scrollTrigger: {
              trigger: ".rts-scroll-down-circle-wrapper",
              start: "top top",
              end: "30% top",
              scrub: true,
              markers: false
            },
          });
        }
      });
      $(document).ready(function () {
        if ($(".scroll-down-circle-2").length) {
          gsap.to(".scroll-down-circle-2", {
            y: -100,
            autoAlpha: 0,
            ease: "none",
            scrollTrigger: {
              trigger: ".rts-scroll-down-circle-wrapper-2",
              start: "top top",
              end: "30% top",
              scrub: true,
              markers: false,
            },
          });
        }
      });
      $(document).ready(function () {
        if ($(".scroll-down-circle-3").length) {
          gsap.to(".scroll-down-circle-3", {
            y: -300,
            autoAlpha: 0,
            ease: "none",
            scrollTrigger: {
              trigger: ".rts-scroll-down-circle-wrapper-3",
              start: "top 25%",
              end: "30% top",
              scrub: true,
              markers: false,
              duration: 15,
            },
          });
        }
      });
      $(document).ready(function () {
        if ($(".scroll-down-circle-4").length) {
          gsap.to(".scroll-down-circle-4", {
            x: -300,
            autoAlpha: 0,
            ease: "none",
            scrollTrigger: {
              trigger: ".rts-scroll-down-circle-wrapper-4",
              start: "top 80%",
              end: "30% top",
              scrub: true,
              markers: false,
              duration: 15,
            },
          });
        }
      });
      $(document).ready(function () {
        if ($(".scroll-down-circle-5").length) {
          gsap.to(".scroll-down-circle-5", {
            y: -300,
            autoAlpha: 0,
            ease: "none",
            scrollTrigger: {
              trigger: ".rts-scroll-down-circle-wrapper-5",
              start: "top 80%",
              end: "20% top",
              scrub: true,
              markers: false,
              duration: 15,
            },
          });
        }
      });

      $(".blog-interactive-item").each(function () {
        var $mouse = {
          x: 0,
          y: 0
        }; // Cursor position
        var $pos = {
          x: 0,
          y: 0
        }; // Cursor position
        var $ratio = 0.15; // delay follow cursor
        var $active = false;
        var $ball = $("#ball");

        var $ballWidth = 34; // Ball default width
        var $ballHeight = 34; // Ball default height
        var $ballScale = 1; // Ball default scale
        var $ballOpacity = 0.5; // Ball default opacity
        var $ballBorderWidth = 2; // Ball default border width
        var $biItem = $(this);
        if ($biItem.find(".bi-item-image").length) {
          $biItem.find(".bi-item-title a").on("mouseenter mouseover", function () {
            $("#magic-cursor").addClass("blog-interactive-hover-on");
            $biItem.find(".bi-item-image").appendTo($ball);
            gsap.to($ball, {
              duration: 0.3,
              width: "20vw",
              height: "20vw",
              opacity: 1
            });
          }).on("mouseleave", function () {
            $("#magic-cursor").removeClass("blog-interactive-hover-on");
            $ball.find(".bi-item-image").appendTo($biItem);
            gsap.to($ball, {
              duration: 0.3,
              width: $ballWidth,
              height: $ballHeight,
              opacity: $ballOpacity
            });
          });
          $biItem.find(".bi-item-title a").addClass("not-hide-cursor");
          $biItem.addClass("bi-item-image-on");
        }
      });
    },

    bannerBgVideo: function () {
      const radio_buttons = document.querySelector("#video_check");
      const video_start = document.querySelector(".hero__area-3");

      if (radio_buttons) {
        radio_buttons.addEventListener('click', function () {
          let video = document.querySelector(".video-title")
          let videoClose = document.querySelector(".video-title.close-video-title")
          if (radio_buttons.checked) {
            document.querySelector(".wrapper").style.zIndex = "1";
            video.style.display = "none";
            videoClose.style.display = "block";
            video_start.classList.add('start-video');
            document.querySelector('.header__area-3').classList.add('bg-white');

          } else {
            document.querySelector(".wrapper").style.zIndex = "999";
            video.style.display = "block";
            videoClose.style.display = "none";
            video_start.classList.remove('start-video');
            document.querySelector('.header__area-3').classList.remove('bg-white');
          }
        });
      }
      /////////////////////////////////////////////////////
    },

    textTitleAnimation__1: function () {
      if (window.innerWidth > 550) {

        const quotes = document.querySelectorAll(".quote");
        const quotes2 = document.querySelectorAll(".quote-2");

        function setupSplits() {
          $(document).ready(function () {
            $(".split-line").wrap('<div class="split-parent"></div>');
          });


          quotes.forEach(quote => {

            quote.split = new SplitText(quote, {
              type: "lines,words,chars",
              linesClass: "split-line"
            });

            // Set up the anim
            quote.anim = gsap.from(quote.split.lines, {
              scrollTrigger: {
                trigger: quote,
                toggleActions: "restart pause resume reverse",
                start: "bottom 100%",
                markers: true,
              },
              duration: 0.6,
              ease: "circ.out",
              yPercent: 100,
              stagger: 0.2,
            });
          });


          quotes2.forEach(quote2 => {

            quote2.split = new SplitText(quote2, {
              type: "lines"
            });

            // Set up the anim
            quote2.anim = gsap.from(quote2.split.lines, {
              scrollTrigger: {
                trigger: quote2,
                toggleActions: "restart pause resume reverse",
                start: "50% 60%",
                markers: true,
              },
              duration: 0.6,
              autoAlpha: 0,
              ease: "circ.out",
              yPercent: 100,
              stagger: 0.2,
            });
          });
        }

        // ScrollTrigger.addEventListener("refresh", setupSplits);
        setupSplits();
      }



    },

    counterJumpanimation: function () {
      // counter jump animation
      $(document).ready(function () {
        let rts_jump_counter_animation = document.getElementsByClassName('rts_jump_counter__animation');
        if (rts_jump_counter_animation.length) {
          gsap.set(".counter_animation .counter__anim", {
            y: -100,
            opacity: 0,
          })
          if (device_width < 1023) {
            const counterArray = gsap.utils.toArray(".counter_animation .counter__anim")
            counterArray.forEach((item, i) => {
              let counterTl = gsap.timeline({
                scrollTrigger: {
                  trigger: item,
                  start: "top center+=200",
                }
              })
              counterTl.to(item, {
                y: 0,
                opacity: 1,
                ease: "bounce",
                duration: 1.5,
              })
            })
          } else {
            gsap.to(".counter_animation .counter__anim", {
              scrollTrigger: {
                trigger: ".counter_animation",
                start: "top center+=300",
              },
              y: 0,
              opacity: 1,
              ease: "bounce",
              duration: 1.5,
              stagger: {
                each: 0.3,
              }
            })
          }
        }
      });

      // banner button jump animation
      $(document).ready(function () {
        let rts_jump_bannerJump_animation = document.getElementsByClassName('banner__jump');
        if (rts_jump_bannerJump_animation.length) {
          gsap.set(".bannerJump_animation .jump__anim", {
            y: -100,
            opacity: 0,
          })
          if (device_width < 1023) {
            const counterArray = gsap.utils.toArray(".bannerJump_animation .jump__anim")
            counterArray.forEach((item, i) => {
              let counterTl = gsap.timeline({
                scrollTrigger: {
                  trigger: item,
                  start: "top center+=200",
                }
              })
              counterTl.to(item, {
                y: 0,
                opacity: 1,
                ease: "bounce",
                duration: 1.5,
              })
            })
          } else {
            gsap.to(".bannerJump_animation .jump__anim", {
              scrollTrigger: {
                trigger: ".bannerJump_animation",
                start: "top center+=300",
              },
              y: 0,
              opacity: 1,
              ease: "bounce",
              duration: 1.5,
              stagger: {
                each: 0.3,
              }
            })
          }
        }
      });
    },

    featureJumpanimation: function () {
      // counter jump animation
      $(document).ready(function () {
        let featureAnimationJump = document.getElementsByClassName('rts-feature-animation-active');
        if (featureAnimationJump.length) {
          gsap.set(".feature-animation .feature-anim", {
            y: -100,
            opacity: 0,
          })
          if (device_width < 1023) {
            const counterArray = gsap.utils.toArray(".feature-animation .feature-anim")
            counterArray.forEach((item, i) => {
              let counterTl = gsap.timeline({
                scrollTrigger: {
                  trigger: item,
                  start: "top center+=200",
                }
              })
              counterTl.to(item, {
                y: 0,
                opacity: 1,
                ease: "bounce",
                duration: 1.5,
              })
            })
          } else {
            gsap.to(".feature-animation .feature-anim", {
              scrollTrigger: {
                trigger: ".feature-animation",
                start: "top center+=300",
              },
              y: 0,
              opacity: 1,
              ease: "bounce",
              duration: 1.5,
              stagger: {
                each: 0.3,
              }
            })
          }
        }
      });

      // banner button jump animation
      $(document).ready(function () {
        let rts_jump_bannerJump_animation = document.getElementsByClassName('banner__jump');
        if (rts_jump_bannerJump_animation.length) {
          gsap.set(".bannerJump_animation .jump__anim", {
            y: -100,
            opacity: 0,
          })
          if (device_width < 1023) {
            const counterArray = gsap.utils.toArray(".bannerJump_animation .jump__anim")
            counterArray.forEach((item, i) => {
              let counterTl = gsap.timeline({
                scrollTrigger: {
                  trigger: item,
                  start: "top center+=200",
                }
              })
              counterTl.to(item, {
                y: 0,
                opacity: 1,
                ease: "bounce",
                duration: 1.5,
              })
            })
          } else {
            gsap.to(".bannerJump_animation .jump__anim", {
              scrollTrigger: {
                trigger: ".bannerJump_animation",
                start: "top center+=300",
              },
              y: 0,
              opacity: 1,
              ease: "bounce",
              duration: 1.5,
              stagger: {
                each: 0.3,
              }
            })
          }
        }
      });
    },

    paragraphBodyAnimation: function () {
      $(document).ready(function () {
        let splitTextLines = gsap.utils.toArray(".rts-text-anim p, .rts-text-anim");

        splitTextLines.forEach(splitTextLine => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: splitTextLine,
              start: 'top 90%',
              duration: 2,
              end: 'bottom 0%',
              scrub: false,
              markers: false,
              toggleActions: "restart pause resume reverse",
            }
          });

          const itemSplitted = new SplitText(splitTextLine, {
            type: "lines"
          });
          gsap.set(splitTextLine, {
            perspective: 400
          });
          itemSplitted.split({
            type: "lines"
          })
          tl.from(itemSplitted.lines, {
            duration: 1,
            delay: 0,
            opacity: 0,
            rotationX: -0,
            force3D: true,
            transformOrigin: "top center 30",
            stagger: 0.1,
          });
        });

      });
    },

    cardAnimationSlideUp: function () {
      document.addEventListener("DOMContentLoaded", function () {
        // Select the elements
        const box = document.querySelector(".box-anim");

        // Set up the GSAP timeline
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: box,
            start: "top 80%", // Adjust the start position based on your needs
            end: "bottom 20%", // Adjust the end position based on your needs
            toggleActions: "play none none none", // Play the animation on scroll in
          },
        });

        // Define the animation
        tl.to(box, {
          y: 0,
          opacity: 1,
          duration: 1
        });
      });
    },

    slideUpSkew: function () {
      $(document).ready(function () {
        $(".rts-skew-up-gsap").each(function () {
          let rts_SkewInUp = gsap.timeline({
            scrollTrigger: {
              trigger: this,
              start: "top bottom",
              markers: false
            }
          });

          rts_SkewInUp.from(this, {
            duration: 2,
            skewY: 5,
            transformOrigin: "left top",
            autoAlpha: 0,
            y: 100,
            ease: Expo.easeOut,
            toggleActions: "restart pause resume reverse",
            clearProps: "all"
          }, "+=0.2");
        });
      });
    },

    slideUp: function () {
      $(document).ready(function () {
        $(".rts-slide-up-gsap").each(function () {
          let rts_SkewInUp = gsap.timeline({
            scrollTrigger: {
              trigger: this,
              start: "top bottom",
              markers: false
            }
          });

          rts_SkewInUp.from(this, {
            duration: 2,
            skewY: 0,
            transformOrigin: "left top",
            autoAlpha: 0,
            y: 100,
            ease: Expo.easeOut,
            toggleActions: "restart pause resume reverse",
            clearProps: "all"
          }, "+=0.2");
        });
      });
    },

    slideLeft: function () {
      if (window.innerWidth > 550) {
        $(document).ready(function () {
          $(".rts-slide-right-gsap").each(function () {
            let rts_SkewInUp = gsap.timeline({
              scrollTrigger: {
                trigger: this,
                start: "top 90%",
                markers: false
              }
            });

            rts_SkewInUp.from(this, {
              duration: 2,
              skewY: 0,
              transformOrigin: "left top",
              autoAlpha: 0,
              x: -150,
              ease: Expo.easeOut,
              toggleActions: "restart pause resume reverse",
              clearProps: "all"
            }, "+=0.2");
          });
        });
      }

    },

    slideRight: function () {

      if (window.innerWidth > 550) {
        $(document).ready(function () {
          $(".rts-slide-left-gsap").each(function () {
            let rts_SkewInUp = gsap.timeline({
              scrollTrigger: {
                trigger: this,
                start: "top 90%",
                markers: false
              }
            });

            rts_SkewInUp.from(this, {
              duration: 2,
              skewY: 0,
              transformOrigin: "left top",
              autoAlpha: 0,
              x: 150,
              ease: Expo.easeOut,
              toggleActions: "restart pause resume reverse",
              clearProps: "all"
            }, "+=0.2");
          });
        });
      }

    },

    buttonMoveAnimation: function () {
      $(document).ready(function () {
        $('.btn-hover').on('mouseenter', function (e) {
          var x = e.pageX - $(this).offset().left;
          var y = e.pageY - $(this).offset().top;

          $(this).find('span').css({
            top: y,
            left: x
          });
        });

        $('.btn-hover').on('mouseout', function (e) {
          var x = e.pageX - $(this).offset().left;
          var y = e.pageY - $(this).offset().top;

          $(this).find('span').css({
            top: y,
            left: x
          });
        });

        const all_btns = gsap.utils.toArray(".btn_wrapper");
        if (all_btns.length > 0) {
          var all_btn = gsap.utils.toArray(".btn_wrapper");
        } else {
          var all_btn = gsap.utils.toArray("#btn_wrapper");
        }
        const all_btn_cirlce = gsap.utils.toArray(".btn-item");
        all_btn.forEach((btn, i) => {
          $(btn).mousemove(function (e) {
            callParallax(e);
          });

          function callParallax(e) {
            parallaxIt(e, all_btn_cirlce[i], 80);
          }

          function parallaxIt(e, target, movement) {
            var $this = $(btn);
            var relX = e.pageX - $this.offset().left;
            var relY = e.pageY - $this.offset().top;

            gsap.to(target, 0.5, {
              x: ((relX - $this.width() / 2) / $this.width()) * movement,
              y: ((relY - $this.height() / 2) / $this.height()) * movement,
              ease: Power2.easeOut,
            });
          }
          $(btn).mouseleave(function (e) {
            gsap.to(all_btn_cirlce[i], 0.5, {
              x: 0,
              y: 0,
              ease: Power2.easeOut,
            });
          });
        });
      });
    },

    teamAnimation: function () {
      $(document).ready(function () {
        let portfoliotext = document.getElementsByClassName('rts-portfolio-area');
        if (device_width > 767 && portfoliotext.length) {
          let portfolioline = gsap.timeline({
            scrollTrigger: {
              trigger: ".rts-portfolio-area",
              start: "top center-=200",
              pin: ".rts-portfolio-text",
              end: "bottom bottom+=80",
              markers: false,
              pinSpacing: false,
              scrub: 1,
            }
          })

          portfolioline.to(".rts-portfolio-text", {
            scale: 1.5,
            duration: 1,
            opacity: .5,
            skewX: 5,
          })
          portfolioline.to(".rts-portfolio-text", {
            scale: 2.5,
            duration: 1,
            opacity: .5,
            color: "#82b440",
            skewX: -0,
          })
          portfolioline.to(".rts-portfolio-text", {
            scale: 1,
            duration: 1,
            skewX: -0,
            color: "#000",
          }, "+=2")
        }

      });
    },

    showRightRevel: function () {
      let hoverTab = document.getElementsByClassName('rts-hover-tab');
      if (hoverTab.length) {

        $(".rts-hover-tab").on("mouseenter", function () {
            $(this).addClass("active").siblings().removeClass("active");
          }),

          gsap.utils.toArray(".rts-show-revel-right").forEach((e) => {
            gsap.set(e, {
                opacity: 0,
                y: 100
              }),
              gsap.to(e, {
                scrollTrigger: {
                  trigger: e,
                  start: "top 90%",
                  end: "bottom 60%",
                  markers: !1
                },
                opacity: 1,
                y: -0,
                ease: "power2.out",
                duration: 2,
                stagger: 0.5
              });
          });
      };

    },

    caseVarticleScroll: function () {

      let varticle_scroll = document.getElementsByClassName('carticle-slide-active');
      if (varticle_scroll.length) {

        gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
        const wrapper = document.querySelector(".scroller-wrapper"); // slider wrapper
        const scroller = wrapper.querySelector(".scroller"); // slider scroller
        const timelines = []; // gsap stuff storage for cleanup

        //set random color theme
        document.body.style.setProperty('--hue', Math.round(Math.random() * 360));

        const getToValue = () =>
          scroller.scrollWidth - wrapper.getBoundingClientRect().width; // calculate max distance to move.

        const mm = gsap.matchMedia(); // Self cleaning media query engine of gsap

        mm.add("(min-width:641px)", () => {

          // scrollTrigger pre-pinning animation
          let beforeST = gsap.fromTo(
            scroller, {
              x: () => {
                let distance =
                  scroller.getBoundingClientRect().top + window.scrollY;
                return distance * 0.5;
              },
              opacity: 0.2
            }, {
              x: () => 0,
              opacity: 1,
              ease: "none",
              immediateRender: true,
              scrollTrigger: {
                trigger: scroller,
                start: -10,
                end: "50% 46.99%",
                //markers:true,
                invalidateOnRefresh: true,
                scrub: true
              }
            }
          );
          timelines.push(beforeST);

          // scrollTrigger pinned
          let mainST = gsap.fromTo(
            scroller, {
              x: () => 0
            }, {
              x: () => -getToValue(),
              immediateRender: false,
              ease: "none",
              scrollTrigger: {
                trigger: scroller,
                start: "50% 47%",
                end: () =>
                  "+=" + Math.min(getToValue(), Math.max(window.innerHeight, window.innerWidth) + 200),
                pin: true,
                markers: false,
                invalidateOnRefresh: true,
                scrub: true,
                onRefresh: function () {}
              }
            }
          );
          timelines.push(mainST);

          // scrollTrigger post-pinning animation
          let afterST = gsap.fromTo(
            scroller, {
              x: () => -getToValue(),
              opacity: 1
            }, {
              x: () => -getToValue() - window.innerWidth * 0.5,
              opacity: 0,
              ease: "none",
              scrollTrigger: {
                trigger: scroller,
                start: () => mainST.scrollTrigger.end,
                end: () => "+=" + window.innerHeight * 0.75,
                invalidateOnRefresh: true,
                markers: false,
                scrub: true
              }
            }
          );
          timelines.push(afterST);

          // cleanup
          return () => {
            while (timelines.length > 0) {
              timelines.pop().kill();
            }
            gsap.set([scroller, wrapper], {
              clearProps: "all"
            });
          };
        });

      }




    },

    borderBottomGrow: function () {
      let rts_banner = gsap.timeline()


      rts_banner.from(".banner-one-wrapper .title span::after", {
        xPercent: -100,
        duration: 1,
        y: -70,
      }, '-=6.5')



      rts_banner.from(hero_btn, {
        opacity: 0,
        y: -70,
        ease: "bounce",
        duration: 1.5
      }, '-=5')


    },
    // titleOpacityWrap
    titleOpacityWrap: function () {

      $(document).ready(function () {

        var controller = new ScrollMagic.Controller();

        $('.rts-has-mask-fill').each(function () {
          var words = $(this).text();
          var total = words;
          $(this).empty();
          $(this).append($("<span /> ").text(words));
        });



        $('.rts-has-mask-fill span').each(function () {
          var $this = $(this);
          var $thisHeight = $(this).height() * 2;

          var maskFillText = gsap.to($this, {
            duration: 1,
            backgroundSize: "200% 100%",
            ease: Linear.easeNone
          });

          var maskFillTextScene = new ScrollMagic.Scene({
              triggerElement: $this[0],
              triggerHook: 0.8,
              duration: $thisHeight
            })
            .setTween(maskFillText)
            .addTo(controller);

          if ($("body").hasClass("smooth-scroll")) {
            scrollbar.addListener(() => {
              maskFillTextScene.refresh()
            });
          }
        });

      });
    },

    magicCoursor: function () {
      var myCursor = $('.rts-cursor');
      if (myCursor.length) {
        if ($("body").length) {
          const e = document.querySelector(".cursor-inner"),
            t = document.querySelector(".cursor-outer");
          var n, i = 0,
            W = 0,
            intro = 0,
            o = !1;
          // if($('.xoxo_fn_intro').length){intro=1;}
          var buttons = "a, button, .active-progress, .search-click, .action-menu, .swiper-button-next, .swiper-button-prev";
          var remove_cursor = ".learn-more-btn, .swiper-slider-main-main-wrapper-portfolio .thumbnail, .single-portfolio-style-five a, .mySwiper_portfolio-5-scale-none a";
          // link mouse enter + move
          window.onmousemove = function (s) {
            o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX
          }, $("body").on("mouseenter", buttons, function () {
            e.classList.add("cursor-hover"), t.classList.add("cursor-hover")
          }), $("body").on("mouseleave", buttons, function () {
            $(this).is("a") && $(this).closest(".cursor-link").length || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"))
          }), e.style.visibility = "visible", t.style.visibility = "visible";
          // slider mouse enter
          var mightyBody = jQuery('body');
          mightyBody.on('mouseenter', remove_cursor, function () {
            e.classList.add('cursor-remove');
            t.classList.add('cursor-remove');
          }).on('mouseleave', remove_cursor, function () {
            e.classList.remove('cursor-remove');
            t.classList.remove('cursor-remove');
          });
        }
      }
    },

    portfolioTenSwiper: function () {


      $(document).ready(function () {
        let hover_portfolio = document.querySelectorAll('.single-portfolio-tem-title.one');
        let hover_portfolioHover = document.querySelectorAll('.rts-img-hover.one');

        if (hover_portfolio.length) {
          $(".single-portfolio-tem-title.one").on("mouseenter", function () {
            $(hover_portfolioHover).addClass("active").siblings().removeClass("active");
          });
        }
      });
      $(document).ready(function () {
        let hover_portfolio = document.querySelectorAll('.single-portfolio-tem-title.two');
        let hover_portfolioHover = document.querySelectorAll('.rts-img-hover.two');

        if (hover_portfolio.length) {
          $(".single-portfolio-tem-title.two").on("mouseenter", function () {
            $(hover_portfolioHover).addClass("active").siblings().removeClass("active");
          });
        }
      });
      $(document).ready(function () {
        let hover_portfolio = document.querySelectorAll('.single-portfolio-tem-title.three');
        let hover_portfolioHover = document.querySelectorAll('.rts-img-hover.three');

        if (hover_portfolio.length) {
          $(".single-portfolio-tem-title.three").on("mouseenter", function () {
            $(hover_portfolioHover).addClass("active").siblings().removeClass("active");
          });
        }
      });
      $(document).ready(function () {
        let hover_portfolio = document.querySelectorAll('.single-portfolio-tem-title.four');
        let hover_portfolioHover = document.querySelectorAll('.rts-img-hover.four');

        if (hover_portfolio.length) {
          $(".single-portfolio-tem-title.four").on("mouseenter", function () {
            $(hover_portfolioHover).addClass("active").siblings().removeClass("active");
          });
        }
      });
      $(document).ready(function () {
        let hover_portfolio = document.querySelectorAll('.single-portfolio-tem-title.five');
        let hover_portfolioHover = document.querySelectorAll('.rts-img-hover.five');

        if (hover_portfolio.length) {
          $(".single-portfolio-tem-title.five").on("mouseenter", function () {
            $(hover_portfolioHover).addClass("active").siblings().removeClass("active");
          });
        }
      });
      $(document).ready(function () {
        let hover_portfolio = document.querySelectorAll('.single-portfolio-tem-title.six');
        let hover_portfolioHover = document.querySelectorAll('.rts-img-hover.six');

        if (hover_portfolio.length) {
          $(".single-portfolio-tem-title.six").on("mouseenter", function () {
            $(hover_portfolioHover).addClass("active").siblings().removeClass("active");
          });
        }
      });
    },


    preloaderWithBannerActivation: function () {
      const main_window = $(window);
      let percentage = 0;
      let counterShowsUp = false;

      //  Start Pree Loader 
      let preloaderActives = document.getElementsByClassName('loading-screen');

      if (preloaderActives.length) {
        function fireCounter() {
          if ($(".js-stats-counter").length) {
            if (jQuery().countTo && counterShowsUp === false) {
              let pos = $(".js-stats-counter").offset().top;
              if (main_window.scrollTop() + main_window.innerHeight() - 50 >= pos) {
                $(".counter").countTo();
                counterShowsUp = true;
              }
            }
          }
        }

        fireCounter();
        let LoadingCounter = setInterval(function () {
          if (percentage <= 100) {
            $("#loading-screen .loading-counter").text(percentage + "%");
            $("#loading-screen .bar").css("height", (100 - percentage) / 2 + "%");
            $("#loading-screen .progress-line").css("transform", "scale(" + percentage / 100 + ")");
            percentage++;
          } else {
            // The preloader reached 100% completion, start the animation here

            let homeAgency = gsap.timeline();
            // Charchater Come long Animation
            let hero__title = document.querySelector(".rts_hero__title");
            let hero__subtitle = document.querySelector(".hero__sub-title");
            let split_hero__title = new SplitText(hero__title, {
              type: "chars"
            });
            let split_hero__subtitle = new SplitText(hero__subtitle, {
              type: "chars words"
            });
            homeAgency.from(split_hero__title.chars, {
              duration: 1,
              x: 70,
              autoAlpha: 0,
              stagger: 0.03,
            });
            homeAgency.from(
              split_hero__subtitle.words, {
                duration: 1,
                x: 50,
                autoAlpha: 0,
                stagger: 0.01
              },
              "-=1"
            );
            // Your GSAP animation code ends here
            $("#loading-screen").fadeOut(500, function () {
              // After the animation completes, remove the loading screen
              $(this).remove();
            });
            clearInterval(LoadingCounter);
          }
        }, 10);
      } else {
        let homeAgency = gsap.timeline();
        // Charchater Come long Animation
        let hero__title = document.querySelector(".rts_hero__title");
        let hero__subtitle = document.querySelector(".hero__sub-title");
        let split_hero__title = new SplitText(hero__title, {
          type: "chars"
        });
        let split_hero__subtitle = new SplitText(hero__subtitle, {
          type: "chars words"
        });
        homeAgency.from(split_hero__title.chars, {
          duration: 1,
          x: 70,
          autoAlpha: 0,
          stagger: 0.03,
        });
        homeAgency.from(
          split_hero__subtitle.words, {
            duration: 1,
            x: 50,
            autoAlpha: 0,
            stagger: 0.01
          },
          "-=1"
        );

        // Your GSAP animation code ends here
      }
    },

  

    stickySidebar: function () {
      if (typeof $.fn.theiaStickySidebar !== "undefined") {
        $(".rts-sticky-column-item").theiaStickySidebar({
          additionalMarginTop: 130,
        });
        $(".sticky-sidebar").theiaStickySidebar({
          additionalMarginTop:30,
        });
      }
    },


  
    // sticky header activation
    stickyHeader: function (e) {
      $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
          $('.header--sticky').addClass('sticky-150')
        } else {
          $('.header--sticky').removeClass('sticky-150')
        }
        if ($(this).scrollTop() > 350) {
          $('.header--sticky').addClass('sticky')
        } else {
          $('.header--sticky').removeClass('sticky')
        }
      })
    },

  }
  rtsJs.m();



  // Dark mode 
  document.addEventListener("DOMContentLoaded", function() {
    const headerSwitchCheckbox = document.getElementById("headerSwitchCheckbox");
    const htmlTag = document.documentElement;
    const localStorageKey = "darkModePreference";

    // Function to toggle the dark mode
    function toggleDarkMode() {
        if (headerSwitchCheckbox.checked) {
            htmlTag.setAttribute("data-theme", "dark");
            localStorage.setItem(localStorageKey, "dark");
        } else {
            htmlTag.setAttribute("data-theme", "light");
            localStorage.setItem(localStorageKey, "light");
        }
    }

    // Function to set the initial theme based on local storage
    function setInitialTheme() {
        const preferredTheme = localStorage.getItem(localStorageKey);
        if (preferredTheme === "dark") {
            htmlTag.setAttribute("data-theme", "dark");
            headerSwitchCheckbox.checked = true;
        } else {
            htmlTag.setAttribute("data-theme", "light");
            headerSwitchCheckbox.checked = false;
        }
        // Display the content after setting the initial theme
        document.body.style.display = "block";
    }

    // Add event listener for the toggle switch
    headerSwitchCheckbox.addEventListener("change", toggleDarkMode);

    // Set the initial theme when the page loads
    setInitialTheme();
});
         
  $(window).on('elementor/frontend/init', function () { 
    elementorFrontend.hooks.addAction( 'frontend/element_ready/rt-pages-header-banner.default', headerBanner );
    elementorFrontend.hooks.addAction( 'frontend/element_ready/react-video.default', rtVideoSection);
    elementorFrontend.hooks.addAction( 'frontend/element_ready/rt-team-member.default', Team);
    elementorFrontend.hooks.addAction( 'frontend/element_ready/rt-portfolio-grid.default', Team);
    elementorFrontend.hooks.addAction( 'frontend/element_ready/rt-react-animate-image.default', rtVideoSection);
    elementorFrontend.hooks.addAction( 'frontend/element_ready/rt-react-animate-image.default', addParallaxAndZoom);
    elementorFrontend.hooks.addAction( 'frontend/element_ready/rt-react-parallax-image.default', addParallaxAndZoom);
  });
  
  
  function addParallaxAndZoom() {
    // Get all elements with the class 'anim-image-parallax'
    let parallaxElements = document.getElementsByClassName('anim-image-parallax');
  
    if (parallaxElements.length) {
      $(".anim-image-parallax").each(function () {
        // Wrap each element with a div for styling and positioning
        $(this).wrap('<div class="anim-image-parallax-wrap"><div class="anim-image-parallax-inner"></div></div>');
  
        // Add overflow hidden to the wrapping div
        $(".anim-image-parallax-wrap").css({
          "overflow": "hidden"
        });
  
        // Get references to the elements
        let $animImageParallax = $(this);
        let $aipWrap = $animImageParallax.parents(".anim-image-parallax-wrap");
        let $aipInner = $aipWrap.find(".anim-image-parallax-inner");
  
        // Parallax effect using GSAP
        gsap.to($animImageParallax, {
          yPercent: 40,
          ease: "none",
          scrollTrigger: {
            trigger: $aipWrap,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            markers: false,
          },
        });
  
        // Zoom in effect using GSAP timeline
        let tl_aipZoomIn = gsap.timeline({
          scrollTrigger: {
            trigger: $aipWrap,
            start: "top 90%",
            markers: false,
          }
        });
  
        tl_aipZoomIn.from($aipInner, {
          duration: 1.5,
          autoAlpha: 0,
          scale: 1.4,
          ease: Power2.easeOut,
          clearProps: "all"
        });
      });
    }
  }

function headerBanner() {
  // Creative Agency Banner Image 
    if ($(".scroll-right-box-banner").length) {
          gsap.to(".scroll-right-box-banner", {
            x: 300,
            autoAlpha: 0,
            ease: "none",
            scrollTrigger: {
              trigger: ".scroll-right-box-banner-wrapepr",
              start: "top 80%",
              end: "30% top",
              scrub: true,
              markers: false,
              duration: 15,
            },
          });
    }

}

// rt video section
function rtVideoSection(){
  let growActive = document.getElementsByClassName('grow');
    if (growActive.length) {
      const growTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".grow",
          scrub: 1,
          start: "top center",
          end: "+=1000",
          ease: "power1.out"
        }
      });
      growTl.to(".grow", {
        duration: 1,
        scale: 1
      });
    }
}

// Team Member Animation 
function Team($scope) {
    let portfolio_lists = gsap.utils.toArray($scope.find(".rts-team__item"));
    if (portfolio_lists.length) {
        portfolio_lists.forEach((portfolio, i) => {
            gsap.set(portfolio, {
                opacity: 0.7
            });

            let t1 = gsap.timeline();

            t1.set(portfolio, {
                position: "relative",
            });

            t1.to(portfolio, {
                scrollTrigger: {
                    trigger: portfolio,
                    scrub: 2,
                    duration: 1.5,
                    start: "top bottom+=100",
                    end: "bottom center",
                    markers: false
                },
                scale: 1,
                opacity: 1,
                rotateX: 0,
            });
        });

        gsap.to($scope.find(".bg_image img"), {
            xPercent: -18,
            scrollTrigger: {
                trigger: $scope.find(".rts-team__area"),
                start: "top top",
                end: "bottom center",
                scrub: 3
			}
            });
        }
    }

})(jQuery, window)