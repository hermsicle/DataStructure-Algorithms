/*
Fisher Yates Array Shuffling Method
*/

function shuffle(arr) {

    let i = arr.length
    let j;
    let temp;

    //This loop runs decrementing from i down to 0 but NOT 0.
    while(--i > 0) {
        //Current Index Position
        console.log(`Affecting index position ${i} of the array`)

        //Generates a random number from 0-i
        j = Math.floor(Math.random() * (i + 1)) 
        console.log(`Generate a random number ranging between 0 and ${i}`)
        console.log(`Generated: ${j}`)
        console.log(`Swap values found at index ${i} with index ${j}`)

        //Set temp to arr at random index
        temp = arr[j]

        //Swap our random index with our current index
        arr[j] = arr[i]

        //Sets our current index to our temp variable
        arr[i] = temp
    }

    console.log(arr)
}

const array = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

shuffle(array)