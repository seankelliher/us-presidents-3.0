//Constructor function.
function President(
    {
        number = "",
        name = "",
        birthplace = "",
        birthplaceRegion = "",
        party = "",
        yearInaugurated = "",
        age = "",
        ageGroup = "",
        maritalStatus = "",
        previousJob = "",
        previousJobGroup = "",
        termsInOffice = "",
        termsInOfficeGroup = "",
        departure = "",
        photo = "",
        notes = ""
    }
) {
    this.number = number;
    this.name = name;
    this.birthplace = birthplace;
    this.birthplaceRegion = birthplaceRegion;
    this.party = party;
    this.yearInaugurated = yearInaugurated;
    this.ageGroup = ageGroup;
    this.age = age;
    this.maritalStatus = maritalStatus;
    this.previousJob = previousJob;
    this.previousJobGroup = previousJobGroup;
    this.termsInOffice = termsInOffice;
    this.termsInOfficeGroup = termsInOfficeGroup;
    this.departure = departure;
    this.photo = photo;
    this.notes = notes;
}

//Constructor function invocations.
const potus01 = new President({
    number: "1st",
    name: "George Washington",
    birthplace: "Virginia",
    birthplaceRegion: "Southeast",
    party: "Unaffiliated",
    yearInaugurated: 1789,
    age: 57,
    ageGroup: "Fifties",
    maritalStatus: "Married",
    previousJob: "Commander in Chief, Continental Army",
    previousJobGroup: "Military",
    termsInOffice: "8 years", //96 months
    termsInOfficeGroup: "Two",
    departure: "Retired",
    photo: "images/george-washington.png",
    notes: ""
});

const potus02 = new President({
    number: "2nd",
    name: "John Adams",
    birthplace: "Massachusetts",
    birthplaceRegion: "New England",
    party: "Federalist",
    yearInaugurated: 1797,
    age: 61,
    ageGroup: "Sixties",
    maritalStatus: "Married",
    previousJob: "Vice President",
    previousJobGroup: "Executive Office",
    termsInOffice: "4 years", //48 months
    termsInOfficeGroup: "One",
    departure: "Lost Election",
    photo: "images/john-adams.png",
    notes: "to Thomas Jefferson"
});

const potus03 = new President({
    number: "3rd",
    name: "Thomas Jefferson",
    birthplace: "Virginia",
    birthplaceRegion: "Southeast",
    party: "Democratic Republican",
    yearInaugurated: 1801,
    age: 57,
    ageGroup: "Fifties",
    maritalStatus: "Widower",
    previousJob: "Vice President",
    previousJobGroup: "Executive Office",
    termsInOffice: "8 years", //96 months
    termsInOfficeGroup: "Two",
    departure: "Retired",
    photo: "images/thomas-jefferson.png",
    notes: ""
});

const potus04 = new President({
    number: "4th",
    name: "James Madison",
    birthplace: "Virginia",
    birthplaceRegion: "Southeast",
    party: "Democratic Republican",
    yearInaugurated: 1809,
    age: 57,
    ageGroup: "Fifties",
    maritalStatus: "Married",
    previousJob: "Secretary of State",
    previousJobGroup: "Cabinet",
    termsInOffice: "8 years", //96 months
    termsInOfficeGroup: "Two",
    departure: "Retired",
    photo: "images/james-madison.png",
    notes: ""
});

const potus05 = new President({
    number: "5th",
    name: "James Monroe",
    birthplace: "Virginia",
    birthplaceRegion: "Southeast",
    party: "Democratic Republican",
    yearInaugurated: 1817,
    age: 58,
    ageGroup: "Fifties",
    maritalStatus: "Married",
    previousJob: "Secretary of State",
    previousJobGroup: "Cabinet",
    termsInOffice: "8 years", //96 months
    termsInOfficeGroup: "Two",
    departure: "Retired",
    photo: "images/james-monroe.png",
    notes: ""
});

const potus06 = new President({
    number: "6th",
    name: "John Quincy Adams",
    birthplace: "Massachusetts",
    birthplaceRegion: "New England",
    party: "Democratic Republican",
    yearInaugurated: 1825,
    age: 57,
    ageGroup: "Fifties",
    maritalStatus: "Married",
    previousJob: "Secretary of State",
    previousJobGroup: "Cabinet",
    termsInOffice: "4 years", //48 months
    termsInOfficeGroup: "One",
    departure: "Lost Election",
    photo: "images/john-quincy-adams.png",
    notes: "to Andrew Jackson"
});

const potus07 = new President({
    number: "7th",
    name: "Andrew Jackson",
    birthplace: "Carolinas",
    birthplaceRegion: "Southeast",
    party: "Democratic",
    yearInaugurated: 1829,
    age: 61,
    ageGroup: "Sixties",
    maritalStatus: "Widower",
    previousJob: "Senator, Tennessee",
    previousJobGroup: "Congress",
    termsInOffice: "8 years", //96 months
    termsInOfficeGroup: "Two",
    departure: "Retired",
    photo: "images/andrew-jackson.png",
    notes: ""
});

const potus08 = new President({
    number: "8th",
    name: "Martin Van Buren",
    birthplace: "New York",
    birthplaceRegion: "Mideast",
    party: "Democratic",
    yearInaugurated: 1837,
    age: 54,
    ageGroup: "Fifties",
    maritalStatus: "Widower",
    previousJob: "Vice President",
    previousJobGroup: "Executive Office",
    termsInOffice: "4 years", //48 months
    termsInOfficeGroup: "One",
    departure: "Lost Election",
    photo: "images/martin-vanburen.png",
    notes: "to William Henry Harrison"
});

const potus09 = new President({
    number: "9th",
    name: "William Henry Harrison",
    birthplace: "Virginia",
    birthplaceRegion: "Southeast",
    party: "Whig",
    yearInaugurated: 1841,
    age: 68,
    ageGroup: "Sixties",
    maritalStatus: "Married",
    previousJob: "Minister, Colombia",
    previousJobGroup: "Diplomatic",
    termsInOffice: "1 month",
    termsInOfficeGroup: "Less Than One",
    departure: "Died",
    photo: "images/william-harrison.png",
    notes: "pneumonia"
});

const potus10 = new President({
    number: "10th",
    name: "John Tyler",
    birthplace: "Virginia",
    birthplaceRegion: "Southeast",
    party: "Whig",
    yearInaugurated: 1841,
    age: 51,
    ageGroup: "Fifties",
    maritalStatus: "Married",
    previousJob: "Vice President",
    previousJobGroup: "Executive Office",
    termsInOffice: "3 years, 11 months", //47 months
    termsInOfficeGroup: "Less Than One",
    departure: "Not Nominated",
    photo: "images/john-tyler.png",
    notes: ""
});

const potus11 = new President({
    number: "11th",
    name: "James K. Polk",
    birthplace: "North Carolina",
    birthplaceRegion: "Southeast",
    party: "Democratic",
    yearInaugurated: 1845,
    age: 49,
    ageGroup: "Forties",
    maritalStatus: "Married",
    previousJob: "Governor, Tennessee",
    previousJobGroup: "Governor",
    termsInOffice: "4 years", //48 months
    termsInOfficeGroup: "One",
    departure: "Retired",
    photo: "images/james-polk.png",
    notes: ""
});

const potus12 = new President({
    number: "12th",
    name: "Zachary Taylor",
    birthplace: "Virginia",
    birthplaceRegion: "Southeast",
    party: "Whig",
    yearInaugurated: 1849,
    age: 64,
    ageGroup: "Sixties",
    maritalStatus: "Married",
    previousJob: "Major General, US Army",
    previousJobGroup: "Military",
    termsInOffice: "1 year, 4 months", //16 months
    termsInOfficeGroup: "Less Than One",
    departure: "Died",
    photo: "images/zachary-taylor.png",
    notes: "cholera morbus"
});

const potus13 = new President({
    number: "13th",
    name: "Millard Fillmore",
    birthplace: "New York",
    birthplaceRegion: "Mideast",
    party: "Whig",
    yearInaugurated: 1850,
    age: 50,
    ageGroup: "Fifties",
    maritalStatus: "Married",
    previousJob: "Vice President",
    previousJobGroup: "Executive Office",
    termsInOffice: "2 years, 7 months", //31 months
    termsInOfficeGroup: "Less Than One",
    departure: "Not Nominated",
    photo: "images/millard-fillmore.png",
    notes: ""
});

const potus14 = new President({
    number: "14th",
    name: "Franklin Pierce",
    birthplace: "New Hampshire",
    birthplaceRegion: "New England",
    party: "Democratic",
    yearInaugurated: 1853,
    age: 48,
    ageGroup: "Forties",
    maritalStatus: "Married",
    previousJob: "Brigadier General, US Army",
    previousJobGroup: "Military",
    termsInOffice: "4 years", //48 months
    termsInOfficeGroup: "One",
    departure: "Not Nominated",
    photo: "images/franklin-pierce.png",
    notes: ""
});

const potus15 = new President({
    number: "15th",
    name: "James Buchanan",
    birthplace: "Pennsylvania",
    birthplaceRegion: "Mideast",
    party: "Democratic",
    yearInaugurated: 1857,
    age: 65,
    ageGroup: "Sixties",
    maritalStatus: "Never Married",
    previousJob: "Minister, Court of St James's",
    previousJobGroup: "Diplomatic",
    termsInOffice: "4 years", //48 months
    termsInOfficeGroup: "One",
    departure: "Retired",
    photo: "images/james-buchanan.png",
    notes: ""
});

const potus16 = new President({
    number: "16th",
    name: "Abraham Lincoln",
    birthplace: "Kentucky",
    birthplaceRegion: "Southeast",
    party: "Republican",
    yearInaugurated: 1861,
    age: 52,
    ageGroup: "Fifties",
    maritalStatus: "Married",
    previousJob: "Representative, Illinois",
    previousJobGroup: "Congress",
    termsInOffice: "4 years, 1 month", //49 months
    termsInOfficeGroup: "Between One And Two",
    departure: "Died",
    photo: "images/abraham-lincoln.png",
    notes: "assassinated"
});

const potus17 = new President({
    number: "17th",
    name: "Andrew Johnson",
    birthplace: "North Carolina",
    birthplaceRegion: "Southeast",
    party: "Democratic",
    yearInaugurated: 1865,
    age: 56,
    ageGroup: "Fifties",
    maritalStatus: "Married",
    previousJob: "Vice President",
    previousJobGroup: "Executive Office",
    termsInOffice: "3 years, 10 months", //46 months
    termsInOfficeGroup: "Less Than One",
    departure: "Not Nominated",
    photo: "images/andrew-johnson.png",
    notes: ""
});

const potus18 = new President({
    number: "18th",
    name: "Ulysses S. Grant",
    birthplace: "Ohio",
    birthplaceRegion: "Great Lakes",
    party: "Republican",
    yearInaugurated: 1869,
    age: 46,
    ageGroup: "Forties",
    maritalStatus: "Married",
    previousJob: "Commanding General, US Army",
    previousJobGroup: "Military",
    termsInOffice: "8 years", //96 months
    termsInOfficeGroup: "Two",
    departure: "Retired",
    photo: "images/ulysses-grant.png",
    notes: ""
});

const potus19 = new President({
    number: "19th",
    name: "Rutherford B. Hayes",
    birthplace: "Ohio",
    birthplaceRegion: "Great Lakes",
    party: "Republican",
    yearInaugurated: 1877,
    age: 54,
    ageGroup: "Fifties",
    maritalStatus: "Married",
    previousJob: "Governor, Ohio",
    previousJobGroup: "Governor",
    termsInOffice: "4 years", //48 months
    termsInOfficeGroup: "One",
    departure: "Retired",
    photo: "images/rutherford-hayes.png",
    notes: ""
});

const potus20 = new President({
    number: "20th",
    name: "James A. Garfield",
    birthplace: "Ohio",
    birthplaceRegion: "Great Lakes",
    party: "Republican",
    yearInaugurated: 1881,
    age: 49,
    ageGroup: "Forties",
    maritalStatus: "Married",
    previousJob: "Representative, Ohio",
    previousJobGroup: "Congress",
    termsInOffice: "6 months",
    termsInOfficeGroup: "Less Than One",
    departure: "Died",
    photo: "images/james-garfield.png",
    notes: "assassinated"
});

const potus21 = new President({
    number: "21st",
    name: "Chester A. Arthur",
    birthplace: "Vermont",
    birthplaceRegion: "New England",
    party: "Republican",
    yearInaugurated: 1881,
    age: 51,
    ageGroup: "Fifties",
    maritalStatus: "Widower",
    previousJob: "Vice President",
    previousJobGroup: "Executive Office",
    termsInOffice: "3 years, 5 months", //41 months
    termsInOfficeGroup: "Less Than One",
    departure: "Not Nominated",
    photo: "images/chester-arthur.png",
    notes: ""
});

const potus22 = new President({
    number: "22nd",
    name: "Grover Cleveland",
    birthplace: "New Jersey",
    birthplaceRegion: "Mideast",
    party: "Democratic",
    age: 47,
    yearInaugurated: 1885,
    ageGroup: "Forties",
    maritalStatus: "Married",
    previousJob: "Governor, New York",
    previousJobGroup: "Governor",
    termsInOffice: "4 years", //48 months
    termsInOfficeGroup: "One",
    departure: "Lost Election",
    photo: "images/grover-cleveland.png",
    notes: "to Benjamin Harrison"
});

const potus23 = new President({
    number: "23rd",
    name: "Benjamin Harrison",
    birthplace: "Ohio",
    birthplaceRegion: "Great Lakes",
    party: "Republican",
    yearInaugurated: 1889,
    age: 55,
    ageGroup: "Fifties",
    maritalStatus: "Married",
    previousJob: "Senator, Indiana",
    previousJobGroup: "Congress",
    termsInOffice: "4 years", //48 months
    termsInOfficeGroup: "One",
    departure: "Lost Election",
    photo: "images/benjamin-harrison.png",
    notes: "to Grover Cleveland"
});

const potus24 = new President({
    number: "24th",
    name: "Grover Cleveland",
    birthplace: "New Jersey",
    birthplaceRegion: "Mideast",
    party: "Democratic",
    yearInaugurated: 1893,
    age: 55,
    ageGroup: "Fifties",
    maritalStatus: "Married",
    previousJob: "President",
    previousJobGroup: "Executive Office",
    termsInOffice: "4 years", //48 months
    termsInOfficeGroup: "One",
    departure: "Retired",
    photo: "images/grover-cleveland.png",
    notes: "Grover Cleveland was the 22nd and 24th President."
});

const potus25 = new President({
    number: "25th",
    name: "William McKinley",
    birthplace: "Ohio",
    birthplaceRegion: "Great Lakes",
    party: "Republican",
    yearInaugurated: 1897,
    age: 54,
    ageGroup: "Fifties",
    maritalStatus: "Married",
    previousJob: "Governor, Ohio",
    previousJobGroup: "Governor",
    termsInOffice: "4 years, 6 months", //54 months
    termsInOfficeGroup: "Between One And Two",
    departure: "Died",
    photo: "images/william-mckinley.png",
    notes: "assassinated"
});

const potus26 = new President({
    number: "26th",
    name: "Theodore Roosevelt",
    birthplace: "New York",
    birthplaceRegion: "Mideast",
    party: "Republican",
    yearInaugurated: 1901,
    age: 42,
    ageGroup: "Forties",
    maritalStatus: "Married",
    previousJob: "Vice President",
    previousJobGroup: "Executive Office",
    termsInOffice: "7 years, 5 months", //89 months
    termsInOfficeGroup: "Between One And Two",
    departure: "Retired",
    photo: "images/theodore-roosevelt.png",
    notes: ""
});

const potus27 = new President({
    number: "27th",
    name: "William Howard Taft",
    birthplace: "Ohio",
    birthplaceRegion: "Great Lakes",
    party: "Republican",
    yearInaugurated: 1909,
    age: 51,
    ageGroup: "Fifties",
    maritalStatus: "Married",
    previousJob: "Secretary of War",
    previousJobGroup: "Cabinet",
    termsInOffice: "4 years", //48 months
    termsInOfficeGroup: "One",
    departure: "Lost Election",
    photo: "images/william-taft.png",
    notes: "to Woodrow Wilson"
});

const potus28 = new President({
    number: "28th",
    name: "Woodrow Wilson",
    birthplace: "Virginia",
    birthplaceRegion: "Southeast",
    party: "Democratic",
    yearInaugurated: 1913,
    age: 56,
    ageGroup: "Fifties",
    maritalStatus: "Widower",
    previousJob: "Governor, New Jersey",
    previousJobGroup: "Governor",
    termsInOffice: "8 years", //96 months
    termsInOfficeGroup: "Two",
    departure: "Retired",
    photo: "images/woodrow-wilson.png",
    notes: ""
});

const potus29 = new President({
    number: "29th",
    name: "Warren G. Harding",
    birthplace: "Ohio",
    birthplaceRegion: "Great Lakes",
    party: "Republican",
    yearInaugurated: 1921,
    age: 55,
    ageGroup: "Fifties",
    maritalStatus: "Married",
    previousJob: "Senator, Ohio",
    previousJobGroup: "Congress",
    termsInOffice: "2 years, 4 months", //28 months
    termsInOfficeGroup: "Less Than One",
    departure: "Died",
    photo: "images/warren-harding.png",
    notes: "heart attack"
});

const potus30 = new President({
    number: "30th",
    name: "Calvin Coolidge",
    birthplace: "Vermont",
    birthplaceRegion: "New England",
    party: "Republican",
    yearInaugurated: 1923,
    age: 51,
    ageGroup: "Fifties",
    maritalStatus: "Married",
    previousJob: "Vice President",
    previousJobGroup: "Executive Office",
    termsInOffice: "5 years, 7 months", //67 months
    termsInOfficeGroup: "Between One And Two",
    departure: "Retired",
    photo: "images/calvin-coolidge.png",
    notes: ""
});

const potus31 = new President({
    number: "31st",
    name: "Herbert Hoover",
    birthplace: "Iowa",
    birthplaceRegion: "Plains",
    party: "Republican",
    yearInaugurated: 1929,
    age: 54,
    ageGroup: "Fifties",
    maritalStatus: "Married",
    previousJob: "Secretary of Commerce",
    previousJobGroup: "Cabinet",
    termsInOffice: "4 years", //48 months
    termsInOfficeGroup: "One",
    departure: "Lost Election",
    photo: "images/herbert-hoover.png",
    notes: "to Franklin D. Roosevelt"
});

const potus32 = new President({
    number: "32nd",
    name: "Franklin D. Roosevelt",
    birthplace: "New York",
    birthplaceRegion: "Mideast",
    party: "Democratic",
    yearInaugurated: 1933,
    age: 51,
    ageGroup: "Fifties",
    maritalStatus: "Married",
    previousJob: "Governor, New York",
    previousJobGroup: "Governor",
    termsInOffice: "12 years, 1 month", //145 months
    termsInOfficeGroup: "More Than Two",
    departure: "Died",
    photo: "images/franklin-roosevelt.png",
    notes: "cerebral hemorrhage"
});

const potus33 = new President({
    number: "33rd",
    name: "Harry S. Truman",
    birthplace: "Missouri",
    birthplaceRegion: "Plains",
    party: "Democratic",
    yearInaugurated: 1945,
    age: 60,
    ageGroup: "Sixties",
    maritalStatus: "Married",
    previousJob: "Vice President",
    previousJobGroup: "Executive Office",
    termsInOffice: "7 years, 9 months", //93 months
    termsInOfficeGroup: "Between One And Two",
    departure: "Retired",
    photo: "images/harry-truman.png",
    notes: ""
});

const potus34 = new President({
    number: "34th",
    name: "Dwight D. Eisenhower",
    birthplace: "Texas",
    birthplaceRegion: "Southwest",
    party: "Republican",
    yearInaugurated: 1953,
    age: 62,
    ageGroup: "Sixties",
    maritalStatus: "Married",
    previousJob: "Supreme Allied Commander",
    previousJobGroup: "Military",
    termsInOffice: "8 years", //96 months
    termsInOfficeGroup: "Two",
    departure: "Term Limited",
    photo: "images/dwight-eisenhower.png",
    notes: "22nd Amendment made Eisenhower the first term-limited president."
});

const potus35 = new President({
    number: "35th",
    name: "John F. Kennedy",
    birthplace: "Massachusetts",
    birthplaceRegion: "New England",
    party: "Democratic",
    yearInaugurated: 1961,
    age: 43,
    ageGroup: "Forties",
    maritalStatus: "Married",
    previousJob: "Senator, Massachusetts",
    previousJobGroup: "Congress",
    termsInOffice: "2 years, 10 months", //34 months
    termsInOfficeGroup: "Less Than One",
    departure: "Died",
    photo: "images/john-kennedy.png",
    notes: "assassinated"
});

const potus36 = new President({
    number: "36th",
    name: "Lyndon B. Johnson",
    birthplace: "Texas",
    birthplaceRegion: "Southwest",
    party: "Democratic",
    yearInaugurated: 1963,
    age: 55,
    ageGroup: "Fifties",
    maritalStatus: "Married",
    previousJob: "Vice President",
    previousJobGroup: "Executive Office",
    termsInOffice: "5 years, 1 month", //61 months
    termsInOfficeGroup: "Between One And Two",
    departure: "Retired",
    photo: "images/lyndon-johnson.png",
    notes: ""
});

const potus37 = new President({
    number: "37th",
    name: "Richard Nixon",
    birthplace: "California",
    birthplaceRegion: "Far West",
    party: "Republican",
    yearInaugurated: 1969,
    age: 56,
    ageGroup: "Fifties",
    maritalStatus: "Married",
    previousJob: "Vice President",
    previousJobGroup: "Executive Office",
    termsInOffice: "5 years, 6 months", //66 months
    termsInOfficeGroup: "Between One And Two",
    departure: "Resigned",
    photo: "images/richard-nixon.png",
    notes: ""
});

const potus38 = new President({
    number: "38th",
    name: "Gerald Ford",
    birthplace: "Nebraska",
    birthplaceRegion: "Plains",
    party: "Republican",
    yearInaugurated: 1974,
    age: 61,
    ageGroup: "Sixties",
    maritalStatus: "Married",
    previousJob: "Vice President",
    previousJobGroup: "Executive Office",
    termsInOffice: "2 years, 5 months", //29 months
    termsInOfficeGroup: "Less Than One",
    departure: "Lost Election",
    photo: "images/gerald-ford.png",
    notes: "to Jimmy Carter"
});

const potus39 = new President({
    number: "39th",
    name: "Jimmy Carter",
    birthplace: "Georgia",
    birthplaceRegion: "Southeast",
    party: "Democratic",
    yearInaugurated: 1977,
    age: 52,
    ageGroup: "Fifties",
    maritalStatus: "Married",
    previousJob: "Governor, Georgia",
    previousJobGroup: "Governor",
    termsInOffice: "4 years", //48 months
    termsInOfficeGroup: "One",
    departure: "Lost Election",
    photo: "images/jimmy-carter.png",
    notes: "to Ronald Reagan"
});

const potus40 = new President({
    number: "40th",
    name: "Ronald Reagan",
    birthplace: "Illinois",
    birthplaceRegion: "Great Lakes",
    party: "Republican",
    yearInaugurated: 1981,
    age: 69,
    ageGroup: "Sixties",
    maritalStatus: "Married",
    previousJob: "Governor, California",
    previousJobGroup: "Governor",
    termsInOffice: "8 years", //96 months
    termsInOfficeGroup: "Two",
    departure: "Term Limited",
    photo: "images/ronald-reagan.png",
    notes: ""
});

const potus41 = new President({
    number: "41st",
    name: "George H. W. Bush",
    birthplace: "Massachusetts",
    birthplaceRegion: "New England",
    party: "Republican",
    yearInaugurated: 1989,
    age: 64,
    ageGroup: "Sixties",
    maritalStatus: "Married",
    previousJob: "Vice President",
    previousJobGroup: "Executive Office",
    termsInOffice: "4 years", //48 months
    termsInOfficeGroup: "One",
    departure: "Lost Election",
    photo: "images/george-hw-bush.png",
    notes: "to Bill Clinton"
});

const potus42 = new President({
    number: "42nd",
    name: "Bill Clinton",
    birthplace: "Arkansas",
    birthplaceRegion: "Southeast",
    party: "Democratic",
    yearInaugurated: 1993,
    age: 46,
    ageGroup: "Forties",
    maritalStatus: "Married",
    previousJob: "Governor, Arkansas",
    previousJobGroup: "Governor",
    termsInOffice: "8 years", //96 months
    termsInOfficeGroup: "Two",
    departure: "Term Limited",
    photo: "images/bill-clinton.png",
    notes: ""
});

const potus43 = new President({
    number: "43rd",
    name: "George W. Bush",
    birthplace: "Connecticut",
    birthplaceRegion: "New England",
    party: "Republican",
    yearInaugurated: 2001,
    age: 54,
    ageGroup: "Fifties",
    maritalStatus: "Married",
    previousJob: "Governor, Texas",
    previousJobGroup: "Governor",
    termsInOffice: "8 years", //96 months
    termsInOfficeGroup: "Two",
    departure: "Term Limited",
    photo: "images/george-w-bush.png",
    notes: ""
});

const potus44 = new President({
    number: "44th",
    name: "Barack Obama",
    birthplace: "Hawaii",
    birthplaceRegion: "Far West",
    party: "Democratic",
    yearInaugurated: 2009,
    age: 47,
    ageGroup: "Forties",
    maritalStatus: "Married",
    previousJob: "Senator, Illinois",
    previousJobGroup: "Congress",
    termsInOffice: "8 years", //96 months
    termsInOfficeGroup: "Two",
    departure: "Term Limited",
    photo: "images/barack-obama.png",
    notes: ""
});

const potus45 = new President({
    number: "45th",
    name: "Donald Trump",
    birthplace: "New York",
    birthplaceRegion: "Mideast",
    party: "Republican",
    yearInaugurated: 2017,
    age: 70,
    ageGroup: "Seventies",
    maritalStatus: "Married",
    previousJob: "Chair, Trump Org.",
    previousJobGroup: "Private Industry",
    termsInOffice: "n/a",
    termsInOfficeGroup: "n/a",
    departure: "n/a",
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