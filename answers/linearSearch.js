// function findElement(array, elementYourLookingFor) {
//     for(let i = 0; i <= array.length; i++){
//         if(array[i] == elementYourLookingFor) {
//             return i
//         }
//     }
// }

// function findElement(array, element){
//     let index = 0;
//     for(const items of array) {
//         if(items == element){
//             return index;
//         }
//         index++
//     }
// }

const arr = [5, 3, 10, -10, 33, 51];

// console.log(findElement(arr, 33)) //Should return the index of element

//What if we are looking at an array of Objects? The algorithm above would not work:
//instead: => 

// function findElement(array, element) {
//     let index = 0;
//     for(const items of array) {
//         if(
//             typeof element === 'object' &&
//             element !== null &&
//             element.name === items.name &&
//             element.age === items.age
//         ) {
//             return index;
//         }
//         if(items === element){
//             return index;
//         }
//         index++;
//     }
// }
// console.log(findElement(objects, {name: 'Manu', age: 33}))

function findElement(array, element, comparatorFn) {
    let index = 0;
    for(const items of array) {
        if(
            typeof element === 'object' &&
            element !== null &&
            comparatorFn(element, items)
        ) {
            return index;
        }
        if(items === element){
            return index;
        }
        index++;
    }
}

const objects = [
    { name: 'Max' , age: 31},
    { name: 'Manu' , age: 33}
];

console.log(findElement(objects, {name: 'Manu', age: 33}, function(el , it) {
    return el.name == it.name;
}))
