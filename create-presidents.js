import {allPresidents} from "./presidents.js";

function createPresidentsThird(index, propValue) {

    //Variables to make the below if/else statements shorter.
    const num = index.number;
    const name = index.name;

    //Retrive the "president" id div.
    const presidents = document.getElementById("presidents");

    //Create elements for it.
    const fig = document.createElement("figure");
    const figcap = document.createElement("figcaption");
    const image = document.createElement("img");
    const span1 = document.createElement("span");
    const span2 = document.createElement("span");

    //Assign values to elements.
    image.src = index.photo;
    span1.textContent = `${num} ${name}`;

    if (index.birthplaceRegion === propValue) {
        const birth = index.birthplace;
        span2.textContent = `${birth}`;
    } else if (index.partyAffiliation === propValue) {
        const party = index.partyAffiliation;
        span2.textContent = `${party}`;
    } else if (index.ageInauguratedGroup === propValue) {
        const age = index.ageInaugurated;
        span2.textContent = `${age}`;
    } else if (index.maritalStatus === propValue) {
        const marital = index.maritalStatus;
        span2.textContent = `${marital}`;
    } else if (index.previousJobType === propValue) {
        const prev = index.previousJob;
        span2.textContent = `${prev}`;
    } else if (index.timeInOfficeGroup === propValue) {
        const tio = index.timeInOffice;
        span2.textContent = `${tio}`;
    } else if (index.reasonForDeparture === propValue) {
        const depart = index.reasonForDeparture;
        const note = index.notes;
        span2.textContent = `${depart} ${note}`;
    }

    //Append elements.
    fig.appendChild(image);
    figcap.appendChild(span1);
    figcap.appendChild(span2);
    fig.appendChild(figcap);
    presidents.appendChild(fig);
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
