/* eslint-disable func-names */
exports.up = function (knex) {
  return knex.schema.createTable('exercise', (table) => {
    table.increments('exercise_id').unique().notNullable();
    table.integer('user_id').references('user_id').inTable('user');
    table.boolean('default').notNullable().defaultTo(false);
    table.string('exercise', 255).notNullable();
    table.string('focus', 255);
    table.string('image_url', 255);
    table.dateTime('created_on').defaultTo(knex.fn.now());
    table.dateTime('modified_on').defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('exercise');
};
