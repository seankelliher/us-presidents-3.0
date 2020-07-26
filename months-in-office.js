import allPresidents from "./presidents.js";

//Placeholder variables for arrays.
const lessThan4 = [];
const exactly4 = [];
const between4And8 = [];
const exactly8 = [];
const moreThan8 = [];

//Sort all presidents into "age inaugurated" arrays.
allPresidents.forEach(function (index) {
    if (index.monthsInOffice < 48) {
        lessThan4.push(index.number);
    } else if (index.monthsInOffice === 48) {
        exactly4.push(index.number);
    } else if ((index.monthsInOffice >= 49) && (index.monthsInOffice < 96)) {
        between4And8.push(index.number);
    } else if (index.monthsInOffice === 96) {
        exactly8.push(index.number);
    } else if (index.monthsInOffice > 96) {
        moreThan8.push(index.number);
    }
});

export {
    lessThan4,
    exactly4,
    between4And8,
    exactly8,
    moreThan8
};