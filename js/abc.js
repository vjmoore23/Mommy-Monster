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
    var sound = new Audio('sounds/Letters/a.mp3')
    $('#imgA').on({
        'click': function(){
            if(imgState){
            $('#imgA').attr('src','images/Letters/Apple.png');
            sound.play();
            } else {
            $("#imgA").attr('src',"images/Letters/A.png");    
            }
            imgState = !imgState;
        }
    });   
});

$(document).ready(function(){
    var imgState = true;
    var sound = new Audio('sounds/Letters/b.mp3')
    $('#imgB').on({
        'click': function(){
            if(imgState){
            $('#imgB').attr('src','images/Letters/Bee.png');
            sound.play();
            } else {
            $("#imgB").attr('src',"images/Letters/B.png");    
            }
            imgState = !imgState;
        }
    });   
});

$(document).ready(function(){
    var imgState = true;
    var sound = new Audio('sounds/Letters/c.mp3')
    $('#imgC').on({
        'click': function(){
            if(imgState){
            $('#imgC').attr('src','images/Letters/Car.png');
            sound.play();
            } else {
            $("#imgC").attr('src',"images/Letters/C.png");    
            }
            imgState = !imgState;
        }
    });   
});

$(document).ready(function(){
    var imgState = true;
    var sound = new Audio('sounds/Letters/d.mp3')
    $('#imgD').on({
        'click': function(){
            if(imgState){
            $('#imgD').attr('src','images/Letters/Dog.png');
            sound.play();
            } else {
            $("#imgD").attr('src',"images/Letters/D.png");    
            }
            imgState = !imgState;
        }
    });   
});

$(document).ready(function(){
    var imgState = true;
    var sound = new Audio('sounds/Letters/e.mp3')
    $('#imgE').on({
        'click': function(){
            if(imgState){
            $('#imgE').attr('src','images/Letters/Ear.png');
            sound.play();
            } else {
            $("#imgE").attr('src',"images/Letters/E.png");    
            }
            imgState = !imgState;
        }
    });   
});

$(document).ready(function(){
    var imgState = true;
    var sound = new Audio('sounds/Letters/f.mp3')
    $('#imgF').on({
        'click': function(){
            if(imgState){
            $('#imgF').attr('src','images/Letters/Fox.png');
            sound.play();
            } else {
            $("#imgF").attr('src',"images/Letters/F.png");    
            }
            imgState = !imgState;
        }
    });   
});

$(document).ready(function(){
    var imgState = true;
    var sound = new Audio('sounds/Letters/g.mp3')
    $('#imgG').on({
        'click': function(){
            if(imgState){
            $('#imgG').attr('src','images/Letters/Goat.png');
            sound.play();
            } else {
            $("#imgG").attr('src',"images/Letters/G.png");    
            }
            imgState = !imgState;
        }
    });   
});

$(document).ready(function(){
    var imgState = true;
    var sound = new Audio('sounds/Letters/h.mp3')
    $('#imgH').on({
        'click': function(){
            if(imgState){
            $('#imgH').attr('src','images/Letters/Horse.png');
            sound.play();
            } else {
            $("#imgH").attr('src',"images/Letters/H.png");    
            }
            imgState = !imgState;
        }
    });   
});

$(document).ready(function(){
    var imgState = true;
    var sound = new Audio('sounds/Letters/i.mp3')
    $('#imgI').on({
        'click': function(){
            if(imgState){
            $('#imgI').attr('src','images/Letters/IceCream.png');
            sound.play();
            } else {
            $("#imgI").attr('src',"images/Letters/I.png");    
            }
            imgState = !imgState;
        }
    });   
});

$(document).ready(function(){
    var imgState = true;
    var sound = new Audio('sounds/Letters/j.mp3')
    $('#imgJ').on({
        'click': function(){
            if(imgState){
            $('#imgJ').attr('src','images/Letters/Jacket.png');
            sound.play();
            } else {
            $("#imgJ").attr('src',"images/Letters/J.png");    
            }
            imgState = !imgState;
        }
    });   
});

$(document).ready(function(){
    var imgState = true;
    var sound = new Audio('sounds/Letters/k.mp3')
    $('#imgK').on({
        'click': function(){
            if(imgState){
            $('#imgK').attr('src','images/Letters/Kite.png');
            sound.play();
            } else {
            $("#imgK").attr('src',"images/Letters/K.png");    
            }
            imgState = !imgState;
        }
    });   
});

$(document).ready(function(){
    var imgState = true;
    var sound = new Audio('sounds/Letters/l.mp3')
    $('#imgL').on({
        'click': function(){
            if(imgState){
            $('#imgL').attr('src','images/Letters/Lion.png');
            sound.play();
            } else {
            $("#imgL").attr('src',"images/Letters/L.png");    
            }
            imgState = !imgState;
        }
    });   
});

$(document).ready(function(){
    var imgState = true;
    var sound = new Audio('sounds/Letters/m.mp3')
    $('#imgM').on({
        'click': function(){
            if(imgState){
            $('#imgM').attr('src','images/Letters/Monkey.png');
            sound.play();
            } else {
            $("#imgM").attr('src',"images/Letters/M.png");    
            }
            imgState = !imgState;
        }
    });   
});

$(document).ready(function(){
    var imgState = true;
    var sound = new Audio('sounds/Letters/n.mp3')
    $('#imgN').on({
        'click': function(){
            if(imgState){
            $('#imgN').attr('src','images/Letters/Nose.png');
            sound.play();
            } else {
            $("#imgN").attr('src',"images/Letters/N.png");    
            }
            imgState = !imgState;
        }
    });   
});

$(document).ready(function(){
    var imgState = true;
    var sound = new Audio('sounds/Letters/o.mp3')
    $('#imgO').on({
        'click': function(){
            if(imgState){
            $('#imgO').attr('src','images/Letters/Owl.png');
            sound.play();
            } else {
            $("#imgO").attr('src',"images/Letters/O.png");    
            }
            imgState = !imgState;
        }
    });   
});

$(document).ready(function(){
    var imgState = true;
    var sound = new Audio('sounds/Letters/p.mp3')
    $('#imgP').on({
        'click': function(){
            if(imgState){
            $('#imgP').attr('src','images/Letters/Pizza.png');
            sound.play();
            } else {
            $("#imgP").attr('src',"images/Letters/P.png");    
            }
            imgState = !imgState;
        }
    });   
});

$(document).ready(function(){
    var imgState = true;
    var sound = new Audio('sounds/Letters/q.mp3')
    $('#imgQ').on({
        'click': function(){
            if(imgState){
            $('#imgQ').attr('src','images/Letters/Queen.png');
            sound.play();
            } else {
            $("#imgQ").attr('src',"images/Letters/Q.png");    
            }
            imgState = !imgState;
        }
    });   
});

$(document).ready(function(){
    var imgState = true;
    var sound = new Audio('sounds/Letters/r.mp3')
    $('#imgR').on({
        'click': function(){
            if(imgState){
            $('#imgR').attr('src','images/Letters/Rainbow.png');
            sound.play();
            } else {
            $("#imgR").attr('src',"images/Letters/R.png");    
            }
            imgState = !imgState;
        }
    });   
});

$(document).ready(function(){
    var imgState = true;
    var sound = new Audio('sounds/Letters/s.mp3')
    $('#imgS').on({
        'click': function(){
            if(imgState){
            $('#imgS').attr('src','images/Letters/Sun.png');
            sound.play();
            } else {
            $("#imgS").attr('src',"images/Letters/S.png");    
            }
            imgState = !imgState;
        }
    });   
});

$(document).ready(function(){
    var imgState = true;
    var sound = new Audio('sounds/Letters/t.mp3')
    $('#imgT').on({
        'click': function(){
            if(imgState){
            $('#imgT').attr('src','images/Letters/Tiger.png');
            sound.play();
            } else {
            $("#imgT").attr('src',"images/Letters/T.png");    
            }
            imgState = !imgState;
        }
    });   
});

$(document).ready(function(){
    var imgState = true;
    var sound = new Audio('sounds/Letters/u.mp3')
    $('#imgU').on({
        'click': function(){
            if(imgState){
            $('#imgU').attr('src','images/Letters/Unicorn.png');
            sound.play();
            } else {
            $("#imgU").attr('src',"images/Letters/U.png");    
            }
            imgState = !imgState;
        }
    });   
});

$(document).ready(function(){
    var imgState = true;
    var sound = new Audio('sounds/Letters/v.mp3')
    $('#imgV').on({
        'click': function(){
            if(imgState){
            $('#imgV').attr('src','images/Letters/Van.png');
            sound.play();
            } else {
            $("#imgV").attr('src',"images/Letters/V.png");    
            }
            imgState = !imgState;
        }
    });   
});

$(document).ready(function(){
    var imgState = true;
    var sound = new Audio('sounds/Letters/w.mp3')
    $('#imgW').on({
        'click': function(){
            if(imgState){
            $('#imgW').attr('src','images/Letters/Whale.png');
            sound.play();
            } else {
            $("#imgW").attr('src',"images/Letters/W.png");    
            }
            imgState = !imgState;
        }
    });   
});

$(document).ready(function(){
    var imgState = true;
    var sound = new Audio('sounds/Letters/x.mp3')
    $('#imgX').on({
        'click': function(){
            if(imgState){
            $('#imgX').attr('src','images/Letters/Xray.png');
            sound.play();
            } else {
            $("#imgX").attr('src',"images/Letters/X.png");    
            }
            imgState = !imgState;
        }
    });   
});

$(document).ready(function(){
    var imgState = true;
    var sound = new Audio('sounds/Letters/y.mp3')
    $('#imgY').on({
        'click': function(){
            if(imgState){
            $('#imgY').attr('src','images/Letters/Yoga.png');
            sound.play();
            } else {
            $("#imgY").attr('src',"images/Letters/Y.png");    
            }
            imgState = !imgState;
        }
    });   
});

$(document).ready(function(){
    var imgState = true;
    var sound = new Audio('sounds/Letters/z.mp3')
    $('#imgZ').on({
        'click': function(){
            if(imgState){
            $('#imgZ').attr('src','images/Letters/Zebra.png');
            sound.play();
            } else {
            $("#imgZ").attr('src',"images/Letters/Z.png");    
            }
            imgState = !imgState;
        }
    });   
});


