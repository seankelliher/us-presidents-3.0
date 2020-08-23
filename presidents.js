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
        ageInauguratedGroup = "",
        maritalStatus = "",
        previousJob = "",
        previousJobType = "",
        timeInOffice = "",
        timeInOfficeGroup = "",
        reasonForDeparture = "",
        photo = "",
        notes = ""
    }
) {
    this.number = number;
    this.name = name;
    this.birthplace = birthplace;
    this.birthplaceRegion = birthplaceRegion;
    this.partyAffiliation = partyAffiliation;
    this.yearInaugurated = yearInaugurated;
    this.ageInauguratedGroup = ageInauguratedGroup;
    this.ageInaugurated = ageInaugurated;
    this.maritalStatus = maritalStatus;
    this.previousJob = previousJob;
    this.previousJobType = previousJobType;
    this.timeInOffice = timeInOffice;
    this.timeInOfficeGroup = timeInOfficeGroup;
    this.reasonForDeparture = reasonForDeparture;
    this.photo = photo;
    this.notes = notes;
}

//Constructor function invocations.
const potus01 = new President({
    number: "1st",
    name: "George Washington",
    birthplace: "Virginia",
    birthplaceRegion: "Southeast",
    partyAffiliation: "Unaffiliated",
    yearInaugurated: 1789,
    ageInaugurated: 57,
    ageInauguratedGroup: "Fifties",
    maritalStatus: "Married",
    previousJob: "Commander in Chief, Continental Army",
    previousJobType: "Military",
    timeInOffice: "8 years", //96 months
    timeInOfficeGroup: "Two Terms",
    reasonForDeparture: "Retired",
    photo: "images/george-washington.png",
    notes: ""
});

const potus02 = new President({
    number: "2nd",
    name: "John Adams",
    birthplace: "Massachusetts",
    birthplaceRegion: "New England",
    partyAffiliation: "Federalist",
    yearInaugurated: 1797,
    ageInaugurated: 61,
    ageInauguratedGroup: "Sixties",
    maritalStatus: "Married",
    previousJob: "Vice President",
    previousJobType: "Executive Office",
    timeInOffice: "4 years", //48 months
    timeInOfficeGroup: "One Term",
    reasonForDeparture: "Lost Election",
    photo: "images/john-adams.png",
    notes: "to Thomas Jefferson"
});

const potus03 = new President({
    number: "3rd",
    name: "Thomas Jefferson",
    birthplace: "Virginia",
    birthplaceRegion: "Southeast",
    partyAffiliation: "Democratic Republican",
    yearInaugurated: 1801,
    ageInaugurated: 57,
    ageInauguratedGroup: "Fifties",
    maritalStatus: "Widower",
    previousJob: "Vice President",
    previousJobType: "Executive Office",
    timeInOffice: "8 years", //96 months
    timeInOfficeGroup: "Two Terms",
    reasonForDeparture: "Retired",
    photo: "images/thomas-jefferson.png",
    notes: ""
});

const potus04 = new President({
    number: "4th",
    name: "James Madison",
    birthplace: "Virginia",
    birthplaceRegion: "Southeast",
    partyAffiliation: "Democratic Republican",
    yearInaugurated: 1809,
    ageInaugurated: 57,
    ageInauguratedGroup: "Fifties",
    maritalStatus: "Married",
    previousJob: "Secretary of State",
    previousJobType: "Cabinet",
    timeInOffice: "8 years", //96 months
    timeInOfficeGroup: "Two Terms",
    reasonForDeparture: "Retired",
    photo: "images/james-madison.png",
    notes: ""
});

const potus05 = new President({
    number: "5th",
    name: "James Monroe",
    birthplace: "Virginia",
    birthplaceRegion: "Southeast",
    partyAffiliation: "Democratic Republican",
    yearInaugurated: 1817,
    ageInaugurated: 58,
    ageInauguratedGroup: "Fifties",
    maritalStatus: "Married",
    previousJob: "Secretary of State",
    previousJobType: "Cabinet",
    timeInOffice: "8 years", //96 months
    timeInOfficeGroup: "Two Terms",
    reasonForDeparture: "Retired",
    photo: "images/james-monroe.png",
    notes: ""
});

const potus06 = new President({
    number: "6th",
    name: "John Quincy Adams",
    birthplace: "Massachusetts",
    birthplaceRegion: "New England",
    partyAffiliation: "Democratic Republican",
    yearInaugurated: 1825,
    ageInaugurated: 57,
    ageInauguratedGroup: "Fifties",
    maritalStatus: "Married",
    previousJob: "Secretary of State",
    previousJobType: "Cabinet",
    timeInOffice: "4 years", //48 months
    timeInOfficeGroup: "One Term",
    reasonForDeparture: "Lost Election",
    photo: "images/john-quincy-adams.png",
    notes: "to Andrew Jackson"
});

const potus07 = new President({
    number: "7th",
    name: "Andrew Jackson",
    birthplace: "Carolinas",
    birthplaceRegion: "Southeast",
    partyAffiliation: "Democratic",
    yearInaugurated: 1829,
    ageInaugurated: 61,
    ageInauguratedGroup: "Sixties",
    maritalStatus: "Widower",
    previousJob: "Senator, Tennessee",
    previousJobType: "Congress",
    timeInOffice: "8 years", //96 months
    timeInOfficeGroup: "Two Terms",
    reasonForDeparture: "Retired",
    photo: "images/andrew-jackson.png",
    notes: ""
});

const potus08 = new President({
    number: "8th",
    name: "Martin Van Buren",
    birthplace: "New York",
    birthplaceRegion: "Mideast",
    partyAffiliation: "Democratic",
    yearInaugurated: 1837,
    ageInaugurated: 54,
    ageInauguratedGroup: "Fifties",
    maritalStatus: "Widower",
    previousJob: "Vice President",
    previousJobType: "Executive Office",
    timeInOffice: "4 years", //48 months
    timeInOfficeGroup: "One Term",
    reasonForDeparture: "Lost Election",
    photo: "images/martin-vanburen.png",
    notes: "to William Henry Harrison"
});

const potus09 = new President({
    number: "9th",
    name: "William Henry Harrison",
    birthplace: "Virginia",
    birthplaceRegion: "Southeast",
    partyAffiliation: "Whig",
    yearInaugurated: 1841,
    ageInaugurated: 68,
    ageInauguratedGroup: "Sixties",
    maritalStatus: "Married",
    previousJob: "Minister, Colombia",
    previousJobType: "Diplomatic",
    timeInOffice: "1 month",
    timeInOfficeGroup: "Less Than One Term",
    reasonForDeparture: "Died",
    photo: "images/william-harrison.png",
    notes: "pneumonia"
});

const potus10 = new President({
    number: "10th",
    name: "John Tyler",
    birthplace: "Virginia",
    birthplaceRegion: "Southeast",
    partyAffiliation: "Whig",
    yearInaugurated: 1841,
    ageInaugurated: 51,
    ageInauguratedGroup: "Fifties",
    maritalStatus: "Married",
    previousJob: "Vice President",
    previousJobType: "Executive Office",
    timeInOffice: "3 years, 11 months", //47 months
    timeInOfficeGroup: "Less Than One Term",
    reasonForDeparture: "Not Nominated",
    photo: "images/john-tyler.png",
    notes: ""
});

const potus11 = new President({
    number: "11th",
    name: "James K. Polk",
    birthplace: "North Carolina",
    birthplaceRegion: "Southeast",
    partyAffiliation: "Democratic",
    yearInaugurated: 1845,
    ageInaugurated: 49,
    ageInauguratedGroup: "Forties",
    maritalStatus: "Married",
    previousJob: "Governor, Tennessee",
    previousJobType: "Governor",
    timeInOffice: "4 years", //48 months
    timeInOfficeGroup: "One Term",
    reasonForDeparture: "Retired",
    photo: "images/james-polk.png",
    notes: ""
});

const potus12 = new President({
    number: "12th",
    name: "Zachary Taylor",
    birthplace: "Virginia",
    birthplaceRegion: "Southeast",
    partyAffiliation: "Whig",
    yearInaugurated: 1849,
    ageInaugurated: 64,
    ageInauguratedGroup: "Sixties",
    maritalStatus: "Married",
    previousJob: "Major General, US Army",
    previousJobType: "Military",
    timeInOffice: "1 year, 4 months", //16 months
    timeInOfficeGroup: "Less Than One Term",
    reasonForDeparture: "Died",
    photo: "images/zachary-taylor.png",
    notes: "cholera morbus"
});

const potus13 = new President({
    number: "13th",
    name: "Millard Fillmore",
    birthplace: "New York",
    birthplaceRegion: "Mideast",
    partyAffiliation: "Whig",
    yearInaugurated: 1850,
    ageInaugurated: 50,
    ageInauguratedGroup: "Fifties",
    maritalStatus: "Married",
    previousJob: "Vice President",
    previousJobType: "Executive Office",
    timeInOffice: "2 years, 7 months", //31 months
    timeInOfficeGroup: "Less Than One Term",
    reasonForDeparture: "Not Nominated",
    photo: "images/millard-fillmore.png",
    notes: ""
});

const potus14 = new President({
    number: "14th",
    name: "Franklin Pierce",
    birthplace: "New Hampshire",
    birthplaceRegion: "New England",
    partyAffiliation: "Democratic",
    yearInaugurated: 1853,
    ageInaugurated: 48,
    ageInauguratedGroup: "Forties",
    maritalStatus: "Married",
    previousJob: "Brigadier General, US Army",
    previousJobType: "Military",
    timeInOffice: "4 years", //48 months
    timeInOfficeGroup: "One Term",
    reasonForDeparture: "Not Nominated",
    photo: "images/franklin-pierce.png",
    notes: ""
});

const potus15 = new President({
    number: "15th",
    name: "James Buchanan",
    birthplace: "Pennsylvania",
    birthplaceRegion: "Mideast",
    partyAffiliation: "Democratic",
    yearInaugurated: 1857,
    ageInaugurated: 65,
    ageInauguratedGroup: "Sixties",
    maritalStatus: "Never Married",
    previousJob: "Minister, Court of St James's",
    previousJobType: "Diplomatic",
    timeInOffice: "4 years", //48 months
    timeInOfficeGroup: "One Term",
    reasonForDeparture: "Retired",
    photo: "images/james-buchanan.png",
    notes: ""
});

const potus16 = new President({
    number: "16th",
    name: "Abraham Lincoln",
    birthplace: "Kentucky",
    birthplaceRegion: "Southeast",
    partyAffiliation: "Republican",
    yearInaugurated: 1861,
    ageInaugurated: 52,
    ageInauguratedGroup: "Fifties",
    maritalStatus: "Married",
    previousJob: "Representative, Illinois",
    previousJobType: "Congress",
    timeInOffice: "4 years, 1 month", //49 months
    timeInOfficeGroup: "Between One And Two Terms",
    reasonForDeparture: "Died",
    photo: "images/abraham-lincoln.png",
    notes: "assassinated"
});

const potus17 = new President({
    number: "17th",
    name: "Andrew Johnson",
    birthplace: "North Carolina",
    birthplaceRegion: "Southeast",
    partyAffiliation: "Democratic",
    yearInaugurated: 1865,
    ageInaugurated: 56,
    ageInauguratedGroup: "Fifties",
    maritalStatus: "Married",
    previousJob: "Vice President",
    previousJobType: "Executive Office",
    timeInOffice: "3 years, 10 months", //46 months
    timeInOfficeGroup: "Less Than One Term",
    reasonForDeparture: "Not Nominated",
    photo: "images/andrew-johnson.png",
    notes: ""
});

const potus18 = new President({
    number: "18th",
    name: "Ulysses S. Grant",
    birthplace: "Ohio",
    birthplaceRegion: "Great Lakes",
    partyAffiliation: "Republican",
    yearInaugurated: 1869,
    ageInaugurated: 46,
    ageInauguratedGroup: "Forties",
    maritalStatus: "Married",
    previousJob: "Commanding General, US Army",
    previousJobType: "Military",
    timeInOffice: "8 years", //96 months
    timeInOfficeGroup: "Two Terms",
    reasonForDeparture: "Retired",
    photo: "images/ulysses-grant.png",
    notes: ""
});

const potus19 = new President({
    number: "19th",
    name: "Rutherford B. Hayes",
    birthplace: "Ohio",
    birthplaceRegion: "Great Lakes",
    partyAffiliation: "Republican",
    yearInaugurated: 1877,
    ageInaugurated: 54,
    ageInauguratedGroup: "Fifties",
    maritalStatus: "Married",
    previousJob: "Governor, Ohio",
    previousJobType: "Governor",
    timeInOffice: "4 years", //48 months
    timeInOfficeGroup: "One Term",
    reasonForDeparture: "Retired",
    photo: "images/rutherford-hayes.png",
    notes: ""
});

const potus20 = new President({
    number: "20th",
    name: "James A. Garfield",
    birthplace: "Ohio",
    birthplaceRegion: "Great Lakes",
    partyAffiliation: "Republican",
    yearInaugurated: 1881,
    ageInaugurated: 49,
    ageInauguratedGroup: "Forties",
    maritalStatus: "Married",
    previousJob: "Representative, Ohio",
    previousJobType: "Congress",
    timeInOffice: "6 months",
    timeInOfficeGroup: "Less Than One Term",
    reasonForDeparture: "Died",
    photo: "images/james-garfield.png",
    notes: "assassinated"
});

const potus21 = new President({
    number: "21st",
    name: "Chester A. Arthur",
    birthplace: "Vermont",
    birthplaceRegion: "New England",
    partyAffiliation: "Republican",
    yearInaugurated: 1881,
    ageInaugurated: 51,
    ageInauguratedGroup: "Fifties",
    maritalStatus: "Widower",
    previousJob: "Vice President",
    previousJobType: "Executive Office",
    timeInOffice: "3 years, 5 months", //41 months
    timeInOfficeGroup: "Less Than One Term",
    reasonForDeparture: "Not Nominated",
    photo: "images/chester-arthur.png",
    notes: ""
});

const potus22 = new President({
    number: "22nd",
    name: "Grover Cleveland",
    birthplace: "New Jersey",
    birthplaceRegion: "Mideast",
    partyAffiliation: "Democratic",
    ageInaugurated: 47,
    yearInaugurated: 1885,
    ageInauguratedGroup: "Forties",
    maritalStatus: "Married",
    previousJob: "Governor, New York",
    previousJobType: "Governor",
    timeInOffice: "4 years", //48 months
    timeInOfficeGroup: "One Term",
    reasonForDeparture: "Lost Election",
    photo: "images/grover-cleveland.png",
    notes: "to Benjamin Harrison"
});

const potus23 = new President({
    number: "23rd",
    name: "Benjamin Harrison",
    birthplace: "Ohio",
    birthplaceRegion: "Great Lakes",
    partyAffiliation: "Republican",
    yearInaugurated: 1889,
    ageInaugurated: 55,
    ageInauguratedGroup: "Fifties",
    maritalStatus: "Married",
    previousJob: "Senator, Indiana",
    previousJobType: "Congress",
    timeInOffice: "4 years", //48 months
    timeInOfficeGroup: "One Term",
    reasonForDeparture: "Lost Election",
    photo: "images/benjamin-harrison.png",
    notes: "to Grover Cleveland"
});

const potus24 = new President({
    number: "24th",
    name: "Grover Cleveland",
    birthplace: "New Jersey",
    birthplaceRegion: "Mideast",
    partyAffiliation: "Democratic",
    yearInaugurated: 1893,
    ageInaugurated: 55,
    ageInauguratedGroup: "Fifties",
    maritalStatus: "Married",
    previousJob: "President",
    previousJobType: "Executive Office",
    timeInOffice: "4 years", //48 months
    timeInOfficeGroup: "One Term",
    reasonForDeparture: "Retired",
    photo: "images/grover-cleveland.png",
    notes: "Grover Cleveland was the 22nd and 24th President."
});

const potus25 = new President({
    number: "25th",
    name: "William McKinley",
    birthplace: "Ohio",
    birthplaceRegion: "Great Lakes",
    partyAffiliation: "Republican",
    yearInaugurated: 1897,
    ageInaugurated: 54,
    ageInauguratedGroup: "Fifties",
    maritalStatus: "Married",
    previousJob: "Governor, Ohio",
    previousJobType: "Governor",
    timeInOffice: "4 years, 6 months", //54 months
    timeInOfficeGroup: "Between One And Two Terms",
    reasonForDeparture: "Died",
    photo: "images/william-mckinley.png",
    notes: "assassinated"
});

const potus26 = new President({
    number: "26th",
    name: "Theodore Roosevelt",
    birthplace: "New York",
    birthplaceRegion: "Mideast",
    partyAffiliation: "Republican",
    yearInaugurated: 1901,
    ageInaugurated: 42,
    ageInauguratedGroup: "Forties",
    maritalStatus: "Married",
    previousJob: "Vice President",
    previousJobType: "Executive Office",
    timeInOffice: "7 years, 5 months", //89 months
    timeInOfficeGroup: "Between One And Two Terms",
    reasonForDeparture: "Retired",
    photo: "images/theodore-roosevelt.png",
    notes: ""
});

const potus27 = new President({
    number: "27th",
    name: "William Howard Taft",
    birthplace: "Ohio",
    birthplaceRegion: "Great Lakes",
    partyAffiliation: "Republican",
    yearInaugurated: 1909,
    ageInaugurated: 51,
    ageInauguratedGroup: "Fifties",
    maritalStatus: "Married",
    previousJob: "Secretary of War",
    previousJobType: "Cabinet",
    timeInOffice: "4 years", //48 months
    timeInOfficeGroup: "One Term",
    reasonForDeparture: "Lost Election",
    photo: "images/william-taft.png",
    notes: "to Woodrow Wilson"
});

const potus28 = new President({
    number: "28th",
    name: "Woodrow Wilson",
    birthplace: "Virginia",
    birthplaceRegion: "Southeast",
    partyAffiliation: "Democratic",
    yearInaugurated: 1913,
    ageInaugurated: 56,
    ageInauguratedGroup: "Fifties",
    maritalStatus: "Widower",
    previousJob: "Governor, New Jersey",
    previousJobType: "Governor",
    timeInOffice: "8 years", //96 months
    timeInOfficeGroup: "Two Terms",
    reasonForDeparture: "Retired",
    photo: "images/woodrow-wilson.png",
    notes: ""
});

const potus29 = new President({
    number: "29th",
    name: "Warren G. Harding",
    birthplace: "Ohio",
    birthplaceRegion: "Great Lakes",
    partyAffiliation: "Republican",
    yearInaugurated: 1921,
    ageInaugurated: 55,
    ageInauguratedGroup: "Fifties",
    maritalStatus: "Married",
    previousJob: "Senator, Ohio",
    previousJobType: "Congress",
    timeInOffice: "2 years, 4 months", //28 months
    timeInOfficeGroup: "Less Than One Term",
    reasonForDeparture: "Died",
    photo: "images/warren-harding.png",
    notes: "heart attack"
});

const potus30 = new President({
    number: "30th",
    name: "Calvin Coolidge",
    birthplace: "Vermont",
    birthplaceRegion: "New England",
    partyAffiliation: "Republican",
    yearInaugurated: 1923,
    ageInaugurated: 51,
    ageInauguratedGroup: "Fifties",
    maritalStatus: "Married",
    previousJob: "Vice President",
    previousJobType: "Executive Office",
    timeInOffice: "5 years, 7 months", //67 months
    timeInOfficeGroup: "Between One And Two Terms",
    reasonForDeparture: "Retired",
    photo: "images/calvin-coolidge.png",
    notes: ""
});

const potus31 = new President({
    number: "31st",
    name: "Herbert Hoover",
    birthplace: "Iowa",
    birthplaceRegion: "Plains",
    partyAffiliation: "Republican",
    yearInaugurated: 1929,
    ageInaugurated: 54,
    ageInauguratedGroup: "Fifties",
    maritalStatus: "Married",
    previousJob: "Secretary of Commerce",
    previousJobType: "Cabinet",
    timeInOffice: "4 years", //48 months
    timeInOfficeGroup: "One Term",
    reasonForDeparture: "Lost Election",
    photo: "images/herbert-hoover.png",
    notes: "to Franklin D. Roosevelt"
});

const potus32 = new President({
    number: "32nd",
    name: "Franklin D. Roosevelt",
    birthplace: "New York",
    birthplaceRegion: "Mideast",
    partyAffiliation: "Democratic",
    yearInaugurated: 1933,
    ageInaugurated: 51,
    ageInauguratedGroup: "Fifties",
    maritalStatus: "Married",
    previousJob: "Governor, New York",
    previousJobType: "Governor",
    timeInOffice: "12 years, 1 month", //145 months
    timeInOfficeGroup: "More Than Two Terms",
    reasonForDeparture: "Died",
    photo: "images/franklin-roosevelt.png",
    notes: "cerebral hemorrhage"
});

const potus33 = new President({
    number: "33rd",
    name: "Harry S. Truman",
    birthplace: "Missouri",
    birthplaceRegion: "Plains",
    partyAffiliation: "Democratic",
    yearInaugurated: 1945,
    ageInaugurated: 60,
    ageInauguratedGroup: "Sixties",
    maritalStatus: "Married",
    previousJob: "Vice President",
    previousJobType: "Executive Office",
    timeInOffice: "7 years, 9 months", //93 months
    timeInOfficeGroup: "Between One And Two Terms",
    reasonForDeparture: "Retired",
    photo: "images/harry-truman.png",
    notes: ""
});

const potus34 = new President({
    number: "34th",
    name: "Dwight D. Eisenhower",
    birthplace: "Texas",
    birthplaceRegion: "Southwest",
    partyAffiliation: "Republican",
    yearInaugurated: 1953,
    ageInaugurated: 62,
    ageInauguratedGroup: "Sixties",
    maritalStatus: "Married",
    previousJob: "Supreme Allied Commander",
    previousJobType: "Military",
    timeInOffice: "8 years", //96 months
    timeInOfficeGroup: "Two Terms",
    reasonForDeparture: "Term Limited",
    photo: "images/dwight-eisenhower.png",
    notes: "First term-limited president due to new 22 Amendment."
});

const potus35 = new President({
    number: "35th",
    name: "John F. Kennedy",
    birthplace: "Massachusetts",
    birthplaceRegion: "New England",
    partyAffiliation: "Democratic",
    yearInaugurated: 1961,
    ageInaugurated: 43,
    ageInauguratedGroup: "Forties",
    maritalStatus: "Married",
    previousJob: "Senator, Massachusetts",
    previousJobType: "Congress",
    timeInOffice: "2 years, 10 months", //34 months
    timeInOfficeGroup: "Less Than One Term",
    reasonForDeparture: "Died",
    photo: "images/john-kennedy.png",
    notes: "assassinated"
});

const potus36 = new President({
    number: "36th",
    name: "Lyndon B. Johnson",
    birthplace: "Texas",
    birthplaceRegion: "Southwest",
    partyAffiliation: "Democratic",
    yearInaugurated: 1963,
    ageInaugurated: 55,
    ageInauguratedGroup: "Fifties",
    maritalStatus: "Married",
    previousJob: "Vice President",
    previousJobType: "Executive Office",
    timeInOffice: "5 years, 1 month", //61 months
    timeInOfficeGroup: "Between One And Two Terms",
    reasonForDeparture: "Retired",
    photo: "images/lyndon-johnson.png",
    notes: ""
});

const potus37 = new President({
    number: "37th",
    name: "Richard Nixon",
    birthplace: "California",
    birthplaceRegion: "Far West",
    partyAffiliation: "Republican",
    yearInaugurated: 1969,
    ageInaugurated: 56,
    ageInauguratedGroup: "Fifties",
    maritalStatus: "Married",
    previousJob: "Vice President",
    previousJobType: "Executive Office",
    timeInOffice: "5 years, 6 months", //66 months
    timeInOfficeGroup: "Between One And Two Terms",
    reasonForDeparture: "Resigned",
    photo: "images/richard-nixon.png",
    notes: ""
});

const potus38 = new President({
    number: "38th",
    name: "Gerald Ford",
    birthplace: "Nebraska",
    birthplaceRegion: "Plains",
    partyAffiliation: "Republican",
    yearInaugurated: 1974,
    ageInaugurated: 61,
    ageInauguratedGroup: "Sixties",
    maritalStatus: "Married",
    previousJob: "Vice President",
    previousJobType: "Executive Office",
    timeInOffice: "2 years, 5 months", //29 months
    timeInOfficeGroup: "Less Than One Term",
    reasonForDeparture: "Lost Election",
    photo: "images/gerald-ford.png",
    notes: "to Jimmy Carter"
});

const potus39 = new President({
    number: "39th",
    name: "Jimmy Carter",
    birthplace: "Georgia",
    birthplaceRegion: "Southeast",
    partyAffiliation: "Democratic",
    yearInaugurated: 1977,
    ageInaugurated: 52,
    ageInauguratedGroup: "Fifties",
    maritalStatus: "Married",
    previousJob: "Governor, Georgia",
    previousJobType: "Governor",
    timeInOffice: "4 years", //48 months
    timeInOfficeGroup: "One Term",
    reasonForDeparture: "Lost Election",
    photo: "images/jimmy-carter.png",
    notes: "to Ronald Reagan"
});

const potus40 = new President({
    number: "40th",
    name: "Ronald Reagan",
    birthplace: "Illinois",
    birthplaceRegion: "Great Lakes",
    partyAffiliation: "Republican",
    yearInaugurated: 1981,
    ageInaugurated: 69,
    ageInauguratedGroup: "Sixties",
    maritalStatus: "Married",
    previousJob: "Governor, California",
    previousJobType: "Governor",
    timeInOffice: "8 years", //96 months
    timeInOfficeGroup: "Two Terms",
    reasonForDeparture: "Term Limited",
    photo: "images/ronald-reagan.png",
    notes: ""
});

const potus41 = new President({
    number: "41st",
    name: "George H. W. Bush",
    birthplace: "Massachusetts",
    birthplaceRegion: "New England",
    partyAffiliation: "Republican",
    yearInaugurated: 1989,
    ageInaugurated: 64,
    ageInauguratedGroup: "Sixties",
    maritalStatus: "Married",
    previousJob: "Vice President",
    previousJobType: "Executive Office",
    timeInOffice: "4 years", //48 months
    timeInOfficeGroup: "One Term",
    reasonForDeparture: "Lost Election",
    photo: "images/george-hw-bush.png",
    notes: "to Bill Clinton"
});

const potus42 = new President({
    number: "42nd",
    name: "Bill Clinton",
    birthplace: "Arkansas",
    birthplaceRegion: "Southeast",
    partyAffiliation: "Democratic",
    yearInaugurated: 1993,
    ageInaugurated: 46,
    ageInauguratedGroup: "Forties",
    maritalStatus: "Married",
    previousJob: "Governor, Arkansas",
    previousJobType: "Governor",
    timeInOffice: "8 years", //96 months
    timeInOfficeGroup: "Two Terms",
    reasonForDeparture: "Term Limited",
    photo: "images/bill-clinton.png",
    notes: ""
});

const potus43 = new President({
    number: "43rd",
    name: "George W. Bush",
    birthplace: "Connecticut",
    birthplaceRegion: "New England",
    partyAffiliation: "Republican",
    yearInaugurated: 2001,
    ageInaugurated: 54,
    ageInauguratedGroup: "Fifties",
    maritalStatus: "Married",
    previousJob: "Governor, Texas",
    previousJobType: "Governor",
    timeInOffice: "8 years", //96 months
    timeInOfficeGroup: "Two Terms",
    reasonForDeparture: "Term Limited",
    photo: "images/george-w-bush.png",
    notes: ""
});

const potus44 = new President({
    number: "44th",
    name: "Barack Obama",
    birthplace: "Hawaii",
    birthplaceRegion: "Far West",
    partyAffiliation: "Democratic",
    yearInaugurated: 2009,
    ageInaugurated: 47,
    ageInauguratedGroup: "Forties",
    maritalStatus: "Married",
    previousJob: "Senator, Illinois",
    previousJobType: "Congress",
    timeInOffice: "8 years", //96 months
    timeInOfficeGroup: "Two Terms",
    reasonForDeparture: "Term Limited",
    photo: "images/barack-obama.png",
    notes: ""
});

const potus45 = new President({
    number: "45th",
    name: "Donald Trump",
    birthplace: "New York",
    birthplaceRegion: "Mideast",
    partyAffiliation: "Republican",
    yearInaugurated: 2017,
    ageInaugurated: 70,
    ageInauguratedGroup: "Seventies",
    maritalStatus: "Married",
    previousJob: "Chair, Trump Org.",
    previousJobType: "Private Industry",
    timeInOffice: "n/a",
    timeInOfficeGroup: "n/a",
    reasonForDeparture: "n/a",
    photo: "images/donald-trump.png",
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