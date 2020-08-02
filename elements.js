import {
    primaryNav,
    birthplaceNav,
    partyAffiliationNav,
    ageWhenInauguratedNav,
    maritalStatusNav,
    previousJobTypeNav,
    yearsAsPresidentNav,
    reasonForDepartureNav
} from "./lists.js";

import {allPresidents} from "./presidents.js";

//Invoked below.
//Un-highlight items, primary or secondary nav.
function lowlightNav(navId) {
    const nav = document.getElementById(navId);
    const navListItems = nav.querySelectorAll("li");
    const navListItemsArray = Array.from(navListItems);

    navListItemsArray.forEach(function (item) {
        const selected = item.classList.contains("selected");
        if (selected === true) {
            item.classList.remove("selected");
        }
    });
}

//Invoked below.
//Highlight clicked item in primary or secondary nav.
function highlightNav(item) {
    item.classList.add("selected");
}

//Invoked below.
//Removes items in secondary nav or presidents id.
//While loop: if firstChild exists, remove lastChild. Keep going until false.
function clearItems(item) {
    const toClear = document.getElementById(item);
    while (toClear.firstChild) {
        toClear.removeChild(toClear.lastChild);
    }
}

//Invoked below.
//Create items in primary and secondary navs.
function createNavList(navId) {
    this.forEach(function (item) {
        //Retrieve the ul - either "pnl" or "snl".
        const navList = document.getElementById(navId);

        //Create the li element.
        const navListItem = document.createElement("li");

        //Assign its text content from value in "primaryNav" array.
        navListItem.textContent = item;

        //Regex the value to form the li element's id.
        const lowerCase = item.toLowerCase();
        const removeSpace = /\s|,\s/g;
        const addDash = lowerCase.replace(removeSpace, "-");
        navListItem.id = addDash;

        //Append the li element to the ul.
        navList.appendChild(navListItem);
    });
}

//Invoked below.
//Create elements in #presidents.
function createPresidents(item) {

    const replaced3 = item.replace(/^[a-z]|-([a-z])/gi, function (whole) {
        const withDashes = whole.toUpperCase();
        const removeDashes = /-/g;
        const close = withDashes.replace(removeDashes, " ");
        return close.toString();
    });

    allPresidents.forEach(function (index) {

        const presidents = document.getElementById("presidents");
        const para1 = document.createElement("p");
        presidents.appendChild(para1);

        if (index.birthplaceRegion === replaced3) {
            para1.textContent = index.number + index.name + index.birthplace;
        } else if (index.partyAffiliation === replaced3) {
            para1.textContent = index.number + index.name;
        } else if (index.ageWhenInaugurated === replaced3) {
            para1.textContent = index.number + index.name;
        } else if (index.maritalStatus === replaced3) {
            para1.textContent = index.number + index.name;
        } else if (index.previousJobType === replaced3) {
            para1.textContent = index.number + index.name + index.previousJob;
        } else if (index.monthsInOffice === replaced3) {
            para1.textContent = index.number + index.name;
        } else if (index.reasonForDeparture === replaced3) {
            para1.textContent = index.number + index.name + index.notes;
        }
    });
}

//Starting point for nav activity.
//Functions are defined above.
function directNavLists() {

    //Create primary nav elements.
    createNavList.apply(primaryNav, ["pnl"]);

    //Event listener, primary nav.
    document.getElementById("pnl").addEventListener("click", function (event) {

        //Un-highlight items in primary nav.
        lowlightNav(["pnl"]);

        //Highlight clicked item in primary nav.
        highlightNav(event.target);

        //Remove items in secondary nav.
        clearItems(["snl"]);

        //Create items in secondary nav.
        const etid = event.target.id;

        if (etid === "birthplace") {
            createNavList.apply(birthplaceNav, ["snl"]);
        } else if (etid === "party-affiliation") {
            createNavList.apply(partyAffiliationNav, ["snl"]);
        } else if (etid === "age-when-inaugurated") {
            createNavList.apply(ageWhenInauguratedNav, ["snl"]);
        } else if (etid === "marital-status") {
            createNavList.apply(maritalStatusNav, ["snl"]);
        } else if (etid === "previous-job-type") {
            createNavList.apply(previousJobTypeNav, ["snl"]);
        } else if (etid === "years-as-president") {
            createNavList.apply(yearsAsPresidentNav, ["snl"]);
        } else if (etid === "reason-for-departure") {
            createNavList.apply(reasonForDepartureNav, ["snl"]);
        }
    });

    //Event listener, secondary nav.
    document.getElementById("snl").addEventListener("click", function (event) {

        //Un-highlight items in primary nav.
        lowlightNav("snl");

        //Highlight clicked item in primary nav.
        highlightNav(event.target);

        //Remove elements in #presidents.
        clearItems("presidents");

        //Create elements in #presidents.
        createPresidents(event.target.id);
    });
}

export {directNavLists};