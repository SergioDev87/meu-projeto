document.getElementById('btn').addEventListener('click', () => chat());


document.getElementById('btn-menu').addEventListener('click', () => abrirMenu());
function chat() {
  alert('oi');
}

let barra = document.getElementById('barra')
let tema = 'claro'

function mudarTema(){
  if(tema === 'claro'){
  barra.style.backgroundColor = '#222'
  tema = 'escuro'
} else {
  barra.style.backgroundColor = '#fff'
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


