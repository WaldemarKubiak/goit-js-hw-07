import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryArrRef = document.querySelector(".gallery");
const picturesMarkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<a class="gallery__item" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"></a>`
  )
  .join("");

galleryArrRef.insertAdjacentHTML("afterbegin", picturesMarkup);

// SimpleLightbox library use

const lightbox = new SimpleLightbox(".gallery a", {
  captionType: "alt",
  captionsData: "alt",
  captionDelay: 250,
});

// console.log(galleryItems);
// console.log(galleryArrRef);
