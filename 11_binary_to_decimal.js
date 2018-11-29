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
    let bin_arr = binaryNumber.toString().split('')
    let sum = 0
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

module.exports = binaryToDecimal