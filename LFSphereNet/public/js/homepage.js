function initComparisons(id="None") {
  var x, i;
  /* Find all elements with an "overlay" class: */
  //x = document.getElementsByClassName("img-comp-overlay");
  //x = document.getElementsById(id);
  x = document.getElementsByName(id);
  for (i = 0; i < x.length; i++) {
    /* Once for each "overlay" element:
    pass the "overlay" element as a parameter when executing the compareImages function: */
    compareImages(x[i]);
  }
  function compareImages(img) {
    var slider, img, clicked = 0, w, h;
    /* Get the width and height of the img element */
    w = img.offsetWidth;
    h = img.offsetHeight;
    /* Set the width of the img element to 50%: */
    img.style.width = (w / 2) + "px";
    /* Create slider: */
    slider = document.createElement("DIV");
    slider.setAttribute("class", "img-comp-slider");
    /* Insert slider */
    img.parentElement.insertBefore(slider, img);
    /* Position the slider in the middle: */
    slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
    slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";
    /* Execute a function when the mouse button is pressed: */
    slider.addEventListener("mousedown", slideReady);
    /* And another function when the mouse button is released: */
    window.addEventListener("mouseup", slideFinish);
    /* Or touched (for touch screens: */
    slider.addEventListener("touchstart", slideReady);
     /* And released (for touch screens: */
    window.addEventListener("touchend", slideFinish);
    function slideReady(e) {
      /* Prevent any other actions that may occur when moving over the image: */
      e.preventDefault();
      /* The slider is now clicked and ready to move: */
      clicked = 1;
      /* Execute a function when the slider is moved: */
      window.addEventListener("mousemove", slideMove);
      window.addEventListener("touchmove", slideMove);
    }
    function slideFinish() {
      /* The slider is no longer clicked: */
      clicked = 0;
    }
    function slideMove(e) {
      var pos;
      /* If the slider is no longer clicked, exit this function: */
      if (clicked == 0) return false;
      /* Get the cursor's x position: */
      pos = getCursorPos(e)
      /* Prevent the slider from being positioned outside the image: */
      if (pos < 0) pos = 0;
      if (pos > w) pos = w;
      /* Execute a function that will resize the overlay image according to the cursor: */
      slide(pos);
    }
    function getCursorPos(e) {
      var a, x = 0;
      e = (e.changedTouches) ? e.changedTouches[0] : e;
      /* Get the x positions of the image: */
      a = img.getBoundingClientRect();
      /* Calculate the cursor's x coordinate, relative to the image: */
      x = e.pageX - a.left;
      /* Consider any page scrolling: */
      x = x - window.pageXOffset;
      return x;
    }
    function slide(x) {
      /* Resize the image: */
      img.style.width = x + "px";
      /* Position the slider: */
      slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
    }
  }
}



initComparisons(id="compare_1");
initComparisons(id="compare_2");

  /*
  document.addEventListener('DOMContentLoaded', function() {
    const images = [];
    for (let i = 0; i < 20; i++) {
        images.push(`./public/images/Thumbnails/${i}_resized.png`);
    }
  
    const cardContainer = document.getElementById('card-container');
  
    images.forEach((image, index) => {
      const card = document.createElement('div');
      card.classList.add('demo-card');
      card.style.backgroundImage = `url(${image})`;

      card.addEventListener('click', function() {
        var currentUrl = window.location.href;
        currentUrl = currentUrl.replace("/SLFDB.html","")
        console.log("Current URL"+currentUrl);
        var newUrl = currentUrl + "/scene_"+index+".html";
        window.location.href = newUrl;
      });

      const centeredText = document.createElement('div');
      centeredText.classList.add('centered-text');
      centeredText.innerText = `Scene ${index}`;
      card.appendChild(centeredText);
      cardContainer.appendChild(card);
    });
    const LFimages = [];
    const urlList = [];
    const scenenameList = [];
    LFimages.push(`./public/images/scene_0/f001.png`); urlList.push("/LF_Scene_0.html"); scenenameList.push("LF Scene 0");
    LFimages.push(`./public/images/scene_3/f001.png`); urlList.push("/LF_Scene_3.html"); scenenameList.push("LF Scene 3");
    LFimages.push(`./public/images/scene_6/f001.png`); urlList.push("/LF_Scene_6.html"); scenenameList.push("LF Scene 6");
    LFimages.push(`./public/images/scene_9/f001.png`); urlList.push("/LF_Scene_9.html"); scenenameList.push("LF Scene 9");
    
    const cardContainerLF = document.getElementById('card-container-lf');
  
    LFimages.forEach((image, index) => {
      const card = document.createElement('div');
      card.classList.add('demo-card');
      card.style.backgroundImage = `url(${image})`;

      card.addEventListener('click', function() {
        var currentUrl = window.location.href;
        currentUrl = currentUrl.replace("/SLFDB.html","")
        var newUrl = currentUrl + urlList[index];
        console.log(newUrl);
        window.location.href = newUrl;
      });
      const centeredText = document.createElement('div');
      centeredText.classList.add('centered-text');
      centeredText.innerText = scenenameList[index];

      card.appendChild(centeredText);
      cardContainerLF.appendChild(card);
    });
  });
  */
