# semver-decrement

context: https://github.com/npm/node-semver/issues/48

## Install

```
$ npm install semver-decrement
```

## Usage

```js
const semverDecrement = require("semver-decrement");

semverDecrement("1.2.3-foo", "patch");
//=> '1.2.2'

semverDecrement("1.2.3", "minor");
//=> '1.1.0'

semverDecrement("1.2.3", "major");
//=> '0.0.0'
```

## API

### `semverDecrement`

#### `version`

type: `string`

Semver version.

#### `type`

type: `"patch" | "minor" | "major"`

Version type to decrement to.
