function findElement(sortedArr, element) {
    let startIndex = 0;
    let endIndex = sortedArr.length - 1;

    while(startIndex <= endIndex) {
        const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2)
        
        if(element == sortedArr[middleIndex]) {
            return middleIndex
        }

        if(sortedArr[middleIndex ] < element) {
            startIndex = middleIndex + 1
        } 
        else {
            endIndex = middleIndex - 1;
        }
    }
}

// const arr = [1, 5, 9, 13, 99, 102];

// console.log(findElement(arr, 99)) //4 index


//Best Case: The item we're looking for is right in the middle => O(1) Constant Time

//Worst Case: The item is exactly at the beginning or the end => O(log N) Because we split the array in half in every iteration

//Average Case: We don't know where the item will be => O(log N) 


//  Udemy solution
function search(array, val) {
  let min = 0;
  let max = arr.length - 1

  while (min <= max) {
    let middle = Math.floor( (min + max) / 2)
    let currentElement = array[middle]

    if (array[middle] < val) {
      min = middle + 1
    } 
    else if (array[middle] > val) {
      max = middle - 1
    }
    else {
      return middle
    }
  }
  return -1
}




/*
Recursive Solution
*/

function findElement(sortedArr, element, offset) {
    let startIndex = 0;
    let endIndex = sortedArr.length - 1;

    const middleIndex = Math.floor((endIndex - startIndex) / 2);

    if(element == sortedArr[middleIndex]) {
        return middleIndex + offset;
    }

    if(sortedArr[middleIndex] < element) {
        startIndex = middleIndex + 1;
        offset = offset + middleIndex + 1;
    } else {
        endIndex = middleIndex;
    }
    return findElement(sortedArr.slice(startIndex, endIndex + 1), element, offset) 
}

const arr = [1, 5, 9, 13, 99, 102];

console.log(findElement(arr, 99, 0)) //4

//Time Complexity:

/*
Best Case: The item is right in the middle => O(1)

Average Case: We don't know where the item will be => O(log n)

Worse Case: The item we're looking for is at the beignning or end => O(log n)

For recursive algorithms where we split our end into smaller chunks , 
Master Theorem => runtime of recursion: O(n^logb A)

where 
A => equals the number of subproblems (number of recursion splits)

b => equals the relatibe subproblem size(input reduction persplit)

f(n) => equals the runtime outside of the recurison

a = 1
b = 2
O(n^logb a) => O(n^log2 1) => O(n^0) => O(1)
Overall algorithm time complexity:
O(n^logb a * log n) => O(1 * log n) => O(log n)

*/