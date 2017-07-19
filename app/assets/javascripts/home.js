$(document).ready((function() {

    if(document.URL.indexOf("#")==-1){
        // Set the URL to whatever it was plus "#".
        url = document.URL+"#";
        location = "#";

        //Reload the page
        location.reload(true);
    }

    var picture_count = 13;

    var screenHeight = window.innerHeight;

    $('.pics').css("margin-top", ((screenHeight - 300) / 2 - 210));

    $('.ultimate').fadeIn(500);

    var counter = 2;

    function slideToTheRight(){
        $('.panel-custom1').css("transform", "scale(.5,.5)");
        // setTimeout(function() {hideAllOnHome();}, 1000);
        // $('.panel-on-deck').animate({ left: "300px" }, 500, "linear", hide1());
        // $('.panel-custom1').animate({ left: "500px" }, 500, "linear", hide2());
        // setTimeout(function() {hideAllOnHome();}, 250);
    }

    function hide1(){
        $('.panel-on-deck').hide();
    }

    function hide2(){
        $('.picture-panel').hide();
    }


    function hideAllOnHome(){
        $('.panel-on-deck').hide();
        $('.picture-panel').hide();
        $('.panel-just-batted').hide();
    }

    function showHome(counter){
        $('.panel-custom1').css("transform", "scale(1.15,1.15)");
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
            $('.panel-on-deck').css("width", "350");
            $('.panel-on-deck').css("height", "460");
            $('.panel-on-deck').css("margin-top", "-90px");
            $('.panel-on-deck').css("margin-left", "65px");
            $('.panel-custom1').css("width", "342");
            $('.panel-custom1').css("height", "342")
            $('.panel-custom1').css("margin-top", "-60px");
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
        else if (counter == 7){
            $('.panel-on-deck').css("width", "360");
            $('.panel-on-deck').css("height", "270");
            $('.panel-on-deck').css("margin-top", "-10px");
            $('.panel-on-deck').css("margin-left", "50px");
            $('.panel-custom1').css("width", "350");
            $('.panel-custom1').css("height", "350");
            $('.panel-custom1').css("margin-left", "-20px");
            $('.panel-custom1').css("margin-top", "50px");
            $('.panel-just-batted').css("width", "342");
            $('.panel-just-batted').css("height", "500");
            // $('.panel-just-batted').css("margin-left", "0px");
            $('.panel-just-batted').css("margin-top", "-80px");
        }
        else if (counter == 8){
            $('.panel-on-deck').css("width", "360");
            $('.panel-on-deck').css("height", "365");
            $('.panel-on-deck').css("margin-top", "-30px");
            $('.panel-on-deck').css("margin-left", "50px");
            $('.panel-custom1').css("width", "250");
            $('.panel-custom1').css("height", "370");
            $('.panel-custom1').css("margin-left", "20px");
            $('.panel-custom1').css("margin-top", "-35px");
            $('.panel-just-batted').css("width", "342");
            $('.panel-just-batted').css("height", "465");
            $('.panel-just-batted').css("margin-left", "-40px");
            $('.panel-just-batted').css("margin-top", "-50px");
        }
        else if (counter == 9){
            $('.panel-on-deck').css("width", "360");
            $('.panel-on-deck').css("height", "525");
            $('.panel-on-deck').css("margin-top", "-100px");
            $('.panel-on-deck').css("margin-left", "50px");
            $('.panel-custom1').css("width", "260");
            $('.panel-custom1').css("height", "355");
            $('.panel-custom1').css("margin-left", "20px");
            $('.panel-custom1').css("margin-top", "-120px");
            $('.panel-just-batted').css("width", "342");
            $('.panel-just-batted').css("height", "370");
            $('.panel-just-batted').css("margin-left", "-40px");
            $('.panel-just-batted').css("margin-top", "10px");
        }
        else if (counter == 10){
            $('.panel-on-deck').css("width", "360");
            $('.panel-on-deck').css("height", "485");
            $('.panel-on-deck').css("margin-top", "-70px");
            $('.panel-on-deck').css("margin-left", "30px");
            $('.panel-custom1').css("width", "330");
            $('.panel-custom1').css("height", "355");
            $('.panel-custom1').css("margin-left", "-20px");
            $('.panel-custom1').css("margin-top", "-110px");
            $('.panel-just-batted').css("width", "342");
            $('.panel-just-batted').css("height", "245");
            $('.panel-just-batted').css("margin-left", "-40px");
            $('.panel-just-batted').css("margin-top", "50px");
        }
        else if (counter == 11){
            $('.panel-on-deck').css("width", "420");
            $('.panel-on-deck').css("height", "450");
            $('.panel-on-deck').css("margin-top", "-70px");
            $('.panel-on-deck').css("margin-left", "-30px");
            $('.panel-custom1').css("width", "500");
            $('.panel-custom1').css("height", "335");
            $('.panel-custom1').css("margin-left", "-60px");
            $('.panel-custom1').css("margin-top", "-60px");
            $('.panel-just-batted').css("width", "342");
            $('.panel-just-batted').css("height", "310");
            $('.panel-just-batted').css("margin-left", "75px");
            $('.panel-just-batted').css("margin-top", "22px");
        }
        else if (counter == 12){
            $('.panel-on-deck').css("width", "420");
            $('.panel-on-deck').css("height", "300");
            $('.panel-custom1').css("width", "400");
            $('.panel-custom1').css("height", "365");
            $('.panel-custom1').css("margin-left", "-30px");
            $('.panel-just-batted').css("width", "342");
            $('.panel-just-batted').css("height", "450");
            // $('.panel-just-batted').css("margin-left", "-70px");
            $('.panel-just-batted').css("margin-top", "-42px");
        }
        else if (counter == 13){
            $('.panel-on-deck').css("width", "420");
            $('.panel-on-deck').css("height", "375");
            $('.panel-custom1').css("width", "275");
            $('.panel-custom1').css("height", "360");
            $('.panel-custom1').css("margin-top", "-60px");
            $('.panel-just-batted').css("width", "342");
            $('.panel-just-batted').css("height", "342");
            $('.panel-just-batted').css("margin-left", "-70px");
            $('.panel-just-batted').css("margin-top", "42px");
        }
    }

    function cycle(counter){
        hideAllOnHome();
        // slideToTheRight();
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