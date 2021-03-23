exports.up = function (knex) {
  return knex.schema.createTable('workout_log', (table) => {
    table.increments('workout_log_id').unique().notNullable();
    table.integer('user_id').references('user_id').inTable('user');
    table.integer('workout_id').references('workout_id').inTable('workout');
    table.integer('set_one_reps');
    table.integer('set_one_weights');
    table.integer('set_two_reps');
    table.integer('set_two_weights');
    table.integer('set_three_reps');
    table.integer('set_three_weights');
    table.integer('set_four_reps');
    table.integer('set_four_weights');
    table.integer('set_five_reps');
    table.integer('set_five_weights');
    table.integer('set_six_reps');
    table.integer('set_six_weights');
    table.integer('set_seven_reps');
    table.integer('set_seven_weights');
    table.integer('set_eight_reps');
    table.integer('set_eight_weights');
    table.integer('set_nine_reps');
    table.integer('set_nine_weights');
    table.integer('set_ten_reps');
    table.integer('set_ten_weights');
    table.string('note', 255);
    table.dateTime('created_on').defaultTo(knex.fn.now());
    table.dateTime('modified_on').defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('workout_log');
};
