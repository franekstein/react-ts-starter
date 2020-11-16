/* eslint-disable @typescript-eslint/no-var-requires */
const Fastify = require('fastify');
const fastifyStatic = require('fastify-static');
const fastifyHelmet = require('fastify-helmet');
const path = require('path');
const fs = require('fs');

const portNumber = 3000;
const sourceDir = '../dist';

// For https you need some certificates (for now certificates needs to be in the same directory as server)
const certOptions = {
  key: fs.readFileSync(path.resolve('server/certificates/private.key')),
  cert: fs.readFileSync(path.resolve('server/certificates/certificate.crt')),
};

const fastify = Fastify({
  http2: true,
  https: certOptions,
});

fastify.register(require('fastify-compress'));

fastify.register(fastifyStatic, {
  root: path.join(__dirname, sourceDir),
});

fastify.register(fastifyHelmet);

fastify.get('/', async (request, reply) => {
  reply.sendFile('index.html');
});

fastify.listen(portNumber, (err) => {
  if (err) throw err;
  console.log(`Fastify web server started: https://localhost:${portNumber}`);
  console.log(`Serving content from /${sourceDir}/`);
});
