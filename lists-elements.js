//"Un-highlights" any "li" items in the "primary" nav list.
function clearPnl() {
    const pnl = document.getElementById("pnl");
    const pnlItems = pnl.querySelectorAll("li");
    const pnlItemsArray = Array.from(pnlItems);

    pnlItemsArray.forEach(function (item) {
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
function selectPnl(thing) {
        thing.classList.add("selected");
}

//Creates and appends "li" items to the "secondary" nav list.
function createSnl() {
    this.forEach(function (item) {
        const snl = document.getElementById("snl");
        const litem = document.createElement("li");
        litem.textContent = item;
        snl.appendChild(litem);
    });
}

export {clearPnl, clearSnl, selectPnl, createSnl};