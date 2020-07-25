import {createList} from "./elements.js";
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
    if (event.target.id === "birth") {
        createList.apply(birthStateList);
    } else if (event.target.id === "party") {
        createList.apply(partyAffiliationList);
    } else if (event.target.id === "age") {
        createList.apply(ageInauguratedList);
    } else if (event.target.id === "marital") {
        createList.apply(maritalStatusList);
    } else if (event.target.id === "previous") {
        createList.apply(previousJobGroupList);
    } else if (event.target.id === "months") {
        createList.apply(monthsInOfficeList);
    } else if (event.target.id === "departure") {
        createList.apply(reasonDepartureList);
    }
});