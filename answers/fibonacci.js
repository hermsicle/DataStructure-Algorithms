/*
Create a function which takes in 'n' as the parameter
The function should return the Nth index of the fibonacci sequence

Fibonacci Sequence always starts with => [1 , 1]

It goes like this => [1, 1, 2, 3, 5, 8, 13, 21]
            index =>  0, 1, 2, 3, 4, 5,  6,  7

Ex: fib(4) => 5
    fib(5) => 8
    fib(7) => 21

*/

// function fib(n) {
//     //First we want to create an array to push our values to
//     //We should already have the array set to [1, 1] because fibonacci sequence always starts with that
//     let fibArray = [1, 1]

//     //Next we want to create a for loop
//     //We start the i = 2 because we are starting it from the index[2] from our fibArray, as its the next index
//     for(let i = 2; i <= n; i++){
//         //Next we want to push our values into our array
//         fibArray.push( fibArray[i - 2] + fibArray[i - 1] )
//     }
    
//     //Next we want our fibArray with the index of our 'n'
//     return fibArray[n]
// }

// fib(4) //5
// fib(5) //8
// fib(7) //21



//Recursion Method 
// function fib(n) { 
//     if(n === 0 || n === 1){
//         return 1;
//     }
//     return fib(n -1) + fib(n - 2);
// }

// console.log(fib(4))

//This counter lets us know how many times our function runs
// fib(4 , {})
// console.log(counter)
// counter = 0;

// fib(20 , {})
// console.log(counter)
// counter = 0;

//This is not a good approach because it contains a lot of nested function calls.



//Dynamic Programming
//Recursion + Stored Data("Memoization")


//Recursion + Dynamic Programming Solution

let counter = 0;

function fib(n , memo) {
    counter++
    let result; //helper variable
    if (memo[n]){
        return memo[n];
    }
    if (n === 0 || n === 1){
        return 1;
    } 
    else {
        result = fib(n-1 , memo) + fib(n - 2, memo);
    }
    memo[n] = result;
    return result;
}

const memo = {};
fib(10 , memo)
console.log(counter , memo)
counter = 0;

fib(20 , {})
console.log(counter)
counter = 0;

//This is the "Bottom-up Approach"
function fibonacci(n, nemo) {
    let result;

    
}