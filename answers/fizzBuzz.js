/*
FizzBuzz Challenge:
Create a function that counts up to the argument given.
If the number is divisble by 3 , print fizz
If the number is divisble by 5 , print buzz
If the number is divisble by 3 & 5; print fizzbuzz
*/

function fizzBuzz(n){
    for(let i = 1; i <= n; i++){
        if (i % 3 === 0 && i % 5 === 0){
            console.log('fizzbuzz')
        }
        if (i % 3 === 0){
            console.log('fizz')
        }
        if (i % 5 === 0){
            console.log('buzz')
        }
        else {
            console.log(i)
        }
    }
}
console.log(fizzBuzz(100))