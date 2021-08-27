/* eslint-disable func-names */
exports.up = function (knex) {
  return knex.schema.createTable('set', (table) => {
    table.increments('set_id').unique().notNullable();
    table.integer('user_id').references('user_id').inTable('user').onDelete('CASCADE');
    table.integer('workout_id').references('workout_id').inTable('workout').onDelete('CASCADE');
    table.integer('number_of_sets');
    table.integer('number_of_reps');
    table.integer('weight');
    table.string('note', 255);
    table.dateTime('created_on').defaultTo(knex.fn.now());
    table.dateTime('modified_on').defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('set');
};
