


document.getElementById('btn-menu').addEventListener('click', () => abrirMenu());

let body = document.getElementById('body')
let barra = document.getElementById('barra')
let tema = 'claro'

function mudarTema(){
  if(tema === 'claro'){
    barra.style.backgroundColor = '#222'
    barra.style.color = '#fff'
    body.style.backgroundColor = 'black'
    body.style.color = 'gray'
    tema = 'escuro'
} else {
    barra.style.backgroundColor = '#fff'
    barra.style.color = 'black'
  body.style.backgroundColor = '#fff'
  body.style.color = 'black'
  tema = 'claro'
}
  
}

let menu = document.getElementById('menu')
let menuStatus= 'off'


function abrirMenu() {
  if (menuStatus === 'off') {
    menu.style.marginLeft = 0;
    menuStatus= 'on'
  } else {
    menu.style.marginLeft = '-250px';
    menuStatus='off'
  }
}

document.getElementById('btn-tema').addEventListener('click', () => mudarTema(tema));

// slide
let slide1 = 'assets/img/slide-1.jpg'
let slide2 = 'assets/img/slide-2.jpg'
let slide3 = 'assets/img/slide-3.jpg'
let slider = document.getElementById('slide')
let i = 1;


let intevalo = window.setInterval(function mudarSlide(){
  if(i===1) {
    slider.src = slide2
    i = 2
  } else if(i===2){
    slider.src = slide3
    i = 3
  } else {
    slider.src = slide1
    i = 1
  }
  
}, 3000)

