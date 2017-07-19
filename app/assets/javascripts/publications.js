$(document).ready((function() {
    var screenHeight = window.innerHeight;
    $('.publication-panels').css("margin-top", ((screenHeight-300)/2-50));

    $('.panel-publications0').stop().fadeTo(500, 1);
    $('.panel-publications1').stop().fadeTo(500, 1);
    $('.panel-publications2').stop().fadeTo(500, 1);
}));
