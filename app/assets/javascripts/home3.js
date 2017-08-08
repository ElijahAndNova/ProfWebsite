$(document).ready((function() {

    if(document.URL.indexOf("#")==-1){
        url = document.URL+"#";
        location = "#";
        location.reload(true);
    }

    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;
    $('.global').css("margin-left", ((screenWidth - 300) / 2+35-600));
    $('.global').css("margin-top", ((screenHeight - 300) / 2+120));
    // $('.hexpic').css("margin-top", ((screenHeight - 300) / 2+120));
    // $('.hexagon').css("margin-left", ((screenWidth - 300) / 2+142-250));
    // $('.hexagon').css("margin-top", ((screenHeight - 300) / 2 - 180));

    $('.hexpic').fadeTo(500, 1);
    $('.hex1').fadeTo(500, 1);
    $('.hex2').fadeTo(500, 1);
    $('.hex3').fadeTo(500, 1);
    $('.hex4').fadeTo(500, 1);
    $('.hex5').fadeTo(500, 1);
    $('.hex6').fadeTo(500, 1);
    $('.hex7').fadeTo(500, 1);
    $('.hex8').fadeTo(500, 1);
    $('.hex9').fadeTo(500, 1);
    $('.hex10').fadeTo(500, 1);

}));
