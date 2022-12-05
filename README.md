# Rules

All functions must be in scss. The only exceptions are:

- `input()`: custom function that returns the input file as an array of lines.
- `read-line()`: custom function that returns the next line of the file.

# Usage

```
yarn install
./compile.js src/1a.scss input/1.in
```

# Structure

```
~/
├─ inputs
│  ├── *.in     -- the problem input.
│  └── *.test   -- the example input.
├─ src
│  ├── *a.scss  -- part 1 of a day.
│  ├── *b.scss  -- part 2 of a day.
│  └── _*.scss  -- internal libraries shared between days.
│
├── compile.js  -- the script used to compile the scss with the input files.
└── *           -- NixOS or Yarn stuff.
```
