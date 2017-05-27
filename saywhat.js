var character_map = require('./character_map.json');
var spliddit = require('spliddit');

var Say = {
    // TODO: clean this up
    decode: function decode(input) {
        var raw = spliddit(input);
        var out = "";
        var check = [];
        raw.forEach((val) => {
            check.push(val);
        });
        check.forEach((letter) => {
            var val;
            for (var key in character_map) {
                if (character_map[key].indexOf(letter) > -1) {
                    val = key;
                    out += key;
                }
            }
            if (!val) {
                out += letter;
            }
        });
        return out;
    },
    encode: function encode(input) {
        var out = "";
        input.split('').forEach((letter) => {
            if (letter.match(/[a-z]/i)) {
                letter = letter.toLowerCase();
            }
            var length = character_map[letter] ? character_map[letter].length : 0;
            if (length > 0) {
                // get a random index of the array
                var index = Math.floor((Math.random() * length) + 0);
                out += character_map[letter][index];
            } else {
                out += letter;
            }
        });
        return out;
    }
}

module.exports = Say;
