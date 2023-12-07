const path = require("path");

const textFilePAth = "/Users/serhiima/projects/file.txt";

console.log(path.extname(textFilePAth)); // .txt

console.log(path.parse(textFilePAth));
const parsedPath = path.parse(textFilePAth);

const oldPath = textFilePAth;
const newPath = path.join(parsedPath.dir, `renamed-${parsedPath.name}.mjs`);

console.log(oldPath);
console.log(newPath);
