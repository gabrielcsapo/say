# saywhat  
> http://gabrielcsapo.github.io/saywhat/

## Usage

> encode

```
var Say = require('saywhat');
Say.encode('hello'); // 👬𐎛👡└💞
```

> decode

```
var Say = require('saywhat');
Say.decode('👬𐎛👡└💞'); // hello
```

## Contributions

> help with the comparing of the likeness of symbols!

```bash
npm run build;
npm run compile;
npm test;
```

This will screenshot all characters in `/scripts/symbols.js` and output them to the output folder. Once this is done, it will do a visual diff to find the likeness of those characters.
