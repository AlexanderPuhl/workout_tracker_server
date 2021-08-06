/* eslint-disable func-names */
exports.up = function (knex) {
  return knex.schema.createTable('workout_log', (table) => {
    table.increments('workout_log_id').unique().notNullable();
    table.integer('user_id').references('user_id').inTable('user').onDelete('CASCADE');
    table.string('note', 255);
    table.dateTime('created_on').defaultTo(knex.fn.now());
    table.dateTime('modified_on').defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('workout_log');
};
