var chai   = require('chai'),
    assert = chai.assert;

describe("Splice Test Cases: ", function() {
    describe(".splice", function() {
        it("should modify the array it's operating on", function() {
            var arr = [1, 2, 3, 4, 5];
            var result = arr.splice(2, 3);
            assert.deepEqual([1, 2], arr);
        });

        it("should return the removed items", function() {
            var arr = [1, 2, 3, 4, 5];
            var result = arr.splice(2, 3);
            assert.deepEqual([3, 4, 5], result);
        });
    });
});
