function fadeAllIn(){
    $('.panel-research').stop().fadeTo(750, 1);
    $('.panel-research2').stop().fadeTo(750, 1);
    $('.panel-research3').stop().fadeTo(750, 1);
    $('.panel-research4').stop().fadeTo(750, 1);
}

$(document).ready((function() {

    var screenHeight = window.innerHeight;
    var screenWidth = window.innerWidth;

    $('.research-panels').css("margin-top", ((screenHeight-300)/2-125));

    if ( $('.global').css('display') == 'none' ) {
        $('.panel-research').css("width", screenWidth - 50);
        $('.panel-research2').css("width", screenWidth - 50);
        $('.panel-research3').css("width", screenWidth - 50);
        $('.panel-research4').css("width", screenWidth - 50);
    }

    fadeAllIn();

}));
