module.exports = {
    output: "./docs",
    title: "saywhat",
    description: "When letters are not enough",
    source: "https://github.com/gabrielcsapo/saywhat",
    body: [{
        type: "text",
        value: "This takes all known unicode characters and compares them against emojis and other symbols to find which emojis or characters most look alike. So for example if you wanted to see what hello would look like in encoded it might generate `💇⋗⊕∳≅`."
    }, {
        type: "code",
        title: "Encode",
        value: `
          var Say = require('saywhat');
          Say.encode('hello');
        `
    }, {
        type: "code",
        title: "Decode",
        value: `
          var Say = require('saywhat');
          Say.decode('💇⋗⊕∳≅'); // hello
        `
    }, {
        type: "code",
        title: "Encode - Decode",
        value: `
          var Say = require('saywhat');
          var encoded = Say.encode('12345 I see you');
          console.log(encoded);
          var decoded = Say.decode(encoded);
          console.log(decoded);
        `
    }],
    externals: [
        "./dist/saywhat.js",
        "./docs/doc.js"
    ]
}
