import express from "express";
import morgan from "morgan";

const app = express();
// Logs info about request
app.use(morgan("short"));
// Convert JSON to JS Object in POST, PUT, PATCH request
app.use(express.json());
// or(the same)
// app.use((req, res, next) => {
//   let data = "";
//   req.on("data", (chunk) => (data += chunk));
//   req.on("end", () => {
//     const parsedJSON = JSON.parse(data);
//     req.body = parsedJSON;
//     next();
//   });
// });

// Converts form to JS Object in POST, PUT, PATCH request
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log(req);
  console.log(req.headers["content-type"]);
  next();
});

app.use((req, res) => {
  console.log(req.body);
  return res.send("This is express server");
});

app.listen(3000, () => console.log("Server is listening on port 3000"));
