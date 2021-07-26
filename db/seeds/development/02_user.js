exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(() => knex('user').insert([
      { role_id: 1, username: 'superUser', password: '$2a$10$K9O.scGTAA4h5Xe23JKBWO1ig492kSvw/w8e6CfKIf6fkdcaXlxqW' },
      { role_id: 1, username: 'alex', password: '$2a$10$qJiaHXU1wInqFFOsOMmB0eAfsZt4XB97VGZapb0OLJqMTX/Nbi7iu' },
      { role_id: 1, username: 'chris', password: '$2a$10$qJiaHXU1wInqFFOsOMmB0eAfsZt4XB97VGZapb0OLJqMTX/Nbi7iu' },
    ]));
};
