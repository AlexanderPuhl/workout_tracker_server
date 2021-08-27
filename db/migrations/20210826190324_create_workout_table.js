/* eslint-disable func-names */
exports.up = function (knex) {
  return knex.schema.createTable('workout', (table) => {
    table.increments('workout_id').unique().notNullable();
    table.integer('user_id').references('user_id').inTable('user').onDelete('CASCADE');
    table.integer('workout_log_id').references('workout_log_id').inTable('workout_log').onDelete('CASCADE');
    table.integer('exercise_id').references('exercise_id').inTable('exercise');
    table.string('note', 255);
    table.dateTime('created_on').defaultTo(knex.fn.now());
    table.dateTime('modified_on').defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('workout');
};
