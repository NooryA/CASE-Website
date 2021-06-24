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


}, function(){
    $("#descriptionColumn1").stop().animate({
        top:'80%',
    
    });
    $("#descriptionColumn1 p").css({"color": "black"});


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
        $("#descriptionColumn2 p").css({"color": "black"});
    
    
    });



});



