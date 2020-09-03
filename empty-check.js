function emptyCheck() {
    //Retrive the "president" id div.
    const presidents = document.getElementById("presidents");

    //Gather all "divs" within "president".
    const childOne = presidents.querySelectorAll("div");

    //Convert to "real" array.
    const childOneArray = Array.from(childOne);

    //Check length. If length is zero, create and display message.
    if (childOneArray.length === 0) {
        const para = document.createElement("p");
        para.textContent = "No presidents match this combination.";
        para.className = "selected";
        presidents.appendChild(para);
    }
}

export {emptyCheck};