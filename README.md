# YANG [![Build Status](https://drone.io/github.com/oferitz/YANG/status.png)](https://drone.io/github.com/oferitz/YANG/latest)

> Yet Another Name Generator

## Install

```
$ npm i yet-another-name-generator
```

## Test

```
$ npm test
```

## Usage

```js
var YANG = require('yet-another-name-generator');

YANG.generate();

```
**Some examples:**

* nostalgic clod-hopper
* spiritual bagman
* lacking codman
* pumped boatwright
* melted minnow
* mere kite
* silky opah
* blue butcher
* drunk canadian mountie
* mountainous herpetologist

## API
```js

YANG.generate(options);

```
**options**:

* **the {Boolean}**: if `true` add the word "the" to the beginning of the string.
* **titleize {Boolean}**: if `true` uppercase the first letter of each word in the string.
* **separator {Boolean|String}**: if `false` trim spaces between the words of the string making it one long string.
                                  else replace the whitespace between words with your custom separator.
                                  
### Examples
```js

YANG.generate({the: true});
// -> the bloody jagger

YANG.generate({the: true, titleize: true});
// -> The Magical Minnow

YANG.generate({titleize: true, separator: false});
// -> SoggyPoacher

YANG.generate({the: true, titleize: true, separator: '-'});
// -> The-Spiritual-Princess
```
