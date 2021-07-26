/* eslint-disable func-names */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('exercise').del()
    .then(() => knex('exercise').insert([
      {
        user_id: 1, exercise: 'Barbell Squat', focus: 'Legs', default: true,
      },
      {
        user_id: 1, exercise: 'Barbell Bench Press', focus: 'Chest', default: true,
      },
      {
        user_id: 1, exercise: 'Deadlift', focus: 'Legs', default: true,
      },
      {
        user_id: 1, exercise: 'Standing Military Press', focus: 'Shoulders', default: true,
      },
      {
        user_id: 1, exercise: 'Straight Bar Bell Curls', focus: 'Biceps', default: true,
      },
      {
        user_id: 1, exercise: 'Alternating Dumbell Curls', focus: 'Biceps', default: true,
      },
      {
        user_id: 1, exercise: 'Steps', focus: 'Cardio', default: true,
      },
      {
        user_id: 1, exercise: 'Walk', focus: 'Cardio', default: true,
      },
      {
        user_id: 1, exercise: 'Jog', focus: 'Cardio', default: true,
      },
      {
        user_id: 1, exercise: 'Run', focus: 'Cardio', default: true,
      },
    ]));
};
