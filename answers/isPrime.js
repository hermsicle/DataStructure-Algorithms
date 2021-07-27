/*
Create a function which takes in 'number' as the parameter
The function should check whether or not a number is a Prime number
If prime => true 
if !prime => false

Prime numbers are only numbers that are divisible by itself and 1.
Examples of prime numbers: 3, 5, 7, 11, 13

Test Cases: isPrime(3) => true
            isPrime(5) => true
            isPrime(9) => false

*/

function isPrime(number){
    //First we want to divide the number by all the numbers before it
    //To do this, we create a for loop
    //We start i = 2 because we are checking if the number divided by 2 is 0 || return => false
    //We i < number and not i <= number because we want to check the division with all smaller numbers 
    for(let i = 2; i < number; i++){
        //Within our iteration, we want a conditional which checks if number % i === 0.
        //Return false if true
        if(number % i === 0) return false
    }
    //Return true if the conditional is not met 
    return true
}

isPrime(3) //true
// isPrime(5) //true
// isPrime(9) //false