/* eslint-disable func-names */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('set').del()
    .then(() => knex('set').insert([
      // WORKOUT ONE
      // SQUATS
      {
        user_id: 2, workout_id: 1, number_of_sets: 2, number_of_reps: 5, weight: 45, note: 'Easy warmup',
      },
      {
        user_id: 2, workout_id: 1, number_of_sets: 1, number_of_reps: 5, weight: 135, note: 'Easy warmup',
      },
      {
        user_id: 2, workout_id: 1, number_of_sets: 1, number_of_reps: 3, weight: 145, note: 'Easy warmup',
      },
      {
        user_id: 2, workout_id: 1, number_of_sets: 1, number_of_reps: 2, weight: 155, note: 'Easy warmup',
      },
      {
        user_id: 2, workout_id: 1, number_of_sets: 3, number_of_reps: 5, weight: 165, note: 'Can go up next week.',
      },
      // WORKOUT ONE
      // BENCH PRESS
      {
        user_id: 2, workout_id: 2, number_of_sets: 2, number_of_reps: 5, weight: 45, note: 'Easy warmup',
      },
      {
        user_id: 2, workout_id: 2, number_of_sets: 1, number_of_reps: 5, weight: 135, note: 'Easy warmup',
      },
      {
        user_id: 2, workout_id: 2, number_of_sets: 1, number_of_reps: 3, weight: 145, note: 'Easy warmup',
      },
      {
        user_id: 2, workout_id: 2, number_of_sets: 1, number_of_reps: 2, weight: 155, note: 'Easy warmup',
      },
      {
        user_id: 2, workout_id: 2, number_of_sets: 3, number_of_reps: 5, weight: 165, note: 'Shoulder hurt, go down next week.',
      },
      // WORKOUT ONE
      // DEADLIFT
      {
        user_id: 2, workout_id: 3, number_of_sets: 1, number_of_reps: 5, weight: 135, note: 'Easy warmup',
      },
      {
        user_id: 2, workout_id: 3, number_of_sets: 1, number_of_reps: 5, weight: 145, note: 'Easy warmup',
      },
      {
        user_id: 2, workout_id: 3, number_of_sets: 1, number_of_reps: 3, weight: 155, note: 'Grip was slipping',
      },

      // WORKOUT TWO
      // SQUATS
      {
        user_id: 2, workout_id: 4, number_of_sets: 2, number_of_reps: 5, weight: 45, note: 'Easy warmup',
      },
      {
        user_id: 2, workout_id: 4, number_of_sets: 1, number_of_reps: 5, weight: 135, note: 'Easy warmup',
      },
      {
        user_id: 2, workout_id: 4, number_of_sets: 1, number_of_reps: 3, weight: 145, note: 'Easy warmup',
      },
      {
        user_id: 2, workout_id: 4, number_of_sets: 1, number_of_reps: 2, weight: 155, note: 'Easy warmup',
      },
      {
        user_id: 2, workout_id: 4, number_of_sets: 3, number_of_reps: 5, weight: 165, note: 'Can go up next week.',
      },
      // WORKOUT TWO
      // BENCH PRESS
      {
        user_id: 2, workout_id: 5, number_of_sets: 2, number_of_reps: 5, weight: 45, note: 'Easy warmup',
      },
      {
        user_id: 2, workout_id: 5, number_of_sets: 1, number_of_reps: 5, weight: 135, note: 'Easy warmup',
      },
      {
        user_id: 2, workout_id: 5, number_of_sets: 1, number_of_reps: 3, weight: 145, note: 'Easy warmup',
      },
      {
        user_id: 2, workout_id: 5, number_of_sets: 1, number_of_reps: 2, weight: 155, note: 'Easy warmup',
      },
      {
        user_id: 2, workout_id: 6, number_of_sets: 3, number_of_reps: 5, weight: 165, note: 'Shoulder hurt, go down next week.',
      },
      // WORKOUT TWO
      // DEADLIFT
      {
        user_id: 2, workout_id: 6, number_of_sets: 1, number_of_reps: 5, weight: 135, note: 'Easy warmup',
      },
      {
        user_id: 2, workout_id: 6, number_of_sets: 1, number_of_reps: 5, weight: 145, note: 'Easy warmup',
      },
      {
        user_id: 2, workout_id: 6, number_of_sets: 1, number_of_reps: 3, weight: 155, note: 'Grip was slipping',
      },

      // WORKOUT THREE
      // SQUATS
      {
        user_id: 2, workout_id: 7, number_of_sets: 2, number_of_reps: 5, weight: 45, note: 'Easy warmup',
      },
      {
        user_id: 2, workout_id: 7, number_of_sets: 1, number_of_reps: 5, weight: 135, note: 'Easy warmup',
      },
      {
        user_id: 2, workout_id: 7, number_of_sets: 1, number_of_reps: 3, weight: 145, note: 'Easy warmup',
      },
      {
        user_id: 2, workout_id: 7, number_of_sets: 1, number_of_reps: 2, weight: 155, note: 'Easy warmup',
      },
      {
        user_id: 2, workout_id: 7, number_of_sets: 3, number_of_reps: 5, weight: 165, note: 'Can go up next week.',
      },
      // WORKOUT THREE
      // BENCH PRESS
      {
        user_id: 2, workout_id: 8, number_of_sets: 2, number_of_reps: 5, weight: 45, note: 'Easy warmup',
      },
      {
        user_id: 2, workout_id: 8, number_of_sets: 1, number_of_reps: 5, weight: 135, note: 'Easy warmup',
      },
      {
        user_id: 2, workout_id: 8, number_of_sets: 1, number_of_reps: 3, weight: 145, note: 'Easy warmup',
      },
      {
        user_id: 2, workout_id: 8, number_of_sets: 1, number_of_reps: 2, weight: 155, note: 'Easy warmup',
      },
      {
        user_id: 2, workout_id: 8, number_of_sets: 3, number_of_reps: 5, weight: 165, note: 'Shoulder hurt, go down next week.',
      },
      // WORKOUT THREE
      // DEADLIFT
      {
        user_id: 2, workout_id: 9, number_of_sets: 1, number_of_reps: 5, weight: 135, note: 'Easy warmup',
      },
      {
        user_id: 2, workout_id: 9, number_of_sets: 1, number_of_reps: 5, weight: 145, note: 'Easy warmup',
      },
      {
        user_id: 2, workout_id: 9, number_of_sets: 1, number_of_reps: 3, weight: 155, note: 'Grip was slipping',
      },

      // WORKOUT FOUR
      // SQUATS
      {
        user_id: 2, workout_id: 10, number_of_sets: 2, number_of_reps: 5, weight: 45, note: 'Easy warmup',
      },
      {
        user_id: 2, workout_id: 10, number_of_sets: 1, number_of_reps: 5, weight: 135, note: 'Easy warmup',
      },
      {
        user_id: 2, workout_id: 10, number_of_sets: 1, number_of_reps: 3, weight: 145, note: 'Easy warmup',
      },
      {
        user_id: 2, workout_id: 10, number_of_sets: 1, number_of_reps: 2, weight: 155, note: 'Easy warmup',
      },
      {
        user_id: 2, workout_id: 10, number_of_sets: 3, number_of_reps: 5, weight: 165, note: 'Can go up next week.',
      },
      // WORKOUT FOUR
      // BENCH PRESS
      {
        user_id: 2, workout_id: 11, number_of_sets: 2, number_of_reps: 5, weight: 45, note: 'Easy warmup',
      },
      {
        user_id: 2, workout_id: 11, number_of_sets: 1, number_of_reps: 5, weight: 135, note: 'Easy warmup',
      },
      {
        user_id: 2, workout_id: 11, number_of_sets: 1, number_of_reps: 3, weight: 145, note: 'Easy warmup',
      },
      {
        user_id: 2, workout_id: 11, number_of_sets: 1, number_of_reps: 2, weight: 155, note: 'Easy warmup',
      },
      {
        user_id: 2, workout_id: 11, number_of_sets: 3, number_of_reps: 5, weight: 165, note: 'Shoulder hurt, go down next week.',
      },
      // WORKOUT FOUR
      // DEADLIFT
      {
        user_id: 2, workout_id: 12, number_of_sets: 1, number_of_reps: 5, weight: 135, note: 'Easy warmup',
      },
      {
        user_id: 2, workout_id: 12, number_of_sets: 1, number_of_reps: 5, weight: 145, note: 'Easy warmup',
      },
      {
        user_id: 2, workout_id: 12, number_of_sets: 1, number_of_reps: 3, weight: 155, note: 'Grip was slipping',
      },

      // WORKOUT FIVE
      // SQUATS
      {
        user_id: 2, workout_id: 13, number_of_sets: 2, number_of_reps: 5, weight: 45, note: 'Easy warmup',
      },
      {
        user_id: 2, workout_id: 13, number_of_sets: 1, number_of_reps: 5, weight: 135, note: 'Easy warmup',
      },
      {
        user_id: 2, workout_id: 13, number_of_sets: 1, number_of_reps: 3, weight: 145, note: 'Easy warmup',
      },
      {
        user_id: 2, workout_id: 13, number_of_sets: 1, number_of_reps: 2, weight: 155, note: 'Easy warmup',
      },
      {
        user_id: 2, workout_id: 13, number_of_sets: 3, number_of_reps: 5, weight: 165, note: 'Can go up next week.',
      },
      // WORKOUT FIVE
      // BENCH PRESS
      {
        user_id: 2, workout_id: 14, number_of_sets: 2, number_of_reps: 5, weight: 45, note: 'Easy warmup',
      },
      {
        user_id: 2, workout_id: 14, number_of_sets: 1, number_of_reps: 5, weight: 135, note: 'Easy warmup',
      },
      {
        user_id: 2, workout_id: 14, number_of_sets: 1, number_of_reps: 3, weight: 145, note: 'Easy warmup',
      },
      {
        user_id: 2, workout_id: 14, number_of_sets: 1, number_of_reps: 2, weight: 155, note: 'Easy warmup',
      },
      {
        user_id: 2, workout_id: 14, number_of_sets: 3, number_of_reps: 5, weight: 165, note: 'Shoulder hurt, go down next week.',
      },
      // WORKOUT FIVE
      // DEADLIFT
      {
        user_id: 2, workout_id: 15, number_of_sets: 1, number_of_reps: 5, weight: 135, note: 'Easy warmup',
      },
      {
        user_id: 2, workout_id: 15, number_of_sets: 1, number_of_reps: 5, weight: 145, note: 'Easy warmup',
      },
      {
        user_id: 2, workout_id: 15, number_of_sets: 1, number_of_reps: 3, weight: 155, note: 'Grip was slipping',
      },

      // WORKOUT ONE
      // SQUAT
      {
        user_id: 3, workout_id: 16, number_of_sets: 2, number_of_reps: 5, weight: 45, note: 'Easy warmup',
      },
      {
        user_id: 3, workout_id: 16, number_of_sets: 1, number_of_reps: 5, weight: 135, note: 'Easy warmup',
      },
      {
        user_id: 3, workout_id: 16, number_of_sets: 1, number_of_reps: 3, weight: 145, note: 'Easy warmup',
      },
      {
        user_id: 3, workout_id: 16, number_of_sets: 1, number_of_reps: 2, weight: 155, note: 'Easy warmup',
      },
      {
        user_id: 3, workout_id: 16, number_of_sets: 3, number_of_reps: 5, weight: 165, note: 'Can go up next week.',
      },
      // WORKOUT ONE
      // BENCH PRESS
      {
        user_id: 3, workout_id: 17, number_of_sets: 2, number_of_reps: 5, weight: 45, note: 'Easy warmup',
      },
      {
        user_id: 3, workout_id: 17, number_of_sets: 1, number_of_reps: 5, weight: 135, note: 'Easy warmup',
      },
      {
        user_id: 3, workout_id: 17, number_of_sets: 1, number_of_reps: 3, weight: 145, note: 'Easy warmup',
      },
      {
        user_id: 3, workout_id: 17, number_of_sets: 1, number_of_reps: 2, weight: 155, note: 'Easy warmup',
      },
      {
        user_id: 3, workout_id: 17, number_of_sets: 3, number_of_reps: 5, weight: 165, note: 'Shoulder hurt, go down next week.',
      },
      // WORKOUT ONE
      // DEADLIFT
      {
        user_id: 3, workout_id: 18, number_of_sets: 1, number_of_reps: 5, weight: 135, note: 'Easy warmup',
      },
      {
        user_id: 3, workout_id: 18, number_of_sets: 1, number_of_reps: 5, weight: 145, note: 'Easy warmup',
      },
      {
        user_id: 3, workout_id: 18, number_of_sets: 1, number_of_reps: 3, weight: 155, note: 'Grip was slipping',
      },
      // WORKOUT TWO
      // SQUAT
      {
        user_id: 3, workout_id: 19, number_of_sets: 2, number_of_reps: 5, weight: 45, note: 'Easy warmup',
      },
      {
        user_id: 3, workout_id: 19, number_of_sets: 1, number_of_reps: 5, weight: 135, note: 'Easy warmup',
      },
      {
        user_id: 3, workout_id: 19, number_of_sets: 1, number_of_reps: 3, weight: 145, note: 'Easy warmup',
      },
      {
        user_id: 3, workout_id: 19, number_of_sets: 1, number_of_reps: 2, weight: 155, note: 'Easy warmup',
      },
      {
        user_id: 3, workout_id: 19, number_of_sets: 3, number_of_reps: 5, weight: 165, note: 'Can go up next week.',
      },
      // WORKOUT TWO
      // BENCH PRESS
      {
        user_id: 3, workout_id: 20, number_of_sets: 2, number_of_reps: 5, weight: 45, note: 'Easy warmup',
      },
      {
        user_id: 3, workout_id: 20, number_of_sets: 1, number_of_reps: 5, weight: 135, note: 'Easy warmup',
      },
      {
        user_id: 3, workout_id: 20, number_of_sets: 1, number_of_reps: 3, weight: 145, note: 'Easy warmup',
      },
      {
        user_id: 3, workout_id: 20, number_of_sets: 1, number_of_reps: 2, weight: 155, note: 'Easy warmup',
      },
      {
        user_id: 3, workout_id: 20, number_of_sets: 3, number_of_reps: 5, weight: 165, note: 'Shoulder hurt, go down next week.',
      },
      // WORKOUT TWO
      // DEADLIFT
      {
        user_id: 3, workout_id: 21, number_of_sets: 1, number_of_reps: 5, weight: 135, note: 'Easy warmup',
      },
      {
        user_id: 3, workout_id: 21, number_of_sets: 1, number_of_reps: 5, weight: 145, note: 'Easy warmup',
      },
      {
        user_id: 3, workout_id: 21, number_of_sets: 1, number_of_reps: 3, weight: 155, note: 'Grip was slipping',
      },
      // WORKOUT THREE
      // SQUAT
      {
        user_id: 3, workout_id: 22, number_of_sets: 2, number_of_reps: 5, weight: 45, note: 'Easy warmup',
      },
      {
        user_id: 3, workout_id: 22, number_of_sets: 1, number_of_reps: 5, weight: 135, note: 'Easy warmup',
      },
      {
        user_id: 3, workout_id: 22, number_of_sets: 1, number_of_reps: 3, weight: 145, note: 'Easy warmup',
      },
      {
        user_id: 3, workout_id: 22, number_of_sets: 1, number_of_reps: 2, weight: 155, note: 'Easy warmup',
      },
      {
        user_id: 3, workout_id: 22, number_of_sets: 3, number_of_reps: 5, weight: 165, note: 'Can go up next week.',
      },
      // WORKOUT THREE
      // BENCH PRESS
      {
        user_id: 3, workout_id: 23, number_of_sets: 2, number_of_reps: 5, weight: 45, note: 'Easy warmup',
      },
      {
        user_id: 3, workout_id: 23, number_of_sets: 1, number_of_reps: 5, weight: 135, note: 'Easy warmup',
      },
      {
        user_id: 3, workout_id: 23, number_of_sets: 1, number_of_reps: 3, weight: 145, note: 'Easy warmup',
      },
      {
        user_id: 3, workout_id: 23, number_of_sets: 1, number_of_reps: 2, weight: 155, note: 'Easy warmup',
      },
      {
        user_id: 3, workout_id: 23, number_of_sets: 3, number_of_reps: 5, weight: 165, note: 'Shoulder hurt, go down next week.',
      },
      // WORKOUT THREE
      // DEADLIFT
      {
        user_id: 3, workout_id: 24, number_of_sets: 1, number_of_reps: 5, weight: 135, note: 'Easy warmup',
      },
      {
        user_id: 3, workout_id: 24, number_of_sets: 1, number_of_reps: 5, weight: 145, note: 'Easy warmup',
      },
      {
        user_id: 3, workout_id: 24, number_of_sets: 1, number_of_reps: 3, weight: 155, note: 'Grip was slipping',
      },
      // WORKOUT FOUR
      // SQUAT
      {
        user_id: 3, workout_id: 25, number_of_sets: 2, number_of_reps: 5, weight: 45, note: 'Easy warmup',
      },
      {
        user_id: 3, workout_id: 25, number_of_sets: 1, number_of_reps: 5, weight: 135, note: 'Easy warmup',
      },
      {
        user_id: 3, workout_id: 25, number_of_sets: 1, number_of_reps: 3, weight: 145, note: 'Easy warmup',
      },
      {
        user_id: 3, workout_id: 25, number_of_sets: 1, number_of_reps: 2, weight: 155, note: 'Easy warmup',
      },
      {
        user_id: 3, workout_id: 25, number_of_sets: 3, number_of_reps: 5, weight: 165, note: 'Can go up next week.',
      },
      // WORKOUT FOUR
      // BENCH PRESS
      {
        user_id: 3, workout_id: 26, number_of_sets: 2, number_of_reps: 5, weight: 45, note: 'Easy warmup',
      },
      {
        user_id: 3, workout_id: 26, number_of_sets: 1, number_of_reps: 5, weight: 135, note: 'Easy warmup',
      },
      {
        user_id: 3, workout_id: 26, number_of_sets: 1, number_of_reps: 3, weight: 145, note: 'Easy warmup',
      },
      {
        user_id: 3, workout_id: 26, number_of_sets: 1, number_of_reps: 2, weight: 155, note: 'Easy warmup',
      },
      {
        user_id: 3, workout_id: 26, number_of_sets: 3, number_of_reps: 5, weight: 165, note: 'Shoulder hurt, go down next week.',
      },
      // WORKOUT FOUR
      // DEADLIFT
      {
        user_id: 3, workout_id: 27, number_of_sets: 1, number_of_reps: 5, weight: 135, note: 'Easy warmup',
      },
      {
        user_id: 3, workout_id: 27, number_of_sets: 1, number_of_reps: 5, weight: 145, note: 'Easy warmup',
      },
      {
        user_id: 3, workout_id: 27, number_of_sets: 1, number_of_reps: 3, weight: 155, note: 'Grip was slipping',
      },
      // WORKOUT FIVE
      // SQUAT
      {
        user_id: 3, workout_id: 28, number_of_sets: 2, number_of_reps: 5, weight: 45, note: 'Easy warmup',
      },
      {
        user_id: 3, workout_id: 28, number_of_sets: 1, number_of_reps: 5, weight: 135, note: 'Easy warmup',
      },
      {
        user_id: 3, workout_id: 28, number_of_sets: 1, number_of_reps: 3, weight: 145, note: 'Easy warmup',
      },
      {
        user_id: 3, workout_id: 28, number_of_sets: 1, number_of_reps: 2, weight: 155, note: 'Easy warmup',
      },
      {
        user_id: 3, workout_id: 28, number_of_sets: 3, number_of_reps: 5, weight: 165, note: 'Can go up next week.',
      },
      // WORKOUT FIVE
      // BENCH PRESS
      {
        user_id: 3, workout_id: 29, number_of_sets: 2, number_of_reps: 5, weight: 45, note: 'Easy warmup',
      },
      {
        user_id: 3, workout_id: 29, number_of_sets: 1, number_of_reps: 5, weight: 135, note: 'Easy warmup',
      },
      {
        user_id: 3, workout_id: 29, number_of_sets: 1, number_of_reps: 3, weight: 145, note: 'Easy warmup',
      },
      {
        user_id: 3, workout_id: 29, number_of_sets: 1, number_of_reps: 2, weight: 155, note: 'Easy warmup',
      },
      {
        user_id: 3, workout_id: 29, number_of_sets: 3, number_of_reps: 5, weight: 165, note: 'Shoulder hurt, go down next week.',
      },
      // WORKOUT FIVE
      // DEADLIFT
      {
        user_id: 3, workout_id: 30, number_of_sets: 1, number_of_reps: 5, weight: 135, note: 'Easy warmup',
      },
      {
        user_id: 3, workout_id: 30, number_of_sets: 1, number_of_reps: 5, weight: 145, note: 'Easy warmup',
      },
      {
        user_id: 3, workout_id: 30, number_of_sets: 1, number_of_reps: 3, weight: 155, note: 'Grip was slipping',
      },
    ]));
};
