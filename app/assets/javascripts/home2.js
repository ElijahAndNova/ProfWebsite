$(document).ready((function() {

    if(document.URL.indexOf("#")==-1){
        if ( $('.global').css('display') == 'none' ){
            url = document.URL+"#";
            location = "#";
            location.reload(true);
        }
    }

    function releaseDown() {
        var isDownHovered = $('.myname').is(":hover");
        if (isDownHovered == false){
            $('.hex1').css("transform", "scale(.7,.7)");
        }
        else {
            $('.hex1').css("transform", "scale(.86,.86)");
        }
        // $('.hex1').css("transform", "scale(.7,.7)");
        // location.reload(true);
        randomizeColor();
    }

    var flip = 1;
    function randomizeColor(){
        // $('.hexX').css("transform", "scale(.9,.9)");
        if (flip == 1){
            $('.hexX').css("transform", "rotate(45deg");
            flip = 2;
        }
        else if (flip == 2){
            $('.hexX').css("transform", "rotate(90deg");
            flip = 3;
        }
        else if (flip == 3){
            $('.hexX').css("transform", "rotate(135deg");
            flip = 4;
        }
        else if (flip == 4){
            $('.hexX').css("transform", "rotate(180deg");
            flip = 1;
        }
        setTimeout(function() {releaseAmbient(); }, 250);
    }

    function releaseAmbient(){
        $('.hexX').css("transform", "scale(.6,.6)");
    }

    function releaseDown2() {
        var isDownHovered = $('.mypic').is(":hover");
        if (isDownHovered == false){
            $('.hexpic').css("transform", "scale(.7,.7)");
        }
        else {
            $('.hexpic').css("transform", "scale(.86,.86)");
        }
    }

    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;
    $('.global').css("margin-left", ((screenWidth - 300) / 2+35-750));
    $('.global').css("margin-top", ((screenHeight - 300) / 2+110)); //Working on elijahspiro.com
    // $('.global').css("margin-top", ((screenHeight - 300) / 2-100));
    $('.global').css("left", 10);

    // setTimeout(function() { $('.hexpic').fadeTo(250, 1); }, 500);
    // setTimeout(function() { $('.hex1').fadeTo(250, 1); }, 500);
    // setTimeout(function() { $('.hex10').fadeTo(250, 1); }, 700+500+500+500+500);
    // setTimeout(function() { $('.hex2').fadeTo(250, 1); }, 800+500+500+500+500);
    // setTimeout(function() { $('.hex3').fadeTo(250, 1); }, 900+500+500+500+500);
    // setTimeout(function() { $('.hex5').fadeTo(250, 1); }, 1000+500+500+500+500);
    // setTimeout(function() { $('.hex4').fadeTo(250, 1); }, 1100+500+500+500+500);
    // setTimeout(function() { $('.hex6').fadeTo(250, 1); }, 1200+500+500+500+500);
    // setTimeout(function() { $('.hex7').fadeTo(250, 1); }, 1300+500+500+500+500);
    // setTimeout(function() { $('.hex8').fadeTo(250, 1); }, 1400+500+500+500+500);
    // setTimeout(function() { $('.hex9').fadeTo(250, 1); }, 1500+500+500+500+500);

    setTimeout(function() { $('.hexpic').fadeTo(250, 1); }, 500);
    setTimeout(function() { $('.hex1').fadeTo(250, 1); }, 500);
    setTimeout(function() { $('.hex10').fadeTo(250, 1); }, 600+500+500+500+500);
    setTimeout(function() { $('.hex4').fadeTo(250, 1); }, 700+500+500+500+500);
    setTimeout(function() { $('.hex9').fadeTo(250, 1); }, 800+500+500+500+500);
    setTimeout(function() { $('.hex2').fadeTo(250, 1); }, 900+500+500+500+500);
    setTimeout(function() { $('.hex8').fadeTo(250, 1); }, 1000+500+500+500+500);
    setTimeout(function() { $('.hex5').fadeTo(250, 1); }, 1100+500+500+500+500);
    setTimeout(function() { $('.hex6').fadeTo(250, 1); }, 1200+500+500+500+500);
    setTimeout(function() { $('.hex7').fadeTo(250, 1); }, 1300+500+500+500+500);
    setTimeout(function() { $('.hex3').fadeTo(250, 1); }, 1400+500+500+500+500);
    setTimeout(function() { $('.hexX').fadeTo(150, 1); }, 1600+500+500+500+500+500);

    $('.hex1').click(function(){
        if ( $('.global').css('display') !== 'none' ) {
            $('.hex1').css("transform", "scale(.5,.5)");
            setTimeout(function () {
                releaseDown();
            }, 150);
        }
    })

    $('.hex1').hover(function() {
        if ( $('.global').css('display') !== 'none' ) {
            $('.hex1').css("transform", "scale(.86,.86)");
        }
    })

    $('.hex1').mouseleave(function(){
        if ( $('.global').css('display') !== 'none' ) {
            $('.hex1').css("transform", "scale(.7,.7)");
        }
    })

    $('.hexpic').click(function(){
        if ( $('.global').css('display') !== 'none' ) {
            $('.hexpic').css("transform", "scale(0.5,0.5)");
            setTimeout(function () {
                releaseDown2();
            }, 150);
        }
    })

    $('.hexpic').hover(function() {
        if ( $('.global').css('display') !== 'none' ){
            $('.hexpic').css("transform", "scale(.86,.86)");
        }
    })

    $('.hexpic').mouseleave(function(){
        if ( $('.global').css('display') !== 'none' ) {
            $('.hexpic').css("transform", "scale(.7,.7)");
        }
    })


    $('.hex2').click(function() {
        if ( $('.global').css('display') == 'none' ){
            // alert("Mobile version");
            $('body').css("height", 30000);
        }
    });

}));
