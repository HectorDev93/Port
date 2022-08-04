const typed = new Typed('.typed',{
   strings: ['<i class="header__content__subtitle__efect">Desarrollador Full-Stack</i>',
    '<i class="header__content__subtitle__efect">Especializado en Back-end</i>'],
    stringsElement: '#chain-text',
    typeSpeed: 55,
    startDelay: 2000,
    backSpeed: 75,
    smartBackspace: true,
    shuffle: false,
    backDelay: 1500,
    loop: true,
    loopCount: false,
    showCursor:true,
    cursorChar: '|',
    contentType: 'html'
});
/* 
let constrain = 10;
let mouseOverContainer = document.getElementById("cubo");
let ex1Layer = document.getElementById("cara");

function transforms(x, y, el) {
  let box = el.getBoundingClientRect();
  let calcX = -(y - box.y - (box.height / 2)) / constrain;
  let calcY = (x - box.x - (box.width / 2)) / constrain;
  
  return "perspective(800px) "
    + "   rotateX("+ calcX +"deg) "
    + "   rotateY("+ calcY +"deg) ";
};

 function transformElement(el, xyEl) {
  el.style.transform  = transforms.apply(null, xyEl);
}

mouseOverContainer.onmousemove = function(e) {
  let xy = [e.clientX, e.clientY];
  let position = xy.concat([ex1Layer]);

  window.requestAnimationFrame(function(){
    transformElement(mouseOverContainer, position);
  });
}; */