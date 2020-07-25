import {clearSnl, createSnl} from "./elements.js";
import {
    birthStateList,
    partyAffiliationList,
    ageInauguratedList,
    maritalStatusList,
    previousJobGroupList,
    monthsInOfficeList,
    reasonDepartureList
} from "./lists.js";

document.getElementById("pnl").addEventListener("click", function (event) {
    clearSnl();
    if (event.target.id === "birth") {
        createSnl.apply(birthStateList);
    } else if (event.target.id === "party") {
        createSnl.apply(partyAffiliationList);
    } else if (event.target.id === "age") {
        createSnl.apply(ageInauguratedList);
    } else if (event.target.id === "marital") {
        createSnl.apply(maritalStatusList);
    } else if (event.target.id === "previous") {
        createSnl.apply(previousJobGroupList);
    } else if (event.target.id === "months") {
        createSnl.apply(monthsInOfficeList);
    } else if (event.target.id === "departure") {
        createSnl.apply(reasonDepartureList);
    }
});