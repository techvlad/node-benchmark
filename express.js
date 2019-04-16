const express = require("express");

const server = express();

server.use("*", (req, res) => {
  res.send({ hello: "world" });
});

server.listen(1337, () => {
  console.log("express test 1337");
});
