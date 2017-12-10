'use strict';
const { print } = require('./libs/utils.js');
const server = require('./server/server.js');

const port = process.argv[2] || process.env.Port || 3000;

server.listen(port, () => {
  print(`Up and running ${port} :)`);
});

