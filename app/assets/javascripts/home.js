$(document).ready((function() {

    // if(document.URL.indexOf("#")==-1){
    //     // Set the URL to whatever it was plus "#".
    //     url = document.URL+"#";
    //     location = "#";
    //
    //     //Reload the page
    //     location.reload(true);
    // }

    var picture_count = 6;

    var screenHeight = window.innerHeight;

    $('.pics').css("margin-top", ((screenHeight - 300) / 2 - 210));

    $('.ultimate').fadeIn(500);

    var counter = 2;

    function hideAllOnHome(){
        $('.panel-on-deck').hide();
        $('.picture-panel').hide();
        $('.panel-just-batted').hide();
    }

    function showHome(counter){
        $('#num1_'+counter).fadeTo(1000, .1);
        $('#num2_'+counter).fadeTo(1000, 1);
        $('#num3_'+counter).fadeTo(1000, .1);
    }

    function resetMargins(){
        $('.panel-on-deck').css("margin-top", "0px");
        $('.panel-on-deck').css("margin-bottom", "0px");
        $('.panel-on-deck').css("margin-left", "0px");
        $('.panel-on-deck').css("margin-right", "0px");
        $('.panel-custom1').css("margin-top", "0px");
        $('.panel-custom1').css("margin-bottom", "0px");
        $('.panel-custom1').css("margin-left", "0px");
        $('.panel-custom1').css("margin-right", "0px");
        $('.panel-just-batted').css("margin-top", "0px");
        $('.panel-just-batted').css("margin-bottom", "0px");
        $('.panel-just-batted').css("margin-left", "0px");
        $('.panel-just-batted').css("margin-right", "0px")
    }

    function resizePanels(counter){
        resetMargins();
        if (counter == 1){
            $('.panel-on-deck').css("width", "420");
            $('.panel-on-deck').css("height", "314");
            $('.panel-custom1').css("width", "342");
            $('.panel-custom1').css("height", "342");
            $('.panel-just-batted').css("width", "291");
            $('.panel-just-batted').css("height", "381");
        }
        else if (counter == 2){
            $('.panel-on-deck').css("width", "342");
            $('.panel-on-deck').css("height", "342");
            $('.panel-on-deck').css("margin-left", "90px");
            $('.panel-custom1').css("width", "291");
            $('.panel-custom1').css("height", "381");
            $('.panel-custom1').css("margin-top", "-40px");
            $('.panel-custom1').css("margin-left", "25px");
            $('.panel-just-batted').css("width", "420");
            $('.panel-just-batted').css("height", "335");
            $('.panel-just-batted').css("margin-left", "-40px");
        }
        else if (counter == 3){
            $('.panel-on-deck').css("width", "291");
            $('.panel-on-deck').css("height", "381");
            $('.panel-on-deck').css("margin-left", "90px");
            $('.panel-on-deck').css("margin-top", "-25px");
            $('.panel-custom1').css("width", "420");
            $('.panel-custom1').css("height", "335");
            $('.panel-custom1').css("margin-left", "-40px");
            $('.panel-custom1').css("margin-top", "-25px");
            $('.panel-just-batted').css("width", "420");
            $('.panel-just-batted').css("height", "320");
            $('.panel-just-batted').css("margin-top", "20px");
        }
        else if (counter == 4){
            $('.panel-on-deck').css("width", "420");
            $('.panel-on-deck').css("height", "335");
            $('.panel-custom1').css("width", "420");
            $('.panel-custom1').css("height", "320");
            $('.panel-custom1').css("margin-left", "-20px");
            $('.panel-just-batted').css("width", "420");
            $('.panel-just-batted').css("height", "310");
            $('.panel-just-batted').css("margin-top", "55px");
            $('.panel-just-batted').css("margin-left", "35px");
        }
        else if (counter == 5){
            $('.panel-on-deck').css("width", "420");
            $('.panel-on-deck').css("height", "320");
            $('.panel-on-deck').css("margin-top", "-10px");
            $('.panel-custom1').css("width", "420");
            $('.panel-custom1').css("height", "310");
            $('.panel-custom1').css("margin-left", "-20px");
            $('.panel-custom1').css("margin-top", "20px");
            $('.panel-just-batted').css("width", "420");
            $('.panel-just-batted').css("height", "310");
            $('.panel-just-batted').css("margin-top", "55px");
            $('.panel-just-batted').css("margin-left", "30px");
        }
        else if (counter == 6){
            $('.panel-on-deck').css("width", "420");
            $('.panel-on-deck').css("height", "310");
            $('.panel-custom1').css("width", "420");
            $('.panel-custom1').css("height", "310");
            $('.panel-custom1').css("margin-left", "-20px");
            $('.panel-custom1').css("margin-top", "15px");
            $('.panel-just-batted').css("width", "342");
            $('.panel-just-batted').css("height", "342");
            $('.panel-just-batted').css("margin-left", "25px");
            $('.panel-just-batted').css("margin-top", "42px");
        }
    }

    function cycle(counter){
        hideAllOnHome();
        counter--;
        if (counter < 1){
            counter = picture_count;
        }
        resizePanels(counter);
        showHome(counter);
        setTimeout(function() {cycle(counter);}, 3000);
    }

    hideAllOnHome();
    showHome(1);
    cycle(counter);

}));