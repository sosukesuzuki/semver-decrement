/**
@param version - Semver version.
@param type - version type to decrement to.
 
@example
```
const semverDecrement = require("semver-decrement");

semverDecrement('1.2.3-foo', 'patch');
//=> '1.2.2'

semverDecrement('1.2.3', 'minor');
//=> '1.1.0'

semverDecrement('1.2.3', 'major');
//=> '0.0.0'
```
 
*/

declare function semverDecrement(
  version: string,
  type: "patch" | "minor" | "major"
);

export = semverDecrement;
