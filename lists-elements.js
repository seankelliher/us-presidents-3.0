//"Un-highlights" any "li" items in the "primary" nav list.
function clearPnl() {
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

//Removes any "li" items from the "secondary" nav list.
//While loop: if firstChild exists, remove lastChild. Keep going until false.
function clearSnl() {
    const snl = document.getElementById("snl");
    while (snl.firstChild) {
        snl.removeChild(snl.lastChild);
    }
}

//"Highlights" clicked "li" item "primary" nav list.
function selectPnl(item) {
        item.classList.add("selected");
}

//Creates and appends "li" items to the "secondary" nav list.
function createSnl() {
    this.forEach(function (item) {
        const snl = document.getElementById("snl");
        const snlListItem = document.createElement("li");
        snlListItem.textContent = item;
        const lowerCase = item.toLowerCase();
        const removeSpace = /\s|,\s/g;
        const addDash = lowerCase.replace(removeSpace, "-");
        snlListItem.id = addDash;
        snl.appendChild(snlListItem);
    });
}

export {clearPnl, clearSnl, selectPnl, createSnl};