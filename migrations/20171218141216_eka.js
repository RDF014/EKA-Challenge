
exports.up = function(knex, Promise) {
    return Promise.all([

      knex.schema.createTableIfNotExists('users', (table) => {
        table.increments('id');
        table.string('username');
        table.string('password');
        table.string('email');
      }),

      knex.schema.createTableIfNotExists('user_info', (table) => {
        table.increments('id');
        table.integer('user_id').references('id').inTable('users');
        table.string('first_name');
        table.string('last_name');
        table.string('phone_number');
      }),

      knex.schema.createTableIfNotExists('user_address', (table) => {
        table.increments('id');
        table.integer('user_id').references('id').inTable('users');
        table.string('address');
        table.string('city');
        table.string('state');
        table.string('zip');
      })

    ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('user_info'),
    knex.schema.dropTableIfExists('user_address'),
    knex.schema.dropTableIfExists('users')
  ])
};
