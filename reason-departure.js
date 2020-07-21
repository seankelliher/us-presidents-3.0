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
    if (index.reasonDeparture === "Died") {
        died.push(index.number);
    } else if (index.reasonDeparture === "Lost Election") {
        lostElection.push(index.number);
    } else if (index.reasonDeparture === "Not Nominated") {
        notNominated.push(index.number);
    } else if (index.reasonDeparture === "Resigned") {
        resigned.push(index.number);
    } else if (index.reasonDeparture === "Retired") {
        retired.push(index.number);
    } else if (index.reasonDeparture === "Term-Limited") {
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