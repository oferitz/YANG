

# YANG
> Yet Another Name Generator

![YANG](https://github.com/oferitz/YANG/workflows/Node.js%20CI/badge.svg)

## Install

```shell
$ pnpm add yet-another-name-generator
# or
$ npm add yet-another-name-generator
# or
$ yarn add yet-another-name-generator
````

## Test

```shell
$ pnpm run test
```

## Usage

```ts
import yang from 'yet-another-name-generator'

yang()

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
```ts

yang(options);

```
## Options

| Option           | Type                    | Description                                                                                                               |
| -----------------|-------------------------|---------------------------------------------------------------------------------------------------------------------------|
| the              | boolean                 | If `true`, adds the word "the" to the beginning of the string.                                                             |
| titleize         | boolean                 | If `true`, capitalizes the first letter of each word in the string.                                                         |
| separator        | boolean \| string       | - If `false`, trims spaces between the words, making it one long string.                                                   |
|                  |                         | - If a string, replaces the whitespace between words with your custom separator.                                           |

                                  
### Examples
```ts

yang({the: true})
// -> the bloody jagger

yang({the: true, titleize: true})
// -> The Magical Minnow

yang({titleize: true, separator: false})
// -> SoggyPoacher

yang({the: true, titleize: true, separator: '-'})
// -> The-Spiritual-Princess
```
