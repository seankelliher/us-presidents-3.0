import {clearSecondaryNav, chooseSecondaryNav} from "./app/nav.js";
import {clearGallery, createBadges} from "./app/badges.js";
import {filterBadges} from "./app/filters.js";
import {hideEmpty} from "./app/empty.js";

document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    //Loads "birthplace" as default secondary nav.
    chooseSecondaryNav("birthplace");
    createBadges("birthplace");
    filterBadges();
    hideEmpty();

    //Retrieve primary list.
    const primaryList = document.getElementById("primary-list");

    //Add event listener.
    primaryList.addEventListener("click", function (event) {
        clearSecondaryNav();
        chooseSecondaryNav(event.target.id);
        clearGallery();
        createBadges(event.target.id);
    });
});