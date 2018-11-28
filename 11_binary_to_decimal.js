/*
Write a method to convert a binary number to a decimal.

Examples:
    binaryToDecimal(1000) => 8
    binaryToDecimal(1011) => 11
    binaryToDecimal(1100) => 12

Your solution should not use parseInt

Test: mocha 11_binary_to_decimal

*/

function binaryToDecimal(binaryNumber) {
    // let bin_arr = binaryNumber.toString().split('')
    // let sum = 0
    for (i in bin_arr) {
        if (bin_arr[i] != 1 && bin_arr[i] != 0) return null
        sum += bin_arr[i] * (2 ** (bin_arr.length-1-i))
    }
    // for (i=bin_arr.length-1; i>=0 ; i--) {
    //     if (bin_arr[i] != 1 && bin_arr[i] != 0) return null
    //     sum+= bin_arr[i] * (2 ** i)
    // }
    return sum 
    
}

let assert = require('assert')

describe('Binary to decimal', function () {
    it('Should convert a binary to its decimal value', function () {
        assert.equal((9),binaryToDecimal(1001)) 
        assert.equal((15),binaryToDecimal(1111))
        assert.equal((31),binaryToDecimal(11111))
    })
    it('Should return a null if the binary has a number other than 0 or 1', function () {
        assert.equal((null),binaryToDecimal(1002))
        assert.equal((null),binaryToDecimal(1220))
    })
})