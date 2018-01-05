const map = require('./map.json');
const runes = require('runes');

class SayWhat {
  static decode(input) {
    let out = "";
    // Split on the unicode character, if it doesn't exist use runes
    let check = input.indexOf('\uFEFF') > -1 ? input.split('\uFEFF') : runes(input);
    check.forEach((letter) => {
      let val;
      // We have to go through every map value to get its top level character
      // TODO: This can be solved by keeping a reverse map
      for (var key in map) {
        if (map[key].indexOf(letter) > -1) {
          val = key;
          out += key;
        }
      }
      // If there is no match for this value just output it
      if (!val) out += letter;
    });
    return out;
  }
  static encode(input) {
    let out = '';
    // split on the input to convert character by character
    input.split('').forEach((letter) => {
      const length = map[letter] ? map[letter].length : 0;
      if (length > 0) {
        // since our associations are arrays of values, we want to get a random value from that array
        out += map[letter][Math.floor((Math.random() * length) + 0)];
      } else {
        // This is a character we don't have a defintion for, hence we can just add it without worry
        out += letter;
      }
      // This is an invisible unicode non-space. Sometimes unicode characters stick together
      // This is caused by the ability to have any number of characters making up different glyphs.
      // The easiest and most reliable way of getting around this is by having a character to split on.
      // This is where the unicode space comes into relevance.
      out += '\uFEFF';
    });
    return out;
  }
}

module.exports = SayWhat;
