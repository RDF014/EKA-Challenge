exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return Promise.all([
    knex('users').del(),
    knex('user_info').del(),
    knex('user_address').del()
  ]);
};
