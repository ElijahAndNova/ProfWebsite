function hideAll(){
    $('.project-panel').hide();
    // fadeOut(1000);
}

function show(counter){
    $('#row_'+counter).fadeIn(750);
}

function start(){
    $('.toFade').stop().fadeTo(750, 1);
}

var project_count = 3;

$(document).ready((function() {

    start();

    var counter = 1;
    show(1);

    $('.arrow-up').click(function(){
        hideAll();
        counter--;
        if (counter < 1){
            counter = project_count;
        }
        show(counter);
    })

    $('.arrow-down').click(function(){
        hideAll();
        counter++;
        if (counter > project_count){
            counter = 1;
        }
        show(counter);
    })

}));

