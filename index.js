import {clearSecondaryNav, chooseSecondaryNav, highlightListItem} from "./app/nav.js";
import {clearGallery, createGallery} from "./app/gallery.js";
import {filterGallery} from "./app/filters.js";
import {hideEmpty} from "./app/empty.js";

document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    //Retrieve lists and item.
    const primaryList = document.getElementById("primary-list");
    const secondaryList = document.getElementById("secondary-list");
    const birthplace = document.getElementById("birthplace");

    //When page loads, highlight "birthplace" in primary list.
    highlightListItem(primaryList, birthplace);

    //Create "birthplace" list in secondary nav.
    chooseSecondaryNav("birthplace");

    //Create "birthplace" items in gallery.
    createGallery("birthplace");

    //Invoke event listeners functions.
    filterGallery();
    hideEmpty();

    //Monitor lists for user clicks.
    primaryList.addEventListener("click", function (event) {
        clearSecondaryNav();
        chooseSecondaryNav(event.target.id);
        clearGallery();
        createGallery(event.target.id);
        highlightListItem(primaryList, event.target);
    });

    secondaryList.addEventListener("click", function (event) {
        highlightListItem(secondaryList, event.target);
    });
});