const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("Responce from Express!"));

app.listen(3000, () => console.log("Server was started at port 3000"));
