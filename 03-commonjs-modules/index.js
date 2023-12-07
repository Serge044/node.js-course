// const exportedObject = require("./multiple-exports.js");
// const { myName, myHobbies, myFavotiteNumber } = exportedObject;

const {
  myName,
  myHobbies,
  myFavotiteNumber,
} = require("./multiple-exports.js");
// myOtherName is alias for myName (myName: myOtherName), при деструктуризації можна створювати інші назви змінних
const {
  myName: myOtherName,
  myFriendsName,
  myBiggestHobbies,
} = require("./export-and-import.js");
const greetinFunction = require("./single-export.js");

console.log(myName);
console.log(myHobbies);
console.log(myFavotiteNumber);

// mutates array in the multiple-exports module!
myHobbies.push("slepping");

greetinFunction(myName);

console.log(myOtherName);
console.log(myFriendsName);
console.log(myBiggestHobbies);
console.log(myHobbies);
