/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {
    let x = numArray.length;

    for(let i = 0; i < x; i++) {
        for(let y = 0; y < x; y++) {
            if(numArray[y] > numArray[y + 1]) {
                let z = numArray[y];
                numArray[y] = numArray[y + 1];
                numArray[y + 1] = z;
            }
        }
    }
    return numArray
}

console.log(bubbleSort([12, 4, 18, 21, 35, 44, 76, 99, 1, 13]));
