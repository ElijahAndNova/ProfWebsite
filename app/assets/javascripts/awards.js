function fadeTheseIn(){
    $('.panel-awards').stop().fadeTo(750, 1);
    $('.panel-awards2').stop().fadeTo(750, 1);
}

$(document).ready((function() {

    var screenHeight = window.innerHeight;
    $('.awards-panels').css("margin-top", ((screenHeight-300)/2-125));

    fadeTheseIn();

}));
