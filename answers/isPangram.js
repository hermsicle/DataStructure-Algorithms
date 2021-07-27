/*
Create a function that checks whether a the given string is a pangram.

A Pangram is a string or sentence that contains all the letters of the alphabet. 

isPangram('the Quick brown Fox Jumps over lazy dog') //true
isPangram('the quick brown fox jumps the Dog') //false

*/

const abc = 'abcdefghijklmnopqrstuvwxyz'

//Solution 1
const isPangram = (string) => {
    const processedString = [...new Set(string.toLowerCase().split(' ').join(''))].sort().join('')

    console.log(processedString)
    return processedString === abc
}

//When you use new Set(), whatever is being passed into the set() and is a duplicate will be removed 

//Solution 2
const isPangram2 = (string) => {
    
    const regexMatch = new Set(string.toLowerCase().match(/[a-z]/gi))

    //We check the .size and NOT .length because its a 'set'. 
    //In this case the 'size' of the set should 26 (total in alphabet)
    console.log(regexMatch.size)

    //Return true if the size is 26, otherwise return false
    return regexMatch.size === 26
}

isPangram2('the Quick brown Fox Jumps over lazy dog') //true
// isPangram('the quick brown fox jumps the Dog') //false