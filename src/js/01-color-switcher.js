// generar un color hexadecimal aleatorio
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const body = document.querySelector('body');
let intervalId;

// Función para cambiar el color de fondo
function changeBackgroundColor() {
  body.style.backgroundColor = getRandomHexColor();
}

btnStart.addEventListener('click', () => {
  // Desactivar el botón "Start"
  btnStart.disabled = true;

  // Cambiar el color de fondo cada segundo
  intervalId = setInterval(changeBackgroundColor, 1000);
});

btnStop.addEventListener('click', () => {
  btnStart.disabled = false;
  clearInterval(intervalId);
});

// document.querySelector('[data-stop]').addEventListener('click', () => {
//   // Habilitar el botón "Start"
//   btnStart.disabled = false;

//   clearInterval(intervalId);
// });
