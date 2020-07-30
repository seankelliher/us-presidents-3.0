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
    if (index.previousJobType === "Cabinet") {
        cabinet.push(index.number);
    } else if (index.previousJobType === "Congress") {
        congress.push(index.number);
    } else if (index.previousJobType === "Diplomatic") {
        diplomatic.push(index.number);
    } else if (index.previousJobType === "Governor") {
        governor.push(index.number);
    } else if (index.previousJobType === "Military") {
        military.push(index.number);
    } else if (index.previousJobType === "Pres, VP") {
        presVp.push(index.number);
    } else if (index.previousJobType === "Private Industry") {
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