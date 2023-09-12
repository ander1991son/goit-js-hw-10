// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

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
        data-source="${item.original}"           //revisar para que sirve
          alt="${item.description}"
        />
      </a>
    </li>
  `
  )
  .join('');

// //gallery.innerHTML = galleryMarkup;
gallery.insertAdjacentHTML('beforeend', galleryMarkup);
