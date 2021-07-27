/*
What are multiple pointers algorithms?
Creating pointers or values that correspond to an index or position 
and move towards the beginning, end or middle based on a certain condition

Challenge: 
Write a function called sumZero which accepts a SORTED array of integers. The function should 
find the first pair where the sum is 0. Return an array that includes both values that
sum to zero or undefined if a pair does not exist.

Examples =>
[-3, -2, -1, 0, 1, 2, 3] // [-3, 3]
[-3, -2, -1, 0] // undefined
[1, 2, 3] // undefined
*/
const sumZero = (arr) => {
  let left = 0
  let right = arr.length - 1
  while ( left < right ) {
    let sum = arr[left] + arr[right]
    if (sum === 0) {
      return [arr[left], arr[right]]
    } else if (sum > 0) {
      right--
    } else {
      left++
    }
  }
}

// console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])) // [-3, 3]
// console.log(sumZero([-4, -2, -1, 0, 1, 4, 5, 8])) // [-4, 4]


/*
Challenge 2:
Implement a function called countUniqueValues, which accepts a sorted array,
and counts the unique values in that array. There can be negative numbers 
in the array, but it will always be sorted.

Examples =>
[1, 1, 1, 1, 1, 2] //2
[1, 2, 3, 4, 4, 4, 7, 8, 8 12, 12] //7
[] //0
[-2, -1, -1, 0, 1] //4
*/
//My  solution
const countUniqueValues = (arr) => {
  let count = 0
  let obj = {}

  for (const values of arr) {
    obj[values] = obj[values] + 1 || 1
  }
  console.log(obj)

  for (const keys in obj) {
    count++
  }

  return count

}

// console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 8, 8, 12, 12])) // 7

//Solution 2
const countUniqueValues2 = (arr) => {
  if (arr.length === 0) return 0
  let i = 0
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++
      arr[i] = arr[j]
    }
  }
  return i + 1
}


console.log(countUniqueValues2([1, 2, 3, 4, 4, 4, 7, 8, 8, 12, 12])) // 7
