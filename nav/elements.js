//"Un-highlights" any "li" items in the "primary" nav list.
function lowlightPnl() {
    const pnl = document.getElementById("pnl");
    const pnlListItems = pnl.querySelectorAll("li");
    const pnlListItemsArray = Array.from(pnlListItems);

    pnlListItemsArray.forEach(function (item) {
        const selected = item.classList.contains("selected");
        if (selected === true) {
            item.classList.remove("selected");
        }
    });
}

//"Highlights" clicked "li" item "primary" nav list.
function highlightPnl(item) {
        item.classList.add("selected");
}

//Removes any "li" items from the "secondary" nav list.
//While loop: if firstChild exists, remove lastChild. Keep going until false.
function clearSnl() {
    const snl = document.getElementById("snl");
    while (snl.firstChild) {
        snl.removeChild(snl.lastChild);
    }
}

//Creates and appends "li" items to the "primary" or secondary" nav lists.
function createNavList(navId) {
    this.forEach(function (item) {
        const navList = document.getElementById(navId);
        const navListItem = document.createElement("li");
        navListItem.textContent = item;
        const lowerCase = item.toLowerCase();
        const removeSpace = /\s|,\s/g;
        const addDash = lowerCase.replace(removeSpace, "-");
        navListItem.id = addDash;
        navList.appendChild(navListItem);
    });
}

const navPnl = ["pnl"];
const navSnl = ["snl"];

export {lowlightPnl, highlightPnl, clearSnl, createNavList, navPnl, navSnl};