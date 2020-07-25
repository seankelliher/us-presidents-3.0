//Removes "li" elements from list.
//While loops  checks for firstChild, if true, removes lateChild.
//This continues until condition if false (aka - all child elements removed).
function clearSnl() {
    const snl = document.getElementById("snl");
    while (snl.firstChild) {
        snl.removeChild(snl.lastChild);
    }
}

//Creates and appends "li" elements to list.
function createSnl() {
    this.forEach(function (item) {
        const snl = document.getElementById("snl");
        const litem = document.createElement("li");
        litem.textContent = item;
        snl.appendChild(litem);
    });
}

export {clearSnl, createSnl};