$(document).ready(function () {
    $('.slider').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        pauseOnFocus: false,
        touchMove: false,
        draggable: false
    });

    $('.header-top__btn').on('click', function () {
        $('.menu').addClass('active');
        $('body').addClass('noscroll');
    });

    $('.menu__close-btn').on('click', function () {
        $('.menu').removeClass('active');
        $('body').removeClass('noscroll');
    });

    wow = new WOW(
        {
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: false,
            live: true
        }
    );
    wow.init();

    $('.header-content__btn, .footer__btn').on('click', function () {
        $('body').addClass('noscroll');
    });
    $('.modal-window__close-btn').on('click', function () {
        $('body').removeClass('noscroll fancybox-active compensate-for-scrollbar');
    });

});