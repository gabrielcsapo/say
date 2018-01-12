const { name, description } = require('./package.json');

module.exports = {
  output: "./docs",
  title: name,
  description: description,
  nav: {
    Source: "https://github.com/gabrielcsapo/saywhat"
  },
  body: [{
    type: "text",
    value: "This takes all known unicode characters and compares them against emojis and other symbols to find which emojis or characters most look alike. So for example if you wanted to see what hello would look like in encoded it might generate `h💖ll👩🏼‍🚀`."
  }, {
    type: "code",
    title: "Encode",
    value: `
          const Say = require('saywhat');
          Say.encode('hello');
        `
  }, {
    type: "code",
    title: "Decode",
    value: `
          const Say = require('saywhat');
          Say.decode('h💖ll👩🏼‍🚀') // hello
        `
  }, {
    type: "code",
    title: "Encode - Decode",
    value: `
          const Say = require('saywhat');
          let encoded = Say.encode('12345 I see you');
          console.log(encoded);
          let decoded = Say.decode(encoded);
          console.log(decoded);
        `
  }],
  externals: [
    "./dist/saywhat.min.js",
    "./docs/doc.js"
  ]
}
