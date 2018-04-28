# Summary

HTML applications often require an identified element to be present and select the element with the assumption that it is present.

Type-annotation tools like TypeScript and Flow will let you know that this isn't strictly the case: if an element isn't present, then `null` will be returned from `document.getElementById`.

Refining the type of the result can be done in an `if (element !== null)...else` but this must be done every time in order to eliminate the possibility of `null`.

This package allows code to rely on a `Node` being present:

* If given a string, it selects the element with that ID and verifies it exists before returning it.
* If given a `Node | null`, it checks the value is a `Node` and:
  * if it is, returns it.
  * if it is `null`, throws an Error.

## Examples

```javascript
const element = relyOn("key-field", "The field must exist!");
```

```javascript
const element = relyOn(document.querySelector(".identifier"));
```
