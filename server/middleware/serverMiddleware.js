'use strict';

import logger  from 'morgan';
import helmet from 'helmet';
import webpack from 'webpack';
import expressSession from 'express-session';
import bodyParser from 'body-parser';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import expressValidator from 'express-validator';

export default (server) => {
  server.use(helmet());
  server.use(logger('dev'));
  server.use(compression());
  server.use(cookieParser());
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(expressValidator());
  server.use(expressSession({secret: 'max', resave: false, saveUninitialized: false }));
  server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, token_authorization');
    next();
  });
};
