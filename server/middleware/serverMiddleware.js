const logger  = require('morgan');
const helmet = require('helmet');
const session = require('express-session');
const bodyParser = require('body-parser');
const compression = require('compression');
const cookieParser = require('cookie-parser');

module.exports = (server) => {
  server.use(logger('dev'));
  server.use(compression());
  server.use(cookieParser());
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(helmet());
  server.use(session({
    secret: 'shhhhhhh',
    resave: true,
    saveUninitialized: true
  }));
  server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, token_authorization');
    next();
  });
};
