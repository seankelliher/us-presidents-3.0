import allPresidents from "./presidents.js";

//Placeholder variables for arrays.
const newEngland = [];
const mideast = [];
const greatLakes = [];
const plains = [];
const southeast = [];
const southwest = [];
const rockyMountain = [];
const farWest = [];

//Sort all presidents into "party" arrays.
allPresidents.forEach(function (index) {
    if (index.birthStateRegion === "New England") {
        newEngland.push(index.number);
    } else if (index.birthStateRegion === "Mideast") {
        mideast.push(index.number);
    } else if (index.birthStateRegion === "Great Lakes") {
        greatLakes.push(index.number);
    } else if (index.birthStateRegion === "Plains") {
        plains.push(index.number);
    } else if (index.birthStateRegion === "Southeast") {
        southeast.push(index.number);
    } else if (index.birthStateRegion === "Southwest") {
        southwest.push(index.number);
    } else if (index.birthStateRegion === "Rocky Mountain") {
        rockyMountain.push(index.number);
    } else if (index.birthStateRegion === "Far West") {
        farWest.push(index.number);
    }
});

export {
    newEngland,
    mideast,
    greatLakes,
    plains,
    southeast,
    southwest,
    rockyMountain,
    farWest
};

//The Bureau of Economic Analysis - 8 Regions
//https://en.wikipedia.org/wiki/List_of_regions_of_the_United_States

//1. New England:
//Connecticut, Maine, Massachusetts, New Hampshire, Rhode Island, Vermont.

//2. Mideast:
//Delaware, District of Columbia, Maryland, New Jersey, New York, Pennsylvania.

//3. Great Lakes:
//Illinois, Indiana, Michigan, Ohio, Wisconsin.

//4. Plains:
//Iowa, Kansas, Minnesota, Missouri, Nebraska, North Dakota, South Dakota.

//5. Southeast:
//Alabama, Arkansas, Florida, Georgia, Kentucky, Louisiana, Mississippi,
//North Carolina, South Carolina, Tennessee, Virginia, and West Virginia.

//6. Southwest:
//Arizona, New Mexico, Oklahoma, Texas.

//7. Rocky Mountain:
//Colorado, Idaho, Montana, Utah, Wyoming.

//8. Far West:
//Alaska, California, Hawaii, Nevada, Oregon, Washington.