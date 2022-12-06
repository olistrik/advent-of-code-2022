#!/usr/bin/env node
const sass = require("sass");
const fs = require("fs");

const file = process.argv[2];
const input = process.argv[3];

const fd = fs.openSync(input, "r");
var idx = 0;

function readChar() {
  let buffer = Buffer.alloc(1);
  fs.readSync(fd, buffer, 0, 1);
  return buffer.toString("utf8");
}

function readLine() {
  var line = undefined;

  var char = readChar();
  while (char != "\0" && char !== "\n") {
    line = (line ?? "") + char;

    char = readChar();
  }

  return line;
}

function wrapSassString(fn) {
  return function () {
    return sass.SassString(fn());
  };
}

const result = sass.compile(file, {
  functions: {
    "input()": function () {
      var lines = fs.readFileSync(input, { encoding: "utf8" });
      lines = lines.split("\n").slice(0, -1);
      return new sass.SassList(lines.map((val) => new sass.SassString(val)));
    },
    "read-line()": wrapSassString(readLine),
    "read-char()": wrapSassString(readChar),
  },
});

console.log(result.css);
