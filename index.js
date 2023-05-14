

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


  const progressBar = document.getElementsByClassName('skival');
for(let i=0;i<progressBar.length;i++){

    progressBar[i].addEventListener('mouseover', () => {
  const currentVal = progressBar[i].value;
  let time = 0;
  const animationDuration = 1000; // in milliseconds
  const interval = setInterval(() => {
    time += 10;
    const newVal = currentVal * (time / animationDuration);
    progressBar[i].value = newVal;
    if (time >= animationDuration) {
      clearInterval(interval);
    }
  }, 10);
});
}
