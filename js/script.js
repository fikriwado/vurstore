$(function () {
    $(window).on('scroll', function () {
        let scrollY = $(this).scrollTop();

        if (scrollY >= 100) {
            $('.navbar-vurstore').addClass('navbar-vurstore-active');
        } else {
            $('.navbar-vurstore').removeClass('navbar-vurstore-active');
        };
    });

    $('.menu-items-scroll').on('click', function (e) {
        e.preventDefault();
        let thisMenu = $(this).attr('href');
        let target = $(thisMenu);
        $('html, body').animate({
            scrollTop: target.offset().top - 100
        }, 1000, 'easeInOutExpo');
    });

    $('.wrap-categories').owlCarousel({
        items: 4,
        loop: true,
        margin: 30,
        autoWidth: true,
        dots: false
    });

    AOS.init({
        disable: function () {
            var maxWidth = 992;
            return window.innerWidth < maxWidth;
        }
    });
});