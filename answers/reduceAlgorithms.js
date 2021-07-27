/*
Remove Duplicates from array using Reduce()
removeDuplicateValues(["one", "two", "one", "three", "two", "three"]) => ["one", "two", "three"]
*/

const removeDuplicateValues = (arr) => {
    return arr.reduce( (accumulator, value) => {
        return accumulator.includes(value) ? accumulator : [...accumulator, value]
    }, [])
}

removeDuplicateValues(["one", "two", "one", "three", "two", "three"]) 




/*
Implement array map with reduce()
*/

const reduceMap = (array) => {
    return array.reduce( (accumulator, value) => {
      // console.log(value)
        return [...accumulator, value + 1]
    } , [])
}

reduceMap([1,2,3]) //[2,3,4]


//Scrimba Solution
const map = (array, callback) => {
    return array.reduce((accumulator,value)=>{
        return [...accumulator, callback(value)]
    },[])
}


console.log(map([1, 2, 3], (v) => v * v)); // [2,3,4]





/*
Flatten an Array with reduce()
Implement flatten nested array using recursrive reduce - makeFlat()

makeFlat(['one', ['two', 'three'], ['four', ['five] ] ])

returns: ['one', 'two', 'three', 'four', 'five']

*/

const makeFlat = (array) => {
    return array.reduce((accumulator,value)=>{
        return Array.isArray(value) ? [...accumulator, ...makeFlat(value)] : [...accumulator,value]
    },[])
}
console.log(makeFlat(["one", ["two", "three"], ["four", ["five"]]])); // ['one','two','three','four','five']

/*
This solution uses reduce() and is recursive. 

*/