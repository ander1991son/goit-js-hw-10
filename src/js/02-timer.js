// Descrito en la documentación
import flatpickr from 'flatpickr';
// Importación adicional de estilos
import 'flatpickr/dist/flatpickr.min.css';

import Notiflix from 'notiflix';

const datetimePicker = document.querySelector('#datetime-picker');
const startButton = document.querySelector('[data-start]');
const daysValue = document.querySelector('[data-days]');
const hoursValue = document.querySelector('[data-hours]');
const minutesValue = document.querySelector('[data-minutes]');
const secondsValue = document.querySelector('[data-seconds]');
let countdownInterval;

flatpickr(
  datetimePicker,
  (options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      //console.log(selectedDates[0]);
      const selectedDate = selectedDates[0];
      if (selectedDate > new Date()) {
        startButton.removeAttribute('disabled');
      } else {
        startButton.setAttribute('disabled', 'true');
        window.alert('Please choose a date in the future');
      }
    },
  })
);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// Función para calcular la cuenta regresiva
function calculateCountdown() {
  const currentDate = new Date();
  const selectedDate = new Date(datetimePicker.value);
  const timeDifference = selectedDate - currentDate;

  if (timeDifference <= 0) {
    clearInterval(countdownInterval);
    Notiflix.Notify.success('Countdown finished!');
  } else {
    const { days, hours, minutes, seconds } = convertMs(timeDifference);
    daysValue.textContent = addLeadingZero(days);
    hoursValue.textContent = addLeadingZero(hours);
    minutesValue.textContent = addLeadingZero(minutes);
    secondsValue.textContent = addLeadingZero(seconds);
  }
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

////////////////////////

// Función para agregar un 0 delante de un número si es necesario
function addLeadingZero(value) {
  return value < 10 ? `0${value}` : value;
}

// Manejar el clic en el botón "Start"
startButton.addEventListener('click', function () {
  countdownInterval = setInterval(calculateCountdown, 1000);
  startButton.setAttribute('disabled', 'true');
});

// //Configuración de flatpickr
// flatpickr(datetimePicker, {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose: function (selectedDates) {
//     const selectedDate = selectedDates[0];
//     if (selectedDate > new Date()) {
//       startButton.removeAttribute('disabled');
//     } else {
//       startButton.setAttribute('disabled', 'true');
//       Notiflix.Notify.failure('Please choose a date in the future');
//     }
//   },
// });

// //Configuración de flatpickr
// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     const selectedDate = selectedDates[0];
//     if (selectedDate > new Date()) {
//       startButton.removeAttribute('disabled');
//     } else {
//       startButton.setAttribute('disabled', 'true');
//       Notiflix.Notify.failure('Please choose a date in the future');
//     }
//   },
// };
