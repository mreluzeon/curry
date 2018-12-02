# Fucntion currier

This package curries binary functions.

## How to work with it

```javascript
curry = require('curry').curry
add = (a, b) => a + b

// Before
[1,2,3,4].map((i) => add(i, 1))

// After
[1,2,3,4].map(curry(add)(1))
```

## How to add changes?

This project is written in clojurescript. You have to install lumo to build /src files.
