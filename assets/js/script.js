var slideItem = 0;
window.onload = function() {
  setInterval(passaSlide, 2000);
  var slidewidth = document.getElementById("slideshow").offsetWidth;
  var objs = document.getElementsByClassName("slide");

  for (i = 0; i < objs.length; i++) {
    objs[i].style.width = slidewidth + "px";
  }
};

function passaSlide() {
  var slidewidth = document.getElementById("slideshow").offsetWidth;
  if (slideItem >= 3) {
    slideItem = 0;
  } else {
    slideItem++;
  }

  document.getElementsByClassName("slideshow_area")[0].style.marginLeft =
    "-" + slidewidth * slideItem + "px";
}
function changeSlide(pos) {
  slideItem = pos;

  var slidewidth = document.getElementById("slideshow").offsetWidth;
  document.getElementsByClassName("slideshow_area")[0].style.marginLeft =
    "-" + slidewidth * slideItem + "px";
}
