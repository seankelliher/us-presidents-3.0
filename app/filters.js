import {checkEmpty} from "./empty.js";

//This module watches secondary list for clicks.
//Shows and hides president divs in gallery.
function filterGallery() {
    "use strict";

    //Get the secondary list.
    const secondaryList = document.getElementById("secondary-list");

    //Add event listener. When user clicks...
    secondaryList.addEventListener("click", function (event) {

        //Get the target list item's text content.
        //Replace space with dash. Make lower case.
        //For example: New England -> new-england.
        const etc = event.target.textContent;
        const regex = /\s/g;
        const converted = etc.replace(regex, "-").toLowerCase();

        //Gather "p" tags inside "left" class.
        const leftParas = document.querySelectorAll(".left p");

        //Convert to "real" array. (works without doing too).
        const leftParasArray = Array.from(leftParas);

        //Loop through "p" tags.
        //If "p" tag's class name === li's converted text content,
        //For example: new-england === new-england.
        //Get "president" div and display it (flex).
        //If not, get "president" div and hide it.
        leftParasArray.forEach(function (para) {
            if (para.className === converted) {
                para.parentElement.parentElement.style.display = "flex";
            } else {
                para.parentElement.parentElement.style.display = "none";
            }
        });
        checkEmpty();
    });
}

export {filterGallery};