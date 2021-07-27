/*
Task:

Implement rain language translator - toRainLanguage()

if the number has 3 as a factor - output 'Pling'
if the number has 5 as a factor - output 'Plang'
if the number has 7 as a factor - output 'Plong'
Return the number in all other cases

*/


const toRainLanguage = num => {
    let result = ''

    if(num % 3 === 0) {
        result += 'Pling'
    }
    if(num % 5 === 0) {
        result += 'Plang'
    }
    if(num % 7 === 0) {
        result += 'Plong'
    } 

    //In this return statement we are returning the result
    //IF our result is falsey, return num.
    return result || num
    }

  // toRainLanguage(45) //PlingPlang
  // toRainLanguage(35) //PlangPong
  // toRainLanguage(21) //PlingPong
  console.log(toRainLanguage(2)) //2