// Ques 1 - Second largest number
// Given an array Arr of size N, print second largest
// distinct element of an array.

// Input: [12, 35, 1, 10, 34, 1] ------>>>>> Output: 34
// Input: [10, 5, 10] ------>>>>> Output: 5

function secondLargest(arr) {
    const uniqueArr = Array.from(new Set(arr)); // O(n)

    uniqueArr.sort((a, b) => { // O(nlogn)
        return b - a;
    });

    if (uniqueArr.length >= 2) {
        return uniqueArr[1];
    }else {
        return -1;
    }

    console.log(uniqueArr);
}

let numbers = [12, 35, 1, 10, 34, 1];

// console.log(secondLargest(numbers));


// Optimised approach
function secondLargestOptimised(arr) {
    let largest = Number.NEGATIVE_INFINITY;
    let secondLargest = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
            secondLargest = largest;
        }else if (arr[i] !== largest && arr[i] > secondLargest) {
            secondLargest = arr[i];
        } 
    }
    return secondLargest;
}