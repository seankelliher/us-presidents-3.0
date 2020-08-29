function emptyCheck() {
    //Retrive the "president" id div.
    const presidents = document.getElementById("presidents");

    //Gather all "divs" within "president".
    const childOne = presidents.querySelectorAll("div");

    //Convert to "real" array.
    const childOneArray = Array.from(childOne);

    //Check length. If length is zero, create and display message.
    if (childOneArray.length === 0) {
        const h2 = document.createElement("h2");
        h2.textContent = "No presidents match this combination.";
        h2.className = "selected";
        presidents.appendChild(h2);
    }
}

export {emptyCheck};