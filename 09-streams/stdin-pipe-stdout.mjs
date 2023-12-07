import stream from "stream";
import fs from "fs";

// // Pipe to file
// const filePath = "./files/stdin-dump.txt";
// const writeStream = fs.createWriteStream(filePath);
// process.stdin.pipe(writeStream);

// // Pipe to stdout (console.log to terminal)
// process.stdin.pipe(process.stdout);

const upperCaseStream = new stream.Transform({
  transform: function (chunk, encoding, cb) {
    const upperCased = chunk.toString().toUpperCase();
    cb(null, upperCased);
  },
});

const reversedStringStream = new stream.Transform({
  transform: function (chunk, encoding, cb) {
    const arrayOfChars = chunk.toString().split("");
    const lastChar = arrayOfChars.pop();
    const reversed = arrayOfChars.reverse().concat(lastChar).join("");
    cb(null, reversed);
  },
});

process.stdin
  .pipe(upperCaseStream)
  .pipe(reversedStringStream)
  .pipe(process.stdout);
