function fadeTheseIn(){
    $('.panel-awards').stop().fadeTo(750, 1);
    $('.panel-awards2').stop().fadeTo(750, 1);
}

$(document).ready((function() {

    var screenHeight = window.innerHeight;
    $('.panel-awards').css("margin-top", ((screenHeight-300)/2-50));

    fadeTheseIn();

}));
