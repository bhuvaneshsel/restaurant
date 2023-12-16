import './style.css';
import Image from './images/cat2.png';

import { firstPage } from './pageone.js';
import { secondPage } from './pagetwo.js';
import { thirdPage } from './pagethree.js';

let isPageOne = true;
let isPageTwo = false;
let isPageThree = false;
firstPage();

const main = document.querySelector("#content");

const home = document.querySelector(".home");
home.addEventListener("click", () => {
    if (isPageOne == false) {
        main.removeChild(main.firstChild);
        firstPage();
        isPageOne = true;
        isPageTwo = false;
        isPageThree = false;
    }
});

const menu = document.querySelector(".menu");
menu.addEventListener("click", () => {
    if (isPageTwo == false) {
        main.removeChild(main.firstChild);
        secondPage();
        isPageTwo = true;
        isPageOne = false;
        isPageThree = false;
        console.log(isPageTwo);
    }
});

const contact = document.querySelector(".contact");
contact.addEventListener("click", () => {
    if (isPageThree == false) {
        main.removeChild(main.firstChild);
        thirdPage();
        isPageThree = true;
        isPageTwo = false;
        isPageOne = false;

        console.log(isPageTwo);
    }
});

