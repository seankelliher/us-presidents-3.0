//Constructor function.
function President(
    {
        number = "",
        name = "",
        birthState = "",
        birthStateRegion = "",
        partyAffiliation = "",
        yearInaugurated = "",
        ageInaugurated = "",
        maritalStatus = "",
        previousJob = "",
        previousJobGroup = "",
        monthsInOffice = "",
        reasonDeparture = "",
        notes = ""
    }
) {
    this.number = number;
    this.name = name;
    this.birthState = birthState;
    this.birthStateRegion = birthStateRegion;
    this.partyAffiliation = partyAffiliation;
    this.yearInaugurated = yearInaugurated;
    this.ageInaugurated = ageInaugurated;
    this.maritalStatus = maritalStatus;
    this.previousJob = previousJob;
    this.previousJobGroup = previousJobGroup;
    this.monthsInOffice = monthsInOffice;
    this.reasonDeparture = reasonDeparture;
    this.notes = notes;
}

//Constructor function invocations.
const potus01 = new President({
    number: 1,
    name: "George Washington",
    birthState: "Virginia",
    birthStateRegion: "Southeast",
    partyAffiliation: "Unaffiliated",
    yearInaugurated: 1789,
    ageInaugurated: 57,
    maritalStatus: "Married",
    previousJob: "Commander in Chief, Continental Army",
    previousJobGroup: "Military",
    monthsInOffice: 96,
    reasonDeparture: "Retired",
    notes: ""
});

const potus02 = new President({
    number: 2,
    name: "John Adams",
    birthState: "Massachusetts",
    birthStateRegion: "New England",
    partyAffiliation: "Federalist",
    yearInaugurated: 1797,
    ageInaugurated: 61,
    maritalStatus: "Married",
    previousJob: "Vice President",
    previousJobGroup: "Pres, VP",
    monthsInOffice: 48,
    reasonDeparture: "Lost Election",
    notes: "Lost election to Thomas Jefferson."
});

const potus03 = new President({
    number: 3,
    name: "Thomas Jefferson",
    birthState: "Virginia",
    birthStateRegion: "Southeast",
    partyAffiliation: "Democratic-Republican",
    yearInaugurated: 1801,
    ageInaugurated: 57,
    maritalStatus: "Widower",
    previousJob: "Vice President",
    previousJobGroup: "Pres, VP",
    monthsInOffice: 96,
    reasonDeparture: "Retired",
    notes: ""
});

const potus04 = new President({
    number: 4,
    name: "James Madison",
    birthState: "Virginia",
    birthStateRegion: "Southeast",
    partyAffiliation: "Democratic-Republican",
    yearInaugurated: 1809,
    ageInaugurated: 57,
    maritalStatus: "Married",
    previousJob: "Secretary of State",
    previousJobGroup: "Cabinet",
    monthsInOffice: 96,
    reasonDeparture: "Retired",
    notes: ""
});

const potus05 = new President({
    number: 5,
    name: "James Monroe",
    birthState: "Virginia",
    birthStateRegion: "Southeast",
    partyAffiliation: "Democratic-Republican",
    yearInaugurated: 1817,
    ageInaugurated: 58,
    maritalStatus: "Married",
    previousJob: "Secretary of State",
    previousJobGroup: "Cabinet",
    monthsInOffice: 96,
    reasonDeparture: "Retired",
    notes: ""
});

const potus06 = new President({
    number: 6,
    name: "John Quincy Adams",
    birthState: "Massachusetts",
    birthStateRegion: "New England",
    partyAffiliation: "Democratic-Republican",
    yearInaugurated: 1825,
    ageInaugurated: 57,
    maritalStatus: "Married",
    previousJob: "Secretary of State",
    previousJobGroup: "Cabinet",
    monthsInOffice: 48,
    reasonDeparture: "Lost Election",
    notes: "Lost election to Andrew Jackson."
});

const potus07 = new President({
    number: 7,
    name: "Andrew Jackson",
    birthState: "Carolinas",
    birthStateRegion: "Southeast",
    partyAffiliation: "Democratic",
    yearInaugurated: 1829,
    ageInaugurated: 61,
    maritalStatus: "Widower",
    previousJob: "Senator, Tennessee",
    previousJobGroup: "Congress",
    monthsInOffice: 96,
    reasonDeparture: "Retired",
    notes: ""
});

const potus08 = new President({
    number: 8,
    name: "Martin Van Buren",
    birthState: "New York",
    birthStateRegion: "Mideast",
    partyAffiliation: "Democratic",
    yearInaugurated: 1837,
    ageInaugurated: 54,
    maritalStatus: "Widower",
    previousJob: "Vice President",
    previousJobGroup: "Pres, VP",
    monthsInOffice: 48,
    reasonDeparture: "Lost Election",
    notes: "Lost election to William Henry Harrison."
});

const potus09 = new President({
    number: 9,
    name: "William Henry Harrison",
    birthState: "Virginia",
    birthStateRegion: "Southeast",
    partyAffiliation: "Whig",
    yearInaugurated: 1841,
    ageInaugurated: 68,
    maritalStatus: "Married",
    previousJob: "Minister, Colombia",
    previousJobGroup: "Diplomatic",
    monthsInOffice: 1,
    reasonDeparture: "Died",
    notes: "President Harrison died of pneumonia."
});

const potus10 = new President({
    number: 10,
    name: "John Tyler",
    birthState: "Virginia",
    birthStateRegion: "Southeast",
    partyAffiliation: "Whig",
    yearInaugurated: 1841,
    ageInaugurated: 51,
    maritalStatus: "Married",
    previousJob: "Vice President",
    previousJobGroup: "Pres, VP",
    monthsInOffice: 47,
    reasonDeparture: "Not Nominated",
    notes: ""
});

const potus11 = new President({
    number: 11,
    name: "James K. Polk",
    birthState: "North Carolina",
    birthStateRegion: "Southeast",
    partyAffiliation: "Democratic",
    yearInaugurated: 1845,
    ageInaugurated: 49,
    maritalStatus: "Married",
    previousJob: "Governor, Tennessee",
    previousJobGroup: "Governor",
    monthsInOffice: 48,
    reasonDeparture: "Retired",
    notes: ""
});

const potus12 = new President({
    number: 12,
    name: "Zachary Taylor",
    birthState: "Virginia",
    birthStateRegion: "Southeast",
    partyAffiliation: "Whig",
    yearInaugurated: 1849,
    ageInaugurated: 64,
    maritalStatus: "Married",
    previousJob: "Major General, US Army",
    previousJobGroup: "Military",
    monthsInOffice: 16,
    reasonDeparture: "Died",
    notes: "President Taylor died of cholera morbus."
});

const potus13 = new President({
    number: 13,
    name: "Millard Fillmore",
    birthState: "New York",
    birthStateRegion: "Mideast",
    partyAffiliation: "Whig",
    yearInaugurated: 1850,
    ageInaugurated: 50,
    maritalStatus: "Married",
    previousJob: "Vice President",
    previousJobGroup: "Pres, VP",
    monthsInOffice: 31,
    reasonDeparture: "Not Nominated",
    notes: ""
});

const potus14 = new President({
    number: 14,
    name: "Franklin Pierce",
    birthState: "New Hampshire",
    birthStateRegion: "New England",
    partyAffiliation: "Democratic",
    yearInaugurated: 1853,
    ageInaugurated: 48,
    maritalStatus: "Married",
    previousJob: "Brigadier General, US Army",
    previousJobGroup: "Military",
    monthsInOffice: 48,
    reasonDeparture: "Not Nominated",
    notes: ""
});

const potus15 = new President({
    number: 15,
    name: "James Buchanan",
    birthState: "Pennsylvania",
    birthStateRegion: "Mideast",
    partyAffiliation: "Democratic",
    yearInaugurated: 1857,
    ageInaugurated: 65,
    maritalStatus: "Never Married",
    previousJob: "Minister, Court of St James's",
    previousJobGroup: "Diplomatic",
    monthsInOffice: 48,
    reasonDeparture: "Retired",
    notes: ""
});

const potus16 = new President({
    number: 16,
    name: "Abraham Lincoln",
    birthState: "Kentucky",
    birthStateRegion: "Southeast",
    partyAffiliation: "Republican",
    yearInaugurated: 1861,
    ageInaugurated: 52,
    maritalStatus: "Married",
    previousJob: "Representative, Illinois",
    previousJobGroup: "Congress",
    monthsInOffice: 49,
    reasonDeparture: "Died",
    notes: "President Lincoln was assassinated."
});

const potus17 = new President({
    number: 17,
    name: "Andrew Johnson",
    birthState: "North Carolina",
    birthStateRegion: "Southeast",
    partyAffiliation: "Democratic",
    yearInaugurated: 1865,
    ageInaugurated: 56,
    maritalStatus: "Married",
    previousJob: "Vice President",
    previousJobGroup: "Pres, VP",
    monthsInOffice: 46,
    reasonDeparture: "Not Nominated",
    notes: ""
});

const potus18 = new President({
    number: 18,
    name: "Ulysses S. Grant",
    birthState: "Ohio",
    birthStateRegion: "Great Lakes",
    partyAffiliation: "Republican",
    yearInaugurated: 1869,
    ageInaugurated: 46,
    maritalStatus: "Married",
    previousJob: "Commanding General, US Army",
    previousJobGroup: "Military",
    monthsInOffice: 96,
    reasonDeparture: "Retired",
    notes: ""
});

const potus19 = new President({
    number: 19,
    name: "Rutherford B. Hayes",
    birthState: "Ohio",
    birthStateRegion: "Great Lakes",
    partyAffiliation: "Republican",
    yearInaugurated: 1877,
    ageInaugurated: 54,
    maritalStatus: "Married",
    previousJob: "Governor, Ohio",
    previousJobGroup: "Governor",
    monthsInOffice: 48,
    reasonDeparture: "Retired",
    notes: ""
});

const potus20 = new President({
    number: 20,
    name: "James A. Garfield",
    birthState: "Ohio",
    birthStateRegion: "Great Lakes",
    partyAffiliation: "Republican",
    yearInaugurated: 1881,
    ageInaugurated: 49,
    maritalStatus: "Married",
    previousJob: "Representative, Ohio",
    previousJobGroup: "Congress",
    monthsInOffice: 6,
    reasonDeparture: "Died",
    notes: "President Garfield was assassinated."
});

const potus21 = new President({
    number: 21,
    name: "Chester A. Arthur",
    birthState: "Vermont",
    birthStateRegion: "New England",
    partyAffiliation: "Republican",
    yearInaugurated: 1881,
    ageInaugurated: 51,
    maritalStatus: "Widower",
    previousJob: "Vice President",
    previousJobGroup: "Pres, VP",
    monthsInOffice: 41,
    reasonDeparture: "Not Nominated",
    notes: ""
});

const potus22 = new President({
    number: 22,
    name: "Grover Cleveland",
    birthState: "New Jersey",
    birthStateRegion: "Mideast",
    partyAffiliation: "Democratic",
    ageInaugurated: 47,
    yearInaugurated: 1885,
    maritalStatus: "Married",
    previousJob: "Governor, New York",
    previousJobGroup: "Governor",
    monthsInOffice: 48,
    reasonDeparture: "Lost Election",
    notes: "Lost election to Benjamin Harrison."
});

const potus23 = new President({
    number: 23,
    name: "Benjamin Harrison",
    birthState: "Ohio",
    birthStateRegion: "Great Lakes",
    partyAffiliation: "Republican",
    yearInaugurated: 1889,
    ageInaugurated: 55,
    maritalStatus: "Married",
    previousJob: "Senator, Indiana",
    previousJobGroup: "Congress",
    monthsInOffice: 48,
    reasonDeparture: "Lost Election",
    notes: "Lost election to Grover Cleveland"
});

const potus24 = new President({
    number: 24,
    name: "Grover Cleveland",
    birthState: "New Jersey",
    birthStateRegion: "Mideast",
    partyAffiliation: "Democratic",
    yearInaugurated: 1893,
    ageInaugurated: 55,
    maritalStatus: "Married",
    previousJob: "President",
    previousJobGroup: "Pres, VP",
    monthsInOffice: 48,
    reasonDeparture: "Retired",
    notes: "Grover Cleveland was the 22nd and 24th President."
});

const potus25 = new President({
    number: 25,
    name: "William McKinley",
    birthState: "Ohio",
    birthStateRegion: "Great Lakes",
    partyAffiliation: "Republican",
    yearInaugurated: 1897,
    ageInaugurated: 54,
    maritalStatus: "Married",
    previousJob: "Governor, Ohio",
    previousJobGroup: "Governor",
    monthsInOffice: 54,
    reasonDeparture: "Died",
    notes: "President McKinley was assassinated."
});

const potus26 = new President({
    number: 26,
    name: "Theodore Roosevelt",
    birthState: "New York",
    birthStateRegion: "Mideast",
    partyAffiliation: "Republican",
    yearInaugurated: 1901,
    ageInaugurated: 42,
    maritalStatus: "Married",
    previousJob: "Vice President",
    previousJobGroup: "Pres, VP",
    monthsInOffice: 89,
    reasonDeparture: "Retired",
    notes: ""
});

const potus27 = new President({
    number: 27,
    name: "William Howard Taft",
    birthState: "Ohio",
    birthStateRegion: "Great Lakes",
    partyAffiliation: "Republican",
    yearInaugurated: 1909,
    ageInaugurated: 51,
    maritalStatus: "Married",
    previousJob: "Secretary of War",
    previousJobGroup: "Cabinet",
    monthsInOffice: 48,
    reasonDeparture: "Lost Election",
    notes: "Lost election to Woodrow Wilson."
});

const potus28 = new President({
    number: 28,
    name: "Woodrow Wilson",
    birthState: "Virginia",
    birthStateRegion: "Southeast",
    partyAffiliation: "Democratic",
    yearInaugurated: 1913,
    ageInaugurated: 56,
    maritalStatus: "Widower",
    previousJob: "Governor, New Jersey",
    previousJobGroup: "Governor",
    monthsInOffice: 96,
    reasonDeparture: "Retired",
    notes: ""
});

const potus29 = new President({
    number: 29,
    name: "Warren G. Harding",
    birthState: "Ohio",
    birthStateRegion: "Great Lakes",
    partyAffiliation: "Republican",
    yearInaugurated: 1921,
    ageInaugurated: 55,
    maritalStatus: "Married",
    previousJob: "Senator, Ohio",
    previousJobGroup: "Congress",
    monthsInOffice: 28,
    reasonDeparture: "Died",
    notes: "President McKinley died of a heart attack."
});

const potus30 = new President({
    number: 30,
    name: "Calvin Coolidge",
    birthState: "Vermont",
    birthStateRegion: "New England",
    partyAffiliation: "Republican",
    yearInaugurated: 1923,
    ageInaugurated: 51,
    maritalStatus: "Married",
    previousJob: "Vice President",
    previousJobGroup: "Pres, VP",
    monthsInOffice: 67,
    reasonDeparture: "Retired",
    notes: ""
});

const potus31 = new President({
    number: 31,
    name: "Herbert Hoover",
    birthState: "Iowa",
    birthStateRegion: "Plains",
    partyAffiliation: "Republican",
    yearInaugurated: 1929,
    ageInaugurated: 54,
    maritalStatus: "Married",
    previousJob: "Secretary of Commerce",
    previousJobGroup: "Cabinet",
    monthsInOffice: 48,
    reasonDeparture: "Lost Election",
    notes: "Lost election to Franklin D. Roosevelt."
});

const potus32 = new President({
    number: 32,
    name: "Franklin D. Roosevelt",
    birthState: "New York",
    birthStateRegion: "Mideast",
    partyAffiliation: "Democratic",
    yearInaugurated: 1933,
    ageInaugurated: 51,
    maritalStatus: "Married",
    previousJob: "Governor, New York",
    previousJobGroup: "Governor",
    monthsInOffice: 145,
    reasonDeparture: "Died",
    notes: "President Roosevelt died of a cerebral hemorrhage."
});

const potus33 = new President({
    number: 33,
    name: "Harry S. Truman",
    birthState: "Missouri",
    birthStateRegion: "Plains",
    partyAffiliation: "Democratic",
    yearInaugurated: 1945,
    ageInaugurated: 60,
    maritalStatus: "Married",
    previousJob: "Vice President",
    previousJobGroup: "Pres, VP",
    monthsInOffice: 93,
    reasonDeparture: "Retired",
    notes: ""
});

const potus34 = new President({
    number: 34,
    name: "Dwight D. Eisenhower",
    birthState: "Texas",
    birthStateRegion: "Southwest",
    partyAffiliation: "Republican",
    yearInaugurated: 1953,
    ageInaugurated: 62,
    maritalStatus: "Married",
    previousJob: "Supreme Allied Commander",
    previousJobGroup: "Military",
    monthsInOffice: 96,
    reasonDeparture: "Term-Limited",
    notes: "First term-limited president due to new 22 Amendment."
});

const potus35 = new President({
    number: 35,
    name: "John F. Kennedy",
    birthState: "Massachusetts",
    birthStateRegion: "New England",
    partyAffiliation: "Democratic",
    yearInaugurated: 1961,
    ageInaugurated: 43,
    maritalStatus: "Married",
    previousJob: "Senator, Massachusetts",
    previousJobGroup: "Congress",
    monthsInOffice: 34,
    reasonDeparture: "Died",
    notes: "President Kennedy was assassinated."
});

const potus36 = new President({
    number: 36,
    name: "Lyndon B. Johnson",
    birthState: "Texas",
    birthStateRegion: "Southwest",
    partyAffiliation: "Democratic",
    yearInaugurated: 1963,
    ageInaugurated: 55,
    maritalStatus: "Married",
    previousJob: "Vice President",
    previousJobGroup: "Pres, VP",
    monthsInOffice: 61,
    reasonDeparture: "Retired",
    notes: ""
});

const potus37 = new President({
    number: 37,
    name: "Richard Nixon",
    birthState: "California",
    birthStateRegion: "Far West",
    partyAffiliation: "Republican",
    yearInaugurated: 1969,
    ageInaugurated: 56,
    maritalStatus: "Married",
    previousJob: "Vice President",
    previousJobGroup: "Pres, VP",
    monthsInOffice: 66,
    reasonDeparture: "Resigned",
    notes: ""
});

const potus38 = new President({
    number: 38,
    name: "Gerald Ford",
    birthState: "Nebraska",
    birthStateRegion: "Plains",
    partyAffiliation: "Republican",
    yearInaugurated: 1974,
    ageInaugurated: 61,
    maritalStatus: "Married",
    previousJob: "Vice President",
    previousJobGroup: "Pres, VP",
    monthsInOffice: 29,
    reasonDeparture: "Lost Election",
    notes: "Lost election to Jimmy Carter."
});

const potus39 = new President({
    number: 39,
    name: "Jimmy Carter",
    birthState: "Georgia",
    birthStateRegion: "Southeast",
    partyAffiliation: "Democratic",
    yearInaugurated: 1977,
    ageInaugurated: 52,
    maritalStatus: "Married",
    previousJob: "Governor, Georgia",
    previousJobGroup: "Governor",
    monthsInOffice: 48,
    reasonDeparture: "Lost Election",
    notes: "Lost election to Ronald Reagan."
});

const potus40 = new President({
    number: 40,
    name: "Ronald Reagan",
    birthState: "Illinois",
    birthStateRegion: "Great Lakes",
    partyAffiliation: "Republican",
    yearInaugurated: 1981,
    ageInaugurated: 69,
    maritalStatus: "Married",
    previousJob: "Governor, California",
    previousJobGroup: "Governor",
    monthsInOffice: 96,
    reasonDeparture: "Term-limited",
    notes: ""
});

const potus41 = new President({
    number: 41,
    name: "George H. W. Bush",
    birthState: "Massachusetts",
    birthStateRegion: "New England",
    partyAffiliation: "Republican",
    yearInaugurated: 1989,
    ageInaugurated: 64,
    maritalStatus: "Married",
    previousJob: "Vice President",
    previousJobGroup: "Pres, VP",
    monthsInOffice: 48,
    reasonDeparture: "Lost Election",
    notes: "Lost election to Bill Clinton."
});

const potus42 = new President({
    number: 42,
    name: "Bill Clinton",
    birthState: "Arkansas",
    birthStateRegion: "Southeast",
    partyAffiliation: "Democratic",
    yearInaugurated: 1993,
    ageInaugurated: 46,
    maritalStatus: "Married",
    previousJob: "Governor, Arkansas",
    previousJobGroup: "Governor",
    monthsInOffice: 96,
    reasonDeparture: "Term-limited",
    notes: ""
});

const potus43 = new President({
    number: 43,
    name: "George W. Bush",
    birthState: "Connecticut",
    birthStateRegion: "New England",
    partyAffiliation: "Republican",
    yearInaugurated: 2001,
    ageInaugurated: 54,
    maritalStatus: "Married",
    previousJob: "Governor, Texas",
    previousJobGroup: "Governor",
    monthsInOffice: 96,
    reasonDeparture: "Term-limited",
    notes: ""
});

const potus44 = new President({
    number: 44,
    name: "Barack Obama",
    birthState: "Hawaii",
    birthStateRegion: "Far West",
    partyAffiliation: "Democratic",
    yearInaugurated: 2009,
    ageInaugurated: 47,
    maritalStatus: "Married",
    previousJob: "Senator, Illinois",
    previousJobGroup: "Congress",
    monthsInOffice: 96,
    reasonDeparture: "Term-limited",
    notes: ""
});

const potus45 = new President({
    number: 45,
    name: "Donald Trump",
    birthState: "New York",
    birthStateRegion: "Mideast",
    partyAffiliation: "Republican",
    yearInaugurated: 2017,
    ageInaugurated: 70,
    maritalStatus: "Married",
    previousJob: "Chair, Trump Org.",
    previousJobGroup: "Private Industry",
    monthsInOffice: "n/a",
    reasonDeparture: "n/a",
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

