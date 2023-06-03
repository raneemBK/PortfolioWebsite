var imageSources = ["../Assets/Images/1.jpeg", "../Assets/Images/2.jpeg", "../Assets/Images/3.jpeg"]

var index = 0;
setInterval (function(){
  if (index === imageSources.length) {
    index = 0;
  }
  document.getElementById("image").src = imageSources[index];
  index++;
} , 3000);