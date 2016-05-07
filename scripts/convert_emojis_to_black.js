var fs = require('fs');
var emoji = require('./symbols').emoji;

var output = '!/bin/sh\n\n';
emoji.forEach(function(emo) {
    output += 'convert output/emoji/'+emo+'.png -alpha extract -threshold 0 -negate -transparent white output/emoji/'+emo+'.png;';
});
