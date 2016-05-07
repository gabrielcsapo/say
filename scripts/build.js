var fs = require('fs');
var path = require('path');
var async = require('async');
var html2png = require('html2png');
var ProgressBar = require('progress');

var Symbols = require('./symbols');

var rasterize = function(array, type) {
    async.forEachOf(array, function(value, index, callback) {
        try {
            var screenshot = html2png({
                width: 512,
                height: 512,
                browser: 'phantomjs'
            });
            screenshot.render('<html><head></head><body><div style="margin-top:65px;text-align:center;font-size:500px;vertical-align:middle;width:100%;height:100%;">' + value + '</div></body></html', function(err, data) {
                if (err) return screenshot.error(err, function() {
                    throw err;
                });
                fs.writeFile(path.resolve('output', type, value + '.png'), data.toString('base64'), 'base64', function(err) {
                    if(err) { throw err; }
                    bar.tick();
                    screenshot.close(callback);
                });
            });
        } catch (ex) {
            bar.tick();
            callback();
        }
    })
}

var bar = new ProgressBar('building [:bar] :percent :etas', {
    width: 20,
    complete: '=',
    incomplete: ' ',
    total: (Symbols.alphabet_upper.length + Symbols.alphabet_lower.length + Symbols.emoji.length + Symbols.mathamatical_operators.length)
});

// rasterize(Symbols.alphabet_upper, 'alphabet_upper');
// rasterize(Symbols.alphabet_lower, 'alphabet_lower');
rasterize(Symbols.emoji, 'emoji');
// rasterize(Symbols.mathamatical_operators, 'mathamatical_operators');
// rasterize(Symbols.numbers, 'numbers');
