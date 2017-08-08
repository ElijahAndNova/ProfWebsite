$(document).ready((function() {

    var screenHeight = window.innerHeight;
    var screenWidth = window.innerWidth;

    if ( $('.global').css('display') == 'none' ) {
        $('.panel-resume0').css("right", 18);
        $('.panel-resume0').css("width", screenWidth - 50);
    }

    $('.panel-resume0').css("margin-top", ((screenHeight-300)/2-50));
    $('.panel-resume0').stop().fadeTo(1000, 1);
    setTimeout(function() { $('.panel-resume1').stop().fadeTo(1000, 1); }, 500);


}));
