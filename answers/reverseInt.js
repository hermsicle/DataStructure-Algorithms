/*
Given an integer, return an integer that is the reverse ordering of numbers
Ex: 
reverseInt(15) => 51
reverseInt(981) => 189
reverseInt(500) => 5
reverseInt(-15) => -51
reverseInt(-90) => -9

Hint: Math.sign()
*/

function reverseInt(number) {
    let checkNum = Math.sign(number)
    let numberToString = number.toString().split('').reverse().join('')
    return checkNum * parseInt(numberToString)
}

console.log(reverseInt(15)) //=> 51
console.log(reverseInt(981)) // => 189
console.log(reverseInt(500)) // => 5
console.log(reverseInt(-15)) // => -51
console.log(reverseInt(-90)) // => -9