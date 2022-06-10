const express = require("express");
const router = express.Router();
const axios = require("axios");
const Cleverbot = require("cleverbot-api-node");
const Clever = new Cleverbot("CC9hwHGmNBnWhQJmXFy4DsBPgiw");

router.post("/", (_req, res, next) => {
  // axios
  //   .post(
  //     "http://www.cleverbot.com/getreply?key=CC9hwHGmNBnWhQJmXFy4DsBPgiw&input=Hello&cs=76nxdxIJ02AAA&callback=ProcessReply"
  //   )
  //   .then((response) => {
  //     res.json(response.data);
  //   });
});

module.exports = router;
