$(document).ready((function() {
    var screenHeight = window.innerHeight;
    $('.publication-panels').css("margin-top", ((screenHeight-300)/2-50));

    $('.panel-publications0').stop().fadeTo(1000, 1);
    setTimeout(function() { $('.panel-publications1').stop().fadeTo(1000, 1); }, 500);
    setTimeout(function() { $('.panel-publications2').stop().fadeTo(1000, 1); }, 500);
}));
