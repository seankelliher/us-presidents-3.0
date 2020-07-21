import allPresidents from "./presidents.js";

//Placeholder variables for arrays.
const lessthan48 = [];
const exactly48 = [];
const between48And96 = [];
const exactly96 = [];
const moreThan96 = [];

//Sort all presidents into "age inaugurated" arrays.
allPresidents.forEach(function (index) {
    if (index.monthsInOffice < 48) {
        lessthan48.push(index.number);
    } else if (index.monthsInOffice === 48) {
        exactly48.push(index.number);
    } else if ((index.monthsInOffice >= 49) && (index.monthsInOffice < 96)) {
        between48And96.push(index.number);
    } else if (index.monthsInOffice === 96) {
        exactly96.push(index.number);
    } else if (index.monthsInOffice > 96) {
        moreThan96.push(index.number);
    }
});

export {
    lessthan48,
    exactly48,
    between48And96,
    exactly96,
    moreThan96
};