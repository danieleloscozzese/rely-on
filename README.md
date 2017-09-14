# Summary

HTML applications often require an identified element to be present and select
the element with the assumption that it is present.

Type-annotation tools like Flow and TypeScript will let you know that this isn't
strictly the case: if an element isn't present, then `null` will be returned
from `document.getElementById`.

Refining the type of the result can be done in an `if (element !== null)...else`
but this must be done every time in order to eliminate the possibility of
`null`.

This package allows code to rely on a `Node` being present:
1. It refines a `Node | null | undefined` node into a `Node` to satisfy the type
checker.
2. It returns the `Node` passed so methods can chain as usual.
3. It throws a TypeError with a customizable message if passed
`null | undefined` so missing elements are caught at the point of selection.
4. It throws a TypeError if the argument passed is not a `Node`.

## Example
```javascript
const element = relyOn(document.getElementById('identifier'));
```
