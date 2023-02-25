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

// basicLightbox library event

galleryArrRef.addEventListener("click", selectedPict);

function selectedPict(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }
  const selectedPict = event.target.dataset.source;
  const instance = basicLightbox.create(
    `
    <img src="${selectedPict}" width="800" height="600">
`
  );
  // .show();
  instance.show();

  //====close modal window after using the Esc button====
  window.addEventListener("keydown", (event) => {
    //   console.log("keydown", event);
    if (event.key === "Escape") {
      instance.close(); //!!! it's not work with only .show()->without "instance"  -> look at lines 30 and 31
    }
  });
}

// console.log(galleryArrRef);
// console.log(pictureMarkup);
