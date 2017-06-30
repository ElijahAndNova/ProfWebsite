$(document).on("turbolinks:load", (function() {

    $('.ultimate').fadeIn(500);

    // make this line work
    // $('.all').classList.remove(".ultimate");

    var img = $(".animate"),
        width = img.get(0).width,
        screenWidth = $(window).width()+2200,
        duration = 30000;

    function complete() {
        img.css('left', 130);
    }

    function animatePlane() {
        img.css("left", -width).animate({
            "left": screenWidth
        }, duration, animatePlane, complete());
    }

    animatePlane();
}));