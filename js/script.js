$(function () {
    
    $(window).on('scroll', function() {
        let scrollY = $(this).scrollTop();
        
        if (scrollY >= 100) {
            $('.navbar-vurstore').addClass('navbar-vurstore-active');
        }else{
            $('.navbar-vurstore').removeClass('navbar-vurstore-active');
        };
    });

     $('.wrap-categories').owlCarousel({
        items:4,
        loop: true,
        margin: 30,
        autoWidth:true,
        dots: false
    });
});

