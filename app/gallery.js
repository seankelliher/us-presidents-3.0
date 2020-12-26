import {allPresidents} from "./presidents.js";

//Clear presidents from gallery.
//While loop: if firstChild exists, remove lastChild. Keep going until false.
function clearGallery() {
    "use strict";

    const gallery = document.getElementById("gallery");
    while (gallery.firstChild) {
        gallery.removeChild(gallery.lastChild);
    }
}

//Create presidents in gallery.
//Receive id for list item user clicked.
function createGallery(etid) {
    "use strict";

    allPresidents.forEach(function (index) {

        //Retrive the gallery.
        const gallery = document.getElementById("gallery");

        //Create president div.
        const president = document.createElement("div");
        president.className = "president";

        //Create figure.
        const figure = document.createElement("figure");

        //Create left div.
        const left = document.createElement("div");
        left.className = "left";

        //Create right div.
        const right = document.createElement("div");
        right.className = "right";

        //Create note div.
        const note = document.createElement("div");
        note.className = "note";

        //Create "content" elements.
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

        //Receive id from list item user clicked.
        //Assign matching text and class.
        presTrait.textContent = index[etid];
        presTrait.className = index[etid + "Group"];

        //Append elements.
        figure.appendChild(presPhoto);
        left.appendChild(presName);
        left.appendChild(presTrait);
        right.appendChild(presNumber);
        note.appendChild(presInaug);

        //Append more elements.
        president.appendChild(figure);
        president.appendChild(left);
        president.appendChild(right);
        president.appendChild(note);

        //Append complete presidents div to gallery.
        gallery.appendChild(president);
    });
}

export {clearGallery, createGallery};