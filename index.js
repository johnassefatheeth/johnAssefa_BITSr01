

var menu= document.getElementsByClassName("menu")[0];

menu.style.fill='blue';




var nav= document.getElementsByTagName("nav")[0];

nav.style.transform = "scale(0)";

let ch=1
menu.addEventListener("click",function() {
    
    if (ch===1) {
        nav.style.transform = "scale(1)";
        ch=0;
    } else {
        nav.style.transform = "scale(0)";
        ch=1;
    }
  })