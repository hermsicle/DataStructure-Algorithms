/*
Given an array and chunk size as the parameters, divide the array into many subarrays 
Where each subarray is of length size

Basically taking one big array and chunking it into many smaller arrays

Ex: 
chunk([1, 2, 3, 4] , 2) => [[1, 2], [3, 4]]
chunk([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]
chunk([1, 2, 3, 4, 5,6, 7, 8], 3) => [[1, 2, 3] , [4, 5, 6], [7, 8]]
chunk([1, 2, 3, 4, 5] , 4) => [[1, 2, 3, 4], [5]]
chunk([1, 2, 3, 4, 5], 10) => [[1,2,3,4,5]]
*/

/*
Pseudo Code:
1. Create an empty array to hold chunks called 'chunked'
2. For each element in the 'unchunked' array
    - Retrieve the last element in 'chunked'
    -IF last element does not exist, or if its length is equal to chunk size
        -Push a new chunk into 'chunked' with the current element
    -ELSE add the current element into the chunk
*/

//Solution 1:
const chunk = (array, size) => {
    const chunked = [];

    for(let element of array) {
        const last = chunked[chunked.length - 1];

        if(!last || last.length == size) {
            chunked.push([element]);
        }
        else {
            last.push(element);
        }
    }

    return chunked;
}


/*
Slice();
const letters = ['a', 'b', 'c', 'd', 'e']
letters.slice(0, 3) => Create a new array starting from the index 0 UP TO index 3 but NOT including index 3
Will give us 'c'.
*/

/*
Pseudo Code:
1. Create empty 'chunked' array
2. Create 'index' start at 0;
3. While index is less than array.length
    - Push a slice of length 'size' from 'array' into 'chunked'
    - Add 'size' to 'index'
*/

//Solution 2:
const chunk = (array, size) => {
    const chunked = [];
    let index = 0;

    while(index < array.length) {
        chunked.push(array.slice(index, index + size));
        index += size;
    }

    return chunked;
}


console.log(chunk([1, 2, 3, 4] , 2)) //=> [[1, 2], [3, 4]]
// console.log(chunk([1, 2, 3, 4, 5], 2))//=> [[1, 2], [3, 4], [5]]
// console.log(chunk([1, 2, 3, 4, 5,6, 7, 8], 3))//=> [[1, 2, 3] , [4, 5, 6], [7, 8]]
// console.log(chunk([1, 2, 3, 4, 5] , 4))//=> [[1, 2, 3, 4], [5]]
// console.log(chunk([1, 2, 3, 4, 5], 10))//=> [[1,2,3,4,5]]