
var character_map = require('./character_map.json');

// TODO: ew
var splitEmojis = function (str) {
  split = str.split(/([\uD800-\uDBFF][\uDC00-\uDFFF])/);
  arr = [];
  for (var i=0; i<split.length; i++) {
    char = split[i]
    if (char !== "") {
      arr.push(char);
    }
  }
  return arr;
};

var Say = {
    // TODO: clean this up
    decode: function(input) {
        var raw = splitEmojis(input);
        var out = "";
        var check = [];
        raw.forEach(function(val) {
            console.log(val);
            console.log(val.length);
            if(val.length > 2) {
                val.split('').forEach(function(v){
                    check.push(v);
                });
            } else {
                check.push(val);
            }
        });
        check.forEach(function(letter) {
            if(letter == ' ') {
                out += letter;
            } else {
                for(var key in character_map) {
                    if(character_map[key].indexOf(letter) > -1) {
                        out += key;
                        break;
                    }
                }
            }
        });
        return out;
    },
    encode: function(input) {
        var out = "";
        input.split('').forEach(function(letter) {
            if(letter.match(/[a-z]/i)) {
                letter = letter.toLowerCase();
                var length = character_map[letter] ? character_map[letter].length : 0;
                if (length > 0) {
                    // get a random index of the array
                    var index = Math.floor((Math.random() * length) + 0);
                    out += character_map[letter][index];
                } else {
                    out += letter;
                }
            } else {
                out += letter;
            }
        });
        return out;
    }
}

if (window) {
     window.Say = Say;
} else if (typeof module === "object" && typeof module.exports === "object" ) {
    module.exports = Say;
} else {
    return Say;
}
