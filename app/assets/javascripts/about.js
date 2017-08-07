function fadeThemIn(){
    // $('.panel-about').stop().fadeTo(750, 1);
    // $('.panel-about2').stop().fadeTo(750, 1);
    // $('.home_button').stop().fadeTo(1000, 1);
    fadeInPanel2();
    setTimeout(function() { fadeInPanel(); }, 500);
    setTimeout(function () { fadeInPic(); }, 1000);
    setTimeout(function() { fadeInTitle(); }, 1500);
    setTimeout(function () { fadeInParagraph1(); }, 2000);
    // fadeInParagraph2();
    // fadeInParagraph3();
    // setTimeout(function() { fadeInPic() }, 1000);
    // setTimeout(function() { fadeInParagraph1(); }, 1000);
    setTimeout(function() { fadeInParagraph2(); }, 2500);
    setTimeout(function() { fadeInParagraph3(); }, 3000);
}

function fadeInTitle(){
    $('.title').stop().fadeTo(1000, 1);
}

function fadeInPanel() {
    $('.panel-about').stop().fadeTo(1000, 1);
}

function fadeInPanel2(){
    $('.panel-about2').stop().fadeTo(1000, 1);
}

function fadeInPic(){
    $('.pic_of_me_5').stop().fadeTo(1000, 1);
}

function fadeInParagraph1(){
    $('.p1').stop().fadeTo(1000, 1);
}

function fadeInParagraph2(){
    $('.p2').stop().fadeTo(1000, 1);
}

function fadeInParagraph3(){
    $('.p3').stop().fadeTo(1000, 1);
}

$(document).ready((function() {

    var screenHeight = window.innerHeight;
    var screenWidth = window.innerWidth;
    $('.about-panels').css("margin-top", ((screenHeight-300)/2-270));

    if ( $('.global').css('display') == 'none' ){
        // alert("Mobile version");
        $('.panel-about').css("right", 17);
        $('.panel-about').css("width", screenWidth+50);
        $('.panel-about').css("height", (screenWidth+50)*1.5);
        $('.panel-about2').css("right", 17);
        $('.panel-about2').css("width", screenWidth+50);
    }

    fadeThemIn();

}));
