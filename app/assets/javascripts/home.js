$(document).ready((function() {

    var screenHeight = window.innerHeight;
    $('.animate').css("margin-top", ((screenHeight - 300) / 2 - 225));

    $('.ultimate').fadeIn(500);

    // make this line work
    // $('.all').classList.remove(".ultimate");

    var img = $(".animate"),
        screenWidth = $(window).width() + 1600,
        duration = 25000;

    function animatePlane() {
        img.css('opacity', 0);
        img.fadeTo(500, 1);
        img.css('margin-left', 400);
        img.css("left", 0).animate({
            left: screenWidth
        }, duration, animatePlane);
    }

    function checkHovers(){
        $('.NASA_icon').hover(function() {
            $('.github_icon').css('opacity', '.5');
            $('.facebook_icon').css('opacity', '.5');
        }, function() {
            $('.github_icon').css('opacity', '1');
            $('.facebook_icon').css('opacity', '1');
        });

        $('.facebook_icon').hover(function() {
            $('.github_icon').css('opacity', '.5');
            $('.NASA_icon').css('opacity', '.5');
        }, function() {
            $('.github_icon').css('opacity', '1');
            $('.NASA_icon').css('opacity', '1');
        });

        $('.github_icon').hover(function() {
            $('.facebook_icon').css('opacity', '.5');
            $('.NASA_icon').css('opacity', '.5');
        }, function() {
            $('.facebook_icon').css('opacity', '1');
            $('.NASA_icon').css('opacity', '1');
        });
    }

    // checkHovers();
    animatePlane();

}));