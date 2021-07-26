exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('workout_log').del()
    .then(() => knex('workout_log').insert([
      { user_id: 2, note: 'Workout Log 1' },
      { user_id: 3, note: 'Workout Log 1' },
    ]));
};
