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
});







$(document).ready(function(){
    var sound = new Audio('sounds/Letters/header.mp3');
    $('#header').mouseover(function(){
        sound.play();
    });
    $('#header').mouseout(function(){
        sound.pause();
        sound.currentTime = 0;
    })
});

$(document).ready(function(){
    var imgState = true;
    var sound = new Audio('sounds/Shapes/square.mp3')
    $('#square').on({
        'click': function(){
            if(imgState){
            $('#square').attr('src','images/Shapes/clock.png');
            sound.play();
            } else {
            $("#square").attr('src',"images/Shapes/squareMonster.png");    
            }
            imgState = !imgState;
        }
    });   
});

$(document).ready(function(){
    var imgState = true;
    var sound = new Audio('sounds/Shapes/circle.mp3')
    $('#circle').on({
        'click': function(){
            if(imgState){
            $('#circle').attr('src','images/Shapes/basketball.png');
            sound.play();
            } else {
            $("#circle").attr('src',"images/Shapes/circleMonster.png");    
            }
            imgState = !imgState;
        }
    });   
});

$(document).ready(function(){
    var imgState = true;
    var sound = new Audio('sounds/Shapes/triangle.mp3')
    $('#triangle').on({
        'click': function(){
            if(imgState){
            $('#triangle').attr('src','images/Shapes/watermelon.png');
            sound.play();
            } else {
            $("#triangle").attr('src',"images/Shapes/triangleMonster.png");    
            }
            imgState = !imgState;
        }
    });   
});

$(document).ready(function(){
    var imgState = true;
    var sound = new Audio('sounds/Shapes/rectangle.mp3')
    $('#rectangle').on({
        'click': function(){
            if(imgState){
            $('#rectangle').attr('src','images/Shapes/tv.png');
            sound.play();
            } else {
            $("#rectangle").attr('src',"images/Shapes/rectangleMonster.png");    
            }
            imgState = !imgState;
        }
    });   
});
