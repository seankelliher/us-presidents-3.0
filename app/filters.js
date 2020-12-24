import {checkEmpty} from "./empty.js";

function filterBadges() {
    "use strict";

    const secondaryList = document.getElementById("secondary-list");

    secondaryList.addEventListener("click", function (event) {

        const etc = event.target.textContent;
        const regex = /\s/g;
        const converted = etc.replace(regex, "-").toLowerCase();

        //Gather "p" tags inside "left" class.
        const leftParas = document.querySelectorAll(".left p");

        //Convert to "real" array. (works without doing too).
        const leftParasArray = Array.from(leftParas);

        //Loop through "p" tags.
        leftParasArray.forEach(function (para) {
            if (para.className === converted) {
                para.parentElement.parentElement.style.display = "flex";
            } else {
                para.parentElement.parentElement.style.display = "none";
            }
        });
        checkEmpty(); //testing
    });
}

export {filterBadges};