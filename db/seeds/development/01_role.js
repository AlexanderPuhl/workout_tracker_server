/* eslint-disable func-names */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('role').del()
    .then(() => knex('role').insert([
      { name: 'admin' },
      { name: 'basic' },
    ]));
};
