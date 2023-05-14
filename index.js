

var menu= document.getElementsByClassName("menu")[0];

menu.style.fill='rgb(0, 255, 17)';




var nav= document.getElementsByTagName("nav")[0];

nav.style.transform = "rotateY(90deg)";

let ch=1
menu.addEventListener("click",function() {
    
    if (ch===1) {
        nav.style.transform = "rotateY(0deg)";
        ch=0;
    } else {
        nav.style.transform = "rotateY(90deg)";
        ch=1;
    }
  })