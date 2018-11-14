/*
Open Door
Return true if name is Simon and hasCoffee is true.
Otherwise return false.
Test your solution:
mocha 03_open_door.js
*/

function openDoor(input) {
    // method 3
    return input.map(x => x.name === 'Simon' && x.hasCoffee).includes(true)

    // method 2
    // if (input.length === 0) return false
    // for (let item of input) return item.name === 'Simon' && item.hasCoffee 
    
    // method 1
    // for (let item of input) { 
    //     if (item.name === 'Simon' && item.hasCoffee === true){
    //         return true
    //     }
    //     else if (item.name !== 'Simon' && item.hasCoffee === true) {
    //         return false
    //     }
    //     else if (item.name !== 'Simon' && item.hasCoffee === true) {
    //         return false
    //     }
    //     else if (item.name === 'Simon' && item.hasCoffee === false) {
    //         return false
    //     }
    // }
}

function makeItem(name, hasCoffee) {
    item = new Object()
    item.name = name
    item.hasCoffee = hasCoffee
    return item
}

var assert = require('assert');

describe('openDoor', function () {
    
    it('should return true if "Simon" and hasCoffee with single object', function () {
        let hash = [];
        hash.push(makeItem('Simon', true))
        assert.equal(true, openDoor(hash))
    })
    it('should return true if "Simon" and hasCoffee with multiple objects', function () {
        hash = [];
        hash.push(makeItem('Simon', true))
        hash.push(makeItem('Scott', true))
        assert.equal(true, openDoor(hash))
    })
    it('should return false if !"Simon" and hasCoffee', function () {
        hash = [];
        hash.push(makeItem('Scott', true))
        assert.equal(false, openDoor(hash))
    })
    it('should return false if "Simon" and !hasCoffee', function () {
        hash = [];
        hash.push(makeItem('Simon', false))
        assert.equal(false, openDoor(hash))
    })
    it('should return false if empty array passed', function () {
        hash = [];
        assert.equal(false, openDoor(hash))
    })
})