

var menu= document.getElementsByClassName("menu")[0];

menu.style.fill='blue';

var nav= document.getElementsByTagName("nav")[0];

menu.addEventListener("click",function() {
    if (nav.style.zIndex === "0" || nav.style.zIndex === "") {
      nav.style.zIndex = "1";
    } else {
      nav.style.zIndex = "0";
    }
  })