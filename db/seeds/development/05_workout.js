exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('workout').del()
    .then(() => knex('workout').insert([
      {
        workout_log_id: 1, exercise_id: 1, note: 'Squats workout was easy',
      },
      {
        workout_log_id: 1, exercise_id: 2, note: 'Bench Press was easy',
      },
      {
        workout_log_id: 1, exercise_id: 3, note: 'Deadlift workout was easy',
      },
      {
        workout_log_id: 2, exercise_id: 1, note: 'Squats workout was easy',
      },
      {
        workout_log_id: 2, exercise_id: 2, note: 'Bench Press was easy',
      },
      {
        workout_log_id: 2, exercise_id: 3, note: 'Deadlift workout was easy',
      },
    ]));
};
