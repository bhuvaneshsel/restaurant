import Image from './images/odin-cat2.jpeg';

function thirdPage() {
    const pageThree = document.createElement("div");
    const header = document.createElement("h1");
    header.textContent = "Cat Cafe Contacts :3";
    header.classList.add("page-two-header");

    const description = document.createElement("p");
    description.textContent = "I don't feel like doing all of this so yeah... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id tellus vel elit sollicitudin gravida. Nulla non imperdiet mauris, vel condimentum augue. In feugiat tellus eget nibh sollicitudin vulputate. Fusce vestibulum est a neque lobortis efficitur. Nam maximus sed diam et vestibulum. Quisque a semper libero, non rutrum ligula. Pellentesque et elit ullamcorper, tincidunt mauris a, maximus ex. Fusce consectetur orci et eros ullamcorper ultricies. Nam ac magna bibendum dolor iaculis fermentum. Praesent quis leo ac dolor ullamcorper convallis. Vestibulum luctus ultrices est, nec pretium ante vestibulum et. Donec tristique tincidunt nisi, vel ullamcorper ipsum ultricies in."
    description.classList.add("page-two-description");

    const descriptionContainer = document.createElement("div");
    descriptionContainer.classList.add("page-two-description-container");
    descriptionContainer.appendChild(description);

    const image = document.createElement("img");
    image.classList.add("page-two-image");
    image.src = Image;


    pageThree.appendChild(header);
    pageThree.appendChild(descriptionContainer);
    pageThree.appendChild(image);

    const main = document.querySelector("#content");
    main.appendChild(pageThree);
}

export { thirdPage };