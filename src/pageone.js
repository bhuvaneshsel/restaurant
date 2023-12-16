import Image from './images/cat2.png';

function firstPage() {
    const pageOne = document.createElement("div");
    pageOne.id = "page-one";
    const header = document.createElement("h1");
    header.classList.add("page-one-header");
    header.textContent = "Welcome to the Cat Cafe!"

    const description = document.createElement("p");
    description.textContent = "Eat your favorite foods while cats roam the building! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id tellus vel elit sollicitudin gravida. Nulla non imperdiet mauris, vel condimentum augue. In feugiat tellus eget nibh sollicitudin vulputate. Fusce vestibulum est a neque lobortis efficitur. Nam maximus sed diam et vestibulum. Quisque a semper libero, non rutrum ligula. Pellentesque et elit ullamcorper, tincidunt mauris a, maximus ex. Fusce consectetur orci et eros ullamcorper ultricies. Nam ac magna bibendum dolor iaculis fermentum. Praesent quis leo ac dolor ullamcorper convallis. Vestibulum luctus ultrices est, nec pretium ante vestibulum et. Donec tristique tincidunt nisi, vel ullamcorper ipsum ultricies in."
    description.classList.add("page-one-description");
    const descriptionContainer = document.createElement("div");
    descriptionContainer.classList.add("page-one-description-container")
    descriptionContainer.appendChild(description);

    const catImage = document.createElement("img");
    catImage.classList.add("page-one-image");
    catImage.src = Image;

    pageOne.appendChild(header);
    pageOne.appendChild(descriptionContainer);
    pageOne.appendChild(catImage);

    const main = document.querySelector("#content");
    main.appendChild(pageOne);


}

export { firstPage };