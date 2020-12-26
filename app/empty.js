//Hides "empty" message.
function hideEmpty() {
    "use strict";

    const emptyMsg = document.getElementById("empty-msg");
    emptyMsg.style.display = "none";
}

//Checks if no presidents match list items user clicks.
//Displays "empty" message, if needed.
function checkEmpty() {
    "use strict";

    //Gather all president divs.
    const presidents = document.getElementsByClassName("president");

    //Convert to "real" array. (works without doing too).
    const presidentsArray = Array.from(presidents);

    //Collection array.
    const collection = [];

    //Loop through president divs.
    //If div is hidden, add "none" to collection array (above).
    presidentsArray.forEach(function (president) {
        if (president.style.display === "none") {
            collection.push("none");
        }
    });

    //If all presidents are hidden, display "empty" message.
    //NOTE: adjust this number, when more presidents added to component.
    const emptyMsg = document.getElementById("empty-msg");

    if (collection.length === 45) {
        emptyMsg.style.display = "block";
    }

    //If all presidents are not hidden, hide "empty" message.
    if (collection.length !== 45) {
        emptyMsg.style.display = "none";
    }
}

export {hideEmpty, checkEmpty};