'use strict';
const express = require('express');
const path = require('path');
const middleware = require('./middleware/serverMiddleware.js');
const contactRoute = require('./api/contactApi/contactRoutes.js');

const server = express();

server.use(express.static(path.join(__dirname, '../client/dist')));

//middleware
middleware(server);
server.use('/api/contact', contactRoute);

module.exports = server;
