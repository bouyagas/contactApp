// Setting the table schema
'use strict';
exports.up =  (knex) => {
  return knex.schema
  .createTable('contacts', (table) => {
    table.increments('id').primary();
    table.string('firstName');
    table.string('lastName');
    table.string('emailAddress');
  });
};

exports.down = (knex) => {
  return knex.schema
  .dropTable('contacts');
};
