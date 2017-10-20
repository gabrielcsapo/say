# saywhat  

[![Build Status](https://travis-ci.org/gabrielcsapo/saywhat.svg?branch=master)](https://travis-ci.org/gabrielcsapo/saywhat)
[![Dependency Status](https://starbuck.gabrielcsapo.com/badge/github/gabrielcsapo/saywhat/status.svg)](https://starbuck.gabrielcsapo.com/github/gabrielcsapo/saywhat)
[![devDependency Status](https://starbuck.gabrielcsapo.com/badge/github/gabrielcsapo/saywhat/dev-status.svg)](https://starbuck.gabrielcsapo.com/github/gabrielcsapo/saywhat#info=devDependencies)
[![Coverage Status](https://lcov-server.gabrielcsapo.com/badge/github%2Ecom/gabrielcsapo/saywhat.svg)](https://lcov-server.gabrielcsapo.com/coverage/github%2Ecom/gabrielcsapo/saywhat)
[![npm](https://img.shields.io/npm/dt/saywhat.svg?maxAge=2592000)]()
[![npm](https://img.shields.io/npm/dm/saywhat.svg?maxAge=2592000)]()

> this is a text encoder and decoder, currently only works with utf8 values

If you are interesting in using this in the browser please make sure to set `<meta charset="utf-8">`.

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
Say.decode('≴🍹👈⋒🌪 ⋳ ⋆≟≛ y⊷∬'); // 12345 i see you
```

# What is this?

This takes all known unicode characters and compares them against emojis and other symbols to find which emojis or characters most look alike. So for example if you wanted to see what hello would look like in encoded it might generate `💇⋗⊕∳≅`.

## Contributions

> help with the comparing of the likeness of symbols!

```bash
npm run build;
npm run compile;
npm test;
npm run coverage;
```

This will screenshot all characters in `/scripts/symbols.js` and output them to the output folder. Once this is done, it will do a visual diff to find the likeness of those characters.

# Building

- You must have phantomjs installed globally `npm install phantomjs -g`
- You must have graphicsmagick installed `brew install graphicsmagick`
