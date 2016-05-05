var character_map = {
    'A': ["Ą", "💧", "Д", "Å", "ᐃ", "@", "ᥪ", "𝚫", "ᕕ", "🌀"],
    'B': ["ϐ", "ᵦ", "฿", "𝟾", "8"],
    'C': ["Ꞇ", "⸦", "ᙅ", "🌊"],
    'D': ["𐌃", "⌷", "ŋ", "ე"],
    'E': ["3", "ピ", "⊑", "⫕", "𐎛", "ᑢ", "∑"],
    'F': ["Ґ", "𝔽", "𝙵"],
    'G': ["𝔾", "Ǥ", "Ꮆ", "Ɠ", "ໆ", "𝟿", "𝕘", "ϧ"],
    'H': ["µ", "ꖾ", "Ӊ", "Џ", "👬", "👭", "👫"],
    'I': ["ヱ", "𝓘", "ℶ", "↥", "🏮", "🐛", "💈", "💉", "💊", "🔦"],
    'J': ["⥡", "⑀", "⥌", "⎎"],
    'K': ["K", "𐌊", "𝕂", "𝕜"],
    'L': ["Ꝇ", "꜕", "└", "👡"],
    'M': ["Җ", "⩚", "⨇", "ᗑ", "⫙", "⫛", "Ԡ", "⫚", "♏", "Ҧ", "👪"],
    'N': ["Ɲ", "Л", "ᜨ", "∧", "П", "⎍", "ᥥ", "ᜬ"],
    'O': ["𝙾", "◯", "▢", "0", "🔘", "🌕", "🌎", "Ø", "⎔", "❍", "💍", "⩍", "🍊", "💞", "Ѻ", "🌰", "🎯", "❤️", "⭕"],
    'P': ["𐌛", "ᑭ", "𝚙", "ℙ", "ᕈ", "Ᵽ", "⍴", "ƿ", "Ꮅ"],
    'Q': ["ⵚ", "℺", "Ⴓ", "Ɋ", "🎈"],
    'R': ["ⴽ", "ᖇ", "ҏ", "ք", "⌠"],
    'S': ["𝜻", "ﮐ", "$"],
    'T': ["𝍮", "Ƭ", "⫪", "🔨", "🌲"],
    'U': ["υ", "⨆", "∐", "ᙀ", "Ա", "🌙"],
    'V': ["⎷", "V", "√", "ᵥ", "۷", "ᵛ", "ѵ"],
    'W': ["ω", "ᥕ", "⍵", "ꟽ", "⨈", "👐"],
    'X': ["⤨", "╳", "⚔", "⤪", "⤧", "𝕏", "⤫", "🌟","🌠", "🔯"],
    'Y': ["ĭ", "Ỳ", "Ῡ", "🔧", "🌱"],
    'Z': ["ℤ", "೭", "2", "ƻ", "ϩ", "💤"]
};

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
                    console.log(letter.toString('utf8'));
                    if(character_map[key].indexOf(letter) > -1) {
                        console.log(letter);
                        console.log(key);
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
                letter = letter.toUpperCase();
                var length = character_map[letter].length;
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

if (typeof module === "object" && typeof module.exports === "object" ) {
    module.exports = Say;
} else {
    window.Say = Say;
}
