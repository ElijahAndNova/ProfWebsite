function fadeThemIn(){
    $('.panel-about').stop().fadeTo(750, 1);
    $('.panel-about2').stop().fadeTo(750, 1);
}

$(document).ready((function() {

    var screenHeight = window.innerHeight;
    $('.about-panels').css("margin-top", ((screenHeight-300)/2-250));

    fadeThemIn();

}));
