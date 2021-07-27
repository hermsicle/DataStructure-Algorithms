/*
Create a function thaty determines whether an input number is a power of two

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
*/
// Solution                                                                                                                                     
// function isPowerOfTwo(number) {
//     if(number < 1) {    //Rules out negative numbers
//         return false
//     }
//     let dividedNumber = number; 
//     while(dividedNumber !== 1) {
//         if(dividedNumber % 2 !== 0) {
//             return false
//         }
//         dividedNumber = dividedNumber / 2;
//     }
//     return true;
// }

// console.log(isPowerOfTwo(8)) //true
// console.log(isPowerOfTwo(5)) //false
// console.log(isPowerOfTwo(20)) //false
// console.log(isPowerOfTwo(16)) //true
// console.log(isPowerOfTwo(13)) //false

//Time Complexity : 
//Best Case: number = 13 => O(1)
//Worst Case: number = A large Number that is a power of 2 => O(log n)
//Average Case: O(log n)





// BitWise Solution
function isPowerOfTwo(number) {
    if(number < 1) {
        return false
    }

    return number & (number - 1) === 0; //O(1) Time Complexity;
}

//The '&' is the BitWise '&'. 


