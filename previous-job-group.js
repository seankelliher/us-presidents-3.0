import allPresidents from "./presidents.js";

//Placeholder variables for arrays.
const cabinet = [];
const congress = [];
const diplomatic = [];
const governor = [];
const military = [];
const presVp = [];
const privateIndustry = [];


//Sort all presidents into "age inaugurated" arrays.
allPresidents.forEach(function (index) {
    if (index.previousJobGroup === "Cabinet") {
        cabinet.push(index.number);
    } else if (index.previousJobGroup === "Congress") {
        congress.push(index.number);
    } else if (index.previousJobGroup === "Diplomatic") {
        diplomatic.push(index.number);
    } else if (index.previousJobGroup === "Governor") {
        governor.push(index.number);
    } else if (index.previousJobGroup === "Military") {
        military.push(index.number);
    } else if (index.previousJobGroup === "Pres, VP") {
        presVp.push(index.number);
    } else if (index.previousJobGroup === "Private Industry") {
        privateIndustry.push(index.number);
    }
});

export {
    cabinet,
    congress,
    diplomatic,
    governor,
    military,
    presVp,
    privateIndustry
};