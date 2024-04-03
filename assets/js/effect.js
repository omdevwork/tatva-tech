init = function () {
    var jarallax = new Jarallax();
    jarallax.addAnimation('.dots-effect', [{ progress: '0%', top: '-30%' }, { progress: '10%', top: '50%' }])
}

$(window).scroll(function () {
    var rotate = $(window).scrollTop() / 500 % Math.PI;
    $('.dots-effect').css({ transform: 'rotate(' + rotate + 'rad)' });
});