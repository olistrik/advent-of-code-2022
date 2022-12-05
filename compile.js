#!/usr/bin/env node
const sass = require("sass");
const fs = require("fs");

const file = process.argv[2];
const input = process.argv[3];

var lines = fs.readFileSync(input, { encoding: "utf8" });
lines = lines.split("\n").slice(0, -1);

const result = sass.compile(file, {
  functions: {
    "input()": function () {
      return new sass.SassList(lines.map((val) => new sass.SassString(val)));
    },
    "read-line()": function () {
      return new sass.SassString(lines.shift());
    },
  },
});

console.log(result.css);
