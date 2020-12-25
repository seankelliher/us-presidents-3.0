//List items for secondary Navs.
const birthplaceNav = [
    "New England",
    "Mideast",
    "Great Lakes",
    "Plains",
    "Southeast",
    "Southwest",
    "Rocky Mountain",
    "Far West"
];

const partyNav = [
    "Democratic",
    "Democratic Republican",
    "Federalist",
    "Republican",
    "Whig",
    "Unaffiliated"
];

const ageNav = [
    "Forties",
    "Fifties",
    "Sixties",
    "Seventies"
];

const maritalNav = [
    "Married",
    "Never married",
    "Widower"
];

const previousNav = [
    "Cabinet",
    "Congress",
    "Diplomatic",
    "Governor",
    "Military",
    "Executive Office",
    "Private industry"
];

const termsNav = [
    "Under One",
    "One",
    "One to Two",
    "Two",
    "More Than Two"
];

const departureNav = [
    "Died",
    "Lost election",
    "Not nominated",
    "Resigned",
    "Retired",
    "Term limited"
];

//Clears list items in secondary nav.
//While loop: if firstChild exists, remove lastChild. Keep going until false.
function clearSecondaryNav() {
    const secondaryList = document.getElementById("secondary-list");
    while (secondaryList.firstChild) {
        secondaryList.removeChild(secondaryList.lastChild);
    }
}

//Creates list items for secondary nav.
function createSecondaryNav(array) {
    array.forEach(function (item) {
        //Retrieve the ul - either "primary" or "secondary".
        const secondaryList = document.getElementById("secondary-list");

        //Create the li element.
        const secondaryListItem = document.createElement("li");

        //Assign its text content from value in "primaryNav" array.
        secondaryListItem.textContent = item;

        //Append the li element to the ul.
        secondaryList.appendChild(secondaryListItem);
    });
}

//Receives list item user clicked in primary nav.
//Places heading in secondary nav.
//Invokes (above) function to create list items in secondary nav.
function chooseSecondaryNav(etid) {
    "use strict";

    const secondaryHeading = document.getElementById("secondary-heading");

    if (etid === "birthplace") {
        createSecondaryNav(birthplaceNav);
        secondaryHeading.textContent = "Filter by area";
    }
    if (etid === "party") {
        createSecondaryNav(partyNav);
        secondaryHeading.textContent = "Filter by party";
    }
    if (etid === "age") {
        createSecondaryNav(ageNav);
        secondaryHeading.textContent = "Filter by peers";
    }
    if (etid === "marital") {
        createSecondaryNav(maritalNav);
        secondaryHeading.textContent = "Filter by status";
    }
    if (etid === "previous") {
        createSecondaryNav(previousNav);
        secondaryHeading.textContent = "Filter by type";
    }
    if (etid === "terms") {
        createSecondaryNav(termsNav);
        secondaryHeading.textContent = "Filter by terms";
    }
    if (etid === "departure") {
        createSecondaryNav(departureNav);
        secondaryHeading.textContent = "Filter by cause";
    }
}

//Highlight clicked item in primary and secondary lists.
function highlightListItem(list, clickedItem) {
    "use strict";
    
    //Gather all items inside a list.
    const listItems = list.querySelectorAll("li");

    //Convert to "real" array (works without too).
    const listItemsArray = Array.from(listItems);

    //Loop through array, remove "selected" class.
    listItemsArray.forEach(function (item) {
        const selected = item.classList.contains("selected");
        if (selected === true) {
            item.classList.remove("selected");
        }
    });
    //Add "selected" class to clicked item.
    clickedItem.classList.add("selected");
}

export {clearSecondaryNav, chooseSecondaryNav, createSecondaryNav, highlightListItem};