## For Loops vs forEach

for loops:

use:

- medium-large loops without helpers

pros:

- classic, familiar to all
- reads naturally out loud
- `for-of` works on all iterables
- can use variables transformed by loop
- possibly most performant

notes: 

- can optimize loop by caching:
```javascript
const arr = [0, 1, 2, 3, 4, 5];

// avoid property access every iteration
for (let i = 0; n = arr.length; i < n; i++) {
    // do something
}
```

forEach:

use:

- tight loops, functional style code

pros:

- fits in functional-style code
- easy access to iteration index
- concise one liners: `bears.forEach(paintBlack)`

// http://2ality.com/2011/04/iterating-over-arrays-and-objects-in.html
