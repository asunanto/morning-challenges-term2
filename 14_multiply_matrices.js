/*
You helped Neo almost get out of the matrix with matrix_addition but
Cypher was one step ahead of you. In order to get past Cypher's trap and
save Neo you need to write a new function.

Write a function similar to the matrix_addition challenge but instead
of addition, write one for multiplication.

Check your solution by running mocha 14_multiply_matrices

Example:
function matrixMultiplication([[1,2,3],[4,5,6]], [[7,8],[9,10],[11,12]])
=> [[58, 64], [139,154]]

Hint:
Try drawing the function out first if the arrays are a little confusing.
*/


function multiplyMatrices(matrixOne, matrixTwo) {
    let result = []
    for (i=0; i<matrixOne.length; i++) {
        if (matrixOne[i].length !== matrixTwo.length) return null // if col of matrix1 is not equal to row of matrix 2 cant perform product
        let row_result = [] 
        for (j=0; j<matrixTwo[0].length ; j++) {
            var rowBycol = matrixOne[i].map((a, x) => a * matrixTwo[x][j]) //multiply martrix1 row by matrix2 col
            row_result.push( rowBycol.reduce((a,b) => a+b, 0) ) //sums up row by col multiplication
        } // if rows have more than one element push an array else push a number
        result.push(row_result)
    }
    return result 
}

const assert = require ('assert');

describe('Matrix multiplication', function () {
    it('Should return the multipilcation of a matrix', function () {
        assert.deepEqual([[58,64], [139,154]], multiplyMatrices([[1,2,3],[4,5,6]], [[7,8],[9,10],[11,12]]))
    })
    it('Should return null if the matrix cannot be multiplied', function() {
        assert.deepEqual(null, multiplyMatrices( [[8,12,5], [40,21,8,17]], [[3,2,1,6], [7,4,1,9]]))
        assert.deepEqual(null, multiplyMatrices( [[8,12,5], [40,21,8]], [[3,2,1], [7,4,1]]))
    })
})