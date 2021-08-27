/* eslint-disable func-names */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('workout_log').del()
    .then(() => knex('workout_log').insert([
      // ALEX'S WORKOUT SESSIONS
      { user_id: 2, note: 'Workout Log 1' },
      { user_id: 2, note: 'Workout Log 2' },
      { user_id: 2, note: 'Workout Log 3' },
      { user_id: 2, note: 'Workout Log 4' },
      { user_id: 2, note: 'Workout Log 5' },
      // CHRIS' WORKOUT SESSIONS
      { user_id: 3, note: 'Workout Log 1' },
      { user_id: 3, note: 'Workout Log 2' },
      { user_id: 3, note: 'Workout Log 3' },
      { user_id: 3, note: 'Workout Log 4' },
      { user_id: 3, note: 'Workout Log 5' },
    ]));
};
