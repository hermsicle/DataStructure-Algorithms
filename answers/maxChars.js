/*
Given a string, return the character that is most commonly used in the string

Ex:
maxChar('abcccccccd') //'c'
maxChar('apple 1121111') //'1'
*/

const maxChar = str => {
    let memo = {};
    //Create two helper variables to iterate through the object
    let max = 0;   //This will change in the for in loop
    let maxChar = '' //This will change in the for in loop

    for(letters of str) {
        memo[letters] = memo[letters] + 1 || 1
    }

    for(chars in memo) {
        // console.log(chars)  //Is the key property
        // console.log(memo[chars])    //memo[chars] is the VALUE for the key
        if(memo[chars] > max) {
            max = memo[chars]
            maxChar = chars
        }
    }
    return maxChar
}

console.log(maxChar('abcccccccd')) //'c'
// console.log(maxChar('apple 1121111')) //'1'