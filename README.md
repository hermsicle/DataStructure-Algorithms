## Here is a list of some data structure and algorithms to practice 

### Frequency Counter Problems: 

<strong>Challenge 1:</strong>
Given two arrays, return a boolean to check whether the second array
is the first arrays values squared.
<br>

```js
Example 1:
arr1 = [1, 2, 3]  
arr2 = [1, 4, 9]
returns true

Example 2:
arr1 = [5, 4, 2]
arr2 = [16, 9, 25]
returns true

Example 3:
arr1 = [1, 1, 5]
arr2 = [1, 25, 2]
returns false 
```

<strong>Challenge 2:</strong>
Anagram Challenge
Given two strings, check whether or not the two strings are an anagram

Anagram: A word, phrase, or name formed by rearranging the letters 
of another.
<br>

```js
Example 1:
iceman, cinema => true
zza, aaz => false
```
<hr>

### Multiple Pointer Problems:

<strong>Challenge: </strong>
Write a function called sumZero which accepts a SORTED array of integers. The function should 
find the first pair where the sum is 0. Return an array that includes both values that
sum to zero or undefined if a pair does not exist.

```js
Examples:
[-3, -2, -1, 0, 1, 2, 3] // [-3, 3]
[-3, -2, -1, 0] // undefined
[1, 2, 3] // undefined
```

<strong>Challenge:</strong>
Implement a function called countUniqueValues, which accepts a sorted array,
and counts the unique values in that array. There can be negative numbers 
in the array, but it will always be sorted.

```js
Examples:
[1, 1, 1, 1, 1, 2] //2
[1, 2, 3, 4, 4, 4, 7, 8, 8 12, 12] //7
[] //0
[-2, -1, -1, 0, 1] //4
```
<hr>

### Sliding Window Challenges:
<strong>Challenge 1:</strong>
Write a function called maxSubarraySum which accepts an array of integers 
and a number called n. The function should calculate the maximum sum of 
n consecutive elements in the array.

```js
Examples:
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2) //10
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4) //17
maxSubarraySum([4, 2, 5, 2, 6], 1) //6
maxSubarraySum([], 4) //null
```
<strong>Challenge2 :</strong>
Write a function called minSubArrayLen which accepts two parameters - an array of 
positive integers and a positve integer. 
This function should return the minimal length of a contiguous subarray of which
the sum is greater tan or equal to the integer passed to the function. 
If there isn't one, return 0 instead.

```js
minSubArrayLen([2,3,1,2,4,3],7) // 2 -> because [4,3] smallest subarray
minSubArrayLen([2,1,6,5,4],9) // 2 -> because [5,4] is the smallest subarray
minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19],52) // 1 [62] > 52
minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
minSubArrayLen([1,4,16,22,5,7,8,9,10], 55) //5
minSubArrayLen([4,3,3,8,1,2,3], 11) //2
```

<strong>Challenge 3:</strong>
Write a function called findLongestSubstring, which accpets a string and returns
the length of the longest substring with all distinct characters

```js
findLongestSubString('')//0
findLongestSubString('rithmschool')//7
findLongestSubString('thisisawesome') //6
findLongestSubString('thecatinthehat') //7
findLongestSubString('bbbbbb') //1
findLongestSubString('longestsubstring') //8
findLongestSubString('thisishowwedoit') //6
```
<hr>

### Binary Search Problem:
<strong> Challenge: </strong>
Write a function called BinarySearch, which takes in a sorted array and a number to search for. Return the index of that number.

```js
Example:
const arr = [1, 5, 9, 13, 99, 102];
findElement(arr, 99) //4 index
```
<hr>

### Array Chunk Problem:
<strong> Challenge: </strong>
Given an array and chunk size as the parameters, divide the array into many subarrays 
Where each subarray is of length size

Basically taking one big array and chunking it into many smaller arrays

```js
Ex: 
chunk([1, 2, 3, 4] , 2) => [[1, 2], [3, 4]]
chunk([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]
chunk([1, 2, 3, 4, 5,6, 7, 8], 3) => [[1, 2, 3] , [4, 5, 6], [7, 8]]
chunk([1, 2, 3, 4, 5] , 4) => [[1, 2, 3, 4], [5]]
chunk([1, 2, 3, 4, 5], 10) => [[1,2,3,4,5]]
```
<hr>

### Classic Parenthesis Problem: 
<strong> Challenge:  </strong>
Check for balanced parentheses in an expression. 
Two brackets are considered to be a matched pair if the an 
opening bracket (i.e., (, [, or { ) occurs to the left of a 
closing bracket (i.e., ), ], or }) of the exact same type. 
There are three types of matched pairs of brackets: [], {}, and ().

```js
isMatchingBrackets("(){}"); // returns true
isMatchingBrackets("[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]"); 
// returns true
isMatchingBrackets("({(()))}}"); // returns false
```

<hr>

### Encode Decode Problem:
<strong> Challenge: </strong>
Implement encode and decode functions that follow run length encoding pattern. Run-length encoding is a form of data compression, where consecutive data elements are replaced by just one data value and count of that value. 

```js
encode('wwwiiuuuu') => 3w2i4u
decode('2u3a4o') => uuaaaoooo
```
<hr>

### Factorial Problem:
<strong> Challenge: </strong>
Calculate the facotiral of a number. 
Factorials: Multiplication of a number - 1

```js
Ex:
factorial(3) => 3 * 2 * 1 = 6
factorail(5) => 5 * 4 * 3 * 2 * 1 = 120
```
<strong> Try to solve recursively as well.</strong>

<hr>

### Fiboncacci Sequence Problem: 
<strong> Challenge: </strong>
Create a function which takes in 'n' as the parameter
The function should return the Nth index of the fibonacci sequence

Fibonacci Sequence always starts with => [1 , 1]

It goes like this => [1, 1, 2, 3, 5, 8, 13, 21]

index =>  0, 1, 2, 3, 4, 5,  6,  7

```js
Ex: 
fib(4) => 5
fib(5) => 8
fib(7) => 21
```

<strong> Try to solve normally, and a solution with dynamic programming</strong>

<hr>

### FizzBuzz Problem: 
<strong> Challenge: </strong>
Create a function that counts up to the argument given.

    If the number is divisble by 3 , print fizz
    If the number is divisble by 5 , print buzz
    If the number is divisble by 3 & 5; print fizzbuzz
<hr>

### IsIsogram Problem:
<strong> Challenge: </strong>
Implement isogram check function.

Isogram is a string in which all letters of the string are present only once.

```js
isIsogram('ambidExtrouSly') => true
isIsogram('patteRn') => false
```
<hr>

### isLeapYear Problem:
<strong> Challenge: </strong>
Implement isLeapYear function. Leap year occurs every four years (those divisible by four) except for century years, but not when the year is divisible by 400.

```js
isLeapYear("2020") // true
isLeapYear("2018") // false
isLeapYear("1700") // false
isLeapYear("1600") // true
```
<hr>

### isPangram Problem:
<strong> Challenge: </strong>
Create a function that checks whether a the given string is a pangram.

A Pangram is a string or sentence that contains all the letters of the alphabet. 

```js
isPangram('the Quick brown Fox Jumps over lazy dog') //true
isPangram('the quick brown fox jumps the Dog') //false
```
<hr>

### isPrime Challenge:
<strong> Challenge: </strong>
Create a function which takes in 'number' as the parameter
The function should check whether or not a number is a Prime number
If prime => true 
if !prime => false

Prime numbers are only numbers that are divisible by itself and 1.
Examples of prime numbers: 3, 5, 7, 11, 13

```js
Test Cases: isPrime(3) => true
            isPrime(5) => true
            isPrime(9) => false
```
<hr>

### maxCharacters Problem:
Given a string, return the character that is most commonly used in the string

```js
Ex:
maxChar('abcccccccd') //'c'
maxChar('apple 1121111') //'1'
```
<hr>

### Palindrome Problem: 
Given a string, return true if the string is a palindrome
Return false if it is not

Include spaces and punctuations in determining if the string is a palindrome

```js
palindrome('avva') //true
palindrome('avvaf dfasd') //false
```
<hr>

### PowerOfTwo Problem:
Create a function thaty determines whether an input number is a power of two

```js
    Powers of Two: 
    2^n
    2^0 = 1
    2^1 = 2 * 1 = 2
    2^2 = 2 * 2 = 4
    2^3 = 2 * 2 * 2 = 8
    2^4 = 2 * 2 * 2 * 2 = 16
    [0, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]

    Ex:
    isPowerOfTwo(8) => true
    isPowerOfTwo(5) => false
```
<hr>

### Reverse Int Problem: 
Given an integer, return an integer that is the reverse ordering of numbers

```js
Ex: 
reverseInt(15) => 51
reverseInt(981) => 189
reverseInt(500) => 5
reverseInt(-15) => -51
reverseInt(-90) => -9

Hint: Math.sign()
```
<hr>

### Sock Merchant Problem:
Complete the sockMerchant function. It must return an integer representing the number of matching pairs of socks that are available.

sockMerchant has the following parameter(s):

n: the number of socks in the pile
ar: the colors of each sock

```js
const sockMerchant = (n, arr) => {
    let counter = 0;
    arr = arr.sort()
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === arr[i + 1]){
        counter++
        i+=1
        }
    }
    return counter;
}
sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]) //3 pairs of socks
```
<hr>

### ToRainLanguage Problem:
<strong>Implement rain language translator - toRainLanguage()</strong>

```js
if the number has 3 as a factor - output 'Pling'
if the number has 5 as a factor - output 'Plang'
if the number has 7 as a factor - output 'Plong'
Return the number in all other cases

toRainLanguage(45) //PlingPlang
toRainLanguage(35) //PlangPong
toRainLanguage(21) //PlingPong
toRainLanguage(2) //2
```
<hr>

### TransposeMatrix Problem:
<strong>Implement a function which transposes a matrix array - transposeMatrix()</strong>

Make the rows into columns 

```js
ex: 
transposeMatrix([
    [1,2,3],
    [1,2,3],
    [1,2,3],
]) 

returns:
[ [1,1,1], [2,2,2], [3,3,3] ]
```
<hr>

### Wordcount Problem:
<strong> Create a function that returns the total words in a string </strong>

```js
countWords('hello world, this is lit')//5
```
<hr>

### Reduce() Method Problems:
<strong>
Remove Duplicates from array using Reduce()
</strong>

```js
const removeDuplicateValues = (arr) => {
    return arr.reduce( (accumulator, value) => {
        return accumulator.includes(value) ? accumulator : [...accumulator, value]
    }, [])
}
removeDuplicateValues(["one", "two", "one", "three", "two", "three"]) => ["one", "two", "three"]
```

<strong> Implement Array Map with Reduce </strong>

```js
//Solution 1
const reduceMap = (array) => {
    return array.reduce( (accumulator, value) => {
      // console.log(value)
        return [...accumulator, value + 1]
    } , [])
}
reduceMap([1,2,3]) //[2,3,4]

//Solution 2
const map = (array, callback) => {
    return array.reduce((accumulator,value)=>{
        return [...accumulator, callback(value)]
    },[])
}
console.log(map([1, 2, 3], (v) => v * v)); // [2,3,4]
```

<strong> Flatten an array with reduce() </strong>
<p>Implement flatten nested array using recursrive reduce - makeFlat()</p>

```js
const makeFlat = (array) => {
    return array.reduce((accumulator,value)=>{
        return Array.isArray(value) ? [...accumulator, ...makeFlat(value)] : [...accumulator,value]
    },[])
}
console.log(makeFlat(["one", ["two", "three"], ["four", ["five"]]])); // ['one','two','three','four','five']
```
<hr>

### Fisher Yates Shuffling Method: 
<strong> Here is a function that shuffles an array. Runs at O(n)</strong>

```js
    function shuffle(arr) {

        let i = arr.length
        let j;
        let temp;

        //This loop runs decrementing from i down to 0 but NOT 0.
        while(--i > 0) {
            //Current Index Position
            console.log(`Affecting index position ${i} of the array`)

            //Generates a random number from 0-i
            j = Math.floor(Math.random() * (i + 1)) 
            console.log(`Generate a random number ranging between 0 and ${i}`)
            console.log(`Generated: ${j}`)
            console.log(`Swap values found at index ${i} with index ${j}`)

            //Set temp to arr at random index
            temp = arr[j]

            //Swap our random index with our current index
            arr[j] = arr[i]

            //Sets our current index to our temp variable
            arr[i] = temp
        }

        console.log(arr)
    }

    const array = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

    shuffle(array)
```

