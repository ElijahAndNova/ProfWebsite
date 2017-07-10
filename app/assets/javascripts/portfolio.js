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

function start(){
    $('.toFade').stop().fadeTo(750, 1);
}

function releaseDown(){
    $('.arrow-down').fadeIn(500);
}

function releaseUp() {
    $('.arrow-up').fadeIn(500);
}

var project_count = 3;

$(document).ready((function() {

    var screenHeight = window.innerHeight;
    $('.portfolio-panels').css("margin-top", ((screenHeight-300)/2-210));

    fadeMoreIn();

    setTimeout(function(){ start(); }, 500);

    var counter = 1;
    show(1);

    $('.arrow-up').click(function(){
        hideAll();
        $('.arrow-up').hide();
        releaseUp();
        counter--;
        if (counter < 1){
            counter = project_count;
        }
        show(counter);
    })

    $('.arrow-down').click(function(){
        hideAll();
        $('.arrow-down').hide();
        releaseDown();        counter++;
        if (counter > project_count){
            counter = 1;
        }
        show(counter);
    })

}));

