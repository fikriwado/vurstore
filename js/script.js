$(function () {
    
    $(window).on('scroll', function() {
        let scrollY = $(this).scrollTop();
        
        if (scrollY >= 100) {
            $('.navbar-fustore').addClass('navbar-fustore-active');
        }else{
            $('.navbar-fustore').removeClass('navbar-fustore-active');
        };
    });
});

