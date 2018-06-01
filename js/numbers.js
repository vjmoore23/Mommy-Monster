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
    var sound = new Audio('sounds/Numbers/one.mp3')
    $('#one').on({
        'click': function(){
            if(imgState){
            $('#one').attr('src','images/Numbers/one.png');
            sound.play();
            } else {
            $("#one").attr('src',"images/Numbers/oneMonster.png");    
            }
            imgState = !imgState;
        }
    });   
});

$(document).ready(function(){
    var imgState = true;
    var sound = new Audio('sounds/Numbers/two.mp3')
    $('#two').on({
        'click': function(){
            if(imgState){
            $('#two').attr('src','images/Numbers/two.png');
            sound.play();
            } else {
            $("#two").attr('src',"images/Numbers/twoMonster.png");    
            }
            imgState = !imgState;
        }
    });   
});
$(document).ready(function(){
    var imgState = true;
    var sound = new Audio('sounds/Numbers/three.mp3')
    $('#three').on({
        'click': function(){
            if(imgState){
            $('#three').attr('src','images/Numbers/three.png');
            sound.play();
            } else {
            $("#three").attr('src',"images/Numbers/threeMonster.png");    
            }
            imgState = !imgState;
        }
    });   
});
$(document).ready(function(){
    var imgState = true;
    var sound = new Audio('sounds/Numbers/four.mp3')
    $('#four').on({
        'click': function(){
            if(imgState){
            $('#four').attr('src','images/Numbers/four.png');
            sound.play();
            } else {
            $("#four").attr('src',"images/Numbers/fourMonster.png");    
            }
            imgState = !imgState;
        }
    });   
});
$(document).ready(function(){
    var imgState = true;
    var sound = new Audio('sounds/Numbers/five.mp3')
    $('#five').on({
        'click': function(){
            if(imgState){
            $('#five').attr('src','images/Numbers/five.png');
            sound.play();
            } else {
            $("#five").attr('src',"images/Numbers/fiveMonster.png");    
            }
            imgState = !imgState;
        }
    });   
});
$(document).ready(function(){
    var imgState = true;
    var sound = new Audio('sounds/Numbers/six.mp3')
    $('#six').on({
        'click': function(){
            if(imgState){
            $('#six').attr('src','images/Numbers/six.png');
            sound.play();
            } else {
            $("#six").attr('src',"images/Numbers/sixMonster.png");    
            }
            imgState = !imgState;
        }
    });   
});
$(document).ready(function(){
    var imgState = true;
    var sound = new Audio('sounds/Numbers/seven.mp3')
    $('#seven').on({
        'click': function(){
            if(imgState){
            $('#seven').attr('src','images/Numbers/seven.png');
            sound.play();
            } else {
            $("#seven").attr('src',"images/Numbers/sevenMonster.png");    
            }
            imgState = !imgState;
        }
    });   
});
$(document).ready(function(){
    var imgState = true;
    var sound = new Audio('sounds/Numbers/eight.mp3')
    $('#eight').on({
        'click': function(){
            if(imgState){
            $('#eight').attr('src','images/Numbers/eight.png');
            sound.play();
            } else {
            $("#eight").attr('src',"images/Numbers/eightMonster.png");    
            }
            imgState = !imgState;
        }
    });   
});
$(document).ready(function(){
    var imgState = true;
    var sound = new Audio('sounds/Numbers/nine.mp3')
    $('#nine').on({
        'click': function(){
            if(imgState){
            $('#nine').attr('src','images/Numbers/nine.png');
            sound.play();
            } else {
            $("#nine").attr('src',"images/Numbers/nineMonster.png");    
            }
            imgState = !imgState;
        }
    });   
});
$(document).ready(function(){
    var imgState = true;
    var sound = new Audio('sounds/Numbers/ten.mp3')
    $('#ten').on({
        'click': function(){
            if(imgState){
            $('#ten').attr('src','images/Numbers/ten.png');
            sound.play();
            } else {
            $("#ten").attr('src',"images/Numbers/tenMonster.png");    
            }
            imgState = !imgState;
        }
    });   
});
