import {allPresidents} from "./presidents.js";

function badgesFull(etid) {

    allPresidents.forEach(function (index) {

        //Variables to make the below if/else statements shorter.
        const name = index.name;
        const num = index.number;
        const year = index.yearInaugurated;

        //Retrive the "president" id div.
        const presidents = document.getElementById("presidents");

        //Create elements for it.
        const pres = document.createElement("div");
        const text = document.createElement("div");
        const fig = document.createElement("figure");
        const image = document.createElement("img");
        const h3 = document.createElement("h3");
        const para1 = document.createElement("p");
        const para2 = document.createElement("p");

        //Assign needed class names.
        pres.className = "president";
        text.className = "text";

        //Assign values to elements.
        //"Universal" elements: badges get these regardless of category chosen.
        image.src = index.photo;
        h3.textContent = `${name}`;
        para1.textContent = `${num} president, inaugurated ${year}`;

        //Get secondary nav heading.
        const secondaryHeading = document.getElementById("secondary-heading");

        //"Specific" elements: badges get these only if a category is chosen.
        if (etid === "birthplace") {
            const birth = index.birthplace;
            para2.textContent = `Born in ${birth}`;
            secondaryHeading.textContent = "Filter by region";
        } else if (etid === "party-affiliation") {
            const party = index.partyAffiliation;
            para2.textContent = `Party: ${party}`;
            secondaryHeading.textContent = "Filter by party";
        } else if (etid === "age-when-inaugurated") {
            const age = index.ageInaugurated;
            para2.textContent = `${age} years old`;
            secondaryHeading.textContent = "Filter by decade";
        } else if (etid === "marital-status") {
            const marital = index.maritalStatus;
            para2.textContent = `${marital}`;
            secondaryHeading.textContent = "Filter by status";
        } else if (etid === "previous-job-type") {
            const prev = index.previousJob;
            para2.textContent = `Previous job: ${prev}`;
            secondaryHeading.textContent = "Filter by experience";
        } else if (etid === "time-in-office") {
            const tio = index.timeInOffice;
            para2.textContent = `${tio} in office`;
            secondaryHeading.textContent = "Filter by terms";
        } else if (etid === "reason-for-departure") {
            const depart = index.reasonForDeparture;
            secondaryHeading.textContent = "Filter by reason";
            const note = index.notes;
            if (note === "") {
                para2.textContent = `${depart}`;
            } else {
                para2.textContent = `${depart} (${note})`;
            }
        }

        //Append elements.
        fig.appendChild(image);
        pres.appendChild(fig);
        text.appendChild(h3);
        text.appendChild(para1);
        text.appendChild(para2);
        pres.appendChild(text);
        presidents.appendChild(pres);
    });
}

export {badgesFull};