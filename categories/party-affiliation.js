import allPresidents from "./presidents.js";

//Placeholder variables for arrays.
const democratic = [];
const democraticRepublican = [];
const federalist = [];
const republican = [];
const unaffiliated = [];
const whig = [];

//Sort all presidents into "party" arrays.
allPresidents.forEach(function (index) {
    if (index.partyAffiliation === "Democratic") {
        democratic.push(index.number);
    } else if (index.partyAffiliation === "Democratic-Republican") {
        democraticRepublican.push(index.number);
    } else if (index.partyAffiliation === "Federalist") {
        federalist.push(index.number);
    } else if (index.partyAffiliation === "Republican") {
        republican.push(index.number);
    } else if (index.partyAffiliation === "Unaffiliated") {
        unaffiliated.push(index.number);
    } else if (index.partyAffiliation === "Whig") {
        whig.push(index.number);
    }
});

export {
    democratic,
    democraticRepublican,
    federalist,
    republican,
    unaffiliated,
    whig
};