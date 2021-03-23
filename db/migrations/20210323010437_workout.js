exports.up = function (knex) {
  return knex.schema.createTable('workout', (table) => {
    table.increments('workout_id').unique().notNullable();
    table.string('workout', 100).notNullable();
    table.string('focus', 100);
    table.string('image_url', 255);
    table.dateTime('created_on').defaultTo(knex.fn.now());
    table.dateTime('modified_on').defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('workout');
};
