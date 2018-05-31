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
    var sound = new Audio('sounds/Colors/red.mp3')
    $('#red').on({
        'click': function(){
            if(imgState){
            $('#red').attr('src','images/Colors/red.png');
            sound.play();
            } else {
            $("#red").attr('src',"images/Colors/redMonster.png");    
            }
            imgState = !imgState;
        }
    });   
});
$(document).ready(function(){
    var imgState = true;
    var sound = new Audio('sounds/Colors/orange.mp3')
    $('#orange').on({
        'click': function(){
            if(imgState){
            $('#orange').attr('src','images/Colors/orange.png');
            sound.play();
            } else {
            $("#orange").attr('src',"images/Colors/orangeMonster.png");    
            }
            imgState = !imgState;
        }
    });   
});
$(document).ready(function(){
    var imgState = true;
    var sound = new Audio('sounds/Colors/yellow.mp3')
    $('#yellow').on({
        'click': function(){
            if(imgState){
            $('#yellow').attr('src','images/Colors/yellow.png');
            sound.play();
            } else {
            $("#yellow").attr('src',"images/Colors/yellowMonster.png");    
            }
            imgState = !imgState;
        }
    });   
});

$(document).ready(function(){
    var imgState = true;
    var sound = new Audio('sounds/Colors/green.mp3')
    $('#green').on({
        'click': function(){
            if(imgState){
            $('#green').attr('src','images/Colors/green.png');
            sound.play();
            } else {
            $("#green").attr('src',"images/Colors/greenMonster.png");    
            }
            imgState = !imgState;
        }
    });   
});
$(document).ready(function(){
    var imgState = true;
    var sound = new Audio('sounds/Colors/blue.mp3')
    $('#blue').on({
        'click': function(){
            if(imgState){
            $('#blue').attr('src','images/Colors/blue.png');
            sound.play();
            } else {
            $("#blue").attr('src',"images/Colors/blueMonster.png");    
            }
            imgState = !imgState;
        }
    });   
});
$(document).ready(function(){
    var imgState = true;
    var sound = new Audio('sounds/Colors/purple.mp3')
    $('#purple').on({
        'click': function(){
            if(imgState){
            $('#purple').attr('src','images/Colors/purple.png');
            sound.play();
            } else {
            $("#purple").attr('src',"images/Colors/purpleMonster.png");    
            }
            imgState = !imgState;
        }
    });   
});
