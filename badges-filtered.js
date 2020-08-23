import {allPresidents} from "./presidents.js";

//For clarity: read this file from bottom to top.
//Functions are invoked in 1, 2, 3 order.

function badgesFiltered3(index, propValue) {

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

    //"Specific" elements: badges get these only if a category is chosen.
    if (index.birthplaceRegion === propValue) {
        const birth = index.birthplace;
        para2.textContent = `Born in ${birth}`;
    } else if (index.partyAffiliation === propValue) {
        const party = index.partyAffiliation;
        para2.textContent = `Party: ${party}`;
    } else if (index.ageInauguratedGroup === propValue) {
        const age = index.ageInaugurated;
        para2.textContent = `${age} years old`;
    } else if (index.maritalStatus === propValue) {
        const marital = index.maritalStatus;
        para2.textContent = `${marital}`;
    } else if (index.previousJobType === propValue) {
        const prev = index.previousJob;
        para2.textContent = `Previous job: ${prev}`;
    } else if (index.timeInOfficeGroup === propValue) {
        const tio = index.timeInOffice;
        para2.textContent = `${tio} in office`;
    } else if (index.reasonForDeparture === propValue) {
        const depart = index.reasonForDeparture;
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
}

function badgesFiltered2(propValue) {

    allPresidents.forEach(function (index) {

        //Loop through the allPresidents array.
        //If the value of a president's property, matches the regex'd "etid"...
        //Invoke the next function, and pass it the "index" and "propValue".
        if (index.birthplaceRegion === propValue) {
            badgesFiltered3(index, propValue);
        } else if (index.partyAffiliation === propValue) {
            badgesFiltered3(index, propValue);
        } else if (index.ageInauguratedGroup === propValue) {
            badgesFiltered3(index, propValue);
        } else if (index.maritalStatus === propValue) {
            badgesFiltered3(index, propValue);
        } else if (index.previousJobType === propValue) {
            badgesFiltered3(index, propValue);
        } else if (index.timeInOfficeGroup === propValue) {
            badgesFiltered3(index, propValue);
        } else if (index.reasonForDeparture === propValue) {
            badgesFiltered3(index, propValue);
        }
    });
}

//Create elements in #presidents div.
function badgesFiltered1(etid) {

    //Regex the "event.target.id" (etid). Find:
    //1. The first letter of the first word.
    //2. Anything with the pattern "-" and a letter.
    const propValue = etid.replace(/^[a-z]|-([a-z])/gi, function (whole) {

        //Make first letter of each word upper case.
        const withDashes = whole.toUpperCase();

        //Remove dashes.
        const removeDashes = /-/g;

        //Replace them with spaces.
        const close = withDashes.replace(removeDashes, " ");

        //Make it a string.
        return close.toString();
    });
    //Invoke the next function.
    badgesFiltered2(propValue);
}

export {badgesFiltered1};