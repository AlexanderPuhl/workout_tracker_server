/* eslint-disable func-names */
exports.up = function (knex) {
  return knex.schema.createTable('user', (table) => {
    table.increments('user_id').unique().notNullable();
    table.integer('role_id').notNullable().references('role_id').inTable('role');
    table.string('username', 35).unique().notNullable();
    table.string('email', 70).unique().notNullable();
    table.string('name', 70).notNullable();
    table.string('password', 255).notNullable();
    table.dateTime('last_login').defaultTo(knex.fn.now());
    table.dateTime('created_on').defaultTo(knex.fn.now());
    table.dateTime('modified_on').defaultTo(knex.fn.now());
    table.string('reset_token', 255);
    table.integer('reset_token_expiration');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('user');
};
