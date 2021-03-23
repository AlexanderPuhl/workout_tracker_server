exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('workout').del()
    .then(() => knex('workout').insert([
      { workout: 'Squat' },
      { workout: 'Bench Press' },
      { workout: 'Deadlift' },
      { workout: 'Standing Military Press' },
      { workout: 'Straight Bar Bell Curls' },
      { workout: 'Alternating Dumbell Curls' },
      { workout: 'Steps' },
      { workout: 'Walk' },
      { workout: 'Jog' },
      { workout: 'Run' },
    ]));
};
