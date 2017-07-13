$(document).ready((function() {
// $(document).on('ready page:load', function() {
// $(document).on("turbolinks:load", function() {

    var screenHeight = window.innerHeight;
    $('.animate').css("margin-top", ((screenHeight - 300) / 2 - 225));

    $('.ultimate').fadeIn(500);

    // make this line work
    // $('.all').classList.remove(".ultimate");

    var img = $(".animate"),
        width = img.get(0).width,
        screenWidth = $(window).width() + 1600,
        // duration = 50000;
        duration = 25000;
    // duration = 10000;

    function animatePlane() {
        img.css('opacity', 0);
        img.fadeTo(500, 1);
        img.css('margin-left', 400);
        img.css("left", 0).animate({
            left: screenWidth
        }, duration, animatePlane);
    }

    animatePlane();
// });
//     });
}));