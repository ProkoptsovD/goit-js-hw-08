import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryRef = document.querySelector('.gallery');
const galleryCardsMarkup = makeGalleryCardsMarkup(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', galleryCardsMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
  overlayOpacity: 0.8,
  fadeSpeed: 200,
  maxZoom: 2,
  scrollZoomFactor: 0.2,
  captionsData: 'alt',
  captionDelay: 250,
});

function makeGalleryCardsMarkup(images) {
  return images.map(({ description, original, preview }) => {
    return `
                    <a class="gallery__item" href="${original}">
                        <img class="gallery__image" src="${preview}" alt="${description}" />
                    </a>`;
  }).join``;
}
