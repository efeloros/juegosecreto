let numeroSecreto=0;
let intentos=0;
let listaNumerosSorteados=[];
let numeromaximo=10;
function asignarTexto(elemento, texto){
  let elemntoHTML = document.querySelector(elemento);
  elemntoHTML.innerHTML=texto;
  return;
}
function verificarIntento() {
  let numeroUsuario= parseInt(document.getElementById('valorUsuario').value);
  console.log(numeroSecreto);
  console.log(intentos);
  if (numeroUsuario===numeroSecreto) {
    asignarTexto('p', `Aserto correcto en: ${intentos} ${(intentos===1) ? 'vez':'veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    if (numeroUsuario > numeroSecreto) {
      asignarTexto('p', 'Es menor');
    } else {
      asignarTexto('p', 'Es mayor');
    }
    intentos++;
    limpiarCaja();
  }
  return;
}
function limpiarCaja(){
  document.querySelector('#valorUsuario').value='';
}
function generarNumeroSecreto(){
  let numeroGenerado = Math.floor(Math.random()*numeromaximo)+1;
  //si el numero generado esta es la listaNumerosSorteados
  if (listaNumerosSorteados.length == numeromaximo) {
    asignarTexto('p', 'Ya se sortearon todos los numeros posibles');
  } else {
      if (listaNumerosSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto();
    } else {
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}
function condicionesIniciales(){
  asignarTexto('h1', 'Juego del Número Secreto');
  asignarTexto('p', `Indica un numero del 1 al 10 ${numeromaximo}`);
  numeroSecreto=generarNumeroSecreto();
  intentos=1;
}
function reiniciarJuego(){
  //limpiarCaja
  limpiarCaja();
  //indicar mensaje de intervalo de numeros
  //generar numero aleatorio
  //inicializar numero de intentos
  condicionesIniciales();
  //deshabilitar botom reiniciarJuego
  document.querySelector('#reiniciar').setAttribute('disabled', 'true');

}
condicionesIniciales();
