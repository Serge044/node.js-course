const myName = "Serge";
const myHobbies = ["cycling", "coding", "live"];
const myFavotiteNumber = 15;

console.log("Text from the multiple-exports CommonJS module");

// module.exports and exports reference the same object in memory
module.exports.myName = myName;
module.exports.myHobbies = myHobbies;
exports.myFavotiteNumber = myFavotiteNumber;
