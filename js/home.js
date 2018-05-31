$(document).ready(function(){
    var home = new Audio('sounds/home.mp3');
    var abc = new Audio('sounds/abc.mp3');
    var shapes = new Audio('sounds/shapes.mp3');
    var colors = new Audio('sounds/colors.mp3');
    var numbers = new Audio('sounds/numbers.mp3');
    var javascript = new Audio('sounds/javascript.mp3');
    var contact = new Audio('sounds/contact.mp3');

    $("#logo").fadeIn(3000);

    $('#home').mouseover(function(){
        home.play();
    });
    $('#home').mouseout(function(){
        home.pause();
        home.currentTime = 0;
    });
    $('#abc').mouseover(function(){
        abc.play();
    });
    $('#abc').mouseout(function(){
        abc.pause();
        abc.currentTime = 0;
    });
    $('#shapes').mouseover(function(){
        shapes.play();
    });
    $('#shapes').mouseout(function(){
        shapes.pause();
        shapes.currentTime = 0;
    });
    $('#colors').mouseover(function(){
        colors.play();
    });
    $('#colors').mouseout(function(){
        colors.pause();
        colors.currentTime = 0;
    });
    $('#numbers').mouseover(function(){
        numbers.play();
    });
    $('#numbers').mouseout(function(){
        numbers.pause();
        numbers.currentTime = 0;
    });
    $('#javascript').mouseover(function(){
        javascript.play();
    });
    $('#javascript').mouseout(function(){
        javascript.pause();
        javascript.currentTime = 0;
    });
    $('#contact').mouseover(function(){
        contact.play();
    });
    $('#contact').mouseout(function(){
        contact.pause();
        contact.currentTime = 0;
    });

    var content = new Audio('sounds/index/content.mp3');
   

    $('#indexContent').mouseover(function(){
        content.play();
    });
    $('#indexContent').mouseout(function(){
        content.pause();
        content.currentTime = 0;
    });
    
   
     
});

