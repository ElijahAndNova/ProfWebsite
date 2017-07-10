function fadeAllIn(){
    $('.panel-research').stop().fadeTo(750, 1);
    $('.panel-research2').stop().fadeTo(750, 1);
    $('.panel-research3').stop().fadeTo(750, 1);
    $('.panel-research4').stop().fadeTo(750, 1);
}

$(document).ready((function() {

    var screenHeight = window.innerHeight;
    $('.research-panels').css("margin-top", ((screenHeight-300)/2-125));

    fadeAllIn();

}));
