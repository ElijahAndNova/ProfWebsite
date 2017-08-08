$(document).ready((function() {

    var screenHeight = window.innerHeight;
    var screenWidth = window.innerWidth;
    $('.panel-get-in-touch').css("margin-top", ((screenHeight-300)/2-120));

    if ( $('.global').css('display') == 'none' ) {
        $('.panel-get-in-touch').css("width", screenWidth- 25);
        $('.panel-get-in-touch').css("left", 15);
        $('.panel-get-in-touch2').css("width", screenWidth - 50);
        // $('.panel-get-in-touch2').css("left", 15);
        $('.panel-get-in-touch3').css("width", screenWidth - 50);
        // $('.panel-get-in-touch3').css("left", 15);
        $('.panel-get-in-touch4').css("width", screenWidth - 50);
        // $('.panel-get-in-touch4').css("left", 15);
    }

    $('.panel-get-in-touch').stop().fadeTo(500, 1);
    $('.panel-get-in-touch2').stop().fadeTo(500, 1);
    $('.panel-get-in-touch3').stop().fadeTo(500, 1);
    $('.panel-get-in-touch4').stop().fadeTo(500, 1);

}));
