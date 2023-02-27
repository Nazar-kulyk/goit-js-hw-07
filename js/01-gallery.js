import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const galleryCardsSet = createGallery(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", galleryCardsSet);

function createGallery(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" 
            data-source="${original}"
            alt="${description}">
          </a>
        </li>
      `;
    })
    .join("");
}

galleryContainer.addEventListener("click", onGalleryItemClick);

function onGalleryItemClick(event) {
  event.preventDefault();

  const clickedElement = event.target;
  if (clickedElement.nodeName !== "IMG") {
    return;
  }

  const originalImageURL = clickedElement.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${originalImageURL}" width="800" height="600">
  `);

  instance.show();
}
