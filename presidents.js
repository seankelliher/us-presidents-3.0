//Constructor function.
function President(
    {
        number = "",
        name = "",
        birthplace = "",
        birthplaceRegion = "",
        partyAffiliation = "",
        yearInaugurated = "",
        ageInaugurated = "",
        maritalStatus = "",
        previousJob = "",
        previousJobType = "",
        timeInOffice = "",
        reasonForDeparture = "",
        notes = ""
    }
) {
    this.number = number;
    this.name = name;
    this.birthplace = birthplace;
    this.birthplaceRegion = birthplaceRegion;
    this.partyAffiliation = partyAffiliation;
    this.yearInaugurated = yearInaugurated;
    this.ageInaugurated = ageInaugurated;
    this.maritalStatus = maritalStatus;
    this.previousJob = previousJob;
    this.previousJobType = previousJobType;
    this.timeInOffice = timeInOffice;
    this.reasonForDeparture = reasonForDeparture;
    this.notes = notes;
}

//Constructor function invocations.
const potus01 = new President({
    number: 1,
    name: "George Washington",
    birthplace: "Virginia",
    birthplaceRegion: "Southeast",
    partyAffiliation: "Unaffiliated",
    yearInaugurated: 1789,
    ageInaugurated: 57,
    maritalStatus: "Married",
    previousJob: "Commander in Chief, Continental Army",
    previousJobType: "Military",
    timeInOffice: 96,
    reasonForDeparture: "Retired",
    notes: ""
});

const potus02 = new President({
    number: 2,
    name: "John Adams",
    birthplace: "Massachusetts",
    birthplaceRegion: "New England",
    partyAffiliation: "Federalist",
    yearInaugurated: 1797,
    ageInaugurated: 61,
    maritalStatus: "Married",
    previousJob: "Vice President",
    previousJobType: "Pres, VP",
    timeInOffice: 48,
    reasonForDeparture: "Lost Election",
    notes: "Lost election to Thomas Jefferson."
});

const potus03 = new President({
    number: 3,
    name: "Thomas Jefferson",
    birthplace: "Virginia",
    birthplaceRegion: "Southeast",
    partyAffiliation: "Democratic Republican",
    yearInaugurated: 1801,
    ageInaugurated: 57,
    maritalStatus: "Widower",
    previousJob: "Vice President",
    previousJobType: "Pres, VP",
    timeInOffice: 96,
    reasonForDeparture: "Retired",
    notes: ""
});

const potus04 = new President({
    number: 4,
    name: "James Madison",
    birthplace: "Virginia",
    birthplaceRegion: "Southeast",
    partyAffiliation: "Democratic Republican",
    yearInaugurated: 1809,
    ageInaugurated: 57,
    maritalStatus: "Married",
    previousJob: "Secretary of State",
    previousJobType: "Cabinet",
    timeInOffice: 96,
    reasonForDeparture: "Retired",
    notes: ""
});

const potus05 = new President({
    number: 5,
    name: "James Monroe",
    birthplace: "Virginia",
    birthplaceRegion: "Southeast",
    partyAffiliation: "Democratic Republican",
    yearInaugurated: 1817,
    ageInaugurated: 58,
    maritalStatus: "Married",
    previousJob: "Secretary of State",
    previousJobType: "Cabinet",
    timeInOffice: 96,
    reasonForDeparture: "Retired",
    notes: ""
});

const potus06 = new President({
    number: 6,
    name: "John Quincy Adams",
    birthplace: "Massachusetts",
    birthplaceRegion: "New England",
    partyAffiliation: "Democratic Republican",
    yearInaugurated: 1825,
    ageInaugurated: 57,
    maritalStatus: "Married",
    previousJob: "Secretary of State",
    previousJobType: "Cabinet",
    timeInOffice: 48,
    reasonForDeparture: "Lost Election",
    notes: "Lost election to Andrew Jackson."
});

const potus07 = new President({
    number: 7,
    name: "Andrew Jackson",
    birthplace: "Carolinas",
    birthplaceRegion: "Southeast",
    partyAffiliation: "Democratic",
    yearInaugurated: 1829,
    ageInaugurated: 61,
    maritalStatus: "Widower",
    previousJob: "Senator, Tennessee",
    previousJobType: "Congress",
    timeInOffice: 96,
    reasonForDeparture: "Retired",
    notes: ""
});

const potus08 = new President({
    number: 8,
    name: "Martin Van Buren",
    birthplace: "New York",
    birthplaceRegion: "Mideast",
    partyAffiliation: "Democratic",
    yearInaugurated: 1837,
    ageInaugurated: 54,
    maritalStatus: "Widower",
    previousJob: "Vice President",
    previousJobType: "Pres, VP",
    timeInOffice: 48,
    reasonForDeparture: "Lost Election",
    notes: "Lost election to William Henry Harrison."
});

const potus09 = new President({
    number: 9,
    name: "William Henry Harrison",
    birthplace: "Virginia",
    birthplaceRegion: "Southeast",
    partyAffiliation: "Whig",
    yearInaugurated: 1841,
    ageInaugurated: 68,
    maritalStatus: "Married",
    previousJob: "Minister, Colombia",
    previousJobType: "Diplomatic",
    timeInOffice: 1,
    reasonForDeparture: "Died",
    notes: "President Harrison died of pneumonia."
});

const potus10 = new President({
    number: 10,
    name: "John Tyler",
    birthplace: "Virginia",
    birthplaceRegion: "Southeast",
    partyAffiliation: "Whig",
    yearInaugurated: 1841,
    ageInaugurated: 51,
    maritalStatus: "Married",
    previousJob: "Vice President",
    previousJobType: "Pres, VP",
    timeInOffice: 47,
    reasonForDeparture: "Not Nominated",
    notes: ""
});

const potus11 = new President({
    number: 11,
    name: "James K. Polk",
    birthplace: "North Carolina",
    birthplaceRegion: "Southeast",
    partyAffiliation: "Democratic",
    yearInaugurated: 1845,
    ageInaugurated: 49,
    maritalStatus: "Married",
    previousJob: "Governor, Tennessee",
    previousJobType: "Governor",
    timeInOffice: 48,
    reasonForDeparture: "Retired",
    notes: ""
});

const potus12 = new President({
    number: 12,
    name: "Zachary Taylor",
    birthplace: "Virginia",
    birthplaceRegion: "Southeast",
    partyAffiliation: "Whig",
    yearInaugurated: 1849,
    ageInaugurated: 64,
    maritalStatus: "Married",
    previousJob: "Major General, US Army",
    previousJobType: "Military",
    timeInOffice: 16,
    reasonForDeparture: "Died",
    notes: "President Taylor died of cholera morbus."
});

const potus13 = new President({
    number: 13,
    name: "Millard Fillmore",
    birthplace: "New York",
    birthplaceRegion: "Mideast",
    partyAffiliation: "Whig",
    yearInaugurated: 1850,
    ageInaugurated: 50,
    maritalStatus: "Married",
    previousJob: "Vice President",
    previousJobType: "Pres, VP",
    timeInOffice: 31,
    reasonForDeparture: "Not Nominated",
    notes: ""
});

const potus14 = new President({
    number: 14,
    name: "Franklin Pierce",
    birthplace: "New Hampshire",
    birthplaceRegion: "New England",
    partyAffiliation: "Democratic",
    yearInaugurated: 1853,
    ageInaugurated: 48,
    maritalStatus: "Married",
    previousJob: "Brigadier General, US Army",
    previousJobType: "Military",
    timeInOffice: 48,
    reasonForDeparture: "Not Nominated",
    notes: ""
});

const potus15 = new President({
    number: 15,
    name: "James Buchanan",
    birthplace: "Pennsylvania",
    birthplaceRegion: "Mideast",
    partyAffiliation: "Democratic",
    yearInaugurated: 1857,
    ageInaugurated: 65,
    maritalStatus: "Never Married",
    previousJob: "Minister, Court of St James's",
    previousJobType: "Diplomatic",
    timeInOffice: 48,
    reasonForDeparture: "Retired",
    notes: ""
});

const potus16 = new President({
    number: 16,
    name: "Abraham Lincoln",
    birthplace: "Kentucky",
    birthplaceRegion: "Southeast",
    partyAffiliation: "Republican",
    yearInaugurated: 1861,
    ageInaugurated: 52,
    maritalStatus: "Married",
    previousJob: "Representative, Illinois",
    previousJobType: "Congress",
    timeInOffice: 49,
    reasonForDeparture: "Died",
    notes: "President Lincoln was assassinated."
});

const potus17 = new President({
    number: 17,
    name: "Andrew Johnson",
    birthplace: "North Carolina",
    birthplaceRegion: "Southeast",
    partyAffiliation: "Democratic",
    yearInaugurated: 1865,
    ageInaugurated: 56,
    maritalStatus: "Married",
    previousJob: "Vice President",
    previousJobType: "Pres, VP",
    timeInOffice: 46,
    reasonForDeparture: "Not Nominated",
    notes: ""
});

const potus18 = new President({
    number: 18,
    name: "Ulysses S. Grant",
    birthplace: "Ohio",
    birthplaceRegion: "Great Lakes",
    partyAffiliation: "Republican",
    yearInaugurated: 1869,
    ageInaugurated: 46,
    maritalStatus: "Married",
    previousJob: "Commanding General, US Army",
    previousJobType: "Military",
    timeInOffice: 96,
    reasonForDeparture: "Retired",
    notes: ""
});

const potus19 = new President({
    number: 19,
    name: "Rutherford B. Hayes",
    birthplace: "Ohio",
    birthplaceRegion: "Great Lakes",
    partyAffiliation: "Republican",
    yearInaugurated: 1877,
    ageInaugurated: 54,
    maritalStatus: "Married",
    previousJob: "Governor, Ohio",
    previousJobType: "Governor",
    timeInOffice: 48,
    reasonForDeparture: "Retired",
    notes: ""
});

const potus20 = new President({
    number: 20,
    name: "James A. Garfield",
    birthplace: "Ohio",
    birthplaceRegion: "Great Lakes",
    partyAffiliation: "Republican",
    yearInaugurated: 1881,
    ageInaugurated: 49,
    maritalStatus: "Married",
    previousJob: "Representative, Ohio",
    previousJobType: "Congress",
    timeInOffice: 6,
    reasonForDeparture: "Died",
    notes: "President Garfield was assassinated."
});

const potus21 = new President({
    number: 21,
    name: "Chester A. Arthur",
    birthplace: "Vermont",
    birthplaceRegion: "New England",
    partyAffiliation: "Republican",
    yearInaugurated: 1881,
    ageInaugurated: 51,
    maritalStatus: "Widower",
    previousJob: "Vice President",
    previousJobType: "Pres, VP",
    timeInOffice: 41,
    reasonForDeparture: "Not Nominated",
    notes: ""
});

const potus22 = new President({
    number: 22,
    name: "Grover Cleveland",
    birthplace: "New Jersey",
    birthplaceRegion: "Mideast",
    partyAffiliation: "Democratic",
    ageInaugurated: 47,
    yearInaugurated: 1885,
    maritalStatus: "Married",
    previousJob: "Governor, New York",
    previousJobType: "Governor",
    timeInOffice: 48,
    reasonForDeparture: "Lost Election",
    notes: "Lost election to Benjamin Harrison."
});

const potus23 = new President({
    number: 23,
    name: "Benjamin Harrison",
    birthplace: "Ohio",
    birthplaceRegion: "Great Lakes",
    partyAffiliation: "Republican",
    yearInaugurated: 1889,
    ageInaugurated: 55,
    maritalStatus: "Married",
    previousJob: "Senator, Indiana",
    previousJobType: "Congress",
    timeInOffice: 48,
    reasonForDeparture: "Lost Election",
    notes: "Lost election to Grover Cleveland"
});

const potus24 = new President({
    number: 24,
    name: "Grover Cleveland",
    birthplace: "New Jersey",
    birthplaceRegion: "Mideast",
    partyAffiliation: "Democratic",
    yearInaugurated: 1893,
    ageInaugurated: 55,
    maritalStatus: "Married",
    previousJob: "President",
    previousJobType: "Pres, VP",
    timeInOffice: 48,
    reasonForDeparture: "Retired",
    notes: "Grover Cleveland was the 22nd and 24th President."
});

const potus25 = new President({
    number: 25,
    name: "William McKinley",
    birthplace: "Ohio",
    birthplaceRegion: "Great Lakes",
    partyAffiliation: "Republican",
    yearInaugurated: 1897,
    ageInaugurated: 54,
    maritalStatus: "Married",
    previousJob: "Governor, Ohio",
    previousJobType: "Governor",
    timeInOffice: 54,
    reasonForDeparture: "Died",
    notes: "President McKinley was assassinated."
});

const potus26 = new President({
    number: 26,
    name: "Theodore Roosevelt",
    birthplace: "New York",
    birthplaceRegion: "Mideast",
    partyAffiliation: "Republican",
    yearInaugurated: 1901,
    ageInaugurated: 42,
    maritalStatus: "Married",
    previousJob: "Vice President",
    previousJobType: "Pres, VP",
    timeInOffice: 89,
    reasonForDeparture: "Retired",
    notes: ""
});

const potus27 = new President({
    number: 27,
    name: "William Howard Taft",
    birthplace: "Ohio",
    birthplaceRegion: "Great Lakes",
    partyAffiliation: "Republican",
    yearInaugurated: 1909,
    ageInaugurated: 51,
    maritalStatus: "Married",
    previousJob: "Secretary of War",
    previousJobType: "Cabinet",
    timeInOffice: 48,
    reasonForDeparture: "Lost Election",
    notes: "Lost election to Woodrow Wilson."
});

const potus28 = new President({
    number: 28,
    name: "Woodrow Wilson",
    birthplace: "Virginia",
    birthplaceRegion: "Southeast",
    partyAffiliation: "Democratic",
    yearInaugurated: 1913,
    ageInaugurated: 56,
    maritalStatus: "Widower",
    previousJob: "Governor, New Jersey",
    previousJobType: "Governor",
    timeInOffice: 96,
    reasonForDeparture: "Retired",
    notes: ""
});

const potus29 = new President({
    number: 29,
    name: "Warren G. Harding",
    birthplace: "Ohio",
    birthplaceRegion: "Great Lakes",
    partyAffiliation: "Republican",
    yearInaugurated: 1921,
    ageInaugurated: 55,
    maritalStatus: "Married",
    previousJob: "Senator, Ohio",
    previousJobType: "Congress",
    timeInOffice: 28,
    reasonForDeparture: "Died",
    notes: "President McKinley died of a heart attack."
});

const potus30 = new President({
    number: 30,
    name: "Calvin Coolidge",
    birthplace: "Vermont",
    birthplaceRegion: "New England",
    partyAffiliation: "Republican",
    yearInaugurated: 1923,
    ageInaugurated: 51,
    maritalStatus: "Married",
    previousJob: "Vice President",
    previousJobType: "Pres, VP",
    timeInOffice: 67,
    reasonForDeparture: "Retired",
    notes: ""
});

const potus31 = new President({
    number: 31,
    name: "Herbert Hoover",
    birthplace: "Iowa",
    birthplaceRegion: "Plains",
    partyAffiliation: "Republican",
    yearInaugurated: 1929,
    ageInaugurated: 54,
    maritalStatus: "Married",
    previousJob: "Secretary of Commerce",
    previousJobType: "Cabinet",
    timeInOffice: 48,
    reasonForDeparture: "Lost Election",
    notes: "Lost election to Franklin D. Roosevelt."
});

const potus32 = new President({
    number: 32,
    name: "Franklin D. Roosevelt",
    birthplace: "New York",
    birthplaceRegion: "Mideast",
    partyAffiliation: "Democratic",
    yearInaugurated: 1933,
    ageInaugurated: 51,
    maritalStatus: "Married",
    previousJob: "Governor, New York",
    previousJobType: "Governor",
    timeInOffice: 145,
    reasonForDeparture: "Died",
    notes: "President Roosevelt died of a cerebral hemorrhage."
});

const potus33 = new President({
    number: 33,
    name: "Harry S. Truman",
    birthplace: "Missouri",
    birthplaceRegion: "Plains",
    partyAffiliation: "Democratic",
    yearInaugurated: 1945,
    ageInaugurated: 60,
    maritalStatus: "Married",
    previousJob: "Vice President",
    previousJobType: "Pres, VP",
    timeInOffice: 93,
    reasonForDeparture: "Retired",
    notes: ""
});

const potus34 = new President({
    number: 34,
    name: "Dwight D. Eisenhower",
    birthplace: "Texas",
    birthplaceRegion: "Southwest",
    partyAffiliation: "Republican",
    yearInaugurated: 1953,
    ageInaugurated: 62,
    maritalStatus: "Married",
    previousJob: "Supreme Allied Commander",
    previousJobType: "Military",
    timeInOffice: 96,
    reasonForDeparture: "Term Limited",
    notes: "First term-limited president due to new 22 Amendment."
});

const potus35 = new President({
    number: 35,
    name: "John F. Kennedy",
    birthplace: "Massachusetts",
    birthplaceRegion: "New England",
    partyAffiliation: "Democratic",
    yearInaugurated: 1961,
    ageInaugurated: 43,
    maritalStatus: "Married",
    previousJob: "Senator, Massachusetts",
    previousJobType: "Congress",
    timeInOffice: 34,
    reasonForDeparture: "Died",
    notes: "President Kennedy was assassinated."
});

const potus36 = new President({
    number: 36,
    name: "Lyndon B. Johnson",
    birthplace: "Texas",
    birthplaceRegion: "Southwest",
    partyAffiliation: "Democratic",
    yearInaugurated: 1963,
    ageInaugurated: 55,
    maritalStatus: "Married",
    previousJob: "Vice President",
    previousJobType: "Pres, VP",
    timeInOffice: 61,
    reasonForDeparture: "Retired",
    notes: ""
});

const potus37 = new President({
    number: 37,
    name: "Richard Nixon",
    birthplace: "California",
    birthplaceRegion: "Far West",
    partyAffiliation: "Republican",
    yearInaugurated: 1969,
    ageInaugurated: 56,
    maritalStatus: "Married",
    previousJob: "Vice President",
    previousJobType: "Pres, VP",
    timeInOffice: 66,
    reasonForDeparture: "Resigned",
    notes: ""
});

const potus38 = new President({
    number: 38,
    name: "Gerald Ford",
    birthplace: "Nebraska",
    birthplaceRegion: "Plains",
    partyAffiliation: "Republican",
    yearInaugurated: 1974,
    ageInaugurated: 61,
    maritalStatus: "Married",
    previousJob: "Vice President",
    previousJobType: "Pres, VP",
    timeInOffice: 29,
    reasonForDeparture: "Lost Election",
    notes: "Lost election to Jimmy Carter."
});

const potus39 = new President({
    number: 39,
    name: "Jimmy Carter",
    birthplace: "Georgia",
    birthplaceRegion: "Southeast",
    partyAffiliation: "Democratic",
    yearInaugurated: 1977,
    ageInaugurated: 52,
    maritalStatus: "Married",
    previousJob: "Governor, Georgia",
    previousJobType: "Governor",
    timeInOffice: 48,
    reasonForDeparture: "Lost Election",
    notes: "Lost election to Ronald Reagan."
});

const potus40 = new President({
    number: 40,
    name: "Ronald Reagan",
    birthplace: "Illinois",
    birthplaceRegion: "Great Lakes",
    partyAffiliation: "Republican",
    yearInaugurated: 1981,
    ageInaugurated: 69,
    maritalStatus: "Married",
    previousJob: "Governor, California",
    previousJobType: "Governor",
    timeInOffice: 96,
    reasonForDeparture: "Term Limited",
    notes: ""
});

const potus41 = new President({
    number: 41,
    name: "George H. W. Bush",
    birthplace: "Massachusetts",
    birthplaceRegion: "New England",
    partyAffiliation: "Republican",
    yearInaugurated: 1989,
    ageInaugurated: 64,
    maritalStatus: "Married",
    previousJob: "Vice President",
    previousJobType: "Pres, VP",
    timeInOffice: 48,
    reasonForDeparture: "Lost Election",
    notes: "Lost election to Bill Clinton."
});

const potus42 = new President({
    number: 42,
    name: "Bill Clinton",
    birthplace: "Arkansas",
    birthplaceRegion: "Southeast",
    partyAffiliation: "Democratic",
    yearInaugurated: 1993,
    ageInaugurated: 46,
    maritalStatus: "Married",
    previousJob: "Governor, Arkansas",
    previousJobType: "Governor",
    timeInOffice: 96,
    reasonForDeparture: "Term Limited",
    notes: ""
});

const potus43 = new President({
    number: 43,
    name: "George W. Bush",
    birthplace: "Connecticut",
    birthplaceRegion: "New England",
    partyAffiliation: "Republican",
    yearInaugurated: 2001,
    ageInaugurated: 54,
    maritalStatus: "Married",
    previousJob: "Governor, Texas",
    previousJobType: "Governor",
    timeInOffice: 96,
    reasonForDeparture: "Term Limited",
    notes: ""
});

const potus44 = new President({
    number: 44,
    name: "Barack Obama",
    birthplace: "Hawaii",
    birthplaceRegion: "Far West",
    partyAffiliation: "Democratic",
    yearInaugurated: 2009,
    ageInaugurated: 47,
    maritalStatus: "Married",
    previousJob: "Senator, Illinois",
    previousJobType: "Congress",
    timeInOffice: 96,
    reasonForDeparture: "Term Limited",
    notes: ""
});

const potus45 = new President({
    number: 45,
    name: "Donald Trump",
    birthplace: "New York",
    birthplaceRegion: "Mideast",
    partyAffiliation: "Republican",
    yearInaugurated: 2017,
    ageInaugurated: 70,
    maritalStatus: "Married",
    previousJob: "Chair, Trump Org.",
    previousJobType: "Private Industry",
    timeInOffice: "n/a",
    reasonForDeparture: "n/a",
    notes: ""
});

//Gather all presidents in array.
const allPresidents = [
    potus01,
    potus02,
    potus03,
    potus04,
    potus05,
    potus06,
    potus07,
    potus08,
    potus09,
    potus10,
    potus11,
    potus12,
    potus13,
    potus14,
    potus15,
    potus16,
    potus17,
    potus18,
    potus19,
    potus20,
    potus21,
    potus22,
    potus23,
    potus24,
    potus25,
    potus26,
    potus27,
    potus28,
    potus29,
    potus30,
    potus31,
    potus32,
    potus33,
    potus34,
    potus35,
    potus36,
    potus37,
    potus38,
    potus39,
    potus40,
    potus41,
    potus42,
    potus43,
    potus44,
    potus45
];

export {allPresidents};