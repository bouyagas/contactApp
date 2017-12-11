'use strict';
const knex = require('knex')(require('./knexfile'));
const bookshelf = require('bookshelf')(knex);

export default bookshelf;


