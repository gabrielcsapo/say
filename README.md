# saywhat  

> 💬 a library that replaces alphabetical characters with similarly shaped symbols

[![Build Status](https://travis-ci.org/gabrielcsapo/saywhat.svg?branch=master)](https://travis-ci.org/gabrielcsapo/saywhat)
[![Dependency Status](https://starbuck.gabrielcsapo.com/badge/github/gabrielcsapo/saywhat/status.svg)](https://starbuck.gabrielcsapo.com/github/gabrielcsapo/saywhat)
[![devDependency Status](https://starbuck.gabrielcsapo.com/badge/github/gabrielcsapo/saywhat/dev-status.svg)](https://starbuck.gabrielcsapo.com/github/gabrielcsapo/saywhat#info=devDependencies)
[![Coverage Status](https://lcov-server.gabrielcsapo.com/badge/github%2Ecom/gabrielcsapo/saywhat.svg)](https://lcov-server.gabrielcsapo.com/coverage/github%2Ecom/gabrielcsapo/saywhat)
[![npm](https://img.shields.io/npm/dt/saywhat.svg?maxAge=2592000)]()
[![npm](https://img.shields.io/npm/dm/saywhat.svg?maxAge=2592000)]()

If you are interesting in using this in the browser please make sure to set `<meta charset="utf-8">`.

>> For the best experience encode and decode using this library to ensure properly constructed strings. Javascript has a unicode problem and it can be solved with tooling!

## Usage

> encode

```javascript
const SayWhat = require('saywhat');
SayWhat.encode('hello'); // h﻿👌﻿l﻿l﻿👩🏼‍🌾﻿
```

> decode

```javascript
const SayWhat = require('saywhat');
SayWhat.decode('h﻿👌﻿l﻿l﻿👩🏼‍🌾﻿'); // hello
```

> It works with numbers and letters!

```javascript
const SayWhat = require('saywhat');
SayWhat.encode('12345 I see you'); // 1﻿2﻿3﻿🕵️‍♀️﻿5﻿ ﻿↔️﻿ 👨‍👨‍👧‍👦﻿📑﻿👁﻿ ﻿y﻿👩🏻‍🚒﻿u﻿
SayWhat.decode('1﻿2﻿3﻿🕵️‍♀️﻿5﻿ ↔️﻿ ﻿👨‍👨‍👧‍👦﻿📑﻿👁﻿ y﻿👩🏻‍🚒﻿u'); // 12345 i see you
```

# What is this?

This takes all known unicode characters and compares them against emojis and other symbols to find which emojis or characters most look alike. So for example if you wanted to see what hello would look like in encoded it might generate `h﻿👌﻿l﻿l﻿👩🏼‍🌾﻿`.

## Contributions

> help with the comparing of the likeness of symbols!

```bash
npm run compile;
npm run build;
npm test;
npm run coverage;
```
