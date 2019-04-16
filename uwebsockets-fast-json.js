const uWS = require("uWebSockets.js");
const fastJson = require("fast-json-stringify");

const stringify = fastJson({
  title: "Example Schema",
  type: "object",
  properties: {
    hello: {
      type: "string"
    }
  }
});

uWS
  .App({})
  .any("/*", (res, req) => {
    res.writeHeader("Content-Type", "application/json");
    res.end(stringify({ hello: "world" }));
  })
  .listen(1337, listenSocket => {
    if (listenSocket) {
      console.log("Listening to port 1337");
    }
  });
