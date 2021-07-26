exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('set').del()
    .then(() => knex('set').insert([
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
      {
        user_id: 2, workout_id: 3, number_of_sets: 1, number_of_reps: 5, weight: 135, note: 'Easy warmup',
      },
      {
        user_id: 2, workout_id: 3, number_of_sets: 1, number_of_reps: 5, weight: 145, note: 'Easy warmup',
      },
      {
        user_id: 2, workout_id: 3, number_of_sets: 1, number_of_reps: 3, weight: 155, note: 'Grip was slipping',
      },

      {
        user_id: 3, workout_id: 4, number_of_sets: 2, number_of_reps: 5, weight: 45, note: 'Easy warmup',
      },
      {
        user_id: 3, workout_id: 4, number_of_sets: 1, number_of_reps: 5, weight: 135, note: 'Easy warmup',
      },
      {
        user_id: 3, workout_id: 4, number_of_sets: 1, number_of_reps: 3, weight: 145, note: 'Easy warmup',
      },
      {
        user_id: 3, workout_id: 4, number_of_sets: 1, number_of_reps: 2, weight: 155, note: 'Easy warmup',
      },
      {
        user_id: 3, workout_id: 1, number_of_sets: 3, number_of_reps: 5, weight: 165, note: 'Can go up next week.',
      },
      {
        user_id: 3, workout_id: 5, number_of_sets: 2, number_of_reps: 5, weight: 45, note: 'Easy warmup',
      },
      {
        user_id: 3, workout_id: 5, number_of_sets: 1, number_of_reps: 5, weight: 135, note: 'Easy warmup',
      },
      {
        user_id: 3, workout_id: 5, number_of_sets: 1, number_of_reps: 3, weight: 145, note: 'Easy warmup',
      },
      {
        user_id: 3, workout_id: 5, number_of_sets: 1, number_of_reps: 2, weight: 155, note: 'Easy warmup',
      },
      {
        user_id: 3, workout_id: 5, number_of_sets: 3, number_of_reps: 5, weight: 165, note: 'Shoulder hurt, go down next week.',
      },
      {
        user_id: 3, workout_id: 6, number_of_sets: 1, number_of_reps: 5, weight: 135, note: 'Easy warmup',
      },
      {
        user_id: 3, workout_id: 6, number_of_sets: 1, number_of_reps: 5, weight: 145, note: 'Easy warmup',
      },
      {
        user_id: 3, workout_id: 6, number_of_sets: 1, number_of_reps: 3, weight: 155, note: 'Grip was slipping',
      },
    ]));
};
