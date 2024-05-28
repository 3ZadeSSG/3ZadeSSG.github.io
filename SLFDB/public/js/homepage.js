  console.log("Loaded");
  

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
        var is12KResolution = $('#resolution-switch').prop('checked');
        if (is12KResolution){
            var currentUrl = window.location.href;
            var newUrl = currentUrl + "scene12k/"+index;
            window.location.href = newUrl;
        }
        else{
            var currentUrl = window.location.href;
            var newUrl = currentUrl + "scene/"+index;
            window.location.href = newUrl;
        }
      });

      const centeredText = document.createElement('div');
      centeredText.classList.add('centered-text');
      centeredText.innerText = `Scene ${index}`;

      card.appendChild(centeredText);
      cardContainer.appendChild(card);
    });


    // Code for light field viewer will go here
    const LFimages = [];
    const urlList = [];
    const scenenameList = [];
    LFimages.push(`./public/images/fika_room_2/f001.png`); urlList.push("fika_1"); scenenameList.push("2K LF");
    LFimages.push(`./public/images/fika_room_2/f001.png`); urlList.push("fika_2"); scenenameList.push("0.5K LF");
    
    const cardContainerLF = document.getElementById('card-container-lf');
  
    LFimages.forEach((image, index) => {
      const card = document.createElement('div');
      card.classList.add('demo-card');
      card.style.backgroundImage = `url(${image})`;

      card.addEventListener('click', function() {
        var currentUrl = window.location.href;
        var newUrl = currentUrl + urlList[index];
        window.location.href = newUrl;
      });

      const centeredText = document.createElement('div');
      centeredText.classList.add('centered-text');
      centeredText.innerText = scenenameList[index];

      card.appendChild(centeredText);
      cardContainerLF.appendChild(card);
    });
  });
  

  /*
  $(document).ready(function() {
    $('#button_flowers').on('click',()=>{
        var currentUrl = window.location.href;
        var newUrl = currentUrl + "flowers"
        window.location.href = newUrl;
    });
    $('#button_fence').on('click',()=>{
        var currentUrl = window.location.href;
        var newUrl = currentUrl + "fence"
        window.location.href = newUrl;
    });
    $('#button_fountain').on('click',()=>{
        var currentUrl = window.location.href;
        var newUrl = currentUrl + "fountain"
        window.location.href = newUrl;
    });
    $('#button_fika_1').on('click',()=>{
        var currentUrl = window.location.href;
        var newUrl = currentUrl + "fika_1"
        window.location.href = newUrl;
    });
    $('#button_fika_2').on('click',()=>{
        var currentUrl = window.location.href;
        var newUrl = currentUrl + "fika_2"
        window.location.href = newUrl;
    });
    $('#button_library').on('click',()=>{
        var currentUrl = window.location.href;
        var newUrl = currentUrl + "library"
        window.location.href = newUrl;
    });
    $('#button_l_building').on('click',()=>{
        var currentUrl = window.location.href;
        var newUrl = currentUrl + "l_building"
        window.location.href = newUrl;
    });
});
*/