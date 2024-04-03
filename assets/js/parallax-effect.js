$(document).ready(function () {
    //parallax scroll
    $(window).on("load scroll", function () {
        if ($(window).width() > '1200') {
            var parallaxElement1 = $(".parallax-animation1"),
            parallaxQuantity = parallaxElement1.length;
        window.requestAnimationFrame(function () {
            for (var i = 0; i < parallaxQuantity; i++) {
                var currentElement = parallaxElement1.eq(i),
                    windowTop = $(window).scrollTop(),
                    elementTop = currentElement.offset().top,
                    elementHeight = currentElement.height(),
                    viewPortHeight = window.innerHeight * 0.5 - elementHeight * 0.5,
                    scrolled = windowTop - elementTop + viewPortHeight;
                currentElement.css({
                    transform: "translate3d(0," + scrolled * 0.09 + "px, 0)"
                });
            }
        });

        var parallaxElement = $(".parallax-animation"),
            parallaxQuantity = parallaxElement.length;
        window.requestAnimationFrame(function () {
            for (var i = 0; i < parallaxQuantity; i++) {
                var currentElement = parallaxElement.eq(i),
                    windowTop = $(window).scrollTop(),
                    elementTop = currentElement.offset().top,
                    elementHeight = currentElement.height(),
                    viewPortHeight = window.innerHeight * 0.5 - elementHeight * 0.5,
                    scrolled = windowTop - elementTop + viewPortHeight;
                currentElement.css({
                    transform: "translate3d(0," + scrolled * -0.10 + "px, 0)"
                });
            }
        });
        }
    });
});