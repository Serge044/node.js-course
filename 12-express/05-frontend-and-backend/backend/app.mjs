import express from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();
// Logs info about request
app.use(morgan("short"));
// Convert JSON to JS Object in POST, PUT, PATCH request
app.use(express.json());

// Converts form to JS Object in POST, PUT, PATCH request
app.use(express.urlencoded({ extended: true }));
// enable all CORS requests
app.use(cors());

app.use((req, res) => {
  const personData = {
    name: "Serge",
    isDeveloper: true,
  };
  console.log(req.body);
  return res.json(personData);
});

app.listen(4000, () => console.log("Server is listening on port 4000"));
