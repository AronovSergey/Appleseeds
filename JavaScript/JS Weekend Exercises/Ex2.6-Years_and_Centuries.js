/*
    The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.
*/

const centuryFromYear = (year) => {
    if(year > 0)
        return parseInt((year - 1)/ 100) + 1;
}

// Examples
console.log(centuryFromYear(1705));
console.log(centuryFromYear(1900));
console.log(centuryFromYear(1601));
console.log(centuryFromYear(2000));