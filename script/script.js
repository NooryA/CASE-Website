$("document").ready(function () {


    ///################################################################################# NAV BAR AND DROP DOWNS #############################################################################//



    //////////////////////////////////////////////////////ABOUT US DROP DOWNS //////////////////////////////////////////////////////////////////////////////////////////////////

    $("#about").hover(function () {

        $("#aboutContent").addClass("displayAboutContent");
    }, function () {
        $("#aboutContent").removeClass("displayAboutContent");


    });

    $("#aboutContent").hover(function () {

        $("#aboutContent").addClass("displayAboutContent");
    }, function () {
        $("#aboutContent").removeClass("displayAboutContent");


    });

        //////////////////////////////////////////////////////PROGRAMS DROP DOWNS //////////////////////////////////////////////////////////////////////////////////////////////////


    $("#programs").hover(function () {

        $("#programsDropDown").addClass("displayProgramsDropDown");
    }, function () {
        $("#programsDropDown").removeClass("displayProgramsDropDown");


    });

    $("#programsDropDown").hover(function () {

        $("#programsDropDown").addClass("displayProgramsDropDown");
    }, function () {
        $("#programsDropDown").removeClass("displayProgramsDropDown");


    });

    $("#seniorsConnect").hover(function () {

        $("#seniorsConnectDropDown").addClass("displaySeniorsConnectDropDown");
    }, function () {
        $("#seniorsConnectDropDown").removeClass("displaySeniorsConnectDropDown");


    });

    $("#seniorsConnectDropDown").hover(function () {

        $("#seniorsConnectDropDown").addClass("displaySeniorsConnectDropDown");
    }, function () {
        $("#seniorsConnectDropDown").removeClass("displaySeniorsConnectDropDown");


    });

    

    //################################################################## MAIN BACKGROUND  #################################################################################################//


//////////////////////////////////////////////////////FADING MAIN BACKGROUNDS //////////////////////////////////////////////////////////////////////////////////////////////////






    //################################################################## SECOND BODY #################################################################################################//


///////////////////////////////////////////////////////////// ROW 2 //////////////////////////////////////////////////////////////////////////////////////////////////



    $("#column1").hover(function () {

        $("#descriptionColumn1").stop().animate({
            top: '30%',
            height: '187px',

        });

        $("#descriptionColumn1 p").css({
            "color": "white",
            "display": "block"
        });


    }, function () {
        $("#descriptionColumn1").stop().animate({
            top: '40%',
            height: '100px',

        });
        $("#descriptionColumn1 p").css({
            "display": "none"
        });



    });

    $("#column2").hover(function () {

        $("#descriptionColumn2").stop().animate({
            top: '30%',
            height: '187px',

        });

        $("#descriptionColumn2 p").css({
            "color": "white",
            "display": "block"
        });





    }, function () {
        $("#descriptionColumn2").stop().animate({
            top: '40%',
            height: '100px',

        });
        $("#descriptionColumn2 p").css({
            "display": "none"
        });



    });

    $("#column3").hover(function () {

        $("#descriptionColumn3").stop().animate({
            top: '30%',
            height: '187px',

        });

        $("#descriptionColumn3 p").css({
            "color": "white",
            "display": "block"
        });




    }, function () {
        $("#descriptionColumn3").stop().animate({
            top: '40%',
            height: '100px',

        });
        $("#descriptionColumn3 p").css({
            "display": "none"
        });



    });

    ///////////////////////////////////////////////////////////// ROW 2 //////////////////////////////////////////////////////////////////////////////////////////////////

    $("#row2Column1").hover(function () {

        $("#row2DescriptionColumn1").stop().animate({
            top: '79.5%',
            height: '187px',

        });

        $("#row2DescriptionColumn1 p").css({
            "color": "white",
            "display": "block"
        });


    }, function () {
        $("#row2DescriptionColumn1").stop().animate({
            top: '89.5%',
            height: '100px',

        });
        $("#row2DescriptionColumn1 p").css({
            "display": "none"
        });



    });

    $("#row2Column2").hover(function () {

        $("#row2DescriptionColumn2").stop().animate({
            top: '79.5%',
            height: '187px',

        });

        $("#row2DescriptionColumn2 p").css({
            "color": "white",
            "display": "block"
        });





    }, function () {
        $("#row2DescriptionColumn2").stop().animate({
            top: '89.5%',
            height: '100px',

        });
        $("#row2DescriptionColumn2 p").css({
            "display": "none"
        });



    });

    $("#row2Column3").hover(function () {

        $("#row2DescriptionColumn3").stop().animate({
            top: '79.5%',
            height: '187px',

        });

        $("#row2DescriptionColumn3 p").css({
            "color": "white",
            "display": "block"
        });




    }, function () {
        $("#row2DescriptionColumn3").stop().animate({
            top: '89.5%',
            height: '100px',

        });
        $("#row2DescriptionColumn3 p").css({
            "display": "none"
        });



    });



///################################################################################# MOBILE RESPONSIVE #############################################################################//

    ///////////////////////////////////////////////////////////// NAV BARRESPONSIVE //////////////////////////////////////////////////////////////////////////////////////////////////


$("#mobileDropDown").click(function (){
    if($("#navBar").hasClass("navBar")){
$("#navBar").removeClass("navBar").addClass("navBarMobile");
$("#top-section").addClass("top-section-mobile");
    }
    else {
        $("#navBar").removeClass("navBarMobile").addClass("navBar");
        $("#top-section").removeClass("top-section-mobile");



    }



});



















    // $("#column1").hover(function(){

    // $("#descriptionColumn1").stop().animate({
    //     top:'65%',

    // });

    // $("#descriptionColumn1 p").css({"color": "white"});


    // // $("#descriptionColumn1 p").addClass(".showDescription")


    // }, function(){
    //     $("#descriptionColumn1").stop().animate({
    //         top:'80%',

    //     });
    //     $("#descriptionColumn1 p").css({"color": "rgb(141, 7, 250)"});


    // });





    // $("#column2").hover(function(){

    //     $("#descriptionColumn2").stop().animate({
    //         top:'65%',

    //     });

    //     $("#descriptionColumn2 p").css({"color": "white"});


    //     }, function(){
    //         $("#descriptionColumn2").stop().animate({
    //             top:'80%',

    //         });
    //         $("#descriptionColumn2 p").css({"color": "rgb(0, 151, 252)"});


    //     });

    //     $("#column3").hover(function(){

    //         $("#descriptionColumn3").stop().animate({
    //             top:'65%',

    //         });

    //         $("#descriptionColumn3 p").css({"color": "white"});


    //         }, function(){
    //             $("#descriptionColumn3").stop().animate({
    //                 top:'80%',

    //             });
    //             $("#descriptionColumn3 p").css({"color": "rgb(255, 115, 0)"});


    //         });


});