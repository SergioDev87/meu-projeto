console.log('Hello World!');

document.getElementById('btn').addEventListener('click', () => chat());


function chat() {
  nome = prompt("Qual seu nome?");
  alert('Olá ' + nome);
  deMaior = confirm(nome + " você é de maior?");
  if (deMaior){
    alert(nome + ' você declarou ser de maior!')
  } else {
    alert(nome + ' você declarou ser de menor!');
  }
}
