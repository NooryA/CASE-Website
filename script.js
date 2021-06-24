$("document").ready(function(){

$("#about").hover(function(){

$("#aboutContent").addClass("displayAboutContent");
}, function(){
$("#aboutContent").removeClass("displayAboutContent");


});

$("#aboutContent").hover(function(){

    $("#aboutContent").addClass("displayAboutContent");
    }, function(){
    $("#aboutContent").removeClass("displayAboutContent");
    
    
    });



$("#column1").hover(function(){

$("#descriptionColumn1").stop().animate({
    top:'65%',

});

$("#descriptionColumn1 p").css({"color": "white"});


// $("#descriptionColumn1 p").addClass(".showDescription")


}, function(){
    $("#descriptionColumn1").stop().animate({
        top:'80%',
    
    });
    $("#descriptionColumn1 p").css({"color": "rgb(141, 7, 250)"});


});





$("#column2").hover(function(){

    $("#descriptionColumn2").stop().animate({
        top:'65%',
    
    });
    
    $("#descriptionColumn2 p").css({"color": "white"});
    
    
    }, function(){
        $("#descriptionColumn2").stop().animate({
            top:'80%',
        
        });
        $("#descriptionColumn2 p").css({"color": "rgb(0, 151, 252)"});
    
    
    });

    $("#column3").hover(function(){

        $("#descriptionColumn3").stop().animate({
            top:'65%',
        
        });
        
        $("#descriptionColumn3 p").css({"color": "white"});
        
        
        }, function(){
            $("#descriptionColumn3").stop().animate({
                top:'80%',
            
            });
            $("#descriptionColumn3 p").css({"color": "rgb(255, 115, 0)"});
        
        
        });


});



