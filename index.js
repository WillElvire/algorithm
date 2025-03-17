/**
 *  implement insertion sort algorithm
 * Each time work only with the first i-1 element from of the array
 * Pick element arr[i] and insert it into sorted sequence in the array from 0 to i-1.
 */

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}
console.log(insertionSort([5, 3, 8, 4, 2]));