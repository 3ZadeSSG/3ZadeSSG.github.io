


// Header
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}



$(document).ready(()=>{
  console.log("ready");
  loadProgramming();
    loadTools();
    loadCS();



  $("#scrollSkills").click(function() {
    $('html, body').animate({
        scrollTop: $(".section2").offset().top-180
    }, 500);
    loadProgramming();
    loadTools();
    loadCS();
  });

  $("#scrollAcademic").click(function() {
    $('html, body').animate({
        scrollTop: $(".section3").offset().top-180
    }, 500);
  });



  $("#scrollProjects").click(function() {
    $('html, body').animate({
        scrollTop: $(".section4").offset().top-180
    }, 500);
  });


  //scrollProjects



  $("#buttonSkills").click(function() {
    $('html, body').animate({
        scrollTop: $(".section2").offset().top-180
    }, 1000);
    loadProgramming();
    loadTools();
    loadCS();
  });

  $("#buttonHome").click(function() {
    $('html, body').animate({
        scrollTop: $(".section1").offset().top-180
    }, 1000);
    loadProgramming();
    loadTools();
    loadCS();
  });


  //
  $("#buttonAcademic").click(function() {
    $('html, body').animate({
        scrollTop: $(".section3").offset().top-180
    }, 1000);
  });

  $("#buttonProjects").click(function() {
    $('html, body').animate({
        scrollTop: $(".section4").offset().top-180
    }, 1000);
  });


  $("#toggleBSc").next().removeClass('show');
  $("#toggleBSc").next().slideUp(350);


  $("#toggleMSc").next().removeClass('show');
  $("#toggleMSc").next().slideUp(350);


  $("#toggleCertificate").next().removeClass('show');
  $("#toggleCertificate").next().slideUp(350);

  $("#toggle1").next().removeClass('show');
  $("#toggle1").next().slideUp(350);


  $("#toggle2").next().removeClass('show');
  $("#toggle2").next().slideUp(350);

  $("#toggle3").next().removeClass('show');
  $("#toggle3").next().slideUp(350);

  $("#toggle4").next().removeClass('show');
  $("#toggle4").next().slideUp(350);


  $("#toggle5").next().removeClass('show');
  $("#toggle5").next().slideUp(350);

  $("#toggle6").next().removeClass('show');
  $("#toggle6").next().slideUp(350);

  $("#toggle7").next().removeClass('show');
  $("#toggle7").next().slideUp(350);

});


function loadProgramming(){
  $('#skillProgramming').html('');


 var languageArray = ["C","C++","Python 3","JavaScript","Java 8","MATLAB","PL/SQL","x86 Assembly","Lex-Yacc","HTML","CSS"];
 var percentage = [70,75,70,60,50,55,55,40,35,58,58];
 var color = ["danger","danger","danger","danger","danger","danger","danger","danger","danger","danger","danger"];
 var iconLocation = ["ic_c.png","ic_c++.png","ic_python.png","ic_js.png","ic_java.png","ic_matlab.png","ic_sql.png","ic_asm.png","ic_lexyacc.png","ic_html.png","ic_css.png"];

  for(var i=0;i<languageArray.length;i++){
    var test = "\
    <li>\
    <span><img src=\"img/skills/"+iconLocation[i]+"\" style=\"width: 45px;vertical-align:middle\">"+languageArray[i]+"</span>\
    <span class=\"cssProgress-label\" style=\"float: right;\">"+percentage[i]+"%</span>\
    <div id=\"example-"+i+"\" class=\"examples\" style=\"width: 350px;\">\
      <div class=\"cssProgress\">\
        <div class=\"progress1\">\
          <div class=\"cssProgress-bar cssProgress-"+color[i]+" cssProgress-stripes\" data-percent=\""+percentage[i]+"\" style=\"width: 300px;\">\
          </div>\
        </div>\
      </div>\
      </div>\
      <br>\
  </li>\
    "
    $("#skillProgramming").append(test);
  }

  for(var i=0;i<languageArray.length;i++){
    var text = "#example-"+i;
    $(text).progress_fnc();
  }
}



function loadTools(){
  $('#skillTools').html('');

  var languageArray = ["Neo4j","AWS","Node.js","PyTorch v1.3","TensorFlow v2","Android Studio","Google Cloud","CUDA C++","Adobe XD","Flask","REST API"];
  var percentage = [70,70,75,65,60,55,65,40,40,65,65];
  var color = ["danger","danger","danger","danger","danger","danger","danger","danger","danger","danger","danger"];
  var iconLocation = ["ic_neo4j.png","ic_aws.png","ic_nodejs.png","ic_pytorch.png","ic_tf.png","ic_android.png","ic_gcp.png","ic_cuda.png","ic_xd.png","ic_flask.png","ic_restapi.png"];


   for(var i=0;i<languageArray.length;i++){
     var test = "\
     <li>\
     <span><img src=\"img/skills/"+iconLocation[i]+"\" style=\"width: 45px;vertical-align:middle;\">"+languageArray[i]+"</span>\
     <span class=\"cssProgress-label\" style=\"float: right;\">"+percentage[i]+"%</span>\
     <div id=\"exampleTool-"+i+"\" class=\"examples\" style=\"width: 350px;\">\
       <div class=\"cssProgress\">\
         <div class=\"progress1\">\
           <div class=\"cssProgress-bar cssProgress-"+color[i]+" cssProgress-stripes\" data-percent=\""+percentage[i]+"\" style=\"width: 300px;\">\
           </div>\
         </div>\
       </div>\
       </div>\
       <br>\
   </li>\
     "
     $("#skillTools").append(test);
   }

   for(var i=0;i<languageArray.length;i++){
     var text = "#exampleTool-"+i;
     $(text).progress_fnc();
   }
}




function loadCS(){
  $('#skillCS').html('');

  var languageArray = ["Data Structure","Algorithms","AI","Data Science","Graph Theory","Microprocessor","Embedded Systems","Compiler Design"];
  var percentage = [85,85,65,70,65,50,50,50];
  var color = ["danger","danger","danger","danger","danger","danger","danger","danger"];

   for(var i=0;i<languageArray.length;i++){
     var test = "\
     <li>\
     <span>"+languageArray[i]+"</span><span class=\"cssProgress-label\" style=\"float: right;\">"+percentage[i]+"%</span>\
     <div id=\"exampleCS-"+i+"\" class=\"examples\" style=\"width: 350px;\">\
       <div class=\"cssProgress\">\
         <div class=\"progress1\">\
           <div class=\"cssProgress-bar cssProgress-"+color[i]+" cssProgress-stripes\" data-percent=\""+percentage[i]+"\" style=\"width: 300px;\">\
           </div>\
         </div>\
       </div>\
       </div>\
       <br>\
   </li>\
     "
     $("#skillCS").append(test);
   }

   for(var i=0;i<languageArray.length;i++){
     var text = "#exampleCS-"+i;
     $(text).progress_fnc();
   }
}













function loadContents(){
  var lang = {
    c: "70%",
    c_plus_plus: "75%",
    javascript: "60%",
    php: "55%"
  };

  var multiply = 4;

  $.each(lang, function(language, pourcent) {
    var delay = 700;

    setTimeout(function() {
      $("#" + language + "-pourcent").html(pourcent);
    }, delay * multiply);

    multiply++;
  });
}



$.fn.progress_fnc = function(options) {
  var settings = $.extend({
    type: 'start'
  }, options);

  var div = $(this);
  var progress = div.find('.cssProgress');

  progress.each(function() {
    var self = $(this);
    var progress_bar = self.find('.cssProgress-bar');
    var progress_label = self.find('.cssProgress-label, .cssProgress-label2');
    var progress_value = progress_bar.data('percent');
    var percentage = parseInt(progress_value, 10) + '%';

    progress_bar.css({'width': '0%', 'transition': 'none', '-webkit-transition': 'none', '-moz-transition': 'none'});

    if(settings.type == 'start') {

      progress_bar.animate({
        width: percentage
      }, {
        duration: 1000,
        step: function(x) {
          progress_label.text(Math.round(x) + '%');
        }
      });

    } else if(settings.type == 'reset') {
      progress_bar.css('width', '0%');
      progress_label.text('0%');
    }

  });
}













/*================= Collapsable List ===========*/
$('.toggle').click(function(e) {
  e.preventDefault();

  var $this = $(this);

  if ($this.next().hasClass('show')) {
      $this.next().removeClass('show');
      $this.next().slideUp(350);
  } else {
      $this.parent().parent().find('li .inner').removeClass('show');
      $this.parent().parent().find('li .inner').slideUp(350);
      $this.next().toggleClass('show');
      $this.next().slideToggle(350);
  }
});