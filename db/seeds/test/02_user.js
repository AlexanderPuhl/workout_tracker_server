/* eslint-disable func-names */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(() => knex('user').insert([
      {
        role_id: 1, username: 'superUser', email: 'super@test.com', name: 'Super User', password: '$2a$10$gcjbOvCnr9vVTCAruq0wzu14Xcy5rpT7rxJ2Uko/QJ.6SasAroUM6',
      },
      // WE WILL DELETE THESE TWO ROLES AFTER LAUNCH
      {
        role_id: 1, username: 'alex', email: 'alex@test.com', name: 'Alex Puhl', password: '$2a$10$gcjbOvCnr9vVTCAruq0wzu14Xcy5rpT7rxJ2Uko/QJ.6SasAroUM6',
      },
      {
        role_id: 1, username: 'chris', email: 'chris@test.com', name: 'Chris Gonzalez', password: '$2a$10$gcjbOvCnr9vVTCAruq0wzu14Xcy5rpT7rxJ2Uko/QJ.6SasAroUM6',
      },
    ]));
};
