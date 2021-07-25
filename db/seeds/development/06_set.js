exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('set').del()
    .then(() => knex('set').insert([
      {
        user_id: 1, workout_id: 1, weight: 45, number_of_sets: 2, number_of_reps: 5, note: 'Easy warmup',
      },
      {
        user_id: 1, workout_id: 1, weight: 135, number_of_sets: 1, number_of_reps: 5, note: 'Easy warmup',
      },
      {
        user_id: 1, workout_id: 1, weight: 145, number_of_sets: 1, number_of_reps: 3, note: 'Easy warmup',
      },
      {
        user_id: 1, workout_id: 1, weight: 155, number_of_sets: 1, number_of_reps: 2, note: 'Easy warmup',
      },
      {
        user_id: 1, workout_id: 1, weight: 165, number_of_sets: 3, number_of_reps: 5, note: 'Can go up next week.',
      },
      {
        user_id: 1, workout_id: 2, weight: 45, number_of_sets: 2, number_of_reps: 5, note: 'Easy warmup',
      },
      {
        user_id: 1, workout_id: 2, weight: 135, number_of_sets: 1, number_of_reps: 5, note: 'Easy warmup',
      },
      {
        user_id: 1, workout_id: 2, weight: 145, number_of_sets: 1, number_of_reps: 3, note: 'Easy warmup',
      },
      {
        user_id: 1, workout_id: 2, weight: 155, number_of_sets: 1, number_of_reps: 2, note: 'Easy warmup',
      },
      {
        user_id: 1, workout_id: 2, weight: 165, number_of_sets: 3, number_of_reps: 5, note: 'Shoulder hurt, go down next week.',
      },
      {
        user_id: 1, workout_id: 3, weight: 135, number_of_sets: 1, number_of_reps: 5, note: 'Easy warmup',
      },
      {
        user_id: 1, workout_id: 3, weight: 145, number_of_sets: 1, number_of_reps: 5, note: 'Easy warmup',
      },
      {
        user_id: 1, workout_id: 3, weight: 155, number_of_sets: 1, number_of_reps: 3, note: 'Grip was slipping',
      },

      {
        user_id: 2, workout_id: 4, weight: 45, number_of_sets: 2, number_of_reps: 5, note: 'Easy warmup',
      },
      {
        user_id: 2, workout_id: 4, weight: 135, number_of_sets: 1, number_of_reps: 5, note: 'Easy warmup',
      },
      {
        user_id: 2, workout_id: 4, weight: 145, number_of_sets: 1, number_of_reps: 3, note: 'Easy warmup',
      },
      {
        user_id: 2, workout_id: 4, weight: 155, number_of_sets: 1, number_of_reps: 2, note: 'Easy warmup',
      },
      {
        user_id: 2, workout_id: 4, weight: 165, number_of_sets: 3, number_of_reps: 5, note: 'Can go up next week.',
      },
      {
        user_id: 2, workout_id: 5, weight: 45, number_of_sets: 2, number_of_reps: 5, note: 'Easy warmup',
      },
      {
        user_id: 2, workout_id: 5, weight: 135, number_of_sets: 1, number_of_reps: 5, note: 'Easy warmup',
      },
      {
        user_id: 2, workout_id: 5, weight: 145, number_of_sets: 1, number_of_reps: 3, note: 'Easy warmup',
      },
      {
        user_id: 2, workout_id: 5, weight: 155, number_of_sets: 1, number_of_reps: 2, note: 'Easy warmup',
      },
      {
        user_id: 2, workout_id: 5, weight: 165, number_of_sets: 3, number_of_reps: 5, note: 'Shoulder hurt, go down next week.',
      },
      {
        user_id: 2, workout_id: 6, weight: 135, number_of_sets: 1, number_of_reps: 5, note: 'Easy warmup',
      },
      {
        user_id: 2, workout_id: 6, weight: 145, number_of_sets: 1, number_of_reps: 5, note: 'Easy warmup',
      },
      {
        user_id: 2, workout_id: 6, weight: 155, number_of_sets: 1, number_of_reps: 3, note: 'Grip was slipping',
      },
    ]));
};
