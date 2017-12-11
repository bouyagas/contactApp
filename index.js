'use strict';
import { print } from './libs/utils.js';
import server from './server/server.js';

const port = process.argv[2] || process.env.Port || 3000;

server.listen(port, () => {
  print(`Up and running ${port} :)`);
});

