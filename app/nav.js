//Items for secondary list.
const birthplaceItems = [
    "New England",
    "Mideast",
    "Great Lakes",
    "Plains",
    "Southeast",
    "Southwest",
    "Rocky Mountain",
    "Far West"
];

const partyItems = [
    "Democratic",
    "Democratic Republican",
    "Federalist",
    "Republican",
    "Whig",
    "Unaffiliated"
];

const ageItems = [
    "Forties",
    "Fifties",
    "Sixties",
    "Seventies"
];

const maritalItems = [
    "Married",
    "Never married",
    "Widower"
];

const previousItems = [
    "Cabinet",
    "Congress",
    "Diplomatic",
    "Governor",
    "Military",
    "Executive Office",
    "Private industry"
];

const termsItems = [
    "Under One",
    "One",
    "One to Two",
    "Two",
    "More Than Two"
];

const departureItems = [
    "Died",
    "Lost election",
    "Not nominated",
    "Resigned",
    "Retired",
    "Term limited"
];

//Clear items in secondary list.
//While loop: if firstChild exists, remove lastChild. Keep going until false.
function clearSecondaryNav() {
    "use strict";

    const secondaryList = document.getElementById("secondary-list");
    while (secondaryList.firstChild) {
        secondaryList.removeChild(secondaryList.lastChild);
    }
}

//Create list items for secondary list.
//Read below "chooseSecondaryNav" function first. Things will make more sense.
function createSecondaryNav(array) {
    "use strict";

    array.forEach(function (item) {

        //Retrieve the secondary list.
        const secondaryList = document.getElementById("secondary-list");

        //Create li element.
        const secondaryListItem = document.createElement("li");

        //Assign its text content.
        secondaryListItem.textContent = item;

        //Append the li element to the secondary list.
        secondaryList.appendChild(secondaryListItem);
    });
}

//Receive id for list item user clicked in primary list.
//Get an "Items" array from above.
//Send each item to "createSecondaryNav" function (above) to create list item.
//Place <h2> heading.
function chooseSecondaryNav(etid) {
    "use strict";

    const secondaryHeading = document.getElementById("secondary-heading");

    if (etid === "birthplace") {
        createSecondaryNav(birthplaceItems);
        secondaryHeading.textContent = "Filter by area";
    }
    if (etid === "party") {
        createSecondaryNav(partyItems);
        secondaryHeading.textContent = "Filter by party";
    }
    if (etid === "age") {
        createSecondaryNav(ageItems);
        secondaryHeading.textContent = "Filter by peers";
    }
    if (etid === "marital") {
        createSecondaryNav(maritalItems);
        secondaryHeading.textContent = "Filter by status";
    }
    if (etid === "previous") {
        createSecondaryNav(previousItems);
        secondaryHeading.textContent = "Filter by type";
    }
    if (etid === "terms") {
        createSecondaryNav(termsItems);
        secondaryHeading.textContent = "Filter by terms";
    }
    if (etid === "departure") {
        createSecondaryNav(departureItems);
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

export {
    clearSecondaryNav,
    chooseSecondaryNav,
    createSecondaryNav,
    highlightListItem
};