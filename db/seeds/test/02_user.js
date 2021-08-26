/* eslint-disable func-names */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(() => knex('user').insert([
      {
        role_id: 1, username: 'superUser', email: 'super@test.com', name: 'Super User', password: '$2a$10$K9O.scGTAA4h5Xe23JKBWO1ig492kSvw/w8e6CfKIf6fkdcaXlxqW',
      },
      // WE WILL DELETE THESE TWO ROLES AFTER LAUNCH
      {
        role_id: 1, username: 'alex', email: 'alex@test.com', name: 'Alex Puhl', password: '$2a$10$qJiaHXU1wInqFFOsOMmB0eAfsZt4XB97VGZapb0OLJqMTX/Nbi7iu',
      },
      {
        role_id: 1, username: 'chris', email: 'chris@test.com', name: 'Chris Gonzalez', password: '$2a$10$qJiaHXU1wInqFFOsOMmB0eAfsZt4XB97VGZapb0OLJqMTX/Nbi7iu',
      },
    ]));
};
