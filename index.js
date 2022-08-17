import express from "express";
const app = express();
import cors from "cors";
import fetch from "node-fetch";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.post("/:input", async (request, response) => {
  const input = request.params.input;
  const API_URL = `http://www.cleverbot.com/getreply?key=CC9hwHGmNBnWhQJmXFy4DsBPgiw&input=${input}}`;
  const fetch_response = await fetch(API_URL);
  const json = await fetch_response.json();
  response.json(json);
});

app.listen(3000, () => {
  console.log("Listening on 3000");
});
