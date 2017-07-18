function fadeThemIn(){
    $('.panel-about').stop().fadeTo(750, 1);
    $('.panel-about2').stop().fadeTo(750, 1);
    fadeInPic();
    fadeInParagraph1();
    // fadeInParagraph2();
    // fadeInParagraph3();
    // setTimeout(function() { fadeInPic() }, 1000);
    // setTimeout(function() { fadeInParagraph1(); }, 1000);
    setTimeout(function() { fadeInParagraph2(); }, 500);
    setTimeout(function() { fadeInParagraph3(); }, 1000);
}

function fadeInPic(){
    $('.pic_of_me_5').stop().fadeTo(500, 1);
    $('.title').stop().fadeTo(500, 1);
}

function fadeInParagraph1(){
    $('.p1').stop().fadeTo(2000, 1);
}

function fadeInParagraph2(){
    $('.p2').stop().fadeTo(2000, 1);
}

function fadeInParagraph3(){
    $('.p3').stop().fadeTo(2000, 1);
}

$(document).ready((function() {

    var screenHeight = window.innerHeight;
    $('.about-panels').css("margin-top", ((screenHeight-300)/2-250));

    fadeThemIn();

}));
