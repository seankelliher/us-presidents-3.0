import {clearPnl, clearSnl, selectPnl, createSnl} from "./elements.js";
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
    clearPnl();
    clearSnl();
    if (event.target.id === "birth") {
        selectPnl(event.target);
        createSnl.apply(birthStateList);
    } else if (event.target.id === "party") {
        selectPnl(event.target);
        createSnl.apply(partyAffiliationList);
    } else if (event.target.id === "age") {
        selectPnl(event.target);
        createSnl.apply(ageInauguratedList);
    } else if (event.target.id === "marital") {
        selectPnl(event.target);
        createSnl.apply(maritalStatusList);
    } else if (event.target.id === "previous") {
        selectPnl(event.target);
        createSnl.apply(previousJobGroupList);
    } else if (event.target.id === "months") {
        selectPnl(event.target);
        createSnl.apply(monthsInOfficeList);
    } else if (event.target.id === "departure") {
        selectPnl(event.target);
        createSnl.apply(reasonDepartureList);
    }
});