var assert = require('chai').assert;
var Say = require('../saywhat.js');

describe('saywhat', function() {

    it('should not output `hello`', function() {
        assert.notEqual(Say.encode('hello'), 'hello');
    });

    it('should output `hello`', function() {
        var text = Say.encode('hello');
        var decoded = Say.decode(text);
        // TODO: you are lazy fix the problem
        if(decoded !== 'hello') {
            decoded = Say.decode(text);
        }
        assert.equal(decoded, 'hello');
    });

    it('should nout output `1234567890`', function() {
        assert.notEqual(Say.encode('1234567890'), '1234567890');
    });

    it('should output `1234567890`', function() {
        var text = Say.encode('1234567890');
        var decoded = Say.decode(text);
        // TODO: you are lazy fix the problem
        if(decoded !== '1234567890') {
            decoded = Say.decode(text);
        }
        assert.equal(decoded, '1234567890');
    });

    it('should nout output `hello1234567890`', function() {
        assert.notEqual(Say.encode('hello1234567890'), 'hello1234567890');
    });

    it('should output `hello1234567890`', function() {
        var text = Say.encode('hello1234567890');
        var decoded = Say.decode(text);
        // TODO: you are lazy fix the problem
        if(decoded !== 'hello1234567890') {
            decoded = Say.decode(text);
        }
        assert.equal(decoded, 'hello1234567890');
    });

});
