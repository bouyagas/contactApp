'use strict';

import express from 'express';
import path from 'path';
import middleware from './middleware/serverMiddleware.js';
import contactRoute from './api/contactApi/contactRoutes.js';

const server = express();

server.use(express.static(path.join(__dirname, '../client/dist')));

//middleware
middleware(server);
server.use('/api/contact', contactRoute);

 export default server;
