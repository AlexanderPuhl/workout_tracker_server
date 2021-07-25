exports.up = function (knex) {
  return knex.schema.createTable('template', (table) => {
    table.increments('set_id').unique().notNullable();
    table.integer('user_id').references('user_id').inTable('user');
    table.string('note', 255);
    table.dateTime('created_on').defaultTo(knex.fn.now());
    table.dateTime('modified_on').defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('template');
};
