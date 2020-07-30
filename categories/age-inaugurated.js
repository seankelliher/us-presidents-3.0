import allPresidents from "./presidents.js";

//Placeholder variables for arrays.
const forties = [];
const fifties = [];
const sixties = [];
const seventies = [];

//Sort all presidents into "age when inaugurated" arrays.
allPresidents.forEach(function (index) {
    const awi = ageWhenInaugurated;
    if ((index.awi >= 40) && (index.awi < 50)) {
        forties.push(index.number);
    } else if ((index.awi >= 50) && (index.awi < 60)) {
        fifties.push(index.number);
    } else if ((index.awi >= 60) && (index.awi < 70)) {
        sixties.push(index.number);
    } else if ((index.awi >= 70) && (index.awi < 80)) {
        seventies.push(index.number);
    }
});

export {
    forties,
    fifties,
    sixties,
    seventies
};