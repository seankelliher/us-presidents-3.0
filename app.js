import {
    birthplaceNav,
    partyNav,
    ageNav,
    maritalStatusNav,
    previousJobGroupNav,
    termsInOfficeNav,
    departureNav,
    createNav,
    clearNav,
    unHighlightNav,
    highlightNav
} from "./nav.js";

import {pageLoads} from "./page-loads.js";
import {badgesFull} from "./badges-full.js";
import {badgesFiltered1} from "./badges-filtered.js";

//When page loads, invoke this function.
pageLoads();

//Event listener, primary nav.
document.getElementById("pnl").addEventListener("click", function (event) {

    //Un-highlight items in primary nav.
    unHighlightNav(["pnl"]);

    //Highlight clicked item in primary nav.
    highlightNav(event.target);

    //Remove items in secondary nav.
    clearNav(["snl"]);

    //Remove elements in #presidents div.
    clearNav("presidents");

    //Create items in secondary nav.
    const etid = event.target.id;

    //Create elements in #presidents div.
    badgesFull(etid);

    if (etid === "birthplace") {
        createNav.apply(birthplaceNav, ["snl"]);
    } else if (etid === "party") {
        createNav.apply(partyNav, ["snl"]);
    } else if (etid === "age") {
        createNav.apply(ageNav, ["snl"]);
    } else if (etid === "marital-status") {
        createNav.apply(maritalStatusNav, ["snl"]);
    } else if (etid === "previous-job") {
        createNav.apply(previousJobGroupNav, ["snl"]);
    } else if (etid === "terms-in-office") {
        createNav.apply(termsInOfficeNav, ["snl"]);
    } else if (etid === "departure") {
        createNav.apply(departureNav, ["snl"]);
    }
});

//Event listener, secondary nav.
document.getElementById("snl").addEventListener("click", function (event) {

    const etid = event.target.id;

    //Un-highlight items in secondary nav.
    unHighlightNav("snl");

    //Highlight clicked item in secondary nav.
    highlightNav(event.target);

    //Remove elements in #presidents div.
    clearNav("presidents");

    //Create elements in #presidents div.
    badgesFiltered1(etid);
});