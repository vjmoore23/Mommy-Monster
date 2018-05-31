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

    $('#submit').click(function(){
        var result = $('#formSubmit');
        result.text('Thank you for your submission!');
    });

    function parseXml(xml) {
        if (jQuery.browser.msie) {    // Only for IE
           var xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
           xmlDoc.async="false";
           xmlDoc.loadXML(xml);
           xml = xmlDoc;
        }
        return xml;
     }

    $('#retrieve-resources').click(function () {
        var displayResources = $('#display-resources'); // set this to the display-resources ID in index.html
        var zip = $("#zipCode").val();// this variable should capture text input from the user
        
        displayResources.text('Loading data...');

        $.ajax({
          type: "GET", 
          url: "https://api.greatschools.org/schools/nearby?key=38f6b31eb74752feef47d6bb8bc0ea83&state=CA&zip=94105",
          dataType: ($.browser.msie) ? "text" : "xml",
          success: function (xml) {
              xmlFile = parseXml(xml);
          $(xmlFile).find('school').each(function(){

            displayResources.html($(this).find('name').text() +"<br/>");
            displayResources.html($(this).find('address').text() +"<br/>");
            displayResources.html($(this).find('phone').text() +"<br/>");
            displayResources.html("lkjlkj").appendTo("#display-resources");
  
            });
          },
          error: function() {
            alert("The XML File could not be processed correctly.");
            }
          
        });
      });
    
});
