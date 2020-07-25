function createList() {
    this.forEach(function (item) {
        const ulist = document.getElementById("snl");
        const litem = document.createElement("li");
        litem.textContent = item;
        ulist.appendChild(litem);
    });
}

export {createList};