import {
    lowlightPnl,
    highlightPnl,
    clearSnl,
    createNavList,
    navPnl,
    navSnl
} from "./nav/elements.js";

import {
    primaryNav,
    birthplaceNav,
    partyAffiliationNav,
    ageWhenInauguratedNav,
    maritalStatusNav,
    previousJobTypeNav,
    yearsAsPresidentNav,
    reasonForDepartureNav
} from "./nav/lists.js";

//Create "primary" nav list.
createNavList.apply(primaryNav, navPnl);

//Create "secondary" nav list.
document.getElementById("pnl").addEventListener("click", function (event) {
    lowlightPnl();
    highlightPnl(event.target);
    clearSnl();

    const etid = event.target.id;

    if (etid === "birthplace") {
        createNavList.apply(birthplaceNav, navSnl);
    } else if (etid === "party-affiliation") {
        createNavList.apply(partyAffiliationNav, navSnl);
    } else if (etid === "age-when-inaugurated") {
        createNavList.apply(ageWhenInauguratedNav, navSnl);
    } else if (etid === "marital-status") {
        createNavList.apply(maritalStatusNav, navSnl);
    } else if (etid === "previous-job-type") {
        createNavList.apply(previousJobTypeNav, navSnl);
    } else if (etid === "years-as-president") {
        createNavList.apply(yearsAsPresidentNav, navSnl);
    } else if (etid === "reason-for-departure") {
        createNavList.apply(reasonForDepartureNav, navSnl);
    }
});