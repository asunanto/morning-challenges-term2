let assert = require('chai').assert
let binaryToDecimal = require('../11_binary_to_decimal')
let tests = 1
afterEach(function () {
    console.log(`Test ${tests++} complete`)
})
describe('Binary to decimal', function () {
    context('convert a valid binary to its decimal value', function () {
        it('should return a valid conversion for 4 digit binary', function () {
            assert.equal((9),binaryToDecimal(1001)) 
        })
        it('should return a valid conversion for max digit binary', function () {
            assert.equal((15),binaryToDecimal(1111))
        })
        it('should return a valid conversion for 5 digit binary', function () {
            assert.equal((31),binaryToDecimal(11111))
        })
        
    })
    it('Should return a null if the binary has a number other than 0 or 1', function () {
        assert.equal((null),binaryToDecimal(1002))
        assert.equal((null),binaryToDecimal(1220))
    })
})


