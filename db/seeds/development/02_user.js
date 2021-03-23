exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(() => knex('user').insert([
      { role_id: 1, username: 'alex', password: '$2a$10$qJiaHXU1wInqFFOsOMmB0eAfsZt4XB97VGZapb0OLJqMTX/Nbi7iu' },
      { role_id: 1, username: 'chris', password: '$2a$10$qJiaHXU1wInqFFOsOMmB0eAfsZt4XB97VGZapb0OLJqMTX/Nbi7iu' },
    ]));
};
