var fs = require('fs');
var path = require('path');
var async = require('async');
var gm = require('gm');
var Symbols = require('./symbols');
var ProgressBar = require('progress');

var total = Symbols.alphabet_lower.length * Symbols.mathamatical_operators.length;
total += Symbols.alphabet_lower.length * Symbols.emoji.length;

var bar = new ProgressBar('comparing [:bar] :percent :etas', {
    width: 20,
    complete: '=',
    incomplete: ' ',
    total: total
});

var file = path.resolve('output', 'alphabet_lower', 'a' + '.png')
var file2 = path.resolve('output', 'mathamatical_operators', '@' + '.png')

var match = {};

var compare = function(file1, file2, letter, character, callback, tolerance) {
    var _file1 = path.resolve('output', file1 + '.png')
    var _file2 = path.resolve('output', file2 + '.png')
    var options = {
        file: path.resolve('output', 'diff', letter + '-' + character + '.png'),
        tolerance: 0.02
    };

    tolerance = tolerance ? tolerance : 0.016;

    gm.compare(_file1, _file2, options, function(err, isEqual, equality, raw, path1, path2) {
        if(!err) {
            if (equality.toFixed(3) <= tolerance) {
                if (match[letter]) {
                    match[letter].push(character);
                } else {
                    match[letter] = [];
                    match[letter].push(character);
                }
            }
        } else {
            console.log(err);
        }
        bar.tick();
        callback();
    });
}

async.parallelLimit([
    function(next) {
        async.forEachOfSeries(Symbols.alphabet_lower, function(alphabet_lower, index, outer_callback) {
            async.forEachOf(Symbols.mathamatical_operators, function(operator, index, callback) {
                if(operator) {
                    compare('alphabet_lower/' + alphabet_lower, 'mathamatical_operators/' + operator, alphabet_lower, operator, function() {
                        callback();
                    }, 0.016);
                } else {
                    callback();
                }
            }, function(error) {
                outer_callback();
            });
        }, function() {
            next();
        });
    },
    function(next) {
        async.forEachOfSeries(Symbols.alphabet_lower, function(alphabet_lower, index, outer_callback) {
            async.forEachOfLimit(Symbols.emoji, 1, function(operator, index, callback) {
                if(operator) {
                    compare('alphabet_lower/' + alphabet_lower, 'emoji/' + operator, alphabet_lower, operator, function() {
                        callback();
                    }, 0.14);
                } else {
                    callback();
                }
            }, function(error) {
                outer_callback();
            });
        }, function() {
            next();
        });
    },
], 1, function() {
    fs.writeFile(path.resolve(__dirname, '..', 'character_map.json'), JSON.stringify(match, null, 4), function(err) {
        if(err) {
          console.log(err);
        } else {
          console.log("JSON saved to");
        }
    });
});
