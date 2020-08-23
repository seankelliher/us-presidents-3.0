//This array is used to create the "primary navigation".
const primaryNav = [
    "Birthplace",
    "Party affiliation",
    "Age when inaugurated",
    "Marital status",
    "Previous job type",
    "Time in office",
    "Reason for departure"
];

//These arrays are used to create the "secondary navigation".
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

const partyAffiliationNav = [
    "Democratic",
    "Democratic Republican",
    "Federalist",
    "Republican",
    "Whig",
    "Unaffiliated"
];

const ageInauguratedNav = [
    "Forties",
    "Fifties",
    "Sixties",
    "Seventies"
];

const maritalStatusNav = [
    "Married",
    "Never married",
    "Widower"
];

const previousJobTypeNav = [
    "Cabinet",
    "Congress",
    "Diplomatic",
    "Governor",
    "Military",
    "Executive Office",
    "Private industry"
];

const timeInOfficeNav = [
    "Less than one term",
    "One term",
    "Between one and two terms",
    "Two terms",
    "More than two terms"
];

const reasonForDepartureNav = [
    "Died",
    "Lost election",
    "Not nominated",
    "Resigned",
    "Retired",
    "Term limited"
];

//Create items in primary and secondary navs.
function createNav(navId) {
    this.forEach(function (item) {
        //Retrieve the ul - either "pnl" or "snl".
        const navList = document.getElementById(navId);

        //Create the li element.
        const navListItem = document.createElement("li");

        //Assign its text content from value in "primaryNav" array.
        navListItem.textContent = item;

        //Regex the value to form the li element's id.
        //For example: New England -> new-england.
        const lowerCase = item.toLowerCase();
        const removeSpace = /\s/g;
        const addDash = lowerCase.replace(removeSpace, "-");
        navListItem.id = addDash;

        //Append the li element to the ul.
        navList.appendChild(navListItem);
    });
}

//Removes items in secondary nav or presidents id.
//While loop: if firstChild exists, remove lastChild. Keep going until false.
function clearNav(item) {
    const toClear = document.getElementById(item);
    while (toClear.firstChild) {
        toClear.removeChild(toClear.lastChild);
    }
}

//Un-highlight items, primary or secondary nav.
function unHighlightNav(navId) {
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

//Highlight clicked item in primary or secondary nav.
function highlightNav(item) {
    item.classList.add("selected");
}

export {
    primaryNav,
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
};