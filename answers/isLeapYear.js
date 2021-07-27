/*
isLeapYear()
Implement isLeapYear function. Leap year occurs every four years (those divisible by four) except for century years, but not when the year is divisible by 400.

isLeapYear("2020") // true
isLeapYear("2018") // false
isLeapYear("1700") // false
isLeapYear("1600") // true

*/

//convert our year string to a number
//check if our year can be divisible by 4 
//check if our year can be divisible by 400
//return false is not divisible by 4 or 400

const isLeapYear = year => {
    const numberYear = Number(year)

    return numberYear % 100 === 0 ? numberYear % 400 === 0 : numberYear % 4 === 0

}

isLeapYear("2020") // true
// isLeapYear("2018") // false
// isLeapYear("1700") // false
// isLeapYear("1600") // true