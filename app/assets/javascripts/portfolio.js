function hideAll(){
    $('.project-panel').hide();
    // fadeOut(1000);
}

function fadeMoreIn(){
    $('.portfolio-panels').stop().fadeTo(500, 1);
}

function show(counter){
    $('#row_'+counter).fadeIn(750);
}

function showAllForMobile(){
    $('.proj1').fadeIn(750);
    $('.proj2').fadeIn(750);
    $('.proj3').fadeIn(750);
    $('.proj4').fadeIn(750);
    $('.proj5').fadeIn(750);
}

function start(){
    $('.toFade').stop().fadeTo(750, 1);
}

function releaseDown(){
    var isDownHovered = $('.arrow-down').is(":hover");
    if (isDownHovered)
        $('.arrow-down').css("transform", "scale(1.15,1.15)");
    else
        $('.arrow-down').css("transform", "scale(1,1)");
    var isUpHovered = $('.arrow-up').is(":hover");
    if (isUpHovered)
        $('.arrow-up').css("transform", "scale(1.15,1.15)");
    else
        $('.arrow-up').css("transform", "scale(1,1)");
}

function releaseUp() {
    $('.arrow-up').fadeIn(500);
}

var project_count = 5;

$(document).ready((function() {

    var screenHeight = window.innerHeight;
    $('.portfolio-panels').css("margin-top", ((screenHeight-300)/2-210));

    fadeMoreIn();

    // setTimeout(function(){ start(); }, 500);

    var counter = 1;
    show(1);

    $('.arrow-up').click(function(){
        hideAll();
        $('.arrow-up').css("transform", "scale(.5,.5)");
        setTimeout(function() {releaseDown(); }, 150);
        counter--;
        if (counter < 1){
            counter = project_count;
        }
        show(counter);
    })

    $('.arrow-down').click(function(){
        hideAll();
        $('.arrow-down').css("transform", "scale(.5,.5)");
        setTimeout(function() {releaseDown(); }, 150);
        counter++;
        if (counter > project_count){
            counter = 1;
        }
        show(counter);
    })

    $('.arrow-down').hover(function() {
        $('.arrow-down').css("transform", "scale(1.15,1.15)");
    })

    $('.arrow-down').mouseleave(function(){
        $('.arrow-down').css("transform", "scale(1,1)");
    })

    $('.arrow-up').hover(function() {
        $('.arrow-up').css("transform", "scale(1.15,1.15)");
    })

    $('.arrow-up').mouseleave(function(){
        $('.arrow-up').css("transform", "scale(1,1)");
    })

    if ( $('.global').css('display') == 'none' ) {
        showAllForMobile();
    }

}));

