const { myName, myHobbies } = require("./multiple-exports");

const myFriendsName = "Sandra";

module.exports.myName = myName;
module.exports.myFriendsName = myFriendsName;
// property names could be different from the variable names
module.exports.myBiggestHobbies = myHobbies;
