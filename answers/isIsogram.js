/*
isIsogram()
Implement isogram check function.
Isogram is a string in which all letters of the string are present only once.

isIsogram('ambidExtrouSly') => true
isIsogram('patteRn') => false
**Gotchas:
- capitalization of letters
*/

//convert str to all lower case
//create an empty obj
//loop through str
//push each iterated character to obj and set the value as the number of times it occurs
//loop through the object
//if our objects values > 1 return false
//otherwise return true


const isIsogram = str => {
    let obj = {}
    let max = 1
    str = str.toLowerCase()

    for(const chars of str) {
        obj[chars] = obj[chars] + 1 || 1
    }
    console.log(obj)

    for(const char in obj) {
        // console.log(obj[char])
        if(obj[char] > max) return false
    }

    return true
}

    // isIsogram('ambidExtrouSly') 
    isIsogram('patteRn') 

/*
Scrimba Solution
const isIsogram = (string) => {
    
    const lowerCased = string.toLowerCase()
    
    const result = lowerCased.split('').every((v,i)=>console.log(v,i) || lowerCased.indexOf(v)===i)
    
    return result

}
*/