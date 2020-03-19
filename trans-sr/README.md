# trans-sr

[![npm version](https://badge.fury.io/js/trans-sr.svg)](https://badge.fury.io/js/trans-sr)


## Usage:

```sh
trans-sr [options] <mapName> <input>
  -o, --output <filename>
  -f, --file
  -h, --help
  -q, --quiet
```

`mapName` - the name of transliateration map. May be one of these:

+ `lat2cyr`
+ `cyr2lat`

`input` is either a raw content or a file (if `-f` option is specified).

Example:

```sh
trans-sr lat2cyr "Igor"
Игор
```

## Installation

```
yarn install -g
```

## Development

```sh
yarn install
yarn link
... work ...
yarn unlink
```

### Publis

```sh
yarn publish
```
