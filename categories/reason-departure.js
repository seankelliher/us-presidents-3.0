import allPresidents from "./presidents.js";

//Placeholder variables for arrays.
const died = [];
const lostElection = [];
const notNominated = [];
const resigned = [];
const retired = [];
const termLimited = [];

//Sort all presidents into "party" arrays.
allPresidents.forEach(function (index) {
    if (index.reasonForDeparture === "Died") {
        died.push(index.number);
    } else if (index.reasonForDeparture === "Lost Election") {
        lostElection.push(index.number);
    } else if (index.reasonForDeparture === "Not Nominated") {
        notNominated.push(index.number);
    } else if (index.reasonForDeparture === "Resigned") {
        resigned.push(index.number);
    } else if (index.reasonForDeparture === "Retired") {
        retired.push(index.number);
    } else if (index.reasonForDeparture === "Term-Limited") {
        termLimited.push(index.number);
    }
});

export {
    died,
    lostElection,
    notNominated,
    resigned,
    retired,
    termLimited
};