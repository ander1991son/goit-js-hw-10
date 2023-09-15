// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// // Descrito en la documentación
import SimpleLightbox from 'simplelightbox';
// // Importación adicional de estilos
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const galleryMarkup = galleryItems
  .map(
    item => `
    <li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img
          class="gallery__image"
          src="${item.preview}"
        data-source="${item.original}"          
          alt="${item.description}"
        />
      </a>
    </li>
  `
  )
  .join('');

// //gallery.innerHTML = galleryMarkup;
gallery.insertAdjacentHTML('beforeend', galleryMarkup);

document.addEventListener('DOMContentLoaded', function () {
  const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
    captionsPosition: 'bottom',
  });
});

// function openModal(event) {
//   event.preventDefault();

//   if (event.target.nodeName === 'IMG') {
//     const sourceUrl = event.target.dataset.source;
//     const instance = basicLightbox.create(`<img src="${sourceUrl}" alt="">`);
//     instance.show();
//   }
// }

// gallery.addEventListener('click', openModal);
