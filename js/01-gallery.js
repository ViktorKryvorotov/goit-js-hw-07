import { galleryItems } from './gallery-items.js';
// Change code below this line


  console.log(galleryItems);

const setGallery = document.querySelector('.gallery');
const galleryMarkup = creatGalleryElMarkup(galleryItems);
setGallery.insertAdjacentHTML('beforeend', galleryMarkup);
setGallery.addEventListener('click', onSetGalleryClick);


function creatGalleryElMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
      return`<div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
        </a>
        </div>`
    }).join('');
  
}

function onSetGalleryClick(event) {
     if (event.target.nodeName !== "IMG") {
    return;
  }
    event.preventDefault();
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}">
`)

instance.show()
}

// import * as basicLightbox from 'basiclightbox'

// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `)

// instance.show()






