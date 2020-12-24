import {allPresidents} from "./presidents.js";

//Clears badges in gallery div.
//While loop: if firstChild exists, remove lastChild. Keep going until false.
function clearGallery() {
    const gallery = document.getElementById("gallery");
    while (gallery.firstChild) {
        gallery.removeChild(gallery.lastChild);
    }
}

function createBadges(etid) {

    allPresidents.forEach(function (index) {

        //Retrive the "president" id div.
        const gallery = document.getElementById("gallery");

        //Create "containing" elements for it.
        const president = document.createElement("div");
        president.className = "president";

        const figure = document.createElement("figure");

        const left = document.createElement("div");
        left.className = "left";

        const right = document.createElement("div");
        right.className = "right";

        const note = document.createElement("div");
        note.className = "note";

        //Create "content" elements for it.
        const presPhoto = document.createElement("img");
        const presName = document.createElement("h3");
        const presNumber = document.createElement("p");
        const presInaug = document.createElement("p");
        const presTrait = document.createElement("p");

        //Assign content to "content" elements.
        presPhoto.src = index.photo;
        presName.textContent = index.name;
        presNumber.textContent = index.id;
        presInaug.textContent = index.yearInaugurated;

        //Set text content and class name based on list item user clicked.
        presTrait.textContent = index[etid];
        presTrait.className = index[etid + "Group"];

        //Append elements.
        figure.appendChild(presPhoto);
        left.appendChild(presName);
        left.appendChild(presTrait);
        right.appendChild(presNumber);
        note.appendChild(presInaug);

        president.appendChild(figure);
        president.appendChild(left);
        president.appendChild(right);
        president.appendChild(note);

        gallery.appendChild(president);
    });
}

export {clearGallery, createBadges};