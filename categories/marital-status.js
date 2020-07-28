import allPresidents from "./presidents.js";

//Placeholder variables for arrays.
const married = [];
const neverMarried = [];
const widower = [];



//Sort all presidents into "age inaugurated" arrays.
allPresidents.forEach(function (index) {
    if (index.maritalStatus === "Married") {
        married.push(index.number);
    } else if (index.maritalStatus === "Never Married") {
        neverMarried.push(index.number);
    } else if (index.maritalStatus === "Widower") {
        widower.push(index.number);
    }
});

export {
    married,
    neverMarried,
    widower
};