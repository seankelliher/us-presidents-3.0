import {allPresidents} from "./presidents.js";

function createPresidentsThird(index, propValue) {

    //Variables to make the below if/else statements shorter.
    const name = index.name;
    const num = index.number;
    const year = index.yearInaugurated;

    //Retrive the "president" id div.
    const presidents = document.getElementById("presidents");

    //Create elements for it.
    const pres = document.createElement("div");
    pres.className = "president";
    const text = document.createElement("div");
    text.className = "text";
    const fig = document.createElement("figure");
    const image = document.createElement("img");
    const h3 = document.createElement("h3");
    const para1 = document.createElement("p");
    const para2 = document.createElement("p");

    //Assign values to elements.
    image.src = index.photo;
    h3.textContent = `${name}`;
    para1.textContent = `${num} president, inaugurated ${year}`;

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

function createPresidentsSecond(propValue) {

    allPresidents.forEach(function (index) {

        //Looping through allPresidents.
        //If president's prop. value = regex'd clicked li id, display president.
        if (index.birthplaceRegion === propValue) {
            createPresidentsThird(index, propValue);
        } else if (index.partyAffiliation === propValue) {
            createPresidentsThird(index, propValue);
        } else if (index.ageInauguratedGroup === propValue) {
            createPresidentsThird(index, propValue);
        } else if (index.maritalStatus === propValue) {
            createPresidentsThird(index, propValue);
        } else if (index.previousJobType === propValue) {
            createPresidentsThird(index, propValue);
        } else if (index.timeInOfficeGroup === propValue) {
            createPresidentsThird(index, propValue);
        } else if (index.reasonForDeparture === propValue) {
            createPresidentsThird(index, propValue);
        }
    });
}

//Create elements in #presidents.
function createPresidentsFirst(item) {

    //Regex the clicked li id to form string.
    //For example: new-england -> New England.
    //Search for first letter of first word, and "-" letter.
    const propValue = item.replace(/^[a-z]|-([a-z])/gi, function (whole) {

        //Make first letter each word upper case.
        const withDashes = whole.toUpperCase();

        //Remove dashes. Replace with spaces. Make string.
        const removeDashes = /-/g;
        const close = withDashes.replace(removeDashes, " ");
        return close.toString();
    });
    createPresidentsSecond(propValue);
}

export {createPresidentsFirst};