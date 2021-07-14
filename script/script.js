$("document").ready(function () {


    ///################################################################################# NAV BAR AND DROP DOWNS #############################################################################//



    //////////////////////////////////////////////////////ABOUT US DROP DOWNS //////////////////////////////////////////////////////////////////////////////////////////////////

    var desktopWindow = window.matchMedia("(min-width: 1068px)");

    function windowSizeHover(desktopWindow) {

        if (desktopWindow.matches) {
            console.log("desktop");
            $("#about").hover(function () {

                $("#aboutContent").addClass("displayAboutContent");
            }, function () {
                $("#aboutContent").removeClass("displayAboutContent");


            });

            $("#programs").hover(function () {

                $("#programsDropDown").addClass("displayProgramsDropDown");
            }, function () {
                $("#programsDropDown").removeClass("displayProgramsDropDown");


            });

            $("#newsAndEvents").hover(function () {

                $("#newsAndEventsDropDown").addClass("displayNewsAndEventsDropDown");
            }, function () {
                $("#newsAndEventsDropDown").removeClass("displayNewsAndEventsDropDown");


            });

            $("#contactUs").hover(function () {

                $("#contactUsDropDown").addClass("displayContactUsDropDown");
            }, function () {
                $("#contactUsDropDown").removeClass("displayContactUsDropDown");


            });


        } else {
            console.log("mobile");
            $("#about").hover(function () {

                $("#aboutContent").removeClass("displayAboutContent");
            }, function () {
                $("#aboutContent").removeClass("displayAboutContent");
            });

            $("#programs").hover(function () {

                $("#programsDropDown").removeClass("displayProgramsDropDown");
            }, function () {
                $("#programsDropDown").removeClass("displayProgramsDropDown");


            });

            $("#newsAndEvents").hover(function () {

                $("#newsAndEventsDropDown").removeClass("displayNewsAndEventsDropDown");
            }, function () {
                $("#newsAndEventsDropDown").removeClass("displayNewsAndEventsDropDown");


            });


            $("#contactUs").hover(function () {

                $("#contactUsDropDown").removeClass("displayContactUsDropDown");
            }, function () {
                $("#contactUsDropDown").removeClass("displayContactUsDropDown");


            });

        }

    }
    windowSizeHover(desktopWindow);
    desktopWindow.addListener(windowSizeHover);

    $("#aboutContent").hover(function () {

        $("#aboutContent").addClass("displayAboutContent");
    }, function () {
        $("#aboutContent").removeClass("displayAboutContent");


    });

    //////////////////////////////////////////////////////PROGRAMS DROP DOWNS //////////////////////////////////////////////////////////////////////////////////////////////////


    // $("#programs").hover(function () {

    //     $("#programsDropDown").addClass("displayProgramsDropDown");
    // }, function () {
    //     $("#programsDropDown").removeClass("displayProgramsDropDown");


    // });

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

    $("#youthPrograms").hover(function () {

        $("#youthProgramsDropDown").addClass("displayYouthProgramsDropDown");
    }, function () {
        $("#youthProgramsDropDown").removeClass("displayYouthProgramsDropDown");


    });

    $("#youthProgramsDropDown").hover(function () {

        $("#youthProgramsDropDown").addClass("displayYouthProgramsDropDown");
    }, function () {
        $("#youthProgramsDropDown").removeClass("displayYouthProgramsDropDown");


    });

    $("#workplace").hover(function () {

        $("#workplaceExperienceDropDown").addClass("displayWorkPlaceDropDown");
    }, function () {
        $("#workplaceExperienceDropDown").removeClass("displayWorkPlaceDropDown");


    });

    $("#workplaceExperienceDropDown").hover(function () {

        $("#workplaceExperienceDropDown").addClass("displayWorkPlaceDropDown");
    }, function () {
        $("#workplaceExperienceDropDown").removeClass("displayWorkPlaceDropDown");


    });

    $("#singleParents").hover(function () {

        $("#singleParentsDropDown").addClass("displaySingleParentsDropDown");
    }, function () {
        $("#singleParentsDropDown").removeClass("displaySingleParentsDropDown");


    });

    $("#singleParentsDropDown").hover(function () {

        $("#singleParentsDropDown").addClass("displaySingleParentsDropDown");
    }, function () {
        $("#singleParentsDropDown").removeClass("displaySingleParentsDropDown");


    });


    //////////////////////////////////////////////////////NEWSLETTER AND EVENTS DROP DOWNS //////////////////////////////////////////////////////////////////////////////////////////////////



    $("#newsAndEventsDropDown").hover(function () {

        $("#newsAndEventsDropDown").addClass("displayNewsAndEventsDropDown");
    }, function () {
        $("#newsAndEventsDropDown").removeClass("displayNewsAndEventsDropDown");


    });

    $("#communityResources").hover(function () {

        $("#communityResourcesDropDown").addClass("displayCommunityResourcesDropDown");
    }, function () {
        $("#communityResourcesDropDown").removeClass("displayCommunityResourcesDropDown");


    });

    $("#communityResourcesDropDown").hover(function () {

        $("#communityResourcesDropDown").addClass("displayCommunityResourcesDropDown");
    }, function () {
        $("#communityResourcesDropDown").removeClass("displayCommunityResourcesDropDown");


    });




    //////////////////////////////////////////////////////CONTACT US DROP DOWNS //////////////////////////////////////////////////////////////////////////////////////////////////



    $("#contactUsDropDown").hover(function () {

        $("#contactUsDropDown").addClass("displayContactUsDropDown");
    }, function () {
        $("#contactUsDropDown").removeClass("displayContactUsDropDown");


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


    $("#mobileDropDown").click(function () {

        // $("#aboutList").removeClass("toggleDropDown");
        // if($("#aboutContent").hasClass("displayAboutContentMobile")){
        // $("#aboutContent").removeClass("displayAboutContentMobile");
        // }




        if ($("#navBar").hasClass("navBar")) {
            $("#navBar").removeClass("navBar").addClass("navBarMobile");
            $("#top-section").addClass("top-section-mobile");
        } else {
            $("#navBar").removeClass("navBarMobile").addClass("navBar");
            $("#top-section").removeClass("top-section-mobile");



        }

        $("#aboutList").removeClass("toggleDropDown");
        if ($("#aboutContent").hasClass("displayAboutContentMobile")) {
            $("#aboutContent").removeClass("displayAboutContentMobile");
        }

        $("#programsList").removeClass("toggleDropDown");
        if ($("#programsDropDown").hasClass("displayProgramsDropDownMobile")) {
            $("#programsDropDown").removeClass("displayProgramsDropDownMobile");
        }

        $("#newsList").removeClass("toggleDropDown");
        if ($("#newsAndEventsDropDown").hasClass("displayNewsAndEventsDropDownMobile")) {
            $("#newsAndEventsDropDown").removeClass("displayNewsAndEventsDropDownMobile");
        }

        $("#contactList").removeClass("toggleDropDown");
        if ($("#contactUsDropDown").hasClass("displayContactUsDropDownMobile")) {
            $("#contactUsDropDown").removeClass("displayContactUsDropDownMobile");
        }

        $("#minAndMaxAbout").html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +");
        $("#minAndMaxPrograms").html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +");
        $("#minAndMaxNews").html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +");
        $("#minAndMaxContact").html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +");

    });

    // var mobileWindow= window.matchMedia("(max-width: 1067px)");


    //     $("#aboutContent").hover(function () {

    //         $("#aboutContent").removeClass("displayAboutContent");
    //     }, function () {
    //         $("#aboutContent").removeClass("displayAboutContent");


    //     });



//##################################################################################### MAIN MINIMIZING AND MAXIMIZING FOR MOBILE ###########################################################################

    $("#minAndMaxAbout").click(function () {




        if (!($("#aboutContent").hasClass("displayAboutContentMobile"))) {

            $("#aboutList").toggleClass("toggleDropDown");
            $("#aboutContent").toggleClass("displayAboutContentMobile");

            // $("#programsDropDown").css({
            //     "top":"30%",


            //  });

            //  $("#newsAndEventsDropDown").css({
            //     "top":"58%",


            //  });
            $("#minAndMaxAbout").html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>--<b>");
            $("#minAndMaxPrograms").html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +");
            $("#minAndMaxNews").html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +");
            $("#minAndMaxContact").html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +");

        } else {
            // $("#programsDropDown").css({
            //     "top":"17%",



            //  });

            //  $("#newsAndEventsDropDown").css({
            //     "top":"45%",
            $("#minAndMaxAbout").html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +");

            //  });
            $("#aboutList").removeClass("toggleDropDown");
            $("#aboutContent").removeClass("displayAboutContentMobile");
        }
        $("#programsList").removeClass("toggleDropDown");

        $("#programsDropDown").removeClass("displayProgramsDropDownMobile");

        $("#newsList").removeClass("toggleDropDown");
        $("#newsAndEventsDropDown").removeClass("displayNewsAndEventsDropDownMobile");

        $("#contactList").removeClass("toggleDropDown");
        $("#contactUsDropDown").removeClass("displayContactUsDropDownMobile");


    });

    $("#minAndMaxPrograms").click(function () {
        if (!($("#programsDropDown").hasClass("displayProgramsDropDownMobile"))) {

            $("#programsList").toggleClass("toggleDropDown");
            $("#programsDropDown").toggleClass("displayProgramsDropDownMobile");

            // $("#newsAndEventsDropDown").css({
            //     "top":"45%",

            $("#minAndMaxPrograms").html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>--<b>");
            $("#minAndMaxAbout").html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +");
            $("#minAndMaxNews").html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +");
            $("#minAndMaxContact").html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +");
            //  });
        } else {
            // $("#newsAndEventsDropDown").css({
            //     "top":"23%",

            $("#minAndMaxPrograms").html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +");
            //  });
            $("#programsList").removeClass("toggleDropDown");
            $("#programsDropDown").removeClass("displayProgramsDropDownMobile");

            $("#programsList").removeClass("subToggleDropDown");
            $("#seniorsConnect").removeClass("subToggleDropDownPadding");
            $("#seniorsConnectDropDown").removeClass("displaySeniorsConnectDropDownMobile");

        }

        $("#aboutList").removeClass("toggleDropDown");
        $("#aboutContent").removeClass("displayAboutContentMobile");

        $("#newsList").removeClass("toggleDropDown");
        $("#newsAndEventsDropDown").removeClass("displayNewsAndEventsDropDownMobile");

        $("#contactList").removeClass("toggleDropDown");
        $("#contactUsDropDown").removeClass("displayContactUsDropDownMobile");


        // $("#seniorsConnectDropDown").removeClass("displaySeniorsConnectDropDownMobile");

        // if(("#seniorsConnectDropDown").hasClass("displaySeniorsConnectDropDownMobile")){
        //     $("#programsList").toggleClass("subToggleDropDownRemove");

        // }

    });






    $("#minAndMaxNews").click(function () {
        if (!($("#newsAndEventsDropDown").hasClass("displayNewsAndEventsDropDownMobile"))) {

            $("#newsList").toggleClass("toggleDropDown");
            $("#newsAndEventsDropDown").toggleClass("displayNewsAndEventsDropDownMobile");

            $("#minAndMaxNews").html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>--<b>");
            $("#minAndMaxAbout").html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +");
            $("#minAndMaxPrograms").html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +");
            $("#minAndMaxContact").html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +");
        } else {
            $("#newsList").removeClass("toggleDropDown");
            $("#newsAndEventsDropDown").removeClass("displayNewsAndEventsDropDownMobile");
            $("#minAndMaxNews").html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +");
        }

        $("#aboutList").removeClass("toggleDropDown");
        $("#aboutContent").removeClass("displayAboutContentMobile");
        $("#programsList").removeClass("toggleDropDown");

        $("#programsDropDown").removeClass("displayProgramsDropDownMobile");
        $("#contactList").removeClass("toggleDropDown");
        $("#contactUsDropDown").removeClass("displayContactUsDropDownMobile");


    });


    $("#minAndMaxContact").click(function () {
        if (!($("#contactUsDropDown").hasClass("displayContactUsDropDownMobile"))) {

            $("#contactList").toggleClass("toggleDropDown");
            $("#contactUsDropDown").toggleClass("displayContactUsDropDownMobile");

            $("#minAndMaxContact").html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>--<b>");
            $("#minAndMaxAbout").html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +");
            $("#minAndMaxNews").html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +");
            $("#minAndMaxPrograms").html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +");
        } else {
            $("#contactList").removeClass("toggleDropDown");
            $("#contactUsDropDown").removeClass("displayContactUsDropDownMobile");
            $("#minAndMaxContact").html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; +");
        }


        $("#aboutList").removeClass("toggleDropDown");
        $("#aboutContent").removeClass("displayAboutContentMobile");
        $("#programsList").removeClass("toggleDropDown");

        $("#programsDropDown").removeClass("displayProgramsDropDownMobile");
        $("#newsList").removeClass("toggleDropDown");
        $("#newsAndEventsDropDown").removeClass("displayNewsAndEventsDropDownMobile");
    });





//##################################################################################### SUB MINIMIZING AND MAXIMIZING FOR MOBILE ###########################################################################


$("#minAndMaxSeniorsConnectMobile").click(function(){
console.log('clicked');

$("#programsList").toggleClass("subToggleDropDown")


$("#seniorsConnect").toggleClass("subToggleDropDownPadding");
$("#seniorsConnectDropDown").toggleClass("displaySeniorsConnectDropDownMobile");
// $("#seniorsConnect").css({
//     "padding-bottom":"100px",
// });



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