function getGoodies(goodie){
    localStorage.setItem("selected_goodie",goodie);
    console.log(goodie);
    window.location.href = "veQA.html";
}


var lang = {
    html: "100%",
    css: "90%",
    javascript: "80%",
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
