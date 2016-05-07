# saywhat  

[![Build Status](https://travis-ci.org/gabrielcsapo/saywhat.svg?branch=master)](https://travis-ci.org/gabrielcsapo/saywhat)
[![Dependency Status](https://david-dm.org/gabrielcsapo/saywhat.svg)](https://david-dm.org/gabrielcsapo/saywhat)
[![devDependency Status](https://david-dm.org/gabrielcsapo/saywhat/dev-status.svg)](https://david-dm.org/gabrielcsapo/saywhat#info=devDependencies)

> http://gabrielcsapo.github.io/saywhat/


## Usage

> encode

```javascript
var Say = require('saywhat');
Say.encode('hello'); // 💇⋗⊕∳≅
```

> decode

```javascript
var Say = require('saywhat');
Say.decode('💇⋗⊕∳≅'); // hello
```

> It works with numbers and letters!

```javascript
var Say = require('saywhat');
Say.encode('12345 I see you'); // ≴🍹👈⋒🌪 ⋳ ⋆≟≛ y⊷∬
Say.decode('≴🍹👈⋒🌪 ⋳ ⋆≟≛ y⊷∬') // 12345 i see you
```

## Contributions

> help with the comparing of the likeness of symbols!

```bash
npm run build;
npm run compile;
npm test;
```

This will screenshot all characters in `/scripts/symbols.js` and output them to the output folder. Once this is done, it will do a visual diff to find the likeness of those characters.
