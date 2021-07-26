/* eslint-disable func-names */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('workout').del()
    .then(() => knex('workout').insert([
      // ALEXS WORKOUTS
      // WORKOUT SESSION ONE
      {
        user_id: 2, workout_log_id: 1, exercise_id: 1, note: 'Squats workout was easy',
      },
      {
        user_id: 2, workout_log_id: 1, exercise_id: 2, note: 'Bench Press was easy',
      },
      {
        user_id: 2, workout_log_id: 1, exercise_id: 3, note: 'Deadlift workout was easy',
      },
      // WORKOUT SESSION TWO
      {
        user_id: 2, workout_log_id: 2, exercise_id: 1, note: 'Squats workout was easy',
      },
      {
        user_id: 2, workout_log_id: 2, exercise_id: 2, note: 'Bench Press was easy',
      },
      {
        user_id: 2, workout_log_id: 2, exercise_id: 3, note: 'Deadlift workout was easy',
      },
      // WORKOUT SESSION THREE
      {
        user_id: 2, workout_log_id: 3, exercise_id: 1, note: 'Squats workout was easy',
      },
      {
        user_id: 2, workout_log_id: 3, exercise_id: 2, note: 'Bench Press was easy',
      },
      {
        user_id: 2, workout_log_id: 3, exercise_id: 3, note: 'Deadlift workout was easy',
      },
      // WORKOUT SESSION FOUR
      {
        user_id: 2, workout_log_id: 4, exercise_id: 1, note: 'Squats workout was easy',
      },
      {
        user_id: 2, workout_log_id: 4, exercise_id: 2, note: 'Bench Press was easy',
      },
      {
        user_id: 2, workout_log_id: 4, exercise_id: 3, note: 'Deadlift workout was easy',
      },
      // WORKOUT SESSION FIVE
      {
        user_id: 2, workout_log_id: 5, exercise_id: 1, note: 'Squats workout was easy',
      },
      {
        user_id: 2, workout_log_id: 5, exercise_id: 2, note: 'Bench Press was easy',
      },
      {
        user_id: 2, workout_log_id: 5, exercise_id: 3, note: 'Deadlift workout was easy',
      },
      // CHRIS' WORKOUTS
      // WORKOUT SESSION ONE
      {
        user_id: 3, workout_log_id: 6, exercise_id: 1, note: 'Squats workout was easy',
      },
      {
        user_id: 3, workout_log_id: 6, exercise_id: 2, note: 'Bench Press was easy',
      },
      {
        user_id: 3, workout_log_id: 6, exercise_id: 3, note: 'Deadlift workout was easy',
      },
      // WORKOUT SESSION TWO
      {
        user_id: 3, workout_log_id: 7, exercise_id: 1, note: 'Squats workout was easy',
      },
      {
        user_id: 3, workout_log_id: 7, exercise_id: 2, note: 'Bench Press was easy',
      },
      {
        user_id: 3, workout_log_id: 7, exercise_id: 3, note: 'Deadlift workout was easy',
      },
      // WORKOUT SESSION THREE
      {
        user_id: 3, workout_log_id: 8, exercise_id: 1, note: 'Squats workout was easy',
      },
      {
        user_id: 3, workout_log_id: 8, exercise_id: 2, note: 'Bench Press was easy',
      },
      {
        user_id: 3, workout_log_id: 8, exercise_id: 3, note: 'Deadlift workout was easy',
      },
      // WORKOUT SESSION FOUR
      {
        user_id: 3, workout_log_id: 9, exercise_id: 1, note: 'Squats workout was easy',
      },
      {
        user_id: 3, workout_log_id: 9, exercise_id: 2, note: 'Bench Press was easy',
      },
      {
        user_id: 3, workout_log_id: 9, exercise_id: 3, note: 'Deadlift workout was easy',
      },
      // WORKOUT SESSION FIVE
      {
        user_id: 3, workout_log_id: 10, exercise_id: 1, note: 'Squats workout was easy',
      },
      {
        user_id: 3, workout_log_id: 10, exercise_id: 2, note: 'Bench Press was easy',
      },
      {
        user_id: 3, workout_log_id: 10, exercise_id: 3, note: 'Deadlift workout was easy',
      },
    ]));
};
