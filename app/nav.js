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
};