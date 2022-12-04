# Rules

All functions must be in scss. The only exception is the `input()` function.
This returns the second file provided to the compile script as an array of lines.

If inputs get to big, then a buffered input reader might be needed.

# Usage

```
./compile.js src/1a.scss input/1.in
```
