const express = require("express");

const app = express();

const firstHandler = (req, res, next) => {
  console.log("first handler");
  next();
};
const secondtHandler = (req, res) => {
  console.log("second handler");
  res.send("Responce from Express");
};

app.get("/", firstHandler, secondtHandler);

app.listen(3000, () => console.log("Server was started at port 3000"));
