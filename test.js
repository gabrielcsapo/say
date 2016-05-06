var htmlPngStream = require('html-png-stream');
var stream = require('stream');
var fs = require('fs');
var path = require('path');
var ps = htmlPngStream({ width: 1280, height: 720, browser: 'phantomjs' });
var rs = stream.Readable();
rs._read = function () {};

rs.pipe(ps);

var out = fs.createWriteStream(path.resolve(__dirname, 'test.png'))

ps.on('data', function(chunk) {
    out.write(chunk);
});

ps.on('error', function(chunk) {
    console.log(chunk.toString('utf8'))
});

ps.on('end', function() {
    console.log('end');
});

// render some HTML
rs.push('<b>🖕</b>');
