const entradaUsuario = document.getElementById('userInput');
const pantallaCuentaAtras = document.getElementById('countdown');
const pantallaResultado = document.getElementById('result');
const botonReiniciar = document.getElementById('restart');

let intervaloCuentaAtras;
let tiempoCuentaAtras = 5;

entradaUsuario.addEventListener('click', iniciarJuego);
botonReiniciar.addEventListner('click', reiniciarJuego);

function iniciarJuego() {
    const numeroUsuario = parseInt(entradaUsuario.value);
    if (isNaN(numeroUsuario) , numeroUsuario < 1 , numeroUsuario > 3) {
        alert('Por favor, introduce un número valido del 1 al 3.');
        return;
    }

    const numeroAleatorio = Math.random() * 3 + 1; 
    pantallaCuentaAtras.textContent = tiempoCuentaAtras;

    intervaloCuentaAtras = setInterval(() => {
        tiempoCuentaAtras--;
        pantallaCuentaAtras.innerText = tiempoCuentaAtras; 

        if (tiempoCuentaAtras <= 0) {
            clearInterval(intervaloCuentaAtras);
            mostrarResultado(numeroUsuario, numeroAleatorio);
        }
    }, 1000);
}

function mostrarResultado(numeroUsuario, numeroAleatorio) {
    if (numeroUsuario === numeroAleatorio) {
        pantallaResultado.textContent = `¡Has salvado el mundo! Elegiste ${numeroUsuario} y el número correcto era ${numeroAleatorio}.`;
    } else {
        pantallaResultado.textContent = `La bomba ha estallado. Elegiste ${numeroUsuario} y el número correcto era ${numeroAleatorio}.`;
    }
}

function reiniciarJuego() {
    clearInterval(intervaloCuentaAtras);
    tiempoCuentaAtras = 5;
    pantallaCuentaAtras.textContent = '';
    pantallaResultado.textContent = '';
    entradaUsuario.value = '';
}
