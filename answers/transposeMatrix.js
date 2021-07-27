/*
Implement a function which transposes a matrix array - transposeMatrix()

Make the rows into columns 

ex: 
transposeMatrix([
    [1,2,3],
    [1,2,3],
    [1,2,3],
]) 

returns:
[ [1,1,1], [2,2,2], [3,3,3] ]
*/

const transposeMatrix = (array) => {
    return array[0].map((_,i)=>array.map(v=>v[i]))
}


console.log(transposeMatrix([
    [1,2,3],
    [1,2,3],
    [1,2,3],
]))
 // [[1,1,1],[2,2,2],[3,3,3]]