//Removes "li" elements from list.
//While loops  checks for firstChild, if true, removes lateChild.
//This continues until condition if false (aka - all child elements removed).
function clearSnl() {
    const ulist = document.getElementById("snl");
    while (ulist.firstChild) {
        ulist.removeChild(ulist.lastChild);
    }
}

//Creates and appends "li" elements to list.
function createSnl() {
    this.forEach(function (item) {
        const ulist = document.getElementById("snl");
        const litem = document.createElement("li");
        litem.textContent = item;
        ulist.appendChild(litem);
    });
}

export {clearSnl, createSnl};