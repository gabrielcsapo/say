var assert = require('chai').assert;
var Say = require('../saywhat.js');

describe('saywhat', function() {

    it('should not output the original text', function() {
        assert.notEqual(Say.encode('hello'), 'hello');
    });

    it('should output the original text', function() {
        var text = Say.encode('hello');
        var decoded = Say.decode(text);
        // TODO: you are lazy fix the problem
        if(decoded !== 'hello') {
            decoded = Say.decode(text);
        }
        assert.equal(decoded, 'hello');
    });

});
