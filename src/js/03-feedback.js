const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');

emailInput.addEventListener('input', () => {
  // Obtener el valor del campo de correo electrónico
  const emailValue = emailInput.value;
  // Guardar en el almacenamiento local
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({ email: emailValue, message: messageInput.value })
  );
});

messageInput.addEventListener('input', () => {
  // Obtener el valor del campo de mensaje
  const messageValue = messageInput.value;
  // Guardar en el almacenamiento local
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({ email: emailInput.value, message: messageValue })
  );
});

///

document.addEventListener('DOMContentLoaded', () => {
  const storedData = localStorage.getItem('feedback-form-state');
  if (storedData) {
    const { email, message } = JSON.parse(storedData);
    emailInput.value = email;
    messageInput.value = message;
  }
});

///

const feedbackForm = document.querySelector('.feedback-form');

feedbackForm.addEventListener('submit', e => {
  e.preventDefault(); // Evita el envío predeterminado del formulario
  // Borra el almacenamiento local
  localStorage.removeItem('feedback-form-state');
  // Obtiene los valores actuales
  const emailValue = emailInput.value;
  const messageValue = messageInput.value;
  // Emite los valores a la consola
  console.log({ email: emailValue, message: messageValue });
  // Restablece los campos del formulario
  emailInput.value = '';
  messageInput.value = '';
});

///

import throttle from 'lodash.throttle';

emailInput.addEventListener(
  'input',
  throttle(() => {}, 500)
);

messageInput.addEventListener(
  'input',
  throttle(() => {}, 500)
);
