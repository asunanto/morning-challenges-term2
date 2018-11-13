/*
Largest Number
Write a method that will take an array of numbers
and return whichever is the largest.

Test your solution:
mocha 02_largest_number.js
(You'll need mocha installed first: `npm install mocha -g`)
*/

function largestNumber(arr) {
    let largest_num = 0
    if (arr.length == 0) return null
    // for (i=0 ; i<arr.length; i++) if (arr[i]>largest_num) largest_num = arr[i]    
    arr.map(number => {if (number>largest_num) largest_num = number })
    return largest_num
}


var assert = require('assert');

describe('largestNumber', function () {
    it('should return the largest number', function () {
        assert.equal(10, largestNumber([5, -2, 10]));
    })
    it('should ignore invalid array entries', function () {
        assert.equal(10, largestNumber([10, 10, 's']));
    })
    it('should return null if the array is empty', function () {
        assert.equal(null, largestNumber([]))
    })

})