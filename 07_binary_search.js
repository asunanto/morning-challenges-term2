/*
Write a method which will act as a binary search which will find the 
position of a number in a sorted array and the number of steps required 
to find the position. 
When the array has an even number of values, the midpoint index should 
be rounded up.

Example:
    sortedArray = [1,5,8,12,20,21,35]
    searchValue = 8

    In this case the index returned would be 2 and it should take 3 steps. 
    In the first step, 3 is the midpoint index (value = 12). 
    In the second step 1 is the midpoint index (value = 5). 
    In the third and final step we are only left with 8 at index 2.

*/

function binarySearch(sortedArray, searchValue) {
    // initial values for start, middle and end
    let start = 0
    let stop = sortedArray.length - 1
    let middle = Math.ceil((start + stop) / 2) // rounds up midpoint index 
    let counter = 1

    // While the middle is not equal out search value
    while (sortedArray[middle] !== searchValue && start < stop) {
        searchValue < sortedArray[middle] ? stop = middle - 1 : start = middle + 1 //updates start or stop points
        middle = Math.ceil((start + stop) / 2) // recalculate middle on every iteration
        counter++
    }
    return [(sortedArray[middle] !== searchValue) ? -1 : middle , counter]
}

let assert = require('assert')

describe('Count loops', function () {
    it('Should count one step when search values is in the middle', function () {
        assert.deepEqual([3, 1], binarySearch([1, 3, 7, 14, 19, 31], 10))
    })
    it('Should count one step when search value is only value', function () {
        assert.deepEqual([0, 1], binarySearch([1], 1))
    })
    it('Should count length divided by two steps when value is at beginning', function () {
        assert.deepEqual([0, 3], binarySearch([1, 3, 7, 10, 14, 19, 31], 1))
    })
    it('Should count half the array length when value is at an end', function () {
        assert.deepEqual([6, 3], binarySearch([1, 3, 7, 10, 14, 19, 31], 31))
    })
})