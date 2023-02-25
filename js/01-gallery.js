import { galleryItems } from "./gallery-items.js";
// Change code below this line
// console.log(galleryItems);

const galleryArrRef = document.querySelector(".gallery");
const picturesMarkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}"  data-source="${original}" alt="${description}"></a></div>`
  )
  .join("");
galleryArrRef.insertAdjacentHTML("afterbegin", picturesMarkup);

galleryArrRef.addEventListener("click", selectedPict);

function selectedPict(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }
  const selectedPict = event.target.dataset.source;
  const instance = basicLightbox
    .create(
      `
    <img src="${selectedPict}" width="800" height="600">
`
    )
    .show();
  //   instance.show();
}

// console.log(galleryArrRef);
// console.log(pictureMarkup);
