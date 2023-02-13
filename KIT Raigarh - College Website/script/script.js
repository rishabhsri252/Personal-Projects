var navBar = document.getElementById("nav");
var burgerMenu = document.querySelectorAll(".burger-menu > div");
var lineOne = burgerMenu[0];
var lineTwo = burgerMenu[1];
var lineThree = burgerMenu[2];
var count = false;
// Open close nav menu in mobile mode
function showNavBar() {
  if (count) {
    navBar.style.display = "none";
    lineOne.style.transform = `rotate(0deg)`;
    lineTwo.style.transform = `rotate(0deg)`;
    lineThree.style.transform = `rotate(0deg)`;
    count = false;
  } else {
    navBar.style.display = "flex";
    lineOne.style.transition = `transform .2s ease-in-out`;
    lineOne.style.transform = `rotate(45deg) translate(10px,2px)`;
    lineTwo.style.transition = `transform .2s ease-in-out`;
    lineTwo.style.transform = `rotate(0deg) scale(0)`;
    lineThree.style.transition = `transform .2s ease-in-out`;
    lineThree.style.transform = `rotate(-45deg) translate(10px,-2px)`;

    count = true;
  }
}

//images slide
function slider() {
  var i = 0;
  var image = document.getElementById("img1");
  var arr = ["slide1", "slide2", "slide3", "slide4", "slide5"];
  setInterval(function () {
    if (i < 5) {
      image.src = `./img/${arr[i]}.jpg`;
      i++;
    } else i = i - 5;
  }, 3000);
}
