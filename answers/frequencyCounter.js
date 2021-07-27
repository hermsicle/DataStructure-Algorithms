/*
What is a frequency counter? It is usually an algorithm that uses 
objects or sets to collect values / frequencies of values
Good to avoid nested for loops.

Challenge 1:
Given two arrays, return a boolean to check whether the second array
is the first arrays values squared.
Example 1 =>
arr1 = [1, 2, 3]  
arr2 = [1, 4, 9]
returns true

Example 2 =>
arr1 = [5, 4, 2]
arr2 = [16, 9, 25]
returns true

Example 3 => 
arr1 = [1, 1, 5]
arr2 = [1, 25, 2]
returns false 
*/

const same = (arr1, arr2) => {
  let obj1 = {}
  let obj2 = {}

  for (const vals of arr1) {
    obj1[vals] = obj1[vals] + 1 || 1
  }
  for (const vals of arr2) {
    obj2[vals] = obj2[vals] + 1 || 1
  }

  console.log(obj1)
  console.log(obj2)

  for (const keys in obj1) {
    if (!(keys**2 in obj2)) {
      return false
    }
    if (obj1[keys**2] !== obj2[keys]) {
      return false
    }
  }
  return true
}


// console.log(same([1, 2, 3], [1, 9, 4])) // true
// console.log(same([1, 1, 3], [1, 9, 4])) // false




/*
Challenge 2:
Anagram Challenge
Given two strings, check whether or not the two strings are an anagram

Anagram: A word, phrase, or name formed by rearranging the letters 
of another.
Example 1 => 
iceman, cinema => true
zza, aaz => false
*/

//Solution 1:
const isAnagram = (str1, str2) => {
  let obj1 = {}
  let obj2 = {}
  if (str1.length !== str2.length) {
    return false
  }
  for (const char of str1) {
    obj1[char] = obj1[char] + 1 || 1
  }
  for (const char of str2) {
    obj2[char] = obj2[char] + 1 || 1 
  }
  console.log(obj1)
  console.log(obj2)
  for (const k in obj1) {
    if (!(k in obj2)) {
      return false
    }
    if (obj2[k] !== obj1[k]) {
      return false
    }
  }
  return true
}

// console.log(isAnagram('aas', 'ass'))


//Solution 2:
const isAnagram2 = (word1, word2) => {
  if (word1.length !== word2.length) {
    return false
  }
  let lookup = {}
  // loop through first word, put characters in lookup obj
  for (let i = 0; i < word1.length; i++) {
    const letter = word1[i]
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1
  }
  // console.log(lookup)

  // loop through the second word
  for (let i = 0; i < word2.length; i++) {
    let letter = word2[i]
    // console.log(lookup[letter])
    console.log(lookup)
    if(!lookup[letter]) {
      return false
    } else {
      lookup[letter -= 1]
    }
  }
  return true
}

// console.log(isAnagram2('iceman', 'cinema'))

//Solution 3:
const isAnagram3 = (word1, word2) => {
  return word1.split('').sort().join('') === word2.split('').sort().join('')
}


// console.log(isAnagram3('iceman', 'cinema'))
console.log(isAnagram3('azz', 'aaz'))

