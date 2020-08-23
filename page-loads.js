import {primaryNav, birthplaceNav, createNav} from "./nav.js";
import {badgesFull} from "./badges-full.js";


function pageLoads() {

    //Load the "primary nav".
    createNav.apply(primaryNav, ["pnl"]);

    //Load the "birthplace nav".
    createNav.apply(birthplaceNav, ["snl"]);

    //Retrieve the "birthplace" id.
    const birthplaceId = document.getElementById("birthplace");

    //Add the "selected" class.
    birthplaceId.classList.add("selected");

    //Create elements in #presidents div.
    //Create with the "birthplace" values.
    badgesFull(birthplaceId.id);
}

export {pageLoads};