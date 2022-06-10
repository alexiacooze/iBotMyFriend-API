const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");
const cleverbot = require("cleverbot-free");
app.use(cors());

app.listen(8080, () => {
  console.log("Listening on 8080");
});
