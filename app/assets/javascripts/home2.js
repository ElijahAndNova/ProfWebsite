$(document).ready((function() {

    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;
    // $('.hexpic').css("margin-left", ((screenWidth - 300) / 2+35-250));
    $('.global').css("margin-top", ((screenHeight - 300) / 2+120));
    // $('.hexpic').css("margin-top", ((screenHeight - 300) / 2+120));
    // $('.hexagon').css("margin-left", ((screenWidth - 300) / 2+142-250));
    // $('.hexagon').css("margin-top", ((screenHeight - 300) / 2 - 180));

    $('.hexpic').fadeTo(750, 1);
    setTimeout(function() { $('.hex1').fadeTo(500, 1); }, 250);
    setTimeout(function() { $('.hex2').fadeTo(500, 1); }, 500);
    setTimeout(function() { $('.hex3').fadeTo(500, 1); }, 750);
    setTimeout(function() { $('.hex4').fadeTo(500, 1); }, 1000);
    setTimeout(function() { $('.hex5').fadeTo(500, 1); }, 1250);
    setTimeout(function() { $('.hex6').fadeTo(500, 1); }, 1500);
    setTimeout(function() { $('.hex7').fadeTo(500, 1); }, 1750);
    setTimeout(function() { $('.hex8').fadeTo(500, 1); }, 2000);
    setTimeout(function() { $('.hex9').fadeTo(500, 1); }, 2250);

}));
