const uWS = require("uWebSockets.js");

uWS
  .App({})
  .any("/*", (res, req) => {
    res.writeHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ hello: "world" }));
  })
  .listen(1337, listenSocket => {
    if (listenSocket) {
      console.log("Listening to port 1337");
    }
  });
