/*
Calculate the factorial of a number

Factorials: Multiplication of a number - 1

Algorithm Needs to do one thing:
(1) Go through all smaller numbers and multiply them with each other (and with the input number)

Ex:
factorial(3) => 3 * 2 * 1 = 6
factorail(5) => 5 * 4 * 3 * 2 * 1 = 120
*/


// function factorial(number) {
//     let result = 1;

//     for(let i = 2; i <= number; i++){
//         result *= i
//     }

//     return result
// }

// Using Recursion to solve Factorial challenge
function factorial(number) {
    // Need a base case to exit condition
    if(number === 1){
        return 1; //The factorial of 1 is 1; this prevents it from an infinite loop
    }
    return number * factorial(number -1)
}
//The time complexity in every function call is => O(1)
//But we trigger multiple function calls => 'N' function calls
// Time Complexity => N * O(1) => Which ultimatly results to O(N)

console.log(factorial(3))

// console.log(factorial(5))

console.log(factorial(10))

// console.log(factorial(0))