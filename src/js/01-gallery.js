import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const cardList = document.querySelector(".gallery");

function createCardList(galleryItems) {
    return galleryItems.map(({ preview, original, description }) =>
        `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
    ).join('');
}
cardList.insertAdjacentHTML('beforeend', createCardList(galleryItems));

new SimpleLightbox('.gallery__link', {
    captionsData: 'alt',
    captionDelay: 250,
});