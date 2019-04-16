const fastify = require("fastify");

const server = fastify({ logger: false });

server.get("*", (request, reply) => {
  reply.send({ hello: "world" });
});

server.listen(1337);
