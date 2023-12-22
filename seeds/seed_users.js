
exports.seed = function (knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        { username: 'john_doe', email: 'john@example.com' },
        { username: 'jane_doe', email: 'jane@example.com' },
      ]);
    });
};
