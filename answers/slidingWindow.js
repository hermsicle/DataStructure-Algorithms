/*
What is a sliding window? 
This pattern involves creating a window which can either be an array or number
from one position to another.
Depeneding on a certain condition, the window either increases 
or closes (and a new window is created)
Very useful for keeping track of a subset of data in an array/string

Challenge 1: maxSubarraySum
Write a function called maxSubarraySum which accepts an array of integers 
and a number called n. The function should calculate the maximum sum of 
n consecutive elements in the array.

Examples =>
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2) //10
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4) //17
maxSubarraySum([4, 2, 5, 2, 6], 1) //6
maxSubarraySum([], 4) //null
*/

const maxSubarraySum = (arr, num) => {
  let maxSum = 0
  let tempSum = 0

  if (arr.length < num) return null
  for (let i = 0; i < num; i++) {
    maxSum += arr[i]
  }
  tempSum = maxSum
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i]
    maxSum = Math.max( maxSum, tempSum )
  }
  return maxSum
}

// console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)) //10

/*
Challenge 2: minSubArrayLen
Write a function called minSubArrayLen which accepts two parameters - an array of 
positive integers and a positve integer. 
This function should return the minimal length of a contiguous subarray of which
the sum is greater tan or equal to the integer passed to the function. 
If there isn't one, return 0 instead.
*/
function minSubArrayLen(nums, sum) {
  let total = 0
  let start = 0
  let end  = 0
  let minLen = Infinity

  while (start < nums.length) {
    //If current window doesnt add up to the given sum
    //Move the window to the right
    if (total < sum && end < nums.length) {
      total += nums[end]
      end++
    }
    //If current windows adds up to the given sum
    //We can shrink down the window
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start)
      total -= nums[start]
      start++
    }
    //current total less than required total but we reach the end, need this to prevent infinite loop 
    else {
      break
    }
  }
}

console.log(minSubArrayLen([2,3,1,2,4,3],7)) // 2 -> because [4,3] smallest subarray
// minSubArrayLen([2,1,6,5,4],9) // 2 -> because [5,4] is the smallest subarray
// minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19],52) // 1 [62] > 52
// minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
// minSubArrayLen([1,4,16,22,5,7,8,9,10], 55) //5
// minSubArrayLen([4,3,3,8,1,2,3], 11) //2


/*
Challenge 3: findLongestSubString
Write a function called findLongestSubstring, which accpets a string and returns
the length of the longest substring with all distinct characters
*/
function findLongestSubString(str) {
  let longest = 0
  let seen = {} 
  let start = 0

  for (let i = 0; i < str.length; i++) {
    let char = str[i]
    if (seen[char]) {
      start = Math.max(start, seen[char])
    }
    //index - beginning of substring + 1
    longest = Math.max(longest, i - start + 1)
    seen[char] = i + 1
  }
  return longest
}

console.log(findLongestSubString('')) //0
// console.log(findLongestSubString('rithmschool')) //7
// console.log(findLongestSubString('thisisawesome')) //6
// console.log(findLongestSubString('thecatinthehat')) //7
// console.log(findLongestSubString('bbbbbb')) //1
// console.log(findLongestSubString('longestsubstring')) //8
// console.log(findLongestSubString('thisishowwedoit')) //6