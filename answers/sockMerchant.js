/*

*/

/*
Function Description

Complete the sockMerchant function in the editor below. It must return an integer representing the number of matching pairs of socks that are available.

sockMerchant has the following parameter(s):

n: the number of socks in the pile
ar: the colors of each sock
*/

/*
Pseudo-Code
1. Create a counter variable
2. Sort the array
3. Loop through the sorted array
4. Check if the current iteration is equal to its next iteration
5. If it is, increment counter
6. Also increment i to skip the next item
*/

const sockMerchant = (n, arr) => {
    let counter = 0;
    arr = arr.sort()
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === arr[i + 1]){
        counter++
        i+=1
        }
    }
    return counter;
}
  sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]) //3