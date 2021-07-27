/*
Create a function that returns the total words in a string
*/
const countWords = text => {
    const words = text.trim().split(' ')
    return words.length
}

console.log(countWords('hello world, this is lit'))//5

//Trim() is a javascript method that trims the whitespace before and after 
//Or:
//return wordsArr.filter(word => word !== "").length