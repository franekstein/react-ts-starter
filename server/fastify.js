/* eslint-disable @typescript-eslint/no-var-requires */
const Fastify = require('fastify');
const fastifyStatic = require('fastify-static');
const fastifyHelmet = require('fastify-helmet');
const path = require('path');
const pem = require('pem');

const portNumber = 3000;
const sourceDir = '../dist';

pem.createCertificate({ days: 1, selfSigned: true }, (err, keys) => {
  if (err) {
    throw err;
  }

  const certOptions = {
    key: keys.serviceKey,
    cert: keys.certificate,
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
});
