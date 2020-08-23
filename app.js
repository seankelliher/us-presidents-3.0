import {
    birthplaceNav,
    partyAffiliationNav,
    ageInauguratedNav,
    maritalStatusNav,
    previousJobTypeNav,
    timeInOfficeNav,
    reasonForDepartureNav,
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
    } else if (etid === "party-affiliation") {
        createNav.apply(partyAffiliationNav, ["snl"]);
    } else if (etid === "age-when-inaugurated") {
        createNav.apply(ageInauguratedNav, ["snl"]);
    } else if (etid === "marital-status") {
        createNav.apply(maritalStatusNav, ["snl"]);
    } else if (etid === "previous-job-type") {
        createNav.apply(previousJobTypeNav, ["snl"]);
    } else if (etid === "time-in-office") {
        createNav.apply(timeInOfficeNav, ["snl"]);
    } else if (etid === "reason-for-departure") {
        createNav.apply(reasonForDepartureNav, ["snl"]);
    }
});

//Event listener, secondary nav.
document.getElementById("snl").addEventListener("click", function (event) {

    //Un-highlight items in secondary nav.
    unHighlightNav("snl");

    //Highlight clicked item in secondary nav.
    highlightNav(event.target);

    //Remove elements in #presidents div.
    clearNav("presidents");

    //Create elements in #presidents div.
    createPresidentsFirst(event.target.id);
});