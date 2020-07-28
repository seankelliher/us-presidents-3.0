import allPresidents from "./presidents.js";

//Placeholder variables for arrays.
const forties = [];
const fifties = [];
const sixties = [];
const seventies = [];

//Sort all presidents into "age inaugurated" arrays.
allPresidents.forEach(function (index) {
    if ((index.ageInaugurated >= 40) && (index.ageInaugurated < 50)) {
        forties.push(index.number);
    } else if ((index.ageInaugurated >= 50) && (index.ageInaugurated < 60)) {
        fifties.push(index.number);
    } else if ((index.ageInaugurated >= 60) && (index.ageInaugurated < 70)) {
        sixties.push(index.number);
    } else if ((index.ageInaugurated >= 70) && (index.ageInaugurated < 80)) {
        seventies.push(index.number);
    }
});

export {
    forties,
    fifties,
    sixties,
    seventies
};