// function isEquivalent(a,b){
//     //Object.getOwnPropertyNames returns an array of all the properties of the passed in object.
//     let aProps = Object.getOwnPropertyNames(a)
//     let bProps = Object.getOwnPropertyNames(b)
//     // console.log(aProps , bProps)

//     //If there property lengths are different, then return false
//     if(aProps.length !== bProps.length) return false

//     //next create a for loop that loops through aProps 
//     for(let i = 0; i < aProps.length; i++) {
//         let propName = aProps[i]

//         console.log(b[propName])

//         if(a[propName] !== b[propName]) return false
//     }

//     return true


// }

// console.log(isEquivalent( {'hi': 12} , {'hi': 12} )) //should return true


function numbersEqual(x, y) {
    return Math.abs(x - y) < Number.EPSILON
}

console.log(numbersEqual(0.1 + 0.2, 0.3))