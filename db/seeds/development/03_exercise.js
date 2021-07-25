exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('exercise').del()
    .then(() => knex('exercise').insert([
      { exercise: 'Barbell Squat', focus: 'Legs', default: true },
      { exercise: 'Barbell Bench Press', focus: 'Chest', default: true },
      { exercise: 'Deadlift', focus: 'Legs', default: true },
      { exercise: 'Standing Military Press', focus: 'Shoulders', default: true },
      { exercise: 'Straight Bar Bell Curls', focus: 'Biceps', default: true },
      { exercise: 'Alternating Dumbell Curls', focus: 'Biceps', default: true },
      { exercise: 'Steps', focus: 'Cardio', default: true },
      { exercise: 'Walk', focus: 'Cardio', default: true },
      { exercise: 'Jog', focus: 'Cardio', default: true },
      { exercise: 'Run', focus: 'Cardio', default: true },
    ]));
};
