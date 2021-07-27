/*
Given a string, return true if the string is a palindrome
Return false if it is not

Include spaces and punctuations in determining if the string is a palindrome
*/

function palindrome(str) {
    let revStr = str.split('').reverse().join('')
    if(revStr === str) {
        return true
    } else {
        return false
    }
}

console.log(palindrome('avva')) //true
console.log(palindrome('avvaf dfasd')) //false
