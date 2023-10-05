// console.log('hello');

// axios.defaults.headers.common['x-api-key'] =
//   'live_z5nof3QxHWLQPiFG1n80dobT0Rc2aVQYEbnLdrHIvRB4JS5PI2TsGXhQTsHIkjYq';

import axios from 'axios';

//axios.defaults.headers.common['x-api-key'] = 'tu_llave';

// Archivo index.js

import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

const breedSelect = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');

// Manejar cambios en la selección de raza
breedSelect.addEventListener('change', async () => {
  const selectedBreedId = breedSelect.value;

  // Mostrar el cargador mientras se carga la información
  loader.style.display = 'block';
  catInfo.style.display = 'none';

  try {
    const catData = await fetchCatByBreed(selectedBreedId);

    // Actualizar la interfaz de usuario con los datos del gato
    catInfo.innerHTML = `
      <h2>${catData[0].breeds[0].name}</h2>
      <p><strong>Description:</strong> ${catData[0].breeds[0].description}</p>
      <p><strong>Temperament:</strong> ${catData[0].breeds[0].temperament}</p>
      <img src="${catData[0].url}" alt="${catData[0].breeds[0].name}" />
    `;

    // Ocultar el cargador y mostrar la información del gato
    loader.style.display = 'none';
    catInfo.style.display = 'block';
  } catch (err) {
    // Mostrar el error si se produce un problema en la solicitud
    loader.style.display = 'none';
    error.style.display = 'block';
  }
});

// Cargar la lista de razas al cargar la página
window.addEventListener('load', async () => {
  try {
    const breeds = await fetchBreeds();

    // Llenar el select con las opciones de razas
    breeds.forEach(breed => {
      const option = document.createElement('option');
      option.value = breed.id;
      option.textContent = breed.name;
      breedSelect.appendChild(option);
    });
  } catch (err) {
    // Mostrar el error si se produce un problema en la solicitud
    loader.style.display = 'none';
    error.style.display = 'block';
  }
});
