function hideEmpty() {
    "use strict";

    const emptyMsg = document.getElementById("empty-msg");
    emptyMsg.style.display = "none";
}


function checkEmpty() {
    "use strict";

    const presidents = document.getElementsByClassName("president");
    const presidentsArray = Array.from(presidents);

    const collection = [];

    presidentsArray.forEach(function (president) {
        if (president.style.display === "none") {
            collection.push("none");
        }
    });

    if (collection.length === 45) {
        const emptyMsg = document.getElementById("empty-msg");
        emptyMsg.style.display = "block";
    }

    if (collection.length !== 45) {
        const emptyMsg = document.getElementById("empty-msg");
        emptyMsg.style.display = "none";
    }
}
export{hideEmpty, checkEmpty};